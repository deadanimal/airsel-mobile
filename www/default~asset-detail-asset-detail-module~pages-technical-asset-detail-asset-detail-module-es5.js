function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~asset-detail-asset-detail-module~pages-technical-asset-detail-asset-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/asset-detail/asset-detail.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/asset-detail/asset-detail.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTechnicalAssetDetailAssetDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"clickBack()\">\n        <ion-icon src=\"../../../../assets/icon/air-selangor-icon.svg\" style=\"font-size: 2rem\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title style=\"font-weight: bold\"> Asset Detail </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openNotification()\">\n        <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n        <ion-badge size=\"small\" color=\"danger\" style=\"position: absolute; right: -5px; top: 1px\">\n          {{ notificationService.totalnotificationbyuser }}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content-core\">\n  <!-- <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"scanQrCode()\">\n      <ion-icon name=\"scan\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab> -->\n  <div class=\"ion-padding\">\n    <ion-list class=\"ion-padding line-input\">\n\n      <ion-item>\n        <ion-label position=\"stacked\">Badge No</ion-label>\n        <ion-input type=\"text\" [disabled]=\"true\" [value]=\"asset_detail.badge_no\" readonly></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Asset ID</ion-label>\n        <ion-input type=\"text\" [disabled]=\"true\" [value]=\"asset_detail.asset_id\" readonly></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Asset Type</ion-label>\n        <ion-input type=\"text\" [disabled]=\"true\" readonly [value]=\"asset_detail.asset_type\" readonly></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Asset Description</ion-label>\n        <!-- <ion-input type=\"text\" (change)=\"onKeyAssDesc($event.target.value,asset_detail)\"\n          [value]=\"asset_detail.description\">\n        </ion-input> -->\n        <ion-textarea rows=\"3\" (change)=\"onKeyAssDesc($event.target.value,asset_detail)\"\n          [value]=\"asset_detail.description\"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Asset Location</ion-label>\n        <ion-textarea rows=\"3\" [disabled]=\"true\" [value]=\"assetLocatioSyncdata\" readonly></ion-textarea>\n      </ion-item>\n    </ion-list>\n\n\n    <ion-list-header *ngIf=\"assetAttrColumn != []\">\n      <ion-label>Asset Attribute </ion-label>\n    </ion-list-header>\n\n    <ion-list class=\"ion-padding line-input\">\n      <ion-item *ngFor=\"let assetAttr of assetAttributedatas\">\n        <ion-label position=\"stacked\">{{assetAttr.field_name | titlecase}}</ion-label>\n\n        <ion-input type=\"text\" *ngIf=\"assetAttr.dropdown == 'no'\" (change)=\"onKey($event.target.value,assetAttr)\"\n          value=\"{{assetAttr.field_value}}\">\n        </ion-input>\n\n        <ion-select *ngIf=\"assetAttr.dropdown == 'yes'\" (ionChange)=\"onKey($event.target.value,assetAttr)\">\n          <ion-select-option *ngFor=\"let assAtt of assetAttr.option\" [value]=\"assAtt.characteristic_value\">\n            {{assAtt.characteristic_value}}</ion-select-option>\n        </ion-select>\n\n      </ion-item>\n    </ion-list>\n\n  </div>\n\n  <div class=\"ion-padding ion-text-center\">\n    <ion-button color=\"light\" (click)=\"cancel()\">Cancel</ion-button>\n    <ion-button color=\"primary\" (click)=\"updateDetails()\">Update</ion-button>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/technical/asset-detail/asset-detail-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/technical/asset-detail/asset-detail-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: AssetDetailPageRoutingModule */

  /***/
  function srcAppPagesTechnicalAssetDetailAssetDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetDetailPageRoutingModule", function () {
      return AssetDetailPageRoutingModule;
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


    var _asset_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./asset-detail.page */
    "./src/app/pages/technical/asset-detail/asset-detail.page.ts");

    var routes = [{
      path: '',
      component: _asset_detail_page__WEBPACK_IMPORTED_MODULE_3__["AssetDetailPage"]
    }];

    var AssetDetailPageRoutingModule = function AssetDetailPageRoutingModule() {
      _classCallCheck(this, AssetDetailPageRoutingModule);
    };

    AssetDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AssetDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/technical/asset-detail/asset-detail.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/technical/asset-detail/asset-detail.module.ts ***!
    \*********************************************************************/

  /*! exports provided: AssetDetailPageModule */

  /***/
  function srcAppPagesTechnicalAssetDetailAssetDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetDetailPageModule", function () {
      return AssetDetailPageModule;
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


    var _asset_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./asset-detail-routing.module */
    "./src/app/pages/technical/asset-detail/asset-detail-routing.module.ts");
    /* harmony import */


    var _asset_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./asset-detail.page */
    "./src/app/pages/technical/asset-detail/asset-detail.page.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var AssetDetailPageModule = function AssetDetailPageModule() {
      _classCallCheck(this, AssetDetailPageModule);
    };

    AssetDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _asset_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["AssetDetailPageRoutingModule"]],
      declarations: [_asset_detail_page__WEBPACK_IMPORTED_MODULE_6__["AssetDetailPage"]]
    })], AssetDetailPageModule);
    /***/
  },

  /***/
  "./src/app/pages/technical/asset-detail/asset-detail.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/technical/asset-detail/asset-detail.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTechnicalAssetDetailAssetDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlY2huaWNhbC9hc3NldC1kZXRhaWwvYXNzZXQtZGV0YWlsLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/technical/asset-detail/asset-detail.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/technical/asset-detail/asset-detail.page.ts ***!
    \*******************************************************************/

  /*! exports provided: AssetDetailPage */

  /***/
  function srcAppPagesTechnicalAssetDetailAssetDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetDetailPage", function () {
      return AssetDetailPage;
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


    var src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/assets/assets.service */
    "./src/app/shared/services/assets/assets.service.ts");
    /* harmony import */


    var src_app_shared_services_asset_groups_asset_groups_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/services/asset-groups/asset-groups.service */
    "./src/app/shared/services/asset-groups/asset-groups.service.ts");
    /* harmony import */


    var src_app_shared_services_asset_types_asset_types_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/services/asset-types/asset-types.service */
    "./src/app/shared/services/asset-types/asset-types.service.ts");
    /* harmony import */


    var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/services/auth/auth.service */
    "./src/app/shared/services/auth/auth.service.ts");
    /* harmony import */


    var src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/services/notifications/notifications.service */
    "./src/app/shared/services/notifications/notifications.service.ts");
    /* harmony import */


    var src_app_shared_services_asset_location_sync_asset_location_sync_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/shared/services/asset-location-sync/asset-location-sync.service */
    "./src/app/shared/services/asset-location-sync/asset-location-sync.service.ts");
    /* harmony import */


    var src_app_shared_services_asset_attribute_asset_attribute_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/shared/services/asset-attribute/asset-attribute.service */
    "./src/app/shared/services/asset-attribute/asset-attribute.service.ts");
    /* harmony import */


    var src_app_shared_services_asset_attribute_reference_asset_attribute_reference_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/shared/services/asset-attribute-reference/asset-attribute-reference.service */
    "./src/app/shared/services/asset-attribute-reference/asset-attribute-reference.service.ts");
    /* harmony import */


    var src_app_shared_services_asset_attribute_column_asset_attribute_column_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/app/shared/services/asset-attribute-column/asset-attribute-column.service */
    "./src/app/shared/services/asset-attribute-column/asset-attribute-column.service.ts");
    /* harmony import */


    var src_app_shared_services_asset_attribute_predefine_asset_attribute_prodefine_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/app/shared/services/asset-attribute-predefine/asset-attribute-prodefine.service */
    "./src/app/shared/services/asset-attribute-predefine/asset-attribute-prodefine.service.ts"); // import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";


    var AssetDetailPage =
    /*#__PURE__*/
    function () {
      function AssetDetailPage(datePipe, formBuilder, alertController, menu, assetsService, assetGroupsService, assetTypesService, authService, notificationService, route, router, // private barcodeScanner: BarcodeScanner
      assetLocatioSyncService, assetAttributeService, assetAttributeReferenceService, assetAttributeColumnService, assetAttributePredefineService) {
        var _this = this;

        _classCallCheck(this, AssetDetailPage);

        this.datePipe = datePipe;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.menu = menu;
        this.assetsService = assetsService;
        this.assetGroupsService = assetGroupsService;
        this.assetTypesService = assetTypesService;
        this.authService = authService;
        this.notificationService = notificationService;
        this.route = route;
        this.router = router;
        this.assetLocatioSyncService = assetLocatioSyncService;
        this.assetAttributeService = assetAttributeService;
        this.assetAttributeReferenceService = assetAttributeReferenceService;
        this.assetAttributeColumnService = assetAttributeColumnService;
        this.assetAttributePredefineService = assetAttributePredefineService;
        this.asset_detail = {
          id: "",
          asset_id: "",
          badge_no: "",
          node_id: "",
          hex_code: "",
          asset_identity: "",
          parent_location: "",
          location_description: "",
          building: "",
          address_line_1: "",
          address_line_2: "",
          address_line_3: "",
          city: "",
          state: "",
          postal_code: "",
          country: "",
          tag_number: "",
          service_area: "",
          location_main_contact: "",
          location_asset_maintenance_manager: "",
          maintenance_planner: "",
          gis_esri_id: "",
          latitude: "",
          longitude: "",
          asset_critically: "",
          cost_center: "",
          asset_owning_department: "",
          main_operation: "",
          region: "",
          operation: "",
          process_function: "",
          sub_process_system: "",
          asset_or_component_type: "",
          asset_class_asset_category: "",
          handed_over_asset_or_procured: "",
          internal_asset_adentity: "",
          asset_primary_category: "",
          sub_category_1: "",
          sub_category_2: "",
          brand: "",
          model_number: "",
          size_capacity_1: "",
          size_capacity_1_unit_measurement: "",
          size_capacity_2: "",
          size_capacity_2_unit_measurement: "",
          size_capacity_3: "",
          size_capacity_3_unit_measurement: "",
          parent_asset_plate_number: "",
          asset_plate_number: "",
          detailed_description: "",
          serial_number: "",
          asset_tag_number: "",
          purchase_date_installed_handed_over_date: "",
          condition_rating: "",
          maintenance_specification: "",
          measurement_type: "",
          warranty: "",
          actual_warranty_period: "",
          warranty_vendor_name: "",
          bottom_water_level: "",
          closing_torque: "",
          dimention: "",
          frequency: "",
          infrastructure_status: "",
          installation: "",
          manufacturer: "",
          material_type: "",
          no_of_channel: "",
          opening_torque: "",
          pump_head: "",
          staging_height: "",
          top_water_level: "",
          valve_pressure_rating: "",
          vehicle_engine_number: "",
          vehicle_insurance_auto_windscreen_insured: "",
          vehicle_insurance_date_period_to: "",
          vehicle_insurance_sum_insured: "",
          vehicle_owner_status: "",
          vehicle_puspakom_expired_date: "",
          vehicle_roadtax_expired_date: "",
          vehicle_seating_capacity: "",
          communication_protocol: "",
          environmental_performance: "",
          horse_power: "",
          infrastructure_status_reason: "",
          insulation: "",
          manufacturer_year: "",
          model: "",
          no_of_phases: "",
          outlet_diameter: "",
          revolutions_per_minute: "",
          supply_location: "",
          type: "",
          vehicle_chasis_number: "",
          vehicle_insurance_vendor: "",
          vehicle_insurance_cover_note_number: "",
          vehicle_insurance_no_claim_discount: "",
          vehicle_insurance_total_premium: "",
          vehicle_register_date: "",
          vehicle_spad_permit_date_period_to: "",
          vehicle_spad_no_license_operator: "",
          vehicle_registration_owner: "",
          capacity_size: "",
          coverage_range: "",
          flow_rate: "",
          hysteresis: "",
          inlet_diameter: "",
          legal_name: "",
          manufacture_part_number: "",
          motor_current: "",
          no_of_stage: "",
          power_supply_type: "",
          source_from: "",
          temperature: "",
          valve_diameter: "",
          vehicle_engine_capacity: "",
          vehicle_model: "",
          vehicle_insurance_date_period_from: "",
          vehicle_insurance_policy_type: "",
          vehicle_puspakom_date_inspection: "",
          vehicle_roadtarate: "",
          vehicle_roadtax_renew_date: "",
          vehicle_spad_permit_date_period_from: "",
          voltage: "",
          asset_status: "",
          status: "",
          created_at: "",
          modified_at: ""
        };
        this.assetAttributedatas = []; // Forms
        // firstFormGroup: FormGroup;
        // secondFormGroup: FormGroup;
        // thirdFormGroup: FormGroup;
        // fourthFormGroup: FormGroup;
        // fifthFormGroup: FormGroup;
        // sixthFormGroup: FormGroup;
        // seventhFormGroup: FormGroup;
        // validation_messages = [];

        this.myDate = new Date();
        this.assetAttributeId = [];
        this.assetAttributeColumnFormData = [];
        this.assetAttrCollumn = [];
        this.arraytype = [];
        this.field_value = '';
        this.route.queryParams.subscribe(function (params) {
          if (_this.router.getCurrentNavigation().extras.state) {
            _this.asset_detail = _this.router.getCurrentNavigation().extras.state.asset_detail; // console.log("this.asset_detail==>><<", this.asset_detail)

            var asset_attributes = _this.asset_detail["asset_attributes"]; // console.log('assetType = ', assetType)
            // this.getAssetAttributeData()

            _this.getAssetAttributeData(asset_attributes); // console.log("this.asset_detail ooooo = ", this.asset_detail)
            // console.log("this.asset_detail asset_id = ", this.asset_detail.asset_type)


            var asset_type = "asset_type_code=" + _this.asset_detail['asset_type'];
            _this.assetAttributeId = _this.asset_detail['asset_attributes']; // console.log("this.assetAttributeId----", this.assetAttributeId)

            _this.assetTypesService.filter(asset_type).subscribe(function (assTypeRes) {
              // console.log("assTypeRes", assTypeRes)
              // console.log("assTypeRes", assTypeRes[0]['asset_type_description'])
              var asset_typedesc = "asset_type_id=" + assTypeRes[0]['asset_type_description']; // console.log(asset_typedesc)

              _this.assetAttributeColumnService.filter(asset_typedesc).subscribe(function (assAttColRes) {
                // console.log("assAttColRes = ", assAttColRes)
                _this.getAssAttrColumnData(assAttColRes[0]);
              }, function (err) {
                console.log(err);
              });
            }, function (err) {
              console.log(err);
            }); // if (this.asset_detail.asset_primary_category.match(/Pump/i)) {
            //   this.asset_type = "Pump";
            // } else if (this.asset_detail.asset_primary_category.match(/Motor/i)) {
            //   this.asset_type = "Motor";
            // }


            if (_this.asset_detail['attached_to_asset_id'] == '') {
              _this.assetLocatioSyncService.filter("node_id=" + _this.asset_detail['node_id']).subscribe(function (res) {
                // console.log("assetLocatioSyncServiceres", res);
                // this.assetregistrations = res;
                // this.assetLocatioSyncdata = res[0].description
                if (res.length > 0) {
                  _this.assetLocatioSyncdata = res[0].description;
                } else {
                  _this.assetLocatioSyncdata = '-';
                } // console.log(" this.assetLocatioSyncdata = ", this.assetLocatioSyncdata)

              }, function (err) {
                console.error("err", err);
              });
            } else {
              _this.assetsService.filter("asset_id=" + _this.asset_detail['attached_to_asset_id']).subscribe(function (resA) {
                console.log("assetqqqqqqqqq=res", resA);

                _this.assetLocatioSyncService.filter("node_id=" + resA[0]['node_id']).subscribe(function (resAls) {
                  console.log("resAls>><<>>", resAls);

                  if (resAls.length > 0) {
                    _this.assetLocatioSyncdata = resAls[0].description;
                  } else {
                    _this.assetLocatioSyncdata = '-';
                  } // console.log(" this.assetLocatioSyncdata = ", this.assetLocatioSyncdata)

                }, function (err) {
                  console.error("err", err);
                });
              }, function (error) {
                console.log(error);
              });
            } // this.assetLocatioSyncService.filter("node_id=" + this.asset_detail.node_id).subscribe(
            //   (res) => {
            //     // console.log("assetLocatioSyncServiceres", res);
            //     // this.assetregistrations = res;
            //     if (res.length > 0) {
            //       this.assetLocatioSyncdata = res[0].description
            //     } else {
            //       this.assetLocatioSyncdata = '-'
            //     }
            //     // console.log(" this.assetLocatioSyncdata = ", this.assetLocatioSyncdata)
            //   },
            //   (err) => {
            //     console.error("err", err);
            //   }
            // );

          }
        });
      }

      _createClass(AssetDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getAssAttrColumnData",
        value: function getAssAttrColumnData(assAttCol) {
          var _this2 = this;

          // arraytype = []
          setTimeout(function () {
            // console.log("this.assetAttributedatas<>><><>", this.assetAttributedatas)
            // this.assetAttributedatas.forEach((elementqq) => {
            //   console.log("elementqq = ", elementqq)
            //   arraytype.push(elementqq.field_name)
            // })
            // for (let key in this.assetAttributedatas) {
            //   let child = this.assetAttributedatas[key];
            //   console.log("qweqweqweqqwe", this.assetAttributedatas[key])
            // }
            // for (let i = 0; i <= this.assetAttributedatas.length; i++) {
            //   console.log("this.assetAttributedatas = ", this.assetAttributedatas[i])
            //   arraytype.push(this.assetAttributedatas[i].field_name)
            // }
            // console.log("this.arraytype>>>>>>>", this.arraytype)
            if (assAttCol['bottom_water_level'] == true) {
              if (_this2.arraytype.indexOf('bottom_water_level') == -1) {
                var assAttColTemp = [];
                assAttColTemp['id'] = '';
                assAttColTemp['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                assAttColTemp['characteristic_type'] = '';
                assAttColTemp['characteristic_type_name'] = 'bottom_water_level';
                assAttColTemp['field_name'] = 'bottom_water_level';
                assAttColTemp['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(assAttColTemp);
              }
            }

            if (assAttCol['closing_torque'] == true) {
              if (_this2.arraytype.indexOf('closing_torque') == -1) {
                var _assAttColTemp = [];
                _assAttColTemp['id'] = '';
                _assAttColTemp['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp['characteristic_type'] = '';
                _assAttColTemp['characteristic_type_name'] = 'closing_torque';
                _assAttColTemp['field_name'] = 'closing_torque';
                _assAttColTemp['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp);
              }
            }

            if (assAttCol['dimention'] == true) {
              if (_this2.arraytype.indexOf('dimention') == -1) {
                var _assAttColTemp2 = [];
                _assAttColTemp2['id'] = '';
                _assAttColTemp2['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp2['characteristic_type'] = '';
                _assAttColTemp2['characteristic_type_name'] = 'dimention';
                _assAttColTemp2['field_name'] = 'dimention';
                _assAttColTemp2['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp2);
              }
            }

            if (assAttCol['frequency'] == true) {
              if (_this2.arraytype.indexOf('frequency') == -1) {
                var _assAttColTemp3 = [];
                _assAttColTemp3['id'] = '';
                _assAttColTemp3['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp3['characteristic_type'] = '';
                _assAttColTemp3['characteristic_type_name'] = 'frequency';
                _assAttColTemp3['field_name'] = 'frequency';
                _assAttColTemp3['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp3);
              }
            }

            if (assAttCol['infrastructure_status'] == true) {
              if (_this2.arraytype.indexOf('infrastructure_status') == -1) {
                var _assAttColTemp4 = [];
                _assAttColTemp4['id'] = '';
                _assAttColTemp4['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp4['characteristic_type'] = '';
                _assAttColTemp4['characteristic_type_name'] = 'infrastructure_status';
                _assAttColTemp4['field_name'] = 'infrastructure_status';
                _assAttColTemp4['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp4);
              }
            }

            if (assAttCol['installation'] == true) {
              if (_this2.arraytype.indexOf('installation') == -1) {
                // console.log("assAttCol['installation']  = ", assAttCol['installation'])
                // console.log("this.arraytype.indexOf('installation')  = ", this.arraytype.indexOf('installation'))
                var _assAttColTemp5 = [];
                _assAttColTemp5['id'] = '';
                _assAttColTemp5['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp5['characteristic_type'] = '';
                _assAttColTemp5['characteristic_type_name'] = 'installation';
                _assAttColTemp5['field_name'] = 'installation';
                _assAttColTemp5['field_value'] = '';
                _assAttColTemp5['characteristic_value'] = null;

                _this2.assetAttributedatas.push(_assAttColTemp5);
              }
            }

            if (assAttCol['manufacturer'] == true) {
              // console.log("gggggggg")
              if (_this2.arraytype.indexOf('manufacturer') == -1) {
                // console.log("hhhhhhh")
                var _assAttColTemp6 = [];
                _assAttColTemp6['id'] = '';
                _assAttColTemp6['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp6['characteristic_type'] = '';
                _assAttColTemp6['characteristic_type_name'] = 'manufacturer';
                _assAttColTemp6['field_name'] = 'manufacturer';
                _assAttColTemp6['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp6);
              }
            }

            if (assAttCol['material_type'] == true) {
              if (_this2.arraytype.indexOf('material_type') == -1) {
                var _assAttColTemp7 = [];
                _assAttColTemp7['id'] = '';
                _assAttColTemp7['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp7['characteristic_type'] = '';
                _assAttColTemp7['characteristic_type_name'] = 'material_type';
                _assAttColTemp7['field_name'] = 'material_type';
                _assAttColTemp7['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp7);
              }
            }

            if (assAttCol['no_of_channel'] == true) {
              if (_this2.arraytype.indexOf('no_of_channel') == -1) {
                var _assAttColTemp8 = [];
                _assAttColTemp8['id'] = '';
                _assAttColTemp8['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp8['characteristic_type'] = '';
                _assAttColTemp8['characteristic_type_name'] = 'no_of_channel';
                _assAttColTemp8['field_name'] = 'no_of_channel';
                _assAttColTemp8['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp8);
              }
            }

            if (assAttCol['opening_torque'] == true) {
              if (_this2.arraytype.indexOf('opening_torque') == -1) {
                var _assAttColTemp9 = [];
                _assAttColTemp9['id'] = '';
                _assAttColTemp9['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp9['characteristic_type'] = '';
                _assAttColTemp9['characteristic_type_name'] = 'opening_torque';
                _assAttColTemp9['field_name'] = 'opening_torque';
                _assAttColTemp9['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp9);
              }
            }

            if (assAttCol['pump_head'] == true) {
              if (_this2.arraytype.indexOf('pump_head') == -1) {
                var _assAttColTemp10 = [];
                _assAttColTemp10['id'] = '';
                _assAttColTemp10['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp10['characteristic_type'] = '';
                _assAttColTemp10['characteristic_type_name'] = 'pump_head';
                _assAttColTemp10['field_name'] = 'pump_head';
                _assAttColTemp10['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp10);
              }
            }

            if (assAttCol['staging_height'] == true) {
              if (_this2.arraytype.indexOf('staging_height') == -1) {
                var _assAttColTemp11 = [];
                _assAttColTemp11['id'] = '';
                _assAttColTemp11['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp11['characteristic_type'] = '';
                _assAttColTemp11['characteristic_type_name'] = 'staging_height';
                _assAttColTemp11['field_name'] = 'staging_height';
                _assAttColTemp11['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp11);
              }
            }

            if (assAttCol['top_water_level'] == true) {
              if (_this2.arraytype.indexOf('top_water_level') == -1) {
                var _assAttColTemp12 = [];
                _assAttColTemp12['id'] = '';
                _assAttColTemp12['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp12['characteristic_type'] = '';
                _assAttColTemp12['characteristic_type_name'] = 'top_water_level';
                _assAttColTemp12['field_name'] = 'top_water_level';
                _assAttColTemp12['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp12);
              }
            }

            if (assAttCol['valve_pressure_rating'] == true) {
              if (_this2.arraytype.indexOf('valve_pressure_rating') == -1) {
                var _assAttColTemp13 = [];
                _assAttColTemp13['id'] = '';
                _assAttColTemp13['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp13['characteristic_type'] = '';
                _assAttColTemp13['characteristic_type_name'] = 'valve_pressure_rating';
                _assAttColTemp13['field_name'] = 'valve_pressure_rating';
                _assAttColTemp13['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp13);
              }
            }

            if (assAttCol['vehicle_engine_number'] == true) {
              if (_this2.arraytype.indexOf('vehicle_engine_number') == -1) {
                var _assAttColTemp14 = [];
                _assAttColTemp14['id'] = '';
                _assAttColTemp14['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp14['characteristic_type'] = '';
                _assAttColTemp14['characteristic_type_name'] = 'vehicle_engine_number';
                _assAttColTemp14['field_name'] = 'vehicle_engine_number';
                _assAttColTemp14['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp14);
              }
            }

            if (assAttCol['vehicle_insurance_auto_windscreen_insured'] == true) {
              if (_this2.arraytype.indexOf('vehicle_insurance_auto_windscreen_insured') == -1) {
                var _assAttColTemp15 = [];
                _assAttColTemp15['id'] = '';
                _assAttColTemp15['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp15['characteristic_type'] = '';
                _assAttColTemp15['characteristic_type_name'] = 'vehicle_insurance_auto_windscreen_insured';
                _assAttColTemp15['field_name'] = 'vehicle_insurance_auto_windscreen_insured';
                _assAttColTemp15['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp15);
              }
            }

            if (assAttCol['vehicle_insurance_date_period_to'] == true) {
              if (_this2.arraytype.indexOf('vehicle_insurance_date_period_to') == -1) {
                var _assAttColTemp16 = [];
                _assAttColTemp16['id'] = '';
                _assAttColTemp16['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp16['characteristic_type'] = '';
                _assAttColTemp16['characteristic_type_name'] = 'vehicle_insurance_date_period_to';
                _assAttColTemp16['field_name'] = 'vehicle_insurance_date_period_to';
                _assAttColTemp16['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp16);
              }
            }

            if (assAttCol['vehicle_insurance_sum_insured'] == true) {
              if (_this2.arraytype.indexOf('vehicle_insurance_sum_insured') == -1) {
                var _assAttColTemp17 = [];
                _assAttColTemp17['id'] = '';
                _assAttColTemp17['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp17['characteristic_type'] = '';
                _assAttColTemp17['characteristic_type_name'] = 'vehicle_insurance_sum_insured';
                _assAttColTemp17['field_name'] = 'vehicle_insurance_sum_insured';
                _assAttColTemp17['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp17);
              }
            }

            if (assAttCol['vehicle_owner_status'] == true) {
              if (_this2.arraytype.indexOf('vehicle_owner_status') == -1) {
                var _assAttColTemp18 = [];
                _assAttColTemp18['id'] = '';
                _assAttColTemp18['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp18['characteristic_type'] = '';
                _assAttColTemp18['characteristic_type_name'] = 'vehicle_owner_status';
                _assAttColTemp18['field_name'] = 'vehicle_owner_status';
                _assAttColTemp18['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp18);
              }
            }

            if (assAttCol['vehicle_puspakom_expired_date'] == true) {
              if (_this2.arraytype.indexOf('vehicle_puspakom_expired_date') == -1) {
                var _assAttColTemp19 = [];
                _assAttColTemp19['id'] = '';
                _assAttColTemp19['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp19['characteristic_type'] = '';
                _assAttColTemp19['characteristic_type_name'] = 'vehicle_puspakom_expired_date';
                _assAttColTemp19['field_name'] = 'vehicle_puspakom_expired_date';
                _assAttColTemp19['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp19);
              }
            }

            if (assAttCol['vehicle_roadtax_expired_date'] == true) {
              if (_this2.arraytype.indexOf('vehicle_roadtax_expired_date') == -1) {
                var _assAttColTemp20 = [];
                _assAttColTemp20['id'] = '';
                _assAttColTemp20['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp20['characteristic_type'] = '';
                _assAttColTemp20['characteristic_type_name'] = 'vehicle_roadtax_expired_date';
                _assAttColTemp20['field_name'] = 'vehicle_roadtax_expired_date';
                _assAttColTemp20['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp20);
              }
            }

            if (assAttCol['vehicle_seating_capacity'] == true) {
              if (_this2.arraytype.indexOf('vehicle_seating_capacity') == -1) {
                var _assAttColTemp21 = [];
                _assAttColTemp21['id'] = '';
                _assAttColTemp21['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp21['characteristic_type'] = '';
                _assAttColTemp21['characteristic_type_name'] = 'vehicle_seating_capacity';
                _assAttColTemp21['field_name'] = 'vehicle_seating_capacity';
                _assAttColTemp21['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp21);
              }
            }

            if (assAttCol['communication_protocol'] == true) {
              if (_this2.arraytype.indexOf('communication_protocol') == -1) {
                var _assAttColTemp22 = [];
                _assAttColTemp22['id'] = '';
                _assAttColTemp22['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp22['characteristic_type'] = '';
                _assAttColTemp22['characteristic_type_name'] = 'communication_protocol';
                _assAttColTemp22['field_name'] = 'communication_protocol';
                _assAttColTemp22['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp22);
              }
            }

            if (assAttCol['environmental_performance'] == true) {
              if (_this2.arraytype.indexOf('environmental_performance') == -1) {
                var _assAttColTemp23 = [];
                _assAttColTemp23['id'] = '';
                _assAttColTemp23['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp23['characteristic_type'] = '';
                _assAttColTemp23['characteristic_type_name'] = 'environmental_performance';
                _assAttColTemp23['field_name'] = 'environmental_performance';
                _assAttColTemp23['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp23);
              }
            }

            if (assAttCol['horse_power'] == true) {
              if (_this2.arraytype.indexOf('horse_power') == -1) {
                var _assAttColTemp24 = [];
                _assAttColTemp24['id'] = '';
                _assAttColTemp24['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp24['characteristic_type'] = '';
                _assAttColTemp24['characteristic_type_name'] = 'horse_power';
                _assAttColTemp24['field_name'] = 'horse_power';
                _assAttColTemp24['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp24);
              }
            }

            if (assAttCol['infrastructure_status_reason'] == true) {
              if (_this2.arraytype.indexOf('infrastructure_status_reason') == -1) {
                var _assAttColTemp25 = [];
                _assAttColTemp25['id'] = '';
                _assAttColTemp25['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp25['characteristic_type'] = '';
                _assAttColTemp25['characteristic_type_name'] = 'infrastructure_status_reason';
                _assAttColTemp25['field_name'] = 'infrastructure_status_reason';
                _assAttColTemp25['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp25);
              }
            }

            if (assAttCol['insulation'] == true) {
              if (_this2.arraytype.indexOf('insulation') == -1) {
                var _assAttColTemp26 = [];
                _assAttColTemp26['id'] = '';
                _assAttColTemp26['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp26['characteristic_type'] = '';
                _assAttColTemp26['characteristic_type_name'] = 'insulation';
                _assAttColTemp26['field_name'] = 'insulation';
                _assAttColTemp26['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp26);
              }
            }

            if (assAttCol['manufacturer_year'] == true) {
              if (_this2.arraytype.indexOf('manufacturer_year') == -1) {
                var _assAttColTemp27 = [];
                _assAttColTemp27['id'] = '';
                _assAttColTemp27['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp27['characteristic_type'] = '';
                _assAttColTemp27['characteristic_type_name'] = 'manufacturer_year';
                _assAttColTemp27['field_name'] = 'manufacturer_year';
                _assAttColTemp27['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp27);
              }
            }

            if (assAttCol['model'] == true) {
              if (_this2.arraytype.indexOf('model') == -1) {
                var _assAttColTemp28 = [];
                _assAttColTemp28['id'] = '';
                _assAttColTemp28['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp28['characteristic_type'] = '';
                _assAttColTemp28['characteristic_type_name'] = 'model';
                _assAttColTemp28['field_name'] = 'model';
                _assAttColTemp28['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp28);
              }
            }

            if (assAttCol['no_of_phases'] == true) {
              if (_this2.arraytype.indexOf('no_of_phases') == -1) {
                var _assAttColTemp29 = [];
                _assAttColTemp29['id'] = '';
                _assAttColTemp29['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp29['characteristic_type'] = '';
                _assAttColTemp29['characteristic_type_name'] = 'no_of_phases';
                _assAttColTemp29['field_name'] = 'no_of_phases';
                _assAttColTemp29['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp29);
              }
            }

            if (assAttCol['outlet_diameter'] == true) {
              if (_this2.arraytype.indexOf('outlet_diameter') == -1) {
                var _assAttColTemp30 = [];
                _assAttColTemp30['id'] = '';
                _assAttColTemp30['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp30['characteristic_type'] = '';
                _assAttColTemp30['characteristic_type_name'] = 'outlet_diameter';
                _assAttColTemp30['field_name'] = 'outlet_diameter';
                _assAttColTemp30['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp30);
              }
            }

            if (assAttCol['revolutions_per_minute'] == true) {
              if (_this2.arraytype.indexOf('revolutions_per_minute') == -1) {
                var _assAttColTemp31 = [];
                _assAttColTemp31['id'] = '';
                _assAttColTemp31['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp31['characteristic_type'] = '';
                _assAttColTemp31['characteristic_type_name'] = 'revolutions_per_minute';
                _assAttColTemp31['field_name'] = 'revolutions_per_minute';
                _assAttColTemp31['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp31);
              }
            }

            if (assAttCol['supply_location'] == true) {
              if (_this2.arraytype.indexOf('supply_location') == -1) {
                var _assAttColTemp32 = [];
                _assAttColTemp32['id'] = '';
                _assAttColTemp32['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp32['characteristic_type'] = '';
                _assAttColTemp32['characteristic_type_name'] = 'supply_location';
                _assAttColTemp32['field_name'] = 'supply_location';
                _assAttColTemp32['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp32);
              }
            }

            if (assAttCol['type'] == true) {
              if (_this2.arraytype.indexOf('type') == -1) {
                var _assAttColTemp33 = [];
                _assAttColTemp33['id'] = '';
                _assAttColTemp33['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp33['characteristic_type'] = '';
                _assAttColTemp33['characteristic_type_name'] = 'type';
                _assAttColTemp33['field_name'] = 'type';
                _assAttColTemp33['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp33);
              }
            }

            if (assAttCol['vehicle_chasis_number'] == true) {
              if (_this2.arraytype.indexOf('vehicle_chasis_number') == -1) {
                var _assAttColTemp34 = [];
                _assAttColTemp34['id'] = '';
                _assAttColTemp34['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp34['characteristic_type'] = '';
                _assAttColTemp34['characteristic_type_name'] = 'vehicle_chasis_number';
                _assAttColTemp34['field_name'] = 'vehicle_chasis_number';
                _assAttColTemp34['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp34);
              }
            }

            if (assAttCol['vehicle_insurance_vendor'] == true) {
              if (_this2.arraytype.indexOf('vehicle_insurance_vendor') == -1) {
                var _assAttColTemp35 = [];
                _assAttColTemp35['id'] = '';
                _assAttColTemp35['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp35['characteristic_type'] = '';
                _assAttColTemp35['characteristic_type_name'] = 'vehicle_insurance_vendor';
                _assAttColTemp35['field_name'] = 'vehicle_insurance_vendor';
                _assAttColTemp35['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp35);
              }
            }

            if (assAttCol['vehicle_insurance_cover_note_number'] == true) {
              if (_this2.arraytype.indexOf('vehicle_insurance_cover_note_number') == -1) {
                var _assAttColTemp36 = [];
                _assAttColTemp36['id'] = '';
                _assAttColTemp36['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp36['characteristic_type'] = '';
                _assAttColTemp36['characteristic_type_name'] = 'vehicle_insurance_cover_note_number';
                _assAttColTemp36['field_name'] = 'vehicle_insurance_cover_note_number';
                _assAttColTemp36['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp36);
              }
            }

            if (assAttCol['vehicle_insurance_no_claim_discount'] == true) {
              if (_this2.arraytype.indexOf('vehicle_insurance_no_claim_discount') == -1) {
                var _assAttColTemp37 = [];
                _assAttColTemp37['id'] = '';
                _assAttColTemp37['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp37['characteristic_type'] = '';
                _assAttColTemp37['characteristic_type_name'] = 'vehicle_insurance_no_claim_discount';
                _assAttColTemp37['field_name'] = 'vehicle_insurance_no_claim_discount';
                _assAttColTemp37['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp37);
              }
            }

            if (assAttCol['vehicle_insurance_total_premium'] == true) {
              if (_this2.arraytype.indexOf('vehicle_insurance_total_premium') == -1) {
                var _assAttColTemp38 = [];
                _assAttColTemp38['id'] = '';
                _assAttColTemp38['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp38['characteristic_type'] = '';
                _assAttColTemp38['characteristic_type_name'] = 'vehicle_insurance_total_premium';
                _assAttColTemp38['field_name'] = 'vehicle_insurance_total_premium';
                _assAttColTemp38['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp38);
              }
            }

            if (assAttCol['vehicle_register_date'] == true) {
              if (_this2.arraytype.indexOf('vehicle_register_date') == -1) {
                var _assAttColTemp39 = [];
                _assAttColTemp39['id'] = '';
                _assAttColTemp39['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp39['characteristic_type'] = '';
                _assAttColTemp39['characteristic_type_name'] = 'vehicle_register_date';
                _assAttColTemp39['field_name'] = 'vehicle_register_date';
                _assAttColTemp39['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp39);
              }
            }

            if (assAttCol['vehicle_spad_permit_date_period_to'] == true) {
              if (_this2.arraytype.indexOf('vehicle_spad_permit_date_period_to') == -1) {
                var _assAttColTemp40 = [];
                _assAttColTemp40['id'] = '';
                _assAttColTemp40['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp40['characteristic_type'] = '';
                _assAttColTemp40['characteristic_type_name'] = 'vehicle_spad_permit_date_period_to';
                _assAttColTemp40['field_name'] = 'vehicle_spad_permit_date_period_to';
                _assAttColTemp40['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp40);
              }
            }

            if (assAttCol['vehicle_spad_no_license_operator'] == true) {
              if (_this2.arraytype.indexOf('vehicle_spad_no_license_operator') == -1) {
                var _assAttColTemp41 = [];
                _assAttColTemp41['id'] = '';
                _assAttColTemp41['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp41['characteristic_type'] = '';
                _assAttColTemp41['characteristic_type_name'] = 'vehicle_spad_no_license_operator';
                _assAttColTemp41['field_name'] = 'vehicle_spad_no_license_operator';
                _assAttColTemp41['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp41);
              }
            }

            if (assAttCol['vehicle_registration_owner'] == true) {
              if (_this2.arraytype.indexOf('vehicle_registration_owner') == -1) {
                var _assAttColTemp42 = [];
                _assAttColTemp42['id'] = '';
                _assAttColTemp42['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp42['characteristic_type'] = '';
                _assAttColTemp42['characteristic_type_name'] = 'vehicle_registration_owner';
                _assAttColTemp42['field_name'] = 'vehicle_registration_owner';
                _assAttColTemp42['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp42);
              }
            }

            if (assAttCol['capacity_size'] == true) {
              if (_this2.arraytype.indexOf('capacity_size') == -1) {
                var _assAttColTemp43 = [];
                _assAttColTemp43['id'] = '';
                _assAttColTemp43['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp43['characteristic_type'] = '';
                _assAttColTemp43['characteristic_type_name'] = 'capacity_size';
                _assAttColTemp43['field_name'] = 'capacity_size';
                _assAttColTemp43['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp43);
              }
            }

            if (assAttCol['coverage_range'] == true) {
              if (_this2.arraytype.indexOf('coverage_range') == -1) {
                var _assAttColTemp44 = [];
                _assAttColTemp44['id'] = '';
                _assAttColTemp44['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp44['characteristic_type'] = '';
                _assAttColTemp44['characteristic_type_name'] = 'coverage_range';
                _assAttColTemp44['field_name'] = 'coverage_range';
                _assAttColTemp44['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp44);
              }
            }

            if (assAttCol['flow_rate'] == true) {
              if (_this2.arraytype.indexOf('flow_rate') == -1) {
                var _assAttColTemp45 = [];
                _assAttColTemp45['id'] = '';
                _assAttColTemp45['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp45['characteristic_type'] = '';
                _assAttColTemp45['characteristic_type_name'] = 'flow_rate';
                _assAttColTemp45['field_name'] = 'flow_rate';
                _assAttColTemp45['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp45);
              }
            }

            if (assAttCol['hysteresis'] == true) {
              if (_this2.arraytype.indexOf('hysteresis') == -1) {
                var _assAttColTemp46 = [];
                _assAttColTemp46['id'] = '';
                _assAttColTemp46['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp46['characteristic_type'] = '';
                _assAttColTemp46['characteristic_type_name'] = 'hysteresis';
                _assAttColTemp46['field_name'] = 'hysteresis';
                _assAttColTemp46['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp46);
              }
            }

            if (assAttCol['inlet_diameter'] == true) {
              if (_this2.arraytype.indexOf('inlet_diameter') == -1) {
                var _assAttColTemp47 = [];
                _assAttColTemp47['id'] = '';
                _assAttColTemp47['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp47['characteristic_type'] = '';
                _assAttColTemp47['characteristic_type_name'] = 'inlet_diameter';
                _assAttColTemp47['field_name'] = 'inlet_diameter';
                _assAttColTemp47['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp47);
              }
            }

            if (assAttCol['legal_name'] == true) {
              if (_this2.arraytype.indexOf('legal_name') == -1) {
                var _assAttColTemp48 = [];
                _assAttColTemp48['id'] = '';
                _assAttColTemp48['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp48['characteristic_type'] = '';
                _assAttColTemp48['characteristic_type_name'] = 'legal_name';
                _assAttColTemp48['field_name'] = 'legal_name';
                _assAttColTemp48['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp48);
              }
            }

            if (assAttCol['manufacture_part_number'] == true) {
              if (_this2.arraytype.indexOf('manufacture_part_number') == -1) {
                var _assAttColTemp49 = [];
                _assAttColTemp49['id'] = '';
                _assAttColTemp49['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp49['characteristic_type'] = '';
                _assAttColTemp49['characteristic_type_name'] = 'manufacture_part_number';
                _assAttColTemp49['field_name'] = 'manufacture_part_number';
                _assAttColTemp49['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp49);
              }
            }

            if (assAttCol['motor_current'] == true) {
              if (_this2.arraytype.indexOf('motor_current') == -1) {
                var _assAttColTemp50 = [];
                _assAttColTemp50['id'] = '';
                _assAttColTemp50['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp50['characteristic_type'] = '';
                _assAttColTemp50['characteristic_type_name'] = 'motor_current';
                _assAttColTemp50['field_name'] = 'motor_current';
                _assAttColTemp50['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp50);
              }
            }

            if (assAttCol['no_of_stage'] == true) {
              if (_this2.arraytype.indexOf('no_of_stage') == -1) {
                var _assAttColTemp51 = [];
                _assAttColTemp51['id'] = '';
                _assAttColTemp51['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp51['characteristic_type'] = '';
                _assAttColTemp51['characteristic_type_name'] = 'no_of_stage';
                _assAttColTemp51['field_name'] = 'no_of_stage';
                _assAttColTemp51['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp51);
              }
            }

            if (assAttCol['power_supply_type'] == true) {
              if (_this2.arraytype.indexOf('power_supply_type') == -1) {
                var _assAttColTemp52 = [];
                _assAttColTemp52['id'] = '';
                _assAttColTemp52['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp52['characteristic_type'] = '';
                _assAttColTemp52['characteristic_type_name'] = 'power_supply_type';
                _assAttColTemp52['field_name'] = 'power_supply_type';
                _assAttColTemp52['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp52);
              }
            }

            if (assAttCol['source_from'] == true) {
              if (_this2.arraytype.indexOf('source_from') == -1) {
                var _assAttColTemp53 = [];
                _assAttColTemp53['id'] = '';
                _assAttColTemp53['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp53['characteristic_type'] = '';
                _assAttColTemp53['characteristic_type_name'] = 'source_from';
                _assAttColTemp53['field_name'] = 'source_from';
                _assAttColTemp53['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp53);
              }
            }

            if (assAttCol['temperature'] == true) {
              if (_this2.arraytype.indexOf('temperature') == -1) {
                var _assAttColTemp54 = [];
                _assAttColTemp54['id'] = '';
                _assAttColTemp54['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp54['characteristic_type'] = '';
                _assAttColTemp54['characteristic_type_name'] = 'temperature';
                _assAttColTemp54['field_name'] = 'temperature';
                _assAttColTemp54['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp54);
              }
            }

            if (assAttCol['valve_diameter'] == true) {
              if (_this2.arraytype.indexOf('valve_diameter') == -1) {
                var _assAttColTemp55 = [];
                _assAttColTemp55['id'] = '';
                _assAttColTemp55['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp55['characteristic_type'] = '';
                _assAttColTemp55['characteristic_type_name'] = 'valve_diameter';
                _assAttColTemp55['field_name'] = 'valve_diameter';
                _assAttColTemp55['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp55);
              }
            }

            if (assAttCol['vehicle_engine_capacity'] == true) {
              if (_this2.arraytype.indexOf('vehicle_engine_capacity') == -1) {
                var _assAttColTemp56 = [];
                _assAttColTemp56['id'] = '';
                _assAttColTemp56['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp56['characteristic_type'] = '';
                _assAttColTemp56['characteristic_type_name'] = 'vehicle_engine_capacity';
                _assAttColTemp56['field_name'] = 'vehicle_engine_capacity';
                _assAttColTemp56['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp56);
              }
            }

            if (assAttCol['vehicle_model'] == true) {
              if (_this2.arraytype.indexOf('vehicle_model') == -1) {
                var _assAttColTemp57 = [];
                _assAttColTemp57['id'] = '';
                _assAttColTemp57['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp57['characteristic_type'] = '';
                _assAttColTemp57['characteristic_type_name'] = 'vehicle_model';
                _assAttColTemp57['field_name'] = 'vehicle_model';
                _assAttColTemp57['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp57);
              }
            }

            if (assAttCol['vehicle_insurance_date_period_from'] == true) {
              if (_this2.arraytype.indexOf('vehicle_insurance_date_period_from') == -1) {
                var _assAttColTemp58 = [];
                _assAttColTemp58['id'] = '';
                _assAttColTemp58['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp58['characteristic_type'] = '';
                _assAttColTemp58['characteristic_type_name'] = 'vehicle_insurance_date_period_from';
                _assAttColTemp58['field_name'] = 'vehicle_insurance_date_period_from';
                _assAttColTemp58['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp58);
              }
            }

            if (assAttCol['vehicle_insurance_policy_type'] == true) {
              if (_this2.arraytype.indexOf('vehicle_insurance_policy_type') == -1) {
                var _assAttColTemp59 = [];
                _assAttColTemp59['id'] = '';
                _assAttColTemp59['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp59['characteristic_type'] = '';
                _assAttColTemp59['characteristic_type_name'] = 'vehicle_insurance_policy_type';
                _assAttColTemp59['field_name'] = 'vehicle_insurance_policy_type';
                _assAttColTemp59['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp59);
              }
            }

            if (assAttCol['vehicle_puspakom_date_inspection'] == true) {
              if (_this2.arraytype.indexOf('vehicle_puspakom_date_inspection') == -1) {
                var _assAttColTemp60 = [];
                _assAttColTemp60['id'] = '';
                _assAttColTemp60['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp60['characteristic_type'] = '';
                _assAttColTemp60['characteristic_type_name'] = 'vehicle_puspakom_date_inspection';
                _assAttColTemp60['field_name'] = 'vehicle_puspakom_date_inspection';
                _assAttColTemp60['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp60);
              }
            }

            if (assAttCol['vehicle_roadtax_rate'] == true) {
              if (_this2.arraytype.indexOf('vehicle_roadtax_rate') == -1) {
                var _assAttColTemp61 = [];
                _assAttColTemp61['id'] = '';
                _assAttColTemp61['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp61['characteristic_type'] = '';
                _assAttColTemp61['characteristic_type_name'] = 'vehicle_roadtax_rate';
                _assAttColTemp61['field_name'] = 'vehicle_roadtax_rate';
                _assAttColTemp61['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp61);
              }
            }

            if (assAttCol['vehicle_roadtax_renew_date'] == true) {
              if (_this2.arraytype.indexOf('vehicle_roadtax_renew_date') == -1) {
                var _assAttColTemp62 = [];
                _assAttColTemp62['id'] = '';
                _assAttColTemp62['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp62['characteristic_type'] = '';
                _assAttColTemp62['characteristic_type_name'] = 'vehicle_roadtax_renew_date';
                _assAttColTemp62['field_name'] = 'vehicle_roadtax_renew_date';
                _assAttColTemp62['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp62);
              }
            }

            if (assAttCol['vehicle_spad_permit_date_period_from'] == true) {
              if (_this2.arraytype.indexOf('vehicle_spad_permit_date_period_from') == -1) {
                var _assAttColTemp63 = [];
                _assAttColTemp63['id'] = '';
                _assAttColTemp63['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp63['characteristic_type'] = '';
                _assAttColTemp63['characteristic_type_name'] = 'vehicle_spad_permit_date_period_from';
                _assAttColTemp63['field_name'] = 'vehicle_spad_permit_date_period_from';
                _assAttColTemp63['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp63);
              }
            }

            if (assAttCol['voltage'] == true) {
              if (_this2.arraytype.indexOf('voltage') == -1) {
                var _assAttColTemp64 = [];
                _assAttColTemp64['id'] = '';
                _assAttColTemp64['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp64['characteristic_type'] = '';
                _assAttColTemp64['characteristic_type_name'] = 'voltage';
                _assAttColTemp64['field_name'] = 'voltage';
                _assAttColTemp64['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp64);
              }
            }

            if (assAttCol['asset_status'] == true) {
              if (_this2.arraytype.indexOf('asset_status') == -1) {
                var _assAttColTemp65 = [];
                _assAttColTemp65['id'] = '';
                _assAttColTemp65['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp65['characteristic_type'] = '';
                _assAttColTemp65['characteristic_type_name'] = 'asset_status';
                _assAttColTemp65['field_name'] = 'asset_status';
                _assAttColTemp65['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp65);
              }
            }

            if (assAttCol['brand'] == true) {
              if (_this2.arraytype.indexOf('brand') == -1) {
                var _assAttColTemp66 = [];
                _assAttColTemp66['id'] = '';
                _assAttColTemp66['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp66['characteristic_type'] = '';
                _assAttColTemp66['characteristic_type_name'] = 'brand';
                _assAttColTemp66['field_name'] = 'brand';
                _assAttColTemp66['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp66);
              }
            }

            if (assAttCol['model_number'] == true) {
              if (_this2.arraytype.indexOf('model_number') == -1) {
                var _assAttColTemp67 = [];
                _assAttColTemp67['id'] = '';
                _assAttColTemp67['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp67['characteristic_type'] = '';
                _assAttColTemp67['characteristic_type_name'] = 'model_number';
                _assAttColTemp67['field_name'] = 'model_number';
                _assAttColTemp67['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp67);
              }
            }

            if (assAttCol['bo'] == true) {
              if (_this2.arraytype.indexOf('bo') == -1) {
                var _assAttColTemp68 = [];
                _assAttColTemp68['id'] = '';
                _assAttColTemp68['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp68['characteristic_type'] = '';
                _assAttColTemp68['characteristic_type_name'] = 'bo';
                _assAttColTemp68['field_name'] = 'bo';
                _assAttColTemp68['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp68);
              }
            }

            if (assAttCol['bo_status'] == true) {
              if (_this2.arraytype.indexOf('bo_status') == -1) {
                var _assAttColTemp69 = [];
                _assAttColTemp69['id'] = '';
                _assAttColTemp69['action_type'] = ''; // assAttColTemp['adhoc_value'] = null

                _assAttColTemp69['characteristic_type'] = '';
                _assAttColTemp69['characteristic_type_name'] = 'bo_status';
                _assAttColTemp69['field_name'] = 'bo_status';
                _assAttColTemp69['field_value'] = ''; // assAttColTemp['characteristic_value'] = null

                _this2.assetAttributedatas.push(_assAttColTemp69);
              }
            }

            _this2.assetAttributedatas.forEach(function (ele) {
              console.log("eleeleeleeleele", ele);
              var filter = "attribute_field_name=" + ele.characteristic_type_name;

              _this2.assetAttributePredefineService.filter(filter).subscribe(function (res) {
                if (res.length > 0) {
                  ele.dropdown = 'yes';
                  ele.option = res;
                } else {
                  ele.dropdown = 'no';
                  ele.option = [];
                }
              }, function (err) {});
            }); // setTimeout(() => {


            console.log("this.assetAttributedatas ==== ", _this2.assetAttributedatas); // }, 100);

            var _loop = function _loop(i) {
              // console.log("this.assetAttributedatas[1] ===== ", this.assetAttributedatas[i])
              if (_this2.assetAttributedatas[i].characteristic_type == '') {
                _this2.assetAttributeReferenceService.filter("attribute_field_name=" + _this2.assetAttributedatas[i].field_name).subscribe(function (res) {
                  _this2.assetAttributedatas[i].characteristic_type = res[0].char_type_cd; // this.assetAttributedatas.push(this.assetAttributedatas[i])
                  // console.log("res ===== ", res)
                }, function () {});
              }
            };

            for (var i = 0; i < _this2.assetAttributedatas.length; i++) {
              _loop(i);
            }
          }, 1000);
        }
      }, {
        key: "scanQrCode",
        value: function scanQrCode() {
          var navigationExtras = {
            state: {
              link: "/technical/tabs/tab2"
            }
          };
          this.router.navigate(["/technical/qr-scanner"], navigationExtras); // this.barcodeScanner
          //   .scan({ prompt: "Place a QR code to scan inside the scan area" })
          //   .then((barcodeData) => {
          //     // alert("Barcode data: " + barcodeData.text);
          //     if (barcodeData.text == "MOTR-0000998") {
          //       this.zeroFormGroup.patchValue({
          //         asset_id: "615771728178A6",
          //         badge_no: barcodeData.text,
          //       });
          //     } else {
          //       this.presentAlert("Error", "Sorry, asset not found.");
          //     }
          //   })
          //   .catch((err) => {
          //     console.log("Error", err);
          //   });
        }
      }, {
        key: "update",
        value: function update() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: "Asset Detail",
                      message: "Your asset detail have successfully updated into the system. Thank you.",
                      buttons: [{
                        text: "OK",
                        handler: function handler() {
                          _this3.homePage("/technical/tabs/tab1");
                        }
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
        key: "cancel",
        value: function cancel() {
          this.router.navigate(["/technical/tabs/tab1"]);
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(header, message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

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
                          if (header == "Success") _this4.homePage("/technical/tabs/tab1");
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
        key: "homePage",
        value: function homePage(path) {
          this.router.navigate([path]);
        }
      }, {
        key: "clickBack",
        value: function clickBack() {
          this.router.navigate(["/technical/tabs/tab2"]);
        }
      }, {
        key: "openNotification",
        value: function openNotification() {
          this.menu.enable(true, "menuNotification");
          this.menu.open("menuNotification");
        }
      }, {
        key: "getAssetAttributeData",
        value: function getAssetAttributeData(asset_attr) {
          var _this5 = this;

          this.assetAttributedatas = []; // console.log('adsadaad');

          asset_attr.forEach(function (element) {
            _this5.field_value = null;

            _this5.assetAttributeService.getOne(element).subscribe(function (aasRes) {
              // console.log('assetAttributeService>>=// ', aasRes)
              // this.assetAttributedatas.push(aasRes)
              // console.log("assetAttributedatas = ", this.assetAttributedatas)
              var assct = aasRes.characteristic_type; // console.log('aasRes.characteristic_type = ', assct)
              // this.getsadaasasd(assct)

              var characteristic_type_list = ["CM-MFG", "CM-WASTC", "CM-VRTVD", "CM-VOWNS", "CM-VROWN", "CM-VINPT"]; // console.log("this.assetAttributedatas[0].characteristic_type", aasRes.characteristic_type)

              if (characteristic_type_list.indexOf(aasRes.characteristic_type) !== -1) {
                // console.log(' already exists!')
                _this5.field_value = aasRes.characteristic_value;
                aasRes['field_value'] = _this5.field_value;
              } else {
                _this5.field_value = aasRes.adhoc_value;
                aasRes['field_value'] = _this5.field_value; // console.log('not exist')
              } // if (aasRes.characteristic_value != null) {
              //   this.field_value = aasRes.characteristic_value
              //   aasRes['field_value'] = this.field_value
              // } else {
              //   this.field_value = aasRes.adhoc_value
              //   aasRes['field_value'] = this.field_value
              // }


              _this5.assetAttributeReferenceService.filter("char_type_cd=" + assct).subscribe( // this.assetAttributeReferenceService.filter("char_type_cd=" + assct).subscribe(
              function (aarsRes) {
                aasRes['field_name'] = aarsRes[0].attribute_field_name;

                _this5.arraytype.push(aarsRes[0].attribute_field_name); // console.log('aarsRes qwe = ', aasRes)


                _this5.assetAttributedatas.push(aasRes);
              }, function (aarsErr) {
                console.error("err", aarsErr);
              });
            }, function (aasErr) {
              console.error("err", aasErr);
            });
          }); // this.getsadaasasd(this.assetAttributedatas)
          // this.assetAttributeService.filter("characteristic_type=" + this.asset_detail.node_id).subscribe(
        }
      }, {
        key: "onKeyAssDesc",
        value: function onKeyAssDesc(value, row) {
          // console.log(value)
          this.asset_detail['description'] = value; // console.log(this.asset_detail)
          // this.updateAssetData['characteristic_value'] = value
        } // onKey(value, row) {
        //   console.log("row === ", row)
        //   console.log("value === ", value)
        //   this.assetAttributedatas.forEach(element => {
        //     if (element.field_name == row.field_name) {
        //       let characteristic_type_list = ["CM-MFG", "CM-WASTC", "CM-VRTVD", "CM-VOWNS", "CM-VROWN", "CM-VINPT"]
        //       if (characteristic_type_list.indexOf(row.characteristic_type) !== -1) {
        //         element.characteristic_value = value;
        //       } else {
        //         element.adhoc_value = value;
        //       }
        //       element.action_type = 'update';
        //       console.log("foreach = ", element);
        //     }
        //   });
        //   console.log(this.assetAttributedatas)
        // }

      }, {
        key: "onKey",
        value: function onKey(value, row) {
          var _this6 = this;

          console.log("row === ", row);
          console.log("value === ", value);
          this.assetAttributedatas.forEach(function (element) {
            // check in the form data 
            if (element.field_name == row.field_name) {
              var characteristic_type_list = ["CM-MFG", "CM-WASTC", "CM-VRTVD", "CM-VOWNS", "CM-VROWN", "CM-VINPT"];
              var updateformData = {}; // console.log(characteristic_type_list.indexOf(row.characteristic_type))

              if (characteristic_type_list.indexOf(row.characteristic_type) !== -1) {
                // console.log("ssss")
                element.characteristic_value = value;
                updateformData['characteristic_value'] = value;
              } else {
                // console.log("ddddd")
                element.adhoc_value = value;
                updateformData['adhoc_value'] = value;
              } // updateformData['action_type'] = 'update'


              updateformData['characteristic_type'] = element.characteristic_type;
              updateformData['characteristic_type_name'] = element.field_name; // console.log("updateformData = ", updateformData);
              // console.log("element = ", element)

              if (element.id == '') {
                element.action_type = 'ADD';
                updateformData['action_type'] = 'ADD'; // console.log('not exist cok')

                _this6.assetAttributeService.post(updateformData).subscribe(function (resAAS) {
                  var atID = []; // this.assetAttributedatas.push(res)
                  // this.assetAttributeId.forEach(ele => {
                  //   atID.push(ele)
                  // });
                  // console.log("resAAS = ", resAAS)
                  // this.assetAttributeId.push(resAAS.id)

                  element.id = resAAS.id; // console.log("assetAttributeId = ", this.assetAttributeId)
                }, function (err) {
                  console.error("err", err);
                });
              } else {
                element.action_type = 'UPDATE';
                updateformData['action_type'] = 'UPDATE'; // console.log('exist cok')

                _this6.assetAttributeService.update(element.id, updateformData).subscribe(function (res) {// console.log(res)
                  // this.assetAttributedatas.push(res)
                  // console.log("resAAS = ", res)
                  // this.assetAttributeId.push(res.id)
                  // element.id = res.id;
                  // let obj = {
                  //   submitted_datetime: this.getCurrentDateTime(),
                  // }
                  // this.assetsService.update(this.asset_detail['id'], obj).subscribe(
                  //   (resp) => {
                  //     console.log('berjaya cok', resp)
                  //   }, (error) => {
                  //     console.log('tidak berjaya cok', error)
                  //   }
                  // )
                }, function (err) {
                  console.error("err", err);
                });
              }
            }
          });
          setTimeout(function () {
            console.log("this.assetAttributedatas", _this6.assetAttributedatas);
          }, 1000);
        }
      }, {
        key: "updateDetails",
        value: function updateDetails() {
          var _this7 = this;

          // });
          // setTimeout(() => {
          // console.log("assetAttributedatas --==][ ", this.assetAttributedatas)
          var assetAttrIdExist = [];
          this.assetAttributedatas.forEach(function (element) {
            // console.log("element --- ", element.id)
            if (element.id != '') {
              // console.log('masuk')
              assetAttrIdExist.push(element.id);
            }
          }); // console.log("assetAttrIdExist---", assetAttrIdExist)

          var selectedDate = new Date(this.asset_detail["effective_datetime"]);
          var obj = {
            asset_attributes: assetAttrIdExist,
            description: this.asset_detail["description"],
            effective_datetime: selectedDate,
            submitted_datetime: new Date() //moment(this.getCurrentDateTime()).toDate() // moment.utc(this.getCurrentDateTime()).toDate()

          };
          console.log("this.asset_detail[effective_datetime]", this.asset_detail["effective_datetime"]); // let roo = this.asset_detail["effective_datetime"].setHours(this.asset_detail["effective_datetime"].getHours() - 2);
          // console.log("datetime", roo)

          console.log("obj = ", obj);
          console.log(" this.selectedDate", selectedDate);
          console.log("this.getCurrentDateTime()", this.getCurrentDateTime());
          var twoHoursBefore = new Date();
          twoHoursBefore.setHours(twoHoursBefore.getHours() - 2); // if (this.assetAttributedatas.length == assetAttrIdExist.length) {

          this.assetsService.update(this.asset_detail['id'], obj).subscribe(function (resp) {
            console.log('berjaya cok', resp);
          }, function (error) {// console.log('tidak berjaya cok', error)
          }, function () {
            _this7.update();
          }); // } else {
          //   this.warningAlert('Warning', 'Please fill in all question.')
          // }
        }
      }, {
        key: "warningAlert",
        value: function warningAlert(header, message) {
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
                      buttons: ['ok']
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
      }]);

      return AssetDetailPage;
    }();

    AssetDetailPage.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
      }, {
        type: src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_6__["AssetsService"]
      }, {
        type: src_app_shared_services_asset_groups_asset_groups_service__WEBPACK_IMPORTED_MODULE_7__["AssetGroupsService"]
      }, {
        type: src_app_shared_services_asset_types_asset_types_service__WEBPACK_IMPORTED_MODULE_8__["AssetTypesService"]
      }, {
        type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]
      }, {
        type: src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_10__["NotificationsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: src_app_shared_services_asset_location_sync_asset_location_sync_service__WEBPACK_IMPORTED_MODULE_11__["AssetLocatioSyncService"]
      }, {
        type: src_app_shared_services_asset_attribute_asset_attribute_service__WEBPACK_IMPORTED_MODULE_12__["AssetAttributeService"]
      }, {
        type: src_app_shared_services_asset_attribute_reference_asset_attribute_reference_service__WEBPACK_IMPORTED_MODULE_13__["AssetAttributeReferenceService"]
      }, {
        type: src_app_shared_services_asset_attribute_column_asset_attribute_column_service__WEBPACK_IMPORTED_MODULE_14__["AssetAttributeColumnService"]
      }, {
        type: src_app_shared_services_asset_attribute_predefine_asset_attribute_prodefine_service__WEBPACK_IMPORTED_MODULE_15__["AssetAttributePredefineService"]
      }];
    };

    AssetDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-asset-detail",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./asset-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/asset-detail/asset-detail.page.html")).default,
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./asset-detail.page.scss */
      "./src/app/pages/technical/asset-detail/asset-detail.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"], src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_6__["AssetsService"], src_app_shared_services_asset_groups_asset_groups_service__WEBPACK_IMPORTED_MODULE_7__["AssetGroupsService"], src_app_shared_services_asset_types_asset_types_service__WEBPACK_IMPORTED_MODULE_8__["AssetTypesService"], src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_10__["NotificationsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_shared_services_asset_location_sync_asset_location_sync_service__WEBPACK_IMPORTED_MODULE_11__["AssetLocatioSyncService"], src_app_shared_services_asset_attribute_asset_attribute_service__WEBPACK_IMPORTED_MODULE_12__["AssetAttributeService"], src_app_shared_services_asset_attribute_reference_asset_attribute_reference_service__WEBPACK_IMPORTED_MODULE_13__["AssetAttributeReferenceService"], src_app_shared_services_asset_attribute_column_asset_attribute_column_service__WEBPACK_IMPORTED_MODULE_14__["AssetAttributeColumnService"], src_app_shared_services_asset_attribute_predefine_asset_attribute_prodefine_service__WEBPACK_IMPORTED_MODULE_15__["AssetAttributePredefineService"]])], AssetDetailPage);
    /***/
  },

  /***/
  "./src/app/shared/services/asset-attribute-column/asset-attribute-column.service.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/shared/services/asset-attribute-column/asset-attribute-column.service.ts ***!
    \******************************************************************************************/

  /*! exports provided: AssetAttributeColumnService */

  /***/
  function srcAppSharedServicesAssetAttributeColumnAssetAttributeColumnServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetAttributeColumnService", function () {
      return AssetAttributeColumnService;
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

    var AssetAttributeColumnService =
    /*#__PURE__*/
    function () {
      function AssetAttributeColumnService(http) {
        _classCallCheck(this, AssetAttributeColumnService);

        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/asset-attribute-column/"; // Data

        this.amodels = [];
      }

      _createClass(AssetAttributeColumnService, [{
        key: "post",
        value: function post(body) {
          return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributeColumnModel", res);
          }));
        }
      }, {
        key: "get",
        value: function get() {
          var _this8 = this;

          return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributeColumnModel", res);
            _this8.amodels = res;
          }));
        }
      }, {
        key: "getOne",
        value: function getOne(id) {
          var _this9 = this;

          var urlID = this.url + id + "/";
          return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributeColumnModel", res);
            _this9.amodel = res;
          }));
        }
      }, {
        key: "update",
        value: function update(body) {
          return this.http.patch(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributeColumnModel", res);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributeColumnModel", res);
          }));
        }
      }, {
        key: "filter",
        value: function filter(field) {
          var urlFilter = this.url + "?" + field;
          return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributeColumnModel", res);
          }));
        }
      }, {
        key: "patch_asset",
        value: function patch_asset(body) {
          var urlPatchAsset = this.url + "patch_asset/";
          return this.http.post(urlPatchAsset, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributeColumnModel", res);
          }));
        }
      }]);

      return AssetAttributeColumnService;
    }();

    AssetAttributeColumnService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    AssetAttributeColumnService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], AssetAttributeColumnService);
    /***/
  },

  /***/
  "./src/app/shared/services/asset-attribute-predefine/asset-attribute-prodefine.service.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/shared/services/asset-attribute-predefine/asset-attribute-prodefine.service.ts ***!
    \************************************************************************************************/

  /*! exports provided: AssetAttributePredefineService */

  /***/
  function srcAppSharedServicesAssetAttributePredefineAssetAttributeProdefineServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetAttributePredefineService", function () {
      return AssetAttributePredefineService;
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

    var AssetAttributePredefineService =
    /*#__PURE__*/
    function () {
      function AssetAttributePredefineService(http) {
        _classCallCheck(this, AssetAttributePredefineService);

        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/asset-attribute-predefine/"; // Data

        this.atmodels = [];
      }

      _createClass(AssetAttributePredefineService, [{
        key: "post",
        value: function post(body) {
          return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributePredefineModel", res);
          }));
        }
      }, {
        key: "get",
        value: function get() {
          var _this10 = this;

          return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributePredefineModel", res);
            _this10.atmodels = res;
          }));
        }
      }, {
        key: "getOne",
        value: function getOne(id) {
          var _this11 = this;

          var urlID = this.url + id + "/";
          return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributePredefineModel", res);
            _this11.atmodel = res;
          }));
        }
      }, {
        key: "update",
        value: function update(body) {
          return this.http.patch(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributePredefineModel", res);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributePredefineModel", res);
          }));
        }
      }, {
        key: "filter",
        value: function filter(field) {
          var urlFilter = this.url + "?" + field;
          return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributePredefineModel", res);
          }));
        }
      }]);

      return AssetAttributePredefineService;
    }();

    AssetAttributePredefineService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    AssetAttributePredefineService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], AssetAttributePredefineService);
    /***/
  },

  /***/
  "./src/app/shared/services/asset-attribute-reference/asset-attribute-reference.service.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/shared/services/asset-attribute-reference/asset-attribute-reference.service.ts ***!
    \************************************************************************************************/

  /*! exports provided: AssetAttributeReferenceService */

  /***/
  function srcAppSharedServicesAssetAttributeReferenceAssetAttributeReferenceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetAttributeReferenceService", function () {
      return AssetAttributeReferenceService;
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

    var AssetAttributeReferenceService =
    /*#__PURE__*/
    function () {
      function AssetAttributeReferenceService(http) {
        _classCallCheck(this, AssetAttributeReferenceService);

        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/asset-attribute-reference/"; // Data

        this.atmodels = [];
      }

      _createClass(AssetAttributeReferenceService, [{
        key: "post",
        value: function post(body) {
          return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributeReferenceModel", res);
          }));
        }
      }, {
        key: "get",
        value: function get() {
          var _this12 = this;

          return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributeReferenceModel", res);
            _this12.atmodels = res;
          }));
        }
      }, {
        key: "getOne",
        value: function getOne(id) {
          var _this13 = this;

          var urlID = this.url + id + "/";
          return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributeReferenceModel", res);
            _this13.atmodel = res;
          }));
        }
      }, {
        key: "update",
        value: function update(body) {
          return this.http.patch(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributeReferenceModel", res);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributeReferenceModel", res);
          }));
        }
      }, {
        key: "filter",
        value: function filter(field) {
          var urlFilter = this.url + "?" + field;
          return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributeReferenceModel", res);
          }));
        }
      }]);

      return AssetAttributeReferenceService;
    }();

    AssetAttributeReferenceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    AssetAttributeReferenceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], AssetAttributeReferenceService);
    /***/
  },

  /***/
  "./src/app/shared/services/asset-attribute/asset-attribute.service.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/services/asset-attribute/asset-attribute.service.ts ***!
    \****************************************************************************/

  /*! exports provided: AssetAttributeService */

  /***/
  function srcAppSharedServicesAssetAttributeAssetAttributeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetAttributeService", function () {
      return AssetAttributeService;
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

    var AssetAttributeService =
    /*#__PURE__*/
    function () {
      function AssetAttributeService(http) {
        _classCallCheck(this, AssetAttributeService);

        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/asset-attribute/"; // Data

        this.amodels = [];
      }

      _createClass(AssetAttributeService, [{
        key: "post",
        value: function post(body) {
          return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {// console.log("AssetAttributeModel", res);
          }));
        }
      }, {
        key: "get",
        value: function get() {
          var _this14 = this;

          return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            // console.log("AssetAttributeModel", res);
            _this14.amodels = res;
          }));
        }
      }, {
        key: "getOne",
        value: function getOne(id) {
          var _this15 = this;

          var urlID = this.url + id + "/";
          return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            // console.log("AssetAttributeModel", res);
            _this15.amodel = res;
          }));
        } // update(body): Observable<AssetAttributeModel> {
        //   return this.http.patch<AssetAttributeModel>(this.url, body).pipe(
        //     tap((res) => {
        //       console.log("AssetAttributeModel", res);
        //     })
        //   );
        // }

      }, {
        key: "update",
        value: function update(id, body) {
          var urlTemp = this.url + id + '/';
          return this.http.patch(urlTemp, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {// console.log("AssetAttributeModel", res);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributeModel", res);
          }));
        }
      }, {
        key: "filter",
        value: function filter(field) {
          var urlFilter = this.url + "?" + field;
          return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributeModel", res);
          }));
        }
      }, {
        key: "patch_asset",
        value: function patch_asset(body) {
          var urlPatchAsset = this.url + "patch_asset/";
          return this.http.post(urlPatchAsset, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributeModel", res);
          }));
        }
      }]);

      return AssetAttributeService;
    }();

    AssetAttributeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    AssetAttributeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], AssetAttributeService);
    /***/
  },

  /***/
  "./src/app/shared/services/asset-groups/asset-groups.service.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/services/asset-groups/asset-groups.service.ts ***!
    \**********************************************************************/

  /*! exports provided: AssetGroupsService */

  /***/
  function srcAppSharedServicesAssetGroupsAssetGroupsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetGroupsService", function () {
      return AssetGroupsService;
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

    var AssetGroupsService =
    /*#__PURE__*/
    function () {
      function AssetGroupsService(http) {
        _classCallCheck(this, AssetGroupsService);

        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/asset-groups/"; // Data

        this.agmodels = [];
      }

      _createClass(AssetGroupsService, [{
        key: "post",
        value: function post(body) {
          return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetGroupsModel", res);
          }));
        }
      }, {
        key: "get",
        value: function get() {
          var _this16 = this;

          return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetGroupsModel", res);
            _this16.agmodels = res;
          }));
        }
      }, {
        key: "getOne",
        value: function getOne(id) {
          var _this17 = this;

          var urlID = this.url + id + "/";
          return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetGroupsModel", res);
            _this17.agmodel = res;
          }));
        }
      }, {
        key: "update",
        value: function update(body) {
          return this.http.patch(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetGroupsModel", res);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetGroupsModel", res);
          }));
        }
      }, {
        key: "filter",
        value: function filter(field) {
          var urlFilter = this.url + "?" + field;
          return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetGroupsModel", res);
          }));
        }
      }]);

      return AssetGroupsService;
    }();

    AssetGroupsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    AssetGroupsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], AssetGroupsService);
    /***/
  },

  /***/
  "./src/app/shared/services/asset-location-sync/asset-location-sync.service.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/shared/services/asset-location-sync/asset-location-sync.service.ts ***!
    \************************************************************************************/

  /*! exports provided: AssetLocatioSyncService */

  /***/
  function srcAppSharedServicesAssetLocationSyncAssetLocationSyncServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetLocatioSyncService", function () {
      return AssetLocatioSyncService;
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

    var AssetLocatioSyncService =
    /*#__PURE__*/
    function () {
      function AssetLocatioSyncService(http) {
        _classCallCheck(this, AssetLocatioSyncService);

        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/asset-location-sync/"; // Data

        this.atmodels = [];
      }

      _createClass(AssetLocatioSyncService, [{
        key: "post",
        value: function post(body) {
          return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetLocatioSyncModel", res);
          }));
        }
      }, {
        key: "get",
        value: function get() {
          var _this18 = this;

          return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetLocatioSyncModel", res);
            _this18.atmodels = res;
          }));
        }
      }, {
        key: "getOne",
        value: function getOne(id) {
          var _this19 = this;

          var urlID = this.url + id + "/";
          return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetLocatioSyncModel", res);
            _this19.atmodel = res;
          }));
        }
      }, {
        key: "update",
        value: function update(body) {
          return this.http.patch(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetLocatioSyncModel", res);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetLocatioSyncModel", res);
          }));
        }
      }, {
        key: "filter",
        value: function filter(field) {
          var urlFilter = this.url + "?" + field;
          return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetLocatioSyncModel", res);
          }));
        }
      }, {
        key: "get_asset_location",
        value: function get_asset_location() {
          var _this20 = this;

          var urlget = this.url + "get_asset_location/";
          console.log("urlget = ", urlget);
          return this.http.get(urlget).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetLocatioSyncModel", res);
            _this20.atmodels = res;
          }));
        }
      }]);

      return AssetLocatioSyncService;
    }();

    AssetLocatioSyncService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    AssetLocatioSyncService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], AssetLocatioSyncService);
    /***/
  },

  /***/
  "./src/app/shared/services/asset-types/asset-types.service.ts":
  /*!********************************************************************!*\
    !*** ./src/app/shared/services/asset-types/asset-types.service.ts ***!
    \********************************************************************/

  /*! exports provided: AssetTypesService */

  /***/
  function srcAppSharedServicesAssetTypesAssetTypesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetTypesService", function () {
      return AssetTypesService;
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

    var AssetTypesService =
    /*#__PURE__*/
    function () {
      function AssetTypesService(http) {
        _classCallCheck(this, AssetTypesService);

        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/asset-types/"; // Data

        this.atmodels = [];
      }

      _createClass(AssetTypesService, [{
        key: "post",
        value: function post(body) {
          return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetTypesModel", res);
          }));
        }
      }, {
        key: "get",
        value: function get() {
          var _this21 = this;

          return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetTypesModel", res);
            _this21.atmodels = res;
          }));
        }
      }, {
        key: "getOne",
        value: function getOne(id) {
          var _this22 = this;

          var urlID = this.url + id + "/";
          return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetTypesModel", res);
            _this22.atmodel = res;
          }));
        }
      }, {
        key: "update",
        value: function update(body) {
          return this.http.patch(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetTypesModel", res);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetTypesModel", res);
          }));
        }
      }, {
        key: "filter",
        value: function filter(field) {
          var urlFilter = this.url + "?" + field;
          return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetTypesModel", res);
          }));
        }
      }]);

      return AssetTypesService;
    }();

    AssetTypesService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    AssetTypesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], AssetTypesService);
    /***/
  },

  /***/
  "./src/app/shared/services/assets/assets.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/services/assets/assets.service.ts ***!
    \**********************************************************/

  /*! exports provided: AssetsService */

  /***/
  function srcAppSharedServicesAssetsAssetsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetsService", function () {
      return AssetsService;
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

    var AssetsService =
    /*#__PURE__*/
    function () {
      function AssetsService(http) {
        _classCallCheck(this, AssetsService);

        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/assets/"; // Data 

        this.amodels = [];
      }

      _createClass(AssetsService, [{
        key: "post",
        value: function post(body) {
          return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetsModel", res);
          }));
        }
      }, {
        key: "get",
        value: function get() {
          var _this23 = this;

          return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetsModel", res);
            _this23.amodels = res;
          }));
        }
      }, {
        key: "getOne",
        value: function getOne(id) {
          var _this24 = this;

          var urlID = this.url + id + "/";
          return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetsModel", res);
            _this24.amodel = res;
          }));
        } // update(body: Form): Observable<AssetsModel> {
        //   return this.http.patch<AssetsModel>(this.url, body).pipe(
        //     tap((res) => {
        //       console.log("AssetsModel", res);
        //     })
        //   );
        // }

      }, {
        key: "update",
        value: function update(id, body) {
          var urlTemp = this.url + id + '/';
          return this.http.patch(urlTemp, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetsModel", res);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetsModel", res);
          }));
        }
      }, {
        key: "filter",
        value: function filter(field) {
          var urlFilter = this.url + "?" + field;
          return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetsModel", res);
          }));
        }
      }, {
        key: "getOneExtended",
        value: function getOneExtended(id) {
          var _this25 = this;

          var urlID = this.url + id + "/extended/";
          return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetsModel", res);
            _this25.amodel = res;
          }));
        }
      }, {
        key: "patch_asset",
        value: function patch_asset(body) {
          var urlPatchAsset = this.url + "patch_asset/";
          return this.http.post(urlPatchAsset, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetsModel", res);
          }));
        }
      }]);

      return AssetsService;
    }();

    AssetsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    AssetsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], AssetsService);
    /***/
  }
}]);
//# sourceMappingURL=default~asset-detail-asset-detail-module~pages-technical-asset-detail-asset-detail-module-es5.js.map