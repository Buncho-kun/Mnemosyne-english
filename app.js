(()=>{'use strict';
const D=window.EIGO_DATA||{decks:[],groups:[]};
let byId={};
const BASE_DECKS=D.decks.slice(),BASE_GROUPS=D.groups.slice();
function buildDecks(){PK=null;SCH=null;
  const cds=(S.custom||[]).map(c=>({id:c.id,type:'vocab',title:c.title,sub:'自分で取り込んだ単語帳',stage:100,custom:true,
    items:c.items.map(([w,m])=>({k:'c:'+c.id+':'+w,w,pos:'',m}))}));
  D.decks=BASE_DECKS.concat(cds);
  D.groups=BASE_GROUPS.slice();
  if(cds.length)D.groups.splice(1,0,{title:'自分の単語帳',ids:cds.map(d=>d.id)});
  byId=Object.fromEntries(D.decks.map(d=>[d.id,d]));
}
const CATS=[
  {id:'word',t:'単語・熟語',s:'単語・熟語・語源',secs:[['単語：レベル別（難易度順）',['lv1','lv2','lv3','lv4','lv5']],['単語：出典別（入試・英検・TOEFL）',['kiso','jb','juken','jx','p1','e1','tw']],['単語：分野別',['ac','acp']],['熟語：大学入試',['jk','jid']],['熟語：英検準1級',['p1i']],['熟語：TOEFL ITP',['ti']],['語源：語根・語源・派生語',['roots','etym','deriv']]]},
  {id:'gram',t:'文法・語法',s:'4択・並べ替え・誤り指摘・ミス対策',secs:[['文法・語法：大学入試',['jg','jgh','jo']],['文法・語法：TOEFL ITP',['tu','ts','te']],['ミス対策：似ている単語・よくある誤り',['conf','confq','errtf']]]},
  {id:'rw',t:'読む・書く',s:'英文解釈・長文読解・英作文',secs:[['英文解釈：① 講義を読む → ② 構文の例文',['kaishaku','krei']],['長文読解：入試・TOEFL',['jr','tr']],['英作文：① 講義を読む → ② 例文を覚える',['eisaku','wrei']],['英作文：演習',['wtr','wfree','summ']],['英作文：カード',['wtips','wexp']]]},
  {id:'oral',t:'聞く・話す',s:'英会話フレーズ・リスニング・話す練習・発音',secs:[['会話フレーズ：基本のやりとり',['kw1','kw2','kw3','kw4','kw12']],['会話フレーズ：場面別',['kw9','kw10','kw11','kw5','kw6','kw17','kw7','kw16','kw13']],['会話フレーズ：人・口語表現',['kw14','kw8','kw15']],['会話フレーズ：フォーマルな場面（発表・会議・仕事）',['kw18','kw19','kw20','kw21','kw22']],['話す：音読・シャドーイング・AIと会話',['spk','rp']],['リスニング：聞き取り（4択）',['lw','lp','lq']],['リスニング：書き取り',['ld']],['リスニング：長文を聞く',['jr','tr']],['発音：フォニックス（講義 → 練習カード）',['phl','phonics']]]},
];
const SHORT={kw1:'あいさつ・相づち・返事',kw2:'気持ち・感情を伝える',kw3:'頼む・誘う・提案・断る',kw4:'意見を言う・会話をつなぐ',kw5:'買い物・レストラン',kw6:'旅行・道案内・交通',kw7:'学校・仕事・電話・体調',kw8:'句動詞・口語表現',kw9:'家・家族・毎日の生活',kw10:'友だちとの雑談・趣味・週末',kw11:'天気・季節・時間・予定',kw12:'トラブル・謝る・苦情',kw13:'SNS・メッセージ・メール',kw14:'人間関係・人について話す',kw15:'ネイティブらしい決まり文句',kw16:'健康・病院・身体',kw17:'道案内（尋ねる・教える）',kw18:'プレゼンテーション',kw19:'学会発表・質疑応答',kw20:'会議・ディスカッション',kw21:'ビジネスのメール・電話',kw22:'学会・交流会での会話',kiso:'① 高校基礎単語',jb:'② 入試基本単語',juken:'③ 入試重要単語',jx:'④ 入試単語・拡張',tw:'TOEFL 英単語',p1:'⑤ 英検準1級 単語',e1:'⑥ 英検1級・上級 単語',ac:'アカデミック単語',acp:'論文・研究の表現',
  jk:'入試 重要熟語',jid:'入試 イディオム・構文',ti:'TOEFL イディオム',p1i:'英検準1級 熟語・句動詞',
  roots:'① 語根・接頭辞・接尾辞',etym:'② 語源で推測する単語',deriv:'③ 派生語（品詞の変化）',phonics:'フォニックス',
  jg:'入試 文法（4択）',jgh:'入試 語法（4択）',jo:'入試 語句整序',tu:'TOEFL 語法',ts:'TOEFL Structure',te:'TOEFL Written Expression',
  conf:'似ている単語の区別',confq:'紛らわしい単語ドリル',errtf:'よくあるミス 正誤判定',
  kaishaku:'英文解釈の講義（構文）',jr:'入試 長文読解',tr:'TOEFL リーディング',
  eisaku:'英作文の講義（表現と論理構成）',phl:'フォニックスの講義（16回）',lw:'単語の聞き取り',spk:'音読・シャドーイング',rp:'AIと会話（ロールプレイ）',summ:'要約（英検準1級形式）',lp:'会話フレーズの聞き取り',lq:'応答を選ぶ',ld:'書き取り',wrei:'例文暗記（和→英）',krei:'構文の例文（英→和）',wtr:'和文英訳',wfree:'自由英作文',wtips:'考え方の型',wexp:'使える表現'};
function catsNow(){
  const cs=CATS.map(c=>({...c,secs:c.secs.map(([h,ids])=>[h,ids.filter(id=>byId[id])]).filter(s=>s[1].length)}));
  const used=new Set(cs.flatMap(c=>c.secs.flatMap(s=>s[1])));
  const cust=D.decks.filter(d=>d.custom).map(d=>d.id),w=cs.find(c=>c.id==='word');
  if(cust.length)w.secs.push(['自分の単語帳：',cust]);
  const rest=D.decks.filter(d=>!d.custom&&!used.has(d.id)&&!/^(ac|mock|due|word)$/.test(d.id)).map(d=>d.id);
  if(rest.length)w.secs.push(['その他：',rest]);
  return cs;
}
const app=document.getElementById('app');
const DAY=864e5, IV=[0,1,3,7,14,30,60], LS='eigo-app-v1';
const today=()=>{const d=new Date();return Math.floor((d.getTime()-d.getTimezoneOffset()*6e4)/DAY)};
const etyOf=w=>{try{return (window.EIGO_ETYM||{})[String(w).toLowerCase()]}catch(e){return null}};
const famHtml=(root,self)=>{const F=(window.EIGO_ROOTFAM||{})[root];if(!F)return '';const ws=F.words.filter(x=>x.w.toLowerCase()!==String(self).toLowerCase()).slice(0,5);if(!ws.length)return '';return `<div class="muted" style="margin-top:4px">同じ語根（${esc(root)}＝${esc(F.m)}）の仲間：<br>`+ws.map(x=>`<span class="en">${esc(x.w)}</span>（${esc(x.m)}）`).join('、')+'</div>'};
const etyHtml=(it)=>{if(!it)return '';if(it.pos==='語源')return `<div class="ety" style="text-align:left">${famHtml(it.root,it.w)}</div>`;const e=etyOf(it.w);return e?`<div class="ety" style="text-align:left">語源 <b class="en">${esc(e.b)}</b>${famHtml(e.r,it.w)}</div>`:''};
const plain=s=>String(s||'').replace(/[\[\]]/g,'');
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const canSpeak=(()=>{try{return 'speechSynthesis' in window&&typeof SpeechSynthesisUtterance!=='undefined'}catch(e){return false}})();
function speak(t,rate){try{speechSynthesis.cancel();const r=rate||(typeof curRate==='function'?curRate():.9);
  const parts=String(t).match(/[^.!?]+[.!?]+["')]*\s*|[^.!?]+$/g)||[t];
  for(const x of parts){const s2=x.trim();if(!s2)continue;const u=new SpeechSynthesisUtterance(s2);const vo=pickVoice();if(vo){u.voice=vo;u.lang=vo.lang}else u.lang='en-US';u.rate=r;speechSynthesis.speak(u)}}catch(e){}}
function enVoices(){try{return speechSynthesis.getVoices().filter(v=>/^en[-_]/i.test(v.lang))}catch(e){return []}}
function pickVoice(){const n=typeof S!=='undefined'&&S.set&&S.set.voice;if(!n)return null;return enVoices().find(v=>v.name===n)||null}
try{speechSynthesis.onvoiceschanged=()=>{if(typeof V!=='undefined'&&V.name==='settings')render()}}catch(e){}
function stopSpeak(){try{speechSynthesis.cancel()}catch(e){}}

/* ---------- 保存 ---------- */
const norm=r=>({ls:r&&r.ls||{},w:r&&r.w||{},star:Object.assign({ej:{},je:{}},r&&r.star),p:r&&r.p||{},q:r&&r.q||{},custom:r&&r.custom||[],set:Object.assign({dir:'ej',n:20},r&&r.set),plan:r&&r.plan||null,spk:r&&r.spk||[],log:r&&r.log||{},mock:r&&r.mock||[],t:r&&r.t||0});
let S=norm(null);
try{const r=localStorage.getItem(LS);if(r)S=norm(JSON.parse(r))}catch(e){}
buildDecks();
let ref=null,dirty=false,writing=false,timer=null,sync='local';
function saveLocal(){try{localStorage.setItem(LS,JSON.stringify(S))}catch(e){}}
function save(){S.t=Date.now();saveLocal();queueCloud()}
function queueCloud(){if(!ref)return;dirty=true;clearTimeout(timer);timer=setTimeout(flush,2500)}
async function flush(){
  if(!ref||writing||!dirty)return;
  writing=true;dirty=false;
  try{await ref.set({blob:JSON.stringify(S),t:S.t});sync='cloud'}catch(e){sync='local'}
  writing=false;syncLabel();
  if(dirty){clearTimeout(timer);timer=setTimeout(flush,2500)}
}
async function initCloud(tries){
  try{
    if(!window.claude||!window.claude.use){if(tries>0)setTimeout(()=>initCloud(tries-1),1500);return}
    const [db,user]=await Promise.all([window.claude.use('db'),window.claude.use('user')]);
    if(!db||!user)return;
    const id=await user.id();if(!id)return;
    const r=db.doc('data/users/'+id+'/progress');
    const snap=await Promise.race([r.get(),new Promise((_,rej)=>setTimeout(()=>rej(new Error('timeout')),10000))]);
    ref=r;sync='cloud';
    if(snap&&snap.exists){
      let remote=null;try{remote=norm(JSON.parse(snap.data().blob))}catch(e){}
      if(remote&&remote.t>S.t){S=remote;saveLocal();buildDecks();if(!ses)render()}
      else if(S.t>(remote?remote.t:0))queueCloud();
    }else if(S.t)queueCloud();
    syncLabel();
  }catch(e){}
}
let AI=null;
async function initAI(tries){try{if(!window.claude||!window.claude.use){if(tries>0)setTimeout(()=>initAI(tries-1),1500);return}AI=await window.claude.use('sample');if(AI&&ses&&ses.type==='comp')render()}catch(e){AI=null}}
function syncText(){return sync==='cloud'?'学習記録：アカウントに保存（端末をまたいで引き継ぎ）':'学習記録：この端末のブラウザに保存'}
function syncLabel(){const e=document.getElementById('sync');if(e)e.textContent=syncText()}
document.addEventListener('visibilitychange',()=>{if(document.hidden&&dirty){clearTimeout(timer);flush()}});

/* ---------- 集計 ---------- */
const stageSize=d=>d.stage||50;
function pool(d,st){if(st==null||st<0)return d.items;const n=stageSize(d);return d.items.slice(st*n,st*n+n)}
const pk=(k,dir)=>dir==='je'?'je:'+k:k;
const isStar=(k,dir)=>!!(S.star&&S.star[dir]&&S.star[dir][k]);
function starCount(items,dir){let n=0;for(const i of items)if(isStar(i.k,dir))n++;return n}
var SCH=null;
function schedOf(k){if(!S.plan)return null;if(!SCH){SCH=new Map();if(!PK)PK=planKeys();for(const k2 of PK.word.all)SCH.set(k2,'w');for(const k2 of PK.talk.all)SCH.set(k2,'r');if(byId.wrei)for(const i of byId.wrei.items)SCH.set(i.k,'r')}return SCH.get(k)||null}
function isDue(it,dir,t){const sc=schedOf(it.k);if(sc){if(dir!=='ej')return false;const e=wlog()[it.k];return !!e&&wdue(e)<=t}const p=S.p[pk(it.k,dir)];return !!p&&p[1]<=t}
function vstat(items,dir){dir=dir||'ej';const t=today();let learned=0,mastered=0,due=0;for(const i of items){if(isDue(i,dir,t))due++;const p=S.p[pk(i.k,dir)];if(!p)continue;learned++;if(p[0]>=4)mastered++}return {total:items.length,learned,mastered,due}}
function qitems(d){return d.type==='read'?d.items.flatMap(p=>p.qs):d.type==='lesson'?d.items.flatMap(l=>l.drills):d.items}
function qstat(items){let ok=0,ng=0;for(const i of items){const q=S.q[i.k];if(!q)continue;if(q[2])ok++;else ng++}return {total:items.length,ok,ng}}

/* ---------- 画面 ---------- */
let V={name:'home'},ses=null,OSEC={};
function go(v){V=v;ses=null;if((v.name==='deck'&&byId[v.id]&&!/^(due|mock|word)$/.test(v.id))||v.name==='lesson'){S.last={n:v.name,id:v.id,li:v.li,from:v.from||'',t:Date.now()};save()}render();window.scrollTo(0,0)}
const ICO={find:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/></svg>',set:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h9M17 7h3M4 17h4M12 17h8"/><circle cx="15" cy="7" r="2"/><circle cx="10" cy="17" r="2"/></svg>'};
function hicons(){return `<span class="hb r hic"><button class="ib ${V.name==='search'?'on':''}" data-act="searchv" aria-label="検索">${ICO.find}</button><button class="ib ${V.name==='settings'?'on':''}" data-act="settings" aria-label="設定">${ICO.set}</button></span>`}
function head(title,back){if(!title&&!back)return `<header class="hhome"><span class="hb hlogo">Mnemosyne</span><h1></h1>${hicons()}</header>`;return `<header>${back?'<button class="hb l" data-act="back">‹ 戻る</button>':'<span class="hb"></span>'}<h1>${esc(title)}</h1>${hicons()}</header>`}
function navNow(){if(ses){const d=ses.d||byId[V.id];const c=d&&(catsNow().find(x=>x.secs.some(s=>s[1].includes(d.id)))||{}).id;return c||''}
  if(V.name==='home')return 'home';if(V.name==='settings'||V.name==='import'||V.name==='search')return '';if(V.name==='plan')return 'home';if(V.name==='mockv'||V.name==='miss'||V.name==='stats')return 'home';
  if(V.name==='cat')return V.c;const c=V.from||(catsNow().find(x=>x.secs.some(s=>s[1].includes(V.id)))||{}).id;return c||''}
function paintNav(){const n=navNow();document.querySelectorAll('.bnav [data-v]').forEach(b=>{if(b.dataset.v===n)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current')})}

function deckStat(d){
  if(d.type==='vocab'){const s=vstat(d.items,'ej'),dj=vstat(d.items,'je').due;return {due:s.due+dj,ng:0,p:s.total?s.mastered/s.total:0,p2:s.total?(s.learned-s.mastered)/s.total:0,n:s.total+(/^kw/.test(d.id)?'表現':/^(wrei|krei|spk)$/.test(d.id)?'文':'語')}}
  const s=qstat(qitems(d));return {due:0,ng:s.ng,p:s.total?s.ok/s.total:0,p2:0,n:(d.type==='read'?d.items.length+'題・':d.type==='lesson'?d.items.length+'課・':'')+s.total+'問'};
}
function deckRow(id){const d=byId[id],st=deckStat(d);
  const b=st.due?`<span class="badge">復習 ${st.due}</span>`:st.ng?`<span class="badge">要復習 ${st.ng}</span>`:d.type==='lesson'?'<span class="badge lec">講義</span>':'';
  return `<button class="deck" data-act="deck" data-v="${id}"><div class="t"><span>${esc(SHORT[id]||d.title)}</span>${b}</div><div class="s">${esc(d.sub)}・${st.n}</div><div class="bar"><i style="width:${st.p*100}%"></i>${st.p2?`<i class="b2" style="width:${st.p2*100}%"></i>`:''}</div></button>`}
function home(){
  let due=0,mastered=0,learned=0,solved=0,stE=0,stJ=0;
  for(const d of D.decks){if(d.type==='vocab'){for(const dir of ['ej','je']){const s=vstat(d.items,dir);due+=s.due;if(dir==='ej'){mastered+=s.mastered;learned+=s.learned}}stE+=starCount(d.items,'ej');stJ+=starCount(d.items,'je')}else solved+=qstat(qitems(d)).ok}
  let h=head('',false);
  const ml=missList().reduce((a,x)=>a+x[1],0),log=S.log||{},t0=today();let streak=0;for(let d=log[t0]?t0:t0-1;log[d];d--)streak++;
  h+=`<div class="hero logo"><h1 style="position:absolute;left:-9999px">Mnemosyne</h1><img class="lg-l" src="logo-light.webp" alt="Mnemosyne 英語学習アプリ"><img class="lg-d" src="logo-dark.webp" alt="Mnemosyne 英語学習アプリ"></div>`;
  h+=`<div class="quick"><button class="${due?'hot':''}" data-act="alldue"><b>${due}</b><span>今日の復習</span></button><button class="${ml?'hot':''}" data-act="missv"><b>${ml}</b><span>まちがい</span></button><button data-act="statsv"><b>${streak}</b><span>連続日数</span></button><button data-act="mockv"><b>${(S.mock||[]).length}</b><span>実力テスト</span></button></div>`;
  h+=homeExtras(1);
  h+=planHome();
  h+=homeExtras(2);
  h+=`<div class="foot" id="sync">${syncText()}</div>`;
  return h;
}
function homeExtras(part){let h='';const t=today();
  // 続きから
  const L=S.last;if(part===1){if(L&&byId[L.id]){const d=byId[L.id];const nm=L.n==='lesson'?`${esc(SHORT[d.id]||d.title)}　${esc((d.items[L.li]||{}).no||'')}`:esc(SHORT[d.id]||d.title);
    h+=`<h2>続きから</h2><div class="grp"><button class="deck" data-act="resume"><div class="t"><span>${nm}</span><span class="chev">›</span></div>${L.n==='lesson'&&d.items[L.li]?`<div class="s">${esc(d.items[L.li].title)}</div>`:`<div class="s">${esc(d.sub||'')}</div>`}</button></div>`}return h}
  // 今週の学習
  const log=S.log||{},wk=[];for(let d=t-6;d<=t;d++)wk.push([d,log[d]||0]);const mx=Math.max(10,...wk.map(x=>x[1])),sum=wk.reduce((a,x)=>a+x[1],0);
  const WD='日月火水木金土';
  h+=`<h2>今週の学習<span class="h2r">7日で ${sum} 問・枚</span></h2><button class="wk" data-act="statsv">`+wk.map(([d,n])=>`<span class="wd ${d===t?'td':''}"><i style="height:${Math.max(n?8:2,n/mx*100)}%"></i><em>${WD[new Date(d*DAY).getUTCDay()]}</em></span>`).join('')+'</button>';
  // 今日の一語・今日の表現
  const pick=(arr,salt)=>arr.length?arr[(t*7+salt)%arr.length]:null;
  const W=pick([].concat(byId.lv3?byId.lv3.items:[],byId.lv4?byId.lv4.items:[]).filter(i=>i.ex&&/^[A-Za-z][a-z-]+$/.test(i.w)),3);
  const P=pick(D.decks.filter(d=>/^kw\d/.test(d.id)).flatMap(d=>d.items).filter(i=>i.ex&&!/~/.test(i.w)),11);
  const exh=x=>esc(String(x||'').replace(/\[|\]/g,''));
  if(W||P){h+='<h2>今日の一語・ひとこと</h2><div class="grp">';
    if(W)h+=`<div class="deck daily"><div class="t"><span class="en dw">${esc(W.w)}</span><span class="ib sm" data-act="say" data-v="${esc(W.w)}">▶</span></div><div class="s">${esc(W.pos||'')}　${esc(W.m)}</div><div class="s en dx2" data-act="say" data-v="${exh(W.ex)}">${exh(W.ex)}</div></div>`;
    if(P)h+=`<div class="deck daily"><div class="t"><span class="en dw">${esc(String(P.w).replace(/\[|\]/g,''))}</span><span class="ib sm" data-act="say" data-v="${esc(String(P.w).replace(/\[|\]/g,''))}">▶</span></div><div class="s">${esc(P.m)}</div><div class="s en dx2" data-act="say" data-v="${exh(P.ex)}">${exh(P.ex)}</div></div>`;
    h+='</div>'}
  return h}
/* ---------- 学習プラン（3年で3周・1年で1周＋総復習） ---------- */
const PLAN_AREAS=[
  {id:'phon',t:'フォニックス',cat:'oral',decks:['phonics'],seq:true,front:true},
  {id:'word',t:'単語',cat:'word',sched:'once',decks:['lv1','lv2','lv3','lv4','kiso','jb','juken','jx','p1','tw','acp'],seq:true,skip:'lv5'},
  {id:'idiom',t:'熟語・イディオム',cat:'word',decks:['jk','jid','p1i','ti']},
  {id:'talk',t:'日常英会話',cat:'oral',sched:'rep',span:150,decks:['kw1','kw2','kw3','kw4','kw12','kw9','kw10','kw11','kw5','kw6','kw17','kw7','kw16','kw13','kw14','kw8','kw15','kw18','kw19','kw20','kw21','kw22'],seq:true},
  {id:'listen',t:'リスニング',cat:'oral',decks:['lp','lq','ld'],laps:[.7,.85,1,1.15]},
  {id:'root',t:'語源',cat:'word',decks:['roots','etym','deriv'],seq:true},
  {id:'gram',t:'文法・語法',cat:'gram',decks:['jg','jgh','jo','tu','ts','te']},
  {id:'miss',t:'ミス対策',cat:'gram',decks:['conf','confq','errtf']},
  {id:'read',t:'英文解釈・読解',cat:'rw',decks:['kaishaku','jr','tr']},
  {id:'summ',t:'要約（英検形式）',cat:'rw',decks:['summ'],only:3},
  {id:'write',t:'英作文',cat:'rw',decks:['eisaku','wrei','wtr','wfree','wtips','wexp']},
];
const PLAN_YEAR=365,PLAN_NEW=300,PLAN_FRONT=30,PLAN_CYCLES=3;
const WSTEP=[1,3,7,30],REI_ROUND=90; // 例文は1か月後のあとも3か月ごとに回す
function wlog(){const c=planCyc();if(!S.plan.wl||S.plan.wlc!==c){S.plan.wl={};S.plan.wlc=c}return S.plan.wl}
function planCyc(){return Math.floor((today()-S.plan.start)/PLAN_YEAR)+1}
// e=[初回日, 済んだ回数(1〜5), 要注意, 次の日(上書き)]
function wdue(e){if(e[1]>=5&&!e[5])return Infinity;if(e[3])return e[3];return e[0]+WSTEP[e[1]-1]}
function wmark(k,g,rei){const W=wlog(),t=today();let e=W[k];
  if(!e){W[k]=[t,1,g<2?1:0,0,0,rei?1:0];return}
  if(wdue(e)>t)return; // 今日が予定日でなければ記録しない
  if(g<2)e[2]=1;
  if(e[1]>=4){if(g<2){e[1]=3;e[2]=1;e[3]=t+7;e[4]=1;return}if(e[5]){e[1]++;e[3]=t+REI_ROUND;return}e[1]=5;e[3]=0;return}
  if(e[1]===3&&e[4]){e[1]=4;e[3]=t+30;return} // 5回目でまちがえた単語：1週間後→そこから1か月後
  e[1]++;e[3]=0;
  if(e[1]===3&&!e[2]&&!isStar(k,'ej')&&!isStar(k,'je'))e[1]=4;}
function seen(k){if(!k)return;{const t=today();S.log=S.log||{};S.log[t]=(S.log[t]||0)+1}if(!S.plan)return;(S.plan.seen||(S.plan.seen={}))[k]=today()}
function planKeys(){ // 分野ごとの項目（重複は最初の分野に入れる）
  const used=new Set(),out={};
  for(const a of PLAN_AREAS){const per={};let all=[];const skip=new Set(a.skip&&byId[a.skip]?byId[a.skip].items.map(i=>i.k):[]);
    for(const id of a.decks){const d=byId[id];if(!d)continue;const ks=[];for(const i of qitems(d)){if(!i||!i.k||used.has(i.k)||skip.has(i.k))continue;used.add(i.k);ks.push(i.k)}per[id]=ks;all=all.concat(ks)}
    out[a.id]={per,all}}
  return out;
}
var PK=null;
function planInfo(){
  if(!S.plan)return null;
  if(!PK)PK=planKeys();
  const t=today(),el=t-S.plan.start,cyc=Math.floor(el/PLAN_YEAR)+1,day=el-(cyc-1)*PLAN_YEAR,c0=S.plan.start+(cyc-1)*PLAN_YEAR,sn=S.plan.seen||{};
  const areas=PLAN_AREAS.map(a=>{const K=PK[a.id];const N=K.all.length;if(!N)return null;if(a.only&&a.only!==cyc)return null;
    let span=a.span||(a.front?PLAN_FRONT:PLAN_NEW),dd=day,from=c0,wp=null;
    let lap=null;
    if(a.laps){if(day<PLAN_FRONT)return {...a,N,wait:true,done:0,left:0,before:0,todayN:0,quota:0,rate:0,behind:0};
      const len=Math.floor((PLAN_YEAR-PLAN_FRONT)/a.laps.length),x=Math.min(a.laps.length-1,Math.floor((day-PLAN_FRONT)/len));
      lap={i:x,n:a.laps.length,rate:a.laps[x]};span=x===a.laps.length-1?PLAN_YEAR-PLAN_FRONT-len*x:len;dd=day-PLAN_FRONT-x*len;from=c0+PLAN_FRONT+x*len}
    const frac=Math.min(1,(dd+1)/span);
    let before=0,todayN=0,rv=0,rvd=0;
    if(a.sched){const W=wlog();for(const k of K.all){const e=W[k];if(!e)continue;if(e[0]<t)before++;else todayN++;const du=wdue(e);if(du<=t)rv++}wp=true}
    else for(const k of K.all){const v=sn[k];if(v==null||v<from)continue;if(v<t)before++;else todayN++}
    const target=Math.ceil(N*frac),quota=Math.max(0,target-before),rate=Math.ceil(N/span);
    // おすすめの講座
    const st=a.decks.filter(id=>K.per[id]&&K.per[id].length).map(id=>{const ks=K.per[id];let n=0;for(const k of ks){const v=sn[k];if(v!=null&&v>=from)n++}return {id,n,N:ks.length,r:n/ks.length}});
    const open=st.filter(x=>x.n<x.N);let rec=null;
    if(open.length)rec=a.seq?open[0]:open.slice().sort((x,y)=>x.r-y.r)[0];
    if(a.id==='phon'&&byId.phl){const ls=byId.phl.items;for(let li=0;li<ls.length;li++){const l=ls[li];const ks=byId.phonics.items.filter(i=>l.cards.includes(i.cat));
      const read=S.ls&&S.ls[l.k],cardsDone=ks.every(i=>{const v=sn[i.k];return v!=null&&v>=from});if(read&&cardsDone)continue;
      rec={id:'phl',li,label:l.no+(read?' 練習カード':' 講義を読む')+'：'+l.title};break}}
    if(a.id==='write'&&byId.eisaku){const es=byId.eisaku;for(let li=0;li<es.items.length;li++){const l=es.items[li];
      if(l.drills.every(x=>{const v=sn[x.k];return v!=null&&v>=from}))continue;
      const rx=reiOf('eisaku',li),need=rx.some(x=>!reiOK(x));rec={id:'eisaku',li,step:need?'rei':'drill',label:l.no+(need?' 例文を覚える':' 例題を書く')};break}}
    return {...a,N,before,todayN,done:before+todayN,quota,left:planSkip(t)?0:Math.max(0,Math.min(quota,rate+Math.ceil(Math.max(0,Math.min(N,Math.ceil(N*Math.min(1,dd/span)))-before)/7))-todayN),rate,rec,behind:Math.max(0,Math.min(N,Math.ceil(N*Math.min(1,dd/span)))-before),wp,from,rv,lap}}).filter(Boolean);
  const review=day>=PLAN_NEW;
  return {t,cyc,day,c0,areas,review,over:cyc>PLAN_CYCLES};
}
function startPlanWord(aid){aid=aid||'word';const pi=planInfo();if(!pi)return;const a=pi.areas.find(x=>x.id===aid);if(!a)return;
  const map={};for(const d of D.decks)if(d.type==='vocab')for(const i of d.items)if(!map[i.k])map[i.k]=i;
  const W=wlog(),t=today(),due=PK[aid].all.filter(k=>W[k]&&wdue(W[k])<=t).sort((x,y)=>wdue(W[x])-wdue(W[y])).map(k=>map[k]).filter(Boolean);
  const nw=PK[aid].all.filter(k=>!W[k]).slice(0,a.left).map(k=>map[k]).filter(Boolean);
  const q=shuffle(due.slice(0,50)).concat(nw).slice(0,50);if(!q.length){go({name:'home'});return}
  ses={type:'flash',d:{id:aid,title:a.t+'（プラン）'},dir:S.set.dir||'ej',queue:q,i:0,flip:false,cnt:[0,0,0],rep:{},ahead:false,first:q.length,again:'planword',againV:aid,plan:true,prep:a.sched==='rep'};
  render();window.scrollTo(0,0)}
function reiDue(){if(!S.plan||!byId.wrei)return [];const W=wlog(),t=today();return byId.wrei.items.filter(x=>W[x.k]&&wdue(W[x.k])<=t)}
function startReiReview(){const q=shuffle(reiDue()).slice(0,50);if(!q.length)return;
  ses={type:'flash',d:{id:'wrei',title:'例文の復習'},dir:'je',queue:q,i:0,flip:false,cnt:[0,0,0],rep:{},ahead:false,first:q.length,again:'planrei'};render();window.scrollTo(0,0)}
function planSkip(d){return !!(S.plan&&S.plan.skip&&S.plan.skip[d])}
function planDueQ(a){let n=0;const K=PK[a.id];for(const k of K.all){const q=S.q[k];if(q&&!q[2])n++}return n}
function planRow(a,pi){
  const fin=a.done>=a.N;
  let right,sub;
  if(a.wait){return `<div class="deck prow"><div class="t"><span>${esc(a.t)}</span><span class="pleft">${PLAN_FRONT+1}日目から</span></div><div class="s">フォニックスのあとに始めます。年4周、周ごとに速くなります</div></div>`}
  if(a.wp&&(a.left||a.rv)){right=`<span class="pleft">${a.left?`新しく <b>${a.left}</b>`:''}${a.left&&a.rv?'　':''}${a.rv?`復習 <b>${a.rv}</b>`:''}</span>`;sub=a.sched==='rep'?'フレーズを覚える・くり返す':'カードで覚える・くり返す'+(a.behind>a.rate?`・遅れ ${a.behind}`:'')}
  else if(a.wp&&fin){right='<span class="pdone">完了</span>';sub=a.sched==='rep'?'すべて一度覚えました。復習日に出てきます':'今年の新しい単語はすべて覚えました'}
  else if(fin){right='<span class="pdone">1周完了</span>';sub=pi.review?'総復習期間：まちがえた問題と復習カードを解く':'この周はすべて終わりました'}
  else if(a.front&&pi.day>=PLAN_FRONT&&a.left===0){right='<span class="pdone">完了</span>';sub=''}
  else if(a.left===0){right='<span class="pdone">今日は完了</span>';sub=a.rec?`次：${esc(a.rec.label||SHORT[a.rec.id]||byId[a.rec.id].title)}`:''}
  else{right=`<span class="pleft">あと <b>${a.left}</b></span>`;sub=a.rec?esc(a.rec.label||SHORT[a.rec.id]||byId[a.rec.id].title)+(a.behind>a.rate?`・遅れ ${a.behind}`:a.behind>0?`・遅れ ${a.behind}`:''):''}
  const p=Math.round(a.done/a.N*100);
  const tgt=a.rec&&a.rec.id==='phl'&&!fin?`data-act="planles" data-v="${a.rec.li}" data-d="phl"`:a.lap&&a.left&&a.rec?`data-act="planlis" data-v="${a.rec.id}"`:a.wp&&(a.left||a.rv)?`data-act="planword" data-v="${a.id}"`:fin||!a.rec?`data-act="cat0" data-v="${a.cat}"`:a.rec.li!=null?`data-act="planles" data-v="${a.rec.li}"`:`data-act="plango" data-v="${a.rec.id}" data-c="${a.cat}"`;
  return `<button class="deck prow" ${tgt}><div class="t"><span>${esc(a.t)}${a.lap?`<small class="pp">${a.lap.i+1}/${a.lap.n}周・${rateName(a.lap.rate)}</small>`:''}</span>${right}</div>${sub?`<div class="s">${sub}</div>`:''}<div class="bar"><i style="width:${p}%"></i></div></button>`;
}
function planHome(){
  if(!S.plan)return `<h2>学習プラン</h2><div class="grp"><button class="deck" data-act="plan"><div class="t"><span>3年で全範囲を3周するプラン</span><span class="chev">›</span></div><div class="s">1年で全分野を1周＋総復習。毎日の分量を分野ごとに自動で出します</div></button></div>`;
  const pi=planInfo();
  if(!pi.over&&planSkip(pi.t)){const rv=pi.areas.reduce((a,x)=>a+(x.rv||0),0)+reiDue().length;return `<h2>今日のプラン<span class="h2r">${pi.cyc}周目・${pi.day+1}日目</span><button class="h2l" data-act="plan">詳しく ›</button></h2><div class="grp"><div class="deck"><div class="t"><span>今日はお休みの日</span></div><div class="s">新しい分は、このあと1週間ほどで少しずつ取り戻します。${rv?`復習日が来ているもの（${rv}）は、できれば今日やっておくと楽です。`:''}</div></div>${rv?`<button class="deck prow" data-act="alldue"><div class="t"><span>復習だけやる</span><span class="pleft"><b>${rv}</b></span></div></button>`:''}<button class="deck" data-act="skipday" data-v="${pi.t}"><div class="t"><span>やっぱり今日もやる</span><span class="chev">›</span></div></button></div>`}
  if(pi.over)return `<h2>学習プラン</h2><div class="grp"><button class="deck" data-act="plan"><div class="t"><span>3周が終わりました</span><span class="chev">›</span></div><div class="s">設定から新しいプランを始められます</div></button></div>`;
  const ar=pi.areas.filter(a=>!(a.front&&pi.day>=PLAN_FRONT&&a.left===0&&a.todayN===0));
  const left=ar.reduce((s,a)=>s+a.left+(a.rv||0),0)+reiDue().length,did=ar.reduce((s,a)=>s+a.todayN,0);
  let h=`<h2>今日のプラン<span class="h2r">${pi.cyc}周目・${pi.day+1}日目${pi.review?'（総復習期間）':''}</span><button class="h2l" data-act="plan">詳しく ›</button></h2>`;
  {const tot=pi.areas.reduce((a,x)=>a+x.N,0),dn=pi.areas.reduce((a,x)=>a+Math.min(x.done,x.N),0),pc=tot?Math.round(dn/tot*100):0;
   h+=`<div class="pday">今日 <b>${did}</b> 問・枚　残り <b class="${left?'hot':''}">${left}</b><span class="pall">${pi.cyc}周目の進み ${pc}%</span></div><div class="pbar"><i style="width:${pc}%"></i></div>`}
  const rd=reiDue().length;
  const mk=mockDue()?`<button class="deck prow" data-act="mockv"><div class="t"><span>実力テスト（第${mockSched().no}回）</span><span class="pleft"><b>40</b>問</span></div><div class="s">今月のテストの日です。約15分</div></button>`:'';
  const act=ar.filter(a=>!a.wait&&(a.left||a.rv)),fin=ar.filter(a=>!a.wait&&!(a.left||a.rv));
  h+='<div class="grp pgrp">'+mk+act.map(a=>planRow(a,pi)).join('')+(fin.length?`<button class="deck prow pdonerow" data-act="plan"><div class="t"><span>今日は完了</span><span class="pdone">${fin.length}分野</span></div><div class="s">${fin.map(a=>esc(a.t)).join('・')}</div></button>`:'')+`<button class="deck prow skiprow" data-act="skipday" data-v="${pi.t}"><div class="t"><span>今日は休む</span><span class="chev">›</span></div><div class="s">今日の分は、その週と翌週に少しずつ上乗せします</div></button>`+(rd?`<button class="deck prow" data-act="planrei"><div class="t"><span>英作文の例文</span><span class="pleft">復習 <b>${rd}</b></span></div><div class="s">翌日・3日後・1週間後・1か月後、そのあと3か月ごと</div></button>`:'')+'</div>';
  return h;
}
function planView(){
  let h=head('学習プラン',true);
  h+=`<div class="ptext"><p>全範囲を<b>1年で1周</b>し、それを<b>3年で3周</b>します。1年のうち最初の${PLAN_NEW}日で新しい内容を一通り進め、残りの${PLAN_YEAR-PLAN_NEW}日は総復習（まちがえた問題・復習カード）にあてます。</p><p><b>単語は1語ごとに5回</b>くり返します。1回目に覚えたら、2回目は翌日、3回目は3日後、4回目は1週間後（まちがえた・あいまいだった・チェックを付けた単語だけ）、5回目は1か月後。1か月後（5回目）にまちがえた・あいまいだった単語は4回目に戻り、1週間後にもう一度、そのあと1か月後にまた出ます。英作文の例文と日常英会話のフレーズも同じ間隔で回し、さらに1か月後のあとも3か月ごとに出るので、1年で何周もします。英会話の新しいフレーズは半年（1日 約6）で一通り入れるので、年内に何周もできます。新しい単語は1日 約${Math.ceil((PK||planKeys()).word.all.length/PLAN_NEW)}語ずつ、やさしい順に増えます。</p><p>フォニックスは基礎なので、各周の最初の${PLAN_FRONT}日でまとめて終えます。それ以外の分野は毎日少しずつ並行して進めます。分野の中では、単語はやさしいレベルから順に、文法などは進み具合の少ない講座から出します。</p><p><b>実力テスト</b>は30日ごと（1年に12回）にあり、点数の推移で伸びを確かめます。<b>要約（英検形式）</b>は仕上げとして3年目だけに入ります（40題・およそ週1題）。AIとの会話は、好きなときに使う機能として計画には入れていません。</p><p>予定より遅れた分（休んだ日の分を含む）は、そのあと1週間ほどに少しずつ上乗せされ、先に進めた分は差し引かれます。</p></div>`;
  if(!S.plan){
    if(!PK)PK=planKeys();
    h+='<h2>分野ごとの量（1周）</h2><div class="grp">'+PLAN_AREAS.map(a=>{const N=PK[a.id].all.length;const sp=a.span||(a.laps?Math.floor((PLAN_YEAR-PLAN_FRONT)/a.laps.length):a.front?PLAN_FRONT:PLAN_NEW);return N?`<div class="deck"><div class="t"><span>${esc(a.t)}</span><span class="pleft">${N}　1日 約${Math.ceil(N/sp)}</span></div>${a.front?'<div class="s">最初の30日で</div>':a.only?`<div class="s">${a.only}年目のみ</div>`:''}</div>`:''}).join('')+'</div>';
    const tot=PLAN_AREAS.reduce((s,a)=>s+PK[a.id].all.length,0);
    h+=`<p class="muted" style="margin:8px 4px 16px">合計 ${tot} 項目・1日あたり約 ${Math.ceil(tot/PLAN_NEW)}（最初の30日はフォニックス分が加わります）＋単語カードの復習</p>`;
    h+='<button class="btn p" data-act="planstart">今日から始める</button>';
    return h;
  }
  const pi=planInfo();
  {const W=wlog(),t=today();let c=[0,0,0,0,0,0],dueN=0;for(const k of PK.word.all){const e=W[k];if(!e){c[0]++;continue}c[Math.min(5,e[1])]++;if(wdue(e)<=t)dueN++}
   h+=`<h2>単語のくり返し<span class="h2r">今日の復習 ${dueN}</span></h2><div class="grp">`+[['まだ',c[0]],['1回目のみ',c[1]],['翌日まで済み',c[2]],['3日後まで済み',c[3]],['1週間後まで済み',c[4]],['1か月後まで済み（完了）',c[5]]].map(([l,n])=>`<div class="deck"><div class="t"><span>${l}</span><span class="pleft">${n}</span></div></div>`).join('')+'</div>'}
  const d0=new Date((S.plan.start)*DAY),fmt=d=>`${d.getUTCFullYear()}年${d.getUTCMonth()+1}月${d.getUTCDate()}日`;
  h+=`<h2>進み具合<span class="h2r">${Math.min(pi.cyc,PLAN_CYCLES)}周目・${pi.day+1}日目</span></h2>`;
  h+='<div class="grp">'+pi.areas.map(a=>{const p=Math.round(a.done/a.N*100);const sp=a.front?PLAN_FRONT:PLAN_NEW,exp=Math.min(a.N,Math.ceil(a.N*Math.min(1,(pi.day+1)/sp))),expY=Math.min(a.N,Math.ceil(a.N*Math.min(1,pi.day/sp))),lag=Math.max(0,expY-a.before);const ng=planDueQ(a);
    return `<button class="deck" data-act="cat0" data-v="${a.cat}"><div class="t"><span>${esc(a.t)}</span><span class="pleft">${a.done} / ${a.N}</span></div><div class="s">今日までの予定 ${exp}・${a.done>=exp?'予定どおり':lag?'遅れ '+lag:'今日の分あと '+(exp-a.done)}${ng?`・まちがえたまま ${ng}`:''}</div><div class="bar"><i style="width:${p}%"></i></div></button>`}).join('')+'</div>';
  h+='<h2>3年の流れ</h2><div class="grp">'+[1,2,3].map(c=>{const a=new Date((S.plan.start+(c-1)*PLAN_YEAR)*DAY),b=new Date((S.plan.start+(c-1)*PLAN_YEAR+PLAN_NEW)*DAY);return `<div class="deck"><div class="t"><span>${c}周目</span>${c===pi.cyc?'<span class="pleft"><b>いまここ</b></span>':''}</div><div class="s">${fmt(a)}〜　新しい内容は${fmt(b)}まで、その後は総復習</div></div>`}).join('')+'</div>';
  {const t=today(),WD='日月火水木金土';h+='<h2>休む日<span class="h2r">押して切り替え</span></h2><div class="days">';for(let d=t;d<t+14;d++){const dt=new Date(d*DAY);h+=`<button class="dayc ${planSkip(d)?'on':''}" data-act="skipday" data-v="${d}"><b>${dt.getUTCMonth()+1}/${dt.getUTCDate()}</b><span>${d===t?'今日':WD[dt.getUTCDay()]}</span></button>`}
   h+='</div><p class="muted" style="margin:6px 4px 0">当直などで勉強できない日を選んでおくと、その日の分はゼロになり、遅れた分はそのあと1週間ほどに少しずつ上乗せされます（1日の上乗せは遅れの1/7まで）。</p>'}
  h+=`<p class="muted" style="margin:8px 4px">開始日：${fmt(d0)}</p>`;
  h+='<button class="btn" data-act="planback">予定を1日うしろにずらす（休んだ日の分）</button>';
  h+='<button class="btn ghost" data-act="planstop">プランをやめる</button>';
  return h;
}
function catView(){
  const c=catsNow().find(x=>x.id===V.c);if(!c){V={name:'home'};return home()}
  let h=head(c.t,true);
  let secs=c.secs;
  const groups=[...new Set(secs.map(([hd])=>hd.split('：')[0]))];
  if(groups.length>1){let cur=OSEC[c.id];if(!groups.includes(cur))cur=groups[0];
    h+='<div class="chips seg ctabs">'+groups.map(g=>`<button class="chip ${cur===g?'on':''}" data-act="osec" data-v="${esc(g)}">${esc(g)}</button>`).join('')+'</div>';
    secs=secs.filter(([hd])=>hd.split('：')[0]===cur).map(([hd,ids])=>[hd.replace(/^[^：]+：/,''),ids]);
    if(c.id==='word'&&cur==='単語'){let e=0,j=0;for(const d of D.decks)if(d.type==='vocab'){e+=starCount(d.items,'ej');j+=starCount(d.items,'je')}if(e||j)h+=`<div class="grp"><button class="deck" data-act="gstar" data-v="${e?'ej':'je'}"><div class="t"><span>★ チェックした語</span><span class="pleft">${e+j}語</span></div></button></div>`}}
  for(const [hd,ids] of secs){if(hd)h+=`<h2>${esc(hd)}</h2>`;h+='<div class="grp">'+ids.map(deckRow).join('')+'</div>'}
  return h;
}
function deckView(){
  const d=byId[V.id];let h=head(d.title,true);
  if(d.type==='vocab'){
    const dir=V.dir||S.set.dir||'ej',st=V.st==null?-1:V.st,items=pool(d,st),s=vstat(items,dir),n=stageSize(d),stages=Math.ceil(d.items.length/n),sc=starCount(d.items,dir);
    h+='<div class="chips seg">'+[['ej','英 → 和'],['je','和 → 英']].map(([v,l])=>`<button class="chip ${dir===v?'on':''}" data-act="vdir" data-v="${v}">${l}</button>`).join('')+'</div>';
    h+=`<div class="stats"><div class="stat"><b>${s.mastered}</b><span>定着</span></div><div class="stat"><b>${s.learned-s.mastered}</b><span>学習中</span></div><div class="stat"><b>${s.total-s.learned}</b><span>未学習</span></div></div>`;
    if(stages>12){h+=`<label class="rangesel"><span>範囲</span><select id="stageSel"><option value="-1" ${st<0?'selected':''}>全範囲（${d.items.length}語）</option>`;
      for(let i=0;i<stages;i++)h+=`<option value="${i}" ${st===i?'selected':''}>${i*n+1}–${Math.min(d.items.length,(i+1)*n)}</option>`;
      h+='</select></label>'}
    else if(stages>1){h+=`<div class="chips"><button class="chip ${st<0?'on':''}" data-act="stage" data-v="-1">全範囲</button>`;
      for(let i=0;i<stages;i++)h+=`<button class="chip ${st===i?'on':''}" data-act="stage" data-v="${i}">${i*n+1}–${Math.min(d.items.length,(i+1)*n)}</button>`;
      h+='</div>'}
    const nw=Math.min(Math.max(0,S.set.n-s.due),s.total-s.learned);
    const dl=dir==='je'?'和→英':'英→和';
    h+=`<button class="btn p" data-act="flash">フラッシュカード（${dl}）<small>復習 ${Math.min(s.due,S.set.n)}・新規 ${nw}</small></button>`;
    h+=`<button class="btn" data-act="starflash" ${sc?'':'disabled'}>★ チェックした単語を復習（${dl}）<small>${sc}語${sc?'':'・カードの「☆ チェック」で追加'}</small></button>`;
    h+=`<button class="btn" data-act="quiz">4択クイズ（${dl}）<small>10問</small></button>`;
    const cz=items.filter(i=>i.ex&&i.ex.includes('[')).length;
    if(cz)h+=`<button class="btn" data-act="cloze">例文穴埋め<small>10問・例文の空所に入る熟語を選ぶ</small></button>`;
    h+=`<button class="btn" data-act="list">一覧を見る</button>`;
    if(d.custom)h+=`<button class="btn" data-act="deldeck" style="color:var(--warn)">${V.confirm?'本当に削除する（もう一度押す）':'この単語帳を削除'}</button>`;
  }else if(d.type==='lesson'){
    const s=qstat(qitems(d));
    h+=`<div class="stats"><div class="stat"><b>${Object.keys(S.ls||{}).filter(k=>d.items.some(l=>l.k===k)).length}</b><span>読んだ課</span></div>${s.total?`<div class="stat"><b>${s.ok}</b><span>例題○</span></div><div class="stat"><b>${s.ng}</b><span>要復習</span></div>`:`<div class="stat"><b>${d.items.length}</b><span>全${d.items.length}回</span></div>`}</div>`;
    if(s.ng)h+=`<button class="btn" data-act="mcw">要復習の例題だけ解く<small>${s.ng}問</small></button>`;
    h+='<div class="grp">'+d.items.map((l,i)=>{const st=qstat(l.drills),rd=S.ls&&S.ls[l.k];
      return `<button class="deck" data-act="lesson" data-v="${i}"><div class="t"><span>${esc(l.no)}　${esc(l.title)}</span>${rd?`<span class="badge" style="background:var(--soft);color:var(--acc)">${st.total?`${st.ok} / ${st.total}`:'読んだ'}</span>`:''}</div><div class="s">${esc(l.sub)}${l.drills.length?`・例題 ${l.drills.length}問`:''}</div>${st.total?`<div class="bar"><i style="width:${st.ok/st.total*100}%"></i></div>`:''}</button>`}).join('')+'</div>';
  }else if(d.type==='read'){
    const s=qstat(qitems(d));
    h+=`<div class="stats"><div class="stat"><b>${s.ok}</b><span>正解済み</span></div><div class="stat"><b>${s.ng}</b><span>要復習</span></div><div class="stat"><b>${s.total-s.ok-s.ng}</b><span>未着手</span></div></div>`;
    h+=`<div class="chips seg"><button class="chip ${V.lis?'':'on'}" data-act="rlis" data-v="0">読んで解く</button><button class="chip ${V.lis?'on':''}" data-act="rlis" data-v="1">聞いて解く</button></div>`;
    h+=`<p class="muted" style="margin:0 4px 10px">${V.lis?'本文を隠して音声で聞いてから答えます。わからなければ本文を表示できます。':'1題につき約250語・8問。本文は上部に表示されたまま解けます。'}</p>`;
    h+='<div class="grp">'+d.items.map((p,i)=>{const st=qstat(p.qs),done=st.ok+st.ng;
      return `<button class="deck" data-act="readp" data-v="${i}"><div class="t"><span>${i+1}. ${esc(p.title)}</span>${done?`<span class="badge" style="${st.ok===st.total?'background:var(--soft);color:var(--acc)':''}">${st.ok} / ${st.total}</span>`:''}</div><div class="s">${esc(p.topic)}・${p.paras.length}段落・${p.qs.length}問</div><div class="bar"><i style="width:${st.ok/st.total*100}%"></i></div></button>`}).join('')+'</div>';
  }else if(d.type==='rp'){h+=rpDeck(d)}else if(d.type==='summ'){h+=summDeck(d)}else{
    if(d.type==='speak'&&(S.spk||[]).length){const A=S.spk.slice(-30).map(x=>x[1]);h+=`<p class="muted" style="margin:4px 4px 8px">最近30回の平均一致率 <b>${Math.round(A.reduce((a,b)=>a+b,0)/A.length)}%</b>（記録の画面で推移を見られます）</p>`}
    if(d.type==='speak')h+=`<div class="chips seg"><button class="chip ${V.spm==='sh'?'':'on'}" data-act="spm" data-v="rd">音読（英文を見て）</button><button class="chip ${V.spm==='sh'?'on':''}" data-act="spm" data-v="sh">シャドーイング（聞いて）</button></div>`;
    const cats=[...new Set(d.items.map(i=>i.cat).filter(Boolean))];
    const its=V.cat?d.items.filter(i=>i.cat===V.cat):d.items;
    const s=qstat(its);
    if(cats.length){h+=`<div class="chips"><button class="chip ${V.cat?'':'on'}" data-act="cat" data-v="">すべて</button>`+cats.map(c=>`<button class="chip ${V.cat===c?'on':''}" data-act="cat" data-v="${esc(c)}">${esc(c)}</button>`).join('')+'</div>'}
    h+=`<div class="stats"><div class="stat"><b>${s.ok}</b><span>正解済み</span></div><div class="stat"><b>${s.ng}</b><span>要復習</span></div><div class="stat"><b>${s.total-s.ok-s.ng}</b><span>未着手</span></div></div>`;
    h+=`<button class="btn p" data-act="mc">${d.type==='comp'?'書いてみる':'10問解く'}<small>${d.type==='comp'?'未着手・書けなかった問題を優先':'未着手・間違えた問題を優先'}</small></button>`;
    h+=`<button class="btn" data-act="mcw" ${s.ng?'':'disabled'}>間違えた問題だけ解く<small>${s.ng}問</small></button>`;
  }
  return h;
}

function lmark(s){return esc(s).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').replace(/\{(.+?)\}/g,'<u>$1</u>').replace(/\[\[(.+?)\]\]/g,'<span class="hl">$1</span>')}
function lessonBody(src,hide,hideEn){
  let h='',tb=null,ex=0;
  const flush=()=>{if(tb){h+=`<div class="ltab">${tb.cap?`<div class="cap">${lmark(tb.cap)}</div>`:''}<table>${tb.rows.map(r=>'<tr>'+r.map((c,j)=>{const pc=String(c).replace(/\*\*|[{}]/g,'');const sp=/^[A-Za-z][A-Za-z ,'’\/\-\.()?!↗↘]*$/.test(pc)&&/[A-Za-z]{3}/.test(pc);return `<td class="${j===0?'en':''}${sp?' sayc':''}${pc.length<=6?' nw':''}"${sp?` data-act="say" data-v="${esc(pc.replace(/[↗↘]/g,'').replace(/\s*\/\s*/g,', '))}"`:''}>${lmark(c)}${sp?' <span class="sayi">▶</span>':''}</td>`}).join('')+'</tr>').join('')}</table></div>`;tb=null}};
  for(const raw of src.split('\n')){const l=raw.trim();if(!l)continue;
    if(l[0]==='|'){if(!tb)tb={rows:[]};tb.rows.push(l.slice(1).split('|').map(x=>x.trim()));continue}
    if(l[0]==='['&&l.endsWith(']')&&!l.startsWith('[[')){flush();tb={cap:l.slice(1,-1),rows:[]};continue}
    flush();
    const t=l.slice(0,2),r=l.slice(2);
    if(t==='# ')h+=`<h3 class="lh">${lmark(r)}</h3>`;
    else if(t==='= '||t==='- '){const [no,en,ja]=r.split('|');const id='lx'+(ex++);const pl=String(en).replace(/\*\*|\[\[|\]\]|[{}]/g,'').replace(/\s*\/\s*/g,', ');
      h+=`<div class="lex ${t==='= '?'main':''}"><span class="no">${esc(no)}</span><span class="ib sm lsay" data-act="say" data-v="${esc(pl)}">▶</span><div>${hideEn?`<div class="lja" style="color:var(--ink)">${lmark(ja||'')}</div><div class="en lja ${hide?'hid':''}" data-act="ljt" style="color:var(--ink)">${lmark(en)}</div>`:`<div class="en">${lmark(en)}</div><div class="lja ${hide?'hid':''}" data-act="ljt">${lmark(ja||'')}</div>`}</div></div>`}
    else if(t==='x ')h+=`<div class="lng"><span>×</span> <span class="en">${lmark(r)}</span></div>`;
    else if(t==='o ')h+=`<div class="lok"><span>○</span> <span class="en">${lmark(r)}</span></div>`;
    else if(t==='> ')h+=`<div class="lpt">${lmark(r)}</div>`;
    else if(t===': ')h+=`<p class="lp">${lmark(r)}</p>`;
    else h+=`<p class="lp">${lmark(l)}</p>`;
  }
  flush();return h;
}
function lessonView(){
  const d=byId[V.id],l=d.items[V.li];S.ls=S.ls||{};if(!S.ls[l.k]){S.ls[l.k]=1;save()}
  let h=head(l.no,true);
  h+=`<div class="lt">${esc(l.no)}　${esc(l.title)}</div><p class="muted" style="margin:0 4px 10px">${esc(l.sub)}</p>`;
  const comp=l.drills[0]&&l.drills[0].kind!=='ej';
  h+=`<div class="chips seg"><button class="chip ${V.hide?'':'on'}" data-act="lhide" data-v="0">${comp?'英文を表示':'訳を表示'}</button><button class="chip ${V.hide?'on':''}" data-act="lhide" data-v="1">${comp?'英文を隠す':'訳を隠す'}</button></div>`;
  h+=`<div class="lesson">${lessonBody(l.body,V.hide,comp&&V.hide)}</div>`;
  const st=qstat(l.drills),rx=reiOf(d.id,V.li),rm=rx.filter(reiOK).length,needRei=rx.length&&rm<rx.length&&!V.skipRei;
  if(!l.drills.length){if(l.cards&&byId.phonics){const n=byId.phonics.items.filter(i=>l.cards.includes(i.cat)).length;h+=`<button class="btn p" data-act="lcards" data-v="${V.li}">この回の練習カード（${n}枚）<small>つづりを見て音を言い、▶で確かめる</small></button>`}
    if(V.li+1<d.items.length)h+=`<button class="btn" data-act="lesson" data-v="${V.li+1}">次の回へ：${esc(d.items[V.li+1].title)}</button>`;return h}
  if(rx.length)h+=`<button class="btn ${needRei?'p':''} rei" data-act="reiflash" data-v="${V.li}">① 例文を覚える（${rx.length}文・和→英）<small>${rm===rx.length?'すべて覚えました・もう一度確認する':`覚えた ${rm} / ${rx.length}　日本語を見て英文を言えるまで`}</small></button>`;
  if(needRei){h+=`<p class="lock">例文をすべて「覚えた」にすると、例題に進めます。</p><button class="btn ghost" data-act="skiprei">例文を飛ばして例題を解く</button>`;}
  else h+=`<button class="btn p" data-act="ldrill">${rx.length?'② ':''}例題を解く（${l.drills.length}問）<small>${l.drills[0]&&l.drills[0].kind==='ej'?'和訳を書いて、訳例・解説と照合':'英訳を書いて、解答例・解説と照合'}・○ ${st.ok}</small></button>`;
  if(V.li+1<d.items.length)h+=`<button class="btn" data-act="lesson" data-v="${V.li+1}">次の課へ：${esc(d.items[V.li+1].title)}</button>`;
  return h;
}
function reiOf(did,li){if(did!=='eisaku'||!byId.wrei)return [];return byId.wrei.items.filter(x=>x.li===li)}
function reiOK(it){const p=S.p[pk(it.k,'je')];return !!(p&&p[0]>=2)}
function startReiFlash(li){const d=byId.eisaku,l=d.items[li],rx=reiOf('eisaku',li);if(!rx.length)return;
  const t=today(),todo=rx.filter(x=>!reiOK(x)||(S.p[pk(x.k,'je')][1]<=t)),q=(todo.length?todo:rx).slice();
  ses={type:'flash',d:{id:'wrei',title:l.no+' 例文'},dir:'je',queue:q,i:0,flip:false,cnt:[0,0,0],rep:{},ahead:false,first:q.length,again:'reiflash',againV:li};render();window.scrollTo(0,0)}
function startLessonDrill(){const d=byId[V.id],l=d.items[V.li];
  ses={type:'comp',d:{title:l.no+' 例題',id:d.id},items:l.drills.slice(),i:0,score:0,ans:null,miss:[]};mcSetup();render();window.scrollTo(0,0)}
function listView(){
  const d=byId[V.id],items=pool(d,V.st==null?-1:V.st),base=d.items.indexOf(items[0]);
  let h=head(d.title+' 一覧',true)+`<input class="search" id="search" placeholder="検索（英語・日本語）" autocomplete="off">`;
  h+='<div id="rows">'+items.map((i,x)=>{const p=S.p[i.k];
    return `<div class="li" data-s="${esc((i.w+' '+i.m).toLowerCase())}"><span class="n">${base+x+1}</span><span class="w en">${esc(i.w)}</span><span class="m">${esc(i.m)}${i.syn?`<br><span class="muted en">≒ ${esc(i.syn)}</span>`:''}${i.ex?`<br><span class="muted en">${esc(plain(i.ex))}</span>`:''}${(()=>{const e=i.pos!=='語源'?etyOf(i.w):null;return e?`<br><span class="muted">語源 <span class="en">${esc(e.b)}</span></span>`:''})()}</span>${isStar(i.k,'ej')||isStar(i.k,'je')?`<span class="stl">${isStar(i.k,'ej')?'★英和':''}${isStar(i.k,'je')?' ★和英':''}</span>`:''}<span class="dot ${p?(p[0]>=4?'m':'l'):''}"></span></div>`}).join('')+'</div>';
  return h;
}

function settingsView(){
  let h=head('設定',true);
  {const fs=S.set.fs||'m';h+='<h2>文字の大きさ</h2><div class="chips seg ctabs">'+[['s','小'],['m','中'],['l','大'],['xl','特大']].map(([v,l])=>`<button class="chip ${fs===v?'on':''}" data-act="fs" data-v="${v}">${l}</button>`).join('')+'</div>'}
  {const vs=enVoices(),cur=S.set.voice||'';const lab=v=>{const L={'en-US':'アメリカ','en-GB':'イギリス','en-AU':'オーストラリア','en-IE':'アイルランド','en-IN':'インド','en-ZA':'南アフリカ','en-CA':'カナダ','en-NZ':'ニュージーランド'}[v.lang.replace('_','-')]||v.lang;return `${esc(v.name.replace(/\s*\(.*\)$/,''))}<small>${lab}</small>`};
   h+='<h2>読み上げの声</h2>'+(vs.length?'<div class="chips"><button class="chip '+(cur?'':'on')+'" data-act="voice" data-v="">標準</button>'+vs.sort((a,b)=>a.lang.localeCompare(b.lang)||a.name.localeCompare(b.name)).slice(0,24).map(v=>`<button class="chip ${cur===v.name?'on':''}" data-act="voice" data-v="${esc(v.name)}">${lab(v)}</button>`).join('')+'</div><p class="muted" style="margin:0 4px 6px">押すと試しに読み上げます。</p>':'<p class="muted" style="margin:0 4px 6px">この端末では英語の声の一覧を取得できませんでした。</p>')}
  {const th=S.set.theme||'auto';h+='<h2>画面の明るさ</h2><div class="chips seg ctabs">'+[['auto','端末に合わせる'],['light','ライト'],['dark','ダーク']].map(([v,l])=>`<button class="chip ${th===v?'on':''}" data-act="theme" data-v="${v}">${l}</button>`).join('')+'</div>'}
  h+='<h2>1回のカード枚数</h2><div class="chips">'+[10,20,30].map(n=>`<button class="chip ${S.set.n===n?'on':''}" data-act="setn" data-v="${n}">${n}枚</button>`).join('')+'</div>';
  h+='<h2>最初に表示する向き</h2><div class="chips">'+[['ej','英語 → 日本語'],['je','日本語 → 英語']].map(([v,l])=>`<button class="chip ${S.set.dir===v?'on':''}" data-act="setdir" data-v="${v}">${l}</button>`).join('')+'</div>';
  h+=`<h2>復習の間隔</h2><p class="muted" style="margin:0 4px">「覚えた」を押すたびに 3日 → 1週間 → 2週間 → 1か月 → 2か月と間隔が延びます。「もう一度」で最初に戻ります。</p>`;
  h+='<h2>自分の単語帳</h2><button class="btn" data-act="import">＋ 単語帳を貼り付けて追加</button>';
  h+=backupHtml();
  h+=`<h2>データ</h2><p class="muted" id="sync" style="margin:0 4px 12px">${syncText()}</p>`;
  h+=`<button class="btn" data-act="reset" style="color:var(--warn)">${V.confirm?'本当に消去する（もう一度押す）':'学習記録をすべて消去'}</button>`;
  return h;
}

/* ---------- 取り込み ---------- */
function parseList(txt){
  const out=[],seen={};
  for(let line of txt.split(/\r?\n/)){
    line=line.replace(/\u00a0/g,' ').trim();if(!line)continue;
    let w,m;
    if(line.includes('\t')){
      const c=line.split('\t').map(x=>x.trim()).filter(Boolean);
      if(c.length&&/^\d+\.?$/.test(c[0]))c.shift();
      if(c.length<2)continue;w=c[0];m=c.slice(1).join(' ');
    }else{
      line=line.replace(/^\d+[\s.、:)）]*/,'');
      const mm=line.match(/^([A-Za-z][A-Za-z0-9'’\-\s.,/!?~]*?)\s*(?=[^\x00-\x7F]|\(|\[|$)/);
      if(!mm)continue;w=mm[1].trim();m=line.slice(mm[0].length).trim();
    }
    if(!w||!m||!/[A-Za-z]/.test(w))continue;
    if(seen[w])continue;seen[w]=1;out.push([w,m]);
  }
  return out;
}
function importView(){
  let h=head('単語帳を追加',true);
  h+=`<p class="muted" style="margin:0 4px 12px">1行に1語、「番号 英単語 意味」または「英単語 意味」の形で貼り付けてください。Webページの表をそのままコピーしたもの（タブ区切り）にも対応しています。</p>`;
  h+=`<input class="search" id="imtitle" placeholder="単語帳の名前（例：鉄壁）" value="${esc(V.title||'')}">`;
  h+=`<textarea class="search" id="imtext" rows="10" placeholder="1 vital 非常に重要な；生命の\n2 emphasize ～を強調する" style="resize:vertical">${esc(V.text||'')}</textarea>`;
  const n=V.text?parseList(V.text):[];
  h+=`<p class="muted" id="imcount" style="margin:0 4px 12px">${n.length?`${n.length}語を認識しました（先頭：${esc(n[0][0])} ／ 末尾：${esc(n[n.length-1][0])}）`:'まだ認識された単語はありません'}</p>`;
  h+=`<button class="btn p" data-act="imsave" ${n.length?'':'disabled'} id="imbtn">追加する</button>`;
  return h;
}

/* ---------- フラッシュカード ---------- */
function startFlash(){
  const dir=V.dir||S.set.dir||'ej',d=byId[V.id],items=pool(d,V.st==null?-1:V.st),t=today(),n=S.set.n,P=i=>S.p[pk(i.k,dir)];
  const due=items.filter(i=>isDue(i,dir,t)),nw=items.filter(i=>!P(i)&&!(schedOf(i.k)&&S.plan&&wlog()[i.k]));
  let q=shuffle(due).slice(0,n).concat(nw.slice(0,Math.max(0,n-due.length))),ahead=false;
  if(!q.length){q=items.slice().sort((a,b)=>P(a)[1]-P(b)[1]).slice(0,n);ahead=true}
  ses={type:'flash',d,dir,queue:q,i:0,flip:false,cnt:[0,0,0],rep:{},ahead,first:q.length,again:'flash'};
  render();
}
function startStarFlash(dir,global){
  let src;
  if(global)src=D.decks.filter(d=>d.type==='vocab').flatMap(d=>d.items);else src=byId[V.id].items;
  const q=shuffle(src.filter(i=>isStar(i.k,dir))).slice(0,50);if(!q.length)return;
  const d=global?{title:'★ チェックした単語'}:byId[V.id];
  ses={type:'flash',d,dir,queue:q,i:0,flip:false,cnt:[0,0,0],rep:{},ahead:false,first:q.length,star:true,again:global?'gstar':'starflash',againV:dir};
  render();window.scrollTo(0,0);
}
function toggleStar(k,dir){S.star=S.star||{ej:{},je:{}};S.star[dir]=S.star[dir]||{};if(S.star[dir][k])delete S.star[dir][k];else S.star[dir][k]=1;save();render()}
const starBtn=(it,dir)=>{const on=isStar(it.k,dir);return `<button class="spk star ${on?'on':''}" data-act="star" data-v="${esc(it.k)}" data-d="${dir}">${on?'★ チェック済み':'☆ チェック'}（${dir==='je'?'和→英':'英→和'}）</button>`};
function flashView(){
  const it=ses.queue[ses.i],dir=ses.dir||'ej',je=dir==='je';
  let h=head(ses.d.title,true)+`<div class="prog">${je?'和→英':'英→和'}・${ses.i+1} / ${ses.queue.length}${ses.star?'（チェックした単語）':ses.ahead?'（先取り復習）':''}${S.p[pk(it.k,dir)]?'':'・新規'}</div>`;
  const sc=it.sent?' sent':'',front=je?`<div class="w jp${sc}">${esc(it.m)}</div>`:`<div class="w en${sc}">${esc(it.w)}</div>`;
  let body=front+(it.pos?`<span class="pos">${esc(it.pos)}</span>`:'');
  if(it.pos==='語源'&&!je)body+=`<div class="ety">分解 <b class="en">${esc(it.ex)}</b><br><span class="muted">部品の意味から推理してみよう</span></div>`;
  if(ses.flip){
    body+=je?`<div class="w en${it.sent?' sent':''}">${esc(it.w)}</div>`:`<div class="m">${esc(it.m)}</div>`;
    if(it.syn)body+=`<div class="x en">≒ ${esc(it.syn)}</div>`;
    if(it.fam)body+='<div class="fam">'+it.fam.map(f=>`<div><b class="en">${esc(f.w)}</b>　${esc(f.m)}<br><span class="muted en">${esc(f.b)}</span></div>`).join('')+'</div>';
    else if(it.pos==='語源'){if(je)body+=`<div class="ety">分解 <b class="en">${esc(it.ex)}</b></div>`;body+=`<div class="x">語根 ${esc(it.root)}＝${esc(it.rootm)}</div>`}
    else if(it.ex)body+=`<div class="x en">${esc(plain(it.ex))}</div>`;
    if(!it.sent)body+=etyHtml(it);
  }else body+='<div class="hint">タップして答えを見る</div>';
  h+=`<button class="fc" data-act="flip">${body}</button>`;
  h+='<div class="tools">';
  if(canSpeak&&(ses.flip||!je)&&!/語根|接頭辞|接尾辞/.test(it.pos))h+=`<button class="spk" data-act="speak" data-v="${esc(it.say||it.w)}">🔊 ${it.say?'例を聞く':it.sent?'読み上げ':'発音'}</button>`;
  h+=starBtn(it,dir)+'</div>';
  if(ses.flip)h+='<div class="grade"><button class="g0" data-act="grade" data-v="0">もう一度</button><button class="g1" data-act="grade" data-v="1">あいまい</button><button class="g2" data-act="grade" data-v="2">覚えた</button></div>';
  return h;
}
function grade(g){
  const it=ses.queue[ses.i],k=pk(it.k,ses.dir||'ej'),t=today(),box=(S.p[k]||[0])[0];seen(it.k);if(ses.i<ses.first&&S.plan){const sc=schedOf(it.k);if(sc)wmark(it.k,g,sc==='r')}
  if(g===0){S.p[k]=[1,t];ses.rep[k]=(ses.rep[k]||0)+1;if(ses.rep[k]<=2)ses.queue.push(it)}
  else if(g===1)S.p[k]=[Math.max(1,Math.min(box,2)),t+1];
  else{const nb=box===0?2:Math.min(6,box+1);S.p[k]=[nb,t+IV[nb]]}
  if(ses.i<ses.first)ses.cnt[g]++;
  ses.i++;ses.flip=false;save();
  if(ses.i>=ses.queue.length)ses={type:'done',d:ses.d,again:ses.again||'flash',againV:ses.againV,msg:`<div class="big">${ses.first}<span style="font-size:18px"> 枚</span></div><p>覚えた ${ses.cnt[2]}・あいまい ${ses.cnt[1]}・もう一度 ${ses.cnt[0]}</p>`};
  render();window.scrollTo(0,0);
}

/* ---------- 4択クイズ（単語） ---------- */
function startQuiz(){
  const d=byId[V.id],items=shuffle(pool(d,V.st==null?-1:V.st)).slice(0,10);
  ses={type:'quiz',d,items,i:0,score:0,ans:null,miss:[]};quizSetup();render();
}
function quizSetup(){
  const it=ses.items[ses.i],je=(V.dir||S.set.dir)==='je';
  const others=shuffle(ses.d.items.filter(x=>x.k!==it.k&&x.m!==it.m));
  const same=others.filter(x=>x.pos===it.pos),rest=others.filter(x=>x.pos!==it.pos);
  ses.ch=shuffle([it].concat(same.concat(rest).slice(0,3)));ses.ans=null;ses.je=je;
}
function quizView(){
  const it=ses.items[ses.i],je=ses.je;
  let h=head(ses.d.title+' クイズ',true)+`<div class="prog">${ses.i+1} / ${ses.items.length}</div>`;
  h+=`<div class="q c ${je?'':'en'}">${esc(je?it.m:it.w)}${it.pos==='語源'&&!je?`<div class="ety" style="margin-top:8px">分解 <b>${esc(it.ex)}</b></div>`:''}</div>`;
  h+=ses.ch.map((c,x)=>{let cl='';if(ses.ans!=null){if(c.k===it.k)cl='ok';else if(x===ses.ans)cl='ng'}
    return `<button class="opt ${cl} ${je?'en':''}" data-act="qans" data-v="${x}">${esc(je?c.w:c.m)}</button>`}).join('');
  if(ses.ans!=null){
    if(it.syn||it.ex)h+=`<div class="exp en">${it.syn?'≒ '+esc(it.syn):''}${it.syn&&it.ex?'<br>':''}${it.ex?esc(plain(it.ex)):''}</div>`;
    h+=etyHtml(it);
    h+='<div class="tools">';
    if(it.say&&canSpeak)h+=`<button class="spk" data-act="speak" data-v="${esc(it.say)}">🔊 例を聞く</button>`;
    h+=starBtn(it,ses.je?'je':'ej')+'</div>';
    h+=`<button class="btn p" data-act="next">${ses.i+1<ses.items.length?'次へ':'結果を見る'}</button>`;
  }
  return h;
}
function quizAnswer(x){
  if(ses.ans!=null)return;const it=ses.items[ses.i],t=today(),ok=ses.ch[x].k===it.k;ses.ans=x;
  const K=pk(it.k,ses.je?'je':'ej');seen(it.k);
  if(ok){ses.score++;if(!S.p[K])S.p[K]=[1,t+1]}else{S.p[K]=[1,t];ses.miss.push(it)}
  save();render();
}

/* ---------- 例文穴埋め（熟語） ---------- */
function startCloze(){
  const d=byId[V.id],src=pool(d,V.st==null?-1:V.st).filter(i=>i.ex&&i.ex.includes('['));
  if(!src.length)return;
  const t=today(),due=src.filter(i=>S.p[i.k]&&S.p[i.k][1]<=t),rest=src.filter(i=>!(S.p[i.k]&&S.p[i.k][1]<=t));
  const items=shuffle(due).concat(shuffle(rest)).slice(0,10);
  ses={type:'cloze',d,items,i:0,score:0,ans:null,miss:[]};clozeSetup();render();
}
function clozeSetup(){
  const it=ses.items[ses.i],all=ses.d.items.filter(x=>x.k!==it.k&&x.ex);
  const w0=it.w.split(' ');
  // 同じ前置詞・副詞を含む紛らわしい熟語を優先
  const near=shuffle(all.filter(x=>x.w.split(' ').some(p=>p.length>1&&w0.includes(p)))),far=shuffle(all);
  const pick=[],seen=new Set([it.w]);
  for(const x of near.concat(far)){if(pick.length>=3)break;if(!seen.has(x.w)){seen.add(x.w);pick.push(x)}}
  ses.ch=shuffle([it].concat(pick));ses.ans=null;
}
function clozeView(){
  const it=ses.items[ses.i];
  let h=head(ses.d.title+' 穴埋め',true)+`<div class="prog">${ses.i+1} / ${ses.items.length}</div>`;
  const parts=String(it.ex).split(/\[|\]/);
  h+=`<div class="q en">${parts.map((x,j)=>j%2?(ses.ans==null?`<span class="bl">&nbsp;</span>`:`<b style="color:var(--acc)">${esc(x)}</b>`):esc(x)).join('')}</div>`;
  h+=ses.ch.map((c,x)=>{let cl='';if(ses.ans!=null){if(c.k===it.k)cl='ok';else if(x===ses.ans)cl='ng'}
    return `<button class="opt en ${cl}" data-act="cans" data-v="${x}">${esc(c.w)}</button>`}).join('');
  if(ses.ans!=null){
    const ok=ses.ch[ses.ans].k===it.k;
    h+=`<div class="exp ${ok?'':'ng'}"><b>${ok?'正解':'不正解'}</b>　<span class="en">${esc(it.w)}</span>：${esc(it.m)}</div>`;
    h+=`<button class="btn p" data-act="next">${ses.i+1<ses.items.length?'次へ':'結果を見る'}</button>`;
  }
  return h;
}
function clozeAnswer(x){
  if(ses.ans!=null)return;const it=ses.items[ses.i],t=today(),ok=ses.ch[x].k===it.k;ses.ans=x;
  seen(it.k);if(ok){ses.score++;if(!S.p[it.k])S.p[it.k]=[1,t+1]}else{S.p[it.k]=[1,t];ses.miss.push(it)}
  save();render();
}

/* ---------- リーディング ---------- */
function startRead(pi){
  const d=byId[V.id],p=d.items[pi];if(!p)return;
  ses={type:'read',d,pi,p,items:p.qs,i:0,score:0,ans:null,miss:[],lis:!!V.lis};readSetup();render();window.scrollTo(0,0);
}
function readSetup(){ses.ans=null;ses.ord=shuffle([0,1,2,3])}
function readView(){
  const p=ses.p,it=ses.items[ses.i];
  let h=head(p.title,true)+`<div class="prog">${ses.i+1} / ${ses.items.length}・${esc(p.topic)}</div>`;
  let marked=false;
  if(ses.lis&&!ses.show){h+=lisBox(p.paras.join(' '),'本文を聞く')+`<div class="row2"><button class="btn ghost" data-act="lstop">■ 止める</button><button class="btn ghost" data-act="lread">本文を表示</button></div>`}
  else{if(ses.lis)h+=`<button class="btn ghost" data-act="lread">本文を隠す</button>`;
  h+='<div class="psg en" id="psg">'+p.paras.map((t,n)=>{
    let x=esc(t);
    if(it.hl&&!marked){const e=esc(it.hl),j=x.indexOf(e);if(j>=0){x=x.slice(0,j)+'<mark>'+e+'</mark>'+x.slice(j+e.length);marked=true}}
    return `<p><span class="pn">¶${n+1}</span>${x}</p>`}).join('')+'</div>'}
  const isJ=s=>/[\u3040-\u30ff\u4e00-\u9fff]/.test(s);
  h+=`<div class="rq ${isJ(it.q)?'':'en'}">${esc(it.q)}</div>`;
  h+=ses.ord.map(o=>{let cl='';if(ses.ans!=null){if(o===0)cl='ok';else if(o===ses.ans)cl='ng'}
    return `<button class="opt ${isJ(it.c[o])?'':'en'} ${cl}" data-act="rans" data-v="${o}">${esc(it.c[o])}</button>`}).join('');
  if(ses.ans!=null){const ok=ses.ans===0;
    h+=`<div class="exp ${ok?'':'ng'}"><b>${ok?'正解':'不正解'}</b>　${esc(it.e)}</div><button class="btn p" data-act="next">${ses.i+1<ses.items.length?'次へ':'結果を見る'}</button>`}
  return h;
}
function readAnswer(x){
  if(ses.ans!=null)return;const it=ses.items[ses.i];ses.ans=x;
  const ok=x===0,q=S.q[it.k]||[0,0,0];S.q[it.k]=[q[0]+(ok?1:0),q[1]+(ok?0:1),ok?1:0];seen(it.k);
  if(ok)ses.score++;else ses.miss.push(it);save();render();
}

/* ---------- 語法・文法 ---------- */
function startMC(onlyWrong){
  const d=byId[V.id],src=d.type==='lesson'?qitems(d):V.cat?d.items.filter(i=>i.cat===V.cat):d.items;let items;
  if(onlyWrong)items=shuffle(src.filter(i=>S.q[i.k]&&!S.q[i.k][2]));
  else{const a=[],b=[],c=[];for(const i of src){const q=S.q[i.k];(!q?a:q[2]?c:b).push(i)}items=shuffle(a).concat(shuffle(b),shuffle(c))}
  items=items.slice(0,10);if(!items.length)return;
  ses={type:d.type==='lesson'?'comp':d.type,d,items,i:0,score:0,ans:null,miss:[],onlyWrong};mcSetup();render();
}
function mcSetup(){ses.ans=null;ses.reveal=false;ses.ai='';ses.aiBusy=false;if(ses.type==='mc')ses.ord=shuffle([0,1,2,3]);
  if(ses.type==='order'){const n=ses.items[ses.i].ch.length;let o;let t=0;do{o=shuffle([...Array(n).keys()])}while(n>1&&o.every((v,i)=>v===i)&&t++<20);ses.pool=o;ses.pick=[]}}
const ochunk=(it,i)=>{const c=it.ch[i];return i===0&&!/^I($|[ '])/.test(c)?c.charAt(0).toLowerCase()+c.slice(1):c};
function orderView(){
  const it=ses.items[ses.i];
  let h=head(ses.d.title,true)+`<div class="prog">${ses.i+1} / ${ses.items.length}</div>`;
  h+=`<div class="ja">${esc(it.ja)}</div>`;
  const done=ses.ans!=null,ok=ses.ans===0;
  h+=`<div class="ans en ${done?(ok?'ok':'ng'):''}">`+ses.pick.map((pi,j)=>`<button class="chunk" data-act="oundo" data-v="${j}">${esc(ochunk(it,pi))}</button>`).join('')+(ses.pick.length===it.ch.length&&it.p?`<span style="align-self:center">${esc(it.p)}</span>`:'')+'</div>';
  if(!done){
    h+='<div class="chunks en">'+ses.pool.map(pi=>`<button class="chunk ${ses.pick.includes(pi)?'used':''}" data-act="opick" data-v="${pi}">${esc(ochunk(it,pi))}</button>`).join('')+'</div>';
    h+=`<p class="muted" style="margin:0 4px">語句をタップして並べます。並べた語句をタップすると戻せます。</p>`;
  }else{
    h+=`<div class="exp ${ok?'':'ng'}"><b>${ok?'正解':'不正解'}</b>　<span class="en">${esc(it.ch.join(' ')+it.p)}</span><br>${esc(it.e)}</div><button class="btn p" data-act="next">${ses.i+1<ses.items.length?'次へ':'結果を見る'}</button>`;
  }
  return h;
}
function compView(){
  const it=ses.items[ses.i],free=it.kind==='free',ej=it.kind==='ej';
  let h=head(ses.d.title,true)+`<div class="prog">${ses.i+1} / ${ses.items.length}</div>`;
  if(ej)h+=`<p class="muted" style="margin:0 4px 6px">${it.long?'下線部を和訳しなさい。':'次の英文を和訳しなさい。'}</p><div class="q en" style="font-size:${it.long?16:18}px;line-height:1.75">${lmark(it.en)}</div>`;
  else if(free)h+=`<div class="q en" style="font-size:17px">${esc(it.en)}</div><p class="muted" style="margin:-6px 4px 10px">${esc(it.ja)}（${esc(it.words)}）</p>`;
  else h+=`<p class="muted" style="margin:0 4px 6px">次の日本語を英語にしなさい。</p><div class="q" style="font-size:18px">${esc(it.ja)}</div>`;
  if(ej){if(it.hint)h+=`<details class="hintbox"><summary>ヒント（構文）</summary><div>${lmark(it.hint)}</div></details>`}
  else if(!free){if(it.hint)h+=`<details class="hintbox"><summary>ヒント（考え方）</summary><div>${esc(it.hint)}</div></details>`}
  else h+=`<details class="hintbox"><summary>ヒント（構成）</summary><div>${esc(it.point)}</div></details>`;
  const txt=(S.w&&S.w[it.k])||'';var wc=(txt.trim().match(/[A-Za-z'’-]+/g)||[]).length;
  if(ej)h+=`<textarea id="compText" class="search" rows="${it.long?6:3}" placeholder="ここに日本語訳を書く（頭の中で訳すだけでもOK）" style="resize:vertical;font-size:16px">${esc(txt)}</textarea>`;
  else h+=`<textarea id="compText" class="search en" rows="${free?9:4}" placeholder="ここに英語で書く" style="resize:vertical;font-size:16px">${esc(txt)}</textarea><p class="muted" id="wc" style="margin:-4px 4px 10px">${wc}語</p>`;
  if(AI)h+=`<button class="btn" data-act="cai" ${ses.aiBusy?'disabled':''}>${ses.aiBusy?'AIが添削中…':'AIに添削してもらう'}<small>文法・語法の誤りと書き直し例を表示</small></button>`;
  if(ses.ai)h+=ses.ai;
  if(!ses.reveal)h+=`<button class="btn p" data-act="creveal">${ej?'訳例と解説を見る':'解答例を見る'}</button>`;
  else if(ej){
    h+=`<div class="exp" style="text-align:left"><b>訳例</b>${it.models.map(m=>`<div style="margin-top:6px">${lmark(m)}</div>`).join('')}<div style="margin-top:10px"><b>解説</b></div><div style="margin-top:4px;line-height:1.75">${lmark(it.point).replace(/\n/g,'<br>')}</div></div>`;
    if(ses.ans==null)h+=`<p class="muted" style="margin:0 4px 8px">自己採点（構造を正しくとらえて訳せていれば○）</p><div class="grade"><button class="g0" data-act="cgrade" data-v="0">× 取れなかった</button><button class="g1" data-act="cgrade" data-v="1">△ 一部ミス</button><button class="g2" data-act="cgrade" data-v="2">○ 訳せた</button></div>`;
    else h+=`<button class="btn p" data-act="next">${ses.i+1<ses.items.length?'次へ':'結果を見る'}</button>`;
  }
  else{
    h+='<div class="exp" style="text-align:left"><b>解答例</b>'+it.models.map((m,j)=>`<div class="en" style="margin-top:6px">${it.models.length>1?(j+1)+'. ':''}${esc(m)}</div>`).join('')+`<div style="margin-top:8px"><b>${free?'構成':'ポイント'}</b>　${esc(it.point)}</div>${!free&&it.hint?`<div style="margin-top:4px" class="muted">考え方：${esc(it.hint)}</div>`:''}</div>`;
    if(ses.ans==null)h+=`<p class="muted" style="margin:0 4px 8px">自己採点（解答例と同じ意味・文法的に正しければ○）</p><div class="grade"><button class="g0" data-act="cgrade" data-v="0">× 書けなかった</button><button class="g1" data-act="cgrade" data-v="1">△ 一部ミス</button><button class="g2" data-act="cgrade" data-v="2">○ 書けた</button></div>`;
    else h+=`<button class="btn p" data-act="next">${ses.i+1<ses.items.length?'次へ':'結果を見る'}</button>`;
  }
  return h;
}
function compGrade(g){
  if(ses.ans!=null)return;const it=ses.items[ses.i];ses.ans=g;const ok=g===2;
  const q=S.q[it.k]||[0,0,0];S.q[it.k]=[q[0]+(ok?1:0),q[1]+(ok?0:1),ok?1:0];seen(it.k);
  if(ok)ses.score++;else ses.miss.push(it);save();render();
}
async function compAI(){
  if(!AI||ses.aiBusy)return;const it=ses.items[ses.i],txt=((S.w&&S.w[it.k])||'').trim();
  if(!txt){ses.ai=`<div class="exp ng">先に${it.kind==='ej'?'訳':'英文'}を書いてください。</div>`;render();return}
  const free=it.kind==='free';
  const prompt=it.kind==='ej'?`あなたは日本の大学入試の英文和訳を採点する英語教師です。次の英文${it.long?'の下線部（{ }で囲んだ部分）':''}を和訳した受験生の答案を添削してください。\n英文: ${it.en}\n参考の訳例: ${it.models.join(' / ')}\n受験生の答案: ${txt}\n\n訳例と表現が違っても、英文の構造（文型・修飾関係・指示語）を正しくとらえ、自然な日本語になっていれば高く評価してください。説明はすべて日本語で書いてください。次の形式のJSONだけを出力してください。\n{"score": 0から10の整数, "verdict": "全体の一言評価", "corrected": "答案を生かして直した訳文", "errors": [{"wrong": "答案の問題箇所", "right": "直した訳", "why": "構造上・語法上の理由"}], "advice": "次に気をつけること（2文以内）"}`:(free?`あなたは日本の大学入試の自由英作文を採点する英語教師です。次のテーマに対する受験生の答案を添削してください。\nテーマ: ${it.en}（${it.ja}／${it.words}）\n参考の解答例: ${it.models[0]}\n`:`あなたは日本の大学入試の和文英訳を採点する英語教師です。次の日本語を英訳した受験生の答案を添削してください。\n日本語: ${it.ja}\n参考の解答例: ${it.models.join(' / ')}\n`)+`受験生の答案: ${txt}\n\n解答例と表現が違っても、意味が正しく文法的に正しければ正解として扱ってください。説明はすべて日本語で書いてください。次の形式のJSONだけを出力してください。\n{"score": 0から10の整数, "verdict": "全体の一言評価", "corrected": "答案の意図を生かして最小限直した英文", "errors": [{"wrong": "誤りの部分", "right": "訂正", "why": "理由"}], "advice": "次に気をつけること（2文以内）"}`;
  ses.aiBusy=true;ses.ai='';render();
  let r=null;
  try{
    if(typeof AI.json==='function'){r=await AI.json(prompt,{modelTier:'default'})}
    else{const o=await AI(prompt,{modelTier:'default'});const m=String(o.text||'').match(/\{[\s\S]*\}/);r=m?JSON.parse(m[0]):null}
  }catch(e){
    if(e&&e.code==='not_granted'){AI=null}
    ses.aiBusy=false;ses.ai=`<div class="exp ng">AI添削を利用できませんでした${e&&e.code==='rate_limited'?'（しばらく待ってから再度お試しください）':''}。</div>`;if(ses.type==='comp')render();return;
  }
  ses.aiBusy=false;
  if(!r||typeof r!=='object'){ses.ai='<div class="exp ng">添削結果を読み取れませんでした。</div>';render();return}
  const errs=Array.isArray(r.errors)?r.errors:[];
  ses.ai=`<div class="exp" style="text-align:left"><b>AI添削　${esc(r.score)}/10</b>　${esc(r.verdict||'')}`+(r.corrected?`<div style="margin-top:6px">書き直し例：<span class="${it.kind==='ej'?'':'en'}"><b>${esc(r.corrected)}</b></span></div>`:'')+(errs.length?'<div style="margin-top:6px">'+errs.map(x=>`<div style="margin-top:4px">・<span class="en" style="text-decoration:line-through">${esc(x.wrong)}</span> → <span class="en"><b>${esc(x.right)}</b></span><br><span class="muted">${esc(x.why)}</span></div>`).join('')+'</div>':'')+(r.advice?`<div style="margin-top:6px">${esc(r.advice)}</div>`:'')+'<div class="muted" style="margin-top:6px;font-size:12px">AIの添削は誤ることがあります。解答例と合わせて確認してください。</div></div>';
  if(ses.type==='comp')render();
}
function tfView(){
  const it=ses.items[ses.i],done=ses.ans!=null,ok=done&&((ses.ans===1)===it.ok);
  let h=head(ses.d.title,true)+`<div class="prog">${ses.i+1} / ${ses.items.length}${it.cat?'・'+esc(it.cat):''}</div>`;
  h+=`<p class="muted" style="margin:0 4px 8px">この英文は正しい？</p><div class="q en">${esc(it.q)}</div>`;
  h+='<div class="grade" style="grid-template-columns:1fr 1fr">'+[[1,'○ 正しい'],[0,'× 誤り']].map(([v,l])=>{let cl='opt';if(done){if((v===1)===it.ok)cl+=' ok';else if(v===ses.ans)cl+=' ng'}return `<button class="${cl}" style="text-align:center;font-weight:700;font-size:18px;margin:0" data-act="tfans" data-v="${v}">${l}</button>`}).join('')+'</div>';
  if(done)h+=`<div class="exp ${ok?'':'ng'}"><b>${ok?'正解':'不正解'}</b>　この英文は${it.ok?'<b>正しい</b>':'<b>誤り</b>'}です。${it.fix?`<br>正しくは：<span class="en"><b>${esc(it.fix)}</b></span>`:''}<br>${esc(it.e)}</div><button class="btn p" data-act="next">${ses.i+1<ses.items.length?'次へ':'結果を見る'}</button>`;
  return h;
}
function tfAnswer(v){
  if(ses.ans!=null)return;const it=ses.items[ses.i];ses.ans=v;const ok=(v===1)===it.ok;
  const q=S.q[it.k]||[0,0,0];S.q[it.k]=[q[0]+(ok?1:0),q[1]+(ok?0:1),ok?1:0];seen(it.k);
  if(ok)ses.score++;else ses.miss.push(it);save();render();
}
function orderPick(pi){
  if(ses.ans!=null||ses.pick.includes(pi))return;ses.pick.push(pi);
  const it=ses.items[ses.i];
  if(ses.pick.length===it.ch.length){
    const ok=ses.pick.map(i=>it.ch[i]).join(' ')===it.ch.join(' ');ses.ans=ok?0:1;
    const q=S.q[it.k]||[0,0,0];S.q[it.k]=[q[0]+(ok?1:0),q[1]+(ok?0:1),ok?1:0];seen(it.k);
    if(ok)ses.score++;else ses.miss.push(it);save();
  }
  render();
}
const RATES=[[.7,'ゆっくり'],[.85,'やや遅め'],[1,'ふつう'],[1.15,'ネイティブ']];
function rateName(r){const x=RATES.find(y=>y[0]===r);return x?x[1]:r+'倍'}
function lapRate(){if(!S.plan)return null;try{const pi=planInfo();const a=pi&&pi.areas.find(x=>x.id==='listen');return a&&a.lap?a.lap.rate:(a&&a.wait?.7:null)}catch(e){return null}}
function curRate(){return S.set.rateM?(S.set.rate||.9):(lapRate()||S.set.rate||.9)}
function startPlanListen(id){const pi=planInfo();const a=pi&&pi.areas.find(x=>x.id==='listen');const d=byId[id];if(!a||!d)return;const sn=S.plan.seen||{};
  const its=shuffle(d.items.filter(x=>{const v=sn[x.k];return v==null||v<a.from})).slice(0,Math.max(1,Math.min(a.left,15)));if(!its.length)return;
  if(!S.set.rateM)S.set.rate=a.lap.rate;
  ses={type:d.type,d:{id:d.id,title:d.title+`（${a.lap.i+1}周目・${rateName(a.lap.rate)}）`},items:its,i:0,score:0,ans:null,miss:[]};mcSetup();render();window.scrollTo(0,0)}
function lisBox(text,label){const r=curRate();return `<div class="lis"><button class="lplay" data-act="say" data-v="${esc(text)}">▶ ${label||'もう一度聞く'}</button><div class="chips seg rate">`+RATES.map(([v,l])=>`<button class="chip ${r===v?'on':''}" data-act="rate" data-v="${v}">${l}</button>`).join('')+'</div>'+(S.plan?`<p class="rnote">${S.set.rateM?'速さを手動で選んでいます・<button class="linkb" data-act="rateauto">プランの周回に合わせる</button>':'速さはプランの周回に合わせています（周ごとに速くなります）'}</p>`:'')+'</div>'}
const isJa=s=>/[\u3040-\u30ff\u4e00-\u9fff]/.test(s);
function dictView(){const it=ses.items[ses.i];
  let h=head(ses.d.title,true)+`<div class="prog">${ses.i+1} / ${ses.items.length}${it.cat?'・'+esc(it.cat):''}</div>`;
  h+=lisBox(it.en);
  if(ses.ans==null){h+=`<textarea id="dictIn" class="search" rows="3" placeholder="聞こえた英文を書く" autocomplete="off" autocapitalize="off" spellcheck="false">${esc(ses.draft||'')}</textarea>`;
    if(it.ja)h+=ses.hint?`<p class="muted" style="margin:0 4px 10px">訳：${esc(it.ja)}</p>`:`<button class="btn ghost" data-act="dhint">訳をヒントに見る</button>`;
    h+=`<button class="btn p" data-act="dcheck">答え合わせ</button>`}
  else{const r=ses.dres;h+=`<div class="q en dres">${r.html}</div><div class="exp ${r.ok?'':'ng'}"><b>${r.ok?'正解':'あと少し'}</b>　${r.ok?'':`${r.miss}語ちがい・`}正しい英文：<span class="en">${esc(it.en)}</span>${it.ja?`<br>${esc(it.ja)}`:''}</div><button class="btn p" data-act="next">${ses.i+1<ses.items.length?'次へ':'結果を見る'}</button>`}
  return h}
function dictCheck(){const it=ses.items[ses.i],el=document.getElementById('dictIn'),inp=el?el.value:'';
  const nz=w=>w.toLowerCase().replace(/[’']/g,"'").replace(/[^a-z0-9']/g,'');
  const A=it.en.split(/\s+/).filter(Boolean),B=inp.split(/\s+/).filter(Boolean),a=A.map(nz),b=B.map(nz);
  const L=Array(a.length+1).fill(0).map(()=>Array(b.length+1).fill(0));for(let i=a.length-1;i>=0;i--)for(let j=b.length-1;j>=0;j--)L[i][j]=a[i]===b[j]?L[i+1][j+1]+1:Math.max(L[i+1][j],L[i][j+1]);
  let i=0,j=0,out=[],miss=0;while(i<a.length||j<b.length){if(i<a.length&&j<b.length&&a[i]===b[j]){out.push(`<span class="dok">${esc(A[i])}</span>`);i++;j++}
    else if(j<b.length&&(i>=a.length||L[i][j+1]>=L[i+1][j])){out.push(`<span class="dx">${esc(B[j])}</span>`);j++;miss++}
    else{out.push(`<span class="dm">${esc(A[i])}</span>`);i++;miss++}}
  const ok=miss===0;ses.ans=ok?0:1;ses.dres={ok,miss,html:out.join(' ')};
  const q=S.q[it.k]||[0,0,0];S.q[it.k]=[q[0]+(ok?1:0),q[1]+(ok?0:1),ok?1:0];seen(it.k);if(ok)ses.score++;else ses.miss.push(it);save();render()}
function mcView(){
  const it=ses.items[ses.i];
  let h=head(ses.d.title,true)+`<div class="prog">${ses.i+1} / ${ses.items.length}${it.cat?'・'+esc(it.cat):''}</div>`,ok;
  if(ses.type==='mc'){
    if(it.say){h+=lisBox(it.say);if(ses.ans!=null)h+=`<div class="q en" style="font-size:17px">${esc(it.say)}</div>`}
    else h+=`<div class="q en">${esc(it.q).replace('___','<span style="white-space:nowrap">(　　　)</span>')}</div>`;
    h+=ses.ord.map(o=>{let cl='';if(ses.ans!=null){if(o===0)cl='ok';else if(o===ses.ans)cl='ng'}
      return `<button class="opt ${isJa(it.c[o])?'':'en'} ${cl}" data-act="mans" data-v="${o}">${esc(it.c[o])}</button>`}).join('');
    ok=ses.ans===0;
  }else{
    let n=0;
    const s=esc(it.s).replace(/\{([^}]*)\}/g,(_,t)=>{const x=n++;let cl='';if(ses.ans!=null){if(x===it.a)cl='ok';else if(x===ses.ans)cl='ng'}
      return `<u class="${cl}" data-act="mans" data-v="${x}">${t}<sub>${'ABCD'[x]}</sub></u>`});
    h+=`<p class="muted" style="margin:0 4px 8px">誤りを含む下線部を選んでください</p><div class="q en">${s}</div><div class="abcd">`;
    h+=[0,1,2,3].map(x=>{let cl='';if(ses.ans!=null){if(x===it.a)cl='ok';else if(x===ses.ans)cl='ng'}
      return `<button class="opt ${cl}" data-act="mans" data-v="${x}">${'ABCD'[x]}</button>`}).join('')+'</div>';
    ok=ses.ans===it.a;
  }
  if(ses.ans!=null)h+=`<div class="exp ${ok?'':'ng'}"><b>${ok?'正解':'不正解'}</b>　${esc(it.e)}</div><button class="btn p" data-act="next">${ses.i+1<ses.items.length?'次へ':'結果を見る'}</button>`;
  return h;
}
function mcAnswer(x){
  if(ses.ans!=null)return;const it=ses.items[ses.i];ses.ans=x;
  const ok=ses.type==='mc'?x===0:x===it.a,q=S.q[it.k]||[0,0,0];
  if(ses.mock){(ses.res=ses.res||[])[ses.i]=ok;seen(it.k)}else{S.q[it.k]=[q[0]+(ok?1:0),q[1]+(ok?0:1),ok?1:0];seen(it.k);}
  if(ok)ses.score++;else ses.miss.push(it);
  save();render();
}
function next(){
  ses.i++;
  if(ses.i>=ses.items.length){
    if(ses.mock){mockFinish();return}
    if(ses.type==='read'){
      const d=ses.d,pi=ses.pi;
      let msg=`<div class="big">${ses.score}<span style="font-size:20px"> / ${ses.items.length}</span></div><p>${esc(ses.p.title)}</p>`;
      if(ses.miss.length)msg+='<h2 style="text-align:left">間違えた問題</h2><div class="review" style="text-align:left">'+ses.miss.map(m=>`<div class="li"><span class="m"><span class="en">${esc(m.q)}</span><br><b class="en" style="color:var(--acc)">${esc(m.c[0])}</b><br><span class="muted">${esc(m.e)}</span></span></div>`).join('')+'</div>';
      else msg+='<p>全問正解です</p>';
      ses={type:'done',d,again:'readagain',pi,next:pi+1<d.items.length?pi+1:null,msg};render();window.scrollTo(0,0);return;
    }
    const vocab=ses.type==='quiz'||ses.type==='cloze';
    let msg=`<div class="big">${ses.score}<span style="font-size:20px"> / ${ses.items.length}</span></div>`;
    if(ses.miss.length){msg+='<h2 style="text-align:left">間違えた問題</h2><div class="review" style="text-align:left">'+ses.miss.map(m=>vocab
      ?`<div class="li"><span class="w en">${esc(m.w)}</span><span class="m">${esc(m.m)}</span></div>`
      :m.kind==='ej'?`<div class="li"><span class="m"><span class="en">${lmark(m.en)}</span><br>${lmark(m.models[0])}</span></div>`
      :m.kind?`<div class="li"><span class="m">${esc(m.ja||m.en)}<br><span class="en">${esc(m.models[0])}</span></span></div>`
      :m.fix!==undefined?`<div class="li"><span class="m"><span class="en">${esc(m.q)}</span> → ${m.ok?'正しい':'<span class="en">'+esc(m.fix)+'</span>'}<br><span class="muted">${esc(m.e)}</span></span></div>`
      :`<div class="li"><span class="m"><span class="en">${esc(m.ch?m.ch.join(' ')+m.p:m.q?m.q.replace('___','( '+m.c[0]+' )'):m.s.replace(/[{}]/g,''))}</span><br><span class="muted">${esc(m.ja?m.ja+' ― ':'')}${esc(m.e)}</span></span></div>`).join('')+'</div>'}
    else msg+='<p>全問正解です</p>';
    ses={type:'done',d:ses.d,again:ses.d.id&&byId[ses.d.id]&&byId[ses.d.id].type==='lesson'&&!ses.onlyWrong?'ldrill':vocab?ses.type:'mc',msg};
  }else if(ses.type==='quiz')quizSetup();else if(ses.type==='cloze')clozeSetup();else if(ses.type==='read')readSetup();else mcSetup();
  if(ses.type==='speak'){ses.sres=null;ses.heard='';ses.rec=0}
  render();window.scrollTo(0,0);
}
function doneView(){
  if(ses.again==='readagain')return head(ses.d.title,true)+`<div class="res">${ses.msg}</div>${ses.next!=null?`<button class="btn p" data-act="readp" data-v="${ses.next}">次の長文へ</button>`:''}<button class="btn" data-act="readp" data-v="${ses.pi}">もう一度解く</button><button class="btn" data-act="back">一覧に戻る</button>`;
  return head(ses.d.title,true)+`<div class="res">${ses.msg}</div><button class="btn p" data-act="${ses.again}" data-v="${ses.againV||''}">${ses.again==='mockv'?'これまでの結果を見る':'続けてもう1セット'}</button><button class="btn" data-act="back">戻る</button>`}

function render(){
  let h;
  if(ses)h=ses.type==='flash'?flashView():ses.type==='quiz'?quizView():ses.type==='cloze'?clozeView():ses.type==='read'?readView():ses.type==='order'?orderView():ses.type==='tf'?tfView():ses.type==='comp'?compView():ses.type==='dict'?dictView():ses.type==='speak'?speakView():ses.type==='rp'?rpView():ses.type==='summ'?summView():ses.type==='done'?doneView():mcView();
  else h=V.name==='home'?home():V.name==='cat'?catView():V.name==='deck'?deckView():V.name==='lesson'?lessonView():V.name==='list'?listView():V.name==='import'?importView():V.name==='plan'?planView():V.name==='mockv'?mockView():V.name==='miss'?missView():V.name==='stats'?statsView():V.name==='search'?searchView():settingsView();
  app.innerHTML=h;paintNav();
  if(ses&&ses.items&&ses.ans==null&&ses.said!==ses.i){const it=ses.items[ses.i];const t=it&&(it.say||((ses.type==='dict'||(ses.type==='speak'&&V.spm==='sh'))&&it.en)||(ses.type==='read'&&ses.lis&&ses.i===0&&ses.p.paras.join(' ')));if(t){ses.said=ses.i;speak(t)}}document.documentElement.dataset.view=ses?'ses':V.name;
  const ps=document.getElementById('psg'),mk=ps&&ps.querySelector('mark');
  if(mk)ps.scrollTop=Math.max(0,mk.offsetTop-ps.offsetTop-60);
}

/* ---------- 操作 ---------- */
document.addEventListener('click',e=>{
  const el=e.target.closest('[data-act]');if(!el)return;
  const a=el.dataset.act,v=el.dataset.v;
  switch(a){
    case 'back': if(ses){ses=null;render();window.scrollTo(0,0)}else if(V.name==='list'||V.name==='lesson')go({name:'deck',id:V.id,st:V.st,dir:V.dir,cat:'',from:V.from});else if(V.name==='deck'){const c=V.from||(catsNow().find(x=>x.secs.some(s=>s[1].includes(V.id)))||{}).id;go(c?{name:'cat',c}:{name:'home'})}else go({name:'home'});break;
    case 'settings': go({name:'settings'});break;
    case 'plan': go({name:'plan'});break;
    case 'say': speak(v);break;
    case 'rlis': V.lis=v==='1';render();break;
    case 'rate': S.set.rate=+v;S.set.rateM=1;save();render();break;
    case 'rateauto': S.set.rateM=0;save();render();break;
    case 'planlis': startPlanListen(v);break;
    case 'dcheck': dictCheck();break;
    case 'dhint': {const e=document.getElementById('dictIn');ses.draft=e?e.value:'';ses.hint=1;render();break}
    case 'lread': if(ses){ses.show=!ses.show;render()}break;
    case 'lstop': stopSpeak();break;
    case 'spm': V.spm=v;render();break;
    case 'sprec': speakRec();break;
    case 'spself': {const it=ses.items[ses.i],ok=v==='1';ses.ans=ok?0:1;ses.sres=null;qmark(it.k,ok);if(ok)ses.score++;else ses.miss.push(it);save();render();break}
    case 'spretry': ses.ans=null;ses.sres=null;ses.heard='';render();break;
    case 'rpstart': {const d=byId.rp,sc=d.items[+v];ses={type:'rp',d,sc,si:+v,msgs:[],busy:0,err:'',draft:''};if(!AI){ses.err=aiErr({code:'none'})}render();window.scrollTo(0,0);if(AI&&sc.first)rpTurn();break}
    case 'rpsend': {const el=document.getElementById('rpIn'),t=el?el.value.trim():'';if(!t||ses.busy)break;ses.msgs.push({r:'me',t});ses.draft='';rpTurn();break}
    case 'rpmic': rpMic();break;
    case 'rpja': {const m=ses.msgs[+v];if(m)m.sj=!m.sj;render();break}
    case 'rpfb': rpFeedback();break;
    case 'smopen': {const d=byId.summ;ses={type:'summ',d,it:d.items[+v],res:'',busy:0};render();window.scrollTo(0,0);break}
    case 'smai': summAI();break;
    case 'mockgo': startMock();break;
    case 'mockv': go({name:'mockv'});break;
    case 'missv': go({name:'miss'});break;
    case 'missgo': missGo(v);break;
    case 'statsv': go({name:'stats'});break;
    case 'fs': S.set.fs=v;save();applyFs();render();break;
    case 'voice': S.set.voice=v;save();render();speak('Hello. This is how I sound when reading English sentences.');break;
    case 'theme': S.set.theme=v;save();applyTheme();render();break;
    case 'resume': {const L=S.last;if(!L||!byId[L.id])break;if(L.n==='lesson'){V={name:'lesson',id:L.id,li:L.li,from:L.from};render();window.scrollTo(0,0)}else go({name:'deck',id:L.id,st:-1,cat:'',from:L.from,dir:L.id==='wrei'?'je':undefined});break}
    case 'osec': OSEC[V.c]=v;render();break;
    case 'searchv': go({name:'search',q:V.q||''});setTimeout(()=>{const i=document.getElementById('sq');if(i)i.focus()},50);break;
    case 'bkout': bkOut();break;
    case 'bkin': {const f=document.getElementById('bkFile');if(f)f.click();break}
    case 'bkpaste': {const t=document.getElementById('bkText');if(t&&t.value.trim())bkLoad(t.value.trim());break}
    case 'planword': startPlanWord(v);break;
    case 'planrei': startReiReview();break;
    case 'planles': if(el.dataset.d==='phl'){OSEC.oral='発音';go({name:'lesson',id:'phl',li:+v,from:'oral'})}else{OSEC.rw='英作文';go({name:'lesson',id:'eisaku',li:+v,from:'rw'})}break;
        case 'plango': {const c=catsNow().find(x=>x.id===el.dataset.c);const sec=c&&c.secs.find(x=>x[1].includes(v));if(sec)OSEC[el.dataset.c]=sec[0].split('：')[0];go({name:'deck',id:v,st:-1,cat:'',from:el.dataset.c});break}
    case 'planstart': S.plan={start:today(),seen:{}};PK=null;SCH=null;save();go({name:'home'});break;
    case 'skipday': if(S.plan){const d=+v;S.plan.skip=S.plan.skip||{};if(S.plan.skip[d])delete S.plan.skip[d];else S.plan.skip[d]=1;save();render()}break;
    case 'planback': if(S.plan&&S.plan.start<today()){S.plan.start++;save();render()}break;
    case 'planstop': if(V.confirm){S.plan=null;save();go({name:'home'})}else{V.confirm=true;el.textContent='もう一度押すとやめます（記録は残ります）'}break;
    case 'nav': if(v==='home')go({name:'home'});else if(v==='plan')go({name:'plan'});else if(v==='settings')go({name:'settings'});else go({name:'cat',c:v});break;
    case 'deck': if(V.name==='cat'){const c=catsNow().find(x=>x.id===V.c);const sec=c&&c.secs.find(x=>x[1].includes(v));if(sec)OSEC[V.c]=sec[0].split('：')[0]}
      go({name:'deck',id:v,st:-1,cat:'',dir:v==='wrei'?'je':undefined,lis:V.name==='cat'&&V.c==='oral'&&/^(jr|tr)$/.test(v),from:V.name==='cat'?V.c:V.from});break;
    case 'cat0': go({name:'cat',c:v});break;
    case 'stage': V.st=+v;render();break;
    case 'vdir': V.dir=v;render();break;
    case 'starflash': startStarFlash(V.dir||S.set.dir||'ej',false);window.scrollTo(0,0);break;
    case 'alldue': {const t=today(),its=[],seenK=new Set();for(const d of D.decks){if(d.type!=='vocab')continue;for(const it of d.items){if(seenK.has(it.k))continue;if(isDue(it,'ej',t)){seenK.add(it.k);its.push(it)}}}
      if(!its.length){ses={type:'done',d:{title:'今日の復習'},again:'',msg:'<p>今日の復習はありません。</p>'};render();break}const q=shuffle(its).slice(0,Math.max(20,S.set.n));
      ses={type:'flash',d:{id:'due',title:'今日の復習'},dir:'ej',queue:q,i:0,flip:false,cnt:[0,0,0],rep:{},ahead:false,first:q.length,again:'alldue'};render();window.scrollTo(0,0);break}
    case 'gstar': if(V.name!=='home'&&!ses)V={name:'home'};startStarFlash(v||'ej',true);break;
    case 'star': toggleStar(v,el.dataset.d||'ej');break;
    case 'cat': V.cat=v||'';render();break;
    case 'list': go({name:'list',id:V.id,st:V.st,dir:V.dir});break;
    case 'flash': startFlash();window.scrollTo(0,0);break;
    case 'flip': ses.flip=!ses.flip;render();break;
    case 'speak': speak(v);break;
    case 'grade': grade(+v);break;
    case 'quiz': startQuiz();window.scrollTo(0,0);break;
    case 'qans': quizAnswer(+v);break;
    case 'cloze': startCloze();window.scrollTo(0,0);break;
    case 'cans': clozeAnswer(+v);break;
    case 'mc': startMC(false);window.scrollTo(0,0);break;
    case 'mcw': startMC(true);window.scrollTo(0,0);break;
    case 'mans': mcAnswer(+v);break;
    case 'opick': orderPick(+v);break;
    case 'tfans': tfAnswer(+v);break;
    case 'creveal': ses.reveal=true;render();break;
    case 'cgrade': compGrade(+v);break;
    case 'cai': compAI();break;
    case 'oundo': if(ses&&ses.ans==null){ses.pick.splice(+v,1);render()}break;
    case 'readp': startRead(+v);break;
    case 'lesson': go({name:'lesson',id:V.id,li:+v,hide:V.hide});break;
    case 'lhide': V.hide=v==='1';render();break;
    case 'ljt': el.classList.toggle('hid');break;
    case 'ldrill': startLessonDrill();break;
    case 'reiflash': {const li=+v;if(V.name!=='lesson'){V={name:'lesson',id:'eisaku',li,from:'rw'}}startReiFlash(li);break}
    case 'lcards': {const l=byId[V.id].items[+v];const q=byId.phonics.items.filter(i=>l.cards.includes(i.cat));ses={type:'flash',d:{id:'phonics',title:l.no+' 練習カード'},dir:'ej',queue:q.slice(),i:0,flip:false,cnt:[0,0,0],rep:{},ahead:false,first:q.length,again:'lcards',againV:v};render();window.scrollTo(0,0);break}
    case 'skiprei': V.skipRei=1;render();break;
    case 'rans': readAnswer(+v);break;
    case 'next': next();break;
    case 'setn': S.set.n=+v;save();render();break;
    case 'setdir': S.set.dir=v;save();render();break;
    case 'import': go({name:'import'});break;
    case 'imsave':{const items=parseList(V.text||'');if(!items.length)break;
      const id='u'+Date.now().toString(36);
      S.custom.push({id,title:(V.title||'').trim()||'自分の単語帳',items});buildDecks();save();go({name:'deck',id,st:-1});break}
    case 'deldeck': if(V.confirm){const id=V.id;S.custom=S.custom.filter(c=>c.id!==id);
      for(const k of Object.keys(S.p))if(k.startsWith('c:'+id+':'))delete S.p[k];buildDecks();save();go({name:'home'})}else{V.confirm=true;render()}break;
    case 'reset': if(V.confirm){S=norm({set:S.set,custom:S.custom});save();go({name:'home'})}else{V.confirm=true;render()}break;
  }
});
document.addEventListener('change',e=>{if(e.target.id==='stageSel'){V.st=+e.target.value;render()}});
document.addEventListener('input',e=>{
  if(e.target.id==='compText'&&ses&&ses.type==='comp'){const it=ses.items[ses.i];S.w=S.w||{};S.w[it.k]=e.target.value;const w=document.getElementById('wc');if(w)w.textContent=((e.target.value.trim().match(/[A-Za-z'’-]+/g)||[]).length)+'語';clearTimeout(window.__cw);window.__cw=setTimeout(save,800);return}
  if(e.target.id==='imtitle'){V.title=e.target.value;return}
  if(e.target.id==='imtext'){V.text=e.target.value;const n=parseList(V.text);
    document.getElementById('imcount').textContent=n.length?`${n.length}語を認識しました（先頭：${n[0][0]} ／ 末尾：${n[n.length-1][0]}）`:'まだ認識された単語はありません';
    document.getElementById('imbtn').disabled=!n.length;return}
  if(e.target.id!=='search')return;const q=e.target.value.trim().toLowerCase();
  document.querySelectorAll('#rows .li').forEach(r=>{r.style.display=!q||r.dataset.s.includes(q)?'':'none'});
});
render();
/* ====================== 追加機能 ====================== */
var SR=window.SpeechRecognition||window.webkitSpeechRecognition;
var nzw=w=>w.toLowerCase().replace(/[’']/g,"'").replace(/[^a-z0-9']/g,'');
function wdiff(ref,inp){const A=String(ref).split(/\s+/).filter(Boolean),B=String(inp).split(/\s+/).filter(Boolean),a=A.map(nzw),b=B.map(nzw);
  const L=Array(a.length+1).fill(0).map(()=>Array(b.length+1).fill(0));for(let i=a.length-1;i>=0;i--)for(let j=b.length-1;j>=0;j--)L[i][j]=a[i]===b[j]?L[i+1][j+1]+1:Math.max(L[i+1][j],L[i][j+1]);
  let i=0,j=0,out=[],hit=0,miss=0;while(i<a.length||j<b.length){if(i<a.length&&j<b.length&&a[i]===b[j]){out.push(`<span class="dok">${esc(A[i])}</span>`);i++;j++;hit++}
    else if(j<b.length&&(i>=a.length||L[i][j+1]>=L[i+1][j])){out.push(`<span class="dx">${esc(B[j])}</span>`);j++;miss++}else{out.push(`<span class="dm">${esc(A[i])}</span>`);i++;miss++}}
  return {html:out.join(' '),pct:a.length?Math.round(hit/a.length*100):0,miss}}
function aiCall(prompt){return (async()=>{if(!AI)throw {code:'none'};if(typeof AI.json==='function')return await AI.json(prompt,{modelTier:'default'});const o=await AI(prompt,{modelTier:'default'});const m=String(o.text||'').match(/\{[\s\S]*\}/);return m?JSON.parse(m[0]):null})()}
var aiErr=e=>`<div class="exp ng">AIを利用できませんでした${e&&e.code==='rate_limited'?'（しばらく待ってから再度お試しください）':e&&e.code==='none'?'（この画面ではAIが使えません。claude.ai のアプリ上で開いてください）':''}。</div>`;
function qmark(k,ok){const q=S.q[k]||[0,0,0];S.q[k]=[q[0]+(ok?1:0),q[1]+(ok?0:1),ok?1:0];seen(k)}

/* ---- 1 話す練習 ---- */
function speakView(){const it=ses.items[ses.i],shadow=V.spm==='sh';
  let h=head(ses.d.title,true)+`<div class="prog">${ses.i+1} / ${ses.items.length}・${shadow?'シャドーイング':'音読'}</div>`;
  h+=lisBox(it.en,'お手本を聞く');
  const show=!shadow||ses.ans!=null;
  h+=`<div class="q en spq">${show?esc(it.en):'<span class="muted">（聞いて、まねして言う）</span>'}${it.ja&&(show)?`<div class="spja">${esc(it.ja)}</div>`:''}</div>`;
  if(ses.ans==null){
    if(SR&&!ses.noSR)h+=`<button class="btn p" data-act="sprec">${ses.rec?'● 聞いています…（話し終えたら待つ）':'🎤 話す'}</button>`;
    else h+=`<p class="lock">${ses.noSR?'音声認識が使えませんでした。':'この端末では音声認識が使えません。'}声に出して言ってから、自分で判定してください。</p><div class="row2"><button class="btn" data-act="spself" data-v="0">言えなかった</button><button class="btn p" data-act="spself" data-v="1">言えた</button></div>`;
  }else{const r=ses.sres;
    if(r)h+=`<div class="q en dres">${r.html}</div><div class="exp ${r.pct>=80?'':'ng'}"><b>一致 ${r.pct}%</b>　${r.pct>=80?'よく言えています':'赤い語を意識してもう一度'}<br><span class="muted">認識：${esc(ses.heard||'')}</span></div>`;
    h+=`<div class="row2"><button class="btn" data-act="spretry">もう一度言う</button><button class="btn p" data-act="next">${ses.i+1<ses.items.length?'次へ':'結果を見る'}</button></div>`}
  return h}
function speakRec(){if(!SR||ses.rec)return;let r;try{r=new SR()}catch(e){ses.noSR=1;render();return}
  r.lang='en-US';r.interimResults=false;r.maxAlternatives=1;ses.rec=1;stopSpeak();
  r.onresult=e=>{const t=e.results[0][0].transcript;ses.heard=t;const it=ses.items[ses.i];const d=wdiff(it.en,t);S.spk=S.spk||[];S.spk.push([today(),d.pct]);if(S.spk.length>3000)S.spk=S.spk.slice(-3000);ses.sres=d;ses.ans=d.pct>=80?0:1;qmark(it.k,d.pct>=80);if(d.pct>=80)ses.score++;else ses.miss.push(it);save()};
  r.onerror=e=>{ses.rec=0;if(e.error==='not-allowed'||e.error==='service-not-allowed'||e.error==='audio-capture')ses.noSR=1;render()};
  r.onend=()=>{ses.rec=0;render()};
  try{r.start();render()}catch(e){ses.rec=0;ses.noSR=1;render()}}

/* ---- 2 AIと会話 ---- */
function rpDeck(d){let h='<p class="muted" style="margin:0 4px 10px">AIが相手役になって英語で会話します。終わったら、あなたの英語をAIが添削します。音声入力も使えます。</p>';
  const g={formal:'学会・仕事（フォーマル）',business:'電話・手続き',daily:'日常・旅行'};
  for(const k of Object.keys(g)){const xs=d.items.map((x,i)=>[x,i]).filter(([x])=>x.lv===k);if(!xs.length)continue;
    h+=`<h2>${g[k]}</h2><div class="grp">`+xs.map(([x,i])=>`<button class="deck" data-act="rpstart" data-v="${i}"><div class="t"><span>${esc(x.t)}</span><span class="chev">›</span></div><div class="s">${esc(x.me)}</div></button>`).join('')+'</div>'}
  return h}
function rpPrompt(sc,msgs,mode){const hist=msgs.map(m=>(m.r==='ai'?'Partner':'User')+': '+m.t).join('\n');
  if(mode==='fb')return `You are an English teacher for a Japanese learner. Below is a role-play conversation. Scenario: the partner is ${sc.ai}\n\n${hist}\n\nGive feedback on the USER's English only. Respond in JSON: {"overall":"日本語で全体へのコメント（2〜3文）","items":[{"you":"user's original sentence","better":"a more natural or correct version","why":"日本語で短い説明"}],"phrases":["useful English phrase for this scene", "..."]}. Include up to 6 items (only sentences that can be improved) and 4 phrases.`;
  return `You are role-playing in English. You are ${sc.ai} The user is a Japanese learner of English (intermediate). Keep each reply short (1-3 sentences), natural, and stay in character. Do not correct the user's English during the conversation.\n\nConversation so far:\n${hist||'(none yet — you speak first)'}\n\nRespond in JSON: {"reply":"your next line in English","ja":"その日本語訳"}`}
async function rpTurn(){if(ses.busy)return;ses.busy=1;ses.err='';render();
  try{const r=await aiCall(rpPrompt(ses.sc,ses.msgs));if(!r||!r.reply)throw {};ses.msgs.push({r:'ai',t:String(r.reply),ja:String(r.ja||'')});ses.busy=0;render();speak(r.reply);const b=document.getElementById('rpEnd');if(b)b.scrollIntoView({block:'end'})}
  catch(e){ses.busy=0;ses.err=aiErr(e);render()}}
async function rpFeedback(){if(ses.busy)return;if(!ses.msgs.some(m=>m.r==='me')){ses.err='<div class="exp ng">まだあなたの発言がありません。</div>';render();return}
  ses.busy=1;render();
  try{const r=await aiCall(rpPrompt(ses.sc,ses.msgs,'fb'));ses.busy=0;ses.fb=r;qmark('rp:'+ses.sc.id,true);save();render();window.scrollTo(0,document.body.scrollHeight)}catch(e){ses.busy=0;ses.err=aiErr(e);render()}}
function rpView(){const sc=ses.sc;let h=head(sc.t,true)+`<div class="prog">${esc(sc.me)}・相手はAI</div><div class="chat">`;
  for(const [i,m] of ses.msgs.entries()){if(m.r==='ai')h+=`<div class="msg ai"><div class="en">${esc(m.t)}</div><div class="mt"><button class="linkb" data-act="say" data-v="${esc(m.t)}">▶ 聞く</button>${m.ja?`<button class="linkb" data-act="rpja" data-v="${i}">${m.sj?'訳を隠す':'訳'}</button>`:''}</div>${m.sj?`<div class="muted">${esc(m.ja)}</div>`:''}</div>`;
    else h+=`<div class="msg me en">${esc(m.t)}</div>`}
  if(ses.busy)h+='<div class="msg ai muted">…</div>';
  h+='</div>'+(ses.err||'');
  if(ses.fb){const f=ses.fb;h+=`<h2>添削</h2><div class="exp" style="text-align:left">${esc(f.overall||'')}</div>`+(Array.isArray(f.items)&&f.items.length?'<div class="grp">'+f.items.map(x=>`<div class="deck"><div class="s en" style="text-decoration:line-through">${esc(x.you)}</div><div class="t en"><span>${esc(x.better)}</span></div><div class="s">${esc(x.why||'')}</div></div>`).join('')+'</div>':'')+(Array.isArray(f.phrases)&&f.phrases.length?`<h2>この場面で使える表現</h2><div class="grp">`+f.phrases.map(p=>`<button class="deck" data-act="say" data-v="${esc(p)}"><div class="t en"><span>${esc(p)}</span><span class="chev">▶</span></div></button>`).join('')+'</div>':'')+`<button class="btn p" data-act="rpstart" data-v="${ses.si}">もう一度この場面で話す</button>`}
  else{h+=`<textarea id="rpIn" class="search" rows="2" placeholder="英語で返事を書く（🎤で音声入力）" autocomplete="off" spellcheck="false">${esc(ses.draft||'')}</textarea><div class="row2">${SR?`<button class="btn" data-act="rpmic">${ses.rec?'● 聞いています…':'🎤 話す'}</button>`:''}<button class="btn p" data-act="rpsend" ${ses.busy?'disabled':''}>送る</button></div><button class="btn ghost" id="rpEnd" data-act="rpfb" ${ses.busy?'disabled':''}>会話を終えて添削してもらう</button>`}
  return h}
function rpMic(){if(!SR||ses.rec)return;let r;try{r=new SR()}catch(e){return}r.lang='en-US';r.interimResults=false;ses.rec=1;stopSpeak();
  const el=document.getElementById('rpIn');ses.draft=el?el.value:'';
  r.onresult=e=>{const t=e.results[0][0].transcript;ses.draft=(ses.draft?ses.draft+' ':'')+t};r.onerror=()=>{ses.rec=0;render()};r.onend=()=>{ses.rec=0;render()};try{r.start();render()}catch(e){ses.rec=0}}

/* ---- 3 要約 ---- */
function summDeck(d){let h='<p class="muted" style="margin:0 4px 10px">英検準1級の要約問題と同じ形式です。本文を読んで、内容を45〜55語の英語でまとめます。AIが内容・構成・語彙・文法の4観点（各4点、16点満点）で採点します。</p>';
  h+='<div class="grp">'+d.items.map((x,i)=>{const q=S.q[x.k];return `<button class="deck" data-act="smopen" data-v="${i}"><div class="t"><span>${i+1}. ${esc(x.title)}</span>${q?`<span class="badge">${q[2]?'合格':'再挑戦'}</span>`:''}</div><div class="s">${esc(x.src)}・${esc(x.topic)}</div></button>`}).join('')+'</div>';return h}
const wc=t=>String(t||'').trim().split(/\s+/).filter(Boolean).length;
function summView(){const x=ses.it;let h=head('要約',true)+`<div class="prog">${esc(x.title)}・45〜55語</div>`;
  h+=`<div class="psg en">${x.paras.map(p=>`<p>${esc(p)}</p>`).join('')}</div>`;
  const txt=(S.w&&S.w[x.k])||'';
  h+=`<textarea id="smIn" class="search" rows="6" placeholder="Write your summary in English (45–55 words)." spellcheck="false">${esc(txt)}</textarea><p class="lock" id="smWc">${wc(txt)}語</p>`;
  h+=`<button class="btn p" data-act="smai" ${ses.busy?'disabled':''}>${ses.busy?'採点中…':'AIに採点してもらう'}</button>`+(ses.res||'');
  return h}
async function summAI(){const x=ses.it,el=document.getElementById('smIn'),t=el?el.value.trim():'';S.w=S.w||{};S.w[x.k]=t;save();
  if(!t){ses.res='<div class="exp ng">先に要約を書いてください。</div>';render();return}
  ses.busy=1;ses.res='';render();
  const prompt=`あなたは英検準1級の要約問題の採点者です。次の英文を受験者が45〜55語で要約しました。英検の基準に沿って、内容・構成・語彙・文法をそれぞれ0〜4点で採点してください。本文の表現をそのまま長く写している場合や、語数が大きく外れている場合は減点してください。\n\n本文:\n${x.paras.join('\n')}\n\n受験者の要約（${wc(t)}語）:\n${t}\n\nJSONで返してください: {"content":0-4,"organization":0-4,"vocabulary":0-4,"grammar":0-4,"comment":"日本語で講評（3〜4文）","fixes":[{"you":"誤りや不自然な部分","better":"直した形","why":"日本語で短く"}],"model":"45〜55語の模範要約（英語）"}`;
  try{const r=await aiCall(prompt);ses.busy=0;if(!r){ses.res='<div class="exp ng">採点結果を読み取れませんでした。</div>';render();return}
    const sc=['content','organization','vocabulary','grammar'].map(k=>+r[k]||0),tot=sc.reduce((a,b)=>a+b,0);qmark(x.k,tot>=10);save();
    ses.res=`<div class="exp ${tot>=10?'':'ng'}" style="text-align:left"><b>${tot} / 16</b>　内容 ${sc[0]}・構成 ${sc[1]}・語彙 ${sc[2]}・文法 ${sc[3]}<br>${esc(r.comment||'')}</div>`+(Array.isArray(r.fixes)&&r.fixes.length?'<div class="grp">'+r.fixes.map(f=>`<div class="deck"><div class="s en" style="text-decoration:line-through">${esc(f.you)}</div><div class="t en"><span>${esc(f.better)}</span></div><div class="s">${esc(f.why||'')}</div></div>`).join('')+'</div>':'')+(r.model?`<h2>模範要約</h2><div class="q en" style="font-size:16px">${esc(r.model)}</div>`:'');
    render()}catch(e){ses.busy=0;ses.res=aiErr(e);render()}}

/* ---- 4 実力テスト ---- */
function mkVocabMC(src,n,area){const pool=src.filter(i=>i.m&&i.w&&!/~|…/.test(i.w));const out=[];const pick=shuffle(pool).slice(0,n);
  for(const it of pick){const ds=[];for(const x of shuffle(pool)){if(ds.length>=3)break;if(x.m!==it.m&&!ds.includes(x.m))ds.push(x.m)}out.push({k:'mt:'+it.k,q:it.w,c:[it.m].concat(ds),e:`${it.w}　${it.m}`,area,cat:area})}return out}
function startMock(){const it=[],g=id=>byId[id]?byId[id].items:[];
  const lvs=[1,2,3,4].flatMap(L=>g('lv'+L).map(x=>Object.assign({},x)));
  it.push(...mkVocabMC(g('lv2').concat(g('lv3')),6,'単語'),...mkVocabMC(g('lv4'),6,'単語'));
  it.push(...mkVocabMC(g('jk').concat(g('jid')),5,'熟語'));
  it.push(...shuffle(g('jg')).slice(0,7).map(x=>Object.assign({},x,{area:'文法'})),...shuffle(g('jgh')).slice(0,5).map(x=>Object.assign({},x,{area:'語法'})));
  it.push(...shuffle(g('lp')).slice(0,4).map(x=>Object.assign({},x,{area:'リスニング'})),...shuffle(g('lq')).slice(0,3).map(x=>Object.assign({},x,{area:'リスニング'})));
  it.push(...mkVocabMC(D.decks.filter(d=>/^kw\d/.test(d.id)).flatMap(d=>d.items),4,'会話'));
  const items=it.filter(x=>x.c&&x.c.length===4);
  ses={type:'mc',mock:1,d:{id:'mock',title:'実力テスト'},items:shuffle(items),i:0,score:0,ans:null,miss:[]};mcSetup();render();window.scrollTo(0,0)}
function mockFinish(){const a={};ses.items.forEach((x,i)=>{const r=a[x.area]||(a[x.area]=[0,0]);r[1]++;if(ses.res&&ses.res[i])r[0]++});
  S.mock=S.mock||[];S.mock.push({d:today(),s:ses.score,n:ses.items.length,a});save();
  let msg=`<div class="big">${ses.score}<span style="font-size:20px"> / ${ses.items.length}</span></div><p>${Math.round(ses.score/ses.items.length*100)}点（100点換算）</p><div class="grp" style="text-align:left">`+Object.entries(a).map(([k,v])=>`<div class="deck"><div class="t"><span>${k}</span><span class="pleft">${v[0]} / ${v[1]}</span></div><div class="bar"><i style="width:${v[0]/v[1]*100}%"></i></div></div>`).join('')+'</div>';
  ses={type:'done',d:{title:'実力テスト'},again:'mockv',msg};render();window.scrollTo(0,0)}
function mdDate(d){const x=new Date(d*DAY);return (x.getUTCMonth()+1)+'月'+x.getUTCDate()+'日'}
function mockView(){let h=head('実力テスト',true);const M=S.mock||[];
  h+=`<p class="muted" style="margin:10px 4px">単語・熟語・文法・語法・リスニング・会話から40問。月に1回受けて、点数の推移を見ます。${S.plan?`学習プランでは30日ごとにテストの日があり、その日はホームの「今日のプラン」に出ます。次回は${mdDate(mockSched().next)}です。`:''}</p><button class="btn p" data-act="mockgo">テストを始める（約15分）</button>`;
  if(M.length){const mx=100;h+='<h2>これまでの結果</h2><div class="mchart">'+M.slice(-12).map(m=>{const p=Math.round(m.s/m.n*100),dt=new Date(m.d*DAY);return `<div class="mb"><span class="n">${p}</span><i style="height:${p}%"></i><span class="d">${dt.getUTCMonth()+1}/${dt.getUTCDate()}</span></div>`}).join('')+'</div>';
    const last=M[M.length-1];h+='<h2>前回の分野別</h2><div class="grp">'+Object.entries(last.a).map(([k,v])=>`<div class="deck"><div class="t"><span>${k}</span><span class="pleft">${v[0]} / ${v[1]}</span></div><div class="bar"><i style="width:${v[0]/v[1]*100}%"></i></div></div>`).join('')+'</div>'}
  return h}
function mockSched(){if(!S.plan)return null;const t=today(),el=t-S.plan.start,cyc=Math.floor(el/PLAN_YEAR),c0=S.plan.start+cyc*PLAN_YEAR,n=Math.floor((t-c0)/30),last=n>=1?c0+n*30:null,next=c0+(n+1)*30<c0+PLAN_YEAR?c0+(n+1)*30:c0+PLAN_YEAR+30;return {last,next,n,no:cyc*12+n}}
function mockDue(){const sc=mockSched();if(!sc||sc.last==null)return false;const M=S.mock||[];return !M.some(m=>m.d>=sc.last)}

/* ---- 5 まちがいノート ---- */
function missList(){const out=[];for(const d of D.decks){if(d.custom||d.id==='mock')continue;
    if(d.type==='vocab'){if(/^(lv|ac$)/.test(d.id))continue;const n=d.items.filter(i=>{const p=S.p[i.k]||S.p['je:'+i.k];return p&&p[0]===1}).length;if(n)out.push([d,n]);continue}
    if(d.type==='rp'||d.type==='summ'){const n=d.items.filter(i=>S.q[i.k]&&!S.q[i.k][2]).length;if(n)out.push([d,n]);continue}
    const n=qitems(d).filter(i=>i&&S.q[i.k]&&!S.q[i.k][2]).length;if(n)out.push([d,n])}
  return out}
function missView(){let h=head('まちがいノート',true);const L=missList(),tot=L.reduce((s,x)=>s+x[1],0);
  h+=`<p class="muted" style="margin:10px 4px">最後に解いたときにまちがえた問題と、「もう一度」にした単語を、コースごとに集めています。正解すると自動で消えます。</p>`;
  if(!L.length)return h+'<div class="ptext"><p>今はまちがえたままの問題はありません。</p></div>';
  const byCat={};for(const [d,n] of L){const c=(catsNow().find(x=>x.secs.some(s=>s[1].includes(d.id)))||{t:'その他'}).t;(byCat[c]=byCat[c]||[]).push([d,n])}
  h+=`<div class="pday">合計 <b>${tot}</b></div>`;
  for(const c in byCat)h+=`<h2>${esc(c)}</h2><div class="grp">`+byCat[c].map(([d,n])=>`<button class="deck" data-act="missgo" data-v="${d.id}"><div class="t"><span>${esc(SHORT[d.id]||d.title)}</span><span class="pleft"><b>${n}</b></span></div></button>`).join('')+'</div>';
  return h}
function missGo(id){const d=byId[id];if(!d)return;
  if(d.type==='vocab'){const q=d.items.filter(i=>{const p=S.p[i.k];return p&&p[0]===1}),qj=d.items.filter(i=>{const p=S.p['je:'+i.k];return p&&p[0]===1});const dir=q.length>=qj.length?'ej':'je',src=dir==='ej'?q:qj;
    V={name:'miss'};ses={type:'flash',d,dir,queue:shuffle(src).slice(0,30),i:0,flip:false,cnt:[0,0,0],rep:{},ahead:false,first:Math.min(30,src.length),again:'missgo',againV:id};render();window.scrollTo(0,0);return}
  if(d.type==='read'||d.type==='lesson'||d.type==='rp'||d.type==='summ'){go({name:'deck',id,st:-1,cat:'',from:''});return}
  V={name:'deck',id,st:-1,cat:'',from:''};startMC(true);if(!ses)render();window.scrollTo(0,0)}

/* ---- 7 記録 ---- */
function statsView(){let h=head('記録',true);const log=S.log||{},t=today();
  let streak=0;for(let d=t;log[d];d--)streak++;if(!log[t]){streak=0;for(let d=t-1;log[d];d--)streak++}
  const days=Object.keys(log).length,total=Object.values(log).reduce((a,b)=>a+b,0);
  h+=`<div class="stats" style="margin-top:14px"><div class="stat"><b>${streak}</b><span>連続日数</span></div><div class="stat"><b>${days}</b><span>学習した日</span></div><div class="stat"><b>${total}</b><span>解いた問題・枚</span></div></div>`;
  const N=28,arr=[];for(let d=t-N+1;d<=t;d++)arr.push([d,log[d]||0]);const mx=Math.max(10,...arr.map(x=>x[1]));
  h+='<h2>最近4週間</h2><div class="mchart small">'+arr.map(([d,n])=>{const dt=new Date(d*DAY);return `<div class="mb"><i style="height:${n/mx*100}%"></i><span class="d">${dt.getUTCDay()===1||d===t?(dt.getUTCMonth()+1)+'/'+dt.getUTCDate():''}</span></div>`}).join('')+'</div>';
  if(!PK)PK=planKeys();
  h+='<h2>分野ごと</h2><div class="grp">'+PLAN_AREAS.map(a=>{const K=PK[a.id].all;if(!K.length)return '';let qa=0,qo=0,vl=0,vm=0;
    for(const k of K){const q=S.q[k];if(q){qa++;if(q[2])qo++}const p=S.p[k];if(p){vl++;if(p[0]>=4)vm++}}
    const vocab=vl>qa;const right=vocab?`${vl} / ${K.length}`:qa?`正答 ${Math.round(qo/qa*100)}%`:'未着手';
    return `<div class="deck"><div class="t"><span>${esc(a.t)}</span><span class="pleft">${right}</span></div><div class="s">${vocab?`覚えた ${vl}・定着 ${vm}`:`解いた ${qa} / ${K.length}`}</div><div class="bar"><i style="width:${(vocab?vl:qa)/K.length*100}%"></i></div></div>`}).join('')+'</div>';
  {const A=S.spk||[];if(A.length){const t=today(),byd={};for(const [d,p] of A){(byd[d]=byd[d]||[]).push(p)}const avg=a=>Math.round(a.reduce((x,y)=>x+y,0)/a.length);
    const last7=A.filter(x=>x[0]>t-7).map(x=>x[1]),all=A.map(x=>x[1]),ok=A.filter(x=>x[1]>=80).length;
    h+=`<h2>話す練習<span class="h2r">${A.length}回・合格 ${Math.round(ok/A.length*100)}%</span></h2><div class="stats"><div class="stat"><b>${last7.length?avg(last7):'-'}%</b><span>最近7日の一致率</span></div><div class="stat"><b>${avg(all)}%</b><span>これまでの平均</span></div><div class="stat"><b>${Object.keys(byd).length}</b><span>練習した日</span></div></div>`;
    const arr=[];for(let d=t-13;d<=t;d++)arr.push([d,byd[d]?avg(byd[d]):0]);
    h+='<div class="mchart small">'+arr.map(([d,v])=>{const dt=new Date(d*DAY);return `<div class="mb"><span class="n">${v||''}</span><i style="height:${v}%"></i><span class="d">${d===t||dt.getUTCDay()===1?(dt.getUTCMonth()+1)+'/'+dt.getUTCDate():''}</span></div>`}).join('')+'</div>'}}
  h+=`<button class="btn" data-act="mockv">実力テスト</button>`;
  return h}

/* ---- 検索 ---- */
let SIDX=null;
function buildSIdx(){SIDX=[];const seenK=new Set();for(const d of D.decks){if(/^lv\d/.test(d.id))continue;
  for(const it of qitems(d)){if(!it||seenK.has(it.k))continue;seenK.add(it.k);
    if(d.type==='vocab')SIDX.push({d,it,a:String(it.w||''),b:String(it.m||'')});
    else{const a=it.q||it.s||it.en||it.say||(it.ch?it.ch.join(' '):'')||it.ja||'',b=it.e||it.ja||(it.models&&it.models[0])||'';if(a)SIDX.push({d,it,a:String(a).replace(/[{}]/g,''),b:String(b)})}}}}
function searchView(){let h=head('検索',true);h+=`<input id="sq" class="search" type="search" placeholder="英語・日本語で探す（例：take after、影響）" autocomplete="off" value="${esc(V.q||'')}"><div id="sres">${searchRes(V.q||'')}</div>`;return h}
function searchRes(q){q=q.trim().toLowerCase();if(!q)return '<p class="muted" style="margin:6px 4px">単語・熟語・会話フレーズ・例文・問題をまとめて探せます。</p>';
  if(!SIDX)buildSIdx();const hit=[];for(const x of SIDX){const a=x.a.toLowerCase(),b=x.b.toLowerCase();if(a.includes(q)||b.includes(q)){hit.push(x);if(hit.length>=120)break}}
  hit.sort((x,y)=>(y.a.toLowerCase()===q)-(x.a.toLowerCase()===q)||(y.a.toLowerCase().startsWith(q))-(x.a.toLowerCase().startsWith(q)));
  if(!hit.length)return '<p class="muted" style="margin:6px 4px">見つかりませんでした。</p>';
  return `<p class="muted" style="margin:6px 4px">${hit.length>=120?'120件以上':hit.length+'件'}</p><div class="grp">`+hit.map(x=>`<button class="deck" data-act="deck" data-v="${x.d.id}"><div class="t en"><span>${esc(x.a)}</span>${x.d.type==='vocab'?`<span class="ib sm" data-act="say" data-v="${esc(x.it.say||x.a)}">▶</span>`:''}</div><div class="s">${esc(x.b.slice(0,80))}</div><div class="s" style="font-size:11px">${esc(SHORT[x.d.id]||x.d.title)}</div></button>`).join('')+'</div>'}
document.addEventListener('input',e=>{if(e.target.id==='sq'){V.q=e.target.value;const r=document.getElementById('sres');if(r)r.innerHTML=searchRes(V.q)}});

/* ---- 9 バックアップ ---- */
function backupHtml(){return `<h2>記録のバックアップ</h2><p class="muted" style="margin:0 4px 10px">学習記録をファイルに保存したり、別の端末で読み込んだりできます。</p><button class="btn" data-act="bkout">記録をファイルに書き出す</button><button class="btn" data-act="bkin">ファイルから読み込む</button><input type="file" id="bkFile" accept=".json,application/json" style="display:none">${V.bkText!=null?`<p class="muted" style="margin:6px 4px">ファイルを保存できない環境です。下の文字をすべてコピーしてメモなどに残してください。読み込むときは、ここに貼り付けて「貼り付けた記録を読み込む」を押します。</p>`:''}<textarea id="bkText" class="search" rows="4" placeholder="（ここに記録の文字を貼り付けて読み込むこともできます）">${esc(V.bkText||'')}</textarea><button class="btn ghost" data-act="bkpaste">貼り付けた記録を読み込む</button>${V.bkMsg?`<p class="lock">${esc(V.bkMsg)}</p>`:''}`}
function bkOut(){const txt=JSON.stringify(S);try{const b=new Blob([txt],{type:'application/json'}),u=URL.createObjectURL(b),a=document.createElement('a');const dt=new Date();a.href=u;a.download=`mnemosyne-${dt.getFullYear()}${String(dt.getMonth()+1).padStart(2,'0')}${String(dt.getDate()).padStart(2,'0')}.json`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),3000);V.bkMsg='書き出しました。ダウンロードされない場合は下の文字をコピーしてください。';V.bkText=txt}catch(e){V.bkText=txt}render()}
function bkLoad(txt){try{const o=JSON.parse(txt);if(!o||typeof o!=='object'||!o.p)throw 0;S=norm(o);S.t=Date.now();save();buildDecks();V.bkMsg='記録を読み込みました。';V.bkText=null}catch(e){V.bkMsg='読み込めませんでした。書き出した記録の文字をそのまま貼り付けてください。'}render()}
document.addEventListener('change',e=>{if(e.target.id==='bkFile'&&e.target.files[0]){const f=new FileReader();f.onload=()=>bkLoad(String(f.result));f.readAsText(e.target.files[0])}});
document.addEventListener('input',e=>{if(e.target.id==='smIn'){const w=document.getElementById('smWc');if(w){const n=wc(e.target.value);w.textContent=n+'語'+(n<45?'（少なめ）':n>55?'（多め）':'')}}if(e.target.id==='rpIn'&&ses)ses.draft=e.target.value});

let DARK_RULES=null;
function applyTheme(){const th=(S.set&&S.set.theme)||'auto';
  if(!DARK_RULES){DARK_RULES=[];for(const sh of document.styleSheets){let rs;try{rs=sh.cssRules}catch(e){continue}for(const r of rs)if(r.media&&/prefers-color-scheme:\s*dark/.test(r.media.mediaText))DARK_RULES.push(r)}}
  for(const r of DARK_RULES){try{r.media.mediaText=th==='dark'?'all':th==='light'?'not all':'(prefers-color-scheme: dark)'}catch(e){}}
  const m=document.querySelector('meta[name="color-scheme"]');if(m)m.content=th==='dark'?'dark':th==='light'?'light':'light dark';
  document.documentElement.dataset.theme=th}
function applyFs(){const z={s:.92,m:1,l:1.1,xl:1.22}[S.set.fs||'m']||1;document.documentElement.style.setProperty('--z',z)}
applyFs();
applyTheme();
{const sp=document.getElementById('splash');if(sp){const t0=window.__T0||Date.now();setTimeout(()=>{sp.classList.add('out');setTimeout(()=>sp.remove(),700)},Math.max(0,2000-(Date.now()-t0)))}}
initCloud(3);
initAI(3);
})();
