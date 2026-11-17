// 品質点検：複数のコースに同じ問題文があるものは、先のコース（入試文法など）に1つだけ残す
(function(){const D=window.EIGO_DATA;const seen=new Set();
for(const d of D.decks){if(d.type!=='mc'||d.listen)continue;d.items=d.items.filter(i=>{if(!i.q)return true;const k=String(i.q).trim().toLowerCase();if(seen.has(k))return false;seen.add(k);return true})}
})();
