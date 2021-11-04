
const config = {
  host: process.env.DB_IMPORT_HOST || 'localhost',
  user: process.env.DB_IMPORT_USER || 'root',
  password: process.env.DB_IMPORT_PASSWORD || '',
  database: process.env.DB_IMPORT_DATABASE || '',
  port: process.env.DB_IMPORT_PORT || 3306,
  dumpFile: process.env.DB_IMPORT_DUMP_FILE || './dump.sql'
};

console.log('config', {...config, password: '*************'});

const {host, user, password, database, port} = config;

const Importer = require('mysql2-import');
const importer = new Importer({host, user, password, database, port});

// New onProgress method, added in version 5.0!
importer.onProgress(progress=>{
  let percent = Math.floor(progress.bytes_processed / progress.total_bytes * 10000) / 100;
  console.log(`${percent}% Completed`);
});

importer.import(config.dumpFile).then(()=>{
  let files_imported = importer.getImported();
  console.log(`${files_imported.length} SQL file(s) imported.`);
}).catch(err=>{
  console.error(err);
});
