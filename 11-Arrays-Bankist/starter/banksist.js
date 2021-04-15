'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const account5 = {
  owner: 'Dominic Spiezio',
  movements: [-2900, 1000, 1000, -180, 1800],
  interestRate: 1.75,
  pin: 5555,
};

const accounts = [account1, account2, account3, account4, account5];

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

let currentUser;
// Buttons
// login
btnLogin.addEventListener('click', function (event) {
  event.preventDefault();
  currentUser = accounts.find(acc => acc.username === inputLoginUsername.value);
  if (currentUser?.pin === Number(inputLoginPin.value)) {
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
  const amount = Number(inputTransferAmount.value);
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
    updateUI(currentUser);
  }
  inputTransferAmount.value = inputTransferTo.value = '';
});
// Close account
btnClose.addEventListener('click', function (event) {
  event.preventDefault();
  if (
    currentUser.pin === Number(inputClosePin.value) &&
    inputCloseUsername.value === currentUser.username
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentUser.username
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Log in to get started';
  }
  inputClosePin.value = inputCloseUsername.value = '';
});
// Request loan
btnLoan.addEventListener('click', function (event) {
  event.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    amount < currentUser.balance &&
    amount < 10000 &&
    currentUser.movements.some(mov => mov >= amount * 0.1)
  ) {
    currentUser.movements.push(amount);
    updateUI(currentUser);
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
const updateUI = function (currentUser) {
  displayMovements(currentUser);
  calcDisplayTotals(currentUser);
};
// Display Movements
const displayMovements = function (currentUser, sort = false) {
  const movs = sort
    ? currentUser.movements.slice().sort((a, b) => a - b)
    : currentUser.movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// Update totals
const calcDisplayTotals = function (currentUser) {
  // Total Balance
  const balance = currentUser.movements.reduce((accum, cur) => accum + cur, 0);
  currentUser.balance = balance;
  labelBalance.textContent = `${balance} €`;
  // Total deposits
  const depositsTotal = currentUser.movements
    .filter(mov => mov > 0)
    .reduce((sum, mov) => sum + mov, 0);

  labelSumIn.textContent = `${depositsTotal.toFixed(2)} €`;
  // Total withdrawels
  const withdrawalTotal = currentUser.movements
    .filter(mov => mov < 0)
    .reduce((sum, mov) => sum + mov, 0);
  labelSumOut.textContent = `${Math.abs(withdrawalTotal).toFixed(2)} €`;
  // Total interest
  const interest = currentUser.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * currentUser.interestRate) / 100)
    .filter(int => {
      return int >= 1;
    })
    .reduce((sum, mov) => sum + mov, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)} €`;
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

// Function Calls
createUsernames(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

/////////////////////////////////////////////////

//
