/* ---- scene D: globe and pins ---- */
function sceneD(){var vw=$("#vD")[0],W=800,st=stage(vw,W,W,innerWidth>=900&&innerHeight>=560?110:390,"860px"),s=st.s,gl=document.createElement("img");gl.alt="A stack of books, an open book and a globe";gl.src=$(".stk")[0].src;gl.style.cssText="position:absolute;left:50%;top:50%;width:36%;will-change:transform";G.set(gl,{xPercent:-50,yPercent:-50});st.b.appendChild(gl);
var PIN="M0 -24C-13 -24 -17 -9 -17 -2C-17 11 0 26 0 26S17 11 17 -2C17 -9 13 -24 0 -24Z",wires=[],pins=[];
for(var i=0;i<10;i++){var a=i/10*Math.PI*2-1.2,r=i%2?300:345,x=400+Math.cos(a)*r,y=400+Math.sin(a)*r,sx=400+Math.cos(a)*190,sy=400+Math.sin(a)*190,mx=(sx+x)/2+Math.sin(a)*40,my=(sy+y)/2-Math.cos(a)*40;
wires.push(S("path",{d:"M"+sx+" "+sy+"Q"+mx+" "+my+" "+x+" "+(y+22),class:"wr wh",pathLength:1,style:"stroke-dasharray:1 1.5;stroke-width:3"},s));
var g=S("g",{transform:"translate("+x+" "+y+")"},s),pi=S("g",{},g);S("path",{d:PIN,fill:["#ffcf3f","#ff9fb0","#62d2c6","#fbf6ef"][i%4],stroke:"#1b1b33","stroke-width":3},pi);S("circle",{r:6,cy:-3,fill:"#1b1b33"},pi);pins.push(pi)}
var ring=S("circle",{cx:400,cy:400,r:230,fill:"none",stroke:"rgba(255,255,255,.35)","stroke-width":2,"stroke-dasharray":"2 10","stroke-linecap":"round"},s);
G.set(wires,{strokeDashoffset:1.001});G.set(pins,pop());
var tl=G.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:"#sD",pin:true,scrub:1,start:"top top",end:"+=200%",anticipatePin:1,invalidateOnRefresh:true}});
tl.fromTo(gl,{rotation:-10,scale:.9},{rotation:10,scale:1.05,duration:1.2},0).to(ring,{rotation:90,transformOrigin:"50% 50%",duration:1.2},0);
pins.forEach(function(p,i){tl.to(wires[i],{strokeDashoffset:0,duration:.14},.06+i*.08).to(p,{scale:1,duration:.1,ease:"back.out(3)"},.15+i*.08)});tl.to({},{duration:.25})}
