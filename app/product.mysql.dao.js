// product.mysql.dao.js
const express = require('express');
const productRoutes = express.Router();
const mysqlConnect = require('../app/mysql.connect');

//Add Product
productRoutes.route('/add').post(function (req, res) {
    mysqlConnect.getConnection(function(error, connection){
        if (error) throw err;
        console.log("MySQL Connected!");
        var string = 'INSERT INTO `product_inf` VALUES(NULL,\''+req.query.product_name+'\',\''+rep.query.product_model+'\',\''+req.query.product_description+'\');';
        console.log('MySQL Instructions: ', string); 
        connection.query(string, function (error, result, fields) { 
            if (error){
                if(error.code=='ER_DUP_ENTRY'){//判断是不是重复命名project
                }
                throw error; 
            }
            console.log('MySQL Results: ', result); 
        });
        connection.release();//TOSOLVE: 连接池需不需要release
        console.log("MySQL release!");
    });
    
  });