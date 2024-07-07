"use strict";
exports.id = 906;
exports.ids = [906];
exports.modules = {

/***/ 3906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports Title, Description, Href, Card */
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3900);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9740);
/* harmony import */ var _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9920);
/* harmony import */ var _components_SectionTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3137);
/* harmony import */ var _components_Target__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(583);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4243);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);









const Title = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_7___default()(_components_SectionTitle__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    target: "e6fxa0i0"
})("text-align:center;");
const Description = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_7___default()(_components_Text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    target: "e6fxa0i1"
})("text-align:justify;align-self:stretch;margin-top:10px;@media (min-width:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_3__/* .breakpoints.md */ .AV.md, "){margin-top:20px;}");
const Root = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_7___default()(_components_Card__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
    target: "e6fxa0i2"
})("display:flex;flex-direction:column;padding:16px;@media (min-width:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_3__/* .breakpoints.md */ .AV.md, "){padding:32px;}position:relative;");
const Href = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_7___default()(_components_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    target: "e6fxa0i3"
})("margin-top:10px;align-self:center;min-width:140px;@media (min-width:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_3__/* .breakpoints.md */ .AV.md, "){margin-top:24px;}");
const Card = ({ id , title , children , className , href , hrefLabel  })=>{
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Root, {
        className: className,
        children: [
            !!id && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Target__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                className: "target",
                id: id
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                className: "card-title",
                children: title
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Description, {
                children: children
            }),
            !!href && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                href: href,
                passHref: true,
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Href, {
                    children: hrefLabel
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ }),

/***/ 583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Target */
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GlobalStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9920);


const Target = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()("div", {
    target: "ecpsjlf0"
})("position:absolute;top:-100px;@media (min-width:", _GlobalStyle__WEBPACK_IMPORTED_MODULE_1__/* .breakpoints.lg */ .AV.lg, "){top:-128px;}&.low{top:-50px;@media (min-width:", _GlobalStyle__WEBPACK_IMPORTED_MODULE_1__/* .breakpoints.lg */ .AV.lg, "){top:-80px;}}");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Target);


/***/ })

};
;