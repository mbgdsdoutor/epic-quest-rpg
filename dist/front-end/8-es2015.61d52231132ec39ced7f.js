(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{txKf:function(r,e,o){"use strict";o.r(e),o.d(e,"AuthModule",(function(){return I}));var t=o("ofXK"),i=o("3Pt+"),s=o("tk/3"),n=o("tyNb"),a=o("fXoL");let c=(()=>{class r{constructor(){}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=a.Hb({type:r,selectors:[["app-auth"]],decls:1,vars:0,template:function(r,e){1&r&&a.Ob(0,"router-outlet")},directives:[n.f],encapsulation:2}),r})();var u=o("UBG9"),l=o("LRne");let m=(()=>{class r{constructor(r,e,o){this.http=r,this.tokenService=e,this.router=o}authenticatea(r){return this.http.post("http://localhost:8085/api/v1/login",{username:r.username,password:r.password})}authenticate(r){return Object(l.a)({access_token:"madokinha_star"})}logout(){this.tokenService.signOut(),this.router.navigateByUrl("/auth/login")}}return r.\u0275fac=function(e){return new(e||r)(a.Xb(s.a),a.Xb(u.a),a.Xb(n.c))},r.\u0275prov=a.Jb({token:r,factory:r.\u0275fac}),r})();const b=function(){return["/auth/password/"]},d=function(){return["/auth/register/"]};let f=(()=>{class r{constructor(r,e,o,t){this.formBuilder=r,this.tokenStorageService=e,this.router=o,this.authService=t}ngOnInit(){this.configurarForm(),this.tokenStorageService.isLogged()&&this.router.navigateByUrl("/home")}configurarForm(){const r=this.formBuilder.control(null,[i.r.required]),e=this.formBuilder.control(null,[i.r.required]);this.form=this.formBuilder.group({username:r,password:e})}login(){const r=this.form.value;this.authService.authenticate(r).subscribe(e=>{console.log("MADOKAAAAAAAAAAAAAAA NELES",e),e&&e.access_token&&(this.tokenStorageService.saveToken(e.access_token),this.tokenStorageService.saveUser(r),this.router.navigateByUrl("/home"))},r=>{alert("erro doido!")})}}return r.\u0275fac=function(e){return new(e||r)(a.Nb(i.c),a.Nb(u.a),a.Nb(n.c),a.Nb(m))},r.\u0275cmp=a.Hb({type:r,selectors:[["app-login"]],decls:19,vars:5,consts:[[1,"auth-form-container",3,"formGroup"],["alt","epic-quest-logo","src","assets/images/epicquest.png"],[1,"auth-form"],[1,"field"],["for","username"],["placeholder","seu e-mail ou nome de usu\xe1rio","id","username","formControlName","username",1,"input"],["username",""],["for","password"],["placeholder","sua senha","type","password","id","password","formControlName","password",1,"input"],[1,"button--primary","full",3,"click"],[1,"auth-form-actions"],[1,"button--link",3,"routerLink"],[1,"button--primary",3,"routerLink"]],template:function(r,e){1&r&&(a.Tb(0,"form",0),a.Ob(1,"img",1),a.Tb(2,"div",2),a.Tb(3,"div",3),a.Tb(4,"label",4),a.Ec(5,"Login"),a.Sb(),a.Ob(6,"input",5,6),a.Sb(),a.Tb(8,"div",3),a.Tb(9,"label",7),a.Ec(10,"Senha"),a.Sb(),a.Ob(11,"input",8),a.Sb(),a.Tb(12,"button",9),a.bc("click",(function(){return e.login()})),a.Ec(13,"Entrar"),a.Sb(),a.Tb(14,"div",10),a.Tb(15,"button",11),a.Ec(16,"Esqueceu sua senha?"),a.Sb(),a.Tb(17,"button",12),a.Ec(18,"Criar Conta"),a.Sb(),a.Sb(),a.Sb(),a.Sb()),2&r&&(a.kc("formGroup",e.form),a.Ab(15),a.kc("routerLink",a.mc(3,b)),a.Ab(2),a.kc("routerLink",a.mc(4,d)))},directives:[i.s,i.m,i.g,i.b,i.l,i.e,n.d],encapsulation:2}),r})();const p=function(){return["/auth/login/"]};let h=(()=>{class r{constructor(r,e,o,t){this.formBuilder=r,this.tokenStorageService=e,this.router=o,this.authService=t}ngOnInit(){this.configurarForm(),this.tokenStorageService.isLogged()&&this.router.navigateByUrl("/home")}configurarForm(){const r=this.formBuilder.control(null,[i.r.required]);this.form=this.formBuilder.group({email:r})}}return r.\u0275fac=function(e){return new(e||r)(a.Nb(i.c),a.Nb(u.a),a.Nb(n.c),a.Nb(m))},r.\u0275cmp=a.Hb({type:r,selectors:[["app-forgot-password"]],decls:14,vars:3,consts:[[1,"auth-form-container",3,"formGroup"],["alt","epic-quest-logo","src","assets/images/epicquest.png"],[1,"auth-form"],[1,"field"],["for","username"],["placeholder","digite seu email cadastrado","id","email","formControlName","email",1,"input"],[1,"auth-form-actions"],[1,"button--link",3,"routerLink"],[1,"button--primary"]],template:function(r,e){1&r&&(a.Tb(0,"form",0),a.Ob(1,"img",1),a.Tb(2,"div",2),a.Tb(3,"p"),a.Ec(4,"Enviaremos um link para redefini\xe7\xe3o da sua senha para o e-mail fornecido."),a.Sb(),a.Tb(5,"div",3),a.Tb(6,"label",4),a.Ec(7,"E-mail"),a.Sb(),a.Ob(8,"input",5),a.Sb(),a.Tb(9,"div",6),a.Tb(10,"button",7),a.Ec(11,"Voltar para login"),a.Sb(),a.Tb(12,"button",8),a.Ec(13,"Enviar"),a.Sb(),a.Sb(),a.Sb(),a.Sb()),2&r&&(a.kc("formGroup",e.form),a.Ab(10),a.kc("routerLink",a.mc(2,p)))},directives:[i.s,i.m,i.g,i.b,i.l,i.e,n.d],encapsulation:2}),r})();class g{static get EMAIL(){return r=>r.value&&!r.value.match(/\S+@\S+\.\S+/)?{email:!0}:null}static get HORA(){return r=>r.value&&!r.value.match(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)?{hora:!0}:null}}var v=o("YBvw"),S=o("d3Ko"),k=o("6IIF");function T(r,e){1&r&&(a.Tb(0,"div"),a.Tb(1,"small"),a.Ec(2,"campo obrigat\xf3rio."),a.Sb(),a.Sb())}function w(r,e){1&r&&(a.Tb(0,"div"),a.Tb(1,"small"),a.Ec(2,"campo obrigat\xf3rio."),a.Sb(),a.Sb())}function N(r,e){1&r&&(a.Tb(0,"div"),a.Tb(1,"small"),a.Ec(2,"email inv\xe1lido."),a.Sb(),a.Sb())}function A(r,e){1&r&&(a.Tb(0,"div"),a.Tb(1,"small"),a.Ec(2,"campo obrigat\xf3rio."),a.Sb(),a.Sb())}function E(r,e){1&r&&(a.Tb(0,"div"),a.Tb(1,"small"),a.Ec(2,"campo obrigat\xf3rio."),a.Sb(),a.Sb())}function C(r,e){1&r&&(a.Tb(0,"div"),a.Tb(1,"small"),a.Ec(2,"campo obrigat\xf3rio."),a.Sb(),a.Sb())}function O(r,e){1&r&&(a.Tb(0,"div"),a.Tb(1,"small"),a.Ec(2,"campo obrigat\xf3rio."),a.Sb(),a.Sb())}function B(r,e){1&r&&(a.Tb(0,"div"),a.Tb(1,"small"),a.Ec(2,"as senhas devem coincidir."),a.Sb(),a.Sb())}const y=function(r){return{error:r}},L=function(){return["/auth/login/"]},q=[{path:"",component:c,children:[{path:"",pathMatch:"full",redirectTo:"home"},{path:"login",component:f},{path:"register",component:(()=>{class r{constructor(r,e,o,t,i,s){this.formBuilder=r,this.loadingService=e,this.messageService=o,this.tokenStorageService=t,this.router=i,this.userService=s}ngOnInit(){this.messageService.success("teste"),this.configurarForm(),this.tokenStorageService.isLogged()&&this.router.navigateByUrl("/home")}configurarForm(){const r=this.formBuilder.control(null,[i.r.required]),e=this.formBuilder.control(null,[i.r.required,g.EMAIL]),o=this.formBuilder.control(null,[i.r.required]),t=this.formBuilder.control(null,[i.r.required]),s=this.formBuilder.control(null,[i.r.required]),n=this.formBuilder.control(null,[i.r.required,this.matchValues("password")]),a=this.formBuilder.control(null,[]);this.form=this.formBuilder.group({fullName:r,email:e,userName:o,description:t,password:s,confirmPassword:n,photoUrl:a})}salvarUsuario(){const r=this.form.value;this.loadingService.startLoadingBar(),this.userService.saveUser(r).subscribe(r=>{this.loadingService.stopLoadingBar(),this.messageService.success("Usu\xe1rio registrado."),console.log("USUARIO SALVO COM SUCESSO!",r)},r=>{this.loadingService.stopLoadingBar(),this.messageService.error("Erro ao salvar usu\xe1rio.")})}matchValues(r){return e=>e.parent&&e.parent.value&&e.value===e.parent.controls[r].value?null:{isMatching:!0}}}return r.\u0275fac=function(e){return new(e||r)(a.Nb(i.c),a.Nb(v.a),a.Nb(S.a),a.Nb(u.a),a.Nb(n.c),a.Nb(k.a))},r.\u0275cmp=a.Hb({type:r,selectors:[["app-register"]],decls:46,vars:33,consts:[[1,"auth-form-container",3,"formGroup"],[1,"register-form-header"],[1,"auth-form"],[1,"field",3,"ngClass"],["for","fullName"],["placeholder","seu nome completo","id","fullName","formControlName","fullName",1,"input"],[4,"ngIf"],["for","email"],["placeholder","seu email","id","email","formControlName","email",1,"input"],["for","userName"],["placeholder","seu nome de usu\xe1rio (nick)","id","userName","formControlName","userName",1,"input"],["for","description"],["placeholder","fale um pouco sobre voc\xea","id","description","formControlName","description",1,"input"],["for","photoUrl"],["placeholder","url da foto","id","photoUrl","formControlName","photoUrl",1,"input"],["for","password"],["placeholder","digite sua senha","type","password","id","password","formControlName","password",1,"input"],["for","confirmPassword"],["placeholder","confirme sua senha","type","password","id","confirmPassword","formControlName","confirmPassword",1,"input"],[1,"auth-form-actions"],[1,"button--link",3,"routerLink"],[1,"button--primary",3,"disabled","click"]],template:function(r,e){1&r&&(a.Tb(0,"form",0),a.Tb(1,"div",1),a.Tb(2,"h3"),a.Ec(3,"Criar uma nova conta"),a.Sb(),a.Sb(),a.Tb(4,"div",2),a.Tb(5,"div",3),a.Tb(6,"label",4),a.Ec(7,"Nome Completo"),a.Sb(),a.Ob(8,"input",5),a.Cc(9,T,3,0,"div",6),a.Sb(),a.Tb(10,"div",3),a.Tb(11,"label",7),a.Ec(12,"E-mail"),a.Sb(),a.Ob(13,"input",8),a.Cc(14,w,3,0,"div",6),a.Cc(15,N,3,0,"div",6),a.Sb(),a.Tb(16,"div",3),a.Tb(17,"label",9),a.Ec(18,"Nome de Usu\xe1rio"),a.Sb(),a.Ob(19,"input",10),a.Cc(20,A,3,0,"div",6),a.Sb(),a.Tb(21,"div",3),a.Tb(22,"label",11),a.Ec(23,"Descri\xe7\xe3o"),a.Sb(),a.Ob(24,"input",12),a.Cc(25,E,3,0,"div",6),a.Sb(),a.Tb(26,"div",3),a.Tb(27,"label",13),a.Ec(28,"Foto"),a.Sb(),a.Ob(29,"input",14),a.Sb(),a.Tb(30,"div",3),a.Tb(31,"label",15),a.Ec(32,"Senha"),a.Sb(),a.Ob(33,"input",16),a.Cc(34,C,3,0,"div",6),a.Sb(),a.Tb(35,"div",3),a.Tb(36,"label",17),a.Ec(37,"Confirmar Senha"),a.Sb(),a.Ob(38,"input",18),a.Cc(39,O,3,0,"div",6),a.Cc(40,B,3,0,"div",6),a.Sb(),a.Tb(41,"div",19),a.Tb(42,"button",20),a.Ec(43,"J\xe1 \xe9 cadastrado?"),a.Sb(),a.Tb(44,"button",21),a.bc("click",(function(){return e.salvarUsuario()})),a.Ec(45,"Registrar"),a.Sb(),a.Sb(),a.Sb(),a.Sb()),2&r&&(a.kc("formGroup",e.form),a.Ab(5),a.kc("ngClass",a.nc(18,y,e.form.get("fullName").errors&&e.form.get("fullName").touched)),a.Ab(4),a.kc("ngIf",e.form.get("fullName").errors&&e.form.get("fullName").errors.required),a.Ab(1),a.kc("ngClass",a.nc(20,y,e.form.get("email").errors&&e.form.get("email").touched)),a.Ab(4),a.kc("ngIf",e.form.get("email").errors&&e.form.get("email").errors.required),a.Ab(1),a.kc("ngIf",e.form.get("email").errors&&e.form.get("email").errors.email),a.Ab(1),a.kc("ngClass",a.nc(22,y,e.form.get("userName").errors&&e.form.get("userName").touched)),a.Ab(4),a.kc("ngIf",e.form.get("userName").errors&&e.form.get("userName").errors.required),a.Ab(1),a.kc("ngClass",a.nc(24,y,e.form.get("description").errors&&e.form.get("description").touched)),a.Ab(4),a.kc("ngIf",e.form.get("description").errors&&e.form.get("description").errors.required),a.Ab(1),a.kc("ngClass",a.nc(26,y,e.form.get("photoUrl").errors&&e.form.get("photoUrl").touched)),a.Ab(4),a.kc("ngClass",a.nc(28,y,e.form.get("password").errors&&e.form.get("password").touched)),a.Ab(4),a.kc("ngIf",e.form.get("password").errors&&e.form.get("password").errors.required),a.Ab(1),a.kc("ngClass",a.nc(30,y,e.form.get("confirmPassword").errors&&e.form.get("confirmPassword").touched)),a.Ab(4),a.kc("ngIf",e.form.get("confirmPassword").errors&&e.form.get("confirmPassword").errors.required),a.Ab(1),a.kc("ngIf",e.form.get("confirmPassword").errors&&e.form.get("confirmPassword").errors.isMatching),a.Ab(2),a.kc("routerLink",a.mc(32,L)),a.Ab(2),a.kc("disabled",e.form.invalid||e.form.pristine))},directives:[i.s,i.m,i.g,t.i,i.b,i.l,i.e,t.k,n.d],styles:[".register-form-header[_ngcontent-%COMP%]{display:flex;flex-direction:row;padding:24px 32px 0;width:100%;max-width:520px}.register-form-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0}"]}),r})()},{path:"password",component:h}]}];let U=(()=>{class r{}return r.\u0275mod=a.Lb({type:r}),r.\u0275inj=a.Kb({factory:function(e){return new(e||r)},imports:[[n.e.forChild(q),s.b,i.h,t.c],n.e]}),r})(),I=(()=>{class r{}return r.\u0275mod=a.Lb({type:r}),r.\u0275inj=a.Kb({factory:function(e){return new(e||r)},providers:[m,k.a],imports:[[U,i.h,i.q,t.c]]}),r})()}}]);