"use strict";
(() => {
var exports = {};
exports.id = 878;
exports.ids = [878];
exports.modules = {

/***/ 6930:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const Page = ()=>{
// getServerSideProps will do the heavy lifting
};
const getServerSideProps = async ({ res  })=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("https://blog.inpartner.id/post-sitemap.xml", {
            headers: {
                Accept: "text/xml"
            },
            transformResponse: (res)=>res
        });
        const raw = response.data;
        const sitemap = raw.replaceAll("<loc>https://blog.inpartner.id", "<loc>https://inpartner.id/blog").replace('<?xml-stylesheet type="text/xsl" href="//blog.inpartner.id/wp-content/plugins/wordpress-seo/css/main-sitemap.xsl"?>', "").replaceAll(/<!--.*-->/gs, "");
        res.setHeader("Content-Type", "text/xml");
        res.write(sitemap);
        res.end();
    } catch (e) {
        res.setHeader("Content-Type", "text/xml");
        res.write(`
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
                      http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd"
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>
`.trim());
        res.end();
    }
    return {
        props: {}
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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
var __webpack_exports__ = (__webpack_exec__(6930));
module.exports = __webpack_exports__;

})();