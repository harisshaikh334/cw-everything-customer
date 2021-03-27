webpackJsonp([0],{

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appointments_appointments__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_account__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { NotificationPage } from '../notification/notification';


//import { ChatsPage } from '../chats/chats';
var TabsPage = /** @class */ (function () {
    //tab5Root = ChatsPage;
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        //tab2Root = NotificationPage;
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__appointments_appointments__["a" /* AppointmentsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__account_account__["a" /* AccountPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"G:\ET\cw-everything-customer\src\pages\tabs\tabs.html"*/'<ion-tabs name="myTabsNav">\n\n    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="md-home" tabsHideOnSubPages="true"></ion-tab>\n\n    <ion-tab [root]="tab2Root" tabTitle="Appointments" tabIcon="md-calendar" tabsHideOnSubPages="true"></ion-tab>\n\n    <ion-tab [root]="tab3Root" tabTitle="My Account" tabIcon="md-person" tabsHideOnSubPages="true"></ion-tab>\n\n    <!-- <ion-tab [root]="tab4Root" tabTitle="{{\'account\' | translate}}" tabIcon="md-person" tabsHideOnSubPages="true"></ion-tab>\n\n    <ion-tab [root]="tab5Root" tabTitle="{{\'chats\' | translate}}" tabIcon="md-chatboxes" tabsHideOnSubPages="true"></ion-tab> -->\n\n</ion-tabs>\n\n'/*ion-inline-end:"G:\ET\cw-everything-customer\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return My_profilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_apiconfig__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_tabs__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var My_profilePage = /** @class */ (function () {
    function My_profilePage(http, camera, actionsheet, storage, navCtrl, toastController) {
        this.http = http;
        this.camera = camera;
        this.actionsheet = actionsheet;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.showLoader = false;
        this.user = {};
        this.submitAttempt = false;
        this.pass = '';
        this.cpass = '';
        this.current = '';
        this.profile_picture = '';
        this.email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.profile = {
            name: '',
            mobile: '',
            email: '',
            address: '',
            gender: ''
        };
    }
    My_profilePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('cuserinfo').then(function (result) {
            _this.user = JSON.parse(result);
            console.log('user infor is ', _this.user);
            _this.profile.name = _this.user.name;
            _this.profile.mobile = _this.user.contact;
            _this.profile.email = _this.user.email;
            _this.profile.address = _this.user.address;
            _this.profile_picture = __WEBPACK_IMPORTED_MODULE_3__app_apiconfig__["b" /* IMAGE_URL */] + _this.user.profile_picture;
            _this.profile.gender = _this.user.gender;
        });
    };
    My_profilePage.prototype.actionSheetFile = function () {
        var _this = this;
        var actionSheet = this.actionsheet.create({
            title: 'Set your display picture',
            buttons: [
                {
                    text: 'Browse Photo Albums',
                    role: 'destructive',
                    handler: function () {
                        var options = {
                            sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            correctOrientation: true
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            var base64Image = 'data:image/jpeg;base64,' + imageData;
                            _this.profile_picture = base64Image;
                            var formdata = new FormData();
                            formdata.append('profile_picture', base64Image);
                            _this.http.put(__WEBPACK_IMPORTED_MODULE_3__app_apiconfig__["a" /* APIURL */] + "customers/" + _this.user.id + "?access-token=" + _this.user.token, formdata)
                                .subscribe({
                                next: function (response) {
                                    _this.storage.remove('cuserinfo');
                                    var userinfo = _this.user;
                                    userinfo['profile_picture'] = __WEBPACK_IMPORTED_MODULE_3__app_apiconfig__["b" /* IMAGE_URL */] + response.profile_picture;
                                    _this.storage.set('cuserinfo', JSON.stringify(userinfo));
                                },
                                error: function (err) {
                                    console.log(err);
                                }
                            });
                        });
                    }
                },
                {
                    text: 'Open Camera',
                    role: 'destructive',
                    handler: function () {
                        var options = {
                            quality: 100,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE,
                            correctOrientation: true,
                            cameraDirection: 1
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            var base64Image = 'data:image/jpeg;base64,' + imageData;
                            _this.profile_picture = base64Image;
                            var formdata = new FormData();
                            formdata.append('profile_picture', base64Image);
                            _this.http.put(__WEBPACK_IMPORTED_MODULE_3__app_apiconfig__["a" /* APIURL */] + "customers/" + _this.user.id + "?access-token=" + _this.user.token, formdata)
                                .subscribe({
                                next: function (response) {
                                    _this.storage.remove('cuserinfo');
                                    var userinfo = _this.user;
                                    userinfo['profile_picture'] = __WEBPACK_IMPORTED_MODULE_3__app_apiconfig__["b" /* IMAGE_URL */] + response.profile_picture;
                                    _this.storage.set('cuserinfo', JSON.stringify(userinfo));
                                },
                                error: function (err) {
                                    console.log(err);
                                }
                            });
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { }
                }
            ]
        });
        actionSheet.present();
    };
    My_profilePage.prototype.updateProfile = function () {
        var _this = this;
        if (this.name.valid && this.mobile.valid && this.email.valid && this.address.valid && this.gender.valid) {
            var profileObj = {
                id: this.user['id'],
                name: this.profile.name,
                email: this.profile.email,
                contact: this.profile.mobile,
                address: this.profile.address,
                gender: this.profile.gender
            };
            this.showLoader = true;
            this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_apiconfig__["a" /* APIURL */] + 'customers/update-profile', profileObj)
                .subscribe({
                next: function (response) {
                    _this.showLoader = false;
                    if (response.error == 1) {
                        var toast = _this.toastController.create({
                            message: response.reason,
                            duration: 4000,
                            cssClass: 'toast-danger',
                            position: 'top'
                        });
                        toast.present();
                    }
                    else {
                        var toast = _this.toastController.create({
                            message: 'Profile updated successfully.',
                            duration: 4000,
                            cssClass: 'toast-success',
                            position: 'top'
                        });
                        _this.user['address'] = _this.profile.address;
                        _this.user['name'] = _this.profile.name;
                        _this.user['contact'] = _this.profile.mobile;
                        _this.user['email'] = _this.profile.email;
                        _this.user['address'] = _this.profile.address;
                        _this.user['gender'] = _this.profile.gender;
                        _this.storage.set('cuserinfo', JSON.stringify(_this.user));
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__tabs_tabs__["a" /* TabsPage */]);
                    }
                },
                error: function (err) {
                    _this.showLoader = false;
                    var toast = _this.toastController.create({
                        message: err.message,
                        duration: 4000,
                        cssClass: 'toast-danger',
                        position: 'top'
                    });
                    toast.present();
                }
            });
        }
        else {
            alert('Please enter valid information.');
            return false;
        }
    };
    My_profilePage.prototype.updatePass = function () {
        var _this = this;
        this.submitAttempt = true;
        if (!this.pass || !this.cpass || !this.current) {
            return false;
        }
        if (this.pass.trim() !== this.cpass.trim()) {
            this.showLoader = false;
            var toast = this.toastController.create({
                message: 'Password and Confirm Password does not match.',
                duration: 4000,
                cssClass: 'toast-danger',
                position: 'top'
            });
            toast.present();
            return false;
        }
        else if (this.pass.indexOf(' ') != -1) {
            var toast = this.toastController.create({
                message: 'Password cannot contain spaces.',
                duration: 4000,
                cssClass: 'toast-danger',
                position: 'top'
            });
            toast.present();
            return false;
        }
        else {
            this.showLoader = true;
            this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_apiconfig__["a" /* APIURL */] + 'customers/update-password', { id: this.user['id'], secretkey: this.pass.trim(), current: this.current })
                .subscribe({
                next: function (response) {
                    _this.showLoader = false;
                    if (response.error == 1) {
                        var toast = _this.toastController.create({
                            message: response.reason,
                            duration: 4000,
                            cssClass: 'toast-danger',
                            position: 'top'
                        });
                        toast.present();
                    }
                    else {
                        var toast = _this.toastController.create({
                            message: 'Password updated successfully.',
                            duration: 4000,
                            cssClass: 'toast-success',
                            position: 'top'
                        });
                        toast.present();
                        _this.submitAttempt = false;
                        _this.pass = '';
                        _this.cpass = '';
                        _this.current = '';
                    }
                },
                error: function (err) {
                    _this.showLoader = false;
                    var toast = _this.toastController.create({
                        message: err.message,
                        duration: 4000,
                        cssClass: 'toast-danger',
                        position: 'top'
                    });
                    toast.present();
                }
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('name'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* NgModel */])
    ], My_profilePage.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mobile'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* NgModel */])
    ], My_profilePage.prototype, "mobile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('email'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* NgModel */])
    ], My_profilePage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('address'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* NgModel */])
    ], My_profilePage.prototype, "address", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('gender'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* NgModel */])
    ], My_profilePage.prototype, "gender", void 0);
    My_profilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my_profile',template:/*ion-inline-start:"G:\ET\cw-everything-customer\src\pages\my_profile\my_profile.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{\'my_profile\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-img">\n\n    <div *ngIf="showLoader" class="loader-bg">\n\n        <ion-spinner class="spinner" color="light"></ion-spinner>\n\n    </div>\n\n    <div class="profile">\n\n        <div (click)="actionSheetFile()" class="profile_img center_img">\n\n            <img src="{{(profile_picture) ? profile_picture : \'assets/imgs/avatar.png\'}}" class="crop_img loading" onerror="this.onerror=null;this.src=\'assets/imgs/avatar.png\';" /> \n\n        </div>\n\n        <ion-icon (click)="actionSheetFile()" class="material-icons">camera_alt</ion-icon>\n\n    </div>\n\n    <p>Selecting image will automatically upload the picture as your display picture.</p>\n\n    <div class="form">\n\n        <form>\n\n            <ion-list no-lines>\n\n                <ion-item>\n\n                    <ion-icon class="material-icons" item-start>phone_android</ion-icon>\n\n                    <ion-label floating>{{\'mobile_number\' | translate}}</ion-label>\n\n                    <!-- <ion-input type="tel" name="mobile_number"></ion-input> -->\n\n                    <ion-input type="tel" [(ngModel)]="profile.mobile" name="mobile" #mobile="ngModel" [ngModelOptions]="{standalone: true}" autocomplete="off" required minlength="10" maxlength="10" pattern="^[0-9{10}]+$"></ion-input>\n\n                </ion-item>\n\n                <p class=\'error\' *ngIf="!mobile.valid  && mobile.touched">Please enter valid mobile number.</p>\n\n                <ion-item>\n\n                    <ion-icon class="material-icons" item-start>person</ion-icon>\n\n                    <ion-label floating>{{\'full_name\' | translate}}</ion-label>\n\n                    <ion-input type="text" [(ngModel)]="profile.name" name="name" #name="ngModel" [ngModelOptions]="{standalone: true}" autocomplete="off" required minlength="2" maxlength="100" pattern="[a-zA-Z ]*"></ion-input>\n\n                </ion-item>\n\n                <p class=\'error\' *ngIf="!name.valid  && name.touched">Please enter valid name.</p>\n\n                <ion-item>\n\n                    <ion-icon class="material-icons" item-start>email</ion-icon>\n\n                    <ion-label floating>{{\'email_address\' | translate}}</ion-label>\n\n                    <ion-input type="text" [(ngModel)]="profile.email" name="email" #email="ngModel" [ngModelOptions]="{standalone: true}" autocomplete="off" minlength="10" maxlength="100" [pattern]="email_regex"></ion-input>\n\n                </ion-item>\n\n                <p class=\'error\' *ngIf="!email.valid  && email.touched">Please enter valid email id.</p>\n\n                <ion-item>\n\n                    <ion-icon class="material-icons" item-start>shop</ion-icon>\n\n                    <ion-label floating>{{\'Address\' | translate}}</ion-label>\n\n                    <ion-input type="text" [(ngModel)]="profile.address" name="address" #address="ngModel" [ngModelOptions]="{standalone: true}" autocomplete="off" required maxlength="200"></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-icon class="material-icons" item-start>wc</ion-icon>\n\n                    <ion-label>Gender</ion-label>\n\n                    <ion-select [(ngModel)]="profile.gender" #gender="ngModel" required="true" [ngModelOptions]="{standalone: true}">\n\n                         <ion-option value="male">Male</ion-option>\n\n                         <ion-option value="female">Female</ion-option>\n\n                         <ion-option value="other">Other</ion-option>\n\n                    </ion-select>\n\n                </ion-item>\n\n                <p class=\'error\' *ngIf="!address.valid  && address.touched">Please enter valid address.</p>\n\n                <button block ion-button (click)="updateProfile(profileForm)">Update Profile</button>   \n\n            </ion-list>\n\n        </form>\n\n    </div>\n\n    <div class="form">\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-label floating>Current Password</ion-label>\n\n                <ion-input type="password" [(ngModel)]="current"></ion-input>\n\n            </ion-item> \n\n            <p class=\'error\' *ngIf="(!current.trim()) && submitAttempt">Please enter your current password.</p>\n\n\n\n            <ion-item>\n\n                <ion-label floating>New Password</ion-label>\n\n                <ion-input type="password" [(ngModel)]="pass"></ion-input>\n\n            </ion-item> \n\n            <p class=\'error\' *ngIf="(!pass.trim() || pass.length < 8) && submitAttempt">Please enter password of minimum 8 characters.</p>\n\n\n\n            <ion-item>\n\n                <ion-label floating>Confirm Password</ion-label>\n\n                <ion-input type="password" [(ngModel)]="cpass"></ion-input>\n\n            </ion-item>\n\n            <p class=\'error\' *ngIf="(!cpass.trim() || cpass.length < 8) && submitAttempt">Please confirm by re-entering the password entered above.</p>\n\n\n\n            <button block ion-button (click)="updatePass()">CHANGE PASSWORD</button>    \n\n        </ion-list> \n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\ET\cw-everything-customer\src\pages\my_profile\my_profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], My_profilePage);
    return My_profilePage;
}());

//# sourceMappingURL=my_profile.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Plumber_profilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_apiconfig__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var CartQuantity = /** @class */ (function () {
    function CartQuantity(viewCtrl, toastController, navParams) {
        this.viewCtrl = viewCtrl;
        this.toastController = toastController;
        this.navParams = navParams;
        this.qty = 0;
        this.stock = 0;
        this.qty = this.navParams.get('qty');
        this.stock = this.navParams.get('stock');
    }
    CartQuantity.prototype.close = function () {
        this.viewCtrl.dismiss(this.qty);
    };
    CartQuantity.prototype.addToCart = function () {
        // if (this.qty > 0 && !isNaN(this.qty)) {
        // 	this.close();
        // } else if (Number(this.qty) > Number(this.stock)) {
        // } else {
        // 	const toast = this.toastController.create({
        // 		message: 'Please enter valid quantity',
        // 		duration: 2000,
        // 		cssClass: 'toast-danger',
        // 		position: 'bottom'
        // 	  });
        // 	  toast.present();
        // }
        if (this.qty == 0 || isNaN(this.qty)) {
            var toast = this.toastController.create({
                message: 'Please enter valid quantity',
                duration: 2000,
                cssClass: 'toast-danger',
                position: 'bottom'
            });
            toast.present();
            return false;
        }
        if (Number(this.qty) > Number(this.stock)) {
            var toast = this.toastController.create({
                message: 'total stock is only ' + this.stock,
                duration: 2000,
                cssClass: 'toast-danger',
                position: 'bottom'
            });
            toast.present();
            return false;
        }
        this.close();
    };
    CartQuantity = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n\t<ion-card class=\"card-space\">\n\t\t<ion-item>\n\t\t<ion-label stacked>Amount</ion-label> <!--I can use floating here but I prefer stacked-->\n\t\t\t<ion-input type=\"tel\" autofocus=\"true\" [(ngModel)]=\"qty\" placeholder=\"Enter Quantity\">\n\t\t\t</ion-input>\n\t\t</ion-item>\n\t\t<button style=\"width:100%;\" class=\"add-qty-btn\" (click)=\"addToCart()\" ion-button>Add to trolley</button>\n\t</ion-card>\n\t"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], CartQuantity);
    return CartQuantity;
}());

var Plumber_profilePage = /** @class */ (function () {
    function Plumber_profilePage(navCtrl, popoverCtrl, app, toastController, formBuilder, camera, actionsheet, http, storage, navparams, events) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.app = app;
        this.toastController = toastController;
        this.formBuilder = formBuilder;
        this.camera = camera;
        this.actionsheet = actionsheet;
        this.http = http;
        this.storage = storage;
        this.navparams = navparams;
        this.events = events;
        this.about_tab = "about";
        this.details = {};
        this.apiurl = __WEBPACK_IMPORTED_MODULE_2__app_apiconfig__["a" /* APIURL */];
        this.ratings = {};
        this.user = {};
        this.showLoader = false;
        this.submitAttempt = false;
        this.uploadedFiles = [];
        this.product_list = [];
        this.cart_count = 0;
        this.showDesc = false;
        this.productDesc = '';
        this.cart_list = [];
        this.disable_cart_btn = false;
    }
    Plumber_profilePage.prototype.ngOnInit = function () {
        this.buildForm();
    };
    Plumber_profilePage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.subcat_id = this.navparams.get('subcat_id');
                        this.details = JSON.parse(this.navparams.get('obj'));
                        return [4 /*yield*/, this.storage.get('cart_list').then(function (data) {
                                if (data) {
                                    _this.cart_list = data;
                                    console.log('cart list ', _this.cart_list);
                                    if (_this.cart_list.length > 0) {
                                        console.log('details are ', _this.cart_list[0], _this.details.id, _this.subcat_id);
                                        if (_this.cart_list[0]['sp_id'] == _this.details.id && _this.cart_list[0]['subcat_id'] == _this.subcat_id) {
                                            _this.disable_cart_btn = false;
                                        }
                                        else {
                                            _this.disable_cart_btn = true;
                                        }
                                    }
                                    else {
                                        _this.disable_cart_btn = false;
                                    }
                                }
                                console.log('disable cart is ', _this.disable_cart_btn);
                            })];
                    case 1:
                        _a.sent();
                        this.storage.get('cuserinfo').then(function (result) {
                            _this.user = JSON.parse(result);
                            _this.details.is_product = 1;
                            if (_this.details.is_product == 1) {
                                _this.about_tab = "product";
                                _this.getProductList();
                            }
                            _this.showLoader = true;
                            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_apiconfig__["a" /* APIURL */] + 'reviews/ratings?id=' + _this.details.id + '&access-token=' + _this.user.token)
                                .subscribe({
                                next: function (response) {
                                    _this.showLoader = false;
                                    _this.ratings = response;
                                },
                                error: function (err) {
                                    _this.showLoader = false;
                                    console.error(err);
                                }
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Plumber_profilePage.prototype.getProductList = function () {
        var _this = this;
        // let url ="https://everythingservices.in/admin14/capi/v1/customers/product-list?sp_id=777&access-token=wVHYUA5wHPgAgrRBg9z6Ut_2C_8PX9cX";
        var url = __WEBPACK_IMPORTED_MODULE_2__app_apiconfig__["a" /* APIURL */] + 'customers/product-list?sp_id=' + this.details.id + '&access-token=' + this.user.token;
        this.http.get(url)
            .subscribe({
            next: function (response) {
                _this.showLoader = false;
                response.forEach(function (element) {
                    element['added_in_cart'] = false;
                    element['cart_details'] = {};
                    var index = _this.cart_list.findIndex(function (item) {
                        return item.product_name == element.name;
                    });
                    if (index != -1) {
                        element['added_in_cart'] = true;
                        element['cart_details'] = _this.cart_list[index];
                    }
                });
                _this.product_list = response;
            },
            error: function (err) {
                _this.showLoader = false;
                console.error(err);
            }
        });
    };
    Plumber_profilePage.prototype.openDesc = function (prod) {
        this.productDesc = prod.description;
        this.showDesc = true;
    };
    Plumber_profilePage.prototype.closeDesc = function () {
        this.productDesc = '';
        this.showDesc = false;
    };
    Plumber_profilePage.prototype.addCart = function (item) {
        var _this = this;
        var popover = this.popoverCtrl.create(CartQuantity, { stock: item.stock, edit: false });
        popover.present({
            ev: 0
        });
        popover.onDidDismiss(function (data) {
            if (!data) {
                return false;
            }
            var url = __WEBPACK_IMPORTED_MODULE_2__app_apiconfig__["a" /* APIURL */] + "customers/cartcreate?access-token=" + _this.user.token;
            var cart_obj = {
                customer_id: _this.user.id,
                product_id: item.id,
                unit: item.unit,
                qty: data,
                mrp: item.mrp,
                sp_id: _this.details.id,
                subcat_id: _this.navparams.get('subcat_id'),
                sale_price: item.sale_price
            };
            _this.showLoader = true;
            _this.http.post(url, cart_obj)
                .subscribe({
                next: function (response) {
                    _this.showLoader = false;
                    if (response.error != 1) {
                        item['added_in_cart'] = true;
                        item['cart_details'] = response;
                        var toast = _this.toastController.create({
                            message: 'Product added in trolly.',
                            duration: 2000,
                            cssClass: 'success',
                            position: 'bottom'
                        });
                        toast.present();
                        _this.getCartCount();
                        _this.getCartList();
                    }
                    else {
                        var toast = _this.toastController.create({
                            message: response.reason,
                            duration: 2000,
                            cssClass: 'toast-danger',
                            position: 'bottom'
                        });
                        toast.present();
                    }
                },
                error: function (err) {
                    _this.showLoader = false;
                    var toast = _this.toastController.create({
                        message: 'Something went wrong.',
                        duration: 2000,
                        cssClass: 'toast-danger',
                        position: 'bottom'
                    });
                    toast.present();
                }
            });
        });
    };
    Plumber_profilePage.prototype.editQty = function (item) {
        var _this = this;
        var popover = this.popoverCtrl.create(CartQuantity, { qty: item.cart_details.qty, stock: item.stock, edit: true });
        popover.present({
            ev: item.cart_details.qty
        });
        popover.onDidDismiss(function (data) {
            // console.log('data is ', data);
            if (data) {
                var url = __WEBPACK_IMPORTED_MODULE_2__app_apiconfig__["a" /* APIURL */] + "customers/cartupdate?access-token=" + _this.user.token + "&customer_id=" + _this.user.id;
                var cart_obj = {
                    cart_id: item.cart_details.id,
                    product_id: item.cart_details.product_id,
                    unit: item.cart_details.unit,
                    qty: item.cart_details.qty,
                    mrp: item.cart_details.mrp,
                    sale_price: item.cart_details.sale_price
                };
                _this.showLoader = true;
                _this.http.post(url, cart_obj)
                    .subscribe({
                    next: function (response) {
                        _this.showLoader = false;
                        if (response.error != 1) {
                            item.cart_details.qty = data;
                            var toast = _this.toastController.create({
                                message: 'Quantity updated in trolly.',
                                duration: 2000,
                                cssClass: 'success',
                                position: 'bottom'
                            });
                            toast.present();
                            _this.getCartCount();
                            _this.getCartList();
                        }
                        else {
                            var toast = _this.toastController.create({
                                message: response.reason,
                                duration: 2000,
                                cssClass: 'toast-danger',
                                position: 'bottom'
                            });
                            toast.present();
                        }
                    },
                    error: function (err) {
                        _this.showLoader = false;
                        var toast = _this.toastController.create({
                            message: 'Something went wrong.',
                            duration: 2000,
                            cssClass: 'toast-danger',
                            position: 'bottom'
                        });
                        toast.present();
                    }
                });
            }
        });
    };
    Plumber_profilePage.prototype.removeFromCart = function (item) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_2__app_apiconfig__["a" /* APIURL */] + "customers/del-cart?access-token=" + this.user.token + "&cart_id=" + item['cart_details']['id'];
        this.showLoader = true;
        this.http.get(url)
            .subscribe({
            next: function (response) {
                _this.showLoader = false;
                item['added_in_cart'] = false;
                item['cart_details'] = {};
                _this.getCartCount();
                _this.getCartList();
            },
            error: function (err) {
                _this.showLoader = false;
                console.error(err);
            }
        });
    };
    Plumber_profilePage.prototype.getCartCount = function () {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_2__app_apiconfig__["a" /* APIURL */] + "customers/cart-count?customer_id=" + this.user.id + "&access-token=" + this.user.token;
        this.showLoader = true;
        this.http.get(url)
            .subscribe({
            next: function (response) {
                _this.showLoader = false;
                _this.events.publish('add_to_cart', response['cart_count']);
            },
            error: function (err) {
                _this.showLoader = false;
                console.error(err);
            }
        });
    };
    Plumber_profilePage.prototype.getCartList = function () {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_2__app_apiconfig__["a" /* APIURL */] + "customers/cart-list?customer_id=" + this.user.id + "&access-token=" + this.user.token;
        this.http.get(url)
            .subscribe({
            next: function (response) {
                response.forEach(function (element) {
                    element['id'] = element['cart_id'];
                });
                _this.storage.set('cart_list', response);
            },
            error: function (err) {
                _this.showLoader = false;
                console.error(err);
            }
        });
    };
    Plumber_profilePage.prototype.buildForm = function () {
        this.orderForm = this.formBuilder.group({
            requirement: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required]
        });
    };
    Plumber_profilePage.prototype.dataURLtoFile = function (b64Data, contentType) {
        contentType = contentType || '';
        var sliceSize = 512;
        var byteCharacters = atob(b64Data);
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        var blob = new Blob(byteArrays, { type: contentType });
        var filename = Math.random().toString(36).replace(/[^a-z]+/g, '') + ".jpg";
        var file = new File([blob], filename, { type: contentType });
        return file;
    };
    Plumber_profilePage.prototype.openImageSelector = function () {
        var _this = this;
        var actionSheet = this.actionsheet.create({
            title: 'Select Images Eg; Doctor Prescription',
            buttons: [
                {
                    text: 'Browse Photo Albums',
                    role: 'destructive',
                    handler: function () {
                        _this.uploadedFiles = [];
                        document.getElementById('requirement_images').querySelector('input').click();
                    }
                },
                {
                    text: 'Open Camera',
                    role: 'destructive',
                    handler: function () {
                        //this.uploadedFiles = [];
                        var options = {
                            quality: 100,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE,
                            correctOrientation: true,
                            cameraDirection: 1
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            var base64Image = 'data:image/jpg;base64,' + imageData;
                            var imgtag = document.createElement("img");
                            imgtag.src = base64Image;
                            document.querySelector('.uploaded_images').appendChild(imgtag);
                            _this.uploadedFiles.push(base64Image);
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { }
                }
            ]
        });
        actionSheet.present();
    };
    Plumber_profilePage.prototype.renderImages = function () {
        var f = document.getElementById('requirement_images').querySelector('input').files;
        document.querySelector('.uploaded_images').innerHTML = '';
        function importFile(i, that) {
            var reader = new FileReader();
            var imgtag = document.createElement("img");
            reader.onloadend = function (event) {
                imgtag.src = reader.result;
                document.querySelector('.uploaded_images').appendChild(imgtag);
                if (i < f.length - 1) {
                    importFile(++i, that);
                }
            };
            that.uploadedFiles.push(f[i]);
            reader.readAsDataURL(f[i]);
        }
        var that = this;
        importFile(0, that);
    };
    Plumber_profilePage.prototype.request_quote = function () {
        var _this = this;
        this.submitAttempt = true;
        if (!this.orderForm.valid) {
            return false;
        }
        console.log(this.uploadedFiles);
        var formData = new FormData();
        for (var i = 0; i < this.uploadedFiles.length; i++) {
            console.log('length is', this.uploadedFiles[i].length);
            formData.append('file[]', this.uploadedFiles[i]);
        }
        formData.append('requirement', this.orderForm.value['requirement']);
        formData.append('subcat_id', this.navparams.get('subcat_id'));
        formData.append('customer_id', this.user.id);
        formData.append('sp_id', this.details.id);
        console.log('form data is ', formData);
        this.showLoader = true;
        this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_apiconfig__["a" /* APIURL */] + 'orders?access-token=' + this.user.token, formData)
            .subscribe({
            next: function (response) {
                _this.showLoader = false;
                if (response.error) {
                    var toast = _this.toastController.create({
                        message: response.reason,
                        duration: 5000,
                        cssClass: 'toast-danger',
                        position: 'top'
                    });
                    toast.present();
                    return false;
                }
                else {
                    var toast = _this.toastController.create({
                        message: 'Order successfully created. You will be notified once you receive quotation from service provider.',
                        duration: 5000,
                        cssClass: 'toast-success',
                        position: 'top'
                    });
                    toast.present();
                    _this.orderForm.controls.requirement.setValue('');
                    document.querySelector('.uploaded_images').innerHTML = '';
                    var tabsNav = _this.app.getNavByIdOrName('myTabsNav');
                    tabsNav.select(1);
                    _this.navCtrl.popToRoot();
                }
            },
            error: function (error) {
                _this.showLoader = false;
                _this.submitAttempt = false;
                console.error('There was an error!', error);
            }
        });
    };
    Plumber_profilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-plumber_profile',template:/*ion-inline-start:"G:\ET\cw-everything-customer\src\pages\plumber_profile\plumber_profile.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n	<div *ngIf="showLoader" class="loader-bg">\n\n        <ion-spinner class="spinner" color="light"></ion-spinner>\n\n    </div>\n\n    <div class="banner">\n\n        <div class="d-flex profile">\n\n            <div class="profile_img center_img">\n\n                <img src="{{details.upload_photo ? details.upload_photo : \'assets/imgs/avatar.png\'}}" class="crop_img">\n\n            </div>\n\n            <div class="profile_details">\n\n                <div class="text-box">\n\n                    <h2>{{details.distance}} km</h2>\n\n                    <h3>{{\'away\' | translate}}</h3>\n\n                </div>\n\n                <!--<div class="text-box">\n\n                    <h2>$9.50</h2>\n\n                    <h3>{{\'per_hour\' | translate}}</h3>\n\n                </div>-->\n\n                <div class="text-box">\n\n                    <h2>\n\n                        <ion-badge class="end">{{details.rating}} <ion-icon class="material-icons">star</ion-icon>\n\n                        </ion-badge> <small>({{ratings.count}})</small>\n\n                    </h2>\n\n                    <h3>{{\'avg_rating\' | translate}}</h3>\n\n                </div>\n\n            </div>\n\n        </div>\n\n        <div class="other_details">\n\n            <h2 class="d-flex">{{details.shop_name ? details.shop_name : details.name}}\n\n                <!-- <span class="end icon_box">\n\n                    <ion-icon class="material-icons">local_phone</ion-icon>\n\n                    <ion-icon class="material-icons">email</ion-icon>\n\n                </span> -->\n\n            </h2>\n\n            <!-- <h3> Plumber</h3> -->\n\n        </div>\n\n\n\n        <ion-segment [(ngModel)]="about_tab">\n\n            <ion-segment-button [hidden]="details.is_product == 0" value="product">\n\n                Products\n\n            </ion-segment-button>\n\n            <ion-segment-button value="about">\n\n                Requirement\n\n            </ion-segment-button>\n\n            <ion-segment-button value="ratings">\n\n                {{\'ratings\' | translate}}\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n    </div>\n\n\n\n    <div class="tab_container" [ngSwitch]="about_tab">\n\n        <ion-list no-lines *ngSwitchCase="\'product\'">\n\n            <ion-item *ngFor="let data of product_list; let i = index">\n\n                <div class="img_box center_img" item-start>\n\n                    <img src="{{data.image ? data.image : \'assets/imgs/avatar.png\'}}" class="crop_img">\n\n                </div>\n\n                <h2 class="d-flex"><span>{{data.name }}</span>\n\n                </h2>\n\n                <!-- <h3>Plumber</h3> -->\n\n                <h3 class="d-flex">Sale Price : {{data.sale_price}} <s *ngIf="(data.mrp > data.sale_price)" style=\'color:red;margin-left: 5px;\'> {{data.mrp}}</s></h3>\n\n                <!-- <h3 *ngIf="!(data.mrp > data.sale_price)" class="d-flex">MRP Price : {{data.mrp}}</h3> -->\n\n                <!-- <h3  class="d-flex"></h3> -->\n\n                <h3 *ngIf="data?.cart_details?.qty" class="d-flex">Quantity {{data?.cart_details?.qty}}</h3>\n\n                <h3 class="d-flex">Total Unit Price {{data.unit_value}}</h3>\n\n                <button [disabled]="disable_cart_btn || data.stock ==0" *ngIf="!data?.added_in_cart" (click)="addCart(data)" class="d-flex" ion-button><ion-icon class="material-icons" item-end>shopping_cart</ion-icon>Add to trolley</button>\n\n                <button [disabled]="disable_cart_btn || data.stock ==0" *ngIf="data?.added_in_cart" (click)="editQty(data)" class="d-flex" ion-button><ion-icon class="material-icons" item-end>shopping_cart</ion-icon>Edit Qty</button>\n\n                <button [disabled]="disable_cart_btn || data.stock ==0" *ngIf="data?.added_in_cart" (click)="removeFromCart(data)" class="d-flex" ion-button><ion-icon class="material-icons" item-end>remove_shopping_cart</ion-icon>Remove</button>\n\n                <div class="cart-qty">\n\n                    <button ion-button (click)="openDesc(data)"  class="d-flex cart-btn">Description</button>\n\n                 </div>\n\n            </ion-item>\n\n    \n\n            <div *ngIf="product_list.length == 0" class="emptydata" align="center">\n\n                <img src="assets/imgs/sad_smiley.png" style="max-height: 150px" />\n\n                <h4>Currently there are no products.</h4>\n\n            </div>\n\n        </ion-list>\n\n    </div>\n\n\n\n    <div class="tab_container" [ngSwitch]="about_tab">\n\n    	<form [formGroup]="orderForm">\n\n	        <ion-list no-lines *ngSwitchCase="\'about\'">\n\n	            <div class="text_box">\n\n	                <p>Please provide your detailed requirement to receive accurate quotation.</p>\n\n	                <br/>\n\n	            </div>\n\n	            <ion-item [class.invalid]="!orderForm.controls.requirement.valid && (orderForm.controls.requirement.dirty || submitAttempt)">\n\n				  <ion-textarea formControlName="requirement" rows="6" placeholder="Please type your requirement here..."></ion-textarea>\n\n				</ion-item>\n\n				<p class=\'error\' *ngIf="!orderForm.controls.requirement.valid  && (orderForm.controls.requirement.dirty || submitAttempt)">Please enter your requirement.</p>\n\n\n\n				<div style="margin: 20px 0 10px 0">\n\n					<button ion-button class="button-md-dark" block (click)="openImageSelector()"><ion-icon class="material-icons">images</ion-icon> Upload Images (optional)</button>\n\n	                <ion-input multiple style="display:none" (change)="renderImages(event)" type="file" accept="image/*" id="requirement_images"></ion-input>\n\n				</div>\n\n				<div class="uploaded_images"></div>\n\n	        </ion-list>\n\n	    </form>\n\n\n\n        <ion-list no-lines *ngSwitchCase="\'ratings\'">\n\n            <ion-item *ngFor="let review of ratings.reviews">\n\n                <div class="img_box center_img" item-start>\n\n                    <img src="{{review.customer.profilepic}}" class="crop_img">\n\n                </div>\n\n                <h2 class="d-flex"><span>{{review.customer.name}}</span>\n\n                    <ion-badge class="end">{{review.rating}} <ion-icon class="material-icons">star</ion-icon>\n\n                    </ion-badge>\n\n                </h2>\n\n                <h3>{{review.subcategory}} | {{review.created_at}}</h3>\n\n                <p>{{review.comment}}</p>\n\n            </ion-item>\n\n        </ion-list>\n\n    </div>\n\n    <button *ngIf="about_tab != \'product\'" ion-button full class="btn" (click)="request_quote()">Request Quotation</button>\n\n</ion-content>\n\n<div *ngIf="showDesc" class="modal-pop">\n\n    <div class="modal-inner">\n\n        <div class="modal-header">\n\n            <!-- <h2>{{popHeading}}</h2> -->\n\n            <button class="close-btn" (click)="closeDesc()"> &#10006;</button>\n\n        </div>\n\n        <div class="modal-body">\n\n            <p [innerHTML]="productDesc">\n\n            </p>\n\n            <!-- <img [src]="popup_image" [title]="popHeading" [alt]="popHeading" /> -->\n\n        </div>\n\n    </div>\n\n</div>'/*ion-inline-end:"G:\ET\cw-everything-customer\src\pages\plumber_profile\plumber_profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], Plumber_profilePage);
    return Plumber_profilePage;
}());

//# sourceMappingURL=plumber_profile.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return My_addressesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_apiconfig__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_address_add_address__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var My_addressesPage = /** @class */ (function () {
    function My_addressesPage(navCtrl, navParam, app, toastSer, modalController, http, storage) {
        this.navCtrl = navCtrl;
        this.navParam = navParam;
        this.app = app;
        this.toastSer = toastSer;
        this.modalController = modalController;
        this.http = http;
        this.storage = storage;
        this.showLoader = true;
        this.addresses = [];
        this.user = {};
        this.params = {};
        this.selected_address = {};
    }
    My_addressesPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.storage.get('cuserinfo').then(function (result) {
            _this.user = JSON.parse(result);
            _this.loadData();
        });
        this.params = this.navParam.data;
        console.log('params are ', this.params);
    };
    My_addressesPage.prototype.loadData = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_apiconfig__["a" /* APIURL */] + 'customers/addresses?access-token=' + this.user.token)
            .subscribe({
            next: function (response) {
                _this.addresses = response;
                _this.showLoader = false;
            },
            error: function (err) {
                _this.showLoader = false;
            }
        });
    };
    My_addressesPage.prototype.selectAddress = function (data) {
        if (this.params['page'] == 'cart_details') {
            console.log('select address', data);
            this.selected_address = data;
        }
        // if (this.params['page'] == 'cart_details') {
        // 	this.params['address'] = data;
        // }
    };
    My_addressesPage.prototype.placeOrder = function () {
        var _this = this;
        if (this.selected_address && this.selected_address['id']) {
            var sub_total_1 = 0;
            var grand_total_1 = 0;
            var subcat_id_1;
            var sp_id_1;
            this.params['cart'].forEach(function (element) {
                subcat_id_1 = element.subcat_id;
                sp_id_1 = element.sp_id;
                sub_total_1 = sub_total_1 + (element.mrp * element.qty);
                grand_total_1 = sub_total_1 + (element.mrp * element.qty);
            });
            console.log('totals are ', grand_total_1, sub_total_1);
            var formData = new FormData();
            formData.append('is_product', '1');
            formData.append('customer_id', this.user.id);
            formData.append('address_id', this.selected_address['id']);
            formData.append('service_address', this.selected_address['address']);
            formData.append('grand_total', grand_total_1.toString());
            formData.append('sub_total', sub_total_1.toString());
            formData.append('sp_id', sp_id_1);
            formData.append('subcat_id', subcat_id_1);
            this.showLoader = true;
            this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_apiconfig__["a" /* APIURL */] + 'orders?access-token=' + this.user.token, formData)
                .subscribe({
                next: function (response) {
                    _this.showLoader = false;
                    if (response.error) {
                        var toast = _this.toastSer.create({
                            message: response.reason,
                            duration: 5000,
                            cssClass: 'toast-danger',
                            position: 'top'
                        });
                        toast.present();
                        return false;
                    }
                    else {
                        var toast = _this.toastSer.create({
                            message: 'Order successfully created. You will be notified once you receive quotation from service provider.',
                            duration: 5000,
                            cssClass: 'toast-success',
                            position: 'top'
                        });
                        toast.present();
                        _this.storage.remove('cart_list');
                        var tabsNav = _this.app.getNavByIdOrName('myTabsNav');
                        tabsNav.select(1);
                        _this.navCtrl.popToRoot();
                    }
                },
                error: function (error) {
                    _this.showLoader = false;
                    console.error('There was an error!', error);
                    var toast = _this.toastSer.create({
                        message: 'Something went wrong.',
                        duration: 5000,
                        cssClass: 'toast-danger',
                        position: 'bottom'
                    });
                    toast.present();
                }
            });
        }
        else {
            var toast = this.toastSer.create({
                message: 'Please select address',
                duration: 3000,
                cssClass: 'toast-danger',
                position: 'bottom'
            });
            toast.present();
        }
    };
    My_addressesPage.prototype.editAddress = function (index, id) {
        var _this = this;
        var modal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_5__add_address_add_address__["a" /* AddAddressPage */], { obj: this.addresses[index], canDelete: this.addresses.length > 1 });
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.loadData();
            }
        });
        modal.present();
    };
    My_addressesPage.prototype.addAddressModal = function () {
        var _this = this;
        var modal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_5__add_address_add_address__["a" /* AddAddressPage */]);
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.loadData();
            }
        });
        modal.present();
    };
    My_addressesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my_addresses',template:/*ion-inline-start:"G:\ET\cw-everything-customer\src\pages\my_addresses\my_addresses.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{\'my_address\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-img">\n\n    <div *ngIf="showLoader" class="loader-bg">\n\n        <ion-spinner class="spinner" color="light"></ion-spinner>\n\n    </div> \n\n    <ion-list no-lines>\n\n        <ion-item *ngFor="let data of addresses; let i = index;" class="sel_address" [ngStyle]="{\'background\': (data.id==selected_address?.id) ? \'#0B5345\' : \'\'}">\n\n            <ion-icon class="material-icons" item-start>location_on</ion-icon>\n\n            <h2 class="d-flex">{{data.address_type}}<ion-icon (click)="editAddress(i, data.id)" class="material-icons end">create</ion-icon>\n\n            </h2>\n\n            <p (click)="selectAddress(data)">{{data.address}}</p>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n<ion-footer no-border>\n\n       <button ion-button block (click)="addAddressModal()" class="btn"> {{\'add_new_address\' | translate}}</button>\n\n       <button *ngIf="params?.page == \'cart_details\'" ion-button block (click)="placeOrder()" class="btn"> {{\'Place Order\' | translate}}</button>\n\n</ion-footer>'/*ion-inline-end:"G:\ET\cw-everything-customer\src\pages\my_addresses\my_addresses.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], My_addressesPage);
    return My_addressesPage;
}());

//# sourceMappingURL=my_addresses.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IMAGE_URL; });
var APIURL = 'https://everythingservices.in/admin14/capi/v1/';
var IMAGE_URL = 'https://everythingservices.in/admin14';
//# sourceMappingURL=apiconfig.js.map

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 193;

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_apiconfig__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { FirebaseX } from '@ionic-native/firebase-x/ngx';
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, platform, navparams, formBuilder, http, toastController, storage) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.navparams = navparams;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toastController = toastController;
        this.storage = storage;
        this.push_token = '';
        this.submitAttempt = false;
        this.showLoader = false;
        this.otp = null;
    }
    SignupPage.prototype.ngOnInit = function () {
        this.buildForm();
        this.setEmailValidators();
    };
    SignupPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            window.FirebasePlugin.getToken(function (token) { return _this.push_token = token; });
        }
    };
    SignupPage.prototype.buildForm = function () {
        this.signupForm = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[a-zA-Z ]*'),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            email: [''],
            franchise_code: [''],
            contact: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(10),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[0-9{10}]+$')
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(8)
                ])],
            address: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(8)
                ])],
        });
    };
    SignupPage.prototype.sendOTP = function () {
        if (this.signupForm.get('contact').valid) {
            this.otp = Math.floor(100000 + Math.random() * 900000);
            this.http.post(__WEBPACK_IMPORTED_MODULE_6__app_apiconfig__["a" /* APIURL */] + 'customers/send-otp', { otp: this.otp, phone: this.signupForm.get('contact').value })
                .subscribe({
                next: function (data) {
                    //nothing to do
                },
                error: function (error) {
                    console.error('There was an error!', error);
                }
            });
        }
    };
    SignupPage.prototype.resend = function () {
        var _this = this;
        this.showLoader = true;
        if (this.signupForm.get('contact').valid) {
            this.otp = Math.floor(100000 + Math.random() * 900000);
            this.http.post(__WEBPACK_IMPORTED_MODULE_6__app_apiconfig__["a" /* APIURL */] + 'customers/send-otp', { otp: this.otp, phone: this.signupForm.get('contact').value })
                .subscribe({
                next: function (data) {
                    _this.showLoader = false;
                    alert('OTP has been resent!');
                    //nothing to do
                },
                error: function (error) {
                    _this.showLoader = false;
                    console.error('There was an error!', error);
                }
            });
        }
    };
    SignupPage.prototype.setEmailValidators = function () {
        var emailControl = this.signupForm.get('email');
        emailControl.valueChanges.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["distinctUntilChanged"])()).subscribe(function (value) {
            if (value != '') {
                emailControl.setValidators(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9.-_]{1,}@[a-zA-Z0-9.-]{2,}[.]{1}[a-zA-Z]{2,}$'));
            }
            else {
                emailControl.setValidators(null);
            }
            emailControl.updateValueAndValidity();
        });
    };
    SignupPage.prototype.openTerms = function () {
        window.open("https://everythingservices.in/terms", '_system', 'location=yes');
    };
    SignupPage.prototype.signup = function () {
        var _this = this;
        this.submitAttempt = true;
        // if(this.signupForm.get('otp').value != this.otp){
        // 	this.signupForm.get('otp').markAsDirty();
        // 	return false;
        // }
        if (this.signupForm.valid) {
            this.showLoader = true;
            var data = this.signupForm.value;
            data['push_token'] = this.push_token;
            delete data['otp'];
            this.http.post(__WEBPACK_IMPORTED_MODULE_6__app_apiconfig__["a" /* APIURL */] + 'customers?key=25e86ce50a1544c871f066cff5651adb', data)
                .subscribe({
                next: function (data) {
                    _this.submitAttempt = false;
                    _this.showLoader = false;
                    if (data.error) {
                        var toast = _this.toastController.create({
                            message: data.reason,
                            duration: 3000,
                            cssClass: 'toast-danger'
                        });
                        toast.present();
                    }
                    else {
                        var toast = _this.toastController.create({
                            message: 'You are successfully registered. we will be glad to serve you.',
                            duration: 5000,
                            cssClass: 'toast-success'
                        });
                        toast.present();
                        var that = _this;
                        setTimeout(function () {
                            that.navCtrl.pop();
                        }, 3000);
                    }
                },
                error: function (error) {
                    _this.submitAttempt = false;
                    _this.showLoader = false;
                    var toast = _this.toastController.create({
                        message: error.error.msg,
                        duration: 3000,
                        cssClass: 'toast-danger'
                    });
                    toast.present();
                }
            });
        }
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"G:\ET\cw-everything-customer\src\pages\signup\signup.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{\'enter_sign_up_info\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-img">\n\n    <div *ngIf="showLoader" class="loader-bg">\n\n        <ion-spinner class="spinner" color="light"></ion-spinner>\n\n    </div> \n\n    <div class="form">\n\n        <form [formGroup]="signupForm">\n\n            <ion-list no-lines>\n\n                <ion-item [class.invalid]="!signupForm.controls.name.valid && (signupForm.controls.name.dirty || submitAttempt)">\n\n                    <ion-icon class="material-icons" item-start>person</ion-icon>\n\n                    <ion-label floating>{{\'full_name\' | translate}}</ion-label>\n\n                    <ion-input autocomplete="off" formControlName="name" type="text"></ion-input>\n\n                </ion-item>\n\n                <p class=\'error\' *ngIf="!signupForm.controls.name.valid  && (signupForm.controls.name.dirty || submitAttempt)">Please enter your full name.</p>\n\n\n\n                <ion-item [class.invalid]="!signupForm.controls.email.valid && (signupForm.controls.email.dirty || submitAttempt)">\n\n                    <ion-icon class="material-icons" item-start>email</ion-icon>\n\n                    <ion-label floating>{{\'email_address\' | translate}}</ion-label>\n\n                    <ion-input autocomplete="off" formControlName="email" type="text"></ion-input>\n\n                </ion-item>\n\n                <p class=\'error\' *ngIf="!signupForm.controls.email.valid  && (signupForm.controls.email.dirty || submitAttempt)">Please enter a valid email address.</p>\n\n\n\n                <ion-item [class.invalid]="!signupForm.controls.contact.valid && (signupForm.controls.contact.dirty || submitAttempt)">\n\n                    <ion-icon class="material-icons" item-start>phone_android</ion-icon>\n\n                    <ion-label floating>{{\'mobile_number\' | translate}}</ion-label>\n\n                    <ion-input autocomplete="off" formControlName="contact" maxlength="10" type="tel"></ion-input>\n\n                </ion-item>\n\n                <p class=\'error\' *ngIf="!signupForm.controls.contact.valid && (signupForm.controls.contact.dirty || submitAttempt)">Please enter your mobile number.</p>\n\n                <!-- <p text-right *ngIf="signupForm.controls.contact.valid"><a href="#" (click)="resend()">Resend OTP?</a></p> -->\n\n\n\n                 <ion-item [class.invalid]="!signupForm.controls.password.valid && (signupForm.controls.password.dirty || submitAttempt)">\n\n                    <ion-icon class="material-icons" item-start>lock</ion-icon>\n\n                    <ion-label floating>Password</ion-label>\n\n                    <ion-input autocomplete="off" formControlName="password" type="password" *ngIf="!showPasswordText"></ion-input>\n\n                    <ion-input autocomplete="off" formControlName="password" type="text" *ngIf="showPasswordText"></ion-input>\n\n                    <button ion-button clear color="dark" type="button" item-right (click)="showPasswordText = !showPasswordText">\n\n                        <ion-icon style="font-size: 20px; margin-top: 13px" name="eye"></ion-icon>\n\n                    </button>\n\n                </ion-item>\n\n                <p class=\'error\' *ngIf="!signupForm.controls.password.valid  && (signupForm.controls.password.dirty || submitAttempt)">Please enter minimum 8 character password.</p>\n\n\n\n                <ion-item [class.invalid]="!signupForm.controls.address.valid && (signupForm.controls.address.dirty || submitAttempt)">\n\n                    <ion-icon class="material-icons" item-start>place</ion-icon>\n\n                    <ion-label floating>{{\'Address\' | translate}}</ion-label>\n\n                    <ion-input autocomplete="off" formControlName="address" type="text"></ion-input>\n\n                </ion-item>\n\n                <p class=\'error\' *ngIf="!signupForm.controls.address.valid  && (signupForm.controls.address.dirty || submitAttempt)">Please enter a valid address.</p>\n\n\n\n                <ion-item [class.invalid]="!signupForm.controls.address.valid && (signupForm.controls.address.dirty || submitAttempt)">\n\n                    <ion-icon class="material-icons" item-start>shop</ion-icon>\n\n                    <ion-label floating>{{\'franchise code (Optional)\' | translate}}</ion-label>\n\n                    <ion-input autocomplete="off" formControlName="franchise_code" type="text"></ion-input>\n\n                </ion-item>\n\n\n\n\n\n                <!-- <ion-item class="verification_code">\n\n                    <ion-icon class="material-icons" item-start>mobile_friendly</ion-icon>\n\n                    <ion-label floating>{{\'enter_verification_code\' | translate}}</ion-label>\n\n                    <ion-input autocomplete="off" type="number" formControlName="otp"></ion-input>\n\n                </ion-item>\n\n                <p class=\'error\' *ngIf="!signupForm.controls.otp.valid && (signupForm.controls.otp.dirty || submitAttempt)">Please enter valid OTP.</p> -->\n\n\n\n                <ion-item>\n\n                    <ion-label class="clickEnableCls">I agree to all the <a (click)="openTerms()" class="text-md-secondary">Terms &amp; Conditions</a> of Everything Services Pvt. Ltd.</ion-label>\n\n                    <ion-checkbox disabled checked="true" color="success"></ion-checkbox>\n\n                </ion-item>\n\n\n\n            </ion-list>\n\n            <button ion-button block class="btn" (click)="signup()"> {{\'signup\' | translate}}</button>\n\n            <br/><br/>\n\n        </form>    \n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\ET\cw-everything-customer\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_apiconfig__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__appointment_status_appointment_status__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__my_profile_my_profile__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__popover_popover__ = __webpack_require__(263);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppointmentsPage = /** @class */ (function () {
    function AppointmentsPage(navCtrl, toastController, popoverController, navparams, platform, storage, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.popoverController = popoverController;
        this.navparams = navparams;
        this.platform = platform;
        this.storage = storage;
        this.http = http;
        this.appointments_tab = "upcoming";
        this.showLoader = false;
        this.approved = null;
        this.orders = [];
        this.orderStack = [];
        this.user = {};
        this.showfee = false;
        this.filterVal = 'All';
        this.loadOrders = function () {
            _this.showLoader = true;
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiconfig__["a" /* APIURL */] + 'orders?access-token=' + _this.user.token + '&where[customer_id]=' + _this.user.id + "&where[is_product]=0")
                .subscribe({
                next: function (data) {
                    _this.showLoader = false;
                    _this.approved = data.approved;
                    _this.orders = data.orders;
                    _this.orderStack = data.orders;
                },
                error: function (err) {
                    _this.showLoader = false;
                }
            });
        };
    }
    AppointmentsPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.storage.get('cuserinfo').then(function (result) {
            _this.user = JSON.parse(result);
            _this.loadOrders();
        });
    };
    AppointmentsPage.prototype.ionViewDidLoad = function () {
        if (this.platform.is('cordova')) {
            this.firebasePlugin = window.FirebasePlugin;
            this.firebasePlugin.onMessageReceived(this.onMessageReceived.bind(this));
        }
    };
    AppointmentsPage.prototype.ionViewWillEnter = function () {
        if (this.navparams.get("popped")) {
            this.loadOrders();
        }
    };
    AppointmentsPage.prototype.onMessageReceived = function (message) {
        if (message.tap) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__appointment_status_appointment_status__["a" /* Appointment_statusPage */], { id: message.order_id });
        }
        else {
            //reload appointments
            this.loadOrders();
            //received while app in foreground (show a toast)
            var toast = this.toastController.create({
                message: message.body,
                duration: 5000,
                position: 'top',
                cssClass: 'toast-info'
            });
            toast.present();
        }
    };
    AppointmentsPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.loadOrders();
        var interval = setInterval(function () {
            if (_this.showLoader == false) {
                refresher.complete();
                clearInterval(interval);
            }
        }, 1000);
    };
    AppointmentsPage.prototype.openPopover = function (ev) {
        var _this = this;
        var popover = this.popoverController.create(__WEBPACK_IMPORTED_MODULE_7__popover_popover__["a" /* PopoverPage */], { filter: this.filterVal });
        popover.onDidDismiss(function (data) {
            if (data) {
                _this.filterVal = data.value;
                if (data.value == 'All') {
                    _this.orders = _this.orderStack;
                }
                else {
                    _this.orders = _this.orderStack.filter(function (x) { return x.status == _this.filterVal; });
                }
            }
        });
        popover.present({
            ev: ev
        });
    };
    AppointmentsPage.prototype.filterOrders = function (type) {
        if (typeof this.orders != 'undefined') {
            if (type == 'Past')
                return this.orders.filter(function (x) { return x.status == 'Complete' || x.status == 'Rejected' || x.status == 'Cancelled'; });
            else
                return this.orders.filter(function (x) { return x.status != 'Complete' && x.status != 'Cancelled' && x.status != 'Rejected'; });
        }
        else {
            return [];
        }
    };
    AppointmentsPage.prototype.getStatus = function (status) {
        switch (status) {
            case 'Pending':
                return 'Awaiting Quotation';
            case 'Quoted':
                return 'Quotation Received';
            default:
                return status;
        }
    };
    AppointmentsPage.prototype.appointment_status = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__appointment_status_appointment_status__["a" /* Appointment_statusPage */], { id: id });
    };
    AppointmentsPage.prototype.my_profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__my_profile_my_profile__["a" /* My_profilePage */]);
    };
    AppointmentsPage.prototype.onImageLoad = function (e) {
        e.classList.add('visible');
        e.classList.remove('invisible');
    };
    AppointmentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-appointments',template:/*ion-inline-start:"G:\ET\cw-everything-customer\src\pages\appointments\appointments.html"*/'<ion-header class="bg-color">\n\n    <ion-navbar>\n\n        <ion-title>{{\'appointments\' | translate}}</ion-title>\n\n        <ion-buttons end>\n\n          <button (click)="openPopover($event)" ion-button icon-only>\n\n            <ion-icon name="funnel" style="color: white"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n    <ion-list *ngIf="showfee == true">\n\n        <ion-item>\n\n          <p>You have pending unpaid registered services. <a href=\'#\' (click)="openPay()">PAY NOW</a></p>\n\n        </ion-item>\n\n    </ion-list>\n\n    <ion-segment [(ngModel)]="appointments_tab">\n\n        <ion-segment-button value="upcoming">\n\n            {{\'upcoming\' | translate}}\n\n        </ion-segment-button>\n\n        <ion-segment-button value="past">\n\n            {{\'past\' | translate}}\n\n        </ion-segment-button>\n\n    </ion-segment>\n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n    <div *ngIf="showLoader" class="loader-bg">\n\n        <ion-spinner class="spinner" color="light"></ion-spinner>\n\n    </div>    \n\n\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content\n\n            pullingIcon="arrow-dropdown"\n\n            pullingText="Pull to refresh"\n\n            refreshingSpinner="bubbles"\n\n        ></ion-refresher-content>\n\n    </ion-refresher>\n\n    \n\n    <div class="tab_container" [ngSwitch]="appointments_tab">\n\n        <ion-list no-lines *ngSwitchCase="\'upcoming\'">\n\n            <ion-item *ngFor="let item of filterOrders(\'Pending\')" (click)="appointment_status(item.id)" class="{{item.status | lowercase}} item item-block item-md">\n\n                <div class="img_box center_img" item-start>\n\n                    <img src="{{item.providers.profilepic}}" class="invisible crop_img" (load)="onImageLoad($event.target)">\n\n                </div>\n\n                <h2 class="d-flex"><span>{{item.providers.shop_name ? item.providers.shop_name : item.providers.name}}</span>\n\n                    <span class="end">{{getStatus(item.status)}}</span>\n\n                </h2>\n\n                <h3 class="d-flex"><span>{{item.subcategory}}</span> <span style="white-space: normal; text-align: right" class="end">{{item.status == \'Scheduled\' ? (item.service_schedule | date : "dd MMM, yyyy") : (item.created_at | date : "dd MMM, yyyy")}}</span></h3>\n\n                <p>{{item.requirement}}</p>\n\n            </ion-item>\n\n\n\n            <div *ngIf="filterOrders(\'Pending\').length == 0" class="emptydata" align="center">\n\n                <img src="assets/imgs/nodata.png" style="max-height: 150px" />\n\n                <h4>No appointments yet. Place an order to get started.</h4>\n\n            </div>\n\n        </ion-list>\n\n\n\n        <ion-list no-lines *ngSwitchCase="\'past\'">\n\n            <ion-item *ngFor="let item of filterOrders(\'Past\')" (click)="appointment_status(item.id)" class="{{item.status == \'Complete\' && item.is_paid == 0 ? \'rejected\' : item.status | lowercase}} item item-block item-md">\n\n                <div class="img_box center_img" item-start>\n\n                    <img src="{{item.providers.profilepic}}" class="crop_img">\n\n                </div>\n\n                <h2 class="d-flex"><span>{{item.providers.shop_name ? item.providers.shop_name : item.providers.name}}</span>\n\n                    <span class="end">{{item.status == \'Complete\' && item.is_paid == 0 ? \'Payment Pending\' : item.status}}</span>\n\n                </h2>\n\n                <h3 class="d-flex">{{item.subcategory}} <span class="end">{{item.created_at | date}}</span></h3>\n\n                <p>{{item.requirement}}</p>\n\n            </ion-item>\n\n\n\n            <div *ngIf="filterOrders(\'Past\').length == 0" class="emptydata" align="center">\n\n                <ion-icon name="close-circle" class="icon-md-primary" style="zoom:8.0;"></ion-icon>\n\n                <h4>No data found.</h4>\n\n            </div>\n\n        </ion-list>\n\n\n\n    </div>\n\n\n\n    <div align="center" style="width: 100%; position: absolute; top: 45%; padding: 0 20px; transform: translateY(-50%);" *ngIf="approved == 0">\n\n        <h5 class="text-md-light">You will not be able to receive orders until you submit relevant documents.</h5>\n\n        <button ion-button (click)="my_profile()">Complete KYC</button>\n\n    </div>    \n\n</ion-content>\n\n'/*ion-inline-end:"G:\ET\cw-everything-customer\src\pages\appointments\appointments.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], AppointmentsPage);
    return AppointmentsPage;
}());

//# sourceMappingURL=appointments.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Appointment_statusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_apiconfig__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_gallery_modal__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__book_appointment_book_appointment__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order_rating_order_rating__ = __webpack_require__(262);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var Appointment_statusPage = /** @class */ (function () {
    function Appointment_statusPage(navCtrl, platform, loadingCtrl, modalCtrl, alertCtrl, toast, storage, navparams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.toast = toast;
        this.storage = storage;
        this.navparams = navparams;
        this.http = http;
        this.showLoader = true;
        this.order = {};
        this.provider = {};
        this.subcat = {};
        this.user = {};
        this.checksum = '';
        this.unpaid = true;
        this.orderImages = [];
        this.baseurl = __WEBPACK_IMPORTED_MODULE_3__app_apiconfig__["a" /* APIURL */] + '../../';
        this.paymentMode = '';
        this.paymentType = 'service_charge';
        this.status_img = 'assets/imgs/ic_exp_pending_req.png';
        this.orderid = '';
        this.successCallback = function (response) {
            if (response.STATUS == "TXN_SUCCESS") {
                var loading_1 = _this.loadingCtrl.create({
                    content: 'Updating transaction details...'
                });
                loading_1.present();
                response['EORDERID'] = _this.order.id;
                response['ISVISITING'] = (_this.paymentType == 'visiting_charge') ? 'Y' : 'N';
                _this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_apiconfig__["a" /* APIURL */] + "orders/payment-callback?access-token=" + _this.user.token, response)
                    .subscribe({
                    next: function (response) {
                        loading_1.dismiss();
                        _this.unpaid = false;
                        var alert = _this.alertCtrl.create({
                            title: 'Payment Successful',
                            subTitle: 'Hope you enjoyed our service. Please take out few seconds to rate our service.',
                            buttons: [{
                                    text: 'OK',
                                    handler: function () {
                                        var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__order_rating_order_rating__["a" /* OrderRatingPage */], { order_id: _this.order.id, token: _this.user.token });
                                        modal.present();
                                    }
                                }]
                        });
                        alert.present();
                    },
                    error: function (err) {
                        loading_1.dismiss();
                        var alert = _this.alertCtrl.create({
                            title: 'Some Technical Glitch Observed',
                            subTitle: err.message,
                            buttons: [{
                                    text: 'OK'
                                }]
                        });
                        alert.present();
                    }
                });
            }
            else {
                alert("Transaction Failed for reason: - " + response.RESPMSG + " (" + response.RESPCODE + ")");
            }
        };
        this.failureCallback = function (error) {
            alert(error.RESPMSG);
        };
        platform.ready().then(function () {
            if (platform.is('cordova')) {
                //setting up notification on receive
                _this.firebasePlugin = window.FirebasePlugin;
                _this.firebasePlugin.onMessageReceived(_this.onMessageReceived.bind(_this));
            }
        });
    }
    Appointment_statusPage.prototype.onMessageReceived = function (message) {
        if (message.tap) {
            //do nothing
        }
        else {
            //received while app in foreground (show a toast)
            //reload current view
            var view = this.navCtrl.getActive();
            var id = this.navparams.get('id');
            if (view.component.name == 'Appointment_statusPage' && id == message.order_id) {
                this.loadOrder();
            }
        }
    };
    Appointment_statusPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.storage.get('cuserinfo').then(function (result) {
            _this.user = JSON.parse(result);
            _this.loadOrder();
        });
    };
    Appointment_statusPage.prototype.ionViewWillLeave = function () {
        if (this.navparams.get("popped")) {
            this.navCtrl.getPrevious().data.popped = 1;
        }
    };
    Appointment_statusPage.prototype.ionViewWillEnter = function () {
        if (this.navparams.get("popped")) {
            this.loadOrder();
        }
    };
    Appointment_statusPage.prototype.loadOrder = function () {
        var _this = this;
        var id = this.navparams.get('id');
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_apiconfig__["a" /* APIURL */] + 'orders/' + id + '?access-token=' + this.user.token)
            .subscribe({
            next: function (data) {
                _this.showLoader = false;
                _this.order = data;
                _this.subcat = data.subcategory;
                _this.provider = data.provider;
                _this.getImages();
                _this.orderImages = (data.image != null) ? data.image.split(",") : [];
                if (data.payment != null && data.payment.payment_status == 'Paid') {
                    _this.unpaid = false;
                }
            },
            error: function (error) {
                console.error('There was an error!', error);
            }
        });
    };
    Appointment_statusPage.prototype.openPopup = function (index) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5_ionic_gallery_modal__["a" /* GalleryModal */], {
            photos: [{ type: 'image', url: this.baseurl + this.orderImages[index] }],
            initialSlide: 0
        });
        modal.present();
    };
    Appointment_statusPage.prototype.cancelOrder = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Cancellation',
            message: 'Are you sure you want to cancel this order?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.showLoader = true;
                        _this.http.put(__WEBPACK_IMPORTED_MODULE_3__app_apiconfig__["a" /* APIURL */] + 'orders/' + _this.order.id + '?access-token=' + _this.user.token, { status: 'Cancelled' })
                            .subscribe({
                            next: function (response) {
                                _this.showLoader = false;
                                _this.navCtrl.getPrevious().data.popped = 1;
                                _this.navCtrl.pop();
                            },
                            error: function (err) {
                                _this.showLoader = false;
                                console.log(err);
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    Appointment_statusPage.prototype.getImages = function () {
        switch (this.order.status) {
            case 'Pending':
                this.status_img = 'assets/imgs/ic_exp_pending_req.png';
                break;
            case 'Quoted':
                this.status_img = 'assets/imgs/ic_exp_in_process.png';
                break;
            case 'Accepted':
            case 'Scheduled':
                this.status_img = 'assets/imgs/ic_exp_accepted.png';
                break;
            case 'Complete':
                this.status_img = 'assets/imgs/ic_exp_finished.png';
                break;
            default:
                this.status_img = 'assets/imgs/ic_exp_pending_req.png';
                break;
        }
    };
    Appointment_statusPage.prototype.approve = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__book_appointment_book_appointment__["a" /* Book_appointmentPage */], { order_id: this.order.id });
    };
    Appointment_statusPage.prototype.reject = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Rejection',
            message: 'Are you sure you want to reject this order? Order will be cancelled.',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { }
                },
                {
                    text: 'Reject',
                    handler: function () {
                        //ask reason
                        var reasons_alert = _this.alertCtrl.create();
                        reasons_alert.setTitle('Reason of Rejection');
                        reasons_alert.addInput({
                            type: 'radio',
                            label: 'Quotation too high.',
                            value: 'Quotation too high.',
                            checked: true
                        });
                        reasons_alert.addInput({
                            type: 'radio',
                            label: 'Got another service provider at cheaper rates.',
                            value: 'Got another service provider at cheaper rates.',
                            checked: false
                        });
                        reasons_alert.addInput({
                            type: 'radio',
                            label: 'Service not required anymore.',
                            value: 'Service not required anymore.',
                            checked: false
                        });
                        reasons_alert.addInput({
                            type: 'radio',
                            label: 'Other.',
                            value: 'Other.',
                            checked: false
                        });
                        reasons_alert.addButton('Cancel');
                        reasons_alert.addButton({
                            text: 'OK',
                            handler: function (data) {
                                if (data == 'Other.') {
                                    var other_alert = _this.alertCtrl.create({
                                        title: 'Other Reason',
                                        cssClass: 'quotation',
                                        inputs: [
                                            {
                                                name: 'reason',
                                                placeholder: 'Reason for Rejection'
                                            }
                                        ],
                                        buttons: [
                                            {
                                                text: 'Cancel',
                                                role: 'cancel',
                                                handler: function (data) {
                                                    console.log('Cancel clicked');
                                                }
                                            },
                                            {
                                                text: 'Submit',
                                                handler: function (data) {
                                                    if (data.reason.trim() == '' || data.reason.length < 4) {
                                                        var toast = _this.toast.create({
                                                            message: 'Please enter valid Reason. It should be minimum 4 characters.',
                                                            duration: 3000,
                                                            cssClass: 'toast-danger',
                                                            position: 'top'
                                                        });
                                                        toast.present();
                                                        return false;
                                                    }
                                                    else {
                                                        _this.showLoader = true;
                                                        var d = new Date();
                                                        var qdate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
                                                        _this.http.put(__WEBPACK_IMPORTED_MODULE_3__app_apiconfig__["a" /* APIURL */] + 'orders/' + _this.order.id + '?access-token=' + _this.user.token, { status: 'Rejected', reject_reason: data.reason, quotation_approved: 'N', quotation_approved_date: qdate })
                                                            .subscribe({
                                                            next: function (response) {
                                                                _this.showLoader = false;
                                                                _this.navCtrl.getPrevious().data.popped = 1;
                                                                _this.navCtrl.pop();
                                                            },
                                                            error: function (err) {
                                                                _this.showLoader = false;
                                                                console.log(err);
                                                            }
                                                        });
                                                    }
                                                }
                                            }
                                        ]
                                    });
                                    other_alert.present();
                                }
                                else {
                                    _this.showLoader = true;
                                    var d = new Date();
                                    var qdate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
                                    _this.http.put(__WEBPACK_IMPORTED_MODULE_3__app_apiconfig__["a" /* APIURL */] + 'orders/' + _this.order.id + '?access-token=' + _this.user.token, { status: 'Rejected', reject_reason: data, quotation_approved: 'N', quotation_approved_date: qdate })
                                        .subscribe({
                                        next: function (response) {
                                            _this.showLoader = false;
                                            _this.navCtrl.getPrevious().data.popped = 1;
                                            _this.navCtrl.pop();
                                        },
                                        error: function (err) {
                                            _this.showLoader = false;
                                            console.log(err);
                                        }
                                    });
                                }
                            }
                        });
                        reasons_alert.present();
                    }
                }
            ]
        });
        alert.present();
    };
    Appointment_statusPage.prototype.takeOrderNote = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Order Comment',
            cssClass: 'quotation',
            inputs: [
                {
                    name: 'note',
                    placeholder: 'Did you face any issues for this order?'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Submit',
                    handler: function (data) {
                        if (data.note.trim() == '' || data.length < 10) {
                            var toast = _this.toast.create({
                                message: 'Please enter valid Comment. It should be minimum 10 characters.',
                                duration: 3000,
                                cssClass: 'toast-danger',
                                position: 'top'
                            });
                            toast.present();
                            return false;
                        }
                        else {
                            _this.submitNote(data.note.trim());
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    Appointment_statusPage.prototype.submitNote = function (comment) {
        var _this = this;
        this.showLoader = true;
        var order_id = this.navparams.get('id');
        var d = new Date();
        var data = { order_id: order_id, comment: comment, created_at: d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(), note_from: 'Customer', from_id: this.user.id };
        var formData = new FormData();
        for (var key in data) {
            formData.append(key, data[key]);
        }
        //sending api request
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_apiconfig__["a" /* APIURL */] + 'order-notes?access-token=' + this.user.token, formData)
            .subscribe({
            next: function (response) {
                _this.showLoader = false;
                var alert = _this.alertCtrl.create({
                    title: 'Success',
                    subTitle: 'Your Comment has been submitted successfully. We will call you incase we need your assistance.',
                    buttons: ['OK']
                });
                alert.present();
            },
            error: function (err) {
                _this.showLoader = false;
                console.error(err);
            }
        });
    };
    Appointment_statusPage.prototype.openSelect = function () {
        document.getElementById('paymentMode').click();
    };
    Appointment_statusPage.prototype.pay = function () {
        //alert(this.paymentMode)
        if (this.subcat.visiting_charge > 0) {
            document.getElementById('paymentType').click();
        }
        else {
            this.processPayment();
        }
    };
    Appointment_statusPage.prototype.processPayment = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, d, formdata, dt, txnRequest, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create({
                            content: 'Processing Payment...'
                        });
                        loading.present();
                        if (!(this.paymentMode == 'Cash')) return [3 /*break*/, 1];
                        d = new Date();
                        formdata = {
                            order_id: this.order.id,
                            amount: (this.paymentType == 'service_charge') ? this.order.quotation : this.subcat.visiting_charge,
                            payment_status: 'Paid',
                            payment_mode: 'Cash',
                            created_at: d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(),
                            updated_at: d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
                        };
                        this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_apiconfig__["a" /* APIURL */] + "orders/payment?access-token=" + this.user.token, formdata)
                            .subscribe({
                            next: function (response) {
                                loading.dismiss();
                                _this.unpaid = false;
                                var alert = _this.alertCtrl.create({
                                    title: 'Payment Successful',
                                    subTitle: 'Hope you enjoyed our service. Please take out few seconds to rate our service.',
                                    buttons: [{
                                            text: 'OK',
                                            handler: function () {
                                                var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__order_rating_order_rating__["a" /* OrderRatingPage */], { order_id: _this.order.id, token: _this.user.token });
                                                modal.present();
                                            }
                                        }]
                                });
                                alert.present();
                            },
                            error: function (err) {
                                loading.dismiss();
                                var alert = _this.alertCtrl.create({
                                    title: 'Some Technical Glitch Observed',
                                    subTitle: err,
                                    buttons: [{
                                            text: 'OK'
                                        }]
                                });
                                alert.present();
                            }
                        });
                        return [3 /*break*/, 6];
                    case 1:
                        dt = new Date().getTime().toString();
                        this.orderid = 'EVSR-SVCHG-' + dt.substring(dt.length - 5);
                        txnRequest = {
                            "MID": "vRXbJb75879571779361",
                            "ORDER_ID": this.orderid,
                            "CUST_ID": this.user.id,
                            "INDUSTRY_TYPE_ID": "Retail",
                            "CHANNEL_ID": "WEB",
                            "TXN_AMOUNT": (this.paymentType == 'service_charge') ? this.order.quotation.toFixed(2) : this.subcat.visiting_charge.toFixed(2),
                            "WEBSITE": "DEFAULT",
                            "CALLBACK_URL": "https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID=" + this.orderid
                        };
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.generateChecksumAPI(txnRequest)];
                    case 3:
                        _a.sent();
                        txnRequest['CHECKSUMHASH'] = this.checksum;
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        console.error('Error Generating Checksum', err_1);
                        return [3 /*break*/, 5];
                    case 5:
                        txnRequest["ENVIRONMENT"] = "production";
                        loading.dismiss();
                        if (this.platform.is('cordova')) {
                            window.paytm.startPayment(txnRequest, this.successCallback, this.failureCallback);
                        }
                        else {
                            // Cordova Not Present
                            return [2 /*return*/];
                        }
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Appointment_statusPage.prototype.generateChecksumAPI = function (d) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_apiconfig__["a" /* APIURL */] + "orders/checksum?access-token=" + this.user.token, d)
                            .toPromise()
                            .then(function (response) {
                            _this.checksum = response.toString();
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    Appointment_statusPage.prototype.onImageLoad = function (e) {
        e.classList.add('visible');
        e.classList.remove('invisible');
    };
    Appointment_statusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-appointment_status',template:/*ion-inline-start:"G:\ET\cw-everything-customer\src\pages\appointment_status\appointment_status.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title><span>Order Status - {{order.status}}</span></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n    <div *ngIf="showLoader" class="loader-bg">\n\n        <ion-spinner class="spinner" color="light"></ion-spinner>\n\n    </div> \n\n    <div class="job_status">\n\n        <ion-row>\n\n            <ion-col col-7>\n\n                <div class="status d-flex active">\n\n                    <h2>1</h2>\n\n                    <div class="status_details">\n\n                        <h3>Awaiting Quotation</h3>\n\n                        <p>{{order.created_at | date:\'MMM d, y, h:mm a\'}}</p>\n\n                    </div>\n\n                </div>\n\n                <div class="status d-flex" *ngIf="order.status == \'Pending\'">\n\n                    <h2>2</h2>\n\n                    <div class="status_details">\n\n                        <h3>Accept / Reject</h3>\n\n                        <p>{{order.quotation_date != null ? (order.quotation_date | date:\'MMM d, y, h:mm a\') : \'-\'}}</p>\n\n                    </div>\n\n                </div>\n\n                <div *ngIf="order.status != \'Pending\'" class="status d-flex {{[\'\',\'Quoted\',\'Scheduled\',\'Complete\'].indexOf(order.status) ? \'active\' : \'\'}}">\n\n                    <h2>2</h2>\n\n                    <div class="status_details">\n\n                        <h3>Quotation Received</h3>\n\n                        <p>{{order.quotation_date != null ? (order.quotation_date | date:\'MMM d, y, h:mm a\') : \'-\'}}</p>\n\n                    </div>\n\n                </div>\n\n                <div class="status d-flex {{order.status == \'Scheduled\' || order.status == \'Complete\'  ? \'active\' : \'\'}}">\n\n                    <h2>3</h2>\n\n                    <div class="status_details">\n\n                        <h3>Scheduled</h3>\n\n                        <p>{{order.service_schedule != null ? (order.service_schedule | date:\'MMM d, y, h:mm a\') : \'-\'}}</p>\n\n                    </div>\n\n                </div>\n\n                <div class="status d-flex {{\'Complete\' == order.status ? \'active\' : \'\'}}">\n\n                    <h2>4</h2>\n\n                    <div class="status_details">\n\n                        <h3>{{\'finished\' | translate}}</h3>\n\n                        <p>{{\'Complete\' == order.status ? (order.service_schedule | date:\'MMM d, y, h:mm a\') : \'-\'}}</p>\n\n                    </div>\n\n                </div>\n\n            </ion-col>\n\n            <ion-col col-5>\n\n                <div class="img_box center_img">\n\n                    <img src="{{status_img}}" class="crop_img">\n\n                </div>\n\n                <div class="d-flex" style="flex-direction: column;">\n\n\n\n                    <button *ngIf="order.status == \'Quoted\'" (click)="approve()" ion-button block icon-start class="btn">\n\n                        <ion-icon name="checkmark"></ion-icon> ACCEPT\n\n                    </button>\n\n                    <button *ngIf="order.status == \'Quoted\'" (click)="reject()" ion-button block icon-start class="btn danger">\n\n                        <ion-icon name="close"></ion-icon> REJECT\n\n                    </button>\n\n\n\n                    <button *ngIf="order.status == \'Pending\'" (click)="cancelOrder()" ion-button block class="btn">CANCEL ORDER</button>\n\n\n\n                    <a class="btn" button ion-button icon-start href="tel:{{provider.contact}}" *ngIf="order.status == \'Scheduled\' && order.quotation_approved == \'Y\'"><ion-icon name="call"></ion-icon> CALL</a>\n\n\n\n                    <button *ngIf="order.status == \'Complete\' && unpaid" (click)="openSelect()" ion-button block class="btn">MAKE PAYMENT</button>\n\n\n\n                    <a *ngIf="order.status != \'Complete\'" class="btn" button ion-button icon-start href="tel:+91 864 209 3333"><ion-icon name="call"></ion-icon> HELPLINE</a>\n\n\n\n                    <img *ngIf="!unpaid && order.status == \'Complete\'" style="max-height: 100px; margin: auto" src="../assets/imgs/paid.png" />\n\n                </div>\n\n            </ion-col>\n\n\n\n            <!-- payment options -->\n\n            <ion-item hidden>\n\n                <ion-label>Payment Mode</ion-label>\n\n                <ion-select id="paymentMode" (ionChange)="pay()" [(ngModel)]="paymentMode">\n\n                     <ion-option value="Online">Online</ion-option>\n\n                     <ion-option value="Cash">Cash</ion-option>\n\n                </ion-select>\n\n            </ion-item>    \n\n            <!-- payment options -->\n\n            <ion-item hidden>\n\n                <ion-label>What are you paying for?</ion-label>\n\n                <ion-select id="paymentMode" (ionChange)="processPayment()" [(ngModel)]="paymentType">\n\n                     <ion-option value="service_charge" selected>Service Charge - {{order.quotation | currency: "₹"}}</ion-option>\n\n                     <ion-option value="visiting_charge" selected>Visiting Charge - {{subcat.visiting_charge | currency: "₹"}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>    \n\n\n\n        </ion-row>\n\n    </div>\n\n\n\n    <div class="appointment_details">\n\n        <ion-list no-lines>\n\n            <ion-item>\n\n                <div class="img_box center_img" item-start>\n\n                    <img src="{{provider.upload_photo}}" class="invisible crop_img" (load)="onImageLoad($event.target)">\n\n                </div>\n\n                <h2 class="d-flex">{{provider.name}}</h2>\n\n                <div class="text-box">\n\n                    <h3>{{\'job_task\' | translate}}</h3>\n\n                    <h4>{{subcat.name}}</h4>\n\n                </div>\n\n                <ion-row>\n\n                    <ion-col col-6>\n\n                        <div class="text-box">\n\n                            <h3>{{\'job_date\' | translate}}</h3>\n\n                            <h4>{{order.created_at | date:\'MMM d, y, h:mm a\'}}</h4>\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-6 *ngIf="[\'Quoted\',\'Scheduled\',\'Complete\'].indexOf(order.status) != -1">\n\n                        <div class="text-box">\n\n                            <h3>{{\'job_cost\' | translate}}</h3>\n\n                            <h4><b>{{\'₹\'+order.quotation}}</b></h4>\n\n                        </div>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <div class="text-box" *ngIf="order.quotation_note">\n\n                    <h3>Quotation Note</h3>\n\n                    <h4>{{order.quotation_note}}</h4>\n\n                </div>\n\n                <div class="text-box">\n\n                    <h3>Job Details</h3>\n\n                    <h4>{{order.requirement}}</h4>\n\n                </div>\n\n                <div *ngIf="order.status == \'Rejected\'" class="text-box">\n\n                    <h3>Reason for Rejection</h3>\n\n                    <h4>{{order.reject_reason}}</h4>\n\n                </div>\n\n                <div class="text-box" *ngIf="(order.status == \'Accepted\' || order.status == \'Scheduled\') && order.quotation_approved == \'Y\'">\n\n                    <h3>Address</h3>\n\n                    <h4>{{order.service_address}}</h4>\n\n                </div>\n\n                <!-- <div class="text-box" *ngIf="(order.status == \'Accepted\' || order.status == \'Scheduled\') && order.quotation_approved == \'Y\'">\n\n                    <h3>Contact Number</h3>\n\n                    <h4><a href="tel:{{customer.contact}}">{{customer.contact}}</a></h4>\n\n                </div> -->\n\n                <div class="text-box" *ngIf="(order.status == \'Scheduled\')">\n\n                    <h3>Service Schedule</h3>\n\n                    <h4>{{order.service_schedule | date : "MMM d, y, h:mm a"}}</h4>\n\n                </div>\n\n            </ion-item>\n\n        </ion-list>\n\n\n\n        <ion-grid *ngIf="order.image != \'null\'">\n\n          <ion-row>\n\n            <ion-col col-4 *ngFor="let img of orderImages;let indexOfelement=index;">\n\n                <div class="imgBg">    \n\n                    <img src="{{baseurl+img}}" class="invisible" (load)="onImageLoad($event.target)" (click)="openPopup(indexOfelement)" />\n\n                </div>    \n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n\n\n        <div style="margin: 20px 10px 0 10px" *ngIf="order.status == \'Complete\'">\n\n            <button (click)="takeOrderNote()" block ion-button class="button-wp-danger" icon-start><ion-icon name="alert"></ion-icon> LEAVE COMMENT</button>\n\n        </div>\n\n\n\n        <br/><br/>\n\n\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\ET\cw-everything-customer\src\pages\appointment_status\appointment_status.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], Appointment_statusPage);
    return Appointment_statusPage;
}());

//# sourceMappingURL=appointment_status.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book_appointmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_apiconfig__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_date_picker__ = __webpack_require__(261);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Book_appointmentPage = /** @class */ (function () {
    function Book_appointmentPage(navCtrl, datePicker, datepipe, toast, storage, navparams, http) {
        this.navCtrl = navCtrl;
        this.datePicker = datePicker;
        this.datepipe = datepipe;
        this.toast = toast;
        this.storage = storage;
        this.navparams = navparams;
        this.http = http;
        this.select_address_type = '';
        this.select_address = '';
        this.details = {};
        this.address = [];
        this.showLoader = true;
        this.user = {};
        this.date = new Date();
        this.service_date = '';
        var newdate = new Date();
        if (newdate.getHours() > 20) {
            newdate.setDate(newdate.getDate() + 1);
        }
        newdate.setMinutes(newdate.getMinutes() + 30);
        this.service_date = this.datepipe.transform(newdate, 'd MMM, y h:mm a');
    }
    Book_appointmentPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var order_id = this.navparams.get('order_id');
        this.storage.get('cuserinfo').then(function (result) {
            _this.user = JSON.parse(result);
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_apiconfig__["a" /* APIURL */] + 'orders/booking-pre-details?id=' + order_id + '&access-token=' + _this.user.token)
                .subscribe({
                next: function (response) {
                    _this.showLoader = false;
                    _this.details = response.details;
                    _this.address = response.address;
                    _this.select_address_type = _this.address[0].address_type;
                    _this.select_address = _this.address[0].address;
                },
                error: function (err) {
                    _this.showLoader = false;
                }
            });
        });
    };
    Book_appointmentPage.prototype.openDatePicker = function () {
        var _this = this;
        var d = new Date();
        d.setMonth(d.getMonth() + 3);
        this.datePicker.show({
            date: new Date(),
            mode: 'datetime',
            titleText: 'Service Schedule',
            minDate: new Date().getTime(),
            maxDate: d.getTime(),
            minuteInterval: 30,
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(function (date) {
            console.log('Got date: ', date);
            _this.service_date = _this.datepipe.transform(date, 'd MMM, y h:mm a');
        }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    Book_appointmentPage.prototype.getDate = function (num) {
        var d = new Date();
        if (new Date().getHours() > 20) {
            num++;
        }
        d.setDate(d.getDate() + num);
        return d;
    };
    Book_appointmentPage.prototype.getHour = function (i) {
        var hour = 1 + parseInt(i);
        return (hour < 12) ? hour + ":00 AM" : (hour == 12) ? hour + ":00 PM" : (hour == 24) ? '12:00 AM' : (hour - 12) + ":00 PM";
    };
    Book_appointmentPage.prototype.arrayOne = function (num) {
        return Array(num);
    };
    Book_appointmentPage.prototype.checkDisabledTime = function (num) {
        var sd = parseInt(this.service_date.split('-').pop());
        return (sd == new Date().getDate() && new Date().getHours() >= (1 + num)) ? 'true' : 'false';
    };
    Book_appointmentPage.prototype.setAddress = function () {
        var _this = this;
        var obj = this.address.find(function (elem) { return elem.address_type == _this.select_address_type; });
        this.select_address = obj.address;
    };
    Book_appointmentPage.prototype.book = function () {
        var _this = this;
        var d = new Date();
        var qdate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
        var nd = new Date(this.service_date);
        if (nd.getTime() < new Date().getTime()) {
            alert('Service Schedule Time should be greater than current time.');
            return false;
        }
        var ssdt = this.datepipe.transform(nd, 'y-MM-d HH:mm:ss');
        var putdata = { status: 'Scheduled', quotation_approved: 'Y', quotation_approved_date: qdate, service_address: this.select_address, service_schedule: ssdt };
        this.showLoader = true;
        //hitting api
        this.showLoader = true;
        this.http.put(__WEBPACK_IMPORTED_MODULE_3__app_apiconfig__["a" /* APIURL */] + 'orders/' + this.navparams.get('order_id') + '?access-token=' + this.user.token, putdata)
            .subscribe({
            next: function (response) {
                _this.showLoader = false;
                _this.navCtrl.getPrevious().data.popped = 1;
                _this.navCtrl.pop();
            },
            error: function (err) {
                _this.showLoader = false;
                console.log(err);
            }
        });
    };
    Book_appointmentPage.prototype.onImageLoad = function (e) {
        e.classList.add('visible');
        e.classList.remove('invisible');
    };
    Book_appointmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-book_appointment',template:/*ion-inline-start:"G:\ET\cw-everything-customer\src\pages\book_appointment\book_appointment.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{\'book_an_apointment\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n\n\n    <ion-list no-lines>\n\n        <ion-item (click)="plumber_profile()">\n\n            <div class="img_box center_img" item-start>\n\n                <img src="{{details.upload_photo}}" class="invisible crop_img" (load)="onImageLoad($event.target)">\n\n            </div>\n\n            <h2 class="d-flex"><span>{{details.shop_name ? details.shop_name : details.name}}</span>\n\n                <ion-badge class="end">{{details.rating}} <ion-icon class="material-icons">star</ion-icon>\n\n                </ion-badge>\n\n            </h2>\n\n            <!-- <h3>Plumber</h3> -->\n\n            <p class="d-flex">{{details.subcategory}}<!-- <span class="end">$ 9.50 per Hour</span> --></p>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n    <div *ngIf="showLoader" class="loader-bg">\n\n        <ion-spinner class="spinner" color="light"></ion-spinner>\n\n    </div> \n\n    <ion-list no-lines class="select_address">\n\n        <h2 class="d-flex">{{\'select_address\' | translate}}</h2>\n\n        <ion-item>\n\n            <ion-label>Select Address</ion-label>\n\n            <ion-select (ionChange)="setAddress()" [(ngModel)]="select_address_type" placeholder="Select Address">\n\n                <ion-option *ngFor="let item of address" value="{{item.address_type}}">{{item.address_type}}</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <p>{{select_address}}</p>\n\n    </ion-list>\n\n\n\n    <ion-list no-lines>\n\n        <h2 class="d-flex">{{\'available_dates\' | translate}} <!-- <span class="end">{{date | date:\'MMM yyyy\'}}</span> --></h2>\n\n        <!-- <ion-scroll scrollX="true" radio-group [(ngModel)]="service_date">\n\n            <ion-item *ngFor="let item of arrayOne(7); let i = index;">\n\n                <ion-label>\n\n                    <p>{{getDate(i) | date:\'EEE\'}}</p>\n\n                    <h3>{{getDate(i) | date:\'dd\'}}</h3>\n\n                </ion-label>\n\n                <ion-radio value="{{getDate(i) | date:\'yyyy-MM-dd\'}}"></ion-radio>\n\n            </ion-item>\n\n        </ion-scroll> -->\n\n        <ion-item>\n\n            <ion-input type="text" readonly (click)="openDatePicker()" [(ngModel)]="service_date"></ion-input>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n   <!--  <ion-list no-lines class="time">\n\n        <h2 class="d-flex">{{\'available_time\' | translate}}</h2>\n\n        <div class="radio_group" radio-group [(ngModel)]="service_time">\n\n            <ion-item>\n\n                <ion-label>\n\n                    <h3>Now</h3>\n\n                </ion-label>\n\n                <ion-radio value="now"></ion-radio>\n\n            </ion-item>\n\n            <ion-item *ngFor="let item of arrayOne(24); let i = index;">\n\n                <ion-label>\n\n                    <h3>{{getHour(i)}}</h3>\n\n                </ion-label>\n\n                <ion-radio disabled="{{checkDisabledTime(i)}}" value="{{1+i}}"></ion-radio>\n\n            </ion-item>\n\n        </div>\n\n    </ion-list> -->\n\n</ion-content>\n\n<ion-footer no-border>\n\n    <button ion-button full class="btn" (click)="book()"> {{\'confirm\' | translate}}</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"G:\ET\cw-everything-customer\src\pages\book_appointment\book_appointment.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_date_picker__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], Book_appointmentPage);
    return Book_appointmentPage;
}());

//# sourceMappingURL=book_appointment.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderRatingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_apiconfig__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderRatingPage = /** @class */ (function () {
    function OrderRatingPage(navCtrl, toastController, http, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.http = http;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.ratingValue = 3;
        this.comment = '';
        this.showLoader = false;
    }
    OrderRatingPage.prototype.ionViewDidLoad = function () {
    };
    OrderRatingPage.prototype.logRatingChange = function (e) {
        this.ratingValue = e;
    };
    OrderRatingPage.prototype.saveRating = function () {
        var _this = this;
        this.showLoader = true;
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_apiconfig__["a" /* APIURL */] + "reviews?access-token=" + this.navParams.get('token'), { rating: this.ratingValue, order_id: this.navParams.get('order_id'), comment: this.comment })
            .subscribe({
            next: function (response) {
                _this.showLoader = false;
                _this.toastController.create({
                    message: 'Thank you for your feedback.',
                    duration: 3000,
                    cssClass: 'toast-success',
                    position: 'top'
                }).present();
                setTimeout(function () {
                    _this.dismiss();
                }, 2000);
            },
            error: function (err) {
                _this.showLoader = false;
            }
        });
    };
    OrderRatingPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    OrderRatingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order-rating',template:/*ion-inline-start:"G:\ET\cw-everything-customer\src\pages\order-rating\order-rating.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n	    <ion-title>\n\n	      Rating\n\n	    </ion-title>\n\n	    <ion-buttons start>\n\n	      <button ion-button (click)="dismiss()">\n\n	        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n	        <ion-icon style="zoom:1.5; margin-top: -5px" color="light" name="md-close-circle" showWhen="android, windows"></ion-icon>\n\n	      </button>\n\n	    </ion-buttons>\n\n	</ion-toolbar>\n\n</ion-header>\n\n<ion-content padding class="bg-color">\n\n    <div *ngIf="showLoader" class="loader-bg">\n\n        <ion-spinner class="spinner" color="light"></ion-spinner>\n\n    </div>\n\n    <div class="form">\n\n    	<ionic3-star-rating\n\n	        activeIcon = "ios-star"\n\n	        defaultIcon = "ios-star-outline"\n\n	        activeColor = "#13DE81" \n\n	        defaultColor = "#aaaaaa"\n\n	        readonly="false"\n\n	        rating="{{ratingValue}}"\n\n	        fontSize = "48px"\n\n	        (ratingChanged)="logRatingChange($event)">\n\n	    </ionic3-star-rating>\n\n		<ion-list>\n\n            <ion-item>\n\n                <ion-label floating>Add Review</ion-label>\n\n                <ion-textarea rows="5" [(ngModel)]="comment"></ion-textarea>\n\n            </ion-item>\n\n            <p style="color:white; letter-spacing: 1px">No abusive words are allowed and will not be tolerated as this is against company policy. It may also result in account ban!</p>\n\n            <br/>\n\n            <button large block ion-button (click)="saveRating()">SUBMIT</button>    			\n\n        </ion-list> \n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\ET\cw-everything-customer\src\pages\order-rating\order-rating.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], OrderRatingPage);
    return OrderRatingPage;
}());

//# sourceMappingURL=order-rating.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoverPage = /** @class */ (function () {
    function PopoverPage(navCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.filter = '';
        this.filter = navParams.get('filter');
    }
    PopoverPage.prototype.handleInput = function () {
        var _this = this;
        if (this.filter != '') {
            setTimeout(function () { return _this.viewCtrl.dismiss({ value: _this.filter }); }, 500);
        }
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-popover',template:/*ion-inline-start:"G:\ET\cw-everything-customer\src\pages\popover\popover.html"*/'<ion-list radio-group [(ngModel)]="filter">\n\n  <ion-list-header>\n\n    FILTER BY STATUS\n\n  </ion-list-header>\n\n\n\n  <ion-item>\n\n    <ion-label>Awaiting Quote</ion-label>\n\n    <ion-radio (click)="handleInput(\'Pending\')" value="Pending"></ion-radio>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Quoted</ion-label>\n\n    <ion-radio (click)="handleInput(\'Quoted\')" value="Quoted"></ion-radio>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Scheduled</ion-label>\n\n    <ion-radio (click)="handleInput(\'Scheduled\')" value="Scheduled"></ion-radio>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Cancelled</ion-label>\n\n    <ion-radio (click)="handleInput(\'Cancelled\')" value="Cancelled"></ion-radio>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Rejected</ion-label>\n\n    <ion-radio (click)="handleInput(\'Rejected\')" value="Rejected"></ion-radio>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Complete</ion-label>\n\n    <ion-radio (click)="handleInput(\'Complete\')" value="Complete"></ion-radio>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>All</ion-label>\n\n    <ion-radio (click)="handleInput(\'All\')" value="All"></ion-radio>\n\n  </ion-item>\n\n</ion-list>\n\n'/*ion-inline-end:"G:\ET\cw-everything-customer\src\pages\popover\popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_category__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_apiconfig__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_location_accuracy__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_diagnostic__ = __webpack_require__(268);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = /** @class */ (function () {
    function HomePage(locationAccuracy, diagnostic, platform, navCtrl, modalCtrl, geolocation, http, storage) {
        var _this = this;
        this.locationAccuracy = locationAccuracy;
        this.diagnostic = diagnostic;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.geolocation = geolocation;
        this.http = http;
        this.storage = storage;
        this.user = {};
        this.location = "Loading Location...";
        this.categories = [];
        this.url = __WEBPACK_IMPORTED_MODULE_5__app_apiconfig__["a" /* APIURL */];
        this.showLoader = true;
        this.imageAttributes = [];
        this.image_url = __WEBPACK_IMPORTED_MODULE_5__app_apiconfig__["b" /* IMAGE_URL */];
        this.popup_image = null;
        this.banner_images = [];
        this.hidePop = true;
        this.popHeading = '';
        this.imageAttributes.push({
            element: 'class',
            value: 'crop_img'
        });
        platform.ready().then(function () {
            if (platform.is('cordova')) {
                var that = _this;
                diagnostic.isLocationEnabled()
                    .then(function (available) {
                    if (!available) {
                        locationAccuracy.request(locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)
                            .then(function (res) {
                            that.getLocation();
                        }, function (error) { return alert('You will not be able to find service providers without enabling location.'); });
                    }
                    else {
                        that.getLocation();
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }
            else {
                _this.getLocation();
            }
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('cuserinfo').then(function (result) {
            _this.user = JSON.parse(result);
            _this.loadBanners();
            _this.loadPopUp();
            _this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_apiconfig__["a" /* APIURL */] + 'categories?access-token=' + _this.user.token).subscribe({
                next: function (response) {
                    _this.showLoader = false;
                    _this.categories = response;
                },
                error: function (err) {
                    console.error(err);
                }
            });
        });
    };
    HomePage.prototype.loadBanners = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_apiconfig__["a" /* APIURL */] + 'banners?access-token=' + this.user.token).subscribe({
            next: function (response) {
                response.forEach(function (element) {
                    element['image'] = _this.image_url + element['image'];
                });
                console.log('banners response is ', response);
                _this.banner_images = response;
            },
            error: function (err) {
                console.error(err);
            }
        });
    };
    HomePage.prototype.loadPopUp = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_apiconfig__["a" /* APIURL */] + 'popups?access-token=' + this.user.token).subscribe({
            next: function (response) {
                if (response && response[0] && response[0].image) {
                    setTimeout(function () {
                        _this.hidePop = false;
                        _this.popup_image = _this.image_url + response[0]['image'];
                        _this.popHeading = response[0]['name'];
                    }, 10000);
                    // let profileModal = this.modalCtrl.create(ImagePopupPage, { popup_image: this.image_url + response[0]['image'] });
                    // profileModal.onDidDismiss(data => {
                    // 	console.log(data);
                    // });
                    // profileModal.present();
                }
                else {
                    _this.hidePop = true;
                }
                console.log('popup response is ', response);
            },
            error: function (err) {
                console.error(err);
            }
        });
    };
    HomePage.prototype.getLocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (res) {
            //let location='lat '+res.coords.latitude+' lang '+res.coords.longitude;
            _this.http.get('https://us1.locationiq.com/v1/reverse.php?key=pk.1a8afa07fcfe194b039e91ef1575087c&lat=' + res.coords.latitude + '&lon=' + res.coords.longitude + '&format=json').subscribe({
                next: function (data) {
                    var formatted = data.address;
                    var city = '';
                    if (formatted.suburb)
                        city = formatted.suburb + ' - ' + formatted.county;
                    else
                        city = formatted.county;
                    _this.location = city;
                },
                error: function (err) {
                    console.error(err);
                }
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    HomePage.prototype.getItems = function (e) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__category_category__["a" /* CategoryPage */], { q: e.target.value, category: 'Searching...' });
    };
    HomePage.prototype.category = function (id, cat) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__category_category__["a" /* CategoryPage */], { id: id, category: cat });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"G:\ET\cw-everything-customer\src\pages\home\home.html"*/'<ion-header class="bg-img">\n\n    <ion-navbar>\n\n        <ion-title>\n\n            <ion-icon class="material-icons">location_on</ion-icon>\n\n            <span>{{location}}</span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n    <div class="text_box">\n\n        <h2>Hey {{user.name}},</h2>\n\n        <ion-row>\n\n            <ion-slides>\n\n                <ion-slide *ngFor="let banner of banner_images">\n\n                    <img [src]="banner.image" width="380" height="270"/>\n\n                </ion-slide>\n\n            </ion-slides>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col class="search_icon">\n\n                <ion-icon class="material-icons">search</ion-icon>\n\n            </ion-col>\n\n            <ion-col col>\n\n                <ion-searchbar (search)="getItems($event)" placeholder="{{\'search_placeholder\' | translate}}"></ion-searchbar>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n    <div *ngIf="showLoader" class="loader-bg">\n\n        <ion-spinner class="spinner" color="light"></ion-spinner>\n\n    </div>\n\n    <div class="categores_container">\n\n        <ion-row>\n\n            <ion-col *ngFor="let data of categories" col-6 (click)="category(data.id, data.name)">\n\n                <div class="categore d-flex">\n\n                    <div class="img_box center_img">\n\n                        <!-- <img src="{{\'https://everythingservices.in/admin14\'+data.image}}" class="crop_img"> -->\n\n                        <img-loader [src]="\'https://everythingservices.in/admin14\'+data.image" useImg [imgAttributes]="imageAttributes"></img-loader>\n\n                    </div>\n\n                    <h2 text-uppercase>{{data.name}}</h2>\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n</ion-content>\n\n<div *ngIf="!hidePop" class="modal-pop">\n\n    <div class="modal-inner">\n\n        <div class="modal-header">\n\n            <!-- <h2>{{popHeading}}</h2> -->\n\n            <button class="close-btn" (click)="hidePop=true"> &#10006;</button>\n\n        </div>\n\n        <div class="modal-body">\n\n            <!-- <p>\n\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur unde culpa dolorum harum, maxime\n\n                voluptatibus illo ipsam possimus vitae corrupti quisquam laboriosam aliquid nemo facere velit\n\n                blanditiis odio iusto fuga!\n\n            </p> -->\n\n            <img [src]="popup_image" [title]="popHeading" [alt]="popHeading" />\n\n        </div>\n\n    </div>\n\n</div>'/*ion-inline-end:"G:\ET\cw-everything-customer\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_native_location_accuracy__["a" /* LocationAccuracy */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_diagnostic__["a" /* Diagnostic */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_apiconfig__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_of_plumber_list_of_plumber__ = __webpack_require__(266);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CategoryPage = /** @class */ (function () {
    function CategoryPage(navCtrl, storage, http, navparams) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.http = http;
        this.navparams = navparams;
        this.user = {};
        this.subcat = [];
        this.category = "";
        this.showLoader = false;
    }
    CategoryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var cat_id = this.navparams.get('id');
        this.category = this.navparams.get('category');
        this.storage.get('cuserinfo').then(function (result) {
            _this.user = JSON.parse(result);
            _this.showLoader = true;
            if (_this.navparams.get('q')) {
                _this.getItems(_this.navparams.get('q'));
            }
            else {
                _this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_apiconfig__["a" /* APIURL */] + 'subcategories?where[category_id]=' + cat_id + '&access-token=' + _this.user.token).subscribe({
                    next: function (response) {
                        _this.showLoader = false;
                        _this.subcat = response;
                    },
                    error: function (err) {
                        console.error(err);
                    }
                });
            }
        });
    };
    CategoryPage.prototype.getItems = function (term) {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_apiconfig__["a" /* APIURL */] + 'subcategories?where[search]=' + term + '&access-token=' + this.user.token).subscribe({
            next: function (response) {
                _this.category = term;
                _this.showLoader = false;
                _this.subcat = response;
            },
            error: function (err) {
                _this.showLoader = false;
                console.error(err);
            }
        });
    };
    CategoryPage.prototype.list_of_plumber = function (id, subcat) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__list_of_plumber_list_of_plumber__["a" /* List_of_plumberPage */], { subcat: subcat, subcat_id: id });
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category',template:/*ion-inline-start:"G:\ET\cw-everything-customer\src\pages\category\category.html"*/'<ion-header class="bg-img">\n\n    <ion-navbar>\n\n        <ion-title></ion-title>\n\n    </ion-navbar>\n\n    <div class="text_box ">\n\n        <h1 text-center>{{category}}</h1>\n\n    </div>\n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n    <div *ngIf="showLoader" class="loader-bg">\n\n        <ion-spinner class="spinner" color="light"></ion-spinner>\n\n    </div>\n\n    <ion-list no-lines>\n\n        <ion-item *ngFor="let data of subcat" (click)="list_of_plumber(data.id, data.name)">\n\n            <h2 class="d-flex"><span>{{data.name}}</span>\n\n                <ion-icon class="material-icons end">keyboard_arrow_right</ion-icon>\n\n            </h2>\n\n            <p *ngIf="data.min_order_amt > 0">Minimum Order - ₹{{data.min_order_amt}}</p>\n\n            <p *ngIf="data.min_order_amt == 0 && data.visiting_charge > 0">Visiting Charge - ₹{{data.visiting_charge}}</p>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\ET\cw-everything-customer\src\pages\category\category.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List_of_plumberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_apiconfig__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__plumber_profile_plumber_profile__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var List_of_plumberPage = /** @class */ (function () {
    function List_of_plumberPage(navCtrl, geolocation, storage, http, navparams) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.storage = storage;
        this.http = http;
        this.navparams = navparams;
        this.subcategory = '';
        this.user = {};
        this.showLoader = true;
        this.providers = [];
        this.apiurl = __WEBPACK_IMPORTED_MODULE_3__app_apiconfig__["a" /* APIURL */];
    }
    List_of_plumberPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var subcat_id = this.navparams.get('subcat_id');
        this.subcategory = this.navparams.get('subcat');
        this.storage.get('cuserinfo').then(function (result) {
            _this.user = JSON.parse(result);
            var lat = 19.176667;
            var long = 73.04222;
            //getting co-ordinates
            if (window['cordova']) {
                _this.geolocation.getCurrentPosition().then(function (res) {
                    _this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_apiconfig__["a" /* APIURL */] + 'customers/providers?subcat_id=' + subcat_id + '&lat=' + res.coords.latitude + '&lng=' + res.coords.longitude + '&access-token=' + _this.user.token)
                        .subscribe({
                        next: function (response) {
                            _this.showLoader = false;
                            _this.providers = response;
                        },
                        error: function (err) {
                            console.error(err);
                        }
                    });
                });
            }
            else {
                _this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_apiconfig__["a" /* APIURL */] + 'customers/providers?subcat_id=' + subcat_id + '&lat=' + lat + '&lng=' + long + '&access-token=' + _this.user.token)
                    .subscribe({
                    next: function (response) {
                        _this.showLoader = false;
                        _this.providers = response;
                    },
                    error: function (err) {
                        console.error(err);
                    }
                });
            }
        });
    };
    List_of_plumberPage.prototype.plumber_profile = function (index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__plumber_profile_plumber_profile__["b" /* Plumber_profilePage */], { subcat_id: this.navparams.get('subcat_id'), obj: JSON.stringify(this.providers[index]) });
    };
    List_of_plumberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list_of_plumber',template:/*ion-inline-start:"G:\ET\cw-everything-customer\src\pages\list_of_plumber\list_of_plumber.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{subcategory}} <!-- <span class="end">Bhathroom fittings</span> --></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n    <div *ngIf="showLoader" class="loader-bg">\n\n        <ion-spinner class="spinner" color="light"></ion-spinner>\n\n    </div>\n\n    <ion-list no-lines>\n\n        <ion-item *ngFor="let data of providers; let i = index" (click)="plumber_profile(i)">\n\n            <div class="img_box center_img" item-start>\n\n                <img src="{{data.upload_photo ? data.upload_photo : \'assets/imgs/avatar.png\'}}" class="crop_img">\n\n            </div>\n\n            <h2 class="d-flex"><span>{{data.shop_name ? data.shop_name : data.name}}</span>\n\n                <ion-badge class="end">{{data.rating}} <ion-icon class="material-icons">star</ion-icon>\n\n                </ion-badge>\n\n            </h2>\n\n            <!-- <h3>Plumber</h3> -->\n\n            <p class="d-flex">{{data.distance}} km away <!-- <span class="end">$ 9.50 per Hour</span> --></p>\n\n        </ion-item>\n\n\n\n        <div *ngIf="providers.length == 0 && showLoader == false" class="emptydata" align="center">\n\n            <img src="assets/imgs/sad_smiley.png" style="max-height: 150px" />\n\n            <h4>Currently none of the service providers are available around you for this service.</h4>\n\n        </div>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\ET\cw-everything-customer\src\pages\list_of_plumber\list_of_plumber.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], List_of_plumberPage);
    return List_of_plumberPage;
}());

//# sourceMappingURL=list_of_plumber.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_apiconfig__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__my_profile_my_profile__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__faq_faq__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__signin_signin__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__my_addresses_my_addresses__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__order_hostory_order_hostory__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AccountPage = /** @class */ (function () {
    function AccountPage(navCtrl, socialSharing, alertCtrl, platform, http, storage, app) {
        this.navCtrl = navCtrl;
        this.socialSharing = socialSharing;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.http = http;
        this.storage = storage;
        this.app = app;
        this.online = false;
        this.user = {};
        this.showLoader = false;
        this.watch = null;
        this.profile_picture = '';
    }
    AccountPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('cuserinfo').then(function (result) {
            _this.user = JSON.parse(result);
            _this.profile_picture = __WEBPACK_IMPORTED_MODULE_4__app_apiconfig__["b" /* IMAGE_URL */] + _this.user['profile_picture'];
        });
    };
    AccountPage.prototype.my_addresses = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__my_addresses_my_addresses__["a" /* My_addressesPage */]);
    };
    AccountPage.prototype.my_profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__my_profile_my_profile__["a" /* My_profilePage */]);
    };
    AccountPage.prototype.my_order_history = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__order_hostory_order_hostory__["a" /* OrderHostoryPage */]);
    };
    AccountPage.prototype.contact = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__contact_contact__["a" /* ContactPage */]);
    };
    AccountPage.prototype.openPrivacy = function () {
        window.open("https://everythingservices.in/privacy", '_system', 'location=yes');
    };
    AccountPage.prototype.about = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__about_about__["a" /* AboutPage */]);
    };
    AccountPage.prototype.faq = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__faq_faq__["a" /* FaqPage */]);
    };
    AccountPage.prototype.share = function () {
        this.socialSharing.share("Gone are the days to ask people for numbers of service providers. This app covers it all. I love Everything Services. You must give it a try.", "", "", "https://play.google.com/store/apps/details?id=com.everything.services");
    };
    AccountPage.prototype.logout = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Logout',
            message: 'Are you sure you want to logout?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.showLoader = true;
                        _this.http.put(__WEBPACK_IMPORTED_MODULE_4__app_apiconfig__["a" /* APIURL */] + 'customers/' + _this.user.id + '?access-token=' + _this.user.token, { push_token: '' })
                            .subscribe({
                            next: function (response) {
                                _this.showLoader = false;
                                _this.storage.remove('cuserinfo');
                                _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_10__signin_signin__["a" /* SigninPage */]);
                            },
                            error: function (err) {
                                _this.showLoader = false;
                                _this.storage.remove('cuserinfo');
                                _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_10__signin_signin__["a" /* SigninPage */]);
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    AccountPage.prototype.remove = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Account Deletion!',
            message: 'Are you sure you want to premanently remove your account?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.showLoader = true;
                        _this.http.put(__WEBPACK_IMPORTED_MODULE_4__app_apiconfig__["a" /* APIURL */] + 'customers/' + _this.user.id + '?access-token=' + _this.user.token, { status: 0 })
                            .subscribe({
                            next: function (response) {
                                _this.showLoader = false;
                                _this.storage.remove('cuserinfo');
                                _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_10__signin_signin__["a" /* SigninPage */]);
                            },
                            error: function (err) {
                                _this.showLoader = false;
                                _this.storage.remove('cuserinfo');
                                _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_10__signin_signin__["a" /* SigninPage */]);
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"G:\ET\cw-everything-customer\src\pages\account\account.html"*/'<ion-header class="bg-img">\n\n    <ion-navbar>\n\n        <ion-title>\n\n            {{\'account\' | translate}}\n\n        </ion-title>\n\n    </ion-navbar>\n\n    <div class="profile d-flex">\n\n        <div class="profile_img center_img">\n\n            <img onload="this.classList.remove(\'loading\')" onerror="this.onerror=null;this.src=\'assets/imgs/avatar.png\';" src="{{ profile_picture != \'\' ? profile_picture : \'assets/imgs/avatar.png\'}}" class="crop_img loading">\n\n        </div>\n\n        <div class="profile_details">\n\n            <h2>{{user.name}}</h2>\n\n            <p class="d-flex">+91 {{user.contact}}</p>\n\n        </div>\n\n    </div>\n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n    <div *ngIf="showLoader" class="loader-bg">\n\n        <ion-spinner class="spinner" color="light"></ion-spinner>\n\n    </div>    \n\n    <ion-list no-lines>\n\n        <ion-item (click)="my_profile()">\n\n            <ion-icon class="material-icons" item-start>account_circle</ion-icon>\n\n            <h2>My Profile</h2>\n\n        </ion-item>\n\n        <ion-item (click)="my_order_history()">\n\n            <ion-icon class="material-icons" item-start>shopping_cart</ion-icon>\n\n            <h2>My Order History</h2>\n\n        </ion-item>\n\n        <ion-item (click)="my_addresses()">\n\n            <ion-icon class="material-icons" item-start>location_on</ion-icon>\n\n            <h2>{{\'my_address\' | translate}}</h2>\n\n        </ion-item>\n\n        <ion-item (click)="about()">\n\n            <ion-icon class="material-icons" item-start>assignment_ind</ion-icon>\n\n            <h2>About Us</h2>\n\n        </ion-item>\n\n        <ion-item (click)="contact()">\n\n            <ion-icon class="material-icons" item-start>email</ion-icon>\n\n            <h2>Contact Us</h2>\n\n        </ion-item>\n\n        <ion-item (click)="openPrivacy()">\n\n            <ion-icon class="material-icons" item-start>lock</ion-icon>\n\n            <h2>Privacy Policy</h2>\n\n        </ion-item>\n\n        <ion-item (click)="share()">\n\n            <ion-icon class="material-icons" item-start>share</ion-icon>\n\n            <h2>Share App</h2>\n\n        </ion-item>\n\n        <ion-item (click)="logout()">\n\n            <ion-icon class="material-icons" item-start>logout</ion-icon>\n\n            <h2>Logout</h2>\n\n        </ion-item>\n\n        <ion-item (click)="remove()">\n\n            <ion-icon class="material-icons" style="color:red" item-start>cancel</ion-icon>\n\n            <h2><font color="red">Remove Account</font></h2>\n\n        </ion-item>\n\n\n\n    </ion-list>\n\n    <!-- <p align="center" style="color: white">Powered by <a href="#" onclick="window.open(\'https://jacwiz.com\', \'_system\', \'location=yes\');">Jacwiz Software Solutions</a></p> -->\n\n</ion-content>\n\n'/*ion-inline-end:"G:\ET\cw-everything-customer\src\pages\account\account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_apiconfig__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactPage = /** @class */ (function () {
    function ContactPage(storage, http, formBuilder, navCtrl, toastController) {
        this.storage = storage;
        this.http = http;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.user = {};
        this.submitAttempt = false;
        this.showLoader = false;
    }
    ContactPage.prototype.ngOnInit = function () {
        this.buildForm();
    };
    ContactPage.prototype.buildForm = function () {
        this.contactForm = this.formBuilder.group({
            email: [this.user.email],
            message: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(25)
                ])],
        });
    };
    ContactPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.storage.get('cuserinfo').then(function (result) {
            _this.user = JSON.parse(result);
        });
    };
    ContactPage.prototype.sendMsg = function () {
        var _this = this;
        this.submitAttempt = true;
        if (!this.contactForm.get('message').valid) {
            var toast = this.toastController.create({
                message: 'Please enter minimum 25 character message.',
                duration: 3000,
                cssClass: 'toast-danger',
                position: 'top'
            });
            toast.present();
            return false;
        }
        if (this.contactForm.valid) {
            this.showLoader = true;
            var data = this.contactForm.value;
            this.http.post(__WEBPACK_IMPORTED_MODULE_5__app_apiconfig__["a" /* APIURL */] + 'customers/enquiry?access-token=' + this.user.token, data)
                .subscribe({
                next: function (data) {
                    _this.submitAttempt = false;
                    _this.showLoader = false;
                    _this.contactForm.get('message').setValue('');
                    var toast = _this.toastController.create({
                        message: 'Message delivered successfully.',
                        duration: 5000,
                        cssClass: 'toast-success',
                        position: 'top'
                    });
                    toast.present();
                },
                error: function (error) {
                    _this.submitAttempt = false;
                    _this.showLoader = false;
                    var toast = _this.toastController.create({
                        message: error.error.msg,
                        duration: 3000,
                        cssClass: 'toast-danger',
                        position: 'top'
                    });
                    toast.present();
                }
            });
        }
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"G:\ET\cw-everything-customer\src\pages\contact\contact.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title></ion-title>\n\n    </ion-navbar>\n\n    <div class="text_box">\n\n        <h2>{{\'contact_us\' | translate}}</h2>\n\n        <p>{{\'contact_us_text\' | translate}}</p>\n\n    </div>\n\n</ion-header>\n\n\n\n<ion-content class="bg-img">\n\n    <div *ngIf="showLoader" class="loader-bg">\n\n        <ion-spinner class="spinner" color="light"></ion-spinner>\n\n    </div>\n\n    <div class="banner form">\n\n        <ion-list no-lines>\n\n            <ion-item>\n\n                <ion-icon class="material-icons" item-start>phone</ion-icon>\n\n                <p>{{\'call_us\' | translate}}</p>\n\n                <h2><a href="tel:+91 864 209 3333">+91 864 209 3333</a></h2>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon class="material-icons" item-start>email</ion-icon>\n\n                <p>{{\'mail_us\' | translate}}</p>\n\n                <h2><a href="mailto:support@everythingservices.in">support@everythingservices.in</a></h2>\n\n            </ion-item>\n\n        </ion-list>\n\n    </div>\n\n    <div class="form">\n\n        <h1>{{\'or_write_us\' | translate}}</h1>\n\n        <form [formGroup]="contactForm">\n\n            <ion-list no-lines>\n\n                <ion-item>\n\n                    <ion-icon class="material-icons" item-start>email</ion-icon>\n\n                    <ion-label floating>{{\'email_address\' | translate}}</ion-label>\n\n                    <ion-input type="text" formControlName="email" readonly value="{{user.email}}"></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-icon class="material-icons" item-start>create</ion-icon>\n\n                    <ion-label floating>{{\'write_your_message\' | translate}}</ion-label>\n\n                    <ion-textarea formControlName="message" autosize rows="6"></ion-textarea>\n\n                </ion-item>\n\n            </ion-list>\n\n        </form>    \n\n    </div>\n\n</ion-content>\n\n<ion-footer no-border>\n\n    <button (click)="sendMsg()" ion-button full no-margin class="btn"> {{\'submit\' | translate}}</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"G:\ET\cw-everything-customer\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"G:\ET\cw-everything-customer\src\pages\about\about.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            {{\'about_us\' | translate}}\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-img">\n\n    <div class="banner">\n\n        <img src="assets/imgs/logo_new.png">\n\n    </div>\n\n    <div class="text_box">\n\n        <h2 style="color: orange">The Biggest Service Provider Company in India</h2>\n\n        <h6 style="color: #26e18b"><a href="#" onclick="window.open(\'https://everythingservices.in\', \'_system\', \'location=yes\');">EVERYTHING SERVICES PVT. LTD.</a> PROMISE TO CUSTOMER TODAY.</h6>\n\n        <p>\n\n            Since, We have a many years business experience in Information Technology about 20 years, Marketing Management about 25 years and Home Service Products about 10 years.\n\n        </p>\n\n        <p>\n\n            Therefore, we want to expand our business in India and in the world. We wants to serve service at home whatever you want, This mission build up, “STAY HOME STAY SAFE” And providing you home services by <b><a href="#" onclick="window.open(\'https://everythingservices.in\', \'_system\', \'location=yes\');">EVERYTHING SERVICES PVT. LTD.</a> is providing you budget in your with unlimited services, you will receive this great opportunity and we are promising that we take all responsibility . We want to save time save money and save efforts want to run the efficient service in remote, Local and Metropolitian Cities.</b>\n\n        </p>\n\n        <p>\n\n            We doesn\'t slow down at any cost. We are fully prepared with all the options and information that you need to choose the right SERVICES PROVIDED, while staying safe inside your present home. Together, we will get through this Happy and safe searching !!!!!\n\n        </p>\n\n        <p>\n\n            We offers our best Services – some Category and unlimited sub Category like - Super Grocery and Food Services, Fast Food and Restaurants, Medical Care Services, Home Care Appliances, Fashion, Marriage, Personal Services, Mechanic and Skill Services, Auto Rikshaw – Taxi and Services, Tours and Travels, Education, Hobby, Safety, Mobile and Electronic, Finance, Emergency, Covid – 19 Safety Product, Sweet and Farsan Namkeen, Advertisement, Pest Control, Religious Scholar.\n\n        </p>\n\n        \n\n        <p>From today our services to you is the main motive of our company</p>\n\n        \n\n        <p><b>Target and motive of our company</b><br/> Our target and are simply wants customer satisfaction. Our target are justified, that you get the right services and at the right time. And our motive are to become a leading service provider in India. Which we are working hard for it.And becoming leading runners business in India and in the world in the future. Our motive is that all Skilled - Unskilled and Professional and Unprofessional all together. We will all covered in one Platform i.e Online Services</p>\n\n        <p>We want to thank all our fantastic supporters for your kindness and generosity and reach out to our partners and local organizations that work with our people.</p>\n\n        <p>We wish all your best Collaboration and Receiving Service from our Company</p>\n\n        <p>&nbsp;</p>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\ET\cw-everything-customer\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FaqPage = /** @class */ (function () {
    function FaqPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FaqPage.prototype.reset = function () {
        this.faqExpand1 = false;
        this.faqExpand2 = false;
        this.faqExpand3 = false;
        this.faqExpand4 = false;
        this.faqExpand5 = false;
        this.faqExpand6 = false;
        this.faqExpand7 = false;
        this.faqExpand8 = false;
    };
    FaqPage.prototype.faqExpandToggle1 = function () {
        this.reset();
        this.faqExpand1 = !this.faqExpand1;
    };
    FaqPage.prototype.faqExpandToggle2 = function () {
        this.reset();
        this.faqExpand2 = !this.faqExpand2;
    };
    FaqPage.prototype.faqExpandToggle3 = function () {
        this.reset();
        this.faqExpand3 = !this.faqExpand3;
    };
    FaqPage.prototype.faqExpandToggle4 = function () {
        this.reset();
        this.faqExpand4 = !this.faqExpand4;
    };
    FaqPage.prototype.faqExpandToggle5 = function () {
        this.reset();
        this.faqExpand5 = !this.faqExpand5;
    };
    FaqPage.prototype.faqExpandToggle6 = function () {
        this.reset();
        this.faqExpand6 = !this.faqExpand6;
    };
    FaqPage.prototype.faqExpandToggle7 = function () {
        this.reset();
        this.faqExpand7 = !this.faqExpand7;
    };
    FaqPage.prototype.faqExpandToggle8 = function () {
        this.reset();
        this.faqExpand8 = !this.faqExpand8;
    };
    FaqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-faq',template:/*ion-inline-start:"G:\ET\cw-everything-customer\src\pages\faq\faq.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{\'faqs_terms\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-img">\n\n    <ion-list no-lines>\n\n        <ion-item [ngClass]="faqExpand1 ? \'active\' : \'\' " (click)="faqExpandToggle1()">\n\n            <h2 class="d-flex">\n\n                About Services\n\n                <ion-icon class="material-icons end">keyboard_arrow_down</ion-icon>\n\n            </h2>\n\n            <p>\n\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n\n            </p>\n\n        </ion-item>\n\n        <ion-item [ngClass]="faqExpand2 ? \'active\' : \'\' " (click)="faqExpandToggle2()">\n\n            <h2 class="d-flex">\n\n                About Services\n\n                <ion-icon class="material-icons end">keyboard_arrow_down</ion-icon>\n\n            </h2>\n\n            <p>\n\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n\n            </p>\n\n        </ion-item>\n\n        <ion-item [ngClass]="faqExpand3 ? \'active\' : \'\' " (click)="faqExpandToggle3()">\n\n            <h2 class="d-flex">\n\n                About Services\n\n                <ion-icon class="material-icons end">keyboard_arrow_down</ion-icon>\n\n            </h2>\n\n            <p>\n\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n\n            </p>\n\n        </ion-item>\n\n        <ion-item [ngClass]="faqExpand4 ? \'active\' : \'\' " (click)="faqExpandToggle4()">\n\n            <h2 class="d-flex">\n\n                About Services\n\n                <ion-icon class="material-icons end">keyboard_arrow_down</ion-icon>\n\n            </h2>\n\n            <p>\n\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n\n            </p>\n\n        </ion-item>\n\n        <ion-item [ngClass]="faqExpand5 ? \'active\' : \'\' " (click)="faqExpandToggle5()">\n\n            <h2 class="d-flex">\n\n                About Services\n\n                <ion-icon class="material-icons end">keyboard_arrow_down</ion-icon>\n\n            </h2>\n\n            <p>\n\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n\n            </p>\n\n        </ion-item>\n\n        <ion-item [ngClass]="faqExpand6 ? \'active\' : \'\' " (click)="faqExpandToggle6()">\n\n            <h2 class="d-flex">\n\n                About Services\n\n                <ion-icon class="material-icons end">keyboard_arrow_down</ion-icon>\n\n            </h2>\n\n            <p>\n\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n\n            </p>\n\n        </ion-item>\n\n        <ion-item [ngClass]="faqExpand7 ? \'active\' : \'\' " (click)="faqExpandToggle7()">\n\n            <h2 class="d-flex">\n\n                About Services\n\n                <ion-icon class="material-icons end">keyboard_arrow_down</ion-icon>\n\n            </h2>\n\n            <p>\n\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n\n            </p>\n\n        </ion-item>\n\n        <ion-item [ngClass]="faqExpand8 ? \'active\' : \'\' " (click)="faqExpandToggle8()">\n\n            <h2 class="d-flex">\n\n                About Services\n\n                <ion-icon class="material-icons end">keyboard_arrow_down</ion-icon>\n\n            </h2>\n\n            <p>\n\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n\n            </p>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\ET\cw-everything-customer\src\pages\faq\faq.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], FaqPage);
    return FaqPage;
}());

//# sourceMappingURL=faq.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_apiconfig__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddAddressPage = /** @class */ (function () {
    function AddAddressPage(navCtrl, alertCtrl, toastController, http, storage, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastController = toastController;
        this.http = http;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.title = "Modify Address";
        this.address_type = '';
        this.address = '';
        this.submitAttempt = false;
        this.showLoader = false;
        this.user = {};
        this.canDelete = false;
    }
    AddAddressPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.navParams.get('obj')) {
            var obj = this.navParams.get('obj');
            this.address_type = obj.address_type;
            this.address = obj.address;
        }
        else {
            this.title = 'Add Address';
        }
        this.storage.get('cuserinfo').then(function (result) {
            _this.user = JSON.parse(result);
        });
        this.canDelete = this.navParams.get('canDelete');
    };
    AddAddressPage.prototype.save = function () {
        var _this = this;
        this.submitAttempt = true;
        if (!this.address_type || !this.address) {
            return false;
        }
        this.showLoader = true;
        var postdata = { address_type: this.address_type, address: this.address, customer_id: this.user.id };
        if (this.navParams.get('obj')) {
            postdata['id'] = this.navParams.get('obj').id;
        }
        this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_apiconfig__["a" /* APIURL */] + 'customers/save-address?access-token=' + this.user.token, postdata)
            .subscribe({
            next: function (response) {
                _this.showLoader = false;
                if (response.error) {
                    var toast = _this.toastController.create({
                        message: response.reason,
                        duration: 4000,
                        cssClass: 'toast-danger',
                        position: 'bottom'
                    });
                    toast.present();
                    return false;
                }
                else {
                    var toast = _this.toastController.create({
                        message: 'Address saved successfully.',
                        duration: 4000,
                        cssClass: 'toast-success',
                        position: 'bottom'
                    });
                    toast.present();
                    setTimeout(function () {
                        _this.viewCtrl.dismiss({ reload: true });
                    }, 2000);
                }
            },
            error: function (err) {
                _this.showLoader = false;
                var toast = _this.toastController.create({
                    message: err.message,
                    duration: 4000,
                    cssClass: 'toast-danger',
                    position: 'bottom'
                });
                toast.present();
            }
        });
    };
    AddAddressPage.prototype.remove = function () {
        var _this = this;
        console.log(1);
        var alert = this.alertCtrl.create({
            title: 'Confirm Removal',
            message: 'Are you sure you want to remove this address?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { }
                },
                {
                    text: 'Remove',
                    handler: function () {
                        _this.showLoader = true;
                        _this.http.delete(__WEBPACK_IMPORTED_MODULE_2__app_apiconfig__["a" /* APIURL */] + 'customers/del-address?access-token=' + _this.user.token + '&id=' + _this.navParams.get('obj').id)
                            .subscribe({
                            next: function (response) {
                                _this.showLoader = false;
                                var toast = _this.toastController.create({
                                    message: 'Address removed successfully.',
                                    duration: 4000,
                                    cssClass: 'toast-success',
                                    position: 'bottom'
                                });
                                toast.present();
                                setTimeout(function () {
                                    _this.viewCtrl.dismiss({ reload: true });
                                }, 2000);
                            },
                            error: function (err) {
                                _this.showLoader = false;
                                var toast = _this.toastController.create({
                                    message: err.message,
                                    duration: 4000,
                                    cssClass: 'toast-danger',
                                    position: 'bottom'
                                });
                                toast.present();
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    AddAddressPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AddAddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-address',template:/*ion-inline-start:"G:\ET\cw-everything-customer\src\pages\add-address\add-address.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n	    <ion-title>\n\n	      {{title}}\n\n	    </ion-title>\n\n	    <ion-buttons start>\n\n	      <button ion-button (click)="dismiss()">\n\n	        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n	        <ion-icon style="zoom:1.5; margin-top: -5px" color="light" name="md-close-circle" showWhen="android, windows"></ion-icon>\n\n	      </button>\n\n	    </ion-buttons>\n\n	</ion-toolbar>\n\n</ion-header>\n\n<ion-content padding class="bg-color">\n\n    <div *ngIf="showLoader" class="loader-bg">\n\n        <ion-spinner class="spinner" color="light"></ion-spinner>\n\n    </div>\n\n    <div class="form">\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-label floating>Address Type</ion-label>\n\n                <ion-input type="text" class="floating-with-placeholder" placeholder="Home, Office, etc." [(ngModel)]="address_type"></ion-input>\n\n            </ion-item> \n\n            <p class=\'error\' *ngIf="(!address_type.trim() || address_type.length < 4) && submitAttempt">Please enter valid address type. Minimum 4 characters required.</p>\n\n\n\n            <ion-item>\n\n                <ion-label floating>Address</ion-label>\n\n                <ion-textarea rows="5" [(ngModel)]="address"></ion-textarea>\n\n            </ion-item>\n\n            <p class=\'error\' *ngIf="(!address.trim() || address.length < 8) && submitAttempt">Please enter valid address. Minimum 8 characters required.</p>\n\n\n\n            <ion-grid *ngIf="canDelete">\n\n  				<ion-row>\n\n    				<ion-col col-6>\n\n            			<button ion-button color="danger" (click)="remove()" outline>Remove Address</button>    \n\n            		</ion-col>\n\n            		<ion-col col-6>	\n\n            			<button block ion-button (click)="save()">SAVE</button>    \n\n            		</ion-col>\n\n            	</ion-row>\n\n            </ion-grid>\n\n\n\n            <button *ngIf="!canDelete" large block ion-button (click)="save()">SAVE</button>    			\n\n        </ion-list> \n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\ET\cw-everything-customer\src\pages\add-address\add-address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], AddAddressPage);
    return AddAddressPage;
}());

//# sourceMappingURL=add-address.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderHostoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_apiconfig__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_details_order_details__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the OrderHostoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderHostoryPage = /** @class */ (function () {
    function OrderHostoryPage(navCtrl, toastController, popoverController, navparams, platform, storage, http) {
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.popoverController = popoverController;
        this.navparams = navparams;
        this.platform = platform;
        this.storage = storage;
        this.http = http;
        this.showLoader = false;
        this.user = {};
        this.order_list = [];
    }
    OrderHostoryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('cuserinfo').then(function (result) {
            _this.user = JSON.parse(result);
            _this.loadOrders();
        });
    };
    OrderHostoryPage.prototype.loadOrders = function () {
        var _this = this;
        this.showLoader = true;
        this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiconfig__["a" /* APIURL */] + 'orders?access-token=' + this.user.token + '&where[sp_id]=' + this.user.id + "&where[is_product]=1")
            .subscribe({
            next: function (data) {
                _this.showLoader = false;
                console.log('data is ', data);
                _this.order_list = data.orders;
            },
            error: function (err) {
                _this.showLoader = false;
            }
        });
    };
    OrderHostoryPage.prototype.order_details = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__order_details_order_details__["a" /* OrderDetailsPage */], { order: item });
    };
    OrderHostoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order-hostory',template:/*ion-inline-start:"G:\ET\cw-everything-customer\src\pages\order-hostory\order-hostory.html"*/'<!--\n\n  Generated template for the OrderHostoryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="bg-img">\n\n\n\n  <ion-navbar>\n\n    <ion-title>Order History</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-img">\n\n  <div *ngIf="showLoader" class="loader-bg">\n\n    <ion-spinner class="spinner" color="light"></ion-spinner>\n\n  </div>\n\n  <ion-list no-lines>\n\n    <ion-item *ngFor="let item of order_list" (click)="order_details(item)">\n\n      <!-- <h2 class="d-flex"><span>{{\'Order Id: 1234567890\' }}</span>\n\n      </h2> -->\n\n      <h2 class="d-flex">Status {{item?.status}}</h2>\n\n      <h3 class="d-flex">Price {{item?.grand_total}}</h3>\n\n      <h3 class="d-flex">Order Date {{item?.created_at}}</h3>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <div *ngIf="order_list.length == 0 && !showLoader" class="emptydata" align="center">\n\n    <img src="assets/imgs/sad_smiley.png" style="max-height: 150px" />\n\n    <h4>Currently there are no orders.</h4>\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\ET\cw-everything-customer\src\pages\order-hostory\order-hostory.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], OrderHostoryPage);
    return OrderHostoryPage;
}());

//# sourceMappingURL=order-hostory.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_apiconfig__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the OrderDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderDetailsPage = /** @class */ (function () {
    function OrderDetailsPage(navCtrl, navParams, http, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.showLoader = false;
        this.user = {};
        this.order_details = {};
        this.showDesc = false;
        this.description = '';
    }
    OrderDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad OrderDetailsPage');
        this.storage.get('cuserinfo').then(function (result) {
            _this.user = JSON.parse(result);
            _this.loadOrderDetails();
        });
    };
    OrderDetailsPage.prototype.loadOrderDetails = function () {
        var _this = this;
        var order = this.navParams.get('order');
        this.showLoader = true;
        this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiconfig__["a" /* APIURL */] + 'orders/' + order.id + '?access-token=' + this.user.token)
            .subscribe({
            next: function (data) {
                _this.showLoader = false;
                _this.order_details = data;
                console.log('order_details is ', _this.order_details);
                // this.order_details = data.orders;
            },
            error: function (err) {
                _this.showLoader = false;
            }
        });
    };
    OrderDetailsPage.prototype.openDesc = function (prod) {
        this.description = prod.description;
        this.showDesc = true;
    };
    OrderDetailsPage.prototype.closeDesc = function () {
        this.description = '';
        this.showDesc = false;
    };
    OrderDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-order-details',template:/*ion-inline-start:"G:\ET\cw-everything-customer\src\pages\order-details\order-details.html"*/'<!--\n\n  Generated template for the OrderDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="bg-color">\n\n  <ion-navbar>\n\n    <ion-title>Order Details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-color">\n\n  <div *ngIf="showLoader" class="loader-bg">\n\n    <ion-spinner class="spinner" color="light"></ion-spinner>\n\n  </div>\n\n  <div class="total-price">\n\n    <h1>Total Price: &#8377; {{order_details?.sub_total}} </h1>\n\n    <p>Status {{order_details?.status}}</p>\n\n    <p>{{order_details?.subcategory?.name}}</p>\n\n    <p>Provider : {{order_details?.provider?.name}}</p>\n\n  </div>\n\n  <ion-list no-lines>\n\n    <ion-item *ngFor="let data of order_details?.product">\n\n      <div class="img_box center_img" item-start>\n\n        <img src="{{\'assets/imgs/avatar.png\'}}" width="100px" height="100px">\n\n    </div>\n\n    <h2 class="d-flex"><span>{{data.product_name }}</span>\n\n    </h2>\n\n    <!-- <h3>Plumber</h3> -->\n\n    <h3 class="d-flex">Sale Price {{data.sale_price}}</h3>\n\n    <h3 class="d-flex">MRP Price {{data.mrp}}</h3>\n\n    <h3 class="d-flex">Qty {{data.qty}}</h3>\n\n    <!-- <button ion-button (click)="openDesc(data)" class="d-flex">Description</button> -->\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n<div *ngIf="showDesc" class="modal-pop">\n\n  <div class="modal-inner">\n\n      <div class="modal-header">\n\n          <!-- <h2>{{popHeading}}</h2> -->\n\n          <button class="close-btn" (click)="closeDesc()"> &#10006;</button>\n\n      </div>\n\n      <div class="modal-body">\n\n          <p [innerHTML]="description">\n\n          </p>\n\n          <!-- <img [src]="popup_image" [title]="popHeading" [alt]="popHeading" /> -->\n\n      </div>\n\n  </div>\n\n</div>\n\n'/*ion-inline-end:"G:\ET\cw-everything-customer\src\pages\order-details\order-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], OrderDetailsPage);
    return OrderDetailsPage;
}());

//# sourceMappingURL=order-details.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_apiconfig__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotPage = /** @class */ (function () {
    function ForgotPage(navCtrl, http, toast) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.toast = toast;
        this.showLoader = false;
        this.mobile = '';
    }
    ForgotPage.prototype.createToast = function (msg, css, duration, pos) {
        var toast = this.toast.create({
            message: msg,
            duration: duration,
            cssClass: css,
            position: pos
        });
        toast.present();
    };
    ForgotPage.prototype.sendEmail = function () {
        var _this = this;
        this.showLoader = true;
        var regex = /^[0-9]{10}$/;
        if (this.mobile.trim() == '' || !regex.test(this.mobile) || this.mobile.length < 10) {
            this.createToast('Please enter a valid mobile number.', 'toast-danger', 4000, 'top');
            this.showLoader = false;
            return false;
        }
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_apiconfig__["a" /* APIURL */] + 'customers/forgot', { contact: this.mobile })
            .subscribe({
            next: function (response) {
                _this.showLoader = false;
                if (response['error'] == 0) {
                    var that = _this;
                    _this.mobile = '';
                    _this.createToast('Password Reset Link has been sent to your registered mobile number and email address.', 'toast-success', 5000, 'bottom');
                    setTimeout(function () {
                        that.navCtrl.pop();
                    }, 5000);
                }
                else {
                    var toast = _this.toast.create({
                        message: response['reason'],
                        duration: 5000,
                        cssClass: 'toast-danger',
                        position: 'bottom'
                    });
                    toast.present();
                }
            },
            error: function (err) {
                _this.showLoader = false;
                _this.createToast('Some technical glitch observed. Please try again.', 'toast-dnger', 3000, 'bottom');
            }
        });
    };
    ForgotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot',template:/*ion-inline-start:"G:\ET\cw-everything-customer\src\pages\forgot\forgot.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title></ion-title>\n\n    </ion-navbar>\n\n    <div class="text_box">\n\n        <h2>{{\'forgot_password\' | translate}}</h2>\n\n        <h3>{{\'forgot_text_1\' | translate}}<br>{{\'forgot_text_2\' | translate}}</h3>\n\n    </div>\n\n</ion-header>\n\n\n\n<ion-content class="bg-img">\n\n    <div *ngIf="showLoader" class="loader-bg">\n\n        <ion-spinner class="spinner" color="light"></ion-spinner>\n\n    </div>\n\n    <div class="form">\n\n        <ion-list no-lines>\n\n            <ion-item>\n\n                <ion-icon class="material-icons" item-start>phone</ion-icon>\n\n                <ion-label floating>{{\'mobile_number\' | translate}}</ion-label>\n\n                <ion-input type="text" maxlength="10" [(ngModel)]="mobile"></ion-input>\n\n            </ion-item>\n\n        </ion-list>\n\n        <button ion-button block class="btn" (click)="sendEmail()"> {{\'Continue\' | translate}}</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\ET\cw-everything-customer\src\pages\forgot\forgot.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], ForgotPage);
    return ForgotPage;
}());

//# sourceMappingURL=forgot.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_apiconfig__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_addresses_my_addresses__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CartDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CartDetailsPage = /** @class */ (function () {
    function CartDetailsPage(navCtrl, events, navParams, http, storage) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.showLoader = true;
        this.cart_list = [];
        this.showDesc = false;
        this.productDesc = '';
        this.image_prefix = __WEBPACK_IMPORTED_MODULE_4__app_apiconfig__["b" /* IMAGE_URL */];
        this.total_price = 0;
        this.selected_address = {};
    }
    CartDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('cuserinfo').then(function (result) {
            _this.user = JSON.parse(result);
            _this.loadCartList();
        });
    };
    CartDetailsPage.prototype.loadCartList = function () {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_4__app_apiconfig__["a" /* APIURL */] + "customers/cart-list?customer_id=" + this.user.id + "&access-token=" + this.user.toke;
        this.http.get(url)
            .subscribe({
            next: function (response) {
                _this.showLoader = false;
                _this.cart_list = response;
                _this.total_price = 0;
                _this.cart_list.forEach(function (element) {
                    _this.total_price = _this.total_price + (element.sale_price * element.qty);
                });
            },
            error: function (err) {
                _this.showLoader = false;
                console.error(err);
            }
        });
    };
    CartDetailsPage.prototype.openDesc = function (prod) {
        this.productDesc = prod.description;
        this.showDesc = true;
    };
    CartDetailsPage.prototype.closeDesc = function () {
        this.productDesc = '';
        this.showDesc = false;
    };
    CartDetailsPage.prototype.removeFromCart = function (item) {
        var _this = this;
        console.log('item from cart is ', item);
        // return false;
        var url = __WEBPACK_IMPORTED_MODULE_4__app_apiconfig__["a" /* APIURL */] + "customers/del-cart?access-token=" + this.user.token + "&cart_id=" + item['cart_id'];
        this.showLoader = true;
        this.http.get(url)
            .subscribe({
            next: function (response) {
                _this.showLoader = false;
                _this.getCartCount();
                _this.loadCartList();
            },
            error: function (err) {
                _this.showLoader = false;
                console.error(err);
            }
        });
    };
    CartDetailsPage.prototype.getCartCount = function () {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_4__app_apiconfig__["a" /* APIURL */] + "customers/cart-count?customer_id=" + this.user.id + "&access-token=" + this.user.token;
        this.showLoader = true;
        this.http.get(url)
            .subscribe({
            next: function (response) {
                _this.showLoader = false;
                _this.events.publish('add_to_cart', response['cart_count']);
            },
            error: function (err) {
                _this.showLoader = false;
                console.error(err);
            }
        });
    };
    CartDetailsPage.prototype.selectAddress = function (address) {
        console.log('selected_address ', address);
        this.selected_address = address;
    };
    CartDetailsPage.prototype.proceedToAddress = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__my_addresses_my_addresses__["a" /* My_addressesPage */], { page: 'cart_details', cart: this.cart_list });
    };
    CartDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-cart-details',template:/*ion-inline-start:"G:\ET\cw-everything-customer\src\pages\cart-details\cart-details.html"*/'<!--\n\n  Generated template for the CartDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="bg-img">\n\n\n\n  <ion-navbar>\n\n    <ion-title>Cart Details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-img">\n\n  <div *ngIf="showLoader" class="loader-bg">\n\n    <ion-spinner class="spinner" color="light"></ion-spinner>\n\n  </div>\n\n  <div class="total-price">\n\n    <h1>Total Price: &#8377; {{total_price}} </h1>\n\n  </div>\n\n  <ion-list no-lines>\n\n    <ion-item *ngFor="let data of cart_list; let i = index" (click)="selectAddress(data)">\n\n        <div class="img_box center_img" item-start>\n\n            <img src="{{data.image ? image_prefix+ data.image : \'assets/imgs/avatar.png\'}}" width="100px" height="100px">\n\n        </div>\n\n        <h2 class="d-flex"><span>{{data.product_name }}</span>\n\n        </h2>\n\n        <!-- <h3>Plumber</h3> -->\n\n        <h3 class="d-flex">Sale Price : {{data.sale_price}} <s style=\'color:red;margin-left: 5px;\' *ngIf="(data.mrp > data.sale_price)"> {{data.mrp}}</s></h3>\n\n        <!-- <h3 *ngIf="(data.mrp > data.sale_price)" class="d-flex">MRP Price : <s>{{data.mrp}}</s></h3> -->\n\n        <!-- <h3 *ngIf="!(data.mrp > data.sale_price)" class="d-flex">MRP Price : {{data.mrp}}</h3> -->\n\n        <h3 *ngIf="data?.cart_details?.qty" class="d-flex">Quantity {{data?.cart_details?.qty}}</h3>\n\n        <h3 class="d-flex">Qty {{data.qty}}</h3>\n\n        <!-- <button ion-button (click)="openDesc(data)" class="d-flex">Description</button> -->\n\n        <div class="cart-qty">\n\n          <button (click)="removeFromCart(data)" class="cart-btn" ion-button><ion-icon class="material-icons" item-end>remove_shopping_cart</ion-icon>Remove</button>\n\n       </div>\n\n    \n\n      </ion-item>\n\n\n\n    <div *ngIf="cart_list.length == 0 && !showLoader" class="emptydata" align="center">\n\n        <img src="assets/imgs/sad_smiley.png" style="max-height: 150px" />\n\n        <h4>Currently there are no products.</h4>\n\n    </div>\n\n</ion-list>\n\n</ion-content>\n\n<ion-footer *ngIf="cart_list.length > 0">\n\n  <button ion-button full class="btn" (click)="proceedToAddress()">Proceed to order</button>\n\n</ion-footer>\n\n<div *ngIf="showDesc" class="modal-pop">\n\n  <div class="modal-inner">\n\n      <div class="modal-header">\n\n          <!-- <h2>{{popHeading}}</h2> -->\n\n          <button class="close-btn" (click)="closeDesc()"> &#10006;</button>\n\n      </div>\n\n      <div class="modal-body">\n\n          <p [innerHTML]="productDesc">\n\n          </p>\n\n          <!-- <img [src]="popup_image" [title]="popHeading" [alt]="popHeading" /> -->\n\n      </div>\n\n  </div>\n\n</div>\n\n'/*ion-inline-end:"G:\ET\cw-everything-customer\src\pages\cart-details\cart-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], CartDetailsPage);
    return CartDetailsPage;
}());

//# sourceMappingURL=cart-details.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plumber_profile_plumber_profile__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConversationPage = /** @class */ (function () {
    function ConversationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ConversationPage.prototype.plumber_profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__plumber_profile_plumber_profile__["b" /* Plumber_profilePage */]);
    };
    ConversationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-conversation',template:/*ion-inline-start:"G:\ET\cw-everything-customer\src\pages\conversation\conversation.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            <div class="user_profile d-flex" (click)="plumber_profile()">\n\n                <div class="center_img profile_img">\n\n                    <img src="assets/imgs/plumber_profile.png" class="crop_img">\n\n                </div>\n\n                <div class="text_box">\n\n                    <h2>George Smith</h2>\n\n                    <p class="d-flex">Plumber <span class="end">{{\'view_profile\' | translate}}</span></p>\n\n                </div>\n\n            </div>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n    <div class="chat_container d-flex">\n\n        <div class="chat_box d-flex send">\n\n            <div class="chat">\n\n                <h2>Hey George, <br>Available?</h2>\n\n                <p>12:01 pm</p>\n\n            </div>\n\n        </div>\n\n        <div class="chat_box d-flex received">\n\n            <div class="chat">\n\n                <h2>Hello Ma,m <br>How may I help you?</h2>\n\n                <p>12:02 pm</p>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n\n\n<ion-footer no-border>\n\n    <div class="form">\n\n        <ion-list no-lines>\n\n            <ion-item>\n\n                <ion-input type="text" placeholder="{{\'write_your_message\' | translate}}"></ion-input>\n\n                <ion-icon item-end class="material-icons">send</ion-icon>\n\n            </ion-item>\n\n        </ion-list>\n\n    </div>\n\n</ion-footer>\n\n'/*ion-inline-end:"G:\ET\cw-everything-customer\src\pages\conversation\conversation.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], ConversationPage);
    return ConversationPage;
}());

//# sourceMappingURL=conversation.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_image_loader__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_gallery_modal__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_location_accuracy__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_diagnostic__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_social_sharing__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_about_about__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_account_account__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_appointment_status_appointment_status__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_appointments_appointments__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_book_appointment_book_appointment__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_category_category__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_chats_chats__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_contact_contact__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_conversation_conversation__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_faq_faq__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_forgot_forgot__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_home_home__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_picker_picker__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_languag_languag__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_list_of_plumber_list_of_plumber__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_my_addresses_my_addresses__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_my_profile_my_profile__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_notification_notification__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_plumber_profile_plumber_profile__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_review_review__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_signin_signin__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_signup_signup__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_tabs_tabs__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_add_address_add_address__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_order_rating_order_rating__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_popover_popover__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_date_picker__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_status_bar__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_splash_screen__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_firebase__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_camera__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_geolocation__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46_ionic3_star_rating__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_cart_details_cart_details__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_order_hostory_order_hostory__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_order_details_order_details__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















































function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_appointment_status_appointment_status__["a" /* Appointment_statusPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_appointments_appointments__["a" /* AppointmentsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_book_appointment_book_appointment__["a" /* Book_appointmentPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_chats_chats__["a" /* ChatsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_conversation_conversation__["a" /* ConversationPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_faq_faq__["a" /* FaqPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_forgot_forgot__["a" /* ForgotPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_languag_languag__["a" /* LanguagPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_list_of_plumber_list_of_plumber__["a" /* List_of_plumberPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_my_addresses_my_addresses__["a" /* My_addressesPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_my_profile_my_profile__["a" /* My_profilePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_plumber_profile_plumber_profile__["b" /* Plumber_profilePage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_review_review__["a" /* ReviewPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_picker_picker__["a" /* PickerPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_add_address_add_address__["a" /* AddAddressPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_order_rating_order_rating__["a" /* OrderRatingPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_cart_details_cart_details__["a" /* CartDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_plumber_profile_plumber_profile__["a" /* CartQuantity */],
                __WEBPACK_IMPORTED_MODULE_48__pages_order_hostory_order_hostory__["a" /* OrderHostoryPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_order_details_order_details__["a" /* OrderDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_popover_popover__["a" /* PopoverPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_43__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_ionic_image_loader__["a" /* IonicImageLoader */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_ionic_gallery_modal__["c" /* GalleryModalModule */],
                __WEBPACK_IMPORTED_MODULE_46_ionic3_star_rating__["a" /* StarRatingModule */],
                __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_appointment_status_appointment_status__["a" /* Appointment_statusPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_appointments_appointments__["a" /* AppointmentsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_book_appointment_book_appointment__["a" /* Book_appointmentPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_chats_chats__["a" /* ChatsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_conversation_conversation__["a" /* ConversationPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_faq_faq__["a" /* FaqPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_forgot_forgot__["a" /* ForgotPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_languag_languag__["a" /* LanguagPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_list_of_plumber_list_of_plumber__["a" /* List_of_plumberPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_my_addresses_my_addresses__["a" /* My_addressesPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_my_profile_my_profile__["a" /* My_profilePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_plumber_profile_plumber_profile__["b" /* Plumber_profilePage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_review_review__["a" /* ReviewPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_add_address_add_address__["a" /* AddAddressPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_order_rating_order_rating__["a" /* OrderRatingPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_cart_details_cart_details__["a" /* CartDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_plumber_profile_plumber_profile__["a" /* CartQuantity */],
                __WEBPACK_IMPORTED_MODULE_48__pages_order_hostory_order_hostory__["a" /* OrderHostoryPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_order_details_order_details__["a" /* OrderDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_popover_popover__["a" /* PopoverPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_45__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_39__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_42__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
                __WEBPACK_IMPORTED_MODULE_9_ionic_gallery_modal__["b" /* GalleryModalHammerConfig */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_ngx_translate_core__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cart_details_cart_details__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { LanguagPage } from '../pages/languag/languag';



var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, translate, events) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.translate = translate;
        this.events = events;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__["a" /* SigninPage */];
        this.cart_count_number = 0;
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.nav.viewDidLoad.subscribe(function (page) {
                console.log('page is ', page);
            });
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.translate.setDefaultLang('en');
            _this.translate.use('en');
            _this.events.subscribe('add_to_cart', function (cart_count) {
                console.log('cart count ', cart_count);
                // user and time are the same arguments passed in `events.publish(user, time)`
                _this.cart_count_number = cart_count;
            });
        });
    };
    MyApp.prototype.goToCartDetails = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_cart_details_cart_details__["a" /* CartDetailsPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('nav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"G:\ET\cw-everything-customer\src\app\app.html"*/'<ion-nav #nav [root]="rootPage"></ion-nav>\n\n<ion-fab style="top:50px" right top *ngIf="cart_count_number > 0">\n\n    <button (click)="goToCartDetails()" ion-fab><ion-icon class="material-icons" item-end>shopping_cart</ion-icon>{{cart_count_number}}</button>\n\n</ion-fab>\n\n \n\n'/*ion-inline-end:"G:\ET\cw-everything-customer\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__node_modules_ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conversation_conversation__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatsPage = /** @class */ (function () {
    function ChatsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ChatsPage.prototype.conversation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__conversation_conversation__["a" /* ConversationPage */]);
    };
    ChatsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chats',template:/*ion-inline-start:"G:\ET\cw-everything-customer\src\pages\chats\chats.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{\'chats\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n    <ion-list no-lines>\n\n        <ion-item (click)="conversation()">\n\n            <div class="img_box center_img" item-start>\n\n                <img src="assets/imgs/plumber_profile.png" class="crop_img">\n\n            </div>\n\n            <h2><span>George Smith</span></h2>\n\n            <h3 class="d-flex">Plumber <span class="end">11:48 am</span></h3>\n\n            <p class="d-flex">Yeah, We are thankfull to you.</p>\n\n        </ion-item>\n\n        <ion-item (click)="conversation()">\n\n            <div class="img_box center_img" item-start>\n\n                <img src="assets/imgs/plumber_profile.png" class="crop_img">\n\n            </div>\n\n            <h2><span>George Smith</span></h2>\n\n            <h3 class="d-flex">Plumber <span class="end">11:48 am</span></h3>\n\n            <p class="d-flex">Yeah, We are thankfull to you.</p>\n\n        </ion-item>\n\n        <ion-item (click)="conversation()">\n\n            <div class="img_box center_img" item-start>\n\n                <img src="assets/imgs/plumber_profile.png" class="crop_img">\n\n            </div>\n\n            <h2><span>George Smith</span></h2>\n\n            <h3 class="d-flex">Plumber <span class="end">11:48 am</span></h3>\n\n            <p class="d-flex">Yeah, We are thankfull to you.</p>\n\n        </ion-item>\n\n        <ion-item (click)="conversation()">\n\n            <div class="img_box center_img" item-start>\n\n                <img src="assets/imgs/plumber_profile.png" class="crop_img">\n\n            </div>\n\n            <h2><span>George Smith</span></h2>\n\n            <h3 class="d-flex">Plumber <span class="end">11:48 am</span></h3>\n\n            <p class="d-flex">Yeah, We are thankfull to you.</p>\n\n        </ion-item>\n\n        <ion-item (click)="conversation()">\n\n            <div class="img_box center_img" item-start>\n\n                <img src="assets/imgs/plumber_profile.png" class="crop_img">\n\n            </div>\n\n            <h2><span>George Smith</span></h2>\n\n            <h3 class="d-flex">Plumber <span class="end">11:48 am</span></h3>\n\n            <p class="d-flex">Yeah, We are thankfull to you.</p>\n\n        </ion-item>\n\n        <ion-item (click)="conversation()">\n\n            <div class="img_box center_img" item-start>\n\n                <img src="assets/imgs/plumber_profile.png" class="crop_img">\n\n            </div>\n\n            <h2><span>George Smith</span></h2>\n\n            <h3 class="d-flex">Plumber <span class="end">11:48 am</span></h3>\n\n            <p class="d-flex">Yeah, We are thankfull to you.</p>\n\n        </ion-item>\n\n        <ion-item (click)="conversation()">\n\n            <div class="img_box center_img" item-start>\n\n                <img src="assets/imgs/plumber_profile.png" class="crop_img">\n\n            </div>\n\n            <h2><span>George Smith</span></h2>\n\n            <h3 class="d-flex">Plumber <span class="end">11:48 am</span></h3>\n\n            <p class="d-flex">Yeah, We are thankfull to you.</p>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\ET\cw-everything-customer\src\pages\chats\chats.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], ChatsPage);
    return ChatsPage;
}());

//# sourceMappingURL=chats.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_apiconfig__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PickerPage = /** @class */ (function () {
    function PickerPage(navCtrl, navparams, http) {
        this.navCtrl = navCtrl;
        this.navparams = navparams;
        this.http = http;
        this.skills = [];
        this.subcat_id = [];
        this.fee = 0.00;
        this.ids = [];
        this.names = [];
        this.showLoader = true;
    }
    PickerPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_apiconfig__["a" /* APIURL */] + '/admin14/sapi/v1/service-providers/skills').subscribe({
            next: function (data) {
                _this.skills = data;
                _this.showLoader = false;
            },
            error: function (err) {
                console.error(err);
            }
        });
    };
    PickerPage.prototype.ionViewDidEnter = function () {
        if (typeof this.navparams.get('ids') != 'undefined') {
            var ids = this.navparams.get('ids');
            for (var i = 0; i < ids.length; i++) {
                this.subcat_id[ids[i]] = true;
            }
        }
    };
    PickerPage.prototype.updateSelected = function (obj) {
        if (this.subcat_id[obj.id] === true) {
            this.fee += parseFloat(obj.registration_cost);
            this.ids.push(obj.id);
            this.names.push(obj.name);
        }
        else {
            this.fee -= parseFloat(obj.registration_cost);
            this.ids.splice(this.ids.indexOf(obj.id), 1);
            this.names.splice(this.names.indexOf(obj.name), 1);
        }
    };
    PickerPage.prototype.goBackWithSkills = function () {
        this.navCtrl.getPrevious().data.ids = this.ids.join(', ');
        this.navCtrl.getPrevious().data.names = this.names.join(', ');
        this.navCtrl.pop();
    };
    PickerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-picker',template:/*ion-inline-start:"G:\ET\cw-everything-customer\src\pages\picker\picker.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Select your skills\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div *ngIf="showLoader" class="loader-bg">\n\n      <ion-spinner class="spinner" color="light"></ion-spinner>\n\n  </div>\n\n  \n\n  <ion-list *ngFor="let item of skills">\n\n    <ion-list-header>{{item.category}}</ion-list-header>\n\n\n\n    <ion-item *ngFor="let sc of item.subcat">\n\n      <ion-label>{{sc.name}} <p>(-) {{sc.commission_perc}}% Commission</p></ion-label>\n\n      <ion-checkbox [(ngModel)]="subcat_id[sc.id]" (ionChange)="updateSelected(sc)" color="secondary"></ion-checkbox>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n	<ion-grid>\n\n  		<ion-row>\n\n		    <ion-col col-9>\n\n		      <h4>Registration Cost : ₹{{this.fee}}</h4>\n\n		    </ion-col>\n\n		    <ion-col>		\n\n  				<button ion-button outline float-right (click)="goBackWithSkills()">OK</button>				\n\n  			</ion-col>\n\n  		</ion-row>\n\n  	</ion-grid>		\n\n</ion-footer>'/*ion-inline-end:"G:\ET\cw-everything-customer\src\pages\picker\picker.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], PickerPage);
    return PickerPage;
}());

//# sourceMappingURL=picker.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguagPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LanguagPage = /** @class */ (function () {
    function LanguagPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LanguagPage.prototype.signin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */]);
    };
    LanguagPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-languag',template:/*ion-inline-start:"G:\ET\cw-everything-customer\src\pages\languag\languag.html"*/'<!--\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n-->\n\n\n\n<ion-content class="bg-img">\n\n    <div class="logo_box">\n\n        <img src="assets/imgs/logo.png">\n\n    </div>\n\n</ion-content>\n\n<ion-footer no-border>\n\n    <p text-center>{{\'select_preffered_app_language\' | translate}}</p>\n\n    <ion-row>\n\n        <ion-col col-6>\n\n            <button ion-button block class="btn francaic" (click)="signin()"> {{\'francaic\' | translate}}</button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n            <button ion-button block class="btn" (click)="signin()"> {{\'english\' | translate}}</button>\n\n        </ion-col>\n\n    </ion-row>\n\n</ion-footer>\n\n'/*ion-inline-end:"G:\ET\cw-everything-customer\src\pages\languag\languag.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], LanguagPage);
    return LanguagPage;
}());

//# sourceMappingURL=languag.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationPage = /** @class */ (function () {
    function NotificationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"G:\ET\cw-everything-customer\src\pages\notification\notification.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{\'notifications\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n    <ion-list no-lines>\n\n        <ion-item>\n\n            <div class="img_box center_img" item-start>\n\n                <img src="assets/imgs/plumber_profile.png" class="crop_img">\n\n            </div>\n\n            <h2 class="d-flex">Founds a plumber you may searching for you Work.</h2>\n\n            <h3>2 mins ago</h3>\n\n        </ion-item>\n\n        <ion-item>\n\n            <div class="img_box center_img" item-start>\n\n                <img src="assets/imgs/plumber_profile.png" class="crop_img">\n\n            </div>\n\n            <h2 class="d-flex">Founds a plumber you may searching for you Work.</h2>\n\n            <h3>2 mins ago</h3>\n\n        </ion-item>\n\n        <ion-item>\n\n            <div class="img_box center_img" item-start>\n\n                <img src="assets/imgs/plumber_profile.png" class="crop_img">\n\n            </div>\n\n            <h2 class="d-flex">Founds a plumber you may searching for you Work.</h2>\n\n            <h3>2 mins ago</h3>\n\n        </ion-item>\n\n        <ion-item>\n\n            <div class="img_box center_img" item-start>\n\n                <img src="assets/imgs/plumber_profile.png" class="crop_img">\n\n            </div>\n\n            <h2 class="d-flex">Founds a plumber you may searching for you Work.</h2>\n\n            <h3>2 mins ago</h3>\n\n        </ion-item>\n\n        <ion-item>\n\n            <div class="img_box center_img" item-start>\n\n                <img src="assets/imgs/plumber_profile.png" class="crop_img">\n\n            </div>\n\n            <h2 class="d-flex">Founds a plumber you may searching for you Work.</h2>\n\n            <h3>2 mins ago</h3>\n\n        </ion-item>\n\n        <ion-item>\n\n            <div class="img_box center_img" item-start>\n\n                <img src="assets/imgs/plumber_profile.png" class="crop_img">\n\n            </div>\n\n            <h2 class="d-flex">Founds a plumber you may searching for you Work.</h2>\n\n            <h3>2 mins ago</h3>\n\n        </ion-item>\n\n        <ion-item>\n\n            <div class="img_box center_img" item-start>\n\n                <img src="assets/imgs/plumber_profile.png" class="crop_img">\n\n            </div>\n\n            <h2 class="d-flex">Founds a plumber you may searching for you Work.</h2>\n\n            <h3>2 mins ago</h3>\n\n        </ion-item>\n\n        <ion-item>\n\n            <div class="img_box center_img" item-start>\n\n                <img src="assets/imgs/plumber_profile.png" class="crop_img">\n\n            </div>\n\n            <h2 class="d-flex">Founds a plumber you may searching for you Work.</h2>\n\n            <h3>2 mins ago</h3>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\ET\cw-everything-customer\src\pages\notification\notification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewPage = /** @class */ (function () {
    function ReviewPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-review',template:/*ion-inline-start:"G:\ET\cw-everything-customer\src\pages\review\review.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{\'submit_review\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n    <div class="banner">\n\n        <ion-list no-lines>\n\n            <ion-item (click)="plumber_profile()">\n\n                <div class="img_box center_img" item-start>\n\n                    <img src="assets/imgs/plumber_profile.png" class="crop_img">\n\n                </div>\n\n                <h2 class="d-flex"><span>George Willamson</span>\n\n                    <ion-badge class="end">4.1 <ion-icon class="material-icons">star</ion-icon>\n\n                    </ion-badge>\n\n                </h2>\n\n                <h3>Plumber</h3>\n\n                <p class="d-flex">2.8km away <span class="end">$ 9.50 per Hour</span></p>\n\n            </ion-item>\n\n        </ion-list>\n\n    </div>\n\n\n\n    <div class="form">\n\n        <h2>{{\'how_was_your\' | translate}}<br>{{\'work_experience?\' | translate}}</h2>\n\n        <div class="rating_icons d-flex">\n\n            <ion-icon class="material-icons active">star</ion-icon>\n\n            <ion-icon class="material-icons">star</ion-icon>\n\n            <ion-icon class="material-icons">star</ion-icon>\n\n            <ion-icon class="material-icons">star</ion-icon>\n\n            <ion-icon class="material-icons">star</ion-icon>\n\n        </div>\n\n        <ion-list no-lines>\n\n            <ion-item>\n\n                <ion-label>{{\'tell_us_words_about_ur_experience\' | translate}}</ion-label>\n\n                <ion-textarea type="text" value="Perfect work by him. Good knowledge  pluming & fitting.  I would surely preferred him."></ion-textarea>\n\n            </ion-item>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n<ion-footer no-border>\n\n    <button ion-button full no-margin class="btn"> {{\'submit\' | translate}}</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"G:\ET\cw-everything-customer\src\pages\review\review.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], ReviewPage);
    return ReviewPage;
}());

//# sourceMappingURL=review.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_apiconfig__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_tabs__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__forgot_forgot__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { FirebaseX } from '@ionic-native/firebase-x/ngx';



var SigninPage = /** @class */ (function () {
    function SigninPage(navCtrl, events, platform, formBuilder, http, toastController, storage) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toastController = toastController;
        this.storage = storage;
        this.push_token = '';
        this.submitAttempt = false;
        this.showLoader = true;
        this.loginForm = formBuilder.group({
            mobile: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(10),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[0-9{10}]+$')
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]
        });
    }
    SigninPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.storage.get('cuserinfo').then(function (result) {
                _this.showLoader = false;
                if (typeof result != 'undefined' && result !== null && result !== '') {
                    var user_1 = JSON.parse(result);
                    if (_this.platform.is('cordova')) {
                        _this.firebasePlugin.onTokenRefresh(function (token) {
                            _this.push_token = token;
                            _this.http.put(__WEBPACK_IMPORTED_MODULE_5__app_apiconfig__["a" /* APIURL */] + 'customers/' + user_1.id + '?access-token=' + user_1.token, { push_token: token })
                                .subscribe({
                                next: function (data) {
                                },
                                error: function (error) {
                                }
                            });
                        });
                    }
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__tabs_tabs__["a" /* TabsPage */]);
                    _this.getCartList(user_1);
                    _this.getCartCount(user_1);
                }
            });
            if (_this.platform.is('cordova')) {
                _this.firebasePlugin = window.FirebasePlugin;
                //this.firebasePlugin.onMessageReceived(this.onMessageReceived.bind(this));
                _this.firebasePlugin.getToken(function (token) {
                    _this.push_token = token;
                });
            }
        });
    };
    SigninPage.prototype.getCartList = function (user) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_5__app_apiconfig__["a" /* APIURL */] + "customers/cart-list?customer_id=" + user.id + "&access-token=" + user.token;
        this.http.get(url)
            .subscribe({
            next: function (response) {
                _this.storage.remove('cart_list');
                response.forEach(function (element) {
                    element['id'] = element['cart_id'];
                });
                _this.storage.set('cart_list', response);
            },
            error: function (err) {
                console.error(err);
            }
        });
    };
    SigninPage.prototype.getCartCount = function (user) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_5__app_apiconfig__["a" /* APIURL */] + "customers/cart-count?customer_id=" + user.id + "&access-token=" + user.token;
        this.http.get(url)
            .subscribe({
            next: function (response) {
                _this.events.publish('add_to_cart', response['cart_count']);
            },
            error: function (err) {
                console.error(err);
            }
        });
    };
    /*onMessageReceived(message){
      if (message.tap) {
        this.navCtrl.push(Appointment_statusPage, {id: message.order_id})
      } else {
        //received while app in foreground (show a toast)
        let toast = this.toastController.create({
          message: message.body,
          duration: 5000,
          position: 'top',
          cssClass: 'toast-info'
        });
        toast.present();
      }
    }*/
    SigninPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage.prototype.forgot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__forgot_forgot__["a" /* ForgotPage */]);
    };
    SigninPage.prototype.login = function () {
        var _this = this;
        this.submitAttempt = true;
        if (this.loginForm.valid) {
            this.showLoader = true;
            var data = { push_token: this.push_token, mobile: this.loginForm.controls.mobile.value, password: this.loginForm.controls.password.value };
            this.http.post(__WEBPACK_IMPORTED_MODULE_5__app_apiconfig__["a" /* APIURL */] + 'customers/login', data)
                .subscribe({
                next: function (data) {
                    _this.submitAttempt = false;
                    _this.showLoader = false;
                    if (data.error == 1) {
                        var toast = _this.toastController.create({
                            message: data.reason,
                            duration: 5000,
                            cssClass: 'toast-danger'
                        });
                        toast.present();
                    }
                    else {
                        _this.loginForm.controls.mobile.setValue('');
                        _this.loginForm.controls.password.setValue('');
                        _this.storage.set('cuserinfo', JSON.stringify(data));
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__tabs_tabs__["a" /* TabsPage */]);
                    }
                },
                error: function (error) {
                    _this.submitAttempt = false;
                    console.error('There was an error!', error);
                }
            });
        }
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"G:\ET\cw-everything-customer\src\pages\signin\signin.html"*/'<ion-content class="bg-img">\n\n    <div *ngIf="showLoader" class="loader-bg">\n\n        <ion-spinner class="spinner" color="light"></ion-spinner>\n\n    </div>    \n\n    <div class="form">\n\n        <form [formGroup]="loginForm">\n\n            <div align="center">\n\n                <img src="assets/imgs/logo_new.png" align="center" height="150" />\n\n                <h5 class="text-wp-light" text-center style="margin-top: 3vh">If you haven\'t signed up yet, <a (click)="signup()">Sign Up</a></h5>\n\n            </div>    \n\n            <ion-list no-lines>\n\n                <ion-item [class.invalid]="!loginForm.controls.mobile.valid && submitAttempt">\n\n                    <ion-icon class="material-icons" item-start>phone_android</ion-icon>\n\n                    <ion-label floating>Mobile Number</ion-label>\n\n                    <ion-input autocomplete="off" type="text" formControlName="mobile" maxlength="10"></ion-input>\n\n                </ion-item>\n\n                <p class=\'error\' *ngIf="!loginForm.controls.mobile.valid  && submitAttempt">Please enter a valid mobile number.</p>\n\n\n\n                <ion-item [class.invalid]="!loginForm.controls.password.valid && submitAttempt">\n\n                    <ion-icon class="material-icons" item-start>lock</ion-icon>\n\n                    <ion-label floating>Password</ion-label>\n\n                    <ion-input autocomplete="off" formControlName="password" type="password" *ngIf="!showPasswordText"></ion-input>\n\n                    <ion-input autocomplete="off" formControlName="password" type="text" *ngIf="showPasswordText"></ion-input>\n\n                    <button ion-button clear color="dark" type="button" item-right (click)="showPasswordText = !showPasswordText">\n\n                        <ion-icon style="font-size: 20px; margin-top: 13px" name="eye"></ion-icon>\n\n                    </button>\n\n                </ion-item>\n\n                <p class=\'error\' *ngIf="!loginForm.controls.password.valid  && submitAttempt">Please enter a password.</p>\n\n\n\n                <button ion-button block class="btn" (click)="login()"> {{\'Login\'}}</button>\n\n            </ion-list>\n\n        </form>    \n\n        <p text-right><a style="font-size: 1.5rem" (click)="forgot()" href="#">{{"Forgot Password?"}}</a></p>\n\n        <div align="center" class="social-icons">\n\n            <a href="#" onclick="window.open(\'https://bit.ly/3hwDQRN\', \'_system\', \'location=yes\');">\n\n                <svg width="25" height="25" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n\n                  <use xlink:href="assets/imgs/feather-sprite.svg#youtube"/>\n\n                </svg>\n\n            </a>\n\n            <a href="#" onclick="window.open(\'https://bit.ly/2E4Fk8c\', \'_system\', \'location=yes\');">\n\n                <svg width="25" height="25" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n\n                  <use xlink:href="assets/imgs/feather-sprite.svg#facebook"/>\n\n                </svg>\n\n            </a>\n\n            <a href="#" onclick="window.open(\'https://twitter.com/everythingserv2\', \'_system\', \'location=yes\');">\n\n                <svg width="25" height="25" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n\n                  <use xlink:href="assets/imgs/feather-sprite.svg#twitter"/>\n\n                </svg>\n\n            </a>\n\n            <a href="#" onclick="window.open(\'http://www.linkedin.com/in/everything-services\', \'_system\', \'location=yes\');">\n\n                <svg width="25" height="25" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n\n                  <use xlink:href="assets/imgs/feather-sprite.svg#linkedin"/>\n\n                </svg>\n\n            </a>\n\n            <a href="#" onclick="window.open(\'https://www.instagram.com/everything_services/\', \'_system\', \'location=yes\');">\n\n                <svg width="25" height="25" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n\n                  <use xlink:href="assets/imgs/feather-sprite.svg#instagram"/>\n\n                </svg>\n\n            </a>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\ET\cw-everything-customer\src\pages\signin\signin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ })

},[284]);
//# sourceMappingURL=main.js.map