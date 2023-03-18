"use strict";
(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 9885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Item */
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(471);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);





const Inner = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()("div", {
    target: "e4zr5h0"
})("margin-left:14px;margin-right:14px;width:calc(100% - 28px);border-radius:8px;overflow:hidden;");
const Aspect = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
    target: "e4zr5h1"
})("display:block;position:relative;width:100%;padding-top:", 288 / 384 * 100, "%;");
const Content = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()("div", {
    target: "e4zr5h2"
})("position:absolute;left:0;right:0;top:0;bottom:0;display:flex;flex-direction:column;justify-content:flex-end;z-index:2;background-color:rgba(0,0,0,0.3);color:white;");
const Label = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()("div", {
    target: "e4zr5h3"
})("font-size:24px;width:100%;padding-left:16px;padding-right:16px;font-weight:700;");
const Dates = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()("div", {
    target: "e4zr5h4"
})("font-size:14px;padding:0 16px 16px 16px;");
const Item = ({ data  })=>{
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Inner, {
        children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Aspect, {
            href: data.slug,
            children: [
                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    fill: true,
                    src: data._embedded["wp:featuredmedia"][0].source_url,
                    alt: data._embedded["wp:featuredmedia"][0].alt_text,
                    quality: 100,
                    placeholder: "empty"
                }),
                /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Content, {
                    children: [
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Label, {
                            dangerouslySetInnerHTML: {
                                __html: data.title.rendered
                            }
                        }),
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Dates, {
                            children: (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(new Date(data.modified), "d MMMM yyyy")
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);


/***/ }),

/***/ 8249:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Categories */
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(292);
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9885);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3900);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Cat = ({ category , posts , index  })=>{
    const slider = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_2__/* .Header */ .h4, {
                className: `index-${index}`,
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "underline"
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_2__/* .Title */ .Dx, {
                        href: {
                            pathname: "/blog"
                        },
                        passHref: true,
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            children: category.name
                        })
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        onClick: ()=>slider.current.slickPrev(),
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faAngleLeft
                        })
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        onClick: ()=>slider.current.slickNext(),
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faAngleRight
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_2__/* .ItemsWrapper */ .t5, {
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_2__/* .Items */ .ob, {
                    ref: slider,
                    infinite: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    responsive: [
                        {
                            breakpoint: 384 * 3 + 48 * 3,
                            settings: {
                                slidesToShow: 3
                            }
                        },
                        {
                            breakpoint: 384 * 2 + 48 * 2,
                            settings: {
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 384 * 1 + 48,
                            settings: {
                                slidesToShow: 1
                            }
                        }
                    ],
                    children: posts.map((post, index)=>/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Item__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            data: post
                        }, index))
                })
            })
        ]
    });
};
const Categories = ({ data  })=>{
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: data.map(({ category , posts  }, index)=>{
            return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Cat, {
                category: category,
                posts: posts,
                index: index
            }, category.id);
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Categories);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dx": () => (/* binding */ Title),
/* harmony export */   "h4": () => (/* binding */ Header),
/* harmony export */   "ob": () => (/* binding */ Items),
/* harmony export */   "t5": () => (/* binding */ ItemsWrapper)
/* harmony export */ });
/* harmony import */ var _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9920);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);




const ItemsWrapper = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()("div", {
    target: "ehbs0z60"
})("margin-left:-16px;margin-right:-16px;margin-top:48px;");
const Header = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()("div", {
    target: "ehbs0z61"
})("min-width:100%;display:flex;position:relative;margin-top:40px;align-items:stretch;&.index-0{margin-top:80px;}& > .underline{height:4px;position:absolute;left:6px;right:0;bottom:0;background-color:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__/* .color.primary.normal */ .$_.primary.normal, ";z-index:0;}& > .btn{border-radius:50%;min-width:40px;max-height:40px;min-height:40px;align-self:center;margin:8px 0 8px 8px;}");
const Title = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    target: "ehbs0z62"
})("position:relative;z-index:1;& > .btn{border-bottom-right-radius:0;@media (min-width:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__/* .breakpoints.sm */ .AV.sm, "){padding-left:32px;padding-right:32px;font-weight:700;font-size:28px;}height:100%;width:100%;}");
const Items = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((react_slick__WEBPACK_IMPORTED_MODULE_3___default()), {
    target: "ehbs0z63"
})("max-width:100%;@media (min-width:1024px){max-width:100%;}& .slick-track{margin-left:0;}");


/***/ }),

/***/ 3621:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Index */
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3900);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4563);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Categories__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8249);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5855);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__, _Categories__WEBPACK_IMPORTED_MODULE_9__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__, _Categories__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Index = ({ posts , categories  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { c , q  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(()=>{
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
    const [checked, setChecked] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(c);
    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(q);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
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
    const [first, second, third, fourth, fifth] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(()=>{
        if (posts.length === 1) {
            return [
                ...posts,
                ...posts,
                ...posts,
                ...posts,
                ...posts
            ];
        }
        if (posts.length === 2) {
            return [
                ...posts,
                ...posts,
                ...posts,
                ...posts,
                posts[0]
            ];
        }
        if (posts.length === 3) {
            return [
                ...posts,
                posts[0],
                posts[1]
            ];
        }
        if (posts.length === 4) {
            return [
                ...posts,
                posts[0]
            ];
        }
        return posts;
    }, [
        posts
    ]);
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_10__/* .Container */ .W2, {
        children: [
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_10__/* .Banner */ .jL, {
                children: [
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "search",
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Form.Control, {
                                placeholder: "Search article ...",
                                "aria-label": "Search",
                                value: search,
                                onChange: (e)=>setSearch(e.target.value.toLowerCase())
                            }),
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                disabled: loading,
                                onClick: ()=>{
                                    router.push({
                                        pathname: `/blog`,
                                        query: {
                                            c: Object.keys(checked).filter((i)=>checked[i]),
                                            q: search.trim().toLowerCase()
                                        }
                                    }, null, {
                                        shallow: false
                                    });
                                },
                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                    icon: loading ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faSpinner : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faMagnifyingGlass,
                                    spin: loading
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_10__/* .Item */ .ck, {
                        href: `/blog/${first.slug}`,
                        className: "main",
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "aspect",
                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    fill: true,
                                    quality: 100,
                                    src: first._embedded["wp:featuredmedia"][0].source_url,
                                    alt: first._embedded["wp:featuredmedia"][0].alt_text
                                })
                            }),
                            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "content",
                                children: [
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "term",
                                        children: first._embedded["wp:term"][0][0].name
                                    }),
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "title",
                                        dangerouslySetInnerHTML: {
                                            __html: first.title.rendered
                                        }
                                    }),
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "dste",
                                        children: (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(new Date(first.modified), "d MMMM yyyy")
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "side",
                        children: [
                            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_10__/* .Item */ .ck, {
                                href: `/blog/${second.slug}`,
                                children: [
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "aspect",
                                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            fill: true,
                                            quality: 100,
                                            src: second._embedded["wp:featuredmedia"][0].source_url,
                                            alt: second._embedded["wp:featuredmedia"][0].alt_text
                                        })
                                    }),
                                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "content",
                                        children: [
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "term",
                                                children: second._embedded["wp:term"][0][0].name
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "title",
                                                dangerouslySetInnerHTML: {
                                                    __html: second.title.rendered
                                                }
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "dste",
                                                children: (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(new Date(second.modified), "d MMMM yyyy")
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_10__/* .Item */ .ck, {
                                href: `/blog/${third.slug}`,
                                children: [
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "aspect",
                                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            fill: true,
                                            quality: 100,
                                            src: third._embedded["wp:featuredmedia"][0].source_url,
                                            alt: third._embedded["wp:featuredmedia"][0].alt_text
                                        })
                                    }),
                                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "content",
                                        children: [
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "term",
                                                children: third._embedded["wp:term"][0][0].name
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "title",
                                                dangerouslySetInnerHTML: {
                                                    __html: third.title.rendered
                                                }
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "dste",
                                                children: (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(new Date(third.modified), "d MMMM yyyy")
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_10__/* .PostRow */ .hG, {
                children: [
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_10__/* .Item */ .ck, {
                        href: `/blog/${fourth.slug}`,
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "aspect",
                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    fill: true,
                                    quality: 100,
                                    src: fourth._embedded["wp:featuredmedia"][0].source_url,
                                    alt: fourth._embedded["wp:featuredmedia"][0].alt_text
                                })
                            }),
                            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "content",
                                children: [
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "term",
                                        children: fourth._embedded["wp:term"][0][0].name
                                    }),
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "title",
                                        dangerouslySetInnerHTML: {
                                            __html: fourth.title.rendered
                                        }
                                    }),
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "dste",
                                        children: (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(new Date(fourth.modified), "d MMMM yyyy")
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_10__/* .Item */ .ck, {
                        href: `/blog/${fifth.slug}`,
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "aspect",
                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    fill: true,
                                    quality: 100,
                                    src: fifth._embedded["wp:featuredmedia"][0].source_url,
                                    alt: fifth._embedded["wp:featuredmedia"][0].alt_text
                                })
                            }),
                            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "content",
                                children: [
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "term",
                                        children: fifth._embedded["wp:term"][0][0].name
                                    }),
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "title",
                                        dangerouslySetInnerHTML: {
                                            __html: fifth.title.rendered
                                        }
                                    }),
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "dste",
                                        children: (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(new Date(fifth.modified), "d MMMM yyyy")
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Categories__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                data: categories
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "ck": () => (/* binding */ Item),
/* harmony export */   "hG": () => (/* binding */ PostRow),
/* harmony export */   "jL": () => (/* binding */ Banner)
/* harmony export */ });
/* harmony import */ var _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9920);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);




const Container = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {
    target: "e3o9it10"
})("padding-bottom:68px;@media (min-width:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__/* .breakpoints.md */ .AV.md, "){padding-bottom:120px;}");
const Banner = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()("div", {
    target: "e3o9it11"
})("display:flex;flex-wrap:wrap;margin-left:-8px;margin-right:-8px;margin-top:68px;@media (min-width:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__/* .breakpoints.md */ .AV.md, "){margin-top:120px;}& > .search{min-width:calc(100% - 8px - 8px);display:flex;margin-bottom:16px;margin-left:8px;margin-right:8px;& > .form-control{margin-right:12px;max-width:416px;}}& > .side{min-width:calc(100% - 8px - 8px);flex:8;display:flex;flex-wrap:wrap;margin-left:8px;margin-right:8px;@media (min-width:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__/* .breakpoints.md */ .AV.md, "){margin-left:0px;margin-right:0px;}@media (min-width:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__/* .breakpoints.xl */ .AV.xl, "){margin-top:-16px;margin-left:8px;margin-right:8px;min-width:0;}& > a{margin-top:16px;min-width:100%;@media (min-width:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__/* .breakpoints.md */ .AV.md, "){min-width:0;flex:1;margin-left:8px;margin-right:8px;}@media (min-width:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__/* .breakpoints.xl */ .AV.xl, "){min-width:100%;margin-left:0;margin-right:0;}}}& > .main{min-width:calc(100% - 8px - 8px);margin-left:8px;margin-right:8px;}@media (min-width:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__/* .breakpoints.xl */ .AV.xl, "){& > .main{flex:18;min-width:0;}}");
const PostRow = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()("div", {
    target: "e3o9it12"
})("display:flex;flex-wrap:wrap;margin-left:-8px;margin-right:-8px;align-items:stretch;& > a{margin-left:8px;margin-right:8px;margin-top:16px;min-width:calc(100% - 8px - 8px);@media (min-width:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__/* .breakpoints.md */ .AV.md, "){flex:1;min-width:0;}@media (min-width:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__/* .breakpoints.xl */ .AV.xl, "){&:first-child{flex:8;}&:last-child{flex:18;& > .aspect{padding-top:0;min-height:100%;}}}}");
const Item = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    target: "e3o9it13"
})("position:relative;display:block;border-radius:12px;overflow:hidden;& > .aspect{width:100%;padding-top:", 296 / 3.04, "%;& > img{object-fit:cover;}}& > .content{position:absolute;width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-end;bottom:0;left:0;right:0;background-color:rgba(0,0,0,0.3);color:white;padding:16px;& > .term{font-size:20px;font-weight:bold;}& > .title{font-size:24px;font-weight:bold;}& > .date{font-size:14px;}}@media (min-width:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__/* .breakpoints.md */ .AV.md, "){&.main{& > .aspect{padding-top:", 608 / 9.28, "%;}& > .content{padding:32px;& > .term{font-size:24px;}& > .title{font-size:28px;}}}}");


/***/ }),

/***/ 3792:
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
/* harmony import */ var _containers_Blog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3621);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Navbar__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_4__, _containers_Blog__WEBPACK_IMPORTED_MODULE_5__]);
([_components_Navbar__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_4__, _containers_Blog__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






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
    const [posts, c] = await Promise.all([
        axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(`${process.env.BLOG_URL}wp-json/wp/v2/posts`, {
            params: {
                _embed: 1,
                categories: Array.isArray(query.c) ? query.c.join(",") : query.c,
                per_page: 5,
                _fields: "id,title,slug,modified,categories,_embedded,_links.wp:featuredmedia,_links.wp:term",
                search: query.q
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
    const categories = await Promise.all(c.data.filter((it)=>it.slug !== "other").map(async (it)=>{
        const posts = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(`${process.env.BLOG_URL}wp-json/wp/v2/posts`, {
            params: {
                _embed: 1,
                categories: it.id,
                per_page: 6,
                _fields: "id,title,slug,modified,categories,_embedded,_links.wp:featuredmedia,_links.wp:term",
                search: query.q
            },
            headers: {
                accept: "application/json"
            }
        });
        return {
            category: it,
            posts: posts.data
        };
    }));
    return {
        props: {
            posts: posts.data,
            categories: categories.filter((it)=>it.posts.length)
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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,636,172,524,51], () => (__webpack_exec__(3792)));
module.exports = __webpack_exports__;

})();