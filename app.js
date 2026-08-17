const LANGS={de:["🇩🇪","Deutsch","de-DE"],en:["🇬🇧","Englisch","en-US"],es:["🇪🇸","Spanisch","es-ES"],fr:["🇫🇷","Französisch","fr-FR"],it:["🇮🇹","Italienisch","it-IT"],pt:["🇵🇹","Portugiesisch","pt-PT"],ja:["🇯🇵","Japanisch","ja-JP"]};
const URLS=Object.fromEntries(Object.keys(LANGS).map(l=>[l,`https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/${l}/${l}_50k.txt`]));
const SEED={hello:{de:"Hallo",en:"hello",es:"hola",fr:"bonjour",it:"ciao",pt:"olá",ja:"こんにちは"},thanks:{de:"danke",en:"thanks",es:"gracias",fr:"merci",it:"grazie",pt:"obrigado",ja:"ありがとう"},please:{de:"bitte",en:"please",es:"por favor",fr:"s’il vous plaît",it:"per favore",pt:"por favor",ja:"お願いします"},water:{de:"Wasser",en:"water",es:"agua",fr:"eau",it:"acqua",pt:"água",ja:"水"},food:{de:"Essen",en:"food",es:"comida",fr:"nourriture",it:"cibo",pt:"comida",ja:"食べ物"},friend:{de:"Freund",en:"friend",es:"amigo",fr:"ami",it:"amico",pt:"amigo",ja:"友達"},love:{de:"Liebe",en:"love",es:"amor",fr:"amour",it:"amore",pt:"amor",ja:"愛"},house:{de:"Haus",en:"house",es:"casa",fr:"maison",it:"casa",pt:"casa",ja:"家"},school:{de:"Schule",en:"school",es:"escuela",fr:"école",it:"scuola",pt:"escola",ja:"学校"},work:{de:"Arbeit",en:"work",es:"trabajo",fr:"travail",it:"lavoro",pt:"trabalho",ja:"仕事"}};
const GRAMMAR={
de:[["A1","Satzstellung","Im Hauptsatz steht das finite Verb meist an zweiter Position.","Heute lerne ich Deutsch."],["A2","Perfekt","Viele vergangene Handlungen werden mit haben/sein + Partizip II gebildet.","Ich habe gelernt."],["B1","Nebensätze","Bei weil, dass, obwohl usw. steht das finite Verb am Ende.","Ich lerne, weil ich reisen möchte."],["B2","Konjunktiv II","Drückt Irreales, Wünsche und höfliche Bitten aus.","Ich würde gern kommen."],["C1","Nominalstil","Komplexe Texte verdichten Handlungen häufig zu Nomen.","Nach Abschluss der Untersuchung …"],["C2","Register","Stil und Wortwahl werden präzise an Situation und Textsorte angepasst.","Die Formulierung ist bewusst zurückhaltend."]],
en:[["A1","Present simple","Used for habits, facts and repeated actions.","I study every day."],["A2","Present perfect","have/has + past participle links past events with the present.","I have finished."],["B1","Conditionals","Conditional clauses express real or hypothetical results.","If I had time, I would go."],["B2","Passive voice","The object becomes the grammatical subject.","It was written in 2025."],["C1","Inversion","Formal emphasis can invert auxiliary and subject.","Rarely have I seen this."],["C2","Register","Advanced English requires precise control of tone and idiom.","The claim warrants closer scrutiny."]],
es:[["A1","Ser / estar","Ser describes identity; estar often state or location.","Soy estudiante. Estoy cansado."],["A2","Pretérito perfecto","haber + participio connects past and present.","He terminado."],["B1","Subjuntivo","Used after wishes, doubt and many dependent structures.","Quiero que vengas."],["B2","Condicional","Expresses hypothetical consequences and polite requests.","Me gustaría viajar."],["C1","Conectores","Advanced discourse uses nuanced connectors.","No obstante, conviene señalar…"],["C2","Registro","Lexis and syntax adapt to highly specific contexts.","La hipótesis adolece de…"]],
fr:[["A1","Articles","Articles mark definiteness, gender and number.","un livre / la maison"],["A2","Passé composé","avoir/être + participe passé.","J’ai parlé."],["B1","Pronoms objets","Object pronouns normally precede the conjugated verb.","Je le lui donne."],["B2","Subjonctif","Appears after many expressions of necessity, doubt or emotion.","Il faut que tu viennes."],["C1","Connecteurs","Precise connectors structure complex arguments.","Néanmoins, il convient de…"],["C2","Registre","Advanced use controls nuance, idiom and rhetorical effect.","Cette assertion mérite d’être nuancée."]],
it:[["A1","Articoli","Articles agree with noun gender and number.","il libro / la casa"],["A2","Passato prossimo","avere/essere + participio passato.","Ho parlato."],["B1","Pronomi combinati","Indirect and direct object pronouns can combine.","Glielo do."],["B2","Congiuntivo","Used in many dependent clauses expressing doubt or opinion.","Penso che sia vero."],["C1","Connettivi","Complex texts rely on precise logical connectors.","Tuttavia, occorre considerare…"],["C2","Registro","Highly proficient use controls tone and idiomatic nuance.","L’assunto merita un’analisi più approfondita."]],
pt:[["A1","Ser / estar","Ser often marks identity; estar often temporary state/location.","Sou estudante. Estou cansado."],["A2","Pretérito perfeito","Used for completed past actions.","Eu terminei."],["B1","Infinitivo pessoal","Portuguese can inflect the infinitive for person.","É importante estudarmos."],["B2","Conjuntivo","Used after uncertainty, wishes and various dependent structures.","Espero que venhas."],["C1","Conectores","Advanced argumentation depends on precise connectors.","Contudo, importa salientar…"],["C2","Registo","Expert use adjusts vocabulary and syntax to context.","A premissa carece de fundamentação."]],
ja:[["A1","は / が","は marks a topic; が often identifies or emphasizes the subject.","私は学生です。"],["A2","て-form","The て-form connects actions and supports many constructions.","食べてください。"],["B1","普通形","Plain forms are central to casual speech and embedded clauses.","行くと思います。"],["B2","条件表現","と・ば・たら・なら express different kinds of conditions.","時間があれば行きます。"],["C1","敬語","尊敬語・謙譲語・丁寧語 encode social relationships.","先生がおっしゃいました。"],["C2","文体と含意","Advanced Japanese depends heavily on context, omission and stylistic nuance.","必ずしもそうとは限らない。"]]
};
let state=JSON.parse(localStorage.getItem("vp1-state")||"null")||{source:"en",target:"de",xp:0,streak:0,lastDay:"",today:0,reviews:0,fails:0,cards:{},dojo:{},translations:{}};
let lists={},current=null,page=0,dojoMode="recall",dojoCurrent=null,flipped=false;
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
function save(){localStorage.setItem("vp1-state",JSON.stringify(state));updateStats()}
function toast(t){const e=$("#toast");e.textContent=t;e.classList.add("show");clearTimeout(e._t);e._t=setTimeout(()=>e.classList.remove("show"),1800)}
function day(){return new Date().toISOString().slice(0,10)}
function touchDay(){if(state.lastDay!==day()){if(state.lastDay){let diff=(new Date(day())-new Date(state.lastDay))/86400000;if(diff>1)state.streak=0}state.lastDay=day();state.today=0}}
function levelForRank(r){return r<=1000?"A1":r<=3000?"A2":r<=8000?"B1":r<=16000?"B2":r<=30000?"C1":"C2"}
function langOptions(){return Object.entries(LANGS).map(([k,v])=>`<option value="${k}">${v[0]} ${v[1]}</option>`).join("")}
["source","target","catalogLang","grammarLang","transFrom","transTo"].forEach(id=>$("#"+id).innerHTML=langOptions());
$("#source").value=state.source;$("#target").value=state.target;$("#catalogLang").value=state.source;$("#grammarLang").value=state.source;$("#transFrom").value=state.source;$("#transTo").value=state.target;

function dbOpen(){return new Promise((ok,no)=>{const r=indexedDB.open("vocapulse-catalog",2);r.onupgradeneeded=()=>{const db=r.result;if(!db.objectStoreNames.contains("lists"))db.createObjectStore("lists");if(!db.objectStoreNames.contains("translations"))db.createObjectStore("translations")};r.onsuccess=()=>ok(r.result);r.onerror=()=>no(r.error)})}
async function dbGet(store,key){const db=await dbOpen();return new Promise((ok,no)=>{const r=db.transaction(store).objectStore(store).get(key);r.onsuccess=()=>ok(r.result);r.onerror=()=>no(r.error)})}
async function dbPut(store,key,val){const db=await dbOpen();return new Promise((ok,no)=>{const r=db.transaction(store,"readwrite").objectStore(store).put(val,key);r.onsuccess=()=>ok();r.onerror=()=>no(r.error)})}
function parseList(txt){return txt.trim().split(/\n/).slice(0,50000).map((line,i)=>{const m=line.trim().match(/^(.*?)\s+(\d+)$/);return {w:m?m[1]:line.trim(),f:m?Number(m[2]):0,r:i+1}}).filter(x=>x.w)}
async function loadLang(lang,force=false){
 if(!force&&lists[lang])return lists[lang];
 if(!force){const cached=await dbGet("lists",lang).catch(()=>null);if(cached?.length>=49000){lists[lang]=cached;return cached}}
 $("#catalogStatus").textContent=`${LANGS[lang][1]} wird geladen…`;
 const res=await fetch(URLS[lang],{cache:"force-cache"});if(!res.ok)throw Error("HTTP "+res.status);
 const data=parseList(await res.text());lists[lang]=data;await dbPut("lists",lang,data);
 return data
}
async function syncAll(){
 $("#syncBtn").disabled=true;let n=0;
 for(const l of Object.keys(LANGS)){try{await loadLang(l);n++}catch(e){console.warn(l,e)}}
 $("#syncBtn").disabled=false;updateCatalogMetric();renderCatalog();toast(`${n}/7 Sprachkataloge verfügbar`);
}
function updateCatalogMetric(){let n=Object.values(lists).reduce((a,x)=>a+x.length,0);$("#catalogMetric").textContent=n?`${n.toLocaleString("de-DE")} Wörter`:"online laden"}
async function ensureCurrentList(){try{await loadLang(state.source);updateCatalogMetric();showCard()}catch(e){toast("Katalog konnte nicht geladen werden");showSeed()}}
function findSeedTranslation(word,from,to){word=word.toLowerCase();for(const x of Object.values(SEED)){if((x[from]||"").toLowerCase()===word)return x[to]}return null}
async function translate(text,from,to){
 if(from===to)return text;
 const seed=findSeedTranslation(text,from,to);if(seed)return seed;
 const key=`${from}|${to}|${text.toLowerCase()}`;if(state.translations[key])return state.translations[key];
 const cached=await dbGet("translations",key).catch(()=>null);if(cached){state.translations[key]=cached;return cached}
 const url=`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}`;
 const r=await fetch(url);if(!r.ok)throw Error("Übersetzungsdienst nicht erreichbar");
 const j=await r.json();let result=j?.responseData?.translatedText;
 if(!result)throw Error("Keine Übersetzung");
 result=result.replace(/&#39;/g,"'").replace(/&quot;/g,'"');
 state.translations[key]=result;await dbPut("translations",key,result);save();return result
}
function chooseCard(){
 const arr=lists[state.source]||[];if(!arr.length)return null;const now=Date.now();
 const fresh=arr.slice(0,Math.min(50000,Math.max(1000,Object.keys(state.cards).length+1200))).filter(x=>!state.cards[`${state.source}:${x.w}`]);
 if(fresh.length)return fresh[Math.floor(Math.random()*Math.min(fresh.length,300))];
 const due=arr.filter(x=>(state.cards[`${state.source}:${x.w}`]?.due||0)<=now);return due[0]||arr[Math.floor(Math.random()*Math.min(arr.length,5000))]
}
async function showCard(){
 current=chooseCard();flipped=false;$("#card").classList.remove("flipped");
 if(!current)return showSeed();
 $("#frontWord").textContent=current.w;$("#reading").textContent=state.source==="ja"?"Japanisch · Lesung per Audio":"";
 $("#rankBadge").textContent=`#${current.r.toLocaleString("de-DE")} · ${levelForRank(current.r)}`;$("#targetBadge").textContent=LANGS[state.target][1];
 $("#backWord").textContent="…";$("#alts").textContent="";$("#knownInterval").textContent=nextKnownLabel();
 try{$("#backWord").textContent=await translate(current.w,state.source,state.target)}catch{$("#backWord").textContent="Übersetzung beim Aufdecken laden"}
}
function showSeed(){current={w:SEED.hello[state.source],r:1};$("#frontWord").textContent=current.w;$("#backWord").textContent=SEED.hello[state.target];$("#rankBadge").textContent="Starter";$("#catalogMetric").textContent="Internet nötig für 50k"}
function nextKnownLabel(){if(!current)return"3 Tage";let s=state.cards[`${state.source}:${current.w}`]?.stage||0;return [3,7,16,35,75,150][Math.min(s,5)]+" Tage"}
async function flip(){if(!current)return;flipped=!flipped;$("#card").classList.toggle("flipped",flipped);if(flipped&&$("#backWord").textContent.includes("laden"))try{$("#backWord").textContent=await translate(current.w,state.source,state.target)}catch{toast("Online-Übersetzung nicht erreichbar")}}
function review(kind){
 if(!current)return;if(!flipped){toast("Erst Lösung aufdecken");return}
 touchDay();const k=`${state.source}:${current.w}`,old=state.cards[k]||{stage:0};let stage=old.stage||0,ms;
 if(kind==="again"){stage=0;ms=15*60000;state.dojo[k]={word:current.w,lang:state.source,target:state.target,due:Date.now()+ms,fails:(state.dojo[k]?.fails||0)+1};state.fails++}
 else if(kind==="unsure"){stage=Math.max(1,stage);ms=86400000;state.dojo[k]={word:current.w,lang:state.source,target:state.target,due:Date.now()+ms,fails:(state.dojo[k]?.fails||0)+1}}
 else{stage=Math.min(6,stage+1);ms=[3,7,16,35,75,150][Math.min(stage-1,5)]*86400000;state.xp+=10;state.today++;if(stage>=3)delete state.dojo[k]}
 state.cards[k]={stage,due:Date.now()+ms,reviews:(old.reviews||0)+1};state.reviews++;save();showCard()
}
function updateStats(){
 touchDay();$("#xp").textContent=state.xp;$("#profileXp").textContent=state.xp;$("#streak").textContent=state.streak;$("#todayDone").textContent=`${state.today} / 20`;$("#dailyBar").style.width=Math.min(100,state.today/20*100)+"%";
 $("#dojoCount").textContent=Object.keys(state.dojo).length;$("#dojoStatus").textContent=`${Object.keys(state.dojo).length} Karten`;$("#learnedCount").textContent=Object.values(state.cards).filter(x=>x.stage>=2).length;$("#reviewCount").textContent=state.reviews;$("#failCount").textContent=state.fails;
 $("#dueCount").textContent=Object.values(state.cards).filter(x=>x.due<=Date.now()).length
}
async function renderCatalog(){
 const lang=$("#catalogLang").value;let arr;try{arr=await loadLang(lang)}catch{$("#catalogStatus").textContent="Internetverbindung benötigt";return}
 const q=$("#catalogSearch").value.trim().toLowerCase(),band=$("#catalogBand").value;let a=arr;
 if(q)a=a.filter(x=>x.w.toLowerCase().includes(q));
 if(band!=="all")a=a.filter(x=>levelForRank(x.r)===band);
 const size=80,pages=Math.max(1,Math.ceil(a.length/size));page=Math.min(page,pages-1);const slice=a.slice(page*size,page*size+size);
 $("#catalogStatus").textContent=`${arr.length.toLocaleString("de-DE")} Wörter geladen · ${a.length.toLocaleString("de-DE")} Treffer`;$("#pageInfo").textContent=`${page+1} / ${pages}`;
 $("#catalogList").innerHTML=slice.map(x=>`<div class="wordrow"><span class="rank">#${x.r}</span><div><b>${esc(x.w)}</b><small>${levelForRank(x.r)} · Frequenz ${x.f.toLocaleString("de-DE")}</small></div><button data-add="${encodeURIComponent(x.w)}" data-r="${x.r}">＋ Lernen</button></div>`).join("");
 $$("[data-add]").forEach(b=>b.onclick=async()=>{state.source=lang;$("#source").value=lang;current={w:decodeURIComponent(b.dataset.add),r:Number(b.dataset.r)};save();nav("learnView");flipped=false;$("#frontWord").textContent=current.w;$("#rankBadge").textContent=`#${current.r} · ${levelForRank(current.r)}`;$("#backWord").textContent=await translate(current.w,state.source,state.target).catch(()=>"Online-Übersetzung nicht erreichbar");$("#card").classList.remove("flipped")})
}
function esc(s){return s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]))}
function renderGrammar(){let lang=$("#grammarLang").value;$("#grammarList").innerHTML=(GRAMMAR[lang]||[]).map(x=>`<article class="grammar-card"><span class="badge">${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p><div class="example">${x[3]}</div></article>`).join("")}
async function renderDojo(){
 const due=Object.entries(state.dojo).filter(([k,v])=>v.lang===state.source&&v.due<=Date.now()).map(([k,v])=>({k,...v}));$("#dojoStatus").textContent=`${due.length} fällig · ${Object.keys(state.dojo).length} gesamt`;
 if(!due.length){$("#dojoStage").innerHTML="<div><div style='font-size:42px'>🥋</div><h2>Dojo ist ruhig</h2><p class='status'>Unsichere oder vergessene Karten erscheinen hier erst wieder, wenn sie fällig sind.</p></div>";return}
 dojoCurrent=due[0];let answer=await translate(dojoCurrent.word,dojoCurrent.lang,state.target).catch(()=>"");
 if(dojoMode==="listen"){setTimeout(()=>speak(dojoCurrent.word,dojoCurrent.lang),150);$("#dojoStage").innerHTML=`<div><h2>Was hast du gehört?</h2><button id="dojoReveal" class="primary">Lösung zeigen</button><div id="dojoAnswer"></div></div>`}
 else if(dojoMode==="type"){$("#dojoStage").innerHTML=`<div style="width:100%"><h2>${esc(dojoCurrent.word)}</h2><input id="typeAnswer" autocomplete="off" placeholder="${LANGS[state.target][1]} eingeben"><button id="checkType" class="primary">Prüfen</button><div id="dojoAnswer"></div></div>`;$("#checkType").onclick=()=>{let v=$("#typeAnswer").value.trim().toLowerCase();$("#dojoAnswer").innerHTML=`<p>${v===answer.toLowerCase()?"✓ Richtig":"Antwort: <b>"+esc(answer)+"</b>"}</p>`;dojoRate(v===answer.toLowerCase())}}
 else if(dojoMode==="choice"){let opts=[answer];const seed=Object.values(SEED).map(x=>x[state.target]).filter(x=>x&&x!==answer);while(opts.length<4&&seed.length){let v=seed.splice(Math.floor(Math.random()*seed.length),1)[0];if(!opts.includes(v))opts.push(v)}opts.sort(()=>Math.random()-.5);$("#dojoStage").innerHTML=`<div style="width:100%"><h2>${esc(dojoCurrent.word)}</h2><div class="choices">${opts.map(o=>`<button data-choice="${encodeURIComponent(o)}">${esc(o)}</button>`).join("")}</div></div>`;$$("[data-choice]").forEach(b=>b.onclick=()=>dojoRate(decodeURIComponent(b.dataset.choice)===answer))}
 else{$("#dojoStage").innerHTML=`<div><h2>${esc(dojoCurrent.word)}</h2><p class="status">Erinnere dich aktiv, bevor du aufdeckst.</p><button id="dojoReveal" class="primary">Lösung zeigen</button><div id="dojoAnswer"></div></div>`}
 if($("#dojoReveal"))$("#dojoReveal").onclick=()=>{$("#dojoAnswer").innerHTML=`<h2>${esc(answer)}</h2><div class="choices"><button id="dojoNo">Noch nicht</button><button id="dojoYes">Gewusst</button></div>`;$("#dojoNo").onclick=()=>dojoRate(false);$("#dojoYes").onclick=()=>dojoRate(true)}
}
function dojoRate(ok){if(!dojoCurrent)return;let d=state.dojo[dojoCurrent.k];if(ok){d.due=Date.now()+3*86400000;if((d.fails||0)<=1)delete state.dojo[dojoCurrent.k];state.xp+=8}else{d.due=Date.now()+20*60000;d.fails=(d.fails||0)+1;state.fails++}save();renderDojo()}
function speak(text,lang){speechSynthesis.cancel();let u=new SpeechSynthesisUtterance(text);u.lang=LANGS[lang][2];u.rate=.88;speechSynthesis.speak(u)}
function nav(id){$$(".view").forEach(v=>v.classList.toggle("active",v.id===id));$$(".nav").forEach(b=>b.classList.toggle("active",b.dataset.view===id));if(id==="catalogView")renderCatalog();if(id==="grammarView")renderGrammar();if(id==="dojoView")renderDojo()}
$$(".nav").forEach(b=>b.onclick=()=>nav(b.dataset.view));$("#card").onclick=flip;$("#speakBtn").onclick=()=>current&&speak(current.w,state.source);$("#againBtn").onclick=()=>review("again");$("#unsureBtn").onclick=()=>review("unsure");$("#knownBtn").onclick=()=>review("known");
$("#source").onchange=()=>{state.source=$("#source").value;if(state.source===state.target){state.target=state.source==="de"?"en":"de";$("#target").value=state.target}$("#catalogLang").value=state.source;save();ensureCurrentList()};
$("#target").onchange=()=>{state.target=$("#target").value;if(state.target===state.source){state.source=state.target==="de"?"en":"de";$("#source").value=state.source}save();showCard()};
$("#swap").onclick=()=>{[state.source,state.target]=[state.target,state.source];$("#source").value=state.source;$("#target").value=state.target;save();ensureCurrentList()};
$("#syncBtn").onclick=syncAll;$("#catalogLang").onchange=()=>{page=0;renderCatalog()};$("#catalogSearch").oninput=()=>{page=0;renderCatalog()};$("#catalogBand").onchange=()=>{page=0;renderCatalog()};$("#prevPage").onclick=()=>{page=Math.max(0,page-1);renderCatalog()};$("#nextPage").onclick=()=>{page++;renderCatalog()};
$("#grammarLang").onchange=renderGrammar;$$(".mode").forEach(b=>b.onclick=()=>{$$(".mode").forEach(x=>x.classList.toggle("active",x===b));dojoMode=b.dataset.mode;renderDojo()});
$("#transSwap").onclick=()=>{let a=$("#transFrom").value;$("#transFrom").value=$("#transTo").value;$("#transTo").value=a};
$("#translateBtn").onclick=async()=>{let text=$("#transInput").value.trim();if(!text)return;$("#transOutput").textContent="Übersetze…";try{$("#transOutput").textContent=await translate(text,$("#transFrom").value,$("#transTo").value)}catch(e){$("#transOutput").textContent="Übersetzung fehlgeschlagen. Prüfe die Internetverbindung oder versuche es später."}};
$("#exportBtn").onclick=()=>{let blob=new Blob([JSON.stringify(state,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="vocapulse-progress.json";a.click();URL.revokeObjectURL(a.href)};
$("#importFile").onchange=async e=>{try{let j=JSON.parse(await e.target.files[0].text());state=j;save();location.reload()}catch{toast("Ungültige Fortschrittsdatei")}};
$("#resetBtn").onclick=()=>{if(confirm("Gesamten Lernfortschritt wirklich löschen?")){localStorage.removeItem("vp1-state");location.reload()}};
document.addEventListener("keydown",e=>{if(e.target.matches("input,textarea,select"))return;if(e.code==="Space"){e.preventDefault();flip()}if(e.key==="1")review("again");if(e.key==="2")review("unsure");if(e.key==="3")review("known")});
touchDay();updateStats();renderGrammar();ensureCurrentList();setTimeout(syncAll,700);
if("serviceWorker"in navigator)navigator.serviceWorker.register("./sw.js").catch(console.warn);
