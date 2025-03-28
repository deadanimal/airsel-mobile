function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-technical-work-request-list-work-request-list-module~work-request-list-work-request-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/work-request-list/work-request-list.page.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/work-request-list/work-request-list.page.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTechnicalWorkRequestListWorkRequestListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"homePage('/technical/tabs/tab1')\">\n        <ion-icon src=\"../../../../assets/icon/air-selangor-icon.svg\" style=\"font-size: 2rem\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title style=\"font-weight: bold\"> Work Request </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openNotification()\">\n        <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n        <ion-badge size=\"small\" color=\"danger\" style=\"position: absolute; right: -5px; top: 1px\">\n          {{ notificationService.totalnotificationbyuser }}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content-core\">\n  <div class=\"ion-padding\">\n    <div class=\"ion-text-center\">\n      <ion-button color=\"primary\" (click)=\"clickNew()\">New Request</ion-button>\n    </div>\n    <ion-card *ngFor=\"let workrequest of workrequests\">\n      <ion-card-header>\n        <ion-fab horizontal=\"end\">\n          <ion-fab-button *ngIf=\"workrequest.approval_profile == ''\" size=\"small\" color=\"primary\"\n            (click)=\"clickEdit(workrequest)\">\n            <ion-icon name=\"document-text\"></ion-icon>\n          </ion-fab-button>\n\n          <ion-fab-button *ngIf=\"workrequest.approval_profile != ''\" size=\"small\" color=\"success\"\n            (click)=\"clickEdit(workrequest)\">\n            <ion-icon name=\"document-text\"></ion-icon>\n          </ion-fab-button>\n\n          <ion-fab-button *ngIf=\"workrequest.work_request_status == 'CREATED'\" size=\"small\" color=\"tertiary\"\n            (click)=\"clickApprove(workrequest)\">\n            <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n          </ion-fab-button>\n          <!-- <ion-fab-button\n            size=\"small\"\n            color=\"danger\"\n            (click)=\"clickRemove(i)\"\n          >\n            <ion-icon name=\"trash\"></ion-icon>\n          </ion-fab-button> -->\n        </ion-fab>\n        <ion-card-subtitle>Work Request ID</ion-card-subtitle>\n        <ion-card-title><b>{{ workrequest.work_request_id }}</b></ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p>Asset ID: {{ workrequest.asset_id }}</p>\n        <p>Required By Date: {{ workrequest.required_by_date }}</p>\n        <p>Work Category: {{ workrequest.work_category }}</p>\n        <p>Work Class: {{ workrequest.work_class }}</p>\n        <p>Work Priority: {{ workrequest.work_priority }}</p>\n        <p>Status: {{ workrequest.work_request_status | titlecase }}</p>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/technical/work-request-list/work-request-list-routing.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/pages/technical/work-request-list/work-request-list-routing.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: WorkRequestListPageRoutingModule */

  /***/
  function srcAppPagesTechnicalWorkRequestListWorkRequestListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkRequestListPageRoutingModule", function () {
      return WorkRequestListPageRoutingModule;
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


    var _work_request_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./work-request-list.page */
    "./src/app/pages/technical/work-request-list/work-request-list.page.ts");

    var routes = [{
      path: '',
      component: _work_request_list_page__WEBPACK_IMPORTED_MODULE_3__["WorkRequestListPage"]
    }];

    var WorkRequestListPageRoutingModule = function WorkRequestListPageRoutingModule() {
      _classCallCheck(this, WorkRequestListPageRoutingModule);
    };

    WorkRequestListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], WorkRequestListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/technical/work-request-list/work-request-list.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/technical/work-request-list/work-request-list.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: WorkRequestListPageModule */

  /***/
  function srcAppPagesTechnicalWorkRequestListWorkRequestListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkRequestListPageModule", function () {
      return WorkRequestListPageModule;
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


    var _work_request_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./work-request-list-routing.module */
    "./src/app/pages/technical/work-request-list/work-request-list-routing.module.ts");
    /* harmony import */


    var _work_request_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./work-request-list.page */
    "./src/app/pages/technical/work-request-list/work-request-list.page.ts");

    var WorkRequestListPageModule = function WorkRequestListPageModule() {
      _classCallCheck(this, WorkRequestListPageModule);
    };

    WorkRequestListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _work_request_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["WorkRequestListPageRoutingModule"]],
      declarations: [_work_request_list_page__WEBPACK_IMPORTED_MODULE_6__["WorkRequestListPage"]]
    })], WorkRequestListPageModule);
    /***/
  },

  /***/
  "./src/app/pages/technical/work-request-list/work-request-list.page.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/technical/work-request-list/work-request-list.page.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTechnicalWorkRequestListWorkRequestListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlY2huaWNhbC93b3JrLXJlcXVlc3QtbGlzdC93b3JrLXJlcXVlc3QtbGlzdC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/technical/work-request-list/work-request-list.page.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/technical/work-request-list/work-request-list.page.ts ***!
    \*****************************************************************************/

  /*! exports provided: WorkRequestListPage */

  /***/
  function srcAppPagesTechnicalWorkRequestListWorkRequestListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkRequestListPage", function () {
      return WorkRequestListPage;
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


    var _approval_profile_approval_profile_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../approval-profile/approval-profile.page */
    "./src/app/pages/technical/approval-profile/approval-profile.page.ts");
    /* harmony import */


    var src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/notifications/notifications.service */
    "./src/app/shared/services/notifications/notifications.service.ts");
    /* harmony import */


    var src_app_shared_services_work_requests_work_requests_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/work-requests/work-requests.service */
    "./src/app/shared/services/work-requests/work-requests.service.ts");
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

    var WorkRequestListPage =
    /*#__PURE__*/
    function () {
      function WorkRequestListPage(route, ngZone, router, actionSheetController, alertController, loadingController, menu, modalController, notificationService, workrequestService, assetService, wamsService, authService) {
        _classCallCheck(this, WorkRequestListPage);

        this.route = route;
        this.ngZone = ngZone;
        this.router = router;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.menu = menu;
        this.modalController = modalController;
        this.notificationService = notificationService;
        this.workrequestService = workrequestService;
        this.assetService = assetService;
        this.wamsService = wamsService;
        this.authService = authService; // List

        this.workrequests = []; // data

        this.logs = new Array();
        this.bBarcode = false;
        this.bRfid = false;
        this.badge_number = "";
      }

      _createClass(WorkRequestListPage, [{
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
          broadcaster._debug = true; // this.onRegister2DBarcodeListener();
          // this.onRegisterRFIDListener();

          this.getWorkRequest();
        }
      }, {
        key: "getWorkRequest",
        value: function getWorkRequest() {
          var _this2 = this;

          console.log("this.authService.userID", this.authService.userID);
          var objUser = {
            userid: this.authService.userID
          };
          console.log("objUser >>>>>>>>>> ", objUser);
          this.workrequestService.desc_order_list(objUser).subscribe(function (res) {
            console.log("workrequest res = ", res);

            _this2.addGetBadgeNumber(res);
          }, function (err) {
            console.error("err", err);
          });
        }
      }, {
        key: "addGetBadgeNumber",
        value: function addGetBadgeNumber(workReqData) {
          var _this3 = this;

          this.workrequests = [];
          workReqData.forEach(function (element) {
            if (element.asset_id != "") _this3.assetService.filter("asset_id=" + element.asset_id).subscribe(function (res) {
              // console.log("res assetsService = ", res);
              if (res.length > 0) element.badge_no = res[0].badge_no;
            }, function (err) {// console.log("err assetsService = ", err);
            });

            _this3.workrequests.push(element);
          });
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.getWorkRequest();
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
            var _this4 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.bBarcode = false;
                    this.bRfid = false;
                    _context.next = 4;
                    return this.actionSheetController.create({
                      header: "Choose method",
                      buttons: [{
                        text: "RFID",
                        icon: "scan",
                        handler: function handler() {
                          console.log("RFID clicked");
                          _this4.bBarcode = false;
                          _this4.bRfid = true;
                          console.log("WR RFID clicked");

                          _this4.onRegisterRFIDListener();
                        }
                      }, {
                        text: "QR Code",
                        icon: "qr-code",
                        handler: function handler() {
                          console.log("QR Code clicked");
                          _this4.bBarcode = true;
                          _this4.bRfid = false;
                          console.log("WR QR CODE clicked");

                          _this4.onRegister2DBarcodeListener();
                        }
                      }, {
                        text: "Badge No.",
                        icon: "search",
                        handler: function handler() {
                          console.log("Badge No. clicked");

                          _this4.searchBadgeNo();
                        }
                      }, {
                        text: "Cancel",
                        role: "cancel",
                        icon: "close",
                        handler: function handler() {
                          console.log("Cancel clicked");
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
            var _this5 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: "Badge No.",
                      message: "Enter a badge number to search asset",
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
                            _this5.loadingController.create({
                              message: "Please wait..."
                            }).then(function (loading) {
                              loading.present();

                              _this5.assetService.filter("badge_no=" + data.badge_no).subscribe(function (res) {
                                // if find, go to asset detail list
                                if (res.length > 0) {
                                  loading.dismiss();
                                  var navigationExtras = {
                                    state: {
                                      badge_no: res[0].badge_no
                                    }
                                  };

                                  _this5.router.navigate(["/technical/work-request"], navigationExtras);
                                } // else, find the asset in the wams to pump into PIPE's asset table
                                else {
                                    // get data from wams
                                    _this5.wamsService.getAssetBadgeNo(data.badge_no).subscribe(function (res) {
                                      loading.dismiss();

                                      if (res.results) {
                                        var _navigationExtras = {
                                          state: {
                                            badge_no: data.badge_no
                                          }
                                        };

                                        _this5.router.navigate(["/technical/work-request"], _navigationExtras);
                                      } else {
                                        _this5.presentAlert("Error", "Sorry, asset is not found in the database.");
                                      }
                                    }, function (err) {
                                      console.error("err", err);
                                      loading.dismiss();

                                      _this5.presentAlert("Error", "Sorry, there is a technical problem going on.");
                                    });
                                  }
                              }, function (err) {
                                console.log("err assetlsService = ", err);
                                loading.dismiss();

                                _this5.presentAlert("Error", "Sorry, there is a technical problem going on.");
                              });
                            });
                          } else {
                            _this5.presentAlert("Error", "Please enter badge number to find asset detail");
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
        key: "presentAlert",
        value: function presentAlert(header, message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      header: header,
                      message: message,
                      buttons: ["OK"]
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
      }, {
        key: "clickEdit",
        value: function clickEdit(workrequest) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var navigationExtras;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    navigationExtras = {
                      state: {
                        workrequest: workrequest,
                        process: "view"
                      }
                    };
                    this.router.navigate(["/technical/work-request"], navigationExtras);

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "clickApprove",
        value: function clickApprove(workrequest) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this6 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.modalController.create({
                      component: _approval_profile_approval_profile_page__WEBPACK_IMPORTED_MODULE_4__["ApprovalProfilePage"]
                    });

                  case 2:
                    modal = _context5.sent;
                    modal.onDidDismiss().then(function (modelData) {
                      if (modelData.data != "") {
                        _this6.loadingController.create({
                          message: "Please wait for a while..."
                        }).then(function (loading) {
                          loading.present();

                          _this6.submitApprovalProfile(workrequest, modelData.data, loading);
                        });
                      }
                    });
                    _context5.next = 6;
                    return modal.present();

                  case 6:
                    return _context5.abrupt("return", _context5.sent);

                  case 7:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "submitApprovalProfile",
        value: function submitApprovalProfile(workrequest, data, loading) {
          var _this7 = this;

          var obj = {
            id: workrequest.id,
            work_request_id: workrequest.work_request_id,
            approval_profile: data
          };
          this.workrequestService.submit_approval_profile(obj).subscribe(function (res) {
            if (res) {
              _this7.presentAlert("Success", // "Your work request have successfully approved."
              // "Work request successfully submitted for approval."
              "Your work request has been successfully submitted for approval");
            }

            loading.dismiss();
          }, function (err) {
            console.error("err", err);

            _this7.presentAlert("Error", err.error.error_details);

            loading.dismiss();
          }, function () {
            _this7.getWorkRequest();
          });
        }
      }, {
        key: "updateRfid",
        value: function updateRfid(data) {
          var _this8 = this;

          if (this.bRfid) this.ngZone.run(function () {
            _this8.scanValue = data;

            if (_this8.scanValue != "") {
              _this8.loadingController.create({
                message: "Please wait..."
              }).then(function (loading) {
                loading.present();

                _this8.assetService.filter("hex_code=" + _this8.scanValue).subscribe(function (res) {
                  loading.dismiss(); // if find, go to asset detail list

                  if (res.length > 0) {
                    var navigationExtras = {
                      state: {
                        badge_no: res[0].badge_no
                      }
                    };

                    _this8.router.navigate(["/technical/work-request"], navigationExtras);
                  } // else, suggest the user to use QR scanner OR search by badge number
                  else {
                      _this8.presentAlert("Error", "The asset is not found in the database. Please try again by using QR scanner OR search by badge number.");
                    }
                }, function (err) {
                  console.log("err assetlsService = ", err);
                  loading.dismiss();

                  _this8.presentAlert("Error", "Sorry, there is a technical problem going on.");
                });
              });
            } else {
              _this8.presentAlert("Error", "RFID is invalid. Please try again.");
            }
          });
        }
      }, {
        key: "updateQrbarcode",
        value: function updateQrbarcode(data) {
          var _this9 = this;

          if (this.bBarcode) this.ngZone.run(function () {
            _this9.scanValue = data;

            if (_this9.scanValue != "") {
              _this9.loadingController.create({
                message: "Please wait..."
              }).then(function (loading) {
                loading.present();

                _this9.assetService.filter("badge_no=" + _this9.scanValue).subscribe(function (res) {
                  // if find, go to asset detail list
                  if (res.length > 0) {
                    loading.dismiss();
                    var navigationExtras = {
                      state: {
                        badge_no: res[0].badge_no
                      }
                    };

                    _this9.router.navigate(["/technical/work-request"], navigationExtras);
                  } // else, find the asset in the wams to pump into PIPE's asset table
                  else {
                      // get data from wams
                      _this9.wamsService.getAssetBadgeNo(_this9.scanValue).subscribe(function (res) {
                        loading.dismiss();

                        if (res.results) {
                          var _navigationExtras2 = {
                            state: {
                              badge_no: _this9.scanValue
                            }
                          };

                          _this9.router.navigate(["/technical/work-request"], _navigationExtras2);
                        } else {
                          _this9.presentAlert("Error", "Sorry, asset is not found in the database.");
                        }
                      }, function (err) {
                        console.error("err", err);
                        loading.dismiss();

                        _this9.presentAlert("Error", "Sorry, there is a technical problem going on.");
                      });
                    }
                }, function (err) {
                  console.log("err assetlsService = ", err);
                  loading.dismiss();

                  _this9.presentAlert("Error", "Sorry, there is a technical problem going on.");
                });
              });
            } else {
              _this9.presentAlert("Error", "QR code is invalid. Please try again.");
            }
          });
        }
      }, {
        key: "clickRemove",
        value: function clickRemove(index) {
          this.workrequests.splice(index, 1);
        }
      }, {
        key: "onRegister2DBarcodeListener",
        value: function onRegister2DBarcodeListener() {
          var _this10 = this;

          this.loadingController.create({
            message: "Please scan the QR code...",
            backdropDismiss: true
          }).then(function (loading) {
            loading.present();
            console.log("[register onRegister2DBarcodeListener] ");
            var ev = "com.scanner.broadcast";
            var isGlobal = true;

            var listener = function listener(event) {
              console.log(JSON.stringify(event));

              if (event.SCAN_STATE == "success") {
                _this10.ngZone.run(function () {
                  console.log("this.bBarcode = ", _this10.bBarcode);

                  if (_this10.bBarcode) {
                    loading.dismiss();
                    broadcaster.removeEventListener(ev, listener);

                    _this10.updateQrbarcode(event.data);
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
          var _this11 = this;

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
                _this11.ngZone.run(function () {
                  console.log("this.bRfid = ", _this11.bRfid);

                  if (_this11.bRfid) {
                    loading.dismiss();
                    broadcaster.removeEventListener(ev, listener);

                    _this11.updateRfid(event.data);
                  }
                });
              }
            };

            broadcaster.addEventListener(ev, isGlobal, listener);
          });
        }
      }]);

      return WorkRequestListPage;
    }();

    WorkRequestListPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
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
        type: src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"]
      }, {
        type: src_app_shared_services_work_requests_work_requests_service__WEBPACK_IMPORTED_MODULE_6__["WorkRequestsService"]
      }, {
        type: src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_7__["AssetsService"]
      }, {
        type: src_app_shared_services_wams_wams_service__WEBPACK_IMPORTED_MODULE_8__["WamsService"]
      }, {
        type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]
      }];
    };

    WorkRequestListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-work-request-list",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./work-request-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/work-request-list/work-request-list.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./work-request-list.page.scss */
      "./src/app/pages/technical/work-request-list/work-request-list.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"], src_app_shared_services_work_requests_work_requests_service__WEBPACK_IMPORTED_MODULE_6__["WorkRequestsService"], src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_7__["AssetsService"], src_app_shared_services_wams_wams_service__WEBPACK_IMPORTED_MODULE_8__["WamsService"], src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]])], WorkRequestListPage);
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
//# sourceMappingURL=default~pages-technical-work-request-list-work-request-list-module~work-request-list-work-request-list-module-es5.js.map