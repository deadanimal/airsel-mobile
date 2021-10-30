(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["work-order-work-order-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/work-order/work-order.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/work-order/work-order.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\" mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Work Order</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content-core\">\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        {{ work_order.work_order }}\n      </ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-list>\n        <!-- <ion-item>\n          <ion-label position=\"stacked\">Name</ion-label>\n          <ion-input readonly value=\"Ahmad Albab\"></ion-input>\n        </ion-item> -->\n\n        <ion-list>\n          <ion-label position=\"stacked\">Name</ion-label>\n          <ion-item class=\"nopaddingstart\">\n            <ion-label>{{ userService.umodel.first_name }} {{ userService.umodel.last_name }}</ion-label>\n          </ion-item>\n          <!-- <ion-item class=\"nopaddingstart\">\n            <ion-label>Izzat Danial</ion-label>\n          </ion-item>\n          <ion-item class=\"nopaddingstart\">\n            <ion-label>Syafiq Basri</ion-label>\n          </ion-item>\n          <ion-item class=\"nopaddingstart\">\n            <ion-label>Amirah Aisyah</ion-label>\n          </ion-item>\n          <ion-item class=\"nopaddingstart\">\n            <ion-label>Siti Munirah</ion-label>\n          </ion-item> -->\n        </ion-list>\n\n        <ion-item class=\"nopaddingstart\">\n          <ion-label position=\"stacked\">Asset Location</ion-label>\n          <ion-textarea readonly rows=\"2\" value=\"BT 3 3/4 JALAN KLANG LAMA PUMP HOUSE\"></ion-textarea>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <div class=\"ion-text-center\">\n    <h6>List of Work Activity (WA):</h6>\n  </div>\n\n  <div>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-card color=\"danger\">\n            <ion-card-content>\n              <div class=\"ion-text-justify\">\n                Borang Senarai Semak Pemeriksaan Visual & Penyenggaraan Injap Altitude Di Tapak      \n              </div>\n            </ion-card-content>\n            <ion-item lines=\"none\">\n              <ion-icon name=\"alert-circle\" slot=\"start\" size=\"large\" color=\"danger\"></ion-icon>\n              <ion-icon slot=\"end\" size=\"large\" name=\"create\" [routerLink]=\"['/technical/form-first']\"></ion-icon>\n            </ion-item>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-card color=\"success\">\n            <ion-card-content>\n              <div class=\"ion-text-justify\">\n                Borang Pemeriksaan Peralatan Elektrik\n              </div>\n            </ion-card-content>\n            <ion-item lines=\"none\">\n              <ion-icon name=\"checkbox\" slot=\"start\" size=\"large\" color=\"success\"></ion-icon>\n              <ion-icon slot=\"end\" size=\"large\" name=\"eye\"></ion-icon>\n            </ion-item>\n          </ion-card>\n        </ion-col>\n        <ion-col>\n          <ion-card color=\"success\">\n            <ion-card-content>\n              <div class=\"ion-text-justify\">\n                Borang Pemeriksaan Peralatan Mekanikal\n              </div>\n            </ion-card-content>\n            <ion-item lines=\"none\">\n              <ion-icon name=\"checkbox\" slot=\"start\" size=\"large\" color=\"success\"></ion-icon>\n              <ion-icon slot=\"end\" size=\"large\" name=\"eye\"></ion-icon>\n            </ion-item>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div class=\"ion-padding ion-text-center\">\n    <ion-button color=\"primary\" (click)=\"submit()\">Submit</ion-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/technical/work-order/work-order-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/technical/work-order/work-order-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: WorkOrderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOrderPageRoutingModule", function() { return WorkOrderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _work_order_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./work-order.page */ "./src/app/pages/technical/work-order/work-order.page.ts");




const routes = [
    {
        path: '',
        component: _work_order_page__WEBPACK_IMPORTED_MODULE_3__["WorkOrderPage"]
    }
];
let WorkOrderPageRoutingModule = class WorkOrderPageRoutingModule {
};
WorkOrderPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WorkOrderPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/technical/work-order/work-order.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/technical/work-order/work-order.module.ts ***!
  \*****************************************************************/
/*! exports provided: WorkOrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOrderPageModule", function() { return WorkOrderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _work_order_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./work-order-routing.module */ "./src/app/pages/technical/work-order/work-order-routing.module.ts");
/* harmony import */ var _work_order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./work-order.page */ "./src/app/pages/technical/work-order/work-order.page.ts");







let WorkOrderPageModule = class WorkOrderPageModule {
};
WorkOrderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _work_order_routing_module__WEBPACK_IMPORTED_MODULE_5__["WorkOrderPageRoutingModule"]
        ],
        declarations: [_work_order_page__WEBPACK_IMPORTED_MODULE_6__["WorkOrderPage"]]
    })
], WorkOrderPageModule);



/***/ }),

/***/ "./src/app/pages/technical/work-order/work-order.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/technical/work-order/work-order.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-grid {\n  --ion-grid-padding: 0px;\n}\n\n.nopaddingstart {\n  --padding-start: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wbnNiL0RvY3VtZW50cy9HaXRIdWIvYWlyc2VsLW1vYmlsZS9zcmMvYXBwL3BhZ2VzL3RlY2huaWNhbC93b3JrLW9yZGVyL3dvcmstb3JkZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90ZWNobmljYWwvd29yay1vcmRlci93b3JrLW9yZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGVjaG5pY2FsL3dvcmstb3JkZXIvd29yay1vcmRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZCB7XG4gIC0taW9uLWdyaWQtcGFkZGluZzogMHB4O1xufVxuXG4ubm9wYWRkaW5nc3RhcnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cbiIsImlvbi1ncmlkIHtcbiAgLS1pb24tZ3JpZC1wYWRkaW5nOiAwcHg7XG59XG5cbi5ub3BhZGRpbmdzdGFydCB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/technical/work-order/work-order.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/technical/work-order/work-order.page.ts ***!
  \***************************************************************/
/*! exports provided: WorkOrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOrderPage", function() { return WorkOrderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/users/users.service */ "./src/app/shared/services/users/users.service.ts");





let WorkOrderPage = class WorkOrderPage {
    constructor(alertController, menu, route, router, userService) {
        this.alertController = alertController;
        this.menu = menu;
        this.route = route;
        this.router = router;
        this.userService = userService;
        // Datas
        this.work_order = {
            work_order: "",
            activity_type: "",
            asset: "",
            completed_at: "",
            created_at: "",
            due_date: "",
            id: "",
            maintenance_form: "",
            modified_at: "",
            name: "",
            status: "",
            wams_work_id: "",
        };
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.work_order = this.router.getCurrentNavigation().extras.state.work_order;
            }
        });
    }
    ngOnInit() {
        this.menu.enable(false, "menuNotification");
    }
    submit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Work Order',
                message: 'Your work order have successfully submitted into the system. Thank you.',
                buttons: [
                    {
                        text: 'OK',
                        handler: () => {
                            this.router.navigate(['/technical/maintenance-work-detail']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
WorkOrderPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] }
];
WorkOrderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-work-order",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./work-order.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/work-order/work-order.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./work-order.page.scss */ "./src/app/pages/technical/work-order/work-order.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]])
], WorkOrderPage);



/***/ })

}]);
//# sourceMappingURL=work-order-work-order-module-es2015.js.map