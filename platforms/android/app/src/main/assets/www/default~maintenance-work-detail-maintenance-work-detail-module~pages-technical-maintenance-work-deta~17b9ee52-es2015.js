(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~maintenance-work-detail-maintenance-work-detail-module~pages-technical-maintenance-work-deta~17b9ee52"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/maintenance-work-detail/maintenance-work-detail.page.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/maintenance-work-detail/maintenance-work-detail.page.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <!-- <ion-fab horizontal=\"end\" *ngIf=\"type == 'pending'\">\n    <ion-fab-button\n      fill=\"clear\"\n      size=\"small\"\n      color=\"transparent\"\n      (click)=\"openInfo()\"\n    >\n      <ion-icon color=\"light\" name=\"information-circle\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab> -->\n  <ion-toolbar mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"clickBack()\">\n        <ion-icon src=\"../../../../assets/icon/air-selangor-icon.svg\" style=\"font-size: 2rem\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <div class=\"ion-text-center ion-text-wrap\" style=\"font-weight: bold\">\n      {{ statuses }}\n    </div> \n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon color=\"first\" slot=\"icon-only\" name=\"notifications\"></ion-icon>\n        <ion-badge size=\"small\" color=\"danger\" style=\"position: absolute; right: -5px; top: 1px\">\n          {{ notificationService.totalnotificationbyuser }}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content-core\">\n  <div class=\"ion-text-center\">\n    <img [src]=\"image\" style=\"width: 30%\" />\n    <h4 style=\"color: var(--ion-color-primary)\">{{ name }}</h4>\n  </div>\n  <!-- <div *ngIf=\"workactivities.length != 0\">\n    <h6 class=\"ion-text-center\">You have Id {{ status }} Work Activity</h6>\n  </div> -->\n  <ion-card *ngFor=\"let workactivity of workactivitiesDatas\">\n    <ion-card-header>\n      <ion-fab horizontal=\"end\">\n        <ion-fab-button *ngIf=\"workactivity.field_2 == ''\" size=\"small\" color=\"light\"\n          (click)=\"presentAlertConfirm(workactivity)\">\n          <ion-icon name=\"build\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button *ngIf=\"workactivity.field_2 != ''\" size=\"small\" color=\"light\"\n          (click)=\"clickWorkActivity(workactivity)\">\n          <ion-icon name=\"build\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n      <ion-card-title>Work Activity ID</ion-card-title>\n      <ion-card-subtitle>{{ workactivity.activityid }}</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <p style=\"font-size:15px;font-weight: bold;\">Required By Date: {{ workactivity.required_by_dt }}</p>\n      <p>Status: {{ workactivity.status }}</p>\n      <p>Parent Location: {{ workactivity.assetLocatioSyncdata }}</p>\n      <p class=\"ion-text-justify\">\n        Description: {{ workactivity.descrlong }}\n      </p>\n    </ion-card-content>\n  </ion-card>\n  <div style=\"padding-bottom: 200px;\">&nbsp;</div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/technical/maintenance-work-detail/maintenance-work-detail-routing.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/technical/maintenance-work-detail/maintenance-work-detail-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: MaintenanceWorkDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceWorkDetailPageRoutingModule", function() { return MaintenanceWorkDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _maintenance_work_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maintenance-work-detail.page */ "./src/app/pages/technical/maintenance-work-detail/maintenance-work-detail.page.ts");




const routes = [
    {
        path: '',
        component: _maintenance_work_detail_page__WEBPACK_IMPORTED_MODULE_3__["MaintenanceWorkDetailPage"]
    }
];
let MaintenanceWorkDetailPageRoutingModule = class MaintenanceWorkDetailPageRoutingModule {
};
MaintenanceWorkDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MaintenanceWorkDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/technical/maintenance-work-detail/maintenance-work-detail.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/technical/maintenance-work-detail/maintenance-work-detail.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: MaintenanceWorkDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceWorkDetailPageModule", function() { return MaintenanceWorkDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _maintenance_work_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maintenance-work-detail-routing.module */ "./src/app/pages/technical/maintenance-work-detail/maintenance-work-detail-routing.module.ts");
/* harmony import */ var _maintenance_work_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./maintenance-work-detail.page */ "./src/app/pages/technical/maintenance-work-detail/maintenance-work-detail.page.ts");







let MaintenanceWorkDetailPageModule = class MaintenanceWorkDetailPageModule {
};
MaintenanceWorkDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _maintenance_work_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["MaintenanceWorkDetailPageRoutingModule"]
        ],
        declarations: [_maintenance_work_detail_page__WEBPACK_IMPORTED_MODULE_6__["MaintenanceWorkDetailPage"]]
    })
], MaintenanceWorkDetailPageModule);



/***/ }),

/***/ "./src/app/pages/technical/maintenance-work-detail/maintenance-work-detail.page.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/technical/maintenance-work-detail/maintenance-work-detail.page.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-segment-button {\n  --indicator-color: #A6423D;\n  --indicator-height: 3px;\n}\n\n.nopaddingstart {\n  --padding-start: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wbnNiL0RvY3VtZW50cy9HaXRIdWIvYWlyc2VsLXJmaWQvbW9iaWxlL3NyYy9hcHAvcGFnZXMvdGVjaG5pY2FsL21haW50ZW5hbmNlLXdvcmstZGV0YWlsL21haW50ZW5hbmNlLXdvcmstZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGVjaG5pY2FsL21haW50ZW5hbmNlLXdvcmstZGV0YWlsL21haW50ZW5hbmNlLXdvcmstZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90ZWNobmljYWwvbWFpbnRlbmFuY2Utd29yay1kZXRhaWwvbWFpbnRlbmFuY2Utd29yay1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgLS1pbmRpY2F0b3ItY29sb3I6ICNBNjQyM0Q7XG4gIC0taW5kaWNhdG9yLWhlaWdodDogM3B4O1xufVxuXG4ubm9wYWRkaW5nc3RhcnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cbiIsImlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiAjQTY0MjNEO1xuICAtLWluZGljYXRvci1oZWlnaHQ6IDNweDtcbn1cblxuLm5vcGFkZGluZ3N0YXJ0IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/technical/maintenance-work-detail/maintenance-work-detail.page.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/technical/maintenance-work-detail/maintenance-work-detail.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: MaintenanceWorkDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceWorkDetailPage", function() { return MaintenanceWorkDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _inventory_info_inventory_info_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../inventory-info/inventory-info.page */ "./src/app/pages/technical/inventory-info/inventory-info.page.ts");
/* harmony import */ var src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/notifications/notifications.service */ "./src/app/shared/services/notifications/notifications.service.ts");
/* harmony import */ var src_app_shared_services_work_activities_work_activities_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/work-activities/work-activities.service */ "./src/app/shared/services/work-activities/work-activities.service.ts");
/* harmony import */ var src_app_shared_services_asset_location_sync_asset_location_sync_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/asset-location-sync/asset-location-sync.service */ "./src/app/shared/services/asset-location-sync/asset-location-sync.service.ts");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var src_app_shared_services_work_order_activity_completion_work_order_activity_completion_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/work-order-activity-completion/work-order-activity-completion.service */ "./src/app/shared/services/work-order-activity-completion/work-order-activity-completion.service.ts");











let MaintenanceWorkDetailPage = class MaintenanceWorkDetailPage {
    constructor(formBuilder, alertController, menu, modalController, route, router, notificationService, assetLocatioSyncService, workactivityService, authService, workOrderActivityCompletionService) {
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.menu = menu;
        this.modalController = modalController;
        this.route = route;
        this.router = router;
        this.notificationService = notificationService;
        this.assetLocatioSyncService = assetLocatioSyncService;
        this.workactivityService = workactivityService;
        this.authService = authService;
        this.workOrderActivityCompletionService = workOrderActivityCompletionService;
        this.category = 99;
        this.categorys = [
            {
                value: 99,
                name: "All",
            },
            {
                value: "New",
                name: "New",
            },
            {
                value: "InProgress",
                name: "InProgress",
            },
            {
                value: "BackLog",
                name: "BackLog",
            },
        ];
        this.type = "";
        this.status = "";
        this.statuses = "";
        this.image = "";
        this.name = "";
        // List
        this.pendings = [];
        this.completeds = [];
        this.workactivities = [];
        this.workactivitiesDatas = [];
        this.userIdLogIn = '';
        this.userIdLogIn = this.authService.userID;
        this.workactivityFormGroup = this.formBuilder.group({
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
                this.type = this.router.getCurrentNavigation().extras.state.type;
                this.status = this.router.getCurrentNavigation().extras.state.status;
                this.workactivities = this.router.getCurrentNavigation().extras.state.work_activity;
                console.log("this.router.getCurrentNavigation().extras.state", this.router.getCurrentNavigation().extras.state);
                this.workactivities.forEach(eleWorAct => {
                    console.log("this.status", this.status);
                    console.log("eleWorAct.status", eleWorAct.status);
                    if (eleWorAct.status == this.status) {
                        //            if (eleWorAct.field_2 == '' || eleWorAct.field_2 == this.authService.userID) {
                        console.log("eleWorAct>>>", eleWorAct);
                        this.workactivitiesDatas.push(eleWorAct);
                        eleWorAct.status = (eleWorAct.status == 'InProgress' ? 'Active' : (eleWorAct.status == 'BackLog' ? 'Backlog' : eleWorAct.status));
                        this.statuses = eleWorAct.status;
                        this.assetLocatioSyncService.filter("node_id=" + eleWorAct.node_id_1).subscribe((res) => {
                            console.log("assetLocatioSyncServiceres", res);
                            // this.assetregistrations = res;
                            if (res.length > 0) {
                                this.assetLocatioSyncdata = res[0].description;
                                eleWorAct.assetLocatioSyncdata = res[0].description;
                                // console.log(" this.assetLocatioSyncdata = ", this.assetLocatioSyncdata)
                            }
                            else {
                                this.assetLocatioSyncdata = '-';
                                eleWorAct.assetLocatioSyncdata = '-';
                            }
                        }, (err) => {
                            console.error("err", err);
                        });
                        //            }
                    }
                });
                // console.log("this.workactivities = ", this.workactivities)
                // console.log("this.status = ", this.status)
                // console.log("this.type = ", this.type)
                this.image = '../../../../assets/technical/' + this.router.getCurrentNavigation().extras.state.image;
                this.name = this.router.getCurrentNavigation().extras.state.name;
                // this.pendings = this.workactivities.filter((data) => {
                //   if (data.status.toString().indexOf("New") !== -1) return true;
                //   this.workactivitiesData.push(data)
                //   if (data.status.toString().indexOf("InProgress") !== -1)
                //     return true;
                //   if (data.status.toString().indexOf("BackLog") !== -1) return true;
                //   return false;
                // });
                // this.completeds = this.workactivities.filter((data) => {
                //   if (data.bo_status.toString().indexOf("Completed") !== -1)
                //     return true;
                //   return false;
                // });
                // filter status based on BO_STATUS_CD from WAMS
                // this.pendings = this.workactivities.filter((data) => {
                //   if (data.BO_STATUS_CD.toString().toLowerCase().indexOf("nw") !== -1)
                //     return true;
                //   if (data.BO_STATUS_CD.toString().toLowerCase().indexOf("ip") !== -1)
                //     return true;
                //   if (data.BO_STATUS_CD.toString().toLowerCase().indexOf("bl") !== -1)
                //     return true;
                //   return false;
                // });
                // this.completeds = this.workactivities.filter((data) => {
                //   if (data.BO_STATUS_CD.toString().toLowerCase().indexOf("active") !== -1)
                //     return true;
                //   return false;
                // });
            }
        });
    }
    ngOnInit() {
        this.menu.enable(false, "menuNotification");
        this.items = this.pendings;
    }
    initializeItems() {
        this.pendings = this.items;
    }
    categorySelect() {
        this.initializeItems();
        this.pendings = this.pendings.filter((pending) => {
            if (this.category === 99)
                return true;
            else
                return pending.bo_status === this.category;
        });
    }
    dateSelectPending() {
        this.initializeItems();
        console.log("startdatePending", this.startdatePending);
        console.log("enddatePending", this.enddatePending);
        // this.pendings = this.pendings.filter((pending) => {
        //   if (this.startdatePending && this.enddatePending) {
        //     if (
        //       pending.created_at.getDate() >= this.startdatePending.getDate() &&
        //       pending.created_at.getDate() <= this.enddatePending.getDate()
        //     )
        //       return pending;
        //   }
        // });
    }
    notesAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Notes",
                message: "Your submission is rejected due to wrong asset information. Please resubmit again. Thank you.",
                buttons: ["OK"],
            });
            yield alert.present();
        });
    }
    openInfo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const myModal = yield this.modalController.create({
                component: _inventory_info_inventory_info_page__WEBPACK_IMPORTED_MODULE_5__["InventoryInfoPage"],
                cssClass: "my-custom-modal-css",
            });
            return yield myModal.present();
        });
    }
    clickLogout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Logout",
                message: "Are you want to logout?",
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        handler: () => { },
                    },
                    {
                        text: "Yes, logout it!",
                        handler: () => {
                            this.router.navigate(["/"]);
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
    clickWorkActivity(work_activity) {
        console.log("work_activity.id------>>>>", work_activity);
        if (work_activity.field_2 == '') {
            console.log("masuk sini field_2", this.authService.userID);
            if (work_activity.status == 'New') {
                console.log("status-----new----", this.authService.userID);
                let workOrderActivityFormGroup = {
                    status: "InProgress",
                    field_2: this.authService.userID,
                };
                console.log("workOrderActivityFormGroup >>>>>>> ", workOrderActivityFormGroup);
                this.workOrderActivityCompletionService
                    .update(work_activity.id, workOrderActivityFormGroup)
                    .subscribe((res) => {
                    console.log("workOrderActivityCompletionService--res", res);
                }, (err) => {
                    console.log("workOrderActivityCompletionService--err", err);
                });
            }
            else if (work_activity.status == 'Backlog') {
                console.log("qqqqqqqqqqq---------");
                let workOrderActivityFormGroup = {
                    field_2: this.authService.userID,
                };
                console.log("workOrderActivityFormGroup >>>>>>> ", workOrderActivityFormGroup);
                this.workOrderActivityCompletionService
                    .update(work_activity.id, workOrderActivityFormGroup)
                    .subscribe((res) => {
                    console.log("workOrderActivityCompletionService--res", res);
                }, (err) => {
                    console.log("workOrderActivityCompletionService--err", err);
                });
            }
        }
        if (work_activity.bo_status == "New") {
            this.workactivityFormGroup.patchValue(Object.assign({}, work_activity, { bo_status: "InProgress" }));
            this.workactivityService
                .update(work_activity.id, this.workactivityFormGroup.value)
                .subscribe((res) => {
                console.log("res", res);
            }, (err) => {
                console.error("err", err);
            });
            work_activity.status = "InProgress";
        }
        let navigationExtras = {
            state: {
                work_activity: work_activity,
            },
        };
        console.log("navigationExtras = ", navigationExtras);
        // this.router.navigate(['/technical/work-order'], navigationExtras);
        // this.router.navigate(["/technical/qr-scanner"], navigationExtras);
        this.router.navigate(["/technical/work-activity"], navigationExtras);
    }
    pendingColor(status) {
        if (status == "New")
            return "success";
        if (status == "InProgress")
            return "warning";
        if (status == "BackLog")
            return "danger";
    }
    clickBack() {
        this.router.navigate(["/technical/maintenance-work-list"]);
    }
    presentAlertConfirm(workactivity) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: 'Are you sure you want to proceed?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => {
                            this.clickWorkActivity(workactivity);
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
MaintenanceWorkDetailPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_6__["NotificationsService"] },
    { type: src_app_shared_services_asset_location_sync_asset_location_sync_service__WEBPACK_IMPORTED_MODULE_8__["AssetLocatioSyncService"] },
    { type: src_app_shared_services_work_activities_work_activities_service__WEBPACK_IMPORTED_MODULE_7__["WorkActivitiesService"] },
    { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: src_app_shared_services_work_order_activity_completion_work_order_activity_completion_service__WEBPACK_IMPORTED_MODULE_10__["WorkOrderActivityCompletionService"] }
];
MaintenanceWorkDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-maintenance-work-detail",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./maintenance-work-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/maintenance-work-detail/maintenance-work-detail.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./maintenance-work-detail.page.scss */ "./src/app/pages/technical/maintenance-work-detail/maintenance-work-detail.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_6__["NotificationsService"],
        src_app_shared_services_asset_location_sync_asset_location_sync_service__WEBPACK_IMPORTED_MODULE_8__["AssetLocatioSyncService"],
        src_app_shared_services_work_activities_work_activities_service__WEBPACK_IMPORTED_MODULE_7__["WorkActivitiesService"],
        src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
        src_app_shared_services_work_order_activity_completion_work_order_activity_completion_service__WEBPACK_IMPORTED_MODULE_10__["WorkOrderActivityCompletionService"]])
], MaintenanceWorkDetailPage);



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
//# sourceMappingURL=default~maintenance-work-detail-maintenance-work-detail-module~pages-technical-maintenance-work-deta~17b9ee52-es2015.js.map