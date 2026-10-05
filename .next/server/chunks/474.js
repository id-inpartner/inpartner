"use strict";
exports.id = 474;
exports.ids = [474];
exports.modules = {

/***/ 6474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutoTranslate": () => (/* binding */ AutoTranslate),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9920);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);





const AutoTranslate = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const currentLocale = router.locale || "en";
    const isEn = currentLocale === "en";
    const isKo = currentLocale === "ko";
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RadioGroup, {
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Item, {
                href: router.asPath,
                locale: "en",
                disabled: isEn,
                "aria-current": isEn ? "true" : undefined,
                children: "EN"
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Divider, {}),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Item, {
                href: router.asPath,
                locale: "ko",
                disabled: isKo,
                "aria-current": isKo ? "true" : undefined,
                children: "KR"
            })
        ]
    });
};
const RadioGroup = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("div", {
    target: "ey4gp5r0"
})("display:flex;flex-direction:row;align-items:center;align-self:center;");
const Item = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
    target: "ey4gp5r1"
})("background:none;border:none;padding:4px 8px;cursor:", (props)=>props.disabled ? "default" : "pointer", ";pointer-events:", (props)=>props.disabled ? "none" : "auto", ";font-weight:", (props)=>props.disabled ? "700" : "400", ";color:", (props)=>props.disabled ? _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_1__/* .color.primary.normal */ .$_.primary.normal : "#666666", ";text-decoration:none;font-size:14px;&:hover{color:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_1__/* .color.primary.normal */ .$_.primary.normal, ";text-decoration:none;}");
const Divider = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("div", {
    target: "ey4gp5r2"
})("width:1px;height:14px;background-color:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_1__/* .color.primary.dark */ .$_.primary.dark, ";margin:0 4px;");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AutoTranslate);


/***/ })

};
;