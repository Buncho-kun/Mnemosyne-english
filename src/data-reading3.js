// TOEFL ITP リーディング 追加分 第3弾（オリジナル長文）
(function(){
const D=window.EIGO_DATA,deck=D.decks.find(d=>d.id==='tr');if(!deck)return;
function R(id,title,topic,text,qs){
  const paras=text.trim().split(/\n\s*\n/).map(s=>s.replace(/\s+/g,' ').trim());
  const items=qs.trim().split('\n').map((l,i)=>{const a=l.split('|');return {k:'r:'+id+':'+i,q:a[0],c:a.slice(1,5),e:a[5],hl:a[6]||''}});
  if(!deck.items.some(p=>p.id===id))deck.items.push({id,title,topic,paras,qs:items});
}

R('octopus','タコの知能','生物',`
Octopuses are among the most intelligent invertebrates, or animals without backbones. An octopus has roughly 500 million nerve cells, a number comparable to that of some mammals. Surprisingly, about two-thirds of these cells are located not in the brain but in the eight arms, which allows each arm to respond to touch and taste with a certain degree of independence.

Laboratory studies have demonstrated impressive problem-solving abilities. Octopuses can learn to open screw-top jars to reach food inside, find their way through simple mazes, and recognize individual human caretakers. In some aquariums, octopuses have even escaped from their tanks at night, apparently to visit nearby tanks containing crabs, before returning to their own.

Octopuses are also masters of disguise. Their skin contains thousands of special cells called chromatophores, which hold colored pigments. By expanding or shrinking these cells, an octopus can change its color and pattern in a fraction of a second. Some species can also alter the texture of their skin to resemble rocks or seaweed, making them almost invisible to predators.

What makes this intelligence puzzling is the octopus's short life. Most species live only one or two years, and they generally live alone, receiving no care from their parents. Because intelligence in other animals is often linked to long lives and complex social groups, scientists are still trying to understand why such a short-lived, solitary creature evolved such a capable mind.`,`
What is the passage mainly about?|The intelligence and abilities of octopuses|How octopuses are caught for food|The structure of aquarium tanks|The life cycle of crabs|知能（第1・2段落）・擬態（第3段落）・謎（第4段落）。
The word "invertebrates" in paragraph 1 is defined as|animals without backbones|animals that live in the sea|animals with eight arms|animals that eat crabs|invertebrates, or animals without backbones（or で言い換え）。|invertebrates
According to paragraph 1, where are most of an octopus's nerve cells located?|In its arms|In its brain|In its skin|In its eyes|about two-thirds of these cells are located ... in the eight arms。
Why does the author mention octopuses escaping from their tanks?|To illustrate their problem-solving ability|To show that aquariums are dangerous|To explain why octopuses live alone|To describe how octopuses hunt in the wild|実験室・水族館での賢さの例。
The word "which" in paragraph 3 refers to|chromatophores|thousands|skin|predators|色素を含む細胞＝色素胞。|which hold
According to paragraph 3, how does an octopus change color?|By expanding or shrinking special cells|By eating colored food|By changing the shape of its arms|By moving to darker water|By expanding or shrinking these cells。
The word "solitary" in paragraph 4 is closest in meaning to|living alone|long-lived|intelligent|dangerous|solitary＝単独で生きる。|solitary
Why do scientists find the octopus's intelligence puzzling?|Intelligence is usually linked to long lives and social groups.|Octopuses have very few nerve cells.|Octopuses cannot learn from experience.|Octopuses live in large social groups.|短命で単独生活なのに高い知能をもつ。`);

R('dustbowl','ダストボウル','アメリカ史',`
During the 1930s, a series of severe dust storms struck the southern Great Plains of the United States, a region that came to be known as the Dust Bowl. The storms stripped away millions of tons of fertile topsoil and buried farms, roads, and houses under drifts of dust. On the worst days, the sky turned so dark at midday that people could not see their own hands.

The disaster had both natural and human causes. A long drought began in the early 1930s, but the land had already been made vulnerable. In earlier decades, encouraged by high wheat prices and new machinery, farmers had plowed up vast areas of native grassland. The deep roots of these grasses had held the soil in place and kept it moist. Once they were removed, the dry, loose soil was easily carried away by the strong winds of the plains.

The human cost was enormous. Crops failed year after year, and many families lost their farms. Hundreds of thousands of people left the region, many of them heading west to California in search of work. Their hardships were later portrayed in novels, songs, and photographs that shaped the public memory of the era.

The Dust Bowl also led to lasting changes in farming. In 1935, the federal government created the Soil Conservation Service, which taught farmers techniques such as plowing along the contours of the land and rotating crops. Millions of trees were planted in long rows called shelterbelts to slow the wind. These practices helped reduce erosion when droughts returned in later decades.`,`
What does the passage mainly discuss?|The causes, effects, and lessons of the Dust Bowl|The history of wheat prices|The life of farmers in California|How dust storms form on other planets|原因・被害・その後の対策。
According to paragraph 1, what happened on the worst days?|The sky became very dark at midday.|It rained heavily.|The temperature fell below freezing.|Rivers overflowed.|the sky turned so dark at midday。
According to paragraph 2, why had the land become vulnerable?|Native grasses had been plowed up.|Too many trees had been planted.|Farmers had stopped using machinery.|The soil was too wet.|plowed up vast areas of native grassland。
The word "they" in paragraph 2 refers to|the deep roots of the grasses|farmers|new machines|wheat prices|草の根が取り除かれると土が飛ばされた。|Once they were
The word "enormous" in paragraph 3 is closest in meaning to|huge|hidden|temporary|unexpected|enormous＝莫大な。|enormous
Where did many people go after leaving the region?|To California|To Canada|To the East Coast|To Mexico|many of them heading west to California。
Which of the following is NOT mentioned as a technique promoted after the Dust Bowl?|Building large dams|Plowing along the contours of the land|Rotating crops|Planting shelterbelts|ダム建設は述べられていない。
What can be inferred from the last sentence?|The new practices made later droughts less damaging.|Droughts never occurred again.|The trees caused more erosion.|Farmers stopped growing crops.|後の干ばつ時に浸食を減らすのに役立った。`);

R('aurora','オーロラ','天文学',`
In regions near the North and South Poles, the night sky is sometimes filled with shimmering curtains of green, red, and purple light. These displays are called auroras: the aurora borealis, or northern lights, in the Northern Hemisphere, and the aurora australis, or southern lights, in the Southern Hemisphere.

Auroras begin with the Sun. The Sun constantly releases a stream of electrically charged particles known as the solar wind. When these particles reach the Earth, most of them are deflected by the planet's magnetic field. However, the magnetic field guides some of them toward the polar regions, where they enter the upper atmosphere.

There, the charged particles collide with atoms and molecules of gas, giving them extra energy. When the gases release this energy, they give off light. The color depends on the type of gas and the altitude. Oxygen produces the most common green light at around 100 to 250 kilometers above the ground, and it can also produce rare red light at higher altitudes. Nitrogen produces blue and purple shades.

The frequency and brightness of auroras vary with the Sun's activity, which follows a cycle of about eleven years. During periods of strong solar activity, large eruptions on the Sun can send unusually powerful bursts of particles toward the Earth. At such times, auroras may be seen much farther from the poles than usual. These same events can also disrupt satellites, radio communication, and electrical power systems.`,`
What is the main topic of the passage?|What causes auroras and why they vary|How to photograph the night sky|The history of polar exploration|The climate of the polar regions|発生の仕組みと変化の要因。
According to paragraph 1, the aurora australis appears|in the Southern Hemisphere|in the Northern Hemisphere|only near the equator|only during the day|aurora australis, or southern lights, in the Southern Hemisphere。
According to paragraph 2, what is the solar wind?|A stream of charged particles from the Sun|A wind that blows near the poles|Light reflected from the Moon|A layer of the atmosphere|a stream of electrically charged particles known as the solar wind。
The word "deflected" in paragraph 2 is closest in meaning to|turned aside|absorbed|multiplied|heated|deflect＝そらす。|deflected
The word "they" in paragraph 3 refers to|the gases|the charged particles|the colors|the kilometers|ガスがエネルギーを放出するときに光を出す。|they give off
According to paragraph 3, which gas produces the most common green light?|Oxygen|Nitrogen|Hydrogen|Carbon dioxide|Oxygen produces the most common green light。
According to paragraph 4, when may auroras be seen farther from the poles?|During periods of strong solar activity|During the winter only|When the Moon is full|When there is no solar wind|強い太陽活動の時期。
Which of the following is NOT mentioned as something that strong solar events can disrupt?|Ocean currents|Satellites|Radio communication|Electrical power systems|海流は述べられていない。`);

R('wetland','湿地の役割','環境',`
Wetlands are areas where water covers the soil or is present near the surface for much of the year. They include marshes, which are dominated by grasses; swamps, which are dominated by trees; and bogs, which accumulate thick layers of decaying plant material. For centuries, wetlands were often regarded as useless wastelands, and many were drained to create farmland or space for cities.

Scientists now recognize that wetlands perform many valuable functions. One of the most important is flood control. Like enormous sponges, wetlands absorb rainwater and release it slowly, reducing the severity of floods downstream. Coastal wetlands also protect shorelines by weakening the force of storm waves.

Wetlands also act as natural water filters. As water moves slowly through them, plants and soil trap sediments and remove excess nutrients and certain pollutants. As a result, the water that leaves a wetland is often cleaner than the water that entered it. In some communities, constructed wetlands are used as an inexpensive way to treat wastewater.

In addition, wetlands are among the most biologically productive ecosystems on Earth. They provide food and shelter for a wide variety of fish, insects, and plants, and they serve as resting places for migrating birds. Because so many wetlands have been lost, governments and conservation groups now work to protect the remaining ones and to restore some that were drained in the past.`,`
What is the passage mainly about?|The types and important functions of wetlands|How to build a farm on a wetland|The migration routes of birds|Why floods occur in cities|種類（第1段落）と働き（第2〜4段落）。
According to paragraph 1, how do swamps differ from marshes?|Swamps are dominated by trees, while marshes are dominated by grasses.|Swamps are dry for most of the year.|Marshes contain thick layers of decaying plants.|Marshes are found only near the coast.|marshes ... grasses; swamps ... trees。
Why were many wetlands drained in the past?|They were seen as useless land.|They caused too many floods.|They were too dry for farming.|They attracted too many birds.|regarded as useless wastelands。
The author compares wetlands to sponges in order to explain how they|absorb water and release it slowly|produce clean drinking water|provide homes for fish|weaken storm waves|absorb rainwater and release it slowly。
The word "it" in paragraph 3 refers to|the water|a wetland|the soil|a pollutant|湿地に入ってきた水。|that entered it
What can be inferred from paragraph 3?|Constructed wetlands can be a cheap way to clean water.|Wetlands make water dirtier.|Wastewater cannot be treated naturally.|Plants in wetlands add pollutants to water.|安価な排水処理方法として使われる。
The word "productive" in paragraph 4 is closest in meaning to|rich in life|dangerous|crowded with people|newly formed|biologically productive＝生物の生産性が高い。|productive
Which of the following is NOT mentioned as a function of wetlands?|Producing electricity|Controlling floods|Filtering water|Providing habitat for wildlife|発電は述べられていない。`);

R('lewis','ルイス・クラーク探検隊','アメリカ史',`
In 1803, the United States purchased the vast Louisiana Territory from France, roughly doubling the size of the nation. President Thomas Jefferson was eager to learn about this largely unknown land and to find a water route to the Pacific Ocean. He chose Meriwether Lewis, his personal secretary, to lead an expedition, and Lewis invited William Clark, a former army officer, to share the command.

The expedition, called the Corps of Discovery, set out from near St. Louis in May 1804. Traveling by boat up the Missouri River, the group of about forty-five men spent their first winter among the Mandan people in present-day North Dakota. There they met Sacagawea, a young Shoshone woman, who joined the expedition with her husband. Her knowledge of languages and of the land proved invaluable, especially when the explorers needed horses to cross the Rocky Mountains.

Crossing the mountains was the most difficult part of the journey. Snow, hunger, and steep terrain nearly ended the expedition. After reaching rivers on the western side, however, the explorers built canoes and followed the Columbia River to the Pacific coast, arriving in November 1805. They returned to St. Louis in September 1806.

Although Lewis and Clark did not find an easy water route across the continent, the expedition was a great success in other ways. The explorers produced detailed maps and described more than a hundred plants and animals previously unknown to scientists. Their journals also recorded valuable information about the many Native American nations they encountered.`,`
What is the passage mainly about?|An expedition that explored the American West|The purchase of land from France|The life of Thomas Jefferson|The history of the Mandan people|探検隊の目的・行程・成果。
According to paragraph 1, what was one goal of the expedition?|To find a water route to the Pacific Ocean|To buy land from France|To build new cities|To fight a war|to find a water route to the Pacific Ocean。
The word "who" in paragraph 2 refers to|Sacagawea|the Mandan people|the explorers|her husband|探検隊に加わったのはサカガウィア。|who joined
The word "invaluable" in paragraph 2 is closest in meaning to|extremely useful|without value|very expensive|difficult to find|invaluable＝非常に貴重な（価値がないの意味ではない）。|invaluable
According to paragraph 2, Sacagawea was especially helpful when the explorers|needed horses to cross the mountains|built canoes|spent the winter in North Dakota|reached the Pacific coast|especially when the explorers needed horses。
According to paragraph 3, what was the most difficult part of the journey?|Crossing the Rocky Mountains|Traveling up the Missouri River|Building canoes|Returning to St. Louis|Crossing the mountains was the most difficult part。
When did the expedition reach the Pacific coast?|In November 1805|In May 1804|In September 1806|In 1803|arriving in November 1805。
Which of the following is NOT mentioned as an achievement of the expedition?|Finding an easy water route across the continent|Producing detailed maps|Describing new plants and animals|Recording information about Native American nations|簡単な水路は見つけられなかった。`);

R('forget','忘却曲線と間隔反復','心理学',`
In the 1880s, the German psychologist Hermann Ebbinghaus conducted one of the first scientific studies of memory, using himself as the only subject. To avoid the influence of meaning, he memorized lists of nonsense syllables such as "WID" and "ZOF," and then measured how much he remembered after different periods of time.

Ebbinghaus discovered that forgetting follows a predictable pattern. Memory declines very rapidly at first; a large portion of newly learned material is lost within the first hour and the first day. After that, the rate of forgetting slows down considerably. When the results are plotted on a graph, they form a steeply falling line that gradually levels off, a shape now known as the forgetting curve.

He also found that relearning forgotten material takes less time than learning it the first time, which shows that some trace of the memory remains even when it cannot be recalled. Moreover, each time information is reviewed, it is forgotten more slowly than before. Reviews spread out over time are much more effective than the same amount of study crammed into a single session, a phenomenon called the spacing effect.

These findings have practical applications. Many modern study methods and flashcard programs use spaced repetition, scheduling reviews just as a learner is about to forget an item and gradually increasing the interval between reviews. By reviewing at the right moments, learners can retain more information with less total study time than they would by simply repeating material many times in one day.`,`
What is the passage mainly about?|Research on forgetting and how it led to effective study methods|The life of a famous German scientist|How to create nonsense words|Why people dream about the past|忘却曲線から間隔反復の応用まで。
Why did Ebbinghaus use nonsense syllables?|To avoid the influence of meaning|Because they were easy to pronounce|Because other subjects refused to help|To test his knowledge of languages|To avoid the influence of meaning。
According to paragraph 2, when does most forgetting occur?|Soon after learning|After several years|Only during sleep|After many reviews|a large portion ... is lost within the first hour and the first day。
The phrase "levels off" in paragraph 2 is closest in meaning to|becomes stable|rises sharply|disappears|repeats|level off＝横ばいになる。|levels off
According to paragraph 3, what does the fact that relearning is faster show?|Some trace of the memory remains.|The material was never learned.|Nonsense syllables are easy.|Reviews are unnecessary.|some trace of the memory remains。
The word "it" in paragraph 3 refers to|information|the spacing effect|a session|the memory trace|復習されるたびに「情報」が忘れられにくくなる。|it is forgotten more slowly
According to paragraph 3, the spacing effect means that|reviews spread out over time are more effective than cramming|studying once is enough|forgetting happens at a constant rate|long sessions are best for memory|Reviews spread out over time are much more effective。
What can be inferred about spaced repetition programs?|They try to schedule reviews at the point when items are about to be forgotten.|They require learners to review everything every day.|They shorten the interval after each successful review.|They were invented by Ebbinghaus himself.|忘れかけた時点で復習を設定し、間隔を延ばしていく。`);
})();
