# The Tweeter By Juan GQ Cadavid
## Overall

This is a online web app for posting comments, using  # to refer a topic, a title; comment part; date and person who post the comment.

The project is split into three apps, A web app; backend app and a register; All three of them are completed splitted and independent.

## Web App

### Structure
Angular app used to build the interface exposed to the final user, build up on components (following the Angular framework), as a sum up their are:

 - Components : A share components that are across the project, like the notification component.
 - Helpers: Components that are used to track network betweent the application and the back end.
 - Home: This is the main page, holding the next two components.
 - Tweethandel: Module used for displayin tweets, deleted them and filtering.
 - TweetCreator: Module used for creating a tweet.
 - Login: Module used for user enter point.
 - Register: Module used for creating user task.
 - Models: This is a folder that contains the data structurre for Tweet and user.
 - Services: This folder contains all the api consumed interfaces (The callings to the back end)

### Deploy
In order to deploy the web app we used the commands `npm run build` to generated the static files, those ones that are used to servered Nginx as the server for the user.

The Dockfile shows this process:

    FROM node:10.16.0-alpine as node
    
    MAINTAINER Juan Gonzalo Quiroz Cadavid
    
    copy . /app
    
    WORKDIR /app
    
    RUN npm install
    
    RUN npm run build -- --prod --configuration=dca
    
    #Stage 2-> put it on nginx
    
    FROM nginx:alpine
    
    COPY --from=node /app/dist/maybe /usr/share/nginx/html

 ## Back end

The back end were build using Python 3.6 with flask as the middledware for Http/ REST connections,
the APIs expose are:

    @app.route('/api') // Checking the connection
    @app.route('/api/tweets/save', methods=['POST']) // Saving a Tweet
    @app.route('/api/tweets/getAll', methods=['GET']) // Getting Tweets
    @app.route('/api/tweets/comment/' , methods=['POST']) // Create a comment over a Tweet	
    @app.route('/api/tweets/update/<tweet_id>' , methods=['POST']) // Update Tweet
    @app.route('/api/tweets/delete' , methods=['POST']) // Delete tweet
    @app.route('/api/users/authenticate', methods=['POST']) // Log in
    @app.route('/api/test/test_db') // Created a register and return all Tweets
    @app.route('/api/users/register', methods=['POST']) // Register

The necessary interfaces are:

    @app.route('/api') // Checking the connection
    Recive: Nothing
    Return: "Hello"

---

    @app.route('/api/tweets/save', methods=['POST']) // Saving a Tweet
    Recived: title, body, username, date 
    Return: 
    	response = {
    		'status':'err',
    		'err:': 'faild to create new tweet.'
    	}
    	or 
    	response = {
    		'status': 'done',
    		'done':'The tweet has ben save'
    	}
---

    @app.route('/api/tweets/getAll', methods=['GET'])
    Recive: Nothing
    Return: Tweets[ ] See database - Collections

---

    @app.route('/api/tweets/delete' , methods=['POST'])
    Recive: Tweet ID.
    Return: 
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
---

    @app.route('/api/users/authenticate', methods=['POST'])
    Recive: Username, password
    Return:
    if response == None:
    	response = {
    	'status': 'err',
    	'err':'User not found'
    	}
    else:
    	User // See database - Collections
---

    @app.route('/api/test/test_db')
    Recive: Nothing
    Return: Tweets[] // See database - Collections
---

    @app.route('/api/users/register', methods=['POST'])
    Recive:  username password firstName lastName
    Return:
    if is_already == None :
    	response = {
    	'status':'done',
    	'done:': 'user created'
    	}
    else:
    	response = {
    	'status': 'err',
    	'err':'User already created'
    	}
## Data base
MongoDB data base where used in order to save tweets and users, this is due to the Tweets structure.
### Models

    User = {
    	_Id: IdObject,
    	'username': String,
    	'password': String,
    	'firstName': String,
    	'lastName': String,
    	'token' : String
    }

---

    Tweet = {
    	_Id: IdObject,
    	'title':title,
    	'body': body,
    	'username': username,
    	'date': date,
    	'tags': tags,
    	'comments': None
    }

## Deploy
For deploying you only need to run the docker-compose.

    version: '3'
    services:
    	reverse:
    		container_name: reverse
    		image: nginx
    		ports:
    			- 80:80
    			- 443:443
    		restart: always
    		volumes:
    			- ./server_config/nginx_config:/etc/nginx
    			- ./server_config/SSL:/ect/ssl/private
    		depends_on:
    			- flask-app
    			- angular-app
    	flask-app:
    		container_name: flask-app
    		restart: always
    		build: ./back-end/app
    		ports:
    			- 5000:5000
    		depends_on:
    			- mongo-server
    	mongo-server:
    		container_name: mongo-server
    		image: mongo
    		volumes:
    			- ./mongo_data:/data/db
    		ports:
    			- 27017:27017
    		restart: always
    	angular-app:
    		container_name: angular-app
    		restart: always
    		build: ./front-end/maybe
    		ports:
    			- 4200:4200
    		depends_on:
    			- flask-app
