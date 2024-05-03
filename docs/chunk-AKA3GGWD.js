import{A as P,B as w,C as I,D as _,E as D,F as W,G as M,H as C,I as L,J as X,K as Y,O as Z,Q as ee,R as te,S as k,V as ie,W as N,Y as ne,a as V,b as A,c as $,d as z,e as y,f as J,g as B,h as H,i as d,j as R,k as G,l as K,m as T,n as c,o as h,p as f,q as p,r as t,s as n,t as u,u as Q,v as S,w as v,x as F,y as o,z as m}from"./chunk-W4LADYDU.js";var g=(()=>{let e=class e{constructor(r){this.http=r,this.apiUrl="https://restcountries.com/v3.1",this.cacheStore={byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegion:{region:"",countries:[]}},this.loadFromLocalStorage()}saveToLocalStorage(){localStorage.setItem("cacheStore",JSON.stringify(this.cacheStore))}loadFromLocalStorage(){localStorage.getItem("cacheStore")&&(this.cacheStore=JSON.parse(localStorage.getItem("cacheStore")))}getCountriesRequest(r){return this.http.get(r).pipe($(()=>V([])))}searchCountryByCode(r){return this.http.get(`${this.apiUrl}/alpha/${r}`).pipe(A(a=>a.length>0?a[0]:null),$(()=>V(null)))}searchCapital(r){let a=`${this.apiUrl}/capital/${r}`;return this.getCountriesRequest(a).pipe(y(l=>this.cacheStore.byCapital={term:r,countries:l}),y(()=>this.saveToLocalStorage()))}searchCountry(r){let a=`${this.apiUrl}/name/${r}`;return this.getCountriesRequest(a).pipe(y(l=>this.cacheStore.byCountries={term:r,countries:l}),y(()=>this.saveToLocalStorage()))}searchRegion(r){let a=`${this.apiUrl}/region/${r}`;return this.getCountriesRequest(a).pipe(y(l=>this.cacheStore.byRegion={region:r,countries:l}),y(()=>this.saveToLocalStorage()))}};e.\u0275fac=function(a){return new(a||e)(H(Y))},e.\u0275prov=J({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var me=i=>["/countries/by",i];function pe(i,e){i&1&&(t(0,"div",2),o(1,` No hay paises que mostrar
`),n())}function ue(i,e){if(i&1&&(t(0,"tr")(1,"td"),o(2),n(),t(3,"td"),o(4),n(),t(5,"td"),u(6,"img",5),n(),t(7,"td"),o(8),n(),t(9,"td"),o(10),n(),t(11,"td"),o(12),n(),t(13,"td"),o(14),I(15,"number"),n(),t(16,"td")(17,"a",6),o(18," Info "),n()()()),i&2){let s=e.$implicit,r=e.index;c(2),m(r+1),c(2),P(" ",s.flag," "),c(2),p("src",s.flags.svg,T)("alt",s.name.common),c(2),m(s.name.common),c(2),m(s.capital),c(2),m(s.region),c(2),m(_(15,9,s.population)),c(3),p("routerLink",w(11,me,s.cca3))}}function de(i,e){if(i&1&&(t(0,"table",3)(1,"thead")(2,"tr")(3,"th"),o(4,"#"),n(),t(5,"th"),o(6,"Icon"),n(),t(7,"th"),o(8,"Bandera"),n(),t(9,"th"),o(10,"Nombre"),n(),t(11,"th"),o(12,"Capital"),n(),t(13,"th"),o(14,"Regi\xF3n"),n(),t(15,"th"),o(16,"Poblaci\xF3n"),n()()(),t(17,"tbody"),f(18,ue,19,13,"tr",4),n()()),i&2){let s=v();c(18),p("ngForOf",s.countries)}}var b=(()=>{let e=class e{constructor(){this.countries=[]}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=d({type:e,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["table",""],["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],[1,"alert","alert-warning","text-center"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],[3,"src","alt"],[3,"routerLink"]],template:function(a,l){if(a&1&&f(0,pe,2,0,"div",1)(1,de,19,1,"ng-template",null,0,D),a&2){let E=F(2);p("ngIf",l.countries.length===0)("ngIfElse",E)}},dependencies:[M,C,te,L],styles:["img[_ngcontent-%COMP%]{width:35px}"]});let i=e;return i})();function fe(i,e){i&1&&u(0,"shared-loading-spinner")}var re=(()=>{let e=class e{constructor(r){this.countriesService=r,this.countries=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCapital.countries,this.initialValue=this.countriesService.cacheStore.byCapital.term}searchByCapital(r){this.isLoading=!0,this.countriesService.searchCapital(r).subscribe(a=>{this.countries=a,this.isLoading=!1})}};e.\u0275fac=function(a){return new(a||e)(h(g))},e.\u0275cmp=d({type:e,selectors:[["app-by-capital-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por capital",3,"onDebounce","initialValue"],[4,"ngIf"],[3,"countries"]],template:function(a,l){a&1&&(t(0,"h2"),o(1,"Por capital"),n(),u(2,"hr"),t(3,"div",0)(4,"div",1)(5,"shared-search-box",2),S("onDebounce",function(j){return l.searchByCapital(j)}),n()()(),t(6,"div",0)(7,"div",1),u(8,"hr"),f(9,fe,1,0,"shared-loading-spinner",3),u(10,"countries-table",4),n()()),a&2&&(c(5),p("initialValue",l.initialValue),c(4),p("ngIf",l.isLoading),c(),p("countries",l.countries))},dependencies:[C,ie,N,b]});let i=e;return i})();var oe=(()=>{let e=class e{constructor(r){this.countriesService=r,this.countries=[],this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCountries.countries,this.initialValue=this.countriesService.cacheStore.byCountries.term}searchByCountry(r){this.countriesService.searchCountry(r).subscribe(a=>{this.countries=a})}};e.\u0275fac=function(a){return new(a||e)(h(g))},e.\u0275cmp=d({type:e,selectors:[["app-by-country-page"]],decls:10,vars:2,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por pais",3,"onDebounce","initialValue"],[3,"countries"]],template:function(a,l){a&1&&(t(0,"h2"),o(1,"Por pais"),n(),u(2,"hr"),t(3,"div",0)(4,"div",1)(5,"shared-search-box",2),S("onDebounce",function(j){return l.searchByCountry(j)}),n()()(),t(6,"div",0)(7,"div",1),u(8,"hr")(9,"countries-table",3),n()()),a&2&&(c(5),p("initialValue",l.initialValue),c(4),p("countries",l.countries))},dependencies:[N,b]});let i=e;return i})();var ge=i=>({"btn-outline-primary":i});function ye(i,e){if(i&1){let s=Q();t(0,"button",5),S("click",function(){let a=G(s).$implicit,l=v();return K(l.searchByRegion(a))}),o(1),n()}if(i&2){let s=e.$implicit,r=v();p("ngClass",w(2,ge,s===r.selectedRegion)),c(),P(" ",s," ")}}var ae=(()=>{let e=class e{constructor(r){this.CountriesService=r,this.countries=[],this.regions=["Africa","Americas","Asia","Europe","Oceania"]}ngOnInit(){this.countries=this.CountriesService.cacheStore.byRegion.countries,this.selectedRegion=this.CountriesService.cacheStore.byRegion.region}searchByRegion(r){this.selectedRegion=r,this.CountriesService.searchRegion(r).subscribe(a=>{this.countries=a})}};e.\u0275fac=function(a){return new(a||e)(h(g))},e.\u0275cmp=d({type:e,selectors:[["app-by-region-page"]],decls:10,vars:2,consts:[[1,"row"],[1,"col","text-center"],["class","btn mx-2",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[3,"countries"],[1,"btn","mx-2",3,"click","ngClass"]],template:function(a,l){a&1&&(t(0,"h2"),o(1,"Por region"),n(),u(2,"hr"),t(3,"div",0)(4,"div",1),f(5,ye,2,4,"button",2),n()(),t(6,"div",0)(7,"div",3),u(8,"hr")(9,"countries-table",4),n()()),a&2&&(c(5),p("ngForOf",l.regions),c(4),p("countries",l.countries))},dependencies:[W,M,b]});let i=e;return i})();function ve(i,e){i&1&&(t(0,"div",2),o(1," Espere por favor... "),t(2,"div")(3,"div",3)(4,"span",4),o(5,"Loading..."),n()()()())}function xe(i,e){if(i&1&&(t(0,"div")(1,"div",5)(2,"div",6)(3,"h2"),o(4,"Pais: "),t(5,"strong"),o(6),n()(),u(7,"hr"),n(),t(8,"div",5)(9,"div",7)(10,"h3"),o(11,"Bandera"),n(),u(12,"img",8),n(),t(13,"div",9)(14,"h3"),o(15,"Detalles"),n(),t(16,"ul",10)(17,"li",11),o(18,"Capital: "),t(19,"strong"),o(20),n()(),t(21,"li",11),o(22,"Area: "),t(23,"strong"),o(24),I(25,"number"),n(),o(26," km\xB2"),n(),t(27,"li",11),o(28,"Poblaci\xF3n: "),t(29,"strong"),o(30),I(31,"number"),n(),o(32," habitantes"),n(),t(33,"li",11),o(34,"Regi\xF3n: "),t(35,"strong"),o(36),n()(),t(37,"li",11),o(38,"Subregi\xF3n: "),t(39,"strong"),o(40),n()()()()()(),t(41,"div",12)(42,"div",9)(43,"h3"),o(44,"Traducciones"),n(),t(45,"div",13)(46,"span",14),o(47),n(),t(48,"span",14),o(49),n(),t(50,"span",14),o(51),n(),t(52,"span",14),o(53),n(),t(54,"span",14),o(55),n(),t(56,"span",14),o(57),n(),t(58,"span",14),o(59),n()()()()()),i&2){let s=v();c(6),m(s.country.name.common),c(6),p("src",s.country.flags.svg,T)("alt",s.country.name.common),c(8),m(s.country.capital),c(4),m(_(25,15,s.country.area)),c(6),m(_(31,17,s.country.population)),c(6),m(s.country.region),c(4),m(s.country.subregion),c(7),m(s.country.translations.ara.common),c(2),m(s.country.translations.deu.common),c(2),m(s.country.translations.fra.common),c(2),m(s.country.translations.ita.common),c(2),m(s.country.translations.por.common),c(2),m(s.country.translations.rus.common),c(2),m(s.country.translations.spa.common)}}var ce=(()=>{let e=class e{constructor(r,a,l){this.activatedRoute=r,this.countriesService=a,this.router=l}ngOnInit(){this.activatedRoute.params.pipe(z(({id:r})=>this.countriesService.searchCountryByCode(r))).subscribe(r=>r?this.country=r:this.router.navigateByUrl(""))}};e.\u0275fac=function(a){return new(a||e)(h(Z),h(g),h(ee))},e.\u0275cmp=d({type:e,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],["role","status",1,"spinner-border"],[1,"sr-only"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-fluid",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(a,l){if(a&1&&f(0,ve,6,0,"ng-template",null,0,D)(2,xe,60,19,"div",1),a&2){let E=F(1);c(2),p("ngIf",l.country)("ngIfElse",E)}},dependencies:[C,L]});let i=e;return i})();var Se=[{path:"by-capital",component:re},{path:"by-country",component:oe},{path:"by-region",component:ae},{path:"by/:id",component:ce},{path:"**",redirectTo:"by-capital"}],se=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=R({type:e}),e.\u0275inj=B({imports:[k.forChild(Se),k]});let i=e;return i})();var Ke=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=R({type:e}),e.\u0275inj=B({imports:[X,se,ne]});let i=e;return i})();export{Ke as CountriesModule};
