function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-technical-work-activity-work-activity-module~work-activity-work-activity-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/work-activity/work-activity.page.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/work-activity/work-activity.page.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTechnicalWorkActivityWorkActivityPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"clickBack()\">\n        <ion-icon src=\"../../../../assets/icon/air-selangor-icon.svg\" style=\"font-size: 2rem\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title style=\"font-weight: bold\"> </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openNotification()\">\n        <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n        <ion-badge size=\"small\" color=\"danger\" style=\"position: absolute; right: -5px; top: 1px\">\n          {{ notificationService.totalnotificationbyuser }}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content-core\">\n  <div class=\"ion-padding\">\n    <!-- <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button (click)=\"scanQrCode()\">\n        <ion-icon name=\"scan\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab> -->\n    <h4 class=\"ion-text-center ion-padding\">Work Activity Details</h4>\n    <ion-list class=\"line-input\">\n      <form [formGroup]=\"workactivityFormGroup\">\n\n        <ion-item>\n          <ion-label position=\"stacked\">Work Activity Id:</ion-label>\n          <ion-input type=\"text\" [value]=\"workactivity.activityid\" readonly></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Work Activity Type:</ion-label>\n          <ion-input type=\"text\" [value]=\"workactivity.act_type_cd\" readonly></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Required By Date:</ion-label>\n          <ion-input type=\"text\" [value]=\"workactivity.required_by_dt\" readonly></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Parent Location:</ion-label>\n          <!-- <ion-input type=\"text\" [value]=\"workactivity.asset_loc_sync\" readonly></ion-input> -->\n          <ion-textarea rows=\"2\" type=\"text\" [value]=\"workactivity.asset_loc_sync\" readonly></ion-textarea>\n        </ion-item>\n\n        <!-- <ion-item>\n          <ion-label position=\"stacked\">Asset ID:</ion-label>\n          <ion-input type=\"text\" [value]=\"workactivity.asset_id_1\" readonly></ion-input>\n        </ion-item> -->\n\n      </form>\n    </ion-list>\n\n    <ion-card *ngFor=\"let workActData of workactivityData\">\n      <ion-card-header>\n        <ion-fab horizontal=\"end\">\n          <ion-fab-button *ngIf=\"workActData.reading_datetime == null\" size=\"small\" color=\"primary\"\n            (click)=\"clickViewAsset(workActData)\">\n            <ion-icon name=\"search\"></ion-icon>\n          </ion-fab-button>\n\n          <ion-fab-button *ngIf=\"workActData.reading_datetime != null\" size=\"small\" color=\"success\"\n            (click)=\"clickViewAsset(workActData)\">\n            <ion-icon name=\"search\"></ion-icon>\n            <!-- <ion-icon name=\"checkmark-circle\"></ion-icon> -->\n          </ion-fab-button>\n\n        </ion-fab>\n        <!-- <ion-card-title>Asset ID: {{ workActData.ASSET_ID }}</ion-card-title> -->\n        <ion-card-title>Badge No<br />{{ workActData.badge_number }}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <!-- <p>Asset Type: {{ workActData.asset_type }}</p> -->\n        <p>Asset ID: {{ workActData.asset_id }}</p>\n        <p>Location: {{ workActData.location_descr }}</p>\n        <p>Asset Description : {{ workActData.description }}</p>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- <ion-item lines=\"none\">\n      <ion-label class=\"ion-text-start ion-no-padding\"\n        >Service History</ion-label\n      >\n      <ion-button class=\"ion-text-end\" (click)=\"clickAddServiceHistory()\"\n        >Add</ion-button\n      >\n    </ion-item>\n\n    <ion-card *ngFor=\"let servicehistory of servicehistories; let i = index\">\n      <ion-card-header>\n        <ion-fab horizontal=\"end\">\n          <ion-fab-button\n            size=\"small\"\n            color=\"primary\"\n            (click)=\"clickEdit(servicehistory)\"\n          >\n            <ion-icon name=\"create\"></ion-icon>\n          </ion-fab-button>\n          <ion-fab-button size=\"small\" color=\"danger\" (click)=\"clickRemove(i)\">\n            <ion-icon name=\"trash\"></ion-icon>\n          </ion-fab-button>\n        </ion-fab>\n        <ion-card-title>{{ servicehistory.type }}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content *ngIf=\"servicehistory.type == 'Downtime'\">\n        <p>Start Date/Time: {{ servicehistory.start | date }}</p>\n        <p>End Date/Time: {{ servicehistory.end | date }}</p>\n        <p>Downtime Reason</p>\n        <p>{{ servicehistory.reason }}</p>\n      </ion-card-content>\n      <ion-card-content *ngIf=\"servicehistory.type == 'Preventive Maintenance'\">\n        <p>Terminal Box</p>\n        <p>{{ servicehistory.terminal_box }}</p>\n        <p>Slip Ring & Carbon Brush</p>\n        <p>{{ servicehistory.slip_ring }}</p>\n        <p>Armature</p>\n        <p>{{ servicehistory.armature }}</p>\n      </ion-card-content>\n    </ion-card> -->\n\n    <div class=\"ion-text-center ion-padding\">\n      <ion-button color=\"light\" (click)=\"clickBack()\">Back</ion-button>\n      <!-- <ion-button color=\"primary\" (click)=\"close()\">Close</ion-button> -->\n      <ion-button color=\"primary\" [disabled]=\"setButton\" (click)=\"submit()\">Close Out</ion-button>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/technical/work-activity/work-activity-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/technical/work-activity/work-activity-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: WorkActivityPageRoutingModule */

  /***/
  function srcAppPagesTechnicalWorkActivityWorkActivityRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkActivityPageRoutingModule", function () {
      return WorkActivityPageRoutingModule;
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


    var _work_activity_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./work-activity.page */
    "./src/app/pages/technical/work-activity/work-activity.page.ts");

    var routes = [{
      path: '',
      component: _work_activity_page__WEBPACK_IMPORTED_MODULE_3__["WorkActivityPage"]
    }];

    var WorkActivityPageRoutingModule = function WorkActivityPageRoutingModule() {
      _classCallCheck(this, WorkActivityPageRoutingModule);
    };

    WorkActivityPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], WorkActivityPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/technical/work-activity/work-activity.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/technical/work-activity/work-activity.module.ts ***!
    \***********************************************************************/

  /*! exports provided: WorkActivityPageModule */

  /***/
  function srcAppPagesTechnicalWorkActivityWorkActivityModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkActivityPageModule", function () {
      return WorkActivityPageModule;
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


    var _work_activity_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./work-activity-routing.module */
    "./src/app/pages/technical/work-activity/work-activity-routing.module.ts");
    /* harmony import */


    var _work_activity_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./work-activity.page */
    "./src/app/pages/technical/work-activity/work-activity.page.ts");

    var WorkActivityPageModule = function WorkActivityPageModule() {
      _classCallCheck(this, WorkActivityPageModule);
    };

    WorkActivityPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _work_activity_routing_module__WEBPACK_IMPORTED_MODULE_5__["WorkActivityPageRoutingModule"]],
      declarations: [_work_activity_page__WEBPACK_IMPORTED_MODULE_6__["WorkActivityPage"]]
    })], WorkActivityPageModule);
    /***/
  },

  /***/
  "./src/app/pages/technical/work-activity/work-activity.page.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/technical/work-activity/work-activity.page.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTechnicalWorkActivityWorkActivityPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlY2huaWNhbC93b3JrLWFjdGl2aXR5L3dvcmstYWN0aXZpdHkucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/technical/work-activity/work-activity.page.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/technical/work-activity/work-activity.page.ts ***!
    \*********************************************************************/

  /*! exports provided: WorkActivityPage */

  /***/
  function srcAppPagesTechnicalWorkActivityWorkActivityPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkActivityPage", function () {
      return WorkActivityPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _service_history_service_history_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../service-history/service-history.page */
    "./src/app/pages/technical/service-history/service-history.page.ts");
    /* harmony import */


    var src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/assets/assets.service */
    "./src/app/shared/services/assets/assets.service.ts");
    /* harmony import */


    var src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/services/notifications/notifications.service */
    "./src/app/shared/services/notifications/notifications.service.ts");
    /* harmony import */


    var src_app_shared_services_work_activities_work_activities_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/services/work-activities/work-activities.service */
    "./src/app/shared/services/work-activities/work-activities.service.ts");
    /* harmony import */


    var src_app_shared_services_work_order_activity_completion_AssLocAssList_work_order_activity_completion_AssLocAssList_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/services/work-order-activity-completion-AssLocAssList/work-order-activity-completion-AssLocAssList.service */
    "./src/app/shared/services/work-order-activity-completion-AssLocAssList/work-order-activity-completion-AssLocAssList.service.ts");
    /* harmony import */


    var src_app_shared_services_work_order_activity_completion_work_order_activity_completion_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/services/work-order-activity-completion/work-order-activity-completion.service */
    "./src/app/shared/services/work-order-activity-completion/work-order-activity-completion.service.ts");
    /* harmony import */


    var src_app_shared_services_wams_wams_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/shared/services/wams/wams.service */
    "./src/app/shared/services/wams/wams.service.ts");
    /* harmony import */


    var src_app_shared_services_asset_location_sync_asset_location_sync_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/shared/services/asset-location-sync/asset-location-sync.service */
    "./src/app/shared/services/asset-location-sync/asset-location-sync.service.ts");
    /* harmony import */


    var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/shared/services/auth/auth.service */
    "./src/app/shared/services/auth/auth.service.ts"); // import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";


    var WorkActivityPage =
    /*#__PURE__*/
    function () {
      function WorkActivityPage(formBuilder, route, router, actionSheetController, alertController, menu, modalController, notificationService, workactivityService, workOrderActivityCompletionAssLocAssListService, workOrderActivityCompletionService, loadingController, ngZone, assetsService, wamsService, assetLocatioSyncService, authService) {
        var _this = this;

        _classCallCheck(this, WorkActivityPage);

        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.menu = menu;
        this.modalController = modalController;
        this.notificationService = notificationService;
        this.workactivityService = workactivityService;
        this.workOrderActivityCompletionAssLocAssListService = workOrderActivityCompletionAssLocAssListService;
        this.workOrderActivityCompletionService = workOrderActivityCompletionService;
        this.loadingController = loadingController;
        this.ngZone = ngZone;
        this.assetsService = assetsService;
        this.wamsService = wamsService;
        this.assetLocatioSyncService = assetLocatioSyncService;
        this.authService = authService; // List

        this.servicehistories = []; // scanner

        this.logs = new Array();
        this.bBarcode = false;
        this.bRfid = false;
        this.workactivityData = [];
        this.setButton = false;
        this.buttonArr = [];
        this.workactivityFormGroup = this.formBuilder.group({
          id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
          bo_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
          activity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
          asset_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
          asset_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
          badge_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
          serial_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
          detailed_description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
          work_category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
          required_by_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
          parent_location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
          node_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
          asset_loc_sync: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("")
        });
        this.route.queryParams.subscribe(function (params) {
          _this.ngZone.run(function () {
            if (_this.router.getCurrentNavigation().extras.state) {
              _this.workactivity = _this.router.getCurrentNavigation().extras.state.work_activity;
              console.log("this.workactivity = ", _this.workactivity);
              console.log("this.workactivity['id']", _this.workactivity['asset_location_asset_list']);

              if (_this.workactivity['status'] == 'New') {
                var obj = {
                  status: 'InProgress',
                  record_by: _this.authService.userID,
                  modified_by: _this.authService.userID
                };

                _this.workOrderActivityCompletionService.update(_this.workactivity['id'], obj).subscribe(function (resUp) {
                  console.log("resUp", resUp);
                }, function (errUp) {
                  console.log("errUp", errUp);
                });
              }

              var node_id_1 = "node_id=" + _this.workactivity.node_id_1;

              _this.assetLocatioSyncService.filter(node_id_1).subscribe(function (resAls) {
                _this.workactivity.asset_loc_sync = resAls[0]['description'];

                _this.workactivityFormGroup.patchValue(Object.assign({}, _this.workactivity));
              }, function (errAls) {}); // console.log("this.workactivity = ", this.workactivity['asset_location_asset_list']);
              // let getWOrkActivityData = this.workactivity['asset_location_asset_list']


              _this.workOrderActivityCompletionService.getOne(_this.workactivity['id']).subscribe(function (resUp) {
                console.log("workOrderActivityCompletionService >>> ", resUp);

                _this.getWOrkActivityData(resUp["asset_location_asset_list"]);
              }, function (errUp) {
                console.log("workOrderActivityCompletionService err", errUp);
              }); // this.workactivity['asset_location_asset_list'].forEach(element => {
              //   console.log('element', element);
              // });

            }
          });
        });
      }

      _createClass(WorkActivityPage, [{
        key: "L",
        value: function L() {
          var _this2 = this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var v = args.join(" ");
          console.log(v);
          this.ngZone.run(function () {
            _this2.logs.push(v);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          broadcaster._debug = true;
          this.menu.enable(false, "menuNotification");
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(header, message) {
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
                      header: header,
                      message: message,
                      buttons: [{
                        text: "OK"
                      }]
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
        key: "warningAlert",
        value: function warningAlert(header, message) {
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
                      header: header,
                      message: message,
                      buttons: ['ok']
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
        key: "close",
        value: function close() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.workactivityFormGroup.patchValue({
                      bo_status: "Completed"
                    });
                    this.workactivityService.update(this.workactivityFormGroup.value.id, this.workactivityFormGroup.value).subscribe(function (res) {
                      console.log("res", res);

                      _this3.alertWorkActivity("Work Activity", "Your work activity have successfully closed in the the system. Thank you.");
                    }, function (err) {
                      console.error("err", err);
                    });

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "alertWorkActivity",
        value: function alertWorkActivity(header, message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertController.create({
                      header: header,
                      message: message,
                      buttons: [{
                        text: "OK",
                        handler: function handler() {
                          _this4.router.navigate(["/technical/maintenance-work-detail"]);
                        }
                      }]
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
        key: "clickBack",
        value: function clickBack() {
          this.router.navigate(["/technical/maintenance-work-detail"]);
        }
      }, {
        key: "clickAddServiceHistory",
        value: function clickAddServiceHistory() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this5 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.modalController.create({
                      component: _service_history_service_history_page__WEBPACK_IMPORTED_MODULE_5__["ServiceHistoryPage"]
                    });

                  case 2:
                    modal = _context5.sent;
                    modal.onDidDismiss().then(function (data) {
                      if (data.data) _this5.servicehistories.push(data.data);
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
        key: "clickEdit",
        value: function clickEdit(servicehistory) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var modal;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.modalController.create({
                      component: _service_history_service_history_page__WEBPACK_IMPORTED_MODULE_5__["ServiceHistoryPage"],
                      componentProps: {
                        servicehistory: servicehistory
                      }
                    });

                  case 2:
                    modal = _context6.sent;
                    _context6.next = 5;
                    return modal.present();

                  case 5:
                    return _context6.abrupt("return", _context6.sent);

                  case 6:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        } // async clickViewAsset(asset) {
        //   // let navigationExtras: NavigationExtras = {
        //   //   state: {
        //   //     asset,
        //   //   },
        //   // };
        //   // this.router.navigate(["/technical/work-activity-asset"], navigationExtras);
        //   const actionSheet = await this.actionSheetController.create({
        //     header: "Choose method",
        //     buttons: [
        //       {
        //         text: "RFID",
        //         icon: "scan",
        //         handler: () => {
        //           console.log("RFID clicked");
        //         },
        //       },
        //       {
        //         text: "QR Code",
        //         icon: "qr-code",
        //         handler: () => {
        //           console.log("QR Code clicked");
        //         },
        //       },
        //       {
        //         text: "Badge No.",
        //         icon: "search",
        //         handler: () => {
        //           console.log("Badge No. clicked");
        //           this.searchBadgeNo(asset);
        //         },
        //       },
        //       {
        //         text: "Cancel",
        //         role: "cancel",
        //         icon: "close",
        //         handler: () => {
        //           console.log("Cancel clicked");
        //         },
        //       },
        //     ],
        //   });
        //   await actionSheet.present();
        // }

      }, {
        key: "clickRemove",
        value: function clickRemove(index) {
          this.servicehistories.splice(index, 1);
        }
      }, {
        key: "getWOrkActivityData",
        value: function getWOrkActivityData(getdata) {
          var _this6 = this;

          var woacalalsh = [];
          var datetime = new Date().toLocaleDateString();
          console.log("3test", datetime);
          getdata.forEach(function (element) {
            var woacalsl = element.toString();
            console.log(woacalsl);

            _this6.workOrderActivityCompletionAssLocAssListService.getOne(woacalsl).subscribe(function (Res) {
              console.log("1test", Res);
              console.log("2test", Res.service_histories);

              if (Res.service_histories == [] || Res.service_histories == undefined || Res.service_histories.length == 0) {
                console.log("3test", datetime);
                Res.reading_datetime = datetime;
                console.log("4test", Res.reading_datetime);
              }

              _this6.workactivityData.push(Res);

              console.log("5test", _this6.workactivityData);
              console.log(Res);
            }, function (Err) {
              console.error("err", Err);
            });

            setTimeout(function () {
              _this6.workactivityData.forEach(function (element) {
                console.log("workactivityData=>>>", element);
                console.log("reading_datetime=>>>", element.reading_datetime);
                var asset_id = "asset_id=" + element.asset_id; /// set data to array for submit button

                if (element.reading_datetime != null || element.reading_datetime != '') {
                  _this6.buttonArr.push(element);
                }

                _this6.assetsService.filter(asset_id).subscribe(function (res) {
                  element.badge_number = res[0].badge_no;
                  element.description = res[0].description;
                }, function (errAs) {});

                var nodeid = "node_id=" + element.node_id;

                _this6.assetLocatioSyncService.filter(nodeid).subscribe(function (resALALSH) {
                  console.log("resALALSH --=-= ", resALALSH);
                  element.location_descr = resALALSH[0].description;
                }, function () {});
              });

              console.log("this.buttonArr", _this6.buttonArr.length);

              if (_this6.buttonArr.length == 0) {
                _this6.setButton = true;
              }
            }, 1000);
          });
        }
      }, {
        key: "getCurrentDateTime",
        value: function getCurrentDateTime() {
          var selectedDate = new Date();
          var year = selectedDate.getFullYear();
          var month = selectedDate.getMonth() + 1 < 10 ? "0" + (selectedDate.getMonth() + 1) : selectedDate.getMonth() + 1;
          var day = selectedDate.getDate() < 10 ? "0" + selectedDate.getDate() : selectedDate.getDate();
          var formatDate = year + "-" + month + "-" + day;
          var hour = selectedDate.getHours() < 10 ? "0" + selectedDate.getHours() : selectedDate.getHours();
          var minute = selectedDate.getMinutes() < 10 ? "0" + selectedDate.getMinutes() : selectedDate.getMinutes();
          var second = selectedDate.getSeconds() < 10 ? "0" + selectedDate.getSeconds() : selectedDate.getSeconds();
          var formatTime = hour + ":" + minute + ":" + second;
          return formatDate + "T" + formatTime + "Z";
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this7 = this;

          console.log("workactivityData", this.workactivityData);
          var checker = true;
          this.workactivityData.forEach(function (element) {
            if (element.reading_datetime == '' || element.reading_datetime == null) {
              checker = false;
            }
          });

          if (checker == true) {
            var woacassLocAssLisFormData = {
              status: "Completed",
              completiondatetime: new Date(),
              submitted_datetime: new Date()
            };
            console.log("this.workactivity.id>>>>>>>", this.workactivity.id);
            console.log("woacassLocAssLisFormData>>>>>>>", woacassLocAssLisFormData);
            this.workOrderActivityCompletionService.update(this.workactivity.id, woacassLocAssLisFormData).subscribe(function (res) {
              console.log("res = ", res);

              _this7.presentAlert("Success", "Successfully update data.");
            }, function (err) {
              console.log("workOrderActivityCompletionService err", err);
            });
          } else {
            this.warningAlert('Error', 'Please complete all required work activity');
            return false;
          }
        }
      }, {
        key: "searchBadgeNo",
        value: function searchBadgeNo(asset) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var _this8 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    console.log("asset>>", asset);
                    _context7.next = 3;
                    return this.alertController.create({
                      header: "Badge No.",
                      message: "Enter a badge number to search the asset",
                      inputs: [{
                        name: "badge_no",
                        type: "text",
                        value: asset.badge_number,
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
                          if (data.badge_no == asset['badge_number']) {
                            if (data.badge_no) {
                              _this8.loadingController.create({
                                message: "Please wait..."
                              }).then(function (loading) {
                                loading.present();

                                _this8.assetsService.filter("badge_no=" + data.badge_no).subscribe(function (res) {
                                  // if find, go to asset detail list
                                  if (res.length > 0) {
                                    loading.dismiss();
                                    var navigationExtras = {
                                      state: {
                                        badge_no: res[0].badge_no,
                                        asset: asset,
                                        work_activity: _this8.workactivity
                                      }
                                    };

                                    _this8.router.navigate(["/technical/work-activity-asset"], navigationExtras);
                                  } // else, find the asset in the wams to pump into PIPE's asset table
                                  else {
                                      // get data from wams
                                      _this8.wamsService.getAssetBadgeNo(data.badge_no).subscribe(function (res) {
                                        loading.dismiss();

                                        if (res.results.length > 0) {
                                          var _navigationExtras = {
                                            state: {
                                              badge_no: data.badge_no,
                                              asset: asset,
                                              work_activity: _this8.workactivity
                                            }
                                          };

                                          _this8.router.navigate(["/technical/work-activity-asset"], _navigationExtras);
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
                              _this8.presentAlert("Error", "Please enter badge number to find asset detail");
                            }
                          } else {
                            _this8.warningAlert("Error", "Batch number not match. Please try again,");
                          }
                        }
                      }]
                    });

                  case 3:
                    alert = _context7.sent;
                    _context7.next = 6;
                    return alert.present();

                  case 6:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "onRegister2DBarcodeListener",
        value: function onRegister2DBarcodeListener(asset) {
          var _this9 = this;

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
                _this9.ngZone.run(function () {
                  console.log("this.bBarcode = ", _this9.bBarcode);

                  if (_this9.bBarcode) {
                    loading.dismiss();
                    broadcaster.removeEventListener(ev, listener);

                    _this9.updateQrbarcode(event.data, asset); // if(event.data == asset.badge_number){
                    //   this.updateQrbarcode(event.data, asset);
                    // }else{
                    //     this.warningAlert(
                    //       "Error",
                    //       "Batch number not match. Please try again,"
                    //     );
                    // }

                  }
                });
              }
            };

            broadcaster.addEventListener(ev, isGlobal, listener);
          });
        }
      }, {
        key: "onRegisterRFIDListener",
        value: function onRegisterRFIDListener(asset) {
          var _this10 = this;

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
                _this10.ngZone.run(function () {
                  console.log("this.bRfid = ", _this10.bRfid);

                  if (_this10.bRfid) {
                    loading.dismiss();
                    broadcaster.removeEventListener(ev, listener);

                    _this10.updateRfid(event.data, asset);
                  }
                });
              }
            };

            broadcaster.addEventListener(ev, isGlobal, listener);
          });
        }
      }, {
        key: "clickViewAsset",
        value: function clickViewAsset(asset) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var _this11 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    console.log('asset>>><<', asset);
                    this.bRfid = false;
                    this.bBarcode = false;
                    _context8.next = 5;
                    return this.actionSheetController.create({
                      header: "Choose method",
                      buttons: [{
                        text: "RFID",
                        icon: "scan",
                        handler: function handler() {
                          console.log("RFID clicked");
                          _this11.bBarcode = false;
                          _this11.bRfid = true;

                          _this11.onRegisterRFIDListener(asset);
                        }
                      }, {
                        text: "QR Code",
                        icon: "qr-code",
                        handler: function handler() {
                          console.log("QR Code clicked");
                          _this11.bBarcode = true;
                          _this11.bRfid = false;

                          _this11.onRegister2DBarcodeListener(asset);
                        }
                      }, {
                        text: "Badge No.",
                        icon: "search",
                        handler: function handler() {
                          console.log("Badge No. clicked");

                          _this11.searchBadgeNo(asset);
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

                  case 5:
                    actionSheet = _context8.sent;
                    _context8.next = 8;
                    return actionSheet.present();

                  case 8:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        } // rfid scan

      }, {
        key: "updateRfid",
        value: function updateRfid(data, asset) {
          var _this12 = this;

          if (this.bRfid) this.ngZone.run(function () {
            _this12.scanValue = data;

            if (_this12.scanValue != "" || _this12.scanValue != undefined || _this12.scanValue != '' || _this12.scanValue != null) {
              _this12.loadingController.create({
                message: "Please wait..."
              }).then(function (loading) {
                loading.present();

                _this12.assetsService.filter("hex_code=" + _this12.scanValue).subscribe(function (res) {
                  loading.dismiss(); // if find, go to asset detail list

                  if (res.length > 0) {
                    if (res[0].badge_no == asset.badge_number) {
                      var navigationExtras = {
                        state: {
                          badge_no: res[0].badge_no,
                          asset: asset,
                          work_activity: _this12.workactivity
                        }
                      };

                      _this12.router.navigate(["/technical/work-activity-asset"], navigationExtras);
                    } else {
                      _this12.presentAlert("Error", "Batch number not match. Please try again,");
                    }
                  } // else, suggest the user to use QR scanner OR search by badge number
                  else {
                      _this12.presentAlert("Error", "The asset is not found in the database. Please try again by using QR scanner OR search by badge number.");
                    }
                }, function (err) {
                  console.log("err assetlsService = ", err);
                  loading.dismiss();

                  _this12.presentAlert("Error", "Sorry, there is a technical problem going on.");
                });
              });
            } else {
              _this12.presentAlert("Error", "RFID is invalid. Please try again.");
            }
          });
        } // qr code

      }, {
        key: "updateQrbarcode",
        value: function updateQrbarcode(data, asset) {
          var _this13 = this;

          if (this.bBarcode) this.ngZone.run(function () {
            _this13.scanValue = data;

            if (_this13.scanValue != "") {
              if (_this13.scanValue == asset.badge_number) {
                _this13.loadingController.create({
                  message: "Please wait..."
                }).then(function (loading) {
                  loading.present();

                  _this13.assetsService.filter("badge_no=" + _this13.scanValue).subscribe(function (res) {
                    // if find, go to asset detail list
                    if (res.length > 0) {
                      loading.dismiss();
                      var navigationExtras = {
                        state: {
                          badge_no: res[0].badge_no,
                          asset: asset
                        }
                      };

                      _this13.router.navigate(["/technical/work-activity-asset"], navigationExtras);
                    } // else, find the asset in the wams to pump into PIPE's asset table
                    else {
                        // get data from wams
                        _this13.wamsService.getAssetBadgeNo(_this13.scanValue).subscribe(function (res) {
                          loading.dismiss();

                          if (res.results.length > 0) {
                            var _navigationExtras2 = {
                              state: {
                                badge_no: _this13.scanValue,
                                asset: asset,
                                work_activity: _this13.workactivity
                              }
                            };

                            _this13.router.navigate(["/technical/work-activity-asset"], _navigationExtras2);
                          } else {
                            _this13.presentAlert("Error", "Sorry, asset is not found in the database.");
                          }
                        }, function (err) {
                          console.error("err", err);
                          loading.dismiss();

                          _this13.presentAlert("Error", "Sorry, there is a technical problem going on.");
                        });
                      }
                  }, function (err) {
                    console.log("err assetlsService = ", err);
                    loading.dismiss();

                    _this13.presentAlert("Error", "Sorry, there is a technical problem going on.");
                  });
                });
              } else {
                _this13.warningAlert("Error", "Batch number not match. Please try again,");
              }
            } else {
              _this13.presentAlert("Error", "QR code is invalid. Please try again.");
            }
          });
        }
      }]);

      return WorkActivityPage;
    }();

    WorkActivityPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_7__["NotificationsService"]
      }, {
        type: src_app_shared_services_work_activities_work_activities_service__WEBPACK_IMPORTED_MODULE_8__["WorkActivitiesService"]
      }, {
        type: src_app_shared_services_work_order_activity_completion_AssLocAssList_work_order_activity_completion_AssLocAssList_service__WEBPACK_IMPORTED_MODULE_9__["WorkOrderActivityCompletionAssLocAssListService"]
      }, {
        type: src_app_shared_services_work_order_activity_completion_work_order_activity_completion_service__WEBPACK_IMPORTED_MODULE_10__["WorkOrderActivityCompletionService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_6__["AssetsService"]
      }, {
        type: src_app_shared_services_wams_wams_service__WEBPACK_IMPORTED_MODULE_11__["WamsService"]
      }, {
        type: src_app_shared_services_asset_location_sync_asset_location_sync_service__WEBPACK_IMPORTED_MODULE_12__["AssetLocatioSyncService"]
      }, {
        type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"]
      }];
    };

    WorkActivityPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-work-activity",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./work-activity.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/work-activity/work-activity.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./work-activity.page.scss */
      "./src/app/pages/technical/work-activity/work-activity.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_7__["NotificationsService"], src_app_shared_services_work_activities_work_activities_service__WEBPACK_IMPORTED_MODULE_8__["WorkActivitiesService"], src_app_shared_services_work_order_activity_completion_AssLocAssList_work_order_activity_completion_AssLocAssList_service__WEBPACK_IMPORTED_MODULE_9__["WorkOrderActivityCompletionAssLocAssListService"], src_app_shared_services_work_order_activity_completion_work_order_activity_completion_service__WEBPACK_IMPORTED_MODULE_10__["WorkOrderActivityCompletionService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_6__["AssetsService"], src_app_shared_services_wams_wams_service__WEBPACK_IMPORTED_MODULE_11__["WamsService"], src_app_shared_services_asset_location_sync_asset_location_sync_service__WEBPACK_IMPORTED_MODULE_12__["AssetLocatioSyncService"], src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"]])], WorkActivityPage);
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
  },

  /***/
  "./src/app/shared/services/work-order-activity-completion/work-order-activity-completion.service.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/shared/services/work-order-activity-completion/work-order-activity-completion.service.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: WorkOrderActivityCompletionService */

  /***/
  function srcAppSharedServicesWorkOrderActivityCompletionWorkOrderActivityCompletionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkOrderActivityCompletionService", function () {
      return WorkOrderActivityCompletionService;
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

    var WorkOrderActivityCompletionService =
    /*#__PURE__*/
    function () {
      function WorkOrderActivityCompletionService(http) {
        _classCallCheck(this, WorkOrderActivityCompletionService);

        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/work-order-activity-completion/"; // Data

        this.wamodels = [];
      }

      _createClass(WorkOrderActivityCompletionService, [{
        key: "post",
        value: function post(body) {
          return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("WorkOrderActivityCompletionModel", res);
          }));
        }
      }, {
        key: "get",
        value: function get() {
          var _this14 = this;

          return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("WorkOrderActivityCompletionModel", res);
            _this14.wamodels = res;
          }));
        }
      }, {
        key: "getOne",
        value: function getOne(id) {
          var _this15 = this;

          var urlID = this.url + id + "/";
          return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("WorkOrderActivityCompletionModel", res);
            _this15.wamodel = res;
          }));
        }
      }, {
        key: "update",
        value: function update(id, body) {
          return this.http.patch(this.url + id + "/", body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("WorkOrderActivityCompletionModel", res);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("WorkOrderActivityCompletionModel", res);
          }));
        }
      }, {
        key: "filter",
        value: function filter(field) {
          var urlFilter = this.url + "?" + field;
          return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("WorkOrderActivityCompletionModel", res);
          }));
        }
      }, {
        key: "get_dashboard_status_statistic",
        value: function get_dashboard_status_statistic(body) {
          var url = this.url + "get_dashboard_status_statistic/";
          return this.http.post(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {// console.log("WorkOrderActivityCompletionModel", res);
          }));
        }
      }, {
        key: "asc_ordered_list",
        value: function asc_ordered_list(body) {
          var urlOrdered = this.url + "asc_ordered_list/";
          return this.http.post(urlOrdered, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("WorkOrderActivityCompletionModel", res);
          }));
        }
      }]);

      return WorkOrderActivityCompletionService;
    }();

    WorkOrderActivityCompletionService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    WorkOrderActivityCompletionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], WorkOrderActivityCompletionService);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-technical-work-activity-work-activity-module~work-activity-work-activity-module-es5.js.map