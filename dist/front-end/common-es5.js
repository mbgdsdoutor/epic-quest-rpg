function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/authentication/services/user.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/authentication/services/user.service.ts ***!
    \*********************************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppAuthenticationServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var url = 'http://localhost:8085/api/v1/user';

    var UserService = /*#__PURE__*/function () {
      function UserService(httpClient) {
        _classCallCheck(this, UserService);

        this.httpClient = httpClient;
      }

      _createClass(UserService, [{
        key: "findById",
        value: function findById(userId) {
          return this.httpClient.get("".concat(url, "/getById/").concat(userId)); // const user = usersMock.filter(u => u.id === userId)[0];
          // return of({ ...user, friendList: usersMock });
        }
      }, {
        key: "findAll",
        value: function findAll() {
          return this.httpClient.get("".concat(url, "/getAll/")); // return of(usersMock);
        }
      }, {
        key: "addFriend",
        value: function addFriend(user) {
          return this.httpClient.post("".concat(url, "/addFriend/"), user);
        }
      }, {
        key: "aceptFriend",
        value: function aceptFriend(user) {
          return this.httpClient.post("".concat(url, "/aceptInvite/"), user);
        }
      }, {
        key: "getFriends",
        value: function getFriends() {
          return this.httpClient.get("".concat(url, "/getFriends")); // const user = usersMock.filter(u => u.id === userId)[0];
          // return of({ ...user, friendList: usersMock });
        }
      }, {
        key: "updateUser",
        value: function updateUser(user) {
          return this.httpClient.put("".concat(url, "/update"), user);
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map