(function(t){function e(e){for(var r,s,l=e[0],c=e[1],i=e[2],u=0,p=[];u<l.length;u++)s=l[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,l=1;l<a.length;l++){var c=a[l];0!==n[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},o=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var i=0;i<l.length;i++)e(l[i]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1:function(t,e){},2:function(t,e){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("v-toolbar-title",{staticClass:"ma-2"},[t._v("Sandwich")]),a("v-spacer"),a("v-menu",{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({staticClass:"ma-2",attrs:{dark:"",icon:""}},r),[a("v-icon",[t._v("mdi-cloud-download")])],1)]}}])},[a("v-list",{staticClass:"overflow-y-auto",attrs:{"max-height":"500"}},[a("v-subheader",[t._v("Download Speed: "+t._s(t.downloadSpeed))]),a("v-divider"),t._l(t.items,(function(e,r){return a("v-list-item",{key:r},[a("v-list-item-icon",[a("v-progress-circular",{attrs:{size:32,value:e.p,width:2,color:"light-blue"}},[t._v(t._s(e.p))])],1),a("v-list-item-title",[t._v(t._s(e.title))])],1)}))],2)],1)],1),a("v-main",[a("GameTable")],1)],1)},o=[],s=(a("99af"),a("96cf"),a("1da1")),l=a("b85c"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",[t._v(" Games Count: "+t._s(t.count)+" "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-data-table",{attrs:{headers:t.headers,items:t.games,search:t.search,loading:t.loading,"loading-text":"Loading... Please wait","sort-by":t.sortBy,"sort-desc":t.sortDesc},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},"click:row":t.handleClick}}),a("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.download,callback:function(e){t.download=e},expression:"download"}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.download=!1}}},[a("v-icon",[t._v("mdi-close")])],1),a("v-toolbar-title",[t._v(t._s(t.game_name))])],1),a("v-tabs",{attrs:{centered:!0},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.download_tabs,(function(e,r){return a("v-tab",{key:r},[t._v(t._s(e))])})),1),a("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.download_content,(function(e,r,n){return a("v-tab-item",{key:n},[a("v-simple-table",[a("tbody",t._l(t.download_content[r],(function(e,r){return a("tr",{key:r},[a("td",[a("v-checkbox",{model:{value:e.checked,callback:function(a){t.$set(e,"checked",a)},expression:"obj.checked"}})],1),a("td",[t._v(t._s(e.size))]),a("td",[t._v(t._s(e.modifiedTime))]),a("td",[a("v-chip",{staticClass:"ma-2",attrs:{color:e.latest?"orange":e.color,small:""}},[t._v(" "+t._s(e.cate)+" ")])],1),a("td",[a("a",{attrs:{href:e.url,target:"view_window"}},[t._v(t._s(e.name))])])])})),0)])],1)})),1),a("div",{staticClass:"text-center"},[a("v-btn",{staticClass:"ma-2",attrs:{color:"primary"},on:{click:function(e){return t._export()}}},[t._v("Export Aria2 RPC")])],1),a("br")],1)],1),a("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.searching,callback:function(e){t.searching=e},expression:"searching"}},[a("v-card",{attrs:{color:"primary",dark:""}},[a("v-card-text",[a("br"),a("p",{staticClass:"text-md-center subtitle-1"},[t._v("Searching")]),a("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1),a("v-snackbar",{attrs:{timeout:3e3},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.tips)+" ")]),a("InputsDialog",{ref:"dlg_aria2",attrs:{title:"Export to aria2 RPC",text:"Please run (aria2c --enable-rpc --rpc-listen-all=true --rpc-allow-origin-all --max-tries=20 --retry-wait=10) on your local or NAS first.",inputs_labels:["host","port","download_dir"],okfunc:t._export}})],1)},i=[],d=(a("caad"),a("c975"),a("a15b"),a("b0c0"),a("d3b7"),a("2532"),a("ddb0"),a("3835")),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.dlg,callback:function(e){t.dlg=e},expression:"dlg"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v(t._s(t.title||"确认操作"))]),a("v-card-text",[[t._v(t._s(t.d_text))],t._l(t.inputs_labels,(function(e,r){return a("v-text-field",{key:r,attrs:{label:e,value:t.inputs_vals[r],required:""},on:{change:function(e){return t.$set(t.inputs_vals,r,e)}}})}))],2),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:"",disabled:t.dlg_btns_disabled},on:{click:function(e){return t.clickOk()}}},[t._v("Confirm ")]),a("v-btn",{attrs:{color:"grey darken-1",text:"",disabled:t.dlg_btns_disabled},on:{click:function(e){return t.close()}}},[t._v("Cancel ")])],1)],1)],1)},p=[],f=(a("4160"),a("159b"),a("2909")),b={name:"InputsDialog",props:["okfunc","okparams","okclose","title","text","inputs_labels"],data:function(){return{d_text:this.text,dlg:!1,dlg_btns_disabled:!1,inputs_vals:[]}},methods:{open:function(){!this.dlg&&(this.dlg=!0)},show:function(){this.open()},close:function(){this.dlg&&(this.dlg=!1);var t=this;this.inputs_labels.forEach((function(e,a){return t.$set(t.inputs_vals,a,"")}))},clickOk:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.dlg_btns_disabled=!0,!t.okfunc){e.next=4;break}return e.next=4,t.okfunc.apply(t,[t.inputs_vals].concat(Object(f["a"])(t.okparams||[])));case 4:t.dlg_btns_disabled=!1,!1!==t.okclose&&t.close();case 6:case"end":return e.stop()}}),e)})))()}}},v=b,_=a("2877"),h=a("6544"),m=a.n(h),g=a("8336"),w=a("b0af"),k=a("99d9"),x=a("169a"),y=a("2fa4"),V=a("8654"),C=Object(_["a"])(v,u,p,!1,null,null,null),O=C.exports;m()(C,{VBtn:g["a"],VCard:w["a"],VCardActions:k["a"],VCardText:k["b"],VCardTitle:k["c"],VDialog:x["a"],VSpacer:y["a"],VTextField:V["a"]});var S={components:{InputsDialog:O},data:function(){return{aria2:a("7de7"),axios:a("bc3a"),prettyBytes:a("94df"),qs:a("4328"),dateFormat:a("b9b9"),ls:a("4dd0"),sortBy:"release_date",sortDesc:!0,count:0,loading:!0,search:"",headers:[{text:"Name",value:"name"},{text:"Publisher",value:"publisher"},{text:"Release",value:"release_date"},{text:"Size",value:"size"},{text:"NumberOfPlayers",value:"numberOfPlayers"}],games:[],file_types:["NSZ","NSP","XCI"],download_tabs:[],download_content:{},download:!1,searching:!1,game_name:"",tab:null,snackbar:!1,tips:"",rpc_host:null,rpc_port:0,rpc_download_dir:null,host_url:""}},created:function(){var t=this;if(this.axios.get("https://raw.githubusercontent.com/blawar/titledb/master/US.en.json").then((function(e){for(var a in console.log(e),e.data){var r=e.data[a];parseInt(r.id,16)/4096%2===0&&t.games.push({id:r.id,publisher:r.publisher,release_date:r.releaseDate,size:t.prettyBytes(parseInt(r.size)),name:r.name,numberOfPlayers:r.numberOfPlayers})}t.count=t.games.length,t.loading=!1})),""===this.host_url){var e=window.location.href;this.host_url=e.substring(0,e.length-1)}},methods:{handleClick:function(t){var e=this;this.searching=!0,this.axios.post(this.host_url+"/search",this.qs.stringify({q:t.id})).then((function(a){e.searching=!1,e.game_name=t.name,e.download=!0,e.download_tabs=[],e.download_content={};var r=a.data.data.files,n={base:t.id,update:e.update_id(t.id),dlc:e.dlc_id(t.id)};console.log(r);var o,s=Object(l["a"])(e.file_types);try{for(s.s();!(o=s.n()).done;){var c=o.value;for(var i in n){var d,u=!0,p=Object(l["a"])(r);try{for(p.s();!(d=p.n()).done;){var f=d.value;f.name.toLowerCase().indexOf(c.toLowerCase())>0&&f.name.toLowerCase().indexOf(n[i].toLowerCase())>0&&(void 0===e.download_content[c]&&(e.download_content[c]=[]),e.download_tabs.includes(c)||e.download_tabs.push(c),f.cate=i,f.color={base:"primary",update:"secondary",dlc:""}[i],f.size=e.prettyBytes(parseInt(f.size)),f.modifiedTime=e.dateFormat(new Date(f.modifiedTime),"yyyy-mm-dd"),f.checked=!1,f.url="".concat(e.host_url,"/get_file?").concat(e.qs.stringify({name:f.name,parent:f.parents[0]})),f.latest="update"===i&&u,e.download_content[c].push(f),u=!1)}}catch(b){p.e(b)}finally{p.f()}}}}catch(b){s.e(b)}finally{s.f()}console.log(e.download_content)}))},update_id:function(t){return t.substring(0,t.length-3)+"800"},dlc_id:function(t){return t.substring(0,t.length-4)+String.fromCharCode(t.charCodeAt(12)+1)},_export:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var r,n,o,s,c,i,u,p,f,b;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t&&(e.rpc_host=t[0],e.rpc_port=parseInt(t[1]),e.rpc_download_dir=t[2],e.ls.set("rpc_host",t[0]),e.ls.set("rpc_port",t[1]),e.ls.set("rpc_download_dir",t[2])),null!==e.rpc_download_dir){a.next=8;break}return r=e.$refs["dlg_aria2"],e.$set(r.inputs_vals,0,e.ls.get("rpc_host")?e.ls.get("rpc_host"):"localhost"),e.$set(r.inputs_vals,1,e.ls.get("rpc_port")?e.ls.get("rpc_port"):"6800"),e.$set(r.inputs_vals,2,e.ls.get("rpc_download_dir")?e.ls.get("rpc_download_dir"):"/"),r.show(),a.abrupt("return");case 8:if(!e.rpc_download_dir){a.next=47;break}n=new e.aria2({host:e.rpc_host,port:e.rpc_port}),o=[],a.t0=regeneratorRuntime.keys(e.download_content);case 12:if((a.t1=a.t0()).done){a.next=46;break}s=a.t1.value,c=Object(l["a"])(e.download_content[s]),a.prev=15,c.s();case 17:if((i=c.n()).done){a.next=36;break}if(u=i.value,!u.checked){a.next=34;break}return a.prev=20,a.next=23,n.call("addUri",[u.url],{dir:e.rpc_download_dir});case 23:p=a.sent,f=Object(d["a"])(p,1),b=f[0],o.push(b),console.log(b),a.next=34;break;case 30:a.prev=30,a.t2=a["catch"](20),e.tips="connect RPC failed!",e.snackbar=!0;case 34:a.next=17;break;case 36:a.next=41;break;case 38:a.prev=38,a.t3=a["catch"](15),c.e(a.t3);case 41:return a.prev=41,c.f(),a.finish(41);case 44:a.next=12;break;case 46:o&&(e.tips="add tasks success, tasks id = [".concat(o.join(", "),"]"),e.snackbar=!0);case 47:case"end":return a.stop()}}),a,null,[[15,38,41,44],[20,30]])})))()}}},T=S,j=a("ac7c"),P=a("cc20"),I=a("8fea"),D=a("132d"),B=a("8e36"),L=a("1f4f"),R=a("2db4"),$=a("71a3"),z=a("c671"),A=a("fe57"),E=a("aac8"),M=a("71d9"),q=a("2a7f"),N=Object(_["a"])(T,c,i,!1,null,null,null),F=N.exports;m()(N,{VBtn:g["a"],VCard:w["a"],VCardText:k["b"],VCardTitle:k["c"],VCheckbox:j["a"],VChip:P["a"],VDataTable:I["a"],VDialog:x["a"],VIcon:D["a"],VProgressLinear:B["a"],VSimpleTable:L["a"],VSnackbar:R["a"],VSpacer:y["a"],VTab:$["a"],VTabItem:z["a"],VTabs:A["a"],VTabsItems:E["a"],VTextField:V["a"],VToolbar:M["a"],VToolbarTitle:q["a"]});var G={name:"App",components:{GameTable:F},data:function(){return{darkmode:!0,aria2:a("7de7"),ls:a("4dd0"),path:a("df7c"),prettyBytes:a("94df"),items:[],downloadSpeed:""}},methods:{load_rpc_task:function(t){var e,a=[],r=Object(l["a"])(t);try{for(r.s();!(e=r.n()).done;){var n=e.value,o={};o.p="0"===n.totalLength?0:parseInt(n.completedLength/n.totalLength*100),"0"===n.totalLength?o.title="waiting: "+n.gid:o.title=this.path.basename(n.files[0].path),a.push(o)}}catch(s){r.e(s)}finally{r.f()}return a},load_aria2:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,r,n,o,s,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.ls.get("rpc_host"),r=t.ls.get("rpc_port"),!a||!r){e.next=40;break}return e.prev=3,n=new t.aria2({host:a,port:r}),o=[],e.next=8,n.call("tellActive");case 8:return s=e.sent,e.t0=o,e.next=12,t.load_rpc_task(s);case 12:return e.t1=e.sent,o=e.t0.concat.call(e.t0,e.t1),e.next=16,n.call("tellWaiting",0,100);case 16:return s=e.sent,e.t2=o,e.next=20,t.load_rpc_task(s);case 20:return e.t3=e.sent,o=e.t2.concat.call(e.t2,e.t3),e.next=24,n.call("tellStopped",0,100);case 24:return s=e.sent,e.t4=o,e.next=28,t.load_rpc_task(s);case 28:return e.t5=e.sent,o=e.t4.concat.call(e.t4,e.t5),e.next=32,n.call("getGlobalStat");case 32:l=e.sent,t.downloadSpeed=t.prettyBytes(parseInt(l.downloadSpeed))+"/S",t.items=o,e.next=40;break;case 37:e.prev=37,e.t6=e["catch"](3);case 40:setTimeout(t.load_aria2,3e3);case 41:case"end":return e.stop()}}),e,null,[[3,37]])})))()}},created:function(){setTimeout(this.load_aria2,3e3)}},J=G,U=a("7496"),W=a("40dc"),X=a("ce7e"),Z=a("8860"),H=a("da13"),K=a("34c3"),Q=a("5d23"),Y=a("f6c4"),tt=a("e449"),et=a("490a"),at=a("e0c7"),rt=Object(_["a"])(J,n,o,!1,null,null,null),nt=rt.exports;m()(rt,{VApp:U["a"],VAppBar:W["a"],VBtn:g["a"],VDivider:X["a"],VIcon:D["a"],VList:Z["a"],VListItem:H["a"],VListItemIcon:K["a"],VListItemTitle:Q["b"],VMain:Y["a"],VMenu:tt["a"],VProgressCircular:et["a"],VSpacer:y["a"],VSubheader:at["a"],VToolbarTitle:q["a"]});var ot=a("f309");r["a"].use(ot["a"]);var st=new ot["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:st,render:function(t){return t(nt)}}).$mount("#app")}});
//# sourceMappingURL=app.84c33b3f.js.map