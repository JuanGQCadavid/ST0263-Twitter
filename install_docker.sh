#!/bin/bash

echo "Checking if docker is installed"
if ! [ -x "$(command -v docker)" ]; then
    echo 'Docker is no installed.. Starting installation'
    wget -qO- https://get.docker.com/ | sh
    sudo curl -L "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    sudo usermod -aG docker user1
    
    # Auto-start on boot
    sudo systemctl enable docker
    
    #Start rigth now
    sudo systemctl start docker
    
    
else
    echo 'Docker is installed'
fi
