const LOGO='/assets/logo.png';
// ====== COMPONENTES ======
const $=(s,r=document)=>r.querySelector(s),app=$('#app');
const art=(o,cls='')=>`<div class="blob ${cls}" style="background:${o.c||'var(--ye)'}">${o.img?`<img src="${o.img}" alt="${o.nome||o.n}" loading="lazy" decoding="async">`:`<span aria-hidden="true">${o.e}</span>`}</div>`;
const card=r=>`<a class="card" href="#r-${r.id}">${art(r)}<div class="b"><div><span class="tag">${r.ing}</span><span class="tag">${r.parte}</span></div><h3>${r.nome}</h3><p>${r.d}</p><span class="go">Ver receita · ${r.t}</span></div></a>`;
const slice=`<svg class="slice" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="46" fill="#F3EBD9" stroke="#292923" stroke-width="4"/><g stroke="#292923" stroke-width="3" stroke-linecap="round"><path d="M50 12v76M12 50h76M23 23l54 54M77 23L23 77"/></g><circle cx="50" cy="50" r="7" fill="#E97835" stroke="#292923" stroke-width="3"/></svg>`;
const concept='“O que você descarta, a criatividade transforma.”';
const refs=k=>`<ul class="refs">${k.map(x=>`<li><a href="${REFS[x][1]}" target="_blank" rel="noopener noreferrer">${REFS[x][0]}</a></li>`).join('')}</ul>`;
const go=(h,t,c='')=>`<a class="btn ${c}" href="#${h}">${t}</a>`;
// ====== PÁGINAS ======
const P={
inicio:()=>`
<div class="wrap hero in"><div><span class="big"><img src="${LOGO}" alt="KASKA"></span>
<h1>O que você descarta, a criatividade transforma.</h1>
<p>Descubra novas possibilidades para os alimentos que fazem parte do seu dia a dia. Aproveitar melhor também é uma forma de transformar.</p>
<div class="row">${go('receitas','Explorar receitas')}${go('sobre','Conheça a KASKA','s')}</div></div>
<div class="blob" role="img" aria-label="Rodela de laranja ilustrada">${slice.replace('class="slice"','style="width:78%;position:static"')}</div></div>
<section class="bg-ye"><div class="wrap split"><h2>Nem tudo que sobra precisa ser descartado.</h2>
<div><p>Cascas, talos, folhas e sementes guardam texturas e sabores que quase sempre vão para o lixo. Com um pouco de criatividade, viram bolos, pestos, chips e geleias.</p>
<div class="chips"><span>casca → chips</span><span>talo → pesto</span><span>folha → farofa</span><span>semente → petisco</span></div></div></div></section>
<section><div class="wrap"><h2>Novas receitas. Novas possibilidades.</h2>
<div class="grid" style="margin-top:30px">${R.slice(0,4).map(card).join('')}</div>
<div class="row">${go('receitas','Ver todas as receitas','g')}</div></div></section>
<section class="bg-gr"><div class="wrap"><h2>Descubra o potencial dos alimentos</h2>
<div class="feat" style="margin-top:30px">${[['🍌','Cascas','Viram chips, bolos e geleias.'],['🥦','Talos','Entram em pestos, refogados e caldos.'],['🥬','Folhas','Substituem as verdes de sempre em farofas e tortas.'],['🎃','Sementes','Assadas, ficam crocantes.']].map(a=>`<div><b>${a[0]}</b><h3>${a[1]}</h3><p>${a[2]}</p></div>`).join('')}</div>
<div class="row" style="margin-top:56px">${go('aproveitamento','Explorar ingredientes','g')}</div></div></section>
<section><div class="wrap split"><div><h2>Pequenas mudanças transformam grandes hábitos.</h2></div><div>
<p>Desperdiçar menos começa na cozinha: no jeito de comprar, guardar e preparar. A KASKA acompanha a ODS 12 da ONU, que propõe consumo e produção mais responsáveis.</p>${go('conscientizacao','Entenda o desperdício')}</div></div></section>
<section class="bg-or"><div class="wrap" style="text-align:center"><h2 style="margin-inline:auto;max-width:18ch">Antes de descartar, descubra o que você pode criar.</h2><div class="row" style="justify-content:center">${go('receitas','Explorar receitas','s')}</div></div></section>`,
receitas:()=>{const F=['Frutas','Verduras e legumes','Cascas','Talos','Folhas','Sementes'];
return `<div class="wrap ph in"><h1 style="font-size:clamp(2.2rem,6vw,4.2rem);max-width:16ch">Na cozinha, tudo pode ganhar uma nova possibilidade.</h1>
<p>Receitas que usam a casca, o talo e a folha. Filtre por tipo ou busque pelo nome.</p>
<div class="bar"><input id="q" type="search" placeholder="Buscar receita ou ingrediente" aria-label="Buscar receita ou ingrediente"></div>
<div class="bar" id="fs" style="margin-top:0" role="group" aria-label="Filtros">${['Todas',...F].map((f,i)=>`<button class="fb" aria-pressed="${i==0}">${f}</button>`).join('')}</div>
<div class="grid" id="rl"></div><p id="rc" class="sr-only" role="status"></p><p id="em" hidden>Nenhuma receita encontrada. Tente outro termo ou escolha “Todas”.</p></div>`},
aproveitamento:()=>`<div class="wrap ph in"><h1 style="font-size:clamp(2.2rem,6vw,4.2rem)">Cada parte tem seu potencial.</h1>
<p>Nem tudo pode ser aproveitado. Aqui estão exemplos seguros e como usá-los.</p>
<div class="note w"><b>Segurança alimentar.</b> Lave os alimentos em água corrente, escovando as cascas. Para o que será consumido cru, a Anvisa orienta usar também uma solução própria para desinfecção de alimentos, registrada na Anvisa, seguindo a diluição e o tempo do rótulo. Vinagre e detergente não substituem esse produto. Se houver dúvida sobre uma parte ser comestível, não use.${refs(['anvisa','saneantes'])}</div>
<div class="cats">${['Cascas','Talos','Folhas','Sementes'].map(g=>`<button class="btn s" data-g="${g}" aria-pressed="false">${g}</button>`).join('')}</div><div id="il"></div></div>`,
conscientizacao:()=>`<div class="wrap ph in"><h1 style="font-size:clamp(2.2rem,6vw,4.2rem);max-width:17ch">Desperdiçar menos começa com novas escolhas.</h1></div>
<section class="bg-ye" style="padding:50px 0"><div class="wrap split"><h2>Entenda o desperdício</h2><div><p>Desperdício acontece quando um alimento próprio para consumo é descartado: comprado em excesso, esquecido no fundo da geladeira ou preparado em quantidade maior do que a necessária. Partes como cascas e talos também entram nessa conta.</p></div></div></section>
<section><div class="wrap"><h2>Consequências</h2><div class="cons">
<div class="bg-gr"><h3>Ambientais</h3><p>Cada alimento jogado fora leva consigo a água, a terra e a energia usadas para produzi-lo, e vira lixo que precisa de destino.</p></div>
<div class="bg-or"><h3>Sociais</h3><p>Comida que sobra em um lugar faz falta em outro. Reduzir o desperdício ajuda a fazer o alimento chegar a mais gente.</p></div>
<div class="bg-ca"><h3>Econômicas</h3><p>Desperdiçar é pagar por comida que não será consumida. Em casa, isso pesa no orçamento.</p></div></div></div></section>
<section style="padding-top:0"><div class="wrap"><h2>Dicas práticas</h2><div class="tips">${[['Planeje as compras','Faça lista com base no que você vai cozinhar nos próximos dias.'],['Armazene direito','Guarde cada alimento do jeito que ele pede: folhas secas, frutas maduras separadas.'],['Observe a conservação','Veja cor, cheiro e textura. Na dúvida sobre a segurança, não consuma.'],['Use por inteiro','Aproveite cascas, talos e folhas adequados ao consumo.'],['Organize a geladeira','O que vence primeiro fica na frente, à vista.'],['Reaproveite com segurança','Guarde sobras em potes limpos, refrigere logo e esquente bem antes de servir.']].map(t=>`<div><b>${t[0]}</b>${t[1]}</div>`).join('')}</div></div></section>
<section class="bg-ca"><div class="wrap ods"><div class="n">12.3</div><div><h2>A KASKA e a ODS 12</h2><p>O Objetivo de Desenvolvimento Sustentável 12, da ONU, trata de consumo e produção responsáveis. A meta 12.3 propõe que, até 2030, o desperdício de alimentos per capita no varejo e no consumo seja reduzido pela metade no mundo, e que as perdas ao longo das cadeias de produção e abastecimento diminuam.</p>${go('receitas','Comece pela cozinha','g')}<div class="note" style="color:var(--ca)"><b>Fontes</b>${refs(['glos','onu','pnuma'])}</div></div></div></section>`,
sobre:()=>`<div class="wrap ph in"><h1 style="font-size:clamp(2.2rem,6vw,4.2rem);max-width:16ch">Uma nova maneira de enxergar os alimentos.</h1></div>
<section style="padding-top:20px"><div class="wrap split"><div class="blob" style="background:var(--or)"><span>🍊</span></div><div>
<h2>O que é a KASKA</h2><p>A KASKA é uma marca de educação e conscientização alimentar. Mostramos, com receitas e informações simples, que cascas, talos, folhas e sementes podem ter outra vida na cozinha. Sem culpa e sem sermão: com curiosidade.</p>
<h3>Propósito</h3><p>Incentivar uma relação mais consciente com os alimentos, valorizando seu potencial e reduzindo o desperdício.</p>
<h3>Missão</h3><p>Inspirar e ensinar as pessoas a aproveitar melhor os alimentos por meio de receitas, informações e práticas acessíveis.</p>
<h3>Visão</h3><p>Contribuir para uma cultura em que o aproveitamento dos alimentos faça parte dos hábitos cotidianos.</p></div></div></section>
<section class="bg-gr"><div class="wrap"><h2>Valores</h2><div class="vals">${['Consumo consciente','Criatividade','Sustentabilidade','Educação alimentar','Valorização dos alimentos'].map(v=>`<div>${v}</div>`).join('')}</div></div></section>
<section class="bg-ye"><div class="wrap" style="text-align:center"><h2 style="margin-inline:auto;max-width:18ch">${concept}</h2><div class="row" style="justify-content:center">${go('receitas','Explorar receitas','s')}</div></div></section>`
};
function recipe(r){const rel=I.filter(i=>i.r==r.id);
return `<div class="wrap ph in"><a href="#receitas">← Todas as receitas</a><div class="rd" style="margin-top:20px">${art(r)}<div>
<h1 style="font-size:clamp(2.1rem,5vw,3.6rem)">${r.nome}</h1><div class="facts"><span>${r.t}</span><span>Rende ${r.y}</span><span>Parte usada: ${r.parte.toLowerCase()}</span></div>
<p>${r.h}</p><h3>Ingredientes</h3><ul>${r.i.map(x=>`<li>${x}</li>`).join('')}</ul>
<h3>Modo de preparo</h3><ol>${r.p.map(x=>`<li>${x}</li>`).join('')}</ol>
<div class="note"><b>Dica de aproveitamento.</b> ${r.dica}</div><div class="note w"><b>Segurança alimentar.</b> ${r.av}${refs(['anvisa'])}</div>
<div class="row">${go('receitas','Mais receitas','s')}${go('aproveitamento','Ver ingredientes','g')}</div></div></div></div>`}
// ====== ROTEADOR ======
function ilist(g){return I.filter(i=>i.g==g).map(i=>`<div class="ing">${art(i)}<div><h3>${i.n} <small style="font-family:Figtree;font-size:1rem">(${i.p.toLowerCase()})</small></h3><p>${i.x}</p><div class="note w" style="margin:8px 0"><b>Atenção:</b> ${i.a}</div>${i.r?`<a href="#r-${i.r}"><b>Ver receita relacionada</b></a>`:'<span>Receita em breve.</span>'}</div></div>`).join('')}
function setup(h){
if(h=='receitas'){let f='Todas';const L=$('#rl'),q=$('#q'),n=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const draw=()=>{const t=n(q.value),l=R.filter(r=>(f=='Todas'||r.cats.includes(f))&&n([r.nome,r.ing,r.parte,r.d].join(' ')).includes(t));L.innerHTML=l.map(card).join('');$('#em').hidden=l.length>0;$('#rc').textContent=l.length+' receita(s) encontrada(s)'};
q.oninput=draw;$('#fs').onclick=e=>{if(e.target.matches('.fb')){f=e.target.textContent;[...$('#fs').children].forEach(b=>b.setAttribute('aria-pressed',b==e.target));draw()}};draw()}
if(h=='aproveitamento'){const il=$('#il'),sh=g=>{il.innerHTML=ilist(g);document.querySelectorAll('[data-g]').forEach(b=>{const on=b.dataset.g==g;b.style.background=on?'var(--ye)':'transparent';b.setAttribute('aria-pressed',on)})};
document.querySelectorAll('[data-g]').forEach(b=>b.onclick=e=>{e.preventDefault();sh(b.dataset.g)});sh('Cascas')}}
function route(){let h=(location.hash||'#inicio').slice(1),r=h.startsWith('r-')&&R.find(x=>'r-'+x.id==h);
if(!r&&!P[h])h='inicio';
app.innerHTML=r?recipe(r):P[h]();
document.title=(r?r.nome:PAGES.find(p=>p[0]==h)[1])+' — KASKA';
const cur=r?'receitas':h;
document.querySelectorAll('#menu a,#fn a').forEach(a=>a.getAttribute('href')=='#'+cur?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current'));
$('#menu').classList.remove('open');$('#mb').setAttribute('aria-expanded','false');
window.scrollTo({top:0,behavior:'instant'});setup(h);app.focus({preventScroll:true});
const md=$('meta[name=description]');if(md)md.content=r?r.d:DESC[h]}
addEventListener('keydown',e=>{if(e.key=='Escape'&&$('#menu').classList.contains('open')){$('#menu').classList.remove('open');$('#mb').setAttribute('aria-expanded','false');$('#mb').focus()}});
const nav=PAGES.map(p=>`<li><a href="#${p[0]}">${p[1]}</a></li>`).join('');
$('#menu').innerHTML=nav;$('#fn').innerHTML=nav;
const so=Object.entries(SOCIAL).filter(([k,v])=>v);$('#soc').innerHTML=so.length?so.map(([k,v])=>`<li><a href="${v}" target="_blank" rel="noopener noreferrer">${k}</a></li>`).join(''):'<li>Em breve.</li>';
$('#mb').onclick=()=>{const o=$('#menu').classList.toggle('open');$('#mb').setAttribute('aria-expanded',o)};
addEventListener('hashchange',route);route();
