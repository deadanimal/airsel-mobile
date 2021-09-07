function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-technical-measurement-type-measurement-type-module~pages-technical-operational-reading~b806443f"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/measurement-type/measurement-type.page.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/measurement-type/measurement-type.page.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTechnicalMeasurementTypeMeasurementTypePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"clickDismiss()\">\n        <ion-icon\n          src=\"../../../../assets/icon/air-selangor-icon.svg\"\n          style=\"font-size: 2rem\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title style=\"font-weight: bold\"></ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openNotification()\">\n        <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n        <ion-badge\n          size=\"small\"\n          color=\"danger\"\n          style=\"position: absolute; right: -5px; top: 1px\"\n          >{{ notificationService.totalnotificationbyuser }}</ion-badge\n        >\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content-core\">\n  <div class=\"ion-padding\">\n    <ion-list class=\"line-input\">\n      <form [formGroup]=\"measurementtypeFormGroup\">\n        <ion-item>\n          <ion-label position=\"stacked\">Measurement Type</ion-label>\n          <ion-select formControlName=\"measurement_type\">\n            <ion-select-option value=\"RUNNING HOUR\"\n              >RUNNING HOUR</ion-select-option\n            >\n            <ion-select-option value=\"TEMPERATURE SENSOR\"\n              >TEMPERATURE SENSOR</ion-select-option\n            >\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Reading Date</ion-label>\n          <ion-datetime displayFormat=\"YYYY-MM-DD\" formControlName=\"reading_date\"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Reading Time</ion-label>\n          <ion-datetime displayFormat=\"HH:mm\" formControlName=\"reading_time\"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Current Value</ion-label>\n          <ion-input type=\"text\" formControlName=\"current_value\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Initial Value</ion-label>\n          <ion-input type=\"text\" formControlName=\"initial_value\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Owning Organization</ion-label>\n          <ion-select formControlName=\"owning_organization\">\n            <ion-select-option value=\"\">Please select</ion-select-option>\n            <ion-select-option value=\"ES-D\">ENGINEERING SERVICES - DISTRIBUTION</ion-select-option>\n            <ion-select-option value=\"FLEET\">FLEET</ion-select-option>\n            <ion-select-option value=\"NRW\">NRW</ion-select-option>\n            <ion-select-option value=\"PD-N\">PRODUCTION NORTHERN</ion-select-option>\n            <ion-select-option value=\"PD-S\">PRODUCTION SOUTHERN</ion-select-option>\n            <ion-select-option value=\"SCADA\">SCADA</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <!-- <ion-item>\n          <ion-label position=\"stacked\"\n            >Measurement Gauge Meter Reason</ion-label\n          >\n          <ion-textarea\n            rows=\"5\"\n            formControlName=\"measurement_gauge_meter_reason\"\n          ></ion-textarea>\n        </ion-item> -->\n      </form>\n    </ion-list>\n\n    <div class=\"ion-text-center ion-padding\">\n      <ion-button color=\"light\" (click)=\"clickDismiss()\">Cancel</ion-button>\n      <ion-button color=\"primary\" (click)=\"save()\">Save</ion-button>\n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/technical/measurement-type/measurement-type.page.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/technical/measurement-type/measurement-type.page.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTechnicalMeasurementTypeMeasurementTypePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlY2huaWNhbC9tZWFzdXJlbWVudC10eXBlL21lYXN1cmVtZW50LXR5cGUucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/technical/measurement-type/measurement-type.page.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/technical/measurement-type/measurement-type.page.ts ***!
    \***************************************************************************/

  /*! exports provided: MeasurementTypePage */

  /***/
  function srcAppPagesTechnicalMeasurementTypeMeasurementTypePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeasurementTypePage", function () {
      return MeasurementTypePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/notifications/notifications.service */
    "./src/app/shared/services/notifications/notifications.service.ts");
    /* harmony import */


    var src_app_shared_services_operational_readings_operational_readings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/operational-readings/operational-readings.service */
    "./src/app/shared/services/operational-readings/operational-readings.service.ts");

    var MeasurementTypePage =
    /*#__PURE__*/
    function () {
      function MeasurementTypePage(alertController, formBuilder, datePipe, location, menu, modalController, navParams, notificationService, operationalreadingService) {
        _classCallCheck(this, MeasurementTypePage);

        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.datePipe = datePipe;
        this.location = location;
        this.menu = menu;
        this.modalController = modalController;
        this.navParams = navParams;
        this.notificationService = notificationService;
        this.operationalreadingService = operationalreadingService;
        this.myDate = new Date();
        this.measurementtypeFormGroup = this.formBuilder.group({
          id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
          asset_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
          badge_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
          measurement_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
          reading_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](new Date().toISOString(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
          reading_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](new Date().toISOString(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
          current_value: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
          initial_value: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
          owning_organization: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
          date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
          status: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("")
        });

        if (this.navParams.get("measurementtype")) {
          this.measurementtypeFormGroup.patchValue(Object.assign({}, this.navParams.get("measurementtype")));
        }

        if (this.navParams.get("asset")) {
          this.measurementtypeFormGroup.patchValue(Object.assign({}, this.navParams.get("asset")));
        }
      }

      _createClass(MeasurementTypePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
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
        key: "save",
        value: function save() {
          // this.measurementtypeFormGroup.patchValue({
          //   status: "Pending for Approval",
          // });
          // this.operationalreadingService
          //   .update(
          //     this.measurementtypeFormGroup.value.id,
          //     this.measurementtypeFormGroup.value
          //   )
          //   .subscribe(
          //     (res) => {
          //       console.log("res", res);
          this.alertMeasurementType("Measurement Type", "Your measurement type have successfully submitted into the system. Thank you."); //   },
          //   (err) => {
          //     console.error("err", err);
          //   }
          // );
        }
      }, {
        key: "alertMeasurementType",
        value: function alertMeasurementType(header, message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: header,
                      message: message,
                      buttons: [{
                        text: "OK",
                        handler: function handler() {
                          _this.modalController.dismiss(_this.measurementtypeFormGroup.value);
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
        key: "clickDismiss",
        value: function clickDismiss() {
          this.modalController.dismiss();
        }
      }, {
        key: "openNotification",
        value: function openNotification() {
          this.menu.enable(true, "menuNotification");
          this.menu.open("menuNotification");
        }
      }]);

      return MeasurementTypePage;
    }();

    MeasurementTypePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
      }, {
        type: src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"]
      }, {
        type: src_app_shared_services_operational_readings_operational_readings_service__WEBPACK_IMPORTED_MODULE_6__["OperationalReadingsService"]
      }];
    };

    MeasurementTypePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-measurement-type",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./measurement-type.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/measurement-type/measurement-type.page.html")).default,
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./measurement-type.page.scss */
      "./src/app/pages/technical/measurement-type/measurement-type.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"], src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"], src_app_shared_services_operational_readings_operational_readings_service__WEBPACK_IMPORTED_MODULE_6__["OperationalReadingsService"]])], MeasurementTypePage);
    /***/
  },

  /***/
  "./src/app/shared/services/operational-readings/operational-readings.service.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/shared/services/operational-readings/operational-readings.service.ts ***!
    \**************************************************************************************/

  /*! exports provided: OperationalReadingsService */

  /***/
  function srcAppSharedServicesOperationalReadingsOperationalReadingsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OperationalReadingsService", function () {
      return OperationalReadingsService;
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

    var OperationalReadingsService =
    /*#__PURE__*/
    function () {
      function OperationalReadingsService(http) {
        _classCallCheck(this, OperationalReadingsService);

        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/operational-readings-pipe/"; // Data

        this.ormodels = [];
      }

      _createClass(OperationalReadingsService, [{
        key: "post",
        value: function post(body) {
          return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("OperationalReadingsModel", res);
          }));
        }
      }, {
        key: "get",
        value: function get() {
          var _this2 = this;

          return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("OperationalReadingsModel", res);
            _this2.ormodels = res;
          }));
        }
      }, {
        key: "getOne",
        value: function getOne(id) {
          var _this3 = this;

          var urlID = this.url + id + "/";
          return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("OperationalReadingsModel", res);
            _this3.ormodel = res;
          }));
        }
      }, {
        key: "update",
        value: function update(id, body) {
          return this.http.patch(this.url + id + '/', body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("OperationalReadingsModel", res);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("OperationalReadingsModel", res);
          }));
        }
      }, {
        key: "filter",
        value: function filter(field) {
          var urlFilter = this.url + "?" + field;
          return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("OperationalReadingsModel", res);
          }));
        }
      }, {
        key: "getDescOrderList",
        value: function getDescOrderList(body) {
          var urlOrdered = this.url + "asc_ordered_list/";
          return this.http.post(urlOrdered, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("WorkOrderActivityCompletionModel", res);
          }));
        }
      }]);

      return OperationalReadingsService;
    }();

    OperationalReadingsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    OperationalReadingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], OperationalReadingsService);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-technical-measurement-type-measurement-type-module~pages-technical-operational-reading~b806443f-es5.js.map