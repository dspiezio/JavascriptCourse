// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity,
// // } from './shoppingCart.js';

// // addToCart('bread', 5);

// // console.log(price, totalQuantity);

// // import * as ShoppingCart from './shoppingCart.js';

// console.log('Importing module');

// // ShoppingCart.addToCart('beer', 6);

// // console.log(ShoppingCart.totalPrice);

// import add, { cart } from './shoppingCart.js';
// add('pizza', 2);
// add('beer', 6);
// add('bread', 1);

// console.log(cart);

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;
//   const addToCart = function (product, quantity) {
//     cart.push(product, quantity);
//     console.log(`${quantity} ${product} added to cart`);
//     orderStock(product, quantity);
//   };
//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} order from supplier`);
//   };
//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('apples', 4);

// export.addToCart = function (product, quantity) {
//     cart.push(product, quantity);
//     console.log(`${quantity} ${product} added to cart`);
//   };

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 2 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
state.user.loggedIn = false;
console.log(stateClone);

const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);
