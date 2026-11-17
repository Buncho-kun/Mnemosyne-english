// 英作文（表現テーマ＋論理構成）第24課〜第33課 ― 例文・解説・問題はすべてこのアプリ用に作成
(function(){
const D=window.EIGO_DATA,deck=D.decks.find(d=>d.id==='eisaku');if(!deck)return;
const L=deck.items;
const tr=(k,ja,models,point,hint)=>({k,kind:'tr',ja,models:Array.isArray(models)?models:[models],point,hint:hint||''});
const fr=(k,en,ja,words,model,point)=>({k,kind:'free',en,ja,words,models:[model],point});

/* ===== 第24課 ===== */
L.push({k:'es24',no:'第24課',title:'「後」の時間表現／物語(narrative)3',sub:'after / later / in の使い分けと、場面転換の書き方',
body:`
# A. 「〜後」の使い分け
: 日本語の「〜後」は1つだが、英語では**基準の時点**によって使い分ける。
[「後」の表現]
| in 期間 | （今から）〜後に：in three days
| 期間 later | （過去・未来のある時点から）〜後に：three days later
| after 期間 | （ある時点・出来事の）後に：after three days（基準を明示することが多い）
| 期間 after 出来事 | 〜の…後に：two years after the war
| afterward(s) | その後
| since 〜 | 〜以来（現在完了と）
| not long after 〜 | 〜の少し後に
= 24-1|I'll call you back {in} ten minutes.|10分**後に**折り返し電話します。
x I'll call you back after ten minutes.（未来の「今から〜後」は in が自然）
- 24-2|He left Japan in 2010 and came back five years {later}.|彼は2010年に日本を離れ、5年**後に**戻ってきた。
- 24-3|They got married {two years after} they met.|2人は出会って**2年後に**結婚した。
- 24-4|We had dinner, and {afterward} we went for a walk.|夕食をとり、**その後**散歩に出かけた。
x After, we went for a walk.（after 単独で副詞として文頭に置くのは避ける → After that / Afterward）
# A-2 「〜してから…になる」
| It has been 期間 since 〜 | 〜してから…になる
| 期間 have passed since 〜 | 〜してから…がたつ
| S have been 〜 for 期間 | Sは…の間〜している
- 24-5|{It has been} three years {since} I moved here.|ここに引っ越して**から**3年**になる**。

# B. 物語(narrative)3　場面転換と描写の差しこみ
: 体験談では、**時間の経過・場面の転換**を明示し、ところどころに**感覚的な描写**（見えたもの・聞こえた音・感じたこと）を差しこむと、読み手が場面を思い描ける。
[場面転換の表現]
| A few minutes later, 〜 | 数分後
| The next morning, 〜 | 翌朝
| Suddenly, 〜 / All of a sudden, 〜 | 突然
| Just as 〜, 〜 | ちょうど〜したとき
| By the time 〜, 〜 | 〜したときにはもう
| Looking back, 〜 | 振り返ると
= 24-6|{Just as} I was about to give up, I heard footsteps behind me.|**ちょうど**あきらめかけた**とき**、背後から足音が聞こえた。
> 描写は**五感**で：I could smell the sea. / The streets were silent. / My hands were shaking. のように短い文で入れると効果的。
`,
drills:[
tr('es24d1','会議は30分後に始まります。',['The meeting will start in thirty minutes.','The meeting begins in half an hour.'],'今から〜後は in。'),
tr('es24d2','彼女は大学を卒業した3年後に起業した。',['She started her own business three years after she graduated from college.','Three years after graduating from university, she set up her own company.'],'期間 after 出来事。'),
tr('es24d3','その日は雨だったが、数時間後に晴れてきた。',['It was raining that day, but it cleared up a few hours later.','It rained that day, but a few hours later the sky cleared.'],'過去の時点から〜後は later。'),
tr('es24d4','日本に来てから5年になる。',['It has been five years since I came to Japan.','I have been in Japan for five years.'],'It has been 期間 since 〜。'),
tr('es24d5','駅に着いたときには、電車はもう出てしまっていた。',['By the time I got to the station, the train had already left.','When I arrived at the station, the train had already gone.'],'By the time 〜 と過去完了。'),
fr('es24d6','Write about a time when something unexpected happened to you.','予想外の出来事が起きたときのことを書きなさい。','80～100語','Last summer, I went hiking in the mountains with my father. The weather was perfect when we started, but about two hours later, dark clouds suddenly appeared and it began to pour. We could not see the path clearly, and my shoes were soaked. Just as I started to panic, an old man appeared and invited us into his small hut. He gave us hot tea and told us stories until the rain stopped. Looking back, that unexpected storm gave me one of my warmest memories.','later / Just as / Looking back で場面を転換し、五感の描写を入れる。')
]});

/* ===== 第25課 ===== */
L.push({k:'es25',no:'第25課',title:'and と or／描写型(descriptive)の英作文',sub:'並列の正しい形と、人・場所・物を描写する書き方',
body:`
# A. and と or の使い方
: and / or で並べるものは**同じ文法的な形**（名詞と名詞、to do と to do、節と節）にそろえる（並列構造）。
= 25-1|I like {swimming, reading, and cooking}.|水泳、読書、料理が好きだ。
x I like swimming, to read, and cooking.（形がそろっていない）
- 25-2|She is {smart, kind, and} hardworking.|彼女は賢く、親切で、勤勉だ。
: 3つ以上並べるときは A, B(,) and C。最後の and の前のコンマ（オックスフォード・コンマ）はあってもなくてもよい。
# A-2 否定文の or と and
: 否定文で「AもBも〜ない」は **not A or B**（× not A and B）。
- 25-3|I don't drink coffee {or} tea.|コーヒー**も**紅茶**も**飲まない。
x I don't drink coffee and tea.（「コーヒーと紅茶を両方は飲まない」の意味になる）
- 25-4|He has no brothers {or} sisters.|彼には兄弟**も**姉妹**も**いない。
# A-3 命令文＋and / or
| 命令文, and 〜 | …しなさい、そうすれば〜
| 命令文, or 〜 | …しなさい、さもないと〜
- 25-5|Hurry up, {or} you'll miss the bus.|急ぎなさい、**さもないと**バスに乗り遅れるよ。
# A-4 or の「すなわち」
- 25-6|We need about 1,000 grams, {or} one kilogram.|約1000グラム、**つまり**1キロ必要だ。

# B. 描写型(descriptive)の英作文
: 人・場所・物の様子を描き、**読み手の頭に映像を浮かばせる**文章。「好き」「きれい」などの評価語だけでなく、**具体的な形・色・音・動き**を書く。
[描写の手順]
| ① 全体の印象 | My grandmother's kitchen was small but always warm.
| ② 視覚（空間の順に） | On the left was an old stove; above it hung pots and pans.
| ③ 他の感覚 | It always smelled of soy sauce and grilled fish.
| ④ 人の動き・様子 | She hummed old songs while she cooked.
| ⑤ 書き手の気持ち | It was the place where I felt most at home.
> 空間の順序（左から右、手前から奥、上から下）で書くと、読み手が迷わない。in the center / next to / behind / in front of / at the end of を活用する。
`,
drills:[
tr('es25d1','彼は英語もフランス語も話せない。',['He cannot speak English or French.','He speaks neither English nor French.'],'否定文の「AもBも」は or。'),
tr('es25d2','休日は映画を見たり、友だちと出かけたり、本を読んだりする。',['On my days off, I watch movies, go out with friends, and read books.','I spend my holidays watching movies, going out with friends, and reading.'],'並列は形をそろえる。'),
tr('es25d3','今すぐ出発しなさい、さもないと遅刻しますよ。',['Leave right now, or you\'ll be late.','Start now, or you will be late.'],'命令文, or 〜。'),
tr('es25d4','祖母の家は小さな川のそばにあり、庭には古い柿の木が立っている。',['My grandmother\'s house is next to a small river, and an old persimmon tree stands in the garden.','My grandmother lives by a small stream, and there is an old persimmon tree in her garden.'],'位置関係を前置詞で正確に。'),
tr('es25d5','その部屋は静かで、窓からは海が見えた。',['The room was quiet, and we could see the sea from the window.','It was a quiet room with a view of the ocean.'],'描写は視覚・聴覚の情報を入れる。'),
fr('es25d6','Describe your favorite place.','あなたの好きな場所を描写しなさい。','70～90語','My favorite place is a small bookstore near my school. When you open the old wooden door, a bell rings softly, and you can smell paper and coffee. The shelves reach all the way up to the ceiling, and books are piled on the floor between them. In the back corner, there is a large armchair next to a window, where the owner\'s cat often sleeps in the sun. I love sitting there on rainy afternoons, reading and listening to the rain.','全体→入口→奥へと空間の順に描写し、音・におい・光を入れる。')
]});

/* ===== 第26課 ===== */
L.push({k:'es26',no:'第26課',title:'未来を語る表現／情報提供型(informative)の英作文',sub:'will / be going to / 現在進行形の使い分けと、情報を整理して伝える書き方',
body:`
# A. 未来の表現
[未来の表現の使い分け]
| will | その場で決めた意志・単純な予測：I'll help you.
| be going to | 前から決めていた予定・根拠のある予測：It's going to rain.
| 現在進行形 | 確定した個人的な予定：I'm meeting her at six.
| 現在形 | 時刻表・公式の予定：The train leaves at 7:00.
| be about to | まさに〜しようとしている
| be likely to / be expected to | 〜しそうだ／〜すると見込まれている
| in the future / someday | 将来／いつか
= 26-1|Look at those clouds. It's {going to} rain.|あの雲を見て。雨が**降りそうだ**。
- 26-2|I'm {flying} to Osaka tomorrow.|明日は飛行機で大阪へ**行く**。
- 26-3|The population {is expected to} fall below 100 million.|人口は1億人を下回る**と見込まれている**。
- 26-4|What do you want to be {in the future}?|**将来**何になりたいですか。
x What do you want to be in future?（アメリカ英語では the が必要）
# A-2 時・条件の副詞節では現在形
- 26-5|I'll call you when I {get} home.|家に**着いたら**電話するね。
x I'll call you when I will get home.

# B. 情報提供型(informative)の英作文
: 事実や手順を**わかりやすく整理して伝える**文章（行事の紹介、手順の説明、物事の特徴など）。意見ではなく事実を中心に書く。
[情報提供型の構成]
| ① 主題の提示 | Setsubun is a traditional event held in early February.
| ② 要点を順に | First / Then / Finally（手順）、One feature is 〜（特徴）
| ③ 具体的な数字・名前 | on February 3rd / about 2,000 years ago
| ④ 意味・目的 | People do this to 〜.
| ⑤ まとめ（任意） | It is a fun way to welcome spring.
> 日本の行事・料理を説明するときは、**日本語の名前＋英語の説明**（mochi, or rice cakes）を必ず添える（第17課）。
`,
drills:[
tr('es26d1','来週の土曜日、友だちと映画を見に行く予定だ。',['I\'m going to see a movie with my friends next Saturday.','I\'m going to the movies with friends next Saturday.'],'決まっている予定は be going to / 現在進行形。'),
tr('es26d2','この調子だと、締め切りに間に合いそうにない。',['At this rate, we are not likely to meet the deadline.','At this rate, we probably won\'t make the deadline.'],'be likely to / 予測の will。'),
tr('es26d3','駅に着いたら連絡します。',['I\'ll contact you when I arrive at the station.','I will let you know when I get to the station.'],'時の副詞節は現在形。'),
tr('es26d4','2050年までに、世界人口は約100億人に達すると予想されている。',['By 2050, the world population is expected to reach about 10 billion.','The world\'s population is predicted to reach around ten billion by 2050.'],'be expected to do。'),
tr('es26d5','お正月には、多くの日本人が神社に行き、新年の幸せを祈る。',['On New Year\'s Day, many Japanese people visit shrines and pray for happiness in the new year.','During the New Year holidays, a lot of people in Japan go to shrines to pray for good luck.'],'情報提供型：行事を事実中心に説明。'),
fr('es26d6','Explain a traditional Japanese event to a visitor from abroad.','外国から来た人に、日本の伝統行事を説明しなさい。','80～100語','Setsubun is a traditional Japanese event held on February 3rd, the day before the start of spring in the old calendar. On this day, people throw roasted soybeans out of their houses while shouting, "Demons out! Good luck in!" The demons represent bad luck and illness. After that, they eat the same number of beans as their age to stay healthy during the year. In some areas, people also eat ehomaki, or thick sushi rolls, while facing a lucky direction. It is a fun way to welcome spring.','日付・手順・意味の順に事実を整理。日本語＋英語の説明を添える。')
]});

/* ===== 第27課 ===== */
L.push({k:'es27',no:'第27課',title:'「逆・反対」／英作文の4つのスタイル',sub:'opposite / contrary / reverse と、文章の種類の見極め',
body:`
# A. 「逆」「反対」の表現
[「逆・反対」の使い分け]
| the opposite (of 〜) | （性質・方向が）正反対のもの
| on the contrary | （前の否定を受けて）それどころか
| contrary to 〜 | 〜に反して
| in reverse / the other way around | 逆に、逆の順序で
| upside down / inside out / back to front | 上下逆に／裏返しに／前後逆に
| oppose / be opposed to 〜 / be against 〜 | 〜に反対する
| object to 〜 | 〜に異議を唱える
= 27-1|"Hot" is {the opposite of} "cold."|「暑い」は「寒い」の**反対だ**。
- 27-2|"You must be tired." "{On the contrary}, I feel great."|「疲れているでしょう」「**それどころか**、気分は最高だ」
x I like cats. On the contrary, my sister likes dogs.（単なる対比は On the other hand / In contrast）
- 27-3|{Contrary to} expectations, the plan succeeded.|予想**に反して**、計画は成功した。
- 27-4|It's {the other way around}.|**逆だよ**（立場が反対だ）。
- 27-5|Many residents {are against} the new tower.|多くの住民が新しいタワーに**反対している**。

# B. 英作文の4つのスタイル
: 英作文の問題は、求められている**文章の種類**によって書き方が変わる。問題文を読んだら、まずどの型かを見極める。
[4つのスタイル]
| 物語型 narrative | 出来事を時系列で語る（第22・23・24課）：Write about a memorable experience.
| 描写型 descriptive | 人・場所・物の様子を描く（第25課）：Describe your hometown.
| 情報提供型 informative | 事実・手順を整理して伝える（第26課）：Explain how to 〜.
| 論証型 argumentative | 主張を根拠で支える（第1〜21課）：Do you agree 〜?
> 実際の問題では型が混ざることも多い。例えば「印象に残った出来事と、そこから学んだこと」は**物語型＋論証型**。前半で語り、後半で教訓を主張する。
= 27-6|{Describe} a person you admire and {explain why}.|あなたが尊敬する人を**描写し**、その**理由を説明しなさい**。
: 描写型（どんな人か）＋論証型（なぜ尊敬するか）。描写だけで終わると減点される。
`,
drills:[
tr('es27d1','彼の性格は兄とは正反対だ。',['His personality is the opposite of his brother\'s.','He and his brother have completely opposite personalities.'],'the opposite of。比較対象をそろえる（his brother\'s）。'),
tr('es27d2','大方の予想に反して、そのチームが優勝した。',['Contrary to most people\'s expectations, the team won the championship.','Against all expectations, the team won the title.'],'contrary to 〜。'),
tr('es27d3','「退屈だった？」「それどころか、とても楽しかった」',['"Were you bored?" "On the contrary, I had a great time."','"Was it boring?" "Not at all. In fact, I really enjoyed it."'],'on the contrary は前の否定を受けて「それどころか」。'),
tr('es27d4','多くの住民がその計画に反対した。',['Many residents opposed the plan.','A lot of local people were against the plan.'],'oppose（他動詞）/ be against。'),
tr('es27d5','私が彼を助けたのではない。逆に、彼が私を助けてくれたのだ。',['I didn\'t help him. It was the other way around: he helped me.','It wasn\'t me who helped him; on the contrary, he helped me.'],'the other way around。'),
fr('es27d6','Describe a person you respect and explain why you respect him or her.','あなたが尊敬する人を描写し、尊敬する理由を説明しなさい。','80～100語','The person I respect most is my piano teacher, Ms. Kato. She is a small woman in her seventies with silver hair, and she always wears a bright scarf. Although she speaks quietly, her lessons are strict. I respect her for two reasons. First, she has kept learning all her life; she started studying jazz piano at the age of sixty-five. Second, she treats every student, from small children to adults, with the same respect. She has taught me that age is no excuse for stopping growing.','描写型（外見・様子）＋論証型（理由2つ）の組み合わせ。')
]});

/* ===== 第28課 ===== */
L.push({k:'es28',no:'第28課',title:'「自分で」／論理の補強1 有効な根拠の提示(1)',sub:'by oneself / for oneself / on one\'s own と、説得力のある根拠',
body:`
# A. 「自分で」の使い分け
[「自分で」の表現]
| by oneself | ひとりで（＝alone）、独力で
| for oneself | 自分のために／自分で（他人に頼らず）
| on one's own | 独力で、ひとりで
| oneself（強調） | 自分自身で：I made it myself.
| in person | （代理でなく）本人が直接
| independently | 自立して、独自に
= 28-1|She lives {by herself}.|彼女は**ひとりで**暮らしている。
- 28-2|You should think {for yourself}.|**自分の頭で**考えるべきだ。
- 28-3|He built the house {on his own}.|彼は**独力で**その家を建てた。
- 28-4|I made this cake {myself}.|このケーキは**自分で**作った。
- 28-5|You need to apply {in person}.|**本人が直接**申し込む必要がある。
[oneself を含む表現]
| beside oneself (with 〜) | （〜で）我を忘れて
| in itself | それ自体は
| between ourselves | ここだけの話だが
| help oneself to 〜 | 〜を自由にとって食べる

# B. 論理の補強1　有効な根拠の提示(1)
: 根拠には**強い根拠**と**弱い根拠**がある。採点者が「なるほど」と納得するのは、**誰にでも当てはまり、検証できる**根拠。
[根拠の強さ]
| 弱い：個人の好み | I like it. / It is fun.
| 弱い：根拠のない断定 | Everyone thinks so.
| やや弱い：主張の言いかえ | Uniforms are good because they are useful.（循環）
| 強い：因果関係 | Because 〜, …（なぜそうなるかの仕組み）
| 強い：具体的な事実・経験 | In my school, 〜.
| 強い：利益・不利益の比較 | The cost is small compared with the benefit.
= 28-6|× Students should learn to cook because cooking is important.|→ ○ Students should learn to cook **because it helps them stay healthy when they live alone in the future.**
: 「重要だから」は主張の言いかえ。「なぜ重要か」（将来一人暮らしで健康を保てる）まで書くと根拠になる。
`,
drills:[
tr('es28d1','彼は一人で世界一周旅行をした。',['He traveled around the world by himself.','He made a trip around the world alone.'],'by oneself＝alone。'),
tr('es28d2','答えを教えるのではなく、自分で考えさせるべきだ。',['Instead of giving them the answers, we should let them think for themselves.','We should make students think for themselves rather than just tell them the answers.'],'think for oneself「自分の頭で考える」。'),
tr('es28d3','このセーターは祖母が自分で編んだものだ。',['My grandmother knitted this sweater herself.','This sweater was knitted by my grandmother herself.'],'強調の再帰代名詞。'),
tr('es28d4','彼女は誰の助けも借りずに、独力でその問題を解いた。',['She solved the problem on her own without anyone\'s help.','She worked out the problem by herself.'],'on one\'s own / by oneself。'),
tr('es28d5','高校生はアルバイトをすべきだ。働くことで、お金を稼ぐ大変さがわかるからだ。',['High school students should have part-time jobs, because working helps them understand how hard it is to earn money.','Part-time work is good for high school students because it teaches them how difficult earning money is.'],'因果関係で根拠を示す。'),
fr('es28d6','Should students be allowed to choose all their subjects by themselves?','生徒は自分で科目をすべて選べるようにすべきか。','80～100語','I do not think students should be allowed to choose all their subjects by themselves. The main reason is that teenagers often do not know what they will need in the future. For example, many students avoid math because they find it difficult, but later discover that it is necessary for careers in economics or medicine. If they had dropped it in high school, they would have fewer choices. Of course, students should be able to choose some subjects on their own, but a basic range of subjects should be required.','「難しいから避ける→将来の選択肢が減る」という因果関係で根拠を示す。')
]});

/* ===== 第29課 ===== */
L.push({k:'es29',no:'第29課',title:'連体修飾節と関係代名詞節／論理の補強2 有効な根拠の提示(2)',sub:'「〜する…」を後ろから修飾する英語へ',
body:`
# A. 日本語の連体修飾節を英語にする
: 日本語は修飾語を**名詞の前**に置く（「昨日私が買った本」）が、英語は**名詞の後ろ**に置く（the book I bought yesterday）。長い修飾語ほど後ろに回る。
[名詞の後ろに置く修飾語]
| 関係代名詞節 | the man who lives next door
| 関係副詞節 | the town where I was born
| 分詞句 | a girl sitting on the bench / a car made in Japan
| 不定詞 | something to drink
| 前置詞句 | the house on the hill
= 29-1|昨日私が買った本|the book {(that) I bought yesterday}
- 29-2|窓のそばに座っている女性|the woman {sitting by the window}
- 29-3|日本で作られた車|cars {made in Japan}
- 29-4|私が生まれた町|the town {where I was born}
# A-2 日本語の連体修飾節の落とし穴
: 日本語の「〜する名詞」は、**関係詞では書けない**ことがある（同格・内容を表すとき）。
= 29-5|彼が試験に合格したという知らせ|the news {that he had passed the exam}（同格の that）
x the news which he had passed the exam
- 29-6|魚を焼くにおい|the smell {of fish being grilled}（× the smell which fish is grilled）
- 29-7|英語を話す機会|opportunities {to speak English}（不定詞）
> 名詞と修飾節の関係が「その名詞を〜する（主語・目的語）」なら関係代名詞、「〜という内容」なら同格の that / of、「〜するための」なら不定詞。

# B. 論理の補強2　有効な根拠の提示(2)
: 根拠を**多角的な視点**から選ぶと説得力が増す。理由2つを同じ観点から選ばないこと（第2課）。
[根拠の観点]
| 個人 ⇔ 社会 | 本人にとっての利点／社会全体にとっての利点
| 短期 ⇔ 長期 | 今すぐの効果／将来の効果
| 経済 ⇔ 精神 | お金・時間の面／心・人間関係の面
| 当事者 ⇔ 周囲 | 本人にとって／家族・地域にとって
= 29-8|First, volunteering helps {the people who receive support}. Second, it benefits {the volunteers themselves}.|第一に、ボランティアは**支援を受ける人**の助けになる。第二に、**ボランティア自身**の利益にもなる。
`,
drills:[
tr('es29d1','私が昨日会った人は、有名な作家だった。',['The person I met yesterday was a famous writer.','The man whom I met yesterday turned out to be a well-known author.'],'関係代名詞の省略。'),
tr('es29d2','ベンチで本を読んでいる少女は私の妹だ。',['The girl reading a book on the bench is my sister.','The girl who is reading on the bench is my younger sister.'],'現在分詞の後置修飾。'),
tr('es29d3','この町には、子どもたちが安全に遊べる場所が少ない。',['There are few places in this town where children can play safely.','This town has few places for children to play safely.'],'関係副詞 where / for 人 to do。'),
tr('es29d4','彼女がその大会で優勝したという知らせに、私たちは驚いた。',['We were surprised at the news that she had won the competition.','The news that she had won the contest surprised us.'],'同格の that。関係代名詞にしない。'),
tr('es29d5','私には、英語を使う機会がほとんどない。',['I have few opportunities to use English.','I rarely have the chance to speak English.'],'不定詞の形容詞用法。'),
fr('es29d6','Should high school students do volunteer work?','高校生はボランティア活動をすべきか。','80～100語','I think high school students should do volunteer work. First, volunteering helps people who need support. For example, students who help elderly people with shopping or teach younger children can make a real difference in their community. Second, it benefits the students themselves. Through volunteer work, they meet people they would never meet at school and learn skills that cannot be taught in class, such as patience and teamwork. For these reasons, volunteering is valuable both for society and for the students who take part in it.','根拠を「支援を受ける側」と「生徒自身」の2つの観点から選ぶ。関係詞を活用。')
]});

/* ===== 第30課 ===== */
L.push({k:'es30',no:'第30課',title:'過去と現在の比較／論理の補強3 効果的な例示',sub:'used to / than before と、主張に合った例の選び方',
body:`
# A. 過去と現在を比べる表現
[過去と現在の比較]
| used to do / be | 以前は〜した／〜だった（今は違う）
| no longer / not 〜 any longer | もはや〜ない
| 比較級 than before [in the past, it used to be] | 以前より〜
| compared with [to] 〜 | 〜と比べると
| nowadays / these days / today | 今日では
| in the past / in the old days / in those days | 昔は／当時は
| have changed / have become | 〜が変わった／〜になった（現在完了）
= 30-1|People {used to} write letters by hand.|人々は**以前は**手書きで手紙を書いた**ものだ**。
- 30-3|People {no longer} write letters by hand.|人々は**もはや**手書きで手紙を書か**ない**。
- 30-4|Life is much more convenient {than it used to be}.|生活は**以前より**はるかに便利になった。
- 30-5|{Compared with} fifty years ago, people live much longer.|50年前**と比べると**、人ははるかに長生きだ。
x Compared with fifty years ago, people's lives are longer than before.（比較の重複）
- 30-6|The town {has changed} a lot since I was a child.|私が子どものころから、町は**大きく変わった**。

# B. 論理の補強3　効果的な例示
: 例は**主張を最もよく示すもの**を1つ選び、具体的に書く。例が主張とずれていたり、例を並べるだけだったりすると逆効果。
[効果的な例の条件]
| 主張と直結している | 主張「スマホで学習が便利に」→ 例「辞書アプリで単語をすぐ調べられる」
| 具体的（いつ・どこで・何を） | × For example, it is useful. → ○ For example, I use a map app to find bus routes.
| 読み手が想像できる | 誰もが経験しうる場面、または自分の体験
| 例の後に「だから何か」を書く | This shows that 〜. / In this way, 〜.
= 30-7|Technology has made communication faster. {For example, my grandparents had to wait about two weeks for letters from my uncle in Brazil, but now we can video-chat with him every weekend.}|科学技術によって通信は速くなった。**例えば、祖父母はブラジルのおじからの手紙を2週間ほど待たなければならなかったが、今では毎週末おじとビデオ通話ができる**。
`,
drills:[
tr('es30d1','以前はこの川で泳ぐことができたが、今では水が汚れていて泳げない。',['We used to be able to swim in this river, but now the water is too dirty to swim in.','People could swim in this river in the past, but now it is too polluted.'],'used to / too 〜 to do。'),
tr('es30d2','彼はもはや昔の彼ではない。',['He is no longer what he used to be.','He is not the man he used to be.'],'no longer / what he used to be。'),
tr('es30d3','昔と比べて、子どもたちが外で遊ぶ時間は減っている。',['Compared with the past, children spend less time playing outside.','Children play outside less than they used to.'],'compared with 〜 / than they used to。'),
tr('es30d4','私が子どものころから、この町は大きく変わった。',['This town has changed a lot since I was a child.','My town is very different from what it was when I was little.'],'現在完了＋since。'),
tr('es30d5','インターネットのおかげで買い物は便利になった。例えば、深夜でも本や服を注文できる。',['The Internet has made shopping more convenient. For example, we can order books and clothes even late at night.','Shopping has become easier thanks to the Internet. For instance, you can buy clothes online in the middle of the night.'],'主張と直結した具体例。'),
fr('es30d6','How has life in Japan changed compared with 50 years ago?','50年前と比べて、日本の生活はどう変わったか。','80～100語','Compared with fifty years ago, life in Japan has become much more convenient, but people have fewer chances to interact with their neighbors. For example, my grandmother says that in the past, people in her town used to share vegetables and look after each other\'s children. Today, many people do not even know who lives next door. Convenience stores and the Internet allow us to get almost anything without talking to anyone. This shows that while technology has made our lives easier, it has also made local communities weaker.','used to / compared with。例の後に This shows that でまとめる。')
]});

/* ===== 第31課 ===== */
L.push({k:'es31',no:'第31課',title:'勉強・試験／論理の補強4 論点を見極める',sub:'study / learn と試験の語彙、問われていることに正確に答える',
body:`
# A. 勉強・試験の表現
[study と learn]
| study | （努力して）勉強する、研究する（過程）
| learn | 習得する、身につける（結果）、知る
| master | 習得する、使いこなす
| review / go over | 復習する
| prepare for 〜 | 〜の準備をする
= 31-1|I {studied} French for three years, but I didn't {learn} much.|3年間フランス語を**勉強した**が、あまり**身につかなかった**。
[試験の表現]
| take [sit] an exam | 試験を受ける（× receive an exam）
| pass / fail an exam | 試験に合格する／落ちる
| get a good score [grade] | よい点［成績］をとる
| entrance exam | 入学試験
| cram / study for 〜 | 詰めこみ勉強をする／〜に向けて勉強する
- 31-2|I {took} the entrance exam last week.|先週、入試を**受けた**。
x I received the entrance exam.
- 31-3|She {got a high score} on the test.|彼女はテストで**高得点をとった**。
x She got a high point.（point は「得点」ではなく競技の点・要点）
- 31-4|I {failed} the driving test twice.|運転免許の試験に2回**落ちた**。

# B. 論理の補強4　論点を見極める
: 減点の大きな原因は、**問われていることに答えていない**こと。書き始める前に、問題文の**論点**を正確につかむ。
[論点を見極めるチェック]
| 何について問われているか | 「宿題は必要か」と「宿題の量は適切か」は別の論点
| 誰にとっての話か | 生徒にとって／学校にとって／社会にとって
| 比較か二択か | Which is better, A or B? → 両方の比較が必要
| 条件はあるか | 「小学生が」「オンラインで」などの限定を外さない
| 答え方の指定 | 理由を2つ／具体例を挙げて／語数
= 31-5|問：Is it better for university students to live alone or with their families?|→ 「一人暮らしの利点」だけでなく、「家族と住む場合と比べて」なぜよいかを書く。
x 一人暮らしの利点だけを述べ、家族と住む場合に触れない。
> 書き終えたら、第1文が**問いへの直接の答え**になっているかを確認する。
`,
drills:[
tr('es31d1','私は毎日2時間英語を勉強しているが、なかなか話せるようにならない。',['I study English for two hours every day, but I still can\'t speak it well.','Although I spend two hours a day studying English, I haven\'t learned to speak it yet.'],'study（過程）と learn（習得）。'),
tr('es31d2','来月、大学の入学試験を受ける。',['I\'m going to take a university entrance exam next month.','I will sit the university entrance examination next month.'],'take an exam。receive は使わない。'),
tr('es31d3','彼女は数学のテストで満点をとった。',['She got a perfect score on the math test.','She got full marks on her math exam.'],'score / marks。point は使わない。'),
tr('es31d4','試験の前の晩に詰めこみ勉強をするのはよくない。',['It is not a good idea to cram the night before an exam.','Cramming the night before a test is not effective.'],'cram「詰めこみ勉強をする」。'),
tr('es31d5','授業で学んだことはその日のうちに復習するようにしている。',['I try to review what I learned in class on the same day.','I make a point of going over my lessons on the day I learn them.'],'review / go over。'),
fr('es31d6','Should schools give students tests every week?','学校は毎週テストを行うべきか。','80～100語','I think schools should give students short tests every week. First, weekly tests encourage students to review what they have learned regularly instead of cramming the night before a big exam. Research on memory shows that information is remembered better when it is recalled many times. Second, the results help teachers find out which topics students have not understood yet, so they can explain them again. However, the tests should be short and should not affect students\' grades too much, so that students do not feel too much pressure.','問い（毎週のテストの是非）に第1文で直接答える。review / cram を正しく使う。')
]});

/* ===== 第32課 ===== */
L.push({k:'es32',no:'第32課',title:'計量表現／論理の補強5 譲歩(1)',sub:'長さ・重さ・時間・お金の表し方と、譲歩の基本',
body:`
# A. 計量の表現
[数量を表す型]
| 数＋単位＋形容詞 | ten meters long / two years old / 30 kilograms heavy（重さは weigh が普通）
| 数－単位－形容詞（名詞の前） | a ten-meter-long bridge / a two-year-old child（単位は単数形）
| What is the 〜 of …? | …の〜はどれくらいか（length / height / width / depth / weight）
| How 形容詞 is 〜? | 〜はどれくらい…か（How tall / How far / How long）
| cost / take / weigh | 費用がかかる／時間がかかる／重さがある
| by＋差 | 〜だけ（差）：by 10%
= 32-1|The bridge is {500 meters long}.|その橋は**長さ500メートル**だ。
- 32-2|It's {a five-minute walk} to the station.|駅まで**歩いて5分**だ。
x It's a five-minutes walk.（名詞の前の単位は単数形）
- 32-3|The box {weighs} about 20 kilograms.|その箱は**重さが**約20キロ**ある**。
- 32-4|The ticket {cost} me 3,000 yen.|チケットは3000円**した**。
- 32-5|Prices rose {by} 5% last year.|昨年、物価が5%上昇した。
[おおよその数]
| about / around / approximately | 約
| nearly / almost | ほぼ（わずかに足りない）
| more than / over | 〜を超える
| at least / at most | 少なくとも／多くても
| dozens of / hundreds of / thousands of | 何十もの／何百もの／何千もの
x more than 1,000 people（「1000人以上」は厳密には1000人を含まないが、英作文では more than で問題ない）

# B. 論理の補強5　譲歩(1)
: 反対意見の一部を**認めたうえで**自分の主張に戻る書き方。公平さを示し、説得力を高める。
[譲歩の基本形]
| It is true that 〜, but … | 確かに〜だが…
| Of course, 〜. However, … | もちろん〜だ。しかし…
| Although [Though] 〜, … | 〜だけれども…
| Admittedly, 〜. Still, … | 確かに〜だ。それでも…
| 〜 may 〜, but … | 〜かもしれないが…
= 32-6|{It is true that} smartphones can be distracting, {but} they are also powerful learning tools.|**確かに**スマートフォンは気を散らすことがある**が**、強力な学習道具でもある。
> 譲歩は**主張の後半**に1回入れるのが基本。譲歩した後は必ず自分の立場に戻る（but / however の後に自分の主張）。
`,
drills:[
tr('es32d1','その塔の高さは約300メートルだ。',['The tower is about 300 meters tall.','The height of the tower is approximately 300 meters.'],'数＋単位＋形容詞 / the height of。'),
tr('es32d2','私の家から学校までは自転車で10分だ。',['It is a ten-minute bike ride from my house to school.','It takes ten minutes to get to school from my house by bike.'],'名詞の前の単位は単数（ten-minute）。'),
tr('es32d3','この町の人口は過去10年で20%減った。',['The population of this town has decreased by 20 percent over the past ten years.','The town\'s population has fallen by 20% in the last decade.'],'by＋差。人口は decrease / fall。'),
tr('es32d4','何千人もの人がその祭りを見に来た。',['Thousands of people came to see the festival.','The festival attracted thousands of visitors.'],'thousands of。'),
tr('es32d5','確かに留学には費用がかかるが、それ以上に得るものが大きい。',['It is true that studying abroad is expensive, but what you gain from it is worth much more.','Studying abroad certainly costs a lot, but the benefits are greater than the cost.'],'It is true that 〜, but …の譲歩。'),
fr('es32d6','Some people say that high school students should not use smartphones at all. What do you think?','高校生はスマートフォンをまったく使うべきでないという意見についてどう思うか。','80～100語','I disagree with the idea that high school students should not use smartphones at all. It is true that some students spend more than five hours a day on their phones, and this can harm their sleep and studies. However, smartphones are also useful tools. For example, students can use dictionary apps, watch online lessons, and contact their families in an emergency. Instead of banning smartphones completely, schools and parents should teach students how to use them wisely, such as by setting a daily time limit.','It is true that（譲歩）→ However（主張に戻る）。数量表現を具体的に。')
]});

/* ===== 第33課 ===== */
L.push({k:'es33',no:'第33課',title:'四大話法／論理の補強6 譲歩(2)',sub:'4つの文章スタイルの総合と、反論を取りこむ高度な譲歩',
body:`
# A. 四大話法（4つのスタイル）の使い分け
: 第27課の4つのスタイル（物語・描写・情報提供・論証）を、1つの答案の中で**組み合わせて**使えるようにする。
[スタイルの組み合わせ例]
| 「思い出の場所について書け」 | 描写（場所の様子）＋物語（そこでの出来事）
| 「影響を受けた本を紹介せよ」 | 情報提供（本の内容）＋論証（なぜ影響を受けたか）
| 「町の問題と解決策を述べよ」 | 情報提供（現状）＋論証（解決策とその根拠）
| 「印象的な経験と学んだこと」 | 物語（出来事）＋論証（教訓）
[スタイルごとの時制・表現]
| 物語 | 過去形が軸。then / later / suddenly
| 描写 | 現在形（または過去形）。there is / next to / looks like
| 情報提供 | 現在形。first / is held / is made of
| 論証 | 現在形・助動詞。I think / should / because
= 33-1|The book tells the story of a girl who travels alone across Africa. It changed my view of the world because it showed me how much courage ordinary people have.|その本はアフリカを一人で旅する少女の物語だ（情報提供）。普通の人がどれほど勇気を持っているかを教えてくれたので、私の世界の見方を変えた（論証）。

# B. 論理の補強6　譲歩(2)　反論を取りこむ
: 第32課の譲歩を発展させ、**反論 → 一部承認 → 再反論**の3段で書く。再反論には**根拠**が必要。
[反論を取りこむ流れ]
| ① 反論を示す | Some people argue that 〜. / Critics say that 〜.
| ② 一部を認める | This may be true in some cases.
| ③ 再反論（根拠つき） | However, 〜 because 〜.
| ④ 自分の主張に戻る | Therefore, I still believe that 〜.
= 33-2|{Some people argue that} online classes are less effective than face-to-face ones. {This may be true for} subjects such as sports or music. {However}, for many academic subjects, online classes can be just as effective, {because} students can watch recorded lectures as many times as they need.|オンライン授業は対面授業より効果が低いと**主張する人もいる**。体育や音楽などの科目**ではそうかもしれない**。**しかし**、多くの教科では、オンライン授業も同じくらい効果的になりうる。録画された講義を必要なだけ何度も見られる**からだ**。
> 反論は**相手の最も強い主張**を取り上げると効果的。弱い反論を崩しても説得力は上がらない。
`,
drills:[
tr('es33d1','その小説は、戦争で家族を失った少年の物語だ。',['The novel tells the story of a boy who lost his family in the war.','The novel is about a boy whose family was killed in the war.'],'情報提供型：内容紹介は現在形。'),
tr('es33d2','その公園は町の中心にあり、春には桜が咲き誇る。',['The park is in the center of the town, and its cherry trees are in full bloom in spring.','Located in the middle of the town, the park is full of cherry blossoms in spring.'],'描写型：現在形で位置と様子。'),
tr('es33d3','制服は個性を奪うと主張する人もいる。それは一理あるかもしれない。',['Some people argue that school uniforms take away students\' individuality. This may be true to some extent.','Critics say uniforms prevent students from expressing themselves, and there may be some truth in this.'],'反論の提示と一部承認。'),
tr('es33d4','しかし、制服があれば、服装で生徒が比べられることがなくなる。',['However, uniforms prevent students from being judged by their clothes.','However, with uniforms, students are not compared by what they wear.'],'再反論は根拠を示す。'),
tr('es33d5','したがって、私はやはり制服には利点が多いと考える。',['Therefore, I still believe that school uniforms have many advantages.','For this reason, I still think uniforms do more good than harm.'],'自分の主張に戻る。'),
fr('es33d6','Introduce a book that influenced you and explain how it changed you.','あなたに影響を与えた本を紹介し、どう変わったかを説明しなさい。','80～100語','The book that influenced me most is a novel I read in junior high school. It tells the story of a boy with a facial difference who goes to school for the first time. The story is told from the points of view of several characters, so readers can understand how each person feels. Before reading it, I often judged people by their appearance. However, the book showed me that everyone has struggles that others cannot see. Since then, I have tried to be kinder to people I do not know well.','情報提供（本の内容）＋論証・物語（自分の変化）を組み合わせる。')
]});
})();
