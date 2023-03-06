"use strict";
(() => {
var exports = {};
exports.id = 4;
exports.ids = [4];
exports.modules = {

/***/ 1059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4384);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns_format__WEBPACK_IMPORTED_MODULE_0__);

const Page = ()=>{
// getServerSideProps will do the heavy lifting
};
const getServerSideProps = async ({ req , res  })=>{
    const { sequelize  } = req.ctx;
    const { Sector  } = sequelize.models;
    try {
        const data = await Sector.findAll();
        res.setHeader("Content-Type", "text/xml");
        res.write(`
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="//inpartner.id/wp-content/plugins/wordpress-seo/css/main-sitemap.xsl"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
                      http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd"
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${data.map((it)=>`
<url>
  <loc>https://inpartner.id/sector/${it.slug}/</loc>
  <lastmod>${date_fns_format__WEBPACK_IMPORTED_MODULE_0___default()(it.updatedAt, "YYYY-MM-DDTHH:mm:ss.SSSZ")}</lastmod>
  <image:image>
    <image:loc>https://inpartner.id/${it.image}</image:loc>
  </image:image>
</url>
`.trim())}
</urlset>
`.trim());
        res.end();
    } catch (e) {
        res.setHeader("Content-Type", "text/xml");
        res.write(`
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="//inpartner.id/wp-content/plugins/wordpress-seo/css/main-sitemap.xsl"?>
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


/***/ }),

/***/ 4384:
/***/ ((module) => {

module.exports = require("date-fns/format");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1059));
module.exports = __webpack_exports__;

})();