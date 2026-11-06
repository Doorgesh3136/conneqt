/* ---- scene C: the bridge ---- */
var HEART="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z",CAP="M2 9l10-5 10 5-10 5-10-5zm4 3.5V17c0 1.5 3 3 6 3s6-1.5 6-3v-4.5l-6 3-6-3z",COL=["#ffcf3f","#ff9fb0","#fbf6ef","#a6d3ff","#ffcf3f"];
var ICO={pencil:"M3 21l3.5-1 12-12-2.5-2.5-12 12L3 21zM15 7l2.5 2.5",book:"M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5zM6 19h13",paper:"M6 3h9l4 4v14H6V3zM15 3v4h4M9 12h7M9 16h7",cap:"M2 9l10-5 10 5-10 5-10-5zm4 3.5V17c0 1.5 3 3 6 3s6-1.5 6-3v-4.5",bulb:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.3 1 2.1h5c0-.8.4-1.6 1-2.1A6 6 0 0 0 12 3z",star:"M12 3l2.6 5.6 6 .7-4.4 4.1 1.2 6L12 16.5 6.6 19.4l1.2-6L3.4 9.3l6-.7L12 3z"};
function confetti(x,y,n){if(!FX)return;var cols=["#ffcf3f","#ff9fb0","#62d2c6","#2f5be7","#1b1b33","#a6d3ff"],rnd=G.utils.random;for(var i=0;i<n;i++){(function(){var d=document.createElement("i");d.style.cssText="position:fixed;left:"+x+"px;top:"+y+"px;width:"+rnd(6,11)+"px;height:"+rnd(10,18)+"px;background:"+cols[i%6]+";z-index:260;pointer-events:none;border-radius:2px";document.body.appendChild(d);G.timeline({onComplete:function(){d.remove()}}).to(d,{x:rnd(-240,240),y:rnd(-280,-40),rotation:rnd(-540,540),duration:.75,ease:"power3.out"}).to(d,{y:"+=380",opacity:0,rotation:"+=200",duration:1.1,ease:"power1.in"})})()}}
function badge(p,x,y,c,glyph){var g=S("g",{transform:"translate("+x+" "+y+")"},p),i=S("g",{},g);S("circle",{r:30,fill:c,stroke:"#1b1b33","stroke-width":3},i);S("path",{d:glyph,transform:"translate(-12 -12)",fill:"#1b1b33"},i);return i}
function sceneC(mob){var vw=$("#vC")[0],W=mob?600:1200,H=mob?900:600,st=stage(vw,W,H,mob?260:300),s=st.s,hub=mob?{x:300,y:450}:{x:600,y:300},ys=[0,1,2,3,4],
pos=function(i,side){var t=mob?[80,190,300,410,520][i]:[90,195,300,405,510][i];return mob?{x:t,y:side?800:100}:{x:side?1090:110,y:t}};
var wires=[],don=[],stu=[],coins=[];
ys.forEach(function(i){var a=pos(i,0),b=pos(i,1);
var d1=mob?"M"+a.x+" "+(a.y+30)+"C"+a.x+" 250 300 280 300 395":"M"+(a.x+30)+" "+a.y+"C360 "+a.y+" 380 300 480 300";
var d2=mob?"M300 505C300 620 "+b.x+" 640 "+b.x+" "+(b.y-30):"M720 300C820 300 840 "+b.y+" "+(b.x-30)+" "+b.y;
wires.push([S("path",{d:d1,class:"wr",pathLength:1,style:"stroke-dasharray:1 1.5"},s),S("path",{d:d2,class:"wr br",pathLength:1,style:"stroke-dasharray:1 1.5"},s)])});
ys.forEach(function(i){var a=pos(i,0),b=pos(i,1);don.push(badge(s,a.x,a.y,COL[i],HEART));stu.push(badge(s,b.x,b.y,COL[(i+2)%5],CAP))});
var hg=S("g",{transform:"translate("+(hub.x-120)+" "+(hub.y-55)+")"},s),hb=S("g",{},hg);S("rect",{width:240,height:110,rx:30,fill:"#fbf6ef",stroke:"#1b1b33","stroke-width":3.5},hb);var lg=S("svg",{x:28,y:30,width:184,height:50,viewBox:"0 0 149.785 40",fill:"#1b1b33"},hb);S("use",{href:"#cq"},lg);
var vb=S("g",{transform:"translate("+(hub.x+110)+" "+(hub.y-50)+")"},s),vi=S("g",{},vb);S("circle",{r:22,fill:"#ffcf3f",stroke:"#1b1b33","stroke-width":3},vi);S("path",{d:"M-9 1l6 6 12-13",class:"ic"},vi);
var checks=stu.map(function(g,i){var p=pos(i,1),c=S("g",{transform:"translate("+(p.x+24)+" "+(p.y-24)+")"},s),ci=S("g",{},c);S("circle",{r:13,fill:"#62d2c6",stroke:"#1b1b33","stroke-width":2.5},ci);S("path",{d:"M-5 0l4 4 7-8",class:"ic",style:"stroke-width:2.5"},ci);return ci});
ys.forEach(function(i){coins.push(S("circle",{r:8,fill:"#ffcf3f",stroke:"#1b1b33","stroke-width":2.5},s),S("circle",{r:8,fill:"#ffcf3f",stroke:"#1b1b33","stroke-width":2.5},s))});
var sp=$("#sC .stps span");G.set(sp,{opacity:0,y:10});G.set(sp[0],{opacity:1,y:0});
G.set(don.concat(stu,[hb,vi],checks),pop());G.set(wires.reduce(function(a,w){return a.concat(w)},[]),{strokeDashoffset:1.001});G.set(coins,{opacity:0});
var tl=G.timeline({defaults:{ease:"none"}});
function step(i,t){if(i)tl.to(sp[i-1],{opacity:0,y:-10,duration:.05},t);tl.fromTo(sp[i],{opacity:0,y:10},{opacity:1,y:0,duration:.06},t)}
step(1,.4);step(2,.6);step(3,.88);
ys.forEach(function(i){var w=wires[i],c1=coins[i*2],c2=coins[i*2+1],p1={p:0},p2={p:0};
tl.to(don[i],{scale:1,duration:.1,ease:"back.out(2.5)"},.02+i*.04).to(w[0],{strokeDashoffset:0,duration:.22},.1+i*.04)
.set(c1,{opacity:1},.12+i*.04).to(p1,{p:1,duration:.24,onUpdate:function(){var q=w[0].getPointAtLength(w[0].getTotalLength()*p1.p);c1.setAttribute("cx",q.x);c1.setAttribute("cy",q.y)}},.12+i*.04).set(c1,{opacity:0},.38+i*.04)
.to(w[1],{strokeDashoffset:0,duration:.22},.62+i*.03).to(stu[i],{scale:1,duration:.1,ease:"back.out(2.5)"},.74+i*.03)
.set(c2,{opacity:1},.64+i*.03).to(p2,{p:1,duration:.24,onUpdate:function(){var q=w[1].getPointAtLength(w[1].getTotalLength()*p2.p);c2.setAttribute("cx",q.x);c2.setAttribute("cy",q.y)}},.64+i*.03).set(c2,{opacity:0},.9+i*.03)
.to(checks[i],{scale:1,duration:.08,ease:"back.out(3)"},.92+i*.03)});
tl.to(hb,{scale:1,duration:.12,ease:"back.out(2)"},.4).to(vi,{scale:1,duration:.1,ease:"back.out(3)"},.54).to({},{duration:.2});return tl}
