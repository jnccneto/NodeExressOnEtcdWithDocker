# NodeExressOnEtcdWithDocker
Sample Project to show How to use Node Express with Etcd and Docker

Creates a simple Etcd cluster 
Uses a Node Express to test register and usage:
express main.js registers on etcd and publishs to endpoints

ping

sample command check

list

lists all services registered in etcd


Enviroment is Linux / Docker 


Server: Docker Engine - Community
 Engine:
  Version:          18.09.1
  API version:      1.39 (minimum version 1.12)
  Go version:       go1.10.6
  Git commit:       4c52b90
  Built:            Wed Jan  9 19:06:30 2019
  OS/Arch:          linux/amd64
  Experimental:     false


// Command to build //////////////////////

docker-compose up --force-recreate --build


// Command to check express  //////////////

curl  http://127.0.0.1:8000/ping

curl  http://127.0.0.1:8000/list
