function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["asset-registration-asset-registration-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/asset-registration/asset-registration.page.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/asset-registration/asset-registration.page.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTechnicalAssetRegistrationAssetRegistrationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"clickBack()\">\n        <ion-icon src=\"../../../../assets/icon/air-selangor-icon.svg\" style=\"font-size: 2rem\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title style=\"font-weight: bold\"> Asset Registration </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openNotification()\">\n        <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n        <ion-badge size=\"small\" color=\"danger\" style=\"position: absolute; right: -5px; top: 1px\">\n          {{ notificationService.totalnotificationbyuser }}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content-core\">\n  <div class=\"ion-padding\" *ngIf=\"segmentModal == 'first'\">\n    <mat-vertical-stepper [linear]=\"isLinear\" #stepper [disableRipple]=\"isDisableRipple\">\n      <mat-step [stepControl]=\"firstFormGroup\">\n        <form [formGroup]=\"firstFormGroup\">\n          <ng-template matStepLabel>Asset Grouping</ng-template>\n          <div class=\"line-input\">\n            <ion-item>\n              <ion-label position=\"stacked\">Asset Primary Category</ion-label>\n              <!-- <ion-select placeholder=\"Please select\" (ionChange)='onChangeAssPrimaryCat($event.target.value)'\n                formControlName=\"asset_primary_category\">\n                <ion-select-option *ngFor=\"let primarycategory of primarycategories\"\n                  [value]=\"primarycategory.asset_type_code\">\n                  {{ primarycategory.asset_type_description }}</ion-select-option>\n              </ion-select> -->\n\n              <ionic-selectable [items]=\"primarycategories\" itemValueField=\"id\" itemTextField=\"asset_type_description\"\n                [canSearch]=\"true\" formControlName=\"asset_primary_category\" (onChange)=\"onChangeAssPrimaryCat($event)\">\n              </ionic-selectable>\n              <!-- <small class=\"validation_messages\"\n                >{{ validation_messages.primary_category }}</small\n              > -->\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Asset Identity</ion-label>\n              <ion-input type=\"text\" formControlName=\"asset_identity\" [required]=\"true\"></ion-input>\n              <!-- <ion-select placeholder=\"Please select\" formControlName=\"identity\">\n                <ion-select-option\n                  *ngFor=\"let identity of identities\"\n                  [value]=\"identity.id\"\n                  >{{ identity.name }}</ion-select-option\n                >\n              </ion-select> -->\n              <!-- <small class=\"validation_messages\"\n                >{{ validation_messages.identity }}</small\n              > -->\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"stacked\">Sub-category 1</ion-label>\n              <ion-input type=\"text\" formControlName=\"sub_category_1\"></ion-input>\n              <!-- <small class=\"validation_messages\"\n                >{{ validation_messages.sub_category_1 }}</small\n              > -->\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Sub-category 2</ion-label>\n              <ion-input type=\"text\" formControlName=\"sub_category_2\"></ion-input>\n              <!-- <small class=\"validation_messages\"\n                >{{ validation_messages.sub_category_2 }}</small\n              > -->\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Model number</ion-label>\n              <ion-input type=\"text\" formControlName=\"model_number\"></ion-input>\n              <!-- <small class=\"validation_messages\"\n              >{{ validation_messages.sub_category_2 }}</small\n            > -->\n            </ion-item>\n            <ion-input type=\"hidden\" formControlName=\"bo\" [value]=\"assetAttrData\"></ion-input>\n          </div>\n\n          <!-- <div>\n            <ion-button color=\"danger\" size=\"small\" matStepperPrevious>\n              Back\n            </ion-button>\n            <ion-button color=\"success\" size=\"small\" matStepperNext\n              >Next</ion-button\n            >\n          </div> -->\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"secondFormGroup\">\n        <form [formGroup]=\"secondFormGroup\">\n          <ng-template matStepLabel>Asset Categorization</ng-template>\n          <div class=\"line-input\">\n            <div class=\"row\">\n              <ion-item>\n                <ion-label position=\"stacked\">Asset or Component Type</ion-label>\n                <ion-input type=\"text\" formControlName=\"asset_or_component_type\" readonly [value]=\"assetOrComponent\">\n                </ion-input>\n                <!-- <ion-select placeholder=\"Please select\" formControlName=\"asset_or_component_type\">\n                  <ion-select-option *ngFor=\"let assComp of assetOrCompList\" [value]=\"assComp.id\">{{ assComp.name }}\n                  </ion-select-option>\n                </ion-select> -->\n                <!-- <small class=\"validation_messages\"\n                  >{{ validation_messages.type_asset }}</small\n                > -->\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"stacked\">Asset Class/Asset Category</ion-label>\n                <ion-input type=\"text\" formControlName=\"asset_class_asset_category\" [value]=\"assetCategoryData\">\n                </ion-input>\n                <!-- <small class=\"validation_messages\"\n                  >{{ validation_messages.category }}</small\n                > -->\n              </ion-item>\n              <ion-radio-group formControlName=\"handed_over_asset_or_procured\">\n                <ion-list-header>\n                  <ion-label>Hand Over Asset or Procured</ion-label>\n                </ion-list-header>\n\n                <ion-item>\n                  <ion-label>Asset Handover</ion-label>\n                  <ion-radio slot=\"start\" value=\"AH\"></ion-radio>\n                </ion-item>\n\n                <ion-item>\n                  <ion-label>Procured</ion-label>\n                  <ion-radio slot=\"start\" value=\"PC\"></ion-radio>\n                </ion-item>\n              </ion-radio-group>\n              <!-- <small class=\"validation_messages\"\n                >{{ validation_messages.acquired_by }}</small\n              > -->\n            </div>\n          </div>\n\n          <!-- <div>\n            <ion-button color=\"danger\" size=\"small\" matStepperPrevious>\n              Back\n            </ion-button>\n            <ion-button color=\"success\" size=\"small\" matStepperNext\n              >Next</ion-button\n            >\n          </div> -->\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"thirdFormGroup\">\n        <form [formGroup]=\"thirdFormGroup\">\n          <ng-template matStepLabel>Asset Owning</ng-template>\n          <div class=\"line-input\">\n\n            <ion-item>\n              <ion-label position=\"stacked\">Asset Owning Department</ion-label>\n              <ion-select formControlName=\"asset_owning_department\" placeholder=\"Please select\">\n                <ion-select-option *ngFor=\"let assOwnDep of assOwningDepartList\" [value]=\"assOwnDep.id\">\n                  {{ assOwnDep.name }}\n                </ion-select-option>\n              </ion-select>\n              <!-- <small class=\"validation_messages\"\n                >{{ validation_messages.sub_category_2 }}</small> \n              -->\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Main Operation</ion-label>\n              <ion-select formControlName=\"main_operation\" placeholder=\"Please select\">\n                <ion-select-option *ngFor=\"let mainOpList of mainOperationList\" [value]=\"mainOpList.id\">\n                  {{ mainOpList.name }}\n                </ion-select-option>\n              </ion-select>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Region</ion-label>\n              <ion-select formControlName=\"region\" placeholder=\"Please select\">\n                <ion-select-option *ngFor=\"let region of regions\" [value]=\"region.id\">{{ region.name }}\n                </ion-select-option>\n              </ion-select>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Operation</ion-label>\n              <ion-select formControlName=\"operation\" placeholder=\"Please select\">\n                <ion-select-option *ngFor=\"let operateList of operationList\" [value]=\"operateList.id\">\n                  {{ operateList.name }}\n                </ion-select-option>\n              </ion-select>\n            </ion-item>\n            <ion-radio-group (click)=\"onChangeParent($event.target.value)\">\n              <ion-list-header>\n                <ion-label>Parent Location</ion-label>\n              </ion-list-header>\n              <ion-grid>\n                <ion-row>\n                  <ion-col>\n                    <div>\n                      <ion-item>\n                        <ion-label>New Parent</ion-label>\n                        <!-- <ion-radio (change)='onChangeParent($event.target.value)' slot=\"start\" value=\"true\" checked></ion-radio> -->\n                        <!-- <ion-radio (ionSelect)=\"onChangeParent('true')\"></ion-radio> -->\n                        <ion-radio slot=\"start\" value=\"0\" selected=\"selected\"></ion-radio>\n                      </ion-item>\n                    </div>\n                  </ion-col>\n                  <ion-col>\n                    <div>\n                      <ion-item>\n                        <ion-label>Existing Parent</ion-label>\n                        <ion-radio slot=\"start\" value=\"1\"></ion-radio>\n                      </ion-item>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-radio-group>\n\n            <ion-item *ngIf=\"parentLocaDiv == 0\">\n              <ion-label position=\"stacked\">New</ion-label>\n              <ion-input formControlName=\"new_parent_location\" type=\"text\"></ion-input>\n            </ion-item>\n            <ion-item *ngIf=\"parentLocaDiv == 1\">\n              <ion-label position=\"stacked\">Existing</ion-label>\n              <ion-select formControlName=\"parent_location\" type=\"text\"></ion-select>\n            </ion-item>\n\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"fourthFormGroup\">\n        <form [formGroup]=\"fourthFormGroup\">\n          <ng-template matStepLabel>Asset Location</ng-template>\n          <div class=\"line-input\">\n            <ion-radio-group (click)=\"onChangeAssLoc($event.target.value)\">\n              <ion-list-header>\n                <ion-label>Asset Location</ion-label>\n              </ion-list-header>\n              <ion-grid>\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>New</ion-label>\n                      <!-- <ion-radio (change)='onChangeParent($event.target.value)' slot=\"start\" value=\"true\" checked></ion-radio> -->\n                      <!-- <ion-radio (ionSelect)=\"onChangeParent('true')\"></ion-radio> -->\n                      <ion-radio slot=\"start\" value=\"0\" checked></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>Existing</ion-label>\n                      <ion-radio slot=\"start\" value=\"1\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-radio-group>\n\n            <ion-item *ngIf=\"assetLocDiv == 1\">\n              <ion-label>Location</ion-label>\n\n              <!-- <ionic-selectable [items]=\"primarycategories\" itemValueField=\"id\" itemTextField=\"asset_type_description\"\n                [canSearch]=\"true\" formControlName=\"asset_primary_category\" (onChange)=\"onChangeAssPrimaryCat($event)\">\n              </ionic-selectable> -->\n              <ionic-selectable [items]=\"assetLocationData\" itemValueField=\"uuid\" itemTextField=\"description\"\n                [canSearch]=\"true\" formControlName=\"parent_location\" (ionChange)=\"portChange($event)\">\n              </ionic-selectable>\n            </ion-item>\n\n            <div *ngIf=\"assetLocDiv == 0\">\n\n              <ion-item>\n                <ion-label position=\"stacked\">Location Description</ion-label>\n                <ion-input formControlName=\"location_description\" placeholder=\"Location Description\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"stacked\">Building</ion-label>\n                <ion-input formControlName=\"building\" placeholder=\"Building\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"stacked\">Address 1</ion-label>\n                <ion-input formControlName=\"address_line_1\" placeholder=\"Address 1\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"stacked\">Address 2</ion-label>\n                <ion-input formControlName=\"address_line_2\" placeholder=\"Address 2\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"stacked\">Address 3</ion-label>\n                <ion-input formControlName=\"address_line_3\" placeholder=\"Address 3\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"stacked\">City</ion-label>\n                <ion-input formControlName=\"city\" placeholder=\"City\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"stacked\">State</ion-label>\n                <ion-select placeholder=\"Please select\" formControlName=\"state\">\n                  <ion-select-option *ngFor=\"let state of states\" [value]=\"state.code\">\n                    {{ state.state }}</ion-select-option>\n                </ion-select>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"stacked\">Postal Code</ion-label>\n                <ion-input formControlName=\"postal_code\" placeholder=\"Postal Code\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"stacked\">Country</ion-label>\n                <ion-input formControlName=\"country\" placeholder=\"Country\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"stacked\">Tag Number</ion-label>\n                <ion-input formControlName=\"tag_number\" placeholder=\"Tag Number\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"stacked\">Location/Department</ion-label>\n                <ion-select placeholder=\"Please select\" style=\"max-width: 100% !important;\"\n                  formControlName=\"service_area\">\n                  <ion-select-option *ngFor=\"let servArea of servAreaList\" [value]=\"servArea.id\">\n                    {{ servArea.name }}</ion-select-option>\n                </ion-select>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"stacked\">Location Main Contact</ion-label>\n                <ion-input formControlName=\"location_main_contact\" placeholder=\"Location Main Contact\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"stacked\">Maintenance Manager</ion-label>\n                <!-- <ion-input formControlName=\"location_asset_maintenance_manager\"\n                  placeholder=\"Location/Asset Maintenance Manager\"></ion-input> -->\n                <!-- <ion-select placeholder=\"Please select\" style=\"max-width: 100% !important;\"\n                  formControlName=\"location_asset_maintenance_manager\">\n                  <ion-select-option *ngFor=\"let maintMan of maintenanceManagerData\" [value]=\"maintMan.id\">\n                    {{ maintMan.description }}</ion-select-option>\n                </ion-select> -->\n                <ionic-selectable [items]=\"maintenanceManagerData\" style=\"max-width: 100% !important;\"\n                  itemValueField=\"id\" itemTextField=\"description\" [canSearch]=\"true\"\n                  formControlName=\"location_asset_maintenance_manager\" (ionChange)=\"onChangeLocAssMaiMan($event)\">\n                </ionic-selectable>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"stacked\">Planner</ion-label>\n                <!-- <ion-input formControlName=\"maintenance_planner\" placeholder=\"Planner\"></ion-input> -->\n                <!-- <ion-select placeholder=\"Please select\" formControlName=\"maintenance_planner\">\n                  <ion-select-option *ngFor=\"let planner of plannerData\" [value]=\"planner.id\">\n                    {{ planner.description }}</ion-select-option>\n                </ion-select> -->\n                <ionic-selectable [items]=\"plannerData\" style=\"max-width: 100% !important;\" itemValueField=\"id\"\n                  itemTextField=\"description\" [canSearch]=\"true\" formControlName=\"maintenance_planner\"\n                  (ionChange)=\"onChangeLocAssMaiMan($event)\">\n                </ionic-selectable>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"stacked\">GIS/ESRI ID</ion-label>\n                <ion-input formControlName=\"gis_esri_id\" placeholder=\"GIS/ESRI ID\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"stacked\">Latitude</ion-label>\n                <ion-input formControlName=\"latitude\" placeholder=\"Latitude\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"stacked\">Longitude</ion-label>\n                <ion-input formControlName=\"longitude\" placeholder=\"Longitude\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"stacked\">Asset Critically</ion-label>\n                <ion-select placeholder=\"Please select\" formControlName=\"asset_criticality\">\n                  <ion-select-option *ngFor=\"let assCrit of assCriticalList\" [value]=\"assCrit.id\">\n                    {{ assCrit.name }}</ion-select-option>\n                </ion-select>\n              </ion-item>\n              <!-- <ion-item>\n                <ion-label position=\"stacked\">Cost Center</ion-label>\n                <ion-input formControlName=\"cost_center\" placeholder=\"Cost Center\"></ion-input>\n              </ion-item> -->\n\n            </div>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"fifthFormGroup\">\n        <form [formGroup]=\"fifthFormGroup\">\n          <ng-template matStepLabel>Asset Detailed Description</ng-template>\n          <div class=\"line-input\">\n\n            <ion-item>\n              <ion-label position=\"stacked\">Size/Capacity 1</ion-label>\n              <ion-input type=\"number\" formControlName=\"size_capacity_1\"></ion-input>\n              <!-- <small class=\"validation_messages\"\n                >{{ validation_messages.size_capacity_1 }}</small\n              > -->\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Unit Measurement 1</ion-label>\n              <!-- <ion-input type=\"text\" formControlName=\"size_capacity_1_unit_measurement\"></ion-input> -->\n\n              <ion-select placeholder=\"Please select\" formControlName=\"size_capacity_1_unit_measurement\">\n                <ion-select-option *ngFor=\"let meaType1 of measurement_types\" [value]=\"meaType1.value\">\n                  {{ meaType1.desc }}</ion-select-option>\n              </ion-select>\n\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"stacked\">Size/Capacity 2</ion-label>\n              <ion-input type=\"number\" formControlName=\"size_capacity_2\"></ion-input>\n              <!-- <small class=\"validation_messages\"\n                        >{{ validation_messages.size_capacity_2 }}</small\n                      > -->\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Unit Measurement 2</ion-label>\n              <!-- <ion-input type=\"text\" formControlName=\"size_capacity_2_unit_measurement\"></ion-input> -->\n\n              <ion-select placeholder=\"Please select\" formControlName=\"size_capacity_2_unit_measurement\">\n                <ion-select-option *ngFor=\"let meaType2 of measurement_types\" [value]=\"meaType2.value\">\n                  {{ meaType2.desc }}</ion-select-option>\n              </ion-select>\n\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"stacked\">Size/Capacity 3</ion-label>\n              <ion-input type=\"number\" formControlName=\"size_capacity_3\"></ion-input>\n              <!-- <small class=\"validation_messages\"\n                >{{ validation_messages.size_capacity_3 }}</small\n              > -->\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Unit Measurement 3</ion-label>\n              <!-- <ion-input type=\"text\" formControlName=\"size_capacity_3_unit_measurement\"></ion-input> -->\n\n              <ion-select placeholder=\"Please select\" formControlName=\"size_capacity_3_unit_measurement\">\n                <ion-select-option *ngFor=\"let meaType3 of measurement_types\" [value]=\"meaType3.value\">\n                  {{ meaType3.desc }}</ion-select-option>\n              </ion-select>\n\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"stacked\">Detailed Description</ion-label>\n              <ion-input type=\"text\" formControlName=\"detailed_description\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"stacked\">Serial Number</ion-label>\n              <ion-input type=\"text\" formControlName=\"serial_number\"></ion-input>\n              <!-- <small class=\"validation_messages\"\n                >{{ validation_messages.serial_number }}</small\n              > -->\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"stacked\">Tag Number</ion-label>\n              <ion-input type=\"text\" formControlName=\"asset_tag_number\"></ion-input>\n              <!-- <small class=\"validation_messages\"\n                >{{ validation_messages.asset_tag_number }}</small\n              > -->\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"stacked\">Purchased/Installed/Hand Over Date</ion-label>\n              <ion-datetime displayFormat=\"MMM, DD YYYY\" formControlName=\"purchase_date_installed_handed_over_date\">\n              </ion-datetime>\n              <!-- <small class=\"validation_messages\"\n                >{{ validation_messages.purchase_date_installed_handed_over_date }}</small\n              > -->\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Condition Rating </ion-label>\n              <ion-select placeholder=\"Please select\" formControlName=\"condition_rating\">\n                <ion-select-option *ngFor=\"let rating of conditionRatingList\" [value]=\"rating.id\">{{ rating.name }}\n                </ion-select-option>\n              </ion-select>\n              <!-- <small class=\"validation_messages\"\n                >{{ validation_messages.rating }}</small\n              > -->\n            </ion-item>\n\n            <!-- <ion-item>\n              <ion-label position=\"stacked\">Status</ion-label>\n              <ion-select placeholder=\"Please select\" formControlName=\"status\">\n                <ion-select-option *ngFor=\"let status of statuses\" [value]=\"status.value\">{{ status.name }}\n                </ion-select-option>\n              </ion-select>\n            </ion-item> -->\n            <ion-item>\n              <ion-label position=\"stacked\">Maintenance Specification</ion-label>\n              <ion-input type=\"text\" formControlName=\"maintenance_specification\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"stacked\">Measurement Type</ion-label>\n              <ion-select placeholder=\"Please select\" formControlName=\"measurement_type\">\n                <ion-select-option *ngFor=\"let measuringtype of measuringtypes\" [value]=\"measuringtype.value\">\n                  {{ measuringtype.name }}</ion-select-option>\n              </ion-select>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"stacked\">Warranty</ion-label>\n              <ion-select placeholder=\"Please select\" formControlName=\"warranty\">\n                <ion-select-option *ngFor=\"let warranti of warrantyList\" [value]=\"warranti.id\">\n                  {{ warranti.name }}</ion-select-option>\n              </ion-select>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"stacked\">Actual warranty period</ion-label>\n              <ion-input formControlName=\"actual_warranty_period\" type=\"text\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"stacked\">Warranty vendor name</ion-label>\n              <ion-input formControlName=\"warranty_vendor_name\" type=\"text\"></ion-input>\n            </ion-item>\n          </div>\n\n          <!-- <div>\n            <ion-button color=\"danger\" size=\"small\" matStepperPrevious>\n              Back\n            </ion-button>\n            <ion-button color=\"success\" size=\"small\" matStepperNext\n              >Next</ion-button\n            >\n          </div> -->\n        </form>\n      </mat-step>\n      <!-- <mat-step [stepControl]=\"sixthFormGroup\">\n        <form [formGroup]=\"sixthFormGroup\">\n          <ng-template matStepLabel>Asset Warranty Information</ng-template>\n          <div class=\"line-input\">\n            <ion-radio-group formControlName=\"is_warranty\">\n              <ion-list-header>\n                <ion-label>Warranty</ion-label>\n              </ion-list-header>\n\n              <ion-item>\n                <ion-label>Yes</ion-label>\n                <ion-radio slot=\"start\" value=\"true\"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>No</ion-label>\n                <ion-radio slot=\"start\" value=\"false\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n\n            <ion-item>\n              <ion-label position=\"stacked\">Actual Warranty Period</ion-label>\n              <ion-input\n                type=\"number\"\n                formControlName=\"warranty_period_actual\"\n              ></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Warranty Vendor Name</ion-label>\n              <ion-select\n                placeholder=\"Please select\"\n                formControlName=\"warranty_vendor\"\n              >\n                <ion-select-option\n                  *ngFor=\"let organisation of organisations\"\n                  [value]=\"organisation.id\"\n                  >{{ organisation.name }}</ion-select-option\n                >\n              </ion-select>\n            </ion-item>\n          </div>\n\n          <div>\n            <ion-button color=\"danger\" size=\"small\" matStepperPrevious>\n              Back\n            </ion-button>\n            <ion-button color=\"success\" size=\"small\" matStepperNext\n              >Next</ion-button\n            >\n          </div>\n        </form>\n      </mat-step> -->\n      <!-- <mat-step [stepControl]=\"seventhFormGroup\">\n        <form [formGroup]=\"seventhFormGroup\">\n          <ng-template matStepLabel>PO Detail</ng-template>\n          <div class=\"line-input\">\n            <ion-item>\n              <ion-label position=\"stacked\">Purchase Order Vendor Name</ion-label>\n              <ion-select placeholder=\"Please select\" formControlName=\"po_vendor\">\n                <ion-select-option\n                  *ngFor=\"let organisation of organisations\"\n                  [value]=\"organisation.id\"\n                  >{{ organisation.name }}</ion-select-option\n                >\n              </ion-select>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Purchase Cost</ion-label>\n              <ion-input type=\"number\" formControlName=\"po_cost\"></ion-input>\n            </ion-item>\n          </div>\n        </form>\n      </mat-step> -->\n    </mat-vertical-stepper>\n\n    <div class=\"ion-padding ion-text-center\">\n      <ion-button color=\"primary\" (click)=\"changeSegment('second')\">Next</ion-button>\n      <ion-button color=\"light\" (click)=\"clickBack()\">Cancel</ion-button>\n    </div>\n  </div>\n  <div class=\"ion-padding\" *ngIf=\"segmentModal == 'second'\">\n    <h4 class=\"ion-text-center ion-padding\">Asset Technical Spec</h4>\n\n    <ion-list class=\"ion-padding line-input\">\n      <form [formGroup]=\"sixthFormGroup\">\n        <!-- <div *ngIf=\"assetAttrColumn != ''\"> -->\n        <ion-item *ngIf=\"assetAttrColumn.bottom_water_level == true\">\n          <ion-label required position=\"stacked\">Bottom water level</ion-label>\n          <ion-input formControlName=\"bottom_water_level\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.brand == true\">\n          <ion-label required position=\"stacked\">Brand</ion-label>\n          <ion-input formControlName=\"brand\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.capacity_size == true\">\n          <ion-label required position=\"stacked\">Capacity size</ion-label>\n          <ion-input formControlName=\"capacity_size\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.closing_torque == true\">\n          <ion-label required position=\"stacked\">Closing torque</ion-label>\n          <ion-input formControlName=\"closing_torque\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.communication_protocol == true\">\n          <ion-label required position=\"stacked\">Comunication protocol</ion-label>\n          <ion-input formControlName=\"communication_protocol\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.coverage_range == true\">\n          <ion-label required position=\"stacked\">Coverage range</ion-label>\n          <ion-input formControlName=\"coverage_range\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.dimention == true\">\n          <ion-label required position=\"stacked\">Dimention</ion-label>\n          <ion-input formControlName=\"dimention\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.environmental_performance == true\">\n          <ion-label required position=\"stacked\">Environmental Performance</ion-label>\n          <ion-input formControlName=\"environmental_performance\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.flow_rate == true\">\n          <ion-label required position=\"stacked\">Flow rate</ion-label>\n          <ion-input formControlName=\"flow_rate\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.frequency == true\">\n          <ion-label required position=\"stacked\">Frequency</ion-label>\n          <ion-input formControlName=\"frequency\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.horse_power == true\">\n          <ion-label required position=\"stacked\">Horse power</ion-label>\n          <ion-input formControlName=\"horse_power\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.hysteresis == true\">\n          <ion-label required position=\"stacked\">Hysterasis</ion-label>\n          <ion-input formControlName=\"hysteresis\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.infrastructure_status == true\">\n          <ion-label required position=\"stacked\">Infrastracture status</ion-label>\n          <ion-input formControlName=\"infrastructure_status\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.infrastructure_status_reason == true\">\n          <ion-label required position=\"stacked\">Infrastracture status reason</ion-label>\n          <ion-input formControlName=\"infrastructure_status_reason\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.inlet_diameter == true\">\n          <ion-label required position=\"stacked\">Inlet diameter</ion-label>\n          <ion-input formControlName=\"inlet_diameter\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.installation == true\">\n          <ion-label required position=\"stacked\">Installation</ion-label>\n          <ion-input formControlName=\"installation\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.insulation == true\">\n          <ion-label required position=\"stacked\">Insulation</ion-label>\n          <ion-input formControlName=\"insulation\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.legal_name == true\">\n          <ion-label required position=\"stacked\">Legal name</ion-label>\n          <ion-input formControlName=\"legal_name\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.manufacturer == true\">\n          <ion-label required position=\"stacked\">Manufacturer</ion-label>\n          <!-- <ion-input formControlName=\"manufacturer\" type=\"text\"></ion-input> -->\n          <!-- <ion-select placeholder=\"Please select\" formControlName=\"manufacturer\">\n            <ion-select-option *ngFor=\"let assAttPreMan of assetAttPredefineMans\" [value]=\"assAttPreMan.id\">\n              {{ assAttPreMan.characteristic_value }}\n            </ion-select-option>\n          </ion-select> -->\n\n          <ionic-selectable [items]=\"assetAttPredefineMans\" style=\"max-width: 100% !important;\" itemValueField=\"id\"\n            itemTextField=\"characteristic_value\" [canSearch]=\"true\" formControlName=\"manufacturer\"\n            (ionChange)=\"onChangeLocAssMaiMan($event)\">\n          </ionic-selectable>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.manufacturer_year == true\">\n          <ion-label required position=\"stacked\">Manufacturer year</ion-label>\n          <ion-input formControlName=\"manufacturer_year\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.manufacture_part_number == true\">\n          <ion-label required position=\"stacked\">Manufacturer part number</ion-label>\n          <ion-input formControlName=\"manufacture_part_number\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.material_type == true\">\n          <ion-label required position=\"stacked\">Material type</ion-label>\n          <ion-input formControlName=\"material_type\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.model == true\">\n          <ion-label required position=\"stacked\">Model</ion-label>\n          <ion-input formControlName=\"model\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.motor_current == true\">\n          <ion-label required position=\"stacked\">Motor current</ion-label>\n          <ion-input formControlName=\"motor_current\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.no_of_channel == true\">\n          <ion-label required position=\"stacked\">No of channer</ion-label>\n          <ion-input formControlName=\"no_of_channel\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.no_of_phases == true\">\n          <ion-label required position=\"stacked\">No of phase</ion-label>\n          <ion-input formControlName=\"no_of_phases\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.no_of_stage == true\">\n          <ion-label required position=\"stacked\">No of stage</ion-label>\n          <ion-input formControlName=\"no_of_stage\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.opening_torque == true\">\n          <ion-label required position=\"stacked\">Opening torque</ion-label>\n          <ion-input formControlName=\"opening_torque\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.outlet_diameter == true\">\n          <ion-label required position=\"stacked\">Outlet diameter</ion-label>\n          <ion-input formControlName=\"outlet_diameter\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.power_supply_type == true\">\n          <ion-label required position=\"stacked\">Power supply type</ion-label>\n          <ion-input formControlName=\"power_supply_type\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.pump_head == true\">\n          <ion-label required position=\"stacked\">Pump head</ion-label>\n          <ion-input formControlName=\"pump_head\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.revolutions_per_minute == true\">\n          <ion-label required position=\"stacked\">Revolution per minute</ion-label>\n          <ion-input formControlName=\"revolutions_per_minute\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.source_from == true\">\n          <ion-label required position=\"stacked\">Source from</ion-label>\n          <ion-input formControlName=\"source_from\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.staging_height == true\">\n          <ion-label required position=\"stacked\">Staging height</ion-label>\n          <ion-input formControlName=\"staging_height\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.supply_location == true\">\n          <ion-label required position=\"stacked\">Supply location</ion-label>\n          <ion-input formControlName=\"supply_location\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.temperature == true\">\n          <ion-label required position=\"stacked\">Temperature</ion-label>\n          <ion-input formControlName=\"temperature\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.top_water_level == true\">\n          <ion-label required position=\"stacked\">Top water level</ion-label>\n          <ion-input formControlName=\"top_water_level\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.type == true\">\n          <ion-label required position=\"stacked\">Type</ion-label>\n          <ion-input formControlName=\"type\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.valve_diameter == true\">\n          <ion-label required position=\"stacked\">Value diameter</ion-label>\n          <ion-input formControlName=\"valve_diameter\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.valve_pressure_rating == true\">\n          <ion-label required position=\"stacked\">Valve pressuring rate</ion-label>\n          <ion-input formControlName=\"valve_pressure_rating\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <!-- <ion-list-header *ngIf=\"assetAttrColumn != ''\">\n          <ion-label>Vehicle</ion-label>\n        </ion-list-header> -->\n\n        <ion-item *ngIf=\"assetAttrColumn.vehicle_chasis_number == true\">\n          <ion-label required position=\"stacked\">chassis number</ion-label>\n          <ion-input formControlName=\"vehicle_chasis_number\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.vehicle_engine_capacity == true\">\n          <ion-label required position=\"stacked\">engine capacity</ion-label>\n          <ion-input formControlName=\"vehicle_engine_capacity\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.vehicle_engine_number == true\">\n          <ion-label required position=\"stacked\">engine number</ion-label>\n          <ion-input formControlName=\"vehicle_engine_number\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.vehicle_insurance_vendor == true\">\n          <ion-label required position=\"stacked\">insurance vendor</ion-label>\n          <!-- <ion-input formControlName=\"vehicle_insurance_vendor\" type=\"text\"></ion-input> -->\n          <ion-select placeholder=\"Please select\" formControlName=\"vehicle_insurance_vendor\">\n            <ion-select-option *ngFor=\"let assAttPreInsVen of assetAttPredefinePreInsVens\" [value]=\"assAttPreInsVen.id\">\n              {{ assAttPreInsVen.characteristic_value }}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.vehicle_model == true\">\n          <ion-label required position=\"stacked\">model</ion-label>\n          <ion-input formControlName=\"vehicle_model\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.vehicle_insurance_auto_windscreen_insured == true\">\n          <ion-label required position=\"stacked\">insurance windscreen</ion-label>\n          <ion-input formControlName=\"vehicle_insurance_auto_windscreen_insured\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.vehicle_insurance_cover_note_number == true\">\n          <ion-label required position=\"stacked\">insurance cover no</ion-label>\n          <ion-input formControlName=\"vehicle_insurance_cover_note_number\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.vehicle_insurance_date_period_from == true\">\n          <ion-label required position=\"stacked\">insurance date from</ion-label>\n          <ion-input formControlName=\"vehicle_insurance_date_period_from\" type=\"date\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.vehicle_insurance_date_period_to == true\">\n          <ion-label required position=\"stacked\">insurance date to</ion-label>\n          <ion-input formControlName=\"vehicle_insurance_date_period_to\" type=\"date\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.vehicle_insurance_no_claim_discount == true\">\n          <ion-label required position=\"stacked\">insurance claim discount no</ion-label>\n          <ion-input formControlName=\"vehicle_insurance_no_claim_discount\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.vehicle_insurance_policy_type == true\">\n          <ion-label required position=\"stacked\">insurance policy type</ion-label>\n          <!-- <ion-input formControlName=\"vehicle_insurance_policy_type\" type=\"text\"></ion-input> -->\n          <ion-select placeholder=\"Please select\" formControlName=\"vehicle_insurance_policy_type\">\n            <ion-select-option *ngFor=\"let assAttPreInsPol of assetAttPredefineInsPols\" [value]=\"assAttPreInsPol.id\">\n              {{ assAttPreInsPol.characteristic_value }}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.vehicle_insurance_sum_insured == true\">\n          <ion-label required position=\"stacked\">insurance sum insured</ion-label>\n          <ion-input formControlName=\"vehicle_insurance_sum_insured\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.vehicle_insurance_total_premium == true\">\n          <ion-label required position=\"stacked\">insurance total premium</ion-label>\n          <ion-input formControlName=\"vehicle_insurance_total_premium\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.vehicle_puspakom_date_inspection == true\">\n          <ion-label required position=\"stacked\">puspakom date inspection</ion-label>\n          <ion-input formControlName=\"vehicle_puspakom_date_inspection\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.vehicle_owner_status == true\">\n          <ion-label required position=\"stacked\">owner status</ion-label>\n          <!-- <ion-input formControlName=\"vehicle_owner_status\" type=\"text\"></ion-input> -->\n          <ion-select placeholder=\"Please select\" formControlName=\"vehicle_owner_status\">\n            <ion-select-option *ngFor=\"let assAttPreVehOwnSta of assetAttPredefineOwnStas\"\n              [value]=\"assAttPreVehOwnSta.id\">\n              {{ assAttPreVehOwnSta.characteristic_value }}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.vehicle_register_date == true\">\n          <ion-label required position=\"stacked\">register date</ion-label>\n          <ion-input formControlName=\"vehicle_register_date\" type=\"date\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.vehicle_roadtax_rate == true\">\n          <ion-label required position=\"stacked\">roadtax rate</ion-label>\n          <ion-input formControlName=\"vehicle_roadtax_rate\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.vehicle_puspakom_expired_date == true\">\n          <ion-label required position=\"stacked\">puspakom expired date</ion-label>\n          <ion-input formControlName=\"vehicle_puspakom_expired_date\" type=\"date\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.vehicle_spad_permit_date_period_to == true\">\n          <ion-label required position=\"stacked\">spad permit date to</ion-label>\n          <ion-input formControlName=\"vehicle_spad_permit_date_period_to\" type=\"date\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.vehicle_roadtax_renew_date == true\">\n          <ion-label required position=\"stacked\">roadtax renew date</ion-label>\n          <ion-input formControlName=\"vehicle_roadtax_renew_date\" type=\"date\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.vehicle_roadtax_expired_date == true\">\n          <ion-label required position=\"stacked\">roadtax expire date</ion-label>\n          <ion-input formControlName=\"vehicle_roadtax_expired_date\" type=\"date\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.vehicle_spad_no_license_operator == true\">\n          <ion-label required position=\"stacked\">spad no license operator</ion-label>\n          <ion-input formControlName=\"vehicle_spad_no_license_operator\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.vehicle_spad_permit_date_period_from == true\">\n          <ion-label required position=\"stacked\">spad permit date from</ion-label>\n          <ion-input formControlName=\"vehicle_spad_permit_date_period_from\" type=\"date\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.vehicle_seating_capacity == true\">\n          <ion-label required position=\"stacked\">seating capacity</ion-label>\n          <ion-input formControlName=\"vehicle_seating_capacity\" type=\"number\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.vehicle_registration_owner == true\">\n          <ion-label required position=\"stacked\">registration owner</ion-label>\n          <!-- <ion-input formControlName=\"vehicle_registration_owner\" type=\"text\"></ion-input> -->\n          <ion-select placeholder=\"Please select\" formControlName=\"vehicle_registration_owner\">\n            <ion-select-option *ngFor=\"let assAttregOw of assetAttPredefineRegOwns\"\n              [value]=\"assAttregOw.characteristic_value\">\n              {{ assAttregOw.characteristic_value }}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item *ngIf=\"assetAttrColumn.voltage == true\">\n          <ion-label required position=\"stacked\">Voltage</ion-label>\n          <ion-input formControlName=\"voltage\" type=\"text\"></ion-input>\n        </ion-item>\n        <!-- </div> -->\n\n      </form>\n    </ion-list>\n\n    <div class=\"ion-text-center ion-padding\">\n      <ion-button color=\"light\" (click)=\"changeSegment('first')\">Back</ion-button>\n      <ion-button *ngIf=\"process != 'view'\" (click)=\"register()\">Submit</ion-button>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/technical/asset-registration/asset-registration-routing.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/technical/asset-registration/asset-registration-routing.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: AssetRegistrationPageRoutingModule */

  /***/
  function srcAppPagesTechnicalAssetRegistrationAssetRegistrationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetRegistrationPageRoutingModule", function () {
      return AssetRegistrationPageRoutingModule;
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


    var _asset_registration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./asset-registration.page */
    "./src/app/pages/technical/asset-registration/asset-registration.page.ts");

    var routes = [{
      path: '',
      component: _asset_registration_page__WEBPACK_IMPORTED_MODULE_3__["AssetRegistrationPage"]
    }];

    var AssetRegistrationPageRoutingModule = function AssetRegistrationPageRoutingModule() {
      _classCallCheck(this, AssetRegistrationPageRoutingModule);
    };

    AssetRegistrationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AssetRegistrationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/technical/asset-registration/asset-registration.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/technical/asset-registration/asset-registration.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: AssetRegistrationPageModule */

  /***/
  function srcAppPagesTechnicalAssetRegistrationAssetRegistrationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetRegistrationPageModule", function () {
      return AssetRegistrationPageModule;
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


    var _asset_registration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./asset-registration-routing.module */
    "./src/app/pages/technical/asset-registration/asset-registration-routing.module.ts");
    /* harmony import */


    var _asset_registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./asset-registration.page */
    "./src/app/pages/technical/asset-registration/asset-registration.page.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ionic-selectable */
    "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");

    var AssetRegistrationPageModule = function AssetRegistrationPageModule() {
      _classCallCheck(this, AssetRegistrationPageModule);
    };

    AssetRegistrationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _asset_registration_routing_module__WEBPACK_IMPORTED_MODULE_5__["AssetRegistrationPageRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"]],
      declarations: [_asset_registration_page__WEBPACK_IMPORTED_MODULE_6__["AssetRegistrationPage"]]
    })], AssetRegistrationPageModule);
    /***/
  },

  /***/
  "./src/app/pages/technical/asset-registration/asset-registration.page.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/technical/asset-registration/asset-registration.page.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTechnicalAssetRegistrationAssetRegistrationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".validation_messages {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wbnNiL0RvY3VtZW50cy9HaXRIdWIvYWlyc2VsLXJmaWQvbW9iaWxlL3NyYy9hcHAvcGFnZXMvdGVjaG5pY2FsL2Fzc2V0LXJlZ2lzdHJhdGlvbi9hc3NldC1yZWdpc3RyYXRpb24ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90ZWNobmljYWwvYXNzZXQtcmVnaXN0cmF0aW9uL2Fzc2V0LXJlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90ZWNobmljYWwvYXNzZXQtcmVnaXN0cmF0aW9uL2Fzc2V0LXJlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmFsaWRhdGlvbl9tZXNzYWdlcyB7XG4gIGNvbG9yOiByZWQ7XG59XG4iLCIudmFsaWRhdGlvbl9tZXNzYWdlcyB7XG4gIGNvbG9yOiByZWQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/technical/asset-registration/asset-registration.page.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/technical/asset-registration/asset-registration.page.ts ***!
    \*******************************************************************************/

  /*! exports provided: AssetRegistrationPage */

  /***/
  function srcAppPagesTechnicalAssetRegistrationAssetRegistrationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetRegistrationPage", function () {
      return AssetRegistrationPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/assets/assets.service */
    "./src/app/shared/services/assets/assets.service.ts");
    /* harmony import */


    var src_app_shared_services_asset_groups_asset_groups_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/asset-groups/asset-groups.service */
    "./src/app/shared/services/asset-groups/asset-groups.service.ts");
    /* harmony import */


    var src_app_shared_services_asset_types_asset_types_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/services/asset-types/asset-types.service */
    "./src/app/shared/services/asset-types/asset-types.service.ts");
    /* harmony import */


    var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/services/auth/auth.service */
    "./src/app/shared/services/auth/auth.service.ts");
    /* harmony import */


    var src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/services/notifications/notifications.service */
    "./src/app/shared/services/notifications/notifications.service.ts");
    /* harmony import */


    var src_app_shared_services_organisations_organisations_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/services/organisations/organisations.service */
    "./src/app/shared/services/organisations/organisations.service.ts");
    /* harmony import */


    var src_app_shared_services_regions_regions_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/shared/services/regions/regions.service */
    "./src/app/shared/services/regions/regions.service.ts");
    /* harmony import */


    var src_app_shared_services_asset_registrations_asset_registrations_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/shared/services/asset-registrations/asset-registrations.service */
    "./src/app/shared/services/asset-registrations/asset-registrations.service.ts");
    /* harmony import */


    var src_app_shared_services_state_states_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/shared/services/state/states.service */
    "./src/app/shared/services/state/states.service.ts");
    /* harmony import */


    var src_app_shared_services_asset_attribute_column_asset_attribute_column_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/app/shared/services/asset-attribute-column/asset-attribute-column.service */
    "./src/app/shared/services/asset-attribute-column/asset-attribute-column.service.ts");
    /* harmony import */


    var src_app_shared_services_asset_attribute_predefine_asset_attribute_prodefine_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/app/shared/services/asset-attribute-predefine/asset-attribute-prodefine.service */
    "./src/app/shared/services/asset-attribute-predefine/asset-attribute-prodefine.service.ts");
    /* harmony import */


    var src_app_shared_services_asset_attribute_reference_asset_attribute_reference_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! src/app/shared/services/asset-attribute-reference/asset-attribute-reference.service */
    "./src/app/shared/services/asset-attribute-reference/asset-attribute-reference.service.ts");
    /* harmony import */


    var src_app_shared_services_maintenance_manager_maintenance_manager_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! src/app/shared/services/maintenance-manager/maintenance-manager.service */
    "./src/app/shared/services/maintenance-manager/maintenance-manager.service.ts");
    /* harmony import */


    var src_app_shared_services_planner_planner_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! src/app/shared/services/planner/planner.service */
    "./src/app/shared/services/planner/planner.service.ts");
    /* harmony import */


    var src_app_shared_services_asset_location_sync_asset_location_sync_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! src/app/shared/services/asset-location-sync/asset-location-sync.service */
    "./src/app/shared/services/asset-location-sync/asset-location-sync.service.ts");

    var Port = function Port() {
      _classCallCheck(this, Port);
    };

    var AssetRegistrationPage =
    /*#__PURE__*/
    function () {
      function AssetRegistrationPage(formBuilder, alertController, menu, assetsService, assetGroupsService, assetTypesService, authService, notificationService, organisationsService, regionsService, route, router, assetRegistrationsService, statesService, assetAttributeColumnService, assetAttributePredefineService, assetAttributeReferenceService, maintenanceManagerService, plannerService, assetLocatioSyncService) {
        var _this = this;

        _classCallCheck(this, AssetRegistrationPage);

        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.menu = menu;
        this.assetsService = assetsService;
        this.assetGroupsService = assetGroupsService;
        this.assetTypesService = assetTypesService;
        this.authService = authService;
        this.notificationService = notificationService;
        this.organisationsService = organisationsService;
        this.regionsService = regionsService;
        this.route = route;
        this.router = router;
        this.assetRegistrationsService = assetRegistrationsService;
        this.statesService = statesService;
        this.assetAttributeColumnService = assetAttributeColumnService;
        this.assetAttributePredefineService = assetAttributePredefineService;
        this.assetAttributeReferenceService = assetAttributeReferenceService;
        this.maintenanceManagerService = maintenanceManagerService;
        this.plannerService = plannerService;
        this.assetLocatioSyncService = assetLocatioSyncService; // Stepper

        this.isLinear = false;
        this.isDisableRipple = true;
        this.typeassets = [];
        this.regions = [];
        this.states = [];
        this.organisations = [];
        this.departments = [{
          value: "CB",
          name: "Customer Billing Services"
        }, {
          value: "DB",
          name: "Distribution"
        }, {
          value: "ED",
          name: "Engineering Services - Distribution"
        }, {
          value: "FL",
          name: "Fleet"
        }, {
          value: "LN",
          name: "Land"
        }, {
          value: "NR",
          name: "NRW"
        }, {
          value: "PN",
          name: "Production Northern"
        }, {
          value: "PS",
          name: "Production Southern"
        }, {
          value: "SD",
          name: "SCADA"
        }, {
          value: "WQ",
          name: "Water Quality"
        }, {
          value: "NA",
          name: "Not Available"
        }];
        this.hierarchylevel1s = [{
          value: "CB",
          name: "Customer Billing Services"
        }, {
          value: "DB",
          name: "Distribution"
        }, {
          value: "FL",
          name: "Fleet"
        }, {
          value: "GA",
          name: "General Admin"
        }, {
          value: "PD",
          name: "Production"
        }, {
          value: "SD",
          name: "SCADA"
        }, {
          value: "WQ",
          name: "Water Quality"
        }, {
          value: "NA",
          name: "Not Available"
        }];
        this.hierarchylevel3s = [{
          value: "ND",
          name: "NRW - District Metering Zone"
        }, {
          value: "NT",
          name: "NRW - Transmission Network"
        }, {
          value: "NW",
          name: "NRW - Water Balancing Area"
        }, {
          value: "PH",
          name: "Pump House"
        }, {
          value: "RS",
          name: "Reservoir"
        }, {
          value: "VD",
          name: "Valve - Distribution Main"
        }, {
          value: "VT",
          name: "Valve - Trunk Main"
        }, {
          value: "WT",
          name: "Water Treatment Plant"
        }, {
          value: "WL",
          name: "WQ Laboratory Services"
        }, {
          value: "WO",
          name: "WQ - Online Analyzer"
        }, {
          value: "WR",
          name: "WQ - River Monitoring Station"
        }, {
          value: "WS",
          name: "WQ Sampling Station"
        }, {
          value: "NA",
          name: "Not Available"
        }];
        this.hierarchylevel4s = [{
          value: "NR",
          name: "NRW"
        }, {
          value: "PH",
          name: "Pump House"
        }, {
          value: "RS",
          name: "Reservoir"
        }, {
          value: "TP",
          name: "Treatment Plant Name"
        }, {
          value: "NA",
          name: "Not Available"
        }];
        this.hierarchylevel5s = [{
          value: "AS",
          name: "Aeration System"
        }, {
          value: "BR",
          name: "Balancing Reservoir"
        }, {
          value: "BD",
          name: "Buildings"
        }, {
          value: "CD",
          name: "Chemical Dosing"
        }, {
          value: "CS",
          name: "Coagulation System"
        }, {
          value: "DT",
          name: "Draw of Tower"
        }, {
          value: "ES",
          name: "Earthing System"
        }, {
          value: "EP",
          name: "Electrical Panel"
        }, {
          value: "ES",
          name: "Electrical System"
        }, {
          value: "FS",
          name: "Filtration Process"
        }, {
          value: "FC",
          name: "Flocculation"
        }, {
          value: "OR",
          name: "Off River Storage Reservoir"
        }, {
          value: "RW",
          name: "Raw Water Process"
        }, {
          value: "SP",
          name: "Sedimentation Process"
        }, {
          value: "SS",
          name: "Solar System"
        }, {
          value: "ST",
          name: "Sludge Treament Process"
        }, {
          value: "SW",
          name: "Settled Water Process"
        }, {
          value: "TI",
          name: "Tangki Imbang 3MG"
        }, {
          value: "TO",
          name: "Tangki Imbangan 4MG (OLD)"
        }, {
          value: "TN",
          name: "Tangki Imbangan 4MG (NEW)"
        }, {
          value: "TS",
          name: "Telemetry System"
        }, {
          value: "TP",
          name: "Treatment Process"
        }, {
          value: "TW",
          name: "Treated Water Process"
        }, {
          value: "WA",
          name: "Water Analysis"
        }, {
          value: "NA",
          name: "Not Available"
        }];
        this.hierarchylevel6s = [{
          value: "AP",
          name: "Actiflo Process"
        }, {
          value: "AC",
          name: "Activated Carbon Process"
        }, {
          value: "AS",
          name: "Aeration System"
        }, {
          value: "ES",
          name: "Alum Process"
        }, {
          value: "BP",
          name: "Backwash Process"
        }, {
          value: "BR",
          name: "Balancing Reservoir"
        }, {
          value: "BO",
          name: "Boat House"
        }, {
          value: "BU",
          name: "Buildings"
        }, {
          value: "CD",
          name: "Chemical Dosing"
        }, {
          value: "CM",
          name: "Chemical Process"
        }, {
          value: "CP",
          name: "Chlorination Process"
        }, {
          value: "CO",
          name: "Coagulation Process"
        }, {
          value: "CR",
          name: "Chemical Room"
        }, {
          value: "CC",
          name: "Control Centre"
        }, {
          value: "CR",
          name: "Control Room"
        }, {
          value: "DP",
          name: "Data Process"
        }, {
          value: "DS",
          name: "Distrafication"
        }, {
          value: "DO",
          name: "Draw Off Process"
        }, {
          value: "ES",
          name: "Earthing System"
        }, {
          value: "EL",
          name: "Electrical System"
        }, {
          value: "FS",
          name: "Facilities System"
        }, {
          value: "FP",
          name: "Filtration Process"
        }, {
          value: "FW",
          name: "Filtered Water Sampling"
        }, {
          value: "FO",
          name: "Flocculation Process"
        }, {
          value: "FL",
          name: "Fluoride Process"
        }, {
          value: "LB",
          name: "Laboratory"
        }, {
          value: "LP",
          name: "Lime Process"
        }, {
          value: "OA",
          name: "Online Analyzer"
        }, {
          value: "PR",
          name: "Polymer (Residual) Dosing"
        }, {
          value: "PA",
          name: "Poly Aluminium Chloride Process"
        }, {
          value: "PP",
          name: "Polymer Process"
        }, {
          value: "PS",
          name: "Power Supply"
        }, {
          value: "RM",
          name: "Rapid Mixing"
        }, {
          value: "RE",
          name: "Residual Emergency Lagoon"
        }, {
          value: "RT",
          name: "Residual Thickened Pumping Station"
        }, {
          value: "RI",
          name: "Raw Water Intake System"
        }, {
          value: "RS",
          name: "Raw Water Pumping System"
        }, {
          value: "RP",
          name: "Raw Water Process"
        }, {
          value: "RE",
          name: "Raw Water Pipeline"
        }, {
          value: "RV",
          name: "Reservoir"
        }, {
          value: "SS",
          name: "SCADA System"
        }, {
          value: "SD",
          name: "Sedimentation Process"
        }, {
          value: "SL",
          name: "Settled Water Process"
        }, {
          value: "SS",
          name: "Settled Water Sampling"
        }, {
          value: "SW",
          name: "Settled Water Pumping System"
        }, {
          value: "SB",
          name: "Sludge Balancing"
        }, {
          value: "ST",
          name: "Sludge Treament Process"
        }, {
          value: "SQ",
          name: "Solid Liquid Separation"
        }, {
          value: "SA",
          name: "Solar System"
        }, {
          value: "SI",
          name: "Sodium Alumino Silicate Process"
        }, {
          value: "SO",
          name: "Soda Ash Process"
        }, {
          value: "TA",
          name: "Tangki Sedit SYABAS"
        }, {
          value: "TE",
          name: "Telemetry System"
        }, {
          value: "TP",
          name: "Treated Water Process"
        }, {
          value: "TS",
          name: "Treated Water Sampling"
        }, {
          value: "TL",
          name: "Treated Water Pipeline"
        }, {
          value: "TW",
          name: "Treated Water Pumping System"
        }, {
          value: "TT",
          name: "Treatment Process"
        }, {
          value: "WA",
          name: "Water Analysis"
        }, {
          value: "WO",
          name: "Workshop"
        }, {
          value: "WT",
          name: "Water Transfer"
        }, {
          value: "WP",
          name: "Wash Water Process"
        }, {
          value: "WR",
          name: "Wash Water Recovery"
        }, {
          value: "WS",
          name: "Wash Water System"
        }, {
          value: "NA",
          name: "Not Available"
        }];
        this.categories = [];
        this.identities = [];
        this.primarycategories = [];
        this.groupsubcategory1s = [];
        this.groupsubcategory2s = [];
        this.statuses = [{
          value: "NA",
          name: "Not Available"
        }];
        this.measuringtypes = [{
          value: "FM",
          name: "Flow Meter Readings"
        }, {
          value: "TP",
          name: "Temperature"
        }, {
          value: "OT",
          name: "Other"
        }];
        this.measurement_types = [{
          desc: 'Bar',
          value: 'bar'
        }, {
          desc: 'Celsius',
          value: '°C'
        }, {
          desc: 'Hour',
          value: 'hr'
        }, {
          desc: 'Kilogram',
          value: 'kg'
        }, {
          desc: 'Kilometer',
          value: 'km'
        }, {
          desc: 'Kilowatt',
          value: 'kW'
        }, {
          desc: 'Megapascal Pressure Unit',
          value: 'Mpa'
        }, {
          desc: 'Meter',
          value: 'm'
        }, {
          desc: 'Meter per second',
          value: 'm/s'
        }, {
          desc: 'Milimetre',
          value: 'mm'
        }, {
          desc: 'Millions of Gallons per Day',
          value: 'MGD'
        }, {
          desc: 'Millions of liters per day ',
          value: 'MLD'
        }, {
          desc: 'Miligram',
          value: 'mg'
        }, {
          desc: 'Revolutions per minute',
          value: 'RPM'
        }, {
          desc: 'Horsepower',
          value: 'hp'
        }, {
          desc: 'Voltage',
          value: 'V'
        }, {
          desc: 'Cubic meter',
          value: 'm³'
        }, {
          desc: 'Cubic meter per hour',
          value: 'm³/hr'
        }, {
          desc: 'Decibels woth reference to one milliwatt',
          value: 'dBm'
        }, {
          desc: 'Liter per second',
          value: 'l/s'
        }, {
          desc: 'Megametre per second',
          value: 'mm/s'
        }, {
          desc: 'Millihenrys',
          value: 'mH'
        }, {
          desc: 'Millivolts',
          value: 'mV'
        }, {
          desc: 'pH',
          value: 'pH'
        }, {
          desc: 'Percent',
          value: '%'
        }, {
          desc: 'Watt',
          value: 'W'
        }, {
          desc: 'Voltage direct current',
          value: 'VDC'
        }, {
          desc: 'nanometers',
          value: 'nm'
        }, {
          desc: 'Milliamperes',
          value: 'mA'
        }, {
          desc: 'Pound per square inch',
          value: 'psi'
        }, {
          desc: "Ampere",
          value: 'amp'
        }, {
          desc: "Kilovolt Ampere",
          value: 'kva'
        }, {
          desc: "Hertz",
          value: 'hz'
        }, {
          desc: "Ampere",
          value: 'amp'
        }, {
          desc: "Ampere",
          value: 'amp'
        }, {
          desc: "Ampere",
          value: 'amp'
        }];
        this.assetAttPredefineMans = []; // manufacturer

        this.assetAttPredefinePreInsVens = []; // vehicle_insurance_vendor

        this.assetAttPredefineInsPols = []; // vehicle_insurance_policy_type

        this.assetAttPredefineOwnStas = []; //vehicle_owner_status

        this.assetAttPredefineRegOwns = []; // vehicle_registration_owner
        // hide show div

        this.parentLocaDiv = 0;
        this.assetLocDiv = 0;
        this.segmentModal = "first";
        this.process = "create"; // state data

        this.stateList = [{
          id: 'JHR',
          name: 'Johor'
        }, {
          id: 'KDH',
          name: 'Kedah'
        }, {
          id: 'KEL',
          name: 'Kelantan'
        }, {
          id: 'KUL',
          name: 'Kuala Lumpur'
        }, {
          id: 'LBN',
          name: 'Labuan'
        }, {
          id: 'MLK',
          name: 'Melaka'
        }, {
          id: 'NSN',
          name: 'Negeri Sembilan'
        }, {
          id: 'PHG',
          name: 'Pahang'
        }, {
          id: 'PJY',
          name: 'Putrajaya'
        }, {
          id: 'PLS',
          name: 'Perlis'
        }, {
          id: 'PNG',
          name: 'Penang'
        }, {
          id: 'PRK',
          name: 'Perak'
        }, {
          id: 'SBH',
          name: 'Sabah'
        }, {
          id: 'SGR',
          name: 'Selangor'
        }, {
          id: 'SWK',
          name: 'Serawak'
        }, {
          id: 'TRG',
          name: 'Terengganu'
        }]; // service area

        this.servAreaList = [{
          id: 'GOMBAK',
          name: 'GOMBAK'
        }, {
          id: 'HEADQUARTERS',
          name: 'HEADQUARTERS'
        }, {
          id: 'HULU-LANGAT',
          name: 'HULU LANGAT'
        }, {
          id: 'HULU-SELANGOR',
          name: 'HULU SELANGOR'
        }, {
          id: 'KLANG',
          name: 'KLANG'
        }, {
          id: 'KUALA-LANGAT',
          name: 'KUALA LANGAT'
        }, {
          id: 'KUALA-LUMPUR',
          name: 'KUALA LUMPUR'
        }, {
          id: 'KUALA-SELANGOR',
          name: 'KUALA SELANGOR'
        }, {
          id: 'NORTH',
          name: 'NORTH'
        }, {
          id: 'PETALING',
          name: 'PETALING'
        }, {
          id: 'SABAK-BERNAM',
          name: 'SABAK BERNAM'
        }, {
          id: 'SEPANG',
          name: 'SEPANG'
        }, {
          id: 'SOUTH',
          name: 'SOUTH'
        }]; // asset criticality

        this.assCriticalList = [{
          id: '01',
          name: '01 Asset Failure Low Impact'
        }, {
          id: '02',
          name: '02'
        }, {
          id: '03',
          name: '03'
        }, {
          id: '04',
          name: '04'
        }, {
          id: '05',
          name: '05'
        }, {
          id: '06',
          name: '06'
        }, {
          id: '07',
          name: '07'
        }, {
          id: '08',
          name: '08'
        }, {
          id: '09',
          name: '09 Highest'
        }]; // asset owning department

        this.assOwningDepartList = [{
          id: 'CBD',
          name: 'CUSTOMER BILLING SERVICES'
        }, {
          id: 'DISTRIBUTION',
          name: 'DISTRIBUTION'
        }, {
          id: 'ES-D',
          name: 'ENGINEERING SERVICES – DISTRIBUTION'
        }, {
          id: 'FLEET',
          name: 'FLEET'
        }, {
          id: 'LAND',
          name: 'LAND'
        }, {
          id: 'NRW',
          name: 'NRW'
        }, {
          id: 'PD-N',
          name: 'PRODUCTION NORTHERN'
        }, {
          id: 'PD-S',
          name: 'PRODUCTION SOUTHERN'
        }, {
          id: 'SCADA',
          name: 'SCADA'
        }, {
          id: 'WQ',
          name: 'WATER QUALITY'
        }]; // main operation

        this.mainOperationList = [{
          id: 'CUSTOMER-BILLING-SERVICES',
          name: 'CUSTOMER BILLING SERVICES'
        }, {
          id: 'DISTRIBUTION',
          name: 'DISTRIBUTION'
        }, {
          id: 'GENERAL-ADMIN',
          name: 'GENERAL ADMIN'
        }, {
          id: 'PRODUCTION',
          name: 'PRODUCTION'
        }, {
          id: 'SCADA',
          name: 'SCADA'
        }, {
          id: 'WATER-QUALITY',
          name: 'WATER QUALITY'
        }, {
          id: 'FLEET',
          name: 'FLEET'
        }]; // condition rating

        this.conditionRatingList = [{
          id: 1,
          name: 'Very Good'
        }, {
          id: 2,
          name: 'Good'
        }, {
          id: 3,
          name: 'Average'
        }, {
          id: 4,
          name: 'Poor'
        }, {
          id: 5,
          name: 'Replace'
        }]; // warranty

        this.warrantyList = [{
          id: 'Available',
          name: 'Yes'
        }, {
          id: 'Not-Available',
          name: 'No'
        }]; // search region

        this.ports = [{
          id: 1,
          name: 'Tokai'
        }, {
          id: 2,
          name: 'Vladivostok'
        }, {
          id: 3,
          name: 'Navlakhi'
        }]; // operation list

        this.operationList = [{
          id: 'NRW-DISTRICT METERING ZONE',
          name: 'NRW-DISTRICT METERING ZONE'
        }, {
          id: 'NRW-TRANSMISSION NETWORK',
          name: 'NRW-TRANSMISSION NETWORK'
        }, {
          id: 'NRW-WATER BALANCING AREA',
          name: 'NRW-WATER BALANCING AREA'
        }, {
          id: 'PUMP HOUSE',
          name: 'PUMP HOUSE'
        }, {
          id: 'RESERVOIR',
          name: 'RESERVOIR'
        }, {
          id: 'VALVE-DISTRIBUTION MAIN',
          name: 'VALVE-DISTRIBUTION MAIN'
        }, {
          id: 'VALVE-TRUNK MAIN',
          name: 'VALVE-TRUNK MAIN'
        }, {
          id: 'WATER TREATMENT PLANT',
          name: 'WATER TREATMENT PLANT'
        }, {
          id: 'WQ-ONLINE ANALYZER',
          name: 'WQ-ONLINE ANALYZER'
        }, {
          id: 'WQ-RIVER MONITORING STATION',
          name: 'WQ-RIVER MONITORING STATION'
        }, {
          id: 'WQ-SAMPLING STATION',
          name: 'WQ-SAMPLING STATION'
        }, {
          id: 'WQ-LABORATORY SERVICES',
          name: 'WQ-LABORATORY SERVICES'
        }]; // asset // component

        this.assetOrCompList = [{
          id: 'Asset',
          name: 'Asset'
        }, {
          id: 'Component',
          name: 'Component'
        }]; //asset Or Component

        this.assetOrComponent = '';
        this.validation_messages = [];
        this.assetLocationData = [];
        this.plannerData = [];
        this.maintenanceManagerData = []; // console.log("parentLocaDiv = ", this.parentLocaDiv)

        this.firstFormGroup = this.formBuilder.group({
          asset_primary_category: [""],
          asset_identity: [""],
          sub_category_1: [""],
          sub_category_2: [""],
          model_number: [""],
          bo: [""]
        });
        this.secondFormGroup = this.formBuilder.group({
          asset_or_component_type: [""],
          asset_class_asset_category: [""],
          handed_over_asset_or_procured: [""]
        });
        this.thirdFormGroup = this.formBuilder.group({
          asset_owning_department: [""],
          main_operation: [""],
          region: [""],
          operation: [""],
          parent_location: [""],
          new_parent_location: [""]
        });
        this.fourthFormGroup = this.formBuilder.group({
          location_description: [""],
          building: [""],
          address_line_1: [""],
          address_line_2: [""],
          address_line_3: [""],
          city: [""],
          state: [""],
          postal_code: [""],
          country: [""],
          tag_number: [""],
          service_area: [""],
          location_main_contact: [""],
          location_asset_maintenance_manager: [""],
          maintenance_planner: [""],
          gis_esri_id: [""],
          latitude: [""],
          longitude: [""],
          asset_criticality: [""],
          cost_center: [""]
        });
        this.fifthFormGroup = this.formBuilder.group({
          size_capacity_1: [""],
          size_capacity_1_unit_measurement: [""],
          size_capacity_2: [""],
          size_capacity_2_unit_measurement: [""],
          size_capacity_3: [""],
          size_capacity_3_unit_measurement: [""],
          detailed_description: [""],
          serial_number: [""],
          asset_tag_number: [""],
          purchase_date_installed_handed_over_date: [""],
          condition_rating: [""],
          status: [""],
          maintenance_specification: [""],
          measurement_type: [""],
          warranty: [""],
          actual_warranty_period: [""],
          warranty_vendor_name: [""]
        });
        this.sixthFormGroup = this.formBuilder.group({
          bottom_water_level: [""],
          brand: [""],
          capacity_size: [""],
          closing_torque: [""],
          communication_protocol: [""],
          coverage_range: [""],
          dimention: [""],
          environmental_performance: [""],
          flow_rate: [""],
          frequency: [""],
          horse_power: [""],
          hysteresis: [""],
          infrastructure_status: [""],
          infrastructure_status_reason: [""],
          inlet_diameter: [""],
          installation: [""],
          insulation: [""],
          legal_name: [""],
          manufacturer: [""],
          manufacturer_year: [""],
          manufacture_part_number: [""],
          material_type: [""],
          model: [""],
          motor_current: [""],
          no_of_channel: [""],
          no_of_phases: [""],
          no_of_stage: [""],
          opening_torque: [""],
          outlet_diameter: [""],
          power_supply_type: [""],
          pump_head: [""],
          revolutions_per_minute: [""],
          source_from: [""],
          staging_height: [""],
          supply_location: [""],
          temperature: [""],
          top_water_level: [""],
          type: [""],
          valve_diameter: [""],
          valve_pressure_rating: [""],
          vehicle_chasis_number: [""],
          vehicle_engine_capacity: [""],
          vehicle_engine_number: [""],
          vehicle_insurance_vendor: [""],
          vehicle_model: [""],
          vehicle_insurance_auto_windscreen_insured: [""],
          vehicle_insurance_cover_note_number: [""],
          vehicle_insurance_date_period_from: [""],
          vehicle_insurance_date_period_to: [""],
          vehicle_insurance_no_claim_discount: [""],
          vehicle_insurance_policy_type: [""],
          vehicle_insurance_sum_insured: [""],
          vehicle_insurance_total_premium: [""],
          vehicle_puspakom_date_inspection: [""],
          vehicle_owner_status: [""],
          vehicle_register_date: [""],
          vehicle_roadtax_rate: [""],
          vehicle_puspakom_expired_date: [""],
          vehicle_spad_permit_date_period_to: [""],
          vehicle_roadtax_renew_date: [""],
          vehicle_roadtax_expired_date: [""],
          vehicle_spad_no_license_operator: [""],
          vehicle_spad_permit_date_period_from: [""],
          vehicle_seating_capacity: [""],
          vehicle_registration_owner: [""],
          voltage: [""],
          status: ["IC"]
        }); /// get data form asset reg list

        this.route.queryParams.subscribe(function (params) {
          if (_this.router.getCurrentNavigation().extras.state) {
            _this.process = 'view';

            var assetregistration = _this.router.getCurrentNavigation().extras.state.assetregistration;

            _this.firstFormGroup.patchValue(Object.assign({}, assetregistration));

            _this.secondFormGroup.patchValue(Object.assign({}, assetregistration));

            _this.thirdFormGroup.patchValue(Object.assign({}, assetregistration));

            _this.fourthFormGroup.patchValue(Object.assign({}, assetregistration));

            _this.fifthFormGroup.patchValue(Object.assign({}, assetregistration));

            _this.sixthFormGroup.patchValue(Object.assign({}, assetregistration));
          }
        });
      }

      _createClass(AssetRegistrationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getRegion();
          this.getState();
          this.getOrganisations();
          this.getAssetType();
          this.getAssetGroup();
          this.getAttributePredefine();
          this.getMaintenanceManager();
          this.getPlanner();
          this.getAssetLocationSync();
        }
      }, {
        key: "removeDuplicates",
        value: function removeDuplicates(originalArray, prop) {
          console;
          var newArray = [];
          var lookupObject = [];

          for (var i in originalArray) {
            lookupObject[originalArray[i][prop]] = originalArray[i];
            console.log(i, " qqqqq= ", originalArray[i]);
          }

          for (i in lookupObject) {
            this.assetLocationData.push(lookupObject[i]);
          }

          console.log("uniqueArray is: " + this.assetLocationData); // return this.assetLocationData;
        }
      }, {
        key: "getAssetLocationSync",
        value: function getAssetLocationSync() {
          var _this2 = this;

          console.log("iiiiiiiiii");
          this.assetLocatioSyncService.get_asset_location().subscribe(function (res) {
            console.log("assetLocatioSyncService = ", res); // let assetLocationarr = res
            // this.assetLocationData.push(res)

            _this2.assetLocationData = res; // var newArray = [];
            // var lookupObject = {};
            // for (var i in assetLocationarr) {
            //   console.log("i = ", i)
            //   // lookupObject[assetLocationarr[i][prop]] = assetLocationarr[i];
            //   // if(){
            //   // }
            // }
            // this.assetLocationData = this.removeDuplicates(assetLocationarr, "node_id");

            console.log("uniqueArray is: " + _this2.assetLocationData);
          }, function (err) {
            console.error("err", err);
          }, function () {
            console.log("Http request completed");
          });
        }
      }, {
        key: "getPlanner",
        value: function getPlanner() {
          var _this3 = this;

          this.plannerService.get().subscribe(function (res) {
            // console.log("planner = ", res)
            if (res) _this3.plannerData = res;
          }, function (err) {
            console.error("err", err);
          }, function () {
            console.log("Http request completed");
          });
        }
      }, {
        key: "getMaintenanceManager",
        value: function getMaintenanceManager() {
          var _this4 = this;

          this.maintenanceManagerService.get().subscribe(function (res) {
            // console.log("regions = ", res)
            if (res) _this4.maintenanceManagerData = res;
          }, function (err) {
            console.error("err", err);
          }, function () {
            console.log("Http request completed");
          });
        }
      }, {
        key: "getAttributePredefine",
        value: function getAttributePredefine() {
          var _this5 = this;

          this.assetAttributePredefineService.get().subscribe(function (res) {
            // console.log("assetAttPredefine = ", res)
            res.forEach(function (element) {
              // console.log("assetAttPredefine element = ", element)
              // console.log("assetAttPredefine attribute_field_name = ", element.attribute_field_name)
              if (element.attribute_field_name == "manufacturer") {
                _this5.assetAttPredefineMans.push(element); // manufacturer
                // console.log("assetAttPredefineMans = ", this.assetAttPredefineMans)

              }

              if (element.attribute_field_name == "vehicle_insurance_vendor") {
                _this5.assetAttPredefinePreInsVens.push(element); // vehicle_insurance_vendor

              }

              if (element.attribute_field_name == "vehicle_insurance_policy_type") {
                _this5.assetAttPredefineInsPols.push(element); // vehicle_insurance_policy_type

              }

              if (element.attribute_field_name == "vehicle_owner_status") {
                _this5.assetAttPredefineOwnStas.push(element); //vehicle_owner_status

              }

              if (element.attribute_field_name == "vehicle_registration_owner") {
                _this5.assetAttPredefineRegOwns.push(element); // vehicle_registration_owner

              }
            });
          }, function (err) {
            console.error("err", err);
          }, function () {
            console.log("Http request completed");
          });
        }
      }, {
        key: "getRegion",
        value: function getRegion() {
          var _this6 = this;

          this.regionsService.get().subscribe(function (res) {
            // console.log("regions = ", res)
            if (res) _this6.regions = res;
          }, function (err) {
            console.error("err", err);
          }, function () {
            console.log("Http request completed");
          });
        }
      }, {
        key: "getState",
        value: function getState() {
          var _this7 = this;

          this.statesService.get().subscribe(function (res) {
            // console.log("states = ", res)
            if (res) _this7.states = res;
          }, function (err) {
            console.error("err", err);
          }, function () {
            console.log("Http request completed");
          });
        }
      }, {
        key: "getOrganisations",
        value: function getOrganisations() {
          var _this8 = this;

          this.organisationsService.get().subscribe(function (res) {
            if (res) _this8.organisations = res;
          }, function (err) {
            console.error("err", err);
          }, function () {
            console.log("Http request completed");
          });
        }
      }, {
        key: "getAssetType",
        value: function getAssetType() {
          var _this9 = this;

          this.assetTypesService.get().subscribe(function (res) {
            if (res) {
              // console.log('this.primarycategories = ', res)
              _this9.primarycategories = res; // this.primarycategories = res.filter(function (data) {
              //   if (data.category.toString().toLowerCase().indexOf("at") !== -1)
              //     return true;
              //   return false;
              // });
              // console.log('this.primarycategories = ', this.primarycategories)

              _this9.typeassets = res; // .filter(function (data) {
              //   if (data.category.toString().toLowerCase().indexOf("ac") !== -1)
              //     return true;
              //   return false;
              // });

              _this9.categories = res; // .filter(function (data) {
              //   if (data.category.toString().toLowerCase().indexOf("ag") !== -1)
              //     return true;
              //   return false;
              // });
            }
          }, function (err) {
            console.error("err", err);
          }, function () {
            console.log("Http request completed");
          });
        }
      }, {
        key: "getAssetGroup",
        value: function getAssetGroup() {
          var _this10 = this;

          this.assetGroupsService.get().subscribe(function (res) {
            if (res) {
              _this10.identities = res.filter(function (data) {
                if (data.category.toString().toLowerCase().indexOf("ai") !== -1) return true;
                return false;
              });
              _this10.groupsubcategory1s = res.filter(function (data) {
                if (data.category.toString().toLowerCase().indexOf("s1") !== -1) return true;
                return false;
              });
              _this10.groupsubcategory2s = res.filter(function (data) {
                if (data.category.toString().toLowerCase().indexOf("s2") !== -1) return true;
                return false;
              });
            }
          }, function (err) {
            console.error("err", err);
          }, function () {
            console.log("Http request completed");
          });
        }
      }, {
        key: "register",
        value: function register() {
          var _this11 = this;

          var postAssets = Object.assign({}, this.firstFormGroup.value, this.secondFormGroup.value, this.thirdFormGroup.value, this.fourthFormGroup.value, this.fifthFormGroup.value, this.sixthFormGroup.value); // console.log('postAssets = ', postAssets);
          // this.assetsService.post(postAssets).subscribe( 

          this.assetRegistrationsService.post(postAssets).subscribe(function (res) {
            if (res) {
              // console.log("register_res = ", res);
              _this11.presentAlert("Success", "Your asset successfully registered into the system.");
            } else {
              console.log('eweqqweeq');
            }
          }, function (err) {
            console.error("register_rerr", err); // this.validation_messages = err.error;

            _this11.presentAlert("Error", "There are error occured on your form. Please check your form again.");
          }, function () {
            console.log("Http request completed");
          });
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(header, message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this12 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: header,
                      message: message,
                      buttons: [{
                        text: "OK",
                        handler: function handler() {
                          if (header == "Success") _this12.homePage("/technical/tabs/tab1");
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
        key: "homePage",
        value: function homePage(path) {
          this.router.navigate([path]);
        }
      }, {
        key: "clickBack",
        value: function clickBack() {
          this.router.navigate(["/technical/asset-registration-list"]);
        }
      }, {
        key: "openNotification",
        value: function openNotification() {
          this.menu.enable(true, "menuNotification");
          this.menu.open("menuNotification");
        }
      }, {
        key: "onChangeParent",
        value: function onChangeParent(event) {
          if (event == 0) {
            this.parentLocaDiv = 0;
          } else {
            this.parentLocaDiv = 1;
          }
        }
      }, {
        key: "onChangeAssLoc",
        value: function onChangeAssLoc(event) {
          if (event == 0) {
            this.assetLocDiv = 0;
          } else {
            this.assetLocDiv = 1;
          }
        }
      }, {
        key: "changeSegment",
        value: function changeSegment(segment) {
          this.segmentModal = segment;
        }
      }, {
        key: "portChange2",
        value: function portChange2(event) {}
      }, {
        key: "portChange",
        value: function portChange(event) {
          console.log('port:', event.value);
        }
      }, {
        key: "onChangeLocAssMaiMan",
        value: function onChangeLocAssMaiMan(event) {
          console.log('port:', event.value);
        } // onChangeLocAssMaiMan(event: {
        //   // console.log(event);
        //   // if(value.length > 3)
        //   component: IonicSelectableComponent,
        //   value: any
        //   // }
        // }) { }

      }, {
        key: "onChangeAssPrimaryCat",
        value: function onChangeAssPrimaryCat(event) {
          var _this13 = this;

          console.log('port:', event.value.asset_type_code);
          console.log("event = ", event);
          var field = "asset_type_id=" + event.value.asset_type_description;
          this.primarycategories.forEach(function (element) {
            if (element.asset_type_code == event.value.asset_type_code) {
              console.log("element = ---", element);
              _this13.assetAttrData = element.asset_bussiness_object;
              _this13.assetCategoryData = element.asset_category;

              if (element.asset_category == 'W1-TrackedGeneralComponent' || element.asset_category == 'W1-IOSvcGeneralComponent') {
                _this13.assetOrComponent = 'Component';
              } else {
                // W1-IOSvcGeneralComponent , W1-TrackedGeneralComponent
                _this13.assetOrComponent = 'Asset';
              }
            }
          });
          this.assetAttributeColumnService.filter(field).subscribe(function (res) {
            if (res) {
              _this13.assetAttrColumn = res[0]; // console.log(" this.assetAttrColumn = ", this.assetAttrColumn);
            }
          }, function () {});
        }
      }]);

      return AssetRegistrationPage;
    }();

    AssetRegistrationPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
      }, {
        type: src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_5__["AssetsService"]
      }, {
        type: src_app_shared_services_asset_groups_asset_groups_service__WEBPACK_IMPORTED_MODULE_6__["AssetGroupsService"]
      }, {
        type: src_app_shared_services_asset_types_asset_types_service__WEBPACK_IMPORTED_MODULE_7__["AssetTypesService"]
      }, {
        type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
      }, {
        type: src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_9__["NotificationsService"]
      }, {
        type: src_app_shared_services_organisations_organisations_service__WEBPACK_IMPORTED_MODULE_10__["OrganisationsService"]
      }, {
        type: src_app_shared_services_regions_regions_service__WEBPACK_IMPORTED_MODULE_11__["RegionsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_shared_services_asset_registrations_asset_registrations_service__WEBPACK_IMPORTED_MODULE_12__["AssetRegistrationsService"]
      }, {
        type: src_app_shared_services_state_states_service__WEBPACK_IMPORTED_MODULE_13__["StatesService"]
      }, {
        type: src_app_shared_services_asset_attribute_column_asset_attribute_column_service__WEBPACK_IMPORTED_MODULE_14__["AssetAttributeColumnService"]
      }, {
        type: src_app_shared_services_asset_attribute_predefine_asset_attribute_prodefine_service__WEBPACK_IMPORTED_MODULE_15__["AssetAttributePredefineService"]
      }, {
        type: src_app_shared_services_asset_attribute_reference_asset_attribute_reference_service__WEBPACK_IMPORTED_MODULE_16__["AssetAttributeReferenceService"]
      }, {
        type: src_app_shared_services_maintenance_manager_maintenance_manager_service__WEBPACK_IMPORTED_MODULE_17__["MaintenanceManagerService"]
      }, {
        type: src_app_shared_services_planner_planner_service__WEBPACK_IMPORTED_MODULE_18__["PlannerService"]
      }, {
        type: src_app_shared_services_asset_location_sync_asset_location_sync_service__WEBPACK_IMPORTED_MODULE_19__["AssetLocatioSyncService"]
      }];
    };

    AssetRegistrationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-asset-registration",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./asset-registration.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/asset-registration/asset-registration.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./asset-registration.page.scss */
      "./src/app/pages/technical/asset-registration/asset-registration.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_5__["AssetsService"], src_app_shared_services_asset_groups_asset_groups_service__WEBPACK_IMPORTED_MODULE_6__["AssetGroupsService"], src_app_shared_services_asset_types_asset_types_service__WEBPACK_IMPORTED_MODULE_7__["AssetTypesService"], src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_9__["NotificationsService"], src_app_shared_services_organisations_organisations_service__WEBPACK_IMPORTED_MODULE_10__["OrganisationsService"], src_app_shared_services_regions_regions_service__WEBPACK_IMPORTED_MODULE_11__["RegionsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_shared_services_asset_registrations_asset_registrations_service__WEBPACK_IMPORTED_MODULE_12__["AssetRegistrationsService"], src_app_shared_services_state_states_service__WEBPACK_IMPORTED_MODULE_13__["StatesService"], src_app_shared_services_asset_attribute_column_asset_attribute_column_service__WEBPACK_IMPORTED_MODULE_14__["AssetAttributeColumnService"], src_app_shared_services_asset_attribute_predefine_asset_attribute_prodefine_service__WEBPACK_IMPORTED_MODULE_15__["AssetAttributePredefineService"], src_app_shared_services_asset_attribute_reference_asset_attribute_reference_service__WEBPACK_IMPORTED_MODULE_16__["AssetAttributeReferenceService"], src_app_shared_services_maintenance_manager_maintenance_manager_service__WEBPACK_IMPORTED_MODULE_17__["MaintenanceManagerService"], src_app_shared_services_planner_planner_service__WEBPACK_IMPORTED_MODULE_18__["PlannerService"], src_app_shared_services_asset_location_sync_asset_location_sync_service__WEBPACK_IMPORTED_MODULE_19__["AssetLocatioSyncService"]])], AssetRegistrationPage);
    /***/
  },

  /***/
  "./src/app/shared/services/asset-attribute-column/asset-attribute-column.service.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/shared/services/asset-attribute-column/asset-attribute-column.service.ts ***!
    \******************************************************************************************/

  /*! exports provided: AssetAttributeColumnService */

  /***/
  function srcAppSharedServicesAssetAttributeColumnAssetAttributeColumnServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetAttributeColumnService", function () {
      return AssetAttributeColumnService;
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

    var AssetAttributeColumnService =
    /*#__PURE__*/
    function () {
      function AssetAttributeColumnService(http) {
        _classCallCheck(this, AssetAttributeColumnService);

        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/asset-attribute-column/"; // Data

        this.amodels = [];
      }

      _createClass(AssetAttributeColumnService, [{
        key: "post",
        value: function post(body) {
          return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributeColumnModel", res);
          }));
        }
      }, {
        key: "get",
        value: function get() {
          var _this14 = this;

          return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributeColumnModel", res);
            _this14.amodels = res;
          }));
        }
      }, {
        key: "getOne",
        value: function getOne(id) {
          var _this15 = this;

          var urlID = this.url + id + "/";
          return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributeColumnModel", res);
            _this15.amodel = res;
          }));
        }
      }, {
        key: "update",
        value: function update(body) {
          return this.http.patch(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributeColumnModel", res);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributeColumnModel", res);
          }));
        }
      }, {
        key: "filter",
        value: function filter(field) {
          var urlFilter = this.url + "?" + field;
          return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributeColumnModel", res);
          }));
        }
      }, {
        key: "patch_asset",
        value: function patch_asset(body) {
          var urlPatchAsset = this.url + "patch_asset/";
          return this.http.post(urlPatchAsset, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributeColumnModel", res);
          }));
        }
      }]);

      return AssetAttributeColumnService;
    }();

    AssetAttributeColumnService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    AssetAttributeColumnService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], AssetAttributeColumnService);
    /***/
  },

  /***/
  "./src/app/shared/services/asset-attribute-predefine/asset-attribute-prodefine.service.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/shared/services/asset-attribute-predefine/asset-attribute-prodefine.service.ts ***!
    \************************************************************************************************/

  /*! exports provided: AssetAttributePredefineService */

  /***/
  function srcAppSharedServicesAssetAttributePredefineAssetAttributeProdefineServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetAttributePredefineService", function () {
      return AssetAttributePredefineService;
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

    var AssetAttributePredefineService =
    /*#__PURE__*/
    function () {
      function AssetAttributePredefineService(http) {
        _classCallCheck(this, AssetAttributePredefineService);

        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/asset-attribute-predefine/"; // Data

        this.atmodels = [];
      }

      _createClass(AssetAttributePredefineService, [{
        key: "post",
        value: function post(body) {
          return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributePredefineModel", res);
          }));
        }
      }, {
        key: "get",
        value: function get() {
          var _this16 = this;

          return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributePredefineModel", res);
            _this16.atmodels = res;
          }));
        }
      }, {
        key: "getOne",
        value: function getOne(id) {
          var _this17 = this;

          var urlID = this.url + id + "/";
          return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributePredefineModel", res);
            _this17.atmodel = res;
          }));
        }
      }, {
        key: "update",
        value: function update(body) {
          return this.http.patch(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributePredefineModel", res);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributePredefineModel", res);
          }));
        }
      }, {
        key: "filter",
        value: function filter(field) {
          var urlFilter = this.url + "?" + field;
          return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributePredefineModel", res);
          }));
        }
      }]);

      return AssetAttributePredefineService;
    }();

    AssetAttributePredefineService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    AssetAttributePredefineService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], AssetAttributePredefineService);
    /***/
  },

  /***/
  "./src/app/shared/services/asset-attribute-reference/asset-attribute-reference.service.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/shared/services/asset-attribute-reference/asset-attribute-reference.service.ts ***!
    \************************************************************************************************/

  /*! exports provided: AssetAttributeReferenceService */

  /***/
  function srcAppSharedServicesAssetAttributeReferenceAssetAttributeReferenceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetAttributeReferenceService", function () {
      return AssetAttributeReferenceService;
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

    var AssetAttributeReferenceService =
    /*#__PURE__*/
    function () {
      function AssetAttributeReferenceService(http) {
        _classCallCheck(this, AssetAttributeReferenceService);

        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/asset-attribute-reference/"; // Data

        this.atmodels = [];
      }

      _createClass(AssetAttributeReferenceService, [{
        key: "post",
        value: function post(body) {
          return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributeReferenceModel", res);
          }));
        }
      }, {
        key: "get",
        value: function get() {
          var _this18 = this;

          return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributeReferenceModel", res);
            _this18.atmodels = res;
          }));
        }
      }, {
        key: "getOne",
        value: function getOne(id) {
          var _this19 = this;

          var urlID = this.url + id + "/";
          return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributeReferenceModel", res);
            _this19.atmodel = res;
          }));
        }
      }, {
        key: "update",
        value: function update(body) {
          return this.http.patch(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributeReferenceModel", res);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributeReferenceModel", res);
          }));
        }
      }, {
        key: "filter",
        value: function filter(field) {
          var urlFilter = this.url + "?" + field;
          return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetAttributeReferenceModel", res);
          }));
        }
      }]);

      return AssetAttributeReferenceService;
    }();

    AssetAttributeReferenceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    AssetAttributeReferenceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], AssetAttributeReferenceService);
    /***/
  },

  /***/
  "./src/app/shared/services/asset-groups/asset-groups.service.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/services/asset-groups/asset-groups.service.ts ***!
    \**********************************************************************/

  /*! exports provided: AssetGroupsService */

  /***/
  function srcAppSharedServicesAssetGroupsAssetGroupsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetGroupsService", function () {
      return AssetGroupsService;
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

    var AssetGroupsService =
    /*#__PURE__*/
    function () {
      function AssetGroupsService(http) {
        _classCallCheck(this, AssetGroupsService);

        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/asset-groups/"; // Data

        this.agmodels = [];
      }

      _createClass(AssetGroupsService, [{
        key: "post",
        value: function post(body) {
          return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetGroupsModel", res);
          }));
        }
      }, {
        key: "get",
        value: function get() {
          var _this20 = this;

          return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetGroupsModel", res);
            _this20.agmodels = res;
          }));
        }
      }, {
        key: "getOne",
        value: function getOne(id) {
          var _this21 = this;

          var urlID = this.url + id + "/";
          return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetGroupsModel", res);
            _this21.agmodel = res;
          }));
        }
      }, {
        key: "update",
        value: function update(body) {
          return this.http.patch(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetGroupsModel", res);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetGroupsModel", res);
          }));
        }
      }, {
        key: "filter",
        value: function filter(field) {
          var urlFilter = this.url + "?" + field;
          return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("AssetGroupsModel", res);
          }));
        }
      }]);

      return AssetGroupsService;
    }();

    AssetGroupsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    AssetGroupsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], AssetGroupsService);
    /***/
  },

  /***/
  "./src/app/shared/services/maintenance-manager/maintenance-manager.service.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/shared/services/maintenance-manager/maintenance-manager.service.ts ***!
    \************************************************************************************/

  /*! exports provided: MaintenanceManagerService */

  /***/
  function srcAppSharedServicesMaintenanceManagerMaintenanceManagerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaintenanceManagerService", function () {
      return MaintenanceManagerService;
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

    var MaintenanceManagerService =
    /*#__PURE__*/
    function () {
      function MaintenanceManagerService(http) {
        _classCallCheck(this, MaintenanceManagerService);

        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/maintenance-manager/"; // Data

        this.rmodels = [];
      }

      _createClass(MaintenanceManagerService, [{
        key: "post",
        value: function post(body) {
          return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("MaintenanceManagerModel", res);
          }));
        }
      }, {
        key: "get",
        value: function get() {
          var _this22 = this;

          return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("MaintenanceManagerModel", res);
            _this22.rmodels = res;
          }));
        }
      }, {
        key: "getOne",
        value: function getOne(id) {
          var _this23 = this;

          var urlID = this.url + id + "/";
          return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("MaintenanceManagerModel", res);
            _this23.rmodel = res;
          }));
        }
      }, {
        key: "update",
        value: function update(body) {
          return this.http.patch(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("MaintenanceManagerModel", res);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("MaintenanceManagerModel", res);
          }));
        }
      }, {
        key: "filter",
        value: function filter(field) {
          var urlFilter = this.url + "?" + field;
          return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("MaintenanceManagerModel", res);
          }));
        }
      }]);

      return MaintenanceManagerService;
    }();

    MaintenanceManagerService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    MaintenanceManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], MaintenanceManagerService);
    /***/
  },

  /***/
  "./src/app/shared/services/organisations/organisations.service.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shared/services/organisations/organisations.service.ts ***!
    \************************************************************************/

  /*! exports provided: OrganisationsService */

  /***/
  function srcAppSharedServicesOrganisationsOrganisationsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrganisationsService", function () {
      return OrganisationsService;
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

    var OrganisationsService =
    /*#__PURE__*/
    function () {
      function OrganisationsService(http) {
        _classCallCheck(this, OrganisationsService);

        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/organisations/"; // Data

        this.rmodels = [];
      }

      _createClass(OrganisationsService, [{
        key: "post",
        value: function post(body) {
          return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("OrganisationsModel", res);
          }));
        }
      }, {
        key: "get",
        value: function get() {
          var _this24 = this;

          return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("OrganisationsModel", res);
            _this24.rmodels = res;
          }));
        }
      }, {
        key: "getOne",
        value: function getOne(id) {
          var _this25 = this;

          var urlID = this.url + id + "/";
          return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("OrganisationsModel", res);
            _this25.rmodel = res;
          }));
        }
      }, {
        key: "update",
        value: function update(body) {
          return this.http.patch(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("OrganisationsModel", res);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("OrganisationsModel", res);
          }));
        }
      }, {
        key: "filter",
        value: function filter(field) {
          var urlFilter = this.url + "?" + field;
          return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("OrganisationsModel", res);
          }));
        }
      }]);

      return OrganisationsService;
    }();

    OrganisationsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    OrganisationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], OrganisationsService);
    /***/
  },

  /***/
  "./src/app/shared/services/regions/regions.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/services/regions/regions.service.ts ***!
    \************************************************************/

  /*! exports provided: RegionsService */

  /***/
  function srcAppSharedServicesRegionsRegionsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegionsService", function () {
      return RegionsService;
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

    var RegionsService =
    /*#__PURE__*/
    function () {
      function RegionsService(http) {
        _classCallCheck(this, RegionsService);

        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/regions/"; // Data

        this.mmodels = [];
      }

      _createClass(RegionsService, [{
        key: "post",
        value: function post(body) {
          return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("RegionsModel", res);
          }));
        }
      }, {
        key: "get",
        value: function get() {
          var _this26 = this;

          return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("RegionsModel", res);
            _this26.mmodels = res;
          }));
        }
      }, {
        key: "getOne",
        value: function getOne(id) {
          var _this27 = this;

          var urlID = this.url + id + "/";
          return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("RegionsModel", res);
            _this27.mmodel = res;
          }));
        }
      }, {
        key: "update",
        value: function update(body) {
          return this.http.patch(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("RegionsModel", res);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("RegionsModel", res);
          }));
        }
      }, {
        key: "filter",
        value: function filter(field) {
          var urlFilter = this.url + "?" + field;
          return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("RegionsModel", res);
          }));
        }
      }]);

      return RegionsService;
    }();

    RegionsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    RegionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], RegionsService);
    /***/
  },

  /***/
  "./src/app/shared/services/state/states.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/services/state/states.service.ts ***!
    \*********************************************************/

  /*! exports provided: StatesService */

  /***/
  function srcAppSharedServicesStateStatesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatesService", function () {
      return StatesService;
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

    var StatesService =
    /*#__PURE__*/
    function () {
      function StatesService(http) {
        _classCallCheck(this, StatesService);

        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/states/"; // Data

        this.mmodels = [];
      }

      _createClass(StatesService, [{
        key: "post",
        value: function post(body) {
          return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("StatesModel", res);
          }));
        }
      }, {
        key: "get",
        value: function get() {
          var _this28 = this;

          return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("StatesModel", res);
            _this28.mmodels = res;
          }));
        }
      }, {
        key: "getOne",
        value: function getOne(id) {
          var _this29 = this;

          var urlID = this.url + id + "/";
          return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("StatesModel", res);
            _this29.mmodel = res;
          }));
        }
      }, {
        key: "update",
        value: function update(body) {
          return this.http.patch(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("StatesModel", res);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("StatesModel", res);
          }));
        }
      }, {
        key: "filter",
        value: function filter(field) {
          var urlFilter = this.url + "?" + field;
          return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("StatesModel", res);
          }));
        }
      }]);

      return StatesService;
    }();

    StatesService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    StatesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], StatesService);
    /***/
  }
}]);
//# sourceMappingURL=asset-registration-asset-registration-module-es5.js.map