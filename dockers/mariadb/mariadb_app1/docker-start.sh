#!/bin/bash

. .env

docker-compose up -d && \
echo "
========================================

      server: localhost:$DB_PORT
        user: $DB_USER
        password: $DB_PWD

========================================"
