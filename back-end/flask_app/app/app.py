from database import DataBase
from flask import Flask, request,jsonify
import json
from bson.json_util import dumps
app = Flask(__name__)
db = None

@app.route('/')
def hello_world():
    return 'Hello perras'

@app.route('/users', methods=['POST', 'GET'])
def users_interface():
    #return jsonify(data)
    if request.method == 'POST':
        data = json.loads(request.args)
        return data
        # username = request.args.get('username')
        # password = request.args.get('password')
        # firstName = request.args.get('firstName')
        # lastName = request.args.get('lastName')

        # is_already = db.find_user(username)

        # print('**********')
        # if is_already == None :
        #     response = db.register(username,password,firstName,lastName)
        # else:
        #     response = [{
        #         'err':'User already created'
        #     }]
        
        # return response

if __name__ == '__main__':
    global DataBase
    db = DataBase()
    try:
        debug=True
        app.run(host= '0.0.0.0', port= 5000, debug=debug)
    except KeyboardInterrupt:
        print('Closing server...')
        





