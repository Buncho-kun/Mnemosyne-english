// 英文解釈（構文）§29〜§35 比較・関係詞・名詞節 ― 例文・解説・例題はすべてこのアプリ用に作成
(function(){
const D=window.EIGO_DATA,deck=D.decks.find(d=>d.id==='kaishaku');if(!deck)return;
const L=deck.items;
const ej=(k,en,ja,point,hint,long)=>({k,kind:'ej',en,models:Array.isArray(ja)?ja:[ja],point,hint:hint||'',long:!!long});

/* ================= §29 比較(1) ================= */
L.push({k:'ks29',no:'§29',title:'比較(1)　原級・比較級・最上級の基本',sub:'何と何を比べているかを確定させる',
body:`
# 29-1 比較の3つの形
[比較の基本形]
| 原級 | A is as 〜 as B（AはBと同じくらい〜）
| 比較級 | A is 〜er [more 〜] than B（AはBより〜）
| 最上級 | A is the 〜est [most 〜] of [in] …（Aは…の中で最も〜）
= 29-1-1|This bridge is {as old as} the castle.|この橋は城**と同じくらい古い**。
- 29-1-2|She runs {faster than} anyone else in her class.|彼女はクラスの誰**よりも速く**走る。
- 29-1-3|This is {the most important} decision of my life.|これは私の人生で**最も重要な**決断だ。

# 29-2 比較の対象をそろえる
: 読解では、than / as の後ろに**省略されたもの**を補って、何と何を比べているかを確定させる。
= 29-2-1|I love you more {than he} (loves you).|**彼が**あなたを愛している以上に、私はあなたを愛している。
= 29-2-2|I love you more {than him}.|私は**彼より**あなたを愛している（彼を愛する以上に）。
: than の後ろが主格か目的格かで意味が変わる。
- 29-2-3|The climate of Japan is milder than {that of} Canada.|日本の気候はカナダ**の気候**より穏やかだ。
- 29-2-4|He is more interested in politics {than} he used to be.|彼は以前**より**政治に興味がある。
: than の後に節が来ることもある。比べているのは「今の彼」と「以前の彼」。

# 29-3 比較級・最上級の強調と修飾
[強調の語]
| 比較級の強調 | much / far / even / still / a lot（ずっと、さらに）
| 最上級の強調 | by far / much / the very（断然、まさに）
| 差を表す | 数詞＋比較級：three years older（3歳年上）／by＋差
- 29-3-1|This method is {far} more effective.|この方法は**はるかに**効果的だ。
x This method is very more effective.
- 29-3-2|She is {by far} the best player on the team.|彼女はチームで**断然**一番の選手だ。
- 29-3-3|My brother is {two years} older than I am.|兄は私より**2歳**年上だ。

# 29-4 最上級を使わない最上級表現
[最上級の意味になる原級・比較級]
| No (other) 〜 is as … as A | Aほど…な〜はない
| No (other) 〜 is 比較級 than A | Aより…な〜はない
| A is 比較級 than any other 単数名詞 | Aはほかのどの〜より…だ
| Nothing is as … as A | Aほど…なものはない
= 29-4-1|{No other} mountain in Japan {is as high as} Mt. Fuji.|日本で富士山**ほど高い**山は**ない**。
- 29-4-2|Time is {more precious than anything else}.|時間は**何よりも**貴重だ。
`,
drills:[
ej('ks29d1','The population of this city is {twice as large as} that of my hometown.','この都市の人口は私の故郷の人口の**2倍だ**。','倍数＋as 〜 as。that of で比較対象をそろえている。'),
ej('ks29d2','The movie was {much better than} I had expected.','その映画は思っていた**よりずっとよかった**。','much は比較級の強調。期待したのは見る前なので過去完了。'),
ej('ks29d3','{Nothing is more important than} health.','健康**ほど大切なものはない**。','Nothing is 比較級 than A は最上級の意味。'),
ej('ks29d4','Tokyo is larger {than any other} city in Japan.','東京は日本の**ほかのどの**都市**よりも**大きい。','比較級 than any other＋単数名詞。'),
ej('ks29d5','She cares about her students more {than} she does about her own career.','彼女は自分のキャリア**よりも**生徒のことを気にかけている。','does は cares の代わり（代動詞）。比べているのは「生徒への関心」と「キャリアへの関心」。'),
ej('ks29d6','Some people think that cities today are more dangerous than they were in the past. {In fact, however, crime rates in many large cities are far lower now than they were thirty years ago.}','今日の都市は昔より危険だと考える人もいる。**しかし実際には、多くの大都市の犯罪率は、30年前よりも現在の方がはるかに低い**。','【構造】crime rates が S、are が V、far lower が C。than they were thirty years ago で「30年前の犯罪率」と「現在の犯罪率」を比べている。\n【ポイント】far は比較級の強調。they は crime rates を指す。','何と何の比較か',true)
]});

/* ================= §30 比較(2) ================= */
L.push({k:'ks30',no:'§30',title:'比較(2)　比較の重要構文',sub:'the 比較級・倍数表現・not so much A as B',
body:`
# 30-1 the 比較級 〜, the 比較級 …
: 「〜すればするほど、ますます…」。**前半が条件、後半が結果**。語順が倒置されたり、be 動詞が省略されたりするので、元の文に戻して読む。
= 30-1-1|{The more} you practice, {the better} you will play.|練習**すればするほど**、上手に弾けるようになる。
: 元は You practice much → You will play well。比較級になる語が前に出ている。
- 30-1-2|{The higher} we climbed, {the colder} it became.|高く登れば登る**ほど**寒くなった。
- 30-1-3|{The sooner}, {the better}.|早ければ早い**ほどよい**。
: 主語と動詞が省略された形。

# 30-2 比較級 and 比較級 ／ all the 比較級
= 30-2-1|The world is becoming {more and more} connected.|世界は**ますます**つながりを強めている。
= 30-2-2|I like him {all the better for} his honesty.|正直な**ので**、**なおさら**彼が好きだ。
: all the 比較級 for 〜 / because 〜「〜なのでそれだけいっそう…」。
- 30-2-3|She is {none the happier for} her wealth.|彼女は金持ちだ**からといって少しも**幸せ**ではない**。
: none the 比較級 for 〜「〜だからといって少しも…ない」。

# 30-3 not so much A as B など
[頻出の比較構文]
| not so much A as B | AというよりむしろB
| not so much as do | 〜さえしない
| more A than B | BというよりむしろA（同一人物・物の2つの性質）
| as many as / as much as | 〜も（数・量の多さを強調）
| as good as | 〜も同然
| would sooner A than B | BするよりむしろAしたい
= 30-3-1|He is {not so much} a teacher {as} a friend to his students.|彼は生徒にとって先生**というよりむしろ**友人だ。
- 30-3-2|She did {not so much as} say goodbye.|彼女はさようなら**さえ言わなかった**。
- 30-3-3|He was {more} sad {than} angry.|彼は怒っている**というより**悲しんでいた。
: 同一人物の2つの性質を比べるときは、1音節の形容詞でも more を使う（× sadder than angry）。
- 30-3-4|{As many as} 10,000 people attended the concert.|1万人**も**の人がコンサートに来た。
- 30-3-5|The work is {as good as} finished.|仕事は終わった**も同然だ**。
`,
drills:[
ej('ks30d1','{The more} I learn about the universe, {the more} I realize how little we know.','宇宙について学べば学ぶ**ほど**、私たちがどれほど知らないかに気づく。','the 比較級 〜, the 比較級 …。how little we know は「どれほど少ししか知らないか」。'),
ej('ks30d2','Success depends {not so much} on talent {as} on hard work.','成功は才能**というよりむしろ**努力にかかっている。','not so much A as B。A と B に前置詞句が入っている。'),
ej('ks30d3','I respect her {all the more} because she never complains.','彼女は決して不平を言わない**ので、なおさら**尊敬している。','all the 比較級 because 〜。'),
ej('ks30d4','He left the room without {so much as} looking at me.','彼は私を見**さえ**せずに部屋を出て行った。','without so much as doing「〜さえしないで」。'),
ej('ks30d5','{As many as} half of the students were absent because of the flu.','インフルエンザのため、生徒の半数**も**が欠席した。','as many as は数の多さを強調する。'),
ej('ks30d6','Many people believe that intelligence is something we are born with. {But recent research suggests that the more we challenge our brains with new tasks, the more capable they become, regardless of age.}','多くの人は、知能は生まれつき備わっているものだと信じている。**しかし最近の研究によれば、年齢に関係なく、新しい課題で脳に負荷をかければかけるほど、脳の能力は高まるという**。','【構造】suggests の目的語が that 節。that 節の中が the 比較級 〜, the 比較級 … の構文。they は our brains。\n【ポイント】challenge A with B「AにBで挑ませる」。regardless of 〜「〜に関係なく」。research suggests を「研究によれば〜」と無生物主語で訳す。','that 節の中の構文',true)
]});

/* ================= §31 比較(3) ================= */
L.push({k:'ks31',no:'§31',title:'比較(3)　no more than ／ no 比較級 than',sub:'no は「差がゼロ」、not は「単なる否定」',
body:`
# 31-1 no ＋比較級の考え方
: no は**差がゼロ**であることを表し、**話し手の評価（多い・少ない）**を含む。not は単なる否定で評価を含まない。
> 比較級の直前は「どれだけ差があるか」を置く位置（**差分スロット**）。普通は much / 5 cm などの**正の差**が入るが、**no** が入ると「差がゼロ」になる（英作文 第41課）。
[数量の表現]
| no more than 〜 | たった〜（＝only）※少ないという評価
| no less than 〜 | 〜も（＝as much [many] as）※多いという評価
| not more than 〜 | せいぜい〜、多くても〜（＝at most）
| not less than 〜 | 少なくとも〜（＝at least）
= 31-1-1|I have {no more than} 1,000 yen.|私は**たった**1000円しか持っていない。
- 31-1-2|He paid {no less than} 50,000 yen for the ticket.|彼はチケットに5万円**も**払った。
- 31-1-3|The repair will cost {not more than} 10,000 yen.|修理代は**多くても**1万円だろう。

# 31-2 クジラの構文
: **A is no more B than C is D**「AがBでないのはCがDでないのと同じだ」。than 以下は**明らかに誤っている例**を持ち出して、前半を強く否定する。
= 31-2-1|A whale is {no more} a fish {than} a horse is.|クジラが魚で**ないのは**、馬が魚で**ないのと同じだ**。
: 「馬が魚だ」は明らかに誤り。それと同じくらい「クジラは魚だ」も誤り、という論理。
- 31-2-2|I am {no more} able to sing {than} a fish can fly.|私が歌えないのは、魚が空を飛べないのと同じだ。
[no＋比較級 than の型]
| A is no more B than C (is D) | AがBでないのはCがDでないのと同じ
| A is no less B than C (is D) | AがBなのはCがDなのと同じだ
| no better than 〜 | 〜も同然（悪い評価）
| no longer 〜 | もはや〜ない
- 31-2-3|She is {no less} beautiful {than} her sister.|彼女は姉**に劣らず**美しい。
- 31-2-4|He is {no better than} a thief.|彼は泥棒**も同然だ**。

# 31-3 know better than to do など
[比較を含む慣用]
| know better than to do | 〜するほど愚かではない
| more often than not | たいてい
| no sooner A than B | AするとすぐにB（→§19）
| none other than 〜 | ほかならぬ〜
| still [much] less | （否定文の後で）まして〜ない
- 31-3-1|You should {know better than to} believe such a rumor.|そんなうわさを信じる**ほど愚かであってはいけない**。
- 31-3-2|{More often than not}, he is late.|**たいてい**、彼は遅刻する。
- 31-3-3|I can't speak English, {still less} French.|英語も話せない。**まして**フランス語は話せない。
`,
drills:[
ej('ks31d1','The village has {no more than} fifty residents.','その村には**たった**50人しか住民がいない。','no more than＝only。少ないという評価。'),
ej('ks31d2','{No less than} 3,000 people took part in the marathon.','3000人**もの**人がマラソンに参加した。','no less than＝as many as。多いという評価。'),
ej('ks31d3','A book without readers is {no more} alive {than} a seed that is never planted.','読者のいない本が生きていない**のは**、一度も植えられない種が生きていない**のと同じだ**。','クジラの構文。than 以下が明らかな例。'),
ej('ks31d4','He {knew better than to} argue with his boss in front of customers.','彼は客の前で上司と言い争う**ほど愚かではなかった**。','know better than to do。'),
ej('ks31d5','Learning a language is {no less} a matter of culture {than} of grammar.','言語を学ぶことは、文法の問題である**のと同様に**文化の問題**でもある**。','no less A than B「Bと同様にAだ」。'),
ej('ks31d6','Some critics dismiss video games as a waste of time. {Yet a game is no more harmful in itself than a novel is; what matters is how much time we spend on it and what we gain from it.}','テレビゲームを時間の無駄だと切り捨てる批評家もいる。**しかし、ゲームそれ自体が有害でないのは、小説がそれ自体有害でないのと同じだ。重要なのは、それにどれだけ時間を使い、そこから何を得るかである**。','【構造】a game is no more harmful in itself than a novel is (harmful) のクジラの構文。セミコロン以下は what matters が S、is が V、how much 〜 and what 〜 が C。\n【ポイント】「小説が有害だ」とは誰も思わない＝それと同じくらいゲームも有害ではない、という論理。in itself「それ自体」。','no more … than の論理',true)
]});

/* ================= §32 関係詞(1) ================= */
L.push({k:'ks32',no:'§32',title:'関係詞(1)　関係代名詞の基本と省略',sub:'どこからどこまでが関係詞節かを確定させる',
body:`
# 32-1 関係代名詞の働き
: 関係代名詞は**直前の名詞（先行詞）を説明する節**をつくる。関係詞節の中では、関係代名詞が**主語・目的語などの役割**をもち、その位置が**空所**になっている。
[関係代名詞の種類]
| 先行詞が人 | who（主格）／whom（目的格）／whose（所有格）
| 先行詞が物 | which（主格・目的格）／whose（所有格）
| 人・物両方 | that（主格・目的格）
= 32-1-1|The woman {who lives next door} is a pianist.|**隣に住んでいる**女性はピアニストだ。
: who が lives の主語。関係詞節は who 〜 door まで、述語動詞は is。
- 32-1-2|The book {(which) I borrowed from the library} was very interesting.|**私が図書館から借りた**本はとてもおもしろかった。
: which は borrowed の目的語。目的格は省略できる。
- 32-1-3|I have a friend {whose father is a pilot}.|**父親がパイロットである**友人がいる。

# 32-2 関係代名詞の省略
: 目的格の関係代名詞は**よく省略される**。**名詞＋名詞＋動詞**（the book I bought）と並んでいたら、間に関係代名詞が省略されていると考える。
= 32-2-1|The man {I met yesterday} turned out to be her uncle.|**昨日会った**男性は彼女のおじだとわかった。
: The man / I met … と名詞が2つ続いている → The man (whom) I met。
- 32-2-2|Everything {she said} was true.|彼女の**言った**ことはすべて本当だった。
- 32-2-3|This is the house {my grandfather built}.|これは祖父が**建てた**家だ。
> 長い主語の中に関係詞節が埋め込まれていると、述語動詞を見失いやすい。**動詞が2つ続いたら（met yesterday turned out）、前の動詞は関係詞節の中**と考える。

# 32-3 前置詞＋関係代名詞
= 32-3-1|This is the town {in which} I was born.|これは私が生まれた町だ。
: = the town which I was born in ＝ the town where I was born。
- 32-3-2|The person {to whom} I spoke was very kind.|私が話しかけた人はとても親切だった。
- 32-3-3|He has many books, {most of which} are about history.|彼は多くの本を持っていて、**そのほとんどは**歴史の本だ。
: 数量詞＋of which [whom] は非制限用法でよく使われる。
`,
drills:[
ej('ks32d1','The students {who} passed the exam will receive a certificate.','試験に**合格した**生徒は修了証を受け取る。','主格の関係代名詞。述語動詞は will receive。'),
ej('ks32d2','The only thing {I} remember about the trip is the food.','その旅行で**覚えている**唯一のことは食べ物だ。','The only thing (that) I remember の省略。述語動詞は is。'),
ej('ks32d3','The writer {whose} novels I love is coming to Japan.','私の大好きな小説を**書いた**作家が来日する。','whose novels I love「その小説を私が愛している」。'),
ej('ks32d4','This is the problem {about which} we talked last week.','これが先週私たちが**話し合った**問題だ。','前置詞＋関係代名詞。the problem which we talked about。'),
ej('ks32d5','She has three sons, {all of whom} became doctors.','彼女には3人の息子がいて、**その全員が**医者になった。','数量詞＋of whom の非制限用法。'),
ej('ks32d6','The scientists said that the samples they had collected from the deep sea contained bacteria that no one had ever seen before. {The bacteria they discovered were able to survive at temperatures that would kill almost any other living thing.}','科学者たちは、深海から採取したサンプルには、誰も見たことのない細菌が含まれていたと述べた。**彼らが発見した細菌は、ほかのほとんどすべての生物が死んでしまうような温度でも生き延びることができた**。','【構造】The bacteria (that) they discovered が S（目的格の省略）、were able to survive が V。that would kill … は temperatures を修飾する主格の関係代名詞節。\n【ポイント】bacteria は複数形なので were。would は「（その温度なら）〜するだろう」という仮定的な意味。','主語の切れ目はどこか',true)
]});

/* ================= §33 関係詞(2) ================= */
L.push({k:'ks33',no:'§33',title:'関係詞(2)　関係副詞・非制限用法・what',sub:'where / when / why と、コンマの有無による違い',
body:`
# 33-1 関係副詞
: 関係副詞は**場所・時・理由・方法**を表す先行詞を説明する。関係副詞の後ろは**完全な文**（名詞の欠けがない）。
[関係副詞]
| where | 場所（the place where 〜）
| when | 時（the day when 〜）
| why | 理由（the reason why 〜）
| how | 方法（the way 〜 / how 〜 ※ the way how は不可）
= 33-1-1|This is the café {where} we first met.|ここは私たちが初めて出会ったカフェだ。
- 33-1-2|I remember the day {when} I first came to Tokyo.|初めて東京に来た日のことを覚えている。
- 33-1-3|That is {why} I was late.|**そういうわけで**私は遅れたのだ。
- 33-1-4|This is {how} I learned English.|**このようにして**私は英語を身につけた。
# 33-1-A 関係代名詞と関係副詞の区別
= 33-1-5|This is the town {which} I visited last year.|これは昨年私が**訪れた**町だ。（visit の目的語が欠けている → 関係代名詞）
= 33-1-6|This is the town {where} I grew up.|これは私が**育った**町だ。（grow up は完全 → 関係副詞）
> 先行詞が場所でも which になることがある。関係詞の後ろに**名詞の欠け**があるかで判断する。

# 33-2 非制限用法
: コンマのついた関係詞は、先行詞に**補足説明**を加える。日本語では**前から訳し下す**（「〜で、それは…」）。
= 33-2-1|My sister, {who lives in Osaka}, is a nurse.|姉は大阪に住んでいて、看護師をしている。
: 姉は1人（限定の必要がない）。コンマがなければ「大阪に住んでいる方の姉」（姉が複数）の含み。
- 33-2-2|He said he was ill, {which} was a lie.|彼は病気だと言ったが、**それは**うそだった。
: which が前の文の内容全体を受ける。
- 33-2-3|We arrived in Paris in May, {when} the weather was perfect.|5月にパリに着いたが、**そのころは**天気が最高だった。

# 33-3 関係代名詞 what（→英作文第5課）
: what は先行詞を含み、「〜すること・もの」を表す名詞節をつくる。
[what の慣用表現]
| what S is | 現在のS（の姿・人格）
| what S has | Sの持っているもの（財産）
| what is called / what we call | いわゆる
| A is to B what C is to D | AとBの関係はCとDの関係と同じ
| what with A and B | AやらBやらで
= 33-3-1|Reading is to the mind {what} exercise is to the body.|読書と精神の関係は、運動と身体の関係と**同じだ**。
- 33-3-2|{What with} work {and} family, I have no time for myself.|仕事**やら**家族**やらで**、自分の時間がない。
`,
drills:[
ej('ks33d1','I still remember the hospital {where} my son was born.','息子が生まれた病院を今でも覚えている。','関係副詞 where。後ろは完全な文（受動態）。'),
ej('ks33d2','There is no reason {why} you should apologize.','あなたが謝らなければならない理由はない。','関係副詞 why。'),
ej('ks33d3','He failed the exam, {which} surprised everyone.','彼は試験に落ちたが、**そのことに**みんな驚いた。','非制限の which が前の内容全体を受ける。'),
ej('ks33d4','The museum, {which} was built in 1890, is the oldest in the city.','その博物館は1890年に建てられたもので、市内で最も古い。','非制限用法。前から訳し下す。'),
ej('ks33d5','{What} he has is less important than {what} he is.','人の**財産**は、その人の**人柄**ほど重要ではない。','what he has「彼の持っているもの（財産）」、what he is「彼の人となり」。'),
ej('ks33d6','My grandmother grew up in a small village in the mountains, where there was no electricity until the 1960s. {She often told me about the long winter evenings, when the whole family would gather around the fire and listen to her father tell old stories.}','祖母は山あいの小さな村で育ったが、その村には1960年代まで電気がなかった。**祖母はよく長い冬の夜の話をしてくれた。その頃は、家族全員が火のまわりに集まり、祖母の父親が昔話を語るのを聞いたものだという**。','【構造】told me about the long winter evenings のあと、コンマ＋when は非制限用法で「その頃は」と訳し下す。would gather と (would) listen が and で並ぶ。\n【ポイント】would は過去の習慣「〜したものだ」（§28）。listen to O 原形 は知覚動詞の構文。','コンマ＋when',true)
]});

/* ================= §34 関係詞(3) ================= */
L.push({k:'ks34',no:'§34',title:'関係詞(3)　複合関係詞・連鎖関係詞・二重限定',sub:'whatever / whoever と、I think が挟まる関係詞節',
body:`
# 34-1 複合関係詞
: 関係詞＋ever は**「〜するものは何でも（名詞節）」**と**「たとえ〜でも（譲歩の副詞節）」**の2つの働きをもつ。
[複合関係詞]
| whatever | 〜するものは何でも／たとえ何が〜でも
| whoever | 〜する人は誰でも／たとえ誰が〜でも
| whichever | 〜するどちらでも／どちらが〜でも
| whenever | 〜するときはいつでも／いつ〜しても
| wherever | 〜するところはどこでも／どこで〜しても
| however＋形容詞・副詞 | どんなに〜でも
= 34-1-1|You can eat {whatever} you like.|好きな**ものは何でも**食べていいよ。（名詞節）
- 34-1-2|{Whatever} happens, I will support you.|**たとえ何が**起こっても、あなたを支えます。（譲歩）
- 34-1-3|{Whoever} comes first will get the prize.|最初に来た**人は誰でも**賞をもらえる。
- 34-1-4|{However} hard you try, you can't please everyone.|**どんなに**努力しても、みんなを喜ばせることはできない。
: 譲歩の複合関係詞は **no matter what [who, how] 〜** で書きかえられる。

# 34-2 連鎖関係詞節
: 関係代名詞の直後に **I think / they say / I believe** などが挟まる形。挟まった部分を（ ）に入れると構造が見える。
= 34-2-1|He is the man {who (I think) is the best} for the job.|彼はその仕事に最適**だと私が思う**人だ。
: who の後に I think が挟まり、who は is の主語。「彼は、私が思うに、その仕事に最適な人だ」と訳してもよい。
- 34-2-2|Do what {(you believe) is right}.|正しい**と信じる**ことをしなさい。
x He is the man whom I think is the best.（is の主語なので who が正しい）

# 34-3 二重限定・関係代名詞 as / than / but
: 1つの先行詞に関係詞節が**2つ**かかることがある（二重限定）。また as / than / but が関係代名詞のように使われる。
= 34-3-1|Is there anything {you want} {that I can buy for you}?|欲しいもので、私が買ってあげられるものはありますか。
- 34-3-2|{As} is often the case with him, he was late.|彼に**はよくあることだが**、遅刻した。
: As is often the case with 〜「〜にはよくあることだが」。as は後ろの文全体を先行詞にとる。
- 34-3-3|He spends more money {than} is necessary.|彼は必要**以上の**お金を使う。
- 34-3-4|Choose such friends {as} will help you grow.|あなたを成長させてくれる**ような**友人を選びなさい。
- 34-3-5|There is no rule {but} has exceptions.|例外の**ない**規則はない。
: 否定語＋but（＝that … not）。古い言い方だが、ことわざで出る。
`,
drills:[
ej('ks34d1','{Whatever} you decide, I will respect your choice.','**あなたが何を**決めても、その選択を尊重します。','譲歩の whatever＝no matter what。'),
ej('ks34d2','You may invite {whoever} wants to come.','来たい**人は誰でも**招待していいよ。','名詞節の whoever。whoever が wants の主語。'),
ej('ks34d3','{However} busy she is, she always makes time for her children.','**どんなに**忙しくても、彼女はいつも子どものために時間を作る。','however＋形容詞＋S V。'),
ej('ks34d4','She married a man {who} her parents thought was unsuitable.','彼女は、両親が**ふさわしくないと思っていた**男性と結婚した。','連鎖関係詞節。her parents thought が挟まり、who は was の主語。'),
ej('ks34d5','{As is often the case with} young people, he spends hours on his phone.','若者**にはよくあることだが**、彼は何時間もスマホに費やす。','As is often the case with 〜。'),
ej('ks34d6','Many young people today choose careers based on salary alone. {But a job that you feel is meaningful will give you a kind of satisfaction that no amount of money can buy, however high your income may be.}','今日、多くの若者が給料だけで職業を選んでいる。**しかし、自分が有意義だと感じる仕事は、収入がどれほど高くても、どんなにお金を積んでも買えない種類の満足感を与えてくれる**。','【構造】a job that (you feel) is meaningful が S（連鎖関係詞節）、will give が V、you が O₁、a kind of satisfaction が O₂。that no amount of money can buy は satisfaction を修飾する関係詞節。however high 〜 は譲歩の副詞節。\n【ポイント】no amount of money can buy「どんな額のお金でも買えない」。may は譲歩節で使われる may。','主語の関係詞節に何が挟まっている？',true)
]});

/* ================= §35 名詞節 ================= */
L.push({k:'ks35',no:'§35',title:'名詞節　that / whether / if / 疑問詞節',sub:'節が主語・目的語・補語・同格になる形',
body:`
# 35-1 名詞節をつくる語
: 名詞節は文の中で**主語・目的語・補語・同格**になる。名詞節をつくるのは that / whether / if / 疑問詞 / 関係詞 what / 複合関係詞。
[名詞節の種類]
| that S V | 〜ということ
| whether S V (or not) | 〜かどうか（主語・補語・前置詞の後も可）
| if S V | 〜かどうか（目的語のみ）
| 疑問詞 S V | 何を／誰が／いつ〜するか（間接疑問）
= 35-1-1|{That he was innocent} became clear later.|**彼が無実であることは**、後になって明らかになった。
: 普通は It became clear later that he was innocent.（形式主語 →§4）。
- 35-1-2|The problem is {that we don't have enough money}.|問題は、**十分なお金がないことだ**。
- 35-1-3|{Whether he will come} is uncertain.|**彼が来るかどうかは**わからない。
x If he will come is uncertain.（if 節は主語にできない）
- 35-1-4|I wonder {what she is thinking}.|彼女は**何を考えているのだろう**。

# 35-2 that の省略と that 節の見分け方
: 目的語の that は**よく省略される**。動詞の直後に S V が続いていたら that の省略を疑う。
= 35-2-1|I think {(that) he is right}.|**彼は正しい**と思う。
- 35-2-2|She said {(that) she would call me}.|彼女は**電話する**と言った。
[that の種類の見分け方]
| 名詞節（〜ということ） | 後ろが完全な文、動詞の目的語・補語・主語
| 同格（〜という名詞） | 名詞の後、後ろが完全な文：the fact that 〜
| 関係代名詞 | 名詞の後、後ろが不完全な文：the book that I read
| 副詞節 | so 〜 that / such 〜 that / so that / now that
| 強調構文 | It is 〜 that（→§6）

# 35-3 if 節の区別
: if 節は**名詞節（〜かどうか）**と**副詞節（もし〜なら）**の2つ。目的語の位置にあれば名詞節。
= 35-3-1|I don't know {if} it will rain tomorrow.|明日雨が降る**かどうか**わからない。（名詞節：will も使える）
= 35-3-2|{If} it rains tomorrow, I'll stay home.|**もし**明日雨が降ったら、家にいる。（副詞節：未来でも現在形）
> 時・条件の副詞節では未来のことも現在形、名詞節では will を使う。この違いが if の種類を見分ける手がかりにもなる。
`,
drills:[
ej('ks35d1','{What surprised me most} was {that} nobody complained.','**私が最も驚いたのは**、誰も不満を言わなかった**ことだ**。','What 節が主語、that 節が補語。'),
ej('ks35d2','{Whether} we succeed or not depends on our efforts.','成功する**かどうかは**、私たちの努力次第だ。','whether 節が主語。if にはできない。'),
ej('ks35d3','Nobody knows {when} the castle was built.','その城が**いつ**建てられたのかは誰も知らない。','疑問詞節（間接疑問）が目的語。'),
ej('ks35d4','Please let me know {if} you can come to the party.','パーティーに来られる**かどうか**知らせてください。','目的語の位置の if 節は「〜かどうか」。'),
ej('ks35d5','The fact {that} she was born in Brazil explains her fluent Portuguese.','彼女がブラジル生まれ**という事実**から、彼女のポルトガル語が流暢な理由がわかる。','同格の that。無生物主語で explain を「〜から…がわかる」と訳す。'),
ej('ks35d6','For a long time, doctors could not explain why some patients recovered quickly while others did not. {What they eventually discovered was that the patients\' beliefs about whether they would get better had a surprisingly large effect on how fast they actually healed.}','長い間、医師たちは、なぜすぐに回復する患者とそうでない患者がいるのかを説明できなかった。**彼らが最終的に発見したのは、よくなるかどうかについての患者の思い込みが、実際にどれだけ早く治るかに驚くほど大きな影響を与えるということだった**。','【構造】What they eventually discovered が S、was が V、that 節が C。that 節の中は the patients\' beliefs about whether 〜 が S、had が V、a large effect が O。on how fast 〜 は effect on 〜「〜への影響」。\n【ポイント】1つの文に what 節・that 節・whether 節・how 節の4種類の名詞節が入っている。','名詞節が4つ',true)
]});
})();
