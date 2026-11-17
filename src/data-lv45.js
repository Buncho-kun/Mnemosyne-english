// 単語 Lv4（英検準1級・難関大）と Lv5（英検1級・上級）の追加 ― 例文はすべてこのアプリ用に作成
(function(){
const D=window.EIGO_DATA;
const have=new Set();for(const d of D.decks)if(d.type==='vocab'&&!/^kw|^w|^conf|^phon|^roots/.test(d.id))d.items.forEach(i=>have.add(String(i.w).toLowerCase()));
const add=(deck,pre,txt,lv)=>txt.split('\n').filter(Boolean).forEach(l=>{let [w,pos,m,ex]=l.split('|');let L=lv;if(/^\*/.test(w)){w=w.slice(1);L=3}if(!w||!m||have.has(w.toLowerCase()))return;have.add(w.toLowerCase());const it={k:pre+w,w,pos,m,ex};if(L)it.lv=L;deck.items.push(it)});
let p1=D.decks.find(d=>d.id==='p1');
if(!p1){p1={id:'p1',type:'vocab',title:'英検準1級 単語',sub:'社会・科学・ニュースで使われる上級語彙',stage:50,items:[]};D.decks.push(p1)}
const e1={id:'e1',type:'vocab',title:'英検1級・上級 単語',sub:'論説・学術・文学で使われる難語',stage:50,items:[]};D.decks.push(e1);

/* ===== Lv4：英検準1級・難関大（*印はLv3扱い） ===== */
add(p1,'p1:',`acrid|形|（においが）鼻をつく|An [acrid] smell filled the room.
adhesive|名|接着剤|Use a strong [adhesive].
affiliate|名|関連会社、系列|The bank has [affiliates] abroad.
alight|動|（乗り物から）降りる|Passengers [alighted] at the station.
altruism|名|利他主義|Her act was pure [altruism].
amble|動|ぶらぶら歩く|We [ambled] along the beach.
annotate|動|〜に注釈をつける|She [annotated] the text.
antagonist|名|敵対者|He was her main [antagonist].
appalling|形|ぞっとする、ひどい|The conditions were [appalling].
appraisal|名|評価、査定|He got a good [appraisal].
ascent|名|上昇、登ること|The [ascent] took three hours.
assorted|形|詰め合わせの、さまざまな|a box of [assorted] chocolates
bait|名|えさ、おとり|He used worms as [bait].
bask|動|日光浴する、浴する|The cat [basked] in the sun.
beacon|名|かがり火、指針|The lighthouse is a [beacon].
beguile|動|〜を魅了する、だます|He was [beguiled] by her charm.
behold|動|〜を見る|It was a sight to [behold].
belated|形|遅ればせの|Here is a [belated] birthday gift.
bigot|名|偏狭な人|He was called a [bigot].
bog|名|沼地|They got stuck in a [bog].
bogus|形|偽の|It was a [bogus] claim.
booming|形|急成長の|It is a [booming] industry.
botch|動|〜をしくじる|He [botched] the job.
brawl|名|乱闘|A [brawl] broke out.
*brew|動|（お茶などを）入れる、醸造する|She [brewed] some tea.
*brochure|名|パンフレット|Take a travel [brochure].
burrow|名|（動物の）巣穴|The rabbit hid in its [burrow].
bustle|動|せわしく動き回る|The streets [bustled] with people.
canvass|動|（票を）頼んで回る|They [canvassed] for votes.
capsize|動|転覆する|The boat [capsized].
carnage|名|大虐殺、殺りく|The war caused [carnage].
cartel|名|カルテル|The oil [cartel] raised prices.
chasm|名|深い割れ目、隔たり|There is a [chasm] between rich and poor.
*chore|名|雑用、家事|I do the [chores] on Sunday.
cleave|動|〜を裂く|The axe [cleaved] the log.
clergy|名|聖職者|Members of the [clergy] attended.
clinch|動|〜を勝ち取る、決着させる|They [clinched] the deal.
colloquial|形|口語の|It is a [colloquial] expression.
colonize|動|〜を植民地化する|They [colonized] the island.
congregate|動|集まる|People [congregated] in the square.
connotation|名|含意|The word has a negative [connotation].
conscript|動|〜を徴兵する|He was [conscripted] into the army.
corpse|名|死体|The police found a [corpse].
courteous|形|礼儀正しい|The staff were [courteous].
*cram|動|詰め込む、詰め込み勉強する|He [crammed] for the exam.
credentials|名|資格、経歴|She has excellent [credentials].
cripple|動|〜を麻痺させる|The strike [crippled] the city.
crumble|動|ぼろぼろに崩れる|The old wall [crumbled].
crusade|名|改革運動|He led a [crusade] against crime.
dazzle|動|〜の目をくらませる、圧倒する|She [dazzled] the audience.
deceased|形|死去した|He takes care of his [deceased] friend's dog.
deduct|動|〜を差し引く|Tax is [deducted] from your pay.
deflate|動|しぼむ、〜をくじく|The ball [deflated].
deity|名|神|They worship many [deities].
denomination|名|宗派、（貨幣の）額面|Coins of small [denomination]
depose|動|〜を退位させる|The king was [deposed].
deprivation|名|欠乏、剥奪|Sleep [deprivation] is harmful.
detergent|名|洗剤|Add some [detergent].
disown|動|〜と縁を切る|His father [disowned] him.
dogma|名|教義、独断的な考え|He rejected political [dogma].
drench|動|〜をずぶぬれにする|We were [drenched] by the rain.
edict|名|布告|The king issued an [edict].
eerie|形|不気味な|There was an [eerie] silence.
elapse|動|（時が）経過する|Ten years [elapsed].
elate|動|〜を大喜びさせる|She was [elated] by the news.
*elite|名|エリート|the political [elite]
emblem|名|象徴、記章|The dove is an [emblem] of peace.
enchant|動|〜を魅了する|The music [enchanted] us.
err|動|誤る|To [err] is human.
escort|動|〜を護衛する、付き添う|Police [escorted] the president.
esteem|名|尊敬|She is held in high [esteem].
*ethnic|形|民族の|There are many [ethnic] groups.
excrete|動|〜を排出する|The body [excretes] waste.
fad|名|一時的な流行|It was just a [fad].
feud|名|確執、反目|There is a long [feud] between the families.
fiddle|動|いじくる|Stop [fiddling] with your phone.
flick|動|〜をはじく|He [flicked] the switch.
flop|名|大失敗|The film was a [flop].
foe|名|敵|He faced his old [foe].
forsake|動|〜を見捨てる|He [forsook] his friends.
fray|動|すり切れる、（神経が）すり減る|Tempers [frayed].
*frown|動|まゆをひそめる|She [frowned] at me.
fury|名|激怒|He was in a [fury].
*gadget|名|（小型の）機器|He loves new [gadgets].
*garment|名|衣服|She sells [garments].
garnish|動|〜に添える、飾る|[Garnish] with parsley.
glee|名|大喜び|The kids laughed with [glee].
*glitter|動|きらきら光る|The stars [glittered].
gloom|名|薄暗がり、憂うつ|A sense of [gloom] fell over us.
gnaw|動|〜をかじる、苦しめる|The dog [gnawed] the bone.
graze|動|草を食べる、すりむく|Cows [grazed] in the field.
groan|動|うめく|He [groaned] in pain.
grope|動|手探りする|She [groped] for the light.
gust|名|突風|A [gust] of wind blew my hat off.
haggle|動|値切る|She [haggled] over the price.
harbor|動|（感情を）抱く、かくまう|He [harbored] a grudge.
havoc|名|大混乱|The storm caused [havoc].
heir|名|相続人、後継者|He is [heir] to the throne.
hideous|形|ぞっとするほど醜い|It was a [hideous] crime.
hurl|動|〜を投げつける|He [hurled] a rock.
illiterate|形|読み書きのできない|Many adults were [illiterate].
imperial|形|帝国の|the [imperial] family
induct|動|〜を就任させる、迎え入れる|He was [inducted] into the hall of fame.
*inhale|動|〜を吸い込む|[Inhale] deeply.
intoxicate|動|〜を酔わせる|He was [intoxicated].
intrigue|動|〜の好奇心をそそる|The idea [intrigued] me.
jolt|動|〜を揺さぶる|The news [jolted] him.
jumble|名|ごちゃまぜ|a [jumble] of papers
knack|名|こつ|She has a [knack] for languages.
lag|動|遅れる|Wages [lag] behind prices.
lame|形|足の不自由な、説得力のない|It was a [lame] excuse.
launder|動|（不正資金を）洗浄する、洗濯する|They [laundered] money.
layman|名|素人|Explain it in [layman's] terms.
lore|名|言い伝え|It is part of local [lore].
mania|名|熱狂|There was a soccer [mania].
metropolis|名|大都市|Tokyo is a huge [metropolis].
mischief|名|いたずら|The boys got into [mischief].
miser|名|けちん坊|He is a [miser].
*moist|形|湿った|The cake is [moist].
muddle|名|混乱|Everything was in a [muddle].
mute|形|無言の|He remained [mute].
*narrate|動|〜を語る|She [narrated] the film.
nomad|名|遊牧民|The [nomads] moved with their animals.
obese|形|肥満の|The number of [obese] children is rising.
occupant|名|居住者、乗員|The car's [occupants] were safe.
orient|動|〜を方向づける|The course is [oriented] to beginners.
*orphan|名|孤児|He was raised as an [orphan].
oust|動|〜を追放する|The leader was [ousted].
outlay|名|支出|The initial [outlay] is high.
overdue|形|期限の過ぎた|The book is [overdue].
overturn|動|〜をひっくり返す、覆す|The court [overturned] the ruling.
pact|名|協定|They signed a [pact].
pageant|名|ページェント、野外劇|a historical [pageant]
pang|名|激しい痛み|She felt a [pang] of guilt.
paralyze|動|〜を麻痺させる|The snow [paralyzed] the city.
parasite|名|寄生虫|The fish had [parasites].
pierce|動|〜を突き刺す|The arrow [pierced] his arm.
pilgrim|名|巡礼者|[Pilgrims] visited the temple.
poach|動|密猟する、引き抜く|They [poached] elephants.
poise|名|落ち着き|She spoke with [poise].
pounce|動|飛びかかる|The cat [pounced] on the mouse.
prognosis|名|予後、見通し|The [prognosis] is good.
*proverb|名|ことわざ|As the [proverb] says...
prune|動|〜を刈り込む、削減する|We [pruned] the trees.
pseudonym|名|ペンネーム|She writes under a [pseudonym].
rebate|名|割り戻し|You'll get a tax [rebate].
rejoice|動|大喜びする|They [rejoiced] at the news.
repute|名|評判|a hotel of good [repute]
retort|動|言い返す|"No way," she [retorted].
revert|動|戻る|He [reverted] to his old habits.
revolt|名|反乱|The people rose in [revolt].
ripple|名|さざ波、波紋|The news caused [ripples].
rubble|名|がれき|The house was reduced to [rubble].
sane|形|正気の|No [sane] person would do that.
satire|名|風刺|The film is a political [satire].
savage|形|どう猛な、残酷な|It was a [savage] attack.
sculpt|動|〜を彫刻する|He [sculpted] a statue.
sect|名|宗派、派閥|a religious [sect]
sermon|名|説教|The priest gave a [sermon].
shrine|名|神社、聖地|We visited a [shrine].
shudder|動|身震いする|She [shuddered] at the thought.
siege|名|包囲攻撃|The city was under [siege].
sinister|形|不吉な、邪悪な|He had a [sinister] smile.
siphon|動|吸い上げる、流用する|He [siphoned] off funds.
slaughter|名|虐殺、屠殺|The [slaughter] of whales
slay|動|〜を殺す|The knight [slew] the dragon.
sleek|形|なめらかな、洗練された|a [sleek] new car
slump|名|不振、暴落|Sales are in a [slump].
snare|名|わな|The rabbit was caught in a [snare].
sneer|動|あざ笑う|He [sneered] at my idea.
solemn|形|厳粛な|It was a [solemn] ceremony.
sprawl|動|手足を伸ばして寝そべる、無秩序に広がる|The city [sprawls] for miles.
stab|動|〜を刺す|He was [stabbed] in the back.
*stale|形|新鮮でない|The bread is [stale].
stature|名|名声、背丈|a scientist of great [stature]
stingy|形|けちな|Don't be so [stingy].
stoop|動|かがむ、身を落とす|He [stooped] to pick it up.
stout|形|がっしりした|a [stout] man
strife|名|争い|years of civil [strife]
surmount|動|〜を乗り越える|She [surmounted] many obstacles.
swamp|動|〜を殺到させる、水浸しにする|We were [swamped] with work.
swarm|名|群れ|a [swarm] of bees
symmetry|名|対称|The design has perfect [symmetry].
taboo|名|タブー|It is a social [taboo].
taint|動|〜を汚す|The scandal [tainted] his name.
taunt|動|〜をあざける|They [taunted] the new boy.
thaw|動|解ける|The ice began to [thaw].
theorem|名|定理|a mathematical [theorem]
thrift|名|倹約|She is known for her [thrift].
tilt|動|傾く|The table [tilted].
topple|動|倒れる、〜を倒す|The tree [toppled].
transcribe|動|〜を書き写す|She [transcribed] the interview.
treason|名|反逆罪|He was accused of [treason].
trespass|動|不法侵入する|Do not [trespass].
truce|名|休戦|The two sides agreed to a [truce].
tycoon|名|大物実業家|a business [tycoon]
ultimatum|名|最後通告|They issued an [ultimatum].
unveil|動|〜を公表する、除幕する|The company [unveiled] a new phone.
valiant|形|勇敢な|He made a [valiant] effort.
wade|動|（水の中を）歩いて渡る|We [waded] across the river.
wager|名|賭け|He made a [wager].
wedge|名|くさび|Put a [wedge] under the door.
woe|名|悲哀、災い|financial [woes]`,4);

add(p1,'p1:',`accountable|形|説明責任がある|Leaders must be [accountable] to the public.
activist|名|活動家|an environmental [activist]
addictive|形|中毒性の|Nicotine is highly [addictive].
adjunct|名|付属物、補助|an [adjunct] to therapy
aerial|形|空中の、航空の|an [aerial] photograph
aggressor|名|侵略者、攻撃者|The [aggressor] invaded first.
ailing|形|病気の、不振の|the [ailing] economy
alias|名|偽名|He used an [alias].
*allergy|名|アレルギー|I have an [allergy] to eggs.
alloy|名|合金|Bronze is an [alloy].
ambush|名|待ち伏せ|The soldiers fell into an [ambush].
amnesia|名|記憶喪失|He suffered from [amnesia].
amputate|動|〜を切断する|His leg was [amputated].
anatomy|名|解剖学、構造|the [anatomy] of the brain
ancestry|名|祖先、家系|She has Irish [ancestry].
anemia|名|貧血|Iron deficiency causes [anemia].
annuity|名|年金|He receives an [annuity].
apartheid|名|アパルトヘイト|the end of [apartheid]
apparel|名|衣料品|sports [apparel]
arbiter|名|裁定者|the final [arbiter]
aristocrat|名|貴族|a French [aristocrat]
arsenal|名|兵器庫、蓄え|a nuclear [arsenal]
asbestos|名|石綿、アスベスト|The building contained [asbestos].
asphalt|名|アスファルト|an [asphalt] road
assassin|名|暗殺者|The [assassin] was caught.
*asthma|名|ぜんそく|She has [asthma].
asymmetry|名|非対称|the [asymmetry] of the face
atheist|名|無神論者|He is an [atheist].
auditorium|名|講堂|The [auditorium] was full.
aviation|名|航空|the [aviation] industry
*avalanche|名|雪崩、殺到|an [avalanche] of letters
backbone|名|背骨、中心|Farmers are the [backbone] of the country.
bacterium|名|細菌（複 bacteria）|a harmful [bacterium]
*bandage|名|包帯|Put a [bandage] on it.
banquet|名|宴会|a wedding [banquet]
baron|名|男爵、大物|a media [baron]
barricade|名|バリケード|They built a [barricade].
battalion|名|大隊|an army [battalion]
bead|名|ビーズ、しずく|[beads] of sweat
beverage|名|飲料|alcoholic [beverages]
biopsy|名|生検|The doctor took a [biopsy].
blackmail|名|恐喝|He was a victim of [blackmail].
botany|名|植物学|She studied [botany].
brace|動|身構える|[Brace] yourself for bad news.
brigade|名|旅団、隊|the fire [brigade]
bulletin|名|公報、ニュース速報|a news [bulletin]
bumper|名|バンパー|the car's [bumper]
bystander|名|傍観者|an innocent [bystander]
*caffeine|名|カフェイン|Coffee contains [caffeine].
calcium|名|カルシウム|Milk is rich in [calcium].
*calorie|名|カロリー|low-[calorie] food
canopy|名|天蓋、林冠|the forest [canopy]
caretaker|名|管理人、世話人|the school [caretaker]
cartilage|名|軟骨|knee [cartilage]
*catalog|名|カタログ|a mail-order [catalog]
cavalry|名|騎兵隊|The [cavalry] charged.
cellular|形|細胞の、携帯電話の|[cellular] structure
ceramic|形|陶磁器の|[ceramic] tiles
*cereal|名|穀物、シリアル|I eat [cereal] for breakfast.
chancellor|名|首相、総長|the German [chancellor]
chassis|名|車台|the car's [chassis]
cholesterol|名|コレステロール|high [cholesterol]
chord|名|和音|a guitar [chord]
chromosome|名|染色体|human [chromosomes]
cipher|名|暗号|a secret [cipher]
citadel|名|とりで|an ancient [citadel]
cocoon|名|まゆ|a silk [cocoon]
combatant|名|戦闘員|enemy [combatants]
commonwealth|名|連邦|the British [Commonwealth]
commune|名|生活共同体|They lived in a [commune].
compartment|名|仕切り、区画|a luggage [compartment]
concussion|名|脳しんとう|He suffered a [concussion].
confederation|名|連合|a [confederation] of states
conifer|名|針葉樹|Pines are [conifers].
constellation|名|星座|the [constellation] Orion
consulate|名|領事館|the Japanese [consulate]
coronation|名|戴冠式|the queen's [coronation]
corporal|形|肉体の|[corporal] punishment
cortex|名|皮質|the cerebral [cortex]
*cosmetic|形|化粧の、表面的な|[cosmetic] changes
cosmos|名|宇宙|the origin of the [cosmos]
councilor|名|議員|a city [councilor]
courier|名|配達業者|Send it by [courier].
crib|名|ベビーベッド|The baby slept in a [crib].
cruiser|名|巡洋艦、大型クルーザー|a navy [cruiser]
crustacean|名|甲殻類|Crabs are [crustaceans].
curator|名|学芸員|a museum [curator]
cyclone|名|サイクロン|A [cyclone] hit the coast.
decibel|名|デシベル|90 [decibels]
decoy|名|おとり|He was used as a [decoy].
deluxe|形|豪華な|a [deluxe] room
dentistry|名|歯科|a career in [dentistry]
depot|名|倉庫、車庫|a bus [depot]
dermatology|名|皮膚科|a [dermatology] clinic
desertion|名|脱走、遺棄|He was charged with [desertion].
*detective|名|刑事、探偵|a private [detective]
dialysis|名|透析|He needs [dialysis].
diaper|名|おむつ|change a [diaper]
dictator|名|独裁者|a military [dictator]
diesel|名|ディーゼル|a [diesel] engine
dietary|形|食事の|[dietary] habits
directive|名|指令|an EU [directive]
*dolphin|名|イルカ|[Dolphins] are smart.
dormitory|名|寮|a student [dormitory]
dosage|名|服用量|the correct [dosage]
dowry|名|持参金|She brought a large [dowry].
emigrant|名|（他国への）移民|[emigrants] to America
enclave|名|飛び地、少数派の居住地|an ethnic [enclave]
encyclopedia|名|百科事典|an online [encyclopedia]
enzyme|名|酵素|digestive [enzymes]
epilepsy|名|てんかん|He has [epilepsy].
*equator|名|赤道|countries near the [equator]
erosion|名|侵食|soil [erosion]
ethos|名|気風、精神|the company's [ethos]
fetus|名|胎児|the developing [fetus]
feudal|形|封建制の|the [feudal] system
filament|名|細い糸、フィラメント|a light bulb [filament]
firearm|名|銃器|the use of [firearms]
flank|名|側面|the left [flank]
flora|名|植物相|the [flora] of Japan
fauna|名|動物相|local flora and [fauna]
foliage|名|（集合的に）葉|autumn [foliage]
forensic|形|法医学の、科学捜査の|[forensic] evidence
fortress|名|要塞|an old [fortress]
freight|名|貨物|a [freight] train
fungus|名|菌類|a type of [fungus]
*galaxy|名|銀河|our [galaxy]
garrison|名|守備隊|a [garrison] town
genome|名|ゲノム|the human [genome]
*geometry|名|幾何学|I study [geometry].
gland|名|腺|sweat [glands]
glucose|名|ブドウ糖|blood [glucose]
graffiti|名|落書き|walls covered with [graffiti]
granite|名|花こう岩|a [granite] statue
gravel|名|砂利|a [gravel] path
grenade|名|手りゅう弾|He threw a [grenade].
handicap|名|障害、不利な条件|a physical [handicap]
hijack|動|〜を乗っ取る|The plane was [hijacked].
homicide|名|殺人|He was charged with [homicide].
hormone|名|ホルモン|growth [hormone]
incubator|名|保育器、ふ卵器|The baby was in an [incubator].
indictment|名|起訴、告発|an [indictment] for fraud
infantry|名|歩兵|an [infantry] division
insulin|名|インスリン|He needs [insulin].
insurgency|名|反乱|a violent [insurgency]
intestine|名|腸|the small [intestine]
invertebrate|名|無脊椎動物|Insects are [invertebrates].
ion|名|イオン|a positive [ion]
kinship|名|親族関係、親近感|a sense of [kinship]
ledger|名|元帳、台帳|a financial [ledger]
lieutenant|名|中尉、副官|a police [lieutenant]
ligament|名|靱帯|a torn [ligament]
logistics|名|物流、段取り|the [logistics] of the event
lunar|形|月の|a [lunar] eclipse
manure|名|肥やし|cow [manure]
marrow|名|骨髄|bone [marrow]
marsh|名|沼地|a salt [marsh]
*mascot|名|マスコット|the team [mascot]
maternity|名|母性、出産|[maternity] leave
membrane|名|膜|a cell [membrane]
mercury|名|水銀|[Mercury] is toxic.
meteor|名|流星|a [meteor] shower
midwife|名|助産師|She works as a [midwife].
migraine|名|片頭痛|She suffers from [migraines].
monsoon|名|季節風、雨季|the [monsoon] season
*mosquito|名|蚊|I was bitten by a [mosquito].
narcotic|名|麻薬|illegal [narcotics]
nectar|名|花の蜜|Bees collect [nectar].
neuron|名|神経細胞|[Neurons] send signals.
nitrogen|名|窒素|Air is mostly [nitrogen].
nominee|名|候補者|an award [nominee]
oasis|名|オアシス|an [oasis] in the desert
obituary|名|死亡記事|His [obituary] appeared today.
outpatient|名|外来患者|an [outpatient] clinic
patriarch|名|家長、長老|the family [patriarch]
pedigree|名|血統|a dog with a [pedigree]
pelvis|名|骨盤|a broken [pelvis]
petroleum|名|石油|[petroleum] products
placebo|名|偽薬|the [placebo] effect
plantation|名|大農園|a coffee [plantation]
plasma|名|血漿、プラズマ|blood [plasma]
plateau|名|高原、停滞期|Sales reached a [plateau].
plumbing|名|配管|The [plumbing] is old.
premiere|名|初演、初公開|the film's [premiere]
primate|名|霊長類|Humans are [primates].
proprietor|名|所有者、経営者|the [proprietor] of the shop
prosthesis|名|義肢|He wears a [prosthesis].
puberty|名|思春期|the onset of [puberty]
*rainforest|名|熱帯雨林|the Amazon [rainforest]
receptor|名|受容体|pain [receptors]
refinery|名|精製所|an oil [refinery]
regiment|名|連隊|an infantry [regiment]
rodent|名|げっ歯類|Rats are [rodents].
salinity|名|塩分濃度|the [salinity] of seawater
saliva|名|唾液|[Saliva] helps digestion.
sedimentary|形|堆積の|[sedimentary] rock
senate|名|上院|The [Senate] passed the bill.
sewage|名|下水|[sewage] treatment
shrub|名|低木|Plant some [shrubs].
*skyscraper|名|超高層ビル|New York's [skyscrapers]
sociology|名|社会学|She majors in [sociology].
spinal|形|脊椎の|a [spinal] injury
stalk|名|茎|a flower [stalk]
tactic|名|戦術|a new [tactic]
textile|名|織物|the [textile] industry
thyroid|名|甲状腺|a [thyroid] problem
torso|名|胴体|He was hit in the [torso].
transplant|名|移植|a heart [transplant]
treasury|名|財務省、国庫|the U.S. [Treasury]
tuberculosis|名|結核|a case of [tuberculosis]
tumor|名|腫瘍|a brain [tumor]
turbine|名|タービン|a wind [turbine]
*typhoon|名|台風|A [typhoon] is coming.
ulcer|名|潰瘍|a stomach [ulcer]
vertebrate|名|脊椎動物|Fish are [vertebrates].
veterinarian|名|獣医|Take the dog to a [veterinarian].
*virus|名|ウイルス|a flu [virus]
*volcano|名|火山|an active [volcano]
voltage|名|電圧|high [voltage]
warhead|名|弾頭|a nuclear [warhead]
watershed|名|分水嶺、転機|a [watershed] moment
zoology|名|動物学|She studied [zoology].`,4);

/* ===== Lv5：英検1級・上級 ===== */
add(e1,'e1:',`abeyance|名|一時停止、保留|The plan is in [abeyance].
abjure|動|〜を公に放棄する|He [abjured] his faith.
abnegate|動|〜を放棄する|He [abnegated] his duties.
abrogate|動|〜を廃止する|The treaty was [abrogated].
absolution|名|赦免|He sought [absolution].
abstemious|形|節制する|He is [abstemious] in his habits.
acolyte|名|信奉者、助手|The leader and his [acolytes]
acquiescent|形|従順な|She was [acquiescent].
adage|名|格言|as the old [adage] goes
aegis|名|後援、庇護|under the [aegis] of the UN
affront|名|侮辱|It was an [affront] to his pride.
aggrandize|動|〜を強大にする、誇張する|He sought to [aggrandize] himself.
aggrieved|形|不当に扱われたと感じる|She felt [aggrieved].
amalgamate|動|〜を合併させる|The two firms [amalgamated].
amity|名|友好|a treaty of [amity]
ancillary|形|補助的な|[ancillary] services
anodyne|形|当たり障りのない|an [anodyne] statement
antediluvian|形|時代遅れの|[antediluvian] ideas
antipathy|名|反感|He has an [antipathy] to change.
apoplectic|形|激怒した|He was [apoplectic] with rage.
apostate|名|背教者|He was branded an [apostate].
apotheosis|名|極致、神格化|the [apotheosis] of his career
apposite|形|適切な|an [apposite] remark
arcane|形|難解な、秘密の|[arcane] rules
archetype|名|典型、原型|the [archetype] of a hero
arrogate|動|〜を不当に要求する|He [arrogated] power to himself.
artifice|名|策略|without [artifice]
ascetic|形|禁欲的な|an [ascetic] life
aspersion|名|中傷|He cast [aspersions] on her honesty.
assent|名|同意|He gave his [assent].
atone|動|償う|He tried to [atone] for his sins.
augur|動|〜の前兆となる|This [augurs] well for the future.
auspices|名|後援|under the [auspices] of the city
avow|動|〜を公言する|He [avowed] his loyalty.
axiom|名|自明の理、公理|a basic [axiom]
bane|名|悩みの種|He is the [bane] of my life.
bastion|名|とりで|a [bastion] of freedom
beleaguered|形|苦境にある|the [beleaguered] company
bemoan|動|〜を嘆く|He [bemoaned] his fate.
bereft|形|奪われた、失った|[bereft] of hope
besmirch|動|〜を汚す|He [besmirched] her name.
bilk|動|〜をだまし取る|He [bilked] investors.
blithe|形|のんきな|[blithe] disregard for safety
bluster|動|どなり散らす、虚勢を張る|He [blustered] about his rights.
bourgeois|形|中産階級的な|[bourgeois] values
bravado|名|虚勢|It was mere [bravado].
bucolic|形|田園の|a [bucolic] scene
bulwark|名|防波堤、とりで|a [bulwark] against tyranny
buttress|動|〜を補強する|The data [buttress] his argument.
byzantine|形|複雑怪奇な|[byzantine] rules
cadence|名|抑揚、リズム|the [cadence] of her voice
callow|形|未熟な|a [callow] youth
canard|名|デマ|That story is a [canard].
cantankerous|形|けんか腰の、気難しい|a [cantankerous] old man
carp|動|文句を言う|He's always [carping].
catharsis|名|カタルシス、浄化|Writing was a [catharsis] for her.
caveat|名|注意書き、但し書き|with one [caveat]
chicanery|名|ごまかし|political [chicanery]
chimera|名|妄想|Peace was a [chimera].
compendium|名|概要、大全|a [compendium] of recipes
compunction|名|良心の呵責|He felt no [compunction].
concomitant|形|付随する|[concomitant] risks
concord|名|一致、調和|in [concord]
conflate|動|〜を混同する|Don't [conflate] the two issues.
confound|動|〜を困惑させる|The results [confounded] experts.
construe|動|〜を解釈する|His words were [construed] as a threat.
contrition|名|悔恨|He showed [contrition].
conundrum|名|難問|It's a real [conundrum].
coterie|名|仲間、同人|a [coterie] of friends
countenance|動|〜を容認する|I won't [countenance] such behavior.
crestfallen|形|しょげた|He looked [crestfallen].
cupidity|名|強欲|driven by [cupidity]
curmudgeon|名|気難し屋|He is an old [curmudgeon].
dauntless|形|勇敢な|a [dauntless] explorer
decadence|名|退廃|moral [decadence]
deign|動|身を落として〜する|She didn't [deign] to answer.
demur|動|異議を唱える|He [demurred] at the idea.
denizen|名|住人|the [denizens] of the forest
desiccate|動|〜を乾燥させる|[desiccated] coconut
detritus|名|破片、残骸|the [detritus] of war
diaphanous|形|透けるような|a [diaphanous] veil
dilettante|名|ディレッタント、好事家|He is a mere [dilettante].
dirge|名|哀歌|a funeral [dirge]
discomfit|動|〜を当惑させる|His question [discomfited] her.
disconcert|動|〜を動揺させる|The silence [disconcerted] him.
discordant|形|不調和な|[discordant] voices
disquiet|名|不安|public [disquiet]
dissemble|動|本心を隠す|He [dissembled] his anger.
dissolute|形|放蕩な|a [dissolute] life
dissonance|名|不協和|cognitive [dissonance]
distend|動|膨張する|His stomach was [distended].
dolorous|形|悲しげな|a [dolorous] song
dour|形|むっつりした|a [dour] expression
draconian|形|過酷な|[draconian] laws
dross|名|かす、くず|Most of it is [dross].
dulcet|形|甘美な|her [dulcet] tones
edify|動|〜を啓発する|an [edifying] book
egress|名|出口|a means of [egress]
elegy|名|哀歌、挽歌|an [elegy] for the dead
elixir|名|万能薬|the [elixir] of life
elocution|名|話し方、発声法|lessons in [elocution]
emollient|形|なだめる、柔らかくする|an [emollient] tone
encomium|名|賛辞|an [encomium] to the hero
entreat|動|〜に懇願する|She [entreated] him to stay.
eschew|動|〜を避ける|He [eschews] violence.
euphemism|名|婉曲表現|"Pass away" is a [euphemism] for "die".
evanescent|形|はかない|[evanescent] beauty
evince|動|〜を明示する|He [evinced] no interest.
excoriate|動|〜を酷評する|Critics [excoriated] the film.
execrable|形|ひどい|[execrable] taste
exigent|形|緊急の、要求の厳しい|[exigent] circumstances
expiate|動|〜を償う|to [expiate] his guilt
extemporaneous|形|即興の|an [extemporaneous] speech
facile|形|安易な、浅薄な|a [facile] answer
fallow|形|休耕中の|The field lay [fallow].
feckless|形|無能な、無責任な|a [feckless] leader
feral|形|野生化した|[feral] cats
fetid|形|悪臭を放つ|[fetid] water
fiat|名|命令、認可|by government [fiat]
filibuster|名|議事妨害|a [filibuster] in the Senate
foible|名|小さな欠点|his little [foibles]
foment|動|〜を助長する|to [foment] rebellion
fulminate|動|激しく非難する|He [fulminated] against the plan.
fulsome|形|大げさな、過度の|[fulsome] praise
gainsay|動|〜を否定する|No one can [gainsay] it.
gambit|名|策略、手|an opening [gambit]
garish|形|けばけばしい|[garish] colors
gauche|形|不器用な、気のきかない|a [gauche] remark
genteel|形|上品ぶった|a [genteel] neighborhood
gird|動|〜に備える|[gird] oneself for battle
glower|動|にらみつける|He [glowered] at me.
gossamer|形|繊細な、薄い|[gossamer] wings
grandiose|形|壮大な、大げさな|[grandiose] plans
gratis|副|無料で|It's provided [gratis].
grovel|動|ひれ伏す、へつらう|He [groveled] before his boss.
guffaw|動|大笑いする|He [guffawed] at the joke.
halcyon|形|穏やかな、平和な|the [halcyon] days of youth
herculean|形|非常に困難な|a [herculean] task
heterodox|形|異端の|[heterodox] views
histrionic|形|芝居がかった|a [histrionic] display
homily|名|説教、訓話|a [homily] on patience
hyperbole|名|誇張法|That's pure [hyperbole].
iconic|形|象徴的な|an [iconic] building
idolatry|名|偶像崇拝|the [idolatry] of money
ignoble|形|卑しい|an [ignoble] act
illusory|形|錯覚の、架空の|The gains were [illusory].
imbroglio|名|もつれ、紛糾|a political [imbroglio]
imbue|動|〜を吹き込む|[imbued] with hope
imperious|形|横柄な|an [imperious] manner
impertinent|形|無礼な|an [impertinent] question
impiety|名|不信心|an act of [impiety]
impugn|動|〜に異議を唱える|He [impugned] her motives.
impunity|名|処罰されないこと|They acted with [impunity].
incandescent|形|白熱の、激怒した|[incandescent] with rage
incredulous|形|疑い深い|an [incredulous] look
inculcate|動|〜を教え込む|to [inculcate] values
indigent|形|貧困な|[indigent] families
indomitable|形|不屈の|an [indomitable] spirit
inebriated|形|酔った|He was [inebriated].
infamy|名|悪名|a day of [infamy]
ingrate|名|恩知らず|You [ingrate]!
insouciant|形|無頓着な|an [insouciant] attitude
insuperable|形|克服できない|[insuperable] difficulties
interlocutor|名|対話者|his [interlocutor]
internecine|形|内部抗争の|[internecine] warfare
inure|動|〜を慣れさせる|[inured] to hardship
invective|名|罵倒|a stream of [invective]
inviolable|形|不可侵の|an [inviolable] right
itinerant|形|巡回する|an [itinerant] preacher
jaundiced|形|偏見のある、ひねくれた|a [jaundiced] view
jejune|形|未熟な、退屈な|[jejune] ideas
jingoism|名|好戦的愛国主義|a wave of [jingoism]
kowtow|動|ぺこぺこする|He [kowtowed] to the boss.
lambast|動|〜を厳しく非難する|The press [lambasted] him.
lampoon|動|〜を風刺する|The show [lampoons] politicians.
largess|名|気前のよさ|government [largess]
lassitude|名|倦怠|a feeling of [lassitude]
laudatory|形|賛美の|[laudatory] reviews
lexicon|名|語彙、辞書|part of the [lexicon]
limpid|形|澄んだ|[limpid] water
litany|名|長々とした列挙|a [litany] of complaints
lurid|形|どぎつい|[lurid] details
machination|名|陰謀|political [machinations]
maelstrom|名|大混乱、渦|a [maelstrom] of emotion
malady|名|病気、病弊|a social [malady]
malcontent|名|不平家|a group of [malcontents]
malediction|名|呪い|He uttered a [malediction].
malfeasance|名|不正行為|corporate [malfeasance]
malinger|動|仮病を使う|He was [malingering].
mawkish|形|感傷的すぎる|a [mawkish] film
meander|動|曲がりくねる|The river [meanders].
melee|名|乱闘|in the [melee]
mettle|名|気概|He proved his [mettle].
miasma|名|悪臭、悪い雰囲気|a [miasma] of fear
minutiae|名|細目|the [minutiae] of the law
miscreant|名|悪党|a band of [miscreants]
misanthrope|名|人間嫌い|He became a [misanthrope].
moribund|形|瀕死の、停滞した|a [moribund] industry
multifarious|形|多種多様な|[multifarious] activities
mutable|形|変わりやすい|[mutable] laws
neophyte|名|初心者|a political [neophyte]
nepotism|名|縁故主義|accusations of [nepotism]
noisome|形|悪臭のする|[noisome] fumes
nostrum|名|いんちき薬、妙案|a political [nostrum]
obloquy|名|悪評、非難|subjected to [obloquy]
obtuse|形|鈍感な|Don't be [obtuse].
obviate|動|〜を不要にする|This [obviates] the need for a meeting.
occlude|動|〜をふさぐ|an [occluded] artery
onus|名|責任、負担|The [onus] is on you.
opprobrium|名|非難、汚名|public [opprobrium]
ossify|動|硬直化する|[ossified] institutions
overweening|形|うぬぼれた|[overweening] pride
pallid|形|青白い|a [pallid] face
panache|名|堂々とした態度|with [panache]
pariah|名|のけ者|a social [pariah]
parochial|形|偏狭な|[parochial] views
parody|名|パロディー|a [parody] of the film
parsimony|名|けち、極度の倹約|known for his [parsimony]
pathos|名|哀感|the [pathos] of the scene
peccadillo|名|ささいな過ち|youthful [peccadilloes]
pejorative|形|軽蔑的な|a [pejorative] term
penury|名|極貧|living in [penury]
peripatetic|形|渡り歩く|a [peripatetic] life
pithy|形|簡潔で要を得た|a [pithy] comment
plaudit|名|称賛|won [plaudits]
plebeian|形|庶民の|[plebeian] tastes
plenitude|名|豊富|a [plenitude] of food
polemic|名|論争、論駁|a fierce [polemic]
pontificate|動|偉そうに語る|He likes to [pontificate].
portent|名|前兆|a [portent] of disaster
precept|名|教訓|moral [precepts]
preen|動|めかしこむ、得意がる|He [preened] in front of the mirror.
preternatural|形|異常な、超自然の|[preternatural] calm
progeny|名|子孫|his numerous [progeny]
prolix|形|冗長な|a [prolix] report
propinquity|名|近接、近さ|[propinquity] of interests
propitiate|動|〜をなだめる|to [propitiate] the gods
puerile|形|子どもじみた|[puerile] humor
putrid|形|腐敗した|[putrid] meat
quagmire|名|泥沼|a political [quagmire]
quiescent|形|静止した、休止中の|a [quiescent] volcano
quip|名|気のきいた言葉|a witty [quip]
quotidian|形|日常の|[quotidian] life
raconteur|名|話し上手|a skilled [raconteur]
rancorous|形|恨みのこもった|a [rancorous] debate
rapprochement|名|和解、国交回復|a [rapprochement] between the nations
rarefied|形|高尚な、（空気が）薄い|the [rarefied] world of art
regale|動|〜を楽しませる|He [regaled] us with stories.
rejoinder|名|返答、反論|a sharp [rejoinder]
remonstrate|動|抗議する|He [remonstrated] with her.
repast|名|食事|a light [repast]
replete|形|満ちた|[replete] with errors
reprobate|名|ならず者|an old [reprobate]
repugnant|形|ひどく不快な|a [repugnant] idea
resplendent|形|まばゆい|[resplendent] in gold
restive|形|落ち着かない|a [restive] crowd
retinue|名|随行員|the king's [retinue]
riposte|名|当意即妙の返答|a quick [riposte]
rotund|形|丸々とした|a [rotund] man
rubric|名|指示、題目|under the [rubric] of reform
ruse|名|策略|It was a [ruse].
sacrosanct|形|神聖不可侵の|Weekends are [sacrosanct].
salubrious|形|健康によい|a [salubrious] climate
saturnine|形|陰気な|a [saturnine] face
scintilla|名|微量|not a [scintilla] of evidence
scurrilous|形|口汚い、中傷的な|[scurrilous] rumors
sedition|名|扇動|charged with [sedition]
sententious|形|説教じみた|a [sententious] tone
sinecure|名|閑職|a political [sinecure]
skulduggery|名|不正、ごまかし|political [skulduggery]
slake|動|（渇きを）いやす|to [slake] one's thirst
sobriquet|名|あだ名|He earned the [sobriquet] "the Iron Man".
solecism|名|語法違反、無作法|a grammatical [solecism]
somnolent|形|眠気を誘う|a [somnolent] afternoon
sophistry|名|詭弁|mere [sophistry]
sordid|形|浅ましい、汚い|a [sordid] affair
spendthrift|名|浪費家|He is a [spendthrift].
stolid|形|感情を表さない|a [stolid] face
sublimate|動|〜を昇華させる|He [sublimated] his anger into art.
succor|名|救助、援助|to give [succor] to the poor
sullen|形|むっつりした|a [sullen] teenager
supine|形|あおむけの、無気力な|lying [supine]
surfeit|名|過剰|a [surfeit] of food
temperance|名|節制|a life of [temperance]
toady|名|おべっか使い|the boss's [toady]
tortuous|形|曲がりくねった、回りくどい|a [tortuous] road
tremulous|形|震える|a [tremulous] voice
trenchant|形|鋭い、痛烈な|[trenchant] criticism
turgid|形|仰々しい|[turgid] prose
upshot|名|結果|The [upshot] was a new plan.
urbane|形|洗練された|an [urbane] man
vagary|名|気まぐれ、予測できない変化|the [vagaries] of the weather
variegated|形|まだらの、多様な|[variegated] leaves
vaunt|動|〜を自慢する|his much-[vaunted] plan
verdant|形|緑豊かな|[verdant] hills
vernacular|名|方言、日常語|in the local [vernacular]
vicissitude|名|移り変わり、浮き沈み|the [vicissitudes] of life
virtuoso|名|名人|a piano [virtuoso]
visceral|形|本能的な、内臓の|a [visceral] reaction
vitiate|動|〜を損なう|The error [vitiates] the results.
vivacious|形|快活な|a [vivacious] girl
volition|名|意志|of her own [volition]
voluble|形|口達者な|a [voluble] speaker
waylay|動|〜を待ち伏せする|He was [waylaid] by reporters.
welter|名|ごたまぜ|a [welter] of information
wheedle|動|〜をうまく言いくるめる|She [wheedled] money out of him.
winsome|形|魅力的な|a [winsome] smile
wizened|形|しなびた|a [wizened] old man
wont|形|〜するのが常で|as he was [wont] to do
wry|形|皮肉な、ゆがんだ|a [wry] smile`,5);
})();
