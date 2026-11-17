// リスニング ― 既存の単語・会話・例文から、端末の読み上げ音声を使う問題を作る
(function(){
const D=window.EIGO_DATA,by={};D.decks.forEach(d=>by[d.id]=d);
const strip=s=>String(s||'').replace(/\[|\]/g,'').replace(/\s*[~〜]\s*/g,' … ').replace(/\s+/g,' ').trim();
const bi=s=>{const o=new Set();const t=String(s).replace(/[（(].*?[)）]|[〜~、。・；;，,\s]/g,'');for(let i=0;i<t.length-1;i++)o.add(t.slice(i,i+2));return o};
const near=(a,b)=>{const A=bi(a);for(const x of bi(b))if(A.has(x))return true;return false};
const GEN=new Set("I agree.|I totally agree.|I couldn't agree more.|Sure.|Sure thing.|Anytime.|Here you are.|I see.|I'm in.|I'm game.|That's too bad.|It was okay.|You can say that again.|Piece of cake.|Why not?|I'm not sure. Let me check and get back to you.|I'm afraid I don't have the data at hand.|That sounds reasonable.|I'll pass, thanks.|That's OK.|No problem.|Of course.|Absolutely.|Exactly.|Me too.|Same here.|Good to know.|That makes sense.|I guess so.|Maybe.|I hope so.|I hope not.|Not really.|Sort of.|It depends.|Got it.|Sounds good.|No worries.|That's a good point.|I agree with you on that.|Fair enough.|Tell me about it.|You're telling me!|I know what you mean.|I'll think about it.|I have no idea.|Beats me.|Is that so?|Oh, I didn't know that.|That's great!|Really? That's great!|Go ahead.|Be my guest.|Not at all.|You're welcome.|Don't mention it.|My pleasure.|I'd love to.|Count me in!|I'm afraid I can't.|I'd rather not.|Pretty good.|Pretty good, thanks.|Not bad. And you?|Nothing much. Same as usual.|Same old, same old.|Nothing special.|I'm not so sure about that.|I agree with you to some extent, but...|That's an important point. We plan a larger study.|Yes, I learned a lot.|Seriously?|No way!|I'm glad to hear that.|Then what?|And?|So what?|Right now?|I'll take care of it.|I'm on it.".split('|'));
const others=(arr,i,get,n,ok)=>{const out=[],seen=new Set([get(arr[i])]);for(let j=1;out.length<n&&j<arr.length*3;j++){const x=arr[(i+j*37+j*j*11)%arr.length],v=get(x);if(!v||seen.has(v)||(ok&&!ok(x)))continue;seen.add(v);out.push(v)}return out};
// 1) 単語の聞き取り（Lv1〜Lv3）
const lw=[];
['lv1','lv2','lv3'].forEach(id=>{const d=by[id];if(!d)return;const its=d.items.filter(x=>/^[A-Za-z][A-Za-z'\- ]*$/.test(x.w)&&x.m);
  its.forEach((it,i)=>{const c=others(its,i,x=>x.m,3,x=>(x.pos===it.pos||!it.pos)&&!near(x.m,it.m));if(c.length<3)return;
    lw.push({k:'lw:'+it.k,cat:d.title.replace(/\s.*$/,''),say:it.w,c:[it.m].concat(c),e:`${it.w}（${it.pos||''}）${it.m}`})})});
// 2) 会話フレーズの聞き取り・3) 応答を選ぶ
const kw=D.decks.filter(d=>/^kw\d+$/.test(d.id));const ph=[],rs=[];
kw.forEach(d=>d.items.forEach(it=>{const w=strip(it.w);if(w&&it.m)ph.push({it,w,d:d.id})}));
ph.forEach((x,i)=>{const c=others(ph,i,y=>y.it.m,3,y=>!near(y.it.m,x.it.m));if(c.length<3)return;
  D.__lp=D.__lp||[];D.__lp.push({k:'lp:'+x.it.k,cat:by[x.d]?by[x.d].title.replace(/^日常英会話\s*/,''):'',say:x.w,c:[x.it.m].concat(c),e:`${x.w}　${x.it.m}`})});
const dl=[];
kw.forEach(d=>d.items.forEach(it=>{const m=String(it.ex||'').match(/^A:\s*(.+?)\s+B:\s*(.+)$/);if(!m)return;const a=strip(m[1]),b=strip(m[2]);if(!/[?.!]$/.test(a))return;dl.push({it,a,b,d:d.id})}));
dl.forEach((x,i)=>{if(rs.some(r=>r.say===x.a))return;const c=others(dl,i,y=>y.b,3,y=>y.d!==x.d&&!GEN.has(y.b)&&y.b!==x.b);if(c.length<3)return;
  rs.push({k:'lq:'+x.it.k,cat:'応答',say:x.a,c:[x.b].concat(c),e:`A: ${x.a}　B: ${x.b}（${strip(x.it.w)}＝${x.it.m}）`,en:true})});
// 4) 書き取り（英作文の例文・会話の例）
const dict=[];
if(by.wrei)by.wrei.items.forEach(it=>{if(it.w.split(' ').length>=4)dict.push({k:'ld:'+it.k,cat:'英作文の例文',en:it.w,ja:it.m})});
dl.forEach(x=>{if(x.a.split(' ').length>=4)dict.push({k:'ld:a:'+x.it.k,cat:'会話',en:x.a,ja:''})});
D.decks.push({id:'lw',type:'mc',title:'単語の聞き取り',sub:'音声を聞いて意味を選ぶ（Lv1〜Lv3）',items:lw,listen:true});
D.decks.push({id:'lp',type:'mc',title:'会話フレーズの聞き取り',sub:'音声を聞いて意味を選ぶ',items:D.__lp||[],listen:true});
D.decks.push({id:'lq',type:'mc',title:'応答を選ぶ',sub:'話しかけを聞いて、自然な返事を選ぶ',items:rs,listen:true});
D.decks.push({id:'ld',type:'dict',title:'書き取り（ディクテーション）',sub:'聞いた英文をそのまま書く',items:dict,listen:true});
// 5) 話す練習（音読・シャドーイング）
const sp=[];
if(by.wrei)by.wrei.items.forEach(it=>sp.push({k:'sp:'+it.k,cat:'英作文の例文',en:it.w,ja:it.m}));
kw.forEach(d=>d.items.forEach(it=>{const w=strip(it.w);if(!w||/…/.test(w)||w.split(' ').length<2)return;sp.push({k:'sp:'+it.k,cat:by[d.id]?by[d.id].title:'',en:w,ja:it.m})}));
D.decks.push({id:'spk',type:'speak',title:'話す練習（音読・シャドーイング）',sub:'英文を声に出し、音声認識で確かめる',items:sp,listen:true});
delete D.__lp;
})();
