// 英検準1級レベル 単語（第1弾）― 例文はすべてこのアプリ用に作成
(function(){
const D=window.EIGO_DATA;
const have=new Set();for(const d of D.decks)if(d.type==='vocab'&&!/^kw|^w|^conf|^phon|^roots/.test(d.id))d.items.forEach(i=>have.add(String(i.w).toLowerCase()));
let deck=D.decks.find(d=>d.id==='p1');
if(!deck){deck={id:'p1',type:'vocab',title:'英検準1級 単語',sub:'社会・科学・ニュースで使われる上級語彙',stage:50,items:[]};D.decks.push(deck)}
window.__P1=function(txt,lv){txt.split('\n').filter(Boolean).forEach(l=>{const [w,pos,m,ex]=l.split('|');if(have.has(w.toLowerCase()))return;have.add(w.toLowerCase());const it={k:'p1:'+w,w,pos,m,ex};if(lv)it.lv=lv;deck.items.push(it)})};
window.__P1(`allegation|名|（証拠のない）申し立て、疑惑|The minister denied the [allegations] of bribery.
coerce|動|〜に強要する|He was [coerced] into signing the contract.
commemorate|動|〜を記念する|A statue was built to [commemorate] the victims.
complacent|形|現状に満足しきった、油断した|We can't afford to be [complacent] about safety.
condone|動|〜を大目に見る、容認する|The school does not [condone] bullying of any kind.
confiscate|動|〜を没収する|The teacher [confiscated] his phone during the test.
embezzle|動|〜を横領する|The accountant [embezzled] millions from the company.
exempt|形|免除された|Students are [exempt] from the fee.
forfeit|動|〜を失う、没収される|If you cancel late, you [forfeit] your deposit.
gratify|動|〜を満足させる|She was [gratified] by the warm response.
incur|動|（損失・費用など）を負う、招く|The company [incurred] heavy losses last year.
infringe|動|（権利など）を侵害する|The law may [infringe] on freedom of speech.
persevere|動|根気よく続ける|She [persevered] despite many setbacks.
retaliate|動|報復する|The country [retaliated] with higher tariffs.
revoke|動|〜を取り消す、無効にする|His driver's license was [revoked].
turmoil|名|混乱、騒動|The country was in political [turmoil].
zealous|形|熱心な、熱狂的な|She is a [zealous] supporter of animal rights.
abate|動|弱まる、和らぐ|We waited for the storm to [abate].
aberration|名|逸脱、異常|The poor result was an [aberration], not a trend.
abhor|動|〜をひどく嫌う|I [abhor] violence of any kind.
abrupt|形|突然の；ぶっきらぼうな|The meeting came to an [abrupt] end.
abstain|動|控える；（投票を）棄権する|Three members [abstained] from voting.
accentuate|動|〜を強調する、目立たせる|The lighting [accentuates] the colors of the painting.
acclaim|名|称賛|The film won international [acclaim].
accomplice|名|共犯者|Police arrested the thief and his [accomplice].
acquit|動|〜を無罪にする|The jury [acquitted] her of all charges.
adamant|形|断固とした、譲らない|He was [adamant] that he had done nothing wrong.
adjourn|動|（会議などを）休会する|The meeting was [adjourned] until Monday.
adversary|名|敵、対戦相手|He respected his political [adversaries].
advocate|動|〜を主張する、支持する|Many doctors [advocate] a plant-based diet.
affluent|形|裕福な|They live in an [affluent] neighborhood.
aggravate|動|〜を悪化させる|Stress can [aggravate] the symptoms.
alleviate|動|（苦痛など）を和らげる|This medicine helps [alleviate] pain.
allot|動|〜を割り当てる|Each speaker was [allotted] ten minutes.
ambivalent|形|相反する感情をもつ|I feel [ambivalent] about moving abroad.
amenity|名|（生活の）便利な設備|The hotel has excellent [amenities].
amiable|形|愛想のよい、親しみやすい|He is an [amiable] young man.
ample|形|十分な、豊富な|There is [ample] evidence to support the theory.
anecdote|名|逸話|He told an amusing [anecdote] about his childhood.
animosity|名|敵意、憎しみ|There is no [animosity] between the two teams.
annihilate|動|〜を全滅させる|The army was [annihilated] in the battle.
annul|動|〜を無効にする|The marriage was [annulled].
antagonize|動|〜に反感を抱かせる|Try not to [antagonize] your boss.
apathy|名|無関心|Voter [apathy] is a serious problem.
appease|動|〜をなだめる|The government tried to [appease] the protesters.
apprehensive|形|不安な、心配して|She was [apprehensive] about the surgery.
aptitude|名|適性、素質|He has a natural [aptitude] for music.
arduous|形|困難な、骨の折れる|It was an [arduous] climb to the summit.
ascertain|動|〜を確かめる|Police are trying to [ascertain] the cause of the fire.
assail|動|〜を激しく攻撃・非難する|The plan was [assailed] by critics.
astute|形|抜け目のない、鋭い|She is an [astute] businesswoman.
atrocity|名|残虐行為|The world condemned the [atrocities] of the war.
audacious|形|大胆な、向こう見ずな|It was an [audacious] plan to cross the ocean alone.
austere|形|厳しい、質素な|They lived an [austere] life in the mountains.
avert|動|〜を避ける、防ぐ|Quick action [averted] a disaster.
banish|動|〜を追放する|He was [banished] from the kingdom.
belittle|動|〜を見くびる、けなす|Don't [belittle] other people's efforts.
benign|形|良性の；温和な|Fortunately, the tumor was [benign].
bewilder|動|〜を当惑させる|The instructions [bewildered] us.
blatant|形|露骨な、見え透いた|It was a [blatant] lie.
bleak|形|暗い、希望のない|The economic outlook is [bleak].
blunder|名|大失敗|Leaving the door open was a costly [blunder].
boisterous|形|騒々しい、元気のいい|The [boisterous] children ran around the park.
bountiful|形|豊富な|We had a [bountiful] harvest this year.
brittle|形|もろい、壊れやすい|Old bones become [brittle].
bustling|形|にぎやかな、活気のある|We walked through the [bustling] market.
callous|形|冷淡な、無神経な|His [callous] remarks hurt many people.
camouflage|名|カモフラージュ、偽装|The insect's color is a perfect [camouflage].
candor|名|率直さ|I appreciate your [candor].
capitulate|動|降伏する、屈する|The company finally [capitulated] to the workers' demands.
captivate|動|〜を魅了する|The audience was [captivated] by her voice.
censure|動|〜を（公式に）非難する|The senator was [censured] for his behavior.
chronic|形|慢性の|She suffers from [chronic] back pain.
circumvent|動|〜を回避する、うまく逃れる|They tried to [circumvent] the rules.
clandestine|形|秘密の、内密の|They held [clandestine] meetings at night.
clemency|名|寛大な処置、恩赦|The prisoner asked for [clemency].
coalition|名|連立、連合|The two parties formed a [coalition] government.
cognitive|形|認知の|Sleep is important for [cognitive] function.
collateral|名|担保|He used his house as [collateral] for the loan.
collude|動|共謀する|The companies [colluded] to fix prices.
compassion|名|思いやり、同情|She treats her patients with [compassion].
compensate|動|償う、補う|Nothing can [compensate] for the loss of a child.
complicity|名|共謀、加担|He denied any [complicity] in the crime.
comply|動|（規則などに）従う|All visitors must [comply] with the rules.
concise|形|簡潔な|Please keep your answers [concise].
conciliatory|形|なだめるような、融和的な|He made a [conciliatory] gesture to his rivals.
concur|動|同意する|I [concur] with your opinion.
condescending|形|見下すような|I don't like his [condescending] tone.
conducive|形|（〜に）役立つ、助けとなる|A quiet room is [conducive] to study.
confer|動|相談する；〜を授与する|The doctors [conferred] before making a decision.
congenial|形|気の合う、快い|We worked in a [congenial] atmosphere.
conjecture|名|推測|The cause remains a matter of [conjecture].
connoisseur|名|鑑定家、通|He is a [connoisseur] of fine wine.
conscientious|形|良心的な、誠実な|She is a [conscientious] worker.
consolidate|動|〜を強化する、統合する|The company [consolidated] its position in the market.
conspire|動|共謀する、たくらむ|They [conspired] to overthrow the king.
contend|動|争う；〜と主張する|Some scientists [contend] that the theory is wrong.
contentious|形|議論を呼ぶ|Immigration is a [contentious] issue.
contingency|名|不測の事態|We have a plan for every [contingency].
convene|動|（会議を）召集する、集まる|The committee will [convene] next week.
cordial|形|心からの、友好的な|We received a [cordial] welcome.
corroborate|動|〜を裏づける|Witnesses [corroborated] his story.
covert|形|秘密の、隠れた|The agency carried out [covert] operations.
covet|動|〜をむやみに欲しがる|He [coveted] his neighbor's car.
credulous|形|信じやすい、だまされやすい|[Credulous] people are easy targets for scams.
culminate|動|ついに〜となる|Years of research [culminated] in a major discovery.
culprit|名|犯人；原因|Sugar is often the [culprit] behind tooth decay.
cumbersome|形|扱いにくい、厄介な|The [cumbersome] procedure takes weeks.
cunning|形|ずる賢い|The fox is a [cunning] animal.
daunting|形|気力をくじくような、手ごわい|Learning a new language can be [daunting].
dearth|名|不足、欠乏|There is a [dearth] of doctors in rural areas.
debilitate|動|〜を衰弱させる|The disease [debilitated] him for months.
decimate|動|〜を大量に殺す、激減させる|The population was [decimated] by disease.
decipher|動|〜を解読する|I can't [decipher] his handwriting.
decree|名|法令、布告|The president issued a [decree].
defer|動|延期する；（〜に）従う|Payment can be [deferred] until next month.
defiant|形|反抗的な|The [defiant] teenager refused to apologize.
deficient|形|不足した|His diet is [deficient] in vitamins.
defunct|形|廃止された、消滅した|The company is now [defunct].
deluge|名|大洪水；殺到|We received a [deluge] of complaints.
delve|動|掘り下げる、探究する|The book [delves] into the history of science.
demise|名|消滅、死去|The [demise] of the newspaper surprised many.
denounce|動|〜を公然と非難する|Leaders [denounced] the attack.
deplore|動|〜を強く非難する、嘆く|We [deplore] the use of violence.
deport|動|〜を国外追放する|He was [deported] for overstaying his visa.
deprive|動|〜から奪う|The war [deprived] children of education.
deride|動|〜をあざける|His ideas were [derided] at first.
desolate|形|荒れ果てた、寂しい|The village was [desolate] after the war.
destitute|形|極貧の|The disaster left thousands [destitute].
deteriorate|動|悪化する|His health [deteriorated] rapidly.
devastate|動|〜を壊滅させる；打ちのめす|The hurricane [devastated] the coast.
dexterity|名|器用さ|Playing the piano requires [dexterity].
dilapidated|形|荒れ果てた、崩れかけた|They bought a [dilapidated] old house.
dilemma|名|板ばさみ、ジレンマ|She faced a difficult [dilemma].
diminish|動|減少する、〜を減らす|The pain gradually [diminished].
discern|動|〜を見分ける、識別する|It is hard to [discern] the truth.
disdain|名|軽蔑|She looked at him with [disdain].
disparity|名|格差、相違|There is a growing [disparity] between rich and poor.
dispel|動|（不安などを）払いのける|The report [dispelled] fears of a crisis.
disseminate|動|（情報などを）広める|The internet helps [disseminate] information.
distort|動|〜をゆがめる|The media [distorted] his words.
divert|動|〜をそらす、迂回させる|Traffic was [diverted] because of the accident.
divulge|動|（秘密を）漏らす|He refused to [divulge] his sources.
docile|形|従順な、おとなしい|The dog is very [docile].
dormant|形|休止中の、眠っている|The volcano has been [dormant] for centuries.
drastic|形|思い切った、徹底的な|[Drastic] measures are needed.
dwindle|動|だんだん減る|The number of farmers is [dwindling].
eccentric|形|風変わりな|He is an [eccentric] old man.
elicit|動|（反応などを）引き出す|The question [elicited] a strong response.
elusive|形|捕まえにくい、とらえどころのない|Success remained [elusive].
emancipate|動|〜を解放する|Slaves were [emancipated] in 1863.
embargo|名|禁輸措置|The country imposed an [embargo] on oil.
embellish|動|〜を飾る；話を誇張する|He [embellished] the story to make it funnier.
emulate|動|〜を見習う、張り合う|Young players try to [emulate] their heroes.
encroach|動|侵入する、侵害する|The city is [encroaching] on farmland.
endemic|形|（地域）特有の、風土の|The disease is [endemic] to this region.
enhance|動|〜を高める|Good lighting [enhances] the room.
enrage|動|〜を激怒させる|The decision [enraged] the fans.
ensue|動|続いて起こる|A long argument [ensued].
entice|動|〜を誘惑する、誘い込む|Low prices [entice] customers.
entrenched|形|定着した、根強い|[Entrenched] attitudes are hard to change.
epitome|名|典型、縮図|She is the [epitome] of elegance.
equivocal|形|あいまいな|He gave an [equivocal] answer.
erratic|形|不規則な、気まぐれな|His behavior has become [erratic].
erroneous|形|誤った|The report was based on [erroneous] data.
escalate|動|段階的に拡大する|The conflict [escalated] into war.
evade|動|〜を逃れる、回避する|He tried to [evade] the question.
exacerbate|動|〜を悪化させる|The drought [exacerbated] the food shortage.
exasperate|動|〜をひどくいらだたせる|His constant lateness [exasperated] her.
exemplary|形|模範的な|Her behavior was [exemplary].
exhilarating|形|爽快な、うきうきさせる|Skiing is an [exhilarating] experience.
exonerate|動|〜の容疑を晴らす|New evidence [exonerated] him.
exorbitant|形|法外な|The prices at the hotel were [exorbitant].
expedite|動|〜を促進する、はかどらせる|We need to [expedite] the process.
explicit|形|明白な、明示的な|The instructions were [explicit].
exploit|動|〜を利用する；搾取する|Workers were [exploited] by the factory owners.
extol|動|〜を称賛する|The critics [extolled] the new film.
extravagant|形|浪費する、ぜいたくな|She has [extravagant] tastes.
fallacy|名|誤った考え、誤謬|It is a [fallacy] that money brings happiness.
falter|動|ためらう、ぐらつく|Her voice [faltered] as she spoke.
fathom|動|〜を理解する（否定文で）|I can't [fathom] why he did it.
feeble|形|弱々しい|He gave a [feeble] excuse.
fervent|形|熱烈な|She is a [fervent] supporter of the team.
fickle|形|気まぐれな、移り気な|Fashion is [fickle].
flagrant|形|目に余る、はなはだしい|It was a [flagrant] violation of the rules.
flaunt|動|〜を見せびらかす|He likes to [flaunt] his wealth.
flourish|動|繁栄する、栄える|The arts [flourished] during that period.
foremost|形|一番の、主要な|She is one of the [foremost] experts in the field.
foresee|動|〜を予見する|No one could [foresee] the crisis.
formidable|形|手ごわい、恐るべき|They faced a [formidable] opponent.
foster|動|〜を育成する、促進する|Schools should [foster] creativity.
fraudulent|形|詐欺の、不正な|He was arrested for [fraudulent] activities.
frivolous|形|軽薄な、くだらない|Don't waste money on [frivolous] things.
gallant|形|勇敢な；（女性に）親切な|He made a [gallant] effort to save the child.
garner|動|（支持などを）集める|The proposal [garnered] wide support.
gauge|動|〜を測る、評価する|It's hard to [gauge] public opinion.
genuine|形|本物の、心からの|She showed [genuine] concern.
glean|動|（情報を）少しずつ集める|We [gleaned] information from various sources.
gloomy|形|暗い、陰気な|The forecast is [gloomy].
grievance|名|不満、苦情|Workers aired their [grievances].
gullible|形|だまされやすい|Don't be so [gullible].
haphazard|形|無計画な、行き当たりばったりの|The books were arranged in a [haphazard] way.
harass|動|〜を悩ませる、嫌がらせをする|She was [harassed] by reporters.
haughty|形|傲慢な|He gave a [haughty] reply.
hazardous|形|危険な|[Hazardous] waste must be handled carefully.
heed|動|〜に注意する、耳を傾ける|He didn't [heed] my warning.
hereditary|形|遺伝性の；世襲の|The disease is [hereditary].
hinder|動|〜を妨げる|Bad weather [hindered] the rescue.
hoard|動|〜をため込む|People [hoarded] food before the storm.
hostility|名|敵意|There was open [hostility] between them.
hypothetical|形|仮定の|Let's consider a [hypothetical] situation.
idle|形|何もしていない、使われていない|The machines stood [idle].
illicit|形|不法な|[Illicit] drugs were found in the car.
imminent|形|差し迫った|The storm is [imminent].
impartial|形|公平な|Judges must be [impartial].
impeccable|形|欠点のない、完璧な|Her English is [impeccable].
impending|形|差し迫った|They were unaware of the [impending] danger.
imperative|形|必須の、緊急の|It is [imperative] that we act now.
impetus|名|勢い、推進力|The new law gave [impetus] to reform.
implausible|形|信じがたい|His excuse was [implausible].
implicate|動|〜を関与させる|He was [implicated] in the scandal.
impoverished|形|貧困に陥った|They grew up in an [impoverished] area.
impromptu|形|即興の|He gave an [impromptu] speech.
inadvertently|副|うっかり、不注意に|I [inadvertently] deleted the file.
incessant|形|絶え間ない|The [incessant] noise kept me awake.
incite|動|〜を扇動する|He was accused of [inciting] violence.
incumbent|名|現職者|The [incumbent] won the election again.
indignant|形|憤慨した|She was [indignant] at the unfair treatment.
indiscriminate|形|無差別の|The [indiscriminate] use of pesticides harms wildlife.
indispensable|形|不可欠な|Water is [indispensable] to life.
induce|動|〜を誘発する、説いて〜させる|The drug may [induce] sleep.
indulge|動|ふける、甘やかす|I sometimes [indulge] in chocolate.
inept|形|不器用な、無能な|He is [inept] at handling money.
inexorable|形|容赦のない、止められない|the [inexorable] rise of prices
infamous|形|悪名高い|The prison is [infamous] for its harsh conditions.
influx|名|流入、殺到|The town saw an [influx] of tourists.
ingenious|形|独創的な、巧妙な|It was an [ingenious] solution.
inherent|形|本来備わっている、固有の|There are risks [inherent] in any investment.
innate|形|生まれつきの|She has an [innate] talent for music.
innocuous|形|無害な|The question seemed [innocuous].
insatiable|形|飽くことのない|He has an [insatiable] appetite for knowledge.
instigate|動|〜を扇動する、始める|The police [instigated] an investigation.
insurmountable|形|克服できない|The problems seemed [insurmountable].
intact|形|無傷の、損なわれていない|The vase survived [intact].
intimidate|動|〜を脅す、おじけづかせる|Don't let them [intimidate] you.
intrepid|形|勇敢な、恐れを知らない|The [intrepid] explorers crossed the desert.
intrinsic|形|本質的な、固有の|the [intrinsic] value of education
intrude|動|押し入る、邪魔をする|I'm sorry to [intrude] on your privacy.
invoke|動|（法などに）訴える、発動する|The president [invoked] emergency powers.
irrevocable|形|取り消せない|The decision is [irrevocable].
jeopardy|名|危険|Thousands of jobs are in [jeopardy].
judicious|形|思慮深い、賢明な|He made [judicious] use of his time.
lament|動|〜を嘆く、悲しむ|She [lamented] the loss of her friend.
latent|形|潜在的な|The virus can remain [latent] for years.
lavish|形|ぜいたくな、気前のよい|They held a [lavish] party.
legitimate|形|正当な、合法の|He had a [legitimate] reason for being absent.
lethal|形|致命的な|a [lethal] dose of poison
lethargic|形|無気力な、だるい|I feel [lethargic] after lunch.
linger|動|なかなか消えない、居残る|The smell [lingered] for days.
loathe|動|〜をひどく嫌う|I [loathe] getting up early.
lofty|形|非常に高い；高尚な|She has [lofty] ambitions.
magnanimous|形|寛大な|He was [magnanimous] in victory.
malicious|形|悪意のある|She spread [malicious] rumors.
mandatory|形|義務的な、強制の|Attendance is [mandatory].
meager|形|乏しい、わずかな|He earns a [meager] salary.
mediocre|形|平凡な、二流の|The food was [mediocre].
meddle|動|干渉する、おせっかいをする|Don't [meddle] in other people's affairs.
menace|名|脅威|Drunk drivers are a [menace] to society.
mimic|動|〜のまねをする|The parrot can [mimic] human speech.
misgiving|名|不安、疑念|I have [misgivings] about the plan.
mundane|形|平凡な、日常的な|He was tired of his [mundane] job.
negligent|形|怠慢な|The doctor was found [negligent].
nominal|形|名目上の；ごくわずかな|They charge a [nominal] fee.
nostalgic|形|郷愁の、懐かしい|The song makes me feel [nostalgic].
nurture|動|〜を育てる、育成する|Parents [nurture] their children's talents.
oblivious|形|気づかない|He was [oblivious] to the danger.
obscure|形|あいまいな；無名の|The meaning of the poem is [obscure].
obstinate|形|頑固な|He is too [obstinate] to admit his mistake.
onset|名|始まり、開始|the [onset] of winter
opulent|形|豪華な、裕福な|They live in an [opulent] mansion.
ostensibly|副|表向きは|He came, [ostensibly] to help, but really to watch.
ostracize|動|〜を仲間はずれにする|He was [ostracized] by his classmates.
outlandish|形|風変わりな、とっぴな|She wore an [outlandish] hat.
outright|副|完全に、きっぱりと|He refused [outright].
overt|形|公然の、明白な|There was [overt] hostility between them.
painstaking|形|骨の折れる、入念な|It took [painstaking] research to find the answer.
palpable|形|明白な、手に取るようにわかる|The tension in the room was [palpable].
paramount|形|最高の、最重要の|Safety is of [paramount] importance.
pathetic|形|哀れな；情けない|It was a [pathetic] excuse.
peculiar|形|奇妙な；特有の|There's a [peculiar] smell in the kitchen.
perennial|形|長続きする、絶え間ない|Traffic is a [perennial] problem.
peril|名|危険|They were in great [peril].
perpetrate|動|（悪事を）犯す|The crime was [perpetrated] by a gang.
perpetual|形|永続する、絶え間ない|He lives in [perpetual] fear.
perplexed|形|当惑した|She looked [perplexed] by the question.
pertinent|形|関連のある、適切な|Please ask only [pertinent] questions.
pervasive|形|広がった、浸透した|the [pervasive] influence of social media
petty|形|ささいな、つまらない|Let's not argue about [petty] things.
placate|動|〜をなだめる|He tried to [placate] the angry customer.
plight|名|苦境|the [plight] of refugees
plummet|動|急落する|Prices [plummeted] after the scandal.
poignant|形|心を打つ、痛切な|It was a [poignant] moment.
ponder|動|〜をよく考える|She [pondered] the question for a while.
potent|形|強力な、効き目のある|a [potent] drug
pragmatic|形|実際的な、実用的な|We need a [pragmatic] approach.
precede|動|〜に先行する|A short speech [preceded] the dinner.
precipitate|動|〜を急に引き起こす|The scandal [precipitated] his resignation.
predicament|名|苦境、窮地|She is in a difficult [predicament].
preliminary|形|予備の、準備の|[Preliminary] results look promising.
premise|名|前提|The theory is based on a false [premise].
preposterous|形|ばかげた、途方もない|That's a [preposterous] idea.
prerequisite|名|前提条件|A good command of English is a [prerequisite] for the job.
prestigious|形|名声のある、一流の|She graduated from a [prestigious] university.
presume|動|〜と推定する、思う|I [presume] you know the rules.
pretext|名|口実|He left early on the [pretext] of illness.
prevalent|形|広く行き渡った、流行している|The disease is [prevalent] in tropical areas.
pristine|形|手つかずの、新品同様の|The beach was [pristine].
proclaim|動|〜を宣言する|The country [proclaimed] its independence.
procrastinate|動|ぐずぐず先延ばしにする|Stop [procrastinating] and start your homework.
prodigy|名|天才、神童|She was a piano [prodigy].
profound|形|深い、深遠な|The book had a [profound] effect on me.
proliferate|動|急増する|Fast-food restaurants have [proliferated].
prolific|形|多作な、多産な|He was a [prolific] writer.
prominent|形|著名な；目立つ|She is a [prominent] scientist.
propagate|動|〜を広める；繁殖させる|They used the radio to [propagate] their ideas.
propensity|名|傾向、性癖|He has a [propensity] to exaggerate.
prosper|動|繁栄する|The town [prospered] thanks to tourism.
provisional|形|暫定的な、仮の|a [provisional] government
prowess|名|優れた能力、腕前|his athletic [prowess]
pungent|形|（においが）刺激の強い|the [pungent] smell of garlic
quell|動|〜を鎮める、鎮圧する|Police [quelled] the riot.
rampant|形|はびこる、蔓延した|Corruption is [rampant] in the city.
rebuke|動|〜を叱責する|The coach [rebuked] the players for being late.
recluse|名|世捨て人、隠遁者|He became a [recluse] after his wife died.
reconcile|動|〜を和解させる、調和させる|It's hard to [reconcile] work and family.
rectify|動|〜を改正する、正す|We must [rectify] the mistake.
redundant|形|余分な；解雇された|Several workers were made [redundant].
refrain|動|控える|Please [refrain] from smoking.
regime|名|政権、体制|The [regime] collapsed in 1989.
reimburse|動|〜を払い戻す|The company will [reimburse] your travel expenses.
reiterate|動|〜を繰り返して言う|He [reiterated] his support for the plan.
relentless|形|容赦ない、絶え間ない|the [relentless] heat of summer
relish|動|〜を楽しむ、好む|She [relishes] a challenge.
remedy|名|治療法、改善策|There is no simple [remedy] for poverty.
remnant|名|残り、名残|the [remnants] of an ancient wall
remorse|名|後悔、良心の呵責|He showed no [remorse] for his crime.
renounce|動|〜を放棄する|He [renounced] his citizenship.
renowned|形|有名な|The city is [renowned] for its architecture.
repercussion|名|（悪い）影響、反響|The decision had serious [repercussions].
reprimand|動|〜を叱責する|He was [reprimanded] for his mistake.
repudiate|動|〜を否認する、拒絶する|She [repudiated] the accusations.
resent|動|〜に憤慨する|He [resented] being treated like a child.
resolute|形|断固とした|She was [resolute] in her decision.
restrain|動|〜を抑える、制止する|He couldn't [restrain] his anger.
resurgence|名|復活、再燃|a [resurgence] of interest in vinyl records
reticent|形|口数の少ない、控えめな|He is [reticent] about his past.
revere|動|〜を崇拝する|He is [revered] as a national hero.
rigorous|形|厳格な、厳密な|The training is [rigorous].
robust|形|頑丈な、強固な|a [robust] economy
rudimentary|形|初歩の、基本的な|I have only a [rudimentary] knowledge of French.
ruthless|形|無慈悲な、冷酷な|a [ruthless] dictator
sanction|名|制裁；認可|The UN imposed [sanctions] on the country.
scant|形|乏しい、不十分な|He paid [scant] attention to the warning.
scrupulous|形|良心的な、細心の|She is [scrupulous] about her work.
secluded|形|人里離れた|a [secluded] beach
sedentary|形|座ってばかりの|A [sedentary] lifestyle is bad for health.
serene|形|穏やかな、静かな|a [serene] lake
skeptical|形|懐疑的な|Many scientists are [skeptical] of the claim.
slander|名|中傷|He sued the newspaper for [slander].
sober|形|しらふの；まじめな|He was completely [sober].
solicit|動|〜を求める、懇願する|They are [soliciting] donations.
somber|形|陰気な、地味な|The mood was [somber].
sparse|形|まばらな|The population is [sparse] in the north.
spontaneous|形|自発的な、自然に起こる|The audience burst into [spontaneous] applause.
sporadic|形|散発的な|There were [sporadic] outbreaks of violence.
squander|動|〜を浪費する|He [squandered] his inheritance.
stalemate|名|行き詰まり|The negotiations ended in a [stalemate].
staunch|形|忠実な、頑固な|a [staunch] supporter
stifle|動|〜を抑える、窒息させる|Too many rules [stifle] creativity.
stipulate|動|〜を規定する|The contract [stipulates] that payment must be made monthly.
strenuous|形|激しい、精力的な|Avoid [strenuous] exercise after eating.
stringent|形|厳しい、厳重な|[Stringent] safety rules are in place.
subdue|動|〜を抑える、征服する|Police [subdued] the attacker.
subordinate|名|部下|She treats her [subordinates] fairly.
subsequent|形|その後の|[Subsequent] studies confirmed the results.
substantiate|動|〜を立証する|He could not [substantiate] his claims.
subtle|形|微妙な、かすかな|There is a [subtle] difference between the two.
subversive|形|破壊的な、転覆を図る|[subversive] activities
succinct|形|簡潔な|Give a [succinct] summary.
superficial|形|表面的な、浅い|He has only a [superficial] knowledge of the subject.
supersede|動|〜に取って代わる|The old law was [superseded] by a new one.
surmise|動|〜と推測する|I [surmised] that he was angry.
surreptitious|形|ひそかな、内密の|She took a [surreptitious] look at her phone.
susceptible|形|影響を受けやすい、かかりやすい|Children are [susceptible] to colds.
sustain|動|〜を維持する、支える|The economy cannot [sustain] this growth.
tactful|形|如才ない、気配りのある|She gave a [tactful] reply.
tangible|形|具体的な、実体のある|We need [tangible] results.
tarnish|動|（名誉など）を汚す|The scandal [tarnished] his reputation.
tenacious|形|粘り強い|She is a [tenacious] negotiator.
tenuous|形|薄弱な、もろい|The connection between the events is [tenuous].
thwart|動|〜を阻止する、くじく|Police [thwarted] the robbery.
timid|形|臆病な、内気な|He is too [timid] to speak up.
tranquil|形|静かな、穏やかな|a [tranquil] village
transient|形|一時的な、はかない|[transient] workers
trivial|形|ささいな、つまらない|Don't worry about [trivial] matters.
ubiquitous|形|どこにでもある|Smartphones are now [ubiquitous].
unprecedented|形|前例のない|The pandemic caused [unprecedented] disruption.
unscrupulous|形|悪徳な、恥知らずの|[unscrupulous] businessmen
upheaval|名|大変動、激変|a period of political [upheaval]
utmost|形|最大限の|a matter of the [utmost] importance
vehement|形|激しい、熱烈な|He made a [vehement] protest.
venerable|形|尊敬すべき、由緒ある|a [venerable] institution
verdict|名|評決、判断|The jury reached a [verdict].
viable|形|実行可能な、存続できる|Is the plan economically [viable]?
vicious|形|悪意のある、凶暴な|a [vicious] attack
vigilant|形|油断のない、警戒している|Stay [vigilant] at all times.
vindicate|動|〜の正しさを証明する|The results [vindicated] her decision.
volatile|形|不安定な、変わりやすい|The stock market is [volatile].
voracious|形|貪欲な、旺盛な|He is a [voracious] reader.
wary|形|用心深い|Be [wary] of strangers online.
whim|名|気まぐれ|She bought it on a [whim].
wither|動|しおれる、衰える|The flowers [withered] in the heat.
wreak|動|（損害などを）与える|The storm [wreaked] havoc on the town.
`);
})();
