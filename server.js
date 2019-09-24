const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    dbConfig = require('./app/DB'),
    mysql = require("mysql"),
    productMysqlRoute = require('./app/product.mysql.dao'),
    mongoose = require('mongoose'), //TOSOLVE var/let/const/' ' differences!
    productMongoRoute = require('./app/product.mongo.dao');

    // mongoose.Promise = global.Promise;
    // mongoose.connect(dbConfig.mongoBanWaGong, { useNewUrlParser: true }).then(
    //   () => {console.log('BanWaGong Mango database is connected!') },
    //   err => { console.log('Can not connect to the BanWaGong Mango database!'+ err)}
    // );
 
    //const mysqlLocalRaw = mysql.createConnection(dbConfig.mysqlLocalRaw); //使用短连接
    // mysqlLocalRaw.connect(function(err) {
    //   if (err) throw err;
    //   console.log("mysqlLocalRaw Connected!");
    //   mysqlLocalRaw.query("CREATE DATABASE IF NOT EXISTS mydb ", function (err, result) {
    //     if (err) throw err;
    //     console.log("mysqlLocalRaw Database mydb Created!");
    //   });
    //   mysqlLocalRaw.release();
    // });

    // const mysqlLocalRaw = mysql.createPool(dbConfig.mysqlLocalRaw);  //使用连接池
    // mysqlLocalRaw.getConnection(function(err, connection){
    //   if (err) throw err;
    //   console.log("mysqlLocalRaw Connected!");
    //   connection.query("CREATE DATABASE IF NOT EXISTS mydb ", function (err, result) {
    //     if (err) throw err;
    //     console.log("mysqlLocalRaw Database mydb Created!");
    //   });
    //   connection.release();
    // });

    const app = express();
    app.use(bodyParser.json());
    app.use(cors()); //允许跨域 TOSOLVE 跨域的本质？to install the CORS module because of our both angular and node application is running on the different ports.
    app.use('/product', productMysqlRoute);

    const port = process.env.PORT || 4000;
    const server = app.listen(port, function(){
     console.log('Server running on port ' + port + "!");
    });