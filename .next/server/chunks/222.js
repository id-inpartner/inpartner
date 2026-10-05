"use strict";
exports.id = 222;
exports.ids = [222];
exports.modules = {

/***/ 4080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.1853afdf.png","height":171,"width":1472,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAACVBMVEU0dss0dcs0dcpRlYMqAAAAA3RSTlNvipZh/Q5zAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEUlEQVR4nGNgYmBgZGBkYgAAACUAB0tarYEAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":1});

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
// EXTERNAL MODULE: ./src/locales/useTranslation.ts + 2 modules
var useTranslation = __webpack_require__(3064);
;// CONCATENATED MODULE: ./src/components/Footer/index.tsx






const Footer = ()=>{
    const { t  } = (0,useTranslation/* default */.Z)();
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
                                        children: t.footer.phone
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
                                        children: t.footer.email
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
                                        children: t.footer.address
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
                                                    children: t.footer.jakartaOffice
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://goo.gl/maps/VZKExdeS4SheESnX6",
                                                    children: t.footer.surabayaOffice
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
                                        children: t.footer.website
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
                                        children: t.footer.followUs
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
                                        children: t.footer.aboutUs
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Menu, {
                                        href: {
                                            pathname: "/about",
                                            hash: "vision"
                                        },
                                        children: t.footer.vision
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Menu, {
                                        href: {
                                            pathname: "/about",
                                            hash: "missions"
                                        },
                                        children: t.footer.missions
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Menu, {
                                        href: {
                                            pathname: "/about",
                                            hash: "history"
                                        },
                                        children: t.footer.history
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Menu, {
                                        href: {
                                            pathname: "/about",
                                            hash: "values"
                                        },
                                        children: t.footer.values
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Menu, {
                                        href: {
                                            pathname: "/about",
                                            hash: "diversity"
                                        },
                                        children: t.footer.diversity
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Menu, {
                                        href: {
                                            pathname: "/about",
                                            hash: "sustainability"
                                        },
                                        children: t.footer.sustainability
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Menu, {
                                        href: {
                                            pathname: "/about",
                                            hash: "team"
                                        },
                                        children: t.footer.team
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Col, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(MenuTitle, {
                                        href: "/services",
                                        children: t.footer.services
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Menu, {
                                        href: {
                                            pathname: "/services",
                                            hash: "business-and-management"
                                        },
                                        children: t.footer.business
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Menu, {
                                        href: {
                                            pathname: "/services",
                                            hash: "investment"
                                        },
                                        children: t.footer.investment
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Menu, {
                                        href: {
                                            pathname: "/services",
                                            hash: "capacity-building"
                                        },
                                        children: t.footer.capacity
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Col, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(MenuTitle, {
                                        href: "/project",
                                        children: t.footer.projects
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(MenuTitle, {
                                        href: "/sector",
                                        children: t.footer.sectors
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(MenuTitle, {
                                        href: "/career",
                                        children: t.footer.career
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(MenuTitle, {
                                        href: "/blog",
                                        children: t.footer.blog
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(MenuTitle, {
                                        href: "https://btf.inpartner.id/public",
                                        children: t.footer.ictBtf
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
                            children: t.footer.copyright
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
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_5__);






const TitleLink = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_5___default()((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    target: "e71muer0"
})("color:inherit;text-decoration:none;display:flex;align-items:center;flex:1;");
const DropTitle = ({ title , onButtonClick , href  })=>{
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TitleLink, {
                href: href,
                onClick: (e)=>e.stopPropagation(),
                children: title
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_3__/* .DropButton */ .hd, {
                variant: "outline-light",
                onClick: (e)=>{
                    e.stopPropagation();
                    onButtonClick(e);
                },
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons_faCaretDown__WEBPACK_IMPORTED_MODULE_4__.faCaretDown
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropTitle);


/***/ }),

/***/ 1714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export NavDropdown */
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8582);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_2__);



const NavDropdown = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ id , title , children , className ="" , align , ...props }, ref)=>{
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_2___default()), {
        ref: ref,
        ...props,
        className: `nav-item ${className}`.trim(),
        align: align,
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_2___default().Toggle), {
                as: "div",
                id: id,
                className: "nav-link",
                children: title
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_2___default().Menu), {
                children: children
            })
        ]
    });
});
NavDropdown.displayName = "NavDropdown";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavDropdown);


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
/* harmony import */ var _NavDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1714);
/* harmony import */ var _DropTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(213);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3853);
/* harmony import */ var _hooks_useSectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6925);
/* harmony import */ var _locales_useTranslation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3064);
/* harmony import */ var _locales_sectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useSectors__WEBPACK_IMPORTED_MODULE_6__]);
_hooks_useSectors__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const Sectors = ({ id , onButtonClick , onMouseEnter , onMouseLeave , show  })=>{
    const { t , locale  } = (0,_locales_useTranslation__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const sectors = (0,_hooks_useSectors__WEBPACK_IMPORTED_MODULE_6__/* .useSectors */ .x)();
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Dropdown, {
        title: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DropTitle__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            href: "/sector",
            title: t.navbar.sectors,
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
                    children: (0,_locales_sectors__WEBPACK_IMPORTED_MODULE_8__/* .getSectorTitle */ .qZ)(it.slug, it.name, locale)
                }, it.id))
        })
    });
};
const Dropdown = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()(_NavDropdown__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
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
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4934);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _NavDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1714);
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4080);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(471);
/* harmony import */ var _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9920);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3853);
/* harmony import */ var _DropTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(213);
/* harmony import */ var _Sectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1472);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3900);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _locales_useTranslation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3064);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Sectors__WEBPACK_IMPORTED_MODULE_10__]);
_Sectors__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














const AutoTranslate = next_dynamic__WEBPACK_IMPORTED_MODULE_12___default()(()=>__webpack_require__.e(/* import() */ 474).then(__webpack_require__.bind(__webpack_require__, 6474)), {
    loadableGenerated: {
        modules: [
            "../components/Navbar/index.tsx -> " + "@components/AutoTranslate"
        ]
    }
});
const Navbar = ()=>{
    const { t  } = (0,_locales_useTranslation__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)();
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
                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3___default().Toggle), {
                    "aria-controls": "inpartner-menus"
                }),
                /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3___default().Collapse), {
                    id: "inpartner-menus",
                    children: [
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_8__/* .Space */ .T, {}),
                        /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_8__/* .Nav */ .JL, {
                            children: [
                                /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_NavDropdown__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    title: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DropTitle__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        href: "/about",
                                        title: t.navbar.about,
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
                                            children: t.navbar.vision
                                        }),
                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_8__/* .ItemLink */ .FB, {
                                            href: {
                                                pathname: "/about",
                                                hash: "missions"
                                            },
                                            children: t.footer.missions
                                        }),
                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_8__/* .ItemLink */ .FB, {
                                            href: {
                                                pathname: "/about",
                                                hash: "history"
                                            },
                                            children: t.navbar.history
                                        }),
                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_8__/* .ItemLink */ .FB, {
                                            href: {
                                                pathname: "/about",
                                                hash: "values"
                                            },
                                            children: t.footer.values
                                        }),
                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_8__/* .ItemLink */ .FB, {
                                            href: {
                                                pathname: "/about",
                                                hash: "diversity"
                                            },
                                            children: t.footer.diversity
                                        }),
                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_8__/* .ItemLink */ .FB, {
                                            href: {
                                                pathname: "/about",
                                                hash: "sustainability"
                                            },
                                            children: t.footer.sustainability
                                        }),
                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_8__/* .ItemLink */ .FB, {
                                            href: {
                                                pathname: "/about",
                                                hash: "team"
                                            },
                                            children: t.navbar.team
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_NavDropdown__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    title: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DropTitle__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        href: "/services",
                                        title: t.navbar.services,
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
                                            children: t.navbar.business
                                        }),
                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_8__/* .ItemLink */ .FB, {
                                            href: {
                                                pathname: "/services",
                                                hash: "investment"
                                            },
                                            children: t.navbar.investment
                                        }),
                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_8__/* .ItemLink */ .FB, {
                                            href: {
                                                pathname: "/services",
                                                hash: "capacity-building"
                                            },
                                            children: t.navbar.capacity
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
                                    children: t.navbar.projects
                                }),
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    className: "nav-link",
                                    href: "/career",
                                    children: t.navbar.career
                                }),
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    className: "nav-link",
                                    href: "/blog",
                                    children: t.navbar.blog
                                }),
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_8__/* .GetInTouch */ .Rs, {
                                    href: "/contact",
                                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        as: "span",
                                        children: t.navbar.getInTouch
                                    })
                                }),
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AutoTranslate, {})
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

/***/ 7507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export SEO */
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



const SEO = ({ title , description , canonicalUrl , ogImage ="https://inpartner.id/og-image.jpg" , ogType ="website" , publishedTime , modifiedTime , author , section , schemaData =null  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const locale = router.locale || "en";
    const baseUrl = "https://inpartner.id";
    // Clean path without query parameters or locale prefix for alternate links
    const pathWithoutQuery = router.asPath.split("?")[0].split("#")[0];
    const cleanPath = pathWithoutQuery.replace(/^\/ko(\/|$)/, "/");
    const normalizedPath = cleanPath === "/" ? "" : cleanPath;
    const enUrl = `${baseUrl}${normalizedPath}`;
    const koUrl = `${baseUrl}/ko${normalizedPath}`;
    const currentCanonical = canonicalUrl || (locale === "ko" ? koUrl : enUrl);
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: title
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: description
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "canonical",
                href: currentCanonical
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "alternate",
                hrefLang: "en",
                href: enUrl
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "alternate",
                hrefLang: "ko",
                href: koUrl
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "alternate",
                hrefLang: "x-default",
                href: enUrl
            }),
            locale === "ko" && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                httpEquiv: "content-language",
                content: "ko-kr"
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: ogType
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: title
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:description",
                content: description
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:url",
                content: currentCanonical
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image",
                content: ogImage
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:site_name",
                content: locale === "ko" ? "인파트너" : "Inpartner"
            }),
            ogType === "article" && publishedTime && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "article:published_time",
                content: publishedTime
            }),
            ogType === "article" && modifiedTime && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "article:modified_time",
                content: modifiedTime
            }),
            ogType === "article" && author && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "article:author",
                content: author
            }),
            ogType === "article" && section && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "article:section",
                content: section
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:title",
                content: title
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:description",
                content: description
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:image",
                content: ogImage
            }),
            schemaData && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(schemaData)
                }
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEO);


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


const CACHE_KEY = "inpartner_sectors_v1";
const DEFAULT_SECTORS = [
    {
        id: "1",
        slug: "restructuring-pre-ipo-ipo-and-right-issue",
        name: "Restructuring, Pre-IPO, IPO, and Right Issue"
    },
    {
        id: "2",
        slug: "alternative-investment",
        name: "Alternative Investment"
    },
    {
        id: "3",
        slug: "financial-services",
        name: "Financial Services"
    },
    {
        id: "4",
        slug: "infrastructure",
        name: "Infrastructure"
    },
    {
        id: "5",
        slug: "renewable-energy",
        name: "Renewable Energy"
    },
    {
        id: "6",
        slug: "cleantech",
        name: "Cleantech"
    },
    {
        id: "7",
        slug: "environmental",
        name: "Environmental"
    },
    {
        id: "8",
        slug: "health-care",
        name: "Health Care"
    },
    {
        id: "9",
        slug: "information-technology",
        name: "Information Technology"
    },
    {
        id: "10",
        slug: "property",
        name: "Property"
    },
    {
        id: "11",
        slug: "education-training",
        name: "Education & Training"
    },
    {
        id: "12",
        slug: "biotechnology",
        name: "Biotechnology"
    },
    {
        id: "13",
        slug: "electric-vehicle",
        name: "Electric Vehicle"
    },
    {
        id: "14",
        slug: "waste-management",
        name: "Waste Management"
    }
];
const useSectors = ()=>{
    const [sectors, setSectors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(DEFAULT_SECTORS);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // 1. Try to load cached sectors for immediate client-side display
        try {
            const cached = localStorage.getItem(CACHE_KEY);
            if (cached) {
                const parsed = JSON.parse(cached);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    setSectors(parsed);
                }
            }
        } catch  {
        // Ignore storage errors (e.g., incognito mode or disabled storage)
        }
        // 2. Fetch latest sectors from API
        axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("/api/sector").then(({ data  })=>{
            if (Array.isArray(data) && data.length > 0) {
                setSectors(data);
                try {
                    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
                } catch  {
                // Ignore storage errors
                }
            }
        }).catch(()=>{
        // Keep cached state or default fallback on failure
        });
    }, []);
    return sectors;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$z": () => (/* binding */ getCategoryTitle),
/* harmony export */   "DB": () => (/* binding */ getSectorTitleByName),
/* harmony export */   "qZ": () => (/* binding */ getSectorTitle)
/* harmony export */ });
/* unused harmony export sectorMap */
const sectorMap = {
    "restructuring-pre-ipo-ipo-and-right-issue": {
        en: "Restructuring, Pre-IPO, IPO, and Right Issue",
        ko: "기업 구조조정, 프리IPO, IPO 및 유상증자"
    },
    "alternative-investment": {
        en: "Alternative Investment",
        ko: "대체 투자 (사모펀드 & 벤처캐피탈)"
    },
    "financial-services": {
        en: "Financial Services",
        ko: "금융 서비스 및 자산 관리"
    },
    "health-and-pharmaceutical": {
        en: "Health and Pharmaceutical",
        ko: "보건 의료 및 제약 바이오"
    },
    biotechnology: {
        en: "Biotechnology",
        ko: "생명공학 및 바이오테크"
    },
    "renewable-energy": {
        en: "Renewable Energy",
        ko: "신재생에너지 및 클린테크"
    },
    "waste-solution": {
        en: "Waste Solution",
        ko: "폐기물 처리 및 환경 솔루션"
    },
    "property-investment-and-development": {
        en: "Property Investment and Development",
        ko: "부동산 투자 및 개발"
    },
    "electric-vehicle": {
        en: "Electric Vehicle",
        ko: "전기차 (EV) 및 이차전지"
    },
    infrastructure: {
        en: "Infrastructure",
        ko: "인프라 및 사회간접자본"
    },
    "information-technology": {
        en: "Information Technology",
        ko: "정보기술 (IT) 및 디지털 솔루션"
    },
    "environmental-social-and-governance": {
        en: "Environmental, Social, and Governance",
        ko: "ESG (환경\xb7사회\xb7지배구조) 경영"
    },
    "food-and-beverange": {
        en: "Food and Beverage",
        ko: "식음료 (F&B) 및 농식품 산업"
    },
    "industrial-gas": {
        en: "Industrial Gas",
        ko: "산업용 가스 및 화학"
    }
};
const getSectorTitle = (slug, defaultTitle, locale = "en")=>{
    if (!slug) return defaultTitle;
    const cleanSlug = slug.toLowerCase().trim();
    const found = sectorMap[cleanSlug];
    if (!found) return defaultTitle;
    return locale === "ko" ? found.ko : found.en || defaultTitle;
};
const getSectorTitleByName = (name, locale = "en")=>{
    if (!name) return "";
    if (locale !== "ko") return name;
    const lower = name.toLowerCase().trim();
    for (const key of Object.keys(sectorMap)){
        const item = sectorMap[key];
        if (key === lower || item.en.toLowerCase() === lower || lower.includes(key.replace(/-/g, " ")) || item.en.toLowerCase().includes(lower)) {
            return item.ko;
        }
    }
    return name;
};
const getCategoryTitle = (name, locale = "en")=>{
    if (!name) return "";
    if (locale !== "ko") return name;
    const lower = name.toLowerCase();
    if (lower.includes("business")) return "경영 및 비즈니스 컨설팅";
    if (lower.includes("investment")) return "투자 자문 및 금융";
    if (lower.includes("capacity")) return "기업 역량 강화 프로그램";
    return name;
};


/***/ }),

/***/ 3064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ locales_useTranslation)
});

// UNUSED EXPORTS: useTranslation

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/locales/en.ts
const en = {
    navbar: {
        about: "About",
        history: "History",
        vision: "Vision and Mission",
        team: "Team",
        services: "Services",
        business: "Business and Management",
        investment: "Investment",
        capacity: "Capacity Building",
        sectors: "Sectors",
        projects: "Projects",
        career: "Career",
        blog: "Insight & Update",
        getInTouch: "Get in Touch"
    },
    footer: {
        phone: "Phone",
        email: "Email",
        address: "Address",
        website: "Website",
        followUs: "Follow Us",
        jakartaOffice: "Pakuwon Tower 10th Floor, Jl. Raya Casablanca Kav.88, Menteng Dalam, Tebet, Jakarta Selatan.",
        surabayaOffice: "Jemur Sari Street V No.10, Surabaya",
        aboutUs: "About Us",
        vision: "Vision",
        missions: "Missions",
        history: "History",
        values: "Values",
        diversity: "Diversity",
        sustainability: "Sustainability",
        team: "Team",
        services: "Services",
        business: "Business and Management Consulting",
        investment: "Investment",
        capacity: "Capacity Building",
        projects: "Projects",
        sectors: "Sectors",
        career: "Career",
        blog: "Insight & Update",
        ictBtf: "ICT-BTF",
        copyright: "INPARTNER. All rights reserved."
    },
    home: {
        banner: {
            title: "UNLEASH THE POWER OF YOUR BUSINESS",
            subtitle: "Going Beyond Conventional Consulting",
            description: "Through our advisory services, we take a comprehensive approach to diagnose business challenges and deliver measurable, high-impact outcomes. We have clear guides to unleash the power of your business for a brighter future.",
            learnMore: "Learn More"
        },
        about: {
            title: "About Us",
            text: "INPARTNER (PT Inpartner Optima Integra) is a premier management consulting firm established in 2009. We started as a consultant to help increase accessibility to market, financing, technology, and productivity and provide capacity building for the MSME sector in East Java. Then we change for a better through continuous improvement. Now, we come up as a consultation service in business and management to middle and large corporation.",
            learnMore: "Learn More"
        },
        pillars: {
            title: "We Have Four Pillars To Work On",
            subtitle: "We Have Years Of Experience Working On These Fields",
            funding: "Funding",
            growth: "Growth",
            profitability: "Profitability",
            capacity: "Capacity Building"
        },
        services: {
            title: "Our Service & Scope",
            business: "Business and Management Consulting",
            capacity: "Capacity Building (The Executive Business Program)",
            investment: "Investment"
        },
        sectors: {
            title: "Sectors & Themes Coverage",
            subtitle: "Here are access that we can provide",
            viewAll: "View All Sectors"
        },
        clients: {
            title: "Our Clients"
        },
        projects: {
            title: "Projects",
            viewAll: "View All"
        },
        contact: {
            title: "Let's Get in Touch With Us",
            description: "Send us a message and we'll get back to you as soon as possible.",
            namePlaceholder: "Enter your full name",
            emailPlaceholder: "Enter your email",
            emailFeedback: "We'll never share your email with anyone else.",
            subjectPlaceholder: "Enter your subject",
            messagePlaceholder: "Enter your message",
            submit: "Submit",
            submitting: "Submitting...",
            success: "Message sent successfully!",
            failed: "Failed to send message. Please try again."
        },
        blog: {
            title: "Insight & Update",
            viewAll: "View All"
        }
    },
    aboutPage: {
        bannerTitle: "About Us",
        bannerDesc: "PT Inpartner Optima Integra (INPARTNER) is a premier management consulting and investment advisory firm in Indonesia. Established in 2009, we take a comprehensive approach to diagnosing business challenges and delivering measurable, high-impact outcomes for our clients.",
        visionTitle: "Vision",
        visionText: "The Most Trusted Consulting Partner To help create positive and endure changes in Local and Global Coverage.",
        missionsTitle: "Missions",
        missionsText: "Our mission is to combine knowledge, technology, information, and network to unlock solution and reach client's goals.",
        historyTitle: "History",
        historyText1: "INPARTNER (PT Inpartner Optima Integra) is a premier management consulting firm established in 2009. We started as a consultant to help increase accessibility to market, financing, technology, and productivity and provide capacity building for the MSME sector in East Java.",
        historyText2: "Our purpose is also to give a change for a better through continuous improvement. And now, we come up as consultant services in business and management to the middle and large corporations.",
        valuesTitle: "Values",
        valuesDesc: "With our core principle, Going Beyond Conventional Consulting, we are committed to unlocking comprehensive strategic access for our clients, including financing, corporate growth, and executive talent development.",
        diversityTitle: "Diversity",
        diversityText1: "We will always be committed to advancing diversity in the company. At INPARTNER, of course, we have different backgrounds. Starting from ethnicity, culture, education level, and way of thinking. However, this diversity can unite and raise a sense of cooperation to help our clients improve performance in various sectors.",
        diversityText2: "With this diversity, we aim to be able to develop and retain people with extraordinary backgrounds. Diversity is not a barrier to continuing to develop our insights, especially in partnering and serving clients to make a real change.",
        sustainabilityTitle: "Sustainability",
        sustainabilityText1: "In Inpartner, it is important to pay attention to sustainability. This is because sustainable business can basically be the continuity of a company. That way, the company will have a sustainable system and be able to have a positive impact in the short and long term.",
        sustainabilityText2: "The goal is to ensure the continuity of the company's operations. So that there are several ways that can be taken to have a big impact. Such as being able to reduce unnecessary expenses, and on the one hand, the negative impact on the environment will also be reduced.",
        teamTitle: "Team",
        teamDesc: "INPARTNER team are diverse with strong analytic, great insight, excellent idea as well as fun that focus on goals and developing long-term strategic plans",
        meetTeam: "Meet our Team"
    },
    teamPage: {
        bannerTitle: "Our Team",
        teamTitle: "Our Team",
        teamSubtitle: "Meet our powerhouse team - dedicated, collaborative, and driven to deliver excellence every step of the way.",
        team1Title: "Team 1",
        team1Desc: "Our team is a diverse mix of talent, expertise, and personality, all coming together to create magic for our clients.",
        team2Title: "Team 2",
        team2Desc: "Behind every great company is a great team. Meet ours, who are committed to achieving nothing but the best for our clients.",
        team3Title: "Team 3",
        team3Desc: "At the heart of our success is our team, who work tirelessly to exceed expectations and push boundaries.",
        cditTitle: "Creative Digital & IT",
        cditDesc: "Our team is more than just a group of individuals - we're a family united by our passion for innovation and success.",
        ourPeople: "Our People"
    },
    servicesPage: {
        bannerTitle: "Service & Scope",
        businessTitle: "Business and Management Consulting",
        businessDesc1: "We bring a fresh view with the aim of improving the effectiveness of business strategy, Organizational performance and operational processes. We align business strategy and goals with people, processes, technology and data, have the ability to optimize and improve the way you operate, and as your strategic partner, we'll be there for you every step of the way.",
        businessDesc2: "Our business experts research on potential growth areas, study segments, sub segment's demands and expectations and draw strategy to reach out to the new clientele, spot on current trends and anticipate changes in advance. We also recommend innovative strategic alternatives to achieve key organizational milestones.",
        investmentTitle: "Investment",
        investmentDesc: "Our experienced investment advisors work closely with clients to understand their strategic objectives and develop customized solutions to help them achieve their goals. Whether clients are individuals, institutional investors, or corporate clients, Inpartner can provide the expertise and support they need to make informed investment decisions and achieve their investment objectives.",
        capacityTitle: "Capacity Building (The Executive Business Program)",
        capacityDesc: "Inpartner's capacity building division delivers executive mentoring, corporate training, and organizational development. We empower client leadership to formulate actionable business plans, accelerate operational efficiency, and forge resilient institutional partnerships.",
        viewMore: "View More"
    },
    projectsPage: {
        bannerTitle: "Projects",
        sideTitle: "Projects",
        catBusiness: "Business and Management Consulting",
        catInvestment: "Investment",
        catCapacity: "Capacity Building (The Executive Business Program)",
        selectSector: "Select Sector",
        allSectors: "All Sectors",
        empty: "No projects found."
    },
    sectorsPage: {
        bannerTitle: "Sectors & Themes Coverage",
        bannerDesc: "Here are access that we can provide",
        seeAll: "See All"
    },
    contactPage: {
        bannerTitle: "Contact Us",
        contactH1: "Contact Inpartner Consulting",
        title: "How Can We Assist Your Business?",
        desc: "Thank you for your interest in INPARTNER. Your inquiry is important to us. To help us route your request to the appropriate team or person, we need a bit of information about you and the nature of your question or project.",
        jakartaOffice: "Jakarta Head Office",
        surabayaOffice: "Surabaya Branch Office",
        chatWa: "Chat with Us on WhatsApp",
        waPrompt: "To contact us for customer service questions or any other matter, please use QR Code.",
        formTitle: "Contact Information",
        fullName: "Full Name*",
        email: "Email*",
        emailFeedback: "We'll never share your email with anyone else.",
        company: "Company Name*",
        subject: "Subject*",
        questionProject: "Question or Project*",
        namePlaceholder: "Enter your full name",
        emailPlaceholder: "Enter your email",
        companyPlaceholder: "Enter your company name",
        subjectPlaceholder: "Enter your subject",
        messagePlaceholder: "Enter your question or project",
        submit: "Submit",
        submitting: "Submitting...",
        success: "Thank you. Your message has been sent successfully.",
        failed: "Failed to send message. Please try again.",
        recorded: "Message recorded!"
    },
    careerPage: {
        bannerTitle: "Career",
        location: "Location",
        department: "Department",
        workType: "Work Type",
        search: "Search",
        jobsAvailable: "Jobs Available",
        viewMore: "View More",
        apply: "Apply Now",
        detail: "Detail",
        locJakarta: "Jakarta",
        locWorkAnywhere: "Work Anywhere",
        locJakartaWorkAnywhere: "Jakarta / Work Anywhere",
        deptConsultant: "Business Consultant",
        deptHrd: "HRD",
        typeFullTime: "Full Time",
        typePartTime: "Part Time",
        typeInternship: "Internship",
        job1Title: "Junior Consultant",
        job2Title: "Research Assistant"
    },
    blogPage: {
        bannerTitle: "Insight & Update",
        searchPlaceholder: "Search article ...",
        allCategories: "All Categories",
        readMore: "Read More",
        noArticles: "No articles found.",
        noCategoryArticles: "No articles found in this category.",
        checkOtherArticles: "Check Other Articles",
        relatedArticles: "Related Articles",
        noRelatedArticles: "No related articles"
    },
    sectorTraining: {
        whyChooseTitle: "Why Choose Inpartner?",
        expertInstructor: "Expert Instructor",
        expertDesc: "Learn from industry experts with extensive experience and knowledge.",
        flexibleLearning: "Flexible Learning",
        flexibleDesc: "Access our courses online or in-person, with flexible scheduling to fit your busy lifestyle.",
        careerSupport: "Career Support",
        careerDesc: "Benefit from our career support services, including resume building, interview preparation, and job placement assistance.",
        cuttingEdge: "Cutting-Edge Curriculum",
        cuttingEdgeDesc: "Stay ahead with our up-to-date curriculum, incorporating the latest trends and technologies."
    }
};
/* harmony default export */ const locales_en = (en);

;// CONCATENATED MODULE: ./src/locales/ko.ts
const ko = {
    navbar: {
        about: "회사 소개",
        history: "회사 연혁",
        vision: "비전 및 미션",
        team: "전문가 팀",
        services: "컨설팅 서비스",
        business: "경영 및 전략 컨설팅",
        investment: "투자 자문",
        capacity: "기업 역량 강화",
        sectors: "산업 분야",
        projects: "주요 프로젝트",
        career: "인재 채용",
        blog: "인사이트 & 소식",
        getInTouch: "상담 문의"
    },
    footer: {
        phone: "전화 문의",
        email: "이메일",
        address: "오피스 주소",
        website: "공식 웹사이트",
        followUs: "공식 채널",
        jakartaOffice: "자카르타 본사: 파쿠원 타워 10층 (Pakuwon Tower Lantai 10, Jl. Raya Casablanca Kav.88, Jakarta Selatan)",
        surabayaOffice: "수라바야 지사: Jl. Jemur Sari V No.10, Surabaya, Jawa Timur",
        aboutUs: "회사 소개",
        vision: "비전",
        missions: "미션",
        history: "연혁",
        values: "핵심 가치",
        diversity: "다양성",
        sustainability: "지속가능경영",
        team: "전문가 팀",
        services: "컨설팅 서비스",
        business: "경영 및 전략 컨설팅",
        investment: "투자 자문 및 금융",
        capacity: "기업 역량 강화 교육",
        projects: "주요 프로젝트",
        sectors: "산업별 커버리지",
        career: "인재 채용",
        blog: "인사이트 & 소식",
        ictBtf: "ICT-BTF",
        copyright: "INPARTNER. 판권 소유."
    },
    home: {
        banner: {
            title: "비즈니스의 잠재력을 극대화하십시오",
            subtitle: "기존 컨설팅의 한계를 넘어서는 혁신 파트너",
            description: "인파트너는 다각적인 기업 진단을 통해 경영 과제를 정확히 파악하고, 측정 가능하며 실질적인 성과를 창출합니다. 귀사의 더 밝은 미래와 비즈니스 도약을 위한 명확한 성공 로드맵을 제시합니다.",
            learnMore: "자세히 보기"
        },
        about: {
            title: "인파트너 소개",
            text: "인파트너(PT Inpartner Optima Integra)는 2009년 설립된 인도네시아 전문 경영 컨설팅 펌입니다. 동부 자바 지역 중소기업의 시장 접근성, 자금 조달, 기술 도입 및 생산성 향상을 지원하는 역량 강화 컨설팅으로 출발하여 지속적인 혁신을 이루어왔습니다. 현재는 인도네시아 및 글로벌 중견\xb7대기업을 대상으로 포괄적인 경영 및 전략 자문 서비스를 제공하고 있습니다.",
            learnMore: "자세히 보기"
        },
        pillars: {
            title: "인파트너의 4대 핵심 축",
            subtitle: "해당 분야에서의 풍부한 실무 경험과 검증된 전문성을 보유하고 있습니다",
            funding: "자금 조달 & 투자 유치",
            growth: "지속 가능한 성장",
            profitability: "수익성 극대화",
            capacity: "조직 역량 강화"
        },
        services: {
            title: "핵심 서비스 & 자문 영역",
            business: "경영 및 비즈니스 컨설팅",
            capacity: "기업 역량 강화 (The Executive Business Program)",
            investment: "투자 자문 (Investment Advisory)"
        },
        sectors: {
            title: "산업별 커버리지 & 전문 분야",
            subtitle: "인파트너가 제공하는 광범위한 산업 네트워크와 전문 자문 역량",
            viewAll: "전체 산업 보기"
        },
        clients: {
            title: "주요 파트너 & 고객사"
        },
        projects: {
            title: "주요 프로젝트 실적",
            viewAll: "전체 프로젝트 보기"
        },
        contact: {
            title: "상담 및 협업 문의",
            description: "문의 사항을 남겨주시면 담당 컨설턴트가 신속하게 검토 후 연락드리겠습니다.",
            namePlaceholder: "성명을 입력하십시오",
            emailPlaceholder: "이메일 주소를 입력하십시오",
            emailFeedback: "귀하의 개인정보 및 이메일은 안전하게 보호됩니다.",
            subjectPlaceholder: "문의 제목을 입력하십시오",
            messagePlaceholder: "문의 내용 및 프로젝트 세부사항을 입력하십시오",
            submit: "문의 접수하기",
            submitting: "전송 중...",
            success: "문의가 성공적으로 접수되었습니다. 곧 연락드리겠습니다.",
            failed: "문의 전송에 실패하였습니다. 다시 시도해 주십시오."
        },
        blog: {
            title: "비즈니스 인사이트 & 뉴스",
            viewAll: "전체 아티클 보기"
        }
    },
    aboutPage: {
        bannerTitle: "회사 소개",
        bannerDesc: "PT Inpartner Optima Integra(인파트너)는 2009년 설립된 인도네시아 선도 경영 컨설팅 및 투자 자문 기업입니다. 기업이 직면한 복합적인 과제를 정밀 진단하고 측정 가능하며 실질적인 경영 성과를 실현합니다.",
        visionTitle: "비전 (Vision)",
        visionText: "인도네시아 국내외 시장에서 긍정적이고 지속 가능한 변화를 창출하는 가장 신뢰받는 최고의 컨설팅 파트너가 됩니다.",
        missionsTitle: "미션 (Missions)",
        missionsText: "전문 지식, 첨단 기술, 시장 정보, 그리고 강력한 네트워크를 결합하여 고객사의 비즈니스 과제를 해결하고 전략적 목표 달성을 견인합니다.",
        historyTitle: "회사 연혁 (History)",
        historyText1: "인파트너(PT Inpartner Optima Integra)는 2009년 설립되었습니다. 초기에는 인도네시아 동부 자바 지역 중소기업(MSME)의 시장 진출, 금융 조달, 기술 접목 및 생산성 향상을 위한 역량 강화 컨설팅으로 시작하였습니다.",
        historyText2: "끊임없는 개선과 혁신을 통해 성장을 거듭하였으며, 현재는 국내외 유수 중견기업 및 대기업을 대상으로 최고 수준의 경영 및 투자 자문 서비스를 제공하는 종합 컨설팅 펌으로 자리매김하였습니다.",
        valuesTitle: "핵심 가치 (Values)",
        valuesDesc: "‘기존 컨설팅을 넘어서는 혁신(Going Beyond Conventional Consulting)’이라는 핵심 원칙 아래, 고객사를 위해 자금 조달, 비즈니스 확장, 최고경영진 육성을 아우르는 전방위적 전략 솔루션을 제공합니다.",
        diversityTitle: "다양성 (Diversity)",
        diversityText1: "인파트너는 조직 내 다양성의 가치를 존중하고 적극 장려합니다. 우리는 서로 다른 문화, 교육적 배경, 전문 지식, 사고방식을 가진 인재들로 구성되어 있습니다. 이러한 다양성은 긴밀한 협업의 원동력이 되어 다각적인 산업 분야에서 고객사의 성과를 극대화합니다.",
        diversityText2: "우리는 탁월한 역량을 갖춘 다양한 인재를 육성하고 함께 성장하는 것을 목표로 합니다. 다양성은 장벽이 아닌 통찰력 확장의 기회이며, 고객사에게 실질적인 변화를 선사하는 강력한 원천입니다.",
        sustainabilityTitle: "지속가능경영 (Sustainability)",
        sustainabilityText1: "인파트너는 지속가능성을 기업 경영의 핵심 가치로 여깁니다. 지속 가능한 비즈니스는 기업 존속과 성장의 근간이며, 이를 통해 단기적 성과뿐만 아니라 장기적으로도 사회에 긍정적인 영향을 미칠 수 있습니다.",
        sustainabilityText2: "우리의 목표는 고객 기업의 연속성과 운영 효율성을 보장하는 것입니다. 불필요한 비용과 리소스를 절감하는 동시에 환경과 사회에 미치는 부정적 영향을 최소화하는 균형 잡힌 전략을 수립합니다.",
        teamTitle: "전문가 팀 (Team)",
        teamDesc: "인파트너의 팀은 강력한 분석력, 깊이 있는 통찰력, 창의적인 아이디어를 바탕으로 고객사의 장기 전략 수립과 목표 달성에 헌신합니다.",
        meetTeam: "팀 소개 보기"
    },
    teamPage: {
        bannerTitle: "전문가 팀 소개",
        teamTitle: "리더십 & 전문 컨설턴트",
        teamSubtitle: "풍부한 산업 경험과 전문 지식을 갖춘 인파트너의 팀은 고객의 모든 성공 여정에 함께하며 최고의 성과를 창출합니다.",
        team1Title: "전략 컨설팅 본부 1",
        team1Desc: "다양한 산업 전문성과 전략적 실행력을 결합하여 고객사의 비즈니스 혁신을 견인합니다.",
        team2Title: "재무 및 투자 자문 본부 2",
        team2Desc: "기업 가치 극대화와 정밀한 재무 모델링을 통해 최적의 투자 및 자본 유치 솔루션을 제공합니다.",
        team3Title: "운영 및 조직 혁신 본부 3",
        team3Desc: "운영 프로세스 최적화와 글로벌 벤치마킹을 통해 기업의 생산성과 지속 가능성을 강화합니다.",
        cditTitle: "디지털 혁신 & IT 솔루션",
        cditDesc: "기술 혁신과 디지털 전환(DX)을 통해 차세대 엔터프라이즈 플랫폼과 솔루션을 구축합니다.",
        ourPeople: "인파트너 구성원"
    },
    servicesPage: {
        bannerTitle: "서비스 및 자문 영역",
        businessTitle: "경영 및 비즈니스 컨설팅 (Business & Management Consulting)",
        businessDesc1: "인파트너는 기업 전략, 조직 성과 및 운영 프로세스의 효과성을 극대화하기 위한 혁신적인 시각을 제공합니다. 비즈니스 전략과 목표를 인재, 프로세스, 기술 및 데이터와 정렬하여 고객사의 운영 방식을 최적화하고 지속적인 성장을 지원합니다.",
        businessDesc2: "전문가 팀이 잠재적 성장 영역을 분석하고, 시장 세분화 및 고객 수요를 파악하여 신규 고객 유치 및 최신 트렌드 대응 전략을 수립합니다. 핵심 마일스톤 달성을 위한 혁신적인 전략 대안을 제안합니다.",
        investmentTitle: "투자 자문 (Investment Advisory)",
        investmentDesc: "인파트너의 전문 투자 자문 팀은 고객의 전략적 목표를 깊이 이해하고 맞춤형 솔루션을 개발합니다. 개인 자산가, 기관 투자자 및 기업 고객 모두에게 합리적인 투자 의사결정과 목표 달성을 위한 전문 지식과 전략적 지원을 제공합니다.",
        capacityTitle: "기업 역량 강화 (The Executive Business Program)",
        capacityDesc: "인파트너 역량 강화 사업부는 최고경영진 멘토링, 기업 맞춤형 임직원 교육, 조직 역량 강화를 전담합니다. 실행 가능한 비즈니스 플랜 수립, 운영 효율성 극대화, 지속 가능한 파트너십 구축을 위한 리더십 로드맵을 제공합니다.",
        viewMore: "자세히 보기"
    },
    projectsPage: {
        bannerTitle: "주요 프로젝트 실적",
        sideTitle: "프로젝트 분야",
        catBusiness: "경영 및 비즈니스 컨설팅",
        catInvestment: "투자 자문 및 금융",
        catCapacity: "기업 역량 강화 프로그램",
        selectSector: "산업 분야 선택",
        allSectors: "전체 산업 분야",
        empty: "등록된 프로젝트가 없습니다."
    },
    sectorsPage: {
        bannerTitle: "산업별 커버리지 & 전문 분야",
        bannerDesc: "인파트너가 제공하는 광범위한 산업 네트워크와 전문 자문 역량",
        seeAll: "전체 보기"
    },
    contactPage: {
        bannerTitle: "상담 및 문의",
        contactH1: "인파트너 컨설팅 상담 및 문의",
        title: "귀사의 비즈니스를 어떻게 도와드릴까요?",
        desc: "인파트너에 관심을 가져주셔서 감사합니다. 고객님의 문의사항을 신속하고 정확하게 해당 전문 부서에 전달하기 위해 아래 정보를 입력해 주시기 바랍니다.",
        jakartaOffice: "자카르타 본사",
        surabayaOffice: "수라바야 지사",
        chatWa: "WhatsApp 실시간 상담",
        waPrompt: "실시간 고객 상담이나 기타 문의 사항은 QR 코드를 통해 WhatsApp으로 즉시 연결하실 수 있습니다.",
        formTitle: "상담 문의 정보",
        fullName: "성명 (담당자명)*",
        email: "이메일 주소*",
        emailFeedback: "입력하신 이메일 정보는 상담 목적으로만 안전하게 사용됩니다.",
        company: "회사명*",
        subject: "문의 제목*",
        questionProject: "문의 내용 및 프로젝트 세부사항*",
        namePlaceholder: "성명을 입력하십시오",
        emailPlaceholder: "이메일 주소를 입력하십시오",
        companyPlaceholder: "회사명을 입력하십시오",
        subjectPlaceholder: "문의 제목을 입력하십시오",
        messagePlaceholder: "문의하실 프로젝트 내용 및 세부 요구사항을 기재해 주십시오",
        submit: "문의 접수",
        submitting: "접수 중...",
        success: "문의가 성공적으로 접수되었습니다. 전문 컨설턴트가 신속히 연락드리겠습니다.",
        failed: "문의 접수에 실패하였습니다. 다시 시도해 주시거나 전화로 문의해 주십시오.",
        recorded: "문의가 성공적으로 접수되었습니다!"
    },
    careerPage: {
        bannerTitle: "인재 채용 & 커리어",
        location: "근무 지역",
        department: "모집 부문",
        workType: "고용 형태",
        search: "검색",
        jobsAvailable: "현재 채용 중인 포지션",
        viewMore: "상세 보기",
        apply: "지원하기",
        detail: "상세 정보",
        locJakarta: "자카르타",
        locWorkAnywhere: "재택/원격 근무",
        locJakartaWorkAnywhere: "자카르타 / 원격 근무 가능",
        deptConsultant: "경영 컨설턴트",
        deptHrd: "인사(HRD)",
        typeFullTime: "정규직",
        typePartTime: "파트타임",
        typeInternship: "인턴십",
        job1Title: "주니어 컨설턴트 (Junior Consultant)",
        job2Title: "리서치 어시스턴트 (Research Assistant)"
    },
    blogPage: {
        bannerTitle: "비즈니스 인사이트 & 뉴스",
        searchPlaceholder: "아티클 검색...",
        allCategories: "전체 카테고리",
        readMore: "자세히 읽기",
        noArticles: "등록된 아티클이 없습니다.",
        noCategoryArticles: "해당 카테고리에 등록된 아티클이 없습니다.",
        checkOtherArticles: "다른 아티클 살펴보기",
        relatedArticles: "관련 아티클",
        noRelatedArticles: "관련 아티클이 없습니다."
    },
    sectorTraining: {
        whyChooseTitle: "왜 인파트너인가?",
        expertInstructor: "최고의 산업 전문가 강사진",
        expertDesc: "풍부한 실무 경험과 전문성을 갖춘 산업계 최고 전문가들로부터 배웁니다.",
        flexibleLearning: "유연한 맞춤형 학습",
        flexibleDesc: "온\xb7오프라인 병행 및 유연한 일정 조율로 바쁜 비즈니스 환경에 최적화된 학습을 제공합니다.",
        careerSupport: "경력 개발 및 직무 지원",
        careerDesc: "이력서 첨삭, 면접 코칭 및 인재 매칭 등 종합적인 커리어 지원 혜택을 제공합니다.",
        cuttingEdge: "최첨단 실무 커리큘럼",
        cuttingEdgeDesc: "글로벌 비즈니스 트렌드와 최신 기술을 반영한 실전 커리큘럼으로 경쟁력을 선점합니다."
    }
};
/* harmony default export */ const locales_ko = (ko);

;// CONCATENATED MODULE: ./src/locales/useTranslation.ts



const useTranslation = ()=>{
    const router = (0,router_.useRouter)();
    const locale = router?.locale || "en";
    const isKo = locale === "ko";
    const t = isKo ? locales_ko : locales_en;
    return {
        t,
        locale,
        isKo
    };
};
/* harmony default export */ const locales_useTranslation = (useTranslation);


/***/ })

};
;