/* loader: a sunrise over many languages */
var words=["Education","Éducation","Educación","शिक्षा","التعليم","教育","Ledikasyon"],wl=["en","fr","es","hi","ar","zh","mfe"],lw=$(".lw2")[0],N=words.length,T=.44;
function done(){loading=false;scrollTo(0,0);if(lenis){lenis.scrollTo(0,{immediate:true,force:true});lenis.start()}heroIn();lkAfter()}
if(ld)ld.style.animation="none";
if(!ld)done();else{
words.forEach(function(w,i){var s=document.createElement("span");s.textContent=w;s.lang=wl[i];if(wl[i]==="ar")s.dir="rtl";lw.appendChild(s)});
var ws=$(".lw2 span"),cnt=$("#cnt")[0],c={v:0},W=innerWidth,sun=$(".lsun")[0],bds=[],lu=$(".lu path")[0],rnd=G.utils.random;
G.set("#pt",{display:"block"});G.set(pb,{yPercent:0});G.set(pc,{opacity:0});
for(var i=0;i<5;i++){var bd=S("svg",{viewBox:"0 0 44 18","aria-hidden":"true",class:"bd"},ld);S("path",{d:"M2 15Q12 -3 22 13Q32 -3 42 15",fill:"none",stroke:"#1b1b33","stroke-width":3,"stroke-linecap":"round","stroke-linejoin":"round"},bd);bd.style.cssText="position:absolute;left:0;top:"+(9+i*10)+"%;width:"+(28+i*7)+"px";bd.firstChild.style.animationDelay=(i*.08)+"s";bds.push(bd)}
var kk=["pencil","book","cap","bulb","star","paper","pencil","book"],ics=kk.map(function(k,i){var d=D("li","","left:"+(6+i*11.5)+"%;top:70%;width:"+rnd(26,40)+"px;height:"+rnd(26,40)+"px;opacity:0",null);d.innerHTML='<svg viewBox="0 0 24 24"><path d="'+ICO[k]+'"/></svg>';ld.insertBefore(d,lw);return d});
G.set(ws,{yPercent:130});G.set(sun,{yPercent:104});G.set(".lgf",{xPercent:-50,yPercent:-50});
bds.forEach(function(bd,i){G.fromTo(bd,{x:-90},{x:W+90,duration:3.8+i*.3,delay:.1+i*.32,ease:"none",repeat:-1});G.to(bd,{y:i%2?-22:22,duration:.8+i*.12,yoyo:true,repeat:-1,ease:"sine.inOut"})});
ics.forEach(function(d,i){G.fromTo(d,{y:0,opacity:0,rotation:-25},{y:-rnd(180,320),opacity:.85,rotation:rnd(10,40),duration:rnd(2.6,3.6),delay:.3+i*.28,ease:"sine.out"});G.to(d,{opacity:0,duration:.8,delay:1.8+i*.28})});
function setc(v){if(cnt)cnt.textContent=Math.round(v)}
var tl=G.timeline({delay:.15,onComplete:function(){G.killTweensOf(bds);G.killTweensOf(ics);ld.remove();G.set("#pt",{display:"none"})}});
tl.fromTo(sun,{yPercent:104},{yPercent:26,duration:N*T+1,ease:"power2.out"},0).to(c,{v:92,duration:N*T+.8,ease:"none",onUpdate:function(){setc(c.v)}},0);
ws.forEach(function(w,i){tl.to(w,{yPercent:0,duration:.38,ease:"expo.out"},i*T);tl.to(w,{yPercent:-130,duration:.28,ease:"expo.in"},i*T+.36);});tl.set(lu,{opacity:1},.12).fromTo(lu,{strokeDashoffset:1.001},{strokeDashoffset:0,duration:.6,ease:"power2.out",immediateRender:false},.12).to(lu,{strokeDashoffset:-1.001,duration:.45,ease:"power2.in"},(N-1)*T+.3).set(lu,{opacity:0},(N-1)*T+.76);
tl.fromTo(".lgf",{opacity:0,y:30,scale:.94},{opacity:1,y:0,scale:1,duration:.8,ease:"expo.out"},N*T+.12);
tl.addPause(N*T+1.05,function(){if(document.readyState==="complete")tl.play();else{addEventListener("load",function(){tl.play()});setTimeout(function(){tl.play()},6000)}});
tl.to(".lu",{opacity:0,duration:.3},">").add(function(){G.killTweensOf(ics);G.to(ics,{opacity:0,duration:.4})},"<")
.to(".lgf",{width:function(){return Math.min(innerWidth*.84,1300)},top:"50%",duration:1,ease:"expo.inOut"},"<")
.to(".lbr",{opacity:0,y:24,duration:.5,ease:"power2.in"},"<")
.to(sun,{yPercent:8,scale:1.1,duration:1,ease:"expo.inOut"},"<")
.to(bds,{opacity:0,duration:.5},"<")
.add(function(){var g=$(".lgf")[0];g.style.position="fixed";g.style.zIndex=320;document.body.appendChild(g)},">+.3")
.to(".lgf",{left:function(){var n=$("#nv .logo")[0].getBoundingClientRect();return n.left+n.width/2},top:function(){var n=$("#nv .logo")[0].getBoundingClientRect();return n.top+n.height/2},width:function(){return $("#nv .logo")[0].getBoundingClientRect().width},duration:1.3,ease:"power3.inOut"},">")
.to(ld,{yPercent:-100,duration:1.1,ease:"expo.inOut"},"<+.15")
.to(pb.slice().reverse(),{yPercent:-100,duration:1,ease:"expo.inOut",stagger:.1},"<+.14").call(done,null,"-=.95").call(function(){var g=$("body>.lgf")[0];if(g)g.remove()});
}
