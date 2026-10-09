(function(){
var pages=['index','about','skills','projects','interests','contact'];
var c=document.getElementById('clock');
function tick(){if(c)c.textContent=new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false})}
tick();setInterval(tick,1000);
document.addEventListener('keydown',function(e){
if(e.repeat||e.ctrlKey||e.metaKey||e.altKey||e.shiftKey)return;
var t=e.target&&e.target.tagName;if(t==='INPUT'||t==='TEXTAREA'||t==='SELECT'||(e.target&&e.target.isContentEditable))return;
var m=/^(?:Digit|Numpad)([1-6])$/.exec(e.code||'')||/^([1-6])$/.exec(e.key||'');
if(!m)return;e.preventDefault();
var f=pages[parseInt(m[1],10)-1]+'.html';
if(location.pathname.split('/').pop()===f)return;
location.href=f})
})();
