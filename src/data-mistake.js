// ミス対策：紛らわしい単語の区別・紛らわしい単語ドリル・よくあるミスの正誤判定（問題はこのアプリ用に作成）
(function(){
// 区別カード：語|使い分け|例
const PAIRS=`affect / effect|affect：～に影響を与える(動)　effect：影響・効果(名)|Smoking affects your health. / Smoking has a bad effect on your health.
lie / lay|lie：横たわる(自) lie-lay-lain　lay：～を横たえる・置く(他) lay-laid-laid|He lay on the bed. / She laid the book on the desk.
rise / raise|rise：上がる(自) rise-rose-risen　raise：～を上げる(他) raise-raised-raised|Prices rose. / Raise your hand.
borrow / lend / rent|borrow：(無料で)借りる　lend：貸す　rent：(有料で)賃借りする・賃貸しする|Can I borrow your pen? / Lend me your pen. / We rented a car.
rob / steal|rob 人・場所 of 物：～から奪う　steal 物：物を盗む|He robbed me of my bag. / He stole my bag.
say / tell / speak / talk|say：(言葉を)言う　tell 人 事：人に伝える　speak：(言語を)話す・演説する　talk：(相手と)話し合う|She said "Hi." / Tell me the truth. / He speaks English. / Let's talk about it.
look / see / watch|look at：意識して見る　see：見える・会う　watch：動くものをじっと見る|Look at the board. / I saw a bird. / We watched the game.
hear / listen|hear：聞こえる　listen to：意識して聞く|I heard a noise. / Listen to me.
especially / specially|especially：特に(とりわけ)　specially：わざわざ・特別に(目的)|I like fruit, especially apples. / This cake was specially made for you.
economic / economical|economic：経済の　economical：節約になる・燃費のよい|economic growth / an economical car
historic / historical|historic：歴史上重要な　historical：歴史(上)の|a historic event / historical research
considerate / considerable|considerate：思いやりのある　considerable：かなりの|a considerate person / a considerable amount
sensible / sensitive|sensible：分別のある　sensitive：敏感な|a sensible decision / sensitive skin
successful / successive|successful：成功した　successive：連続する|a successful businessman / three successive wins
imaginary / imaginative / imaginable|imaginary：想像上の　imaginative：想像力豊かな　imaginable：想像できる|an imaginary animal / an imaginative child / every imaginable way
respectful / respectable / respective|respectful：敬意を払う　respectable：立派な　respective：それぞれの|be respectful to elders / a respectable family / their respective rooms
industrial / industrious|industrial：産業の　industrious：勤勉な|industrial waste / an industrious student
literal / literary / literate|literal：文字どおりの　literary：文学の　literate：読み書きができる|a literal translation / literary works
alive / living / live|alive：生きている(名詞の前に置けない)　living：生きている(名詞の前も可)　live：生の・生きている(名詞の前)|The fish is alive. / living things / live music
asleep / sleeping|asleep：眠って(名詞の前に置けない)　sleeping：眠っている(名詞の前)|The baby is asleep. / a sleeping baby
alike / like|alike：似ている(名詞の前に置けない)・同様に　like：～のような(前置詞)|The twins look alike. / He looks like his father.
almost / most|almost：ほとんど(副詞)　most：大部分の(形容詞)|almost all students / most students（almost students は誤り）
few / little|few：数が少ない(可算)　little：量が少ない(不可算)|few friends / little money
a few / few|a few：少しある(肯定的)　few：ほとんどない(否定的)|I have a few friends. / I have few friends.
fewer / less|fewer：可算名詞の比較　less：不可算名詞の比較|fewer cars / less traffic
between / among|between：(個別の)2者の間　among：3者以上・集団の中|between you and me / among the students
by / until|by：～までに(期限)　until：～までずっと(継続)|Finish it by Friday. / Wait until Friday.
for / during|for：期間の長さ　during：特定の期間の間に|for three days / during the vacation
since / for|since：起点(～以来)　for：期間の長さ|since 2010 / for ten years
in / after|in：今から～後に　after：(過去の基準から)～後に|I'll be back in an hour. / He came back after an hour.
ago / before|ago：今から～前　before：(過去のある時点から)それより前に|two years ago / He had left two years before.
yet / still / already|yet：(否定)まだ・(疑問)もう　still：まだ(継続)　already：すでに|I haven't finished yet. / I'm still hungry. / I've already eaten.
hard / hardly|hard：熱心に・激しく　hardly：ほとんど～ない|He works hard. / He hardly works.
late / lately|late：遅く　lately：最近|He came late. / I haven't seen him lately.
near / nearly|near：近くに　nearly：ほとんど|He lives near. / It's nearly ten.
high / highly|high：高く(位置)　highly：非常に・(評価が)高く|fly high / highly recommended
most / mostly|most：最も・大部分の　mostly：たいてい・大部分は|the most beautiful / The guests were mostly students.
wear / put on|wear：身につけている(状態)　put on：身につける(動作)|She is wearing a coat. / Put on your coat.
win / beat|win：(試合・賞)に勝つ　beat：(相手)を負かす|win the game / beat the team
fit / suit / match|fit：サイズが合う　suit：(人に)似合う・都合がよい　match：(物と物が)調和する|The shoes fit me. / Red suits you. / The tie matches the shirt.
customer / guest / client / passenger|customer：店の客　guest：招待客・宿泊客　client：(専門職への)依頼人　passenger：乗客|a regular customer / hotel guests / a lawyer's client
fee / fare / charge / price / cost|fee：(専門職への)謝礼・入場料　fare：運賃　charge：(サービスの)料金　price：値段　cost：費用|an entrance fee / a bus fare / a service charge
salary / wage|salary：(月給などの)給料　wage：(時給・日給の)賃金|a monthly salary / an hourly wage
job / work|job：(可算)仕事・職　work：(不可算)仕事・労働|I have a job. / I have a lot of work.（a work は誤り）
travel / trip / journey / tour|travel：旅行(一般)　trip：(短い)旅行　journey：(長い)旅　tour：周遊・見学|a business trip / a long journey / a city tour
habit / custom|habit：個人の習慣・癖　custom：社会の慣習|a bad habit / a Japanese custom
shade / shadow|shade：日陰　shadow：(輪郭のある)影|sit in the shade / my shadow on the wall
lose / loose|lose：～を失う(動) /luːz/　loose：ゆるい(形) /luːs/|lose a key / loose shoes
quite / quiet|quite：かなり(副)　quiet：静かな(形)|quite good / a quiet room
desert / dessert|desert：砂漠 /ˈdezərt/　dessert：デザート /dɪˈzɜːrt/|the Sahara Desert / ice cream for dessert
advise / advice|advise：助言する(動)　advice：助言(名・不可算)|He advised me. / He gave me some advice.
lead / led|lead：導く(現在形)　led：lead の過去形・過去分詞|This road leads to the station. / He led the team.
find / found|find-found-found：見つける　found-founded-founded：設立する|I found a key. / He founded a company.
fall / fell|fall-fell-fallen：落ちる(自)　fell-felled-felled：(木を)切り倒す(他)|The leaves fell. / They felled the tree.
wind / wound|wind-wound-wound /waʊnd/：巻く　wound /wuːnd/：傷つける・傷|wind a clock / He was wounded.
expect / wait|expect：予期する・期待する　wait for：待つ|I expect him to come. / I'm waiting for him.
remember / remind|remember：覚えている・思い出す　remind 人 of 事：人に思い出させる|I remember him. / He reminds me of my father.
doubt / suspect|doubt that：～ではないと思う　suspect that：～ではないかと思う|I doubt that he did it.（やっていないと思う）/ I suspect that he did it.（やったと思う）
fun / funny|fun：楽しい(こと)　funny：おかしい・変な|The party was fun. / a funny story
hope / wish|hope：(実現可能なこと)を望む　wish：(実現困難なこと)を願う(仮定法)|I hope it will be sunny. / I wish I were rich.
let / make / have / get|let O 原形：許可　make O 原形：強制　have O 原形：依頼　get O to do：説得して～させる|Let me go. / He made me cry. / I had him fix it. / I got him to fix it.
used to / be used to|used to do：以前は～した　be used to doing：～に慣れている|I used to smoke. / I'm used to getting up early.
stop doing / stop to do|stop doing：～するのをやめる　stop to do：～するために立ち止まる|He stopped smoking. / He stopped to rest.
forget doing / forget to do|forget doing：～したことを忘れる　forget to do：～し忘れる|I'll never forget meeting her. / Don't forget to lock the door.
try doing / try to do|try doing：試しに～してみる　try to do：～しようと努める|Try adding salt. / I tried to open it, but couldn't.
excited / exciting|excited：(人が)興奮した　exciting：(物事が)わくわくさせる|I was excited. / The game was exciting.
interested / interesting|interested：(人が)興味を持った　interesting：(物事が)面白い|I'm interested in art. / an interesting book
convenient / possible|どちらも人を主語にしない（It is ～ for 人 to do の形）|Is Monday convenient for you? / It is possible for him to come.
grow / grow up / raise|grow：育つ・～を栽培する　grow up：(人が)成長する　raise / bring up：(子ども)を育てる|grow rice / I grew up in Tokyo. / raise children
arrive / reach / get|arrive at / in：到着する(自)　reach：～に到着する(他)　get to：～に着く|arrive at the station / reach the station / get to the station
marry / get married|marry 人：～と結婚する(他動詞)　get married to：結婚する|She married him. / She got married to him.（marry with は誤り）
discuss / talk about|discuss：～について話し合う(他動詞で about 不要)　talk about：～について話す|discuss the plan / talk about the plan
attend / attend to|attend：～に出席する(他動詞)　attend to：～に注意を払う・世話をする|attend the meeting / attend to the patient
mention / refer to|mention：～に言及する(他動詞で about 不要)　refer to：～に言及する|He mentioned the problem. / He referred to the problem.
answer / reply to|answer：～に答える(他動詞)　reply to：～に返事をする|answer the letter / reply to the letter
explain / tell|explain 事 to 人：人に事を説明する　tell 人 事：人に事を伝える|Explain the rule to me.（Explain me the rule は誤り）
suggest / recommend|suggest：doing / that S (should) 原形（suggest 人 to do は誤り）　recommend：doing / that S 原形 / 人 to do|He suggested going out. / I recommend you to read it.
agree with / agree to|agree with 人・意見：同意する　agree to 提案：応じる|I agree with you. / I agree to your plan.
another / the other / others / the others|another：別のもう1つ　the other：(2つのうち)残りの1つ　others：他の人々　the others：残り全部|one ... the other / some ... others
it / one|it：特定の同じもの　one：同じ種類の不特定のもの|I lost my pen, but I found it. / I lost my pen, so I'll buy one.
that / those|that：単数名詞の代用　those：複数名詞の代用|The climate of Tokyo is milder than that of Sapporo.
each / every|each：それぞれ(代名詞としても使える)　every：すべての(名詞の前のみ)|each of the students（every of は誤り）
such / so|such (a) + 形容詞 + 名詞　so + 形容詞 (+ a + 名詞)|such a good book / so good a book
too / either|too：肯定文の「～も」　either：否定文の「～も」|I like it, too. / I don't like it, either.
during / while|during + 名詞　while + 節(S V)|during the meeting / while I was sleeping
because / because of|because + 節　because of + 名詞|because it rained / because of the rain
despite / although|despite + 名詞　although + 節|despite the rain / although it rained
house / home|house：建物としての家　home：家庭・(副詞で)家へ|go home（go to home は誤り）
abroad / overseas / upstairs|どれも副詞なので to は不要|go abroad / go upstairs（go to abroad は誤り）
information / advice / furniture / baggage|いずれも不可算名詞：a や複数形の -s をつけない|some information / a piece of advice
people / person|people：人々(複数扱い)　person：人(単数)|Many people are ... / a person
police / cattle|常に複数扱いの名詞|The police are looking for him.
damage / injury / wound|damage：物の損害(不可算)　injury：事故などのけが　wound：武器による傷|storm damage / a sports injury / a knife wound
cook / cooker|cook：料理人　cooker：調理器具|He is a good cook.（a good cooker は「よい調理器具」）
principal / principle|principal：主な・校長　principle：原理・原則|the principal reason / a basic principle
personal / personnel|personal：個人の　personnel：職員・人事|personal information / the personnel department
accept / except / expect|accept：受け入れる(動)　except：～を除いて(前)　expect：予期する(動)|accept the offer / everyone except me / I expect rain.
adapt / adopt|adapt：適応させる・適応する　adopt：採用する・養子にする|adapt to a new life / adopt a plan
compliment / complement|compliment：ほめ言葉　complement：補完するもの|pay a compliment / a perfect complement
emigrate / immigrate|emigrate：(他国へ)移住する　immigrate：(他国から)移住してくる|emigrate from Japan / immigrate to Canada
ensure / insure|ensure：確実にする　insure：保険をかける|ensure safety / insure a car
precede / proceed|precede：～に先行する　proceed：進む|precede the war / proceed to the next step
stationary / stationery|stationary：静止した　stationery：文房具|a stationary car / buy stationery
vacation / vocation|vacation：休暇　vocation：天職・職業|a summer vacation / find one's vocation
moral / morale|moral：道徳の・教訓　morale：士気|moral values / high morale
loyal / royal|loyal：忠実な　royal：王の|a loyal friend / the royal family
flesh / fresh|flesh：肉　fresh：新鮮な|flesh and blood / fresh fruit
pray / play / prey|pray：祈る　play：遊ぶ　prey：獲物|pray for peace / a lion's prey
collect / correct|collect：集める　correct：正しい・訂正する（l と r に注意）|collect stamps / correct answers
right / light / write|right：正しい・右　light：光・軽い　write：書く|turn right / a light bag / write a letter
rock / lock|rock：岩　lock：錠・鍵をかける|a big rock / lock the door
grass / glass|grass：草　glass：ガラス・コップ|cut the grass / a glass of water
thought / though / through / thorough|thought：考え　though：～だけれども　through：～を通って　thorough：徹底的な|a good thought / though it rained / through the window / a thorough check
breath / breathe|breath：息(名) /breθ/　breathe：呼吸する(動) /briːð/|take a deep breath / breathe deeply
cloth / clothes / clothing|cloth：布　clothes：衣服(複数扱い)　clothing：衣類(不可算)|a piece of cloth / warm clothes
cancel / postpone|cancel / call off：中止する　postpone / put off：延期する|The game was canceled. / The game was postponed.`;
// 紛らわしい単語ドリル：分野|問題|正解|誤答1|誤答2|誤答3|解説
const DRILL=`形が似た語|The heavy rain ___ the crops badly.|affected|effected|effect|affection|動詞「影響を与える」→ affect。
形が似た語|The new law will have a great ___ on business.|effect|affect|effort|affection|名詞「影響」→ effect。
形が似た語|Prices have ___ sharply this year.|risen|raised|rose|arisen|自動詞 rise の過去分詞 risen。
形が似た語|The government ___ taxes last year.|raised|rose|risen|arose|他動詞「上げる」→ raise の過去形 raised。
形が似た語|He ___ on the sofa and fell asleep.|lay|laid|lied|lain|自動詞 lie「横たわる」の過去形 lay。
形が似た語|She ___ the baby on the bed gently.|laid|lay|lied|lain|他動詞 lay「横たえる」の過去形 laid。
形が似た語|He ___ to me about his age.|lied|lay|laid|lain|lie「うそをつく」の過去形 lied。
形が似た語|Don't ___ your keys again.|lose|loose|lost|loss|動詞「失う」→ lose（loose は形容詞「ゆるい」）。
形が似た語|These pants are too ___.|loose|lose|lost|loss|形容詞「ゆるい」→ loose。
形が似た語|The library is ___ quiet.|quite|quiet|quit|quietly|副詞「かなり」→ quite。
形が似た語|He ___ a company in 2010.|founded|found|finded|fund|found「設立する」の過去形 founded。
形が似た語|I ___ my lost wallet under the bed.|found|founded|finded|find out|find の過去形 found。
形が似た語|Please take a deep ___.|breath|breathe|breathing in|breathed|名詞「息」→ breath。
形が似た語|It's hard to ___ in this smoky room.|breathe|breath|breathes|breathing of|動詞「呼吸する」→ breathe。
形が似た語|We had ice cream for ___.|dessert|desert|deserts|desserted|デザート → dessert（desert は砂漠）。
形が似た語|I need some ___ about my career.|advice|advise|advices|advisor|名詞「助言」→ advice（不可算）。
形が似た語|The doctor ___ me to rest.|advised|adviced|advice|advise to|動詞 advise の過去形 advised。
形が似た語|She ___ the team to victory last year.|led|lead|leaded|leads|lead の過去形 led。
形が似た語|Everyone came ___ Tom.|except|accept|expect|excepted|前置詞「～を除いて」→ except。
形が似た語|I can't ___ your offer.|accept|except|expect|access|動詞「受け入れる」→ accept。
形が似た語|The company decided to ___ the new system.|adopt|adapt|adept|adapt to|「採用する」→ adopt。
形が似た語|Animals must ___ to their environment.|adapt|adopt|adept|adoptive|「適応する」→ adapt。
形が似た語|This is the ___ reason for his failure.|principal|principle|principals|principally|「主な」→ principal（principle は原理）。
形が似た語|She is a woman of strong ___.|principles|principals|principal|principled|「主義・原則」→ principles。
形が似た語|Please ___ that the door is locked.|ensure|insure|assure to|ensured|「確実にする」→ ensure。
形が似た語|I bought some ___: pens and notebooks.|stationery|stationary|station|stationeries|文房具 → stationery（不可算）。
意味が似た語|Could you ___ me your dictionary?|lend|borrow|rent|owe|人に貸す → lend。
意味が似た語|May I ___ your umbrella?|borrow|lend|rent|use to|借りる → borrow。
意味が似た語|We ___ a car for the trip.|rented|borrowed|lent|owed|有料で借りる → rent。
意味が似た語|Two men ___ the bank last night.|robbed|stole|took away|deprived|rob + 人・場所。
意味が似た語|Someone ___ my wallet.|stole|robbed|deprived|stripped|steal + 物。
意味が似た語|Please ___ me what happened.|tell|say|speak|talk|tell 人 事。
意味が似た語|What did she ___ to you?|say|tell|speak|talk|say + to 人。
意味が似た語|Can you ___ Chinese?|speak|talk|say|tell|言語を話す → speak。
意味が似た語|Let's ___ about the plan over lunch.|talk|say|tell|speak with|相手と話す → talk about。
意味が似た語|We ___ a baseball game on TV last night.|watched|saw at|looked|looked at|テレビ・動くものを見る → watch。
意味が似た語|I ___ a strange noise outside.|heard|listened|listened to|hear|聞こえる → hear。
意味が似た語|This dress doesn't ___ me. It's too small.|fit|suit|match|go|サイズが合う → fit。
意味が似た語|That color really ___ you.|suits|fits|matches|wears|似合う → suit。
意味が似た語|Your tie ___ your shirt well.|matches|suits|fits|wears|物と物が合う → match。
意味が似た語|She is ___ a red dress today.|wearing|putting on|dressing|carrying|着ている（状態）→ wear。
意味が似た語|Our team ___ the game.|won|beat|defeated by|lost to|試合に勝つ → win。
意味が似た語|Our team ___ their team 3-0.|beat|won|won against to|lost|相手を負かす → beat。
意味が似た語|How much is the bus ___?|fare|fee|charge|salary|運賃 → fare。
意味が似た語|The lawyer's ___ was very high.|fee|fare|toll|wage|専門職への報酬 → fee。
意味が似た語|The shop has many regular ___.|customers|guests|clients|passengers|店の客 → customer。
意味が似た語|She has a bad ___ of biting her nails.|habit|custom|manner|tradition|個人の癖 → habit。
意味が似た語|Bowing is a Japanese ___.|custom|habit|fashion|routine|社会の慣習 → custom。
意味が似た語|Let's sit in the ___ of that tree.|shade|shadow|shelter|shape|日陰 → shade。
意味が似た語|I ___ him to arrive soon.|expect|wait|wait for|await for|予期する → expect。
意味が似た語|This song ___ me of my school days.|reminds|remembers|recalls|memorizes|remind 人 of 事。
意味が似た語|I ___ that he stole the money. I think he did it.|suspect|doubt|wonder|deny|「～ではないかと思う」→ suspect。
意味が似た語|I ___ that he will come. I don't think he will.|doubt|suspect|expect|believe|「～ではないと思う」→ doubt。
意味が似た語|The movie was ___. I laughed a lot.|funny|fun|funnily|amusing to|おかしい → funny。
意味が似た語|I ___ I could fly like a bird.|wish|hope|want|expect|実現不可能な願望 → wish。
意味が似た語|I ___ you will get well soon.|hope|wish|expect to|want that|実現可能な願望 → hope。
意味が似た語|My parents ___ me in a small town.|raised|grew|grew up|rose|子どもを育てる → raise。
意味が似た語|I ___ in a small town.|grew up|raised|brought up|grew|成長する → grow up。
意味が似た語|We will ___ Tokyo at noon.|reach|arrive|get|arrive to|reach は他動詞で前置詞不要。
形容詞・副詞|I like sports, ___ soccer.|especially|specially|special|especial|「特に」→ especially。
形容詞・副詞|This cake was ___ made for your birthday.|specially|especially|special|specialty|「わざわざ（特別に）」→ specially。
形容詞・副詞|I haven't heard from him ___.|lately|late|later|latest|「最近」→ lately。
形容詞・副詞|It's ___ midnight. Let's go to bed.|nearly|near|nearby|nearer|「ほとんど」→ nearly。
形容詞・副詞|This book is ___ recommended.|highly|high|highness|higher|「非常に（評価が高く）」→ highly。
形容詞・副詞|The audience were ___ students.|mostly|most|almost|the most|「大部分は」→ mostly。
形容詞・副詞|___ all the students passed the test.|Almost|Most|Mostly|The most|almost all（almost は副詞で all を修飾）。
形容詞・副詞|This is a ___ amount of money.|considerable|considerate|consideration|considering|「かなりの」→ considerable。
形容詞・副詞|It's ___ of you to help me.|considerate|considerable|consideration|considered|「思いやりがある」→ considerate。
形容詞・副詞|Japan's ___ growth slowed in the 1990s.|economic|economical|economy's|economist|「経済の」→ economic。
形容詞・副詞|He wrote a ___ novel set in the 1800s.|historical|historic|history|historian|「歴史を扱った」→ historical。
形容詞・副詞|The fish is still ___.|alive|live|living of|life|名詞の前でない（叙述）→ alive。
形容詞・副詞|The baby is fast ___.|asleep|sleeping|sleepy|slept|fast asleep「ぐっすり眠って」。
形容詞・副詞|The two sisters look very ___.|alike|like|likely|same|叙述「似ている」→ alike。
形容詞・副詞|He has ___ friends, so he often feels lonely.|few|a few|little|a little|可算・否定的 → few。
形容詞・副詞|I have ___ money, so I can buy you lunch.|a little|little|few|a few|不可算・肯定的 → a little。
名詞|I have a lot of ___ to do today.|work|works|job|jobs of|仕事（不可算）→ work。
名詞|She got a new ___ at a bank.|job|work|works|labor|職（可算）→ job。
名詞|How was your ___ to Kyoto?|trip|travel|travels|journeys of|短い旅行 → trip。
名詞|She earns a monthly ___ of 300,000 yen.|salary|wage|fare|fee|月給 → salary。
名詞|We need some new ___ for the living room.|furniture|furnitures|a furniture|furniture's|furniture は不可算。
前置詞・接続詞|The secret is ___ you and me.|between|among|within|amid|2者の間 → between。
前置詞・接続詞|The house is hidden ___ the trees.|among|between|beside|across|多数の中 → among。
前置詞・接続詞|Please return the book ___ next Monday.|by|until|till|for|期限 → by。
前置詞・接続詞|I'll wait here ___ six o'clock.|until|by|for|since|継続 → until。
前置詞・接続詞|I fell asleep ___ the movie.|during|while|for|since|名詞の前 → during。
前置詞・接続詞|___ I was out, someone called me.|While|During|For|Since of|節の前 → while。
前置詞・接続詞|The game was canceled ___ the storm.|because of|because|since|so|名詞の前 → because of。
前置詞・接続詞|___ being tired, she kept working.|Despite|Although|Though|Even|動名詞の前 → 前置詞 Despite。
前置詞・接続詞|The train will leave ___ ten minutes.|in|after|later|for|今から～後 → in。
前置詞・接続詞|He moved to Tokyo three years ___.|ago|before|since|later|今から～前 → ago。`;
// 正誤判定：分野|英文|○か×|正しい形|解説
const TF=`他動詞・自動詞|We discussed about the plan.|×|We discussed the plan.|discuss は他動詞。about は不要。
他動詞・自動詞|She married with a doctor.|×|She married a doctor.|marry は他動詞（get married to なら to が必要）。
他動詞・自動詞|We reached to the station at noon.|×|We reached the station at noon.|reach は他動詞。
他動詞・自動詞|He entered into the room.|×|He entered the room.|「部屋に入る」の enter は他動詞。
他動詞・自動詞|He mentioned about the accident.|×|He mentioned the accident.|mention は他動詞。
他動詞・自動詞|Please explain me the rule.|×|Please explain the rule to me.|explain は「人に」を直接目的語にとれない。
他動詞・自動詞|We approached to the castle.|×|We approached the castle.|approach は他動詞。
他動詞・自動詞|She resembles to her mother.|×|She resembles her mother.|resemble は他動詞。進行形にもしない。
他動詞・自動詞|He attended the meeting.|○||attend「出席する」は他動詞。正しい。
他動詞・自動詞|Let's consider about the problem.|×|Let's consider the problem.|consider は他動詞。
他動詞・自動詞|They arrived at the airport late.|○||arrive は自動詞で at / in が必要。正しい。
他動詞・自動詞|I'm looking forward to see you.|×|I'm looking forward to seeing you.|look forward to の to は前置詞。
他動詞・自動詞|He apologized me for being late.|×|He apologized to me for being late.|apologize は自動詞。to 人が必要。
他動詞・自動詞|Please reply my email.|×|Please reply to my email.|reply は自動詞（answer なら to は不要）。
他動詞・自動詞|She graduated from Kyoto University.|○||graduate from。正しい。
他動詞・自動詞|He suggested me to go home.|×|He suggested that I (should) go home.|suggest は O to do の形をとらない。
他動詞・自動詞|My mother let me go to the concert.|○||let O 原形。正しい。
他動詞・自動詞|She made me to clean the room.|×|She made me clean the room.|使役 make は原形をとる。
他動詞・自動詞|I want you to help me.|○||want O to do。正しい。
他動詞・自動詞|We enjoyed very much at the party.|×|We enjoyed ourselves very much at the party.|enjoy は他動詞。目的語（oneself など）が必要。
可算・不可算|I need some informations about the hotel.|×|I need some information about the hotel.|information は不可算。
可算・不可算|He gave me many advices.|×|He gave me a lot of advice.|advice は不可算。many は使えない。
可算・不可算|We bought new furnitures.|×|We bought new furniture.|furniture は不可算。
可算・不可算|I have a lot of homework today.|○||homework は不可算。a lot of は可。
可算・不可算|There were much people in the park.|×|There were many people in the park.|people は可算（複数）。
可算・不可算|She has a lot of baggage.|○||baggage は不可算。a lot of は可。
可算・不可算|I have a good news for you.|×|I have good news for you.|news は不可算で単数扱い。a はつかない。
可算・不可算|The police is investigating the case.|×|The police are investigating the case.|police は複数扱い。
可算・不可算|Mathematics is my favorite subject.|○||学問名 -ics は単数扱い。正しい。
可算・不可算|I'm looking for a work.|×|I'm looking for a job.|work（仕事）は不可算。可算なら a job。
形容詞|I was very exciting at the concert.|×|I was very excited at the concert.|人が「興奮した」→ excited。
形容詞|The lecture was boring.|○||物事が「退屈させる」→ boring。正しい。
形容詞|Are you convenient tomorrow?|×|Is tomorrow convenient for you?|convenient は人を主語にしない。
形容詞|He is impossible to finish it today.|×|It is impossible for him to finish it today.|possible / impossible はこの形で人を主語にしない。
形容詞|The fish is still alive.|○||alive は叙述用法。正しい。
形容詞|Look at the alive fish.|×|Look at the living fish.|alive は名詞の前に置けない。
形容詞|Almost students passed the exam.|×|Most students passed the exam.|almost は副詞で名詞を直接修飾できない（almost all the students は可）。
形容詞|The baby is sleep now.|×|The baby is asleep now.|sleep は動詞・名詞。形容詞 asleep を使う。
形容詞|This car is very economic.|×|This car is very economical.|「燃費がよい・節約になる」は economical。
形容詞|He gave a sensible answer.|○||sensible「分別のある」。正しい。
形容詞|I am interesting in history.|×|I am interested in history.|人が「興味がある」→ interested。
形容詞|It was a historic moment.|○||historic「歴史上重要な」。正しい。
副詞|He works very hardly.|×|He works very hard.|hard「熱心に」。hardly は「ほとんど～ない」。
副詞|I haven't seen him lately.|○||lately「最近」。正しい。
副詞|He arrived lately for the meeting.|×|He arrived late for the meeting.|「遅れて」は late。lately は「最近」。
副詞|She speaks English very well.|○||動詞を修飾 → well。正しい。
副詞|I went to abroad last year.|×|I went abroad last year.|abroad は副詞。to は不要。
副詞|Let's go to home.|×|Let's go home.|home は副詞。to は不要。
副詞|I don't like it, too.|×|I don't like it, either.|否定文の「～も」は either。
副詞|I have already finished it.|○||already は現在完了と使える。正しい。
副詞|I didn't finish it already.|×|I haven't finished it yet.|否定文では yet を使う。
比較|This is more better than that.|×|This is much better than that.|比較級の二重表示。強調は much。
比較|He is taller than any other student in his class.|○||than any other + 単数。正しい。
比較|She is the most smartest girl in the class.|×|She is the smartest girl in the class.|最上級の二重表示。
比較|My bag is bigger than you.|×|My bag is bigger than yours.|比べる対象をそろえる（bag と bag）。
比較|The population of Tokyo is larger than that of Osaka.|○||that = the population。正しい。
比較|He is senior than me.|×|He is senior to me.|senior / junior は to を使う。
比較|I prefer tea than coffee.|×|I prefer tea to coffee.|prefer A to B。
比較|She has fewer books than I do.|○||可算名詞 → fewer。正しい。
比較|There is fewer water in this glass.|×|There is less water in this glass.|不可算名詞 → less。
時制|I have seen him yesterday.|×|I saw him yesterday.|yesterday など明確な過去は現在完了と使えない。
時制|When have you come to Japan?|×|When did you come to Japan?|When は現在完了と使えない。
時制|I will call you when I will arrive.|×|I will call you when I arrive.|時の副詞節では未来のことも現在形。
時制|I don't know if he will come tomorrow.|○||if が名詞節（～かどうか）なら will を使う。正しい。
時制|I have lived here since five years.|×|I have lived here for five years.|期間の長さは for。
時制|I am knowing the answer.|×|I know the answer.|know は状態動詞で進行形にしない。
時制|She has been to Paris three times.|○||経験の現在完了。正しい。
時制|He has gone to London last week.|×|He went to London last week.|last week は過去形と使う。
時制|By next year, I will have lived here for ten years.|○||未来完了（継続）。正しい。
前置詞|I was born in May 5.|×|I was born on May 5.|特定の日付は on。
前置詞|See you on Monday.|○||曜日は on。正しい。
前置詞|Please finish the report until Friday.|×|Please finish the report by Friday.|期限「までに」は by。
前置詞|I'll be back after two hours.|×|I'll be back in two hours.|「今から～後」は in。
前置詞|He is good in English.|×|He is good at English.|be good at。
前置詞|I go to school by bus.|○||交通手段 by + 無冠詞。正しい。
前置詞|I go to school by a bus.|×|I go to school by bus.|by の後は無冠詞。
前置詞|She is different with her sister.|×|She is different from her sister.|different from。
冠詞|I play the piano every day.|○||楽器を演奏するときは the。正しい。
冠詞|I play the tennis every day.|×|I play tennis every day.|スポーツ名に the はつけない。
冠詞|He is an honest man.|○||honest は母音の音で始まる → an。正しい。
冠詞|She is a university student.|○||university は子音 /j/ で始まる → a。正しい。
冠詞|I go to the bed at eleven.|×|I go to bed at eleven.|go to bed（本来の目的）は無冠詞。
冠詞|The sun rises in the east.|○||唯一のもの・方角に the。正しい。
冠詞|I had a breakfast at seven.|×|I had breakfast at seven.|食事名は通常無冠詞。
数量・代名詞|Each students has a locker.|×|Each student has a locker.|each + 単数名詞。
数量・代名詞|Every of the students passed.|×|Every one of the students passed.|every は代名詞として使えない。
数量・代名詞|Most of the students were absent.|○||most of the + 複数名詞。正しい。
数量・代名詞|Both of them is my friends.|×|Both of them are my friends.|both は複数扱い。
数量・代名詞|One of my friend lives in Osaka.|×|One of my friends lives in Osaka.|one of + 複数名詞（動詞は単数）。
数量・代名詞|I lost my umbrella, so I bought a new one.|○||one は同種の不特定のもの。正しい。
数量・代名詞|I have two sisters. One is a nurse, and another is a teacher.|×|One is a nurse, and the other is a teacher.|2人のうち残りの1人は the other。
数量・代名詞|Help yourself to the cake.|○||help oneself to。正しい。
準動詞|I enjoyed to talk with her.|×|I enjoyed talking with her.|enjoy は動名詞をとる。
準動詞|I decided going abroad.|×|I decided to go abroad.|decide は to 不定詞をとる。
準動詞|He stopped to smoke for his health.|×|He stopped smoking for his health.|「やめる」は stop doing（stop to do は「～するために立ち止まる」）。
準動詞|I'm used to get up early.|×|I'm used to getting up early.|be used to doing。
準動詞|I used to live in Kyoto.|○||used to do「以前は～した」。正しい。
準動詞|Would you mind opening the window?|○||mind doing。正しい。
準動詞|It is no use to cry over it.|×|It is no use crying over it.|It is no use doing。
準動詞|I can't help laughing.|○||cannot help doing。正しい。
語順・接続|I don't know where does he live.|×|I don't know where he lives.|間接疑問は S V の語順。
語順・接続|Could you tell me what time it is?|○||間接疑問の語順。正しい。
語順・接続|He is enough old to drive.|×|He is old enough to drive.|enough は形容詞の後ろに置く。
語順・接続|It was such a good movie that I saw it twice.|○||such a + 形 + 名 + that。正しい。
語順・接続|It was so a good movie.|×|It was such a good movie.|so なら so good a movie の語順。
語順・接続|Never I have seen such a thing.|×|Never have I seen such a thing.|否定語が文頭 → 倒置。
語順・接続|"I like coffee." "So do I."|○||So + 助動詞 + S。正しい。
語順・接続|"I don't like coffee." "So do I."|×|"Neither do I." / "Me neither."|否定に同意するときは Neither。
語順・接続|Although it rained, but we went out.|×|Although it rained, we went out.|Although と but は併用しない。
語順・接続|Because of it rained, we stayed home.|×|Because it rained, we stayed home.|節の前は because。because of は名詞の前。
語順・接続|Despite of the rain, we went out.|×|Despite the rain, we went out.|despite に of は不要（in spite of なら可）。
語順・接続|During I was sleeping, someone came.|×|While I was sleeping, someone came.|節の前は while。during は名詞の前。`;
const D=window.EIGO_DATA,L=s=>s.split('\n').filter(Boolean);
const conf=L(PAIRS).map(l=>{const [w,m,ex]=l.split('|');return {k:'cf:'+w,w,pos:'区別',m,ex}});
const confq=L(DRILL).map((l,i)=>{const a=l.split('|');return {k:'cq:'+i,cat:a[0],q:a[1],c:a.slice(2,6),e:a[6]}});
const tf=L(TF).map((l,i)=>{const a=l.split('|');return {k:'tf:'+i,cat:a[0],q:a[1],ok:a[2]==='○',fix:a[3],e:a[4]}});
D.decks.push(
  {id:'conf',type:'vocab',title:'似ている単語の区別（カード）',sub:'affect / effect、lie / lay など',stage:30,items:conf},
  {id:'confq',type:'mc',title:'紛らわしい単語ドリル',sub:'形・意味が似た語を文脈で選び分ける',items:confq},
  {id:'errtf',type:'tf',title:'よくあるミス 正誤判定',sub:'この英文は正しい？ 日本人が間違えやすいポイント',items:tf}
);
D.groups.splice(2,0,{title:'ミス対策（似ている単語・語法）',ids:['conf','confq','errtf']});
})();
