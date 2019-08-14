from database import DataBase
from flask import Flask, request,jsonify
import json
from bson.json_util import dumps
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
db = None

@app.route('/')
def hello_world():
    return 'Hello perras'


@app.route('/tweets/save', methods=['POST'])
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
        if segment[0] == '#':
            tags.append(segment)

    return tags

@app.route('/tweets/comment/<tweet_id>' , methods=['POST'])
def tweet_comment():
    return "Comment a tweet, comming soon"

@app.route('/tweets/update/<tweet_id>' , methods=['POST'])
def tweet_update():
    return "Update a tweet, comming soon"

@app.route('/tweets/delete/<tweet_id>' , methods=['POST'])
def tweet_delete():
    return "Delete a tweet, comming soon"



@app.route('/users/authenticate', methods=['POST'])
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


@app.route('/users/register', methods=['POST'])
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
    db = DataBase()
    try:
        debug=True
        app.run(host= '0.0.0.0', port= 5000, debug=debug)
    except KeyboardInterrupt:
        print('Closing server...')
        





