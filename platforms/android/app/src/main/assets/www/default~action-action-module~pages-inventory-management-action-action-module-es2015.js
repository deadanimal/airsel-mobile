(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~action-action-module~pages-inventory-management-action-action-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory-management/action/action.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory-management/action/action.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"homePage('/technical/tabs/tab1')\">\n        <ion-icon src=\"../../../../assets/icon/air-selangor-icon.svg\" style=\"font-size: 2rem\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title style=\"font-weight: bold\"> Action </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"clickLogout()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"openNotification()\">\n        <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n        <ion-badge size=\"small\" color=\"danger\" style=\"position: absolute; right: -5px; top: 1px\">\n          <!-- {{ notificationService.totalnotificationbyuser }} -->\n          10\n        </ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-card-content class=\"ion-text-center\" style=\"background-color: blueviolet;\">\n            <img src=\"../../../../assets/inventory/stock-receive.svg\" color=\"success\" style=\"width: 50%;\"\n              (click)=\"goToPage('/inventory-management/stock-receive')\" />\n            <div class=\"ion-padding-top\" style=\"color: black;\" (click)=\"stockReceiveInfo()\">Stock Receive <br>/ Return\n              <ion-icon name=\"information-circle\">\n              </ion-icon>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-card-content class=\"ion-text-center\" style=\"background-color: cadetblue;\">\n            <img src=\"../../../../assets/inventory/stock-issuance.svg\" style=\"width: 50%;\"\n              (click)=\"goToPage('/inventory-management/stock-issuance')\" />\n            <div class=\"ion-padding-top\" style=\"color: black;\" (click)=\"stockIssuanceInfo()\">Stock Issuance <br>/\n              Reversal <ion-icon name=\"information-circle\"></ion-icon>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-card-content class=\"ion-text-center\" style=\"background-color: chartreuse;\">\n            <img src=\"../../../../assets/inventory/return.svg\" style=\"width: 50%;\"\n              (click)=\"goToPage('/inventory-management/interwarehouse-transfer')\" />\n            <div class=\"ion-padding-top\" style=\"color: black;\" (click)=\"returnInfo()\">Interwarehouse <br> Transfer\n              <ion-icon name=\"information-circle\"></ion-icon>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-card-content class=\"ion-text-center\" style=\"background-color: coral;\">\n            <img src=\"../../../../assets/inventory/stock-count.svg\" style=\"width: 50%;\"\n              (click)=\"goToPage('/inventory-management/stock-count')\" />\n            <div class=\"ion-padding-top\" style=\"color: black;\" (click)=\"stockCountInfo()\">Stock <br> Count <ion-icon\n                name=\"information-circle\">\n              </ion-icon>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-card-content class=\"ion-text-center\" style=\"background-color: aqua;\">\n            <img src=\"../../../../assets/inventory/dispose.svg\" style=\"width: 50%;\"\n              (click)=\"goToPage('/inventory-management/stock-disposal')\" />\n            <div class=\"ion-padding-top\" style=\"color: black;\" (click)=\"disposeInfo()\">Stock <br> Disposal <ion-icon\n                name=\"information-circle\">\n              </ion-icon>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-card-content class=\"ion-text-center\" style=\"background-color: thistle;\">\n            <img src=\"../../../../assets/inventory/dispose.svg\" style=\"width: 50%;\"\n              (click)=\"goToPage('/inventory-management/subinventory-transfer')\" />\n            <div class=\"ion-padding-top\" style=\"color: black;\" (click)=\"disposeInfo()\">SubInventory <br> Transfer\n              <ion-icon name=\"information-circle\"></ion-icon>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/inventory-management/action/action-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/inventory-management/action/action-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: ActionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionPageRoutingModule", function() { return ActionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _action_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action.page */ "./src/app/pages/inventory-management/action/action.page.ts");




const routes = [
    {
        path: '',
        component: _action_page__WEBPACK_IMPORTED_MODULE_3__["ActionPage"]
    }
];
let ActionPageRoutingModule = class ActionPageRoutingModule {
};
ActionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ActionPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/inventory-management/action/action.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/inventory-management/action/action.module.ts ***!
  \********************************************************************/
/*! exports provided: ActionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionPageModule", function() { return ActionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _action_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action-routing.module */ "./src/app/pages/inventory-management/action/action-routing.module.ts");
/* harmony import */ var _action_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./action.page */ "./src/app/pages/inventory-management/action/action.page.ts");







let ActionPageModule = class ActionPageModule {
};
ActionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _action_routing_module__WEBPACK_IMPORTED_MODULE_5__["ActionPageRoutingModule"]
        ],
        declarations: [_action_page__WEBPACK_IMPORTED_MODULE_6__["ActionPage"]]
    })
], ActionPageModule);



/***/ }),

/***/ "./src/app/pages/inventory-management/action/action.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/inventory-management/action/action.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludmVudG9yeS1tYW5hZ2VtZW50L2FjdGlvbi9hY3Rpb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/inventory-management/action/action.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/inventory-management/action/action.page.ts ***!
  \******************************************************************/
/*! exports provided: ActionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionPage", function() { return ActionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




let ActionPage = class ActionPage {
    constructor(alertController, router) {
        this.alertController = alertController;
        this.router = router;
    }
    ngOnInit() {
    }
    stockReceiveInfo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Info',
                message: 'Stock Receive is initiate when user receive stock at store. The process start by scanning the QR code or RFID tag on stock using mobile phone or RFID scanner. After complete scanning all stock item, user will submit the information into the system.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    stockIssuanceInfo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Info',
                message: 'Stock Issuance is initiate when user want to issue stock from store. The process start by scanning the QR code or RFID tag on stock using mobile phone or RFID scanner. After complete scanning all stock item, user will submit the information into the system.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    returnInfo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Info',
                message: 'Return is initiate when user want to return stock to vendor. The process start by scanning the QR code or RFID tag on stock using mobile phone or RFID scanner. After complete scanning all stock item, user will submit the information into the system.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    stockCountInfo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Info',
                message: 'Stock Count is initiate when user want to do stock count in store. The process start by scanning the QR code or RFID tag on stock using mobile phone or RFID scanner. User able to made multiple scanning before submit. After complete scanning all stock item, user will submit the information into the system.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    disposeInfo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Info',
                message: 'Dispose is initiate when user want to dispose stock. The process start by scanning the QR code or RFID tag on stock using mobile phone or RFID scanner. After complete scanning all stock item, user will submit the information into the system.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    goToPage(link) {
        let navigationExtras = {
            state: {
                link: link
            }
        };
        this.router.navigate([link], navigationExtras);
    }
};
ActionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ActionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-action',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./action.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory-management/action/action.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./action.page.scss */ "./src/app/pages/inventory-management/action/action.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ActionPage);



/***/ })

}]);
//# sourceMappingURL=default~action-action-module~pages-inventory-management-action-action-module-es2015.js.map