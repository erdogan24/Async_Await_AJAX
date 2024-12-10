"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//     <article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>

//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)} people</p>

//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>

//             <p class="country__row"><span>${data.currencies[0].name}</p>
//           </div>
//         </article>

//   `;
//     countriesContainer.insertAdjacentHTML("befored", html);
//     countriesContainer.style.opacity = 1;
//   });
// };
// getCountryData("portugal");

/////////////////////////////////////////////////

const renderCountry = function (data) {
  const html = `
        <article class="country">
              <img class="country__img" src="${data.flag}" />
              <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
    
                <p class="country__row"><span>👫</span>${(
                  +data.population / 1000000
                ).toFixed(1)} people</p>
    
                <p class="country__row"><span>🗣️</span>${
                  data.languages[0].name
                }</p>
    
                <p class="country__row"><span>${data.currencies[0].name}</p>
              </div>
            </article>
      
      `;
  countriesContainer.insertAdjacentHTML("befored", html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open(
    "GET",
    `https://countries-api-836d.onrender.com/countries/${country}`
  );
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    renderCountry(data);

    const [neighbour] = data.borders;

    if (!neighbour) return;

    const request2 = new XMLHttpRequest();
    request2.open(
      "GET",
      `https://countries-api-836d.onrender.com/countries/${country}`
    );
    request2.send();

    request2.addEventListener("load", function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);
    });
  });
};
getCountryAndNeighbour("portugal");
