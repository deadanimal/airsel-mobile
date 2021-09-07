(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reversal-reversal-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-supervisor/reversal/reversal.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-supervisor/reversal/reversal.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"air-selangor-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <div style=\"font-weight: bold; text-transform: uppercase;\">\n      Reversal\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-card>\n    <ion-card-content>\n      <p>Description: CONTACTOR - 32A 240V 4 POLES (SCHNEIDER)</p>\n      <p>Category: ELECTRICAL ACCESSORIES</p>\n      <p>Quantity: 10</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n      <p>Description: CONTACTOR - 32A 240V 4 POLES (SCHNEIDER)</p>\n      <p>Category: ELECTRICAL ACCESSORIES</p>\n      <p>Quantity: 10</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n      <p>Description: CONTACTOR - 32A 240V 4 POLES (SCHNEIDER)</p>\n      <p>Category: ELECTRICAL ACCESSORIES</p>\n      <p>Quantity: 10</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n      <p>Description: CONTACTOR - 32A 240V 4 POLES (SCHNEIDER)</p>\n      <p>Category: ELECTRICAL ACCESSORIES</p>\n      <p>Quantity: 10</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n      <p>Description: CONTACTOR - 32A 240V 4 POLES (SCHNEIDER)</p>\n      <p>Category: ELECTRICAL ACCESSORIES</p>\n      <p>Quantity: 10</p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"block\" (click)=\"scanQrCode()\">Add More</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button expand=\"block\" (click)=\"submit()\">Submit</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/store-supervisor/reversal/reversal-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/store-supervisor/reversal/reversal-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: ReversalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReversalPageRoutingModule", function() { return ReversalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _reversal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reversal.page */ "./src/app/pages/store-supervisor/reversal/reversal.page.ts");




const routes = [
    {
        path: '',
        component: _reversal_page__WEBPACK_IMPORTED_MODULE_3__["ReversalPage"]
    }
];
let ReversalPageRoutingModule = class ReversalPageRoutingModule {
};
ReversalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReversalPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/store-supervisor/reversal/reversal.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/store-supervisor/reversal/reversal.module.ts ***!
  \********************************************************************/
/*! exports provided: ReversalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReversalPageModule", function() { return ReversalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _reversal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reversal-routing.module */ "./src/app/pages/store-supervisor/reversal/reversal-routing.module.ts");
/* harmony import */ var _reversal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reversal.page */ "./src/app/pages/store-supervisor/reversal/reversal.page.ts");







let ReversalPageModule = class ReversalPageModule {
};
ReversalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reversal_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReversalPageRoutingModule"]
        ],
        declarations: [_reversal_page__WEBPACK_IMPORTED_MODULE_6__["ReversalPage"]]
    })
], ReversalPageModule);



/***/ }),

/***/ "./src/app/pages/store-supervisor/reversal/reversal.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/store-supervisor/reversal/reversal.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-footer {\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wbnNiL0RvY3VtZW50cy9HaXRIdWIvYWlyc2VsLXJmaWQvbW9iaWxlL3NyYy9hcHAvcGFnZXMvc3RvcmUtc3VwZXJ2aXNvci9yZXZlcnNhbC9yZXZlcnNhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N0b3JlLXN1cGVydmlzb3IvcmV2ZXJzYWwvcmV2ZXJzYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0b3JlLXN1cGVydmlzb3IvcmV2ZXJzYWwvcmV2ZXJzYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuIiwiaW9uLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/store-supervisor/reversal/reversal.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/store-supervisor/reversal/reversal.page.ts ***!
  \******************************************************************/
/*! exports provided: ReversalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReversalPage", function() { return ReversalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




let ReversalPage = class ReversalPage {
    constructor(alertController, router) {
        this.alertController = alertController;
        this.router = router;
    }
    ngOnInit() {
    }
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
                link: '/store-supervisor/reversal'
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
ReversalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ReversalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reversal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reversal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-supervisor/reversal/reversal.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reversal.page.scss */ "./src/app/pages/store-supervisor/reversal/reversal.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ReversalPage);



/***/ })

}]);
//# sourceMappingURL=reversal-reversal-module-es2015.js.map