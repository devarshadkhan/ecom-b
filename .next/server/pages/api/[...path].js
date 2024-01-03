"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/[...path]";
exports.ids = ["pages/api/[...path]"];
exports.modules = {

/***/ "http-proxy":
/*!*****************************!*\
  !*** external "http-proxy" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("http-proxy");

/***/ }),

/***/ "(api)/./pages/api/[...path].ts":
/*!********************************!*\
  !*** ./pages/api/[...path].ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var http_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-proxy */ \"http-proxy\");\n/* harmony import */ var http_proxy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_proxy__WEBPACK_IMPORTED_MODULE_0__);\n\nconst API_URL = \"https://api1.bedsdivans.co.uk\"; // The actual URL of the API\nconst proxy = http_proxy__WEBPACK_IMPORTED_MODULE_0___default().createProxyServer();\n// Make sure that we don't parse JSON bodies on this route:\nconst config = {\n    api: {\n        bodyParser: false,\n        externalResolver: true\n    }\n};\nconst Proxy = (req, res)=>{\n    proxy.web(req, res, {\n        target: API_URL,\n        changeOrigin: true\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Proxy);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvWy4uLnBhdGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDbUM7QUFDbkMsTUFBTUMsT0FBTyxHQUFHQywrQkFBK0IsRUFBRSw0QkFBNEI7QUFDN0UsTUFBTUcsS0FBSyxHQUFHTCxtRUFBMkIsRUFBRTtBQUMzQywyREFBMkQ7QUFDcEQsTUFBTU8sTUFBTSxHQUFHO0lBQ2xCQyxHQUFHLEVBQUU7UUFDREMsVUFBVSxFQUFFLEtBQUs7UUFDakJDLGdCQUFnQixFQUFFLElBQUk7S0FDekI7Q0FDSixDQUFDO0FBRUYsTUFBTUMsS0FBSyxHQUFHLENBQUNDLEdBQW9CLEVBQUVDLEdBQW1CLEdBQUs7SUFDekRSLEtBQUssQ0FBQ1MsR0FBRyxDQUFDRixHQUFHLEVBQUVDLEdBQUcsRUFBRTtRQUFFRSxNQUFNLEVBQUVkLE9BQU87UUFBRWUsWUFBWSxFQUFFLElBQUk7S0FBRSxDQUFDLENBQUM7Q0FDaEU7QUFFRCxpRUFBZUwsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGJ6YmVkcy8uL3BhZ2VzL2FwaS9bLi4ucGF0aF0udHM/ZmVkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSBcImh0dHBcIjtcclxuaW1wb3J0IGh0dHBQcm94eSBmcm9tIFwiaHR0cC1wcm94eVwiO1xyXG5jb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTDsgLy8gVGhlIGFjdHVhbCBVUkwgb2YgdGhlIEFQSVxyXG5jb25zdCBwcm94eSA9IGh0dHBQcm94eS5jcmVhdGVQcm94eVNlcnZlcigpO1xyXG4vLyBNYWtlIHN1cmUgdGhhdCB3ZSBkb24ndCBwYXJzZSBKU09OIGJvZGllcyBvbiB0aGlzIHJvdXRlOlxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gICAgYXBpOiB7XHJcbiAgICAgICAgYm9keVBhcnNlcjogZmFsc2UsXHJcbiAgICAgICAgZXh0ZXJuYWxSZXNvbHZlcjogdHJ1ZSxcclxuICAgIH0sXHJcbn07XHJcblxyXG5jb25zdCBQcm94eSA9IChyZXE6IEluY29taW5nTWVzc2FnZSwgcmVzOiBTZXJ2ZXJSZXNwb25zZSkgPT4ge1xyXG4gICAgcHJveHkud2ViKHJlcSwgcmVzLCB7IHRhcmdldDogQVBJX1VSTCwgY2hhbmdlT3JpZ2luOiB0cnVlIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJveHk7XHJcbiJdLCJuYW1lcyI6WyJodHRwUHJveHkiLCJBUElfVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJwcm94eSIsImNyZWF0ZVByb3h5U2VydmVyIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsImV4dGVybmFsUmVzb2x2ZXIiLCJQcm94eSIsInJlcSIsInJlcyIsIndlYiIsInRhcmdldCIsImNoYW5nZU9yaWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/[...path].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/[...path].ts"));
module.exports = __webpack_exports__;

})();