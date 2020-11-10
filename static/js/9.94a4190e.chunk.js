/*! For license information please see 9.94a4190e.chunk.js.LICENSE.txt */
(this["webpackJsonphacktj-2020v2"]=this["webpackJsonphacktj-2020v2"]||[]).push([[9],{167:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(5),l=n(3),i=n(29),s=n(4),c=n.n(s),u=n(27),d=n.n(u),f=n(28),p={tag:f.j,fluid:c.a.oneOfType([c.a.bool,c.a.string]),className:c.a.string,cssModule:c.a.object},m=function(e){var t=e.className,n=e.cssModule,a=e.fluid,r=e.tag,s=Object(i.a)(e,["className","cssModule","fluid","tag"]),c="container";!0===a?c="container-fluid":a&&(c="container-"+a);var u=Object(f.g)(d()(t,c),n);return o.a.createElement(r,Object(l.a)({},s,{className:u}))};m.propTypes=p,m.defaultProps={tag:"div"};var h=m,b=c.a.oneOfType([c.a.number,c.a.string]),g={tag:f.j,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:b,sm:b,md:b,lg:b,xl:b},w={tag:"div",widths:["xs","sm","md","lg","xl"]},y=function(e){var t=e.className,n=e.cssModule,a=e.noGutters,r=e.tag,s=e.form,c=e.widths,u=Object(i.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];c.forEach((function(t,n){var a=e[t];if(delete u[t],a){var o=!n;p.push(o?"row-cols-"+a:"row-cols-"+t+"-"+a)}}));var m=Object(f.g)(d()(t,a?"no-gutters":null,s?"form-row":"row",p),n);return o.a.createElement(r,Object(l.a)({},u,{className:m}))};y.propTypes=g,y.defaultProps=w;var v=y,E=n(7),k=c.a.oneOfType([c.a.number,c.a.string]),j=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:k,offset:k})]),O={tag:f.j,xs:j,sm:j,md:j,lg:j,xl:j,className:c.a.string,cssModule:c.a.object,widths:c.a.array},N={tag:"div",widths:["xs","sm","md","lg","xl"]},q=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},x=function(e){var t=e.className,n=e.cssModule,a=e.widths,r=e.tag,s=Object(i.a)(e,["className","cssModule","widths","tag"]),c=[];a.forEach((function(t,a){var o=e[t];if(delete s[t],o||""===o){var r=!a;if(Object(f.f)(o)){var l,i=r?"-":"-"+t+"-",u=q(r,t,o.size);c.push(Object(f.g)(d()(((l={})[u]=o.size||""===o.size,l["order"+i+o.order]=o.order||0===o.order,l["offset"+i+o.offset]=o.offset||0===o.offset,l)),n))}else{var p=q(r,t,o);c.push(p)}}})),c.length||c.push("col");var u=Object(f.g)(d()(t,c),n);return o.a.createElement(r,Object(l.a)({},s,{className:u}))};x.propTypes=O,x.defaultProps=N;var T=x,C=n(30),I=n(31),H={active:c.a.bool,"aria-label":c.a.string,block:c.a.bool,color:c.a.string,disabled:c.a.bool,outline:c.a.bool,tag:f.j,innerRef:c.a.oneOfType([c.a.object,c.a.func,c.a.string]),onClick:c.a.func,size:c.a.string,children:c.a.node,className:c.a.string,cssModule:c.a.object,close:c.a.bool},M=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(C.a)(n)),n}Object(I.a)(t,e);var n=t.prototype;return n.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},n.render=function(){var e=this.props,t=e.active,n=e["aria-label"],a=e.block,r=e.className,s=e.close,c=e.cssModule,u=e.color,p=e.outline,m=e.size,h=e.tag,b=e.innerRef,g=Object(i.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);s&&"undefined"===typeof g.children&&(g.children=o.a.createElement("span",{"aria-hidden":!0},"\xd7"));var w="btn"+(p?"-outline":"")+"-"+u,y=Object(f.g)(d()(r,{close:s},s||"btn",s||w,!!m&&"btn-"+m,!!a&&"btn-block",{active:t,disabled:this.props.disabled}),c);g.href&&"button"===h&&(h="a");var v=s?"Close":null;return o.a.createElement(h,Object(l.a)({type:"button"===h&&g.onClick?"button":void 0},g,{className:y,ref:b,onClick:this.onClick,"aria-label":n||v}))},t}(o.a.Component);M.propTypes=H,M.defaultProps={color:"secondary",tag:"button"};var A=M,J=(n(65),function(e){var t=e.question,n=e.answer,o=e.small,r=void 0!==o&&o,l=a.useState(!1),i=Object(E.a)(l,2),s=i[0],c=i[1],u=function(){return c(!s)};return a.createElement(T,{className:"".concat(s?"is-open":"")},a.createElement("h3",{className:"question ".concat(r?"small":"")},a.createElement(A,{type:"button",onClick:u,close:s},t),a.createElement("span",{className:"icon icon-plus",onClick:u,onKeyDown:u,role:"button","aria-label":"Show answer",tabIndex:0}),a.createElement("span",{className:"icon icon-close",onClick:u,onKeyDown:u,role:"button","aria-label":"Hide answer",tabIndex:0})),a.createElement("div",{className:"answer",style:{maxHeight:s?"700px":0}},a.createElement("p",null,n)))});J.defaultProps={small:!1};var z=a.memo(J);n(66),t.default=function(){return a.createElement(a.Fragment,null,a.createElement("a",{className:"anchor",id:"faq",href:"#faq"},"FAQ"),a.createElement("section",{className:"green faq"},a.createElement(h,{className:"faq-container"},a.createElement("h1",{className:"section-title"},"FAQ"),a.createElement(v,null,a.createElement(z,{question:"What is HackTJ?",answer:a.createElement("span",null,"HackTJ is a student-run hackathon where you will have 24 hours to learn how to code and/or work with your friends to make your idea come to life.")}),a.createElement(z,{question:"When is HackTJ?",answer:a.createElement("span",null,"HackTJ will start on Saturday, December 12 and run until Sunday, December 13.")}),a.createElement(z,{question:"Who can attend?",answer:a.createElement("span",null,"HackTJ is open to any and all current high school students. If you're not a high school student but would like to attend, consider coming as a judge, mentor, or volunteer.")}),a.createElement(z,{question:"Is there any cost?",answer:a.createElement("span",null,"Nope! Thanks to our sponsors, HackTJ is completely free!")})),a.createElement(v,null,a.createElement(z,{question:"Is there a deadline?",answer:a.createElement("span",null,"Registration for judges, mentors, and volunteers will likely open sometime during early November and close near late November. Registration for participants will open at 8 p.m. on Monday, November 2 and close at 8 p.m. on Friday, November 27, 2020. All of our plans are still tentative due to COVID-19; changes to our dates will be reflected on this webpage as soon as they are decided!")}),a.createElement(z,{question:"Do you have a code of conduct?",small:!0,answer:a.createElement("span",null,"Yes, good question! We have adopted the"," ",a.createElement(r.b,{to:"".concat("/2020v2","/conduct.pdf"),target:"_blank",rel:"noopener noreferrer"},"MLH code of conduct"),", which all attendees will be required to adhere to.")}),a.createElement(z,{question:"Isn't hacking illegal?",answer:a.createElement("span",null,'In the context of a hackathon, "hacking" is to build a real application over the length of the event. It\'s important to not confuse this with illegal hacking, which is gaining unauthorized access to a computer.')}),a.createElement(z,{question:"Do I need a team?",answer:a.createElement("span",null,"If you already have a team of 2-4 people you want to work with, that's awesome! If not don't worry because we'll have an opportunity for people to join a team if they need one.")})),a.createElement(v,null,a.createElement(z,{question:"What if I don't know how to code?",small:!0,answer:a.createElement("span",null,"Come to HackTJ! Coding is fun, creative, and an important skill, and HackTJ is the perfect way to learn. We'll have workshops and mentors to help guide you.")}),a.createElement(z,{question:"What prizes can I win?",answer:a.createElement("span",null,"HackTJ hosts prizes for the best projects in the following categories:",a.createElement("ul",null,a.createElement("li",null,"Best Overall Hack"),a.createElement("li",null,"Best Web App"),a.createElement("li",null,"Best Mobile App"),a.createElement("li",null,"Best Design"),a.createElement("li",null,"Greatest Social Impact"),a.createElement("li",null,"Best Beginner Hack (first-year coder teams)")),"Major League Hacking and some of our partners also host their own Sponsored Prizes, which you can explore when the 7.5 Devpost goes live.")}),a.createElement(z,{question:"How do I register?",answer:a.createElement("ol",null,a.createElement("li",null,"At 8 p.m. on Monday, November 2, a button will appear at the top of this site. Click it."),a.createElement("li",null,"You will be redirected to a page where you can click the appropriate form."),a.createElement("li",null,"Fill out the questions. Near the end, there will be a few questions where you can upload your forms.",a.createElement("ul",null,a.createElement("li",null,"In order to speed up the registration process, print out the"," ",a.createElement(r.b,{to:"".concat("/2020v2","/forms/field_trip.pdf"),target:"_blank",rel:"noopener noreferrer"},"field trip form")," ","and scan it beforehand."))))}),a.createElement(z,{question:"How are tickets decisions made?",small:!0,answer:a.createElement("span",null,"Tickets decisisons are made based on a variety of factors, including the registration time. Sign up quickly to increase the chance that you are given a HackTJ 7.5 ticket!")})),a.createElement("div",null),a.createElement("p",{className:"large bottom-question"},"If your question is not answered here, just ask us:"," ",a.createElement("a",{href:"mailto:hello@hacktj.org",target:"_blank",rel:"noopener noreferrer"},"hello@hacktj.org"),"."))))}},27:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var l=o.apply(null,a);l&&e.push(l)}else if("object"===r)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},28:function(e,t,n){"use strict";n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return i})),n.d(t,"i",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"k",(function(){return d})),n.d(t,"j",(function(){return f})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return h})),n.d(t,"f",(function(){return w})),n.d(t,"e",(function(){return E}));var a,o=n(4),r=n.n(o);function l(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function i(e,t){var n={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(n[a]=e[a])})),n}function s(e,t){for(var n,a=Array.isArray(t)?t:[t],o=a.length,r={};o>0;)r[n=a[o-=1]]=e[n];return r}var c="object"===typeof window&&window.Element||function(){};function u(e,t,n){if(!(e[t]instanceof c))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var d=r.a.oneOfType([r.a.string,r.a.func,u,r.a.shape({current:r.a.any})]),f=r.a.oneOfType([r.a.func,r.a.string,r.a.shape({$$typeof:r.a.symbol,render:r.a.func}),r.a.arrayOf(r.a.oneOfType([r.a.func,r.a.string,r.a.shape({$$typeof:r.a.symbol,render:r.a.func})]))]),p={Fade:150,Collapse:350,Modal:300,Carousel:600},m=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],h=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],b=!("undefined"===typeof window||!window.document||!window.document.createElement);function g(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function w(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function y(e){if(function(e){return!(!e||"object"!==typeof e)&&"current"in e}(e))return e.current;if(function(e){if(!w(e))return!1;var t=g(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}(e))return e();if("string"===typeof e&&b){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function v(e){return null!==e&&(Array.isArray(e)||b&&"number"===typeof e.length)}function E(e,t){var n=y(e);return t?v(n)?n:null===n?[]:[n]:v(n)?n[0]:n}},29:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return a}))},30:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},31:function(e,t,n){"use strict";function a(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",(function(){return a}))},65:function(e,t,n){},66:function(e,t,n){}}]);
//# sourceMappingURL=9.94a4190e.chunk.js.map