import{L as l,M as d,N as f,P as u,S as a,T as h,U as C,X as M,Y as g,g as r,i as c,j as i,r as m,s,t as p}from"./chunk-W4LADYDU.js";var N=[{path:"about",component:h},{path:"contact",component:C},{path:"countries",loadChildren:()=>import("./chunk-AKA3GGWD.js").then(o=>o.CountriesModule)},{path:"**",redirectTo:"countries"}],y=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t}),t.\u0275inj=r({imports:[a.forRoot(N),a]});let o=t;return o})();var v=(()=>{let t=class t{constructor(){this.title="countryApp"}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c({type:t,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"row","mt-4"],[1,"col-3"],[1,"col"]],template:function(e,j){e&1&&(m(0,"div",0)(1,"div",1),p(2,"shared-sidebar"),s(),m(3,"div",2),p(4,"router-outlet"),s()())},dependencies:[u,M]});let o=t;return o})();var w=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t,bootstrap:[v]}),t.\u0275inj=r({imports:[f,y,g,l]});let o=t;return o})();d().bootstrapModule(w).catch(o=>console.error(o));
