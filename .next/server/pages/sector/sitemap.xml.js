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
const Page = ()=>{
// getServerSideProps will do the heavy lifting
};
const getServerSideProps = async ({ req , res  })=>{
    const { sequelize  } = req.ctx;
    const { Sector  } = sequelize.models;
    try {
        const data = await Sector.findAll();
        console.log(data.map((it)=>{
            const t = `
  <url>
    <loc>https://inpartner.id/sector/${it.slug}/</loc>
    <lastmod>${it.updatedAt.toISOString()}</lastmod>
    <image:image>
      <image:loc>https://inpartner.id/${it.image}</image:loc>
    </image:image>
  </url>
  `;
            console.log(t);
            return t;
        }).join("\n"));
        res.setHeader("Content-Type", "text/xml");
        res.write(`
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
                      http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd"
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${data.map((it)=>`
<url>
  <loc>https://inpartner.id/sector/${it.slug}/</loc>
  <lastmod>${it.updatedAt.toISOString()}</lastmod>
  <image:image>
    <image:loc>https://inpartner.id/${it.image}</image:loc>
  </image:image>
</url>
`.trim()).join("\n")}
</urlset>
`.trim());
        res.end();
    } catch (e) {
        console.log(e);
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