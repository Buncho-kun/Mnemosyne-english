// 英文解釈（構文）§23〜§28 仮定法・助動詞 ― 例文・解説・例題はすべてこのアプリ用に作成
(function(){
const D=window.EIGO_DATA,deck=D.decks.find(d=>d.id==='kaishaku');if(!deck)return;
const L=deck.items;
const ej=(k,en,ja,point,hint,long)=>({k,kind:'ej',en,models:Array.isArray(ja)?ja:[ja],point,hint:hint||'',long:!!long});

/* ================= §23 仮定法(1) ================= */
L.push({k:'ks23',no:'§23',title:'仮定法(1)　仮定法過去・過去完了・混合型',sub:'時制を1つ過去にずらして「事実と違う」ことを示す',
body:`
# 23-1 仮定法とは
: 仮定法は**事実に反すること・実現の可能性が低いこと**を述べる形。動詞の時制を**1つ過去にずらす**ことで「現実ではない」ことを示す。読解では、**過去形なのに現在の話をしている**ことに気づくのが第一歩。
[仮定法の基本形]
| 仮定法過去（現在の事実に反する） | If S 過去形, S would [could, might] 原形
| 仮定法過去完了（過去の事実に反する） | If S had p.p., S would [could, might] have p.p.
| 混合型（過去の条件→現在の結果） | If S had p.p., S would 原形 (now)
= 23-1-1|If I {had} more time, I {would learn} to play the piano.|もっと時間が**あれば**、ピアノを習う**のだが**。
: 実際は時間がない（現在の事実の反対）。had は過去形だが、意味は現在。
- 23-1-2|If I {were} you, I {wouldn't accept} the offer.|私があなた**なら**、その申し出は受けない**だろう**。
: be 動詞は主語にかかわらず were が原則（口語では was も）。
= 23-1-3|If she {had left} home earlier, she {could have caught} the train.|もっと早く家を**出ていたら**、彼女は電車に**間に合っただろうに**。
: 実際は遅く出て、間に合わなかった（過去の事実の反対）。
= 23-1-4|If I {had studied} harder in high school, I {would be} a doctor {now}.|高校でもっと勉強**していたら**、**今ごろ**医者に**なっているだろう**。
: 条件は過去（had studied）、結果は現在（would be now）の混合型。now / today などの語が手がかり。
> 読解のコツ：主節に **would / could / might** があったら、まず仮定法を疑う。「〜だろうに」「〜なのに」と、事実との差を訳に出す。

# 23-2 未来についての仮定
[未来の仮定]
| If S should 原形, 〜 | 万一〜したら（主節は命令文・will も可）
| If S were to 原形, S would 〜 | 仮に〜するとしたら（実現性ゼロでも可）
- 23-2-1|If you {should} need any help, please call me.|**万一**助けが必要になったら、電話してください。
- 23-2-2|If the sun {were to} disappear, all life on earth {would} die.|**仮に**太陽が消える**としたら**、地球上の生命はすべて死に絶える**だろう**。

# 23-3 仮定法と直説法の区別
: if があっても**仮定法とは限らない**。現実にありうる条件なら直説法（現在形・will）。
= 23-3-1|If it {rains} tomorrow, the game {will} be canceled.|明日雨が**降れば**、試合は中止になる。（直説法：ありうる条件）
= 23-3-2|If it {rained} tomorrow, the game {would} be canceled.|（ありそうにないが）明日雨が降る**としたら**、試合は中止になる**だろう**。（仮定法）
> 過去の事実を述べる if（「〜したときはいつも」）もある：If he was tired, he went to bed early.（彼は疲れていたときは早く寝た）。主節に would がなければ仮定法ではない。
`,
drills:[
ej('ks23d1','If I {knew} her address, I {would send} her a letter.','彼女の住所を**知っていれば**、手紙を**送るのだが**。','仮定法過去。実際は住所を知らない。'),
ej('ks23d2','If he {had taken} the doctor\'s advice, he {would not have become} so ill.','医者の忠告に**従っていれば**、彼はそれほど重い病気に**ならなかっただろう**。','仮定法過去完了。実際は忠告に従わず、重病になった。'),
ej('ks23d3','If we {had not met} that day, our lives {would be} completely different now.','あの日私たちが**出会っていなかったら**、今の私たちの人生はまったく**違っているだろう**。','混合型。過去の条件（had not met）と現在の結果（would be now）。'),
ej('ks23d4','If anything {should} happen to me, please take care of my cat.','**万一**私に何かあったら、猫の世話をお願いします。','If S should 原形「万一〜したら」。主節は命令文。'),
ej('ks23d5','If you {were to} win a million dollars, what {would} you do with it?','**仮に**100万ドル当たった**としたら**、それをどうしますか。','If S were to 原形「仮に〜するとしたら」。'),
ej('ks23d6','Many historians have asked what the world would look like today if certain events had turned out differently. {If the printing press had never been invented, for example, ideas would have spread far more slowly, and the scientific revolution might never have taken place.}','多くの歴史家が、もしある出来事が違う結果になっていたら、今日の世界はどんな姿になっていただろうかと問うてきた。**例えば、もし印刷機が発明されていなかったら、思想が広まる速度ははるかに遅かっただろうし、科学革命は起こらなかったかもしれない**。','【構造】If 節は had never been invented（仮定法過去完了・受動）。主節は would have spread と might never have taken place が and で並ぶ。for example は挿入。\n【ポイント】1文目の what the world would look like today if 〜 had turned out は混合型（過去の条件→現在の姿）。far more slowly の far は比較級の強調。','if 節と主節の時制',true)
]});

/* ================= §24 仮定法(2) ================= */
L.push({k:'ks24',no:'§24',title:'仮定法(2)　if の省略・if 節の代わり',sub:'if がなくても仮定法になる形を見抜く',
body:`
# 24-1 if の省略と倒置
: 文語的な英文では、**if を省略して疑問文の語順（倒置）**にすることがある。Were / Had / Should が文頭に来たら仮定法を疑う。
[倒置の形]
| If S were 〜 → Were S 〜 | もしSが〜なら
| If S had p.p. → Had S p.p. | もしSが〜していたら
| If S should 〜 → Should S 〜 | 万一Sが〜したら
= 24-1-1|{Were I} in your position, I would quit the job.|**もし私が**あなたの立場**なら**、仕事を辞めるだろう。
- 24-1-2|{Had I known} the truth, I would have told you.|真実を**知っていたら**、あなたに話していただろう。
- 24-1-3|{Should you} have any questions, feel free to ask.|**万一**ご質問があれば、遠慮なくお尋ねください。
> 文頭の Had / Were は、文の後半に would があれば仮定法の倒置。疑問文と勘違いしないこと（文末が ? でない）。

# 24-2 if 節の代わりになる表現
: 条件が if 節以外の形で表され、**主節の would / could だけ**が仮定法の目印になることがある。
[if 節の代わり]
| without 〜 / but for 〜 | 〜がなければ／〜がなかったら
| with 〜 | 〜があれば
| otherwise | そうでなければ
| 主語（名詞句） | A wise man would 〜（賢い人なら〜するだろう）
| 不定詞 | To hear him, you would 〜（彼の話を聞けば〜）
| 分詞構文 | Born in Japan, he would 〜（日本に生まれていたら〜）
| 副詞句 | In your place, I would 〜（あなたの立場なら〜）
= 24-2-1|{Without} water, nothing {could} live.|水**がなければ**、何も生きられ**ないだろう**。
- 24-2-2|{But for} your help, I {would have failed}.|あなたの助け**がなかったら**、私は失敗**していただろう**。
- 24-2-3|I was busy; {otherwise} I {would have gone} with you.|忙しかった。**そうでなければ**一緒に行ったのに。
- 24-2-4|{A true friend} {would not} say such a thing.|**本当の友人なら**そんなことは言わ**ないだろう**。
- 24-2-5|{To hear} her speak, you {would} think she was a native speaker.|彼女が話すのを**聞けば**、ネイティブだと思う**だろう**。
# 24-2-A If it were not for / If it had not been for
| If it were not for 〜 (= Were it not for 〜) | （今）〜がなければ
| If it had not been for 〜 (= Had it not been for 〜) | （あの時）〜がなかったら
- 24-2-6|{Had it not been for} the seat belt, he would have been killed.|シートベルト**がなかったら**、彼は死んでいただろう。

# 24-3 主節の省略された仮定法
- 24-3-1|{If only} I had listened to my parents!|両親の言うことを聞いて**さえいたらなあ**。
- 24-3-2|{I would} like to visit Kyoto again.|もう一度京都を訪れ**たい**。
: would like to do / I would say 〜 / I wouldn't know などの would は、仮定法から来た**丁寧・控えめ**な言い方。
`,
drills:[
ej('ks24d1','{Had} I {known} you were coming, I would have prepared a meal.','あなたが来ると**知っていたら**、食事を用意していたのに。','Had S p.p. は If S had p.p. の倒置。'),
ej('ks24d2','{Without} the Internet, our lives would be very different.','インターネット**がなければ**、私たちの生活は大きく違っているだろう。','without〜 が if 節の代わり。主節の would が目印。'),
ej('ks24d3','He worked hard; {otherwise} he would not have succeeded.','彼は一生懸命働いた。**そうでなければ**成功していなかっただろう。','otherwise「そうでなければ」＝If he had not worked hard。'),
ej('ks24d4','{A wise person} would not trust such a stranger.','**賢明な人なら**、そんな見知らぬ人を信用しないだろう。','主語が条件を含む仮定法。'),
ej('ks24d5','{Were it not for} the sun, no living thing could exist.','太陽**がなければ**、生物は存在できないだろう。','Were it not for 〜 ＝ If it were not for 〜。'),
ej('ks24d6','The bridge collapsed only a few minutes after the last car had crossed it. {Had the engineers not closed it to traffic in time, hundreds of people might have lost their lives.}','その橋は最後の車が渡ってからわずか数分後に崩落した。**もし技術者たちが間に合うように通行止めにしていなかったら、何百人もの人が命を落としていたかもしれない**。','【構造】Had the engineers not closed 〜 は If the engineers had not closed 〜 の倒置。主節は might have lost（仮定法過去完了）。\n【ポイント】close A to traffic「Aを通行止めにする」。in time「間に合って」。倒置の否定は Had S not p.p. の語順になる。','文頭の Had',true)
]});

/* ================= §25 仮定法(3) ================= */
L.push({k:'ks25',no:'§25',title:'仮定法(3)　wish・as if・It is time・仮定法現在',sub:'if 以外で仮定法をとる決まった形',
body:`
# 25-1 wish / if only
[wish の時制]
| I wish S 過去形 | （今）〜ならいいのに
| I wish S had p.p. | （あの時）〜だったらよかったのに
| I wish S would 〜 | 〜してくれたらいいのに（相手・状況への不満）
= 25-1-1|I {wish} I {could} speak French.|フランス語が話せ**たらいいのに**。
- 25-1-2|I {wish} I {had studied} harder.|もっと勉強**しておけばよかった**。
- 25-1-3|I {wish} you {would} stop complaining.|文句を言うのを**やめてくれたらいいのに**。
: wish の時制は主節に関係なく、**wish と同時なら過去形、wish より前なら過去完了**。I wished I were 〜 も「〜ならいいのにと思った」。

# 25-2 as if / as though
| as if S 過去形 | まるで〜であるかのように（同時）
| as if S had p.p. | まるで〜だったかのように（それ以前）
= 25-2-1|He talks {as if} he {knew} everything.|彼は**まるで**何でも知っている**かのように**話す。
- 25-2-2|She looked {as if} she {had seen} a ghost.|彼女は**まるで**幽霊を見た**かのような**顔をしていた。
: 現実にそうである可能性がある場合は直説法も使う：It looks as if it is going to rain.（雨が降りそうだ）

# 25-3 It is time ＋仮定法過去
= 25-3-1|{It is time} you {went} to bed.|もう寝る**時間ですよ**。
: 「まだ寝ていない」ので仮定法過去。It is high time 〜 は「とっくに〜すべき時だ」。

# 25-4 仮定法現在（要求・提案の that 節）
: 要求・提案・主張・必要を表す語の後の that 節では、動詞が**原形**（または should＋原形）になる。主語が三人称でも s をつけず、過去の文でも時制の一致を受けない。
[仮定法現在をとる語]
| 動詞 | demand, insist, suggest, propose, recommend, require, order, request
| 形容詞 | necessary, essential, important, vital, urgent
| 名詞 | proposal, suggestion, demand, recommendation
= 25-4-1|The doctor {recommended that} he {stop} smoking.|医者は彼に禁煙**するよう勧めた**。
x The doctor recommended that he stopped smoking.
- 25-4-2|It is {essential that} every child {have} access to education.|すべての子どもが教育を受けられる**ことが不可欠だ**。
- 25-4-3|She made a {proposal that} the meeting {be} postponed.|彼女は会議を延期**すべきだという提案**をした。
> 読解では、三人称なのに s がない・be が原形のままの動詞を見たら、仮定法現在だと判断する。
`,
drills:[
ej('ks25d1','I {wish} I {had taken} more photos during the trip.','旅行中にもっと写真を**撮っておけばよかった**。','wish＋過去完了「〜だったらよかったのに」。'),
ej('ks25d2','He spoke {as if} he {had been} there himself.','彼は**まるで**自分がそこに**いたかのように**話した。','as if＋過去完了は「それ以前のこと」。'),
ej('ks25d3','{It is high time} we {did} something about climate change.','気候変動について何か手を打つべき**時がとっくに来ている**。','It is high time S 過去形。'),
ej('ks25d4','The committee {demanded that} the report {be} rewritten.','委員会は報告書を書き直す**よう要求した**。','demand that S (should) 原形。be が原形。'),
ej('ks25d5','I {wished} I {were} a bird so that I could fly to her.','彼女のもとへ飛んで行けるように、鳥**ならいいのにと思った**。','wished でも、同時のことは過去形（were）。'),
ej('ks25d6','When the new airport was proposed, many local residents objected. {They insisted that the government consider the noise problem more seriously and that the construction be delayed until a full study had been completed.}','新空港が提案されたとき、多くの地元住民が反対した。**彼らは、政府が騒音問題をもっと真剣に検討すること、そして十分な調査が終わるまで建設を延期することを強く求めた**。','【構造】insisted の目的語の that 節が2つ、and で並んでいる。どちらも仮定法現在（consider / be delayed が原形）。\n【ポイント】主節が過去形でも consider は considered にならない。insist that S 原形 は「〜するよう強く求める」と訳す（insist that S 直説法 は「〜だと言い張る」）。','動詞の形に注目',true)
]});

/* ================= §26 助動詞(1) ================= */
L.push({k:'ks26',no:'§26',title:'助動詞(1)　推量の強さ・義務の強さ',sub:'must / may / can / should の2つの意味',
body:`
# 26-1 助動詞の2つの意味
: 助動詞には**①話し手の判断（推量）**と**②義務・許可・能力**の2系統の意味がある。どちらの意味かは**文脈と動詞の種類**（状態動詞か動作動詞か）で判断する。
[助動詞の2つの意味]
| must | ①〜に違いない ②〜しなければならない
| may | ①〜かもしれない ②〜してもよい
| can | ①〜でありうる ②〜できる、〜してもよい
| should | ①〜のはずだ ②〜すべきだ
| will | ①〜だろう ②〜するつもりだ
= 26-1-1|He {must} be tired after the long flight.|長いフライトの後で、彼は疲れている**に違いない**。（推量）
= 26-1-2|You {must} finish this by Friday.|金曜日までにこれを終え**なければならない**。（義務）
: 状態動詞（be / know / have）と組むと推量になりやすい。

# 26-2 推量の確信度
: 推量の助動詞は**確信の強さ**が違う。訳でもその差を出す。
[確信の強さ（高→低）]
| must | 〜に違いない（ほぼ確実）
| will / would | 〜だろう
| should / ought to | 〜のはずだ（当然そうなる）
| may | 〜かもしれない（五分五分）
| might / could | （ひょっとすると）〜かもしれない
| can't / cannot | 〜のはずがない（must の否定）
- 26-2-1|The package {should} arrive tomorrow.|荷物は明日着く**はずだ**。
- 26-2-2|It {might} rain later.|後で雨が降る**かもしれない**。
- 26-2-3|That {can't} be true.|それが本当の**はずがない**。
x That mustn't be true.（must not は「〜してはいけない」で、「〜のはずがない」にはならない）
- 26-2-4|{Can} it be true?|**いったい**それは本当**だろうか**。
: 疑問文の can は強い疑い・驚き。

# 26-3 義務・必要の強さ
| must | （話し手が必要と考えて）〜しなければならない
| have to | （規則・状況で）〜しなければならない
| should / ought to | 〜すべきだ（助言）
| had better | 〜したほうがいい（しないとまずいことになる）
| must not | 〜してはいけない（禁止）
| don't have to / need not | 〜する必要はない（不必要）
- 26-3-1|You {must not} park here.|ここに駐車**してはいけない**。
- 26-3-2|You {don't have to} come if you're busy.|忙しいなら来**なくてもいい**。
- 26-3-3|You'{d better} leave now, or you'll miss the bus.|今出た**ほうがいい**。さもないとバスに乗り遅れるよ。
: had better は目上の人には使わない（強い忠告・警告になる）。
`,
drills:[
ej('ks26d1','She {must} have a lot of friends; her phone never stops ringing.','彼女には友達がたくさんいる**に違いない**。電話が鳴りやむことがないのだから。','状態動詞 have＋must は推量。セミコロン以下が根拠。'),
ej('ks26d2','He {can\'t} be the thief. He was with me all evening.','彼が泥棒の**はずがない**。一晩中私と一緒にいたのだから。','can\'t「〜のはずがない」。'),
ej('ks26d3','You {don\'t have to} answer the question if you don\'t want to.','答えたくなければ、その質問に答える**必要はない**。','don\'t have to「〜する必要はない」。must not と区別する。'),
ej('ks26d4','The new medicine {may} help some patients, but it {may} also cause side effects.','新薬は一部の患者の助けになる**かもしれない**が、副作用を引き起こす**可能性もある**。','may「〜かもしれない」を2つ並べ、可能性を対比している。'),
ej('ks26d5','{Can} this really be the right way to the station?','**本当に**これが駅への正しい道**だろうか**。','疑問文の can は強い疑い。'),
ej('ks26d6','The lights in the house are off, and there is no car in the driveway. {They must have gone away for the weekend, so we should not expect them to answer the door.}','家の明かりは消えていて、私道に車もない。**彼らは週末に出かけたに違いないから、玄関に出てくるとは思わないほうがいい**。','【構造】must have gone は過去への推量「〜したに違いない」（→§27）。should not expect them to do「彼らが〜するのを期待すべきではない」。\n【ポイント】1文目が推量の根拠。answer the door「（来客に）玄関に出る」。','must have p.p.',true)
]});

/* ================= §27 助動詞(2) ================= */
L.push({k:'ks27',no:'§27',title:'助動詞(2)　助動詞＋have p.p.',sub:'過去への推量と、過去の行為への後悔・非難',
body:`
# 27-1 過去への推量
: 「助動詞＋have p.p.」は、**現在の時点から過去のことを推量**する形。
[過去への推量]
| must have p.p. | 〜したに違いない
| may [might] have p.p. | 〜したかもしれない
| can't [couldn't] have p.p. | 〜したはずがない
| will [would] have p.p. | 〜しただろう
| should [ought to] have p.p. | 〜したはずだ（推量）
= 27-1-1|The road is wet. It {must have rained} last night.|道路がぬれている。昨夜雨が**降ったに違いない**。
- 27-1-2|She {may have missed} the train.|彼女は電車に乗り**遅れたのかもしれない**。
- 27-1-3|He {can't have said} such a thing.|彼がそんなことを**言ったはずがない**。
- 27-1-4|They {should have arrived} by now.|彼らは今ごろもう着いている**はずだ**。

# 27-2 過去の行為への後悔・非難
: should / ought to / need not / could などは、「**実際にはしなかった（した）こと**」への後悔・非難も表す。
[後悔・非難・不要]
| should have p.p. | 〜すべきだったのに（しなかった）
| should not have p.p. | 〜すべきではなかったのに（してしまった）
| need not have p.p. | 〜する必要はなかったのに（してしまった）
| could have p.p. | 〜できたのに（しなかった）
| might have p.p. | 〜してくれてもよかったのに（非難）
= 27-2-1|You {should have told} me earlier.|もっと早く私に**言うべきだったのに**。
- 27-2-2|I {shouldn't have eaten} so much.|あんなに**食べるんじゃなかった**。
- 27-2-3|You {needn't have brought} an umbrella. It's sunny.|傘を**持ってくる必要はなかったのに**。晴れているよ。
: didn't need to do は「〜する必要がなかった（ので、しなかった）」。need not have p.p. は「必要がなかったのに、した」。
- 27-2-4|You {could have hurt} yourself!|けが**をするところだった**じゃないか！
- 27-2-5|You {might have warned} me.|警告**してくれてもよかったのに**。
> should have p.p. は「推量（〜したはずだ）」と「後悔（〜すべきだったのに）」の2つ。文脈で判断する。
`,
drills:[
ej('ks27d1','I can\'t find my keys. I {must have left} them at the office.','鍵が見つからない。会社に**置いてきたに違いない**。','must have p.p.「〜したに違いない」。'),
ej('ks27d2','You {should have seen} the look on his face!','あなたに彼の顔を**見せたかった**よ。','should have p.p. は「〜すべきだったのに」→ 会話では「見せたかった（すごかった）」の意味になる。'),
ej('ks27d3','We {needn\'t have hurried}; the concert started thirty minutes late.','**急ぐ必要はなかった**。コンサートは30分遅れて始まったのだから。','need not have p.p.「〜する必要はなかったのに（した）」。'),
ej('ks27d4','She {can\'t have finished} the book already. It\'s over 500 pages long.','彼女がもうその本を**読み終えたはずがない**。500ページ以上もあるのだから。','can\'t have p.p.「〜したはずがない」。'),
ej('ks27d5','The accident {could have been} avoided if the driver had been more careful.','運転手がもっと注意していれば、その事故は**避けられただろうに**。','could have been p.p.＋仮定法過去完了。'),
ej('ks27d6','Looking back on my school days, I often think that I made the wrong choices. {I should have spent more time reading and less time worrying about what other people thought of me; I might then have discovered my real interests much earlier.}','学生時代を振り返ると、選択を誤ったとよく思う。**もっと本を読むことに時間をかけ、他人にどう思われているかを気にする時間を減らすべきだった。そうしていれば、本当の興味にもっとずっと早く気づいたかもしれない**。','【構造】should have spent more time doing and less time doing で、more と less の2つの目的語が並ぶ。セミコロン以下の then は「そうしていれば」で、仮定の条件を表す。\n【ポイント】should have p.p. は後悔。might have discovered は仮定法過去完了の主節（if 節が then に凝縮）。','then が表す条件',true)
]});

/* ================= §28 助動詞(3) ================= */
L.push({k:'ks28',no:'§28',title:'助動詞(3)　助動詞の慣用表現',sub:'may well / might as well / cannot … too など',
body:`
# 28-1 may / might を使う慣用表現
[may の慣用表現]
| may well do | ①〜するのももっともだ ②たぶん〜するだろう
| may [might] as well do | 〜してもいい、〜するほうがましだ
| might as well A as B | BするくらいならAするほうがましだ
| May S 原形! | Sが〜しますように（祈願）
| 譲歩の may | 〜かもしれないが（but と組む）
= 28-1-1|You {may well} be angry with him.|あなたが彼に腹を立てる**のももっともだ**。
- 28-1-2|It {may well} rain tomorrow.|明日は**たぶん**雨が降る**だろう**。
- 28-1-3|The bus won't come for an hour. We {might as well} walk.|バスは1時間来ない。歩い**たほうがましだ**。
- 28-1-4|You {might as well} throw your money away {as} lend it to him.|彼に金を貸す**くらいなら**捨てる**ほうがましだ**。
- 28-1-5|He {may} be young, {but} he is very wise.|彼は若い**かもしれないが**、とても賢い。

# 28-2 cannot を使う慣用表現
[cannot の慣用表現]
| cannot … too 〜 | いくら〜してもしすぎることはない
| cannot help doing | 〜せずにはいられない
| cannot but do | 〜せざるをえない
| cannot do without 〜 | 〜なしではすまない
= 28-2-1|You {cannot} be {too} careful when driving.|運転するときは**いくら**注意**してもしすぎることはない**。
- 28-2-2|We {cannot} overestimate the importance of sleep.|睡眠の大切さは**いくら強調してもしすぎることはない**。
: cannot＋over-（overestimate / overemphasize）も同じ意味。

# 28-3 would / used to / should の慣用
[その他の慣用]
| used to do | 以前は〜したものだ（今はしていない）／以前は〜だった
| would (often) do | よく〜したものだ（過去の習慣的動作）
| would rather A than B | BするよりむしろAしたい
| would rather S 過去形 | Sに〜してほしい
| should（感情・判断） | It is strange that he should 〜（〜するとは奇妙だ）
| Who should 〜 but …? | …以外に誰が〜しただろうか（＝…が〜した）
| need / dare（助動詞） | need not do / How dare you 〜!
- 28-3-1|There {used to} be a cinema here.|以前ここには映画館が**あった**。
- 28-3-2|My grandfather {would} often take me fishing.|祖父は**よく**私を釣りに連れて行ってくれた**ものだ**。
: would は動作のみ。状態（be / live / have）には used to を使う。
- 28-3-3|I {would rather} stay home {than} go out tonight.|今夜は出かける**より**家にいる**ほうがいい**。
- 28-3-4|It is surprising that she {should} say so.|彼女がそんなことを**言うとは**驚きだ。
: 感情・判断を表す形容詞（strange / surprising / natural / a pity）の後の that 節の should は「〜するとは」。
- 28-3-5|{Who should} I meet at the station {but} my old teacher!|駅で会ったのは**誰あろう**昔の先生だった！
`,
drills:[
ej('ks28d1','You {may well} wonder why I left the company.','私がなぜ会社を辞めたのか不思議に思う**のももっともだ**。','may well do「〜するのももっともだ」。'),
ej('ks28d2','We {cannot} praise his courage {too} highly.','彼の勇気は**いくら**ほめて**もほめすぎることはない**。','cannot … too 〜。'),
ej('ks28d3','I {would rather} walk {than} wait for the next bus.','次のバスを待つ**より**歩く**ほうがいい**。','would rather A than B。'),
ej('ks28d4','People {used to} believe that the earth was flat.','**かつて**人々は地球は平らだと信じていた。','used to do「以前は〜した」。今はそうではない含み。'),
ej('ks28d5','It is natural that parents {should} worry about their children.','親が子どものことを心配**するのは**当然だ。','判断の形容詞＋that 節の should。'),
ej('ks28d6','If the store has already closed, we {might as well} go home.','店がもう閉まっているなら、家に帰った**ほうがいい**。','might as well do「〜するほうがましだ、〜してもいい」。'),
ej('ks28d7','When I was a child, my family would spend every summer at my grandmother\'s house by the sea. {I used to think those summers would never end, and I cannot help feeling a little sad whenever I remember that the house no longer exists.}','子どものころ、家族は毎年夏を海辺の祖母の家で過ごしたものだ。**私はかつて、あの夏はいつまでも終わらないと思っていたので、その家がもう存在しないことを思い出すたびに、少し悲しい気持ちにならずにはいられない**。','【構造】I used to think 〜 と I cannot help feeling 〜 が and で並ぶ。whenever 節の中の that 節は remember の目的語。\n【ポイント】1文目の would は過去の習慣「〜したものだ」。used to think の後の would never end は時制の一致による will の過去形。cannot help doing「〜せずにはいられない」。no longer「もはや〜ない」。','would と used to の違い',true)
]});
})();
