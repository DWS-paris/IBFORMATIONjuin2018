(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-todo-page-module"],{

/***/ "./src/app/pages/todo-page/module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/todo-page/module.ts ***!
  \*******************************************/
/*! exports provided: TodoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoPageModule", function() { return TodoPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ "./src/app/pages/todo-page/routes.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_form_modules_form_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/form-modules/form.module */ "./src/app/shared/form-modules/form.module.ts");
/* harmony import */ var _shared_user_interface_user_interface_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/user-interface/user-interface.module */ "./src/app/shared/user-interface/user-interface.module.ts");
/* harmony import */ var _todo_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-page.component */ "./src/app/pages/todo-page/todo-page.component.ts");
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
var TodoPageModule = /** @class */ (function () {
    //
    /*
    Export
    */
    function TodoPageModule() {
    }
    TodoPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_todo_page_component__WEBPACK_IMPORTED_MODULE_5__["TodoPageComponent"]],
            imports: [_routes__WEBPACK_IMPORTED_MODULE_1__["ComponentRouter"], _shared_form_modules_form_module__WEBPACK_IMPORTED_MODULE_3__["AppFormModule"], _shared_user_interface_user_interface_module__WEBPACK_IMPORTED_MODULE_4__["UserInterfaceModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
        })
        //
        /*
        Export
        */
    ], TodoPageModule);
    return TodoPageModule;
}());

;
//


/***/ }),

/***/ "./src/app/pages/todo-page/routes.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/todo-page/routes.ts ***!
  \*******************************************/
/*! exports provided: ComponentRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentRouter", function() { return ComponentRouter; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _todo_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-page.component */ "./src/app/pages/todo-page/todo-page.component.ts");


//
/*
Definition
*/
var routes = [
    {
        path: '',
        component: _todo_page_component__WEBPACK_IMPORTED_MODULE_1__["TodoPageComponent"]
    }
];
//
/*
Export
*/
var ComponentRouter = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);
//


/***/ }),

/***/ "./src/app/pages/todo-page/todo-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/todo-page/todo-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-my-header\n  [path]=\"'/todo'\"\n  \n></app-my-header>\n\n<app-todo-from\n  [formObject]=\"todoObject\"\n  (sendFormData)=\"registerNewTodo($event)\"\n\n></app-todo-from>\n\n<section *ngIf=\"todoCollection\">\n  \n  <div *ngFor=\"let item of todoCollection\">\n    <app-todo-item\n      [todo]=\"item\"\n      (todoInfos)=\"modifyTodo($event)\"\n\n    ></app-todo-item>\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/pages/todo-page/todo-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/todo-page/todo-page.component.ts ***!
  \********************************************************/
/*! exports provided: TodoPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoPageComponent", function() { return TodoPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _services_todo_todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/todo/todo.service */ "./src/app/services/todo/todo.service.ts");
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
// Angular components


// APP components


//
/*
Defintion
*/
var TodoPageComponent = /** @class */ (function () {
    // Injection des services et du router
    function TodoPageComponent(userService, todoService, router) {
        var _this = this;
        this.userService = userService;
        this.todoService = todoService;
        this.router = router;
        this.todoObject = {
            content: ""
        };
        // Creaétion d'une fonction pour chager les todoes
        this.fetchTodoes = function () {
            // Contacter le service pour récupérer les todoes
            _this.todoService.getTodoes()
                .then(function (apiResponse) {
                console.log(apiResponse);
                _this.todoCollection = apiResponse.data;
            })
                .catch(function (apiResponse) {
                console.error(apiResponse);
            });
        };
        // Création d'une fonction pour connecter automatiquement l'utilisateur avec son token
        this.checkUserToken = function () {
            if (_this.userToken != undefined) {
                // Contacter le service pour inscrire l'utilisateur
                _this.userService.getUserInfos(_this.userToken)
                    .then(function (apiResponse) {
                    console.log(apiResponse);
                })
                    .catch(function () {
                    // Rediriger l'utilisateur vers la page todo
                    _this.router.navigateByUrl('/');
                    // Supprimer le faux token
                    localStorage.removeItem('MEANtoken');
                });
            }
            else {
                // Rediriger l'utilisateur vers la home page
                _this.router.navigateByUrl('/');
            }
        };
        // Création d'une fonction pour ajouter une todo
        this.registerNewTodo = function (todo) {
            // Contacter le service pour ajouter une todo
            _this.todoService.addNewTodo(todo, _this.userToken)
                .then(function (apiResponse) {
                console.log(apiResponse);
                _this.fetchTodoes();
            })
                .catch(function (apiResponse) {
                console.error(apiResponse);
            });
        };
        // Création d'une fonction pour éditer/supprimer une todo
        this.modifyTodo = function (event) {
            if (event.action === 'edit') {
                _this.todoService.editTodo(event._id, _this.userToken)
                    .then(function (apiResponse) {
                    console.log(apiResponse);
                    _this.fetchTodoes();
                })
                    .catch(function (apiResponse) {
                    console.error(apiResponse);
                });
            }
            if (event.action === 'delete') {
                _this.todoService.deleteTodo(event._id, _this.userToken)
                    .then(function (apiResponse) {
                    console.log(apiResponse);
                    _this.fetchTodoes();
                })
                    .catch(function (apiResponse) {
                    console.error(apiResponse);
                });
            }
        };
    }
    TodoPageComponent.prototype.ngOnInit = function () {
        // Récupérer le token au chargement du composant
        this.userToken = localStorage.getItem('MEANtoken');
        // Appeler la fonction pour vérifier le token utilisateur
        this.checkUserToken();
        // Charger la liste de todoes
        this.fetchTodoes();
    };
    TodoPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-page',
            template: __webpack_require__(/*! ./todo-page.component.html */ "./src/app/pages/todo-page/todo-page.component.html"),
            // Les services sont à ajouter dans le tableau des providers
            providers: [_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_todo_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"]]
        })
        //
        /*
        Export
        */
        ,
        __metadata("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_todo_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TodoPageComponent);
    return TodoPageComponent;
}());

//


/***/ }),

/***/ "./src/app/services/todo/todo.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/todo/todo.service.ts ***!
  \***********************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
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
var TodoService = /** @class */ (function () {
    // Injecter le service HttpCLient dans la class
    function TodoService(http) {
        this.http = http;
        // Définir l'adresse de l'API
        this.apiUrl = '/api/todo';
    }
    // Créer une fonction afficher les Todo
    TodoService.prototype.getTodoes = function () {
        // Utiliser une requête HTTP GET
        return this.http.get("" + this.apiUrl)
            .toPromise().then(this.getData).catch(this.handelError);
    };
    // Créer une fonction pour ajouter une todo
    TodoService.prototype.addNewTodo = function (todo, token) {
        // Configurer la requête
        var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', "Bearer " + token);
        // Utiliser une requête HTTP GET
        return this.http.post("" + this.apiUrl, todo, { headers: myHeader })
            .toPromise().then(this.getData).catch(this.handelError);
    };
    // Créer une fonction pour modifier une todo
    TodoService.prototype.editTodo = function (idParam, token) {
        // Configurer la requête
        var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', "Bearer " + token);
        // Utiliser une requête HTTP GET
        return this.http.put("" + this.apiUrl, { _id: idParam }, { headers: myHeader })
            .toPromise().then(this.getData).catch(this.handelError);
    };
    // Créer une fonction pour modifier une todo
    TodoService.prototype.deleteTodo = function (id, token) {
        // Configurer la requête
        var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', "Bearer " + token);
        // Utiliser une requête HTTP GET
        return this.http.delete(this.apiUrl + "/" + id, { headers: myHeader })
            .toPromise().then(this.getData).catch(this.handelError);
    };
    // Fonction pour traiter les success des requêtes
    TodoService.prototype.getData = function (response) {
        // return res || {};
        return Promise.resolve(response || {});
    };
    // Fonction pour traiter les erreurs des requête
    TodoService.prototype.handelError = function (response) {
        return Promise.reject(response.error);
    };
    TodoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
        //
        /*
        Export
        */
        ,
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TodoService);
    return TodoService;
}());

//


/***/ })

}]);
//# sourceMappingURL=pages-todo-page-module.js.map