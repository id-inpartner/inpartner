"use strict";
(() => {
var exports = {};
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Post)
});

// UNUSED EXPORTS: Index

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
// EXTERNAL MODULE: ./src/components/Button/index.ts
var Button = __webpack_require__(3900);
// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(4146);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/GlobalStyle.ts
var GlobalStyle = __webpack_require__(9920);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"src/fonts/index.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"sans"}
var index_tsx_import_Inter_arguments_subsets_latin_variableName_sans_ = __webpack_require__(3894);
var index_tsx_import_Inter_arguments_subsets_latin_variableName_sans_default = /*#__PURE__*/__webpack_require__.n(index_tsx_import_Inter_arguments_subsets_latin_variableName_sans_);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./src/containers/Post/styled.ts





const Container = /*#__PURE__*/ styled_default()(external_react_bootstrap_.Container, {
    target: "e1u7fl100"
})("display:flex;flex-wrap:wrap;padding-bottom:68px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){padding-bottom:0;}@media (min-width:", GlobalStyle/* breakpoints.xl */.AV.xl, "){flex-wrap:nowrap;}");
const Article = /*#__PURE__*/ styled_default()("div", {
    target: "e1u7fl101"
})("flex:1;max-width:100%;padding-bottom:0;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){padding-bottom:120px;}@media (min-width:", GlobalStyle/* breakpoints.xl */.AV.xl, "){max-width:875px;}");
const Divider = /*#__PURE__*/ styled_default()("div", {
    target: "e1u7fl102"
})("display:none;@media (min-width:", GlobalStyle/* breakpoints.xl */.AV.xl, "){display:block;margin-left:20px;margin-right:16px;min-width:1px;align-self:stretch;background-color:#b4b4b4;}");
const Sidebar = /*#__PURE__*/ styled_default()("div", {
    target: "e1u7fl103"
})("display:flex;flex-direction:column;min-width:320px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){min-width:384px;}@media (min-width:", GlobalStyle/* breakpoints.lg */.AV.lg, "){max-width:384px;min-width:384px;}& > .title{font-weight:bold;font-size:20px;text-align:center;width:100%;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){font-size:26px;}margin-top:50px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-top:90px;}}");
const Title = /*#__PURE__*/ styled_default()("h1", {
    target: "e1u7fl104"
})("font-weight:bold;font-family:", (index_tsx_import_Inter_arguments_subsets_latin_variableName_sans_default()).style.fontFamily, ";font-size:22px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){font-size:32px;}margin-top:50px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-top:90px;}");
const Content = /*#__PURE__*/ styled_default()("div", {
    target: "e1u7fl105"
})("font-size:20px;& table{border:1px solid black;margin-bottom:2rem;& > thead{& > tr{& > th{color:white;background-color:#80304c;border-bottom:1px solid black;border-left:1px solid white;border-right:1px solid white;padding:0.5em;&:first-child{border-left-color:black;}&:last-child{border-right-color:black;}}}}& > tbody{& > tr{& > td{border-left:1px solid black;border-right:1px solid black;padding:0.5em;}}}}& .has-text-align-center{text-align:center;}& .size-full{width:100%;}& .wp-block-image{& img{max-width:100%;height:auto;vertical-align:bottom;}}& p{margin-bottom:2rem;}& h2{margin-bottom:2rem;margin-top:3rem;font-weight:700;font-size:20px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){font-size:28px;}}");
const Meta = /*#__PURE__*/ styled_default()("div", {
    target: "e1u7fl106"
})("color:black;margin-bottom:12px;margin-top:12px;font-size:18px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){font-size:20px;margin-top:24px;}");
const Chips = /*#__PURE__*/ styled_default()("div", {
    target: "e1u7fl107"
})("display:flex;flex-wrap:wrap;margin-left:-4px;margin-right:-4px;& > div{margin-left:4px;margin-right:4px;margin-bottom:8px;background-color:#80304c;color:#664d03;color:#fff3cd;border-radius:4px;padding:4px 16px;}font-size:12px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){font-size:14px;}");
const Categories = /*#__PURE__*/ styled_default()("div", {
    target: "e1u7fl108"
})("display:flex;flex-wrap:wrap;margin:0 -4px;& > a{margin:4px;flex:1;& > button{background-color:white;color:black;border:none;font-weight:400;text-align:center;white-space:nowrap;width:100%;}}");
const Item = /*#__PURE__*/ styled_default()((link_default()), {
    target: "e1u7fl109"
})("display:flex;margin-top:32px;&:hover{& > .content{& > .title{text-decoration:underline;}}}& img{object-fit:cover;border-radius:12px;}& > .content{flex:1;margin-left:16px;& > .category{font-size:14px;}& > .title{font-weight:700;font-size:16px;}}");

;// CONCATENATED MODULE: ./src/containers/Post/index.tsx







const Index = ({ post , categories , related  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Article, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                        dangerouslySetInnerHTML: {
                            __html: post.title.rendered
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Meta, {
                        children: (0,external_date_fns_.format)(new Date(post.modified), "d MMMM yyyy")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Content, {
                        dangerouslySetInnerHTML: {
                            __html: post.content.rendered
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Chips, {
                        children: post._embedded["wp:term"].map((its)=>its.map((it)=>it && it.id ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: it.name
                                }, it.id) : undefined))
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Divider, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Sidebar, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "title",
                        children: "Discover More"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Categories, {
                        children: categories.map((it)=>it.slug !== "others" && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                passHref: true,
                                href: {
                                    pathname: "/blog"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    children: it.name
                                })
                            }, it.id))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "title",
                        children: "Related Articles"
                    }),
                    related.map((it)=>{
                        const m = it._embedded["wp:featuredmedia"].length ? it._embedded["wp:featuredmedia"][0] : {
                            alt_text: "",
                            source_url: "/images/default_post_img.png"
                        };
                        const [c] = it._embedded["wp:term"].find((i)=>i.find((ii)=>ii.taxonomy === "category"));
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Item, {
                            href: `/blog/${it.slug}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    width: 127,
                                    height: 96,
                                    quality: 100,
                                    alt: m.alt_text,
                                    src: m.source_url
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "category",
                                            children: c && c.name
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "title",
                                            dangerouslySetInnerHTML: {
                                                __html: it.title.rendered
                                            }
                                        })
                                    ]
                                })
                            ]
                        }, it.id);
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Post = (Index);


/***/ }),

/***/ 5777:
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
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9104);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9154);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9648);
/* harmony import */ var _containers_Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(333);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Navbar__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_4__]);
([_components_Navbar__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Page = ({ post , categories , related  })=>{
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
                post: post,
                categories: categories,
                related: related
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    });
};
const getServerSideProps = async ({ req , query  })=>{
    const { slug  } = query;
    const [posts, categories] = await Promise.all([
        axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(`${process.env.BLOG_URL}wp-json/wp/v2/posts`, {
            params: {
                slug,
                related: 3,
                _embed: 1
            },
            headers: {
                accept: "application/json"
            }
        }),
        axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(`${process.env.BLOG_URL}wp-json/wp/v2/categories`, {
            params: {
                _embed: 1,
                _fields: "id,name,slug"
            },
            headers: {
                accept: "application/json"
            }
        })
    ]);
    if (Array.isArray(posts.data) && posts.data.length == 0) {
        return {
            notFound: true
        };
    }
    const post = posts.data[0];
    const related = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(`${process.env.BLOG_URL}wp-json/yarpp/v1/related/${post.id}`, {
        params: {
            limit: 3,
            _fields: "id,title,slug,categories,_embedded,_links.wp:featuredmedia,_links.wp:term",
            _embed: 1
        },
        headers: {
            accept: "application/json"
        }
    });
    return {
        props: {
            post,
            categories: categories.data,
            related: related.data
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

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

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

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 1937:
/***/ ((module) => {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ 4678:
/***/ ((module) => {

module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ 4563:
/***/ ((module) => {

module.exports = import("@fortawesome/free-solid-svg-icons");;

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
var __webpack_exports__ = __webpack_require__.X(0, [210,636,172,524,51], () => (__webpack_exec__(5777)));
module.exports = __webpack_exports__;

})();