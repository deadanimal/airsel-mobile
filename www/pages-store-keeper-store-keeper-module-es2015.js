(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-store-keeper-store-keeper-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-keeper/qr-scanner/qr-scanner.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-keeper/qr-scanner/qr-scanner.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"air-selangor-toolbar\">\n    <div class=\"ion-text-center\" style=\"font-weight: bold;\">\n      QR Code\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-fab vertical=\"top\" horizontal=\"end\" edge slot=\"fixed\">\n    <ion-fab-button color=\"light\" (click)=\"backButton()\">\n      <ion-icon name=\"arrow-back-circle-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab> -->\n  <img src=\"assets/image/softwarb_qr_scanner_white.png\" alt=\"\">\n  <div class=\"ion-text-center\" style=\"padding-top: 50px\">\n    <ion-button color=\"primary\" (click)=\"backButton()\">Stop</ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/store-keeper/list-item/list-item-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/store-keeper/list-item/list-item-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ListItemPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemPageRoutingModule", function() { return ListItemPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-item.page */ "./src/app/pages/store-keeper/list-item/list-item.page.ts");




const routes = [
    {
        path: '',
        component: _list_item_page__WEBPACK_IMPORTED_MODULE_3__["ListItemPage"]
    }
];
let ListItemPageRoutingModule = class ListItemPageRoutingModule {
};
ListItemPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListItemPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/store-keeper/list-item/list-item.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/store-keeper/list-item/list-item.module.ts ***!
  \******************************************************************/
/*! exports provided: ListItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemPageModule", function() { return ListItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _list_item_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-item-routing.module */ "./src/app/pages/store-keeper/list-item/list-item-routing.module.ts");
/* harmony import */ var _list_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-item.page */ "./src/app/pages/store-keeper/list-item/list-item.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");








let ListItemPageModule = class ListItemPageModule {
};
ListItemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_item_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListItemPageRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"]
        ],
        declarations: [_list_item_page__WEBPACK_IMPORTED_MODULE_6__["ListItemPage"]]
    })
], ListItemPageModule);



/***/ }),

/***/ "./src/app/pages/store-keeper/qr-scanner/qr-scanner.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/store-keeper/qr-scanner/qr-scanner.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: 50%;\n  max-width: 95%;\n  max-height: calc(98% - 100px);\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  /* bring your own prefixes */\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wbnNiL0RvY3VtZW50cy9HaXRIdWIvYWlyc2VsLXJmaWQvbW9iaWxlL3NyYy9hcHAvcGFnZXMvc3RvcmUta2VlcGVyL3FyLXNjYW5uZXIvcXItc2Nhbm5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3RvcmUta2VlcGVyL3FyLXNjYW5uZXIvcXItc2Nhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFFQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0b3JlLWtlZXBlci9xci1zY2FubmVyL3FyLXNjYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICB3aWR0aDogNTAlO1xuICAvLyBvcGFjaXR5OiAwLjU7XG4gIG1heC13aWR0aDogOTUlO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDk4JSAtIDEwMHB4KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAvKiBicmluZyB5b3VyIG93biBwcmVmaXhlcyAqL1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbiIsImltZyB7XG4gIHdpZHRoOiA1MCU7XG4gIG1heC13aWR0aDogOTUlO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDk4JSAtIDEwMHB4KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAvKiBicmluZyB5b3VyIG93biBwcmVmaXhlcyAqL1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/store-keeper/qr-scanner/qr-scanner.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/store-keeper/qr-scanner/qr-scanner.component.ts ***!
  \***********************************************************************/
/*! exports provided: QrScannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrScannerComponent", function() { return QrScannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




// import { QRScanner, QRScannerStatus } from "@ionic-native/qr-scanner/ngx";
let QrScannerComponent = class QrScannerComponent {
    constructor(navCtrl, toastCtrl, route, router) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.route = route;
        this.router = router;
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.link = this.router.getCurrentNavigation().extras.state.link;
                console.log("link", this.link);
            }
        });
    }
    ngOnInit() { }
    ionViewWillEnter() {
        // this.scan();
    }
    ionViewWillLeave() {
        // this.stopScanning();
    }
    backButton() {
        this.ionViewWillLeave();
        this.toastCtrl.dismiss();
        this.router.navigate([this.link]);
        // this.router.navigate(['/inventory/stock-receive']);
        // this.navCtrl.navigateBack("/inventory/stock-receive");
    }
    /* scan() {
      (window.document.querySelector("ion-app") as HTMLElement).classList.add(
        "cameraView"
      );
      this.qrScanner
        .prepare()
        .then((status: QRScannerStatus) => {
          if (status.authorized) {
            this.qrScanner.show();
            this.scanSubscription = this.qrScanner
              .scan()
              .subscribe((text: string) => {
                this.scanText = text;
                this.presentToast();
              });
          } else {
            console.error("Permission Denied", status);
          }
        })
        .catch((e: any) => {
          console.error("Error", e);
        });
    }
  
    stopScanning() {
      this.scanSubscription ? this.scanSubscription.unsubscribe() : null;
      this.scanSubscription = null;
      (window.document.querySelector("ion-app") as HTMLElement).classList.remove(
        "cameraView"
      );
      this.qrScanner.hide();
      this.qrScanner.destroy();
    } */
    presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                header: "Air Selangor QR Code",
                message: this.scanText,
                buttons: [
                    {
                        text: "New Scan",
                        handler: () => {
                            // this.scan();
                        },
                    },
                ],
            });
            toast.present();
        });
    }
};
QrScannerComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
QrScannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-qr-scanner",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./qr-scanner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-keeper/qr-scanner/qr-scanner.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./qr-scanner.component.scss */ "./src/app/pages/store-keeper/qr-scanner/qr-scanner.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], QrScannerComponent);



/***/ }),

/***/ "./src/app/pages/store-keeper/store-keeper.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/store-keeper/store-keeper.module.ts ***!
  \***********************************************************/
/*! exports provided: StoreKeeperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreKeeperModule", function() { return StoreKeeperModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _store_keeper_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store-keeper.routing */ "./src/app/pages/store-keeper/store-keeper.routing.ts");
/* harmony import */ var _qr_scanner_qr_scanner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./qr-scanner/qr-scanner.component */ "./src/app/pages/store-keeper/qr-scanner/qr-scanner.component.ts");
/* harmony import */ var _list_item_list_item_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-item/list-item.module */ "./src/app/pages/store-keeper/list-item/list-item.module.ts");


// import { BrowserModule } from "@angular/platform-browser";







let StoreKeeperModule = class StoreKeeperModule {
};
StoreKeeperModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_qr_scanner_qr_scanner_component__WEBPACK_IMPORTED_MODULE_7__["QrScannerComponent"]],
        entryComponents: [],
        imports: [
            // BrowserModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _list_item_list_item_module__WEBPACK_IMPORTED_MODULE_8__["ListItemPageModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(),
            _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_4__["LeafletModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_store_keeper_routing__WEBPACK_IMPORTED_MODULE_6__["StoreKeeperRoutes"])
        ]
    })
], StoreKeeperModule);



/***/ }),

/***/ "./src/app/pages/store-keeper/store-keeper.routing.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/store-keeper/store-keeper.routing.ts ***!
  \************************************************************/
/*! exports provided: StoreKeeperRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreKeeperRoutes", function() { return StoreKeeperRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _qr_scanner_qr_scanner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr-scanner/qr-scanner.component */ "./src/app/pages/store-keeper/qr-scanner/qr-scanner.component.ts");


const StoreKeeperRoutes = [
    {
        path: "",
        children: [
            {
                path: "tabs",
                loadChildren: () => __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "./src/app/pages/store-keeper/tabs/tabs.module.ts")).then((m) => m.TabsPageModule),
            },
            {
                path: "stock-receive",
                loadChildren: () => Promise.all(/*! import() | stock-receive-stock-receive-module */[__webpack_require__.e("default~pages-inventory-management-stock-receive-stock-receive-module~stock-receive-stock-receive-module"), __webpack_require__.e("stock-receive-stock-receive-module")]).then(__webpack_require__.bind(null, /*! ./stock-receive/stock-receive.module */ "./src/app/pages/store-keeper/stock-receive/stock-receive.module.ts")).then(m => m.StockReceivePageModule),
            },
            {
                path: "to-review",
                loadChildren: () => __webpack_require__.e(/*! import() | to-review-to-review-module */ "to-review-to-review-module").then(__webpack_require__.bind(null, /*! ./to-review/to-review.module */ "./src/app/pages/store-keeper/to-review/to-review.module.ts")).then(m => m.ToReviewPageModule)
            },
            {
                path: "stock-issuance",
                loadChildren: () => Promise.all(/*! import() | stock-issuance-stock-issuance-module */[__webpack_require__.e("default~pages-inventory-management-stock-issuance-stock-issuance-module~stock-issuance-stock-issuance-module"), __webpack_require__.e("stock-issuance-stock-issuance-module")]).then(__webpack_require__.bind(null, /*! ./stock-issuance/stock-issuance.module */ "./src/app/pages/store-keeper/stock-issuance/stock-issuance.module.ts")).then(m => m.StockIssuancePageModule)
            },
            {
                path: "return",
                loadChildren: () => __webpack_require__.e(/*! import() | return-return-module */ "return-return-module").then(__webpack_require__.bind(null, /*! ./return/return.module */ "./src/app/pages/store-keeper/return/return.module.ts")).then(m => m.ReturnPageModule)
            },
            {
                path: "dispose",
                loadChildren: () => __webpack_require__.e(/*! import() | dispose-dispose-module */ "dispose-dispose-module").then(__webpack_require__.bind(null, /*! ./dispose/dispose.module */ "./src/app/pages/store-keeper/dispose/dispose.module.ts")).then(m => m.DisposePageModule)
            },
            {
                path: "stock-count",
                loadChildren: () => Promise.all(/*! import() | stock-count-stock-count-module */[__webpack_require__.e("default~pages-inventory-management-stock-count-stock-count-module~stock-count-stock-count-module"), __webpack_require__.e("stock-count-stock-count-module")]).then(__webpack_require__.bind(null, /*! ./stock-count/stock-count.module */ "./src/app/pages/store-keeper/stock-count/stock-count.module.ts")).then(m => m.StockCountPageModule)
            },
            {
                path: "stock-count-list",
                loadChildren: () => __webpack_require__.e(/*! import() | stock-count-list-stock-count-list-module */ "stock-count-list-stock-count-list-module").then(__webpack_require__.bind(null, /*! ./stock-count-list/stock-count-list.module */ "./src/app/pages/store-keeper/stock-count-list/stock-count-list.module.ts")).then(m => m.StockCountListPageModule)
            },
            {
                path: "qr-scanner",
                component: _qr_scanner_qr_scanner_component__WEBPACK_IMPORTED_MODULE_1__["QrScannerComponent"]
            }
        ],
    },
];


/***/ })

}]);
//# sourceMappingURL=pages-store-keeper-store-keeper-module-es2015.js.map