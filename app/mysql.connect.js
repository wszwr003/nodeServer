const mysql = require("mysql");
const dbConfig = require('./DB');
let myconnect = mysql.createPool(dbConfig.mysqlLocalRaw);  //使用连接池
exports.module = myconnect;
