if(matchMedia("(hover:hover)").matches)$(".rbw").forEach(function(w){var b=$(".rb",w)[0];w.addEventListener("pointermove",function(e){var r=w.getBoundingClientRect();G.to(b,{x:(e.clientX-r.left-r.width/2)*.28,y:(e.clientY-r.top-r.height/2)*.28,duration:.6,ease:"power3.out",overwrite:"auto"})});w.addEventListener("pointerleave",function(){G.to(b,{x:0,y:0,duration:1.1,ease:"elastic.out(1,.4)",overwrite:"auto"})})});
/* every donor button, on every page, from the first press */
$(".rb").forEach(function(b){b.addEventListener("pointerdown",function(e){confetti(e.clientX,e.clientY,26)})});
