// 語句整序・正誤判定 追加分（すべてこのアプリ用に作成）
(function(){
const D=window.EIGO_DATA;
const jo=D.decks.find(d=>d.id==='jo'),tf=D.decks.find(d=>d.id==='errtf');
// 語句整序：日本語|チャンクを / で区切った正しい英文|解説
const O=`彼がなぜ遅れたのか、誰も知らない。|Nobody / knows / why / he / was late.|間接疑問は平叙文の語順（why he was）。
その知らせを聞いて、彼女は泣き出した。|The news / made / her / burst / into tears.|無生物主語 make O 原形。burst into tears「わっと泣き出す」。
この川で泳ぐのは危険だ。|It / is / dangerous / to swim / in this river.|形式主語 It ＝ to swim 〜。
私は彼女に、窓を開けてもらうよう頼んだ。|I / asked / her / to open / the window.|ask O to do。
彼はとても親切なので、みんなに好かれている。|He is / so kind / that / everyone / likes him.|so 〜 that …。
宿題を手伝ってくれてありがとう。|Thank you / for helping / me / with / my homework.|help 人 with 物。thank you for doing。
もっと早く出発すればよかった。|I / should have / left / earlier.|should have p.p.「〜すべきだったのに」。
彼女ほど上手に歌える人はいない。|No one / can sing / as well / as / she does.|No one 〜 as 〜 as …（最上級の意味）。
これが私の生まれた家だ。|This is / the house / where / I / was born.|関係副詞 where。
彼は何も言わずに部屋を出て行った。|He / left / the room / without / saying a word.|without doing。
何と美しい夕日だろう。|What / a beautiful sunset / it / is!|感嘆文 What a 形容詞＋名詞 S V!
雨のせいで、私たちは家にいなければならなかった。|The rain / forced / us / to stay / at home.|無生物主語 force O to do。
試験に合格するには、もっと勉強する必要がある。|You / need / to study harder / to pass / the exam.|need to do / 目的の to do。
私がその本を読み終えるのに3日かかった。|It / took me / three days / to finish / reading the book.|It took 人 時間 to do。finish doing。
彼女がいつ戻るのかわからない。|I / don't know / when / she / will come back.|間接疑問。名詞節なので will も使える。
その山の頂上から見る景色は息をのむほどだった。|The view / from the top / of the mountain / was / breathtaking.|主語が長い。述語動詞は was。
私は彼が嘘をついていると思わなかった。|I / didn't think / that / he / was lying.|否定は主節に置くのが英語の習慣。
その問題を解くのは思ったより簡単だった。|Solving / the problem / was easier / than / I had expected.|動名詞主語。比較級＋than I had expected。
彼女が来るかどうかは天気次第だ。|Whether / she comes / depends / on / the weather.|whether 節が主語（単数扱い）。
この本は子どもが読むには難しすぎる。|This book / is too difficult / for children / to read.|too 〜 for 人 to do。read の目的語（it）は不要。
もし私があなたなら、その仕事を引き受けるだろう。|If / I were / you, / I would / accept the job.|仮定法過去。
彼女はまるで何でも知っているかのように話す。|She / talks / as if / she / knew everything.|as if＋仮定法過去。
彼は約束を必ず守る人だ。|He / is / the kind of person / who / always keeps his promises.|the kind of person who 〜。
年をとるにつれて、時間が速く過ぎるように感じる。|As / we get older, / time seems / to pass / more quickly.|as「〜するにつれて」。
読めば読むほど、その作家が好きになった。|The more / I read, / the more / I liked / the writer.|the 比較級 〜, the 比較級 …。
彼に助けてもらわなかったら、失敗していただろう。|Without / his help, / I / would have / failed.|Without 〜＋仮定法過去完了。
彼女は医者になるために一生懸命勉強している。|She / is studying hard / so that / she can / become a doctor.|so that S can「〜できるように」。
私たちが知っている限り、彼は正直な人だ。|As far as / we know, / he / is / an honest man.|as far as「〜する限り（範囲）」。
その町は以前ほど静かではない。|The town / is not / as quiet / as / it used to be.|not as 〜 as it used to be。
私がその知らせを聞いたのは、ほんの昨日のことだ。|It was / only yesterday / that / I / heard the news.|強調構文。
外国語を学ぶことは、新しい世界の扉を開くことだ。|Learning / a foreign language / is / opening the door / to a new world.|動名詞主語と動名詞補語。the door to 〜。
父は私に、車を運転させてくれなかった。|My father / didn't let / me / drive / his car.|使役 let O 原形。
その試合を見に、何千人もの人が集まった。|Thousands / of people / gathered / to watch / the game.|thousands of 〜。目的の to do。
彼は医者に、たばこをやめるよう忠告された。|He / was advised / by his doctor / to stop / smoking.|advise O to do の受動態。stop doing。
彼女がそう言うのも無理はない。|She / may well / say / so.|may well do「〜するのももっともだ」。
私は寝る前に歯を磨くことにしている。|I / make it a rule / to brush my teeth / before / going to bed.|make it a rule to do。
彼の言うことはいつも理にかなっている。|What / he says / always / makes / sense.|what 節が主語。make sense。
この辞書があれば、英語の新聞が読める。|This dictionary / will enable / you / to read / English newspapers.|無生物主語 enable O to do。
その時になって初めて、私は自分の誤りに気づいた。|Only then / did / I / realize / my mistake.|Only＋副詞の前置による倒置。
いくら努力しても、彼に勝つことはできなかった。|However / hard / I tried, / I / couldn't beat him.|However＋副詞＋S V。
彼女は私に、どこに住んでいるのかと尋ねた。|She / asked me / where / I / lived.|間接疑問。時制の一致。
その会議は来週に延期された。|The meeting / has been / put off / until / next week.|put off「延期する」の受動態。
彼は事故で足をけがした。|He / hurt / his leg / in / the accident.|hurt one's 体の部位。
私には、話し相手が必要だ。|I / need / someone / to talk / to.|不定詞の形容詞用法。前置詞 to が残る。
私たちはその問題について話し合った。|We / discussed / the problem / with / each other.|discuss は他動詞（about 不要）。
彼女は私と同じ大学に通っている。|She / goes to / the same university / as / I do.|the same A as B。
このかばんはあのかばんの2倍の重さだ。|This bag / is / twice / as heavy / as that one.|倍数＋as 〜 as。
私が戻るまで、ここで待っていてください。|Please / wait here / until / I / come back.|until は継続。時の副詞節は現在形。
彼はもはや以前の彼ではない。|He / is / no longer / what / he used to be.|no longer / what he used to be。
重要なのは、あきらめないことだ。|What / is important / is / not to / give up.|What is important is 〜。not to do。`;
const startO=jo?jo.items.length:0;
if(jo)O.split('\n').filter(Boolean).forEach((l,i)=>{const [ja,en,e]=l.split('|');let s=en.trim(),p='';const m=s.match(/([.?!])$/);if(m){p=m[1];s=s.slice(0,-1)}const ch=s.split('/').map(x=>x.trim()).filter(Boolean);jo.items.push({k:'o4:'+i,ja,ch,p,e})});
// 正誤判定：カテゴリ|英文|正しいか(1/0)|正しい形|解説
const T=`他動詞・自動詞|She married with a doctor.|0|She married a doctor.|marry は他動詞。with は不要。
他動詞・自動詞|We reached Tokyo at noon.|1||reach は他動詞で正しい（arrive at と区別）。
他動詞・自動詞|Please explain me the rules.|0|Please explain the rules to me.|explain は SVOO をとらない。explain A to 人。
他動詞・自動詞|He entered into the room quietly.|0|He entered the room quietly.|enter（部屋に入る）は他動詞。enter into は「（交渉など）に入る」。
他動詞・自動詞|The price of vegetables has risen sharply.|1||rise は自動詞で正しい（raise は他動詞）。
他動詞・自動詞|Please lie the box on the table.|0|Please lay the box on the table.|「置く」は他動詞 lay。lie は「横たわる」（自動詞）。
可算・不可算|I need some informations about the school.|0|I need some information about the school.|information は不可算。
可算・不可算|She gave me a useful advice.|0|She gave me a piece of useful advice.|advice は不可算。
可算・不可算|We bought new furniture for the living room.|1||furniture は不可算で正しい。
可算・不可算|There were many people in the station.|1||people は複数扱いで正しい。
可算・不可算|I have a lot of homeworks today.|0|I have a lot of homework today.|homework は不可算。
可算・不可算|He made a great progress in English.|0|He made great progress in English.|progress は不可算（a は不要）。
形容詞|I was very exciting at the concert.|0|I was very excited at the concert.|人の感情は -ed（excited）。
形容詞|The movie was so bored that I fell asleep.|0|The movie was so boring that I fell asleep.|物が人を退屈させる → boring。
形容詞|It is convenient for me to meet at six.|1||convenient は物・事を主語にする。It is convenient for 人 で正しい。
形容詞|Are you convenient tomorrow?|0|Is tomorrow convenient for you?|convenient は人を主語にとらない。
形容詞|The number of students is very many.|0|The number of students is very large.|number は large / small。
副詞|He hardly works, so he is always tired.|0|He works hard, so he is always tired.|hardly は「ほとんど〜ない」。「熱心に」は hard。
副詞|I have already finished my homework.|1||already は現在完了と使えて正しい。
副詞|She came home lately last night.|0|She came home late last night.|「遅く」は late。lately は「最近」。
副詞|I almost failed the exam.|1||almost＋動詞「危うく〜しそうになった」で正しい。
副詞|Almost students like summer vacation.|0|Most students like summer vacation.|almost は副詞。「ほとんどの〜」は most / almost all。
比較|This book is more easier than that one.|0|This book is easier than that one.|比較級の二重使用。
比較|She is the most kind person I have ever met.|0|She is the kindest person I have ever met.|kind の最上級は kindest。
比較|My bag is heavier than yours.|1||yours＝your bag で比較対象がそろっている。
比較|The climate of Japan is milder than Canada.|0|The climate of Japan is milder than that of Canada.|気候と気候を比べる（that of）。
比較|He is two years older than me.|1||差分スロットに two years。口語では than me も可。
比較|I prefer coffee than tea.|0|I prefer coffee to tea.|prefer A to B。
時制|I have visited Kyoto last year.|0|I visited Kyoto last year.|過去を表す語（last year）と現在完了は使えない。
時制|I will call you when I will arrive.|0|I will call you when I arrive.|時の副詞節は未来でも現在形。
時制|I have lived here since I was ten.|1||継続の現在完了で正しい。
時制|When I got to the station, the train already left.|0|When I got to the station, the train had already left.|着いたより前のことは過去完了。
時制|She is knowing the answer.|0|She knows the answer.|know は状態動詞で進行形にしない。
時制|By the time you arrive, we will have finished dinner.|1||未来完了で正しい。
前置詞|I was born on 2008.|0|I was born in 2008.|年は in。
前置詞|We arrived at Tokyo in the morning.|0|We arrived in Tokyo in the morning.|都市など広い場所は arrive in。
前置詞|She is good at playing the piano.|1||be good at doing で正しい。
前置詞|I'm looking forward to see you.|0|I'm looking forward to seeing you.|look forward to の to は前置詞。
前置詞|He is married with a teacher.|0|He is married to a teacher.|be married to 人。
前置詞|The key of the door is lost.|0|The key to the door is lost.|key to 〜。
冠詞|I play the piano every day.|1||楽器には the をつける。
冠詞|I play the soccer after school.|0|I play soccer after school.|スポーツには the をつけない。
冠詞|She is an university student.|0|She is a university student.|university は発音が子音で始まる（/ju/）ので a。
冠詞|He goes to school by the bus.|0|He goes to school by bus.|by＋交通手段は無冠詞。
冠詞|I want to be a doctor in the future.|1||in the future で正しい。
数量・代名詞|Each of the students have a computer.|0|Each of the students has a computer.|each は単数扱い。
数量・代名詞|Everyone should do their best.|1||everyone を their で受けるのは現代英語で一般的。
数量・代名詞|I have few money left.|0|I have little money left.|money は不可算 → little。
数量・代名詞|A number of students was absent.|0|A number of students were absent.|a number of は複数扱い。
数量・代名詞|Neither of the answers is correct.|1||neither は原則単数扱いで正しい。`;
if(tf){const base=tf.items.length;T.split('\n').filter(Boolean).forEach((l,i)=>{const [cat,q,ok,fix,e]=l.split('|');tf.items.push({k:'tf4:'+i,cat,q,ok:ok==='1',fix:fix||'',e})})}
})();
