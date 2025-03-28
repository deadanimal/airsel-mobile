function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~operational-reading-list-operational-reading-list-module~pages-technical-operational-reading~1dffa3e2"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/operational-reading-list/operational-reading-list.page.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/operational-reading-list/operational-reading-list.page.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTechnicalOperationalReadingListOperationalReadingListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"homePage('/technical/tabs/tab1')\">\n        <ion-icon src=\"../../../../assets/icon/air-selangor-icon.svg\" style=\"font-size: 2rem\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title style=\"font-weight: bold\"> Operational Reading </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openNotification()\">\n        <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n        <ion-badge size=\"small\" color=\"danger\" style=\"position: absolute; right: -5px; top: 1px\">\n          {{ notificationService.totalnotificationbyuser }}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content-core\">\n  <div class=\"ion-padding\">\n    <div class=\"ion-text-center\">\n      <ion-button color=\"primary\" (click)=\"clickNew()\">Update</ion-button>\n    </div>\n    <ion-card *ngFor=\"let operationalreading of operationalreadings\">\n      <ion-card-header>\n        <ion-fab horizontal=\"end\">\n          <ion-fab-button size=\"small\" color=\"primary\" (click)=\"clickEdit(operationalreading)\">\n            <ion-icon name=\"document-text\"></ion-icon>\n          </ion-fab-button>\n          <!-- <ion-fab-button\n            size=\"small\"\n            color=\"danger\"\n            (click)=\"clickRemove(i)\"\n          >\n            <ion-icon name=\"trash\"></ion-icon>\n          </ion-fab-button> -->\n        </ion-fab>\n        <ion-card-title>Badge Number<br />{{ operationalreading.badge_number }}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p>Asset ID: {{ operationalreading.asset_id }}</p>\n        <p>Created Date: {{ operationalreading.created_date | date:'dd/MM/yyyy' }}</p>\n        <p>Status: Operational Reading Updated</p>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/technical/operational-reading-list/operational-reading-list-routing.module.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/pages/technical/operational-reading-list/operational-reading-list-routing.module.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: OperationalReadingListPageRoutingModule */

  /***/
  function srcAppPagesTechnicalOperationalReadingListOperationalReadingListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OperationalReadingListPageRoutingModule", function () {
      return OperationalReadingListPageRoutingModule;
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


    var _operational_reading_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./operational-reading-list.page */
    "./src/app/pages/technical/operational-reading-list/operational-reading-list.page.ts");

    var routes = [{
      path: '',
      component: _operational_reading_list_page__WEBPACK_IMPORTED_MODULE_3__["OperationalReadingListPage"]
    }];

    var OperationalReadingListPageRoutingModule = function OperationalReadingListPageRoutingModule() {
      _classCallCheck(this, OperationalReadingListPageRoutingModule);
    };

    OperationalReadingListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OperationalReadingListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/technical/operational-reading-list/operational-reading-list.module.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/pages/technical/operational-reading-list/operational-reading-list.module.ts ***!
    \*********************************************************************************************/

  /*! exports provided: OperationalReadingListPageModule */

  /***/
  function srcAppPagesTechnicalOperationalReadingListOperationalReadingListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OperationalReadingListPageModule", function () {
      return OperationalReadingListPageModule;
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


    var _operational_reading_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./operational-reading-list-routing.module */
    "./src/app/pages/technical/operational-reading-list/operational-reading-list-routing.module.ts");
    /* harmony import */


    var _operational_reading_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./operational-reading-list.page */
    "./src/app/pages/technical/operational-reading-list/operational-reading-list.page.ts");

    var OperationalReadingListPageModule = function OperationalReadingListPageModule() {
      _classCallCheck(this, OperationalReadingListPageModule);
    };

    OperationalReadingListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _operational_reading_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["OperationalReadingListPageRoutingModule"]],
      declarations: [_operational_reading_list_page__WEBPACK_IMPORTED_MODULE_6__["OperationalReadingListPage"]]
    })], OperationalReadingListPageModule);
    /***/
  },

  /***/
  "./src/app/pages/technical/operational-reading-list/operational-reading-list.page.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/pages/technical/operational-reading-list/operational-reading-list.page.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTechnicalOperationalReadingListOperationalReadingListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlY2huaWNhbC9vcGVyYXRpb25hbC1yZWFkaW5nLWxpc3Qvb3BlcmF0aW9uYWwtcmVhZGluZy1saXN0LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/technical/operational-reading-list/operational-reading-list.page.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/pages/technical/operational-reading-list/operational-reading-list.page.ts ***!
    \*******************************************************************************************/

  /*! exports provided: OperationalReadingListPage */

  /***/
  function srcAppPagesTechnicalOperationalReadingListOperationalReadingListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OperationalReadingListPage", function () {
      return OperationalReadingListPage;
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
    /* harmony import */


    var src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/notifications/notifications.service */
    "./src/app/shared/services/notifications/notifications.service.ts");
    /* harmony import */


    var src_app_shared_services_operational_readings_operational_readings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/operational-readings/operational-readings.service */
    "./src/app/shared/services/operational-readings/operational-readings.service.ts");
    /* harmony import */


    var src_app_shared_services_asset_registrations_asset_registrations_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/asset-registrations/asset-registrations.service */
    "./src/app/shared/services/asset-registrations/asset-registrations.service.ts");
    /* harmony import */


    var src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/services/assets/assets.service */
    "./src/app/shared/services/assets/assets.service.ts");
    /* harmony import */


    var src_app_shared_services_wams_wams_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/services/wams/wams.service */
    "./src/app/shared/services/wams/wams.service.ts");
    /* harmony import */


    var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/services/auth/auth.service */
    "./src/app/shared/services/auth/auth.service.ts");

    var OperationalReadingListPage =
    /*#__PURE__*/
    function () {
      function OperationalReadingListPage(ngZone, route, router, actionSheetController, alertController, loadingController, menu, modalController, notificationService, assetregistrationService, operationalreadingService, assetsService, wamsService, authService) {
        _classCallCheck(this, OperationalReadingListPage);

        this.ngZone = ngZone;
        this.route = route;
        this.router = router;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.menu = menu;
        this.modalController = modalController;
        this.notificationService = notificationService;
        this.assetregistrationService = assetregistrationService;
        this.operationalreadingService = operationalreadingService;
        this.assetsService = assetsService;
        this.wamsService = wamsService;
        this.authService = authService; // List

        this.operationalreadings = []; // data

        this.logs = new Array();
        this.bBarcode = false;
        this.bRfid = false;
      }

      _createClass(OperationalReadingListPage, [{
        key: "L",
        value: function L() {
          var _this = this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var v = args.join(" ");
          console.log(v);
          this.ngZone.run(function () {
            _this.logs.push(v);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("ngOnInit OperationalReadingListPage");
          broadcaster._debug = true; // this.onRegister2DBarcodeListener();
          // this.onRegisterRFIDListener();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          console.log("ngOnDestroy OperationalReadingListPage");
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(header, message) {
          this.alertController.create({
            header: header,
            message: message,
            buttons: ["OK"]
          }).then(function (loading) {
            loading.present();
          });
        }
      }, {
        key: "onRegister2DBarcodeListener",
        value: function onRegister2DBarcodeListener() {
          var _this2 = this;

          this.loadingController.create({
            message: "Please scan the QR code...",
            backdropDismiss: true,
            // dismissOnPageChange: true; 
            showBackdrop: true
          }).then(function (loading) {
            loading.present();
            console.log("[register onRegister2DBarcodeListener] ");
            var ev = "com.scanner.broadcast";
            var isGlobal = true;

            var listener = function listener(event) {
              console.log(JSON.stringify(event));

              if (event.SCAN_STATE == "success") {
                _this2.ngZone.run(function () {
                  console.log("this.bBarcode = ", _this2.bBarcode);

                  if (_this2.bBarcode) {
                    loading.dismiss();
                    broadcaster.removeEventListener(ev, listener);

                    _this2.updateQrbarcode(event.data);
                  }
                });
              }
            };

            broadcaster.addEventListener(ev, isGlobal, listener);
          });
        }
      }, {
        key: "onRegisterRFIDListener",
        value: function onRegisterRFIDListener() {
          var _this3 = this;

          this.loadingController.create({
            message: "Please scan the RFID tag...",
            backdropDismiss: true
          }).then(function (loading) {
            loading.present();
            console.log("[register onRegisterRFIDListener] ");
            var ev = "android.intent.action.scanner.RFID";
            var isGlobal = true;

            var listener = function listener(event) {
              console.log(JSON.stringify(event));

              if (event.SCAN_STATE == "success") {
                _this3.ngZone.run(function () {
                  console.log("this.bRfid = ", _this3.bRfid);

                  if (_this3.bRfid) {
                    loading.dismiss();
                    broadcaster.removeEventListener(ev, listener);

                    _this3.updateRfid(event.data);
                  }
                });
              }
            };

            broadcaster.addEventListener(ev, isGlobal, listener);
          });
        }
      }, {
        key: "getOperationalReading",
        value: function getOperationalReading() {
          var _this4 = this;

          console.log("this.authService.userID", this.authService.userID);
          var objUser = {
            userid: this.authService.userID
          };
          this.operationalreadingService.getDescOrderList(objUser).subscribe(function (res) {
            console.log("this.operationalreadingService res", res);
            _this4.operationalreadings = res; // this.groupByAssetID(res);
          }, function (err) {
            console.error("err", err);
          });
        }
      }, {
        key: "groupByAssetID",
        value: function groupByAssetID(res) {
          var group = res.reduce(function (r, a) {
            r[a.asset_id] = [].concat(_toConsumableArray(r[a.asset_id] || []), [a]);
            return r;
          }, {});
          this.operationalreadings = group;
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          console.log("ionViewDidEnter OperationalReadingListPage");
          this.getOperationalReading();
        }
      }, {
        key: "ionViewDidLeave",
        value: function ionViewDidLeave() {
          console.log("ionViewDidLeave OperationalReadingListPage"); // console.log("broadcaster", broadcaster);
          // if (!this.subscription || this.subscription.closed) return;
          // this.subscription.unsubscribe();
        }
      }, {
        key: "homePage",
        value: function homePage(path) {
          this.router.navigate([path]);
        }
      }, {
        key: "openNotification",
        value: function openNotification() {
          this.menu.enable(true, "menuNotification");
          this.menu.open("menuNotification");
        }
      }, {
        key: "clickNew",
        value: function clickNew() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this5 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.bRfid = false;
                    this.bBarcode = false;
                    _context.next = 4;
                    return this.actionSheetController.create({
                      header: "Choose method",
                      buttons: [{
                        text: "RFID",
                        icon: "scan",
                        handler: function handler() {
                          _this5.bRfid = true;
                          _this5.bBarcode = false;
                          console.log("OPL RFID clicked");

                          _this5.onRegisterRFIDListener();
                        }
                      }, {
                        text: "QR Code",
                        icon: "qr-code",
                        handler: function handler() {
                          _this5.bRfid = false;
                          _this5.bBarcode = true;
                          console.log("OPL QR Code clicked");

                          _this5.onRegister2DBarcodeListener();
                        }
                      }, {
                        text: "Badge No.",
                        icon: "search",
                        handler: function handler() {
                          console.log("OPL Badge No. clicked");

                          _this5.searchBadgeNo();
                        }
                      }, {
                        text: "Cancel",
                        role: "cancel",
                        icon: "close",
                        handler: function handler() {
                          console.log("OPL Cancel clicked");
                        }
                      }]
                    });

                  case 4:
                    actionSheet = _context.sent;
                    _context.next = 7;
                    return actionSheet.present();

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "searchBadgeNo",
        value: function searchBadgeNo() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this6 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: "Badge No.",
                      message: "Enter a badge number to search the asset",
                      inputs: [{
                        name: "badge_no",
                        type: "text",
                        placeholder: ""
                      }],
                      buttons: [{
                        text: "Cancel",
                        role: "cancel",
                        handler: function handler() {
                          console.log("Cancel clicked");
                        }
                      }, {
                        text: "Search",
                        handler: function handler(data) {
                          if (data.badge_no) {
                            _this6.loadingController.create({
                              message: "Please wait..."
                            }).then(function (loading) {
                              loading.present();

                              _this6.assetsService.filter("badge_no=" + data.badge_no).subscribe(function (res) {
                                // if find, go to asset detail list
                                if (res.length > 0) {
                                  loading.dismiss();
                                  var navigationExtras = {
                                    state: {
                                      badge_no: res[0].badge_no
                                    }
                                  };

                                  _this6.router.navigate(["/technical/operational-reading"], navigationExtras);
                                } // else, find the asset in the wams to pump into PIPE's asset table
                                else {
                                    // get data from wams
                                    _this6.wamsService.getAssetBadgeNo(data.badge_no).subscribe(function (res) {
                                      loading.dismiss();

                                      if (res.results.length > 0) {
                                        var _navigationExtras = {
                                          state: {
                                            badge_no: data.badge_no
                                          }
                                        };

                                        _this6.router.navigate(["/technical/operational-reading"], _navigationExtras);
                                      } else {
                                        _this6.presentAlert("Error", "Sorry, asset is not found in the database.");
                                      }
                                    }, function (err) {
                                      console.error("err", err);
                                      loading.dismiss();

                                      _this6.presentAlert("Error", "Sorry, there is a technical problem going on.");
                                    });
                                  }
                              }, function (err) {
                                console.log("err assetlsService = ", err);
                                loading.dismiss();

                                _this6.presentAlert("Error", "Sorry, there is a technical problem going on.");
                              });
                            });
                          } else {
                            _this6.presentAlert("Error", "Please enter badge number to find asset detail");
                          }
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
        key: "clickEdit",
        value: function clickEdit(operationalreading) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var navigationExtras;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    navigationExtras = {
                      state: {
                        operationalreading: operationalreading,
                        process: "view"
                      }
                    };
                    this.router.navigate(["/technical/operational-reading"], navigationExtras);

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "clickRemove",
        value: function clickRemove(index) {
          this.operationalreadings.splice(index, 1);
        }
      }, {
        key: "updateRfid",
        value: function updateRfid(data) {
          var _this7 = this;

          if (this.bRfid) this.ngZone.run(function () {
            _this7.scanValue = data;

            if (_this7.scanValue != "") {
              _this7.loadingController.create({
                message: "Please wait..."
              }).then(function (loading) {
                loading.present();

                _this7.assetsService.filter("hex_code=" + _this7.scanValue).subscribe(function (res) {
                  loading.dismiss(); // if find, go to asset detail list

                  if (res.length > 0) {
                    var navigationExtras = {
                      state: {
                        badge_no: res[0].badge_no
                      }
                    };

                    _this7.router.navigate(["/technical/operational-reading"], navigationExtras);
                  } // else, suggest the user to use QR scanner OR search by badge number
                  else {
                      _this7.presentAlert("Error", "The asset is not found in the database. Please try again by using QR scanner OR search by badge number.");
                    }
                }, function (err) {
                  console.log("err assetlsService = ", err);
                  loading.dismiss();

                  _this7.presentAlert("Error", "Sorry, there is a technical problem going on.");
                });
              });
            } else {
              _this7.presentAlert("Error", "RFID is invalid. Please try again.");
            }
          });
        }
      }, {
        key: "updateQrbarcode",
        value: function updateQrbarcode(data) {
          var _this8 = this;

          if (this.bBarcode) this.ngZone.run(function () {
            _this8.scanValue = data;

            if (_this8.scanValue != "") {
              _this8.loadingController.create({
                message: "Please wait..."
              }).then(function (loading) {
                loading.present();

                _this8.assetsService.filter("badge_no=" + _this8.scanValue).subscribe(function (res) {
                  // if find, go to asset detail list
                  if (res.length > 0) {
                    loading.dismiss();
                    var navigationExtras = {
                      state: {
                        badge_no: res[0].badge_no
                      }
                    };

                    _this8.router.navigate(["/technical/operational-reading"], navigationExtras);
                  } // else, find the asset in the wams to pump into PIPE's asset table
                  else {
                      // get data from wams
                      _this8.wamsService.getAssetBadgeNo(_this8.scanValue).subscribe(function (res) {
                        loading.dismiss();

                        if (res.results.length > 0) {
                          var _navigationExtras2 = {
                            state: {
                              badge_no: _this8.scanValue
                            }
                          };

                          _this8.router.navigate(["/technical/operational-reading"], _navigationExtras2);
                        } else {
                          _this8.presentAlert("Error", "Sorry, asset is not found in the database.");
                        }
                      }, function (err) {
                        console.error("err", err);
                        loading.dismiss();

                        _this8.presentAlert("Error", "Sorry, there is a technical problem going on.");
                      });
                    }
                }, function (err) {
                  console.log("err assetlsService = ", err);
                  loading.dismiss();

                  _this8.presentAlert("Error", "Sorry, there is a technical problem going on.");
                });
              });
            } else {
              _this8.presentAlert("Error", "QR code is invalid. Please try again.");
            }
          });
        }
      }]);

      return OperationalReadingListPage;
    }();

    OperationalReadingListPage.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"]
      }, {
        type: src_app_shared_services_asset_registrations_asset_registrations_service__WEBPACK_IMPORTED_MODULE_6__["AssetRegistrationsService"]
      }, {
        type: src_app_shared_services_operational_readings_operational_readings_service__WEBPACK_IMPORTED_MODULE_5__["OperationalReadingsService"]
      }, {
        type: src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_7__["AssetsService"]
      }, {
        type: src_app_shared_services_wams_wams_service__WEBPACK_IMPORTED_MODULE_8__["WamsService"]
      }, {
        type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]
      }];
    };

    OperationalReadingListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-operational-reading-list",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./operational-reading-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/operational-reading-list/operational-reading-list.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./operational-reading-list.page.scss */
      "./src/app/pages/technical/operational-reading-list/operational-reading-list.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"], src_app_shared_services_asset_registrations_asset_registrations_service__WEBPACK_IMPORTED_MODULE_6__["AssetRegistrationsService"], src_app_shared_services_operational_readings_operational_readings_service__WEBPACK_IMPORTED_MODULE_5__["OperationalReadingsService"], src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_7__["AssetsService"], src_app_shared_services_wams_wams_service__WEBPACK_IMPORTED_MODULE_8__["WamsService"], src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]])], OperationalReadingListPage);
    /***/
  },

  /***/
  "./src/app/shared/services/wams/wams.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/services/wams/wams.service.ts ***!
    \******************************************************/

  /*! exports provided: WamsService */

  /***/
  function srcAppSharedServicesWamsWamsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WamsService", function () {
      return WamsService;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var WamsService =
    /*#__PURE__*/
    function () {
      // url: string = "http://127.0.0.1:8000/v1/wams/services/";
      function WamsService(http) {
        _classCallCheck(this, WamsService);

        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/wams/services/";
      }

      _createClass(WamsService, [{
        key: "getService",
        value: function getService(body) {
          return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log(body.service_name, res);
          }));
        }
      }, {
        key: "getEmployee",
        value: function getEmployee() {
          var body = {
            service_name: "getEmployee"
          };
          return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("getEmployee", res);
          }));
        }
      }, {
        key: "getWorkOrderActivity",
        value: function getWorkOrderActivity() {
          var body = {
            service_name: "getWorkOrderActivity"
          };
          return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("getWorkOrderActivity", res);
          }));
        }
      }, {
        key: "getAssetSyncOutbound",
        value: function getAssetSyncOutbound() {
          var body = {
            service_name: "getAssetSyncOutbound"
          };
          return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("getAssetSyncOutbound", res);
          }));
        }
      }, {
        key: "getAssetBadgeNo",
        value: function getAssetBadgeNo(badge_no) {
          var body = {
            service_name: "getAsset",
            badge_number: badge_no
          };
          return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("getAsset", res);
          }));
        }
      }]);

      return WamsService;
    }();

    WamsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    WamsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], WamsService);
    /***/
  }
}]);
//# sourceMappingURL=default~operational-reading-list-operational-reading-list-module~pages-technical-operational-reading~1dffa3e2-es5.js.map