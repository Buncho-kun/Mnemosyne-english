// 英作文（表現テーマ＋論理構成）第1課〜第11課 ― 例文・解説・問題はすべてこのアプリ用に作成
(function(){
const D=window.EIGO_DATA;
const L=[];
const tr=(k,ja,models,point,hint)=>({k,kind:'tr',ja,models:Array.isArray(models)?models:[models],point,hint:hint||''});
const fr=(k,en,ja,words,model,point)=>({k,kind:'free',en,ja,words,models:[model],point});

/* ===== 第1課 ===== */
L.push({k:'es1',no:'第1課',title:'「知っている・知る」／論理構成1 帰結と理由',sub:'know は「状態」、「知る」は learn / find out / realize',
body:`
# A. 「知っている」と「知る」
: 日本語の「知る」をそのまま know にすると誤りになることが多い。**know は「知っている」という状態**を表す動詞で、「（新たに）知る」という**変化**は表せない。
= 1-1|I {know} her phone number.|彼女の電話番号を**知っている**。（状態）
= 1-2|I {learned} the news from the radio.|ラジオでその知らせを**知った**。（変化）
x I knew the news from the radio.
[「知る」の使い分け]
| learn | 情報・事実を知る（聞いて・読んで）／学んで身につける
| find out | 調べて・尋ねて事実を突きとめる
| hear (of / about) | 聞いて知る
| realize | （それまで気づかなかったことに）気づく、悟る
| notice | 目や耳で気づく
| discover | （存在を）発見する、初めて知る
| get to know | （人・場所と）知り合う、なじむ
| come to know | （時間をかけて）わかるようになる
- 1-3|Please {find out} what time the museum opens.|博物館が何時に開くか**調べて**ください。
- 1-4|It was only later that I {realized} how much she had helped me.|彼女がどれほど助けてくれたか、後になって初めて**わかった**。
- 1-5|We {got to know} each other at university.|私たちは大学で**知り合った**。
# A-2 「知っている」の程度
| know A | Aを（直接）知っている、Aと面識がある
| know of [about] A | Aのことを（間接的に）知っている
| be familiar with A | Aをよく知っている、Aに詳しい
| be aware of A | Aに気づいている、Aを認識している
| be known to 人 | 人に知られている
| be known for A | Aで有名だ
| be known as A | Aとして知られている
- 1-6|I {know of} the writer, but I've never read her books.|その作家の**ことは知っている**が、本は読んだことがない。
- 1-7|Are you {aware of} the risks?|その危険**を認識して**いますか。
- 1-8|Kyoto {is known for} its old temples.|京都は古い寺**で有名だ**。
x Kyoto is known by its old temples.
> 「〜を知らなかった」も要注意：「彼が結婚したとは知らなかった」は I didn't know (that) he had married. で自然（知らない状態）。「まだ知らない」は I haven't heard yet. も使える。

# B. 論理構成1　帰結と理由
: 英語の論説文は**「主張（帰結）→ 理由」**の順が基本。日本語のように理由を長々と述べてから結論を言うのではなく、**最初に結論**を言い、すぐに理由で支える。
[帰結と理由をつなぐ表現]
| because S V | 〜なので（理由を後から述べる最も基本の形）
| This is because S V | これは〜だからである（前文の理由）
| The reason is that S V | その理由は〜だ
| so S V / therefore / as a result | だから／したがって／その結果
| That is why S V | そういうわけで〜（前文が理由、後ろが結果）
= 1-9|I think students should learn to cook. {This is because} cooking helps them become independent.|生徒は料理を学ぶべきだと思う。**というのは**、料理によって自立できるようになる**からだ**。
- 1-10|She missed the last train. {That is why} she took a taxi.|彼女は終電を逃した。**だから**タクシーに乗ったのだ。
x This is why she missed the last train, she took a taxi.（This is why と That is why の後ろには「結果」が来る）
> 注意：because 節**だけ**では文にならない。× Because I was tired. は誤り（会話以外では使わない）。必ず主節と組み合わせる。
> 書き方の型：**主張 → This is because 〜 → 具体例 → (Therefore) 主張の確認**
`,
drills:[
tr('es1d1','その知らせはインターネットで知った。',['I learned the news on the Internet.','I found out about the news online.'],'「知った」は変化なので learn / find out。know は使えない。'),
tr('es1d2','日本に来て初めて、桜の美しさを知った。',['It was not until I came to Japan that I realized how beautiful cherry blossoms are.','Only after coming to Japan did I realize how beautiful cherry blossoms are.'],'「初めて知った」は realize。It was not until 〜 that …（英文解釈§6）を使える。不変の事実なので are でもよい。'),
tr('es1d3','彼とは中学のころからの知り合いだ。',['I have known him since junior high school.','He and I have known each other since we were in junior high school.'],'「〜からの知り合い」は have known 〜 since で継続を表す。'),
tr('es1d4','この町は温泉で有名だ。',['This town is known for its hot springs.','This town is famous for its hot springs.'],'be known for「〜で有名だ」。by は使わない。'),
tr('es1d5','私は電車通学がいいと思う。なぜなら、移動中に本が読めるからだ。',['I think commuting by train is better. This is because I can read books on the way.','I prefer going to school by train because I can read while I travel.'],'主張 → This is because 〜 の型。because 節だけを独立させない。'),
tr('es1d6','彼は寝坊した。だから会議に遅れたのだ。',['He overslept. That is why he was late for the meeting.','He overslept, so he was late for the meeting.'],'That is why の後ろは結果。This is because の後ろは理由。混同に注意。'),
fr('es1d7','Is it better to learn about other countries through books or by traveling?','外国について知るには、本と旅行のどちらがよいか。理由を添えて答えなさい。','60～80語','I think traveling is a better way to learn about other countries. This is because we can experience things that books cannot teach us. For example, when I visited Thailand, I realized how important religion is in people\'s daily lives by watching them pray at temples every morning. I had read about this before, but I did not really understand it until I saw it myself. That is why I believe traveling gives us deeper knowledge than books.','主張 → This is because（理由）→ For example（体験）→ That is why（結論）。learn / realize / understand を使い分ける。')
]});

/* ===== 第2課 ===== */
L.push({k:'es2',no:'第2課',title:'時間的な区切りと可算・不可算／論理構成2 理由2',sub:'名詞の数え方と、理由を2つ並べる書き方',
body:`
# A. 時間の区切りを表す表現
: 「〜の間」「〜までに」「〜以来」などは、日本語の感覚で前置詞を選ぶと誤りやすい。
[時間の前置詞・接続詞]
| for 期間 | 〜の間（for three years）
| during 特定の期間 | 〜の間に（during the summer vacation）
| while S V | 〜している間に（接続詞）
| until [till] | 〜までずっと（継続の終点）
| by | 〜までに（期限）
| since 過去の一点 | 〜以来（完了形と）
| in 時間 | （今から）〜後に（in two hours）
| within 時間 | 〜以内に
- 2-1|I'll wait {until} six.|6時**まで**待ちます。（継続）
- 2-2|Please finish the report {by} Friday.|金曜日**までに**報告書を仕上げてください。（期限）
x Please finish the report until Friday.
- 2-3|He fell asleep {during} the movie.|彼は映画の**間に**眠ってしまった。
x He fell asleep during watching the movie.（during は前置詞で、後ろに動名詞は普通置かない → while watching）
- 2-4|The train will leave {in} ten minutes.|列車は10分**後に**出発します。
x The train will leave after ten minutes.（未来の「〜後」は in）

# A-2 可算名詞と不可算名詞
: 英作文で最も減点されやすいのが**名詞の数**。日本語は数を意識しないので、名詞を書くたびに「数えられるか」「単数か複数か」「冠詞は何か」を確認する。
[間違えやすい不可算名詞]
| information / advice / news | 情報／助言／知らせ（a piece of 〜 で数える）
| furniture / baggage [luggage] | 家具／手荷物
| homework / work | 宿題／仕事（a job は可算）
| equipment / machinery | 装置／機械類
| knowledge / progress / fun | 知識／進歩／楽しみ
| weather / traffic / scenery | 天気／交通／景色
- 2-5|She gave me {some useful advice}.|彼女は役に立つ**助言をいくつか**くれた。
x She gave me many useful advices.
- 2-6|I have {a lot of homework} today.|今日は宿題が**たくさん**ある。
x I have many homeworks today.
- 2-7|There was {heavy traffic} on the highway.|高速道路は**ひどく渋滞していた**。
[可算・不可算で意味が変わる名詞]
| a paper / paper | 新聞、論文／紙
| a room / room | 部屋／余地、空間
| a time / time | 〜回、時代／時間
| an experience / experience | 体験（個々の出来事）／経験（積み重ね）
| a work / work | 作品／仕事
- 2-8|Studying abroad was {a wonderful experience}.|留学は**すばらしい体験**だった。
- 2-9|She has {a lot of experience} in teaching.|彼女は教えることに**豊富な経験**がある。
> 一般論の名詞は**無冠詞の複数形**が基本：I like dogs. / Smartphones are useful.（× I like dog. / × The smartphone is useful. は「総称の the」として誤りではないが、受験では無冠詞複数が安全）

# B. 論理構成2　理由を2つ挙げる
: 主張を支える理由は**2つ**が基本。1つだと弱く、3つだと語数が足りなくなる。理由ごとに**1〜2文の説明**を添える。
[理由を並べる表現]
| First, 〜. Second, 〜. | 第一に／第二に
| First of all, 〜. In addition, 〜. | まず／さらに
| One reason is that 〜. Another reason is that 〜. | 1つの理由は／もう1つの理由は
| Moreover / Furthermore / Besides | さらに、そのうえ
x Firstly 〜. Secondly 〜. Finally 〜.（誤りではないが、2つしかないのに Finally は使わない）
= 2-10|There are two reasons for this. {First}, 〜. {Second}, 〜.|これには理由が2つある。**第一に**〜。**第二に**〜。
> 2つの理由は**別の観点**から選ぶ（例：個人にとっての利点／社会にとっての利点、時間／お金）。似た理由を2つ並べると評価が下がる。
`,
drills:[
tr('es2d1','明日の正午までにこの書類を提出してください。',['Please submit these documents by noon tomorrow.','Please hand in this document by twelve o\'clock tomorrow.'],'期限は by。until は継続。document は可算名詞なので数に注意。'),
tr('es2d2','夏休みの間に、祖父母の家に2週間滞在した。',['During the summer vacation, I stayed at my grandparents\' house for two weeks.','I spent two weeks at my grandparents\' during the summer holidays.'],'during＋特定の期間、for＋期間の長さ。'),
tr('es2d3','先生は私たちにいくつか有益な助言をしてくれた。',['Our teacher gave us some useful advice.','The teacher gave us several pieces of useful advice.'],'advice は不可算。数えるなら pieces of advice。'),
tr('es2d4','彼女は外国で暮らした経験がない。',['She has no experience of living abroad.','She has never lived in a foreign country.'],'不可算の experience（経験の積み重ね）。動詞で書けばもっと簡単になる。'),
tr('es2d5','私が地下鉄を使う理由は2つある。第一に、速い。第二に、渋滞がない。',['There are two reasons why I use the subway. First, it is fast. Second, it is not affected by traffic jams.','I take the subway for two reasons. First, it is quick. Second, there is no traffic on the subway.'],'There are two reasons. First, 〜. Second, 〜. の型。「渋滞がない」は無生物主語で書くと英語らしい。'),
fr('es2d6','Should high school students be allowed to bring smartphones to school?','高校生がスマートフォンを学校に持ってくることを認めるべきか。理由を2つ挙げて答えなさい。','70～90語','I think high school students should be allowed to bring smartphones to school. There are two reasons for this. First, smartphones are important for safety. If there is an earthquake or an accident on the way home, students can contact their families immediately. Second, smartphones can be useful tools for learning. Students can look up information and use dictionary apps during lessons. Of course, schools need clear rules about when phones can be used, but banning them completely is not the answer.','There are two reasons → First（安全）→ Second（学習）と観点を分ける。information は不可算。')
]});

/* ===== 第3課 ===== */
L.push({k:'es3',no:'第3課',title:'「困っている」／論理構成3 理由の説明を深める',sub:'「困る」を具体的な英語に言いかえる',
body:`
# A. 「困っている」の言いかえ
: 「困る」にぴったり対応する英単語はない。**何に困っているのか（お金がない・どうしてよいかわからない・迷惑だ）**を考えて、具体的な表現を選ぶ。
[「困る」の英訳]
| be in trouble | 困った状況にある、苦境にある
| have trouble [difficulty] (in) doing | 〜するのに苦労する
| don't know what to do | どうしてよいかわからない
| be at a loss (for words) | 途方に暮れる（言葉に詰まる）
| be short of 〜 / be hard up | 〜が不足している／お金に困っている
| bother / annoy | （人を）困らせる、いらいらさせる
| be a nuisance [problem] | 迷惑だ、厄介だ
| inconvenient | 不便な、都合が悪い
= 3-1|I {had trouble finding} the hotel.|ホテルを**見つけるのに苦労した**。
- 3-2|When I lost my passport, I {didn't know what to do}.|パスポートをなくしたとき、**どうしたらいいかわからなかった**。
- 3-3|The noise from the construction site {bothers} us.|工事現場の騒音に**困っている**。
- 3-4|Tomorrow is a little {inconvenient} for me.|明日はちょっと**都合が悪い**。
x I am inconvenient tomorrow.（inconvenient は人を主語にしない）
- 3-5|If you {are in trouble}, call me anytime.|**困ったことがあったら**、いつでも電話して。
x If you are troubled, ...（be troubled は「悩んでいる」で意味がずれる）
> 「困ったことに〜」は The trouble [problem] is that 〜 / Unfortunately, 〜 で書ける。

# B. 論理構成3　理由を「説明」で深める
: 理由を1文書いただけでは説得力がない。**理由 → なぜそう言えるか（説明）→ 具体例**の3段で深める。
[説明を加えるときの流れ]
| 理由 | First, smartphones help students study.
| 説明（どういうことか） | They can look up words and watch educational videos at any time.
| 具体例 | For example, I use a dictionary app every day to prepare for English class.
| （まとめ） | In this way, smartphones make studying more efficient.
[説明・具体化に使う表現]
| In other words, 〜 | 言いかえれば
| That is (to say), 〜 | つまり
| This means that 〜 | これは〜ということだ
| In this way, 〜 | このようにして
| As a result, 〜 | その結果
= 3-6|Reading newspapers keeps us informed. {This means that} we can make better decisions as citizens.|新聞を読めば世の中の動きがわかる。**これはつまり**、市民としてよりよい判断ができる**ということだ**。
> 「理由1文＋説明1文＋例1文」で約35語。理由2つで約70語になり、自由英作文の標準的な語数におさまる。
`,
drills:[
tr('es3d1','駅で切符の買い方がわからず困っている外国人を見かけた。',['At the station, I saw a foreign tourist who didn\'t know how to buy a ticket.','I saw a foreigner at the station who was having trouble buying a ticket.'],'「困っている」を don\'t know how to / have trouble doing と具体化する。'),
tr('es3d2','最近、夜眠れなくて困っている。',['Recently I have been having trouble sleeping at night.','These days I find it hard to sleep at night.'],'have trouble doing / find it hard to do。「最近」は現在完了進行形と相性がよい。'),
tr('es3d3','隣の家の犬が夜中に吠えるので困っている。',['The dog next door barks in the middle of the night, which bothers us.','We are annoyed by the neighbor\'s dog, which barks late at night.'],'bother / annoy「困らせる」。, which で前の内容全体を受けられる。'),
tr('es3d4','来週の月曜日は都合が悪いので、火曜日にしてもらえませんか。',['Next Monday is inconvenient for me. Could we make it Tuesday instead?','Monday next week doesn\'t suit me. Would Tuesday be all right?'],'inconvenient は人を主語にしない。make it 〜「〜（日時）にする」。'),
tr('es3d5','読書は想像力を養う。つまり、他人の気持ちを理解する力がつくということだ。',['Reading develops our imagination. This means that it helps us understand other people\'s feelings.','Reading books improves our imagination; in other words, it makes us better at understanding how others feel.'],'This means that 〜 / in other words で説明を加える。'),
fr('es3d6','What do you do when you have a problem you cannot solve by yourself?','自分では解決できない問題があるとき、あなたはどうしますか。','70～90語','When I have a problem that I cannot solve by myself, I talk to someone I trust. First, explaining a problem to another person helps me organize my thoughts. In other words, I often find the answer while I am speaking. For example, when I had trouble choosing a university, talking with my older sister helped me realize what I really wanted to study. Second, other people can give me ideas I would never think of. For these reasons, I believe asking for help is not a weakness.','have trouble doing を使い、理由→In other words（説明）→For example（例）で深める。')
]});

/* ===== 第4課 ===== */
L.push({k:'es4',no:'第4課',title:'「良い点」／論理構成4 理由と目的',sub:'merit ではなく advantage / benefit',
body:`
# A. 「良い点」「悪い点」
: 日本語の「メリット・デメリット」は英語では **advantage / disadvantage** が普通。merit は「長所、価値」の意味で、日本語の「メリット」と同じようには使わない。
[「良い点」の表現]
| advantage (of A / of doing) | 利点、有利な点
| benefit | 恩恵、利益（受け取るよい結果）
| good point / strength | 長所、強み
| be good for 〜 | 〜にとってよい
| be beneficial to 〜 | 〜にとって有益だ
| do 〜 good | 〜のためになる
[「悪い点」の表現]
| disadvantage / drawback | 欠点、不利な点
| weakness / weak point | 弱点
| be bad for 〜 / be harmful to 〜 | 〜に悪い／有害だ
| do 〜 harm | 〜に害を与える
= 4-1|One {advantage of} living in a big city is that public transportation is convenient.|大都市に住むことの**利点の1つは**、公共交通機関が便利なことだ。
x One merit of living in a big city is ...
- 4-2|Regular exercise {does} you a lot of {good}.|定期的な運動は大いに**ためになる**。
- 4-3|Online classes have both {advantages and disadvantages}.|オンライン授業には**長所も短所も**ある。
- 4-4|The new law will {benefit} small businesses.|新しい法律は中小企業に**恩恵をもたらす**だろう。
> One advantage is that S V. / Another advantage is that S V. は自由英作文でそのまま使える型。

# B. 論理構成4　理由と目的の区別
: 「〜のために」は**理由（because）**か**目的（to do / so that）**かを区別する。日本語では同じ「ために」なので混同しやすい。
| 理由 | 雨のために中止になった → because of the rain
| 目的 | 合格するために勉強する → to pass the exam
[目的を表す表現]
| to do / in order to do / so as to do | 〜するために
| so that S can [will] do | Sが〜できるように
| for the purpose of doing | 〜する目的で
| with a view to doing | 〜する目的で
| in order not to do / so as not to do | 〜しないように
= 4-5|I left home early {so that I could} get a good seat.|よい席を**とれるように**早く家を出た。
- 4-6|The game was canceled {because of} the rain.|雨の**ために**試合は中止になった。（理由）
- 4-7|She saves money {to} travel abroad.|彼女は海外旅行をする**ために**お金をためている。（目的）
> 論説文では「目的 → 手段」の関係も明確にする：**To reduce waste, we should bring our own bags.**（ごみを減らすために、エコバッグを持参すべきだ）
`,
drills:[
tr('es4d1','インターネットで買い物をすることの利点の1つは、時間を節約できることだ。',['One advantage of shopping online is that it saves time.','One of the benefits of shopping on the Internet is that we can save time.'],'One advantage of doing is that S V の型。merit は使わない。'),
tr('es4d2','どんなものにも良い点と悪い点がある。',['Everything has its advantages and disadvantages.','Every thing has both good points and bad points.'],'advantages and disadvantages。everything は単数扱い。'),
tr('es4d3','少しの運動でも健康のためになる。',['Even a little exercise does your health good.','Even a small amount of exercise is good for your health.'],'do 〜 good / be good for 〜。exercise（運動）は不可算。'),
tr('es4d4','電車に乗り遅れないように、彼女は駅まで走った。',['She ran to the station so that she would not miss the train.','She ran to the station so as not to miss her train.'],'目的の否定は so that S won\'t / so as not to。'),
tr('es4d5','事故のため、電車は1時間遅れた。',['The train was an hour late because of an accident.','Due to an accident, the train was delayed for an hour.'],'理由の「ために」は because of / due to。目的の to do と区別。'),
fr('es4d6','What are the advantages of living alone while at university?','大学生が一人暮らしをすることの利点は何か。','70～90語','Living alone while at university has several advantages. One advantage is that students become more independent. They have to cook, clean, and manage their money by themselves, so they learn skills they will need as adults. Another advantage is that they can make their own decisions about how to spend their time. For example, they can study late at night without worrying about disturbing their families. Of course, living alone can be lonely, but I believe the benefits are greater than the disadvantages.','One advantage is that 〜. Another advantage is that 〜. の型で書く。')
]});

/* ===== 第5課 ===== */
L.push({k:'es5',no:'第5課',title:'what 節を使いこなす／論理構成5 逆接',sub:'「〜こと・もの」を what でまとめる',
body:`
# A. 関係代名詞 what
: what は「**〜すること・もの**（the thing(s) which）」を表し、名詞節をつくる。日本語の「〜こと」「〜もの」「〜ところ」を英訳するときに非常に便利。
= 5-1|{What} you said yesterday surprised me.|昨日あなたが**言ったこと**に驚いた。
- 5-2|This is {what} I wanted.|これこそ私が**欲しかったもの**だ。
- 5-3|{What} is important is to keep trying.|**大切なのは**挑戦し続けることだ。
: What is important [necessary, interesting] is 〜 は「〜なのは…だ」という強調の型。英作文で大いに使える。
[what を使った重要表現]
| what S is / what S used to be | 今のS（の姿）／以前のS
| what we call / what is called | いわゆる
| what is more | さらに
| what is worse | さらに悪いことに
| A is to B what C is to D | AとBの関係はCとDの関係と同じだ
- 5-4|She is not {what she used to be}.|彼女は**昔の彼女**ではない。
- 5-5|He is {what is called} a walking dictionary.|彼は**いわゆる**生き字引だ。
- 5-6|It was raining, and {what was worse}, I had no umbrella.|雨が降っていて、**さらに悪いことに**傘がなかった。
x The thing what I want is a new bike.（what は先行詞を含むので、the thing と一緒に使わない）

# A-2 疑問詞の what との区別
: I don't know what he wants. は「彼が何を欲しいのか（疑問）」とも「彼が欲しいもの（関係詞）」とも読める。英作文ではどちらでも正しいので、気にせず使ってよい。

# B. 論理構成5　逆接（しかし）
: 自分の主張に**反対意見や例外を認めつつ、自分の立場を守る**のが説得力のある書き方。
[逆接の表現]
| However, 〜 | しかし（文頭、コンマを伴う副詞）
| but | しかし（文と文をつなぐ接続詞）
| although [though] S V | 〜だけれども
| even though S V | （事実であるが）たとえ〜でも
| even if S V | （仮定として）たとえ〜でも
| despite [in spite of] 〜 | 〜にもかかわらず（名詞を続ける）
| nevertheless | それにもかかわらず
| on the other hand | 一方で（対照 →第6課）
x However it is expensive, I want it.（however は副詞。接続詞としては使えない → Although it is expensive, ...）
x Despite it was raining, ...（despite の後ろは名詞 → Despite the rain / Although it was raining）
= 5-7|{Although} some people say homework is a waste of time, I think it is necessary.|宿題は時間の無駄だと言う人も**いるが**、私は必要だと思う。
> 譲歩→主張の型：**Some people say 〜. However, I think 〜.** / **It is true that 〜, but 〜.**（確かに〜だが、…）
`,
drills:[
tr('es5d1','大切なのは、何を言うかではなく、どう言うかだ。',['What is important is not what you say but how you say it.','What matters is how you say something, not what you say.'],'What is important is 〜 の型。not A but B。'),
tr('es5d2','今日の私があるのは両親のおかげだ。',['I owe what I am today to my parents.','My parents have made me what I am today.'],'what I am「今の私」。owe A to B「AはBのおかげだ」。'),
tr('es5d3','彼は私が欲しかったものを誕生日にくれた。',['He gave me what I had wanted for my birthday.','For my birthday, he gave me exactly what I wanted.'],'what＝the thing which。the thing what とは書かない。'),
tr('es5d4','高価ではあるが、そのパソコンは買う価値がある。',['Although it is expensive, the computer is worth buying.','The computer is expensive, but it is worth the money.'],'although＋S V。however を接続詞として使わない。'),
tr('es5d5','雨にもかかわらず、多くの人が祭りに来た。',['Despite the rain, many people came to the festival.','Although it was raining, a lot of people came to the festival.'],'despite＋名詞／although＋S V を区別する。'),
tr('es5d6','確かにスマートフォンは便利だが、使いすぎると健康に悪い。',['It is true that smartphones are convenient, but using them too much is bad for our health.','Smartphones are certainly useful. However, overusing them can harm our health.'],'It is true that 〜, but 〜 の譲歩の型。'),
fr('es5d7','Some people say that it is not necessary to learn English because translation apps are improving. Do you agree?','翻訳アプリが進歩しているので英語を学ぶ必要はないという意見に賛成か。','70～90語','I disagree with this opinion. It is true that translation apps are becoming more accurate and useful. However, what is important in communication is not only the meaning of words but also feelings and trust. When we speak to people in their own language, they feel that we respect them. What is more, learning a language helps us understand the way of thinking of people in other cultures. Therefore, even though translation apps are improving, learning English is still worth the effort.','It is true that 〜. However, 〜 の譲歩、What is important is 〜、What is more を使う。')
]});

/* ===== 第6課 ===== */
L.push({k:'es6',no:'第6課',title:'「使う」／論理構成6 対照',sub:'use だけでなく、目的語に合った動詞を選ぶ',
body:`
# A. 「使う」の言いかえ
: 「使う」を何でも use で書くと不自然になることがある。**何を使うのか（時間・お金・言葉・乗り物・道具）**で動詞を選ぶ。
[「使う」の使い分け]
| use 道具・施設・言葉 | 使う（一般）
| spend 時間・お金 (on A / doing) | 費やす
| take 乗り物 | 利用する（take a bus / take the subway）
| make use of 〜 | 〜を活用する
| take advantage of 〜 | 〜を利用する（機会を生かす／人に付け込む）
| employ 方法・技術 | 用いる
| speak 言語 | 話す（「英語を使う」→ speak English）
| waste | むだに使う
= 6-1|I {spend} two hours a day {studying} English.|1日2時間を英語の勉強に**使っている**。
x I use two hours a day for studying English.
- 6-2|Most students {take} the bus to school.|ほとんどの生徒はバスで通学している。
- 6-3|You should {take advantage of} this opportunity.|この機会を**生かす**べきだ。
- 6-4|Don't {waste} your money on things you don't need.|必要のない物にお金を**むだに使ってはいけない**。
- 6-5|We should {make better use of} the library.|図書館をもっと**活用す**べきだ。
> 「〜を使って」は with（道具）／ by（手段）／ in（言語）／ through（媒体）：write **with** a pen / pay **by** credit card / write **in** English / learn **through** the Internet

# B. 論理構成6　対照（一方で）
: 2つのものを比べて**違いを際立たせる**書き方。「AはXだ。一方、BはYだ」の形で、比べる観点をそろえる。
[対照の表現]
| On the other hand, 〜 | 一方で（別の面を示す）
| In contrast, 〜 / By contrast, 〜 | それとは対照的に
| while [whereas] S V | 〜であるのに対して
| unlike 〜 | 〜とは違って
| compared with [to] 〜 | 〜と比べると
= 6-6|Cities are convenient. {On the other hand}, they are crowded and noisy.|都市は便利だ。**一方で**、混雑していて騒がしい。
- 6-7|My brother loves sports, {while} I prefer reading.|兄はスポーツが大好きだ**が、一方**私は読書のほうが好きだ。
- 6-8|{Unlike} her sister, she is very quiet.|姉**とは違って**、彼女はとても物静かだ。
> on the other hand は「反対の内容」ではなく「別の側面」を示す。in contrast は「はっきり逆の性質」を示すときに使う。On the one hand 〜, on the other hand 〜 のセットも可。
`,
drills:[
tr('es6d1','父は毎朝1時間を新聞を読むのに使う。',['My father spends an hour reading the newspaper every morning.','Every morning my father spends one hour reading the paper.'],'spend 時間 doing。use は使わない。'),
tr('es6d2','夏休みを有効に使いたい。',['I want to make good use of my summer vacation.','I want to use my summer vacation effectively.'],'make good use of 〜「〜を有効に使う」。'),
tr('es6d3','その手紙は英語で書かれていた。',['The letter was written in English.','The letter was in English.'],'言語は in。'),
tr('es6d4','私はたいてい自転車で通学しているが、雨の日はバスを使う。',['I usually go to school by bike, but I take the bus on rainy days.','I usually ride my bicycle to school, but on rainy days I take a bus.'],'乗り物は take。by bike（無冠詞）。'),
tr('es6d5','兄が外向的なのに対して、私は内向的だ。',['My brother is outgoing, while I am shy.','Unlike my brother, who is outgoing, I am rather introverted.'],'while S V で対照。unlike 〜 も使える。'),
tr('es6d6','田舎の生活は静かだ。一方で、仕事を見つけるのは難しい。',['Life in the countryside is quiet. On the other hand, it is difficult to find a job there.','Country life is peaceful. On the other hand, there are fewer job opportunities.'],'On the other hand で別の側面を示す。'),
fr('es6d7','Which is better for studying, paper notebooks or tablets?','勉強には紙のノートとタブレットのどちらがよいか。','70～90語','I think paper notebooks are better for studying. When I write by hand, I have to think about what is important, so I remember the content better. In contrast, typing on a tablet is so fast that I tend to copy everything without thinking. On the other hand, tablets have some advantages. For example, we can search our notes easily and carry many files at once. However, the most important purpose of taking notes is to understand and remember, so I prefer to use paper notebooks.','In contrast（対照）と On the other hand（別の側面）を使い分ける。')
]});

/* ===== 第7課 ===== */
L.push({k:'es7',no:'第7課',title:'知り合い・友だち・恋人／論理構成7 追加',sub:'人間関係を表す名詞と、情報を足していく表現',
body:`
# A. 人間関係を表す語
[人間関係の名詞]
| acquaintance | 知り合い（顔見知り程度）
| friend / close friend / best friend | 友だち／親しい友人／親友
| classmate / colleague [coworker] | 同級生／同僚
| boyfriend / girlfriend / partner | 恋人（交際相手）／パートナー
| neighbor | 近所の人、隣人
| stranger | 見知らぬ人；（場所に）不案内な人
- 7-1|He is {a friend of mine}.|彼は私の**友だちの1人**だ。
: a friend of mine は「（何人かいる）友だちの1人」。my friend は特定の友だちを指す。
x He is a my friend. / He is my a friend.
- 7-2|I'm {a stranger} here myself.|私もこのあたりは**不案内**なんです。
: 道を聞かれてわからないときの決まり文句。
[人間関係の動詞表現]
| make friends with 〜 | 〜と友だちになる（friends は複数形）
| get along (well) with 〜 | 〜とうまくやっていく
| keep in touch with 〜 | 〜と連絡をとり合う
| lose touch with 〜 | 〜と連絡がとれなくなる
| go out with 〜 / date | 〜と付き合う、デートする
| break up with 〜 | 〜と別れる
| fall in love with 〜 | 〜を好きになる
- 7-3|I {made friends with} a student from Brazil.|ブラジルから来た学生と**友だちになった**。
x I made a friend with a student from Brazil.
- 7-4|Do you {get along with} your new classmates?|新しいクラスメートと**うまくやっている**？
- 7-5|We still {keep in touch} by email.|私たちは今もメールで**連絡をとり合っている**。

# B. 論理構成7　追加（さらに）
: 同じ方向の情報を**積み重ねて**主張を強める。同じ接続語を繰り返さず、いくつかを使い分ける。
[追加の表現]
| also / too | 〜もまた
| In addition, 〜 / Moreover, 〜 / Furthermore, 〜 | さらに、そのうえ
| Besides, 〜 | それに（くだけた言い方）
| not only A but (also) B | AだけでなくBも
| as well as 〜 | 〜だけでなく
| What is more, 〜 | さらに
= 7-6|Volunteering helps others. {In addition}, it gives us a sense of purpose.|ボランティアは他人の役に立つ。**さらに**、私たちに生きがいを与えてくれる。
- 7-7|She is {not only} a good student {but also} a talented athlete.|彼女は優秀な生徒**であるだけでなく**、才能あるスポーツ選手**でもある**。
x Also, ... を文頭で連発する（Also は文頭でも使えるが、多用すると稚拙に見える）
> 逆の向きの情報（しかし）と同じ向きの情報（さらに）を混同しない。前文と**同じ評価（プラス／マイナス）**の内容を足すときに追加の表現を使う。
`,
drills:[
tr('es7d1','彼女は私の古くからの友人の1人だ。',['She is an old friend of mine.','She is one of my old friends.'],'a friend of mine の型。one of my friends も可。'),
tr('es7d2','留学中にさまざまな国の人と友だちになった。',['While I was studying abroad, I made friends with people from various countries.','During my stay abroad, I made friends with people from many different countries.'],'make friends with（friends は複数）。'),
tr('es7d3','高校を卒業してから、彼とは連絡が途絶えてしまった。',['I have lost touch with him since we graduated from high school.','He and I lost touch after we left high school.'],'lose touch with 〜。'),
tr('es7d4','新しい職場の同僚とはうまくやっている。',['I get along well with my colleagues at my new job.','I am getting on well with my coworkers at my new workplace.'],'get along with 〜。colleague / coworker。'),
tr('es7d5','運動は体によいだけでなく、ストレスの解消にもなる。',['Exercise is not only good for your body but also helps you relieve stress.','Exercise is good for your body. In addition, it helps reduce stress.'],'not only A but also B / In addition で追加。'),
fr('es7d6','Is it important to have many friends?','友だちが多いことは大切か。','80～100語','I do not think it is important to have many friends. What matters more is having a few close friends whom we can trust. First, close friends understand us well, so we can share our real feelings and problems with them. In addition, keeping in touch with a large number of people takes a lot of time and energy. Of course, it is nice to have many acquaintances, but they cannot support us in difficult times the way true friends can. For these reasons, quality is more important than quantity in friendship.','friend / acquaintance を使い分け、In addition で追加する。')
]});

/* ===== 第8課 ===== */
L.push({k:'es8',no:'第8課',title:'睡眠と夢／論理構成8 例示1',sub:'sleep / asleep / dream の語法と、For example の使い方',
body:`
# A. 睡眠に関する表現
[sleep 関連の語法]
| sleep (動詞) | 眠る（状態）：sleep well / sleep for eight hours
| go to sleep / fall asleep | 眠りにつく（変化）
| go to bed | 床につく（眠るとは限らない）
| be asleep / be awake | 眠っている／目が覚めている（形容詞）
| wake up / get up | 目が覚める／起き上がる
| stay up (late) | 夜更かしする
| oversleep | 寝過ごす
| lack of sleep / sleep deprivation | 睡眠不足
| get enough sleep | 十分な睡眠をとる
- 8-1|I {fell asleep} while reading.|本を読んでいるうちに**眠ってしまった**。
x I slept while reading.（「寝ていた」になり、変化が表せない）
- 8-2|The baby {is fast asleep}.|赤ちゃんは**ぐっすり眠っている**。
x the asleep baby（asleep は名詞の前に置けない → the sleeping baby）
- 8-3|I {stayed up} late watching a movie.|映画を見て**夜更かしした**。
- 8-4|Teenagers need to {get enough sleep}.|10代は**十分な睡眠をとる**必要がある。

# A-2 夢に関する表現
| have a dream | 夢を見る（× see a dream）
| dream of [about] 〜 | 〜の夢を見る；〜を夢見る
| my dream is to do | 私の夢は〜することだ
| a dream come true | 夢がかなったこと
| realize [achieve] one's dream | 夢を実現する
- 8-5|I {had a strange dream} last night.|昨夜、変な**夢を見た**。
x I saw a strange dream.
- 8-6|She finally {realized her dream} of becoming a pilot.|彼女はついにパイロットになるという**夢をかなえた**。

# B. 論理構成8　例示（For example）
: 抽象的な理由だけでは読み手に伝わらない。**具体例**で理由を「見える」ものにする。
[例示の表現]
| For example, S V. / For instance, S V. | 例えば（文頭）
| such as A, B, and C | 例えばA、B、Cなど（名詞を並べる）
| like 〜 | 〜のような（くだけた言い方）
| A good example is 〜. | よい例は〜だ
| In my case, 〜 / When I was 〜, 〜 | 私の場合／私が〜だったとき（体験を例に）
= 8-7|Lack of sleep causes many problems. {For example}, it makes it harder to concentrate in class.|睡眠不足は多くの問題を引き起こす。**例えば**、授業に集中しにくくなる。
- 8-8|Fruits {such as} oranges and kiwis are rich in vitamin C.|オレンジやキウイ**などの**果物はビタミンCが豊富だ。
x For example, oranges, kiwis.（for example の後ろは原則として文。名詞を並べるなら such as）
x Fruits, for example oranges and kiwis, ...（挿入として使うことは可能だが、英作文では such as が安全）
> 例は「誰でも思いつく一般的な例」より、**自分の体験や具体的な数字・場面**の方が説得力がある。
`,
drills:[
tr('es8d1','昨夜はテレビをつけたまま眠ってしまった。',['Last night I fell asleep with the TV on.','I went to sleep last night without turning off the TV.'],'fall asleep「眠りに落ちる」。with the TV on は付帯状況。'),
tr('es8d2','子どものころ、空を飛ぶ夢をよく見た。',['When I was a child, I often had dreams of flying in the sky.','As a child, I often dreamed that I was flying.'],'have a dream / dream that 〜。see a dream は誤り。'),
tr('es8d3','試験の前日は夜更かしせずに十分な睡眠をとるべきだ。',['You should not stay up late the night before an exam, but get enough sleep.','On the night before an exam, it is better to get plenty of sleep than to stay up late.'],'stay up late / get enough sleep。'),
tr('es8d4','彼はついに医者になるという夢を実現した。',['He finally realized his dream of becoming a doctor.','His dream of becoming a doctor finally came true.'],'realize one\'s dream / dream come true。dream of doing は同格の of。'),
tr('es8d5','日本には、すしや天ぷらなど、世界で人気のある料理がたくさんある。',['Japan has many dishes that are popular around the world, such as sushi and tempura.','There are a lot of Japanese foods, such as sushi and tempura, that are loved all over the world.'],'such as＋名詞の列挙。for example の後に名詞だけを並べない。'),
fr('es8d6','Many high school students do not get enough sleep. What should they do?','睡眠不足の高校生が多い。彼らはどうすべきか。','80～100語','I think high school students should stop using their smartphones at least an hour before going to bed. Many students stay up late because they keep checking social media or watching videos. For example, I used to look at my phone in bed and often did not fall asleep until after midnight. Since I started leaving my phone in another room, I have been able to sleep much better. In addition, students should go to bed at the same time every night. A regular schedule helps the body get used to sleeping well.','For example の後に自分の体験（具体例）を書く。fall asleep / stay up を正しく使う。')
]});

/* ===== 第9課 ===== */
L.push({k:'es9',no:'第9課',title:'人間を指す人称代名詞／論理構成9 例示2',sub:'「人は」を we / you / people のどれで書くか',
body:`
# A. 一般の人を指す代名詞
: 日本語の「人は」「私たちは」を英語にするとき、**誰を指すのか**で代名詞を選ぶ。1つの文章の中では**同じ代名詞で統一**するのが原則。
[一般の人を表す主語]
| we | （書き手を含む）私たち。社会全体について論じるときに最もよく使う
| you | （聞き手を含む）一般の人。会話的で親しみのある言い方
| people | （書き手を含まないことが多い）人々、世間の人
| they | （漠然と）世間の人、その地域の人、関係者
| one | （かたい言い方）人は。現代英語ではあまり使わない
| someone / anyone / everyone | 誰か／誰でも／みんな（単数扱い）
= 9-1|{We} should think more about the environment.|**私たちは**環境についてもっと考えるべきだ。
- 9-2|{You} never know what will happen in life.|人生、何が起こるか**わからない**ものだ。
- 9-3|{People} often say that time is money.|時は金なりと**よく言われる**。
- 9-4|{They} speak Portuguese in Brazil.|ブラジルではポルトガル語が話されている。
x When we are young, you should travel a lot.（we と you が混在している）

# A-2 性別を特定しない代名詞
: everyone / someone / a student などを受ける代名詞は、現代英語では **they / their** が一般的（単数の they）。he or she も可。
- 9-5|{Everyone} has {their} own way of learning.|**誰にでも**自分なりの学び方がある。
- 9-6|If {a student} has a question, {they} should ask the teacher.|**生徒は**質問があれば先生に聞くべきだ。
x If a student has a question, he should ask ...（男性に限定して聞こえるので避ける）
> 主語を **Students / People（複数形）**にしてしまえば they で受けられ、悩まなくてよい。英作文ではこれが最も安全。

# B. 論理構成9　例示2（例の選び方と書き方）
: 例示には**①自分の体験 ②一般的な例 ③数字・データ**の3種類がある。理由と例が**かみ合っているか**を必ず確認する。
[例の種類]
| 自分の体験 | When I was in junior high school, I 〜.
| 一般的な例 | For example, many companies now allow employees to work from home.
| 仮の例（想定） | For example, if you lose your wallet abroad, 〜.
| 数字 | For example, about 30% of 〜.（不確かな数字は書かない）
= 9-7|Reading can change the way we see the world. {For instance, when I read a novel about refugees, I began to pay more attention to news about them.}|読書は世界の見方を変えることがある。**例えば、難民についての小説を読んだとき、私は難民に関するニュースにもっと注意を払うようになった**。
> 自信のない統計や固有名詞は書かない。間違った事実は減点につながる。自分の体験は事実確認が不要なので最も安全。
`,
drills:[
tr('es9d1','人は失敗から学ぶものだ。',['We learn from our mistakes.','People learn from their failures.'],'一般の人は we / people。代名詞を統一する（we → our、people → their）。'),
tr('es9d2','誰にでも得意なことと苦手なことがある。',['Everyone has things they are good at and things they are not good at.','Everybody has their strengths and weaknesses.'],'everyone は単数扱いだが、代名詞は they / their で受けられる。'),
tr('es9d3','日本では、家に入るときに靴を脱ぐ。',['In Japan, people take off their shoes when they enter a house.','In Japan, we take off our shoes before entering a house.'],'書き手が日本人なら we、客観的には people。'),
tr('es9d4','若いうちにいろいろな経験をしておくべきだ。',['We should have various experiences while we are young.','Young people should try many different things while they can.'],'we で始めたら we で統一する。'),
tr('es9d5','例えば、外国で財布をなくしたら、言葉ができないと大変困るだろう。',['For example, if you lost your wallet in a foreign country, you would be in serious trouble if you could not speak the language.','For instance, if you lose your wallet abroad and cannot speak the local language, it will be very hard to get help.'],'仮の例は if を使う。you で統一。「困る」は be in trouble（第3課）。'),
fr('es9d6','Do you think everyone should learn to swim?','誰もが泳ぎを学ぶべきだと思うか。','70～90語','I think everyone should learn to swim. First, swimming can save lives. Japan is surrounded by the sea and has many rivers, so people often go near water. For example, if someone falls into a river, being able to swim for even a few minutes could keep them alive until help arrives. Second, swimming is a great form of exercise that people can enjoy at any age. My grandmother is over seventy, but she still swims twice a week. For these reasons, swimming is a skill worth learning.','everyone / someone を they で受ける。仮の例（if）と体験の例を両方使う。')
]});

/* ===== 第10課 ===== */
L.push({k:'es10',no:'第10課',title:'比較構文を使いこなす／論理構成10 言いかえ',sub:'比較の基本形と、同じ内容を別の言葉で言い直す技術',
body:`
# A. 比較構文の基本と注意点
: 比較では**何と何を比べているか**をそろえることが最重要。日本語では省略される比較対象を、英語でははっきり書く。
= 10-1|The population of Tokyo is larger than {that of} Osaka.|東京の人口は大阪**の人口**より多い。
x The population of Tokyo is larger than Osaka.（人口と都市を比べてしまっている）
- 10-2|The climate here is milder than {that in} Hokkaido.|ここの気候は北海道**の気候**より穏やかだ。
- 10-3|Her ideas are more creative than {those of} the other members.|彼女の考えはほかのメンバー**の考え**より独創的だ。
[比較の重要表現]
| 比較級 and 比較級 | ますます〜
| the 比較級 S V, the 比較級 S V | 〜すればするほど…
| 倍数 + as 〜 as / 倍数 + 比較級 than | …の〜倍
| not so much A as B | AというよりむしろB
| no more than / no less than | わずか〜／〜も
| as 〜 as any | どれにも劣らず〜
| Nothing is 比較級 than A | Aほど〜なものはない
| prefer A to B | BよりAを好む
- 10-4|{The more} you practice, {the better} you will become.|練習**すればするほど**うまくなる。
- 10-5|This bag is {three times as heavy as} that one.|このかばんはあのかばんの**3倍の**重さだ。
- 10-6|He is {not so much} a scientist {as} a philosopher.|彼は科学者**というよりむしろ**哲学者だ。
- 10-7|I {prefer} tea {to} coffee.|コーヒー**より**紅茶の**ほうが好きだ**。
x I prefer tea than coffee.
> 「〜が多い／少ない」の比較：数は more / fewer＋複数名詞、量は more / less＋不可算名詞。× less people → ○ fewer people

# B. 論理構成10　言いかえ（つまり）
: 抽象的な主張を**別の言葉で具体的に言い直す**ことで、読み手の理解を助ける。結論で最初の主張を**別の表現で**繰り返すのも言いかえの技術。
[言いかえの表現]
| In other words, 〜 | 言いかえれば
| That is (to say), 〜 | つまり
| To put it another way, 〜 | 別の言い方をすれば
| In short, 〜 / In a word, 〜 | 要するに／一言で言えば
| namely 〜 / i.e. | すなわち
= 10-8|Japan is an aging society. {In other words}, the number of elderly people is increasing rapidly.|日本は高齢化社会だ。**言いかえれば**、高齢者の数が急速に増えている。
> 結論の書き方：最初の文 I think students should read newspapers. → 結論 For these reasons, I believe that reading newspapers **is an essential habit for young people**.（同じ単語の繰り返しを避けて言いかえる）
`,
drills:[
tr('es10d1','日本の夏は私の国の夏よりずっと蒸し暑い。',['Summer in Japan is much more humid than that in my country.','Japanese summers are far more humid than those in my country.'],'比較対象をそろえる（that in / those in）。much / far で比較級を強める。'),
tr('es10d2','本を読めば読むほど、知らないことの多さに気づく。',['The more books I read, the more I realize how much I don\'t know.','The more I read, the more I realize how little I know.'],'the 比較級 〜, the 比較級 …。'),
tr('es10d3','この湖はあの湖の約2倍の大きさだ。',['This lake is about twice as large as that one.','This lake is about twice the size of that lake.'],'倍数＋as 〜 as。twice the size of 〜 も可。'),
tr('es10d4','最近、新聞を読む若者が以前より少なくなった。',['Fewer young people read newspapers these days than before.','These days, fewer young people read newspapers than they used to.'],'数は fewer（less は不可算）。'),
tr('es10d5','彼は天才というより、むしろ努力家だ。',['He is not so much a genius as a hard worker.','He is a hard worker rather than a genius.'],'not so much A as B / B rather than A。'),
tr('es10d6','その町は観光に頼っている。つまり、観光客が来なければ町の経済は成り立たない。',['The town depends on tourism. In other words, its economy cannot survive without tourists.','The town relies on tourism; that is, its economy would collapse if tourists stopped coming.'],'In other words / that is で言いかえる。無生物主語を使うと短く書ける。'),
fr('es10d7','Which do you prefer, summer or winter?','夏と冬、どちらのほうが好きか。','60～80語','I prefer winter to summer. First, it is easier to stay comfortable in winter. When it is cold, we can simply wear more clothes, but in summer there is a limit to how much we can take off. Second, winter food is more enjoyable. Hot dishes such as nabe taste better on cold days, and the colder it is, the more delicious they seem. In short, winter is the season when I feel most comfortable and happy.','prefer A to B、the 比較級構文、In short で言いかえてまとめる。')
]});

/* ===== 第11課 ===== */
L.push({k:'es11',no:'第11課',title:'言葉に関する言葉／論理構成11 補強',sub:'say / tell / speak / talk の区別と、主張を補強する表現',
body:`
# A. 「言う・話す」の使い分け
[say / tell / speak / talk]
| say | 発言の内容を言う：say (to 人) that 〜 / say "〜"
| tell | 人に情報を伝える：tell 人 that 〜 / tell 人 about 〜 / tell 人 to do
| speak | 声を出して話す・言語を話す・演説する：speak English / speak to 人
| talk | 会話する：talk with [to] 人 about 〜
- 11-1|She {said} that she was tired.|彼女は疲れたと**言った**。
x She said me that she was tired.（say は人を目的語にとらない → said to me）
- 11-2|He {told} me about his trip.|彼は旅行のことを私に**話してくれた**。
x He told about his trip.（tell は「人」を目的語にとるのが原則）
- 11-3|Can you {speak} Chinese?|中国語を**話せ**ますか。
- 11-4|We {talked} about the problem for hours.|私たちはその問題について何時間も**話し合った**。
[tell の決まった表現（人を目的語にとらない）]
| tell the truth / tell a lie | 本当のことを言う／うそをつく
| tell a story [joke] | 話［冗談］をする
| tell A from B | AとBを区別する
# A-2 言葉・言語に関する名詞
| language | 言語（a foreign language / body language）
| word | 単語；（短い）言葉
| expression / phrase | 表現／語句
| remark / comment | 発言、意見
| accent / pronunciation | なまり／発音
| conversation | 会話
- 11-5|I couldn't find the right {words} to comfort her.|彼女を慰める適切な**言葉**が見つからなかった。
- 11-6|His {remarks} upset many people.|彼の**発言**に多くの人が腹を立てた。

# B. 論理構成11　補強（実際に・特に）
: 主張に**事実・権威・具体的な数値**を加えて信頼性を高める。「実際に」「特に」「確かに」などで論の流れをはっきりさせる。
[補強の表現]
| In fact, 〜 / Actually, 〜 | 実際に（前の主張を事実で裏づける）
| Indeed, 〜 | 実際、確かに
| Especially / In particular, 〜 | 特に
| According to 〜 | 〜によれば
| It is well known that 〜 | 〜はよく知られている
| Research shows that 〜 | 研究によると〜
= 11-7|Reading aloud improves pronunciation. {In fact}, many language teachers recommend it.|音読は発音をよくする。**実際**、多くの語学教師がそれを勧めている。
- 11-8|Young people, {in particular}, use social media a lot.|**特に**若者はソーシャルメディアをよく使う。
> According to 〜 や Research shows 〜 は便利だが、**架空の研究や数字をでっちあげない**こと。確かな一般常識（It is well known that 〜）か、自分の体験で補強するのが安全。
`,
drills:[
tr('es11d1','彼は私に、本当のことを言えと言った。',['He told me to tell the truth.','He told me that I should tell the truth.'],'tell 人 to do「人に〜するよう言う」。tell the truth。'),
tr('es11d2','先生は、その本は読む価値があると言った。',['The teacher said that the book was worth reading.','Our teacher told us that the book was worth reading.'],'say that 〜 / tell 人 that 〜。say me は誤り。'),
tr('es11d3','双子の兄と弟を見分けるのは難しい。',['It is difficult to tell the twin brothers apart.','It is hard to tell one twin from the other.'],'tell A from B / tell A apart「AとBを区別する」。'),
tr('es11d4','彼女の何気ない一言が私の人生を変えた。',['A casual remark she made changed my life.','Something she said in passing changed my life.'],'remark「発言」。無生物主語で書く。'),
tr('es11d5','運動は心にもよい。実際、軽い散歩でも気分がよくなることが多い。',['Exercise is also good for the mind. In fact, even a short walk often makes us feel better.','Exercise benefits our mental health as well. Actually, just a light walk can improve our mood.'],'In fact / Actually で事実を示して補強する。'),
fr('es11d6','Should Japanese elementary schools teach English as a regular subject?','日本の小学校で英語を正式教科として教えるべきか。','70～90語','I think English should be taught as a regular subject in elementary school. First, young children are good at learning sounds. In fact, many children who start English early can pronounce words more naturally than those who start later. Second, learning a language early can make children less afraid of speaking to people from other countries. In particular, it helps them understand that there are many ways of thinking in the world. For these reasons, English classes in elementary school are worth having.','In fact / In particular で補強する。speak / talk / say を正しく使う。')
]});

D.decks.push({id:'eisaku',type:'lesson',title:'英作文（表現と論理構成）',sub:'表現テーマ＋論理構成の型を1課ずつ',items:L});
const g=D.groups.find(g=>g.title==='英作文');if(g)g.ids.unshift('eisaku');
})();
