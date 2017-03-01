#!/bin/bash

function start {
  app_dir=$1
  app_name=$2
  cd $app_dir
  ./node_modules/.bin/webpack
  pm2 start $app_dir/dist/host.js --name $app_name --watch $app_dir/dist --output ../run-logs/$app_name.output.log --error ../run-logs/$app_name.error.log
}

pm2 delete all

start ~/github/Luca/dev/services/service-registry/api service-registry-api
start ~/github/Luca/dev/services/service-registry/client service-registry-client
start ~/github/Luca/dev/services/categories/api categories-api
start ~/github/Luca/dev/services/users/api users-api
start ~/github/Luca/dev/services/users/client users-client
start ~/github/Luca/dev/services/checking-account/api checking-account-api
start ~/github/Luca/dev/services/checking-account/client checking-account-client

sleep 1s

start ~/github/Luca/dev/application application
