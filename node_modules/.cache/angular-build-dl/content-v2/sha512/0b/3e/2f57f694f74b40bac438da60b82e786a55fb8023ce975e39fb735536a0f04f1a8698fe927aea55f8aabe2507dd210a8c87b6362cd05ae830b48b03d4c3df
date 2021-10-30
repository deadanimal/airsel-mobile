(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inventory-management-inventory-management-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory-management/list-item/list-item.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory-management/list-item/list-item.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-title style=\"font-weight: bold\"> List of Item </ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n      <!--- Note that these columns can be defined in any order.\n            The actual rendered columns are set as a property on the row definition\" -->\n\n      <!-- Position Column -->\n      <!-- <ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef> No. </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n      </ng-container> -->\n\n      <!-- Item Column -->\n      <ng-container matColumnDef=\"item\">\n        <th mat-header-cell *matHeaderCellDef> Item </th>\n        <td mat-cell *matCellDef=\"let element\">\n          {{element.item}}\n        </td>\n      </ng-container>\n\n      <!-- Description Column -->\n      <ng-container matColumnDef=\"description\">\n        <th mat-header-cell *matHeaderCellDef> Description </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n      </ng-container>\n\n      <!-- Quantity Column -->\n      <ng-container matColumnDef=\"quantity\">\n        <th mat-header-cell *matHeaderCellDef> Quantity </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.quantity}} </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </ion-card>\n\n  <div class=\"ion-text-center\">\n    <ion-button color=\"primary\" shape=\"round\" size=\"small\" (click)=\"closeList()\">Close</ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory-management/qr-scanner/qr-scanner.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory-management/qr-scanner/qr-scanner.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"ion-text-center\" style=\"font-weight: bold;\">\n      QR Code\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-fab vertical=\"top\" horizontal=\"end\" edge slot=\"fixed\">\n    <ion-fab-button color=\"light\" (click)=\"backButton()\">\n      <ion-icon name=\"arrow-back-circle-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab> -->\n  <img src=\"assets/image/softwarb_qr_scanner_white.png\" alt=\"\">\n  <div class=\"ion-text-center\" style=\"padding-top: 50px\">\n    <ion-button color=\"primary\" (click)=\"backButton()\">Stop</ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/inventory-management/inventory-management.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/inventory-management/inventory-management.module.ts ***!
  \***************************************************************************/
/*! exports provided: InventoryManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryManagementModule", function() { return InventoryManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _qr_scanner_qr_scanner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./qr-scanner/qr-scanner.component */ "./src/app/pages/inventory-management/qr-scanner/qr-scanner.component.ts");
/* harmony import */ var _inventory_management_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inventory-management.routing */ "./src/app/pages/inventory-management/inventory-management.routing.ts");
/* harmony import */ var _list_item_list_item_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-item/list-item.module */ "./src/app/pages/inventory-management/list-item/list-item.module.ts");


// import { BrowserModule } from "@angular/platform-browser";







let InventoryManagementModule = class InventoryManagementModule {
};
InventoryManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _qr_scanner_qr_scanner_component__WEBPACK_IMPORTED_MODULE_6__["QrScannerComponent"]
        ],
        entryComponents: [],
        imports: [
            // BrowserModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _list_item_list_item_module__WEBPACK_IMPORTED_MODULE_8__["ListItemPageModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(),
            _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_4__["LeafletModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_inventory_management_routing__WEBPACK_IMPORTED_MODULE_7__["InventoryManagementRoutes"])
        ]
    })
], InventoryManagementModule);



/***/ }),

/***/ "./src/app/pages/inventory-management/inventory-management.routing.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/inventory-management/inventory-management.routing.ts ***!
  \****************************************************************************/
/*! exports provided: InventoryManagementRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryManagementRoutes", function() { return InventoryManagementRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _qr_scanner_qr_scanner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr-scanner/qr-scanner.component */ "./src/app/pages/inventory-management/qr-scanner/qr-scanner.component.ts");


const InventoryManagementRoutes = [
    {
        path: "",
        children: [
            {
                path: "tabs",
                loadChildren: () => __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "./src/app/pages/inventory-management/tabs/tabs.module.ts")).then((m) => m.TabsPageModule),
            },
            {
                path: "home",
                loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~home-home-module~pages-inventory-management-home-home-module"), __webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/pages/inventory-management/home/home.module.ts")).then(m => m.HomePageModule),
            },
            {
                path: "action",
                loadChildren: () => Promise.all(/*! import() | action-action-module */[__webpack_require__.e("default~action-action-module~pages-inventory-management-action-action-module"), __webpack_require__.e("action-action-module")]).then(__webpack_require__.bind(null, /*! ./action/action.module */ "./src/app/pages/inventory-management/action/action.module.ts")).then(m => m.ActionPageModule),
            },
            {
                path: "list-item",
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./list-item/list-item.module */ "./src/app/pages/inventory-management/list-item/list-item.module.ts")).then(m => m.ListItemPageModule),
            },
            {
                path: "stock-count",
                loadChildren: () => Promise.all(/*! import() | stock-count-stock-count-module */[__webpack_require__.e("default~pages-inventory-management-stock-count-stock-count-module~stock-count-stock-count-module"), __webpack_require__.e("stock-count-stock-count-module")]).then(__webpack_require__.bind(null, /*! ./stock-count/stock-count.module */ "./src/app/pages/inventory-management/stock-count/stock-count.module.ts")).then(m => m.StockCountPageModule),
            },
            {
                path: "stock-receive",
                loadChildren: () => Promise.all(/*! import() | stock-receive-stock-receive-module */[__webpack_require__.e("default~pages-inventory-management-stock-receive-stock-receive-module~stock-receive-stock-receive-module"), __webpack_require__.e("stock-receive-stock-receive-module")]).then(__webpack_require__.bind(null, /*! ./stock-receive/stock-receive.module */ "./src/app/pages/inventory-management/stock-receive/stock-receive.module.ts")).then(m => m.StockReceivePageModule),
            },
            {
                path: "stock-issuance",
                loadChildren: () => Promise.all(/*! import() | stock-issuance-stock-issuance-module */[__webpack_require__.e("default~pages-inventory-management-stock-issuance-stock-issuance-module~stock-issuance-stock-issuance-module"), __webpack_require__.e("stock-issuance-stock-issuance-module")]).then(__webpack_require__.bind(null, /*! ./stock-issuance/stock-issuance.module */ "./src/app/pages/inventory-management/stock-issuance/stock-issuance.module.ts")).then(m => m.StockIssuancePageModule),
            },
            {
                path: "interwarehouse-transfer",
                loadChildren: () => __webpack_require__.e(/*! import() | interwarehouse-transfer-interwarehouse-transfer-module */ "interwarehouse-transfer-interwarehouse-transfer-module").then(__webpack_require__.bind(null, /*! ./interwarehouse-transfer/interwarehouse-transfer.module */ "./src/app/pages/inventory-management/interwarehouse-transfer/interwarehouse-transfer.module.ts")).then(m => m.InterwarehouseTransferPageModule),
            },
            {
                path: "stock-disposal",
                loadChildren: () => __webpack_require__.e(/*! import() | stock-disposal-stock-disposal-module */ "default~pages-inventory-management-stock-disposal-stock-disposal-module~stock-disposal-stock-disposal-module").then(__webpack_require__.bind(null, /*! ./stock-disposal/stock-disposal.module */ "./src/app/pages/inventory-management/stock-disposal/stock-disposal.module.ts")).then(m => m.StockDisposalPageModule),
            },
            {
                path: "subinventory-transfer",
                loadChildren: () => __webpack_require__.e(/*! import() | subinventory-transfer-subinventory-transfer-module */ "subinventory-transfer-subinventory-transfer-module").then(__webpack_require__.bind(null, /*! ./subinventory-transfer/subinventory-transfer.module */ "./src/app/pages/inventory-management/subinventory-transfer/subinventory-transfer.module.ts")).then(m => m.SubinventoryTransferPageModule),
            },
            {
                path: "qr-scanner",
                component: _qr_scanner_qr_scanner_component__WEBPACK_IMPORTED_MODULE_1__["QrScannerComponent"],
            },
        ],
    },
];


/***/ }),

/***/ "./src/app/pages/inventory-management/list-item/list-item-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/inventory-management/list-item/list-item-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ListItemPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemPageRoutingModule", function() { return ListItemPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-item.page */ "./src/app/pages/inventory-management/list-item/list-item.page.ts");




const routes = [
    {
        path: '',
        component: _list_item_page__WEBPACK_IMPORTED_MODULE_3__["ListItemPage"]
    }
];
let ListItemPageRoutingModule = class ListItemPageRoutingModule {
};
ListItemPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListItemPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/inventory-management/list-item/list-item.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/inventory-management/list-item/list-item.module.ts ***!
  \**************************************************************************/
/*! exports provided: ListItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemPageModule", function() { return ListItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _list_item_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-item-routing.module */ "./src/app/pages/inventory-management/list-item/list-item-routing.module.ts");
/* harmony import */ var _list_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-item.page */ "./src/app/pages/inventory-management/list-item/list-item.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");








let ListItemPageModule = class ListItemPageModule {
};
ListItemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_item_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListItemPageRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"]
        ],
        declarations: [_list_item_page__WEBPACK_IMPORTED_MODULE_6__["ListItemPage"]]
    })
], ListItemPageModule);



/***/ }),

/***/ "./src/app/pages/inventory-management/list-item/list-item.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/inventory-management/list-item/list-item.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludmVudG9yeS1tYW5hZ2VtZW50L2xpc3QtaXRlbS9saXN0LWl0ZW0ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/inventory-management/list-item/list-item.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/inventory-management/list-item/list-item.page.ts ***!
  \************************************************************************/
/*! exports provided: ListItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemPage", function() { return ListItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



const ELEMENT_DATA = [
    { position: 1, item: 'LEQ200001', description: "QUATRO CABLE (PRO PLUS)", quantity: 45 },
    { position: 2, item: 'LEQ200002', description: "FIBRE OPTIC CABLE", quantity: 34 },
    { position: 3, item: 'LEQ200003', description: "COPPER CABLE", quantity: 26 },
    { position: 4, item: 'LEQ200004', description: "SWITCH", quantity: 54 },
    { position: 5, item: 'LEQ200005', description: "HUB", quantity: 21 },
    { position: 6, item: 'LEQ200006', description: "ROUTER", quantity: 22 },
];
let ListItemPage = class ListItemPage {
    constructor(modalController) {
        this.modalController = modalController;
        this.displayedColumns = ['item', 'description', 'quantity'];
        this.dataSource = ELEMENT_DATA;
    }
    ngOnInit() {
    }
    closeList() {
        this.modalController.dismiss();
    }
};
ListItemPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
ListItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-item.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory-management/list-item/list-item.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-item.page.scss */ "./src/app/pages/inventory-management/list-item/list-item.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], ListItemPage);



/***/ }),

/***/ "./src/app/pages/inventory-management/qr-scanner/qr-scanner.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/inventory-management/qr-scanner/qr-scanner.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: 50%;\n  max-width: 95%;\n  max-height: calc(98% - 100px);\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  /* bring your own prefixes */\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wbnNiL0RvY3VtZW50cy9HaXRIdWIvYWlyc2VsLW1vYmlsZS9zcmMvYXBwL3BhZ2VzL2ludmVudG9yeS1tYW5hZ2VtZW50L3FyLXNjYW5uZXIvcXItc2Nhbm5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW52ZW50b3J5LW1hbmFnZW1lbnQvcXItc2Nhbm5lci9xci1zY2FubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUVBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW52ZW50b3J5LW1hbmFnZW1lbnQvcXItc2Nhbm5lci9xci1zY2FubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgd2lkdGg6IDUwJTtcbiAgLy8gb3BhY2l0eTogMC41O1xuICBtYXgtd2lkdGg6IDk1JTtcbiAgbWF4LWhlaWdodDogY2FsYyg5OCUgLSAxMDBweCk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLyogYnJpbmcgeW91ciBvd24gcHJlZml4ZXMgKi9cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4iLCJpbWcge1xuICB3aWR0aDogNTAlO1xuICBtYXgtd2lkdGg6IDk1JTtcbiAgbWF4LWhlaWdodDogY2FsYyg5OCUgLSAxMDBweCk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLyogYnJpbmcgeW91ciBvd24gcHJlZml4ZXMgKi9cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/inventory-management/qr-scanner/qr-scanner.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/inventory-management/qr-scanner/qr-scanner.component.ts ***!
  \*******************************************************************************/
/*! exports provided: QrScannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrScannerComponent", function() { return QrScannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/ngx/index.js");





let QrScannerComponent = class QrScannerComponent {
    constructor(menu, navCtrl, toastCtrl, route, router, qrScanner) {
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.route = route;
        this.router = router;
        this.qrScanner = qrScanner;
        this.route.queryParams.subscribe((params) => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.link = this.router.getCurrentNavigation().extras.state.link;
                console.log("link", this.link);
                if (this.router.getCurrentNavigation().extras.state.asset)
                    this.workactivityasset = this.router.getCurrentNavigation().extras.state.asset;
            }
        });
    }
    ngOnInit() {
        this.menu.enable(false, "menuNotification");
    }
    ionViewWillEnter() {
        this.scan();
    }
    ionViewWillLeave() {
        this.stopScanning();
    }
    backButton() {
        this.ionViewWillLeave();
        this.toastCtrl.dismiss();
        if (this.scanText) {
            let navigationExtras = {
                state: {
                    qrcode: this.scanText,
                    asset: this.workactivityasset
                },
            };
            this.router.navigate([this.link], navigationExtras);
        }
        else {
            this.router.navigate([this.link]);
        }
        // this.router.navigate(['/inventory/stock-receive']);
        // this.navCtrl.navigateBack("/inventory/stock-receive");
    }
    scan() {
        // const ionApp = <HTMLElement>document.getElementsByTagName('ion-app')[0];
        window.document.querySelector("ion-app").classList.add("cameraView");
        this.qrScanner
            .prepare()
            .then((status) => {
            if (status.authorized) {
                this.qrScanner.show();
                // ionApp.style.display = "none";
                this.scanSubscription = this.qrScanner
                    .scan()
                    .subscribe((text) => {
                    this.scanText = text;
                    this.presentToast();
                });
            }
            else {
                console.error("Permission Denied", status);
            }
        })
            .catch((e) => {
            console.error("Error", e);
        });
    }
    stopScanning() {
        // const ionApp = <HTMLElement>document.getElementsByTagName('ion-app')[0];
        this.scanSubscription ? this.scanSubscription.unsubscribe() : null;
        this.scanSubscription = null;
        window.document.querySelector("ion-app").classList.remove("cameraView");
        this.qrScanner.hide();
        this.qrScanner.destroy();
        // ionApp.style.display = "block";
    }
    presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                header: "Air Selangor QR Code",
                message: this.scanText,
                buttons: [
                    {
                        text: "Done",
                        handler: () => {
                            this.backButton();
                        },
                    },
                ],
            });
            toast.present();
        });
    }
};
QrScannerComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["QRScanner"] }
];
QrScannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-qr-scanner",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./qr-scanner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory-management/qr-scanner/qr-scanner.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./qr-scanner.component.scss */ "./src/app/pages/inventory-management/qr-scanner/qr-scanner.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["QRScanner"]])
], QrScannerComponent);



/***/ })

}]);
//# sourceMappingURL=pages-inventory-management-inventory-management-module-es2015.js.map