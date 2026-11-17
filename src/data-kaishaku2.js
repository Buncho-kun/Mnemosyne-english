// 英文解釈（構文）§8〜§14 ― 例文・解説・例題はすべてこのアプリ用に作成
(function(){
const D=window.EIGO_DATA,deck=D.decks.find(d=>d.id==='kaishaku');if(!deck)return;
const L=deck.items;
const ej=(k,en,ja,point,hint,long)=>({k,kind:'ej',en,models:Array.isArray(ja)?ja:[ja],point,hint:hint||'',long:!!long});

/* ================= §8 無生物主語(1) ================= */
L.push({k:'ks8',no:'§8',title:'無生物主語構文(1)　原因・理由・手段',sub:'物が主語の文は「〜によって人が…する」と訳す',
body:`
# 8-1 無生物主語とは
: 英語では、**物・出来事・抽象名詞**を主語にして「それが人に〜させる」と表すことが多い。日本語は人を主語にするのが自然なので、直訳すると不自然になる。
: 訳し方の基本は、**主語を「原因・理由・手段・条件」の副詞として訳し、目的語の「人」を主語にする**こと。
= 8-1-1|{The heavy rain} {kept} us indoors all weekend.|**大雨のせいで**、私たちは週末ずっと家にいた。
: 直訳「大雨が私たちを週末ずっと屋内にとどめた」→ 主語 The heavy rain を「大雨のせいで」と原因に、us を「私たちは」と主語に訳す。
[無生物主語の訳し方]
| 主語を原因・理由に | 〜のせいで、〜のために、〜なので
| 主語を手段に | 〜によって、〜を使えば、〜のおかげで
| 主語を条件に | 〜すれば、〜があれば
| 主語を時に | 〜するとき、〜すると

# 8-2 「原因・理由」を表す無生物主語
[原因を表す主な動詞]
| make O do / C | Oに〜させる／OをCにする → 〜のせいでOは…
| cause O to do | Oに〜させる → 〜が原因でOは…
| force [compel, oblige] O to do | Oに〜するよう強いる → 〜のためOは…せざるをえない
| keep O from doing | Oが〜するのを妨げる → 〜のためOは…できない
| prevent [stop] O from doing | 同上
| lead O to do | Oを〜するよう導く → 〜によってOは…するようになる
| drive O to do | Oを〜へ追いやる → 〜のためOは…する
- 8-2-1|{Illness} {forced} him {to give up} his studies.|**病気のため**、彼は学業を**断念せざるをえなかった**。
- 8-2-2|{A sudden noise} {made} the baby {cry}.|**急に物音がして**、赤ちゃんが**泣き出した**。
- 8-2-3|{Lack of sleep} can {cause} you {to make} careless mistakes.|**睡眠不足だと**、不注意なミスを**しかねない**。
- 8-2-4|{What} {made} you {think} so?|**どうして**そう思ったの？
: What made you do? は「何があなたに〜させたのか」→「なぜ〜したのか」。理由を尋ねる頻出表現。
- 8-2-5|{His remarks} {led} me {to believe} that he was hiding something.|**彼の発言から**、私は彼が何かを隠しているのだと**思うようになった**。

# 8-3 「手段・条件」を表す無生物主語
[手段・条件の無生物主語でよく使う動詞]
| enable [allow] O to do | Oが〜できるようにする → 〜のおかげでOは…できる
| help O (to) do | Oが〜するのを助ける → 〜すればOは…しやすい
| take O to 場所 | Oを〜へ連れて行く → 〜に乗ればOは…へ行ける
| bring O to 場所 | Oを〜へ連れてくる → 〜でOは…へ来た
| show [tell] O that 〜 | Oに〜を示す → 〜からOは…とわかる
| remind O of A | OにAを思い出させる → 〜を見るとOはAを思い出す
| save O A | OのAを省く → 〜すればOはAが節約できる
- 8-3-1|{This bus} will {take} you {to} the airport.|**このバスに乗れば**空港に**行けます**。
- 8-3-2|{A few minutes' walk} {brought} us {to} the lake.|**数分歩くと**、私たちは湖に**着いた**。
: 時間・距離の主語＋bring / take は「〜すると…に着く」と訳す。
- 8-3-3|{The data} {show} that the number of births is falling.|**データから**、出生数が減っていることが**わかる**。
- 8-3-4|{A glance at the map} will {tell} you where the station is.|**地図をちょっと見れば**、駅がどこにあるか**わかります**。
: A glance at 〜 / A moment's thought / A little effort などの主語は**条件**「〜すれば」に訳すと自然。
- 8-3-5|{This song} always {reminds} me {of} my high school days.|**この歌を聞くと**、いつも高校時代を**思い出す**。
> 無生物主語の文で will や can が使われている場合は、**条件の意味**で訳すのが原則（「〜すれば…できるだろう」）。
`,
drills:[
ej('ks8d1','{The traffic jam} {made} us late for the concert.','**渋滞のせいで**、私たちはコンサートに**遅れた**。','make O C。主語を原因に、us を主語にして訳す。'),
ej('ks8d2','{Bad weather} {prevented} the plane {from} landing on time.','**悪天候のため**、飛行機は時間どおりに**着陸できなかった**。','prevent O from doing「Oが〜するのを妨げる」→「〜のためOは…できない」。'),
ej('ks8d3','{What} {brought} you to Japan?','**どうして**日本に**来たのですか**。','What brought you to 〜?「何があなたを〜へ連れてきたのか」→「なぜ〜へ来たのか」。'),
ej('ks8d4','{A short walk} {will take} you to the beach.','**少し歩けば**、海岸に**出られます**。','A short walk が条件「少し歩けば」。take O to 場所。'),
ej('ks8d5','{Her letter} {showed} that she was deeply hurt.','**手紙から**、彼女がひどく傷ついていることが**わかった**。','show that 〜。主語を「〜から」と訳し、「〜とわかる」とまとめる。'),
ej('ks8d6','{Poverty} {drove} the family {to leave} their homeland.','**貧しさのため**、その一家は故郷を**離れざるをえなかった**。','drive O to do「Oを〜へ追いやる」。'),
ej('ks8d7','{A moment\'s thought} {will show} you that the plan cannot work.','**少し考えれば**、その計画がうまくいかないことは**わかるだろう**。','A moment\'s thought は条件「少し考えれば」。will は条件の帰結。'),
ej('ks8d8','Many people believe that money brings happiness. {However, a growing body of research has led psychologists to conclude that, beyond a certain level of income, more money does little to make people happier.}','多くの人がお金は幸せをもたらすと信じている。**しかし、増えつつある研究によって、心理学者たちは、ある程度の収入を超えると、お金が増えても人はほとんど幸せにならないと結論づけるようになった**。','【構造】a growing body of research が無生物主語、has led が V、psychologists が O、to conclude が C。conclude の目的語が that 節で、that の直後に副詞句 beyond a certain level of income が挿入されている。\n【ポイント】lead O to do「〜によってOは…するようになる」。does little to make 〜「〜するのにほとんど役立たない」。more money も無生物主語で「お金が増えても」と訳す。','lead O to do と do little to do',true)
]});

/* ================= §9 無生物主語(2) ================= */
L.push({k:'ks9',no:'§9',title:'無生物主語構文(2)　名詞を動詞的に訳す',sub:'抽象名詞の主語は「〜すること」「〜したこと」と開いて訳す',
body:`
# 9-1 抽象名詞の主語を開いて訳す
: 無生物主語が**動詞から派生した抽象名詞**（arrival / failure / refusal / discovery など）のときは、その名詞を**文に開いて**訳すと自然になる。
= 9-1-1|{His sudden resignation} surprised everyone.|**彼が突然辞職したことに**、みんな驚いた。
: resignation ← resign。His が意味上の主語、sudden は副詞的に「突然」と訳す。
[名詞を開くときの対応]
| 所有格・of 〜 | 名詞の意味上の主語（〜が）または目的語（〜を）
| 形容詞 | 副詞のように訳す（sudden → 突然、careful → 注意深く）
| 名詞 | 動詞に戻す（arrival → 着く、failure → 失敗する）
- 9-1-2|{The discovery of oil} changed the country completely.|**石油が発見されたことで**、その国はすっかり変わった。
: of oil は discover の目的語にあたる → 「石油が発見された」。
- 9-1-3|{Her refusal to help} disappointed us.|**彼女が手伝いを断ったので**、私たちはがっかりした。
- 9-1-4|{A careful reading of the contract} would have saved you a lot of trouble.|**契約書を注意深く読んでいれば**、多くの面倒を避けられただろうに。
: would have saved は仮定法過去完了。主語が「もし〜していれば」という条件を表している。

# 9-2 感情・心理を表す動詞と無生物主語
: surprise / please / disappoint / bore / frighten / worry などの感情動詞は「（物が）人を〜させる」という他動詞。物が主語なら能動、人が主語なら受動（be surprised）になる。
[感情を表す他動詞]
| surprise / amaze / astonish | 驚かせる
| please / delight / satisfy | 喜ばせる／満足させる
| disappoint | がっかりさせる
| bore / tire | 退屈させる／疲れさせる
| frighten / scare | こわがらせる
| worry / trouble / bother | 心配させる／悩ませる
| embarrass | 恥ずかしい思いをさせる
| move / touch | 感動させる
- 9-2-1|{The ending of the film} {moved} many viewers to tears.|**映画の結末に**、多くの観客が感動して**涙を流した**。
: move O to tears「Oを感動させて涙を流させる」。
- 9-2-2|{The thought of the exam} {kept} me awake all night.|**試験のことを考えると**、一晩中**眠れなかった**。
- 9-2-3|{His behavior at the party} {embarrassed} his wife.|**パーティーでの彼のふるまいに**、妻は**恥ずかしい思いをした**。

# 9-3 時・場所が主語になる文
: 年代・場所・時代などが主語になり、see / witness / find などをとることがある。「〜には…が起こった」「〜では…が見られた」と訳す。
= 9-3-1|{The 20th century} {saw} two world wars.|**20世紀には**、二度の世界大戦が**起こった**。
- 9-3-2|{The year 1969} {witnessed} the first landing on the moon.|**1969年に**、初の月面着陸が**行われた**。
- 9-3-3|{Tokyo} {has seen} many changes since the Olympics.|オリンピック以来、**東京では**多くの変化が**あった**。
> see / witness が時代・場所を主語にとったら「見た」と訳さない。「〜に起きた、見られた」と出来事の発生として訳す。
`,
drills:[
ej('ks9d1','{The arrival of the railway} brought great changes to the village.','**鉄道が開通したことで**、その村には大きな変化がもたらされた。','arrival ← arrive。the railway が意味上の主語。'),
ej('ks9d2','{His failure to pass the exam} disappointed his parents.','**彼が試験に合格できなかったことに**、両親はがっかりした。','failure to do「〜しないこと、〜できないこと」。名詞を開いて訳す。'),
ej('ks9d3','{A quick look at the menu} told me that the restaurant was expensive.','**メニューをちらっと見ただけで**、その店が高いことがわかった。','a quick look at 〜 を条件・手段に訳す。tell 人 that 〜 → 「〜とわかる」。'),
ej('ks9d4','{The last decade} {has seen} a sharp rise in online shopping.','**この10年で**、ネットショッピングが急増した。','時が主語の see は「〜には…が起こった」。a sharp rise in 〜「〜の急増」も開いて「急増した」と訳す。'),
ej('ks9d5','{Careful use of resources} will allow the company to survive the crisis.','**資源を注意深く使えば**、会社はその危機を乗り越えられるだろう。','careful use of resources →「資源を注意深く使うこと」。形容詞 careful を副詞的に訳す。'),
ej('ks9d6','{Our ignorance of other cultures} often leads to misunderstanding.','**私たちがほかの文化について知らないことが**、しばしば誤解につながる。','ignorance of 〜 ← be ignorant of 〜「〜を知らない」。'),
ej('ks9d7','In the past, most children in the region left school early to work on family farms. {The introduction of free education in the 1960s, however, made it possible for almost every child to attend school until the age of fifteen.}','かつて、その地域の子どもの大半は、家の農場で働くために早くに学校をやめた。**しかし1960年代に教育が無償化されたことで、ほとんどすべての子どもが15歳まで学校に通えるようになった**。','【構造】The introduction of free education in the 1960s が無生物主語、made が V、it が形式目的語、possible が C、for almost every child to attend ... が本当の目的語。\n【ポイント】introduction of free education は「無償教育を導入すること」→「教育が無償化されたこと」と開く。make it possible for 人 to do を「人が〜できるようになった」と訳す。','主語の名詞を開いて訳す',true)
]});

/* ================= §10 不定詞(1) ================= */
L.push({k:'ks10',no:'§10',title:'不定詞(1)　3用法の見分け方',sub:'名詞・形容詞・副詞のどの働きかを位置で判断する',
body:`
# 10-1 名詞的用法
: to do が**主語・目的語・補語**になり、「〜すること」と訳す。
= 10-1-1|My goal is {to become} a translator.|私の目標は翻訳家に**なることだ**。（補語）
- 10-1-2|She decided {to study} medicine.|彼女は医学を**学ぶことに**決めた。（目的語）
- 10-1-3|{To admit} your mistakes takes courage.|自分の過ちを**認めることには**勇気がいる。（主語。普通は It takes courage to admit ... の形）
[to 不定詞を目的語にとる動詞（未来志向）]
| want / hope / wish / expect | 〜したい／〜することを期待する
| decide / determine / plan | 〜することに決める／計画する
| promise / agree / refuse | 〜すると約束する／同意する／拒む
| manage / fail | 何とか〜する／〜しない、できない
| afford | 〜する余裕がある
| pretend | 〜するふりをする
- 10-1-4|He {failed to} notice the warning sign.|彼は警告の標識に**気づかなかった**。
: fail to do は「〜しそこなう」だけでなく、単に「〜しない」という意味でよく使われる。never fail to do は「必ず〜する」。

# 10-2 形容詞的用法
: to do が**直前の名詞を修飾**し、「〜する（ための）名詞」「〜すべき名詞」と訳す。名詞と不定詞の関係に3パターンある。
[名詞と不定詞の関係]
| 名詞が不定詞の主語 | someone to help me（私を助けてくれる人）
| 名詞が不定詞の目的語 | something to drink（飲む物）、a house to live in（住む家）
| 名詞の内容を説明（同格） | a decision to leave（去るという決断）
= 10-2-1|I need someone {to talk to}.|**話し相手**が必要だ。
: talk to someone の someone が前に出た形。前置詞 to を忘れない。
- 10-2-2|We have no time {to waste}.|**むだにする**時間はない。
- 10-2-3|She made a promise {to call} me every week.|彼女は毎週私に**電話するという**約束をした。（同格）
- 10-2-4|He was the first person {to climb} the mountain alone.|彼はその山に単独で**登った**最初の人だった。
: the first [last, only] + 名詞 + to do は「〜した最初の［最後の、唯一の］人」。the last person to do は「最も〜しそうにない人」の意味もある。
- 10-2-5|She is the last person {to tell} a lie.|彼女は**決してうそをつくような人ではない**。

# 10-3 副詞的用法
: to do が**動詞・形容詞・文全体を修飾**する。意味は文脈で決まる。
[副詞的用法の意味]
| 目的 | 〜するために（in order to / so as to で明示）
| 感情の原因 | 〜して（glad / sorry / surprised + to do）
| 判断の根拠 | 〜するとは（must be / careless of 人 to do など）
| 結果 | (…して)その結果〜する（grow up to be / only to do / never to do）
| 程度 | 〜するには（too 〜 to do / enough to do）
| 条件 | 〜すれば（To hear him talk, you'd think 〜）
- 10-3-1|I got up early {to catch} the first train.|始発に**乗るために**早起きした。（目的）
- 10-3-2|I was surprised {to hear} the news.|その知らせを**聞いて**驚いた。（感情の原因）
- 10-3-3|He must be a genius {to solve} the problem so quickly.|その問題をそんなに速く**解くとは**、彼は天才に違いない。（判断の根拠）
- 10-3-4|The boy grew up {to be} a famous scientist.|その少年は成長して有名な科学者に**なった**。（結果）
- 10-3-5|She hurried to the station, {only to find} that the train had left.|彼女は駅へ急いだが、**結局**電車は出た後**だった**。（結果）
: only to do「（…したが）結局〜しただけだった」、never to do「（…して）二度と〜しなかった」。
- 10-3-6|He left his hometown, {never to return}.|彼は故郷を離れ、**二度と戻らなかった**。
- 10-3-7|This book is too difficult for children {to understand}.|この本は子どもが**理解するには**難しすぎる。（程度）
- 10-3-8|{To hear} him speak English, you would take him for a native speaker.|彼が英語を話すのを**聞けば**、ネイティブだと思うだろう。（条件）
> 判別のコツ：① 動詞の目的語・補語の位置 → 名詞的 ② 名詞の直後 → 形容詞的（ただし目的の副詞的用法の可能性もあり）③ 文の要素がそろった後や形容詞の後 → 副詞的
`,
drills:[
ej('ks10d1','There is nothing {to be afraid of}.','**こわがる**ことは何もない。','形容詞的用法。be afraid of nothing の nothing が前に出た形。前置詞 of が残る。'),
ej('ks10d2','I was lucky enough {to find} a seat on the crowded train.','運よく、混んだ電車で席を**見つけることができた**。','enough to do「〜するほど十分…」。lucky enough to do →「運よく〜した」。'),
ej('ks10d3','He studied hard, {only to fail} the exam again.','彼は一生懸命勉強したが、**結局**また試験に**落ちてしまった**。','only to do は結果「結局〜しただけだった」。'),
ej('ks10d4','She must be very rich {to buy} such an expensive car.','あんな高い車を**買うとは**、彼女はとてもお金持ちに違いない。','判断の根拠を表す副詞的用法。must be と組み合わさることが多い。'),
ej('ks10d5','He is the last man {to break} a promise.','彼は**決して**約束を**破るような人ではない**。','the last 人 to do「最も〜しそうにない人」。'),
ej('ks10d6','The young scientist left for Antarctica in 1912, {never to come back}.','その若い科学者は1912年に南極へ旅立ち、**二度と戻ってこなかった**。','never to do は結果「そして二度と〜しなかった」。'),
ej('ks10d7','Her decision {to study} abroad surprised her family.','**留学するという**彼女の決断に、家族は驚いた。','形容詞的用法（同格）。decision の内容を説明する。無生物主語でもある。'),
ej('ks10d8','Children are often told that the purpose of studying is to get a good job. {But to see education merely as a means to earn money is to miss its real value: the chance to understand the world and to think for oneself.}','子どもたちはよく、勉強の目的はよい仕事に就くことだと言われる。**しかし、教育を単にお金を稼ぐための手段とみなすことは、その本当の価値、すなわち世界を理解し、自分の頭で考える機会を見失うことである**。','【構造】To see education ... money が S（名詞的用法）、is が V、to miss its real value が C（名詞的用法）。コロン以下は its real value の具体的な言いかえ。\n【ポイント】see A as B「AをBとみなす」。a means to earn money の to earn は形容詞的用法。the chance to understand ... and to think ... も形容詞的用法（同格）で、2つの不定詞が and で並んでいる。To do is to do「〜することは…することだ」の型。','主語と補語の不定詞',true)
]});

/* ================= §11 不定詞(2) ================= */
L.push({k:'ks11',no:'§11',title:'不定詞(2)　意味上の主語・完了・受動・否定',sub:'不定詞の「誰が・いつ・される側か」を読む',
body:`
# 11-1 意味上の主語
: 不定詞の動作をする人が文の主語と違うときは、**for 人 to do** で意味上の主語を示す。
= 11-1-1|It is impossible {for him} to finish the work by tomorrow.|**彼が**明日までにその仕事を終えるのは不可能だ。
- 11-1-2|The box was too heavy {for me} to carry.|その箱は重すぎて**私には**運べなかった。
- 11-1-3|I waited {for the rain} to stop.|**雨が**やむのを待った。
: wait for A to do「Aが〜するのを待つ」。for A が to do の意味上の主語。
- 11-1-4|There is no need {for you} to worry.|**君が**心配する必要はない。
> 人の性質を表す形容詞（kind / clever / foolish / careless）のときは **of 人**（→§4）。

# 11-2 完了不定詞（to have done）
: **述語動詞の時より前のこと**を表す。seem / appear / be said / be believed と組み合わさることが多い。
= 11-2-1|He {seems to have been} ill last week.|彼は先週病気**だったようだ**。
: = It seems that he was ill last week. seems（現在）より前のこと。
- 11-2-2|She {seemed to have forgotten} my name.|彼女は私の名前を**忘れてしまっていたようだった**。
: = It seemed that she had forgotten my name. seemed（過去）より前のこと → 過去完了。
- 11-2-3|I {meant to have called} you, but I forgot.|電話**するつもりだったのに**、忘れてしまった。
: intend / mean / hope / expect / want の過去形＋完了不定詞は「〜するつもりだったのに（実現しなかった）」。

# 11-3 受動不定詞（to be done）
: 不定詞の意味上の主語が**動作を受ける側**のとき、to be done になる。
= 11-3-1|There are many problems {to be solved}.|**解決されるべき**問題がたくさんある。
- 11-3-2|Nobody likes {to be laughed at}.|誰も**笑われる**のは好きではない。
- 11-3-3|The house is {to be sold} next month.|その家は来月**売りに出される予定だ**。（be to 構文 →§12）

# 11-4 不定詞の否定
: **not [never] は to の直前**に置く。
= 11-4-1|I tried {not to laugh}.|**笑わないように**努めた。
x I didn't try to laugh.（「笑おうとしなかった」で意味が変わる）
- 11-4-2|Be careful {not to catch} a cold.|風邪を**ひかないように**気をつけて。
- 11-4-3|He left early {so as not to miss} the train.|彼は電車に**乗り遅れないように**早く出た。
: in order not to / so as not to「〜しないように」。

# 11-5 代不定詞
: 前に出た動詞の繰り返しを避けるため、**to だけ**を残すことがある。to の後ろに何を補うかを前から探す。
= 11-5-1|You can come with us if you want {to}.|来たければ一緒に来ていいよ。
: want to = want to come with us。
- 11-5-2|I meant to email him, but I forgot {to}.|彼にメールするつもりだったが、**するのを**忘れた。
`,
drills:[
ej('ks11d1','It is natural {for parents} to worry about their children.','**親が**子どものことを心配するのは当然だ。','for 人 to do の意味上の主語。It は形式主語。'),
ej('ks11d2','The ancient city {is believed to have been} destroyed by an earthquake.','その古代都市は地震で破壊**されたと考えられている**。','be believed to have been done「〜されたと考えられている」。完了＋受動の不定詞。'),
ej('ks11d3','I {intended to have finished} the report yesterday, but I couldn\'t.','昨日報告書を**仕上げるつもりだったのに**、できなかった。','intended to have done「〜するつもりだったのに（実現しなかった）」。'),
ej('ks11d4','She whispered {so as not to} wake the baby.','彼女は赤ちゃんを**起こさないように**小声で話した。','so as not to do「〜しないように」。'),
ej('ks11d5','The tickets are too expensive {for students} to buy.','そのチケットは高すぎて**学生には**買えない。','too 〜 for 人 to do「〜すぎて人には…できない」。'),
ej('ks11d6','I didn\'t want to go to the party, but my friends told me {to}.','そのパーティーに行きたくなかったが、友達に**行けと**言われた。','代不定詞。told me to = told me to go to the party。'),
ej('ks11d7','Many of the letters she wrote during the war seem to have been lost. {Those that survive, however, allow us to see how deeply she felt the need to be understood by the people she loved.}','戦時中に彼女が書いた手紙の多くは失われてしまったようだ。**しかし、残っている手紙から、彼女が愛する人々に理解されたいという欲求をどれほど強く感じていたかがわかる**。','【構造】Those that survive が無生物主語（those＝the letters）、allow が V、us が O、to see が C。see の目的語が how deeply 〜 の間接疑問。\n【ポイント】the need to be understood は受動不定詞の形容詞的用法（同格）「理解されたいという欲求」。allow us to see を「〜から…がわかる」と訳す。','受動不定詞 to be understood',true)
]});

/* ================= §12 不定詞(3) ================= */
L.push({k:'ks12',no:'§12',title:'不定詞(3)　be to 構文・独立不定詞・重要構文',sub:'決まった形を覚えれば一瞬で読める',
body:`
# 12-1 be to 構文
: **be to do** は「予定・義務・可能・運命・意図」を表す。文脈で訳し分ける。
[be to do の意味]
| 予定 | 〜することになっている（公式の予定）
| 義務・命令 | 〜すべきだ、〜しなさい
| 可能 | 〜できる（否定文・受動不定詞で使うことが多い）
| 運命 | 〜する運命だった（過去形 was to do）
| 意図 | 〜するつもりなら（if 節の中で）
= 12-1-1|The prime minister {is to visit} India next week.|首相は来週インドを**訪問する予定だ**。（予定）
- 12-1-2|You {are to finish} this work by five.|5時までにこの仕事を**終えなさい**。（義務）
- 12-1-3|Not a sound {was to be heard}.|物音ひとつ**聞こえなかった**。（可能）
- 12-1-4|He said goodbye to his family. He {was never to see} them again.|彼は家族に別れを告げた。彼は二度と家族に**会うことはなかった**。（運命）
- 12-1-5|If you {are to succeed}, you must work harder.|成功**したいなら**、もっと努力しなければならない。（意図）

# 12-2 独立不定詞
: 文全体を修飾する決まり文句。文頭や挿入で使われる。
[主な独立不定詞]
| to tell the truth | 実を言うと
| to be frank (with you) | 率直に言うと
| to be sure | 確かに（後に but が来ることが多い）
| so to speak | いわば
| to begin [start] with | まず第一に
| needless to say | 言うまでもなく
| strange to say | 奇妙なことに
| to make matters worse | さらに悪いことに
| to say nothing of 〜 | 〜は言うまでもなく
| not to mention 〜 | 〜は言うまでもなく
- 12-2-1|{To make matters worse}, it began to rain.|**さらに悪いことに**、雨が降り始めた。
- 12-2-2|He speaks French and German, {to say nothing of} English.|彼は英語は**言うまでもなく**、フランス語とドイツ語も話す。
- 12-2-3|{To be sure}, the plan is risky, but it is worth trying.|**確かに**その計画は危険だが、試す価値はある。

# 12-3 不定詞を使う重要構文
[不定詞を含む頻出構文]
| too 〜 to do | 〜すぎて…できない
| 〜 enough to do | …するほど〜だ
| so 〜 as to do | …するほど〜だ
| in order to do / so as to do | 〜するために
| be about to do | まさに〜しようとしている
| be sure [certain] to do | きっと〜する
| be likely to do | 〜しそうだ
| happen to do | たまたま〜する
| come [get] to do | 〜するようになる
| have only to do | 〜しさえすればよい
| cannot afford to do | 〜する余裕がない
| have yet to do | まだ〜していない
- 12-3-1|He {was kind enough to} show me the way.|彼は**親切にも**道を案内してくれた。
- 12-3-2|We {were about to} leave when the phone rang.|**ちょうど**出かけ**ようとしていた**ところに電話が鳴った。
- 12-3-3|I {happened to} meet my old teacher at the station.|駅で**たまたま**昔の先生に会った。
- 12-3-4|You {have only to} press this button.|このボタンを押し**さえすればよい**。
- 12-3-5|The cause of the disease {has yet to} be discovered.|その病気の原因は**まだ**発見されて**いない**。
: have yet to do は否定語がないのに「まだ〜していない」という否定の意味になる。読み落としやすいので要注意。
- 12-3-6|Over time, I {came to} understand my father's feelings.|時がたつにつれて、父の気持ちが理解**できるようになった**。
`,
drills:[
ej('ks12d1','The meeting {is to be held} in the main hall tomorrow.','会議は明日、大ホールで**開かれる予定だ**。','be to 構文（予定）。受動不定詞。'),
ej('ks12d2','Not a single star {was to be seen} in the sky.','空には星ひとつ**見えなかった**。','be to 構文（可能）。否定＋受動不定詞で「〜できなかった」。'),
ej('ks12d3','If we {are to protect} the environment, we must change our way of life.','環境を**守りたいなら**、生活様式を変えなければならない。','if 節の be to do は意図「〜するつもりなら」。'),
ej('ks12d4','{To be frank with you}, I don\'t like his new novel.','**率直に言うと**、彼の新作小説は好きではない。','独立不定詞。'),
ej('ks12d5','A truly effective treatment for the disease {has yet to} be found.','その病気の本当に効果的な治療法は、**まだ**見つかって**いない**。','have yet to do「まだ〜していない」。否定語がないのに否定の意味。'),
ej('ks12d6','The young musician left for Vienna full of hope. {He was never to return to his homeland, but his songs came to be loved by people all over the country.}','その若い音楽家は希望にあふれてウィーンへ旅立った。**彼が故郷に戻ることは二度となかったが、彼の歌は国中の人々に愛されるようになった**。','【構造】was never to return は be to 構文（運命）。came to be loved は come to do「〜するようになる」と受動不定詞の組み合わせ。\n【ポイント】be to の運命用法は過去形で「〜する運命だった」「結局〜しなかった」。','was never to の意味',true)
]});

/* ================= §13 動名詞(1) ================= */
L.push({k:'ks13',no:'§13',title:'動名詞(1)　働きと意味上の主語',sub:'-ing が「〜すること」か「〜している」かを見分ける',
body:`
# 13-1 動名詞の働き
: 動名詞（doing）は名詞の働きをし、**主語・目的語・補語・前置詞の目的語**になる。
= 13-1-1|{Reading} in dim light is bad for your eyes.|暗い明かりで**本を読むことは**目に悪い。（主語）
- 13-1-2|He finally gave up {smoking}.|彼はついに**たばこを**やめた。（目的語）
- 13-1-3|My hobby is {collecting} old maps.|私の趣味は古い地図を**集めることだ**。（補語）
- 13-1-4|She left without {saying} goodbye.|彼女はさようならも**言わずに**去った。（前置詞の目的語）
: 前置詞の後ろに動詞がくるときは必ず動名詞。to 不定詞は置けない。
[動名詞を目的語にとる動詞]
| mind / enjoy / give up / avoid | 気にする／楽しむ／やめる／避ける
| finish / escape / put off / postpone | 終える／逃れる／延期する
| practice / stop / suggest / consider | 練習する／やめる／提案する／検討する
| deny / admit / imagine / risk | 否定する／認める／想像する／危険を冒す
- 13-1-5|Would you {mind opening} the window?|窓を**開けていただけますか**。
: mind は「〜するのを気にする」。Would you mind 〜? に「いいですよ」と答えるときは No, not at all. / Of course not.

# 13-2 動名詞の意味上の主語
: 動名詞の動作をする人が文の主語と違うときは、**所有格（または目的格）**を動名詞の前に置く。
= 13-2-1|Do you mind {my sitting} here?|**私が**ここに座ってもかまいませんか。
- 13-2-2|I'm sure of {his passing} the exam.|**彼が**試験に合格すると確信している。
- 13-2-3|She was proud of {her son being} chosen as captain.|彼女は**息子が**キャプテンに選ばれたことを誇りに思った。
: 名詞の場合はそのまま（目的格の形）で置くことが多い。
> 読解では、動名詞の前の所有格・名詞を「〜が」と主語のように訳すのがコツ。

# 13-3 動名詞と現在分詞の区別
: 同じ -ing でも、**名詞の働き（〜すること）なら動名詞、形容詞の働き（〜している）なら現在分詞**。
= 13-3-1|a {sleeping} bag|**寝るための**袋（寝袋）＝動名詞（用途）
= 13-3-2|a {sleeping} baby|**眠っている**赤ちゃん＝現在分詞（状態）
- 13-3-3|a {smoking} room / a {smoking} chimney|**喫煙**室（動名詞）／**煙を出している**煙突（現在分詞）
- 13-3-4|His job is {teaching} English. / He is {teaching} English now.|彼の仕事は英語を**教えることだ**（動名詞・補語）／彼は今英語を**教えている**（進行形）
> 判別の基準：「〜するための〜」と訳せれば動名詞、「〜している〜」と訳せれば現在分詞。be + -ing は、主語＝〜すること なら動名詞、主語が〜している なら進行形。
`,
drills:[
ej('ks13d1','{Learning} from mistakes is more important than {avoiding} them.','失敗から**学ぶことは**、失敗を**避けることよりも**大切だ。','動名詞が主語と than の後ろに使われている。'),
ej('ks13d2','I can\'t imagine {him doing} such a thing.','**彼が**そんなことを**する**なんて想像できない。','him は doing の意味上の主語。'),
ej('ks13d3','She insisted on {paying} for the meal herself.','彼女は自分で食事代を**払うと言い張った**。','insist on doing「〜すると言い張る」。前置詞の後ろは動名詞。'),
ej('ks13d4','Do you remember {your father ever mentioning} this place?','**お父さんが**この場所のことを**話したことを**覚えていますか。','your father が動名詞 mentioning の意味上の主語。remember doing「〜したことを覚えている」。'),
ej('ks13d5','There is a {waiting} room next to the {waiting} passengers.','**待っている**乗客の隣に**待合**室がある。','a waiting room は動名詞（待つための部屋）、waiting passengers は現在分詞（待っている乗客）。'),
ej('ks13d6','Being a good listener is not the same as being silent. {It means paying close attention to what the other person is saying and trying to understand their feelings, not just their words.}','聞き上手であることは、黙っていることと同じではない。**それは、相手が言っていることによく注意を払い、言葉だけでなく相手の気持ちも理解しようとすることを意味する**。','【構造】It（＝being a good listener）が S、means が V、paying ... と trying ... の2つの動名詞が and で並んで O。\n【ポイント】mean doing「〜することを意味する」（mean to do は「〜するつもりだ」）。what the other person is saying は関係代名詞 what の節。not just A「Aだけでなく」。','means の目的語は2つ',true)
]});

/* ================= §14 動名詞(2) ================= */
L.push({k:'ks14',no:'§14',title:'動名詞(2)　完了・受動・慣用表現',sub:'to の後ろに -ing がくる表現と、動名詞の決まり文句',
body:`
# 14-1 完了動名詞・受動動名詞
: **having done** は述語動詞より前のこと、**being done** は「〜されること」を表す。
= 14-1-1|He denied {having taken} the money.|彼はそのお金を**取ったことを**否定した。
: 否定したのは過去、取ったのはそれより前。
- 14-1-2|I'm ashamed of {having been} so rude to her.|彼女にあんなに失礼な**態度をとったことを**恥ずかしく思う。
- 14-1-3|She hates {being treated} like a child.|彼女は子ども扱い**されるのを**嫌う。
- 14-1-4|The house needs {painting}.|その家はペンキを**塗る必要がある**。
: need [want] doing は「〜される必要がある」という受動の意味（= need to be painted）。

# 14-2 前置詞 to＋動名詞
: 次の表現の to は**前置詞**なので、後ろは**動名詞**。不定詞と間違えやすい。
[to doing の重要表現]
| look forward to doing | 〜するのを楽しみに待つ
| be used [accustomed] to doing | 〜することに慣れている
| object to doing | 〜することに反対する
| be opposed to doing | 〜することに反対だ
| be devoted to doing | 〜に専念している
| when it comes to doing | 〜のこととなると
| What do you say to doing? | 〜するのはどうですか
| with a view to doing | 〜する目的で
| contribute to doing | 〜に貢献する
- 14-2-1|I'm {looking forward to seeing} you again.|またお会い**できるのを楽しみにしています**。
x I'm looking forward to see you again.
- 14-2-2|She {is used to living} alone.|彼女は一人暮らしに**慣れている**。
: used to do（以前は〜したものだ）と be used to doing（〜に慣れている）は別物。
- 14-2-3|{When it comes to cooking}, nobody can beat my father.|**料理のこととなると**、父にかなう人はいない。

# 14-3 動名詞の慣用表現
[動名詞を使う重要構文]
| There is no doing | 〜することはできない
| It is no use [good] doing | 〜しても無駄だ
| cannot help doing | 〜せずにはいられない
| feel like doing | 〜したい気がする
| be worth doing | 〜する価値がある
| on doing | 〜するとすぐに
| in doing | 〜するときに、〜する点で
| go without saying | 言うまでもない
| make a point of doing | 必ず〜することにしている
| be on the point of doing | まさに〜しようとしている
| be busy (in) doing | 〜するのに忙しい
| have difficulty (in) doing | 〜するのに苦労する
| spend 時間 (in) doing | 〜して時間を過ごす
| prevent A from doing | Aが〜するのを妨げる
- 14-3-1|{There is no telling} what will happen next.|次に何が起こるかは**わからない**。
- 14-3-2|I {couldn't help laughing} at his joke.|彼の冗談に**笑わずにはいられなかった**。
- 14-3-3|This museum {is worth visiting} at least once.|この美術館は少なくとも一度は**訪れる価値がある**。
x This museum is worth visiting it.（worth doing の目的語は主語と同じなので it は不要）
- 14-3-4|{On hearing} the news, she burst into tears.|その知らせを**聞くとすぐに**、彼女はわっと泣き出した。
- 14-3-5|{In choosing} a career, you should consider what you enjoy.|職業を**選ぶときには**、自分が何を楽しめるかを考えるべきだ。
- 14-3-6|We {had difficulty finding} a parking space.|駐車場所を**見つけるのに苦労した**。
`,
drills:[
ej('ks14d1','He was proud of {having been} chosen as the team captain.','彼はチームのキャプテンに**選ばれたことを**誇りに思っていた。','完了＋受動の動名詞 having been done。誇りに思ったより前のこと。'),
ej('ks14d2','I\'m not {used to speaking} in front of so many people.','こんなに大勢の人の前で**話すことには慣れていない**。','be used to doing「〜することに慣れている」。to は前置詞。'),
ej('ks14d3','{There is no knowing} how long the war will last.','戦争がいつまで続くかは**わからない**。','There is no doing「〜することはできない」。'),
ej('ks14d4','{On arriving} at the hotel, he called his wife.','ホテルに**着くとすぐに**、彼は妻に電話した。','on doing「〜するとすぐに」。'),
ej('ks14d5','My car {needs repairing} before the long trip.','長旅の前に、車を**修理する必要がある**。','need doing は受動の意味「〜される必要がある」。'),
ej('ks14d6','{When it comes to} learning languages, there are no shortcuts.','語学**のこととなると**、近道はない。','when it comes to doing「〜のこととなると」。'),
ej('ks14d7','The old man {makes a point of} {taking} a walk along the river every morning.','その老人は毎朝**必ず**川沿いを散歩**することにしている**。','make a point of doing「必ず〜することにしている」。'),
ej('ks14d8','Some people think that keeping a diary is a waste of time. {I cannot help feeling, however, that writing down our thoughts every day is worth doing, if only because it forces us to look at our lives more carefully.}','日記をつけるのは時間の無駄だと考える人もいる。**しかし私は、毎日自分の考えを書き留めることは、それによって自分の生活をより注意深く見つめざるをえなくなるという理由だけでも、する価値があると思わずにはいられない**。','【構造】I cannot help feeling が主節、that 節が feeling の目的語。that 節の中では writing down our thoughts every day（動名詞）が S、is worth doing が V＋C。\n【ポイント】cannot help doing「〜せずにはいられない」。be worth doing「〜する価値がある」。if only because 〜「〜という理由だけでも」。force O to do は無生物主語「〜によってOは…せざるをえない」（→§8）。','cannot help の後ろと that 節の主語',true)
]});
})();
