function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["out-of-session-out-of-session-module"], {
  /***/
  "./src/app/out-of-session/adventures/adventure/adventure.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/out-of-session/adventures/adventure/adventure.component.ts ***!
    \****************************************************************************/

  /*! exports provided: AdventureComponent */

  /***/
  function srcAppOutOfSessionAdventuresAdventureAdventureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdventureComponent", function () {
      return AdventureComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/token-storage.service */
    "./src/app/token-storage.service.ts");
    /* harmony import */


    var _services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/notification.service */
    "./src/app/out-of-session/services/notification.service.ts");
    /* harmony import */


    var src_app_shared_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/loading/loading.service */
    "./src/app/shared/loading/loading.service.ts");
    /* harmony import */


    var src_app_shared_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/alert.service */
    "./src/app/shared/alert.service.ts");
    /* harmony import */


    var _services_adventure_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/adventure.service */
    "./src/app/out-of-session/services/adventure.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AdventureComponent_div_9_div_1_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Solicitar participa\xE7\xE3o");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AdventureComponent_div_9_div_1_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Participa\xE7\xE3o Solicitada");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function AdventureComponent_div_9_div_1_span_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var adventure_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "/social/profile/" + adventure_r3.mestre.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](adventure_r3.mestre.userName);
      }
    }

    function AdventureComponent_div_9_div_1_span_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "/social/profile/" + player_r9.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r9.userName);
      }
    }

    function AdventureComponent_div_9_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdventureComponent_div_9_div_1_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var adventure_r3 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.handleSendNotification(adventure_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdventureComponent_div_9_div_1_span_2_Template, 2, 0, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AdventureComponent_div_9_div_1_span_3_Template, 2, 0, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Mestre: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AdventureComponent_div_9_div_1_span_11_Template, 2, 4, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Participantes: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AdventureComponent_div_9_div_1_span_15_Template, 2, 4, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var adventure_r3 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.adventuresIdNotification.includes(adventure_r3.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.adventuresIdNotification.includes(adventure_r3.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", adventure_r3.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](adventure_r3.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", adventure_r3.mestre);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", adventure_r3.users);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](adventure_r3.description);
      }
    }

    function AdventureComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdventureComponent_div_9_div_1_Template, 18, 7, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.searchedAdventures);
      }
    }

    var _c1 = function _c1() {
      return ["/adventures/new"];
    };

    function AdventureComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " N\xE3o foi encontrada nenhuma aventura. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Crie a sua propria aventura com seus amigos!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
      }
    }

    var AdventureComponent = /*#__PURE__*/function () {
      function AdventureComponent(tokenService, notificationService, loadingService, alertService, adventureService) {
        _classCallCheck(this, AdventureComponent);

        this.tokenService = tokenService;
        this.notificationService = notificationService;
        this.loadingService = loadingService;
        this.alertService = alertService;
        this.adventureService = adventureService;
        this.adventures = [];
        this.searchedAdventures = [];
        this.adventuresIdNotification = [];
      }

      _createClass(AdventureComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.loggedUser = this.tokenService.getLoggedUser();
          this.loadingService.startLoadingBar();
          this.adventureService.findAll().subscribe(function (response) {
            var aventurasDisponiveis = response.filter(function (a) {
              var mapIds = a.users.map(function (u) {
                return u.id;
              });
              return a.mestre.id !== _this.loggedUser.id && !mapIds.includes(_this.loggedUser.id);
            });
            _this.adventures = aventurasDisponiveis;
            _this.searchedAdventures = _this.adventures;

            _this.loadingService.stopLoadingBar();
          }, function (err) {
            _this.loadingService.stopLoadingBar();

            _this.alertService.error('Erro ao buscar aventuras.');
          });
        }
      }, {
        key: "handleSearchAdventure",
        value: function handleSearchAdventure(event) {
          var searchText = event.currentTarget.value;

          if (searchText.length > 0) {
            this.searchedAdventures = this.adventures.filter(function (adventure) {
              return adventure.name.toLowerCase().includes(searchText.toLowerCase()) || adventure.mestre.userName.toLowerCase().includes(searchText.toLowerCase());
            });
          } else {
            this.searchedAdventures = this.adventures;
          }
        }
      }, {
        key: "handleSendNotification",
        value: function handleSendNotification(adventure) {// const notification: Notification = {
          //   from: loggedUser,
          //   to: adventure.mestre,
          //   status: NotificationStatus.Created,
          //   type: NotificationType.FriendList,
          //   adventureName: adventure.name
          // }
          // this.notificationService.createNotification(notification).subscribe(response => {
          //   this.adventuresIdNotification.push(adventure.id);
          // })
        }
      }]);

      return AdventureComponent;
    }();

    AdventureComponent.ɵfac = function AdventureComponent_Factory(t) {
      return new (t || AdventureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_adventure_service__WEBPACK_IMPORTED_MODULE_5__["AdventureService"]));
    };

    AdventureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdventureComponent,
      selectors: [["app-adventure"]],
      decls: 11,
      vars: 4,
      consts: [[1, "container"], [1, "adventure-creation-link", "text-theme-black"], [3, "routerLink"], [1, "user-search-box"], [1, "material-icons", "text-theme-black"], ["type", "text", "placeholder", "Digite o nome do mestre ou da aventura", 1, "input", 3, "input"], ["class", "user-container", 4, "ngIf"], [1, "user-container"], ["class", "user bg-theme", 4, "ngFor", "ngForOf"], [1, "user", "bg-theme"], [1, "button--outline", "text-theme-black", 3, "click"], [4, "ngIf"], [1, "user-img", 3, "src"], [1, "user-info", "text-theme-black"], [1, "user-info-name"], [1, "user-info-email"], [3, "routerLink", 4, "ngIf"], [3, "routerLink", 4, "ngFor", "ngForOf"], [1, "user-info-description"]],
      template: function AdventureComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Quer ser o mestre da sua pr\xF3pria aventura? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Crie uma nova aventura agora.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AdventureComponent_Template_input_input_8_listener($event) {
            return ctx.handleSearchAdventure($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AdventureComponent_div_9_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AdventureComponent_div_10_Template, 4, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.adventures.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.adventures.length === 0);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
      styles: ["@media only screen and (min-width: 720px) {\n  .container[_ngcontent-%COMP%] {\n    flex-direction: row !important;\n    margin-left: 32px;\n    margin-right: 32px;\n  }\n}\n.adventure-creation-link[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 1.2rem;\n}\n.adventure-creation-link[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #f0871c;\n  cursor: pointer;\n}\n.adventure-creation-link[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.user-search-box[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 16px;\n}\n.user-search-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 8px;\n  top: 8px;\n}\n.user-search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 40px;\n}\n.user-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));\n  grid-gap: 16px;\n  margin: 16px 0px;\n}\n.user[_ngcontent-%COMP%] {\n  display: flex;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  border-radius: 6px;\n  padding: 4px;\n  border: 1px solid #ccc;\n  -webkit-animation: animateIn 0.3s;\n          animation: animateIn 0.3s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  position: relative;\n}\n.user[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.user[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 12px;\n  height: 32px;\n}\n.user-img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: auto;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.user-info[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.user-info-name[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  margin-bottom: 4px !important;\n}\n.user-info-email[_ngcontent-%COMP%] {\n  font-family: quicksandBold;\n  font-size: 0.8rem;\n  margin-bottom: 8px !important;\n}\n.user-info-email[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.user-info-email[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:last-child):after {\n  content: \", \";\n}\n.user-info-email[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@-webkit-keyframes animateIn {\n  0% {\n    transform: translateX(500px);\n    transform: translateY(300px);\n  }\n  100% {\n    transform: translateX(0px);\n    transform: translateY(0px);\n  }\n}\n@keyframes animateIn {\n  0% {\n    transform: translateX(500px);\n    transform: translateY(300px);\n  }\n  100% {\n    transform: translateX(0px);\n    transform: translateY(0px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21icmF6L0RvY3VtZW50cy9lcGljLXF1ZXN0LXJwZy9lcGljLXF1ZXN0LXJwZy9zcmMvYXBwL291dC1vZi1zZXNzaW9uL2FkdmVudHVyZXMvYWR2ZW50dXJlL2FkdmVudHVyZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvb3V0LW9mLXNlc3Npb24vYWR2ZW50dXJlcy9hZHZlbnR1cmUvYWR2ZW50dXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSw4QkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUNDRjtBQUNGO0FERUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FDQUY7QURDRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDQ0o7QURBSTtFQUNFLDBCQUFBO0FDRU47QURHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREVFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0FKO0FER0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNESjtBREtBO0VBQ0UsYUFBQTtFQUNBLDREQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDRkY7QURLQTtFQUNFLGFBQUE7RUFDQSx3RUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSxrQkFBQTtBQ0ZGO0FESUU7RUFDRSxTQUFBO0FDRko7QURLRTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSE47QURNRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0pKO0FETUU7RUFDRSxpQkFBQTtBQ0pKO0FES0k7RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0FDSE47QURLSTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQ0hOO0FESU07RUFDRSxlQUFBO0FDRlI7QURJVTtFQUNFLGFBQUE7QUNGWjtBREtRO0VBQ0UsMEJBQUE7QUNIVjtBRFVBO0VBQ0U7SUFDRSw0QkFBQTtJQUNBLDRCQUFBO0VDUEY7RURTQTtJQUNFLDBCQUFBO0lBQ0EsMEJBQUE7RUNQRjtBQUNGO0FEREE7RUFDRTtJQUNFLDRCQUFBO0lBQ0EsNEJBQUE7RUNQRjtFRFNBO0lBQ0UsMEJBQUE7SUFDQSwwQkFBQTtFQ1BGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9vdXQtb2Ytc2Vzc2lvbi9hZHZlbnR1cmVzL2FkdmVudHVyZS9hZHZlbnR1cmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMzJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gIH1cbn1cblxuLmFkdmVudHVyZS1jcmVhdGlvbi1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGIge1xuICAgIGNvbG9yOiAjZjA4NzFjO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmOmhvdmVyIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbiAgfVxufVxuXG4udXNlci1zZWFyY2gtYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuXG4gIGkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA4cHg7XG4gICAgdG9wOiA4cHg7XG4gIH1cblxuICBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICB9XG59XG5cbi51c2VyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDUwMHB4LCAxZnIpKTtcbiAgZ3JpZC1nYXA6IDE2cHg7XG4gIG1hcmdpbjogMTZweCAwcHg7XG59XG5cbi51c2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYW5pbWF0aW9uOiBhbmltYXRlSW4gMC4zcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICA+IGJ1dHRvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDhweDtcbiAgICAgIHJpZ2h0OiAxMnB4O1xuICAgICAgaGVpZ2h0OiAzMnB4O1xuICB9XG5cbiAgJi1pbWcge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbiAgJi1pbmZvIHtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAmLW5hbWUge1xuICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgJi1lbWFpbCB7XG4gICAgICBmb250LWZhbWlseTogcXVpY2tzYW5kQm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XG4gICAgICBzcGFuIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgICY6YWZ0ZXJ7XG4gICAgICAgICAgICBjb250ZW50OiBcIiwgXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQGtleWZyYW1lcyBhbmltYXRlSW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzAwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG59XG4iLCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMzJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gIH1cbn1cbi5hZHZlbnR1cmUtY3JlYXRpb24tbGluayB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuLmFkdmVudHVyZS1jcmVhdGlvbi1saW5rIGIge1xuICBjb2xvcjogI2YwODcxYztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFkdmVudHVyZS1jcmVhdGlvbi1saW5rIGI6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnVzZXItc2VhcmNoLWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi51c2VyLXNlYXJjaC1ib3ggaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogOHB4O1xuICB0b3A6IDhweDtcbn1cbi51c2VyLXNlYXJjaC1ib3ggaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xufVxuXG4udXNlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg1MDBweCwgMWZyKSk7XG4gIGdyaWQtZ2FwOiAxNnB4O1xuICBtYXJnaW46IDE2cHggMHB4O1xufVxuXG4udXNlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGFuaW1hdGlvbjogYW5pbWF0ZUluIDAuM3M7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udXNlciBwIHtcbiAgbWFyZ2luOiAwO1xufVxuLnVzZXIgPiBidXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICByaWdodDogMTJweDtcbiAgaGVpZ2h0OiAzMnB4O1xufVxuLnVzZXItaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLnVzZXItaW5mbyB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuLnVzZXItaW5mby1uYW1lIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIG1hcmdpbi1ib3R0b206IDRweCAhaW1wb3J0YW50O1xufVxuLnVzZXItaW5mby1lbWFpbCB7XG4gIGZvbnQtZmFtaWx5OiBxdWlja3NhbmRCb2xkO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XG59XG4udXNlci1pbmZvLWVtYWlsIHNwYW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udXNlci1pbmZvLWVtYWlsIHNwYW46bm90KDpsYXN0LWNoaWxkKTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiLCBcIjtcbn1cbi51c2VyLWluZm8tZW1haWwgc3Bhbjpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGVJbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMDBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdventureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-adventure',
          templateUrl: './adventure.component.html',
          styleUrls: ['./adventure.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]
        }, {
          type: _services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]
        }, {
          type: src_app_shared_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]
        }, {
          type: src_app_shared_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }, {
          type: _services_adventure_service__WEBPACK_IMPORTED_MODULE_5__["AdventureService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/out-of-session/adventures/my-adventures/my-adventures.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/out-of-session/adventures/my-adventures/my-adventures.component.ts ***!
    \************************************************************************************/

  /*! exports provided: MyAdventuresComponent */

  /***/
  function srcAppOutOfSessionAdventuresMyAdventuresMyAdventuresComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyAdventuresComponent", function () {
      return MyAdventuresComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_utils_mocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/utils/mocks */
    "./src/app/utils/mocks.ts");
    /* harmony import */


    var src_app_shared_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/loading/loading.service */
    "./src/app/shared/loading/loading.service.ts");
    /* harmony import */


    var src_app_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/token-storage.service */
    "./src/app/token-storage.service.ts");
    /* harmony import */


    var _services_adventure_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/adventure.service */
    "./src/app/out-of-session/services/adventure.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_master_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/master-icon */
    "./src/app/shared/master-icon.ts");

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function MyAdventuresComponent_div_10_span_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "/social/profile/" + player_r7.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r7.userName);
      }
    }

    function MyAdventuresComponent_div_10_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "master-icon", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MyAdventuresComponent_div_10_div_16_ul_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "FOR:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "CON:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "SAB:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "DES:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "INT:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "CAR:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", player_r8.strength, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", player_r8.constitution, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", player_r8.wisdom, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", player_r8.dexterity, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0 ", player_r8.intelligence, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", player_r8.charisma, "");
      }
    }

    var _c1 = function _c1(a0) {
      return {
        order: a0
      };
    };

    var _c2 = function _c2(a0) {
      return {
        "font-size": a0
      };
    };

    var _c3 = function _c3(a0) {
      return {
        "my-character": a0
      };
    };

    var _c4 = function _c4(a0) {
      return {
        width: a0
      };
    };

    function MyAdventuresComponent_div_10_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MyAdventuresComponent_div_10_div_16_ul_21_Template, 25, 6, "ul", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r8 = ctx.$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c1, player_r8.userId === ctx_r4.user.id ? 0 - 1 : 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c2, player_r8.userId === ctx_r4.user.id ? "18px" : "14px"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", player_r8.name, ", Lv.", player_r8.nivel, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c3, player_r8.userId === ctx_r4.user.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", player_r8.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("HP: ", player_r8.lifePoints, " / ", player_r8.totalLifePoints, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c4, "" + player_r8.lifePoints * 100 / player_r8.totalLifePoints + "%"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("MP: ", player_r8.manaPoints, " / ", player_r8.totalManaPoints, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c4, "" + player_r8.manaPoints * 100 / player_r8.totalManaPoints + "%"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "../assets/images/" + player_r8["class"].id + ".jpeg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", player_r8.race.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", player_r8["class"].name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", player_r8.userId === ctx_r4.user.id);
      }
    }

    function MyAdventuresComponent_div_10_button_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Iniciar Sess\xE3o ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var adventure_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, "/session/" + adventure_r1.id));
      }
    }

    function MyAdventuresComponent_div_10_button_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Entrar na Sess\xE3o ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var adventure_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, "/session/" + adventure_r1.id));
      }
    }

    function MyAdventuresComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Mestre: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Participantes: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MyAdventuresComponent_div_10_span_14_Template, 2, 4, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MyAdventuresComponent_div_10_div_15_Template, 2, 0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MyAdventuresComponent_div_10_div_16_Template, 22, 26, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MyAdventuresComponent_div_10_button_18_Template, 2, 3, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MyAdventuresComponent_div_10_button_19_Template, 2, 3, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var adventure_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", adventure_r1.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](adventure_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, "/social/profile/" + adventure_r1.mestre.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](adventure_r1.mestre.userName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", adventure_r1.users);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", adventure_r1.mestre.id === ctx_r0.user.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", adventure_r1.players);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", adventure_r1.mestre.id === ctx_r0.user.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", adventure_r1.mestre.id !== ctx_r0.user.id);
      }
    }

    var _c5 = function _c5() {
      return ["/adventures/new"];
    };

    var MyAdventuresComponent = /*#__PURE__*/function () {
      function MyAdventuresComponent(loadingService, tokenService, adventureService) {
        _classCallCheck(this, MyAdventuresComponent);

        this.loadingService = loadingService;
        this.tokenService = tokenService;
        this.adventureService = adventureService;
        this.adventures = [];
        this.searchedAdventures = [];
      }

      _createClass(MyAdventuresComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          // this.user = this.tokenService.getLoggedUser();
          this.user = src_app_utils_mocks__WEBPACK_IMPORTED_MODULE_1__["usersMock"][0];
          this.adventureService.findByUserId(2).subscribe(function (response) {
            _this2.adventures = response;
            _this2.searchedAdventures = _this2.adventures;
          });
        }
      }, {
        key: "handleSearchUser",
        value: function handleSearchUser(event) {
          var searchText = event.currentTarget.value;

          if (searchText.length > 0) {
            this.searchedAdventures = this.adventures.filter(function (adventure) {
              return adventure.name.toLowerCase().includes(searchText.toLowerCase()) || adventure.mestre.userName.toLowerCase().includes(searchText.toLowerCase());
            });
          } else {
            this.searchedAdventures = this.adventures;
          }
        }
      }]);

      return MyAdventuresComponent;
    }();

    MyAdventuresComponent.ɵfac = function MyAdventuresComponent_Factory(t) {
      return new (t || MyAdventuresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_adventure_service__WEBPACK_IMPORTED_MODULE_4__["AdventureService"]));
    };

    MyAdventuresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyAdventuresComponent,
      selectors: [["app-my-adventures"]],
      decls: 11,
      vars: 3,
      consts: [[1, "container"], [1, "adventure-creation-link", "text-theme-black"], [3, "routerLink"], [1, "user-search-box"], [1, "material-icons", "text-theme-black"], ["type", "text", "placeholder", "Digite o nome do mestre ou da aventura", 1, "input", 3, "input"], [1, "adventure-container"], ["class", "adventure bg-theme", 4, "ngFor", "ngForOf"], [1, "adventure", "bg-theme"], [1, "adventure-header"], [3, "src"], [1, "adventure-header-info"], [1, "user-info-email", "text-theme-black"], [3, "routerLink", 4, "ngFor", "ngForOf"], ["class", "master-emblem bg-theme", 4, "ngIf"], ["class", "player-info", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "master-actions"], ["class", "button--outline text-theme-black", 3, "routerLink", 4, "ngIf"], [1, "master-emblem", "bg-theme"], ["width", "28", "height", "28"], [1, "player-info", 3, "ngStyle"], [1, "text-theme-black", 3, "ngStyle"], [1, "player-status"], [1, "player-status-profile", 3, "ngClass"], [1, "border-theme", 3, "src"], [1, "player-status-profile-points"], [1, "life-points", "border-theme"], [1, "life-points-bar", 3, "ngStyle"], [1, "mana-points", "border-theme"], [1, "mana-points-bar", 3, "ngStyle"], [1, "player-status-profile-info"], ["alt", "class-icon", 3, "src"], [1, "text-theme-black"], ["class", "status", 4, "ngIf"], [1, "status"], [1, "button--outline", "text-theme-black", 3, "routerLink"]],
      template: function MyAdventuresComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Deseja criar uma nova aventura? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Crie uma nova aventura agora.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MyAdventuresComponent_Template_input_input_8_listener($event) {
            return ctx.handleSearchUser($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MyAdventuresComponent_div_10_Template, 20, 11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.searchedAdventures);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_master_icon__WEBPACK_IMPORTED_MODULE_7__["MasterIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]],
      styles: ["@media only screen and (min-width: 720px) {\n  .container[_ngcontent-%COMP%] {\n    flex-direction: row !important;\n    margin-left: 32px;\n    margin-right: 32px;\n  }\n}\n.adventure-creation-link[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 1.2rem;\n}\n.adventure-creation-link[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #f0871c;\n  cursor: pointer;\n}\n.adventure-creation-link[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.user-search-box[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 16px;\n}\n.user-search-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 8px;\n  top: 8px;\n}\n.user-search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 40px;\n}\n.adventure-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-gap: 16px;\n  margin: 20px 0px;\n}\n.adventure-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  position: relative;\n  width: 100%;\n  border-bottom: 2px solid #ccc;\n  padding-bottom: 4px;\n  margin-bottom: 8px;\n  order: -2;\n}\n.adventure-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 75px;\n  height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.adventure-header-info[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: 8px;\n}\n.adventure-header-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0px 16px 4px 0px;\n}\n.adventure-header[_ngcontent-%COMP%]   .master-emblem[_ngcontent-%COMP%] {\n  position: absolute;\n  border: 2px solid #ccc;\n  border-radius: 50%;\n  right: -16px;\n  top: -20px;\n  padding: 4px;\n}\n.adventure-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.adventure-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:last-child):after {\n  content: \", \";\n}\n.adventure-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.player-info[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  margin: 8px 0px;\n  position: relative;\n}\n.player-info[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  height: 1px;\n  width: 80%;\n  right: 0px;\n  margin: 0 auto;\n  background-color: #ccc;\n  bottom: -13px;\n}\n.player-info[_ngcontent-%COMP%]   .player-status[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.player-info[_ngcontent-%COMP%]   .player-status-profile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n}\n.player-info[_ngcontent-%COMP%]   .player-status-profile.my-character[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  align-items: flex-end;\n}\n.player-info[_ngcontent-%COMP%]   .player-status-profile.my-character[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 125px;\n  height: 125px;\n  border-radius: 4px;\n}\n.player-info[_ngcontent-%COMP%]   .player-status-profile.my-character[_ngcontent-%COMP%]   .player-status-profile-points[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  left: calc(125px + 16px);\n  margin: 0px;\n}\n.player-info[_ngcontent-%COMP%]   .player-status-profile.my-character[_ngcontent-%COMP%]   .player-status-profile-info[_ngcontent-%COMP%] {\n  flex-direction: column;\n  text-align: center;\n}\n.player-info[_ngcontent-%COMP%]   .player-status-profile.my-character[_ngcontent-%COMP%]   .player-status-profile-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n.player-info[_ngcontent-%COMP%]   .player-status-profile.my-character[_ngcontent-%COMP%]   ul.status[_ngcontent-%COMP%] {\n  list-style-type: none;\n  display: flex;\n  flex-flow: row wrap;\n  padding: 0px;\n  margin: 0px 0px 10px 10px;\n  flex: 1;\n}\n.player-info[_ngcontent-%COMP%]   .player-status-profile.my-character[_ngcontent-%COMP%]   ul.status[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.player-info[_ngcontent-%COMP%]   .player-status-profile.my-character[_ngcontent-%COMP%]   ul.status[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.player-info[_ngcontent-%COMP%]   .player-status-profile[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  border: 2px solid;\n}\n.player-info[_ngcontent-%COMP%]   .player-status-profile-points[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-left: -16px;\n  z-index: -1;\n  margin-top: 4px;\n}\n.player-info[_ngcontent-%COMP%]   .player-status-profile-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding-left: 16px;\n}\n.player-info[_ngcontent-%COMP%]   .player-status-profile-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  margin-right: 8px;\n}\n.player-info[_ngcontent-%COMP%]   .player-status-profile-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n.player-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0px;\n  flex: 1;\n  flex-basis: 100%;\n  width: 100%;\n}\n.player-info[_ngcontent-%COMP%]   .life-points[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.player-info[_ngcontent-%COMP%]   .mana-points[_ngcontent-%COMP%] {\n  width: 90%;\n}\n.player-info[_ngcontent-%COMP%]   .life-points[_ngcontent-%COMP%], .player-info[_ngcontent-%COMP%]   .mana-points[_ngcontent-%COMP%] {\n  border: 1px solid;\n  border-radius: 2px;\n  margin-bottom: 4px;\n  padding-left: 16px;\n  position: relative;\n}\n.player-info[_ngcontent-%COMP%]   .life-points[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .player-info[_ngcontent-%COMP%]   .mana-points[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  z-index: 1;\n  color: #000;\n  font-weight: bold;\n  font-size: 12px;\n}\n.player-info[_ngcontent-%COMP%]   .life-points-bar[_ngcontent-%COMP%] {\n  background-color: #44be44;\n  position: absolute;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  z-index: -1;\n}\n.player-info[_ngcontent-%COMP%]   .mana-points-bar[_ngcontent-%COMP%] {\n  background-color: #2587ff;\n  position: absolute;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  z-index: -1;\n}\n.adventure[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  border-radius: 6px;\n  padding: 4px;\n  border: 1px solid #ccc;\n  -webkit-animation: animateIn 0.3s;\n          animation: animateIn 0.3s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  position: relative;\n  display: flex;\n  flex-flow: column nowrap;\n}\n.adventure[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.master-actions[_ngcontent-%COMP%] {\n  order: 2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 16px;\n}\n@-webkit-keyframes animateIn {\n  0% {\n    transform: translateX(500px);\n    transform: translateY(300px);\n  }\n  100% {\n    transform: translateX(0px);\n    transform: translateY(0px);\n  }\n}\n@keyframes animateIn {\n  0% {\n    transform: translateX(500px);\n    transform: translateY(300px);\n  }\n  100% {\n    transform: translateX(0px);\n    transform: translateY(0px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21icmF6L0RvY3VtZW50cy9lcGljLXF1ZXN0LXJwZy9lcGljLXF1ZXN0LXJwZy9zcmMvYXBwL291dC1vZi1zZXNzaW9uL2FkdmVudHVyZXMvbXktYWR2ZW50dXJlcy9teS1hZHZlbnR1cmVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9vdXQtb2Ytc2Vzc2lvbi9hZHZlbnR1cmVzL215LWFkdmVudHVyZXMvbXktYWR2ZW50dXJlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsOEJBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VDQ0Y7QUFDRjtBREVBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQ0FGO0FEQ0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQUk7RUFDRSwwQkFBQTtBQ0VOO0FER0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDQUY7QURFRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNBSjtBREdFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDREo7QURLQTtFQUNFLGFBQUE7RUFDQSw0REFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0ZGO0FES0E7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDRkY7QURHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0RKO0FER0U7RUFDRSxPQUFBO0VBQ0EsZ0JBQUE7QUNESjtBREVJO0VBQUssd0JBQUE7QUNDVDtBRENFO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQ0o7QURDRTtFQUNFLGVBQUE7QUNDSjtBRENNO0VBQ0UsYUFBQTtBQ0NSO0FERUk7RUFDRSwwQkFBQTtBQ0FOO0FES0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRkY7QURJRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNGSjtBREtFO0VBQ0UsV0FBQTtBQ0hKO0FES0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSE47QURLTTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtBQ0hSO0FESVE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDRlY7QURJUTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtBQ0ZWO0FESVE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0FDRlY7QURHVTtFQUFNLFdBQUE7QUNBaEI7QURFUTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsT0FBQTtBQ0FWO0FEQ1U7RUFDRSxVQUFBO0FDQ1o7QURBWTtFQUNFLGVBQUE7QUNFZDtBREdNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0RSO0FER007RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0RSO0FER007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRFI7QURFUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBVjtBREVRO0VBQ0UsV0FBQTtBQ0FWO0FETUU7RUFDRSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0pKO0FETUU7RUFDRSxXQUFBO0FDSko7QURNRTtFQUNFLFVBQUE7QUNKSjtBRE1FO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0pKO0FETUk7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0pOO0FET0U7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0xKO0FET0U7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0xKO0FEU0E7RUFDRSx3RUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQ05GO0FEUUU7RUFDRSxTQUFBO0FDTko7QUQyQkE7RUFDRSxRQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDeEJGO0FEMkJBO0VBQ0U7SUFDRSw0QkFBQTtJQUNBLDRCQUFBO0VDeEJGO0VEMEJBO0lBQ0UsMEJBQUE7SUFDQSwwQkFBQTtFQ3hCRjtBQUNGO0FEZ0JBO0VBQ0U7SUFDRSw0QkFBQTtJQUNBLDRCQUFBO0VDeEJGO0VEMEJBO0lBQ0UsMEJBQUE7SUFDQSwwQkFBQTtFQ3hCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvb3V0LW9mLXNlc3Npb24vYWR2ZW50dXJlcy9teS1hZHZlbnR1cmVzL215LWFkdmVudHVyZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMzJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gIH1cbn1cblxuLmFkdmVudHVyZS1jcmVhdGlvbi1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGIge1xuICAgIGNvbG9yOiAjZjA4NzFjO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmOmhvdmVyIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbiAgfVxufVxuXG4udXNlci1zZWFyY2gtYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuXG4gIGkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA4cHg7XG4gICAgdG9wOiA4cHg7XG4gIH1cblxuICBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICB9XG59XG5cbi5hZHZlbnR1cmUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICBncmlkLWdhcDogMTZweDtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbn1cblxuLmFkdmVudHVyZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIG9yZGVyOiAtMjtcbiAgaW1nIHtcbiAgICB3aWR0aDogNzVweDtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbiAgJi1pbmZvIHtcbiAgICBmbGV4OiAxO1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgaDIgeyBtYXJnaW46IDBweCAxNnB4IDRweCAwcHg7IH1cbiAgfVxuICAubWFzdGVyLWVtYmxlbSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHJpZ2h0OiAtMTZweDtcbiAgICB0b3A6IC0yMHB4O1xuICAgIHBhZGRpbmc6IDRweDtcbiAgfVxuICBzcGFuIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICY6YWZ0ZXJ7XG4gICAgICAgIGNvbnRlbnQ6IFwiLCBcIlxuICAgICAgfVxuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbiAgfVxufVxuXG4ucGxheWVyLWluZm8ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgbWFyZ2luOiA4cHggMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICByaWdodDogMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgYm90dG9tOiAtMTNweDtcbiAgfVxuXG4gIC5wbGF5ZXItc3RhdHVzIHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgICYtcHJvZmlsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBcbiAgICAgICYubXktY2hhcmFjdGVyIHtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgID4gaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTI1cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMjVweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnBsYXllci1zdGF0dXMtcHJvZmlsZS1wb2ludHMge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICBsZWZ0OiBjYWxjKDEyNXB4ICsgMTZweCk7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnBsYXllci1zdGF0dXMtcHJvZmlsZS1pbmZvIHtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBpbWcgeyBtYXJnaW46IDBweCB9XG4gICAgICAgIH1cbiAgICAgICAgdWwuc3RhdHVzIHtcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICBtYXJnaW46IDBweCAwcHggMTBweCAxMHB4O1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICA+IGltZyB7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkO1xuICAgICAgfVxuICAgICAgJi1wb2ludHMge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICB9XG4gICAgICAmLWluZm8ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaDQge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZsZXg6IDE7XG4gICAgZmxleC1iYXNpczogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAubGlmZS1wb2ludHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5tYW5hLXBvaW50cyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuICAubGlmZS1wb2ludHMsIC5tYW5hLXBvaW50cyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgc3BhbiB7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gIH1cbiAgLmxpZmUtcG9pbnRzLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0YmU0NDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB6LWluZGV4OiAtMTtcbiAgfVxuICAubWFuYS1wb2ludHMtYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjU4N2ZmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHotaW5kZXg6IC0xO1xuICB9XG59XG5cbi5hZHZlbnR1cmUge1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBhbmltYXRpb246IGFuaW1hdGVJbiAwLjNzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG5cbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLy8gPiBidXR0b24ge1xuICAvLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAvLyAgICAgdG9wOiA4cHg7XG4gIC8vICAgICByaWdodDogMTJweDtcbiAgLy8gICAgIGhlaWdodDogMzJweDtcbiAgLy8gfVxuXG4gIC8vICYtaW1nIHtcbiAgLy8gICB3aWR0aDogMTAwcHg7XG4gIC8vICAgaGVpZ2h0OiBhdXRvO1xuICAvLyAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAvLyB9XG5cbiAgICAgIFxuICAvLyAgIH1cbiAgLy8gfVxufVxuXG4ubWFzdGVyLWFjdGlvbnMge1xuICBvcmRlcjogMjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbkBrZXlmcmFtZXMgYW5pbWF0ZUluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgfVxufVxuIiwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICB9XG59XG4uYWR2ZW50dXJlLWNyZWF0aW9uLWxpbmsge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbi5hZHZlbnR1cmUtY3JlYXRpb24tbGluayBiIHtcbiAgY29sb3I6ICNmMDg3MWM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hZHZlbnR1cmUtY3JlYXRpb24tbGluayBiOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi51c2VyLXNlYXJjaC1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4udXNlci1zZWFyY2gtYm94IGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDhweDtcbiAgdG9wOiA4cHg7XG59XG4udXNlci1zZWFyY2gtYm94IGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbn1cblxuLmFkdmVudHVyZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gIGdyaWQtZ2FwOiAxNnB4O1xuICBtYXJnaW46IDIwcHggMHB4O1xufVxuXG4uYWR2ZW50dXJlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjY2M7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgb3JkZXI6IC0yO1xufVxuLmFkdmVudHVyZS1oZWFkZXIgaW1nIHtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogNzVweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uYWR2ZW50dXJlLWhlYWRlci1pbmZvIHtcbiAgZmxleDogMTtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi5hZHZlbnR1cmUtaGVhZGVyLWluZm8gaDIge1xuICBtYXJnaW46IDBweCAxNnB4IDRweCAwcHg7XG59XG4uYWR2ZW50dXJlLWhlYWRlciAubWFzdGVyLWVtYmxlbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICByaWdodDogLTE2cHg7XG4gIHRvcDogLTIwcHg7XG4gIHBhZGRpbmc6IDRweDtcbn1cbi5hZHZlbnR1cmUtaGVhZGVyIHNwYW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWR2ZW50dXJlLWhlYWRlciBzcGFuOm5vdCg6bGFzdC1jaGlsZCk6YWZ0ZXIge1xuICBjb250ZW50OiBcIiwgXCI7XG59XG4uYWR2ZW50dXJlLWhlYWRlciBzcGFuOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5wbGF5ZXItaW5mbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBtYXJnaW46IDhweCAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wbGF5ZXItaW5mbzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiA4MCU7XG4gIHJpZ2h0OiAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBib3R0b206IC0xM3B4O1xufVxuLnBsYXllci1pbmZvIC5wbGF5ZXItc3RhdHVzIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucGxheWVyLWluZm8gLnBsYXllci1zdGF0dXMtcHJvZmlsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wbGF5ZXItaW5mbyAucGxheWVyLXN0YXR1cy1wcm9maWxlLm15LWNoYXJhY3RlciB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLnBsYXllci1pbmZvIC5wbGF5ZXItc3RhdHVzLXByb2ZpbGUubXktY2hhcmFjdGVyID4gaW1nIHtcbiAgd2lkdGg6IDEyNXB4O1xuICBoZWlnaHQ6IDEyNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ucGxheWVyLWluZm8gLnBsYXllci1zdGF0dXMtcHJvZmlsZS5teS1jaGFyYWN0ZXIgLnBsYXllci1zdGF0dXMtcHJvZmlsZS1wb2ludHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiBjYWxjKDEyNXB4ICsgMTZweCk7XG4gIG1hcmdpbjogMHB4O1xufVxuLnBsYXllci1pbmZvIC5wbGF5ZXItc3RhdHVzLXByb2ZpbGUubXktY2hhcmFjdGVyIC5wbGF5ZXItc3RhdHVzLXByb2ZpbGUtaW5mbyB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wbGF5ZXItaW5mbyAucGxheWVyLXN0YXR1cy1wcm9maWxlLm15LWNoYXJhY3RlciAucGxheWVyLXN0YXR1cy1wcm9maWxlLWluZm8gaW1nIHtcbiAgbWFyZ2luOiAwcHg7XG59XG4ucGxheWVyLWluZm8gLnBsYXllci1zdGF0dXMtcHJvZmlsZS5teS1jaGFyYWN0ZXIgdWwuc3RhdHVzIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4IDBweCAxMHB4IDEwcHg7XG4gIGZsZXg6IDE7XG59XG4ucGxheWVyLWluZm8gLnBsYXllci1zdGF0dXMtcHJvZmlsZS5teS1jaGFyYWN0ZXIgdWwuc3RhdHVzIGxpIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5wbGF5ZXItaW5mbyAucGxheWVyLXN0YXR1cy1wcm9maWxlLm15LWNoYXJhY3RlciB1bC5zdGF0dXMgbGkgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5wbGF5ZXItaW5mbyAucGxheWVyLXN0YXR1cy1wcm9maWxlID4gaW1nIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQ7XG59XG4ucGxheWVyLWluZm8gLnBsYXllci1zdGF0dXMtcHJvZmlsZS1wb2ludHMge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIHotaW5kZXg6IC0xO1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG4ucGxheWVyLWluZm8gLnBsYXllci1zdGF0dXMtcHJvZmlsZS1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuLnBsYXllci1pbmZvIC5wbGF5ZXItc3RhdHVzLXByb2ZpbGUtaW5mbyBpbWcge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5wbGF5ZXItaW5mbyAucGxheWVyLXN0YXR1cy1wcm9maWxlLWluZm8gcCB7XG4gIG1hcmdpbjogMHB4O1xufVxuLnBsYXllci1pbmZvIGg0IHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZsZXg6IDE7XG4gIGZsZXgtYmFzaXM6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnBsYXllci1pbmZvIC5saWZlLXBvaW50cyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnBsYXllci1pbmZvIC5tYW5hLXBvaW50cyB7XG4gIHdpZHRoOiA5MCU7XG59XG4ucGxheWVyLWluZm8gLmxpZmUtcG9pbnRzLCAucGxheWVyLWluZm8gLm1hbmEtcG9pbnRzIHtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wbGF5ZXItaW5mbyAubGlmZS1wb2ludHMgc3BhbiwgLnBsYXllci1pbmZvIC5tYW5hLXBvaW50cyBzcGFuIHtcbiAgei1pbmRleDogMTtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucGxheWVyLWluZm8gLmxpZmUtcG9pbnRzLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NGJlNDQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICB6LWluZGV4OiAtMTtcbn1cbi5wbGF5ZXItaW5mbyAubWFuYS1wb2ludHMtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1ODdmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uYWR2ZW50dXJlIHtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYW5pbWF0aW9uOiBhbmltYXRlSW4gMC4zcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xufVxuLmFkdmVudHVyZSBwIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubWFzdGVyLWFjdGlvbnMge1xuICBvcmRlcjogMjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbkBrZXlmcmFtZXMgYW5pbWF0ZUluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyAdventuresComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-my-adventures',
          templateUrl: './my-adventures.component.html',
          styleUrls: ['./my-adventures.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_shared_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"]
        }, {
          type: src_app_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]
        }, {
          type: _services_adventure_service__WEBPACK_IMPORTED_MODULE_4__["AdventureService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/out-of-session/adventures/new-adventure/new-adventure.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/out-of-session/adventures/new-adventure/new-adventure.component.ts ***!
    \************************************************************************************/

  /*! exports provided: NewAdventureComponent */

  /***/
  function srcAppOutOfSessionAdventuresNewAdventureNewAdventureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewAdventureComponent", function () {
      return NewAdventureComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/token-storage.service */
    "./src/app/token-storage.service.ts");
    /* harmony import */


    var src_app_authentication_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/authentication/services/user.service */
    "./src/app/authentication/services/user.service.ts");
    /* harmony import */


    var src_app_shared_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/loading/loading.service */
    "./src/app/shared/loading/loading.service.ts");
    /* harmony import */


    var src_app_shared_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/alert.service */
    "./src/app/shared/alert.service.ts");
    /* harmony import */


    var _services_adventure_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/adventure.service */
    "./src/app/out-of-session/services/adventure.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-chips */
    "./node_modules/ngx-chips/__ivy_ngcc__/fesm2015/ngx-chips.js");

    var NewAdventureComponent = /*#__PURE__*/function () {
      function NewAdventureComponent(tokenService, userService, loadingService, alertService, adventureService) {
        _classCallCheck(this, NewAdventureComponent);

        this.tokenService = tokenService;
        this.userService = userService;
        this.loadingService = loadingService;
        this.alertService = alertService;
        this.adventureService = adventureService;
        this.users = [];
        this.allUsers = [];
        this.adventureUsers = [];
      }

      _createClass(NewAdventureComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.loggedUser = this.tokenService.getLoggedUser();
          var idsMap = [];
          this.userService.findAll().subscribe(function (response) {
            _this3.allUsers = response;

            _this3.userService.getFriends().subscribe(function (f) {
              idsMap = f.map(function (e) {
                return e.id;
              });
            }).add(function () {
              _this3.users = response.map(function (e) {
                return {
                  display: e.userName,
                  value: e.id
                };
              }).filter(function (u) {
                return idsMap.includes(u.value);
              });
            }); // this.adventureUsers = response;
            // this.users = response.filter(e => e.id !== this.loggedUser.id && idsMap.includes(e.id))

          });
        }
      }, {
        key: "saveAdventure",
        value: function saveAdventure() {
          var _this4 = this;

          this.loadingService.startLoadingBar();
          var adventure = {
            name: this.adventureName,
            description: this.adventureDescription,
            photoUrl: this.adventurePhotoUrl,
            users: this.allUsers.filter(function (u) {
              return _this4.adventureUsers.map(function (e) {
                return e.value;
              }).includes(u.id);
            }),
            mestre: this.allUsers.filter(function (u) {
              return u.id === _this4.loggedUser.id;
            })[0]
          };
          console.log('salvando aventura: ', adventure);
          this.adventureService.saveAdventure(adventure).subscribe(function (response) {
            console.log('AVENTURA CRIADA!! ', response);

            _this4.loadingService.stopLoadingBar();

            _this4.alertService.success('aventura criada com sucesso.');
          }, function (err) {
            _this4.loadingService.stopLoadingBar();

            _this4.alertService.error('erro ao criar aventura.');
          });
        }
      }]);

      return NewAdventureComponent;
    }();

    NewAdventureComponent.ɵfac = function NewAdventureComponent_Factory(t) {
      return new (t || NewAdventureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_authentication_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_adventure_service__WEBPACK_IMPORTED_MODULE_5__["AdventureService"]));
    };

    NewAdventureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewAdventureComponent,
      selectors: [["app-new-adventure"]],
      decls: 26,
      vars: 11,
      consts: [[1, "container"], [1, "auth-form-container"], [1, "register-form-header"], [1, "auth-form"], [1, "field"], ["for", "name"], ["placeholder", "nome da aventura", "id", "name", 1, "input", 3, "ngModel", "ngModelChange"], ["for", "foto"], ["placeholder", "foto da aventura", "id", "foto", 1, "input", 3, "ngModel", "ngModelChange"], ["for", "description"], ["placeholder", "descri\xE7\xE3o da aventura", "id", "description", 1, "input", 3, "ngModel", "ngModelChange"], ["for", "players"], [3, "placeholder", "secondaryPlaceholder", "ngModel", "identifyBy", "displayBy", "onlyFromAutocomplete", "ngModelChange"], [3, "showDropdownIfEmpty", "autocompleteItems"], [1, "auth-form-actions"], [1, "button--primary", 3, "click"]],
      template: function NewAdventureComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Criar uma nova aventura");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewAdventureComponent_Template_input_ngModelChange_9_listener($event) {
            return ctx.adventureName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Foto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewAdventureComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.adventurePhotoUrl = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Descri\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "textarea", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewAdventureComponent_Template_textarea_ngModelChange_17_listener($event) {
            return ctx.adventureDescription = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Participantes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tag-input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewAdventureComponent_Template_tag_input_ngModelChange_21_listener($event) {
            return ctx.adventureUsers = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "tag-input-dropdown", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewAdventureComponent_Template_button_click_24_listener() {
            return ctx.saveAdventure();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Criar Aventura ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.adventureName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.adventurePhotoUrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.adventureDescription);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "+ jogador")("secondaryPlaceholder", "adicionar um jogador")("ngModel", ctx.adventureUsers)("identifyBy", "id")("displayBy", "userName")("onlyFromAutocomplete", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showDropdownIfEmpty", true)("autocompleteItems", ctx.users);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], ngx_chips__WEBPACK_IMPORTED_MODULE_7__["TagInputComponent"], ngx_chips__WEBPACK_IMPORTED_MODULE_7__["TagInputDropdown"]],
      styles: ["@media only screen and (min-width: 720px) {\n  .container[_ngcontent-%COMP%] {\n    flex-direction: row !important;\n    margin-left: 32px;\n    margin-right: 32px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21icmF6L0RvY3VtZW50cy9lcGljLXF1ZXN0LXJwZy9lcGljLXF1ZXN0LXJwZy9zcmMvYXBwL291dC1vZi1zZXNzaW9uL2FkdmVudHVyZXMvbmV3LWFkdmVudHVyZS9uZXctYWR2ZW50dXJlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9vdXQtb2Ytc2Vzc2lvbi9hZHZlbnR1cmVzL25ldy1hZHZlbnR1cmUvbmV3LWFkdmVudHVyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsOEJBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VDQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL291dC1vZi1zZXNzaW9uL2FkdmVudHVyZXMvbmV3LWFkdmVudHVyZS9uZXctYWR2ZW50dXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICB9XG59IiwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewAdventureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-new-adventure',
          templateUrl: './new-adventure.component.html',
          styleUrls: ['./new-adventure.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]
        }, {
          type: src_app_authentication_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: src_app_shared_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]
        }, {
          type: src_app_shared_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }, {
          type: _services_adventure_service__WEBPACK_IMPORTED_MODULE_5__["AdventureService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/out-of-session/components/bottom-navbar/bottom-navbar.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/out-of-session/components/bottom-navbar/bottom-navbar.component.ts ***!
    \************************************************************************************/

  /*! exports provided: BottomNavbarComponent */

  /***/
  function srcAppOutOfSessionComponentsBottomNavbarBottomNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BottomNavbarComponent", function () {
      return BottomNavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "active": a0
      };
    };

    var BottomNavbarComponent = /*#__PURE__*/function () {
      function BottomNavbarComponent(router) {
        _classCallCheck(this, BottomNavbarComponent);

        this.router = router;
      }

      _createClass(BottomNavbarComponent, [{
        key: "isActive",
        value: function isActive(menu) {
          var activeUrl = this.router.url;
          if (activeUrl === '/home' && menu === 'home') return true;else if (activeUrl === '/reports' && menu === 'reports') return true;else if (activeUrl === '/settings' && menu === 'settings') return true;
          return false;
        }
      }, {
        key: "navigateTo",
        value: function navigateTo(url) {
          this.router.navigateByUrl(url);
        }
      }]);

      return BottomNavbarComponent;
    }();

    BottomNavbarComponent.ɵfac = function BottomNavbarComponent_Factory(t) {
      return new (t || BottomNavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    BottomNavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BottomNavbarComponent,
      selectors: [["bottom-navbar"]],
      decls: 16,
      vars: 15,
      consts: [[1, "bottom-navbar"], [1, "bottom-navbar-item--main", 3, "ngClass", "click"], [1, "material-icons"], [1, "bottom-navbar-item", 3, "ngClass"], [1, "bottom-navbar-item", 3, "ngClass", "click"]],
      template: function BottomNavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BottomNavbarComponent_Template_div_click_1_listener() {
            return ctx.navigateTo("/home");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BottomNavbarComponent_Template_div_click_7_listener() {
            return ctx.navigateTo("/reports");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "bar_chart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "person");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BottomNavbarComponent_Template_div_click_13_listener() {
            return ctx.navigateTo("/settings");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.isActive("home")));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.isActive("")));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.isActive("reports")));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.isActive("")));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.isActive("settings")));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: ["@media only screen and (min-width: 720px) {\n  .bottom-navbar[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.bottom-navbar[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 56px;\n  display: flex;\n  flex-direction: row;\n  border-top: 1px solid #ccc;\n}\n.bottom-navbar-item[_ngcontent-%COMP%] {\n  flex: 1;\n  border-right: 1px solid #ccc;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.bottom-navbar-item[_ngcontent-%COMP%]:last-child {\n  border-right: 0px;\n}\n.bottom-navbar-item--main[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  position: absolute;\n  top: -20px;\n  left: calc(50% - 20px);\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  background-color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.active[_ngcontent-%COMP%] {\n  background-color: orangered;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21icmF6L0RvY3VtZW50cy9lcGljLXF1ZXN0LXJwZy9lcGljLXF1ZXN0LXJwZy9zcmMvYXBwL291dC1vZi1zZXNzaW9uL2NvbXBvbmVudHMvYm90dG9tLW5hdmJhci9ib3R0b20tbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9vdXQtb2Ytc2Vzc2lvbi9jb21wb25lbnRzL2JvdHRvbS1uYXZiYXIvYm90dG9tLW5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0Usd0JBQUE7RUNDRjtBQUNGO0FEQ0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FDQ0Y7QURDRTtFQUNFLE9BQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0o7QURDSTtFQUNFLGlCQUFBO0FDQ047QURFSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0FOO0FES0E7RUFDRSwyQkFBQTtFQUNBLFlBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL291dC1vZi1zZXNzaW9uL2NvbXBvbmVudHMvYm90dG9tLW5hdmJhci9ib3R0b20tbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjBweCkge1xuICAuYm90dG9tLW5hdmJhciB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG4uYm90dG9tLW5hdmJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1NnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcblxuICAmLWl0ZW0ge1xuICAgIGZsZXg6IDE7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLXJpZ2h0OiAwcHg7XG4gICAgfVxuXG4gICAgJi0tbWFpbiB7XG4gICAgICB3aWR0aDogNTZweDtcbiAgICAgIGhlaWdodDogNTZweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogLTIwcHg7XG4gICAgICBsZWZ0OiBjYWxjKDUwJSAtIDIwcHgpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgfVxufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xuICBjb2xvcjogd2hpdGU7XG59IiwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjBweCkge1xuICAuYm90dG9tLW5hdmJhciB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG4uYm90dG9tLW5hdmJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1NnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbn1cbi5ib3R0b20tbmF2YmFyLWl0ZW0ge1xuICBmbGV4OiAxO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5ib3R0b20tbmF2YmFyLWl0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogMHB4O1xufVxuLmJvdHRvbS1uYXZiYXItaXRlbS0tbWFpbiB7XG4gIHdpZHRoOiA1NnB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjBweDtcbiAgbGVmdDogY2FsYyg1MCUgLSAyMHB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BottomNavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'bottom-navbar',
          templateUrl: './bottom-navbar.component.html',
          styleUrls: ['./bottom-navbar.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/out-of-session/components/sidebar/sidebar.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/out-of-session/components/sidebar/sidebar.component.ts ***!
    \************************************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppOutOfSessionComponentsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/token-storage.service */
    "./src/app/token-storage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_adventure_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/adventure-icon */
    "./src/app/shared/adventure-icon.ts");
    /* harmony import */


    var _shared_rules_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/rules-icon */
    "./src/app/shared/rules-icon.ts");
    /* harmony import */


    var _shared_cog_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/cog-icon */
    "./src/app/shared/cog-icon.ts");
    /* harmony import */


    var _shared_exit_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/exit-icon */
    "./src/app/shared/exit-icon.ts");

    var _c0 = function _c0() {
      return ["/adventures/mine"];
    };

    var _c1 = function _c1() {
      return ["/adventures/list"];
    };

    var _c2 = function _c2() {
      return ["/adventures/new"];
    };

    var _c3 = function _c3(a0) {
      return [a0];
    };

    var _c4 = function _c4() {
      return ["/social/explore"];
    };

    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent(tokenStorageService, router) {
        _classCallCheck(this, SidebarComponent);

        this.tokenStorageService = tokenStorageService;
        this.router = router;
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userId = this.tokenStorageService.getLoggedUser().id;
        }
      }, {
        key: "openRules",
        value: function openRules() {
          document.querySelector('#rules').classList.add('showModal');
        }
      }, {
        key: "logout",
        value: function logout() {
          this.tokenStorageService.signOut();
          this.router.navigate(['/auth/login']);
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["sidebar"]],
      decls: 31,
      vars: 11,
      consts: [[1, "sidebar", "bg-theme", "text-theme"], [1, "sidebar-header"], ["src", "../../../../assets/images/epicquest.png", "alt", "logo"], [1, "sidebar-section", "bg-theme-hover"], ["width", "28", "height", "30"], [1, "sidebar-section-options"], [1, "bg-theme-hover", 3, "routerLink"], [1, "sidebar-section", "bg-theme-hover", 3, "click"], ["width", "28", "height", "28"], ["width", "26", "height", "26"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "adventure-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Aventuras");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Minhas Aventuras ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Explorar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Criar Aventura ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_14_listener() {
            return ctx.openRules();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "rules-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Regras");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "cog-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Social");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Meu Perfil ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Explorar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_27_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "exit-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Sair");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c3, "/social/profile/" + ctx.userId));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4));
        }
      },
      directives: [_shared_adventure_icon__WEBPACK_IMPORTED_MODULE_3__["AdventureIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _shared_rules_icon__WEBPACK_IMPORTED_MODULE_4__["RulesIcon"], _shared_cog_icon__WEBPACK_IMPORTED_MODULE_5__["CogIcon"], _shared_exit_icon__WEBPACK_IMPORTED_MODULE_6__["ExitIcon"]],
      styles: ["@media only screen and (max-width: 720px) {\n  .sidebar[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 100vh;\n  width: 240px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  margin: 16px 0px;\n}\n.sidebar-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: auto;\n  height: 64px;\n  margin-left: 16px;\n}\n.sidebar-section[_ngcontent-%COMP%] {\n  padding: 8px 0px 8px 16px;\n  display: flex;\n  align-items: center;\n  transition: all 0.3s;\n  cursor: pointer;\n}\n.sidebar-section[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  text-transform: uppercase;\n  font-family: quicksandSemiBold;\n}\n.sidebar-section-options[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n  list-style-type: none;\n}\n.sidebar-section-options[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 0px 12px 48px;\n  font-family: quicksandSemiBold;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21icmF6L0RvY3VtZW50cy9lcGljLXF1ZXN0LXJwZy9lcGljLXF1ZXN0LXJwZy9zcmMvYXBwL291dC1vZi1zZXNzaW9uL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9vdXQtb2Ytc2Vzc2lvbi9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0Usd0JBQUE7RUNDRjtBQUNGO0FERUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx3RUFBQTtBQ0FGO0FERUU7RUFDRSxnQkFBQTtBQ0FKO0FEQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ047QURHRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FDREo7QURHSTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtBQ0ROO0FESUk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FDRk47QURHTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9vdXQtb2Ytc2Vzc2lvbi9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLnNpZGViYXIge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4uc2lkZWJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDI0MHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4yNCk7XG5cbiAgJi1oZWFkZXIge1xuICAgIG1hcmdpbjogMTZweCAwcHg7XG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgfVxuICB9XG5cbiAgJi1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA4cHggMHB4IDhweCAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICA+IHNwYW4ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LWZhbWlseTogcXVpY2tzYW5kU2VtaUJvbGQ7XG4gICAgfVxuXG4gICAgJi1vcHRpb25zIHtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDBweCAxMnB4IDQ4cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBxdWlja3NhbmRTZW1pQm9sZDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSIsIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLnNpZGViYXIge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuLnNpZGViYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAyNDBweDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xufVxuLnNpZGViYXItaGVhZGVyIHtcbiAgbWFyZ2luOiAxNnB4IDBweDtcbn1cbi5zaWRlYmFyLWhlYWRlciBpbWcge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbi5zaWRlYmFyLXNlY3Rpb24ge1xuICBwYWRkaW5nOiA4cHggMHB4IDhweCAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNpZGViYXItc2VjdGlvbiA+IHNwYW4ge1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogcXVpY2tzYW5kU2VtaUJvbGQ7XG59XG4uc2lkZWJhci1zZWN0aW9uLW9wdGlvbnMge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4uc2lkZWJhci1zZWN0aW9uLW9wdGlvbnMgbGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4IDBweCAxMnB4IDQ4cHg7XG4gIGZvbnQtZmFtaWx5OiBxdWlja3NhbmRTZW1pQm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'sidebar',
          templateUrl: './sidebar.component.html',
          styleUrls: ['./sidebar.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/out-of-session/components/top-navbar/top-navbar.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/out-of-session/components/top-navbar/top-navbar.component.ts ***!
    \******************************************************************************/

  /*! exports provided: TopNavbarComponent */

  /***/
  function srcAppOutOfSessionComponentsTopNavbarTopNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopNavbarComponent", function () {
      return TopNavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_loading_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/loading/loading.service */
    "./src/app/shared/loading/loading.service.ts");
    /* harmony import */


    var src_app_authentication_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/authentication/services/user.service */
    "./src/app/authentication/services/user.service.ts");
    /* harmony import */


    var src_app_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/token-storage.service */
    "./src/app/token-storage.service.ts");
    /* harmony import */


    var _services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/notification.service */
    "./src/app/out-of-session/services/notification.service.ts");
    /* harmony import */


    var _shared_torch_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/torch-icon */
    "./src/app/shared/torch-icon.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TopNavbarComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopNavbarComponent_div_10_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.toggleNotificationOpen();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.notifications.length, " ");
      }
    }

    function TopNavbarComponent_div_11_div_1_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var notification_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", notification_r5.userId.userName, " gostaria de ser seu amigo no Epic Quest RPG.");
      }
    }

    function TopNavbarComponent_div_11_div_1_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var notification_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", notification_r5.userId.userName, " gostaria de participar da sua aventura ", notification_r5.adventure.name, ".");
      }
    }

    function TopNavbarComponent_div_11_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TopNavbarComponent_div_11_div_1_span_3_Template, 2, 1, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TopNavbarComponent_div_11_div_1_span_4_Template, 2, 2, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopNavbarComponent_div_11_div_1_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var notification_r5 = ctx.$implicit;
          var i_r6 = ctx.index;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.aceptNotification(notification_r5, i_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " aceitar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var notification_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", notification_r5.userId.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", notification_r5.userId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", notification_r5.adventure);
      }
    }

    function TopNavbarComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TopNavbarComponent_div_11_div_1_Template, 8, 3, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.notifications);
      }
    }

    var TopNavbarComponent = /*#__PURE__*/function () {
      function TopNavbarComponent(loadingService, userService, tokenService, notificationService) {
        _classCallCheck(this, TopNavbarComponent);

        this.loadingService = loadingService;
        this.userService = userService;
        this.tokenService = tokenService;
        this.notificationService = notificationService;
        this.notifications = [];
        this.isNotificationsOpened = false;
      }

      _createClass(TopNavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.loggedUser = this.tokenService.getLoggedUser();
          console.log(this.loggedUser);
          this.notificationService.findByUserId(this.loggedUser.id).subscribe(function (response) {
            console.log('MADOKA NOTIFICATIONS!', response);
            _this5.notifications = response;
          });
        }
      }, {
        key: "toggleNotificationOpen",
        value: function toggleNotificationOpen() {
          this.isNotificationsOpened = !this.isNotificationsOpened;
        }
      }, {
        key: "aceptNotification",
        value: function aceptNotification(notification, index) {
          var _this6 = this;

          this.loadingService.startLocalLoading(".notifications-list > div:nth-child(".concat(index + 1, ")"));
          this.userService.aceptFriend(notification.userId).subscribe(function (res) {
            console.log('ADICIONADO!!!!', res);
            _this6.notifications = _this6.notifications.filter(function (el) {
              return el.id !== notification.id;
            });

            _this6.loadingService.stopLocalLoading(".notifications-list > div:nth-child(".concat(index + 1, ")"));
          });
        }
      }, {
        key: "updateNotification",
        value: function updateNotification(notification, status) {// const notificationIndex = this.notifications.indexOf(notification) + 1;
          // this.loadingService.startLocalLoading(`.notifications-list > div:nth-child(${notificationIndex})`)
          // const updatedNotification: Notification = { ...notification, status: status as NotificationStatus }
          // this.notificationService.updateNotification(updatedNotification).subscribe(response => {
          //   this.notifications = this.notifications.filter(el => el.id !== response.id);
          //   this.loadingService.stopLocalLoading(`.notifications-list > div:nth-child(${notificationIndex})`);
          // })
        }
      }, {
        key: "switchTheme",
        value: function switchTheme() {
          var bodyClasses = document.querySelector('body').classList;

          if (bodyClasses.contains('light-theme')) {
            bodyClasses.remove('light-theme');
            bodyClasses.add('dark-theme');
          } else {
            bodyClasses.remove('dark-theme');
            bodyClasses.add('light-theme');
          }
        }
      }]);

      return TopNavbarComponent;
    }();

    TopNavbarComponent.ɵfac = function TopNavbarComponent_Factory(t) {
      return new (t || TopNavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_loading_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_authentication_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]));
    };

    TopNavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopNavbarComponent,
      selectors: [["top-navbar"]],
      decls: 19,
      vars: 4,
      consts: [[1, "top-navbar", "bg-theme", "text-theme"], [1, "top-navbar-left-content"], [1, "theme-switcher", 3, "click"], ["width", "32", "heigth", "32"], [1, "magic", "bg-theme"], [1, "top-navbar-right-content"], [1, "top-navbar-right-content-options"], [1, "notifications"], [1, "material-icons", 3, "click"], ["class", "notifications-quantity", 3, "click", 4, "ngIf"], ["class", "notifications-list bg-theme text-theme", 4, "ngIf"], [1, "top-navbar-right-content-info"], ["alt", "minha foto", 3, "src"], [1, "notifications-quantity", 3, "click"], [1, "notifications-list", "bg-theme", "text-theme"], [4, "ngFor", "ngForOf"], [1, "notification-user-photo", 3, "src"], [1, "notification-description"], [4, "ngIf"], [1, "notification-options"], [3, "click"]],
      template: function TopNavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopNavbarComponent_Template_div_click_2_listener() {
            return ctx.switchTheme();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "torch-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopNavbarComponent_Template_i_click_8_listener() {
            return ctx.toggleNotificationOpen();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "notifications_none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TopNavbarComponent_div_10_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TopNavbarComponent_div_11_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Dispon\xEDvel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notifications.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isNotificationsOpened);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.loggedUser.fullName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.loggedUser.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_shared_torch_icon__WEBPACK_IMPORTED_MODULE_5__["TorchIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      styles: ["@media only screen and (max-width: 720px) {\n  .top-navbar[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.top-navbar[_ngcontent-%COMP%] {\n  height: 64px;\n  position: fixed;\n  top: 16px;\n  right: 32px;\n  width: calc(100% - 64px - 240px);\n  border-radius: 6px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  z-index: 1;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n.top-navbar-left-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-left: 16px;\n}\n.top-navbar-right-content[_ngcontent-%COMP%] {\n  padding: 0px 16px;\n  display: flex;\n  align-items: center;\n}\n.top-navbar-right-content-options[_ngcontent-%COMP%] {\n  margin-right: 24px;\n}\n.top-navbar-right-content-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.top-navbar-right-content-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.top-navbar-right-content-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n.top-navbar-right-content-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n  font-family: quicksandSemiBold;\n  font-size: 1.2rem;\n}\n.top-navbar-right-content-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  border: 2px solid #f0871c;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.notifications[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n.notifications-quantity[_ngcontent-%COMP%] {\n  background-color: #f0871c;\n  color: white;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  position: absolute;\n  top: 13px;\n  right: -7px;\n  display: flex;\n  justify-content: center;\n  font-size: 0.8rem;\n  align-items: center;\n  font-weight: bold;\n}\n.notifications-list[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -50px;\n  width: 300px;\n  max-height: 300px;\n  overflow-y: auto;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  border: 1px solid #ccc;\n  -webkit-animation: show 0.3s;\n          animation: show 0.3s;\n}\n.notifications-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 8px 0px;\n  margin: 0px 8px;\n  border-bottom: 1px solid #ccc;\n  cursor: default;\n}\n.notifications-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  border-bottom: unset;\n}\n.notifications-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.notifications-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px 4px;\n  flex: 1;\n  align-self: flex-start;\n}\n.notifications-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .notification-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.notifications-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .notification-options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin: 2px 0px;\n}\n@-webkit-keyframes show {\n  from {\n    transform: scale(0, 0);\n  }\n  to {\n    transform: scale(1, 1);\n  }\n}\n@keyframes show {\n  from {\n    transform: scale(0, 0);\n  }\n  to {\n    transform: scale(1, 1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21icmF6L0RvY3VtZW50cy9lcGljLXF1ZXN0LXJwZy9lcGljLXF1ZXN0LXJwZy9zcmMvYXBwL291dC1vZi1zZXNzaW9uL2NvbXBvbmVudHMvdG9wLW5hdmJhci90b3AtbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9vdXQtb2Ytc2Vzc2lvbi9jb21wb25lbnRzL3RvcC1uYXZiYXIvdG9wLW5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0Usd0JBQUE7RUNDRjtBQUNGO0FERUE7RUFFRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLHdFQUFBO0FDREY7QURHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDREo7QURJRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDRko7QURJSTtFQUNFLGtCQUFBO0FDRk47QURJSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDRk47QURJTTtFQUNFLGtCQUFBO0FDRlI7QURHUTtFQUNFLFdBQUE7QUNEVjtBREVVO0VBQ0UsOEJBQUE7RUFDQSxpQkFBQTtBQ0FaO0FES007RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDSFI7QURTQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ05GO0FET0U7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0xKO0FET0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdFQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtVQUFBLG9CQUFBO0FDTEo7QURPSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQ0xOO0FET007RUFDRSxvQkFBQTtBQ0xSO0FEUU07RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNOUjtBRFNNO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxzQkFBQTtBQ1BSO0FEVU07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNSUjtBRFVRO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNSVjtBRGVBO0VBQ0U7SUFDRSxzQkFBQTtFQ1pGO0VEY0E7SUFDRSxzQkFBQTtFQ1pGO0FBQ0Y7QURNQTtFQUNFO0lBQ0Usc0JBQUE7RUNaRjtFRGNBO0lBQ0Usc0JBQUE7RUNaRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvb3V0LW9mLXNlc3Npb24vY29tcG9uZW50cy90b3AtbmF2YmFyL3RvcC1uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC50b3AtbmF2YmFyIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLnRvcC1uYXZiYXIge1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNBMzExO1xuICBoZWlnaHQ6IDY0cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxNnB4O1xuICByaWdodDogMzJweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDY0cHggLSAyNDBweCk7IC8vIHRhbWFuaG8gZG8gc2lkZWJhciArIG1hcmdpblxuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgei1pbmRleDogMTtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuXG4gICYtbGVmdC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICB9XG5cbiAgJi1yaWdodC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwcHggMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAmLW9wdGlvbnMge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAgIH1cbiAgICAmLWluZm8ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICBkaXYge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgIHAge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHF1aWNrc2FuZFNlbWlCb2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2YwODcxYztcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5ub3RpZmljYXRpb25zIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gICYtcXVhbnRpdHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMDg3MWM7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTNweDtcbiAgICByaWdodDogLTdweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgJi1saXN0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTUwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYW5pbWF0aW9uOiBzaG93IDAuM3M7XG5cbiAgICA+IGRpdiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDhweCAwcHg7XG4gICAgICBtYXJnaW46IDBweCA4cHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogdW5zZXQ7XG4gICAgICB9XG5cbiAgICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwcHggNHB4O1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgfVxuXG4gICAgICAubm90aWZpY2F0aW9uLW9wdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIG1hcmdpbjogMnB4IDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNob3cge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAsIDApO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICB9XG59XG4iLCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC50b3AtbmF2YmFyIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi50b3AtbmF2YmFyIHtcbiAgaGVpZ2h0OiA2NHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTZweDtcbiAgcmlnaHQ6IDMycHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA2NHB4IC0gMjQwcHgpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgei1pbmRleDogMTtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xufVxuLnRvcC1uYXZiYXItbGVmdC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuLnRvcC1uYXZiYXItcmlnaHQtY29udGVudCB7XG4gIHBhZGRpbmc6IDBweCAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRvcC1uYXZiYXItcmlnaHQtY29udGVudC1vcHRpb25zIHtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xufVxuLnRvcC1uYXZiYXItcmlnaHQtY29udGVudC1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50b3AtbmF2YmFyLXJpZ2h0LWNvbnRlbnQtaW5mbyBkaXYge1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG4udG9wLW5hdmJhci1yaWdodC1jb250ZW50LWluZm8gZGl2IHAge1xuICBtYXJnaW46IDBweDtcbn1cbi50b3AtbmF2YmFyLXJpZ2h0LWNvbnRlbnQtaW5mbyBkaXYgcDpmaXJzdC1jaGlsZCB7XG4gIGZvbnQtZmFtaWx5OiBxdWlja3NhbmRTZW1pQm9sZDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4udG9wLW5hdmJhci1yaWdodC1jb250ZW50LWluZm8gaW1nIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjA4NzFjO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLm5vdGlmaWNhdGlvbnMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ub3RpZmljYXRpb25zLXF1YW50aXR5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwODcxYztcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxM3B4O1xuICByaWdodDogLTdweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5ub3RpZmljYXRpb25zLWxpc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC01MHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGFuaW1hdGlvbjogc2hvdyAwLjNzO1xufVxuLm5vdGlmaWNhdGlvbnMtbGlzdCA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweCAwcHg7XG4gIG1hcmdpbjogMHB4IDhweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5ub3RpZmljYXRpb25zLWxpc3QgPiBkaXY6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IHVuc2V0O1xufVxuLm5vdGlmaWNhdGlvbnMtbGlzdCA+IGRpdiBpbWcge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5ub3RpZmljYXRpb25zLWxpc3QgPiBkaXYgcCB7XG4gIG1hcmdpbjogMHB4IDRweDtcbiAgZmxleDogMTtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cbi5ub3RpZmljYXRpb25zLWxpc3QgPiBkaXYgLm5vdGlmaWNhdGlvbi1vcHRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5ub3RpZmljYXRpb25zLWxpc3QgPiBkaXYgLm5vdGlmaWNhdGlvbi1vcHRpb25zIGJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAycHggMHB4O1xufVxuXG5Aa2V5ZnJhbWVzIHNob3cge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAsIDApO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopNavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'top-navbar',
          templateUrl: './top-navbar.component.html',
          styleUrls: ['./top-navbar.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_shared_loading_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"]
        }, {
          type: src_app_authentication_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: src_app_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]
        }, {
          type: _services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/out-of-session/home/home.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/out-of-session/home/home.component.ts ***!
    \*******************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppOutOfSessionHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 1,
      vars: 0,
      consts: [[1, "container"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        }
      },
      styles: ["@media only screen and (min-width: 720px) {\n  .container[_ngcontent-%COMP%] {\n    flex-direction: row !important;\n    margin-left: 32px;\n  }\n\n  .adventure-button[_ngcontent-%COMP%] {\n    flex: 1;\n    height: 100px !important;\n    font-size: 2rem !important;\n    text-align: left !important;\n  }\n  .adventure-button[_ngcontent-%COMP%]:first-child {\n    margin-right: 56px;\n  }\n  .adventure-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    left: -40px;\n    height: 140% !important;\n  }\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: calc(100% - 54px);\n  padding: 24px 32px;\n}\n.adventure-button[_ngcontent-%COMP%] {\n  border: 2px solid #f07c35;\n  border-radius: 4px;\n  margin: 24px 0px 8px 32px;\n  height: 20vh;\n  display: flex;\n  align-items: center;\n  padding-left: 120px;\n  position: relative;\n  font-size: 1.8rem;\n  text-align: center;\n}\n.adventure-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: auto;\n  position: absolute;\n  left: -48px;\n  height: 120%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21icmF6L0RvY3VtZW50cy9lcGljLXF1ZXN0LXJwZy9lcGljLXF1ZXN0LXJwZy9zcmMvYXBwL291dC1vZi1zZXNzaW9uL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvb3V0LW9mLXNlc3Npb24vaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSw4QkFBQTtJQUNBLGlCQUFBO0VDQ0Y7O0VERUE7SUFDRSxPQUFBO0lBQ0Esd0JBQUE7SUFDQSwwQkFBQTtJQUNBLDJCQUFBO0VDQ0Y7RURBRTtJQUNFLGtCQUFBO0VDRUo7RURDRTtJQUNFLFdBQUE7SUFDQSx1QkFBQTtFQ0NKO0FBQ0Y7QURHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNERjtBRElBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDREY7QURHRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvb3V0LW9mLXNlc3Npb24vaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gIH1cblxuICAuYWR2ZW50dXJlLWJ1dHRvbiB7XG4gICAgZmxleDogMTtcbiAgICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAycmVtICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1NnB4O1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICBsZWZ0OiAtNDBweDtcbiAgICAgIGhlaWdodDogMTQwJSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1NHB4KTtcbiAgcGFkZGluZzogMjRweCAzMnB4O1xufVxuXG4uYWR2ZW50dXJlLWJ1dHRvbiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmMDdjMzU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOiAyNHB4IDBweCA4cHggMzJweDtcbiAgaGVpZ2h0OiAyMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDEyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFxuICBpbWcge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTQ4cHg7XG4gICAgaGVpZ2h0OiAxMjAlO1xuICB9XG59IiwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gIH1cblxuICAuYWR2ZW50dXJlLWJ1dHRvbiB7XG4gICAgZmxleDogMTtcbiAgICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAycmVtICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICB9XG4gIC5hZHZlbnR1cmUtYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDU2cHg7XG4gIH1cbiAgLmFkdmVudHVyZS1idXR0b24gaW1nIHtcbiAgICBsZWZ0OiAtNDBweDtcbiAgICBoZWlnaHQ6IDE0MCUgIWltcG9ydGFudDtcbiAgfVxufVxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNTRweCk7XG4gIHBhZGRpbmc6IDI0cHggMzJweDtcbn1cblxuLmFkdmVudHVyZS1idXR0b24ge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjA3YzM1O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogMjRweCAwcHggOHB4IDMycHg7XG4gIGhlaWdodDogMjB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFkdmVudHVyZS1idXR0b24gaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtNDhweDtcbiAgaGVpZ2h0OiAxMjAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/out-of-session/out-of-session.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/out-of-session/out-of-session.component.ts ***!
    \************************************************************/

  /*! exports provided: OutOfSessionComponent */

  /***/
  function srcAppOutOfSessionOutOfSessionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OutOfSessionComponent", function () {
      return OutOfSessionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/top-navbar/top-navbar.component */
    "./src/app/out-of-session/components/top-navbar/top-navbar.component.ts");
    /* harmony import */


    var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/sidebar/sidebar.component */
    "./src/app/out-of-session/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_bottom_navbar_bottom_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/bottom-navbar/bottom-navbar.component */
    "./src/app/out-of-session/components/bottom-navbar/bottom-navbar.component.ts");

    var OutOfSessionComponent = function OutOfSessionComponent() {
      _classCallCheck(this, OutOfSessionComponent);
    };

    OutOfSessionComponent.ɵfac = function OutOfSessionComponent_Factory(t) {
      return new (t || OutOfSessionComponent)();
    };

    OutOfSessionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OutOfSessionComponent,
      selectors: [["app-out-of-session"]],
      decls: 5,
      vars: 0,
      consts: [[1, "content"]],
      template: function OutOfSessionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "top-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "bottom-navbar");
        }
      },
      directives: [_components_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_1__["TopNavbarComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _components_bottom_navbar_bottom_navbar_component__WEBPACK_IMPORTED_MODULE_4__["BottomNavbarComponent"]],
      styles: ["@media only screen and (max-width: 720px) {\n  .content[_ngcontent-%COMP%] {\n    width: 100% !important;\n    transform: unset !important;\n    padding-top: 8px !important;\n    height: calc(100vh - 54) !important;\n    max-height: calc(100vh - 54) !important;\n  }\n}\n.content[_ngcontent-%COMP%] {\n  width: calc(100% - 240px);\n  transform: translateX(240px);\n  height: 100vh;\n  max-height: 100vh;\n  padding-top: 80px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21icmF6L0RvY3VtZW50cy9lcGljLXF1ZXN0LXJwZy9lcGljLXF1ZXN0LXJwZy9zcmMvYXBwL291dC1vZi1zZXNzaW9uL291dC1vZi1zZXNzaW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9vdXQtb2Ytc2Vzc2lvbi9vdXQtb2Ytc2Vzc2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSwyQkFBQTtJQUNBLDJCQUFBO0lBQ0EsbUNBQUE7SUFDQSx1Q0FBQTtFQ0NGO0FBQ0Y7QURFQTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL291dC1vZi1zZXNzaW9uL291dC1vZi1zZXNzaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB0cmFuc2Zvcm06IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDhweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDU0KSAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1NCkgIWltcG9ydGFudDtcbiAgfVxufVxuXG4uY29udGVudCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNDBweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNDBweCk7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nLXRvcDogODBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufSIsIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLmNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiA4cHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NCkgIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTQpICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5jb250ZW50IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI0MHB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI0MHB4KTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmctdG9wOiA4MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OutOfSessionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-out-of-session',
          templateUrl: './out-of-session.component.html',
          styleUrls: ['./out-of-session.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/out-of-session/out-of-session.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/out-of-session/out-of-session.module.ts ***!
    \*********************************************************/

  /*! exports provided: OutOfSessionModule */

  /***/
  function srcAppOutOfSessionOutOfSessionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OutOfSessionModule", function () {
      return OutOfSessionModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _out_of_session_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./out-of-session.routing.module */
    "./src/app/out-of-session/out-of-session.routing.module.ts");
    /* harmony import */


    var _out_of_session_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./out-of-session.component */
    "./src/app/out-of-session/out-of-session.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/out-of-session/home/home.component.ts");
    /* harmony import */


    var _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./settings/settings.component */
    "./src/app/out-of-session/settings/settings.component.ts");
    /* harmony import */


    var _components_bottom_navbar_bottom_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/bottom-navbar/bottom-navbar.component */
    "./src/app/out-of-session/components/bottom-navbar/bottom-navbar.component.ts");
    /* harmony import */


    var _components_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/top-navbar/top-navbar.component */
    "./src/app/out-of-session/components/top-navbar/top-navbar.component.ts");
    /* harmony import */


    var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/sidebar/sidebar.component */
    "./src/app/out-of-session/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _shared_adventure_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../shared/adventure-icon */
    "./src/app/shared/adventure-icon.ts");
    /* harmony import */


    var _shared_maps_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../shared/maps-icon */
    "./src/app/shared/maps-icon.ts");
    /* harmony import */


    var _shared_rules_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../shared/rules-icon */
    "./src/app/shared/rules-icon.ts");
    /* harmony import */


    var _shared_exit_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../shared/exit-icon */
    "./src/app/shared/exit-icon.ts");
    /* harmony import */


    var _shared_broken_axe_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../shared/broken-axe-icon */
    "./src/app/shared/broken-axe-icon.ts");
    /* harmony import */


    var _shared_cog_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../shared/cog-icon */
    "./src/app/shared/cog-icon.ts");
    /* harmony import */


    var _shared_notification_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../shared/notification-icon */
    "./src/app/shared/notification-icon.ts");
    /* harmony import */


    var _shared_person_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../shared/person-icon */
    "./src/app/shared/person-icon.ts");
    /* harmony import */


    var _shared_torch_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../shared/torch-icon */
    "./src/app/shared/torch-icon.ts");
    /* harmony import */


    var _social_explore_explore_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./social/explore/explore.component */
    "./src/app/out-of-session/social/explore/explore.component.ts");
    /* harmony import */


    var _social_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./social/profile/profile.component */
    "./src/app/out-of-session/social/profile/profile.component.ts");
    /* harmony import */


    var _adventures_adventure_adventure_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./adventures/adventure/adventure.component */
    "./src/app/out-of-session/adventures/adventure/adventure.component.ts");
    /* harmony import */


    var _adventures_my_adventures_my_adventures_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./adventures/my-adventures/my-adventures.component */
    "./src/app/out-of-session/adventures/my-adventures/my-adventures.component.ts");
    /* harmony import */


    var _adventures_new_adventure_new_adventure_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./adventures/new-adventure/new-adventure.component */
    "./src/app/out-of-session/adventures/new-adventure/new-adventure.component.ts");
    /* harmony import */


    var ngx_chips__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ngx-chips */
    "./node_modules/ngx-chips/__ivy_ngcc__/fesm2015/ngx-chips.js");
    /* harmony import */


    var _shared_master_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ../shared/master-icon */
    "./src/app/shared/master-icon.ts");
    /* harmony import */


    var _authentication_services_user_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ../authentication/services/user.service */
    "./src/app/authentication/services/user.service.ts");
    /* harmony import */


    var _services_adventure_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./services/adventure.service */
    "./src/app/out-of-session/services/adventure.service.ts");
    /* harmony import */


    var _services_notification_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./services/notification.service */
    "./src/app/out-of-session/services/notification.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _interceptor__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ../interceptor */
    "./src/app/interceptor.ts");

    var OutOfSessionModule = function OutOfSessionModule() {
      _classCallCheck(this, OutOfSessionModule);
    };

    OutOfSessionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: OutOfSessionModule
    });
    OutOfSessionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function OutOfSessionModule_Factory(t) {
        return new (t || OutOfSessionModule)();
      },
      providers: [_authentication_services_user_service__WEBPACK_IMPORTED_MODULE_26__["UserService"], _services_adventure_service__WEBPACK_IMPORTED_MODULE_27__["AdventureService"], _services_notification_service__WEBPACK_IMPORTED_MODULE_28__["NotificationService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HTTP_INTERCEPTORS"],
        useClass: _interceptor__WEBPACK_IMPORTED_MODULE_30__["Interceptor"],
        multi: true
      }],
      imports: [[_out_of_session_routing_module__WEBPACK_IMPORTED_MODULE_3__["OutOfSessionRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_24__["TagInputModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OutOfSessionModule, {
        declarations: [_out_of_session_component__WEBPACK_IMPORTED_MODULE_4__["OutOfSessionComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_bottom_navbar_bottom_navbar_component__WEBPACK_IMPORTED_MODULE_7__["BottomNavbarComponent"], _components_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_8__["TopNavbarComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"], _social_explore_explore_component__WEBPACK_IMPORTED_MODULE_19__["ExploreComponent"], _social_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"], _adventures_adventure_adventure_component__WEBPACK_IMPORTED_MODULE_21__["AdventureComponent"], _adventures_my_adventures_my_adventures_component__WEBPACK_IMPORTED_MODULE_22__["MyAdventuresComponent"], _adventures_new_adventure_new_adventure_component__WEBPACK_IMPORTED_MODULE_23__["NewAdventureComponent"], //icons
        _shared_adventure_icon__WEBPACK_IMPORTED_MODULE_10__["AdventureIcon"], _shared_rules_icon__WEBPACK_IMPORTED_MODULE_12__["RulesIcon"], _shared_maps_icon__WEBPACK_IMPORTED_MODULE_11__["MapsIcon"], _shared_exit_icon__WEBPACK_IMPORTED_MODULE_13__["ExitIcon"], _shared_broken_axe_icon__WEBPACK_IMPORTED_MODULE_14__["BrokenAxeIcon"], _shared_cog_icon__WEBPACK_IMPORTED_MODULE_15__["CogIcon"], _shared_notification_icon__WEBPACK_IMPORTED_MODULE_16__["NotificationIcon"], _shared_person_icon__WEBPACK_IMPORTED_MODULE_17__["PersonIcon"], _shared_torch_icon__WEBPACK_IMPORTED_MODULE_18__["TorchIcon"], _shared_master_icon__WEBPACK_IMPORTED_MODULE_25__["MasterIcon"]],
        imports: [_out_of_session_routing_module__WEBPACK_IMPORTED_MODULE_3__["OutOfSessionRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_24__["TagInputModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OutOfSessionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_out_of_session_routing_module__WEBPACK_IMPORTED_MODULE_3__["OutOfSessionRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_24__["TagInputModule"]],
          declarations: [_out_of_session_component__WEBPACK_IMPORTED_MODULE_4__["OutOfSessionComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_bottom_navbar_bottom_navbar_component__WEBPACK_IMPORTED_MODULE_7__["BottomNavbarComponent"], _components_top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_8__["TopNavbarComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"], _social_explore_explore_component__WEBPACK_IMPORTED_MODULE_19__["ExploreComponent"], _social_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"], _adventures_adventure_adventure_component__WEBPACK_IMPORTED_MODULE_21__["AdventureComponent"], _adventures_my_adventures_my_adventures_component__WEBPACK_IMPORTED_MODULE_22__["MyAdventuresComponent"], _adventures_new_adventure_new_adventure_component__WEBPACK_IMPORTED_MODULE_23__["NewAdventureComponent"], //icons
          _shared_adventure_icon__WEBPACK_IMPORTED_MODULE_10__["AdventureIcon"], _shared_rules_icon__WEBPACK_IMPORTED_MODULE_12__["RulesIcon"], _shared_maps_icon__WEBPACK_IMPORTED_MODULE_11__["MapsIcon"], _shared_exit_icon__WEBPACK_IMPORTED_MODULE_13__["ExitIcon"], _shared_broken_axe_icon__WEBPACK_IMPORTED_MODULE_14__["BrokenAxeIcon"], _shared_cog_icon__WEBPACK_IMPORTED_MODULE_15__["CogIcon"], _shared_notification_icon__WEBPACK_IMPORTED_MODULE_16__["NotificationIcon"], _shared_person_icon__WEBPACK_IMPORTED_MODULE_17__["PersonIcon"], _shared_torch_icon__WEBPACK_IMPORTED_MODULE_18__["TorchIcon"], _shared_master_icon__WEBPACK_IMPORTED_MODULE_25__["MasterIcon"]],
          providers: [_authentication_services_user_service__WEBPACK_IMPORTED_MODULE_26__["UserService"], _services_adventure_service__WEBPACK_IMPORTED_MODULE_27__["AdventureService"], _services_notification_service__WEBPACK_IMPORTED_MODULE_28__["NotificationService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HTTP_INTERCEPTORS"],
            useClass: _interceptor__WEBPACK_IMPORTED_MODULE_30__["Interceptor"],
            multi: true
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/out-of-session/out-of-session.routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/out-of-session/out-of-session.routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: outOfSessionRoutes, OutOfSessionRoutingModule */

  /***/
  function srcAppOutOfSessionOutOfSessionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "outOfSessionRoutes", function () {
      return outOfSessionRoutes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OutOfSessionRoutingModule", function () {
      return OutOfSessionRoutingModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _out_of_session_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./out-of-session.component */
    "./src/app/out-of-session/out-of-session.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/out-of-session/home/home.component.ts");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../auth.guard */
    "./src/app/auth.guard.ts");
    /* harmony import */


    var _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./settings/settings.component */
    "./src/app/out-of-session/settings/settings.component.ts");
    /* harmony import */


    var _reports_and_statistics_reports_and_statistics_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./reports-and-statistics/reports-and-statistics.component */
    "./src/app/out-of-session/reports-and-statistics/reports-and-statistics.component.ts");
    /* harmony import */


    var _social_explore_explore_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./social/explore/explore.component */
    "./src/app/out-of-session/social/explore/explore.component.ts");
    /* harmony import */


    var _social_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./social/profile/profile.component */
    "./src/app/out-of-session/social/profile/profile.component.ts");
    /* harmony import */


    var _adventures_adventure_adventure_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./adventures/adventure/adventure.component */
    "./src/app/out-of-session/adventures/adventure/adventure.component.ts");
    /* harmony import */


    var _adventures_new_adventure_new_adventure_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./adventures/new-adventure/new-adventure.component */
    "./src/app/out-of-session/adventures/new-adventure/new-adventure.component.ts");
    /* harmony import */


    var _adventures_my_adventures_my_adventures_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./adventures/my-adventures/my-adventures.component */
    "./src/app/out-of-session/adventures/my-adventures/my-adventures.component.ts");

    var HOME = {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    };
    var SETTINGS = {
      path: 'settings',
      component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    };
    var REPORTS_AND_STATISTICS = {
      path: 'reports',
      component: _reports_and_statistics_reports_and_statistics_component__WEBPACK_IMPORTED_MODULE_9__["ReportsAndStatisticsComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    };
    var SOCIAL = {
      path: 'social/explore',
      component: _social_explore_explore_component__WEBPACK_IMPORTED_MODULE_10__["ExploreComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    };
    var PROFILE = {
      path: 'social/profile/:id',
      component: _social_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    };
    var ADVENTURES = {
      path: 'adventures/list',
      component: _adventures_adventure_adventure_component__WEBPACK_IMPORTED_MODULE_12__["AdventureComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    };
    var MY_ADVENTURES = {
      path: 'adventures/mine',
      component: _adventures_my_adventures_my_adventures_component__WEBPACK_IMPORTED_MODULE_14__["MyAdventuresComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    };
    var NEW_ADVENTURE = {
      path: 'adventures/new',
      component: _adventures_new_adventure_new_adventure_component__WEBPACK_IMPORTED_MODULE_13__["NewAdventureComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    };
    var outOfSessionRoutes = [{
      path: '',
      component: _out_of_session_component__WEBPACK_IMPORTED_MODULE_5__["OutOfSessionComponent"],
      children: [{
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      }, HOME, SETTINGS, REPORTS_AND_STATISTICS, SOCIAL, PROFILE, ADVENTURES, MY_ADVENTURES, NEW_ADVENTURE]
    }];

    var OutOfSessionRoutingModule = function OutOfSessionRoutingModule() {
      _classCallCheck(this, OutOfSessionRoutingModule);
    };

    OutOfSessionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: OutOfSessionRoutingModule
    });
    OutOfSessionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function OutOfSessionRoutingModule_Factory(t) {
        return new (t || OutOfSessionRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(outOfSessionRoutes), _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](OutOfSessionRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](OutOfSessionRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(outOfSessionRoutes), _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/out-of-session/reports-and-statistics/reports-and-statistics.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/out-of-session/reports-and-statistics/reports-and-statistics.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: ReportsAndStatisticsComponent */

  /***/
  function srcAppOutOfSessionReportsAndStatisticsReportsAndStatisticsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportsAndStatisticsComponent", function () {
      return ReportsAndStatisticsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ReportsAndStatisticsComponent = /*#__PURE__*/function () {
      function ReportsAndStatisticsComponent() {
        _classCallCheck(this, ReportsAndStatisticsComponent);
      }

      _createClass(ReportsAndStatisticsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ReportsAndStatisticsComponent;
    }();

    ReportsAndStatisticsComponent.ɵfac = function ReportsAndStatisticsComponent_Factory(t) {
      return new (t || ReportsAndStatisticsComponent)();
    };

    ReportsAndStatisticsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReportsAndStatisticsComponent,
      selectors: [["app-reports-and-statistics"]],
      decls: 2,
      vars: 0,
      template: function ReportsAndStatisticsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Em breve!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsAndStatisticsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-reports-and-statistics',
          templateUrl: './reports-and-statistics.component.html',
          styles: [""]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/out-of-session/services/notification.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/out-of-session/services/notification.service.ts ***!
    \*****************************************************************/

  /*! exports provided: NotificationService */

  /***/
  function srcAppOutOfSessionServicesNotificationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
      return NotificationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_utils_mocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/utils/mocks */
    "./src/app/utils/mocks.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var url = 'http://localhost:8085/api/v1/notification';

    var NotificationService = /*#__PURE__*/function () {
      function NotificationService(httpClient) {
        _classCallCheck(this, NotificationService);

        this.httpClient = httpClient;
      }

      _createClass(NotificationService, [{
        key: "findByUserId",
        value: function findByUserId(userId) {
          return this.httpClient.get("".concat(url, "/getById/").concat(userId)); //return of(notificationsMock);
        }
      }, {
        key: "findAll",
        value: function findAll() {
          return this.httpClient.get("".concat(url, "/getAll")); //return of(notificationsMock);
        }
      }, {
        key: "createNotification",
        value: function createNotification(notification) {
          return this.httpClient.post("".concat(url, "/create"), notification);
        }
      }, {
        key: "updateNotification",
        value: function updateNotification(notification) {
          // return this.httpClient.put<Notification>(`${url}/`, notification);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(src_app_utils_mocks__WEBPACK_IMPORTED_MODULE_2__["notificationsMock"][0]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(2000));
        }
      }]);

      return NotificationService;
    }();

    NotificationService.ɵfac = function NotificationService_Factory(t) {
      return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NotificationService,
      factory: NotificationService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/out-of-session/settings/settings.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/out-of-session/settings/settings.component.ts ***!
    \***************************************************************/

  /*! exports provided: SettingsComponent */

  /***/
  function srcAppOutOfSessionSettingsSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
      return SettingsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/token-storage.service */
    "./src/app/token-storage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SettingsComponent = /*#__PURE__*/function () {
      function SettingsComponent(tokenStorageService, router) {
        _classCallCheck(this, SettingsComponent);

        this.tokenStorageService = tokenStorageService;
        this.router = router;
      }

      _createClass(SettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          this.tokenStorageService.signOut();
          this.router.navigate(['/auth/login']);
        }
      }]);

      return SettingsComponent;
    }();

    SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
      return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SettingsComponent,
      selectors: [["app-settings"]],
      decls: 13,
      vars: 0,
      consts: [[3, "click"]],
      template: function SettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "tema");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "editar dados");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "gerenciar notifica\xE7\xF5es");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "sobre esta vers\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "ajuda");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_li_click_11_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "sair");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-settings',
          templateUrl: './settings.component.html',
          styles: [""]
        }]
      }], function () {
        return [{
          type: src_app_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/out-of-session/social/explore/explore.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/out-of-session/social/explore/explore.component.ts ***!
    \********************************************************************/

  /*! exports provided: ExploreComponent */

  /***/
  function srcAppOutOfSessionSocialExploreExploreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExploreComponent", function () {
      return ExploreComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_authentication_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/authentication/services/user.service */
    "./src/app/authentication/services/user.service.ts");
    /* harmony import */


    var src_app_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/token-storage.service */
    "./src/app/token-storage.service.ts");
    /* harmony import */


    var src_app_shared_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/loading/loading.service */
    "./src/app/shared/loading/loading.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ExploreComponent_h2_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " N\xE3o foram encontrados usu\xE1rios. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ExploreComponent_div_7_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "person_add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ExploreComponent_div_7_i_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "how_to_reg");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ExploreComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExploreComponent_div_7_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var user_r2 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.handleSendNotification(user_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExploreComponent_div_7_i_2_Template, 2, 0, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExploreComponent_div_7_i_3_Template, 2, 0, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r2 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.usersIdNotification.includes(user_r2.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.usersIdNotification.includes(user_r2.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", user_r2.photoUrl ? user_r2.photoUrl : "assets/images/pinguim.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.userName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.description);
      }
    }

    var ExploreComponent = /*#__PURE__*/function () {
      function ExploreComponent(userService, tokenService, loadingService) {
        _classCallCheck(this, ExploreComponent);

        this.userService = userService;
        this.tokenService = tokenService;
        this.loadingService = loadingService;
        this.users = [];
        this.searchedUsers = [];
        this.usersIdNotification = [];
        this.allNotifications = [];
        this.isLoading = false;
      }

      _createClass(ExploreComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.loadingService.startLoadingBar();
          this.isLoading = true;
          this.loggedUser = this.tokenService.getLoggedUser();
          this.userService.getFriends().subscribe(function (friends) {
            _this7.loggedUser.friendList = friends;
          }).add(function () {
            _this7.userService.findAll().subscribe(function (response) {
              var idsMap = [];

              if (_this7.loggedUser.friendList && _this7.loggedUser.friendList.length > 0) {
                idsMap = _this7.loggedUser.friendList.map(function (e) {
                  return e.id;
                });
              }

              _this7.users = response.filter(function (u) {
                return u.id !== _this7.loggedUser.id && !idsMap.includes(u.id);
              });
              _this7.searchedUsers = _this7.users;
            }).add(function () {
              _this7.loadingService.stopLoadingBar();

              _this7.isLoading = false;
            });
          });
        }
      }, {
        key: "handleSearchUser",
        value: function handleSearchUser(event) {
          var searchText = event.currentTarget.value;

          if (searchText.length > 0) {
            this.searchedUsers = this.users.filter(function (user) {
              return user.userName.toLowerCase().includes(searchText.toLowerCase()) || user.email.toLowerCase().includes(searchText.toLowerCase());
            });
          } else {
            this.searchedUsers = this.users;
          }
        }
      }, {
        key: "handleSendNotification",
        value: function handleSendNotification(user) {
          var _this8 = this;

          this.userService.addFriend(user).subscribe(function (response) {
            console.log(response);

            _this8.usersIdNotification.push(user.id);
          });
        }
      }]);

      return ExploreComponent;
    }();

    ExploreComponent.ɵfac = function ExploreComponent_Factory(t) {
      return new (t || ExploreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_authentication_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]));
    };

    ExploreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExploreComponent,
      selectors: [["app-explore"]],
      decls: 8,
      vars: 2,
      consts: [[1, "container"], [1, "user-search-box"], [1, "material-icons", "text-theme-black"], ["type", "text", "placeholder", "Digite o nome ou e-mail do usu\xE1rio", 1, "input", 3, "input"], [1, "user-container"], [4, "ngIf"], ["class", "user bg-theme", 4, "ngFor", "ngForOf"], [1, "user", "bg-theme"], [1, "bg-theme-hover", 3, "click"], ["class", "material-icons text-theme-black", 4, "ngIf"], [1, "user-img", 3, "src"], [1, "user-info", "text-theme-black"], [1, "user-info-name"], [1, "user-info-email"], [1, "user-info-description"]],
      template: function ExploreComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ExploreComponent_Template_input_input_4_listener($event) {
            return ctx.handleSearchUser($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExploreComponent_h2_6_Template, 2, 0, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExploreComponent_div_7_Template, 12, 6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchedUsers.length === 0 && !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.searchedUsers);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: ["@media only screen and (min-width: 720px) {\n  .container[_ngcontent-%COMP%] {\n    flex-direction: row !important;\n    margin-left: 32px;\n    margin-right: 32px;\n  }\n}\n.user-search-box[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 16px;\n}\n.user-search-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 8px;\n  top: 8px;\n}\n.user-search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 40px;\n}\n.user-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));\n  grid-gap: 16px;\n  margin: 16px 0px;\n}\n.user[_ngcontent-%COMP%] {\n  display: flex;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  border-radius: 6px;\n  padding: 4px;\n  border: 1px solid #ccc;\n  -webkit-animation: animateIn 0.3s;\n          animation: animateIn 0.3s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  position: relative;\n  cursor: pointer;\n}\n.user[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.user[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 12px;\n  cursor: pointer;\n  border-radius: 50%;\n  height: 32px;\n  width: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  border: 0px;\n}\n.user[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n.user-img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: auto;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.user-info[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.user-info-name[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  margin-bottom: 4px !important;\n}\n.user-info-email[_ngcontent-%COMP%] {\n  font-family: quicksandBold;\n  font-size: 0.8rem;\n  margin-bottom: 8px !important;\n}\n@-webkit-keyframes animateIn {\n  0% {\n    transform: translateX(500px);\n    transform: translateY(300px);\n  }\n  100% {\n    transform: translateX(0px);\n    transform: translateY(0px);\n  }\n}\n@keyframes animateIn {\n  0% {\n    transform: translateX(500px);\n    transform: translateY(300px);\n  }\n  100% {\n    transform: translateX(0px);\n    transform: translateY(0px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21icmF6L0RvY3VtZW50cy9lcGljLXF1ZXN0LXJwZy9lcGljLXF1ZXN0LXJwZy9zcmMvYXBwL291dC1vZi1zZXNzaW9uL3NvY2lhbC9leHBsb3JlL2V4cGxvcmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL291dC1vZi1zZXNzaW9uL3NvY2lhbC9leHBsb3JlL2V4cGxvcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLDhCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQ0NGO0FBQ0Y7QURFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREVFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0FKO0FER0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNESjtBREtBO0VBQ0UsYUFBQTtFQUNBLDREQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDRkY7QURLQTtFQUNFLGFBQUE7RUFDQSx3RUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNGRjtBRElFO0VBQ0UsU0FBQTtBQ0ZKO0FES0U7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQ0hOO0FESUk7RUFDRSxpQkFBQTtBQ0ZOO0FET0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNMSjtBRE9FO0VBQ0UsaUJBQUE7QUNMSjtBRE1JO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtBQ0pOO0FETUk7RUFDRSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUNKTjtBRFNBO0VBQ0U7SUFDRSw0QkFBQTtJQUNBLDRCQUFBO0VDTkY7RURRQTtJQUNFLDBCQUFBO0lBQ0EsMEJBQUE7RUNORjtBQUNGO0FERkE7RUFDRTtJQUNFLDRCQUFBO0lBQ0EsNEJBQUE7RUNORjtFRFFBO0lBQ0UsMEJBQUE7SUFDQSwwQkFBQTtFQ05GO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9vdXQtb2Ytc2Vzc2lvbi9zb2NpYWwvZXhwbG9yZS9leHBsb3JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICB9XG59XG5cbi51c2VyLXNlYXJjaC1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG5cbiAgaSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDhweDtcbiAgICB0b3A6IDhweDtcbiAgfVxuXG4gIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIH1cbn1cblxuLnVzZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzgwcHgsIDFmcikpO1xuICBncmlkLWdhcDogMTZweDtcbiAgbWFyZ2luOiAxNnB4IDBweDtcbn1cblxuLnVzZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBhbmltYXRpb246IGFuaW1hdGVJbiAwLjNzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgPiBidXR0b24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA4cHg7XG4gICAgICByaWdodDogMTJweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGhlaWdodDogMzJweDtcbiAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyOiAwcHg7XG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgIFxuICAgIH1cbiAgfVxuXG4gICYtaW1nIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICB9XG4gICYtaW5mbyB7XG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgJi1uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgICYtZW1haWwge1xuICAgICAgZm9udC1mYW1pbHk6IHF1aWNrc2FuZEJvbGQ7XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGVJbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMDBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbn1cbiIsIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzIwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xuICAgIG1hcmdpbi1yaWdodDogMzJweDtcbiAgfVxufVxuLnVzZXItc2VhcmNoLWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi51c2VyLXNlYXJjaC1ib3ggaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogOHB4O1xuICB0b3A6IDhweDtcbn1cbi51c2VyLXNlYXJjaC1ib3ggaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xufVxuXG4udXNlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzODBweCwgMWZyKSk7XG4gIGdyaWQtZ2FwOiAxNnB4O1xuICBtYXJnaW46IDE2cHggMHB4O1xufVxuXG4udXNlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGFuaW1hdGlvbjogYW5pbWF0ZUluIDAuM3M7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi51c2VyIHAge1xuICBtYXJnaW46IDA7XG59XG4udXNlciA+IGJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIHJpZ2h0OiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDBweDtcbn1cbi51c2VyID4gYnV0dG9uIGkge1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cbi51c2VyLWltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi51c2VyLWluZm8ge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbi51c2VyLWluZm8tbmFtZSB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBtYXJnaW4tYm90dG9tOiA0cHggIWltcG9ydGFudDtcbn1cbi51c2VyLWluZm8tZW1haWwge1xuICBmb250LWZhbWlseTogcXVpY2tzYW5kQm9sZDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIG1hcmdpbi1ib3R0b206IDhweCAhaW1wb3J0YW50O1xufVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGVJbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMDBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExploreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-explore',
          templateUrl: './explore.component.html',
          styleUrls: ['./explore.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_authentication_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }, {
          type: src_app_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]
        }, {
          type: src_app_shared_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/out-of-session/social/profile/profile.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/out-of-session/social/profile/profile.component.ts ***!
    \********************************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppOutOfSessionSocialProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/loading/loading.service */
    "./src/app/shared/loading/loading.service.ts");
    /* harmony import */


    var src_app_shared_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/alert.service */
    "./src/app/shared/alert.service.ts");
    /* harmony import */


    var src_app_authentication_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/authentication/services/user.service */
    "./src/app/authentication/services/user.service.ts");
    /* harmony import */


    var src_app_token_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/token-storage.service */
    "./src/app/token-storage.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_broken_axe_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/broken-axe-icon */
    "./src/app/shared/broken-axe-icon.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function ProfileComponent_div_0_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_div_0_button_2_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.toggleIsEditing();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_div_0_h4_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.user.userName, " ");
      }
    }

    function ProfileComponent_div_0_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "nome");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_0_div_5_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r14.user.userName = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.user.userName);
      }
    }

    function ProfileComponent_div_0_p_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.user.email);
      }
    }

    function ProfileComponent_div_0_input_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_0_input_10_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r16.user.email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.email);
      }
    }

    function ProfileComponent_div_0_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "foto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_0_div_11_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r18.user.photoUrl = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.user.photoUrl);
      }
    }

    function ProfileComponent_div_0_p_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.user.description);
      }
    }

    function ProfileComponent_div_0_textarea_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "textarea", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_0_textarea_16_Template_textarea_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r20.user.description = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.user.description);
      }
    }

    function ProfileComponent_div_0_div_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_17_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r22.toggleIsEditing();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Cancelar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_17_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r24.updateUser();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Salvar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function ProfileComponent_div_0_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Ver");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Perfil");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var friend_r25 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", friend_r25.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](friend_r25.userName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, "/social/profile/" + friend_r25.id));
      }
    }

    function ProfileComponent_div_0_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "broken-axe-icon", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Ops! Este usu\xE1rio ainda n\xE3o adicionou nenhum amigo. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_div_0_button_2_Template, 3, 0, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileComponent_div_0_h4_4_Template, 2, 1, "h4", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProfileComponent_div_0_div_5_Template, 4, 1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "e-mail");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfileComponent_div_0_p_9_Template, 2, 1, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProfileComponent_div_0_input_10_Template, 1, 1, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProfileComponent_div_0_div_11_Template, 4, 1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "sobre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProfileComponent_div_0_p_15_Template, 2, 1, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProfileComponent_div_0_textarea_16_Template, 1, 1, "textarea", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProfileComponent_div_0_div_17_Template, 5, 0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "amigos");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProfileComponent_div_0_div_23_Template, 8, 5, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProfileComponent_div_0_div_24_Template, 4, 0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " aventuras e conquistas ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "broken-axe-icon", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Ops! Este usu\xE1rio ainda n\xE3o participa de nenhuma aventura. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isEditable && !ctx_r0.isEditing);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.user.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isEditing);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isEditing);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isEditing);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isEditing);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isEditing);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isEditing);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isEditing);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isEditing);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.user.friendList);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.user.friendList || ctx_r0.user.friendList.length === 0);
      }
    }

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(activatedRoute, router, loadingService, alertService, userService, tokenService) {
        var _this9 = this;

        _classCallCheck(this, ProfileComponent);

        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loadingService = loadingService;
        this.alertService = alertService;
        this.userService = userService;
        this.tokenService = tokenService;
        this.isEditing = false;
        this.isEditable = false;

        this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
        };

        this.router.events.subscribe(function (evt) {
          if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            _this9.router.navigated = false;
          }
        });
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          var urlId = parseInt(this.activatedRoute.snapshot.params.id, 10);

          if (this.tokenService.getLoggedUser().id === urlId) {
            this.isEditable = true;
          }

          this.loadingService.startLoadingBar();
          this.userService.findById(urlId).subscribe(function (response) {
            _this10.user = response;

            _this10.userService.getFriends().subscribe(function (friends) {
              _this10.loadingService.stopLoadingBar();

              _this10.user.friendList = friends;
              console.log('SOMOS AMIGOS DO PEITO', friends);
            });
          }, function (err) {
            _this10.loadingService.stopLoadingBar();

            _this10.alertService.error('Erro ao buscar usuário.');
          });
        }
      }, {
        key: "toggleIsEditing",
        value: function toggleIsEditing() {
          this.isEditing = !this.isEditing;
        }
      }, {
        key: "updateUser",
        value: function updateUser() {
          var _this11 = this;

          this.loadingService.startLoadingBar();
          var userToSave = Object.assign({}, this.user);
          delete userToSave.friendList;
          console.log(this.user);
          this.userService.updateUser(userToSave).subscribe(function (response) {
            _this11.loadingService.stopLoadingBar();

            _this11.alertService.success('Usuário salvo com sucesso.');
          }, function (err) {
            _this11.alertService.success('Erro ao salvar usuário.');

            _this11.loadingService.stopLoadingBar();
          });
          this.toggleIsEditing();
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_authentication_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"]));
    };

    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      decls: 1,
      vars: 1,
      consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "profile-card", "box-shadow-theme", "bg-theme", "text-theme"], ["class", "edit-photo info bg-theme-hover text-theme-black", 3, "click", 4, "ngIf"], ["alt", "profile picture", 1, "profile-card-img", 3, "src"], ["class", "profile-card-title text-theme-black", 4, "ngIf"], ["class", "profile-card-info", "style", "margin-top: 16px", 4, "ngIf"], [1, "profile-card-info"], ["class", "text-theme-black", 4, "ngIf"], ["class", "input text-theme-black", "type", "text", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "profile-card-info", 4, "ngIf"], ["style", "resize: none", "class", "input text-theme-black", "type", "text", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "profile-card-actions", 4, "ngIf"], [1, "profile-group-card"], [1, "profile-card-title", "text-theme-black"], [1, "friends-container"], ["class", "friend", 4, "ngFor", "ngForOf"], ["class", "empty-content", 4, "ngIf"], [1, "empty-content"], ["width", "80", "height", "80"], [1, "text-theme-black"], [1, "edit-photo", "info", "bg-theme-hover", "text-theme-black", 3, "click"], [1, "material-icons"], [1, "profile-card-info", 2, "margin-top", "16px"], ["type", "text", 1, "input", "text-theme-black", 3, "ngModel", "ngModelChange"], ["type", "text", 1, "input", "text-theme-black", 2, "resize", "none", 3, "ngModel", "ngModelChange"], [1, "profile-card-actions"], [1, "button--default", 3, "click"], [1, "button--primary", 3, "click"], [1, "friend"], ["alt", "friend photo", 3, "src"], [3, "routerLink"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileComponent_div_0_Template, 32, 12, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _shared_broken_axe_icon__WEBPACK_IMPORTED_MODULE_7__["BrokenAxeIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["@media only screen and (max-width: 720px) {\n  .container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column !important;\n  }\n\n  .profile-group-card[_ngcontent-%COMP%] {\n    margin-left: 0px !important;\n  }\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: 32px;\n  margin-right: 32px;\n}\n.profile-card[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  flex: 1;\n  margin-top: 16px;\n  position: relative;\n}\n.profile-card[_ngcontent-%COMP%]   .edit-photo[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  cursor: pointer;\n  border-radius: 50%;\n  height: 32px;\n  width: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  border: 1px solid #000;\n}\n.profile-card[_ngcontent-%COMP%]   .edit-photo.info[_ngcontent-%COMP%] {\n  top: 304px;\n  border: 0px;\n}\n.profile-card-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  border-top-right-radius: 6px;\n  border-top-left-radius: 6px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.profile-card-title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  text-align: center;\n  font-family: quicksandSemiBold;\n  text-decoration: underline;\n}\n.profile-card-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 8px;\n  padding: 0px 8px;\n  font-size: 1.1rem;\n}\n.profile-card-info[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.profile-card-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0px;\n}\n.profile-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n.profile-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0px 8px 8px 4px;\n}\n.friends-container[_ngcontent-%COMP%] {\n  max-height: 200px;\n  overflow-y: auto;\n}\n.friends-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.friends-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #ccc;\n}\n.friends-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #f0871c;\n}\n.friends-container[_ngcontent-%COMP%]   .friend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border-bottom: 1px solid #ccc;\n  position: relative;\n}\n.friends-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.friends-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px 0px 0px 8px;\n}\n.friends-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  text-align: center;\n  right: 8px;\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n.friends-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.empty-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  text-align: center;\n}\n.profile-group-card[_ngcontent-%COMP%] {\n  margin-left: 24px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21icmF6L0RvY3VtZW50cy9lcGljLXF1ZXN0LXJwZy9lcGljLXF1ZXN0LXJwZy9zcmMvYXBwL291dC1vZi1zZXNzaW9uL3NvY2lhbC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL291dC1vZi1zZXNzaW9uL3NvY2lhbC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGFBQUE7SUFDQSxpQ0FBQTtFQ0NGOztFRENBO0lBQ0UsMkJBQUE7RUNFRjtBQUNGO0FEQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURFQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0FDQ0o7QURBSTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FDRU47QURFRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNBSjtBREVFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7QUNBSjtBREVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQUo7QURDSTtFQUNFLGVBQUE7QUNDTjtBRENJO0VBQ0UsZUFBQTtBQ0NOO0FERUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0FKO0FERUk7RUFDRSx1QkFBQTtBQ0FOO0FES0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDRkY7QURHRTtFQUNFLFVBQUE7QUNESjtBREdFO0VBQ0UsZ0JBQUE7QUNESjtBREdFO0VBQ0UsbUJBQUE7QUNESjtBREdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FDREo7QURHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0RKO0FER0U7RUFDRSx1QkFBQTtBQ0RKO0FER0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0RKO0FERUk7RUFDRSwwQkFBQTtBQ0FOO0FES0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDRkY7QURLQTtFQUNFLGlCQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvb3V0LW9mLXNlc3Npb24vc29jaWFsL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnByb2ZpbGUtZ3JvdXAtY2FyZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tbGVmdDogMzJweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xufVxuXG4ucHJvZmlsZS1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmbGV4OiAxO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLmVkaXQtcGhvdG8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDRweDtcbiAgICByaWdodDogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgICYuaW5mbyB7XG4gICAgICB0b3A6IDMwNHB4O1xuICAgICAgYm9yZGVyOiAwcHg7XG4gICAgfVxuICB9XG5cbiAgJi1pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbiAgJi10aXRsZSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IHF1aWNrc2FuZFNlbWlCb2xkO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG4gICYtaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBwYWRkaW5nOiAwcHggOHB4O1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gICAgcCB7XG4gICAgICBtYXJnaW46IDRweCAwcHg7XG4gICAgfVxuICB9XG4gICYtYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICBidXR0b24ge1xuICAgICAgbWFyZ2luOiAwcHggOHB4IDhweCA0cHg7XG4gICAgfVxuICB9XG59XG5cbi5mcmllbmRzLWNvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDhweDtcbiAgfVxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogI2NjYztcbiAgfVxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogI2YwODcxYztcbiAgfVxuICAuZnJpZW5kIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgaW1nIHtcbiAgICB3aWR0aDogMzZweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbiAgcCB7XG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCA4cHg7XG4gIH1cbiAgc3BhbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICByaWdodDogOHB4O1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmOmhvdmVyIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbiAgfVxufVxuXG4uZW1wdHktY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcm9maWxlLWdyb3VwLWNhcmQge1xuICBtYXJnaW4tbGVmdDogMjRweDtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn0iLCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnByb2ZpbGUtZ3JvdXAtY2FyZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG59XG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gIG1hcmdpbi1yaWdodDogMzJweDtcbn1cblxuLnByb2ZpbGUtY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZmxleDogMTtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2ZpbGUtY2FyZCAuZWRpdC1waG90byB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0cHg7XG4gIHJpZ2h0OiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAzMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG59XG4ucHJvZmlsZS1jYXJkIC5lZGl0LXBob3RvLmluZm8ge1xuICB0b3A6IDMwNHB4O1xuICBib3JkZXI6IDBweDtcbn1cbi5wcm9maWxlLWNhcmQtaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4ucHJvZmlsZS1jYXJkLXRpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogcXVpY2tzYW5kU2VtaUJvbGQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLnByb2ZpbGUtY2FyZC1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBwYWRkaW5nOiAwcHggOHB4O1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cbi5wcm9maWxlLWNhcmQtaW5mbyBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5wcm9maWxlLWNhcmQtaW5mbyBwIHtcbiAgbWFyZ2luOiA0cHggMHB4O1xufVxuLnByb2ZpbGUtY2FyZC1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5wcm9maWxlLWNhcmQtYWN0aW9ucyBidXR0b24ge1xuICBtYXJnaW46IDBweCA4cHggOHB4IDRweDtcbn1cblxuLmZyaWVuZHMtY29udGFpbmVyIHtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4uZnJpZW5kcy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDhweDtcbn1cbi5mcmllbmRzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xufVxuLmZyaWVuZHMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICNmMDg3MWM7XG59XG4uZnJpZW5kcy1jb250YWluZXIgLmZyaWVuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZnJpZW5kcy1jb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uZnJpZW5kcy1jb250YWluZXIgcCB7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggOHB4O1xufVxuLmZyaWVuZHMtY29udGFpbmVyIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcmlnaHQ6IDhweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mcmllbmRzLWNvbnRhaW5lciBzcGFuOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5lbXB0eS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2ZpbGUtZ3JvdXAtY2FyZCB7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile',
          templateUrl: './profile.component.html',
          styleUrls: ['./profile.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: src_app_shared_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"]
        }, {
          type: src_app_shared_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
        }, {
          type: src_app_authentication_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: src_app_token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/adventure-icon.ts":
  /*!******************************************!*\
    !*** ./src/app/shared/adventure-icon.ts ***!
    \******************************************/

  /*! exports provided: AdventureIcon */

  /***/
  function srcAppSharedAdventureIconTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdventureIcon", function () {
      return AdventureIcon;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0, a1) {
      return {
        width: a0,
        height: a1
      };
    };

    var AdventureIcon = function AdventureIcon() {
      _classCallCheck(this, AdventureIcon);
    };

    AdventureIcon.ɵfac = function AdventureIcon_Factory(t) {
      return new (t || AdventureIcon)();
    };

    AdventureIcon.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdventureIcon,
      selectors: [["adventure-icon"]],
      inputs: {
        fill: "fill",
        width: "width",
        heigth: "heigth"
      },
      decls: 3,
      vars: 5,
      consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 2, "height", "512px", "width", "512px", 3, "ngStyle"], ["transform", "translate(0,0)", 1, "", 2, "touch-action", "none"], ["fill-opacity", "1", "d", "M66.54 18.002c-.327-.007-.655-.005-.98.006-4.064.136-8.105 1.634-11.39 4.535-7.508 6.632-8.218 18.094-1.586 25.602 4.394 4.974 10.906 6.945 16.986 5.792l57.838 65.475-50.373 44.498 24.188 27.38c9.69-21.368 22.255-39.484 37.427-54.65l6.91 36.188c25.092-6.29 49.834-10.563 74.366-12.873l-23.912-27.07-38.66-12.483c17.117-12.9 36.734-22.97 58.62-30.474l-24.19-27.385-50.37 44.496-57.92-65.57c1.79-5.835.617-12.43-3.72-17.34-3.498-3.96-8.34-6.03-13.235-6.128zm384.397 0c-4.895.1-9.735 2.168-13.232 6.127-4.338 4.91-5.514 11.506-3.723 17.343l-57.92 65.568-50.37-44.497-24.188 27.385c21.884 7.504 41.5 17.573 58.62 30.472l-38.66 12.485-23.255 26.324c24.71 1.863 49.367 5.706 74.118 11.46l6.498-34.03c15.173 15.166 27.74 33.282 37.43 54.65l24.185-27.38-50.372-44.498 57.838-65.475c6.08 1.153 12.593-.818 16.987-5.792 6.63-7.508 5.92-18.97-1.586-25.602-3.285-2.9-7.326-4.4-11.39-4.535-.326-.01-.653-.013-.98-.006zm-186.425 158.51c-39.56-.098-79.467 5.226-120.633 16.095-2.046 90.448 34.484 209.35 118.47 259.905 81.295-49.13 122.402-169.902 120.552-259.914-39.75-10.496-78.91-15.988-118.39-16.086zm-117.176 153.5L60.47 428.35l-12.2 63.894 61.9-19.994 68.49-77.535c-12.86-20.108-23.246-42.03-31.324-64.703zm228.203 6.11c-8.69 22.238-19.577 43.634-32.706 63.142l64.473 72.986 61.898 19.994-12.2-63.894-81.466-92.23z"]],
      template: function AdventureIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx.width, ctx.heigth));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx.fill);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdventureIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'adventure-icon',
          template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" [ngStyle]=\"{width: width, height: heigth}\" style=\"height: 512px; width: 512px;\">\n      <g class=\"\" transform=\"translate(0,0)\" style=\"touch-action: none;\">\n        <path [attr.fill]=\"fill\" fill-opacity=\"1\" d=\"M66.54 18.002c-.327-.007-.655-.005-.98.006-4.064.136-8.105 1.634-11.39 4.535-7.508 6.632-8.218 18.094-1.586 25.602 4.394 4.974 10.906 6.945 16.986 5.792l57.838 65.475-50.373 44.498 24.188 27.38c9.69-21.368 22.255-39.484 37.427-54.65l6.91 36.188c25.092-6.29 49.834-10.563 74.366-12.873l-23.912-27.07-38.66-12.483c17.117-12.9 36.734-22.97 58.62-30.474l-24.19-27.385-50.37 44.496-57.92-65.57c1.79-5.835.617-12.43-3.72-17.34-3.498-3.96-8.34-6.03-13.235-6.128zm384.397 0c-4.895.1-9.735 2.168-13.232 6.127-4.338 4.91-5.514 11.506-3.723 17.343l-57.92 65.568-50.37-44.497-24.188 27.385c21.884 7.504 41.5 17.573 58.62 30.472l-38.66 12.485-23.255 26.324c24.71 1.863 49.367 5.706 74.118 11.46l6.498-34.03c15.173 15.166 27.74 33.282 37.43 54.65l24.185-27.38-50.372-44.498 57.838-65.475c6.08 1.153 12.593-.818 16.987-5.792 6.63-7.508 5.92-18.97-1.586-25.602-3.285-2.9-7.326-4.4-11.39-4.535-.326-.01-.653-.013-.98-.006zm-186.425 158.51c-39.56-.098-79.467 5.226-120.633 16.095-2.046 90.448 34.484 209.35 118.47 259.905 81.295-49.13 122.402-169.902 120.552-259.914-39.75-10.496-78.91-15.988-118.39-16.086zm-117.176 153.5L60.47 428.35l-12.2 63.894 61.9-19.994 68.49-77.535c-12.86-20.108-23.246-42.03-31.324-64.703zm228.203 6.11c-8.69 22.238-19.577 43.634-32.706 63.142l64.473 72.986 61.898 19.994-12.2-63.894-81.466-92.23z\"></path>\n      </g>\n    </svg>\n  "
        }]
      }], null, {
        fill: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        heigth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/broken-axe-icon.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/broken-axe-icon.ts ***!
    \*******************************************/

  /*! exports provided: BrokenAxeIcon */

  /***/
  function srcAppSharedBrokenAxeIconTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrokenAxeIcon", function () {
      return BrokenAxeIcon;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0, a1) {
      return {
        width: a0,
        height: a1
      };
    };

    var BrokenAxeIcon = function BrokenAxeIcon() {
      _classCallCheck(this, BrokenAxeIcon);
    };

    BrokenAxeIcon.ɵfac = function BrokenAxeIcon_Factory(t) {
      return new (t || BrokenAxeIcon)();
    };

    BrokenAxeIcon.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BrokenAxeIcon,
      selectors: [["broken-axe-icon"]],
      inputs: {
        fill: "fill",
        width: "width",
        heigth: "heigth"
      },
      decls: 3,
      vars: 5,
      consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 2, "height", "512px", "width", "512px", 3, "ngStyle"], ["transform", "translate(0,0)", 1, "", 2, "touch-action", "none"], ["d", "M246.8 35.58l25.5 52.5 24.8-22.9-50.3-29.6zm109.1 13.41l-10.3 9.51 52.9 57.3 10.3-9.5-52.9-57.31zm-30.3 14.37l-57.3 52.94 66.5 72 57.3-53-66.5-71.94zM181.8 93.33l-19.5 49.17L196 187l-14.2-93.67zM75.81 127l-32.42 13.8 94.41 52.1L75.81 127zm186.09 8.9l-16.2 15-32 44.1 62.7-18.2-33.6 70.7 32.4-17.8 39.6-36.6-52.9-57.2zm232.1 2.4c-3.1.8-6.1 1.6-9.2 2.3-25.7 5.9-51.9 8.5-74.5 2.3l-69.4 64.2c4.5 23-.2 48.9-8.1 74.1-8.7 27.5-21.6 54.1-32.9 75.4 60.6 17.3 133-11.2 187.1-61.1 2.4-2.2 4.7-4.5 7-6.7V138.3zM76.71 232.6l-18.78 37.6 72.57-21.6-53.79-16zm117.19 48l-24 51.8-21-34.4-47.2 196H182l37.2-154.6-25.7 29.5.4-88.3z", "fill", "#fff", "fill-opacity", "1"]],
      template: function BrokenAxeIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx.width, ctx.heigth));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx.fill);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrokenAxeIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'broken-axe-icon',
          template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" [ngStyle]=\"{width: width, height: heigth}\" style=\"height: 512px; width: 512px;\">\n      <g class=\"\" transform=\"translate(0,0)\" style=\"touch-action: none;\">\n        <path [attr.fill]=\"fill\" d=\"M246.8 35.58l25.5 52.5 24.8-22.9-50.3-29.6zm109.1 13.41l-10.3 9.51 52.9 57.3 10.3-9.5-52.9-57.31zm-30.3 14.37l-57.3 52.94 66.5 72 57.3-53-66.5-71.94zM181.8 93.33l-19.5 49.17L196 187l-14.2-93.67zM75.81 127l-32.42 13.8 94.41 52.1L75.81 127zm186.09 8.9l-16.2 15-32 44.1 62.7-18.2-33.6 70.7 32.4-17.8 39.6-36.6-52.9-57.2zm232.1 2.4c-3.1.8-6.1 1.6-9.2 2.3-25.7 5.9-51.9 8.5-74.5 2.3l-69.4 64.2c4.5 23-.2 48.9-8.1 74.1-8.7 27.5-21.6 54.1-32.9 75.4 60.6 17.3 133-11.2 187.1-61.1 2.4-2.2 4.7-4.5 7-6.7V138.3zM76.71 232.6l-18.78 37.6 72.57-21.6-53.79-16zm117.19 48l-24 51.8-21-34.4-47.2 196H182l37.2-154.6-25.7 29.5.4-88.3z\" fill=\"#fff\" fill-opacity=\"1\"></path>\n      </g>\n    </svg>\n  "
        }]
      }], null, {
        fill: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        heigth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/cog-icon.ts":
  /*!************************************!*\
    !*** ./src/app/shared/cog-icon.ts ***!
    \************************************/

  /*! exports provided: CogIcon */

  /***/
  function srcAppSharedCogIconTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CogIcon", function () {
      return CogIcon;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0, a1) {
      return {
        width: a0,
        height: a1
      };
    };

    var CogIcon = function CogIcon() {
      _classCallCheck(this, CogIcon);
    };

    CogIcon.ɵfac = function CogIcon_Factory(t) {
      return new (t || CogIcon)();
    };

    CogIcon.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CogIcon,
      selectors: [["cog-icon"]],
      inputs: {
        fill: "fill",
        width: "width",
        heigth: "heigth"
      },
      decls: 3,
      vars: 5,
      consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 2, "height", "512px", "width", "512px", 3, "ngStyle"], ["transform", "translate(0,0)", 1, "", 2, "touch-action", "none"], ["d", "M234.875 18.78c-26.087 2.367-51.557 8.56-74.875 18.782 15.37 32.763 14.222 66.706-6.72 82.407-20.835 15.617-54.055 7.965-81.124-15.69-16.246 19.452-29.336 41.36-38.875 65.626 33.83 12.333 56.635 37.665 52.94 63.5-3.698 25.835-32.697 43.74-68.626 46.094 2.338 25.796 8.91 50.778 18.937 73.875 17.81-8.182 35.793-11.09 51.095-8.938 13.032 1.87 23.927 7.015 31.156 16.657 15.817 21.097 7.603 54.713-16.78 81.97 19.516 16.35 42.216 29.444 66.594 39.03 12.33-33.828 37.655-56.634 63.5-52.938 25.844 3.697 43.74 32.696 46.094 68.625 26.087-2.365 51.557-8.555 74.875-18.78-15.766-32.997-14.26-67.588 6.843-83.406 9.64-7.23 22.568-9.022 35.594-7.125 15.112 2.16 31.19 10.25 45.563 22.78 16.088-19.345 29.4-41.51 38.875-65.594-33.83-12.332-56.635-37.653-52.938-63.5 3.697-25.846 32.665-43.772 68.594-46.125-2.36-25.944-8.774-50.663-18.906-73.874-32.612 15.117-66.66 13.145-82.282-7.687-15.696-20.944-7.252-53.86 16.688-81-19.52-16.352-42.248-29.447-66.625-39.032-12.332 33.828-37.657 56.66-63.5 52.968-25.846-3.693-43.744-32.696-46.095-68.625zm21.656 95.126c79.626 0 144.376 64.752 144.376 144.375 0 79.626-64.75 144.376-144.375 144.376-79.624 0-144.374-64.75-144.374-144.375 0-79.624 64.75-144.374 144.375-144.374zm0 18.688c-69.524 0-125.686 56.162-125.686 125.687 0 69.526 56.162 125.69 125.687 125.69 69.526 0 125.69-56.164 125.69-125.69 0-69.522-56.164-125.686-125.69-125.686zm.033 15.125c61.094 0 110.625 49.53 110.625 110.624 0 61.095-49.53 110.625-110.625 110.625s-110.625-49.53-110.625-110.626c0-61.095 49.53-110.625 110.625-110.625z", "fill-opacity", "1"]],
      template: function CogIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx.width, ctx.heigth));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx.fill);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CogIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'cog-icon',
          template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" [ngStyle]=\"{width: width, height: heigth}\" style=\"height: 512px; width: 512px;\">\n      <g class=\"\" transform=\"translate(0,0)\" style=\"touch-action: none;\">\n        <path [attr.fill]=\"fill\" d=\"M234.875 18.78c-26.087 2.367-51.557 8.56-74.875 18.782 15.37 32.763 14.222 66.706-6.72 82.407-20.835 15.617-54.055 7.965-81.124-15.69-16.246 19.452-29.336 41.36-38.875 65.626 33.83 12.333 56.635 37.665 52.94 63.5-3.698 25.835-32.697 43.74-68.626 46.094 2.338 25.796 8.91 50.778 18.937 73.875 17.81-8.182 35.793-11.09 51.095-8.938 13.032 1.87 23.927 7.015 31.156 16.657 15.817 21.097 7.603 54.713-16.78 81.97 19.516 16.35 42.216 29.444 66.594 39.03 12.33-33.828 37.655-56.634 63.5-52.938 25.844 3.697 43.74 32.696 46.094 68.625 26.087-2.365 51.557-8.555 74.875-18.78-15.766-32.997-14.26-67.588 6.843-83.406 9.64-7.23 22.568-9.022 35.594-7.125 15.112 2.16 31.19 10.25 45.563 22.78 16.088-19.345 29.4-41.51 38.875-65.594-33.83-12.332-56.635-37.653-52.938-63.5 3.697-25.846 32.665-43.772 68.594-46.125-2.36-25.944-8.774-50.663-18.906-73.874-32.612 15.117-66.66 13.145-82.282-7.687-15.696-20.944-7.252-53.86 16.688-81-19.52-16.352-42.248-29.447-66.625-39.032-12.332 33.828-37.657 56.66-63.5 52.968-25.846-3.693-43.744-32.696-46.095-68.625zm21.656 95.126c79.626 0 144.376 64.752 144.376 144.375 0 79.626-64.75 144.376-144.375 144.376-79.624 0-144.374-64.75-144.374-144.375 0-79.624 64.75-144.374 144.375-144.374zm0 18.688c-69.524 0-125.686 56.162-125.686 125.687 0 69.526 56.162 125.69 125.687 125.69 69.526 0 125.69-56.164 125.69-125.69 0-69.522-56.164-125.686-125.69-125.686zm.033 15.125c61.094 0 110.625 49.53 110.625 110.624 0 61.095-49.53 110.625-110.625 110.625s-110.625-49.53-110.625-110.626c0-61.095 49.53-110.625 110.625-110.625z\" fill-opacity=\"1\"></path>\n      </g>\n    </svg>\n  "
        }]
      }], null, {
        fill: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        heigth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/exit-icon.ts":
  /*!*************************************!*\
    !*** ./src/app/shared/exit-icon.ts ***!
    \*************************************/

  /*! exports provided: ExitIcon */

  /***/
  function srcAppSharedExitIconTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExitIcon", function () {
      return ExitIcon;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0, a1) {
      return {
        width: a0,
        height: a1
      };
    };

    var ExitIcon = function ExitIcon() {
      _classCallCheck(this, ExitIcon);
    };

    ExitIcon.ɵfac = function ExitIcon_Factory(t) {
      return new (t || ExitIcon)();
    };

    ExitIcon.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExitIcon,
      selectors: [["exit-icon"]],
      inputs: {
        fill: "fill",
        width: "width",
        heigth: "heigth"
      },
      decls: 3,
      vars: 5,
      consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 2, "height", "512px", "width", "512px", 3, "ngStyle"], ["transform", "translate(0,0)", 1, "", 2, "touch-action", "none"], ["d", "M217 28.098v455.804l142-42.597V70.697zm159.938 26.88l.062 2.327V87h16V55zM119 55v117.27h18V73h62V55zm258 50v16h16v-16zm0 34v236h16V139zm-240 58.727V233H41v46h96v35.273L195.273 256zM244 232c6.627 0 12 10.745 12 24s-5.373 24-12 24-12-10.745-12-24 5.373-24 12-24zM137 339.73h-18V448h18zM377 393v14h16v-14zm0 32v23h16v-23zM32 471v18h167v-18zm290.652 0l-60 18H480v-18z", "fill-opacity", "1"]],
      template: function ExitIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx.width, ctx.heigth));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx.fill);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExitIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'exit-icon',
          template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" [ngStyle]=\"{width: width, height: heigth}\" style=\"height: 512px; width: 512px;\">\n      <g class=\"\" transform=\"translate(0,0)\" style=\"touch-action: none;\">\n        <path [attr.fill]=\"fill\" d=\"M217 28.098v455.804l142-42.597V70.697zm159.938 26.88l.062 2.327V87h16V55zM119 55v117.27h18V73h62V55zm258 50v16h16v-16zm0 34v236h16V139zm-240 58.727V233H41v46h96v35.273L195.273 256zM244 232c6.627 0 12 10.745 12 24s-5.373 24-12 24-12-10.745-12-24 5.373-24 12-24zM137 339.73h-18V448h18zM377 393v14h16v-14zm0 32v23h16v-23zM32 471v18h167v-18zm290.652 0l-60 18H480v-18z\" fill-opacity=\"1\"></path>\n      </g>\n    </svg>\n  "
        }]
      }], null, {
        fill: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        heigth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/maps-icon.ts":
  /*!*************************************!*\
    !*** ./src/app/shared/maps-icon.ts ***!
    \*************************************/

  /*! exports provided: MapsIcon */

  /***/
  function srcAppSharedMapsIconTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapsIcon", function () {
      return MapsIcon;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0, a1) {
      return {
        width: a0,
        height: a1
      };
    };

    var MapsIcon = function MapsIcon() {
      _classCallCheck(this, MapsIcon);
    };

    MapsIcon.ɵfac = function MapsIcon_Factory(t) {
      return new (t || MapsIcon)();
    };

    MapsIcon.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MapsIcon,
      selectors: [["maps-icon"]],
      inputs: {
        fill: "fill",
        width: "width",
        heigth: "heigth"
      },
      decls: 3,
      vars: 5,
      consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 2, "height", "512px", "width", "512px", 3, "ngStyle"], ["transform", "translate(0,0)", 1, "", 2, "touch-action", "none"], ["fill-opacity", "1", "d", "M242.563 27.656c-10.062.033-20.126.205-30.188.5l6.094 65.594-61.095-62.563c-31.256 2.57-62.494 6.655-93.75 12.532l34.25 28.405-48.063-.563c35.158 100.168 6.936 182.575-.312 292l95.75 105.844c10-1.326 19.856-2.423 29.563-3.344l21.53-42.156 18.532 28.844 41.5-33.594.813 43.094c82.943-.242 157.734 9.098 235.687 7.813-28.15-73.01-31.13-143.562-31.875-209.157l-33.25-19.125 32.688-33.874c-.43-21.333-1.342-42.006-3.625-61.937l-57.438.718 50.25-41.657c-3.843-15.477-9.052-30.4-16.125-44.718l-29.53-23.906c-53.8-5.488-107.607-8.924-161.408-8.75zm58.718 36.97l7.095 16.624 24.594 57.625 14.092-19.75 8.344-11.688 7.313 12.376 40.655 69.124-16.125 9.47-33.375-56.688-42.438 59.405-15.187-10.875 24-33.594-21.97-51.406-24.56 40.063 11.967 22.625-16.53 8.75-18.25-34.5-24.845 58.187-17.187-7.344 32.53-76.186 7.69-18.03 9.155 17.31 5.313 10.032 28.25-46.125 9.468-15.405zm-194.842 56.25h.093l.126.03.094.03 4.78 1.126.095.032.125.03 4.53 1.19.126.03.125.03 4.282 1.25.126.032.124.03 4.094 1.314.125.03.126.064.22.062-5.845 16.53-.343 1.095h-.03l-.22-.06-3.562-1.157-.25-.063-3.813-1.125-.25-.063-4.062-1.062-.22-.063-4.343-1-.093-.03-.125-.032 1.155-4.906 2.813-13.345zm37.874 13.374l2.657 1.53.186.095.156.125 2.657 1.656.155.125.188.126 2.437 1.688.188.125.187.155 2.28 1.75.19.125.155.156 2.125 1.78.156.158.19.156 1.936 1.844.188.156.156.188.844.875-13.53 12.875-.47-.5-.375-.344-1.22-1.156-.094-.094-.25-.22L144 156.44l-.156-.125-.188-.157-1.562-1.22-.188-.124-.156-.125-1.78-1.218-.314-.19-.03-.03-2.282-1.438L135 150.47l9.313-16.22zM173 166.625l.25.844.063.25.093.25.5 2.06.063.22.03.25.406 2.063.03.25.064.25.28 2.062.032.22v.25l.188 2.06.03.22v.22l.095 2.06v2.72l-.03.188-.095 2.062v.22l-.03.186-.19 2.064v.156l-.03.188-.156 1.156-18.53-2.406.124-.782.03-.344.126-1.343v-.064l.03-.312.064-1.688v-1.687l-.063-1.19-.125-1.593-.28-2.062-.314-1.563-.375-1.406-.03-.156-.125-.344 17.875-5.53zm-21.25 35.72l17.28 7.06-1.093 2.657-.062.157-.063.155-1.625 3.625-.062.125-.063.125-1.687 3.47-.03.093-.064.093-1.686 3.344-.063.063-.03.062-1.688 3.156-.03.064-.032.062-.313.563-16.343-9.064.25-.437.062-.126 1.53-2.875.095-.157 1.532-2.97.094-.218 1.47-3.03.124-.25 1.406-3.095.125-.313.97-2.343zm-16.47 34.093l17.69 6.03-.157.407-.032.063-1.03 3.5-.906 3.437-.03.22-.064.186-.656 3.314-.438 2.687-.03.22-.032.25-.188 1.906-18.594-2 .282-2.375v-.25l.03-.218.595-3.593.03-.22.03-.188.782-3.718.032-.22.062-.186.97-3.844.03-.188.063-.187 1.186-3.94.063-.186.06-.188.25-.72zm207.845 17.375l.875.093h.22l.186.03 1.906.25.22.033.187.03 1.874.344.187.03.22.032 1.813.406.218.063.19.063 1.78.468.22.063.186.06 1.72.564.218.062.22.063 1.655.624.217.094.188.093 1.625.69.22.092.186.094 1.594.75.188.125.218.095 1.53.844.19.092.187.125 1.218.75-9.75 15.938-1.124-.688-.094-.062-.75-.406-.406-.19-.75-.405-.187-.063-.22-.125-1.25-.5-.844-.312-1.28-.438-.282-.062-.156-.063-.938-.25-.344-.062-.062-.03-1-.22-1.47-.28-.218-.033-.187-.03-1.44-.188h-.06l-.5-.033 1.655-18.625zm-21.22 1.5l2.376 11.875 1.47 6.437-.188.03-2 .44-.156.03-.094.03-2 .533-.218.062-2.094.594-.22.062-2.155.688-.22.062-2.217.75-.22.094-2.312.844-.187.062-2.158.844-6.812-17.406 2.344-.906.094-.063.125-.03 2.687-.97.094-.063.125-.03 2.624-.876.125-.062.092-.03 2.594-.814.125-.03.095-.033 2.563-.718.093-.033.126-.03 2.5-.657.125-.03.126-.032 2.438-.532.125-.03.124-.032.062-.03zM284 271.156l10.97 15.156-1.72 1.22-.094.093-.094.063-3.156 2.156-.094.062-.125.063-3.218 2.092-.095.063-.094.063-3.28 2-.094.062-.125.063-3.31 1.906-.095.06-.125.064-1.063.594-8.937-16.407.875-.5.188-.092 2.937-1.688.22-.125 2.874-1.75.187-.125 2.814-1.844.22-.125 2.936-2.03 1.5-1.094zm-133.53 2.72l.124.437.062.28.47 1.376.06.124.908 2.187.062.19.594 1.186.125.22.844 1.5.124.187.97 1.437.092.125L156 284.53l.094.095 1.28 1.406-13.81 12.595-1.376-1.5-.22-.22-.187-.25-1.624-2.03-.187-.25-.19-.28-1.468-2.158-.187-.25-.156-.28-1.345-2.282-.156-.28-.157-.283-1.188-2.375-.125-.312-.125-.28-1.03-2.5-.126-.314-.095-.31-.875-2.595-.094-.313-.094-.312-.187-.72 18.094-4.655zm230.31 3.312l.845 1.312.063.156.093.125.97 1.69.063.124.093.125.938 1.75.062.124.063.156.905 1.78.063.126.062.125.844 1.876.062.125.063.095.81 1.938.033.125.062.093.78 1.97.033.125.062.125.75 2.03.03.095.033.094.718 2.092.033.094.03.125.157.5-17.813 5.626-.093-.312-.094-.22-.563-1.655-.062-.22-.594-1.594-.092-.22-.594-1.53-.094-.22-.625-1.436-.094-.25-.624-1.375-.125-.25-.655-1.313-.125-.25-.656-1.218-.156-.25-.657-1.156-.186-.282-.656-1.062 15.843-9.906zm-127.405 10.906l6.97 17.344-3 1.218-.095.03-.094.033-3.594 1.342-.093.063-.126.03-3.594 1.25-.094.033-.125.03-3.624 1.188-.094.03-.093.033-3.657 1.092-.094.032-.095.03-.188.032-4.968-18 .186-.062 3.25-.97.188-.062 3.22-1.03.217-.063 3.407-1.22v.03l3.188-1.217.22-.094 2.78-1.126zm-83.75 6.156l.25.125.063.03 2.218.876.375.126 1.97.688.25.062.156.063 2.094.592.125.032.22.062 2.56.625 2.314.5.186.033.156.03 2.75.438-1.468 8.72-.094.5-1.22 9.28-.186-.03-.156-.03-3.063-.533-.188-.03-.156-.032-3.03-.625-.156-.03-.188-.033-2.937-.718-.157-.064-.188-.062-2.844-.813-.186-.06-.22-.064-2.75-.937-.186-.064-.22-.094-2.655-1.03-.188-.094-.22-.094-.655-.28 7.625-17.064zm49.938 3.53l2.843 18.47-3.344.5-.125.03h-.125l-3.562.47h-.125l-.094.03-3.56.345-.126.03h-.125l-3.5.283h-.251l-3.47.187h-.25l-1.156.03-.406-18.686.906-.033h.25l2.97-.156 3.25-.217v-.032l3.31-.31.19-.033h.06l3.095-.406.124-.03h.094l3.125-.47zm174.5 18l.375 2.376.03.125v.158l.72 5.218v.125l.03.126.563 5.406v.219l.47 5.564-18.625 1.5-.438-5.344-.03-.22-.5-4.905v-.063l-.032-.218-.625-4.656-.03-.282-.376-2.125 18.47-3zM326.5 346.595c18.893 3.46 44.913 16.187 68.875 33.875 7.46-9.835 14.425-20.4 21.313-31.095l30.062 12.97c-4.686 12.21-14.99 25.518-28.563 37.186 17.017 16.166 30.87 34.515 37 52.94-13.806-18.108-31.07-31.73-50.28-42.814-23.387 15.846-52.682 25.93-79.626 20.438 22.915-4.383 40.644-16.56 55.814-32.594-16.462-7.504-33.798-13.877-51.25-20.094l-3.344-30.812z", "fill-opacity", "1"]],
      template: function MapsIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx.width, ctx.heigth));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx.fill);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapsIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'maps-icon',
          template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" [ngStyle]=\"{width: width, height: heigth}\" style=\"height: 512px; width: 512px;\">\n      <g class=\"\" transform=\"translate(0,0)\" style=\"touch-action: none;\">\n        <path [attr.fill]=\"fill\" fill-opacity=\"1\" d=\"M242.563 27.656c-10.062.033-20.126.205-30.188.5l6.094 65.594-61.095-62.563c-31.256 2.57-62.494 6.655-93.75 12.532l34.25 28.405-48.063-.563c35.158 100.168 6.936 182.575-.312 292l95.75 105.844c10-1.326 19.856-2.423 29.563-3.344l21.53-42.156 18.532 28.844 41.5-33.594.813 43.094c82.943-.242 157.734 9.098 235.687 7.813-28.15-73.01-31.13-143.562-31.875-209.157l-33.25-19.125 32.688-33.874c-.43-21.333-1.342-42.006-3.625-61.937l-57.438.718 50.25-41.657c-3.843-15.477-9.052-30.4-16.125-44.718l-29.53-23.906c-53.8-5.488-107.607-8.924-161.408-8.75zm58.718 36.97l7.095 16.624 24.594 57.625 14.092-19.75 8.344-11.688 7.313 12.376 40.655 69.124-16.125 9.47-33.375-56.688-42.438 59.405-15.187-10.875 24-33.594-21.97-51.406-24.56 40.063 11.967 22.625-16.53 8.75-18.25-34.5-24.845 58.187-17.187-7.344 32.53-76.186 7.69-18.03 9.155 17.31 5.313 10.032 28.25-46.125 9.468-15.405zm-194.842 56.25h.093l.126.03.094.03 4.78 1.126.095.032.125.03 4.53 1.19.126.03.125.03 4.282 1.25.126.032.124.03 4.094 1.314.125.03.126.064.22.062-5.845 16.53-.343 1.095h-.03l-.22-.06-3.562-1.157-.25-.063-3.813-1.125-.25-.063-4.062-1.062-.22-.063-4.343-1-.093-.03-.125-.032 1.155-4.906 2.813-13.345zm37.874 13.374l2.657 1.53.186.095.156.125 2.657 1.656.155.125.188.126 2.437 1.688.188.125.187.155 2.28 1.75.19.125.155.156 2.125 1.78.156.158.19.156 1.936 1.844.188.156.156.188.844.875-13.53 12.875-.47-.5-.375-.344-1.22-1.156-.094-.094-.25-.22L144 156.44l-.156-.125-.188-.157-1.562-1.22-.188-.124-.156-.125-1.78-1.218-.314-.19-.03-.03-2.282-1.438L135 150.47l9.313-16.22zM173 166.625l.25.844.063.25.093.25.5 2.06.063.22.03.25.406 2.063.03.25.064.25.28 2.062.032.22v.25l.188 2.06.03.22v.22l.095 2.06v2.72l-.03.188-.095 2.062v.22l-.03.186-.19 2.064v.156l-.03.188-.156 1.156-18.53-2.406.124-.782.03-.344.126-1.343v-.064l.03-.312.064-1.688v-1.687l-.063-1.19-.125-1.593-.28-2.062-.314-1.563-.375-1.406-.03-.156-.125-.344 17.875-5.53zm-21.25 35.72l17.28 7.06-1.093 2.657-.062.157-.063.155-1.625 3.625-.062.125-.063.125-1.687 3.47-.03.093-.064.093-1.686 3.344-.063.063-.03.062-1.688 3.156-.03.064-.032.062-.313.563-16.343-9.064.25-.437.062-.126 1.53-2.875.095-.157 1.532-2.97.094-.218 1.47-3.03.124-.25 1.406-3.095.125-.313.97-2.343zm-16.47 34.093l17.69 6.03-.157.407-.032.063-1.03 3.5-.906 3.437-.03.22-.064.186-.656 3.314-.438 2.687-.03.22-.032.25-.188 1.906-18.594-2 .282-2.375v-.25l.03-.218.595-3.593.03-.22.03-.188.782-3.718.032-.22.062-.186.97-3.844.03-.188.063-.187 1.186-3.94.063-.186.06-.188.25-.72zm207.845 17.375l.875.093h.22l.186.03 1.906.25.22.033.187.03 1.874.344.187.03.22.032 1.813.406.218.063.19.063 1.78.468.22.063.186.06 1.72.564.218.062.22.063 1.655.624.217.094.188.093 1.625.69.22.092.186.094 1.594.75.188.125.218.095 1.53.844.19.092.187.125 1.218.75-9.75 15.938-1.124-.688-.094-.062-.75-.406-.406-.19-.75-.405-.187-.063-.22-.125-1.25-.5-.844-.312-1.28-.438-.282-.062-.156-.063-.938-.25-.344-.062-.062-.03-1-.22-1.47-.28-.218-.033-.187-.03-1.44-.188h-.06l-.5-.033 1.655-18.625zm-21.22 1.5l2.376 11.875 1.47 6.437-.188.03-2 .44-.156.03-.094.03-2 .533-.218.062-2.094.594-.22.062-2.155.688-.22.062-2.217.75-.22.094-2.312.844-.187.062-2.158.844-6.812-17.406 2.344-.906.094-.063.125-.03 2.687-.97.094-.063.125-.03 2.624-.876.125-.062.092-.03 2.594-.814.125-.03.095-.033 2.563-.718.093-.033.126-.03 2.5-.657.125-.03.126-.032 2.438-.532.125-.03.124-.032.062-.03zM284 271.156l10.97 15.156-1.72 1.22-.094.093-.094.063-3.156 2.156-.094.062-.125.063-3.218 2.092-.095.063-.094.063-3.28 2-.094.062-.125.063-3.31 1.906-.095.06-.125.064-1.063.594-8.937-16.407.875-.5.188-.092 2.937-1.688.22-.125 2.874-1.75.187-.125 2.814-1.844.22-.125 2.936-2.03 1.5-1.094zm-133.53 2.72l.124.437.062.28.47 1.376.06.124.908 2.187.062.19.594 1.186.125.22.844 1.5.124.187.97 1.437.092.125L156 284.53l.094.095 1.28 1.406-13.81 12.595-1.376-1.5-.22-.22-.187-.25-1.624-2.03-.187-.25-.19-.28-1.468-2.158-.187-.25-.156-.28-1.345-2.282-.156-.28-.157-.283-1.188-2.375-.125-.312-.125-.28-1.03-2.5-.126-.314-.095-.31-.875-2.595-.094-.313-.094-.312-.187-.72 18.094-4.655zm230.31 3.312l.845 1.312.063.156.093.125.97 1.69.063.124.093.125.938 1.75.062.124.063.156.905 1.78.063.126.062.125.844 1.876.062.125.063.095.81 1.938.033.125.062.093.78 1.97.033.125.062.125.75 2.03.03.095.033.094.718 2.092.033.094.03.125.157.5-17.813 5.626-.093-.312-.094-.22-.563-1.655-.062-.22-.594-1.594-.092-.22-.594-1.53-.094-.22-.625-1.436-.094-.25-.624-1.375-.125-.25-.655-1.313-.125-.25-.656-1.218-.156-.25-.657-1.156-.186-.282-.656-1.062 15.843-9.906zm-127.405 10.906l6.97 17.344-3 1.218-.095.03-.094.033-3.594 1.342-.093.063-.126.03-3.594 1.25-.094.033-.125.03-3.624 1.188-.094.03-.093.033-3.657 1.092-.094.032-.095.03-.188.032-4.968-18 .186-.062 3.25-.97.188-.062 3.22-1.03.217-.063 3.407-1.22v.03l3.188-1.217.22-.094 2.78-1.126zm-83.75 6.156l.25.125.063.03 2.218.876.375.126 1.97.688.25.062.156.063 2.094.592.125.032.22.062 2.56.625 2.314.5.186.033.156.03 2.75.438-1.468 8.72-.094.5-1.22 9.28-.186-.03-.156-.03-3.063-.533-.188-.03-.156-.032-3.03-.625-.156-.03-.188-.033-2.937-.718-.157-.064-.188-.062-2.844-.813-.186-.06-.22-.064-2.75-.937-.186-.064-.22-.094-2.655-1.03-.188-.094-.22-.094-.655-.28 7.625-17.064zm49.938 3.53l2.843 18.47-3.344.5-.125.03h-.125l-3.562.47h-.125l-.094.03-3.56.345-.126.03h-.125l-3.5.283h-.251l-3.47.187h-.25l-1.156.03-.406-18.686.906-.033h.25l2.97-.156 3.25-.217v-.032l3.31-.31.19-.033h.06l3.095-.406.124-.03h.094l3.125-.47zm174.5 18l.375 2.376.03.125v.158l.72 5.218v.125l.03.126.563 5.406v.219l.47 5.564-18.625 1.5-.438-5.344-.03-.22-.5-4.905v-.063l-.032-.218-.625-4.656-.03-.282-.376-2.125 18.47-3zM326.5 346.595c18.893 3.46 44.913 16.187 68.875 33.875 7.46-9.835 14.425-20.4 21.313-31.095l30.062 12.97c-4.686 12.21-14.99 25.518-28.563 37.186 17.017 16.166 30.87 34.515 37 52.94-13.806-18.108-31.07-31.73-50.28-42.814-23.387 15.846-52.682 25.93-79.626 20.438 22.915-4.383 40.644-16.56 55.814-32.594-16.462-7.504-33.798-13.877-51.25-20.094l-3.344-30.812z\" fill-opacity=\"1\"></path>\n      </g>\n    </svg>\n  "
        }]
      }], null, {
        fill: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        heigth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/master-icon.ts":
  /*!***************************************!*\
    !*** ./src/app/shared/master-icon.ts ***!
    \***************************************/

  /*! exports provided: MasterIcon */

  /***/
  function srcAppSharedMasterIconTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MasterIcon", function () {
      return MasterIcon;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0, a1) {
      return {
        width: a0,
        height: a1
      };
    };

    var MasterIcon = function MasterIcon() {
      _classCallCheck(this, MasterIcon);
    };

    MasterIcon.ɵfac = function MasterIcon_Factory(t) {
      return new (t || MasterIcon)();
    };

    MasterIcon.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MasterIcon,
      selectors: [["master-icon"]],
      inputs: {
        fill: "fill",
        width: "width",
        heigth: "heigth"
      },
      decls: 3,
      vars: 5,
      consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 2, "height", "512px", "width", "512px", 3, "ngStyle"], ["transform", "translate(0,0)", 1, "", 2, "touch-action", "none"], ["d", "M319.61 20.654c13.145 33.114 13.144 33.115-5.46 63.5 33.114-13.145 33.116-13.146 63.5 5.457-13.145-33.114-13.146-33.113 5.457-63.498-33.114 13.146-33.113 13.145-63.498-5.459zM113.024 38.021c-11.808 21.04-11.808 21.04-35.724 24.217 21.04 11.809 21.04 11.808 24.217 35.725 11.808-21.04 11.808-21.04 35.724-24.217-21.04-11.808-21.04-11.808-24.217-35.725zm76.55 56.184c-.952 50.588-.95 50.588-41.991 80.18 50.587.95 50.588.95 80.18 41.99.95-50.588.95-50.588 41.99-80.18-50.588-.95-50.588-.95-80.18-41.99zm191.177 55.885c-.046 24.127-.048 24.125-19.377 38.564 24.127.047 24.127.046 38.566 19.375.047-24.126.046-24.125 19.375-38.564-24.126-.047-24.125-.046-38.564-19.375zm-184.086 83.88c-1.191.024-2.36.07-3.492.134-18.591 1.064-41.868 8.416-77.445 22.556L76.012 433.582c78.487-20.734 132.97-21.909 170.99-4.615V247.71c-18.076-8.813-31.79-13.399-46.707-13.737a91.166 91.166 0 0 0-3.629-.002zm122.686 11.42c-2.916-.026-5.81.011-8.514.098-12.81.417-27.638 2.215-45.84 4.522V427.145c43.565-7.825 106.85-4.2 171.244 7.566l-39.78-177.197c-35.904-8.37-56.589-11.91-77.11-12.123zm2.289 16.95c18.889.204 36.852 2.768 53.707 5.02l4.437 16.523c-23.78-3.75-65.966-4.906-92.467-.98l-.636-17.805c11.959-2.154 23.625-2.88 34.959-2.758zm-250.483 4.658l-10.617 46.004h24.094l10.326-46.004H71.158zm345.881 0l39.742 177.031 2.239 9.973 22.591-.152-40.855-186.852h-23.717zm-78.857 57.82c16.993.026 33.67.791 49.146 2.223l3.524 17.174c-32.645-3.08-72.58-2.889-102.995 0l-.709-17.174c16.733-1.533 34.04-2.248 51.034-2.223zm-281.793 6.18l-6.924 30.004h24.394l6.735-30.004H56.389zm274.418 27.244c4.656.021 9.487.085 14.716.203l2.555 17.498c-19.97-.471-47.115.56-59.728 1.05l-.7-17.985c16.803-.493 29.189-.828 43.157-.766zm41.476.447c8.268.042 16.697.334 24.121.069l2.58 17.74c-8.653-.312-24.87-.83-32.064-.502l-2.807-17.234a257.25 257.25 0 0 1 8.17-.073zm-326.97 20.309l-17.985 77.928 25.035-.17 17.455-77.758H45.313zm303.164 11.848c19.608-.01 38.66.774 56.449 2.572l2.996 20.787c-34.305-4.244-85.755-7.697-119.1-3.244l-.14-17.922c20.02-1.379 40.186-2.183 59.795-2.193zm-166.606 44.05c-30.112.09-67.916 6.25-115.408 19.76l-7.22 2.053 187.759-1.27v-6.347c-16.236-9.206-37.42-14.278-65.13-14.196zm134.41 6.174c-19.63.067-37.112 1.439-51.283 4.182v10.064l177.594-1.203c-44.322-8.634-89.137-13.17-126.31-13.043zM26 475v18h460v-18H26z", "fill", "#fff", "fill-opacity", "1"]],
      template: function MasterIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx.width, ctx.heigth));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx.fill);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'master-icon',
          template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" [ngStyle]=\"{width: width, height: heigth}\" style=\"height: 512px; width: 512px;\">\n      <g class=\"\" transform=\"translate(0,0)\" style=\"touch-action: none;\">\n        <path [attr.fill]=\"fill\" d=\"M319.61 20.654c13.145 33.114 13.144 33.115-5.46 63.5 33.114-13.145 33.116-13.146 63.5 5.457-13.145-33.114-13.146-33.113 5.457-63.498-33.114 13.146-33.113 13.145-63.498-5.459zM113.024 38.021c-11.808 21.04-11.808 21.04-35.724 24.217 21.04 11.809 21.04 11.808 24.217 35.725 11.808-21.04 11.808-21.04 35.724-24.217-21.04-11.808-21.04-11.808-24.217-35.725zm76.55 56.184c-.952 50.588-.95 50.588-41.991 80.18 50.587.95 50.588.95 80.18 41.99.95-50.588.95-50.588 41.99-80.18-50.588-.95-50.588-.95-80.18-41.99zm191.177 55.885c-.046 24.127-.048 24.125-19.377 38.564 24.127.047 24.127.046 38.566 19.375.047-24.126.046-24.125 19.375-38.564-24.126-.047-24.125-.046-38.564-19.375zm-184.086 83.88c-1.191.024-2.36.07-3.492.134-18.591 1.064-41.868 8.416-77.445 22.556L76.012 433.582c78.487-20.734 132.97-21.909 170.99-4.615V247.71c-18.076-8.813-31.79-13.399-46.707-13.737a91.166 91.166 0 0 0-3.629-.002zm122.686 11.42c-2.916-.026-5.81.011-8.514.098-12.81.417-27.638 2.215-45.84 4.522V427.145c43.565-7.825 106.85-4.2 171.244 7.566l-39.78-177.197c-35.904-8.37-56.589-11.91-77.11-12.123zm2.289 16.95c18.889.204 36.852 2.768 53.707 5.02l4.437 16.523c-23.78-3.75-65.966-4.906-92.467-.98l-.636-17.805c11.959-2.154 23.625-2.88 34.959-2.758zm-250.483 4.658l-10.617 46.004h24.094l10.326-46.004H71.158zm345.881 0l39.742 177.031 2.239 9.973 22.591-.152-40.855-186.852h-23.717zm-78.857 57.82c16.993.026 33.67.791 49.146 2.223l3.524 17.174c-32.645-3.08-72.58-2.889-102.995 0l-.709-17.174c16.733-1.533 34.04-2.248 51.034-2.223zm-281.793 6.18l-6.924 30.004h24.394l6.735-30.004H56.389zm274.418 27.244c4.656.021 9.487.085 14.716.203l2.555 17.498c-19.97-.471-47.115.56-59.728 1.05l-.7-17.985c16.803-.493 29.189-.828 43.157-.766zm41.476.447c8.268.042 16.697.334 24.121.069l2.58 17.74c-8.653-.312-24.87-.83-32.064-.502l-2.807-17.234a257.25 257.25 0 0 1 8.17-.073zm-326.97 20.309l-17.985 77.928 25.035-.17 17.455-77.758H45.313zm303.164 11.848c19.608-.01 38.66.774 56.449 2.572l2.996 20.787c-34.305-4.244-85.755-7.697-119.1-3.244l-.14-17.922c20.02-1.379 40.186-2.183 59.795-2.193zm-166.606 44.05c-30.112.09-67.916 6.25-115.408 19.76l-7.22 2.053 187.759-1.27v-6.347c-16.236-9.206-37.42-14.278-65.13-14.196zm134.41 6.174c-19.63.067-37.112 1.439-51.283 4.182v10.064l177.594-1.203c-44.322-8.634-89.137-13.17-126.31-13.043zM26 475v18h460v-18H26z\" fill=\"#fff\" fill-opacity=\"1\"></path>\n      </g>\n    </svg>\n  "
        }]
      }], null, {
        fill: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        heigth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/notification-icon.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/notification-icon.ts ***!
    \*********************************************/

  /*! exports provided: NotificationIcon */

  /***/
  function srcAppSharedNotificationIconTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationIcon", function () {
      return NotificationIcon;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0, a1) {
      return {
        width: a0,
        height: a1
      };
    };

    var NotificationIcon = function NotificationIcon() {
      _classCallCheck(this, NotificationIcon);
    };

    NotificationIcon.ɵfac = function NotificationIcon_Factory(t) {
      return new (t || NotificationIcon)();
    };

    NotificationIcon.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotificationIcon,
      selectors: [["notification-icon"]],
      inputs: {
        fill: "fill",
        width: "width",
        heigth: "heigth"
      },
      decls: 3,
      vars: 5,
      consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 2, "height", "512px", "width", "512px", 3, "ngStyle"], ["transform", "translate(0,0)", 1, "", 2, "touch-action", "none"], ["d", "M254.125 26.188c-17.377-.003-31.66 14.28-31.656 31.656 0 7.617 2.733 14.64 7.28 20.125-10.79 3.876-19.043 10.963-26.906 22.06-13.057 18.43-23.687 49.03-35.406 92.782-10.257 38.29-24.345 57.012-34.657 70.563-10.31 13.55-16.252 20.325-16.25 42.688.002 3.5 1.975 7.314 8.44 12.03 6.463 4.717 16.877 9.383 29.905 13.188 26.055 7.612 62.442 11.962 100.25 11.97 19.384.004 38.368-1.15 55.78-3.28v.124c12.13-1.043 33.332-3.898 51.345-10.28 5.795-2.055 11.28-4.422 16.125-7.533 2.612-1.376 4.947-2.747 6.875-4.155 6.458-4.714 8.438-8.523 8.438-12.03-.004-22.363-5.935-29.135-16.25-42.69-10.316-13.553-24.42-32.27-34.688-70.56-11.732-43.757-22.343-74.35-35.406-92.782-8.225-11.607-16.895-18.836-28.438-22.594 4.31-5.41 6.908-12.24 6.906-19.626-.002-17.377-14.31-31.654-31.687-31.657zm0 18.687c7.278 0 13 5.694 13 12.97 0 7.272-5.722 12.97-13 12.968-7.278-.002-12.968-5.696-12.97-12.97 0-7.273 5.693-12.97 12.97-12.968zm9.22 43.22c34.616 10.188 49.56 64.686 58.124 101.56 14.99 64.56 45.652 82.98 53.03 111.25-.327.633-1.002 1.286-2.094 2.408-2.665 2.74-8.816 6.216-16.406 8.906-7.366 2.61-16 4.614-24.188 6.124-1.73-38.024-33.765-53.55-33.25-107.47.603-63.043-17.19-103.352-39.5-121.78 1.468-.233 2.886-.57 4.282-1zm-206.876 91.28C23.546 223.947 11.19 289.253 28.874 355.25c18.208 67.957 63.562 118.994 116.313 140.03-38.592-30.418-72.26-83.223-89.75-148.5-16.674-62.228-14.924-122.366 1.03-167.405zm399.436 0c15.955 45.04 17.705 105.177 1.03 167.406-17.49 65.277-51.157 118.082-89.748 148.5 52.75-21.036 98.135-72.073 116.343-140.03 17.686-65.997 5.298-131.303-27.624-175.875zM105.687 210.28c-29.71 34.43-42.433 83.74-29.343 132.595 13.478 50.306 50.845 87.082 95.5 101.156-32.19-21.55-59.46-60.02-72.406-108.342-12.344-46.066-8.896-91.175 6.25-125.407zm301.032 0c15.144 34.233 18.56 79.342 6.217 125.407-12.947 48.322-40.185 86.793-72.375 108.344 44.655-14.073 81.99-50.85 95.47-101.155 13.09-48.856.396-98.166-29.313-132.594zM146.53 348.25c1.218 12.736 11.944 22.686 25 22.688 9.422 0 17.642-5.173 21.94-12.844-15.986-2.11-30.823-5.08-43.814-8.875-1.06-.31-2.09-.65-3.125-.97z", "fill-opacity", "1"]],
      template: function NotificationIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx.width, ctx.heigth));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx.fill);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'notification-icon',
          template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" [ngStyle]=\"{width: width, height: heigth}\" style=\"height: 512px; width: 512px;\">\n      <g class=\"\" transform=\"translate(0,0)\" style=\"touch-action: none;\">\n        <path [attr.fill]=\"fill\" d=\"M254.125 26.188c-17.377-.003-31.66 14.28-31.656 31.656 0 7.617 2.733 14.64 7.28 20.125-10.79 3.876-19.043 10.963-26.906 22.06-13.057 18.43-23.687 49.03-35.406 92.782-10.257 38.29-24.345 57.012-34.657 70.563-10.31 13.55-16.252 20.325-16.25 42.688.002 3.5 1.975 7.314 8.44 12.03 6.463 4.717 16.877 9.383 29.905 13.188 26.055 7.612 62.442 11.962 100.25 11.97 19.384.004 38.368-1.15 55.78-3.28v.124c12.13-1.043 33.332-3.898 51.345-10.28 5.795-2.055 11.28-4.422 16.125-7.533 2.612-1.376 4.947-2.747 6.875-4.155 6.458-4.714 8.438-8.523 8.438-12.03-.004-22.363-5.935-29.135-16.25-42.69-10.316-13.553-24.42-32.27-34.688-70.56-11.732-43.757-22.343-74.35-35.406-92.782-8.225-11.607-16.895-18.836-28.438-22.594 4.31-5.41 6.908-12.24 6.906-19.626-.002-17.377-14.31-31.654-31.687-31.657zm0 18.687c7.278 0 13 5.694 13 12.97 0 7.272-5.722 12.97-13 12.968-7.278-.002-12.968-5.696-12.97-12.97 0-7.273 5.693-12.97 12.97-12.968zm9.22 43.22c34.616 10.188 49.56 64.686 58.124 101.56 14.99 64.56 45.652 82.98 53.03 111.25-.327.633-1.002 1.286-2.094 2.408-2.665 2.74-8.816 6.216-16.406 8.906-7.366 2.61-16 4.614-24.188 6.124-1.73-38.024-33.765-53.55-33.25-107.47.603-63.043-17.19-103.352-39.5-121.78 1.468-.233 2.886-.57 4.282-1zm-206.876 91.28C23.546 223.947 11.19 289.253 28.874 355.25c18.208 67.957 63.562 118.994 116.313 140.03-38.592-30.418-72.26-83.223-89.75-148.5-16.674-62.228-14.924-122.366 1.03-167.405zm399.436 0c15.955 45.04 17.705 105.177 1.03 167.406-17.49 65.277-51.157 118.082-89.748 148.5 52.75-21.036 98.135-72.073 116.343-140.03 17.686-65.997 5.298-131.303-27.624-175.875zM105.687 210.28c-29.71 34.43-42.433 83.74-29.343 132.595 13.478 50.306 50.845 87.082 95.5 101.156-32.19-21.55-59.46-60.02-72.406-108.342-12.344-46.066-8.896-91.175 6.25-125.407zm301.032 0c15.144 34.233 18.56 79.342 6.217 125.407-12.947 48.322-40.185 86.793-72.375 108.344 44.655-14.073 81.99-50.85 95.47-101.155 13.09-48.856.396-98.166-29.313-132.594zM146.53 348.25c1.218 12.736 11.944 22.686 25 22.688 9.422 0 17.642-5.173 21.94-12.844-15.986-2.11-30.823-5.08-43.814-8.875-1.06-.31-2.09-.65-3.125-.97z\" fill-opacity=\"1\"></path>\n      </g>\n    </svg>\n  "
        }]
      }], null, {
        fill: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        heigth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/person-icon.ts":
  /*!***************************************!*\
    !*** ./src/app/shared/person-icon.ts ***!
    \***************************************/

  /*! exports provided: PersonIcon */

  /***/
  function srcAppSharedPersonIconTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonIcon", function () {
      return PersonIcon;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0, a1) {
      return {
        width: a0,
        height: a1
      };
    };

    var PersonIcon = function PersonIcon() {
      _classCallCheck(this, PersonIcon);
    };

    PersonIcon.ɵfac = function PersonIcon_Factory(t) {
      return new (t || PersonIcon)();
    };

    PersonIcon.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PersonIcon,
      selectors: [["person-icon"]],
      inputs: {
        fill: "fill",
        width: "width",
        heigth: "heigth"
      },
      decls: 3,
      vars: 5,
      consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 2, "height", "512px", "width", "512px", 3, "ngStyle"], ["transform", "translate(0,0)", 1, "", 2, "touch-action", "none"], ["d", "M119.1 25v.1c-25 3.2-47.1 32-47.1 68.8 0 20.4 7.1 38.4 17.5 50.9L99.7 157 84 159.9c-13.7 2.6-23.8 9.9-32.2 21.5-8.5 11.5-14.9 27.5-19.4 45.8-8.2 33.6-9.9 74.7-10.1 110.5h44l11.9 158.4h96.3L185 337.7h41.9c0-36.2-.3-77.8-7.8-111.7-4-18.5-10.2-34.4-18.7-45.9-8.6-11.4-19.2-18.7-34.5-21l-16-2.5L160 144c10-12.5 16.7-30.2 16.7-50.1 0-39.2-24.8-68.8-52.4-68.8-2.9 0-4.7-.1-5.2-.1zM440 33c-17.2 0-31 13.77-31 31s13.8 31 31 31 31-13.77 31-31-13.8-31-31-31zM311 55v48H208v18h103v158h-55v18h55v110H208v18h103v32h80.8c-.5-2.9-.8-5.9-.8-9 0-3.1.3-6.1.8-9H329V297h62.8c-.5-2.9-.8-5.9-.8-9 0-3.1.3-6.1.8-9H329V73h62.8c-.5-2.92-.8-5.93-.8-9 0-3.07.3-6.08.8-9H311zm129 202c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31zm0 160c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31z", "fill-opacity", "1"]],
      template: function PersonIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx.width, ctx.heigth));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx.fill);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'person-icon',
          template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" [ngStyle]=\"{width: width, height: heigth}\" style=\"height: 512px; width: 512px;\">\n      <g class=\"\" transform=\"translate(0,0)\" style=\"touch-action: none;\">\n        <path [attr.fill]=\"fill\" d=\"M119.1 25v.1c-25 3.2-47.1 32-47.1 68.8 0 20.4 7.1 38.4 17.5 50.9L99.7 157 84 159.9c-13.7 2.6-23.8 9.9-32.2 21.5-8.5 11.5-14.9 27.5-19.4 45.8-8.2 33.6-9.9 74.7-10.1 110.5h44l11.9 158.4h96.3L185 337.7h41.9c0-36.2-.3-77.8-7.8-111.7-4-18.5-10.2-34.4-18.7-45.9-8.6-11.4-19.2-18.7-34.5-21l-16-2.5L160 144c10-12.5 16.7-30.2 16.7-50.1 0-39.2-24.8-68.8-52.4-68.8-2.9 0-4.7-.1-5.2-.1zM440 33c-17.2 0-31 13.77-31 31s13.8 31 31 31 31-13.77 31-31-13.8-31-31-31zM311 55v48H208v18h103v158h-55v18h55v110H208v18h103v32h80.8c-.5-2.9-.8-5.9-.8-9 0-3.1.3-6.1.8-9H329V297h62.8c-.5-2.9-.8-5.9-.8-9 0-3.1.3-6.1.8-9H329V73h62.8c-.5-2.92-.8-5.93-.8-9 0-3.07.3-6.08.8-9H311zm129 202c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31zm0 160c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31z\" fill-opacity=\"1\"></path>\n      </g>\n    </svg>\n  "
        }]
      }], null, {
        fill: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        heigth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/rules-icon.ts":
  /*!**************************************!*\
    !*** ./src/app/shared/rules-icon.ts ***!
    \**************************************/

  /*! exports provided: RulesIcon */

  /***/
  function srcAppSharedRulesIconTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RulesIcon", function () {
      return RulesIcon;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0, a1) {
      return {
        width: a0,
        height: a1
      };
    };

    var RulesIcon = function RulesIcon() {
      _classCallCheck(this, RulesIcon);
    };

    RulesIcon.ɵfac = function RulesIcon_Factory(t) {
      return new (t || RulesIcon)();
    };

    RulesIcon.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RulesIcon,
      selectors: [["rules-icon"]],
      inputs: {
        fill: "fill",
        width: "width",
        heigth: "heigth"
      },
      decls: 3,
      vars: 5,
      consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 2, "height", "512px", "width", "512px", 3, "ngStyle"], ["transform", "translate(0,0)", 1, "", 2, "touch-action", "none"], ["d", "M161.22 19.563l-2.5 5.375-106.44 225.5-1 2.093c-24.493 28.208-34.917 58.587-33.593 88.19 1.38 30.852 15.12 60.388 36.376 86.81l2.812 3.5h49.72c4.817-3.836 8.93-7.817 12.405-12.03 1.758-2.132 3.38-4.358 4.875-6.656H65.97c-17.813-23.187-28.526-47.848-29.626-72.438-1.123-25.11 7.337-50.594 29.937-76.125H498.157l-5.25-12.874-91.844-225.5-2.375-5.843H161.22zm11.843 18.687h177.343l52.656 41.594 38.407 94.28-58.845 70.94H75.47L173.062 38.25zM75.156 282.625c-15.31 18.98-20.975 37.778-20.125 56.438.84 18.398 8.276 36.95 20.5 54.468h57.19c4.392-13.517 6.344-29.847 6.78-50.436h-16.188v-18.688h16.313v-.187h115.749v.186h17.156v18.688h-17.25c-.287 17.8-1.447 34.638-4 50.437h221.626c-9.034-36.872-9.112-74.006-.03-110.905H75.155zm83 60.28c-.77 37.698-6.46 65.83-24.72 87.97-14.595 17.7-36.19 30.747-67.28 42.813 8.69 1.658 17.214 3.225 26.53 5.25 14.048 3.052 27.912 6.338 39.033 9.25 5.56 1.455 10.44 2.826 14.374 4.062 1.94.61 3.533 1.074 5.03 1.625 35.245-13.464 55.78-32.897 68.345-58.72 11.944-24.55 16.287-55.713 16.936-92.25h-78.25zm89.25 69.44c-1.632 6.425-3.532 12.668-5.812 18.686h257.03v-18.686H247.407z", "b", "", "fill-opacity", "1"]],
      template: function RulesIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx.width, ctx.heigth));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx.fill);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RulesIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'rules-icon',
          template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" [ngStyle]=\"{width: width, height: heigth}\" style=\"height: 512px; width: 512px;\">\n      <g class=\"\" transform=\"translate(0,0)\" style=\"touch-action: none;\">\n        <path [attr.fill]=\"fill\" d=\"M161.22 19.563l-2.5 5.375-106.44 225.5-1 2.093c-24.493 28.208-34.917 58.587-33.593 88.19 1.38 30.852 15.12 60.388 36.376 86.81l2.812 3.5h49.72c4.817-3.836 8.93-7.817 12.405-12.03 1.758-2.132 3.38-4.358 4.875-6.656H65.97c-17.813-23.187-28.526-47.848-29.626-72.438-1.123-25.11 7.337-50.594 29.937-76.125H498.157l-5.25-12.874-91.844-225.5-2.375-5.843H161.22zm11.843 18.687h177.343l52.656 41.594 38.407 94.28-58.845 70.94H75.47L173.062 38.25zM75.156 282.625c-15.31 18.98-20.975 37.778-20.125 56.438.84 18.398 8.276 36.95 20.5 54.468h57.19c4.392-13.517 6.344-29.847 6.78-50.436h-16.188v-18.688h16.313v-.187h115.749v.186h17.156v18.688h-17.25c-.287 17.8-1.447 34.638-4 50.437h221.626c-9.034-36.872-9.112-74.006-.03-110.905H75.155zm83 60.28c-.77 37.698-6.46 65.83-24.72 87.97-14.595 17.7-36.19 30.747-67.28 42.813 8.69 1.658 17.214 3.225 26.53 5.25 14.048 3.052 27.912 6.338 39.033 9.25 5.56 1.455 10.44 2.826 14.374 4.062 1.94.61 3.533 1.074 5.03 1.625 35.245-13.464 55.78-32.897 68.345-58.72 11.944-24.55 16.287-55.713 16.936-92.25h-78.25zm89.25 69.44c-1.632 6.425-3.532 12.668-5.812 18.686h257.03v-18.686H247.407z\"b fill-opacity=\"1\"></path>\n      </g>\n    </svg>\n  "
        }]
      }], null, {
        fill: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        heigth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/torch-icon.ts":
  /*!**************************************!*\
    !*** ./src/app/shared/torch-icon.ts ***!
    \**************************************/

  /*! exports provided: TorchIcon */

  /***/
  function srcAppSharedTorchIconTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TorchIcon", function () {
      return TorchIcon;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0, a1) {
      return {
        width: a0,
        height: a1
      };
    };

    var TorchIcon = function TorchIcon() {
      _classCallCheck(this, TorchIcon);
    };

    TorchIcon.ɵfac = function TorchIcon_Factory(t) {
      return new (t || TorchIcon)();
    };

    TorchIcon.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TorchIcon,
      selectors: [["torch-icon"]],
      inputs: {
        fill: "fill",
        width: "width",
        heigth: "heigth"
      },
      decls: 3,
      vars: 5,
      consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 2, "height", "512px", "width", "512px", 3, "ngStyle"], ["transform", "translate(0,0)", 1, "", 2, "touch-action", "none"], ["d", "M256.53 19.094c-28.53 0-51.842 23.313-51.842 51.843 0 13.565 5.28 25.95 13.875 35.22l-110.532 78.53h296.814l-110.594-78.25c8.755-9.297 14.156-21.8 14.156-35.5 0-28.53-23.344-51.843-51.875-51.843zm0 18.687c18.432 0 33.19 14.727 33.19 33.157 0 9.792-4.177 18.538-10.845 24.594l-22.72-16.06-22.25 15.81c-6.497-6.044-10.53-14.687-10.53-24.343 0-18.43 14.726-33.156 33.156-33.156zM96.44 204l3.343 11.875 65.376 232.75 1.906 6.813h178.876l1.937-6.813 65.375-232.75L416.594 204H96.437zm24.656 18.688h270.812L331.78 436.75H181.25l-60.156-214.063zm146.187 16.687c29.012 47.73-76.807 70.517-60.155 133.75 11.2 25 29.146 41.394 50.22 42.03 48.84 0 73.57-53.528 60.75-99.842-4.847 24.07-24.934 34.845-34.876 22.375-24.115-30.248 36.436-56.768-15.94-98.313zM127.25 473.72v18.686h258.594V473.72H127.25z", "fill-opacity", "1"]],
      template: function TorchIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx.width, ctx.heigth));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx.fill);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TorchIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'torch-icon',
          template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" [ngStyle]=\"{width: width, height: heigth}\" style=\"height: 512px; width: 512px;\">\n      <g class=\"\" transform=\"translate(0,0)\" style=\"touch-action: none;\">\n        <path [attr.fill]=\"fill\" d=\"M256.53 19.094c-28.53 0-51.842 23.313-51.842 51.843 0 13.565 5.28 25.95 13.875 35.22l-110.532 78.53h296.814l-110.594-78.25c8.755-9.297 14.156-21.8 14.156-35.5 0-28.53-23.344-51.843-51.875-51.843zm0 18.687c18.432 0 33.19 14.727 33.19 33.157 0 9.792-4.177 18.538-10.845 24.594l-22.72-16.06-22.25 15.81c-6.497-6.044-10.53-14.687-10.53-24.343 0-18.43 14.726-33.156 33.156-33.156zM96.44 204l3.343 11.875 65.376 232.75 1.906 6.813h178.876l1.937-6.813 65.375-232.75L416.594 204H96.437zm24.656 18.688h270.812L331.78 436.75H181.25l-60.156-214.063zm146.187 16.687c29.012 47.73-76.807 70.517-60.155 133.75 11.2 25 29.146 41.394 50.22 42.03 48.84 0 73.57-53.528 60.75-99.842-4.847 24.07-24.934 34.845-34.876 22.375-24.115-30.248 36.436-56.768-15.94-98.313zM127.25 473.72v18.686h258.594V473.72H127.25z\" fill-opacity=\"1\"></path>\n      </g>\n    </svg>\n  "
        }]
      }], null, {
        fill: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        heigth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=out-of-session-out-of-session-module-es5.js.map