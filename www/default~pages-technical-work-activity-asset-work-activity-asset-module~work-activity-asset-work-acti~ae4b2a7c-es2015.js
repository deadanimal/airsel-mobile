(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-technical-work-activity-asset-work-activity-asset-module~work-activity-asset-work-acti~ae4b2a7c"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/work-activity-asset/work-activity-asset.page.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/work-activity-asset/work-activity-asset.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"clickBack()\">\n        <ion-icon src=\"../../../../assets/icon/air-selangor-icon.svg\" style=\"font-size: 2rem\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title style=\"font-weight: bold\"> </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openNotification()\">\n        <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n        <ion-badge size=\"small\" color=\"danger\" style=\"position: absolute; right: -5px; top: 1px\">\n          {{ notificationService.totalnotificationbyuser }}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content-core\">\n  <div class=\"ion-padding\">\n    <h4 class=\"ion-text-center ion-padding\">Asset Details</h4>\n    <ion-list class=\"line-input\">\n      <form [formGroup]=\"workactivityassetFormGroup\">\n        <ion-item>\n          <ion-label position=\"stacked\">Asset ID:</ion-label>\n          <ion-input type=\"text\" readonly formControlName=\"asset_id\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Asset Type:</ion-label>\n          <ion-input type=\"text\" readonly formControlName=\"asset_type\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Badge Number:</ion-label>\n          <ion-input type=\"text\" readonly formControlName=\"badge_number\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Detailed Description:</ion-label>\n          <ion-textarea rows=\"5\" readonly formControlName=\"detailed_description\"></ion-textarea>\n        </ion-item>\n      </form>\n    </ion-list>\n\n    <ion-list>\n\n      <ion-card-header>Required Service History\n      </ion-card-header>\n      <ion-card-content>\n        <div *ngFor=\"let woacalal of workOrderActivityCompletionAssLocAssLisDataReq\">\n          <small>*\n            {{ woacalal }}</small>\n        </div>\n      </ion-card-content>\n    </ion-list>\n\n    <!-- <div *ngIf=\"workactivityassetFormGroup.value.badge_number\"> -->\n    <div>\n      <ion-item lines=\"none\">\n        <ion-label class=\"ion-text-start ion-no-padding\">Service History</ion-label>\n        <ion-button class=\"ion-text-end\" (click)=\"clickAddServiceHistory(workactivityasset)\">Add</ion-button>\n      </ion-item>\n\n      <!-- list of required -->\n      <div *ngFor=\"let woacalalReq of workOrdActComAssLocAssLisReq\">\n        <ion-card>\n          <ion-card-header>\n            <ion-fab horizontal=\"end\">\n              <!-- <ion-fab-button size=\"small\" color=\"primary\" (click)=\"clickEdit(workactivityasset)\">\n              <ion-icon name=\"create\"></ion-icon>\n            </ion-fab-button> -->\n              <!-- <ion-fab-button size=\"small\" color=\"danger\" (click)=\"clickRemove(i)\">\n              <ion-icon name=\"trash\"></ion-icon>\n            </ion-fab-button> -->\n              <!-- <ion-icon color=\"secondary\" name=\"close-circle\"></ion-icon> -->\n            </ion-fab>\n            <ion-card-title>Service History Type\n              <ion-icon color=\"success\" name=\"checkmark-circle\"></ion-icon>\n              <!-- <ion-icon color=\"secondary\" name=\"close-circle\"></ion-icon> -->\n            </ion-card-title>\n            <ion-card-subtitle>{{ woacalalReq.service_history_type }}</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </div>\n\n      <!-- list of optional data -->\n      <div *ngFor=\"let woacalalNot of worOrdActComAssLocAssLisNot\">\n        <ion-card> \n          <ion-card-header>\n            <ion-fab horizontal=\"end\">\n              <!-- <ion-fab-button size=\"small\" color=\"primary\" (click)=\"clickEdit(workactivityasset)\">\n              <ion-icon name=\"create\"></ion-icon>\n            </ion-fab-button> -->\n              <!-- <ion-fab-button size=\"small\" color=\"danger\" (click)=\"clickRemove(i)\">\n              <ion-icon name=\"trash\"></ion-icon>\n            </ion-fab-button> -->\n              <!-- <ion-icon color=\"secondary\" name=\"close-circle\"></ion-icon> -->\n            </ion-fab>\n            <ion-card-title>Service History Type\n              <!-- <ion-icon color=\"danger\" name=\"checkmark-circle\"></ion-icon> -->\n              <!-- <ion-icon color=\"secondary\" name=\"close-circle\"></ion-icon> -->\n            </ion-card-title>\n            <ion-card-subtitle>{{ woacalalNot.service_history_type }}</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </div>\n    </div>\n\n    <div class=\"ion-text-center ion-padding\">\n      <small>*Note: Fulfill all <b>REQUIRED</b> service history before submitting the work\n        activity.</small><br />\n      <ion-button color=\"light\" (click)=\"clickBack()\">Back</ion-button>\n      <ion-button *ngIf=\"workOrderActivityCompletionAssLocAssLisData != []\" color=\"primary\"\n        (click)=\"submit()\">Submit\n      </ion-button>\n      <ion-button *ngIf=\"workOrderActivityCompletionAssLocAssLisData == []\" color=\"secondary\"\n        disabled>Submit\n      </ion-button>\n      <!-- <ion-button *ngIf=\"workOrderActivityCompletionAssLocAssLis != []\" color=\"primary\" (click)=\"submit()\">Submit\n      </ion-button> -->\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/technical/work-activity-asset/work-activity-asset-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/technical/work-activity-asset/work-activity-asset-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: WorkActivityAssetPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkActivityAssetPageRoutingModule", function() { return WorkActivityAssetPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _work_activity_asset_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./work-activity-asset.page */ "./src/app/pages/technical/work-activity-asset/work-activity-asset.page.ts");




const routes = [
    {
        path: '',
        component: _work_activity_asset_page__WEBPACK_IMPORTED_MODULE_3__["WorkActivityAssetPage"]
    }
];
let WorkActivityAssetPageRoutingModule = class WorkActivityAssetPageRoutingModule {
};
WorkActivityAssetPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WorkActivityAssetPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/technical/work-activity-asset/work-activity-asset.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/technical/work-activity-asset/work-activity-asset.module.ts ***!
  \***********************************************************************************/
/*! exports provided: WorkActivityAssetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkActivityAssetPageModule", function() { return WorkActivityAssetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _work_activity_asset_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./work-activity-asset-routing.module */ "./src/app/pages/technical/work-activity-asset/work-activity-asset-routing.module.ts");
/* harmony import */ var _work_activity_asset_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./work-activity-asset.page */ "./src/app/pages/technical/work-activity-asset/work-activity-asset.page.ts");







let WorkActivityAssetPageModule = class WorkActivityAssetPageModule {
};
WorkActivityAssetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _work_activity_asset_routing_module__WEBPACK_IMPORTED_MODULE_5__["WorkActivityAssetPageRoutingModule"]
        ],
        declarations: [_work_activity_asset_page__WEBPACK_IMPORTED_MODULE_6__["WorkActivityAssetPage"]]
    })
], WorkActivityAssetPageModule);



/***/ }),

/***/ "./src/app/pages/technical/work-activity-asset/work-activity-asset.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/technical/work-activity-asset/work-activity-asset.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlY2huaWNhbC93b3JrLWFjdGl2aXR5LWFzc2V0L3dvcmstYWN0aXZpdHktYXNzZXQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/technical/work-activity-asset/work-activity-asset.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/technical/work-activity-asset/work-activity-asset.page.ts ***!
  \*********************************************************************************/
/*! exports provided: WorkActivityAssetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkActivityAssetPage", function() { return WorkActivityAssetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _service_history_service_history_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service-history/service-history.page */ "./src/app/pages/technical/service-history/service-history.page.ts");
/* harmony import */ var src_app_shared_services_asset_registrations_asset_registrations_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/asset-registrations/asset-registrations.service */ "./src/app/shared/services/asset-registrations/asset-registrations.service.ts");
/* harmony import */ var src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/notifications/notifications.service */ "./src/app/shared/services/notifications/notifications.service.ts");
/* harmony import */ var src_app_shared_services_work_activities_work_activities_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/work-activities/work-activities.service */ "./src/app/shared/services/work-activities/work-activities.service.ts");
/* harmony import */ var src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/assets/assets.service */ "./src/app/shared/services/assets/assets.service.ts");
/* harmony import */ var src_app_shared_services_service_history_question_service_history_question_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/service-history-question/service-history-question.service */ "./src/app/shared/services/service-history-question/service-history-question.service.ts");
/* harmony import */ var src_app_shared_services_work_order_activity_completion_AssLocAssList_work_order_activity_completion_AssLocAssList_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/work-order-activity-completion-AssLocAssList/work-order-activity-completion-AssLocAssList.service */ "./src/app/shared/services/work-order-activity-completion-AssLocAssList/work-order-activity-completion-AssLocAssList.service.ts");
/* harmony import */ var src_app_shared_services_asset_location_asset_list_service_histories_asset_location_asset_list_service_histories_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/asset-location-asset-list-service-histories/asset-location-asset-list-service-histories.service */ "./src/app/shared/services/asset-location-asset-list-service-histories/asset-location-asset-list-service-histories.service.ts");





// import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";





// import { AssetLocationAssLisSerHisService } from 'src/app/shared/services/asset-location-assLisSerHis/asset-location-assLisSerHis.service';



let WorkActivityAssetPage = class WorkActivityAssetPage {
    constructor(formBuilder, route, router, alertController, menu, modalController, notificationService, assetregistrationService, workactivityService, 
    // private barcodeScanner: BarcodeScanner
    assetsService, serviceHistoryQuestionService, workOrderActivityCompletionAssLocAssListService, assetLocationAssetListServiceHistoriesService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.alertController = alertController;
        this.menu = menu;
        this.modalController = modalController;
        this.notificationService = notificationService;
        this.assetregistrationService = assetregistrationService;
        this.workactivityService = workactivityService;
        this.assetsService = assetsService;
        this.serviceHistoryQuestionService = serviceHistoryQuestionService;
        this.workOrderActivityCompletionAssLocAssListService = workOrderActivityCompletionAssLocAssListService;
        this.assetLocationAssetListServiceHistoriesService = assetLocationAssetListServiceHistoriesService;
        // List
        this.servicehistories = [];
        this.workOrderActivityCompletionAssLocAssLisData = [];
        this.workOrderActivityCompletionAssLocAssLisDataAll = [];
        this.workOrderActivityCompletionAssLocAssLisDataReq = [];
        this.buttonStatusArr = [];
        this.workOrdActComAssLocAssLisReq = [];
        this.worOrdActComAssLocAssLisNot = [];
        this.serviceHistArr = [];
        this.workactivityassetFormGroup = this.formBuilder.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            bo_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            asset_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            asset_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            badge_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            serial_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            detailed_description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
        });
        this.route.queryParams.subscribe((params) => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.getAllData();
            }
        });
    }
    getAllData() {
        this.workactivityasset = this.router.getCurrentNavigation().extras.state.asset;
        console.log("this.workactivityasset = ", this.workactivityasset);
        this.workactivityassetFormGroup.patchValue({
            id: this.workactivityasset.id,
            bo_status: this.workactivityasset.bo_status,
            asset_id: this.workactivityasset.asset_id,
        });
        // console.log("workactivityasset == ", this.workactivityasset);
        // let servHist = this.workactivityasset.service_histories
        this.buttonStatusArr == [];
        // this.buttonStatus = ''
        this.worOrdActComAssLocAssLisNot = [];
        this.workOrdActComAssLocAssLisReq = [];
        let bstat = '';
        this.workOrderActivityCompletionAssLocAssLisData = [];
        this.workOrderActivityCompletionAssLocAssLisDataAll = [];
        this.workOrderActivityCompletionAssLocAssLisDataReq = [];
        this.workactivityasset.service_histories.forEach(element => {
            // this.buttonStatus : Boolean
            this.assetLocationAssetListServiceHistoriesService.getOne(element).subscribe((res) => {
                console.log("serviceHistoryQuestionService", res);
                this.workOrderActivityCompletionAssLocAssLisDataAll.push(res);
                console.log("res.service_history_type>>", res.service_history_type);
                console.log("res.svc_hist_type_req_fl>>", res.svc_hist_type_req_fl);
                // if (res.svc_hist_type_req_fl == "W1YS") {
                //   this.workOrderActivityCompletionAssLocAssLisDataReq.push(res.service_history_type)
                //   this.workOrdActComAssLocAssLisReq.push(res)
                //   console.log("----------<<<<<")
                // } else {
                //   console.log("---------->>>>>")
                //   this.worOrdActComAssLocAssLisNot.push(res)
                // }
                if (res.svc_hist_type_req_fl == 'W1YS') {
                    console.log("datares>>", this.workOrderActivityCompletionAssLocAssLisDataReq);
                    var duplicate = false;
                    var check_history = res.service_history_type.replace(/\-/g, '');
                    check_history = res.service_history_type.replace(/\s/g, '');
                    if (this.workOrderActivityCompletionAssLocAssLisDataReq.length == 0) {
                        this.workOrderActivityCompletionAssLocAssLisDataReq.push(res.service_history_type);
                        duplicate = true;
                    }
                    else {
                        this.workOrderActivityCompletionAssLocAssLisDataReq.forEach(element => {
                            var check_elemenent = element.replace(/\-/g, '');
                            check_elemenent = element.replace(/\s/g, '');
                            console.log("sktlg-DUPLICATE---", check_elemenent + "+++++" + check_history);
                            console.log("sktlg", element + "+++++" + res.service_history_type);
                            if (check_elemenent == check_history) {
                                duplicate = true;
                                console.log("sktlg-DUPLICATE!!!", element + "+++++" + res.service_history_type);
                            }
                        });
                    }
                    if (duplicate == false) {
                        this.workOrderActivityCompletionAssLocAssLisDataReq.push(res.service_history_type);
                    }
                    if (res.service_history_type == "FAILURE") {
                        console.log("yyyyyyyyyyy");
                        if (res.failure_type != '' && res.failure_repair != '' && res.failure_mode != '' && res.failure_component != '') {
                            this.workOrdActComAssLocAssLisReq.push(res);
                            console.log("workOrdActComAssLocAssLisReq", res);
                            bstat = 'yes';
                        }
                    }
                    else if (res.service_history_type == "DOWNTIME") {
                        if (res.start_date_time != '' && res.start_date_time != '' && res.end_date_time != '' && res.downtime_reason != '') {
                            this.workOrdActComAssLocAssLisReq.push(res);
                            console.log("workOrdActComAssLocAssLisReq", res);
                            bstat = 'yes';
                        }
                    }
                    else {
                        if (res.question.length > 0) {
                            this.workOrdActComAssLocAssLisReq.push(res);
                            console.log('res.question != []----<<<>>>', res.question.length);
                            bstat = 'yes';
                        }
                    }
                }
                else {
                    // if (res.service_history_type == "FAILURE") {
                    // if (res.failure_type != '' && res.failure_root_cause != '' && res.failure_repair != '' && res.failure_mode != '' && res.failure_component != '') {
                    this.worOrdActComAssLocAssLisNot.push(res);
                    // }
                    // } else if (res.service_history_type == "DOWNTIME") {
                    //   if (res.start_date_time != '' && res.start_date_time != '' && res.end_date_time != '' && res.downtime_reason != '' && res.comments != '') {
                    //     this.worOrdActComAssLocAssLisNot.push(res)
                    //   }
                    // } else {
                    //   if (res.question.length > 0) {
                    //     this.worOrdActComAssLocAssLisNot.push(res)
                    //   }
                    // }
                }
                if (res.service_history_type == "FAILURE") {
                    if (res.failure_type != '' && res.failure_mode != '' && res.failure_repair && res.failure_component != '' && res.comments != '') {
                        this.workOrderActivityCompletionAssLocAssLisData.push(res);
                        // bstat = 'yes'
                        this.serviceHistArr.push(res.service_history_type);
                    }
                }
                else if (res.service_history_type == "DOWNTIME") {
                    if (res.start_date_time != '' && res.start_date_time != '' && res.end_date_time != '' && res.downtime_reason != '' && res.comments != '') {
                        this.workOrderActivityCompletionAssLocAssLisData.push(res);
                        // bstat = 'yes'
                        this.serviceHistArr.push(res.service_history_type);
                    }
                }
                else {
                    if (res.question.length > 0) {
                        this.workOrderActivityCompletionAssLocAssLisData.push(res);
                        // bstat = 'yes'
                        this.serviceHistArr.push(res.service_history_type);
                    }
                }
                this.buttonStatusArr.push(bstat);
                console.log("this.buttonStatusArr = ", this.buttonStatusArr);
                if (this.buttonStatusArr.indexOf('no') == -1) {
                    this.buttonStatus = false;
                }
                else {
                    this.buttonStatus = true;
                }
            }, (err) => {
                console.log(err);
            });
        });
        setTimeout(() => {
            if (this.workOrdActComAssLocAssLisReq.length == this.workOrderActivityCompletionAssLocAssLisDataReq.length) {
                this.buttonDisable = false;
            }
            else {
                this.buttonDisable = true;
            }
            console.log("workOrderActivityCompletionAssLocAssLisDataReq", this.workOrderActivityCompletionAssLocAssLisDataReq);
        }, 1000);
        // if (this.router.getCurrentNavigation().extras.state.badge_no) {
        let badge_no = this.router.getCurrentNavigation().extras.state
            .badge_no;
        // console.log("badge_no = ", badge_no)
        // if (badge_no == this.workactivityasset.badge_number) {
        this.assetsService
            .filter("badge_no=" + badge_no)
            .subscribe((res) => {
            // console.log("res qweqwe", res)
            this.workactivityassetFormGroup.patchValue({
                asset_type: res[0].asset_type,
                badge_number: badge_no,
                // serial_number: res[0].serial_number,
                detailed_description: res[0].description,
            });
        }, (err) => {
            console.error("err", err);
        });
        // } else {
        //   this.alertErrorWorkActivityAsset(
        //     "Work Activity",
        //     "The QR code is not same with the asset. Please try again."
        //   );
        // }
        // }
    }
    getAllData2() {
        this.workOrderActivityCompletionAssLocAssLisData = [];
        this.workOrderActivityCompletionAssLocAssLisDataAll = [];
        this.workOrderActivityCompletionAssLocAssLisDataReq = [];
        let bstat = '';
        this.buttonStatusArr == [];
        // this.buttonStatus = ''
        let buttonArray = [];
        let buttonArrayReq = [];
        this.worOrdActComAssLocAssLisNot = [];
        this.workOrdActComAssLocAssLisReq = [];
        this.serviceHistArr = [];
        console.log("workactivityasset+++", this.workactivityasset);
        this.workOrderActivityCompletionAssLocAssListService.getOne(this.workactivityasset.id).subscribe((resWoacalal) => {
            console.log("resWoacalal ===", resWoacalal);
            resWoacalal.service_histories.forEach(element => {
                console.log("element++++++++", element);
                this.assetLocationAssetListServiceHistoriesService.getOne(element).subscribe((res) => {
                    console.log("serviceHistoryQuestionService", res);
                    this.workOrderActivityCompletionAssLocAssLisDataAll.push(res);
                    console.log("res.service_history_type>>", res.service_history_type);
                    console.log("res.svc_hist_type_req_fl>>", res.svc_hist_type_req_fl);
                    // if (res.svc_hist_type_req_fl == "W1YS") {
                    //   this.workOrderActivityCompletionAssLocAssLisDataReq.push(res.service_history_type)
                    //   this.workOrdActComAssLocAssLisReq.push(res)
                    //   console.log("----------<<<<<")
                    // } else {
                    //   console.log("---------->>>>>")
                    //   this.worOrdActComAssLocAssLisNot.push(res)
                    // }
                    if (res.svc_hist_type_req_fl == 'W1YS') {
                        var duplicate = false;
                        var check_history = res.service_history_type.replace(/\-/g, '');
                        check_history = res.service_history_type.replace(/\s/g, '');
                        if (this.workOrderActivityCompletionAssLocAssLisDataReq.length == 0) {
                            this.workOrderActivityCompletionAssLocAssLisDataReq.push(res.service_history_type);
                            duplicate = true;
                        }
                        else {
                            this.workOrderActivityCompletionAssLocAssLisDataReq.forEach(element => {
                                var check_elemenent = element.replace(/\-/g, '');
                                check_elemenent = element.replace(/\s/g, '');
                                console.log("sktlg-DUPLICATE---", check_elemenent + "+++++" + check_history);
                                console.log("sktlg", element + "+++++" + res.service_history_type);
                                if (check_elemenent == check_history) {
                                    duplicate = true;
                                    console.log("sktlg-DUPLICATE!!!", element + "+++++" + res.service_history_type);
                                }
                            });
                        }
                        if (duplicate == false) {
                            this.workOrderActivityCompletionAssLocAssLisDataReq.push(res.service_history_type);
                        }
                        if (res.service_history_type == "FAILURE") {
                            if (res.failure_type != '' && res.failure_repair != '' && res.failure_mode != '' && res.failure_component != '') {
                                this.workOrdActComAssLocAssLisReq.push(res);
                                bstat = 'yes';
                                this.buttonStatusArr.push(bstat);
                            }
                        }
                        else if (res.service_history_type == "DOWNTIME") {
                            if (res.start_date_time != '' && res.start_date_time != '' && res.end_date_time != '' && res.downtime_reason != '' && res.comments != '') {
                                this.workOrdActComAssLocAssLisReq.push(res);
                                bstat = 'yes';
                                this.buttonStatusArr.push(bstat);
                            }
                        }
                        else {
                            if (res.question.length > 0) {
                                this.workOrdActComAssLocAssLisReq.push(res);
                                bstat = 'yes';
                                this.buttonStatusArr.push(bstat);
                            }
                        }
                    }
                    else {
                        // if (res.service_history_type == "FAILURE") {
                        //   if (res.failure_type != '' && res.failure_root_cause != '' && res.failure_repair != '' && res.failure_mode != '' && res.failure_component != '') {
                        this.worOrdActComAssLocAssLisNot.push(res);
                        //   }
                        // } else if (res.service_history_type == "DOWNTIME") {
                        //   if (res.start_date_time != '' && res.start_date_time != '' && res.end_date_time != '' && res.downtime_reason != '' && res.comments != '') {
                        //     this.worOrdActComAssLocAssLisNot.push(res)
                        //   }
                        // } else {
                        //   if (res.question.length > 0) {
                        //     this.worOrdActComAssLocAssLisNot.push(res)
                        //   }
                        // }
                    }
                    if (res.service_history_type == "FAILURE") {
                        if (res.failure_type != '' && res.failure_root_cause != '' && res.failure_repair != '' && res.failure_mode != '' && res.failure_component != '') {
                            this.workOrderActivityCompletionAssLocAssLisData.push(res);
                            // bstat = 'yes'
                            this.serviceHistArr.push(res.service_history_type);
                        }
                    }
                    else if (res.service_history_type == "DOWNTIME") {
                        if (res.start_date_time != '' && res.start_date_time != '' && res.end_date_time != '' && res.downtime_reason != '' && res.comments != '') {
                            this.workOrderActivityCompletionAssLocAssLisData.push(res);
                            // bstat = 'yes'
                            this.serviceHistArr.push(res.service_history_type);
                        }
                    }
                    else {
                        if (res.question.length > 0) {
                            this.workOrderActivityCompletionAssLocAssLisData.push(res);
                            // bstat = 'yes'
                            this.serviceHistArr.push(res.service_history_type);
                        }
                    }
                    console.log("this.buttonStatusArr.length = ", this.buttonStatusArr.length);
                    // console.log("this.workOrderActivityCompletionAssLocAssLisDataReq.length = ", this.workOrderActivityCompletionAssLocAssLisDataReq.length)
                    // console.log("workOrderActivityCompletionAssLocAssLisDataReq = ", this.workOrderActivityCompletionAssLocAssLisDataReq)
                    // var workOrderActivityCompletionAssLocAssLisDataReqtrue = new Set(this.workOrderActivityCompletionAssLocAssLisDataReq);
                    // console.log("workOrderActivityCompletionAssLocAssLisDataReqtrue", workOrderActivityCompletionAssLocAssLisDataReqtrue)
                    if (this.workOrderActivityCompletionAssLocAssLisDataReq.length == this.buttonStatusArr.length) {
                        this.buttonStatus = true;
                    }
                    else {
                        this.buttonStatus = false;
                    }
                    // if (this.buttonStatusArr.indexOf('yes') == -1) {
                    //   this.buttonStatus = false
                    // } else {
                    //   this.buttonStatus = true
                    // }
                }, (err) => {
                    console.log(err);
                });
            });
            setTimeout(() => {
                if (this.workOrdActComAssLocAssLisReq.length == this.workOrderActivityCompletionAssLocAssLisDataReq.length) {
                    this.buttonDisable = false;
                }
                else {
                    this.buttonDisable = true;
                }
                console.log("workOrdActComAssLocAssLisReq", this.workOrdActComAssLocAssLisReq);
            }, 1000);
            setTimeout(() => {
                let check = [];
                let stat = '';
                buttonArrayReq.forEach(elemButt => {
                    if (buttonArray.indexOf(elemButt) == -1) {
                        check.push('yes');
                    }
                    else {
                        check.push('no');
                    }
                });
                console.log("check", check);
                if (check.indexOf('no') == -1) {
                    console.log('no');
                    this.buttonStatus = false;
                }
                else {
                    console.log('yes');
                    this.buttonStatus = true;
                }
            }, 1000);
        }, () => {
        });
    }
    // getWorkOrderActivityComp(){
    //   workactivityasset
    // }
    ngOnInit() {
        this.menu.enable(false, "menuNotification");
    }
    presentAlert(header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
                buttons: ["OK"],
            });
            yield alert.present();
        });
    }
    homePage(path) {
        this.router.navigate([path]);
    }
    openNotification() {
        this.menu.enable(true, "menuNotification");
        this.menu.open("menuNotification");
    }
    submit() {
        console.log("this.workactivityasset = ", this.workactivityasset);
        console.log("this.workOrderActivityCompletionAssLocAssLisData = ", this.workOrderActivityCompletionAssLocAssLisData);
        console.log("this.workOrderActivityCompletionAssLocAssLisDataAll = ", this.workOrderActivityCompletionAssLocAssLisDataAll);
        let woacassLocAssLisFormData = {
            modified_date: this.getCurrentDateTime(),
            reading_datetime: this.getCurrentDateTime()
        };
        let check = [];
        this.workOrderActivityCompletionAssLocAssLisDataAll.forEach(element => {
            console.log("element-----", element);
            // if (element.svc_hist_type_req_fl == 'W1YS') {
            //   check.push(element)
            // }
            if (element.svc_hist_type_req_fl == 'W1YS') {
                console.log("elementW1YS-----", element);
                // if (element.service_history_type == "FAILURE") {
                //   console.log("sini fail")
                //   if (element.failure_type != '' && element.failure_root_cause != '' && element.failure_repair != '' && element.failure_mode != '' && element.failure_component != '') {
                //     check.push(element.service_history_type)
                //     console.log('FAILURE')
                //   }
                // } else if (element.service_history_type == "DOWNTIME") {
                //   console.log("sini down")
                //   if (element.start_date_time != '' && element.start_date_time != '' && element.end_date_time != '' && element.downtime_reason != '' && element.comments != '') {
                //     check.push(element.service_history_type)
                //     console.log('DOWNTIME')
                //   }
                // } else {
                //   console.log("sini else")
                //   if (element.service_history_type != []) {
                //     check.push(element.service_history_type)
                //     console.log('else')
                //   }
                // }
                var duplicate = false;
                if (element.service_history_type != '') {
                    if (check.length == 0) {
                        check.push(element.service_history_type);
                        duplicate = true;
                    }
                    else {
                        check.forEach(check => {
                            console.log("1t", check);
                            console.log("2t", element.service_history_type);
                            if (check == element.service_history_type) {
                                duplicate = true;
                            }
                        });
                    }
                    if (duplicate == false) {
                        check.push(element.service_history_type);
                    }
                }
                else {
                    console.log(element);
                }
            }
        });
        console.log("check==", check);
        console.log("workOrderActivityCompletionAssLocAssLisDataReq==", this.workOrderActivityCompletionAssLocAssLisDataReq.length);
        console.log("check==", check.length);
        console.log("modified_date", woacassLocAssLisFormData);
        if (check.length == this.workOrdActComAssLocAssLisReq.length) {
            this.workOrderActivityCompletionAssLocAssListService
                .update(this.workactivityasset.id, woacassLocAssLisFormData)
                .subscribe((res) => {
                console.log("workOrderActivityCompletionAssLocAssListService res", res);
                this.alertWorkActivityAsset("Work Activity", "Your service history has been successfully updated into the system.");
            }, (err) => {
                console.error("err", err);
            });
        }
        else {
            this.alertWarning('Warning', 'Please answer all required service history');
        }
    }
    alertWorkActivityAsset(header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
                buttons: [
                    {
                        text: "OK",
                        handler: () => {
                            this.router.navigate(["/technical/work-activity"]);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    alertErrorWorkActivityAsset(header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
                buttons: [
                    {
                        text: "OK",
                        handler: () => { },
                    },
                ],
            });
            yield alert.present();
        });
    }
    clickBack() {
        this.router.navigate(["/technical/work-activity"]);
    }
    clickAddServiceHistory(servicehistory) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let obj = {
                servicehistory: servicehistory,
                servHistArr: this.serviceHistArr
            };
            const modal = yield this.modalController.create({
                component: _service_history_service_history_page__WEBPACK_IMPORTED_MODULE_5__["ServiceHistoryPage"],
                componentProps: { servicehistory: servicehistory, servHistArr: this.serviceHistArr },
            });
            modal.onDidDismiss().then((data) => {
                this.getAllData2();
                // if (data) this.servicehistories.push(data.data);
                // console.log("this.servicehistories = ", this.servicehistories)
                // this.workactivityService.getOne(this.workactivityasset.id).subscribe(
                //   (res) => {
                //     console.log("res", res);
                //     this.workactivityasset = res;
                //     this.workactivityassetFormGroup.patchValue({
                //       ...res,
                //     });
                //   },
                //   (err) => {
                //     console.error("err", err);
                //   }
                // );
            });
            return yield modal.present();
        });
    }
    clickEdit(servicehistory) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _service_history_service_history_page__WEBPACK_IMPORTED_MODULE_5__["ServiceHistoryPage"],
                componentProps: { servicehistory: servicehistory },
            });
            modal.onDidDismiss().then((data) => { });
            return yield modal.present();
        });
    }
    clickRemove(index) {
        this.servicehistories.splice(index, 1);
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
    alertWarning(header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
                buttons: ['ok'],
            });
            yield alert.present();
        });
    }
};
WorkActivityAssetPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_7__["NotificationsService"] },
    { type: src_app_shared_services_asset_registrations_asset_registrations_service__WEBPACK_IMPORTED_MODULE_6__["AssetRegistrationsService"] },
    { type: src_app_shared_services_work_activities_work_activities_service__WEBPACK_IMPORTED_MODULE_8__["WorkActivitiesService"] },
    { type: src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_9__["AssetsService"] },
    { type: src_app_shared_services_service_history_question_service_history_question_service__WEBPACK_IMPORTED_MODULE_10__["ServiceHistoryQuestionService"] },
    { type: src_app_shared_services_work_order_activity_completion_AssLocAssList_work_order_activity_completion_AssLocAssList_service__WEBPACK_IMPORTED_MODULE_11__["WorkOrderActivityCompletionAssLocAssListService"] },
    { type: src_app_shared_services_asset_location_asset_list_service_histories_asset_location_asset_list_service_histories_service__WEBPACK_IMPORTED_MODULE_12__["AssetLocationAssetListServiceHistoriesService"] }
];
WorkActivityAssetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-work-activity-asset",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./work-activity-asset.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/work-activity-asset/work-activity-asset.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./work-activity-asset.page.scss */ "./src/app/pages/technical/work-activity-asset/work-activity-asset.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_7__["NotificationsService"],
        src_app_shared_services_asset_registrations_asset_registrations_service__WEBPACK_IMPORTED_MODULE_6__["AssetRegistrationsService"],
        src_app_shared_services_work_activities_work_activities_service__WEBPACK_IMPORTED_MODULE_8__["WorkActivitiesService"],
        src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_9__["AssetsService"],
        src_app_shared_services_service_history_question_service_history_question_service__WEBPACK_IMPORTED_MODULE_10__["ServiceHistoryQuestionService"],
        src_app_shared_services_work_order_activity_completion_AssLocAssList_work_order_activity_completion_AssLocAssList_service__WEBPACK_IMPORTED_MODULE_11__["WorkOrderActivityCompletionAssLocAssListService"],
        src_app_shared_services_asset_location_asset_list_service_histories_asset_location_asset_list_service_histories_service__WEBPACK_IMPORTED_MODULE_12__["AssetLocationAssetListServiceHistoriesService"]])
], WorkActivityAssetPage);



/***/ })

}]);
//# sourceMappingURL=default~pages-technical-work-activity-asset-work-activity-asset-module~work-activity-asset-work-acti~ae4b2a7c-es2015.js.map