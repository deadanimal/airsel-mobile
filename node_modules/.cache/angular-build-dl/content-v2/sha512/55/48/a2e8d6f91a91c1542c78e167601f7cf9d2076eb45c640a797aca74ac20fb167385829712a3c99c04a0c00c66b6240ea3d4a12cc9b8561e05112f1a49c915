function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-inventory-management-stock-receive-stock-receive-module~stock-receive-stock-receive-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory-management/stock-receive/stock-receive.page.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory-management/stock-receive/stock-receive.page.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInventoryManagementStockReceiveStockReceivePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\n  <ion-toolbar mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"homePage('/technical/tabs/tab1')\">\n        <ion-icon src=\"../../../../assets/icon/air-selangor-icon.svg\" style=\"font-size: 2rem\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title style=\"font-weight: bold\"> Stock Receive </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"clickLogout()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"openNotification()\">\n        <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n        <ion-badge size=\"small\" color=\"danger\" style=\"position: absolute; right: -5px; top: 1px\">\n          <!-- {{ notificationService.totalnotificationbyuser }} -->\n          10\n        </ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-toolbar class=\"ion-no-border toolbar-core\">\n    <ion-segment [(ngModel)]=\"type\">\n      <ion-segment-button value=\"toreceive\">\n        <ion-label style=\"font-weight: bold;color:black;\">Inventory</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"delivered\">\n        <ion-label style=\"font-weight: bold;color:black;\">Non Inventory</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div [ngSwitch]=\"type\">\n    <div *ngSwitchCase=\"'toreceive'\">\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-card>\n            <ion-card-content>\n              <ion-row>\n                <ion-col size=\"9\">\n                  <p>Purchase Order 3231414</p>\n                  <p>Expected Date Of Delivery </p>\n                  <p>on 20 Apr 2021</p>\n                </ion-col>\n                <ion-col size=\"3\" style=\"padding-top: 15px;\" class=\"ion-text-right\">\n                  <ion-button (click)=\"scan()\">Scan</ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-card>\n            <ion-card-content>\n              <ion-row>\n                <ion-col size=\"9\">\n                  <p>Purchase Order 5265461</p>\n                  <p>Expected Date Of Delivery </p>\n                  <p>on 20 Apr 2021</p>\n                </ion-col>\n                <ion-col size=\"3\" style=\"padding-top: 15px;\" class=\"ion-text-right\">\n                  <ion-button (click)=\"scan()\">Scan</ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-card>\n            <ion-card-content>\n              <ion-row>\n                <ion-col size=\"9\">\n                  <p>Purchase Order 5265461</p>\n                  <p>Expected Date Of Delivery </p>\n                  <p>on 20 Apr 2021</p>\n                </ion-col>\n                <ion-col size=\"3\" style=\"padding-top: 15px;\" class=\"ion-text-right\">\n                  <ion-button (click)=\"scan()\">Scan</ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div *ngSwitchCase=\"'delivered'\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\" class=\"ion-text-center\">\n            <ion-item>\n              <ion-label position=\"stacked\">Start Date</ion-label>\n              <ion-datetime displayFormat=\"DD-MM-YYYY\" placeholder=\"Select date\"></ion-datetime>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\" class=\"ion-text-center\">\n            <ion-item>\n              <ion-label position=\"stacked\">End Date</ion-label>\n              <ion-datetime displayFormat=\"DD-MM-YYYY\" placeholder=\"Select date\"></ion-datetime>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-card>\n        <ion-card-content>\n          <p>Purchase Order 3231414</p>\n          <p>Placed on 04 Apr 2020</p>\n          <p>Paid on 04 Apr 2020</p>\n          <p>Expected Date of Delivery on 20 Apr 2020</p>\n          <hr />\n          <p>CONTACTOR - 32A 240V 4 POLES (SCHNEIDER)</p>\n          <p>EACT000005</p>\n          <p>QTY 2</p>\n          <hr />\n          <p>CONTACTOR (MAGNETIC) - 3TF54 22-OXL2 132kW (SIEMENS)</p>\n          <p>EACT010010</p>\n          <p>QTY 10</p>\n          <hr />\n          <p>CONTACTOR (MAGNETIC) - LC1D50M7</p>\n          <p>EACT010018</p>\n          <p>QTY 1</p>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/inventory-management/stock-receive/stock-receive-routing.module.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/pages/inventory-management/stock-receive/stock-receive-routing.module.ts ***!
    \******************************************************************************************/

  /*! exports provided: StockReceivePageRoutingModule */

  /***/
  function srcAppPagesInventoryManagementStockReceiveStockReceiveRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StockReceivePageRoutingModule", function () {
      return StockReceivePageRoutingModule;
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


    var _stock_receive_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./stock-receive.page */
    "./src/app/pages/inventory-management/stock-receive/stock-receive.page.ts");

    var routes = [{
      path: '',
      component: _stock_receive_page__WEBPACK_IMPORTED_MODULE_3__["StockReceivePage"]
    }];

    var StockReceivePageRoutingModule = function StockReceivePageRoutingModule() {
      _classCallCheck(this, StockReceivePageRoutingModule);
    };

    StockReceivePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StockReceivePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/inventory-management/stock-receive/stock-receive.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/inventory-management/stock-receive/stock-receive.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: StockReceivePageModule */

  /***/
  function srcAppPagesInventoryManagementStockReceiveStockReceiveModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StockReceivePageModule", function () {
      return StockReceivePageModule;
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


    var _stock_receive_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./stock-receive-routing.module */
    "./src/app/pages/inventory-management/stock-receive/stock-receive-routing.module.ts");
    /* harmony import */


    var _stock_receive_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./stock-receive.page */
    "./src/app/pages/inventory-management/stock-receive/stock-receive.page.ts");

    var StockReceivePageModule = function StockReceivePageModule() {
      _classCallCheck(this, StockReceivePageModule);
    };

    StockReceivePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _stock_receive_routing_module__WEBPACK_IMPORTED_MODULE_5__["StockReceivePageRoutingModule"]],
      declarations: [_stock_receive_page__WEBPACK_IMPORTED_MODULE_6__["StockReceivePage"]]
    })], StockReceivePageModule);
    /***/
  },

  /***/
  "./src/app/pages/inventory-management/stock-receive/stock-receive.page.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/inventory-management/stock-receive/stock-receive.page.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInventoryManagementStockReceiveStockReceivePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludmVudG9yeS1tYW5hZ2VtZW50L3N0b2NrLXJlY2VpdmUvc3RvY2stcmVjZWl2ZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/inventory-management/stock-receive/stock-receive.page.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/inventory-management/stock-receive/stock-receive.page.ts ***!
    \********************************************************************************/

  /*! exports provided: StockReceivePage */

  /***/
  function srcAppPagesInventoryManagementStockReceiveStockReceivePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StockReceivePage", function () {
      return StockReceivePage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_inventory_grn_inventory_grn_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/inventory-grn/inventory-grn.service */
    "./src/app/shared/services/inventory-grn/inventory-grn.service.ts");

    var StockReceivePage =
    /*#__PURE__*/
    function () {
      function StockReceivePage(actionSheetController, alertController, modalController, ngZone, router, inventoryGrnService) {
        _classCallCheck(this, StockReceivePage);

        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.modalController = modalController;
        this.ngZone = ngZone;
        this.router = router;
        this.inventoryGrnService = inventoryGrnService;
        this.type = "toreceive";
        this.category = "All";
        this.categorys = ["All", "CM", "PM"];
        this.logs = new Array();
        this.bBarcode = false;
        this.bRfid = false; // Loading

        this.isLoading = false; // lists

        this.pendings = [{
          type: "CM",
          date: "14 February 2020",
          desc: "Maintenance need to do at Petaling zone near......",
          color: "success"
        }, {
          type: "CM",
          date: "12 February 2020",
          desc: "There have a water leakage at Sepang zone that......",
          color: "warning"
        }, {
          type: "PM",
          date: "13 February 2020",
          desc: "Need to replace components at Kuala Lumpur zone......",
          color: "danger"
        }, {
          type: "PM",
          date: "11 February 2020",
          desc: "Gombak have a water disrupted at 10.00 am......",
          color: "danger"
        }];
        this.completeds = [{
          id: "WORKORDER-2020-00011",
          desc: "Services have been done at Petaling zone at......"
        }, {
          id: "WORKORDER-2020-00009",
          desc: "Kuala Lumpur service have been completed at......"
        }, {
          id: "WORKORDER-2020-00007",
          desc: "Sepang zone water disruption have been lifted off at......"
        }, {
          id: "WORKORDER-2020-00006",
          desc: "Gombak zone have been completely run so far so good......"
        }, {
          id: "WORKORDER-2020-00005",
          desc: "Hulu Langat area have back to normal......"
        }];
        this.approvals = [{
          dateOfSubmission: "2020-03-03",
          assetName: "SLUICE VALVE-SLUICE VALVE-GROUND-200-MM",
          quantity: "11",
          status: "approve"
        }, {
          dateOfSubmission: "2020-03-02",
          assetName: "SLUICE VALVE-SCOUR VALVE-GROUND-150-MM",
          quantity: "7",
          status: "reject"
        }, {
          dateOfSubmission: "2020-03-01",
          assetName: "MECHANICAL LEVEL INDICATOR-LEVEL INDICATOR-ABOVE GROUND",
          quantity: "5",
          status: "reject"
        }, {
          dateOfSubmission: "2020-03-01",
          assetName: "MECHANICAL LEVEL INDICATOR-LEVEL INDICATOR-ABOVE GROUND",
          quantity: "5",
          status: "pending"
        }, {
          dateOfSubmission: "2020-03-01",
          assetName: "MECHANICAL LEVEL INDICATOR-LEVEL INDICATOR-ABOVE GROUND",
          quantity: "5",
          status: "pending"
        }];
      }

      _createClass(StockReceivePage, [{
        key: "L",
        value: function L() {
          var _this = this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var v = args.join(" ");
          console.log(v);
          this.ngZone.run(function () {
            _this.logs.push(v);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.onRegister2DBarcodeListener();
          this.onRegisterRFIDListener();
          this.items = this.pendings; // this.stockReceiveForm = this.formBuilder.group({
          // username: new FormControl(
          //   // "hafez.azman@airselangor.com", /// technician 
          //   "testing", // inventory
          //   Validators.compose([
          //     Validators.required,
          //     // Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
          //     // Validators.email,
          //   ])
          // ),
          // password: new FormControl(
          //   // "airselrfid@2020",
          //   "PabloEscobar",
          //   Validators.compose([Validators.minLength(6), Validators.required])
          // ),
          // })
        }
      }, {
        key: "updateData",
        value: function updateData(data) {
          var _this2 = this;

          console.log('data = ', data);
          this.ngZone.run(function () {
            _this2.scanValue = data;
            alert(_this2.scanValue);
          }); // // start update data with service
          // this.isLoading = true;
          // this.inventoryGrnService.post(this.stockReceiveForm.value).subscribe(
          //   (res) => {
          //     // Success
          //     this.isLoading = false;
          //     console.log('res = ', res)
          //   },
          //   () => {
          //     // Failed
          //     this.isLoading = false;
          //   },
          //   () => {
          //     // After
          //     // this.toastr.openToastr("Welcome back");
          //     // this.navigateByRole(this.authService.userType);
          //   }
          // );
          // // end
        }
      }, {
        key: "onRegister2DBarcodeListener",
        value: function onRegister2DBarcodeListener() {
          var _this3 = this;

          console.log("[register onRegister2DBarcodeListener] ");
          var ev = "com.scanner.broadcast";
          var isGlobal = true;

          var listener = function listener(event) {
            console.log(JSON.stringify(event));

            if (event.SCAN_STATE == "success") {
              _this3.ngZone.run(function () {
                if (_this3.bBarcode) {
                  _this3.updateData(event.data);
                }
              });
            }
          }; // broadcaster.addEventListener(ev, isGlobal, listener);

        }
      }, {
        key: "onRegisterRFIDListener",
        value: function onRegisterRFIDListener() {
          var _this4 = this;

          console.log("[register onRegisterRFIDListener] ");
          var ev = "android.intent.action.scanner.RFID";
          var isGlobal = true;

          var listener = function listener(event) {
            console.log(JSON.stringify(event));

            if (event.SCAN_STATE == "success") {
              _this4.ngZone.run(function () {
                if (_this4.bRfid) {
                  _this4.updateData(event.data);
                }
              });
            }
          }; // broadcaster.addEventListener(ev, isGlobal, listener);

        }
      }, {
        key: "scan",
        value: function scan() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this5 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.actionSheetController.create({
                      header: "Choose method",
                      buttons: [{
                        text: "RFID",
                        icon: "scan",
                        handler: function handler() {
                          console.log("RFID clicked");
                          _this5.bBarcode = false;
                          _this5.bRfid = true;
                        }
                      }, {
                        text: "QR Code",
                        icon: "qr-code",
                        handler: function handler() {
                          console.log("QR Code clicked");
                          _this5.bBarcode = true;
                          _this5.bRfid = false;
                        }
                      }, {
                        text: "Badge No.",
                        icon: "search",
                        handler: function handler() {
                          console.log("Badge No. clicked");

                          _this5.searchBadgeNo();
                        }
                      }, {
                        text: "Cancel",
                        role: "cancel",
                        icon: "close",
                        handler: function handler() {
                          console.log("Cancel clicked");
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context.sent;
                    _context.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "searchBadgeNo",
        value: function searchBadgeNo() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this6 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: "Badge No.",
                      message: "Enter a badge number to search the asset",
                      inputs: [{
                        name: "badge_no",
                        type: "text",
                        placeholder: ""
                      }],
                      buttons: [{
                        text: "Cancel",
                        role: "cancel",
                        handler: function handler() {
                          console.log("Cancel clicked");
                        }
                      }, {
                        text: "Search",
                        handler: function handler(data) {
                          if (data.badge_no) {
                            var navigationExtras = {
                              state: {
                                badge_no: data.badge_no
                              }
                            };

                            _this6.router.navigate(["/technical/tabs/tab2"], navigationExtras);
                          } else {
                            _this6.presentAlert("Error", "Please enter badge number to find asset detail");
                          }
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(header, message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      header: header,
                      message: message,
                      buttons: ["OK"]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return StockReceivePage;
    }();

    StockReceivePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_shared_services_inventory_grn_inventory_grn_service__WEBPACK_IMPORTED_MODULE_4__["InventoryGrnService"]
      }];
    };

    StockReceivePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-stock-receive',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./stock-receive.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory-management/stock-receive/stock-receive.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./stock-receive.page.scss */
      "./src/app/pages/inventory-management/stock-receive/stock-receive.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_shared_services_inventory_grn_inventory_grn_service__WEBPACK_IMPORTED_MODULE_4__["InventoryGrnService"]])], StockReceivePage);
    /***/
  },

  /***/
  "./src/app/shared/services/inventory-grn/inventory-grn.service.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shared/services/inventory-grn/inventory-grn.service.ts ***!
    \************************************************************************/

  /*! exports provided: InventoryGrnService */

  /***/
  function srcAppSharedServicesInventoryGrnInventoryGrnServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoryGrnService", function () {
      return InventoryGrnService;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var InventoryGrnService =
    /*#__PURE__*/
    function () {
      function InventoryGrnService(http) {
        _classCallCheck(this, InventoryGrnService);

        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/inventory-grn/"; // Data

        this.ormodels = [];
      }

      _createClass(InventoryGrnService, [{
        key: "post",
        value: function post(body) {
          return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("InventoryGrnModel", res);
          }));
        }
      }, {
        key: "get",
        value: function get() {
          var _this7 = this;

          return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("InventoryGrnModel", res);
            _this7.ormodels = res;
          }));
        }
      }, {
        key: "getOne",
        value: function getOne(id) {
          var _this8 = this;

          var urlID = this.url + id + "/";
          return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("InventoryGrnModel", res);
            _this8.ormodel = res;
          }));
        }
      }, {
        key: "update",
        value: function update(id, body) {
          return this.http.patch(this.url + id + '/', body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("InventoryGrnModel", res);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("InventoryGrnModel", res);
          }));
        }
      }, {
        key: "filter",
        value: function filter(field) {
          var urlFilter = this.url + "?" + field;
          return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("InventoryGrnModel", res);
          }));
        }
      }]);

      return InventoryGrnService;
    }();

    InventoryGrnService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    InventoryGrnService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], InventoryGrnService);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-inventory-management-stock-receive-stock-receive-module~stock-receive-stock-receive-module-es5.js.map