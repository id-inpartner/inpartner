"use strict";
(() => {
var exports = {};
exports.id = 999;
exports.ids = [999];
exports.modules = {

/***/ 6468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/components/Banner/index.tsx
var Banner = __webpack_require__(6139);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap/Container"
var Container_ = __webpack_require__(4678);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: ./src/components/Project/index.tsx
var Project = __webpack_require__(4626);
// EXTERNAL MODULE: ./src/components/GlobalStyle.ts
var GlobalStyle = __webpack_require__(8857);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./src/containers/Sector/styled.ts



const Title = /*#__PURE__*/ styled_default()("h1", {
    target: "e9mois80"
})("text-align:center;width:100%;font-weight:600;font-size:20px;margin-top:40px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){font-size:28px;margin-top:64px;}");
const Projects = /*#__PURE__*/ styled_default()(Project/* ProjectsComponent */.vP, {
    target: "e9mois81"
})("margin-top:28px;margin-bottom:28px;@media (min-width:", GlobalStyle/* breakpoints.md */.AV.md, "){margin-top:52px;margin-bottom:52px;}");
const Description = /*#__PURE__*/ styled_default()("div", {
    target: "e9mois82"
})("padding-top:1rem;& p{margin-bottom:1rem;}& li{margin-bottom:1rem;}");

;// CONCATENATED MODULE: ./src/containers/Sector/index.tsx






const Index = ({ data  })=>{
    const descs = (0,external_react_.useMemo)(()=>data.description.split(/[\r\n]+/), [
        data.description
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Banner/* default */.ZP, {
                backgroundSrc: data.image,
                size: "short"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                        children: data.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Description, {
                        dangerouslySetInnerHTML: {
                            __html: data.description
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Projects, {
                        children: data.projects.map((p, i)=>/*#__PURE__*/ jsx_runtime_.jsx(Project/* default */.ZP, {
                                data: p
                            }, i))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Sector = (Index);

// EXTERNAL MODULE: ./src/components/Navbar/index.tsx + 1 modules
var Navbar = __webpack_require__(1387);
// EXTERNAL MODULE: ./src/components/Footer/index.tsx + 2 modules
var Footer = __webpack_require__(841);
;// CONCATENATED MODULE: ./src/pages/sector/[slug].tsx





const Page = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: props.metaTitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: props.metaDescription
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Sector, {
                data: props
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
        ]
    });
};
const getServerSideProps = async ({ req , query  })=>{
    const { sequelize , Op  } = req.ctx;
    const { Sector  } = sequelize.models;
    const { slug  } = query;
    const datum = await Sector.findOne({
        where: {
            slug: {
                [Op.like]: `%${slug}%`
            }
        },
        include: [
            {
                association: "projects",
                include: [
                    {
                        association: "sector",
                        attributes: [
                            "id",
                            "title"
                        ]
                    },
                    {
                        association: "category",
                        attributes: [
                            "id",
                            "title"
                        ]
                    }
                ],
                limit: 3
            }
        ]
    });
    if (!datum) {
        return {
            notFound: true
        };
    }
    return {
        props: JSON.parse(JSON.stringify(datum.toJSON()))
    };
};
/* harmony default export */ const _slug_ = (Page);


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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,505,121,302,94,500,626], () => (__webpack_exec__(6468)));
module.exports = __webpack_exports__;

})();