(()=>{"use strict";var n,e,t,a,r,o,i,s,c,l,d,p,u,f,m={562:(n,e,t)=>{t.d(e,{Z:()=>s});var a=t(81),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([n.id,"nav{\n  background: #000;\n  display: flex;\n  justify-content:space-around;\n  align-items: center;\n  color: #fff;\n}\n.nav-links {\n    display: flex;\n    justify-content:space-around;\n    width: 50%;\n    text-transform: uppercase;\n}\n.nav-links a{\n  display: block;\n   text-transform: uppercase;\n   text-decoration: none;\n   color: #fff;\n  border-bottom:2px solid transparent;\n  transition:0.5s ease;\n  transform: translateX(0%);\n}\n.nav-links a:hover{\n  color:#38b8ff;\n  letter-spacing: 5px;\n}\n.burger{\n  display: none;\n}\n.burger div{\n  width: 25px;\n  height: 3px;\n  background: #fff;\n  margin: 5px;\n  transition:all 0.5s ease;\n}\n@media only screen and (max-width: 760px){\n   nav{\n    justify-content: space-between;\n    padding: 0 5vw;\n  }\n  .nav-links{\n    position: absolute;\n    right: 0;\n    top:8vh;\n    min-height:92vh;\n    background: #333;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 50%;\n    margin: 0;\n    padding: 0;\n    transform: translateX(100%);\n    transition:All 0.5s ease-in;\n  }\n  .nav-links a{\n    opacity: 0;\n\n  }\n  .burger{\n    display: block;\n  }\n\n}\n@media only screen and (max-width: 640px){\n  nav{\n    justify-content: space-between;\n    padding: 0 5vw;\n  }\n}\n.nav-active{\n  transform: translateX(0);\n}\n@media only screen and (max-width: 460px){\n  .nav-links{\n    width: 100%;\n    transition:All 0.5s ease;\n  }\n}\n.nav-active{\n  transform: translateX(0);\n}\n@keyframes navLinkFade{\n  from{\n    opacity: 0;\n    transform: translateX(50px);\n  }\n  to{\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.toggle .line1{\n   transform: rotate(-45deg) translate(-5px,6px );\n}\n.toggle .line2{\n   opacity: 0;\n}\n.toggle .line3{\n   transform: rotate(45deg) translate(-5px,-6px );\n}",""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);a&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var o={},i=[],s=0;s<n.length;s++){var c=n[s],l=a.base?c[0]+a.base:c[0],d=o[l]||0,p="".concat(l," ").concat(d);o[l]=d+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=r(f,a);a.byIndex=s,e.splice(s,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=a(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=t(o[i]);e[s].references--}for(var c=a(n,r),l=0;l<o.length;l++){var d=t(o[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},v={};function h(n){var e=v[n];if(void 0!==e)return e.exports;var t=v[n]={id:n,exports:{}};return m[n](t,t.exports,h),t.exports}h.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return h.d(e,{a:e}),e},h.d=(n,e)=>{for(var t in e)h.o(e,t)&&!h.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},h.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),h.nc=void 0,n=h(379),e=h.n(n),t=h(795),a=h.n(t),r=h(569),o=h.n(r),i=h(565),s=h.n(i),c=h(216),l=h.n(c),d=h(589),p=h.n(d),u=h(562),(f={}).styleTagTransform=p(),f.setAttributes=s(),f.insert=o().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,document.body.appendChild(function(){const n=document.createElement("nav"),e=document.createElement("logo"),t=document.createElement("h4");e.classList.add("logo"),n.appendChild(e),t.innerText="Navbar",e.appendChild(t);const a=document.createElement("ul");a.classList.add("nav-links");const r=document.createElement("a"),o=document.createElement("a"),i=document.createElement("a");r.href="index.html",r.innerText="Home",o.href="about.html",o.innerText="About",i.href="contents.html",i.innerText="Contents",n.appendChild(a),a.appendChild(r),a.appendChild(o),a.appendChild(i);const s=document.createElement("div");s.classList.add("burger");const c=document.createElement("div");c.classList.add("line1");const l=document.createElement("div");l.classList.add("line2");const d=document.createElement("div");return d.classList.add("line3"),n.appendChild(s),s.appendChild(c),s.appendChild(l),s.appendChild(d),n}()),(()=>{const n=document.querySelector(".burger"),e=document.querySelector(".nav-links"),t=document.querySelectorAll(".nav-links a");n.addEventListener("click",(()=>{e.classList.toggle("nav-active"),t.forEach(((n,e)=>{n.style.animation?n.style.animation="":n.style.animation=`navLinkFade 0.5s ease forwards ${e/7+.5}s `})),n.classList.toggle("toggle")}))})()})();