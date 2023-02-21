"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export SectionTitle */
/* harmony import */ var _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8857);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fonts_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5256);
/* harmony import */ var _fonts_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fonts_index__WEBPACK_IMPORTED_MODULE_2__);



const SectionTitle = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()("h5", {
    target: "e3y0cv0"
})("font-weight:600;font-family:", (_fonts_index__WEBPACK_IMPORTED_MODULE_2___default().style.fontFamily), ";font-size:20px;@media (min-width:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__/* .breakpoints.md */ .AV.md, "){font-size:28px;}");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionTitle);


/***/ }),

/***/ 3411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Text */
/* harmony import */ var _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8857);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);


const Text = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()("div", {
    target: "ehekjoj0"
})("font-size:16px;text-align:justify;@media (min-width:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__/* .breakpoints.md */ .AV.md, "){font-size:20px;}");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);


/***/ }),

/***/ 598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/components/GlobalStyle.ts
var GlobalStyle = __webpack_require__(8857);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: external "react-bootstrap/Container"
var Container_ = __webpack_require__(4678);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: ./src/components/ColumnContainer.ts
var ColumnContainer = __webpack_require__(3320);
// EXTERNAL MODULE: ./src/components/Text/index.tsx
var Text = __webpack_require__(3411);
// EXTERNAL MODULE: ./src/components/Button/index.ts
var Button = __webpack_require__(6753);
;// CONCATENATED MODULE: ./src/containers/Home/styled.ts



const ViewMore = /*#__PURE__*/ styled_default()(Button/* default */.Z, {
    target: "e1sn07zy0"
})("margin-top:10px;margin-bottom:16px;align-self:center;min-width:140px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-top:24px;margin-bottom:30px;}");

// EXTERNAL MODULE: ./src/components/SectionTitle/index.tsx
var SectionTitle = __webpack_require__(5242);
;// CONCATENATED MODULE: ./src/containers/Home/About/styled.ts



const Title = /*#__PURE__*/ styled_default()(SectionTitle/* default */.Z, {
    target: "e8hmkci0"
})("text-align:center;margin-top:50px;margin-bottom:10px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-top:90px;margin-bottom:24px;}");

;// CONCATENATED MODULE: ./src/containers/Home/About/index.tsx





const About = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ColumnContainer/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                children: "About Us"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Text/* default */.Z, {
                children: "INPARTNER (PT Inpartner Optima Integra) is a transformation of management consulting services which established in 2009. We started as consultant to help increase accessibility to market, financing, technology, productivity and provide capacity building of the MSME sector in East Jave. Then we change for a better through continuous improvement. Now, we come up as a consultation service in business and management to middle and large corporation."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ViewMore, {
                href: "/about",
                children: "Learn More"
            })
        ]
    });
};
/* harmony default export */ const Home_About = (About);

;// CONCATENATED MODULE: external "react-bootstrap/Carousel"
const Carousel_namespaceObject = require("react-bootstrap/Carousel");
var Carousel_default = /*#__PURE__*/__webpack_require__.n(Carousel_namespaceObject);
;// CONCATENATED MODULE: ./src/containers/Home/Banner/1.png
/* harmony default export */ const _1 = ({"src":"/_next/static/media/1.c2e35b66.png","height":943,"width":1440,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAcklEQVR42g3LsRECMQxE0V1LPsnAMMyQkBAQUgFNkFEgPVEDEREBATb4fPrpn8fj7U4OAAK8hlymz/X82B5Oqm4kogSsIB01YdR/UjEjBkghFJpZixf2WXNxxAhBeiy21vrGfqqTgSEgYIfusu/X8nx/F256G1YtWG72AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/containers/Home/Banner/2.png
/* harmony default export */ const _2 = ({"src":"/_next/static/media/2.6739ea3d.png","height":950,"width":1440,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/ABlMoxlLnxlKmyBMmgA9mXuEo3F+oytZpAAjX7YjXrIjXa4pXawATqiGkrCBj7EYTZIALHPJKXHFKXDAJXLCLnG9a3ycUllqCy5ZAESa4Eqd4Uqd4FSTzjh1qDJegkxxmzuEzACHtNWFrMl9o76InKhlmsKAmrGbpq57ocqHMjjjGDjWkwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/containers/Home/Banner/3.png
/* harmony default export */ const _3 = ({"src":"/_next/static/media/3.39a3e5a0.png","height":949,"width":1440,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAcklEQVR42g2LQQ7CIBREAT9UqBhr06Qx0b0bD+MlvZwL05UBZuifebuXZ1/vDztAkE0fXLnN23EoIkNU4dgAdKnP+zeezJgm8WlUQTYHmvaHRvGSBZLOGYTS2UsN7mDX/puDl3zNjToUmIX2UTdHPy3rDml6Q39dINXjAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Image.tsx
var Image = __webpack_require__(5562);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"src/fonts/index.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"sans"}
var index_tsx_import_Inter_arguments_subsets_latin_variableName_sans_ = __webpack_require__(5256);
var index_tsx_import_Inter_arguments_subsets_latin_variableName_sans_default = /*#__PURE__*/__webpack_require__.n(index_tsx_import_Inter_arguments_subsets_latin_variableName_sans_);
;// CONCATENATED MODULE: ./src/containers/Home/Banner/styled.ts







const C = /*#__PURE__*/ styled_default()((Carousel_default()), {
    target: "e1fw9g3y0"
})("& .carousel-indicators{& > button{background-color:transparent;width:24px;height:24px;position:relative;opacity:1;transition:all 0.2s ease-in-out;&:before{width:8px;height:8px;content:'';border-radius:50%;background-color:#d9d9d9;position:absolute;left:8px;top:8px;}&:hover{transform:scale(1.2);&:before{background-color:var(--bs-primary);border:2px solid white;}}}& > .active{&:before{background-color:var(--bs-primary);}}@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){& > button{width:40px;height:40px;&:before{width:16px;height:16px;left:12px;top:12px;}}}margin-bottom:0;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-bottom:1rem;}@media (min-width:", GlobalStyle/* breakpoints.lg */.AV.lg, "){margin-bottom:2rem;}@media (min-width:", GlobalStyle/* breakpoints.xl */.AV.xl, "){margin-bottom:3rem;}}");
const Item = /*#__PURE__*/ styled_default()("div", {
    target: "e1fw9g3y1"
})("padding-top:", 702 / 13.66, "%;position:relative;@media (min-width:1440px){padding-top:740.017px;}");
const ItemInner = /*#__PURE__*/ styled_default()("div", {
    target: "e1fw9g3y2"
})("position:absolute;left:0;right:0;bottom:0;top:0;width:100%;height:100%;");
const BI = /*#__PURE__*/ styled_default()(Image/* default */.Z, {
    target: "e1fw9g3y3"
})("object-fit:cover;");
const Root = /*#__PURE__*/ styled_default()("div", {
    target: "e1fw9g3y4"
})("position:relative;");
const RootInner = /*#__PURE__*/ styled_default()("div", {
    target: "e1fw9g3y5"
})("position:absolute;left:0;right:0;bottom:0;top:0;");
const ContentContainer = /*#__PURE__*/ styled_default()((Container_default()), {
    target: "e1fw9g3y6"
})("display:flex;flex-direction:column;justify-content:center;height:100%;");
const Content = /*#__PURE__*/ styled_default()("div", {
    target: "e1fw9g3y7"
})("margin-right:auto;max-width:900px;color:white;font-family:", (index_tsx_import_Inter_arguments_subsets_latin_variableName_sans_default()).style.fontFamily, ";");
const styled_Title = /*#__PURE__*/ styled_default()("h1", {
    target: "e1fw9g3y8"
})("font-family:", (index_tsx_import_Inter_arguments_subsets_latin_variableName_sans_default()).style.fontFamily, ";font-weight:600;font-size:16px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){font-size:38px;}text-shadow:3px 3px 3px rgba(0,0,0,0.4);margin-bottom:0;");
const Subtitle = /*#__PURE__*/ styled_default()("div", {
    target: "e1fw9g3y9"
})("font-weight:500;font-size:12px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){font-size:28px;}text-shadow:3px 3px 3px rgba(0,0,0,0.4);");
const Description = /*#__PURE__*/ styled_default()("div", {
    target: "e1fw9g3y10"
})("font-size:10px;margin-top:10px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-top:24px;font-size:20px;}text-shadow:3px 3px 3px rgba(0,0,0,0.4);");
const LearnMore = /*#__PURE__*/ styled_default()(Button/* default */.Z, {
    target: "e1fw9g3y11"
})("margin-top:10px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-top:24px;min-width:140px;}");

;// CONCATENATED MODULE: ./src/containers/Home/Banner/index.tsx








const Banner = ()=>{
    const [index, setIndex] = (0,external_react_.useState)(0);
    const [interval, setInterval] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        const d = setTimeout(()=>{
            setInterval(5000);
        }, 15000);
        return ()=>{
            clearTimeout(d);
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Root, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(C, {
                touch: true,
                activeIndex: index,
                onSelect: (i)=>setIndex(i),
                controls: false,
                interval: interval,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Carousel_default()).Item, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Item, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ItemInner, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(BI, {
                                    fill: true,
                                    quality: 100,
                                    alt: "",
                                    src: _1,
                                    priority: true
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Carousel_default()).Item, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Item, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ItemInner, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(BI, {
                                    fill: true,
                                    quality: 100,
                                    alt: "",
                                    src: _2
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Carousel_default()).Item, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Item, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ItemInner, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(BI, {
                                    fill: true,
                                    quality: 100,
                                    alt: "",
                                    src: _3
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(RootInner, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(ContentContainer, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Content, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(styled_Title, {
                                children: "UNLEASH THE POWER OF YOUR BUSINESS"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Subtitle, {
                                children: "Go Beyond Than Just Consultancy"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Description, {
                                children: "Through our Consultation Services, we take a holistic approach to identify the problem and give you a home run. We have clear guides to unleash the power of your business for brighter future."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(LearnMore, {
                                href: "/about",
                                variant: "secondary",
                                children: "Learn More"
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const Home_Banner = (Banner);

;// CONCATENATED MODULE: ./src/containers/Home/Clients/styled.ts



const Clients_styled_Title = /*#__PURE__*/ styled_default()(SectionTitle/* default */.Z, {
    target: "exo2eev0"
})("text-align:center;margin-top:50px;margin-bottom:0px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-top:90px;margin-bottom:28px;}");
const Con = /*#__PURE__*/ styled_default()("div", {
    target: "exo2eev1"
})("display:flex;overflow-x:hidden;margin-top:32px;");
const Row = /*#__PURE__*/ styled_default()("div", {
    target: "exo2eev2"
})("display:flex;align-items:center;overflow:visible;& > img{margin-left:16px;margin-right:16px;object-fit:contain;flex:0 0 auto;position:relative;}will-change:transform;animation:marquee-horizontal-alt 100s linear infinite;@keyframes marquee-horizontal-alt{from{transform:translateX(-100%);}to{transform:translateX(0%);}}&.last{animation:marquee-horizontal 100s linear infinite;@keyframes marquee-horizontal{from{transform:translateX(0%);}to{transform:translateX(-100%);}}}");
const Items = /*#__PURE__*/ styled_default()("div", {
    target: "exo2eev3"
})("display:flex;flex:0 0 auto;align-items:center;justify-content:center;margin-right:-16px;margin-left:-16px;&.last{margin-bottom:92px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-bottom:120px;}}&:hover{& > div{animation-play-state:paused;}}");

;// CONCATENATED MODULE: ./src/containers/Home/Clients/ug-mandiri.png
/* harmony default export */ const ug_mandiri = ({"src":"/_next/static/media/ug-mandiri.ad01ad4f.png","height":94,"width":369,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAIAAADq9gq6AAAAPUlEQVR42gEyAM3/AOXW0PHWw//fwvncxNfX4NfY4c7P2tDR3ADLwsfm2dP07uzv6uvl5evk5Ovg4ejk5esD9ymeF0GpeAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/bank-bengkulu.jpg
/* harmony default export */ const bank_bengkulu = ({"src":"/_next/static/media/bank-bengkulu.e3426a57.jpg","height":94,"width":435,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAIACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAooH/xAAYEAACAwAAAAAAAAAAAAAAAAAAAzNywf/aAAgBAQABPwBEKK4f/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQAxcf/aAAgBAgEBPwAoyf/EABgRAAIDAAAAAAAAAAAAAAAAAAABAjJx/9oACAEDAQE/AJWen//Z","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/kimia-farma.png
/* harmony default export */ const kimia_farma = ({"src":"/_next/static/media/kimia-farma.09e17438.png","height":431,"width":1200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAXElEQVR42mOAgU8TmcU+T2JI/TaZIR1IyzAAwYMOQ0YgNZvpyyQGtq+TGew/TWQKeNypGw3kuzzq1OOGaLWsqFW0KS9h0KnOY2Bo8WJgaExk0KhJB4oVMVhWlAMAfykcjaHSe88AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/plan-international.png
/* harmony default export */ const plan_international = ({"src":"/_next/static/media/plan-international.15ab5088.png","height":107,"width":395,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAIAAADq9gq6AAAAPUlEQVR42gEyAM3/APPh7PHg6+nu+Nvh8sLO6r/M6cLO6sHN6gDj5PHCyefT3PDF0Ouds+CUrN6ftOCetOAKIifWX/PkfQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/mo-biol.png
/* harmony default export */ const mo_biol = ({"src":"/_next/static/media/mo-biol.21df1216.png","height":47,"width":130,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAASklEQVR42mP4jwEOXD90+cU1hievnz15/fzF+9cnT508derUq5evOlf09B2ewnDw/PHNx3btOH1g846tq1et3rZt24TFkz58/QgAW9c7yWINHLsAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/jnk.png
/* harmony default export */ const jnk = ({"src":"/_next/static/media/jnk.6bfa9c5c.png","height":73,"width":165,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/AOfq8ICQsLu/y////+vs8OXn7Ovt8ers8ACPmayjnpxJWoDo6u2fp7xecZlrep7S1d4AkJGd4saCe3yLucHRj5u0eYmpkZ22w8nVANbb58/FtP/tx+nt8+Dj6ubp7+To7uPm7P7cSJA3BwXgAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/berdikari.png
/* harmony default export */ const berdikari = ({"src":"/_next/static/media/berdikari.39d05a2d.png","height":80,"width":164,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAaElEQVR42gUA7QqCMHDv/1BB/qj+SDKjhFpUlttd6OEHc8ybJyrF6Ot6tnZNKTjXZtmgNYdZLdQx2PA0ky6YWkaI4Nh7Vdxxr5vyTbv8cyibY4XGjSKiXj+6GvxCXxm4nB/56fZHEpENFT1WoFG9HuwAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/jsn.png
/* harmony default export */ const jsn = ({"src":"/_next/static/media/jsn.16764258.png","height":74,"width":134,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/AOyvrd3GzKmet/Tz9b/A07W2zMfI2MrK2gDqnZrn2tqsssnPz9yoqMOdnbyBgq55eqgA8e7y4OHk2Nnlo6bEw8XXsrTMurzSs7bOAO3j5+TY4N/S2+jc4+nd4+rf5ejd5Ond43oCS/p+GzlAAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/bkpm.png
/* harmony default export */ const bkpm = ({"src":"/_next/static/media/bkpm.b36816e2.png","height":101,"width":132,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAhUlEQVR42mP49+/f////X7z8sHrDwS3Htr37+grIBQoyQCTOX7hX0zO/ftr0a08uIkmAway5u+ct2AtkQCWA1I8fv4Doxq0nly7f//X7NxABBUES9x+82rT57JWrj06dvrNn76Vnz96BJD59f//87fN7Tx88fP7oxbsXT149ffX+5afvHwDB3YFxHW8f1QAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/kemenkopukm.png
/* harmony default export */ const kemenkopukm = ({"src":"/_next/static/media/kemenkopukm.97f786a8.png","height":101,"width":131,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAjklEQVR42k2OvQuCQByGf/8/NEhDe0O51xYNQllRhNFwXR9imtd9eZmIYXGXoosPD+/48oBp0O1qczxhZ719Zzn8O6QZHU+t/rDnIQdEooRSTCZMvKgk9sQejCx028Pc3dTOFu5yt7oEZ8JIEJHvT8MB4Vo/vMcMX0PvKfzm1UDMZUT5gwmu0rwoi0/Z5lRh6n/KvE7DGgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/batan.png
/* harmony default export */ const batan = ({"src":"/_next/static/media/batan.3fed5754.png","height":110,"width":107,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAsUlEQVR42iXJ6QqCQBQF4Hn/dynqV9gmmZqEOmlquYUxoqiZS7mA6DTagXvhnA8Mw4AxzotagrYo20VRkUpG8AdX017B9R3p8AzxJID8vorSYN1VqP/4DHtMSp+MYCCc3e2n6ZfItZPAs1BmjECu+4Z1qDwQI2q8n6hxgUZomhaT9CVu07yOm67EU8B8tjV0Rzc8mpYdEynQEkWd5y5gvxOYg0St2A3FQXhbLmhShZP6A/tyq34p94ZjAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/bumiyasa.png
/* harmony default export */ const bumiyasa = ({"src":"/_next/static/media/bumiyasa.b4c152f3.png","height":95,"width":369,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAIAAADq9gq6AAAAM0lEQVR42iXIQQoAIAgEwP7/vwJJVsEV8xcFzXGGcHpaMrs7IurUN5bohr1yd5KqChiACyXBKkpKTEmhAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/jasamarga-semarang-batang.png
/* harmony default export */ const jasamarga_semarang_batang = ({"src":"/_next/static/media/jasamarga-semarang-batang.18959c38.png","height":66,"width":225,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAIAAADq9gq6AAAAO0lEQVR42gVAwQ2AIAxkbx+isxijrCRIS9srgSVIeFOKcYN3wawNJF7IxEa47uc8djXPjK/qz8ikhbEArjsm1RyNtYEAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/bank-indonesia.png
/* harmony default export */ const bank_indonesia = ({"src":"/_next/static/media/bank-indonesia.20649085.png","height":316,"width":712,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAXklEQVR42j2Iuw5AMAAA+/9fYzIIBotXCImgQUWLqhYRcxURLrfcAXk+SCk1w9PtQCn1HqA+dCs0nfhPQCgfmFj3o584ppzyBY8zExtwUxgVTY5IVncJbG/9rIpLdAFKwlbKYJq5dgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/mandiri-investasi.svg
/* harmony default export */ const mandiri_investasi = ({"src":"/_next/static/media/mandiri-investasi.958a9e81.svg","height":1017,"width":2113});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/bpkh.png
/* harmony default export */ const bpkh = ({"src":"/_next/static/media/bpkh.1095d94b.png","height":712,"width":2082,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AfzBAELZ2SRsK2Y9qDo89Qvi9AICAgIB5/7///z9/v8GAcyiOce/yhMEdbINDCUV/uv1/ADqAQEBEv///8v/AABKAdehKX+FqS7Hp+kGKCsJAN8DBQXi9/n7KwEAAfz/AP/6SsEvcA7VDckAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/tmj.png
/* harmony default export */ const tmj = ({"src":"/_next/static/media/tmj.4c90cac4.png","height":124,"width":285,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAAVklEQVR42gFLALT/AOnt5fPtztXZ4bq7xcTEytra3tPT183O0wBvpHH13nrq2K3T0tKqq7SQkZ6+vsW+v8UAxdHOy8zC6Nm43dnP1NXa1tfawsLJ1dXZVdY4maDORf0AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/jasamarga-pandaan.png
/* harmony default export */ const jasamarga_pandaan = ({"src":"/_next/static/media/jasamarga-pandaan.fed15506.png","height":83,"width":350,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAS0lEQVR4nGNM6d4R48RywM5U8tAO1YgAVkX3H9r3/zB+ZWBgYAXiL4yNk7dt1/uxXEyAlSXZcbYqj4zUL4Unfxl/M/z794iBkUkAAButGERxbyyqAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/kemenpora.png
/* harmony default export */ const kemenpora = ({"src":"/_next/static/media/kemenpora.3204a8db.png","height":90,"width":78,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAIAAAC6ZnJRAAAAu0lEQVR42gGwAE//AP////v7/OLp89nk8eXt9fn5+////wD7+/zY4O3St8TUjZrTtcHZ4e37+/wA4+v0zbHA4CsA7pFI4T8A0bC+5Oz1ANDc69eCi81eYNjIms1pY9d6g9Hb6wDV2eft6O2zqMLDjaitnbvt6OzW2ugA4+Xu7PH34+PrTkqY4ODo8PT54uTtAPn6+9PX5s7S4oWSvMnO4NHV5fj4+gD////39/rZ3OnZ3enW2uf19vn////yiYnOxQdHLgAAAABJRU5ErkJggg==","blurWidth":7,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/jerbasukimawabeya.png
/* harmony default export */ const jerbasukimawabeya = ({"src":"/_next/static/media/jerbasukimawabeya.30b77779.png","height":99,"width":73,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAIAAABVpBlvAAAAo0lEQVR42gGYAGf/AP78+sXO2cXHxcTFw8PM2P37+AC/ydYGkdfCys7Fy8sDkte3w9MAp7zTXJ3OtMPVu8XRZJitm7TPALnCyGCi0qWyxai0yXGftLG4sAC1wMV6nLC1saWrqaWFmYuyuKkAyc7Pm6qAq7avq7Sqq6skx8vIAOfm5pGdmnOKiHuNhZ2kmefm5wD19fXc2tu+vLS8urTb2tz29vbJ02dTXQjN8gAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/kazuhiro.png
/* harmony default export */ const kazuhiro = ({"src":"/_next/static/media/kazuhiro.49ef4f3e.png","height":84,"width":96,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAIAAAC6O5sJAAAAuklEQVR42gGvAFD/APX19ff4+OHOzsqUk8qWlePT0/j6+fb19QD+///gxsW2Kh+4NS27QTu5OTHkzs39//8AwMLCq6alqKKhure2qKWkpJ6dl5GQt7m5AMXAwK6amrOhobelpauXl7OhoauYl8G9vQDy6em7OjO8My28OjS/RUC8Lia+Tkr17+8A+Pv7062sqwAAswAAswAArQAA1ra2+Pv7APf39/f4+Nu/vsN6ecN+fN3Ew/f5+ff398GBcU+kcHjSAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":7});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/adiyasa.png
/* harmony default export */ const adiyasa = ({"src":"/_next/static/media/adiyasa.7c780f63.png","height":103,"width":103,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAwElEQVR42hWNSwuCQBhF5/8v27VtHUQEEUUPVHpHVtSi6aGjTtNYmvhIG6evaXXhcLgHAUAp5eLCtT3VTDLdOqX8KojUDI6MhonLXxcaOfeko2OlopUb2EGslNqYVhpTgACTcGbaSLe4olnkN1utSaeaxb566uoYGRaXKpM+NwutPrnmJUgpe8YJzciDx2/Pdec7vN4d2M3x7pGxtFAuyv6RecwWKRXpjZBzW8N5IdA/UAgd+6M9G5jecOVk+QcAfsudqsK58JQpAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/transoptimaluhur.png
/* harmony default export */ const transoptimaluhur = ({"src":"/_next/static/media/transoptimaluhur.f12f3af0.png","height":110,"width":136,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAgElEQVR42j2MTwuDMAzF+/2/0g67DjYYg8F20DnYapO2WvXgv5jW6MFA8viF955KKcUY5U7E7UAHKt4Fqv72xuunznUnKE8lMi98ero6tJHG8wN9M2wJ8ctkfry/im+Jl7whWvYqlpxsKn6Q/S1tRmFWIQS0ttTaOwfGWEQDAAArShmINT8vnHIAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/lmj.png
/* harmony default export */ const lmj = ({"src":"/_next/static/media/lmj.008a1ca5.png","height":103,"width":105,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AP367aiqor3I27/G0ImYrpCcsIeTp/b3+AD29Onj0Xn28eD////y8/WwuMSDjqHx8vQA4OTsa3Nz2cl81dG/s7vKzM/UyMzT7u/xAObo6wA3ej1TbLCkYHZ0VwAAQ1VlfPb29wDk5+omTHUAPHMOQm+lnXaMiGtDV3X19fYA5ufoSktIfG01XVY7AAA3YF04hIFo9PT2AO3t77q6t728try7tbK0tqOptMTEv/v7+QDr6+vs7e7m5+np6uvj4+Ps7Ovo6Oni4uOgHYP3c1TawAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/jasasarana.png
/* harmony default export */ const jasasarana = ({"src":"/_next/static/media/jasasarana.45f0ea1e.png","height":99,"width":99,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AObn67S4yLvD07rB0bzG17vF1rrA0O7v8wCeobRsmcOhzOycyOqLtNJneotEU2q1t74AoaS2ocHexuf+vN72jZmie3t6d4CIt73HAKCkuaK608Pa6s3m+pCaooaQmIybqbzH2gCztLlna3N+fn2ZoaiUmZ2jqrGNlqDBydgArK+7m5+mgoF9nJ+fub7CoaWno6epy9DdAJWbsq2yxKmqrnp8hn6AiIaGi7y/yLS4yADHydN+h6WqssWVnLSlrMCosMOIkKvR09vj+IHxgQOynwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/index.tsx





























const Clients = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ColumnContainer/* default */.Z, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Clients_styled_Title, {
                    children: "Our Clients"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Con, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Items, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Row, {
                            role: "list",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 169,
                                    height: 46,
                                    src: ug_mandiri,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 219,
                                    height: 50,
                                    src: bank_bengkulu,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 148,
                                    height: 58,
                                    src: kimia_farma,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 156,
                                    height: 47,
                                    src: plan_international,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 130,
                                    height: 48,
                                    src: mo_biol,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 217,
                                    height: 60,
                                    src: bumiyasa,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 165,
                                    height: 73,
                                    src: jnk,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 164,
                                    height: 80,
                                    src: berdikari,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 134,
                                    height: 74,
                                    src: jsn,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 132,
                                    height: 101,
                                    src: bkpm,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 131,
                                    height: 101,
                                    src: kemenkopukm,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 96,
                                    height: 99,
                                    src: batan,
                                    alt: "",
                                    quality: 100
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Row, {
                            role: "list",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 169,
                                    height: 46,
                                    src: ug_mandiri,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 219,
                                    height: 50,
                                    src: bank_bengkulu,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 148,
                                    height: 58,
                                    src: kimia_farma,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 156,
                                    height: 47,
                                    src: plan_international,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 130,
                                    height: 48,
                                    src: mo_biol,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 217,
                                    height: 60,
                                    src: bumiyasa,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 165,
                                    height: 73,
                                    src: jnk,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 164,
                                    height: 80,
                                    src: berdikari,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 134,
                                    height: 74,
                                    src: jsn,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 132,
                                    height: 101,
                                    src: bkpm,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 131,
                                    height: 101,
                                    src: kemenkopukm,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 96,
                                    height: 99,
                                    src: batan,
                                    alt: "",
                                    quality: 100
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Row, {
                            role: "list",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 169,
                                    height: 46,
                                    src: ug_mandiri,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 219,
                                    height: 50,
                                    src: bank_bengkulu,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 148,
                                    height: 58,
                                    src: kimia_farma,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 156,
                                    height: 47,
                                    src: plan_international,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 130,
                                    height: 48,
                                    src: mo_biol,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 217,
                                    height: 60,
                                    src: bumiyasa,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 165,
                                    height: 73,
                                    src: jnk,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 164,
                                    height: 80,
                                    src: berdikari,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 134,
                                    height: 74,
                                    src: jsn,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 132,
                                    height: 101,
                                    src: bkpm,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 131,
                                    height: 101,
                                    src: kemenkopukm,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 96,
                                    height: 99,
                                    src: batan,
                                    alt: "",
                                    quality: 100
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Row, {
                            role: "list",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 169,
                                    height: 46,
                                    src: ug_mandiri,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 219,
                                    height: 50,
                                    src: bank_bengkulu,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 148,
                                    height: 58,
                                    src: kimia_farma,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 156,
                                    height: 47,
                                    src: plan_international,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 130,
                                    height: 48,
                                    src: mo_biol,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 217,
                                    height: 60,
                                    src: bumiyasa,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 165,
                                    height: 73,
                                    src: jnk,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 164,
                                    height: 80,
                                    src: berdikari,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 134,
                                    height: 74,
                                    src: jsn,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 132,
                                    height: 101,
                                    src: bkpm,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 131,
                                    height: 101,
                                    src: kemenkopukm,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 96,
                                    height: 99,
                                    src: batan,
                                    alt: "",
                                    quality: 100
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Con, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Items, {
                    className: "last",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Row, {
                            className: "last",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 227,
                                    height: 68,
                                    src: jasamarga_semarang_batang,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 137,
                                    height: 75,
                                    src: bank_indonesia,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 142,
                                    height: 70,
                                    src: mandiri_investasi,
                                    alt: "",
                                    quality: 100,
                                    placeholder: null
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 158,
                                    height: 59,
                                    src: bpkh,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 141,
                                    height: 65,
                                    src: tmj,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 227,
                                    height: 59,
                                    src: jasamarga_pandaan,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 78,
                                    height: 90,
                                    src: kemenpora,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 73,
                                    height: 99,
                                    src: jerbasukimawabeya,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 96,
                                    height: 84,
                                    src: kazuhiro,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 99,
                                    height: 99,
                                    src: adiyasa,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 128,
                                    height: 104,
                                    src: transoptimaluhur,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 105,
                                    height: 103,
                                    src: lmj,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 99,
                                    height: 99,
                                    src: jasasarana,
                                    alt: "",
                                    quality: 100
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Row, {
                            className: "last",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 227,
                                    height: 68,
                                    src: jasamarga_semarang_batang,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 137,
                                    height: 75,
                                    src: bank_indonesia,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 142,
                                    height: 70,
                                    src: mandiri_investasi,
                                    alt: "",
                                    quality: 100,
                                    placeholder: null
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 158,
                                    height: 59,
                                    src: bpkh,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 141,
                                    height: 65,
                                    src: tmj,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 227,
                                    height: 59,
                                    src: jasamarga_pandaan,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 78,
                                    height: 90,
                                    src: kemenpora,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 73,
                                    height: 99,
                                    src: jerbasukimawabeya,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 96,
                                    height: 84,
                                    src: kazuhiro,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 99,
                                    height: 99,
                                    src: adiyasa,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 128,
                                    height: 104,
                                    src: transoptimaluhur,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 105,
                                    height: 103,
                                    src: lmj,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 99,
                                    height: 99,
                                    src: jasasarana,
                                    alt: "",
                                    quality: 100
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Row, {
                            className: "last",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 227,
                                    height: 68,
                                    src: jasamarga_semarang_batang,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 137,
                                    height: 75,
                                    src: bank_indonesia,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 142,
                                    height: 70,
                                    src: mandiri_investasi,
                                    alt: "",
                                    quality: 100,
                                    placeholder: null
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 158,
                                    height: 59,
                                    src: bpkh,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 141,
                                    height: 65,
                                    src: tmj,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 227,
                                    height: 59,
                                    src: jasamarga_pandaan,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 78,
                                    height: 90,
                                    src: kemenpora,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 73,
                                    height: 99,
                                    src: jerbasukimawabeya,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 96,
                                    height: 84,
                                    src: kazuhiro,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 99,
                                    height: 99,
                                    src: adiyasa,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 128,
                                    height: 104,
                                    src: transoptimaluhur,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 105,
                                    height: 103,
                                    src: lmj,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 99,
                                    height: 99,
                                    src: jasasarana,
                                    alt: "",
                                    quality: 100
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Row, {
                            className: "last",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 227,
                                    height: 68,
                                    src: jasamarga_semarang_batang,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 137,
                                    height: 75,
                                    src: bank_indonesia,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 142,
                                    height: 70,
                                    src: mandiri_investasi,
                                    alt: "",
                                    quality: 100,
                                    placeholder: null
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 158,
                                    height: 59,
                                    src: bpkh,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 141,
                                    height: 65,
                                    src: tmj,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 227,
                                    height: 59,
                                    src: jasamarga_pandaan,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 78,
                                    height: 90,
                                    src: kemenpora,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 73,
                                    height: 99,
                                    src: jerbasukimawabeya,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 96,
                                    height: 84,
                                    src: kazuhiro,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 99,
                                    height: 99,
                                    src: adiyasa,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 128,
                                    height: 104,
                                    src: transoptimaluhur,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 105,
                                    height: 103,
                                    src: lmj,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 99,
                                    height: 99,
                                    src: jasasarana,
                                    alt: "",
                                    quality: 100
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const Home_Clients = (Clients);

// EXTERNAL MODULE: ./src/components/TitleDescription/index.tsx
var TitleDescription = __webpack_require__(3463);
// EXTERNAL MODULE: external "react-bootstrap/Form"
var Form_ = __webpack_require__(5226);
var Form_default = /*#__PURE__*/__webpack_require__.n(Form_);
;// CONCATENATED MODULE: ./src/containers/Home/Contact/index.tsx






const Contact_Root = /*#__PURE__*/ styled_default()("div", {
    target: "e1rfrusq0"
})("display:flex;flex-direction:column;flex:1;align-items:stretch;min-width:100%;@media (min-width:404px){min-width:380px;}");
const F = /*#__PURE__*/ styled_default()((Form_default()), {
    target: "e1rfrusq1"
})("display:flex;flex-direction:column;align-items:stretch;margin-right:auto;margin-left:auto;& input,textarea{padding-top:11px;padding-bottom:11px;box-shadow:0px 4px 4px rgba(0,0,0,0.35);}min-width:100%;@media (min-width:404px){min-width:380px;}@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){min-width:300px;}@media (min-width:", GlobalStyle/* breakpoints.lg */.AV.lg, "){min-width:380px;}");
const Contact = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Contact_Root, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(TitleDescription/* default */.ZP, {
                title: "Contact Us",
                children: "Please enter your details"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(F, {
                onSubmit: (a)=>{
                    a.preventDefault();
                    alert("submited");
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()).Group, {
                        className: "mb-4",
                        controlId: "name",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                                required: true,
                                type: "name",
                                placeholder: "Enter your full name"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control.Feedback, {
                                type: "invalid",
                                children: `We'll never share your email with anyone else.`
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Group, {
                        className: "mb-4",
                        controlId: "email",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                            required: true,
                            type: "email",
                            placeholder: "Enter your email"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Group, {
                        className: "mb-4",
                        controlId: "subject",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                            required: true,
                            type: "text",
                            placeholder: "Enter your subject"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Group, {
                        className: "mb-4",
                        controlId: "message",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                            required: true,
                            type: "text",
                            as: "textarea",
                            rows: 3,
                            placeholder: "Enter your subject"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                        className: "mt-3",
                        type: "submit",
                        children: "Submit"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Home_Contact = (Contact);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/Card/index.ts
var Card = __webpack_require__(2042);
;// CONCATENATED MODULE: ./src/containers/Home/Pillars/Item/styled.ts



const styled_Root = /*#__PURE__*/ styled_default()(Card/* default */.C, {
    target: "ey5makt0"
})("width:180px;display:flex;flex-direction:column;align-items:center;margin-left:5px;margin-right:5px;margin-top:20px;");
const Img = /*#__PURE__*/ styled_default()("div", {
    target: "ey5makt1"
})("background-color:", GlobalStyle/* color.primary.dark */.$_.primary.dark, ";border-radius:50%;width:100px;height:100px;display:flex;align-items:center;justify-content:center;margin-top:28px;");
const Label = /*#__PURE__*/ styled_default()("div", {
    target: "ey5makt2"
})("font-size:16px;font-weight:600;align-self:stretch;text-align:center;margin-bottom:25px;margin-top:20px;");

;// CONCATENATED MODULE: ./src/containers/Home/Pillars/Item/index.tsx



const Item_Item = ({ icon , label  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styled_Root, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Img, {
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    width: 57,
                    height: 57,
                    src: icon,
                    alt: ""
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Label, {
                children: label
            })
        ]
    });
};
/* harmony default export */ const Pillars_Item = (Item_Item);

;// CONCATENATED MODULE: ./src/containers/Home/Pillars/styled.ts


const styled_Items = /*#__PURE__*/ styled_default()("div", {
    target: "e1p6dpdv0"
})("display:flex;flex-wrap:wrap;justify-content:space-around;margin-bottom:16px;@media (min-width:", GlobalStyle/* breakpoints.sm */.AV.sm, "){min-width:392px;max-width:392px;margin:0 auto 30px auto;}@media (min-width:", GlobalStyle/* breakpoints.lg */.AV.lg, "){min-width:816px;max-width:816px;margin:0 auto 30px auto;}");

;// CONCATENATED MODULE: ./src/containers/Home/Pillars/funding.svg
/* harmony default export */ const funding = ({"src":"/_next/static/media/funding.25c0fb0f.svg","height":58,"width":58});
;// CONCATENATED MODULE: ./src/containers/Home/Pillars/capacity-building.svg
/* harmony default export */ const capacity_building = ({"src":"/_next/static/media/capacity-building.c89c2d71.svg","height":61,"width":61});
;// CONCATENATED MODULE: ./src/containers/Home/Pillars/index.tsx









const Pillars = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ColumnContainer/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(TitleDescription/* default */.ZP, {
                title: "We Have Four Pillars To Work On",
                children: "We Have Years Of Experience Working On These Fields"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styled_Items, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Pillars_Item, {
                        icon: funding,
                        label: "Funding"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Pillars_Item, {
                        icon: funding,
                        label: "Growth"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Pillars_Item, {
                        icon: funding,
                        label: "Profitability"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Pillars_Item, {
                        icon: capacity_building,
                        label: "Capacity Building"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Home_Pillars = (Pillars);

// EXTERNAL MODULE: ./src/components/Project/index.tsx
var Project = __webpack_require__(4626);
;// CONCATENATED MODULE: ./src/containers/Home/Project/styled.ts




const Project_styled_Title = /*#__PURE__*/ styled_default()(SectionTitle/* default */.Z, {
    target: "enc4pdg0"
})("text-align:center;margin-top:50px;margin-bottom:4px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-top:90px;margin-bottom:32px;}");
const Project_styled_Items = /*#__PURE__*/ styled_default()(Project/* ProjectsComponent */.vP, {
    target: "enc4pdg1"
})("@media (min-width:", GlobalStyle/* breakpoints.lg */.AV.lg, "){max-width:1134px;min-width:1134px;margin-left:auto;margin-right:auto;}");

;// CONCATENATED MODULE: ./src/containers/Home/Project/index.tsx





const Project_Project = ({ data  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ColumnContainer/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Project_styled_Title, {
                children: "Project & Tender"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Project_styled_Items, {
                children: data.map((r)=>/*#__PURE__*/ jsx_runtime_.jsx(Project/* default */.ZP, {
                        data: r
                    }, r.id))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ViewMore, {
                children: "View All"
            })
        ]
    });
};
/* harmony default export */ const Home_Project = (Project_Project);

;// CONCATENATED MODULE: external "react-slick"
const external_react_slick_namespaceObject = require("react-slick");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_namespaceObject);
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/styled.ts



const Sectors_styled_Items = /*#__PURE__*/ styled_default()((external_react_slick_default()), {
    target: "e11yy5cr0"
})("max-width:calc(100% - 24px);align-self:center;@media (min-width:1024px){max-width:920px;}");
const Arrow = /*#__PURE__*/ styled_default()("div", {
    target: "e11yy5cr1"
})("display:flex;align-items:center;justify-content:center;background-color:white;& svg path{fill:", GlobalStyle/* color.primary.normal */.$_.primary.normal, ";}border-radius:50%;width:36px;height:36px;&:before{display:none;}&.slick-prev{transform:translate(8px,-50%);z-index:2;@media (min-width:1100px){transform:translate(-36px,-50%);}}&.slick-next{transform:translate(-8px,-50%);@media (min-width:1100px){transform:translate(36px,-50%);}}");

;// CONCATENATED MODULE: ./src/containers/Home/Sectors/restructuring.png
/* harmony default export */ const restructuring = ({"src":"/_next/static/media/restructuring.3ab74dd4.png","height":275,"width":201,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAIAAABVpBlvAAAAo0lEQVR42gGYAGf/AKiBfq6os73Ay6Wqt66zweXm7QCgtL+dy9G3x9Kqsr+Il6Xd4usAjKKrrsXFvdLeiJ+sWX2NytfjAKi1woSZoamgpKadmXOnqVp7hgB/j5VeamiOdnCKhIJ/hIBuZGMAPVlXV2VsXXyDWnF5gG9xmIB6ABZGTyBKVQNMWEk/QoFdWaVtZACan6+VmqmWm6qQlqOvoa+tnqeuHlIN0vkeXwAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/investment.png
/* harmony default export */ const investment = ({"src":"/_next/static/media/investment.c23b9754.png","height":1278,"width":939,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAA00lEQVR4nAHIADf/ATY7Of8DAAEA7wD9ACzF4QAvbmMA5/DyAAFBRUL/AgUFAPzv8wAw+xAAG09GAN3V0gABITI5/xAGBgAJEvkAMS9CABHy+AC6r58AAYWCcf/7AAMAgLS5AGQ/SwAc+/AA8e/tAAHBnn7/Ji8rAOzp7wB0eYkA4QQcAEA4NQABnH1r//Hs9QAh8s0A9StOAMPs8wDMtKQAAVhHQf/q4ucAOjAiAG1+cQAPCP8AwbK4AAFlcHL+PC8qAFA9GQAOEREA7cm4ANPZ5wCsh0361+lA1gAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/financial.png
/* harmony default export */ const financial = ({"src":"/_next/static/media/financial.965b3d01.png","height":275,"width":202,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAIAAABVpBlvAAAAoklEQVR42mMAgqrC6ZV50xnYlNQNnaWs9UBCTTVzuhrWMHDpK+s5ybuYgoQio+pK85cq6vpKKdsKurow6Fs4NsRETa+aZqBhC5SO8fBmmN857fj8qQeXb+nvXVldOaGnooFhz66zh49cO3TyyYmL767f+3zrwQeGvaeebt15ZsuWQ7fvvrh3/9XxE1cZLp6+eO3SjWuXb1+6cPvsuTu79pwGANc8SRhcOGn2AAAAAElFTkSuQmCC","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/health.png
/* harmony default export */ const health = ({"src":"/_next/static/media/health.d745bb13.png","height":2383,"width":1746,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAtklEQVR42g3KXYsBUQCA4fccZzfbHM2MpW3tR2NKUoif4FqI8s+Vj7kgLiiOr5miMMzt+z6iOxjGx70R48mIsvfPu3aRUiIfgDGGft2jVS1xT+JbSqLS6Q9qBZtczmZzEfz+/CVDoTrtHnFomAYzxC2moDXayaK0ZfHl+2yjKxwM2XweK+MgrUQIoNlsUCz6ICVCCNSn63A6nVktFuznAVuzI4qfqDCMcB2b5TXksg749iqkMjYvDyg3ShQf9+0AAAAASUVORK5CYII=","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/environmental.png
/* harmony default export */ const environmental = ({"src":"/_next/static/media/environmental.f9a6332d.png","height":2850,"width":2079,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAIAAABVpBlvAAAAo0lEQVR42gGYAGf/AFhYQAAvHI9pUn9JAHyAmEp+pQDauJ5MTxelcFnIi3OHUyxtiZoA4Lqo3by+2KKYz5N/pXppp7TIALGYiea2waaNequZftWgl510agCzkpLXo6aTg23SnZPNnJylf3cAvZqd1qmy26eo1Kauv6CwxaW3AHZwaMuoqAAAAL6isI55hQAAAAC+opOafFgAAACXfoPCn68AAADLkkwoCQ24twAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/information.png
/* harmony default export */ const information = ({"src":"/_next/static/media/information.87175948.png","height":2741,"width":2008,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAIAAABVpBlvAAAAo0lEQVR42gGYAGf/AJucnpmfoJ2koX+ChX6BhH+DhACbnJ6eo6OboJ+XmJiZmZiWlpgAfoWHdnl7bG9wbW9tXl9gX19jAGQzAHl6eldgVBkrDy0zMaeoqQCimZJ2d3czRz4AGQhlYF/X2doAmo6DUlRWgnFsnpKOuIp+17aoAK2ekId3b6t7Z8WYgIt8faaBcADHva+ym4SGa1aSdmbBtKa6qphWqUjGcof8kgAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/infrastructure.png
/* harmony default export */ const infrastructure = ({"src":"/_next/static/media/infrastructure.2ae3f28b.png","height":1321,"width":968,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAu0lEQVR42hXJTWrCQBiA4febmZgK1Qq1Uih0UyhCKXTRU3gQz+FlvImCJxBEUPxFFyomksQkM6MuntUjvf7Iew+eO+dQSqODAFMPHY8QrVA65JqlxLspplF1iCjSJOa0mHCZDVksVxgf7zlsZ6zHA14/2pyilL9OF90KL73oHJGqGp/tf+bLDa3mG/Lz++WVeSKQHGc1z1XhmFQwUvsmLwtyW5C4kiK7ciwUpvLy7rW1WFvS8I4yz2jWhRs1SlI41z06KAAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/ev.png
/* harmony default export */ const ev = ({"src":"/_next/static/media/ev.3f1b7aad.png","height":2592,"width":1899,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAIAAABVpBlvAAAAmElEQVR42gUAOwuCQPhefmdUYEJD4RQSPYf6/3MtBU2XNJVRmA/sRD3tUAMfxXWxnKtaNW1nMKZ1Q4K7750upMV9gPwrB4xSZtln8eDW2BOiSpK165JPKjHgOI4yjbb7XVWVFOwJ4z2DdFkUaPnSKqRxrgtVYoRGQ/P99CkDslnNoKulTBHj0Q8Ot5AibqqyKDIJwKeOAxz+nuRK9ZwU3kMAAAAASUVORK5CYII=","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/property.png
/* harmony default export */ const property = ({"src":"/_next/static/media/property.72f3b8d1.png","height":1280,"width":938,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAIAAABVpBlvAAAAo0lEQVR42gGYAGf/AEZSdDc9WDU7VTQ6UDxDXU9XegA/Tl1GV2tkbYljbIlsd5h1gaQAZ29/TElDWWJ3uMDdytTyrrjVAHJ8jIByY3hubWNgYqesv7u/zABzWEmMhX+5qpa8oYHPvKCulHMAhF86jH9xxbCJzqx+xKyMpodhAAApGxEoByE+FSlNGDJEE01TNwAaLxsPLBwGLhsLNh0TPyAGPRf3cDq9YIclXQAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/waste.png
/* harmony default export */ const waste = ({"src":"/_next/static/media/waste.f7befb6a.png","height":1301,"width":953,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAx0lEQVR42g3OP28BYQDA4Z97r9FTSdOLoZcYWtqopWlSEgODlcHgc/kEPopgMJrERGKREBfOfy/ee+/wBZ48kXL952bFLbYrSeBLuMQIrwLjrA4cdz62/Y6399gwYjidYqZevwmfLDZyTTFXIWMnkdk1xkfcIJCay+6Mr04MFy798RKz9OaSdzXt7C/R+RfV/y6ipjBfRIFEUjNxHBKTPz4zK6x0E0PtH5Q3Q6stx8NjZ54Y9FJEOq1G6DynkfoKgSAW9dGh4A7mpVJLF+5+fwAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/renewable_energy.png
/* harmony default export */ const renewable_energy = ({"src":"/_next/static/media/renewable_energy.d07cbf16.png","height":1280,"width":938,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAIAAABVpBlvAAAAoElEQVR42mPYef7xjvOPgGj7+Udbzz3cePo+w83HL4Doyr3HEHTx7iOGhw+uPH168979S/cfXX3x5t7TV7cZnp9Y+eTgklu7513evfDxqfW3D69kWFJWOauwbFZRYX9G9vTssu7kQgYGdRsGZoMwH+8gL18GFVs5Y1cGQ0MbQUWTpOCAaD9fQWVzLV0rBjU1XQZxlTgXq2BbEwZecQ15GQD8Ek5e/IASAQAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/biotechnology.png
/* harmony default export */ const biotechnology = ({"src":"/_next/static/media/biotechnology.eca77576.png","height":1921,"width":1408,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAA00lEQVR4nAHIADf/AbOvrv/b4eYA9AHyABwfKQAZGB0ACxEZAAGYkpL/8NbKAOC7pAARIy0ADTZFAOELBwABamVn/x366gAdM0YA5s28AO8MDQDC6bMAAX9iZv8MEh4AJDInANaynwAhRE4A7wYBAAGgkIH/+e/6APX9CQD7+/kAOEpDABMVGwABwred//Lv/ADa2+oA9O/qACk0MgASGB8AAcG4r//MycsApaetAFtbVAAB/vkA4d/mAAGhmZH+yMbFAAACCAAlIx4AGh0fANfY3wD/6FCw2l7+/gAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/Item/index.tsx



const Inner = /*#__PURE__*/ styled_default()("div", {
    target: "esrzdtx0"
})("margin-left:14px;margin-right:14px;width:calc(100% - 28px);border-radius:8px;overflow:hidden;");
const Aspect = /*#__PURE__*/ styled_default()("div", {
    target: "esrzdtx1"
})("position:relative;width:100%;padding-top:", 275 / 202 * 100, "%;");
const Item_Label = /*#__PURE__*/ styled_default()("div", {
    target: "esrzdtx2"
})("font-size:16px;color:white;text-align:center;width:100%;padding-left:12px;padding-right:12px;bottom:12px;z-index:2;position:absolute;font-weight:500;");
const Sectors_Item_Item = ({ image , label  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Inner, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Aspect, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                    fill: true,
                    src: image,
                    alt: label,
                    quality: 100,
                    sizes: "(min-width: 1002px) 210px, (min-width: 992px) 276px, (min-width: 768px) 196px, (min-width: 746px) 25vw, (min-width: 488px) 50vw, 100vw"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Item_Label, {
                    children: label
                })
            ]
        })
    });
};
/* harmony default export */ const Sectors_Item = (Sectors_Item_Item);

;// CONCATENATED MODULE: ./src/containers/Home/Sectors/index.tsx


















const Sectors = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ColumnContainer/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(TitleDescription/* default */.ZP, {
                title: "Sectors & Themes Coverage",
                children: "Here are access that we can provide"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Sectors_styled_Items, {
                arrows: true,
                nextArrow: /*#__PURE__*/ jsx_runtime_.jsx(Arrow, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 512 512",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"
                        })
                    })
                }),
                prevArrow: /*#__PURE__*/ jsx_runtime_.jsx(Arrow, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 512 512",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512s256-114.6 256-256zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"
                        })
                    })
                }),
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 230 * 5 + 27 * 4,
                        settings: {
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 230 * 4 + 27 * 3,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 230 * 3 + 27 * 2,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 230 * 2 + 27,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ],
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Sectors_Item, {
                        image: restructuring,
                        label: "Restructuring, Pre-IPO, IPO, and Right Issue"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Sectors_Item, {
                        image: investment,
                        label: "Alternative Investment"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Sectors_Item, {
                        image: financial,
                        label: "Financial Services"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Sectors_Item, {
                        image: health,
                        label: "Health and Pharmaceutical"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Sectors_Item, {
                        image: environmental,
                        label: "Environmental, Social, and Governance"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Sectors_Item, {
                        image: information,
                        label: "Information Technology"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Sectors_Item, {
                        image: infrastructure,
                        label: "Infrastructure"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Sectors_Item, {
                        image: ev,
                        label: "Electric Vehicle"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Sectors_Item, {
                        image: property,
                        label: "Property Investment and Development"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Sectors_Item, {
                        image: waste,
                        label: "Wate Solution"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Sectors_Item, {
                        image: renewable_energy,
                        label: "Renewable Energy"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Sectors_Item, {
                        image: biotechnology,
                        label: "Biotechnology"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ViewMore, {
                children: "View All"
            })
        ]
    });
};
/* harmony default export */ const Home_Sectors = (Sectors);

// EXTERNAL MODULE: external "react-bootstrap/Ratio"
var Ratio_ = __webpack_require__(9378);
var Ratio_default = /*#__PURE__*/__webpack_require__.n(Ratio_);
;// CONCATENATED MODULE: ./src/containers/Home/Services/styled.ts




const Services_styled_Title = /*#__PURE__*/ styled_default()(SectionTitle/* default */.Z, {
    target: "eif5kcm0"
})("text-align:center;margin-top:50px;margin-bottom:32px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-top:90px;margin-bottom:60px;}");
const Services_styled_Items = /*#__PURE__*/ styled_default()("div", {
    target: "eif5kcm1"
})("display:flex;flex-wrap:wrap;overflow:hidden;margin-left:-8px;margin-right:-8px;margin-bottom:8px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-bottom:22px;}");
const Col = /*#__PURE__*/ styled_default()("div", {
    target: "eif5kcm2"
})("display:flex;flex-direction:column;flex:1;margin-left:8px;margin-right:8px;");
const styled_Item = /*#__PURE__*/ styled_default()("div", {
    target: "eif5kcm3"
})("position:relative;flex:1;margin-top:8px;margin-bottom:8px;border-radius:8px;overflow:hidden;min-width:300px;& > .ratio{min-height:100%;& > img{transition:transform 1s ease-in-out;}}&:hover{& > .ratio > img{transform:scale(1.1);}}");
const styled_Label = /*#__PURE__*/ styled_default()(Text/* default */.Z, {
    target: "eif5kcm4"
})("color:white;max-width:260px;font-weight:500;text-align:left;position:absolute;left:18px;top:18px;right:18px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){left:32px;top:32px;right:32px;}");

;// CONCATENATED MODULE: ./src/containers/Home/Services/business.png
/* harmony default export */ const business = ({"src":"/_next/static/media/business.be1e5e68.png","height":284,"width":559,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/ALepj76YVLeZatfLwNTPyLmqmKyZgaiahwDKx729rpKEZCXPtKPW0c/l1c/LvLGpoI4Auret09LGwLer2bij9ujk3dfSu7aqtK6gAHhwY8nDts/Jvs7AsczEvL+3qr62qbeypt4WQzXfs3vxAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/containers/Home/Services/capacity.png
/* harmony default export */ const capacity = ({"src":"/_next/static/media/capacity.9a0f03a8.png","height":127,"width":508,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAIAAADq9gq6AAAAPUlEQVR42gEyAM3/AMrKz8rGx9XV3djZ4Nzc49/f5trX3aaTkwDKzNbOz9rR0tjZ2t/e3uLe3N/W09i8t7jV6yc/+YOUtwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/containers/Home/Services/investment.png
/* harmony default export */ const Services_investment = ({"src":"/_next/static/media/investment.89348a66.png","height":136,"width":543,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAIAAADq9gq6AAAAO0lEQVR42mMI9PEK8PFydnTJSw7aMSdnx4K8VZPTQr3tGfy8PJwd7HikDJtrU56e6T6wJD/Cx8zY2AgAzkUSnoF4SNoAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/containers/Home/Services/index.tsx








const Services = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ColumnContainer/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Services_styled_Title, {
                children: "Our Service & Scope"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Services_styled_Items, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Col, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styled_Item, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Ratio_default()), {
                                    aspectRatio: 274 / 559,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                        fill: true,
                                        src: business,
                                        alt: "Business and Management Consulting",
                                        quality: 100,
                                        sizes: "(min-width: 1200px) 580px, (min-width: 992px) 470px, (min-width: 768px) 360px, 100vw"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(styled_Label, {
                                    children: "Business and Management Consulting"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Col, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styled_Item, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Ratio_default()), {
                                        aspectRatio: 127 / 543,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                            fill: true,
                                            src: capacity,
                                            alt: "Capacity Building (Inpartner Academy)",
                                            quality: 100,
                                            sizes: "(min-width: 1200px) 580px, (min-width: 992px) 470px, (min-width: 768px) 360px, 100vw"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(styled_Label, {
                                        children: "Capacity Building (Inpartner Academy)"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styled_Item, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Ratio_default()), {
                                        aspectRatio: 127 / 543,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                            fill: true,
                                            src: Services_investment,
                                            alt: "Investment",
                                            quality: 100,
                                            sizes: "(min-width: 1200px) 580px, (min-width: 992px) 470px, (min-width: 768px) 360px, 100vw"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(styled_Label, {
                                        children: "Investment"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Home_Services = (Services);

;// CONCATENATED MODULE: ./src/containers/Home/Sitemap/index.tsx





const Sitemap_Root = /*#__PURE__*/ styled_default()("div", {
    target: "e1dxnf330"
})("display:flex;flex-direction:column;flex:1;align-items:stretch;");
const Sitemap_Title = /*#__PURE__*/ styled_default()(SectionTitle/* default */.Z, {
    target: "e1dxnf331"
})("text-align:center;margin-top:50px;margin-bottom:32px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-top:90px;margin-bottom:60px;}");
const Sitemap = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Sitemap_Root, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Sitemap_Title, {
                children: "Site Map"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Ratio_default()), {
                aspectRatio: 450 / 600,
                children: /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                    src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15865.672129927412!2d106.8392733!3d-6.2084639!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f381f9f1b899%3A0xcf6bf4193c4d2ace!2sPT%20Inpartner%20Optima%20Integra%20(INPARTNER)!5e0!3m2!1sen!2sid!4v1671699893441!5m2!1sen!2sid",
                    style: {
                        border: 0
                    },
                    allowFullScreen: true,
                    loading: "lazy",
                    referrerPolicy: "no-referrer-when-downgrade",
                    title: "PT Inpartner Optima Integra"
                })
            })
        ]
    });
};
/* harmony default export */ const Home_Sitemap = (Sitemap);

;// CONCATENATED MODULE: ./src/containers/Home/index.tsx













const Background = /*#__PURE__*/ styled_default()("div", {
    target: "e1meulra0"
})("background-color:#d9d9d9;padding-bottom:40px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){padding-bottom:120px;}");
const Home_C = /*#__PURE__*/ styled_default()((Container_default()), {
    target: "e1meulra1"
})("display:flex;align-items:stretch;flex-wrap:wrap;");
const Index = ({ projects  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Home_Banner, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Home_About, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Home_Pillars, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Home_Services, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Home_Sectors, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Home_Project, {
                data: projects
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Home_Clients, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Background, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Home_C, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Home_Sitemap, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Home_Contact, {})
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const Home = (Index);

// EXTERNAL MODULE: ./src/components/Navbar/index.tsx + 1 modules
var Navbar = __webpack_require__(1387);
// EXTERNAL MODULE: ./src/components/Footer/index.tsx + 2 modules
var Footer = __webpack_require__(841);
;// CONCATENATED MODULE: ./src/pages/index.tsx





const Page = ({ projects  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Business Consultant Company, Jakarta, Indonesia | Inpartner"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Inpartner are The Most Trusted Consulting Partner To help create positive and endure changes in Local and Global Coverage"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Home, {
                projects: projects
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
        ]
    });
};
const getServerSideProps = async ({ req  })=>{
    const { sequelize  } = req.ctx;
    const { Project  } = sequelize.models;
    const transaction = await sequelize.transaction();
    try {
        const projects = await Project.findAll({
            transaction,
            limit: 3,
            order: [
                [
                    "id",
                    "ASC"
                ]
            ],
            include: [
                {
                    association: "category",
                    attributes: [
                        "id",
                        "title"
                    ]
                },
                {
                    association: "sector",
                    attributes: [
                        "id",
                        "title",
                        "name"
                    ]
                }
            ]
        });
        await transaction.commit();
        return {
            props: {
                projects: JSON.parse(JSON.stringify(projects.map((d)=>d.toJSON())))
            }
        };
    } catch (e) {
        await transaction.rollback();
        return {
            props: {
                projects: []
            }
        };
    }
};
/* harmony default export */ const pages = (Page);


/***/ }),

/***/ 2805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 5193:
/***/ ((module) => {

module.exports = require("@emotion/react/jsx-runtime");

/***/ }),

/***/ 1480:
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ 2215:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons/faCaretDown");

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 4384:
/***/ ((module) => {

module.exports = require("date-fns/format");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1937:
/***/ ((module) => {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ 4678:
/***/ ((module) => {

module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ 5226:
/***/ ((module) => {

module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ 2540:
/***/ ((module) => {

module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ 9070:
/***/ ((module) => {

module.exports = require("react-bootstrap/NavDropdown");

/***/ }),

/***/ 4934:
/***/ ((module) => {

module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ 9378:
/***/ ((module) => {

module.exports = require("react-bootstrap/Ratio");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,505,121,302,926,626,891], () => (__webpack_exec__(598)));
module.exports = __webpack_exports__;

})();