(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-technical-service-history-service-history-module~pages-technical-technical-module~page~69be26f5"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/service-history/service-history.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/service-history/service-history.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"clickBack()\">\n        <ion-icon src=\"../../../../assets/icon/air-selangor-icon.svg\" style=\"font-size: 2rem\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title style=\"font-weight: bold\"> </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openNotification()\">\n        <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n        <ion-badge size=\"small\" color=\"danger\" style=\"position: absolute; right: -5px; top: 1px\">\n          {{ notificationService.totalnotificationbyuser }}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content-core\">\n  <div class=\"ion-padding\">\n    <h4 class=\"ion-text-center ion-padding\">Service History</h4>\n    <ion-list class=\"line-input\">\n      <form [formGroup]=\"servicehistoryFormGroup\">\n        <ion-item>\n          <ion-label position=\"stacked\">Service History Type</ion-label>\n          <ion-select (ionChange)=\"onChangeServiceHistory($event.target.value)\">\n            <ion-select-option *ngFor=\"let serHis of ServiceHistoryList\" [value]=\"serHis.id\">\n              {{serHis.service_hist_desc}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <div *ngIf=\"questionAndAnswerDiv == '1'\">\n          <!-- <div> -->\n          <ion-item *ngFor=\"let qna of questionAndAnswerData\">\n            <ion-label position=\"stacked\">{{qna.question.question_desc}}</ion-label>\n            <ion-select (ionChange)=\"safeDataToArray($event.target.value,qna)\" required>\n              <ion-select-option>Please Select</ion-select-option>\n              <ion-select-option *ngFor=\"let ans of qna.answer\" [value]=\"ans.answer_cd\">{{ans.answer_text}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n\n        <div *ngIf=\"questionAndAnswerDowntimeDiv == '1'\">\n          <ion-item>\n            <ion-label position=\"stacked\">Start Date Time</ion-label>\n            <ion-datetime displayFormat=\"YYYY-MM-DD HH:mm:ss\" pickerFormat=\"YYYY-MM-DD HH:mm:ss\"\n              (ionChange)=\"saveFailureDontimeArray($event.target.value,'start')\"></ion-datetime>\n            <!-- <ion-input type=\"datetime-local\" (click)=\"saveFailureDontimeArray($event.target.value,'start')\" required> -->\n            <!-- </ion-input> -->\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"stacked\">End Date Time</ion-label>\n            <ion-datetime displayFormat=\"YYYY-MM-DD HH:mm:ss\" pickerFormat=\"YYYY-MM-DD HH:mm:ss\"\n              (ionChange)=\"saveFailureDontimeArray($event.target.value,'end')\"></ion-datetime>\n            <!-- <ion-input type=\"datetime-local\" (click)=\"saveFailureDontimeArray($event.target.value,'end')\" required> -->\n            <!-- </ion-input> -->\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"stacked\">Downtime Reason</ion-label>\n            <ion-select (ionChange)=\"saveFailureDontimeArray($event.target.value,'reason')\" required>\n              <ion-select-option value=\"PL\">Planned</ion-select-option>\n              <ion-select-option value=\"NPL\">Not Planned\n              </ion-select-option>\n            </ion-select>\n            <!-- <ion-input type=\"text\" (ionChange)=\"saveFailureDontimeArray($event.target.value,'reason')\" required>\n            </ion-input> -->\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"stacked\">Comment</ion-label>\n            <ion-input type=\"text\" (keyup)=\"saveFailureDontimeArray($event.target.value,'comment')\" required>\n            </ion-input>\n          </ion-item>\n        </div>\n\n        <div *ngIf=\"questionAndAnswerFailureDiv == '1'\">\n          <ion-item>\n            <ion-label position=\"stacked\">Failure Cause</ion-label>\n            <ion-select (ionChange)=\"saveFailureDontimeArray($event.target.value,'type')\" required>\n              <ion-select-option>Please Select</ion-select-option>\n              <ion-select-option *ngFor=\"let ansType of failureTypeData\" [value]=\"ansType.failure_type\">\n                {{ansType.failure_type}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"stacked\">Failure Mode</ion-label>\n            <ion-select (ionChange)=\"saveFailureDontimeArray($event.target.value,'mode')\" required>\n              <ion-select-option>Please Select</ion-select-option>\n              <ion-select-option *ngFor=\"let ansMode of failureModeData\" [value]=\"ansMode.failure_mode\">\n                {{ansMode.failure_mode}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"stacked\">Failure Repair</ion-label>\n            <ion-select (ionChange)=\"saveFailureDontimeArray($event.target.value,'repair')\" required>\n              <ion-select-option>Please Select</ion-select-option>\n              <ion-select-option *ngFor=\"let ansRepair of failureRepairData\" [value]=\"ansRepair.failure_repair\">\n                {{ansRepair.failure_repair}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"stacked\">Failure Component</ion-label>\n            <ion-select (ionChange)=\"saveFailureDontimeArray($event.target.value,'component')\" required>\n              <ion-select-option>Please Select</ion-select-option>\n              <ion-select-option *ngFor=\"let ansComp of failureComponentData\" [value]=\"ansComp.failure_comp\">\n                {{ansComp.failure_comp}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"stacked\">Remark</ion-label>\n            <ion-input type=\"text\" (keyup)=\"saveFailureDontimeArray($event.target.value,'remark')\" required>\n            </ion-input>\n          </ion-item>\n\n        </div>\n\n      </form>\n    </ion-list>\n\n    <div class=\"ion-text-center\">\n      <ion-button color=\"light\" (click)=\"clickBack()\">Cancel</ion-button>\n      <ion-button color=\"primary\" (click)=\"presentAlertConfirm()\">Save</ion-button>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/technical/service-history/service-history.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/technical/service-history/service-history.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlY2huaWNhbC9zZXJ2aWNlLWhpc3Rvcnkvc2VydmljZS1oaXN0b3J5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/technical/service-history/service-history.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/technical/service-history/service-history.page.ts ***!
  \*************************************************************************/
/*! exports provided: ServiceHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceHistoryPage", function() { return ServiceHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/notifications/notifications.service */ "./src/app/shared/services/notifications/notifications.service.ts");
/* harmony import */ var src_app_shared_services_work_activities_work_activities_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/work-activities/work-activities.service */ "./src/app/shared/services/work-activities/work-activities.service.ts");
/* harmony import */ var src_app_shared_services_asset_types_asset_types_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/asset-types/asset-types.service */ "./src/app/shared/services/asset-types/asset-types.service.ts");
/* harmony import */ var src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/assets/assets.service */ "./src/app/shared/services/assets/assets.service.ts");
/* harmony import */ var src_app_shared_services_asset_service_history_asset_service_history_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/asset-service-history/asset-service-history.service */ "./src/app/shared/services/asset-service-history/asset-service-history.service.ts");
/* harmony import */ var src_app_shared_services_service_history_service_history_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/service-history/service-history.service */ "./src/app/shared/services/service-history/service-history.service.ts");
/* harmony import */ var src_app_shared_services_service_histories_question_service_histories_question_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/service-histories-question/service-histories-question.service */ "./src/app/shared/services/service-histories-question/service-histories-question.service.ts");
/* harmony import */ var src_app_shared_services_service_history_question_service_history_question_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/service-history-question/service-history-question.service */ "./src/app/shared/services/service-history-question/service-history-question.service.ts");
/* harmony import */ var src_app_shared_services_questions_value_valid_questions_value_valid_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/questions-value-valid/questions-value-valid.service */ "./src/app/shared/services/questions-value-valid/questions-value-valid.service.ts");
/* harmony import */ var src_app_shared_services_asset_location_asset_list_service_histories_asset_location_asset_list_service_histories_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/services/asset-location-asset-list-service-histories/asset-location-asset-list-service-histories.service */ "./src/app/shared/services/asset-location-asset-list-service-histories/asset-location-asset-list-service-histories.service.ts");
/* harmony import */ var src_app_shared_services_work_order_activity_completion_AssLocAssList_work_order_activity_completion_AssLocAssList_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/services/work-order-activity-completion-AssLocAssList/work-order-activity-completion-AssLocAssList.service */ "./src/app/shared/services/work-order-activity-completion-AssLocAssList/work-order-activity-completion-AssLocAssList.service.ts");
/* harmony import */ var src_app_shared_services_failure_profile_failure_profile_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/services/failure-profile/failure-profile.service */ "./src/app/shared/services/failure-profile/failure-profile.service.ts");

















let ServiceHistoryPage = class ServiceHistoryPage {
    // serHisQueFormData: FormGroup;
    constructor(formBuilder, alertController, menu, modalController, navParams, router, notificationService, workactivityService, assetTypesService, assetsService, assetServiceHistoryService, serviceHistoryService, serviceHistoryQuestionService, questionValidValueService, serviceHistoriesQuestionService, assetLocationAssetListServiceHistoriesService, workOrderActivityCompletionAssLocAssListService, failureProfileModelService) {
        // console.log("servicehistory == ", this.navParams.get("servicehistory"));
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.menu = menu;
        this.modalController = modalController;
        this.navParams = navParams;
        this.router = router;
        this.notificationService = notificationService;
        this.workactivityService = workactivityService;
        this.assetTypesService = assetTypesService;
        this.assetsService = assetsService;
        this.assetServiceHistoryService = assetServiceHistoryService;
        this.serviceHistoryService = serviceHistoryService;
        this.serviceHistoryQuestionService = serviceHistoryQuestionService;
        this.questionValidValueService = questionValidValueService;
        this.serviceHistoriesQuestionService = serviceHistoriesQuestionService;
        this.assetLocationAssetListServiceHistoriesService = assetLocationAssetListServiceHistoriesService;
        this.workOrderActivityCompletionAssLocAssListService = workOrderActivityCompletionAssLocAssListService;
        this.failureProfileModelService = failureProfileModelService;
        // dropdown data
        this.ServiceHistoryList = [];
        this.ServiceHistoryListAll = [];
        // question and answer data
        this.questionAndAnswerData = [];
        this.questionAndAnswerDiv = '0';
        this.questionAndAnswerFailureDiv = '0';
        this.questionAndAnswerDowntimeDiv = '0';
        this.qnaPostData = [];
        this.workOrderActComAssLocAssLis = [];
        this.AssLocAssLisArrId = [];
        this.assetTypeData = [];
        this.updateformData = [];
        this.servHistArr = [];
        this.serviceHistoryArray = [];
        this.listOfAllrequired = [];
        this.failureTypeData = [];
        this.failureModeData = [];
        this.failureRepairData = [];
        this.failureComponentData = [];
        this.selectedAssetType = '';
        this.selectedServiceHistory = '';
        this.selectedServiceHistoryType = '';
        this.failure_type = '';
        this.failure_mode = '';
        this.failure_component = '';
        this.failure_repair = '';
        this.failure_remark = '';
        this.downtime_start = '';
        this.downtime_end = '';
        this.downtime_reason = '';
        this.downtime_comment = '';
        this.servHist = this.navParams.get("servicehistory");
        this.servHistArr = this.navParams.get("servHistArr");
        console.log("this.servHist servHistArr = ", this.servHistArr);
        console.log("this.servHist servHist = ", this.servHist);
        this.getWorkOrderActComAssLocAssLis(this.servHist);
        this.assetsService
            .filter("asset_id=" + this.servHist.asset_id)
            .subscribe((assServres) => {
            console.log("assetsService res", assServres);
            // console.log("assetsService res", res[0]['asset_type'])
            // console.log("assetsService res", res[0].asset_type)
            this.assetTypesService
                .filter("asset_type_code=" + assServres[0]['asset_type'])
                .subscribe((assTypeServres) => {
                console.log("assetTypesService res", assTypeServres);
                this.assetTypeData.push(assTypeServres[0]);
                let asset_service_history_id = assTypeServres[0]['asset_service_history'];
                // looping Asset Service history id
                asset_service_history_id.forEach((assSerHisId) => {
                    // console.log("assSerHisId = ", assSerHisId)
                    // get asset service history
                    this.assetServiceHistoryService.getOne(assSerHisId)
                        .subscribe((assServHistres) => {
                        // console.log("assetServiceHistoryService res =", assServHistres)
                        console.log("assServHistres asset_service_history =", assServHistres.asset_service_history);
                        if (this.servHistArr.indexOf(assServHistres.asset_service_history) == -1) {
                            // get service history data
                            this.serviceHistoryService.filter('service_hist_type=' + assServHistres['asset_service_history'])
                                .subscribe((ServHistres) => {
                                console.log("serviceHistoryService res =", ServHistres);
                                // if (res['service_history_type'] == 'Failure') {
                                //   if (res.failure_type == '' && res.failure_mode == '' && res.failure_repair == '' && res.failure_component == '' && res.comments == '') {
                                //     this.serviceHistoryArray.push(res.service_history_type)
                                //   }
                                // } else if (res['service_history_type'] == 'Downtime') {
                                //   if (res.start_date_time == '' && res.end_date_time == '' && res.downtime_reason == '' && res.comments == '') {
                                //     this.serviceHistoryArray.push(res.service_history_type)
                                //   }
                                // } else {
                                //   if (res.question.length) {
                                //     this.serviceHistoryArray.push(res.service_history_type)
                                //   }
                                // }
                                // console.log("ServHistres =", assServHistres[0]['service_hist_desc']);
                                this.ServiceHistoryListAll.push(ServHistres[0]);
                                // this.ServiceHistoryList.push(ServHistres[0])
                            }, (err) => {
                                console.error("err", err);
                            });
                        }
                    }, (err) => {
                        console.error("err", err);
                    });
                });
                setTimeout(() => {
                    console.log("ServiceHistoryListAll >>== ", this.ServiceHistoryListAll);
                    console.log("serviceHistoryArray >>== ", this.serviceHistoryArray);
                    this.ServiceHistoryListAll.forEach(eleSerHis => {
                        console.log("eleSerHis.service_hist_type ==", eleSerHis);
                        if (this.serviceHistoryArray.indexOf(eleSerHis.service_hist_desc) == -1) {
                            this.ServiceHistoryList.push(eleSerHis);
                            console.log("iferHis = ", eleSerHis);
                        }
                        else {
                            console.log("else SerHis = ", eleSerHis);
                        }
                    });
                }, 2000);
            }, (err) => {
                console.error("err", err);
            });
        }, (err) => {
            console.error("err", err);
        });
    }
    getWorkOrderActComAssLocAssLis(workoacalal) {
        // console.log("workoacalalqwewqe", workoacalal)
        this.workOrderActivityCompletionAssLocAssListService
            .getOne(workoacalal.id)
            .subscribe((woacalalres) => {
            console.log("woacalalres === ", woacalalres);
            this.workOrderActComAssLocAssLis = woacalalres;
            woacalalres.service_histories.forEach(element => {
                this.assetLocationAssetListServiceHistoriesService.getOne(element).subscribe((res) => {
                    console.log("assetLocationAssetListServiceHistoriesService===", res);
                    this.listOfAllrequired.push(res);
                    // console.log("assetLocationAssetListServiceHistoriesService===", res['service_history_type'])
                    if (res['service_history_type'] == 'Failure') {
                        if (res.failure_type == '' && res.failure_mode == '' && res.failure_repair == '' && res.failure_component == '' && res.comments == '') {
                            this.serviceHistoryArray.push(res.service_history_type);
                        }
                    }
                    else if (res['service_history_type'] == 'Downtime') {
                        if (res.start_date_time == '' && res.end_date_time == '' && res.downtime_reason == '' && res.comments == '') {
                            this.serviceHistoryArray.push(res.service_history_type);
                        }
                    }
                    else {
                        if (res.question.length > 0) {
                            this.serviceHistoryArray.push(res.service_history_type);
                        }
                    }
                    console.log(this.serviceHistoryArray);
                }, (err) => {
                });
            });
            // console.log("woacalalres.service_histories =", woacalalres.service_histories)
        }, (woacalalerr) => {
            console.log("woacalalerr === ", woacalalerr);
        });
    }
    ngOnInit() { }
    homePage(path) {
        this.router.navigate([path]);
    }
    openNotification() {
        this.menu.enable(true, "menuNotification");
        this.menu.open("menuNotification");
    }
    clickBack() {
        this.modalController.dismiss();
        // await this.modalController.dismiss(onClosedData);
    }
    alertServiceHistory(header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
                buttons: [
                    {
                        text: "OK",
                        handler: () => {
                            this.modalController.dismiss();
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    onChangeServiceHistory(event) {
        this.updateformData = [];
        console.log("event = ", event);
        console.log("this.assetTypeData = ", this.assetTypeData);
        let jsonSerHisId = {
            service_history_id: event
        };
        let assetType = [];
        this.ServiceHistoryList.forEach(element => {
            if (event == element.id) {
                console.log("ServiceHistoryList = ", element);
                assetType = element;
            }
        });
        // console.log("assetType = ", assetType)
        // console.log("assetType = ", assetType['service_hist_desc'])
        this.selectedServiceHistory = assetType['service_hist_desc'];
        this.selectedAssetType = assetType['category'];
        this.selectedServiceHistoryType = assetType['service_hist_type'];
        console.log(this.selectedAssetType, "---", this.selectedServiceHistory);
        this.questionAndAnswerData = [];
        if (assetType['category'] == "Failure") {
            this.questionAndAnswerDowntimeDiv = '0';
            this.questionAndAnswerFailureDiv = '1';
            this.questionAndAnswerDiv = '0';
            // console.log("FAILURE")
            this.failureProfileModelService.filter("failure_profile=" + this.assetTypeData[0]['profile_failure']).subscribe((res) => {
                res.forEach(element => {
                    if (element.failure_comp != '') {
                        this.failureComponentData.push(element);
                    }
                    else if (element.failure_repair != '') {
                        this.failureRepairData.push(element);
                    }
                    else if (element.failure_mode != '') {
                        this.failureModeData.push(element);
                    }
                    else if (element.failure_type != '') {
                        this.failureTypeData.push(element);
                        console.log("this.failureTypeData =", this.failureTypeData);
                    }
                });
                console.log("failureProfileModelService = ", res);
            }, (err) => {
                console.log("err = ", err);
            });
        }
        else if (assetType['category'] == "Downtime") {
            this.questionAndAnswerFailureDiv = '0';
            this.questionAndAnswerDowntimeDiv = '1';
            this.questionAndAnswerDiv = '0';
            console.log("DOWNTIME");
        }
        else {
            this.questionAndAnswerDiv = '1';
            this.questionAndAnswerDowntimeDiv = '0';
            this.questionAndAnswerFailureDiv = '0';
            // get list of question
            this.serviceHistoryQuestionService.getQna(jsonSerHisId).subscribe((serHisQueRes) => {
                console.log("res = ", serHisQueRes);
                // this.questionAndAnswerData.push(serHisQueRes)
                console.log("this.questionAndAnswerData", this.questionAndAnswerData);
                serHisQueRes.forEach(element => {
                    this.questionAndAnswerData.push(element);
                    // console.log("element res = ", element)
                    // console.log("element res = ", element['question'])
                    // console.log("element res = ", element['question']['question_desc'])
                });
            }, (err) => {
                console.error("err", err);
            });
        }
    }
    // safeDataToArray(value, row) {
    //   console.log(value)
    //   console.log(row)
    //   // updateformData2: any = []
    //   let formData = new FormData();
    //   this.updateformData['question_id'] = row.id
    //   this.updateformData['question_cd'] = row.question_cd
    //   this.updateformData['question_desc'] = row.question_desc
    //   this.updateformData['question_seq'] = row.question_seq
    //   this.updateformData['answer_id'] = value
    //   console.log("updateformData =", this.updateformData)
    //   let row_id = row.id
    //   formData[row_id] = this.updateformData
    //   // this.updateformData[row_id] = formData
    //   // this.updateformData2.push(this.updateformData)
    //   console.log("this.updateformData2 =", formData)
    //   // // let priceListMap: any = []
    //   // let priceListMap: { [id: string]: any; } = {};
    //   // priceListMap.push({ 'question_id': row.id },
    //   //   { 'question_cd': row.question_cd },
    //   //   { 'question_desc': row.question_desc },
    //   //   { 'question_seq': row.question_seq },
    //   //   { 'answer_id': value })
    //   // // priceListMap.set(1, updateformData);
    //   // console.log("priceListMap", priceListMap)
    //   // updateformData = null;
    // }
    safeDataToArray(value, row) {
        console.log("row", row);
        console.log("value", value);
        let obj = {
            // ...row,
            question_id: row.question.id,
            question_cd: row.question.question_cd,
            question_desc: row.question.question_desc,
            question_seq: row.question.question_seq,
            valid_value: row.answer,
            answer_id: value,
        };
        this.updateformData.push(obj);
        console.log("qnaPostData", this.updateformData);
    }
    saveFailureDontimeArray(value, field) {
        // this.updatefailureformData = []
        console.log("row = ", field);
        console.log("value = ", value);
        if (field == 'type') {
            this.failure_type = value;
        }
        else if (field == 'mode') {
            this.failure_mode = value;
        }
        else if (field == 'component') {
            this.failure_component = value;
        }
        else if (field == 'repair') {
            this.failure_repair = value;
        }
        else if (field == 'remark') {
            console.log("this.failure_remark = ", field);
            console.log("this.failure_remark = ", value);
            this.failure_remark = value;
        }
        else if (field == 'start') {
            this.downtime_start = value;
        }
        else if (field == 'end') {
            this.downtime_end = value;
        }
        else if (field == 'reason') {
            this.downtime_reason = value;
        }
        else if (field == 'comment') {
            this.downtime_comment = value;
        }
    }
    clickSaveServiceHistory() {
        let servHist = [];
        let servHistQues = [];
        let woacalalData = [];
        let alalshData = [];
        let idToBeUpdate = '';
        // if (this.workOrderActComAssLocAssLis.service_histories.length > 0) {
        //   console.log("sana length = ", this.workOrderActComAssLocAssLis.service_histories.length)
        //   this.workOrderActComAssLocAssLis.service_histories
        //     .forEach(element => {
        //       // this.AssLocAssLisArrId
        //       woacalalData.push(element)
        //     });
        // } else {
        //   console.log("sini length = ", this.workOrderActComAssLocAssLis.service_histories.length)
        //   woacalalData = []
        // }
        if (this.listOfAllrequired.length > 0) {
            console.log("sana length = ", this.workOrderActComAssLocAssLis.service_histories.length);
            this.listOfAllrequired.forEach(element => {
                // this.AssLocAssLisArrId
                console.log("element==>>", element);
                // // set for question_id
                // servHistQues.push(element.id)
                // set for service_history_id
                woacalalData.push(element.id);
                console.log(this.selectedServiceHistoryType, "==", element.service_history_type);
                if (this.selectedServiceHistoryType == element.service_history_type) {
                    console.log('ada cok----->>>>>>');
                    // get ALALSH id to be update
                    idToBeUpdate = element.id;
                }
            });
        }
        else {
            console.log("sini length = ", this.workOrderActComAssLocAssLis.service_histories.length);
            woacalalData = [];
        }
        console.log('idToBeUpdate>>>', idToBeUpdate);
        console.log('servHistQues>>>', servHistQues);
        if (this.selectedAssetType == 'Failure') {
            if (this.failure_type == '' && this.failure_mode == '' && this.failure_repair == '' && this.failure_component == '' && this.failure_remark == '') {
                this.alertWarning('Warning', 'Please answer all question.');
            }
            else {
                let assLocAssLisSerHisData = {
                    service_history_type: this.selectedServiceHistory,
                    failure_type: this.failure_type,
                    failure_mode: this.failure_mode,
                    failure_repair: this.failure_repair,
                    failure_component: this.failure_component,
                    comments: this.failure_remark
                };
                console.log("assLocAssLisSerHisData = ", assLocAssLisSerHisData);
                if (idToBeUpdate == '') {
                    this.assetLocationAssetListServiceHistoriesService.post(assLocAssLisSerHisData).subscribe((res) => {
                        console.log("updatefailureformData = ", res);
                        woacalalData.push(res.id);
                        let woacassLocAssLisFormData = {
                            service_histories: woacalalData
                        };
                        this.workOrderActivityCompletionAssLocAssListService.update(this.servHist.id, woacassLocAssLisFormData).subscribe((woacalalRes) => {
                            console.log("woacalalRes =", woacalalRes);
                            this.alertWorkActivityAsset('Work Activity', 'SuccessFully Save Data.');
                        }, (woacalalErr) => {
                            console.log(woacalalErr);
                        });
                    }, (err) => {
                        console.log(err);
                    });
                }
                else {
                    this.assetLocationAssetListServiceHistoriesService.update(idToBeUpdate, assLocAssLisSerHisData).subscribe((res) => {
                        console.log("updatefailureformData = ", res);
                        // woacalalData.push(res.id)
                        // let woacassLocAssLisFormData = {
                        //   service_histories: woacalalData
                        // }
                        // this.workOrderActivityCompletionAssLocAssListService.update(this.servHist.id, woacassLocAssLisFormData).subscribe(
                        //   (woacalalRes) => {
                        //     console.log("woacalalRes =", woacalalRes)
                        this.alertWorkActivityAsset('Work Activity', 'SuccessFully Save Data.');
                        //   }, (woacalalErr) => {
                        //     console.log(woacalalErr)
                        //   }
                        // )
                    }, (err) => {
                        console.log(err);
                    });
                }
            }
        }
        else if (this.selectedAssetType == 'Downtime') {
            if (this.downtime_start == '' && this.downtime_end == '' && this.downtime_reason == '' && this.downtime_comment == '') {
                this.alertWarning('Warning', 'Please answer all question.');
            }
            else {
                let assLocAssLisSerHisData = {
                    service_history_type: this.selectedServiceHistory,
                    start_date_time: this.downtime_start,
                    end_date_time: this.downtime_end,
                    downtime_reason: this.downtime_reason,
                    comments: this.downtime_comment
                };
                console.log("assLocAssLisSerHisData = ", assLocAssLisSerHisData);
                if (idToBeUpdate == '') {
                    console.log("this is a new data ", idToBeUpdate);
                    this.assetLocationAssetListServiceHistoriesService.post(assLocAssLisSerHisData).subscribe((res) => {
                        console.log("updatefailureformData = ", res);
                        woacalalData.push(res.id);
                        let woacassLocAssLisFormData = {
                            service_histories: woacalalData
                        };
                        this.workOrderActivityCompletionAssLocAssListService.update(this.servHist.id, woacassLocAssLisFormData).subscribe((woacalalRes) => {
                            console.log("woacalalRes =", woacalalRes);
                            this.alertWorkActivityAsset('Work Activity', 'SuccessFully Save Data.');
                        }, (woacalalErr) => {
                            console.log(woacalalErr);
                        });
                    }, (err) => {
                        console.log(err);
                    });
                }
                else {
                    console.log("this is a existing data ", idToBeUpdate);
                    this.assetLocationAssetListServiceHistoriesService.update(idToBeUpdate, assLocAssLisSerHisData).subscribe((res) => {
                        console.log("updatefailureformData = ", res);
                        // woacalalData.push(res.id)
                        // let woacassLocAssLisFormData = {
                        //   service_histories: woacalalData
                        // }
                        // this.workOrderActivityCompletionAssLocAssListService.update(this.servHist.id, woacassLocAssLisFormData).subscribe(
                        //   (woacalalRes) => {
                        //     console.log("woacalalRes =", woacalalRes)
                        this.alertWorkActivityAsset('Work Activity', 'SuccessFully Save Data.');
                        //   }, (woacalalErr) => {
                        //     console.log(woacalalErr)
                        //   }
                        // )
                    }, (err) => {
                        console.log(err);
                    });
                }
            }
        }
        else {
            console.log("1trytest", this.questionAndAnswerData.length);
            console.log("2trytest", this.updateformData.length);
            if (this.questionAndAnswerData.length != this.updateformData.length) {
                this.alertWarning('Warning', 'Please answer all question.');
            }
            else {
                // this.updateformData.forEach(element1 => {
                for (let x = 0; x < this.updateformData.length; x++) {
                    console.log("xxxxxx = ", x);
                    console.log("this.updateformData[x] = ", this.updateformData[x]);
                    console.log("element1['valid_value'] = ", this.updateformData[x]['valid_value'].length);
                    // let validvalue: any = []
                    let styleDiv = '';
                    let questionvalueData;
                    let questionvalue = [];
                    let validvalue = [];
                    let responseRadio = '';
                    // this.updateformData[x]['valid_value'].forEach(element2 => {
                    let valid_value_data = this.updateformData[x]['valid_value'];
                    for (let i = 0; i < valid_value_data.length; i++) {
                        console.log("valid_value res = ", valid_value_data[i]);
                        if (valid_value_data[i].answer_cd == this.updateformData[x].answer_id) {
                            styleDiv = valid_value_data[i].style;
                            responseRadio = valid_value_data[i].answer_cd;
                        }
                        let validValueFormData = new FormData();
                        validValueFormData.append('seq_valid', valid_value_data[i].answer_seq);
                        validValueFormData.append('code_valid', valid_value_data[i].answer_cd);
                        validValueFormData.append('short_text_valid', valid_value_data[i].answer_desc);
                        validValueFormData.append('text_valid', valid_value_data[i].answer_text);
                        console.log("validValueFormData = ", validValueFormData);
                        this.questionValidValueService.post(validValueFormData).subscribe((queValValRes) => {
                            console.log("res queValValRes = ", queValValRes);
                            let obj2 = [queValValRes.id];
                            // validvalue.push(this.updateformData[x].id);
                            // questionvalue.push(obj2);
                            // validvalue[i] = queValValRes.id
                            console.log("validvalue array = ", obj2);
                            validvalue.push(queValValRes.id);
                            console.log("questionvalue qweqwe res = ", validvalue);
                            console.log("before i == valid_value_data.length = ", i, " -- ", valid_value_data.length);
                            if (i == (valid_value_data.length - 1)) {
                                console.log("afetr i == valid_value_data.length = ", i, " -- ", valid_value_data.length);
                                let serHisQueDataFormData = {
                                    seq: this.updateformData[x].question_seq,
                                    code: this.updateformData[x].question_cd,
                                    short_text: this.updateformData[x].question_desc,
                                    text: this.updateformData[x].question_desc,
                                    style: styleDiv,
                                    response_radio: responseRadio,
                                    valid_value: validvalue
                                };
                                console.log("serHisQueDataFormData =", serHisQueDataFormData);
                                this.serviceHistoriesQuestionService.post(serHisQueDataFormData).subscribe((serHisQueRes) => {
                                    console.log("res serHisQueRes = ", serHisQueRes);
                                    servHistQues.push(serHisQueRes.id);
                                    console.log("servHistQues arr = ", servHistQues);
                                    console.log("before x == this.updateformData.length = ", x, " -- ", (this.updateformData.length - 1));
                                    if (x == (this.updateformData.length - 1)) {
                                        console.log("servHistQues arr final = ", servHistQues);
                                        console.log("after x == this.updateformData.length = ", x, " -- ", (this.updateformData.length - 1));
                                        let assLocAssLisSerHisData = {
                                            comments: this.updateformData[x].question_seq,
                                            service_history_type: this.selectedServiceHistory,
                                            // failure_type: this.updateformData[x].question_seq,
                                            // failure_mode: this.updateformData[x].question_seq,
                                            // failure_repair: this.updateformData[x].question_seq,
                                            // failure_component: this.updateformData[x].question_seq,
                                            // failure_root_cause: this.updateformData[x].question_seq,
                                            // svc_hist_type_req_fl: this.updateformData[x].question_seq,
                                            // downtime_reason: this.updateformData[x].question_seq,
                                            question: servHistQues
                                        };
                                        console.log("assLocAssLisSerHisData>><<<<><", assLocAssLisSerHisData);
                                        if (idToBeUpdate == '') {
                                            console.log(assLocAssLisSerHisData);
                                            this.assetLocationAssetListServiceHistoriesService.post(assLocAssLisSerHisData).subscribe((alslshRes) => {
                                                console.log("alslshRes", alslshRes);
                                                console.log("alslshRes", alslshRes.id);
                                                woacalalData.push(alslshRes.id);
                                                // let woacassLocAssLisDataFormData = new FormData();
                                                // woacassLocAssLisDataFormData.append('service_histories',woacalalData)
                                                let woacassLocAssLisFormData = {
                                                    service_histories: woacalalData
                                                };
                                                this.workOrderActivityCompletionAssLocAssListService.update(this.servHist.id, woacassLocAssLisFormData).subscribe((woacalalRes) => {
                                                    console.log("woacalalRes =", woacalalRes);
                                                    this.alertWorkActivityAsset('Work Activity', 'Your service history has been successfully updated.');
                                                    // this.presentAlertConfirm()
                                                }, (woacalalErr) => {
                                                    console.log(woacalalErr);
                                                });
                                            }, (alslshErr) => {
                                                console.log("alslshErr", alslshErr);
                                            }, () => {
                                            });
                                        }
                                        else {
                                            console.log(assLocAssLisSerHisData);
                                            this.assetLocationAssetListServiceHistoriesService.update(idToBeUpdate, assLocAssLisSerHisData).subscribe((alslshRes) => {
                                                console.log("alslshRes", alslshRes);
                                                // console.log("siniiiiii length = ", this.workOrderActComAssLocAssLis)
                                                // if (this.workOrderActComAssLocAssLis.service_histories.length > 0) {
                                                //   console.log("sana length = ", this.workOrderActComAssLocAssLis.service_histories.length)
                                                //   this.workOrderActComAssLocAssLis.service_histories
                                                //     .forEach(element => {
                                                //       // this.AssLocAssLisArrId
                                                //       woacalalData.push(element)
                                                //     });
                                                // } else {
                                                //   console.log("sini length = ", this.workOrderActComAssLocAssLis.service_histories.length)
                                                //   woacalalData = []
                                                // }
                                                // woacalalData.push(alslshRes.id)
                                                // let woacassLocAssLisDataFormData = new FormData();
                                                // woacassLocAssLisDataFormData.append('service_histories',woacalalData)
                                                // let woacassLocAssLisFormData = {
                                                //   service_histories: woacalalData
                                                // }
                                                // this.workOrderActivityCompletionAssLocAssListService.update(this.servHist.id, woacassLocAssLisFormData).subscribe(
                                                //   (woacalalRes) => {
                                                //     console.log("woacalalRes =", woacalalRes)
                                                this.alertWorkActivityAsset('Work Activity', 'SuccessFully Save Data.');
                                                //     // this.presentAlertConfirm()
                                                //   }, (woacalalErr) => {
                                                //     console.log(woacalalErr)
                                                //   }
                                                // )
                                            }, (alslshErr) => {
                                                console.log("alslshErr", alslshErr);
                                            }, () => {
                                            });
                                        }
                                        // console.log("here 111111111111")
                                    }
                                }, (err) => {
                                    console.error("err", err);
                                }, () => {
                                });
                            }
                        }, (err) => {
                            console.error("err", err);
                        }, () => {
                        });
                    }
                }
            }
        }
        // setTimeout(function () {
        //   console.log("servHistQues arrid = ", servHistQues)
        // }, 4000);
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
    alertWorkActivityAsset(header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
                buttons: [
                    {
                        text: "OK",
                        handler: () => {
                            // this.router.navigate(["/technical/maintenance-work-list"]);
                            // this.router.navigate(["/technical/work-activity-asset"]);
                            this.modalController.dismiss();
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    presentAlertConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: 'Are sure want to complete the service history?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => {
                            this.clickSaveServiceHistory();
                            console.log('Confirm Okay');
                        }
                    },
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ServiceHistoryPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"] },
    { type: src_app_shared_services_work_activities_work_activities_service__WEBPACK_IMPORTED_MODULE_6__["WorkActivitiesService"] },
    { type: src_app_shared_services_asset_types_asset_types_service__WEBPACK_IMPORTED_MODULE_7__["AssetTypesService"] },
    { type: src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_8__["AssetsService"] },
    { type: src_app_shared_services_asset_service_history_asset_service_history_service__WEBPACK_IMPORTED_MODULE_9__["AssetServiceHistoryService"] },
    { type: src_app_shared_services_service_history_service_history_service__WEBPACK_IMPORTED_MODULE_10__["ServiceHistoryService"] },
    { type: src_app_shared_services_service_history_question_service_history_question_service__WEBPACK_IMPORTED_MODULE_12__["ServiceHistoryQuestionService"] },
    { type: src_app_shared_services_questions_value_valid_questions_value_valid_service__WEBPACK_IMPORTED_MODULE_13__["QuestionValidValueService"] },
    { type: src_app_shared_services_service_histories_question_service_histories_question_service__WEBPACK_IMPORTED_MODULE_11__["ServiceHistoriesQuestionService"] },
    { type: src_app_shared_services_asset_location_asset_list_service_histories_asset_location_asset_list_service_histories_service__WEBPACK_IMPORTED_MODULE_14__["AssetLocationAssetListServiceHistoriesService"] },
    { type: src_app_shared_services_work_order_activity_completion_AssLocAssList_work_order_activity_completion_AssLocAssList_service__WEBPACK_IMPORTED_MODULE_15__["WorkOrderActivityCompletionAssLocAssListService"] },
    { type: src_app_shared_services_failure_profile_failure_profile_service__WEBPACK_IMPORTED_MODULE_16__["FailureProfileModelService"] }
];
ServiceHistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-service-history",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./service-history.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/service-history/service-history.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./service-history.page.scss */ "./src/app/pages/technical/service-history/service-history.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"],
        src_app_shared_services_work_activities_work_activities_service__WEBPACK_IMPORTED_MODULE_6__["WorkActivitiesService"],
        src_app_shared_services_asset_types_asset_types_service__WEBPACK_IMPORTED_MODULE_7__["AssetTypesService"],
        src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_8__["AssetsService"],
        src_app_shared_services_asset_service_history_asset_service_history_service__WEBPACK_IMPORTED_MODULE_9__["AssetServiceHistoryService"],
        src_app_shared_services_service_history_service_history_service__WEBPACK_IMPORTED_MODULE_10__["ServiceHistoryService"],
        src_app_shared_services_service_history_question_service_history_question_service__WEBPACK_IMPORTED_MODULE_12__["ServiceHistoryQuestionService"],
        src_app_shared_services_questions_value_valid_questions_value_valid_service__WEBPACK_IMPORTED_MODULE_13__["QuestionValidValueService"],
        src_app_shared_services_service_histories_question_service_histories_question_service__WEBPACK_IMPORTED_MODULE_11__["ServiceHistoriesQuestionService"],
        src_app_shared_services_asset_location_asset_list_service_histories_asset_location_asset_list_service_histories_service__WEBPACK_IMPORTED_MODULE_14__["AssetLocationAssetListServiceHistoriesService"],
        src_app_shared_services_work_order_activity_completion_AssLocAssList_work_order_activity_completion_AssLocAssList_service__WEBPACK_IMPORTED_MODULE_15__["WorkOrderActivityCompletionAssLocAssListService"],
        src_app_shared_services_failure_profile_failure_profile_service__WEBPACK_IMPORTED_MODULE_16__["FailureProfileModelService"]])
], ServiceHistoryPage);



/***/ }),

/***/ "./src/app/shared/services/asset-location-asset-list-service-histories/asset-location-asset-list-service-histories.service.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/shared/services/asset-location-asset-list-service-histories/asset-location-asset-list-service-histories.service.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: AssetLocationAssetListServiceHistoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetLocationAssetListServiceHistoriesService", function() { return AssetLocationAssetListServiceHistoriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AssetLocationAssetListServiceHistoriesService = class AssetLocationAssetListServiceHistoriesService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/asset-location-asset-list-service-histories/";
        // Data
        this.atmodels = [];
    }
    post(body) {
        return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetLocationAssetListServiceHistoriesModel", res);
        }));
    }
    get() {
        return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetLocationAssetListServiceHistoriesModel", res);
            this.atmodels = res;
        }));
    }
    getOne(id) {
        let urlID = this.url + id + "/";
        return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetLocationAssetListServiceHistoriesModel", res);
            this.atmodel = res;
        }));
    }
    update(id, body) {
        let urlID = this.url + id + "/";
        return this.http.patch(urlID, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetLocationAssetListServiceHistoriesModel", res);
        }));
    }
    delete(id) {
        return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetLocationAssetListServiceHistoriesModel", res);
        }));
    }
    filter(field) {
        let urlFilter = this.url + "?" + field;
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetLocationAssetListServiceHistoriesModel", res);
        }));
    }
};
AssetLocationAssetListServiceHistoriesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AssetLocationAssetListServiceHistoriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], AssetLocationAssetListServiceHistoriesService);



/***/ }),

/***/ "./src/app/shared/services/asset-service-history/asset-service-history.service.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/services/asset-service-history/asset-service-history.service.ts ***!
  \****************************************************************************************/
/*! exports provided: AssetServiceHistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetServiceHistoryService", function() { return AssetServiceHistoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AssetServiceHistoryService = class AssetServiceHistoryService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/asset-service-history/";
        // Data
        this.atmodels = [];
    }
    post(body) {
        return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetServiceHistoryModel", res);
        }));
    }
    get() {
        return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetServiceHistoryModel", res);
            this.atmodels = res;
        }));
    }
    getOne(id) {
        let urlID = this.url + id + "/";
        return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetServiceHistoryModel", res);
            this.atmodel = res;
        }));
    }
    update(body) {
        return this.http.patch(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetServiceHistoryModel", res);
        }));
    }
    delete(id) {
        return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetServiceHistoryModel", res);
        }));
    }
    filter(field) {
        let urlFilter = this.url + "?" + field;
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("AssetServiceHistoryModel", res);
        }));
    }
};
AssetServiceHistoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AssetServiceHistoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], AssetServiceHistoryService);



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



/***/ }),

/***/ "./src/app/shared/services/failure-profile/failure-profile.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/services/failure-profile/failure-profile.service.ts ***!
  \****************************************************************************/
/*! exports provided: FailureProfileModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailureProfileModelService", function() { return FailureProfileModelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let FailureProfileModelService = class FailureProfileModelService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/failure-profile/";
        // Data
        this.amodels = [];
    }
    post(body) {
        return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("FailureProfileModel", res);
        }));
    }
    get() {
        return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("FailureProfileModel", res);
            this.amodels = res;
        }));
    }
    getOne(id) {
        let urlID = this.url + id + "/";
        return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("FailureProfileModel", res);
            this.amodel = res;
        }));
    }
    update(id, body) {
        let urlTemp = this.url + id + '/';
        return this.http.patch(urlTemp, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("FailureProfileModel", res);
        }));
    }
    delete(id) {
        return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("FailureProfileModel", res);
        }));
    }
    filter(field) {
        let urlFilter = this.url + "?" + field;
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("FailureProfileModel", res);
        }));
    }
};
FailureProfileModelService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
FailureProfileModelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], FailureProfileModelService);



/***/ }),

/***/ "./src/app/shared/services/questions-value-valid/questions-value-valid.service.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/services/questions-value-valid/questions-value-valid.service.ts ***!
  \****************************************************************************************/
/*! exports provided: QuestionValidValueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionValidValueService", function() { return QuestionValidValueService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let QuestionValidValueService = class QuestionValidValueService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/questions-value-valid/";
        // Data
        this.atmodels = [];
    }
    post(body) {
        return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("QuestionValidValueModel", res);
        }));
    }
    get() {
        return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("QuestionValidValueModel", res);
            this.atmodels = res;
        }));
    }
    getOne(id) {
        let urlID = this.url + id + "/";
        return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("QuestionValidValueModel", res);
            this.atmodel = res;
        }));
    }
    update(body) {
        return this.http.patch(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("QuestionValidValueModel", res);
        }));
    }
    delete(id) {
        return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("QuestionValidValueModel", res);
        }));
    }
    filter(field) {
        let urlFilter = this.url + "?" + field;
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("QuestionValidValueModel", res);
        }));
    }
};
QuestionValidValueService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
QuestionValidValueService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], QuestionValidValueService);



/***/ }),

/***/ "./src/app/shared/services/service-histories-question/service-histories-question.service.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/shared/services/service-histories-question/service-histories-question.service.ts ***!
  \**************************************************************************************************/
/*! exports provided: ServiceHistoriesQuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceHistoriesQuestionService", function() { return ServiceHistoriesQuestionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ServiceHistoriesQuestionService = class ServiceHistoriesQuestionService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/service-histories-questions/";
        // Data
        this.amodels = [];
    }
    post(body) {
        return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("ServiceHistoriesQuestionModel", res);
        }));
    }
    get() {
        return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("ServiceHistoriesQuestionModel", res);
            this.amodels = res;
        }));
    }
    getOne(id) {
        let urlID = this.url + id + "/";
        return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("ServiceHistoriesQuestionModel", res);
            this.amodel = res;
        }));
    }
    update(id, body) {
        let urlTemp = this.url + id + '/';
        return this.http.patch(urlTemp, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("ServiceHistoriesQuestionModel", res);
        }));
    }
    delete(id) {
        return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("ServiceHistoriesQuestionModel", res);
        }));
    }
    filter(field) {
        let urlFilter = this.url + "?" + field;
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("ServiceHistoriesQuestionModel", res);
        }));
    }
};
ServiceHistoriesQuestionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ServiceHistoriesQuestionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], ServiceHistoriesQuestionService);



/***/ }),

/***/ "./src/app/shared/services/service-history-question/service-history-question.service.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/services/service-history-question/service-history-question.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: ServiceHistoryQuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceHistoryQuestionService", function() { return ServiceHistoryQuestionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ServiceHistoryQuestionService = class ServiceHistoryQuestionService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/service-history-question/";
        // Data
        this.atmodels = [];
    }
    post(body) {
        return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("ServiceHistoryQuestionModel", res);
        }));
    }
    get() {
        return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("ServiceHistoryQuestionModel", res);
            this.atmodels = res;
        }));
    }
    getOne(id) {
        let urlID = this.url + id + "/";
        return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("ServiceHistoryQuestionModel", res);
            this.atmodel = res;
        }));
    }
    update(body) {
        return this.http.patch(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("ServiceHistoryQuestionModel", res);
        }));
    }
    delete(id) {
        return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("ServiceHistoryQuestionModel", res);
        }));
    }
    filter(field) {
        let urlFilter = this.url + "?" + field;
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("ServiceHistoryQuestionModel", res);
        }));
    }
    getQna(field) {
        let urlFilter = this.url + "get_service_history_qna/";
        return this.http.post(urlFilter, field).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("ServiceHistoryQuestionModel", res);
        }));
    }
};
ServiceHistoryQuestionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ServiceHistoryQuestionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], ServiceHistoryQuestionService);



/***/ }),

/***/ "./src/app/shared/services/service-history/service-history.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/services/service-history/service-history.service.ts ***!
  \****************************************************************************/
/*! exports provided: ServiceHistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceHistoryService", function() { return ServiceHistoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ServiceHistoryService = class ServiceHistoryService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/service-history/";
        // Data
        this.atmodels = [];
    }
    post(body) {
        return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("ServiceHistoryModel", res);
        }));
    }
    get() {
        return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("ServiceHistoryModel", res);
            this.atmodels = res;
        }));
    }
    getOne(id) {
        let urlID = this.url + id + "/";
        return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("ServiceHistoryModel", res);
            this.atmodel = res;
        }));
    }
    update(body) {
        return this.http.patch(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("ServiceHistoryModel", res);
        }));
    }
    delete(id) {
        return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("ServiceHistoryModel", res);
        }));
    }
    filter(field) {
        let urlFilter = this.url + "?" + field;
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("ServiceHistoryModel", res);
        }));
    }
};
ServiceHistoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ServiceHistoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], ServiceHistoryService);



/***/ }),

/***/ "./src/app/shared/services/work-activities/work-activities.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/services/work-activities/work-activities.service.ts ***!
  \****************************************************************************/
/*! exports provided: WorkActivitiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkActivitiesService", function() { return WorkActivitiesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let WorkActivitiesService = class WorkActivitiesService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/work-activities/";
        // Data
        this.wamodels = [];
    }
    post(body) {
        return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkActivitiesModel", res);
        }));
    }
    get() {
        return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkActivitiesModel", res);
            this.wamodels = res;
        }));
    }
    getOne(id) {
        let urlID = this.url + id + "/";
        return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkActivitiesModel", res);
            this.wamodel = res;
        }));
    }
    update(id, body) {
        return this.http.patch(this.url + id + '/', body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkActivitiesModel", res);
        }));
    }
    delete(id) {
        return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkActivitiesModel", res);
        }));
    }
    filter(field) {
        let urlFilter = this.url + "?" + field;
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkActivitiesModel", res);
        }));
    }
};
WorkActivitiesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
WorkActivitiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], WorkActivitiesService);



/***/ }),

/***/ "./src/app/shared/services/work-order-activity-completion-AssLocAssList/work-order-activity-completion-AssLocAssList.service.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/shared/services/work-order-activity-completion-AssLocAssList/work-order-activity-completion-AssLocAssList.service.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: WorkOrderActivityCompletionAssLocAssListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOrderActivityCompletionAssLocAssListService", function() { return WorkOrderActivityCompletionAssLocAssListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let WorkOrderActivityCompletionAssLocAssListService = class WorkOrderActivityCompletionAssLocAssListService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/work-order-activity-completion-asset-location-asset-list/";
        // Data
        this.amodels = [];
    }
    post(body) {
        return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkOrderActivityCompletionAssLocAssListModel", res);
        }));
    }
    get() {
        return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkOrderActivityCompletionAssLocAssListModel", res);
            this.amodels = res;
        }));
    }
    getOne(id) {
        let urlID = this.url + id + "/";
        return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkOrderActivityCompletionAssLocAssListModel", res);
            this.amodel = res;
        }));
    }
    update(id, body) {
        let urlTemp = this.url + id + '/';
        return this.http.patch(urlTemp, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkOrderActivityCompletionAssLocAssListModel", res);
        }));
    }
    delete(id) {
        return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkOrderActivityCompletionAssLocAssListModel", res);
        }));
    }
    filter(field) {
        let urlFilter = this.url + "?" + field;
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkOrderActivityCompletionAssLocAssListModel", res);
        }));
    }
};
WorkOrderActivityCompletionAssLocAssListService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
WorkOrderActivityCompletionAssLocAssListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], WorkOrderActivityCompletionAssLocAssListService);



/***/ })

}]);
//# sourceMappingURL=default~pages-technical-service-history-service-history-module~pages-technical-technical-module~page~69be26f5-es2015.js.map