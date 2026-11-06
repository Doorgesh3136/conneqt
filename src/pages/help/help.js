/* help centre tabs + search */
var hcat="donor",sq=$("#sq")[0];
function hf(){var v=(sq.value||"").toLowerCase().trim(),n=0;$("#fq .q").forEach(function(q){var m=q.dataset.cat===hcat&&(!v||q.textContent.toLowerCase().indexOf(v)>-1);q.style.display=m?"":"none";if(m)n++});$("#nq")[0].style.display=n?"none":"block"}
$(".htb button").forEach(function(b){b.addEventListener("click",function(){hcat=b.dataset.cat;$(".htb button").forEach(function(x){x.classList.toggle("on",x===b);x.setAttribute("aria-selected",x===b)});hf();if(FX&&ST)ST.refresh()})});
sq.addEventListener("input",hf);hf();
