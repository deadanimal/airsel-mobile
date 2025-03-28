(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-technical-work-activity-asset-work-activity-asset-module"],{

/***/ "./src/app/shared/services/asset-registrations/asset-registrations.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shared/services/asset-registrations/asset-registrations.service.ts ***!
  \************************************************************************************/
/*! exports provided: AssetRegistrationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetRegistrationsService", function() { return AssetRegistrationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AssetRegistrationsService = class AssetRegistrationsService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/asset-registration/";
        // Data
        this.amodels = [];
    }
    post(body) {
        return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetRegistrationsModel", res);
        }));
    }
    get() {
        return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetRegistrationsModel", res);
            this.amodels = res;
        }));
    }
    getOne(id) {
        let urlID = this.url + id + "/";
        return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetRegistrationsModel", res);
            this.amodel = res;
        }));
    }
    update(body) {
        return this.http.patch(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetRegistrationsModel", res);
        }));
    }
    delete(id) {
        return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetRegistrationsModel", res);
        }));
    }
    filter(field) {
        let urlFilter = this.url + "?" + field;
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetRegistrationsModel", res);
        }));
    }
    patch_asset(body) {
        let urlPatchAsset = this.url + "patch_asset/";
        return this.http.post(urlPatchAsset, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetRegistrationsModel", res);
        }));
    }
};
AssetRegistrationsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AssetRegistrationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], AssetRegistrationsService);



/***/ })

}]);
//# sourceMappingURL=pages-technical-work-activity-asset-work-activity-asset-module-es2015.js.map