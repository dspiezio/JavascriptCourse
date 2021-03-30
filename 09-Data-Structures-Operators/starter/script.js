'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
    starterIndex = 1,
    mainIndex = 0,
    time = 'no specific time',
    address,
  }) {
    console.log(
      `Order received! They have ordered ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} and want it delivered to ${address} at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pastas with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(...otherIngredients);
  },
};

// const orderSet = new Set([
//   'pasta',
//   'pizza',
//   'risotto',
//   'pizza',
//   'pasta',
//   'pizza',
// ]);

// const question = new Map([
//   ['question', 'what is the best programing language?'],
//   [1, 'C#'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'You have chosen wisely!'],
//   [false, 'You have chosen... poorly.'],
// ]);
// // console.log(question);

// const hoursMap = new Map(Object.entries(openingHours));
// // console.log(hoursMap);
// console.log();

// for (const [key, values] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${values}`);
// }
// const reply = 3;
// // const reply = Number(prompt(question.get('question')));
// console.log(question.get(reply === question.get('correct')));

// const questionArr = [...question];
// console.log(questionArr);
// const rest = new Map();

// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');
// console.log(rest.get('name'));

// const time = 21;

// console.log(rest.get(time >= rest.get('open') && time <= rest.get('close')));

// console.log(rest.has('categories'));

// rest.delete(2);
// console.log(rest);

// rest.set([1, 2], 'Test');
// console.log(rest);
// console.log(rest.set(document.querySelector('h1'), 'Heading'));
// const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];

// const staffSet = new Set(staff);
// console.log(staff);
// console.log(staffSet);
// const staffExp = [...new Set(staff)];
// console.log(staffExp);
// console.log(
//   new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size
// );

// console.log(new Set('dominicspiezio').size);
// console.log(new Set('Dominic'));

// console.log(orderSet);

// console.log(orderSet.size);

// console.log(orderSet.has('pizza'));

// orderSet.add('garlic bread');
// orderSet.add('garlic bread');

// console.log(orderSet);
// orderSet.delete('risotto');
// console.log(orderSet);

// const arr = [];

// for (const order of orderSet) {
//   arr.push(order);
// }

// console.log(arr);
// const values = Object.values(openingHours);
// console.log(values);
// const keys = Object.keys(openingHours);
// console.log(keys);
// const entries = Object.entries(openingHours);
// console.log(entries);
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// const properties = Object.keys(openingHours);
// console.log(Object.keys(openingHours).length);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of Object.keys(openingHours)) {
//   openStr += `${day}, `;
// }
// const values = Object.values(openingHours);

// const entries = Object.entries(openingHours);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// console.log(openStr);
// console.log(values);
// console.log(entries);

// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day} we are open at ${open}`);
// }

// console.log(restaurant.order?.(0, 1) ?? 'method does not exist');
// console.log(restaurant.Risotto?.(0, 1) ?? 'method does not exist');

// const users = [{ name: 'Dominic', email: 'dspiezio@gmail.com' }];

// console.log(users[0]?.name ?? `user array empty`);

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// // for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);

// console.log(...menu.entries());

// restaurant.numGuests = 0;
// const guest2 = restaurant.numGuests ?? 10;
// console.log(guest2);
// console.log(0 ?? null);
// console.log(0 ?? 'dominic');
// console.log('dominic' ?? 0);
// console.log(false ?? 0);
// console.log(0 && 'dominic');
// console.log(true && 'dominic');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('cheese', 'pepperoni');
// }

// restaurant.orderPizza && restaurant.orderPizza('cheese', 'pepperoni');

// // console.log(3 || 'Dominic');
// // console.log(0 || 'Dominic');
// // console.log(0 || undefined);

// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// restaurant.orderPizza('bacon', 'pineapple', 'ham');
// restaurant.orderPizza('cheese');

// const add = function (...numbers) {
//   // console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);
// const x = [23, 5, 7];
// add(...x);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: '6198 Karl Rd',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: '6198 Karl Rd',
// });

// const { name, openingHours, categories } = restaurant;

// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// const {
//   sat: { open: satOpen, close: satClose },
// } = openingHours;

// console.log(satOpen, satClose);

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// let [a, b, c, d, e, f, g, h, i, j] = arr;

// console.log(a, b, c, d, e, f, g, h, i, j);

// [j, i, h, g, f, e, d, c, b, a] = [a, b, c, d, e, f, g, h, i, j];

// console.log(a, b, c, d, e, f, g, h, i, j);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;
// const [k, l] = j;
// console.log(i, j);
// console.log(k, l);
// const [a, , [b, c]] = nested;
// console.log(a, b, c);

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// const arr = [7, 8, 9];
// const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArray);

// const newGoodArray = [1, 2, ...arr];
// console.log(newGoodArray);

// console.log(...newGoodArray);
// const mainMenuCopy = [...restaurant.mainMenu];
// const newMenuItems = ['Gnocci', 'Pancetta', 'Feteccini Alfredo'];
// const menu = [...mainMenuCopy, ...newMenuItems, ...restaurant.starterMenu];
// console.log(menu);

// const str = 'Dominic';
// const letters = [...str];

// // console.log(letters.sort());

// console.log(letters);

// const ingredients = [
//   prompt("Let's make pasta! Ingrediant 1? "),
//   prompt('Ingrediant 2? '),
//   prompt('Ingrediant 3? '),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// const newRestaurant = { ...restaurant, founder: 'Dominic Spiezio' };

// // console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
// const arrEnd = [3, 4];
// const arr = [1, 2, ...arrEnd];
// console.log(arr);

// const [a, b, ...others] = arr;
// console.log(a);
// console.log(b);
// console.log(others);

// const str = '12345/78X1234XX12';
// const rolls = [...str];
// // console.log(rolls);

// for (let i = 0; i < rolls.length; i++) {
//   // console.log(rolls[i]);
//   if (rolls[i] === '/') {
//     rolls[i] = 10 - rolls[i - 1];
//   } else if (rolls[i] === 'X') {
//     rolls[i] = 10;
//   } else {
//     rolls[i] = rolls[i];
//   }
//   console.log(rolls[i]);
//   if (rolls[i] === 10) {
//     console.log(`spare or stike`);
//   }
// }

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza);
// console.log(risotto);
// console.log(...otherFood);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);
