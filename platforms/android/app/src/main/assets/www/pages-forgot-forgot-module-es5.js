function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forgot-forgot-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot/forgot.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot/forgot.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesForgotForgotPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding content-core\" fullscreen scrollY=\"false\">\n  <ion-grid style=\"height: 100%\">\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\" style=\"height: 100%; flex-direction: column\">\n      <h2 class=\"title\">Reset password</h2>\n      <p class=\"subtitle\" style=\"max-width: 240px; text-align: center; padding-bottom: 20px;\">Enter your email and we\n        will send you a\n        reset link</p>\n      <small style=\"text-align: center\">For those who is\n        Air Selangor Staff\n        , please reset your password at Air Selangor Active\n        Directory. Thank\n        you</small>\n      <form class=\"form\" [formGroup]=\"validations_form\">\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" formControlName=\"email\" placeholder=\"Enter your email\"></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validation_messages.email\">\n            <div class=\"error-message\"\n              *ngIf=\"validations_form.get('email').hasError(validation.type) && (validations_form.get('email').dirty || validations_form.get('email').touched)\">\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n        <div class=\"ion-text-center\">\n          <ion-button *ngIf=\"!isLoading\" type=\"submit\" [disabled]=\"!validations_form.valid\" shape=\"round\"\n            (click)=\"resetPassword()\" color=\"primary\">Reset Password\n          </ion-button>\n          <ion-button disabled *ngIf=\"isLoading\" type=\"submit\" shape=\"round\" color=\"primary\">\n            <ion-spinner name=\"bubbles\"></ion-spinner>\n          </ion-button>\n        </div>\n      </form>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/forgot/forgot-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/forgot/forgot-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: ForgotPageRoutingModule */

  /***/
  function srcAppPagesForgotForgotRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPageRoutingModule", function () {
      return ForgotPageRoutingModule;
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


    var _forgot_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./forgot.page */
    "./src/app/pages/forgot/forgot.page.ts");

    var routes = [{
      path: '',
      component: _forgot_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPage"]
    }];

    var ForgotPageRoutingModule = function ForgotPageRoutingModule() {
      _classCallCheck(this, ForgotPageRoutingModule);
    };

    ForgotPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ForgotPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/forgot/forgot.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/forgot/forgot.module.ts ***!
    \***********************************************/

  /*! exports provided: ForgotPageModule */

  /***/
  function srcAppPagesForgotForgotModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function () {
      return ForgotPageModule;
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


    var _forgot_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./forgot-routing.module */
    "./src/app/pages/forgot/forgot-routing.module.ts");
    /* harmony import */


    var _forgot_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./forgot.page */
    "./src/app/pages/forgot/forgot.page.ts");

    var ForgotPageModule = function ForgotPageModule() {
      _classCallCheck(this, ForgotPageModule);
    };

    ForgotPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forgot_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPageRoutingModule"]],
      declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"]]
    })], ForgotPageModule);
    /***/
  },

  /***/
  "./src/app/pages/forgot/forgot.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/forgot/forgot.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesForgotForgotPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form {\n  min-width: 250px !important;\n}\n.form .validation-errors {\n  min-height: 25px;\n}\n.form .error-message {\n  color: var(--ion-color-danger);\n  text-align: right;\n  font-size: 0.8em;\n  padding-top: 5px;\n}\n.form ion-input {\n  --color: var(--ion-color-medium);\n  --placeholder-font-weight: 400;\n  --background: #f2f2f2;\n  border-radius: 15px;\n  --padding-start: 15px !important;\n  margin-top: 0.7rem;\n}\n.form ion-item {\n  --background: transparent;\n  border-radius: 15px;\n}\nimg {\n  display: block;\n  margin: 0 auto;\n  max-width: 50%;\n  padding-bottom: 25px;\n}\n@media (max-height: 450px) {\n  h2.title {\n    display: none;\n  }\n\n  p.subtitle {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wbnNiL0RvY3VtZW50cy9HaXRIdWIvYWlyc2VsLXJmaWQvbW9iaWxlL3NyYy9hcHAvcGFnZXMvZm9yZ290L2ZvcmdvdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZvcmdvdC9mb3Jnb3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7QUNDRjtBRENFO0VBQ0UsZ0JBQUE7QUNDSjtBREVFO0VBQ0UsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREdFO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FDREo7QURJRTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUNGSjtBRE1BO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNIRjtBRE9BO0VBQ0U7SUFDRSxhQUFBO0VDSkY7O0VETUE7SUFDRSxhQUFBO0VDSEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZvcmdvdC9mb3Jnb3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xuICBtaW4td2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XG5cbiAgLnZhbGlkYXRpb24tZXJyb3JzIHtcbiAgICBtaW4taGVpZ2h0OiAyNXB4O1xuICB9XG5cbiAgLmVycm9yLW1lc3NhZ2Uge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gIH1cblxuICBpb24taW5wdXQge1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAtLWJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAwLjdyZW07XG4gIH1cblxuICBpb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB9XG59XG5cbmltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA1MCU7XG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xufVxuXG4vLyBBdm9pZCBrZXlib2FyZCB0byBoaWRlIG9yIG1vdmUgZWxlbWVudHMgaW4gdGhlIFVJXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XG4gIGgyLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIHAuc3VidGl0bGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiIsIi5mb3JtIHtcbiAgbWluLXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xufVxuLmZvcm0gLnZhbGlkYXRpb24tZXJyb3JzIHtcbiAgbWluLWhlaWdodDogMjVweDtcbn1cbi5mb3JtIC5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbi5mb3JtIGlvbi1pbnB1dCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XG4gIC0tYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDAuN3JlbTtcbn1cbi5mb3JtIGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDUwJTtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG59XG5cbkBtZWRpYSAobWF4LWhlaWdodDogNDUwcHgpIHtcbiAgaDIudGl0bGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBwLnN1YnRpdGxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/forgot/forgot.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/forgot/forgot.page.ts ***!
    \*********************************************/

  /*! exports provided: ForgotPage */

  /***/
  function srcAppPagesForgotForgotPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPage", function () {
      return ForgotPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/auth/auth.service */
    "./src/app/shared/services/auth/auth.service.ts"); // import { NotificationService } from 'src/app/shared/handler/notification/notification.service';


    var ForgotPage =
    /*#__PURE__*/
    function () {
      function ForgotPage(menu, authService, formBuilder, router) {
        _classCallCheck(this, ForgotPage);

        this.menu = menu;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.validation_messages = {
          'email': [{
            type: 'required',
            message: 'Email is required.'
          }, {
            type: 'pattern',
            message: 'Please enter a valid email.'
          }]
        }; // Loading

        this.isLoading = false;
      }

      _createClass(ForgotPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validations_form = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]))
          });
          this.menu.enable(false, "menuNotification");
        }
      }, {
        key: "resetPassword",
        value: function resetPassword() {// this.isLoading = true
          // this.authService.resetPassword(this.validations_form.value).subscribe(
          //   () => {
          //     // Success
          //     this.isLoading = false
          //   },
          //   () => {
          //     // Failed
          //     this.isLoading = false
          //   },
          //   () => {
          //     // After
          //     this.toastr.openToastr('A reset link has been sent to your email')
          //   }
          // )
        }
      }, {
        key: "navigatePage",
        value: function navigatePage(path) {
          var navigationPath = '/' + path;
          this.router.navigate([navigationPath]);
        }
      }]);

      return ForgotPage;
    }();

    ForgotPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"]
      }, {
        type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    ForgotPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-forgot',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgot.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot/forgot.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forgot.page.scss */
      "./src/app/pages/forgot/forgot.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"], src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], ForgotPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-forgot-forgot-module-es5.js.map