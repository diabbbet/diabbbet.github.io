(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/slider/slider.component.ts");




var routes = [
    { path: 'slider', component: _slider_slider_component__WEBPACK_IMPORTED_MODULE_3__["SliderComponent"] },
    { path: '**', redirectTo: 'slider' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\n  min-height: 100vh;\n  padding: 48px 0;\n  background-color: #5D6FFF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXHdvcmtcXHRlc3RvZ3JhbS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2YsMEJBQXlCLEVBQzFCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHBhZGRpbmc6IDQ4cHggMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUQ2RkZGO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/slider/slider.component.ts");
/* harmony import */ var _slider_slider_item_slider_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./slider/slider-item/slider-item.component */ "./src/app/slider/slider-item/slider-item.component.ts");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/services.module */ "./src/app/services/services.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _slider_slider_component__WEBPACK_IMPORTED_MODULE_6__["SliderComponent"],
                _slider_slider_item_slider_item_component__WEBPACK_IMPORTED_MODULE_7__["SliderItemComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _services_services_module__WEBPACK_IMPORTED_MODULE_8__["ServicesModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/services.module.ts":
/*!*********************************************!*\
  !*** ./src/app/services/services.module.ts ***!
  \*********************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _slider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider.service */ "./src/app/services/slider.service.ts");



var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [],
            providers: [
                _slider_service__WEBPACK_IMPORTED_MODULE_2__["SliderService"]
            ],
        })
    ], ServicesModule);
    return ServicesModule;
}());



/***/ }),

/***/ "./src/app/services/slider.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/slider.service.ts ***!
  \********************************************/
/*! exports provided: SliderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderService", function() { return SliderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SliderService = /** @class */ (function () {
    function SliderService(httpClient) {
        this.httpClient = httpClient;
        this.apiKey = '93b9a81026a4a9128cefd16ccfdc478f3caa894e3312abd50ca78b5bb783e0f8';
    }
    SliderService.prototype.getRandomPhoto = function (count) {
        var quantity = count ? "&count=" + count : '';
        return this.httpClient.get("https://api.unsplash.com/photos/random?client_id=" + this.apiKey + quantity);
    };
    SliderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SliderService);
    return SliderService;
}());



/***/ }),

/***/ "./src/app/shared/button/button.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/button/button.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button\"\n  (click)=\"click()\"\n>{{ text }}</div>"

/***/ }),

/***/ "./src/app/shared/button/button.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/button/button.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\n  font-size: 20px;\n  line-height: 24px;\n  font-weight: 700;\n  text-align: center;\n  background-color: #fff;\n  padding: 12px;\n  border-radius: 12px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3); }\n  @media (hover: hover) {\n    .button:hover {\n      background-color: #e6e5e5; }\n    .button:active {\n      background-color: #cccccc; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2J1dHRvbi9DOlxcd29ya1xcdGVzdG9ncmFtL3NyY1xcYXBwXFxzaGFyZWRcXGJ1dHRvblxcYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQix1QkFBc0I7RUFDdEIsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQixnQkFBZTtFQUNmLDBCQUFpQjtLQUFqQix1QkFBaUI7TUFBakIsc0JBQWlCO1VBQWpCLGtCQUFpQjtFQUNqQix3Q0FBcUMsRUFXdEM7RUFUQztJQVpGO01BY00sMEJBQW1DLEVBQ3BDO0lBZkw7TUFrQk0sMEJBQW1DLEVBQ3BDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMCAwIDQwcHggcmdiYSgwLDAsMCwgMC4zKTtcclxuXHJcbiAgQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oI2ZmZiwgMTAlKTtcclxuICAgIH1cclxuICBcclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCNmZmYsIDIwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/shared/button/button.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/button/button.component.ts ***!
  \***************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.clickBtn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ButtonComponent.prototype.ngOnInit = function () {
    };
    ButtonComponent.prototype.click = function () {
        this.clickBtn.emit({ type: 'button', name: this.text });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ButtonComponent.prototype, "text", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ButtonComponent.prototype, "clickBtn", void 0);
    ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-button',
            template: __webpack_require__(/*! ./button.component.html */ "./src/app/shared/button/button.component.html"),
            styles: [__webpack_require__(/*! ./button.component.scss */ "./src/app/shared/button/button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/shared/input/input.component.html":
/*!***************************************************!*\
  !*** ./src/app/shared/input/input.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"input\"\n  [class.with-select]=\"select\"\n>\n  <input\n    type=\"text\"\n    [placeholder]=\"placeholder\"\n    (keydown)=\"inputKeydown($event)\"\n    (input)=\"inputChange($event)\"\n  >\n\n  <select\n    *ngIf=\"select\"\n    (change)=\"selectChange($event)\"\n  >\n    <option value=\"px\">px</option>\n    <option value=\"%\">%</option>\n  </select>\n</div>\n\n"

/***/ }),

/***/ "./src/app/shared/input/input.component.scss":
/*!***************************************************!*\
  !*** ./src/app/shared/input/input.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\n  display: flex; }\n  .input input {\n    flex: 1;\n    font-size: 20px;\n    line-height: 24px;\n    font-weight: 700;\n    width: 100%;\n    background-color: #fff;\n    border-radius: 12px;\n    box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);\n    padding: 12px;\n    border: none; }\n  .input.with-select input {\n    border-radius: 12px 0 0 12px; }\n  .input select {\n    font-size: 20px;\n    line-height: 24px;\n    color: #757575;\n    font-weight: 700;\n    padding: 12px;\n    width: 48px;\n    border: none;\n    border-left: 1px solid #757575;\n    border-radius: 0 12px 12px 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -o-appearance: none;\n    appearance: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2lucHV0L0M6XFx3b3JrXFx0ZXN0b2dyYW0vc3JjXFxhcHBcXHNoYXJlZFxcaW5wdXRcXGlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYSxFQW9DZDtFQXJDRDtJQUlJLFFBQU87SUFDUCxnQkFBZTtJQUNmLGtCQUFpQjtJQUNqQixpQkFBZ0I7SUFDaEIsWUFBVztJQUNYLHVCQUFzQjtJQUN0QixvQkFBbUI7SUFDbkIsd0NBQXFDO0lBQ3JDLGNBQWE7SUFDYixhQUFZLEVBQ2I7RUFkSDtJQWtCTSw2QkFBNEIsRUFDN0I7RUFuQkw7SUF1QkksZ0JBQWU7SUFDZixrQkFBaUI7SUFDakIsZUFBYztJQUNkLGlCQUFnQjtJQUNoQixjQUFhO0lBQ2IsWUFBVztJQUNYLGFBQVk7SUFDWiwrQkFBOEI7SUFDOUIsNkJBQTRCO0lBQzVCLHlCQUF3QjtJQUN4QixzQkFBcUI7SUFDckIsb0JBQW1CO0lBQ25CLGlCQUFnQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9pbnB1dC9pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgaW5wdXQge1xyXG4gICAgZmxleDogMTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCByZ2JhKDAsMCwwLCAwLjMpO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcblxyXG4gICYud2l0aC1zZWxlY3Qge1xyXG4gICAgaW5wdXQge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4IDAgMCAxMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VsZWN0IHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNzU3NTc1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAxMnB4IDEycHggMDtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1vLWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/input/input.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/input/input.component.ts ***!
  \*************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputComponent = /** @class */ (function () {
    function InputComponent() {
        this.placeholder = 'enter data';
        this.changeInput = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    InputComponent.prototype.ngOnInit = function () {
    };
    InputComponent.prototype.inputChange = function (event) {
        this.changeInput.emit({ type: 'input', name: this.placeholder, value: event.target.value });
    };
    InputComponent.prototype.selectChange = function (event) {
        this.changeInput.emit({ type: 'input', name: this.select, value: event.target.value });
    };
    InputComponent.prototype.inputKeydown = function (event) {
        console.log(event);
        if (event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode === 189 || event.keyCode === 187) {
            return false;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputComponent.prototype, "placeholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputComponent.prototype, "select", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputComponent.prototype, "changeInput", void 0);
    InputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input',
            template: __webpack_require__(/*! ./input.component.html */ "./src/app/shared/input/input.component.html"),
            styles: [__webpack_require__(/*! ./input.component.scss */ "./src/app/shared/input/input.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputComponent);
    return InputComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button/button.component */ "./src/app/shared/button/button.component.ts");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input/input.component */ "./src/app/shared/input/input.component.ts");





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"], _input_input_component__WEBPACK_IMPORTED_MODULE_4__["InputComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"], _input_input_component__WEBPACK_IMPORTED_MODULE_4__["InputComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/slider/slider-item/slider-item.component.html":
/*!***************************************************************!*\
  !*** ./src/app/slider/slider-item/slider-item.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"slider-item\"\n  [style.background-image]=\"background\"\n  [style.width.px]=\"size\"\n  [style.height.px]=\"size\"\n  [style.border-radius]=\"cornerRadius + cornerRadiusType\"\n></div>"

/***/ }),

/***/ "./src/app/slider/slider-item/slider-item.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/slider/slider-item/slider-item.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slider-item {\n  margin: 0 8px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2xpZGVyL3NsaWRlci1pdGVtL0M6XFx3b3JrXFx0ZXN0b2dyYW0vc3JjXFxhcHBcXHNsaWRlclxcc2xpZGVyLWl0ZW1cXHNsaWRlci1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYTtFQUNiLHVCQUFzQjtFQUN0Qiw2QkFBNEI7RUFDNUIsbUNBQWtDLEVBQ25DIiwiZmlsZSI6InNyYy9hcHAvc2xpZGVyL3NsaWRlci1pdGVtL3NsaWRlci1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNsaWRlci1pdGVtIHtcclxuICBtYXJnaW46IDAgOHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/slider/slider-item/slider-item.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/slider/slider-item/slider-item.component.ts ***!
  \*************************************************************/
/*! exports provided: SliderItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderItemComponent", function() { return SliderItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SliderItemComponent = /** @class */ (function () {
    function SliderItemComponent() {
    }
    SliderItemComponent.prototype.ngOnChanges = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SliderItemComponent.prototype, "background", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SliderItemComponent.prototype, "size", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SliderItemComponent.prototype, "cornerRadius", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SliderItemComponent.prototype, "cornerRadiusType", void 0);
    SliderItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slider-item',
            template: __webpack_require__(/*! ./slider-item.component.html */ "./src/app/slider/slider-item/slider-item.component.html"),
            styles: [__webpack_require__(/*! ./slider-item.component.scss */ "./src/app/slider/slider-item/slider-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SliderItemComponent);
    return SliderItemComponent;
}());



/***/ }),

/***/ "./src/app/slider/slider.component.html":
/*!**********************************************!*\
  !*** ./src/app/slider/slider.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"slider\">\n  <div class=\"slider__content\">\n    <div class=\"slider__title\">testogram</div>\n\n    <div class=\"slider__items\"\n      [style.transform]=\"'translateX('+ -((16 + (size*1)) * activeIndex) +'px)'\"\n    >\n      <app-slider-item class=\"slider__item\"\n        *ngFor=\"let item of backgrounds; index as i;\"\n        [background]=\"item\"\n        [size]=\"size\"\n        [cornerRadius]=\"cornerRadius\"\n        [cornerRadiusType]=\"cornerRadiusType\"\n        [class.active]=\"i === activeIndex\"\n      ></app-slider-item>\n    </div>\n  </div>\n\n  <div class=\"slider__controlls\">\n    <div class=\"slider__controlls-item\"\n      *ngFor=\"let item of controllsConfig\"\n      [class.half]=\"item.half\"\n    >\n      <app-button\n        *ngIf=\"item.type === 'button'\"\n        [text]=\"item.name\"\n        (clickBtn)=\"actioncontroll($event)\"\n      ></app-button>\n\n      <app-input\n        *ngIf=\"item.type === 'input'\"\n        [select]=\"item.select\"\n        [placeholder]=\"item.name\"\n        (changeInput)=\"actioncontroll($event)\"\n      ></app-input>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/slider/slider.component.scss":
/*!**********************************************!*\
  !*** ./src/app/slider/slider.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slider {\n  max-width: 320px;\n  margin: auto; }\n  .slider__content {\n    width: 100%;\n    padding: 24px 0 72px;\n    border-radius: 12px;\n    background-color: #fff;\n    box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);\n    overflow: hidden; }\n  .slider__title {\n    font-size: 20px;\n    line-height: 24px;\n    font-weight: 700;\n    text-align: center;\n    padding: 0 16px; }\n  .slider__items {\n    display: flex;\n    margin: 24px 0 0;\n    padding: 0 8px;\n    transition: 200ms; }\n  .slider__item {\n    opacity: 0;\n    transition: 200ms; }\n  .slider__item.active {\n      opacity: 1; }\n  .slider__item.active + .slider__item {\n        opacity: 0.8; }\n  .slider__item.active + .slider__item + .slider__item {\n          opacity: 0.6; }\n  .slider__item.active + .slider__item + .slider__item + .slider__item {\n            opacity: 0.4; }\n  .slider__item.active + .slider__item + .slider__item + .slider__item + .slider__item {\n              opacity: 0.2; }\n  .slider__controlls {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between; }\n  .slider__controlls-item {\n      width: 100%;\n      margin: 24px 0 0; }\n  .slider__controlls-item.half {\n        width: calc(50% - 12px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2xpZGVyL0M6XFx3b3JrXFx0ZXN0b2dyYW0vc3JjXFxhcHBcXHNsaWRlclxcc2xpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWdCO0VBQ2hCLGFBQVksRUFpRWI7RUEvREM7SUFDRSxZQUFXO0lBQ1gscUJBQW9CO0lBQ3BCLG9CQUFtQjtJQUNuQix1QkFBc0I7SUFDdEIsd0NBQXFDO0lBQ3JDLGlCQUFnQixFQUNqQjtFQUVEO0lBQ0UsZ0JBQWU7SUFDZixrQkFBaUI7SUFDakIsaUJBQWdCO0lBQ2hCLG1CQUFrQjtJQUNsQixnQkFBZSxFQUNoQjtFQUVEO0lBQ0UsY0FBYTtJQUNiLGlCQUFnQjtJQUNoQixlQUFjO0lBQ2Qsa0JBQWlCLEVBQ2xCO0VBRUQ7SUFDRSxXQUFVO0lBQ1Ysa0JBQWlCLEVBcUJsQjtFQXZCQTtNQUtHLFdBQVUsRUFpQlg7RUF0QkY7UUFRSyxhQUFZLEVBYWI7RUFyQko7VUFXTyxhQUFZLEVBU2I7RUFwQk47WUFjUyxhQUFZLEVBS2I7RUFuQlI7Y0FpQlcsYUFBWSxFQUNiO0VBT1g7SUFDRSxjQUFhO0lBQ2IsZ0JBQWU7SUFDZiwrQkFBOEIsRUFVL0I7RUFSQztNQUNFLFlBQVc7TUFDWCxpQkFBZ0IsRUFLakI7RUFQQTtRQUtHLHdCQUF1QixFQUN4QiIsImZpbGUiOiJzcmMvYXBwL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGVyIHtcclxuICBtYXgtd2lkdGg6IDMyMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuXHJcbiAgJl9fY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDI0cHggMCA3MnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCByZ2JhKDAsMCwwLCAwLjMpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gICZfX3RpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICB9XHJcblxyXG4gICZfX2l0ZW1zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDI0cHggMCAwO1xyXG4gICAgcGFkZGluZzogMCA4cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAyMDBtcztcclxuICB9XHJcblxyXG4gICZfX2l0ZW0ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IDIwMG1zO1xyXG5cclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuXHJcbiAgICAgICYgKyAuc2xpZGVyX19pdGVtIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjg7XHJcblxyXG4gICAgICAgICYgKyAuc2xpZGVyX19pdGVtIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuXHJcbiAgICAgICAgICAmICsgLnNsaWRlcl9faXRlbSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNDtcclxuXHJcbiAgICAgICAgICAgICYgKyAuc2xpZGVyX19pdGVtIHtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2NvbnRyb2xscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICYtaXRlbSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDI0cHggMCAwO1xyXG5cclxuICAgICAgJi5oYWxmIHtcclxuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMnB4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/slider/slider.component.ts":
/*!********************************************!*\
  !*** ./src/app/slider/slider.component.ts ***!
  \********************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_slider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/slider.service */ "./src/app/services/slider.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var SliderComponent = /** @class */ (function () {
    function SliderComponent(sliderService, activatedRoute, sanitizer) {
        this.sliderService = sliderService;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
        this.count = '5';
        this.size = '120';
        this.cornerRadius = '12';
        this.cornerRadiusType = 'px';
        this.backgrounds = [];
        this.activeIndex = 0;
        this.controllsConfig = [
            { type: 'button', name: 'prev', half: true },
            { type: 'button', name: 'next', half: true },
            { type: 'button', name: 'add square', half: false },
            { type: 'input', name: 'size', half: false },
            { type: 'input', name: 'corner radius', half: false, select: 'select' }
        ];
    }
    SliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (params.count) {
                _this.count = params.count;
            }
            _this.generateBackgrounds(_this.count);
        });
    };
    SliderComponent.prototype.actioncontroll = function (event) {
        if (event.type === 'button') {
            switch (event.name) {
                case 'prev':
                    this.moveEvent(-1);
                    break;
                case 'next':
                    this.moveEvent(1);
                    break;
                case 'add square':
                    this.generateBackgrounds('1');
                    break;
            }
        }
        else if (event.type === 'input') {
            switch (event.name) {
                case 'size':
                    if (event.value !== '') {
                        this.size = event.value;
                    }
                    break;
                case 'corner radius':
                    if (event.value !== '') {
                        this.cornerRadius = event.value;
                    }
                    break;
                case 'select':
                    this.cornerRadiusType = event.value;
                    break;
            }
        }
    };
    SliderComponent.prototype.generateBackgrounds = function (count) {
        var _this = this;
        this.sliderService.getRandomPhoto(count).subscribe(function (res) {
            var backgrounds = res.map(function (item) { return _this.sanitizer.bypassSecurityTrustStyle("url(" + item.urls.small + ")"); });
            _this.backgrounds = backgrounds.concat(_this.backgrounds);
        });
    };
    SliderComponent.prototype.moveEvent = function (value) {
        var activeIndex = this.activeIndex + value;
        if (activeIndex < 0) {
            activeIndex = 0;
        }
        if (activeIndex > (this.backgrounds.length - 1)) {
            activeIndex = this.backgrounds.length - 1;
        }
        this.activeIndex = activeIndex;
    };
    SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.scss */ "./src/app/slider/slider.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_slider_service__WEBPACK_IMPORTED_MODULE_2__["SliderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\work\testogram\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map