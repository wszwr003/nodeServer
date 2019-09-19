const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    dbConfig = require('./app/DB'),
    mysql = require("mysql"); 
    mongoose = require('mongoose'), //TOSOLVE var/let/const/' ' differences!
    productMongoRoute = require('./app/product.mongo.dao');

    mongoose.Promise = global.Promise;
    mongoose.connect(dbConfig.mongoBanWaGong, { useNewUrlParser: true }).then(
      () => {console.log('BanWaGong Mango database is connected!') },
      err => { console.log('Can not connect to the BanWaGong Mango database!'+ err)}
    );
    const connection = mysql.createConnection(dbConfig.mysqlLocal);

    const app = express();
    app.use(bodyParser.json());
    app.use(cors()); //允许跨域 TOSOLVE 跨域的本质？to install the CORS module because of our both angular and node application is running on the different ports.
    app.use('/products', productMongoRoute);
    const port = process.env.PORT || 4000;

    const server = app.listen(port, function(){
     console.log('Server running on port ' + port + "!");
    });