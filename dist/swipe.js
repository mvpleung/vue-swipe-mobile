!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.swipe=e():t.swipe=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.SwipeItem=e.Swipe=void 0;var r=n(60),o=i(r),u=n(59),a=i(u);e.Swipe=o.default,e.SwipeItem=a.default,e.default={Swipe:o.default,SwipeItem:a.default}},function(t,e,n){var i=n(22)("wks"),r=n(26),o=n(2).Symbol,u="function"==typeof o,a=t.exports=function(t){return i[t]||(i[t]=u&&o[t]||(u?o:r)("Symbol."+t))};a.store=i},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var i=n(10);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){t.exports=!n(20)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var i=n(7),r=n(12);t.exports=n(4)?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var i=n(3),r=n(38),o=n(54),u=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(i(t),e=o(e,!0),i(n),r)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){var n=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports={}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var i=n(22)("keys"),r=n(26);t.exports=function(t){return i[t]||(i[t]=r(t))}},function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var i=n(33);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var i=n(10),r=n(2).document,o=i(r)&&i(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var i=n(2),r=n(8),o=n(16),u=n(6),a="prototype",s=function(t,e,n){var c,f,l,h=t&s.F,p=t&s.G,d=t&s.S,v=t&s.P,m=t&s.B,y=t&s.W,g=p?r:r[e]||(r[e]={}),w=g[a],x=p?i:d?i[e]:(i[e]||{})[a];p&&(n=e);for(c in n)f=!h&&x&&void 0!==x[c],f&&c in g||(l=f?x[c]:n[c],g[c]=p&&"function"!=typeof x[c]?n[c]:m&&f?o(l,i):y&&x[c]==l?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e[a]=t[a],e}(l):v&&"function"==typeof l?o(Function.call,l):l,v&&((g.virtual||(g.virtual={}))[c]=l,t&s.R&&w&&!w[c]&&u(w,c,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var i=n(7).f,r=n(5),o=n(1)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,o)&&i(t,o,{configurable:!0,value:e})}},function(t,e,n){var i=n(2),r="__core-js_shared__",o=i[r]||(i[r]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e,n){var i=n(39),r=n(9);t.exports=function(t){return i(r(t))}},function(t,e,n){var i=n(14),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},function(t,e,n){var i=n(9);t.exports=function(t){return Object(i(t))}},function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},function(t,e){t.exports=function(t,e,n,i){var r,o=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(r=t,o=t.default);var a="function"==typeof o?o.options:o;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),i){var s=a.computed||(a.computed={});Object.keys(i).forEach(function(t){var e=i[t];s[t]=function(){return e}})}return{esModule:r,exports:o,options:a}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swipe-item",mounted:function(){this.$parent.init()}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(31),o=i(r);e.default={name:"swipe",data:function(){return{hasMounted:!1,insideValue:this.value,pages:[],width:0,length:0,inited:!1,startx:0,moveDistance:0,touchStartTime:0,moving:!1,starty:0,firstMove:!0,horizontalMove:!0,copyNum:2,autoplayTimer:null}},props:{value:{type:Number,default:0},pagination:{type:Boolean,default:!0},autoplayTime:{type:Number,default:0},loop:{type:Boolean,default:!0},minMoveDistance:{type:String,default:"20%"},quickTouchTime:{type:Number,default:150},speed:{type:Number,default:300}},computed:{c_minMoveDistance:function(t){var e=t,n="";/px$/.test(t)?n="pixel":/%$/.test(t)?n="percent":(e="20%",n="percent");var i={pixel:function(){parseInt(e,10);return e+"px"},percent:function(){var t=parseInt(e,10)/100;return this.width*t}};return i[n].apply(this)},c_translatex:function(){return-this.width*this.insideValue},c_isEnd:function(){return this.insideValue===this.length-1},c_isBegin:function(){return 0===this.insideValue}},watch:{insideValue:function(t){t!==this.value&&this.$emit("input",t),this.valueChangeHandler(t)},value:function(t){this.insideValue=t},autoplayTime:function(){this.autoChange()}},mounted:function(){this.hasMounted=!0,this.init(),this.initOnce()},methods:{reset:function(){this.init()},init:function(){this.hasMounted&&(this.initDatas(),this.$refs.wrapper.style.width=this.width+"px",this.clearCopies(),this.addCopies(),this.autoplayTime>0&&this.autoChange())},initOnce:function(){this.setTranslate(this.c_translatex)},initDatas:function(){var t=getComputedStyle(this.$el,!1).width;this.width=parseInt(t,10),this.pages=this.$slots.default.filter(function(t){return t.tag&&t.elm.classList.contains("c-swipe-item")}).map(function(t){return t.elm}),this.length=this.pages.length},clearCopies:function(){var t=this,e=this.$refs.wrapper.querySelectorAll(".c-swipe-item-copy");[].concat((0,o.default)(e)).forEach(function(e){t.$refs.wrapper.removeChild(e)},this),this.$refs.wrapper.style.marginLeft="0"},addCopies:function(){var t=this,e=[],n=[];for(this.pages.forEach(function(i,r){if(r<2){var o=i.cloneNode(!0);o.classList.add("c-swipe-item-copy"),e.push(o)}if(r>t.pages.length-3){var u=i.cloneNode(!0);u.classList.add("c-swipe-item-copy"),n.push(u)}},this),this.copyNum=n.length;n.length;){var i=n.pop(),r=this.$refs.wrapper.querySelector(".c-swipe-item");this.$refs.wrapper.insertBefore(i,r)}for(;e.length;){var o=e.shift();this.$refs.wrapper.appendChild(o)}this.$refs.wrapper.style.marginLeft="-"+this.width*this.copyNum+"px"},handleTouchstart:function(t){this.length<=1||this.moving||(this.startx=t.touches[0].pageX,this.starty=t.touches[0].pageY,this.touchStartTime=(new Date).getTime(),this.autoChange&&this.autoChange(),this.firstMove=!0)},handleTouchmove:function(t){if(!(this.length<=1||this.moving)){if(this.moveDistance=t.touches[0].pageX-this.startx,this.firstMove){this.firstMove=!1;var e=t.touches[0].pageY-this.starty;this.horizontalMove=Math.abs(this.moveDistance)>=Math.abs(e)}if(this.horizontalMove){t.preventDefault();var n=this.c_translatex+this.moveDistance,i=n;i=this.handleTouchmove_loop(n),this.setTranslate(i)}}},handleTouchend:function(t){if(!(this.length<=1||this.moving)&&this.horizontalMove){var e=(new Date).getTime()-this.touchStartTime<this.quickTouchTime;this.loop?this.handleTouchend_loop(this.cartChange(this.moveDistance,e)):this.updateInsideValue(this.cartChange(this.moveDistance,e)),this.moveDistance=0}},handleTouchmove_loop:function(t){if(this.loop)return t;var e=0,n=-this.width*(this.length-1);return t>e?e:t<n?n:t},handleTouchend_loop:function(t){var e=this;if(this.loop){var n=this.insideValue+t;return 0===this.insideValue&&n<this.insideValue?(this.setTranslate(-this.width*this.length+this.moveDistance),void setTimeout(function(){e.updateInsideValue(t)},40)):this.insideValue===this.length-1&&n>this.insideValue?(this.setTranslate(this.width+this.moveDistance),void setTimeout(function(){e.updateInsideValue(t)},40)):void this.updateInsideValue(t)}},updateInsideValue:function(t){var e=this;if(0===t)return void this.valueChangeHandler(t);var n=this.insideValue+t,i=this.chain(this.updateInsideValue_loop,this.updateInsideValue_normal,function(t){e.insideValue=t});i(n)},updateInsideValue_loop:function(t){return!!this.loop&&(t<0?(this.insideValue=this.length-1,"done"):t>this.length-1&&(this.insideValue=0,"done"))},updateInsideValue_normal:function(t){return t<0?(this.insideValue=0,this.valueChangeHandler(0),"done"):t>this.length-1&&(this.insideValue=this.length-1,this.valueChangeHandler(this.length-1),"done")},cartChange:function(t,e){var n=Math.abs(t),i=Math.abs(this.c_minMoveDistance),r={normal:function(){return n<i?0:t>0?-1:t<0?1:0},quick:function(){return n<10?0:t>0?-1:t<0?1:0}},o="normal";switch(!0){case e===!0:o="quick";break;default:o="normal"}return r[o].apply(this)},valueChangeHandler:function(t){this.duration(),this.setTranslate(this.c_translatex)},autoChange:function(){var t=this;clearTimeout(this.autoplayTimer);var e=function e(){"number"!=typeof t.autoplayTime||t.autoplayTime<=0||t.length<=1||(t.autoplayTimer=setTimeout(function(){t.autoChangeHandler(),e()},t.autoplayTime))};e()},autoChangeHandler:function(){var t=this;this.c_isEnd&&this.setTranslate(this.width),setTimeout(function(){t.insideValue=t.insideValue<t.length-1?t.insideValue+1:0},40)},setTranslate:function(t){function e(t){this.$refs.wrapper.style.transform="translate3d("+t+"px, 0, 0)",this.$refs.wrapper.style.transform="webkikTranslate3d("+t+"px, 0, 0)"}function n(t,e){this.$refs.wrapper.style.webkitTransform="translate3d("+e+"px, 0, 0)",this.$refs.wrapper.style.webkitTransform="webkitTranslate3d("+e+"px, 0, 0)"}"transform"in document.documentElement.style?(this.setTranslate=e,this.setTranslate(t)):(this.setTranslate=n,this.setTranslate(t))},duration:function(){var t=this;this.moving=!0;var e=this.$refs.wrapper,n=this.speed;e.style.transitionDuration=n+"ms",e.style.webkitTransitionDuration=n+"ms",e.style.transitionTimingFunction="ease-out",e.style.webkitTransitionTimingFunction="ease-out",clearTimeout(this.durationTimer),this.durationTimer=setTimeout(function(){e.style.transitionDuration="",e.style.webkitTransitionDuration="",t.moving=!1},n)},chain:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(){for(var t=0;t<e.length;t+=1){var n=e[t].apply(e,arguments);if("done"===n)break}}}}}},function(t,e,n){t.exports={default:n(32),__esModule:!0}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=n(30),o=i(r);e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,o.default)(t)}},function(t,e,n){n(57),n(56),t.exports=n(8).Array.from},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var i=n(23),r=n(24),o=n(53);t.exports=function(t){return function(e,n,u){var a,s=i(e),c=r(s.length),f=o(u,c);if(t&&n!=n){for(;c>f;)if(a=s[f++],a!=a)return!0}else for(;c>f;f++)if((t||f in s)&&s[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var i=n(15),r=n(1)("toStringTag"),o="Arguments"==i(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),r))?n:o?i(e):"Object"==(a=i(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,n){"use strict";var i=n(7),r=n(12);t.exports=function(t,e,n){e in t?i.f(t,e,r(0,n)):t[e]=n}},function(t,e,n){var i=n(2).document;t.exports=i&&i.documentElement},function(t,e,n){t.exports=!n(4)&&!n(20)(function(){return 7!=Object.defineProperty(n(17)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var i=n(15);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},function(t,e,n){var i=n(11),r=n(1)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[r]===t)}},function(t,e,n){var i=n(3);t.exports=function(t,e,n,r){try{return r?e(i(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&i(o.call(t)),e}}},function(t,e,n){"use strict";var i=n(46),r=n(12),o=n(21),u={};n(6)(u,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=i(u,{next:r(1,n)}),o(t,e+" Iterator")}},function(t,e,n){"use strict";var i=n(45),r=n(19),o=n(51),u=n(6),a=n(5),s=n(11),c=n(42),f=n(21),l=n(48),h=n(1)("iterator"),p=!([].keys&&"next"in[].keys()),d="@@iterator",v="keys",m="values",y=function(){return this};t.exports=function(t,e,n,g,w,x,T){c(n,e,g);var _,b,M,O=function(t){if(!p&&t in V)return V[t];switch(t){case v:return function(){return new n(this,t)};case m:return function(){return new n(this,t)}}return function(){return new n(this,t)}},C=e+" Iterator",S=w==m,j=!1,V=t.prototype,I=V[h]||V[d]||w&&V[w],k=!p&&I||O(w),D=w?S?O("entries"):k:void 0,E="Array"==e?V.entries||I:I;if(E&&(M=l(E.call(new t)),M!==Object.prototype&&M.next&&(f(M,C,!0),i||a(M,h)||u(M,h,y))),S&&I&&I.name!==m&&(j=!0,k=function(){return I.call(this)}),i&&!T||!p&&!j&&V[h]||u(V,h,k),s[e]=k,s[C]=y,w)if(_={values:S?k:O(m),keys:x?k:O(v),entries:D},T)for(b in _)b in V||o(V,b,_[b]);else r(r.P+r.F*(p||j),e,_);return _}},function(t,e,n){var i=n(1)("iterator"),r=!1;try{var o=[7][i]();o.return=function(){r=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!r)return!1;var n=!1;try{var o=[7],u=o[i]();u.next=function(){return{done:n=!0}},o[i]=function(){return u},t(o)}catch(t){}return n}},function(t,e){t.exports=!0},function(t,e,n){var i=n(3),r=n(47),o=n(18),u=n(13)("IE_PROTO"),a=function(){},s="prototype",c=function(){var t,e=n(17)("iframe"),i=o.length,r="<",u=">";for(e.style.display="none",n(37).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(r+"script"+u+"document.F=Object"+r+"/script"+u),t.close(),c=t.F;i--;)delete c[s][o[i]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(a[s]=i(t),n=new a,a[s]=null,n[u]=t):n=c(),void 0===e?n:r(n,e)}},function(t,e,n){var i=n(7),r=n(3),o=n(50);t.exports=n(4)?Object.defineProperties:function(t,e){r(t);for(var n,u=o(e),a=u.length,s=0;a>s;)i.f(t,n=u[s++],e[n]);return t}},function(t,e,n){var i=n(5),r=n(25),o=n(13)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),i(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var i=n(5),r=n(23),o=n(34)(!1),u=n(13)("IE_PROTO");t.exports=function(t,e){var n,a=r(t),s=0,c=[];for(n in a)n!=u&&i(a,n)&&c.push(n);for(;e.length>s;)i(a,n=e[s++])&&(~o(c,n)||c.push(n));return c}},function(t,e,n){var i=n(49),r=n(18);t.exports=Object.keys||function(t){return i(t,r)}},function(t,e,n){t.exports=n(6)},function(t,e,n){var i=n(14),r=n(9);t.exports=function(t){return function(e,n){var o,u,a=String(r(e)),s=i(n),c=a.length;return s<0||s>=c?t?"":void 0:(o=a.charCodeAt(s),o<55296||o>56319||s+1===c||(u=a.charCodeAt(s+1))<56320||u>57343?t?a.charAt(s):o:t?a.slice(s,s+2):(o-55296<<10)+(u-56320)+65536)}}},function(t,e,n){var i=n(14),r=Math.max,o=Math.min;t.exports=function(t,e){return t=i(t),t<0?r(t+e,0):o(t,e)}},function(t,e,n){var i=n(10);t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var i=n(35),r=n(1)("iterator"),o=n(11);t.exports=n(8).getIteratorMethod=function(t){if(void 0!=t)return t[r]||t["@@iterator"]||o[i(t)]}},function(t,e,n){"use strict";var i=n(16),r=n(19),o=n(25),u=n(41),a=n(40),s=n(24),c=n(36),f=n(55);r(r.S+r.F*!n(44)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,r,l,h=o(t),p="function"==typeof this?this:Array,d=arguments.length,v=d>1?arguments[1]:void 0,m=void 0!==v,y=0,g=f(h);if(m&&(v=i(v,d>2?arguments[2]:void 0,2)),void 0==g||p==Array&&a(g))for(e=s(h.length),n=new p(e);e>y;y++)c(n,y,m?v(h[y],y):h[y]);else for(l=g.call(h),n=new p;!(r=l.next()).done;y++)c(n,y,m?u(l,v,[r.value,y],!0):r.value);return n.length=y,n}})},function(t,e,n){"use strict";var i=n(52)(!0);n(43)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=i(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e){},function(t,e,n){var i=n(27)(n(28),n(62),null,null);t.exports=i.exports},function(t,e,n){n(58);var i=n(27)(n(29),n(61),null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-swipe",on:{touchstart:t.handleTouchstart,touchmove:t.handleTouchmove,touchend:t.handleTouchend,touchcancel:t.handleTouchend}},[n("div",{ref:"wrapper",staticClass:"c-swipe-wrapper"},[t._t("default")],2),t._v(" "),t.pagination?n("div",{staticClass:"c-swipe-pagination"},[n("div",{staticClass:"c-swipe-pagination-bar"},t._l(t.length,function(e){return n("i",{key:e,class:["c-swipe-pagination-item",e-1===t.insideValue?"active":""]})}))]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-swipe-item"},[t._t("default")],2)},staticRenderFns:[]}}])});