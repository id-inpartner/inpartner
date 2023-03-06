"use strict";
(() => {
var exports = {};
exports.id = 512;
exports.ids = [512];
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

/***/ 2250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ project),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/components/Banner/index.tsx
var Banner = __webpack_require__(6139);
;// CONCATENATED MODULE: ./src/containers/Projects/banner.png
/* harmony default export */ const banner = ({"src":"/_next/static/media/banner.c5da7d6b.png","height":2000,"width":3000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AJCampmkpKy5vLjGy7XDyLC9wrHAxq6+xQCJk5N8fHqaoaKntLaotbixv8Sntbmpt7wAg5OganJ9lp6cg4mHfn16p7W4nqerl6GlAFBYX251fYSLjYaOk5WepY+YnZCbo4OOlQBxeX2CjZN0f4Rxen90fYNzeXdcYmJYXl5jF0XnMiawcQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Project/index.tsx
var Project = __webpack_require__(4626);
// EXTERNAL MODULE: ./src/components/GlobalStyle.ts
var GlobalStyle = __webpack_require__(8857);
// EXTERNAL MODULE: ./src/components/SectionTitle/index.tsx
var SectionTitle = __webpack_require__(5242);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-bootstrap/Container"
var Container_ = __webpack_require__(4678);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
;// CONCATENATED MODULE: ./src/containers/Projects/styled.ts






const Container = /*#__PURE__*/ styled_default()((Container_default()), {
    target: "e54vnkr0"
})("display:flex;flex-wrap:wrap;");
const SideMenu = /*#__PURE__*/ styled_default()("div", {
    target: "e54vnkr1"
})("display:flex;flex-direction:column;min-width:90%;flex:1;@media (min-width:", GlobalStyle/* breakpoints.lg */.AV.lg, "){min-width:330px;max-width:330px;border-right:1px solid #d9d9d9;margin-right:32px;}");
const MenuTitle = /*#__PURE__*/ styled_default()(SectionTitle/* default */.Z, {
    target: "e54vnkr2"
})("padding-top:32px;padding-bottom:16px;border-bottom:1px solid #d9d9d9;margin-bottom:0;@media (min-width:", GlobalStyle/* breakpoints.lg */.AV.lg, "){padding-top:64px;padding-bottom:32px;}");
const MenuItem = /*#__PURE__*/ styled_default()((link_default()), {
    target: "e54vnkr3"
})("padding:8px;display:flex;align-items:center;min-height:48px;font-weight:600;font-size:16px;border-bottom:1px solid #d9d9d9;&.selected{background:#f2f2f2;box-shadow:inset 0px 4px 4px rgba(0,0,0,0.12);}@media (min-width:", GlobalStyle/* breakpoints.lg */.AV.lg, "){font-size:20px;min-height:96px;}");
const Projects = /*#__PURE__*/ styled_default()(Project/* ProjectsComponent */.vP, {
    target: "e54vnkr4"
})("flex:1;padding-bottom:15px;@media (min-width:", GlobalStyle/* breakpoints.lg */.AV.lg, "){padding-bottom:42px;}& > .pagination{min-width:100%;margin-left:12px;margin-right:12px;margin-top:20px;}");
const Queries = /*#__PURE__*/ styled_default()("div", {
    target: "e54vnkr5"
})("min-width:100%;display:flex;padding-top:32px;padding-bottom:16px;@media (min-width:", GlobalStyle/* breakpoints.lg */.AV.lg, "){padding-top:64px;padding-bottom:32px;}& > .form-control,& > .form-select{width:unset;min-width:134px;margin-left:12px;margin-right:12px;}");

// EXTERNAL MODULE: external "react-bootstrap/Form"
var Form_ = __webpack_require__(5226);
var Form_default = /*#__PURE__*/__webpack_require__.n(Form_);
;// CONCATENATED MODULE: external "react-bootstrap/Pagination"
const Pagination_namespaceObject = require("react-bootstrap/Pagination");
var Pagination_default = /*#__PURE__*/__webpack_require__.n(Pagination_namespaceObject);
;// CONCATENATED MODULE: ./src/components/Pagination/index.tsx


const PageItem = ({ href , as , children , tabIndex  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: "page-item",
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: href,
            as: as,
            className: "page-link",
            role: "button",
            tabIndex: tabIndex,
            children: children
        })
    });
};

;// CONCATENATED MODULE: ./src/containers/Projects/index.tsx









const Index = ({ rows , page , count , categoryId , sectorId , perPage  })=>{
    const pageCount = Math.ceil(count / perPage);
    const pages = (0,external_react_.useMemo)(()=>{
        const pp = [];
        for(let i = page - 3; i <= page + 3; i++){
            if (i >= 1 && i <= pageCount) {
                pp.push(i);
            }
        }
        return pp;
    }, [
        pageCount,
        page
    ]);
    const query = {
        page,
        perPage,
        categoryId,
        sectorId: sectorId ? sectorId : undefined
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Banner/* default */.ZP, {
                title: "Projects",
                backgroundSrc: banner
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
                id: "content",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SideMenu, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(MenuTitle, {
                                children: "Projects"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(MenuItem, {
                                href: {
                                    pathname: "/project",
                                    hash: "content",
                                    query: {
                                        categoryId: 1
                                    }
                                },
                                className: categoryId === 1 ? "selected" : "",
                                children: "Business and Management Consulting"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(MenuItem, {
                                href: {
                                    pathname: "/project",
                                    hash: "content",
                                    query: {
                                        categoryId: 2
                                    }
                                },
                                className: categoryId === 2 ? "selected" : "",
                                children: "Investment"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(MenuItem, {
                                href: {
                                    pathname: "/project",
                                    hash: "content",
                                    query: {
                                        categoryId: 3
                                    }
                                },
                                className: categoryId === 3 ? "selected" : "",
                                children: "Capacity Building (The Executive Business Program)"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Projects, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Queries, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()).Select, {
                                        "aria-label": "Sector",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                children: "Sector"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                value: 1,
                                                children: "One"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                value: 2,
                                                children: "Two"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                value: 3,
                                                children: "Three"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                                        type: "date",
                                        name: "date",
                                        placeholder: "Date"
                                    })
                                ]
                            }),
                            rows.map((r)=>/*#__PURE__*/ jsx_runtime_.jsx(Project/* default */.ZP, {
                                    data: r
                                }, r.id)),
                            /*#__PURE__*/ jsx_runtime_.jsx(Project/* Dummy */.vk, {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Pagination_default()), {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PageItem, {
                                        href: {
                                            pathname: "/project",
                                            hash: "content",
                                            query: {
                                                ...query,
                                                page: 1
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "\xab"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "visually-hidden",
                                                children: "First"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PageItem, {
                                        href: {
                                            pathname: "/project",
                                            hash: "content",
                                            query: {
                                                ...query,
                                                page: Math.max(1, page - 1)
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "‹"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "visually-hidden",
                                                children: "Prev"
                                            })
                                        ]
                                    }),
                                    pages.map((p)=>/*#__PURE__*/ jsx_runtime_.jsx(PageItem, {
                                            href: {
                                                pathname: "/project",
                                                hash: "content",
                                                query: {
                                                    ...query,
                                                    page: p
                                                }
                                            },
                                            children: p
                                        }, p)),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PageItem, {
                                        href: {
                                            pathname: "/project",
                                            hash: "content",
                                            query: {
                                                ...query,
                                                page: Math.min(pageCount, page + 1)
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "›"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "visually-hidden",
                                                children: "Next"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PageItem, {
                                        href: {
                                            pathname: "/project",
                                            hash: "content",
                                            query: {
                                                ...query,
                                                page: pageCount
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "\xbb"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "visually-hidden",
                                                children: "Last"
                                            })
                                        ]
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
/* harmony default export */ const containers_Projects = (Index);

// EXTERNAL MODULE: ./src/components/Navbar/index.tsx + 1 modules
var Navbar = __webpack_require__(1387);
// EXTERNAL MODULE: ./src/components/Footer/index.tsx + 2 modules
var Footer = __webpack_require__(841);
// EXTERNAL MODULE: ./src/utils/json.ts
var json = __webpack_require__(4139);
;// CONCATENATED MODULE: ./src/pages/project/index.tsx






const Page = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Project & tender Inpartner"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Inpartner involves the planning, organizing, and overseeing of resources to achieve a specific goal or objective within a defined timeline and budget"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(containers_Projects, {
                ...props
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
        ]
    });
};
const getServerSideProps = async ({ req , query  })=>{
    const { sequelize , Op  } = req.ctx;
    const { Project  } = sequelize.models;
    let categoryId = parseInt(query.categoryId, 10);
    if (!categoryId) {
        categoryId = 1;
    }
    const sectorId = query.sectorId && query.sectorId !== "" ? parseInt(query.sectorId, 10) : undefined;
    const date = query.date && query.date !== "" ? new Date(query.date) : undefined;
    const page = parseInt(query.page, 10) || 1;
    const perPage = parseInt(query.perPage, 10) || 20;
    try {
        const { rows , count  } = await Project.findAndCountAll({
            limit: perPage,
            offset: ((page || 1) - 1) * perPage,
            order: [
                [
                    "id",
                    "ASC"
                ]
            ],
            where: date ? {
                startAt: {
                    [Op.lte]: date
                },
                endAt: {
                    [Op.gte]: date
                }
            } : undefined,
            include: [
                {
                    association: "category",
                    where: categoryId ? {
                        id: categoryId
                    } : undefined,
                    attributes: [
                        "id",
                        "title",
                        "name"
                    ],
                    required: !!categoryId
                },
                {
                    association: "sector",
                    where: sectorId ? {
                        id: sectorId
                    } : undefined,
                    attributes: [
                        "id",
                        "title",
                        "name"
                    ],
                    required: !!sectorId
                }
            ]
        });
        return {
            props: {
                rows: JSON.parse(JSON.stringify((0,json/* jsonify */.K)(rows))),
                count,
                page,
                perPage,
                sectorId: sectorId ? sectorId : null,
                categoryId: categoryId ? categoryId : null
            }
        };
    } catch (e) {
        return {
            props: {
                rows: [],
                count: 0,
                page,
                perPage,
                sectorId: sectorId ? sectorId : null,
                categoryId: categoryId ? categoryId : null
            }
        };
    }
};
/* harmony default export */ const project = (Page);


/***/ }),

/***/ 4139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ jsonify)
/* harmony export */ });
/* unused harmony export toJSON */
const toJSON = (obj)=>{
    return obj.toJSON();
};
const jsonify = (obj)=>{
    return obj.map(toJSON);
};


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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,505,121,302,94,500,626], () => (__webpack_exec__(2250)));
module.exports = __webpack_exports__;

})();