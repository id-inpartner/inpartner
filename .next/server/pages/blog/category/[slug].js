"use strict";
(() => {
var exports = {};
exports.id = 465;
exports.ids = [465];
exports.modules = {

/***/ 7736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Category)
});

// UNUSED EXPORTS: Index

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
// EXTERNAL MODULE: ./src/components/Button/index.ts
var Button = __webpack_require__(3900);
// EXTERNAL MODULE: external "date-fns/format"
var format_ = __webpack_require__(4384);
var format_default = /*#__PURE__*/__webpack_require__.n(format_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/GlobalStyle.ts
var GlobalStyle = __webpack_require__(9920);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: external "react-bootstrap/Container"
var Container_ = __webpack_require__(4678);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
;// CONCATENATED MODULE: ./src/containers/Category/styled.ts




const Container = /*#__PURE__*/ styled_default()((Container_default()), {
    target: "epge8fo0"
})("padding-bottom:68px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){padding-bottom:120px;}");
const Title = /*#__PURE__*/ styled_default()("div", {
    target: "epge8fo1"
})("font-weight:700;font-size:20px;min-width:100%;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){font-size:26px;}margin-bottom:16px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-bottom:32px;}margin-left:8px;margin-right:8px;");
const Banner = /*#__PURE__*/ styled_default()("div", {
    target: "epge8fo2"
})("display:flex;flex-wrap:wrap;margin-left:-8px;margin-right:-8px;margin-top:16px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-top:32px;}& > .search{min-width:calc(100% - 8px - 8px);display:flex;margin-bottom:16px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-bottom:32px;}margin-left:8px;margin-right:8px;& > .form-control{margin-right:12px;max-width:416px;}}& > .side{min-width:calc(100% - 8px - 8px);flex:8;display:flex;flex-wrap:wrap;margin-left:8px;margin-right:8px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-left:0px;margin-right:0px;}@media (min-width:", GlobalStyle/* breakpoints.xl */.AV.xl, "){margin-top:-16px;margin-left:8px;margin-right:8px;min-width:0;}& > a{margin-top:16px;min-width:100%;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){min-width:0;flex:1;margin-left:8px;margin-right:8px;}@media (min-width:", GlobalStyle/* breakpoints.xl */.AV.xl, "){min-width:100%;margin-left:0;margin-right:0;}}}& > .main{min-width:calc(100% - 8px - 8px);margin-left:8px;margin-right:8px;}@media (min-width:", GlobalStyle/* breakpoints.xl */.AV.xl, "){& > .main{flex:18;min-width:0;}}");
const PostRow = /*#__PURE__*/ styled_default()("div", {
    target: "epge8fo3"
})("display:flex;flex-wrap:wrap;margin-left:-16px;margin-right:-16px;align-items:stretch;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-left:-8px;margin-right:-8px;}@media (min-width:", GlobalStyle/* breakpoints.lg */.AV.lg, "){margin-left:-24px;margin-right:-24px;}& > div,& > a{margin-left:16px;margin-right:16px;min-width:calc(100% - 16px - 16px);flex:1;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-left:8px;margin-right:8px;min-width:calc((100% - (8px * 4)) / 2);}@media (min-width:", GlobalStyle/* breakpoints.lg */.AV.lg, "){margin-left:24px;margin-right:24px;min-width:calc((100% - (24px * 4)) / 2);}@media (min-width:", GlobalStyle/* breakpoints.xl */.AV.xl, "){min-width:calc((100% - (24px * 6)) / 3);}}& > a{margin-top:16px;}@media (min-width:", GlobalStyle/* breakpoints.lg */.AV.lg, "){margin-top:80px;}");
const Dummy = /*#__PURE__*/ styled_default()("div", {
    target: "epge8fo4"
})("height:0;");
const Item = /*#__PURE__*/ styled_default()((link_default()), {
    target: "epge8fo5"
})("position:relative;display:block;border-radius:12px;overflow:hidden;& > .aspect{position:relative;width:100%;padding-top:", 296 / 3.04, "%;& > img{object-fit:cover;}}& > .content{position:absolute;width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-end;bottom:0;left:0;right:0;background-color:rgba(0,0,0,0.3);color:white;padding:16px;& > .term{font-size:14px;font-weight:bold;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){font-size:20px;}}& > .title{font-size:16px;font-weight:bold;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){font-size:24px;}}& > .date{font-size:12px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){font-size:14px;}}}@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){&.main{& > .aspect{padding-top:", 608 / 9.28, "%;}& > .content{padding:32px;& > .term{font-size:24px;}& > .title{font-size:28px;}}}}");
const Categories = /*#__PURE__*/ styled_default()("div", {
    target: "epge8fo6"
})("display:flex;flex-wrap:wrap;margin:0 -8px;margin-top:32px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-top:64px;}& > a{margin:0 8px 8px 8px;& > button{background-color:white;color:black;border:none;font-weight:400;text-align:center;white-space:nowrap;width:100%;}}");

// EXTERNAL MODULE: ./src/locales/useTranslation.ts + 2 modules
var useTranslation = __webpack_require__(3064);
;// CONCATENATED MODULE: ./src/containers/Category/index.tsx









const getMedia = (post)=>{
    const media = post?._embedded?.["wp:featuredmedia"]?.[0];
    return {
        source_url: media?.source_url || "/images/default_post_img.png",
        alt_text: media?.alt_text || ""
    };
};
const getTerm = (post)=>{
    const terms = post?._embedded?.["wp:term"];
    if (Array.isArray(terms) && terms[0] && terms[0][0]) {
        return terms[0][0].name;
    }
    return "";
};
const Index = ({ category , posts , categories  })=>{
    const router = (0,router_.useRouter)();
    const { t  } = (0,useTranslation/* default */.Z)();
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
    const [loading, setLoading] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setLoading(false);
        const start = ()=>{
            setLoading(true);
        };
        const end = ()=>{
            setLoading(false);
        };
        router.events.on("routeChangeStart", start);
        router.events.on("routeChangeComplete", end);
        return ()=>{
            router.events.off("routeChangeStart", start);
            router.events.off("routeChangeComplete", end);
        };
    }, [
        router.events
    ]);
    const [first, second, third, others] = (0,external_react_.useMemo)(()=>{
        if (posts.length === 0) {
            return [
                null,
                null,
                null,
                []
            ];
        }
        if (posts.length === 1) {
            return [
                posts[0],
                null,
                null,
                []
            ];
        }
        if (posts.length === 2) {
            return [
                posts[0],
                posts[1],
                null,
                []
            ];
        }
        if (posts.length === 3) {
            return [
                posts[0],
                posts[1],
                posts[2],
                []
            ];
        }
        return [
            posts[0],
            posts[1],
            posts[2],
            posts.slice(3, posts.length)
        ];
    }, [
        posts
    ]);
    if (!first) {
        return /*#__PURE__*/ jsx_runtime_.jsx(Container, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Banner, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                        children: category.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            textAlign: "center",
                            width: "100%",
                            padding: "64px 16px",
                            color: "#666",
                            fontSize: "18px"
                        },
                        children: t.blogPage.noCategoryArticles
                    })
                ]
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Banner, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                        children: category.name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Item, {
                        href: `/blog/${first.slug}`,
                        className: "main",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "aspect",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    fill: true,
                                    quality: 100,
                                    src: getMedia(first).source_url,
                                    alt: getMedia(first).alt_text,
                                    sizes: "(min-width: 1200px) 760px, (min-width: 768px) 60vw, 100vw"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "content",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "term",
                                        children: getTerm(first)
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "title",
                                        dangerouslySetInnerHTML: {
                                            __html: first.title?.rendered || ""
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "dste",
                                        children: first.modified ? format_default()(new Date(first.modified), "d MMMM yyyy") : ""
                                    })
                                ]
                            })
                        ]
                    }),
                    second && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "side",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Item, {
                                href: `/blog/${second.slug}`,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "aspect",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            fill: true,
                                            quality: 100,
                                            src: getMedia(second).source_url,
                                            alt: getMedia(second).alt_text,
                                            sizes: "(min-width: 1200px) 380px, (min-width: 768px) 50vw, 100vw"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "content",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "term",
                                                children: getTerm(second)
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "title",
                                                dangerouslySetInnerHTML: {
                                                    __html: second.title?.rendered || ""
                                                }
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "dste",
                                                children: second.modified ? format_default()(new Date(second.modified), "d MMMM yyyy") : ""
                                            })
                                        ]
                                    })
                                ]
                            }),
                            third ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Item, {
                                href: `/blog/${third.slug}`,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "aspect",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            fill: true,
                                            quality: 100,
                                            src: getMedia(third).source_url,
                                            alt: getMedia(third).alt_text,
                                            sizes: "(min-width: 1200px) 380px, (min-width: 768px) 50vw, 100vw"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "content",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "term",
                                                children: getTerm(third)
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "title",
                                                dangerouslySetInnerHTML: {
                                                    __html: third.title?.rendered || ""
                                                }
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "dste",
                                                children: third.modified ? format_default()(new Date(third.modified), "d MMMM yyyy") : ""
                                            })
                                        ]
                                    })
                                ]
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(Dummy, {
                                "aria-hidden": true
                            })
                        ]
                    })
                ]
            }),
            !!others.length && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PostRow, {
                children: [
                    others.map((it)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Item, {
                            href: `/blog/${it.slug}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "aspect",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        fill: true,
                                        quality: 100,
                                        src: getMedia(it).source_url,
                                        alt: getMedia(it).alt_text,
                                        sizes: "(min-width: 1200px) 380px, (min-width: 768px) 50vw, 100vw"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "term",
                                            children: getTerm(it)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "title",
                                            dangerouslySetInnerHTML: {
                                                __html: it.title?.rendered || ""
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "dste",
                                            children: it.modified ? format_default()(new Date(it.modified), "d MMMM yyyy") : ""
                                        })
                                    ]
                                })
                            ]
                        }, it.id)),
                    /*#__PURE__*/ jsx_runtime_.jsx(Dummy, {
                        "aria-hidden": true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Dummy, {
                        "aria-hidden": true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Categories, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                        children: t.blogPage.checkOtherArticles
                    }),
                    categories.map((it)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            passHref: true,
                            legacyBehavior: true,
                            href: {
                                pathname: "/blog"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                children: it.name
                            })
                        }, it.id))
                ]
            })
        ]
    });
};
/* harmony default export */ const Category = (Index);


/***/ }),

/***/ 1052:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9104);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9154);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7507);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9648);
/* harmony import */ var _containers_Category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7736);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Navbar__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_5__]);
([_components_Navbar__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Page = (props)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const isKo = router.locale === "ko";
    const meta = (props.category?.yoast_head_json) || {};
    const categoryName = props.category?.name || "Category";
    const pageTitle = isKo ? `${categoryName} 카테고리 아티클 및 인사이트 | 인파트너` : meta.title || `${categoryName} | Inpartner Insights`;
    const pageDescription = isKo ? `인파트너 블로그의 ${categoryName} 관련 최신 비즈니스 트렌드, 산업 분석 및 전문 인사이트를 확인하세요.` : meta.og_description || `Read latest insights and articles in ${categoryName} on Inpartner.`;
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SEO__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: pageTitle,
                description: pageDescription
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_Category__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                ...props
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    });
};
const getServerSideProps = async ({ query  })=>{
    const slug = query.slug?.toLowerCase();
    if (!slug) {
        return {
            notFound: true
        };
    }
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(`${process.env.BLOG_URL}wp-json/wp/v2/categories`, {
            params: {
                _embed: 1,
                _fields: "id,name,slug,yoast_head_json"
            },
            headers: {
                accept: "application/json"
            }
        });
        const category = res.data.find((it)=>it.slug.toLowerCase() === slug);
        if (!category) {
            return {
                notFound: true
            };
        }
        const categories = res.data.filter((it)=>it.slug.toLowerCase() !== slug && it.slug !== "others");
        const posts = await axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(`${process.env.BLOG_URL}wp-json/wp/v2/posts`, {
            params: {
                _embed: 1,
                categories: category.id,
                per_page: 6,
                _fields: "id,title,slug,modified,categories,_embedded,_links.wp:featuredmedia,_links.wp:term"
            },
            headers: {
                accept: "application/json"
            }
        });
        return {
            props: {
                category,
                posts: posts.data,
                categories
            }
        };
    } catch  {
        return {
            notFound: true
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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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

/***/ 8582:
/***/ ((module) => {

module.exports = require("react-bootstrap/Dropdown");

/***/ }),

/***/ 2540:
/***/ ((module) => {

module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ 4934:
/***/ ((module) => {

module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,636,172,302,222], () => (__webpack_exec__(1052)));
module.exports = __webpack_exports__;

})();