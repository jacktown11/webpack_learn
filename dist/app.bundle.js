!function(e){function n(e){var n=H[e];if(!n)return a;var t=function(r){return n.hot.active?(H[r]?H[r].parents.indexOf(e)<0&&H[r].parents.push(e):(b=[e],p=r),n.children.indexOf(r)<0&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),b=[]),a(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return a[e]},set:function(n){a[e]=n}}};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&"e"!==d&&Object.defineProperty(t,d,o(d));return t.e=function(e){function n(){_--,"prepare"===g&&(D[e]||c(e),0===_&&0===j&&i())}return"ready"===g&&r("prepare"),_++,a.e(e).then(n,function(e){throw n(),e})},t}function r(e){g=e;for(var n=0;n<O.length;n++)O[n].call(null,e)}function t(e){return+e+""===e?+e:e}function o(e){if("idle"!==g)throw new Error("check() is only allowed in idle status");return h=e,r("check"),function(e){return e=e||1e4,new Promise(function(n,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,o=a.p+""+y+".hot-update.json";t.open("GET",o,!0),t.timeout=e,t.send(null)}catch(e){return r(e)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===t.status)n();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(t.responseText)}catch(e){return void r(e)}n(e)}}})}(v).then(function(e){if(!e)return r("idle"),null;E={},D={},x=e.c,f=e.h,r("prepare");var n=new Promise(function(e,n){l={resolve:e,reject:n}});u={};return c(0),"prepare"===g&&0===_&&0===j&&i(),n})}function c(e){x[e]?(E[e]=!0,j++,function(e){var n=document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript",r.charset="utf-8",r.src=a.p+""+e+"."+y+".hot-update.js",n.appendChild(r)}(e)):D[e]=!0}function i(){r("ready");var e=l;if(l=null,e)if(h)Promise.resolve().then(function(){return d(h)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var o in u)Object.prototype.hasOwnProperty.call(u,o)&&n.push(t(o));e.resolve(n)}}function d(n){function o(e){for(var n=[e],r={},t=n.slice().map(function(e){return{chain:[e],id:e}});t.length>0;){var o=t.pop(),i=o.id,d=o.chain;if((p=H[i])&&!p.hot._selfAccepted){if(p.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:i};if(p.hot._main)return{type:"unaccepted",chain:d,moduleId:i};for(var a=0;a<p.parents.length;a++){var s=p.parents[a],l=H[s];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:d.concat([s]),moduleId:i,parentId:s};n.indexOf(s)>=0||(l.hot._acceptedDependencies[i]?(r[s]||(r[s]=[]),c(r[s],[i])):(delete r[s],n.push(s),t.push({chain:d.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function c(e,n){for(var r=0;r<n.length;r++){var t=n[r];e.indexOf(t)<0&&e.push(t)}}if("ready"!==g)throw new Error("apply() is only allowed in ready status");n=n||{};var i,d,s,p,l,h={},v=[],w={},O=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var j in u)if(Object.prototype.hasOwnProperty.call(u,j)){l=t(j);var _,D=!1,E=!1,P=!1,I="";switch((_=u[j]?o(l):{type:"disposed",moduleId:j}).chain&&(I="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":n.onDeclined&&n.onDeclined(_),n.ignoreDeclined||(D=new Error("Aborted because of self decline: "+_.moduleId+I));break;case"declined":n.onDeclined&&n.onDeclined(_),n.ignoreDeclined||(D=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+I));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(_),n.ignoreUnaccepted||(D=new Error("Aborted because "+l+" is not accepted"+I));break;case"accepted":n.onAccepted&&n.onAccepted(_),E=!0;break;case"disposed":n.onDisposed&&n.onDisposed(_),P=!0;break;default:throw new Error("Unexception type "+_.type)}if(D)return r("abort"),Promise.reject(D);if(E){w[l]=u[l],c(v,_.outdatedModules);for(l in _.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,l)&&(h[l]||(h[l]=[]),c(h[l],_.outdatedDependencies[l]))}P&&(c(v,[_.moduleId]),w[l]=O)}var k=[];for(d=0;d<v.length;d++)l=v[d],H[l]&&H[l].hot._selfAccepted&&k.push({module:l,errorHandler:H[l].hot._selfAccepted});r("dispose"),Object.keys(x).forEach(function(e){!1===x[e]&&function(e){delete installedChunks[e]}(e)});for(var M,A=v.slice();A.length>0;)if(l=A.pop(),p=H[l]){var q={},U=p.hot._disposeHandlers;for(s=0;s<U.length;s++)(i=U[s])(q);for(m[l]=q,p.hot.active=!1,delete H[l],delete h[l],s=0;s<p.children.length;s++){var C=H[p.children[s]];C&&((M=C.parents.indexOf(l))>=0&&C.parents.splice(M,1))}}var R,S;for(l in h)if(Object.prototype.hasOwnProperty.call(h,l)&&(p=H[l]))for(S=h[l],s=0;s<S.length;s++)R=S[s],(M=p.children.indexOf(R))>=0&&p.children.splice(M,1);r("apply"),y=f;for(l in w)Object.prototype.hasOwnProperty.call(w,l)&&(e[l]=w[l]);var T=null;for(l in h)if(Object.prototype.hasOwnProperty.call(h,l)&&(p=H[l])){S=h[l];var L=[];for(d=0;d<S.length;d++)if(R=S[d],i=p.hot._acceptedDependencies[R]){if(L.indexOf(i)>=0)continue;L.push(i)}for(d=0;d<L.length;d++){i=L[d];try{i(S)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:l,dependencyId:S[d],error:e}),n.ignoreErrored||T||(T=e)}}}for(d=0;d<k.length;d++){var N=k[d];l=N.module,b=[l];try{a(l)}catch(e){if("function"==typeof N.errorHandler)try{N.errorHandler(e)}catch(r){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:r,orginalError:e,originalError:e}),n.ignoreErrored||T||(T=r),T||(T=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:l,error:e}),n.ignoreErrored||T||(T=e)}}return T?(r("fail"),Promise.reject(T)):(r("idle"),new Promise(function(e){e(v)}))}function a(r){if(H[r])return H[r].exports;var t=H[r]={i:r,l:!1,exports:{},hot:function(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:p!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:o,apply:d,status:function(e){if(!e)return g;O.push(e)},addStatusHandler:function(e){O.push(e)},removeStatusHandler:function(e){var n=O.indexOf(e);n>=0&&O.splice(n,1)},data:m[e]};return p=void 0,n}(r),parents:(w=b,b=[],w),children:[]};return e[r].call(t.exports,t,t.exports,n(r)),t.l=!0,t.exports}var s=this.webpackHotUpdate;this.webpackHotUpdate=function(e,n){!function(e,n){if(x[e]&&E[e]){E[e]=!1;for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(u[r]=n[r]);0==--j&&0===_&&i()}}(e,n),s&&s(e,n)};var p,l,u,f,h=!0,y="23b1ac522e7a6a0732da",v=1e4,m={},b=[],w=[],O=[],g="idle",j=0,_=0,D={},E={},x={},H={};a.m=e,a.c=H,a.d=function(e,n,r){a.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="",a.h=function(){return y},n("./src/index.js")(a.s="./src/index.js")}({"./src/index.js":function(e,n,r){"use strict";function t(){var e=document.createElement("pre");return e.innerHTML=["Hello webpack!","5 cubed is equal to "+Object(o.a)(5)].join("\n\n"),e}Object.defineProperty(n,"__esModule",{value:!0});var o=r("./src/math.js"),c=t();document.body.appendChild(c),e.hot.accept("./src/print.js",function(){console.log("Accepting the updated printMe module!"),printMe(),document.body.removeChild(c),c=t(),document.body.appendChild(c)})},"./src/math.js":function(e,n,r){"use strict";n.a=function(e){return e*e*e}}});