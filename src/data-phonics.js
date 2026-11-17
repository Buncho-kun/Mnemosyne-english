// フォニックス（つづりと発音のルール。解説はこのアプリ用に作成）
// つづり|音|例(読み上げ用)|ポイント|分類
(function(){
const T=`a（短母音）|ア /æ/|cat, map, bag|子音にはさまれた a は「エ」と「ア」の中間の短い音|短母音
e（短母音）|エ /e/|bed, pen, red|日本語の「エ」より少し口を横に開く|短母音
i（短母音）|イ /ɪ/|sit, pig, milk|「イ」と「エ」の中間の短い音|短母音
o（短母音）|ア /ɑ/|hot, box, stop|アメリカ英語では口を縦に大きく開けた「ア」|短母音
u（短母音）|ア /ʌ/|cup, bus, sun|口をあまり開けずに短く「ア」|短母音
a_e|エイ /eɪ/|make, cake, name|語末の e は読まず、前の母音をアルファベット読みにする（マジックe）|マジックe
i_e|アイ /aɪ/|time, bike, five|マジックe：i をアルファベットの「アイ」と読む|マジックe
o_e|オウ /oʊ/|home, note, rope|マジックe：o を「オウ」と読む|マジックe
u_e|ユー /juː/|cute, use, huge|マジックe：u を「ユー」と読む（rule のように「ウー」もある）|マジックe
e_e|イー /iː/|these, theme, complete|マジックe：e を「イー」と読む|マジックe
ai / ay|エイ /eɪ/|rain, paint, day|母音が2つ並ぶと、最初の文字の名前読みになりやすい（語末は ay）|母音の組み合わせ
ee / ea|イー /iː/|see, tree, eat|ea は bread, head のように /e/ になる例外もある|母音の組み合わせ
oa / ow|オウ /oʊ/|boat, road, snow|ow は cow のように「アウ」の場合もある|母音の組み合わせ
ie / igh|アイ /aɪ/|pie, light, high|igh の gh は発音しない|母音の組み合わせ
oo（長い音）|ウー /uː/|food, moon, school|唇を丸めて長く|母音の組み合わせ
oo（短い音）|ウ /ʊ/|book, good, foot|唇の力を抜いて短く|母音の組み合わせ
ou / ow|アウ /aʊ/|out, house, cow|「ア」から「ウ」へ滑らかに|母音の組み合わせ
oi / oy|オイ /ɔɪ/|coin, boil, boy|語末は oy|母音の組み合わせ
au / aw|オー /ɔː/|August, cause, saw|口を縦に開けて「オー」|母音の組み合わせ
ew / ue|ユー・ウー /juː, uː/|new, few, blue|子音によって「ユー」か「ウー」になる|母音の組み合わせ
ar|アー /ɑːr/|car, park, star|r が後ろにつくと母音の音が変わる（r の付いた母音）|r の付いた母音
or|オー /ɔːr/|fork, short, born|口を丸めて「オー」、最後に舌を巻く|r の付いた母音
er / ir / ur|アー /ɜːr/|her, bird, turn|3つとも同じ音。口をあまり開けずに舌を巻く|r の付いた母音
are / air|エア /ɛər/|care, hair, share|「エ」から舌を巻く|r の付いた母音
ear / eer|イア /ɪər/|hear, near, deer|ear は bear のように「エア」になる例外もある|r の付いた母音
sh|シュ /ʃ/|ship, fish, shop|唇を突き出して息を出す|子音の組み合わせ
ch|チ /tʃ/|chair, lunch, much|machine のように「シュ」、school のように「ク」の例外もある|子音の組み合わせ
tch|チ /tʃ/|watch, catch, kitchen|短母音のすぐ後の「チ」は tch と書く|子音の組み合わせ
th（息だけ）|ス(舌先) /θ/|think, three, math|舌先を上の歯に軽く当てて息だけ出す|子音の組み合わせ
th（声を出す）|ズ(舌先) /ð/|this, mother, they|舌先を歯に当てて声を出す|子音の組み合わせ
ph|フ /f/|phone, photo, graph|ギリシャ語由来の語に多い|子音の組み合わせ
wh|ウ /w/|what, when, white|who, whole では /h/ と読む|子音の組み合わせ
ng|ング /ŋ/|sing, long, king|最後の g ははっきり発音しない|子音の組み合わせ
ck|ク /k/|back, clock, duck|短母音のすぐ後の「ク」は ck と書く|子音の組み合わせ
qu|クウ /kw/|queen, quick, quiet|q の後にはほぼ必ず u が来る|子音の組み合わせ
c（硬い音）|ク /k/|cat, cup, cold|a, o, u や子音の前の c は /k/|c と g の読み分け
c（柔らかい音）|ス /s/|city, cent, cycle|e, i, y の前の c は /s/|c と g の読み分け
g（硬い音）|グ /g/|game, go, gum|a, o, u の前の g は /g/|c と g の読み分け
g（柔らかい音）|ジ /dʒ/|gym, giant, page|e, i, y の前では /dʒ/ になりやすい（get, give は例外）|c と g の読み分け
kn|ヌ /n/（k は読まない）|know, knife, knee|語頭の kn の k は発音しない|黙字
wr|ル /r/（w は読まない）|write, wrong, wrap|語頭の wr の w は発音しない|黙字
mb|ム /m/（b は読まない）|climb, comb, bomb|語末の mb の b は発音しない|黙字
gn|ヌ /n/（g は読まない）|sign, design, foreign|g は発音しない（signal では読む）|黙字
gh|読まない／フ /f/|night, daughter, laugh|gh は読まないか /f/ になる|黙字
-tion / -sion|シャン /ʃən/|nation, action, mission|直前の母音にアクセントが来やすい|語尾
-ture|チャー /tʃər/|nature, picture, future|「チャ」に近い弱い音|語尾
-ed（ト）|ト /t/|walked, stopped, laughed|p, k, f, s, sh, ch など息だけの音の後|語尾
-ed（ド）|ド /d/|played, called, opened|声を出す音の後|語尾
-ed（イド）|イド /ɪd/|wanted, needed, started|t, d の後|語尾
-y（長い語の語末）|イ /i/|happy, city, family|2音節以上の語末の y|語尾
-y（短い語の語末）|アイ /aɪ/|my, cry, fly|1音節の語末の y|語尾
ough|いろいろな読み方|though, through, enough|オウ・ウー・アフなど何通りもある要注意のつづり|要注意
あいまい母音（シュワー）|ア /ə/|about, banana, sofa|アクセントのない母音は、弱くあいまいな「ア」になる|アクセントと弱い音
アクセントで変わる語|名詞は前・動詞は後ろ|record, present, object|名詞は前の音節、動詞は後ろの音節を強く読むことが多い|アクセントと弱い音`;
const items=T.split('\n').filter(Boolean).map((l,i)=>{const [w,m,say,pt,cat]=l.split('|');return {k:'ph:'+w,w,pos:'フォニックス',m,ex:say+' ― '+pt,say,cat}});
const D=window.EIGO_DATA;
D.decks.push({id:'phonics',type:'vocab',title:'フォニックス（つづりと発音）',sub:'つづりから音を推測するルール',stage:20,items});
D.groups.splice(1,0,{title:'発音',ids:['phonics']});
})();
