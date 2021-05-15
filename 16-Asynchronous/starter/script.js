'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const renderCountry = function (data, className = '') {
  const html = `        
            <article class="country ${className}">
                <img class="country__img" src="${data.flag}" />
                <div class="country__data">
                    <h3 class="country__name">${data.name}</h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${(
                      +data.population / 1000000
                    ).toFixed(1)} million people</p>
                    <p class="country__row"><span>🗣️</span>${
                      data.languages[0].name
                    }</p>
                    <p class="country__row"><span>💰</span>${
                      data.currencies[0].name
                    }</p>
                </div>
            </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const getJSON = function (url, errorMessage = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMessage}(${response.status})`);
    return response.json();
  });
};
///////////////////////////////////////
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);

//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     const html = `
//     <article class="country">
//         <img class="country__img" src="${data.flag}" />
//         <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)} million people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].name
//             }</p>
//         </div>
//     </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('gb');
// getCountryData('usa');
// getCountryData('germany');

// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);

//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     renderCountry(data);
//     getCountryNeighbour(data);
//   });
// };

// const getCountryNeighbour = function (data) {
//   const [...neighbour] = data.borders;
//   if (!neighbour) return;

//   neighbour.forEach(neighbour => {
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);

//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('usa');

// const getCountryDataPromise = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status})`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const [...neighbour] = data[0].borders;
//       neighbour.forEach(neighbour => {
//         return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`)
//           .then(response => response.json())
//           .then(data => renderCountry(data, 'neighbour'));
//       });
//     })
//     .catch(err => renderError(`Something went wrong ${err.message}`))
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// const getCountryData = function (country) {
//   getJSON(
//     `https://restcountries.eu/rest/v2/name/${country}`,
//     `Country not found`
//   )
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) throw new Error(`no neighbor found!`);

//       return getJSON(
//         `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//         `Country not found`
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       renderError(`Something went wrong ${err.message}`);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// btn.addEventListener('click', function () {
//   const reply = prompt(`What country are you in?`);
//   getCountryData(`${reply}`);
// });

// console.log(`Test start`);
// setTimeout(() => console.log(`0 sec timer`), 0);
// Promise.resolve(`Resolved promise 1`).then(res => console.log(res));

// Promise.resolve(`Resolved promise 2`).then(res => {
//   for (let i = 0; i < 1; i++) {}
//   console.log(res);
// });
// console.log(`Test End`);

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log(`Lottery draw is happening`);
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve(`You win!`);
//     } else {
//       reject(new Error(`You lost your money...`));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log(`I waited for 2 seconds`);
//     return wait(1);
//   })
//   .then(() => console.log(`I waited for 1 second`));

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition().then(pos => {
    const { latitude: lat, longitude: lng } = pos.coords;

    return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
  });
};

btn.addEventListener('click', function () {
  whereAmI();
});
