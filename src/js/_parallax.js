/**
 * simple-parallax-jquery - simpleParallax is a simple and lightweight jQuery plugin that gives your website parallax animations on the images
 * @version v4.0.0
 * @date: 07-01-2019 13:30:12
 * @link https://anakao-theme.com/simpleparallax/
 */
"use strict";var _createClass=function(){function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}!function(e,t){"function"==typeof define&&define.amd?define([],function(){return t(e)}):"object"===("undefined"==typeof exports?"undefined":_typeof(exports))?module.exports=t(e):e.simpleParallax=t(e)}("undefined"!=typeof global?global:"undefined"!=typeof window?window:void 0,function(o){var n=function(){for(var e,t="transform webkitTransform mozTransform oTransform msTransform".split(" "),i=0;void 0===e;)e=null!=document.createElement("div").style[t[i]]?t[i]:void 0,i++;return e}();!function(){for(var a=0,e=["ms","moz","webkit","o"],t=0;t<e.length&&!o.requestAnimationFrame;++t)o.requestAnimationFrame=o[e[t]+"RequestAnimationFrame"],o.cancelAnimationFrame=o[e[t]+"CancelAnimationFrame"]||o[e[t]+"CancelRequestAnimationFrame"];o.requestAnimationFrame||(o.requestAnimationFrame=function(e,t){var i=(new Date).getTime(),n=Math.max(0,16-(i-a)),s=o.setTimeout(function(){e(i+n)},n);return a=i+n,s}),o.cancelAnimationFrame||(o.cancelAnimationFrame=function(e){clearTimeout(e)})}(),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;if(!document.documentElement.contains(t))return null;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null});var s=function(){function i(e,t){_classCallCheck(this,i),this.element=e,this.elementContainer=e,this.lastPosition=-1,this.gap=200,this.defaults={delay:.6,orientation:"up",scale:1.3,overflow:!1,transition:"cubic-bezier(0,0,0,1)",breakpoint:!1},this.settings=Object.assign(this.defaults,t),this.settings.breakpoint&&document.documentElement.clientWidth<=this.settings.breakpoint||(this.init=this.init.bind(this),this.animationFrame=this.animationFrame.bind(this),this.handleResize=this.handleResize.bind(this),this.isImageLoaded(this.element)?this.init():this.element.addEventListener("load",this.init))}return _createClass(i,[{key:"init",value:function(){!1===this.settings.overflow&&this.wrapElement(),this.setStyle(),this.getElementOffset(),this.getViewportOffsetHeight(),this.animationFrame(),o.addEventListener("resize",this.handleResize)}},{key:"isImageLoaded",value:function(){return!!this.element.complete&&(void 0===this.element.naturalWidth||0!==this.element.naturalWidth)}},{key:"isVisible",value:function(){return this.elementBottomX>this.viewportTop-this.gap&&this.elementTopX<this.viewportBottom+this.gap}},{key:"wrapElement",value:function(){var e=this.element.closest("picture")||this.element,t=document.createElement("div");t.classList.add("simpleParallax"),t.style.overflow="hidden",e.parentNode.insertBefore(t,e),t.appendChild(e),this.elementContainer=t}},{key:"unWrapElement",value:function(){for(var e=this.elementContainer.parentNode;this.elementContainer.firstChild;)e.insertBefore(this.elementContainer.firstChild,this.elementContainer);e.removeChild(this.elementContainer)}},{key:"setStyle",value:function(){!1===this.settings.overflow&&(this.element.style[n]="scale("+this.settings.scale+")"),0<this.settings.delay&&(this.element.style.transition="transform "+this.settings.delay+"s "+this.settings.transition),this.element.style.willChange="transform"}},{key:"unSetStyle",value:function(){this.element.style.willChange="",this.element.style[n]="",this.element.style.transition=""}},{key:"getElementOffset",value:function(){var e=this.elementContainer.getBoundingClientRect();this.elementHeight=e.height,this.elementTopX=e.top+o.pageYOffset,this.elementBottomX=this.elementHeight+this.elementTopX}},{key:"getViewportOffsetTop",value:function(){this.viewportTop=o.pageYOffset}},{key:"getViewportOffsetHeight",value:function(){this.viewportHeight=document.documentElement.clientHeight}},{key:"getViewportOffsetBottom",value:function(){this.viewportBottom=this.viewportTop+this.viewportHeight}},{key:"handleResize",value:function(){this.getViewportOffsetHeight(),this.getElementOffset(),this.getRangeMax()}},{key:"getRangeMax",value:function(){var e=this.element.clientHeight;this.rangeMax=e*this.settings.scale-e,"down"!==this.settings.orientation&&"right"!==this.settings.orientation||(this.rangeMax*=-1)}},{key:"getTranslateValue",value:function(){var e=((this.viewportBottom-this.elementTopX)/((this.viewportHeight+this.elementHeight)/100)).toFixed(1);return e=Math.min(100,Math.max(0,e)),this.oldPercentage!==e&&(this.rangeMax||this.getRangeMax(),this.translateValue=(e/100*this.rangeMax-this.rangeMax/2).toFixed(0),this.oldTranslateValue!==this.translateValue&&(this.oldPercentage=e,this.oldTranslateValue=this.translateValue,!0))}},{key:"animate",value:function(){var e=0,t=0,i=void 0;"left"===this.settings.orientation||"right"===this.settings.orientation?t=this.translateValue+"px":e=this.translateValue+"px",i=!1===this.settings.overflow?"scale("+this.settings.scale+") translate3d("+t+", "+e+", 0)":"translate3d("+t+", "+e+", 0)",this.element.style[n]=i}},{key:"proceedElement",value:function(){this.isVisible()&&this.getTranslateValue()&&this.animate()}},{key:"animationFrame",value:function(){this.getViewportOffsetTop(),this.lastPosition!==this.viewportTop?(this.getViewportOffsetBottom(),this.proceedElement(),this.frameID=o.requestAnimationFrame(this.animationFrame),this.lastPosition=this.viewportTop):this.frameID=o.requestAnimationFrame(this.animationFrame)}},{key:"destroy",value:function(){this.unSetStyle(),!1===this.settings.overflow&&this.unWrapElement(),o.cancelAnimationFrame(this.frameID),o.removeEventListener("resize",this.handleResize)}}]),i}();return function(e,t){if(e.length)for(var i=0;i<e.length;i++)new s(e[i],t);else new s(e,t)}});
/*
	Parallax
*/
(function($){
	var jsInitParallax = $('#pt-pageContent .js-init-parallax');
	if (jsInitParallax.length){
		initParallax();
	};
	$(window).resize(function(e) {
		var ttwindowWidth = window.innerWidth || $window.width();
		if(ttwindowWidth > 790){
			initParallax();
		};
	});
	function initParallax(){
		jsInitParallax.each(function(){
			var obj = $(this),
				orientation = $(this).data('orientation'),
				overflow = $(this).data('overflow'),
				scale = $(this).data('scale');

			new simpleParallax(obj, {
				overflow: overflow || false,
				scale: scale || 1.2,
				breakpoint: 790,
				orientation: orientation,
			});
		});
	};
})(jQuery);
