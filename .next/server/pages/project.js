"use strict";
(() => {
var exports = {};
exports.id = 512;
exports.ids = [512];
exports.modules = {

/***/ 3005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/banner.c5da7d6b.png","height":2000,"width":3000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAM1BMVEWwv8RhaGxCSEiLlZmntbl4gIFrdHiRmJmIj4+hrq+3xcp7io9uamaYoqJUXF9PWF86REnq6uVRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALElEQVR4nAXBhwEAIAzAoFQ73f9fK9C3jgEwV1ZRypSwpRG8mxbZjeMuLq19F+4BBjynjLMAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 4170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ PageItem)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const PageItem = ({ href , as , children , tabIndex  })=>{
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        className: "page-item",
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: href,
            as: as,
            className: "page-link",
            role: "button",
            tabIndex: tabIndex,
            children: children
        })
    });
};


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



const SectionTitle = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()("h2", {
    target: "e3y0cv0"
})("font-weight:600;font-family:", (_fonts_index__WEBPACK_IMPORTED_MODULE_2___default().style.fontFamily), ";font-size:20px;@media (min-width:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__/* .breakpoints.md */ .AV.md, "){font-size:28px;}");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionTitle);


/***/ }),

/***/ 8842:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9988);
/* harmony import */ var _banner_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3005);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4959);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7017);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4883);
/* harmony import */ var react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4170);
/* harmony import */ var _hooks_useSectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6925);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _locales_useTranslation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3064);
/* harmony import */ var _locales_sectors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useSectors__WEBPACK_IMPORTED_MODULE_9__]);
_hooks_useSectors__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const Index = ({ rows , page , count , categoryId , sectorId , perPage  })=>{
    const { t , locale  } = (0,_locales_useTranslation__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
    const sectors = (0,_hooks_useSectors__WEBPACK_IMPORTED_MODULE_9__/* .useSectors */ .x)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const pageCount = Math.ceil(count / perPage);
    const pages = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
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
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Banner__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                title: t.projectsPage.bannerTitle,
                backgroundSrc: _banner_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_5__/* .Container */ .W2, {
                id: "content",
                children: [
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_5__/* .SideMenu */ .fv, {
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_5__/* .MenuTitle */ .yU, {
                                children: t.projectsPage.sideTitle
                            }),
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_5__/* .MenuItem */ .sN, {
                                href: {
                                    pathname: "/project",
                                    hash: "content",
                                    query: {
                                        categoryId: 1
                                    }
                                },
                                className: categoryId === 1 ? "selected" : "",
                                children: t.projectsPage.catBusiness
                            }),
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_5__/* .MenuItem */ .sN, {
                                href: {
                                    pathname: "/project",
                                    hash: "content",
                                    query: {
                                        categoryId: 3
                                    }
                                },
                                className: categoryId === 3 ? "selected" : "",
                                children: t.projectsPage.catInvestment
                            }),
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_5__/* .MenuItem */ .sN, {
                                href: {
                                    pathname: "/project",
                                    hash: "content",
                                    query: {
                                        categoryId: 2
                                    }
                                },
                                className: categoryId === 2 ? "selected" : "",
                                children: t.projectsPage.catCapacity
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_5__/* .Projects */ .pj, {
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_5__/* .Queries */ .HQ, {
                                children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default().Select), {
                                    id: "sector-filter",
                                    name: "sectorId",
                                    "aria-label": t.projectsPage.selectSector,
                                    onChange: (e)=>{
                                        const sectorId = e.currentTarget.value;
                                        if (sectorId) {
                                            router.replace({
                                                pathname: "/project",
                                                hash: "content",
                                                query: {
                                                    ...query,
                                                    page: 1,
                                                    sectorId
                                                }
                                            });
                                        } else {
                                            router.replace({
                                                pathname: "/project",
                                                hash: "content",
                                                query: {
                                                    ...query,
                                                    page: 1,
                                                    sectorId: undefined
                                                }
                                            });
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "",
                                            children: t.projectsPage.selectSector
                                        }),
                                        sectors.map((s)=>/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: s.id,
                                                children: (0,_locales_sectors__WEBPACK_IMPORTED_MODULE_12__/* .getSectorTitle */ .qZ)(s.slug, s.name, locale)
                                            }, s.id))
                                    ]
                                })
                            }),
                            rows.length === 0 ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-muted p-4",
                                children: t.projectsPage.empty
                            }) : rows.map((r)=>/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Project__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
                                    data: r
                                }, r.id)),
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Project__WEBPACK_IMPORTED_MODULE_4__/* .Dummy */ .vk, {
                                "aria-hidden": true
                            }),
                            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_7___default()), {
                                children: [
                                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Pagination__WEBPACK_IMPORTED_MODULE_8__/* .PageItem */ .J, {
                                        href: {
                                            pathname: "/project",
                                            hash: "content",
                                            query: {
                                                ...query,
                                                page: 1
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "\xab"
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "visually-hidden",
                                                children: locale === "ko" ? "처음" : "First"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Pagination__WEBPACK_IMPORTED_MODULE_8__/* .PageItem */ .J, {
                                        href: {
                                            pathname: "/project",
                                            hash: "content",
                                            query: {
                                                ...query,
                                                page: Math.max(1, page - 1)
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "‹"
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "visually-hidden",
                                                children: locale === "ko" ? "이전" : "Prev"
                                            })
                                        ]
                                    }),
                                    pages.map((p)=>/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Pagination__WEBPACK_IMPORTED_MODULE_8__/* .PageItem */ .J, {
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
                                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Pagination__WEBPACK_IMPORTED_MODULE_8__/* .PageItem */ .J, {
                                        href: {
                                            pathname: "/project",
                                            hash: "content",
                                            query: {
                                                ...query,
                                                page: Math.min(pageCount, page + 1)
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "›"
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "visually-hidden",
                                                children: locale === "ko" ? "다음" : "Next"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Pagination__WEBPACK_IMPORTED_MODULE_8__/* .PageItem */ .J, {
                                        href: {
                                            pathname: "/project",
                                            hash: "content",
                                            query: {
                                                ...query,
                                                page: pageCount
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "\xbb"
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "visually-hidden",
                                                children: locale === "ko" ? "마지막" : "Last"
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HQ": () => (/* binding */ Queries),
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "fv": () => (/* binding */ SideMenu),
/* harmony export */   "pj": () => (/* binding */ Projects),
/* harmony export */   "sN": () => (/* binding */ MenuItem),
/* harmony export */   "yU": () => (/* binding */ MenuTitle)
/* harmony export */ });
/* harmony import */ var _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9920);
/* harmony import */ var _components_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4959);
/* harmony import */ var _components_SectionTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3137);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__);






const Container = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default()((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5___default()), {
    target: "e54vnkr0"
})("display:flex;flex-wrap:wrap;");
const SideMenu = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default()("div", {
    target: "e54vnkr1"
})("display:flex;flex-direction:column;min-width:90%;flex:1;@media (min-width:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__/* .breakpoints.lg */ .AV.lg, "){min-width:330px;max-width:330px;border-right:1px solid #d9d9d9;margin-right:32px;}");
const MenuTitle = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default()(_components_SectionTitle__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    target: "e54vnkr2"
})("padding-top:32px;padding-bottom:16px;border-bottom:1px solid #d9d9d9;margin-bottom:0;@media (min-width:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__/* .breakpoints.lg */ .AV.lg, "){padding-top:64px;padding-bottom:32px;}");
const MenuItem = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default()((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
    target: "e54vnkr3"
})("padding:8px;display:flex;align-items:center;min-height:48px;font-weight:600;font-size:16px;border-bottom:1px solid #d9d9d9;&.selected{background:#f2f2f2;box-shadow:inset 0px 4px 4px rgba(0,0,0,0.12);}@media (min-width:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__/* .breakpoints.lg */ .AV.lg, "){font-size:20px;min-height:96px;}");
const Projects = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default()(_components_Project__WEBPACK_IMPORTED_MODULE_1__/* .ProjectsComponent */ .vP, {
    target: "e54vnkr4"
})("flex:1;padding-bottom:15px;@media (min-width:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__/* .breakpoints.lg */ .AV.lg, "){padding-bottom:42px;}& > .pagination{min-width:100%;margin-left:12px;margin-right:12px;margin-top:20px;}");
const Queries = /*#__PURE__*/ _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default()("div", {
    target: "e54vnkr5"
})("min-width:100%;display:flex;padding-top:32px;padding-bottom:16px;@media (min-width:", _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__/* .breakpoints.lg */ .AV.lg, "){padding-top:64px;padding-bottom:32px;}& > .form-control,& > .form-select{width:unset;min-width:134px;margin-left:12px;margin-right:12px;}");


/***/ }),

/***/ 8493:
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
/* harmony import */ var _containers_Projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8842);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9104);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9154);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7507);
/* harmony import */ var _utils_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8312);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_containers_Projects__WEBPACK_IMPORTED_MODULE_2__, _components_Navbar__WEBPACK_IMPORTED_MODULE_3__]);
([_containers_Projects__WEBPACK_IMPORTED_MODULE_2__, _components_Navbar__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Page = (props)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const isKo = router.locale === "ko";
    const title = isKo ? "주요 프로젝트 실적 및 포트폴리오 | 인파트너 인도네시아" : "Portfolio & Completed Advisory Projects | Inpartner Indonesia";
    const description = isKo ? "인도네시아 고속도로(BUJT) 실사, BRT 타당성 조사, 신재생에너지 재무 모델링, 투자 티저 등 인파트너가 성공적으로 완수한 공공\xb7민간 프로젝트 실적입니다." : "Review Inpartner's delivered advisory track record: feasibility studies for toll roads, BRT transportation, renewable energy, and investment teasers.";
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SEO__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                title: title,
                description: description
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_Projects__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                ...props
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
};
const getServerSideProps = async ({ req , query  })=>{
    if (!req?.ctx?.sequelize) {
        return {
            props: {
                rows: [],
                count: 0,
                page: 1,
                perPage: 20,
                categoryId: 1,
                sectorId: null
            }
        };
    }
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
                rows: JSON.parse(JSON.stringify((0,_utils_json__WEBPACK_IMPORTED_MODULE_6__/* .jsonify */ .K)(rows))),
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8312:
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

/***/ 5226:
/***/ ((module) => {

module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ 2540:
/***/ ((module) => {

module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ 4934:
/***/ ((module) => {

module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ 4883:
/***/ ((module) => {

module.exports = require("react-bootstrap/Pagination");

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
var __webpack_exports__ = __webpack_require__.X(0, [210,636,172,302,222,988,959], () => (__webpack_exec__(8493)));
module.exports = __webpack_exports__;

})();