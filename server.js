const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    mongoConfig = require('./mongoDB'),
    productRoute = require('./app/product.dao');

    mongoose.Promise = global.Promise;
    mongoose.connect(mongoConfig.DB, { useNewUrlParser: true }).then(
      () => {console.log('BanWaGong Mango database is connected!') },
      err => { console.log('Can not connect to the BanWaGong Mango database!'+ err)}
    );

    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    app.use('/products', productRoute);
    const port = process.env.PORT || 4000;

    const server = app.listen(port, function(){
     console.log('Listening on port ' + port + "!");
    });