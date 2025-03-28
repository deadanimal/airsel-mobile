(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/index-3476b023.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-3476b023.js ***!
  \*************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
const sanitizeDOMString = (untrustedString) => {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        const documentFragment = document.createDocumentFragment();
        const workingDiv = document.createElement('div');
        documentFragment.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(blockedTag => {
            const getElementsToRemove = documentFragment.querySelectorAll(blockedTag);
            for (let elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                const element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                const childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (let childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        const dfChildren = getElementChildren(documentFragment);
        /* tslint:disable-next-line */
        for (let childIndex = 0; childIndex < dfChildren.length; childIndex++) {
            sanitizeElement(dfChildren[childIndex]);
        }
        // Append document fragment to div
        const fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment);
        // First child is always the div we did our work in
        const getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
const sanitizeElement = (element) => {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (let i = element.attributes.length - 1; i >= 0; i--) {
        const attribute = element.attributes.item(i);
        const attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        const attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    const childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (let i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
const getElementChildren = (el) => {
    return (el.children != null) ? el.children : el.childNodes;
};
const allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
const blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/index-3528f139.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-3528f139.js ***!
  \*************************************************************/
/*! exports provided: d, g, l, s, t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deepReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getIonPageElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return setPageHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return transition; });
/* harmony import */ var _core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-80bde1aa.js */ "./node_modules/@ionic/core/dist/esm/core-80bde1aa.js");
/* harmony import */ var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants-3c3e1099.js */ "./node_modules/@ionic/core/dist/esm/constants-3c3e1099.js");



const iosTransitionAnimation = () => __webpack_require__.e(/*! import() | ios-transition-1850e475-js */ "ios-transition-1850e475-js").then(__webpack_require__.bind(null, /*! ./ios.transition-1850e475.js */ "./node_modules/@ionic/core/dist/esm/ios.transition-1850e475.js"));
const mdTransitionAnimation = () => __webpack_require__.e(/*! import() | md-transition-083fcf52-js */ "md-transition-083fcf52-js").then(__webpack_require__.bind(null, /*! ./md.transition-083fcf52.js */ "./node_modules/@ionic/core/dist/esm/md.transition-083fcf52.js"));
const transition = (opts) => {
    return new Promise((resolve, reject) => {
        Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => {
            beforeTransition(opts);
            runTransition(opts).then(result => {
                if (result.animation) {
                    result.animation.destroy();
                }
                afterTransition(opts);
                resolve(result);
            }, error => {
                afterTransition(opts);
                reject(error);
            });
        });
    });
};
const beforeTransition = (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    setZIndex(enteringEl, leavingEl, opts.direction);
    if (opts.showGoBack) {
        enteringEl.classList.add('can-go-back');
    }
    else {
        enteringEl.classList.remove('can-go-back');
    }
    setPageHidden(enteringEl, false);
    if (leavingEl) {
        setPageHidden(leavingEl, false);
    }
};
const runTransition = async (opts) => {
    const animationBuilder = await getAnimationBuilder(opts);
    const ani = (animationBuilder)
        ? animation(animationBuilder, opts)
        : noAnimation(opts); // fast path for no animation
    return ani;
};
const afterTransition = (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    enteringEl.classList.remove('ion-page-invisible');
    if (leavingEl !== undefined) {
        leavingEl.classList.remove('ion-page-invisible');
    }
};
const getAnimationBuilder = async (opts) => {
    if (!opts.leavingEl || !opts.animated || opts.duration === 0) {
        return undefined;
    }
    if (opts.animationBuilder) {
        return opts.animationBuilder;
    }
    const getAnimation = (opts.mode === 'ios')
        ? (await iosTransitionAnimation()).iosTransitionAnimation
        : (await mdTransitionAnimation()).mdTransitionAnimation;
    return getAnimation;
};
const animation = async (animationBuilder, opts) => {
    await waitForReady(opts, true);
    const trans = animationBuilder(opts.baseEl, opts);
    fireWillEvents(opts.enteringEl, opts.leavingEl);
    const didComplete = await playTransition(trans, opts);
    if (opts.progressCallback) {
        opts.progressCallback(undefined);
    }
    if (didComplete) {
        fireDidEvents(opts.enteringEl, opts.leavingEl);
    }
    return {
        hasCompleted: didComplete,
        animation: trans
    };
};
const noAnimation = async (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    await waitForReady(opts, false);
    fireWillEvents(enteringEl, leavingEl);
    fireDidEvents(enteringEl, leavingEl);
    return {
        hasCompleted: true
    };
};
const waitForReady = async (opts, defaultDeep) => {
    const deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
    const promises = deep ? [
        deepReady(opts.enteringEl),
        deepReady(opts.leavingEl),
    ] : [
        shallowReady(opts.enteringEl),
        shallowReady(opts.leavingEl),
    ];
    await Promise.all(promises);
    await notifyViewReady(opts.viewIsReady, opts.enteringEl);
};
const notifyViewReady = async (viewIsReady, enteringEl) => {
    if (viewIsReady) {
        await viewIsReady(enteringEl);
    }
};
const playTransition = (trans, opts) => {
    const progressCallback = opts.progressCallback;
    const promise = new Promise(resolve => {
        trans.onFinish((currentStep) => resolve(currentStep === 1));
    });
    // cool, let's do this, start the transition
    if (progressCallback) {
        // this is a swipe to go back, just get the transition progress ready
        // kick off the swipe animation start
        trans.progressStart(true);
        progressCallback(trans);
    }
    else {
        // only the top level transition should actually start "play"
        // kick it off and let it play through
        // ******** DOM WRITE ****************
        trans.play();
    }
    // create a callback for when the animation is done
    return promise;
};
const fireWillEvents = (enteringEl, leavingEl) => {
    lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
    lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["L"]);
};
const fireDidEvents = (enteringEl, leavingEl) => {
    lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
    lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["c"]);
};
const lifecycle = (el, eventName) => {
    if (el) {
        const ev = new CustomEvent(eventName, {
            bubbles: false,
            cancelable: false,
        });
        el.dispatchEvent(ev);
    }
};
const shallowReady = (el) => {
    if (el && el.componentOnReady) {
        return el.componentOnReady();
    }
    return Promise.resolve();
};
const deepReady = async (el) => {
    const element = el;
    if (element) {
        if (element.componentOnReady != null) {
            const stencilEl = await element.componentOnReady();
            if (stencilEl != null) {
                return;
            }
        }
        await Promise.all(Array.from(element.children).map(deepReady));
    }
};
const setPageHidden = (el, hidden) => {
    if (hidden) {
        el.setAttribute('aria-hidden', 'true');
        el.classList.add('ion-page-hidden');
    }
    else {
        el.hidden = false;
        el.removeAttribute('aria-hidden');
        el.classList.remove('ion-page-hidden');
    }
};
const setZIndex = (enteringEl, leavingEl, direction) => {
    if (enteringEl !== undefined) {
        enteringEl.style.zIndex = (direction === 'back')
            ? '99'
            : '101';
    }
    if (leavingEl !== undefined) {
        leavingEl.style.zIndex = '100';
    }
};
const getIonPageElement = (element) => {
    if (element.classList.contains('ion-page')) {
        return element;
    }
    const ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
    if (ionPage) {
        return ionPage;
    }
    // idk, return the original element so at least something animates and we don't have a null pointer
    return element;
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-28520d80.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-28520d80.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
            return {
                r: 20,
                cx: 48,
                cy: 48,
                fill: 'none',
                viewBox: '24 24 48 48',
                transform: 'translate(0,0)',
                style: {}
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction);
        }
    }
    return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory-management/profile/profile.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory-management/profile/profile.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"homePage('/technical/tabs/tab1')\">\n        <ion-icon src=\"../../../../assets/icon/air-selangor-icon.svg\" style=\"font-size: 2rem\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title style=\"font-weight: bold\"> Profile </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"clickLogout()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"openNotification()\">\n        <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n        <ion-badge size=\"small\" color=\"danger\" style=\"position: absolute; right: -5px; top: 1px\">\n          <!-- {{ notificationService.totalnotificationbyuser }} -->\n          10\n        </ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-padding-top\">\n    <ion-row class=\"ion-justify-content-center ion-align-items-center\">\n      <ion-col size=\"5\">\n        <div class=\"ion-text-center\">\n          <ion-img src=\"assets/image/user-circle.png\"></ion-img>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-content>\n            <ion-list class=\"line-input\">\n              <ion-item>\n                <ion-label position=\"stacked\">Name</ion-label>\n                <ion-input type=\"text\" readonly value=\"Fairul Bin Omar\"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label position=\"stacked\">Role</ion-label>\n                <ion-input type=\"text\" readonly value=\"AIS Central Storekeeper\"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label position=\"stacked\">Location</ion-label>\n                <ion-input type=\"text\" readonly value=\"Shah Alam - Central Store\"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label position=\"stacked\">Designation</ion-label>\n                <ion-input type=\"text\" readonly value=\"Store Supervisor\"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label position=\"stacked\">Store Code</ion-label>\n                <ion-input type=\"text\" readonly value=\"All Stores\"></ion-input>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-keeper/list-item/list-item.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-keeper/list-item/list-item.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"air-selangor-toolbar\">\n    <ion-title class=\"ion-text-center\">List of Item</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n      <!--- Note that these columns can be defined in any order.\n            The actual rendered columns are set as a property on the row definition\" -->\n    \n      <!-- Position Column -->\n      <!-- <ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef> No. </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n      </ng-container> -->\n    \n      <!-- Item Column -->\n      <ng-container matColumnDef=\"item\">\n        <th mat-header-cell *matHeaderCellDef> Item </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.item}} </td>\n      </ng-container>\n    \n      <!-- Description Column -->\n      <ng-container matColumnDef=\"description\">\n        <th mat-header-cell *matHeaderCellDef> Description </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n      </ng-container>\n    \n      <!-- Quantity Column -->\n      <ng-container matColumnDef=\"quantity\">\n        <th mat-header-cell *matHeaderCellDef> Quantity </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.quantity}} </td>\n      </ng-container>\n    \n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </ion-card>\n\n  <div class=\"ion-text-center\">\n    <ion-button color=\"primary\" shape=\"round\" size=\"small\" (click)=\"closeList()\">Close</ion-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-supervisor/list-item/list-item.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-supervisor/list-item/list-item.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"air-selangor-toolbar\">\n    <ion-title class=\"ion-text-center\">List of Item</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n      <!--- Note that these columns can be defined in any order.\n            The actual rendered columns are set as a property on the row definition\" -->\n    \n      <!-- Position Column -->\n      <!-- <ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef> No. </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n      </ng-container> -->\n    \n      <!-- Item Column -->\n      <ng-container matColumnDef=\"item\">\n        <th mat-header-cell *matHeaderCellDef> Item </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.item}} </td>\n      </ng-container>\n    \n      <!-- Description Column -->\n      <ng-container matColumnDef=\"description\">\n        <th mat-header-cell *matHeaderCellDef> Description </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n      </ng-container>\n    \n      <!-- Quantity Column -->\n      <ng-container matColumnDef=\"quantity\">\n        <th mat-header-cell *matHeaderCellDef> Quantity </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.quantity}} </td>\n      </ng-container>\n    \n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </ion-card>\n\n  <div class=\"ion-text-center\">\n    <ion-button color=\"primary\" shape=\"round\" size=\"small\" (click)=\"closeList()\">Close</ion-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/approval-profile/approval-profile.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/approval-profile/approval-profile.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"closeModal('')\">\n        <ion-icon\n          src=\"../../../../assets/icon/air-selangor-icon.svg\"\n          style=\"font-size: 2rem\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title style=\"font-weight: bold\"> Submit for Approval </ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openNotification()\">\n        <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n        <ion-badge size=\"small\" color=\"danger\" style=\"position: absolute; right: -5px; top: 1px;\">\n          {{ notificationService.totalnotificationbyuser }}</ion-badge>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar\n    placeholder=\"Search approval profile\"\n    animated=\"true\"\n    (ionChange)=\"getItems($event)\"\n  ></ion-searchbar>\n\n  <ion-list>\n    <ion-item\n      *ngFor=\"let item of items\"\n      (click)=\"closeModal(item)\"\n    >\n      <p>{{ item.description }}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/asset-detail-list/asset-detail-list.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/asset-detail-list/asset-detail-list.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"homePage('/technical/tabs/tab1')\">\n        <ion-icon src=\"../../../../assets/icon/air-selangor-icon.svg\" style=\"font-size: 2rem\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title style=\"font-weight: bold\"> Asset Detail </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openNotification()\">\n        <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n        <ion-badge size=\"small\" color=\"danger\" style=\"position: absolute; right: -5px; top: 1px\">\n          {{ notificationService.totalnotificationbyuser }}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content-core\">\n  <div class=\"ion-padding\">\n    <h4 class=\"ion-text-center ion-padding\">Asset Details</h4>\n\n    <ion-card *ngFor=\"let assetregistration of assetregistrations\">\n      <ion-card-header>\n        <ion-fab horizontal=\"end\">\n          <ion-fab-button size=\"small\" color=\"primary\" (click)=\"clickEdit(assetregistration)\">\n            <ion-icon name=\"document-text\"></ion-icon>\n          </ion-fab-button>\n          <!-- <ion-fab-button\n            size=\"small\"\n            color=\"danger\"\n            (click)=\"clickRemove(i)\"\n          >\n            <ion-icon name=\"trash\"></ion-icon>\n          </ion-fab-button> -->\n        </ion-fab>\n        <ion-card-title>Badge No<br />{{ assetregistration.badge_no }}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p>Asset Id: {{ assetregistration.asset_id }}</p>\n        <p>Asset Type: {{ assetregistration.asset_type }}</p>\n        <p>Asset Location: {{ assetLocatioSyncdata }}</p>\n        <!-- <p>Asset Location: {{ assetregistration.location_description }}</p> -->\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/asset-registration-list/asset-registration-list.page.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/asset-registration-list/asset-registration-list.page.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"homePage('/technical/tabs/tab1')\">\n        <ion-icon src=\"../../../../assets/icon/air-selangor-icon.svg\" style=\"font-size: 2rem\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title style=\"font-weight: bold\"> Asset Registration </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openNotification()\">\n        <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n        <ion-badge size=\"small\" color=\"danger\" style=\"position: absolute; right: -5px; top: 1px\">\n          {{ notificationService.totalnotificationbyuser }}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content-core\">\n  <div class=\"ion-padding\">\n    <div class=\"ion-text-center\">\n      <ion-button color=\"primary\" (click)=\"clickNew()\">New Asset</ion-button>\n    </div>\n    <ion-card *ngFor=\"let assetregistration of assetregistrations; let i = index\">\n      <ion-card-header>\n        <ion-fab horizontal=\"end\">\n          <ion-fab-button size=\"small\" color=\"primary\" (click)=\"clickEdit(assetregistration)\">\n            <ion-icon name=\"eye\"></ion-icon>\n          </ion-fab-button>\n          <!-- <ion-fab-button\n            size=\"small\"\n            color=\"danger\"\n            (click)=\"clickRemove(i)\"\n          >\n            <ion-icon name=\"trash\"></ion-icon>\n          </ion-fab-button> -->\n        </ion-fab>\n        <ion-card-title>Asset ID <br />{{ assetregistration.asset_id }}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p>Badge Number: {{ assetregistration.badge_no }}</p>\n        <p>Description: {{ assetregistration.asset_primary_category }}</p>\n        <p>Submitted Date: {{ assetregistration.created_at | date:'mediumDate' }}</p>\n        <p>Status: CREATED</p>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/inventory-info/inventory-info.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/inventory-info/inventory-info.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding ion-text-center\">\n  <h3>Date : required by date</h3>\n\n  <ion-badge color=\"success\" size=\"large\" style=\"font-size: 20px; width: 80%;\">New</ion-badge><br/>\n  <ion-badge color=\"warning\" size=\"large\" style=\"color: white; font-size: 20px; width: 80%;\">In Progress</ion-badge><br/>\n  <ion-badge color=\"danger\" size=\"large\" style=\"font-size: 20px; width: 80%;\">Backlog</ion-badge>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/match/match.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/match/match.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"homePage('/technical/tabs/tab1')\">\n        <ion-icon\n          src=\"../../../../assets/icon/air-selangor-icon.svg\"\n          style=\"font-size: 2rem\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title style=\"font-weight: bold\"> Match </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openNotification()\">\n        <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n        <ion-badge\n          color=\"danger\"\n          style=\"position: absolute; right: -5px; top: 1px\"\n        ></ion-badge>\n        <!--{{ notificationService.totalnotificationbyuser }}-->\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content-core\">\n  <div class=\"ion-padding\">\n    <ion-list class=\"line-input\">\n      <small style=\"color: red\">* will return badge number value</small>\n      <ion-item>\n        <ion-label>2D Barcode </ion-label>\n        <ion-toggle [(ngModel)]=\"bBarcode\"></ion-toggle>\n      </ion-item>\n\n      <small style=\"color: red\">* will return hex code value</small>\n      <ion-item>\n        <ion-label>RFID </ion-label>\n        <ion-toggle [(ngModel)]=\"bRfid\"></ion-toggle>\n      </ion-item>\n\n      <div class=\"ion-padding\"></div>\n      <ion-item>\n        <ion-label position=\"stacked\">Hex Code</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"hex_code\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Badge Number</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"badge_no\"></ion-input>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div class=\"ion-padding ion-text-center\">\n    <ion-button color=\"light\" (click)=\"cancel()\">Cancel</ion-button>\n    <ion-button color=\"primary\" (click)=\"match()\">Match</ion-button>\n  </div>\n\n  <div style=\"padding-bottom:300px;\">&nbsp;</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/inventory-management/profile/profile-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/inventory-management/profile/profile-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/inventory-management/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/inventory-management/profile/profile.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/inventory-management/profile/profile.module.ts ***!
  \**********************************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/pages/inventory-management/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/inventory-management/profile/profile.page.ts");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/pages/inventory-management/profile/profile.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/inventory-management/profile/profile.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludmVudG9yeS1tYW5hZ2VtZW50L3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/inventory-management/profile/profile.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/inventory-management/profile/profile.page.ts ***!
  \********************************************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfilePage = class ProfilePage {
    constructor() { }
    ngOnInit() {
    }
};
ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory-management/profile/profile.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/inventory-management/profile/profile.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProfilePage);



/***/ }),

/***/ "./src/app/pages/store-keeper/list-item/list-item.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/store-keeper/list-item/list-item.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wbnNiL0RvY3VtZW50cy9HaXRIdWIvYWlyc2VsLXJmaWQvbW9iaWxlL3NyYy9hcHAvcGFnZXMvc3RvcmUta2VlcGVyL2xpc3QtaXRlbS9saXN0LWl0ZW0ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdG9yZS1rZWVwZXIvbGlzdC1pdGVtL2xpc3QtaXRlbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdG9yZS1rZWVwZXIvbGlzdC1pdGVtL2xpc3QtaXRlbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59IiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/store-keeper/list-item/list-item.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/store-keeper/list-item/list-item.page.ts ***!
  \****************************************************************/
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-item.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-keeper/list-item/list-item.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-item.page.scss */ "./src/app/pages/store-keeper/list-item/list-item.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], ListItemPage);



/***/ }),

/***/ "./src/app/pages/store-supervisor/list-item/list-item.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/store-supervisor/list-item/list-item.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wbnNiL0RvY3VtZW50cy9HaXRIdWIvYWlyc2VsLXJmaWQvbW9iaWxlL3NyYy9hcHAvcGFnZXMvc3RvcmUtc3VwZXJ2aXNvci9saXN0LWl0ZW0vbGlzdC1pdGVtLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3RvcmUtc3VwZXJ2aXNvci9saXN0LWl0ZW0vbGlzdC1pdGVtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0b3JlLXN1cGVydmlzb3IvbGlzdC1pdGVtL2xpc3QtaXRlbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59IiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/store-supervisor/list-item/list-item.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/store-supervisor/list-item/list-item.page.ts ***!
  \********************************************************************/
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-item.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-supervisor/list-item/list-item.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-item.page.scss */ "./src/app/pages/store-supervisor/list-item/list-item.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], ListItemPage);



/***/ }),

/***/ "./src/app/pages/technical/approval-profile/approval-profile-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/technical/approval-profile/approval-profile-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ApprovalProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalProfilePageRoutingModule", function() { return ApprovalProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _approval_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./approval-profile.page */ "./src/app/pages/technical/approval-profile/approval-profile.page.ts");




const routes = [
    {
        path: '',
        component: _approval_profile_page__WEBPACK_IMPORTED_MODULE_3__["ApprovalProfilePage"]
    }
];
let ApprovalProfilePageRoutingModule = class ApprovalProfilePageRoutingModule {
};
ApprovalProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ApprovalProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/technical/approval-profile/approval-profile.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/technical/approval-profile/approval-profile.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ApprovalProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalProfilePageModule", function() { return ApprovalProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _approval_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./approval-profile-routing.module */ "./src/app/pages/technical/approval-profile/approval-profile-routing.module.ts");
/* harmony import */ var _approval_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./approval-profile.page */ "./src/app/pages/technical/approval-profile/approval-profile.page.ts");







let ApprovalProfilePageModule = class ApprovalProfilePageModule {
};
ApprovalProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _approval_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ApprovalProfilePageRoutingModule"]
        ],
        declarations: [_approval_profile_page__WEBPACK_IMPORTED_MODULE_6__["ApprovalProfilePage"]]
    })
], ApprovalProfilePageModule);



/***/ }),

/***/ "./src/app/pages/technical/approval-profile/approval-profile.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/technical/approval-profile/approval-profile.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlY2huaWNhbC9hcHByb3ZhbC1wcm9maWxlL2FwcHJvdmFsLXByb2ZpbGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/technical/approval-profile/approval-profile.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/technical/approval-profile/approval-profile.page.ts ***!
  \***************************************************************************/
/*! exports provided: ApprovalProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalProfilePage", function() { return ApprovalProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_shared_services_approval_profile_approval_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/approval-profile/approval-profile.service */ "./src/app/shared/services/approval-profile/approval-profile.service.ts");




let ApprovalProfilePage = class ApprovalProfilePage {
    constructor(alertController, modalController, approvalprofileService) {
        this.alertController = alertController;
        this.modalController = modalController;
        this.approvalprofileService = approvalprofileService;
        // Data
        this.approvalprofiles = [];
        this.items = [];
    }
    ngOnInit() { }
    ionViewDidEnter() {
        this.approvalprofileService.get().subscribe((res) => {
            this.approvalprofiles = res;
        }, (err) => {
            console.error("err", err);
        }, () => {
            this.initializeItems();
        });
    }
    initializeItems() {
        this.items = this.approvalprofiles;
    }
    getItems(ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        const val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() !== "") {
            this.items = this.items.filter((item) => {
                return item.description.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
        }
    }
    closeModal(data) {
        if (data) {
            this.presentAlertConfirm(data);
        }
        else
            this.modalController.dismiss("");
    }
    presentAlertConfirm(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Confirm!",
                message: `Do you want to choose this approval profile (${data.description})?`,
                buttons: [
                    {
                        text: "No",
                        role: "cancel",
                        handler: () => { },
                    },
                    {
                        text: "Yes",
                        handler: () => {
                            this.modalController.dismiss(data.approval_profile);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
};
ApprovalProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_shared_services_approval_profile_approval_profile_service__WEBPACK_IMPORTED_MODULE_3__["ApprovalProfileService"] }
];
ApprovalProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-approval-profile",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./approval-profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/approval-profile/approval-profile.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./approval-profile.page.scss */ "./src/app/pages/technical/approval-profile/approval-profile.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_shared_services_approval_profile_approval_profile_service__WEBPACK_IMPORTED_MODULE_3__["ApprovalProfileService"]])
], ApprovalProfilePage);



/***/ }),

/***/ "./src/app/pages/technical/asset-detail-list/asset-detail-list-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/technical/asset-detail-list/asset-detail-list-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: AssetDetailListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetDetailListPageRoutingModule", function() { return AssetDetailListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _asset_detail_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asset-detail-list.page */ "./src/app/pages/technical/asset-detail-list/asset-detail-list.page.ts");




const routes = [
    {
        path: '',
        component: _asset_detail_list_page__WEBPACK_IMPORTED_MODULE_3__["AssetDetailListPage"]
    }
];
let AssetDetailListPageRoutingModule = class AssetDetailListPageRoutingModule {
};
AssetDetailListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AssetDetailListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/technical/asset-detail-list/asset-detail-list.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/technical/asset-detail-list/asset-detail-list.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AssetDetailListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetDetailListPageModule", function() { return AssetDetailListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _asset_detail_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asset-detail-list-routing.module */ "./src/app/pages/technical/asset-detail-list/asset-detail-list-routing.module.ts");
/* harmony import */ var _asset_detail_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./asset-detail-list.page */ "./src/app/pages/technical/asset-detail-list/asset-detail-list.page.ts");







let AssetDetailListPageModule = class AssetDetailListPageModule {
};
AssetDetailListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _asset_detail_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["AssetDetailListPageRoutingModule"]
        ],
        declarations: [_asset_detail_list_page__WEBPACK_IMPORTED_MODULE_6__["AssetDetailListPage"]]
    })
], AssetDetailListPageModule);



/***/ }),

/***/ "./src/app/pages/technical/asset-detail-list/asset-detail-list.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/technical/asset-detail-list/asset-detail-list.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlY2huaWNhbC9hc3NldC1kZXRhaWwtbGlzdC9hc3NldC1kZXRhaWwtbGlzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/technical/asset-detail-list/asset-detail-list.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/technical/asset-detail-list/asset-detail-list.page.ts ***!
  \*****************************************************************************/
/*! exports provided: AssetDetailListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetDetailListPage", function() { return AssetDetailListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_shared_services_asset_registrations_asset_registrations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/asset-registrations/asset-registrations.service */ "./src/app/shared/services/asset-registrations/asset-registrations.service.ts");
/* harmony import */ var src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/notifications/notifications.service */ "./src/app/shared/services/notifications/notifications.service.ts");
/* harmony import */ var src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/assets/assets.service */ "./src/app/shared/services/assets/assets.service.ts");
/* harmony import */ var src_app_shared_services_asset_location_sync_asset_location_sync_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/asset-location-sync/asset-location-sync.service */ "./src/app/shared/services/asset-location-sync/asset-location-sync.service.ts");








let AssetDetailListPage = class AssetDetailListPage {
    constructor(menu, notificationService, assetregistrationService, route, router, loadingController, assetsService, assetLocatioSyncService) {
        this.menu = menu;
        this.notificationService = notificationService;
        this.assetregistrationService = assetregistrationService;
        this.route = route;
        this.router = router;
        this.loadingController = loadingController;
        this.assetsService = assetsService;
        this.assetLocatioSyncService = assetLocatioSyncService;
        // List
        this.assetregistrations = [];
        this.route.queryParams.subscribe((params) => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.getAsset(this.router.getCurrentNavigation().extras.state.badge_no);
            }
        });
    }
    getAsset(badge_no) {
        // console.log("badge_no =", badge_no)
        this.assetsService.filter("badge_no=" + badge_no).subscribe((res) => {
            console.log("assetregistrations=res", res);
            this.assetregistrations = res;
            if (res[0].attached_to_asset_id == '') {
                this.assetLocatioSyncService.filter("node_id=" + this.assetregistrations[0].node_id).subscribe((res) => {
                    console.log("assetLocatioSyncServiceres>>>", res);
                    // this.assetregistrations = res;
                    // this.assetLocatioSyncdata = res[0].description
                    if (res.length > 0) {
                        this.assetLocatioSyncdata = res[0].description;
                    }
                    else {
                        this.assetLocatioSyncdata = '-';
                    }
                    // console.log(" this.assetLocatioSyncdata = ", this.assetLocatioSyncdata)
                }, (err) => {
                    console.error("err", err);
                });
            }
            else {
                this.assetsService.filter("asset_id=" + res[0].attached_to_asset_id).subscribe((resA) => {
                    console.log("assetqqqqqqqqq=res", resA);
                    this.assetLocatioSyncService.filter("node_id=" + resA[0]['node_id']).subscribe((resAls) => {
                        console.log("resAls>><<>>", resAls);
                        if (resAls.length > 0) {
                            this.assetLocatioSyncdata = resAls[0].description;
                        }
                        else {
                            this.assetLocatioSyncdata = '-';
                        }
                        // console.log(" this.assetLocatioSyncdata = ", this.assetLocatioSyncdata)
                    }, (err) => {
                        console.error("err", err);
                    });
                    this.assetregistrations = res;
                }, (error) => {
                    console.log(error);
                });
            }
        }, (err) => {
            console.error("err", err);
        });
    }
    ionViewDidEnter() {
        console.log("ionViewDidEnter AssetDetailListPage");
    }
    ionViewDidLeave() {
        console.log("ionViewDidLeave AssetDetailListPage");
    }
    ngOnInit() {
        console.log("ngOnInit AssetDetailListPage");
    }
    ngOnDestroy() {
        console.log("ngOnDestroy AssetDetailListPage");
    }
    clickEdit(assetregistration) {
        let navigationExtras = {
            state: {
                asset_detail: assetregistration,
            },
        };
        this.router.navigate(["/technical/asset-detail"], navigationExtras);
    }
    homePage(path) {
        this.router.navigate([path]);
    }
    openNotification() {
        this.menu.enable(true, "menuNotification");
        this.menu.open("menuNotification");
    }
};
AssetDetailListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"] },
    { type: src_app_shared_services_asset_registrations_asset_registrations_service__WEBPACK_IMPORTED_MODULE_4__["AssetRegistrationsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_6__["AssetsService"] },
    { type: src_app_shared_services_asset_location_sync_asset_location_sync_service__WEBPACK_IMPORTED_MODULE_7__["AssetLocatioSyncService"] }
];
AssetDetailListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-asset-detail-list",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./asset-detail-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/asset-detail-list/asset-detail-list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./asset-detail-list.page.scss */ "./src/app/pages/technical/asset-detail-list/asset-detail-list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"],
        src_app_shared_services_asset_registrations_asset_registrations_service__WEBPACK_IMPORTED_MODULE_4__["AssetRegistrationsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_6__["AssetsService"],
        src_app_shared_services_asset_location_sync_asset_location_sync_service__WEBPACK_IMPORTED_MODULE_7__["AssetLocatioSyncService"]])
], AssetDetailListPage);



/***/ }),

/***/ "./src/app/pages/technical/asset-registration-list/asset-registration-list-routing.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/technical/asset-registration-list/asset-registration-list-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: AssetRegistrationListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetRegistrationListPageRoutingModule", function() { return AssetRegistrationListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _asset_registration_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asset-registration-list.page */ "./src/app/pages/technical/asset-registration-list/asset-registration-list.page.ts");




const routes = [
    {
        path: '',
        component: _asset_registration_list_page__WEBPACK_IMPORTED_MODULE_3__["AssetRegistrationListPage"]
    }
];
let AssetRegistrationListPageRoutingModule = class AssetRegistrationListPageRoutingModule {
};
AssetRegistrationListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AssetRegistrationListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/technical/asset-registration-list/asset-registration-list.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/technical/asset-registration-list/asset-registration-list.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: AssetRegistrationListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetRegistrationListPageModule", function() { return AssetRegistrationListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _asset_registration_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asset-registration-list-routing.module */ "./src/app/pages/technical/asset-registration-list/asset-registration-list-routing.module.ts");
/* harmony import */ var _asset_registration_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./asset-registration-list.page */ "./src/app/pages/technical/asset-registration-list/asset-registration-list.page.ts");







let AssetRegistrationListPageModule = class AssetRegistrationListPageModule {
};
AssetRegistrationListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _asset_registration_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["AssetRegistrationListPageRoutingModule"]
        ],
        declarations: [_asset_registration_list_page__WEBPACK_IMPORTED_MODULE_6__["AssetRegistrationListPage"]]
    })
], AssetRegistrationListPageModule);



/***/ }),

/***/ "./src/app/pages/technical/asset-registration-list/asset-registration-list.page.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/technical/asset-registration-list/asset-registration-list.page.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlY2huaWNhbC9hc3NldC1yZWdpc3RyYXRpb24tbGlzdC9hc3NldC1yZWdpc3RyYXRpb24tbGlzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/technical/asset-registration-list/asset-registration-list.page.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/technical/asset-registration-list/asset-registration-list.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: AssetRegistrationListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetRegistrationListPage", function() { return AssetRegistrationListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/assets/assets.service */ "./src/app/shared/services/assets/assets.service.ts");
/* harmony import */ var src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/notifications/notifications.service */ "./src/app/shared/services/notifications/notifications.service.ts");
/* harmony import */ var src_app_shared_services_asset_registrations_asset_registrations_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/asset-registrations/asset-registrations.service */ "./src/app/shared/services/asset-registrations/asset-registrations.service.ts");







let AssetRegistrationListPage = class AssetRegistrationListPage {
    constructor(route, router, menu, modalController, assetService, notificationService, assetRegistrationsService) {
        this.route = route;
        this.router = router;
        this.menu = menu;
        this.modalController = modalController;
        this.assetService = assetService;
        this.notificationService = notificationService;
        this.assetRegistrationsService = assetRegistrationsService;
        // List
        this.assetregistrations = [];
    }
    getAsset() {
        this.assetRegistrationsService.get().subscribe((res) => {
            console.log("res", res);
            this.assetregistrations = res;
        }, (err) => {
            console.error("err", err);
        });
    }
    ionViewDidEnter() {
        this.getAsset();
    }
    ngOnInit() { }
    homePage(path) {
        this.router.navigate([path]);
    }
    openNotification() {
        this.menu.enable(true, "menuNotification");
        this.menu.open("menuNotification");
    }
    clickNew() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.router.navigate(["/technical/asset-registration"]);
        });
    }
    clickEdit(assetregistration) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let navigationExtras = {
                state: {
                    assetregistration: assetregistration,
                },
            };
            this.router.navigate(["/technical/asset-registration"], navigationExtras);
        });
    }
    clickRemove(index) {
        this.assetregistrations.splice(index, 1);
    }
};
AssetRegistrationListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_4__["AssetsService"] },
    { type: src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"] },
    { type: src_app_shared_services_asset_registrations_asset_registrations_service__WEBPACK_IMPORTED_MODULE_6__["AssetRegistrationsService"] }
];
AssetRegistrationListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-asset-registration-list",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./asset-registration-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/asset-registration-list/asset-registration-list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./asset-registration-list.page.scss */ "./src/app/pages/technical/asset-registration-list/asset-registration-list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_4__["AssetsService"],
        src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"],
        src_app_shared_services_asset_registrations_asset_registrations_service__WEBPACK_IMPORTED_MODULE_6__["AssetRegistrationsService"]])
], AssetRegistrationListPage);



/***/ }),

/***/ "./src/app/pages/technical/inventory-info/inventory-info.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/technical/inventory-info/inventory-info.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlY2huaWNhbC9pbnZlbnRvcnktaW5mby9pbnZlbnRvcnktaW5mby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/technical/inventory-info/inventory-info.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/technical/inventory-info/inventory-info.page.ts ***!
  \***********************************************************************/
/*! exports provided: InventoryInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryInfoPage", function() { return InventoryInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InventoryInfoPage = class InventoryInfoPage {
    constructor() { }
    ngOnInit() {
    }
};
InventoryInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inventory-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inventory-info.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/inventory-info/inventory-info.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inventory-info.page.scss */ "./src/app/pages/technical/inventory-info/inventory-info.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InventoryInfoPage);



/***/ }),

/***/ "./src/app/pages/technical/match/match-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/technical/match/match-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: MatchPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchPageRoutingModule", function() { return MatchPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _match_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./match.page */ "./src/app/pages/technical/match/match.page.ts");




const routes = [
    {
        path: '',
        component: _match_page__WEBPACK_IMPORTED_MODULE_3__["MatchPage"]
    }
];
let MatchPageRoutingModule = class MatchPageRoutingModule {
};
MatchPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MatchPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/technical/match/match.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/technical/match/match.module.ts ***!
  \*******************************************************/
/*! exports provided: MatchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchPageModule", function() { return MatchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _match_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./match-routing.module */ "./src/app/pages/technical/match/match-routing.module.ts");
/* harmony import */ var _match_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./match.page */ "./src/app/pages/technical/match/match.page.ts");







let MatchPageModule = class MatchPageModule {
};
MatchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _match_routing_module__WEBPACK_IMPORTED_MODULE_5__["MatchPageRoutingModule"]
        ],
        declarations: [_match_page__WEBPACK_IMPORTED_MODULE_6__["MatchPage"]]
    })
], MatchPageModule);



/***/ }),

/***/ "./src/app/pages/technical/match/match.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/technical/match/match.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlY2huaWNhbC9tYXRjaC9tYXRjaC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/technical/match/match.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/technical/match/match.page.ts ***!
  \*****************************************************/
/*! exports provided: MatchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchPage", function() { return MatchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/assets/assets.service */ "./src/app/shared/services/assets/assets.service.ts");
/* harmony import */ var src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/notifications/notifications.service */ "./src/app/shared/services/notifications/notifications.service.ts");







let MatchPage = class MatchPage {
    constructor(alertController, menu, ngZone, assetsService, notificationService, router, platform) {
        this.alertController = alertController;
        this.menu = menu;
        this.ngZone = ngZone;
        this.assetsService = assetsService;
        this.notificationService = notificationService;
        this.router = router;
        this.platform = platform;
        this.logs = new Array();
        this.bBarcode = true;
        this.bRfid = false;
        this.platform.backButton.subscribeWithPriority(10, () => {
            console.log('removed back');
        });
    }
    L(...args) {
        let v = args.join(" ");
        console.log(v);
        this.ngZone.run(() => {
            this.logs.push(v);
        });
    }
    ngOnInit() {
        broadcaster._debug = true;
        this.onRegister2DBarcodeListener();
        this.onRegisterRFIDListener();
    }
    onRegister2DBarcodeListener() {
        console.log("[register onRegister2DBarcodeListener] ");
        const ev = "com.scanner.broadcast";
        var isGlobal = true;
        var listener = (event) => {
            console.log(JSON.stringify(event));
            if (event.SCAN_STATE == "success") {
                this.ngZone.run(() => {
                    if (this.bBarcode) {
                        this.badge_no = event.data;
                    }
                });
            }
            else {
            }
        };
        broadcaster.addEventListener(ev, isGlobal, listener);
    }
    onRegisterRFIDListener() {
        console.log("[register onRegisterRFIDListener] ");
        const ev = "android.intent.action.scanner.RFID";
        var isGlobal = true;
        var listener = (event) => {
            console.log(JSON.stringify(event));
            if (event.SCAN_STATE == "success") {
                this.ngZone.run(() => {
                    if (this.bRfid) {
                        this.hex_code = event.data;
                    }
                });
            }
            else {
            }
        };
        broadcaster.addEventListener(ev, isGlobal, listener);
    }
    match() {
        if (this.hex_code && this.badge_no) {
            this.hex_code = this.hex_code.trim();
            this.badge_no = this.badge_no.trim();
            let body = {
                hex_code: this.hex_code,
                badge_no: this.badge_no,
            };
            this.assetsService.patch_asset(body).subscribe((res) => {
                console.log("res", res);
                this.hex_code = "";
                this.badge_no = "";
                this.presentAlert("Success", "Your hex code have successfully updated in the database");
            }, (err) => {
                console.error("err", err);
                this.presentAlert("Error", "The badge number is not found in the database. Please try again");
            });
        }
        else {
            this.presentAlert("Error", "Please scan both 2D barcode and RFID to get badge number and hex code");
        }
    }
    presentAlert(header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
                buttons: ["OK"],
            });
            yield alert.present();
        });
    }
    cancel() {
        this.router.navigate(["/technical/tabs/tab1"]);
    }
    homePage(path) {
        this.router.navigate([path]);
    }
    openNotification() {
        this.menu.enable(true, "menuNotification");
        this.menu.open("menuNotification");
    }
};
MatchPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_4__["AssetsService"] },
    { type: src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
MatchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-match",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./match.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/match/match.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./match.page.scss */ "./src/app/pages/technical/match/match.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        src_app_shared_services_assets_assets_service__WEBPACK_IMPORTED_MODULE_4__["AssetsService"],
        src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
], MatchPage);



/***/ }),

/***/ "./src/app/pages/technical/measurement-type/measurement-type-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/technical/measurement-type/measurement-type-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: MeasurementTypePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasurementTypePageRoutingModule", function() { return MeasurementTypePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _measurement_type_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./measurement-type.page */ "./src/app/pages/technical/measurement-type/measurement-type.page.ts");




const routes = [
    {
        path: '',
        component: _measurement_type_page__WEBPACK_IMPORTED_MODULE_3__["MeasurementTypePage"]
    }
];
let MeasurementTypePageRoutingModule = class MeasurementTypePageRoutingModule {
};
MeasurementTypePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MeasurementTypePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/technical/measurement-type/measurement-type.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/technical/measurement-type/measurement-type.module.ts ***!
  \*****************************************************************************/
/*! exports provided: MeasurementTypePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasurementTypePageModule", function() { return MeasurementTypePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _measurement_type_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./measurement-type-routing.module */ "./src/app/pages/technical/measurement-type/measurement-type-routing.module.ts");
/* harmony import */ var _measurement_type_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./measurement-type.page */ "./src/app/pages/technical/measurement-type/measurement-type.page.ts");







let MeasurementTypePageModule = class MeasurementTypePageModule {
};
MeasurementTypePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _measurement_type_routing_module__WEBPACK_IMPORTED_MODULE_5__["MeasurementTypePageRoutingModule"]
        ],
        declarations: [_measurement_type_page__WEBPACK_IMPORTED_MODULE_6__["MeasurementTypePage"]]
    })
], MeasurementTypePageModule);



/***/ }),

/***/ "./src/app/pages/technical/service-history/service-history-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/technical/service-history/service-history-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ServiceHistoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceHistoryPageRoutingModule", function() { return ServiceHistoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service-history.page */ "./src/app/pages/technical/service-history/service-history.page.ts");




const routes = [
    {
        path: '',
        component: _service_history_page__WEBPACK_IMPORTED_MODULE_3__["ServiceHistoryPage"]
    }
];
let ServiceHistoryPageRoutingModule = class ServiceHistoryPageRoutingModule {
};
ServiceHistoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ServiceHistoryPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/technical/service-history/service-history.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/technical/service-history/service-history.module.ts ***!
  \***************************************************************************/
/*! exports provided: ServiceHistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceHistoryPageModule", function() { return ServiceHistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _service_history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service-history-routing.module */ "./src/app/pages/technical/service-history/service-history-routing.module.ts");
/* harmony import */ var _service_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service-history.page */ "./src/app/pages/technical/service-history/service-history.page.ts");







let ServiceHistoryPageModule = class ServiceHistoryPageModule {
};
ServiceHistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _service_history_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServiceHistoryPageRoutingModule"]
        ],
        declarations: [_service_history_page__WEBPACK_IMPORTED_MODULE_6__["ServiceHistoryPage"]]
    })
], ServiceHistoryPageModule);



/***/ }),

/***/ "./src/app/shared/services/employee/employee.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/employee/employee.service.ts ***!
  \**************************************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let EmployeeService = class EmployeeService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/employee/";
        // Data
        this.emodels = [];
    }
    post(body) {
        return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("EmployeeModel", res);
        }));
    }
    get() {
        return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("EmployeeModel", res);
            this.emodels = res;
        }));
    }
    getOne(id) {
        let urlID = this.url + id + "/";
        return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("EmployeeModel", res);
            this.emodel = res;
        }));
    }
    update(body) {
        return this.http.patch(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("EmployeeModel", res);
        }));
    }
    delete(id) {
        return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("EmployeeModel", res);
        }));
    }
    filter(field) {
        let urlFilter = this.url + "?" + field;
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("EmployeeModel", res);
        }));
    }
};
EmployeeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], EmployeeService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map