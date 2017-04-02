webpackJsonp([1,4],{

/***/ 400:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 400;


/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(510);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/media/oleh/data/webDev/angular/tabsGame/src/main.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__players__ = __webpack_require__(513);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.play = false;
        this.title = 'Welcome to "Open Tabs" game!';
        this.bestPlayers = [
            new __WEBPACK_IMPORTED_MODULE_1__players__["a" /* Players */](0, ' Robin', 27, '01:30', 'pokemon'),
            new __WEBPACK_IMPORTED_MODULE_1__players__["a" /* Players */](1, 'Batman', 32, '01:40', 'pokemon'),
            new __WEBPACK_IMPORTED_MODULE_1__players__["a" /* Players */](2, 'Joker', 45, '02:50', 'pokemon')
        ];
        this.newHero = [];
        this.newPlayerIteration = 1;
        this.newPlayer = new __WEBPACK_IMPORTED_MODULE_1__players__["a" /* Players */](this.newPlayerIteration, 'New Player' + this.newPlayerIteration, 18, 'not results', 'pokemon');
        this.currentPlayer = { id: 0, game: 'pokemon' };
        this.addNewPlayer = function (name, age, gameType) {
            this.newHero.push(new __WEBPACK_IMPORTED_MODULE_1__players__["a" /* Players */](this.newPlayerIteration, name, age, 'not results', gameType));
            this.newPlayerIteration++;
        };
        this.toGameField = function (id, game) {
            this.currentPlayer.id = id;
            this.currentPlayer.game = game;
            this.play = true;
        };
    }
    AppComponent.prototype.stopPlay = function (agreed) {
        this.play = false;
    };
    ;
    AppComponent.prototype.addNewBestTime = function (res) {
        console.log(res);
        var mm1 = Math.floor(res[1] / 60), ss1 = res[1] % 60;
        var mm = (mm1 > 9) ? mm1 : (mm1 > 0 && mm1 < 10) ? '0' + mm1 : '00', ss = (ss1 < 10) ? '0' + ss1 : ss1;
        this.newHero[res[0] - 1].time = mm + ' : ' + ss;
    };
    ;
    Object.defineProperty(AppComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.newPlayer); },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(670),
            styles: [__webpack_require__(668)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/media/oleh/data/webDev/angular/tabsGame/src/app.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__play_field_play_field_component__ = __webpack_require__(512);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__play_field_play_field_component__["a" /* PlayFieldComponent */],
                __WEBPACK_IMPORTED_MODULE_5__play_field_play_field_component__["a" /* PlayFieldComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/media/oleh/data/webDev/angular/tabsGame/src/app.module.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return newField; });
/**
 * Created by oleh on 01.04.17.
 */
var newField = (function () {
    function newField(n) {
        this.n = n;
        this.ready = false;
        this.neededNumbers = [];
        this.neededQuantity = [];
        this.resultsArray = [];
        this.getRandomArray = function (n) {
            var num = n;
            /*create two arrays with numbers and quantity
             ex: [1,2,3,4,5,6,7,8], [2,2,2,2,2,2,2,2]
             */
            for (var i = 0; i < n; i++) {
                this.neededNumbers.push(i);
                this.neededQuantity.push(2);
            }
            this.getRandomNum(num, n);
        };
        this.getRandomArray(n);
    }
    newField.prototype.getRandomNum = function (num, n) {
        var pos;
        pos = Math.floor(Math.random() * num); //generate random position of our array
        this.resultsArray.push(this.neededNumbers[pos]); //push number on this position in results array
        /*decrease number in "quantity" array and check if it's not 0
         if equal 0 then it means that we already have two numbers like this
         and then we splice our arrays and remove unnecessary items
         */
        if (--this.neededQuantity[pos] == 0) {
            this.neededQuantity.splice(pos, 1);
            this.neededNumbers.splice(pos, 1);
            num--;
        }
        //run recursion until we get results array with all numbers that repeated two times
        if (this.resultsArray.length == n * 2) {
            this.ready = true;
        }
        else {
            this.getRandomNum(num, n);
        }
    };
    ;
    return newField;
}());
//# sourceMappingURL=/media/oleh/data/webDev/angular/tabsGame/src/new-field.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_field__ = __webpack_require__(511);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayFieldComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayFieldComponent = (function () {
    function PlayFieldComponent() {
        //tabsPositions = [1,3,5,7,2,4,6,8,1,3,5,7,2,4,6,8];
        this.currentTab = -1;
        this.currentIndex = -1;
        this.selctedTab = -1;
        this.showTwo = [];
        this.newGame = new __WEBPACK_IMPORTED_MODULE_2__new_field__["a" /* newField */](8);
        this.readyFlag = false;
        this.tabsPositions = this.newGame.resultsArray;
        this.stopPlay = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.addNewBestTime = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        //timer methods and parameters
        this.ticks = 0;
        this.sec = 0;
        this.min = 0;
    }
    PlayFieldComponent.prototype.backToDashboard = function (agreed) {
        this.stopPlay.emit(agreed);
        this.ngOnDestroy();
    };
    ;
    PlayFieldComponent.prototype.newBestTime = function (res) {
        this.addNewBestTime.emit(res);
    };
    ;
    PlayFieldComponent.prototype.checkCurrent = function (index) {
        if (this.currentIndex != index) {
            this.currentTab = (this.currentTab == index) ? -1 : index;
            var currentValue = this.tabsPositions[index];
            if (this.selctedTab == currentValue) {
                this.showTwo.push(currentValue);
            }
            else {
                this.selctedTab = currentValue;
            }
            this.currentIndex = index;
        }
        if (this.showTwo.length == 8) {
            console.log("Ready");
            this.newBestTime([this.playerId, this.ticks]);
            this.ngOnDestroy();
        }
    };
    PlayFieldComponent.prototype.ngOnInit = function () {
    };
    PlayFieldComponent.prototype.startTimer = function () {
        var _this = this;
        this.timer = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].timer(0, 1000);
        console.log(this.playerId, this.gameType);
        this.sub = this.timer.subscribe(function (t) { return _this.tickerFunc(t); });
        this.readyFlag = true;
    };
    ;
    PlayFieldComponent.prototype.tickerFunc = function (tick) {
        this.ticks++;
        if (this.ticks % 60 == 0) {
            this.sec = 0;
            this.min++;
        }
        else {
            this.sec++;
        }
    };
    ;
    PlayFieldComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], PlayFieldComponent.prototype, "playerId", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], PlayFieldComponent.prototype, "gameType", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', Object)
    ], PlayFieldComponent.prototype, "stopPlay", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', Object)
    ], PlayFieldComponent.prototype, "addNewBestTime", void 0);
    PlayFieldComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-play-field',
            template: __webpack_require__(671),
            styles: [__webpack_require__(669)]
        }), 
        __metadata('design:paramtypes', [])
    ], PlayFieldComponent);
    return PlayFieldComponent;
}());
//# sourceMappingURL=/media/oleh/data/webDev/angular/tabsGame/src/play-field.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Players; });
var Players = (function () {
    function Players(id, name, age, time, type) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.time = time;
        this.type = type;
    }
    return Players;
}());
//# sourceMappingURL=/media/oleh/data/webDev/angular/tabsGame/src/players.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/media/oleh/data/webDev/angular/tabsGame/src/environment.js.map

/***/ }),

/***/ 668:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">\n  {{title}}\n</h1>\n<hr>\n<div class=\"container\" *ngIf=\"!play\">\n  <h3 class=\"text-primary text-center\">Dashboard of best players</h3>\n  <div class=\"row\">\n    <!--<pre>{{diagnostic}}</pre>-->\n    <div class=\"col-sm-6 col-sm-offset-3 col-xs-12 best-players rounded bg-info\">\n      <table class=\"table\">\n        <thead class=\"thead-default\">\n          <tr>\n            <th>#</th>\n            <th>Name</th>\n            <th class=\"text-center\">Age</th>\n            <th class=\"text-right\">Best time</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let player of bestPlayers\">\n            <td scope=\"row\">{{player.id}}</td>\n            <td>{{player.name}}</td>\n            <td class=\"text-center\">{{player.age}}</td>\n            <td class=\"text-right\">{{player.time}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <br><hr><br>\n  <div class=\"row\">\n    <div class=\"col-sm-5 col-xs-12\">\n      <form action=\"\" (ngSubmit)=\"addNewPlayer(name.value,age.value, tabs.value)\" #playerForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">Enter your player nickName</label>\n          <input type=\"text\" class=\"form-control\" id=\"name\" name=\"playerName\" required\n                  #name [(ngModel)]=\"newPlayer.name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"age\">Enter your age</label>\n          <input type=\"text\" class=\"form-control\" id=\"age\" name=\"playerAge\" required\n                  #age [(ngModel)]=\"newPlayer.age\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"gameType\">Select type of game</label>\n          <select #tabs class=\"form-control\" id=\"gameType\" name=\"gameType\">\n            <option value=\"pokemon\">Pokemon heroes</option>\n            <option value=\"icon\">Programming Languages</option>\n          </select>\n          <small class=\"form-text text-muted\">Sorry but now we have only two types of boards :(.</small>\n        </div>\n        <button\n                type=\"submit\" class=\"btn btn-primary\"\n                [disabled]=\"!playerForm.valid\"\n        >Add new player</button>\n      </form>\n    </div>\n    <div class=\"col-sm-5 col-xs-12 col-sm-offset-2\">\n        <h5>Your Players:</h5>\n        <table class=\"table\">\n          <thead class=\"thead-default\">\n          <tr>\n            <th>#</th>\n            <th>Name</th>\n            <th class=\"text-center\">Age</th>\n            <th class=\"text-right\">Best time</th>\n            <th></th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let item of newHero\">\n            <td scope=\"row\" class=\"align-middle\">{{item.id}}</td>\n            <td class=\"align-middle\">{{item.name}}</td>\n            <td class=\"align-middle text-center\">{{item.age}}</td>\n            <td class=\"text-right align-middle\">{{item.time}}</td>\n            <td class=\"text-right\">\n              <button class=\"btn btn-primary\"\n                      (click)=\"toGameField(item.id,item.type)\"\n              >Start new game</button>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n    </div>\n  </div>\n</div>\n\n<app-play-field #playField\n        *ngIf=\"play\" (stopPlay)=\"stopPlay($event)\"\n                (addNewBestTime)=\"addNewBestTime($event)\"\n        [playerId]=\"currentPlayer.id\"\n        [gameType]=\"currentPlayer.game\">\n\n</app-play-field>\n"

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-6 text-left\">\n      <button type=\"button\" class=\"btn btn-secondary\"\n              (click)=\"backToDashboard(false)\">&larr; Back to dashboard</button></div>\n    <div class=\"col-xs-6 text-right\">\n      <button type=\"button\" class=\"btn btn-primary\"\n              (click)=\"startTimer()\"\n      >Start</button>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"h1 timer text-center\">\n        <span class=\"minutes\">\n          <span *ngIf=\"min < 10\">0</span>{{min}}\n        </span> :\n        <span class=\"seconds\">\n          <span *ngIf=\"sec < 10\">0</span>{{sec}}\n        </span>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div *ngIf=\"readyFlag\" class=\"tabs-wrapper\">\n        <div class=\"innerImg\"\n             *ngFor = 'let item of tabsPositions; let i=index'\n             (click)=\"checkCurrent(i)\">\n          <div class=\"imgWrapper animated\"\n               [ngClass]=\"{'flipInY': showTwo.indexOf(item) == -1, 'tada':showTwo.indexOf(item) > -1}\"\n               *ngIf=\"(currentTab == i)||(showTwo.indexOf(item) > -1 )\">\n            <img src=\"assets/img/{{gameType}}-{{item}}.png\" alt=\"\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 947:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(401);


/***/ })

},[947]);
//# sourceMappingURL=main.bundle.map