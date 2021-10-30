(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/angular-svg-round-progressbar/dist/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/angular-svg-round-progressbar/dist/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var round_progress_component_1 = __webpack_require__(/*! ./round-progress.component */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.component.js");
var round_progress_ease_1 = __webpack_require__(/*! ./round-progress.ease */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.ease.js");
var round_progress_config_1 = __webpack_require__(/*! ./round-progress.config */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.config.js");
var round_progress_service_1 = __webpack_require__(/*! ./round-progress.service */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.service.js");
var RoundProgressModule = /** @class */ (function () {
    function RoundProgressModule() {
    }
    RoundProgressModule = __decorate([
        core_1.NgModule({
            declarations: [round_progress_component_1.RoundProgressComponent],
            exports: [round_progress_component_1.RoundProgressComponent],
            providers: [round_progress_service_1.RoundProgressService, round_progress_ease_1.RoundProgressEase, round_progress_config_1.ROUND_PROGRESS_DEFAULTS_PROVIDER]
        })
    ], RoundProgressModule);
    return RoundProgressModule;
}());
exports.RoundProgressModule = RoundProgressModule;
__export(__webpack_require__(/*! ./round-progress.component */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.component.js"));
__export(__webpack_require__(/*! ./round-progress.service */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.service.js"));
__export(__webpack_require__(/*! ./round-progress.ease */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.ease.js"));
__export(__webpack_require__(/*! ./round-progress.config */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.config.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular-svg-round-progressbar/dist/round-progress.component.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/angular-svg-round-progressbar/dist/round-progress.component.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var round_progress_service_1 = __webpack_require__(/*! ./round-progress.service */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.service.js");
var round_progress_config_1 = __webpack_require__(/*! ./round-progress.config */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.config.js");
var round_progress_ease_1 = __webpack_require__(/*! ./round-progress.ease */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.ease.js");
var RoundProgressComponent = /** @class */ (function () {
    function RoundProgressComponent(_service, _easing, _defaults, _ngZone) {
        this._service = _service;
        this._easing = _easing;
        this._defaults = _defaults;
        this._ngZone = _ngZone;
        /** Radius of the circle. */
        this.radius = this._defaults.radius;
        /** Name of the easing function to use when animating. */
        this.animation = this._defaults.animation;
        /** Time in millisconds by which to delay the animation. */
        this.animationDelay = this._defaults.animationDelay;
        /** Duration of the animation. */
        this.duration = this._defaults.duration;
        /** Width of the circle's stroke. */
        this.stroke = this._defaults.stroke;
        /** Color of the circle. */
        this.color = this._defaults.color;
        /** Background color of the circle. */
        this.background = this._defaults.background;
        /** Whether the circle should take up the width of its parent. */
        this.responsive = this._defaults.responsive;
        /** Whether the circle is filling up clockwise. */
        this.clockwise = this._defaults.clockwise;
        /** Whether to render a semicircle. */
        this.semicircle = this._defaults.semicircle;
        /** Whether the tip of the progress should be rounded off. */
        this.rounded = this._defaults.rounded;
        /** Emits when a new value has been rendered. */
        this.onRender = new core_1.EventEmitter();
        this._lastAnimationId = 0;
    }
    /** Animates a change in the current value. */
    RoundProgressComponent.prototype._animateChange = function (from, to) {
        var _this = this;
        if (typeof from !== 'number') {
            from = 0;
        }
        to = this._clamp(to);
        from = this._clamp(from);
        var self = this;
        var changeInValue = to - from;
        var duration = self.duration;
        // Avoid firing change detection for each of the animation frames.
        self._ngZone.runOutsideAngular(function () {
            var start = function () {
                var startTime = self._service.getTimestamp();
                var id = ++self._lastAnimationId;
                requestAnimationFrame(function animation() {
                    var currentTime = Math.min(self._service.getTimestamp() - startTime, duration);
                    var value = self._easing[self.animation](currentTime, from, changeInValue, duration);
                    self._setPath(value);
                    self.onRender.emit(value);
                    if (id === self._lastAnimationId && currentTime < duration) {
                        requestAnimationFrame(animation);
                    }
                });
            };
            if (_this.animationDelay > 0) {
                setTimeout(start, _this.animationDelay);
            }
            else {
                start();
            }
        });
    };
    /** Sets the path dimensions. */
    RoundProgressComponent.prototype._setPath = function (value) {
        if (this._path) {
            var arc = this._service.getArc(value, this.max, this.radius - this.stroke / 2, this.radius, this.semicircle);
            this._path.nativeElement.setAttribute('d', arc);
        }
    };
    /** Clamps a value between the maximum and 0. */
    RoundProgressComponent.prototype._clamp = function (value) {
        return Math.max(0, Math.min(value || 0, this.max));
    };
    /** Determines the SVG transforms for the <path> node. */
    RoundProgressComponent.prototype.getPathTransform = function () {
        var diameter = this._getDiameter();
        if (this.semicircle) {
            return this.clockwise ?
                "translate(0, " + diameter + ") rotate(-90)" :
                "translate(" + (diameter + ',' + diameter) + ") rotate(90) scale(-1, 1)";
        }
        else if (!this.clockwise) {
            return "scale(-1, 1) translate(-" + diameter + " 0)";
        }
    };
    /** Resolves a color through the service. */
    RoundProgressComponent.prototype.resolveColor = function (color) {
        return this._service.resolveColor(color);
    };
    /** Change detection callback. */
    RoundProgressComponent.prototype.ngOnChanges = function (changes) {
        if (changes.current) {
            this._animateChange(changes.current.previousValue, changes.current.currentValue);
        }
        else {
            this._setPath(this.current);
        }
    };
    /** Diameter of the circle. */
    RoundProgressComponent.prototype._getDiameter = function () {
        return this.radius * 2;
    };
    /** The CSS height of the wrapper element. */
    RoundProgressComponent.prototype._getElementHeight = function () {
        if (!this.responsive) {
            return (this.semicircle ? this.radius : this._getDiameter()) + 'px';
        }
    };
    /** Viewbox for the SVG element. */
    RoundProgressComponent.prototype._getViewBox = function () {
        var diameter = this._getDiameter();
        return "0 0 " + diameter + " " + (this.semicircle ? this.radius : diameter);
    };
    /** Bottom padding for the wrapper element. */
    RoundProgressComponent.prototype._getPaddingBottom = function () {
        if (this.responsive) {
            return this.semicircle ? '50%' : '100%';
        }
    };
    __decorate([
        core_1.ViewChild('path', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], RoundProgressComponent.prototype, "_path", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], RoundProgressComponent.prototype, "current", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], RoundProgressComponent.prototype, "max", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], RoundProgressComponent.prototype, "radius", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RoundProgressComponent.prototype, "animation", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], RoundProgressComponent.prototype, "animationDelay", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], RoundProgressComponent.prototype, "duration", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], RoundProgressComponent.prototype, "stroke", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RoundProgressComponent.prototype, "color", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RoundProgressComponent.prototype, "background", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], RoundProgressComponent.prototype, "responsive", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], RoundProgressComponent.prototype, "clockwise", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], RoundProgressComponent.prototype, "semicircle", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], RoundProgressComponent.prototype, "rounded", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], RoundProgressComponent.prototype, "onRender", void 0);
    RoundProgressComponent = __decorate([
        core_1.Component({
            selector: 'round-progress',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" [attr.viewBox]=\"_getViewBox()\">\n      <circle\n        fill=\"none\"\n        [attr.cx]=\"radius\"\n        [attr.cy]=\"radius\"\n        [attr.r]=\"radius - stroke / 2\"\n        [style.stroke]=\"resolveColor(background)\"\n        [style.stroke-width]=\"stroke\"/>\n\n      <path\n        #path\n        fill=\"none\"\n        [style.stroke-width]=\"stroke\"\n        [style.stroke]=\"resolveColor(color)\"\n        [style.stroke-linecap]=\"rounded ? 'round' : ''\"\n        [attr.transform]=\"getPathTransform()\"/>\n    </svg>\n  ",
            host: {
                'role': 'progressbar',
                '[attr.aria-valuemin]': 'current',
                '[attr.aria-valuemax]': 'max',
                '[style.width]': "responsive ? '' : _getDiameter() + 'px'",
                '[style.height]': '_getElementHeight()',
                '[style.padding-bottom]': '_getPaddingBottom()',
                '[class.responsive]': 'responsive'
            },
            styles: ["\n    :host {\n      display: block;\n      position: relative;\n      overflow: hidden;\n    }\n    :host(.responsive) {\n      width: 100%;\n      padding-bottom: 100%;\n    }\n    :host(.responsive) > svg {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n    }\n  "]
        }),
        __param(2, core_1.Inject(round_progress_config_1.ROUND_PROGRESS_DEFAULTS)),
        __metadata("design:paramtypes", [round_progress_service_1.RoundProgressService,
            round_progress_ease_1.RoundProgressEase, Object, core_1.NgZone])
    ], RoundProgressComponent);
    return RoundProgressComponent;
}());
exports.RoundProgressComponent = RoundProgressComponent;
//# sourceMappingURL=round-progress.component.js.map

/***/ }),

/***/ "./node_modules/angular-svg-round-progressbar/dist/round-progress.config.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/angular-svg-round-progressbar/dist/round-progress.config.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
exports.ROUND_PROGRESS_DEFAULTS = new core_1.InjectionToken('ROUND_PROGRESS_DEFAULTS');
var ɵ0 = {
    radius: 125,
    animation: 'easeOutCubic',
    animationDelay: null,
    duration: 500,
    stroke: 15,
    color: '#45CCCE',
    background: '#EAEAEA',
    responsive: false,
    clockwise: true,
    semicircle: false,
    rounded: false
};
exports.ɵ0 = ɵ0;
exports.ROUND_PROGRESS_DEFAULTS_PROVIDER = {
    provide: exports.ROUND_PROGRESS_DEFAULTS,
    useValue: ɵ0
};
//# sourceMappingURL=round-progress.config.js.map

/***/ }),

/***/ "./node_modules/angular-svg-round-progressbar/dist/round-progress.ease.js":
/*!********************************************************************************!*\
  !*** ./node_modules/angular-svg-round-progressbar/dist/round-progress.ease.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var RoundProgressEase = /** @class */ (function () {
    function RoundProgressEase() {
    }
    // t: current time (or position) of the neonate. This can be seconds or frames, steps,
    // seconds, ms, whatever – as long as the unit is the same as is used for the total time.
    // b: beginning value of the property.
    // c: change between the beginning and destination value of the property.
    // d: total time of the neonate.
    RoundProgressEase.prototype.linearEase = function (t, b, c, d) {
        return c * t / d + b;
    };
    RoundProgressEase.prototype.easeInQuad = function (t, b, c, d) {
        return c * (t /= d) * t + b;
    };
    RoundProgressEase.prototype.easeOutQuad = function (t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    };
    RoundProgressEase.prototype.easeInOutQuad = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t + b;
        }
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    };
    RoundProgressEase.prototype.easeInCubic = function (t, b, c, d) {
        return c * (t /= d) * t * t + b;
    };
    RoundProgressEase.prototype.easeOutCubic = function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    };
    RoundProgressEase.prototype.easeInOutCubic = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t + b;
        }
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    };
    RoundProgressEase.prototype.easeInQuart = function (t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    };
    RoundProgressEase.prototype.easeOutQuart = function (t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    };
    RoundProgressEase.prototype.easeInOutQuart = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t + b;
        }
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    };
    RoundProgressEase.prototype.easeInQuint = function (t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    };
    RoundProgressEase.prototype.easeOutQuint = function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    };
    RoundProgressEase.prototype.easeInOutQuint = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t * t + b;
        }
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    };
    RoundProgressEase.prototype.easeInSine = function (t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    };
    RoundProgressEase.prototype.easeOutSine = function (t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    };
    RoundProgressEase.prototype.easeInOutSine = function (t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    };
    RoundProgressEase.prototype.easeInExpo = function (t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    };
    RoundProgressEase.prototype.easeOutExpo = function (t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    };
    RoundProgressEase.prototype.easeInOutExpo = function (t, b, c, d) {
        if (t == 0) {
            return b;
        }
        if (t == d) {
            return b + c;
        }
        if ((t /= d / 2) < 1) {
            return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        }
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    };
    RoundProgressEase.prototype.easeInCirc = function (t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    };
    RoundProgressEase.prototype.easeOutCirc = function (t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    };
    RoundProgressEase.prototype.easeInOutCirc = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        }
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    };
    RoundProgressEase.prototype.easeInElastic = function (t, b, c, d) {
        var s = 1.70158;
        var p = d * 0.3;
        var a = c;
        if (t == 0) {
            return b;
        }
        if ((t /= d) == 1) {
            return b + c;
        }
        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return -(a * Math.pow(2, 10 * (t--)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    };
    RoundProgressEase.prototype.easeOutElastic = function (t, b, c, d) {
        var s = 1.70158;
        var p = d * 0.3;
        var a = c;
        if (t == 0) {
            return b;
        }
        if ((t /= d) == 1) {
            return b + c;
        }
        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    };
    RoundProgressEase.prototype.easeInOutElastic = function (t, b, c, d) {
        var s = 1.70158;
        var p = d * (0.3 * 1.5);
        var a = c;
        if (t == 0) {
            return b;
        }
        if ((t /= d / 2) == 2) {
            return b + c;
        }
        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        if (t < 1) {
            return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) *
                Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        }
        return a * Math.pow(2, -10 * (t -= 1)) *
            Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
    };
    RoundProgressEase.prototype.easeInBack = function (t, b, c, d, s) {
        if (s === void 0) { s = 1.70158; }
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    };
    RoundProgressEase.prototype.easeOutBack = function (t, b, c, d, s) {
        if (s === void 0) { s = 1.70158; }
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    };
    RoundProgressEase.prototype.easeInOutBack = function (t, b, c, d, s) {
        if (s === void 0) { s = 1.70158; }
        if ((t /= d / 2) < 1) {
            return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        }
        return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    };
    RoundProgressEase.prototype.easeInBounce = function (t, b, c, d) {
        return c - this.easeOutBounce(d - t, 0, c, d) + b;
    };
    RoundProgressEase.prototype.easeOutBounce = function (t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        }
        else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
        }
        else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
        }
        return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
    };
    RoundProgressEase.prototype.easeInOutBounce = function (t, b, c, d) {
        if (t < d / 2) {
            return this.easeInBounce(t * 2, 0, c, d) * 0.5 + b;
        }
        return this.easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
    };
    RoundProgressEase = __decorate([
        core_1.Injectable()
    ], RoundProgressEase);
    return RoundProgressEase;
}());
exports.RoundProgressEase = RoundProgressEase;
/**
 * TERMS OF USE - EASING EQUATIONS
 * Open source under the BSD License.

 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without modification, are permitted
 * provided that the following conditions are met:

 * Redistributions of source code must retain the above copyright notice, this list of conditions
 * and the following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions
 * and the following disclaimer in the documentation and/or other materials provided with the
 * distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse or promote
 * products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
 * IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 * FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
 * ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
//# sourceMappingURL=round-progress.ease.js.map

/***/ }),

/***/ "./node_modules/angular-svg-round-progressbar/dist/round-progress.service.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/angular-svg-round-progressbar/dist/round-progress.service.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var DEGREE_IN_RADIANS = Math.PI / 180;
var RoundProgressService = /** @class */ (function () {
    function RoundProgressService(document) {
        this.supportsSvg = !!(document &&
            document.createElementNS &&
            document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect);
        this._base = document && document.head.querySelector('base');
        this._hasPerf = typeof window !== 'undefined' &&
            window.performance &&
            window.performance.now &&
            typeof window.performance.now() === 'number';
    }
    /**
     * Resolves a SVG color against the page's `base` tag.
     */
    RoundProgressService.prototype.resolveColor = function (color) {
        if (this._base && this._base.href) {
            var hashIndex = color.indexOf('#');
            if (hashIndex > -1 && color.indexOf('url') > -1) {
                return color.slice(0, hashIndex) + location.href + color.slice(hashIndex);
            }
        }
        return color;
    };
    /**
     * Generates a timestamp.
     */
    RoundProgressService.prototype.getTimestamp = function () {
        return this._hasPerf ? window.performance.now() : Date.now();
    };
    /**
     * Generates the value for an SVG arc.
     * @param current       Current value.
     * @param total         Maximum value.
     * @param pathRadius    Radius of the SVG path.
     * @param elementRadius Radius of the SVG container.
     * @param isSemicircle  Whether the element should be a semicircle.
     */
    RoundProgressService.prototype.getArc = function (current, total, pathRadius, elementRadius, isSemicircle) {
        if (isSemicircle === void 0) { isSemicircle = false; }
        var value = Math.max(0, Math.min(current || 0, total));
        var maxAngle = isSemicircle ? 180 : 359.9999;
        var percentage = total === 0 ? maxAngle : (value / total) * maxAngle;
        var start = this._polarToCartesian(elementRadius, pathRadius, percentage);
        var end = this._polarToCartesian(elementRadius, pathRadius, 0);
        var arcSweep = (percentage <= 180 ? 0 : 1);
        return "M " + start + " A " + pathRadius + " " + pathRadius + " 0 " + arcSweep + " 0 " + end;
    };
    /**
     * Converts polar cooradinates to Cartesian.
     * @param elementRadius  Radius of the wrapper element.
     * @param pathRadius     Radius of the path being described.
     * @param angleInDegrees Degree to be converted.
     */
    RoundProgressService.prototype._polarToCartesian = function (elementRadius, pathRadius, angleInDegrees) {
        var angleInRadians = (angleInDegrees - 90) * DEGREE_IN_RADIANS;
        var x = elementRadius + (pathRadius * Math.cos(angleInRadians));
        var y = elementRadius + (pathRadius * Math.sin(angleInRadians));
        return x + ' ' + y;
    };
    RoundProgressService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Optional()), __param(0, core_1.Inject(common_1.DOCUMENT)),
        __metadata("design:paramtypes", [Object])
    ], RoundProgressService);
    return RoundProgressService;
}());
exports.RoundProgressService = RoundProgressService;
//# sourceMappingURL=round-progress.service.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory/home/home.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory/home/home.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"air-selangor-toolbar\">\n    <div class=\"ion-text-center ion-padding-top\" style=\"font-weight: bold;\">\n      INVENTORY\n    </div>\n\n    <ion-segment [(ngModel)]=\"type\">\n      <ion-segment-button value=\"toreceive\">\n        <ion-label color=\"light\" style=\"font-weight: bold;\"\n          >To Receive</ion-label\n        >\n      </ion-segment-button>\n      <ion-segment-button value=\"delivered\">\n        <ion-label color=\"light\" style=\"font-weight: bold;\"\n          >Delivered</ion-label\n        >\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div [ngSwitch]=\"type\">\n    <div *ngSwitchCase=\"'toreceive'\">\n      <h3 class=\"ion-text-center\">Store Keeper Activity</h3>\n\n      <ion-card>\n        <ion-card-content>\n          <p>Purchase Order 3231414</p>\n          <p>Placed on 04 Apr 2020</p>\n          <p>Paid on 04 Apr 2020</p>\n          <p>Expected Date of Delivery on 20 Apr 2020</p>\n          <hr />\n          <p>CONTACTOR - 32A 240V 4 POLES (SCHNEIDER)</p>\n          <p>EACT000005</p>\n          <p>QTY 2</p>\n          <hr />\n          <p>CONTACTOR (MAGNETIC) - 3TF54 22-OXL2 132kW (SIEMENS)</p>\n          <p>EACT010010</p>\n          <p>QTY 10</p>\n          <hr />\n          <p>CONTACTOR (MAGNETIC) - LC1D50M7</p>\n          <p>EACT010018</p>\n          <p>QTY 1</p>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-content>\n          <p>Purchase Order 5265461</p>\n          <p>Placed on 02 Apr 2020</p>\n          <p>Paid on 02 Apr 2020</p>\n          <p>Expected Date of Delivery on 22 Apr 2020</p>\n          <hr />\n          <p>CONTACTOR - 32A 240V 4 POLES (SCHNEIDER)</p>\n          <p>EACT000005</p>\n          <p>QTY 2</p>\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n    <div *ngSwitchCase=\"'delivered'\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\" class=\"ion-text-center\">\n            <ion-item>\n              <ion-label position=\"stacked\">Start Date</ion-label>\n              <ion-datetime\n                displayFormat=\"DD-MM-YYYY\"\n                placeholder=\"Select date\"\n              ></ion-datetime>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\" class=\"ion-text-center\">\n            <ion-item>\n              <ion-label position=\"stacked\">End Date</ion-label>\n              <ion-datetime\n                displayFormat=\"DD-MM-YYYY\"\n                placeholder=\"Select date\"\n              ></ion-datetime>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-card>\n        <ion-card-content>\n          <p>Purchase Order 3231414</p>\n          <p>Placed on 04 Apr 2020</p>\n          <p>Paid on 04 Apr 2020</p>\n          <p>Expected Date of Delivery on 20 Apr 2020</p>\n          <hr />\n          <p>CONTACTOR - 32A 240V 4 POLES (SCHNEIDER)</p>\n          <p>EACT000005</p>\n          <p>QTY 2</p>\n          <hr />\n          <p>CONTACTOR (MAGNETIC) - 3TF54 22-OXL2 132kW (SIEMENS)</p>\n          <p>EACT010010</p>\n          <p>QTY 10</p>\n          <hr />\n          <p>CONTACTOR (MAGNETIC) - LC1D50M7</p>\n          <p>EACT010018</p>\n          <p>QTY 1</p>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operator/home/home.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operator/home/home.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"homePage('/operator/tabs/tab1')\">\n        <ion-icon\n          src=\"../../../../assets/icon/air-selangor-icon.svg\"\n          style=\"font-size: 2rem;\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <div class=\"ion-text-center\" style=\"font-weight: bold;\">\n      OPERATOR DETAILS\n    </div>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openNotification()\">\n        <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n        <ion-badge\n          size=\"small\"\n          color=\"danger\"\n          style=\"position: absolute; right: -5px; top: 1px;\"\n          >3</ion-badge\n        >\n      </ion-button>\n      <!-- <ion-button (click)=\"clickLogout()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n      </ion-button> -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content-core\">\n  <!-- <ion-card style=\"height: auto;\">\n    <ion-card-content>\n      <ion-list>\n        <ion-item class=\"nopaddingstart\">\n          <ion-label position=\"stacked\">Name</ion-label>\n          <ion-input readonly value=\"Ahmad Albab\"></ion-input>\n        </ion-item>\n\n        <ion-item class=\"nopaddingstart\">\n          <ion-label position=\"stacked\">Department</ion-label>\n          <ion-input readonly type=\"text\" value=\"Distribution\"></ion-input>\n        </ion-item>\n\n        <ion-item class=\"nopaddingstart\">\n          <ion-label position=\"stacked\">Region</ion-label>\n          <ion-input readonly type=\"text\" value=\"North\"></ion-input>\n        </ion-item>\n\n        <ion-item class=\"nopaddingstart\">\n          <ion-label position=\"stacked\">Zone</ion-label>\n          <ion-input readonly type=\"text\" value=\"KL 1\"></ion-input>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card> -->\n\n  <ion-list-header>\n    <h3 class=\"ion-no-margin\">\n      <ion-icon\n        name=\"list-outline\"\n        style=\"vertical-align: middle;\"\n      ></ion-icon>\n      <span\n        style=\"\n          display: inline-block;\n          vertical-align: middle;\n          margin-left: 0.7rem;\n        \"\n        >Task\n      </span>\n    </h3>\n  </ion-list-header>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"3\"></ion-col>\n      <ion-col size=\"6\">\n        <ion-card\n          class=\"card-core ion-no-margin\"\n          mode=\"ios\"\n          (click)=\"openPage('/operator/tabs/tab2')\"\n        >\n          <ion-card-content class=\"ion-no-padding\">\n            <img src=\"assets/svg/reading.svg\" />\n          </ion-card-content>\n          <ion-card-header class=\"ion-no-padding ion-padding-bottom\">\n            <p class=\"ion-no-margin ion-text-center ion-text-bold\">\n              Operational Reading\n            </p>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"3\"></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-keeper/home/home.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-keeper/home/home.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"air-selangor-toolbar\">\n    <div class=\"ion-text-center ion-padding-top\" style=\"font-weight: bold;\">\n      INVENTORY\n    </div>\n\n    <ion-segment [(ngModel)]=\"type\">\n      <ion-segment-button value=\"toreceive\">\n        <ion-label color=\"light\" style=\"font-weight: bold;\"\n          >To Receive</ion-label\n        >\n      </ion-segment-button>\n      <ion-segment-button value=\"delivered\">\n        <ion-label color=\"light\" style=\"font-weight: bold;\"\n          >Delivered</ion-label\n        >\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div [ngSwitch]=\"type\">\n    <div *ngSwitchCase=\"'toreceive'\">\n      <h3 class=\"ion-text-center\">Store Keeper Activity</h3>\n\n      <ion-card *ngFor=\"let toreceive of toreceives\">\n        <ion-item lines=\"none\">\n          <ion-label class=\"ion-text-wrap\">\n            Purchase Order {{ toreceive.purchaseOrder }}<br />Expected Date of\n            Delivery on<br />{{ toreceive.dateDelivery }}\n          </ion-label>\n          <div slot=\"end\">\n            <ion-button color=\"primary\" shape=\"round\" size=\"small\" (click)=\"openList()\"\n              >List of Item</ion-button\n            >\n          </div>\n        </ion-item>\n      </ion-card>\n    </div>\n\n    <div *ngSwitchCase=\"'delivered'\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\" class=\"ion-text-center\">\n            <ion-item>\n              <ion-label position=\"stacked\">Start Date</ion-label>\n              <ion-datetime\n                displayFormat=\"DD-MM-YYYY\"\n                placeholder=\"Select date\"\n              ></ion-datetime>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\" class=\"ion-text-center\">\n            <ion-item>\n              <ion-label position=\"stacked\">End Date</ion-label>\n              <ion-datetime\n                displayFormat=\"DD-MM-YYYY\"\n                placeholder=\"Select date\"\n              ></ion-datetime>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-card>\n        <ion-card-content>\n          <p>Purchase Order 3231414</p>\n          <p>Placed on 04 Apr 2020</p>\n          <p>Paid on 04 Apr 2020</p>\n          <p>Expected Date of Delivery on 20 Apr 2020</p>\n          <hr />\n          <p>CONTACTOR - 32A 240V 4 POLES (SCHNEIDER)</p>\n          <p>EACT000005</p>\n          <p>QTY 2</p>\n          <hr />\n          <p>CONTACTOR (MAGNETIC) - 3TF54 22-OXL2 132kW (SIEMENS)</p>\n          <p>EACT010010</p>\n          <p>QTY 10</p>\n          <hr />\n          <p>CONTACTOR (MAGNETIC) - LC1D50M7</p>\n          <p>EACT010018</p>\n          <p>QTY 1</p>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-supervisor/home/home.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-supervisor/home/home.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"air-selangor-toolbar\">\n    <div class=\"ion-text-center ion-padding-top\" style=\"font-weight: bold;\">\n      INVENTORY\n    </div>\n\n    <ion-segment [(ngModel)]=\"type\">\n      <ion-segment-button value=\"toreceive\">\n        <ion-label color=\"light\" style=\"font-weight: bold;\"\n          >To Receive</ion-label\n        >\n      </ion-segment-button>\n      <ion-segment-button value=\"delivered\">\n        <ion-label color=\"light\" style=\"font-weight: bold;\"\n          >Delivered</ion-label\n        >\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div [ngSwitch]=\"type\">\n    <div *ngSwitchCase=\"'toreceive'\">\n      <h3 class=\"ion-text-center\">Store Supervisor Activity</h3>\n\n      <ion-card *ngFor=\"let toreceive of toreceives\">\n        <ion-item lines=\"none\">\n          <ion-label class=\"ion-text-wrap\">\n            Purchase Order {{ toreceive.purchaseOrder }}<br />Expected Date of\n            Delivery on<br />{{ toreceive.dateDelivery }}\n          </ion-label>\n          <div slot=\"end\">\n            <ion-button color=\"primary\" shape=\"round\" size=\"small\" (click)=\"openList()\"\n              >List of Item</ion-button\n            >\n          </div>\n        </ion-item>\n      </ion-card>\n    </div>\n\n    <div *ngSwitchCase=\"'delivered'\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\" class=\"ion-text-center\">\n            <ion-item>\n              <ion-label position=\"stacked\">Start Date</ion-label>\n              <ion-datetime\n                displayFormat=\"DD-MM-YYYY\"\n                placeholder=\"Select date\"\n              ></ion-datetime>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\" class=\"ion-text-center\">\n            <ion-item>\n              <ion-label position=\"stacked\">End Date</ion-label>\n              <ion-datetime\n                displayFormat=\"DD-MM-YYYY\"\n                placeholder=\"Select date\"\n              ></ion-datetime>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-card>\n        <ion-card-content>\n          <p>Purchase Order 3231414</p>\n          <p>Placed on 04 Apr 2020</p>\n          <p>Paid on 04 Apr 2020</p>\n          <p>Expected Date of Delivery on 20 Apr 2020</p>\n          <hr />\n          <p>CONTACTOR - 32A 240V 4 POLES (SCHNEIDER)</p>\n          <p>EACT000005</p>\n          <p>QTY 2</p>\n          <hr />\n          <p>CONTACTOR (MAGNETIC) - 3TF54 22-OXL2 132kW (SIEMENS)</p>\n          <p>EACT010010</p>\n          <p>QTY 10</p>\n          <hr />\n          <p>CONTACTOR (MAGNETIC) - LC1D50M7</p>\n          <p>EACT010018</p>\n          <p>QTY 1</p>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/home/home.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/home/home.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"ion-no-border toolbar-core\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"homePage('/technical/tabs/tab1')\">\n        <ion-icon src=\"../../../../assets/icon/air-selangor-icon.svg\" style=\"font-size: 2rem\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title style=\"font-weight: bold\"> TAMS Mobile </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"clickLogout()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"openNotification()\">\n        <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n        <ion-badge size=\"small\" color=\"danger\" style=\"position: absolute; right: -5px; top: 1px\">\n          {{ notificationService.totalnotificationbyuser }}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content-core\">\n  <ion-list class=\"list-core\">\n    <ion-list-header>\n      <h3 class=\"ion-no-margin\">\n        <ion-icon name=\"bar-chart\" style=\"display: inline-block; vertical-align: middle\"></ion-icon>\n        <span style=\"\n            display: inline-block;\n            vertical-align: middle;\n            margin-left: 0.7rem;\n          \">Total Work Activity Assign:\n        </span>\n        <ion-badge color=\"primary\" mode=\"ios\" style=\"\n            display: inline-block;\n            vertical-align: middle;\n            margin-left: 0.7rem;\n            font-size: 0.8rem;\n          \">{{ workOrderActComp.length }}</ion-badge>\n      </h3>\n    </ion-list-header>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-card class=\"card-core ion-no-margin\" mode=\"ios\" color=\"success\">\n            <ion-card-content class=\"ion-padding\">\n              <ion-row class=\"ion-no-padding\">\n                <ion-col class=\"ion-no-padding\">\n                  <ion-label class=\"ion-text-center\">\n                    <p>New</p>\n                  </ion-label>\n                </ion-col>\n\n                <ion-col class=\"ion-no-padding\">\n                  <ion-label class=\"ion-text-center\">\n                    <h1>{{ calculateStatus(workOrderActComp,\"New\") }}</h1>\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col> </ion-col>\n\n                <ion-col class=\"ion-no-padding\">\n                  <ion-label class=\"ion-text-right\">\n                    <!-- <ion-badge color=\"medium\"><span>+{{ calculateToday(workOrderActComp,\"New\") }} today</span>\n                    </ion-badge> -->\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n\n        <ion-col>\n          <ion-card class=\"card-core ion-no-margin\" mode=\"ios\" color=\"danger\">\n            <ion-card-content class=\"ion-padding\">\n              <ion-row class=\"ion-no-padding\">\n                <ion-col class=\"ion-no-padding\">\n                  <ion-label class=\"ion-text-center\">\n                    <p>Backlog</p>\n                  </ion-label>\n                </ion-col>\n\n                <ion-col class=\"ion-no-padding\">\n                  <ion-label class=\"ion-text-center\">\n                    <h1>{{ calculateStatus( workOrderActComp,\"BackLog\") }}</h1>\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col> </ion-col>\n\n                <ion-col class=\"ion-no-padding\">\n                  <ion-label class=\"ion-text-right\">\n                    <!-- <ion-badge color=\"medium\"><span>+{{ calculateToday(workOrderActComp,\"Backlog\") }} today</span>\n                    </ion-badge> -->\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-card class=\"card-core ion-no-margin\" mode=\"ios\" color=\"warning\">\n            <ion-card-content class=\"ion-padding\">\n              <ion-row class=\"ion-no-padding\">\n                <ion-col class=\"ion-no-padding\">\n                  <ion-label class=\"ion-text-center\">\n                    <p style=\"color: white\">Active</p>\n                  </ion-label>\n                </ion-col>\n\n                <ion-col class=\"ion-no-padding\">\n                  <ion-label class=\"ion-text-center\">\n                    <h1 style=\"color: white\">\n                      {{ calculateStatus(workOrderActComp,\"InProgress\") }}\n                    </h1>\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col> </ion-col>\n\n                <ion-col class=\"ion-no-padding\">\n                  <ion-label class=\"ion-text-right\">\n                    <!-- <ion-badge color=\"medium\"><span>+{{ calculateToday(workOrderActComp,\"InProgress\") }} today</span>\n                    </ion-badge> -->\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n\n        <ion-col>\n          <ion-card class=\"card-core ion-no-margin\" mode=\"ios\" color=\"tertiary\">\n            <ion-card-content class=\"ion-padding\">\n              <ion-row class=\"ion-no-padding\">\n                <ion-col class=\"ion-no-padding\">\n                  <ion-label class=\"ion-text-center\">\n                    <p>Completed</p>\n                  </ion-label>\n                </ion-col>\n\n                <ion-col class=\"ion-no-padding\">\n                  <ion-label class=\"ion-text-center\">\n                    <h1>{{ calculateStatus(workOrderActComp,\"Completed\") }}</h1>\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col> </ion-col>\n\n                <ion-col class=\"ion-no-padding\">\n                  <ion-label class=\"ion-text-right\">\n                    <!-- <ion-badge color=\"medium\"><span>+{{ calculateToday(workOrderActComp,\"Completed\") }} today</span>\n                    </ion-badge> -->\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-list-header>\n      <h3 class=\"ion-no-margin\">\n        <ion-icon name=\"list\" style=\"vertical-align: middle\"></ion-icon>\n        <span style=\"\n            display: inline-block;\n            vertical-align: middle;\n            margin-left: 0.7rem;\n          \">Task\n        </span>\n      </h3>\n    </ion-list-header>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-card class=\"card-core ion-no-margin\" mode=\"ios\" (click)=\"alertWarning('Work Activity','Coming Soon.')\">\n          <!-- (click)=\"openPage('/technical/maintenance-work-list')\"> -->\n          \n            <ion-card-content class=\"ion-no-padding\">\n              <img src=\"assets/svg/activity.svg\" />\n            </ion-card-content>\n            <ion-card-header class=\"ion-no-padding ion-padding-bottom\">\n              <p class=\"ion-no-margin ion-text-center ion-text-bold\">\n                Work Activity\n              </p>\n            </ion-card-header>\n          </ion-card>\n        </ion-col>\n\n        <ion-col>\n          <ion-card class=\"card-core ion-no-margin\" mode=\"ios\" (click)=\"openPage('/technical/work-request-list')\">\n            <ion-card-content class=\"ion-no-padding\">\n              <img src=\"assets/svg/request.svg\" />\n            </ion-card-content>\n            <ion-card-header class=\"ion-no-padding ion-padding-bottom\">\n              <p class=\"ion-no-margin ion-text-center ion-text-bold\">\n                Work Request\n              </p>\n            </ion-card-header>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-card class=\"card-core ion-no-margin\" mode=\"ios\"\n            (click)=\"openPage('/technical/operational-reading-list')\">\n            <ion-card-content class=\"ion-no-padding\">\n              <img src=\"assets/svg/reading.svg\" />\n            </ion-card-content>\n            <ion-card-header class=\"ion-no-padding ion-padding-bottom\">\n              <p class=\"ion-no-margin ion-text-center ion-text-bold\">\n                Operational Reading\n              </p>\n            </ion-card-header>\n          </ion-card>\n        </ion-col>\n\n        <ion-col>\n          <!-- <ion-card class=\"card-core ion-no-margin\" mode=\"ios\" (click)=\"openPage('/technical/asset-registration-list')\"> -->\n          <ion-card class=\"card-core ion-no-margin\" mode=\"ios\"\n            (click)=\"alertWarning('Asset Registration','Coming Soon.')\">\n            <ion-card-content class=\"ion-no-padding\">\n              <img src=\"assets/svg/registration.svg\" />\n            </ion-card-content>\n            <ion-card-header class=\"ion-no-padding ion-padding-bottom\">\n              <p class=\"ion-no-margin ion-text-center ion-text-bold\">\n                Asset Registration\n              </p>\n            </ion-card-header>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/inventory/home/home-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/inventory/home/home-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/inventory/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() | profile-profile-module */[__webpack_require__.e("common"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null, /*! ../profile/profile.module */ "./src/app/pages/inventory/profile/profile.module.ts")).then(m => m.ProfilePageModule)
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/inventory/home/home.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/inventory/home/home.module.ts ***!
  \*****************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/inventory/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/inventory/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/inventory/home/home.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/inventory/home/home.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-segment-button {\n  --indicator-color: black;\n  --indicator-height: 3px;\n}\n\n.nopaddingstart {\n  --padding-start: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wbnNiL0RvY3VtZW50cy9HaXRIdWIvYWlyc2VsLW1vYmlsZS9zcmMvYXBwL3BhZ2VzL2ludmVudG9yeS9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9pbnZlbnRvcnkvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnZlbnRvcnkvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiBibGFjaztcbiAgLS1pbmRpY2F0b3ItaGVpZ2h0OiAzcHg7XG59XG5cbi5ub3BhZGRpbmdzdGFydCB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xufVxuIiwiaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgLS1pbmRpY2F0b3ItY29sb3I6IGJsYWNrO1xuICAtLWluZGljYXRvci1oZWlnaHQ6IDNweDtcbn1cblxuLm5vcGFkZGluZ3N0YXJ0IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/inventory/home/home.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/inventory/home/home.page.ts ***!
  \***************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let HomePage = class HomePage {
    constructor(alertController, modalController) {
        this.alertController = alertController;
        this.modalController = modalController;
        this.type = "toreceive";
        this.category = "All";
        this.categorys = ["All", "CM", "PM"];
        // lists
        this.pendings = [
            {
                type: "CM",
                date: "14 February 2020",
                desc: "Maintenance need to do at Petaling zone near......",
                color: "success"
            },
            {
                type: "CM",
                date: "12 February 2020",
                desc: "There have a water leakage at Sepang zone that......",
                color: "warning"
            },
            {
                type: "PM",
                date: "13 February 2020",
                desc: "Need to replace components at Kuala Lumpur zone......",
                color: "danger"
            },
            {
                type: "PM",
                date: "11 February 2020",
                desc: "Gombak have a water disrupted at 10.00 am......",
                color: "danger"
            },
        ];
        this.completeds = [
            {
                id: "WORKORDER-2020-00011",
                desc: "Services have been done at Petaling zone at......",
            },
            {
                id: "WORKORDER-2020-00009",
                desc: "Kuala Lumpur service have been completed at......",
            },
            {
                id: "WORKORDER-2020-00007",
                desc: "Sepang zone water disruption have been lifted off at......",
            },
            {
                id: "WORKORDER-2020-00006",
                desc: "Gombak zone have been completely run so far so good......",
            },
            {
                id: "WORKORDER-2020-00005",
                desc: "Hulu Langat area have back to normal......",
            },
        ];
        this.approvals = [
            {
                dateOfSubmission: "2020-03-03",
                assetName: "SLUICE VALVE-SLUICE VALVE-GROUND-200-MM",
                quantity: "11",
                status: "approve",
            },
            {
                dateOfSubmission: "2020-03-02",
                assetName: "SLUICE VALVE-SCOUR VALVE-GROUND-150-MM",
                quantity: "7",
                status: "reject",
            },
            {
                dateOfSubmission: "2020-03-01",
                assetName: "MECHANICAL LEVEL INDICATOR-LEVEL INDICATOR-ABOVE GROUND",
                quantity: "5",
                status: "reject",
            },
            {
                dateOfSubmission: "2020-03-01",
                assetName: "MECHANICAL LEVEL INDICATOR-LEVEL INDICATOR-ABOVE GROUND",
                quantity: "5",
                status: "pending",
            },
            {
                dateOfSubmission: "2020-03-01",
                assetName: "MECHANICAL LEVEL INDICATOR-LEVEL INDICATOR-ABOVE GROUND",
                quantity: "5",
                status: "pending",
            },
        ];
    }
    ngOnInit() {
        this.items = this.pendings;
    }
    initializeItems() {
        this.pendings = this.items;
    }
    categorySelect() {
        this.initializeItems();
        this.pendings = this.pendings.filter((pending) => {
            if (this.category == "All")
                return true;
            else
                return (pending.type.toLowerCase().indexOf(this.category.toLowerCase()) > -1);
        });
    }
    notesAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Notes",
                message: "Your submission is rejected due to wrong asset information. Please resubmit again. Thank you.",
                buttons: ["OK"],
            });
            yield alert.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/inventory/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], HomePage);



/***/ }),

/***/ "./src/app/pages/operator/home/home-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/operator/home/home-routing.module.ts ***!
  \************************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/operator/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() | profile-profile-module */[__webpack_require__.e("common"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null, /*! ../profile/profile.module */ "./src/app/pages/operator/profile/profile.module.ts")).then(m => m.ProfilePageModule)
    },
    {
        path: 'asset-detail',
        loadChildren: () => Promise.all(/*! import() | asset-detail-asset-detail-module */[__webpack_require__.e("default~asset-detail-asset-detail-module~asset-registration-asset-registration-module~form-first-for~d139a6b1"), __webpack_require__.e("default~asset-detail-asset-detail-module~pages-technical-asset-detail-asset-detail-module"), __webpack_require__.e("asset-detail-asset-detail-module")]).then(__webpack_require__.bind(null, /*! ../asset-detail/asset-detail.module */ "./src/app/pages/operator/asset-detail/asset-detail.module.ts")).then(m => m.AssetDetailPageModule)
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/operator/home/home.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/operator/home/home.module.ts ***!
  \****************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/operator/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/operator/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/operator/home/home.page.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/operator/home/home.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29wZXJhdG9yL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/operator/home/home.page.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/operator/home/home.page.ts ***!
  \**************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HomePage = class HomePage {
    constructor(alertController, menu, router) {
        this.alertController = alertController;
        this.menu = menu;
        this.router = router;
    }
    ngOnInit() { }
    openPage(path) {
        this.router.navigate([path]);
    }
    clickLogout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Logout",
                message: "Are you want to logout?",
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        handler: () => { },
                    },
                    {
                        text: "Yes, logout it!",
                        handler: () => {
                            this.router.navigate(["/"]);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    homePage(path) {
        this.router.navigate([path]);
    }
    openNotification() {
        this.menu.enable(true, "menuNotification");
        this.menu.open("menuNotification");
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operator/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/operator/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], HomePage);



/***/ }),

/***/ "./src/app/pages/store-keeper/home/home-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/store-keeper/home/home-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/store-keeper/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() | profile-profile-module */[__webpack_require__.e("common"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null, /*! ../profile/profile.module */ "./src/app/pages/store-keeper/profile/profile.module.ts")).then(m => m.ProfilePageModule)
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/store-keeper/home/home.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/store-keeper/home/home.module.ts ***!
  \********************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/store-keeper/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/store-keeper/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/store-keeper/home/home.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/store-keeper/home/home.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-segment-button {\n  --indicator-color: black;\n  --indicator-height: 3px;\n}\n\n.nopaddingstart {\n  --padding-start: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wbnNiL0RvY3VtZW50cy9HaXRIdWIvYWlyc2VsLW1vYmlsZS9zcmMvYXBwL3BhZ2VzL3N0b3JlLWtlZXBlci9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdG9yZS1rZWVwZXIvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdG9yZS1rZWVwZXIvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiBibGFjaztcbiAgLS1pbmRpY2F0b3ItaGVpZ2h0OiAzcHg7XG59XG5cbi5ub3BhZGRpbmdzdGFydCB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xufVxuIiwiaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgLS1pbmRpY2F0b3ItY29sb3I6IGJsYWNrO1xuICAtLWluZGljYXRvci1oZWlnaHQ6IDNweDtcbn1cblxuLm5vcGFkZGluZ3N0YXJ0IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/store-keeper/home/home.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/store-keeper/home/home.page.ts ***!
  \******************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _list_item_list_item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../list-item/list-item.page */ "./src/app/pages/store-keeper/list-item/list-item.page.ts");




let HomePage = class HomePage {
    constructor(alertController, modalController) {
        this.alertController = alertController;
        this.modalController = modalController;
        this.type = "toreceive";
        this.toreceives = [
            {
                purchaseOrder: "364576",
                dateDelivery: "20 Apr 2020",
            },
            {
                purchaseOrder: "645783",
                dateDelivery: "19 Apr 2020",
            },
            {
                purchaseOrder: "546735",
                dateDelivery: "17 Apr 2020",
            },
            {
                purchaseOrder: "763245",
                dateDelivery: "14 Apr 2020",
            },
            {
                purchaseOrder: "154678",
                dateDelivery: "11 Apr 2020",
            },
        ];
    }
    ngOnInit() { }
    openList() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _list_item_list_item_page__WEBPACK_IMPORTED_MODULE_3__["ListItemPage"]
            });
            return yield modal.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-keeper/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/store-keeper/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], HomePage);



/***/ }),

/***/ "./src/app/pages/store-supervisor/home/home-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/store-supervisor/home/home-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/store-supervisor/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() | profile-profile-module */[__webpack_require__.e("common"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null, /*! ../profile/profile.module */ "./src/app/pages/store-supervisor/profile/profile.module.ts")).then(m => m.ProfilePageModule)
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/store-supervisor/home/home.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/store-supervisor/home/home.module.ts ***!
  \************************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/store-supervisor/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/store-supervisor/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/store-supervisor/home/home.page.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/store-supervisor/home/home.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-segment-button {\n  --indicator-color: black;\n  --indicator-height: 3px;\n}\n\n.nopaddingstart {\n  --padding-start: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wbnNiL0RvY3VtZW50cy9HaXRIdWIvYWlyc2VsLW1vYmlsZS9zcmMvYXBwL3BhZ2VzL3N0b3JlLXN1cGVydmlzb3IvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3RvcmUtc3VwZXJ2aXNvci9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0b3JlLXN1cGVydmlzb3IvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiBibGFjaztcbiAgLS1pbmRpY2F0b3ItaGVpZ2h0OiAzcHg7XG59XG5cbi5ub3BhZGRpbmdzdGFydCB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xufVxuIiwiaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgLS1pbmRpY2F0b3ItY29sb3I6IGJsYWNrO1xuICAtLWluZGljYXRvci1oZWlnaHQ6IDNweDtcbn1cblxuLm5vcGFkZGluZ3N0YXJ0IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/store-supervisor/home/home.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/store-supervisor/home/home.page.ts ***!
  \**********************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _list_item_list_item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../list-item/list-item.page */ "./src/app/pages/store-supervisor/list-item/list-item.page.ts");




let HomePage = class HomePage {
    constructor(alertController, modalController) {
        this.alertController = alertController;
        this.modalController = modalController;
        this.type = "toreceive";
        this.toreceives = [
            {
                purchaseOrder: "364576",
                dateDelivery: "20 Apr 2020",
            },
            {
                purchaseOrder: "645783",
                dateDelivery: "19 Apr 2020",
            },
            {
                purchaseOrder: "546735",
                dateDelivery: "17 Apr 2020",
            },
            {
                purchaseOrder: "763245",
                dateDelivery: "14 Apr 2020",
            },
            {
                purchaseOrder: "154678",
                dateDelivery: "11 Apr 2020",
            },
        ];
    }
    ngOnInit() { }
    openList() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _list_item_list_item_page__WEBPACK_IMPORTED_MODULE_3__["ListItemPage"]
            });
            return yield modal.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-supervisor/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/store-supervisor/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], HomePage);



/***/ }),

/***/ "./src/app/pages/technical/home/home-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/technical/home/home-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/technical/home/home.page.ts");




// import { WorkOrderPage } from '../work-order/work-order.page';
const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    },
    {
    // path: 'work-order',
    // loadChildren: () => import('../work-order/work-order.module').then( m => m.WorkOrderPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() | profile-profile-module */[__webpack_require__.e("common"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null, /*! ../profile/profile.module */ "./src/app/pages/technical/profile/profile.module.ts")).then(m => m.ProfilePageModule)
    },
    {
        path: 'asset-detail',
        loadChildren: () => Promise.all(/*! import() | asset-detail-asset-detail-module */[__webpack_require__.e("default~asset-detail-asset-detail-module~asset-registration-asset-registration-module~form-first-for~d139a6b1"), __webpack_require__.e("default~asset-detail-asset-detail-module~pages-technical-asset-detail-asset-detail-module"), __webpack_require__.e("asset-detail-asset-detail-module")]).then(__webpack_require__.bind(null, /*! ../asset-detail/asset-detail.module */ "./src/app/pages/technical/asset-detail/asset-detail.module.ts")).then(m => m.AssetDetailPageModule)
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/technical/home/home.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/technical/home/home.module.ts ***!
  \*****************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-svg-round-progressbar */ "./node_modules/angular-svg-round-progressbar/dist/index.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/technical/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/technical/home/home.page.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_5__["RoundProgressModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"],
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]],
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/technical/home/home.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/technical/home/home.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlY2huaWNhbC9ob21lL2hvbWUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/technical/home/home.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/technical/home/home.page.ts ***!
  \***************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _inventory_info_inventory_info_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../inventory-info/inventory-info.page */ "./src/app/pages/technical/inventory-info/inventory-info.page.ts");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/notifications/notifications.service */ "./src/app/shared/services/notifications/notifications.service.ts");
/* harmony import */ var src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/users/users.service */ "./src/app/shared/services/users/users.service.ts");
/* harmony import */ var src_app_shared_services_work_activities_work_activities_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/work-activities/work-activities.service */ "./src/app/shared/services/work-activities/work-activities.service.ts");
/* harmony import */ var src_app_shared_services_work_activity_employee_work_activity_employee_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/work-activity-employee/work-activity-employee.service */ "./src/app/shared/services/work-activity-employee/work-activity-employee.service.ts");
/* harmony import */ var src_app_shared_services_work_order_activity_completion_work_order_activity_completion_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/work-order-activity-completion/work-order-activity-completion.service */ "./src/app/shared/services/work-order-activity-completion/work-order-activity-completion.service.ts");












let HomePage = class HomePage {
    constructor(alertController, menu, modalController, router, authService, notificationService, userService, workactivityService, workactivityemployeeService, workOrderActivityCompletionService) {
        this.alertController = alertController;
        this.menu = menu;
        this.modalController = modalController;
        this.router = router;
        this.authService = authService;
        this.notificationService = notificationService;
        this.userService = userService;
        this.workactivityService = workactivityService;
        this.workactivityemployeeService = workactivityemployeeService;
        this.workOrderActivityCompletionService = workOrderActivityCompletionService;
        this.workactivities = [];
        this.userid = '';
        this.workOrderActComp = [];
        console.log("this.authService>>", this.authService);
        console.log("this.authService.userID", this.authService.userID);
        this.userService.getOne(this.authService.userID).subscribe((res) => {
            console.log("authService res", res);
        }, (err) => {
            console.error("err", err);
        });
    }
    ionViewDidEnter() {
        this.userid = this.authService.userID;
        console.log("this.authService.userID ionViewDidEnter", this.authService.userID);
        console.log("ionViewDidEnter HomePage");
        let woacArr;
        // setInterval(() => {
        // this.workOrderActivityCompletionService.get().subscribe(
        let objUser = {
            userid: this.authService.userID
        };
        this.workOrderActivityCompletionService.asc_ordered_list(objUser).subscribe((res) => {
            console.log("res", res);
            woacArr = res;
            woacArr.forEach(element => {
                if (element['bo_status_cd'] == 'COMPLETE') {
                    let obj = {
                        status: 'Completed'
                    };
                    element['status'] = "Completed";
                    console.log("woac-element", element.status);
                    this.workOrderActivityCompletionService.update(element['id'], obj).subscribe((resUp) => { console.log("resUp", resUp); }, (errUp) => { console.log("errUp", errUp); });
                }
                else if (element['bo_status_cd'] == 'CANCELED') {
                    let obj = {
                        status: 'Cancelled'
                    };
                    element.status = 'Cancelled';
                    console.log("woac-element", element.status);
                    this.workOrderActivityCompletionService.update(element['id'], obj).subscribe((resUp) => { console.log("resUp", resUp); }, (errUp) => { console.log("errUp", errUp); });
                }
                if (element.required_by_dt < this.getCurrentDateTime()) {
                    if (element['status'] != 'Completed' && element['status'] != 'BackLog' && element['bo_status_cd'] == 'ACTIVE') {
                        let obj = {
                            status: 'BackLog'
                        };
                        element.status = 'BackLog';
                        //this.workactivities.push(element)
                        this.workOrderActivityCompletionService.update(element['id'], obj).subscribe((resUp) => {
                            // console.log("resUp", resUp)
                        }, (errUp) => {
                            // console.log("errUp", errUp)
                        });
                    }
                    else {
                        console.log("Completed");
                        //this.workactivities.push(element)
                    }
                }
                else {
                    console.log("New");
                    //this.workactivities.push(element)
                }
                this.workactivities.push(element);
            });
        }, (err) => {
            console.error("err", err);
        });
        // }, 10000);
        this.workactivityemployeeService
            .get_dashboard_status_statistic({
            employee_id: this.authService.userID,
        })
            .subscribe((res) => {
            this.workorderactivitycompletionstatus = res;
        });
    }
    getCurrentDateTime() {
        let selectedDate = new Date();
        let year = selectedDate.getFullYear();
        let month = selectedDate.getMonth() + 1 < 10
            ? "0" + (selectedDate.getMonth() + 1)
            : selectedDate.getMonth() + 1;
        let day = selectedDate.getDate() < 10
            ? "0" + selectedDate.getDate()
            : selectedDate.getDate();
        let formatDate = year + "-" + month + "-" + day;
        let hour = selectedDate.getHours() < 10
            ? "0" + selectedDate.getHours()
            : selectedDate.getHours();
        let minute = selectedDate.getMinutes() < 10
            ? "0" + selectedDate.getMinutes()
            : selectedDate.getMinutes();
        let second = selectedDate.getSeconds() < 10
            ? "0" + selectedDate.getSeconds()
            : selectedDate.getSeconds();
        let formatTime = hour + ":" + minute + ":" + second;
        // return formatDate + "T" + formatTime + "Z";
        return formatDate;
    }
    ngOnInit() {
        console.log("this.authService.userID ngOnInit", this.authService.userID);
        let objUser = {
            userid: this.authService.userID
        };
        this.getWorkActivities(objUser);
        setInterval(() => {
            this.getWorkActivities(objUser);
        }, 10000);
    }
    initializeItems() { }
    notesAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Notes",
                message: "Your submission is rejected due to wrong asset information. Please resubmit again. Thank you.",
                buttons: ["OK"],
            });
            yield alert.present();
        });
    }
    getWorkActivities(objUser) {
        let array = [];
        let userId = this.authService.userID;
        console.log("userId >>>>>>>>>", userId);
        this.workOrderActivityCompletionService.asc_ordered_list(objUser).subscribe((res) => {
            console.log("workOrderActivityCompletionService_res", res);
            res.forEach(function (data) {
                console.log('test7', data.bo_status_cd);
                if (data.bo_status_cd != "COMPLETE" && data.bo_status_cd != "CANCELED") {
                    if (data.field_2 == userId || data.field_2 == '') {
                        array.push(data);
                    }
                    else {
                        //console.log('tak sama user id')
                    }
                }
            });
            this.workOrderActComp = array;
            //this.workOrderActComp = res
        }, (err) => {
            console.error("err", err);
        }, () => {
            console.log("Http request is completed");
        });
    }
    openInfo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const myModal = yield this.modalController.create({
                component: _inventory_info_inventory_info_page__WEBPACK_IMPORTED_MODULE_5__["InventoryInfoPage"],
                cssClass: "my-custom-modal-css",
            });
            return yield myModal.present();
        });
    }
    openPage(route) {
        this.router.navigate([route]);
    }
    clickLogout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Logout",
                message: "Are you want to logout?",
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        handler: () => { },
                    },
                    {
                        text: "Yes, logout it!",
                        handler: () => {
                            this.router.navigate(["/"]);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    calculateStatus(array, status) {
        // console.log("calculateStatus array>>>", array)
        // console.log("temparray=====", array)
        // console.log("status=====", status)
        // let count = 0;
        // for (let i = 0; i < this.workactivities.length; i++) {
        //   if (this.workactivities[i].bo_status === status) count++;
        // }
        // return count;
        // Overall status
        // if (this.workorderactivitycompletionstatus) {
        //   if (this.workorderactivitycompletionstatus.queryset_overall.length > 0) {
        //     let result =
        //       this.workorderactivitycompletionstatus.queryset_overall.find(
        //         (obj) => {
        //           return obj.status == status;
        //         }
        //       );
        //     if (result) {
        //       return result.total_status ? result.total_status : 0;
        //     } else return 0;
        //   } else return 0;
        // } else return 0;
        if (array.length > 0) {
            let tempArray = array.filter(function (data) {
                if (data.status
                    .toLowerCase()
                    .indexOf(status.toLowerCase()) !== -1)
                    return true;
                return false;
            });
            return tempArray.length > 0 ? tempArray.length : 0;
        }
        else {
            return 0;
        }
    }
    calculateToday(status) {
        // let count = 0;
        // for (let i = 0; i < this.workactivities.length; i++) {
        //   if (this.workactivities[i].bo_status === status) {
        //     let received_date = this.datePipe.transform(
        //       this.workactivities[i].record_date,
        //       "yyyy-MM-dd"
        //     );
        //     let to_date = this.datePipe.transform(new Date(), "yyyy-MM-dd");
        //     if (received_date === to_date) count++;
        //   }
        // }
        // return count;
        // Today status
        if (this.workorderactivitycompletionstatus) {
            if (this.workorderactivitycompletionstatus.queryset_today.length > 0) {
                let result = this.workorderactivitycompletionstatus.queryset_today.find((obj) => {
                    return obj.status == status;
                });
                if (result) {
                    return result.total_status ? result.total_status : 0;
                }
                else
                    return 0;
            }
            else
                return 0;
        }
        else
            return 0;
    }
    homePage(path) {
        this.router.navigate([path]);
    }
    openNotification() {
        this.menu.enable(true, "menuNotification");
        this.menu.open("menuNotification");
    }
    alertWarning(header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
                buttons: ['ok'],
            });
            yield alert.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_7__["NotificationsService"] },
    { type: src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"] },
    { type: src_app_shared_services_work_activities_work_activities_service__WEBPACK_IMPORTED_MODULE_9__["WorkActivitiesService"] },
    { type: src_app_shared_services_work_activity_employee_work_activity_employee_service__WEBPACK_IMPORTED_MODULE_10__["WorkActivityEmployeeService"] },
    { type: src_app_shared_services_work_order_activity_completion_work_order_activity_completion_service__WEBPACK_IMPORTED_MODULE_11__["WorkOrderActivityCompletionService"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/technical/home/home.page.html")).default,
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/technical/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_7__["NotificationsService"],
        src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"],
        src_app_shared_services_work_activities_work_activities_service__WEBPACK_IMPORTED_MODULE_9__["WorkActivitiesService"],
        src_app_shared_services_work_activity_employee_work_activity_employee_service__WEBPACK_IMPORTED_MODULE_10__["WorkActivityEmployeeService"],
        src_app_shared_services_work_order_activity_completion_work_order_activity_completion_service__WEBPACK_IMPORTED_MODULE_11__["WorkOrderActivityCompletionService"]])
], HomePage);



/***/ }),

/***/ "./src/app/shared/services/users/users.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/users/users.service.ts ***!
  \********************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let UsersService = class UsersService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/users/";
        // Data
        this.umodels = [];
    }
    post(body) {
        return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("UsersModel", res);
        }));
    }
    get() {
        return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("UsersModel", res);
            this.umodels = res;
        }));
    }
    getOne(id) {
        let urlID = this.url + id + "/";
        return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("UsersModel", res);
            this.umodel = res;
        }));
    }
    update(body, id) {
        let urlUpdate = this.url + id + "/";
        console.log("urlUpdate", urlUpdate);
        return this.http.patch(urlUpdate, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("UsersModel", res);
        }));
    }
    delete(id) {
        return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("UsersModel", res);
        }));
    }
    filter(field) {
        let urlFilter = this.url + "?" + field;
        console.log("urlFilter", urlFilter);
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("UsersModel", res);
        }));
    }
};
UsersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], UsersService);



/***/ }),

/***/ "./src/app/shared/services/work-activities/work-activities.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/services/work-activities/work-activities.service.ts ***!
  \****************************************************************************/
/*! exports provided: WorkActivitiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkActivitiesService", function() { return WorkActivitiesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let WorkActivitiesService = class WorkActivitiesService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/work-activities/";
        // Data
        this.wamodels = [];
    }
    post(body) {
        return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkActivitiesModel", res);
        }));
    }
    get() {
        return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkActivitiesModel", res);
            this.wamodels = res;
        }));
    }
    getOne(id) {
        let urlID = this.url + id + "/";
        return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkActivitiesModel", res);
            this.wamodel = res;
        }));
    }
    update(id, body) {
        return this.http.patch(this.url + id + '/', body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkActivitiesModel", res);
        }));
    }
    delete(id) {
        return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkActivitiesModel", res);
        }));
    }
    filter(field) {
        let urlFilter = this.url + "?" + field;
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkActivitiesModel", res);
        }));
    }
};
WorkActivitiesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
WorkActivitiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], WorkActivitiesService);



/***/ }),

/***/ "./src/app/shared/services/work-activity-employee/work-activity-employee.service.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/services/work-activity-employee/work-activity-employee.service.ts ***!
  \******************************************************************************************/
/*! exports provided: WorkActivityEmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkActivityEmployeeService", function() { return WorkActivityEmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let WorkActivityEmployeeService = class WorkActivityEmployeeService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/work-activity-employee/";
        // Data
        this.watmodels = [];
    }
    post(body) {
        return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkActivityEmployee", res);
        }));
    }
    get() {
        return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkActivityEmployee", res);
            this.watmodels = res;
        }));
    }
    getOne(id) {
        let urlID = this.url + id + "/";
        return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkActivityEmployee", res);
            this.watmodel = res;
        }));
    }
    update(body) {
        return this.http.patch(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkActivityEmployee", res);
        }));
    }
    delete(id) {
        return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkActivityEmployee", res);
        }));
    }
    filter(field) {
        let urlFilter = this.url + "?" + field;
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkActivityEmployee", res);
        }));
    }
    get_dashboard_status_statistic(body) {
        let url = this.url + "get_dashboard_status_statistic/";
        return this.http.post(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            // console.log("WorkActivityEmployee", res);
        }));
    }
};
WorkActivityEmployeeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
WorkActivityEmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], WorkActivityEmployeeService);



/***/ }),

/***/ "./src/app/shared/services/work-order-activity-completion/work-order-activity-completion.service.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/shared/services/work-order-activity-completion/work-order-activity-completion.service.ts ***!
  \**********************************************************************************************************/
/*! exports provided: WorkOrderActivityCompletionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOrderActivityCompletionService", function() { return WorkOrderActivityCompletionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let WorkOrderActivityCompletionService = class WorkOrderActivityCompletionService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/work-order-activity-completion/";
        // Data
        this.wamodels = [];
    }
    post(body) {
        return this.http.post(this.url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkOrderActivityCompletionModel", res);
        }));
    }
    get() {
        return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkOrderActivityCompletionModel", res);
            this.wamodels = res;
        }));
    }
    getOne(id) {
        let urlID = this.url + id + "/";
        return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkOrderActivityCompletionModel", res);
            this.wamodel = res;
        }));
    }
    update(id, body) {
        return this.http
            .patch(this.url + id + "/", body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkOrderActivityCompletionModel", res);
        }));
    }
    delete(id) {
        return this.http.delete(this.url + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkOrderActivityCompletionModel", res);
        }));
    }
    filter(field) {
        let urlFilter = this.url + "?" + field;
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkOrderActivityCompletionModel", res);
        }));
    }
    get_dashboard_status_statistic(body) {
        let url = this.url + "get_dashboard_status_statistic/";
        return this.http.post(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            // console.log("WorkOrderActivityCompletionModel", res);
        }));
    }
    asc_ordered_list(body) {
        let urlOrdered = this.url + "asc_ordered_list/";
        return this.http.post(urlOrdered, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log("WorkOrderActivityCompletionModel", res);
        }));
    }
};
WorkOrderActivityCompletionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
WorkOrderActivityCompletionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], WorkOrderActivityCompletionService);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map