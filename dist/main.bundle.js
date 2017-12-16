webpackJsonp([1,4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasteoflifeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TasteoflifeService = (function () {
    function TasteoflifeService(http) {
        this.http = http;
        this.host = '';
        this.userId = "";
    }
    TasteoflifeService.prototype.setUserid = function (uId) {
        this.userId = uId;
    };
    TasteoflifeService.prototype.validateLUsernameInfo = function (username) {
        return this.http.get(this.host + '/api/user/username/' + username)
            .map(function (response) { return response.json(); });
    };
    TasteoflifeService.prototype.getAllPosts = function () {
        return this.http.get(this.host + '/api/userPost/')
            .map(function (response) { return response.json(); });
    };
    TasteoflifeService.prototype.getCommentsForPost = function (pId) {
        return this.http.get(this.host + '/api/comment/post/' + pId)
            .map(function (response) { return response.json(); });
    };
    TasteoflifeService.prototype.retrieveRecipeDetailsByCategory = function (rId) {
        var result = this.http.get(this.host + '/app/recipe/category/' + rId)
            .map(function (response) { return response.json(); });
        return result;
    };
    TasteoflifeService.prototype.retrieveRecipeDetailsByUser = function (rId) {
        var result = this.http.get(this.host + '/app/recipe/user/' + rId)
            .map(function (response) { return response.json(); });
        return result;
    };
    TasteoflifeService.prototype.retrieveRecipeDetailsByName = function (rName) {
        var result = this.http.get(this.host + '/app/recipe/' + rName)
            .map(function (response) { return response.json(); });
        return result;
    };
    TasteoflifeService.prototype.searchRecipes = function (rName) {
        var result = this.http.get(this.host + '/app/search/' + rName)
            .map(function (response) { return response.json(); });
        return result;
    };
    TasteoflifeService.prototype.getRecipeForPost = function (recipe) {
        console.log("inside gerrecipepost");
        return this.http.post(this.host + '/app/recipe/', recipe)
            .map(function (response) { return response.json(); });
    };
    TasteoflifeService.prototype.getJobForPost = function (job) {
        console.log("inside getjobpost");
        return this.http.post(this.host + '/app/job/', job)
            .map(function (response) { return response.json(); });
    };
    TasteoflifeService.prototype.retrievePostedJobs = function () {
        return this.http.get(this.host + '/app/job/')
            .map(function (response) { return response.json(); });
    };
    TasteoflifeService.prototype.getUserInfo = function () {
        return this.http.get(this.host + '/auth/userdata')
            .map(function (response) { return response.json(); });
    };
    return TasteoflifeService;
}());
TasteoflifeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TasteoflifeService);

var _a;
//# sourceMappingURL=tasteoflife.service.js.map

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg2.b509a8e6beedb9c165fe.jpg";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image3.d79ca482a7a18de9f760.jpg";

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg2.b509a8e6beedb9c165fe.jpg";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image3.d79ca482a7a18de9f760.jpg";

/***/ }),
/* 64 */,
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tasteoflife_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(_tasteoflife, _route) {
        var _this = this;
        this.tasteoflife$ = _tasteoflife;
        this.route$ = _route;
        this.tasteoflife$.getUserInfo()
            .subscribe(function (result) {
            _this.username = result.emails[0].value;
            _this.password = "";
        }, function () { _this.username = "not logged in"; }, function () { return console.log('REST call' + _this.username); });
    }
    LoginComponent.prototype.onClick = function () {
        this.route$.navigate(['/welcome']);
    };
    LoginComponent.prototype.onFBLogin = function () {
        var _this = this;
        this.tasteoflife$.validateLUsernameInfo(this.username)
            .subscribe(function (result) {
            _this.tasteoflife$.userId = result;
            _this.route$.navigate(['/welcome']);
        }, function () { }, function () { return console.log('REST call:' + _this.username); });
        console.log("username:" + this.username);
        console.log("password:" + this.password);
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(182),
        styles: [__webpack_require__(167)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__tasteoflife_service__["a" /* TasteoflifeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__tasteoflife_service__["a" /* TasteoflifeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tasteoflife_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyprofileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyprofileComponent = (function () {
    function MyprofileComponent(_tasteoflife) {
        var _this = this;
        this.tasteoflife$ = _tasteoflife;
        this.tasteoflife$.getUserInfo()
            .subscribe(function (result) {
            _this.username = result.displayName;
            _this.email = result.emails[0].value;
        }, function () { _this.username = "not logged in"; }, function () { return console.log('REST call' + _this.username); });
    }
    MyprofileComponent.prototype.ngOnInit = function () {
    };
    return MyprofileComponent;
}());
MyprofileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-myprofile',
        template: __webpack_require__(183),
        styles: [__webpack_require__(168)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__tasteoflife_service__["a" /* TasteoflifeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__tasteoflife_service__["a" /* TasteoflifeService */]) === "function" && _a || Object])
], MyprofileComponent);

var _a;
//# sourceMappingURL=myprofile.component.js.map

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tasteoflife_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyrecipesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyrecipesComponent = (function () {
    function MyrecipesComponent(route, location, _tasteoflife) {
        var _this = this;
        _tasteoflife.getUserInfo()
            .subscribe(function (result) {
            _this.username = result.displayName;
            _tasteoflife.retrieveRecipeDetailsByUser(_this.username)
                .subscribe(function (result) {
                _this.recipeList = result;
            }, function () { }, function () { });
        }, function () { _this.username = "not logged in"; }, function () { return console.log('REST call' + _this.username); });
        this.recipeOwner = this.username;
    }
    MyrecipesComponent.prototype.ngOnInit = function () {
    };
    return MyrecipesComponent;
}());
MyrecipesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-myrecipes',
        template: __webpack_require__(184),
        styles: [__webpack_require__(169)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__tasteoflife_service__["a" /* TasteoflifeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__tasteoflife_service__["a" /* TasteoflifeService */]) === "function" && _c || Object])
], MyrecipesComponent);

var _a, _b, _c;
//# sourceMappingURL=myrecipes.component.js.map

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tasteoflife_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostedjoblistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostedjoblistComponent = (function () {
    function PostedjoblistComponent(route, location, tasteoflife$) {
        var _this = this;
        this.route = route;
        this.location = location;
        this.tasteoflife$ = tasteoflife$;
        this.jobId = route.snapshot.params['id'];
        tasteoflife$.retrievePostedJobs()
            .subscribe(function (result) {
            _this.jobList = result;
        }, function () { }, function () { });
    }
    PostedjoblistComponent.prototype.ngOnInit = function () {
    };
    return PostedjoblistComponent;
}());
PostedjoblistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-postedjoblist',
        template: __webpack_require__(186),
        styles: [__webpack_require__(171)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__tasteoflife_service__["a" /* TasteoflifeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__tasteoflife_service__["a" /* TasteoflifeService */]) === "function" && _c || Object])
], PostedjoblistComponent);

var _a, _b, _c;
//# sourceMappingURL=postedjoblist.component.js.map

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tasteoflife_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostjobComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostjobComponent = (function () {
    function PostjobComponent(router$, 
        //private tasteoflife$: TasteoflifeService
        tasteoflife$) {
        this.tasteoflife$ = tasteoflife$;
        this.router$ = router$;
        this.inputJob = { jobID: 0, jobName: '', restaurantName: '', jobDescription: '' };
    }
    PostjobComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.inputJob);
        this.inputJob.jobName = this.inputJobName;
        this.inputJob.restaurantName = this.inputRestaurantName;
        this.inputJob.jobDescription = this.inputJobDescription;
        this.tasteoflife$.getJobForPost(this.inputJob)
            .subscribe(function (result) {
            _this.inputJob = result;
            _this.name = "Post";
            console.log('result' + _this.inputJob.toString());
        }, function () { }, function () { });
        this.router$.navigate(['/welcome/']);
    };
    PostjobComponent.prototype.ngOnInit = function () {
    };
    return PostjobComponent;
}());
PostjobComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-postjob',
        template: __webpack_require__(188),
        styles: [__webpack_require__(173)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__tasteoflife_service__["a" /* TasteoflifeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__tasteoflife_service__["a" /* TasteoflifeService */]) === "function" && _b || Object])
], PostjobComponent);

var _a, _b;
//# sourceMappingURL=postjob.component.js.map

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tasteoflife_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostrecipeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostrecipeComponent = (function () {
    function PostrecipeComponent(router$, 
        //private tasteoflife$: TasteoflifeService
        tasteoflife$) {
        var _this = this;
        this.tasteoflife$ = tasteoflife$;
        this.router$ = router$;
        this.inputrecipe = { recipeID: 0, recipeName: '', recipeCategory: '', recipeInstructions: '', recipeOwner: '', recipeRating: '', majorIngredient: '', calories: 0 };
        this.tasteoflife$.getUserInfo()
            .subscribe(function (result) {
            _this.username = result.displayName;
            _this.password = result.emails[0].value;
        }, function () { _this.username = "not logged in"; }, function () { return console.log('REST call' + _this.username); });
        // this.postId = route.snapshot.params['id'];
        // tasteoflife$.getRecipeForPost(this.postId)
        // .subscribe(
        //   result => {
        //     this.recipeList = result;
        //     this.name = "Post";
        //   },
        //   () => {},
        //   () => {}
        // );
    }
    PostrecipeComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.inputrecipe);
        this.inputrecipe.recipeName = this.inputRecipeName;
        this.inputrecipe.recipeInstructions = this.inputRecipeIns;
        this.inputrecipe.recipeCategory = this.inputRecipeCat;
        this.inputrecipe.majorIngredient = this.inputRecipeIng;
        this.inputrecipe.recipeOwner = this.username;
        console.log(this.inputRecipeName);
        console.log(this.inputrecipe.recipeName);
        console.log(this.inputrecipe);
        console.log(this.inputrecipe.recipeOwner);
        this.tasteoflife$.getRecipeForPost(this.inputrecipe)
            .subscribe(function (result) {
            _this.inputrecipe = result;
            _this.name = "Post";
            console.log('result' + _this.inputrecipe.toString());
        }, function () { }, function () { });
        this.router$.navigate(['/welcome/']);
    };
    PostrecipeComponent.prototype.ngOnInit = function () {
    };
    return PostrecipeComponent;
}());
PostrecipeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-postrecipe',
        template: __webpack_require__(189),
        styles: [__webpack_require__(174)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__tasteoflife_service__["a" /* TasteoflifeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__tasteoflife_service__["a" /* TasteoflifeService */]) === "function" && _b || Object])
], PostrecipeComponent);

var _a, _b;
//# sourceMappingURL=postrecipe.component.js.map

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tasteoflife_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipecategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecipecategoryComponent = (function () {
    function RecipecategoryComponent(route, location, tasteoflife$) {
        var _this = this;
        this.route = route;
        this.location = location;
        this.tasteoflife$ = tasteoflife$;
        this.recipeId = route.snapshot.params['id'];
        tasteoflife$.retrieveRecipeDetailsByCategory(this.recipeId)
            .subscribe(function (result) {
            _this.recipeList = result;
        }, function () { }, function () { });
    }
    RecipecategoryComponent.prototype.ngOnInit = function () {
    };
    return RecipecategoryComponent;
}());
RecipecategoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-recipecategory',
        template: __webpack_require__(190),
        styles: [__webpack_require__(175)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__tasteoflife_service__["a" /* TasteoflifeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__tasteoflife_service__["a" /* TasteoflifeService */]) === "function" && _c || Object])
], RecipecategoryComponent);

var _a, _b, _c;
//# sourceMappingURL=recipecategory.component.js.map

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tasteoflife_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipedetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecipedetailsComponent = (function () {
    function RecipedetailsComponent(route, location, tasteoflife$) {
        var _this = this;
        this.route = route;
        this.location = location;
        this.tasteoflife$ = tasteoflife$;
        this.recipeID = route.snapshot.params['recipeID'];
        tasteoflife$.retrieveRecipeDetailsByName(this.recipeID)
            .subscribe(function (result) {
            _this.recipeOwner = result.recipeOwner;
            _this.recipeName = result.recipeName;
            _this.recipeID = result.recipeID;
            _this.calories = result.calories;
            _this.ingredients = result.majorIngredient;
            _this.category = result.recipeCategory;
            _this.instructions = result.recipeInstructions;
            _this.name = result.recipeName;
            _this.rating = result.recipeRating;
        }, function () { }, function () { });
    }
    RecipedetailsComponent.prototype.ngOnInit = function () {
    };
    return RecipedetailsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], RecipedetailsComponent.prototype, "recipeID", void 0);
RecipedetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-recipedetails',
        template: __webpack_require__(192),
        styles: [__webpack_require__(177)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__tasteoflife_service__["a" /* TasteoflifeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__tasteoflife_service__["a" /* TasteoflifeService */]) === "function" && _c || Object])
], RecipedetailsComponent);

var _a, _b, _c;
//# sourceMappingURL=recipedetails.component.js.map

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tasteoflife_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchrecipeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchrecipeComponent = (function () {
    function SearchrecipeComponent(tasteoflife$) {
        this.tasteoflife$ = tasteoflife$;
    }
    SearchrecipeComponent.prototype.onSubmit = function () {
        var _this = this;
        this.tasteoflife$.searchRecipes(this.ing)
            .subscribe(function (result) {
            _this.recipeList = result;
        }, function () { }, function () { });
    };
    SearchrecipeComponent.prototype.ngOnInit = function () {
    };
    return SearchrecipeComponent;
}());
SearchrecipeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-searchrecipe',
        template: __webpack_require__(193),
        styles: [__webpack_require__(178)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__tasteoflife_service__["a" /* TasteoflifeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__tasteoflife_service__["a" /* TasteoflifeService */]) === "function" && _a || Object])
], SearchrecipeComponent);

var _a;
//# sourceMappingURL=searchrecipe.component.js.map

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpgradeaccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpgradeaccountComponent = (function () {
    function UpgradeaccountComponent() {
    }
    UpgradeaccountComponent.prototype.ngOnInit = function () {
    };
    return UpgradeaccountComponent;
}());
UpgradeaccountComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-upgradeaccount',
        template: __webpack_require__(194),
        styles: [__webpack_require__(179)]
    }),
    __metadata("design:paramtypes", [])
], UpgradeaccountComponent);

//# sourceMappingURL=upgradeaccount.component.js.map

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tasteoflife_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = (function () {
    function WelcomeComponent(_tasteoflife) {
        var _this = this;
        this.userObject = {};
        this.tasteoflife$ = _tasteoflife;
        this.title = 'Welcome works!';
        this.tasteoflife$.getUserInfo()
            .subscribe(function (result) {
            _this.username = result.displayName;
            _this.email = result.emails[0].value;
        }, function () { _this.username = "not logged in"; }, function () { return console.log('REST call' + _this.username); });
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-welcome',
        template: __webpack_require__(195),
        styles: [__webpack_require__(180)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__tasteoflife_service__["a" /* TasteoflifeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__tasteoflife_service__["a" /* TasteoflifeService */]) === "function" && _a || Object])
], WelcomeComponent);

var _a;
//# sourceMappingURL=welcome.component.js.map

/***/ }),
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 99;


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(112);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
        this.cId = '1';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(181),
        styles: [__webpack_require__(166)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__recipecategory_recipecategory_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__welcome_welcome_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tasteoflife_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__postrecipe_postrecipe_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__searchrecipe_searchrecipe_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__upgradeaccount_upgradeaccount_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__recipecategory_recipetable_recipetable_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__recipedetails_recipedetails_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__postjob_postjob_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__postedjoblist_postedjoblist_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__postedjoblist_postedjobtable_postedjobtable_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__login_login_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__myrecipes_myrecipes_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__myrecipes_myrecipetable_myrecipetable_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__myprofile_myprofile_component__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__recipecategory_recipecategory_component__["a" /* RecipecategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_8__welcome_welcome_component__["a" /* WelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__postrecipe_postrecipe_component__["a" /* PostrecipeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__searchrecipe_searchrecipe_component__["a" /* SearchrecipeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__upgradeaccount_upgradeaccount_component__["a" /* UpgradeaccountComponent */],
            __WEBPACK_IMPORTED_MODULE_13__recipecategory_recipetable_recipetable_component__["a" /* RecipetableComponent */],
            __WEBPACK_IMPORTED_MODULE_14__recipedetails_recipedetails_component__["a" /* RecipedetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__postjob_postjob_component__["a" /* PostjobComponent */],
            __WEBPACK_IMPORTED_MODULE_16__postedjoblist_postedjoblist_component__["a" /* PostedjoblistComponent */],
            __WEBPACK_IMPORTED_MODULE_17__postedjoblist_postedjobtable_postedjobtable_component__["a" /* PostedjobtableComponent */],
            __WEBPACK_IMPORTED_MODULE_18__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_19__myrecipes_myrecipes_component__["a" /* MyrecipesComponent */],
            __WEBPACK_IMPORTED_MODULE_20__myrecipes_myrecipetable_myrecipetable_component__["a" /* MyrecipetableComponent */],
            __WEBPACK_IMPORTED_MODULE_21__myprofile_myprofile_component__["a" /* MyprofileComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */],
        ],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* APP_BASE_HREF */], useValue: '/' }, __WEBPACK_IMPORTED_MODULE_9__tasteoflife_service__["a" /* TasteoflifeService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_welcome_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recipecategory_recipecategory_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__postrecipe_postrecipe_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__upgradeaccount_upgradeaccount_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__searchrecipe_searchrecipe_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__recipedetails_recipedetails_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__postjob_postjob_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__postedjoblist_postedjoblist_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__myrecipes_myrecipes_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__myprofile_myprofile_component__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });












var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_2__welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: 'recipecategory/:id', component: __WEBPACK_IMPORTED_MODULE_3__recipecategory_recipecategory_component__["a" /* RecipecategoryComponent */] },
    { path: 'searchrecipe', component: __WEBPACK_IMPORTED_MODULE_6__searchrecipe_searchrecipe_component__["a" /* SearchrecipeComponent */] },
    { path: 'postrecipe', component: __WEBPACK_IMPORTED_MODULE_4__postrecipe_postrecipe_component__["a" /* PostrecipeComponent */] },
    { path: 'upgradeaccount', component: __WEBPACK_IMPORTED_MODULE_5__upgradeaccount_upgradeaccount_component__["a" /* UpgradeaccountComponent */] },
    { path: 'recipedetails/:recipeID', component: __WEBPACK_IMPORTED_MODULE_7__recipedetails_recipedetails_component__["a" /* RecipedetailsComponent */] },
    { path: 'postjob', component: __WEBPACK_IMPORTED_MODULE_8__postjob_postjob_component__["a" /* PostjobComponent */] },
    { path: 'postedjoblist', component: __WEBPACK_IMPORTED_MODULE_9__postedjoblist_postedjoblist_component__["a" /* PostedjoblistComponent */] },
    { path: 'myrecipes', component: __WEBPACK_IMPORTED_MODULE_10__myrecipes_myrecipes_component__["a" /* MyrecipesComponent */] },
    { path: 'myprofile', component: __WEBPACK_IMPORTED_MODULE_11__myprofile_myprofile_component__["a" /* MyprofileComponent */] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routing.js.map

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyrecipetableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyrecipetableComponent = (function () {
    function MyrecipetableComponent() {
    }
    MyrecipetableComponent.prototype.ngOnInit = function () {
    };
    return MyrecipetableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], MyrecipetableComponent.prototype, "recipes", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], MyrecipetableComponent.prototype, "index", void 0);
MyrecipetableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-myrecipetable',
        template: __webpack_require__(185),
        styles: [__webpack_require__(170)]
    }),
    __metadata("design:paramtypes", [])
], MyrecipetableComponent);

//# sourceMappingURL=myrecipetable.component.js.map

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostedjobtableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostedjobtableComponent = (function () {
    function PostedjobtableComponent() {
    }
    PostedjobtableComponent.prototype.ngOnInit = function () {
    };
    return PostedjobtableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], PostedjobtableComponent.prototype, "jobs", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], PostedjobtableComponent.prototype, "index", void 0);
PostedjobtableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'postedjobtable',
        template: __webpack_require__(187),
        styles: [__webpack_require__(172)]
    }),
    __metadata("design:paramtypes", [])
], PostedjobtableComponent);

//# sourceMappingURL=postedjobtable.component.js.map

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipetableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecipetableComponent = (function () {
    function RecipetableComponent() {
    }
    RecipetableComponent.prototype.ngOnInit = function () {
    };
    return RecipetableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], RecipetableComponent.prototype, "recipes", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], RecipetableComponent.prototype, "index", void 0);
RecipetableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'recipetable',
        template: __webpack_require__(191),
        styles: [__webpack_require__(176)]
    }),
    __metadata("design:paramtypes", [])
], RecipetableComponent);

//# sourceMappingURL=recipetable.component.js.map

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n#navcontainer\n{\n\toverflow: hidden;\n\tbackground-color: rgb(0,0,0);\n}\n\nul#navlist\n{\n\ttext-align: end;\n\tmargin-left: 0;\n\tpadding-left: 0;\n\twhite-space: nowrap;\n}\n\n#navlist li\n{\n\tdisplay: inline;\n\tlist-style-type: none;\n\n}\n\n#navlist a { padding: 20px 20px;  }\n\n#navlist a:link, #navlist a:visited\n{\n\tcolor: #fff;\n\tbackground-color: rgb(0,0,0);\n\ttext-decoration: none;\n\tfont-family:Arial;\n}\n\n#navlist a:hover\n{\n\tcolor: #fff;\n\tbackground-color: #333;\n\ttext-decoration: none;\n}\n\n#banner{\n\tbackground-image: url(" + __webpack_require__(10) + ");\n\tbackground-size: cover;\n\tpadding:30px;\n\ttext-align:center;\n\tfont-family:Arial;\n\tfont-style: italic;\n\twidth: 97%;\n}\n#banner h1 {\n\tfont-size:40px;\n\tcolor: white;\n}\n#banner p {\n\tfont-size:20px;\n\tcolor: white;\n}\n.background {\n\tdisplay:block;\n    position:absolute;\n\tbackground-image: url(" + __webpack_require__(9) + ");\n\tbackground-size: cover;\nwidth: 100%; height: 100%;\n}\n.recipes {\n\tmargin-left: 50px;\n\tmargin-top: 50px;\n\tposition: relative;\n\tfloat: left;\n}\n.recipes a{\n\tcolor:rgb(0,0,0);\n\ttext-decoration: none;\n\t\n}\n.recipes li{\n\tcolor:rgb(0,0,0);\n\tfont-family:Lucida;\t\n\tfont-style: italic;\n\tfont-size: 40px;\n\tlist-style-type: none;\n\tpadding: 10px;\t\n}\n\n.recipes text{\n\tcolor:rgb(0,0,0);\n\tfont-size: 20px;\n\tlist-style-type: none;\n}\n\n.recipesCategory {\n\tmargin-left: 20px;\n\tmargin-top: 20px;\n\tposition: relative;\n\tfont-size: 30px;\n\tfloat: left;\n}\n.recipesCategory a{\n\tcolor:rgb(0,0,0);\n\ttext-decoration: none;\n\t\n}\nselect {\n  font-size: 20px;\n}\n\ntextarea {\n\tfont-size: 20px;\n  \tpadding: 13px 32px;\n  \tborder-radius: 8px;\n  \tfont-style: bold;\n}\n\ninput {\n  font-size: 20px;\n  padding: 13px 32px;\n  border-radius: 8px;\n  font-style: bold;\n}\n\n.recipesDetails {\n\tmargin-left: 200px;\n\tmargin-top: 20px;\n\tposition: relative;\n\tfont-size: 20px;\n\tcolor:rgb(0,0,0);\n\ttext-decoration: none;\n}\n\n.sidebar \n{\n\tfont-family:Lucida;\t\n\tfont-style: italic;\n\tfont-size: 20px;\n\ttext-decoration: none;\n\tpadding:50px, 100px,50px,50px;\n\tmargin-left: 50 px;\n\n}\n.container{\ndisplay: -ms-grid;\ndisplay: grid;\n-ms-grid-columns:40% 60%;\n    grid-template-columns:40% 60%;\ngrid-column-gap:20px;\n\n}\n.sidebar\n{\n\tmargin-top: 100px;\n\t\n}\n#hreflink a{background-color: Transparent;\n    color: black;\n    border: 2px solid #f44336;\n    padding: 13px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n\tborder-radius: 8px; /* Safari */\n transition-duration: 0.4s;\n\tfont-style: bold;\n}\n#hreflink a:hover{\n\tbackground-color: #f44336;\n    color: black;\n}\n\nbutton {\n\tbackground-color: Transparent;\n    color: black;\n    border: 2px solid #f44336;\n    padding: 13px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n\tborder-radius: 8px; /* Safari */\n transition-duration: 0.4s;\n\tfont-style: bold;\n}\n\n\nbutton:hover {\n    background-color: #f44336;\n    color: black;\n}\n\nspan {\n\tfont-size: 20px;\n\tfont-style: bold;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\r\n#navcontainer\r\n{\r\n\toverflow: hidden;\r\n\tbackground-color: rgb(0,0,0);\r\n}\r\n\r\nul#navlist\r\n{\r\n\ttext-align: end;\r\n\tmargin-left: 0;\r\n\tpadding-left: 0;\r\n\twhite-space: nowrap;\r\n}\r\n\r\n#navlist li\r\n{\r\n\tdisplay: inline;\r\n\tlist-style-type: none;\r\n\r\n}\r\n\r\n#navlist a { padding: 20px 20px;  }\r\n\r\n#navlist a:link, #navlist a:visited\r\n{\r\n\tcolor: #fff;\r\n\tbackground-color: rgb(0,0,0);\r\n\ttext-decoration: none;\r\n\tfont-family:Arial;\r\n}\r\n\r\n#navlist a:hover\r\n{\r\n\tcolor: #fff;\r\n\tbackground-color: #333;\r\n\ttext-decoration: none;\r\n}\r\n\r\n#banner{\r\n\tbackground-image: url(" + __webpack_require__(10) + ");\r\n\tbackground-size: cover;\r\n\tpadding:30px;\r\n\ttext-align:center;\r\n\tfont-family:Arial;\r\n\tfont-style: italic;\r\n\twidth: 97%;\r\n}\r\n#banner h1 {\r\n\tfont-size:40px;\r\n\tcolor: white;\r\n}\r\n#banner p {\r\n\tfont-size:20px;\r\n\tcolor: white;\r\n}\r\n.background {\r\n\tdisplay:block;\r\n    position:absolute;\r\n\tbackground-image: url(" + __webpack_require__(9) + ");\r\n\tbackground-size: cover;\r\nwidth: 100%; height: 100%;\r\n}\r\n.recipes {\r\n\tmargin-left: 50px;\r\n\tmargin-top: 50px;\r\n\tposition: relative;\r\n\tfloat: left;\r\n}\r\n.recipes a{\r\n\tcolor:rgb(0,0,0);\r\n\ttext-decoration: none;\r\n\t\r\n}\r\n.recipes li{\r\n\tcolor:rgb(0,0,0);\r\n\tfont-family:Lucida;\t\r\n\tfont-style: italic;\r\n\tfont-size: 40px;\r\n\tlist-style-type: none;\r\n\tpadding: 10px;\t\r\n}\r\n\r\n.recipes text{\r\n\tcolor:rgb(0,0,0);\r\n\tfont-size: 20px;\r\n\tlist-style-type: none;\r\n}\r\n\r\n.recipesCategory {\r\n\tmargin-left: 20px;\r\n\tmargin-top: 20px;\r\n\tposition: relative;\r\n\tfont-size: 30px;\r\n\tfloat: left;\r\n}\r\n.recipesCategory a{\r\n\tcolor:rgb(0,0,0);\r\n\ttext-decoration: none;\r\n\t\r\n}\r\nselect {\r\n  font-size: 20px;\r\n}\r\n\r\ntextarea {\r\n\tfont-size: 20px;\r\n  \tpadding: 13px 32px;\r\n  \tborder-radius: 8px;\r\n  \tfont-style: bold;\r\n}\r\n\r\ninput {\r\n  font-size: 20px;\r\n  padding: 13px 32px;\r\n  border-radius: 8px;\r\n  font-style: bold;\r\n}\r\n\r\n.recipesDetails {\r\n\tmargin-left: 200px;\r\n\tmargin-top: 20px;\r\n\tposition: relative;\r\n\tfont-size: 20px;\r\n\tcolor:rgb(0,0,0);\r\n\ttext-decoration: none;\r\n}\r\n\r\n.sidebar \r\n{\r\n\tfont-family:Lucida;\t\r\n\tfont-style: italic;\r\n\tfont-size: 20px;\r\n\ttext-decoration: none;\r\n\tpadding:50px, 100px,50px,50px;\r\n\tmargin-left: 50 px;\r\n\r\n}\r\n.container{\r\ndisplay: -ms-grid;\r\ndisplay: grid;\r\n-ms-grid-columns:40% 60%;\r\n    grid-template-columns:40% 60%;\r\ngrid-column-gap:20px;\r\n\r\n}\r\n.sidebar\r\n{\r\n\tmargin-top: 100px;\r\n\t\r\n}\r\n#hreflink a{background-color: Transparent;\r\n    color: black;\r\n    border: 2px solid #f44336;\r\n    padding: 13px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n\tborder-radius: 8px; /* Safari */\r\n transition-duration: 0.4s;\r\n\tfont-style: bold;\r\n}\r\n#hreflink a:hover{\r\n\tbackground-color: #f44336;\r\n    color: black;\r\n}\r\n\r\nbutton {\r\n\tbackground-color: Transparent;\r\n    color: black;\r\n    border: 2px solid #f44336;\r\n    padding: 13px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n\tborder-radius: 8px; /* Safari */\r\n transition-duration: 0.4s;\r\n\tfont-style: bold;\r\n}\r\n\r\n\r\nbutton:hover {\r\n    background-color: #f44336;\r\n    color: black;\r\n}\r\n\r\nspan {\r\n\tfont-size: 20px;\r\n\tfont-style: bold;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\r\n#navcontainer\r\n{\r\n\toverflow: hidden;\r\n\tbackground-color: rgb(0,0,0);\r\n}\r\n\r\nul#navlist\r\n{\r\n\ttext-align: end;\r\n\tmargin-left: 0;\r\n\tpadding-left: 0;\r\n\twhite-space: nowrap;\r\n}\r\n\r\n#navlist li\r\n{\r\n\tdisplay: inline;\r\n\tlist-style-type: none;\r\n\r\n}\r\n\r\n#navlist a { padding: 20px 20px;  }\r\n\r\n#navlist a:link, #navlist a:visited\r\n{\r\n\tcolor: #fff;\r\n\tbackground-color: rgb(0,0,0);\r\n\ttext-decoration: none;\r\n\tfont-family:Arial;\r\n}\r\n\r\n#navlist a:hover\r\n{\r\n\tcolor: #fff;\r\n\tbackground-color: #333;\r\n\ttext-decoration: none;\r\n}\r\n\r\n#banner{\r\n\tbackground-image: url(" + __webpack_require__(10) + ");\r\n\tbackground-size: cover;\r\n\tpadding:30px;\r\n\ttext-align:center;\r\n\tfont-family:Arial;\r\n\tfont-style: italic;\r\n\twidth: 97%;\r\n}\r\n#banner h1 {\r\n\tfont-size:40px;\r\n\tcolor: white;\r\n}\r\n#banner p {\r\n\tfont-size:20px;\r\n\tcolor: white;\r\n}\r\n.background {\r\n\tdisplay:block;\r\n    position:absolute;\r\n\tbackground-image: url(" + __webpack_require__(9) + ");\r\n\tbackground-size: cover;\r\nwidth: 100%; height: 100%;\r\n}\r\n.recipes {\r\n\tmargin-left: 50px;\r\n\tmargin-top: 50px;\r\n\tposition: relative;\r\n\tfloat: left;\r\n}\r\n.recipes a{\r\n\tcolor:rgb(0,0,0);\r\n\ttext-decoration: none;\r\n\t\r\n}\r\n.recipes li{\r\n\tcolor:rgb(0,0,0);\r\n\tfont-family:Lucida;\t\r\n\tfont-style: italic;\r\n\tfont-size: 40px;\r\n\tlist-style-type: none;\r\n\tpadding: 10px;\t\r\n}\r\n\r\n.recipes text{\r\n\tcolor:rgb(0,0,0);\r\n\tfont-size: 20px;\r\n\tlist-style-type: none;\r\n}\r\n\r\n.recipesCategory {\r\n\tmargin-left: 20px;\r\n\tmargin-top: 20px;\r\n\tposition: relative;\r\n\tfont-size: 30px;\r\n\tfloat: left;\r\n}\r\n.recipesCategory a{\r\n\tcolor:rgb(0,0,0);\r\n\ttext-decoration: none;\r\n\t\r\n}\r\nselect {\r\n  font-size: 20px;\r\n}\r\n\r\ntextarea {\r\n\tfont-size: 20px;\r\n  \tpadding: 13px 32px;\r\n  \tborder-radius: 8px;\r\n  \tfont-style: bold;\r\n}\r\n\r\ninput {\r\n  font-size: 20px;\r\n  padding: 13px 32px;\r\n  border-radius: 8px;\r\n  font-style: bold;\r\n}\r\n\r\n.recipesDetails {\r\n\tmargin-left: 200px;\r\n\tmargin-top: 20px;\r\n\tposition: relative;\r\n\tfont-size: 20px;\r\n\tcolor:rgb(0,0,0);\r\n\ttext-decoration: none;\r\n}\r\n\r\n.sidebar \r\n{\r\n\tfont-family:Lucida;\t\r\n\tfont-style: italic;\r\n\tfont-size: 20px;\r\n\ttext-decoration: none;\r\n\tpadding:50px, 100px,50px,50px;\r\n\tmargin-left: 50 px;\r\n\r\n}\r\n.container{\r\ndisplay: -ms-grid;\r\ndisplay: grid;\r\n-ms-grid-columns:40% 60%;\r\n    grid-template-columns:40% 60%;\r\ngrid-column-gap:20px;\r\n\r\n}\r\n.sidebar\r\n{\r\n\tmargin-top: 100px;\r\n\t\r\n}\r\n#hreflink a{background-color: Transparent;\r\n    color: black;\r\n    border: 2px solid #f44336;\r\n    padding: 13px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n\tborder-radius: 8px; /* Safari */\r\n transition-duration: 0.4s;\r\n\tfont-style: bold;\r\n}\r\n#hreflink a:hover{\r\n\tbackground-color: #f44336;\r\n    color: black;\r\n}\r\n\r\nbutton {\r\n\tbackground-color: Transparent;\r\n    color: black;\r\n    border: 2px solid #f44336;\r\n    padding: 13px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n\tborder-radius: 8px; /* Safari */\r\n transition-duration: 0.4s;\r\n\tfont-style: bold;\r\n}\r\n\r\n\r\nbutton:hover {\r\n    background-color: #f44336;\r\n    color: black;\r\n}\r\n\r\nspan {\r\n\tfont-size: 20px;\r\n\tfont-style: bold;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\r\n#navcontainer\r\n{\r\n\toverflow: hidden;\r\n\tbackground-color: rgb(0,0,0);\r\n}\r\n\r\nul#navlist\r\n{\r\n\ttext-align: end;\r\n\tmargin-left: 0;\r\n\tpadding-left: 0;\r\n\twhite-space: nowrap;\r\n}\r\n\r\n#navlist li\r\n{\r\n\tdisplay: inline;\r\n\tlist-style-type: none;\r\n\r\n}\r\n\r\n#navlist a { padding: 20px 20px;  }\r\n\r\n#navlist a:link, #navlist a:visited\r\n{\r\n\tcolor: #fff;\r\n\tbackground-color: rgb(0,0,0);\r\n\ttext-decoration: none;\r\n\tfont-family:Arial;\r\n}\r\n\r\n#navlist a:hover\r\n{\r\n\tcolor: #fff;\r\n\tbackground-color: #333;\r\n\ttext-decoration: none;\r\n}\r\n\r\n#banner{\r\n\tbackground-image: url(" + __webpack_require__(63) + ");\r\n\tbackground-size: cover;\r\n\tpadding:30px;\r\n\ttext-align:center;\r\n\tfont-family:Arial;\r\n\tfont-style: italic;\r\n}\r\n#banner h1 {\r\n\tfont-size:40px;\r\n\tcolor: white;\r\n}\r\n.background {\r\n\tdisplay:block;\r\n    position:absolute;\r\n\tbackground-image: url(" + __webpack_require__(62) + ");\r\n\tbackground-size: cover;\r\nwidth: 100%; height: 70%;\r\n}\r\n.recipes {\r\n\tmargin-left: 50px;\r\n\tmargin-top: 50px;\r\n\tposition: relative;\r\n\tfloat: left;\r\n}\r\n.recipes a{\r\n\tcolor:rgb(0,0,0);\r\n\ttext-decoration: none;\r\n\t\r\n}\r\n.recipes li{\r\n\tcolor:rgb(0,0,0);\r\n\tfont-family:Lucida;\t\r\n\tfont-style: italic;\r\n\tfont-size: 40px;\r\n\tlist-style-type: none;\r\n\tpadding: 10px;\t\r\n}\r\n\r\n.recipes text{\r\n\tcolor:rgb(0,0,0);\r\n\tfont-size: 20px;\r\n\tlist-style-type: none;\r\n}\r\n\r\n.recipesCategory {\r\n\tmargin-left: 20px;\r\n\tmargin-top: 20px;\r\n\tposition: relative;\r\n\tfont-size: 30px;\r\n\tfloat: left;\r\n}\r\n.recipesCategory a{\r\n\tcolor:rgb(0,0,0);\r\n\ttext-decoration: none;\r\n\t\r\n}\r\nselect {\r\n  font-size: 20px;\r\n}\r\n\r\ntextarea {\r\n\tfont-size: 20px;\r\n  \tpadding: 13px 32px;\r\n  \tborder-radius: 8px;\r\n  \tfont-style: bold;\r\n}\r\n\r\ninput {\r\n  font-size: 20px;\r\n}\r\n\r\n.recipesDetails {\r\n\tmargin-left: 200px;\r\n\tmargin-top: 20px;\r\n\tposition: relative;\r\n\tfont-size: 20px;\r\n\tcolor:rgb(0,0,0);\r\n\ttext-decoration: none;\r\n}\r\n\r\n.sidebar \r\n{\r\n\tfont-family:Lucida;\t\r\n\tfont-style: italic;\r\n\tfont-size: 20px;\r\n\ttext-decoration: none;\r\n\tpadding:50px, 100px,50px,50px;\r\n\tmargin-left: 50 px;\r\n\r\n}\r\n.container{\r\ndisplay: -ms-grid;\r\ndisplay: grid;\r\n-ms-grid-columns:40% 60%;\r\n    grid-template-columns:40% 60%;\r\ngrid-column-gap:20px;\r\n\r\n}\r\n.sidebar\r\n{\r\n\tmargin-top: 100px;\r\n\t\r\n}\r\n#hreflink a{background-color: Transparent;\r\n    color: black;\r\n    border: 2px solid #f44336;\r\n    padding: 13px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n\tborder-radius: 8px; /* Safari */\r\n transition-duration: 0.4s;\r\n\tfont-style: bold;\r\n}\r\n#hreflink a:hover{\r\n\tbackground-color: #f44336;\r\n    color: black;\r\n}\r\n\r\nbutton {\r\n\tbackground-color: Transparent;\r\n    color: black;\r\n    border: 2px solid #f44336;\r\n    padding: 13px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n\tborder-radius: 8px; /* Safari */\r\n transition-duration: 0.4s;\r\n\tfont-style: bold;\r\n}\r\n\r\n\r\nbutton:hover {\r\n    background-color: #f44336;\r\n    color: black;\r\n}\r\n\r\nspan {\r\n\tfont-size: 20px;\r\n\tfont-style: bold;\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n#navcontainer\n{\n\toverflow: hidden;\n\tbackground-color: rgb(0,0,0);\n}\n\nul#navlist\n{\n\ttext-align: end;\n\tmargin-left: 0;\n\tpadding-left: 0;\n\twhite-space: nowrap;\n}\n\n#navlist li\n{\n\tdisplay: inline;\n\tlist-style-type: none;\n\n}\n\n#navlist a { padding: 20px 20px;  }\n\n#navlist a:link, #navlist a:visited\n{\n\tcolor: #fff;\n\tbackground-color: rgb(0,0,0);\n\ttext-decoration: none;\n\tfont-family:Arial;\n}\n\n#navlist a:hover\n{\n\tcolor: #fff;\n\tbackground-color: #333;\n\ttext-decoration: none;\n}\n\n#banner{\n\tbackground-image: url(" + __webpack_require__(10) + ");\n\tbackground-size: cover;\n\tpadding:30px;\n\ttext-align:center;\n\tfont-family:Arial;\n\tfont-style: italic;\n\twidth: 97%;\n}\n#banner h1 {\n\tfont-size:40px;\n\tcolor: white;\n}\n#banner p {\n\tfont-size:20px;\n\tcolor: white;\n}\n.background {\n\tdisplay:block;\n    position:absolute;\n\tbackground-image: url(" + __webpack_require__(9) + ");\n\tbackground-size: cover;\nwidth: 100%; height: 100%;\n}\n.recipes {\n\tmargin-left: 50px;\n\tmargin-top: 50px;\n\tposition: relative;\n\tfloat: left;\n}\n.recipes a{\n\tcolor:rgb(0,0,0);\n\ttext-decoration: none;\n\t\n}\n.recipes li{\n\tcolor:rgb(0,0,0);\n\tfont-family:Lucida;\t\n\tfont-style: italic;\n\tfont-size: 40px;\n\tlist-style-type: none;\n\tpadding: 10px;\t\n}\n\n.recipes text{\n\tcolor:rgb(0,0,0);\n\tfont-size: 20px;\n\tlist-style-type: none;\n}\n\n.recipesCategory {\n\tmargin-left: 20px;\n\tmargin-top: 20px;\n\tposition: relative;\n\tfont-size: 30px;\n\tfloat: left;\n}\n.recipesCategory a{\n\tcolor:rgb(0,0,0);\n\ttext-decoration: none;\n\t\n}\nselect {\n  font-size: 20px;\n}\n\ntextarea {\n\tfont-size: 20px;\n  \tpadding: 13px 32px;\n  \tborder-radius: 8px;\n  \tfont-style: bold;\n}\n\ninput {\n  font-size: 20px;\n  padding: 13px 32px;\n  border-radius: 8px;\n  font-style: bold;\n}\n\n.recipesDetails {\n\tmargin-left: 200px;\n\tmargin-top: 20px;\n\tposition: relative;\n\tfont-size: 20px;\n\tcolor:rgb(0,0,0);\n\ttext-decoration: none;\n}\n\n.sidebar \n{\n\tfont-family:Lucida;\t\n\tfont-style: italic;\n\tfont-size: 20px;\n\ttext-decoration: none;\n\tpadding:50px, 100px,50px,50px;\n\tmargin-left: 50 px;\n\n}\n.container{\ndisplay: -ms-grid;\ndisplay: grid;\n-ms-grid-columns:40% 60%;\n    grid-template-columns:40% 60%;\ngrid-column-gap:20px;\n\n}\n.contentdetails{\n\tmargin-left: 10px;\n}\n.sidebar\n{\n\tmargin-top: 100px;\n\t\n}\n#hreflink a{background-color: Transparent;\n    color: black;\n    border: 2px solid #f44336;\n    padding: 13px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n\tborder-radius: 8px; /* Safari */\n transition-duration: 0.4s;\n\tfont-style: bold;\n}\n#hreflink a:hover{\n\tbackground-color: #f44336;\n    color: black;\n}\n\nbutton {\n\tbackground-color: Transparent;\n    color: black;\n    border: 2px solid #f44336;\n    padding: 13px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n\tborder-radius: 8px; /* Safari */\n transition-duration: 0.4s;\n\tfont-style: bold;\n}\n\n\nbutton:hover {\n    background-color: #f44336;\n    color: black;\n}\n\nspan {\n\tfont-size: 20px;\n\tfont-style: bold;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n#navcontainer\n{\n\toverflow: hidden;\n\tbackground-color: rgb(0,0,0);\n}\n\nul#navlist\n{\n\ttext-align: end;\n\tmargin-left: 0;\n\tpadding-left: 0;\n\twhite-space: nowrap;\n}\n\n#navlist li\n{\n\tdisplay: inline;\n\tlist-style-type: none;\n\n}\n\n#navlist a { padding: 20px 20px;  }\n\n#navlist a:link, #navlist a:visited\n{\n\tcolor: #fff;\n\tbackground-color: rgb(0,0,0);\n\ttext-decoration: none;\n\tfont-family:Arial;\n}\n\n#navlist a:hover\n{\n\tcolor: #fff;\n\tbackground-color: #333;\n\ttext-decoration: none;\n}\n\n#banner{\n\tbackground-image: url(" + __webpack_require__(63) + ");\n\tbackground-size: cover;\n\tpadding:30px;\n\ttext-align:center;\n\tfont-family:Arial;\n\tfont-style: italic;\n}\n#banner h1 {\n\tfont-size:40px;\n\tcolor: white;\n}\n.background {\n\tdisplay:block;\n    position:absolute;\n\tbackground-image: url(" + __webpack_require__(62) + ");\n\tbackground-size: cover;\nwidth: 100%; height: 70%;\n}\n.recipes {\n\tmargin-left: 50px;\n\tmargin-top: 50px;\n\tposition: relative;\n\tfloat: left;\n}\n.recipes a{\n\tcolor:rgb(0,0,0);\n\ttext-decoration: none;\n\t\n}\n.recipes li{\n\tcolor:rgb(0,0,0);\n\tfont-family:Lucida;\t\n\tfont-style: italic;\n\tfont-size: 40px;\n\tlist-style-type: none;\n\tpadding: 10px;\t\n}\n\n.recipes text{\n\tcolor:rgb(0,0,0);\n\tfont-size: 20px;\n\tlist-style-type: none;\n}\n\n.recipesCategory {\n\tmargin-left: 20px;\n\tmargin-top: 20px;\n\tposition: relative;\n\tfont-size: 30px;\n\tfloat: left;\n}\n.recipesCategory a{\n\tcolor:rgb(0,0,0);\n\ttext-decoration: none;\n\t\n}\nselect {\n  font-size: 20px;\n}\n\ntextarea {\n\tfont-size: 20px;\n  \tpadding: 13px 32px;\n  \tborder-radius: 8px;\n  \tfont-style: bold;\n}\n\ninput {\n  font-size: 20px;\n}\n\n.recipesDetails {\n\tmargin-left: 200px;\n\tmargin-top: 20px;\n\tposition: relative;\n\tfont-size: 20px;\n\tcolor:rgb(0,0,0);\n\ttext-decoration: none;\n}\n\n.sidebar \n{\n\tfont-family:Lucida;\t\n\tfont-style: italic;\n\tfont-size: 20px;\n\ttext-decoration: none;\n\tpadding:50px, 100px,50px,50px;\n\tmargin-left: 50 px;\n\n}\n.container{\ndisplay: -ms-grid;\ndisplay: grid;\n-ms-grid-columns:40% 60%;\n    grid-template-columns:40% 60%;\ngrid-column-gap:20px;\n\n}\n.sidebar\n{\n\tmargin-top: 100px;\n\t\n}\n#hreflink a{background-color: Transparent;\n    color: black;\n    border: 2px solid #f44336;\n    padding: 13px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n\tborder-radius: 8px; /* Safari */\n transition-duration: 0.4s;\n\tfont-style: bold;\n}\n#hreflink a:hover{\n\tbackground-color: #f44336;\n    color: black;\n}\n\nbutton {\n\tbackground-color: Transparent;\n    color: black;\n    border: 2px solid #f44336;\n    padding: 13px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n\tborder-radius: 8px; /* Safari */\n transition-duration: 0.4s;\n\tfont-style: bold;\n}\n\n\nbutton:hover {\n    background-color: #f44336;\n    color: black;\n}\n\nspan {\n\tfont-size: 20px;\n\tfont-style: bold;\n}\n\n.contentdetails{\n\tmargin-left: 10px;\n}\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\r\n#navcontainer\r\n{\r\n\toverflow: hidden;\r\n\tbackground-color: rgb(0,0,0);\r\n}\r\n\r\nul#navlist\r\n{\r\n\ttext-align: end;\r\n\tmargin-left: 0;\r\n\tpadding-left: 0;\r\n\twhite-space: nowrap;\r\n}\r\n\r\n#navlist li\r\n{\r\n\tdisplay: inline;\r\n\tlist-style-type: none;\r\n\r\n}\r\n\r\n#navlist a { padding: 20px 20px;  }\r\n\r\n#navlist a:link, #navlist a:visited\r\n{\r\n\tcolor: #fff;\r\n\tbackground-color: rgb(0,0,0);\r\n\ttext-decoration: none;\r\n\tfont-family:Arial;\r\n}\r\n\r\n#navlist a:hover\r\n{\r\n\tcolor: #fff;\r\n\tbackground-color: #333;\r\n\ttext-decoration: none;\r\n}\r\n\r\n#banner{\r\n\tbackground-image: url(" + __webpack_require__(10) + ");\r\n\tbackground-size: cover;\r\n\tpadding:30px;\r\n\ttext-align:center;\r\n\tfont-family:Arial;\r\n\tfont-style: italic;\r\n\twidth: 97%;\r\n}\r\n#banner h1 {\r\n\tfont-size:40px;\r\n\tcolor: white;\r\n}\r\n#banner p {\r\n\tfont-size:20px;\r\n\tcolor: white;\r\n}\r\n.background {\r\n\tdisplay:block;\r\n    position:absolute;\r\n\tbackground-image: url(" + __webpack_require__(9) + ");\r\n\tbackground-size: cover;\r\nwidth: 100%; height: 100%;\r\n}\r\n.recipes {\r\n\tmargin-left: 50px;\r\n\tmargin-top: 50px;\r\n\tposition: relative;\r\n\tfloat: left;\r\n}\r\n.recipes a{\r\n\tcolor:rgb(0,0,0);\r\n\ttext-decoration: none;\r\n\t\r\n}\r\n.recipes li{\r\n\tcolor:rgb(0,0,0);\r\n\tfont-family:Lucida;\t\r\n\tfont-style: italic;\r\n\tfont-size: 40px;\r\n\tlist-style-type: none;\r\n\tpadding: 10px;\t\r\n}\r\n\r\n.recipes text{\r\n\tcolor:rgb(0,0,0);\r\n\tfont-size: 20px;\r\n\tlist-style-type: none;\r\n}\r\n\r\n.recipesCategory {\r\n\tmargin-left: 20px;\r\n\tmargin-top: 20px;\r\n\tposition: relative;\r\n\tfont-size: 30px;\r\n\tfloat: left;\r\n}\r\n.recipesCategory a{\r\n\tcolor:rgb(0,0,0);\r\n\ttext-decoration: none;\r\n\t\r\n}\r\nselect {\r\n  font-size: 20px;\r\n}\r\n\r\ntextarea {\r\n\tfont-size: 20px;\r\n}\r\n\r\n.recipesDetails {\r\n\tmargin-left: 200px;\r\n\tmargin-top: 20px;\r\n\tposition: relative;\r\n\tfont-size: 20px;\r\n\tcolor:rgb(0,0,0);\r\n\ttext-decoration: none;\r\n}\r\n\r\n.sidebar \r\n{\r\n\tfont-family:Lucida;\t\r\n\tfont-style: italic;\r\n\tfont-size: 20px;\r\n\ttext-decoration: none;\r\n\tpadding:50px, 100px,50px,50px;\r\n\tmargin-left: 50 px;\r\n\r\n}\r\n.container{\r\ndisplay: -ms-grid;\r\ndisplay: grid;\r\n-ms-grid-columns:40% 60%;\r\n    grid-template-columns:40% 60%;\r\ngrid-column-gap:20px;\r\n\r\n}\r\n\r\n.contentdetails{\r\n\tmargin-left: 10px;\r\n}\r\n\r\n.sidebar\r\n{\r\n\tmargin-top: 100px;\r\n\t\r\n}\r\n#hreflink a{background-color: Transparent;\r\n    color: black;\r\n    border: 2px solid #f44336;\r\n    padding: 13px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n\tborder-radius: 8px; /* Safari */\r\n transition-duration: 0.4s;\r\n\tfont-style: bold;\r\n}\r\n#hreflink a:hover{\r\n\tbackground-color: #f44336;\r\n    color: black;\r\n}\r\n\r\nbutton {\r\n\tbackground-color: Transparent;\r\n    color: black;\r\n    border: 2px solid #f44336;\r\n    padding: 13px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n\tborder-radius: 8px; /* Safari */\r\n transition-duration: 0.4s;\r\n\tfont-style: bold;\r\n}\r\n\r\n\r\nbutton:hover {\r\n    background-color: #f44336;\r\n    color: black;\r\n}\r\n\r\nspan {\r\n\tfont-size: 20px;\r\n\tfont-style: bold;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n#navcontainer\n{\n\toverflow: hidden;\n\tbackground-color: rgb(0,0,0);\n}\n\nul#navlist\n{\n\ttext-align: end;\n\tmargin-left: 0;\n\tpadding-left: 0;\n\twhite-space: nowrap;\n}\n\n#navlist li\n{\n\tdisplay: inline;\n\tlist-style-type: none;\n\n}\n\n#navlist a { padding: 20px 20px;  }\n\n#navlist a:link, #navlist a:visited\n{\n\tcolor: #fff;\n\tbackground-color: rgb(0,0,0);\n\ttext-decoration: none;\n\tfont-family:Arial;\n}\n\n#navlist a:hover\n{\n\tcolor: #fff;\n\tbackground-color: #333;\n\ttext-decoration: none;\n}\n\n#banner{\n\tbackground-image: url(" + __webpack_require__(10) + ");\n\tbackground-size: cover;\n\tpadding:30px;\n\ttext-align:center;\n\tfont-family:Arial;\n\tfont-style: italic;\n\twidth: 97%;\n}\n#banner h1 {\n\tfont-size:40px;\n\tcolor: white;\n}\n#banner p {\n\tfont-size:20px;\n\tcolor: white;\n}\n.background {\n\tdisplay:block;\n    position:absolute;\n\tbackground-image: url(" + __webpack_require__(9) + ");\n\tbackground-size: cover;\nwidth: 100%; height: 100%;\n}\n.recipes {\n\tmargin-left: 50px;\n\tmargin-top: 50px;\n\tposition: relative;\n\tfloat: left;\n}\n.recipes a{\n\tcolor:rgb(0,0,0);\n\ttext-decoration: none;\n\t\n}\n.recipes li{\n\tcolor:rgb(0,0,0);\n\tfont-family:Lucida;\t\n\tfont-style: italic;\n\tfont-size: 40px;\n\tlist-style-type: none;\n\tpadding: 10px;\t\n}\n\n.recipes text{\n\tcolor:rgb(0,0,0);\n\tfont-size: 20px;\n\tlist-style-type: none;\n}\n\n.recipesCategory {\n\tmargin-left: 20px;\n\tmargin-top: 20px;\n\tposition: relative;\n\tfont-size: 30px;\n\tfloat: left;\n}\n.recipesCategory a{\n\tcolor:rgb(0,0,0);\n\ttext-decoration: none;\n\t\n}\nselect {\n  font-size: 20px;\n}\n\ntextarea {\n\tfont-size: 20px;\n}\n\n.recipesDetails {\n\tmargin-left: 200px;\n\tmargin-top: 20px;\n\tposition: relative;\n\tfont-size: 20px;\n\tcolor:rgb(0,0,0);\n\ttext-decoration: none;\n}\n\n.sidebar \n{\n\tfont-family:Lucida;\t\n\tfont-style: italic;\n\tfont-size: 20px;\n\ttext-decoration: none;\n\tpadding:50px, 100px,50px,50px;\n\tmargin-left: 50 px;\n\n}\n.container{\ndisplay: -ms-grid;\ndisplay: grid;\n-ms-grid-columns:40% 60%;\n    grid-template-columns:40% 60%;\ngrid-column-gap:20px;\n\n}\n\n.contentdetails{\n\tmargin-left: 10px;\n}\n\n.sidebar\n{\n\tmargin-top: 100px;\n\t\n}\n#hreflink a{background-color: Transparent;\n    color: black;\n    border: 2px solid #f44336;\n    padding: 13px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n\tborder-radius: 8px; /* Safari */\n transition-duration: 0.4s;\n\tfont-style: bold;\n}\n#hreflink a:hover{\n\tbackground-color: #f44336;\n    color: black;\n}\n\nbutton {\n\tbackground-color: Transparent;\n    color: black;\n    border: 2px solid #f44336;\n    padding: 13px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n\tborder-radius: 8px; /* Safari */\n transition-duration: 0.4s;\n\tfont-style: bold;\n}\n\n\nbutton:hover {\n    background-color: #f44336;\n    color: black;\n}\n\nspan {\n\tfont-size: 20px;\n\tfont-style: bold;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n#navcontainer\n{\n\toverflow: hidden;\n\tbackground-color: rgb(0,0,0);\n}\n\nul#navlist\n{\n\ttext-align: end;\n\tmargin-left: 0;\n\tpadding-left: 0;\n\twhite-space: nowrap;\n}\n\n#navlist li\n{\n\tdisplay: inline;\n\tlist-style-type: none;\n\n}\n\n#navlist a { padding: 20px 20px;  }\n\n#navlist a:link, #navlist a:visited\n{\n\tcolor: #fff;\n\tbackground-color: rgb(0,0,0);\n\ttext-decoration: none;\n\tfont-family:Arial;\n}\n\n#navlist a:hover\n{\n\tcolor: #fff;\n\tbackground-color: #333;\n\ttext-decoration: none;\n}\n\n#banner{\n\tbackground-image: url(" + __webpack_require__(10) + ");\n\tbackground-size: cover;\n\tpadding:30px;\n\ttext-align:center;\n\tfont-family:Arial;\n\tfont-style: italic;\n\twidth: 97%;\n}\n#banner h1 {\n\tfont-size:40px;\n\tcolor: white;\n}\n#banner p {\n\tfont-size:20px;\n\tcolor: white;\n}\n.background {\n\tdisplay:block;\n    position:absolute;\n\tbackground-image: url(" + __webpack_require__(9) + ");\n\tbackground-size: cover;\nwidth: 100%; height: 100%;\n}\n.recipes {\n\tmargin-left: 50px;\n\tmargin-top: 50px;\n\tposition: relative;\n\tfloat: left;\n}\n.recipes a{\n\tcolor:rgb(0,0,0);\n\ttext-decoration: none;\n\t\n}\n.recipes li{\n\tcolor:rgb(0,0,0);\n\tfont-family:Lucida;\t\n\tfont-style: italic;\n\tfont-size: 40px;\n\tlist-style-type: none;\n\tpadding: 10px;\t\n}\n\n.recipes text{\n\tcolor:rgb(0,0,0);\n\tfont-size: 20px;\n\tlist-style-type: none;\n}\n\n.recipesCategory {\n\tmargin-left: 20px;\n\tmargin-top: 20px;\n\tposition: relative;\n\tfont-size: 30px;\n\tfloat: left;\n}\n.recipesCategory a{\n\tcolor:rgb(0,0,0);\n\ttext-decoration: none;\n\t\n}\nselect {\n  font-size: 20px;\n}\n\ntextarea {\n\tfont-size: 20px;\n  \tpadding: 13px 32px;\n  \tborder-radius: 8px;\n  \tfont-style: bold;\n}\n\ninput {\n  font-size: 20px;\n  padding: 13px 32px;\n  border-radius: 8px;\n  font-style: bold;\n}\n\n.recipesDetails {\n\tmargin-left: 200px;\n\tmargin-top: 20px;\n\tposition: relative;\n\tfont-size: 20px;\n\tcolor:rgb(0,0,0);\n\ttext-decoration: none;\n}\n\n.sidebar \n{\n\tfont-family:Lucida;\t\n\tfont-style: italic;\n\tfont-size: 20px;\n\ttext-decoration: none;\n\tpadding:50px, 100px,50px,50px;\n\tmargin-left: 50 px;\n\n}\n.container{\ndisplay: -ms-grid;\ndisplay: grid;\n-ms-grid-columns:40% 60%;\n    grid-template-columns:40% 60%;\ngrid-column-gap:20px;\n\n}\n.sidebar\n{\n\tmargin-top: 100px;\n\t\n}\n#hreflink a{background-color: Transparent;\n    color: black;\n    border: 2px solid #f44336;\n    padding: 13px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n\tborder-radius: 8px; /* Safari */\n transition-duration: 0.4s;\n\tfont-style: bold;\n}\n#hreflink a:hover{\n\tbackground-color: #f44336;\n    color: black;\n}\n\n.searchresult a{\n\tbackground-color: Transparent;\n    color: black;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 25px;\n    transition-duration: 0.4s;\n\tmargin-left: 70 px;\n}\n\nbutton {\n\tbackground-color: Transparent;\n    color: black;\n    border: 2px solid #f44336;\n    padding: 13px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n\tborder-radius: 8px; /* Safari */\n transition-duration: 0.4s;\n\tfont-style: bold;\n}\n\n\nbutton:hover {\n    background-color: #f44336;\n    color: black;\n}\n\nspan {\n\tfont-size: 20px;\n\tfont-style: bold;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\r\n#navcontainer\r\n{\r\n\toverflow: hidden;\r\n\tbackground-color: rgb(0,0,0);\r\n}\r\n\r\nul#navlist\r\n{\r\n\ttext-align: end;\r\n\tmargin-left: 0;\r\n\tpadding-left: 0;\r\n\twhite-space: nowrap;\r\n}\r\n\r\n#navlist li\r\n{\r\n\tdisplay: inline;\r\n\tlist-style-type: none;\r\n\r\n}\r\n\r\n#navlist a { padding: 20px 20px;  }\r\n\r\n#navlist a:link, #navlist a:visited\r\n{\r\n\tcolor: #fff;\r\n\tbackground-color: rgb(0,0,0);\r\n\ttext-decoration: none;\r\n\tfont-family:Arial;\r\n}\r\n\r\n#navlist a:hover\r\n{\r\n\tcolor: #fff;\r\n\tbackground-color: #333;\r\n\ttext-decoration: none;\r\n}\r\n\r\n#banner{\r\n\tbackground-image: url(" + __webpack_require__(63) + ");\r\n\tbackground-size: cover;\r\n\tpadding:30px;\r\n\ttext-align:center;\r\n\tfont-family:Arial;\r\n\tfont-style: italic;\r\n}\r\n#banner h1 {\r\n\tfont-size:40px;\r\n\tcolor: white;\r\n}\r\n.background {\r\n\tdisplay:block;\r\n    position:absolute;\r\n\tbackground-image: url(" + __webpack_require__(62) + ");\r\n\tbackground-size: cover;\r\nwidth: 100%; height: 70%;\r\n}\r\n.recipes {\r\n\tmargin-left: 50px;\r\n\tmargin-top: 50px;\r\n\tposition: relative;\r\n\tfloat: left;\r\n}\r\n.recipes a{\r\n\tcolor:rgb(0,0,0);\r\n\ttext-decoration: none;\r\n\t\r\n}\r\n.recipes li{\r\n\tcolor:rgb(0,0,0);\r\n\tfont-family:Lucida;\t\r\n\tfont-style: italic;\r\n\tfont-size: 40px;\r\n\tlist-style-type: none;\r\n\tpadding: 10px;\t\r\n}\r\n\r\n.recipes text{\r\n\tcolor:rgb(0,0,0);\r\n\tfont-size: 20px;\r\n\tlist-style-type: none;\r\n}\r\n\r\n.recipesCategory {\r\n\tmargin-left: 20px;\r\n\tmargin-top: 20px;\r\n\tposition: relative;\r\n\tfont-size: 30px;\r\n\tfloat: left;\r\n}\r\n.recipesCategory a{\r\n\tcolor:rgb(0,0,0);\r\n\ttext-decoration: none;\r\n\t\r\n}\r\nselect {\r\n  font-size: 20px;\r\n}\r\n\r\ntextarea {\r\n\tfont-size: 20px;\r\n  \tpadding: 13px 32px;\r\n  \tborder-radius: 8px;\r\n  \tfont-style: bold;\r\n}\r\n\r\ninput {\r\n  font-size: 20px;\r\n}\r\n\r\n.recipesDetails {\r\n\tmargin-left: 200px;\r\n\tmargin-top: 20px;\r\n\tposition: relative;\r\n\tfont-size: 20px;\r\n\tcolor:rgb(0,0,0);\r\n\ttext-decoration: none;\r\n}\r\n\r\n.sidebar \r\n{\r\n\tfont-family:Lucida;\t\r\n\tfont-style: italic;\r\n\tfont-size: 20px;\r\n\ttext-decoration: none;\r\n\tpadding:50px, 100px,50px,50px;\r\n\tmargin-left: 50 px;\r\n\r\n}\r\n.container{\r\ndisplay: -ms-grid;\r\ndisplay: grid;\r\n-ms-grid-columns:40% 60%;\r\n    grid-template-columns:40% 60%;\r\ngrid-column-gap:20px;\r\n\r\n}\r\n.sidebar\r\n{\r\n\tmargin-top: 100px;\r\n\t\r\n}\r\n\r\n#hreflink a{background-color: Transparent;\r\n    color: black;\r\n    border: 2px solid #f44336;\r\n    padding: 13px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n\tborder-radius: 8px; /* Safari */\r\n transition-duration: 0.4s;\r\n\tfont-style: bold;\r\n}\r\n#hreflink a:hover{\r\n\tbackground-color: #f44336;\r\n    color: black;\r\n}\r\n\r\n.searchresult {\r\n\tmargin-left: 100 px;\r\n}\r\n\r\n.searchresult a{\r\n\tbackground-color: Transparent;\r\n    color: black;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 25px;\r\n    transition-duration: 0.4s;\r\n}\r\n\r\nbutton {\r\n\tbackground-color: Transparent;\r\n    color: black;\r\n    border: 2px solid #f44336;\r\n    padding: 13px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n\tborder-radius: 8px; /* Safari */\r\n transition-duration: 0.4s;\r\n\tfont-style: bold;\r\n}\r\n\r\n\r\nbutton:hover {\r\n    background-color: #f44336;\r\n    color: black;\r\n}\r\n\r\nspan {\r\n\tfont-size: 20px;\r\n\tfont-style: bold;\r\n}\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\r\n#navcontainer\r\n{\r\n\toverflow: hidden;\r\n\tbackground-color: rgb(0,0,0);\r\n}\r\n\r\nul#navlist\r\n{\r\n\ttext-align: end;\r\n\tmargin-left: 0;\r\n\tpadding-left: 0;\r\n\twhite-space: nowrap;\r\n}\r\n\r\n#navlist li\r\n{\r\n\tdisplay: inline;\r\n\tlist-style-type: none;\r\n\r\n}\r\n\r\n#navlist a { padding: 20px 20px;  }\r\n\r\n#navlist a:link, #navlist a:visited\r\n{\r\n\tcolor: #fff;\r\n\tbackground-color: rgb(0,0,0);\r\n\ttext-decoration: none;\r\n\tfont-family:Arial;\r\n}\r\n\r\n#navlist a:hover\r\n{\r\n\tcolor: #fff;\r\n\tbackground-color: #333;\r\n\ttext-decoration: none;\r\n}\r\n\r\n#banner{\r\n\tbackground-image: url(" + __webpack_require__(10) + ");\r\n\tbackground-size: cover;\r\n\tpadding:30px;\r\n\ttext-align:center;\r\n\tfont-family:Arial;\r\n\tfont-style: italic;\r\n\twidth: 97%;\r\n}\r\n#banner h1 {\r\n\tfont-size:40px;\r\n\tcolor: white;\r\n}\r\n#banner p {\r\n\tfont-size:20px;\r\n\tcolor: white;\r\n}\r\n.background {\r\n\tdisplay:block;\r\n    position:absolute;\r\n\tbackground-image: url(" + __webpack_require__(9) + ");\r\n\tbackground-size: cover;\r\nwidth: 100%; height: 100%;\r\n}\r\n.recipes {\r\n\tmargin-left: 50px;\r\n\tmargin-top: 50px;\r\n\tposition: relative;\r\n\tfloat: left;\r\n}\r\n.recipes a{\r\n\tcolor:rgb(0,0,0);\r\n\ttext-decoration: none;\r\n\t\r\n}\r\n.recipes li{\r\n\tcolor:rgb(0,0,0);\r\n\tfont-family:Lucida;\t\r\n\tfont-style: italic;\r\n\tfont-size: 40px;\r\n\tlist-style-type: none;\r\n\tpadding: 10px;\t\r\n}\r\n\r\n.recipes text{\r\n\tcolor:rgb(0,0,0);\r\n\tfont-size: 20px;\r\n\tlist-style-type: none;\r\n}\r\n\r\n.recipesCategory {\r\n\tmargin-left: 20px;\r\n\tmargin-top: 20px;\r\n\tposition: relative;\r\n\tfont-size: 30px;\r\n\tfloat: left;\r\n}\r\n.recipesCategory a{\r\n\tcolor:rgb(0,0,0);\r\n\ttext-decoration: none;\r\n\t\r\n}\r\nselect {\r\n  font-size: 20px;\r\n}\r\n\r\ntextarea {\r\n\tfont-size: 20px;\r\n  \tpadding: 13px 32px;\r\n  \tborder-radius: 8px;\r\n  \tfont-style: bold;\r\n}\r\n\r\ninput {\r\n  font-size: 20px;\r\n  padding: 13px 32px;\r\n  border-radius: 8px;\r\n  font-style: bold;\r\n}\r\n\r\n.recipesDetails {\r\n\tmargin-left: 200px;\r\n\tmargin-top: 20px;\r\n\tposition: relative;\r\n\tfont-size: 20px;\r\n\tcolor:rgb(0,0,0);\r\n\ttext-decoration: none;\r\n}\r\n\r\n.sidebar \r\n{\r\n\tfont-family:Lucida;\t\r\n\tfont-style: italic;\r\n\tfont-size: 20px;\r\n\ttext-decoration: none;\r\n\tpadding:50px, 100px,50px,50px;\r\n\tmargin-left: 50 px;\r\n\r\n}\r\n.container{\r\ndisplay: -ms-grid;\r\ndisplay: grid;\r\n-ms-grid-columns:40% 60%;\r\n    grid-template-columns:40% 60%;\r\ngrid-column-gap:20px;\r\n\r\n}\r\n.sidebar\r\n{\r\n\tmargin-top: 100px;\r\n\t\r\n}\r\n#hreflink a{background-color: Transparent;\r\n    color: black;\r\n    border: 2px solid #f44336;\r\n    padding: 13px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n\tborder-radius: 8px; /* Safari */\r\n transition-duration: 0.4s;\r\n\tfont-style: bold;\r\n}\r\n#hreflink a:hover{\r\n\tbackground-color: #f44336;\r\n    color: black;\r\n}\r\n\r\n.searchresult a{\r\n\tbackground-color: Transparent;\r\n    color: black;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 25px;\r\n    transition-duration: 0.4s;\r\n\tmargin-left: 70 px;\r\n}\r\n\r\n.recipedetails {\r\n\tfont-size: 20\r\n}\r\n\r\nbutton {\r\n\tbackground-color: Transparent;\r\n    color: black;\r\n    border: 2px solid #f44336;\r\n    padding: 13px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n\tborder-radius: 8px; /* Safari */\r\n transition-duration: 0.4s;\r\n\tfont-style: bold;\r\n}\r\n\r\n\r\nbutton:hover {\r\n    background-color: #f44336;\r\n    color: black;\r\n}\r\n\r\nspan {\r\n\tfont-size: 20px;\r\n\tfont-style: bold;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n#navcontainer\n{\n\toverflow: hidden;\n\tbackground-color: rgb(0,0,0);\n}\n\nul#navlist\n{\n\ttext-align: end;\n\tmargin-left: 0;\n\tpadding-left: 0;\n\twhite-space: nowrap;\n}\n\n#navlist li\n{\n\tdisplay: inline;\n\tlist-style-type: none;\n\n}\n\n#navlist a { padding: 20px 20px;  }\n\n#navlist a:link, #navlist a:visited\n{\n\tcolor: #fff;\n\tbackground-color: rgb(0,0,0);\n\ttext-decoration: none;\n\tfont-family:Arial;\n}\n\n#navlist a:hover\n{\n\tcolor: #fff;\n\tbackground-color: #333;\n\ttext-decoration: none;\n}\n\n#banner{\n\tbackground-image: url(" + __webpack_require__(10) + ");\n\tbackground-size: cover;\n\tpadding:30px;\n\ttext-align:center;\n\tfont-family:Arial;\n\tfont-style: italic;\n\twidth: 97%;\n}\n#banner h1 {\n\tfont-size:40px;\n\tcolor: white;\n}\n#banner p {\n\tfont-size:20px;\n\tcolor: white;\n}\n.background {\n\tdisplay:block;\n    position:absolute;\n\tbackground-image: url(" + __webpack_require__(9) + ");\n\tbackground-size: cover;\nwidth: 100%; height: 100%;\n}\n.recipes {\n\tmargin-left: 50px;\n\tmargin-top: 50px;\n\tposition: relative;\n\tfloat: left;\n}\n.recipes a{\n\tcolor:rgb(0,0,0);\n\ttext-decoration: none;\n\t\n}\n.recipes li{\n\tcolor:rgb(0,0,0);\n\tfont-family:Lucida;\t\n\tfont-style: italic;\n\tfont-size: 40px;\n\tlist-style-type: none;\n\tpadding: 10px;\t\n}\n\n.recipes text{\n\tcolor:rgb(0,0,0);\n\tfont-size: 20px;\n\tlist-style-type: none;\n}\n\n.recipesCategory {\n\tmargin-left: 20px;\n\tmargin-top: 20px;\n\tposition: relative;\n\tfont-size: 30px;\n\tfloat: left;\n}\n.recipesCategory a{\n\tcolor:rgb(0,0,0);\n\ttext-decoration: none;\n\t\n}\nselect {\n  font-size: 20px;\n}\n\ntextarea {\n\tfont-size: 20px;\n  \tpadding: 13px 32px;\n  \tborder-radius: 8px;\n  \tfont-style: bold;\n}\n\ninput {\n  font-size: 18px;\n}\n\n.recipesDetails {\n\tmargin-left: 200px;\n\tmargin-top: 20px;\n\tposition: relative;\n\tfont-size: 20px;\n\tcolor:rgb(0,0,0);\n\ttext-decoration: none;\n}\n\n.sidebar \n{\n\tfont-family:Lucida;\t\n\tfont-style: italic;\n\tfont-size: 20px;\n\ttext-decoration: none;\n\tpadding:50px, 100px,50px,50px;\n\tmargin-left: 50 px;\n\n}\n.container{\ndisplay: -ms-grid;\ndisplay: grid;\n-ms-grid-columns:40% 60%;\n    grid-template-columns:40% 60%;\ngrid-column-gap:20px;\n\n}\n.sidebar\n{\n\tmargin-top: 100px;\n\t\n}\n#hreflink a{background-color: Transparent;\n    color: black;\n    border: 2px solid #f44336;\n    padding: 13px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n\tborder-radius: 8px; /* Safari */\n transition-duration: 0.4s;\n\tfont-style: bold;\n}\n#hreflink a:hover{\n\tbackground-color: #f44336;\n    color: black;\n}\n\n.searchresult {\n\tmargin-left: 100 px;\n}\n\n.searchresult a{\n\tbackground-color: Transparent;\n    color: black;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 25px;\n    transition-duration: 0.4s;\n}\n\nbutton {\n\tbackground-color: Transparent;\n    color: black;\n    border: 2px solid #f44336;\n    padding: 13px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n\tborder-radius: 8px; /* Safari */\n transition-duration: 0.4s;\n\tfont-style: bold;\n}\n\n\nbutton:hover {\n    background-color: #f44336;\n    color: black;\n}\n\nspan {\n\tfont-size: 20px;\n\tfont-style: bold;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n#navcontainer\n{\n\toverflow: hidden;\n\tbackground-color: rgb(0,0,0);\n}\n\nul#navlist\n{\n\ttext-align: end;\n\tmargin-left: 0;\n\tpadding-left: 0;\n\twhite-space: nowrap;\n}\n\n#navlist li\n{\n\tdisplay: inline;\n\tlist-style-type: none;\n\n}\n\n#navlist a { padding: 20px 20px;  }\n\n#navlist a:link, #navlist a:visited\n{\n\tcolor: #fff;\n\tbackground-color: rgb(0,0,0);\n\ttext-decoration: none;\n\tfont-family:Arial;\n}\n\n#navlist a:hover\n{\n\tcolor: #fff;\n\tbackground-color: #333;\n\ttext-decoration: none;\n}\n\n#banner{\n\tbackground-image: url(" + __webpack_require__(10) + ");\n\tbackground-size: cover;\n\tpadding:30px;\n\ttext-align:center;\n\tfont-family:Arial;\n\tfont-style: italic;\n\twidth: 97%;\n}\n#banner h1 {\n\tfont-size:40px;\n\tcolor: white;\n}\n#banner p {\n\tfont-size:20px;\n\tcolor: white;\n}\n.background {\n\tdisplay:block;\n    position:absolute;\n\tbackground-image: url(" + __webpack_require__(9) + ");\n\tbackground-size: cover;\nwidth: 100%; height: 100%;\n}\n.recipes {\n\tmargin-left: 50px;\n\tmargin-top: 50px;\n\tposition: relative;\n\tfloat: left;\n}\n.recipes a{\n\tcolor:rgb(0,0,0);\n\ttext-decoration: none;\n\t\n}\n.recipes li{\n\tcolor:rgb(0,0,0);\n\tfont-family:Lucida;\t\n\tfont-style: italic;\n\tfont-size: 40px;\n\tlist-style-type: none;\n\tpadding: 10px;\t\n}\n\n.recipes text{\n\tcolor:rgb(0,0,0);\n\tfont-size: 20px;\n\tlist-style-type: none;\n}\n\n.recipesCategory {\n\tmargin-left: 20px;\n\tmargin-top: 20px;\n\tposition: relative;\n\tfont-size: 30px;\n\tfloat: left;\n}\n.recipesCategory a{\n\tcolor:rgb(0,0,0);\n\ttext-decoration: none;\n\t\n}\nselect {\n  font-size: 20px;\n}\n\ntextarea {\n\tfont-size: 20px;\n  \tpadding: 13px 32px;\n  \tborder-radius: 8px;\n  \tfont-style: bold;\n}\n\n.recipesDetails {\n\tmargin-left: 200px;\n\tmargin-top: 20px;\n\tposition: relative;\n\tfont-size: 20px;\n\tcolor:rgb(0,0,0);\n\ttext-decoration: none;\n}\n\n.sidebar \n{\n\tfont-family:Lucida;\t\n\tfont-style: italic;\n\tfont-size: 20px;\n\ttext-decoration: none;\n\tpadding:50px, 100px,50px,50px;\n\tmargin-left: 50 px;\n\n}\n.container{\ndisplay: -ms-grid;\ndisplay: grid;\n-ms-grid-columns:40% 60%;\n    grid-template-columns:40% 60%;\ngrid-column-gap:20px;\n\n}\n.sidebar\n{\n\tmargin-top: 100px;\n\t\n}\n#hreflink a{background-color: Transparent;\n    color: black;\n    border: 2px solid #f44336;\n    padding: 13px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n\tborder-radius: 8px; /* Safari */\n transition-duration: 0.4s;\n\tfont-style: bold;\n}\n#hreflink a:hover{\n\tbackground-color: #f44336;\n    color: black;\n}\n\n.searchresult a{\n\tbackground-color: Transparent;\n    color: black;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 25px;\n    transition-duration: 0.4s;\n\tmargin-left: 70 px;\n}\n\nspan {\n\tfont-size: 20px;\n\tfont-style: bold;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n#navcontainer\n{\n\toverflow: hidden;\n\tbackground-color: rgb(0,0,0);\n}\n\nul#navlist\n{\n\ttext-align: end;\n\tmargin-left: 0;\n\tpadding-left: 0;\n\twhite-space: nowrap;\n}\n\n#navlist li\n{\n\tdisplay: inline;\n\tlist-style-type: none;\n\n}\n\n#navlist a { padding: 20px 20px;  }\n\n#navlist a:link, #navlist a:visited\n{\n\tcolor: #fff;\n\tbackground-color: rgb(0,0,0);\n\ttext-decoration: none;\n\tfont-family:Arial;\n}\n\n#navlist a:hover\n{\n\tcolor: #fff;\n\tbackground-color: #333;\n\ttext-decoration: none;\n}\n\n#banner{\n\tbackground-image: url(" + __webpack_require__(10) + ");\n\tbackground-size: cover;\n\tpadding:30px;\n\ttext-align:center;\n\tfont-family:Arial;\n\tfont-style: italic;\n\twidth: 97%;\n}\n#banner h1 {\n\tfont-size:40px;\n\tcolor: white;\n}\n#banner p {\n\tfont-size:20px;\n\tcolor: white;\n}\n.background {\n\tdisplay:block;\n    position:absolute;\n\tbackground-image: url(" + __webpack_require__(9) + ");\n\tbackground-size: cover;\nwidth: 100%; height: 100%;\n}\n.recipes {\n\tmargin-left: 50px;\n\tmargin-top: 50px;\n\tposition: relative;\n\tfloat: left;\n}\n.recipes a{\n\tcolor:rgb(0,0,0);\n\ttext-decoration: none;\n\t\n}\n.recipes li{\n\tcolor:rgb(0,0,0);\n\tfont-family:Lucida;\t\n\tfont-style: italic;\n\tfont-size: 40px;\n\tlist-style-type: none;\n\tpadding: 10px;\t\n}\n\n.recipes text{\n\tcolor:rgb(0,0,0);\n\tfont-size: 20px;\n\tlist-style-type: none;\n}\n\n.recipesCategory {\n\tmargin-left: 20px;\n\tmargin-top: 20px;\n\tposition: relative;\n\tfont-size: 30px;\n\tfloat: left;\n}\n.recipesCategory a{\n\tcolor:rgb(0,0,0);\n\ttext-decoration: none;\n\t\n}\nselect {\n  font-size: 20px;\n}\n\ntextarea {\n\tfont-size: 20px;\n  \tpadding: 13px 32px;\n  \tborder-radius: 8px;\n  \tfont-style: bold;\n}\n\ninput {\n  font-size: 20px;\n  padding: 13px 32px;\n  border-radius: 8px;\n  font-style: bold;\n}\n\n.recipesDetails {\n\tmargin-left: 200px;\n\tmargin-top: 20px;\n\tposition: relative;\n\tfont-size: 20px;\n\tcolor:rgb(0,0,0);\n\ttext-decoration: none;\n}\n\n.sidebar \n{\n\tfont-family:Lucida;\t\n\tfont-style: italic;\n\tfont-size: 20px;\n\ttext-decoration: none;\n\tpadding:50px, 100px,50px,50px;\n\tmargin-left: 50 px;\n\n}\n.container{\ndisplay: -ms-grid;\ndisplay: grid;\n-ms-grid-columns:40% 60%;\n    grid-template-columns:40% 60%;\ngrid-column-gap:20px;\n\n}\n.sidebar\n{\n\tmargin-top: 100px;\n\t\n}\n#hreflink a{background-color: Transparent;\n    color: black;\n    border: 2px solid #f44336;\n    padding: 13px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n\tborder-radius: 8px; /* Safari */\n transition-duration: 0.4s;\n\tfont-style: bold;\n}\n#hreflink a:hover{\n\tbackground-color: #f44336;\n    color: black;\n}\n\n.searchresult a{\n\tbackground-color: Transparent;\n    color: black;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 25px;\n    transition-duration: 0.4s;\n\tmargin-left: 70 px;\n}\n\nbutton {\n\tbackground-color: Transparent;\n    color: black;\n    border: 2px solid #f44336;\n    padding: 13px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n\tborder-radius: 8px; /* Safari */\n transition-duration: 0.4s;\n\tfont-style: bold;\n}\n\n\nbutton:hover {\n    background-color: #f44336;\n    color: black;\n}\n\nspan {\n\tfont-size: 20px;\n\tfont-style: bold;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 181 */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),
/* 182 */
/***/ (function(module, exports) {

module.exports = "<div>\n\t<div id=\"banner\">\n\t\t<h1>TASTE OF LIFE</h1>\n    <p>Find recipes, share your recipes, and find jobs!</p>\n\t</div>\n  <div id=\"home\">\n\t\t<div class=\"background\">\n      <br>\n      <br>\n        <div class=\"input-group input-group-lg\">\n\t\t\t\t<span class=\"input-group-addon\" id=\"sizing-addon1\">Username:</span>\n  \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"email\" [(ngModel)]=\"username\">\n\t\t\t</div>\n\t\t\t<br>     \n\t\t\t<div class=\"input-group input-group-lg\">\n\t\t\t\t<span class=\"input-group-addon\" id=\"sizing-addon2\">Password: </span>\n  \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"password\" [(ngModel)]=\"password\">\n\t\t\t</div>\n\t\t\t<br>\n\t\t\t<div id=\"hreflink\">\n\t\t\t<a href=\"/auth/facebook\" class=\"btn btn-primary\">Login with Facebook</a>\n\t\t\t</div>\n    </div>\n\t</div>\n</div>\n\n\n\n"

/***/ }),
/* 183 */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div id=\"banner\">\n\t\t<h1>TASTE OF LIFE</h1>\n\t</div>\n\t<div id=\"navcontainer\">\n\t\t<ul id=\"navlist\">\n\t\t<a  [routerLink] = \"['/welcome/']\">HOME</a>\n\t\t<a  [routerLink] = \"['/postrecipe/']\">POST RECIPE</a>\n\t\t<a  [routerLink] = \"['/searchrecipe/']\">SEARCH RECIPE</a>\n\t\t<a  [routerLink] = \"['/myrecipes/']\">MY RECIPES</a>\n\t\t<a  [routerLink] = \"['/upgradeaccount/']\">UPGRADE ACCOUNT</a>\n\t\t<a  [routerLink] = \"['/postjob/']\">POST JOB</a>\n\t\t<a  [routerLink] = \"['/postedjoblist/']\">VIEW JOBS</a>\n    <a  [routerLink] = \"['/myprofile/']\">MY PROFILE</a>\n\t\t</ul>\n\t</div>\n  <div class=\"background\">\n    <h2>My Profile</h2>\n    <p>Name: {{username}}</p>\n    <p>Email: {{email}}</p>\n  </div>\n</div>"

/***/ }),
/* 184 */
/***/ (function(module, exports) {

module.exports = "<div id=\"banner\">\n\t\t<h1>TASTE OF LIFE</h1>\n\t</div>\n\t<div id=\"navcontainer\">\n\t\t<ul id=\"navlist\">\n\t\t<a  [routerLink] = \"['/welcome/']\">HOME</a>\n\t\t<a  [routerLink] = \"['/postrecipe/']\">POST RECIPE</a>\n\t\t<a  [routerLink] = \"['/searchrecipe/']\">SEARCH RECIPE</a>\n\t\t<a  [routerLink] = \"['/myrecipes/']\">MY RECIPES</a>\n\t\t<a  [routerLink] = \"['/upgradeaccount/']\">UPGRADE ACCOUNT</a>\n\t\t<a  [routerLink] = \"['/postjob/']\">POST JOB</a>\n\t\t<a  [routerLink] = \"['/postedjoblist/']\">VIEW JOBS</a>\n\t\t<a  [routerLink] = \"['/myprofile/']\">MY PROFILE</a>\n\t\t\t\n\t\t</ul>\n\t</div>\n\n<div class=\"background\">\n  \n    <div class=\"recipeCategory\" *ngFor=\"let result of recipeList; let i = index\">\n\t\t\t\t\n\t\t\t\t<recipetable [recipes]=\"result\" [index]=\"i\"></recipetable>\n\t </div>\n  </div>\n"

/***/ }),
/* 185 */
/***/ (function(module, exports) {

module.exports = "<br/>\n\n\n <li> <a  [routerLink] = \"['/recipedetails/', recipes.recipeID]\">{{index+1}} - {{recipes.recipeName}}</a> </li>\n\n   "

/***/ }),
/* 186 */
/***/ (function(module, exports) {

module.exports = "<div id=\"banner\">\n\t\t<h1>TASTE OF LIFE</h1>\n\t</div>\n\t<div id=\"navcontainer\">\n\t\t<ul id=\"navlist\">\n\t\t<a  [routerLink] = \"['/welcome/']\">HOME</a>\n\t\t<a  [routerLink] = \"['/postrecipe/']\">POST RECIPE</a>\n\t\t<a  [routerLink] = \"['/searchrecipe/']\">SEARCH RECIPE</a>\n\t\t<a  [routerLink] = \"['/myrecipes/']\">MY RECIPES</a>\n\t\t<a  [routerLink] = \"['/upgradeaccount/']\">UPGRADE ACCOUNT</a>\n\t\t<a  [routerLink] = \"['/postjob/']\">POST JOB</a>\n    <a  [routerLink] = \"['/postedjoblist/']\">VIEW JOBS</a>\n\t\t<a  [routerLink] = \"['/myprofile/']\">MY PROFILE</a>\n\t\t\t\n\t\t</ul>\n\t</div>\n\n<div class=\"background\">\n  <div class=\"contentdetails\">\n    <div class=\"viewJobs\" *ngFor=\"let result of jobList; let i = index\">\n\t\t\t\t\n\t\t\t\t<postedjobtable [jobs]=\"result\" [index]=\"i\"></postedjobtable>\n\t </div>\n  </div>\n  </div>\n\n"

/***/ }),
/* 187 */
/***/ (function(module, exports) {

module.exports = "<br/>\n\n<li>Job Id: {{jobs.jobID}}</li>\nJob Name: {{jobs.jobName}} <br/>\nRestaurant Name: {{jobs.restaurantName}}<br/>\nJob Description: {{jobs.jobDescription}}<br/><br/>\n\n"

/***/ }),
/* 188 */
/***/ (function(module, exports) {

module.exports = "<div id=\"banner\">\n\t\t<h1>TASTE OF LIFE</h1>\n\t</div>\n\t<div id=\"navcontainer\">\n\t\t<ul id=\"navlist\">\n\t\t<a  [routerLink] = \"['/welcome/']\">HOME</a>\n\t\t<a  [routerLink] = \"['/postrecipe/']\">POST RECIPE</a>\n\t\t<a  [routerLink] = \"['/searchrecipe/']\">SEARCH RECIPE</a>\n\t\t<a  [routerLink] = \"['/myrecipes/']\">MY RECIPES</a>\n\t\t<a  [routerLink] = \"['/upgradeaccount/']\">UPGRADE ACCOUNT</a>\n\t\t<a  [routerLink] = \"['/postjob/']\">POST JOB</a>\n\t\t<a  [routerLink] = \"['/postedjoblist/']\">VIEW JOBS</a>\n\t\t<a  [routerLink] = \"['/myprofile/']\">MY PROFILE</a>\n\t\t\t\n\t\t</ul>\n\t</div>\n\n  <div class=\"container\">\n\t\t<div id=\"postRecipe\">\n\t\t\t<div class=\"background\">\n<div class=\"contentdetails\">\n\t\t\t\t<form (ngSubmit)=\"onSubmit()\">\n\t\t\t\t<div class=\"form-group-job\">\n\t\t\t\t\t<h2> Post Job </h2>\n\t\t\t\t\tJob Name:<br>\n\t\t\t\t\t<input type=\"text\" class=\"form-control \" placeholder=\"job name\" [(ngModel)]=\"inputJobName\" name=\"inputJobName\">\n          <br>\n\t\t\t\t\t<br>\n\t\t\t\t\t<br>Restaurant Name:<br>\n\t\t\t\t\t<input type=\"text\" class=\"form-control \" placeholder=\"restaurant name\" [(ngModel)]=\"inputRestaurantName\" name=\"inputRestaurantName\">\n\t\t\t\t\t<br>\t\t\t\t\t\n          <br>\n          <br> Job Description:\n\t\t\t\t\t<br>\n\t\t\t\t\t<!--<input type=\"textarea\" name=\"instructions\" style=\"height: 100px;\" size=\"95\">-->\n          <textarea placeholder=\"Enter job description!\" class=\"form-control \" placeholder=\"job description\" [(ngModel)]=\"inputJobDescription\" name=\"inputJobDescription\" rows=\"4\" cols=\"100\"></textarea>\n\t\t\t\t\t<br>\n          <br>\n\t\t\t\t\t<input type=\"submit\" class=\"btn btn-primary\" Value=\"Post Job\"/>\n\n\t\t\t\t</div>\n\t\t\t\t</form>\n</div>\n\t\t\t\t</div>\n\t\t\t</div>\n  </div>"

/***/ }),
/* 189 */
/***/ (function(module, exports) {

module.exports = "<div id=\"banner\">\n\t<h1>TASTE OF LIFE</h1>\n</div>\n<div id=\"navcontainer\">\n\t<ul id=\"navlist\">\n\t\t<a [routerLink]=\"['/welcome/']\">HOME</a>\n\t\t<a [routerLink]=\"['/postrecipe/']\">POST RECIPE</a>\n\t\t<a [routerLink]=\"['/searchrecipe/']\">SEARCH RECIPE</a>\n\t\t<a  [routerLink] = \"['/myrecipes/']\">MY RECIPES</a>\n\t\t<a [routerLink]=\"['/upgradeaccount/']\">UPGRADE ACCOUNT</a>\n\t\t<a [routerLink]=\"['/postjob/']\">POST JOB</a>\n\t\t<a [routerLink] = \"['/postedjoblist/']\">VIEW JOBS</a>\n\t\t<a  [routerLink] = \"['/myprofile/']\">MY PROFILE</a>\n\n\t</ul>\n</div>\n<div class=\"container\">\n\t<div id=\"postRecipe\">\n\t\t<div class=\"background\">\n\t\t\t<div class=\"contentdetails\">\n\n\n\n<form (ngSubmit)=\"onSubmit()\">\n\t<div class=\"form-group\">\n\t\t<h2> Post Recipe </h2>\n                    \n\n\n\n\t\t\t\t\tRecipe Name:<br>\n\t\t\t\t\t<input type=\"text\" class=\"form-control \" placeholder=\"recipe name\" [(ngModel)]=\"inputRecipeName\" name =\"inputRecipeName\">\n\t\t\t\t\t<br>\n\t\t\t\t\t<br>\n\t\t\t\t\tInstructions:<br>\n\t\t\t\t\t<!--<input type=\"text\" style=\"height: 100px;\" size=\"95\" class=\"form-control \" placeholder=\"recipe name\" [(ngModel)]=\"inputRecipeIns\" name =\"inputRecipeIns\"> -->\n\n\t\t\t\t\t<textarea rows=\"5\" cols=\"100\"  [(ngModel)]=\"inputRecipeIns\" name=\"inputRecipeIns\"></textarea>\n\t\t\t\t\t<br>\n\t\t\t\t\t<br>\n\n\t\t\t\t\tCategory:<br>\n\t\t\t\t\t<select class=\"form-control \" placeholder=\"category\" [(ngModel)]=\"inputRecipeCat\" name =\"inputRecipeCat\">\n\t\t\t\t\t\t<option value=\"Entrees\">Entrees</option>\n\t\t\t\t\t\t<option value=\"Soups & Salads\">Soups & Salads</option>\n\t\t\t\t\t\t<option value=\"Burgers & Sandwiches\">Burgers & Sandwiches</option>\n\t\t\t\t\t\t<option value=\"Pizzas & Pastas\">Pizzas & Pastas</option>\n\t\t\t\t\t\t<option value=\"Cakes & Desserts\">Cakes & Desserts</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t<br>\n\t\t\t\t\t<br>\n\t\t\t\t\tIngredients:<br>\n\t\t\t\t\t<input type=\"text\" class=\"form-control \" placeholder=\"ingredients\" [(ngModel)]=\"inputRecipeIng\" name =\"inputRecipeIng\">\n\t\t\t\t\t<br>\n\t\t\t\t\t<br>\n\t\t\t\t\t<!--<button style=\"height:30px;width:100px\" >Post Recipe</button>-->\n\t\t\t\t\t<input type=\"submit\" class=\"btn btn-primary\" Value=\"Post Recipe\"/>\t\t\t\n\t\t\t\t\n\t</div>\n\t</form>\n\n\n\t\t\t</div>\n\n\t\t\t\t\n\n\n\t\t\t</div>\n\t\t</div>\n\t</div>"

/***/ }),
/* 190 */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n\n  <button (click)=\"onClick()\" class=\"btn btn-default\" type=\"button\">Back to home</button>\n  <div>\n\t\t\t<div *ngFor=\"let result of recipeList; let i = index\">\n\t\t\t\t<!-- Default panel contents \n\n\t\t\t\t<recipetable [post]=\"result\" [index]=\"i\"></recipetable>\n\t\t\t\tTable \n\t\t\t</div>\n\n</p>-->\n\n<div id=\"banner\">\n\t\t<h1>TASTE OF LIFE</h1>\n\t</div>\n\t<div id=\"navcontainer\">\n\t\t<ul id=\"navlist\">\n\t\t<a  [routerLink] = \"['/welcome/']\">HOME</a>\n\t\t<a  [routerLink] = \"['/postrecipe/']\">POST RECIPE</a>\n\t\t<a  [routerLink] = \"['/searchrecipe/']\">SEARCH RECIPE</a>\n\t\t<a  [routerLink] = \"['/myrecipes/']\">MY RECIPES</a>\n\t\t<a  [routerLink] = \"['/upgradeaccount/']\">UPGRADE ACCOUNT</a>\n\t\t<a  [routerLink] = \"['/postjob/']\">POST JOB</a>\n\t\t<a  [routerLink] = \"['/postedjoblist/']\">VIEW JOBS</a>\n\t\t<a  [routerLink] = \"['/myprofile/']\">MY PROFILE</a>\n\t\t\t\n\t\t</ul>\n\t</div>\n\n<div class=\"background\">\n  \n    <div class=\"recipeCategory\" *ngFor=\"let result of recipeList; let i = index\">\n\t\t\t\t\n\t\t\t\t<recipetable [recipes]=\"result\" [index]=\"i\"></recipetable>\n\t </div>\n  </div>\n"

/***/ }),
/* 191 */
/***/ (function(module, exports) {

module.exports = "\n<!--<table class=\"table\" style=\"font-size:10pt;\">\n  <tbody>\n    <tr *ngFor=\"let result of recipes; let i = index\">\n      <td><a [routerLink]=\"['/recipedetails/','4']\"> {{i+1}}.{{result.recipeName}}</a></td>\n      \n\n    </tr>\n  </tbody>\n</table> -->\n\n<br/>\n\n<div class=\"searchresult\">\n <li> <a  [routerLink] = \"['/recipedetails/', recipes.recipeID]\">{{recipes.recipeName}}</a> </li>\n\n</div>"

/***/ }),
/* 192 */
/***/ (function(module, exports) {

module.exports = "<div id=\"banner\">\n\t\t<h1>TASTE OF LIFE</h1>\n\t</div>\n\t<div id=\"navcontainer\">\n\t\t<ul id=\"navlist\">\n\t\t<a  [routerLink] = \"['/welcome/']\">HOME</a>\n\t\t<a  [routerLink] = \"['/postrecipe/']\">POST RECIPE</a>\n\t\t<a  [routerLink] = \"['/searchrecipe/']\">SEARCH RECIPE</a>\n\t\t<a  [routerLink] = \"['/myrecipes/']\">MY RECIPES</a>\n\t\t<a  [routerLink] = \"['/upgradeaccount/']\">UPGRADE ACCOUNT</a>\n\t\t<a  [routerLink] = \"['/postjob/']\">POST JOB</a>\n\t\t<a  [routerLink] = \"['/postedjoblist/']\">VIEW JOBS</a>\n\t\t<a  [routerLink] = \"['/myprofile/']\">MY PROFILE</a>\n\t\t\t\n\t\t</ul>\n\t</div>\n<div class=\"background\">\n  <div class=\"container\">\n\n<div class=\"recipeDetails\">\n  <p>Recipe ID: {{recipeID}} </p>\n  <p>Recipe Name: {{recipeName}} </p>\n  <p>Recipe Owner: {{recipeOwner}} </p>\n  <p>Recipe Category: {{category}} </p>\n  <p>Recipe Ingredients: {{ingredients}} </p>\n  <p>Recipe Instructions: {{instructions}} </p>\n</div>\n  </div>\n</div>\n"

/***/ }),
/* 193 */
/***/ (function(module, exports) {

module.exports = "<div id=\"banner\">\n\t<h1>TASTE OF LIFE</h1>\n</div>\n<div id=\"navcontainer\">\n\t<ul id=\"navlist\">\n\t\t<a [routerLink]=\"['/welcome/']\">HOME</a>\n\t\t<a [routerLink]=\"['/postrecipe/']\">POST RECIPE</a>\n\t\t<a [routerLink]=\"['/searchrecipe/']\">SEARCH RECIPE</a>\n\t\t<a [routerLink]=\"['/myrecipes/']\">MY RECIPES</a>\n\t\t<a [routerLink]=\"['/upgradeaccount/']\">UPGRADE ACCOUNT</a>\n\t\t<a [routerLink]=\"['/postjob/']\">POST JOB</a>\n\t\t<a [routerLink]=\"['/postedjoblist/']\">VIEW JOBS</a>\n\t\t<a  [routerLink] = \"['/myprofile/']\">MY PROFILE</a>\n\n\t</ul>\n</div>\n<div>\n\t<div id=\"search\">\n\t\t<div class=\"background\">\n\t\t\t<div class=\"recipes\">\n\t\t\t\t<form (ngSubmit)=\"onSubmit()\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<select>\n\t\t\t\t\t\t<option value=\"owner\">Search by owner</option>\n\t\t\t\t\t\t<option value=\"ingredients\">Search by ingredients</option>\n\t\t\t\t\t\t<option value=\"calories\">Search by calories</option>\n\t\t\t\t\t\t<option value=\"rating\">Search by rating</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t\t<br />\n\t\t\t\t\t\t<br /><input type=\"text\" name=\"searchby\" placeholder=\"Search by\" [(ngModel)]=\"ing\" name=\"ing\"><br />\n\t\t\t\t\t\t<br /><input type=\"submit\" value=\"Submit\">\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t<div class=\"searchresult\">\n\t\t\t<div *ngFor=\"let result of recipeList; let i = index\">\n\t\t\t\t<recipetable [recipes]=\"result\" [index]=\"i\"></recipetable>\n\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n</div>"

/***/ }),
/* 194 */
/***/ (function(module, exports) {

module.exports = "<div id=\"banner\">\n\t\t<h1>TASTE OF LIFE</h1>\n\t</div>\n\t<div id=\"navcontainer\">\n\t\t<ul id=\"navlist\">\n\t\t<a  [routerLink] = \"['/welcome/']\">HOME</a>\n\t\t<a  [routerLink] = \"['/postrecipe/']\">POST RECIPE</a>\n\t\t<a  [routerLink] = \"['/searchrecipe/']\">SEARCH RECIPE</a>\n\t\t<a  [routerLink] = \"['/myrecipes/']\">MY RECIPES</a>\n\t\t<a  [routerLink] = \"['/upgradeaccount/']\">UPGRADE ACCOUNT</a>\n\t\t<a  [routerLink] = \"['/postjob/']\">POST JOB</a>\n\t\t<a  [routerLink] = \"['/postedjoblist/']\">VIEW JOBS</a>\n\t\t<a  [routerLink] = \"['/myprofile/']\">MY PROFILE</a>\n\t\t\t\n\t\t</ul>\n\t</div>\n\t<div id=\"upgrade\">\n\t\t\t<div class=\"background\">\n\t\t\t\t<div class=\"recipes\">\n\t\t\t\t\t<h1>Upgrade Account</h1>\n\t\t\t\t\t<h3>$9.99 + tax per year</h3><br>\n\t\t\t\t\tUser Name: <input type=\"text\" name=\"username\"><br><br>\n\t\t\t\t\tCard Number: <input type=\"text\" name=\"cardnumber\"><br><br>\n\t\t\t\t\tExpire Date: <input type=\"date\" name=\"expiredate\"><br><br>\n\t\t\t\t\tSecurity Code: <input type=\"text\" name=\"securitycode\"><br><br>\n\t\t\t\t\tZip Code: <input type=\"text\" name=\"zipcode\"><br><br>\n\t\t\t\t\t<button style=\"height:30px;width:100px\">Pay</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t"

/***/ }),
/* 195 */
/***/ (function(module, exports) {

module.exports = "<div>\n\t<div id=\"banner\">\n\t\t<h1>TASTE OF LIFE</h1>\n\t</div>\n\t<div id=\"navcontainer\">\n\t\t<ul id=\"navlist\">\n\t\t<a  [routerLink] = \"['/welcome/']\">HOME</a>\n\t\t<a  [routerLink] = \"['/postrecipe/']\">POST RECIPE</a>\n\t\t<a  [routerLink] = \"['/searchrecipe/']\">SEARCH RECIPE</a>\n\t\t<a  [routerLink] = \"['/myrecipes/']\">MY RECIPES</a>\n\t\t<a  [routerLink] = \"['/upgradeaccount/']\">UPGRADE ACCOUNT</a>\n\t\t<a  [routerLink] = \"['/postjob/']\">POST JOB</a>\n\t\t<a  [routerLink] = \"['/postedjoblist/']\">VIEW JOBS</a>\n\t\t<a  [routerLink] = \"['/myprofile/']\">MY PROFILE</a>\n\t\t<select>\n\t\t\t<option>{{username}}</option>\n\t\t</select>\n\t\t</ul>\n\t</div>\n\t<div id=\"home\">\n\t\t<div class=\"background\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"recipes\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t\t<u>Categories</u>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li><a  [routerLink] = \"['/recipecategory/', 'Entrees']\">Entrees</a></li>\n\t\t\t\t\t\t<li><a  [routerLink] = \"['/recipecategory/', 'Pizzas & Pastas']\">Pizzas & Pastas</a></li>\n\t\t\t\t\t\t<li><a  [routerLink] = \"['/recipecategory/', 'Soups & Salads']\">Soups & Salads</a></li>\n\t\t\t\t\t\t<li><a  [routerLink] = \"['/recipecategory/', 'Burgers & Sandwiches']\">Burgers & Sandwiches</a></li>\n\t\t\t\t\t\t<li><a  [routerLink] = \"['/recipecategory/', 'Cakes & Desserts']\">Cakes & Desserts</a></li>\n\t\t\t\t\t\n\t\t\t\t\t\t\n\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"sidebar\" align=\"justified\">\n\t\t\t\t\t<h2>\n\t\t\t\t\t\t<u>Week's Best Recipe</u>\n\t\t\t\t\t</h2>\n\t\t\t\t\t<img src=\"http://global-cdn.skinnyms.com/wp-content/uploads/2015/04/Baked-Vegetable-Spring-Rolls-750x500.jpg\" style=\"width:250px;height:200px\"/>\n\t\t\t\t\t<p>Veggie Spring Roll</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(100);


/***/ })
],[227]);
//# sourceMappingURL=main.bundle.js.map