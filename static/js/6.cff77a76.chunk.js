/*! For license information please see 6.cff77a76.chunk.js.LICENSE.txt */
(this["webpackJsonphacktj-2020v2"]=this["webpackJsonphacktj-2020v2"]||[]).push([[6,10,11],{158:function(e,t,n){"use strict";n.r(t);var a=n(2),r=(n(0),n(37)),o=(n(58),function(e){var t=e.logo,n=e.iteration,r=e.year,o=e.url,c=e.disabled,i=void 0!==c&&c;return Object(a.jsx)("div",{className:"history-section",children:Object(a.jsxs)("div",{className:"action-section",children:[Object(a.jsx)("img",{src:t,style:{width:"200px",height:"200px"},alt:"HackTJ ".concat(n)}),Object(a.jsxs)("div",{className:"info-container",children:[Object(a.jsxs)("h3",{className:"section-title",children:["HackTJ ",n]}),Object(a.jsx)("h4",{className:"section-year",children:r}),Object(a.jsx)("a",{className:"altbutton",style:{width:"100%"},href:i?void 0:o,target:"_blank",rel:"noopener noreferrer",children:"DevPost"})]})]})})}),c=(n(59),function(){return Object(a.jsxs)("div",{className:"centered-box relative history",children:[Object(a.jsxs)("div",{className:"header-section",children:[Object(a.jsx)("div",{className:"icon icon-clock"}),Object(a.jsx)("h3",{className:"title",children:"A Walk Through Memory Lane"})]}),Object(a.jsx)(o,{logo:"https://raw.githubusercontent.com/HackTJ/2020/master/src/images/logo.png",iteration:"7.0",year:"2020",url:"https://hacktj2020.devpost.com/",disabled:!0}),Object(a.jsx)(o,{logo:"https://hacktj.org/2019/img/logo2.png",iteration:"6.0",year:"2019",url:"https://hacktj2019.devpost.com/"}),Object(a.jsx)(o,{logo:"https://hacktj.org/2018/img/favicon.png",iteration:"5.0",year:"2018",url:"https://hacktj2018.devpost.com/"}),Object(a.jsx)(o,{logo:"https://hacktj.org/2017/img/favicon.png",iteration:"4.0",year:"2017",url:"https://hacktj2017.devpost.com/"}),Object(a.jsx)(o,{logo:"https://hacktj.org/2016/img/favicon.png",iteration:"3.0",year:"2016",url:"https://hacktj2016.devpost.com/"}),Object(a.jsx)(o,{logo:"https://hacktj.org/2015/img/favicon.png",iteration:"2.0",year:"2015",url:"https://hacktj2015.devpost.com/"})]})}),i=n(38);t.default=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(r.default,{}),Object(a.jsx)(c,{}),Object(a.jsx)(i.default,{})]})}},29:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var c=r.apply(null,a);c&&e.push(c)}else if("object"===o)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},30:function(e,t,n){"use strict";n.d(t,"g",(function(){return c})),n.d(t,"h",(function(){return i})),n.d(t,"i",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"k",(function(){return d})),n.d(t,"j",(function(){return f})),n.d(t,"d",(function(){return j})),n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return h})),n.d(t,"f",(function(){return m})),n.d(t,"e",(function(){return O}));var a,r=n(6),o=n.n(r);function c(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function i(e,t){var n={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(n[a]=e[a])})),n}function s(e,t){for(var n,a=Array.isArray(t)?t:[t],r=a.length,o={};r>0;)o[n=a[r-=1]]=e[n];return o}var l="object"===typeof window&&window.Element||function(){};function u(e,t,n){if(!(e[t]instanceof l))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var d=o.a.oneOfType([o.a.string,o.a.func,u,o.a.shape({current:o.a.any})]),f=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]),j={Fade:150,Collapse:350,Modal:300,Carousel:600},p=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],h=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],b=!("undefined"===typeof window||!window.document||!window.document.createElement);function g(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function m(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function v(e){if(function(e){return!(!e||"object"!==typeof e)&&"current"in e}(e))return e.current;if(function(e){if(!m(e))return!1;var t=g(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}(e))return e();if("string"===typeof e&&b){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function x(e){return null!==e&&(Array.isArray(e)||b&&"number"===typeof e.length)}function O(e,t){var n=v(e);return t?x(n)?n:null===n?[]:[n]:x(n)?n[0]:n}},31:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))},32:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),o=n.n(r),c=n(4),i=n(31),s=n(6),l=n.n(s),u=n(29),d=n.n(u),f=n(30),j={light:l.a.bool,dark:l.a.bool,full:l.a.bool,fixed:l.a.string,sticky:l.a.string,color:l.a.string,role:l.a.string,tag:f.j,className:l.a.string,cssModule:l.a.object,expand:l.a.oneOfType([l.a.bool,l.a.string])},p=function(e){var t,n=e.expand,a=e.className,r=e.cssModule,s=e.light,l=e.dark,u=e.fixed,j=e.sticky,p=e.color,h=e.tag,b=Object(i.a)(e,["expand","className","cssModule","light","dark","fixed","sticky","color","tag"]),g=Object(f.g)(d()(a,"navbar",function(e){return!1!==e&&(!0===e||"xs"===e?"navbar-expand":"navbar-expand-"+e)}(n),((t={"navbar-light":s,"navbar-dark":l})["bg-"+p]=p,t["fixed-"+u]=u,t["sticky-"+j]=j,t)),r);return o.a.createElement(h,Object(c.a)({},b,{className:g}))};p.propTypes=j,p.defaultProps={tag:"nav",expand:!1};var h=p,b={tabs:l.a.bool,pills:l.a.bool,vertical:l.a.oneOfType([l.a.bool,l.a.string]),horizontal:l.a.string,justified:l.a.bool,fill:l.a.bool,navbar:l.a.bool,card:l.a.bool,tag:f.j,className:l.a.string,cssModule:l.a.object},g=function(e){var t=e.className,n=e.cssModule,a=e.tabs,r=e.pills,s=e.vertical,l=e.horizontal,u=e.justified,j=e.fill,p=e.navbar,h=e.card,b=e.tag,g=Object(i.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),m=Object(f.g)(d()(t,p?"navbar-nav":"nav",!!l&&"justify-content-"+l,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(s),{"nav-tabs":a,"card-header-tabs":h&&a,"nav-pills":r,"card-header-pills":h&&r,"nav-justified":u,"nav-fill":j}),n);return o.a.createElement(b,Object(c.a)({},g,{className:m}))};g.propTypes=b,g.defaultProps={tag:"ul",vertical:!1};var m=g,v={tag:f.j,active:l.a.bool,className:l.a.string,cssModule:l.a.object},x=function(e){var t=e.className,n=e.cssModule,a=e.active,r=e.tag,s=Object(i.a)(e,["className","cssModule","active","tag"]),l=Object(f.g)(d()(t,"nav-item",!!a&&"active"),n);return o.a.createElement(r,Object(c.a)({},s,{className:l}))};x.propTypes=v,x.defaultProps={tag:"li"};var O=x,y=n(32),k=n(7),N={tag:f.j,innerRef:l.a.oneOfType([l.a.object,l.a.func,l.a.string]),disabled:l.a.bool,active:l.a.bool,className:l.a.string,cssModule:l.a.object,onClick:l.a.func,href:l.a.any},w=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(y.a)(n)),n}Object(k.a)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,a=e.active,r=e.tag,s=e.innerRef,l=Object(i.a)(e,["className","cssModule","active","tag","innerRef"]),u=Object(f.g)(d()(t,"nav-link",{disabled:l.disabled,active:a}),n);return o.a.createElement(r,Object(c.a)({},l,{ref:s,onClick:this.onClick,className:u}))},t}(o.a.Component);w.propTypes=N,w.defaultProps={tag:"a"};var E=w;n(34),t.default=function(){return Object(a.jsx)(h,{sticky:"top",className:"navcontainer",bg:"#64d861",style:{position:"sticky",top:"0px",display:"flex",flexDirection:"row",zIndex:1e3},children:Object(a.jsxs)(m,{className:"nav justify-content-center",navbar:!0,children:[Object(a.jsx)(O,{children:Object(a.jsx)(E,{href:"#intro",children:"Intro"})}),Object(a.jsx)(O,{children:Object(a.jsx)(E,{href:"#faq",children:"FAQ"})}),Object(a.jsx)(O,{children:Object(a.jsx)(E,{href:"#sponsor",children:"Sponsors"})}),Object(a.jsx)(O,{children:Object(a.jsx)(E,{href:"#schedule",children:"Schedule"})}),Object(a.jsx)(O,{children:Object(a.jsx)(E,{href:"#team",children:"Team"})})]})})}},38:function(e,t,n){"use strict";n.r(t);var a=n(2),r=(n(0),n(35),function(e){return Object(a.jsx)("span",{style:{visibility:"hidden"},children:e})}),o=Object(a.jsx)("a",{className:"social pe-so-twitter",target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/HackTJOfficial",children:r("Twitter")}),c=Object(a.jsx)("a",{className:"social pe-so-facebook empty",target:"_blank",rel:"noopener noreferrer",href:"https://facebook.com/HackTJOfficial",children:r("Facebook")}),i=Object(a.jsx)("a",{className:"social pe-so-instagram empty",target:"_blank",rel:"noopener noreferrer",href:"https://instagram.com/hacktjofficial",children:r("Instagram")}),s=function(){return Object(a.jsxs)("div",{className:"social-links",children:[o,c,i]})},l=function(){return Object(a.jsx)("a",{id:"mlh-trust-badge",href:"https://mlh.io/seasons/na-2021/events?utm_source=na-hacktahon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=white",target:"_blank",rel:"noopener noreferrer",style:{display:"block",maxWidth:"100px",minWidth:"60px",position:"fixed",right:"50px",top:0,width:"10%",zIndex:1e4},children:Object(a.jsx)("img",{src:"https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-white.svg",alt:"Major League Hacking 2021 Hackathon Season",style:{width:"100%"}})})};n(36),t.default=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("section",{className:"green register footer",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"register-button-block-old bottom",children:Object(a.jsx)("div",{className:"register-text",children:"Be sure to follow our Social Media pages for updates!"})}),Object(a.jsx)(s,{})]})}),Object(a.jsx)(l,{})]})}},58:function(e,t,n){},59:function(e,t,n){}}]);
//# sourceMappingURL=6.cff77a76.chunk.js.map