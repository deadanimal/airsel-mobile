(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["work-request-work-request-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operator/work-request/work-request.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operator/work-request/work-request.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\" mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"font-weight: bold;\">\n      Work Request\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openNotification()\">\n        <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n        <ion-badge\n          size=\"small\"\n          color=\"danger\"\n          style=\"position: absolute; right: -5px; top: 1px;\"\n          >3</ion-badge\n        >\n      </ion-button>\n      <!-- <ion-button (click)=\"clickLogout()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n      </ion-button> -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content-core\">\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"takeCamera()\">\n      <ion-icon name=\"camera\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <div class=\"ion-text-center\">\n    <ion-card-title>Create Work Request<br />(WR)</ion-card-title>\n  </div>\n\n  <ion-grid *ngIf=\"!capturedSnapURL\">\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col size=\"3\"></ion-col>\n      <ion-col size=\"6\">\n        <div>\n          <ion-img src=\"assets/image/no-image.png\"></ion-img>\n        </div>\n      </ion-col>\n      <ion-col size=\"3\"></ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card *ngIf=\"capturedSnapURL\">\n    <img [src]=\"capturedSnapURL\" />\n  </ion-card>\n\n  <ion-list class=\"ion-padding line-input\">\n    <ion-item>\n      <ion-label position=\"stacked\">Nama Aset</ion-label>\n      <ion-select placeholder=\"Sila Pilih\" class=\"ion-text-wrap\">\n        <ion-select-option\n          [value]=\"assetName\"\n          *ngFor=\"let assetName of assetNames\"\n          >{{ assetName }}</ion-select-option\n        >\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Jenis Permasalahan</ion-label>\n      <ion-select placeholder=\"Sila Pilih\" class=\"ion-text-wrap\">\n        <ion-select-option>Masalah Kebocoran</ion-select-option>\n        <ion-select-option>Masalah Paip Tersumbat</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Huraian</ion-label>\n      <ion-textarea rows=\"5\"></ion-textarea>\n    </ion-item>\n  </ion-list>\n\n  <div class=\"ion-text-center ion-padding\">\n    <ion-button>Submit</ion-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/operator/work-request/work-request-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/operator/work-request/work-request-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: WorkRequestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkRequestPageRoutingModule", function() { return WorkRequestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _work_request_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./work-request.page */ "./src/app/pages/operator/work-request/work-request.page.ts");




const routes = [
    {
        path: '',
        component: _work_request_page__WEBPACK_IMPORTED_MODULE_3__["WorkRequestPage"]
    }
];
let WorkRequestPageRoutingModule = class WorkRequestPageRoutingModule {
};
WorkRequestPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WorkRequestPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/operator/work-request/work-request.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/operator/work-request/work-request.module.ts ***!
  \********************************************************************/
/*! exports provided: WorkRequestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkRequestPageModule", function() { return WorkRequestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _work_request_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./work-request-routing.module */ "./src/app/pages/operator/work-request/work-request-routing.module.ts");
/* harmony import */ var _work_request_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./work-request.page */ "./src/app/pages/operator/work-request/work-request.page.ts");







let WorkRequestPageModule = class WorkRequestPageModule {
};
WorkRequestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _work_request_routing_module__WEBPACK_IMPORTED_MODULE_5__["WorkRequestPageRoutingModule"]
        ],
        declarations: [_work_request_page__WEBPACK_IMPORTED_MODULE_6__["WorkRequestPage"]]
    })
], WorkRequestPageModule);



/***/ }),

/***/ "./src/app/pages/operator/work-request/work-request.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/operator/work-request/work-request.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".alert-radio-label.sc-ion-alert-md {\n  white-space: pre-line !important;\n}\n\n.alert-radio-label.sc-ion-alert-ios {\n  white-space: pre-line !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wbnNiL0RvY3VtZW50cy9HaXRIdWIvYWlyc2VsLW1vYmlsZS9zcmMvYXBwL3BhZ2VzL29wZXJhdG9yL3dvcmstcmVxdWVzdC93b3JrLXJlcXVlc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9vcGVyYXRvci93b3JrLXJlcXVlc3Qvd29yay1yZXF1ZXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0FDQ0o7O0FERUE7RUFDSSxnQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3BlcmF0b3Ivd29yay1yZXF1ZXN0L3dvcmstcmVxdWVzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnQtcmFkaW8tbGFiZWwuc2MtaW9uLWFsZXJ0LW1kIHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmUgIWltcG9ydGFudDtcbn1cbiAgXG4uYWxlcnQtcmFkaW8tbGFiZWwuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lICFpbXBvcnRhbnQ7XG59IiwiLmFsZXJ0LXJhZGlvLWxhYmVsLnNjLWlvbi1hbGVydC1tZCB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZSAhaW1wb3J0YW50O1xufVxuXG4uYWxlcnQtcmFkaW8tbGFiZWwuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/operator/work-request/work-request.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/operator/work-request/work-request.page.ts ***!
  \******************************************************************/
/*! exports provided: WorkRequestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkRequestPage", function() { return WorkRequestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");




// import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";

let WorkRequestPage = class WorkRequestPage {
    constructor(alertController, menu, router, 
    // private barcodeScanner: BarcodeScanner
    camera) {
        this.alertController = alertController;
        this.menu = menu;
        this.router = router;
        this.camera = camera;
        // dropdowns
        this.assetNames = [
            'SLUICE VALVE-SLUICE VALVE-GROUND-200-MM',
            'SLUICE VALVE-SCOUR VALVE-GROUND-150-MM',
            'BUTTERFLY VALVE-BYPASS RESERVOIR VALVE-GROUND-400-MM',
            'SLUICE VALVE-INLET VALVE-GROUND-150-MM',
            'SLUICE VALVE-BYPASS ALTITUDE VALVE-GROUND-150-MM',
            'ALTITUDE VALVE-ALTITUDE VALVE-GROUND-150-MM'
        ];
    }
    ngOnInit() {
    }
    scanQrCode() {
        // this.barcodeScanner
        //   .scan()
        //   .then(barcodeData => {
        //     console.log("Barcode data", barcodeData);
        //   })
        //   .catch(err => {
        //     console.log("Error", err);
        //   });
    }
    takeCamera() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            let base64Image = "data:image/jpeg;base64," + imageData;
            this.capturedSnapURL = base64Image;
        }, (err) => {
            // Handle error
            console.log(err);
        });
    }
    clickLogout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Logout',
                message: 'Are you want to logout?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => { }
                    }, {
                        text: 'Yes, logout it!',
                        handler: () => {
                            this.router.navigate(['/']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    openNotification() {
        this.menu.enable(true, "menuNotification");
        this.menu.open("menuNotification");
    }
};
WorkRequestPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] }
];
WorkRequestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-work-request',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./work-request.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operator/work-request/work-request.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./work-request.page.scss */ "./src/app/pages/operator/work-request/work-request.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"]])
], WorkRequestPage);



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
        //url: string = environment.assetUrl;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/assets/";
        //url: string = environment.baseUrl + "v1/assets/";
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



/***/ })

}]);
//# sourceMappingURL=work-request-work-request-module-es2015.js.map