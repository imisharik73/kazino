function initSmooth(docWidth){if(docWidth<1024)return;(function(){function a(){H.keyboardSupport&&p("keydown",f)}function b(){if(!K&&document.body){K=!0;var b=document.body,c=document.documentElement,d=window.innerHeight,e=b.scrollHeight;if(L=0<=document.compatMode.indexOf("CSS")?c:b,B=b,a(),top!=self)I=!0;else if(ea&&e>d&&(b.offsetHeight<=d||c.offsetHeight<=d)){var f=document.createElement("div");f.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+L.scrollHeight+"px",document.body.appendChild(f);var g;D=function(){g||(g=setTimeout(function(){f.style.height="0",f.style.height=L.scrollHeight+"px",g=null},500))},setTimeout(D,10),p("resize",D);if(C=new Y(D),C.observe(b,{attributes:!0,childList:!0,characterData:!1}),L.offsetHeight<=d){var h=document.createElement("div");h.style.clear="both",b.appendChild(h)}}H.fixedBackground||!1||(b.style.backgroundAttachment="scroll",c.style.backgroundAttachment="scroll")}}function c(){C&&C.disconnect(),q(ha,e),q("mousedown",g),q("keydown",f),q("resize",D),q("load",b)}function d(a,b,c){if(s(b,c),1!=H.accelerationMax){var d=Date.now(),e=d-S;if(e<H.accelerationDelta){var f=(1+50/e)/2;1<f&&(f=Math.min(f,H.accelerationMax),b*=f,c*=f)}S=Date.now()}if(Q.push({x:b,y:c,lastX:0>b?.99:-.99,lastY:0>c?.99:-.99,start:Date.now()}),!R){var g=Z(),h=a===g||a===document.body;null==a.$scrollBehavior&&o(a)&&(a.$scrollBehavior=a.style.scrollBehavior,a.style.scrollBehavior="auto");var j=function(){for(var d=Date.now(),e=0,f=0,g=0;g<Q.length;g++){var k=Q[g],l=d-k.start,m=l>=H.animationTime,n=m?1:l/H.animationTime;H.pulseAlgorithm&&(n=z(n));var o=k.x*n-k.lastX>>0,p=k.y*n-k.lastY>>0;e+=o,f+=p,k.lastX+=o,k.lastY+=p,m&&(Q.splice(g,1),g--)}h?window.scrollBy(e,f):(e&&(a.scrollLeft+=e),f&&(a.scrollTop+=f)),b||c||(Q=[]),Q.length?X(j,a,1e3/H.frameRate+1):(R=!1,null!=a.$scrollBehavior&&(a.style.scrollBehavior=a.$scrollBehavior,a.$scrollBehavior=null))};X(j,a,0),R=!0}}function e(a){K||b();var c=a.target;if(a.defaultPrevented||a.ctrlKey)return!0;if(r(B,"embed")||r(c,"embed")&&/\.pdf/i.test(c.src)||r(B,"object")||c.shadowRoot)return!0;var e=-a.wheelDeltaX||a.deltaX||0,f=-a.wheelDeltaY||a.deltaY||0;N&&(a.wheelDeltaX&&u(a.wheelDeltaX,120)&&(e=-120*(a.wheelDeltaX/Math.abs(a.wheelDeltaX))),a.wheelDeltaY&&u(a.wheelDeltaY,120)&&(f=-120*(a.wheelDeltaY/Math.abs(a.wheelDeltaY)))),e||f||(f=-a.wheelDelta||0),1===a.deltaMode&&(e*=40,f*=40);var g=k(c);return g?!!t(f)||void(1.2<Math.abs(e)&&(e*=H.stepSize/120),1.2<Math.abs(f)&&(f*=H.stepSize/120),d(g,e,f),a.preventDefault(),h()):!(I&&aa)||(Object.defineProperty(a,"target",{value:window.frameElement}),parent.wheel(a))}function f(a){var b=a.target,c=a.ctrlKey||a.altKey||a.metaKey||a.shiftKey&&a.keyCode!==O.spacebar;document.body.contains(B)||(B=document.activeElement);var e=/^(textarea|select|embed|object)$/i,f=/^(button|submit|radio|checkbox|file|color|image)$/i;if(a.defaultPrevented||e.test(b.nodeName)||r(b,"input")&&!f.test(b.type)||r(B,"video")||w(a)||b.isContentEditable||c)return!0;if((r(b,"button")||r(b,"input")&&f.test(b.type))&&a.keyCode===O.spacebar)return!0;if(r(b,"input")&&"radio"==b.type&&P[a.keyCode])return!0;var g,i=0,j=0,l=k(B);if(!l)return!(I&&aa)||parent.keydown(a);var m=l.clientHeight;switch(l==document.body&&(m=window.innerHeight),a.keyCode){case O.up:j=-H.arrowScroll;break;case O.down:j=H.arrowScroll;break;case O.spacebar:g=a.shiftKey?1:-1,j=.9*(-g*m);break;case O.pageup:j=.9*-m;break;case O.pagedown:j=.9*m;break;case O.home:l==document.body&&document.scrollingElement&&(l=document.scrollingElement),j=-l.scrollTop;break;case O.end:var n=l.scrollHeight-l.scrollTop,o=n-m;j=0<o?o+10:0;break;case O.left:i=-H.arrowScroll;break;case O.right:i=H.arrowScroll;break;default:return!0;}d(l,i,j),a.preventDefault(),h()}function g(a){B=a.target}function h(){clearTimeout(F),F=setInterval(function(){U=V=W={}},1000)}function i(a,b,c){for(var d=c?U:V,e=a.length;e--;)d[T(a[e])]=b;return b}function j(a,b){return(b?U:V)[T(a)]}function k(a){var b=[],c=document.body,d=L.scrollHeight;do{var e=j(a,!1);if(e)return i(b,e);if(b.push(a),d===a.scrollHeight){var f=m(L)&&m(c),g=f||n(L);if(I&&l(L)||!I&&g)return i(b,Z())}else if(l(a)&&n(a))return i(b,a)}while(a=a.parentElement)}function l(a){return a.clientHeight+10<a.scrollHeight}function m(a){var b=getComputedStyle(a,"").getPropertyValue("overflow-y");return"hidden"!==b}function n(a){var b=getComputedStyle(a,"").getPropertyValue("overflow-y");return"scroll"===b||"auto"===b}function o(a){var b=T(a);if(null==W[b]){var c=getComputedStyle(a,"")["scroll-behavior"];W[b]="smooth"==c}return W[b]}function p(a,b,c){window.addEventListener(a,b,c||!1)}function q(a,b,c){window.removeEventListener(a,b,c||!1)}function r(a,b){return a&&(a.nodeName||"").toLowerCase()===b.toLowerCase()}function s(a,b){a=0<a?1:-1,b=0<b?1:-1,(J.x!==a||J.y!==b)&&(J.x=a,J.y=b,Q=[],S=0)}function t(a){if(a){M.length||(M=[a,a,a]),a=Math.abs(a),M.push(a),M.shift(),clearTimeout(E),E=setTimeout(function(){try{localStorage.SS_deltaBuffer=M.join(",")}catch(a){}},1e3);var b=120<a&&v(a);return!v(120)&&!v(100)&&!b}}function u(a,b){return Math.floor(a/b)==a/b}function v(a){return u(M[0],a)&&u(M[1],a)&&u(M[2],a)}function w(a){var b=a.target,c=!1;if(-1!=document.URL.indexOf("www.youtube.com/watch"))do if(c=b.classList&&b.classList.contains("html5-video-controls"),c)break;while(b=b.parentNode);return c}function y(a){var b,c,d;return a*=H.pulseScale,1>a?b=a-(1-Math.exp(-a)):(c=Math.exp(-1),a-=1,d=1-Math.exp(-a),b=c+d*(1-c)),b*H.pulseNormalize}function z(a){return 1<=a?1:0>=a?0:(1==H.pulseNormalize&&(H.pulseNormalize/=y(1)),y(a))}function A(a){for(var b in a)G.hasOwnProperty(b)&&(H[b]=a[b])}var B,C,D,E,F,G={frameRate:150,animationTime:400,stepSize:100,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:!0,arrowScroll:50,fixedBackground:!0,excluded:""},H=G,I=!1,J={x:0,y:0},K=!1,L=document.documentElement,M=[],N=/^Mac/.test(navigator.platform),O={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},P={37:1,38:1,39:1,40:1},Q=[],R=!1,S=Date.now(),T=function(){var a=0;return function(b){return b.uniqueID||(b.uniqueID=a++)}}(),U={},V={},W={};if(window.localStorage&&localStorage.SS_deltaBuffer)try{M=localStorage.SS_deltaBuffer.split(",")}catch(a){}var X=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a,b,c){window.setTimeout(a,c||1e3/60)}}(),Y=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,Z=function(){var a=document.scrollingElement;return function(){if(!a){var b=document.createElement("div");b.style.cssText="height:10000px;width:1px;",document.body.appendChild(b);var c=document.body.scrollTop,d=document.documentElement.scrollTop;window.scrollBy(0,3),a=document.body.scrollTop==c?document.documentElement:document.body,window.scrollBy(0,-3),document.body.removeChild(b)}return a}}(),$=window.navigator.userAgent,_=/Edge/.test($),aa=/chrome/i.test($)&&!_,ba=/safari/i.test($)&&!_,ca=/mobile/i.test($),da=/Windows NT 6.1/i.test($)&&/rv:11/i.test($),ea=ba&&(/Version\/8/i.test($)||/Version\/9/i.test($)),fa=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){fa=!0}}))}catch(a){}var ga=!!fa&&{passive:!1},ha="onwheel"in document.createElement("div")?"wheel":"mousewheel";ha&&(aa||ba||da)&&!ca&&(p(ha,e,ga),p("mousedown",g),p("load",b)),A.destroy=c,window.SmoothScrollOptions&&A(window.SmoothScrollOptions),"function"==typeof define&&define.amd?define(function(){return A}):"object"==typeof exports?module.exports=A:window.SmoothScroll=A})();}

jQuery( function( $ ){
	var body = $('body'),
		$document = $(document),
		docWidth = $document.width(),
		header = $('.header'),
		mobile_menu = $('.mobile-menu'),
		mobile_menu_button = $('[mobile-menu-button]');

	initSmooth( docWidth );

	function scrolled(){
		header.toggleClass( 'header--scrolled', $document.scrollTop() > 0 );
		mobile_menu.toggleClass( 'mobile-menu--scrolled', $document.scrollTop() > 0 );
	}

	$document.scroll( scrolled );

	scrolled();

	$('.slider').each( function(){
		var that = $(this),
			slider = that.find('.swiper')[0],

			slidesPerView = that.data( 'slider-per-view' ) || 1,

			swiperPagination = that.find('.swiper-pagination')[0],
			swiperButtonNext = that.find('.swiper-button-next')[0],
			swiperButtonPrev = that.find('.swiper-button-prev')[0],

			swiper = new Swiper( slider, {
				autoHeight: true,
				slidesPerView: ( slidesPerView - 3 > 0 ) ? slidesPerView - 3 : 1,
				slidesPerGroup: ( slidesPerView - 3 > 0 ) ? slidesPerView - 3 : 1,
				spaceBetween: 20,
				loop: true,
				pagination: {
					el: swiperPagination,
				},
				navigation: {
					nextEl: swiperButtonNext,
					prevEl: swiperButtonPrev,
				},
				breakpoints: {
					620: {
						slidesPerView: ( slidesPerView - 2 > 0 ) ? slidesPerView - 2 : 1,
						slidesPerGroup: ( slidesPerView - 2 > 0 ) ? slidesPerView - 2 : 1,
					},
					960: {
						slidesPerView: ( slidesPerView - 1 > 0 ) ? slidesPerView - 1 : 1,
						slidesPerGroup: ( slidesPerView - 1 > 0 ) ? slidesPerView - 1 : 1,
					},
					1220: {
						slidesPerView: slidesPerView,
						slidesPerGroup: slidesPerView,
					}
				}
			} );
	} );

	$('.casino-list__item__rating[data-rating]').each( function(){
		var that = $(this),
			rating = parseFloat( that.attr('data-rating') ),
			ceil = Math.ceil( rating ),
			floor = Math.floor( rating );

		that.find( '.casino-list__item__rating__star' ).slice( 0, floor ).addClass( 'casino-list__item__rating__star--full' );

		if( ceil !== floor ){
			that.find( '.casino-list__item__rating__star' ).slice( floor, ceil ).addClass( 'casino-list__item__rating__star--half' );
		}
	} );

	body.on( 'click', '.short-more .btn--more', function(e){
		e.preventDefault();

		var that = $(this),
			closest = that.closest('.short-more'),
			more = closest.find('.short-more__more');

		closest.toggleClass('active');

		if( closest.hasClass('active') ){
			more.show(300);
		}else{
			more.hide(300);
		}
	} )

	.on( 'click', '.accordion__label', function(e){
		e.preventDefault();

		this.classList.toggle('active');
		var panel = this.nextElementSibling;

		panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight + 'px';
	} )

	.on( 'click', 'a[href="#"], a[href=""]', function(e){
		e.preventDefault();
	} )

	.on( 'click', 'a[href^="#"]:not([href$="#"])', function(e){
		e.preventDefault();

		var that = $(this),
			hash = that.attr('href'),
			element = $(hash);

		if( !element ) return;

		$('html,body').animate( { scrollTop: element.offset().top }, 300 );
	} )

	.on( 'click', '[launch-slot-iframe-btn]', function(e){
		e.preventDefault();

		var that = $(this),
			closest = that.closest('[launch-slot-iframe-container]');

		if( !closest ) return;

		closest.html( '<div class="loader"></div><iframe frameborder="0" scrolling="no" allowfullscreen="" src="' + that.data( 'iframe-src' ) + '"></iframe>' )
	} )

	.on( 'click', '[mobile-menu-button]', function(e){
		e.preventDefault();

		var that = $(this);

		that.toggleClass('active');

		if( that.hasClass( 'active' ) ){
			body.addClass( 'mobile-menu-open' );
			mobile_menu.addClass( 'active' );
		}else{
			body.removeClass( 'mobile-menu-open' );
			mobile_menu.removeClass( 'active' );
		}
	} )

	.on( 'click', '[mobile-menu-button-close]', function(e){
		e.preventDefault();

		var that = $(this);

		body.removeClass( 'mobile-menu-open' );
		mobile_menu.removeClass( 'active' );
		mobile_menu_button.removeClass( 'active' );
	} );

	$document.on( 'click', 'body.mobile-menu-open', function(e){
		var target = $(e.target);

		if(
			target.closest( 'ul' ).length > 0 ||
			target.is( 'ul' ) ||
			target.closest( '[mobile-menu-button]' ).length > 0 ||
			target.is( '[mobile-menu-button]' )
		) return;

		body.removeClass( 'mobile-menu-open' );
		mobile_menu.removeClass( 'active' );
		mobile_menu_button.removeClass( 'active' );
	} )
} );