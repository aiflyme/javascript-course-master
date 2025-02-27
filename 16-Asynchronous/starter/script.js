'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const renderError = function (msg) {
  countriesContainer.insertAdjacentHTML('beforeend', msg);
  //countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const html = `
 <article class="country ${className}">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            data.population / 1000000
          ).toFixed(1)}M</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p> 
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
      </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
/*
const getCountryAndNeighbour = function (country) {
  //AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  console.log(request.responseText);

  request.addEventListener('load', function () {
    // console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //Render country 1
    renderCountry(data);

    //Get neighbour country (2)
    //console.log(...data.borders.join);
    const neighbour = data.borders;

    if (!neighbour) return;

    console.log(neighbour.join(','));
    //AJAX call country 1
    const request2 = new XMLHttpRequest();
    request2.open(
      'GET',
      `https://restcountries.com/v3.1/alpha?codes=${neighbour.join(',')}`
    );
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2);
    });
  });
};

// getCountryAndNeighbour('portugal');
getCountryAndNeighbour('usa');
// getCountryAndNeighbour('germany');
*/

// const request = fetch('https://restcountries.com/v2/name/portugal');
// console.log(request);

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
    //err => alert(err)
  });
};

const getCountryDataNew = function (country) {
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      console.log(data[0].borders);
      const neighbour = data[0].borders ? data[0].borders[0] : undefined;

      if (!neighbour) throw new Error('No neighbour found !');

      //Country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something weng wrong 💥💥 ${err.message}. Try again! `);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//       //err => alert(err)
//     })
//     .then(data => {
//       console.log(data[0]);
//       renderCountry(data[0]);

//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;

//       //Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//       //err => alert(err)
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something weng wrong 💥💥 ${err.message}. Try again! `);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });

//   // .then(function (response) {
//   //   //console.log(response);
//   //   return response.json();
//   // })
//   // .then(function (data) {
//   //   console.log(data);
//   //   renderCountry(data[0]);
//   // });
// };

// btn.addEventListener('click', function () {
//   getCountryDataNew('australia');
// });
// getCountryDataNew('australia');
///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

const whereAmI_old = function (lat, lng) {
  fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=463096878002027248235x89899`
  )
    .then(response => {
      console.log(response);
      if (!response.ok)
        throw new Error(`Can not get data, (${response.status})`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city},${data.country}`);

      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Can not get country, ${res.status}`);
      //console.log(res.json());
      return res.json();
    })
    .then(data => {
      renderCountry(data[0]);
    })
    .catch(err => {
      console.error(`${err} 💥💥💥`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};

// btn.addEventListener('click', function () {
//   //getCountryDataNew('australia');
//   whereAmI_old(52.508, 13.381);
//   whereAmI_old(19.037, 72.873);
//   whereAmI_old(-33.933, 18.474);
// });

//258 The Event Loop in Practice
//order 1
console.log('Test start');
//order 4
setTimeout(() => console.log('0 sec timer'), 0);
//order 3
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 100000000; i++) {}
  console.log(res);
});
//order 2
console.log('Test end');

//259 Building a Simple Promise

const lotteryPromises = new Promise(function (resolve, reject) {
  console.log('Lotter draw is happening 😁');

  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You Win 👍');
    } else {
      reject(new Error('You Lose you money 😢'));
    }
  }, 1000);
});

lotteryPromises.then(res => console.log(res)).catch(err => console.log(err));

setTimeout(() => console.log('test 0 second'), 0);

//Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(res => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 second'));

Promise.resolve('You Win 👍👍👍').then(x => console.log(x));
Promise.reject(new Error('BBC')).catch(err => console.error(err));
//260 Promisifying the Geolocation API

const getPostion = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
// getPostion().then(pos => console.log(pos));

const whereAmI = function () {
  getPostion()
    .then(pos => {
      console.log(pos);
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=463096878002027248235x89899`
      );
    })
    .then(response => {
      //console.log(response);
      if (!response.ok)
        throw new Error(`Can not get data, (${response.status})`);
      return response.json();
    })
    .then(data => {
      //console.log(data);
      console.log(`You are in ${data.city},${data.country}`);

      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Can not get country, ${res.status}`);
      //console.log(res.json());
      return res.json();
    })
    .then(data => {
      renderCountry(data[0]);
    })
    .catch(err => {
      console.error(`${err} 💥💥💥`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};

btn.addEventListener('click', whereAmI);

//261 Coding Challenge #2
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

let i = 1;

const imgContainer = document.querySelector('.images');
const createImage = function (imgpath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.setAttribute('src', imgpath);
    //img.src = imgpath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

// createImage('./img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('./img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';

//     //return createImage('./img/img-3.jpg');
//   })
//   .catch(err => console.error(err));

//262 Consuming Promises with Async_Await
const whereAmINew = async function () {
  try {
    const pos = await getPostion();
    const { latitude: lat, longitude: lng } = pos.coords;

    //Reverse geocoding
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=463096878002027248235x89899`
    );
    const dataGeo = await resGeo.json();
    // console.log(dataGeo);

    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    // console.log(res);
    const data = await res.json();
    // console.log(data[0]);
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err} 😶‍🌫️`);
    renderError(`😶‍🌫️ ${err.message}`);

    //Reject promise returned from async function
    throw err;
  }
};

console.log('First');

// 263 Error Handling With try...catch

// 264 Returning Values from Async Functions

/*
console.log('1. Will get location');
// const city = whereAmINew();
// console.log(city);
whereAmINew()
  .then(city => console.log(city))
  .catch(err => console.log(`${err.message} 😒`))
  .finally(() => console.log('3. Finished getting location'));
//.then(() => console.log('3. Finished getting location'));
// console.log('3. Finished getting location');
*/

(async function () {
  try {
    const city = await whereAmINew();
    console.log(`1. ${city} ~~`);
  } catch (err) {
    console.log(`2: ${err.message}`);
  }
  console.log('3. Finished getting location~~');
})();

// 265 Running Promises in Parallel
const get3Ccountries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};

get3Ccountries('portugal', 'canada', 'china');

// 266 Other Promise Combinators_ race, allSettled and any
//Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/egypt`),
    getJSON(`https://restcountries.com/v2/name/mexico`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('request took too long!'));
    }, sec * 1000);
  });
};
Promise.race([
  getJSON(`https://restcountries.com/v2/name/tanzania`),
  timeout(0.5),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

//Promise.allSettled
Promise.allSettled([
  //Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another Success'),
]).then(res => console.log(res));

Promise.all([
  Promise.resolve('Success'),
  //Promise.reject('Error'),
  Promise.resolve('Another Success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

//Promise any [ES2021]
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another Success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
// 267 Coding Challenge #3

// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/
//imgContainer

const loadNpause = async function (imgpath) {
  try {
    let img = await createImage('./img/img-1.jpg');
    console.log('Image 1 loaded');

    await wait(2);
    img.style.display = 'none';
    img = await createImage('./img/img-2.jpg');

    // await wait(2);
    // img.style.display = 'none';
    // img = await createImage('./img/img-3.jpg');
  } catch {
    err => console.error(err);
  }
};

//loadNpause();

//PART 2
const loadAll = async function (imgArr) {
  try {
    //const imgs = imgArr.map(img => createImage(img));
    const imgs = imgArr.map(async img => await createImage(img)); //the same as belew row
    //console.log(imgs);

    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);

    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
