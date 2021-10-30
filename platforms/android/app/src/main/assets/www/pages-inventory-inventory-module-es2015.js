(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inventory-inventory-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory/qr-scanner/qr-scanner.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory/qr-scanner/qr-scanner.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"air-selangor-toolbar\">\n    <div class=\"ion-text-center\" style=\"font-weight: bold;\">\n      QR Code\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-fab vertical=\"top\" horizontal=\"end\" edge slot=\"fixed\">\n    <ion-fab-button color=\"light\" (click)=\"backButton()\">\n      <ion-icon name=\"arrow-back-circle-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab> -->\n  <img src=\"assets/image/softwarb_qr_scanner_white.png\" alt=\"\">\n  <div class=\"ion-text-center\" style=\"padding-top: 50px\">\n    <ion-button color=\"primary\" (click)=\"backButton()\">Stop</ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/inventory/inventory.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/inventory/inventory.module.ts ***!
  \*****************************************************/
/*! exports provided: InventoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryModule", function() { return InventoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _inventory_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inventory.routing */ "./src/app/pages/inventory/inventory.routing.ts");
/* harmony import */ var _qr_scanner_qr_scanner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./qr-scanner/qr-scanner.component */ "./src/app/pages/inventory/qr-scanner/qr-scanner.component.ts");


// import { BrowserModule } from "@angular/platform-browser";






let InventoryModule = class InventoryModule {
};
InventoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_qr_scanner_qr_scanner_component__WEBPACK_IMPORTED_MODULE_7__["QrScannerComponent"]],
        entryComponents: [],
        imports: [
            // BrowserModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(),
            _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_4__["LeafletModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_inventory_routing__WEBPACK_IMPORTED_MODULE_6__["InventoryRoutes"])
        ]
    })
], InventoryModule);



/***/ }),

/***/ "./src/app/pages/inventory/inventory.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/inventory/inventory.routing.ts ***!
  \******************************************************/
/*! exports provided: InventoryRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryRoutes", function() { return InventoryRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _qr_scanner_qr_scanner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr-scanner/qr-scanner.component */ "./src/app/pages/inventory/qr-scanner/qr-scanner.component.ts");


const InventoryRoutes = [
    {
        path: "",
        children: [
            {
                path: "tabs",
                loadChildren: () => __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "./src/app/pages/inventory/tabs/tabs.module.ts")).then((m) => m.TabsPageModule),
            },
            {
                path: "stock-receive",
                loadChildren: () => Promise.all(/*! import() | stock-receive-stock-receive-module */[__webpack_require__.e("default~pages-inventory-management-stock-receive-stock-receive-module~stock-receive-stock-receive-module"), __webpack_require__.e("stock-receive-stock-receive-module")]).then(__webpack_require__.bind(null, /*! ./stock-receive/stock-receive.module */ "./src/app/pages/inventory/stock-receive/stock-receive.module.ts")).then(m => m.StockReceivePageModule),
            },
            {
                path: "to-review",
                loadChildren: () => __webpack_require__.e(/*! import() | to-review-to-review-module */ "to-review-to-review-module").then(__webpack_require__.bind(null, /*! ./to-review/to-review.module */ "./src/app/pages/inventory/to-review/to-review.module.ts")).then(m => m.ToReviewPageModule)
            },
            {
                path: "stock-issuance",
                loadChildren: () => Promise.all(/*! import() | stock-issuance-stock-issuance-module */[__webpack_require__.e("default~pages-inventory-management-stock-issuance-stock-issuance-module~stock-issuance-stock-issuance-module"), __webpack_require__.e("stock-issuance-stock-issuance-module")]).then(__webpack_require__.bind(null, /*! ./stock-issuance/stock-issuance.module */ "./src/app/pages/inventory/stock-issuance/stock-issuance.module.ts")).then(m => m.StockIssuancePageModule)
            },
            {
                path: "return",
                loadChildren: () => __webpack_require__.e(/*! import() | return-return-module */ "return-return-module").then(__webpack_require__.bind(null, /*! ./return/return.module */ "./src/app/pages/inventory/return/return.module.ts")).then(m => m.ReturnPageModule)
            },
            {
                path: "dispose",
                loadChildren: () => __webpack_require__.e(/*! import() | dispose-dispose-module */ "dispose-dispose-module").then(__webpack_require__.bind(null, /*! ./dispose/dispose.module */ "./src/app/pages/inventory/dispose/dispose.module.ts")).then(m => m.DisposePageModule)
            },
            {
                path: "stock-count",
                loadChildren: () => Promise.all(/*! import() | stock-count-stock-count-module */[__webpack_require__.e("default~pages-inventory-management-stock-count-stock-count-module~stock-count-stock-count-module"), __webpack_require__.e("stock-count-stock-count-module")]).then(__webpack_require__.bind(null, /*! ./stock-count/stock-count.module */ "./src/app/pages/inventory/stock-count/stock-count.module.ts")).then(m => m.StockCountPageModule)
            },
            {
                path: "stock-count-list",
                loadChildren: () => __webpack_require__.e(/*! import() | stock-count-list-stock-count-list-module */ "stock-count-list-stock-count-list-module").then(__webpack_require__.bind(null, /*! ./stock-count-list/stock-count-list.module */ "./src/app/pages/inventory/stock-count-list/stock-count-list.module.ts")).then(m => m.StockCountListPageModule)
            },
            {
                path: "qr-scanner",
                component: _qr_scanner_qr_scanner_component__WEBPACK_IMPORTED_MODULE_1__["QrScannerComponent"]
            }
        ],
    },
];


/***/ }),

/***/ "./src/app/pages/inventory/qr-scanner/qr-scanner.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/inventory/qr-scanner/qr-scanner.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: 50%;\n  max-width: 95%;\n  max-height: calc(98% - 100px);\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  /* bring your own prefixes */\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wbnNiL0RvY3VtZW50cy9HaXRIdWIvYWlyc2VsLW1vYmlsZS9zcmMvYXBwL3BhZ2VzL2ludmVudG9yeS9xci1zY2FubmVyL3FyLXNjYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ludmVudG9yeS9xci1zY2FubmVyL3FyLXNjYW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBRUEsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnZlbnRvcnkvcXItc2Nhbm5lci9xci1zY2FubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgd2lkdGg6IDUwJTtcbiAgLy8gb3BhY2l0eTogMC41O1xuICBtYXgtd2lkdGg6IDk1JTtcbiAgbWF4LWhlaWdodDogY2FsYyg5OCUgLSAxMDBweCk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLyogYnJpbmcgeW91ciBvd24gcHJlZml4ZXMgKi9cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4iLCJpbWcge1xuICB3aWR0aDogNTAlO1xuICBtYXgtd2lkdGg6IDk1JTtcbiAgbWF4LWhlaWdodDogY2FsYyg5OCUgLSAxMDBweCk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLyogYnJpbmcgeW91ciBvd24gcHJlZml4ZXMgKi9cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/inventory/qr-scanner/qr-scanner.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/inventory/qr-scanner/qr-scanner.component.ts ***!
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./qr-scanner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory/qr-scanner/qr-scanner.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./qr-scanner.component.scss */ "./src/app/pages/inventory/qr-scanner/qr-scanner.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], QrScannerComponent);



/***/ })

}]);
//# sourceMappingURL=pages-inventory-inventory-module-es2015.js.map