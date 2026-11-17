// 英作文 例文暗記（和→英）― 英作文の講義（各課）の例文から自動で作る
(function(){
const D=window.EIGO_DATA;const es=D.decks.find(d=>d.id==='eisaku');if(!es)return;
const clean=s=>String(s).replace(/\*\*|\[\[|\]\]|[{}]/g,'').trim();
const items=[];
es.items.forEach((l,li)=>{l.body.split('\n').forEach(line=>{const m=line.match(/^([=-]) ([^|]+)\|([^|]+)\|(.+)$/);if(!m)return;
  items.push({k:'wr:'+l.k+':'+m[2].trim(),w:clean(m[3]),m:clean(m[4]),pos:l.no,li,main:m[1]==='=',sent:true})})});
D.decks.push({id:'wrei',type:'vocab',title:'英作文 例文暗記',sub:'講義の例文を日本語から英語で言えるように',items,stage:30});
const ks=D.decks.find(d=>d.id==='kaishaku');
if(ks){const it2=[];ks.items.forEach((l,li)=>{l.body.split('\n').forEach(line=>{const m=line.match(/^([=-]) ([^|]+)\|([^|]+)\|(.+)$/);if(!m)return;
  it2.push({k:'kr:'+l.k+':'+m[2].trim(),w:clean(m[3]),m:clean(m[4]),pos:l.no,li,main:m[1]==='=',sent:true})})});
  D.decks.push({id:'krei',type:'vocab',title:'英文解釈 構文の例文',sub:'講義の例文を英語から正確に訳せるように',items:it2,stage:30})}
})();
