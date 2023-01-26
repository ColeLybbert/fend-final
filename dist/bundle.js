var Client;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./mockJSEnv.js":
/*!**********************!*\
  !*** ./mockJSEnv.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formDate": () => (/* binding */ formDate),
/* harmony export */   "formInput": () => (/* binding */ formInput),
/* harmony export */   "geoApiKey": () => (/* binding */ geoApiKey),
/* harmony export */   "pixApiKey": () => (/* binding */ pixApiKey),
/* harmony export */   "weatherApiKey": () => (/* binding */ weatherApiKey)
/* harmony export */ });
const weatherApiKey = 'b8bcfc4d5ff94729ad345008167d0424';
const geoApiKey = 'cole200406';
const pixApiKey = '32251964-d3a8f6eb7f41a7da2ca59e329';
const formDate = '2023-01-11T22:41:38.540Z'
const formInput = "raleigh";

/***/ }),

/***/ "./src/client/styles/main.scss":
/*!*************************************!*\
  !*** ./src/client/styles/main.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/client/js/checkForDate.js":
/*!***************************************!*\
  !*** ./src/client/js/checkForDate.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkForDate": () => (/* binding */ checkForDate)
/* harmony export */ });
// Uses date Input from user entered date, defines anything over a weeks time,
// then returns true if the date Input is greater than a week, and false if it's not
const checkForDate = async (dateInput) => {
    let overWeek = Date.now() + (1000 * 60 * 60 * 24 * 7)
    if (dateInput > overWeek) {
        return true;
    } else {
        return false;
    }
}



/***/ }),

/***/ "./src/client/js/forecastOrCurrent.js":
/*!********************************************!*\
  !*** ./src/client/js/forecastOrCurrent.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "forecastOrCurrent": () => (/* binding */ forecastOrCurrent)
/* harmony export */ });
/* harmony import */ var _checkForDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkForDate */ "./src/client/js/checkForDate.js");
/* harmony import */ var _forecastWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecastWeather */ "./src/client/js/forecastWeather.js");
/* harmony import */ var _weatherFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherFetch */ "./src/client/js/weatherFetch.js");




//Takes the defined "Week Away" from checkForDate.js, essentially if checkForDate returned true it will fetch the forecast api, if not it will run the current weather api 
const forecastOrCurrent = async (dateInput, formInput) => {
    let weekAway = await (0,_checkForDate__WEBPACK_IMPORTED_MODULE_0__.checkForDate)(dateInput);
    if (weekAway) {
        return (0,_forecastWeather__WEBPACK_IMPORTED_MODULE_1__.forecastWeather)(formInput, dateInput);
    }else {
        return (0,_weatherFetch__WEBPACK_IMPORTED_MODULE_2__.weatherAPI)(formInput);
    }
}

/***/ }),

/***/ "./src/client/js/forecastWeather.js":
/*!******************************************!*\
  !*** ./src/client/js/forecastWeather.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "forecastWeather": () => (/* binding */ forecastWeather),
/* harmony export */   "returnLatLon": () => (/* binding */ returnLatLon)
/* harmony export */ });
/* harmony import */ var _mockJSEnv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../mockJSEnv */ "./mockJSEnv.js");
/* harmony import */ var _geoFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geoFetch */ "./src/client/js/geoFetch.js");


const baseUrl = 'http://api.weatherbit.io/v2.0/forecast/daily';

//Fetches forecast weather data and returns it, the data is weather for a specific location after a weeks time
const forecastWeather = async (formInput, dateInput) => {
    try{
        let data = await (0,_geoFetch__WEBPACK_IMPORTED_MODULE_1__.geoAPI)(formInput);
        let latlon = await returnLatLon(data)
        const res = await fetch(`${baseUrl}?${latlon}&key=${_mockJSEnv__WEBPACK_IMPORTED_MODULE_0__.weatherApiKey}&include=minutely`);
        const apiData = await res.json();
        console.log(apiData)
        return (apiData);
    }catch (err) {
        return `Failed ${err}`
    }
}

//Needed to run forecastWeather, this returns the coordinates for the user entered location from geoAPI
const returnLatLon = async (data) => {
    try {
        let latlon = `lat=${data.geonames[0].lat}&lon=${data.geonames[0].lng}`;
        return latlon
    }catch (err){
        `Failed: ${err}`
    }
}

/***/ }),

/***/ "./src/client/js/geoFetch.js":
/*!***********************************!*\
  !*** ./src/client/js/geoFetch.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "geoAPI": () => (/* binding */ geoAPI)
/* harmony export */ });
/* harmony import */ var _mockJSEnv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../mockJSEnv */ "./mockJSEnv.js");
/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ "./src/client/js/postData.js");


const geoBaseUrl = "https://secure.geonames.org/searchJSON?"

//Fetches coordinates from api and returns it, needed to make any of the weather api's work since they require coordinates
const geoAPI = async (formInput) => {
    try{
        const res = await fetch(`${geoBaseUrl}q=${formInput}&maxRows=10&username=${_mockJSEnv__WEBPACK_IMPORTED_MODULE_0__.geoApiKey}`);
        const apiData = await res.json();
        (0,_postData__WEBPACK_IMPORTED_MODULE_1__.postData)(apiData);
        return (apiData);
    }catch (err) {
        return `Failed ${err}`
    }
}

/***/ }),

/***/ "./src/client/js/listener.js":
/*!***********************************!*\
  !*** ./src/client/js/listener.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formListener": () => (/* binding */ formListener)
/* harmony export */ });
//Define form
let form = document.getElementById("inputForm");

//EventListener used in index, listens for form to be submitted
const formListener = async (weatherUpdate, pixUpdate) => {
    try {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        let formInput = document.getElementById('placeInput').value;
        let formDate = document.getElementById('dateInput').value;
        weatherUpdate(formDate, formInput);
        pixUpdate(formInput);
      })
    } catch (err) {
        return `Failed: ${err}`
    }
}


/***/ }),

/***/ "./src/client/js/pixFetch.js":
/*!***********************************!*\
  !*** ./src/client/js/pixFetch.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pixAPI": () => (/* binding */ pixAPI)
/* harmony export */ });
/* harmony import */ var _mockJSEnv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../mockJSEnv */ "./mockJSEnv.js");
/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ "./src/client/js/postData.js");


const pixBaseURL = "https://pixabay.com/api/"

// Fetches api Data and returns it, returns pictures of location for UI
const pixAPI = async (formInput) => {
    try{
        const res = await fetch(`${pixBaseURL}?key=${_mockJSEnv__WEBPACK_IMPORTED_MODULE_0__.pixApiKey}&q=${formInput}&image_type=photo`);
        const apiData = await res.json();
        (0,_postData__WEBPACK_IMPORTED_MODULE_1__.postData)(apiData);
        return (apiData);
    }catch (err) {
        return `Failed ${err}`
    }
}



/***/ }),

/***/ "./src/client/js/pixUpdate.js":
/*!************************************!*\
  !*** ./src/client/js/pixUpdate.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pixUpdate": () => (/* binding */ pixUpdate)
/* harmony export */ });
/* harmony import */ var _pixFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pixFetch */ "./src/client/js/pixFetch.js");


// Fetch date from pixApi then take two img sources, make img's in the html for them then display them.
const pixUpdate = async (formInput) => {
  let data = await (0,_pixFetch__WEBPACK_IMPORTED_MODULE_0__.pixAPI)(formInput);
  let pictures = [data.hits[0].previewURL, data.hits[1].previewURL];
  pictures.forEach(picture => {
    let div = document.getElementById('pictures');
    let img = document.createElement('img');
    img.src = picture;
    img.classList.add('formPictures');
    div.appendChild(img);
  })
};


/***/ }),

/***/ "./src/client/js/postData.js":
/*!***********************************!*\
  !*** ./src/client/js/postData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });
//This is ran at the end of every api and sends all of their data to the server
const postData = async (apiData) => {
    fetch("http://localhost:8000/apiData", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({apiData}),
    })
    .then((response) => response.json())
};

/***/ }),

/***/ "./src/client/js/secondConverter.js":
/*!******************************************!*\
  !*** ./src/client/js/secondConverter.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "secondConverter": () => (/* binding */ secondConverter)
/* harmony export */ });
//Needed to take user entered date and turn it into a number, if it was left as a string checkForDate would not work
const secondConverter = async (formDate) => {
    try {
        let date = new Date(formDate);
        let dateInput = date.getTime()
        return dateInput
    } catch (err) {
        `Failed: ${err}`
    }
}

/***/ }),

/***/ "./src/client/js/weatherFetch.js":
/*!***************************************!*\
  !*** ./src/client/js/weatherFetch.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "returnLatLon": () => (/* binding */ returnLatLon),
/* harmony export */   "weatherAPI": () => (/* binding */ weatherAPI)
/* harmony export */ });
/* harmony import */ var _mockJSEnv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../mockJSEnv */ "./mockJSEnv.js");
/* harmony import */ var _geoFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geoFetch */ "./src/client/js/geoFetch.js");


const weatherBaseUrl = " http://api.weatherbit.io/v2.0/current"

////Fetches current weather data and returns it, the data is weather for a specific location within a weeks time
const weatherAPI = async (formInput) => {
    try{
        let data = await (0,_geoFetch__WEBPACK_IMPORTED_MODULE_1__.geoAPI)(formInput);
        let latlon = await returnLatLon(data)
        const res = await fetch(`${weatherBaseUrl}?${latlon}&key=${_mockJSEnv__WEBPACK_IMPORTED_MODULE_0__.weatherApiKey}&include=minutely`);
        const apiData = await res.json();
        console.log(apiData)
        return (apiData);
    }catch (err) {
        return `Failed ${err}`
    }
}

//Needed to run weatherAPI, this returns the coordinates for the user entered location from geoAPI
const returnLatLon = async (data) => {
    try {
        let latlon = `lat=${data.geonames[0].lat}&lon=${data.geonames[0].lng}`;
        return latlon
    }catch (err){
        `Failed: ${err}`
    }
}

/***/ }),

/***/ "./src/client/js/weatherUpdate.js":
/*!****************************************!*\
  !*** ./src/client/js/weatherUpdate.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weatherUpdate": () => (/* binding */ weatherUpdate)
/* harmony export */ });
/* harmony import */ var _checkForDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkForDate */ "./src/client/js/checkForDate.js");
/* harmony import */ var _forecastOrCurrent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecastOrCurrent */ "./src/client/js/forecastOrCurrent.js");
/* harmony import */ var _secondConverter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./secondConverter */ "./src/client/js/secondConverter.js");




//If data is within a week make a card that displays current temp, if it's sunny or rainy or snowy or mix, and the date. If it is over a week do the same thing except take min and max temp for 7 days and average them.
//Then display the card depending on the date entered.
const weatherUpdate = async (formDate, formInput) => {
    let dateInput = await (0,_secondConverter__WEBPACK_IMPORTED_MODULE_2__.secondConverter)(formDate);
    await (0,_checkForDate__WEBPACK_IMPORTED_MODULE_0__.checkForDate)(dateInput);
    let data = await (0,_forecastOrCurrent__WEBPACK_IMPORTED_MODULE_1__.forecastOrCurrent)(dateInput, formInput);
    let trueOrFalse = await (0,_checkForDate__WEBPACK_IMPORTED_MODULE_0__.checkForDate)();
    if (trueOrFalse){
      let minAverage = [data.data[0].min_temp + data.data[1].min_temp +data.data[2].min_temp + data.data[3].min_temp + data.data[4].min_temp + data.data[5].min_temp + data.data[6].min_temp / 7]
      let maxAverage = [data.data[0].max_temp + data.data[1].max_temp +data.data[2].max_temp + data.data[3].max_temp + data.data[4].max_temp + data.data[5].max_temp + data.data[6].max_temp / 7]
      let day = data.data[0]
      let div = document.getElementById('weather');
      let card = document.createElement('div');
      card.classList.add('cards');
      let date = document.createElement('h3');
      date.id = "date";
      date.innerHTML = day.datetime;
      let img = document.createElement('img');
    
      if (day.precip == 0 & day.snow == 0) {
        img.src = "//ssl.gstatic.com/onebox/weather/48/sunny.png"
      } else if (day.precip > 0 & day.snow == 0) {
        img.src = "//ssl.gstatic.com/onebox/weather/48/rain.png"
      } else if (day.precip == 0 & day.snow > 0) {
        img.src = "//ssl.gstatic.com/onebox/weather/48/snow_light.png"
      } else if (day.precip > 0 & day.snow > 0) {
        img.src = "//ssl.gstatic.com/onebox/weather/48/snow_s_rain.png"
      }
    
      let minTemp = document.createElement('h3');
      minTemp.innerHTML = `Avg Low:${Math.trunc(minAverage)}°C`;
      minTemp.id = "minTemp";
      let maxTemp = document.createElement('h3');
      maxTemp.innerHTML = `Avg High:${Math.trunc(maxAverage)}°C`;
      maxTemp.id = "maxTemp"
      card.appendChild(date);
      card.appendChild(img);
      card.appendChild(minTemp);
      card.appendChild(maxTemp);
      div.appendChild(card);
    } else {
      let day = data.data[0]
      let div = document.getElementById('weather');
      let card = document.createElement('div');
      card.classList.add('cards');
      let date = document.createElement('h3');
      date.id = "date";
      date.innerHTML = day.datetime;
      let img = document.createElement('img');
    
      if (day.precip == 0 & day.snow == 0) {
        img.src = "//ssl.gstatic.com/onebox/weather/48/sunny.png"
      } else if (day.precip > 0 & day.snow == 0) {
        img.src = "//ssl.gstatic.com/onebox/weather/48/rain.png"
      } else if (day.precip == 0 & day.snow > 0) {
        img.src = "//ssl.gstatic.com/onebox/weather/48/snow_light.png"
      } else if (day.precip > 0 & day.snow > 0) {
        img.src = "//ssl.gstatic.com/onebox/weather/48/snow_s_rain.png"
      }
    
      let temperature = document.createElement('h3');
      temperature.innerHTML = `Temp:${day.temp}°C`;
      temperature.id = "temp"
      card.appendChild(date);
      card.appendChild(img);
      card.appendChild(temperature);
      div.appendChild(card);
    }
  };

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/client/js/index.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ "./src/client/styles/main.scss");
/* harmony import */ var _pixUpdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pixUpdate */ "./src/client/js/pixUpdate.js");
/* harmony import */ var _weatherUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherUpdate */ "./src/client/js/weatherUpdate.js");
/* harmony import */ var _listener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listener */ "./src/client/js/listener.js");






//Imported EventListener that runs weatherUpdate
document.addEventListener('DOMContentLoaded', function () {
  (0,_listener__WEBPACK_IMPORTED_MODULE_3__.formListener)(_weatherUpdate__WEBPACK_IMPORTED_MODULE_2__.weatherUpdate, _pixUpdate__WEBPACK_IMPORTED_MODULE_1__.pixUpdate);
});
})();

Client = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=bundle.js.map