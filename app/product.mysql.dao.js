// product.mysql.dao.js
const express = require('express');
const productRoutes = express.Router();
const mysql = require("mysql");
const dbConfig = require('./DB');
const mysqlConnect = mysql.createPool(dbConfig.mysqlLocalProductDB);  //使用连接池
//Add Product
productRoutes.route('/add').post(function (req, res) {
    console.log('1.ProductName: '+req.body.ProductName+', ProductModel: '+req.body.ProductModel+', ProductDescription: '+req.body.ProductDescription);
    mysqlConnect.getConnection(function(error, connection){
        if (error) throw err;
        console.log("2.MySQL Connected!");
        var string = 'INSERT INTO `product_inf` VALUES(NULL,\''+req.body.ProductName+'\',\''+req.body.ProductModel+'\',\''+req.body.ProductDescription+'\');';
        console.log('3.MySQL Instructions: ', string); 
        connection.query(string, function (error, result, fields) { 
            if (error){
                if(error.code=='ER_DUP_ENTRY'){//判断是不是重复命名project
                    console.log('ERR.ER_DUP_ENTRY'); 
                }
                else
                    throw error; 
            }
            console.log('4.MySQL Results: ', result); 
            connection.release();//TOSOLVE: 连接池需不需要release
            console.log("5.MySQL Release!");

        });
        res.json('Update complete');
        //res.status(400).send("unable to update the database");
    });
});
//GET PRODUCT LIST
productRoutes.route('/list').get(function (req, res) {
    mysqlConnect.getConnection(function(error, connection){
        if (error) throw err;
        console.log("2.MySQL Connected!");
        var string = 'SELECT * FROM `product_inf`;';
        console.log('3.MySQL Instructions: ', string); 
        connection.query(string, function (error, result, fields) { 
            if (error){
                if(error.code=='ER_DUP_ENTRY'){//判断是不是重复命名project
                    console.log('ERR.ER_DUP_ENTRY'); 
                }
                else
                    throw error; 
            } 
            console.log('4.MySQL Results: ',result); 
            res.json(result);
            connection.release();//TOSOLVE: 连接池需不需要release
            console.log("5.MySQL Release!");
        });
        //res.status(400).send("unable to update the database");
    });
});
//DELETE PRODUCT
productRoutes.route('/delete').post(function (req, res) {
    console.log('1.ProductName: DELETE FROM `product_inf` WHERE product_name = \''+req.body.ProductName+'\';');
    mysqlConnect.getConnection(function(error, connection){
        if (error) throw err;
        console.log("2.MySQL Connected!");
        var string = 'DELETE FROM `product_inf` WHERE product_name = \''+req.body.ProductName+'\';';
        console.log('3.MySQL Instructions: ', string); 
        connection.query(string, function (error, result, fields) { 
            if (error){
                if(error.code=='ER_DUP_ENTRY'){//判断是不是重复命名project
                    console.log('ERR.ER_DUP_ENTRY'); 
                }
                else
                    throw error; 
            }
            console.log('4.MySQL Results: ', result); 
            connection.release();//TOSOLVE: 连接池需不需要release
            console.log("5.MySQL Release!");

        });
        res.json('Update complete');
        //res.status(400).send("unable to update the database");
    });
});
//UPDATE PRODUCT
productRoutes.route('/update').post(function (req, res) {
    console.log('1.ProductName: DELETE FROM `product_inf` WHERE product_name = \''+req.body.ProductName+'\';');
    mysqlConnect.getConnection(function(error, connection){
        if (error) throw err;
        console.log("2.MySQL Connected!");
        var string = 'UPDATE `product_inf` SET WHERE product_name =';
        console.log('3.MySQL Instructions: ', string); 
        connection.query(string, function (error, result, fields) { 
            if (error){
                if(error.code=='ER_DUP_ENTRY'){//判断是不是重复命名project
                    console.log('ERR.ER_DUP_ENTRY'); 
                }
                else
                    throw error; 
            }
            console.log('4.MySQL Results: ', result); 
            connection.release();//TOSOLVE: 连接池需不需要release
            console.log("5.MySQL Release!");

        });
        res.json('Update complete');
        //res.status(400).send("unable to update the database");
    });
});
module.exports = productRoutes;