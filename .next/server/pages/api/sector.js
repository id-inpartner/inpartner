"use strict";
(() => {
var exports = {};
exports.id = 503;
exports.ids = [503];
exports.modules = {

/***/ 9805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const handler = async (req, res)=>{
    if (req.method == "GET") {
        const { sequelize  } = req.ctx;
        const { Sector  } = sequelize.models;
        try {
            const sectors = await Sector.findAll();
            res.json(sectors.map((it)=>it.toJSON()));
        } catch (e) {
            res.status(500).end();
        }
    } else {
        res.status(404).end();
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9805));
module.exports = __webpack_exports__;

})();