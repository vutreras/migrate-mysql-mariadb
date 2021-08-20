#!/bin/bash

. .env

rm -rf $DB_EXPORT_DUMP_FILE

node dbExport.js

# corrige error entre mysql mariadb: Importing database: Use mysql_version to avoid Unknown collation: 'utf8mb4_0900_ai_ci'
sed -i '' 's/utf8mb4_0900_ai_ci/utf8mb4_unicode_ci/g' $DB_EXPORT_DUMP_FILE
