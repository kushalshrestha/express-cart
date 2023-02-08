var express = require('express');
var router = express.Router();
var product = require('./../model/product');

const products = [
new product("Clock", "To tell the time.", 15, "https://assets.website-files.com/5d0754d8b6e7f897e55ae9bc/5e4bdda7d87988621de332dd_simply-productimg-6.jpg"),
new product("Chair", "To sit on.", 200, 'https://assets.website-files.com/5d0754d8b6e7f897e55ae9bc/5e4bde965d8bac2ad7160b2e_simply-productimg-4.jpg'),
new product("Light", "To see things.", 394, "https://assets.website-files.com/5d0754d8b6e7f897e55ae9bc/5e4bdf797c41e5725aee16df_simply-productimg-1.jpg"),
new product("Table", "To put things on.", 302, "https://assets.website-files.com/5d0754d8b6e7f897e55ae9bc/5e4bdf006640d06648846d06_simply-productimg-3.jpg"),
new product("Zebra Frame", "A picture frame showcasing zebra skin.", 44934, "https://assets.website-files.com/5d0754d8b6e7f897e55ae9bc/5e4bdf24dec3494629cc1926_simply-productimg-7.jpg"),
new product("Sofa", "To chill on.", 230, "https://assets.website-files.com/5d0754d8b6e7f897e55ae9bc/5e4bdde6c1617c0acf787ae3_simply-productimg-2.jpg"),
new product("Dining Chair", "To sit on while dining", 34, "https://assets.website-files.com/5d0754d8b6e7f897e55ae9bc/5e4bdeefdec349268ccc173b_simply-productimg-9.jpg"),
new product("Wooden Chair", "To sit on, but less comfortably.", 232, "https://assets.website-files.com/5d0754d8b6e7f897e55ae9bc/5e4bde857c41e5fb5dee10b9_simply-productimg-5.jpg"),
new product("Bowls", "To serve soup in.", 2, "https://assets.website-files.com/5d0754d8b6e7f897e55ae9bc/5e4bde13dec3492863cc1310_simply-productimg-8.jpg")
];

router.get('/', (req, res)=>{
  let cart=[];
  if(req.session.cart) cart = req.session.cart;
  res.render('index.ejs',{title: 'Express Cart',cart : cart});
});

router.get('/p', (req, res)=>{
  let pnumber = req.query.pnumber;
  let product = products[pnumber];
  let cart=[];
  if(req.session.cart) cart = req.session.cart;
  res.render('product.ejs', {cart: cart, cart_size: cart.length, product: product});
});


router.post('/add', (req, res) => {
  const productIndex = req.body.i;
  let cart = [];
  if (req.session.cart){
    cart = req.session.cart;
  }
  cart.push(product[productIndex]);
  req.session.cart = cart;
  res.redirect('/');
});

router.get('/cart', (req, res)=>{
  let cart = [];
  if(req.session.cart) {
    cart = req.session.cart;
  }
  // res.render('cart.ejs' ,{cart : cart, cart_size: cart.length});
  res.render('cart.ejs' ,{cart : products, cart_size: cart.length});
});

router.get('/contact', (req, res)=>{
  let cartLength = 0;
  if(req.session.cart) {
    cartLength = req.session.cart.length
  }
  res.render('contact.ejs', {cart_size : cartLength});
});


module.exports = router;
