from pymongo import MongoClient, DESCENDING
from bson.objectid import ObjectId

class DataBase:
    def __init__(self):
        host = 'mongo-server'
        port = 27017
        
        #Connect to mongo
        self.client = MongoClient(host,port)

        #Create or use the dabase
        self.db = self.client['tweeter']

        #Add or use a collection
        self.users = self.db.users
        self.tweets = self.db.tweets

        #Tokenizer counter
        self.tokenCounter = 0

    def register(self,username,password,firstName,lastName):
        new_user_data = {
            'username': username,
            'password': password,
            'firstName': firstName,
            'lastName': lastName,
            'token' : None
        }
        result = self.users.insert_one(new_user_data).inserted_id

        if result == None:
            return None;

        return new_user_data
    
    def createToken(self):
        new_token = "The_Tokenizer_code_({})".format(self.tokenCounter)
        self.tokenCounter = self.tokenCounter + 1

        return new_token
        
    
    def login(self, username, password):
        
        result = self.users.find_one({'username': username,
                                      'password': password})
        
        if (result == None):
            return None

        token = self.createToken();

        self.users.update_one({'username':username,
                                'password': password},
                                {"$set": {'token': token}})
        result['token'] = token;

        return result

    def logout(self, username):
        result = self.users.update_one({'username': username},
                              {"$set":{'token':None}})
        return result
    
    def find_user(self,username):
        result = self.users.find_one({'username':username})
        return result

    def save_tweet(self,title,body,username,date,tags):
        new_tweet_data = {
            'title':title,
            'body': body,
            'username': username,
            'date': date,
            'tags': tags,
            'comments': None
        }

        result = self.tweets.insert_one(new_tweet_data).inserted_id

        if result == None:
            return None;

        return new_tweet_data
    
    def delete_tweet(self, tweet_id):
        result = self.tweets.remove(ObjectId(tweet_id))
        return result

    def get_tweets(self):
        results = self.tweets.find()#.sort('date',DESCENDING)

        if results == None:
            return [];

        tweets = []
        for tweet in results:
            print(tweet)
            id = str(tweet['_id'])
            tweet.pop('_id')
            tweet['_id'] = id

            tweets.append(tweet)


        return tweets
        