/* ---- scene B: the barrier ---- */
function person(p,x,y,c){var g=S("g",{transform:"translate("+x+" "+y+")"},p);S("circle",{r:32,fill:c,stroke:"#1b1b33","stroke-width":3},g);S("circle",{cy:-8,r:9,fill:"#1b1b33"},g);S("path",{d:"M-16 18a16 14 0 0 1 32 0",class:"ic",fill:"#1b1b33"},g);return g}
function uni(p,x,y,c){var g=S("g",{transform:"translate("+x+" "+y+")",opacity:.9},p);S("path",{d:"M-52 -12L0 -50L52 -12Z",class:"ic",fill:c||"#fff"},g);[-34,-11,11,34].forEach(function(cx){S("path",{d:"M"+cx+" -2V36",class:"ic"},g)});S("path",{d:"M-58 44H58",class:"ic"},g);return g}
function sceneB(mob){var vw=$("#vB")[0],W=mob?600:1200,H=mob?900:560,st=stage(vw,W,H,mob?250:320),s=st.s;
var d=mob?"M300 150C120 240 480 300 300 400S120 560 300 650":"M150 400C300 400 330 280 450 320S600 480 700 410S850 290 940 350",
g=mob?d+"S300 700 300 712":d+"S1010 380 1040 350",end=mob?[300,650]:[940,350];
S("path",{d:g,class:"gh"},s);var path=S("path",{d:d,class:"wr",pathLength:1,style:"stroke-dasharray:1 1.5"},s);
person(s,mob?300:110,mob?100:400,"#ff9fb0");uni(s,mob?300:1090,mob?760:330,"#fff");
var wall=S("rect",mob?{x:190,y:674,width:220,height:22,rx:4,fill:"#1b1b33"}:{x:978,y:240,width:24,height:220,rx:4,fill:"#1b1b33"},s);
var x1=S("path",{d:"M"+(end[0]-14)+" "+(end[1]-14)+"L"+(end[0]+14)+" "+(end[1]+14)+"M"+(end[0]+14)+" "+(end[1]-14)+"L"+(end[0]-14)+" "+(end[1]+14),class:"wr",style:"stroke:#d93a55;stroke-width:6"},s);
var dot=S("circle",{r:10,class:"hd2",cx:mob?300:150,cy:mob?150:400},s);
var obs=mob?[["Tuition fees",26,29,"sun",-4],["Living costs",74,47,"rs",3],["Visas &amp; travel",30,64,"tl",-3]]:[["Tuition fees",35,40,"sun",-4],["Living costs",52,87,"rs",3],["Visas &amp; travel",71,34,"tl",-3]],
cards=obs.map(function(o){return obj(o[0],o[1],o[2],o[4],o[3],"",st.b)}),
cap=obj("The road ends where the money runs out",50,mob?95:100,0,"cap","background:#1b1b33;color:#fff;box-shadow:none;white-space:normal;text-align:center;width:min(80vw,440px)",st.b);
var L=path.getTotalLength(),fr=obs.map(function(o){return fracAt(path,[o[1]/100*W,o[2]/100*H])});
G.set(path,{strokeDashoffset:1.001});G.set([wall,x1],pop());G.set(wall,{scaleY:0,scaleX:1,opacity:0,transformOrigin:"50% 100%"});G.set(cards,{opacity:0,y:20,scale:.8});G.set(cap,{opacity:0,y:20});G.set(dot,{opacity:0});
var s0=.1,o={p:0},tl=G.timeline({defaults:{ease:"none"},onUpdate:function(){clampCards(cards.concat([cap]))}});
tl.to(path,{strokeDashoffset:0,duration:1},s0).to(dot,{opacity:1,duration:.03},s0).to(o,{p:1,duration:1,onUpdate:function(){var q=path.getPointAtLength(L*o.p);dot.setAttribute("cx",q.x);dot.setAttribute("cy",q.y)}},s0);
cards.forEach(function(c,i){tl.to(c,{opacity:1,y:0,scale:1,duration:.12,ease:"back.out(2)"},s0+Math.max(0,fr[i]-.04))});
tl.set(wall,{opacity:1},s0+1).to(wall,{scaleY:1,duration:.1,ease:"back.out(2)"},s0+1).to(x1,{scale:1,duration:.08,ease:"back.out(3)"},s0+1.05).to(cap,{opacity:1,y:0,duration:.12},s0+1.12).to({},{duration:.3});clampCards(cards.concat([cap]),1);return tl}
