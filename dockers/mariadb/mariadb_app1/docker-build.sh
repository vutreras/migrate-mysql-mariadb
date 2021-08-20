#!/bin/bash

. .env

docker-compose build
bash docker-start.sh
