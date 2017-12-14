var mongoose = require('mongoose');
var Order = require('./../models/Order.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');



exports.orderlist = function(req, res) {
  Order.find(function(err, data) {
    if (err) {
      return res.status(400).send({

          message: errorHandler.getErrorMessage(err)
        });
    } else {
      console.log("api called");
      console.log(data);

      res.render('./../public/views/admin/order_list.ejs', {
    		user: req.user || null,
    		request: req,
        orders: data
    	});
    	
    	
    	
    }
  });

};

exports.order = function(req, res){
  res.render('./../public/views/order/order.ejs', {
    user: req.user || null,
    request: req
  });
};



exports.done = function(req, res){
  res.render('./../public/views/order/ordered.ejs', {
    user: req.user || null,
    request: req
  });
};

exports.view = function(req, res){
  res.render('./../public/views/admin/order_detail.ejs', {
    user: req.user || null,
    request: req
  });
};


module.exports.list = function(req, res) {
  Order.find(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      console.log("api called");

      res.status(200).send(data);
    }
  });
};

module.exports.create = function(req, res) {
  var order = new Order(req.body);
  order.user = req.user;
  order.save(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports.read = function(req, res) {
  res.json(req.order);
};




exports.delete = function(req, res) {
	var order = req.order;
	order.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(order);
		}
	});
};


module.exports.update = function(req, res) {
  var order = req.order;
  	order = _.extend(order, req.body);
  	order.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(order);
  		}
  	});
};

exports.orderByID = function(req, res, next, id) {
	Order.findById(id).populate('user', 'email').exec(function(err, order) {
		if (err) return next(err);
		if (!order) return next(new Error('Failed to load order ' + id));
		req.order = order;
		next();
	});
};