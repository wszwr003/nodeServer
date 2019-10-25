// product.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Product
let Product = new Schema({
  ProductName: {
    type: String
  },
  ProductModel: {//产品型号
    type: String
  },
  ProductDescription: {
    type: String
  },
  ProductFirmwareVersion: {//固件版本
    type: String
  },
  ProductSerialNumber: {//产品序列号
    type: String
  },
},{
    collection: 'Product'
});

module.exports = mongoose.model('Product', Product);