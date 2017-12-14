var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = {

  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Name required'
  },

  brand: {
    type: String,
    default: '',
    trim: true,
    required: 'Brand required'

  },
  description: {
    type: String,
    default: '',
    trim: true,
   required: 'Description required'

  },
    image: {
    type: String,
    default: '',
    trim: true,
    required: 'Image required'

  },
 
  price: {
    type: Number,
    trim: true,
    //default: '0',
    required: 'Price required'

  },
  
 

  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var Product = mongoose.model('Product', ProductSchema, 'products');
module.exports = Product;