function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-technical-operational-reading-operational-reading-module~pages-technical-technical-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/operational-reading/operational-reading.page.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/operational-reading/operational-reading.page.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTechnicalOperationalReadingOperationalReadingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"clickBack()\">\n        <ion-icon src=\"../../../../assets/icon/air-selangor-icon.svg\" style=\"font-size: 2rem\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title style=\"font-weight: bold\"></ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openNotification()\">\n        <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n        <ion-badge size=\"small\" color=\"danger\" style=\"position: absolute; right: -5px; top: 1px\">\n          {{ notificationService.totalnotificationbyuser }}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content-core\">\n  <div class=\"ion-padding\">\n    <h4 class=\"ion-text-center ion-padding\">Operational Reading</h4>\n    <ion-list class=\"line-input\">\n      <form [formGroup]=\"operationalreadingFormGroup\">\n        <ion-item>\n          <ion-label position=\"stacked\">Asset Description</ion-label>\n          <ion-textarea rows=\"3\" [disabled]=\"true\" readonly formControlName=\"asset_description\"></ion-textarea>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Badge Number</ion-label>\n          <ion-input type=\"text\" [disabled]=\"true\" readonly formControlName=\"badge_number\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Location</ion-label>\n          <ion-textarea rows=\"3\" [disabled]=\"true\" readonly formControlName=\"location\"></ion-textarea>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Measurement Type</ion-label>\n          <!-- <ion-input type=\"text\" formControlName=\"measurent_type\"></ion-input> -->\n\n          <ion-select formControlName=\"measurent_type\" *ngIf=\"showButton == 'yes'\">\n            <ion-select-option value=\"\">Please select</ion-select-option>\n            <ion-select-option *ngFor=\"let choice of MeasurementTypeData\" [value]=\"choice.measurement_type\">\n              {{choice.measurement_type}}\n            </ion-select-option>\n          </ion-select>\n          <ion-input type=\"text\" *ngIf=\"showButton == 'no'\" [disabled]=\"true\" readonly formControlName=\"measurent_type\">\n          </ion-input>\n          <!-- <ion-select formControlName=\"measurent_type\">\n            <ion-select-option selected value=\"RUNNING-HOUR\">RUNNING HOUR</ion-select-option>\n            <ion-select-option value=\"TEMPERATURE-SENSOR\">TEMPERATURE SENSOR</ion-select-option>\n          </ion-select> -->\n\n          <!-- \n            1. Call data from /measurement-types\n            2. Save @ variable\n            3. Contoh measurements\n           -->\n        </ion-item>\n\n\n        <ion-item>\n          <ion-label position=\"stacked\">Reading Date</ion-label>\n          <ion-datetime *ngIf=\"showButton == 'yes'\" displayFormat=\"YYYY-MM-DD HH:mm:ss\"\n            formControlName=\"reading_datetime\">\n          </ion-datetime>\n          <ion-datetime *ngIf=\"showButton == 'no'\" [disabled]=\"true\" displayFormat=\"YYYY-MM-DD HH:mm:ss\"\n            formControlName=\"reading_datetime\">\n          </ion-datetime>\n          <!-- <ion-input *ngIf=\"showButton == yes\" type=\"text\" [disabled]=\"true\" readonly\n            formControlName=\"reading_datetime\"></ion-input> -->\n        </ion-item>\n\n        <!-- <ion-item>\n          <ion-label position=\"stacked\">Reading Time</ion-label>\n          <ion-datetime displayFormat=\"HH:mm\" formControlName=\"reading_time\"></ion-datetime>\n        </ion-item> -->\n\n        <ion-item>\n          <ion-label position=\"stacked\">Current Value</ion-label>\n          <ion-input *ngIf=\"showButton == 'yes'\" type=\"number\" formControlName=\"current_value\"></ion-input>\n          <ion-input *ngIf=\"showButton == 'no'\" type=\"number\" [disabled]=\"true\" readonly\n            formControlName=\"current_value\">\n          </ion-input>\n        </ion-item>\n\n        <!-- <ion-item>\n          <ion-label position=\"stacked\">Initial Value</ion-label>\n          <ion-input type=\"number\" formControlName=\"initial_value_flag\"></ion-input>\n        </ion-item> -->\n\n        <!-- <ion-item>\n          <ion-label position=\"stacked\">Owning Organization</ion-label>\n          <ion-input type=\"text\" formControlName=\"owning_organization\"></ion-input>\n        </ion-item> -->\n\n      </form>\n    </ion-list>\n\n    <!-- <ion-item lines=\"none\">\n      <ion-label class=\"ion-text-start\">Measurement Type</ion-label>\n      <ion-button (click)=\"clickAddMeasurementType()\">Add</ion-button>\n    </ion-item> -->\n\n    <ion-card *ngIf=\"operationalreadingFormGroup.value.measurement_type\">\n      <ion-card-header>\n        <ion-fab horizontal=\"end\">\n          <ion-fab-button size=\"small\" color=\"primary\" (click)=\"clickEdit(operationalreadingFormGroup.value)\">\n            <ion-icon name=\"create\"></ion-icon>\n          </ion-fab-button>\n          <!-- <ion-fab-button\n            size=\"small\"\n            color=\"danger\"\n            (click)=\"clickRemove(i)\"\n          >\n            <ion-icon name=\"trash\"></ion-icon>\n          </ion-fab-button> -->\n        </ion-fab>\n        <ion-card-title>Measurement Type <br />\n          {{ operationalreadingFormGroup.value.measurement_type\n          }}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p>\n          Reading Date/Time: {{\n          operationalreadingFormGroup.value.reading_date_time | date }}\n        </p>\n        <p>\n          Current Value: {{ operationalreadingFormGroup.value.current_value }}\n        </p>\n        <p>\n          Created Date: {{ operationalreadingFormGroup.value.record_date |\n          date:'mediumDate' }}\n        </p>\n      </ion-card-content>\n    </ion-card>\n\n    <div class=\"ion-text-center ion-padding\">\n      <ion-button color=\"light\" (click)=\"clickBack()\">Back</ion-button>\n      <ion-button *ngIf=\"showButton == 'yes'\" color=\"primary\" (click)=\"submit()\">Submit</ion-button>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/technical/operational-reading/operational-reading-routing.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/pages/technical/operational-reading/operational-reading-routing.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: OperationalReadingPageRoutingModule */

  /***/
  function srcAppPagesTechnicalOperationalReadingOperationalReadingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OperationalReadingPageRoutingModule", function () {
      return OperationalReadingPageRoutingModule;
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


    var _operational_reading_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./operational-reading.page */
    "./src/app/pages/technical/operational-reading/operational-reading.page.ts");

    var routes = [{
      path: '',
      component: _operational_reading_page__WEBPACK_IMPORTED_MODULE_3__["OperationalReadingPage"]
    }];

    var OperationalReadingPageRoutingModule = function OperationalReadingPageRoutingModule() {
      _classCallCheck(this, OperationalReadingPageRoutingModule);
    };

    OperationalReadingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OperationalReadingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/technical/operational-reading/operational-reading.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/technical/operational-reading/operational-reading.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: OperationalReadingPageModule */

  /***/
  function srcAppPagesTechnicalOperationalReadingOperationalReadingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OperationalReadingPageModule", function () {
      return OperationalReadingPageModule;
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


    var _operational_reading_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./operational-reading-routing.module */
    "./src/app/pages/technical/operational-reading/operational-reading-routing.module.ts");
    /* harmony import */


    var _operational_reading_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./operational-reading.page */
    "./src/app/pages/technical/operational-reading/operational-reading.page.ts");

    var OperationalReadingPageModule = function OperationalReadingPageModule() {
      _classCallCheck(this, OperationalReadingPageModule);
    };

    OperationalReadingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _operational_reading_routing_module__WEBPACK_IMPORTED_MODULE_5__["OperationalReadingPageRoutingModule"]],
      declarations: [_operational_reading_page__WEBPACK_IMPORTED_MODULE_6__["OperationalReadingPage"]]
    })], OperationalReadingPageModule);
    /***/
  },

  /***/
  "./src/app/pages/technical/operational-reading/operational-reading.page.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/technical/operational-reading/operational-reading.page.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTechnicalOperationalReadingOperationalReadingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlY2huaWNhbC9vcGVyYXRpb25hbC1yZWFkaW5nL29wZXJhdGlvbmFsLXJlYWRpbmcucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/technical/operational-reading/operational-reading.page.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/technical/operational-reading/operational-reading.page.ts ***!
    \*********************************************************************************/

  /*! exports provided: OperationalReadingPage */

  /***/
  function srcAppPagesTechnicalOperationalReadingOperationalReadingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OperationalReadingPage", function () {
      return OperationalReadingPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var src_app_shared_services_asset_registrations_asset_registrations_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/services/asset-registrations/asset-registrations.service */
    "./src/app/shared/services/asset-registrations/asset-registrations.service.ts");
    /* harmony import */


    var src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/services/notifications/notifications.service */
    "./src/app/shared/services/notifications/notifications.service.ts");
    /* harmony import */


    var src_app_shared_services_operational_readings_operational_readings_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/services/operational-readings/operational-readings.service */
    "./src/app/shared/services/operational-readings/operational-readings.service.ts");
    /* harmony import */


    var _measurement_type_measurement_type_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../measurement-type/measurement-type.page */
    "./src/app/pages/technical/measurement-type/measurement-type.page.ts");
    /* harmony import */


    var src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/shared/services/assets/assets.service */
    "./src/app/shared/services/assets/assets.service.ts");
    /* harmony import */


    var src_app_shared_services_owning_organisations_owning_organisations_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/shared/services/owning-organisations/owning-organisations.service */
    "./src/app/shared/services/owning-organisations/owning-organisations.service.ts");
    /* harmony import */


    var src_app_shared_services_asset_location_sync_asset_location_sync_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/shared/services/asset-location-sync/asset-location-sync.service */
    "./src/app/shared/services/asset-location-sync/asset-location-sync.service.ts");
    /* harmony import */


    var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/app/shared/services/auth/auth.service */
    "./src/app/shared/services/auth/auth.service.ts"); // import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";


    var OperationalReadingPage =
    /*#__PURE__*/
    function () {
      function OperationalReadingPage(alertController, formBuilder, datePipe, location, menu, modalController, assetregistrationService, notificationService, operationalreadingService, route, router, // private barcodeScanner: BarcodeScanner,
      camera, assetsService, owningorganisationsService, assetLocatioSyncService, authService) {
        var _this = this;

        _classCallCheck(this, OperationalReadingPage);

        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.datePipe = datePipe;
        this.location = location;
        this.menu = menu;
        this.modalController = modalController;
        this.assetregistrationService = assetregistrationService;
        this.notificationService = notificationService;
        this.operationalreadingService = operationalreadingService;
        this.route = route;
        this.router = router;
        this.camera = camera;
        this.assetsService = assetsService;
        this.owningorganisationsService = owningorganisationsService;
        this.assetLocatioSyncService = assetLocatioSyncService;
        this.authService = authService;
        this.OwningOrganisationsList = [];
        this.myDate = new Date();
        this.measurementtypes = [];
        this.showButton = 'yes';
        this.getOwningOrganisationsList();
        this.operationalreadingFormGroup = this.formBuilder.group({
          asset_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
          badge_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
          current_value: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
          measurent_identifier: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
          measurent_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
          initial_value_flag: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
          owning_organization: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
          reading_datetime: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
          submitted_datetime: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
          created_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
          modified_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
          location: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
          asset_description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
          record_by: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.authService.userID),
          modified_by: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.authService.userID) // record_date: new FormControl(
          //   this.datePipe.transform(this.myDate, "yyyy-MM-dd")
          // ),

        });
        this.route.queryParams.subscribe(function (params) {
          if (_this.router.getCurrentNavigation().extras.state) {
            // To get process from work request list
            _this.process = _this.router.getCurrentNavigation().extras.state.process; // To set value based on previous page

            _this.OpreationalReading = _this.router.getCurrentNavigation().extras.state.operationalreading;
            console.log("OpreationalReading = ", _this.OpreationalReading);

            _this.operationalreadingFormGroup.patchValue(Object.assign({}, _this.router.getCurrentNavigation().extras.state.operationalreading));

            if (_this.router.getCurrentNavigation().extras.state.badge_no) {
              _this.showButton = 'yes';
              console.log("this.showButton", _this.showButton);

              var badge_no = _this.router.getCurrentNavigation().extras.state.badge_no;

              _this.assetsService.filter("badge_no=" + badge_no).subscribe(function (res) {
                console.log("res qweqweewwq", res);

                if (res[0].measurement_types.length == 0) {
                  console.log("measurement_types.length = ", res[0].measurement_types.length); // res[0].measurement_types

                  var header = "Operational Reading";
                  var body = "No Measurement Required From This Asset";

                  _this.emptyMeasuremntType(header, body);
                }

                _this.MeasurementTypeData = res[0].measurement_types;

                _this.getAssetLocationSync(res[0].node_id);

                _this.getAssetExtended(res[0].id);

                _this.operationalreadingFormGroup.patchValue({
                  asset_description: res[0].description,
                  badge_number: res[0].badge_no,
                  asset_id: res[0].asset_id,
                  owning_organization: res[0].owning_access_group
                });
              });
            } else {
              _this.showButton = 'no';
              console.log("this.showButton", _this.showButton);

              _this.assetsService.filter("asset_id=" + _this.OpreationalReading.asset_id).subscribe(function (res) {
                console.log("asset qweqwe = ", res);

                if (res[0].measurement_types.length == 0) {
                  console.log("measurement_types.length = ", res[0].measurement_types.length);
                  var header = "Operational Reading";
                  var body = "No Measurement Required From This Asset";

                  _this.emptyMeasuremntType(header, body); // res[0].measurement_types

                }

                _this.MeasurementTypeData = res[0].measurement_types;

                _this.operationalreadingFormGroup.patchValue({
                  asset_description: res[0].description,
                  measurent_type: _this.OpreationalReading.measurent_type,
                  reading_datetime: _this.OpreationalReading['reading_datetime'],
                  current_value: _this.OpreationalReading['current_value']
                });

                console.log("this.operationalreadingFormGroup", _this.operationalreadingFormGroup);

                _this.getAssetLocationSync(res[0].node_id);

                _this.getAssetExtended(res[0].id);
              });
            }
          }
        });
      }

      _createClass(OperationalReadingPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          console.log("ionViewDidEnter OperationalReadingPage");
        }
      }, {
        key: "ionViewDidLeave",
        value: function ionViewDidLeave() {
          console.log("ionViewDidLeave OperationalReadingPage");
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("ngOnInit OperationalReadingPage");
          this.menu.enable(false, "menuNotification");
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          console.log("ngOnDestroy OperationalReadingPage");
        }
      }, {
        key: "getAssetLocationSync",
        value: function getAssetLocationSync(node_id) {
          var _this2 = this;

          // setInterval(() => {
          console.log("test node_id => ", node_id);
          this.assetLocatioSyncService.filter("node_id=" + node_id).subscribe(function (res) {
            console.log("res assetlsService = ", res);

            if (res.length != 0) {
              _this2.operationalreadingFormGroup.patchValue({
                location: res[0].description
              });
            }
          }, function (err) {
            console.log("err assetlsService = ", err);
          }); // }, 10000);
        }
      }, {
        key: "getOwningOrganisationsList",
        value: function getOwningOrganisationsList() {
          var _this3 = this;

          this.owningorganisationsService.get().subscribe(function (res) {
            console.log("owningorganisationsService = ", res);
            _this3.OwningOrganisationsList = res;
          });
        }
      }, {
        key: "getAssetExtended",
        value: function getAssetExtended(assetid) {
          var _this4 = this;

          this.assetsService.getOneExtended(assetid).subscribe(function (res) {
            console.log("res measurementtypes = ", res.measurement_types);
            _this4.MeasurementTypeData = res.measurement_types;
          });
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
        key: "emptyMeasuremntType",
        value: function emptyMeasuremntType(header, message) {
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
                      header: header,
                      message: message,
                      buttons: [{
                        text: "OK",
                        handler: function handler() {
                          _this5.router.navigate(["/technical/operational-reading-list"]);
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
        key: "submit",
        value: function submit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this6 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.operationalreadingService.post(this.operationalreadingFormGroup.value).subscribe(function (res) {
                      console.log("res", res);

                      _this6.alertOperationalReading("Operational Reading", // "Your operational reading have successfully submitted into the system. Thank you."
                      "Your operational reading has been successfully updated into the system.");
                    }, function (err) {
                      console.error("err", err);
                    });

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "alertOperationalReading",
        value: function alertOperationalReading(header, message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this7 = this;

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
                          _this7.router.navigate(["/technical/operational-reading-list"]);
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
        key: "clickAddMeasurementType",
        value: function clickAddMeasurementType() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this8 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.modalController.create({
                      component: _measurement_type_measurement_type_page__WEBPACK_IMPORTED_MODULE_10__["MeasurementTypePage"],
                      componentProps: {
                        asset: this.operationalreadingFormGroup.value
                      }
                    });

                  case 2:
                    modal = _context5.sent;
                    modal.onDidDismiss().then(function (value) {
                      _this8.operationalreadingFormGroup.patchValue(Object.assign({}, value.data, {
                        reading_date_time: new Date(value.data.reading_date).toISOString()
                      }));
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
        key: "clickBack",
        value: function clickBack() {
          this.router.navigate(["/technical/operational-reading-list"]);
        }
      }, {
        key: "openNotification",
        value: function openNotification() {
          this.menu.enable(true, "menuNotification");
          this.menu.open("menuNotification");
        }
      }, {
        key: "clickEdit",
        value: function clickEdit(measurementtype) {
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
                      component: _measurement_type_measurement_type_page__WEBPACK_IMPORTED_MODULE_10__["MeasurementTypePage"],
                      componentProps: {
                        measurementtype: measurementtype
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
        }
      }, {
        key: "clickRemove",
        value: function clickRemove(index) {
          this.measurementtypes.splice(index, 1);
        }
      }]);

      return OperationalReadingPage;
    }();

    OperationalReadingPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: src_app_shared_services_asset_registrations_asset_registrations_service__WEBPACK_IMPORTED_MODULE_7__["AssetRegistrationsService"]
      }, {
        type: src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_8__["NotificationsService"]
      }, {
        type: src_app_shared_services_operational_readings_operational_readings_service__WEBPACK_IMPORTED_MODULE_9__["OperationalReadingsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"]
      }, {
        type: src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_11__["AssetsService"]
      }, {
        type: src_app_shared_services_owning_organisations_owning_organisations_service__WEBPACK_IMPORTED_MODULE_12__["OwningorganisationsService"]
      }, {
        type: src_app_shared_services_asset_location_sync_asset_location_sync_service__WEBPACK_IMPORTED_MODULE_13__["AssetLocatioSyncService"]
      }, {
        type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"]
      }];
    };

    OperationalReadingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-operational-reading",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./operational-reading.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/operational-reading/operational-reading.page.html")).default,
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./operational-reading.page.scss */
      "./src/app/pages/technical/operational-reading/operational-reading.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], src_app_shared_services_asset_registrations_asset_registrations_service__WEBPACK_IMPORTED_MODULE_7__["AssetRegistrationsService"], src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_8__["NotificationsService"], src_app_shared_services_operational_readings_operational_readings_service__WEBPACK_IMPORTED_MODULE_9__["OperationalReadingsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"], src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_11__["AssetsService"], src_app_shared_services_owning_organisations_owning_organisations_service__WEBPACK_IMPORTED_MODULE_12__["OwningorganisationsService"], src_app_shared_services_asset_location_sync_asset_location_sync_service__WEBPACK_IMPORTED_MODULE_13__["AssetLocatioSyncService"], src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"]])], OperationalReadingPage);
    /***/
  },

  /***/
  "./src/app/shared/services/asset-registrations/asset-registrations.service.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/shared/services/asset-registrations/asset-registrations.service.ts ***!
    \************************************************************************************/

  /*! exports provided: AssetRegistrationsService */

  /***/
  function srcAppSharedServicesAssetRegistrationsAssetRegistrationsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetRegistrationsService", function () {
      return AssetRegistrationsService;
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

    var AssetRegistrationsService =
    /*#__PURE__*/
    function () {
      function AssetRegistrationsService(http) {
        _classCallCheck(this, AssetRegistrationsService);

        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/asset-registration/"; // Data

        this.amodels = [];
      }

      _createClass(AssetRegistrationsService, [{
        key: "post",
        value: function post(body) {
          return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetRegistrationsModel", res);
          }));
        }
      }, {
        key: "get",
        value: function get() {
          var _this9 = this;

          return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetRegistrationsModel", res);
            _this9.amodels = res;
          }));
        }
      }, {
        key: "getOne",
        value: function getOne(id) {
          var _this10 = this;

          var urlID = this.url + id + "/";
          return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetRegistrationsModel", res);
            _this10.amodel = res;
          }));
        }
      }, {
        key: "update",
        value: function update(body) {
          return this.http.patch(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetRegistrationsModel", res);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetRegistrationsModel", res);
          }));
        }
      }, {
        key: "filter",
        value: function filter(field) {
          var urlFilter = this.url + "?" + field;
          return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetRegistrationsModel", res);
          }));
        }
      }, {
        key: "patch_asset",
        value: function patch_asset(body) {
          var urlPatchAsset = this.url + "patch_asset/";
          return this.http.post(urlPatchAsset, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetRegistrationsModel", res);
          }));
        }
      }]);

      return AssetRegistrationsService;
    }();

    AssetRegistrationsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    AssetRegistrationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], AssetRegistrationsService);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-technical-operational-reading-operational-reading-module~pages-technical-technical-module-es5.js.map