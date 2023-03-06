"use strict";
(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 1710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Blog)
});

// UNUSED EXPORTS: Index

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
// EXTERNAL MODULE: ./src/components/Button/index.ts
var Button = __webpack_require__(6753);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-bootstrap/Card"
const Card_namespaceObject = require("react-bootstrap/Card");
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Col"
const Col_namespaceObject = require("react-bootstrap/Col");
var Col_default = /*#__PURE__*/__webpack_require__.n(Col_namespaceObject);
// EXTERNAL MODULE: external "react-bootstrap/Form"
var Form_ = __webpack_require__(5226);
var Form_default = /*#__PURE__*/__webpack_require__.n(Form_);
;// CONCATENATED MODULE: external "react-bootstrap/InputGroup"
const InputGroup_namespaceObject = require("react-bootstrap/InputGroup");
var InputGroup_default = /*#__PURE__*/__webpack_require__.n(InputGroup_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Row"
const Row_namespaceObject = require("react-bootstrap/Row");
var Row_default = /*#__PURE__*/__webpack_require__.n(Row_namespaceObject);
// EXTERNAL MODULE: external "react-bootstrap/Button"
var Button_ = __webpack_require__(1937);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: ./src/components/GlobalStyle.ts
var GlobalStyle = __webpack_require__(8857);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: external "react-bootstrap/Container"
var Container_ = __webpack_require__(4678);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
;// CONCATENATED MODULE: ./src/containers/Blog/styled.ts



const Container = /*#__PURE__*/ styled_default()((Container_default()), {
    target: "e3o9it10"
})("padding-bottom:68px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){padding-bottom:120px;}");
const Categories = /*#__PURE__*/ styled_default()("div", {
    target: "e3o9it11"
})("display:flex;flex-wrap:wrap;margin-top:68px;margin-bottom:32px;margin-left:-12px;margin-right:-12px;& > div{margin-left:12px;margin-right:12px;}@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-top:120px;margin-bottom:68px;}");
const Chips = /*#__PURE__*/ styled_default()("div", {
    target: "e3o9it12"
})("display:flex;flex-wrap:wrap;margin-left:-4px;margin-right:-4px;& > div{margin-left:4px;margin-right:4px;margin-bottom:8px;background-color:#fff3cd;color:#664d03;border-radius:4px;padding:4px 16px;}");

;// CONCATENATED MODULE: ./src/containers/Blog/index.tsx












const Index = ({ posts , categories  })=>{
    const router = (0,router_namespaceObject.useRouter)();
    const { c , q  } = (0,external_react_.useMemo)(()=>{
        let c = {};
        if (router.query.c) {
            if (Array.isArray(router.query.c)) {
                c = router.query.c.reduce((a, it)=>{
                    a[it] = true;
                    return a;
                }, c);
            } else {
                c = {
                    [router.query.c]: true
                };
            }
        }
        let q = "";
        if (router.query.q) {
            q = router.query.q;
        }
        return {
            c,
            q
        };
    }, [
        router.query
    ]);
    const [checked, setChecked] = (0,external_react_.useState)(c);
    const [search, setSearch] = (0,external_react_.useState)(q);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Categories, {
                children: [
                    categories.map((it)=>/*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Check, {
                            type: "checkbox",
                            label: it.name,
                            onChange: ()=>{
                                const cc = checked[it.id] ? {
                                    ...checked,
                                    [it.id]: undefined
                                } : {
                                    ...checked,
                                    [it.id]: true
                                };
                                router.push({
                                    pathname: `/blog`,
                                    query: {
                                        c: Object.keys(cc).filter((i)=>cc[i]),
                                        q: search.trim()
                                    }
                                }, null, {
                                    shallow: false
                                });
                                setChecked(cc);
                            },
                            checked: checked[it.id]
                        }, it.id)),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((InputGroup_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                                placeholder: "Search article ...",
                                "aria-label": "Search",
                                value: search,
                                onChange: (e)=>setSearch(e.target.value)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                onClick: ()=>{
                                    router.push({
                                        pathname: `/blog`,
                                        query: {
                                            c: Object.keys(checked).filter((i)=>checked[i]),
                                            q: search.trim()
                                        }
                                    }, null, {
                                        shallow: false
                                    });
                                },
                                children: "Search"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Row_default()), {
                children: posts.map((it)=>/*#__PURE__*/ jsx_runtime_.jsx((Col_default()), {
                        xs: 12,
                        sm: 12,
                        md: 12,
                        lg: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                            style: {
                                width: "100%",
                                marginTop: "1rem"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Card_default()).Img, {
                                    variant: "top",
                                    src: it._embedded["wp:featuredmedia"] ? it._embedded["wp:featuredmedia"][0]?.source_url : "/images/contemporary-architecture-office-building-cityscape-personal-perspective-concept_53876-42940.jpg"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()).Body, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Card_default()).Title, {
                                            dangerouslySetInnerHTML: {
                                                __html: it.title.rendered
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Card_default()).Text, {
                                            dangerouslySetInnerHTML: {
                                                __html: it.excerpt.rendered
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Chips, {
                                            children: it._embedded["wp:term"].map(([it])=>it && it.id ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: it.name
                                                }, it.id) : undefined)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: `/blog/${it.slug}`,
                                            passHref: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                children: "See More"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }, it.id))
            })
        ]
    });
};
/* harmony default export */ const Blog = (Index);


/***/ }),

/***/ 9469:
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
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1387);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(841);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9648);
/* harmony import */ var _containers_Blog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1710);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_4__]);
axios__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Page = (props)=>{
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Blog Inpartner"
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Inpartner involves the planning, organizing, and overseeing of resources to achieve a specific goal or objective within a defined timeline and budget"
                    })
                ]
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_Blog__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                ...props
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    });
};
const getServerSideProps = async ({ req , query  })=>{
    const posts = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(`${process.env.BLOG_URL}wp-json/wp/v2/posts`, {
        params: {
            _embed: 1,
            categories: Array.isArray(query.c) ? query.c.join(",") : query.c,
            search: query.q
        },
        headers: {
            accept: "application/json"
        }
    });
    const categories = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(`${process.env.BLOG_URL}wp-json/wp/v2/categories`, {
        params: {
            _embed: 1
        },
        headers: {
            accept: "application/json"
        }
    });
    return {
        props: {
            posts: posts.data,
            categories: categories.data
        }
    };
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

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

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
var __webpack_exports__ = __webpack_require__.X(0, [210,505,121,302,94], () => (__webpack_exec__(9469)));
module.exports = __webpack_exports__;

})();