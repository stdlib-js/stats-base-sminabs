// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e){"use strict";var r,t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,o=Object.prototype,a=o.toString,i=o.__defineGetter__,u=o.__defineSetter__,l=o.__lookupGetter__,f=o.__lookupSetter__;function c(e){return e!=e}function _(e){return Math.abs(e)}function p(e,r,t){var n,o,a,i;if(e<=0)return NaN;if(1===e||0===t)return _(r[0]);for(n=_(r[o=t<0?(1-e)*t:0]),i=1;i<e;i++){if(c(a=_(r[o+=t])))return a;a<n&&(n=a)}return n}function d(e,r,t,n){var o,a,i,u;if(e<=0)return NaN;if(1===e||0===t)return _(r[n]);for(o=_(r[a=n]),u=1;u<e;u++){if(c(i=_(r[a+=t])))return i;i<o&&(o=i)}return o}r=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,r,t){var n,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(l.call(e,r)||f.call(e,r)?(n=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,r,t.get),p&&u&&u.call(e,r,t.set),e},r(p,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:d}),e.default=p,e.ndarray=d,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).sminabs={});
//# sourceMappingURL=browser.js.map
