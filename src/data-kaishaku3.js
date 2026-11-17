// 英文解釈（構文）§15〜§22 ― 例文・解説・例題はすべてこのアプリ用に作成
(function(){
const D=window.EIGO_DATA,deck=D.decks.find(d=>d.id==='kaishaku');if(!deck)return;
const L=deck.items;
const ej=(k,en,ja,point,hint,long)=>({k,kind:'ej',en,models:Array.isArray(ja)?ja:[ja],point,hint:hint||'',long:!!long});

/* ================= §15 動名詞(3) ================= */
L.push({k:'ks15',no:'§15',title:'動名詞(3)　不定詞との比較・名詞化した -ing',sub:'to do と doing の「時間の向き」の違い',
body:`
# 15-1 to do と doing の基本的な違い
: to 不定詞は**これから先のこと（未来・未実現）**、動名詞は**すでに起きたこと・現に行っていること・一般的な行為**を表す傾向がある。
[時間の向きの違い]
| to do | 未来志向・一回の具体的な行為 → want, hope, decide, plan
| doing | 過去・現在志向・習慣や一般的な行為 → enjoy, finish, admit, deny
= 15-1-1|I like {to swim} in the sea when it's hot.|暑いときは海で**泳ぐのが**好きだ。（具体的な場面）
= 15-1-2|I like {swimming}.|私は**水泳が**好きだ。（一般的な行為）
: like / love / hate / prefer / begin / start は両方とれる。意味の差は小さいが、上の傾向がある。

# 15-2 意味が大きく変わる動詞（総まとめ）
[to do と doing で意味が変わる動詞]
| remember to do / doing | 忘れずに〜する／〜したことを覚えている
| forget to do / doing | 〜し忘れる／〜したことを忘れる
| regret to do / doing | 残念ながら〜する／〜したことを後悔する
| try to do / doing | 〜しようと努める／試しに〜してみる
| mean to do / doing | 〜するつもりだ／〜することを意味する
| go on to do / doing | 続けて(次に)〜する／〜し続ける
| stop to do / doing | 〜するために立ち止まる／〜するのをやめる
| need to do / doing | 〜する必要がある／〜される必要がある
- 15-2-1|After the introduction, the speaker {went on to explain} the main idea.|導入の後、講演者は**続けて**要点を**説明した**。
- 15-2-2|Even after the bell rang, the students {went on talking}.|ベルが鳴った後も、生徒たちはしゃべり**続けた**。
- 15-2-3|Taking this job {means moving} to another city.|この仕事を引き受けることは、別の都市に**引っ越すことを意味する**。
- 15-2-4|I {didn't mean to hurt} your feelings.|あなたの気持ちを傷つける**つもりはなかった**。
- 15-2-5|If the door won't open, {try pushing} it harder.|ドアが開かないなら、**試しに**もっと強く**押してみて**。

# 15-3 名詞化した -ing 形
: 動名詞が完全に名詞化し、**冠詞や形容詞がつき、複数形にもなる**ことがある。この場合は普通の名詞として訳す。
= 15-3-1|{The building} of the bridge took five years.|橋の**建設**には5年かかった。
- 15-3-2|We have {a meeting} every Monday.|毎週月曜日に**会議**がある。
- 15-3-3|She has {strong feelings} about the issue.|彼女はその問題について**強い思い**を持っている。
- 15-3-4|Her {paintings} sell for millions of yen.|彼女の**絵**は何百万円で売れる。
: 名詞化した -ing は意味が変わることもある（feeling「感情」、painting「絵」、saving(s)「貯金」、surroundings「環境」、belongings「所持品」）。
`,
drills:[
ej('ks15d1','I\'ll never {forget seeing} the Northern Lights for the first time.','初めてオーロラを**見たことは**決して**忘れない**だろう。','forget doing「〜したことを忘れる」。never forget doing「〜したことを決して忘れない」。'),
ej('ks15d2','Don\'t {forget to turn} off the lights when you leave.','出かけるときは電気を**消し忘れない**でね。','forget to do「〜し忘れる」。'),
ej('ks15d3','After graduating from college, she {went on to become} a successful lawyer.','大学を卒業した後、彼女は**さらに進んで**成功した弁護士**になった**。','go on to do「続けて（次の段階として）〜する」。'),
ej('ks15d4','Saying yes to everything {means having} no time for yourself.','何でも引き受けるということは、自分の時間が**なくなることを意味する**。','mean doing「〜することを意味する」。'),
ej('ks15d5','He {tried calling} her office, but nobody answered.','彼は**試しに**彼女の職場に電話**してみた**が、誰も出なかった。','try doing「試しに〜してみる」。try to do「〜しようと努力する」。'),
ej('ks15d6','When she moved to the city, she found it hard to adjust to her new surroundings. {She regretted having left her quiet village, and she often tried to imagine what her life would have been like if she had stayed.}','都会へ引っ越したとき、彼女は新しい環境に慣れるのに苦労した。**彼女は静かな村を出てきたことを後悔し、もし村にとどまっていたら自分の人生はどうなっていただろうかとよく想像しようとした**。','【構造】regretted having left は「（過去に）〜したことを後悔した」で、完了動名詞が後悔より前の出来事を表す。tried to imagine は「想像しようとした」。\n【ポイント】surroundings は名詞化した -ing 形で「環境」。what her life would have been like if she had stayed は仮定法過去完了の間接疑問「とどまっていたら人生はどんなものになっていたか」。','regret と try の後ろの形',true)
]});

/* ================= §16 分詞(1) ================= */
L.push({k:'ks16',no:'§16',title:'分詞(1)　名詞を修飾する分詞・補語の分詞',sub:'現在分詞は「〜している」、過去分詞は「〜された」',
body:`
# 16-1 現在分詞と過去分詞の意味
: 分詞が名詞を修飾するとき、**名詞が「する側」なら現在分詞（doing）、「される側」なら過去分詞（done）**。
= 16-1-1|a {crying} child|**泣いている**子ども（子どもが泣く）
= 16-1-2|a {broken} window|**割れた**窓（窓が割られた）
: 自動詞の過去分詞は「〜してしまった（完了）」の意味になる：fallen leaves（落ち葉）、a retired teacher（退職した先生）、escaped prisoners（脱走した囚人）。
# 16-1-A 感情を表す分詞
: 感情動詞（surprise / bore / interest など）は「人を〜させる」なので、**物が人を〜させる → -ing、人が〜させられる → -ed**。
| an interesting book | おもしろい本（本が人を興味づける）
| an interested audience | 興味を持った聴衆
| a boring lecture | 退屈な講義
| bored students | 退屈した学生
| a confusing explanation | わかりにくい説明
| confused customers | 混乱した客
x I was boring during the lecture.（「私は退屈な人間だった」の意味になってしまう）

# 16-2 前置修飾と後置修飾
: 分詞が**1語なら名詞の前**、**語句を伴うなら名詞の後ろ**に置く。後置修飾の分詞句は、関係詞節と同じように「後ろから名詞にかかる」。
= 16-2-1|The man {standing by the door} is my uncle.|**ドアのそばに立っている**男性は私のおじだ。
: The man ... is my uncle が骨組み。standing by the door が man を修飾。
- 16-2-2|Most of the cars {made in this factory} are exported.|**この工場で作られた**車の大半は輸出される。
- 16-2-3|There were hundreds of people {waiting for the bus}.|**バスを待っている**人が何百人もいた。
> 読解の最大のポイント：**名詞の後ろの過去分詞**は、述語動詞（過去形）と形が同じ。The students given the award were ... の given は「与えられた」で、述語動詞は were。動詞が2つあるように見えたら、どちらかが分詞ではないかを疑う。
= 16-2-4|The money {raised at the concert} {was} given to the hospital.|コンサートで**集められたお金**は病院に寄付された。
: raised は過去分詞で money を修飾、述語動詞は was given。raised を「集めた」と述語に読むと文が成立しない。

# 16-3 補語になる分詞（SVC・SVOC）
: 分詞は補語にもなる（§1、§3の復習）。O と C の関係が能動なら doing、受動なら done。
- 16-3-1|She sat {surrounded} by her students.|彼女は生徒たちに**囲まれて**座っていた。（SVC）
- 16-3-2|I heard my name {called}.|自分の名前が**呼ばれる**のが聞こえた。（SVOC）
- 16-3-3|Keep the engine {running}.|エンジンを**かけたままにして**おいて。（SVOC）
- 16-3-4|The news left everyone {shocked}.|その知らせに、誰もが**衝撃を受けた**。（SVOC・無生物主語）
`,
drills:[
ej('ks16d1','The children {playing} in the park are from the local school.','公園で**遊んでいる**子どもたちは地元の学校の生徒だ。','後置修飾の現在分詞。述語動詞は are。'),
ej('ks16d2','The letters {written} by the soldier were found in an old box.','その兵士が**書いた**手紙が古い箱の中から見つかった。','written by 〜 は letters を修飾する過去分詞。述語動詞は were found。「書かれた手紙」は「〜が書いた手紙」と訳すと自然。'),
ej('ks16d3','The audience looked {bored} during the long speech.','長い演説の間、聴衆は**退屈そう**だった。','感情を表す分詞。人が主語なので -ed。'),
ej('ks16d4','Workers {employed} by the company {received} a bonus.','その会社に**雇われている**従業員はボーナスを**受け取った**。','employed は過去分詞（後置修飾）、received が述語動詞。'),
ej('ks16d5','I had to shout to make myself {heard} above the noise.','騒音の中で**声を届かせる**には、叫ばなければならなかった。','make oneself heard「自分の声を聞いてもらう」。myself と heard は受動関係。'),
ej('ks16d6','Most of the plastic produced in the world is used only once. {The bottles and bags thrown away every day end up in the ocean, where they break down into tiny pieces eaten by fish and other sea creatures.}','世界で生産されるプラスチックの大半は一度しか使われない。**毎日捨てられるボトルや袋は最終的に海に行き着き、そこで細かいかけらに分解され、それを魚やほかの海の生き物が食べてしまう**。','【構造】The bottles and bags が S、thrown away every day は過去分詞の後置修飾、end up が V。where 以下は the ocean を説明する非制限用法の関係副詞。\n【ポイント】tiny pieces eaten by fish ... の eaten も過去分詞の後置修飾「魚に食べられる細かいかけら」。日本語では「〜それを魚が食べる」と前から訳し下すと自然。thrown を述語動詞と読まないこと。','述語動詞はどれか',true)
]});

/* ================= §17 分詞(2) 分詞構文 ================= */
L.push({k:'ks17',no:'§17',title:'分詞(2)　分詞構文',sub:'接続詞を省いた副詞句を、文脈で意味づけする',
body:`
# 17-1 分詞構文の基本
: 分詞で始まる句が**文全体を修飾する副詞**として働く形。「時・理由・条件・譲歩・付帯状況・連続動作」のどれかを、**主節との関係から判断**して訳す。
= 17-1-1|{Walking along the beach}, I found a beautiful shell.|**浜辺を歩いていると**、きれいな貝殻を見つけた。（時）
- 17-1-2|{Feeling tired}, she went to bed early.|**疲れていたので**、彼女は早く寝た。（理由）
- 17-1-3|{Turning to the left}, you will see the post office.|**左に曲がれば**、郵便局が見えます。（条件）
- 17-1-4|{Admitting what you say}, I still can't agree.|**君の言うことは認めるが**、それでも賛成できない。（譲歩）
- 17-1-5|He sat on the sofa, {reading a magazine}.|彼は雑誌を**読みながら**ソファに座っていた。（付帯状況）
- 17-1-6|The train left Tokyo at nine, {arriving in Osaka at noon}.|列車は9時に東京を出て、正午に大阪に**着いた**。（連続動作）
> 迷ったら「〜して、」「〜し、」と**ゆるくつないで訳す**のが安全。無理に「〜なので」と決めつけると誤訳になることがある。

# 17-2 分詞構文のいろいろな形
[分詞構文の形]
| Having done 〜 | 主節より前のこと（〜してしまったので／〜した後で）
| (Being) done 〜 | 受動（〜されて）。Being は省略されることが多い
| Not doing 〜 | 否定（〜しないので）。not は分詞の前
| 接続詞＋分詞 | 意味を明確にする（While walking / When asked / Though living）
| 名詞＋分詞（独立分詞構文） | 分詞の意味上の主語が主節と違う
= 17-2-1|{Having finished} her homework, she went out to play.|宿題を**終えてから**、彼女は遊びに出かけた。
- 17-2-2|{Written} in simple English, the book is easy to read.|やさしい英語で**書かれているので**、その本は読みやすい。
- 17-2-3|{Not knowing} what to say, I remained silent.|何と言えばいいか**わからなかったので**、黙っていた。
- 17-2-4|{When asked} about the accident, he refused to comment.|事故について**質問されると**、彼はコメントを拒んだ。

# 17-3 独立分詞構文・with 構文
: 分詞の意味上の主語が主節の主語と違うときは、分詞の前に**名詞**を置く。
= 17-3-1|{The weather being} fine, we went on a picnic.|**天気がよかったので**、ピクニックに出かけた。
- 17-3-2|{All things considered}, the trip was a success.|**すべてを考え合わせると**、旅行は成功だった。
- 17-3-3|{Weather permitting}, the game will be held tomorrow.|**天気がよければ**、試合は明日行われる。
[慣用的な独立分詞構文]
| generally speaking | 一般的に言えば
| frankly speaking | 率直に言えば
| judging from 〜 | 〜から判断すると
| considering 〜 | 〜を考えると
| given 〜 | 〜を考慮すると、〜があれば
| speaking of 〜 | 〜と言えば
: **with＋名詞＋分詞**は「〜を…して、〜が…した状態で」という付帯状況。
= 17-3-4|She listened to music {with her eyes closed}.|彼女は**目を閉じて**音楽を聴いた。
- 17-3-5|Don't talk {with your mouth full}.|口に**食べ物を入れたまま**しゃべってはいけない。
- 17-3-6|{With winter coming}, we need to buy warm clothes.|**冬が近づいてきたので**、暖かい服を買う必要がある。
`,
drills:[
ej('ks17d1','{Seen} from the plane, the city looked like a toy town.','飛行機から**見ると**、その町はおもちゃの町のように見えた。','受動の分詞構文。Being が省略されている。都市が「見られる」側。'),
ej('ks17d2','{Not having} enough money, he couldn\'t buy the book.','お金が十分に**なかったので**、彼はその本を買えなかった。','否定の分詞構文。not は分詞の前。'),
ej('ks17d3','{Having lived} in Paris for ten years, she speaks French fluently.','パリに10年**住んでいたので**、彼女はフランス語を流暢に話す。','Having done は主節より前のこと。理由の意味。'),
ej('ks17d4','{Judging from} his accent, he must be from the north.','なまり**から判断すると**、彼は北部の出身に違いない。','慣用的な独立分詞構文。'),
ej('ks17d5','He stood in the rain {with his hands} in his pockets.','彼は**両手を**ポケットに**入れて**雨の中に立っていた。','with＋名詞＋前置詞句の付帯状況。'),
ej('ks17d6','{There being} no bus service, we had to walk to the village.','バスの便が**なかったので**、私たちは村まで歩かなければならなかった。','There is 構文の独立分詞構文。There being 〜「〜があるので／ないので」。'),
ej('ks17d7','The old library was rebuilt in 2010. {Designed to let in as much natural light as possible, the new building uses far less electricity than the old one, saving the city a great deal of money each year.}','古い図書館は2010年に建て直された。**できるだけ多くの自然光を取り込むように設計されているため、新しい建物は古い建物よりもはるかに使う電気が少なく、その結果、市は毎年多額の費用を節約できている**。','【構造】Designed to ... possible は受動の分詞構文（理由）。主節は the new building uses far less electricity。saving ... は文末の分詞構文（結果・連続動作）。\n【ポイント】let in 〜「〜を入れる」。save O₁ O₂「O₁のO₂を省く」（§2）。文末の分詞構文は「そして〜」「その結果〜」と訳し下す。','文頭と文末の分詞構文',true)
]});

/* ================= §18 否定(1) ================= */
L.push({k:'ks18',no:'§18',title:'否定(1)　部分否定・全体否定・二重否定',sub:'not の位置と組み合わせで意味が変わる',
body:`
# 18-1 全体否定と部分否定
: **not＋all / every / always / both / necessarily / completely** などは「すべて〜というわけではない」という**部分否定**になる。全部を否定するには no / none / never / neither を使う。
[部分否定と全体否定]
| not all / not every | すべてが〜というわけではない
| none / no | 1つも〜ない
| not always | いつも〜というわけではない
| never | 決して〜ない
| not both | 両方とも〜というわけではない
| neither | どちらも〜ない
| not necessarily | 必ずしも〜ではない
| not completely [entirely] | 完全に〜というわけではない
= 18-1-1|{Not all} birds can fly.|鳥が**みな**飛べる**わけではない**。
= 18-1-2|{None of} the students knew the answer.|生徒は**誰も**答えを知らなかった。
- 18-1-3|The rich are {not always} happy.|金持ちが**いつも**幸せ**とは限らない**。
- 18-1-4|I {don't know both} of them.|彼らの**両方を**知っている**わけではない**（1人しか知らない）。
- 18-1-5|What the newspapers say is {not necessarily} true.|新聞が言うことが**必ずしも**正しい**わけではない**。
> All ... not 〜 の語順（All that glitters is not gold.「光るものすべてが金とは限らない」）も原則は部分否定。

# 18-2 二重否定
: 否定語が2つ重なると、**強い肯定**になる。
= 18-2-1|There is {no} rule {without} exceptions.|例外の**ない**規則は**ない**（どんな規則にも例外がある）。
- 18-2-2|They {never} meet {without} quarreling.|彼らは会えば**必ず**けんかをする。
: never A without B「Aすれば必ずBする」。
- 18-2-3|It is {not uncommon} for students to work part-time.|学生がアルバイトをするのは**珍しいことではない**。
: not＋否定の接頭辞（un- / in- / im-）は控えめな肯定。「〜でないわけではない」→「かなり〜だ」と訳すことも多い。
- 18-2-4|{Nobody} is {so} busy {that} they can't find a few minutes to read.|数分の読書時間も見つけられ**ないほど**忙しい人は**いない**。

# 18-3 否定の強調・否定の範囲
[否定を強める表現]
| not 〜 at all / not 〜 in the least | まったく〜ない
| by no means / not 〜 by any means | 決して〜ない
| far from 〜 | 〜からほど遠い、決して〜ではない
| no longer / not 〜 any longer | もはや〜ない
| not 〜 a bit | 少しも〜ない（not a little は「少なからず」）
- 18-3-1|His explanation was {by no means} clear.|彼の説明は**決して**わかりやすく**なかった**。
- 18-3-2|The problem is {far from} solved.|問題は解決**からほど遠い**。
- 18-3-3|She was {not a little} surprised.|彼女は**少なからず**（かなり）驚いた。
: not a little = very much。not a bit = not at all。1語の違いで意味が逆になる。
# 18-3-A not … because 〜 の否定の範囲
= 18-3-4|I didn't marry her {because} she was rich.|彼女が金持ちだ**から**結婚した**のではない**。
: not が because 以下を否定している。「金持ちだったので結婚しなかった」とも読めるが、文脈で判断する。because の前にコンマがあれば「〜なので…しなかった」と読むのが普通。
`,
drills:[
ej('ks18d1','{Not every} student in the class agreed with the teacher.','クラスの生徒が**みな**先生に賛成した**わけではない**。','not every は部分否定。'),
ej('ks18d2','Expensive restaurants are {not necessarily} better than cheap ones.','高いレストランが安い店より**必ずしも**よい**わけではない**。','not necessarily「必ずしも〜ではない」。'),
ej('ks18d3','I {never} see this photo {without} remembering my grandmother.','この写真を見る**と必ず**祖母を思い出す。','never A without B「Aすれば必ずBする」。二重否定で強い肯定。'),
ej('ks18d4','His new novel is {far from} perfect.','彼の新しい小説は完璧**からはほど遠い**。','far from 〜「決して〜ではない」。'),
ej('ks18d5','She was {not a little} disappointed with the result.','彼女はその結果に**少なからず**がっかりした。','not a little「少なからず、かなり」。not a bit「少しも〜ない」と区別。'),
ej('ks18d6','It is {not unusual} to see deer walking through the town at night.','夜に町を鹿が歩いているのを見かけるのは**珍しいことではない**。','not unusual は二重否定の控えめな肯定。see O doing は知覚動詞。'),
ej('ks18d7','We tend to believe that experts are always right. {But a high level of knowledge does not necessarily guarantee good judgment, and not all experts are able to admit when they are wrong.}','私たちは専門家はいつも正しいと思いがちだ。**しかし、高度な知識があるからといって必ずしもよい判断ができるとは限らず、また専門家がみな自分の間違いを認められるわけでもない**。','【構造】2つの節が and でつながっている。1つ目は a high level of knowledge（無生物主語）＋ does not necessarily guarantee、2つ目は not all experts ＋ are able to admit。\n【ポイント】not necessarily と not all はどちらも部分否定。無生物主語を「〜があるからといって」と訳す（§8）。when they are wrong は admit の目的語の名詞節「自分が間違っているとき（＝間違っていること）」。','2つの部分否定',true)
]});

/* ================= §19 否定(2) ================= */
L.push({k:'ks19',no:'§19',title:'否定(2)　否定語のない否定・準否定・否定の倒置',sub:'not がなくても否定の意味になる表現',
body:`
# 19-1 準否定語
: hardly / scarcely / seldom / rarely / few / little は「ほとんど〜ない」「めったに〜ない」という**否定の意味**をもつ。a few / a little（少しはある）との違いに注意。
[準否定語]
| hardly / scarcely | ほとんど〜ない（程度）
| seldom / rarely | めったに〜ない（頻度）
| few + 可算名詞 | ほとんど〜ない（数）
| little + 不可算名詞 | ほとんど〜ない（量）
| only a few / only a little | ほんの少ししか〜ない
- 19-1-1|I could {hardly} believe my eyes.|自分の目が**ほとんど**信じられ**なかった**。
- 19-1-2|My grandfather {seldom} talks about the war.|祖父は戦争のことを**めったに**話さ**ない**。
- 19-1-3|{Few} people understood what he meant.|彼の言いたいことを理解した人は**ほとんどいなかった**。
- 19-1-4|There is {little} hope of finding survivors.|生存者が見つかる望みは**ほとんどない**。

# 19-2 否定語を使わない否定表現
[not がないのに否定の意味になる表現]
| the last 人 to do | 最も〜しそうにない人
| fail to do | 〜しない、できない
| be free from 〜 | 〜がない
| anything but 〜 | 決して〜ではない
| far from 〜 | 決して〜ではない
| above 〜ing | 〜するようなことはしない
| beyond 〜 | 〜できない（beyond description「言葉で表せない」）
| remain to be done | まだ〜されていない
| have yet to do | まだ〜していない
| the last thing 人 want | 人が最も望まないもの
- 19-2-1|The test was {anything but} easy.|テストは**決して**簡単**ではなかった**。
: anything but 〜「決して〜ではない」と nothing but 〜「〜だけ、〜にすぎない」を区別する。
- 19-2-2|He is {above telling} lies.|彼は**うそをつくような人ではない**。
- 19-2-3|The beauty of the view was {beyond description}.|その景色の美しさは**言葉では言い表せなかった**。
- 19-2-4|Much {remains to be done}.|**まだ**やるべきことがたくさん**ある**（多くのことがまだなされていない）。
- 19-2-5|{The last thing} I want is to cause you trouble.|あなたに迷惑をかけることだけは**したくない**。

# 19-3 否定語の倒置
: 否定語（never / seldom / little / hardly / not until / only など）が**文頭に出ると、疑問文と同じ語順（倒置）**になる。否定の強調。
= 19-3-1|{Never have I seen} such a beautiful sunset.|こんなに美しい夕日は**一度も見たことがない**。
- 19-3-2|{Little did she know} that her life was about to change.|自分の人生がまさに変わろうとしているとは、彼女は**夢にも思わなかった**。
: Little did S know 〜「Sは〜とは夢にも思わなかった」。
- 19-3-3|{Not until} he lost his job {did he realize} the value of money.|職を失って**初めて**、彼はお金のありがたさに**気づいた**。
- 19-3-4|{Only} then {did I understand} what she had meant.|その時に**なって初めて**、彼女が言いたかったことがわかった。
- 19-3-5|{Hardly had} we arrived {when} it started to rain.|私たちが着く**とすぐに**雨が降り始めた。
: Hardly [Scarcely] had S done when [before] 〜 / No sooner had S done than 〜「Sが〜するとすぐに…」。
> 読解のコツ：文頭の否定語の後ろに助動詞・do / have / be が来ていたら倒置。主語はその後ろにある。
`,
drills:[
ej('ks19d1','{Few} of the guests noticed that the singer had made a mistake.','歌手が間違えたことに気づいた客は**ほとんどいなかった**。','few は「ほとんど〜ない」という否定の意味。'),
ej('ks19d2','The service at the hotel was {anything but} satisfactory.','そのホテルのサービスは**決して**満足のいくもの**ではなかった**。','anything but 〜「決して〜ではない」。'),
ej('ks19d3','{Seldom does} he complain about his work.','彼が仕事について不満を言うことは**めったにない**。','否定語 seldom が文頭に出て倒置。'),
ej('ks19d4','{Little did I dream} that I would one day live in this country.','いつかこの国で暮らすことになるとは**夢にも思わなかった**。','Little did S dream [know, think] that 〜「〜とは夢にも思わなかった」。'),
ej('ks19d5','{No sooner had} the game started {than} it began to snow.','試合が始まる**とすぐに**雪が降り始めた。','No sooner had S done than 〜「Sが〜するとすぐに…」。'),
ej('ks19d6','The cause of the accident {remains to be} explained.','事故の原因は**まだ**解明されて**いない**。','remain to be done「まだ〜されていない」。'),
ej('ks19d7','For centuries, people believed that the brain stopped developing after childhood. {Only in recent decades have scientists discovered that the adult brain can change and form new connections throughout life.}','何世紀もの間、人々は脳は子ども時代を過ぎると発達が止まると信じていた。**ここ数十年になって初めて、科学者たちは大人の脳も一生を通じて変化し、新しいつながりを作れることを発見した**。','【構造】Only in recent decades が文頭に出たため、have scientists discovered と倒置になっている。S は scientists、V は have discovered、O は that 節。\n【ポイント】Only＋副詞句が文頭 →「〜になって初めて」。that 節の中では can change と form が and で並んでいる。throughout life「一生を通じて」。','Only＋副詞句の倒置',true)
]});

/* ================= §20 名詞構文(1) ================= */
L.push({k:'ks20',no:'§20',title:'名詞構文(1)　名詞を文に開く',sub:'「名詞＋of＋名詞」を「主語＋動詞」に戻して訳す',
body:`
# 20-1 名詞構文とは
: 英語では、**動詞や形容詞を名詞化して1つの名詞句に詰めこむ**表現が多い。直訳すると硬い日本語になるので、**名詞句を「主語＋述語」の文に開いて**訳す。§9（無生物主語の名詞）の発展。
= 20-1-1|{The rapid growth of the city} caused many problems.|**その都市が急速に成長したことで**、多くの問題が起きた。
: growth ← grow、the city が grow の主語、rapid ← rapidly。「都市の急速な成長」より「都市が急速に成長したこと」の方が自然。
[名詞を開く手順]
| ① 動詞・形容詞から派生した名詞を見つける | growth ← grow, ability ← able, importance ← important
| ② of 〜／所有格が主語か目的語かを判断 | the arrival of guests（客が着く）/ the discovery of gold（金を発見する）
| ③ 形容詞を副詞として訳す | rapid → 急速に、frequent → 頻繁に
| ④ 「〜すること」「〜したので」など文脈に合わせてつなぐ |

# 20-2 of が「主語」か「目的語」か
: 名詞＋of＋名詞の of は、**自動詞由来なら主語、他動詞由来なら目的語**になることが多い。両方の可能性があるときは文脈で判断する。
= 20-2-1|the {arrival} of the guests|**客が到着する**こと（主格の of：the guests arrive）
= 20-2-2|the {protection} of wildlife|**野生生物を保護する**こと（目的格の of：protect wildlife）
- 20-2-3|{The rise} of AI has changed the way we work.|**AIが台頭したこと**で、私たちの働き方は変わった。
- 20-2-4|{The destruction} of the rain forest is a serious problem.|**熱帯雨林が破壊されていること**は深刻な問題だ。
: 他動詞由来でも、「〜が破壊される」と受動で開くと自然な場合が多い。
- 20-2-5|{His love} of music began in childhood.|**彼が音楽を愛するようになった**のは子どものころだった。
: 所有格 His が主語、of music が目的語。主語と目的語が両方ある名詞構文。
- 20-2-6|{The government's refusal} to accept the proposal angered the public.|**政府がその提案を受け入れることを拒んだので**、国民は怒った。

# 20-3 形容詞由来の名詞
: ability / difficulty / importance / necessity / possibility / absence / presence などの名詞も、形容詞の文に開くとわかりやすい。
- 20-3-1|{The importance} of exercise cannot be overstated.|**運動が重要であることは**、いくら強調してもしすぎることはない。
- 20-3-2|{Her absence} from the meeting surprised us.|**彼女が会議を欠席したことに**、私たちは驚いた。
- 20-3-3|{The possibility} of an earthquake worries many residents.|**地震が起こるかもしれないことを**、多くの住民が心配している。
> 訳の決め手：「AのB」と訳して不自然に感じたら、Bを動詞・形容詞に戻して「AがBする（である）こと」と開いてみる。
`,
drills:[
ej('ks20d1','{The sudden death} of the president shocked the nation.','**大統領が突然亡くなったことに**、国民は衝撃を受けた。','death ← die。sudden を副詞的に「突然」と訳す。'),
ej('ks20d2','{The invention} of the printing press changed the history of Europe.','**印刷機が発明されたことで**、ヨーロッパの歴史は変わった。','invention ← invent。目的格の of を受動で開く。'),
ej('ks20d3','{Her frequent visits} to the hospital worried her friends.','**彼女が頻繁に病院に通っていたので**、友人たちは心配した。','visit を動詞に、frequent を副詞に戻す。'),
ej('ks20d4','{The difficulty} of the exam surprised even the best students.','**試験が難しかったので**、優秀な生徒でさえ驚いた。','difficulty ← difficult。形容詞の文に開く。'),
ej('ks20d5','{The country\'s dependence} on imported oil makes it vulnerable.','**その国が輸入石油に依存しているので**、弱い立場に置かれている。','dependence on 〜 ← depend on 〜。make O C の無生物主語。it は the country。'),
ej('ks20d6','In the 19th century, many people moved from the countryside to cities in search of work. {The rapid expansion of factories and the lack of proper housing led to the growth of crowded and unhealthy neighborhoods.}','19世紀には、多くの人が仕事を求めて田舎から都市へ移った。**工場が急速に増え、きちんとした住宅が不足していたため、混雑した不衛生な地区が広がった**。','【構造】The rapid expansion of factories と the lack of proper housing が and で並ぶ S、led to が V。\n【ポイント】expansion ← expand（工場が拡大する）、lack ← lack（住宅が不足する）、growth ← grow（地区が広がる）と、3つの名詞をすべて文に開く。lead to 〜「〜につながる、〜をもたらす」は「〜のため…になった」と訳す。','名詞を3つ開く',true)
]});

/* ================= §21 名詞構文(2) ================= */
L.push({k:'ks21',no:'§21',title:'名詞構文(2)　have / give / make＋名詞・前置詞＋名詞',sub:'動詞を名詞で表す英語らしい言い方',
body:`
# 21-1 「動詞＋a＋名詞」の表現
: have a look（見る）、take a walk（散歩する）のように、**軽い動詞＋動作名詞**で1つの動詞の意味を表す。名詞につく形容詞は**副詞として訳す**。
[軽い動詞＋名詞]
| have a look at 〜 | 〜を見る
| take a walk / take a rest | 散歩する／休む
| make an effort | 努力する
| make a decision | 決定する
| give a speech | 演説する
| pay a visit to 〜 | 〜を訪れる
| make progress | 進歩する
| have an influence on 〜 | 〜に影響を与える
= 21-1-1|She {made a quick decision}.|彼女は**すばやく決断した**。
: quick は decision を修飾する形容詞だが、日本語では「すばやく」と副詞で訳す。
- 21-1-2|He {is a good speaker} of English.|彼は英語を**上手に話す**。
: a good speaker of 〜「〜を上手に話す人」→「〜を上手に話す」。a fast runner（足が速い）、an early riser（早起きだ）、a heavy smoker（たばこをよく吸う）なども同じ。
- 21-1-3|My father {is a poor cook}.|父は**料理が下手だ**。
- 21-1-4|The medicine {had a strong effect} on the patient.|その薬は患者に**よく効いた**。

# 21-2 「前置詞＋名詞」を節に開く
: 前置詞＋抽象名詞が、**接続詞＋節**の意味になる。
[前置詞＋名詞を節に開く]
| on arrival | 着いたら、着くとすぐに
| after [before] 〜 | 〜した後で／する前に
| despite [in spite of] 〜 | 〜にもかかわらず
| because of / due to 〜 | 〜なので
| for fear of 〜 | 〜しないように
| in case of 〜 | 〜の場合には
| with 〜 | 〜があれば、〜のおかげで
| without 〜 | 〜がなければ
| for all 〜 | 〜にもかかわらず
= 21-2-1|{On his arrival} at the station, he called me.|駅に**着くとすぐに**、彼は私に電話した。
- 21-2-2|{Despite the heavy rain}, the game continued.|**大雨が降っていたにもかかわらず**、試合は続けられた。
- 21-2-3|{For all his wealth}, he is not happy.|**あれほど金持ちなのに**、彼は幸せではない。
- 21-2-4|{Without your help}, I couldn't have finished.|**君が手伝ってくれなかったら**、終えられなかっただろう。（仮定法）
- 21-2-5|{After a long discussion}, they reached an agreement.|**長い間話し合った後で**、彼らは合意に達した。

# 21-3 同格の of・that
: 「名詞＋of＋名詞」や「名詞＋that 節」が**同格（A＝B）**を表すことがある。「BというA」と訳す。
= 21-3-1|the city {of Kyoto}|**京都という**都市
- 21-3-2|the idea {that the earth is flat}|**地球は平らだという**考え
- 21-3-3|There is no doubt {that he is innocent}.|**彼が無実であることは**疑いない。
: 同格の that 節をとる名詞：fact / idea / belief / news / hope / possibility / evidence / doubt / opinion。関係代名詞の that（後ろが不完全）と違い、同格の that 節は**完全な文**。
`,
drills:[
ej('ks21d1','She {is an excellent swimmer}.','彼女は**泳ぐのがとても上手だ**。','a good [excellent] 〜er は「〜するのが上手だ」と動詞に開いて訳す。'),
ej('ks21d2','The new teacher {has had a great influence} on the students.','新しい先生は生徒たちに**大きな影響を与えている**。','have an influence on 〜「〜に影響を与える」。great を「大きな」と訳す。'),
ej('ks21d3','{For all his efforts}, he could not pass the exam.','**あれほど努力したのに**、彼は試験に合格できなかった。','for all 〜「〜にもかかわらず」。名詞を節に開く。'),
ej('ks21d4','{The news that} the war had ended spread quickly.','**戦争が終わったという**知らせはすぐに広まった。','同格の that 節。that 以下は完全な文。'),
ej('ks21d5','{On my return} home, I found the window broken.','**帰宅すると**、窓が割られていた。','on one\'s return「戻るとすぐに」。find O done「Oが〜されているのに気づく」。'),
ej('ks21d6','Some scientists once held the belief that the human mind works like a computer. {Today, however, there is growing evidence that our thinking depends heavily on our emotions and on the bodies we live in.}','かつて一部の科学者は、人間の心はコンピューターのように働くという考えを持っていた。**しかし今日では、私たちの思考は感情や、私たちが生きている身体に大きく左右されるという証拠が増えつつある**。','【構造】there is growing evidence that 〜。evidence の後の that 節は同格で「〜という証拠」。that 節の中は our thinking が S、depends が V、on our emotions と on the bodies ... が and で並ぶ。\n【ポイント】the bodies (which) we live in は関係代名詞の省略。growing evidence を「増えつつある証拠」→「証拠が増えつつある」と開く。','evidence that の that は何？',true)
]});

/* ================= §22 名詞構文(3) ================= */
L.push({k:'ks22',no:'§22',title:'名詞構文(3)　総合演習・直訳から意訳へ',sub:'構造をとらえた直訳を、自然な日本語に仕上げる',
body:`
# 22-1 訳の手順
: 英文和訳は、**①構造をとらえる → ②直訳する → ③自然な日本語に直す**の3段階で考える。§1〜§21の技術はすべて③のための道具。
[意訳のための技術（まとめ）]
| 無生物主語 | 主語を原因・手段・条件に、目的語の人を主語に（§8・§9）
| 名詞構文 | 名詞を「主語＋動詞」に開く（§20・§21）
| 受動態 | 能動で訳したほうが自然なら能動に（by 〜 を主語に）
| 長い修飾語 | 後ろから訳し上げず、2文に分けて前から訳し下す
| 代名詞 | it / this / they が指すものを明示する
| 抽象名詞の複数形 | 具体的なものとして訳す（kindnesses「親切な行為」）
= 22-1-1|{The failure of the government to deal with the crisis quickly} led to a loss of public trust.|**政府が危機に迅速に対処しなかったため**、国民の信頼が**失われた**。
: 直訳「危機に迅速に対処することの政府の失敗は国民の信頼の喪失につながった」→ failure と loss を開き、無生物主語を理由に訳す。

# 22-2 受動態の訳し方
: 英語の受動態を、そのまま「〜される」と訳すと不自然なことがある。**行為者（by 〜）を主語にして能動で訳す**、または**「〜が…された」を自動詞的に訳す**と自然。
- 22-2-1|The novel {was written} by a 15-year-old girl.|その小説は15歳の少女が**書いた**ものだ。
- 22-2-2|Many lives {were lost} in the flood.|洪水で多くの命が**失われた**（多くの人が亡くなった）。
- 22-2-3|English {is spoken} in many countries.|英語は多くの国で**話されている**。

# 22-3 長い修飾語の訳し下し
: 関係詞節・分詞句が長いとき、すべてを名詞の前に置くと読みにくい日本語になる。**いったん文を切って前から訳す**。
= 22-3-1|I met an old man {who told me that he had walked across the country when he was young}.|私はある老人に会った。**その人は**、若いころに国を歩いて横断したことがあると私に話してくれた。
- 22-3-2|Scientists have found a new species of frog {that changes its color depending on the temperature}.|科学者たちは新種のカエルを発見した。**そのカエルは**気温によって体の色を変える。
> 訳し下すときは「その人は」「そのカエルは」のように、名詞を受け直す言葉を補う。非制限用法（コンマのある関係詞）は必ず訳し下す。

# 22-4 抽象名詞の複数形・具体化
- 22-4-1|Thank you for all your {kindnesses}.|いろいろと**親切にしていただき**ありがとうございました。
- 22-4-2|She is {a beauty}.|彼女は**美人**だ。
- 22-4-3|He is {the pride} of his family.|彼は家族の**自慢の種**だ。
: 抽象名詞に a がついたり複数形になったりすると、「〜な人・もの・行為」という具体的な意味になる。
`,
drills:[
ej('ks22d1','{The loss of his job} forced him to sell his house.','**職を失ったため**、彼は家を**売らざるをえなかった**。','名詞構文＋無生物主語。loss ← lose。force O to do。'),
ej('ks22d2','{A failure to act now} will result in higher costs later.','**今行動しなければ**、後でより多くの費用がかかるだろう。','failure to do「〜しないこと」を条件に訳す。result in 〜「〜という結果になる」。'),
ej('ks22d3','The temple {is visited} by thousands of tourists every year.','その寺には毎年何千人もの観光客が**訪れる**。','受動態を能動で訳す。by 以下を主語にする。'),
ej('ks22d4','The city has many parks {which are full of people on weekends}.','その都市には公園がたくさんあり、**どれも**週末には人でいっぱいになる。','関係詞節を訳し下す。'),
ej('ks22d5','Her knowledge of local history made her the perfect guide for our tour.','**彼女は地元の歴史に詳しかったので**、私たちのツアーにうってつけのガイドだった。','knowledge of 〜 ← know 〜。make O C の無生物主語を理由に訳す。'),
ej('ks22d6','The increasing use of smartphones among young children has raised concerns among parents and teachers. {Their worry is that the time spent looking at screens may reduce opportunities for the face-to-face communication that is essential to the development of social skills.}','幼い子どもの間でスマートフォンの使用が増えていることに、親や教師は懸念を抱いている。**彼らが心配しているのは、画面を見て過ごす時間のせいで、社会性を身につけるのに欠かせない対面でのコミュニケーションの機会が減ってしまうのではないかということだ**。','【構造】Their worry が S、is が V、that 節が C。that 節の中では the time spent looking at screens が S（spent は過去分詞の後置修飾）、may reduce が V、opportunities for ... が O。that is essential ... は communication を修飾する関係代名詞節。\n【ポイント】Their worry is that 〜 は「彼らが心配しているのは〜ということだ」と開く。the development of social skills は「社会性が発達すること」→「社会性を身につけること」。the time ... may reduce は無生物主語なので「〜のせいで…が減る」と訳す。','1文に何が詰まっているか',true)
]});
})();
