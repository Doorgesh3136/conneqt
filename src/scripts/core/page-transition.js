var pb=$("#pt .pb"),ptt=$("#ptt")[0],pw=$("#pt .pwrap path")[0],pcl=$("#pt .pcl")[0],pc=$("#pt .pc")[0];
function pTitle(name){ptt.innerHTML="";var t=titles[name].split(" ");t.forEach(function(w,i){var s=mk(w);if(i==t.length-1)s.firstChild.classList.add("sx");ptt.appendChild(s);ptt.appendChild(document.createTextNode(" "))})}
function cover(name,mid,after){busy=true;lkHold();if(lenis)lenis.stop();pTitle(name);var ti=$("#ptt .i");G.set("#pt",{display:"block"});G.set(pb,{yPercent:100});G.set(pc,{opacity:1});G.set(ti,{yPercent:115});G.set(pw,{strokeDashoffset:1.001});G.set(pcl,{opacity:0});
var o={p:0},CT=G.timeline({onComplete:function(){busy=false;lkAfter();if(pend&&pend!==cur){var n=pend;pend=null;navigate(n,1)}else pend=null}});CT
.to(pb,{yPercent:0,duration:.85,ease:"expo.inOut",stagger:.09})
.to(ti,{yPercent:0,duration:.9,stagger:.07,ease:"expo.out"},"-=.55")
.to(pw,{strokeDashoffset:0,duration:.9,ease:"power2.inOut"},"<+.2").set(pcl,{opacity:1},"<")
.to(o,{p:1,duration:.9,ease:"power2.inOut",onUpdate:function(){var q=pw.getPointAtLength(pw.getTotalLength()*o.p);pcl.style.left=q.x/400*100+"%";pcl.style.top=q.y/40*100+"%"}},"<")
.call(function(){CT.pause();requestAnimationFrame(function(){mid();requestAnimationFrame(function(){CT.resume()})})},null,">-.15")
.to(pc,{opacity:0,y:-20,duration:.35,ease:"power2.in"},">+.15")
.to(pb.slice().reverse(),{yPercent:-100,duration:.9,ease:"expo.inOut",stagger:.09},">-.1")
.call(after,null,"-=.8").set("#pt",{display:"none"})}
var lkHold=function(){},lkAfter=function(){};var pend=null;/* while a wipe or the intro is running, a navigation waits its turn and plays once they have finished */
function held(){return busy||loading||(!!ld&&ld.isConnected)}function navigate(name,pop){if(held()){pend=name;return}pend=null;var same=routes[name]===routes[cur];try{if(location.hash!=="#"+name){if(pop)history.replaceState(null,"","#"+name);else history.pushState(null,"","#"+name)}}catch(e){}
if(!FX){show(name);build(name);return}
if(same&&cur){show(name);scrollTo(0,0);if(lenis)lenis.scrollTo(0,{immediate:true,force:true});ST.refresh();return}
cover(name,function(){show(name);build(name)},function(){if(lenis)lenis.start();heroIn();lkAfter()})}
document.addEventListener("click",function(e){var a=e.target.closest('a[href^="#"]');if(!a)return;var n=a.getAttribute("href").slice(1);if(routes[n]){e.preventDefault();if(mn.classList.contains("open"))tg(false);navigate(n)}});
function onHist(){var n=location.hash.slice(1)||"home";if(!routes[n])return;if(mn.classList.contains("open"))tg(false);if(held()){pend=n;return}if(n!==cur)navigate(n,1)}addEventListener("popstate",onHist);addEventListener("hashchange",onHist);
