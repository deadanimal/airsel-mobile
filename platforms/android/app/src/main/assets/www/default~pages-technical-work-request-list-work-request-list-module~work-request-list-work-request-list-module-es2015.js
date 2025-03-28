(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-technical-work-request-list-work-request-list-module~work-request-list-work-request-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/work-request-list/work-request-list.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/work-request-list/work-request-list.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"homePage('/technical/tabs/tab1')\">\n        <ion-icon src=\"../../../../assets/icon/air-selangor-icon.svg\" style=\"font-size: 2rem\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title style=\"font-weight: bold\"> Work Request </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openNotification()\">\n        <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n        <ion-badge size=\"small\" color=\"danger\" style=\"position: absolute; right: -5px; top: 1px\">\n          {{ notificationService.totalnotificationbyuser }}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content-core\">\n  <div class=\"ion-padding\">\n    <div class=\"ion-text-center\">\n      <ion-button color=\"primary\" (click)=\"clickNew()\">New Request</ion-button>\n    </div>\n    <ion-card *ngFor=\"let workrequest of workrequests\">\n      <ion-card-header>\n        <ion-fab horizontal=\"end\">\n          <ion-fab-button *ngIf=\"workrequest.approval_profile == ''\" size=\"small\" color=\"primary\"\n            (click)=\"clickEdit(workrequest)\">\n            <ion-icon name=\"document-text\"></ion-icon>\n          </ion-fab-button>\n\n          <ion-fab-button *ngIf=\"workrequest.approval_profile != ''\" size=\"small\" color=\"success\"\n            (click)=\"clickEdit(workrequest)\">\n            <ion-icon name=\"document-text\"></ion-icon>\n          </ion-fab-button>\n\n          <ion-fab-button *ngIf=\"workrequest.work_request_status == 'CREATED'\" size=\"small\" color=\"tertiary\"\n            (click)=\"clickApprove(workrequest)\">\n            <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n          </ion-fab-button>\n          <!-- <ion-fab-button\n            size=\"small\"\n            color=\"danger\"\n            (click)=\"clickRemove(i)\"\n          >\n            <ion-icon name=\"trash\"></ion-icon>\n          </ion-fab-button> -->\n        </ion-fab>\n        <ion-card-subtitle>Work Request ID</ion-card-subtitle>\n        <ion-card-title><b>{{ workrequest.work_request_id }}</b></ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p>Asset ID: {{ workrequest.asset_id }}</p>\n        <p>Required By Date: {{ workrequest.required_by_date }}</p>\n        <p>Work Category: {{ workrequest.work_category }}</p>\n        <p>Work Class: {{ workrequest.work_class }}</p>\n        <p>Work Priority: {{ workrequest.work_priority }}</p>\n        <p>Status: {{ workrequest.work_request_status | titlecase }}</p>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/technical/work-request-list/work-request-list-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/technical/work-request-list/work-request-list-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: WorkRequestListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkRequestListPageRoutingModule", function() { return WorkRequestListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _work_request_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./work-request-list.page */ "./src/app/pages/technical/work-request-list/work-request-list.page.ts");




const routes = [
    {
        path: '',
        component: _work_request_list_page__WEBPACK_IMPORTED_MODULE_3__["WorkRequestListPage"]
    }
];
let WorkRequestListPageRoutingModule = class WorkRequestListPageRoutingModule {
};
WorkRequestListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WorkRequestListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/technical/work-request-list/work-request-list.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/technical/work-request-list/work-request-list.module.ts ***!
  \*******************************************************************************/
/*! exports provided: WorkRequestListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkRequestListPageModule", function() { return WorkRequestListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _work_request_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./work-request-list-routing.module */ "./src/app/pages/technical/work-request-list/work-request-list-routing.module.ts");
/* harmony import */ var _work_request_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./work-request-list.page */ "./src/app/pages/technical/work-request-list/work-request-list.page.ts");







let WorkRequestListPageModule = class WorkRequestListPageModule {
};
WorkRequestListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _work_request_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["WorkRequestListPageRoutingModule"]
        ],
        declarations: [_work_request_list_page__WEBPACK_IMPORTED_MODULE_6__["WorkRequestListPage"]]
    })
], WorkRequestListPageModule);



/***/ }),

/***/ "./src/app/pages/technical/work-request-list/work-request-list.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/technical/work-request-list/work-request-list.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlY2huaWNhbC93b3JrLXJlcXVlc3QtbGlzdC93b3JrLXJlcXVlc3QtbGlzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/technical/work-request-list/work-request-list.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/technical/work-request-list/work-request-list.page.ts ***!
  \*****************************************************************************/
/*! exports provided: WorkRequestListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkRequestListPage", function() { return WorkRequestListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _approval_profile_approval_profile_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../approval-profile/approval-profile.page */ "./src/app/pages/technical/approval-profile/approval-profile.page.ts");
/* harmony import */ var src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/notifications/notifications.service */ "./src/app/shared/services/notifications/notifications.service.ts");
/* harmony import */ var src_app_shared_services_work_requests_work_requests_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/work-requests/work-requests.service */ "./src/app/shared/services/work-requests/work-requests.service.ts");
/* harmony import */ var src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/assets/assets.service */ "./src/app/shared/services/assets/assets.service.ts");
/* harmony import */ var src_app_shared_services_wams_wams_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/wams/wams.service */ "./src/app/shared/services/wams/wams.service.ts");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");










let WorkRequestListPage = class WorkRequestListPage {
    constructor(route, ngZone, router, actionSheetController, alertController, loadingController, menu, modalController, notificationService, workrequestService, assetService, wamsService, authService) {
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
        this.authService = authService;
        // List
        this.workrequests = [];
        // data
        this.logs = new Array();
        this.bBarcode = false;
        this.bRfid = false;
        this.badge_number = "";
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
        // this.onRegister2DBarcodeListener();
        // this.onRegisterRFIDListener();
        this.getWorkRequest();
    }
    getWorkRequest() {
        console.log("this.authService.userID", this.authService.userID);
        let objUser = {
            userid: this.authService.userID
        };
        console.log("objUser >>>>>>>>>> ", objUser);
        this.workrequestService.desc_order_list(objUser).subscribe((res) => {
            console.log("workrequest res = ", res);
            this.addGetBadgeNumber(res);
        }, (err) => {
            console.error("err", err);
        });
    }
    addGetBadgeNumber(workReqData) {
        this.workrequests = [];
        workReqData.forEach((element) => {
            if (element.asset_id != "")
                this.assetService.filter("asset_id=" + element.asset_id).subscribe((res) => {
                    // console.log("res assetsService = ", res);
                    if (res.length > 0)
                        element.badge_no = res[0].badge_no;
                }, (err) => {
                    // console.log("err assetsService = ", err);
                });
            this.workrequests.push(element);
        });
    }
    ionViewDidEnter() {
        this.getWorkRequest();
    }
    homePage(path) {
        this.router.navigate([path]);
    }
    openNotification() {
        this.menu.enable(true, "menuNotification");
        this.menu.open("menuNotification");
    }
    clickNew() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.bBarcode = false;
            this.bRfid = false;
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
                            console.log("WR RFID clicked");
                            this.onRegisterRFIDListener();
                        },
                    },
                    {
                        text: "QR Code",
                        icon: "qr-code",
                        handler: () => {
                            console.log("QR Code clicked");
                            this.bBarcode = true;
                            this.bRfid = false;
                            console.log("WR QR CODE clicked");
                            this.onRegister2DBarcodeListener();
                        },
                    },
                    {
                        text: "Badge No.",
                        icon: "search",
                        handler: () => {
                            console.log("Badge No. clicked");
                            this.searchBadgeNo();
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
    searchBadgeNo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Badge No.",
                message: "Enter a badge number to search asset",
                inputs: [
                    {
                        name: "badge_no",
                        type: "text",
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
                            if (data.badge_no) {
                                this.loadingController
                                    .create({
                                    message: "Please wait...",
                                })
                                    .then((loading) => {
                                    loading.present();
                                    this.assetService
                                        .filter("badge_no=" + data.badge_no)
                                        .subscribe((res) => {
                                        // if find, go to asset detail list
                                        if (res.length > 0) {
                                            loading.dismiss();
                                            let navigationExtras = {
                                                state: {
                                                    badge_no: res[0].badge_no,
                                                },
                                            };
                                            this.router.navigate(["/technical/work-request"], navigationExtras);
                                        }
                                        // else, find the asset in the wams to pump into PIPE's asset table
                                        else {
                                            // get data from wams
                                            this.wamsService
                                                .getAssetBadgeNo(data.badge_no)
                                                .subscribe((res) => {
                                                loading.dismiss();
                                                if (res.results) {
                                                    let navigationExtras = {
                                                        state: {
                                                            badge_no: data.badge_no,
                                                        },
                                                    };
                                                    this.router.navigate(["/technical/work-request"], navigationExtras);
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
                        },
                    },
                ],
            });
            yield alert.present();
        });
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
    clickEdit(workrequest) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let navigationExtras = {
                state: {
                    workrequest,
                    process: "view",
                },
            };
            this.router.navigate(["/technical/work-request"], navigationExtras);
        });
    }
    clickApprove(workrequest) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _approval_profile_approval_profile_page__WEBPACK_IMPORTED_MODULE_4__["ApprovalProfilePage"],
            });
            modal.onDidDismiss().then((modelData) => {
                if (modelData.data != "") {
                    this.loadingController
                        .create({
                        message: "Please wait for a while...",
                    })
                        .then((loading) => {
                        loading.present();
                        this.submitApprovalProfile(workrequest, modelData.data, loading);
                    });
                }
            });
            return yield modal.present();
        });
    }
    submitApprovalProfile(workrequest, data, loading) {
        let obj = {
            id: workrequest.id,
            work_request_id: workrequest.work_request_id,
            approval_profile: data,
        };
        this.workrequestService.submit_approval_profile(obj).subscribe((res) => {
            if (res) {
                this.presentAlert("Success", 
                // "Your work request have successfully approved."
                // "Work request successfully submitted for approval."
                "Your work request has been successfully submitted for approval");
            }
            loading.dismiss();
        }, (err) => {
            console.error("err", err);
            this.presentAlert("Error", err.error.error_details);
            loading.dismiss();
        }, () => {
            this.getWorkRequest();
        });
    }
    updateRfid(data) {
        if (this.bRfid)
            this.ngZone.run(() => {
                this.scanValue = data;
                if (this.scanValue != "") {
                    this.loadingController
                        .create({
                        message: "Please wait...",
                    })
                        .then((loading) => {
                        loading.present();
                        this.assetService.filter("hex_code=" + this.scanValue).subscribe((res) => {
                            loading.dismiss();
                            // if find, go to asset detail list
                            if (res.length > 0) {
                                let navigationExtras = {
                                    state: {
                                        badge_no: res[0].badge_no,
                                    },
                                };
                                this.router.navigate(["/technical/work-request"], navigationExtras);
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
    updateQrbarcode(data) {
        if (this.bBarcode)
            this.ngZone.run(() => {
                this.scanValue = data;
                if (this.scanValue != "") {
                    this.loadingController
                        .create({
                        message: "Please wait...",
                    })
                        .then((loading) => {
                        loading.present();
                        this.assetService.filter("badge_no=" + this.scanValue).subscribe((res) => {
                            // if find, go to asset detail list
                            if (res.length > 0) {
                                loading.dismiss();
                                let navigationExtras = {
                                    state: {
                                        badge_no: res[0].badge_no,
                                    },
                                };
                                this.router.navigate(["/technical/work-request"], navigationExtras);
                            }
                            // else, find the asset in the wams to pump into PIPE's asset table
                            else {
                                // get data from wams
                                this.wamsService.getAssetBadgeNo(this.scanValue).subscribe((res) => {
                                    loading.dismiss();
                                    if (res.results) {
                                        let navigationExtras = {
                                            state: {
                                                badge_no: this.scanValue,
                                            },
                                        };
                                        this.router.navigate(["/technical/work-request"], navigationExtras);
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
                    this.presentAlert("Error", "QR code is invalid. Please try again.");
                }
            });
    }
    clickRemove(index) {
        this.workrequests.splice(index, 1);
    }
    onRegister2DBarcodeListener() {
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
                            this.updateQrbarcode(event.data);
                        }
                    });
                }
            };
            broadcaster.addEventListener(ev, isGlobal, listener);
        });
    }
    onRegisterRFIDListener() {
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
                            this.updateRfid(event.data);
                        }
                    });
                }
            };
            broadcaster.addEventListener(ev, isGlobal, listener);
        });
    }
};
WorkRequestListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"] },
    { type: src_app_shared_services_work_requests_work_requests_service__WEBPACK_IMPORTED_MODULE_6__["WorkRequestsService"] },
    { type: src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_7__["AssetsService"] },
    { type: src_app_shared_services_wams_wams_service__WEBPACK_IMPORTED_MODULE_8__["WamsService"] },
    { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] }
];
WorkRequestListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-work-request-list",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./work-request-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/work-request-list/work-request-list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./work-request-list.page.scss */ "./src/app/pages/technical/work-request-list/work-request-list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"],
        src_app_shared_services_work_requests_work_requests_service__WEBPACK_IMPORTED_MODULE_6__["WorkRequestsService"],
        src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_7__["AssetsService"],
        src_app_shared_services_wams_wams_service__WEBPACK_IMPORTED_MODULE_8__["WamsService"],
        src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]])
], WorkRequestListPage);



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



/***/ })

}]);
//# sourceMappingURL=default~pages-technical-work-request-list-work-request-list-module~work-request-list-work-request-list-module-es2015.js.map