// product.mongo.dao.js
const express = require('express');
const app = express();
const productRoutes = express.Router();

// Require Product model in our routes module
let Product = require('../app/product.mongo');

//store
productRoutes.route('/add').post(function (req, res) {
  let product = new Product(req.body);
  product.save()
    .then(product => {
      res.status(200).json({'Product': 'Product has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

//get
productRoutes.route('/').get(function (req, res) {
  Product.find(function (err, products){
    if(err){
      console.log(err);
    }
    else {
      res.json(products);
    }
  });
});

//edit
productRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Product.findById(id, function (err, product){
      res.json(product);
  });
});

//update
productRoutes.route('/update/:id').post(function (req, res) {
  Product.findById(req.params.id, function(err, product) {
    if (!product)
      res.status(404).send("Record not found");
    else {
      product.ProductName = req.body.ProductName;
      product.ProductDescription = req.body.ProductDescription;
      product.ProductPrice = req.body.ProductPrice;

      product.save().then(product => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

//delete
productRoutes.route('/delete/:id').get(function (req, res) {
    Product.findByIdAndRemove({_id: req.params.id}, function(err, product){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = productRoutes;
//exports = productRoutes;