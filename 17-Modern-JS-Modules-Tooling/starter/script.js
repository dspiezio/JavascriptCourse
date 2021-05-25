// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity,
// } from './shoppingCart.js';

// addToCart('bread', 5);

// console.log(price, totalQuantity);

// import * as ShoppingCart from './shoppingCart.js';

console.log('Importing module');

// ShoppingCart.addToCart('beer', 6);

// console.log(ShoppingCart.totalPrice);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('beer', 6);
add('bread', 1);

console.log(cart);
