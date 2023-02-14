"use strict";
exports.id = 626;
exports.ids = [626];
exports.modules = {

/***/ 4626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "vP": () => (/* binding */ ProjectsComponent),
/* harmony export */   "vk": () => (/* binding */ Dummy)
/* harmony export */ });
/* unused harmony export ProjectComponent */
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2042);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4384);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns_format__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8857);






const ProjectsComponent = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("div", {
    target: "e4r3l9o0"
})("display:flex;flex-wrap:wrap;margin-left:-12px;margin-right:-12px;");
const ProjectComponent = ({ data  })=>{
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(C, {
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Aspect, {
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                    fill: true,
                    quality: 100,
                    src: data.image,
                    alt: "",
                    sizes: `(min-width: ${_components_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__/* .breakpoints.xxl */ .AV.xxl}) 414px, (min-width: ${_components_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__/* .breakpoints.xl */ .AV.xl}) 354px, (min-width: ${_components_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__/* .breakpoints.lg */ .AV.lg}) 454px, (min-width: ${_components_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__/* .breakpoints.md */ .AV.md}) 334px, (min-width: ${_components_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__/* .breakpoints.sm */ .AV.sm}) 514px, 400px`
                })
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                children: data.title
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Subtitle, {
                children: [
                    data.category.title,
                    " | ",
                    data.sector.title
                ]
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Dates, {
                children: [
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                children: "Project Started"
                            }),
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                children: ":"
                            }),
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                children: date_fns_format__WEBPACK_IMPORTED_MODULE_4___default()(new Date(data.startAt), "MMM yyyy")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                children: "Project Completed"
                            }),
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                children: ":"
                            }),
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                children: date_fns_format__WEBPACK_IMPORTED_MODULE_4___default()(new Date(data.endAt), "MMM yyyy")
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const Dummy = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("div", {
    target: "e4r3l9o1"
})("margin-left:12px;margin-right:12px;flex:1;min-width:300px;");
const C = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()(_components_Card__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .C, {
    target: "e4r3l9o2"
})("display:flex;flex-direction:column;align-items:stretch;margin:12px;flex:1;min-width:300px;transition:transform 0.3s ease-in-out;&:hover{transform:scale(1.015);}");
const Aspect = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("div", {
    target: "e4r3l9o3"
})("padding-top:", 235 / 3.57, "%;position:relative;& img{object-fit:cover;}");
const Title = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("h2", {
    target: "e4r3l9o4"
})("font-size:20px;margin:24px 24px 4px 24px;");
const Subtitle = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("div", {
    target: "e4r3l9o5"
})("margin:0 24px;");
const Dates = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("table", {
    target: "e4r3l9o6"
})("margin:12px 24px 24px 24px;");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectComponent);


/***/ })

};
;