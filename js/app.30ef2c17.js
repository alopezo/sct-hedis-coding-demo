(function(t){function e(e){for(var n,s,r=e[0],l=e[1],c=e[2],u=0,p=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,r=1;r<i.length;r++){var l=i[r];0!==o[l]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},o={app:0},a=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/sct-hedis-coding-demo/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;a.push([1,"chunk-vendors"]),i()})({0:function(t,e){},1:function(t,e,i){t.exports=i("56d7")},2:function(t,e){},2821:function(t,e,i){"use strict";i("5985")},3:function(t,e){},4306:function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[i("div",{staticClass:"d-flex align-center"},[i("v-img",{staticClass:"shrink mr-2",attrs:{alt:"SNOMED International Logo",contain:"",src:"https://www.snomed.org/SNOMED/media/SNOMED/other/brand-mark.png",transition:"scale-transition",width:"200",height:"60"}}),i("h1",[t._v("SNOMED CT HEDIS Measures Coding Guide")])],1),i("v-spacer"),i("v-btn",{attrs:{color:"purple lighten-1"}},[i("vue-excel-xlsx",{attrs:{data:t.bindings,columns:t.columns,"file-type":"xlsx","file-name":"ecl-export","sheet-name":"sheet1"}},[i("v-icon",{staticClass:"mr-4",attrs:{right:"",dark:""}},[t._v("mdi-cloud-download")]),t._v("EXPORT BINDINGS ")],1)],1),i("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"ml-4",attrs:{color:"purple lighten-1",dark:""}},"v-btn",o,!1),n),[i("v-icon",{attrs:{dark:""}},[t._v(" mdi-information ")])],1)]}}])},[i("v-list",[i("v-list-item-group",[i("v-list-item",[i("v-list-item-icon",[i("v-icon",[t._v("mdi-github")])],1),i("v-list-item-title",{on:{click:function(e){return t.goToGithub()}}},[t._v(" Source code on GitHub ")])],1)],1),i("v-subheader",[t._v("Bound to SNOMED CT Release:")]),i("v-list-item",[i("v-list-item-title",[t._v(" Edition ")]),i("v-list-item-subtitle",[t._v(" Int. Edition ")])],1),i("v-list-item",[i("v-list-item-title",[t._v(" Version ")]),i("v-list-item-subtitle",{domProps:{textContent:t._s(t.codeSystemVersionDisplay)}})],1)],1)],1)],1),i("v-main",[i("MainTabs",{attrs:{sections:t.sections}})],1)],1)},a=[],s=(i("ac1f"),i("5319"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-tabs",[t._l(t.sections,(function(e,n){return i("v-tab",{key:n,attrs:{href:"#"+n}},[t._v(" "+t._s(e.title)+" ")])})),t._l(t.sections,(function(t,e){return i("v-tab-item",{key:e,attrs:{value:e}},[i("SectionPanel",{attrs:{title:t.title,note:t.note,bindings:t.bindings}})],1)}))],2),i("v-tabs-items")],1)}),r=[],l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-container",[i("v-row",[i("h3",{staticClass:"mt-4"},[t._v(t._s(t.title))])]),i("v-row",[i("p",{staticClass:"mt-4"},[t._v(t._s(t.note))])]),t._l(t.bindings,(function(e,n){return i("v-row",{key:n,staticClass:"mb-4"},[i("v-col",{attrs:{cols:"6",md:"6"}},[i("h4",[t._v(t._s(e.title))]),i("p",{staticClass:"body-1 font-weight-light",domProps:{innerHTML:t._s(t.addLinks(e.note))}})]),i("v-col",{staticClass:"text-right",attrs:{cols:"6",md:"6"}},[i("v-chip",{staticClass:"text-capitalize",attrs:{color:"amber darken-1","text-color":"white"}},[t._v(t._s("Demo UI: "+e.type))]),i("ConceptsListDialog",{attrs:{binding:e}}),"autocomplete"==e.type?i("AutocompleteBinding",{attrs:{binding:e}}):t._e(),"dropdown"==e.type?i("DropdownBinding",{attrs:{binding:e}}):t._e(),"radiobutton"==e.type?i("RadiobuttonBinding",{attrs:{binding:e}}):t._e()],1)],1)}))],2)],1)},c=[],d=i("b85c"),u=(i("466d"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-autocomplete",{attrs:{label:t.binding.fieldTitle?t.binding.fieldTitle:t.binding.title,items:t.items,loading:t.loading,"search-input":t.search,"no-data-text":"Type at least 3 characters to search...","cache-items":"",clearable:"",multiple:1==t.binding.isMultiple},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e}},model:{value:t.binding.value,callback:function(e){t.$set(t.binding,"value",e)},expression:"binding.value"}})}),p=[],m=(i("99af"),i("d81d"),i("bc3a")),f=i.n(m),g={data:function(){return{search:null,loading:!1,items:[]}},props:{binding:{type:Object}},watch:{search:function(t){var e=this;this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){t&&t!=e.binding.value&&t.length>2&&e.querySelections(t)}),300)}},methods:{querySelections:function(t){var e=this;this.loading=!0;var i="".concat(this.$snowstormBase,"/").concat(this.$snowstormBranch,"/concepts?activeFilter=true&term=").concat(t,"&\n                          termActive=true&language=en&offset=0&limit=50&ecl=").concat(encodeURIComponent(this.binding.ecl));f.a.get(i).then((function(t){e.items=t.data.items.map((function(t){return t.fsn.term})),e.loading=!1}))}}},v=g,b=i("2877"),h=i("6544"),y=i.n(h),_=i("c6a6"),C=Object(b["a"])(v,u,p,!1,null,null,null),S=C.exports;y()(C,{VAutocomplete:_["a"]});var w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-combobox",{attrs:{items:t.items,label:t.binding.fieldTitle?t.binding.fieldTitle:t.binding.title,multiple:1==t.binding.isMultiple},model:{value:t.binding.value,callback:function(e){t.$set(t.binding,"value",e)},expression:"binding.value"}})},I=[],V={data:function(){return{items:[]}},props:{binding:{type:Object}},mounted:function(){var t=this,e="".concat(this.$snowstormBase,"/").concat(this.$snowstormBranch,"/concepts?activeFilter=true&\n                        termActive=true&language=en&offset=0&limit=50&ecl=").concat(encodeURIComponent(this.binding.ecl));f.a.get(e).then((function(e){t.items=e.data.items.map((function(t){return t.fsn.term}))}))}},x=V,T=i("2b5d"),D=Object(b["a"])(x,w,I,!1,null,null,null),E=D.exports;y()(D,{VCombobox:T["a"]});var O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-radio-group",{attrs:{label:t.binding.fieldTitle?t.binding.fieldTitle:t.binding.title},model:{value:t.binding.value,callback:function(e){t.$set(t.binding,"value",e)},expression:"binding.value"}},t._l(t.items,(function(t){return i("v-radio",{key:t,attrs:{label:t,value:t}})})),1)},A=[],P={data:function(){return{items:[]}},props:{binding:{type:Object}},mounted:function(){var t=this,e="".concat(this.$snowstormBase,"/").concat(this.$snowstormBranch,"/concepts?activeFilter=true&\n                        termActive=true&language=en&offset=0&limit=50&ecl=").concat(encodeURIComponent(this.binding.ecl));f.a.get(e).then((function(e){t.items=e.data.items.map((function(t){return t.fsn.term}))}))}},k=P,B=i("67b6"),R=i("43a6"),L=Object(b["a"])(k,O,A,!1,null,null,null),M=L.exports;y()(L,{VRadio:B["a"],VRadioGroup:R["a"]});var H=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{scrollable:"","max-width":"800px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[i("v-btn",t._g(t._b({attrs:{color:"success ml-4",dark:""}},"v-btn",o,!1),n),[t._v(" Binding ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",{staticClass:"text-h5 grey lighten-2"},[t._v(" "+t._s(t.binding.title)+" ")]),t.binding.fieldTitle?i("v-card-subtitle",{staticClass:"text-h6 grey lighten-2"},[t._v(" "+t._s(t.binding.fieldTitle)+" ")]):t._e(),i("v-card-text",{staticStyle:{height:"800px"}},[i("h4",{staticClass:"my-5"},[t._v("ECL")]),i("v-btn",{staticStyle:{float:"right"},attrs:{icon:"",color:"primary"},on:{click:t.copy}},[i("v-icon",[t._v("mdi-content-copy")])],1),i("pre",{staticClass:"mx-4"},[t._v(t._s(t.binding.ecl))]),i("h4",{staticClass:"my-5"},[t._v("API Call")]),i("v-btn",{staticStyle:{float:"right"},attrs:{icon:"",color:"primary"},on:{click:t.openUrl}},[i("v-icon",[t._v("mdi-open-in-new")])],1),i("pre",{staticClass:"mx-4 text-small"},[t._v(t._s(t.queryString.replace(/\s\s+/g," ").substring(0,200)+"..."))]),i("h4",{staticClass:"my-5"},[t._v("MEMBERS ("+t._s(t.total)+")")]),i("v-list",{attrs:{dense:""}},[i("v-list-item-group",{attrs:{color:"primary"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},[t._l(t.items,(function(e,n){return i("v-list-item",{key:n},[i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(e.fsn.term)}}),i("v-list-item-subtitle",[t._v("SCTID: "+t._s(e.id))])],1)],1)})),t.total>t.items.length&&!t.loading?i("v-list-item",[i("v-list-item-content",[i("v-list-item-subtitle",{staticClass:"text-center",on:{click:function(e){return t.getData()}}},[t._v(" "+t._s(t.items.length)+" of "+t._s(t.total)+" Load more... ")])],1)],1):t._e(),t.total!=t.items.length||t.loading?t._e():i("v-list-item",[i("v-list-item-content",[i("v-list-item-subtitle",{staticClass:"text-center"},[t._v("All results loaded ("+t._s(t.total)+")")])],1)],1),t.loading?i("v-list-item",[i("v-list-item-content",[i("v-progress-linear",{attrs:{indeterminate:"",color:"cyan"}})],1)],1):t._e()],2)],1)],1),i("v-divider")],1)],1)},$=[],j={data:function(){return{loading:!1,items:[],total:0,selectedItem:0,dialog:!1,queryString:""}},props:{binding:{type:Object}},mounted:function(){this.getData()},methods:{copy:function(){navigator.clipboard.writeText(this.binding.ecl.replace(/\s\s+/g," "))},openUrl:function(){window.open(this.queryString.replace(/\s\s+/g," "),"_blank").focus()},getData:function(){var t=this;this.loading=!0;var e=this.binding.base||this.$snowstormBase,i=this.binding.branch||this.$snowstormBranch;this.queryString="".concat(e,"/").concat(i,"/concepts?activeFilter=true&\n                          termActive=true&language=en&offset=0&limit=50&ecl=").concat(encodeURIComponent(this.binding.ecl)),f.a.get(this.queryString).then((function(e){t.items=t.items.concat(e.data.items),t.total=e.data.total,t.loading=!1}))}}},N=j,F=(i("ef31"),i("8336")),q=i("b0af"),G=i("99d9"),U=i("169a"),W=i("ce7e"),z=i("132d"),J=i("8860"),X=i("da13"),K=i("5d23"),Q=i("1baa"),Y=i("8e36"),Z=Object(b["a"])(N,H,$,!1,null,"c37b4cca",null),tt=Z.exports;y()(Z,{VBtn:F["a"],VCard:q["a"],VCardSubtitle:G["a"],VCardText:G["b"],VCardTitle:G["c"],VDialog:U["a"],VDivider:W["a"],VIcon:z["a"],VList:J["a"],VListItem:X["a"],VListItemContent:K["a"],VListItemGroup:Q["a"],VListItemSubtitle:K["b"],VListItemTitle:K["c"],VProgressLinear:Y["a"]});var et={components:{AutocompleteBinding:S,DropdownBinding:E,RadiobuttonBinding:M,ConceptsListDialog:tt},props:{title:String,note:String,bindings:Object},data:function(){return{valid:!1,search:null,loading:!1,items:[]}},methods:{addLinks:function(t){if(t){var e=t.match(/(\d*\s\|.*?\|)/gm);if(e){var i,n=Object(d["a"])(e);try{for(n.s();!(i=n.n()).done;){var o=i.value,a=o.match(/(\d*)/)[0],s='<a href="http://snomed.info/sct/'+a+'" target="_blank">'+o+"</a>";t=t.replace(o,s)}}catch(r){n.e(r)}finally{n.f()}}}return t}}},it=et,nt=i("cc20"),ot=i("62ad"),at=i("a523"),st=i("4bd4"),rt=i("0fd9"),lt=Object(b["a"])(it,l,c,!1,null,null,null),ct=lt.exports;y()(lt,{VChip:nt["a"],VCol:ot["a"],VContainer:at["a"],VForm:st["a"],VRow:rt["a"]});var dt={name:"MainTabs",data:function(){return{}},components:{SectionPanel:ct},methods:{},props:{sections:Object}},ut=dt,pt=(i("8571"),i("71a3")),mt=i("c671"),ft=i("fe57"),gt=i("aac8"),vt=Object(b["a"])(ut,s,r,!1,null,"5569a354",null),bt=vt.exports;y()(vt,{VContainer:at["a"],VTab:pt["a"],VTabItem:mt["a"],VTabs:ft["a"],VTabsItems:gt["a"]});var ht=i("3dc6");n["a"].use(ht["a"]);var yt={name:"App",components:{MainTabs:bt},mounted:function(){for(var t in this.bindings=[],this.sections)for(var e in this.sections[t].bindings)this.bindings.push({section:this.sections[t].title,title:this.sections[t].bindings[e].title,ecl:this.sections[t].bindings[e].ecl.replace(/\s\s+/g," ")});n["a"].prototype.$snowstormBase="https://snowstorm.ihtsdotools.org/snowstorm/snomed-ct",n["a"].prototype.$codeSystemVersion="2021-07-31",n["a"].prototype.$snowstormBranch="MAIN/".concat(this.$codeSystemVersion),this.codeSystemVersionDisplay=this.$codeSystemVersion},methods:{goToGithub:function(){window.open("https://github.com/alopezo/coding-demonstrator","_blank")}},data:function(){return{codeSystemVersionDisplay:"",bindings:[],columns:[{label:"Section",field:"section"},{label:"Title",field:"title"},{label:"ECL",field:"ecl"}],sections:{"HEDIS-PREV":{title:"Prevention and Screening",note:"HEDIS® measures performance in health care where improvements can make a meaningful difference in people’s lives.",bindings:{"HEDIS-PREV-ABA":{title:"Adult BMI Assessment (ABA)",fieldTitle:"BMI Observables",type:"dropdown",ecl:"<< 60621009 |Body mass index (observable entity)|",value:"",note:"The percentage of members 18–74 years of age who had an outpatient visit and whose body mass index (BMI) was documented during the measurement year or the year prior to the measurement year."},"HEDIS-PREV-ABA2":{title:"",fieldTitle:"BMI Findings",type:"dropdown",ecl:"( << 404684003 |Clinical finding (finding)| : 363714003 |Interprets (attribute)| = << 60621009 |Body mass index (observable entity)| )",value:"",note:""},"HEDIS-PREV-COL":{title:"Colorectal Cancer Screening (COL)",fieldTitle:"Fecal occult blood testing",type:"dropdown",ecl:"<< 104435004 |Screening for occult blood in feces (procedure)| OR \n              << 59614000 |Occult blood in stools (finding)| OR\n              ( << 404684003 |Clinical finding (finding)| : 363714003 |Interprets (attribute)| = 104435004 |Screening for occult blood in feces (procedure)| )",value:"",note:"Assesses adults 50–75 who had appropriate screening for colorectal cancer with any of the following tests: annual fecal occult blood test, flexible sigmoidoscopy every 5 years, colonoscopy every 10 years, computed tomography colonography every 5 years, stool DNA test every 3 years."},"HEDIS-PREV-COL2":{title:"",fieldTitle:"Flexible sigmoidoscopy",type:"dropdown",ecl:"<< 44441009 |Flexible fiberoptic sigmoidoscopy (procedure)| OR \n              ( << 404684003 |Clinical finding (finding)| : 363714003 |Interprets (attribute)| = << 44441009 |Flexible fiberoptic sigmoidoscopy (procedure)| )",value:"",note:""},"HEDIS-PREV-COL3":{title:"",fieldTitle:"Colonoscopy",type:"dropdown",ecl:"<< 73761001 |Colonoscopy (procedure)| OR \n              ( << 404684003 |Clinical finding (finding)| : 363714003 |Interprets (attribute)| = << 73761001 |Colonoscopy (procedure)| )",value:"",note:""},"HEDIS-PREV-COL4":{title:"",fieldTitle:"Stool DNA",type:"dropdown",ecl:"<< 708699002 |Stool DNA-based colorectal cancer screening positive (finding)|",value:"",note:""}}},"HEDIS-RESP":{title:"Respiratory Conditions",note:"HEDIS® measures performance in health care where improvements can make a meaningful difference in people’s lives.",bindings:{"HEDIS-RESP-CWPC":{title:"Appropriate Testing for Children with Pharyngitis (CWP) - Diagnosis",fieldTitle:"Diagnosis",type:"autocomplete",ecl:"<< 405737000 |Pharyngitis (disorder)|\n              ",value:"",note:"Assesses the percentage of episodes for members 3 years of age and older with a <b>diagnosis of pharyngitis</b>, dispensed <b>an antibiotic</b> and received \n              <b>a group A streptococcus test</b> for the episode. A higher rate indicates completion of the appropriate testing required to merit antibiotic treatment for pharyngitis."},"HEDIS-RESP-CWPT":{title:"",fieldTitle:"Streptococcus Tests",type:"dropdown",ecl:"<< 71388002 |Procedure (procedure)| : \n              246093002 |Component (attribute)| = (<< 58800005 |Streptococcus| OR << 304058009 |Antigen of Streptococcus (substance)|)\n              ",value:"",note:""},"HEDIS-RESP-CWPA":{title:"",fieldTitle:"Antibiotics",type:"autocomplete",ecl:"<< 373873005 |Pharmaceutical / biologic product (product)| : \n              766939001 |Plays role (attribute)| = 787994008 |Antibacterial therapeutic role (role)|\n              ",value:"",note:""}}},"HEDIS-CARD":{title:"Cardiovascular Conditions",note:"HEDIS® measures performance in health care where improvements can make a meaningful difference in people’s lives.",bindings:{"HEDIS-CARD-PBH":{title:"Persistence of Beta-Blocker Treatment After a Heart Attack (PBH)- Discharge diagnosis",fieldTitle:"Diagnosis",type:"dropdown",ecl:"<< 57054005 |Acute myocardial infarction (disorder)|\n              ",value:"",note:"Assesses adults 18 years of age and older during the measurement year who were hospitalized and discharged alive \n              with a <b>diagnosis of acute myocardial infarction</b> and who received \n              persistent <b>beta-blocker treatment</b> for six months after discharge."},"HEDIS-CARD-CWPT":{title:"",fieldTitle:"Medication",type:"autocomplete",ecl:"<< 33252009 |Product containing beta adrenergic receptor antagonist (product)|\n              ",value:"",note:""},"HEDIS-CARD-CWPT3":{title:"",fieldTitle:"Alive or dead",type:"radiobutton",ecl:"419099009 |Dead (finding)| OR 438949009 |Alive (finding)|\n              ",value:"",note:""}}}}}}},_t=yt,Ct=(i("2821"),i("7496")),St=i("40dc"),wt=i("adda"),It=i("34c3"),Vt=i("f6c4"),xt=i("e449"),Tt=i("2fa4"),Dt=i("e0c7"),Et=Object(b["a"])(_t,o,a,!1,null,"e3ff98c2",null),Ot=Et.exports;y()(Et,{VApp:Ct["a"],VAppBar:St["a"],VBtn:F["a"],VIcon:z["a"],VImg:wt["a"],VList:J["a"],VListItem:X["a"],VListItemGroup:Q["a"],VListItemIcon:It["a"],VListItemSubtitle:K["b"],VListItemTitle:K["c"],VMain:Vt["a"],VMenu:xt["a"],VSpacer:Tt["a"],VSubheader:Dt["a"]});var At=i("f309");n["a"].use(At["a"]);var Pt=new At["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:Pt,render:function(t){return t(Ot)}}).$mount("#app")},5985:function(t,e,i){},"7ad5":function(t,e,i){},8571:function(t,e,i){"use strict";i("7ad5")},ef31:function(t,e,i){"use strict";i("4306")}});
//# sourceMappingURL=app.30ef2c17.js.map