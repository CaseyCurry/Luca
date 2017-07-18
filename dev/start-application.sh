#!/bin/bash

export TOKEN_SECRET=123
[[ $1 = "--skip-build" ]] && skip_build=true || skip_build=false

function start {
  app_dir=$1
  app_name=$2
  skip_build=$3

  if [ $skip_build ]; then
    ./node_modules/.bin/webpack
  fi

  pm2 start $app_dir/dist/host.js --name $app_name --watch $app_dir/dist --output ~/github/Luca/dev/run-logs/$app_name.output.log --error ~/github/Luca/dev/run-logs/$app_name.error.log
}

pm2 delete all

start ~/github/Luca/dev/services/service-registry/api service-registry-api $skip_build
start ~/github/Luca/dev/services/service-registry/client service-registry-client $skip_build
start ~/github/Luca/dev/services/categories/api categories-api $skip_build
start ~/github/Luca/dev/services/users/api users-api $skip_build
start ~/github/Luca/dev/services/users/client users-client $skip_build
start ~/github/Luca/dev/services/checking-account/api checking-account-api $skip_build
start ~/github/Luca/dev/services/checking-account/client checking-account-client $skip_build

sleep 1s

start ~/github/Luca/dev/application application $skip_build
