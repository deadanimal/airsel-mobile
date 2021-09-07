(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dispose-dispose-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory/dispose/dispose.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory/dispose/dispose.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"air-selangor-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <div style=\"font-weight: bold; text-transform: uppercase;\">\n      Dispose\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-card>\n    <ion-card-content>\n      <p>Description: CONTACTOR - 32A 240V 4 POLES (SCHNEIDER)</p>\n      <p>Category: ELECTRICAL ACCESSORIES</p>\n      <p>Quantity: 10</p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"block\" (click)=\"scanQrCode()\">Add More</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button expand=\"block\" (click)=\"submit()\">Submit</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-keeper/dispose/dispose.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-keeper/dispose/dispose.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"air-selangor-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <div style=\"font-weight: bold; text-transform: uppercase;\">\n      Dispose\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-card>\n    <ion-card-content>\n      <p>Description: CONTACTOR - 32A 240V 4 POLES (SCHNEIDER)</p>\n      <p>Category: ELECTRICAL ACCESSORIES</p>\n      <p>Quantity: 10</p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"block\" (click)=\"scanQrCode()\">Add More</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button expand=\"block\" (click)=\"submit()\">Submit</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-supervisor/dispose/dispose.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-supervisor/dispose/dispose.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"air-selangor-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <div style=\"font-weight: bold; text-transform: uppercase;\">\n      Dispose\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-card>\n    <ion-card-content>\n      <p>Description: CONTACTOR - 32A 240V 4 POLES (SCHNEIDER)</p>\n      <p>Category: ELECTRICAL ACCESSORIES</p>\n      <p>Quantity: 10</p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"block\" (click)=\"scanQrCode()\">Add More</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button expand=\"block\" (click)=\"submit()\">Submit</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/inventory/dispose/dispose-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/inventory/dispose/dispose-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: DisposePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisposePageRoutingModule", function() { return DisposePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dispose_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dispose.page */ "./src/app/pages/inventory/dispose/dispose.page.ts");




const routes = [
    {
        path: '',
        component: _dispose_page__WEBPACK_IMPORTED_MODULE_3__["DisposePage"]
    }
];
let DisposePageRoutingModule = class DisposePageRoutingModule {
};
DisposePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DisposePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/inventory/dispose/dispose.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/inventory/dispose/dispose.module.ts ***!
  \***********************************************************/
/*! exports provided: DisposePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisposePageModule", function() { return DisposePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _dispose_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dispose-routing.module */ "./src/app/pages/inventory/dispose/dispose-routing.module.ts");
/* harmony import */ var _dispose_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dispose.page */ "./src/app/pages/inventory/dispose/dispose.page.ts");







let DisposePageModule = class DisposePageModule {
};
DisposePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dispose_routing_module__WEBPACK_IMPORTED_MODULE_5__["DisposePageRoutingModule"]
        ],
        declarations: [_dispose_page__WEBPACK_IMPORTED_MODULE_6__["DisposePage"]]
    })
], DisposePageModule);



/***/ }),

/***/ "./src/app/pages/inventory/dispose/dispose.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/inventory/dispose/dispose.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-footer {\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wbnNiL0RvY3VtZW50cy9HaXRIdWIvYWlyc2VsLXJmaWQvbW9iaWxlL3NyYy9hcHAvcGFnZXMvaW52ZW50b3J5L2Rpc3Bvc2UvZGlzcG9zZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ludmVudG9yeS9kaXNwb3NlL2Rpc3Bvc2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludmVudG9yeS9kaXNwb3NlL2Rpc3Bvc2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZvb3RlciB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59IiwiaW9uLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/inventory/dispose/dispose.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/inventory/dispose/dispose.page.ts ***!
  \*********************************************************/
/*! exports provided: DisposePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisposePage", function() { return DisposePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




// import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
let DisposePage = class DisposePage {
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
DisposePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DisposePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-dispose",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dispose.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory/dispose/dispose.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dispose.page.scss */ "./src/app/pages/inventory/dispose/dispose.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], DisposePage);



/***/ }),

/***/ "./src/app/pages/store-keeper/dispose/dispose-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/store-keeper/dispose/dispose-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: DisposePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisposePageRoutingModule", function() { return DisposePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dispose_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dispose.page */ "./src/app/pages/store-keeper/dispose/dispose.page.ts");




const routes = [
    {
        path: '',
        component: _dispose_page__WEBPACK_IMPORTED_MODULE_3__["DisposePage"]
    }
];
let DisposePageRoutingModule = class DisposePageRoutingModule {
};
DisposePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DisposePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/store-keeper/dispose/dispose.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/store-keeper/dispose/dispose.module.ts ***!
  \**************************************************************/
/*! exports provided: DisposePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisposePageModule", function() { return DisposePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _dispose_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dispose-routing.module */ "./src/app/pages/store-keeper/dispose/dispose-routing.module.ts");
/* harmony import */ var _dispose_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dispose.page */ "./src/app/pages/store-keeper/dispose/dispose.page.ts");







let DisposePageModule = class DisposePageModule {
};
DisposePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dispose_routing_module__WEBPACK_IMPORTED_MODULE_5__["DisposePageRoutingModule"]
        ],
        declarations: [_dispose_page__WEBPACK_IMPORTED_MODULE_6__["DisposePage"]]
    })
], DisposePageModule);



/***/ }),

/***/ "./src/app/pages/store-keeper/dispose/dispose.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/store-keeper/dispose/dispose.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-footer {\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wbnNiL0RvY3VtZW50cy9HaXRIdWIvYWlyc2VsLXJmaWQvbW9iaWxlL3NyYy9hcHAvcGFnZXMvc3RvcmUta2VlcGVyL2Rpc3Bvc2UvZGlzcG9zZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N0b3JlLWtlZXBlci9kaXNwb3NlL2Rpc3Bvc2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0b3JlLWtlZXBlci9kaXNwb3NlL2Rpc3Bvc2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuIiwiaW9uLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/store-keeper/dispose/dispose.page.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/store-keeper/dispose/dispose.page.ts ***!
  \************************************************************/
/*! exports provided: DisposePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisposePage", function() { return DisposePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




// import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
let DisposePage = class DisposePage {
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
                link: '/store-keeper/dispose'
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
DisposePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DisposePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-dispose",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dispose.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-keeper/dispose/dispose.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dispose.page.scss */ "./src/app/pages/store-keeper/dispose/dispose.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], DisposePage);



/***/ }),

/***/ "./src/app/pages/store-supervisor/dispose/dispose-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/store-supervisor/dispose/dispose-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: DisposePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisposePageRoutingModule", function() { return DisposePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dispose_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dispose.page */ "./src/app/pages/store-supervisor/dispose/dispose.page.ts");




const routes = [
    {
        path: '',
        component: _dispose_page__WEBPACK_IMPORTED_MODULE_3__["DisposePage"]
    }
];
let DisposePageRoutingModule = class DisposePageRoutingModule {
};
DisposePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DisposePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/store-supervisor/dispose/dispose.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/store-supervisor/dispose/dispose.module.ts ***!
  \******************************************************************/
/*! exports provided: DisposePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisposePageModule", function() { return DisposePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _dispose_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dispose-routing.module */ "./src/app/pages/store-supervisor/dispose/dispose-routing.module.ts");
/* harmony import */ var _dispose_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dispose.page */ "./src/app/pages/store-supervisor/dispose/dispose.page.ts");







let DisposePageModule = class DisposePageModule {
};
DisposePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dispose_routing_module__WEBPACK_IMPORTED_MODULE_5__["DisposePageRoutingModule"]
        ],
        declarations: [_dispose_page__WEBPACK_IMPORTED_MODULE_6__["DisposePage"]]
    })
], DisposePageModule);



/***/ }),

/***/ "./src/app/pages/store-supervisor/dispose/dispose.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/store-supervisor/dispose/dispose.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-footer {\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wbnNiL0RvY3VtZW50cy9HaXRIdWIvYWlyc2VsLXJmaWQvbW9iaWxlL3NyYy9hcHAvcGFnZXMvc3RvcmUtc3VwZXJ2aXNvci9kaXNwb3NlL2Rpc3Bvc2UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdG9yZS1zdXBlcnZpc29yL2Rpc3Bvc2UvZGlzcG9zZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3RvcmUtc3VwZXJ2aXNvci9kaXNwb3NlL2Rpc3Bvc2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuIiwiaW9uLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/store-supervisor/dispose/dispose.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/store-supervisor/dispose/dispose.page.ts ***!
  \****************************************************************/
/*! exports provided: DisposePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisposePage", function() { return DisposePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




// import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
let DisposePage = class DisposePage {
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
                link: '/store-supervisor/dispose'
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
DisposePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DisposePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-dispose",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dispose.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-supervisor/dispose/dispose.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dispose.page.scss */ "./src/app/pages/store-supervisor/dispose/dispose.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], DisposePage);



/***/ })

}]);
//# sourceMappingURL=dispose-dispose-module-es2015.js.map