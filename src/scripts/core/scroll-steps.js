/* ---- v4: one section per scroll (desktop) + tempting join button ---- */
(function(){if(!lenis)return;
var lkOn=null,zoneY=-1;function lkSet(v){if(v!==lkOn){lkOn=v;H.classList.toggle("lk",v)}}
function stops(){return iC||(iC=info())}
/* inside an animated scene the page scrolls natively; everywhere else the browser is told not to pan at all */
function zoomed(){return !!window.visualViewport&&visualViewport.scale>1.02}
function lkSync(){if(!TOUCHY)return;if(busy||loading){lkSet(true);return}var I=stops(),y=lenis.scroll,i,free=!I||typing()||zoomed();if(I)for(i=0;i<I.fr.length;i++)if(y>I.fr[i][0]-3&&y<I.fr[i][1]+3)free=true;lkSet(!free)}
lkHold=function(){if(TOUCHY)lkSet(true)};lkAfter=function(){iC=null;lkSync()};if(TOUCHY){ST.addEventListener("refresh",function(){iC=null;lkSync()});addEventListener("focusin",lkSync);if(window.visualViewport)visualViewport.addEventListener("resize",lkSync);addEventListener("focusout",function(){setTimeout(lkSync,60);/* once the keyboard has closed, come back to a stop */clearTimeout(idle);idle=setTimeout(settle,300)})}
var ts=null,SN=matchMedia("(min-width:900px) and (min-height:560px)"),anim=false,lastT=0,lastAbs=0,lastDir=0,doneT=0,idle=0;
var TOUCH=matchMedia("(hover:none) and (pointer:coarse)");function ok(){return (SN.matches||TOUCH.matches)&&!busy&&!mn.classList.contains("open")}
function info(){var pg=$("[data-page]:not([hidden])")[0];if(!pg||pg.hasAttribute("data-free"))return null;var vh=innerHeight,max=Math.max(0,document.documentElement.scrollHeight-vh),st=[],fr=[],y0=scrollY;
Array.prototype.slice.call(pg.children).concat([$(".ft")[0]]).forEach(function(el){if(!el||el.hidden||!el.offsetHeight)return;var r=el.getBoundingClientRect(),t=r.top+y0,h=r.height,e=t+h-vh,k,n;
if(el.classList.contains("pin-spacer")){st.push(t);if(e>t+4){st.push(e);fr.push([Math.round(t),Math.round(e)])}return}
if(el.classList.contains("sk")){st.push(t);var hd=$(".skh",el)[0],off=(parseFloat(getComputedStyle(el).paddingTop)||0)+(hd?hd.offsetHeight:0);$(".sd",el).forEach(function(d,i){var top=parseFloat(getComputedStyle(d).top)||0;if(i)st.push(t+off-top);off+=d.offsetHeight+(parseFloat(getComputedStyle(d).marginBottom)||0)});return}
st.push(t);if(h-vh>8){n=Math.ceil((h-vh)/(vh*.85));for(k=1;k<=n;k++)st.push(t+(e-t)*k/n)}});
st=st.map(function(y){return Math.max(0,Math.min(max,Math.round(y)))}).sort(function(a,b){return a-b}).filter(function(y,i,a){return !i||y-a[i-1]>8});return{st:st,fr:fr}}
var gT=0;resetStep=function(){anim=false;ts=null;clearTimeout(gT);clearTimeout(idle)};function go(y){anim=true;clearTimeout(gT);gT=setTimeout(function(){anim=false},1400);lrKick(1500);lenis.scrollTo(y,{duration:.95,easing:function(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2},lock:true,force:true,onComplete:function(){anim=false;clearTimeout(gT);doneT=performance.now();lkSync()}})}
function inFree(I,y,d){for(var i=0;i<I.fr.length;i++){var z=I.fr[i];if((y>z[0]+2&&y<z[1]-2)||(Math.abs(y-z[0])<=2&&d>0)||(Math.abs(y-z[1])<=2&&d<0))return true}return false}
function next(I,y,d){var i;if(d>0){for(i=0;i<I.st.length;i++)if(I.st[i]>y+4)return I.st[i]}else{for(i=I.st.length-1;i>=0;i--)if(I.st[i]<y-4)return I.st[i]}return null}
addEventListener("wheel",function(e){if(!ok()||e.ctrlKey)return;var I=info();if(!I)return;var dy=e.deltaY*(e.deltaMode==1?33:e.deltaMode==2?innerHeight:1);if(Math.abs(dy)<Math.abs(e.deltaX))return;var d=dy>0?1:-1,y=lenis.scroll,nw=performance.now();
if(!anim&&nw-doneT<450&&nw-lastT<120&&d===lastDir){lastT=nw;e.preventDefault();e.stopImmediatePropagation();return}
if(!anim&&inFree(I,y,d))return;
e.preventDefault();e.stopImmediatePropagation();
var now=performance.now(),gap=now-lastT,ab=Math.abs(dy),fresh=gap>140||ab>lastAbs*1.4+2||d!==lastDir||now-doneT>350;lastT=now;lastAbs=ab;lastDir=d;
if(anim||!fresh||ab<2)return;var t=next(I,y,d);if(t!=null)go(t)},{passive:false,capture:true});
function typing(){var a=document.activeElement;return a&&/INPUT|TEXTAREA|SELECT/.test(a.tagName)}
addEventListener("touchstart",function(e){if((busy||loading)&&e.touches.length===1){ts={dead:1};return}if(!ok()||e.touches.length>1||typing()||zoomed()){ts=null;return}var I=stops();if(!I){ts=null;return}ts={y:e.touches[0].clientY,x:e.touches[0].clientX,I:I,mode:0,t:performance.now()}},{passive:true});
addEventListener("touchmove",function(e){if(!ts)return;if(ts.dead){if(e.cancelable)e.preventDefault();return}var dy=ts.y-e.touches[0].clientY,dx=ts.x-e.touches[0].clientX;if(!ts.mode){if(Math.abs(dy)<6&&Math.abs(dx)<6)return;if(Math.abs(dx)>Math.abs(dy)){ts=null;return}ts.d=dy>0?1:-1;ts.mode=(!anim&&inFree(ts.I,lenis.scroll,ts.d))?2:1}if(ts.mode===1&&e.cancelable)e.preventDefault()},{passive:false});
addEventListener("touchend",function(e){if(!ts)return;var s=ts;ts=null;if(s.dead||s.mode!==1||anim)return;var dy=s.y-(e.changedTouches[0]||{}).clientY,fast=performance.now()-s.t<300;if(Math.abs(dy)<(fast?24:50))return;var t=next(s.I,lenis.scroll,dy>0?1:-1);if(t!=null)go(t)},{passive:true});
function settle(){if(ts)return;if(!ok()||anim||typing())return;var I=info();if(!I)return;var y=lenis.scroll,i;for(i=0;i<I.fr.length;i++)if(y>I.fr[i][0]-2&&y<I.fr[i][1]+2)return;for(i=0;i<I.st.length;i++)if(Math.abs(I.st[i]-y)<3)return;
var lo=null,hi=null;I.st.forEach(function(s){if(s<=y)lo=s;else if(hi==null)hi=s});var d=lenis.direction||1,t;
if(lo==null)t=hi;else if(hi==null)t=lo;else{var p=(y-lo)/(hi-lo);t=d>0?(p>.12?hi:lo):(p<.88?lo:hi)}if(t!=null)go(t)}
lenis.on("scroll",function(){if(TOUCHY)lkSync();if(anim)return;clearTimeout(idle);idle=setTimeout(settle,180)});
addEventListener("keydown",function(e){if(!ok()||/INPUT|TEXTAREA|SELECT/.test((e.target||{}).tagName||""))return;var d=({ArrowDown:1,PageDown:1," ":1,ArrowUp:-1,PageUp:-1})[e.key];if(!d)return;var I=info();if(!I||(!anim&&inFree(I,lenis.scroll,d)))return;e.preventDefault();if(anim)return;var t=next(I,lenis.scroll,d);if(t!=null)go(t)});
})();
