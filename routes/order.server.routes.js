 module.exports = function(app){
 
 var orders = require('./../controllers/order.server.controller.js');
  var products = require('./../controllers/products.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');
 
 

 
app.route('/product/orders/all')
    .get(orders.orderlist);
 
 app.route('/product/orders/done')
    .get(orders.done);
    
 app.route('/product/ordered/:orderId')
    .get(orders.view);
 
 app.route('/api/orders')
	.get(orders.list)
	.post(orders.create);
	
app.route('/api/orders/edit/:orderId')
	.get(orders.read)
	.put( orders.update);

  app.route('/api/orders/:orderId')
	.get(orders.read)
  .delete(orders.delete);

	



app.param('orderId', orders.orderByID);
 
 
 }