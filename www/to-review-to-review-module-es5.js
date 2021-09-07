function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["to-review-to-review-module"], {
  /***/
  "./node_modules/ionic4-rating/dist/components/rating.js":
  /*!**************************************************************!*\
    !*** ./node_modules/ionic4-rating/dist/components/rating.js ***!
    \**************************************************************/

  /*! exports provided: RatingComponent */

  /***/
  function node_modulesIonic4RatingDistComponentsRatingJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RatingComponent", function () {
      return RatingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var RatingComponent =
    /** @class */
    function () {
      function RatingComponent() {
        this.size = 'default';
        this.rateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      RatingComponent_1 = RatingComponent;

      RatingComponent.prototype.onClick = function (rate) {
        this.rate = rate;
        this.rateChange.emit(this.rate);

        this._onChange(this.rate);
      };

      RatingComponent.prototype.writeValue = function (value) {
        if (value !== undefined) {
          this.rate = value;
        }
      };

      RatingComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
      };

      RatingComponent.prototype.registerOnTouched = function (fn) {};

      RatingComponent.prototype.setDisabledState = function (isDisabled) {
        this.readonly = isDisabled;
      };

      var RatingComponent_1;

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Number)], RatingComponent.prototype, "rate", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean)], RatingComponent.prototype, "readonly", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], RatingComponent.prototype, "size", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], RatingComponent.prototype, "rateChange", void 0);

      RatingComponent = RatingComponent_1 = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: "rating",
        template: "\n    <ion-buttons>\n      <ion-button [disabled]=\"readonly\" fill=\"clear\" [size]=\"size\" *ngFor=\"let current of [1, 2, 3, 4, 5]; let i = index\"\n        (click)=\"onClick(i + 1)\" (mouseover)=\"hoverRate = i + 1\" (mouseleave)=\"hoverRate = 0\">\n        <ion-icon slot=\"icon-only\" name=\"star\" [class.filled]=\"(i + 1 <= hoverRate || (!hoverRate && i + 1 <= rate))\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  ",
        styles: ["\n      ion-buttons {\n        display: flex;\n        justify-content: center;\n      }\n\n      [ion-button][disabled] {\n        opacity: 1;\n      }\n\n      ion-icon {\n        color: gray;\n      }\n\n      ion-icon.filled {\n        color: orange;\n      }\n    "],
        providers: [{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
            return RatingComponent_1;
          }),
          multi: true
        }]
      })], RatingComponent);
      return RatingComponent;
    }(); //# sourceMappingURL=rating.js.map

    /***/

  },

  /***/
  "./node_modules/ionic4-rating/dist/index.js":
  /*!**************************************************!*\
    !*** ./node_modules/ionic4-rating/dist/index.js ***!
    \**************************************************/

  /*! exports provided: IonicRatingModule, RatingComponent */

  /***/
  function node_modulesIonic4RatingDistIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _ionic_rating_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./ionic-rating.module */
    "./node_modules/ionic4-rating/dist/ionic-rating.module.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IonicRatingModule", function () {
      return _ionic_rating_module__WEBPACK_IMPORTED_MODULE_0__["IonicRatingModule"];
    });
    /* harmony import */


    var _components_rating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/rating */
    "./node_modules/ionic4-rating/dist/components/rating.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RatingComponent", function () {
      return _components_rating__WEBPACK_IMPORTED_MODULE_1__["RatingComponent"];
    }); //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/ionic4-rating/dist/ionic-rating.module.js":
  /*!****************************************************************!*\
    !*** ./node_modules/ionic4-rating/dist/ionic-rating.module.js ***!
    \****************************************************************/

  /*! exports provided: IonicRatingModule */

  /***/
  function node_modulesIonic4RatingDistIonicRatingModuleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IonicRatingModule", function () {
      return IonicRatingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _components_rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/rating */
    "./node_modules/ionic4-rating/dist/components/rating.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var IonicRatingModule =
    /** @class */
    function () {
      function IonicRatingModule() {}

      IonicRatingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
        exports: [_components_rating__WEBPACK_IMPORTED_MODULE_4__["RatingComponent"]],
        declarations: [_components_rating__WEBPACK_IMPORTED_MODULE_4__["RatingComponent"]]
      })], IonicRatingModule);
      return IonicRatingModule;
    }(); //# sourceMappingURL=ionic-rating.module.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory/to-review/to-review.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory/to-review/to-review.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInventoryToReviewToReviewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"air-selangor-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <div style=\"font-weight: bold; text-transform: uppercase;\">\n      Review\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-card>\n    <ion-card-content>\n      <p>Company Name: SA Supply Sdn Bhd</p>\n      <p>Delivery Date: 20 Apr 2020</p>\n\n      <ion-item lines=\"none\">\n        <ion-label position=\"stacked\">Rating</ion-label>\n      </ion-item>\n      <rating readonly=\"false\" size=\"default\"> </rating>\n\n      <ion-item class=\"nopaddingstart\">\n        <ion-label position=\"stacked\">Other Comments</ion-label>\n        <ion-textarea rows=\"5\"></ion-textarea>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <div class=\"ion-text-center\">\n    <ion-button [routerLink]=\"['/inventory/stock-receive']\">Submit</ion-button>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-keeper/to-review/to-review.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-keeper/to-review/to-review.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesStoreKeeperToReviewToReviewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"air-selangor-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <div style=\"font-weight: bold; text-transform: uppercase;\">\n      Review\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-card>\n    <ion-card-content>\n      <p>Company Name: SA Supply Sdn Bhd</p>\n      <p>Delivery Date: 20 Apr 2020</p>\n\n      <ion-item lines=\"none\">\n        <ion-label position=\"stacked\">Rating</ion-label>\n      </ion-item>\n      <rating readonly=\"false\" size=\"default\"> </rating>\n\n      <ion-item class=\"nopaddingstart\">\n        <ion-label position=\"stacked\">Other Comments</ion-label>\n        <ion-textarea rows=\"5\"></ion-textarea>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <div class=\"ion-text-center\">\n    <ion-button [routerLink]=\"['/store-keeper/stock-receive']\">Submit</ion-button>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-supervisor/to-review/to-review.page.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-supervisor/to-review/to-review.page.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesStoreSupervisorToReviewToReviewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"air-selangor-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <div style=\"font-weight: bold; text-transform: uppercase;\">\n      Review\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-card>\n    <ion-card-content>\n      <p>Company Name: SA Supply Sdn Bhd</p>\n      <p>Delivery Date: 20 Apr 2020</p>\n\n      <ion-item lines=\"none\">\n        <ion-label position=\"stacked\">Rating</ion-label>\n      </ion-item>\n      <rating readonly=\"false\" size=\"default\"> </rating>\n\n      <ion-item class=\"nopaddingstart\">\n        <ion-label position=\"stacked\">Other Comments</ion-label>\n        <ion-textarea rows=\"5\"></ion-textarea>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <div class=\"ion-text-center\">\n    <ion-button [routerLink]=\"['/store-supervisor/stock-receive']\">Submit</ion-button>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/inventory/to-review/to-review-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/inventory/to-review/to-review-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: ToReviewPageRoutingModule */

  /***/
  function srcAppPagesInventoryToReviewToReviewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToReviewPageRoutingModule", function () {
      return ToReviewPageRoutingModule;
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


    var _to_review_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./to-review.page */
    "./src/app/pages/inventory/to-review/to-review.page.ts");

    var routes = [{
      path: '',
      component: _to_review_page__WEBPACK_IMPORTED_MODULE_3__["ToReviewPage"]
    }];

    var ToReviewPageRoutingModule = function ToReviewPageRoutingModule() {
      _classCallCheck(this, ToReviewPageRoutingModule);
    };

    ToReviewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ToReviewPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/inventory/to-review/to-review.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/inventory/to-review/to-review.module.ts ***!
    \***************************************************************/

  /*! exports provided: ToReviewPageModule */

  /***/
  function srcAppPagesInventoryToReviewToReviewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToReviewPageModule", function () {
      return ToReviewPageModule;
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


    var _to_review_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./to-review-routing.module */
    "./src/app/pages/inventory/to-review/to-review-routing.module.ts");
    /* harmony import */


    var _to_review_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./to-review.page */
    "./src/app/pages/inventory/to-review/to-review.page.ts");
    /* harmony import */


    var ionic4_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic4-rating */
    "./node_modules/ionic4-rating/dist/index.js");

    var ToReviewPageModule = function ToReviewPageModule() {
      _classCallCheck(this, ToReviewPageModule);
    };

    ToReviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], ionic4_rating__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"], _to_review_routing_module__WEBPACK_IMPORTED_MODULE_5__["ToReviewPageRoutingModule"]],
      declarations: [_to_review_page__WEBPACK_IMPORTED_MODULE_6__["ToReviewPage"]]
    })], ToReviewPageModule);
    /***/
  },

  /***/
  "./src/app/pages/inventory/to-review/to-review.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/inventory/to-review/to-review.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInventoryToReviewToReviewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludmVudG9yeS90by1yZXZpZXcvdG8tcmV2aWV3LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/inventory/to-review/to-review.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/inventory/to-review/to-review.page.ts ***!
    \*************************************************************/

  /*! exports provided: ToReviewPage */

  /***/
  function srcAppPagesInventoryToReviewToReviewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToReviewPage", function () {
      return ToReviewPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ToReviewPage =
    /*#__PURE__*/
    function () {
      function ToReviewPage() {
        _classCallCheck(this, ToReviewPage);
      }

      _createClass(ToReviewPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ToReviewPage;
    }();

    ToReviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-to-review',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./to-review.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory/to-review/to-review.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./to-review.page.scss */
      "./src/app/pages/inventory/to-review/to-review.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ToReviewPage);
    /***/
  },

  /***/
  "./src/app/pages/store-keeper/to-review/to-review-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/store-keeper/to-review/to-review-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: ToReviewPageRoutingModule */

  /***/
  function srcAppPagesStoreKeeperToReviewToReviewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToReviewPageRoutingModule", function () {
      return ToReviewPageRoutingModule;
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


    var _to_review_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./to-review.page */
    "./src/app/pages/store-keeper/to-review/to-review.page.ts");

    var routes = [{
      path: '',
      component: _to_review_page__WEBPACK_IMPORTED_MODULE_3__["ToReviewPage"]
    }];

    var ToReviewPageRoutingModule = function ToReviewPageRoutingModule() {
      _classCallCheck(this, ToReviewPageRoutingModule);
    };

    ToReviewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ToReviewPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/store-keeper/to-review/to-review.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/store-keeper/to-review/to-review.module.ts ***!
    \******************************************************************/

  /*! exports provided: ToReviewPageModule */

  /***/
  function srcAppPagesStoreKeeperToReviewToReviewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToReviewPageModule", function () {
      return ToReviewPageModule;
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


    var _to_review_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./to-review-routing.module */
    "./src/app/pages/store-keeper/to-review/to-review-routing.module.ts");
    /* harmony import */


    var _to_review_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./to-review.page */
    "./src/app/pages/store-keeper/to-review/to-review.page.ts");
    /* harmony import */


    var ionic4_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic4-rating */
    "./node_modules/ionic4-rating/dist/index.js");

    var ToReviewPageModule = function ToReviewPageModule() {
      _classCallCheck(this, ToReviewPageModule);
    };

    ToReviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], ionic4_rating__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"], _to_review_routing_module__WEBPACK_IMPORTED_MODULE_5__["ToReviewPageRoutingModule"]],
      declarations: [_to_review_page__WEBPACK_IMPORTED_MODULE_6__["ToReviewPage"]]
    })], ToReviewPageModule);
    /***/
  },

  /***/
  "./src/app/pages/store-keeper/to-review/to-review.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/pages/store-keeper/to-review/to-review.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesStoreKeeperToReviewToReviewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0b3JlLWtlZXBlci90by1yZXZpZXcvdG8tcmV2aWV3LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/store-keeper/to-review/to-review.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/store-keeper/to-review/to-review.page.ts ***!
    \****************************************************************/

  /*! exports provided: ToReviewPage */

  /***/
  function srcAppPagesStoreKeeperToReviewToReviewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToReviewPage", function () {
      return ToReviewPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ToReviewPage =
    /*#__PURE__*/
    function () {
      function ToReviewPage() {
        _classCallCheck(this, ToReviewPage);
      }

      _createClass(ToReviewPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ToReviewPage;
    }();

    ToReviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-to-review',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./to-review.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-keeper/to-review/to-review.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./to-review.page.scss */
      "./src/app/pages/store-keeper/to-review/to-review.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ToReviewPage);
    /***/
  },

  /***/
  "./src/app/pages/store-supervisor/to-review/to-review-routing.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/store-supervisor/to-review/to-review-routing.module.ts ***!
    \******************************************************************************/

  /*! exports provided: ToReviewPageRoutingModule */

  /***/
  function srcAppPagesStoreSupervisorToReviewToReviewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToReviewPageRoutingModule", function () {
      return ToReviewPageRoutingModule;
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


    var _to_review_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./to-review.page */
    "./src/app/pages/store-supervisor/to-review/to-review.page.ts");

    var routes = [{
      path: '',
      component: _to_review_page__WEBPACK_IMPORTED_MODULE_3__["ToReviewPage"]
    }];

    var ToReviewPageRoutingModule = function ToReviewPageRoutingModule() {
      _classCallCheck(this, ToReviewPageRoutingModule);
    };

    ToReviewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ToReviewPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/store-supervisor/to-review/to-review.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/store-supervisor/to-review/to-review.module.ts ***!
    \**********************************************************************/

  /*! exports provided: ToReviewPageModule */

  /***/
  function srcAppPagesStoreSupervisorToReviewToReviewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToReviewPageModule", function () {
      return ToReviewPageModule;
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


    var _to_review_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./to-review-routing.module */
    "./src/app/pages/store-supervisor/to-review/to-review-routing.module.ts");
    /* harmony import */


    var _to_review_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./to-review.page */
    "./src/app/pages/store-supervisor/to-review/to-review.page.ts");
    /* harmony import */


    var ionic4_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic4-rating */
    "./node_modules/ionic4-rating/dist/index.js");

    var ToReviewPageModule = function ToReviewPageModule() {
      _classCallCheck(this, ToReviewPageModule);
    };

    ToReviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], ionic4_rating__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"], _to_review_routing_module__WEBPACK_IMPORTED_MODULE_5__["ToReviewPageRoutingModule"]],
      declarations: [_to_review_page__WEBPACK_IMPORTED_MODULE_6__["ToReviewPage"]]
    })], ToReviewPageModule);
    /***/
  },

  /***/
  "./src/app/pages/store-supervisor/to-review/to-review.page.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/store-supervisor/to-review/to-review.page.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesStoreSupervisorToReviewToReviewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0b3JlLXN1cGVydmlzb3IvdG8tcmV2aWV3L3RvLXJldmlldy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/store-supervisor/to-review/to-review.page.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/store-supervisor/to-review/to-review.page.ts ***!
    \********************************************************************/

  /*! exports provided: ToReviewPage */

  /***/
  function srcAppPagesStoreSupervisorToReviewToReviewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToReviewPage", function () {
      return ToReviewPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ToReviewPage =
    /*#__PURE__*/
    function () {
      function ToReviewPage() {
        _classCallCheck(this, ToReviewPage);
      }

      _createClass(ToReviewPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ToReviewPage;
    }();

    ToReviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-to-review',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./to-review.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-supervisor/to-review/to-review.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./to-review.page.scss */
      "./src/app/pages/store-supervisor/to-review/to-review.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ToReviewPage);
    /***/
  }
}]);
//# sourceMappingURL=to-review-to-review-module-es5.js.map