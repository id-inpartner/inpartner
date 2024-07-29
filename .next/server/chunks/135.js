"use strict";
exports.id = 135;
exports.ids = [135];
exports.modules = {

/***/ 5960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export ColumnContainer */
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__);


const ColumnContainer = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1___default()), {
    target: "e1gela370"
})("display:flex;flex-direction:column;");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColumnContainer);


/***/ }),

/***/ 3137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export SectionTitle */
/* harmony import */ var _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9920);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fonts_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3894);
/* harmony import */ var _fonts_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fonts_index__WEBPACK_IMPORTED_MODULE_2__);



const SectionTitle = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()("h5", {
    target: "e3y0cv0"
})("font-weight:600;font-family:", (_fonts_index__WEBPACK_IMPORTED_MODULE_2___default().style.fontFamily), ";font-size:20px;@media (min-width:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__/* .breakpoints.md */ .AV.md, "){font-size:28px;}");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionTitle);


/***/ }),

/***/ 4243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Text */
/* harmony import */ var _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9920);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);


const Text = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()("div", {
    target: "ehekjoj0"
})("font-size:16px;text-align:justify;@media (min-width:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__/* .breakpoints.md */ .AV.md, "){font-size:20px;}");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);


/***/ }),

/***/ 4267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dx": () => (/* binding */ Title),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "dk": () => (/* binding */ Description)
/* harmony export */ });
/* unused harmony export TitleDescription */
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9920);
/* harmony import */ var _components_SectionTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3137);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4243);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__);





const Title = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_4___default()(_components_SectionTitle__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    target: "e1u5oyte0"
})("text-align:center;margin-top:50px;@media (min-width:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_1__/* .breakpoints.md */ .AV.md, "){margin-top:90px;}");
const Description = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_4___default()(_components_Text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    target: "e1u5oyte1"
})("text-align:center;align-self:stretch;margin-bottom:12px;@media (min-width:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_1__/* .breakpoints.md */ .AV.md, "){margin-bottom:40px;}");
const TitleDescription = ({ title , children  })=>{
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                className: "title",
                children: title
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Description, {
                className: "description",
                children: children
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TitleDescription);


/***/ })

};
;