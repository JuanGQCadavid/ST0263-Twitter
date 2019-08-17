
docker run --name mongodb mongo:4.0.4
docker run -d -p 27017-27019:27017-27019 --name mongodb mongo:4.0.4
docker exec -it mongodb bash

#On bash

mongo
show dbs
use tweeter
show collections
db.users.find().pretty()