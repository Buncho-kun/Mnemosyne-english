// フォニックス・発音 追加分（説明はすべてこのアプリ用に作成）
(function(){
const D=window.EIGO_DATA,ph=D.decks.find(d=>d.id==='phonics');if(!ph)return;
const hv=new Set(ph.items.map(i=>i.w));
// 見出し|音・ポイント|説明と例|読み上げ語|カテゴリ
const T=`L と R（light / right）|L は舌先を上の歯ぐきにつける、R は舌をどこにもつけずに丸める|light（光）／ right（右）、lead／read、collect／correct|light, right, collect, correct|聞き分け（ミニマルペア）
L と R（glass / grass）|語中の L と R も区別する|glass（ガラス）／ grass（草）、fly／fry、long／wrong|glass, grass, fly, fry|聞き分け（ミニマルペア）
B と V（boat / vote）|V は上の歯を下唇に当てて震わせる|boat／vote、best／vest、berry／very|best, vest, berry, very|聞き分け（ミニマルペア）
S と TH（sink / think）|TH は舌先を上の歯に軽く当てて息を出す|sink／think、sick／thick、mouse／mouth|sink, think, mouse, mouth|聞き分け（ミニマルペア）
Z と TH（close / clothe）|有声の TH は舌を歯に当てて声を出す|breeze／breathe、close／clothe|breeze, breathe|聞き分け（ミニマルペア）
F と H（fall / hall）|F は上の歯を下唇に当てる。「フ」は日本語のフと違う|fall／hall、fat／hat、food／who'd|fall, hall, fat, hat|聞き分け（ミニマルペア）
S と SH（see / she）|SH は唇を丸めて前に突き出す|see／she、sip／ship、sort／short|see, she, sip, ship|聞き分け（ミニマルペア）
SI と SHI（seat / sheet）|日本語の「シ」は SHI に近い。seat の S は「スィ」|seat／sheet、sea／she、sip／ship|seat, sheet|聞き分け（ミニマルペア）
短い i と長い ee（ship / sheep）|短い i は口をゆるめて短く、ee は口を横に引いて長く|ship／sheep、live／leave、fill／feel|ship, sheep, live, leave|聞き分け（ミニマルペア）
æ と ʌ（hat / hut）|æ は「エ」の口で「ア」、ʌ は口を軽く開けた短い「ア」|hat／hut、bag／bug、cap／cup|hat, hut, bag, bug|聞き分け（ミニマルペア）
ɑ と ʌ（cot / cut）|ɑ は口を大きく縦に開けた「ア」、ʌ は短く弱い「ア」|hot／hut、cop／cup、not／nut|hot, hut, not, nut|聞き分け（ミニマルペア）
ɔː と ɜːr（walk / work）|walk は口を縦に開けた「オー」、work は舌を丸めた「アー」|walk／work、ball／burn、saw／sir|walk, work|聞き分け（ミニマルペア）
ɑːr と ɜːr（far / fur）|far は口を大きく開けた「アー」、fur はあいまいな「アー」|far／fur、heart／hurt、card／curd|heart, hurt, far, fur|聞き分け（ミニマルペア）
oʊ と ɔː（coat / caught）|coat は「オウ」と二重母音、caught は「オー」|coat／caught、low／law、boat／bought|coat, caught, low, law|聞き分け（ミニマルペア）
短い u と長い oo（full / fool）|full は短くゆるい「ウ」、fool は唇を丸めた長い「ウー」|full／fool、pull／pool、look／Luke|full, fool, pull, pool|聞き分け（ミニマルペア）
N と NG（thin / thing）|NG は舌の奥を上あごにつけて「ン」。最後に「グ」は言わない|thin／thing、sin／sing、ban／bang|thin, thing, sin, sing|聞き分け（ミニマルペア）
M と N（some / son）|語末の M は唇を閉じる、N は舌先を歯ぐきにつける|some／son、cream／clean|some, son|聞き分け（ミニマルペア）
bl / cl / fl / gl / pl / sl|子音2つを母音なしで続ける（ブ・ル ではなく bl）|blue, clean, flower, glass, play, sleep|blue, clean, flower, play|子音の連続（ブレンド）
br / cr / dr / fr / gr / pr / tr|子音＋R を一気に発音する|bread, cry, drink, fruit, green, price, tree|bread, drink, green, tree|子音の連続（ブレンド）
st / sp / sk / sm / sn / sw|S の後に母音を入れない（ス・ト ではなく st）|stop, speak, sky, smile, snow, swim|stop, speak, smile, snow|子音の連続（ブレンド）
str / spr / scr / spl|3つの子音を一気に|street, spring, screen, splash|street, spring, screen|子音の連続（ブレンド）
語末の -nd / -nt / -st|語末の子音のあとに母音をつけない|hand, want, first（× ハンド＝handu）|hand, want, first|子音の連続（ブレンド）
語末の -ks / -ts / -ps|複数形・三単現の s は前の子音とつなげる|books, cats, stops, asks|books, cats, asks|子音の連続（ブレンド）
-s（ス／ズ／イズ）|直前の音で読み分ける|cats（ス）、dogs（ズ）、buses（イズ）― 無声音の後は「ス」、有声音の後は「ズ」、s・sh・ch の後は「イズ」|cats, dogs, buses|語尾
-ight|アイト /aɪt/|light, night, right, fight ― gh は読まない|light, night|母音の組み合わせ
-ought / -aught|オート /ɔːt/|thought, bought, caught, taught|thought, caught|要注意
ough の読み分け|同じ綴りで音が6通り|though（オウ）、through（ウー）、tough（アフ）、cough（オフ）、bough（アウ）、thought（オー）|though, through, tough, cough|要注意
ps（p を読まない）|語頭の ps は s だけ|psychology, psychiatrist ― 「プ」は言わない|psychology|黙字
gu（u を読まない）|g＋u＋母音で u を読まないことが多い|guess, guitar, guide（ガイド）|guess, guitar|黙字
w（黙字）|wr 以外にも読まない w|answer, sword, two|answer, sword|黙字
n（黙字 mn）|語末の mn の n は読まない|autumn, column, hymn|autumn, column|黙字
d（黙字）|d を読まない語|Wednesday, handsome, sandwich（ゆっくり言うときは読むことも）|Wednesday|黙字
アクセント：名詞の前|2音節の名詞は前にアクセントが多い|TAble, PENcil, WINdow, CAMera|camera, window|アクセントと弱い音
アクセント：-tion / -sion の直前|-tion の直前の音節にアクセント|inforMAtion, eduCAtion, deCIsion|information, decision|アクセントと弱い音
アクセント：-ic / -ity の直前|-ic・-ity の直前にアクセント|ecoNOMic, elecTRICity, uniVERsity|economic, university|アクセントと弱い音
アクセント：-ee / -eer は語尾|語尾そのものにアクセント|emploYEE, engiNEER, voluntEER|employee, engineer|アクセントと弱い音
複合名詞のアクセント|前の語を強く読む|BLACKboard（黒板）／ black BOARD（黒い板）、GREENhouse／green HOUSE|blackboard, greenhouse|アクセントと弱い音
カタカナ語：energy|エナジー /ˈenərdʒi/|「エネルギー」ではない。アクセントは最初|energy|カタカナ語に注意
カタカナ語：allergy|アラジー /ˈælərdʒi/|「アレルギー」ではない|allergy|カタカナ語に注意
カタカナ語：label|レイブル /ˈleɪbəl/|「ラベル」ではない|label|カタカナ語に注意
カタカナ語：theme|スィーム /θiːm/|「テーマ」ではない（ドイツ語由来）|theme|カタカナ語に注意
カタカナ語：virus|ヴァイラス /ˈvaɪrəs/|「ウイルス」ではない|virus|カタカナ語に注意
カタカナ語：vitamin|ヴァイタミン /ˈvaɪtəmɪn/（米）|「ビタミン」ではない|vitamin|カタカナ語に注意
カタカナ語：chaos|ケイオス /ˈkeɪɑːs/|「カオス」ではない|chaos|カタカナ語に注意
カタカナ語：image|イミッジ /ˈɪmɪdʒ/|「イメージ」ではない。アクセントは最初|image|カタカナ語に注意
カタカナ語：model|マドゥル /ˈmɑːdəl/|「モデル」ではない|model|カタカナ語に注意
カタカナ語：studio|ストゥーディオウ /ˈstuːdioʊ/|「スタジオ」ではない|studio|カタカナ語に注意
カタカナ語：radio|レイディオウ /ˈreɪdioʊ/|「ラジオ」ではない|radio|カタカナ語に注意
カタカナ語：Christmas|クリスマス（t を読まない）|t は黙字|Christmas|カタカナ語に注意
カタカナ語：event|イヴェント /ɪˈvent/|アクセントは後ろ（ve）|event|カタカナ語に注意
カタカナ語：percent|パーセント /pərˈsent/|アクセントは後ろ|percent|カタカナ語に注意
カタカナ語：hotel|ホウテル /hoʊˈtel/|アクセントは後ろ|hotel|カタカナ語に注意
カタカナ語：career|カリア /kəˈrɪr/|「キャリア」ではない。carrier（運ぶもの）と区別|career|カタカナ語に注意
カタカナ語：coffee|カーフィー /ˈkɔːfi/|「コーヒー」ではない|coffee|カタカナ語に注意
カタカナ語：McDonald's|マクダーナルズ|「マクドナルド」ではない。アクセントは Do|McDonald's|カタカナ語に注意
フラップ T（water）|母音にはさまれた t は「ラ行」に近くなる（米）|water（ワーラー）、better、city、get up（ゲラップ）|water, better, get up|音の変化
t の脱落（twenty）|nt の t が消えることがある（米）|twenty（トゥウェニー）、internet、winter|twenty, internet|音の変化
語末の t・d・p・k|語末の破裂音は飲みこむように軽く|hot dog、good bye、stop、book|hot dog, good bye|音の変化
同化（did you / would you）|d＋y が「ジュ」、t＋y が「チュ」になる|did you（ディジュ）、would you（ウッジュ）、meet you（ミーチュ）|did you, meet you|音の変化
脱落（next time）|同じ・似た子音が続くと前を落とす|next time（ネクスタイム）、good day、big game|next time, good day|音の変化
want to / going to / got to|会話で wanna / gonna / gotta になる|I want to go → I wanna go、I'm going to → I'm gonna|wanna, gonna|音の変化
文の強勢（内容語を強く）|名詞・動詞・形容詞を強く、機能語は弱く|I WANT to GO to the PARK.|I want to go to the park.|リズムとイントネーション
疑問文の上昇調|Yes/No 疑問文は文末を上げる|Are you ready?（↗）|Are you ready?|リズムとイントネーション
疑問詞疑問文の下降調|What / Where などで始まる疑問文は文末を下げる|Where do you live?（↘）|Where do you live?|リズムとイントネーション
選択疑問文|A は上げて、B は下げる|Coffee（↗） or tea（↘）?|Coffee or tea?|リズムとイントネーション`;
T.split('\n').filter(Boolean).forEach(l=>{const [w,m,ex,say,cat]=l.split('|');if(hv.has(w))return;hv.add(w);ph.items.push({k:'ph4:'+w,w,pos:'フォニックス',m,ex,say,cat})});
const ORD=['短母音','マジックe','母音の組み合わせ','r の付いた母音','子音の組み合わせ','子音の連続（ブレンド）','c と g の読み分け','子音の読み分け','黙字','語尾','要注意','聞き分け（ミニマルペア）','カタカナ語に注意','アクセントと弱い音','音の変化','リズムとイントネーション'];
const r=c=>{const i=ORD.indexOf(c);return i<0?99:i};
ph.items=ph.items.map((x,i)=>[x,i]).sort((a,b)=>r(a[0].cat)-r(b[0].cat)||a[1]-b[1]).map(a=>a[0]);
ph.sub='綴りと音の規則・聞き分け・カタカナ語・音の変化';
})();
