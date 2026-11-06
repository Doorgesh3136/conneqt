/* ---- scene E: the road stays open ---- */
function sceneE(mob){var vw=$("#vE")[0],W=mob?600:1200,H=mob?900:450,st=stage(vw,W,H,mob?260:250),s=st.s;
var d=mob?"M300 130C130 220 470 270 300 360S130 540 300 620S450 720 320 800":"M110 330C260 330 300 190 470 190S660 320 800 290S960 130 1070 140";
S("path",{d:d,class:"gh"},s);var path=S("path",{d:d,class:"wr br",pathLength:1,style:"stroke-dasharray:1 1.5"},s),L=path.getTotalLength();
var fr=[.02,.36,.68,.98],lab=["Enrol","Study","Pass exams","Graduate"],ik=["pencil","book","paper","cap"],cl=["#ffcf3f","#62d2c6","#ff9fb0","#ffcf3f"],cls=["sun","tl","rs","sun"],ms=[],tgs=[],end;
fr.forEach(function(f,i){var q=path.getPointAtLength(L*f);if(i==3)end=q;var g=S("g",{transform:"translate("+q.x+" "+q.y+")"},s),m=S("g",{},g);S("circle",{r:26,fill:cl[i],stroke:"#1b1b33","stroke-width":3},m);S("path",{d:ICO[ik[i]],transform:"translate(-12 -12)",class:"ic",style:i==3?"fill:#1b1b33":""},m);ms.push(m);
tgs.push(obj(lab[i],q.x/W*100+(mob?(q.x>300?-1:1)*(innerWidth<380?30:19):0),q.y/H*100+(mob?0:(i%2?-11:11)),i%2?2:-2,cls[i],"",st.b))});
var dot=S("circle",{r:11,class:"hd2",cx:mob?300:110,cy:mob?130:330},s);
var capg=S("g",{transform:"translate("+end.x+" "+(end.y-4)+")"},s),ci=S("g",{},capg);S("path",{d:ICO.cap,transform:"translate(-29 -29) scale(2.4)",fill:"#1b1b33",stroke:"#1b1b33","stroke-width":.6,"stroke-linejoin":"round"},ci);
var cc=["#ffcf3f","#ff9fb0","#62d2c6","#2f5be7","#1b1b33","#fbf6ef"],cfs=[],rnd=G.utils.random;
for(var i=0;i<26;i++)cfs.push(D("cf","","left:"+end.x/W*100+"%;top:"+end.y/H*100+"%;background:"+cc[i%6],st.b));
G.set(path,{strokeDashoffset:1.001});G.set(ms,pop());G.set(tgs,{opacity:0,y:14,scale:.85});G.set(ci,pop());G.set(dot,{opacity:0});G.set(cfs,{scale:0});
var s0=.08,o={p:0},tl=G.timeline({defaults:{ease:"none"},onUpdate:function(){clampCards(tgs)}});
tl.to(path,{strokeDashoffset:0,duration:1},s0).to(dot,{opacity:1,duration:.03},s0).to(o,{p:1,duration:1,onUpdate:function(){var q=path.getPointAtLength(L*o.p);dot.setAttribute("cx",q.x);dot.setAttribute("cy",q.y)}},s0).to(dot,{opacity:0,duration:.04},s0+.96);
fr.forEach(function(f,i){var a=s0+f;tl.to(ms[i],{scale:1,duration:.08,ease:"back.out(3)"},Math.max(0,a-.02)).to(tgs[i],{opacity:1,y:0,scale:1,duration:.1,ease:"back.out(2)"},a)});
tl.to(ci,{scale:1,duration:.05,ease:"back.out(3)"},s0+1).to(ci,{y:-130,rotation:540,duration:.2,ease:"power2.out"},s0+1.05).to(ci,{y:0,rotation:720,duration:.2,ease:"bounce.out"},s0+1.25);
cfs.forEach(function(c){tl.to(c,{scale:1,x:rnd(-170,170),y:rnd(-210,-40),rotation:rnd(-360,360),duration:.2,ease:"power2.out"},s0+1.08).to(c,{y:"+=240",opacity:0,duration:.28,ease:"power1.in"},s0+1.28)});
tl.to({},{duration:.3});clampCards(tgs,1);return tl}
