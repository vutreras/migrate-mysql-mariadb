
const config = {
  host: process.env.DB_EXPORT_HOST || 'localhost',
  user: process.env.DB_EXPORT_USER || 'root',
  password: process.env.DB_EXPORT_PASSWORD || '',
  database: process.env.DB_EXPORT_DATABASE || '',
  port: process.env.DB_EXPORT_PORT || 3306,
  dumpFile: process.env.DB_EXPORT_DUMP_FILE || './dump.sql'
};

console.log('config', {...config, password: '*************'});

const {host, user, password, database, port} = config;

const mysqldump = require('mysqldump');

mysqldump({
  connection: {host, user, password, database, port},
  dumpToFile: config.dumpFile,
});
