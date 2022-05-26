import mysql from "mysql";
import 'dotenv/config'
import __prodotto__delete__ from "./prodotto/crud/mysql_prodotto_delete";

var connection =  mysql.createConnection({
  host     : process.env.HOST,
  user     : process.env.DATABASE_USER,
  password : process.env.DATABASE_PSW,
  database : process.env.DATABASE_NOME
});
export default connection;