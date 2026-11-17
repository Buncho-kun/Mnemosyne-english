// 英作文（表現テーマ＋論理構成）第34課〜第42課 ― 例文・解説・問題はすべてこのアプリ用に作成
(function(){
const D=window.EIGO_DATA,deck=D.decks.find(d=>d.id==='eisaku');if(!deck)return;
const L=deck.items;
const tr=(k,ja,models,point,hint)=>({k,kind:'tr',ja,models:Array.isArray(models)?models:[models],point,hint:hint||''});
const fr=(k,en,ja,words,model,point)=>({k,kind:'free',en,ja,words,models:[model],point});

/* ===== 第34課 ===== */
L.push({k:'es34',no:'第34課',title:'「意味」／論理の補強7 根拠の追加(1)',sub:'mean / meaning / sense と、根拠を積み重ねる',
body:`
# A. 「意味」の表現
[「意味」の使い分け]
| mean (動詞) | 意味する；（〜のつもりで）言う；（重要性が）ある
| meaning (名詞) | （語・人生などの）意味
| sense | 意味、意義；感覚；道理（make sense）
| point | 要点、意義（What's the point of 〜?）
| significance | 重要性、意義
| make sense | 意味が通じる、道理にかなう
| There is no point in doing | 〜しても意味がない
= 34-1|What does this word {mean}?|この単語はどういう**意味ですか**。
x What is the mean of this word?
- 34-2|I didn't {mean} to hurt you.|あなたを傷つける**つもりはなかった**。
- 34-3|Your friendship {means} a lot to me.|あなたの友情は私にとって**大きな意味がある**。
- 34-4|His explanation doesn't {make sense}.|彼の説明は**筋が通らない**。
- 34-5|{There is no point in} arguing about it now.|今さらそれについて言い争っても**意味がない**。
- 34-6|In a {sense}, he is right.|**ある意味では**、彼は正しい。
- 34-7|What is {the meaning of} life?|人生の**意味**とは何だろう。

# B. 論理の補強7　根拠の追加(1)
: 理由を挙げた後、**さらに別の角度からの根拠**を加えて主張を強化する。同じ内容の言いかえではなく、**新しい情報**を加えることが大切。
[根拠を追加する表現]
| In addition, 〜 / Moreover, 〜 / Furthermore, 〜 | さらに（第7課）
| What is more, 〜 | そのうえ
| Not only that, but 〜 | それだけでなく
| Another reason is that 〜 | もう1つの理由は
| It is also worth noting that 〜 | 〜にも注目すべきだ
= 34-8|Walking to school is good for your health. {What is more}, it saves money on transportation.|歩いて通学するのは健康によい。**そのうえ**、交通費の節約にもなる。
x Walking is good for your health. Moreover, it is healthy.（同じ内容の繰り返しで、新しい根拠になっていない）
`,
drills:[
tr('es34d1','その言葉が本当は何を意味していたのか、後になってわかった。',['I realized later what those words had really meant.','Only later did I understand the real meaning of those words.'],'mean（動詞）/ meaning（名詞）。'),
tr('es34d2','悪気はなかったんです。',['I didn\'t mean any harm.','I didn\'t mean to offend you.'],'mean「〜のつもりで言う」。'),
tr('es34d3','この計画は理にかなっていない。',['This plan doesn\'t make sense.','This plan is not reasonable.'],'make sense。'),
tr('es34d4','今さら後悔しても意味がない。',['There is no point in regretting it now.','It is no use having regrets now.'],'There is no point in doing。'),
tr('es34d5','読書は知識を増やす。そのうえ、想像力も豊かにしてくれる。',['Reading increases our knowledge. What is more, it enriches our imagination.','Reading not only gives us knowledge; it also develops our imagination.'],'新しい根拠を追加する。'),
fr('es34d6','What does "success" mean to you?','あなたにとって「成功」とは何を意味するか。','80～100語','To me, success means being able to do work that makes other people\'s lives better. Many people think success means earning a lot of money, but money alone does not make life meaningful. For example, my aunt is a nurse. Her salary is not high, but she says she feels successful every time a patient leaves the hospital smiling. What is more, work that helps others gives us a reason to keep going even when it is hard. In this sense, I believe success is measured by the difference we make, not by our income.','mean / meaningful / in this sense。What is more で新しい根拠を追加。')
]});

/* ===== 第35課 ===== */
L.push({k:'es35',no:'第35課',title:'「助言する・勧める」／論理の補強8 根拠の追加(2)',sub:'advise / recommend / suggest の語法と、データ・権威による補強',
body:`
# A. 助言・提案の語法
: 「勧める」系の動詞は**語法がばらばら**で、入試・英作文の頻出ポイント。
[助言・提案の動詞の語法]
| advise 人 to do | 人に〜するよう助言する
| recommend doing / that S (should) 原形 | 〜することを勧める（× recommend 人 to do は避ける）
| recommend A to 人 | 人にAを推薦する
| suggest doing / that S (should) 原形 | 〜しようと提案する（× suggest 人 to do）
| propose doing / to do / that 〜 | 〜を提案する
| encourage 人 to do | 人に〜するよう励ます
| urge 人 to do | 人に〜するよう強く勧める
= 35-1|The doctor {advised} me {to} get more sleep.|医者は私にもっと睡眠をとる**よう助言した**。
- 35-2|I {recommend} {reading} this book.|この本を読む**ことを勧めます**。
- 35-3|She {suggested that} we {(should) leave} early.|彼女は早く出発**しようと提案した**。
x She suggested us to leave early.
- 35-4|Can you {recommend} a good restaurant {to} me?|よいレストランを**紹介して**くれますか。
x Can you recommend me a good restaurant?（口語では使われるが、英作文では to 人 が安全）
[助言の表現]
| You should 〜 / You'd better 〜 | 〜したほうがいい（had better は強い）
| Why don't you 〜? | 〜したらどう？
| If I were you, I would 〜 | 私なら〜する
| It might be a good idea to 〜 | 〜するのもいいかもしれない
| advice（名詞・不可算） | 助言（a piece of advice）

# B. 論理の補強8　根拠の追加(2)
: 体験や推論に加え、**一般に知られている事実・専門家の見解**で補強すると、主張が個人的な意見を超える。ただし**架空の統計は書かない**（第11課）。
[事実・権威による補強]
| It is widely known that 〜 | 〜は広く知られている
| Doctors [Experts] often say that 〜 | 医者［専門家］はよく〜と言う
| According to many studies, 〜 | 多くの研究によると
| It is generally believed that 〜 | 一般に〜と考えられている
| As we can see from 〜 | 〜からわかるように
= 35-5|{Doctors often recommend that} people {walk} at least 30 minutes a day.|**医者はよく**、1日に少なくとも30分歩く**よう勧める**。
> 書くのは**誰もが認める一般常識レベル**の事実にとどめる。具体的な数字を出す場合は、確実に知っているものだけ。
`,
drills:[
tr('es35d1','先生は私に、毎日英字新聞を読むよう勧めた。',['My teacher advised me to read an English newspaper every day.','My teacher recommended that I read an English newspaper every day.'],'advise 人 to do / recommend that S 原形。'),
tr('es35d2','友だちが、週末に一緒にハイキングに行こうと提案した。',['My friend suggested going hiking together on the weekend.','My friend suggested that we go hiking together on the weekend.'],'suggest doing / that S 原形。suggest 人 to do は不可。'),
tr('es35d3','よい辞書を推薦してもらえますか。',['Could you recommend a good dictionary to me?','Can you recommend a good dictionary?'],'recommend A to 人。'),
tr('es35d4','私があなたなら、その申し出を受けるでしょう。',['If I were you, I would accept the offer.','In your position, I would take the offer.'],'If I were you。'),
tr('es35d5','運動が心の健康によいことは広く知られている。',['It is widely known that exercise is good for mental health.','It is well known that physical activity improves our mental health.'],'It is widely known that 〜。'),
fr('es35d6','What advice would you give to a student who is going to study abroad?','留学する生徒にどんな助言をするか。','80～100語','I would advise a student who is going to study abroad to make friends with local people instead of spending time only with other Japanese students. It is generally believed that the fastest way to improve a language is to use it in real situations. If you stay with people from your own country, you may feel comfortable, but your language skills will not improve much. I would also recommend keeping a diary in the local language. Writing about your experiences every day helps you remember new words and see your own progress.','advise 人 to do / recommend doing。一般に認められた事実で補強。')
]});

/* ===== 第36課 ===== */
L.push({k:'es36',no:'第36課',title:'「能力・できる」／論理の補強9 仮定法を活用する',sub:'can / be able to / manage to と、仮定で主張を際立たせる',
body:`
# A. 「できる」の使い分け
[「できる」の表現]
| can / could | 能力・可能性（一般的な能力）
| be able to do | 〜できる（未来・完了形・助動詞の後でも使える）
| was able to / managed to do | （過去に1回）何とか〜できた
| succeed in doing | 〜することに成功する
| It is possible (for 人) to do | （人が）〜することは可能だ
| be capable of doing | 〜する能力がある
| be good at / skillful at | 〜が得意だ
= 36-1|I {could} swim when I was five.|5歳のとき泳ぐ**ことができた**。（一般的な能力）
= 36-2|The sea was rough, but I {managed to} swim to the shore.|海は荒れていたが、何とか岸まで**泳ぎ着くことができた**。（1回の行為）
x The sea was rough, but I could swim to the shore.（過去の1回の成功には could を使わない）
- 36-3|I {will be able to} drive next year.|来年は運転**できるようになる**。
x I will can drive.
- 36-4|Some animals {are capable of} using tools.|道具を使う**能力がある**動物もいる。
x Some animals are capable to use tools.

# B. 論理の補強9　仮定法を活用する
: 「もし〜がなかったら」「もし〜したら」と**仮定の状況を描く**と、主張の重要性が際立つ。
[仮定法の活用]
| 不在を仮定する | Without 〜, we would [could not] …（〜がなければ…）
| 反対の選択を仮定する | If we did not 〜, … would happen.
| 未来を仮定する | If 〜 were to happen, …
| 過去を仮定する | If 〜 had not …, we would never have …
= 36-5|{Without} public libraries, many children {would not have} access to books.|公共図書館**がなければ**、多くの子どもは本に触れる**ことができないだろう**。
- 36-6|{If} everyone {drove} to work, the roads {would be} completely blocked.|**もし**誰もが車で通勤**したら**、道路は完全にふさがって**しまうだろう**。
> 仮定法は**時制のずらし**を正確に。If 〜 過去形, … would 原形（現在）／If 〜 had p.p., … would have p.p.（過去）。混同すると大きな減点になる（英文解釈§23）。
`,
drills:[
tr('es36d1','子どものころは、一日中外で遊ぶことができた。',['When I was a child, I could play outside all day.','As a child, I was able to play outdoors all day long.'],'一般的な過去の能力は could。'),
tr('es36d2','道に迷ったが、何とか時間どおりに会場に着くことができた。',['I got lost, but I managed to arrive at the venue on time.','Although I lost my way, I was able to get to the hall on time.'],'過去1回の成功は managed to / was able to。'),
tr('es36d3','来年にはもっと上手に英語を話せるようになっていたい。',['I want to be able to speak English better by next year.','I hope I will be able to speak English more fluently next year.'],'will be able to。will can は不可。'),
tr('es36d4','電気がなければ、私たちの生活は成り立たないだろう。',['Without electricity, our lives would not be possible.','If there were no electricity, we could not live as we do now.'],'Without 〜, would …の仮定法。'),
tr('es36d5','もしあの時あきらめていたら、今の私はなかっただろう。',['If I had given up then, I would not be who I am today.','Had I given up at that time, I would not be where I am now.'],'混合型の仮定法（過去の条件→現在の結果）。'),
fr('es36d6','How important is the Internet in your life?','あなたの生活でインターネットはどれほど重要か。','80～100語','The Internet is extremely important in my life. Without it, I would not be able to study the way I do now. For example, when I do not understand a math problem, I can watch video lessons that explain it step by step. I also use the Internet to keep in touch with a friend who moved to Canada. If there were no Internet, we would have to write letters and wait weeks for a reply, and we might have lost touch by now. In short, the Internet has become a part of almost everything I do.','Without 〜 / If there were no 〜 の仮定法で重要性を際立たせる。')
]});

/* ===== 第37課 ===== */
L.push({k:'es37',no:'第37課',title:'休日の過ごし方／優れた英作文1 つなぎ言葉に頼りすぎない',sub:'余暇の表現と、内容でつなぐ文章',
body:`
# A. 休日・余暇の表現
[休日の表現]
| on weekends / on holidays | 週末に／休日に
| day off / holiday / vacation | 休みの日／祝日・休暇／長期休暇
| spend 時間 doing | 〜して過ごす
| relax / take it easy / unwind | くつろぐ
| go shopping / go fishing / go camping | 買い物／釣り／キャンプに行く
| get together with 〜 | 〜と集まる
| stay home / stay in | 家にいる
| catch up on 〜 | （遅れていた）〜を取り戻す：catch up on sleep
= 37-1|I usually {spend} my weekends {reading} at a café.|週末はたいていカフェで本を**読んで過ごす**。
- 37-2|On my {day off}, I like to {take it easy}.|**休みの日**は**のんびりする**のが好きだ。
- 37-3|I {caught up on} sleep last Sunday.|先週の日曜日は寝**不足を取り戻した**。
x I went to shopping.（go shopping。to は不要）
x I enjoyed at the park.（enjoy は目的語が必要 → enjoyed myself / enjoyed walking）

# B. 優れた英作文1　つなぎ言葉に頼りすぎない
: First / Second / In addition / However などのつなぎ言葉（ディスコースマーカー）は便利だが、**すべての文の頭につけると機械的**で読みにくい。よい文章は**内容そのもので文と文がつながる**。
[内容でつなぐ技術]
| 前の文の語を受ける | 〜 a small garden. **The garden** is 〜
| 代名詞・指示語で受ける | **This** / **Such** experiences 〜
| 前の文の内容を要約して主語に | **This habit** helped me 〜
| 同じ語を繰り返さず言いかえる | dogs → these animals
= 37-4|× First, I go jogging on Sundays. Second, I clean my room. In addition, I cook dinner. Moreover, I read books.|（すべての文の頭にマーカーがあり、単なる列挙になっている）
= 37-5|○ On Sundays, I start the day with a jog along the river. {The fresh morning air} clears my head, so I can spend the afternoon reading without feeling tired.|日曜日は川沿いのジョギングで一日を始める。**朝の新鮮な空気**で頭がすっきりするので、午後は疲れを感じずに読書をして過ごせる。
: 2文目が1文目の「ジョギング」の結果を受けている。マーカーなしで論理がつながっている。
> つなぎ言葉は**論理の転換点**（逆接・結論）に絞って使う。100語程度の答案なら3〜4個で十分。
`,
drills:[
tr('es37d1','休日はたいてい家でゆっくりして過ごす。',['On my days off, I usually relax at home.','I usually spend my holidays taking it easy at home.'],'spend 時間 doing / relax。'),
tr('es37d2','先週末は友だちと買い物に行った。',['Last weekend, I went shopping with my friends.','I went shopping with some friends last weekend.'],'go shopping。to は不要。'),
tr('es37d3','夏休みに家族でキャンプに行き、とても楽しかった。',['During the summer vacation, I went camping with my family and really enjoyed it.','My family went camping in the summer holidays, and we had a great time.'],'enjoy は目的語が必要。'),
tr('es37d4','日曜日にはたまった洗濯物を片づける。',['On Sundays, I catch up on my laundry.','I do all the washing that has piled up during the week on Sundays.'],'catch up on 〜。'),
tr('es37d5','私は毎朝犬を散歩させる。この習慣のおかげで、早起きが苦にならなくなった。',['I walk my dog every morning. This habit has made it easy for me to get up early.','Every morning I take my dog for a walk, and thanks to this routine, getting up early is no longer hard for me.'],'This habit で前の文の内容を受けてつなぐ。'),
fr('es37d6','How do you like to spend your weekends?','あなたは週末をどう過ごすのが好きか。','80～100語','I like to spend my weekends cooking for my family. On Saturday mornings, I go to the local market with my mother and choose fresh vegetables and fish. The sellers there often tell us the best way to cook what we buy, and these tips have become my favorite part of the trip. Back home, I try a new recipe every week. Last Saturday, I made a fish curry from Sri Lanka. My younger brother, who usually complains about fish, asked for a second plate. Cooking has taught me that small efforts can make people happy.','つなぎ言葉を最小限にし、these tips / Back home / Last Saturday など内容でつなぐ。')
]});

/* ===== 第38課 ===== */
L.push({k:'es38',no:'第38課',title:'「決める・選ぶ」／優れた英作文2 具体性を持たせる(1)',sub:'decide / choose / select と、抽象語を具体化する',
body:`
# A. 「決める・選ぶ」の表現
[決める・選ぶ]
| decide to do / decide that 〜 | 〜しようと決める
| decide on 〜 | （選択肢から）〜に決める
| make up one's mind | 決心する
| determine | （正式に）決定する；決意する（be determined to do）
| choose (A from B) | （Bの中からAを）選ぶ
| select | （慎重に）選び出す
| pick (out) | （気軽に）選ぶ
| make a decision / make a choice | 決定する／選択する
| It's up to 人 | 人次第だ、人が決めることだ
= 38-1|I {decided to} study medicine.|医学を学ぶ**ことに決めた**。
x I decided studying medicine.
- 38-2|We {decided on} the blue one.|私たちは青いの**に決めた**。
- 38-3|She is {determined to} become a pilot.|彼女はパイロットになる**と固く決意している**。
- 38-4|It's hard to {choose} a gift {for} my father.|父**への**プレゼントを**選ぶ**のは難しい。
- 38-5|{It's up to} you.|**あなた次第です**（あなたが決めて）。

# B. 優れた英作文2　具体性を持たせる(1)
: 採点者の印象に残る答案は**具体的**。抽象的な語（good / useful / important / many things）を**具体的な名詞・動詞・数字**に置きかえる。
[抽象→具体の書きかえ]
| × It is useful. | ○ It lets me check train times in seconds.
| × I learned many things. | ○ I learned how to apologize and how to listen.
| × It is good for health. | ○ It lowers the risk of heart disease.
| × Many people use it. | ○ Most of my classmates use it every day.
| × We should do something. | ○ We should bring our own bags when we shop.
= 38-6|× Club activities are good because we can learn many things.|→ ○ Club activities are valuable because they teach us **how to keep going after a defeat** and **how to work with people we don't always like**.
> 「具体的に」とは、**読み手が場面を思い浮かべられる**こと。「誰が・何を・どのように」を1つでも加えると具体性が上がる。
`,
drills:[
tr('es38d1','長い間迷った末、私は地元の大学に進むことに決めた。',['After thinking about it for a long time, I decided to go to a local university.','After a lot of hesitation, I made up my mind to attend a university in my hometown.'],'decide to do / make up one\'s mind。'),
tr('es38d2','たくさんの候補の中から、彼女はリーダーに選ばれた。',['She was chosen as the leader from among many candidates.','Out of many candidates, she was selected to be the leader.'],'choose / select の受動態。'),
tr('es38d3','どの大学に行くかは、あなたが決めることだ。',['It\'s up to you which university you go to.','Which university to go to is your decision.'],'It\'s up to 人。'),
tr('es38d4','彼は何があっても夢をあきらめないと固く決意している。',['He is determined not to give up his dream no matter what happens.','He has firmly decided never to give up on his dream.'],'be determined to do。'),
tr('es38d5','スマートフォンは便利だ。例えば、数秒で電車の時刻を調べられる。',['Smartphones are convenient. For example, you can check train times in a few seconds.','Smartphones make life easier; for instance, they let us find train schedules in seconds.'],'useful を具体的な行為に置きかえる。'),
fr('es38d6','What was the most difficult decision you have ever made?','これまでで最も難しかった決断は何か。','80～100語','The most difficult decision I have ever made was to quit the baseball team in my second year of junior high school. I had played baseball since I was seven, and my father had been my first coach. However, I had become more interested in science, and I wanted to join the science club, which met on the same days as baseball practice. It took me a month to tell my father. To my surprise, he said, "It\'s your life, so it\'s up to you." That conversation taught me that making my own choices is part of growing up.','決断の背景を具体的に（いつ・何を・なぜ）。decide / up to you を使う。')
]});

/* ===== 第39課 ===== */
L.push({k:'es39',no:'第39課',title:'割合・グラフの説明／優れた英作文3 具体性を持たせる(2)',sub:'数値の変化を英語で描写し、数字で説得力を出す',
body:`
# A. 割合・グラフの表現
[割合の表現]
| 〜 percent of A | Aの〜パーセント（動詞は A に一致）
| a third / a quarter / half of 〜 | 3分の1／4分の1／半分
| the majority / a minority of 〜 | 大多数／少数
| the proportion [percentage, rate] of 〜 | 〜の割合
| one in five people | 5人に1人
[変化の表現]
| increase / rise / grow | 増える（名詞：an increase in 〜）
| decrease / fall / drop / decline | 減る（名詞：a decrease in 〜）
| remain stable / stay the same / level off | 横ばいである／横ばいになる
| reach a peak / peak at 〜 | 頂点に達する
| sharply / dramatically / gradually / slightly | 急激に／劇的に／徐々に／わずかに
| double / triple / halve | 2倍／3倍／半分になる
= 39-1|{About 40 percent of} the students {walk} to school.|生徒の**約40パーセント**が歩いて通学している。
- 39-2|The number of tourists {increased sharply} between 2015 and 2019.|観光客の数は2015年から2019年にかけて**急増した**。
- 39-3|Sales {reached a peak} in 2020 and then {declined gradually}.|売り上げは2020年に**ピークに達し**、その後**徐々に減少した**。
- 39-4|{One in five} people in Japan is over 75.|日本では**5人に1人**が75歳以上だ。
x The percentage of elderly people is many.（割合は high / low / large / small）
[グラフ説明の型]
| 概要 | The graph shows 〜. / According to the graph, 〜.
| 最大・最小 | 〜 is the highest [lowest] of all.
| 比較 | A is twice as high as B. / A is 10 points higher than B.
| 推移 | 〜 rose from X to Y. / 〜 fell by Z%.

# B. 優れた英作文3　具体性を持たせる(2)　数字の力
: 数字は**最も具体的な情報**。グラフ問題では数字を正確に引用し、自由英作文でも身近な数字（時間・回数・人数）を入れると説得力が増す。
= 39-5|× Many students use smartphones for a long time.|→ ○ **Most of my classmates** spend **more than three hours a day** on their smartphones.
> グラフ問題では、**数字の羅列で終わらず**、「何がわかるか（傾向・原因の推測）」まで書く。The graph suggests that 〜 / This may be because 〜。
`,
drills:[
tr('es39d1','回答者の半数以上が、毎日朝食を食べると答えた。',['More than half of the respondents said that they eat breakfast every day.','Over 50 percent of those surveyed answered that they have breakfast daily.'],'half of 〜 / percent of 〜。'),
tr('es39d2','グラフによると、外国人観光客の数は2010年から2019年の間に約4倍に増えた。',['According to the graph, the number of foreign tourists increased about fourfold between 2010 and 2019.','The graph shows that the number of overseas visitors roughly quadrupled from 2010 to 2019.'],'according to the graph / fourfold。'),
tr('es39d3','その後、数値は横ばいになった。',['After that, the figure leveled off.','The number then remained stable.'],'level off / remain stable。'),
tr('es39d4','日本では高齢者の割合が年々高くなっている。',['In Japan, the percentage of elderly people is getting higher year by year.','The proportion of older people in Japan is rising every year.'],'割合は high / rise。many は不可。'),
tr('es39d5','この減少は、少子化が原因かもしれない。',['This decrease may be because of the declining birth rate.','This drop might be due to the falling number of children.'],'This may be because 〜。'),
fr('es39d6','The graph shows that the percentage of high school students who read books for pleasure fell from 60% in 2000 to 35% in 2020. Describe the change and suggest a possible reason.','楽しみのために本を読む高校生の割合が、2000年の60%から2020年には35%に減ったことを示すグラフについて、変化を説明し、考えられる理由を述べなさい。','80～100語','The graph shows that the percentage of high school students who read books for pleasure dropped sharply, from 60 percent in 2000 to 35 percent in 2020. In other words, the proportion fell by 25 points in twenty years, and now only about one in three students reads for fun. One possible reason is the spread of smartphones. Students today can watch videos and use social media at any time, so they may spend less of their free time on books. Schools might be able to reverse this trend by giving students time to read in class.','数値を正確に引用（from X to Y / by Z points）し、理由を推測する。')
]});

/* ===== 第40課 ===== */
L.push({k:'es40',no:'第40課',title:'keep を使いこなす／優れた英作文4 「当たり前」からの脱却',sub:'keep の多様な語法と、ありきたりでない論点',
body:`
# A. keep の語法
[keep の主な用法]
| keep C | Cのままでいる：keep quiet / keep calm
| keep O C | OをCに保つ：keep the room clean
| keep doing / keep on doing | 〜し続ける
| keep O doing | Oに〜させ続ける：keep you waiting
| keep O from doing | Oが〜するのを妨げる（英文解釈§8）
| keep A to oneself | Aを秘密にしておく
| keep in touch with 〜 | 〜と連絡をとり続ける
| keep up with 〜 | 〜に遅れずについていく
| keep a diary / keep a promise / keep a secret | 日記をつける／約束を守る／秘密を守る
| keep an eye on 〜 | 〜から目を離さない
= 40-1|Sorry to {keep} you {waiting}.|お**待たせして**すみません。
- 40-2|Please {keep} the door {closed}.|ドアを**閉めたままにして**ください。
- 40-3|It's hard to {keep up with} the latest technology.|最新技術に**ついていく**のは難しい。
- 40-4|You must {keep} your {promise}.|約束は**守ら**なければならない。
x You must protect your promise.
- 40-5|Fear {kept} her {from} speaking up.|恐怖のせいで彼女は声を上げ**られなかった**。
- 40-6|{Keep an eye on} your bag at the station.|駅ではかばん**から目を離さない**ように。

# B. 優れた英作文4　「当たり前」からの脱却
: 多くの受験生が書く**ありきたりの理由**（「健康によい」「便利だ」「楽しい」）だけでは、印象に残らない。**一歩踏みこんだ視点**を加えると答案が光る。
[一歩踏みこむ方法]
| なぜそうなのかを掘り下げる | 「便利」→ 便利になると何が変わるのか
| 意外な側面に目を向ける | 「スマホの欠点」→ 退屈する時間がなくなること
| 立場を変えて考える | 生徒ではなく、先生・親・地域の視点
| 長期的な影響を考える | 今の利点ではなく、10年後の影響
= 40-7|× Reading is good because we can get knowledge.|→ ○ Reading lets us **experience the lives of people we will never meet**, which helps us understand others.
: 「知識が得られる」は当たり前。「会うことのない人の人生を経験できる→他者理解」は一歩踏みこんだ視点。
> ただし、**奇抜さより論理の正しさ**が優先。根拠を示せない意外な主張は逆効果。
`,
drills:[
tr('es40d1','お待たせしてすみませんでした。',['I\'m sorry to have kept you waiting.','Sorry for keeping you waiting.'],'keep O doing。'),
tr('es40d2','部屋をいつもきれいにしておきなさい。',['Always keep your room clean.','Keep your room tidy at all times.'],'keep O C。'),
tr('es40d3','授業についていくのに苦労している。',['I am having trouble keeping up with the class.','It is hard for me to keep up with my lessons.'],'keep up with 〜。'),
tr('es40d4','彼は約束を必ず守る人だ。',['He is the kind of person who always keeps his promises.','He never breaks a promise.'],'keep a promise。'),
tr('es40d5','スマートフォンの最大の欠点は、退屈する時間を奪うことかもしれない。退屈な時間こそ、新しいアイデアが生まれる時間だからだ。',['The biggest disadvantage of smartphones may be that they take away our time to be bored, because boredom is when new ideas are born.','Perhaps the worst thing about smartphones is that we are never bored anymore; yet it is often in moments of boredom that new ideas come to us.'],'ありきたりでない視点の例。'),
fr('es40d6','Should people keep a diary?','人は日記をつけるべきか。','80～100語','I think people should keep a diary, not mainly to record events, but to understand themselves better. When we write about our day, we have to decide which moments were important and why. This process helps us notice our own feelings, which we often ignore in our busy lives. For example, I once realized from my diary that I felt tired every Wednesday. I found that it was because of a club activity I no longer enjoyed, and I decided to quit. A diary, in this sense, is a conversation with ourselves.','「記録になる」という当たり前の理由ではなく、「自分を理解する」という一歩踏みこんだ視点。keep a diary。')
]});

/* ===== 第41課 ===== */
L.push({k:'es41',no:'第41課',title:'差分スロット／一年のまとめ(1)　表現編',sub:'比較級の前に置く「差」（正・ゼロ・マイナス）と、表現テーマの総復習',
body:`
# A. 差分スロット（比較の差を置く場所）
: **A is more X than B (is)** は「AのXの程度がBより高い」という意味。比較級の**直前**には、どれだけ差があるかを表す語句を置ける。この位置を**差分スロット**と呼ぶ（平沢 2014 の用語）。
= 41-1|Tom is {5 cm} taller than John.|トムはジョンより**5センチ**背が高い。
- 41-2|Tom is {much} taller than John.|トムはジョンより**ずっと**背が高い。
: Tom is taller than John. のように何も置かない場合でも、意味の上では**「いくらかの正の差」（some）**が隠れていると考える：Tom is (some) taller than John.
[差分スロットに入る語句]
| 正の差（具体的な量） | 5 cm / three years / ten minutes / 20 percent / two points
| 正の差（程度） | much / far / a lot / even / still（ずっと・さらに）／a little / slightly / a bit（少し）
| 正の差（倍数） | twice / three times（＋as … as / 比較級）
| ゼロの差 | no（まったく〜でない）／not any（少しも〜でない）
| マイナスの差 | less（＝比較級の向きを逆にする）
> **no / not any / less 以外**がスロットに入るとき、差は必ず**正の差**（Aの方が上）。
# A-1 正の差
- 41-3|My sister is {three years} older than me.|姉は私より**3歳**年上だ。
x My sister is older than me three years.（差は比較級の前に置く）
- 41-4|Prices are {10 percent} higher than last year.|物価は昨年より**10%**高い。
- 41-5|This method is {far} more effective than the old one.|この方法は古い方法より**はるかに**効果的だ。
x This method is very more effective.（very は差分スロットに入らない）
- 41-6|The new model is {slightly} cheaper.|新型は**わずかに**安い。
: 比較級の後ろに by＋差 を置く形もある：Our team won by two points.／He is taller than me by 5 cm.
# A-2 ゼロの差：no / not any
: スロットに **no** が入ると「差がゼロ」、つまり「まったく〜ない」。**no は差がゼロであることを強く主張**し、話し手の評価（意外さ・強調）を含むことが多い（英文解釈§31）。
= 41-7|He is {no} taller than his younger brother.|彼は弟と比べて**少しも**背が高くない（弟と同じくらい低い）。
- 41-8|I can't walk {any} farther.|もう**これ以上**歩けない。
: not＋any＋比較級「少しも〜ない」。疑問文では Can you walk any farther?（もう少し歩ける？）。
- 41-9|He is {no longer} a child.|彼は**もはや**子どもではない。
: no longer は「時間の差がゼロ」＝「これ以上（長く）〜ない」。
- 41-10|I have {no more than} 1,000 yen.|**たった**1000円しかない。
: 「1000円より多い分がゼロ」→「1000円だけ」（少ないという評価）。no less than は「1000円より少ない分がゼロ」→「1000円も」。
# A-3 マイナスの差：less
: **less** は差の向きを逆にし、「Aの程度がBより低い」ことを表す。less の前にもさらに差分スロットがある。
- 41-11|This book is {less} difficult than that one.|この本はあの本**ほど**難しく**ない**。
- 41-12|I spend {much less} time on games than I used to.|以前**よりずっと**ゲームに使う時間が**減った**。
: less の前の much は「マイナスの差がずっと大きい」。数えられる名詞なら fewer：far fewer people。
> 英作文では、「〜より少し」「〜よりずっと」「〜歳上」など**差の大きさを差分スロットに書きこむ**と、具体性が上がる（第38・39課）。
# B. 一年のまとめ(1)　表現テーマの総復習
: これまでの表現テーマで**最も減点されやすいポイント**を確認する。
[頻出ミスの総まとめ]
| 「知る」 | × know the news → ○ learn / find out（第1課）
| 不可算名詞 | × advices / homeworks / informations（第2課）
| 「困る」 | × I am inconvenient → ○ It is inconvenient for me（第3課）
| 「使う」 | × use time → ○ spend time（第6課）
| 「眠る」 | × slept while reading → ○ fell asleep（第8課）
| 比較対象 | × larger than Osaka → ○ larger than that of Osaka（第10課）
| say / tell | × said me → ○ told me / said to me（第11課）
| 「の」 | × the key of the door → ○ the key to the door（第21課）
| 「後」 | × after ten minutes（未来）→ ○ in ten minutes（第24課）
| 否定の or | × don't like A and B → ○ don't like A or B（第25課）
| suggest | × suggest 人 to do → ○ suggest that S 原形（第35課）
| could | × 過去1回の成功に could → ○ managed to（第36課）
`,
drills:[
tr('es41d1','兄は私より5センチ背が高い。',['My brother is five centimeters taller than me.','My brother is taller than I am by five centimeters.'],'差分スロットに具体的な量（five centimeters）を入れる。または by＋差。'),
tr('es41d2','新しい計画は古い計画よりはるかに費用がかからない。',['The new plan costs much less than the old one.','The new plan is far less expensive than the old one.'],'マイナスの差 less の前に、差の大きさ much / far を置く。'),
tr('es41d3','もうこれ以上待てない。',['I can\'t wait any longer.','I can no longer wait.'],'ゼロの差：not any longer / no longer。'),
tr('es41d4','その村には、たった50人しか住んでいない。',['No more than fifty people live in the village.','Only fifty people live in that village.'],'no more than＝「50より多い分がゼロ」→「たった50」。'),
tr('es41d5','彼女は私に、そのニュースをテレビで知ったと言った。',['She told me that she had learned the news on TV.','She said to me that she had heard the news on television.'],'tell 人 / learn the news（総復習）。'),
fr('es41d6','Compare your life now with your life five years ago.','今の生活と5年前の生活を比べなさい。','80～100語','My life now is very different from my life five years ago. Back then, I was in elementary school and went to bed at nine every night. Now I usually go to bed about two hours later because I have so much homework and club practice. I also spend much more time on my smartphone than I used to. On the other hand, I have become more independent. Five years ago, my mother made all my decisions, but now I choose my own clothes, plan my weekends, and even cook dinner twice a week.','差を表す表現（two hours later / much more）と過去と現在の比較。')
]});

/* ===== 第42課 ===== */
L.push({k:'es42',no:'第42課',title:'差分スロット付き位置指定表現／一年のまとめ(2)　論理編',sub:'「駅の2ブロック北」「締め切りの3日前」と、論理構成の総復習',
body:`
# A. 差分スロット付きの位置・時間の表現
: 比較級と同じように、**前置詞・副詞の直前**にも「どれだけ離れているか」を表す差を置ける。before / after / above / behind / north of などは、それ自体が「基準より前・後・上・後ろ」という**比較の意味**を含むため、差分スロットをもつ。
= 42-1|Please submit the report {three days} before the deadline.|締め切りの**3日前**までに報告書を提出してください。
: before the deadline「締め切りより前」の**前**に、差 three days を置く。
[差分スロットをもつ前置詞・副詞]
| 時間 | before / after / ago / later / earlier：two hours before / a week after / long ago / shortly after
| 上下 | above / below / up / down：10 meters above sea level / halfway up the hill
| 前後・内外 | behind / ahead of / in front of / beyond / inside：far behind / two steps ahead of
| 方角 | north / south / east / west of：200 km north of Tokyo
| 距離 | away / from / along：three stops away / a little way along the road
[スロットに入る語句]
| 具体的な量 | three days / 200 meters / two blocks / three stops
| 程度 | far / well / way（ずっと）／a little / slightly（少し）／long（時間がずっと）
| ぴったり | right / just（ちょうど・すぐ）
- 42-2|The hotel is {two blocks} north of the station.|ホテルは駅の**2ブロック**北にある。
x The hotel is north of the station two blocks.（差は前置詞の前に置く）
- 42-3|Get off {two stops} before Shinjuku.|新宿の**2つ手前の駅**で降りてください。
- 42-4|We arrived {well} before the start.|私たちは開始時刻より**かなり**前に着いた。
- 42-5|She lives {right} next to the school.|彼女は学校の**すぐ**隣に住んでいる。
- 42-6|He was {far} behind the other runners.|彼はほかのランナーから**大きく**遅れていた。
- 42-7|The town is {about 300 meters} above sea level.|その町は海抜**約300メートル**だ。
- 42-8|{Shortly} after midnight, the phone rang.|真夜中を**少し**過ぎたころ、電話が鳴った。
- 42-9|It happened {long} before I was born.|それは私が生まれる**ずっと**前に起きた。
: ago / later は差の後ろに置く形（two weeks ago / ten minutes later）で、基準（今・その時）は省略されている。
# A-1 その他の位置の表現
- 42-10|He is {the second from the left} in this photo.|この写真の**左から2番目**が彼だ。
- 42-11|The village is {halfway} up the mountain.|その村は山の**中腹**にある。
> 日本語の「〜の3日前」「〜の2つ先」を英訳するときは、**「差」＋「前置詞＋基準」**の順に組み立てる。
# B. 一年のまとめ(2)　論理構成の総復習
[答案を書く前・書いた後のチェックリスト]
| ① 論点 | 問いに直接答えているか（第31課）
| ② 構成 | 主張 → 理由2つ（＋説明・例）→ 譲歩 → 結論（第12課）
| ③ 根拠の質 | 因果関係・事実・体験か。循環論法になっていないか（第16・28課）
| ④ 根拠の観点 | 2つの理由が別の観点か（第2・29課）
| ⑤ 例示 | 主張と直結した具体例か（第8・9・30課）
| ⑥ 譲歩 | 反論を認めた後、根拠つきで主張に戻っているか（第32・33課）
| ⑦ 具体性 | 抽象語を具体的な名詞・動詞・数字にしたか（第38・39課）
| ⑧ 独自性 | 当たり前の理由だけで終わっていないか（第40課）
| ⑨ つながり | つなぎ言葉に頼りすぎず、内容でつながっているか（第37課）
| ⑩ 文法 | 時制・数・冠詞・前置詞・スペル・語数（第12課）
> この10項目を毎回確認する習慣が、本番での安定した得点につながる。
`,
drills:[
tr('es42d1','試験の1週間前から、毎晩復習を始めた。',['I started reviewing every night a week before the exam.','One week before the test, I began to review my notes every night.'],'差＋before＋基準。'),
tr('es42d2','私たちは開演のかなり前に会場に着いた。',['We arrived at the hall well before the performance started.','We got to the venue long before the show began.'],'差分スロットに程度（well / long）を入れる。'),
tr('es42d3','私の家は駅から歩いて15分ほどの所にある。',['My house is about fifteen minutes\' walk from the station.','It takes about fifteen minutes to walk from the station to my house.'],'差＋from＋基準。'),
tr('es42d4','写真の右から3番目が私の祖父です。',['The third person from the right in the photo is my grandfather.','My grandfather is third from the right in this picture.'],'序数＋from the right。'),
tr('es42d5','次の駅の1つ手前で降りれば、会場に近い。',['If you get off one stop before the next station, you\'ll be close to the venue.','The venue is near the stop just before the next one.'],'差＋before。'),
fr('es42d6','What is the most important thing you have learned this year, and how will you use it in the future?','今年学んだ最も大切なことは何か。それを将来どう生かすか。','90～110語','The most important thing I have learned this year is that good writing comes from clear thinking. At the beginning of the year, I often started writing without deciding my main point, and my essays went in several directions at once. Now I spend the first few minutes planning: I write my opinion in one sentence, choose two reasons from different points of view, and think of a specific example for each. This habit has improved my reports in other subjects, too. In the future, whether I am writing an email or giving a presentation, I will first ask myself: what exactly do I want to say?','一年の総まとめ。主張→具体的な変化→将来への応用。')
]});
})();
