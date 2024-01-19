import { Module, createRequire } from 'node:module';
const require = createRequire(import.meta.url);

var ip = require("ip");

const conn = require('knex')({
  client: 'mysql',
  connection: {
    host : ip,
    port : 3306,
    user : 'user',
    password : 'user',
    database : 'mydb'
  },
  pool: { min: 0, max: 7 }
});

export default conn;
