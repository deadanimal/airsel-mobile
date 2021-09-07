(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-inventory-management-stock-disposal-stock-disposal-module~stock-disposal-stock-disposal-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory-management/stock-disposal/stock-disposal.page.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory-management/stock-disposal/stock-disposal.page.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\n  <ion-toolbar mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"homePage('/technical/tabs/tab1')\">\n        <ion-icon src=\"../../../../assets/icon/air-selangor-icon.svg\" style=\"font-size: 2rem\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title style=\"font-weight: bold\"> Stock Disposal </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"clickLogout()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"openNotification()\">\n        <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n        <ion-badge size=\"small\" color=\"danger\" style=\"position: absolute; right: -5px; top: 1px\">\n          <!-- {{ notificationService.totalnotificationbyuser }} -->\n          10\n        </ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-toolbar class=\"ion-no-border toolbar-core\">\n    <ion-segment [(ngModel)]=\"type\">\n      <ion-segment-button value=\"toreceive\">\n        <ion-label style=\"font-weight: bold;color:black;\">Inventory</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"delivered\">\n        <ion-label style=\"font-weight: bold;color:black;\">Non Inventory</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div [ngSwitch]=\"type\">\n    <div *ngSwitchCase=\"'toreceive'\">\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-card>\n            <ion-card-content>\n              <ion-row>\n                <ion-col size=\"9\">\n                  <p>Purchase Order 3231414</p>\n                  <p>Expected Date Of Delivery </p>\n                  <p>on 20 Apr 2021</p>\n                </ion-col>\n                <ion-col size=\"3\" style=\"padding-top: 15px;\" class=\"ion-text-right\">\n                  <ion-button (click)=\"openListItem()\">Scan</ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-card>\n            <ion-card-content>\n              <ion-row>\n                <ion-col size=\"9\">\n                  <p>Purchase Order 5265461</p>\n                  <p>Expected Date Of Delivery </p>\n                  <p>on 20 Apr 2021</p>\n                </ion-col>\n                <ion-col size=\"3\" style=\"padding-top: 15px;\" class=\"ion-text-right\">\n                  <ion-button (click)=\"openListItem()\">Scan</ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-card>\n            <ion-card-content>\n              <ion-row>\n                <ion-col size=\"9\">\n                  <p>Purchase Order 5265461</p>\n                  <p>Expected Date Of Delivery </p>\n                  <p>on 20 Apr 2021</p>\n                </ion-col>\n                <ion-col size=\"3\" style=\"padding-top: 15px;\" class=\"ion-text-right\">\n                  <ion-button (click)=\"openListItem()\">Scan</ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div *ngSwitchCase=\"'delivered'\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\" class=\"ion-text-center\">\n            <ion-item>\n              <ion-label position=\"stacked\">Start Date</ion-label>\n              <ion-datetime displayFormat=\"DD-MM-YYYY\" placeholder=\"Select date\"></ion-datetime>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\" class=\"ion-text-center\">\n            <ion-item>\n              <ion-label position=\"stacked\">End Date</ion-label>\n              <ion-datetime displayFormat=\"DD-MM-YYYY\" placeholder=\"Select date\"></ion-datetime>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-card>\n        <ion-card-content>\n          <p>Purchase Order 3231414</p>\n          <p>Placed on 04 Apr 2020</p>\n          <p>Paid on 04 Apr 2020</p>\n          <p>Expected Date of Delivery on 20 Apr 2020</p>\n          <hr />\n          <p>CONTACTOR - 32A 240V 4 POLES (SCHNEIDER)</p>\n          <p>EACT000005</p>\n          <p>QTY 2</p>\n          <hr />\n          <p>CONTACTOR (MAGNETIC) - 3TF54 22-OXL2 132kW (SIEMENS)</p>\n          <p>EACT010010</p>\n          <p>QTY 10</p>\n          <hr />\n          <p>CONTACTOR (MAGNETIC) - LC1D50M7</p>\n          <p>EACT010018</p>\n          <p>QTY 1</p>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/inventory-management/stock-disposal/stock-disposal-routing.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/inventory-management/stock-disposal/stock-disposal-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: StockDisposalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockDisposalPageRoutingModule", function() { return StockDisposalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _stock_disposal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stock-disposal.page */ "./src/app/pages/inventory-management/stock-disposal/stock-disposal.page.ts");




const routes = [
    {
        path: '',
        component: _stock_disposal_page__WEBPACK_IMPORTED_MODULE_3__["StockDisposalPage"]
    }
];
let StockDisposalPageRoutingModule = class StockDisposalPageRoutingModule {
};
StockDisposalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StockDisposalPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/inventory-management/stock-disposal/stock-disposal.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/inventory-management/stock-disposal/stock-disposal.module.ts ***!
  \************************************************************************************/
/*! exports provided: StockDisposalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockDisposalPageModule", function() { return StockDisposalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _stock_disposal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stock-disposal-routing.module */ "./src/app/pages/inventory-management/stock-disposal/stock-disposal-routing.module.ts");
/* harmony import */ var _stock_disposal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stock-disposal.page */ "./src/app/pages/inventory-management/stock-disposal/stock-disposal.page.ts");







let StockDisposalPageModule = class StockDisposalPageModule {
};
StockDisposalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _stock_disposal_routing_module__WEBPACK_IMPORTED_MODULE_5__["StockDisposalPageRoutingModule"]
        ],
        declarations: [_stock_disposal_page__WEBPACK_IMPORTED_MODULE_6__["StockDisposalPage"]]
    })
], StockDisposalPageModule);



/***/ }),

/***/ "./src/app/pages/inventory-management/stock-disposal/stock-disposal.page.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/inventory-management/stock-disposal/stock-disposal.page.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludmVudG9yeS1tYW5hZ2VtZW50L3N0b2NrLWRpc3Bvc2FsL3N0b2NrLWRpc3Bvc2FsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/inventory-management/stock-disposal/stock-disposal.page.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/inventory-management/stock-disposal/stock-disposal.page.ts ***!
  \**********************************************************************************/
/*! exports provided: StockDisposalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockDisposalPage", function() { return StockDisposalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _list_item_list_item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../list-item/list-item.page */ "./src/app/pages/inventory-management/list-item/list-item.page.ts");




let StockDisposalPage = class StockDisposalPage {
    constructor(alertController, modalController) {
        this.alertController = alertController;
        this.modalController = modalController;
        this.type = "toreceive";
        this.category = "All";
        this.categorys = ["All", "CM", "PM"];
        // lists
        this.pendings = [
            {
                type: "CM",
                date: "14 February 2020",
                desc: "Maintenance need to do at Petaling zone near......",
                color: "success"
            },
            {
                type: "CM",
                date: "12 February 2020",
                desc: "There have a water leakage at Sepang zone that......",
                color: "warning"
            },
            {
                type: "PM",
                date: "13 February 2020",
                desc: "Need to replace components at Kuala Lumpur zone......",
                color: "danger"
            },
            {
                type: "PM",
                date: "11 February 2020",
                desc: "Gombak have a water disrupted at 10.00 am......",
                color: "danger"
            },
        ];
        this.completeds = [
            {
                id: "WORKORDER-2020-00011",
                desc: "Services have been done at Petaling zone at......",
            },
            {
                id: "WORKORDER-2020-00009",
                desc: "Kuala Lumpur service have been completed at......",
            },
            {
                id: "WORKORDER-2020-00007",
                desc: "Sepang zone water disruption have been lifted off at......",
            },
            {
                id: "WORKORDER-2020-00006",
                desc: "Gombak zone have been completely run so far so good......",
            },
            {
                id: "WORKORDER-2020-00005",
                desc: "Hulu Langat area have back to normal......",
            },
        ];
        this.approvals = [
            {
                dateOfSubmission: "2020-03-03",
                assetName: "SLUICE VALVE-SLUICE VALVE-GROUND-200-MM",
                quantity: "11",
                status: "approve",
            },
            {
                dateOfSubmission: "2020-03-02",
                assetName: "SLUICE VALVE-SCOUR VALVE-GROUND-150-MM",
                quantity: "7",
                status: "reject",
            },
            {
                dateOfSubmission: "2020-03-01",
                assetName: "MECHANICAL LEVEL INDICATOR-LEVEL INDICATOR-ABOVE GROUND",
                quantity: "5",
                status: "reject",
            },
            {
                dateOfSubmission: "2020-03-01",
                assetName: "MECHANICAL LEVEL INDICATOR-LEVEL INDICATOR-ABOVE GROUND",
                quantity: "5",
                status: "pending",
            },
            {
                dateOfSubmission: "2020-03-01",
                assetName: "MECHANICAL LEVEL INDICATOR-LEVEL INDICATOR-ABOVE GROUND",
                quantity: "5",
                status: "pending",
            },
        ];
    }
    ngOnInit() {
        this.items = this.pendings;
    }
    initializeItems() {
        this.pendings = this.items;
    }
    categorySelect() {
        this.initializeItems();
        this.pendings = this.pendings.filter((pending) => {
            if (this.category == "All")
                return true;
            else
                return (pending.type.toLowerCase().indexOf(this.category.toLowerCase()) > -1);
        });
    }
    notesAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Notes",
                message: "Your submission is rejected due to wrong asset information. Please resubmit again. Thank you.",
                buttons: ["OK"],
            });
            yield alert.present();
        });
    }
    openListItem() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _list_item_list_item_page__WEBPACK_IMPORTED_MODULE_3__["ListItemPage"]
            });
            return yield modal.present();
        });
    }
};
StockDisposalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
StockDisposalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stock-disposal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stock-disposal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory-management/stock-disposal/stock-disposal.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stock-disposal.page.scss */ "./src/app/pages/inventory-management/stock-disposal/stock-disposal.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], StockDisposalPage);



/***/ })

}]);
//# sourceMappingURL=default~pages-inventory-management-stock-disposal-stock-disposal-module~stock-disposal-stock-disposal-module-es2015.js.map