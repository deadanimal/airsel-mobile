(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inter-warehouse-transfer-inter-warehouse-transfer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-supervisor/inter-warehouse-transfer/inter-warehouse-transfer.page.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-supervisor/inter-warehouse-transfer/inter-warehouse-transfer.page.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"air-selangor-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <div style=\"font-weight: bold; text-transform: uppercase;\">\n      Inter-Warehouse Transfer\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-card>\n    <ion-card-content>\n      <p>Description: CONTACTOR - 32A 240V 4 POLES (SCHNEIDER)</p>\n      <p>Category: ELECTRICAL ACCESSORIES</p>\n      <p>Quantity: 10</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n      <p>Description: CONTACTOR - 32A 240V 4 POLES (SCHNEIDER)</p>\n      <p>Category: ELECTRICAL ACCESSORIES</p>\n      <p>Quantity: 10</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n      <p>Description: CONTACTOR - 32A 240V 4 POLES (SCHNEIDER)</p>\n      <p>Category: ELECTRICAL ACCESSORIES</p>\n      <p>Quantity: 10</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n      <p>Description: CONTACTOR - 32A 240V 4 POLES (SCHNEIDER)</p>\n      <p>Category: ELECTRICAL ACCESSORIES</p>\n      <p>Quantity: 10</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n      <p>Description: CONTACTOR - 32A 240V 4 POLES (SCHNEIDER)</p>\n      <p>Category: ELECTRICAL ACCESSORIES</p>\n      <p>Quantity: 10</p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"block\" (click)=\"scanQrCode()\">Add More</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button expand=\"block\" (click)=\"selectWarehouseRadio()\">Select Warehouse</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/store-supervisor/inter-warehouse-transfer/inter-warehouse-transfer-routing.module.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/store-supervisor/inter-warehouse-transfer/inter-warehouse-transfer-routing.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: InterWarehouseTransferPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterWarehouseTransferPageRoutingModule", function() { return InterWarehouseTransferPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _inter_warehouse_transfer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inter-warehouse-transfer.page */ "./src/app/pages/store-supervisor/inter-warehouse-transfer/inter-warehouse-transfer.page.ts");




const routes = [
    {
        path: '',
        component: _inter_warehouse_transfer_page__WEBPACK_IMPORTED_MODULE_3__["InterWarehouseTransferPage"]
    }
];
let InterWarehouseTransferPageRoutingModule = class InterWarehouseTransferPageRoutingModule {
};
InterWarehouseTransferPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InterWarehouseTransferPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/store-supervisor/inter-warehouse-transfer/inter-warehouse-transfer.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/store-supervisor/inter-warehouse-transfer/inter-warehouse-transfer.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: InterWarehouseTransferPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterWarehouseTransferPageModule", function() { return InterWarehouseTransferPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _inter_warehouse_transfer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inter-warehouse-transfer-routing.module */ "./src/app/pages/store-supervisor/inter-warehouse-transfer/inter-warehouse-transfer-routing.module.ts");
/* harmony import */ var _inter_warehouse_transfer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inter-warehouse-transfer.page */ "./src/app/pages/store-supervisor/inter-warehouse-transfer/inter-warehouse-transfer.page.ts");







let InterWarehouseTransferPageModule = class InterWarehouseTransferPageModule {
};
InterWarehouseTransferPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inter_warehouse_transfer_routing_module__WEBPACK_IMPORTED_MODULE_5__["InterWarehouseTransferPageRoutingModule"]
        ],
        declarations: [_inter_warehouse_transfer_page__WEBPACK_IMPORTED_MODULE_6__["InterWarehouseTransferPage"]]
    })
], InterWarehouseTransferPageModule);



/***/ }),

/***/ "./src/app/pages/store-supervisor/inter-warehouse-transfer/inter-warehouse-transfer.page.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/store-supervisor/inter-warehouse-transfer/inter-warehouse-transfer.page.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-footer {\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wbnNiL0RvY3VtZW50cy9HaXRIdWIvYWlyc2VsLW1vYmlsZS9zcmMvYXBwL3BhZ2VzL3N0b3JlLXN1cGVydmlzb3IvaW50ZXItd2FyZWhvdXNlLXRyYW5zZmVyL2ludGVyLXdhcmVob3VzZS10cmFuc2Zlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N0b3JlLXN1cGVydmlzb3IvaW50ZXItd2FyZWhvdXNlLXRyYW5zZmVyL2ludGVyLXdhcmVob3VzZS10cmFuc2Zlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3RvcmUtc3VwZXJ2aXNvci9pbnRlci13YXJlaG91c2UtdHJhbnNmZXIvaW50ZXItd2FyZWhvdXNlLXRyYW5zZmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbiIsImlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/store-supervisor/inter-warehouse-transfer/inter-warehouse-transfer.page.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/store-supervisor/inter-warehouse-transfer/inter-warehouse-transfer.page.ts ***!
  \**************************************************************************************************/
/*! exports provided: InterWarehouseTransferPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterWarehouseTransferPage", function() { return InterWarehouseTransferPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




let InterWarehouseTransferPage = class InterWarehouseTransferPage {
    constructor(alertController, router) {
        this.alertController = alertController;
        this.router = router;
        this.warehouses = [
            {
                name: 'radio1',
                type: 'radio',
                label: 'SHAH ALAM - CENTRAL STORE',
                value: 'value1',
                checked: true
            },
            {
                name: 'radio2',
                type: 'radio',
                label: 'KLANG - STORE',
                value: 'value2',
            },
            {
                name: 'radio3',
                type: 'radio',
                label: 'PETALING - STORE',
                value: 'value3',
            },
            {
                name: 'radio4',
                type: 'radio',
                label: 'KUALA LANGAT - STORE',
                value: 'value4',
            },
            {
                name: 'radio5',
                type: 'radio',
                label: 'SUNGAI BATU - STORE',
                value: 'value5',
            },
            {
                name: 'radio6',
                type: 'radio',
                label: 'KUALA LUMPUR - STORE',
                value: 'value6',
            },
            {
                name: 'radio7',
                type: 'radio',
                label: 'SSP2 - STORE',
                value: 'value7',
            },
            {
                name: 'radio8',
                type: 'radio',
                label: 'KUALA SELANGOR - STORE',
                value: 'value8',
            },
            {
                name: 'radio9',
                type: 'radio',
                label: 'SABAK BERNAM - STORE',
                value: 'value9',
            },
            {
                name: 'radio10',
                type: 'radio',
                label: 'HULU SELANGOR - STORE',
                value: 'value10',
            },
            {
                name: 'radio11',
                type: 'radio',
                label: 'RANTAU PANJANG - STORE',
                value: 'value11',
            },
            {
                name: 'radio12',
                type: 'radio',
                label: 'SEMENYIH - STORE',
                value: 'value12',
            },
            {
                name: 'radio13',
                type: 'radio',
                label: 'SEMENYIH 2 - STORE',
                value: 'value13',
            },
            {
                name: 'radio14',
                type: 'radio',
                label: 'HULU LANGAT - STORE',
                value: 'value14',
            },
            {
                name: 'radio15',
                type: 'radio',
                label: 'SEPANG - STORE',
                value: 'value15',
            },
            {
                name: 'radio16',
                type: 'radio',
                label: 'SHAH ALAM - STORE',
                value: 'value16',
            },
            {
                name: 'radio17',
                type: 'radio',
                label: 'SUNGAI LANGAT - STORE',
                value: 'value17',
            },
        ];
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
    selectWarehouseRadio() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Select Warehouse',
                inputs: [
                    {
                        name: 'radio1',
                        type: 'radio',
                        label: 'SHAH ALAM - CENTRAL STORE',
                        value: 'value1',
                        checked: true
                    },
                    {
                        name: 'radio2',
                        type: 'radio',
                        label: 'KLANG - STORE',
                        value: 'value2',
                    },
                    {
                        name: 'radio3',
                        type: 'radio',
                        label: 'PETALING - STORE',
                        value: 'value3',
                    },
                    {
                        name: 'radio4',
                        type: 'radio',
                        label: 'KUALA LANGAT - STORE',
                        value: 'value4',
                    },
                    {
                        name: 'radio5',
                        type: 'radio',
                        label: 'SUNGAI BATU - STORE',
                        value: 'value5',
                    },
                    {
                        name: 'radio6',
                        type: 'radio',
                        label: 'KUALA LUMPUR - STORE',
                        value: 'value6',
                    },
                    {
                        name: 'radio7',
                        type: 'radio',
                        label: 'SSP2 - STORE',
                        value: 'value7',
                    },
                    {
                        name: 'radio8',
                        type: 'radio',
                        label: 'KUALA SELANGOR - STORE',
                        value: 'value8',
                    },
                    {
                        name: 'radio9',
                        type: 'radio',
                        label: 'SABAK BERNAM - STORE',
                        value: 'value9',
                    },
                    {
                        name: 'radio10',
                        type: 'radio',
                        label: 'HULU SELANGOR - STORE',
                        value: 'value10',
                    },
                    {
                        name: 'radio11',
                        type: 'radio',
                        label: 'RANTAU PANJANG - STORE',
                        value: 'value11',
                    },
                    {
                        name: 'radio12',
                        type: 'radio',
                        label: 'SEMENYIH - STORE',
                        value: 'value12',
                    },
                    {
                        name: 'radio13',
                        type: 'radio',
                        label: 'SEMENYIH 2 - STORE',
                        value: 'value13',
                    },
                    {
                        name: 'radio14',
                        type: 'radio',
                        label: 'HULU LANGAT - STORE',
                        value: 'value14',
                    },
                    {
                        name: 'radio15',
                        type: 'radio',
                        label: 'SEPANG - STORE',
                        value: 'value15',
                    },
                    {
                        name: 'radio16',
                        type: 'radio',
                        label: 'SHAH ALAM - STORE',
                        value: 'value16',
                    },
                    {
                        name: 'radio17',
                        type: 'radio',
                        label: 'SUNGAI LANGAT - STORE',
                        value: 'value17',
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => { }
                    }, {
                        text: 'Submit',
                        handler: () => {
                            this.submit();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    scanQrCode() {
        let navigationExtras = {
            state: {
                link: '/store-supervisor/inter-warehouse-transfer'
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
InterWarehouseTransferPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
InterWarehouseTransferPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inter-warehouse-transfer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inter-warehouse-transfer.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-supervisor/inter-warehouse-transfer/inter-warehouse-transfer.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inter-warehouse-transfer.page.scss */ "./src/app/pages/store-supervisor/inter-warehouse-transfer/inter-warehouse-transfer.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], InterWarehouseTransferPage);



/***/ })

}]);
//# sourceMappingURL=inter-warehouse-transfer-inter-warehouse-transfer-module-es2015.js.map