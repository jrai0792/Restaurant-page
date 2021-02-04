/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/nav */ \"./src/modules/nav.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/info */ \"./src/modules/info.js\");\n\n\n\n\n\nfunction clearContent() {\n  const content =document.getElementById('content');\n  const navItems = document.querySelectorAll('nav li');\n  content.removeChild(content.lastChild);\n  navItems.forEach(navItems => navItems.classList.remove('active'));\n}\n\nconst showHome = () => {\n  clearContent();\n  _modules_home__WEBPACK_IMPORTED_MODULE_1__.default.homePage();\n  const menuBtn = document.getElementById('btn-menu');\n  menuBtn.addEventListener('click', showMenu);\n}\n\nconst showMenu = () => {\n  clearContent();\n  _modules_menu__WEBPACK_IMPORTED_MODULE_2__.default.menuList();\n}\n\nconst showInfo = () => {\n  clearContent();\n  _modules_info__WEBPACK_IMPORTED_MODULE_3__.default.infoDetails();\n}\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  _modules_nav__WEBPACK_IMPORTED_MODULE_0__.default.addNavBar();\n  _modules_home__WEBPACK_IMPORTED_MODULE_1__.default.homePage();\n  const home = document.getElementById('home');\n  const menu = document.getElementById('menu');\n  const info = document.getElementById('info');\n\n  home.addEventListener('click', showHome);\n  menu.addEventListener('click', showMenu);\n  info.addEventListener('click', showInfo);\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst Home = (() => {\n  const homePage = () => {\n\n    const content = document.getElementById('content');\n  \n    const main = document.createElement('main');\n    main.classList.add('home-page');\n  \n    const div = document.createElement('div');\n    div.classList.add('home-div');\n  \n    const subHead = document.createElement('h2');\n    subHead.innerText = \"Welcome to Food Coma!! We serve : \";\n  \n    const serveList = document.createElement('h3');\n    serveList.innerHTML = '<span>Breakfast</span> <br> <span>Lunch</span> <br> <span>Dinner</span> ';\n  \n    const btn = document.createElement('button');\n    btn.classList.add('btn-menu');\n    btn.setAttribute('id','btn-menu');\n    btn.innerText = \"Check Menu\";\n  \n    div.appendChild(subHead);\n    div.appendChild(serveList);\n    \n    div.appendChild(btn);\n    main.appendChild(div);\n    content.appendChild(main);\n  };\n\n  const seeHome = () => {\n    const homeItem = document.getElementById('home');\n    homeItem.classList.add('active');\n  };\n  return {homePage, seeHome};\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/info.js":
/*!*****************************!*\
  !*** ./src/modules/info.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst Info = (() => {\n  const infoDetails = () => {\n    const content = document.getElementById('content');\n    const section = document.createElement('section');\n    section.setAttribute('id', 'info-section');\n    section.setAttribute('class', 'info-section');\n    const infoHead = document.createElement('h3');\n    infoHead.setAttribute('class', 'info-head');\n    infoHead.innerText = \"Send your queries, our team will reach out to you soon!!\";\n    const formDiv = document.createElement('div');\n    formDiv.setAttribute('id', 'form-div');\n    const form = document.createElement('form');\n    form.setAttribute('class', 'form');\n    const email = document.createElement('input');\n    email.setAttribute('type', 'email');\n    email.setAttribute('name','email address');\n    email.setAttribute('placeholder', 'Email');\n    email.setAttribute('id', 'email');\n    const message = document.createElement('input');\n    message.setAttribute('type', 'text');\n    message.setAttribute('name', 'message');\n    message.setAttribute('placeholder','Write your message here.');\n    message.setAttribute('id', 'message');\n    const btn = document.createElement('button');\n    btn.setAttribute('type','submit');\n    btn.textContent=\"Submit\";\n\n    const infoExtra = document.createElement('div');\n    infoExtra.setAttribute('id','info-extra');\n    infoExtra.setAttribute('class','info-extra');\n    const infoUl = document.createElement('ul');\n    infoUl.setAttribute('id','info-ul');\n    infoUl.setAttribute('class','info-ul');\n    infoUl.classList.add('flex');\n    const li1 = document.createElement('li');\n    li1.textContent = 'About Us';\n    li1.setAttribute('class','info-li');\n    const li2 = document.createElement('li');\n    li2.textContent = \"Gallery\";\n    li2.setAttribute('class','info-li');\n    const li3 = document.createElement('li');\n    li3.textContent = \"Packages\";\n    li3.setAttribute('class','info-li');\n    const li4 = document.createElement('li');\n    li4.textContent = \"Terms and Conditions\";\n    li4.setAttribute('class','info-li');\n    const li5 = document.createElement('li');\n    li5.textContent = \"Privacy Policy\";\n    li5.setAttribute('class','info-li');\n\n\n    const br1 = document.createElement('br');\n    const br2 = document.createElement('br');\n    form.appendChild(email);\n    form.appendChild(br1);\n    form.appendChild(message);\n    form.appendChild(br2);\n    form.appendChild(btn);\n    formDiv.appendChild(form);\n    section.appendChild(infoHead);\n    section.appendChild(formDiv);\n\n    infoUl.appendChild(li1);\n    infoUl.appendChild(li2);\n    infoUl.appendChild(li3);\n    infoUl.appendChild(li4);\n    infoUl.appendChild(li5);\n    infoExtra.appendChild(infoUl);\n\n    section.appendChild(infoExtra);\n    content.appendChild(section);\n\n  };\n\n  const seeInfo = () => {\n    const newInfo = document.getElementById('info');\n    newInfo.classList.add('active');\n  };\n\n  return {infoDetails, seeInfo};\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Info);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/info.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst Menu = (() => {\n  const menuList = () => {\n    const container = document.getElementById('content');\n    const  div = document.createElement('div');\n    div.classList.add('menu-div');\n    const menuHead = document.createElement('h3');\n    menuHead.setAttribute('class', 'menu-head');\n    menuHead.textContent = \"Food Coma Menu\";\n    const menu = document.createElement('div');\n    menu.classList.add('menu');\n    const breakDiv = document.createElement('div');\n    breakDiv.classList.add('div-break');\n    const h1 = document.createElement('h2');\n    h1.innerText = \"Breakfast\";\n    const brkUl = document.createElement('ul');\n    brkUl.classList.add('breakfast-ul');\n    const brkList1 = document.createElement('li');\n    brkList1.setAttribute('class', 'breakfast-list');\n    brkList1.textContent = \"Omlette\";\n    const brkList2 = document.createElement('li');\n    brkList2.setAttribute('class', 'breakfast-list');\n    brkList2.textContent = \"Dosa\";\n    const brkList3 = document.createElement('li');\n    brkList3.setAttribute('class', 'breakfast-list');\n    brkList3.textContent = \"Pancakes\";\n    const brkList4 = document.createElement('li');\n    brkList4.setAttribute('class', 'breakfast-list');\n    brkList4.textContent = \"Poridge\";\n    const brkList5 = document.createElement('li');\n    brkList5.setAttribute('class', 'breakfast-list');\n    brkList5.textContent = \"Cereals\";\n  \n    brkUl.appendChild(brkList1);\n    brkUl.appendChild(brkList2);\n    brkUl.appendChild(brkList3);\n    brkUl.appendChild(brkList4);\n    brkUl.appendChild(brkList5);\n    breakDiv.appendChild(h1);\n    breakDiv.appendChild(brkUl);\n  \n  \n    const lunchDiv = document.createElement('div');\n    lunchDiv.classList.add('div-lunch');\n    const h2 = document.createElement('h2');\n    h2.innerText = \"Lunch\";\n    const lunchUl = document.createElement('ul');\n    lunchUl.classList.add('lunch-ul');\n    const lunchList1 = document.createElement('li');\n    lunchList1.setAttribute('class', 'lunch-list');\n    lunchList1.textContent = \"Quinoa Bowl\";\n    const lunchList2 = document.createElement('li');\n    lunchList2.setAttribute('class', 'lunch-list');\n    lunchList2.textContent = \"Chicken Biryani\";\n    const lunchList3 = document.createElement('li');\n    lunchList3.setAttribute('class', 'lunch-list');\n    lunchList3.textContent = \"Khichdi\";\n    const lunchList4 = document.createElement('li');\n    lunchList4.setAttribute('class', 'lunch-list');\n    lunchList4.textContent = \"Rice Sambhar\";\n    const lunchList5 = document.createElement('li');\n    lunchList5.setAttribute('class', 'lunch-list');\n    lunchList5.textContent = \"Tacos\";\n  \n  \n    lunchUl.appendChild(lunchList1);\n    lunchUl.appendChild(lunchList2);\n    lunchUl.appendChild(lunchList3);\n    lunchUl.appendChild(lunchList4);\n    lunchUl.appendChild(lunchList5);\n    lunchDiv.appendChild(h2);\n    lunchDiv.appendChild(lunchUl);\n  \n    const dinnerDiv = document.createElement('div');\n    dinnerDiv.classList.add('div-dinner');\n    const h3 = document.createElement('h2');\n    h3.innerText = \"Dinner\";\n    const dinnerUl = document.createElement('ul');\n    dinnerUl.classList.add('dinner-ul');\n    const dinnerList1 = document.createElement('li');\n    dinnerList1.setAttribute('class', 'dinner-list');\n    dinnerList1.textContent = \"Quinoa Bowl\";\n    const dinnerList2 = document.createElement('li');\n    dinnerList2.setAttribute('class', 'dinner-list');\n    dinnerList2.textContent = \"Chicken Biryani\";\n    const dinnerList3 = document.createElement('li');\n    dinnerList3.setAttribute('class', 'dinner-list');\n    dinnerList3.textContent = \"Khichdi\";\n    const dinnerList4 = document.createElement('li');\n    dinnerList4.setAttribute('class', 'dinner-list');\n    dinnerList4.textContent = \"Rice Sambhar\";\n    const dinnerList5 = document.createElement('li');\n    dinnerList5.setAttribute('class', 'dinner-list');\n    dinnerList5.textContent = \"Tacos\";\n  \n  \n    dinnerUl.appendChild(dinnerList1);\n    dinnerUl.appendChild(dinnerList2);\n    dinnerUl.appendChild(dinnerList3);\n    dinnerUl.appendChild(dinnerList4);\n    dinnerUl.appendChild(dinnerList5);\n    dinnerDiv.appendChild(h3);\n    dinnerDiv.appendChild(dinnerUl);\n    \n    menu.appendChild(breakDiv);\n    menu.appendChild(lunchDiv);\n    menu.appendChild(dinnerDiv);\n\n    div.appendChild(menuHead);\n    div.appendChild(menu);\n    container.appendChild(div);\n  \n  };\n\n  const seeMenu = () => {\n    const newMenu = document.getElementById('menu');\n    newMenu.classList.add('active');\n  };\n\n  return {menuList, seeMenu};\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/nav.js":
/*!****************************!*\
  !*** ./src/modules/nav.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst Nav = (()=> {\n  const addNavBar = () => {\n    const content = document.getElementById(\"content\");\n    const container = document.createElement(\"div\");\n    container.setAttribute('class','container');\n    const navbar = document.createElement(\"nav\");\n    navbar.setAttribute('class','navbar');\n    const logo = document.createElement(\"h1\");\n    logo.textContent = \"Food Coma\";\n    logo.setAttribute('id','logo');\n    const ul = document.createElement(\"ul\");\n    ul.setAttribute('class','navbar-nav, flex');\n    ul.setAttribute('id','navbar-nav');\n    const liHome = document.createElement(\"li\");\n    liHome.setAttribute('class','nav-item');\n    const aHome = document.createElement(\"a\");\n    aHome.href = \"#\";\n    aHome.innerText = \"Home\";\n    aHome.classList.add(\"nav-link\");\n    aHome.setAttribute('id','home');\n    aHome.setAttribute('class', 'nav-link, active');\n    const liMenu = document.createElement(\"li\");\n    liMenu.setAttribute('class','nav-item');\n    const aMenu = document.createElement(\"a\");\n    aMenu.href = \"#\";\n    aMenu.innerText = \"Menu\";\n    aMenu.classList.add(\"nav-link\");\n    aMenu.setAttribute('id','menu');\n    const liInfo = document.createElement('li');\n    liInfo.setAttribute('class','nav-item');\n    const aInfo = document.createElement('a');\n    aInfo.href = \"#\";\n    aInfo.innerText = \"Info\";\n    aInfo.classList.add(\"nav-link\");\n    aInfo.setAttribute('id','info');\n    liInfo.appendChild(aInfo);\n    liMenu.appendChild(aMenu);\n    liHome.appendChild(aHome);\n    ul.appendChild(liHome);\n    ul.appendChild(liMenu);\n    ul.appendChild(liInfo);\n    navbar.appendChild(logo);\n    navbar.appendChild(ul);\n    container.appendChild(navbar);\n    content.appendChild(container);\n  \n  };\n  return {addNavBar};\n  \n})();\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/nav.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;