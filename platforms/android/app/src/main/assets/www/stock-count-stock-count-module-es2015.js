(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stock-count-stock-count-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory/stock-count/stock-count.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory/stock-count/stock-count.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"air-selangor-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <div style=\"font-weight: bold; text-transform: uppercase;\">\n      Stock Count\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <h3 class=\"ion-text-center\">Scanning Activity</h3>\n  <ion-card>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"10\">\n            <p>Date: 22 Apr 2020</p>\n            <p>Time Start: 1430 | Time End: 1435</p>\n            <p>Total Item: 20 item</p>\n            <p>Total Count: 50 qty</p>\n          </ion-col>\n          <ion-col size=\"2\" class=\"ion-text-padding\" [routerLink]=\"['/inventory/stock-count-list']\">\n            <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"block\" (click)=\"scanQrCode()\">Add More</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button expand=\"block\" (click)=\"submit()\">Submit</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-keeper/stock-count/stock-count.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-keeper/stock-count/stock-count.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"air-selangor-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <div style=\"font-weight: bold; text-transform: uppercase;\">\n      Stock Count\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <h3 class=\"ion-text-center\">Scanning Activity</h3>\n  <ion-card>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"10\">\n            <p>Date: 22 Apr 2020</p>\n            <p>Time Start: 1430 | Time End: 1435</p>\n            <p>Total Item: 20 item</p>\n            <p>Total Count: 50 qty</p>\n          </ion-col>\n          <ion-col size=\"2\" class=\"ion-text-padding\" [routerLink]=\"['/store-keeper/stock-count-list']\">\n            <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"block\" (click)=\"scanQrCode()\">Add More</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button expand=\"block\" (click)=\"submit()\">Submit</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-supervisor/stock-count/stock-count.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-supervisor/stock-count/stock-count.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"air-selangor-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <div style=\"font-weight: bold; text-transform: uppercase;\">\n      Stock Count\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <h3 class=\"ion-text-center\">Scanning Activity</h3>\n  <ion-card>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"10\">\n            <p>Date: 22 Apr 2020</p>\n            <p>Time Start: 1430 | Time End: 1435</p>\n            <p>Total Item: 20 item</p>\n            <p>Total Count: 50 qty</p>\n          </ion-col>\n          <ion-col size=\"2\" class=\"ion-text-padding\" [routerLink]=\"['/store-supervisor/stock-count-list']\">\n            <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"block\" (click)=\"scanQrCode()\">Add More</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button expand=\"block\" (click)=\"submit()\">Submit</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/inventory/stock-count/stock-count-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/inventory/stock-count/stock-count-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: StockCountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockCountPageRoutingModule", function() { return StockCountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _stock_count_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stock-count.page */ "./src/app/pages/inventory/stock-count/stock-count.page.ts");




const routes = [
    {
        path: '',
        component: _stock_count_page__WEBPACK_IMPORTED_MODULE_3__["StockCountPage"]
    }
];
let StockCountPageRoutingModule = class StockCountPageRoutingModule {
};
StockCountPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StockCountPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/inventory/stock-count/stock-count.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/inventory/stock-count/stock-count.module.ts ***!
  \*******************************************************************/
/*! exports provided: StockCountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockCountPageModule", function() { return StockCountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _stock_count_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stock-count-routing.module */ "./src/app/pages/inventory/stock-count/stock-count-routing.module.ts");
/* harmony import */ var _stock_count_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stock-count.page */ "./src/app/pages/inventory/stock-count/stock-count.page.ts");







let StockCountPageModule = class StockCountPageModule {
};
StockCountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _stock_count_routing_module__WEBPACK_IMPORTED_MODULE_5__["StockCountPageRoutingModule"]
        ],
        declarations: [_stock_count_page__WEBPACK_IMPORTED_MODULE_6__["StockCountPage"]]
    })
], StockCountPageModule);



/***/ }),

/***/ "./src/app/pages/inventory/stock-count/stock-count.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/inventory/stock-count/stock-count.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-footer {\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wbnNiL0RvY3VtZW50cy9HaXRIdWIvYWlyc2VsLW1vYmlsZS9zcmMvYXBwL3BhZ2VzL2ludmVudG9yeS9zdG9jay1jb3VudC9zdG9jay1jb3VudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ludmVudG9yeS9zdG9jay1jb3VudC9zdG9jay1jb3VudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW52ZW50b3J5L3N0b2NrLWNvdW50L3N0b2NrLWNvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1mb290ZXIge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xufSIsImlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/inventory/stock-count/stock-count.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/inventory/stock-count/stock-count.page.ts ***!
  \*****************************************************************/
/*! exports provided: StockCountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockCountPage", function() { return StockCountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




// import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
let StockCountPage = class StockCountPage {
    constructor(alertController, 
    // private barcodeScanner: BarcodeScanner,
    router) {
        this.alertController = alertController;
        this.router = router;
    }
    ngOnInit() { }
    submit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Success",
                message: "Your submission has been successfully recorded.",
                buttons: [
                    {
                        text: "OK",
                        cssClass: "success",
                        handler: () => {
                            this.router.navigate(["/inventory/tabs/tab2"]);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    scanQrCode() {
        this.router.navigate(['/inventory/qr-scanner']);
        // this.barcodeScanner
        //   .scan()
        //   .then(barcodeData => {
        //     console.log("Barcode data", barcodeData);
        //   })
        //   .catch(err => {
        //     console.log("Error", err);
        //   });
    }
};
StockCountPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
StockCountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-stock-count",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stock-count.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory/stock-count/stock-count.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stock-count.page.scss */ "./src/app/pages/inventory/stock-count/stock-count.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], StockCountPage);



/***/ }),

/***/ "./src/app/pages/store-keeper/stock-count/stock-count-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/store-keeper/stock-count/stock-count-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: StockCountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockCountPageRoutingModule", function() { return StockCountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _stock_count_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stock-count.page */ "./src/app/pages/store-keeper/stock-count/stock-count.page.ts");




const routes = [
    {
        path: '',
        component: _stock_count_page__WEBPACK_IMPORTED_MODULE_3__["StockCountPage"]
    }
];
let StockCountPageRoutingModule = class StockCountPageRoutingModule {
};
StockCountPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StockCountPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/store-keeper/stock-count/stock-count.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/store-keeper/stock-count/stock-count.module.ts ***!
  \**********************************************************************/
/*! exports provided: StockCountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockCountPageModule", function() { return StockCountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _stock_count_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stock-count-routing.module */ "./src/app/pages/store-keeper/stock-count/stock-count-routing.module.ts");
/* harmony import */ var _stock_count_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stock-count.page */ "./src/app/pages/store-keeper/stock-count/stock-count.page.ts");







let StockCountPageModule = class StockCountPageModule {
};
StockCountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _stock_count_routing_module__WEBPACK_IMPORTED_MODULE_5__["StockCountPageRoutingModule"]
        ],
        declarations: [_stock_count_page__WEBPACK_IMPORTED_MODULE_6__["StockCountPage"]]
    })
], StockCountPageModule);



/***/ }),

/***/ "./src/app/pages/store-keeper/stock-count/stock-count.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/store-keeper/stock-count/stock-count.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-footer {\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wbnNiL0RvY3VtZW50cy9HaXRIdWIvYWlyc2VsLW1vYmlsZS9zcmMvYXBwL3BhZ2VzL3N0b3JlLWtlZXBlci9zdG9jay1jb3VudC9zdG9jay1jb3VudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N0b3JlLWtlZXBlci9zdG9jay1jb3VudC9zdG9jay1jb3VudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3RvcmUta2VlcGVyL3N0b2NrLWNvdW50L3N0b2NrLWNvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbiIsImlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/store-keeper/stock-count/stock-count.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/store-keeper/stock-count/stock-count.page.ts ***!
  \********************************************************************/
/*! exports provided: StockCountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockCountPage", function() { return StockCountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




// import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
let StockCountPage = class StockCountPage {
    constructor(alertController, 
    // private barcodeScanner: BarcodeScanner,
    router) {
        this.alertController = alertController;
        this.router = router;
    }
    ngOnInit() { }
    submit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Success",
                message: "Your submission has been successfully recorded.",
                buttons: [
                    {
                        text: "OK",
                        cssClass: "success",
                        handler: () => {
                            this.router.navigate(["/store-keeper/tabs/tab2"]);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    scanQrCode() {
        let navigationExtras = {
            state: {
                link: '/store-keeper/stock-count'
            }
        };
        this.router.navigate(['/store-supervisor/qr-scanner'], navigationExtras);
        // this.barcodeScanner
        //   .scan()
        //   .then(barcodeData => {
        //     console.log("Barcode data", barcodeData);
        //   })
        //   .catch(err => {
        //     console.log("Error", err);
        //   });
    }
};
StockCountPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
StockCountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-stock-count",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stock-count.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-keeper/stock-count/stock-count.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stock-count.page.scss */ "./src/app/pages/store-keeper/stock-count/stock-count.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], StockCountPage);



/***/ }),

/***/ "./src/app/pages/store-supervisor/stock-count/stock-count-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/store-supervisor/stock-count/stock-count-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: StockCountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockCountPageRoutingModule", function() { return StockCountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _stock_count_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stock-count.page */ "./src/app/pages/store-supervisor/stock-count/stock-count.page.ts");




const routes = [
    {
        path: '',
        component: _stock_count_page__WEBPACK_IMPORTED_MODULE_3__["StockCountPage"]
    }
];
let StockCountPageRoutingModule = class StockCountPageRoutingModule {
};
StockCountPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StockCountPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/store-supervisor/stock-count/stock-count.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/store-supervisor/stock-count/stock-count.module.ts ***!
  \**************************************************************************/
/*! exports provided: StockCountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockCountPageModule", function() { return StockCountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _stock_count_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stock-count-routing.module */ "./src/app/pages/store-supervisor/stock-count/stock-count-routing.module.ts");
/* harmony import */ var _stock_count_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stock-count.page */ "./src/app/pages/store-supervisor/stock-count/stock-count.page.ts");







let StockCountPageModule = class StockCountPageModule {
};
StockCountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _stock_count_routing_module__WEBPACK_IMPORTED_MODULE_5__["StockCountPageRoutingModule"]
        ],
        declarations: [_stock_count_page__WEBPACK_IMPORTED_MODULE_6__["StockCountPage"]]
    })
], StockCountPageModule);



/***/ }),

/***/ "./src/app/pages/store-supervisor/stock-count/stock-count.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/store-supervisor/stock-count/stock-count.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-footer {\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wbnNiL0RvY3VtZW50cy9HaXRIdWIvYWlyc2VsLW1vYmlsZS9zcmMvYXBwL3BhZ2VzL3N0b3JlLXN1cGVydmlzb3Ivc3RvY2stY291bnQvc3RvY2stY291bnQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdG9yZS1zdXBlcnZpc29yL3N0b2NrLWNvdW50L3N0b2NrLWNvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdG9yZS1zdXBlcnZpc29yL3N0b2NrLWNvdW50L3N0b2NrLWNvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbiIsImlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/store-supervisor/stock-count/stock-count.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/store-supervisor/stock-count/stock-count.page.ts ***!
  \************************************************************************/
/*! exports provided: StockCountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockCountPage", function() { return StockCountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




// import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
let StockCountPage = class StockCountPage {
    constructor(alertController, 
    // private barcodeScanner: BarcodeScanner,
    router) {
        this.alertController = alertController;
        this.router = router;
    }
    ngOnInit() { }
    submit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Success",
                message: "Your submission has been successfully recorded.",
                buttons: [
                    {
                        text: "OK",
                        cssClass: "success",
                        handler: () => {
                            this.router.navigate(["/store-supervisor/tabs/tab2"]);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    scanQrCode() {
        let navigationExtras = {
            state: {
                link: '/store-supervisor/stock-count'
            }
        };
        this.router.navigate(['/store-supervisor/qr-scanner'], navigationExtras);
        // this.barcodeScanner
        //   .scan()
        //   .then(barcodeData => {
        //     console.log("Barcode data", barcodeData);
        //   })
        //   .catch(err => {
        //     console.log("Error", err);
        //   });
    }
};
StockCountPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
StockCountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-stock-count",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stock-count.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-supervisor/stock-count/stock-count.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stock-count.page.scss */ "./src/app/pages/store-supervisor/stock-count/stock-count.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], StockCountPage);



/***/ })

}]);
//# sourceMappingURL=stock-count-stock-count-module-es2015.js.map