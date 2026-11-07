/* become-a-donor: two steps */
var df=$("#df")[0],s1=$('[data-step="1"]',df)[0],s2=$('[data-step="2"]',df)[0],dots=$(".dsteps span"),der=$(".er",df)[0];
function step(n){s1.hidden=n!==1;s2.hidden=n!==2;dots.forEach(function(d,i){d.classList.toggle("on",i<n)});der.textContent="";if(G&&FX)G.fromTo(n==1?s1:s2,{opacity:0,y:24},{opacity:1,y:0,duration:.8,ease:"expo.out"});var f=$("input",n==1?s1:s2)[0];if(f)f.focus({preventScroll:true});fitPage();if(FX&&ST)ST.refresh()}
$("#dnx")[0].addEventListener("click",function(){var bad=[];$("[required]",s1).forEach(function(i){var ok=i.checkValidity();i.closest(".f").classList.toggle("bad",!ok);if(!ok)bad.push(i)});if(bad.length){der.textContent="Please complete the highlighted fields.";bad[0].focus();return}step(2)});
$("#dbk")[0].addEventListener("click",function(){step(1)});
$("input",s1).forEach(function(i){i.addEventListener("keydown",function(e){if(e.key==="Enter"){e.preventDefault();$("#dnx")[0].click()}})});
form(df,"#dok",{s:"Become a donor — ConneQt"});
/* some in-app browsers cannot open a mail app: the same subject and body can be copied and sent by hand */
var okc=$("#dok .okc")[0],okT=0;if(okc)okc.addEventListener("click",function(){var u=$("#dok a.btn")[0].getAttribute("href"),q={},to=decodeURIComponent(u.replace(/^mailto:/,"").split("?")[0]);(u.split("?")[1]||"").split("&").forEach(function(kv){var i=kv.indexOf("=");if(i>0)q[kv.slice(0,i)]=decodeURIComponent(kv.slice(i+1))});var t="To: "+to+"\nSubject: "+(q.subject||"")+"\n\n"+(q.body||"");
function fb(){var ta=document.createElement("textarea"),ok=false;ta.value=t;ta.setAttribute("readonly","");ta.style.cssText="position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;font-size:16px";document.body.appendChild(ta);ta.select();try{ta.setSelectionRange(0,t.length);ok=document.execCommand("copy")}catch(e){}ta.remove();okc.focus({preventScroll:true});return ok}
function said(ok){okc.textContent=ok?"Copied":"Copy failed";clearTimeout(okT);okT=setTimeout(function(){okc.textContent="Copy details"},2200)}
try{if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(t).then(function(){said(true)},function(){said(fb())});else said(fb())}catch(e){said(fb())}});
