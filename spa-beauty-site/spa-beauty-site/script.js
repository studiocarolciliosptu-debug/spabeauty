var $=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var P={
spark:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z"/>',
leaf:'<path d="M5 19c0-9 5-14 14-14 0 9-5 14-14 14zM5 19c3-5 6-8 10-10"/>',
hand:'<path d="M7 11V6a1.5 1.5 0 013 0v4M10 10V4.5a1.5 1.5 0 013 0V10M13 10V5.5a1.5 1.5 0 013 0V12M16 9.5a1.5 1.5 0 013 0V14c0 4-3 7-7 7-3 0-5-2-6.5-4.5L3 13a1.5 1.5 0 012.6-1.4L7 13"/>',
kid:'<circle cx="12" cy="12" r="9"/><path d="M8.5 14c1 1.5 2 2 3.5 2s2.5-.5 3.5-2M9 9.5v.01M15 9.5v.01"/>',
heart:'<path d="M12 20s-8-5-8-11a4.5 4.5 0 018-2.5A4.5 4.5 0 0120 9c0 6-8 11-8 11z"/>',
shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
home:'<path d="M4 11l8-7 8 7v9H4zM10 20v-6h4v6"/>',
wa:'<path d="M4 20l1.3-4.2A8 8 0 118 19z"/><path d="M9 9c0 3 3 6 6 6l1-1.5-2-1-1 .8c-1-.4-1.8-1.200-2.200-2.200l.8-1-1-2z"/>',
ig:'<rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.5"/><path d="M17 7v.01"/>',
fb:'<path d="M14 8h2V5h-2.500A3.500 3.500 0 0010 8.500V11H8v3h2v6h3v-6h2.500l.5-3h-3V9a1 1 0 011-1z"/>',
up:'<path d="M12 3v18M3 12h18"/>'};
function I(n,s){return'<svg width="'+(s||26)+'" height="'+(s||26)+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+P[n]+'</svg>'}
function toast(t){var e=$("#toast");e.textContent=t;e.classList.add("on");clearTimeout(toast.t);toast.t=setTimeout(function(){e.classList.remove("on")},2600)}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}


function tile(g,cls){return'<span class="'+(cls||"")+'">'+I(g[3],44)+'</span>'}
$("#dif").innerHTML=DF.map(function(d){return'<div class="card rv"><div class="ico">'+I(d[0])+'</div><h3>'+d[1]+'</h3></div>'}).join("");
$("#home3").innerHTML=[SV[0],SV[2],SV[3]].map(function(s){return'<div class="card rv"><div class="ph" style="--a:'+s.a+';--b:'+s.b+(s.img?';background:url('+s.img+') center/cover':'')+'">'+(s.img?'':I(s.ic,48))+'</div><h3>'+s.id+'</h3><p>'+s.d+'</p><a class="btn o" href="#servicos">Ver detalhes</a></div>'}).join("");
var team=TM.map(function(n){return'<div class="card rv" style="text-align:center"><div class="ico" style="margin:0 auto 12px;border-radius:50%;width:72px;height:72px;font:600 1.8rem Cormorant Garamond,serif">'+n[0]+'</div><h3 style="margin:0">'+n+'</h3><p class="tag" style="margin:0 auto">Integrante do projeto</p></div>'}).join("");
$("#team").innerHTML=team;$("#team2").innerHTML=team;
$("#svc").innerHTML=SV.map(function(s,i){return'<article class="card rv"><div class="ph" style="--a:'+s.a+';--b:'+s.b+(s.img?';background:url('+s.img+') center/cover':'')+'">'+(s.img?'':I(s.ic,52))+'</div><h3>'+s.id+'</h3><p>'+s.d+'</p><ul class="ck">'+s.l.map(function(x){return'<li>'+x+'</li>'}).join("")+'</ul><p><strong>Benefícios:</strong> '+s.b2+'</p><p class="tag">Duração estimada (demonstrativa): '+s.t+'</p><div class="price">'+s.p+' <span class="tag">demonstrativo</span></div><button class="btn" data-sv="'+i+'">Tenho interesse</button></article>'}).join("");
$$("[data-sv]").forEach(function(b){b.onclick=function(){location.hash="agendamento";setTimeout(function(){if(!$("#bs")){bk.s=SV[b.dataset.sv].id;bform()}$("#bs").value=SV[b.dataset.sv].id;toast("Serviço selecionado: "+SV[b.dataset.sv].id)},60)}});
var galHtml=GL.map(function(g,i){return'<button data-g="'+i+'" style="--a:'+g[1]+';--b:'+g[2]+(g[4]?';background:url('+g[4]+') center/cover':'')+'" aria-label="Ampliar: '+g[0]+'">'+(g[4]?'':I(g[3],40))+g[0]+'</button>'}).join("");
$("#galfull").innerHTML=galHtml;$("#galmini").innerHTML=galHtml;
$("#kidsg").innerHTML=[["Brinquedoteca colorida","kid","Espaço organizado, confortável e acolhedor."],["Brinquedos educativos","spark","Jogos e peças que estimulam criatividade."],["Atividades recreativas","heart","Brincadeiras conduzidas e supervisionadas."],["Tranquilidade para você","shield","Cuidar de si sem se preocupar com as crianças."]].map(function(k){return'<div class="card rv"><div class="ico">'+I(k[1])+'</div><h3>'+k[0]+'</h3><p>'+k[2]+'</p></div>'}).join("");
$("#proj").innerHTML=PR.map(function(p){return'<div class="card rv"><h3>'+p[0]+'</h3><p>'+p[1]+'</p></div>'}).join("")+'<div class="card rv"><h3>Público-alvo</h3><ul class="ck"><li>Mulheres e homens interessados em autocuidado</li><li>Pessoas que procuram serviços de estética</li><li>Pessoas que desejam relaxar</li><li>Pais e responsáveis por crianças</li><li>Famílias que valorizam praticidade e bem-estar</li></ul></div>';

/* Lightbox */
var gi=0;function show(i){gi=(i+GL.length)%GL.length;var g=GL[gi],e=$("#lbi");e.style.background=g[4]?"url("+g[4]+") center/cover":"linear-gradient(135deg,"+g[1]+","+g[2]+")";e.innerHTML=(g[4]?"":I(g[3],90))+'<span style="background:rgba(0,0,0,.45);padding:4px 14px;border-radius:99px">'+g[0]+'</span>'+'<span style="font:400 .9rem Nunito Sans">Imagem ilustrativa ('+(gi+1)+" de "+GL.length+")</span>"}
function openLb(i){show(i);$("#lb").classList.add("on");$("#lx").focus()}
function closeLb(){$("#lb").classList.remove("on")}
$$("[data-g]").forEach(function(b){b.onclick=function(){openLb(+b.dataset.g)}});
$("#lp").onclick=function(){show(gi-1)};$("#ln").onclick=function(){show(gi+1)};$("#lx").onclick=closeLb;
$("#lb").onclick=function(e){if(e.target===this)closeLb()};
document.addEventListener("keydown",function(e){if(!$("#lb").classList.contains("on"))return;if(e.key==="Escape")closeLb();if(e.key==="ArrowLeft")show(gi-1);if(e.key==="ArrowRight")show(gi+1)});

/* Agendamento */
var today=new Date().toISOString().slice(0,10),HR=["09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00","18:00"],bk={};
function field(id,l,inp){return'<div><label for="'+id+'">'+l+'</label>'+inp+'<div class="err" id="e_'+id+'"></div></div>'}
function bform(){var v=bk;$("#bk").innerHTML='<form id="bf" novalidate>'+
field("bn","Nome completo",'<input id="bn" autocomplete="name" value="'+esc(v.n||"")+'">')+
'<div class="f2">'+field("bt","Telefone/WhatsApp",'<input id="bt" type="tel" autocomplete="tel" placeholder="(00) 00000-0000" value="'+esc(v.t||"")+'">')+field("be","E-mail",'<input id="be" type="email" autocomplete="email" value="'+esc(v.e||"")+'">')+'</div>'+
field("bs","Serviço desejado",'<select id="bs"><option value="">Selecione</option>'+SV.map(function(s){return'<option'+(v.s===s.id?" selected":"")+'>'+s.id+'</option>'}).join("")+'</select>')+
'<div class="f2">'+field("bd","Data pretendida",'<input id="bd" type="date" min="'+today+'" value="'+(v.d||"")+'">')+field("bh","Horário pretendido",'<select id="bh"><option value="">Selecione</option>'+HR.map(function(h){return'<option'+(v.h===h?" selected":"")+'>'+h+'</option>'}).join("")+'</select>')+'</div>'+
field("bk2","Estará acompanhado de crianças?",'<select id="bk2"><option value="Não">Não</option><option value="Sim"'+(v.k==="Sim"?" selected":"")+'>Sim</option></select>')+
'<div id="kq" style="display:'+(v.k==="Sim"?"block":"none")+'">'+field("bq","Quantidade de crianças",'<input id="bq" type="number" min="1" max="6" value="'+(v.q||"")+'">')+'</div>'+
field("bo","Observações adicionais",'<textarea id="bo" rows="3">'+esc(v.o||"")+'</textarea>')+
'<button class="btn" type="submit">Solicitar agendamento</button></form>';
$("#bk2").onchange=function(){$("#kq").style.display=this.value==="Sim"?"block":"none"};
$("#bf").onsubmit=function(e){e.preventDefault();var g=function(i){return $("#"+i).value.trim()},er={},ok=true;
function bad(i,m){er[i]=m;ok=false}
if(g("bn").split(/\s+/).length<2)bad("bn","Informe nome e sobrenome.");
if(g("bt").replace(/\D/g,"").length<10)bad("bt","Informe um telefone com DDD.");
if(!/^\S+@\S+\.\S+$/.test(g("be")))bad("be","Informe um e-mail válido.");
if(!g("bs"))bad("bs","Escolha um serviço.");
if(!g("bd")||g("bd")<today)bad("bd","Escolha uma data de hoje em diante.");
if(!g("bh"))bad("bh","Escolha um horário.");
if(g("bk2")==="Sim"&&!(+g("bq")>=1))bad("bq","Informe quantas crianças.");
["bn","bt","be","bs","bd","bh","bq"].forEach(function(i){var x=$("#e_"+i);if(x)x.textContent=er[i]||""});
if(!ok){toast("Revise os campos destacados.");var f=Object.keys(er)[0];$("#"+f).focus();return}
bk={n:g("bn"),t:g("bt"),e:g("be"),s:g("bs"),d:g("bd"),h:g("bh"),k:g("bk2"),q:g("bk2")==="Sim"?g("bq"):"",o:g("bo")};resume()}}
function fd(d){var p=d.split("-");return p[2]+"/"+p[1]+"/"+p[0]}
function resume(){var v=bk,msg="Olá! Gostaria de solicitar um agendamento no Spa Beauty e Estética (projeto demonstrativo).\n\nNome: "+v.n+"\nTelefone: "+v.t+"\nE-mail: "+v.e+"\nServiço: "+v.s+"\nData: "+fd(v.d)+"\nHorário: "+v.h+"\nCrianças: "+(v.k==="Sim"?"Sim, "+v.q:"Não")+(v.o?"\nObservações: "+v.o:"");
$("#bk").innerHTML='<div class="ok">Solicitação pronta! Ela ainda não foi enviada nem confirmada.</div><dl class="sum"><dt>Nome</dt><dd>'+esc(v.n)+'</dd><dt>Contato</dt><dd>'+esc(v.t)+' · '+esc(v.e)+'</dd><dt>Serviço</dt><dd>'+esc(v.s)+'</dd><dt>Data e horário pretendidos</dt><dd>'+fd(v.d)+' às '+v.h+'</dd><dt>Crianças</dt><dd>'+(v.k==="Sim"?"Sim, "+esc(v.q):"Não")+'</dd><dt>Observações</dt><dd>'+(esc(v.o)||"Nenhuma")+'</dd></dl><div class="row"><a class="btn g" target="_blank" rel="noopener" href="https://wa.me/'+CONFIG.wa+'?text='+encodeURIComponent(msg)+'">Enviar pelo WhatsApp</a><button class="btn o" id="ed">Editar dados</button><button class="btn o" id="nw">Nova solicitação</button></div><p class="tag" style="margin-top:12px">O botão do WhatsApp usa um número fictício configurável (CONFIG.wa no código).</p>';
$("#ed").onclick=bform;$("#nw").onclick=function(){bk={};bform()};window.scrollTo({top:0,behavior:"smooth"});toast("Resumo da solicitação gerado")}
bform();

/* Contato */
$("#cf").onsubmit=function(e){e.preventDefault();var f=[["cn",function(v){return v.length<3?"Informe seu nome.":""}],["ce",function(v){return/^\S+@\S+\.\S+$/.test(v)?"":"Informe um e-mail válido."}],["cs",function(v){return v.length<3?"Informe o assunto.":""}],["cm",function(v){return v.length<10?"Escreva ao menos 10 caracteres.":""}]],ok=true;
f.forEach(function(x){var el=$("#"+x[0]),m=x[1](el.value.trim());el.nextElementSibling.textContent=m;if(m)ok=false});
if(!ok){toast("Revise os campos destacados.");return}
$("#cmsg").innerHTML='<div class="ok">Mensagem registrada. Neste projeto acadêmico ela não é enviada a nenhum servidor.</div>';this.reset();toast("Mensagem registrada (demonstrativo)")};
$("#wan").textContent=CONFIG.waShow+" (fictício)";$("#mail").textContent=CONFIG.mail;$("#wal").href="https://wa.me/"+CONFIG.wa;
var soc='<a href="https://wa.me/'+CONFIG.wa+'" target="_blank" rel="noopener" aria-label="WhatsApp">'+I("wa",20)+'</a><a href="#contato" data-s="Instagram demonstrativo: '+CONFIG.insta+'" aria-label="Instagram">'+I("ig",20)+'</a><a href="#contato" data-s="Facebook demonstrativo (perfil a definir)" aria-label="Facebook">'+I("fb",20)+'</a>';
$("#soc1").innerHTML=soc;$("#soc2").innerHTML=soc;
$$("[data-s]").forEach(function(a){a.addEventListener("click",function(){toast(a.dataset.s)})});
$("#fct").innerHTML=CONFIG.waShow+"<br>"+CONFIG.mail+"<br>"+CONFIG.addr;

/* Navegação */
var PGS=$$("section.pg").map(function(s){return s.id});
function route(){var h=location.hash.slice(1);if(PGS.indexOf(h)<0)h="inicio";PGS.forEach(function(id){$("#"+id).classList.toggle("on",id===h)});
$$("#menu a").forEach(function(a){a.classList.toggle("on",a.getAttribute("href")==="#"+h)});
$("#menu").classList.remove("open");$("#mb").setAttribute("aria-expanded","false");window.scrollTo(0,0);document.title=(h==="inicio"?"":h[0].toUpperCase()+h.slice(1)+" · ")+"Spa Beauty e Estética";
$$("#"+h+" .rv").forEach(function(e){io.observe(e)})}
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}})},{threshold:.12});
window.addEventListener("hashchange",route);route();
$("#mb").onclick=function(){var o=$("#menu").classList.toggle("open");this.setAttribute("aria-expanded",o)};
var tp=$("#top");window.addEventListener("scroll",function(){tp.classList.toggle("on",scrollY>500)});tp.onclick=function(){window.scrollTo({top:0,behavior:"smooth"})};

/* Logo e imagem de abertura (veja dados.js) */
(function(){var l=$("#lg");l.src=CONFIG.logo;if(!CONFIG.logoMostrarNome)$("#ln0").style.display="none";
if(CONFIG.imgInicio){var a=$(".arch");a.style.background="url("+CONFIG.imgInicio+") center/cover";a.innerHTML=""}})();
