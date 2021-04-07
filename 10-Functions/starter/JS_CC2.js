'use strict';

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'green';
  document.querySelector('body').addEventListener('click', function () {
    let color = header.style.color;
    if (header.style.color === 'green') {
      header.style.color = 'blue';
    } else {
      header.style.color = 'green';
    }
  });
})();
