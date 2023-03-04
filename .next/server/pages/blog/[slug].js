"use strict";
(() => {
var exports = {};
exports.id = 492;
exports.ids = [492];
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

/***/ 3223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Post)
});

// UNUSED EXPORTS: Index

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
;// CONCATENATED MODULE: external "date-fns/format"
const format_namespaceObject = require("date-fns/format");
var format_default = /*#__PURE__*/__webpack_require__.n(format_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/GlobalStyle.ts
var GlobalStyle = __webpack_require__(8857);
// EXTERNAL MODULE: ./src/components/SectionTitle/index.tsx
var SectionTitle = __webpack_require__(5242);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: external "react-bootstrap/Container"
var Container_ = __webpack_require__(4678);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
;// CONCATENATED MODULE: ./src/containers/Post/styled.ts




const Container = /*#__PURE__*/ styled_default()((Container_default()), {
    target: "e1u7fl100"
})("padding-bottom:68px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){padding-bottom:120px;}");
const Title = /*#__PURE__*/ styled_default()(SectionTitle/* default */.Z, {
    target: "e1u7fl101"
})("text-align:center;margin-top:50px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-top:90px;}");
const Content = /*#__PURE__*/ styled_default()("div", {
    target: "e1u7fl102"
})();
const Meta = /*#__PURE__*/ styled_default()("div", {
    target: "e1u7fl103"
})("color:gray;margin-bottom:12px;");
const Chips = /*#__PURE__*/ styled_default()("div", {
    target: "e1u7fl104"
})("display:flex;flex-wrap:wrap;margin-left:-4px;margin-right:-4px;& > div{margin-left:4px;margin-right:4px;margin-bottom:8px;background-color:#fff3cd;color:#664d03;border-radius:4px;padding:4px 16px;}");

;// CONCATENATED MODULE: ./src/containers/Post/index.tsx




const Index = ({ post  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                dangerouslySetInnerHTML: {
                    __html: post.title.rendered
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Meta, {
                children: `${post._embedded.author[0].name} | ${format_default()(new Date(post.modified), "d MMMM yyyy")}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Content, {
                dangerouslySetInnerHTML: {
                    __html: post.content.rendered
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Chips, {
                children: post._embedded["wp:term"].map(([it])=>it && it.id ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: it.name
                    }, it.id) : undefined)
            })
        ]
    });
};
/* harmony default export */ const Post = (Index);


/***/ }),

/***/ 3328:
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
/* harmony import */ var _containers_Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3223);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_4__]);
axios__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Page = ({ post  })=>{
    const meta = post.yoast_head_json;
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: meta.title
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: meta.og_description
                    }),
                    Object.keys(meta).map((k)=>{
                        if (k.startsWith("og_")) {
                            const it = meta[k];
                            if (k.endsWith("_image")) {
                                const [i] = it;
                                return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                            name: "og:image:url",
                                            content: i.url
                                        }),
                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                            name: "og:image:type",
                                            content: i.type
                                        }),
                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                            name: "og:image:width",
                                            content: `${i.width}`
                                        }),
                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                            name: "og:image:height",
                                            content: `${i.height}`
                                        }),
                                        i.alt && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                            name: "og:image:alt",
                                            content: i.alt
                                        })
                                    ]
                                }, k);
                            }
                            return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                name: k.replace("_", ":"),
                                content: it
                            }, k);
                        }
                        return undefined;
                    })
                ]
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_Post__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                post: post
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    });
};
const getServerSideProps = async ({ req , query  })=>{
    const { slug  } = query;
    const posts = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(`${process.env.BLOG_URL}wp-json/wp/v2/posts`, {
        params: {
            slug,
            _embed: 1
        },
        headers: {
            accept: "application/json"
        }
    });
    if (Array.isArray(posts.data) && posts.data.length == 0) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            post: posts.data[0]
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,505,121,302,94], () => (__webpack_exec__(3328)));
module.exports = __webpack_exports__;

})();