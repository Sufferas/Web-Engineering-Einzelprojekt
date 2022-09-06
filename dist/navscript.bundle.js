(()=>{"use strict";var n,e,r,t,a,o,i,s,c,l,d,p,u,f,m={562:(n,e,r)=>{r.d(e,{Z:()=>s});var t=r(81),a=r.n(t),o=r(645),i=r.n(o)()(a());i.push([n.id,"nav{\r\n  background: #000;\r\n  display: flex;\r\n  justify-content:space-around;\r\n  align-items: center;\r\n  color: #fff;\r\n}\r\n.nav-links {\r\n    display: flex;\r\n    justify-content:space-around;\r\n    width: 50%;\r\n    text-transform: uppercase;\r\n}\r\n.nav-links a{\r\n  display: block;\r\n   text-transform: uppercase;\r\n   text-decoration: none;\r\n   color: #fff;\r\n  border-bottom:2px solid transparent;\r\n  transition:0.5s ease;\r\n  transform: translateX(0%);\r\n}\r\n.nav-links a:hover{\r\n  color:#38b8ff;\r\n  letter-spacing: 5px;\r\n}\r\n.burger{\r\n  display: none;\r\n}\r\n.burger div{\r\n  width: 25px;\r\n  height: 3px;\r\n  background: #fff;\r\n  margin: 5px;\r\n  transition:all 0.5s ease;\r\n}\r\n@media only screen and (max-width: 760px){\r\n   nav{\r\n    justify-content: space-between;\r\n    padding: 0 5vw;\r\n  }\r\n  .nav-links{\r\n    position: absolute;\r\n    right: 0;\r\n    top:8vh;\r\n    min-height:92vh;\r\n    background: #333;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 50%;\r\n    margin: 0;\r\n    padding: 0;\r\n    transform: translateX(100%);\r\n    transition:All 0.5s ease-in;\r\n  }\r\n  .nav-links a{\r\n    opacity: 0;\r\n\r\n  }\r\n  .burger{\r\n    display: block;\r\n  }\r\n\r\n}\r\n@media only screen and (max-width: 640px){\r\n  nav{\r\n    justify-content: space-between;\r\n    padding: 0 5vw;\r\n  }\r\n}\r\n.nav-active{\r\n  transform: translateX(0);\r\n}\r\n@media only screen and (max-width: 460px){\r\n  .nav-links{\r\n    width: 100%;\r\n    transition:All 0.5s ease;\r\n  }\r\n}\r\n.nav-active{\r\n  transform: translateX(0);\r\n}\r\n@keyframes navLinkFade{\r\n  from{\r\n    opacity: 0;\r\n    transform: translateX(50px);\r\n  }\r\n  to{\r\n    opacity: 1;\r\n    transform: translateX(0);\r\n  }\r\n}\r\n.toggle .line1{\r\n   transform: rotate(-45deg) translate(-5px,6px );\r\n}\r\n.toggle .line2{\r\n   opacity: 0;\r\n}\r\n.toggle .line3{\r\n   transform: rotate(45deg) translate(-5px,-6px );\r\n}",""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);t&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var o={},i=[],s=0;s<n.length;s++){var c=n[s],l=t.base?c[0]+t.base:c[0],d=o[l]||0,p="".concat(l," ").concat(d);o[l]=d+1;var u=r(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=a(f,t);t.byIndex=s,e.splice(s,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function a(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,a){var o=t(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=r(o[i]);e[s].references--}for(var c=t(n,a),l=0;l<o.length;l++){var d=r(o[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,a&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},v={};function h(n){var e=v[n];if(void 0!==e)return e.exports;var r=v[n]={id:n,exports:{}};return m[n](r,r.exports,h),r.exports}h.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return h.d(e,{a:e}),e},h.d=(n,e)=>{for(var r in e)h.o(e,r)&&!h.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},h.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),h.nc=void 0,n=h(379),e=h.n(n),r=h(795),t=h.n(r),a=h(569),o=h.n(a),i=h(565),s=h.n(i),c=h(216),l=h.n(c),d=h(589),p=h.n(d),u=h(562),(f={}).styleTagTransform=p(),f.setAttributes=s(),f.insert=o().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=l(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,document.body.appendChild(function(){const n=document.createElement("nav"),e=document.createElement("logo"),r=document.createElement("h4");e.classList.add("logo"),n.appendChild(e),r.innerText="Navbar",e.appendChild(r);const t=document.createElement("ul");t.classList.add("nav-links");const a=document.createElement("a"),o=document.createElement("a"),i=document.createElement("a");a.href="index.html",a.innerText="Home",o.href="about.html",o.innerText="About",i.href="contents.html",i.innerText="Contents",n.appendChild(t),t.appendChild(a),t.appendChild(o),t.appendChild(i);const s=document.createElement("div");s.classList.add("burger");const c=document.createElement("div");c.classList.add("line1");const l=document.createElement("div");l.classList.add("line2");const d=document.createElement("div");return d.classList.add("line3"),n.appendChild(s),s.appendChild(c),s.appendChild(l),s.appendChild(d),n}()),(()=>{const n=document.querySelector(".burger"),e=document.querySelector(".nav-links"),r=document.querySelectorAll(".nav-links a");n.addEventListener("click",(()=>{e.classList.toggle("nav-active"),r.forEach(((n,e)=>{n.style.animation?n.style.animation="":n.style.animation=`navLinkFade 0.5s ease forwards ${e/7+.5}s `})),n.classList.toggle("toggle")}))})()})();