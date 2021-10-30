function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~multiple-retagging-multiple-retagging-module~pages-technical-multiple-retagging-multiple-ret~6fdd8e80"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/multiple-retagging/multiple-retagging.page.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/multiple-retagging/multiple-retagging.page.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTechnicalMultipleRetaggingMultipleRetaggingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"homePage('/technical/tabs/tab1')\">\n        <ion-icon src=\"../../../../assets/icon/air-selangor-icon.svg\" style=\"font-size: 2rem\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title style=\"font-weight: bold\">\n      Multiple Retagging\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openNotification()\">\n        <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n        <ion-badge color=\"danger\" style=\"position: absolute; right: -5px; top: 1px\"></ion-badge>\n        <!--{{ notificationService.totalnotificationbyuser }}-->\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content-core\">\n  <div class=\"ion-text-center\">\n    <ion-button color=\"primary\" (click)=\"StartScan()\">Start Scan</ion-button>\n  </div>\n  <ion-card *ngFor=\"let assetdetail of assetdetailmultiple\">\n    <ion-card-header>\n      <ion-fab horizontal=\"end\">\n        <ion-fab-button size=\"small\" color=\"primary\" (click)=\"clickEdit(assetdetail.badge_no)\">\n          <ion-icon name=\"document-text\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n      <ion-card-title>Badge No<br />{{ assetdetail.badge_no }}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>Asset Id: {{ assetdetail.asset_id }}</p>\n      <p>Asset Type: {{ assetdetail.asset_type }}</p>\n      <p>Asset Location: {{ assetdetail.asset_location }}</p>\n      <!-- <p>Asset Location: {{ assetregistration.location_description }}</p> -->\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/technical/multiple-retagging/multiple-retagging-routing.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/technical/multiple-retagging/multiple-retagging-routing.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: MultipleRetaggingPageRoutingModule */

  /***/
  function srcAppPagesTechnicalMultipleRetaggingMultipleRetaggingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MultipleRetaggingPageRoutingModule", function () {
      return MultipleRetaggingPageRoutingModule;
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


    var _multiple_retagging_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./multiple-retagging.page */
    "./src/app/pages/technical/multiple-retagging/multiple-retagging.page.ts");

    var routes = [{
      path: '',
      component: _multiple_retagging_page__WEBPACK_IMPORTED_MODULE_3__["MultipleRetaggingPage"]
    }];

    var MultipleRetaggingPageRoutingModule = function MultipleRetaggingPageRoutingModule() {
      _classCallCheck(this, MultipleRetaggingPageRoutingModule);
    };

    MultipleRetaggingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MultipleRetaggingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/technical/multiple-retagging/multiple-retagging.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/technical/multiple-retagging/multiple-retagging.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: MultipleRetaggingPageModule */

  /***/
  function srcAppPagesTechnicalMultipleRetaggingMultipleRetaggingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MultipleRetaggingPageModule", function () {
      return MultipleRetaggingPageModule;
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


    var _multiple_retagging_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./multiple-retagging-routing.module */
    "./src/app/pages/technical/multiple-retagging/multiple-retagging-routing.module.ts");
    /* harmony import */


    var _multiple_retagging_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./multiple-retagging.page */
    "./src/app/pages/technical/multiple-retagging/multiple-retagging.page.ts");

    var MultipleRetaggingPageModule = function MultipleRetaggingPageModule() {
      _classCallCheck(this, MultipleRetaggingPageModule);
    };

    MultipleRetaggingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _multiple_retagging_routing_module__WEBPACK_IMPORTED_MODULE_5__["MultipleRetaggingPageRoutingModule"]],
      declarations: [_multiple_retagging_page__WEBPACK_IMPORTED_MODULE_6__["MultipleRetaggingPage"]]
    })], MultipleRetaggingPageModule);
    /***/
  },

  /***/
  "./src/app/pages/technical/multiple-retagging/multiple-retagging.page.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/technical/multiple-retagging/multiple-retagging.page.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTechnicalMultipleRetaggingMultipleRetaggingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlY2huaWNhbC9tdWx0aXBsZS1yZXRhZ2dpbmcvbXVsdGlwbGUtcmV0YWdnaW5nLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/technical/multiple-retagging/multiple-retagging.page.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/technical/multiple-retagging/multiple-retagging.page.ts ***!
    \*******************************************************************************/

  /*! exports provided: MultipleRetaggingPage */

  /***/
  function srcAppPagesTechnicalMultipleRetaggingMultipleRetaggingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MultipleRetaggingPage", function () {
      return MultipleRetaggingPage;
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
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/notifications/notifications.service */
    "./src/app/shared/services/notifications/notifications.service.ts");
    /* harmony import */


    var src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/assets/assets.service */
    "./src/app/shared/services/assets/assets.service.ts");
    /* harmony import */


    var src_app_shared_services_asset_location_sync_asset_location_sync_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/asset-location-sync/asset-location-sync.service */
    "./src/app/shared/services/asset-location-sync/asset-location-sync.service.ts");

    var MultipleRetaggingPage =
    /*#__PURE__*/
    function () {
      function MultipleRetaggingPage(alertController, loadingController, route, router, notificationService, assetsService, ngZone, assetLocatioSyncService) {
        var _this = this;

        _classCallCheck(this, MultipleRetaggingPage);

        this.alertController = alertController;
        this.loadingController = loadingController;
        this.route = route;
        this.router = router;
        this.notificationService = notificationService;
        this.assetsService = assetsService;
        this.ngZone = ngZone;
        this.assetLocatioSyncService = assetLocatioSyncService;
        this.assetdetailmultiple = []; // feed = {
        //   badge_no: "MOTR-0000789", 
        //   asset_id: '040570271910', 
        //   asset_type: "MOTOR-SQUIRRL-CAGE", 
        //   asset_location: "TAMAN PUNCAK SAUJANA PUMP HOUSE-PUMP-02"
        // };

        this.type = "";
        this.route.queryParams.subscribe(function (params) {
          if (_this.router.getCurrentNavigation().extras.state) {
            _this.type = _this.router.getCurrentNavigation().extras.state.type;
          }
        });
      }

      _createClass(MultipleRetaggingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("trytype", this.type);
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {}
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {}
      }, {
        key: "ionViewDidLeave",
        value: function ionViewDidLeave() {}
      }, {
        key: "GetAssetData",
        value: function GetAssetData() {// for (let i = 0; i < 3; i++) {
          //   this.assetdetailmultiple.push(this.feed)
          // }
        }
      }, {
        key: "clickEdit",
        value: function clickEdit(badge_no) {
          var _this2 = this;

          //console.log("try1", badge_no);
          this.assetsService.filter("badge_no=" + badge_no).subscribe(function (res) {
            var assetregistration = res['results']; //console.log("try1", assetregistration[0]);

            if (assetregistration[0]) {
              var navigationExtras = {
                state: {
                  asset_detail: assetregistration[0]
                }
              };
            }

            _this2.router.navigate(["/technical/asset-detail"], navigationExtras);
          }, function (err) {
            console.error("err", err);
          });
        }
      }, {
        key: "homePage",
        value: function homePage(path) {
          this.router.navigate([path]);
        }
      }, {
        key: "StartScan",
        value: function StartScan() {
          var _this3 = this;

          this.assetdetailmultiple = [];

          if (this.type == "RFID") {
            this.loadingController.create({
              message: "Please scan the RFID tag ...",
              backdropDismiss: true
            }).then(function (loading) {
              loading.present(); //loading.dismiss();

              _this3.GetAssetData();

              console.log("[register onRegister2DBarcodeListener] ");
              var ev = "com.scanner.broadcast";
              var isGlobal = true;

              var listener = function listener(event) {
                console.log(JSON.stringify(event));

                if (event.SCAN_STATE == "success") {
                  _this3.ngZone.run(function () {
                    var data = event.data.trim(); //this.updateQrbarcode(event.data, asset);
                    //loading.dismiss();
                    //broadcaster.removeEventListener(ev, listener);
                    //this.updateQrbarcode(event.data, asset);
                    //var badge = asset.badge_number.trim();
                    // if(data == badge){
                    // }else{
                    //     this.warningAlert(
                    //       "Error",
                    //       "Batch number not match. Please try again,"
                    //     );
                    // }
                  });
                }
              };
            });
          } else if (this.type == "QRC") {
            this.loadingController.create({
              message: "Please scan the QR Code ...",
              backdropDismiss: true
            }).then(function (loading) {
              loading.present();

              _this3.GetAssetData();

              var ev = "com.scanner.broadcast";
              var isGlobal = true;

              var listener = function listener(event) {
                console.log(JSON.stringify(event));

                if (event.SCAN_STATE == "success") {
                  var data = event.data.trim();
                  var addinto = "true";

                  _this3.assetdetailmultiple.forEach(function (element) {
                    if (data == element.badge_no) {
                      addinto = "false";
                    }
                  });

                  if (addinto == "true") {
                    _this3.updateQrbarcode(data);
                  } // this.ngZone.run(() => {
                  //   broadcaster.removeEventListener(ev, listener);          
                  // });

                }
              };

              broadcaster.addEventListener(ev, isGlobal, listener);
            });
          }
        }
      }, {
        key: "updateQrbarcode",
        value: function updateQrbarcode(data) {
          var _this4 = this;

          this.scanValue = data;
          this.assetsService.filter("badge_no=" + this.scanValue).subscribe(function (res) {
            if (res['results'].length > 0) {
              _this4.assetLocatioSyncService.filter("node_id=" + res['results'][0].node_id).subscribe(function (res) {
                if (res.length > 0) {
                  _this4.assetloc = res[0].description;
                }
              });

              _this4.feed = {
                badge_no: res[0].badge_no,
                asset_id: res[0].asset_id,
                asset_type: res[0].asset_type,
                asset_location: _this4.assetloc
              };
            }
          });
          this.assetdetailmultiple.push(this.feed);
        }
      }]);

      return MultipleRetaggingPage;
    }();

    MultipleRetaggingPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"]
      }, {
        type: src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_5__["AssetsService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: src_app_shared_services_asset_location_sync_asset_location_sync_service__WEBPACK_IMPORTED_MODULE_6__["AssetLocatioSyncService"]
      }];
    };

    MultipleRetaggingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-multiple-retagging',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./multiple-retagging.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/multiple-retagging/multiple-retagging.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./multiple-retagging.page.scss */
      "./src/app/pages/technical/multiple-retagging/multiple-retagging.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"], src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_5__["AssetsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], src_app_shared_services_asset_location_sync_asset_location_sync_service__WEBPACK_IMPORTED_MODULE_6__["AssetLocatioSyncService"]])], MultipleRetaggingPage);
    /***/
  }
}]);
//# sourceMappingURL=default~multiple-retagging-multiple-retagging-module~pages-technical-multiple-retagging-multiple-ret~6fdd8e80-es5.js.map