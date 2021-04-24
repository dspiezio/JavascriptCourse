'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Dominic Spiezio',
  movements: [-2900, 1000, 10000, -180, 1800, -200, -300, 500],
  interestRate: 1.75,
  pin: 5555,

  movementsDates: [
    '2021-01-01T13:15:33.035Z',
    '2021-01-30T09:48:16.867Z',
    '2021-02-25T06:04:23.907Z',
    '2021-03-25T14:18:46.235Z',
    '2021-04-13T16:33:06.386Z',
    '2021-04-14T14:43:26.374Z',
    '2021-04-15T18:49:59.371Z',
    '2021-04-16T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2, account3];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////

let currentUser, timer, time;

// Buttons
// login
btnLogin.addEventListener('click', function (event) {
  event.preventDefault();
  currentUser = accounts.find(acc => acc.username === inputLoginUsername.value);
  if (currentUser?.pin === +inputLoginPin.value) {
    labelWelcome.textContent = `Welcome back, ${
      currentUser.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = ' ';
    inputLoginPin.blur();
    updateUI(currentUser);
  } else {
    containerApp.style.opacity = 0;
  }
});
// Transfer
btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  if (
    amount > 0 &&
    receiverAcc &&
    currentUser.balance >= amount &&
    receiverAcc?.username !== currentUser.username
  ) {
    currentUser.movements.push(-amount);
    receiverAcc.movements.push(amount);
    currentUser.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    updateUI(currentUser);
  }
  inputTransferAmount.value = inputTransferTo.value = '';
});
// Close account
btnClose.addEventListener('click', function (event) {
  event.preventDefault();
  if (
    currentUser.pin === +inputClosePin.value &&
    inputCloseUsername.value === currentUser.username
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentUser.username
    );
    accounts.splice(index, 1);
    logOut();
  }
  inputClosePin.value = inputCloseUsername.value = '';
});
// Request loan
btnLoan.addEventListener('click', function (event) {
  event.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);
  if (
    amount > 0 &&
    amount < currentUser.balance &&
    amount < 10000 &&
    currentUser.movements.some(mov => mov >= amount * 0.1)
  ) {
    setTimeout(function () {
      currentUser.movements.push(amount);
      currentUser.movementsDates.push(new Date().toISOString());
      updateUI(currentUser);
    }, 2500);
  }

  inputLoanAmount.value = '';
});
// Sort
let sorted = false;
btnSort.addEventListener('click', function (event) {
  event.preventDefault();

  displayMovements(currentUser, !sorted);
  sorted = !sorted;
});

// Functions
// Update UI
const updateUI = function (acc) {
  displayMovements(acc);
  calcDisplayTotals(acc);
  setLocaleDate(acc);
  time = 120;
  if (timer) clearInterval(timer);
  timer = logOutTimer();
};
// Display Movements
const displayMovements = function (acc, sort = false) {
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(acc, date);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${formattedMov}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// Update totals
const calcDisplayTotals = function (acc) {
  // Total Balance
  const balance = acc.movements.reduce((accum, cur) => accum + cur, 0);
  acc.balance = balance;
  labelBalance.textContent = formatCur(balance, acc.locale, acc.currency);
  // Total deposits
  const depositsTotal = acc.movements
    .filter(mov => mov > 0)
    .reduce((sum, mov) => sum + mov, 0);

  labelSumIn.textContent = formatCur(depositsTotal, acc.locale, acc.currency);
  // Total withdrawels
  const withdrawalTotal = acc.movements
    .filter(mov => mov < 0)
    .reduce((sum, mov) => sum + mov, 0);
  labelSumOut.textContent = formatCur(
    Math.abs(withdrawalTotal),
    acc.locale,
    acc.currency
  );
  // Total interest
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => {
      return int >= 1;
    })
    .reduce((sum, mov) => sum + mov, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};
// Create usernames
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

// Format Movements
const formatMovementDate = function (acc, date) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    return new Intl.DateTimeFormat(acc.locale).format(date);
  }
};

// Set Locales
const setLocaleDate = function (acc) {
  const now = new Date();
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  };
  labelDate.textContent = new Intl.DateTimeFormat(acc.locale, options).format(
    now
  );
};

// format currencies
const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const logOutTimer = function () {
  time = 120;
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;
    if (time === 0) {
      clearInterval(timer);
      logOut();
    }
    time--;
  };
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

const logOut = function () {
  containerApp.style.opacity = 0;
  labelWelcome.textContent = 'Log in to get started';
};

// Function Calls
createUsernames(accounts);
