function asyncGeneratorStep(e,t,r,n,i,a,o){try{var s=e[a](o),c=s.value}catch(u){return void r(u)}s.done?t(c):Promise.resolve(c).then(n,i)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function o(e){asyncGeneratorStep(a,n,i,o,s,"next",e)}function s(e){asyncGeneratorStep(a,n,i,o,s,"throw",e)}o(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{TpdJ:function(e,t,r){"use strict";r.r(t),r.d(t,"ion_tab",(function(){return a})),r.d(t,"ion_tabs",(function(){return o}));var n=r("dSyh"),i=(r("AfW+"),r("m9yc"));const a=class{constructor(e){Object(n.l)(this,e),this.loaded=!1,this.active=!1}componentWillLoad(){}setActive(){var e=this;return _asyncToGenerator(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.prepareLazyLoaded();case 2:e.active=!0;case 3:case"end":return t.stop()}}),t)})))()}prepareLazyLoaded(){if(!this.loaded&&null!=this.component){this.loaded=!0;try{return Object(i.a)(this.delegate,this.el,this.component,["ion-page"])}catch(e){console.error(e)}}return Promise.resolve(void 0)}render(){const e=this.tab,t=this.active,r=this.component;return Object(n.i)(n.a,{role:"tabpanel","aria-hidden":t?null:"true","aria-labelledby":"tab-button-".concat(e),class:{"ion-page":void 0===r,"tab-hidden":!t}},Object(n.i)("slot",null))}get el(){return Object(n.f)(this)}static get style(){return":host(.tab-hidden){display:none!important}"}},o=class{constructor(e){Object(n.l)(this,e),this.transitioning=!1,this.useRouter=!1,this.onTabClicked=e=>{const t=e.detail,r=t.href,n=t.tab;if(this.useRouter&&void 0!==r){const e=document.querySelector("ion-router");e&&e.push(r)}else this.select(n)},this.ionNavWillLoad=Object(n.d)(this,"ionNavWillLoad",7),this.ionTabsWillChange=Object(n.d)(this,"ionTabsWillChange",3),this.ionTabsDidChange=Object(n.d)(this,"ionTabsDidChange",3)}componentWillLoad(){var e=this;return _asyncToGenerator(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.useRouter||(e.useRouter=!!document.querySelector("ion-router")&&!e.el.closest("[no-router]")),e.useRouter){t.next=4;break}return r=e.tabs,t.next=4,e.select(r[0]);case 4:e.ionNavWillLoad.emit();case 5:case"end":return t.stop()}}),t)})))()}componentWillRender(){const e=this.el.querySelector("ion-tab-bar");e&&(e.selectedTab=this.selectedTab?this.selectedTab.tab:void 0)}select(e){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=s(t.tabs,e),r.t0=!!t.shouldSwitch(n),!r.t0){r.next=9;break}return r.next=5,t.setActive(n);case 5:return r.next=7,t.notifyRouter();case 7:t.tabSwitch(),r.t0=!0;case 9:return r.abrupt("return",r.t0);case 10:case"end":return r.stop()}}),r)})))()}getTab(e){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",s(t.tabs,e));case 1:case"end":return r.stop()}}),r)})))()}getSelected(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:void 0)}setRouteId(e){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=s(t.tabs,e),!t.shouldSwitch(n)){r.next=7;break}return r.next=4,t.setActive(n);case 4:r.t0={changed:!0,element:t.selectedTab,markVisible:()=>t.tabSwitch()},r.next=8;break;case 7:r.t0={changed:!1,element:t.selectedTab};case 8:return r.abrupt("return",r.t0);case 9:case"end":return r.stop()}}),r)})))()}getRouteId(){var e=this;return _asyncToGenerator(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.selectedTab&&e.selectedTab.tab,t.abrupt("return",void 0!==r?{id:r,element:e.selectedTab}:void 0);case 2:case"end":return t.stop()}}),t)})))()}setActive(e){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=e,this.ionTabsWillChange.emit({tab:e.tab}),e.setActive())}tabSwitch(){const e=this.selectedTab,t=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,e&&t!==e&&(t&&(t.active=!1),this.ionTabsDidChange.emit({tab:e.tab}))}notifyRouter(){if(this.useRouter){const e=document.querySelector("ion-router");if(e)return e.navChanged("forward")}return Promise.resolve(!1)}shouldSwitch(e){return void 0!==e&&e!==this.selectedTab&&!this.transitioning}get tabs(){return Array.from(this.el.querySelectorAll("ion-tab"))}render(){return Object(n.i)(n.a,{onIonTabButtonClick:this.onTabClicked},Object(n.i)("slot",{name:"top"}),Object(n.i)("div",{class:"tabs-inner"},Object(n.i)("slot",null)),Object(n.i)("slot",{name:"bottom"}))}get el(){return Object(n.f)(this)}static get style(){return":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;z-index:0}.tabs-inner,:host{contain:layout size style}.tabs-inner{position:relative;-ms-flex:1;flex:1}"}},s=(e,t)=>{const r="string"==typeof t?e.find(e=>e.tab===t):t;return r||console.error('tab with id: "'.concat(r,'" does not exist')),r}}}]);