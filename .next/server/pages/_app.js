(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5256:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Inter_9c9965', '__Inter_Fallback_9c9965'","fontStyle":"normal"},
	"className": "__className_9c9965"
};


/***/ }),

/***/ 8857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$_": () => (/* binding */ color),
/* harmony export */   "AV": () => (/* binding */ breakpoints),
/* harmony export */   "W0": () => (/* binding */ globalStyles)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fonts_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5256);
/* harmony import */ var _fonts_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fonts_index__WEBPACK_IMPORTED_MODULE_1__);


const globalStyles = /*#__PURE__*/ (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)("html,body{padding:0;margin:0;font-family:", (_fonts_index__WEBPACK_IMPORTED_MODULE_1___default().style.fontFamily), ";scroll-behavior:smooth;}a{color:inherit;text-decoration:none;}*{box-sizing:border-box;}/* @media (prefers-color-scheme:dark){html{color-scheme:dark;}body{color:white;background:black;}}*/");
const breakpoints = {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px"
};
const color = {
    primary: {
        normal: "var(--bs-primary)",
        dark: "var(--primary-dark)"
    },
    background: {
        gray: "var(--background-gray)"
    }
};


/***/ }),

/***/ 3884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(2805);
// EXTERNAL MODULE: ./src/sass/index.scss
var sass = __webpack_require__(4352);
// EXTERNAL MODULE: ./src/components/GlobalStyle.ts
var GlobalStyle = __webpack_require__(8857);
;// CONCATENATED MODULE: external "react-bootstrap/SSRProvider"
const SSRProvider_namespaceObject = require("react-bootstrap/SSRProvider");
var SSRProvider_default = /*#__PURE__*/__webpack_require__.n(SSRProvider_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/_app.tsx





const MyApp = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((SSRProvider_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Global, {
                styles: [
                    GlobalStyle/* globalStyles */.W0
                ]
            })
        ]
    });
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 4352:
/***/ (() => {



/***/ }),

/***/ 2805:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react");

/***/ }),

/***/ 5193:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3884));
module.exports = __webpack_exports__;

})();