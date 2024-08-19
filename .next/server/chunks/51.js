"use strict";
exports.id = 51;
exports.ids = [51];
exports.modules = {

/***/ 4080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.1853afdf.png","height":171,"width":1472,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAACVBMVEU0dss0dcs0dcpRlYMqAAAAA3RSTlNvipZh/Q5zAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEUlEQVR4nGNgYmBgZGBkYgAAACUAB0tarYEAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":1});

/***/ }),

/***/ 6474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ AutoTranslate)
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
    const cookie = (0,cookies_next__WEBPACK_IMPORTED_MODULE_4__.getCookie)("googtrans");
    const [lang, setLang] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(LANGS[cookie] || LANGS["/auto/en"]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const ss = document.body.querySelector("#googleTranslateElementInit");
        if (cookie === "/auto/ko") {
            setLang(LANGS["/auto/ko"]);
            if (!ss) {
                var addScript = document.createElement("script");
                addScript.setAttribute("src", "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit");
                addScript.setAttribute("id", "googleTranslateElementInit");
                document.body.appendChild(addScript);
            }
            window.googleTranslateElementInit = googleTranslateElementInit;
        } else {
            setLang(LANGS["/auto/en"]);
            window.googleTranslateElementInit = undefined;
            if (ss) {
                document.body.removeChild(ss);
            }
        }
    }, [
        cookie
    ]);
    const onSelect = (l)=>{
        if (l.value === "/auto/ko") {
            (0,cookies_next__WEBPACK_IMPORTED_MODULE_4__.setCookie)("googtrans", l.value, {
                sameSite: true,
                secure: false
            });
            window.googleTranslateElementInit = googleTranslateElementInit;
        } else {
            (0,cookies_next__WEBPACK_IMPORTED_MODULE_4__.deleteCookie)("googtrans");
            window.googleTranslateElementInit = undefined;
        }
        window.location.reload();
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        console.log(cookie);
        console.log(lang);
    }, [
        cookie,
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
    target: "ey4gp5r0"
})("display:flex;flex-direction:row;align-items:stretch;align-self:center;");
const Item = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("button", {
    target: "ey4gp5r1"
})("background:none;border:none;");
const Divider = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("div", {
    target: "ey4gp5r2"
})("width:1px;background-color:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_1__/* .color.primary.dark */ .$_.primary.dark, ";");


/***/ }),

/***/ 3900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Button */
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fonts_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3894);
/* harmony import */ var _fonts_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fonts_index__WEBPACK_IMPORTED_MODULE_2__);



const Button = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_0___default()), {
    target: "e13khrpr0"
})("font-weight:bold;font-size:16px;font-family:", (_fonts_index__WEBPACK_IMPORTED_MODULE_2___default().style.fontFamily), ";&.btn-primary,&.btn-secondary{box-shadow:1px 3px 3px rgba(0,0,0,0.3);&:hover{box-shadow:1px 3px 3px rgba(0,0,0,0.6);}}");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 9154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Footer)
});

// UNUSED EXPORTS: Footer

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-bootstrap/Container"
var Container_ = __webpack_require__(4678);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: ./src/components/GlobalStyle.ts
var GlobalStyle = __webpack_require__(9920);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"src/fonts/index.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"sans"}
var index_tsx_import_Inter_arguments_subsets_latin_variableName_sans_ = __webpack_require__(3894);
var index_tsx_import_Inter_arguments_subsets_latin_variableName_sans_default = /*#__PURE__*/__webpack_require__.n(index_tsx_import_Inter_arguments_subsets_latin_variableName_sans_);
;// CONCATENATED MODULE: ./src/components/Footer/styled.ts





const Root = /*#__PURE__*/ styled_default()("div", {
    target: "e1rv6jwp0"
})("background-color:", GlobalStyle/* color.primary.normal */.$_.primary.normal, ";color:white;font-family:", (index_tsx_import_Inter_arguments_subsets_latin_variableName_sans_default()).style.fontFamily, ";box-shadow:2px 0 6px rgba(0,0,0,0.3);& a:hover{cursor:pointer;color:white;opacity:0.6;}");
const Row = /*#__PURE__*/ styled_default()((Container_default()), {
    target: "e1rv6jwp1"
})("display:flex;flex-wrap:wrap;padding-top:25px;flex-direction:column;@media (min-width:", GlobalStyle/* breakpoints.lg */.AV.lg, "){flex-direction:row;}");
const Menus = /*#__PURE__*/ styled_default()("div", {
    target: "e1rv6jwp2"
})("display:flex;flex-direction:column;flex:1;justify-content:space-between;@media (min-width:", GlobalStyle/* breakpoints.sm */.AV.sm, "){flex-direction:row;}@media (min-width:", GlobalStyle/* breakpoints.xl */.AV.xl, "){margin-left:48px;}@media (min-width:", GlobalStyle/* breakpoints.xxl */.AV.xxl, "){margin-left:80px;}");
const Col = /*#__PURE__*/ styled_default()("div", {
    target: "e1rv6jwp3"
})("display:flex;flex-direction:column;");
const MenuTitle = /*#__PURE__*/ styled_default()((link_default()), {
    target: "e1rv6jwp4"
})("padding-top:5px;padding-bottom:5px;font-size:12px;font-weight:bold;text-decoration:none;color:white;margin-top:10px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){font-size:16px;margin-top:0;}");
const Menu = /*#__PURE__*/ styled_default()((link_default()), {
    target: "e1rv6jwp5"
})("padding-top:5px;padding-bottom:5px;font-size:12px;text-decoration:none;color:white;overflow-wrap:break-word;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){font-size:16px;max-width:289px;}");
const Divider = /*#__PURE__*/ styled_default()((Container_default()), {
    target: "e1rv6jwp6"
})("margin-top:25px;height:1px;background-color:white;border-radius:100%;");
const Copyright = /*#__PURE__*/ styled_default()("span", {
    target: "e1rv6jwp7"
})("margin-bottom:25px;font-family:", (index_tsx_import_Inter_arguments_subsets_latin_variableName_sans_default()).style.fontFamily, ";& a{text-decoration:none;color:white;font-weight:bold;}");
const Properties = /*#__PURE__*/ styled_default()("div", {
    target: "e1rv6jwp8"
})("flex:1;display:flex;flex-direction:column;font-size:12px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){font-size:16px;}@media (min-width:", GlobalStyle/* breakpoints.lg */.AV.lg, "){max-width:450px;}@media (min-width:", GlobalStyle/* breakpoints.xl */.AV.xl, "){max-width:480px;}& > div{display:flex;flex-wrap:wrap;&.social{align-items:center;}& > .name{max-width:100px;min-width:72px;padding-top:5px;padding-bottom:5px;}& > .c{min-width:10px;padding-top:5px;padding-bottom:5px;}& > .value{flex:1;& a{display:inline-block;padding-top:5px;padding-bottom:5px;color:white;&:hover{color:white;opacity:0.6;}}&.social{display:flex;margin-left:-8px;& a{display:block;padding:8px;cursor:pointer;& svg{min-width:20px;min-height:22.85px;}& svg path{fill:white;}&:hover{& svg path{color:white;opacity:0.6;}}}}}}");

;// CONCATENATED MODULE: ./src/components/Footer/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.1e88c0cb.png","height":171,"width":1472,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAACVBMVEX///////////+OSuX+AAAAA3RSTlNvipZh/Q5zAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEUlEQVR4nGNgYmBgZGBkYgAAACUAB0tarYEAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":1});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/Footer/index.tsx





const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Root, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Row, {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: logo,
                        alt: "INPARTNER",
                        quality: 100,
                        width: 198,
                        height: 24
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Row, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Properties, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "name",
                                        children: "Phone"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "c",
                                        children: ":"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "value",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "tel:+6289628310192",
                                            children: "0896 2831 0192"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "name",
                                        children: "Email"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "c",
                                        children: ":"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "value",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "mailto:corporatesecretary@inpartner.id",
                                            children: "corporatesecretary@inpartner.id"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "name",
                                        children: "Address"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "c",
                                        children: ":"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "value",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://goo.gl/maps/Jn7pdGFG1Q5j6McL8",
                                                    children: "Pakuwon Tower Lantai 10, Jl. Raya Casablanca Kav.88, Menteng Dalam, Tebet, Jakarta Selatan."
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://goo.gl/maps/VZKExdeS4SheESnX6",
                                                    children: "Jemur Sari Street V No.10, Surabaya"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "name",
                                        children: "Website"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "c",
                                        children: ":"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "value",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            passHref: true,
                                            children: "inpartner.id"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "social",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "name",
                                        children: "Follow Us"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "c",
                                        children: ":"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "value social",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://www.instagram.com/inpartnerconsulting",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 448 512",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                                            children: "instagram"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://www.tiktok.com/@inpartnerconsulting",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 448 512",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                                            children: "TikTok"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://www.linkedin.com/company/inpartner",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 448 512",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                                            children: "linkedin"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://www.facebook.com/profile.php?id=100092037564577",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 512 512",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                                            children: "facebook"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Menus, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Col, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(MenuTitle, {
                                        href: "/",
                                        children: "About Us"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Menu, {
                                        href: {
                                            pathname: "/about",
                                            hash: "vision"
                                        },
                                        children: "Vision"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Menu, {
                                        href: {
                                            pathname: "/about",
                                            hash: "missions"
                                        },
                                        children: "Missions"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Menu, {
                                        href: {
                                            pathname: "/about",
                                            hash: "history"
                                        },
                                        children: "History"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Menu, {
                                        href: {
                                            pathname: "/about",
                                            hash: "values"
                                        },
                                        children: "Values"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Menu, {
                                        href: {
                                            pathname: "/about",
                                            hash: "diversity"
                                        },
                                        children: "Diversity"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Menu, {
                                        href: {
                                            pathname: "/about",
                                            hash: "sustainability"
                                        },
                                        children: "Sustainability"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Menu, {
                                        href: {
                                            pathname: "/about",
                                            hash: "team"
                                        },
                                        children: "Team"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Col, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(MenuTitle, {
                                        href: "/services",
                                        children: "Services"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Menu, {
                                        href: {
                                            pathname: "/services",
                                            hash: "business-and-management"
                                        },
                                        children: "Business and Management Consulting"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Menu, {
                                        href: {
                                            pathname: "/services",
                                            hash: "investment"
                                        },
                                        children: "Investment"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Menu, {
                                        href: {
                                            pathname: "/services",
                                            hash: "capacity-building"
                                        },
                                        children: "Capacity Building"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Col, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(MenuTitle, {
                                        href: "/project",
                                        children: "Projects"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(MenuTitle, {
                                        href: "/sector",
                                        children: "Sectors"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(MenuTitle, {
                                        href: "/career",
                                        children: "Career"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(MenuTitle, {
                                        href: "/blog",
                                        children: "Insight\xa0&\xa0Update"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(MenuTitle, {
                                        href: "https://btf.inpartner.id/public",
                                        children: "ICT-BTF"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Divider, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Row, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Copyright, {
                    children: [
                        `Copyright © ${new Date().getFullYear()} `,
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            passHref: true,
                            href: "/",
                            children: "INPARTNER"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_Footer = (Footer);


/***/ }),

/***/ 9920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$_": () => (/* binding */ color),
/* harmony export */   "AV": () => (/* binding */ breakpoints),
/* harmony export */   "W0": () => (/* binding */ globalStyles)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fonts_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3894);
/* harmony import */ var _fonts_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fonts_index__WEBPACK_IMPORTED_MODULE_1__);


const globalStyles = /*#__PURE__*/ (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)("html,body{top:0px !important;padding:0;margin:0;font-family:", (_fonts_index__WEBPACK_IMPORTED_MODULE_1___default().style.fontFamily), ";scroll-behavior:smooth;}body > div.skiptranslate{display:none;}a{color:inherit;text-decoration:none;}*{box-sizing:border-box;}/* @media (prefers-color-scheme:dark){html{color-scheme:dark;}body{color:white;background:black;}}*/");
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

/***/ 471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Image */
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



const Image = (props)=>{
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Img, {
        ...props,
        alt: props.alt
    });
};
Image.defaultProps = {
    placeholder: "blur",
    onLoadingComplete: (img)=>{
        img.style.backgroundImage = null;
    }
};
const Img = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
    target: "e7en6vk0"
})("transition:all 500ms;transition-timing-function:ease-in-out;object-fit:cover;");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);


/***/ }),

/***/ 213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export DropTitle */
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3853);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCaretDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2215);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCaretDown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faCaretDown__WEBPACK_IMPORTED_MODULE_4__);





const DropTitle = ({ title , onButtonClick , href  })=>{
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: href,
                children: title
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_3__/* .DropButton */ .hd, {
                variant: "outline-light",
                onClick: onButtonClick,
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons_faCaretDown__WEBPACK_IMPORTED_MODULE_4__.faCaretDown
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropTitle);


/***/ }),

/***/ 1472:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ Sectors)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9920);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9070);
/* harmony import */ var react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DropTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(213);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3853);
/* harmony import */ var _hooks_useSectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6925);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useSectors__WEBPACK_IMPORTED_MODULE_6__]);
_hooks_useSectors__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Sectors = ({ id , onButtonClick , onMouseEnter , onMouseLeave , show  })=>{
    const sectors = (0,_hooks_useSectors__WEBPACK_IMPORTED_MODULE_6__/* .useSectors */ .x)();
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Dropdown, {
        title: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DropTitle__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            href: "/sector",
            title: "Sectors",
            onButtonClick: onButtonClick
        }),
        id: id,
        show: show,
        onMouseLeave: onMouseLeave,
        onMouseEnter: onMouseEnter,
        align: "end",
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "items",
            children: sectors.map((it)=>/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_5__/* .ItemLink */ .FB, {
                    href: `/sector/${it.slug}`,
                    children: it.name
                }, it.id))
        })
    });
};
const Dropdown = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()((react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_3___default()), {
    target: "e1tt47cm0"
})("& > .dropdown-menu.show > .items{display:flex;flex-direction:column;align-items:stretch;@media (min-width:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_1__/* .breakpoints.lg */ .AV.lg, "){flex-direction:row;flex-wrap:wrap;min-width:726px;}& > .dropdown-item{white-space:normal;@media (min-width:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_1__/* .breakpoints.lg */ .AV.lg, "){flex:1;min-width:363px;white-space:nowrap;}}}");

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9104:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Navbar */
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9070);
/* harmony import */ var react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4934);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4080);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(471);
/* harmony import */ var _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9920);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3853);
/* harmony import */ var _DropTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(213);
/* harmony import */ var _Sectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1472);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3900);
/* harmony import */ var _components_AutoTranslate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6474);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Sectors__WEBPACK_IMPORTED_MODULE_10__]);
_Sectors__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const Navbar = ()=>{
    const [menu, setMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const mouseEnter = (id)=>()=>setMenu(id);
    const mouseLeave = (id)=>()=>{
            if (menu === id) {
                setMenu("");
            }
        };
    const click = (id)=>()=>{
            if (menu === id) {
                setMenu("");
            } else {
                setMenu(id);
            }
        };
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_8__.N, {
        expand: "lg",
        sticky: "top",
        children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_8__/* .Container */ .W2, {
            children: [
                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_8__/* .Brand */ .H2, {
                    href: "/",
                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            src: _images_logo_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                            alt: "INPARTNER",
                            fill: true,
                            quality: 100,
                            sizes: `(min-width: ${_components_GlobalStyle__WEBPACK_IMPORTED_MODULE_7__/* .breakpoints.xxl */ .AV.xxl}) 256px, (min-width: ${_components_GlobalStyle__WEBPACK_IMPORTED_MODULE_7__/* .breakpoints.xl */ .AV.xl}) 200px, 120px`
                        })
                    })
                }),
                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4___default().Toggle), {
                    "aria-controls": "inpartner-menus"
                }),
                /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4___default().Collapse), {
                    id: "inpartner-menus",
                    children: [
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_8__/* .Space */ .T, {}),
                        /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_8__/* .Nav */ .JL, {
                            children: [
                                /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    title: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DropTitle__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        href: "/about",
                                        title: "About Us",
                                        onButtonClick: click("nav-about-dropdown")
                                    }),
                                    id: "nav-about-dropdown",
                                    show: menu === "nav-about-dropdown",
                                    onMouseLeave: mouseLeave("nav-about-dropdown"),
                                    onMouseEnter: mouseEnter("nav-about-dropdown"),
                                    children: [
                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_8__/* .ItemLink */ .FB, {
                                            href: {
                                                pathname: "/about",
                                                hash: "vision"
                                            },
                                            children: "Vision"
                                        }),
                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_8__/* .ItemLink */ .FB, {
                                            href: {
                                                pathname: "/about",
                                                hash: "missions"
                                            },
                                            children: "Missions"
                                        }),
                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_8__/* .ItemLink */ .FB, {
                                            href: {
                                                pathname: "/about",
                                                hash: "history"
                                            },
                                            children: "History"
                                        }),
                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_8__/* .ItemLink */ .FB, {
                                            href: {
                                                pathname: "/about",
                                                hash: "values"
                                            },
                                            children: "Values"
                                        }),
                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_8__/* .ItemLink */ .FB, {
                                            href: {
                                                pathname: "/about",
                                                hash: "diversity"
                                            },
                                            children: "Diversity"
                                        }),
                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_8__/* .ItemLink */ .FB, {
                                            href: {
                                                pathname: "/about",
                                                hash: "sustainability"
                                            },
                                            children: "Sustainability"
                                        }),
                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_8__/* .ItemLink */ .FB, {
                                            href: {
                                                pathname: "/about",
                                                hash: "team"
                                            },
                                            children: "Team"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    title: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DropTitle__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        href: "/services",
                                        title: "Services",
                                        onButtonClick: click("nav-services-dropdown")
                                    }),
                                    id: "nav-services-dropdown",
                                    show: menu === "nav-services-dropdown",
                                    onMouseLeave: mouseLeave("nav-services-dropdown"),
                                    onMouseEnter: mouseEnter("nav-services-dropdown"),
                                    children: [
                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_8__/* .ItemLink */ .FB, {
                                            href: {
                                                pathname: "/services",
                                                hash: "business-and-management"
                                            },
                                            children: "Business and Management"
                                        }),
                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_8__/* .ItemLink */ .FB, {
                                            href: {
                                                pathname: "/services",
                                                hash: "investment"
                                            },
                                            children: "Investment"
                                        }),
                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_8__/* .ItemLink */ .FB, {
                                            href: {
                                                pathname: "/services",
                                                hash: "capacity-building"
                                            },
                                            children: "Capacity Building"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Sectors__WEBPACK_IMPORTED_MODULE_10__/* .Sectors */ .j, {
                                    id: "nav-sectors-dropdown",
                                    show: menu === "nav-sectors-dropdown",
                                    onButtonClick: click("nav-sectors-dropdown"),
                                    onMouseLeave: mouseLeave("nav-sectors-dropdown"),
                                    onMouseEnter: mouseEnter("nav-sectors-dropdown")
                                }),
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    className: "nav-link",
                                    href: "/project",
                                    children: "Projects"
                                }),
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    className: "nav-link",
                                    href: "/career",
                                    children: "Career"
                                }),
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    className: "nav-link",
                                    href: "/blog",
                                    children: "Insight\xa0&\xa0Update"
                                }),
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_8__/* .GetInTouch */ .Rs, {
                                    href: "/contact",
                                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        children: "Get in Touch"
                                    })
                                }),
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AutoTranslate__WEBPACK_IMPORTED_MODULE_12__/* .AutoTranslate */ .l, {})
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FB": () => (/* binding */ ItemLink),
/* harmony export */   "H2": () => (/* binding */ Brand),
/* harmony export */   "JL": () => (/* binding */ Nav),
/* harmony export */   "N": () => (/* binding */ N),
/* harmony export */   "Rs": () => (/* binding */ GetInTouch),
/* harmony export */   "T": () => (/* binding */ Space),
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "hd": () => (/* binding */ DropButton)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3900);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4934);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2540);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9920);








const Nav = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default()), {
    target: "e1mq74u50"
})("& > .nav-link,& > .dropdown-center > .nav-link,& > .dropdown > .nav-link{font-size:16px;font-weight:400;text-transform:uppercase;line-height:18px;color:black;padding-top:var(--bs-nav-link-padding-y);padding-bottom:var(--bs-nav-link-padding-y);&:hover{color:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_7__/* .color.primary.normal */ .$_.primary.normal, ";}@media (min-width:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_7__/* .breakpoints.lg */ .AV.lg, "){padding-top:1rem;padding-bottom:1rem;font-size:14px;}position:relative;&:before{content:'';position:absolute;width:calc(100% - 32px);bottom:0;left:16px;height:0.25rem;transform:scaleX(0);transform-origin:right bottom 0;transition:transform 0.2s ease-in-out;background-color:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_7__/* .color.primary.normal */ .$_.primary.normal, ";}&.show,&:hover{&:before{transform:scaleX(1);transform-origin:left bottom 0;}}}& > .nav-item.dropdown > .dropdown-toggle.nav-link{&:after{display:none;}&#nav-about-dropdown,&#nav-services-dropdown,&#nav-sectors-dropdown{display:flex;justify-content:space-between;padding-top:0;padding-bottom:0;align-items:center;@media (min-width:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_7__/* .breakpoints.lg */ .AV.lg, "){padding-top:1rem;padding-bottom:1rem;}}& svg{transition:transform 0.3s ease-in-out;height:16px;width:10px;}&.show{& svg{transform:rotate(180deg);}}}");
const DropButton = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()(_components_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    target: "e1mq74u51"
})("padding-top:4px;padding-bottom:4px;@media (min-width:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_7__/* .breakpoints.lg */ .AV.lg, "){display:none;}");
const Container = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6___default()), {
    target: "e1mq74u52"
})("max-width:calc(100% - 12px - 12px);@media (min-width:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_7__/* .breakpoints.lg */ .AV.lg, "){max-width:calc(100% - 24px - 24px);}");
const N = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4___default()), {
    target: "e1mq74u53"
})("background-color:#ffffff;box-shadow:0 6px 6px rgba(0,0,0,0.3);& > .container{overflow:visible;}");
const Brand = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    target: "e1mq74u54"
})("position:relative;& > div{position:relative;padding-top:", 30 / 2.56, "%;width:120px;@media (min-width:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_7__/* .breakpoints.xl */ .AV.xl, "){width:198px;}& > img{object-fit:contain;}}");
const Space = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("div", {
    target: "e1mq74u55"
})("flex:1;");
const GetInTouch = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    target: "e1mq74u56"
})("margin-top:var(--bs-nav-link-padding-y);@media (min-width:992px){margin-left:2rem;align-self:center;margin-top:0;}");
const ItemLink = ({ href , children  })=>{
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: href,
        passHref: true,
        className: "dropdown-item",
        scroll: true,
        children: children
    });
};


/***/ }),

/***/ 6925:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ useSectors)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const key = `sector-list-${new Date()}`;
const useSectors = ()=>{
    const [sectors, setSectors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)( false ? 0 : []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("/api/sector").then(({ data  })=>{
            setSectors(data);
            if (false) {}
        }).catch((e)=>{
        //
        });
    }, []);
    return sectors;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;