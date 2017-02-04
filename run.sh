#!/bin/bash
SERVICE_REGISTRY_API=http://localhost:12001

function start {
  pm2 start $1/host.js --name $2 --watch $1 --output run-logs/$2.output.log --error run-logs/$2.error.log
}

pm2 delete all

start services/service-registry/api/dist service-registry-api
start services/service-registry/client/dist service-registry-client

API_STATUS_CODE=$(curl -s -o /dev/null -I -w "%{http_code}" $SERVICE_REGISTRY_API)
echo $API_STATUS_CODE
if ["$API_STATUS_CODE" != "200"]; then
  sleep 2s
fi

start services/categories/api/dist categories-api
start services/users/api/dist users-api
start services/users/client/dist users-client
start services/checking-account/api/dist checking-account-api
start services/checking-account/client/dist checking-account-client

sleep 1s

start application/dist application