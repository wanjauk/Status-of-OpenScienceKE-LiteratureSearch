(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53304297"],{"0028":function(t,e,i){"use strict";var o=i("c238"),n=i.n(o);n.a},"0580":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:t.mobile?"mobile-history-menu":""}},[i("horizontal-menu",{attrs:{menu:t.menu},on:{select:t.select}}),t.showModal?i("modal",{on:{close:function(e){t.showModal=!1}}},[i("template",{slot:"title"},[i("i",{staticClass:"fas fa-save"}),t._v(" Saved searches\n    ")]),i("p",[t._v("To see your saved searches, you first need to sign in.")]),i("p",[i("a",{attrs:{href:"/accounts/SavedSearches"}},[i("button",[t._v("Continue")])])])],2):t._e()],1)},n=[],s=i("bdee"),a={components:{HorizontalMenu:s["g"],Modal:s["j"]},props:{mobile:{type:Boolean,default:!1}},data:function(){return{menu:{items:[{to:{name:"recentHistory"},label:"Recent history"},{href:"/accounts/SavedSearches",label:"Saved searches"}]},showModal:!1}},methods:{select:function(t,e){this.$emit("unmount"),document.getElementById("profile-bar--username")||2!==e||(t.stopPropagation(),t.preventDefault(),this.showModal=!0)}}},r=a,c=(i("9f8a"),i("2877")),l=Object(c["a"])(r,o,n,!1,null,null,null);e["a"]=l.exports},1040:function(t,e,i){"use strict";var o=i("6697"),n=i.n(o);n.a},"1f69":function(t,e,i){},2545:function(t,e,i){},2730:function(t,e,i){"use strict";var o=i("2545"),n=i.n(o);n.a},"423d":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.citation.unstructuredInformation?i("h5",{staticClass:"citation"},[t._v("\n  "+t._s(t.citation.unstructuredInformation.replace(/[0-9]+\?[0-9]+/,(function(t){return t.replace(/\?/,"-")})))+"\n")]):i("div",{staticClass:"citation"},["N"!==t.citation.match?i(t.headingLevel,{tag:"component",staticClass:"citation-title",attrs:{id:"citation--article--title-"+t.citation.id}},[i("route",{attrs:{to:{name:"article",params:{source:t.citation.source,id:t.citation.id}}}},[i("span",{domProps:{innerHTML:t._s(t.title)}})])],1):i(t.headingLevel,{tag:"component",staticClass:"citation-title",domProps:{innerHTML:t._s(t.title)}}),t.authorList?i("p",{staticClass:"citation-author-list"},[t._l(t.authorList.slice(0,t.authorNumber-1),(function(e,o){return["AUTHOR UNKNOWN"!==e?i("route",{key:o,attrs:{to:t._f("getAuthorLink")(e)},on:{click:function(e){t.recordPiwikEvent("Author name")}}},[t._v(t._s(e))]):t._e(),t._v(t._s("AUTHOR UNKNOWN"===e?e:"")+t._s(o!==t.authorList.length-1?t.authSeparator:"")+"\n    ")]})),t.authorList.length>t.authorNumber?i("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.authorNumber=t.authorList.length}}},[t._v("[...]")]):t._e(),t.authorList.length>=t.authorNumber?i("route",{attrs:{to:t._f("getAuthorLink")(t.authorList[t.authorList.length-1])}},[t._v("\n      "+t._s(t.authorList[t.authorList.length-1])+"\n    ")]):t._e()],2):t._e(),i("p",[t.citation.bookOrReportDetails&&(t.citation.bookOrReportDetails.publisher||t.citation.bookOrReportDetails.comprisingTitle)||t.citation.journalTitle?i("route",{attrs:{id:"citation--publisher--name-"+t.citation.id,to:t.sourceLink},on:{click:function(e){t.recordPiwikEvent("Journal name")}}},[t._v("\n      "+t._s(t.citation.bookOrReportDetails&&t.citation.bookOrReportDetails.publisher?t.citation.bookOrReportDetails.publisher:"")+t._s(t.citation.bookOrReportDetails&&t.citation.bookOrReportDetails.comprisingTitle?t.citation.bookOrReportDetails.comprisingTitle:"")+t._s(t.citation.journalTitle))]):t._e(),t._v(t._s(!t.citation.journalTitle&&t.citation.journalAbbreviation?t.citation.journalAbbreviation:"")+t._s((t.citation.journalVolume||t.citation.issue||t.citation.pageInfo)&&"PAT"!==t.citation.source?", ":"")+t._s(t.citation.journalVolume||"")+t._s(t.citation.issue?"("+t.citation.issue+")":"")+t._s((t.citation.journalVolume||t.citation.issue)&&t.citation.pageInfo?":":"")+t._s(t.citation.pageInfo?t.citation.pageInfo:"")+t._s(t.citation.firstPublicationDate&&"PAT"!==t.citation.source?", ":" ")+"\n    "+t._s("PAT"===t.citation.source?"[Application on: ":" ")+"\n    "),t.citation.firstPublicationDate?i("span",{attrs:{id:"citation--id--pub-date-"+t.citation.id}},[t._v(t._s(t.getDate(t.citation.firstPublicationDate))+t._s("PAT"===t.citation.source?"]":"")+"\n    ")]):t._e()],1),t._t("middle-slot"),i("p",[t.citation.citedByCount?i("route",{attrs:{id:"citation--cited--by-"+t.citation.id,to:t.citation.citedByCount>1?{name:"search",query:{query:"cites:"+t.citation.id+"_"+t.citation.source}}:{name:"article",params:{id:t.citation.id,source:t.citation.source}}}},[t._v("\n      Cited by:\n      "+t._s(t.citation.citedByCount+(t.citation.citedByCount>1?" articles":" article"))+"\n    ")]):t._e(),t._v("\n    "+t._s(0===t.citation.citedByCount?"Cited by: 0 articles":"")+"\n    "+t._s(void 0!==t.citation.citedByCount?" | ":"")+"\n    "),t.citation.pmid?i("span",{attrs:{id:"citation--id--pmid-"+t.citation.id}},[t._v("PMID: "+t._s(t.citation.pmid))]):t.isNotPmc?[t._v("\n      "+t._s(t.citation.pmid?" | ":"")+t._s(t.citation.source+": "+t.citation.id)+"\n    ")]:t._e(),t.citation.pmcid?i("span",{attrs:{id:"citation--id--pmc-"+t.citation.id}},[t._v(t._s(t.citation.pmid||t.isNotPmc?" | ":"")+"PMCID:\n      "+t._s(t.citation.pmcid))]):t._e()],2),i("labels",{attrs:{citation:t.citation}},[i("template",{slot:"label-slot"},[t._t("label-slot")],2)],2)],2)},n=[],s=i("db49"),a=i("8a40"),r=i("c905"),c={filters:{getAuthorLink:function(t){return{name:"search",query:{query:'AUTH:"'+t+'"'}}}},components:{Labels:r["a"]},props:{citation:{type:Object,default:function(){}},headingLevel:{type:String,default:"h3"}},data:function(){return{authorNumber:20}},computed:{title:function(){var t=this.citation.title&&this.citation.title.trim()?this.citation.title:"<i>Title not supplied</i>";return t},authSeparator:function(){return this.citation.authorString.match(/;/g)?";":","},authorList:function(){return this.citation.authorString?this.citation.authorString.match(/;/g)?this.citation.authorString.replace(/\.$/,"").split("; "):this.citation.authorString.replace(/\.$/,"").split(", "):""},sourceLink:function(){return this.citation.journalTitle?{name:"search",query:{query:'JOURNAL:"'+this.citation.journalTitle+'"'}}:this.citation.bookOrReportDetails?{name:"search",query:{query:'PUBLISHER:"'+(this.citation.bookOrReportDetails.publisher||this.citation.bookOrReportDetails.comprisingTitle)+'"'}}:""},isNotPmc:function(){var t=this.citation;return t.source&&"PMC"!==t.source}},methods:{getDate:a["d"],recordPiwikEvent:function(t){this.$matomo.trackEvent(s["e"]+"Search","Citation",t)}}},l=c,u=(i("59ff"),i("2877")),p=Object(u["a"])(l,o,n,!1,null,"04a9766e",null);e["a"]=p.exports},"55b1":function(t,e,i){},"59ff":function(t,e,i){"use strict";var o=i("1f69"),n=i.n(o);n.a},6697:function(t,e,i){},"862f":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.screenWidth<=1e3,expression:"screenWidth <= 1000"}],staticClass:"sticky-footer"},[i("div",{staticClass:"sticky-footer"},[i("div",{staticClass:"mobile-menu-buttons"},[t.screenWidth<=799?t._l(t.menus,(function(e){return i("action",{directives:[{name:"show",rawName:"v-show",value:!t.expandMenu||t.expandMenu===e.data.ref,expression:"!expandMenu || expandMenu === menu.data.ref"}],key:e.data.ref,class:t.expandMenu===e.data.ref?"open":"",attrs:{"icon-pos":"right"},on:{click:function(i){t.expandMenu?t.expandMenu=null:t.expandMenu=e.data.ref}}},[t._v("\n          "+t._s(e.data.ref)),i("i",{class:["fas",t.expandMenu?"fa-angle-down":"fa-angle-right"],attrs:{slot:"icon"},slot:"icon"})])})):t._e(),i("action-bar",{directives:[{name:"show",rawName:"v-show",value:!t.expandMenu,expression:"!expandMenu"}],attrs:{size:"mobile"},on:{notify:function(e){return t.$emit("notify",e)}}}),i("action",{directives:[{name:"show",rawName:"v-show",value:t.expandMenu,expression:"expandMenu"}],on:{click:function(e){t.expandMenu=null}}},[i("i",{staticClass:"fas fa-times",attrs:{slot:"icon"},slot:"icon"})])],2),t.screenWidth<=799&&t.expandMenu?i("div",{staticClass:"mobile-menu-content"},[t._l(t.menus,(function(e){return[e.data.ref===t.expandMenu?t._t(e.data.slot):t._e()]}))],2):t._e()]),t.expandMenu?i("popup-shadow",{on:{unmount:function(e){t.expandMenu=null}}}):t._e()],1)},n=[],s=i("bdee"),a=i("f328"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"popup-shadow",on:{click:function(e){t.$emit("unmount")}}},[i("div",{staticClass:"shadow",style:t.color?"background-color:"+t.color:""})])},c=[],l={props:{color:{type:String,default:""}}},u=l,p=(i("bda8"),i("2877")),d=Object(p["a"])(u,r,c,!1,null,"c921283a",null),h=d.exports,f={components:{PopupShadow:h,Action:s["a"],ActionBar:a["a"]},props:{screenWidth:{type:Number,default:void 0}},data:function(){return{expandMenu:null,menus:[]}},watch:{screenWidth:function(){this.screenWidth>799&&(this.expandMenu=null)}},created:function(){var t=this.$slots,e=[],i=Object.keys(t).map((function(e){return e.startsWith("menu")&&t[e][0]}));i.map((function(t){return e.push(t)})),this.menus=e}},m=f,b=(i("2730"),Object(p["a"])(m,o,n,!1,null,null,null));e["a"]=b.exports},"8f91":function(t,e,i){"use strict";var o=i("addb"),n=i.n(o);n.a},"9be6":function(t,e,i){"use strict";function o(t){var e={};return t&&(e.id=t.id,e.source=t.source,t.pmid&&(e.pmid=t.pmid),t.pmcid&&(e.pmcid=t.pmcid),t.title&&(e.title=t.title),t.authorString&&(e.authorString=t.authorString),t.journalInfo&&(t.journalInfo.issue&&(e.issue=t.journalInfo.issue),t.journalInfo.volume&&(e.journalVolume=t.journalInfo.volume),t.journalInfo.journal&&(t.journalInfo.journal.title&&(e.journalTitle=t.journalInfo.journal.title),t.journalInfo.journal.isoabbreviation&&(e.journalAbbreviation=t.journalInfo.journal.isoabbreviation))),t.pubYear&&(e.pubYear=t.pubYear),t.pageInfo&&(e.pageInfo=t.pageInfo),t.pubTypeList&&t.pubTypeList.pubType&&(e.pubType=t.pubTypeList.pubType.join("; ")),t.bookOrReportDetails&&(e.bookOrReportDetails=Object.assign({},t.bookOrReportDetails)),e.isOpenAccess=t.isOpenAccess,e.inEPMC=t.inEPMC,e.hasBook=t.hasBook,e.citedByCount=t.citedByCount,t.firstPublicationDate&&(e.firstPublicationDate=t.firstPublicationDate)),e}i.d(e,"a",(function(){return o}))},"9f8a":function(t,e,i){"use strict";var o=i("f8b7"),n=i.n(o);n.a},a239:function(t,e,i){"use strict";e["a"]={data:function(){return{screenWidth:window.innerWidth}},created:function(){window.addEventListener("resize",this.updateScreenWidth)},destroyed:function(){window.removeEventListener("resize",this.updateScreenWidth())},methods:{updateScreenWidth:function(){this.screenWidth=window.innerWidth}}}},addb:function(t,e,i){},bda8:function(t,e,i){"use strict";var o=i("55b1"),n=i.n(o);n.a},c238:function(t,e,i){},c905:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticClass:"small",attrs:{id:"citation-labels"}},[t._t("label-slot"),i("span",{staticClass:"labels"},[t.pubType&&t.pubType.toLowerCase().includes("review")?i("span",{staticClass:"review"},[t._v("Review")]):t._e(),"PPR"===t.citation.source?i("span",{staticClass:"preprint",attrs:{id:"citation--tag--preprint-"+t.citation.id}},[t._v("Preprint\n      "+t._s(t.citation.versionNumber?"v"+t.citation.versionNumber:""))]):t._e(),"Y"===t.citation.hasBook?i("span",{staticClass:"books-and-documents"},[t._v("Books & documents")]):t._e(),"PAT"===t.citation.source?i("span",{staticClass:"patent"},[t._v("Patent")]):t._e(),"Y"===t.citation.isOpenAccess||"Y"===t.citation.inEPMC||"Y"===t.citation.hasBook||"NBK"===t.citation.source?i("span",{class:"Y"===t.citation.isOpenAccess?"open-access":"fulltext"},["Article"===t.page?[t._v(t._s("Y"===t.citation.isOpenAccess?"Free to read & use":"Free to read"))]:i("route",{attrs:{id:"citation--tag--free-text-"+t.citation.id,to:{name:"article",params:{source:t.citation.source,id:t.citation.id},hash:"#free-full-text"}},on:{click:function(e){t.recordPiwikEvent("Full text link")}}},[t._v("\n        "+t._s("Y"===t.citation.isOpenAccess?"Free to read & use":"Free to read"))])],2):t._e(),i("span",{staticClass:"last-slot"},[t._t("last-slot")],2)])],2)},n=[],s=i("db49"),a={props:{citation:{type:Object,default:function(){}},page:{type:String,default:"Search"}},computed:{pubType:function(){return this.citation.pubTypeList&&this.citation.pubTypeList.pubType?this.citation.pubTypeList.pubType.toString():this.citation.pubType}},methods:{recordPiwikEvent:function(t){this.$matomo.trackEvent(s["e"]+this.page,"Citation",t)}}},r=a,c=(i("fc77"),i("2877")),l=Object(c["a"])(r,o,n,!1,null,null,null);e["a"]=l.exports},dcad:function(t,e,i){},f328:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.showExport?i("modal",{staticClass:"large",on:{close:function(e){t.showExport=!1}}},[i("template",{slot:"title"},[t._v("\n      "+t._s("search"===t.$route.name?"Export citations":"Get citation")+"\n    ")]),i("export-citation")],2):t._e(),t.showSaveSearch?i("modal",{on:{close:function(e){t.showSaveSearch=!1}}},[i("template",{slot:"title"},[t._v("\n      Save search\n    ")]),t.signedIn?[i("h3",{staticClass:"no_top_margin"},[t._v("\n        Name your search\n      ")]),i("p",[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.queryInput,expression:"queryInput",modifiers:{trim:!0}}],staticStyle:{width:"100%","box-sizing":"border-box"},attrs:{type:"text",placeholder:t.searchQuery},domProps:{value:t.queryInput},on:{input:function(e){e.target.composing||(t.queryInput=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),i("p",{staticClass:"button-group"},[i("button",{attrs:{disabled:!t.queryInput},on:{click:function(e){e.preventDefault(),t.saveSearch(!1)}}},[t._v("\n          Save\n        ")]),i("button",{staticClass:"secondary",attrs:{disabled:!t.queryInput},on:{click:function(e){e.preventDefault(),t.saveSearch(!0)}}},[t._v("\n          Save and view saved searches\n        ")])])]:[t._v("\n      To save your search, you first need to sign in.\n      "),i("p",[i("a",{attrs:{href:"/accounts/login"},on:{click:t.registerRedirection}},[i("button",[t._v("Continue")])])])]],2):t._e(),"mobile"===t.size?[t._l(t.actions.reverse(),(function(e){return[i("action",{key:e.id,attrs:{id:e.id},on:{click:e.onClick}},[i("i",{class:e.iconClass,attrs:{slot:"icon"},slot:"icon"}),i("span",{staticClass:"mobile-hide"},[t._v(t._s(e.text))])])]}))]:i("list",{staticClass:"action-menu hide-mobile",attrs:{list:t.actions},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.item;return i("action",{key:o.id,attrs:{id:o.id},on:{click:o.onClick}},[i("i",{class:o.iconClass+" fa-fw",attrs:{slot:"icon"},slot:"icon"}),i("span",{staticClass:"mobile-hide"},[t._v(t._s(o.text))])])}}])}),t.isLoading?i("loading",{staticClass:"hide-mobile"}):t._e()],2)},n=[],s=i("2f62"),a=i("d722"),r=i("bdee"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"content",staticClass:"export-content",attrs:{id:"export--main--panel"}},[["article","book"].includes(t.$route.name)?i("div",{staticClass:"export-quick-save"},[i("div",{staticClass:"export-quick-save-buttons"},[i("h3",{staticClass:"no_top_margin"},[t._v("\n        Quick save\n      ")]),i("div",t._l(t.buttons,(function(e){return i("action",{key:e.label,class:e.status,attrs:{href:e.href},on:{click:function(i){t.quickSave(i,e)}}},[i("i",{class:e.icon,attrs:{slot:"icon"},slot:"icon"}),t._v(t._s(e.label)+"\n        ")])})),1)]),t.stateMessage?i("notification",{attrs:{"notification-style":t.stateMessage.style}},[t._v("\n      "+t._s(t.stateMessage.html)+"\n    ")]):t._e(),i("p",{staticClass:"small",attrs:{id:"exportCitation"}},[t._v("\n      "+t._s(t.citation)+"\n    ")])],1):t._e(),i("form",{staticClass:"export-format",on:{submit:function(e){e.preventDefault(),t.recordDownloadPiwikEvent(),t.exportCitations(t.formatOptions[t.formatSelected])}}},["search"===t.$route.name?[i("h3",{staticClass:"no_top_margin"},[t._v("\n        1. Select citations for export?\n      ")]),[i("toggle",{attrs:{labels:t.exportListOptions},on:{onLabelSelected:t.toggleExportListOption}})],t.searchSelected?[i("p",[t._v("\n          Export the first\n          "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.numberSelected,expression:"numberSelected"}],attrs:{id:"exportNumber",type:"text"},domProps:{value:t.numberSelected},on:{input:function(e){e.target.composing||(t.numberSelected=e.target.value)}}}),t._v("\n          results (up to "+t._s(t.numberPossible.toLocaleString())+")\n        ")]),t.tooManyMessage?i("notification",{attrs:{"notification-style":t.tooManyMessage.style}},[t._v("\n          "+t._s(t.tooManyMessage.html)+"\n        ")]):t._e()]:t._e()]:t._e(),i("fieldset",[i("legend",[i("h3",[t._v("\n          "+t._s(["article","book"].includes(t.$route.name)?"Or, select format and export":"2. Select format")+"\n        ")])]),i("ul",{staticClass:"export-format-buttons"},t._l(t.formatList,(function(e){return i("li",{key:e},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.formatSelected,expression:"formatSelected"}],attrs:{id:"export--text--format-"+e,type:"radio",name:"exportformat"},domProps:{value:e,checked:t._q(t.formatSelected,e)},on:{change:[function(i){t.formatSelected=e},function(e){t.handleChangeFormat(t.formatSelected)}]}}),i("label",{attrs:{for:"export--text--format-"+e}},[t._v(t._s(t.formatOptions[e].label?t.formatOptions[e].label+" ("+e+")":e))])])})),0)]),t.exportListMessage?i("notification",{attrs:{"notification-style":t.exportListMessage.style}},[t._v("\n      "+t._s(t.exportListMessage.html)+"\n    ")]):t._e(),i("p",[i("button",{attrs:{id:"export--start--download",disabled:!t.formatSelected||t.tooManyMessage,type:"submit"}},[t._v("\n        Download\n      ")]),i("a",{staticClass:"alt-text",attrs:{id:"export-link",href:"#",download:""}},[t._v("Export")])])],2),!t.searchSelected&&t.exportList.length?i("export-list"):t._e()],1)},l=[],u=i("8a40"),p=i("9be6"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"export-list-title"},[i("h3",[t._v("\n      "+t._s("Export list ("+t.exportList.length+")")+"\n    ")]),i("action",{class:{disabled:!t.exportList.length},on:{click:t.removeArticles}},[i("i",{staticClass:"fas fa-times",attrs:{slot:"icon"},slot:"icon"}),t._v("Clear list\n    ")])],1),i("hr",{staticClass:"thick"}),i("list",{attrs:{list:t.exportList},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.item;return i("citation",{attrs:{citation:o}},[i("action",{staticClass:"remove-article",attrs:{slot:"label-slot"},on:{click:function(e){t.removeSelectedArticle(o),t.recordRemoveExportPiwikEvent()}},slot:"label-slot"},[i("i",{staticClass:"fas fa-times",attrs:{slot:"icon"},slot:"icon"}),t._v("Remove\n      ")])],1)}}])})],1)},h=[],f=i("423d"),m=i("db49");function b(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function v(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?b(i,!0).forEach((function(e){g(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):b(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function g(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var y={components:{Citation:f["a"],List:r["h"],Action:r["a"]},computed:Object(s["d"])("exportList",["exportList"]),methods:v({},Object(s["c"])("exportList",["removeArticles","removeSelectedArticle"]),{recordRemoveExportPiwikEvent:function(){this.$matomo.trackEvent(m["e"]+"Article","Export","Removed from export list")}})},_=y,x=(i("0028"),i("2877")),S=Object(x["a"])(_,d,h,!1,null,null,null),k=S.exports;function O(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function C(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?O(i,!0).forEach((function(e){w(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):O(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function w(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var L=5e4,E=150,j={components:{Notification:r["k"],ExportList:k,Toggle:r["q"],Action:r["a"]},data:function(){return{formatSelected:null,searchSelected:!0,numberSelected:E,tooManyMessage:null,stateMessage:null,exportListMessage:null,title:{article:"Get citation",search:"Export citations"},selectedExportListoption:0,sortOptions:{"FIRST_PDATE_D+desc":"DATE_DESC","FIRST_PDATE_D+asc":"DATE_ASC","CITED+desc":"TIMES_CITED_DESC","CITED+asc":"TIMES_CITED_ASC",RELEVANCE:"RELEVANCE"}}},computed:C({},Object(s["d"])("article/abstract",["abstract"]),{},Object(s["d"])("exportList",["exportList"]),{},Object(s["d"])("search",["searchQuery","hitCount","searchSort"]),{formatList:function(){var t=["BibTeX","RIS","citation","abstracts"];return["article","book"].includes(this.$route.name)&&"Y"===this.abstract.isOpenAccess&&t.push("open access full text"),"search"!==this.$route.name&&"exportList"!==this.$route.name||t.push("open access full text","CSV","ID list"),t},exportListOptions:function(){return[{text:"Export list ("+this.exportList.length.toLocaleString()+")",selected:0===this.selectedExportListoption&&this.exportList.length,disabled:0===this.exportList.length},{text:"Search results ("+this.hitCount.toLocaleString()+")",selected:1===this.selectedExportListoption||!this.exportList.length}]},filename:function(){var t="";return["article","book"].includes(this.$route.name)?t=(this.abstract.id.substring(0,3)!==this.abstract.source?this.abstract.source:"")+this.abstract.id:"search"===this.$route.name?t="EuropePMCSearch"+(new Date).toISOString().replace(/-|T|:/g,"").slice(0,12):"exportList"===this.$route.name&&(t="Export List"+(new Date).toISOString().replace(/-|T|:/g,"").slice(0,12)),t},numberPossible:function(){return this.hitCount<=L?this.hitCount:L},formatOptions:function(){return{BibTeX:{label:"Mendeley, Refworks, CiteULike, Papers",value:"BIBTEXT",resulttype:"core"},RIS:{label:"EndNote",value:"RIS",resulttype:"core"},citation:{label:"Text",value:"TEXT_CITATION",resulttype:"core"},abstracts:{label:"XML",value:"EUROPEPMC_XML",resulttype:"core"},"open access full text":{label:"XML",value:"EUROPEPMC_FULLTEXT_XML",resulttype:"idlist",openAccess:!0},CSV:{label:"Excel, comma separated",value:"CSV",resulttype:"core"},"ID list":{label:"",value:"ID_LIST",resulttype:"idlist"}}},citation:function(){var t="";if(["article","book"].includes(this.$route.name)){if(this.abstract.authorList){var e=this.abstract.authorList.author.length>5?this.abstract.authorList.author.slice(0,3):this.abstract.authorList.author;e.forEach((function(i,o){t+=i.collectiveName?i.collectiveName:i.fullName,t+=o+1<e.length?", ":""})),t+=this.abstract.authorList.author.length>5?", et al. ":". "}t+=this.abstract.title,this.abstract.journalInfo?(t+=" "+this.abstract.journalInfo.journal.title+". ",t+=this.abstract.journalInfo.dateOfPublication,t+=this.abstract.journalInfo.volume?";"+this.abstract.journalInfo.volume:"",t+=this.abstract.journalInfo.issue?"("+this.abstract.journalInfo.issue+")":""):this.abstract.bookOrReportDetails?(t+=this.abstract.bookOrReportDetails.comprisingTitle&&this.abstract.bookOrReportDetails.comprisingTitle!==this.abstract.title?". In: "+this.abstract.bookOrReportDetails.comprisingTitle+". ":". ",t+=this.abstract.bookOrReportDetails.edition?this.abstract.bookOrReportDetails.edition+" ed. ":"",t+=this.abstract.bookOrReportDetails.publisher+"; ",t+=this.abstract.bookOrReportDetails.yearOfPublication+".",t+=this.abstract.pageInfo?"p. ":""):this.abstract.patentDetails&&(t+=". "+this.abstract.patentDetails.country+" "+this.abstract.patentDetails.typeDescription+" "+this.abstract.patentDetails.application.applicationNumber+". ",t+=Object(u["d"])(this.abstract.patentDetails.application.applicationDate)+". "),t+=this.abstract.pageInfo?":"+this.abstract.pageInfo+".":"",t+=this.abstract.doi?" DOI: "+this.abstract.doi+".":""}return t},buttons:function(){return[{label:"Add to export list",icon:"fas fa-plus",status:this.getAddStatus(),successMessage:{style:"confirmation",html:"Citation added to your export list."},failMessage:{style:"error",html:"Your export list is full."}},{label:"Copy",icon:"fas fa-copy",status:"enabled",successMessage:{style:"confirmation",html:"Citation copied to your clipboard"},failMessage:{style:"error",html:"Citation ccould not be copied"}},{label:"Email",icon:"fas fa-envelope",href:"mailto:?subject=Europe PMC citation&body="+encodeURIComponent(this.citation),status:"enabled",successMessage:"",failMessage:""}]}}),watch:{searchSelected:function(){this.searchSelected?this.numberSelected=this.hitCount<=L?this.hitCount:E:this.numberSelected=this.exportList.length<=L?this.exportList.length:E},numberSelected:function(){this.tooManyMessage=null,"search"===this.$route.name&&(this.numberSelected>this.numberPossible?this.tooManyMessage={style:"error",html:"Unable to export more than "+this.numberPossible.toLocaleString()+" citations."}:0!==parseInt(this.numberSelected)&&this.numberSelected?isNaN(this.numberSelected)&&(this.tooManyMessage={style:"error",html:"Input must be numeric."}):this.tooManyMessage={style:"error",html:"Cannot export 0 citations."})},exportList:function(){this.exportList.length||(this.searchSelected=!this.searchSelected)}},created:function(){this.hitCount<this.numberSelected&&(this.numberSelected=this.hitCount)},mounted:function(){this.exportList.length&&(this.searchSelected=!1),0===this.numberSelected&&(this.searchSelected?this.numberSelected=this.hitCount<=E?this.hitCount:E:this.numberSelected=this.exportList.length<=L?this.exportList.length:L)},methods:C({},Object(s["c"])("exportList",["addSelectedArticle"]),{quickSave:function(t,e){var i=this;if("Email"===e.label)t.target.classList.add("active"),window.setTimeout((function(){t.target.classList.remove("active")}),1e3),this.recordArticlePiwikEvent("Export","Email");else{if(t.preventDefault(),t.target.classList.add("active"),"Copy"===e.label){var o=document.getElementById("exportCitation"),n=document.createRange();n.selectNode(o),window.getSelection().removeAllRanges(),window.getSelection().addRange(n);try{var s=document.execCommand("copy");this.stateMessage=s?e.successMessage:e.failMessage}catch(a){this.stateMessage=e.failMessage}this.recordArticlePiwikEvent("Export","Copy")}else this.exportList.length<L?(this.addSelectedArticle(Object(p["a"])(this.abstract)),this.stateMessage=e.successMessage):this.stateMessage=e.failMessage,this.recordArticlePiwikEvent("Export","Add to export list");window.setTimeout((function(){i.stateMessage=null,t.target.classList.remove("active")}),3e3)}},toggleExportListOption:function(t){this.selectedExportListoption=t,this.searchSelected=1===t},exportCitations:function(t){var e=this;this.exportListMessage=null;var i={query:"",synonym:!1,sortBy:"RELEVANCE",max:0,format:t.value,idList:[]};["article","book"].includes(this.$route.name)?i.idList=[{extId:this.abstract.id,src:this.abstract.source,openAccess:t.openAccess,pmcid:this.abstract.pmcid}]:"search"===this.$route.name&&(i.sortBy=this.searchSort?this.sortOptions[this.searchSort]:"RELEVANCE",this.searchSelected?(i.query=this.searchQuery,this.numberSelected&&(i.max=this.numberSelected)):(i.max=this.exportList.length,t.openAccess?i.idList=this.exportList.filter((function(t){return"Y"===t.isOpenAccess})):i.idList=[].concat(this.exportList),i.idList=i.idList.map((function(e){return{extId:e.id,src:e.source.toLowerCase(),openAccess:t.openAccess,pmcid:e.pmcid}})))),this.exportListMessage={style:"warning",html:"Export in process"},Object(a["j"])(i).then((function(t){return t.json()})).then((function(t){if(0===t.status){var i=document.getElementById("export-link");i.href=m["a"]+"api/get/export?ts="+(new Date).getTime(),i.onclick=function(){e.exportListMessage=null},i.click()}else 2===t.status?e.exportListMessage={style:"error",html:"Export already in process"}:e.exportListMessage={style:"error",html:"Error occurred please try again"}}))},handleChangeFormat:function(t){this.exportListMessage="open access full text"===t?{style:"warning",html:"Only open-access, full-text articles will be exported"}:null},getAddStatus:function(){var t=this;return this.exportList.find((function(e){return e.id===t.abstract.id}))?"disabled":"enabled"},recordArticlePiwikEvent:function(t,e){this.$matomo.trackEvent(m["e"]+"Article",t,e)},recordDownloadPiwikEvent:function(){var t,e,i=this.formatOptions[this.formatSelected].label?this.formatOptions[this.formatSelected].label+" ("+this.formatSelected+")":this.formatSelected,o="Search";"article"==this.$route.name?(t=1,o="Article",e="citation"):"search"==this.$route.name&&this.numberSelected&&this.searchSelected?(t=this.numberSelected,e="search results"):(t=this.exportList.length,e="export list"),this.$matomo.trackEvent(m["e"]+o,"Export","Download"),this.$matomo.trackEvent(m["e"]+o,"Export - toggle",e),this.$matomo.trackEvent(m["e"]+o,"Export - no. results",t),"Article"==o?this.$matomo.trackEvent(m["e"]+o,"Export - format",i):this.$matomo.trackEvent(m["e"]+o,"Export - Select format",i)}})},P=j,M=(i("1040"),Object(x["a"])(P,c,l,!1,null,"547335f0",null)),D=M.exports;function A(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function T(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?A(i,!0).forEach((function(e){I(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):A(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function I(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var R="NBK",$={components:{List:r["h"],Modal:r["j"],ExportCitation:D,Loading:r["i"],Action:r["a"]},props:{size:{type:String,default:""}},data:function(){return{showExport:!1,showSaveSearch:!1,signedIn:!1,notificationTimeout:5e3,queryInput:"",isLoading:!1}},computed:T({},Object(s["d"])("article/abstract",["abstract"]),{},Object(s["d"])("search",["searchQuery","hitCount"]),{},Object(s["d"])("article/fulltext",["bookUri"]),{},Object(s["d"])("exportList",["exportList"]),{downloadUrl:{get:function(){var t=this.abstract.fullTextUrlList&&this.abstract.fullTextUrlList.fullTextUrl.filter((function(t){return"pdf"===t.documentStyle}));return"Y"===this.abstract.hasPDF&&t.length>0?t[0].url:"PMC"===this.$route.params.src?"@/articles/"+this.$route.params.id+"?pdf=render":this.bookUri?"/books/n/"+this.bookUri+"/pdf/":"Y"===this.abstract.hasBook&&this.abstract.bookid.indexOf(R)>-1?"#":null},set:function(){}},actions:function(){var t=this,e=[];return["article","book"].includes(this.$route.name)?("mobile"!==this.size&&e.push({id:"annotations_pane",text:"View key terms",iconClass:"fas fa-eye",onClick:function(){return t.onActionClicked("annotations_pane")},thickSeparator:!0,tooltip:"Terms are identified by text mining algorithms, developed by a variety of text mining groups."}),e.push({id:"get_citation",text:"Get citation",iconClass:"fas fa-quote-left",onClick:function(){return t.onActionClicked("get_citation")}}),this.downloadUrl&&e.push({id:"open_pdf",text:"Open PDF",iconClass:"fa fa-file-pdf",onClick:function(){return t.onActionClicked("open_pdf")}})):"search"===this.$route.name&&e.push({id:"save_search",text:"Save search",iconClass:"fas fa-save",onClick:function(){return t.onActionClicked("save_search")}},{id:"get_citation",text:"Export citations"+(this.exportList.length?" ("+this.exportList.length+")":""),iconClass:"fas fa-quote-left",onClick:function(){return t.onActionClicked("get_citation")}}),e}}),created:function(){"save_search"===this.$route.query.action&&(this.showSaveSearch=!0,this.signedIn=document.getElementById("profile-bar--username"),Object(a["H"])())},methods:T({},Object(s["c"])("article/annotations",["changeShowAnnotationsPane"]),{},Object(s["b"])("article/fulltext",["loadFulltextHtml"]),{onActionClicked:function(t){var e=this;"get_citation"===t?this.showExport=!0:"annotations_pane"===t?(this.changeShowAnnotationsPane(!0),this.registerAnnotationPiwik("Annotations","Panel opened")):"save_search"===t?(this.showSaveSearch=!0,this.signedIn=document.getElementById("profile-bar--username"),this.$matomo.trackEvent(m["e"]+"Search","Tools","Save search")):"open_pdf"===t&&("#"===this.downloadUrl?(this.isLoading=!0,this.loadFulltextHtml().then((function(){e.downloadUrl="/books/n/"+e.bookUri+"/pdf/",e.isLoading=!1,window.open(e.downloadUrl,"_blank")}))):window.open(this.downloadUrl,"_blank")),"article"===this.$route.name&&this.registerArticleToolPiwik(t)},saveSearch:function(t){var e=this;this.queryInput&&Object(a["I"])(this.queryInput,this.searchQuery,this.hitCount).then((function(){e.showSaveSearch=!1,e.$emit("notify",{type:"confirmation",message:'Your search for "'.concat(e.queryInput,'" has been saved.')}),t?window.location="/accounts/SavedSearches":setTimeout((function(){e.$emit("notify",null)}),e.notificationTimeout)}))},registerRedirection:function(){Object(a["H"])(this.$route.fullPath.split("?")[1])},registerArticleToolPiwik:function(t){var e=this.actions.filter((function(e){return e.id===t}));this.$matomo.trackEvent(m["e"]+"Article","Tools",e[0].text)},registerAnnotationPiwik:function(t,e){this.$matomo.trackEvent(m["e"]+"Article",t,e)}})},N=$,B=(i("8f91"),Object(x["a"])(N,o,n,!1,null,"98e981f2",null));e["a"]=B.exports},f8b7:function(t,e,i){},fc77:function(t,e,i){"use strict";var o=i("dcad"),n=i.n(o);n.a}}]);
//# sourceMappingURL=chunk-53304297.b031b7f1.js.map