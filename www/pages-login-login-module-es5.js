function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"ion-no-border\">\n    <ion-title></ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content class=\"content-core\">\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide>\n      <ion-img src=\"assets/svg/analytics.svg\"></ion-img>\n      <h1 class=\"ion-text-center\">Track & Monitor</h1>\n      <p class=\"ion-text-center\">\n        Track & monitor your work activity assigned to increase productivity &\n        efficiency\n      </p>\n    </ion-slide>\n    <ion-slide>\n      <ion-img src=\"assets/svg/efficient.svg\"></ion-img>\n      <h1 class=\"ion-text-center\">Analyse</h1>\n      <p class=\"ion-text-center\">\n        Examine the data to make a better decision making\n      </p>\n    </ion-slide>\n    <ion-slide>\n      <ion-img src=\"assets/svg/personal_finance.svg\"></ion-img>\n      <h1 class=\"ion-text-center\">Save Cost</h1>\n      <p class=\"ion-text-center\">\n        Cost to maintain the asset become more reasonable than before\n      </p>\n    </ion-slide>\n  </ion-slides>\n\n  <form class=\"form\" [formGroup]=\"validations_form\" (ngSubmit)=\"login()\" style=\"margin:0px;\">\n    <h3 class=\"ion-margin-start\">Sign in</h3>\n    <ion-item lines=\"none\">\n      <ion-label position=\"stacked\">Username</ion-label>\n      <ion-input type=\"text\" formControlName=\"username\" placeholder=\"Your username\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.username\">\n        <div class=\"error-message\"\n          *ngIf=\"validations_form.get('username').hasError(validation.type) && (validations_form.get('username').dirty || validations_form.get('username').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-item lines=\"none\">\n      <ion-label position=\"stacked\">Password</ion-label>\n      <ion-input type=\"password\" formControlName=\"password\" placeholder=\"Password\"></ion-input>\n    </ion-item>\n    <ion-grid>\n      <!-- <ion-row>\n        <ion-col class=\"ion-padding-start\" size=\"6\">\n          <ion-item lines=\"none\" class=\"ion-no-padding\">\n            <ion-checkbox [(ngModel)]=\"isLogin\" [ngModelOptions]=\"{standalone: true}\" slot=\"start\"\n              class=\"ion-no-margin\"></ion-checkbox>\n            <ion-label>\n              <p>Stay Login?</p>\n            </ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col class=\"ion-text-right\" size=\"6\">\n          <ion-item lines=\"none\" class=\"ion-no-padding\">\n            <ion-label class=\"ion-text-right\">\n              <p>\n                <a (click)=\"navigateForgotPage()\">Forgot Password </a>\n              </p>\n            </ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row> -->\n    </ion-grid>\n    <ion-button *ngIf=\"!isLoading\" shape=\"round\" expand=\"block\" color=\"primary\" mode=\"ios\"\n      class=\"ion-margin-start ion-margin-end ion-margin-top\" [disabled]=\"!validations_form.valid\" (click)=\"login()\">\n      Sign in\n    </ion-button>\n    <ion-button disabled *ngIf=\"isLoading\" type=\"submit\" shape=\"round\" expand=\"block\" color=\"primary\" mode=\"ios\"\n      class=\"ion-margin-start ion-margin-end ion-margin-top\">\n      <ion-spinner name=\"bubbles\"></ion-spinner>\n    </ion-button>\n  </form>\n  <div class=\"lower-content\" style=\"bottom:0;width:100%;text-align:center;\">\n    <div>\n      <p class=\"text-center\">Version 1.0.1 (DEV)</p>\n      <div style=\"height:250px;\">&nbsp;</div>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/login/login-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/login/login-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/pages/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".my-checkbox {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nion-checkbox {\n  --size: 16px;\n  margin-left: 0px;\n  margin-right: 16px;\n}\n\nion-img {\n  max-width: 70vw;\n  max-height: 70vh;\n  margin-bottom: 4vh;\n  overflow: hidden;\n}\n\nion-slide {\n  height: 30vh;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-top: 2rem;\n}\n\nh1 {\n  font-size: 1rem !important;\n}\n\np {\n  font-size: 0.8rem;\n}\n\nion-content {\n  --padding-end: 24px;\n  --padding-start: 24px;\n}\n\n.form {\n  margin-top: 3rem;\n  min-width: 250px !important;\n}\n\n.form .validation-errors {\n  min-height: 25px;\n}\n\n.form .error-message {\n  color: var(--ion-color-danger);\n  text-align: right;\n  font-size: 0.8em;\n  padding-top: 5px;\n}\n\n.form ion-input {\n  --color: var(--ion-color-medium);\n  --placeholder-font-weight: 400;\n  --background: #fff;\n  border-radius: 15px;\n  --padding-start: 15px !important;\n  margin-top: 0.7rem;\n}\n\n.form ion-item {\n  --background: transparent;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wbnNiL0RvY3VtZW50cy9HaXRIdWIvYWlyc2VsLXJmaWQvbW9iaWxlL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRE1BO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0hGOztBRE1BO0VBQ0UsWUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGdCQUFBO0FDSEY7O0FETUE7RUFDRSwwQkFBQTtBQ0hGOztBREtBO0VBQ0UsaUJBQUE7QUNGRjs7QURJQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0VBQ0EsMkJBQUE7QUNERjs7QURHRTtFQUNFLGdCQUFBO0FDREo7O0FESUU7RUFDRSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBREtFO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FDSEo7O0FETUU7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktY2hlY2tib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pb24tY2hlY2tib3gge1xuICAtLXNpemU6IDE2cHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cblxuLy8gaW9uLWNvbnRlbnQge1xuLy8gICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvY292ZXItcGljLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG4vLyB9XG5cbmlvbi1pbWcge1xuICBtYXgtd2lkdGg6IDcwdnc7XG4gIG1heC1oZWlnaHQ6IDcwdmg7XG4gIG1hcmdpbi1ib3R0b206IDR2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaW9uLXNsaWRlIHtcbiAgaGVpZ2h0OiAzMHZoO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xufVxucCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctZW5kOiAyNHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDI0cHg7XG59XG5cbi5mb3JtIHtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbiAgbWluLXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xuXG4gIC52YWxpZGF0aW9uLWVycm9ycyB7XG4gICAgbWluLWhlaWdodDogMjVweDtcbiAgfVxuXG4gIC5lcnJvci1tZXNzYWdlIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICB9XG5cbiAgaW9uLWlucHV0IHtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMC43cmVtO1xuICB9XG5cbiAgaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgfVxufVxuXG4vLyBsb3dlci1jb250ZW50IHtcbi8vICAgZmxleC1ncm93OiAxO1xuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4vLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gfSIsIi5teS1jaGVja2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmlvbi1jaGVja2JveCB7XG4gIC0tc2l6ZTogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24taW1nIHtcbiAgbWF4LXdpZHRoOiA3MHZ3O1xuICBtYXgtaGVpZ2h0OiA3MHZoO1xuICBtYXJnaW4tYm90dG9tOiA0dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmlvbi1zbGlkZSB7XG4gIGhlaWdodDogMzB2aDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1lbmQ6IDI0cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMjRweDtcbn1cblxuLmZvcm0ge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBtaW4td2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XG59XG4uZm9ybSAudmFsaWRhdGlvbi1lcnJvcnMge1xuICBtaW4taGVpZ2h0OiAyNXB4O1xufVxuLmZvcm0gLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDAuOGVtO1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLmZvcm0gaW9uLWlucHV0IHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDQwMDtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMC43cmVtO1xufVxuLmZvcm0gaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/login/login.page.ts ***!
    \*******************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/auth/auth.service */
    "./src/app/shared/services/auth/auth.service.ts");
    /* harmony import */


    var src_app_shared_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/employee/employee.service */
    "./src/app/shared/services/employee/employee.service.ts");
    /* harmony import */


    var src_app_shared_handler_notification_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/handler/notification/notification.service */
    "./src/app/shared/handler/notification/notification.service.ts");
    /* harmony import */


    var src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/services/users/users.service */
    "./src/app/shared/services/users/users.service.ts");
    /* harmony import */


    var src_app_shared_services_wams_wams_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/services/wams/wams.service */
    "./src/app/shared/services/wams/wams.service.ts");

    var LoginPage =
    /*#__PURE__*/
    function () {
      function LoginPage(alertController, menu, router, authService, employeeService, userService, wamsService, formBuilder, toastr) {
        _classCallCheck(this, LoginPage);

        this.alertController = alertController;
        this.menu = menu;
        this.router = router;
        this.authService = authService;
        this.employeeService = employeeService;
        this.userService = userService;
        this.wamsService = wamsService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.validation_messages = {
          username: [{
            type: "required",
            message: "Username is required."
          }, {
            type: "pattern",
            message: "Please enter a valid username."
          }],
          password: [{
            type: "required",
            message: "Password is required."
          }, {
            type: "minlength",
            message: "At least 6 characters long."
          }]
        }; // Loading

        this.isLoading = false; // Stay Login

        this.isLogin = false; // Slide

        this.slideOpts = {
          initialSlide: 0,
          // speed: 4000,
          autoplay: {
            delay: 4000
          }
        }; // set a default password for user create user account
        // use this password to login to obtain token in our system
        // were not using their input password to login to our system.
        // their input password will only check at AD
        // if exist in AD then login to our system using this below password and the input username

        this.defaultPassword = 'air$elUs3r';
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.addEventListener('keyboardDidShow', function () {
            document.activeElement.scrollIntoView({
              behavior: 'smooth'
            });
          }); // window.location.reload();

          this.menu.enable(false, "menuNotification"); // "username": "hafez_azman",
          // "password": "5e1AIS04556"

          this.validations_form = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]( // "mobileapps",
            // "haziq_y",
            // "fadhillah",
            // "shafiq_ab",
            // "mahadzir_nadzri",
            // "mohdhuzaimi",
            "", // "rfidapps",
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]( // "M0bile@321",
            // "415F@dhill@h",
            // "*AIS05163",
            // "5e1AIS01780",
            // "AIS03951++",
            // "Ais1868@",
            "", // "@ppsRF1D!!",
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]))
          });
        }
      }, {
        key: "login",
        value: function login() {
          var _this = this;

          this.isLoading = true; // to login AD AIR SELANGOR

          var bodyAD = {
            service_name: "getActiveDirectory",
            username: this.validations_form.value.username,
            password: this.validations_form.value.password
          }; // // STEP 1 = 
          ////// to check the credential exist in current database or not
          // this.authService
          //   .obtainToken(this.validations_form.value, this.isLogin)
          //   .subscribe(
          //     (res) => {
          //       // Success
          //       console.log("resAD = ", res)
          //       // STEP 2
          //       this.isLoading = false;
          //       this.navigateByRole(this.authService.userType);
          //     },
          //     (err) => {
          // // Failed
          // // STEP 3
          // // console.error("err", err);
          /////// to check credential at wams 

          this.wamsService.getService(bodyAD).subscribe(function (resAD) {
            console.log("sini 1");
            console.log("resAD = ", resAD);
            var staff_id = resAD['staff_no']; // to find employee detail in table employee
            ////// check respon status

            if (resAD.status == "valid") {
              ///// get the employee data from the respon based on hr_employee_number
              // this.employeeService
              //   .filter("hr_employee_number=" + resAD.staff_no)
              //   .subscribe(
              //     (resEmp) => {
              _this.employeeService.filter("hr_employee_number=" + staff_id).subscribe(function (resEmp) {
                console.log("sini 2", resEmp);
                console.log("resEmp[0].uuid", resEmp[0].uuid); // to create user account in PIPE who AD is valid
                // STEP 4

                if (resEmp.length > 0) {
                  console.log("sini 3");
                  var bodyPIPE = {
                    username: _this.validations_form.value.username,
                    email: resAD.email ? resAD.email : "",
                    // email: '',
                    password1: _this.defaultPassword,
                    password2: _this.defaultPassword
                  }; ////// check in table user whether the user exist or not

                  _this.userService.filter('employee_id=' + resEmp[0].uuid).subscribe(function (resUserSer) {
                    console.log("resUserSer == ", resUserSer); // console.log("resUserSerid == ", resUserSer[0]['id'])
                    //// if user not will create new user 

                    if (resUserSer.length == 0) {
                      console.log("acc not exist");
                      console.log("bodyPIPE = ", bodyPIPE);

                      _this.authService.registerAccount(bodyPIPE).subscribe(function (resPIPE) {
                        console.log("sini 4", resPIPE);

                        if (resPIPE) {
                          resAD["first_name"] = resAD.name;
                          resAD["status"] = true;
                          resAD["department"] = "";
                          resAD["employee_id"] = resEmp[0].uuid;
                          resAD["service_area"] = resAD.region;
                          resAD["user_type"] = 'PL';

                          _this.userService.update(resAD, resPIPE.user.pk).subscribe(function (resPIPE) {
                            console.log("relogin => ", resPIPE);

                            _this.retryLogin();
                          });
                        }
                      }, function (err) {
                        console.error("err", err);
                      });
                    } else {
                      ////// if user exist will update the info
                      console.log("acc exist");
                      resAD["first_name"] = resAD.name;
                      resAD["status"] = true;
                      resAD["department"] = "";
                      resAD["service_area"] = resAD.region;
                      console.log("resUserSer['id']", resUserSer[0]['id']);

                      _this.userService.update(resAD, resUserSer[0]['id']).subscribe(function (resPIPE) {
                        console.log("relogin => ", resPIPE);

                        _this.retryLogin();
                      });
                    }
                  }, function (errUserSer) {
                    console.log("errUserSer", errUserSer);
                  });
                } else {
                  _this.empNotExist();
                }
              }, function (err) {
                console.error("err", err);
              });
            } else {
              _this.isLoading = false;

              _this.userNotExist(); //   // to create user account in PIPE who AD is invalid
              //   // STEP 5
              //   let bodyPIPE = {
              //     username: this.validations_form.value.username,
              //     // email: "",
              //     password1: this.validations_form.value.password,
              //     password2: this.validations_form.value.password,
              //   };
              //   this.authService.registerAccount(bodyPIPE).subscribe(
              //     (resPIPE) => {
              //       this.retryLogin();
              //     },
              //     (err) => {
              //       console.error("err", err);
              //     }
              //   );

            }
          }, function (err) {
            console.error("err", err);
          }); // //   },
          // //   () => {
          // //     // After
          // //     // this.toastr.openToastr("Welcome back");
          // //   }
          // // );

          /* if (
            this.loginForm.username == "technical" ||
            this.loginForm.username == "1"
          ) {
            // technical
            this.router.navigate(["/technical/tabs/tab1"]);
          } else if (
            this.loginForm.username == "operator" ||
            this.loginForm.username == "2"
          ) {
            // operator
            this.router.navigate(["/operator/tabs/tab1"]);
          } else if (
            this.loginForm.username == "store-keeper" ||
            this.loginForm.username == "3"
          ) {
            // inventory
            this.router.navigate(["/store-keeper/tabs/tab1"]);
          } else if (
            this.loginForm.username == "store-supervisor" ||
            this.loginForm.username == "4"
          ) {
            // inventory
            this.router.navigate(["/store-supervisor/tabs/tab1"]);
          } else {
            alert("wrong user!");
          } */
        }
      }, {
        key: "retryLogin",
        value: function retryLogin() {
          var _this2 = this;

          this.submit_form = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.validations_form.value.username),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.defaultPassword)
          });
          this.authService.obtainToken(this.submit_form.value, this.isLogin).subscribe(function (res) {
            // Success
            // STEP 2
            _this2.isLoading = false;

            _this2.navigateByRole(_this2.authService.userType);
          }, function (err) {
            // Failed
            // STEP 3
            _this2.isLoading = false;
          }, function () {});
        }
      }, {
        key: "navigateByRole",
        value: function navigateByRole(userType) {
          /* Data Reference From DB */
          // ('OP', 'Operator'),
          // ('SK', 'Store Keeper'),
          // ('SS', 'Store Supervisor'),
          // ('TC', 'Technical Crew')
          console.log("userType = ", userType);

          if (userType === "TC" || userType === "PL") {
            // technical
            this.router.navigate(["/technical/tabs/tab1"]);
          } else if (userType === "OP") {
            // operator
            this.router.navigate(["/operator/tabs/tab1"]);
          } else if (userType === "SK") {
            // store keeper
            this.router.navigate(["/store-keeper/tabs/tab1"]);
          } else if (userType === "SS") {
            // store supervisor
            this.router.navigate(["/store-supervisor/tabs/tab1"]);
          } else if (userType === "IV") {
            // inventory
            this.router.navigate(["/inventory-management/tabs/tab1"]);
          } else {
            this.wrongCredential();
          }
        }
      }, {
        key: "forgotPassword",
        value: function forgotPassword() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: "Forgot Password",
                      subHeader: "Disclaimer",
                      message: "Forgot password is for operator ONLY. Meanwhile, for technical, please refer WAMS and for store keeper, please refer ERP",
                      inputs: [{
                        name: "email",
                        type: "email",
                        placeholder: "Enter email"
                      }],
                      buttons: [{
                        text: "Cancel",
                        role: "cancel",
                        handler: function handler() {}
                      }, {
                        text: "Submit",
                        handler: function handler() {
                          _this3.emailCheck();
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
        key: "emailCheck",
        value: function emailCheck() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: "Forgot Password",
                      message: "Forgot password success. Please refer your email for further details.",
                      buttons: ["OK"]
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
        key: "wrongCredential",
        value: function wrongCredential() {
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
                      header: "Wrong Credential",
                      message: "You have entered wrong credentials. Please try again.",
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
      }, {
        key: "empNotExist",
        value: function empNotExist() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertController.create({
                      header: "Data Not Found",
                      message: "Employee not exist. Please try again.",
                      buttons: ["OK"]
                    });

                  case 2:
                    alert = _context4.sent;
                    _context4.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "userNotExist",
        value: function userNotExist() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertController.create({
                      header: "Data Not Found",
                      message: "Username or password did not match. Please try again.",
                      buttons: ["OK"]
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "navigateForgotPage",
        value: function navigateForgotPage() {
          this.router.navigate(["/forgot"]);
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: src_app_shared_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"]
      }, {
        type: src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"]
      }, {
        type: src_app_shared_services_wams_wams_service__WEBPACK_IMPORTED_MODULE_9__["WamsService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: src_app_shared_handler_notification_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-login",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/pages/login/login.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], src_app_shared_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"], src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"], src_app_shared_services_wams_wams_service__WEBPACK_IMPORTED_MODULE_9__["WamsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_shared_handler_notification_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]])], LoginPage);
    /***/
  },

  /***/
  "./src/app/shared/handler/notification/notification.service.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/shared/handler/notification/notification.service.ts ***!
    \*********************************************************************/

  /*! exports provided: NotificationService */

  /***/
  function srcAppSharedHandlerNotificationNotificationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
      return NotificationService;
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

    var NotificationService =
    /*#__PURE__*/
    function () {
      function NotificationService(toastr) {
        _classCallCheck(this, NotificationService);

        this.toastr = toastr;
      }

      _createClass(NotificationService, [{
        key: "openToastrConnection",
        value: function openToastrConnection() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var message, toast;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    message = "No connection";
                    _context6.next = 3;
                    return this.toastr.create({
                      message: message,
                      duration: 3000,
                      position: "top",
                      color: "warning"
                    });

                  case 3:
                    toast = _context6.sent;
                    toast.present();

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "openToastrError",
        value: function openToastrError(statusText) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var message, toast;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    message = statusText;
                    _context7.next = 3;
                    return this.toastr.create({
                      message: message,
                      duration: 3000,
                      position: "top",
                      color: "danger"
                    });

                  case 3:
                    toast = _context7.sent;
                    toast.present();

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "openToastr",
        value: function openToastr(statusText) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var message, toast;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    message = statusText;
                    _context8.next = 3;
                    return this.toastr.create({
                      message: message,
                      duration: 3000,
                      position: "top",
                      color: "primary"
                    });

                  case 3:
                    toast = _context8.sent;
                    toast.present();

                  case 5:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }]);

      return NotificationService;
    }();

    NotificationService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])], NotificationService);
    /***/
  },

  /***/
  "./src/app/shared/services/users/users.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/services/users/users.service.ts ***!
    \********************************************************/

  /*! exports provided: UsersService */

  /***/
  function srcAppSharedServicesUsersUsersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersService", function () {
      return UsersService;
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

    var UsersService =
    /*#__PURE__*/
    function () {
      function UsersService(http) {
        _classCallCheck(this, UsersService);

        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/users/"; // Data

        this.umodels = [];
      }

      _createClass(UsersService, [{
        key: "post",
        value: function post(body) {
          return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("UsersModel", res);
          }));
        }
      }, {
        key: "get",
        value: function get() {
          var _this4 = this;

          return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("UsersModel", res);
            _this4.umodels = res;
          }));
        }
      }, {
        key: "getOne",
        value: function getOne(id) {
          var _this5 = this;

          var urlID = this.url + id + "/";
          return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("UsersModel", res);
            _this5.umodel = res;
          }));
        }
      }, {
        key: "update",
        value: function update(body, id) {
          var urlUpdate = this.url + id + "/";
          console.log("urlUpdate", urlUpdate);
          return this.http.patch(urlUpdate, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("UsersModel", res);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("UsersModel", res);
          }));
        }
      }, {
        key: "filter",
        value: function filter(field) {
          var urlFilter = this.url + "?" + field;
          console.log("urlFilter", urlFilter);
          return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("UsersModel", res);
          }));
        }
      }]);

      return UsersService;
    }();

    UsersService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], UsersService);
    /***/
  },

  /***/
  "./src/app/shared/services/wams/wams.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/services/wams/wams.service.ts ***!
    \******************************************************/

  /*! exports provided: WamsService */

  /***/
  function srcAppSharedServicesWamsWamsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WamsService", function () {
      return WamsService;
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

    var WamsService =
    /*#__PURE__*/
    function () {
      // url: string = "http://127.0.0.1:8000/v1/wams/services/";
      function WamsService(http) {
        _classCallCheck(this, WamsService);

        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/wams/services/";
      }

      _createClass(WamsService, [{
        key: "getService",
        value: function getService(body) {
          return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log(body.service_name, res);
          }));
        }
      }, {
        key: "getEmployee",
        value: function getEmployee() {
          var body = {
            service_name: "getEmployee"
          };
          return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("getEmployee", res);
          }));
        }
      }, {
        key: "getWorkOrderActivity",
        value: function getWorkOrderActivity() {
          var body = {
            service_name: "getWorkOrderActivity"
          };
          return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("getWorkOrderActivity", res);
          }));
        }
      }, {
        key: "getAssetSyncOutbound",
        value: function getAssetSyncOutbound() {
          var body = {
            service_name: "getAssetSyncOutbound"
          };
          return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("getAssetSyncOutbound", res);
          }));
        }
      }, {
        key: "getAssetBadgeNo",
        value: function getAssetBadgeNo(badge_no) {
          var body = {
            service_name: "getAsset",
            badge_number: badge_no
          };
          return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("getAsset", res);
          }));
        }
      }]);

      return WamsService;
    }();

    WamsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    WamsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], WamsService);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map