(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dashboard"],{"14d1":function(t,e,n){"use strict";n("1e0d")},1901:function(t,e,n){t.exports=n.p+"img/texture.36b28dd0.png"},"1e0d":function(t,e,n){},"59cf":function(t,e,n){"use strict";n("9a78")},"76d2":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Dashboard",{attrs:{name:"Hello, "+t.user.name,current:"Dashboard",icon:""}},[r("DragAndDrop",{attrs:{disabled:t.obfuscateOpen},on:{changeFile:t.changeFileDnD,showModal:function(e){t.obfuscateOpen=!0}}}),r("ObfuscateModal",{attrs:{modalOpen:t.obfuscateOpen,file:t.file,doNotClear:t.doNotClear},on:{resetDNC:function(e){t.doNotClear=!1},changeFile:t.changeFile,modalClosed:t.onObfuscateClosed}}),r("div",{attrs:{id:"dash-container"}},[r("UserPurchases"),r("div",{staticClass:"obfuscation"},[r("div",{staticClass:"fix"},[r("div",{staticClass:"background"},[r("img",{attrs:{src:n("1901")}})])]),t.hasObfuscationJobs?r("div",{staticClass:"content"},[r("div",{staticClass:"header"},[r("h3",[t._v("Obfuscation")]),r("div",{staticClass:"end"},[r("div",{class:["progress"]}),r("h3",{staticClass:"status"},[t._v("In Progress")])])]),r("div",{ref:"popover",staticClass:"file-header"},[r("div",{staticClass:"file"},[r("h4",[t._v(" "+t._s(t.currentFile.fileName)+" ")]),t.hasMultipleJobs?r("button",{staticClass:"dropdown"},[r("svg-icon",{staticClass:"icon",attrs:{icon:"icons/down_arrow"}})],1):t._e()]),t.popoverOpen&&t.hasMultipleJobs?r("div",{staticClass:"popover"},t._l(t.selectableFiles,(function(e){return r("div",{key:e.id,staticClass:"file",on:{click:function(n){return t.changeOpenFile(e)}}},[r("h4",[t._v(" "+t._s(e.fileName)+" ")])])})),0):t._e()]),r("div",{staticClass:"file-info"},[r("h4",[t._v("Completion:")]),r("div",{staticClass:"progress"},[r("CircularProgress",{staticClass:"circle",attrs:{radius:142,progress:Math.floor(t.currentFile.status.percentTotal),stroke:35,rounded:""}}),r("h3",[t._v(" "+t._s(Math.floor(t.currentFile.status.percentTotal))+"% ")]),r("span",[t._v(" "+t._s(t.currentFile.fileName)+" ")])],1)]),r("div",{staticClass:"breakdown"},[r("h4",[t._v("Breakdown")]),r("div",{staticClass:"elements"},[r("div",[r("div",{staticClass:"number"},[t._v("1")]),r("h4",[t._v("Preparing & Compiling")]),r("LinearProgress",{attrs:{color:"#77FFD0",progress:100,intermediate:t.currentFile.status.currentlyCompiling,rounded:""}})],1),r("div",[r("div",{staticClass:"number"},[t._v("2")]),r("h4",[t._v("Obfuscating")]),r("LinearProgress",{attrs:{color:"#FFC400",progress:Math.floor(t.currentFile.status.percentObfuscation),rounded:""}})],1),r("div",[r("div",{staticClass:"number"},[t._v("3")]),r("h4",[t._v("Finishing Up")]),r("LinearProgress",{attrs:{color:"#DA7272",progress:0,intermediate:t.currentFile.status.currentlyFinishing,rounded:""}})],1)])]),r("div",{staticClass:"actions"},[r("Button",{attrs:{type:"filled",to:"/dashboard/obfuscate"},on:{click:function(e){t.obfuscateOpen=!0}}},[t._v(" Obfuscation + ")])],1)]):t._e(),t.hasObfuscationJobs?t._e():r("div",{staticClass:"content"},[r("div",{staticClass:"header"},[r("h3",[t._v("Obfuscation")]),r("div",{staticClass:"end"},[r("div",{class:["progress","red"]}),r("h3",{staticClass:"status"},[t._v("Not Running")])])]),r("div",{staticClass:"file-info"},[r("div",{staticClass:"progress-message"},[r("h3",[t._v("No obfuscations are"),r("br"),t._v(" currently running")])])]),r("div",{staticClass:"breakdown empty"},[r("h4",[t._v("Breakdown")]),r("div",{staticClass:"elements"},[r("div",[r("div",{staticClass:"number"},[t._v("1")]),r("h4",[t._v("Preparing & Compiling")]),r("LinearProgress",{attrs:{rounded:"",color:"#77FFD0",intermediate:""}})],1),r("div",[r("div",{staticClass:"number"},[t._v("2")]),r("h4",[t._v("Obfuscating")]),r("LinearProgress",{attrs:{rounded:"",color:"#FFC400",intermediate:""}})],1),r("div",[r("div",{staticClass:"number"},[t._v("3")]),r("h4",[t._v("Finishing Up")]),r("LinearProgress",{attrs:{rounded:"",color:"#DA7272",intermediate:""}})],1)])])]),t.hasObfuscationJobs?t._e():r("div",{staticClass:"bottom-button"},[r("div",{staticClass:"actions"},[r("Button",{attrs:{type:"filled",to:"/dashboard/obfuscate"},on:{click:function(e){t.obfuscateOpen=!0}}},[t._v(" Obfuscation + ")])],1)])]),r("div",{staticClass:"info"},[r("div",{staticClass:"account"},[r("div",{staticClass:"content"},[r("svg-icon",{attrs:{icon:"images/account"}}),r("h3",[t._v("Your Account")]),r("router-link",{attrs:{to:"/dashboard/account"}},[t._v(" Account + ")])],1)])])],1)],1)},s=[],a=(n("4de4"),n("4fad"),n("b64b"),n("07ac"),n("5530")),i=n("2f62"),o=n("2a7d"),c=n("4129"),u=n("ce4f"),l=n("e4c7"),d=n("e951"),f=n("0032"),p=n("2e49"),v=n("554d"),h={name:"Dashboard-Home",components:{DragAndDrop:p["a"],Button:o["a"],Dashboard:c["a"],LinearProgress:d["a"],CircularProgress:l["a"],ObfuscateModal:v["a"],UserPurchases:u["a"],SvgIcon:f["a"]},computed:Object(a["a"])({currentFile:function(){var t=this.files[this.currentFileId];if(t)return t;var e=Object.entries(this.files);return e.length>0?e[0][1]:{id:"",fileName:"",status:{currentlyCompiling:!1,currentlyFinishing:!1,percentObfuscation:0,percentTotal:0}}},files:function(){return this.obfuscation.jobs},selectableFiles:function(){var t=this;return Object.values(this.obfuscation.jobs).filter((function(e){return e.id!==t.currentFile.id}))},normalizedProgress:function(){return Math.ceil(100*this.progress)},hasMultipleJobs:function(){return Object.keys(this.obfuscation.jobs).length>1},hasObfuscationJobs:function(){return Object.keys(this.obfuscation.jobs).length>0}},Object(i["d"])(["user","obfuscation"])),methods:{changeFile:function(t){this.file=null===t||void 0===t?void 0:t[0]},changeFileDnD:function(t){this.doNotClear=!0,this.changeFile(t)},changeOpenFile:function(t){this.currentFileId=t.id},onObfuscateClosed:function(t){"string"===typeof t&&(this.currentFileId=t),this.obfuscateOpen=!1},docClick:function(t){this.$refs.popover&&this.$refs.popover.contains&&(this.popoverOpen?this.popoverOpen=!1:!this.popoverOpen&&this.$refs.popover.contains(t.target)&&(this.popoverOpen=!0))}},data:function(){var t=this;return setInterval((function(){if(!window.disable){var e=t.progress+.01;e>=1.01&&(e=0),t.progress=e,t.breakProgress=t.breakProgress+1}}),100),{popoverOpen:!1,obfuscateOpen:!1,currentFileId:"",doNotClear:!1,file:null}},mounted:function(){document.body.addEventListener("click",this.docClick)},unmounted:function(){document.body.removeEventListener("click",this.docClick)}},b=h,g=(n("14d1"),n("2877")),m=Object(g["a"])(b,r,s,!1,null,"51de7800",null);e["default"]=m.exports},"7db0":function(t,e,n){"use strict";var r=n("23e7"),s=n("b727").find,a=n("44d2"),i=n("ae40"),o="find",c=!0,u=i(o);o in[]&&Array(1)[o]((function(){c=!1})),r({target:"Array",proto:!0,forced:c||!u},{find:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),a(o)},"9a78":function(t,e,n){},b0b7:function(t,e,n){"use strict";n("99af"),n("d3b7"),n("96cf");var r=n("1da1"),s=n("bc3a"),a=n.n(s),i=n("26b3"),o=n("a9dc");e["a"]={fetchInvoicesAsync:function(){var t=arguments;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:0,r=t.length>1&&void 0!==t[1]?t[1]:5,e.next=4,a.a.get(i["a"].makeEndpoint("/invoices?start=".concat(n,"&limit=").concat(r))).then((function(t){if(t&&t.data&&t.data.invoices)for(var e=t.data.invoices,n=0;n<e.length;n++){var r=e[n];r&&"number"===typeof r.timestamp&&(r.timestamp=o["a"].getDateFromTS(1e3*r.timestamp))}return t}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))()},createCardAsync:function(){return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.a.get(i["a"].makeEndpoint("/cards/new"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},removeCardAsync:function(t){return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.a.post(i["a"].makeEndpoint("/cards/delete"),{card:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},fetchCardListAsync:function(){return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.a.get(i["a"].makeEndpoint("/cards/list"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},fetchSubscriptionAsync:function(){return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.a.get(i["a"].makeEndpoint("/subscription/info"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},cancelSubscriptionAsync:function(){return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.a.post(i["a"].makeEndpoint("/subscription/cancel"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},updateSubscriptionCardAsync:function(t){return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",a.a.post(i["a"].makeEndpoint("/subscription/card"),{card:t}));case 1:case"end":return e.stop()}}),e)})))()},purchasePlanAsync:function(t,e,n,r){return t=encodeURI(t.toLowerCase()),new Promise((function(s,o){a.a.post(i["a"].makeEndpoint("/purchase/".concat(t)),{card:e,promoCode:r,quantity:n}).then((function(t){s(t)})).catch((function(t){if(t.response&&402===t.response.status){var e=Object.assign({},t.response.data||{},{confirmRequired:!0});return t.response.data=e,s(t.response)}o(t)}))}))}}},ce4f:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"user-purchase"}},[n("h3",[t._v("Purchases")]),n("div",{staticClass:"payment-plan"},[n("svg-icon",{attrs:{icon:this.currentPlanIcon}}),n("span",[t._v("Luraph "+t._s(this.user.plan.capitalize()))]),n("h2",[t._v(t._s(this.currentPlanPrice)+" / "+t._s(this.currentPlanUsage))]),n("router-link",{attrs:{to:{name:"Account",params:{showBillingInfo:!0}}}},[t._v(" Billing info + ")])],1),n("div",{staticClass:"payments"},[n("span",[t._v("Monthly Billing")]),n("div",{staticClass:"scroller"},[t._l(t.invoices,(function(e,r){return n("div",{key:r,staticClass:"payment"},[n("div",{staticClass:"top"},[n("h4",[t._v(t._s(t.getDate(e)))]),n("span",[t._v(t._s(t.getPrice(e)))])]),n("span",[t._v(t._s(e.name))])])})),t.invoices.length<1&&!t.loading?n("div",{staticClass:"empty"},[n("svg-icon",{attrs:{icon:"icons/sad_cry"}}),n("span",[t._v("There are no invoices here!")])],1):t._e(),t.loading?n("div",{staticClass:"loader"},[n("Loader")],1):t._e()],2)]),n("div",{staticClass:"actions"},[n("button",{staticClass:"load-more",attrs:{disabled:t.loading||t.endOfHistory},on:{click:t.loadInvoiceList}},[t._v(" "+t._s(t.endOfHistory?"END OF HISTORY":"Purchases +")+" ")])])])},s=[],a=(n("99af"),n("7db0"),n("96cf"),n("1da1")),i=n("5530"),o=n("2f62"),c=n("555f"),u=n("b0b7"),l=n("a9dc"),d={name:"UserPurchases",components:{Loader:c["a"]},computed:Object(i["a"])({currentPlanPrice:function(){var t=this.currentPlan;return t?t.cost:0},currentPlanIcon:function(){var t=this.currentPlan;return t?t.icon:""},currentPlanUsage:function(){var t=this.currentPlan;return t?t.costType:""},currentPlan:function(){var t=this;return this.plans.find((function(e){return e.title===t.user.plan.capitalize()}))}},Object(o["d"])(["user"])),methods:{loadInvoiceList:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.invoices,t.loading=!0,e.prev=2,e.next=5,u["a"].fetchInvoicesAsync(n.length);case 5:if(e.t0=e.sent.data,e.t0){e.next=8;break}e.t0={};case 8:r=e.t0,s=r.invoices,t.invoices=n.concat(s),s.length<1&&(t.endOfHistory=!0),console.log(s),e.next=18;break;case 15:e.prev=15,e.t1=e["catch"](2),alert("Error: failed to fetch invoices");case 18:t.loading=!1;case 19:case"end":return e.stop()}}),e,null,[[2,15]])})))()},getDate:function(t){return l["a"].getFormattedDate(t.timestamp)},getPrice:function(t){return(t.price/100||0).toLocaleString("en-US",{style:"currency",currency:"USD"}).substr(1)}},created:function(){this.loadInvoiceList()},data:function(){return{invoices:[],loading:!1,endOfHistory:!1,plans:this.$config.plans}}},f=d,p=(n("59cf"),n("2877")),v=Object(p["a"])(f,r,s,!1,null,"b3c9046e",null);e["a"]=v.exports}}]);