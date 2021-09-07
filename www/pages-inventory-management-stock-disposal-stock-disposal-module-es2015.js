(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inventory-management-stock-disposal-stock-disposal-module"],{

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



/***/ })

}]);
//# sourceMappingURL=pages-inventory-management-stock-disposal-stock-disposal-module-es2015.js.map