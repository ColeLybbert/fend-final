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
/* harmony export */   "date": () => (/* binding */ date),
/* harmony export */   "formInput": () => (/* binding */ formInput),
/* harmony export */   "geoApiKey": () => (/* binding */ geoApiKey),
/* harmony export */   "pixApiKey": () => (/* binding */ pixApiKey),
/* harmony export */   "weatherApiKey": () => (/* binding */ weatherApiKey)
/* harmony export */ });
const weatherApiKey = 'ab60368d79a9411cac1a6afcce225d59';
const geoApiKey = 'cole200406';
const pixApiKey = '32251964-d3a8f6eb7f41a7da2ca59e329';
const date = '2023-01-11T22:41:38.540Z'
const formInput = "raleigh";

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
// Check for date will take the dateInput the user submitted and determine if the date entered is within a weeks time or not

const checkForDate = async (dateInput) => {
    let overWeek = Date.now() + (1000 * 60 * 60 * 24 * 7)
    console.log(dateInput);
    console.log(overWeek);
    if (dateInput > overWeek) {
        console.log('Greater than a week')
        return true;
    } else {
        console.log('Less than a week')
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
// forecast or current will take the reponse given from checkForDate and tell index.js to which weather api to run



const forecastOrCurrent = async (dateInput) => {
    let weekAway = await (0,_checkForDate__WEBPACK_IMPORTED_MODULE_0__.checkForDate)(dateInput);
    console.log(weekAway);
    if (weekAway) {
        console.log(`Running Forcast API`)
    }else {
        console.log(`Running current API`)
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
// This is mainly used in both weather apis but this will take the any location entered by the user and determine it's coordinates



const geoBaseUrl = "https://secure.geonames.org/searchJSON?"

const geoAPI = async (formInput) => {
    try{
        const res = await fetch(`${geoBaseUrl}q=${formInput}&maxRows=10&username=${_mockJSEnv__WEBPACK_IMPORTED_MODULE_0__.geoApiKey}`);
        const apiData = await res.json();
        console.log(`Returned geo Data`);
        (0,_postData__WEBPACK_IMPORTED_MODULE_1__.postData)(apiData);
        return (apiData);
    }catch (err) {
        return `Failed ${err}`
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
// This api takes whatever location was entered by the user and fetches pictures of the location



const pixBaseURL = "https://pixabay.com/api/"


const pixAPI = async (formInput) => {
    try{
        const res = await fetch(`${pixBaseURL}?key=${_mockJSEnv__WEBPACK_IMPORTED_MODULE_0__.pixApiKey}&q=${formInput}&image_type=photo`);
        const apiData = await res.json();
        console.log(apiData);
        (0,_postData__WEBPACK_IMPORTED_MODULE_1__.postData)(apiData);
        return (apiData);
    }catch (err) {
        return `Failed ${err}`
    }
}



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
//This sends any data fetched by the apis to the local server and placed in a object

const postData = async (apiData) => {
    fetch("http://localhost:8000/apiData", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({apiData}),
    })
    .then((response) => response.json())
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
/* harmony import */ var _pixFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pixFetch */ "./src/client/js/pixFetch.js");
/* harmony import */ var _geoFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geoFetch */ "./src/client/js/geoFetch.js");
/* harmony import */ var _checkForDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkForDate */ "./src/client/js/checkForDate.js");
/* harmony import */ var _forecastOrCurrent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forecastOrCurrent */ "./src/client/js/forecastOrCurrent.js");
//This is the brain of the entire website, every api that retruns data will be used is sent here and ran when the user presses the submit button






let form = document.getElementById("inputForm");
let formInput = document.getElementById('placeInput');

const secondConverter = async () => {
    try {
        let formDate = document.getElementById('dateInput').value;
        let date = new Date(formDate);
        let dateInput = date.getTime()
        return dateInput
    } catch (err) {
        `Failed: ${err}`
    }
}

const submitForm = async () => {
    let dateInput = await secondConverter();
    (0,_pixFetch__WEBPACK_IMPORTED_MODULE_0__.pixAPI)(formInput);
    (0,_geoFetch__WEBPACK_IMPORTED_MODULE_1__.geoAPI)(formInput);
    await (0,_checkForDate__WEBPACK_IMPORTED_MODULE_2__.checkForDate)(dateInput);
    await (0,_forecastOrCurrent__WEBPACK_IMPORTED_MODULE_3__.forecastOrCurrent)(dateInput);
    console.log(dateInput);
};


document.addEventListener('DOMContentLoaded', function () {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      submitForm(dateInput);
    });
  });

})();

Client = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=bundle.js.map