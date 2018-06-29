(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-page-module"],{

/***/ "./src/app/pages/home-page/home-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-my-header\n    [path]=\"'/'\"\n></app-my-header>\n\n<app-login-form\n    [formObject]=\"loginObject\"\n    (sendFormData)=\"loginUser($event)\"\n></app-login-form>\n\n<app-register-form\n    [formObject]=\"registerObject\"\n    (sendFormData)=\"registerNewUser($event)\"\n>\n</app-register-form>"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user/user.service */ "./src/app/services/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
Imports
*/
// Angular compoenents




//
/*
Definitino
*/
var HomePageComponent = /** @class */ (function () {
    //
    // Injection des services et du router
    function HomePageComponent(authService, userService, router) {
        var _this = this;
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        /*
        Variables
        */
        this.registerObject = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            repeatePassword: "",
            cgu: false
        };
        this.loginObject = {
            email: "",
            password: "",
        };
        // Création d'une fonction pour inscrire un utilisateur
        this.registerNewUser = function (user) {
            console.log("Validated form HOME", user);
            // Contacter le service pour inscrire l'utilisateur
            _this.authService.userRegister(user)
                .then(function (apiSuccess) { return console.log(apiSuccess); })
                .catch(function (apiError) { return console.error(apiError); });
        };
        // Création d'une fonction pour connecter un utilisateur
        this.loginUser = function (user) {
            // Contacter le service pour inscrire l'utilisateur
            _this.authService.userLogin(user)
                .then(function (apiSuccess) {
                console.log(apiSuccess);
                // Stocker le token utilisateur dans le navigateur
                localStorage.setItem('MEANtoken', apiSuccess.data.token);
                // Rediriger l'utilisateur vers la page todo
                _this.router.navigateByUrl('/todo');
            })
                .catch(function (apiError) { return console.error(apiError); });
        };
        // Création d'une fonction pour connecter automatiquement l'utilisateur avec son token
        this.checkUserToken = function () {
            if (_this.userToken != undefined) {
                // Contacter le service pour inscrire l'utilisateur
                _this.userService.getUserInfos(_this.userToken)
                    .then(function () {
                    // Rediriger l'utilisateur vers la page todo
                    _this.router.navigateByUrl('/todo');
                })
                    .catch(function (apiError) { return console.error(apiError); });
            }
        };
    }
    HomePageComponent.prototype.ngOnInit = function () {
        // Récupérer le token au chargement du composant
        this.userToken = localStorage.getItem('MEANtoken');
        // Appeler la fonction pour vérifier le token utilisateur
        this.checkUserToken();
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/pages/home-page/home-page.component.html"),
            // Les services sont à ajouter dasn le tableau des providers
            providers: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]]
        })
        //
        /*
        Export
        */
        ,
        __metadata("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomePageComponent);
    return HomePageComponent;
}());

//


/***/ }),

/***/ "./src/app/pages/home-page/module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home-page/module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ "./src/app/pages/home-page/routes.ts");
/* harmony import */ var _shared_form_modules_form_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/form-modules/form.module */ "./src/app/shared/form-modules/form.module.ts");
/* harmony import */ var _shared_user_interface_user_interface_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/user-interface/user-interface.module */ "./src/app/shared/user-interface/user-interface.module.ts");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
Imports
*/
// Angular components


// APP components



//
/*
Definition
*/
var HomePageModule = /** @class */ (function () {
    //
    /*
    Export
    */
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"]],
            // Les modules sont à renseigner dans le tableau des imports
            imports: [_routes__WEBPACK_IMPORTED_MODULE_1__["ComponentRouter"], _shared_form_modules_form_module__WEBPACK_IMPORTED_MODULE_2__["AppFormModule"], _shared_user_interface_user_interface_module__WEBPACK_IMPORTED_MODULE_3__["UserInterfaceModule"]]
        })
        //
        /*
        Export
        */
    ], HomePageModule);
    return HomePageModule;
}());

;
//


/***/ }),

/***/ "./src/app/pages/home-page/routes.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home-page/routes.ts ***!
  \*******************************************/
/*! exports provided: ComponentRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentRouter", function() { return ComponentRouter; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page.component */ "./src/app/pages/home-page/home-page.component.ts");


//
/*
Definition
*/
var routes = [
    {
        path: '',
        component: _home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"]
    }
];
//
/*
Export
*/
var ComponentRouter = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);
//


/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
Imports
*/


//
/*
Definition
*/
var AuthService = /** @class */ (function () {
    // Injecter le service HttpCLient dans la class
    function AuthService(http) {
        this.http = http;
        // Définir l'adresse de l'API
        this.apiUrl = '/api/auth';
    }
    // Créer une fonction pour enregistrer un utilisateur
    AuthService.prototype.userRegister = function (user) {
        // Supprimer la propriété repeatePassword de l'ojet user
        delete user.repeatePassword;
        // Configurer la requête
        var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        // 3 paramêtre : url, data, header + claccback
        return this.http.post(this.apiUrl + "/register", user, { headers: myHeader })
            .toPromise().then(this.getData).catch(this.handelError);
    };
    // Créer une fonction pour connecter un utilisateur
    AuthService.prototype.userLogin = function (user) {
        // Configurer la requête
        var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        // 3 paramêtre : url, data, header + claccback
        return this.http.post(this.apiUrl + "/login", user, { headers: myHeader })
            .toPromise().then(this.getData).catch(this.handelError);
    };
    // Fonction pour traiter les success des requêtes
    AuthService.prototype.getData = function (response) {
        // return res || {};
        return Promise.resolve(response || {});
    };
    // Fonction pour traiter les erreurs des requête
    AuthService.prototype.handelError = function (response) {
        return Promise.reject(response.error);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
        //
        /*
        Export
        */
        ,
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());

//


/***/ })

}]);
//# sourceMappingURL=pages-home-page-module.js.map