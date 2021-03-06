from database import DataBase
from flask import Flask, request,jsonify
import json
from bson.json_util import dumps
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)
db = None

@app.route('/api')
def hello_world():
    return 'Backend Up'


@app.route('/api/tweets/save', methods=['POST'])
def tweet_save():
    #Create new post
    data = request.get_json()
    title = data['title']
    body = data['body']
    username = data['username']
    date = data['date']

    tags = find_tags(body)

    print('data ->', data)
    print('tags ->',tags)

    response = db.save_tweet(title,body,username,date,tags);

    if response == None:
        response = {
            'status':'err',
            'err:': 'faild to create new tweet.'
        }        
    else:
        response = {
            'status': 'done',
            'done':'The tweet has ben save'
        }
    return jsonify(response)
    
def find_tags(body):
    boddy_splitted = body.split(" ")
    tags = []
    for segment in boddy_splitted:
        if len(segment) > 0 and segment[0] == '#':
            tags.append(segment)

    return tags



@app.route('/api/tweets/getAll', methods=['GET'])
def tweets_all():
    tweets = db.get_tweets()
    tweets = tweets[::-1]
    print(tweets)
    return jsonify(tweets)


@app.route('/api/tweets/comment/' , methods=['POST'])
def tweet_comment():

    return "Comment a tweet, comming soon"

@app.route('/api/tweets/update/<tweet_id>' , methods=['POST'])
def tweet_update():
    return "Update a tweet, comming soon"

@app.route('/api/tweets/delete' , methods=['POST'])
def tweet_delete():
    data = request.get_json()
    tweet_id = data['_id']
    response = db.delete_tweet(tweet_id)

    print('*+++++++*+++++++*+++')
    print(response)

    if response == None:
        response = {
            'status':'err',
            'err:': 'faild to deleted the tweet.'
        }        
    else:
        if response['ok'] == 1.0:
            response = {
                'status': 'done',
                'done':'The tweet has ben delete'
            }
        else:
            response = {
                'status':'err',
                'err:': 'faild to deleted the tweet.'
            } 

    return jsonify(response)

@app.route('/api/users/authenticate', methods=['POST'])
def users_authenticate():
    data = request.get_json()

    username = data['username']
    password = data['password']

    response = db.login(username, password)

    if response == None:
        response = {
            'status': 'err',
            'err':'User not found'
        }
    else:
        response.pop('_id')

    return jsonify(response)

@app.route('/api/test/test_db')
def test_db():
    db.save_tweet("Testing DB","Reggeton! #YES","TheBackEnd","Today",['#YES'])
    return tweets_all()

@app.route('/api/users/register', methods=['POST'])
def users_interface():

    data = request.get_json()

    print(data)

    username = data['username']
    password = data['password']
    firstName = data['firstName']
    lastName = data['lastName']

    is_already = db.find_user(username)
    
    print('**********')
    if is_already == None :
        db.register(username,password,firstName,lastName)
        #response.pop('_id')
        response = {
            'status':'done',
            'done:': 'user created'
        }        
    else:
        response = {
            'status': 'err',
            'err':'User already created'
        }
    print(response)
    return jsonify(response)
    


if __name__ == '__main__':
    global DataBase

    development_state = True

    try:
        state = os.environ['ENVSTATE']
    except:
        state = os.environ['ENVSTATE'] = "DEV"



    if state != None and state == 'PROD':
        development_state = False
        print("Working on Production enviroment")
    else:
        print("Working on Development enviroment")
    
    try:
        db = DataBase(development_state)
        app.run(host= '0.0.0.0', port=5000, debug=development_state)
    except KeyboardInterrupt:
        print('Closing server...')
        





