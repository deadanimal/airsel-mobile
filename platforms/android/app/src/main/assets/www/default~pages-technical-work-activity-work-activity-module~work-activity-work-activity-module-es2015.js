(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-technical-work-activity-work-activity-module~work-activity-work-activity-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/work-activity/work-activity.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/work-activity/work-activity.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"clickBack()\">\n        <ion-icon src=\"../../../../assets/icon/air-selangor-icon.svg\" style=\"font-size: 2rem\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title style=\"font-weight: bold\"> </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openNotification()\">\n        <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n        <ion-badge size=\"small\" color=\"danger\" style=\"position: absolute; right: -5px; top: 1px\">\n          {{ notificationService.totalnotificationbyuser }}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content-core\">\n  <div class=\"ion-padding\">\n    <!-- <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button (click)=\"scanQrCode()\">\n        <ion-icon name=\"scan\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab> -->\n    <h4 class=\"ion-text-center ion-padding\">Work Activity Details</h4>\n    <ion-list class=\"line-input\">\n      <form [formGroup]=\"workactivityFormGroup\">\n\n        <ion-item>\n          <ion-label position=\"stacked\">Work Activity Id:</ion-label>\n          <ion-input type=\"text\" [value]=\"workactivity.activityid\" readonly></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Work Activity Type:</ion-label>\n          <ion-input type=\"text\" [value]=\"workactivity.act_type_cd\" readonly></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Required By Date:</ion-label>\n          <ion-input type=\"text\" [value]=\"workactivity.required_by_dt\" readonly></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Parent Location:</ion-label>\n          <!-- <ion-input type=\"text\" [value]=\"workactivity.asset_loc_sync\" readonly></ion-input> -->\n          <ion-textarea rows=\"2\" type=\"text\" [value]=\"workactivity.asset_loc_sync\" readonly></ion-textarea>\n        </ion-item>\n\n        <!-- <ion-item>\n          <ion-label position=\"stacked\">Asset ID:</ion-label>\n          <ion-input type=\"text\" [value]=\"workactivity.asset_id_1\" readonly></ion-input>\n        </ion-item> -->\n\n      </form>\n    </ion-list>\n\n    <ion-card *ngFor=\"let workActData of workactivityData\">\n      <ion-card-header>\n        <ion-fab horizontal=\"end\">\n          <ion-fab-button *ngIf=\"workActData.reading_datetime == null\" size=\"small\" color=\"primary\"\n            (click)=\"clickViewAsset(workActData)\">\n            <ion-icon name=\"search\"></ion-icon>\n          </ion-fab-button>\n\n          <ion-fab-button *ngIf=\"workActData.reading_datetime != null\" size=\"small\" color=\"success\"\n            (click)=\"clickViewAsset(workActData)\">\n            <ion-icon name=\"search\"></ion-icon>\n            <!-- <ion-icon name=\"checkmark-circle\"></ion-icon> -->\n          </ion-fab-button>\n\n        </ion-fab>\n        <!-- <ion-card-title>Asset ID: {{ workActData.ASSET_ID }}</ion-card-title> -->\n        <ion-card-title>Badge No<br />{{ workActData.badge_number }}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <!-- <p>Asset Type: {{ workActData.asset_type }}</p> -->\n        <p>Asset ID: {{ workActData.asset_id }}</p>\n        <p>Location: {{ workActData.location_descr }}</p>\n        <p>Asset Description : {{ workActData.description }}</p>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- <ion-item lines=\"none\">\n      <ion-label class=\"ion-text-start ion-no-padding\"\n        >Service History</ion-label\n      >\n      <ion-button class=\"ion-text-end\" (click)=\"clickAddServiceHistory()\"\n        >Add</ion-button\n      >\n    </ion-item>\n\n    <ion-card *ngFor=\"let servicehistory of servicehistories; let i = index\">\n      <ion-card-header>\n        <ion-fab horizontal=\"end\">\n          <ion-fab-button\n            size=\"small\"\n            color=\"primary\"\n            (click)=\"clickEdit(servicehistory)\"\n          >\n            <ion-icon name=\"create\"></ion-icon>\n          </ion-fab-button>\n          <ion-fab-button size=\"small\" color=\"danger\" (click)=\"clickRemove(i)\">\n            <ion-icon name=\"trash\"></ion-icon>\n          </ion-fab-button>\n        </ion-fab>\n        <ion-card-title>{{ servicehistory.type }}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content *ngIf=\"servicehistory.type == 'Downtime'\">\n        <p>Start Date/Time: {{ servicehistory.start | date }}</p>\n        <p>End Date/Time: {{ servicehistory.end | date }}</p>\n        <p>Downtime Reason</p>\n        <p>{{ servicehistory.reason }}</p>\n      </ion-card-content>\n      <ion-card-content *ngIf=\"servicehistory.type == 'Preventive Maintenance'\">\n        <p>Terminal Box</p>\n        <p>{{ servicehistory.terminal_box }}</p>\n        <p>Slip Ring & Carbon Brush</p>\n        <p>{{ servicehistory.slip_ring }}</p>\n        <p>Armature</p>\n        <p>{{ servicehistory.armature }}</p>\n      </ion-card-content>\n    </ion-card> -->\n\n    <div class=\"ion-text-center ion-padding\">\n      <ion-button color=\"light\" (click)=\"clickBack()\">Back</ion-button>\n      <!-- <ion-button color=\"primary\" (click)=\"close()\">Close</ion-button> -->\n      <ion-button color=\"primary\" [disabled]=\"setButton\" (click)=\"submit()\">Close Out</ion-button>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/technical/work-activity/work-activity-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/technical/work-activity/work-activity-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: WorkActivityPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkActivityPageRoutingModule", function() { return WorkActivityPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _work_activity_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./work-activity.page */ "./src/app/pages/technical/work-activity/work-activity.page.ts");




const routes = [
    {
        path: '',
        component: _work_activity_page__WEBPACK_IMPORTED_MODULE_3__["WorkActivityPage"]
    }
];
let WorkActivityPageRoutingModule = class WorkActivityPageRoutingModule {
};
WorkActivityPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WorkActivityPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/technical/work-activity/work-activity.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/technical/work-activity/work-activity.module.ts ***!
  \***********************************************************************/
/*! exports provided: WorkActivityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkActivityPageModule", function() { return WorkActivityPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _work_activity_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./work-activity-routing.module */ "./src/app/pages/technical/work-activity/work-activity-routing.module.ts");
/* harmony import */ var _work_activity_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./work-activity.page */ "./src/app/pages/technical/work-activity/work-activity.page.ts");







let WorkActivityPageModule = class WorkActivityPageModule {
};
WorkActivityPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _work_activity_routing_module__WEBPACK_IMPORTED_MODULE_5__["WorkActivityPageRoutingModule"],
        ],
        declarations: [_work_activity_page__WEBPACK_IMPORTED_MODULE_6__["WorkActivityPage"]],
    })
], WorkActivityPageModule);



/***/ }),

/***/ "./src/app/pages/technical/work-activity/work-activity.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/technical/work-activity/work-activity.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlY2huaWNhbC93b3JrLWFjdGl2aXR5L3dvcmstYWN0aXZpdHkucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/technical/work-activity/work-activity.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/technical/work-activity/work-activity.page.ts ***!
  \*********************************************************************/
/*! exports provided: WorkActivityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkActivityPage", function() { return WorkActivityPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _service_history_service_history_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service-history/service-history.page */ "./src/app/pages/technical/service-history/service-history.page.ts");
/* harmony import */ var src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/assets/assets.service */ "./src/app/shared/services/assets/assets.service.ts");
/* harmony import */ var src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/notifications/notifications.service */ "./src/app/shared/services/notifications/notifications.service.ts");
/* harmony import */ var src_app_shared_services_work_activities_work_activities_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/work-activities/work-activities.service */ "./src/app/shared/services/work-activities/work-activities.service.ts");
/* harmony import */ var src_app_shared_services_work_order_activity_completion_AssLocAssList_work_order_activity_completion_AssLocAssList_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/work-order-activity-completion-AssLocAssList/work-order-activity-completion-AssLocAssList.service */ "./src/app/shared/services/work-order-activity-completion-AssLocAssList/work-order-activity-completion-AssLocAssList.service.ts");
/* harmony import */ var src_app_shared_services_work_order_activity_completion_work_order_activity_completion_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/work-order-activity-completion/work-order-activity-completion.service */ "./src/app/shared/services/work-order-activity-completion/work-order-activity-completion.service.ts");
/* harmony import */ var src_app_shared_services_wams_wams_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/wams/wams.service */ "./src/app/shared/services/wams/wams.service.ts");
/* harmony import */ var src_app_shared_services_asset_location_sync_asset_location_sync_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/asset-location-sync/asset-location-sync.service */ "./src/app/shared/services/asset-location-sync/asset-location-sync.service.ts");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");





// import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";









let WorkActivityPage = class WorkActivityPage {
    constructor(formBuilder, route, router, actionSheetController, alertController, menu, modalController, notificationService, workactivityService, workOrderActivityCompletionAssLocAssListService, workOrderActivityCompletionService, loadingController, ngZone, assetsService, wamsService, assetLocatioSyncService, authService) {
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
        this.authService = authService;
        // List
        this.servicehistories = [];
        // scanner
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
            asset_loc_sync: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
        });
        this.route.queryParams.subscribe((params) => {
            this.ngZone.run(() => {
                if (this.router.getCurrentNavigation().extras.state) {
                    this.workactivity =
                        this.router.getCurrentNavigation().extras.state.work_activity;
                    console.log("this.workactivity = ", this.workactivity);
                    console.log("this.workactivity['id']", this.workactivity['asset_location_asset_list']);
                    if (this.workactivity['status'] == 'New') {
                        let obj = {
                            status: 'InProgress',
                            record_by: this.authService.userID,
                            modified_by: this.authService.userID
                        };
                        this.workOrderActivityCompletionService.update(this.workactivity['id'], obj).subscribe((resUp) => {
                            console.log("resUp", resUp);
                        }, (errUp) => {
                            console.log("errUp", errUp);
                        });
                    }
                    let node_id_1 = "node_id=" + this.workactivity.node_id_1;
                    this.assetLocatioSyncService.filter(node_id_1).subscribe((resAls) => {
                        this.workactivity.asset_loc_sync = resAls[0]['description'];
                        this.workactivityFormGroup.patchValue(Object.assign({}, this.workactivity));
                    }, (errAls) => {
                    });
                    // console.log("this.workactivity = ", this.workactivity['asset_location_asset_list']);
                    // let getWOrkActivityData = this.workactivity['asset_location_asset_list']
                    this.workOrderActivityCompletionService.getOne(this.workactivity['id']).subscribe((resUp) => {
                        console.log("workOrderActivityCompletionService >>> ", resUp);
                        this.getWOrkActivityData(resUp["asset_location_asset_list"]);
                    }, (errUp) => {
                        console.log("workOrderActivityCompletionService err", errUp);
                    });
                    // this.workactivity['asset_location_asset_list'].forEach(element => {
                    //   console.log('element', element);
                    // });
                }
            });
        });
    }
    L(...args) {
        let v = args.join(" ");
        console.log(v);
        this.ngZone.run(() => {
            this.logs.push(v);
        });
    }
    ngOnInit() {
        broadcaster._debug = true;
        this.menu.enable(false, "menuNotification");
    }
    presentAlert(header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
                buttons: [
                    {
                        text: "OK",
                    },
                ],
            });
            yield alert.present();
        });
    }
    warningAlert(header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
                buttons: ['ok']
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
    close() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.workactivityFormGroup.patchValue({
                bo_status: "Completed",
            });
            this.workactivityService
                .update(this.workactivityFormGroup.value.id, this.workactivityFormGroup.value)
                .subscribe((res) => {
                console.log("res", res);
                this.alertWorkActivity("Work Activity", "Your work activity have successfully closed in the the system. Thank you.");
            }, (err) => {
                console.error("err", err);
            });
        });
    }
    alertWorkActivity(header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
                buttons: [
                    {
                        text: "OK",
                        handler: () => {
                            this.router.navigate(["/technical/maintenance-work-detail"]);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    clickBack() {
        this.router.navigate(["/technical/maintenance-work-detail"]);
    }
    clickAddServiceHistory() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _service_history_service_history_page__WEBPACK_IMPORTED_MODULE_5__["ServiceHistoryPage"],
            });
            modal.onDidDismiss().then((data) => {
                if (data.data)
                    this.servicehistories.push(data.data);
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
            return yield modal.present();
        });
    }
    // async clickViewAsset(asset) {
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
    clickRemove(index) {
        this.servicehistories.splice(index, 1);
    }
    getWOrkActivityData(getdata) {
        let woacalalsh = [];
        let datetime = new Date().toLocaleDateString();
        console.log("3test", datetime);
        getdata.forEach((element) => {
            let woacalsl = element.toString();
            console.log(woacalsl);
            this.workOrderActivityCompletionAssLocAssListService.getOne(woacalsl).subscribe((Res) => {
                console.log("1test", Res);
                console.log("2test", Res.service_histories);
                if (Res.service_histories == [] || Res.service_histories == undefined || Res.service_histories.length == 0) {
                    console.log("3test", datetime);
                    Res.reading_datetime = datetime;
                    console.log("4test", Res.reading_datetime);
                }
                this.workactivityData.push(Res);
                console.log("5test", this.workactivityData);
                console.log(Res);
            }, (Err) => {
                console.error("err", Err);
            });
            setTimeout(() => {
                this.workactivityData.forEach(element => {
                    console.log("workactivityData=>>>", element);
                    console.log("reading_datetime=>>>", element.reading_datetime);
                    let asset_id = "asset_id=" + element.asset_id;
                    /// set data to array for submit button
                    if (element.reading_datetime != null || element.reading_datetime != '') {
                        this.buttonArr.push(element);
                    }
                    this.assetsService.filter(asset_id).subscribe((res) => {
                        element.badge_number = res[0].badge_no;
                        element.description = res[0].description;
                    }, (errAs) => {
                    });
                    let nodeid = "node_id=" + element.node_id;
                    this.assetLocatioSyncService.filter(nodeid).subscribe((resALALSH) => {
                        console.log("resALALSH --=-= ", resALALSH);
                        element.location_descr = resALALSH[0].description;
                    }, () => {
                    });
                });
                console.log("this.buttonArr", this.buttonArr.length);
                if (this.buttonArr.length == 0) {
                    this.setButton = true;
                }
            }, 1000);
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
    submit() {
        console.log("workactivityData", this.workactivityData);
        var checker = true;
        this.workactivityData.forEach(element => {
            if (element.reading_datetime == '' || element.reading_datetime == null) {
                checker = false;
            }
        });
        if (checker == true) {
            let woacassLocAssLisFormData = {
                status: "Completed",
                completiondatetime: new Date(),
                submitted_datetime: new Date(),
            };
            console.log("this.workactivity.id>>>>>>>", this.workactivity.id);
            console.log("woacassLocAssLisFormData>>>>>>>", woacassLocAssLisFormData);
            this.workOrderActivityCompletionService.update(this.workactivity.id, woacassLocAssLisFormData)
                .subscribe((res) => {
                console.log("res = ", res);
                this.presentAlert("Success", "Successfully update data.");
            }, (err) => {
                console.log("workOrderActivityCompletionService err", err);
            });
        }
        else {
            this.warningAlert('Error', 'Please complete all required work activity');
            return false;
        }
    }
    searchBadgeNo(asset) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("asset>>", asset);
            const alert = yield this.alertController.create({
                header: "Badge No.",
                message: "Enter a badge number to search the asset",
                inputs: [
                    {
                        name: "badge_no",
                        type: "text",
                        value: asset.badge_number,
                        placeholder: "",
                    },
                ],
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        handler: () => {
                            console.log("Cancel clicked");
                        },
                    },
                    {
                        text: "Search",
                        handler: (data) => {
                            if (data.badge_no == asset['badge_number']) {
                                if (data.badge_no) {
                                    this.loadingController
                                        .create({
                                        message: "Please wait...",
                                    })
                                        .then((loading) => {
                                        loading.present();
                                        this.assetsService
                                            .filter("badge_no=" + data.badge_no)
                                            .subscribe((res) => {
                                            // if find, go to asset detail list
                                            if (res.length > 0) {
                                                loading.dismiss();
                                                let navigationExtras = {
                                                    state: {
                                                        badge_no: res[0].badge_no,
                                                        asset,
                                                        work_activity: this.workactivity,
                                                    },
                                                };
                                                this.router.navigate(["/technical/work-activity-asset"], navigationExtras);
                                            }
                                            // else, find the asset in the wams to pump into PIPE's asset table
                                            else {
                                                // get data from wams
                                                this.wamsService
                                                    .getAssetBadgeNo(data.badge_no)
                                                    .subscribe((res) => {
                                                    loading.dismiss();
                                                    if (res.results.length > 0) {
                                                        let navigationExtras = {
                                                            state: {
                                                                badge_no: data.badge_no,
                                                                asset,
                                                                work_activity: this.workactivity,
                                                            },
                                                        };
                                                        this.router.navigate(["/technical/work-activity-asset"], navigationExtras);
                                                    }
                                                    else {
                                                        this.presentAlert("Error", "Sorry, asset is not found in the database.");
                                                    }
                                                }, (err) => {
                                                    console.error("err", err);
                                                    loading.dismiss();
                                                    this.presentAlert("Error", "Sorry, there is a technical problem going on.");
                                                });
                                            }
                                        }, (err) => {
                                            console.log("err assetlsService = ", err);
                                            loading.dismiss();
                                            this.presentAlert("Error", "Sorry, there is a technical problem going on.");
                                        });
                                    });
                                }
                                else {
                                    this.presentAlert("Error", "Please enter badge number to find asset detail");
                                }
                            }
                            else {
                                this.warningAlert("Error", "Batch number not match. Please try again,");
                            }
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    onRegister2DBarcodeListener(asset) {
        this.loadingController
            .create({
            message: "Please scan the QR code...",
            backdropDismiss: true,
        })
            .then((loading) => {
            loading.present();
            console.log("[register onRegister2DBarcodeListener] ");
            const ev = "com.scanner.broadcast";
            var isGlobal = true;
            var listener = (event) => {
                console.log(JSON.stringify(event));
                if (event.SCAN_STATE == "success") {
                    this.ngZone.run(() => {
                        console.log("this.bBarcode = ", this.bBarcode);
                        if (this.bBarcode) {
                            loading.dismiss();
                            broadcaster.removeEventListener(ev, listener);
                            this.updateQrbarcode(event.data, asset);
                            // if(event.data == asset.badge_number){
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
    onRegisterRFIDListener(asset) {
        this.loadingController
            .create({
            message: "Please scan the RFID tag...",
            backdropDismiss: true,
        })
            .then((loading) => {
            loading.present();
            console.log("[register onRegisterRFIDListener] ");
            const ev = "android.intent.action.scanner.RFID";
            var isGlobal = true;
            var listener = (event) => {
                console.log(JSON.stringify(event));
                if (event.SCAN_STATE == "success") {
                    this.ngZone.run(() => {
                        console.log("this.bRfid = ", this.bRfid);
                        if (this.bRfid) {
                            loading.dismiss();
                            broadcaster.removeEventListener(ev, listener);
                            this.updateRfid(event.data, asset);
                        }
                    });
                }
            };
            broadcaster.addEventListener(ev, isGlobal, listener);
        });
    }
    clickViewAsset(asset) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('asset>>><<', asset);
            this.bRfid = false;
            this.bBarcode = false;
            const actionSheet = yield this.actionSheetController.create({
                header: "Choose method",
                buttons: [
                    {
                        text: "RFID",
                        icon: "scan",
                        handler: () => {
                            console.log("RFID clicked");
                            this.bBarcode = false;
                            this.bRfid = true;
                            this.onRegisterRFIDListener(asset);
                        },
                    },
                    {
                        text: "QR Code",
                        icon: "qr-code",
                        handler: () => {
                            console.log("QR Code clicked");
                            this.bBarcode = true;
                            this.bRfid = false;
                            this.onRegister2DBarcodeListener(asset);
                        },
                    },
                    {
                        text: "Badge No.",
                        icon: "search",
                        handler: () => {
                            console.log("Badge No. clicked");
                            this.searchBadgeNo(asset);
                        },
                    },
                    {
                        text: "Cancel",
                        role: "cancel",
                        icon: "close",
                        handler: () => {
                            console.log("Cancel clicked");
                        },
                    },
                ],
            });
            yield actionSheet.present();
        });
    }
    // rfid scan
    updateRfid(data, asset) {
        if (this.bRfid)
            this.ngZone.run(() => {
                this.scanValue = data;
                if (this.scanValue != "" || this.scanValue != undefined || this.scanValue != '' || this.scanValue != null) {
                    this.loadingController
                        .create({
                        message: "Please wait...",
                    })
                        .then((loading) => {
                        loading.present();
                        this.assetsService.filter("hex_code=" + this.scanValue).subscribe((res) => {
                            loading.dismiss();
                            // if find, go to asset detail list
                            if (res.length > 0) {
                                if (res[0].badge_no == asset.badge_number) {
                                    let navigationExtras = {
                                        state: {
                                            badge_no: res[0].badge_no,
                                            asset,
                                            work_activity: this.workactivity,
                                        },
                                    };
                                    this.router.navigate(["/technical/work-activity-asset"], navigationExtras);
                                }
                                else {
                                    this.presentAlert("Error", "Batch number not match. Please try again,");
                                }
                            }
                            // else, suggest the user to use QR scanner OR search by badge number
                            else {
                                this.presentAlert("Error", "The asset is not found in the database. Please try again by using QR scanner OR search by badge number.");
                            }
                        }, (err) => {
                            console.log("err assetlsService = ", err);
                            loading.dismiss();
                            this.presentAlert("Error", "Sorry, there is a technical problem going on.");
                        });
                    });
                }
                else {
                    this.presentAlert("Error", "RFID is invalid. Please try again.");
                }
            });
    }
    // qr code
    updateQrbarcode(data, asset) {
        if (this.bBarcode)
            this.ngZone.run(() => {
                this.scanValue = data;
                if (this.scanValue != "") {
                    if (this.scanValue == asset.badge_number) {
                        this.loadingController
                            .create({
                            message: "Please wait...",
                        })
                            .then((loading) => {
                            loading.present();
                            this.assetsService.filter("badge_no=" + this.scanValue).subscribe((res) => {
                                // if find, go to asset detail list
                                if (res.length > 0) {
                                    loading.dismiss();
                                    let navigationExtras = {
                                        state: {
                                            badge_no: res[0].badge_no,
                                            asset
                                        },
                                    };
                                    this.router.navigate(["/technical/work-activity-asset"], navigationExtras);
                                }
                                // else, find the asset in the wams to pump into PIPE's asset table
                                else {
                                    // get data from wams
                                    this.wamsService.getAssetBadgeNo(this.scanValue).subscribe((res) => {
                                        loading.dismiss();
                                        if (res.results.length > 0) {
                                            let navigationExtras = {
                                                state: {
                                                    badge_no: this.scanValue,
                                                    asset,
                                                    work_activity: this.workactivity,
                                                },
                                            };
                                            this.router.navigate(["/technical/work-activity-asset"], navigationExtras);
                                        }
                                        else {
                                            this.presentAlert("Error", "Sorry, asset is not found in the database.");
                                        }
                                    }, (err) => {
                                        console.error("err", err);
                                        loading.dismiss();
                                        this.presentAlert("Error", "Sorry, there is a technical problem going on.");
                                    });
                                }
                            }, (err) => {
                                console.log("err assetlsService = ", err);
                                loading.dismiss();
                                this.presentAlert("Error", "Sorry, there is a technical problem going on.");
                            });
                        });
                    }
                    else {
                        this.warningAlert("Error", "Batch number not match. Please try again,");
                    }
                }
                else {
                    this.presentAlert("Error", "QR code is invalid. Please try again.");
                }
            });
    }
};
WorkActivityPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_7__["NotificationsService"] },
    { type: src_app_shared_services_work_activities_work_activities_service__WEBPACK_IMPORTED_MODULE_8__["WorkActivitiesService"] },
    { type: src_app_shared_services_work_order_activity_completion_AssLocAssList_work_order_activity_completion_AssLocAssList_service__WEBPACK_IMPORTED_MODULE_9__["WorkOrderActivityCompletionAssLocAssListService"] },
    { type: src_app_shared_services_work_order_activity_completion_work_order_activity_completion_service__WEBPACK_IMPORTED_MODULE_10__["WorkOrderActivityCompletionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_6__["AssetsService"] },
    { type: src_app_shared_services_wams_wams_service__WEBPACK_IMPORTED_MODULE_11__["WamsService"] },
    { type: src_app_shared_services_asset_location_sync_asset_location_sync_service__WEBPACK_IMPORTED_MODULE_12__["AssetLocatioSyncService"] },
    { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"] }
];
WorkActivityPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-work-activity",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./work-activity.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/work-activity/work-activity.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./work-activity.page.scss */ "./src/app/pages/technical/work-activity/work-activity.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_7__["NotificationsService"],
        src_app_shared_services_work_activities_work_activities_service__WEBPACK_IMPORTED_MODULE_8__["WorkActivitiesService"],
        src_app_shared_services_work_order_activity_completion_AssLocAssList_work_order_activity_completion_AssLocAssList_service__WEBPACK_IMPORTED_MODULE_9__["WorkOrderActivityCompletionAssLocAssListService"],
        src_app_shared_services_work_order_activity_completion_work_order_activity_completion_service__WEBPACK_IMPORTED_MODULE_10__["WorkOrderActivityCompletionService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_6__["AssetsService"],
        src_app_shared_services_wams_wams_service__WEBPACK_IMPORTED_MODULE_11__["WamsService"],
        src_app_shared_services_asset_location_sync_asset_location_sync_service__WEBPACK_IMPORTED_MODULE_12__["AssetLocatioSyncService"],
        src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"]])
], WorkActivityPage);



/***/ }),

/***/ "./src/app/shared/services/wams/wams.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/wams/wams.service.ts ***!
  \******************************************************/
/*! exports provided: WamsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WamsService", function() { return WamsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let WamsService = class WamsService {
    // url: string = "http://127.0.0.1:8000/v1/wams/services/";
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/wams/services/";
    }
    getService(body) {
        return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log(body.service_name, res);
        }));
    }
    getEmployee() {
        let body = {
            service_name: "getEmployee",
        };
        return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("getEmployee", res);
        }));
    }
    getWorkOrderActivity() {
        let body = {
            service_name: "getWorkOrderActivity",
        };
        return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("getWorkOrderActivity", res);
        }));
    }
    getAssetSyncOutbound() {
        let body = {
            service_name: "getAssetSyncOutbound",
        };
        return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("getAssetSyncOutbound", res);
        }));
    }
    getAssetBadgeNo(badge_no) {
        let body = {
            service_name: "getAsset",
            badge_number: badge_no,
        };
        return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("getAsset", res);
        }));
    }
};
WamsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
WamsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], WamsService);



/***/ }),

/***/ "./src/app/shared/services/work-order-activity-completion/work-order-activity-completion.service.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/shared/services/work-order-activity-completion/work-order-activity-completion.service.ts ***!
  \**********************************************************************************************************/
/*! exports provided: WorkOrderActivityCompletionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOrderActivityCompletionService", function() { return WorkOrderActivityCompletionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let WorkOrderActivityCompletionService = class WorkOrderActivityCompletionService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/work-order-activity-completion/";
        // Data
        this.wamodels = [];
    }
    post(body) {
        return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkOrderActivityCompletionModel", res);
        }));
    }
    get() {
        return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkOrderActivityCompletionModel", res);
            this.wamodels = res;
        }));
    }
    getOne(id) {
        let urlID = this.url + id + "/";
        return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkOrderActivityCompletionModel", res);
            this.wamodel = res;
        }));
    }
    update(id, body) {
        return this.http
            .patch(this.url + id + "/", body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkOrderActivityCompletionModel", res);
        }));
    }
    delete(id) {
        return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkOrderActivityCompletionModel", res);
        }));
    }
    filter(field) {
        let urlFilter = this.url + "?" + field;
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkOrderActivityCompletionModel", res);
        }));
    }
    get_dashboard_status_statistic(body) {
        let url = this.url + "get_dashboard_status_statistic/";
        return this.http.post(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            // console.log("WorkOrderActivityCompletionModel", res);
        }));
    }
    asc_ordered_list(body) {
        let urlOrdered = this.url + "asc_ordered_list/";
        return this.http.post(urlOrdered, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkOrderActivityCompletionModel", res);
        }));
    }
};
WorkOrderActivityCompletionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
WorkOrderActivityCompletionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], WorkOrderActivityCompletionService);



/***/ })

}]);
//# sourceMappingURL=default~pages-technical-work-activity-work-activity-module~work-activity-work-activity-module-es2015.js.map