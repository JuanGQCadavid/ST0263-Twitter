#!/bin/bash

echo "Checking if docker is installed"
if ! [ -x "$(command -v docker)" ]; then
    echo 'Docker is no installed.. Starting installation'
    wget -qO- https://get.docker.com/ | sh
    sudo curl -L "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    sudo usermod -aG docker user1
    
else
    echo 'Docker is installed'
fi

echo "Removing old dockers .."
docker stop mongo-db-service
docker rm mongo-db-service

echo "Done..."

echo "Removing old img ..."
docker rmi mongo-db-img
echo "Done."

echo "Building img"
docker build -t mongo-db-img .
echo "Done."

echo "Creating volume ..."
docker volume mongo-db-volume
echo "Done"

echo "Creating container for web app services..."
docker run -d --name mongo-db-service -p 27017:27017 mongo-db-img
echo "Done."

