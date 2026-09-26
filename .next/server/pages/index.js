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
    target: "e17pk3d60"
})("background-color:white;box-shadow:3px 3px 8px rgba(0,0,0,0.12);border-radius:8px;border:1px solid rgba(0,0,0,0.05);");
const CardLink = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    target: "e17pk3d61"
})("background-color:white;box-shadow:3px 3px 8px rgba(0,0,0,0.12);border-radius:8px;border:1px solid rgba(0,0,0,0.05);");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ }),

/***/ 9413:
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
    target: "e1tl1xo50"
})("margin-top:10px;margin-bottom:16px;align-self:center;min-width:140px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-top:24px;margin-bottom:30px;}& > button{width:100%;}");

// EXTERNAL MODULE: ./src/components/SectionTitle/index.tsx
var SectionTitle = __webpack_require__(3137);
;// CONCATENATED MODULE: ./src/containers/Home/About/styled.ts



const Title = /*#__PURE__*/ styled_default()(SectionTitle/* default */.Z, {
    target: "e1hs6d7z0"
})("text-align:center;margin-top:50px;margin-bottom:10px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-top:90px;margin-bottom:24px;}");

// EXTERNAL MODULE: ./src/components/Button/index.ts
var Button = __webpack_require__(3900);
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
                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                    children: "Learn More"
                })
            })
        ]
    });
};
/* harmony default export */ const Home_About = (About);

;// CONCATENATED MODULE: external "react-bootstrap/Carousel"
const Carousel_namespaceObject = require("react-bootstrap/Carousel");
var Carousel_default = /*#__PURE__*/__webpack_require__.n(Carousel_namespaceObject);
;// CONCATENATED MODULE: ./src/containers/Home/Banner/1.png
/* harmony default export */ const _1 = ({"src":"/_next/static/media/1.c2e35b66.png","height":943,"width":1440,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAKlBMVEUscr0iXageVaApa7UlY61ralpye3p6iX0rV5E0ZZ4kZbM9dKxia22AdmECRC8EAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKElEQVR4nGNgAgEOVnYGRhAAMVhYWFi4OFnZGJiZmZkZQAww4OblAQANiwCq0FO0GAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/containers/Home/Banner/2.png
/* harmony default export */ const _2 = ({"src":"/_next/static/media/2.6739ea3d.png","height":950,"width":1440,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAARVBMVEUjX7NlhK58laJjka8ye8p1osdUcaEaTZ8tc8JDmuJ9sNMSRpoZVak1a5ouWqREj85Oa5JynbgqSmcjRoAWLUozXIE2RFmvjoDrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nBXBhxEAIAgEsFdUwN73H9UzATNzCqHiy8YsOBGRfjdUtZV5HKIflsj6BxwRAVIjajYtAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/containers/Home/Banner/3.png
/* harmony default export */ const _3 = ({"src":"/_next/static/media/3.39a3e5a0.png","height":949,"width":1440,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAMFBMVEUvV6w0YrcpT6FIf9JCYH4/b8c6a8I5VH1Pb4RZcYFiaGorTJNHdr1ubmqHj45UXWQA+4xcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nBXGxxEAMAgDMNtACmn7b5tDLwGStHpHkY8JkkQlojV6HpiZ7Zf3Aw0bAMP62L6xAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Image.tsx
var Image = __webpack_require__(471);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"src\\fonts\\index.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"sans"}
var target_path_src_fonts_index_tsx_import_Inter_arguments_subsets_latin_variableName_sans_ = __webpack_require__(7533);
var target_path_src_fonts_index_tsx_import_Inter_arguments_subsets_latin_variableName_sans_default = /*#__PURE__*/__webpack_require__.n(target_path_src_fonts_index_tsx_import_Inter_arguments_subsets_latin_variableName_sans_);
;// CONCATENATED MODULE: ./src/containers/Home/Banner/styled.ts







const C = /*#__PURE__*/ styled_default()((Carousel_default()), {
    target: "e4f9oni0"
})("& .carousel-indicators{& > button{background-color:transparent;width:24px;height:24px;position:relative;opacity:1;transition:all 0.2s ease-in-out;&:before{width:8px;height:8px;content:'';border-radius:50%;background-color:#d9d9d9;position:absolute;left:8px;top:8px;}&:hover{transform:scale(1.2);&:before{background-color:var(--bs-primary);border:2px solid white;}}}& > .active{&:before{background-color:var(--bs-primary);}}@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){& > button{width:40px;height:40px;&:before{width:16px;height:16px;left:12px;top:12px;}}}margin-bottom:0;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-bottom:1rem;}@media (min-width:", GlobalStyle/* breakpoints.lg */.AV.lg, "){margin-bottom:2rem;}@media (min-width:", GlobalStyle/* breakpoints.xl */.AV.xl, "){margin-bottom:3rem;}}");
const Item = /*#__PURE__*/ styled_default()("div", {
    target: "e4f9oni1"
})("padding-top:", 702 / 13.66, "%;position:relative;@media (min-width:1440px){padding-top:740.017px;}");
const ItemInner = /*#__PURE__*/ styled_default()("div", {
    target: "e4f9oni2"
})("position:absolute;left:0;right:0;bottom:0;top:0;width:100%;height:100%;");
const BI = /*#__PURE__*/ styled_default()(Image/* default */.Z, {
    target: "e4f9oni3"
})("object-fit:cover;");
const Root = /*#__PURE__*/ styled_default()("div", {
    target: "e4f9oni4"
})("position:relative;");
const RootInner = /*#__PURE__*/ styled_default()("div", {
    target: "e4f9oni5"
})("position:absolute;left:0;right:0;bottom:0;top:0;");
const ContentContainer = /*#__PURE__*/ styled_default()((Container_default()), {
    target: "e4f9oni6"
})("display:flex;flex-direction:column;justify-content:center;height:100%;");
const Content = /*#__PURE__*/ styled_default()("div", {
    target: "e4f9oni7"
})("margin-right:auto;max-width:900px;color:white;font-family:", (target_path_src_fonts_index_tsx_import_Inter_arguments_subsets_latin_variableName_sans_default()).style.fontFamily, ";");
const styled_Title = /*#__PURE__*/ styled_default()("h1", {
    target: "e4f9oni8"
})("font-family:", (target_path_src_fonts_index_tsx_import_Inter_arguments_subsets_latin_variableName_sans_default()).style.fontFamily, ";font-weight:600;font-size:16px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){font-size:38px;}text-shadow:3px 3px 3px rgba(0,0,0,0.4);margin-bottom:0;");
const Subtitle = /*#__PURE__*/ styled_default()("div", {
    target: "e4f9oni9"
})("font-weight:500;font-size:12px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){font-size:28px;}text-shadow:3px 3px 3px rgba(0,0,0,0.4);");
const Description = /*#__PURE__*/ styled_default()("div", {
    target: "e4f9oni10"
})("font-size:10px;margin-top:10px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-top:24px;font-size:20px;}text-shadow:3px 3px 3px rgba(0,0,0,0.4);");
const LearnMore = /*#__PURE__*/ styled_default()(Button/* default */.Z, {
    target: "e4f9oni11"
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
    target: "efdw63x0"
})("text-align:center;margin-top:50px;margin-bottom:4px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-top:90px;margin-bottom:32px;}");
const Items = /*#__PURE__*/ styled_default()(Project/* ProjectsComponent */.vP, {
    target: "efdw63x1"
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
    target: "e1r0b1yn0"
})("margin-left:12px;margin-right:12px;flex:1;min-width:300px;")));
const Item_C = /*#__PURE__*/ styled_default()(Card/* CardLink */.YS, {
    target: "e1r0b1yn1"
})("display:flex;flex-direction:column;align-items:stretch;margin:12px;flex:1;min-width:300px;transition:transform 0.3s ease-in-out;position:relative;&:hover{transform:scale(1.015);}border-radius:12px;overflow:hidden;");
const Aspect = /*#__PURE__*/ styled_default()("div", {
    target: "e1r0b1yn2"
})("position:relative;width:100%;& > .aspect{padding-top:", 415 / 3.44, "%;& > img{object-fit:cover;}}");
const Item_Content = /*#__PURE__*/ styled_default()("div", {
    target: "e1r0b1yn3"
})("position:absolute;display:flex;flex-direction:column;justify-content:flex-end;width:100%;height:100%;bottom:0;left:0;right:0;color:white;background-color:rgba(0,0,0,0.3);");
const Item_Title = /*#__PURE__*/ styled_default()("h2", {
    target: "e1r0b1yn4"
})("font-size:24px;font-weight:bold;margin:0 24px 0 24px;max-height:57.6px;min-height:57.6px;overflow:hidden;text-overflow:ellipsis;");
const Item_Subtitle = /*#__PURE__*/ styled_default()("div", {
    target: "e1r0b1yn5"
})("margin:0 24px 4px 24px;font-size:20px;font-weight:bold;");
const Dates = /*#__PURE__*/ styled_default()("table", {
    target: "e1r0b1yn6"
})("margin:0 24px 24px 24px;font-size:14px;");
/* harmony default export */ const Blog_Item = (Item_Item);

;// CONCATENATED MODULE: ./src/containers/Home/Blog/index.tsx






const Blog = ({ data  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ColumnContainer/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Blog_styled_Title, {
                children: "Insight\xa0&\xa0Update"
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
    target: "e6n2r4z0"
})("text-align:center;margin-top:50px;margin-bottom:0px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-top:90px;margin-bottom:28px;}");
const Con = /*#__PURE__*/ styled_default()("div", {
    target: "e6n2r4z1"
})("display:flex;overflow-x:hidden;margin-top:32px;");
const Row = /*#__PURE__*/ styled_default()("div", {
    target: "e6n2r4z2"
})("display:flex;align-items:center;overflow:visible;& > img{margin-left:16px;margin-right:16px;object-fit:contain;flex:0 0 auto;position:relative;}will-change:transform;animation:marquee-horizontal-alt 100s linear infinite;@keyframes marquee-horizontal-alt{from{transform:translateX(-100%);}to{transform:translateX(0%);}}&.last{animation:marquee-horizontal 100s linear infinite;@keyframes marquee-horizontal{from{transform:translateX(0%);}to{transform:translateX(-100%);}}}");
const styled_Items = /*#__PURE__*/ styled_default()("div", {
    target: "e6n2r4z3"
})("display:flex;flex:0 0 auto;align-items:center;justify-content:center;margin-right:-16px;margin-left:-16px;&.last{margin-bottom:92px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-bottom:120px;}}&:hover{& > div{animation-play-state:paused;}}");

;// CONCATENATED MODULE: ./src/containers/Home/Clients/ug-mandiri.png
/* harmony default export */ const ug_mandiri = ({"src":"/_next/static/media/ug-mandiri.ad01ad4f.png","height":94,"width":369,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAHlBMVEXW2Oa1udO/wtn72aLYy8PSxbyopLnp5eTqy6Lx7OjvnrQhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGElEQVR4nGNg5WBmZmJiZGRgY+FkZwACAAIqADRZ5ei2AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/bank-bengkulu.jpg
/* harmony default export */ const bank_bengkulu = ({"src":"/_next/static/media/bank-bengkulu.e3426a57.jpg","height":94,"width":435,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAACAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAbEAACAgMBAAAAAAAAAAAAAAAAAQIRAwQhQf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAWEQADAAAAAAAAAAAAAAAAAAAAATH/2gAMAwEAAhEDEQA/AK1zksWvFSdcVX5wAAoCh//Z","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/kimia-farma.png
/* harmony default export */ const kimia_farma = ({"src":"/_next/static/media/kimia-farma.09e17438.png","height":431,"width":1200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAJFBMVEXqjgYAMIVMaXH7lQCZcSwAOXgFPHUAANYAJpLrjwPnjQXMgxiOSTqiAAAADHRSTlNaXQAcEnBqAkVFSheChNfAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIUlEQVR4nAXBhw0AIBDEsFy+CNh/YGy0oBT7wmuZzUl2PgOPAE/Oq2H1AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/plan-international.png
/* harmony default export */ const plan_international = ({"src":"/_next/static/media/plan-international.15ab5088.png","height":107,"width":395,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAHlBMVEWKvejtzee31fBOnNyVw+pbot7L1++WtuRxr+PZ6fd6LS5wAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGklEQVR4nGNgZORkYmBgYGFgY2diYWZm5QAAAaYAONhhbE8AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/mo-biol.png
/* harmony default export */ const mo_biol = ({"src":"/_next/static/media/mo-biol.21df1216.png","height":47,"width":130,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAJFBMVEX////U5tyqq6ql2rSyzL/f5OKKiImYu6lJsWVjg2xilHCZoZ0fKTYiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAH0lEQVR4nGNgAANmZgZGRkYmJlYuDgYWdhZuNiZORgACwQBRsUYelgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/jnk.png
/* harmony default export */ const jnk = ({"src":"/_next/static/media/jnk.d41ddfa7.png","height":73,"width":165,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAOVBMVEXW3unb4+ysvdOSp8Rtf4MoU414krBqibLG0eHm6/D9/f9Xeab/6qBUdqTLt2ekr7E+YYXt7ehQc6IVRBnIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKUlEQVR4nA3BhwEAIAgDsKJAcY//j9UE9FJDINDtYs0CU5nHZcLqJ/A9D20A2yiX6SkAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/berdikari.png
/* harmony default export */ const berdikari = ({"src":"/_next/static/media/berdikari.74807edb.png","height":80,"width":164,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAKlBMVEX519X+9fT54eDY4u7D1+r////C3fHyvbugwuHCxNeuzunwsK70xsTHz+Hhd4LIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJ0lEQVR4nAXBhwEAIAzDMKeDDvj/XiSEyW4J45WBiD69exIPjxnPDwjsAJNAWgqJAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/jsn.png
/* harmony default export */ const jsn = ({"src":"/_next/static/media/jsn.ce77954b.png","height":74,"width":134,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAOVBMVEXUyNiEib14eLGeo8zk3ejP0d3SwMvb0N2ZnMmOlMTv6e9naqztgXxVWqKsrdHMsb+kqdDukYyprNAfALGbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKklEQVR4nAXBhwEAIAgDsIJMF+r/x5rgFktkPEzLTbwGuiqdjAaBwR3+ARObAO6xhpbVAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/bkpm.png
/* harmony default export */ const bkpm = ({"src":"/_next/static/media/bkpm.e62173ed.png","height":101,"width":132,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAM1BMVEX///9Wc5Dh6edoeLPR1umxudn1+vL09fmFkr+/xd/Z4eLl8tjN4cGbtqXm7eihqtDS3N4A/hhnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nCXGWRYAEAzAwFC0td//tB7yMwGSjcYth9DfqMhXPasCbr4sQYm7xjrLARNaAOb/yroIAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/kemenkopukm.png
/* harmony default export */ const kemenkopukm = ({"src":"/_next/static/media/kemenkopukm.dc49750f.png","height":101,"width":131,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAANlBMVEX+///j6Nabsri3x8nJ1dXz9vnU3b3f5+jl7O6pvcPW4OJ0knikuLOLpJaVqn72+PnK1K6/zdD/V004AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nBXFURaAIAhFwYsCD7Sy/a+20/wMAGeO+see/SJp2b2THn358mC2ZxpQUkXABxq5AQGGmgAUAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/batan.png
/* harmony default export */ const batan = ({"src":"/_next/static/media/batan.81ea7fa9.png","height":110,"width":107,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEX////g3+3Ewbuuqrn9/v7Dvtrm8Nb89dyZk7i1s8/x5r/e7MCqpsfLyeDz8/fn37v+7cDt6afN08rY4K3d8M2OiK/Uzc3x9+SLha67t9g/RDB7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPUlEQVR4nAXBBwLAIAgAsVNBwNG9/v/SJggpIiEIeW1FANvNSgW249KnC1g7c6+wYFZfwHWOqRG4+x2fjx86JAHuw7IpWAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/csu.png
/* harmony default export */ const csu = ({"src":"/_next/static/media/csu.1445a929.png","height":69,"width":69,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEXKSEPLSEPKSEPLSENMaXHLSEPLSUPLR0LKSEPITkjMa2Vcrj3oAAAAC3RSTlNxqzGaAL+C32AFAv0lE5YAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA2SURBVHicNcuxEcAwDAOxp0hJdvYfOJciHRqQAqhQJ0lOoZkZbFrNahtp2/YHy5YobvJQ/P0FHQYAxKfaHLwAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/falga.svg
/* harmony default export */ const falga = ({"src":"/_next/static/media/falga.963c8e3e.svg","height":66,"width":180,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/raiz.webp
/* harmony default export */ const raiz = ({"src":"/_next/static/media/raiz.1ebd7e10.webp","height":174,"width":608,"blurDataURL":"data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACQAQCdASoIAAIAAkA4JYwAAv9CiUAA/vKRuHPL/j60E5veiUgcLXiEF34g/b2A5kvRkAAA","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/IFGF.jpg
/* harmony default export */ const IFGF = ({"src":"/_next/static/media/IFGF.fdae05b4.jpg","height":146,"width":367,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAADAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAbEAADAQADAQAAAAAAAAAAAAABAgMABAUiQf/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAcEQEAAgEFAAAAAAAAAAAAAAABAhEAAwRRsfD/2gAMAwEAAhEDEQA/ALKHGk1+umykrdmNAWPsin3MzJ1pIlPrwm3jFGzjrP/Z","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/gtaconstruction.png
/* harmony default export */ const gtaconstruction = ({"src":"/_next/static/media/gtaconstruction.a3e6ab62.png","height":148,"width":380,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAJ1BMVEUBg8k0dJgBg8kDgsc/co5BcYwAg8sAg8oAg8toaGdSbXwFgcUHgcKBy5KlAAAADXRSTlOrhMedZHNpg35BVWBD5twYhwAAAAlwSFlzAAAOwgAADsIBFShKgAAAACJJREFUeJwFwYcBADAIwzBDGB38fy8SVX3AwYcvBGH5LG4uBTcAZIjalpoAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/jbl.png
/* harmony default export */ const jbl = ({"src":"/_next/static/media/jbl.84d680be.png","height":1500,"width":1500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEVMaXEBAQECAQECAAECBQQBAQMDAgIUIwsCAQIkTiYBAAEAAAAtjy8AAQQAAAAqgiwRKBDYRHSrAAAAEXRSTlMA4s5ga1HDC64Gu5CchJRJnbxT63gAAAAJcEhZcwAALEsAACxLAaU9lqkAAAA7SURBVHicJYxLEsAgDIVQE1+itvb+p+2PDTMsAO3kJdf6jC6b3hxUo/RxgHqUCPtL7QNkflqbghT5DG4t8gFK6PEV7wAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/briinvestasi.png
/* harmony default export */ const briinvestasi = ({"src":"/_next/static/media/briinvestasi.f445753c.png","height":186,"width":799,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAFVBMVEXwZwQAUZzMYxsCUpoBUZvrZwYAUpt5F1cyAAAAB3RSTlMifh5aawhcqYjbbwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABpJREFUeJxjYGRjZGFiYGBgYGRjYWZiYGIFAAFOACZCBqAWAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/sepedabersamaindonesia.png
/* harmony default export */ const sepedabersamaindonesia = ({"src":"/_next/static/media/sepedabersamaindonesia.73e53242.png","height":151,"width":300,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAP1BMVEVJSUvGVh9aX1gFPnNsXFhXVllAQmRaVVZXV1lXV1j/Zg21o3Agl8qBbX//FwBOosV9YScIRHwBer0BbXcvWF3SiSQsAAAAFXRSTlMBSym0P2UzHVFyi5Cbgxs8moqaFAsvYBpYAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAKUlEQVR4nA3BhQEAIAwDsA6muPz/KyTYWZO4A2eRhgRj1kLXzMCtD3wPEcQA7t4Rp74AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/hanwha.png
/* harmony default export */ const hanwha = ({"src":"/_next/static/media/hanwha.bda41923.png","height":349,"width":1280,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAG1BMVEUAAAADAgGZWzQEAgD5iD8AAAAAAADziET/qHQ2unLhAAAACXRSTlMmLC4fPTwZVGFVjY9RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGklEQVR4nGNgYWFiYGZjZmBg52BiZGRkYAUAAdEAMCBUr5AAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/jabartel.png
/* harmony default export */ const jabartel = ({"src":"/_next/static/media/jabartel.db201eb7.png","height":134,"width":233,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAALVBMVEX+/v79/fvy9Pzi/N/x+/KDk/Tq7Pupt/fV2vCU/4Or7bK7xfadqvXv8PvAytfZC3HKAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAALUlEQVR4nBXKSRIAIAgEsR5AwfX/z7XMOZSQQFyZWYTI3bLN4axTvYc7BvrpAQ5aAKDg0pXNAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/muamalat.png
/* harmony default export */ const muamalat = ({"src":"/_next/static/media/muamalat.c836443b.png","height":333,"width":1090,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAGFBMVEVpAXd3bU5oAn2EyCJ5dEaFyiGDwCV7gUNktdqyAAAACHRSTlM6By2DNU9jTdG3OBcAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAXSURBVHicY2BkZWFiYmRkZGBjZmcAAQABdQAi3OifTAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/bumiyasa.png
/* harmony default export */ const bumiyasa = ({"src":"/_next/static/media/bumiyasa.b4c152f3.png","height":95,"width":369,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAFVBMVEXPz8/Z2dna39nFys/T1NPI3L3K09cIFQ7qAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGklEQVR4nGNgZWJgZGFkZGJgZmNgYGRmZgAAAUkAIXm6elcAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/jasamarga-semarang-batang.png
/* harmony default export */ const jasamarga_semarang_batang = ({"src":"/_next/static/media/jasamarga-semarang-batang.18959c38.png","height":66,"width":225,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAElBMVEXP1d/Ey9piaXJpb3ODipeQlpklfeJyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFklEQVR4nGNgZWZgYGRkZGBgYWIAAwAA6QASmpx0kQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/bank-indonesia.png
/* harmony default export */ const bank_indonesia = ({"src":"/_next/static/media/bank-indonesia.20649085.png","height":316,"width":712,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEX+/v+6x9fF0N7V3ebe5exzi7CuwM/g5uzHHwL0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNgYGBkZWIAAyiDmYWdiZmZmYWBkYmJkZGRjQkAA6IAPgHsANgAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/mandiri-investasi.svg
/* harmony default export */ const mandiri_investasi = ({"src":"/_next/static/media/mandiri-investasi.610ab6e0.svg","height":1017,"width":2113,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/bpkh.png
/* harmony default export */ const bpkh = ({"src":"/_next/static/media/bpkh.1095d94b.png","height":712,"width":2082,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAIVBMVEUaMFgbL1gYLlcYL1oYLlYgNVyFajeKczYdMloYLlfkpQM+9+RHAAAAC3RSTlNDZaFQ0DRHwVm3qE9rPhIAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAhSURBVHicBcGJDQAgDMSw3AOI7j9wbUZRAF7r2p8rHRIWBAkASM7rkmUAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/tmj.png
/* harmony default export */ const tmj = ({"src":"/_next/static/media/tmj.4c90cac4.png","height":124,"width":285,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAM1BMVEWfpb3Ow3tweJ2OkrGKuqjp7JfE4MOFjK22utGprcXDwK02oU3t5TNKUoGhspKMlLLbyHqB5gVSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNgY+VgZ2dgYGDg5mFkYOJl5mdg4RPg4uRk5wAAB48AqPODxscAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/jasamarga-pandaan.png
/* harmony default export */ const jasamarga_pandaan = ({"src":"/_next/static/media/jasamarga-pandaan.fed15506.png","height":83,"width":350,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAIVBMVEUBQoAAPYEBQX0AQYGziiRGf4gANowmep6IgUZ2elNyYTxnZtDWAAAAC3RSTlN6NU5wPrpfWiWivITRUPYAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAaSURBVHicY2DnZGFjYGBgZmDl4mBkYmJkBAACewA8QV/jswAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/kemenpora.png
/* harmony default export */ const kemenpora = ({"src":"/_next/static/media/kemenpora.8005cd22.png","height":90,"width":78,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAQlBMVEX19vrr8fjGWFjImKfN0+bJzuLg3una6PfM2Oz////Lk6LUanDkPi21wNy3wd2YlbrIxY+Rh7Bsg7rwiE5SXZy4gZqhpPHlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOElEQVR4nAXBBwKAIAwAsSt0Am79/1dNKCKCguxzJERfzxpBzna2lpgf3+WJi70mDrbfm0GhqlI/M2kBl7RDsIsAAAAASUVORK5CYII=","blurWidth":7,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/jerbasukimawabeya.png
/* harmony default export */ const jerbasukimawabeya = ({"src":"/_next/static/media/jerbasukimawabeya.497e5b4c.png","height":99,"width":73,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAATlBMVEX29PNel52esrmSqp6srpxlhnWPrsWmvc6zubGzwcCftsg5lNTg3d3Szc9Xn8l/nm2YlY3e3d6cmYqGlH9apM52i4GHn7Saoz3QzdKjsaNCoTptAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOElEQVR4nAXBCQKAIAgAwUVRQCu7j/9/tBkwd4PWI3qjLmZSSedd5SPJvhYlRs6PM12lHBvMqi8/LMwBt6C/VqEAAAAASUVORK5CYII=","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/kazuhiro.png
/* harmony default export */ const kazuhiro = ({"src":"/_next/static/media/kazuhiro.948a9a1d.png","height":678,"width":798,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAQlBMVEVMaXHEICZCEBLGICbQIijHICazHiNjFBcBCAjEICbFICbtJS3GISfjJCsCCQnWIikABwbNISgABwbHISfFICbQIih/xKI3AAAAFHRSTlMAlXO5888Pk4ToqD8cXqIWXiV1o+x9bwEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA5SURBVHicHcEJEoAgDATBARJM8Nbl/1+1ym64m/SewEj3LBDxXBFHUJdfZZ9mZnOluyQ1YBuZpfMBPhwB6/uwhJcAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":7});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/adiyasa.png
/* harmony default export */ const adiyasa = ({"src":"/_next/static/media/adiyasa.ec03d734.png","height":103,"width":103,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEX///+fu9nV4e/a39+y1ui63+zb7vT3/P70+fy0yuP89OPw8/nD4e3C0unK4++rvd318eK9ytbIyrKVwej//+KktKbj5OG2uI+Fr8cSMVZIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQElEQVR4nAXBCQLAEAwAwUVIgha9///SzoB28c1ApcQ9BqMXzu/anMy832mDrPUIaoNe0lpPdExSrSk0aFncGz9QGAIza1ccBwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/transoptimaluhur.png
/* harmony default export */ const transoptimaluhur = ({"src":"/_next/static/media/transoptimaluhur.2d2bcb47.png","height":110,"width":136,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAJFBMVEX////j5OX3/P6szem+2u/k8Pjq7O3e39/S5/bS3uf49fTJ1d4zJ1/9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAALElEQVR4nB3IyQ0AMAgDQZsb0n+/EexnpAUAd1ylZqtojN6rR5Nb3WuQmSQ/DK4AhDioWI0AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/lmj.png
/* harmony default export */ const lmj = ({"src":"/_next/static/media/lmj.af1f3c25.png","height":103,"width":105,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAZlBMVEXp6OnH0+Dm5eTe4OIaQ2uitcZlhabo7O/f5eqYop5YZVEwSlEsUW6IobuClpz59+kPP3VRa2XZy2prgp0KLVCgp6FCVEiGi2NseF8ALF9QcpOYmFrN1NjCxaj////489Ket9fv7toW+kMEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARUlEQVR4nAXBBwKAIAwEsGO2IFvFvf7/SRPk9BprLeFrz01xZ4jarmgMQ5Rw1C0QhC56WTXjHHyfumco51wa5wxJgATUD38eAx+26fVtAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/jasasarana.png
/* harmony default export */ const jasasarana = ({"src":"/_next/static/media/jasasarana.577953d3.png","height":99,"width":99,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEWTocF1hrB9jrd+jbOktdSPlaRaV1NUWGFze4CCg4XA2uzO6/2drMppbnexu9Rzc3JoeqeZnqnY3OiJpMdagbeLrNFISVChy+uZxOqbqsh8n71iZmgzOknm6vWdpbS9xNd9jbWxmYvGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARElEQVR4nAXBBwKAIAwEsEMKbdm4t///pQlGpIMoPTDztp98O9glBvH8YphClEsIbvVSNRNc9rWrFphBmbkDpcEC7fsBcAQC1Ai5fD4AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/giz.gif
/* harmony default export */ const giz = ({"src":"/_next/static/media/giz.3923c8ea.gif","height":62,"width":236,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/danareksa.png
/* harmony default export */ const danareksa = ({"src":"/_next/static/media/danareksa.4eda84f4.png","height":78,"width":314,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAElBMVEUFUKMFUKO6sq4GUqOzsbTNys3ENcSCAAAABnRSTlM5MIEoaWKYyv/uAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFklEQVR4nGNgYmFkZGZkZGZgYmUAAwABIAAY+ekz3AAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/pae.jpeg
/* harmony default export */ const pae = ({"src":"/_next/static/media/pae.20fe4948.jpeg","height":161,"width":118,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAdEAABBAIDAAAAAAAAAAAAAAABAAIDBBETBSFx/8QAFQEBAQAAAAAAAAAAAAAAAAAABQb/xAAXEQEAAwAAAAAAAAAAAAAAAAABABEx/9oADAMBAAIRAxEAPwCtZs1rHGQ1wyPZGGDYXd4a0gjwk5REVCFZBFvZ/9k=","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/tamansafarisolo.png
/* harmony default export */ const tamansafarisolo = ({"src":"/_next/static/media/tamansafarisolo.2eb27198.png","height":271,"width":213,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAARVBMVEWDfDqWxzt+eDqUxEeTxkpMaXGFfjyFpXaFjDWEgjmGvESCkz9TpIRTpX1SkFxIt5BpwIZoxYmNwkKPxEZzoz2Mw0KNw0QmbSxSAAAAFnRSTlN7PD4qqwBxEiJnbppm3UKBpGPxd6/hnmEZCgAAAAlwSFlzAAALEwAACxMBAJqcGAAAADhJREFUeJwVxUkSwCAIAMFRQUCzL/z/qan0pbFjXaxx7lvxGy2SKbQrU5SR432UOmtMwyHir3f8AzgYAch5xa5NAAAAAElFTkSuQmCC","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/united-bike.png
/* harmony default export */ const united_bike = ({"src":"/_next/static/media/united-bike.3bc9ca48.png","height":419,"width":600,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAPFBMVEVMaXH/7wj/3QKBcxwHBwoODQv76gkMDAr52Q0SEQj66gn/3QQAAAr//w/+3QD/+AcTExEcHB382wURDwiYhg5LAAAAFHRSTlMARcgNPoJRaCZTPqAfF/BdpiqueJ82QQ4AAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAzSURBVHicFchJDgAgCATBEcTBffn/Yw196aQAoC9xRF08xfW1EjJL2wE0VpIXuebBY/oBGEIBEmVNh9QAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/bsi.svg
/* harmony default export */ const bsi = ({"src":"/_next/static/media/bsi.9f9eeb0c.svg","height":242,"width":280,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/taman_safari_indonesia.webp
/* harmony default export */ const taman_safari_indonesia = ({"src":"/_next/static/media/taman_safari_indonesia.e76b370f.webp","height":1113,"width":785,"blurDataURL":"data:image/webp;base64,UklGRpgAAABXRUJQVlA4WAoAAAAQAAAABQAABwAAQUxQSDEAAAAAAHJze2oANLQBArotZiIAACdigzUoKzdyT6eYlISwgoR7hHSHjZyJhpeXn5CkhJ2vAFZQOCBAAAAAEAIAnQEqBgAIAAJAOCWoAnS6AALJMJ1XgAD+94VK/29ID/H/P3yU+tUV4i9m2MBBlrDmmQ8FeAP8jfHuRPQAAA==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/kmnc.webp
/* harmony default export */ const kmnc = ({"src":"/_next/static/media/kmnc.03fab3eb.webp","height":640,"width":477,"blurDataURL":"data:image/webp;base64,UklGRoYAAABXRUJQVlA4WAoAAAAQAAAABQAABwAAQUxQSDEAAAAAAABpagAAADD4+DQAAs3/zM0DR589RfpKdhSiZCJ8TQUqamRUJQsGCzgGZKCOmqM8AFZQOCAuAAAA0AEAnQEqBgAIAAJAOCWgAnS6AAKzQAAA7oqbvhYN1i8rH1Od/89M/rb+P/GQAA==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/nayakapratama.webp
/* harmony default export */ const nayakapratama = ({"src":"/_next/static/media/nayakapratama.be43e25f.webp","height":650,"width":1920,"blurDataURL":"data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADwAQCdASoIAAMAAkA4JYwCdEcAAeh52mIA/vwanv2YX/XmqyACEmvWz8s2Mu0awXe/ta/DaAA=","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/adlight.png
/* harmony default export */ const adlight = ({"src":"/_next/static/media/adlight.86c756d2.png","height":122,"width":383,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAHlBMVEXh7uD4+uza56fw9un8/fbh7cilyofV6sat0LDX5aGu9VidAAAACXBIWXMAAAsSAAALEgHS3X78AAAAIElEQVR4nGNgZ2ZkZGFkZGZgY+Vk4uRkYmXgYGEAAWYABOYAVPbIdeYAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/banksumut.png
/* harmony default export */ const banksumut = ({"src":"/_next/static/media/banksumut.09093ca3.png","height":524,"width":1600,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAG1BMVEUeGU84JUofGk9MaXGLTjjufyMZF1D0gSOzYTBOhw3VAAAACXRSTlMtJTUAOURGKkSZnbXcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAH0lEQVR4nGNgZ2IGAwYOFkYGBiYGRgZWVhY2BjYmRgAEFwBJAm4G4QAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/praisindo.png
/* harmony default export */ const praisindo = ({"src":"/_next/static/media/praisindo.783452af.png","height":3991,"width":3922,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEVMaXEAq+8vvvM6wfMCr/AArO8HsfBBw/QArfAAleuI2fgAr/Ck4vmI2fgEr/C66ft31PcGE9bMAAAADnRSTlMAM258hHU7+g4Yj2x1gEnuskAAAAAJcEhZcwAALEsAACxLAaU9lqkAAAA2SURBVHicRctJAsAgCATBVkEgy5j/vzY3rXvB1szHaIBLWg9wR8TXgb5CcmBer9kEsiorT/4BJ9sBJS5wIAYAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/mitraberlianunggas.png
/* harmony default export */ const mitraberlianunggas = ({"src":"/_next/static/media/mitraberlianunggas.d01f731b.png","height":596,"width":672,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAOVBMVEV2qNfJwaHoyX6yqYlqo91zp9p2qNdMaXGPsMZyp9rUu4r203zfyZP71HDOu5FsotvQwpbx0ZR3l7SU2Bm1AAAAE3RSTlMmRnRkFmUyAAZK+n0eQuF2kApV/5vi+wAAAAlwSFlzAAALEgAACxIB0t1+/AAAADdJREFUeJwdyckRACEMBLEBbNqGvfMPlmL1lYizzvkieMY1CiL9/tqB6Jmtsqu7F1CEZVqETD9bOOgBgi8CGyoAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":7});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/fortisgroup.png
/* harmony default export */ const fortisgroup = ({"src":"/_next/static/media/fortisgroup.0cf91907.png","height":168,"width":261,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAIVBMVEX+/v7Lysqpp6jY2NidnJzy8vD29vWHh4bg3964t7Z+e3115lR3AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAKUlEQVR4nCXGQRIAIAjDwJQiqP9/sMOYywYgUkyr7/kTmWOh2BRItuQHB7UAWo5T5kEAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/fira.png
/* harmony default export */ const fira = ({"src":"/_next/static/media/fira.13ed5f1e.png","height":167,"width":317,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAANlBMVEU0MzVbPDVGNzSUk5UxMjRJNzQAAAAwLi9xZ2Y8NTUqMDSbTDU3NDRUOzVZWFmZmZqVlZecnJ3AE49dAAAAEnRSTlM2SXWLIhoBRA5kWHOtkUAxWLJaYfpSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKUlEQVR4nAXBhwEAIAgDsLLBhf7/rAnyniJLg7zivSZDOmIUAemAhvoHEhAA3wCwOf8AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/tirtajabar.png
/* harmony default export */ const tirtajabar = ({"src":"/_next/static/media/tirtajabar.3175e3d2.png","height":150,"width":336,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAJ1BMVEX////e6fXo7/fq8Pf1+PvF2OvM3O7Yv4Xy9fi/0+j22Z67s5DByMoKKMQGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHklEQVR4nGNggAFuLkZORjZWZgZ2Hg5GZiYmFrgMAAaOAFYw30T6AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/kaltimex.png
/* harmony default export */ const kaltimex = ({"src":"/_next/static/media/kaltimex.9620d747.png","height":206,"width":149,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAASFBMVEWIhHfR2dNtBQWkrKHjy8uLSUavuq+qaGh8cWV3Zlqyd3imsqaeVFW9xb19d2rDysPawsHFzMWeX168h4iEj4BkEg1dEgubTEzyqiBrAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAN0lEQVR4nAXBiQHAIAgAsUNRRLT27/6bNqG6ewtI1lODU3drUFS/jfst5QGJnENY85hVuIbZ6D8q2QGkkBPytgAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/HLI.png
/* harmony default export */ const HLI = ({"src":"/_next/static/media/HLI.e91cff68.png","height":96,"width":162,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAP1BMVEX9/fzN5snL2+LWl6fr7/LSiJrUrKn3+PfK7NLc5OnR2N7s++uon3fAvqm75rXq4tvBdnjswNG+pJ+elXun47n+DPqHAAAACXBIWXMAAA7FAAAOxQFHbOz/AAAAMElEQVR4nAXBBwLAIAwDsYMG7HQAHf9/ayWwXVzE9/bV5znwc7e2XQfKmrkHECEJfh5xATVd6to5AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/jasamedivest.png
/* harmony default export */ const jasamedivest = ({"src":"/_next/static/media/jasamedivest.4b50a436.png","height":280,"width":274,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEU6TkxMaXElYl8camYicWw6PDo6OjlZdaGzAAAAB3RSTlMMAB9INTQoguuM2wAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAC1JREFUeJwtiQkKADAMwrzq/5881i2gSAQ/uNki5eAOWNEax8ZeWaO2M1MQjwMOCQB0eQQGIgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/lxinternational.png
/* harmony default export */ const lxinternational = ({"src":"/_next/static/media/lxinternational.4f22c95b.png","height":89,"width":647,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAADFBMVEXf3Nvj4uHaqafcycdbabUKAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAADklEQVR4nGNgYmZkAAEAADQABw9BNSwAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":1});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/posko.png
/* harmony default export */ const posko = ({"src":"/_next/static/media/posko.2079fc3d.png","height":93,"width":344,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAD1BMVEUAV4kAV4kAV4kAV4kAV4lYMwzAAAAABXRSTlMyZlp/O39AYvMAAAAJcEhZcwAAIdUAACHVAQSctJ0AAAAZSURBVHicBcEBAQAAAIIgrf5vDtC0MQgbcAEFABluCXI+AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/hyundai.png
/* harmony default export */ const hyundai = ({"src":"/_next/static/media/hyundai.8b9132a0.png","height":78,"width":308,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAElBMVEUbVI4aVo0YVIxDrE4Tp1NxtEf+geDPAAAABnRSTlM6SFdTkid9mcrTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAGklEQVR4nGNgZWZgYGBkYmRgZmFgYGRkYgAAAQIAGGWJLyEAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/bci.png
/* harmony default export */ const bci = ({"src":"/_next/static/media/bci.f88f36f2.png","height":327,"width":626,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAIVBMVEUbZKsTXrISX7EWYa8TX7EYY64haKf//QITX7EXYq5CfZDSDxN0AAAAC3RSTlMqGoKZaj5fGkpDAmHNCPUAAAAJcEhZcwAAFxEAABcRAcom8z8AAAAlSURBVHicFcGHDQAwDAMgj+z/D64K0LHxKdSlStiOiSK4k8jlAwgLAH3Q2qAXAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/containers/Home/Clients/index.tsx

















//import menn from './menn.webp'














































const Clients = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ColumnContainer/* default */.Z, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Clients_styled_Title, {
                    children: "Our Clients"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Con, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(styled_Items, {
                    children: [
                        1,
                        2,
                        3,
                        4
                    ].map((v)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Row, {
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
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 380 * 0.45,
                                    height: 148 * 0.45,
                                    src: gtaconstruction,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 1500 * 0.07,
                                    height: 1500 * 0.07,
                                    src: jbl,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 799 * 0.4,
                                    height: 186 * 0.4,
                                    src: briinvestasi,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 300 * 0.6,
                                    height: 151 * 0.6,
                                    src: sepedabersamaindonesia,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 1280 * 0.2,
                                    height: 349 * 0.2,
                                    src: hanwha,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 233 * 0.9,
                                    height: 134 * 0.9,
                                    src: jabartel,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 1600 / 5.4,
                                    height: 524 / 5.4,
                                    src: banksumut,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 261 / 1.7,
                                    height: 168 / 1.7,
                                    src: fortisgroup,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 336 / 1.2,
                                    height: 150 / 1.2,
                                    src: tirtajabar,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 162 / 1.0,
                                    height: 96 / 1.0,
                                    src: HLI,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 647 / 1.4,
                                    height: 89 / 1.4,
                                    src: lxinternational,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 308 / 1.2,
                                    height: 78 / 1.2,
                                    src: hyundai,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 1090 / 4,
                                    height: 333 / 4,
                                    src: muamalat,
                                    alt: "",
                                    quality: 100
                                })
                            ]
                        }, v))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Con, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(styled_Items, {
                    className: "last",
                    children: [
                        1,
                        2,
                        3,
                        4
                    ].map((v)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Row, {
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
                                    width: 213 / 2.3,
                                    height: 271 / 2.3,
                                    src: tamansafarisolo,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 600 / 5,
                                    height: 419 / 5,
                                    src: united_bike,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 280 / 2.6,
                                    height: 242 / 2.6,
                                    src: bsi,
                                    alt: "",
                                    quality: 100,
                                    placeholder: "empty"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 785 / 10,
                                    height: 1113 / 10,
                                    src: taman_safari_indonesia,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 477 / 5.5,
                                    height: 640 / 5.5,
                                    src: kmnc,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 1920 / 8,
                                    height: 650 / 8,
                                    src: nayakapratama,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 383 / 1.4,
                                    height: 122 / 1.4,
                                    src: adlight,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 3991 / 23.4,
                                    height: 3992 / 23.4,
                                    src: praisindo,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 596 / 4,
                                    height: 572 / 4,
                                    src: mitraberlianunggas,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 317 / 2.0,
                                    height: 167 / 2.0,
                                    src: fira,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 146 / 1.5,
                                    height: 206 / 1.5,
                                    src: kaltimex,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 274 / 1.7,
                                    height: 280 / 1.7,
                                    src: jasamedivest,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 344 / 1.7,
                                    height: 93 / 1.7,
                                    src: posko,
                                    alt: "",
                                    quality: 100
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    width: 626 / 3.8,
                                    height: 327 / 3.8,
                                    src: bci,
                                    alt: "",
                                    quality: 100
                                })
                            ]
                        }, v))
                })
            })
        ]
    });
};
/* harmony default export */ const Home_Clients = (Clients);

;// CONCATENATED MODULE: ./src/containers/Home/Pillars/Item/styled.ts



const styled_Root = /*#__PURE__*/ styled_default()(Card/* default */.ZP, {
    target: "e17li01s0"
})("width:180px;display:flex;flex-direction:column;align-items:center;margin-left:5px;margin-right:5px;margin-top:20px;");
const Img = /*#__PURE__*/ styled_default()("div", {
    target: "e17li01s1"
})("background-color:", GlobalStyle/* color.primary.dark */.$_.primary.dark, ";border-radius:50%;width:100px;height:100px;display:flex;align-items:center;justify-content:center;margin-top:28px;");
const Label = /*#__PURE__*/ styled_default()("div", {
    target: "e17li01s2"
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
    target: "e1lx3cwf0"
})("display:flex;flex-wrap:wrap;justify-content:space-around;margin-bottom:16px;@media (min-width:", GlobalStyle/* breakpoints.sm */.AV.sm, "){min-width:392px;max-width:392px;margin:0 auto 30px auto;}@media (min-width:", GlobalStyle/* breakpoints.lg */.AV.lg, "){min-width:816px;max-width:816px;margin:0 auto 30px auto;}");

;// CONCATENATED MODULE: ./src/containers/Home/Pillars/funding.svg
/* harmony default export */ const funding = ({"src":"/_next/static/media/funding.c29892dd.svg","height":58,"width":58,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/containers/Home/Pillars/capacity-building.svg
/* harmony default export */ const capacity_building = ({"src":"/_next/static/media/capacity-building.d8cbc9c9.svg","height":61,"width":61,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./src/components/TitleDescription/index.tsx
var TitleDescription = __webpack_require__(4267);
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
    target: "ew0igz70"
})("text-align:center;margin-top:50px;margin-bottom:4px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-top:90px;margin-bottom:32px;}");
const Project_styled_Items = /*#__PURE__*/ styled_default()(Project/* ProjectsComponent */.vP, {
    target: "ew0igz71"
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
    target: "e1s7u29a0"
})("max-width:calc(100% - 24px);align-self:center;@media (min-width:1024px){max-width:920px;}");
const Arrow = /*#__PURE__*/ styled_default()("div", {
    target: "e1s7u29a1"
})("display:flex;align-items:center;justify-content:center;background-color:white;& svg path{fill:", GlobalStyle/* color.primary.normal */.$_.primary.normal, ";}border-radius:50%;width:36px;height:36px;&:before{display:none;}&.slick-prev{transform:translate(8px,-50%);z-index:2;@media (min-width:1100px){transform:translate(-36px,-50%);}}&.slick-next{transform:translate(-8px,-50%);@media (min-width:1100px){transform:translate(36px,-50%);}}");

;// CONCATENATED MODULE: ./src/containers/Home/Sectors/investment.png
/* harmony default export */ const investment = ({"src":"/_next/static/media/investment.c23b9754.png","height":1278,"width":939,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAWlBMVEU/SUivWjJtbms0OjiDZlTvuoGtd07ew6FzTDv86ME9QEEmHx46HzNlamIRDhImNDBWTlBKP0o0DiCzgmBaQVRgVmZANUc7NzgTKyY0Rke8noJZLiIfDw6VblKcP4FYAAAACnRSTlP+/vn//vn5/f78Q/l49AAAAAlwSFlzAAALEwAACxMBAJqcGAAAADlJREFUeJwFwQcCgCAMALFT1ELLdM//f9ME59y87ihH3CJKoWVSOq+qLHKbVbzvhpKx95HwQS9hnH5BWgJJt5N96AAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/health.png
/* harmony default export */ const health = ({"src":"/_next/static/media/health.d745bb13.png","height":2383,"width":1746,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAV1BMVEVDRkaVnqUfHRphXFudoahWWVuDiYtMT1JiaGtyW1BuU0VpbXSqrrazuMB5a2iRkZVNRUG7v8fHy9I5ODZzeHxeYGFWPzOOhIKJkJUyLSpmXlyKlJiBdnFwcAR1AAAAEXRSTlP89f7+/vr1+/r+/v7+/v7++iN6h14AAAAJcEhZcwAACxMAAAsTAQCanBgAAAA6SURBVHicBcGHEYAwDACxD6TScnYqZf85kQhlKUC4eyLg+ra2iB0tVs8he52GU+18DSr5ehyiI33+Bz6vAn3jx8mKAAAAAElFTkSuQmCC","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/environmental.png
/* harmony default export */ const environmental = ({"src":"/_next/static/media/environmental.f9a6332d.png","height":2850,"width":2079,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAY1BMVEVsaFlkSSzSn5ZidHmmkZMAGgSXi5DLnpx8blHFl4oMLhx6ZErds7aHfm6/m51IW0hCcIO5kIcbNBfHp6W3n4d0e1eFhmC/i3GGnKeVlGyplqBZX1vkv6PZsZU1UTXJi3E9Ti3Ghm+xAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOklEQVR4nAXBhQHAIBAAsaPIo6Xutv+UTXhiUrrj+tKrNHduVr9R8rIHKDKHHkwrYg7qOLgzMnmLsz9KWwJxpwuQDgAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/information.png
/* harmony default export */ const information = ({"src":"/_next/static/media/information.87175948.png","height":2741,"width":2008,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAUVBMVEWVmJnLtaWugW6ynooQGBKan55GR0iBg4ZRU1Q1ODZ+ZVRCQ0VvdXhjWlVZOx1dX2LMz9ElLye+kHWKgX2he2i5rJ6Jdnd9dW6ZjYB7bmSklYYwAS5CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOElEQVR4nAXBBwKAIAwAsQMKbXGg4P7/Q00AVBVyBpibWTHW4iLKM+3iG7cvIwa+N/brIKRaz/QDJkoBuoWjpkwAAAAASUVORK5CYII=","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/infrastructure.png
/* harmony default export */ const infrastructure = ({"src":"/_next/static/media/infrastructure.2ae3f28b.png","height":1321,"width":968,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAQlBMVEUgJCCNq8QjMDpQUkorLSN/pMhPSzstRV0oO04qQFeDjJEdKC+huMhyd3KXoaSSprKQr8qUtdGErNJmZFpsfIQ6OC2x2juiAAAACnRSTlP+/////v//+/v731jSGAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADZJREFUeJwVwQkWgCAIQMEPGCpott7/qr1m2H4XIscpD2Os6S/79NsDNwsLoFBAVTOTWntv7QMs1wF5xx3zpAAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/ev.png
/* harmony default export */ const ev = ({"src":"/_next/static/media/ev.3f1b7aad.png","height":2592,"width":1899,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAS1BMVEUMHyP6//+uw8w8VV2JoqwRKS5QZWpacXnl9vTq+vguRk4ZNT9ngIhYaWrz9/ZGYmxvh4ySmJ+wr7WZn5Xg6evIx7HO3dyeqa2Jk4v+qnxRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAN0lEQVR4nAXBBwLAIAgAsVNRwNnd/v+lTYjBzY39MH8mRaO8gbRErklbXb8bWhrjJOeqRQFq334zMgHIJRE/XQAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/property.png
/* harmony default export */ const property = ({"src":"/_next/static/media/property.72f3b8d1.png","height":1280,"width":938,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAWlBMVEUMLBmnsc63nXcvNEhqdJM7SyQ0OU4SPBxcZHpMU2dCR0t0Z2AZMx5gV1QrRiKliWeYdU/J1fM9Pyq6p5KjpbXAmGM+S2eklIOLjp+ggmVAUFxMOjMzNTdmRCx3KFEUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOUlEQVR4nAXBBQLAIAwAsUNLkTH3/f+bS9idi1HJd0reo6+ayZBay+fKU45r6XzFbnak1iGEGUBEfj3pAicjHF3hAAAAAElFTkSuQmCC","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/waste.png
/* harmony default export */ const waste = ({"src":"/_next/static/media/waste.f7befb6a.png","height":1301,"width":953,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAYFBMVEXPt5nQxQS7s5u7qqW5sXnWoDBON5qvYje6RTVCeGAyPxxJUDVBQjRBVCg5SCVBTjQoKyFSXUCffBQpOBmajBtlUUdxaVKcYRyOPCBfWTOhRj21Jh1TP1vAqCdBdFI+KaxXQTVtAAAACnRSTlP9/v39/f7+/v7+/jCVVgAAAAlwSFlzAAALEwAACxMBAJqcGAAAADlJREFUeJwFwQUCgDAMALHDoe0U9///cgnOiUjE+zBLRDWkbeVUUzP2Iz15YRinvqu47u9/My11AwVNOQKl63gebAAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/renewable_energy.png
/* harmony default export */ const renewable_energy = ({"src":"/_next/static/media/renewable_energy.d07cbf16.png","height":1280,"width":938,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAOVBMVEW40OM4Nj3c5enn7N2NbHMXGBvf3tHV3+IiKTgoLj8oJSfdvKE+PkbpyqzZ2c3MsJd8YWbqwqSbdXgfGP8qAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nCXFSRIAEBAEsGZ2O/9/rCpyCfDlbGYG1aFE6LvOXnGYFzPCW4p4uaNIKiIXIB8BS+tkZAYAAAAASUVORK5CYII=","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/biotechnology.png
/* harmony default export */ const biotechnology = ({"src":"/_next/static/media/biotechnology.eca77576.png","height":1921,"width":1408,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAYFBMVEVWTUmUc3ZvX1StvbtVUldMY0KYoJmlm5GwpZvBs5mAgoW51N5+fHN2WV99VEVuZWKMc2ylnZ26uLeMdoF8a2N9RTi+tKuOfnI2MS/Q0tmAk4J7XnmIgYKZhHpoJyRggGXvgFLFAAAADHRSTlP+/v7+/v7+/v7+/v7WzDArAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAO0lEQVR4nAXBBwKAIAwAsXOC2rJxj///0gQ7y9gt3O6t5aN3jWsH9Ir1OQkhazqYbNaYWMsum8eAGP8DT1QCzKHqDRcAAAAASUVORK5CYII=","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/Home/Sectors/Item/index.tsx




const Inner = /*#__PURE__*/ styled_default()((link_default()), {
    target: "ejun2kt0"
})("margin-left:14px;margin-right:14px;width:calc(100% - 28px);border-radius:8px;overflow:hidden;display:block;&:hover{& > * > img{transform:scale(1.1);}}");
const Item_Aspect = /*#__PURE__*/ styled_default()("div", {
    target: "ejun2kt1"
})("position:relative;width:100%;padding-top:", 275 / 202 * 100, "%;& > img{object-fit:cover;transition:transform 0.3s ease-in-out;}");
const Item_Label = /*#__PURE__*/ styled_default()("div", {
    target: "ejun2kt2"
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
    // 1: restructuring,
    1: investment,
    // 2: financial,
    2: health,
    3: biotechnology,
    4: renewable_energy,
    5: waste,
    6: property,
    7: ev,
    8: infrastructure,
    9: information,
    10: environmental
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
    target: "e14al9ir0"
})("text-align:center;margin-top:50px;margin-bottom:32px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-top:90px;margin-bottom:60px;}");
const Services_styled_Items = /*#__PURE__*/ styled_default()("div", {
    target: "e14al9ir1"
})("display:flex;flex-wrap:wrap;overflow:hidden;margin-left:-8px;margin-right:-8px;margin-bottom:8px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-bottom:22px;}");
const Col = /*#__PURE__*/ styled_default()("div", {
    target: "e14al9ir2"
})("display:flex;flex-direction:column;flex:1;margin-left:8px;margin-right:8px;");
const styled_Item = /*#__PURE__*/ styled_default()((link_default()), {
    target: "e14al9ir3"
})("display:block;position:relative;flex:1;margin-top:8px;margin-bottom:8px;border-radius:8px;overflow:hidden;min-width:300px;& > .ratio{min-height:100%;& > img{transition:transform 1s ease-in-out;}}&:hover{& > .ratio > img{transform:scale(1.1);}}");
const styled_Label = /*#__PURE__*/ styled_default()(Text/* default */.Z, {
    target: "e14al9ir4"
})("color:white;/* max-width:260px;*/\n  font-weight:500;text-align:left;position:absolute;left:18px;top:18px;right:18px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){left:32px;top:32px;right:32px;}");

;// CONCATENATED MODULE: ./src/containers/Home/Services/business.png
/* harmony default export */ const business = ({"src":"/_next/static/media/business.8c500a01.png","height":1280,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAOVBMVEW1srN4dnWXl5fR1tfL0NGopKHBwcGdnZ4vLS6FhIl+bmuwrqyGeXM6LiujjYcAAABgYGQeHiDFyMpUT9pkAAAACXRSTlP+/////////v4HKoILAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nAXBhQEAIAwDsE5hgv3/LAmcTbVM4blFuhUjArQmI4LyrXNRBocRfxgPAROfN8SmAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/containers/Home/Services/capacity.png
/* harmony default export */ const capacity = ({"src":"/_next/static/media/capacity.ecfaee05.png","height":1000,"width":1500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAUVBMVEVVXkyPhX5tWkIlPiwfNiYvNxdEQThRRD0YJR1BWywSGRN0cVI3OjVTT1FxojNkZWFcgSBqh0wjHRtCZCpMOh+frrliaHEmKhCFblWRj2a+v8JLB7hlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nAXBhQEAIAwDsALD3eX/Q0lgjBMkh4O0/frDN0qqzLOnQBaK6wkE5Nj0Eh8lWgGiWWnJAAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/containers/Home/Services/investment.png
/* harmony default export */ const Services_investment = ({"src":"/_next/static/media/investment.89348a66.png","height":136,"width":543,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAHlBMVEVNSUirkmRgXFBBOzOdhl21m2kuLzQ1MzFHQjzly4kFzYHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGklEQVR4nGNgYGBgYmRl4WBgYGZj4mRkZgcAAWoANO33kEkAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});
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

;// CONCATENATED MODULE: ./src/containers/Home/index.tsx












const Background = /*#__PURE__*/ styled_default()("div", {
    target: "e7xstqv0"
})("background-color:#d9d9d9;padding-bottom:40px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){padding-bottom:120px;}");
const Home_C = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled(Container, {
    target: "e7xstqv1"
})("display:flex;align-items:stretch;flex-wrap:wrap;")));
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
            /*#__PURE__*/ jsx_runtime_.jsx(Home_Clients, {})
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
/* harmony import */ var _containers_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9413);
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

/***/ 8982:
/***/ ((module) => {

module.exports = require("cookies-next");

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

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [210,636,172,252,51,135,941], () => (__webpack_exec__(85)));
module.exports = __webpack_exports__;

})();