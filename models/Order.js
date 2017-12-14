var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var OrderSchema = {

  cname: {
    type: String,
    default: '',
    trim: true,
    required: 'Customer Name required'
  },
   pname: {
    type: String,
    default: '',
    trim: true,
    required: 'PizzaName required'
  },
    photo: {
    type: String,
    default: '',
    trim: true,
    required: 'photo required'
  },

  adress: {
    type: String,
    default: '',
    trim: true,
    required: 'Adress required'

  },
  phone: {
    type: String,
    default: '',
    trim: true,
   required: 'Phone Number required'

  },
  card: {
    type: String,
    default: '',
    trim: true,
   required: 'card Number required'

  },
  
     status: {
    type: String,
    default: '',
    trim: true,
    required: 'status required'

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

var Order = mongoose.model('Order', OrderSchema, 'orders');
module.exports = Order;

