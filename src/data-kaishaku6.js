// 英文解釈（構文）§36〜§43 ― 例文・解説・例題はすべてこのアプリ用に作成
(function(){
const D=window.EIGO_DATA,deck=D.decks.find(d=>d.id==='kaishaku');if(!deck)return;
const L=deck.items;
const ej=(k,en,ja,point,hint,long)=>({k,kind:'ej',en,models:Array.isArray(ja)?ja:[ja],point,hint:hint||'',long:!!long});

/* ================= §36 相関構文 ================= */
L.push({k:'ks36',no:'§36',title:'相関構文・指示代名詞・不定代名詞(1)　相関構文',sub:'2つの語が離れて対応する形',
body:`
# 36-1 等位の相関構文
: 2つの語が**離れた位置で対応**して1つの意味をつくる。前半の語を見たら、後半の語を予測しながら読む。
[等位の相関構文]
| both A and B | AもBも両方
| either A or B | AかBのどちらか
| neither A nor B | AもBも〜ない
| not A but B | AではなくB
| not only A but (also) B | AだけでなくBも（＝B as well as A）
| whether A or B | AであろうとBであろうと
= 36-1-1|{Not only} the students {but also} the teacher was surprised.|生徒**だけでなく**先生**も**驚いた。
: 動詞は B（the teacher）に一致する。neither A nor B / either A or B も B に一致。
- 36-1-2|{Neither} my father {nor} my mother speaks English.|父**も**母**も**英語を話さ**ない**。
- 36-1-3|The value of a book lies {not} in its price {but} in its content.|本の価値は値段**ではなく**内容にある。
: A と B は**同じ形**（ここでは in＋名詞）で並ぶ。並列される要素を見極める。

# 36-2 従属の相関構文
[従属の相関構文]
| so 形容詞・副詞 that S V | とても〜なので…
| such (a) 形容詞＋名詞 that S V | とても〜な…なので
| so that S can V | Sが〜できるように（目的）
| , so that S V | その結果〜（結果）
| hardly [scarcely] … when [before] 〜 | …するとすぐに〜
| no sooner … than 〜 | …するとすぐに〜
| it is not until A that B | AしてはじめてB
| the same 〜 as … | …と同じ〜
| such A as B / A such as B | BのようなA
= 36-2-1|It was {so} cold {that} the lake froze.|**とても**寒かった**ので**、湖が凍った。
- 36-2-2|She is {such} a kind person {that} everyone likes her.|彼女は**とても**親切な人な**ので**、みんなに好かれている。
- 36-2-3|The noise was {so} loud {as to} wake the whole street.|その音は通り中の人を起こす**ほど**大きかった。
: so 〜 as to do「…するほど〜」。
> 読解では、so / such を見たら後ろの that を探す。that が遠く離れていることもある：The box was so heavy, and the stairs so narrow, that we had to give up.

# 36-3 so / such の倒置
= 36-3-1|{So} great was his anger {that} he could not speak.|彼の怒りは**あまりにも**大きかった**ので**、口がきけなかった。
: His anger was so great that 〜 の倒置。So＋形容詞が文頭に出ると、V＋S の語順になる。
`,
drills:[
ej('ks36d1','{Either} you {or} your brother has to attend the meeting.','あなた**か**お兄さん**のどちらか**が会議に出席しなければならない。','either A or B。動詞は B に一致（has）。'),
ej('ks36d2','Happiness comes {not} from what we have {but} from what we give.','幸せは、持っているもの**からではなく**、与えるもの**から**生まれる。','not A but B。A と B は from＋what 節で同じ形。'),
ej('ks36d3','The lecture was {so} difficult {that} few students could follow it.','講義が**とても**難しかった**ので**、ついていける学生はほとんどいなかった。','so 〜 that …。few は否定的に訳す。'),
ej('ks36d4','He spoke slowly {so that} the children {could} understand him.','子どもたちが**理解できるように**、彼はゆっくり話した。','so that S can「Sが〜できるように」（目的）。'),
ej('ks36d5','{Such} was the force of the storm {that} many trees were uprooted.','嵐の力は**あまりにも**強かった**ので**、多くの木が根こそぎ倒れた。','Such was S that 〜 の倒置。'),
ej('ks36d6','Good teachers do not simply give students the right answers. {They ask questions in such a way that students are encouraged not only to think for themselves but also to discover the joy of learning.}','よい教師は、生徒に正しい答えを単に与えるだけではない。**生徒が自分の頭で考えるだけでなく、学ぶ喜びを見いだすよう促されるような仕方で、問いを投げかけるのである**。','【構造】in such a way that 〜「〜するような仕方で」。that 節の中は students are encouraged to do の受動態で、not only to think 〜 but also to discover 〜 と不定詞が並ぶ。\n【ポイント】encourage O to do「Oが〜するよう促す」の受動。not only A but also B の A と B はどちらも to 不定詞。','such … that と not only … but also',true)
]});

/* ================= §37 指示代名詞 ================= */
L.push({k:'ks37',no:'§37',title:'相関構文・指示代名詞・不定代名詞(2)　指示語の指す内容',sub:'this / that / it / such が何を指すかを特定する',
body:`
# 37-1 指示語が指すもの
: 和訳問題では、**指示語が何を指すかを明らかにして訳す**ことが求められる。前の文の**どこまで**を指しているかを正確に見極める。
[指示語の働き]
| it | 前に出た特定の名詞（単数）
| this | 直前の内容・これから述べる内容（後方照応もある）
| that | 前に出た内容、または名詞の繰り返し（that of 〜）
| these / those | 複数の名詞の繰り返し（those of 〜 / those who 〜）
| such | そのような（前の内容の性質を受ける）
| so | 前の内容を受ける（I think so. / If so,）
= 37-1-1|Many young people no longer read newspapers. {This} worries publishers.|多くの若者がもはや新聞を読まない。**このことが**新聞社を不安にさせている。
: This は前の文全体の内容を指す。
- 37-1-2|{This} is what I want to say: never give up.|私が言いたいのは**このことだ**。決してあきらめるな。
: this は後ろの内容を指すこともある（コロン以下）。

# 37-2 that of / those of / those who
= 37-2-1|The climate of Tokyo is milder than {that of} Sapporo.|東京の気候は札幌**の気候**より穏やかだ。
- 37-2-2|The ears of a rabbit are longer than {those of} a cat.|ウサギの耳は猫**の耳**より長い。
- 37-2-3|Heaven helps {those who} help themselves.|天は自ら助くる**者**を助く。
: those who 〜「〜する人々」。

# 37-3 the former / the latter・one / the other
[前の2つを受ける表現]
| the former / the latter | 前者／後者
| one … the other ～ | （2つのうち）一方は…、もう一方は〜
| some … others ～ | …なものもあれば、〜なものもある
| this … that ～ | 後者…前者〜（this は近い方＝後者）
- 37-3-1|I have two dogs. {One} is white, and {the other} is black.|犬を2匹飼っている。**1匹**は白で、**もう1匹**は黒だ。
- 37-3-2|Health is more important than wealth; {the latter} can be regained, but {the former} often cannot.|健康は富より大切だ。**後者（富）**は取り戻せるが、**前者（健康）**はしばしば取り戻せない。
- 37-3-3|{Some} people like coffee; {others} prefer tea.|コーヒーが好きな人**もいれば**、紅茶を好む人**もいる**。
> 訳例に指示語を残すときは、「これ」「それ」と訳すだけでなく、必要に応じて**（＝〜）**と内容を補う。
`,
drills:[
ej('ks37d1','The population of India is larger than {that} of any other country.','インドの人口はほかのどの国**の人口**よりも多い。','that of＝the population of。'),
ej('ks37d2','Some students study best in the morning, while {others} prefer to work at night.','朝に最もよく勉強できる生徒**もいれば**、夜に勉強するほうを好む生徒**もいる**。','some … others〜。'),
ej('ks37d3','Cats and dogs both make good pets, but {the former} are more independent than {the latter}.','猫も犬もよいペットになるが、**前者（猫）**の方が**後者（犬）**より自立している。','the former / the latter。'),
ej('ks37d4','{Those who} do not learn from history are doomed to repeat it.','歴史から学ばない**者**は、それを繰り返す運命にある。','those who〜「〜する人々」。it は history。'),
ej('ks37d5','He promised to help us, but {such} promises are easily forgotten.','彼は私たちを手伝うと約束したが、**そんな**約束はすぐに忘れられてしまう。','such が前の「手伝うという約束」の性質を受ける。'),
ej('ks37d6','In the past, people had to wait weeks for letters from abroad. Today, messages travel around the world in seconds. {This has changed not only the speed of communication but also its nature: we now expect immediate replies, and silence is often taken as a sign of anger.}','昔は、外国からの手紙を何週間も待たなければならなかった。今日では、メッセージは数秒で世界中を駆けめぐる。**このこと（＝通信が瞬時になったこと）は、コミュニケーションの速さだけでなく、その性質も変えた。私たちは今やすぐに返事が来ることを期待し、返事がないとしばしば怒っているしるしだと受け取られる**。','【構造】This が S、has changed が V、not only A but also B が O。its は communication\'s。コロン以下は「性質の変化」の具体的な説明。\n【ポイント】This は直前の文の内容（メッセージが数秒で届くこと）を指す。take A as B「AをBと受け取る」の受動態。silence は「沈黙」→「返事がないこと」と意訳する。','This が指す内容',true)
]});

/* ================= §38 不定代名詞 ================= */
L.push({k:'ks38',no:'§38',title:'相関構文・指示代名詞・不定代名詞(3)　不定代名詞',sub:'one / another / other / each / any の使い分け',
body:`
# 38-1 one と it
: **it は前に出た特定のもの**そのもの、**one は同じ種類の不特定のもの**を指す。
= 38-1-1|I lost my umbrella, so I bought a new {one}.|傘をなくしたので、新しい**の**を買った。（one＝an umbrella）
= 38-1-2|I lost my umbrella, but I found {it} later.|傘をなくしたが、後で**それ**を見つけた。（it＝my umbrella）

# 38-2 another / the other / others
[other の使い分け]
| another | （不特定の）もう1つ、別のもの
| the other | （2つのうち）残りの1つ
| others | （不特定の）ほかのもの・人々
| the others | 残り全部
| each other / one another | お互い
- 38-2-1|This cup is dirty. Can I have {another}?|このカップは汚れている。**別のを**もらえますか。
- 38-2-2|To know is one thing, and to teach is {another}.|知っていることと教えることは**別のことだ**。
: A is one thing, B is another「AとBは別物だ」。
- 38-2-3|Five students passed; {the others} failed.|5人の生徒が合格し、**残りは全員**不合格だった。

# 38-3 each / every / any / all / none
[数・範囲を表す代名詞・形容詞]
| each | それぞれ（単数扱い、個別に注目）
| every＋単数名詞 | どの〜も（全体を1つずつ）
| all | すべて（複数・不可算）
| any | （肯定文）どんな〜でも／（否定・疑問）少しも、何か
| none | 誰も［何も］〜ない
| either / neither | （2つのうち）どちらか／どちらも〜ない
- 38-3-1|{Each} of the students has a computer.|生徒は**それぞれ**コンピューターを持っている。
x Each of the students have a computer.
- 38-3-2|{Any} child can solve this problem.|**どんな**子どもでもこの問題は解ける。
: 肯定文の any は「どんな〜でも」。「いくつかの」ではない。
- 38-3-3|You can come {any} day except Sunday.|日曜日以外なら**いつでも**来ていいよ。
- 38-3-4|{None} of my friends knew the answer.|友だちは**誰も**答えを知らなかった。

# 38-4 something / nothing を含む慣用
[慣用表現]
| have something to do with 〜 | 〜と関係がある
| have nothing to do with 〜 | 〜と関係がない
| something of a 〜 | ちょっとした〜
| nothing but 〜 | 〜だけ、〜にすぎない
| anything but 〜 | 決して〜ではない（→§19）
| for nothing | ただで／むだに
- 38-4-1|His illness may {have something to do with} stress.|彼の病気はストレス**と関係がある**かもしれない。
- 38-4-2|He is {something of} a poet.|彼は**ちょっとした**詩人だ。
`,
drills:[
ej('ks38d1','I don\'t like this shirt. Could you show me {another}?','このシャツは気に入らない。**別のもの**を見せてもらえますか。','another「不特定の別の1つ」。'),
ej('ks38d2','Saying is {one thing} and doing is {another}.','言うことと行うことは**別のことだ**。','A is one thing, B is another。'),
ej('ks38d3','{Each} country has its own customs.','**それぞれの**国に独自の習慣がある。','each は単数扱い（has / its）。'),
ej('ks38d4','I had {nothing to do with} the decision.','私はその決定**とは何の関係もない**。','have nothing to do with 〜。'),
ej('ks38d5','{Any} student who wants to join the club is welcome.','クラブに入りたい生徒は**誰でも**歓迎だ。','肯定文の any「どんな〜でも」。'),
ej('ks38d6','Every language has words that cannot be translated easily into another. {Some of these words describe feelings that people in other cultures also have but have never named; others refer to customs that exist nowhere else.}','どの言語にも、別の言語に簡単には訳せない言葉がある。**そうした言葉の中には、ほかの文化の人々も抱いてはいるが名前をつけたことのない感情を表すものもあれば、ほかのどこにも存在しない習慣を指すものもある**。','【構造】Some of these words 〜; others 〜 で「〜するものもあれば…するものもある」。feelings that people … also have but have never named は関係詞節で、have と have never named が but で並び、どちらも feelings を目的語にとる。\n【ポイント】another＝another language。nowhere else「ほかのどこにも〜ない」。','some … others',true)
]});

/* ================= §39 語順・強調 ================= */
L.push({k:'ks39',no:'§39',title:'さまざまな語順・強調',sub:'倒置・前置・強調の do を見抜く',
body:`
# 39-1 倒置の種類
: 英語の基本語順（S V）が崩れたら、**何が前に出たのか**を考えて元の語順に戻す。
[倒置のパターン]
| 否定語の前置 | Never have I seen 〜（→§19）
| only＋副詞句の前置 | Only then did I realize 〜
| 場所・方向の副詞句の前置 | On the hill stands an old church.
| 補語の前置 | Happy are those who 〜
| so / neither / nor | So do I. / Neither did she.
| 仮定法の if 省略 | Had I known 〜（→§24）
| as / than の後 | as do most people
= 39-1-1|{On the top of the hill} {stood} an old castle.|丘の頂上には古い城が**建っていた**。
: An old castle stood on the top of the hill. の場所の副詞句が前に出て、V＋S の語順。
- 39-1-2|{Among the guests was} a famous actor.|招待客の中には有名な俳優**がいた**。
- 39-1-3|{Gone are} the days when we could swim in this river.|この川で泳げた日々は**過ぎ去った**。
: 補語 Gone が前に出た倒置。
- 39-1-4|She likes jazz, and {so do I}.|彼女はジャズが好きで、**私もそうだ**。
- 39-1-5|City people tend to walk fast, {as do} most commuters.|都会の人は速く歩く傾向がある。**通勤者の大半もそうだ**。

# 39-2 目的語の前置
: 目的語や補語が強調のために文頭に出ることがある。**文頭の名詞の後に S V が続き、動詞の目的語が欠けている**ことで気づく。
= 39-2-1|{This book} I have read three times.|**この本は**3回読んだ。
- 39-2-2|{What he said} I can't remember.|**彼が何を言ったかは**思い出せない。

# 39-3 強調の表現
[強調の方法]
| 強調構文 | It is 〜 that …（→§6）
| 強調の do | I do believe you.（本当に信じている）
| 再帰代名詞 | I myself saw it.（私自身が見た）
| the very＋名詞 | the very book I wanted（まさに欲しかった本）
| 否定の強調 | not … at all / not in the least
| 疑問詞の強調 | What on earth 〜? / Why in the world 〜?
- 39-3-1|I {did} lock the door. I'm sure of it.|**確かに**ドアに鍵をかけた。間違いない。
- 39-3-2|{What on earth} are you doing?|**いったい**何をしているの？
- 39-3-3|This is {the very} place where the accident happened.|ここが**まさに**事故が起きた場所だ。
`,
drills:[
ej('ks39d1','{In the middle of the room stood} a large wooden table.','部屋の真ん中には大きな木のテーブル**が置かれていた**。','場所の副詞句の前置による倒置。S は a large wooden table。'),
ej('ks39d2','He didn\'t go to the party, and {neither did} I.','彼はパーティーに行かなかったし、**私も行かなかった**。','neither＋V＋S「〜もまた…ない」。'),
ej('ks39d3','{Only} after the war {did} people learn the truth.','戦争が終わって**初めて**、人々は真実を知った。','Only＋副詞句の前置による倒置。'),
ej('ks39d4','She {does} speak French, but she rarely uses it.','彼女は**確かに**フランス語を話すが、めったに使わない。','強調の do。'),
ej('ks39d5','{Such a beautiful sunset} I had never seen before.','**これほど美しい夕日は**それまで見たことがなかった。','目的語の前置。I had never seen such a beautiful sunset。'),
ej('ks39d6','For centuries the forest had been home to hundreds of species of birds. {Now, however, gone are most of the trees, and with them have disappeared the birds that once filled the air with their songs.}','何世紀もの間、その森は何百種もの鳥のすみかだった。**しかし今では、木のほとんどがなくなり、それとともに、かつて空をさえずりで満たしていた鳥たちも姿を消してしまった**。','【構造】gone are most of the trees は補語の前置による倒置（Most of the trees are gone）。with them have disappeared the birds … は副詞句の前置による倒置（The birds … have disappeared with them）。\n【ポイント】them は the trees。2つの倒置が and で並んでいる。fill A with B「AをBで満たす」。','2つの倒置',true)
]});

/* ================= §40 省略・共通 ================= */
L.push({k:'ks40',no:'§40',title:'省略・共通',sub:'省略されたものを補い、共通要素をくくる',
body:`
# 40-1 省略
: 英語は**繰り返しを嫌う**ので、前に出た語句を省略することが多い。訳すときは省略されたものを**補って**考える。
[省略のパターン]
| 繰り返しの省略 | Some like tea, and others (like) coffee.
| 副詞節中の S＋be | When (he was) young, he lived in Paris.
| 代不定詞 | I'd like to (go), but I can't.（→§11）
| 比較の than / as の後 | He is taller than I (am tall).
| 慣用的省略 | If necessary（必要なら）、If possible（できれば）、if any（もしあれば）
= 40-1-1|Some students went by bus, and others {(went)} by train.|バスで行った学生もいれば、電車で**行った**学生もいた。
- 40-1-2|{When (I was)} a child, I was afraid of dogs.|子ども**のころ**、私は犬がこわかった。
- 40-1-3|{Though (he was)} tired, he kept working.|疲れて**いたが**、彼は働き続けた。
- 40-1-4|Correct the errors, {if any}.|誤りが**あれば**直しなさい。
- 40-1-5|There are few, {if any}, mistakes in this report.|この報告書には、誤りは**あったとしても**ほとんどない。
: few, if any「たとえあるとしてもほとんどない」、seldom, if ever「たとえあるとしてもめったにない」。

# 40-2 共通構文
: **A and [or, but] B** の前後で、1つの語句が A と B の両方にかかる形。何と何が並んでいて、何が共通しているかを見極める。
= 40-2-1|He {loves and respects} his parents.|彼は両親を**愛し、尊敬している**。
: loves と respects が his parents を共通の目的語にしている。
= 40-2-2|She was born {in} and grew up {in} Kyoto.|彼女は京都で生まれ、京都で育った。
: in が2つあり、Kyoto が両方の前置詞の目的語。
- 40-2-3|The rise {and} fall {of} the Roman Empire|ローマ帝国の**興亡**
: rise と fall の両方に of the Roman Empire がかかる。
- 40-2-4|He was {interested in}, but not good at, mathematics.|彼は数学に興味はあったが、得意ではなかった。
> 共通関係の読み方：and / or / but の**直後の語の品詞・形**を確認し、前方で同じ形のものを探す（A and B は同じ形）。
`,
drills:[
ej('ks40d1','{While in London}, she visited many museums.','ロンドンに**いる間**、彼女は多くの美術館を訪れた。','while の後の S＋be の省略。'),
ej('ks40d2','My brother likes soccer, and my sister, {tennis}.','兄はサッカーが好きで、姉は**テニスが好きだ**。','繰り返しの likes の省略（コンマで示す）。'),
ej('ks40d3','He {seldom, if ever,} goes to the movies.','彼は**まず**映画に行く**ことはない**。','seldom, if ever「たとえあるとしてもめったにない」。'),
ej('ks40d4','The book {describes and explains} the causes of the war.','その本は戦争の原因を**記述し、説明している**。','2つの動詞が共通の目的語をとる。'),
ej('ks40d5','Please contact me {if necessary}.','**必要なら**連絡してください。','if (it is) necessary の慣用的省略。'),
ej('ks40d6','Children learn their first language not by studying rules but by listening to and imitating the people around them. {Adults, by contrast, usually depend on, and often feel more comfortable with, explicit explanations of grammar.}','子どもは最初の言語を、規則を学ぶことによってではなく、周りの人々の話を聞いてまねることによって身につける。**それに対して大人は、たいてい文法の明示的な説明に頼っており、またそのほうが安心できることが多い**。','【構造】depend on と feel more comfortable with が and で並び、どちらも explicit explanations of grammar を共通の目的語にしている。by contrast と often は挿入。\n【ポイント】1文目の listening to and imitating the people も共通構文（to と imitating が the people を共有）。','共通の目的語はどれか',true)
]});

/* ================= §41 挿入・同格 ================= */
L.push({k:'ks41',no:'§41',title:'挿入・同格',sub:'挿入をかっこでくくり、文の骨組みを見抜く',
body:`
# 41-1 挿入
: コンマやダッシュではさまれた語句は**挿入**で、文の骨組みには入らない。いったん（ ）でくくって、残りで S V を確認する。
[よく挿入される語句]
| I think / I believe / it seems | 思うに／〜ようだ
| however / therefore / of course | しかし／したがって／もちろん
| in fact / for example / after all | 実際／例えば／結局
| if any / if ever | （→§40）
| 関係詞節・分詞句（非制限） | , who 〜, ／ , born in 〜,
= 41-1-1|The plan, {I believe}, will succeed.|その計画は、**私が思うに**、うまくいくだろう。
- 41-1-2|His idea, {however}, was rejected.|**しかし**、彼の考えは却下された。
- 41-1-3|The museum — {one of the oldest in Europe} — attracts millions of visitors.|その博物館は**（ヨーロッパ最古の1つで）**、何百万人もの観光客を集めている。
> 挿入が長いと、主語と動詞が大きく離れる。主語を見つけたら、**それに対応する動詞**をコンマの外で探す。

# 41-2 同格
: 名詞の直後に、その名詞を**言いかえ・説明する名詞（句・節）**を置く形。「AすなわちB」「BというA」と訳す。
[同格の形]
| 名詞, 名詞 | Mr. Sato, our teacher,（私たちの先生である佐藤先生）
| 名詞＋of＋名詞 | the city of Kyoto（京都という都市）
| 名詞＋that 節 | the fact that 〜（〜という事実）
| 名詞＋to do | the decision to leave（去るという決断）
| 名詞＋or＋名詞 | botany, or the study of plants（植物学、つまり植物の研究）
| 名詞：名詞（コロン） | two things: money and time
= 41-2-1|Ms. Tanaka, {the head of the project}, gave a speech.|**プロジェクトの責任者である**田中さんがスピーチをした。
- 41-2-2|There is {little hope that} he will recover.|彼が回復する**見込みはほとんどない**。
- 41-2-3|He studies {ethology, or} the science of animal behavior.|彼は動物行動学、**すなわち**動物の行動の科学を研究している。
: この or は「または」ではなく「すなわち」。前にコンマがあり、後ろが前の語の説明になっている。
- 41-2-4|Success requires two things: {patience and effort}.|成功には2つのものが必要だ。**忍耐と努力である**。
`,
drills:[
ej('ks41d1','The result, {it seems}, was not what they had expected.','結果は、**どうやら**彼らが予想していたものではなかった**ようだ**。','it seems の挿入。'),
ej('ks41d2','Dr. Lee, {a leading expert on climate}, warned of rising sea levels.','**気候の第一人者である**リー博士は、海面上昇を警告した。','名詞, 名詞 の同格。'),
ej('ks41d3','The news {that} the president had resigned shocked the nation.','大統領が辞任した**という**知らせは国民に衝撃を与えた。','同格の that 節。'),
ej('ks41d4','He studied {linguistics, or} the scientific study of language.','彼は言語学、**すなわち**言語の科学的研究を学んだ。','同格の or「すなわち」。'),
ej('ks41d5','The decision, {made after months of discussion}, was finally announced.','**何か月にもわたる議論の末に下された**その決定が、ついに発表された。','過去分詞句の挿入。'),
ej('ks41d6','The idea that animals have feelings was once rejected by many scientists. {Today, however, a growing number of researchers — including some who were once among its strongest critics — accept the view that many animals experience something like joy and fear.}','動物に感情があるという考えは、かつては多くの科学者に否定されていた。**しかし今日では、かつてその考えを最も強く批判していた人々の一部も含め、ますます多くの研究者が、多くの動物が喜びや恐れに似たものを経験しているという見方を受け入れている**。','【構造】a growing number of researchers が S、accept が V、the view が O。ダッシュではさまれた including 〜 は挿入。the view that 〜 は同格の that 節。\n【ポイント】some who were once among its strongest critics の its は the idea（動物に感情があるという考え）。a growing number of を「ますます多くの」と訳す。','ダッシュの挿入を外す',true)
]});

/* ================= §42 接続詞 ================= */
L.push({k:'ks42',no:'§42',title:'接続詞　まぎらわしい接続詞の意味',sub:'as / since / while / once などの多義を文脈で決める',
body:`
# 42-1 多義の接続詞
[複数の意味をもつ接続詞]
| as | 〜するとき／〜なので／〜するにつれて／〜のように／〜だけれども
| since | 〜以来／〜なので
| while | 〜する間に／〜する一方で／〜だけれども
| once | いったん〜すると
| if | もし〜なら／〜かどうか／たとえ〜でも
| when | 〜するとき／〜なのに（＝although）
| that | 〜ということ（名詞節）／〜なので（感情の原因）／〜するとは（判断の根拠）
= 42-1-1|{As} it was getting dark, we hurried home.|暗くなってきた**ので**、私たちは急いで帰った。（理由）
- 42-1-2|{As} we grow older, we become wiser.|年をとる**につれて**、賢くなる。（比例）
- 42-1-3|Do {as} you are told.|言われた**とおりに**しなさい。（様態）
- 42-1-4|Young {as} he is, he is very responsible.|若い**けれども**、彼はとても責任感がある。（譲歩：形容詞＋as＋S V）
- 42-1-5|{While} I agree with you, I can't support the plan.|あなたの意見に賛成**ではあるが**、計画は支持できない。（譲歩）
- 42-1-6|{Once} you start, you can't stop.|**いったん**始めたら、やめられない。
- 42-1-7|Why do you walk {when} you could take a taxi?|タクシーに乗れる**のに**、なぜ歩くの？

# 42-2 時を表す接続詞
[時の接続詞]
| by the time 〜 | 〜するまでに（は）
| every time [each time] 〜 | 〜するたびに
| the moment [the minute] 〜 | 〜するとすぐに
| now that 〜 | 今や〜なので
| until [till] 〜 | 〜するまで（ずっと）
| before 〜 | 〜する前に／〜しないうちに
- 42-2-1|{By the time} we arrived, the movie had started.|私たちが着いた**ときには**、映画は始まっていた。
- 42-2-2|{The moment} she saw me, she started crying.|彼女は私を見る**とすぐに**泣き出した。
- 42-2-3|{Now that} you are an adult, you must take responsibility.|**もう**大人な**のだから**、責任を持たなければならない。
- 42-2-4|It was not long {before} he got used to the new job.|**まもなく**彼は新しい仕事に慣れた。
: It will not be long before 〜「まもなく〜するだろう」。

# 42-3 条件・譲歩の接続詞
[条件・譲歩]
| unless 〜 | 〜しない限り
| as long as / so long as 〜 | 〜する限り（条件）／〜さえすれば
| as far as 〜 | 〜する限り（範囲）
| in case 〜 | 〜するといけないから／〜の場合に備えて
| even if / even though | たとえ〜でも／〜であるけれども
| whether A or B | AであろうとBであろうと
- 42-3-1|{As long as} you're happy, I don't mind.|あなたが幸せ**でさえあれば**、私はかまわない。
- 42-3-2|{As far as} I know, he is honest.|私が知っている**限り**、彼は正直だ。
- 42-3-3|Take an umbrella {in case} it rains.|雨が降る**といけないから**傘を持って行きなさい。
`,
drills:[
ej('ks42d1','{Since} you are busy, I\'ll come back later.','あなたは忙しい**ので**、後でまた来ます。','since「〜なので」（理由）。完了形と組んでいないので「〜以来」ではない。'),
ej('ks42d2','{Tired as} she was, she kept on working.','疲れて**いたけれども**、彼女は働き続けた。','形容詞＋as＋S V の譲歩。'),
ej('ks42d3','{While} some people enjoy crowds, others find them stressful.','人混みを楽しむ人がいる**一方で**、ストレスに感じる人もいる。','while「〜する一方で」（対照）。'),
ej('ks42d4','{Once} you learn to ride a bicycle, you never forget how.','**いったん**自転車に乗れるようになると、乗り方を決して忘れない。','once「いったん〜すると」。how の後に to ride it が省略されている。'),
ej('ks42d5','It will {not be long before} robots do most household chores.','**まもなく**ロボットが家事の大半をするようになるだろう。','It will not be long before 〜。'),
ej('ks42d6','Most of us assume that we are making rational choices when we shop. {As research in behavioral economics has shown, however, our decisions are often influenced by factors of which we are not even aware, such as the order in which products are displayed.}','私たちの大半は、買い物をするとき合理的な選択をしていると思い込んでいる。**しかし行動経済学の研究が示してきたように、私たちの決定は、商品が並べられている順番など、自分でも気づいてさえいない要因にしばしば影響されている**。','【構造】As research … has shown は様態の as「〜ように」。主節は our decisions が S、are influenced が V。factors of which we are not even aware は前置詞＋関係代名詞（be aware of）。such as 以下は factors の例。\n【ポイント】the order in which products are displayed も前置詞＋関係代名詞。however は挿入。','As の意味',true)
]});

/* ================= §43 英文解釈 重要ポイント ================= */
L.push({k:'ks43',no:'§43',title:'英文解釈 重要ポイント（総まとめ）',sub:'構造をとる手順と、訳の仕上げのチェックリスト',
body:`
# 43-1 構造をとる手順
: 長い英文は、次の順番で骨組みを見つける。
[構造把握の手順]
| ① 修飾語を（ ）でくくる | 前置詞句・副詞・挿入・分詞構文を外す（§1・§17・§41）
| ② 述語動詞を見つける | 時制のある動詞。過去分詞の後置修飾や関係詞節の動詞と区別（§16・§32）
| ③ 主語を確定する | 述語動詞の前の名詞のかたまり。長い主語・形式主語に注意（§4・§10）
| ④ 文型を決める | 動詞の後ろの要素が O か C か、名詞が2つなら SVOO か SVOC か（§1〜§3）
| ⑤ 節の範囲を決める | that / wh- / if / 関係詞のつくる節がどこで終わるか（§32〜§35）
| ⑥ 並列を確認 | and / or / but が何と何を結んでいるか（§36・§40）
= 43-1-1|The number of people {who} believe {that} the economy will improve next year {has} fallen sharply.|来年は景気がよくなると考える人の数が急激に減っている。
: S＝The number of people who believe that …（関係詞節の中に that 節）、V＝has fallen。the number of は単数扱い。

# 43-2 訳の仕上げ
[訳のチェックリスト]
| 無生物主語 | 「〜によって／〜のせいで」と訳し、人を主語に（§8・§9）
| 名詞構文 | 名詞を「主語＋述語」に開く（§20〜§22）
| 指示語 | 何を指すか明示する（§37）
| 時制 | 完了・仮定法の意味を訳に出す（§23〜§27）
| 否定 | 部分否定・準否定を正確に（§18・§19）
| 比較 | 何と何を比べているか、no / not の違い（§29〜§31）
| 日本語として自然か | 読み返して意味が通るか。「〜ところの」などの直訳調を避ける

# 43-3 よくある誤訳のパターン
| 準否定を見落とす | few / little / hardly を「少し」と訳す
| 部分否定を全体否定に | not always を「決して〜ない」と訳す
| 仮定法を直説法に | would have p.p. を「〜した」と訳す
| as / since / while の意味の取り違え | 理由・時・譲歩の判断ミス
| 関係詞節の範囲の誤り | どこまで先行詞にかかるかの判断ミス
| 多義語の誤訳 | run / attend / stand などを最初の意味で訳す（§1）
> 最後に必ず、自分の訳だけを読んで**日本語として意味が通るか**を確認する。意味が通らない訳は、どこかで構造をとり違えている。
`,
drills:[
ej('ks43d1','The few students {who} attended the lecture found it difficult to follow.','その講義に出席した数少ない学生は、ついていくのが難しいと感じた。','the few＋名詞「数少ない〜」。find it difficult to do（形式目的語）。'),
ej('ks43d2','Had the government acted sooner, the crisis {could have been} avoided.','政府がもっと早く行動していれば、危機は**避けられただろう**。','仮定法過去完了の倒置。'),
ej('ks43d3','Not all of the claims made in the advertisement are true.','広告でなされている主張が**すべて**本当**というわけではない**。','部分否定。made in the advertisement は過去分詞の後置修飾。'),
ej('ks43d4','What the researchers found surprising was {how quickly} the children adapted.','研究者たちが驚いたのは、子どもたちが**どれほど速く**適応したかということだった。','What 節が S（find O C の O が what）、how 節が C。'),
ej('ks43d5','The growing popularity of online learning has raised the question of whether traditional schools will survive.','オンライン学習の人気が高まっていることで、従来の学校が生き残るかどうかという疑問が生じている。','名詞構文＋無生物主語。the question of whether 〜「〜かどうかという疑問」。'),
ej('ks43d6','It is often said that technology makes our lives easier. {What is less often recognized, however, is that the time it saves us is frequently filled not with rest but with yet more work, so that many people feel busier than their grandparents ever did.}','科学技術は生活を楽にするとよく言われる。**しかし、それほど認識されていないのは、科学技術が節約してくれる時間が、しばしば休息ではなくさらに多くの仕事で埋められてしまい、その結果、多くの人が祖父母の時代よりも忙しく感じているということである**。','【構造】What is less often recognized が S、is が V、that 節が C。that 節の中は the time (that) it saves us が S（目的格の省略、save O₁ O₂）、is filled が V、not with A but with B。, so that 〜 は結果「その結果〜」。\n【ポイント】than their grandparents ever did の did は felt busy の代動詞。it は technology。yet more「さらに多くの」。総まとめとして、名詞節・関係詞の省略・SVOO・not A but B・結果の so that・比較の代動詞を含む。','総合問題',true)
]});
})();
