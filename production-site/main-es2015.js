(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- nav -->\n<nav class=\"navbar navbar-expand navbar-dark bg-dark sticky-top\" *ngIf=\"currentUser\">\n  <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link\" routerLink=\"/\">Home</a>\n      <a class=\"nav-item nav-link\" (click)=\"logout()\">Logout</a>\n      <a class=\"nav-item nav-link\" >Hi {{currentUser.firstName}} {{currentUser.lastName}}, ({{currentUser.username}})</a>\n  </div>\n</nav>\n\n<!-- main app container -->\n\n<div class=\"container\">\n    <alert></alert>\n    <router-outlet></router-outlet>\n</div>\n\n<!-- credits -->\n<div class=\"text-center\">\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/alert.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/alert.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"message.cssClass\">{{message.text}}</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n<div class=\"modal-body row\">\n\n    <div class=\"col-md-5\">\n        <div class=\"jumbotron\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 text-center\">\n                    <h1>Hi {{currentUser.firstName}}, ({{currentUser.username}})!</h1>\n                </div>\n            </div>\n        </div>\n        <div class=\"jumbotron\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <tweet-creator></tweet-creator>\n                </div>\n            </div>\n        </div>\n    \n    </div>\n\n    <div class=\"col-md-7\">\n        <app-tweet-handler></app-tweet-handler>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n    <div class=\"wrapper\">\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" class=\"form-signin\">\n            <h2 class=\"form-signin-heading\">Login</h2>\n            <hr class=\"colorgraph\"><br>\n            <div class=\"form-group\">\n                <label for=\"username\">Username</label>\n                <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <button [disabled]=\"loading\" class=\"btn btn-primary \">\n                    <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                    Login\n                </button>\n                <a routerLink=\"/register\" class=\"btn btn-link\">Register</a>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\" class=\"form-signin\">\n        <h2 class=\"form-signin-heading\">Register</h2>\n        <hr class=\"colorgraph\"><br>\n        <div class=\"form-group\">\n            <label for=\"firstName\">First Name</label>\n            <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n            <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"lastName\">Last Name</label>\n            <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n            <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n            <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.username.errors.required\">Username is required</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">\n                <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                Register\n            </button>\n            <a routerLink=\"/login\" class=\"btn btn-link\">Cancel</a>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tweet-handler/tweet-handler.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tweet-handler/tweet-handler.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- Tweets panel -->\n\n<h2>Filter by: {{listFilter}} </h2>\n\n<div class=\"input-group mb-3\">\n  <div class=\"input-group-prepend\">\n    <span class=\"input-group-text\" id=\"basic-addon1\">#</span>\n  </div>\n  <input type=\"text\" [(ngModel)]='listFilter' class=\"form-control\" placeholder=\"#TheTweeter\" />\n</div>\n\n<div class=\"row mb-4\">\n  <div class=\"col-md-12 border border-light border-0\">\n    \n    \n  </div>\n</div>\n\n<!-- Tweets list -->\n\n<div class=\"row mb-4\" \n  *ngFor=\"let tweet of tweet_list_filter\">\n  <div class=\"col-md-2 border border-light border-0 jumbotron\" \n    id=\"left_body\" >\n    <!-- style=\"background-color: #123c60;\" > -->\n\n  <!-- this part is only for the comment specification, it contains\n  the user photo and the tags used on the comment.\n\n  photo\n\n  tags\n\n  Persons -->\n  <div class=\"row\" *ngIf=\"tweet.username === currentUser.username\">\n      <a (click) = \"deleteTweet(tweet)\"><img src=\"assets/img/recycle-bin.png\" width=\"25\" height=\"25\"></a>\n    </div>\n    <hr *ngIf=\"tweet.username === currentUser.username\"/>\n  <div class=\"row\">\n    <h5> By {{tweet.username}} </h5>\n  </div>\n  <hr/>\n  <div class=\"row\">\n    <h5> Tags </h5>\n  </div>\n  <div class=\"row\">\n\n    <p *ngFor=\"let tag of tweet.tags\">{{tag}} - </p>\n  </div>\n\n  </div>\n  <div class=\"col-md-10\">\n    <!-- This part contains the title, text and comments\n\n    Title\n\n    Text\n\n    Comments -->\n\n    <div>\n            <h2 class=\"text-center my-3\"> {{tweet.title}} </h2>\n    </div>\n\n    <hr class=\"colorgraph\"/>\n\n    <div class=\"row mx-5 text-justify\">\n            <p class=\"dm-5\">{{tweet.body}}</p>\n    </div>\n\n    <hr/>\n\n    <div class=\"mx-5 d-flex flex-row-reverse\" >\n        <p class=\"text-right dm-5\">Fecha de modificacion: {{tweet.date}}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tweetCreator/tweet-creator.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tweetCreator/tweet-creator.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr />\n\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"tweetForm\">\n      <h2 class=\"form-signin-heading\">Creat tweet</h2>\n      <hr class=\"colorgraph\">\n\n      <div class=\"form-group\">\n        <label for=\"title\"> Title </label>\n        <input type=\"text\" formControlName=\"title\" class=\"form-control\" \n          [ngClass]=\"{ 'is-invalid': submitted && f.title.errors}\">\n\n          <div *ngIf=\"submitted && f.title.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.title.errors.required\">Title is required</div>\n          </div>\n\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"body\">Description</label>\n        <textarea rows=\"4\" cols=\"100\" class=\"form-control\"\n          [ngClass]=\"{ 'is-invalid': submitted && f.body.errors }\"\n          formControlName=\"body\"></textarea>\n          \n        <div *ngIf=\"submitted && f.body.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.body.errors.required\">Body is required</div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">\n            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n            Post\n        </button>\n      </div>\n\n\n  </form>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/auth.guard */ "./src/app/helpers/auth.guard.ts");







const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2p1YW5ncWNhZGF2aWQvUFJPSkVDVFgvQVdTLVNTTC9TVDAyNjMtVHdpdHRlci9mcm9udC1lbmQvbWF5YmUvc3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdsb2JhbCBhcHBsaWNhdGlvbiBzdHlsZXNcbmEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iLCJhIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");




let AppComponent = class AppComponent {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/jwt.interceptor */ "./src/app/helpers/jwt.interceptor.ts");
/* harmony import */ var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers/error.interceptor */ "./src/app/helpers/error.interceptor.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _components_alert_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/alert.component */ "./src/app/components/alert.component.ts");
/* harmony import */ var _tweetCreator_tweet_creator_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tweetCreator/tweet-creator.component */ "./src/app/tweetCreator/tweet-creator.component.ts");
/* harmony import */ var _tweet_handler_tweet_handler_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tweet-handler/tweet-handler.component */ "./src/app/tweet-handler/tweet-handler.component.ts");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
            _components_alert_component__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"],
            _tweetCreator_tweet_creator_component__WEBPACK_IMPORTED_MODULE_13__["TweetCreatorComponent"],
            _tweet_handler_tweet_handler_component__WEBPACK_IMPORTED_MODULE_14__["TweetHandlerComponent"]
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_7__["JwtInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_8__["ErrorInterceptor"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/alert.component.ts":
/*!***********************************************!*\
  !*** ./src/app/components/alert.component.ts ***!
  \***********************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");



let AlertComponent = class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
    }
    ngOnInit() {
        this.subscription = this.alertService.getAlert()
            .subscribe(message => {
            switch (message && message.type) {
                case 'success':
                    message.cssClass = 'alert alert-success';
                    break;
                case 'error':
                    message.cssClass = 'alert alert-danger';
                    break;
            }
            this.message = message;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
AlertComponent.ctorParameters = () => [
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }
];
AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'alert', template: __webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/alert.component.html") })
], AlertComponent);



/***/ }),

/***/ "./src/app/helpers/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/helpers/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate(route, state) {
        const currentUser = this.authenticationService.currentUserValue;
        console.log(currentUser);
        if (currentUser) {
            console.log('It is true!!!');
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthGuard);



/***/ }),

/***/ "./src/app/helpers/error.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/helpers/error.interceptor.ts ***!
  \**********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");





//hi
let ErrorInterceptor = class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload(true);
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/helpers/jwt.interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/helpers/jwt.interceptor.ts ***!
  \********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");



let JwtInterceptor = class JwtInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available
        let currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        return next.handle(request);
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], JwtInterceptor);



/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");





let HomeComponent = class HomeComponent {
    constructor(authenticationService, userService) {
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.users = [];
        this.currentUser = this.authenticationService.currentUserValue;
    }
    ngOnInit() {
        //this.loadAllUsers();
    }
    deleteUser(id) {
        this.userService.delete(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(() => this.loadAllUsers());
    }
    loadAllUsers() {
        this.userService.getAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(users => this.users = users);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html") })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {    \n\tmargin-top: 80px;\n\tmargin-bottom: 20px;\n}\n\n.form-signin {\n  max-width: 420px;\n  padding: 30px 38px 66px;\n  margin: 0 auto;\n  background-color: #eee;\n  border: 3px dotted rgba(0,0,0,0.1);  \n  }\n\n.form-signin-heading {\n  text-align:center;\n  margin-bottom: 30px;\n}\n\n.form-control {\n  position: relative;\n  font-size: 16px;\n  height: auto;\n  padding: 10px;\n}\n\ninput[type=\"text\"] {\n  margin-bottom: 0px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\ninput[type=\"password\"] {\n  margin-bottom: 20px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.colorgraph {\n  height: 7px;\n  border-top: 0;\n  background: #c4e17f;\n  border-radius: 5px;\n  background-image: -webkit-gradient(linear, left top, right top, from(#c4e17f), color-stop(12.5%, #c4e17f), color-stop(12.5%, #f7fdca), color-stop(25%, #f7fdca), color-stop(25%, #fecf71), color-stop(37.5%, #fecf71), color-stop(37.5%, #f0776c), color-stop(50%, #f0776c), color-stop(50%, #db9dbe), color-stop(62.5%, #db9dbe), color-stop(62.5%, #c49cde), color-stop(75%, #c49cde), color-stop(75%, #669ae1), color-stop(87.5%, #669ae1), color-stop(87.5%, #62c2e4), to(#62c2e4));\n  background-image: linear-gradient(to right, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGdCQUFnQjtDQUNoQixtQkFBbUI7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsa0NBQWtDO0VBQ2xDOztBQUVGO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFJbEIsdWRBQW1RO0VBQW5RLG1RQUFtUTtBQUNyUSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7ICAgIFxuXHRtYXJnaW4tdG9wOiA4MHB4O1xuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZm9ybS1zaWduaW4ge1xuICBtYXgtd2lkdGg6IDQyMHB4O1xuICBwYWRkaW5nOiAzMHB4IDM4cHggNjZweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlcjogM3B4IGRvdHRlZCByZ2JhKDAsMCwwLDAuMSk7ICBcbiAgfVxuXG4uZm9ybS1zaWduaW4taGVhZGluZyB7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbn1cblxuLmNvbG9yZ3JhcGgge1xuICBoZWlnaHQ6IDdweDtcbiAgYm9yZGVyLXRvcDogMDtcbiAgYmFja2dyb3VuZDogI2M0ZTE3ZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjYzRlMTdmLCAjYzRlMTdmIDEyLjUlLCAjZjdmZGNhIDEyLjUlLCAjZjdmZGNhIDI1JSwgI2ZlY2Y3MSAyNSUsICNmZWNmNzEgMzcuNSUsICNmMDc3NmMgMzcuNSUsICNmMDc3NmMgNTAlLCAjZGI5ZGJlIDUwJSwgI2RiOWRiZSA2Mi41JSwgI2M0OWNkZSA2Mi41JSwgI2M0OWNkZSA3NSUsICM2NjlhZTEgNzUlLCAjNjY5YWUxIDg3LjUlLCAjNjJjMmU0IDg3LjUlLCAjNjJjMmU0KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgI2M0ZTE3ZiwgI2M0ZTE3ZiAxMi41JSwgI2Y3ZmRjYSAxMi41JSwgI2Y3ZmRjYSAyNSUsICNmZWNmNzEgMjUlLCAjZmVjZjcxIDM3LjUlLCAjZjA3NzZjIDM3LjUlLCAjZjA3NzZjIDUwJSwgI2RiOWRiZSA1MCUsICNkYjlkYmUgNjIuNSUsICNjNDljZGUgNjIuNSUsICNjNDljZGUgNzUlLCAjNjY5YWUxIDc1JSwgIzY2OWFlMSA4Ny41JSwgIzYyYzJlNCA4Ny41JSwgIzYyYzJlNCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjYzRlMTdmLCAjYzRlMTdmIDEyLjUlLCAjZjdmZGNhIDEyLjUlLCAjZjdmZGNhIDI1JSwgI2ZlY2Y3MSAyNSUsICNmZWNmNzEgMzcuNSUsICNmMDc3NmMgMzcuNSUsICNmMDc3NmMgNTAlLCAjZGI5ZGJlIDUwJSwgI2RiOWRiZSA2Mi41JSwgI2M0OWNkZSA2Mi41JSwgI2M0OWNkZSA3NSUsICM2NjlhZTEgNzUlLCAjNjY5YWUxIDg3LjUlLCAjNjJjMmU0IDg3LjUlLCAjNjJjMmU0KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYzRlMTdmLCAjYzRlMTdmIDEyLjUlLCAjZjdmZGNhIDEyLjUlLCAjZjdmZGNhIDI1JSwgI2ZlY2Y3MSAyNSUsICNmZWNmNzEgMzcuNSUsICNmMDc3NmMgMzcuNSUsICNmMDc3NmMgNTAlLCAjZGI5ZGJlIDUwJSwgI2RiOWRiZSA2Mi41JSwgI2M0OWNkZSA2Mi41JSwgI2M0OWNkZSA3NSUsICM2NjlhZTEgNzUlLCAjNjY5YWUxIDg3LjUlLCAjNjJjMmU0IDg3LjUlLCAjNjJjMmU0KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");







let LoginComponent = class LoginComponent {
    constructor(formBuilder, route, router, authenticationService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    onSubmit() {
        this.submitted = true;
        // reset alerts on submit
        this.alertService.clear();
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(data => {
            if (data['status'] === 'err') {
                this.alertService.error(data['err'], true);
                this.loading = false;
            }
            else {
                this.router.navigate([this.returnUrl]);
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-signin {\n  padding: 30px 38px 66px;\n  margin: 0 auto;\n  background-color: #eee;\n  border: 3px dotted rgba(0,0,0,0.1);  \n  }\n\n.form-signin-heading {\n  text-align:center;\n  margin-bottom: 30px;\n}\n\n.form-control {\n  position: relative;\n  font-size: 16px;\n  height: auto;\n  padding: 10px;\n}\n\ninput[type=\"text\"] {\n  margin-bottom: 0px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\ninput[type=\"password\"] {\n  margin-bottom: 20px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.colorgraph {\n  height: 7px;\n  border-top: 0;\n  background: #c4e17f;\n  border-radius: 5px;\n  background-image: -webkit-gradient(linear, left top, right top, from(#c4e17f), color-stop(12.5%, #c4e17f), color-stop(12.5%, #f7fdca), color-stop(25%, #f7fdca), color-stop(25%, #fecf71), color-stop(37.5%, #fecf71), color-stop(37.5%, #f0776c), color-stop(50%, #f0776c), color-stop(50%, #db9dbe), color-stop(62.5%, #db9dbe), color-stop(62.5%, #c49cde), color-stop(75%, #c49cde), color-stop(75%, #669ae1), color-stop(87.5%, #669ae1), color-stop(87.5%, #62c2e4), to(#62c2e4));\n  background-image: linear-gradient(to right, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQzs7QUFFRjtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBSWxCLHVkQUFtUTtFQUFuUSxtUUFBbVE7QUFDclEiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tc2lnbmluIHtcbiAgcGFkZGluZzogMzBweCAzOHB4IDY2cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXI6IDNweCBkb3R0ZWQgcmdiYSgwLDAsMCwwLjEpOyAgXG4gIH1cblxuLmZvcm0tc2lnbmluLWhlYWRpbmcge1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbn1cblxuaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG59XG5cbi5jb2xvcmdyYXBoIHtcbiAgaGVpZ2h0OiA3cHg7XG4gIGJvcmRlci10b3A6IDA7XG4gIGJhY2tncm91bmQ6ICNjNGUxN2Y7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgI2M0ZTE3ZiwgI2M0ZTE3ZiAxMi41JSwgI2Y3ZmRjYSAxMi41JSwgI2Y3ZmRjYSAyNSUsICNmZWNmNzEgMjUlLCAjZmVjZjcxIDM3LjUlLCAjZjA3NzZjIDM3LjUlLCAjZjA3NzZjIDUwJSwgI2RiOWRiZSA1MCUsICNkYjlkYmUgNjIuNSUsICNjNDljZGUgNjIuNSUsICNjNDljZGUgNzUlLCAjNjY5YWUxIDc1JSwgIzY2OWFlMSA4Ny41JSwgIzYyYzJlNCA4Ny41JSwgIzYyYzJlNCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICNjNGUxN2YsICNjNGUxN2YgMTIuNSUsICNmN2ZkY2EgMTIuNSUsICNmN2ZkY2EgMjUlLCAjZmVjZjcxIDI1JSwgI2ZlY2Y3MSAzNy41JSwgI2YwNzc2YyAzNy41JSwgI2YwNzc2YyA1MCUsICNkYjlkYmUgNTAlLCAjZGI5ZGJlIDYyLjUlLCAjYzQ5Y2RlIDYyLjUlLCAjYzQ5Y2RlIDc1JSwgIzY2OWFlMSA3NSUsICM2NjlhZTEgODcuNSUsICM2MmMyZTQgODcuNSUsICM2MmMyZTQpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgI2M0ZTE3ZiwgI2M0ZTE3ZiAxMi41JSwgI2Y3ZmRjYSAxMi41JSwgI2Y3ZmRjYSAyNSUsICNmZWNmNzEgMjUlLCAjZmVjZjcxIDM3LjUlLCAjZjA3NzZjIDM3LjUlLCAjZjA3NzZjIDUwJSwgI2RiOWRiZSA1MCUsICNkYjlkYmUgNjIuNSUsICNjNDljZGUgNjIuNSUsICNjNDljZGUgNzUlLCAjNjY5YWUxIDc1JSwgIzY2OWFlMSA4Ny41JSwgIzYyYzJlNCA4Ny41JSwgIzYyYzJlNCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2M0ZTE3ZiwgI2M0ZTE3ZiAxMi41JSwgI2Y3ZmRjYSAxMi41JSwgI2Y3ZmRjYSAyNSUsICNmZWNmNzEgMjUlLCAjZmVjZjcxIDM3LjUlLCAjZjA3NzZjIDM3LjUlLCAjZjA3NzZjIDUwJSwgI2RiOWRiZSA1MCUsICNkYjlkYmUgNjIuNSUsICNjNDljZGUgNjIuNSUsICNjNDljZGUgNzUlLCAjNjY5YWUxIDc1JSwgIzY2OWFlMSA4Ny41JSwgIzYyYzJlNCA4Ny41JSwgIzYyYzJlNCk7XG59Il19 */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");





//80 443



let RegisterComponent = class RegisterComponent {
    constructor(formBuilder, router, authenticationService, userService, alertService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    onSubmit() {
        this.submitted = true;
        // reset alerts on submit
        this.alertService.clear();
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(data => {
            if (data['status'] === 'err') {
                this.alertService.error(data['err'], true);
                this.loading = false;
            }
            else {
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
            }
        }, error => {
            this.alertService.error(error);
            this.loading = false;
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let AlertService = class AlertService {
    constructor(router) {
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert message
                    this.clear();
                }
            }
        });
    }
    getAlert() {
        return this.subject.asObservable();
    }
    success(message, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'success', text: message });
    }
    error(message, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'error', text: message });
    }
    clear() {
        // clear by calling subject.next() without parameters
        this.subject.next();
    }
};
AlertService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AlertService);



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _connection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./connection.service */ "./src/app/services/connection.service.ts");






let AuthenticationService = class AuthenticationService {
    constructor(http, connectionService) {
        this.http = http;
        this.connectionService = connectionService;
        this.apiUrl = '';
        this.apiUrl = connectionService.get_backend_dns();
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(username, password) {
        return this.http.post(`${this.apiUrl}/users/authenticate`, { username, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            if (user['status'] === 'err') {
                return user;
            }
            else {
                console.log(JSON.stringify(user));
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }
            // store user details and jwt token in local storage to keep user logged in between page refreshes
        }));
    }
    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _connection_service__WEBPACK_IMPORTED_MODULE_5__["ConnectionService"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthenticationService);



/***/ }),

/***/ "./src/app/services/connection.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/connection.service.ts ***!
  \************************************************/
/*! exports provided: ConnectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionService", function() { return ConnectionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



let ConnectionService = class ConnectionService {
    constructor() {
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
    }
    get_backend_dns() {
        return this.apiUrl;
    }
};
ConnectionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], ConnectionService);



/***/ }),

/***/ "./src/app/services/tweet.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/tweet.service.ts ***!
  \*******************************************/
/*! exports provided: TweetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetService", function() { return TweetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _connection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connection.service */ "./src/app/services/connection.service.ts");




let TweetService = class TweetService {
    constructor(http, connection) {
        this.http = http;
        this.connection = connection;
        this.apiUrl = '';
        this.apiUrl = connection.get_backend_dns();
    }
    getTweets() {
        return this.http.get(`${this.apiUrl}/tweets/getAll`);
    }
    creatTweet(tweet) {
        return this.http.post(`${this.apiUrl}/tweets/save`, tweet);
    }
    deleteTweet(tweet) {
        return this.http.post(`${this.apiUrl}/tweets/delete`, tweet);
    }
};
TweetService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _connection_service__WEBPACK_IMPORTED_MODULE_3__["ConnectionService"] }
];
TweetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TweetService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _connection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connection.service */ "./src/app/services/connection.service.ts");




let UserService = class UserService {
    constructor(http, connection) {
        this.http = http;
        this.connection = connection;
        this.apiUrl = '';
        this.apiUrl = connection.get_backend_dns();
    }
    getAll() {
        return this.http.get(`${this.apiUrl}/users`);
    }
    register(user) {
        return this.http.post(`${this.apiUrl}/users/register`, user);
    }
    delete(id) {
        return this.http.delete(`${this.apiUrl}/user/${id}`);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _connection_service__WEBPACK_IMPORTED_MODULE_3__["ConnectionService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], UserService);



/***/ }),

/***/ "./src/app/tweet-handler/tweet-handler.component.css":
/*!***********************************************************!*\
  !*** ./src/app/tweet-handler/tweet-handler.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-signin {\n    padding: 30px 38px 66px;\n    margin: 0 auto;\n    background-color: #eee;\n    border: 3px dotted rgba(0,0,0,0.1);  \n    }\n  \n  .form-signin-heading {\n    text-align:center;\n    margin-bottom: 30px;\n  }\n  \n  .form-control {\n    position: relative;\n    font-size: 16px;\n    height: auto;\n    padding: 10px;\n  }\n  \n  input[type=\"text\"] {\n    margin-bottom: 0px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n  \n  input[type=\"password\"] {\n    margin-bottom: 20px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n  }\n  \n  .colorgraph {\n    height: 7px;\n    border-top: 0;\n    background: #c4e17f;\n    border-radius: 5px;\n    background-image: -webkit-gradient(linear, left top, right top, from(#c4e17f), color-stop(12.5%, #c4e17f), color-stop(12.5%, #f7fdca), color-stop(25%, #f7fdca), color-stop(25%, #fecf71), color-stop(37.5%, #fecf71), color-stop(37.5%, #f0776c), color-stop(50%, #f0776c), color-stop(50%, #db9dbe), color-stop(62.5%, #db9dbe), color-stop(62.5%, #c49cde), color-stop(75%, #c49cde), color-stop(75%, #669ae1), color-stop(87.5%, #669ae1), color-stop(87.5%, #62c2e4), to(#62c2e4));\n    background-image: linear-gradient(to right, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHdlZXQtaGFuZGxlci90d2VldC1oYW5kbGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEM7O0VBRUY7SUFDRSxpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUlsQix1ZEFBbVE7SUFBblEsbVFBQW1RO0VBQ3JRIiwiZmlsZSI6InNyYy9hcHAvdHdlZXQtaGFuZGxlci90d2VldC1oYW5kbGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1zaWduaW4ge1xuICAgIHBhZGRpbmc6IDMwcHggMzhweCA2NnB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgYm9yZGVyOiAzcHggZG90dGVkIHJnYmEoMCwwLDAsMC4xKTsgIFxuICAgIH1cbiAgXG4gIC5mb3JtLXNpZ25pbi1oZWFkaW5nIHtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG4gIFxuICAuZm9ybS1jb250cm9sIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIFxuICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIH1cbiAgXG4gIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICB9XG4gIFxuICAuY29sb3JncmFwaCB7XG4gICAgaGVpZ2h0OiA3cHg7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgICBiYWNrZ3JvdW5kOiAjYzRlMTdmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjYzRlMTdmLCAjYzRlMTdmIDEyLjUlLCAjZjdmZGNhIDEyLjUlLCAjZjdmZGNhIDI1JSwgI2ZlY2Y3MSAyNSUsICNmZWNmNzEgMzcuNSUsICNmMDc3NmMgMzcuNSUsICNmMDc3NmMgNTAlLCAjZGI5ZGJlIDUwJSwgI2RiOWRiZSA2Mi41JSwgI2M0OWNkZSA2Mi41JSwgI2M0OWNkZSA3NSUsICM2NjlhZTEgNzUlLCAjNjY5YWUxIDg3LjUlLCAjNjJjMmU0IDg3LjUlLCAjNjJjMmU0KTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjYzRlMTdmLCAjYzRlMTdmIDEyLjUlLCAjZjdmZGNhIDEyLjUlLCAjZjdmZGNhIDI1JSwgI2ZlY2Y3MSAyNSUsICNmZWNmNzEgMzcuNSUsICNmMDc3NmMgMzcuNSUsICNmMDc3NmMgNTAlLCAjZGI5ZGJlIDUwJSwgI2RiOWRiZSA2Mi41JSwgI2M0OWNkZSA2Mi41JSwgI2M0OWNkZSA3NSUsICM2NjlhZTEgNzUlLCAjNjY5YWUxIDg3LjUlLCAjNjJjMmU0IDg3LjUlLCAjNjJjMmU0KTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgI2M0ZTE3ZiwgI2M0ZTE3ZiAxMi41JSwgI2Y3ZmRjYSAxMi41JSwgI2Y3ZmRjYSAyNSUsICNmZWNmNzEgMjUlLCAjZmVjZjcxIDM3LjUlLCAjZjA3NzZjIDM3LjUlLCAjZjA3NzZjIDUwJSwgI2RiOWRiZSA1MCUsICNkYjlkYmUgNjIuNSUsICNjNDljZGUgNjIuNSUsICNjNDljZGUgNzUlLCAjNjY5YWUxIDc1JSwgIzY2OWFlMSA4Ny41JSwgIzYyYzJlNCA4Ny41JSwgIzYyYzJlNCk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYzRlMTdmLCAjYzRlMTdmIDEyLjUlLCAjZjdmZGNhIDEyLjUlLCAjZjdmZGNhIDI1JSwgI2ZlY2Y3MSAyNSUsICNmZWNmNzEgMzcuNSUsICNmMDc3NmMgMzcuNSUsICNmMDc3NmMgNTAlLCAjZGI5ZGJlIDUwJSwgI2RiOWRiZSA2Mi41JSwgI2M0OWNkZSA2Mi41JSwgI2M0OWNkZSA3NSUsICM2NjlhZTEgNzUlLCAjNjY5YWUxIDg3LjUlLCAjNjJjMmU0IDg3LjUlLCAjNjJjMmU0KTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/tweet-handler/tweet-handler.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/tweet-handler/tweet-handler.component.ts ***!
  \**********************************************************/
/*! exports provided: TweetHandlerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetHandlerComponent", function() { return TweetHandlerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_tweet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/tweet.service */ "./src/app/services/tweet.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let TweetHandlerComponent = class TweetHandlerComponent {
    constructor(authenticationService, tweetService, alertService, router) {
        this.authenticationService = authenticationService;
        this.tweetService = tweetService;
        this.alertService = alertService;
        this.router = router;
        this._listFilter = "";
        this.currentUser = this.authenticationService.currentUserValue;
    }
    get listFilter() {
        return this._listFilter;
    }
    set listFilter(value) {
        this._listFilter = value.toLowerCase();
        this.tweet_list_filter = this.listFilter ? this.perform_filter(this.listFilter) : this.tweet_list;
    }
    perform_filter(filter_by) {
        filter_by = filter_by.toLowerCase();
        return this.tweet_list.filter((tweet) => tweet.tags.toString().toLowerCase().indexOf(filter_by) != -1);
    }
    ngOnInit() {
        this.tweetService.getTweets()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(data => {
            this.tweet_list = data;
            this.tweet_list_filter = this.tweet_list;
        });
    }
    deleteTweet(tweet) {
        this.alertService.clear();
        console.log(tweet.title);
        this.tweetService.deleteTweet(tweet)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(data => {
            if (data['status'] == 'err') {
                this.alertService.error(data['err'], true);
                this.router.navigate(['/login']);
            }
            else {
                this.alertService.success(data['done'], true);
                this.router.navigate(['/login']);
            }
        });
    }
};
TweetHandlerComponent.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _services_tweet_service__WEBPACK_IMPORTED_MODULE_4__["TweetService"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
TweetHandlerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tweet-handler',
        template: __webpack_require__(/*! raw-loader!./tweet-handler.component.html */ "./node_modules/raw-loader/index.js!./src/app/tweet-handler/tweet-handler.component.html"),
        styles: [__webpack_require__(/*! ./tweet-handler.component.css */ "./src/app/tweet-handler/tweet-handler.component.css")]
    })
], TweetHandlerComponent);



/***/ }),

/***/ "./src/app/tweetCreator/tweet-creator.component.css":
/*!**********************************************************!*\
  !*** ./src/app/tweetCreator/tweet-creator.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-signin {\n    padding: 30px 38px 66px;\n    margin: 0 auto;\n    background-color: #eee;\n    border: 3px dotted rgba(0,0,0,0.1);  \n    }\n  \n  .form-signin-heading {\n    text-align:center;\n    margin-bottom: 30px;\n  }\n  \n  .form-control {\n    position: relative;\n    font-size: 16px;\n    height: auto;\n    padding: 10px;\n  }\n  \n  input[type=\"text\"] {\n    margin-bottom: 0px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n  \n  input[type=\"password\"] {\n    margin-bottom: 20px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n  }\n  \n  .colorgraph {\n    height: 7px;\n    border-top: 0;\n    background: #c4e17f;\n    border-radius: 5px;\n    background-image: -webkit-gradient(linear, left top, right top, from(#c4e17f), color-stop(12.5%, #c4e17f), color-stop(12.5%, #f7fdca), color-stop(25%, #f7fdca), color-stop(25%, #fecf71), color-stop(37.5%, #fecf71), color-stop(37.5%, #f0776c), color-stop(50%, #f0776c), color-stop(50%, #db9dbe), color-stop(62.5%, #db9dbe), color-stop(62.5%, #c49cde), color-stop(75%, #c49cde), color-stop(75%, #669ae1), color-stop(87.5%, #669ae1), color-stop(87.5%, #62c2e4), to(#62c2e4));\n    background-image: linear-gradient(to right, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHdlZXRDcmVhdG9yL3R3ZWV0LWNyZWF0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLGtDQUFrQztJQUNsQzs7RUFFRjtJQUNFLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBSWxCLHVkQUFtUTtJQUFuUSxtUUFBbVE7RUFDclEiLCJmaWxlIjoic3JjL2FwcC90d2VldENyZWF0b3IvdHdlZXQtY3JlYXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tc2lnbmluIHtcbiAgICBwYWRkaW5nOiAzMHB4IDM4cHggNjZweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGJvcmRlcjogM3B4IGRvdHRlZCByZ2JhKDAsMCwwLDAuMSk7ICBcbiAgICB9XG4gIFxuICAuZm9ybS1zaWduaW4taGVhZGluZyB7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuICBcbiAgLmZvcm0tY29udHJvbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICBcbiAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICB9XG4gIFxuICBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgfVxuICBcbiAgLmNvbG9yZ3JhcGgge1xuICAgIGhlaWdodDogN3B4O1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgYmFja2dyb3VuZDogI2M0ZTE3ZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgI2M0ZTE3ZiwgI2M0ZTE3ZiAxMi41JSwgI2Y3ZmRjYSAxMi41JSwgI2Y3ZmRjYSAyNSUsICNmZWNmNzEgMjUlLCAjZmVjZjcxIDM3LjUlLCAjZjA3NzZjIDM3LjUlLCAjZjA3NzZjIDUwJSwgI2RiOWRiZSA1MCUsICNkYjlkYmUgNjIuNSUsICNjNDljZGUgNjIuNSUsICNjNDljZGUgNzUlLCAjNjY5YWUxIDc1JSwgIzY2OWFlMSA4Ny41JSwgIzYyYzJlNCA4Ny41JSwgIzYyYzJlNCk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgI2M0ZTE3ZiwgI2M0ZTE3ZiAxMi41JSwgI2Y3ZmRjYSAxMi41JSwgI2Y3ZmRjYSAyNSUsICNmZWNmNzEgMjUlLCAjZmVjZjcxIDM3LjUlLCAjZjA3NzZjIDM3LjUlLCAjZjA3NzZjIDUwJSwgI2RiOWRiZSA1MCUsICNkYjlkYmUgNjIuNSUsICNjNDljZGUgNjIuNSUsICNjNDljZGUgNzUlLCAjNjY5YWUxIDc1JSwgIzY2OWFlMSA4Ny41JSwgIzYyYzJlNCA4Ny41JSwgIzYyYzJlNCk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsICNjNGUxN2YsICNjNGUxN2YgMTIuNSUsICNmN2ZkY2EgMTIuNSUsICNmN2ZkY2EgMjUlLCAjZmVjZjcxIDI1JSwgI2ZlY2Y3MSAzNy41JSwgI2YwNzc2YyAzNy41JSwgI2YwNzc2YyA1MCUsICNkYjlkYmUgNTAlLCAjZGI5ZGJlIDYyLjUlLCAjYzQ5Y2RlIDYyLjUlLCAjYzQ5Y2RlIDc1JSwgIzY2OWFlMSA3NSUsICM2NjlhZTEgODcuNSUsICM2MmMyZTQgODcuNSUsICM2MmMyZTQpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2M0ZTE3ZiwgI2M0ZTE3ZiAxMi41JSwgI2Y3ZmRjYSAxMi41JSwgI2Y3ZmRjYSAyNSUsICNmZWNmNzEgMjUlLCAjZmVjZjcxIDM3LjUlLCAjZjA3NzZjIDM3LjUlLCAjZjA3NzZjIDUwJSwgI2RiOWRiZSA1MCUsICNkYjlkYmUgNjIuNSUsICNjNDljZGUgNjIuNSUsICNjNDljZGUgNzUlLCAjNjY5YWUxIDc1JSwgIzY2OWFlMSA4Ny41JSwgIzYyYzJlNCA4Ny41JSwgIzYyYzJlNCk7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/tweetCreator/tweet-creator.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/tweetCreator/tweet-creator.component.ts ***!
  \*********************************************************/
/*! exports provided: TweetCreatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetCreatorComponent", function() { return TweetCreatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_tweet_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/tweet.service */ "./src/app/services/tweet.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let TweetCreatorComponent = class TweetCreatorComponent {
    constructor(authenticationService, tweetService, formBuilder, alertService, datePipe, router) {
        this.authenticationService = authenticationService;
        this.tweetService = tweetService;
        this.formBuilder = formBuilder;
        this.alertService = alertService;
        this.datePipe = datePipe;
        this.router = router;
        this.loading = false;
        this.submitted = false;
        this.myDate = new Date();
        this.currentUser = this.authenticationService.currentUserValue;
    }
    ngOnInit() {
        this.tweetForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            body: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.tweetForm.controls; }
    onSubmit() {
        this.submitted = true;
        this.alertService.clear();
        // stop here if form is invalid
        if (this.tweetForm.invalid) {
            return;
        }
        this.loading = true;
        var newTweet = this.tweetForm.value;
        newTweet['username'] = this.currentUser['username'];
        newTweet['date'] = this.datePipe.transform(this.myDate, 'full');
        this.tweetService.creatTweet(newTweet)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(data => {
            if (data['status'] == 'err') {
                this.alertService.error(data['err'], true);
                this.loading = false;
                this.router.navigate(['/login']);
            }
            else {
                this.alertService.success(data['done'], true);
                this.loading = false;
                this.router.navigate(['/login']);
            }
        }, error => {
            this.alertService.error(error);
            this.loading = false;
        });
    }
};
TweetCreatorComponent.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
    { type: _services_tweet_service__WEBPACK_IMPORTED_MODULE_6__["TweetService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
TweetCreatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tweet-creator',
        template: __webpack_require__(/*! raw-loader!./tweet-creator.component.html */ "./node_modules/raw-loader/index.js!./src/app/tweetCreator/tweet-creator.component.html"),
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
        styles: [__webpack_require__(/*! ./tweet-creator.component.css */ "./src/app/tweetCreator/tweet-creator.component.css")]
    })
], TweetCreatorComponent);



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
const environment = {
    production: false,
    api_url: 'jquiro12.tk/api'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/juangqcadavid/PROJECTX/AWS-SSL/ST0263-Twitter/front-end/maybe/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map