function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-operator-operator-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operator/qr-scanner/qr-scanner.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operator/qr-scanner/qr-scanner.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOperatorQrScannerQrScannerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <div class=\"ion-text-center\" style=\"font-weight: bold;\">\n      QR Code\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-fab vertical=\"top\" horizontal=\"end\" edge slot=\"fixed\">\n    <ion-fab-button color=\"light\" (click)=\"backButton()\">\n      <ion-icon name=\"arrow-back-circle-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab> -->\n  <img src=\"assets/image/softwarb_qr_scanner_white.png\" alt=\"\">\n  <div class=\"ion-text-center\" style=\"padding-top: 50px\">\n    <ion-button color=\"primary\" (click)=\"backButton()\">Stop</ion-button>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/operator/operator.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/operator/operator.module.ts ***!
    \***************************************************/

  /*! exports provided: OperatorModule */

  /***/
  function srcAppPagesOperatorOperatorModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OperatorModule", function () {
      return OperatorModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @asymmetrik/ngx-leaflet */
    "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _operator_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./operator.routing */
    "./src/app/pages/operator/operator.routing.ts");
    /* harmony import */


    var _qr_scanner_qr_scanner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./qr-scanner/qr-scanner.component */
    "./src/app/pages/operator/qr-scanner/qr-scanner.component.ts"); // import { BrowserModule } from "@angular/platform-browser";


    var OperatorModule = function OperatorModule() {
      _classCallCheck(this, OperatorModule);
    };

    OperatorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_qr_scanner_qr_scanner_component__WEBPACK_IMPORTED_MODULE_7__["QrScannerComponent"]],
      entryComponents: [],
      imports: [// BrowserModule,
      _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_4__["LeafletModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_operator_routing__WEBPACK_IMPORTED_MODULE_6__["OperatorRoutes"])]
    })], OperatorModule);
    /***/
  },

  /***/
  "./src/app/pages/operator/operator.routing.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/operator/operator.routing.ts ***!
    \****************************************************/

  /*! exports provided: OperatorRoutes */

  /***/
  function srcAppPagesOperatorOperatorRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OperatorRoutes", function () {
      return OperatorRoutes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _qr_scanner_qr_scanner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./qr-scanner/qr-scanner.component */
    "./src/app/pages/operator/qr-scanner/qr-scanner.component.ts");

    var OperatorRoutes = [{
      path: "",
      children: [{
        path: "tabs",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tabs-tabs-module */
          "tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./tabs/tabs.module */
          "./src/app/pages/operator/tabs/tabs.module.ts")).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: "asset-location",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | asset-location-asset-location-module */
          "asset-location-asset-location-module").then(__webpack_require__.bind(null,
          /*! ./asset-location/asset-location.module */
          "./src/app/pages/operator/asset-location/asset-location.module.ts")).then(function (m) {
            return m.AssetLocationPageModule;
          });
        }
      }, {
        path: "work-request",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | work-request-work-request-module */
          [__webpack_require__.e("default~pages-technical-technical-module~work-request-work-request-module"), __webpack_require__.e("work-request-work-request-module")]).then(__webpack_require__.bind(null,
          /*! ./work-request/work-request.module */
          "./src/app/pages/operator/work-request/work-request.module.ts")).then(function (m) {
            return m.WorkRequestPageModule;
          });
        }
      }, {
        path: "submit",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | submit-submit-module */
          "submit-submit-module").then(__webpack_require__.bind(null,
          /*! ./submit/submit.module */
          "./src/app/pages/operator/submit/submit.module.ts")).then(function (m) {
            return m.SubmitPageModule;
          });
        }
      }, {
        path: "qr-scanner",
        component: _qr_scanner_qr_scanner_component__WEBPACK_IMPORTED_MODULE_1__["QrScannerComponent"]
      }]
    }];
    /***/
  },

  /***/
  "./src/app/pages/operator/qr-scanner/qr-scanner.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/operator/qr-scanner/qr-scanner.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOperatorQrScannerQrScannerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img {\n  width: 50%;\n  max-width: 95%;\n  max-height: calc(98% - 100px);\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  /* bring your own prefixes */\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wbnNiL0RvY3VtZW50cy9HaXRIdWIvYWlyc2VsLXJmaWQvbW9iaWxlL3NyYy9hcHAvcGFnZXMvb3BlcmF0b3IvcXItc2Nhbm5lci9xci1zY2FubmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9vcGVyYXRvci9xci1zY2FubmVyL3FyLXNjYW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBRUEsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcGVyYXRvci9xci1zY2FubmVyL3FyLXNjYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICB3aWR0aDogNTAlO1xuICAvLyBvcGFjaXR5OiAwLjU7XG4gIG1heC13aWR0aDogOTUlO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDk4JSAtIDEwMHB4KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAvKiBicmluZyB5b3VyIG93biBwcmVmaXhlcyAqL1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbiIsImltZyB7XG4gIHdpZHRoOiA1MCU7XG4gIG1heC13aWR0aDogOTUlO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDk4JSAtIDEwMHB4KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAvKiBicmluZyB5b3VyIG93biBwcmVmaXhlcyAqL1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/operator/qr-scanner/qr-scanner.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/operator/qr-scanner/qr-scanner.component.ts ***!
    \*******************************************************************/

  /*! exports provided: QrScannerComponent */

  /***/
  function srcAppPagesOperatorQrScannerQrScannerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QrScannerComponent", function () {
      return QrScannerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js"); // import { QRScanner, QRScannerStatus } from "@ionic-native/qr-scanner/ngx";


    var QrScannerComponent =
    /*#__PURE__*/
    function () {
      function QrScannerComponent(navCtrl, toastCtrl, route, router) {
        var _this = this;

        _classCallCheck(this, QrScannerComponent);

        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.route = route;
        this.router = router;
        this.route.queryParams.subscribe(function (params) {
          if (_this.router.getCurrentNavigation().extras.state) {
            _this.link = _this.router.getCurrentNavigation().extras.state.link;
            console.log("link", _this.link);
          }
        });
      }

      _createClass(QrScannerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {// this.scan();
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {// this.stopScanning();
        }
      }, {
        key: "backButton",
        value: function backButton() {
          this.ionViewWillLeave();
          this.toastCtrl.dismiss();
          this.router.navigate([this.link]); // this.router.navigate(['/inventory/stock-receive']);
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

      }, {
        key: "presentToast",
        value: function presentToast() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastCtrl.create({
                      header: "Air Selangor QR Code",
                      message: this.scanText,
                      buttons: [{
                        text: "Done",
                        handler: function handler() {
                          _this2.backButton();
                        }
                      }]
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return QrScannerComponent;
    }();

    QrScannerComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    QrScannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-qr-scanner",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./qr-scanner.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operator/qr-scanner/qr-scanner.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./qr-scanner.component.scss */
      "./src/app/pages/operator/qr-scanner/qr-scanner.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], QrScannerComponent);
    /***/
  }
}]);
//# sourceMappingURL=pages-operator-operator-module-es5.js.map