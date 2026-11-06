/* become-a-donor: two steps */
var df=$("#df")[0],s1=$('[data-step="1"]',df)[0],s2=$('[data-step="2"]',df)[0],dots=$(".dsteps span"),der=$(".er",df)[0];
function step(n){s1.hidden=n!==1;s2.hidden=n!==2;dots.forEach(function(d,i){d.classList.toggle("on",i<n)});der.textContent="";if(G&&FX)G.fromTo(n==1?s1:s2,{opacity:0,y:24},{opacity:1,y:0,duration:.8,ease:"expo.out"});var f=$("input",n==1?s1:s2)[0];if(f)f.focus({preventScroll:true});fitPage();if(FX&&ST)ST.refresh()}
$("#dnx")[0].addEventListener("click",function(){var bad=[];$("[required]",s1).forEach(function(i){var ok=i.checkValidity();i.closest(".f").classList.toggle("bad",!ok);if(!ok)bad.push(i)});if(bad.length){der.textContent="Please complete the highlighted fields.";bad[0].focus();return}step(2)});
$("#dbk")[0].addEventListener("click",function(){step(1)});
$("input",s1).forEach(function(i){i.addEventListener("keydown",function(e){if(e.key==="Enter"){e.preventDefault();$("#dnx")[0].click()}})});
form(df,"#dok",{s:"Become a donor — ConneQt"});
