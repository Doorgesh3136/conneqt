/* ---- added: reveals for the new sections (same motion language as the rest of the site) ---- */
function stx(t,s){return {trigger:t,start:s||"top 85%",refreshPriority:-1}}
function countUp(el){var to=+el.dataset.n,p=el.dataset.p||"",su=el.dataset.s||"",o={v:0};G.to(o,{v:to,duration:1.6,ease:"power2.out",onUpdate:function(){el.textContent=p+Math.round(o.v)+su},scrollTrigger:stx(el,"top bottom")})}
function extras(r){
$("[data-deal]",r).forEach(function(g){G.fromTo(g.children,{y:40,opacity:0},{y:0,opacity:1,duration:1.3,ease:"expo.out",stagger:.1,scrollTrigger:stx(g)})});
$("[data-n]",r).forEach(countUp);
$(".gp li",r).forEach(function(li){var t=G.timeline({scrollTrigger:stx(li,"top 90%")});t.fromTo($(".ln",li),{scaleX:0},{scaleX:1,duration:1.2,ease:"expo.inOut"}).fromTo($("em,span,.gck",li),{y:24,opacity:0},{y:0,opacity:1,duration:1.1,ease:"expo.out",stagger:.06},"-=.8")});
$(".ceo",r).forEach(function(c){var t=G.timeline({scrollTrigger:stx(c,"top 85%")});t.fromTo($(".ceoc",c),{y:50,opacity:0},{y:0,opacity:1,duration:1.3,ease:"expo.out"}).fromTo($(".ceoi img",c),{scale:1.15},{scale:1,duration:1.8,ease:"expo.out"},0)});
$(".jri",r).forEach(function(p){G.fromTo(p,{y:60,opacity:0,rotation:-3},{y:0,opacity:1,rotation:0,duration:1.4,ease:"expo.out",scrollTrigger:stx(p,"top 85%")})});
$(".qt,.goal",r).forEach(function(q){G.fromTo(q,{y:40,opacity:0},{y:0,opacity:1,duration:1.3,ease:"expo.out",scrollTrigger:stx(q)})});
}
var _Pp=P.problem;P.problem=function(r){_Pp(r);extras(r)};
var _Ph=P.how;P.how=function(r){_Ph(r);extras(r);fragSet(r)};
P.partners=extras;P.early=extras;
