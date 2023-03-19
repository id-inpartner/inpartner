"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

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

/***/ 9522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
// EXTERNAL MODULE: ./src/components/GlobalStyle.ts
var GlobalStyle = __webpack_require__(9920);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: external "react-bootstrap/Container"
var Container_ = __webpack_require__(4678);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: ./src/components/ColumnContainer.ts
var ColumnContainer = __webpack_require__(5960);
// EXTERNAL MODULE: ./src/components/Text/index.tsx
var Text = __webpack_require__(4243);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/containers/Home/styled.ts



const ViewMore = /*#__PURE__*/ styled_default()((link_default()), {
    target: "e1sn07zy0"
})("margin-top:10px;margin-bottom:16px;align-self:center;min-width:140px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-top:24px;margin-bottom:30px;}& > button{width:100%;}");

// EXTERNAL MODULE: ./src/components/SectionTitle/index.tsx
var SectionTitle = __webpack_require__(3137);
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
/* harmony default export */ const _1 = ({"src":"/_next/static/media/1.c2e35b66.png","height":943,"width":1440,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAKlBMVEUscr0iXageVaApa7UlY61ralpye3orV5E0ZZ56iX0kZbM9dKxia22AdmE+gASXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKElEQVR4nGNgAgF2Vk4GRhAAMVhYWFi4OFjZGJiZmZkZQAww4OblAQANpwCqR/10LQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/containers/Home/Banner/2.png
/* harmony default export */ const _2 = ({"src":"/_next/static/media/2.6739ea3d.png","height":950,"width":1440,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAARVBMVEUjX7NlhK58laJjka8ye8p1osdUcaEaTZ8tc8JDmuJ9sNMZVakSRppEj84uWqQ1a5pynbhOa5IqSmczXIEWLUojRoA2RFn00rTuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nBXBhxEAIAgEsFdUwN73H9UzATNzDqHiS8YcOBGRcTdUtbS5HKLvlsj6BxxJAVLS0WCAAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/containers/Home/Banner/3.png
/* harmony default export */ const _3 = ({"src":"/_next/static/media/3.39a3e5a0.png","height":949,"width":1440,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAMFBMVEUvV6w0YrcpT6FIf9JCYH4/b8c6a8I5VH1iaGpZcYFPb4RubmpHdr1UXWQrTJOHj44JbJh0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAALElEQVR4nBXGyREAIAgDwCSA4t1/tw77WkCSbu8o8jlAkqhEtEbPBTOzffJ9Db8Aw4acFSAAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Image.tsx
var Image = __webpack_require__(471);
// EXTERNAL MODULE: ./src/components/Button/index.ts
var Button = __webpack_require__(3900);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"src/fonts/index.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"sans"}
var index_tsx_import_Inter_arguments_subsets_latin_variableName_sans_ = __webpack_require__(3894);
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

// EXTERNAL MODULE: ./src/components/Project/index.tsx
var Project = __webpack_require__(4941);
;// CONCATENATED MODULE: ./src/containers/Home/Blog/styled.ts




const Blog_styled_Title = /*#__PURE__*/ styled_default()(SectionTitle/* default */.Z, {
    target: "e1q81gw20"
})("text-align:center;margin-top:50px;margin-bottom:4px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-top:90px;margin-bottom:32px;}");
const Items = /*#__PURE__*/ styled_default()(Project/* ProjectsComponent */.vP, {
    target: "e1q81gw21"
})("@media (min-width:", GlobalStyle/* breakpoints.lg */.AV.lg, "){max-width:1134px;min-width:1134px;margin-left:auto;margin-right:auto;}");

// EXTERNAL MODULE: ./src/components/Card/index.ts
var Card = __webpack_require__(9740);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "date-fns/format"
var format_ = __webpack_require__(4384);
var format_default = /*#__PURE__*/__webpack_require__.n(format_);
;// CONCATENATED MODULE: ./src/containers/Home/Blog/Item.tsx






const Item_Item = ({ data  })=>{
    const image = data._embedded["wp:featuredmedia"][0] || {
        source_url: "/images/default_post_img.png"
    };
    const category = data._embedded["wp:term"].find((it)=>it.find((i)=>i.taxonomy === "category"))[0] || {
        name: ""
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Item_C, {
        href: `/blog/${data.slug}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Aspect, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "aspect",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        fill: true,
                        quality: 100,
                        src: image.source_url,
                        alt: "",
                        sizes: `(min-width: ${GlobalStyle/* breakpoints.xxl */.AV.xxl}) 414px, (min-width: ${GlobalStyle/* breakpoints.xl */.AV.xl}) 354px, (min-width: ${GlobalStyle/* breakpoints.lg */.AV.lg}) 454px, (min-width: ${GlobalStyle/* breakpoints.md */.AV.md}) 334px, (min-width: ${GlobalStyle/* breakpoints.sm */.AV.sm}) 514px, 400px`
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Item_Content, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Item_Subtitle, {
                        children: category.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Item_Title, {
                        children: data.title.rendered
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Dates, {
                        children: format_default()(new Date(data.modified), "d MMMM yyyy")
                    })
                ]
            })
        ]
    });
};
const Dummy = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e1n770x40"
})("margin-left:12px;margin-right:12px;flex:1;min-width:300px;")));
const Item_C = /*#__PURE__*/ styled_default()(Card/* CardLink */.YS, {
    target: "e1n770x41"
})("display:flex;flex-direction:column;align-items:stretch;margin:12px;flex:1;min-width:300px;transition:transform 0.3s ease-in-out;position:relative;&:hover{transform:scale(1.015);}border-radius:12px;overflow:hidden;");
const Aspect = /*#__PURE__*/ styled_default()("div", {
    target: "e1n770x42"
})("position:relative;width:100%;& > .aspect{padding-top:", 415 / 3.44, "%;& > img{object-fit:cover;}}");
const Item_Content = /*#__PURE__*/ styled_default()("div", {
    target: "e1n770x43"
})("position:absolute;display:flex;flex-direction:column;justify-content:flex-end;width:100%;height:100%;bottom:0;left:0;right:0;color:white;background-color:rgba(0,0,0,0.3);");
const Item_Title = /*#__PURE__*/ styled_default()("h2", {
    target: "e1n770x44"
})("font-size:24px;font-weight:bold;margin:0 24px 0 24px;max-height:57.6px;min-height:57.6px;overflow:hidden;text-overflow:ellipsis;");
const Item_Subtitle = /*#__PURE__*/ styled_default()("div", {
    target: "e1n770x45"
})("margin:0 24px 4px 24px;font-size:20px;font-weight:bold;");
const Dates = /*#__PURE__*/ styled_default()("table", {
    target: "e1n770x46"
})("margin:0 24px 24px 24px;font-size:14px;");
/* harmony default export */ const Blog_Item = (Item_Item);

;// CONCATENATED MODULE: ./src/containers/Home/Blog/index.tsx






const Blog = ({ data  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ColumnContainer/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Blog_styled_Title, {
                children: "Blog"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Items, {
                children: data.map((it)=>/*#__PURE__*/ jsx_runtime_.jsx(Blog_Item, {
                        data: it
                    }, it.id))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ViewMore, {
                href: "/blog",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                    children: "View All"
                })
            })
        ]
    });
};
/* harmony default export */ const Home_Blog = (Blog);

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
const styled_Items = /*#__PURE__*/ styled_default()("div", {
    target: "exo2eev3"
})("display:flex;flex:0 0 auto;align-items:center;justify-content:center;margin-right:-16px;margin-left:-16px;&.last{margin-bottom:92px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-bottom:120px;}}&:hover{& > div{animation-play-state:paused;}}");

;// CONCATENATED MODULE: ./src/containers/Home/Clients/ug-mandiri.png
/* harmony default export */ const ug_mandiri = ({"src":"/_next/static/media/ug-mandiri.ad01ad4f.png","height":94,"width":369,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAHlBMVEXW2Oa1udP72aK/wtnqy6Lp5eSopLnYy8PSxbzx7OgPN68oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGElEQVR4nGPgYGFiYmZmZGRgY+dkZQACAAIkADSfh+ZjAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/bank-bengkulu.jpg
/* harmony default export */ const bank_bengkulu = ({"src":"/_next/static/media/bank-bengkulu.e3426a57.jpg","height":94,"width":435,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAACAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAbEAACAgMBAAAAAAAAAAAAAAAAAQIRAwQhQf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAWEQADAAAAAAAAAAAAAAAAAAAAATH/2gAMAwEAAhEDEQA/AK1zksWvFSdcVX5wAAoCh//Z","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/kimia-farma.png
/* harmony default export */ const kimia_farma = ({"src":"/_next/static/media/kimia-farma.09e17438.png","height":431,"width":1200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAJFBMVEXqjgYAMIVMaXGZcSz7lQAFPHUAOXgAJpLnjQXrjwMAANbMgxgCiEvtAAAADHRSTlNaXQASHGpwRUpFAhe0P60fAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nAXBhwEAMAjDMCeMFv4/GAk7IddsDPwwXXpS9QEErABcQx7N3wAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/plan-international.png
/* harmony default export */ const plan_international = ({"src":"/_next/static/media/plan-international.15ab5088.png","height":107,"width":395,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAHlBMVEWKveiVw+pOnNy31fDtzedbot7L1+/Z6feWtuRxr+PcMexyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGklEQVR4nGNgYWFnZmBgYGRg42BmZGJi5QQAAdMAOMsxvK8AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/mo-biol.png
/* harmony default export */ const mo_biol = ({"src":"/_next/static/media/mo-biol.21df1216.png","height":47,"width":130,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAJFBMVEX///+qq6rU5tyyzL+l2rTf5OKZoZ1ilHBjg2xJsWWKiImYu6nsuJH2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAH0lEQVR4nGNgAAMWFgYmJiZGRlZ2TgZmbmY2LkYOJgAC5wBSfP3i9QAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/jnk.png
/* harmony default export */ const jnk = ({"src":"/_next/static/media/jnk.d41ddfa7.png","height":73,"width":165,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAOVBMVEXW3ultf4OsvdOSp8Tb4+woU414krBqibLG0eHm6/Dt7eg+YYVXeaZUdqRQc6LLt2f/6qCkr7H9/f+WSm2PAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKUlEQVR4nA3BhwEAIAgDsKJAcY//j9UE9HJDoZDmat0CS5jHZMLZNfA9EF0A3vfBLcoAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/berdikari.png
/* harmony default export */ const berdikari = ({"src":"/_next/static/media/berdikari.74807edb.png","height":80,"width":164,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAKlBMVEX+9fT519X54eDY4u7D1+r////C3fHyvbvCxNeuzumgwuHwsK70xsTHz+Eqcb2eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJ0lEQVR4nAXBhwEAIAzDMKeDDvj/XiSQYbfA9MokiD07cxIPj27PDwj6AJM+TorCAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/jsn.png
/* harmony default export */ const jsn = ({"src":"/_next/static/media/jsn.ce77954b.png","height":74,"width":134,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAOVBMVEXUyNiEib14eLGeo8zk3ejP0d3SwMvb0N2ZnMmOlMRnaqzv6e/tgXxVWqLMsb+srdGprNCkqdDukYy/7w7qAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKklEQVR4nAXBhwEAIAgDsIJMF+r/x5rgbZbIOJiWRbw6hirdjAaBwR3+AROGAO5DziyuAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/bkpm.png
/* harmony default export */ const bkpm = ({"src":"/_next/static/media/bkpm.e62173ed.png","height":101,"width":132,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAM1BMVEX///9Wc5DZ4eJoeLPR1umxudn1+vL09fmFkr+/xd/h6efl8tjN4cGbtqXm7ejS3N6hqtDVTh8SAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nCXGWRYAEAzAwFC0td//tB7yMwGSjcYth9DfqMhXPasCbr4tQakr1jjLARN5AOYwiG8yAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/kemenkopukm.png
/* harmony default export */ const kemenkopukm = ({"src":"/_next/static/media/kemenkopukm.dc49750f.png","height":101,"width":131,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAANlBMVEX+///j6NbW4OK3x8nJ1dXU3b3z9vnf5+jl7O6pvcObsrh0knikuLPK1K72+PmLpJaVqn6/zdD31ZD1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nBXFURaAIAhFwYsCD7Sy/a+20/wMAM9c9Y+9+0bSsLODXn358GS2RxhQUmXCBxseAQFSIKzaAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/batan.png
/* harmony default export */ const batan = ({"src":"/_next/static/media/batan.81ea7fa9.png","height":110,"width":107,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEX////g3+3Ewbuuqrn9/v7Dvtrm8Nb89dyZk7i1s8/x5r/e7MCqpsfLyeDz8/fn37vt6af+7cDN08rY4K3d8M3Uzc2OiK+Lha7x9+S7t9hRagkmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPUlEQVR4nAXBBwLAIAgAsVNBwNG9/v/SJggpIiEIeW1FANvMSgX249K7C1g7c6+wYFY/wHWOqRG4+xOvjx86DAHunX1VVAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/csu.png
/* harmony default export */ const csu = ({"src":"/_next/static/media/csu.1445a929.png","height":69,"width":69,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEXKSEPLSEPKSEPLSENMaXHLSEPLSUPLR0LKSEPITkjMa2Vcrj3oAAAAC3RSTlNxqzGaAL+C32AFAv0lE5YAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA2SURBVHicNcuxEcAwDAOxp0hJdvYfOJciHRqQAqhQJ0lOoZkZbFrNahtp2/YHy5YobvJQ/P0FHQYAxKfaHLwAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/falga.svg
/* harmony default export */ const falga = ({"src":"/_next/static/media/falga.6e8301d4.svg","height":66,"width":180,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/menn.webp
/* harmony default export */ const menn = ({"src":"/_next/static/media/menn.8ffda562.webp","height":48,"width":144,"blurDataURL":"data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAACwAQCdASoIAAMAAkA4JagCdAEO/gLsAP7kaffNJo7fouyTKaflV4IpuEooPCf/BNaR+6P2/7d9vIjDOsAAAA==","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/raiz.webp
/* harmony default export */ const raiz = ({"src":"/_next/static/media/raiz.1ebd7e10.webp","height":174,"width":608,"blurDataURL":"data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACQAQCdASoIAAIAAkA4JYwAAv9CiUAA/vKRuHPL/j60E5veiUgcLXiEF34g/b2A5kvRkAAA","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/IFGF.jpg
/* harmony default export */ const IFGF = ({"src":"/_next/static/media/IFGF.fdae05b4.jpg","height":146,"width":367,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAADAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAbEAADAQADAQAAAAAAAAAAAAABAgMABAUiQf/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAcEQEAAgEFAAAAAAAAAAAAAAABAhEAAwRRsfD/2gAMAwEAAhEDEQA/ALKHGk1+umykrdmNAWPsin3MzJ1pIlPrwm3jFGzjrP/Z","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/bumiyasa.png
/* harmony default export */ const bumiyasa = ({"src":"/_next/static/media/bumiyasa.b4c152f3.png","height":95,"width":369,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAFVBMVEXPz8/Z2dnFys/a39nK09fI3L3T1NPAo4GUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGklEQVR4nGNgZWZgZGNkZGZgYmFgYGRiYgAAAWIAIPtzN3sAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/jasamarga-semarang-batang.png
/* harmony default export */ const jasamarga_semarang_batang = ({"src":"/_next/static/media/jasamarga-semarang-batang.18959c38.png","height":66,"width":225,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAElBMVEXP1d/Ey9qQlpmDipdpb3NiaXLXf5K5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFklEQVR4nGNgYmFgYGRkZGBgZmUAAwAA0wASHHgGKAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/bank-indonesia.png
/* harmony default export */ const bank_indonesia = ({"src":"/_next/static/media/bank-indonesia.20649085.png","height":316,"width":712,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEX+/v+6x9fF0N7V3ebe5exzi7Dg5uyuwM8V9uEAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNgYGBkZWIAAyiDmYWNiZmZmYWBkYmJkZGRnQkAA5UAPqfQxCYAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/mandiri-investasi.svg
/* harmony default export */ const mandiri_investasi = ({"src":"/_next/static/media/mandiri-investasi.958a9e81.svg","height":1017,"width":2113,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/bpkh.png
/* harmony default export */ const bpkh = ({"src":"/_next/static/media/bpkh.1095d94b.png","height":712,"width":2082,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAIVBMVEUaMFgbL1gYL1oYLlYYLlcgNVwYLlcdMlqFajeKczbkpQNoqys0AAAAC3RSTlNDZVDQoTS3WUfBqIjffpIAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAiSURBVHicBcGBAQAgCMOwjg1B/z/YhKdRAVw7Tg4rdU/xAQSjAFcWOgw5AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/tmj.png
/* harmony default export */ const tmj = ({"src":"/_next/static/media/tmj.4c90cac4.png","height":124,"width":285,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAM1BMVEWfpb2OkrHOw3vDwK2KuqiMlLJKUoGFjK2prcW2utHt5TPp7JdweJ02oU3byHqhspLE4MOSaZXuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGMQ4OZkZ2dgYGDg5WJi4GFjZGVg4edj5uBg5wQACNgAqKBITaEAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/jasamarga-pandaan.png
/* harmony default export */ const jasamarga_pandaan = ({"src":"/_next/static/media/jasamarga-pandaan.fed15506.png","height":83,"width":350,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAIVBMVEUAPYEBQoABQX0AQYF2elOIgUYANoyziiRGf4gmep5yYTxm6oQvAAAAC3RSTlM1ek5woiVfPrpavPTmrQAAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAaSURBVHicY+BkYWdjZGRkZuDgYmVgYmJgAAACnAA83JsE6wAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/kemenpora.png
/* harmony default export */ const kemenpora = ({"src":"/_next/static/media/kemenpora.8005cd22.png","height":90,"width":78,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAQlBMVEX19vrr8fjGWFjImKfN0+bg3unJzuLa6PfM2Oz////kPi3Lk6LUanC1wNy3wd1SXZyYlbq4gZrwiE5sg7rIxY+Rh7AdIS/UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOElEQVR4nAXBBwKAIAwAsSt0Am79/1dNKCKCguxrJkQf95hBrva2lrid12eJiR8uBr4/m0OhqlI/M5QBmDIQzcMAAAAASUVORK5CYII=","blurWidth":7,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/jerbasukimawabeya.png
/* harmony default export */ const jerbasukimawabeya = ({"src":"/_next/static/media/jerbasukimawabeya.497e5b4c.png","height":99,"width":73,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAATlBMVEX29PNel52esrmSqp5lhnWsrpyPrsWmvc6zubGzwcCftsg5lNTg3d3Szc9Xn8mHn7SYlY2GlH+cmYre3d5/nm12i4FapM6aoz3QzdKjsaMSTk+2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOElEQVR4nAXBCQKAIAgAwUVRQCu7j/9/tBkwd4PWI3qjLmZSSfeo8pFkX7UQZ86PM12q2wFzKS8/LHwBt0DHBbsAAAAASUVORK5CYII=","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/kazuhiro.png
/* harmony default export */ const kazuhiro = ({"src":"/_next/static/media/kazuhiro.175a468e.png","height":84,"width":96,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAQlBMVEX3+PikoJ/ENCr15+eGfn3dqKXFPDP7/v6wGQ+6LiWamJiKa2mZeHeScnHLd3HhtrPSj4zOhH7EYVrEX1hxamniv7xTJLHZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOUlEQVR4nAXBBwLAIAgAsUNRwN31/682AfZaH2AlImIbotpU34bMOfroQq4p1VQzdrm7HwPKcxf4ATXKAabkDLGcAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":7});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/adiyasa.png
/* harmony default export */ const adiyasa = ({"src":"/_next/static/media/adiyasa.ec03d734.png","height":103,"width":103,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEX////b7vTV4e/a39+y1ui63+yfu9n3/P70+fy0yuP89OPD4e3w8/nC0unK4++rvd318eK9ytbj5OGVwejIyrKFr8ektKb//+K2uI+rduJrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQElEQVR4nAXBCQLAEAwAwUVIgha9///SzoA28c1AJcQ9FqMFzvvdnMx8vmmDrPUqaoMW0lpHdExSral06FncOz9PDgIz77MCWAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/transoptimaluhur.png
/* harmony default export */ const transoptimaluhur = ({"src":"/_next/static/media/transoptimaluhur.2d2bcb47.png","height":110,"width":136,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAJFBMVEX////j5OX3/P6szem+2u/k8Pje39/q7O3S3ufS5/bJ1d749fTLbZcPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALElEQVR4nB3IyQ0AMAgDQZsb0n+/EexnpAUAd1ytZqtoPr3XQ5NbVWuSESQ/DPwAhL9gdOwAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/lmj.png
/* harmony default export */ const lmj = ({"src":"/_next/static/media/lmj.af1f3c25.png","height":103,"width":105,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAZlBMVEXp6OnH0+Dm5eTe4OIaQ2uitcZlhabo7O/f5eqYop5YZVEwSlEsUW6IobuClpz59+kPP3VRa2XZy2prgp0KLVCgp6FCVEiGi2NseF8ALF9QcpOYmFrN1NjCxaj////v7tr489Ket9cO8XwaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARUlEQVR4nAXBBwKAIAwEsGO2IFvFvf7/SRPk9BlrLeFp701xZ4jarmgMQ5Rw1C0QhC56WTXjHHyfumco51wa5wxJgATUD38jAx824FC2AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/jasasarana.png
/* harmony default export */ const jasasarana = ({"src":"/_next/static/media/jasasarana.577953d3.png","height":99,"width":99,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEWTocF1hrB9jrfO6/2ktdSPlaRaV1NUWGFze4CCg4V+jbPA2uydrMppbnexu9Rzc3JoeqeZnqnY3OiJpMeLrNFagbdISVChy+uZxOqbqsh8n71iZmgzOknm6vWdpbS9xNd9jbVmFU+pAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARElEQVR4nAXBBwKAIAwEsEMKbdm4t///pQlGpIMoPTDLtp98O4TZRvH8YpiilUsIbvVSNRNc9rWrFphBmbkDpSEA7fsBbx8C1I7I7uwAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/giz.gif
/* harmony default export */ const giz = ({"src":"/_next/static/media/giz.3923c8ea.gif","height":62,"width":236,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/danareksa.png
/* harmony default export */ const danareksa = ({"src":"/_next/static/media/danareksa.4eda84f4.png","height":78,"width":314,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAElBMVEUFUKMFUKMGUqO6sq7Nys2zsbQ5LfFeAAAABnRSTlM5MCiBYmkKJs/NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFklEQVR4nGNgZmVkZGJkZGJgZmEAAwABKwAY/c+PmwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/pae.jpeg
/* harmony default export */ const pae = ({"src":"/_next/static/media/pae.20fe4948.jpeg","height":161,"width":118,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAdEAABBAIDAAAAAAAAAAAAAAABAAIDBBETBSFx/8QAFQEBAQAAAAAAAAAAAAAAAAAABQb/xAAXEQEAAwAAAAAAAAAAAAAAAAABABEx/9oADAMBAAIRAxEAPwCtZs1rHGQ1wyPZGGDYXd4a0gjwk5REVCFZBFvZ/9k=","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/tamansafarisolo.png
/* harmony default export */ const tamansafarisolo = ({"src":"/_next/static/media/tamansafarisolo.75e7e36f.png","height":225,"width":225,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEX///+FppR3nYiSsJ+ZuZd/opCqwrW734fH5Jylva7M2NDd5d/W4NmxxLeHrYaIroRMfw/MAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAN0lEQVR4nB3GyRHAMAjAQHEZfCTuv9sM0UcLEMKfjqn9paALmBvOAwwxMWuEhDT8db8OVGZl8QEZFQDf9Osz4QAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/wiucycling.png
/* harmony default export */ const wiucycling = ({"src":"/_next/static/media/wiucycling.ec56ce9d.png","height":86,"width":611,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAABlBMVEX4+Pj29vbAQRkfAAAAAnRSTlNMPXI3gSAAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAOSURBVHicY2BgYGAEQQAAEgAEojrX9gAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":1});
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
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styled_Items, {
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
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 80,
                                    height: 80,
                                    src: csu,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 180,
                                    height: 66,
                                    src: falga,
                                    alt: "",
                                    quality: 100,
                                    placeholder: "empty"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 144 * 1.1,
                                    height: 48 * 1.1,
                                    src: menn,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 128 * 1.5,
                                    height: 37 * 1.5,
                                    src: raiz,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 256 * 0.6,
                                    height: 102 * 0.6,
                                    src: IFGF,
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
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 80,
                                    height: 80,
                                    src: csu,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 180,
                                    height: 66,
                                    src: falga,
                                    alt: "",
                                    quality: 100,
                                    placeholder: "empty"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 144 * 1.1,
                                    height: 48 * 1.1,
                                    src: menn,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 128 * 1.5,
                                    height: 37 * 1.5,
                                    src: raiz,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 256 * 0.6,
                                    height: 102 * 0.6,
                                    src: IFGF,
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
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 80,
                                    height: 80,
                                    src: csu,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 180,
                                    height: 66,
                                    src: falga,
                                    alt: "",
                                    quality: 100,
                                    placeholder: "empty"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 144 * 1.1,
                                    height: 48 * 1.1,
                                    src: menn,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 128 * 1.5,
                                    height: 37 * 1.5,
                                    src: raiz,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 256 * 0.6,
                                    height: 102 * 0.6,
                                    src: IFGF,
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
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 80,
                                    height: 80,
                                    src: csu,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 180,
                                    height: 66,
                                    src: falga,
                                    alt: "",
                                    quality: 100,
                                    placeholder: "empty"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 144 * 1.1,
                                    height: 48 * 1.1,
                                    src: menn,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 128 * 1.5,
                                    height: 37 * 1.5,
                                    src: raiz,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 256 * 0.6,
                                    height: 102 * 0.6,
                                    src: IFGF,
                                    alt: "",
                                    quality: 100
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Con, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styled_Items, {
                    className: "last",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Row, {
                            role: "list",
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
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 236 * 0.9,
                                    height: 62 * 0.9,
                                    src: giz,
                                    alt: "",
                                    quality: 100,
                                    placeholder: "empty"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 256 * 0.86,
                                    height: 64 * 0.86,
                                    src: danareksa,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 118 * 0.61,
                                    height: 164 * 0.61,
                                    src: pae,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 96,
                                    height: 96,
                                    src: tamansafarisolo,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 256,
                                    height: 36,
                                    src: wiucycling,
                                    alt: "",
                                    quality: 100
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Row, {
                            role: "list",
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
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 236 * 0.9,
                                    height: 62 * 0.9,
                                    src: giz,
                                    alt: "",
                                    quality: 100,
                                    placeholder: "empty"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 256 * 0.86,
                                    height: 64 * 0.86,
                                    src: danareksa,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 118 * 0.61,
                                    height: 164 * 0.61,
                                    src: pae,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 96,
                                    height: 96,
                                    src: tamansafarisolo,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 256,
                                    height: 36,
                                    src: wiucycling,
                                    alt: "",
                                    quality: 100
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Row, {
                            role: "list",
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
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 236 * 0.9,
                                    height: 62 * 0.9,
                                    src: giz,
                                    alt: "",
                                    quality: 100,
                                    placeholder: "empty"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 256 * 0.86,
                                    height: 64 * 0.86,
                                    src: danareksa,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 118 * 0.61,
                                    height: 164 * 0.61,
                                    src: pae,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 96,
                                    height: 96,
                                    src: tamansafarisolo,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 256,
                                    height: 36,
                                    src: wiucycling,
                                    alt: "",
                                    quality: 100
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Row, {
                            role: "list",
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
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 236 * 0.9,
                                    height: 62 * 0.9,
                                    src: giz,
                                    alt: "",
                                    quality: 100,
                                    placeholder: "empty"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 256 * 0.86,
                                    height: 64 * 0.86,
                                    src: danareksa,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 118 * 0.61,
                                    height: 164 * 0.61,
                                    src: pae,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 96,
                                    height: 96,
                                    src: tamansafarisolo,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 256,
                                    height: 36,
                                    src: wiucycling,
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
var TitleDescription = __webpack_require__(4267);
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
const reducer = (state, action)=>{
    switch(action.type){
        case "submit":
            return {
                ...state,
                status: "progress"
            };
        case "success":
            return {
                ...state,
                status: "success"
            };
        case "failed":
            return {
                ...state,
                status: "idle",
                error: action.error
            };
        case "reset":
            return {
                ...state,
                status: "idle",
                error: undefined
            };
        default:
            return state;
    }
};
const Contact = ()=>{
    const [state, dispatch] = (0,external_react_.useReducer)(reducer, {
        status: "idle"
    });
    const [values, setValues] = (0,external_react_.useState)({
        email: "",
        name: "",
        subject: "",
        message: ""
    });
    (0,external_react_.useEffect)(()=>{
        if (state.error) {
            alert(state.error);
            dispatch({
                type: "reset"
            });
        } else if (state.status === "success") {
            alert("Message recorded!");
            dispatch({
                type: "reset"
            });
        }
    }, [
        state.status,
        state.error
    ]);
    const onChange = (e)=>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Contact_Root, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(TitleDescription/* default */.ZP, {
                title: "Contact Us",
                children: "Please enter your details"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(F, {
                onSubmit: (a)=>{
                    a.preventDefault();
                    dispatch({
                        type: "submit",
                        values
                    });
                    fetch("/api/contact", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(values)
                    }).then((res)=>{
                        if (res.ok) {
                            dispatch({
                                type: "success"
                            });
                        } else {
                            dispatch({
                                type: "failed",
                                error: "Internal Server Error"
                            });
                        }
                    }).catch((e)=>{
                        dispatch({
                            type: "failed",
                            error: e.message
                        });
                    });
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Group, {
                        className: "mb-4",
                        controlId: "name",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                            name: "name",
                            required: true,
                            type: "name",
                            placeholder: "Enter your full name",
                            disabled: state.status === "progress",
                            value: values.name,
                            onChange: onChange
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()).Group, {
                        className: "mb-4",
                        controlId: "email",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                                name: "email",
                                required: true,
                                type: "email",
                                placeholder: "Enter your email",
                                disabled: state.status === "progress",
                                value: values.email,
                                onChange: onChange
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control.Feedback, {
                                type: "invalid",
                                children: `We'll never share your email with anyone else.`
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Group, {
                        className: "mb-4",
                        controlId: "subject",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                            name: "subject",
                            required: true,
                            type: "text",
                            placeholder: "Enter your subject",
                            disabled: state.status === "progress",
                            value: values.subject,
                            onChange: onChange
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Group, {
                        className: "mb-4",
                        controlId: "message",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                            name: "message",
                            required: true,
                            type: "text",
                            as: "textarea",
                            rows: 3,
                            placeholder: "Enter your subject",
                            disabled: state.status === "progress",
                            value: values.message,
                            onChange: onChange
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                        className: "mt-3",
                        type: "submit",
                        disabled: state.status === "progress",
                        children: "Submit"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Home_Contact = (Contact);

;// CONCATENATED MODULE: ./src/containers/Home/Pillars/Item/styled.ts



const styled_Root = /*#__PURE__*/ styled_default()(Card/* default */.ZP, {
    target: "ey5makt0"
})("width:180px;display:flex;flex-direction:column;align-items:center;margin-left:5px;margin-right:5px;margin-top:20px;");
const Img = /*#__PURE__*/ styled_default()("div", {
    target: "ey5makt1"
})("background-color:", GlobalStyle/* color.primary.dark */.$_.primary.dark, ";border-radius:50%;width:100px;height:100px;display:flex;align-items:center;justify-content:center;margin-top:28px;");
const Label = /*#__PURE__*/ styled_default()("div", {
    target: "ey5makt2"
})("font-size:16px;font-weight:600;align-self:stretch;text-align:center;margin-bottom:25px;margin-top:20px;");

;// CONCATENATED MODULE: ./src/containers/Home/Pillars/Item/index.tsx



const Pillars_Item_Item = ({ icon , label  })=>{
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
/* harmony default export */ const Pillars_Item = (Pillars_Item_Item);

;// CONCATENATED MODULE: ./src/containers/Home/Pillars/styled.ts


const Pillars_styled_Items = /*#__PURE__*/ styled_default()("div", {
    target: "e1p6dpdv0"
})("display:flex;flex-wrap:wrap;justify-content:space-around;margin-bottom:16px;@media (min-width:", GlobalStyle/* breakpoints.sm */.AV.sm, "){min-width:392px;max-width:392px;margin:0 auto 30px auto;}@media (min-width:", GlobalStyle/* breakpoints.lg */.AV.lg, "){min-width:816px;max-width:816px;margin:0 auto 30px auto;}");

;// CONCATENATED MODULE: ./src/containers/Home/Pillars/funding.svg
/* harmony default export */ const funding = ({"src":"/_next/static/media/funding.25c0fb0f.svg","height":58,"width":58,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/containers/Home/Pillars/capacity-building.svg
/* harmony default export */ const capacity_building = ({"src":"/_next/static/media/capacity-building.c89c2d71.svg","height":61,"width":61,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/containers/Home/Pillars/index.tsx









const Pillars = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ColumnContainer/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(TitleDescription/* default */.ZP, {
                title: "We Have Four Pillars To Work On",
                children: "We Have Years Of Experience Working On These Fields"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Pillars_styled_Items, {
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
                children: "Projects"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Project_styled_Items, {
                children: data.map((r)=>/*#__PURE__*/ jsx_runtime_.jsx(Project/* default */.ZP, {
                        data: r
                    }, r.id))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ViewMore, {
                href: "/project",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                    children: "View All"
                })
            })
        ]
    });
};
/* harmony default export */ const Home_Project = (Project_Project);

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/styled.ts



const Sectors_styled_Items = /*#__PURE__*/ styled_default()((external_react_slick_default()), {
    target: "e11yy5cr0"
})("max-width:calc(100% - 24px);align-self:center;@media (min-width:1024px){max-width:920px;}");
const Arrow = /*#__PURE__*/ styled_default()("div", {
    target: "e11yy5cr1"
})("display:flex;align-items:center;justify-content:center;background-color:white;& svg path{fill:", GlobalStyle/* color.primary.normal */.$_.primary.normal, ";}border-radius:50%;width:36px;height:36px;&:before{display:none;}&.slick-prev{transform:translate(8px,-50%);z-index:2;@media (min-width:1100px){transform:translate(-36px,-50%);}}&.slick-next{transform:translate(-8px,-50%);@media (min-width:1100px){transform:translate(36px,-50%);}}");

;// CONCATENATED MODULE: ./src/containers/Home/Sectors/restructuring.png
/* harmony default export */ const restructuring = ({"src":"/_next/static/media/restructuring.3ab74dd4.png","height":275,"width":201,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAYFBMVEV8iZefgYGit8B1kp16ZWJTcHhBTlAqTVh2f4VfZmekrLrh4+ucamOiqLVSYGalkZ2PqrelnqiflZaBlqGuws25vcqUyNBXdXXR2uY1aXRanKDB1eFDXF6DdnJZf42Wk48/XQntAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOklEQVR4nAXBBwKAIAwAsWO2gIp7j///0gQzLG0u9OucKUz2cu+OdeN3Hmjyut3ELoT0ICLRNwBazQ9HUgJC0ZHXywAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/investment.png
/* harmony default export */ const investment = ({"src":"/_next/static/media/investment.c23b9754.png","height":1278,"width":939,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAWlBMVEU/SUiDZlStd040OjhtbmuvWjLvuoHew6FzTDv86ME9QEEmHx5lamI6HzMmNDARDhJWTlA7Nzg0DiBANUdgVmazgmATKyZaQVRKP0o0Rke8noKVblIfDw5ZLiIqua5BAAAACnRSTlP+/vn/+f75/f787NyUXAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADlJREFUeJwFwQcCgCAMALFT1ELLdM//f9ME59x8LCgtrQklcxZi3K+qbHKbVbwfu1yw95PwwCBh6n9BSgJJteAcAgAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/financial.png
/* harmony default export */ const financial = ({"src":"/_next/static/media/financial.965b3d01.png","height":275,"width":202,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAWlBMVEXS0Nq3wuF0cplJR1ne4OrZ4PW4tcYaITcLEhkhLEJoZIQUOi0XQzTAwc0XQD6FaW5oaXikprjDpq+jp8HY1NrH0vOUeZS+wNXKnI+CeqhuZIuZgowaISduVVT0p1ydAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOUlEQVR4nAXBBQLAIAwAsUPbMheY//+bS9Byi3VoucR6NHiTkfdrooHnXP08kQ9XU8JtS4wD7ED+AT8cAhKqgc4YAAAAAElFTkSuQmCC","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/health.png
/* harmony default export */ const health = ({"src":"/_next/static/media/health.d745bb13.png","height":2383,"width":1746,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAV1BMVEVDRkaVnqVhXFsfHRqdoahWWVuDiYtMT1JiaGtyW1BuU0VpbXSzuMCqrraRkZV5a2hNRUG7v8fHy9I5ODZzeHxeYGFWPzOOhIKJkJUyLSqKlJhmXlyBdnFDzmY/AAAAEXRSTlP89f7+/vr1+/r+/v7+/v7++iN6h14AAAAJcEhZcwAACxMAAAsTAQCanBgAAAA6SURBVHicBcGHEYAwDACxD6TScnYqZf85kQhlLUC4eyLg+ra0iB0tVs8pe52GQ+18DCpXfh2iI33+Bz69An3Il9VzAAAAAElFTkSuQmCC","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/environmental.png
/* harmony default export */ const environmental = ({"src":"/_next/static/media/environmental.f9a6332d.png","height":2850,"width":2079,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAY1BMVEVsaFnSn5ZkSSxidHmmkZOXi5AAGgTLnpx8blHFl4oMLhx6ZEqHfm7ds7ZIW0i/m51CcIO5kIfHp6UbNBe3n4d0e1e/i3GVlGyFhmCGnKeplqBZX1vkv6PJi3E9Ti3ZsZU1UTUrFdUYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOklEQVR4nAXBhQGAMBAAsaP2VYq77T8lCV9MSndcT7qV5i3N4ndy2dYAWebQg6ki5qAdRntGJu+w7gdKpgJy3w0UmgAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/information.png
/* harmony default export */ const information = ({"src":"/_next/static/media/information.87175948.png","height":2741,"width":2008,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAUVBMVEWVmJmynoqugW7LtaUQGBKan55GR0iBg4ZRU1Q1ODZ+ZVRdX2JZOx1CQ0VjWlVvdXihe2iKgX2JdnclLye5rJ6+kHXMz9GklYZ9dW57bmSZjYBZiSXUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOElEQVR4nAXBBwKAIAwAsQMKbXGg4P7/Q00AVBVyBmiTWTHm4iLKtwzxi8fXPSbuN559I4Vaj/ADJtQBunzDOngAAAAASUVORK5CYII=","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/infrastructure.png
/* harmony default export */ const infrastructure = ({"src":"/_next/static/media/infrastructure.2ae3f28b.png","height":1321,"width":968,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAQlBMVEUgJCCNq8QjMDpQUkooO05/pMhPSzstRV0rLSMqQFcdKC+DjJGhuMhyd3KXoaSUtdGQr8qSprKErNI6OC1sfIRmZFrR5Bk+AAAACnRSTlP+////+///+/778uK37gAAAAlwSFlzAAALEwAACxMBAJqcGAAAADZJREFUeJwVwQkWgCAIQMEPGCpott7/qr1m2H4XIseShzHO6Tf79NcTN0tLoNFAVSOCWnsv5QMtbQF5kS15jQAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/ev.png
/* harmony default export */ const ev = ({"src":"/_next/static/media/ev.3f1b7aad.png","height":2592,"width":1899,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAS1BMVEUMHyM8VV2uw8z6//+JoqwRKS5QZWpacXnl9vTq+vgZNT8uRk5GYmzz9/ZYaWpngIhvh4ySmJ+wr7Xg6euZn5XIx7Geqa2Jk4vO3dznxw+/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAN0lEQVR4nAXBBwLAIAgAsVNRwNnd/v+lTYjJzY39MP8GRaM8idBFzkHtS98bapjzIuemRQHa2n4y5AHIX6y93wAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/property.png
/* harmony default export */ const property = ({"src":"/_next/static/media/property.72f3b8d1.png","height":1280,"width":938,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAWlBMVEUMLBm3nXensc4vNEhqdJM7SyQ0OU4SPBxcZHpMU2cZMx50Z2BCR0tgV1QrRiKYdU+jpbU9PyqliWfAmGO6p5LJ1fMzNTdMOjNAUFyLjp8+S2dmRCyggmWklINQ9uuKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOUlEQVR4nAXBBQLAIAwAsUNLkTH3/f+bS7idi1GpZ0reo7vazZJaq9fIUb53nXmKWUwn5yGECUBEfj6zAifrr+QVAAAAAElFTkSuQmCC","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/waste.png
/* harmony default export */ const waste = ({"src":"/_next/static/media/waste.f7befb6a.png","height":1301,"width":953,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAYFBMVEXPt5lON5rWoDDQxQS5sXm7qqW7s5uvYje6RTVCeGAyPxxJUDVBQjRBVCg5SCVBTjQoKyFSXUCffBQpOBllUUeajBtxaVKcYRxfWTOOPCChRj21Jh1TP1vAqCdBdFI+Kaw7mpFxAAAACnRSTlP9/v7+/f39/v7+FEJdFgAAAAlwSFlzAAALEwAACxMBAJqcGAAAADlJREFUeJwFwQUCgDAMALHDoe0U9///cgnOiUjE+zBLRDWkbeFQUzP2Mz15ZRinqm647u9/My19BwVM0gKlRx/fpAAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/renewable_energy.png
/* harmony default export */ const renewable_energy = ({"src":"/_next/static/media/renewable_energy.d07cbf16.png","height":1280,"width":938,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAOVBMVEW40OM4Nj3c5enn7N2NbHMXGBvf3tHV3+IiKTgoLj8oJSfdvKHpyqw+PkbMsJfZ2c2bdXh8YWbqwqTNjag3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nCXFSRIAEBAEsGZ2O/9/rCpyCfDlbGYG1alEaKeOVrGYNzPCe4p4uaNIKiIXIAcBS5Sg72QAAAAASUVORK5CYII=","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/biotechnology.png
/* harmony default export */ const biotechnology = ({"src":"/_next/static/media/biotechnology.eca77576.png","height":1921,"width":1408,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAYFBMVEVWTUlvX1SUc3a51N5VUldMY0Ktvbulm5GwpZvBs5mYoJmAgoV+fHN2WV99VEVuZWKMc2ylnZ26uLeMdoF8a2N9RTg2MS+OfnK+tKuAk4LQ0tl7XnmIgYKZhHpoJyRggGXdqmLeAAAADHRSTlP+/v7+/v7+/v7+/v7WzDArAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAO0lEQVR4nAXBBwKAIAwAsXOC2rJxj///0gS7yDx23O6t5aN3rWsG9Ir1OQghazqZbNaY2Msqm8eAGP8DT2ICzDC/4McAAAAASUVORK5CYII=","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/Item/index.tsx




const Inner = /*#__PURE__*/ styled_default()((link_default()), {
    target: "esrzdtx0"
})("margin-left:14px;margin-right:14px;width:calc(100% - 28px);border-radius:8px;overflow:hidden;display:block;&:hover{& > * > img{transform:scale(1.1);}}");
const Item_Aspect = /*#__PURE__*/ styled_default()("div", {
    target: "esrzdtx1"
})("position:relative;width:100%;padding-top:", 275 / 202 * 100, "%;& > img{object-fit:cover;transition:transform 0.3s ease-in-out;}");
const Item_Label = /*#__PURE__*/ styled_default()("div", {
    target: "esrzdtx2"
})("font-size:16px;color:white;text-align:center;width:100%;padding-left:12px;padding-right:12px;bottom:12px;z-index:2;position:absolute;font-weight:500;");
const Sectors_Item_Item = ({ href , image , label  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Inner, {
        href: href,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Item_Aspect, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                    fill: true,
                    src: image,
                    alt: label,
                    quality: 100,
                    sizes: "(min-width: 1002px) 210px, (min-width: 992px) 276px, (min-width: 768px) 196px, (min-width: 746px) 25vw, (min-width: 488px) 50vw, 100vw",
                    placeholder: typeof image === "string" ? "empty" : "blur"
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



















const Sectors_images = {
    1: restructuring,
    2: investment,
    3: financial,
    4: health,
    5: biotechnology,
    6: renewable_energy,
    7: waste,
    8: property,
    9: ev,
    10: infrastructure,
    11: information,
    12: environmental
};
const Sectors = ({ data  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ColumnContainer/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(TitleDescription/* default */.ZP, {
                title: "Sectors & Themes Coverage",
                children: "Here are access that we can provide"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Sectors_styled_Items, {
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
                children: data.map((it)=>/*#__PURE__*/ jsx_runtime_.jsx(Sectors_Item, {
                        image: Sectors_images[it.id] || it.image,
                        label: it.title,
                        href: `/sector/${it.slug}`
                    }, it.id))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ViewMore, {
                href: "/project",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                    children: "View All"
                })
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
const styled_Item = /*#__PURE__*/ styled_default()((link_default()), {
    target: "eif5kcm3"
})("display:block;position:relative;flex:1;margin-top:8px;margin-bottom:8px;border-radius:8px;overflow:hidden;min-width:300px;& > .ratio{min-height:100%;& > img{transition:transform 1s ease-in-out;}}&:hover{& > .ratio > img{transform:scale(1.1);}}");
const styled_Label = /*#__PURE__*/ styled_default()(Text/* default */.Z, {
    target: "eif5kcm4"
})("color:white;/* max-width:260px;*/\n  font-weight:500;text-align:left;position:absolute;left:18px;top:18px;right:18px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){left:32px;top:32px;right:32px;}");

;// CONCATENATED MODULE: ./src/containers/Home/Services/business.png
/* harmony default export */ const business = ({"src":"/_next/static/media/business.8c500a01.png","height":1280,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAOVBMVEW1srN4dnWXl5fR1tfL0NGopKHBwcGdnZ4vLS6FhIl+bmuwrqyGeXM6LiujjYcAAABgYGQeHiDFyMpUT9pkAAAACXRSTlP+/////////v4HKoILAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nAXBhQEAIAwDsE5hgv3/LAmcTbVM4blFuhUjArQmI4LyrXNRBocRfxgPAROfN8SmAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/containers/Home/Services/capacity.png
/* harmony default export */ const capacity = ({"src":"/_next/static/media/capacity.ecfaee05.png","height":1000,"width":1500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAUVBMVEVVXkyPhX5tWkISGRMfNiYvNxdEQThRRD0YJR1BWyx0cVIlPiw3OjVTT1FcgSBkZWFxojMjHRtqh0xCZCqfrrlMOh9iaHEmKhCFblWRj2a+v8KSDZVAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nAXBhQEAIAwDsALD3eX/Q0lgjPAkp4C0/brDN1JpzLGnQBaK6wEE5Fj18h8keQGi/DTryAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/containers/Home/Services/investment.png
/* harmony default export */ const Services_investment = ({"src":"/_next/static/media/investment.89348a66.png","height":136,"width":543,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAHlBMVEVNSUhBOzNgXFCrkmSdhl01MzEuLzS1m2lHQjzly4m6i+WWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGklEQVR4nGNgYGBgYmZn4WBgYGRj4mRmZAUAAY4ANOa9OrEAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});
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
                            href: {
                                pathname: "/services",
                                hash: "business-and-management"
                            },
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
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styled_Label, {
                                    children: [
                                        "Business and",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        "Management Consulting"
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Col, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styled_Item, {
                                href: {
                                    pathname: "/services",
                                    hash: "capacity-building"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Ratio_default()), {
                                        aspectRatio: 127 / 543,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                            fill: true,
                                            src: capacity,
                                            alt: "Capacity Building (The Executive Business Program)",
                                            quality: 100,
                                            sizes: "(min-width: 1200px) 580px, (min-width: 992px) 470px, (min-width: 768px) 360px, 100vw"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styled_Label, {
                                        children: [
                                            "Capacity Building",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            "(The Executive Business Program)"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styled_Item, {
                                href: {
                                    pathname: "/services",
                                    hash: "investment"
                                },
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
const Index = ({ projects , posts , sectors  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Home_Banner, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Home_About, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Home_Pillars, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Home_Services, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Home_Sectors, {
                data: sectors
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Home_Project, {
                data: projects
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Home_Blog, {
                data: posts
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


/***/ }),

/***/ 85:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9522);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9104);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9154);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Navbar__WEBPACK_IMPORTED_MODULE_3__, axios__WEBPACK_IMPORTED_MODULE_5__]);
([_components_Navbar__WEBPACK_IMPORTED_MODULE_3__, axios__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Page = (props)=>{
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Business Consultant Company, Jakarta, Indonesia | Inpartner"
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Inpartner are The Most Trusted Consulting Partner To help create positive and endure changes in Local and Global Coverage"
                    })
                ]
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_Home__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                ...props
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
};
const getServerSideProps = async ({ req  })=>{
    const { sequelize  } = req.ctx;
    const { Project , Sector  } = sequelize.models;
    const transaction = await sequelize.transaction();
    try {
        const [projects, sectors, posts] = await Promise.all([
            Project.findAll({
                transaction,
                limit: 3,
                order: [
                    [
                        "promotedWeight",
                        "DESC"
                    ]
                ],
                include: [
                    {
                        association: "category",
                        attributes: [
                            "id",
                            "title",
                            "name"
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
            }),
            Sector.findAll({
                transaction
            }),
            axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(`${process.env.BLOG_URL}wp-json/wp/v2/posts`, {
                params: {
                    _embed: 1,
                    per_page: 3,
                    page: 1,
                    _fields: "id,title,slug,modified,categories,_embedded,_links.wp:featuredmedia,_links.wp:term"
                },
                headers: {
                    accept: "application/json"
                }
            })
        ]);
        await transaction.commit();
        return {
            props: {
                projects: JSON.parse(JSON.stringify(projects.map((d)=>d.toJSON()))),
                sectors: JSON.parse(JSON.stringify(sectors.map((d)=>d.toJSON()))),
                posts: posts.data
            }
        };
    } catch (e) {
        await transaction.rollback();
        return {
            props: {
                projects: [],
                sectors: [],
                posts: []
            }
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

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

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,636,172,524,51,941,135], () => (__webpack_exec__(85)));
module.exports = __webpack_exports__;

})();