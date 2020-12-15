(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/authentication/services/user.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/services/user.service.ts ***!
  \*********************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



const url = 'http://localhost:8085/api/v1/user';
class UserService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    findById(userId) {
        return this.httpClient.get(`${url}/getById/${userId}`);
        // const user = usersMock.filter(u => u.id === userId)[0];
        // return of({ ...user, friendList: usersMock });
    }
    findAll() {
        return this.httpClient.get(`${url}/getAll/`);
        // return of(usersMock);
    }
    addFriend(user) {
        return this.httpClient.post(`${url}/addFriend/`, user);
    }
    aceptFriend(user) {
        return this.httpClient.post(`${url}/aceptInvite/`, user);
    }
    getFriends() {
        return this.httpClient.get(`${url}/getFriends`);
        // const user = usersMock.filter(u => u.id === userId)[0];
        // return of({ ...user, friendList: usersMock });
    }
    updateUser(user) {
        return this.httpClient.put(`${url}/update`, user);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map