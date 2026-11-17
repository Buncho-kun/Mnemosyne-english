// 英作文（和文英訳・自由英作文）― 問題・解答例・解説はすべてこのアプリ用に作成
(function(){
const TIPS=`和文和訳：日本語を言い換える|難しい日本語はそのまま訳さない。意味を変えずに「英語にしやすい日本語」に直してから訳す。|「彼は顔が広い」→「彼は多くの人を知っている」→ He knows a lot of people.
主語を決める|日本語は主語を省略しがち。まず「誰が・何が」を決める。一般の人なら we / you / people。|「早起きは健康によい」→ Getting up early is good for your health.
動詞を決める|主語に合う動詞を選ぶ。日本語の名詞（到着・決定など）は動詞にすると書きやすい。|「彼の到着が遅れた」→ He arrived late.
時制を最初に決める|いつの話か（過去・現在・現在完了・未来）を書き始める前に決める。|「最近、読書をする人が減っている」→ Fewer people have been reading books recently.
無生物主語を使う|「～のおかげで」「～のせいで」「～すると」は、物を主語にすると英語らしくなる。|「この薬を飲めば楽になる」→ This medicine will make you feel better.
知っている表現で書く|自信のない単語・熟語は使わない。確実に書ける易しい表現に置き換えて減点を防ぐ。|「物議を醸した」→ His words caused a lot of argument.
1文を短くする|長い日本語は2文に分けてよい。関係詞や接続詞を重ねすぎない。|「～で、～で、～した」→ 2つの文に分ける
抽象語を具体化する|「環境」「問題」「便利」などの抽象語は、何を指すかを具体的に書くと伝わる。|「便利になった」→ We can buy things online at any time.
冠詞と数を確認する|名詞ごとに a / the / 複数形 / 不可算 を確認する。日本人が最も失点しやすいところ。|I like dog. × → I like dogs.
主語と動詞を一致させる|三単現の s、the number of（単数）、a number of（複数）、動名詞主語（単数）など。|Learning languages is fun.
時制の一致と仮定法|主節が過去なら従属節も過去に。事実に反する内容なら仮定法を使う。|He said that he was busy. / If I were you, ...
「～する人が増えている」の型|More and more people + V / The number of people who ～ is increasing.|More and more people work from home.
「～と言われている」の型|It is said that ～ / S is said to do|It is said that sleep improves memory.
「～するのは…だ」の型|It is 形容詞 (for 人) to do|It is important for us to save energy.
「～すればするほど」の型|The 比較級 S V, the 比較級 S V|The more you practice, the better you become.
「～とは限らない」の型|not always / not necessarily（部分否定）|Expensive things are not always good.
自由英作文：最初に立場を書く|問いへの答え（賛成・反対など）を1文目で明確にする。|I agree that students should wear school uniforms.
自由英作文：理由は2つ|First, ～. Second, ～. と理由を2つ挙げ、それぞれに説明や具体例を1～2文添える。|First, ... For example, ... Second, ...
自由英作文：最後にまとめる|For these reasons, ～. と立場を言い換えて締める。新しい論点は出さない。|For these reasons, I believe ...
自由英作文：語数を守る|指定語数の±10％が目安。足りなければ具体例を足し、多ければ修飾を削る。|80語指定なら72～88語
自由英作文：書きやすい立場を選ぶ|本心でなくてよい。理由と具体例を書きやすい側を選ぶ。|
自由英作文：反対意見に触れる|Of course / Although ～, I believe ... と反対意見に一言触れると説得力が増す。|Although uniforms limit freedom, their advantages are greater.
つなぎ言葉で論理を示す|However / In addition / Therefore / On the other hand で文と文の関係をはっきりさせる。|However, there are some problems.
見直しチェックリスト|①時制 ②三単現・数の一致 ③冠詞・複数形 ④前置詞 ⑤スペル ⑥語数 の順に見直す。|
直訳できない日本語|「よろしく」「お疲れさま」などは、場面に合う意味（感謝・挨拶）を英語で書く。|「お疲れさま」→ Thank you for your hard work.
否定の書き方|「～しない人もいる」→ Some people do not ～。「誰も～ない」→ No one ～。|Some students do not like sports.`;
const EXP=`It is said that ~|～と言われている|It is said that laughter is the best medicine.
More and more people ~|～する人がますます増えている|More and more people are using e-books.
The number of ~ is increasing.|～の数が増えている|The number of foreign tourists is increasing.
It is important (for 人) to do|(人が)～することは大切だ|It is important for us to listen to others.
It is not easy to do|～するのは簡単ではない|It is not easy to learn a new language.
have a good effect on ~|～によい影響を与える|Reading has a good effect on children.
have a bad effect on ~|～に悪影響を与える|Too much screen time has a bad effect on sleep.
play an important role in ~|～で重要な役割を果たす|Teachers play an important role in society.
make it possible for 人 to do|人が～することを可能にする|The Internet makes it possible for us to work anywhere.
thanks to ~|～のおかげで|Thanks to smartphones, we can easily contact others.
because of ~|～のせいで；～のために|Because of the heavy rain, the game was canceled.
as a result|その結果|As a result, many people lost their jobs.
on the other hand|一方で|On the other hand, it can be expensive.
in addition|さらに|In addition, it is good for the environment.
for example|例えば|For example, I walk to school every day.
for these reasons|これらの理由から|For these reasons, I agree with the idea.
in my opinion|私の意見では|In my opinion, school uniforms are useful.
I agree that ~|～ということに賛成だ|I agree that students should do volunteer work.
I disagree with ~|～に反対だ|I disagree with the idea.
There are two reasons for this.|これには2つの理由がある|There are two reasons for this.
not always ~|必ずしも～ではない|Money does not always bring happiness.
It is no use doing|～しても無駄だ|It is no use worrying about the past.
be likely to do|～しそうである|Prices are likely to rise.
tend to do|～する傾向がある|Young people tend to use social media a lot.
used to do|以前は～したものだ|I used to play soccer.
get used to doing|～に慣れる|I got used to living alone.
spend 時間 doing|～して時間を過ごす|I spent the weekend reading.
It takes 時間 to do|～するのに時間がかかる|It takes ten minutes to walk there.
make an effort to do|～しようと努力する|We should make an effort to save water.
take ~ into account|～を考慮に入れる|We should take the cost into account.
compared with ~|～と比べて|Compared with the past, life is more convenient.
instead of ~|～の代わりに|Use a bicycle instead of a car.
not only A but also B|AだけでなくBも|It is not only cheap but also healthy.
so that S can do|Sが～できるように|I left early so that I could catch the train.
in order to do|～するために|I study hard in order to pass the exam.
as ~ as possible|できるだけ～|Please reply as soon as possible.
whether ~ or not|～かどうか|It depends on whether it rains or not.
The 比較級 ~, the 比較級 ~|～すればするほど…|The more you read, the more you learn.
too ~ to do|～すぎて…できない|I was too tired to study.
so ~ that ...|とても～なので…|It was so cold that we stayed home.
I wish ~|～ならいいのに|I wish I had more time.
If I were ~, I would ...|もし私が～なら…だろう|If I were you, I would apologize.
look forward to doing|～するのを楽しみにする|I look forward to hearing from you.
be worried about ~|～を心配している|Many people are worried about the future.
be good for ~|～によい|Walking is good for your health.
be harmful to ~|～に有害である|Smoking is harmful to your health.
lead to ~|～につながる|Lack of sleep can lead to illness.
depend on ~|～次第である；～に頼る|It depends on the weather.
deal with ~|～に対処する|We must deal with this problem.
come up with ~|～を思いつく|She came up with a good idea.
get along with ~|～とうまくやる|I get along with my classmates.
communicate with ~|～と意思疎通する|It is fun to communicate with people abroad.
nowadays|今日では|Nowadays, many people shop online.
in the future|将来|In the future, robots will do more work.
all over the world|世界中で|English is spoken all over the world.
online|インターネットで|You can find information online.
at the same time|同時に；その一方で|It is useful. At the same time, it can be dangerous.
as a matter of fact|実は|As a matter of fact, I have never been abroad.
in short|要するに|In short, the plan failed.
to sum up|まとめると|To sum up, there are both advantages and disadvantages.
advantage / disadvantage|利点／欠点|One advantage of living in a city is convenience.
Some people say ~, but ...|～と言う人もいるが…|Some people say homework is useless, but I disagree.
Of course, ~. However, ...|もちろん～だ。しかし…|Of course, phones are useful. However, they can be harmful.`;
// 和文英訳：日本語|考え方（和文和訳）|解答例1;;解答例2|ポイント
const TR=`彼は顔が広い。|「顔が広い」→「たくさんの人を知っている」と言い換える|He knows a lot of people.;;He has many friends and acquaintances.|直訳（His face is wide）は不可。意味を言い換える。
早起きは得だというが、私は朝が苦手だ。|「得だ」→「よいことがある」、「朝が苦手」→「早起きが得意でない」|People say that getting up early is good for you, but I am not good at getting up early.;;It is said that early risers benefit in many ways, but I find it hard to get up in the morning.|be not good at doing / find it hard to do。
スマートフォンのおかげで、私たちはいつでもどこでも情報を得られるようになった。|無生物主語：「スマホが、私たちが～できるようにした」|Smartphones have made it possible for us to get information anytime and anywhere.;;Thanks to smartphones, we can now get information at any time and in any place.|make it possible for 人 to do。「～ようになった」は現在完了。
この本を読めば、日本の歴史がよくわかるだろう。|無生物主語：「この本が、日本の歴史を理解する助けになる」|This book will help you understand Japanese history better.;;If you read this book, you will understand Japanese history better.|help O 原形。if 節の中は現在形。
最近、紙の本を読む人が減っている。|「減っている」→ fewer and fewer / the number ～ is decreasing|Fewer and fewer people read paper books these days.;;The number of people who read paper books has been decreasing recently.|the number of ～ は単数扱い。
外国語を学ぶことは、その国の文化を理解することにつながる。|「つながる」→ lead to / help us understand|Learning a foreign language leads to a better understanding of the culture of the country.;;Learning a foreign language helps us understand the culture of the country where it is spoken.|動名詞の主語は単数扱い。
彼がそんなことを言うとは思わなかった。|「思わなかった」→「予期していなかった」|I didn't expect him to say such a thing.;;I never thought that he would say something like that.|時制の一致で would。
もっと早く始めていれば、締め切りに間に合ったのに。|過去の事実に反する → 仮定法過去完了|If I had started earlier, I could have met the deadline.;;Had I started earlier, I would have finished it in time.|meet the deadline「締め切りに間に合う」。
健康ほど大切なものはない。|比較で最上級の意味を表す|Nothing is more important than health.;;Health is more important than anything else.|Nothing is 比較級 than ～。
何かを始めるのに遅すぎるということはない。|It is never too late to do|It is never too late to start something new.;;You are never too old to try something new.|never too late。
彼女は私が今までに会った中で一番親切な人だ。|最上級 + I have ever met|She is the kindest person I have ever met.;;I have never met anyone kinder than her.|経験の現在完了。
日本では、電車の中で電話で話すのは失礼だと考えられている。|「考えられている」→ It is considered ～ / People think|In Japan, it is considered rude to talk on the phone on a train.;;In Japan, people think that it is impolite to talk on the phone on trains.|形式主語 it。on the phone「電話で」。
天気がよければ、明日ハイキングに行くつもりだ。|条件の if 節は未来でも現在形|If the weather is good tomorrow, we are going to go hiking.;;We will go hiking tomorrow if it is sunny.|if 節に will は使わない。
宿題を終えるのに3時間かかった。|It took 人 時間 to do / spend 時間 doing|It took me three hours to finish my homework.;;I spent three hours finishing my homework.|2つの型を使い分ける。
彼の言うことを信じるべきではなかった。|過去への後悔 → should not have p.p.|I should not have believed what he said.;;It was a mistake to believe him.|should have p.p. の否定。
彼女は医者になるために一生懸命勉強している。|目的の不定詞 / so that|She is studying hard to become a doctor.;;She is studying hard so that she can become a doctor.|in order to / so that S can。
環境を守るために、私たち一人一人にできることがある。|「一人一人にできることがある」→「私たちのそれぞれが何かをできる」|Each of us can do something to protect the environment.;;There are things that every one of us can do to protect the environment.|each of us は単数扱い。
子どものころは、よく近所の川で泳いだものだ。|過去の習慣 → used to / would often|When I was a child, I used to swim in the river near my house.;;As a child, I would often swim in a nearby river.|used to / would often。
彼が来るかどうかは天気次第だ。|depend on + whether 節|Whether he comes or not depends on the weather.;;It depends on the weather whether he will come.|whether 節が主語なら単数扱い。
人前で話すのに慣れていないので緊張する。|be used to doing|I get nervous because I am not used to speaking in public.;;Speaking in front of people makes me nervous because I am not used to it.|be used to の to は前置詞。
若いうちにいろいろな経験をしておくべきだ。|「若いうちに」→ while you are young|You should have various experiences while you are young.;;It is important to experience many things when you are young.|while + S V。
その映画は思っていたほど面白くなかった。|not as ～ as I had expected|The movie was not as interesting as I had expected.;;The movie was less interesting than I thought it would be.|期待したのは見る前 → 過去完了。
道に迷ったときは、遠慮せずに人に聞くといい。|「遠慮せずに」→ don't hesitate to do / feel free to do|When you get lost, don't hesitate to ask someone for directions.;;If you lose your way, feel free to ask people for help.|ask 人 for directions「道を尋ねる」。
この問題について、もっと話し合う必要がある。|discuss は他動詞（about 不要）|We need to discuss this problem more.;;We need to talk more about this issue.|discuss about は誤り。
失敗を恐れていては、何も始められない。|無生物主語：「失敗への恐れが～を妨げる」|If you are afraid of failure, you can't start anything.;;Fear of failure will keep you from trying anything new.|keep O from doing。
宿題が多すぎて、テレビを見る時間がない。|so ～ that / too ～ to|I have so much homework that I have no time to watch TV.;;I have too much homework to have time to watch TV.|homework は不可算 → much。
東京は大阪より人口が多い。|「人口が多い」→ population is larger|The population of Tokyo is larger than that of Osaka.;;Tokyo has a larger population than Osaka.|that of で比較対象をそろえる。
もし私があなたなら、その申し出を断るだろう。|現在の事実に反する → 仮定法過去|If I were you, I would turn down the offer.;;If I were in your position, I would refuse the offer.|be 動詞は were。
彼が試験に合格したと聞いてうれしかった。|感情の原因の不定詞|I was glad to hear that he had passed the exam.;;I was happy to hear that he passed the exam.|聞いたより前のこと → 過去完了も可。
寝る前にスマホを使うと、よく眠れなくなる。|無生物主語：「スマホの使用がよい睡眠を妨げる」|Using a smartphone before going to bed can keep you from sleeping well.;;If you use a smartphone before bed, you may not sleep well.|keep O from doing。
私がこの町に引っ越してきてから10年になる。|It has been ～ since / have lived for|It has been ten years since I moved to this town.;;I have lived in this town for ten years.|It has been ～ since + 過去形。
説明書を読まずに機械を使ってはいけない。|without doing|You must not use the machine without reading the instructions.;;Don't use the machine before you read the manual.|without + 動名詞。
彼女は私に、もう少し待つように言った。|tell / ask O to do|She told me to wait a little longer.;;She asked me to wait a bit more.|tell O to do。
彼の話が本当かどうか、誰にもわからない。|No one knows whether ～|No one knows whether his story is true or not.;;Nobody can tell if what he said is true.|whether 節。
一日中雨だったので、家で本を読んで過ごした。|spend 時間 doing|It rained all day, so I spent the day reading at home.;;Because it was raining all day, I stayed home and read books.|spend ～ doing。
英語を話せるようになりたければ、毎日練習することだ。|「～することだ」→ should|If you want to be able to speak English, you should practice every day.;;Practicing every day is the best way to learn to speak English.|be able to で「できるようになる」。
私たちが当たり前だと思っていることが、外国ではそうでないことがある。|take ～ for granted / 部分否定 not always|What we take for granted may not be true in other countries.;;Things that seem natural to us are not always natural in other countries.|take ～ for granted。
時間があれば、もっと本を読むのに。|現在の事実に反する → 仮定法過去|If I had more time, I would read more books.;;I wish I had more time to read books.|仮定法過去。
彼の助けがなければ、私はその仕事を終えられなかっただろう。|Without / If it had not been for|Without his help, I could not have finished the work.;;If it had not been for his help, I would not have finished the job.|仮定法過去完了。
駅に着いたとき、電車はすでに出てしまっていた。|着いたより前 → 過去完了|When I arrived at the station, the train had already left.;;The train had already left by the time I got to the station.|過去完了。
この町は、私が子どものころとはすっかり変わってしまった。|what it used to be / 現在完了|This town is very different from what it used to be when I was a child.;;This town has changed a lot since I was a child.|what it used to be「以前の姿」。
外国人観光客の数は年々増えている。|The number of ～ is increasing year by year|The number of foreign tourists is increasing year by year.;;More and more foreign tourists visit Japan every year.|the number of は単数扱い。
大切なのは、何を言うかではなく、どう言うかだ。|What is important is not A but B|What is important is not what you say but how you say it.;;It is not what you say but how you say it that matters.|not A but B / 強調構文。
年をとるにつれて、時間が速く過ぎるように感じる。|as「～につれて」/ the 比較級|As I get older, time seems to pass more quickly.;;The older I get, the faster time seems to go.|as S V / the + 比較級。
彼女はいつも、自分よりも他人のことを先に考える。|「先に考える」→ think of others before herself|She always thinks of others before herself.;;She always puts other people first.|think of A before B。`;
// 自由英作文：テーマ(英)|テーマ(日)|語数|解答例|構成メモ
const FREE=`Do you think high school students should have part-time jobs?|高校生はアルバイトをすべきだと思いますか。|70～90語|I think high school students should have part-time jobs. There are two reasons. First, they can learn the value of money. When they earn money by themselves, they understand how hard it is to work, and they will use money more carefully. Second, they can develop communication skills. At work, they have to talk with customers and coworkers of different ages. This experience will help them in the future. For these reasons, I believe part-time jobs are good for high school students.|立場 → 理由①（お金の価値）＋説明 → 理由②（コミュニケーション力）＋説明 → まとめ
Which is better, living in a city or living in the countryside?|都会と田舎、住むならどちらがよいですか。|70～90語|I think living in the countryside is better than living in a city. First, the countryside is quieter and has more nature. People can enjoy fresh air and beautiful scenery, which is good for both their body and mind. Second, the cost of living is lower. For example, houses are much cheaper, so families can live in larger homes. Although cities are more convenient, I believe the countryside offers a more comfortable life. For these reasons, I prefer living in the countryside.|立場 → 理由①（自然）→ 理由②（生活費）＋具体例 → 反対意見に一言 → まとめ
Should students be allowed to use smartphones in class?|授業中にスマートフォンの使用を認めるべきですか。|80～100語|I do not think students should be allowed to use smartphones in class. First, smartphones can easily distract students. Even if they intend to use them for study, they may check social media or play games instead. Second, students need to develop the ability to think by themselves. If they search the Internet for every answer, they will not learn to solve problems on their own. Of course, smartphones can be useful tools, but in class, students should focus on their teachers and classmates. Therefore, I disagree with the idea.|立場 → 理由①（気が散る）→ 理由②（自分で考える力）→ 反対意見に一言 → まとめ
What is the most important thing you have learned in high school?|高校で学んだ最も大切なことは何ですか。|70～90語|The most important thing I have learned in high school is the value of teamwork. I was a member of the soccer club, and at first I thought only about my own performance. However, we lost many games because we did not work together. After talking with my teammates, we started to support each other on and off the field. As a result, our team improved and won a local tournament. This experience taught me that people can achieve more when they cooperate.|答え → 具体的なエピソード（前→転機→結果）→ 学んだこと
Should Japan accept more foreign workers?|日本はもっと外国人労働者を受け入れるべきですか。|80～100語|I think Japan should accept more foreign workers. First, Japan's population is getting older and smaller, so many companies do not have enough workers. Foreign workers can help solve this problem, especially in areas such as nursing care and farming. Second, people from different countries can bring new ideas and cultures. This will make Japanese society more open and creative. However, the government must support them by providing Japanese lessons and fair working conditions. For these reasons, I agree with accepting more foreign workers.|立場 → 理由①（人手不足）→ 理由②（多様性）→ 条件・課題 → まとめ
Is it better to study alone or with friends?|勉強は一人でするのと友達とするのと、どちらがよいですか。|70～90語|I think it is better to study alone. First, when I study alone, I can concentrate better. With friends, it is easy to start chatting and waste time. Second, I can study at my own pace. I can spend more time on difficult subjects and skip what I already understand. On the other hand, studying with friends can be helpful when we want to ask questions. However, for most of my studying, I prefer to work by myself because it is more efficient.|立場 → 理由①（集中）→ 理由②（自分のペース）→ 反対側の利点 → まとめ
Should school uniforms be abolished?|制服は廃止すべきですか。|70～90語|I do not think school uniforms should be abolished. First, uniforms save time and money. Students do not have to worry about what to wear every morning, and parents do not need to buy many clothes. Second, uniforms help create a sense of unity. When all students wear the same clothes, they feel that they belong to the same school, and differences in family wealth are less visible. Although some people say uniforms limit freedom, I believe their advantages are greater.|立場 → 理由①（時間とお金）→ 理由②（一体感）→ 反対意見に一言して結論
Describe a person you respect and explain why.|あなたが尊敬する人について、理由とともに書きなさい。|70～90語|The person I respect most is my grandmother. She ran a small restaurant for more than forty years. She got up at five every morning to prepare food and always welcomed customers with a smile, even when she was tired. When I was a child, I often visited her restaurant and saw how much the customers loved her. She taught me that hard work and kindness can make people happy. I want to become someone who works as sincerely as she does.|人物 → 具体的な行動 → 自分の経験 → その人から学んだこと → 自分の目標
Do you think AI will make our lives better?|AIは私たちの生活をよくすると思いますか。|80～100語|I believe AI will make our lives better. First, AI can do boring and dangerous tasks instead of humans. For example, robots with AI can check old bridges or work in factories, which reduces accidents. Second, AI can help doctors find diseases earlier by analyzing large amounts of medical data. On the other hand, some people worry that AI will take away jobs. However, new kinds of jobs will also be created. Therefore, if we use AI wisely, it will improve our lives.|立場 → 理由①＋例 → 理由② → 反論とその再反論 → 条件付きのまとめ
Which do you prefer, paper books or e-books?|紙の本と電子書籍、どちらが好きですか。|70～90語|I prefer paper books to e-books. First, it is easier to concentrate when I read a paper book. Reading on a screen makes my eyes tired, and notifications often interrupt me. Second, paper books are easier to remember. I can remember where an important sentence was on the page, and I can write notes in the margins. E-books are certainly convenient because we can carry many books at once. However, for serious reading, I think paper books are better.|立場 → 理由①（集中）→ 理由②（記憶）→ 反対側の利点 → まとめ
What should Japan do to attract more foreign tourists?|日本がもっと外国人観光客を呼ぶにはどうすべきですか。|80～100語|I think Japan should make it easier for tourists to travel outside big cities. Many visitors go only to Tokyo, Kyoto, and Osaka, but rural areas also have beautiful nature, hot springs, and local food. However, information in English is often limited, and public transportation can be hard to use. If local governments provided more signs and websites in foreign languages, more tourists would visit these areas. This would also help local economies. Therefore, improving access to rural areas is important.|提案 → 現状と問題点 → 解決策（仮定法で効果）→ 付随する利点 → まとめ
Is it good for young children to have their own smartphones?|小さな子どもが自分のスマートフォンを持つのはよいことですか。|80～100語|I do not think young children should have their own smartphones. First, they may spend too much time on games and videos instead of studying, playing outside, or talking with their families. Second, children may face dangers on the Internet, such as contact with strangers or harmful content. Parents cannot always watch what their children are doing. Of course, phones are useful for contacting parents in an emergency, but a simple phone would be enough. Therefore, children should wait until they are older.|立場 → 理由①（時間）→ 理由②（危険）→ 反対意見と代案 → まとめ
Write about your plan for the future.|あなたの将来の計画について書きなさい。|70～90語|In the future, I want to become an engineer who develops clean energy. I became interested in this field when I learned about climate change in a science class. Many countries still depend on fossil fuels, which produce a lot of carbon dioxide. To achieve my goal, I will study physics and math hard at university and learn English so that I can work with researchers around the world. I hope that my work will help create a better environment for future generations.|目標 → きっかけ → 背景 → 具体的な行動計画 → 将来への思い
Should homework be abolished?|宿題は廃止すべきですか。|70～90語|I do not think homework should be abolished. First, homework helps students review what they learned in class. Without review, people forget new information quickly, so practice at home is necessary. Second, homework teaches students to manage their time. They have to decide when and how long to study by themselves, which is an important skill for adult life. However, teachers should not give too much homework. A reasonable amount of homework is useful for students.|立場 → 理由①（復習）→ 理由②（時間管理）→ 条件 → まとめ`;
const D=window.EIGO_DATA,L=s=>s.split('\n').filter(Boolean);
const tips=L(TIPS).map(l=>{const [w,m,ex]=l.split('|');return {k:'wt:'+w,w,pos:'考え方',m,ex:ex||''}});
const exp=L(EXP).map(l=>{const [w,m,ex]=l.split('|');return {k:'we:'+w,w,pos:'表現',m,ex}});
const tr=L(TR).map((l,i)=>{const [ja,hint,ms,pt]=l.split('|');return {k:'wtr:'+i,kind:'tr',ja,hint,models:ms.split(';;'),point:pt}});
const free=L(FREE).map((l,i)=>{const [en,ja,words,model,plan]=l.split('|');return {k:'wfr:'+i,kind:'free',en,ja,words,models:[model],point:plan}});
D.decks.push(
  {id:'wtips',type:'vocab',title:'英作文の考え方（型）',sub:'和文和訳・主語と時制・自由英作文の構成',stage:30,items:tips},
  {id:'wexp',type:'vocab',title:'英作文で使える表現',sub:'和→英で練習すると書ける表現が増える',stage:30,items:exp},
  {id:'wtr',type:'comp',title:'和文英訳',sub:'日本語を言い換えてから英語にする',items:tr},
  {id:'wfree',type:'comp',title:'自由英作文',sub:'立場 → 理由2つ → まとめ の型で書く',items:free}
);
const gi=D.groups.findIndex(g=>g.ids.indexOf('jg')>=0);D.groups.splice(gi>=0?gi+1:D.groups.length,0,{title:'英作文',ids:['wtips','wexp','wtr','wfree']});
})();
