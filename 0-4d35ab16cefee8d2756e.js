(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(e,t,n){"use strict";var r=n(8);t.__esModule=!0,t.withPrefix=h,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var i=r(n(154)),o=r(n(155)),a=r(n(7)),s=r(n(52)),u=r(n(53)),c=r(n(4)),l=r(n(0)),d=n(22),f=n(148);function h(e){return function(e){return e.replace(/\/+/g,"/")}("/hundredth_monkey/"+e)}var p={activeClassName:c.default.string,activeStyle:c.default.object},v=function(e){function t(t){var n;n=e.call(this,t)||this,(0,u.default)((0,s.default)((0,s.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var r=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(r=!0),n.state={IOSupported:r},n.handleRef=n.handleRef.bind((0,s.default)((0,s.default)(n))),n}(0,a.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,r,i=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,f.parsePath)(i.props.to).pathname)},(r=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t),r.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,r=t.getProps,a=void 0===r?this.defaultGetProps:r,s=t.onClick,u=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.innerRef,t.state),p=t.replace,v=(0,i.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]),m=h(n);return l.default.createElement(d.Link,(0,o.default)({to:m,state:c,getProps:a,innerRef:this.handleRef,onMouseEnter:function(e){u&&u(e),___loader.hovering((0,f.parsePath)(n).pathname)},onClick:function(t){return s&&s(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),b(n,{state:c,replace:p})),!0}},v))},t}(l.default.Component);v.propTypes=(0,o.default)({},p,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var m=l.default.forwardRef(function(e,t){return l.default.createElement(v,(0,o.default)({innerRef:t},e))});t.default=m;var b=function(e,t){window.___navigate(h(e),t)};t.navigate=b;var _=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(h(e))};t.push=_;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(h(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),_(e)}},154:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}},155:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},162:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=n(164),o=(r=i)&&r.__esModule?r:{default:r};t.default=o.default},163:function(e,t,n){},164:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=l(n(165)),o=n(0),a=l(o),s=l(n(4)),u=l(n(166)),c=n(167);function l(e){return e&&e.__esModule?e:{default:e}}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f={orientation:{horizontal:{dimension:"width",direction:"left",reverseDirection:"right",coordinate:"x"},vertical:{dimension:"height",direction:"top",reverseDirection:"bottom",coordinate:"y"}}},h=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.handleFormat=function(e){var t=r.props.format;return t?t(e):e},r.handleUpdate=function(){if(r.slider){var e=r.props.orientation,t=(0,c.capitalize)(f.orientation[e].dimension),n=r.slider["offset"+t],i=r.handle["offset"+t];r.setState({limit:n-i,grab:i/2})}},r.handleStart=function(e){var t=r.props.onChangeStart;document.addEventListener("mousemove",r.handleDrag),document.addEventListener("mouseup",r.handleEnd),r.setState({active:!0},function(){t&&t(e)})},r.handleDrag=function(e){e.stopPropagation();var t=r.props.onChange,n=e.target,i=n.className,o=n.classList,a=n.dataset;if(t&&"rangeslider__labels"!==i){var s=r.position(e);o&&o.contains("rangeslider__label-item")&&a.value&&(s=parseFloat(a.value)),t&&t(s,e)}},r.handleEnd=function(e){var t=r.props.onChangeComplete;r.setState({active:!1},function(){t&&t(e)}),document.removeEventListener("mousemove",r.handleDrag),document.removeEventListener("mouseup",r.handleEnd)},r.handleKeyDown=function(e){e.preventDefault();var t=e.keyCode,n=r.props,i=n.value,o=n.min,a=n.max,s=n.step,u=n.onChange,c=void 0;switch(t){case 38:case 39:c=i+s>a?a:i+s,u&&u(c,e);break;case 37:case 40:c=i-s<o?o:i-s,u&&u(c,e)}},r.getPositionFromValue=function(e){var t=r.state.limit,n=r.props,i=n.min,o=(e-i)/(n.max-i);return Math.round(o*t)},r.getValueFromPosition=function(e){var t=r.state.limit,n=r.props,i=n.orientation,o=n.min,a=n.max,s=n.step,u=(0,c.clamp)(e,0,t)/(t||1),l=s*Math.round(u*(a-o)/s),d="horizontal"===i?l+o:a-l;return(0,c.clamp)(d,o,a)},r.position=function(e){var t=r.state.grab,n=r.props,i=n.orientation,o=n.reverse,a=r.slider,s=f.orientation[i].coordinate,u=o?f.orientation[i].reverseDirection:f.orientation[i].direction,l="client"+(0,c.capitalize)(s),d=e.touches?e.touches[0][l]:e[l],h=a.getBoundingClientRect()[u],p=o?h-d-t:d-h-t;return r.getValueFromPosition(p)},r.coordinates=function(e){var t=r.state,n=t.limit,i=t.grab,o=r.props.orientation,a=r.getValueFromPosition(e),s=r.getPositionFromValue(a),u="horizontal"===o?s+i:s;return{fill:"horizontal"===o?u:n-u,handle:u,label:u}},r.renderLabels=function(e){return a.default.createElement("ul",{ref:function(e){r.labels=e},className:(0,i.default)("rangeslider__labels")},e)},r.state={active:!1,limit:0,grab:0},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"componentDidMount",value:function(){this.handleUpdate(),new u.default(this.handleUpdate).observe(this.slider)}},{key:"render",value:function(){var e=this,t=this.props,n=t.value,r=t.orientation,o=t.className,s=t.tooltip,u=t.reverse,c=t.labels,l=t.min,h=t.max,p=t.handleLabel,v=this.state.active,m=f.orientation[r].dimension,b=u?f.orientation[r].reverseDirection:f.orientation[r].direction,_=this.getPositionFromValue(n),y=this.coordinates(_),g=d({},m,y.fill+"px"),w=d({},b,y.handle+"px"),E=s&&v,O=[],M=Object.keys(c);if(M.length>0){M=M.sort(function(e,t){return u?e-t:t-e});var x=!0,P=!1,T=void 0;try{for(var D,C=M[Symbol.iterator]();!(x=(D=C.next()).done);x=!0){var R=D.value,S=this.getPositionFromValue(R),j=d({},b,this.coordinates(S).label+"px");O.push(a.default.createElement("li",{key:R,className:(0,i.default)("rangeslider__label-item"),"data-value":R,onMouseDown:this.handleDrag,onTouchStart:this.handleStart,onTouchEnd:this.handleEnd,style:j},this.props.labels[R]))}}catch(k){P=!0,T=k}finally{try{!x&&C.return&&C.return()}finally{if(P)throw T}}}return a.default.createElement("div",{ref:function(t){e.slider=t},className:(0,i.default)("rangeslider","rangeslider-"+r,{"rangeslider-reverse":u},o),onMouseDown:this.handleDrag,onMouseUp:this.handleEnd,onTouchStart:this.handleStart,onTouchEnd:this.handleEnd,"aria-valuemin":l,"aria-valuemax":h,"aria-valuenow":n,"aria-orientation":r},a.default.createElement("div",{className:"rangeslider__fill",style:g}),a.default.createElement("div",{ref:function(t){e.handle=t},className:"rangeslider__handle",onMouseDown:this.handleStart,onTouchMove:this.handleDrag,onTouchEnd:this.handleEnd,onKeyDown:this.handleKeyDown,style:w,tabIndex:0},E?a.default.createElement("div",{ref:function(t){e.tooltip=t},className:"rangeslider__handle-tooltip"},a.default.createElement("span",null,this.handleFormat(n))):null,a.default.createElement("div",{className:"rangeslider__handle-label"},p)),c?this.renderLabels(O):null)}}]),t}();h.propTypes={min:s.default.number,max:s.default.number,step:s.default.number,value:s.default.number,orientation:s.default.string,tooltip:s.default.bool,reverse:s.default.bool,labels:s.default.object,handleLabel:s.default.string,format:s.default.func,onChangeStart:s.default.func,onChange:s.default.func,onChangeComplete:s.default.func},h.defaultProps={min:0,max:100,step:1,value:0,orientation:"horizontal",tooltip:!0,reverse:!1,labels:{},handleLabel:""},t.default=h},165:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var a=i.apply(null,r);a&&e.push(a)}else if("object"===o)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},166:function(e,t,n){"use strict";n.r(t),function(e){var n=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var n=-1;return e.some(function(e,r){return e[0]===t&&(n=r,!0)}),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];e.call(t,i[1],i[0])}},t}()}(),r="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,i=void 0!==e&&e.Math===Math?e:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),o="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(i):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)},a=2;var s=20,u=["top","right","bottom","left","width","height","size","weight"],c="undefined"!=typeof MutationObserver,l=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,r=!1,i=0;function s(){n&&(n=!1,e()),r&&c()}function u(){o(s)}function c(){var e=Date.now();if(n){if(e-i<a)return;r=!0}else n=!0,r=!1,setTimeout(u,t);i=e}return c}(this.refresh.bind(this),s)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter(function(e){return e.gatherActive(),e.hasActive()});return e.forEach(function(e){return e.broadcastActive()}),e.length>0},e.prototype.connect_=function(){r&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),c?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){r&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;u.some(function(e){return!!~n.indexOf(e)})&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),d=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},f=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||i},h=y(0,0,0,0);function p(e){return parseFloat(e)||0}function v(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(t,n){return t+p(e["border-"+n+"-width"])},0)}function m(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return h;var r=f(e).getComputedStyle(e),i=function(e){for(var t={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=e["padding-"+i];t[i]=p(o)}return t}(r),o=i.left+i.right,a=i.top+i.bottom,s=p(r.width),u=p(r.height);if("border-box"===r.boxSizing&&(Math.round(s+o)!==t&&(s-=v(r,"left","right")+o),Math.round(u+a)!==n&&(u-=v(r,"top","bottom")+a)),!function(e){return e===f(e).document.documentElement}(e)){var c=Math.round(s+o)-t,l=Math.round(u+a)-n;1!==Math.abs(c)&&(s-=c),1!==Math.abs(l)&&(u-=l)}return y(i.left,i.top,s,u)}var b="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof f(e).SVGGraphicsElement}:function(e){return e instanceof f(e).SVGElement&&"function"==typeof e.getBBox};function _(e){return r?b(e)?function(e){var t=e.getBBox();return y(0,0,t.width,t.height)}(e):m(e):h}function y(e,t,n,r){return{x:e,y:t,width:n,height:r}}var g=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=y(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=_(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),w=function(){return function(e,t){var n,r,i,o,a,s,u,c=(r=(n=t).x,i=n.y,o=n.width,a=n.height,s="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,u=Object.create(s.prototype),d(u,{x:r,y:i,width:o,height:a,top:i,right:r+o,bottom:a+i,left:r}),u);d(this,{target:e,contentRect:c})}}(),E=function(){function e(e,t,r){if(this.activeObservations_=[],this.observations_=new n,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=r}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof f(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new g(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof f(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&e.activeObservations_.push(t)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map(function(e){return new w(e.target,e.broadcastRect())});this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),O="undefined"!=typeof WeakMap?new WeakMap:new n,M=function(){return function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=l.getInstance(),r=new E(t,n,this);O.set(this,r)}}();["observe","unobserve","disconnect"].forEach(function(e){M.prototype[e]=function(){var t;return(t=O.get(this))[e].apply(t,arguments)}});var x=void 0!==i.ResizeObserver?i.ResizeObserver:M;t.default=x}.call(this,n(73))},167:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.capitalize=function(e){return e.charAt(0).toUpperCase()+e.substr(1)},t.clamp=function(e,t,n){return Math.min(Math.max(e,t),n)}}}]);
//# sourceMappingURL=0-4d35ab16cefee8d2756e.js.map