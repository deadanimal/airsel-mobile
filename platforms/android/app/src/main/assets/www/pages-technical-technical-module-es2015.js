(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-technical-technical-module"],{

/***/ "./node_modules/ion-custom-scrollbar/fesm2015/ion-custom-scrollbar.js":
/*!****************************************************************************!*\
  !*** ./node_modules/ion-custom-scrollbar/fesm2015/ion-custom-scrollbar.js ***!
  \****************************************************************************/
/*! exports provided: IonCustomScrollbarModule, ScrollbarDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonCustomScrollbarModule", function() { return IonCustomScrollbarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollbarDirective", function() { return ScrollbarDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let ScrollbarDirective = class ScrollbarDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngOnInit() {
        this.hostElement = this.elementRef.nativeElement;
        if (this.hostElement && this.hostElement.tagName && this.hostElement.tagName == 'ION-CONTENT') {
            let el = document.createElement('style');
            el.innerText = this.scrollbar || this.getCustomStyle();
            this.hostElement.shadowRoot.appendChild(el);
        }
    }
    getCustomStyle() {
        if (this.allowAllScreens === true || this.allowAllScreens === 'true') {
            return `::-webkit-scrollbar {
          width: 12px;
        }
        ::-webkit-scrollbar-track {
          background: #fff;
        }
        ::-webkit-scrollbar-track:hover {
          background: #f7f7f7;
        }
        ::-webkit-scrollbar-thumb {
          background: #ccc;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #888
        }
        .inner-scroll {
          scrollbar-width: thin
        }`;
        }
        else {
            return `@media(pointer: fine) {
        ::-webkit-scrollbar {
          width: 12px;
        }
        ::-webkit-scrollbar-track {
          background: #fff;
        }
        ::-webkit-scrollbar-track:hover {
          background: #f7f7f7;
        }
        ::-webkit-scrollbar-thumb {
          background: #ccc;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #888
        }
        .inner-scroll {
          scrollbar-width: thin
        }
      }`;
        }
    }
};
ScrollbarDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ScrollbarDirective.prototype, "scrollbar", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ScrollbarDirective.prototype, "allowAllScreens", void 0);
ScrollbarDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[scrollbar]'
    })
], ScrollbarDirective);

let IonCustomScrollbarModule = class IonCustomScrollbarModule {
};
IonCustomScrollbarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [ScrollbarDirective],
        imports: [],
        exports: [ScrollbarDirective]
    })
], IonCustomScrollbarModule);

/*
 * Public API Surface of ion-custom-scrollbar
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ion-custom-scrollbar.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/qr-scanner/qr-scanner.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/qr-scanner/qr-scanner.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"ion-text-center\" style=\"font-weight: bold;\">\n      QR Code\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-fab vertical=\"top\" horizontal=\"end\" edge slot=\"fixed\">\n    <ion-fab-button color=\"light\" (click)=\"backButton()\">\n      <ion-icon name=\"arrow-back-circle-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab> -->\n  <img src=\"assets/image/softwarb_qr_scanner_white.png\" alt=\"\">\n  <div class=\"ion-text-center\" style=\"padding-top: 50px\">\n    <ion-button color=\"primary\" (click)=\"backButton()\">Stop</ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/technical/inventory-info/inventory-info-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/technical/inventory-info/inventory-info-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: InventoryInfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryInfoPageRoutingModule", function() { return InventoryInfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _inventory_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inventory-info.page */ "./src/app/pages/technical/inventory-info/inventory-info.page.ts");




const routes = [
    {
        path: '',
        component: _inventory_info_page__WEBPACK_IMPORTED_MODULE_3__["InventoryInfoPage"]
    }
];
let InventoryInfoPageRoutingModule = class InventoryInfoPageRoutingModule {
};
InventoryInfoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InventoryInfoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/technical/inventory-info/inventory-info.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/technical/inventory-info/inventory-info.module.ts ***!
  \*************************************************************************/
/*! exports provided: InventoryInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryInfoPageModule", function() { return InventoryInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _inventory_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inventory-info-routing.module */ "./src/app/pages/technical/inventory-info/inventory-info-routing.module.ts");
/* harmony import */ var _inventory_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inventory-info.page */ "./src/app/pages/technical/inventory-info/inventory-info.page.ts");







let InventoryInfoPageModule = class InventoryInfoPageModule {
};
InventoryInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inventory_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["InventoryInfoPageRoutingModule"]
        ],
        declarations: [_inventory_info_page__WEBPACK_IMPORTED_MODULE_6__["InventoryInfoPage"]]
    })
], InventoryInfoPageModule);



/***/ }),

/***/ "./src/app/pages/technical/qr-scanner/qr-scanner.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/technical/qr-scanner/qr-scanner.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: 50%;\n  max-width: 95%;\n  max-height: calc(98% - 100px);\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  /* bring your own prefixes */\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wbnNiL0RvY3VtZW50cy9HaXRIdWIvYWlyc2VsLXJmaWQvbW9iaWxlL3NyYy9hcHAvcGFnZXMvdGVjaG5pY2FsL3FyLXNjYW5uZXIvcXItc2Nhbm5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGVjaG5pY2FsL3FyLXNjYW5uZXIvcXItc2Nhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFFQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlY2huaWNhbC9xci1zY2FubmVyL3FyLXNjYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICB3aWR0aDogNTAlO1xuICAvLyBvcGFjaXR5OiAwLjU7XG4gIG1heC13aWR0aDogOTUlO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDk4JSAtIDEwMHB4KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAvKiBicmluZyB5b3VyIG93biBwcmVmaXhlcyAqL1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbiIsImltZyB7XG4gIHdpZHRoOiA1MCU7XG4gIG1heC13aWR0aDogOTUlO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDk4JSAtIDEwMHB4KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAvKiBicmluZyB5b3VyIG93biBwcmVmaXhlcyAqL1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/technical/qr-scanner/qr-scanner.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/technical/qr-scanner/qr-scanner.component.ts ***!
  \********************************************************************/
/*! exports provided: QrScannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrScannerComponent", function() { return QrScannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/ngx/index.js");





let QrScannerComponent = class QrScannerComponent {
    constructor(menu, navCtrl, toastCtrl, route, router, qrScanner) {
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.route = route;
        this.router = router;
        this.qrScanner = qrScanner;
        this.route.queryParams.subscribe((params) => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.link = this.router.getCurrentNavigation().extras.state.link;
                console.log("link", this.link);
                if (this.router.getCurrentNavigation().extras.state.asset)
                    this.workactivityasset = this.router.getCurrentNavigation().extras.state.asset;
            }
        });
    }
    ngOnInit() {
        this.menu.enable(false, "menuNotification");
    }
    ionViewWillEnter() {
        this.scan();
    }
    ionViewWillLeave() {
        this.stopScanning();
    }
    backButton() {
        this.ionViewWillLeave();
        this.toastCtrl.dismiss();
        if (this.scanText) {
            let navigationExtras = {
                state: {
                    qrcode: this.scanText,
                    asset: this.workactivityasset
                },
            };
            this.router.navigate([this.link], navigationExtras);
        }
        else {
            this.router.navigate([this.link]);
        }
        // this.router.navigate(['/inventory/stock-receive']);
        // this.navCtrl.navigateBack("/inventory/stock-receive");
    }
    scan() {
        // const ionApp = <HTMLElement>document.getElementsByTagName('ion-app')[0];
        window.document.querySelector("ion-app").classList.add("cameraView");
        this.qrScanner
            .prepare()
            .then((status) => {
            if (status.authorized) {
                this.qrScanner.show();
                // ionApp.style.display = "none";
                this.scanSubscription = this.qrScanner
                    .scan()
                    .subscribe((text) => {
                    this.scanText = text;
                    this.presentToast();
                });
            }
            else {
                console.error("Permission Denied", status);
            }
        })
            .catch((e) => {
            console.error("Error", e);
        });
    }
    stopScanning() {
        // const ionApp = <HTMLElement>document.getElementsByTagName('ion-app')[0];
        this.scanSubscription ? this.scanSubscription.unsubscribe() : null;
        this.scanSubscription = null;
        window.document.querySelector("ion-app").classList.remove("cameraView");
        this.qrScanner.hide();
        this.qrScanner.destroy();
        // ionApp.style.display = "block";
    }
    presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                header: "Air Selangor QR Code",
                message: this.scanText,
                buttons: [
                    {
                        text: "Done",
                        handler: () => {
                            this.backButton();
                        },
                    },
                ],
            });
            toast.present();
        });
    }
};
QrScannerComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["QRScanner"] }
];
QrScannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-qr-scanner",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./qr-scanner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/qr-scanner/qr-scanner.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./qr-scanner.component.scss */ "./src/app/pages/technical/qr-scanner/qr-scanner.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["QRScanner"]])
], QrScannerComponent);



/***/ }),

/***/ "./src/app/pages/technical/technical.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/technical/technical.module.ts ***!
  \*****************************************************/
/*! exports provided: TechnicalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnicalModule", function() { return TechnicalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var ion_custom_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ion-custom-scrollbar */ "./node_modules/ion-custom-scrollbar/fesm2015/ion-custom-scrollbar.js");
/* harmony import */ var _technical_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./technical.routing */ "./src/app/pages/technical/technical.routing.ts");
/* harmony import */ var _inventory_info_inventory_info_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inventory-info/inventory-info.module */ "./src/app/pages/technical/inventory-info/inventory-info.module.ts");
/* harmony import */ var _qr_scanner_qr_scanner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./qr-scanner/qr-scanner.component */ "./src/app/pages/technical/qr-scanner/qr-scanner.component.ts");
/* harmony import */ var _service_history_service_history_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service-history/service-history.module */ "./src/app/pages/technical/service-history/service-history.module.ts");
/* harmony import */ var _work_request_work_request_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./work-request/work-request.module */ "./src/app/pages/technical/work-request/work-request.module.ts");
/* harmony import */ var _operational_reading_operational_reading_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./operational-reading/operational-reading.module */ "./src/app/pages/technical/operational-reading/operational-reading.module.ts");
/* harmony import */ var _measurement_type_measurement_type_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./measurement-type/measurement-type.module */ "./src/app/pages/technical/measurement-type/measurement-type.module.ts");
/* harmony import */ var _approval_profile_approval_profile_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./approval-profile/approval-profile.module */ "./src/app/pages/technical/approval-profile/approval-profile.module.ts");


// import { BrowserModule } from "@angular/platform-browser";













let TechnicalModule = class TechnicalModule {
};
TechnicalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_qr_scanner_qr_scanner_component__WEBPACK_IMPORTED_MODULE_9__["QrScannerComponent"]],
        entryComponents: [],
        imports: [
            // BrowserModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _inventory_info_inventory_info_module__WEBPACK_IMPORTED_MODULE_8__["InventoryInfoPageModule"],
            _service_history_service_history_module__WEBPACK_IMPORTED_MODULE_10__["ServiceHistoryPageModule"],
            _work_request_work_request_module__WEBPACK_IMPORTED_MODULE_11__["WorkRequestPageModule"],
            _operational_reading_operational_reading_module__WEBPACK_IMPORTED_MODULE_12__["OperationalReadingPageModule"],
            _measurement_type_measurement_type_module__WEBPACK_IMPORTED_MODULE_13__["MeasurementTypePageModule"],
            _approval_profile_approval_profile_module__WEBPACK_IMPORTED_MODULE_14__["ApprovalProfilePageModule"],
            ion_custom_scrollbar__WEBPACK_IMPORTED_MODULE_6__["IonCustomScrollbarModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(),
            _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_4__["LeafletModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_technical_routing__WEBPACK_IMPORTED_MODULE_7__["TechnicalRoutes"])
        ]
    })
], TechnicalModule);



/***/ }),

/***/ "./src/app/pages/technical/technical.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/technical/technical.routing.ts ***!
  \******************************************************/
/*! exports provided: TechnicalRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnicalRoutes", function() { return TechnicalRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _qr_scanner_qr_scanner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr-scanner/qr-scanner.component */ "./src/app/pages/technical/qr-scanner/qr-scanner.component.ts");


const TechnicalRoutes = [
    {
        path: "",
        children: [
            {
                path: "tabs",
                loadChildren: () => __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "./src/app/pages/technical/tabs/tabs.module.ts")).then((m) => m.TabsPageModule),
            },
            {
                path: "work-order",
                loadChildren: () => __webpack_require__.e(/*! import() | work-order-work-order-module */ "work-order-work-order-module").then(__webpack_require__.bind(null, /*! ./work-order/work-order.module */ "./src/app/pages/technical/work-order/work-order.module.ts")).then((m) => m.WorkOrderPageModule),
            },
            {
                path: "form-first",
                loadChildren: () => Promise.all(/*! import() | form-first-form-first-module */[__webpack_require__.e("default~asset-detail-asset-detail-module~asset-registration-asset-registration-module~form-first-for~d139a6b1"), __webpack_require__.e("form-first-form-first-module")]).then(__webpack_require__.bind(null, /*! ./form-first/form-first.module */ "./src/app/pages/technical/form-first/form-first.module.ts")).then((m) => m.FormFirstPageModule),
            },
            {
                path: "work-request",
                loadChildren: () => Promise.all(/*! import() | work-request-work-request-module */[__webpack_require__.e("default~pages-technical-technical-module~work-request-work-request-module"), __webpack_require__.e("work-request-work-request-module")]).then(__webpack_require__.bind(null, /*! ./work-request/work-request.module */ "./src/app/pages/technical/work-request/work-request.module.ts")).then((m) => m.WorkRequestPageModule),
            },
            {
                path: "asset-location",
                loadChildren: () => __webpack_require__.e(/*! import() | asset-location-asset-location-module */ "asset-location-asset-location-module").then(__webpack_require__.bind(null, /*! ./asset-location/asset-location.module */ "./src/app/pages/technical/asset-location/asset-location.module.ts")).then((m) => m.AssetLocationPageModule),
            },
            {
                path: "submit",
                loadChildren: () => __webpack_require__.e(/*! import() | submit-submit-module */ "submit-submit-module").then(__webpack_require__.bind(null, /*! ./submit/submit.module */ "./src/app/pages/technical/submit/submit.module.ts")).then((m) => m.SubmitPageModule),
            },
            {
                path: "maintenance-work-list",
                loadChildren: () => __webpack_require__.e(/*! import() | maintenance-work-list-maintenance-work-list-module */ "default~maintenance-work-list-maintenance-work-list-module~pages-technical-maintenance-work-list-mai~328f7f95").then(__webpack_require__.bind(null, /*! ./maintenance-work-list/maintenance-work-list.module */ "./src/app/pages/technical/maintenance-work-list/maintenance-work-list.module.ts")).then((m) => m.MaintenanceWorkListPageModule),
            },
            {
                path: "maintenance-work-detail",
                loadChildren: () => __webpack_require__.e(/*! import() | maintenance-work-detail-maintenance-work-detail-module */ "default~maintenance-work-detail-maintenance-work-detail-module~pages-technical-maintenance-work-deta~17b9ee52").then(__webpack_require__.bind(null, /*! ./maintenance-work-detail/maintenance-work-detail.module */ "./src/app/pages/technical/maintenance-work-detail/maintenance-work-detail.module.ts")).then((m) => m.MaintenanceWorkDetailPageModule),
            },
            {
                path: "asset-detail",
                loadChildren: () => Promise.all(/*! import() | asset-detail-asset-detail-module */[__webpack_require__.e("default~asset-detail-asset-detail-module~asset-registration-asset-registration-module~form-first-for~d139a6b1"), __webpack_require__.e("default~asset-detail-asset-detail-module~pages-technical-asset-detail-asset-detail-module"), __webpack_require__.e("asset-detail-asset-detail-module")]).then(__webpack_require__.bind(null, /*! ./asset-detail/asset-detail.module */ "./src/app/pages/technical/asset-detail/asset-detail.module.ts")).then((m) => m.AssetDetailPageModule),
            },
            {
                path: "asset-detail-list",
                loadChildren: () => __webpack_require__.e(/*! import() | asset-detail-list-asset-detail-list-module */ "common").then(__webpack_require__.bind(null, /*! ./asset-detail-list/asset-detail-list.module */ "./src/app/pages/technical/asset-detail-list/asset-detail-list.module.ts")).then((m) => m.AssetDetailListPageModule),
            },
            {
                path: "asset-registration",
                loadChildren: () => Promise.all(/*! import() | asset-registration-asset-registration-module */[__webpack_require__.e("default~asset-detail-asset-detail-module~asset-registration-asset-registration-module~form-first-for~d139a6b1"), __webpack_require__.e("asset-registration-asset-registration-module")]).then(__webpack_require__.bind(null, /*! ./asset-registration/asset-registration.module */ "./src/app/pages/technical/asset-registration/asset-registration.module.ts")).then((m) => m.AssetRegistrationPageModule),
            },
            {
                path: "work-activity",
                loadChildren: () => __webpack_require__.e(/*! import() | work-activity-work-activity-module */ "default~pages-technical-work-activity-work-activity-module~work-activity-work-activity-module").then(__webpack_require__.bind(null, /*! ./work-activity/work-activity.module */ "./src/app/pages/technical/work-activity/work-activity.module.ts")).then((m) => m.WorkActivityPageModule),
            },
            {
                path: "work-activity-asset",
                loadChildren: () => __webpack_require__.e(/*! import() | work-activity-asset-work-activity-asset-module */ "default~pages-technical-work-activity-asset-work-activity-asset-module~work-activity-asset-work-acti~ae4b2a7c").then(__webpack_require__.bind(null, /*! ./work-activity-asset/work-activity-asset.module */ "./src/app/pages/technical/work-activity-asset/work-activity-asset.module.ts")).then((m) => m.WorkActivityAssetPageModule),
            },
            {
                path: "service-history",
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./service-history/service-history.module */ "./src/app/pages/technical/service-history/service-history.module.ts")).then((m) => m.ServiceHistoryPageModule),
            },
            {
                path: "work-request-list",
                loadChildren: () => __webpack_require__.e(/*! import() | work-request-list-work-request-list-module */ "default~pages-technical-work-request-list-work-request-list-module~work-request-list-work-request-list-module").then(__webpack_require__.bind(null, /*! ./work-request-list/work-request-list.module */ "./src/app/pages/technical/work-request-list/work-request-list.module.ts")).then((m) => m.WorkRequestListPageModule),
            },
            {
                path: "operational-reading",
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./operational-reading/operational-reading.module */ "./src/app/pages/technical/operational-reading/operational-reading.module.ts")).then((m) => m.OperationalReadingPageModule),
            },
            {
                path: "operational-reading-list",
                loadChildren: () => __webpack_require__.e(/*! import() | operational-reading-list-operational-reading-list-module */ "default~operational-reading-list-operational-reading-list-module~pages-technical-operational-reading~1dffa3e2").then(__webpack_require__.bind(null, /*! ./operational-reading-list/operational-reading-list.module */ "./src/app/pages/technical/operational-reading-list/operational-reading-list.module.ts")).then((m) => m.OperationalReadingListPageModule),
            },
            {
                path: "measurement-type",
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./measurement-type/measurement-type.module */ "./src/app/pages/technical/measurement-type/measurement-type.module.ts")).then((m) => m.MeasurementTypePageModule),
            },
            {
                path: "asset-registration-list",
                loadChildren: () => __webpack_require__.e(/*! import() | asset-registration-list-asset-registration-list-module */ "common").then(__webpack_require__.bind(null, /*! ./asset-registration-list/asset-registration-list.module */ "./src/app/pages/technical/asset-registration-list/asset-registration-list.module.ts")).then((m) => m.AssetRegistrationListPageModule),
            },
            {
                path: "qr-scanner",
                component: _qr_scanner_qr_scanner_component__WEBPACK_IMPORTED_MODULE_1__["QrScannerComponent"],
            },
        ],
    },
];


/***/ })

}]);
//# sourceMappingURL=pages-technical-technical-module-es2015.js.map