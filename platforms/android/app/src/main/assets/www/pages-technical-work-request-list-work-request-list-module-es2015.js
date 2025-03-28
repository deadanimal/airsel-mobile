(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-technical-work-request-list-work-request-list-module"],{

/***/ "./src/app/shared/services/approval-profile/approval-profile.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/services/approval-profile/approval-profile.service.ts ***!
  \******************************************************************************/
/*! exports provided: ApprovalProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalProfileService", function() { return ApprovalProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ApprovalProfileService = class ApprovalProfileService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/approval-profile/";
        // Data
        this.atmodels = [];
    }
    post(body) {
        return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("ApprovalProfileModel", res);
        }));
    }
    get() {
        return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("ApprovalProfileModel", res);
            this.atmodels = res;
        }));
    }
    getOne(id) {
        let urlID = this.url + id + "/";
        return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("ApprovalProfileModel", res);
            this.atmodel = res;
        }));
    }
    update(body) {
        return this.http.patch(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("ApprovalProfileModel", res);
        }));
    }
    delete(id) {
        return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("ApprovalProfileModel", res);
        }));
    }
    filter(field) {
        let urlFilter = this.url + "?" + field;
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("ApprovalProfileModel", res);
        }));
    }
};
ApprovalProfileService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ApprovalProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], ApprovalProfileService);



/***/ }),

/***/ "./src/app/shared/services/assets/assets.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/assets/assets.service.ts ***!
  \**********************************************************/
/*! exports provided: AssetsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsService", function() { return AssetsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AssetsService = class AssetsService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/assets/";
        // Data 
        this.amodels = [];
    }
    post(body) {
        return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetsModel", res);
        }));
    }
    get() {
        return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetsModel", res);
            this.amodels = res;
        }));
    }
    getOne(id) {
        let urlID = this.url + id + "/";
        return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetsModel", res);
            this.amodel = res;
        }));
    }
    // update(body: Form): Observable<AssetsModel> {
    //   return this.http.patch<AssetsModel>(this.url, body).pipe(
    //     tap((res) => {
    //       console.log("AssetsModel", res);
    //     })
    //   );
    // }
    update(id, body) {
        let urlTemp = this.url + id + '/';
        return this.http.patch(urlTemp, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetsModel", res);
        }));
    }
    delete(id) {
        return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetsModel", res);
        }));
    }
    filter(field) {
        let urlFilter = this.url + "?" + field;
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetsModel", res);
        }));
    }
    getOneExtended(id) {
        let urlID = this.url + id + "/extended/";
        return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetsModel", res);
            this.amodel = res;
        }));
    }
    patch_asset(body) {
        let urlPatchAsset = this.url + "patch_asset/";
        return this.http.post(urlPatchAsset, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetsModel", res);
        }));
    }
};
AssetsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AssetsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], AssetsService);



/***/ }),

/***/ "./src/app/shared/services/work-requests/work-requests.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/services/work-requests/work-requests.service.ts ***!
  \************************************************************************/
/*! exports provided: WorkRequestsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkRequestsService", function() { return WorkRequestsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let WorkRequestsService = class WorkRequestsService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/work-request-pipe/";
        // url: string = environment.baseUrl + "v1/work-requests/";
        // Data
        this.wrmodels = [];
    }
    post(body) {
        return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkRequestsModel", res);
        }));
    }
    get() {
        return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkRequestsModel", res);
            this.wrmodels = res;
        }));
    }
    getOne(id) {
        let urlID = this.url + id + "/";
        return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkRequestsModel", res);
            this.wrmodel = res;
        }));
    }
    update(body) {
        return this.http.patch(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkRequestsModel", res);
        }));
    }
    delete(id) {
        return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkRequestsModel", res);
        }));
    }
    filter(field) {
        let urlFilter = this.url + "?" + field;
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkRequestsModel", res);
        }));
    }
    submit_approval_profile(body) {
        let urlSubmitApprovalProfile = this.url + "submit_approval_profile/";
        return this.http.post(urlSubmitApprovalProfile, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkRequestsModel", res);
        }));
    }
    desc_order_list(body) {
        let urlOrdered = this.url + "desc_ordered_list/";
        return this.http.post(urlOrdered, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkRequestsModel", res);
            this.wrmodels = res;
        }));
        // let urlDescOrdLis = this.url + "desc_ordered_list"
        // return this.http.get<any>(urlDescOrdLis).pipe(
        //   tap((res) => {
        //     console.log("WorkRequestsModel", res);
        //     this.wrmodels = res;
        //   })
        // );
    }
};
WorkRequestsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
WorkRequestsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], WorkRequestsService);



/***/ })

}]);
//# sourceMappingURL=pages-technical-work-request-list-work-request-list-module-es2015.js.map