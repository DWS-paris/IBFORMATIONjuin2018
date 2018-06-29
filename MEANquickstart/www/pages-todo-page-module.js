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
/* harmony import */ var _shared_form_modules_form_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/form-modules/form.module */ "./src/app/shared/form-modules/form.module.ts");
/* harmony import */ var _todo_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-page.component */ "./src/app/pages/todo-page/todo-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
Imports
*/




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
            declarations: [_todo_page_component__WEBPACK_IMPORTED_MODULE_3__["TodoPageComponent"]],
            imports: [_routes__WEBPACK_IMPORTED_MODULE_1__["ComponentRouter"], _shared_form_modules_form_module__WEBPACK_IMPORTED_MODULE_2__["AppFormModule"]]
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

module.exports = "<p>\n  todo-page works!\n</p>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoPageComponent = /** @class */ (function () {
    function TodoPageComponent() {
    }
    TodoPageComponent.prototype.ngOnInit = function () {
    };
    TodoPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-page',
            template: __webpack_require__(/*! ./todo-page.component.html */ "./src/app/pages/todo-page/todo-page.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], TodoPageComponent);
    return TodoPageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-todo-page-module.js.map