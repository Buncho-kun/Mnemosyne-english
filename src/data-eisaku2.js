// 英作文（表現テーマ＋論理構成）第12課〜第23課 ― 例文・解説・問題はすべてこのアプリ用に作成
(function(){
const D=window.EIGO_DATA,deck=D.decks.find(d=>d.id==='eisaku');if(!deck)return;
const L=deck.items;
const tr=(k,ja,models,point,hint)=>({k,kind:'tr',ja,models:Array.isArray(models)?models:[models],point,hint:hint||''});
const fr=(k,en,ja,words,model,point)=>({k,kind:'free',en,ja,words,models:[model],point});

/* ===== 第12課 ===== */
L.push({k:'es12',no:'第12課',title:'健康・病気／論理構成12 総復習',sub:'病気・けが・体調の表現と、論理構成の型の総まとめ',
body:`
# A. 健康・病気の表現
[病気になる・治る]
| get sick / become ill / fall ill | 病気になる
| catch (a) cold | 風邪をひく（have a cold は「風邪をひいている」状態）
| get better / recover (from 〜) | よくなる／回復する
| be in (good / poor) health | 健康である／健康がすぐれない
| stay healthy / keep fit | 健康を保つ
| be hospitalized / be in (the) hospital | 入院している
| see a doctor | 医者に診てもらう
| take medicine | 薬を飲む（× drink medicine）
- 12-1|I {caught a cold} last week and {still have} it.|先週**風邪をひいて**、まだ**治っていない**。
- 12-2|You should {see a doctor}.|**医者に診てもらった**ほうがいい。
x You should go to the hospital.（大病でない限り大げさに聞こえる）
- 12-3|Don't forget to {take} your {medicine}.|**薬を飲む**のを忘れないで。
x Don't forget to drink your medicine.
[けが・痛み]
| get hurt / be injured | けがをする（事故・スポーツで）
| be wounded | （刃物・銃で）負傷する
| have a headache / stomachache / sore throat | 頭痛がする／腹痛がする／のどが痛い
| hurt (自動詞) | 痛む：My back hurts.
- 12-4|Three people {were injured} in the accident.|その事故で3人が**けがをした**。
- 12-5|My knee {hurts} when I climb stairs.|階段をのぼると膝が**痛む**。
> 「健康に良い」は be good for one's health / be healthy。「健康的な食事」は a healthy diet（diet は「日常の食事」の意味もある）。

# B. 論理構成12　総復習（自由英作文の型）
: ここまでの論理構成を組み合わせると、自由英作文の標準的な型ができる。
[自由英作文の型（約80語）]
| ① 主張 | I think [agree / disagree] 〜.（問いへの答えを1文で）
| ② 理由1＋説明 | First, 〜. This is because / In other words 〜.
| ③ 具体例 | For example, 〜.（自分の体験が安全）
| ④ 理由2 | Second [In addition], 〜.
| ⑤ 譲歩（任意） | It is true that 〜, but 〜. / Although 〜, 〜.
| ⑥ 結論 | For these reasons, I believe 〜.（①を言いかえる）
> 書き終わったら**見直し**：①時制 ②三単現・数の一致 ③冠詞・複数形 ④前置詞 ⑤スペル ⑥語数。特に③は毎回必ず確認する。
`,
drills:[
tr('es12d1','風邪をひいたので、今日は学校を休んだ。',['I stayed home from school today because I had a cold.','I caught a cold, so I was absent from school today.'],'catch a cold（変化）/ have a cold（状態）。'),
tr('es12d2','この薬を1日3回、食後に飲んでください。',['Take this medicine three times a day after meals.','Please take this medicine after each meal, three times a day.'],'medicine は take。drink は使わない。'),
tr('es12d3','祖父は入院していたが、すっかりよくなった。',['My grandfather was in the hospital, but he has completely recovered.','My grandfather was hospitalized, but he is now fully recovered.'],'be in (the) hospital / recover。'),
tr('es12d4','サッカーの試合中に足首をけがした。',['I hurt my ankle during a soccer game.','I injured my ankle while playing soccer.'],'hurt [injure] one\'s 体の部位。'),
tr('es12d5','健康を保つには、バランスのよい食事と適度な運動が欠かせない。',['A balanced diet and moderate exercise are essential to staying healthy.','To stay healthy, it is important to eat a balanced diet and exercise regularly.'],'stay healthy。diet「食事」、exercise（不可算）。'),
fr('es12d6','What is the most important thing for staying healthy?','健康を保つために最も大切なことは何か。','80～100語','I think the most important thing for staying healthy is getting enough sleep. First, sleep gives our body time to recover. In other words, while we are asleep, our muscles and brain repair themselves after a busy day. For example, when I slept only five hours a night before exams, I caught colds easily and could not concentrate. Second, good sleep helps us control our emotions. It is true that diet and exercise are also important, but they are hard to keep up without enough rest. For these reasons, I believe sleep is the foundation of good health.','主張→理由1（In other words で説明）→例→理由2→譲歩→結論の総復習。')
]});

/* ===== 第13課 ===== */
L.push({k:'es13',no:'第13課',title:'仕事・職業／具体と一般1',sub:'job / work / occupation と、一般論を具体で支える',
body:`
# A. 仕事・職業の表現
[「仕事」の使い分け]
| work | 仕事、労働（不可算）：go to work / after work
| job | （具体的な）仕事、職（可算）：get a job / lose one's job
| career | 職業上の経歴、生涯の仕事
| occupation / profession | 職業（書類的）／専門職（医師・弁護士など）
| task | （割り当てられた）作業
| business | 商売、事業
- 13-1|My father {goes to work} by car.|父は車で**通勤している**。
- 13-2|She {got a job} at a bank.|彼女は銀行に**就職した**。
x She got a work at a bank.
- 13-3|I want to have {a career} in medicine.|医療の道に**進みたい**。
[職業に関する動詞表現]
| work for 会社 / work at 場所 / work as 職業 | 〜に勤める／〜で働く／〜として働く
| look for a job / job hunting | 職を探す／就職活動
| quit [leave] one's job | 仕事を辞める
| retire | 退職する（定年で）
| be fired / be laid off | 解雇される／一時解雇される
| work part-time / full-time | パートで／正社員として働く
- 13-4|She {works as} a nurse {at} a hospital in Osaka.|彼女は大阪の病院で看護師**として働いている**。
x She works as nurse.（職業名にも冠詞が必要）
- 13-5|What do you want to be in the future?|将来**何になりたい**ですか。
: 職業を尋ねるときは What do you do (for a living)? が自然。What is your job? はぶっきらぼう。

# B. 具体と一般1　一般論 → 具体
: 英語の段落は**一般的な主張（抽象）→ 具体的な説明・例**の順で書く。具体だけでは何が言いたいのか伝わらず、一般論だけでは説得力がない。
= 13-6|{Choosing a job is one of the most important decisions in life.} For example, it affects where we live, who we meet, and how we spend most of our time.|**仕事を選ぶことは人生で最も重要な決断の1つだ**。例えば、仕事によって、どこに住み、誰と出会い、時間の大半をどう過ごすかが左右される。
: 1文目が一般論（トピック・センテンス）、2文目がそれを具体化する文。
[具体化するための問い]
| 誰が？ | many workers / my uncle / young people in rural areas
| いつ・どこで？ | during the pandemic / in my town
| どのように？ | by working from home / by using AI
| 数・量は？ | three times a week / more than half
> 自分の文章を見直すとき、「例えば？」と自問して答えられない文は具体化が足りない。
`,
drills:[
tr('es13d1','姉は東京の旅行会社に勤めている。',['My sister works for a travel agency in Tokyo.','My older sister has a job at a travel company in Tokyo.'],'work for 会社。'),
tr('es13d2','彼は大学を卒業してすぐに仕事を見つけた。',['He found a job soon after he graduated from college.','He got a job right after graduating from university.'],'job は可算（a job）。work は不可算。'),
tr('es13d3','父は今年の3月に定年退職した。',['My father retired this March.','My father retired from his job in March this year.'],'retire「定年退職する」。'),
tr('es13d4','私は将来、教師として地元の子どもたちを支えたい。',['In the future, I want to support children in my hometown as a teacher.','I hope to work as a teacher and help local children in the future.'],'as a teacher（冠詞を忘れない）。'),
tr('es13d5','在宅勤務には多くの利点がある。例えば、通勤しなくてよいので、家族と過ごす時間が増える。',['Working from home has many advantages. For example, since people do not have to commute, they can spend more time with their families.','There are many benefits to working from home. For instance, without a daily commute, workers have more time for their families.'],'一般論→For example で具体化。'),
fr('es13d6','What kind of job would you like to have in the future, and why?','将来どんな仕事に就きたいか。理由とともに答えなさい。','70～90語','In the future, I would like to work as a pharmacist. When my grandmother was ill, she had to take many kinds of medicine, and she was often confused about when to take them. A pharmacist at a local drugstore explained everything to her kindly and even called her to check on her. I realized that pharmacists play an important role in supporting patients\' daily lives. I want to have a career where I can use scientific knowledge to help people directly.','一般論（pharmacists play an important role）を具体的な体験で支える。work as a 職業。')
]});

/* ===== 第14課 ===== */
L.push({k:'es14',no:'第14課',title:'目的と手段／具体と一般2',sub:'「〜するために…する」と「〜によって」の書き分け',
body:`
# A. 目的と手段の表現
: 「AするためにBする」は **B to do A**、「BによってAする」は **A by doing B**。どちらを目的・手段にするかで構文が変わる。
[手段を表す表現]
| by doing | 〜することによって
| by means of 〜 | 〜という手段で
| through 〜 | 〜を通じて
| with 〜 | 〜を使って（道具）
| by 乗り物・通信手段 | by bus / by email（無冠詞）
| how to do / the way to do | 〜する方法
= 14-1|You can improve your English {by reading} a lot.|たくさん**読むことによって**英語力を伸ばせる。
- 14-2|We learn about the world {through} books and the Internet.|私たちは本やインターネット**を通じて**世界について学ぶ。
- 14-3|The best way {to learn} a language is to use it every day.|言語を**学ぶ**最良の方法は、毎日使うことだ。
x The best way of learn ... / The best way to learning ...
[目的を表す表現（第4課の復習）]
| to do / in order to do | 〜するために
| so that S can do | Sが〜できるように
| for 名詞 | 〜のために（for my health / for the future）
| aim / goal / purpose | 目的
- 14-4|She works part-time {to save money for} college.|彼女は大学の**ために**お金を**ためよう**とアルバイトをしている。
- 14-5|{The purpose of} this meeting is {to} share ideas.|この会議の**目的は**アイデアを共有することだ。
x The purpose of this meeting is sharing ideas.（誤りではないが、目的は to do が自然）
> 「目的のために手段を選ばない」のような抽象的な日本語は、The end justifies the means.（目的は手段を正当化する）など英語の定型表現を知っていれば一発で書ける。

# B. 具体と一般2　具体 → 一般化
: 体験や事例を述べた後、**そこから言える一般的な教訓・主張**でまとめると、段落が引き締まる。
= 14-6|When I joined the drama club, I was too shy to speak in front of others. After a year of practice, however, I was able to perform on stage. {This experience taught me that confidence comes from effort.}|演劇部に入ったとき、私は内気で人前で話せなかった。しかし1年練習した後、舞台で演じられるようになった。**この経験から、自信は努力から生まれるのだと学んだ**。
[一般化の表現]
| This experience taught me that 〜 | この経験から〜を学んだ
| This shows that 〜 | このことは〜を示している
| From this, we can see that 〜 | このことから〜がわかる
| In general, 〜 / Generally speaking, 〜 | 一般に
`,
drills:[
tr('es14d1','毎日少しずつ練習することによって、ピアノがうまくなった。',['I became better at the piano by practicing a little every day.','By practicing a little each day, I improved my piano playing.'],'by doing「〜することによって」。'),
tr('es14d2','新しい言語を身につける一番の方法は、その国に住むことだ。',['The best way to learn a new language is to live in a country where it is spoken.','Living in the country is the best way to master a new language.'],'the best way to do is to do。'),
tr('es14d3','健康のために、私は毎朝ジョギングをしている。',['I go jogging every morning for my health.','I jog every morning to stay healthy.'],'for 名詞 / to do で目的。'),
tr('es14d4','私たちはメールで連絡をとり合っている。',['We keep in touch by email.','We stay in contact with each other through email.'],'by email（無冠詞）/ through。'),
tr('es14d5','この経験から、人に頼ることは恥ずかしいことではないと学んだ。',['This experience taught me that it is not shameful to ask others for help.','From this experience, I learned that there is nothing wrong with relying on other people.'],'This experience taught me that 〜 で一般化。'),
fr('es14d6','What is the best way to make friends in a new school?','新しい学校で友だちを作る一番の方法は何か。','70～90語','I think the best way to make friends in a new school is to join a club. When I entered high school, I did not know anyone in my class. However, I joined the tennis club, and by practicing together every day, I soon became close to the other members. We talked about many things on the way home, and some of them are now my best friends. This experience taught me that sharing a goal with others is a natural way to build friendships.','手段（by doing）→体験→This experience taught me that（一般化）。')
]});

/* ===== 第15課 ===== */
L.push({k:'es15',no:'第15課',title:'英語らしい2段階の位置指定／具体と一般3',sub:'「大きい単位→小さい単位」と「小さい→大きい」',
body:`
# A. 場所・時間の指定の順序
: 日本語は**大きい単位 → 小さい単位**（東京都新宿区…、2026年11月15日午後3時）の順だが、英語では**小さい単位 → 大きい単位**の順に並べるのが基本。
= 15-1|She lives {in a small town in Nagano}.|彼女は**長野の小さな町に**住んでいる。
- 15-2|The meeting will start {at 3 p.m. on Monday, May 10}.|会議は**5月10日月曜日の午後3時に**始まる。
- 15-3|I was born {in a hospital near the sea in Kobe}.|私は**神戸の海の近くの病院で**生まれた。
: 「どこ（の中の）どこ」を前置詞句で重ねるとき、**狭い場所を先に**書く。
[場所の前置詞の選び方]
| at | 点としての場所（at the station / at the door）
| in | 広がりのある空間・地域の中（in Tokyo / in the room）
| on | 面・線の上（on the wall / on the street / on the second floor）
# A-2 2段階で場所を示す英語らしい表現
: 英語では、**まず大まかな位置、次に具体的な位置**を示す副詞＋前置詞句の形がよく使われる。
| up in the mountains | 山の上のほうで
| down by the river | 川べりで
| over there by the window | あそこの窓のそばに
| out in the garden | 外の庭で
| back home in Japan | 故郷の日本では
| here in Tokyo | ここ東京では
- 15-4|My grandparents live {up in the mountains}.|祖父母は**山のほうに**住んでいる。
- 15-5|{Back home in Japan}, people rarely tip at restaurants.|**故郷の日本では**、レストランでチップを払うことはめったにない。
- 15-6|Your bag is {over there on the chair}.|かばんは**あそこのいすの上に**あるよ。

# B. 具体と一般3　抽象と具体の往復
: よい段落は**一般（主張）→ 具体（例）→ 一般（まとめ）**と往復する。第13課（一般→具体）と第14課（具体→一般）を組み合わせた形。
[段落の構成]
| トピック・センテンス（一般） | Living in the countryside has many benefits.
| サポート（具体） | For example, my uncle, who moved from Tokyo to a village in Kochi, now grows his own vegetables and has time to go fishing.
| まとめ（一般） | As his case shows, life in the countryside can be both healthier and more relaxed.
> 「As his case shows」「As this example shows」で具体から一般へ戻る橋渡しができる。
`,
drills:[
tr('es15d1','私は北海道の小さな港町で育った。',['I grew up in a small port town in Hokkaido.','I was raised in a small fishing town in Hokkaido.'],'小さい単位→大きい単位の順。'),
tr('es15d2','説明会は来週の金曜日の午前10時に、本館の2階で行われる。',['The information session will be held at 10 a.m. next Friday on the second floor of the main building.','The briefing will take place on the second floor of the main building at ten in the morning next Friday.'],'時間は at 時刻＋曜日。階は on。'),
tr('es15d3','ここ東京でも、夜には星が見えることがある。',['Even here in Tokyo, you can sometimes see stars at night.','We can sometimes see stars at night, even here in Tokyo.'],'here in Tokyo の2段階指定。'),
tr('es15d4','子どもたちは外の庭で遊んでいる。',['The children are playing out in the garden.','The kids are outside, playing in the yard.'],'out in the garden。'),
tr('es15d5','彼の例が示すように、失敗は成功への一歩になりうる。',['As his example shows, failure can be a step toward success.','As his case shows, a failure can lead to success.'],'As 〜 shows で具体から一般へ戻る。'),
fr('es15d6','Describe a place in your hometown that you would recommend to visitors.','あなたの故郷で訪問者に勧めたい場所について書きなさい。','70～90語','I would recommend a small shrine up on a hill near the station in my hometown. It is not famous, but it has a wonderful view of the whole town and the sea beyond it. In spring, the path to the shrine is covered with cherry blossoms, and local people gather there to enjoy picnics. Visitors can also try the rice cakes sold at a tiny shop down by the gate. As this place shows, the best parts of a town are often hidden from guidebooks.','up on a hill / down by the gate の2段階指定。具体→As this place shows で一般化。')
]});

/* ===== 第16課 ===== */
L.push({k:'es16',no:'第16課',title:'人の性質を語る／主張と根拠1',sub:'性格を表す形容詞と、主張を根拠で支える基本',
body:`
# A. 人の性質を表す表現
[性格を表す形容詞（ペアで覚える）]
| kind / unkind | 親切な／不親切な
| honest / dishonest | 正直な／不正直な
| patient / impatient | 忍耐強い／短気な
| outgoing / shy | 社交的な／内気な
| hardworking / lazy | 勤勉な／怠惰な
| generous / stingy | 気前のよい／けちな
| responsible / irresponsible | 責任感のある／無責任な
| sensitive / sensible | 敏感な、傷つきやすい／分別のある
| confident / modest | 自信のある／謙虚な
- 16-1|My mother is {strict} but {fair}.|母は**厳しい**が**公平だ**。
- 16-2|She is {sensitive} to other people's feelings.|彼女は人の気持ちに**敏感だ**。
x She is sensible to other people's feelings.（sensible は「分別のある」）
[性質を語る動詞・名詞の表現]
| be the kind of person who 〜 | 〜するような人だ
| have a sense of humor / responsibility | ユーモアのセンス／責任感がある
| be good at doing / be poor at doing | 〜するのが得意だ／苦手だ
| tend to do | 〜しがちだ
| be likely to do | 〜しそうだ
- 16-3|He {is the kind of person who} never gives up.|彼は決してあきらめない**ような人だ**。
- 16-4|She {has a great sense of humor}.|彼女は**ユーモアのセンスがすばらしい**。
- 16-5|I {tend to} worry too much about small things.|私は小さなことを気にし**すぎる傾向がある**。
> 性格は**行動で示す**と説得力が増す：× He is kind.（だけ）→ ○ He is kind. When I broke my leg, he carried my bag to school every day for a month.

# B. 主張と根拠1　主張には必ず根拠をつける
: 主張（claim）は**「なぜそう言えるのか」という根拠（reason / evidence）**とセットで初めて意味をもつ。根拠のない主張は、どんなに正しくても評価されない。
[主張と根拠の基本形]
| 主張 | I believe that 〜. / In my opinion, 〜.
| 根拠（理由） | This is because 〜. / The main reason is that 〜.
| 根拠（証拠） | For example, 〜. / In fact, 〜.
= 16-6|{In my opinion}, a good leader must be a good listener. {The main reason is that} people work harder when they feel their ideas are respected.|**私の考えでは**、よいリーダーは聞き上手でなければならない。**主な理由は**、人は自分の考えが尊重されていると感じると、より一生懸命に働く**からだ**。
x I think a good leader must be a good listener because I think so.（循環論法：根拠になっていない）
`,
drills:[
tr('es16d1','兄は短気だが、根は優しい。',['My brother is impatient, but he is kind at heart.','My older brother loses his temper easily, but he is a kind person deep down.'],'impatient「短気な」。at heart / deep down「根は」。'),
tr('es16d2','彼女は困っている人を見ると放っておけないような人だ。',['She is the kind of person who cannot ignore people in trouble.','She is the type of person who always helps someone in need.'],'be the kind of person who 〜。'),
tr('es16d3','私は人前で話すのが苦手だ。',['I am not good at speaking in public.','I am poor at speaking in front of people.'],'be good [poor] at doing。'),
tr('es16d4','彼は責任感が強いので、みんなから信頼されている。',['He has a strong sense of responsibility, so everyone trusts him.','Because he is very responsible, he is trusted by everyone.'],'have a sense of responsibility / responsible。'),
tr('es16d5','私の考えでは、正直さが最も大切な性質だ。主な理由は、信頼はうそから生まれないからだ。',['In my opinion, honesty is the most important quality. The main reason is that trust cannot be built on lies.','I believe honesty is the most important personal quality, mainly because no one can trust a person who tells lies.'],'In my opinion → The main reason is that の型。'),
fr('es16d6','What quality do you think is most important in a friend?','友人にとって最も大切な性質は何だと思うか。','70～90語','In my opinion, the most important quality in a friend is honesty. The main reason is that an honest friend tells us the truth even when it is hard to hear. For example, when I was about to give up on my dream of studying abroad, my best friend told me directly that I was just afraid of failing. Her words hurt at first, but they made me try again. Friends who only say what we want to hear cannot help us grow. Therefore, I value honesty most of all.','主張→The main reason is that（根拠）→For example（証拠）→結論。')
]});

/* ===== 第17課 ===== */
L.push({k:'es17',no:'第17課',title:'数量／誰が読んでもわかるように書く',sub:'数・量・割合の表現と、明確な文の書き方',
body:`
# A. 数量の表現
[数・量・割合]
| a number of + 複数名詞（複数扱い） | 多くの〜（いくつかの〜）
| the number of + 複数名詞（単数扱い） | 〜の数
| a large [small] amount of + 不可算名詞 | 大量の［少量の］〜
| the majority of 〜 | 〜の大多数
| half / a third / two-thirds of 〜 | 〜の半分／3分の1／3分の2
| percent of 〜 | 〜の…パーセント（動詞は〜に一致）
| more than / less than / about | 〜より多い／少ない／約
| increase / decrease / double / halve | 増える／減る／倍増する／半減する
- 17-1|{The number of} students {has} decreased.|生徒**の数が**減っている。
x The number of students have decreased.
- 17-2|{A number of} students {were} absent.|**何人もの**生徒が欠席した。
- 17-3|{About 30 percent of} the population {is} over 65.|人口の**約30パーセント**が65歳以上だ。
: percent of の後ろの名詞に動詞を一致させる（the population は単数、the students なら複数）。
- 17-4|Sales {doubled} in two years.|売り上げは2年で**倍増した**。
x The number of students is many.（「数が多い」は large / high）
x The population of Japan is many.（人口は large / small）
> 数・量の大小を表す形容詞：number / population / amount / income / price → large / small（high / low）。× many / few / expensive / cheap

# B. 誰が読んでもわかるように書く
: 採点者は書き手の頭の中を知らない。**日本の事情を知らない読み手**にも伝わるように書く。
[明確に書くためのルール]
| 1文1内容 | 長い文は2文に分ける
| 代名詞の指すものを明確に | it / this / they が何を指すか1つに決まるように
| 日本特有の事柄は説明を添える | juku (cram schools) / club activities after school
| あいまいな語を避ける | thing / something / various → 具体的な名詞に
| 主語と動詞を近くに | 主語の後に長い修飾語を置きすぎない
= 17-5|Many students go to {juku, or private cram schools}, after their regular classes.|多くの生徒は、通常の授業の後に**塾（私設の受験予備校）**に通う。
x Many students go to juku.（日本の事情を知らない読み手には伝わらない）
- 17-6|Smartphones are useful. {They} allow us to contact our families anytime.|スマートフォンは便利だ。**それによって**、いつでも家族と連絡がとれる。
x My friend told my sister that she was wrong.（she が友だちか姉かわからない）
`,
drills:[
tr('es17d1','日本を訪れる外国人の数は年々増えている。',['The number of foreigners visiting Japan is increasing year by year.','More and more foreign people visit Japan every year.'],'the number of は単数扱い。'),
tr('es17d2','何人もの乗客がその事故でけがをした。',['A number of passengers were injured in the accident.','Several passengers got hurt in the accident.'],'a number of は複数扱い。'),
tr('es17d3','日本の人口は減少している。',['The population of Japan is decreasing.','Japan\'s population is getting smaller.'],'人口は many ではなく large / small、増減は increase / decrease。'),
tr('es17d4','クラスの3分の2の生徒が自転車で通学している。',['Two-thirds of the students in the class go to school by bike.','Two-thirds of my classmates ride their bicycles to school.'],'two-thirds of 〜。分数の分子が2以上なら分母は複数形。'),
tr('es17d5','日本の高校生の多くは部活動、つまり放課後のクラブ活動に参加している。',['Many Japanese high school students take part in bukatsu, that is, club activities after school.','Most high school students in Japan join after-school clubs such as sports teams or music groups.'],'日本特有の事柄は説明を添える。that is で言いかえ。'),
fr('es17d6','Japan has a declining birth rate. What do you think is the main cause?','日本では出生率が低下している。主な原因は何だと思うか。','80～100語','I think the main cause of Japan\'s declining birth rate is the high cost of raising children. Many young couples want to have children, but they worry about whether they can afford it. In Japan, a large amount of money is needed for education, including fees for juku, or private cram schools, and university. In addition, wages for young workers have not risen much in recent years. As a result, the number of couples who decide to have only one child or none at all is increasing. The government should provide more financial support to families.','the number of（単数）/ a large amount of。juku に説明を添える。')
]});

/* ===== 第18課 ===== */
L.push({k:'es18',no:'第18課',title:'同じ・異なる／主張と根拠2',sub:'same / similar / different の語法と、根拠の質',
body:`
# A. 「同じ」「似ている」「異なる」
[同一・類似・相違の表現]
| the same A as B | Bと同じA
| the same as 〜 | 〜と同じ
| similar to 〜 | 〜に似ている
| resemble 〜 / look like 〜 | 〜に似ている（外見）
| different from 〜 | 〜と異なる
| differ from 〜 (in A) | （Aの点で）〜と異なる
| A have 〜 in common | Aには〜という共通点がある
| the difference between A and B | AとBの違い
| vary | さまざまである、異なる
- 18-1|I have {the same} bag {as} you.|私はあなた**と同じ**かばんを持っている。
x I have a same bag as you. / I have the same bag with you.
- 18-2|My opinion is {similar to} yours.|私の意見はあなたの意見**に似ている**。
- 18-3|Life in Tokyo is very {different from} life in my village.|東京の生活は私の村の生活とはまったく**違う**。
- 18-4|The two languages {have} a lot {in common}.|その2つの言語には**共通点が**多い。
- 18-5|Customs {vary from} country {to} country.|習慣は国**によって**さまざまだ。
: vary from A to A / differ from A to A「Aによって異なる」。

# B. 主張と根拠2　根拠の質を上げる
: 根拠は**個人的な好み**ではなく、**多くの人が納得できる理由**でなければならない。
[弱い根拠と強い根拠]
| 弱い（個人的な好み） | I like cats, so cats are better pets than dogs.
| 強い（一般に通じる理由） | Cats are better pets for busy people because they do not need to be walked.
| 弱い（極端な一般化） | All young people are addicted to smartphones.
| 強い（適切な限定） | Many young people spend several hours a day on their smartphones.
> 極端な表現（all / always / never / everyone）は反例が1つあれば崩れる。**many / often / most / tend to** などで適切に限定する（hedging）。
`,
drills:[
tr('es18d1','彼女は私と同じ高校に通っている。',['She goes to the same high school as I do.','She attends the same high school as me.'],'the same A as B。'),
tr('es18d2','日本の学校生活はアメリカの学校生活とはずいぶん違う。',['School life in Japan is quite different from that in the United States.','Japanese school life differs greatly from school life in America.'],'different from。比較対象をそろえる（that in）。'),
tr('es18d3','双子だが、2人には共通点がほとんどない。',['Although they are twins, they have little in common.','They are twins, but they have very few things in common.'],'have little in common「共通点がほとんどない」。'),
tr('es18d4','食事のマナーは国によって異なる。',['Table manners vary from country to country.','Eating customs differ from one country to another.'],'vary from A to A。'),
tr('es18d5','若者の多くはテレビよりもインターネットで情報を得る傾向がある。',['Many young people tend to get information from the Internet rather than from TV.','Young people often use the Internet more than television to get news.'],'many / tend to で適切に限定する。information は不可算。'),
fr('es18d6','Do you think boys and girls should study in separate schools?','男子と女子は別々の学校で学ぶべきだと思うか。','70～90語','I do not think boys and girls should study in separate schools. First, society is made up of both men and women, so students need to learn how to work with people who are different from them. Coeducational schools give them many chances to do this. Second, separating students by gender may strengthen stereotypes. For example, some people still believe that boys are better at science than girls, but in a mixed class, students can see that this is not always true. Therefore, I support coeducation.','different from / not always true で適切に限定。根拠を一般に通じる理由にする。')
]});

/* ===== 第19課 ===== */
L.push({k:'es19',no:'第19課',title:'前置詞を消して that 節へ／別の表現で言いかえる',sub:'「〜ということ」を書く技術と、書けない日本語の言いかえ',
body:`
# A. 前置詞＋that 節は不可
: **前置詞の直後に that 節は置けない**（in that / except that などの例外を除く）。「〜ということに気づく」「〜ということを確信している」などは、**前置詞を消して that 節を直接続ける**。
[前置詞が消える形容詞・動詞]
| be aware of A → be aware that 〜 | 〜ということに気づいている
| be sure [certain] of A → be sure that 〜 | 〜だと確信している
| be afraid of A → be afraid that 〜 | 〜ではないかと心配だ
| insist on A → insist that 〜 | 〜だと主張する
| complain about A → complain that 〜 | 〜だと不満を言う
| be surprised at A → be surprised that 〜 | 〜ということに驚く
= 19-1|I was not {aware that} he was ill.|彼が病気**だとは知らなかった**。
x I was not aware of that he was ill.
- 19-2|She {insisted that} she was right.|彼女は自分が正しい**と言い張った**。
x She insisted on that she was right.
- 19-3|I'm {sure that} you will pass.|あなたはきっと合格**すると思う**。
# A-2 前置詞の後ろに節を置きたいとき
: 前置詞を残したいときは、**the fact that 〜** や **疑問詞節**を使う。
- 19-4|We should pay attention to {the fact that} the population is aging.|人口が高齢化している**という事実**に注意を払うべきだ。
- 19-5|It depends on {whether} it rains.|雨が降る**かどうか**次第だ。
: 前置詞の後ろに whether / what / how などの疑問詞節は置ける。

# B. 別の表現で言いかえる
: 知らない単語・表現にぶつかったら、**辞書の訳語を探すのではなく、意味を分解して知っている英語で書く**。
[言いかえの手順]
| ① 日本語の意味を分解する | 「過疎化」→ 人が村から出ていき、住む人が減ること
| ② 知っている単語で書く | many people leave rural areas, so fewer people live there
| ③ 文の形を変える | 名詞（〜化）を動詞・節で書く
= 19-6|「過疎化が進んでいる」|Many young people are leaving rural areas, and fewer and fewer people live there.
- 19-7|「彼は八方美人だ」|He tries to please everyone.
- 19-8|「もったいない」|It is a waste to throw it away.
- 19-9|「一石二鳥」|It is a good way to achieve two goals at once.
> 英語のことわざを無理に使う必要はない。自信のない慣用句より、確実な平易な英語の方が得点になる。
`,
drills:[
tr('es19d1','彼女は自分が間違っていたことに気づいていなかった。',['She was not aware that she had been wrong.','She did not realize that she had made a mistake.'],'be aware of that は誤り。be aware that 〜。'),
tr('es19d2','彼は無実だと言い張った。',['He insisted that he was innocent.','He kept saying that he had done nothing wrong.'],'insist on that は誤り。insist that 〜。'),
tr('es19d3','試験に落ちるのではないかと心配だ。',['I\'m afraid that I might fail the exam.','I am worried that I will fail the exam.'],'be afraid that 〜 / be worried that 〜。'),
tr('es19d4','私たちは、資源には限りがあるという事実を忘れてはならない。',['We must not forget the fact that our resources are limited.','We should remember that natural resources will not last forever.'],'the fact that 〜。忘れないで、と言いかえも可。'),
tr('es19d5','まだ食べられる食べ物を捨てるのはもったいない。',['It is a waste to throw away food that can still be eaten.','Throwing away food that is still good to eat is wasteful.'],'「もったいない」を a waste / wasteful と言いかえる。'),
tr('es19d6','地方では過疎化が進んでいる。',['In rural areas, more and more young people are moving away, so the population is getting smaller.','The countryside is losing its population as young people leave for cities.'],'「過疎化」を意味に分解して書く。'),
fr('es19d6b','What can be done to reduce food waste?','食品ロスを減らすために何ができるか。','70～90語','I think each of us can reduce food waste by planning our meals more carefully. Many people buy more food than they need because they shop without a list. As a result, a large amount of food goes bad in the refrigerator and is thrown away. If we check what we already have before going shopping, we can avoid buying too much. In addition, restaurants should let customers take home the food they cannot finish. It is a waste to throw away food that someone could still enjoy.','「食品ロス」「もったいない」を平易な英語で言いかえる。a large amount of。')
]});

/* ===== 第20課 ===== */
L.push({k:'es20',no:'第20課',title:'心配・不安と興味・関心／主張と根拠3',sub:'感情の形容詞と前置詞、反論への備え',
body:`
# A. 心配・不安の表現
[心配・不安]
| be worried about 〜 / worry about 〜 | 〜を心配する
| be anxious about 〜 | 〜を不安に思う
| be anxious for 〜 / to do | 〜を切望する（意味の違いに注意）
| be concerned about 〜 | 〜を懸念する（社会問題など）
| be nervous (about 〜) | （本番前に）緊張している
| be afraid of 〜 / that 〜 | 〜をこわがる／〜ではないかと心配だ
- 20-1|Many people {are concerned about} climate change.|多くの人が気候変動**を懸念している**。
- 20-2|I always {get nervous} before a test.|テスト前はいつも**緊張する**。
- 20-3|She {is anxious to} meet you.|彼女はあなたにとても**会いたがっている**。
: anxious to do は「〜したがっている」で、不安の意味ではない。
# A-2 興味・関心の表現
[興味・関心]
| be interested in 〜 | 〜に興味がある（人が主語）
| interesting | 興味深い（物が主語）
| be curious about 〜 | 〜について知りたがる
| be into 〜 | 〜にはまっている（口語）
| take [have] an interest in 〜 | 〜に関心を持つ
| be fascinated by 〜 | 〜に魅了される
| attract 人's attention | 人の注意を引く
- 20-4|I {became interested in} history after visiting Kyoto.|京都を訪れてから歴史**に興味を持つようになった**。
x I was interesting in history.
- 20-5|Children are {curious about} everything.|子どもは何にでも**興味津々だ**。

# B. 主張と根拠3　反論を想定する
: 説得力のある文章は、**読み手が思いつきそうな反論を先回りして取り上げ、それに答える**。
[反論への対応の型]
| 反論の提示 | Some people may argue that 〜. / It may be said that 〜.
| 一部を認める | It is true that 〜. / Admittedly, 〜.
| 再反論 | However, 〜. / But this is not always the case.
= 20-6|{Some people may argue that} online classes reduce communication among students. {It is true that} students cannot chat during breaks. {However}, they can still discuss ideas in online group work.|オンライン授業は生徒同士の交流を減らす**と主張する人もいるかもしれない**。休み時間におしゃべりできないのは**確かだ**。**しかし**、オンラインのグループ作業でも意見を話し合うことはできる。
> 反論は1つで十分。反論に字数を使いすぎると自分の主張が弱く見える。
`,
drills:[
tr('es20d1','多くの親が子どものインターネットの使い方を心配している。',['Many parents are worried about how their children use the Internet.','A lot of parents are concerned about their children\'s Internet use.'],'be worried about / be concerned about＋疑問詞節。'),
tr('es20d2','面接の前はとても緊張した。',['I was very nervous before the interview.','I got really nervous before my interview.'],'nervous「緊張した」。'),
tr('es20d3','彼女は留学したいと強く思っている。',['She is anxious to study abroad.','She is eager to study in a foreign country.'],'be anxious to do「〜したがっている」。'),
tr('es20d4','その映画を見てから、宇宙に興味を持つようになった。',['I became interested in space after watching the movie.','The movie made me interested in outer space.'],'be interested in。interesting と混同しない。'),
tr('es20d5','制服は自由を制限すると主張する人もいるだろう。確かにそうだが、制服にはそれ以上の利点がある。',['Some people may argue that school uniforms limit freedom. It is true that they do, but uniforms have greater advantages.','It may be said that uniforms restrict students\' freedom. Admittedly, this is true; however, their benefits outweigh this drawback.'],'Some people may argue that → It is true that → However の型。'),
fr('es20d6','Should people worry about the effects of AI on jobs?','AIが仕事に与える影響を心配すべきか。','80～100語','I do not think people should worry too much about the effects of AI on jobs. Some people may argue that AI will take away many jobs. It is true that machines will replace some tasks, such as simple data entry. However, history shows that new technology also creates new kinds of work. When computers became common, many jobs that nobody had imagined before appeared. In addition, AI can take over boring tasks so that people can focus on creative work. Instead of being anxious, we should become interested in learning new skills.','worried / anxious / interested を使い分け、反論→It is true→However の型を使う。')
]});

/* ===== 第21課 ===== */
L.push({k:'es21',no:'第21課',title:'「の」は of か／無駄を省く',sub:'日本語の「の」を正しい前置詞・構文にする',
body:`
# A. 「AのB」の英訳
: 日本語の「の」はあらゆる関係を表すため、**何でも of にすると誤り**になる。AとBの関係を考えて表現を選ぶ。
[「の」の訳し分け]
| 所有 | my brother's car（兄の車）※人・動物は 's
| 部分・所属 | the roof of the house（家の屋根）
| 場所 | the people in this town（この町の人々）、a shop near the station（駅の近くの店）
| 時 | the meeting on Monday（月曜日の会議）、yesterday's newspaper（昨日の新聞）
| 材料 | a box made of paper / a paper box（紙の箱）
| 目的・対象 | a book for children（子ども向けの本）、an answer to the question（質問への答え）
| 主題 | a book about [on] history（歴史の本）
| 同格 | the city of Kyoto（京都という都市）
| 形容詞・名詞を前に置く | a Japanese teacher（日本人の先生）、a math test（数学のテスト）
- 21-1|the key {to} the door|ドア**の**鍵（× the key of the door）
- 21-2|an answer {to} the question|その質問**への**答え
- 21-3|the students {in} my class|私のクラス**の**生徒
- 21-4|a friend {from} high school|高校時代**の**友人
- 21-5|the solution {to} the problem|その問題**の**解決策
x the reason of the accident → ○ the reason **for** the accident（事故の原因）
x the effect of smartphones to children → ○ the effect **of** smartphones **on** children
> to をとる名詞：key / answer / solution / approach / access / entrance / visit / reaction ＋ to。for をとる名詞：reason / need / demand / respect ＋ for。

# B. 無駄を省く
: 語数を稼ごうとして**同じ内容を繰り返したり、意味のない語句を加えたり**すると減点につながる。短く明確な文の方が評価は高い。
[省くべき無駄]
| 重複表現 | ×return back → return、×repeat again → repeat、×past history → history
| 意味の薄い前置き | ×I think that I believe 〜 → I believe 〜
| very の多用 | ×very very important → essential / crucial
| It is 〜 that の乱用 | ×It is my opinion that 〜 → I think 〜
| 名詞化しすぎ | ×make a decision about the cancellation → decide to cancel
= 21-6|×In my personal opinion, I think that it is very very important to protect the environment.|→ ○ **Protecting the environment is essential.**
- 21-7|×The reason why I like summer is because ...|→ ○ **I like summer because ...** / The reason I like summer is that ...
: The reason is because は重複（reason と because がともに理由）。The reason is that が正しい形。
`,
drills:[
tr('es21d1','これがその問題の解決策だ。',['This is the solution to the problem.','Here is the answer to the problem.'],'solution / answer to。of は使わない。'),
tr('es21d2','スマートフォンが子どもに与える影響について調べた。',['I researched the effects of smartphones on children.','I studied how smartphones affect children.'],'the effect of A on B。affect を動詞で使うのも可。'),
tr('es21d3','その事故の原因はまだわかっていない。',['The cause of the accident is still unknown.','The reason for the accident has not been found yet.'],'cause of / reason for。'),
tr('es21d4','月曜日の会議は中止になった。',['Monday\'s meeting has been canceled.','The meeting on Monday was called off.'],'時の「の」は on / 所有格。'),
tr('es21d5','私が夏を好きな理由は、長い休みがあるからだ。',['The reason I like summer is that we have a long vacation.','I like summer because there is a long vacation.'],'The reason is that 〜。The reason is because は重複。'),
fr('es21d6','What is the effect of social media on young people?','ソーシャルメディアが若者に与える影響は何か。','70～90語','Social media has both positive and negative effects on young people. On the positive side, it gives them access to information and lets them keep in touch with friends who live far away. However, it can also harm their mental health. Many young people compare their own lives with the perfect images posted by others and feel that they are not good enough. The solution to this problem is not to ban social media but to teach young people how to use it wisely.','effect on / access to / solution to と前置詞を使い分ける。無駄な語を省く。')
]});

/* ===== 第22課 ===== */
L.push({k:'es22',no:'第22課',title:'スポーツ・運動／物語(narrative)1',sub:'スポーツの動詞と、出来事を時系列で語る',
body:`
# A. スポーツ・運動の表現
[スポーツと動詞の組み合わせ]
| play ＋球技 | play soccer / play tennis（無冠詞）
| do ＋格技・個人競技 | do judo / do yoga / do gymnastics
| go ＋ -ing | go swimming / go skiing / go jogging
| practice / train | 練習する／トレーニングする
| win / lose a game [match] | 試合に勝つ／負ける
| beat [defeat] 相手 | 相手を負かす
| take part in / participate in 〜 | 〜に参加する
| exercise / get exercise | 運動する
- 22-1|We {won} the game 3 to 1.|私たちは3対1で試合に**勝った**。
x We won the other team.（win の目的語は試合・賞 → We beat the other team.）
- 22-2|I {go swimming} twice a week.|週に2回**泳ぎに行く**。
x I go to swimming.
- 22-3|You should {get more exercise}.|もっと**運動した**ほうがいい。
x You should do more sports.（「運動する」は exercise。sports は競技）
- 22-4|She {is a member of} the volleyball team.|彼女はバレーボール部**の部員だ**。
x She belongs to volleyball club.（冠詞の欠落。belong to も可だが be on [in] the team が自然）

# B. 物語(narrative)1　出来事を時系列で語る
: 体験談は**時系列（いつ→何が起きた→どうなった）**で書く。時制は**過去形を軸に**、それより前のことは過去完了、そのとき続いていたことは過去進行形。
[時系列をつなぐ表現]
| At first, 〜 | 最初は
| Then, 〜 / After that, 〜 | それから／その後
| When S V, 〜 / As soon as S V, 〜 | 〜したとき／〜するとすぐに
| Finally, 〜 / In the end, 〜 | 最後に／結局
| Since then, 〜 | それ以来（現在完了と）
= 22-5|{When I was} in junior high school, I {joined} the basketball team. {At first}, I {could not} even dribble well. {Then} our coach {taught} me to practice for ten minutes every morning. {In the end}, I {became} a regular player.|中学生のとき、私はバスケットボール部に入った。最初はドリブルさえうまくできなかった。それからコーチが毎朝10分練習するよう教えてくれた。最終的に、私はレギュラー選手になった。
> at last（苦労の末にやっと）と finally（最後に、ついに）、in the end（結局）は少しずつ意味が違う。
`,
drills:[
tr('es22d1','私たちのチームは決勝で強豪校に勝った。',['Our team beat a strong school in the final.','Our team defeated a powerful team in the final match.'],'beat [defeat] 相手。win の目的語は試合。'),
tr('es22d2','週末はよく友だちとテニスをする。',['I often play tennis with my friends on weekends.','On weekends, I often play tennis with friends.'],'play＋球技（無冠詞）。'),
tr('es22d3','冬になると、家族でスキーに行く。',['In winter, my family goes skiing.','Every winter, we go skiing as a family.'],'go＋-ing。go to skiing は誤り。'),
tr('es22d4','健康のために、もっと運動すべきだと医者に言われた。',['My doctor told me that I should get more exercise for my health.','The doctor advised me to exercise more to stay healthy.'],'exercise / get exercise。'),
tr('es22d5','最初は泳げなかったが、毎日練習して、ついに50メートル泳げるようになった。',['At first I couldn\'t swim, but I practiced every day and finally became able to swim 50 meters.','I could not swim at first, but after practicing every day, I was at last able to swim 50 meters.'],'At first → finally / at last の時系列。'),
fr('es22d6','Describe a memorable experience you had in a sports event or club activity.','スポーツの大会や部活動での印象に残る経験を書きなさい。','80～100語','The most memorable experience I had was at a relay race at my high school\'s sports festival. I was the last runner on my team, and when I received the baton, we were in fourth place. At first, I thought it was impossible to win, but I could hear my classmates cheering for me, so I ran as fast as I could. I passed two runners just before the finish line, and we finished second. Although we did not win, that day taught me never to give up until the very end.','過去形を軸に時系列で語る。At first / just before / Although で流れを作る。')
]});

/* ===== 第23課 ===== */
L.push({k:'es23',no:'第23課',title:'頭と心／物語(narrative)2',sub:'mind と heart、思考と感情の表現と、体験から学びを導く',
body:`
# A. 「頭」と「心」
: 日本語の「頭」「心」は比喩的に使われることが多い。英語では**思考・知性は mind / brain、感情は heart / feelings**が基本。
[頭（思考・知性）]
| clever / smart / bright | 頭がいい（clever は「要領がいい」の含みも）
| have a good memory | 記憶力がいい
| come to mind / occur to 人 | 頭に浮かぶ
| keep [bear] in mind | 心に留めておく
| change one's mind | 考えを変える
| make up one's mind | 決心する
| lose one's temper | 頭にくる、かっとなる
[心（感情）]
| from the bottom of one's heart | 心の底から
| be moved / be touched | 心を動かされる
| feel relieved | ほっとする
| feel at ease / feel uneasy | 落ち着く／落ち着かない
| be heartbroken | 胸が張り裂ける
| warm-hearted / cold-hearted | 心の温かい／冷たい
- 23-1|A good idea {came to mind}.|よい考えが**頭に浮かんだ**。
- 23-2|Please {keep in mind} that the store closes at eight.|店は8時に閉まることを**覚えておいて**ください。
- 23-3|I {made up my mind} to study abroad.|留学しようと**決心した**。
- 23-4|I {was deeply moved} by her speech.|彼女のスピーチに**深く感動した**。
- 23-5|I {felt relieved} when I heard the news.|その知らせを聞いて**ほっとした**。
x My head is good.（頭がいい → I am smart.）
x I was moving by the movie.（感情は受動 → I was moved）

# B. 物語(narrative)2　体験から学びを導く
: 体験談は**出来事を語るだけで終わらせず**、そこから何を学んだか・どう変わったかを書いて締める（第14課の一般化と同じ発想）。
[体験談の型]
| 場面設定 | When I was 〜, I 〜.
| 問題・転機 | However, 〜. / One day, 〜.
| 行動・結果 | So I decided to 〜. As a result, 〜.
| 学び・変化 | This experience taught me 〜. / Since then, I have 〜.
= 23-6|{Since then}, I {have tried} to speak to new students first.|**それ以来**、新入生には自分から話しかけるように**している**。
: Since then は現在完了と組み合わせ、過去の体験が現在の自分につながっていることを示す。
> 「〜と思った」は I thought 〜 だけでなく、I realized 〜（気づいた）、I felt 〜（感じた）、It occurred to me that 〜（ふと思った）を使い分けると表現が豊かになる。
`,
drills:[
tr('es23d1','いくら考えても、彼女の名前が思い出せない。',['No matter how hard I try, I can\'t remember her name.','However hard I think, her name won\'t come to mind.'],'come to mind / remember。no matter how 〜。'),
tr('es23d2','このことは心に留めておいてください。',['Please keep this in mind.','Please bear this in mind.'],'keep [bear] 〜 in mind。'),
tr('es23d3','彼は最後の瞬間に考えを変えた。',['He changed his mind at the last moment.','At the last minute, he changed his mind.'],'change one\'s mind。'),
tr('es23d4','手紙を読んで、私は深く心を打たれた。',['I was deeply moved by the letter.','The letter touched me deeply.'],'be moved / touch（感情は受動・無生物主語）。'),
tr('es23d5','それ以来、私は失敗を恐れずに挑戦するようにしている。',['Since then, I have tried to take on challenges without being afraid of failure.','Ever since, I have been trying new things without fearing failure.'],'Since then＋現在完了。'),
fr('es23d6','Write about an experience that changed the way you think.','あなたの考え方を変えた経験について書きなさい。','80～100語','When I was in my first year of high school, I thought being smart meant getting good grades. However, one day I volunteered at a children\'s cafeteria in my town. A little boy there could not read well, but he was very kind to the younger children and always shared his food. I was deeply moved by how warm-hearted he was. It occurred to me that there are many kinds of intelligence, and kindness is one of the most important. Since then, I have tried to value people for who they are, not for their test scores.','場面設定→転機→心の動き（moved / occurred to me）→Since then＋現在完了で学びを示す。')
]});
})();
