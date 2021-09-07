function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-home-module~pages-inventory-management-home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory-management/home/home.page.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory-management/home/home.page.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInventoryManagementHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\n  <ion-toolbar mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"homePage('/technical/tabs/tab1')\">\n        <ion-icon src=\"../../../../assets/icon/air-selangor-icon.svg\" style=\"font-size: 2rem\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title style=\"font-weight: bold\"> Inventory </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"clickLogout()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"openNotification()\">\n        <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n        <ion-badge size=\"small\" color=\"danger\" style=\"position: absolute; right: -5px; top: 1px\">\n          <!-- {{ notificationService.totalnotificationbyuser }} -->\n          10\n        </ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-toolbar class=\"ion-no-border toolbar-core\">\n    <ion-segment [(ngModel)]=\"type\">\n      <ion-segment-button value=\"toreceive\">\n        <ion-label style=\"font-weight: bold;color:black;\">To Receive</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"delivered\">\n        <ion-label style=\"font-weight: bold;color:black;\">Delivered</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div [ngSwitch]=\"type\">\n    <div *ngSwitchCase=\"'toreceive'\">\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-card>\n            <ion-card-content>\n              <ion-row>\n                <ion-col size=\"9\">\n                  <p>Purchase Order 3231414</p>\n                  <p>Expected Date Of Delivery </p>\n                  <p>on 20 Apr 2021</p>\n                </ion-col>\n                <ion-col size=\"3\" style=\"padding-top: 15px;\" class=\"ion-text-right\">\n                  <ion-button (click)=\"openListItem()\">List</ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-card>\n            <ion-card-content>\n              <ion-row>\n                <ion-col size=\"9\">\n                  <p>Purchase Order 5265461</p>\n                  <p>Expected Date Of Delivery </p>\n                  <p>on 20 Apr 2021</p>\n                </ion-col>\n                <ion-col size=\"3\" style=\"padding-top: 15px;\" class=\"ion-text-right\">\n                  <ion-button (click)=\"openListItem()\">List</ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-card>\n            <ion-card-content>\n              <ion-row>\n                <ion-col size=\"9\">\n                  <p>Purchase Order 5265461</p>\n                  <p>Expected Date Of Delivery </p>\n                  <p>on 20 Apr 2021</p>\n                </ion-col>\n                <ion-col size=\"3\" style=\"padding-top: 15px;\" class=\"ion-text-right\">\n                  <ion-button (click)=\"openListItem()\">List</ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div *ngSwitchCase=\"'delivered'\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\" class=\"ion-text-center\">\n            <ion-item>\n              <ion-label position=\"stacked\">Start Date</ion-label>\n              <ion-datetime displayFormat=\"DD-MM-YYYY\" placeholder=\"Select date\"></ion-datetime>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\" class=\"ion-text-center\">\n            <ion-item>\n              <ion-label position=\"stacked\">End Date</ion-label>\n              <ion-datetime displayFormat=\"DD-MM-YYYY\" placeholder=\"Select date\"></ion-datetime>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-card>\n        <ion-card-content>\n          <p>Purchase Order 3231414</p>\n          <p>Placed on 04 Apr 2020</p>\n          <p>Paid on 04 Apr 2020</p>\n          <p>Expected Date of Delivery on 20 Apr 2020</p>\n          <hr />\n          <p>CONTACTOR - 32A 240V 4 POLES (SCHNEIDER)</p>\n          <p>EACT000005</p>\n          <p>QTY 2</p>\n          <hr />\n          <p>CONTACTOR (MAGNETIC) - 3TF54 22-OXL2 132kW (SIEMENS)</p>\n          <p>EACT010010</p>\n          <p>QTY 10</p>\n          <hr />\n          <p>CONTACTOR (MAGNETIC) - LC1D50M7</p>\n          <p>EACT010018</p>\n          <p>QTY 1</p>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory-management/list-item/list-item.page.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory-management/list-item/list-item.page.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInventoryManagementListItemListItemPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-title style=\"font-weight: bold\"> List of Item </ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n      <!--- Note that these columns can be defined in any order.\n            The actual rendered columns are set as a property on the row definition\" -->\n\n      <!-- Position Column -->\n      <!-- <ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef> No. </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n      </ng-container> -->\n\n      <!-- Item Column -->\n      <ng-container matColumnDef=\"item\">\n        <th mat-header-cell *matHeaderCellDef> Item </th>\n        <td mat-cell *matCellDef=\"let element\">\n          {{element.item}}\n        </td>\n      </ng-container>\n\n      <!-- Description Column -->\n      <ng-container matColumnDef=\"description\">\n        <th mat-header-cell *matHeaderCellDef> Description </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n      </ng-container>\n\n      <!-- Quantity Column -->\n      <ng-container matColumnDef=\"quantity\">\n        <th mat-header-cell *matHeaderCellDef> Quantity </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.quantity}} </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </ion-card>\n\n  <div class=\"ion-text-center\">\n    <ion-button color=\"primary\" shape=\"round\" size=\"small\" (click)=\"closeList()\">Close</ion-button>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/inventory-management/home/home-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/inventory-management/home/home-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppPagesInventoryManagementHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
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


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/pages/inventory-management/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/inventory-management/home/home.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/inventory-management/home/home.module.ts ***!
    \****************************************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppPagesInventoryManagementHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/pages/inventory-management/home/home-routing.module.ts");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/pages/inventory-management/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/pages/inventory-management/home/home.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/pages/inventory-management/home/home.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInventoryManagementHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-segment-button {\n  --indicator-color: black;\n  --indicator-height: 3px;\n}\n\n.nopaddingstart {\n  --padding-start: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wbnNiL0RvY3VtZW50cy9HaXRIdWIvYWlyc2VsLXJmaWQvbW9iaWxlL3NyYy9hcHAvcGFnZXMvaW52ZW50b3J5LW1hbmFnZW1lbnQvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW52ZW50b3J5LW1hbmFnZW1lbnQvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFRTtFQUNFLG9CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnZlbnRvcnktbWFuYWdlbWVudC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAtLWluZGljYXRvci1jb2xvcjogYmxhY2s7XG4gICAgLS1pbmRpY2F0b3ItaGVpZ2h0OiAzcHg7XG4gIH1cbiAgXG4gIC5ub3BhZGRpbmdzdGFydCB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIH1cbiAgIiwiaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgLS1pbmRpY2F0b3ItY29sb3I6IGJsYWNrO1xuICAtLWluZGljYXRvci1oZWlnaHQ6IDNweDtcbn1cblxuLm5vcGFkZGluZ3N0YXJ0IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/inventory-management/home/home.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/inventory-management/home/home.page.ts ***!
    \**************************************************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppPagesInventoryManagementHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var _list_item_list_item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../list-item/list-item.page */
    "./src/app/pages/inventory-management/list-item/list-item.page.ts");

    var HomePage =
    /*#__PURE__*/
    function () {
      function HomePage(alertController, modalController) {
        _classCallCheck(this, HomePage);

        this.alertController = alertController;
        this.modalController = modalController;
        this.type = "toreceive";
        this.category = "All";
        this.categorys = ["All", "CM", "PM"]; // lists

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

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.items = this.pendings;
        }
      }, {
        key: "initializeItems",
        value: function initializeItems() {
          this.pendings = this.items;
        }
      }, {
        key: "categorySelect",
        value: function categorySelect() {
          var _this = this;

          this.initializeItems();
          this.pendings = this.pendings.filter(function (pending) {
            if (_this.category == "All") return true;else return pending.type.toLowerCase().indexOf(_this.category.toLowerCase()) > -1;
          });
        }
      }, {
        key: "notesAlert",
        value: function notesAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: "Notes",
                      message: "Your submission is rejected due to wrong asset information. Please resubmit again. Thank you.",
                      buttons: ["OK"]
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
        key: "openListItem",
        value: function openListItem() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: _list_item_list_item_page__WEBPACK_IMPORTED_MODULE_3__["ListItemPage"]
                    });

                  case 2:
                    modal = _context2.sent;
                    _context2.next = 5;
                    return modal.present();

                  case 5:
                    return _context2.abrupt("return", _context2.sent);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-home",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory-management/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/pages/inventory-management/home/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], HomePage);
    /***/
  },

  /***/
  "./src/app/pages/inventory-management/list-item/list-item.page.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/inventory-management/list-item/list-item.page.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInventoryManagementListItemListItemPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludmVudG9yeS1tYW5hZ2VtZW50L2xpc3QtaXRlbS9saXN0LWl0ZW0ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/inventory-management/list-item/list-item.page.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/inventory-management/list-item/list-item.page.ts ***!
    \************************************************************************/

  /*! exports provided: ListItemPage */

  /***/
  function srcAppPagesInventoryManagementListItemListItemPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListItemPage", function () {
      return ListItemPage;
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

    var ELEMENT_DATA = [{
      position: 1,
      item: 'LEQ200001',
      description: "QUATRO CABLE (PRO PLUS)",
      quantity: 45
    }, {
      position: 2,
      item: 'LEQ200002',
      description: "FIBRE OPTIC CABLE",
      quantity: 34
    }, {
      position: 3,
      item: 'LEQ200003',
      description: "COPPER CABLE",
      quantity: 26
    }, {
      position: 4,
      item: 'LEQ200004',
      description: "SWITCH",
      quantity: 54
    }, {
      position: 5,
      item: 'LEQ200005',
      description: "HUB",
      quantity: 21
    }, {
      position: 6,
      item: 'LEQ200006',
      description: "ROUTER",
      quantity: 22
    }];

    var ListItemPage =
    /*#__PURE__*/
    function () {
      function ListItemPage(modalController) {
        _classCallCheck(this, ListItemPage);

        this.modalController = modalController;
        this.displayedColumns = ['item', 'description', 'quantity'];
        this.dataSource = ELEMENT_DATA;
      }

      _createClass(ListItemPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeList",
        value: function closeList() {
          this.modalController.dismiss();
        }
      }]);

      return ListItemPage;
    }();

    ListItemPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    ListItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list-item.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory-management/list-item/list-item.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list-item.page.scss */
      "./src/app/pages/inventory-management/list-item/list-item.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], ListItemPage);
    /***/
  }
}]);
//# sourceMappingURL=default~home-home-module~pages-inventory-management-home-home-module-es5.js.map