"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[2956],{21209:(n,r,e)=>{e.d(r,{Z:()=>a});var o=e(60994),t=e.n(o),i=e(93476),c=e.n(i)()(t());c.push([n.id,"/* Based on the theme at http://bonsaiden.github.com/JavaScript-Garden */\n\n/*\x3c!--activeline--\x3e*/\n.cm-s-midnight .CodeMirror-activeline-background { background: #253540; }\n\n.cm-s-midnight.CodeMirror {\n    background: #0F192A;\n    color: #D1EDFF;\n}\n\n.cm-s-midnight div.CodeMirror-selected { background: #314D67; }\n.cm-s-midnight .CodeMirror-line::selection, .cm-s-midnight .CodeMirror-line > span::selection, .cm-s-midnight .CodeMirror-line > span > span::selection { background: rgba(49, 77, 103, .99); }\n.cm-s-midnight .CodeMirror-line::-moz-selection, .cm-s-midnight .CodeMirror-line > span::-moz-selection, .cm-s-midnight .CodeMirror-line > span > span::-moz-selection { background: rgba(49, 77, 103, .99); }\n.cm-s-midnight .CodeMirror-gutters { background: #0F192A; border-right: 1px solid; }\n.cm-s-midnight .CodeMirror-guttermarker { color: white; }\n.cm-s-midnight .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-midnight .CodeMirror-linenumber { color: #D0D0D0; }\n.cm-s-midnight .CodeMirror-cursor { border-left: 1px solid #F8F8F0; }\n\n.cm-s-midnight span.cm-comment { color: #428BDD; }\n.cm-s-midnight span.cm-atom { color: #AE81FF; }\n.cm-s-midnight span.cm-number { color: #D1EDFF; }\n\n.cm-s-midnight span.cm-property, .cm-s-midnight span.cm-attribute { color: #A6E22E; }\n.cm-s-midnight span.cm-keyword { color: #E83737; }\n.cm-s-midnight span.cm-string { color: #1DC116; }\n\n.cm-s-midnight span.cm-variable { color: #FFAA3E; }\n.cm-s-midnight span.cm-variable-2 { color: #FFAA3E; }\n.cm-s-midnight span.cm-def { color: #4DD; }\n.cm-s-midnight span.cm-bracket { color: #D1EDFF; }\n.cm-s-midnight span.cm-tag { color: #449; }\n.cm-s-midnight span.cm-link { color: #AE81FF; }\n.cm-s-midnight span.cm-error { background: #F92672; color: #F8F8F0; }\n\n.cm-s-midnight .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n","",{version:3,sources:["webpack://./../node_modules/codemirror/theme/midnight.css"],names:[],mappings:"AAAA,wEAAwE;;AAExE,oBAAoB;AACpB,mDAAmD,mBAAmB,EAAE;;AAExE;IACI,mBAAmB;IACnB,cAAc;AAClB;;AAEA,yCAAyC,mBAAmB,EAAE;AAC9D,0JAA0J,kCAAkC,EAAE;AAC9L,yKAAyK,kCAAkC,EAAE;AAC7M,qCAAqC,mBAAmB,EAAE,uBAAuB,EAAE;AACnF,0CAA0C,YAAY,EAAE;AACxD,iDAAiD,cAAc,EAAE;AACjE,wCAAwC,cAAc,EAAE;AACxD,oCAAoC,8BAA8B,EAAE;;AAEpE,iCAAiC,cAAc,EAAE;AACjD,8BAA8B,cAAc,EAAE;AAC9C,gCAAgC,cAAc,EAAE;;AAEhD,oEAAoE,cAAc,EAAE;AACpF,iCAAiC,cAAc,EAAE;AACjD,gCAAgC,cAAc,EAAE;;AAEhD,kCAAkC,cAAc,EAAE;AAClD,oCAAoC,cAAc,EAAE;AACpD,6BAA6B,WAAW,EAAE;AAC1C,iCAAiC,cAAc,EAAE;AACjD,6BAA6B,WAAW,EAAE;AAC1C,8BAA8B,cAAc,EAAE;AAC9C,+BAA+B,mBAAmB,EAAE,cAAc,EAAE;;AAEpE;EACE,0BAA0B;EAC1B,uBAAuB;AACzB",sourcesContent:["/* Based on the theme at http://bonsaiden.github.com/JavaScript-Garden */\n\n/*\x3c!--activeline--\x3e*/\n.cm-s-midnight .CodeMirror-activeline-background { background: #253540; }\n\n.cm-s-midnight.CodeMirror {\n    background: #0F192A;\n    color: #D1EDFF;\n}\n\n.cm-s-midnight div.CodeMirror-selected { background: #314D67; }\n.cm-s-midnight .CodeMirror-line::selection, .cm-s-midnight .CodeMirror-line > span::selection, .cm-s-midnight .CodeMirror-line > span > span::selection { background: rgba(49, 77, 103, .99); }\n.cm-s-midnight .CodeMirror-line::-moz-selection, .cm-s-midnight .CodeMirror-line > span::-moz-selection, .cm-s-midnight .CodeMirror-line > span > span::-moz-selection { background: rgba(49, 77, 103, .99); }\n.cm-s-midnight .CodeMirror-gutters { background: #0F192A; border-right: 1px solid; }\n.cm-s-midnight .CodeMirror-guttermarker { color: white; }\n.cm-s-midnight .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-midnight .CodeMirror-linenumber { color: #D0D0D0; }\n.cm-s-midnight .CodeMirror-cursor { border-left: 1px solid #F8F8F0; }\n\n.cm-s-midnight span.cm-comment { color: #428BDD; }\n.cm-s-midnight span.cm-atom { color: #AE81FF; }\n.cm-s-midnight span.cm-number { color: #D1EDFF; }\n\n.cm-s-midnight span.cm-property, .cm-s-midnight span.cm-attribute { color: #A6E22E; }\n.cm-s-midnight span.cm-keyword { color: #E83737; }\n.cm-s-midnight span.cm-string { color: #1DC116; }\n\n.cm-s-midnight span.cm-variable { color: #FFAA3E; }\n.cm-s-midnight span.cm-variable-2 { color: #FFAA3E; }\n.cm-s-midnight span.cm-def { color: #4DD; }\n.cm-s-midnight span.cm-bracket { color: #D1EDFF; }\n.cm-s-midnight span.cm-tag { color: #449; }\n.cm-s-midnight span.cm-link { color: #AE81FF; }\n.cm-s-midnight span.cm-error { background: #F92672; color: #F8F8F0; }\n\n.cm-s-midnight .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n"],sourceRoot:""}]);const a=c},93476:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,o){"string"==typeof n&&(n=[[null,n,""]]);var t={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(t[c]=!0)}for(var a=0;a<n.length;a++){var s=[].concat(n[a]);o&&t[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),r.push(s))}},r}},60994:n=>{function r(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,o=new Array(r);e<r;e++)o[e]=n[e];return o}n.exports=function(n){var e,o,t=(o=4,function(n){if(Array.isArray(n))return n}(e=n)||function(n,r){var e=n&&("undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"]);if(null!=e){var o,t,i=[],c=!0,a=!1;try{for(e=e.call(n);!(c=(o=e.next()).done)&&(i.push(o.value),!r||i.length!==r);c=!0);}catch(n){a=!0,t=n}finally{try{c||null==e.return||e.return()}finally{if(a)throw t}}return i}}(e,o)||function(n,e){if(n){if("string"==typeof n)return r(n,e);var o=Object.prototype.toString.call(n).slice(8,-1);return"Object"===o&&n.constructor&&(o=n.constructor.name),"Map"===o||"Set"===o?Array.from(n):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?r(n,e):void 0}}(e,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=t[1],c=t[3];if(!c)return i;if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),A="/*# ".concat(s," */"),m=c.sources.map((function(n){return"/*# sourceURL=".concat(c.sourceRoot||"").concat(n," */")}));return[i].concat(m).concat([A]).join("\n")}return[i].join("\n")}},92956:(n,r,e)=>{e.r(r),e.d(r,{default:()=>c});var o=e(1892),t=e.n(o),i=e(21209);t()(i.Z,{insert:"head",singleton:!1});const c=i.Z.locals||{}},1892:(n,r,e)=>{var o,t=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),i=[];function c(n){for(var r=-1,e=0;e<i.length;e++)if(i[e].identifier===n){r=e;break}return r}function a(n,r){for(var e={},o=[],t=0;t<n.length;t++){var a=n[t],s=r.base?a[0]+r.base:a[0],A=e[s]||0,m="".concat(s," ").concat(A);e[s]=A+1;var d=c(m),l={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(l)):i.push({identifier:m,updater:g(l,r),references:1}),o.push(m)}return o}function s(n){var r=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=e.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){r.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(r);else{var c=t(n.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(r)}return r}var A,m=(A=[],function(n,r){return A[n]=r,A.filter(Boolean).join("\n")});function d(n,r,e,o){var t=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=m(r,t);else{var i=document.createTextNode(t),c=n.childNodes;c[r]&&n.removeChild(c[r]),c.length?n.insertBefore(i,c[r]):n.appendChild(i)}}function l(n,r,e){var o=e.css,t=e.media,i=e.sourceMap;if(t?n.setAttribute("media",t):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var u=null,h=0;function g(n,r){var e,o,t;if(r.singleton){var i=h++;e=u||(u=s(r)),o=d.bind(null,e,i,!1),t=d.bind(null,e,i,!0)}else e=s(r),o=l.bind(null,e,r),t=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return o(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;o(n=r)}else t()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var e=a(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<e.length;o++){var t=c(e[o]);i[t].references--}for(var s=a(n,r),A=0;A<e.length;A++){var m=c(e[A]);0===i[m].references&&(i[m].updater(),i.splice(m,1))}e=s}}}}}]);
//# sourceMappingURL=2956.261f4fa29a5e8f5a2e63.js.map