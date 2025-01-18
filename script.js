"use strict";

// const btn = document.querySelector(".btn-country");
// const countriesContainer = document.querySelector(".countries");

// ///////////////////////////////////////
// // const getCountryData = function (country) {
// //   const request = new XMLHttpRequest();
// //   request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
// //   request.send();

// //   request.addEventListener("load", function () {
// //     const [data] = JSON.parse(this.responseText);
// //     console.log(data);

// //     const html = `
// //     <article class="country">
// //           <img class="country__img" src="${data.flag}" />
// //           <div class="country__data">
// //             <h3 class="country__name">${data.name}</h3>
// //             <h4 class="country__region">${data.region}</h4>

// //             <p class="country__row"><span>👫</span>${(
// //               +data.population / 1000000
// //             ).toFixed(1)} people</p>

// //             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>

// //             <p class="country__row"><span>${data.currencies[0].name}</p>
// //           </div>
// //         </article>

// //   `;
// //     countriesContainer.insertAdjacentHTML("befored", html);
// //     countriesContainer.style.opacity = 1;
// //   });
// // };
// // getCountryData("portugal");

// /////////////////////////////////////////////////

// const renderCountry = function (data, className = "") {
//   const html = `
//         <article class="country ${className}">
//               <img class="country__img" src="${data.flag}" />
//               <div class="country__data">
//                 <h3 class="country__name">${data.name}</h3>
//                 <h4 class="country__region">${data.region}</h4>

//                 <p class="country__row"><span>👫</span>${(
//                   +data.population / 1000000
//                 ).toFixed(1)} people</p>

//                 <p class="country__row"><span>🗣️</span>${
//                   data.languages[0].name
//                 }</p>

//                 <p class="country__row"><span>${data.currencies[0].name}</p>
//               </div>
//             </article>

//       `;
//   countriesContainer.insertAdjacentHTML("befored", html);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open(
//     "GET",
//     `https://countries-api-836d.onrender.com/countries/${country}`
//   );
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     renderCountry(data);

//     const [neighbour] = data.borders;

//     if (!neighbour) return;

//     const request2 = new XMLHttpRequest();
//     request2.open(
//       "GET",
//       `https://countries-api-836d.onrender.com/countries/${country}`
//     );
//     request2.send();

//     request2.addEventListener("load", function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, "neighbour");
//     });
//   });
// };
// getCountryAndNeighbour("portugal");

// setTimeout(() => {
//   console.log("1 second passed");
// }, 1000);

//////////////////////////////////////////////////////////

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?
// geoit=json`)
//     .then((res) => {
//       if (!res.ok) throw new Error(`problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`You are in ${data.city},${data.country}`);
//     })
//     .catch((err) => console.error(`${err.message}`));
// };
// whereAmI(52.503, 14.345);
// whereAmI(32.703, 34.345);
// whereAmI(-22.403, 54.345);
/////////////////////////////////////////////////////////////

// console.log("Test start");
// setTimeout(() => console.log("0 sec timer"), 0);

// Promise.resolve("Resolved promise 1").then((res) => console.log(res));

// Promise.resolve("Resolved promise 2").then((res) => {
//   for (let i = 0; i < 1000; i++) {}
//   console.log(res);
// });
// console.log("Test end");
/////////////////////////////////////////////////////////////

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log("lottery draw is happening");
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve("you win");
//     } else {
//       reject(new Error("You lost your money"));
//     }
//   }, 2000);
// });

// lottertPromise.then((res) => console.log(res)).catch((err) => console.log(err));

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// wait(2)
//   .then(() => {
//     console.log(" I waited for 2 seconds");
//     return wait(1);
//   })
//   .then(() => console.log(" I waited for 1 second"));
/////////////////////////////////////////////////////////////

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   (position) => resolve(position),
//     //   (err) => reject(err)
//     // );

//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then((pos) => console.log(pos));

/////////////////////////////////////////////////////////////

const imgContainer = document.querySelector(".images");

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};

createImage("img")
  .then((img) => {
    console.log("Image 1 loaded");
  })
  .catch((err) => console.log(err));
