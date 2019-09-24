const mysql = require("mysql");
const dbConfig = require('./app/DB'),
const myconnect = mysql.createPool(dbConfig.mysqlLocalRaw);  //使用连接池
exports.module = myconnect;
