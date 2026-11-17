// 大学入試 長文読解（オリジナル長文・設問はすべてこのアプリ用に作成）
(function(){
const D=window.EIGO_DATA;
const deck={id:'jr',type:'read',title:'入試 長文読解',sub:'内容一致・指示語・語句の意味・主旨（設問は日本語）',items:[]};
D.decks.push(deck);
function R(id,title,topic,text,qs){
  const paras=text.trim().split(/\n\s*\n/).map(s=>s.replace(/\s+/g,' ').trim());
  const items=qs.trim().split('\n').map((l,i)=>{const a=l.split('|');return {k:'jr:'+id+':'+i,q:a[0],c:a.slice(1,5),e:a[5],hl:a[6]||''}});
  deck.items.push({id,title,topic,paras,qs:items});
}

R('boredom','退屈の効用','心理・教育',`
Most of us try hard to avoid boredom. The moment we have nothing to do, we reach for our phones, and within seconds we are reading news, watching videos, or checking messages. Smartphones have made it possible never to be bored again. Yet some psychologists now argue that this may be a loss rather than a gain.

In one well-known experiment, participants were first asked to do a dull task: copying numbers from a telephone directory for fifteen minutes. They were then asked to think of as many uses as possible for a pair of plastic cups. Compared with a group that had not done the boring task, those who had been bored came up with more ideas, and their ideas were more original. The researchers suggested that boredom pushes the mind to wander, and that a wandering mind is more likely to make unexpected connections.

This does not mean that all boredom is good. Children who are bored at school every day may lose interest in learning altogether. The point is rather that short periods of boredom give the brain a chance to rest from constant input and to generate ideas of its own. When every empty moment is filled with information from outside, that chance disappears.

Some teachers have begun to take this idea seriously. Instead of keeping students busy every minute, they leave short periods in class with no instructions, during which students may simply think, look out of the window, or write down whatever comes to mind. It may sound like a waste of time, but such moments, the teachers say, are often when the most interesting questions are born.
`,`
第1段落で筆者が述べていることとして最も適切なものはどれか。|スマートフォンによって退屈を感じる機会がなくなったが、それは損失かもしれない|スマートフォンは退屈を解消するのに役立つので積極的に使うべきだ|心理学者は退屈を避けるべきだと主張している|ニュースや動画を見る時間は年々減っている|最終文 this may be a loss rather than a gain（損失かもしれない）が要点。
実験で、退屈な作業をした参加者について正しいものはどれか。|カップの使い道について、より多く、より独創的なアイデアを出した|カップの使い道を考える作業を途中でやめてしまった|退屈な作業をしなかった集団より成績が悪かった|電話帳の数字を正確に覚えていた|came up with more ideas, and their ideas were more original。|came up with more ideas
下線部 a wandering mind の意味として最も近いものはどれか。|あれこれと思いがさまよっている心|道に迷って不安になっている心|一つのことに集中している心|眠気に襲われている心|wander「さまよう」。退屈によって心があちこちへさまよう状態。|a wandering mind
第3段落の that chance が指すものはどれか。|脳が外からの情報から休み、自分でアイデアを生み出す機会|学校で毎日退屈する機会|外部の情報を得る機会|学ぶことへの興味を取り戻す機会|直前の a chance to rest from constant input and to generate ideas of its own を受ける。|that chance disappears
第3段落の内容と一致するものはどれか。|退屈がすべてよいわけではなく、毎日退屈な授業は学ぶ意欲を失わせることもある|子どもは退屈な授業を受けるほど学習意欲が高まる|短時間の退屈も脳にとっては有害である|空いた時間はすべて情報で満たすべきだ|This does not mean that all boredom is good. で始まる段落。
本文の内容に最も合う題名はどれか。|退屈が生み出すもの|スマートフォンの正しい使い方|電話帳を使った記憶の実験|学校の授業時間を短くすべき理由|退屈が創造性や問いを生む、という主張が全体を貫いている。`);

R('honeybee','ミツバチと受粉','環境',`
When people think of honeybees, they usually think of honey. However, the most valuable thing bees produce is not honey at all. As they fly from flower to flower collecting nectar, bees carry pollen from one plant to another, allowing the plants to produce fruit and seeds. This process, called pollination, is essential for many of the crops we eat, including apples, almonds, and strawberries. It has been estimated that about one-third of the food on our tables depends, directly or indirectly, on pollinators such as bees.

Since the early 2000s, however, beekeepers in many countries have reported alarming losses. In some years, more than a third of managed bee colonies in the United States failed to survive the winter. Scientists have not found a single cause. Instead, they point to a combination of factors: certain pesticides that affect bees' ability to find their way home, parasites that weaken colonies, a lack of diverse flowers caused by large single-crop farms, and changes in climate.

The decline of wild bees is perhaps even more worrying, because it is harder to measure. Unlike honeybees, which are kept by people, most wild bee species live alone and nest in the ground or in dead wood. Many of them pollinate particular plants that honeybees ignore. If they disappear, those plants may disappear too.

There are, fortunately, things that ordinary people can do. Planting a variety of flowers that bloom at different times of the year provides food for bees from spring to autumn. Leaving a corner of a garden unmowed or avoiding chemical sprays can also make a difference. Saving the bees, in other words, does not only depend on governments and scientists; it can begin in our own backyards.
`,`
第1段落で、ミツバチが生み出す最も価値のあるものとされているのはどれか。|植物の受粉|はちみつ|花の蜜|リンゴやイチゴ|the most valuable thing bees produce is not honey at all → pollination。
下線部 directly or indirectly の内容として、本文から判断して最も適切なものはどれか。|受粉が作物を直接実らせる場合も、家畜の飼料などを通じて間接的に関わる場合もある|ミツバチが直接食べ物を運ぶ場合と、人が運ぶ場合がある|食べ物の3分の1は直接ミツバチが作っている|ミツバチがいなくても食料生産には影響しない|作物に直接関わる場合と、間接的に関わる場合の両方を含める表現。|directly or indirectly
第2段落によると、ミツバチの減少の原因について正しいものはどれか。|単一の原因ではなく、複数の要因が組み合わさっている|農薬だけが原因であると判明した|寄生虫が唯一の原因である|気候変動とは無関係である|Scientists have not found a single cause. Instead, they point to a combination of factors。|a combination of factors
第3段落で、野生のハチの減少がより心配だとされる理由はどれか。|人に飼育されていないので減少の程度を測りにくいうえ、特定の植物の受粉を担っているから|野生のハチははちみつを作らないから|野生のハチはミツバチより数が多いから|野生のハチは土の中で冬を越せないから|because it is harder to measure と、ミツバチが無視する植物を受粉させることが述べられている。|harder to measure
第4段落で、一般の人ができることとして挙げられていないものはどれか。|ミツバチの巣箱を自宅で飼うこと|開花時期の異なるさまざまな花を植えること|庭の一角を刈らずに残しておくこと|化学薬品の散布を避けること|巣箱を飼うことは書かれていない。
本文の主旨として最も適切なものはどれか。|ミツバチなどの花粉媒介者は食料生産に不可欠であり、その減少は身近な行動でも食い止められる|はちみつの生産量を増やすために農薬を減らすべきだ|野生のハチはミツバチより重要である|ミツバチの減少の原因は解明されている|役割（第1段落）→危機（第2・3段落）→対策（第4段落）。`);

R('library','図書館の役割の変化','社会',`
Not long ago, many people predicted that public libraries would soon become unnecessary. If almost any piece of information could be found online in seconds, they asked, why would anyone visit a building full of paper books? Yet in many cities, libraries are busier than ever. What has changed is not whether people use libraries, but how they use them.

Visit a modern public library on a weekday afternoon and you may find retired people reading newspapers, students doing homework together, job seekers using the computers to write applications, and parents with small children at a storytelling session. Some libraries now lend not only books but also tools, musical instruments, and even laptops. Others offer free classes in computer skills, foreign languages, or cooking.

In other words, libraries have become less a place for storing books and more a place for people. For those who cannot afford a computer or a quiet room at home, the library may be the only place where they can study or look for work. For elderly people who live alone, a weekly visit may be one of their few chances to talk with others. Librarians increasingly describe their job as helping people find not only information but also each other.

This change raises a difficult question about funding. A library's value used to be measured by how many books it lent. That number has fallen in many places, and some local governments have used it as a reason to cut budgets. But if the real value of libraries now lies in the people they bring together, a new way of measuring their contribution may be needed.
`,`
第1段落の内容と一致するものはどれか。|図書館は不要になると予想されたが、実際には多くの都市で利用者が増えている|インターネットの普及で図書館の利用者は大きく減った|紙の本を置く図書館は近く廃止される予定だ|図書館の使い方は昔とまったく変わっていない|Yet in many cities, libraries are busier than ever。
第2段落で、現代の図書館の利用法として述べられていないものはどれか。|有料で専門家の個別相談を受ける|退職した人が新聞を読む|求職者がパソコンで応募書類を書く|楽器やノートパソコンを借りる|有料の相談は書かれていない（free classes はある）。
下線部 less a place for storing books and more a place for people の意味として最も適切なものはどれか。|本を保管する場所というより、人のための場所になった|本を保管する場所も人の場所も減った|人よりも本を大切にする場所になった|本を保管する場所が狭くなった|less A and more B「AというよりむしろB」。|less a place for storing books
第3段落で、高齢の一人暮らしの人にとって図書館が持つ意味として述べられているものはどれか。|他人と話せる数少ない機会になりうる|安く本を買える場所である|パソコンの使い方を教える場所である|仕事を探せる唯一の場所である|one of their few chances to talk with others。|few chances to talk with others
下線部 helping people find not only information but also each other の each other が意味するものとして最も適切なものはどれか。|人と人とが互いに出会うこと|司書同士が協力すること|本と情報を結びつけること|図書館同士が連携すること|find each other「互いを見つける」→人同士のつながり。|find not only information but also each other
第4段落で筆者が述べていることとして最も適切なものはどれか。|貸出冊数で図書館の価値を測るのではなく、新しい評価方法が必要かもしれない|貸出冊数が減ったので図書館の予算は削減すべきだ|図書館は本の貸出に専念すべきだ|地方自治体は図書館の数を増やしている|a new way of measuring their contribution may be needed。`);

R('silence','沈黙の文化差','異文化理解',`
In a conversation, how long can a silence last before it feels uncomfortable? Researchers who have studied conversations in different languages have found that the answer varies surprisingly little. In most languages, speakers respond to a question within about a quarter of a second, and a pause of more than a second or so is usually taken as a sign of a problem: the listener may be about to disagree or refuse.

Yet the meaning of longer silences differs greatly between cultures. In many Western business settings, silence in a meeting is often seen as awkward, and people rush to fill it. Someone who stays silent may be judged as having nothing to contribute. In Japan and some other East Asian countries, by contrast, a pause before answering can be a sign of respect, showing that the listener is considering the speaker's words carefully rather than replying without thought.

These differences can lead to misunderstandings. A Japanese businessperson who pauses to think before answering may give an American partner the impression of being uncertain or even dishonest. The American, in turn, who answers immediately and fills every silence, may seem to the Japanese partner to be impatient or not really listening.

Neither style is better than the other. What matters is to be aware that the same behavior can carry very different meanings. Once people realize that a silence is not necessarily a sign of disagreement, or that a quick reply is not necessarily a sign of rudeness, many misunderstandings can be avoided.
`,`
第1段落によると、さまざまな言語の会話について明らかになったことはどれか。|質問への応答までの時間は、言語によってあまり違わない|日本語の会話は応答までの時間が最も長い|1秒以上の沈黙は同意のしるしとされる|言語によって応答時間は大きく異なる|the answer varies surprisingly little。|varies surprisingly little
第1段落の下線部 a sign of a problem の具体的な内容として述べられているものはどれか。|聞き手が反対したり断ったりしようとしている|聞き手が質問を聞き取れなかった|話し手が話し終えていない|聞き手が強く同意している|コロン以下 the listener may be about to disagree or refuse。|a sign of a problem
第2段落によると、日本などで答える前の間が意味しうるものはどれか。|相手の言葉を慎重に考えているという敬意|相手の意見に反対していること|話す内容が何もないこと|会話を早く終わらせたいこと|a sign of respect, showing that the listener is considering the speaker's words carefully。
第3段落の in turn の意味として最も適切なものはどれか。|今度は逆に、一方で|順番を待って|ついに|その結果として初めて|in turn「（一方が〜すると）今度は相手が」。日本人とアメリカ人の誤解を対にして述べている。|in turn
第3段落の内容と一致するものはどれか。|すぐに答えるアメリカ人は、日本人にはせっかちに見えることがある|考えてから答える日本人は、アメリカ人には誠実に見える|アメリカ人は沈黙を好む|日本人はすぐに答える人を尊敬する|may seem to the Japanese partner to be impatient。
筆者の主張として最も適切なものはどれか。|同じ行動でも文化によって意味が違うと知ることが、誤解を避ける鍵である|日本式の沈黙の方がアメリカ式より優れている|ビジネスでは沈黙を避けるべきだ|会話の応答時間を短くする訓練が必要だ|Neither style is better ... What matters is to be aware that ...`);

R('plastic','プラスチックごみと海','環境',`
Every year, millions of tons of plastic enter the world's oceans. Some of it is visible: bottles washed up on beaches, bags floating near the surface, fishing nets tangled around coral. But much of the problem cannot be seen. Over time, sunlight and waves break plastic into smaller and smaller pieces. Particles less than five millimeters long, known as microplastics, have now been found almost everywhere scientists have looked, from Arctic ice to the deepest ocean trenches.

Microplastics are a concern because they are easily eaten by small sea creatures, which are then eaten by larger ones. In this way, plastic can move up the food chain, and some of it may end up on our plates. Scientists are still studying what effects this has on human health. What is already clear is that sea birds, turtles, and fish are being harmed, sometimes fatally, by the plastic they swallow.

Many countries have responded by banning or charging for plastic shopping bags and straws. These measures have reduced the use of certain items, but critics point out that bags and straws make up only a small part of plastic waste. A far larger amount comes from packaging and from lost or abandoned fishing gear. Real progress, they argue, will require changes in how products are designed and how waste is collected, especially in countries without effective recycling systems.

Individuals still have a role to play. Choosing products with less packaging, carrying reusable bottles, and joining beach clean-ups may seem like small steps. Yet when millions of people take them, they can change what companies produce and what governments decide.
`,`
第1段落の microplastics について正しいものはどれか。|長さ5ミリ未満の粒子で、北極の氷から深海まで見つかっている|海面に浮かぶ大きなプラスチックごみのことである|太陽光によって完全に分解される|海岸でのみ見つかっている|Particles less than five millimeters long ... found almost everywhere。|microplastics
第2段落の In this way が指す内容として最も適切なものはどれか。|小さな生物が食べたマイクロプラスチックが、それを食べる大きな生物へと移ること|海鳥がプラスチックを飲みこむこと|科学者が人体への影響を研究すること|プラスチックが太陽光で分解されること|直前の文（小さな生物が食べ、それがより大きな生物に食べられる）を受ける。|In this way
第2段落の内容と一致するものはどれか。|海の生物がプラスチックで害を受けていることはすでに明らかだ|プラスチックが人の健康に害があることは証明されている|プラスチックは食物連鎖を上がらない|海鳥はプラスチックを食べない|What is already clear is that sea birds, turtles, and fish are being harmed。
第3段落で批判的な人々が指摘していることはどれか。|レジ袋やストローはプラスチックごみのごく一部にすぎない|レジ袋の禁止は効果がまったくなかった|漁具はプラスチックごみに含まれない|リサイクル制度はすべての国で機能している|bags and straws make up only a small part of plastic waste。|only a small part
第3段落によると、プラスチックごみのより大きな部分を占めるものはどれか。|包装と、失われたり捨てられたりした漁具|ストローとレジ袋|ペットボトルだけ|家庭の生ごみ|A far larger amount comes from packaging and from lost or abandoned fishing gear。
最終段落で筆者が述べていることとして最も適切なものはどれか。|個人の小さな行動も、多くの人が行えば企業や政府を動かしうる|個人の行動には意味がない|ビーチの清掃は効果がない|政府だけが問題を解決できる|when millions of people take them, they can change ...`);

R('sleep_teen','10代の睡眠','健康・教育',`
Parents often complain that their teenage children stay up late at night and are impossible to wake in the morning. It is tempting to blame smartphones or laziness, and these may play a part. But research shows that there is also a biological reason. During adolescence, the body's internal clock shifts. Teenagers begin to feel sleepy about two hours later than they did as children, and their bodies naturally want to wake up later as well.

The problem is that most schools start early in the morning. A teenager who cannot fall asleep before midnight but must get up at six will be short of sleep every school day. Experts recommend that teenagers get eight to ten hours of sleep a night; surveys suggest that many get fewer than seven. The effects of this lack of sleep include difficulty concentrating, poor memory, and a higher risk of depression and traffic accidents.

Some school districts in the United States have experimented with starting classes later, often around half past eight instead of half past seven. The results have been encouraging. Students slept longer, attendance improved, and fewer students fell asleep in class. In some cases, test scores rose and car accidents among teenage drivers decreased.

Changing school start times is not easy. Bus schedules, parents' working hours, and after-school activities all have to be adjusted. Still, the evidence suggests that asking teenagers to adjust to early mornings may be less effective than adjusting the school day to teenagers.
`,`
第1段落によると、10代が夜更かしをする理由として研究が示しているものはどれか。|思春期に体内時計がずれ、眠くなる時刻が遅くなるから|スマートフォンを使うことだけが原因だから|10代は子どものころより睡眠が少なくてすむから|親が夜遅くまで起きているから|During adolescence, the body's internal clock shifts。|internal clock shifts
第2段落の内容と一致するものはどれか。|専門家は10代に毎晩8〜10時間の睡眠を勧めている|多くの10代は毎晩9時間以上寝ている|睡眠不足は集中力に影響しない|学校は遅い時間に始まることが多い|Experts recommend that teenagers get eight to ten hours of sleep a night。
第2段落で、睡眠不足の影響として挙げられていないものはどれか。|身長が伸びにくくなる|集中しにくくなる|記憶力が落ちる|うつや交通事故の危険が高まる|身長については書かれていない。
第3段落の The results have been encouraging. の具体的な内容として述べられていないものはどれか。|生徒が放課後の部活動を増やした|生徒の睡眠時間が長くなった|出席率が上がった|授業中に眠る生徒が減った|部活動の増加は書かれていない。|encouraging
第4段落で、始業時刻を変えるのが難しい理由として挙げられているものはどれか。|バスの時刻表や親の勤務時間、放課後の活動を調整する必要がある|生徒が反対している|試験の成績が下がる|教師の数が足りない|Bus schedules, parents' working hours, and after-school activities all have to be adjusted。
最終文の筆者の考えとして最も適切なものはどれか。|10代を早朝に合わせさせるより、学校の時間を10代に合わせる方が効果的かもしれない|10代は早起きの習慣を身につけるべきだ|学校の始業時刻は変えるべきではない|親が子どもを早く寝かせるべきだ|asking teenagers to adjust ... may be less effective than adjusting the school day to teenagers。`);

R('handwriting','手書きの効用','教育',`
In many classrooms today, students take notes on laptops or tablets rather than in notebooks. Typing is faster than writing by hand, and digital notes are easy to store, search, and share. It would seem obvious that students who type their notes have an advantage. Some studies, however, suggest the opposite.

In one experiment, university students watched a short lecture and took notes either by hand or on a laptop. Afterward, they were tested on what they had learned. On questions that simply asked for facts, the two groups did about equally well. But on questions that required understanding ideas and applying them, the students who had written by hand performed noticeably better.

The researchers' explanation was surprising: the very slowness of handwriting was the reason for its advantage. Because students cannot write down everything a lecturer says, they are forced to listen, decide what is important, and put it into their own words. Students using laptops, on the other hand, tended to type the lecture almost word for word. They recorded more, but they thought less about what they were recording.

This does not mean that laptops should be banned from classrooms. Later studies have found that the difference becomes smaller when students using laptops are told not to copy the lecture word for word. What matters, it seems, is not the tool itself but how actively the learner processes the information. A pen simply makes that active processing harder to avoid.
`,`
第1段落の内容と一致するものはどれか。|パソコンでノートをとる方が有利だと思われがちだが、逆の結果を示す研究もある|手書きの方が速いので有利である|多くの教室でパソコンの使用が禁止されている|デジタルのノートは共有しにくい|It would seem obvious ... Some studies, however, suggest the opposite。
実験の結果について正しいものはどれか。|事実を問う問題では両グループの差はあまりなく、理解や応用を問う問題では手書きのグループが上回った|すべての問題で手書きのグループが大きく上回った|パソコンのグループの方が理解を問う問題で優れていた|両グループの成績に差はまったくなかった|On questions that simply asked for facts ... equally well. But on questions that required understanding ... by hand performed noticeably better。
下線部 the very slowness of handwriting の very の働きとして最も適切なものはどれか。|「まさにその」と名詞を強調している|「とても」と程度を強めている|「本当の」という意味の形容詞である|「最も」という最上級を表している|the very＋名詞「まさにその〜」（英文解釈§39）。|the very slowness
第3段落によると、手書きが有利になる理由はどれか。|すべてを書けないので、聞いて重要な点を選び、自分の言葉にまとめざるをえないから|手書きの方が多くの情報を記録できるから|手書きの方が後で検索しやすいから|手書きの文字は記憶に残る形をしているから|they are forced to listen, decide what is important, and put it into their own words。
下線部 word for word の意味として最も適切なものはどれか。|一語一語そのまま|言葉を選びながら|要点だけを|自分の言葉に言いかえて|word for word「逐語的に」。|word for word
最終段落で筆者が述べていることとして最も適切なものはどれか。|重要なのは道具ではなく、学ぶ人がどれだけ能動的に情報を処理するかである|教室でのパソコンの使用は禁止すべきだ|ペンを使えば必ず成績が上がる|講義はすべて逐語的に記録すべきだ|What matters ... is not the tool itself but how actively the learner processes the information。`);

R('aging','高齢化と地域社会','社会',`
Japan has one of the oldest populations in the world. More than one in four Japanese people is now aged sixty-five or older, and in some rural towns the figure is closer to one in two. As young people move to cities in search of work, these communities face a difficult future: shops close, bus services are cut, and schools are merged or shut down.

It is easy to see this situation only as a burden. But some towns are trying to turn it into a strength. In one mountain village, elderly residents who once grew vegetables only for their own families began selling them, along with handmade pickles, at a small roadside shop. The shop became popular with visitors from the city, and the income allowed the villagers to hire a few young people to help. Some of those young people eventually decided to settle in the village.

Other communities have focused on connecting generations. In some towns, nursery schools and day-care centers for the elderly share the same building. Children and older people eat lunch together, play games, and celebrate festivals. Staff report that the elderly residents become more active and cheerful, while the children learn patience and kindness.

These examples are small, and they cannot solve the problem of a shrinking population by themselves. What they show, however, is that older people are not only people who need care. With the right opportunities, they can be sources of knowledge, skills, and energy that keep a community alive.
`,`
第1段落の内容と一致するものはどれか。|一部の地方の町では、65歳以上の人が人口の半数近くを占めている|日本の高齢者の割合は世界で最も低い|若い人が地方に移り住んでいる|地方では学校が増えている|in some rural towns the figure is closer to one in two。|one in two
第2段落の山村の例について正しいものはどれか。|お年寄りが野菜や漬物を売り始め、その収入で若者を雇い、定住する若者も出てきた|若者が村に店を開き、お年寄りを雇った|都会の人が村に野菜を売りに来た|店は人気が出ず、すぐに閉店した|販売→人気→収入で若者を雇用→定住、という流れ。
下線部 turn it into a strength の it が指すものはどれか。|高齢化が進んだ地域の状況|若者が都市に移ること|道路沿いの小さな店|野菜の栽培|直前の this situation（高齢化と過疎の状況）を受ける。|turn it into a strength
第3段落の取り組みの説明として最も適切なものはどれか。|保育所と高齢者の通所施設が同じ建物にあり、世代間の交流が生まれている|お年寄りが保育士として働いている|子どもとお年寄りが別々の建物で過ごしている|お年寄りが子どもに勉強を教える塾を開いた|nursery schools and day-care centers for the elderly share the same building。
第3段落によると、世代間交流の効果として述べられているものはどれか。|お年寄りは活発で明るくなり、子どもは忍耐や優しさを学ぶ|子どもの学力が上がる|施設の運営費が下がる|お年寄りの介護が不要になる|the elderly residents become more active and cheerful, while the children learn patience and kindness。
筆者の主張として最も適切なものはどれか。|高齢者は介護を受けるだけの存在ではなく、機会があれば地域を支える力になりうる|これらの取り組みで人口減少の問題は解決できる|高齢者は都市に移るべきだ|若者は地方に移住すべきだ|older people are not only people who need care ... can be sources of knowledge, skills, and energy。`);

R('failure','失敗から学ぶ','教育・心理',`
Schools usually reward students for getting the right answer. Tests are graded by how many mistakes are made, and a student with fewer mistakes receives a higher score. It is natural, then, that many students come to see mistakes as something to avoid at all costs. Yet a growing body of research suggests that making mistakes, under the right conditions, is one of the most effective ways to learn.

In one study, two groups of students learned a set of new facts. The first group studied the facts directly. The second group was first asked to guess the answers, most of which they got wrong, and was then shown the correct ones. On a later test, the second group remembered more. Making an error and then being corrected, the researchers concluded, helps the brain store the right answer more firmly, especially when the learner is surprised by the correction.

The key condition is that mistakes must be followed by feedback. A mistake that is never noticed or corrected teaches nothing, and may even be learned as if it were correct. Equally important is the learner's attitude. Students who believe that their abilities can grow through effort tend to treat errors as useful information. Those who believe their abilities are fixed often feel that a mistake proves they are not smart, and they stop trying.

For teachers, this means creating classrooms where mistakes are expected and discussed openly rather than hidden. For learners, it means seeing a wrong answer not as a final judgment but as a step toward understanding.
`,`
第1段落で筆者が述べていることとして最も適切なものはどれか。|学校では間違いを避けるべきものと考えがちだが、間違いは効果的な学習方法になりうる|学校は間違いを多くした生徒を評価すべきだ|テストは廃止すべきだ|間違いを避けることが最も効果的な学習法である|Yet a growing body of research suggests that making mistakes ... is one of the most effective ways to learn。
実験で、後のテストでより多くを覚えていたのはどちらのグループか。|まず答えを推測して間違え、その後正解を見たグループ|最初から事実をそのまま学んだグループ|推測せずにテストを受けたグループ|両グループとも同じだった|On a later test, the second group remembered more。
下線部 especially when the learner is surprised by the correction が示唆することとして最も適切なものはどれか。|自信をもって間違えた答えを訂正されたときに、特に記憶に残りやすい|驚くと記憶が消えやすい|訂正されない方が記憶に残る|驚かない方が学習効果が高い|訂正に驚く＝予想と違った、という場合に強く記憶される。|surprised by the correction
第3段落によると、間違いが学習に役立つための条件はどれか。|間違いの後にフィードバック（訂正）があること|間違いを隠すこと|間違いを何度も繰り返すこと|テストの点数が高いこと|The key condition is that mistakes must be followed by feedback。|followed by feedback
第3段落で、能力は固定されていると考える生徒について述べられていることはどれか。|間違いを自分が賢くない証拠だと感じ、努力をやめてしまうことが多い|間違いを有益な情報として扱う|努力すれば能力は伸びると信じている|間違いをしない|Those who believe their abilities are fixed often feel that a mistake proves they are not smart, and they stop trying。
最終段落の内容として最も適切なものはどれか。|教師は間違いを隠さず話し合える教室を作り、学ぶ人は誤答を理解への一歩とみなすべきだ|教師は生徒の間違いを厳しく罰するべきだ|生徒は間違いをしないよう慎重になるべきだ|間違いは最終的な評価として受け止めるべきだ|For teachers ... For learners ... の2文の内容。`);

R('citytree','都市の街路樹','環境・都市',`
On a hot summer afternoon, the temperature on a tree-lined street can be several degrees lower than on a nearby street with no trees. Trees cool cities in two ways. Their leaves block sunlight from reaching roads and buildings, which would otherwise absorb heat. In addition, trees release water vapor through their leaves, a process that cools the surrounding air in much the same way as sweat cools the human body.

This cooling effect is becoming more important as cities grow hotter. Concrete and asphalt absorb heat during the day and release it at night, so that urban areas are often much warmer than the countryside around them. During heat waves, this can be dangerous, especially for elderly people and those without air conditioning. Studies in several cities have found that neighborhoods with fewer trees tend to have higher temperatures and more heat-related illness.

Trees bring other benefits as well. They absorb some of the rainwater that would otherwise flood streets, filter certain pollutants from the air, and provide homes for birds and insects. Some research even suggests that people who live near green spaces report lower levels of stress.

Planting trees in cities, however, is not as simple as it sounds. Street trees need enough space for their roots, regular care, and protection from damage. In many cities, the neighborhoods that most need trees are also the ones with the least space and money to look after them. For this reason, some experts argue that urban tree planting should be treated not as decoration but as essential public infrastructure, like roads and water pipes.
`,`
第1段落によると、木が都市を涼しくする仕組みとして述べられているものはどれか。|葉が日光をさえぎることと、葉から水蒸気を出して周りの空気を冷やすこと|木が地面の熱を吸収すること|木が風を起こすこと|木が雨を降らせること|block sunlight ... In addition, trees release water vapor。
下線部 in much the same way as sweat cools the human body が説明していることはどれか。|水分が蒸発するときに周囲を冷やす仕組みが、汗が体を冷やすのと同じであること|木も人間と同じように汗をかくこと|汗をかくと体温が上がること|木が人間の体を冷やすこと|水蒸気の放出による冷却を、汗の気化熱にたとえている。|sweat cools the human body
第2段落によると、都市が周辺より暑くなる理由はどれか。|コンクリートやアスファルトが昼に熱を吸収し、夜に放出するから|都市には木が多すぎるから|都市には風が強く吹くから|都市の人口が減っているから|Concrete and asphalt absorb heat during the day and release it at night。
第3段落で、木の利点として述べられていないものはどれか。|建物の電気代を直接下げる|雨水を吸収して道路の浸水を防ぐ|空気中の汚染物質を一部ろ過する|鳥や昆虫のすみかになる|電気代については書かれていない。
第4段落の the ones が指すものはどれか。|地域（neighborhoods）|木（trees）|専門家（experts）|根（roots）|the neighborhoods that most need trees are also the ones with the least space ... の ones＝neighborhoods。|the ones
専門家の主張として最も適切なものはどれか。|都市の植樹は飾りではなく、道路や水道のような不可欠な公共基盤として扱うべきだ|街路樹は景観のための飾りとして植えるべきだ|木は郊外にだけ植えるべきだ|植樹は個人に任せるべきだ|should be treated not as decoration but as essential public infrastructure。`);
R('translate','翻訳アプリと外国語学習','言語・技術',`
Translation apps have improved dramatically in recent years. A traveler can now point a smartphone at a menu in Korean and see it in Japanese, or speak into a phone and hear the words repeated in Spanish. For simple tasks such as ordering food or asking for directions, these tools work remarkably well. It is natural to ask whether learning foreign languages is still worth the effort.

Many language teachers believe it is, for reasons that go beyond communication itself. Learning a language, they argue, is also a way of learning how other people see the world. Every language divides experience in its own way. Japanese has many words for different kinds of rain; English distinguishes between a "house" and a "home." Noticing such differences helps learners realize that their own way of thinking is not the only one.

There are also practical limits to machine translation. Apps often struggle with jokes, polite expressions, and words that depend heavily on context. More importantly, conversation through a machine is slow and indirect. It is difficult to build trust or friendship when every sentence must pass through a screen. People who speak even a little of another person's language often find that the other person relaxes and opens up.

None of this means that translation apps are useless. For learners, they can be valuable tools for checking meanings or hearing pronunciation. The danger lies in relying on them so completely that we stop trying to understand others directly. Used wisely, technology can support language learning rather than replace it.
`,`
第1段落で筆者が提起している問いはどれか。|翻訳アプリが進歩した今でも、外国語を学ぶ価値はあるのか|翻訳アプリはなぜ料理の注文に向いているのか|韓国語と日本語のどちらが難しいか|スマートフォンはいつ普及したのか|最終文 whether learning foreign languages is still worth the effort。
第2段落で、言語を学ぶことの意義として述べられているものはどれか。|他の人々の世界の見方を知り、自分の考え方が唯一ではないと気づけること|旅行中に料理を注文できること|雨の種類を正確に覚えられること|翻訳アプリをうまく使えるようになること|a way of learning how other people see the world ... their own way of thinking is not the only one。
下線部 Every language divides experience in its own way. の具体例として本文で挙げられているものはどれか。|日本語には雨を表す語が多く、英語は house と home を区別すること|英語にはていねいな表現がないこと|スペイン語の発音が難しいこと|韓国語のメニューが読みにくいこと|直後の Japanese has many words ... English distinguishes ... が具体例。|Every language divides experience in its own way
第3段落で、機械翻訳の限界として述べられていないものはどれか。|料金が高いこと|冗談やていねいな表現が苦手なこと|会話が遅く間接的になること|画面越しでは信頼や友情を築きにくいこと|料金については書かれていない。
第3段落の opens up の意味として最も近いものはどれか。|打ち解けて心を開く|ドアを開ける|店を開業する|話をやめる|open up「心を開く、打ち解ける」。前の relaxes とつながる。|opens up
筆者の結論として最も適切なものはどれか。|翻訳アプリは賢く使えば言語学習を支える道具になるが、頼りきってはいけない|翻訳アプリは使うべきではない|言語学習は翻訳アプリに置きかえられる|翻訳アプリは発音の練習にしか使えない|Used wisely, technology can support language learning rather than replace it。`);

R('dialect','方言の価値','言語・文化',`
For much of the twentieth century, many Japanese schools tried to discourage children from using local dialects. Standard Japanese, based on the speech of Tokyo, was seen as the language of education and success, while regional ways of speaking were often treated as rough or old-fashioned. Television and radio, which spread standard Japanese to every corner of the country, strengthened this trend.

In recent decades, however, attitudes have begun to change. Many people now see dialects not as mistakes but as an important part of local culture. Some towns hold dialect speech contests, and dialect phrases appear on souvenirs and in advertising. Young people who once hid their accents when they moved to Tokyo are increasingly proud of them.

Linguists welcome this change, partly because dialects preserve information about the history of the language. Some dialects keep words and pronunciations that disappeared from standard Japanese centuries ago. When a dialect dies, this record of the past is lost forever. Dialects can also express feelings and relationships in ways that the standard language cannot. A single word in a local dialect may carry a warmth or humor that is difficult to translate even into standard Japanese.

Yet many dialects are still in danger. As older speakers pass away and families move to cities, fewer children grow up hearing them every day. Some communities have started recording elderly speakers and creating dialect dictionaries. These efforts may not be enough to keep every dialect alive, but they ensure that future generations will at least know what was once spoken in their hometowns.
`,`
第1段落によると、20世紀の多くの学校で方言はどのように扱われたか。|使わないよう子どもに勧められた|授業で積極的に教えられた|標準語より大切にされた|テレビで広められた|tried to discourage children from using local dialects。|discourage children from using local dialects
第1段落で、標準語が全国に広まるのを後押ししたものはどれか。|テレビとラジオ|方言の弁論大会|土産物の広告|方言辞典|Television and radio ... strengthened this trend。
第2段落の内容と一致するものはどれか。|かつて上京して方言を隠していた若者が、方言を誇りに思うようになっている|若者は方言を使うことを恥ずかしがるようになった|方言は誤りだと考える人が増えている|方言の弁論大会は廃止された|Young people who once hid their accents ... are increasingly proud of them。
第3段落で、言語学者が方言を大切にする理由として述べられているものはどれか。|標準語から消えた昔の語や発音が残っており、言語の歴史を伝えるから|方言の方が文法が簡単だから|方言は外国語に訳しやすいから|方言を話す人が増えているから|dialects preserve information about the history of the language。
第3段落の this record of the past が指すものはどれか。|方言に残っている、昔の言葉や発音|標準語の辞書|地方の歴史の本|高齢者の録音|直前の、標準語から消えた語や発音を残していること（方言そのもの）を受ける。|this record of the past
最終段落で述べられている取り組みの目的として最も適切なものはどれか。|すべての方言を残せなくても、かつて話されていた言葉を将来の世代が知れるようにすること|方言をすべて標準語に置きかえること|子どもに方言だけを話させること|高齢者を都会に移住させること|they ensure that future generations will at least know what was once spoken。`);

R('walking','歩くことの効用','健康',`
Of all the ways to improve our health, walking may be the simplest. It requires no special equipment, no membership fee, and no particular skill. Yet research over the past few decades suggests that regular walking can bring benefits as great as those of many more demanding forms of exercise.

People who walk briskly for about thirty minutes on most days have a lower risk of heart disease, diabetes, and some kinds of cancer. Walking also strengthens bones and muscles, which becomes increasingly important as we age. Perhaps more surprisingly, walking appears to benefit the mind as well as the body. Several studies have found that people who walk regularly report less anxiety and better moods, and that older adults who keep walking are less likely to suffer memory loss.

Walking may even help us think. In one study, participants were asked to come up with creative uses for everyday objects. Those who were walking, even on a treadmill facing a blank wall, produced more ideas than those who were sitting. Many famous writers and thinkers, from ancient philosophers to modern scientists, have described long walks as the time when their best ideas came to them.

Despite these benefits, many people walk less than ever. Cars, elevators, and online shopping have removed much of the walking that was once part of daily life. Experts suggest small changes: getting off the bus one stop early, taking the stairs, or holding meetings while walking instead of sitting around a table. Such habits cost nothing, and over time they may add years to our lives.
`,`
第1段落で、歩くことについて述べられていることはどれか。|特別な道具や技術がいらないのに、より激しい運動に劣らない効果がある|会費を払えば誰でもできる|激しい運動よりも効果が低い|特別な技術を身につける必要がある|no special equipment ... benefits as great as those of many more demanding forms of exercise。
第2段落で、歩くことの効果として述べられていないものはどれか。|視力がよくなる|心臓病や糖尿病の危険が下がる|骨や筋肉が強くなる|不安が減り、気分がよくなる|視力については書かれていない。
下線部 as well as the body の意味として最も適切なものはどれか。|体だけでなく（心にも）|体と同じくらいよく|体のためによく|体の代わりに|A as well as B「BだけでなくAも」。the mind as well as the body。|as well as the body
第3段落の実験の結果として正しいものはどれか。|歩いている人の方が、座っている人より多くのアイデアを出した|座っている人の方が独創的なアイデアを出した|白い壁を見ると考えが浮かばなかった|両者に差はなかった|Those who were walking ... produced more ideas than those who were sitting。
第4段落で、人々の歩く量が減った理由として挙げられているものはどれか。|車やエレベーター、ネットショッピングによって日常の歩行が減ったから|歩くことが体に悪いとわかったから|歩道が少なくなったから|運動する時間がなくなったから|Cars, elevators, and online shopping have removed much of the walking。
最終段落で専門家が勧めていることとして最も適切なものはどれか。|バスを1つ手前で降りるなど、日常の小さな工夫で歩く量を増やすこと|毎日1時間以上ジムで運動すること|会議を短くすること|ネットショッピングを禁止すること|getting off the bus one stop early, taking the stairs ...`);

R('volunteer','ボランティアと幸福','社会・心理',`
It seems natural to assume that helping others is a sacrifice: we give up our time and energy so that someone else can benefit. But a growing body of research suggests that the helpers themselves may gain as much as the people they help.

Studies of volunteers in many countries have found that people who regularly give their time to others tend to report greater happiness and life satisfaction than those who do not. Some studies have even found that older volunteers live longer on average. Of course, it is possible that people who are already healthy and happy are simply more likely to volunteer. But experiments in which people were randomly asked to perform acts of kindness, such as buying coffee for a stranger, have also found a rise in the helpers' mood.

Researchers offer several explanations. Helping others gives people a sense of purpose and reminds them that they can make a difference. It also creates social connections, which are among the strongest predictors of well-being. Finally, focusing on someone else's needs can take our attention away from our own worries, at least for a while.

The benefits, however, appear to depend on how the help is given. People who volunteer because they feel forced to, or who take on so much that they become exhausted, do not enjoy the same advantages. The greatest benefits seem to come when people choose freely how to help and can see the results of their efforts. Helping others, in short, is good for us, but only when it comes from the heart.
`,`
第1段落の内容として最も適切なものはどれか。|人を助けることは犠牲だと考えがちだが、助ける側も同じくらい得をしているかもしれない|人を助けることは助ける側にとって損失である|ボランティアは時間のむだである|研究者はボランティアに反対している|the helpers themselves may gain as much as the people they help。
第2段落で、筆者が Of course 以下で認めていることはどれか。|もともと健康で幸せな人がボランティアをしやすいだけ、という可能性|ボランティアをすると寿命が縮むこと|親切な行為は気分を悪くすること|実験はすべて信頼できないこと|it is possible that people who are already healthy and happy are simply more likely to volunteer（因果関係の逆の可能性）。|Of course
第2段落で、上の可能性を踏まえて紹介されている実験の意義として最も適切なものはどれか。|人を無作為に選んで親切な行為をさせても気分が上がったので、助けることが幸福の原因になりうると示した|健康な人だけが親切にすることを示した|コーヒーが気分を上げることを示した|見知らぬ人に親切にすると危険だと示した|randomly asked ... have also found a rise in the helpers' mood → 元から幸せな人だから、という説明だけでは説明できない。
第3段落で挙げられている説明として述べられていないものはどれか。|ボランティアをすると収入が増える|目的意識が生まれる|人とのつながりができる|自分の悩みから注意がそれる|収入については書かれていない。
最終段落によると、ボランティアの効果が得られにくいのはどのような場合か。|強制されて行う場合や、引き受けすぎて疲れ果てる場合|自由に選んで行う場合|成果が目に見える場合|少しずつ行う場合|People who volunteer because they feel forced to, or who take on so much that they become exhausted。
最終文 only when it comes from the heart の意味として最も適切なものはどれか。|心から自発的に行うときに限って|心臓によいときだけ|感情を表に出すときだけ|人に頼まれたときだけ|from the heart「心から」。自由意思で行う場合に効果がある、という前文の言いかえ。|from the heart`);

})();
