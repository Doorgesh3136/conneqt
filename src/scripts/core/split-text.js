/* split text */
function mk(t){var w=document.createElement("span");w.className="w";var i=document.createElement("span");i.className="i";i.textContent=t;w.appendChild(i);return w}
function walk(el,fn){Array.prototype.slice.call(el.childNodes).forEach(function(c){if(c.nodeType==3){var f=document.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(function(t){if(!t)return;if(/^\s+$/.test(t)){f.appendChild(document.createTextNode(" "));return}f.appendChild(fn(t))});el.replaceChild(f,c)}else if(c.nodeType==1&&c.className.indexOf("w")!==0&&c.className.indexOf("sw")!==0&&c.className.indexOf("rot")<0)walk(c,fn)})}
$("[data-split]").forEach(function(el){walk(el,mk)});
$("[data-scrub]").forEach(function(el){walk(el,function(t){var s=document.createElement("span");s.className="sw";s.textContent=t;return s})});
$("[data-chars]").forEach(function(el){var t=el.textContent;el.textContent="";t.split("").forEach(function(ch){var w=document.createElement("span");w.className="c";var i=document.createElement("span");i.className="i";i.innerHTML=ch==" "?"&nbsp;":ch;w.appendChild(i);el.appendChild(w)})});
