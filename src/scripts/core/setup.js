var SL=!!(navigator.connection&&(navigator.connection.saveData||/2g/.test(navigator.connection.effectiveType||"")));
var $=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))};
$("img[data-src]").forEach(function(i){var s=$(i.dataset.src)[0];if(s)i.src=s.src});
var G=window.gsap,ST=window.ScrollTrigger,FX=!!(G&&ST);
/* Every animation always plays for every visitor: the client's rule. Device settings like "remove animations" and data saver are ignored on purpose, so do not add them back. */
var H=document.documentElement,ld=$("#ld")[0],nv=$("#nv")[0],pt=$("#pt")[0],NSV="http://www.w3.org/2000/svg";
if(!FX){H.classList.add("ng");H.classList.remove("lk")}
/* touch devices only: everything guarded by TOUCHY leaves desktop untouched */
var TOUCHY=matchMedia("(hover:none) and (pointer:coarse)").matches,loading=!!ld&&FX,iC=null,ccN=0;
/* ScrollTrigger keeps an empty loop running for ever to work around a repaint quirk in Firefox. On a phone it wakes the main thread every frame for nothing, so that one loop (and only that one) is not rescheduled */
if(TOUCHY&&!/Firefox/.test(navigator.userAgent)){var raf0=window.requestAnimationFrame;window.requestAnimationFrame=function(f){return f.name==="_rafBugFix"?0:raf0.call(window,f)}}
var routes={home:"home","become-a-donor":"donor",problem:"problem","how-it-works":"how",partners:"partners","early-access":"early",login:"login",help:"help",privacy:"legal",terms:"legal",impressum:"legal"};
var titles={home:"Connecting futures","become-a-donor":"Become a donor",problem:"The Problem","how-it-works":"How it works",partners:"Partners","early-access":"Early access",login:"Login",help:"Help center",privacy:"Privacy",terms:"Terms",impressum:"Impressum"};
var lenis=null,ctx=null,cur=null,busy=false,mms=[],rotTok=0,lrKick=function(){};
