(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["asset-location-asset-location-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operator/asset-location/asset-location.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operator/asset-location/asset-location.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"homePage('/operator/tabs/tab1')\">\n        <ion-icon\n          src=\"../../../../assets/icon/air-selangor.svg\"\n          style=\"font-size: 100px;\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <div class=\"ion-text-center\" style=\"font-weight: bold;\">\n      ASSET LOCATION\n    </div>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n        <ion-badge\n          color=\"danger\"\n          style=\"position: absolute; right: -5px; top: -3px;\"\n          >3</ion-badge\n        >\n      </ion-button>\n      <ion-button (click)=\"clickLogout()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-fab vertical=\"top\" horizontal=\"end\" edge slot=\"fixed\">\n    <ion-fab-button (click)=\"locateMe('', 2.835388, 101.738382)\">\n      <ion-icon name=\"locate\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <div id=\"mapId\" style=\"height: 300px\"></div>\n  <!-- <div\n    id=\"map\"\n    style=\"height: 300px;\"\n    leaflet\n    [leafletOptions]=\"options\"\n    (leafletMapReady)=\"onMapReady($event)\"\n  ></div> -->\n\n  <div class=\"ion-padding-top ion-padding-start ion-padding-end\">\n    <ion-list class=\"line-input\">\n      <ion-item>\n        <ion-label position=\"stacked\">Location name</ion-label>\n        <ion-input [(ngModel)]=\"locationName\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Asset name</ion-label>\n        <ion-input [(ngModel)]=\"assetName\"></ion-input>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <ion-list-header class=\"air-selangor-toolbar\">\n    <div class=\"ion-text-center\">\n      List of Pump House\n    </div>\n  </ion-list-header>\n  <ion-card *ngFor=\"let pumphouse of pumphouses\" (click)=\"locateMe(pumphouse.name, pumphouse.lat, pumphouse.lng)\">\n    <!-- <ion-card-content> -->\n      <div class=\"ion-float-left ion-padding\">\n        {{ pumphouse.name }}\n      </div>\n      <div class=\"ion-float-right ion-padding\" style=\"font-size: 1rem\">\n        <ion-icon name=\"locate\"></ion-icon>\n      </div>\n    <!-- </ion-card-content> -->\n  </ion-card>\n\n  <div class=\"ion-text-center ion-padding\">\n    <ion-button (click)=\"confirm()\">Confirm</ion-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/asset-location/asset-location.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/asset-location/asset-location.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\" mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"font-weight: bold;\">\n      Asset Location\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content-core\">\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"locateMe('', 2.835388, 101.738382)\">\n      <ion-icon name=\"locate\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <div id=\"mapId\" style=\"height: 300px;\"></div>\n  <!-- <div\n    id=\"map\"\n    style=\"height: 300px;\"\n    leaflet\n    [leafletOptions]=\"options\"\n    (leafletMapReady)=\"onMapReady($event)\"\n  ></div> -->\n\n  <div class=\"ion-padding-top ion-padding-start ion-padding-end\">\n    <ion-list class=\"line-input\">\n      <ion-item>\n        <ion-label position=\"stacked\">Location name</ion-label>\n        <ion-input [(ngModel)]=\"locationName\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Asset name</ion-label>\n        <ion-input [(ngModel)]=\"assetName\"></ion-input>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div class=\"ion-padding-start\">\n    <ion-card-title>List of Pump House</ion-card-title>\n  </div>\n  \n  <ion-card\n    *ngFor=\"let pumphouse of pumphouses\"\n    (click)=\"locateMe(pumphouse.name, pumphouse.lat, pumphouse.lng)\"\n  >\n    <!-- <ion-card-content> -->\n    <div class=\"ion-float-left ion-padding\">\n      {{ pumphouse.name }}\n    </div>\n    <div class=\"ion-float-right ion-padding\" style=\"font-size: 1rem;\">\n      <ion-icon name=\"locate\"></ion-icon>\n    </div>\n    <!-- </ion-card-content> -->\n  </ion-card>\n\n  <div class=\"ion-text-center ion-padding\">\n    <ion-button (click)=\"confirm()\">Confirm</ion-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/operator/asset-location/asset-location-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/operator/asset-location/asset-location-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: AssetLocationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetLocationPageRoutingModule", function() { return AssetLocationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _asset_location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asset-location.page */ "./src/app/pages/operator/asset-location/asset-location.page.ts");




const routes = [
    {
        path: '',
        component: _asset_location_page__WEBPACK_IMPORTED_MODULE_3__["AssetLocationPage"]
    }
];
let AssetLocationPageRoutingModule = class AssetLocationPageRoutingModule {
};
AssetLocationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AssetLocationPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/operator/asset-location/asset-location.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/operator/asset-location/asset-location.module.ts ***!
  \************************************************************************/
/*! exports provided: AssetLocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetLocationPageModule", function() { return AssetLocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _asset_location_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./asset-location-routing.module */ "./src/app/pages/operator/asset-location/asset-location-routing.module.ts");
/* harmony import */ var _asset_location_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./asset-location.page */ "./src/app/pages/operator/asset-location/asset-location.page.ts");








let AssetLocationPageModule = class AssetLocationPageModule {
};
AssetLocationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_4__["LeafletModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _asset_location_routing_module__WEBPACK_IMPORTED_MODULE_6__["AssetLocationPageRoutingModule"]
        ],
        declarations: [_asset_location_page__WEBPACK_IMPORTED_MODULE_7__["AssetLocationPage"]]
    })
], AssetLocationPageModule);



/***/ }),

/***/ "./src/app/pages/operator/asset-location/asset-location.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/operator/asset-location/asset-location.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29wZXJhdG9yL2Fzc2V0LWxvY2F0aW9uL2Fzc2V0LWxvY2F0aW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/operator/asset-location/asset-location.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/operator/asset-location/asset-location.page.ts ***!
  \**********************************************************************/
/*! exports provided: AssetLocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetLocationPage", function() { return AssetLocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");




// import * as L from "leaflet";


let AssetLocationPage = class AssetLocationPage {
    /* options = {
      layers: [
        L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
          maxZoom: 20,
          subdomains: ["mt0", "mt1", "mt2", "mt3"]
        })
      ],
      zoom: 13,
      center: L.latLng(2.835388, 101.738382)
    }; */
    constructor(geolocation, alertController, router) {
        this.geolocation = geolocation;
        this.alertController = alertController;
        this.router = router;
        this.pumphouses = [
            { name: "Taman Ixora Pump House", lat: 2.817576, lng: 101.728028 },
            { name: "Taman Dahlia Pump House", lat: 2.825785, lng: 101.722880 },
            { name: "Taman Seroja Pump House", lat: 2.826200, lng: 101.725592 },
            { name: "Taman Mawar Pump House", lat: 2.831514, lng: 101.733691 },
            { name: "Desa Vista Pump House", lat: 2.841246, lng: 101.747838 }
        ];
    }
    ngOnInit() { }
    ionViewDidEnter() {
        this.loadMap();
    }
    loadMap() {
        this.map = new leaflet__WEBPACK_IMPORTED_MODULE_4__["Map"]("mapId").setView([2.835388, 101.738382], 14);
        Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["tileLayer"])("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
            maxZoom: 20,
            subdomains: ["mt0", "mt1", "mt2", "mt3"]
        })
            .addTo(this.map); // This line is added to add the Tile Layer to our map
        let marker = new leaflet__WEBPACK_IMPORTED_MODULE_4__["Marker"]([2.835388, 101.738382], {
            draggable: true,
            icon: Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["icon"])({
                iconSize: [30, 30],
                iconAnchor: [13, 41],
                iconUrl: "assets/icon/location.svg"
            })
        });
        marker.addTo(this.map);
        marker.on("dragend", function () {
            var lat = marker.getLatLng().lat;
            var lng = marker.getLatLng().lng;
            marker.bindPopup("Moved to: " + lat.toFixed(4) + ", " + lng.toFixed(4) + ".");
        });
        // Add multiple markers
        for (var i = 0; i < this.pumphouses.length; i++) {
            var markerpumphouse = new leaflet__WEBPACK_IMPORTED_MODULE_4__["Marker"]([this.pumphouses[i].lat, this.pumphouses[i].lng], {
                icon: Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["icon"])({
                    iconSize: [30, 30],
                    iconAnchor: [13, 41],
                    iconUrl: "assets/icon/location.svg"
                })
            })
                .bindPopup("Pump house: " + this.pumphouses[i].name)
                .addTo(this.map);
        }
    }
    /* onMapReady(map: L.Map) {
      setTimeout(() => {
        map.invalidateSize();
      }, 0);
  
      // this.geolocation.getCurrentPosition().then(resp => {
      //   if (resp) {
          let marker = new L.Marker(
            [2.835388, 101.738382],
            {
              draggable: true,
              icon: L.icon({
                iconSize: [30, 30],
                iconAnchor: [13, 41],
                iconUrl: "assets/icon/location.svg"
              })
            }
          );
          marker.addTo(map);
          marker.on("dragend", function() {
            var lat = marker.getLatLng().lat;
            var lng = marker.getLatLng().lng;
            marker.bindPopup(
              "Moved to: " + lat.toFixed(4) + ", " + lng.toFixed(4) + "."
            );
          });
  
          map.panTo(new L.LatLng(2.835388, 101.738382));
      //   }
      // });
  
      for (var i = 0; i < this.pumphouses.length; i++) {
        var markerpumphouse = new L.Marker([ this.pumphouses[i].lat, this.pumphouses[i].lng ], {
          icon: L.icon({
            iconSize: [30, 30],
            iconAnchor: [13, 41],
            iconUrl: "assets/icon/location.svg"
          })
        })
          .bindPopup("Pump house: " + this.pumphouses[i].name)
          .addTo(map);
      }
    } */
    locateMe(name, lat, lng) {
        this.map.panTo(new leaflet__WEBPACK_IMPORTED_MODULE_4__["LatLng"](lat, lng));
        this.locationName = name;
        this.assetNameAlertRadio();
    }
    assetNameAlertRadio() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Choose Asset',
                inputs: [
                    {
                        name: 'radio1',
                        type: 'radio',
                        label: 'Booster Ixora Pump House - Motor',
                        value: 'Booster Ixora Pump House - Motor',
                        checked: true
                    },
                    {
                        name: 'radio2',
                        type: 'radio',
                        label: 'Booster Ixora Pump House - Butterfly valve',
                        value: 'Booster Ixora Pump House - Butterfly valve'
                    },
                    {
                        name: 'radio3',
                        type: 'radio',
                        label: 'Booster Ixora Pump House - Check valve',
                        value: 'Booster Ixora Pump House - Check valve'
                    },
                    {
                        name: 'radio4',
                        type: 'radio',
                        label: 'Booster Ixora Pump House - Pressure gauge',
                        value: 'Booster Ixora Pump House - Pressure gauge'
                    },
                    {
                        name: 'radio5',
                        type: 'radio',
                        label: 'Booster Ixora Pump House - Control panel',
                        value: 'Booster Ixora Pump House - Control panel'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('cancel clicked');
                        }
                    }, {
                        text: 'Ok',
                        handler: (data) => {
                            this.assetName = data;
                            console.log('ok clicked');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    confirm() {
        let navigationExtras = {
            state: {
                locationName: this.locationName,
                assetName: this.assetName
            }
        };
        this.router.navigate(['/operator/tabs/tab2'], navigationExtras);
    }
    clickLogout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Logout',
                message: 'Are you want to logout?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => { }
                    }, {
                        text: 'Yes, logout it!',
                        handler: () => {
                            this.router.navigate(['/']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    homePage(path) {
        this.router.navigate([path]);
    }
};
AssetLocationPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AssetLocationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-asset-location",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./asset-location.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operator/asset-location/asset-location.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./asset-location.page.scss */ "./src/app/pages/operator/asset-location/asset-location.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AssetLocationPage);



/***/ }),

/***/ "./src/app/pages/technical/asset-location/asset-location-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/technical/asset-location/asset-location-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AssetLocationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetLocationPageRoutingModule", function() { return AssetLocationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _asset_location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asset-location.page */ "./src/app/pages/technical/asset-location/asset-location.page.ts");




const routes = [
    {
        path: '',
        component: _asset_location_page__WEBPACK_IMPORTED_MODULE_3__["AssetLocationPage"]
    }
];
let AssetLocationPageRoutingModule = class AssetLocationPageRoutingModule {
};
AssetLocationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AssetLocationPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/technical/asset-location/asset-location.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/technical/asset-location/asset-location.module.ts ***!
  \*************************************************************************/
/*! exports provided: AssetLocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetLocationPageModule", function() { return AssetLocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _asset_location_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./asset-location-routing.module */ "./src/app/pages/technical/asset-location/asset-location-routing.module.ts");
/* harmony import */ var _asset_location_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./asset-location.page */ "./src/app/pages/technical/asset-location/asset-location.page.ts");








let AssetLocationPageModule = class AssetLocationPageModule {
};
AssetLocationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_4__["LeafletModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _asset_location_routing_module__WEBPACK_IMPORTED_MODULE_6__["AssetLocationPageRoutingModule"]
        ],
        declarations: [_asset_location_page__WEBPACK_IMPORTED_MODULE_7__["AssetLocationPage"]]
    })
], AssetLocationPageModule);



/***/ }),

/***/ "./src/app/pages/technical/asset-location/asset-location.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/technical/asset-location/asset-location.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlY2huaWNhbC9hc3NldC1sb2NhdGlvbi9hc3NldC1sb2NhdGlvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/technical/asset-location/asset-location.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/technical/asset-location/asset-location.page.ts ***!
  \***********************************************************************/
/*! exports provided: AssetLocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetLocationPage", function() { return AssetLocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");




// import * as L from "leaflet";


let AssetLocationPage = class AssetLocationPage {
    /* options = {
      layers: [
        L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
          maxZoom: 20,
          subdomains: ["mt0", "mt1", "mt2", "mt3"]
        })
      ],
      zoom: 13,
      center: L.latLng(2.835388, 101.738382)
    }; */
    constructor(geolocation, alertController, menu, router) {
        this.geolocation = geolocation;
        this.alertController = alertController;
        this.menu = menu;
        this.router = router;
        this.pumphouses = [
            { name: "Taman Ixora Pump House", lat: 2.817576, lng: 101.728028 },
            { name: "Taman Dahlia Pump House", lat: 2.825785, lng: 101.722880 },
            { name: "Taman Seroja Pump House", lat: 2.826200, lng: 101.725592 },
            { name: "Taman Mawar Pump House", lat: 2.831514, lng: 101.733691 },
            { name: "Desa Vista Pump House", lat: 2.841246, lng: 101.747838 }
        ];
    }
    ngOnInit() {
        this.menu.enable(false, "menuNotification");
    }
    ionViewDidEnter() {
        this.loadMap();
    }
    loadMap() {
        this.map = new leaflet__WEBPACK_IMPORTED_MODULE_4__["Map"]("mapId").setView([2.835388, 101.738382], 14);
        Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["tileLayer"])("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
            maxZoom: 20,
            subdomains: ["mt0", "mt1", "mt2", "mt3"]
        })
            .addTo(this.map); // This line is added to add the Tile Layer to our map
        let marker = new leaflet__WEBPACK_IMPORTED_MODULE_4__["Marker"]([2.835388, 101.738382], {
            draggable: true,
            icon: Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["icon"])({
                iconSize: [30, 30],
                iconAnchor: [13, 41],
                iconUrl: "assets/icon/location.svg"
            })
        });
        marker.addTo(this.map);
        marker.on("dragend", function () {
            var lat = marker.getLatLng().lat;
            var lng = marker.getLatLng().lng;
            marker.bindPopup("Moved to: " + lat.toFixed(4) + ", " + lng.toFixed(4) + ".");
        });
        // Add multiple markers
        for (var i = 0; i < this.pumphouses.length; i++) {
            var markerpumphouse = new leaflet__WEBPACK_IMPORTED_MODULE_4__["Marker"]([this.pumphouses[i].lat, this.pumphouses[i].lng], {
                icon: Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["icon"])({
                    iconSize: [30, 30],
                    iconAnchor: [13, 41],
                    iconUrl: "assets/icon/location.svg"
                })
            })
                .bindPopup("Pump house: " + this.pumphouses[i].name)
                .addTo(this.map);
        }
    }
    /* onMapReady(map: L.Map) {
      setTimeout(() => {
        map.invalidateSize();
      }, 0);
  
      // this.geolocation.getCurrentPosition().then(resp => {
      //   if (resp) {
          let marker = new L.Marker(
            [2.835388, 101.738382],
            {
              draggable: true,
              icon: L.icon({
                iconSize: [30, 30],
                iconAnchor: [13, 41],
                iconUrl: "assets/icon/location.svg"
              })
            }
          );
          marker.addTo(map);
          marker.on("dragend", function() {
            var lat = marker.getLatLng().lat;
            var lng = marker.getLatLng().lng;
            marker.bindPopup(
              "Moved to: " + lat.toFixed(4) + ", " + lng.toFixed(4) + "."
            );
          });
  
          map.panTo(new L.LatLng(2.835388, 101.738382));
      //   }
      // });
  
      for (var i = 0; i < this.pumphouses.length; i++) {
        var markerpumphouse = new L.Marker([ this.pumphouses[i].lat, this.pumphouses[i].lng ], {
          icon: L.icon({
            iconSize: [30, 30],
            iconAnchor: [13, 41],
            iconUrl: "assets/icon/location.svg"
          })
        })
          .bindPopup("Pump house: " + this.pumphouses[i].name)
          .addTo(map);
      }
    } */
    locateMe(name, lat, lng) {
        this.map.panTo(new leaflet__WEBPACK_IMPORTED_MODULE_4__["LatLng"](lat, lng));
        this.locationName = name;
        this.assetNameAlertRadio();
    }
    assetNameAlertRadio() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Choose Asset',
                inputs: [
                    {
                        name: 'radio1',
                        type: 'radio',
                        label: 'Booster Ixora Pump House - Motor',
                        value: 'Booster Ixora Pump House - Motor',
                        checked: true
                    },
                    {
                        name: 'radio2',
                        type: 'radio',
                        label: 'Booster Ixora Pump House - Butterfly valve',
                        value: 'Booster Ixora Pump House - Butterfly valve'
                    },
                    {
                        name: 'radio3',
                        type: 'radio',
                        label: 'Booster Ixora Pump House - Check valve',
                        value: 'Booster Ixora Pump House - Check valve'
                    },
                    {
                        name: 'radio4',
                        type: 'radio',
                        label: 'Booster Ixora Pump House - Pressure gauge',
                        value: 'Booster Ixora Pump House - Pressure gauge'
                    },
                    {
                        name: 'radio5',
                        type: 'radio',
                        label: 'Booster Ixora Pump House - Control panel',
                        value: 'Booster Ixora Pump House - Control panel'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('cancel clicked');
                        }
                    }, {
                        text: 'Ok',
                        handler: (data) => {
                            this.assetName = data;
                            console.log('ok clicked');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    confirm() {
        let navigationExtras = {
            state: {
                locationName: this.locationName,
                assetName: this.assetName
            }
        };
        this.router.navigate(['/technical/tabs/tab2'], navigationExtras);
    }
};
AssetLocationPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AssetLocationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-asset-location",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./asset-location.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/asset-location/asset-location.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./asset-location.page.scss */ "./src/app/pages/technical/asset-location/asset-location.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AssetLocationPage);



/***/ })

}]);
//# sourceMappingURL=asset-location-asset-location-module-es2015.js.map