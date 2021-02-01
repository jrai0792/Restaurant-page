/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("\nfunction addNavBar() {\n  const content = document.getElementById(\"content\");\n  let div = document.createElement(\"div\");\n  div.classList.add = \"flex\";\n  div.classList.add = \"navbar\";\n  let anchor = document.createElement(\"a\");\n  anchor.href = \"#\";\n  anchor.innerText = \"Home\";\n  div.appendChild(anchor);\n\n  let anchor1 = document.createElement(\"a\");\n  anchor1.href =\"#\";\n  anchor1.innerText = \"Menu\";\n  div.appendChild(anchor1);\n\n  let anchor2 = document.createElement(\"a\");\n  anchor2.href = \"#\";\n  anchor2.innerText = \"Contact\";\n  div.appendChild(anchor2);\n  content.appendChild(div);\n\n}\n\naddNavBar();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");
/******/ })()
;