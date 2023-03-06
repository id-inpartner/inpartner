"use strict";
exports.id = 94;
exports.ids = [94];
exports.modules = {

/***/ 6753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Button */
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fonts_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5256);
/* harmony import */ var _fonts_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fonts_index__WEBPACK_IMPORTED_MODULE_2__);



const Button = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_0___default()), {
    target: "e13khrpr0"
})("font-weight:bold;font-size:16px;font-family:", (_fonts_index__WEBPACK_IMPORTED_MODULE_2___default().style.fontFamily), ";&.btn-primary,&.btn-secondary{box-shadow:1px 3px 3px rgba(0,0,0,0.3);&:hover{box-shadow:1px 3px 3px rgba(0,0,0,0.6);}}");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 841:
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
var GlobalStyle = __webpack_require__(8857);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"src/fonts/index.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"sans"}
var index_tsx_import_Inter_arguments_subsets_latin_variableName_sans_ = __webpack_require__(5256);
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
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.1e88c0cb.png","height":171,"width":1472,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAQAAABJCSfIAAAAGElEQVR42mP4N+lf+79KIC741/yv618XAGijDBFebDLAAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":1});
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
                                            href: "mailto:consultant.customercare@inpartner.id",
                                            children: "consultant.customercare@inpartner.id"
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
                                                href: "https://www.instagram.com/inpartner.id",
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
                                                href: "https://www.facebook.com/inpartner.id",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 576 512",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                                            children: "youtube"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
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
                                        children: "Blog"
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

/***/ 8857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 5562:
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

/***/ 1387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Navbar)
});

// UNUSED EXPORTS: Navbar

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: ./src/components/Button/index.ts
var Button = __webpack_require__(6753);
// EXTERNAL MODULE: external "react-bootstrap/NavDropdown"
var NavDropdown_ = __webpack_require__(9070);
var NavDropdown_default = /*#__PURE__*/__webpack_require__.n(NavDropdown_);
// EXTERNAL MODULE: external "react-bootstrap/Navbar"
var Navbar_ = __webpack_require__(4934);
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar_);
// EXTERNAL MODULE: external "react-bootstrap/Nav"
var Nav_ = __webpack_require__(2540);
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav_);
// EXTERNAL MODULE: external "react-bootstrap/Container"
var Container_ = __webpack_require__(4678);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
;// CONCATENATED MODULE: ./src/images/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.1853afdf.png","height":171,"width":1472,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAJ0lEQVR4nGM0LTs16f9/hq+MjIyfgDQfA8P/lwwMDMKMjAzsQD4DAOmbC/9zg1/HAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":1});
// EXTERNAL MODULE: ./src/components/Image.tsx
var Image = __webpack_require__(5562);
// EXTERNAL MODULE: ./src/components/GlobalStyle.ts
var GlobalStyle = __webpack_require__(8857);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons/faCaretDown"
var faCaretDown_ = __webpack_require__(2215);
;// CONCATENATED MODULE: ./src/components/Navbar/index.tsx














const Nav = /*#__PURE__*/ styled_default()((Nav_default()), {
    target: "e1v0tk860"
})("& > .nav-link,& > .dropdown > .nav-link{font-size:16px;font-weight:400;text-transform:uppercase;line-height:18px;color:black;padding-top:var(--bs-nav-link-padding-y);padding-bottom:var(--bs-nav-link-padding-y);&:hover{color:", GlobalStyle/* color.primary.normal */.$_.primary.normal, ";}@media (min-width:", GlobalStyle/* breakpoints.lg */.AV.lg, "){padding-top:1rem;padding-bottom:1rem;font-size:14px;}position:relative;&:before{content:'';position:absolute;width:calc(100% - 32px);bottom:0;left:16px;height:0.25rem;transform:scaleX(0);transform-origin:right bottom 0;transition:transform 0.2s ease-in-out;background-color:", GlobalStyle/* color.primary.normal */.$_.primary.normal, ";}&.show,&:hover{&:before{transform:scaleX(1);transform-origin:left bottom 0;}}}& > .nav-item.dropdown > .dropdown-toggle.nav-link{&:after{display:none;}&#nav-about-dropdown,&#nav-services-dropdown{display:flex;justify-content:space-between;padding-top:0;padding-bottom:0;align-items:center;@media (min-width:", GlobalStyle/* breakpoints.lg */.AV.lg, "){padding-top:1rem;padding-bottom:1rem;}}& svg{transition:transform 0.3s ease-in-out;height:16px;width:10px;}&.show{& svg{transform:rotate(180deg);}}}");
const DropButton = /*#__PURE__*/ styled_default()(Button/* default */.Z, {
    target: "e1v0tk861"
})("padding-top:4px;padding-bottom:4px;@media (min-width:", GlobalStyle/* breakpoints.lg */.AV.lg, "){display:none;}");
const Container = /*#__PURE__*/ styled_default()((Container_default()), {
    target: "e1v0tk862"
})("max-width:calc(100% - 12px - 12px);@media (min-width:", GlobalStyle/* breakpoints.lg */.AV.lg, "){max-width:calc(100% - 24px - 24px);}");
const N = /*#__PURE__*/ styled_default()((Navbar_default()), {
    target: "e1v0tk863"
})("background-color:#ffffff;box-shadow:0 6px 6px rgba(0,0,0,0.3);& > .container{overflow:visible;}");
const Brand = /*#__PURE__*/ styled_default()((link_default()), {
    target: "e1v0tk864"
})("position:relative;& > div{position:relative;padding-top:", 30 / 2.56, "%;width:120px;@media (min-width:", GlobalStyle/* breakpoints.xl */.AV.xl, "){width:198px;}& > img{object-fit:contain;}}");
const Space = /*#__PURE__*/ styled_default()("div", {
    target: "e1v0tk865"
})("flex:1;");
const GetInTouch = /*#__PURE__*/ styled_default()(Button/* default */.Z, {
    target: "e1v0tk866"
})("margin-top:var(--bs-nav-link-padding-y);@media (min-width:992px){margin-left:2rem;align-self:center;margin-top:0;}");
const ItemLink = ({ href , children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: href,
        passHref: true,
        className: "dropdown-item",
        scroll: true,
        children: children
    });
};
const Navbar = ()=>{
    const [menu, setMenu] = (0,external_react_.useState)("");
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
    return /*#__PURE__*/ jsx_runtime_.jsx(N, {
        expand: "lg",
        sticky: "top",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Brand, {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                            src: logo,
                            alt: "INPARTNER",
                            fill: true,
                            quality: 100,
                            sizes: `(min-width: ${GlobalStyle/* breakpoints.xxl */.AV.xxl}) 256px, (min-width: ${GlobalStyle/* breakpoints.xl */.AV.xl}) 200px, 120px`
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Toggle, {
                    "aria-controls": "inpartner-menus"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Navbar_default()).Collapse, {
                    id: "inpartner-menus",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Space, {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Nav, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((NavDropdown_default()), {
                                    title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/about",
                                                children: "About Us"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(DropButton, {
                                                variant: "outline-light",
                                                onClick: click("nav-about-dropdown"),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                                    icon: faCaretDown_.faCaretDown
                                                })
                                            })
                                        ]
                                    }),
                                    id: "nav-about-dropdown",
                                    show: menu === "nav-about-dropdown",
                                    onMouseLeave: mouseLeave("nav-about-dropdown"),
                                    onMouseEnter: mouseEnter("nav-about-dropdown"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(ItemLink, {
                                            href: {
                                                pathname: "/about",
                                                hash: "vision"
                                            },
                                            children: "Vision"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(ItemLink, {
                                            href: {
                                                pathname: "/about",
                                                hash: "missions"
                                            },
                                            children: "Missions"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(ItemLink, {
                                            href: {
                                                pathname: "/about",
                                                hash: "history"
                                            },
                                            children: "History"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(ItemLink, {
                                            href: {
                                                pathname: "/about",
                                                hash: "values"
                                            },
                                            children: "Values"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(ItemLink, {
                                            href: {
                                                pathname: "/about",
                                                hash: "diversity"
                                            },
                                            children: "Diversity"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(ItemLink, {
                                            href: {
                                                pathname: "/about",
                                                hash: "sustainability"
                                            },
                                            children: "Sustainability"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(ItemLink, {
                                            href: {
                                                pathname: "/about",
                                                hash: "team"
                                            },
                                            children: "Team"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((NavDropdown_default()), {
                                    title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/services",
                                                children: "Services"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(DropButton, {
                                                variant: "outline-light",
                                                onClick: click("nav-services-dropdown"),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                                    icon: faCaretDown_.faCaretDown
                                                })
                                            })
                                        ]
                                    }),
                                    id: "nav-services-dropdown",
                                    show: menu === "nav-services-dropdown",
                                    onMouseLeave: mouseLeave("nav-services-dropdown"),
                                    onMouseEnter: mouseEnter("nav-services-dropdown"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(ItemLink, {
                                            href: {
                                                pathname: "/services",
                                                hash: "business-and-management"
                                            },
                                            children: "Business and Management"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(ItemLink, {
                                            href: {
                                                pathname: "/services",
                                                hash: "investment"
                                            },
                                            children: "Investment"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(ItemLink, {
                                            href: {
                                                pathname: "/services",
                                                hash: "capacity-building"
                                            },
                                            children: "Capacity Building"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: "nav-link",
                                    href: "/sector",
                                    children: "Sectors"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: "nav-link",
                                    href: "/project",
                                    children: "Projects"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: "nav-link",
                                    href: "/career",
                                    children: "Career"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: "nav-link",
                                    href: "/blog",
                                    children: "Blog"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GetInTouch, {
                                    href: "https://wa.me/6281389285475",
                                    children: "Get in Touch"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Navbar = (Navbar);


/***/ })

};
;