(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~asset-detail-asset-detail-module~pages-technical-asset-detail-asset-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/asset-detail/asset-detail.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/asset-detail/asset-detail.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"clickBack()\">\n        <ion-icon src=\"../../../../assets/icon/air-selangor-icon.svg\" style=\"font-size: 2rem\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title style=\"font-weight: bold\"> Asset Detail </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openNotification()\">\n        <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n        <ion-badge size=\"small\" color=\"danger\" style=\"position: absolute; right: -5px; top: 1px\">\n          {{ notificationService.totalnotificationbyuser }}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content-core\">\n  <!-- <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"scanQrCode()\">\n      <ion-icon name=\"scan\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab> -->\n  <div class=\"ion-padding\">\n    <ion-list class=\"ion-padding line-input\">\n\n      <ion-item>\n        <ion-label position=\"stacked\">Badge No</ion-label>\n        <ion-input type=\"text\" [disabled]=\"true\" [value]=\"asset_detail.badge_no\" readonly></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Asset ID</ion-label>\n        <ion-input type=\"text\" [disabled]=\"true\" [value]=\"asset_detail.asset_id\" readonly></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Asset Type</ion-label>\n        <ion-input type=\"text\" [disabled]=\"true\" readonly [value]=\"asset_detail.asset_type\" readonly></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Asset Description</ion-label>\n        <!-- <ion-input type=\"text\" (change)=\"onKeyAssDesc($event.target.value,asset_detail)\"\n          [value]=\"asset_detail.description\">\n        </ion-input> -->\n        <ion-textarea rows=\"3\" (change)=\"onKeyAssDesc($event.target.value,asset_detail)\"\n          [value]=\"asset_detail.description\"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Asset Location</ion-label>\n        <ion-textarea rows=\"3\" [disabled]=\"true\" [value]=\"assetLocatioSyncdata\" readonly></ion-textarea>\n      </ion-item>\n    </ion-list>\n\n\n    <ion-list-header *ngIf=\"assetAttrColumn != []\">\n      <ion-label>Asset Attribute </ion-label>\n    </ion-list-header>\n\n    <ion-list class=\"ion-padding line-input\">\n      <ion-item *ngFor=\"let assetAttr of assetAttributedatas\">\n        <ion-label position=\"stacked\">{{assetAttr.field_name | titlecase}}</ion-label>\n\n        <ion-input type=\"text\" *ngIf=\"assetAttr.dropdown == 'no'\" (change)=\"onKey($event.target.value,assetAttr)\"\n          value=\"{{assetAttr.field_value}}\">\n        </ion-input>\n\n        <ion-select *ngIf=\"assetAttr.dropdown == 'yes'\" (ionChange)=\"onKey($event.target.value,assetAttr)\">\n          <ion-select-option *ngFor=\"let assAtt of assetAttr.option\" [value]=\"assAtt.characteristic_value\">\n            {{assAtt.characteristic_value}}</ion-select-option>\n        </ion-select>\n\n      </ion-item>\n    </ion-list>\n\n  </div>\n\n  <div class=\"ion-padding ion-text-center\">\n    <ion-button color=\"light\" (click)=\"cancel()\">Cancel</ion-button>\n    <ion-button color=\"primary\" (click)=\"updateDetails()\">Update</ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/technical/asset-detail/asset-detail-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/technical/asset-detail/asset-detail-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AssetDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetDetailPageRoutingModule", function() { return AssetDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _asset_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asset-detail.page */ "./src/app/pages/technical/asset-detail/asset-detail.page.ts");




const routes = [
    {
        path: '',
        component: _asset_detail_page__WEBPACK_IMPORTED_MODULE_3__["AssetDetailPage"]
    }
];
let AssetDetailPageRoutingModule = class AssetDetailPageRoutingModule {
};
AssetDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AssetDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/technical/asset-detail/asset-detail.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/technical/asset-detail/asset-detail.module.ts ***!
  \*********************************************************************/
/*! exports provided: AssetDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetDetailPageModule", function() { return AssetDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _asset_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asset-detail-routing.module */ "./src/app/pages/technical/asset-detail/asset-detail-routing.module.ts");
/* harmony import */ var _asset_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./asset-detail.page */ "./src/app/pages/technical/asset-detail/asset-detail.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");








let AssetDetailPageModule = class AssetDetailPageModule {
};
AssetDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _asset_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["AssetDetailPageRoutingModule"],
        ],
        declarations: [_asset_detail_page__WEBPACK_IMPORTED_MODULE_6__["AssetDetailPage"]],
    })
], AssetDetailPageModule);



/***/ }),

/***/ "./src/app/pages/technical/asset-detail/asset-detail.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/technical/asset-detail/asset-detail.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlY2huaWNhbC9hc3NldC1kZXRhaWwvYXNzZXQtZGV0YWlsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/technical/asset-detail/asset-detail.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/technical/asset-detail/asset-detail.page.ts ***!
  \*******************************************************************/
/*! exports provided: AssetDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetDetailPage", function() { return AssetDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/assets/assets.service */ "./src/app/shared/services/assets/assets.service.ts");
/* harmony import */ var src_app_shared_services_asset_groups_asset_groups_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/asset-groups/asset-groups.service */ "./src/app/shared/services/asset-groups/asset-groups.service.ts");
/* harmony import */ var src_app_shared_services_asset_types_asset_types_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/asset-types/asset-types.service */ "./src/app/shared/services/asset-types/asset-types.service.ts");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/notifications/notifications.service */ "./src/app/shared/services/notifications/notifications.service.ts");
/* harmony import */ var src_app_shared_services_asset_location_sync_asset_location_sync_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/asset-location-sync/asset-location-sync.service */ "./src/app/shared/services/asset-location-sync/asset-location-sync.service.ts");
/* harmony import */ var src_app_shared_services_asset_attribute_asset_attribute_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/asset-attribute/asset-attribute.service */ "./src/app/shared/services/asset-attribute/asset-attribute.service.ts");
/* harmony import */ var src_app_shared_services_asset_attribute_reference_asset_attribute_reference_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/asset-attribute-reference/asset-attribute-reference.service */ "./src/app/shared/services/asset-attribute-reference/asset-attribute-reference.service.ts");
/* harmony import */ var src_app_shared_services_asset_attribute_column_asset_attribute_column_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/services/asset-attribute-column/asset-attribute-column.service */ "./src/app/shared/services/asset-attribute-column/asset-attribute-column.service.ts");
/* harmony import */ var src_app_shared_services_asset_attribute_predefine_asset_attribute_prodefine_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/services/asset-attribute-predefine/asset-attribute-prodefine.service */ "./src/app/shared/services/asset-attribute-predefine/asset-attribute-prodefine.service.ts");






// import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";










let AssetDetailPage = class AssetDetailPage {
    constructor(datePipe, formBuilder, alertController, menu, assetsService, assetGroupsService, assetTypesService, authService, notificationService, route, router, // private barcodeScanner: BarcodeScanner
    assetLocatioSyncService, assetAttributeService, assetAttributeReferenceService, assetAttributeColumnService, assetAttributePredefineService) {
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
            modified_at: "",
        };
        this.assetAttributedatas = [];
        // Forms
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
        this.route.queryParams.subscribe((params) => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.asset_detail = this.router.getCurrentNavigation().extras.state.asset_detail;
                // console.log("this.asset_detail==>><<", this.asset_detail)
                let asset_attributes = this.asset_detail["asset_attributes"];
                // console.log('assetType = ', assetType)
                // this.getAssetAttributeData()
                this.getAssetAttributeData(asset_attributes);
                // console.log("this.asset_detail ooooo = ", this.asset_detail)
                // console.log("this.asset_detail asset_id = ", this.asset_detail.asset_type)
                let asset_type = "asset_type_code=" + this.asset_detail['asset_type'];
                this.assetAttributeId = this.asset_detail['asset_attributes'];
                // console.log("this.assetAttributeId----", this.assetAttributeId)
                this.assetTypesService.filter(asset_type).subscribe((assTypeRes) => {
                    // console.log("assTypeRes", assTypeRes)
                    // console.log("assTypeRes", assTypeRes[0]['asset_type_description'])
                    let asset_typedesc = "asset_type_id=" + assTypeRes[0]['asset_type_description'];
                    // console.log(asset_typedesc)
                    this.assetAttributeColumnService.filter(asset_typedesc).subscribe((assAttColRes) => {
                        // console.log("assAttColRes = ", assAttColRes)
                        this.getAssAttrColumnData(assAttColRes[0]);
                    }, (err) => {
                        console.log(err);
                    });
                }, (err) => {
                    console.log(err);
                });
                // if (this.asset_detail.asset_primary_category.match(/Pump/i)) {
                //   this.asset_type = "Pump";
                // } else if (this.asset_detail.asset_primary_category.match(/Motor/i)) {
                //   this.asset_type = "Motor";
                // }
                if (this.asset_detail['attached_to_asset_id'] == '') {
                    this.assetLocatioSyncService.filter("node_id=" + this.asset_detail['node_id']).subscribe((res) => {
                        // console.log("assetLocatioSyncServiceres", res);
                        // this.assetregistrations = res;
                        // this.assetLocatioSyncdata = res[0].description
                        if (res.length > 0) {
                            this.assetLocatioSyncdata = res[0].description;
                        }
                        else {
                            this.assetLocatioSyncdata = '-';
                        }
                        // console.log(" this.assetLocatioSyncdata = ", this.assetLocatioSyncdata)
                    }, (err) => {
                        console.error("err", err);
                    });
                }
                else {
                    this.assetsService.filter("asset_id=" + this.asset_detail['attached_to_asset_id']).subscribe((resA) => {
                        console.log("assetqqqqqqqqq=res", resA);
                        this.assetLocatioSyncService.filter("node_id=" + resA[0]['node_id']).subscribe((resAls) => {
                            console.log("resAls>><<>>", resAls);
                            if (resAls.length > 0) {
                                this.assetLocatioSyncdata = resAls[0].description;
                            }
                            else {
                                this.assetLocatioSyncdata = '-';
                            }
                            // console.log(" this.assetLocatioSyncdata = ", this.assetLocatioSyncdata)
                        }, (err) => {
                            console.error("err", err);
                        });
                    }, (error) => {
                        console.log(error);
                    });
                }
                // this.assetLocatioSyncService.filter("node_id=" + this.asset_detail.node_id).subscribe(
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
    ngOnInit() { }
    getAssAttrColumnData(assAttCol) {
        // arraytype = []
        setTimeout(() => {
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
                if (this.arraytype.indexOf('bottom_water_level') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'bottom_water_level';
                    assAttColTemp['field_name'] = 'bottom_water_level';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['closing_torque'] == true) {
                if (this.arraytype.indexOf('closing_torque') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'closing_torque';
                    assAttColTemp['field_name'] = 'closing_torque';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['dimention'] == true) {
                if (this.arraytype.indexOf('dimention') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'dimention';
                    assAttColTemp['field_name'] = 'dimention';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['frequency'] == true) {
                if (this.arraytype.indexOf('frequency') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'frequency';
                    assAttColTemp['field_name'] = 'frequency';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['infrastructure_status'] == true) {
                if (this.arraytype.indexOf('infrastructure_status') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'infrastructure_status';
                    assAttColTemp['field_name'] = 'infrastructure_status';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['installation'] == true) {
                if (this.arraytype.indexOf('installation') == -1) {
                    // console.log("assAttCol['installation']  = ", assAttCol['installation'])
                    // console.log("this.arraytype.indexOf('installation')  = ", this.arraytype.indexOf('installation'))
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'installation';
                    assAttColTemp['field_name'] = 'installation';
                    assAttColTemp['field_value'] = '';
                    assAttColTemp['characteristic_value'] = null;
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['manufacturer'] == true) {
                // console.log("gggggggg")
                if (this.arraytype.indexOf('manufacturer') == -1) {
                    // console.log("hhhhhhh")
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'manufacturer';
                    assAttColTemp['field_name'] = 'manufacturer';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['material_type'] == true) {
                if (this.arraytype.indexOf('material_type') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'material_type';
                    assAttColTemp['field_name'] = 'material_type';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['no_of_channel'] == true) {
                if (this.arraytype.indexOf('no_of_channel') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'no_of_channel';
                    assAttColTemp['field_name'] = 'no_of_channel';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['opening_torque'] == true) {
                if (this.arraytype.indexOf('opening_torque') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'opening_torque';
                    assAttColTemp['field_name'] = 'opening_torque';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['pump_head'] == true) {
                if (this.arraytype.indexOf('pump_head') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'pump_head';
                    assAttColTemp['field_name'] = 'pump_head';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['staging_height'] == true) {
                if (this.arraytype.indexOf('staging_height') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'staging_height';
                    assAttColTemp['field_name'] = 'staging_height';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['top_water_level'] == true) {
                if (this.arraytype.indexOf('top_water_level') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'top_water_level';
                    assAttColTemp['field_name'] = 'top_water_level';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['valve_pressure_rating'] == true) {
                if (this.arraytype.indexOf('valve_pressure_rating') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'valve_pressure_rating';
                    assAttColTemp['field_name'] = 'valve_pressure_rating';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['vehicle_engine_number'] == true) {
                if (this.arraytype.indexOf('vehicle_engine_number') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'vehicle_engine_number';
                    assAttColTemp['field_name'] = 'vehicle_engine_number';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['vehicle_insurance_auto_windscreen_insured'] == true) {
                if (this.arraytype.indexOf('vehicle_insurance_auto_windscreen_insured') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'vehicle_insurance_auto_windscreen_insured';
                    assAttColTemp['field_name'] = 'vehicle_insurance_auto_windscreen_insured';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['vehicle_insurance_date_period_to'] == true) {
                if (this.arraytype.indexOf('vehicle_insurance_date_period_to') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'vehicle_insurance_date_period_to';
                    assAttColTemp['field_name'] = 'vehicle_insurance_date_period_to';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['vehicle_insurance_sum_insured'] == true) {
                if (this.arraytype.indexOf('vehicle_insurance_sum_insured') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'vehicle_insurance_sum_insured';
                    assAttColTemp['field_name'] = 'vehicle_insurance_sum_insured';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['vehicle_owner_status'] == true) {
                if (this.arraytype.indexOf('vehicle_owner_status') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'vehicle_owner_status';
                    assAttColTemp['field_name'] = 'vehicle_owner_status';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['vehicle_puspakom_expired_date'] == true) {
                if (this.arraytype.indexOf('vehicle_puspakom_expired_date') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'vehicle_puspakom_expired_date';
                    assAttColTemp['field_name'] = 'vehicle_puspakom_expired_date';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['vehicle_roadtax_expired_date'] == true) {
                if (this.arraytype.indexOf('vehicle_roadtax_expired_date') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'vehicle_roadtax_expired_date';
                    assAttColTemp['field_name'] = 'vehicle_roadtax_expired_date';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['vehicle_seating_capacity'] == true) {
                if (this.arraytype.indexOf('vehicle_seating_capacity') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'vehicle_seating_capacity';
                    assAttColTemp['field_name'] = 'vehicle_seating_capacity';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['communication_protocol'] == true) {
                if (this.arraytype.indexOf('communication_protocol') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'communication_protocol';
                    assAttColTemp['field_name'] = 'communication_protocol';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['environmental_performance'] == true) {
                if (this.arraytype.indexOf('environmental_performance') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'environmental_performance';
                    assAttColTemp['field_name'] = 'environmental_performance';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['horse_power'] == true) {
                if (this.arraytype.indexOf('horse_power') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'horse_power';
                    assAttColTemp['field_name'] = 'horse_power';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['infrastructure_status_reason'] == true) {
                if (this.arraytype.indexOf('infrastructure_status_reason') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'infrastructure_status_reason';
                    assAttColTemp['field_name'] = 'infrastructure_status_reason';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['insulation'] == true) {
                if (this.arraytype.indexOf('insulation') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'insulation';
                    assAttColTemp['field_name'] = 'insulation';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['manufacturer_year'] == true) {
                if (this.arraytype.indexOf('manufacturer_year') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'manufacturer_year';
                    assAttColTemp['field_name'] = 'manufacturer_year';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['model'] == true) {
                if (this.arraytype.indexOf('model') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'model';
                    assAttColTemp['field_name'] = 'model';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['no_of_phases'] == true) {
                if (this.arraytype.indexOf('no_of_phases') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'no_of_phases';
                    assAttColTemp['field_name'] = 'no_of_phases';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['outlet_diameter'] == true) {
                if (this.arraytype.indexOf('outlet_diameter') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'outlet_diameter';
                    assAttColTemp['field_name'] = 'outlet_diameter';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['revolutions_per_minute'] == true) {
                if (this.arraytype.indexOf('revolutions_per_minute') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'revolutions_per_minute';
                    assAttColTemp['field_name'] = 'revolutions_per_minute';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['supply_location'] == true) {
                if (this.arraytype.indexOf('supply_location') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'supply_location';
                    assAttColTemp['field_name'] = 'supply_location';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['type'] == true) {
                if (this.arraytype.indexOf('type') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'type';
                    assAttColTemp['field_name'] = 'type';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['vehicle_chasis_number'] == true) {
                if (this.arraytype.indexOf('vehicle_chasis_number') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'vehicle_chasis_number';
                    assAttColTemp['field_name'] = 'vehicle_chasis_number';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['vehicle_insurance_vendor'] == true) {
                if (this.arraytype.indexOf('vehicle_insurance_vendor') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'vehicle_insurance_vendor';
                    assAttColTemp['field_name'] = 'vehicle_insurance_vendor';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['vehicle_insurance_cover_note_number'] == true) {
                if (this.arraytype.indexOf('vehicle_insurance_cover_note_number') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'vehicle_insurance_cover_note_number';
                    assAttColTemp['field_name'] = 'vehicle_insurance_cover_note_number';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['vehicle_insurance_no_claim_discount'] == true) {
                if (this.arraytype.indexOf('vehicle_insurance_no_claim_discount') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'vehicle_insurance_no_claim_discount';
                    assAttColTemp['field_name'] = 'vehicle_insurance_no_claim_discount';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['vehicle_insurance_total_premium'] == true) {
                if (this.arraytype.indexOf('vehicle_insurance_total_premium') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'vehicle_insurance_total_premium';
                    assAttColTemp['field_name'] = 'vehicle_insurance_total_premium';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['vehicle_register_date'] == true) {
                if (this.arraytype.indexOf('vehicle_register_date') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'vehicle_register_date';
                    assAttColTemp['field_name'] = 'vehicle_register_date';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['vehicle_spad_permit_date_period_to'] == true) {
                if (this.arraytype.indexOf('vehicle_spad_permit_date_period_to') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'vehicle_spad_permit_date_period_to';
                    assAttColTemp['field_name'] = 'vehicle_spad_permit_date_period_to';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['vehicle_spad_no_license_operator'] == true) {
                if (this.arraytype.indexOf('vehicle_spad_no_license_operator') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'vehicle_spad_no_license_operator';
                    assAttColTemp['field_name'] = 'vehicle_spad_no_license_operator';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['vehicle_registration_owner'] == true) {
                if (this.arraytype.indexOf('vehicle_registration_owner') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'vehicle_registration_owner';
                    assAttColTemp['field_name'] = 'vehicle_registration_owner';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['capacity_size'] == true) {
                if (this.arraytype.indexOf('capacity_size') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'capacity_size';
                    assAttColTemp['field_name'] = 'capacity_size';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['coverage_range'] == true) {
                if (this.arraytype.indexOf('coverage_range') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'coverage_range';
                    assAttColTemp['field_name'] = 'coverage_range';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['flow_rate'] == true) {
                if (this.arraytype.indexOf('flow_rate') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'flow_rate';
                    assAttColTemp['field_name'] = 'flow_rate';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['hysteresis'] == true) {
                if (this.arraytype.indexOf('hysteresis') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'hysteresis';
                    assAttColTemp['field_name'] = 'hysteresis';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['inlet_diameter'] == true) {
                if (this.arraytype.indexOf('inlet_diameter') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'inlet_diameter';
                    assAttColTemp['field_name'] = 'inlet_diameter';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['legal_name'] == true) {
                if (this.arraytype.indexOf('legal_name') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'legal_name';
                    assAttColTemp['field_name'] = 'legal_name';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['manufacture_part_number'] == true) {
                if (this.arraytype.indexOf('manufacture_part_number') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'manufacture_part_number';
                    assAttColTemp['field_name'] = 'manufacture_part_number';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['motor_current'] == true) {
                if (this.arraytype.indexOf('motor_current') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'motor_current';
                    assAttColTemp['field_name'] = 'motor_current';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['no_of_stage'] == true) {
                if (this.arraytype.indexOf('no_of_stage') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'no_of_stage';
                    assAttColTemp['field_name'] = 'no_of_stage';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['power_supply_type'] == true) {
                if (this.arraytype.indexOf('power_supply_type') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'power_supply_type';
                    assAttColTemp['field_name'] = 'power_supply_type';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['source_from'] == true) {
                if (this.arraytype.indexOf('source_from') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'source_from';
                    assAttColTemp['field_name'] = 'source_from';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['temperature'] == true) {
                if (this.arraytype.indexOf('temperature') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'temperature';
                    assAttColTemp['field_name'] = 'temperature';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['valve_diameter'] == true) {
                if (this.arraytype.indexOf('valve_diameter') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'valve_diameter';
                    assAttColTemp['field_name'] = 'valve_diameter';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['vehicle_engine_capacity'] == true) {
                if (this.arraytype.indexOf('vehicle_engine_capacity') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'vehicle_engine_capacity';
                    assAttColTemp['field_name'] = 'vehicle_engine_capacity';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['vehicle_model'] == true) {
                if (this.arraytype.indexOf('vehicle_model') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'vehicle_model';
                    assAttColTemp['field_name'] = 'vehicle_model';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['vehicle_insurance_date_period_from'] == true) {
                if (this.arraytype.indexOf('vehicle_insurance_date_period_from') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'vehicle_insurance_date_period_from';
                    assAttColTemp['field_name'] = 'vehicle_insurance_date_period_from';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['vehicle_insurance_policy_type'] == true) {
                if (this.arraytype.indexOf('vehicle_insurance_policy_type') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'vehicle_insurance_policy_type';
                    assAttColTemp['field_name'] = 'vehicle_insurance_policy_type';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['vehicle_puspakom_date_inspection'] == true) {
                if (this.arraytype.indexOf('vehicle_puspakom_date_inspection') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'vehicle_puspakom_date_inspection';
                    assAttColTemp['field_name'] = 'vehicle_puspakom_date_inspection';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['vehicle_roadtax_rate'] == true) {
                if (this.arraytype.indexOf('vehicle_roadtax_rate') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'vehicle_roadtax_rate';
                    assAttColTemp['field_name'] = 'vehicle_roadtax_rate';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['vehicle_roadtax_renew_date'] == true) {
                if (this.arraytype.indexOf('vehicle_roadtax_renew_date') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'vehicle_roadtax_renew_date';
                    assAttColTemp['field_name'] = 'vehicle_roadtax_renew_date';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['vehicle_spad_permit_date_period_from'] == true) {
                if (this.arraytype.indexOf('vehicle_spad_permit_date_period_from') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'vehicle_spad_permit_date_period_from';
                    assAttColTemp['field_name'] = 'vehicle_spad_permit_date_period_from';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['voltage'] == true) {
                if (this.arraytype.indexOf('voltage') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'voltage';
                    assAttColTemp['field_name'] = 'voltage';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['asset_status'] == true) {
                if (this.arraytype.indexOf('asset_status') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'asset_status';
                    assAttColTemp['field_name'] = 'asset_status';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['brand'] == true) {
                if (this.arraytype.indexOf('brand') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'brand';
                    assAttColTemp['field_name'] = 'brand';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['model_number'] == true) {
                if (this.arraytype.indexOf('model_number') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'model_number';
                    assAttColTemp['field_name'] = 'model_number';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['bo'] == true) {
                if (this.arraytype.indexOf('bo') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'bo';
                    assAttColTemp['field_name'] = 'bo';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            if (assAttCol['bo_status'] == true) {
                if (this.arraytype.indexOf('bo_status') == -1) {
                    let assAttColTemp = [];
                    assAttColTemp['id'] = '';
                    assAttColTemp['action_type'] = '';
                    // assAttColTemp['adhoc_value'] = null
                    assAttColTemp['characteristic_type'] = '';
                    assAttColTemp['characteristic_type_name'] = 'bo_status';
                    assAttColTemp['field_name'] = 'bo_status';
                    assAttColTemp['field_value'] = '';
                    // assAttColTemp['characteristic_value'] = null
                    this.assetAttributedatas.push(assAttColTemp);
                }
            }
            this.assetAttributedatas.forEach(ele => {
                console.log("eleeleeleeleele", ele);
                let filter = "attribute_field_name=" + ele.characteristic_type_name;
                this.assetAttributePredefineService.filter(filter).subscribe((res) => {
                    if (res.length > 0) {
                        ele.dropdown = 'yes';
                        ele.option = res;
                    }
                    else {
                        ele.dropdown = 'no';
                        ele.option = [];
                    }
                }, (err) => {
                });
            });
            // setTimeout(() => {
            console.log("this.assetAttributedatas ==== ", this.assetAttributedatas);
            // }, 100);
            for (let i = 0; i < this.assetAttributedatas.length; i++) {
                // console.log("this.assetAttributedatas[1] ===== ", this.assetAttributedatas[i])
                if (this.assetAttributedatas[i].characteristic_type == '') {
                    this.assetAttributeReferenceService.filter("attribute_field_name=" + this.assetAttributedatas[i].field_name).subscribe((res) => {
                        this.assetAttributedatas[i].characteristic_type = res[0].char_type_cd;
                        // this.assetAttributedatas.push(this.assetAttributedatas[i])
                        // console.log("res ===== ", res)
                    }, () => {
                    });
                }
            }
        }, 1000);
    }
    scanQrCode() {
        let navigationExtras = {
            state: {
                link: "/technical/tabs/tab2",
            },
        };
        this.router.navigate(["/technical/qr-scanner"], navigationExtras);
        // this.barcodeScanner
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
    update() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // let postAssets = {
            //   ...this.firstFormGroup.value,
            //   ...this.secondFormGroup.value,
            //   ...this.thirdFormGroup.value,
            //   ...this.fourthFormGroup.value,
            //   ...this.fifthFormGroup.value,
            //   ...this.sixthFormGroup.value,
            //   ...this.seventhFormGroup.value,
            //   // created_by: this.authService.userID
            // };
            /*this.assetsService.post(postAssets).subscribe(
              (res) => {
                if (res) {
                  console.log("res", res);
                  this.presentAlert(
                    "Success",
                    "Your asset successfully registered into the system."
                  );
                }
              },
              (err) => {
                console.error("err", err);
                // this.validation_messages = err.error;
                this.presentAlert(
                  "Error",
                  "There are error occured on your form. Please check your form again."
                );
              },
              () => {
                console.log("Http request completed");
              }
            );*/
            const alert = yield this.alertController.create({
                header: "Asset Detail",
                message: "Your asset detail have successfully updated into the system. Thank you.",
                buttons: [
                    {
                        text: "OK",
                        handler: () => {
                            this.homePage("/technical/tabs/tab1");
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    cancel() {
        this.router.navigate(["/technical/tabs/tab1"]);
    }
    presentAlert(header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
                buttons: [
                    {
                        text: "OK",
                        handler: () => {
                            if (header == "Success")
                                this.homePage("/technical/tabs/tab1");
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    homePage(path) {
        this.router.navigate([path]);
    }
    clickBack() {
        this.router.navigate(["/technical/tabs/tab2"]);
    }
    openNotification() {
        this.menu.enable(true, "menuNotification");
        this.menu.open("menuNotification");
    }
    getAssetAttributeData(asset_attr) {
        this.assetAttributedatas = [];
        // console.log('adsadaad');
        asset_attr.forEach(element => {
            this.field_value = null;
            this.assetAttributeService.getOne(element).subscribe((aasRes) => {
                // console.log('assetAttributeService>>=// ', aasRes)
                // this.assetAttributedatas.push(aasRes)
                // console.log("assetAttributedatas = ", this.assetAttributedatas)
                let assct = aasRes.characteristic_type;
                // console.log('aasRes.characteristic_type = ', assct)
                // this.getsadaasasd(assct)
                let characteristic_type_list = ["CM-MFG", "CM-WASTC", "CM-VRTVD", "CM-VOWNS", "CM-VROWN", "CM-VINPT"];
                // console.log("this.assetAttributedatas[0].characteristic_type", aasRes.characteristic_type)
                if (characteristic_type_list.indexOf(aasRes.characteristic_type) !== -1) {
                    // console.log(' already exists!')
                    this.field_value = aasRes.characteristic_value;
                    aasRes['field_value'] = this.field_value;
                }
                else {
                    this.field_value = aasRes.adhoc_value;
                    aasRes['field_value'] = this.field_value;
                    // console.log('not exist')
                }
                // if (aasRes.characteristic_value != null) {
                //   this.field_value = aasRes.characteristic_value
                //   aasRes['field_value'] = this.field_value
                // } else {
                //   this.field_value = aasRes.adhoc_value
                //   aasRes['field_value'] = this.field_value
                // }
                this.assetAttributeReferenceService.filter("char_type_cd=" + assct).subscribe(
                // this.assetAttributeReferenceService.filter("char_type_cd=" + assct).subscribe(
                (aarsRes) => {
                    aasRes['field_name'] = aarsRes[0].attribute_field_name;
                    this.arraytype.push(aarsRes[0].attribute_field_name);
                    // console.log('aarsRes qwe = ', aasRes)
                    this.assetAttributedatas.push(aasRes);
                }, (aarsErr) => {
                    console.error("err", aarsErr);
                });
            }, (aasErr) => {
                console.error("err", aasErr);
            });
        });
        // this.getsadaasasd(this.assetAttributedatas)
        // this.assetAttributeService.filter("characteristic_type=" + this.asset_detail.node_id).subscribe(
    }
    onKeyAssDesc(value, row) {
        // console.log(value)
        this.asset_detail['description'] = value;
        // console.log(this.asset_detail)
        // this.updateAssetData['characteristic_value'] = value
    }
    // onKey(value, row) {
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
    onKey(value, row) {
        console.log("row === ", row);
        console.log("value === ", value);
        this.assetAttributedatas.forEach(element => {
            // check in the form data 
            if (element.field_name == row.field_name) {
                let characteristic_type_list = ["CM-MFG", "CM-WASTC", "CM-VRTVD", "CM-VOWNS", "CM-VROWN", "CM-VINPT"];
                let updateformData = {};
                // console.log(characteristic_type_list.indexOf(row.characteristic_type))
                if (characteristic_type_list.indexOf(row.characteristic_type) !== -1) {
                    // console.log("ssss")
                    element.characteristic_value = value;
                    updateformData['characteristic_value'] = value;
                }
                else {
                    // console.log("ddddd")
                    element.adhoc_value = value;
                    updateformData['adhoc_value'] = value;
                }
                // updateformData['action_type'] = 'update'
                updateformData['characteristic_type'] = element.characteristic_type;
                updateformData['characteristic_type_name'] = element.field_name;
                // console.log("updateformData = ", updateformData);
                // console.log("element = ", element)
                if (element.id == '') {
                    element.action_type = 'ADD';
                    updateformData['action_type'] = 'ADD';
                    // console.log('not exist cok')
                    this.assetAttributeService.post(updateformData).subscribe((resAAS) => {
                        let atID = [];
                        // this.assetAttributedatas.push(res)
                        // this.assetAttributeId.forEach(ele => {
                        //   atID.push(ele)
                        // });
                        // console.log("resAAS = ", resAAS)
                        // this.assetAttributeId.push(resAAS.id)
                        element.id = resAAS.id;
                        // console.log("assetAttributeId = ", this.assetAttributeId)
                    }, (err) => {
                        console.error("err", err);
                    });
                }
                else {
                    element.action_type = 'UPDATE';
                    updateformData['action_type'] = 'UPDATE';
                    // console.log('exist cok')
                    this.assetAttributeService.update(element.id, updateformData).subscribe((res) => {
                        // console.log(res)
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
                    }, (err) => {
                        console.error("err", err);
                    });
                }
            }
        });
        setTimeout(() => {
            console.log("this.assetAttributedatas", this.assetAttributedatas);
        }, 1000);
    }
    updateDetails() {
        // });
        // setTimeout(() => {
        // console.log("assetAttributedatas --==][ ", this.assetAttributedatas)
        let assetAttrIdExist = [];
        this.assetAttributedatas.forEach(element => {
            // console.log("element --- ", element.id)
            if (element.id != '') {
                // console.log('masuk')
                assetAttrIdExist.push(element.id);
            }
        });
        // console.log("assetAttrIdExist---", assetAttrIdExist)
        let selectedDate = new Date(this.asset_detail["effective_datetime"]);
        let obj = {
            asset_attributes: assetAttrIdExist,
            description: this.asset_detail["description"],
            effective_datetime: selectedDate,
            submitted_datetime: new Date //moment(this.getCurrentDateTime()).toDate() // moment.utc(this.getCurrentDateTime()).toDate()
        };
        console.log("this.asset_detail[effective_datetime]", this.asset_detail["effective_datetime"]);
        // let roo = this.asset_detail["effective_datetime"].setHours(this.asset_detail["effective_datetime"].getHours() - 2);
        // console.log("datetime", roo)
        console.log("obj = ", obj);
        console.log(" this.selectedDate", selectedDate);
        console.log("this.getCurrentDateTime()", this.getCurrentDateTime());
        var twoHoursBefore = new Date();
        twoHoursBefore.setHours(twoHoursBefore.getHours() - 2);
        // if (this.assetAttributedatas.length == assetAttrIdExist.length) {
        this.assetsService.update(this.asset_detail['id'], obj).subscribe((resp) => {
            console.log('berjaya cok', resp);
        }, (error) => {
            // console.log('tidak berjaya cok', error)
        }, () => {
            this.update();
        });
        // } else {
        //   this.warningAlert('Warning', 'Please fill in all question.')
        // }
    }
    warningAlert(header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
                buttons: ['ok'],
            });
            yield alert.present();
        });
    }
    getCurrentDateTime() {
        let selectedDate = new Date();
        let year = selectedDate.getFullYear();
        let month = selectedDate.getMonth() + 1 < 10
            ? "0" + (selectedDate.getMonth() + 1)
            : selectedDate.getMonth() + 1;
        let day = selectedDate.getDate() < 10
            ? "0" + selectedDate.getDate()
            : selectedDate.getDate();
        let formatDate = year + "-" + month + "-" + day;
        let hour = selectedDate.getHours() < 10
            ? "0" + selectedDate.getHours()
            : selectedDate.getHours();
        let minute = selectedDate.getMinutes() < 10
            ? "0" + selectedDate.getMinutes()
            : selectedDate.getMinutes();
        let second = selectedDate.getSeconds() < 10
            ? "0" + selectedDate.getSeconds()
            : selectedDate.getSeconds();
        let formatTime = hour + ":" + minute + ":" + second;
        return formatDate + "T" + formatTime + "Z";
    }
};
AssetDetailPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_6__["AssetsService"] },
    { type: src_app_shared_services_asset_groups_asset_groups_service__WEBPACK_IMPORTED_MODULE_7__["AssetGroupsService"] },
    { type: src_app_shared_services_asset_types_asset_types_service__WEBPACK_IMPORTED_MODULE_8__["AssetTypesService"] },
    { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_10__["NotificationsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_asset_location_sync_asset_location_sync_service__WEBPACK_IMPORTED_MODULE_11__["AssetLocatioSyncService"] },
    { type: src_app_shared_services_asset_attribute_asset_attribute_service__WEBPACK_IMPORTED_MODULE_12__["AssetAttributeService"] },
    { type: src_app_shared_services_asset_attribute_reference_asset_attribute_reference_service__WEBPACK_IMPORTED_MODULE_13__["AssetAttributeReferenceService"] },
    { type: src_app_shared_services_asset_attribute_column_asset_attribute_column_service__WEBPACK_IMPORTED_MODULE_14__["AssetAttributeColumnService"] },
    { type: src_app_shared_services_asset_attribute_predefine_asset_attribute_prodefine_service__WEBPACK_IMPORTED_MODULE_15__["AssetAttributePredefineService"] }
];
AssetDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-asset-detail",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./asset-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/asset-detail/asset-detail.page.html")).default,
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./asset-detail.page.scss */ "./src/app/pages/technical/asset-detail/asset-detail.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
        src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_6__["AssetsService"],
        src_app_shared_services_asset_groups_asset_groups_service__WEBPACK_IMPORTED_MODULE_7__["AssetGroupsService"],
        src_app_shared_services_asset_types_asset_types_service__WEBPACK_IMPORTED_MODULE_8__["AssetTypesService"],
        src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
        src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_10__["NotificationsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_asset_location_sync_asset_location_sync_service__WEBPACK_IMPORTED_MODULE_11__["AssetLocatioSyncService"],
        src_app_shared_services_asset_attribute_asset_attribute_service__WEBPACK_IMPORTED_MODULE_12__["AssetAttributeService"],
        src_app_shared_services_asset_attribute_reference_asset_attribute_reference_service__WEBPACK_IMPORTED_MODULE_13__["AssetAttributeReferenceService"],
        src_app_shared_services_asset_attribute_column_asset_attribute_column_service__WEBPACK_IMPORTED_MODULE_14__["AssetAttributeColumnService"],
        src_app_shared_services_asset_attribute_predefine_asset_attribute_prodefine_service__WEBPACK_IMPORTED_MODULE_15__["AssetAttributePredefineService"]])
], AssetDetailPage);



/***/ }),

/***/ "./src/app/shared/services/asset-attribute-column/asset-attribute-column.service.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/services/asset-attribute-column/asset-attribute-column.service.ts ***!
  \******************************************************************************************/
/*! exports provided: AssetAttributeColumnService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetAttributeColumnService", function() { return AssetAttributeColumnService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AssetAttributeColumnService = class AssetAttributeColumnService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/asset-attribute-column/";
        // Data
        this.amodels = [];
    }
    post(body) {
        return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetAttributeColumnModel", res);
        }));
    }
    get() {
        return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetAttributeColumnModel", res);
            this.amodels = res;
        }));
    }
    getOne(id) {
        let urlID = this.url + id + "/";
        return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetAttributeColumnModel", res);
            this.amodel = res;
        }));
    }
    update(body) {
        return this.http.patch(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetAttributeColumnModel", res);
        }));
    }
    delete(id) {
        return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetAttributeColumnModel", res);
        }));
    }
    filter(field) {
        let urlFilter = this.url + "?" + field;
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetAttributeColumnModel", res);
        }));
    }
    patch_asset(body) {
        let urlPatchAsset = this.url + "patch_asset/";
        return this.http.post(urlPatchAsset, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetAttributeColumnModel", res);
        }));
    }
};
AssetAttributeColumnService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AssetAttributeColumnService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], AssetAttributeColumnService);



/***/ }),

/***/ "./src/app/shared/services/asset-attribute-predefine/asset-attribute-prodefine.service.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/shared/services/asset-attribute-predefine/asset-attribute-prodefine.service.ts ***!
  \************************************************************************************************/
/*! exports provided: AssetAttributePredefineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetAttributePredefineService", function() { return AssetAttributePredefineService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AssetAttributePredefineService = class AssetAttributePredefineService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/asset-attribute-predefine/";
        // Data
        this.atmodels = [];
    }
    post(body) {
        return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetAttributePredefineModel", res);
        }));
    }
    get() {
        return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetAttributePredefineModel", res);
            this.atmodels = res;
        }));
    }
    getOne(id) {
        let urlID = this.url + id + "/";
        return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetAttributePredefineModel", res);
            this.atmodel = res;
        }));
    }
    update(body) {
        return this.http.patch(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetAttributePredefineModel", res);
        }));
    }
    delete(id) {
        return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetAttributePredefineModel", res);
        }));
    }
    filter(field) {
        let urlFilter = this.url + "?" + field;
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetAttributePredefineModel", res);
        }));
    }
};
AssetAttributePredefineService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AssetAttributePredefineService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], AssetAttributePredefineService);



/***/ }),

/***/ "./src/app/shared/services/asset-attribute-reference/asset-attribute-reference.service.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/shared/services/asset-attribute-reference/asset-attribute-reference.service.ts ***!
  \************************************************************************************************/
/*! exports provided: AssetAttributeReferenceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetAttributeReferenceService", function() { return AssetAttributeReferenceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AssetAttributeReferenceService = class AssetAttributeReferenceService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/asset-attribute-reference/";
        // Data
        this.atmodels = [];
    }
    post(body) {
        return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetAttributeReferenceModel", res);
        }));
    }
    get() {
        return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetAttributeReferenceModel", res);
            this.atmodels = res;
        }));
    }
    getOne(id) {
        let urlID = this.url + id + "/";
        return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetAttributeReferenceModel", res);
            this.atmodel = res;
        }));
    }
    update(body) {
        return this.http.patch(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetAttributeReferenceModel", res);
        }));
    }
    delete(id) {
        return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetAttributeReferenceModel", res);
        }));
    }
    filter(field) {
        let urlFilter = this.url + "?" + field;
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetAttributeReferenceModel", res);
        }));
    }
};
AssetAttributeReferenceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AssetAttributeReferenceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], AssetAttributeReferenceService);



/***/ }),

/***/ "./src/app/shared/services/asset-attribute/asset-attribute.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/services/asset-attribute/asset-attribute.service.ts ***!
  \****************************************************************************/
/*! exports provided: AssetAttributeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetAttributeService", function() { return AssetAttributeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AssetAttributeService = class AssetAttributeService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/asset-attribute/";
        // Data
        this.amodels = [];
    }
    post(body) {
        return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            // console.log("AssetAttributeModel", res);
        }));
    }
    get() {
        return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            // console.log("AssetAttributeModel", res);
            this.amodels = res;
        }));
    }
    getOne(id) {
        let urlID = this.url + id + "/";
        return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            // console.log("AssetAttributeModel", res);
            this.amodel = res;
        }));
    }
    // update(body): Observable<AssetAttributeModel> {
    //   return this.http.patch<AssetAttributeModel>(this.url, body).pipe(
    //     tap((res) => {
    //       console.log("AssetAttributeModel", res);
    //     })
    //   );
    // }
    update(id, body) {
        let urlTemp = this.url + id + '/';
        return this.http.patch(urlTemp, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            // console.log("AssetAttributeModel", res);
        }));
    }
    delete(id) {
        return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetAttributeModel", res);
        }));
    }
    filter(field) {
        let urlFilter = this.url + "?" + field;
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetAttributeModel", res);
        }));
    }
    patch_asset(body) {
        let urlPatchAsset = this.url + "patch_asset/";
        return this.http.post(urlPatchAsset, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetAttributeModel", res);
        }));
    }
};
AssetAttributeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AssetAttributeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], AssetAttributeService);



/***/ }),

/***/ "./src/app/shared/services/asset-groups/asset-groups.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/services/asset-groups/asset-groups.service.ts ***!
  \**********************************************************************/
/*! exports provided: AssetGroupsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetGroupsService", function() { return AssetGroupsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AssetGroupsService = class AssetGroupsService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/asset-groups/";
        // Data
        this.agmodels = [];
    }
    post(body) {
        return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetGroupsModel", res);
        }));
    }
    get() {
        return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetGroupsModel", res);
            this.agmodels = res;
        }));
    }
    getOne(id) {
        let urlID = this.url + id + "/";
        return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetGroupsModel", res);
            this.agmodel = res;
        }));
    }
    update(body) {
        return this.http.patch(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetGroupsModel", res);
        }));
    }
    delete(id) {
        return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetGroupsModel", res);
        }));
    }
    filter(field) {
        let urlFilter = this.url + "?" + field;
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetGroupsModel", res);
        }));
    }
};
AssetGroupsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AssetGroupsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], AssetGroupsService);



/***/ }),

/***/ "./src/app/shared/services/asset-location-sync/asset-location-sync.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shared/services/asset-location-sync/asset-location-sync.service.ts ***!
  \************************************************************************************/
/*! exports provided: AssetLocatioSyncService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetLocatioSyncService", function() { return AssetLocatioSyncService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AssetLocatioSyncService = class AssetLocatioSyncService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/asset-location-sync/";
        // Data
        this.atmodels = [];
    }
    post(body) {
        return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetLocatioSyncModel", res);
        }));
    }
    get() {
        return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetLocatioSyncModel", res);
            this.atmodels = res;
        }));
    }
    getOne(id) {
        let urlID = this.url + id + "/";
        return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetLocatioSyncModel", res);
            this.atmodel = res;
        }));
    }
    update(body) {
        return this.http.patch(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetLocatioSyncModel", res);
        }));
    }
    delete(id) {
        return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetLocatioSyncModel", res);
        }));
    }
    filter(field) {
        let urlFilter = this.url + "?" + field;
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetLocatioSyncModel", res);
        }));
    }
    get_asset_location() {
        let urlget = this.url + "get_asset_location/";
        console.log("urlget = ", urlget);
        return this.http.get(urlget).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetLocatioSyncModel", res);
            this.atmodels = res;
        }));
    }
};
AssetLocatioSyncService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AssetLocatioSyncService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], AssetLocatioSyncService);



/***/ }),

/***/ "./src/app/shared/services/asset-types/asset-types.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/services/asset-types/asset-types.service.ts ***!
  \********************************************************************/
/*! exports provided: AssetTypesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetTypesService", function() { return AssetTypesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AssetTypesService = class AssetTypesService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/asset-types/";
        // Data
        this.atmodels = [];
    }
    post(body) {
        return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetTypesModel", res);
        }));
    }
    get() {
        return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetTypesModel", res);
            this.atmodels = res;
        }));
    }
    getOne(id) {
        let urlID = this.url + id + "/";
        return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetTypesModel", res);
            this.atmodel = res;
        }));
    }
    update(body) {
        return this.http.patch(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetTypesModel", res);
        }));
    }
    delete(id) {
        return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetTypesModel", res);
        }));
    }
    filter(field) {
        let urlFilter = this.url + "?" + field;
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetTypesModel", res);
        }));
    }
};
AssetTypesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AssetTypesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], AssetTypesService);



/***/ }),

/***/ "./src/app/shared/services/assets/assets.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/assets/assets.service.ts ***!
  \**********************************************************/
/*! exports provided: AssetsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsService", function() { return AssetsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AssetsService = class AssetsService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/assets/";
        // Data 
        this.amodels = [];
    }
    post(body) {
        return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetsModel", res);
        }));
    }
    get() {
        return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetsModel", res);
            this.amodels = res;
        }));
    }
    getOne(id) {
        let urlID = this.url + id + "/";
        return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetsModel", res);
            this.amodel = res;
        }));
    }
    // update(body: Form): Observable<AssetsModel> {
    //   return this.http.patch<AssetsModel>(this.url, body).pipe(
    //     tap((res) => {
    //       console.log("AssetsModel", res);
    //     })
    //   );
    // }
    update(id, body) {
        let urlTemp = this.url + id + '/';
        return this.http.patch(urlTemp, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetsModel", res);
        }));
    }
    delete(id) {
        return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetsModel", res);
        }));
    }
    filter(field) {
        let urlFilter = this.url + "?" + field;
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetsModel", res);
        }));
    }
    getOneExtended(id) {
        let urlID = this.url + id + "/extended/";
        return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetsModel", res);
            this.amodel = res;
        }));
    }
    patch_asset(body) {
        let urlPatchAsset = this.url + "patch_asset/";
        return this.http.post(urlPatchAsset, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetsModel", res);
        }));
    }
};
AssetsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AssetsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], AssetsService);



/***/ })

}]);
//# sourceMappingURL=default~asset-detail-asset-detail-module~pages-technical-asset-detail-asset-detail-module-es2015.js.map