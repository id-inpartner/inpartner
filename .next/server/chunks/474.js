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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_4__);





const googleTranslateElementInit = ()=>{
    new window.google.translate.TranslateElement({
        pageLanguage: "auto",
        autoDisplay: false,
        includedLanguages: "en,ko",
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
    }, "google_translate_element");
};
const LANGS = {
    "/auto/en": {
        label: "EN",
        value: "/auto/en"
    },
    "/auto/ko": {
        label: "KR",
        value: "/auto/ko"
    }
};
const AutoTranslate = ()=>{
    const [lang, setLang] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(LANGS["/auto/en"]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const cookie = typeof window.localStorage !== "undefined" && localStorage.getItem("googtrans");
        const ss = document.body.querySelector("#googleTranslateElementInit");
        if (cookie === "/auto/ko") {
            (0,cookies_next__WEBPACK_IMPORTED_MODULE_4__.setCookie)("googtrans", cookie, {
                sameSite: true,
                secure: false
            });
            setLang(LANGS["/auto/ko"]);
            if (!ss) {
                var addScript = document.createElement("script");
                addScript.setAttribute("src", "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit");
                addScript.setAttribute("id", "googleTranslateElementInit");
                document.body.appendChild(addScript);
            }
            window.googleTranslateElementInit = googleTranslateElementInit;
        } else {
            (0,cookies_next__WEBPACK_IMPORTED_MODULE_4__.setCookie)("googtrans", "", {
                sameSite: true,
                secure: false,
                maxAge: 0
            });
            setLang(LANGS["/auto/en"]);
            window.googleTranslateElementInit = undefined;
            if (ss) {
                document.body.removeChild(ss);
            }
        }
    }, []);
    const onSelect = (l)=>{
        if (l.value === "/auto/ko") {
            localStorage.setItem("googtrans", l.value);
            (0,cookies_next__WEBPACK_IMPORTED_MODULE_4__.setCookie)("googtrans", l.value, {
                sameSite: true,
                secure: false
            });
            window.googleTranslateElementInit = googleTranslateElementInit;
        } else {
            localStorage.removeItem("googtrans");
            (0,cookies_next__WEBPACK_IMPORTED_MODULE_4__.setCookie)("googtrans", "", {
                sameSite: true,
                secure: false,
                maxAge: 0
            });
            window.googleTranslateElementInit = undefined;
        }
        setTimeout(()=>window.location.reload());
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        console.log(lang);
    }, [
        lang
    ]);
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "google_translate_element",
                style: {
                    width: "0px",
                    height: "0px",
                    position: "absolute",
                    left: "50%",
                    zIndex: -99999,
                    opacity: 0,
                    display: "hidden"
                }
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RadioGroup, {
                className: "notranslate",
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Item, {
                        disabled: lang === LANGS["/auto/en"],
                        className: "notranslate",
                        onClick: ()=>onSelect(LANGS["/auto/en"]),
                        children: LANGS["/auto/en"].label
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Divider, {}),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Item, {
                        disabled: lang === LANGS["/auto/ko"],
                        className: "notranslate",
                        onClick: ()=>onSelect(LANGS["/auto/ko"]),
                        children: LANGS["/auto/ko"].label
                    })
                ]
            })
        ]
    });
};
const RadioGroup = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("div", {
    target: "ek1mxci0"
})("display:flex;flex-direction:row;align-items:stretch;align-self:center;");
const Item = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("button", {
    target: "ek1mxci1"
})("background:none;border:none;");
const Divider = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("div", {
    target: "ek1mxci2"
})("width:1px;background-color:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_1__/* .color.primary.dark */ .$_.primary.dark, ";");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AutoTranslate);


/***/ })

};
;