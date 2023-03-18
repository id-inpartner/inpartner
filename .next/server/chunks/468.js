"use strict";
exports.id = 468;
exports.ids = [468];
exports.modules = {

/***/ 9988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports Title, Description, Banner */
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fonts_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3894);
/* harmony import */ var _fonts_index__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fonts_index__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9920);






const Root = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("div", {
    target: "e1h82fg30"
})("position:relative;width:100%;color:white;");
const Aspect = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("div", {
    target: "e1h82fg31"
})("position:relative;padding-top:", 702 / 13.66, "%;@media (min-width:1440px){padding-top:740.017px;}&.short{padding-top:", 465 / 14.4, "%;@media (min-width:1440px){padding-top:465px;}}z-index:1;");
const Content = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {
    target: "e1h82fg32"
})("position:absolute;display:flex;flex-direction:column;align-items:stretch;text-align:center;justify-content:center;height:100%;left:0;right:0;top:0;bottom:0;z-index:2;");
const Title = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("h1", {
    target: "e1h82fg33"
})("font-family:", (_fonts_index__WEBPACK_IMPORTED_MODULE_5___default().style.fontFamily), ";font-weight:600;font-size:16px;@media (min-width:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_4__/* .breakpoints.md */ .AV.md, "){font-size:38px;}text-shadow:3px 3px 3px rgba(0,0,0,0.4);");
const Description = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("div", {
    target: "e1h82fg34"
})("font-size:10px;margin-top:0;@media (min-width:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_4__/* .breakpoints.md */ .AV.md, "){margin-top:24px;font-size:20px;}text-shadow:3px 3px 3px rgba(0,0,0,0.4);");
const Img = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
    target: "e1h82fg35"
})("object-fit:cover;");
const Banner = ({ backgroundSrc , title , description , size  })=>{
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Root, {
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Aspect, {
                className: size === "short" ? "short" : "height",
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Img, {
                    fill: true,
                    src: backgroundSrc,
                    priority: true,
                    alt: "",
                    quality: 100
                })
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Content, {
                children: [
                    !!title && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                        children: title
                    }),
                    !!description && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Description, {
                        children: description
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);


/***/ }),

/***/ 9740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YS": () => (/* binding */ CardLink),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Card */
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const Card = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()("div", {
    target: "ev7rpqc0"
})("background-color:white;box-shadow:3px 3px 8px rgba(0,0,0,0.12);border-radius:8px;border:1px solid rgba(0,0,0,0.05);");
const CardLink = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    target: "ev7rpqc1"
})("background-color:white;box-shadow:3px 3px 8px rgba(0,0,0,0.12);border-radius:8px;border:1px solid rgba(0,0,0,0.05);");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ })

};
;