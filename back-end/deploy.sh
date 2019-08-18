
# docker run --name mongodb mongo:4.0.4
# docker run -d -p 27017-27019:27017-27019 --name mongodb mongo:4.0.4
# docker exec -it mongodb bash

# #On bash

# mongo
# show dbs
# use tweeter
# show collections
# db.users.find().pretty()

#docker build --tag:<name> .

#Clean containers
docker rm -f $(docker ps -a -q)

#Clear imgs
#docker rmi -f $(docker images -a -q)

docker-compose build

docker-compose up