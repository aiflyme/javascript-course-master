// 270 An Overview of Modern JavaScript Development
// 271 An Overview of Modules in JavaScript
// 272 Exporting and Importing in ES6 Modules

//Importing module
// import { addToCart, totalPrice as sumPrice, tq } from './shoppingCart.js';

// addToCart('bread', 5);
// console.log(sumPrice, tq);
console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice, ShoppingCart.tq);

//prettier-ignore
import add, {cart,  addToCart,  totalPrice as sumPrice,  tq} from './shoppingCart.js';

addToCart('bread', 5);
console.log(sumPrice, tq);

add('pizza', 2);
add('bread', 5);
add('apples', 6);

console.log(cart);

cart.forEach(e => {
  console.log(e.product, e.quantity);
});

// 273 Top-Level await (ES2022)
//no need use
// async function x() {

// }
// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return { title: data.at(-1).title, text: data.at(-1).body };

  //then
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(res => {
  //     if (!res.ok) return;
  //     return res.json();
  //   })
  //   .then(data => {
  //     console.log(data);
  //     return { title: data.at(-1).title, text: data.at(-1).body };
  //   });
};

console.log('Start fetching');
const lastPost = await getLastPost();

console.log(lastPost);

const getLastPost2 = function () {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      if (!res.ok) return;

      return res.json();
    })
    .then(data => {
      return { title: data.at(-1).title, text: data.at(-1).body };
    });
};

const lastPost2 = getLastPost2().then(last => {
  return last;
});
console.log(lastPost2);
console.log('Something');

// 274 The Module Pattern
const shoppingCart2 = (function () {
  const cart = [];
  const shoppingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

shoppingCart2.addToCart('apple', 4);
shoppingCart2.addToCart('pizza', 2);

// 275 CommonJS Modules
//Export
// export addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${quantity} ${product} added to cart`);
// };

// //Import
// const {addToCart} = require('./shoppingCart.js')

// 276 A Brief Introduction to the Command Line
