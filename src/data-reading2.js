// TOEFL ITP リーディング 追加分（オリジナル長文）
(function(){
const D=window.EIGO_DATA,deck=D.decks.find(d=>d.id==='tr');if(!deck)return;
function R(id,title,topic,text,qs){
  const paras=text.trim().split(/\n\s*\n/).map(s=>s.replace(/\s+/g,' ').trim());
  const items=qs.trim().split('\n').map((l,i)=>{const a=l.split('|');return {k:'r:'+id+':'+i,q:a[0],c:a.slice(1,5),e:a[5],hl:a[6]||''}});
  if(!deck.items.some(p=>p.id===id))deck.items.push({id,title,topic,paras,qs:items});
}

R('erie','エリー運河','アメリカ史',`
In the early nineteenth century, moving goods between the Atlantic coast and the growing farms of the American interior was slow and expensive. The Appalachian Mountains formed a barrier, and roads were often little more than muddy tracks. In 1817, the state of New York began an ambitious project to solve this problem: a canal connecting the Hudson River at Albany with Lake Erie at Buffalo.

Many people doubted that the plan could succeed. The canal would be nearly 600 kilometers long, and the United States had few trained engineers. Critics mocked it as "Clinton's Ditch," after Governor DeWitt Clinton, who strongly supported it. Workers, many of them recent immigrants from Ireland, dug the channel largely by hand, using shovels, horses, and simple machines. To overcome differences in elevation, builders constructed a series of locks, chambers that raise or lower boats from one water level to another.

When the Erie Canal opened in 1825, it was an immediate success. The cost of shipping goods from Buffalo to New York City fell dramatically, and the travel time was cut from weeks to days. Farmers in the Midwest could now send grain to eastern markets cheaply, while manufactured goods flowed west. Tolls collected from boats soon paid for the entire cost of construction.

The canal also transformed New York City. As the main link between the Atlantic and the interior, the city's port grew rapidly, helping it become the nation's leading commercial center. Towns along the route, such as Rochester and Syracuse, expanded as well. Although railroads later took over much of the canal's traffic, the Erie Canal had already reshaped the economic geography of the United States.`,`
What is the passage mainly about?|The building of the Erie Canal and its economic effects|The life of DeWitt Clinton|Irish immigration to the United States|The history of American railroads|建設（第1・2段落）と経済的影響（第3・4段落）。
According to paragraph 1, why was transportation to the interior difficult?|Mountains and poor roads made travel slow.|There were no rivers in New York.|Farmers refused to sell their goods.|Ships could not reach the Atlantic coast.|Appalachian Mountains formed a barrier ... muddy tracks。
The word "mocked" in paragraph 2 is closest in meaning to|ridiculed|praised|measured|designed|mock＝あざける。|mocked
The word "who" in paragraph 2 refers to|DeWitt Clinton|critics|workers|engineers|運河を強く支持したのはクリントン知事。|who strongly
According to paragraph 2, locks are|chambers that move boats between water levels|machines used for digging|bridges over the canal|storage buildings for grain|chambers that raise or lower boats。
Which of the following is NOT mentioned as a result of the canal's opening?|Railroads were built alongside the canal.|Shipping costs fell.|Travel time was reduced.|Tolls paid for the construction.|鉄道は後に交通を奪ったと述べているだけ。
What can be inferred from paragraph 4?|The canal contributed to New York City's growth as a commercial center.|New York City was already the largest port before 1825.|Rochester and Syracuse were founded by Irish workers.|The canal stopped operating when railroads appeared.|主要な連絡路となり港が急成長した。
Why does the author mention railroads in the last sentence?|To note that the canal's traffic declined even though its impact remained|To argue that railroads were more expensive|To show that the canal was a failure|To describe how railroads were built|後に鉄道に交通を奪われたが、すでに経済地理を変えていた。`);

R('bees','ミツバチのダンス','生物',`
Honeybees live in colonies that may contain tens of thousands of individuals, and the survival of the colony depends on finding enough food. Worker bees known as foragers fly out to collect nectar and pollen from flowers, sometimes traveling several kilometers from the hive. Remarkably, when a forager discovers a rich source of food, she can tell her nestmates where to find it.

In the 1940s, the Austrian scientist Karl von Frisch discovered how bees share this information. He observed that a returning forager performs a special movement on the vertical surface of the honeycomb, which he called the "waggle dance." The bee runs forward in a straight line while shaking her body from side to side, then circles back to the starting point and repeats the run.

Von Frisch found that the dance contains two kinds of information. The direction of the straight run indicates the direction of the food relative to the sun. If the bee runs straight upward, the food lies in the direction of the sun; if she runs at an angle to the right of vertical, the food lies at the same angle to the right of the sun. The duration of the waggle run indicates distance: the longer the run, the farther away the food.

For this work, von Frisch shared the Nobel Prize in Physiology or Medicine in 1973. His findings were at first doubted by some researchers, who argued that bees might locate food by smell alone. Later experiments, including studies using robotic bees, confirmed that the dance does communicate location, making it one of the most sophisticated examples of communication among animals.`,`
What is the main topic of the passage?|How honeybees communicate the location of food|How honeybees produce honey|The structure of a honeycomb|The life of Karl von Frisch|ダンスによる情報伝達が中心。
According to paragraph 1, foragers are|worker bees that collect nectar and pollen|bees that guard the hive|young bees that stay inside|bees that lay eggs|Worker bees known as foragers ... collect nectar and pollen。
The word "she" in paragraph 1 refers to|a forager|the colony|a flower|a nestmate|餌場を見つけた採餌バチが仲間に伝える。|she can tell
According to paragraph 2, where is the waggle dance performed?|On the vertical surface of the honeycomb|On the flowers|In the air above the hive|On the ground outside the hive|on the vertical surface of the honeycomb。
If a bee runs straight upward during the dance, the food is|in the direction of the sun|directly below the hive|very close to the hive|in the opposite direction from the sun|If the bee runs straight upward, the food lies in the direction of the sun。
According to paragraph 3, the duration of the waggle run shows|how far away the food is|how much food there is|what kind of flower it is|how many bees should go|The duration ... indicates distance。
The word "doubted" in paragraph 4 is closest in meaning to|questioned|proved|ignored|published|doubt＝疑う。|doubted
Why does the author mention robotic bees?|To give evidence supporting von Frisch's conclusion|To show that real bees cannot dance|To describe a new type of farming|To explain how bees smell flowers|ロボットを使った実験でダンスの情報伝達が確かめられた。`);

R('photo','写真の誕生','科学技術史',`
For centuries, artists used a device called the camera obscura, a dark box or room with a small hole that projects an image of the outside scene onto a surface. Although the camera obscura could form an image, it could not preserve it. The challenge for nineteenth-century inventors was to find a way to make such images permanent.

In 1826 or 1827, the French inventor Nicéphore Niépce produced what is generally considered the oldest surviving photograph, a view from a window of his house. His process, however, required an exposure of many hours, and the resulting image was faint. Niépce later formed a partnership with Louis Daguerre, a painter and showman who continued the research after Niépce's death in 1833.

In 1839, Daguerre announced a new process that produced remarkably sharp images on silver-coated copper plates. These images, called daguerreotypes, required exposures of only several minutes, and later improvements shortened the time further. The French government acquired the rights to the process and made it available to the public, and daguerreotype studios soon opened in cities across Europe and America.

The daguerreotype had an important limitation: each image was unique and could not be copied. At about the same time, the English scientist William Henry Fox Talbot developed a method that produced a paper negative from which many positive prints could be made. Although Talbot's early images were less detailed, the negative-positive principle he introduced became the basis of most photography for the next 150 years.`,`
What does the passage mainly discuss?|The early development of photography|The history of painting in France|How the camera obscura was invented|The life of William Henry Fox Talbot|カメラ・オブスクラから写真技術の発展まで。
According to paragraph 1, the camera obscura|could form an image but not preserve it|produced permanent images|was invented in the nineteenth century|was used only by scientists|could form an image, it could not preserve it。
What problem did Niépce's process have?|It required very long exposures.|It produced images that were too bright.|It could only be used outdoors.|It was too expensive for most people.|an exposure of many hours ... faint。
The word "who" in paragraph 2 refers to|Louis Daguerre|Nicéphore Niépce|a painter's student|the French government|研究を引き継いだのはダゲール。|who continued
The word "remarkably" in paragraph 3 is closest in meaning to|extraordinarily|slightly|surprisingly rarely|occasionally|remarkably＝著しく、並外れて。|remarkably
According to paragraph 3, the French government|acquired the rights and made the process available to the public|banned the use of daguerreotypes|paid Talbot to improve the process|opened the first photography studio|acquired the rights ... made it available to the public。
According to paragraph 4, what was a limitation of the daguerreotype?|Each image could not be copied.|It required a paper negative.|The images were not detailed.|It needed exposures of many hours.|each image was unique and could not be copied。
What can be inferred about Talbot's method?|It was better suited to making multiple copies.|It produced sharper images than the daguerreotype.|It was abandoned after a few years.|It was invented after 1900.|ネガから多数のプリントを作れる。`);

R('placebo','プラセボ効果','心理学・医学',`
A placebo is a treatment that has no active medical ingredient, such as a sugar pill or an injection of salt water. Surprisingly, patients who receive placebos often report that their symptoms improve. This phenomenon, known as the placebo effect, has been observed in conditions ranging from pain and nausea to sleep problems.

Because of the placebo effect, new drugs are usually tested in randomized controlled trials. In such studies, patients are divided by chance into two groups: one receives the real drug and the other receives a placebo that looks identical. Ideally, neither the patients nor the doctors know who is receiving which treatment, a design called "double-blind." Only if the drug produces significantly better results than the placebo is it considered effective.

Researchers have proposed several explanations for the placebo effect. One is expectation: when people believe a treatment will help, the brain may release natural substances, such as endorphins, that reduce pain. Another is conditioning, in which the body learns to associate the experience of taking medicine with feeling better. Some apparent improvements, however, are not caused by the placebo at all but reflect the natural tendency of many illnesses to improve over time.

Interestingly, the details of a placebo can influence its effect. Studies have found that two pills often work better than one, and that injections tend to have stronger effects than pills. Some research even suggests that placebos can help when patients are told openly that they are receiving a placebo, although scientists are still investigating why this occurs.`,`
What is the passage mainly about?|What the placebo effect is and how it is studied and explained|How sugar pills are manufactured|The history of a specific drug|Why doctors should not use injections|定義（第1段落）・研究方法（第2段落）・説明（第3段落）・影響要因（第4段落）。
According to paragraph 1, a placebo is|a treatment with no active ingredient|a new type of painkiller|a strong medicine given by injection|a kind of surgery|has no active medical ingredient。
Why are new drugs compared with placebos?|To find out whether a drug works better than a placebo|To make the drug cheaper|To reduce the number of patients needed|To prevent patients from improving|Only if the drug produces significantly better results than the placebo。
According to paragraph 2, a "double-blind" study is one in which|neither patients nor doctors know who receives which treatment|patients cannot see the pills|only doctors know who receives the drug|patients receive two different drugs|neither the patients nor the doctors know。
The word "it" in paragraph 2 refers to|the drug|the placebo|the study|the result|プラセボより優れた場合に「薬」が有効とみなされる。|is it considered
Which of the following is NOT given as an explanation for the placebo effect?|Placebos secretly contain real medicine.|Expectation|Conditioning|The natural improvement of illnesses|プラセボに有効成分が含まれるとは述べていない。
The word "associate" in paragraph 3 is closest in meaning to|connect|separate|compare|forget|associate A with B＝AをBと結びつける。|associate
What can be inferred from paragraph 4?|The form in which a placebo is given may affect how well it works.|Placebos never work if patients know about them.|One pill is always more effective than two.|Injections should replace all pills.|錠剤の数や注射かどうかで効果が変わる。`);

R('desert','砂漠の植物','植物学',`
Deserts receive very little rain, often less than 250 millimeters a year, and daytime temperatures can be extremely high. Despite these harsh conditions, many plants manage to survive and even thrive. They do so through a variety of adaptations that help them obtain water, store it, and reduce its loss.

Cacti are among the best-known desert plants. Their thick, fleshy stems can store large amounts of water collected during brief rains. Instead of broad leaves, most cacti have spines, which lose far less water and also protect the plant from animals seeking moisture. Many cacti also have shallow but widespread root systems that can quickly absorb water from even a light rainfall before it evaporates.

Other plants take a different approach. The mesquite tree, for example, sends roots deep into the ground, sometimes more than 50 meters, to reach underground water. Some desert plants avoid dry periods altogether. Known as ephemerals, they survive as seeds for months or even years, then germinate, grow, flower, and produce new seeds within a few weeks after a heavy rain.

Many desert plants also use a special form of photosynthesis. Most plants open small pores called stomata during the day to take in carbon dioxide, but this causes them to lose water. Cacti and some other desert plants open their stomata at night, when it is cooler, and store the carbon dioxide until daylight, when they can use it for photosynthesis. This strategy greatly reduces water loss.`,`
What is the passage mainly about?|How desert plants survive dry conditions|Why deserts receive little rain|How cacti are grown in gardens|The animals that live in deserts|水の確保・貯蔵・損失の抑制という適応がテーマ。
According to paragraph 2, cactus spines|lose little water and protect the plant|store large amounts of water|absorb water from the air|help the plant reproduce|lose far less water and also protect the plant。
The word "it" in paragraph 2 refers to|water|rainfall|the root system|the plant|雨水が蒸発する前に吸収する。|before it evaporates
How does the mesquite tree obtain water?|Its roots reach deep underground water.|It stores water in its leaves.|It collects dew at night.|It takes water from cacti.|roots deep into the ground ... to reach underground water。
According to paragraph 3, ephemerals|survive dry periods as seeds|live for hundreds of years|have very deep roots|grow only in winter|survive as seeds for months or even years。
The word "germinate" in paragraph 3 is closest in meaning to|begin to grow|die|dry out|become hard|germinate＝発芽する。|germinate
Why do cacti open their stomata at night?|To reduce water loss|To absorb more sunlight|To release oxygen|To attract insects|夜は涼しく、水分の損失が少ない。
Which of the following is NOT mentioned as a strategy of desert plants?|Growing large leaves to collect rain|Storing water in stems|Developing deep roots|Opening pores at night|大きな葉は述べられていない（むしろサボテンは葉の代わりにとげ）。`);

R('tides','潮の満ち引き','地球科学',`
Anyone who spends a day at the seashore will notice that the level of the ocean rises and falls. In most places, there are two high tides and two low tides roughly every twenty-four hours and fifty minutes. These regular changes are caused mainly by the gravitational pull of the Moon, with a smaller contribution from the Sun.

The Moon's gravity pulls on the whole Earth, but it pulls most strongly on the side facing the Moon and least strongly on the opposite side. As a result, the oceans form two bulges: one on the side nearest the Moon and another on the side farthest from it. As the Earth rotates, a given location passes through both bulges, experiencing two high tides, and through the low areas between them, experiencing two low tides.

The Sun also produces tides, but because it is so much farther away, its effect is less than half that of the Moon. When the Sun, Moon, and Earth are in a line, as they are at new moon and full moon, their effects combine to produce especially large tides called spring tides. When the Sun and Moon are at right angles to each other, their effects partly cancel, producing smaller neap tides.

Local geography can greatly change the size of tides. In the open ocean, the difference between high and low tide is usually less than a meter. In certain narrow bays, however, the water is funneled and amplified. The Bay of Fundy in eastern Canada has the largest tides in the world, with a difference of up to about 16 meters between high and low water.`,`
What does the passage mainly discuss?|The causes of tides and why their size varies|The history of the Bay of Fundy|How the Moon was formed|The effects of tides on sea animals|原因（第1〜3段落）と大きさの違い（第3・4段落）。
According to paragraph 1, most places have about how many high tides in a day?|Two|One|Four|Six|two high tides and two low tides。
The word "it" in paragraph 2 refers to|the Moon|the Earth|the side|the ocean|月から最も遠い側。|farthest from it
Why do the oceans form two bulges?|The Moon's pull differs across the Earth.|The Sun heats the oceans unevenly.|Winds push water in two directions.|The Earth has two oceans.|月の引力が手前側で最も強く、反対側で最も弱い。
According to paragraph 3, spring tides occur when|the Sun, Moon, and Earth are in a line|the Sun and Moon are at right angles|the Moon is farthest from the Earth|it is springtime|in a line ... especially large tides called spring tides。
The word "cancel" in paragraph 3 is closest in meaning to|offset|strengthen|repeat|announce|cancel＝相殺する。|cancel
What can be inferred about the Sun's effect on tides?|It is weaker than the Moon's because the Sun is farther away.|It is stronger than the Moon's.|It only occurs at night.|It has no effect at all.|less than half that of the Moon。
Why does the author mention the Bay of Fundy?|As an example of how local geography can increase tides|To show where tides were first studied|To argue that tides are dangerous|To compare Canada with other countries|狭い湾では潮が増幅される例。`);

R('plates','大陸移動説からプレートテクトニクスへ','地学',`
In 1912, the German scientist Alfred Wegener proposed a bold idea: the continents had once been joined together in a single huge landmass, which he called Pangaea, and had slowly drifted apart over millions of years. Wegener noticed that the coastlines of South America and Africa fit together like pieces of a puzzle. He also pointed out that similar fossils and rock formations were found on continents now separated by oceans.

Despite this evidence, most geologists rejected Wegener's theory of continental drift. Their main objection was that he could not explain what force could move entire continents across the Earth's surface. Wegener died in 1930 during an expedition in Greenland, and for several decades his ideas were largely ignored.

New evidence emerged in the 1950s and 1960s as scientists began to study the ocean floor. They discovered a vast system of underwater mountain ranges, called mid-ocean ridges, where molten rock rises from below and forms new crust. Magnetic patterns in the rocks on either side of the ridges showed that the sea floor was spreading outward. This process, known as seafloor spreading, provided the mechanism that Wegener had lacked.

These discoveries led to the theory of plate tectonics, which holds that the Earth's outer shell is divided into large plates that move a few centimeters each year. Where plates collide, mountains such as the Himalayas are pushed up; where they slide past each other, earthquakes occur. Today, plate tectonics is the central organizing idea of geology, and Wegener is recognized as a pioneer whose insight was ahead of its time.`,`
What is the passage mainly about?|How the idea of continental drift developed into plate tectonics|The life of geologists in Greenland|The formation of the Himalayas|How fossils are dated|大陸移動説の提唱から受容まで。
Which of the following is NOT mentioned as evidence Wegener used?|Satellite measurements of moving continents|The fit of coastlines|Similar fossils on different continents|Similar rock formations|衛星観測は述べられていない（当時は存在しない）。
Why did most geologists reject Wegener's theory?|He could not explain what force moved the continents.|His fossil evidence was false.|He had never visited South America.|The coastlines did not actually match.|he could not explain what force could move entire continents。
The word "ignored" in paragraph 2 is closest in meaning to|disregarded|praised|proven|translated|ignore＝無視する。|ignored
According to paragraph 3, mid-ocean ridges are|underwater mountain ranges where new crust forms|deep trenches where crust disappears|islands formed by volcanoes|areas without any rock|underwater mountain ranges ... forms new crust。
The word "which" in paragraph 4 refers to|the theory of plate tectonics|these discoveries|the Earth's outer shell|seafloor spreading|「～と主張する理論」。|which holds
According to paragraph 4, earthquakes occur where plates|slide past each other|collide head-on and form mountains|stop moving|melt into the ocean|where they slide past each other, earthquakes occur。
What is the author's attitude toward Wegener?|Admiring, viewing him as ahead of his time|Critical, viewing his work as careless|Neutral, with no opinion|Doubtful about his evidence|a pioneer whose insight was ahead of its time。`);

R('print','活版印刷の発明','歴史',`
Before the middle of the fifteenth century, books in Europe were copied by hand, usually by monks or professional scribes. Producing a single book could take months, and as a result books were rare and expensive. Most people never owned one.

Around 1440, Johannes Gutenberg, a goldsmith from the German city of Mainz, began developing a system of printing with movable metal type. Each letter was cast as a separate piece of metal, so the pieces could be arranged to form a page, printed, and then rearranged for the next page. Gutenberg also developed an oil-based ink that stuck well to metal, and he adapted a screw press similar to those used to make wine.

Gutenberg's most famous work is a Bible printed in the 1450s. About 180 copies were produced, and they were so carefully made that they resembled fine handwritten manuscripts. Although Gutenberg himself did not become wealthy, his invention spread rapidly. By 1500, printing presses were operating in hundreds of towns across Europe, and millions of books had been printed.

The consequences of printing were profound. Because books became cheaper, more people learned to read. Scholars in different countries could share identical copies of texts, which made it easier to compare and build upon one another's work. Many historians believe that the printing press played a key role in later developments such as the Scientific Revolution.`,`
What is the main topic of the passage?|The invention of printing with movable type and its effects|The history of monasteries in Europe|How wine was produced in Germany|The life of medieval scribes|発明（第2・3段落）と影響（第4段落）。
According to paragraph 1, before printing books were|rare and expensive|cheap but poorly made|owned by most families|printed on wooden blocks|books were rare and expensive。
According to paragraph 2, Gutenberg was originally|a goldsmith|a monk|a wine maker|a scholar|a goldsmith from the German city of Mainz。
What was the main advantage of movable type?|The letters could be rearranged and reused.|It did not require ink.|It printed in many colors.|It worked without a press.|arranged ... printed, and then rearranged。
The word "they" in paragraph 3 refers to|the copies of the Bible|scribes|printing presses|wealthy people|180部の聖書の写しが丁寧に作られた。|they were so
The word "profound" in paragraph 4 is closest in meaning to|far-reaching|minor|temporary|unexpected|profound＝深い、重大な。|profound
What can be inferred about scholars before the printing press?|They had difficulty sharing identical copies of texts.|They never read books.|They worked only in Germany.|They opposed the Scientific Revolution.|印刷以後は同一のテキストを共有できるようになった。
Which of the following is NOT mentioned as an effect of printing?|Handwritten books were banned.|More people learned to read.|Scholars could share identical texts.|It contributed to the Scientific Revolution.|手書き本の禁止は述べられていない。`);
})();
