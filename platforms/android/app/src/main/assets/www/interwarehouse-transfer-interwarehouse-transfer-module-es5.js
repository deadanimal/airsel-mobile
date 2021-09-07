function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["interwarehouse-transfer-interwarehouse-transfer-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory-management/interwarehouse-transfer/interwarehouse-transfer.page.html":
  /*!********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory-management/interwarehouse-transfer/interwarehouse-transfer.page.html ***!
    \********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInventoryManagementInterwarehouseTransferInterwarehouseTransferPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"homePage('/technical/tabs/tab1')\">\n        <ion-icon src=\"../../../../assets/icon/air-selangor-icon.svg\" style=\"font-size: 2rem\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title style=\"font-weight: bold\"> Interwarehouse Transfer </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"clickLogout()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"openNotification()\">\n        <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n        <ion-badge size=\"small\" color=\"danger\" style=\"position: absolute; right: -5px; top: 1px\">\n          <!-- {{ notificationService.totalnotificationbyuser }} -->\n          10\n        </ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-card>\n        <ion-card-content>\n          <ion-row>\n            <ion-col size=\"9\">\n              <p>Purchase Order 3231414</p>\n              <p>Expected Date Of Delivery </p>\n              <p>on 20 Apr 2021</p>\n            </ion-col>\n            <ion-col size=\"3\" style=\"padding-top: 15px;\" class=\"ion-text-right\">\n              <ion-button (click)=\"openListItem()\">List</ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-card>\n        <ion-card-content>\n          <ion-row>\n            <ion-col size=\"9\">\n              <p>Purchase Order 5265461</p>\n              <p>Expected Date Of Delivery </p>\n              <p>on 20 Apr 2021</p>\n            </ion-col>\n            <ion-col size=\"3\" style=\"padding-top: 15px;\" class=\"ion-text-right\">\n              <ion-button (click)=\"openListItem()\">List</ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-card>\n        <ion-card-content>\n          <ion-row>\n            <ion-col size=\"9\">\n              <p>Purchase Order 5265461</p>\n              <p>Expected Date Of Delivery </p>\n              <p>on 20 Apr 2021</p>\n            </ion-col>\n            <ion-col size=\"3\" style=\"padding-top: 15px;\" class=\"ion-text-right\">\n              <ion-button (click)=\"openListItem()\">List</ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/inventory-management/interwarehouse-transfer/interwarehouse-transfer-routing.module.ts":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/pages/inventory-management/interwarehouse-transfer/interwarehouse-transfer-routing.module.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: InterwarehouseTransferPageRoutingModule */

  /***/
  function srcAppPagesInventoryManagementInterwarehouseTransferInterwarehouseTransferRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InterwarehouseTransferPageRoutingModule", function () {
      return InterwarehouseTransferPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _interwarehouse_transfer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./interwarehouse-transfer.page */
    "./src/app/pages/inventory-management/interwarehouse-transfer/interwarehouse-transfer.page.ts");

    var routes = [{
      path: '',
      component: _interwarehouse_transfer_page__WEBPACK_IMPORTED_MODULE_3__["InterwarehouseTransferPage"]
    }];

    var InterwarehouseTransferPageRoutingModule = function InterwarehouseTransferPageRoutingModule() {
      _classCallCheck(this, InterwarehouseTransferPageRoutingModule);
    };

    InterwarehouseTransferPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], InterwarehouseTransferPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/inventory-management/interwarehouse-transfer/interwarehouse-transfer.module.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/pages/inventory-management/interwarehouse-transfer/interwarehouse-transfer.module.ts ***!
    \******************************************************************************************************/

  /*! exports provided: InterwarehouseTransferPageModule */

  /***/
  function srcAppPagesInventoryManagementInterwarehouseTransferInterwarehouseTransferModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InterwarehouseTransferPageModule", function () {
      return InterwarehouseTransferPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _interwarehouse_transfer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./interwarehouse-transfer-routing.module */
    "./src/app/pages/inventory-management/interwarehouse-transfer/interwarehouse-transfer-routing.module.ts");
    /* harmony import */


    var _interwarehouse_transfer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./interwarehouse-transfer.page */
    "./src/app/pages/inventory-management/interwarehouse-transfer/interwarehouse-transfer.page.ts");

    var InterwarehouseTransferPageModule = function InterwarehouseTransferPageModule() {
      _classCallCheck(this, InterwarehouseTransferPageModule);
    };

    InterwarehouseTransferPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _interwarehouse_transfer_routing_module__WEBPACK_IMPORTED_MODULE_5__["InterwarehouseTransferPageRoutingModule"]],
      declarations: [_interwarehouse_transfer_page__WEBPACK_IMPORTED_MODULE_6__["InterwarehouseTransferPage"]]
    })], InterwarehouseTransferPageModule);
    /***/
  },

  /***/
  "./src/app/pages/inventory-management/interwarehouse-transfer/interwarehouse-transfer.page.scss":
  /*!******************************************************************************************************!*\
    !*** ./src/app/pages/inventory-management/interwarehouse-transfer/interwarehouse-transfer.page.scss ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInventoryManagementInterwarehouseTransferInterwarehouseTransferPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludmVudG9yeS1tYW5hZ2VtZW50L2ludGVyd2FyZWhvdXNlLXRyYW5zZmVyL2ludGVyd2FyZWhvdXNlLXRyYW5zZmVyLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/inventory-management/interwarehouse-transfer/interwarehouse-transfer.page.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/pages/inventory-management/interwarehouse-transfer/interwarehouse-transfer.page.ts ***!
    \****************************************************************************************************/

  /*! exports provided: InterwarehouseTransferPage */

  /***/
  function srcAppPagesInventoryManagementInterwarehouseTransferInterwarehouseTransferPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InterwarehouseTransferPage", function () {
      return InterwarehouseTransferPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var InterwarehouseTransferPage =
    /*#__PURE__*/
    function () {
      function InterwarehouseTransferPage() {
        _classCallCheck(this, InterwarehouseTransferPage);
      }

      _createClass(InterwarehouseTransferPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InterwarehouseTransferPage;
    }();

    InterwarehouseTransferPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-interwarehouse-transfer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./interwarehouse-transfer.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory-management/interwarehouse-transfer/interwarehouse-transfer.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./interwarehouse-transfer.page.scss */
      "./src/app/pages/inventory-management/interwarehouse-transfer/interwarehouse-transfer.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], InterwarehouseTransferPage);
    /***/
  }
}]);
//# sourceMappingURL=interwarehouse-transfer-interwarehouse-transfer-module-es5.js.map