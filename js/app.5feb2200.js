(function(t){function e(e){for(var n,o,l=e[0],s=e[1],c=e[2],u=0,p=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var s=a[o];0!==i[s]&&(n=!1)}n&&(r.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},i={app:0},r=[];function o(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"2e2f22c6"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a=i[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=n);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=o(t);var c=new Error;r=function(e){s.onerror=s.onload=null,clearTimeout(u);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",c.name="ChunkLoadError",c.type=n,c.request=r,a[1](c)}i[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:s})}),12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/calorie-calculator/",l.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:"",dense:"",elevation:"0"}},[a("div",{staticClass:"d-flex align-center"},[a("v-toolbar-title",[t._v("Calorie Calculator")])],1)]),a("v-main",[a("router-view")],1)],1)},r=[],o={name:"App",data:function(){return{}}},l=o,s=a("2877"),c=a("6544"),u=a.n(c),d=a("7496"),p=a("40dc"),m=a("f6c4"),f=a("2a7f"),v=Object(s["a"])(l,i,r,!1,null,null,null),b=v.exports;u()(v,{VApp:d["a"],VAppBar:p["a"],VMain:m["a"],VToolbarTitle:f["a"]});var h=a("8c4f"),O=(a("d3b7"),a("3ca3"),a("ddb0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("running-calculator")}),g=[],E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"RunningCalculator"},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",md:"8"}},[a("running-form")],1)],1)],1)},D=[],T=a("5530"),R=(a("4de4"),a("caad"),a("2532"),a("d81d"),a("aa9c")),w=a.n(R),U=a("2f62"),I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{"hide-details":"auto",label:"Age",type:"number",outlined:"",clearable:""},model:{value:t.formData.age,callback:function(e){t.$set(t.formData,"age",e)},expression:"formData.age"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{"hide-details":"auto",label:"Weight",type:"number",outlined:"",clearable:""},model:{value:t.formData.weight,callback:function(e){t.$set(t.formData,"weight",e)},expression:"formData.weight"}})],1),a("v-col",{attrs:{cols:"6"}},[a("v-select",{attrs:{slot:"append",items:t.dropdownOptions.weight,"hide-details":"auto",outlined:""},slot:"append",model:{value:t.formData.weightUnit,callback:function(e){t.$set(t.formData,"weightUnit",e)},expression:"formData.weightUnit"}})],1)],1),a("v-row",[a("v-divider")],1),a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{"hide-details":"auto",disabled:!!t.calculatedData.time,placeholder:t.calculatedData.time,"persistent-placeholder":!!t.calculatedData.time,label:"Time (min)",type:"number",outlined:"",clearable:""},model:{value:t.formData.time,callback:function(e){t.$set(t.formData,"time",e)},expression:"formData.time"}})],1)],1),a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{"hide-details":"auto",label:"Degree incline (%)",type:"number",outlined:"",clearable:""},scopedSlots:t._u([{key:"append",fn:function(){return[a("v-btn",{attrs:{color:"primary",small:"",text:""},on:{click:function(e){e.stopPropagation(),t.modals.inclineCalculator=!0}}},[t._v(" Calculate ")])]},proxy:!0}]),model:{value:t.formData.degree,callback:function(e){t.$set(t.formData,"degree",e)},expression:"formData.degree"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{"hide-details":"auto",disabled:!!t.calculatedData.distance,placeholder:t.calculatedData.distance,"persistent-placeholder":!!t.calculatedData.distance,label:"Distance",type:"number",outlined:"",clearable:""},model:{value:t.formData.distance,callback:function(e){t.$set(t.formData,"distance",e)},expression:"formData.distance"}})],1),a("v-col",{attrs:{cols:"6"}},[a("v-select",{attrs:{items:t.dropdownOptions.distance,"hide-details":"auto",outlined:""},model:{value:t.formData.distanceUnit,callback:function(e){t.$set(t.formData,"distanceUnit",e)},expression:"formData.distanceUnit"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{"hide-details":"auto",disabled:Boolean(t.calculatedData.speed),placeholder:t.calculatedData.speed,"persistent-placeholder":Boolean(t.calculatedData.speed),label:"Speed",type:"number",outlined:"",clearable:""},model:{value:t.formData.speed,callback:function(e){t.$set(t.formData,"speed",e)},expression:"formData.speed"}})],1),a("v-col",{attrs:{cols:"6"}},[a("v-select",{attrs:{items:t.dropdownOptions.speed,"hide-details":"auto",outlined:""},model:{value:t.formData.speedUnit,callback:function(e){t.$set(t.formData,"speedUnit",e)},expression:"formData.speedUnit"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-checkbox",{attrs:{label:"Save measurements and configuration for next time."},model:{value:t.formData.saveMeasurements,callback:function(e){t.$set(t.formData,"saveMeasurements",e)},expression:"formData.saveMeasurements"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-btn",{attrs:{type:"submit"}},[t._v("Submit")])],1)],1)],1)],1),a("incline-calculator-modal",{attrs:{"dropdown-options":t.dropdownOptions,open:t.modals.inclineCalculator},on:{save:t.onInclineCalculatorSave}}),a("results-modal",{attrs:{open:t.modals.results},on:{"update:open":function(e){return t.$set(t.modals,"results",e)},close:function(e){t.modals.results=!1}}})],1)},j=[],M=(a("99af"),a("a9e3"),a("b680"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{value:t.open,"max-width":"600px"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[t._v("Calculate Incline Degree")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{"hide-details":"auto",label:"Total elevation",type:"number",outlined:"",clearable:""},model:{value:t.formData.elevation,callback:function(e){t.$set(t.formData,"elevation",e)},expression:"formData.elevation"}})],1),a("v-col",{attrs:{cols:"6"}},[a("v-select",{attrs:{items:t.dropdownOptions.elevation,"hide-details":"auto",outlined:""},model:{value:t.formData.elevationUnit,callback:function(e){t.$set(t.formData,"elevationUnit",e)},expression:"formData.elevationUnit"}})],1),a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{"hide-details":"auto",label:"Distance",type:"number",outlined:"",clearable:""},model:{value:t.formData.distance,callback:function(e){t.$set(t.formData,"distance",e)},expression:"formData.distance"}})],1),a("v-col",{attrs:{cols:"6"}},[a("v-select",{attrs:{items:t.dropdownOptions.distance,"hide-details":"auto",outlined:""},model:{value:t.formData.distanceUnit,callback:function(e){t.$set(t.formData,"distanceUnit",e)},expression:"formData.distanceUnit"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.onSave}},[t._v(" Save ")])],1)],1)],1)}),x=[],y="formData",_=60,C={FOOT:"ft",KILOGRAM:"kg",KILOMETER:"km",KILOMETERS_PER_HOUR:"km/h",METER:"m",MILE:"mi",MILES_PER_HOUR:"m/h",POUND:"lb"},S={DATUM:"datum",IMPERIAL:"imperial",METRIC:"metric"},V={IMPERIAL:{DISTANCE:C.MILE,ELEVATION:C.FOOT,SPEED:C.MILES_PER_HOUR,WEIGHT:C.POUND},METRIC:{DISTANCE:C.KILOMETER,ELEVATION:C.METER,SPEED:C.KILOMETERS_PER_HOUR,WEIGHT:C.KILOGRAM}},L=function(t){var e=t.distance,a=t.distanceUnit,n=t.elevation,i=t.elevationUnit;if(!n||!e)return 0;var r=w()(n).from(i).to(C.METER),o=w()(e).from(a).to(C.METER);return r/o*100},P=function(t){var e=t.degree,a=t.time,n=t.speed,i=t.weight;if(!(n&&a&&i))return 0;var r=n+n*e*9/200,o=(1e3*r/60+17.5)*a*i/1e3;return o},k={props:{dropdownOptions:{type:Object,default:function(){return{}}},open:{type:Boolean,default:!1}},data:function(){return{formData:{distance:"",distanceUnit:C.KILOMETER,elevation:"",elevationUnit:C.METER}}},methods:{onSave:function(){var t=L(this.formData);this.$emit("save",Object(T["a"])(Object(T["a"])({},this.formData),{},{degree:t}))}}},A=k,N=a("8336"),$=a("b0af"),F=a("99d9"),K=a("62ad"),H=a("a523"),B=a("169a"),G=a("0fd9"),W=a("b974"),q=a("2fa4"),J=a("8654"),z=Object(s["a"])(A,M,x,!1,null,null,null),Q=z.exports;u()(z,{VBtn:N["a"],VCard:$["a"],VCardActions:F["a"],VCardText:F["b"],VCardTitle:F["c"],VCol:K["a"],VContainer:H["a"],VDialog:B["a"],VRow:G["a"],VSelect:W["a"],VSpacer:q["a"],VTextField:J["a"]});var X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-bottom-sheet",{attrs:{value:t.open,scrollable:""},on:{"click:outside":function(e){return t.$emit("close")}}},[a("v-sheet",{staticClass:"text-center"},[a("v-btn",{staticClass:"mt-6",attrs:{text:"",color:"red"},on:{click:function(e){return t.$emit("close")}}},[t._v(" close ")]),t.latestTrip?a("div",[a("trip-data",{attrs:{"trip-id":t.latestTrip.id}})],1):t._e()],1)],1)},Y=[],Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pb-16"},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-card-title",{staticClass:"subheading font-weight-bold"},[t._v(" Results ")]),a("v-divider"),a("v-list",{attrs:{dense:""}},[a("v-list-item",[a("v-list-item-content",[t._v("Calories:")]),a("v-list-item-content",{staticClass:"align-end"},[t._v(" "+t._s(t.trip.displayCalories)+" ")])],1)],1),a("v-data-table",{staticClass:"elevation-1",attrs:{dense:"","disable-filtering":"","disable-pagination":"","disable-sort":"","hide-default-header":"","hide-default-footer":"","mobile-breakpoint":"0",headers:t.tableHeader,items:t.tableRows}})],1)],1)],1)],1)},tt=[],et=a("ade3"),at={name:"TripData",props:{tripId:{type:Number,required:!0}},data:function(){return{tableHeader:[S.DATUM,S.METRIC,S.IMPERIAL].map((function(t){return{value:t}}))}},computed:Object(T["a"])(Object(T["a"])({},Object(U["c"])("running",["getTripById"])),{},{tableRows:function(){var t,e,a,n;return this.imperialTrip||this.metricTrip?[(t={},Object(et["a"])(t,S.DATUM,"Weight"),Object(et["a"])(t,S.IMPERIAL,this.imperialTrip.displayWeight),Object(et["a"])(t,S.METRIC,this.metricTrip.displayWeight),t),(e={},Object(et["a"])(e,S.DATUM,"Distance"),Object(et["a"])(e,S.IMPERIAL,this.imperialTrip.displayDistance),Object(et["a"])(e,S.METRIC,this.metricTrip.displayDistance),e),(a={},Object(et["a"])(a,S.DATUM,"Speed"),Object(et["a"])(a,S.IMPERIAL,this.imperialTrip.displaySpeed),Object(et["a"])(a,S.METRIC,this.metricTrip.displaySpeed),a),(n={},Object(et["a"])(n,S.DATUM,"Elevation"),Object(et["a"])(n,S.IMPERIAL,this.imperialTrip.displayElevation),Object(et["a"])(n,S.METRIC,this.metricTrip.displayElevation),n)]:null},trip:function(){return this.getTripById(this.tripId)},imperialTrip:function(){return this.trip.toImperial()},metricTrip:function(){return this.trip.toMetric()}})},nt=at,it=a("8fea"),rt=a("ce7e"),ot=a("8860"),lt=a("da13"),st=a("5d23"),ct=Object(s["a"])(nt,Z,tt,!1,null,null,null),ut=ct.exports;u()(ct,{VCard:$["a"],VCardTitle:F["c"],VCol:K["a"],VDataTable:it["a"],VDivider:rt["a"],VList:ot["a"],VListItem:lt["a"],VListItemContent:st["a"],VRow:G["a"]});var dt=ut,pt={name:"ResultsModal",components:{TripData:dt},props:{open:{type:Boolean,default:!1}},data:function(){return{}},computed:Object(T["a"])({},Object(U["c"])("running",["latestTrip"]))},mt=pt,ft=a("288c"),vt=a("8dd9"),bt=Object(s["a"])(mt,X,Y,!1,null,null,null),ht=bt.exports;u()(bt,{VBottomSheet:ft["a"],VBtn:N["a"],VSheet:vt["a"]});var Ot=function(t,e){var a=w()().list(t);return e&&(a=a.filter((function(t){return e.includes(t.abbr)}))),a=a.map((function(t){return{text:t.plural,value:t.abbr}})),a},gt={name:"RunningForm",components:{InclineCalculatorModal:Q,ResultsModal:ht},data:function(){return{dropdownOptions:{distance:Ot("length",[C.MILE,C.KILOMETER]),elevation:Ot("length",[C.METER,C.FOOT]),speed:Ot("speed",[C.MILES_PER_HOUR,C.KILOMETERS_PER_HOUR]),weight:Ot("mass",[C.KILOGRAM,C.POUND])},formData:{age:"",degree:"",distance:"",distanceUnit:C.KILOMETER,elevation:"",elevationUnit:C.METER,saveMeasurements:!0,speed:"",speedUnit:C.KILOMETERS_PER_HOUR,time:"",weight:"",weightUnit:C.KILOGRAM},modals:{inclineCalculator:!1,results:!1}}},watch:{cacheData:function(){this.cacheForm()}},computed:Object(T["a"])(Object(T["a"])({},Object(U["d"])("running",["calories"])),{},{cacheData:function(){var t=this.formData,e=t.age,a=t.distanceUnit,n=t.elevationUnit,i=t.saveMeasurements,r=t.speedUnit,o=t.weight,l=t.weightUnit;return"".concat(e,"|").concat(a,"|").concat(n,"|").concat(i,"|").concat(r,"|").concat(o,"|").concat(l)},calculatedData:function(){var t=this.formData,e=t.degree,a=t.distance,n=t.distanceUnit,i=t.elevation,r=t.elevationUnit,o=t.speed,l=t.speedUnit,s=t.time,c={},u=a?w()(a).from(n).to(C.KILOMETER):0,d=i?w()(i).from(r).to(C.METER):0,p=o?w()(o).from(l).to(C.KILOMETERS_PER_HOUR):0,m=Number(s),f=Number(e);return!u&&p&&m?(u=p*m/_,c.distance=w()(u).from(C.KILOMETER).to(n).toFixed(2)):!p&&u&&m?(p=u/m*_,c.speed=w()(p).from(C.KILOMETERS_PER_HOUR).to(l).toFixed(2)):!m&&u&&p&&(m=u/p*_,c.time=m.toFixed(2)),!d&&f&&u&&(d=e/100*u,c.elevation=w()(d).from(C.KILOMETER).to(C.METER)),c}}),mounted:function(){this.restoreFormCache()},methods:Object(T["a"])(Object(T["a"])({},Object(U["b"])("running",["processData"])),{},{cacheForm:function(){var t=this.formData,e=t.age,a=t.distanceUnit,n=t.elevationUnit,i=t.saveMeasurements,r=t.speedUnit,o=t.weight,l=t.weightUnit;if(i){var s={age:e,distanceUnit:a,elevationUnit:n,speedUnit:r,weight:o,weightUnit:l};localStorage.setItem(y,JSON.stringify(s))}else localStorage.removeItem(y)},restoreFormCache:function(){var t=localStorage.getItem(y);if(t){try{t=JSON.parse(t)}catch(e){console.error(e)}this.formData=Object(T["a"])(Object(T["a"])({},this.formData),t)}},onInclineCalculatorSave:function(t){this.formData=Object(T["a"])(Object(T["a"])({},this.formData),t),this.modals.inclineCalculator=!1},onSubmit:function(){var t=this.sanitizeData(Object(T["a"])(Object(T["a"])({},this.formData),this.calculatedData));this.processData(t),this.modals.results=!0},sanitizeData:function(t){var e={};return e.age=Number(t.age),e.degree=Number(t.degree),e.distance=Number(t.distance),e.elevation=Number(t.elevation),e.speed=Number(t.speed),e.time=Number(t.time),e.weight=Number(t.weight),Object(T["a"])(Object(T["a"])({},t),e)}})},Et=gt,Dt=a("ac7c"),Tt=a("4bd4"),Rt=Object(s["a"])(Et,I,j,!1,null,"f7874a12",null),wt=Rt.exports;u()(Rt,{VBtn:N["a"],VCheckbox:Dt["a"],VCol:K["a"],VContainer:H["a"],VDivider:rt["a"],VForm:Tt["a"],VRow:G["a"],VSelect:W["a"],VTextField:J["a"]});var Ut={name:"RunningCalculator",components:{RunningForm:wt},data:function(){return{conversionTableHeader:[{text:"Calculated",align:"start",sortable:!1,value:"name"},{text:"Metric",value:"metric"},{text:"Imperial",value:"imperial"}],dataUnitMap:{elevation:{imperial:C.FOOT,metric:C.METER},speed:{imperial:C.MILES_PER_HOUR,metric:C.KILOMETERS_PER_HOUR},distance:{imperial:C.MILE,metric:C.KILOMETER},weight:{imperial:C.POUND,metric:C.KILOGRAM}}}},watch:{cacheData:function(){this.cacheForm()}},computed:Object(T["a"])({},Object(U["d"])("running",["trips"])),mounted:function(){},methods:Object(T["a"])(Object(T["a"])({},Object(U["b"])("running",["calculateCalories"])),{},{getDropdownOptions:function(t,e){var a=w()().list(t);return e&&(a=a.filter((function(t){return e.includes(t.abbr)}))),a=a.map((function(t){return{text:t.plural,value:t.abbr}})),a}})},It=Ut,jt=Object(s["a"])(It,E,D,!1,null,"4c0779be",null),Mt=jt.exports;u()(jt,{VCol:K["a"],VRow:G["a"]});var xt=Mt,yt={name:"HomeView",components:{RunningCalculator:xt}},_t=yt,Ct=Object(s["a"])(_t,O,g,!1,null,null,null),St=Ct.exports,Vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("running-calculator")},Lt=[],Pt={name:"RunningView",components:{RunningCalculator:xt}},kt=Pt,At=Object(s["a"])(kt,Vt,Lt,!1,null,null,null),Nt=At.exports,$t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("trip-list")},Ft=[],Kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-expansion-panels",t._l(t.trips,(function(e,n){var i=e.calories;return a("v-expansion-panel",{key:n},[a("v-expansion-panel-header",[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"3"}},[t._v(" Calories: "+t._s(i)+" ")])],1)],1),a("v-expansion-panel-content",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")])],1)})),1)},Ht=[],Bt={name:"TripList",computed:Object(T["a"])({},Object(U["d"])("running",["trips"]))},Gt=Bt,Wt=a("cd55"),qt=a("49e2"),Jt=a("c865"),zt=a("0393"),Qt=Object(s["a"])(Gt,Kt,Ht,!1,null,null,null),Xt=Qt.exports;u()(Qt,{VCol:K["a"],VExpansionPanel:Wt["a"],VExpansionPanelContent:qt["a"],VExpansionPanelHeader:Jt["a"],VExpansionPanels:zt["a"],VRow:G["a"]});var Yt=Xt,Zt={name:"TripsView",components:{TripList:Yt}},te=Zt,ee=Object(s["a"])(te,$t,Ft,!1,null,null,null),ae=ee.exports,ne=[{path:"/",name:"Home",component:St},{path:"/running",name:"Running",component:Nt},{path:"/trips",name:"Trips",component:ae},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"d7a9"))}}];n["a"].use(h["a"]);var ie=new h["a"]({routes:ne}),re=ie,oe=(a("7db0"),a("d4ec")),le=a("bee2"),se=function(){function t(e){var a=e.calories,n=e.degree,i=e.distance,r=e.distanceUnit,o=e.elevation,l=e.elevationUnit,s=e.speed,c=e.speedUnit,u=e.time,d=e.weight,p=e.weightUnit;Object(oe["a"])(this,t),Object(et["a"])(this,"id",0),Object(et["a"])(this,"calories",0),Object(et["a"])(this,"degree",0),Object(et["a"])(this,"distance",0),Object(et["a"])(this,"distanceUnit",""),Object(et["a"])(this,"elevation",0),Object(et["a"])(this,"elevationUnit",""),Object(et["a"])(this,"speed",0),Object(et["a"])(this,"speedUnit",""),Object(et["a"])(this,"time",0),Object(et["a"])(this,"weight",0),Object(et["a"])(this,"weightUnit",""),this.id=Date.now(),this.calories=Number(a),this.degree=Number(n),this.distance=Number(i),this.distanceUnit=r,this.elevation=Number(o),this.elevationUnit=l,this.speed=Number(s),this.speedUnit=c,this.time=Number(u),this.weight=Number(d),this.weightUnit=p}return Object(le["a"])(t,[{key:"displayCalories",get:function(){return this.calories.toFixed(2)}},{key:"displayDistance",get:function(){return"".concat(this.distance.toFixed(2)," ").concat(this.distanceUnit)}},{key:"displayElevation",get:function(){return"".concat(this.elevation.toFixed(2)," ").concat(this.elevationUnit)}},{key:"displaySpeed",get:function(){return"".concat(this.speed.toFixed(2)," ").concat(this.speedUnit)}},{key:"displayWeight",get:function(){return"".concat(this.weight.toFixed(2)," ").concat(this.weightUnit)}},{key:"toUnitSystem",value:function(e){var a=e.ELEVATION,n=e.SPEED,i=e.DISTANCE,r=e.WEIGHT,o={elevation:w()(this.elevation).from(this.elevationUnit).to(a),elevationUnit:a,speed:w()(this.speed).from(this.speedUnit).to(n),speedUnit:n,distance:w()(this.distance).from(this.distanceUnit).to(i),distanceUnit:i,weight:w()(this.weight).from(this.weightUnit).to(r),weightUnit:r};return new t(Object(T["a"])(Object(T["a"])({},this),o))}},{key:"toImperial",value:function(){return this.toUnitSystem(V.IMPERIAL)}},{key:"toMetric",value:function(){return this.toUnitSystem(V.METRIC)}}]),t}(),ce=se,ue=function(){return{trips:[]}},de={getTripById:function(t){return function(e){return t.trips.find((function(t){return t.id===e}))}},latestTrip:function(t){var e=t.trips,a=e.length;return a?e[a-1]:null}},pe={processData:function(t,e){var a=t.commit,n=P(e);a("CREATE_TRIP",Object(T["a"])({calories:n},e))}},me={CREATE_TRIP:function(t,e){var a=new ce(e);t.trips.push(a)}},fe={namespaced:!0,state:ue,getters:de,actions:pe,mutations:me};n["a"].use(U["a"]);var ve=!1,be=new U["a"].Store({modules:{running:fe},strict:ve}),he=a("f309");n["a"].use(he["a"]);var Oe=new he["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:re,store:be,vuetify:Oe,render:function(t){return t(b)}}).$mount("#app")}});
//# sourceMappingURL=app.5feb2200.js.map