// TOEFL ITP リーディング（Section 3 形式・オリジナル長文）
// 問題行: 設問|正解|誤答1|誤答2|誤答3|解説|本文中で強調する語句(任意)
(function(){
const P=[];
function R(id,title,topic,text,qs){
  const paras=text.trim().split(/\n\s*\n/).map(s=>s.replace(/\s+/g,' ').trim());
  const items=qs.trim().split('\n').map((l,i)=>{const a=l.split('|');return {k:'r:'+id+':'+i,q:a[0],c:a.slice(1,5),e:a[5],hl:a[6]||''}});
  P.push({id,title,topic,paras,qs:items});
}

R('monarch','オオカバマダラの渡り','生物',`
Every autumn, millions of monarch butterflies leave their summer breeding grounds in southern Canada and the northern United States and fly as far as 4,000 kilometers to a small group of mountain forests in central Mexico. The journey is remarkable not only for its length but also because no individual butterfly makes the round trip. The insects that arrive in Mexico are the great-grandchildren of those that left the previous spring.

For decades, scientists wondered how a butterfly that has never made the trip can find its way to a destination it has never seen. Research has shown that monarchs rely on a "sun compass." Special cells in their eyes detect the position of the sun, and an internal clock located in the antennae allows the butterflies to adjust for the sun's movement across the sky during the day. When researchers painted the antennae of monarchs with black paint, the insects lost their sense of direction.

The migrating generation also differs biologically from the summer generations. Summer monarchs live only two to six weeks, but the generation born in late summer enters a state called diapause, in which reproduction is delayed. These butterflies can survive for as long as eight months, long enough to fly south, spend the winter clustered on fir trees, and begin the return journey in spring.

Today the monarch's migration is under threat. Logging has reduced the forests where the butterflies spend the winter, and the widespread use of herbicides has destroyed much of the milkweed, the only plant on which monarch caterpillars can feed. Conservation groups are now encouraging people to plant milkweed in gardens along the migration route.`,`
What is the passage mainly about?|How monarch butterflies complete their migration and the dangers they face|Why monarch butterflies prefer Mexico to Canada|The life cycle of the milkweed plant|How scientists paint butterflies for research|第1段落で渡りを紹介し、第2・3段落で仕組み、第4段落で脅威を述べている。
According to paragraph 1, what is unusual about the migration?|No single butterfly completes the entire round trip.|The butterflies travel only at night.|The journey is more than 10,000 kilometers long.|Only the youngest butterflies migrate.|no individual butterfly makes the round trip とある。
The word "remarkable" in paragraph 1 is closest in meaning to|extraordinary|dangerous|ordinary|recent|remarkable＝注目すべき、並外れた。|remarkable
The word "it" in paragraph 2 refers to|a butterfly|the trip|a destination|the sun|「旅をしたことのない蝶が、見たこともない目的地へ」→ it は a butterfly。|it has never seen
According to paragraph 2, what happened when the antennae were painted black?|The butterflies could no longer navigate correctly.|The butterflies flew faster.|The butterflies stopped eating.|The butterflies could see the sun more clearly.|lost their sense of direction（方向感覚を失った）。
What can be inferred about butterflies in diapause?|They live much longer than summer butterflies.|They reproduce immediately after birth.|They cannot fly long distances.|They are born in early spring.|夏の世代は2〜6週間、休眠世代は最長8か月生きる。
Which of the following is NOT mentioned as a threat to monarchs?|Climate change|Logging|Herbicide use|Loss of milkweed|伐採・除草剤・トウワタの減少は述べられているが、気候変動は述べられていない。
Why does the author mention milkweed in paragraph 4?|To explain why its loss endangers monarchs|To describe where monarchs spend the winter|To show what adult butterflies drink|To compare it with fir trees|幼虫が食べられる唯一の植物なので、その減少が脅威になる。`);

R('glacier','氷河と地形','地学',`
Glaciers are large masses of ice that form over many years in places where more snow falls in winter than melts in summer. As layers of snow build up, the weight of the upper layers presses the lower snow into dense ice. When the ice becomes thick enough, it begins to move slowly downhill under the pull of gravity, sometimes advancing only a few centimeters a day.

Although glaciers move slowly, they are among the most powerful forces shaping the Earth's surface. As a glacier flows, it picks up rocks and soil, which become embedded in the ice. These materials act like sandpaper, scraping and grinding the bedrock beneath the glacier. Over thousands of years, this process can carve deep U-shaped valleys, quite different from the V-shaped valleys cut by rivers.

Glaciers also leave behind distinctive deposits when they melt. The unsorted mixture of clay, sand, and boulders that a glacier drops is called till. Ridges of till that mark the farthest point a glacier reached are known as terminal moraines. Long Island in New York, for example, consists largely of moraines left by an ice sheet that covered much of North America about 20,000 years ago.

Large boulders that were carried far from their original location are another sign of past glaciation. These rocks, called erratics, often differ completely from the local bedrock. Early geologists were puzzled by them, and some believed that they had been moved by great floods. It was not until the nineteenth century that scientists such as Louis Agassiz convinced others that ice had once covered vast areas of Europe and North America.`,`
What does the passage mainly discuss?|How glaciers form and change the landscape|Why glaciers are melting today|The history of Long Island|The life of Louis Agassiz|形成（第1段落）→ 浸食（第2段落）→ 堆積物（第3・4段落）。
According to paragraph 1, glaciers form when|more snow accumulates in winter than melts in summer|rivers freeze during the winter|rain falls on high mountains|the ground beneath them is very warm|more snow falls in winter than melts in summer。
The word "embedded" in paragraph 2 is closest in meaning to|fixed firmly|melted|washed away|hidden temporarily|embed＝埋め込む。|embedded
The author compares rocks in the ice to sandpaper in order to|explain how glaciers wear away bedrock|show that glaciers are smooth|describe the color of glacial ice|suggest that glaciers move quickly|scraping and grinding the bedrock（岩盤を削る）。
According to the passage, how do glacial valleys differ from river valleys?|Glacial valleys are U-shaped, while river valleys are V-shaped.|Glacial valleys are shallower.|River valleys contain more till.|River valleys form more slowly.|U字谷とV字谷の対比。
According to paragraph 3, terminal moraines are|ridges that mark the farthest advance of a glacier|large rocks moved by floods|deep valleys cut by ice|layers of compressed snow|mark the farthest point a glacier reached。
The word "them" in paragraph 4 refers to|erratics|geologists|floods|areas|当惑させたのは迷子石（erratics）。|puzzled by them
What can be inferred from paragraph 4?|Before the 1800s, many people did not believe that ice had covered large areas.|Most early geologists accepted the ice age theory.|Erratics were not discovered until the twentieth century.|Agassiz believed erratics were moved by floods.|19世紀になって初めて氷の説が受け入れられた → それ以前は信じられていなかった。`);

R('pony','ポニー・エクスプレス','アメリカ史',`
In April 1860, a new mail service called the Pony Express began operating between St. Joseph, Missouri, and Sacramento, California. At that time, letters sent from the East to California by ship or stagecoach often took a month or more to arrive. The Pony Express promised to deliver mail across nearly 3,000 kilometers in just ten days.

To achieve this speed, the company built a chain of about 190 stations along the route, spaced roughly 15 to 25 kilometers apart. At each station, a rider would quickly switch to a fresh horse, often in less than two minutes. After covering about 120 kilometers, the rider handed the mail bag to the next rider, who continued the journey day and night. Riders were chosen for their light weight and courage, since they had to cross deserts, mountains, and territory where conflicts were common.

Despite its fame, the Pony Express was a financial failure. The cost of maintaining hundreds of horses and paying riders was enormous, and the high price of sending a letter limited the number of customers. More importantly, the service soon became unnecessary. In October 1861, the first transcontinental telegraph line was completed, allowing messages to cross the continent in seconds. Just two days later, the Pony Express announced that it would close.

Although it lasted only about eighteen months, the Pony Express became a lasting symbol of the American West. Stories of its daring riders were retold in books and later in films, and the idea of fast, reliable delivery across great distances continues to capture the public imagination.`,`
What is the main topic of the passage?|The rise and fall of a short-lived mail service|The construction of the telegraph|Daily life in Sacramento|The training of horses in the West|開始・仕組み・失敗・遺産の流れ。
Before the Pony Express, mail from the East to California|often took a month or more to arrive|was delivered within ten days|was carried only by telegraph|could not be sent at all|took a month or more to arrive。
According to paragraph 2, riders were chosen because they|were light and brave|knew how to repair telegraph lines|owned their own horses|had lived in California|light weight and courage。
The word "who" in paragraph 2 refers to|the next rider|the first rider|the mail bag|the station|「次の乗り手に渡し、その人が旅を続けた」。|who continued
The word "enormous" in paragraph 3 is closest in meaning to|very large|unexpected|reasonable|hidden|enormous＝莫大な。|enormous
Which of the following is NOT given as a reason for the failure of the Pony Express?|Bad weather destroyed many stations.|It was expensive to operate.|Sending a letter cost a lot.|The telegraph line was completed.|悪天候については述べられていない。
It can be inferred from paragraph 3 that the telegraph|made fast delivery of messages by horse unnecessary|was slower than the Pony Express|was built by the Pony Express company|failed soon after it opened|電信の開通2日後に閉鎖を発表。
Paragraph 4 mainly discusses|the cultural legacy of the Pony Express|the cost of making films|the routes of modern mail services|the end of the telegraph|西部の象徴として語り継がれている。`);

R('coral','サンゴと白化現象','生物・環境',`
Coral reefs cover less than one percent of the ocean floor, yet they support about a quarter of all marine species. Although corals may look like plants or rocks, they are actually animals. Each coral is made up of tiny creatures called polyps, which build hard skeletons of calcium carbonate. Over centuries, millions of these skeletons accumulate to form massive reef structures.

Most reef-building corals live in a close partnership with microscopic algae that live inside their tissues. The algae use sunlight to produce food through photosynthesis and share much of it with the coral. In return, the coral provides the algae with shelter and nutrients. The algae also give corals their bright colors. Because the algae need light, reef-building corals generally grow in clear, shallow water.

This partnership, however, is sensitive to changes in the environment. When water temperatures rise even one or two degrees above normal for several weeks, corals expel their algae. Without the algae, the corals lose their color and appear white, a condition known as bleaching. Bleached corals are not dead, but they are weakened and may starve if normal conditions do not return quickly.

In recent decades, bleaching events have become more frequent and more severe as ocean temperatures have increased. Scientists are exploring ways to help reefs survive, such as breeding corals that can tolerate higher temperatures and transplanting them onto damaged reefs. Nevertheless, most researchers agree that the long-term survival of coral reefs depends on limiting the rise in global temperatures.`,`
What is the passage mainly about?|The partnership between corals and algae and the threat of bleaching|The colors of tropical fish|How to build artificial reefs|Why corals are classified as plants|共生関係と白化現象が中心。
According to paragraph 1, corals are|animals made up of polyps|a type of plant|rocks formed by volcanoes|algae that grow in deep water|they are actually animals ... polyps。
The word "accumulate" in paragraph 1 is closest in meaning to|build up|disappear|move away|break apart|accumulate＝蓄積する。|accumulate
The word "it" in paragraph 2 refers to|food|sunlight|photosynthesis|the coral|藻類は「食物」の多くをサンゴと分け合う。|share much of it
What do corals provide for the algae?|Shelter and nutrients|Sunlight|Food made by photosynthesis|Bright colors|the coral provides the algae with shelter and nutrients。
Why do reef-building corals usually grow in shallow water?|Their algae need sunlight.|Deep water is too warm.|Predators live in deep water.|Their skeletons are too heavy.|Because the algae need light。
According to paragraph 3, bleached corals|are weakened but still alive|are already dead|have gained more algae|grow faster than before|Bleached corals are not dead, but they are weakened。
What can be inferred from paragraph 4?|Breeding heat-tolerant corals alone may not be enough to save reefs.|Coral reefs will recover on their own.|Transplanting corals has solved the problem.|Bleaching has become less common.|Nevertheless 以下で、長期的には気温上昇の抑制が必要と述べている。`);

R('jazz','ジャズの誕生','芸術',`
Jazz is often described as the first truly American art form. It developed in the early twentieth century in New Orleans, a port city where people of African, European, and Caribbean backgrounds lived side by side. This mixture of cultures produced a rich musical environment in which brass bands, church music, blues, and ragtime could all be heard.

One of the defining features of jazz is improvisation. Rather than playing music exactly as written, jazz musicians create melodies spontaneously during a performance, responding to one another in a kind of musical conversation. Another important characteristic is syncopation, the practice of placing accents on beats that are normally weak, which gives jazz its lively, unpredictable rhythm.

In the 1920s, many musicians moved from New Orleans to cities such as Chicago and New York, where jazz reached a wider audience through phonograph records and radio broadcasts. Louis Armstrong, a trumpeter who had grown up in New Orleans, became one of the most influential figures of this period. His solos showed that an individual musician could be the center of a performance rather than simply part of an ensemble.

Over the following decades, jazz continued to change. The large "big bands" of the 1930s played music for dancing, while the bebop musicians of the 1940s favored fast, complex pieces intended for listening. Each new style was at first criticized by some fans of earlier forms, yet each eventually became accepted as part of the jazz tradition.`,`
What does the passage mainly discuss?|The origins and development of jazz|The life of Louis Armstrong|How radio changed American politics|Why New Orleans became a port city|起源（第1段落）から発展（第3・4段落）まで。
According to paragraph 1, New Orleans was a good birthplace for jazz because|it combined many cultural and musical traditions|it had the most radio stations|it was far from other cities|its people disliked European music|This mixture of cultures produced a rich musical environment。
The word "spontaneously" in paragraph 2 is closest in meaning to|without planning|very loudly|with great difficulty|in writing|spontaneously＝即興で、自然に。|spontaneously
Which of the following is NOT described as a feature of jazz?|Playing music exactly as written|Improvisation|Syncopation|Musicians responding to one another|Rather than playing music exactly as written とあり、楽譜どおりの演奏は特徴ではない。
The word "His" in paragraph 3 refers to|Louis Armstrong's|an individual musician's|New Orleans's|an ensemble's|直前の文の主語 Louis Armstrong。|His solos
According to paragraph 3, how did jazz reach a larger audience in the 1920s?|Through records and radio|Through church services|Through printed sheet music only|Through television|phonograph records and radio broadcasts。
What can be inferred about bebop?|It was less suitable for dancing than big band music.|It was the oldest form of jazz.|It was never accepted by jazz fans.|It was played mainly by big bands.|ビッグバンドは踊るため、ビバップは聴くための音楽。
According to paragraph 4, new styles of jazz|were often criticized at first but later accepted|were immediately popular with all fans|quickly disappeared|were created only in New Orleans|at first criticized ... eventually became accepted。`);

R('sleep','睡眠と記憶','心理学',`
For a long time, sleep was thought of as a period of rest in which the brain was largely inactive. Research over the past several decades, however, has shown that the sleeping brain is surprisingly busy. One of its most important tasks appears to be strengthening memories formed during the day.

In a typical experiment, participants learn a list of words or a new motor skill, such as a sequence of finger movements. Some are then allowed to sleep, while others stay awake for the same length of time. When both groups are tested later, those who slept usually perform better. This suggests that sleep does not simply protect memories from interference but actively helps to consolidate them.

Different stages of sleep seem to play different roles. During deep, slow-wave sleep, the brain appears to replay information from the day, transferring it from the hippocampus, a region involved in forming new memories, to the cortex, where it can be stored for the long term. Rapid eye movement (REM) sleep, the stage in which most vivid dreaming occurs, may help the brain find connections between pieces of information, which could explain why people sometimes wake up with a solution to a problem.

These findings have practical implications. Students who stay up all night before an exam may remember less than those who study for a shorter time and then sleep. Researchers caution, though, that much remains unknown about how sleep and memory interact, and that individuals differ in how much sleep they need.`,`
What is the main topic of the passage?|The role of sleep in forming memories|The causes of dreams|How to fall asleep quickly|The structure of the hippocampus|睡眠が記憶を強化するという内容。
According to paragraph 1, what was the older view of sleep?|The brain was mostly inactive during sleep.|Sleep weakened memories.|Sleep was unnecessary.|Dreams improved learning.|the brain was largely inactive。
The word "consolidate" in paragraph 2 is closest in meaning to|strengthen|erase|share|record|consolidate＝強化する、固める。|consolidate
In the experiment described in paragraph 2, participants who slept|generally performed better on later tests|forgot more information|learned fewer words|were tested earlier|those who slept usually perform better。
The word "it" in paragraph 3 refers to|information|the brain|the hippocampus|the cortex|日中の情報が皮質に長期保存される。|where it can be stored
According to paragraph 3, REM sleep may|help connect different pieces of information|transfer memories to the hippocampus|prevent dreaming|reduce the need for deep sleep|find connections between pieces of information。
Why does the author mention people who "wake up with a solution to a problem"?|To give an everyday example of the possible role of REM sleep|To show that dreams are always accurate|To criticize researchers|To describe a sleep disorder|REM睡眠の働きを身近な例で説明している。
What can be inferred from paragraph 4?|Studying all night is not the most effective way to prepare for an exam.|Students should not study before exams.|Everyone needs exactly eight hours of sleep.|Scientists fully understand sleep and memory.|徹夜組は短く勉強して眠った人より覚えていない可能性がある。`);

R('pueblo','崖の住居','文化人類学',`
Between about A.D. 1100 and 1300, a people now known as the Ancestral Puebloans built remarkable villages into the sides of cliffs in what is today the southwestern United States. The best-known examples are found at Mesa Verde in Colorado, where some dwellings contain more than 150 rooms.

The Ancestral Puebloans had not always lived in cliffs. For centuries they had farmed corn, beans, and squash on the flat tops of mesas, living first in pit houses dug partly into the ground and later in above-ground buildings made of stone. Only in the late twelfth century did many families move into the alcoves, or shallow caves, of the canyon walls.

Archaeologists have proposed several explanations for this move. The alcoves offered protection from rain and snow and stayed relatively cool in summer. Some researchers believe that defense was also a factor, since the dwellings were difficult to reach and could be entered only by ladders or narrow paths. Others point out that building in the cliffs left more of the flat land available for farming.

Within a few generations, however, the cliff dwellings were abandoned. By around 1300, the Ancestral Puebloans had migrated south to areas in present-day New Mexico and Arizona. Tree-ring evidence shows that a long drought struck the region in the late 1200s, which probably made farming extremely difficult. Population growth, conflict, and social changes may also have contributed. Their descendants, including the Hopi and other Pueblo peoples, still live in the Southwest today.`,`
What is the passage mainly about?|Why the Ancestral Puebloans built cliff dwellings and later left them|Modern farming in Colorado|The history of the Hopi language|How tree rings are measured|建設の理由（第3段落）と放棄（第4段落）。
Before moving into the cliffs, the Ancestral Puebloans lived|on the tops of mesas|in large cities by the sea|in caves near rivers|in tents|on the flat tops of mesas。
In paragraph 2, the word "alcoves" is explained as|shallow caves|large rivers|farm fields|stone towers|alcoves, or shallow caves（or で言い換え）。|alcoves
Which of the following is NOT mentioned as a possible reason for building in the cliffs?|Access to trade routes|Protection from weather|Defense|Saving land for farming|交易路については述べられていない。
The word "abandoned" in paragraph 4 is closest in meaning to|left empty|rebuilt|expanded|discovered|abandon＝見捨てる、放棄する。|abandoned
The word "which" in paragraph 4 refers to|a long drought|tree-ring evidence|the region|the late 1200s|干ばつが農業を困難にした。|which probably
What can be inferred about tree-ring evidence?|It provides information about past climate.|It shows when ladders were invented.|It proves the people were attacked.|It was collected by the Hopi in 1300.|年輪から干ばつがわかった。
Why does the author mention the Hopi in the last sentence?|To show that the people did not disappear|To describe modern tourism|To explain the cause of the drought|To compare the Hopi with Europeans|子孫が今も南西部に住んでいる。`);

R('comet','彗星','天文学',`
Comets are small bodies made of ice, dust, and rock that travel around the Sun in long, oval-shaped orbits. For most of their journey they are cold and dark, but as they approach the Sun, they undergo dramatic changes that can make them visible from Earth without a telescope.

The solid center of a comet, called the nucleus, is usually only a few kilometers across. When a comet comes within the orbit of Jupiter, heat from the Sun causes the ice in the nucleus to turn directly into gas. This gas, along with dust released from the surface, forms a huge cloud called the coma, which can be larger than a planet. Pressure from sunlight and the solar wind then pushes material away from the coma, creating one or more tails that may stretch for millions of kilometers. Because the tails are pushed by the Sun, they always point away from it.

Astronomers divide comets into two broad groups according to how long they take to orbit the Sun. Short-period comets, such as Halley's Comet, which returns about every 76 years, are thought to come from a region beyond Neptune called the Kuiper Belt. Long-period comets may take thousands or even millions of years to complete one orbit and are believed to originate in the Oort Cloud, a distant shell of icy objects surrounding the solar system.

Because comets have changed little since the solar system formed about 4.6 billion years ago, scientists study them for clues about its early history. Some researchers have even suggested that comets striking the young Earth may have delivered much of the water now found in its oceans.`,`
What does the passage mainly discuss?|The structure, behavior, and origins of comets|The discovery of Jupiter|How telescopes are built|The life of Edmond Halley|構造（第2段落）・分類と起源（第3段落）・研究意義（第4段落）。
According to paragraph 1, comets can become visible from Earth when they|come near the Sun|pass behind Jupiter|move away from the Sun|collide with planets|as they approach the Sun。
The word "dramatic" in paragraph 1 is closest in meaning to|striking|slow|minor|dangerous|dramatic＝劇的な、目覚ましい。|dramatic
Which part of a comet can be larger than a planet?|The coma|The nucleus|The tail's base|The Kuiper Belt|the coma, which can be larger than a planet。
According to paragraph 2, why do comet tails always point away from the Sun?|They are pushed by sunlight and the solar wind.|They are attracted by Jupiter.|The nucleus is shaped like an arrow.|Comets travel backward.|Because the tails are pushed by the Sun。
The word "it" in the last sentence of paragraph 2 refers to|the Sun|the tail|the coma|the nucleus|尾は太陽から離れる方向を向く。|point away from it
According to paragraph 3, Halley's Comet|is a short-period comet|comes from the Oort Cloud|takes millions of years to orbit the Sun|has never been seen from Earth|Short-period comets, such as Halley's Comet。
Why do scientists study comets?|They preserve information about the early solar system.|They are a source of fuel.|They are easy to land on.|They will soon hit the Earth.|changed little since the solar system formed。`);

R('ford','組み立てラインと自動車社会','経済史',`
Before the twentieth century, automobiles were built one at a time by teams of skilled workers who moved around a stationary car, adding parts until it was finished. The process was slow and expensive, and as a result cars were luxury items that only wealthy people could afford.

In 1913, Henry Ford introduced a moving assembly line at his factory in Highland Park, Michigan. Instead of workers moving to the car, the car moved past the workers on a conveyor. Each worker performed one simple task, such as attaching a wheel or tightening bolts, again and again. The time needed to build a Model T dropped from more than twelve hours to about ninety minutes.

The dramatic increase in efficiency allowed Ford to lower the price of the Model T year after year. By the mid-1920s, millions of ordinary Americans owned cars, which changed where people lived, how they traveled, and how they spent their free time. Suburbs grew, road construction expanded, and new businesses such as gas stations and motels appeared.

The assembly line also had drawbacks. The work was extremely repetitive, and many employees quit after only a few weeks. To reduce this high turnover, Ford made the surprising decision in 1914 to double the daily wage to five dollars. The higher pay attracted thousands of job seekers and helped ensure a steady workforce. It also meant that Ford's own workers could afford to buy the cars they produced.`,`
What is the main idea of the passage?|The assembly line transformed car production and American society.|Henry Ford invented the first automobile.|Suburbs became too expensive in the 1920s.|Gas stations were the most successful new businesses.|生産方式の変化と社会への影響が中心。
According to paragraph 1, before 1913 cars were|expensive and built slowly|produced on conveyors|owned by most families|built by unskilled workers|slow and expensive ... luxury items。
The word "stationary" in paragraph 1 is closest in meaning to|not moving|very large|unfinished|expensive|stationary＝静止した。|stationary
According to paragraph 2, the assembly line reduced the time to build a Model T to about|ninety minutes|twelve hours|one week|five minutes|to about ninety minutes。
Which of the following is NOT mentioned as a result of widespread car ownership?|Increased air pollution|Growth of suburbs|Expansion of road building|New businesses such as motels|大気汚染については述べられていない。
The word "drawbacks" in paragraph 4 is closest in meaning to|disadvantages|profits|improvements|causes|drawback＝欠点、不利な点。|drawbacks
Why did Ford double the daily wage?|To reduce the number of workers who quit|To lower the price of cars|Because the government required it|To reduce the number of job seekers|To reduce this high turnover。
What can be inferred from the last sentence?|Higher wages helped create more customers for Ford's cars.|Ford's workers still could not afford cars.|The assembly line made work more interesting.|Ford stopped making the Model T in 1914.|労働者自身が車を買えるようになった。`);

R('birdsong','鳥のさえずりの学習','生物',`
Many songbirds are not born knowing their songs. Like human infants learning to speak, young birds must hear adults of their own species and practice before they can sing properly. This discovery has made birdsong one of the most important models for studying how vocal learning works.

In species such as the white-crowned sparrow, learning occurs in two phases. During the first, which takes place in the bird's early weeks, the young male listens to the songs of adult males and stores a memory of them. Months later, in the second phase, he begins to produce sounds of his own. His first attempts, called subsong, are quiet and rambling, somewhat like a baby's babbling. Gradually, by comparing his own sounds with the stored memory, he refines his singing until it matches the adult model.

Experiments have shown that timing is critical. Sparrows that are raised in isolation and never hear an adult sing produce only abnormal, simple songs. Birds that hear adult songs only after the first few months of life also fail to learn them properly. This suggests that there is a "sensitive period" during which learning must occur, a pattern that resembles language acquisition in humans.

Not all birds learn this way. Chickens and pigeons, for example, produce their calls correctly even if they have never heard another member of their species. By comparing learning and non-learning species, researchers hope to identify the brain structures and genes that make vocal learning possible.`,`
What is the passage mainly about?|How some birds learn their songs|Why chickens cannot fly|The causes of human speech problems|The migration of sparrows|鳥の歌の学習過程が中心。
According to paragraph 2, in the first phase a young sparrow|memorizes the songs of adult males|sings loudly|teaches other birds|builds a nest|stores a memory of them。
The word "rambling" in paragraph 2 is closest in meaning to|disorganized|beautiful|short|loud|rambling＝とりとめのない。|rambling
Subsong is compared to|a baby's babbling|adult speech|a musical instrument|a pigeon's call|somewhat like a baby's babbling。
The word "he" in the last sentence of paragraph 2 refers to|the young male|the adult model|the researcher|an adult male|若いオスが自分の歌を磨く。|he refines
According to paragraph 3, sparrows raised in isolation|produce only abnormal songs|learn songs faster|sing exactly like adults|never make any sound|produce only abnormal, simple songs。
Why does the author mention chickens and pigeons?|To give examples of birds that do not need to learn their calls|To show that all birds learn songs|To describe birds with sensitive periods|To compare their calls with human music|Not all birds learn this way の具体例。
What can be inferred from the passage?|Studying birdsong may help scientists understand human language learning.|Birds learn songs faster than humans learn languages.|Sparrows can learn songs at any age.|Pigeons have the most complex songs.|人間の言語習得と似たパターンとして研究されている。`);

R('writing','文字の起源','古代史',`
The earliest known system of writing developed in Mesopotamia, the region between the Tigris and Euphrates Rivers in present-day Iraq, more than 5,000 years ago. Interestingly, writing does not seem to have been invented to record stories or religious texts. Instead, it grew out of the practical needs of trade and administration.

Long before writing appeared, people in the region used small clay tokens of different shapes to keep track of goods. A cone might represent a measure of grain, and a sphere a sheep. To guarantee that a shipment was complete, tokens were sometimes sealed inside hollow clay balls. Because the tokens could not be seen once the ball was closed, people began pressing them into the outside surface before sealing it. Eventually, scholars believe, people realized that the marks alone were enough, and the tokens themselves were no longer needed.

By around 3200 B.C., scribes in cities such as Uruk were drawing signs on flat clay tablets with a pointed tool. At first the signs were simple pictures of the objects they represented. Over time, they became more abstract and were made with a wedge-shaped reed, producing the script known today as cuneiform, from the Latin word for "wedge."

The most important development came when signs began to represent sounds rather than only objects. This allowed scribes to write names, verbs, and eventually complete sentences. Cuneiform was used for some 3,000 years and was adapted to write more than a dozen languages before it finally disappeared.`,`
What does the passage mainly discuss?|How writing developed in ancient Mesopotamia|The religion of ancient Iraq|Trade routes along the Tigris|The history of the Latin language|トークンから楔形文字への発展。
According to paragraph 1, writing was first developed for|trade and administration|storytelling|religious ceremonies|teaching children|the practical needs of trade and administration。
According to paragraph 2, tokens were sealed inside clay balls in order to|make sure a shipment was complete|hide them from thieves|make them easier to carry|create decorations|To guarantee that a shipment was complete。
The word "them" in paragraph 2 refers to|the tokens|people|the goods|the clay balls|トークンを外側に押し付けた。|pressing them
The word "abstract" in paragraph 3 is closest in meaning to|less like realistic pictures|more colorful|larger|easier to read|最初は物の絵だったが、次第に抽象的になった。|abstract
According to paragraph 3, the word "cuneiform" comes from|a Latin word meaning "wedge"|the name of a city|a type of reed|the name of a king|from the Latin word for "wedge"。
Why was the use of sound-based signs important?|It allowed scribes to write complete sentences.|It made tablets lighter.|It ended the use of clay.|It replaced cuneiform with pictures.|names, verbs, and eventually complete sentences。
What can be inferred from paragraph 4?|Cuneiform was flexible enough to be used for many languages.|Cuneiform was used for only a short time.|Only one language was ever written in cuneiform.|Scribes stopped using sound signs after a few centuries.|adapted to write more than a dozen languages。`);

R('heat','都市のヒートアイランド','環境',`
On a summer afternoon, the center of a large city can be several degrees warmer than the surrounding countryside. This phenomenon, known as the urban heat island effect, was first described in the early 1800s by an English scientist who noticed that London was warmer than nearby rural areas.

Several factors contribute to the effect. Materials such as asphalt and concrete absorb large amounts of solar energy during the day and release it slowly at night, keeping cities warm after sunset. Cities also have fewer trees and less vegetation, which cool the air by releasing water through their leaves. In addition, heat produced by cars, air conditioners, and factories adds to the warming, and tall buildings can block winds that would otherwise carry heat away.

The heat island effect has serious consequences. Higher temperatures increase the demand for air conditioning, which raises energy consumption and, in turn, produces more heat and air pollution. During heat waves, city residents, especially the elderly and people with health problems, face a greater risk of heat-related illness.

Cities around the world are experimenting with ways to reduce urban heat. Some are planting trees along streets and creating parks, while others encourage "green roofs" covered with plants. Another approach is to use lighter-colored materials for roofs and pavement, since light surfaces reflect more sunlight than dark ones. Studies suggest that combining these strategies can lower city temperatures by a measurable amount.`,`
What is the passage mainly about?|The causes, effects, and possible solutions of urban heat islands|The history of London|How air conditioners work|Why rural areas are colder in winter|原因（第2段落）・影響（第3段落）・対策（第4段落）。
According to paragraph 1, the urban heat island effect was first noticed in|London|a modern American city|the countryside|the twentieth century|London was warmer than nearby rural areas。
The word "absorb" in paragraph 2 is closest in meaning to|take in|reflect|produce|destroy|absorb＝吸収する。|absorb
Which of the following is NOT mentioned as a cause of the effect?|Increased rainfall in cities|Heat from cars and air conditioners|A lack of vegetation|Buildings that block wind|降雨の増加は述べられていない。
According to paragraph 2, how do trees cool the air?|By releasing water through their leaves|By blocking the wind|By absorbing heat at night|By reflecting sunlight from their trunks|releasing water through their leaves。
The word "which" in paragraph 3 refers to|the increased demand for air conditioning|higher temperatures|the heat island effect|air pollution|冷房需要の増加がエネルギー消費を押し上げる。|which raises
According to paragraph 3, who faces the greatest risk during heat waves?|The elderly and people with health problems|Young children only|Farmers|Factory owners|especially the elderly and people with health problems。
Why are lighter-colored materials suggested?|They reflect more sunlight.|They are cheaper.|They absorb more heat.|They help plants grow.|light surfaces reflect more sunlight than dark ones。`);

const D=window.EIGO_DATA;
D.decks.push({id:'tr',type:'read',title:'リーディング',sub:'長文読解（Section 3 形式）',items:P});
const g=D.groups.find(g=>g.title.indexOf('TOEFL')>=0);if(g&&g.ids.indexOf('tr')<0)g.ids.push('tr');
})();
