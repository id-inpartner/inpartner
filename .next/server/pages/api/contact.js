"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 4254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const handler = async (req, res)=>{
    if (req.method == "POST") {
        const body = req.body;
        const { sequelize  } = req.ctx;
        const { Contact  } = sequelize.models;
        try {
            const contact = await Contact.create(body);
            res.json(contact.toJSON());
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
var __webpack_exports__ = (__webpack_exec__(4254));
module.exports = __webpack_exports__;

})();