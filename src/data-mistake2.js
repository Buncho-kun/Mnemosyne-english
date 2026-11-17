// ミス対策 追加分：区別カード・紛らわしい単語ドリル
(function(){
const PAIRS=`award / reward|award：賞・賞を与える　reward：報酬・ほうび|win an award / a reward for hard work
bring / take|bring：(話し手・相手の所へ)持ってくる　take：(別の所へ)持っていく|Bring it here. / Take it to your room.
come / go|come：(相手・話し手の所へ)行く・来る　go：(別の所へ)行く|"Dinner's ready!" "I'm coming!"
convince / persuade|convince：確信させる　persuade：説得して～させる|He convinced me of his innocence. / She persuaded me to go.
deny / refuse / reject|deny：否定する　refuse：(依頼・申し出を)断る　reject：(案・応募を)拒絶する|He denied stealing it. / She refused to help. / They rejected the plan.
invent / discover|invent：(新しいものを)発明する　discover：(既にあるものを)発見する|invent the telephone / discover a new star
learn / study|learn：習得する・知る　study：勉強する・研究する|learn to swim / study for the exam
look for / find / find out|look for：探す　find：見つける　find out：(事実を)知る|I'm looking for my key. / I found it. / I found out the truth.
make / do|make：作る（make a mistake / a decision）　do：(行為・仕事を)する（do homework / one's best）|make a mistake / do your homework
offer / provide / supply|offer：申し出る・差し出す　provide 人 with 物　supply 物 to 人|offer help / provide us with food / supply food to them
prevent / protect|prevent A from doing：Aが～するのを防ぐ　protect A from B：AをBから守る|prevent accidents / protect children from danger
receive / accept|receive：受け取る（行為）　accept：受け入れる（意志）|I received an invitation but didn't accept it.
take / spend / cost|take：(時間が)かかる　spend：(人が時間・金を)費やす　cost：(金が)かかる|It takes an hour. / I spent an hour. / It costs ten dollars.
belong to / own|belong to：～に属する（物が主語）　own：～を所有する（人が主語）|This car belongs to me. / I own this car.
injure / hurt / damage|injure：(事故で)けがをさせる　hurt：傷つける・痛む　damage：(物)に損害を与える|He was injured. / My leg hurts. / The storm damaged the house.
error / mistake / fault|error：(計算・手順の)誤り　mistake：(判断の)間違い　fault：責任・欠点|a spelling error / my mistake / It's my fault.
chance / opportunity|chance：偶然・可能性・機会　opportunity：(よい)機会|by chance / a great opportunity
reason / cause|reason：理由（説明）　cause：原因（結果を生むもの）|the reason for his absence / the cause of the fire
scene / scenery / view|scene：場面・光景(可算)　scenery：景色(不可算)　view：眺め|a beautiful scene / beautiful scenery / a view of the sea
sound / voice / noise|sound：音(一般)　voice：(人の)声　noise：騒音|the sound of rain / a loud voice / Stop that noise.
appointment / reservation / promise|appointment：(人と会う・診察の)約束　reservation：(席・部屋の)予約　promise：約束（すること）|a dental appointment / a hotel reservation / keep a promise
sight / site / cite|sight：視覚・光景　site：場所・敷地　cite：引用する(動)|out of sight / a building site / cite an example
weather / whether|weather：天気　whether：～かどうか|nice weather / I don't know whether he will come.
there / their / they're|there：そこに　their：彼らの　they're：they are|over there / their house / They're late.
its / it's|its：それの　it's：it is / it has|The dog wagged its tail. / It's cold.
whose / who's|whose：誰の　who's：who is / who has|Whose bag is this? / Who's there?
than / then|than：～より（比較）　then：そのとき・それから|taller than me / I was a child then.
beside / besides|beside：～のそばに　besides：～に加えて・そのうえ|sit beside me / Besides English, he speaks French.
farther / further|farther：(距離が)より遠く　further：さらに・それ以上の|walk farther / further information
later / latter|later：あとで　latter：(2つのうちの)後者|See you later. / the former and the latter
older / elder|older：年上の(一般)　elder：年上の(兄弟姉妹・名詞の前のみ)|my elder sister / He is older than me.
last / latest|last：最後の・この前の　latest：最新の|the last train / the latest news
tall / high|tall：(細長く)背が高い　high：(位置・山などが)高い|a tall man / a high mountain
wide / broad|wide：幅が広い　broad：幅広い・広範な|a wide road / broad knowledge
narrow / small|narrow：幅が狭い　small：(部屋などが)狭い・小さい|a narrow road / a small room
cheap / low|cheap：(物が)安い　low：(値段・給料が)低い|a cheap book / a low price
expensive / high|expensive：(物が)高価な　high：(価格が)高い|an expensive car / a high price
heavy / many|heavy：(交通・雨が)激しい・多い|heavy traffic / heavy rain（many traffic は誤り）
scared / scary|scared：(人が)怖がって　scary：(物事が)怖い|I'm scared. / a scary movie
surprised / surprising|surprised：(人が)驚いた　surprising：(物事が)驚くべき|I was surprised. / surprising news
tired / tiring|tired：(人が)疲れた　tiring：(物事が)疲れさせる|I'm tired. / a tiring job
confused / confusing|confused：(人が)混乱した　confusing：(物事が)紛らわしい|I'm confused. / confusing instructions
satisfied / satisfactory / satisfying|satisfied：(人が)満足した　satisfactory：(基準を満たして)満足のいく　satisfying：満足感を与える|a satisfied customer / satisfactory results
childish / childlike|childish：子どもっぽい（否定的）　childlike：子どものように純真な（肯定的）|childish behavior / childlike curiosity
continual / continuous|continual：(断続的に)繰り返す　continuous：途切れなく続く|continual interruptions / continuous noise
efficient / effective|efficient：効率的な（無駄がない）　effective：効果的な（結果が出る）|an efficient worker / an effective medicine
ashamed / shameful|ashamed：(人が)恥じて　shameful：(行為が)恥ずべき|I'm ashamed of it. / shameful behavior
valuable / invaluable / valueless|valuable：貴重な　invaluable：非常に貴重な　valueless：価値のない（invaluable は「価値がない」ではない）|invaluable advice
priceless / worthless|priceless：非常に貴重な　worthless：価値のない|a priceless painting / worthless junk
famous / notorious|famous：有名な　notorious：悪名高い|a famous singer / a notorious criminal
classic / classical|classic：典型的な・一流の　classical：古典の|a classic example / classical music
electric / electrical / electronic|electric：電気で動く　electrical：電気に関する　electronic：電子の|an electric car / electrical engineering / electronic devices
used / usual|used：中古の　usual：いつもの|a used car / as usual
dead / die / death|dead：死んでいる(形)　die：死ぬ(動)　death：死(名)|He is dead. / He died. / his death
consider / regard|consider O (to be) C　regard O as C：OをCとみなす|I consider him honest. / I regard him as honest.
want / hope|want O to do：Oに～してほしい　hope to do：～したい（hope O to do は誤り）|I want you to come. / I hope to see you.
look / seem / appear|look：見た目が～　seem：(判断して)～のようだ　appear：～のように見える（やや硬い）|You look tired. / He seems honest.
get / turn / become|get：(状態が)～になる　turn：(色などが)～に変わる　become：～になる（一般）|get angry / turn red / become a doctor
sit / seat|sit：座る(自)　seat：座らせる(他)・be seated で「着席する」|Please sit down. / Please be seated.
rise / arise / arouse|rise：上がる　arise：(問題が)生じる　arouse：(感情を)呼び起こす|A problem arose. / arouse interest
fly / flow / flee|fly-flew-flown：飛ぶ　flow-flowed-flowed：流れる　flee-fled-fled：逃げる|The river flows. / They fled the city.
sew / sow|sew：縫う　sow：(種を)まく|sew a dress / sow seeds
glance / gaze / stare|glance：ちらりと見る　gaze：(感嘆して)じっと見る　stare：(驚き・無礼に)じっと見る|glance at a clock / gaze at the stars / stare at a stranger
smile / laugh|smile：ほほえむ　laugh：声を出して笑う|She smiled at me. / We laughed at his joke.
ask / ask for|ask 人 事：人に尋ねる　ask for 物：～を求める|Ask him the way. / ask for help
search / search for|search 場所：～を捜索する　search for 物：～を探す|search the room / search for the key
inquire / require|inquire：尋ねる　require：必要とする|inquire about the price / require skill
compare with / compare to|compare A with B：AとBを比べる　compare A to B：AをBにたとえる|compare Japan with China / compare life to a journey
consist of / consist in|consist of：～から成る　consist in：～にある|consist of ten members / Happiness consists in contentment.
result in / result from|result in：～という結果になる　result from：～から生じる|result in failure / result from carelessness
look after / look for / look into|look after：世話をする　look for：探す　look into：調査する|look after the baby / look for a key / look into the matter
put off / put on / put out|put off：延期する　put on：着る　put out：(火を)消す|put off the meeting / put on a coat / put out the fire
call off / call on / call for|call off：中止する　call on：訪問する　call for：要求する|call off the game / call on a friend / call for help
take after / take over / take off|take after：～に似ている　take over：引き継ぐ　take off：離陸する・脱ぐ|take after his father / take over the business
turn down / turn up / turn out|turn down：断る　turn up：現れる　turn out：～だとわかる|turn down an offer / He turned up late.
make up / make out / make up for|make up：構成する・でっち上げる　make out：理解する　make up for：埋め合わせる|make up a story / make out the meaning
in time / on time|in time：間に合って　on time：時間どおりに|arrive in time for the train / The train arrived on time.
at the end / in the end|at the end of：～の終わりに　in the end：結局|at the end of the month / In the end, we won.
at first / first|at first：最初は（後で変化）　first：まず最初に（順序）|At first I disliked it. / First, read the question.
for the first time / at first|for the first time：初めて　at first：最初は|I met him for the first time.
by the way / on the way / in the way|by the way：ところで　on the way：途中で　in the way：邪魔になって|on the way home / Your bag is in the way.`;
const DRILL=`形が似た語|Please ___ me your notebook. I'll return it tomorrow.|lend|borrow|rent|loan of|人に貸す → lend。
形が似た語|There are many ___ in the old castle.|sights|sites|cites|sighs|名所 → sights。
形が似た語|The ___ was nice, so we went on a picnic.|weather|whether|wether|weathers|天気 → weather。
形が似た語|I'm not sure ___ he will agree.|whether|weather|that|what|「～かどうか」→ whether。
形が似た語|The dog hurt ___ leg.|its|it's|it|their|所有格 its。
形が似た語|___ going to rain this afternoon.|It's|Its|It|Its'|It is の短縮 → It's。
形が似た語|He is taller ___ his brother.|than|then|that|as|比較 than。
形が似た語|We had dinner, and ___ we watched a movie.|then|than|that|when|「それから」→ then。
形が似た語|She sat ___ me on the bus.|beside|besides|between|among|「そばに」→ beside。
形が似た語|___ swimming, she enjoys tennis.|Besides|Beside|Except|Without|「～に加えて」→ Besides。
形が似た語|For ___ information, please call us.|further|farther|far|farthest|「さらなる」→ further。
形が似た語|Of tea and coffee, I prefer the ___.|latter|later|last|latest|「後者」→ latter。
形が似た語|This is my ___ brother.|elder|older|eldest of|elderly|名詞の前で兄弟 → elder。
形が似た語|Have you heard the ___ news?|latest|last|lately|later|最新の → latest。
形が似た語|The children were ___ by the strange noise.|frightened|frightening|fright|frighten|人が「怖がった」→ frightened。
形が似た語|It was a ___ experience for me.|frightening|frightened|fright|frighten|物事が「怖がらせる」→ frightening。
形が似た語|I'm ___ after the long walk.|tired|tiring|tire|tiredness|人が「疲れた」→ tired。
形が似た語|These instructions are very ___.|confusing|confused|confuse|confusion|物事が「紛らわしい」→ confusing。
形が似た語|The test results were ___. We passed.|satisfactory|satisfied|satisfy|satisfaction|基準を満たす → satisfactory。
形が似た語|Don't be so ___. You're an adult now.|childish|childlike|child|childhood|子どもっぽい（否定的）→ childish。
形が似た語|We heard the ___ noise of the machine all night.|continuous|continual|continue|continuity|途切れず続く → continuous。
形が似た語|This medicine is very ___ against colds.|effective|efficient|effect|effectively|効果がある → effective。
形が似た語|She is an ___ worker who never wastes time.|efficient|effective|efficiency|effect|無駄がない → efficient。
形が似た語|Thank you for your ___ help.|invaluable|valueless|value|unvalued|非常に貴重な → invaluable。
形が似た語|He is ___ for his violent behavior.|notorious|famous|noted|popular|悪名高い → notorious。
形が似た語|She likes ___ music such as Mozart.|classical|classic|class|classy|古典音楽 → classical。
形が似た語|This is a ___ example of the problem.|classic|classical|classy|classified|典型的な → classic。
形が似た語|I bought a ___ car for 500,000 yen.|used|usual|use|useful|中古の → used。
形が似た語|The ___ man was found in the river.|dead|died|death|dying of|形容詞「死んだ」→ dead。
形が似た語|A new problem has ___.|arisen|arised|aroused|raised|arise-arose-arisen「生じる」。
形が似た語|His speech ___ our interest.|aroused|arose|arisen|raised up|arouse「呼び起こす」。
形が似た語|The prisoners ___ the country.|fled|flew|flowed|fleed|flee-fled「逃げる」。
形が似た語|The river ___ into the sea.|flows|flies|flees|flew|flow「流れる」。
形が似た語|Farmers ___ seeds in spring.|sow|sew|saw|so|種をまく → sow。
意味が似た語|Please ___ your homework to school tomorrow.|bring|take|carry for|fetch to|学校（話し手のいる所）へ持ってくる → bring。
意味が似た語|___ an umbrella with you when you go out.|Take|Bring|Fetch|Get to|出かける先へ持っていく → take。
意味が似た語|He tried to ___ me to buy the car.|persuade|convince|insist|suggest|説得して～させる → persuade O to do。
意味が似た語|She ___ having taken the money.|denied|refused|rejected|declined|「～したことを否定する」→ deny doing。
意味が似た語|He ___ to tell me his name.|refused|denied|rejected|objected|「～するのを断る」→ refuse to do。
意味が似た語|Edison ___ the light bulb.|invented|discovered|found out|explored|新しく作る → invent。
意味が似た語|Columbus ___ America in 1492.|discovered|invented|created|made|既にあるものを見つける → discover。
意味が似た語|I ___ to ride a bike when I was six.|learned|studied|taught|knew|技能を身につける → learn。
意味が似た語|Please ___ a decision by Friday.|make|do|take on|get|make a decision。
意味が似た語|I have to ___ my homework tonight.|do|make|play|take|do homework。
意味が似た語|The school ___ students with free lunch.|provides|offers|supplies to|gives to|provide 人 with 物。
意味が似た語|Seat belts ___ you from serious injury.|protect|prevent|avoid|keep|protect A from B「守る」。
意味が似た語|The rain ___ us from going out.|prevented|protected|avoided|forbade|prevent A from doing「妨げる」。
意味が似た語|It ___ me two hours to finish the work.|took|spent|cost|needed for|It takes 人 時間 to do。
意味が似た語|I ___ two hours finishing the work.|spent|took|cost|used to|spend 時間 (in) doing。
意味が似た語|This bag ___ me 5,000 yen.|cost|took|spent|paid|cost 人 金額。
意味が似た語|This dictionary ___ to my brother.|belongs|owns|has|possesses|物が主語 → belong to。
意味が似た語|Three people were ___ in the accident.|injured|damaged|harmed by|broken|人のけが → injured。
意味が似た語|The storm ___ many houses.|damaged|injured|hurt|wounded|物の損害 → damage。
意味が似た語|I made a spelling ___.|mistake|fault|failure|defect|つづりの間違い → mistake（error も可）。
意味が似た語|It's not your ___. Don't blame yourself.|fault|mistake|error|failure|責任 → fault。
意味が似た語|This is a great ___ to practice English.|opportunity|cause|reason|possibility to|機会 → opportunity。
意味が似た語|What was the ___ of the fire?|cause|reason|motive|excuse|原因 → cause。
意味が似た語|What is the ___ for your absence?|reason|cause|matter|excuse to|理由 → reason。
意味が似た語|The mountain ___ is beautiful in autumn.|scenery|scene|view of|sight of|景色（不可算）→ scenery。
意味が似た語|She has a beautiful singing ___.|voice|sound|noise|tone of|人の声 → voice。
意味が似た語|I have a dental ___ at three.|appointment|reservation|promise|booking for|診察の予約 → appointment。
意味が似た語|I made a ___ at the restaurant.|reservation|appointment|promise|engagement|席の予約 → reservation。
意味が似た語|He ___ at his watch and left.|glanced|stared|gazed|watched|ちらりと見る → glance。
意味が似た語|It's rude to ___ at people.|stare|glance|look up|view|じっと見る（無礼）→ stare。
意味が似た語|Everyone ___ at his funny joke.|laughed|smiled|grinned to|cried|声を出して笑う → laugh。
意味が似た語|The police ___ the house for evidence.|searched|searched for|looked|found|場所を捜索する → search。
意味が似た語|They are ___ the missing boy.|searching for|searching|looking|finding|人・物を探す → search for。
意味が似た語|Life is often ___ to a journey.|compared|compare|comparing|comparison|compare A to B「たとえる」（受動態）。
意味が似た語|The committee ___ ten members.|consists of|consists in|is consisted of|composes|consist of「～から成る」（受動態にしない）。
意味が似た語|His carelessness ___ a serious accident.|resulted in|resulted from|caused by|led|result in「～という結果になる」。
意味が似た語|Her hard work ___ her success.|led to|resulted from|caused by|brought|lead to「～につながる」。
意味が似た語|The meeting was ___ until next week.|put off|put on|put out|put up|延期する → put off。
意味が似た語|The game was ___ because of the rain.|called off|called on|called for|called up|中止する → call off。
意味が似た語|She ___ her mother. They look alike.|takes after|takes over|takes off|takes on|似ている → take after。
意味が似た語|He ___ the job offer.|turned down|turned up|turned out|turned over|断る → turn down。
意味が似た語|The story ___ to be true.|turned out|turned down|turned up|turned in|～だとわかる → turn out。
意味が似た語|We arrived ___ for the first train.|in time|on time|at time|by time|間に合って → in time。
意味が似た語|The meeting started exactly ___.|on time|in time|at time|by time|時間どおりに → on time。
意味が似た語|___, we decided to stay home.|In the end|At the end|By the end|On the end|結局 → in the end。
意味が似た語|I met him ___ at the station.|for the first time|at first|firstly|at the first|初めて → for the first time。
意味が似た語|I bought some milk ___ home.|on the way|by the way|in the way|out of the way|途中で → on the way。
意味が似た語|Could you move your bag? It's ___.|in the way|on the way|by the way|out of the way|邪魔になって → in the way。
意味が似た語|My leg ___ when I walk.|hurts|injures|damages|wounds|痛む（自動詞）→ hurt。
意味が似た語|Please ___ down.|sit|seat|set|sat|座る（自動詞）→ sit。
意味が似た語|Please be ___.|seated|sat|sitting|seating|be seated「着席する」。
意味が似た語|His face ___ red with anger.|turned|became to|got to|grew to|色が変わる → turn。
意味が似た語|He ___ the way to the station.|asked me|asked to me|asked for me|asked me about for|ask 人 事。
意味が似た語|If you need help, just ___ it.|ask for|ask|ask to|ask of|物を求める → ask for。
形容詞・副詞|The traffic was very ___ this morning.|heavy|many|much|crowded|交通量が多い → heavy traffic。
形容詞・副詞|He is a ___ basketball player.|tall|high|long|big height|背が高い → tall。
形容詞・副詞|The price of this watch is too ___.|high|expensive|dear|costly of|価格が高い → high（price は expensive と言わない）。
形容詞・副詞|This is a very ___ watch.|expensive|high|highly|tall|物が高価な → expensive。
形容詞・副詞|I bought this book at a ___ price.|low|cheap|small|little|価格が低い → low。
形容詞・副詞|This movie is too ___ for children.|scary|scared|scare|scarily|物事が怖い → scary。
形容詞・副詞|She is ___ of her bad behavior.|ashamed|shameful|shame|shaming|人が恥じて → ashamed。
形容詞・副詞|This painting is ___. Nobody can buy it.|priceless|worthless|valueless|cheap|非常に貴重な → priceless。
形容詞・副詞|He drives an ___ car that doesn't use gas.|electric|electrical|electronic|electricity|電気で動く → electric。
形容詞・副詞|He looks ___ today.|happy|happily|happiness|happier of|look + 形容詞（補語）。
形容詞・副詞|The soup tastes ___.|good|well|goodly|best of|taste + 形容詞（補語）。
名詞|Her ___ was announced in the newspaper.|death|dead|die|died|名詞「死」→ death。
名詞|We enjoyed the beautiful ___ from the hotel window.|view|scenery of|sight of|scene of|窓からの眺め → view。
名詞|He won an ___ for his novel.|award|reward|prize of|honor of|賞 → award。
名詞|They offered a ___ for information about the lost dog.|reward|award|prize|price|報酬 → reward。`;
const D=window.EIGO_DATA,L=s=>s.split('\n').filter(Boolean),by=Object.fromEntries(D.decks.map(d=>[d.id,d]));
function add(id,items){const d=by[id];if(!d)return;const have=new Set(d.items.map(i=>i.k));for(const it of items)if(!have.has(it.k)){have.add(it.k);d.items.push(it)}}
add('conf',L(PAIRS).map(l=>{const [w,m,ex]=l.split('|');return {k:'cf:'+w,w,pos:'区別',m,ex}}));
add('confq',L(DRILL).map((l,i)=>{const a=l.split('|');return {k:'cq2:'+i,cat:a[0],q:a[1],c:a.slice(2,6),e:a[6]}}));
const cq=by.confq;if(cq){const order=[];cq.items.forEach(i=>{if(order.indexOf(i.cat)<0)order.push(i.cat)});cq.items.sort((a,b)=>order.indexOf(a.cat)-order.indexOf(b.cat))}
})();
