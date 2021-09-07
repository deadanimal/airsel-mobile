function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["asset-detail-asset-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operator/asset-detail/asset-detail.page.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operator/asset-detail/asset-detail.page.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOperatorAssetDetailAssetDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"homePage('/operator/tabs/tab1')\">\n        <ion-icon\n          src=\"../../../../assets/icon/air-selangor-icon.svg\"\n          style=\"font-size: 2rem;\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <div class=\"ion-text-center\" style=\"font-weight: bold;\">\n      Asset Detail\n    </div>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openNotification()\">\n        <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n        <ion-badge\n          size=\"small\"\n          color=\"danger\"\n          style=\"position: absolute; right: -5px; top: 1px;\"\n          >3</ion-badge\n        >\n      </ion-button>\n      <!-- <ion-button (click)=\"clickLogout()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n      </ion-button> -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content-core\">\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"scanQrCode()\">\n      <ion-icon name=\"scan\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-grid>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col size=\"3\"></ion-col>\n      <ion-col size=\"6\">\n        <div>\n          <ion-img src=\"assets/image/no-image.png\"></ion-img>\n        </div>\n      </ion-col>\n      <ion-col size=\"3\"></ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        Equipment info\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list class=\"line-input\">\n        <ion-item>\n          <ion-label position=\"stacked\">RFID ID</ion-label>\n          <ion-input readonly></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">QR CODE ID</ion-label>\n          <ion-input readonly></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Asset ID</ion-label>\n          <ion-input readonly></ion-input>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n      <ion-list class=\"line-input\">\n        <ion-item>\n          <ion-label position=\"stacked\">Asset Type</ion-label>\n          <ion-input readonly></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Asset Name</ion-label>\n          <ion-input readonly></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Specifications</ion-label>\n          <ion-input readonly></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Condition Rating</ion-label>\n          <ion-input readonly [(ngModel)]=\"assetDetail.condition\"></ion-input>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        Asset Location\n        <div class=\"ion-float-right\">\n          <ion-button size=\"small\" routerLink=\"/operator/asset-location\">Map</ion-button>\n        </div>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list class=\"line-input\">\n        <ion-item>\n          <ion-label position=\"stacked\">Region</ion-label>\n          <ion-select placeholder=\"Please select region\">\n            <ion-select-option [value]=\"region\" *ngFor=\"let region of regions\">{{ region }}</ion-select-option>\n          </ion-select>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label position=\"stacked\">Treatment Plant Name / Pump House / NRW / Reservoir</ion-label>\n          <ion-select placeholder=\"Please select\">\n            <ion-select-option [value]=\"treatmentPlant\" *ngFor=\"let treatmentPlant of treatmentPlants\">{{ treatmentPlant }}</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Choose Asset</ion-label>\n          <ion-select placeholder=\"Please select\">\n            <ion-select-option [value]=\"asset\" *ngFor=\"let asset of assets\">{{ asset }}</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        Operational Reading\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list class=\"line-input\">\n        <ion-item>\n          <ion-label position=\"stacked\">Running hours</ion-label>\n          <ion-input type=\"number\"></ion-input>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label position=\"stacked\">Pressure reading</ion-label>\n          <ion-input type=\"number\"></ion-input>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label position=\"stacked\">Flow rate</ion-label>\n          <ion-input type=\"number\"></ion-input>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <div class=\"ion-text-center ion-padding-bottom\">\n    <ion-button>Update<br/>Asset</ion-button>\n    <ion-button [routerLink]=\"['/operator/submit']\">Submit</ion-button>\n    <ion-button [routerLink]=\"['/operator/work-request']\">Create Work<br/>Request</ion-button>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/operator/asset-detail/asset-detail-routing.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/operator/asset-detail/asset-detail-routing.module.ts ***!
    \****************************************************************************/

  /*! exports provided: AssetDetailPageRoutingModule */

  /***/
  function srcAppPagesOperatorAssetDetailAssetDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetDetailPageRoutingModule", function () {
      return AssetDetailPageRoutingModule;
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


    var _asset_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./asset-detail.page */
    "./src/app/pages/operator/asset-detail/asset-detail.page.ts");

    var routes = [{
      path: '',
      component: _asset_detail_page__WEBPACK_IMPORTED_MODULE_3__["AssetDetailPage"]
    }];

    var AssetDetailPageRoutingModule = function AssetDetailPageRoutingModule() {
      _classCallCheck(this, AssetDetailPageRoutingModule);
    };

    AssetDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AssetDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/operator/asset-detail/asset-detail.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/operator/asset-detail/asset-detail.module.ts ***!
    \********************************************************************/

  /*! exports provided: AssetDetailPageModule */

  /***/
  function srcAppPagesOperatorAssetDetailAssetDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetDetailPageModule", function () {
      return AssetDetailPageModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _asset_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./asset-detail-routing.module */
    "./src/app/pages/operator/asset-detail/asset-detail-routing.module.ts");
    /* harmony import */


    var _asset_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./asset-detail.page */
    "./src/app/pages/operator/asset-detail/asset-detail.page.ts");

    var AssetDetailPageModule = function AssetDetailPageModule() {
      _classCallCheck(this, AssetDetailPageModule);
    };

    AssetDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _asset_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["AssetDetailPageRoutingModule"]],
      declarations: [_asset_detail_page__WEBPACK_IMPORTED_MODULE_6__["AssetDetailPage"]]
    })], AssetDetailPageModule);
    /***/
  },

  /***/
  "./src/app/pages/operator/asset-detail/asset-detail.page.scss":
  /*!********************************************************************!*\
    !*** ./src/app/pages/operator/asset-detail/asset-detail.page.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOperatorAssetDetailAssetDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29wZXJhdG9yL2Fzc2V0LWRldGFpbC9hc3NldC1kZXRhaWwucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/operator/asset-detail/asset-detail.page.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/operator/asset-detail/asset-detail.page.ts ***!
    \******************************************************************/

  /*! exports provided: AssetDetailPage */

  /***/
  function srcAppPagesOperatorAssetDetailAssetDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetDetailPage", function () {
      return AssetDetailPage;
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
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js"); // import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";


    var AssetDetailPage =
    /*#__PURE__*/
    function () {
      function AssetDetailPage(alertController, menu, // private barcodeScanner: BarcodeScanner,
      route, router) {
        var _this = this;

        _classCallCheck(this, AssetDetailPage);

        this.alertController = alertController;
        this.menu = menu;
        this.route = route;
        this.router = router; // dropdowns

        this.assets = ["Booster Ixora Pump House - Motor", "Booster Ixora Pump House - Butterfly valve", "Booster Ixora Pump House - Check valve", "Booster Ixora Pump House - Pressure gauge", "Booster Ixora Pump House - Control panel"];
        this.assetConditions = [{
          key: 1,
          value: "Very Good"
        }, {
          key: 2,
          value: "Good"
        }, {
          key: 3,
          value: "Average"
        }, {
          key: 4,
          value: "Poover"
        }, {
          key: 5,
          value: "Replace"
        }];
        this.regions = ["Sepang", "Kuala Lumpur", "Petaling", "Gombak", "Hulu Langat", "Hulu Selangor", "Klang", "Kuala Selangor", "Kuala Langat", "Sabak Bernam"];
        this.treatmentPlants = ["BOOSTER IXORA PUMP HOUSE", "TAMAN DAHLIA PUMP HOUSE", "TAMAN SEROJA PUMP HOUSE"];
        this.assetActions = ["Asset Registration", "Retire", "Asset Return", "Stock Return", "Return to Vendor", "Stock Count"]; // lists

        this.serviceHistorys = [{
          serviceid: "SERVICE-2020-00019",
          servicedate: "10 March 2020",
          servicedesc: "This service conducted at Petaling zone by 5 members......"
        }, {
          serviceid: "SERVICE-2020-00018",
          servicedate: "7 March 2020",
          servicedesc: "They have an accident occured at Sepang region that......"
        }, {
          serviceid: "SERVICE-2020-00017",
          servicedate: "5 March 2020",
          servicedesc: "Service at Kuala Lumpur have been done at......"
        }, {
          serviceid: "SERVICE-2020-00016",
          servicedate: "3 March 2020",
          servicedesc: "Done service at Hulu Langat zone at......"
        }, {
          serviceid: "SERVICE-2020-00015",
          servicedate: "1 March 2020",
          servicedesc: "Gombak service have done at complete at......"
        }];
        this.sliderConfig = {
          slidesPerView: 1.6,
          spaceBetween: 10,
          centeredSlides: true
        };
        this.assetDetail = {
          locationName: "",
          condition: ""
        };
        this.route.queryParams.subscribe(function (params) {
          if (_this.router.getCurrentNavigation().extras.state) {
            _this.assetDetail.locationName = _this.router.getCurrentNavigation().extras.state.locationName;
          }
        });
      }

      _createClass(AssetDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "scanQrCode",
        value: function scanQrCode() {
          var navigationExtras = {
            state: {
              link: "/operator/tabs/tab2"
            }
          };
          this.router.navigate(["/operator/qr-scanner"], navigationExtras); // this.barcodeScanner
          //   .scan()
          //   .then(barcodeData => {
          //     console.log("Barcode data", barcodeData);
          //   })
          //   .catch(err => {
          //     console.log("Error", err);
          //   });
        }
      }, {
        key: "clickLogout",
        value: function clickLogout() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: "Logout",
                      message: "Are you want to logout?",
                      buttons: [{
                        text: "Cancel",
                        role: "cancel",
                        handler: function handler() {}
                      }, {
                        text: "Yes, logout it!",
                        handler: function handler() {
                          _this2.router.navigate(["/"]);
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "homePage",
        value: function homePage(path) {
          this.router.navigate([path]);
        }
      }, {
        key: "openNotification",
        value: function openNotification() {
          this.menu.enable(true, "menuNotification");
          this.menu.open("menuNotification");
        }
      }]);

      return AssetDetailPage;
    }();

    AssetDetailPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AssetDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-asset-detail",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./asset-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operator/asset-detail/asset-detail.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./asset-detail.page.scss */
      "./src/app/pages/operator/asset-detail/asset-detail.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AssetDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=asset-detail-asset-detail-module-es5.js.map