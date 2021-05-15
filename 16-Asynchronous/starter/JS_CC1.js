'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

btn.addEventListener('click', function () {
  const whereAmI = new WhereAmI();
});

class WhereAmI {
  coord;
  country;
  constructor() {
    this._getLocation();
  }

  _getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._currentPosition.bind(this),
        function () {
          alert(`Could not get your location`);
        }
      );
    }
  }
  _currentPosition(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    this.coord = [latitude, longitude];
    fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`)
      .then(response => response.json())
      .then(data => this.getCountryData(data.country));
  }
  getCountryData(country) {
    this.getJSON(
      `https://restcountries.eu/rest/v2/name/${country}`,
      `Country not found`
    )
      .then(data => {
        this.renderCountry(data[0]);

        const [...neighbour] = data[0].borders;

        if (!neighbour) throw new Error(`no neighbor found!`);

        neighbour.forEach(neighbour => {
          return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`)
            .then(response => response.json())
            .then(data => this.renderCountry(data, 'neighbour'));
        });
      })
      .catch(err => {
        this.renderError(`Something went wrong ${err.message}`);
      })
      .finally(() => (countriesContainer.style.opacity = 1));
  }
  getJSON(url, errorMessage = 'Something went wrong') {
    return fetch(url).then(response => {
      if (!response.ok) throw new Error(`${errorMessage}(${response.status})`);
      return response.json();
    });
  }
  renderCountry(data, className = '') {
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
  }
  renderError(msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
  }
}
