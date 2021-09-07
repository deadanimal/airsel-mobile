function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["submit-submit-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operator/submit/submit.page.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operator/submit/submit.page.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOperatorSubmitSubmitPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\" mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"font-weight: bold;\">\n      Submit\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content-core\">\n  <ion-card *ngFor=\"let asset of assets\">\n    <ion-card-header>\n      <ion-card-title>Asset ID: {{ asset.assetId }}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>Action: {{ asset.action }}</p>\n      <p>Asset Name: {{ asset.assetName }}</p>\n      <p>Asset Location: {{ asset.assetLocation }}</p>\n\n      <div class=\"ion-padding\">\n        <div class=\"ion-float-left\">\n          <ion-button fill=\"clear\" [routerLink]=\"['/operator/tabs/tab2']\">\n            <ion-icon slot=\"icon-only\" name=\"build\" ></ion-icon>\n          </ion-button>\n        </div>\n        <div class=\"ion-float-right\">\n          <ion-button fill=\"clear\" (click)=\"deleteAlertConfirm()\">\n            <ion-icon slot=\"icon-only\" name=\"trash\" color=\"danger\"></ion-icon>\n          </ion-button>\n        </div>\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n  <div class=\"ion-text-center ion-padding\">\n    <ion-button (click)=\"submitAlert()\">Submit</ion-button>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/submit/submit.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/submit/submit.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTechnicalSubmitSubmitPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\" mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"font-weight: bold;\">\n      Submit\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content-core\">\n  <ion-card *ngFor=\"let asset of assets\">\n    <ion-card-header>\n      <ion-card-title>Asset ID: {{ asset.assetId }}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>Action: {{ asset.action }}</p>\n      <p>Asset Name: {{ asset.assetName }}</p>\n      <p>Asset Location: {{ asset.assetLocation }}</p>\n\n      <div class=\"ion-padding\">\n        <div class=\"ion-float-left\">\n          <ion-button fill=\"clear\" [routerLink]=\"['/technical/tabs/tab2']\">\n            <ion-icon slot=\"icon-only\" name=\"build\" ></ion-icon>\n          </ion-button>\n        </div>\n        <div class=\"ion-float-right\">\n          <ion-button fill=\"clear\" (click)=\"deleteAlertConfirm()\">\n            <ion-icon slot=\"icon-only\" name=\"trash\" color=\"danger\"></ion-icon>\n          </ion-button>\n        </div>\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n  <div class=\"ion-text-center ion-padding\">\n    <ion-button (click)=\"submitAlert()\">Submit</ion-button>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/operator/submit/submit-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/operator/submit/submit-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: SubmitPageRoutingModule */

  /***/
  function srcAppPagesOperatorSubmitSubmitRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubmitPageRoutingModule", function () {
      return SubmitPageRoutingModule;
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


    var _submit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./submit.page */
    "./src/app/pages/operator/submit/submit.page.ts");

    var routes = [{
      path: '',
      component: _submit_page__WEBPACK_IMPORTED_MODULE_3__["SubmitPage"]
    }];

    var SubmitPageRoutingModule = function SubmitPageRoutingModule() {
      _classCallCheck(this, SubmitPageRoutingModule);
    };

    SubmitPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SubmitPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/operator/submit/submit.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/operator/submit/submit.module.ts ***!
    \********************************************************/

  /*! exports provided: SubmitPageModule */

  /***/
  function srcAppPagesOperatorSubmitSubmitModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubmitPageModule", function () {
      return SubmitPageModule;
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


    var _submit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./submit-routing.module */
    "./src/app/pages/operator/submit/submit-routing.module.ts");
    /* harmony import */


    var _submit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./submit.page */
    "./src/app/pages/operator/submit/submit.page.ts");

    var SubmitPageModule = function SubmitPageModule() {
      _classCallCheck(this, SubmitPageModule);
    };

    SubmitPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _submit_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubmitPageRoutingModule"]],
      declarations: [_submit_page__WEBPACK_IMPORTED_MODULE_6__["SubmitPage"]]
    })], SubmitPageModule);
    /***/
  },

  /***/
  "./src/app/pages/operator/submit/submit.page.scss":
  /*!********************************************************!*\
    !*** ./src/app/pages/operator/submit/submit.page.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOperatorSubmitSubmitPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29wZXJhdG9yL3N1Ym1pdC9zdWJtaXQucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/operator/submit/submit.page.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/operator/submit/submit.page.ts ***!
    \******************************************************/

  /*! exports provided: SubmitPage */

  /***/
  function srcAppPagesOperatorSubmitSubmitPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubmitPage", function () {
      return SubmitPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var SubmitPage =
    /*#__PURE__*/
    function () {
      function SubmitPage(alertController, router) {
        _classCallCheck(this, SubmitPage);

        this.alertController = alertController;
        this.router = router;
        this.assets = [{
          assetId: "123-XX",
          action: "Asset Registration",
          assetName: "Pump",
          assetLocation: "TAMAN DAHLIA PUMP HOUSE"
        }, {
          assetId: "125-KP",
          action: "Asset Return",
          assetName: "Valve",
          assetLocation: "TAMAN DAHLIA PUMP HOUSE"
        }, {
          assetId: "999-ZZ",
          action: "Retire",
          assetName: "Pump",
          assetLocation: "TAMAN DAHLIA PUMP HOUSE"
        }];
      }

      _createClass(SubmitPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submitAlert",
        value: function submitAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: "Submit",
                      message: "Your asset is successfully submitted into the system. Thank you.",
                      buttons: ["OK"]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "deleteAlertConfirm",
        value: function deleteAlertConfirm() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: "Delete",
                      message: "DO you want to delete this asset?",
                      buttons: [{
                        text: "No",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: function handler(blah) {
                          console.log("no clicked");
                        }
                      }, {
                        text: "Yes",
                        handler: function handler() {
                          console.log("yes clicked");
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "clickLogout",
        value: function clickLogout() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      header: 'Logout',
                      message: 'Are you want to logout?',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler() {}
                      }, {
                        text: 'Yes, logout it!',
                        handler: function handler() {
                          _this.router.navigate(['/']);
                        }
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return SubmitPage;
    }();

    SubmitPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    SubmitPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-submit",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./submit.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operator/submit/submit.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./submit.page.scss */
      "./src/app/pages/operator/submit/submit.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], SubmitPage);
    /***/
  },

  /***/
  "./src/app/pages/technical/submit/submit-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/technical/submit/submit-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: SubmitPageRoutingModule */

  /***/
  function srcAppPagesTechnicalSubmitSubmitRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubmitPageRoutingModule", function () {
      return SubmitPageRoutingModule;
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


    var _submit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./submit.page */
    "./src/app/pages/technical/submit/submit.page.ts");

    var routes = [{
      path: '',
      component: _submit_page__WEBPACK_IMPORTED_MODULE_3__["SubmitPage"]
    }];

    var SubmitPageRoutingModule = function SubmitPageRoutingModule() {
      _classCallCheck(this, SubmitPageRoutingModule);
    };

    SubmitPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SubmitPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/technical/submit/submit.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/technical/submit/submit.module.ts ***!
    \*********************************************************/

  /*! exports provided: SubmitPageModule */

  /***/
  function srcAppPagesTechnicalSubmitSubmitModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubmitPageModule", function () {
      return SubmitPageModule;
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


    var _submit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./submit-routing.module */
    "./src/app/pages/technical/submit/submit-routing.module.ts");
    /* harmony import */


    var _submit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./submit.page */
    "./src/app/pages/technical/submit/submit.page.ts");

    var SubmitPageModule = function SubmitPageModule() {
      _classCallCheck(this, SubmitPageModule);
    };

    SubmitPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _submit_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubmitPageRoutingModule"]],
      declarations: [_submit_page__WEBPACK_IMPORTED_MODULE_6__["SubmitPage"]]
    })], SubmitPageModule);
    /***/
  },

  /***/
  "./src/app/pages/technical/submit/submit.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/technical/submit/submit.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTechnicalSubmitSubmitPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlY2huaWNhbC9zdWJtaXQvc3VibWl0LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/technical/submit/submit.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/technical/submit/submit.page.ts ***!
    \*******************************************************/

  /*! exports provided: SubmitPage */

  /***/
  function srcAppPagesTechnicalSubmitSubmitPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubmitPage", function () {
      return SubmitPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var SubmitPage =
    /*#__PURE__*/
    function () {
      function SubmitPage(alertController, menu) {
        _classCallCheck(this, SubmitPage);

        this.alertController = alertController;
        this.menu = menu;
        this.assets = [{
          assetId: "123-XX",
          action: "Asset Registration",
          assetName: "Pump",
          assetLocation: "TAMAN DAHLIA PUMP HOUSE"
        }, {
          assetId: "125-KP",
          action: "Asset Return",
          assetName: "Valve",
          assetLocation: "TAMAN DAHLIA PUMP HOUSE"
        }, {
          assetId: "999-ZZ",
          action: "Retire",
          assetName: "Pump",
          assetLocation: "TAMAN DAHLIA PUMP HOUSE"
        }];
      }

      _createClass(SubmitPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.menu.enable(false, "menuNotification");
        }
      }, {
        key: "submitAlert",
        value: function submitAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertController.create({
                      header: "Submit",
                      message: "Your asset is successfully submitted into the system. Thank you.",
                      buttons: ["OK"]
                    });

                  case 2:
                    alert = _context4.sent;
                    _context4.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "deleteAlertConfirm",
        value: function deleteAlertConfirm() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertController.create({
                      header: "Delete",
                      message: "DO you want to delete this asset?",
                      buttons: [{
                        text: "No",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: function handler(blah) {
                          console.log("no clicked");
                        }
                      }, {
                        text: "Yes",
                        handler: function handler() {
                          console.log("yes clicked");
                        }
                      }]
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return SubmitPage;
    }();

    SubmitPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }];
    };

    SubmitPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-submit",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./submit.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/submit/submit.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./submit.page.scss */
      "./src/app/pages/technical/submit/submit.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])], SubmitPage);
    /***/
  }
}]);
//# sourceMappingURL=submit-submit-module-es5.js.map