(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~operational-reading-list-operational-reading-list-module~pages-technical-operational-reading~1dffa3e2"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/operational-reading-list/operational-reading-list.page.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/operational-reading-list/operational-reading-list.page.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"homePage('/technical/tabs/tab1')\">\n        <ion-icon src=\"../../../../assets/icon/air-selangor-icon.svg\" style=\"font-size: 2rem\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title style=\"font-weight: bold\"> Operational Reading </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openNotification()\">\n        <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n        <ion-badge size=\"small\" color=\"danger\" style=\"position: absolute; right: -5px; top: 1px\">\n          {{ notificationService.totalnotificationbyuser }}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content-core\">\n  <div class=\"ion-padding\">\n    <div class=\"ion-text-center\">\n      <ion-button color=\"primary\" (click)=\"clickNew()\">Update</ion-button>\n    </div>\n    <ion-card *ngFor=\"let operationalreading of operationalreadings\">\n      <ion-card-header>\n        <ion-fab horizontal=\"end\">\n          <ion-fab-button size=\"small\" color=\"primary\" (click)=\"clickEdit(operationalreading)\">\n            <ion-icon name=\"document-text\"></ion-icon>\n          </ion-fab-button>\n          <!-- <ion-fab-button\n            size=\"small\"\n            color=\"danger\"\n            (click)=\"clickRemove(i)\"\n          >\n            <ion-icon name=\"trash\"></ion-icon>\n          </ion-fab-button> -->\n        </ion-fab>\n        <ion-card-title>Badge Number<br />{{ operationalreading.badge_number }}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p>Asset ID: {{ operationalreading.asset_id }}</p>\n        <p>Created Date: {{ operationalreading.created_date | date:'dd/MM/yyyy' }}</p>\n        <p>Status: Operational Reading Updated</p>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/technical/operational-reading-list/operational-reading-list-routing.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/technical/operational-reading-list/operational-reading-list-routing.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: OperationalReadingListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationalReadingListPageRoutingModule", function() { return OperationalReadingListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _operational_reading_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operational-reading-list.page */ "./src/app/pages/technical/operational-reading-list/operational-reading-list.page.ts");




const routes = [
    {
        path: '',
        component: _operational_reading_list_page__WEBPACK_IMPORTED_MODULE_3__["OperationalReadingListPage"]
    }
];
let OperationalReadingListPageRoutingModule = class OperationalReadingListPageRoutingModule {
};
OperationalReadingListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OperationalReadingListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/technical/operational-reading-list/operational-reading-list.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/technical/operational-reading-list/operational-reading-list.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: OperationalReadingListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationalReadingListPageModule", function() { return OperationalReadingListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _operational_reading_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./operational-reading-list-routing.module */ "./src/app/pages/technical/operational-reading-list/operational-reading-list-routing.module.ts");
/* harmony import */ var _operational_reading_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./operational-reading-list.page */ "./src/app/pages/technical/operational-reading-list/operational-reading-list.page.ts");







let OperationalReadingListPageModule = class OperationalReadingListPageModule {
};
OperationalReadingListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _operational_reading_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["OperationalReadingListPageRoutingModule"]
        ],
        declarations: [_operational_reading_list_page__WEBPACK_IMPORTED_MODULE_6__["OperationalReadingListPage"]]
    })
], OperationalReadingListPageModule);



/***/ }),

/***/ "./src/app/pages/technical/operational-reading-list/operational-reading-list.page.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/technical/operational-reading-list/operational-reading-list.page.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlY2huaWNhbC9vcGVyYXRpb25hbC1yZWFkaW5nLWxpc3Qvb3BlcmF0aW9uYWwtcmVhZGluZy1saXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/technical/operational-reading-list/operational-reading-list.page.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/technical/operational-reading-list/operational-reading-list.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: OperationalReadingListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationalReadingListPage", function() { return OperationalReadingListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/notifications/notifications.service */ "./src/app/shared/services/notifications/notifications.service.ts");
/* harmony import */ var src_app_shared_services_operational_readings_operational_readings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/operational-readings/operational-readings.service */ "./src/app/shared/services/operational-readings/operational-readings.service.ts");
/* harmony import */ var src_app_shared_services_asset_registrations_asset_registrations_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/asset-registrations/asset-registrations.service */ "./src/app/shared/services/asset-registrations/asset-registrations.service.ts");
/* harmony import */ var src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/assets/assets.service */ "./src/app/shared/services/assets/assets.service.ts");
/* harmony import */ var src_app_shared_services_wams_wams_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/wams/wams.service */ "./src/app/shared/services/wams/wams.service.ts");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");










let OperationalReadingListPage = class OperationalReadingListPage {
    constructor(ngZone, route, router, actionSheetController, alertController, loadingController, menu, modalController, notificationService, assetregistrationService, operationalreadingService, assetsService, wamsService, authService) {
        this.ngZone = ngZone;
        this.route = route;
        this.router = router;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.menu = menu;
        this.modalController = modalController;
        this.notificationService = notificationService;
        this.assetregistrationService = assetregistrationService;
        this.operationalreadingService = operationalreadingService;
        this.assetsService = assetsService;
        this.wamsService = wamsService;
        this.authService = authService;
        // List
        this.operationalreadings = [];
        // data
        this.logs = new Array();
        this.bBarcode = false;
        this.bRfid = false;
    }
    L(...args) {
        let v = args.join(" ");
        console.log(v);
        this.ngZone.run(() => {
            this.logs.push(v);
        });
    }
    ngOnInit() {
        console.log("ngOnInit OperationalReadingListPage");
        broadcaster._debug = true;
        // this.onRegister2DBarcodeListener();
        // this.onRegisterRFIDListener();
    }
    ngOnDestroy() {
        console.log("ngOnDestroy OperationalReadingListPage");
    }
    presentAlert(header, message) {
        this.alertController
            .create({
            header,
            message,
            buttons: ["OK"],
        })
            .then((loading) => {
            loading.present();
        });
    }
    onRegister2DBarcodeListener() {
        this.loadingController
            .create({
            message: "Please scan the QR code...",
            backdropDismiss: true,
            // dismissOnPageChange: true; 
            showBackdrop: true,
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
    getOperationalReading() {
        console.log("this.authService.userID", this.authService.userID);
        let objUser = {
            userid: this.authService.userID
        };
        this.operationalreadingService.getDescOrderList(objUser).subscribe((res) => {
            console.log("this.operationalreadingService res", res);
            this.operationalreadings = res;
            // this.groupByAssetID(res);
        }, (err) => {
            console.error("err", err);
        });
    }
    groupByAssetID(res) {
        let group = res.reduce((r, a) => {
            r[a.asset_id] = [...(r[a.asset_id] || []), a];
            return r;
        }, {});
        this.operationalreadings = group;
    }
    ionViewDidEnter() {
        console.log("ionViewDidEnter OperationalReadingListPage");
        this.getOperationalReading();
    }
    ionViewDidLeave() {
        console.log("ionViewDidLeave OperationalReadingListPage");
        // console.log("broadcaster", broadcaster);
        // if (!this.subscription || this.subscription.closed) return;
        // this.subscription.unsubscribe();
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
            this.bRfid = false;
            this.bBarcode = false;
            const actionSheet = yield this.actionSheetController.create({
                header: "Choose method",
                buttons: [
                    {
                        text: "RFID",
                        icon: "scan",
                        handler: () => {
                            this.bRfid = true;
                            this.bBarcode = false;
                            console.log("OPL RFID clicked");
                            this.onRegisterRFIDListener();
                        },
                    },
                    {
                        text: "QR Code",
                        icon: "qr-code",
                        handler: () => {
                            this.bRfid = false;
                            this.bBarcode = true;
                            console.log("OPL QR Code clicked");
                            this.onRegister2DBarcodeListener();
                        },
                    },
                    {
                        text: "Badge No.",
                        icon: "search",
                        handler: () => {
                            console.log("OPL Badge No. clicked");
                            this.searchBadgeNo();
                        },
                    },
                    {
                        text: "Cancel",
                        role: "cancel",
                        icon: "close",
                        handler: () => {
                            console.log("OPL Cancel clicked");
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
                message: "Enter a badge number to search the asset",
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
                                    this.assetsService
                                        .filter("badge_no=" + data.badge_no)
                                        .subscribe((res) => {
                                        // if find, go to asset detail list
                                        if (res['results'].length > 0) {
                                            loading.dismiss();
                                            let navigationExtras = {
                                                state: {
                                                    badge_no: res['results'][0].badge_no,
                                                },
                                            };
                                            this.router.navigate(["/technical/operational-reading"], navigationExtras);
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
                                                        },
                                                    };
                                                    this.router.navigate(["/technical/operational-reading"], navigationExtras);
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
    clickEdit(operationalreading) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let navigationExtras = {
                state: {
                    operationalreading,
                    process: "view",
                },
            };
            this.router.navigate(["/technical/operational-reading"], navigationExtras);
        });
    }
    clickRemove(index) {
        this.operationalreadings.splice(index, 1);
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
                        this.assetsService.filter("hex_code=" + this.scanValue).subscribe((res) => {
                            loading.dismiss();
                            // if find, go to asset detail list
                            if (res['results'].length > 0) {
                                let navigationExtras = {
                                    state: {
                                        badge_no: res['results'][0].badge_no,
                                    },
                                };
                                this.router.navigate(["/technical/operational-reading"], navigationExtras);
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
                        this.assetsService.filter("badge_no=" + this.scanValue).subscribe((res) => {
                            // if find, go to asset detail list
                            if (res['results'].length > 0) {
                                loading.dismiss();
                                let navigationExtras = {
                                    state: {
                                        badge_no: res['results'][0].badge_no,
                                    },
                                };
                                this.router.navigate(["/technical/operational-reading"], navigationExtras);
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
                                            },
                                        };
                                        this.router.navigate(["/technical/operational-reading"], navigationExtras);
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
};
OperationalReadingListPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"] },
    { type: src_app_shared_services_asset_registrations_asset_registrations_service__WEBPACK_IMPORTED_MODULE_6__["AssetRegistrationsService"] },
    { type: src_app_shared_services_operational_readings_operational_readings_service__WEBPACK_IMPORTED_MODULE_5__["OperationalReadingsService"] },
    { type: src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_7__["AssetsService"] },
    { type: src_app_shared_services_wams_wams_service__WEBPACK_IMPORTED_MODULE_8__["WamsService"] },
    { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] }
];
OperationalReadingListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-operational-reading-list",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./operational-reading-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/operational-reading-list/operational-reading-list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./operational-reading-list.page.scss */ "./src/app/pages/technical/operational-reading-list/operational-reading-list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"],
        src_app_shared_services_asset_registrations_asset_registrations_service__WEBPACK_IMPORTED_MODULE_6__["AssetRegistrationsService"],
        src_app_shared_services_operational_readings_operational_readings_service__WEBPACK_IMPORTED_MODULE_5__["OperationalReadingsService"],
        src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_7__["AssetsService"],
        src_app_shared_services_wams_wams_service__WEBPACK_IMPORTED_MODULE_8__["WamsService"],
        src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]])
], OperationalReadingListPage);



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
//# sourceMappingURL=default~operational-reading-list-operational-reading-list-module~pages-technical-operational-reading~1dffa3e2-es2015.js.map