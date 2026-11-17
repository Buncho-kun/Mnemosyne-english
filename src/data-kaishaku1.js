// 英文解釈（構文）§1〜§7 ― 例文・解説・例題・応用問題はすべてこのアプリ用に作成
(function(){
const D=window.EIGO_DATA;
const L=[];
const ej=(k,en,ja,point,hint,long)=>({k,kind:'ej',en,models:Array.isArray(ja)?ja:[ja],point,hint:hint||'',long:!!long});

/* ================= §1 文型(1) ================= */
L.push({k:'ks1',no:'§1',title:'文型(1)　自動詞と他動詞・SV・SVC',sub:'動詞の「型」を見抜くことが読解の出発点',
body:`
# 1-1 自動詞と他動詞
: 英文を読むときは、まず動詞を見つけ、その動詞が**目的語（O）をとっているか**を確認する。目的語をとらない動詞を**自動詞（Vi）**、とる動詞を**他動詞（Vt）**という。
: 同じ動詞でも、自動詞と他動詞で**意味が大きく変わる**ものがある。辞書の最初の意味だけで訳すと誤訳になるので、後ろに名詞が直接続くかどうかを必ず確かめる。
= 1-1-1|My aunt {runs} a small bakery near the station.|叔母は駅の近くで小さなパン屋を**経営している**。
: run は自動詞なら「走る」だが、後ろに a small bakery という目的語があるので他動詞「〜を経営する」。
[自動詞と他動詞で意味が大きく変わる動詞]
| run | (自)走る；(液体が)流れる | (他)〜を経営する、運営する
| recover | (自)回復する | (他)〜を取り戻す
| succeed | (自)成功する(in)；継承する(to) | (他)〜の後を継ぐ
| attend | (自)注意を払う、世話をする(to) | (他)〜に出席する
| reflect | (自)よく考える(on) | (他)〜を反映する、映す
| stand | (自)立っている | (他)〜に耐える(否定・疑問で)
| yield | (自)屈する、譲る(to) | (他)〜を産出する、もたらす
| count | (自)重要である | (他)〜を数える
| miss | ― | (他)〜しそこなう；〜がいなくて寂しく思う
- 1-1-2|The patient slowly {recovered} after the operation.|患者は手術の後、ゆっくりと**回復した**。
- 1-1-3|The police {recovered} the stolen paintings.|警察は盗まれた絵画を**取り戻した**。
- 1-1-4|She {succeeded} in persuading her parents.|彼女は両親を説得することに**成功した**。
- 1-1-5|Prince Henry {succeeded} his father as king.|ヘンリー王子は父の**後を継いで**王になった。
- 1-1-6|You should {attend} to what the teacher is saying.|先生が言っていることに**注意を払う**べきだ。
- 1-1-7|More than a hundred people {attended} the meeting.|100人を超える人がその会合に**出席した**。
- 1-1-8|Take some time to {reflect} on your own mistakes.|時間をとって自分の失敗について**よく考え**なさい。
- 1-1-9|His novels {reflect} the life of ordinary workers.|彼の小説は普通の労働者の生活を**反映している**。
- 1-1-10|I can't {stand} people who are always late.|いつも遅刻する人には**耐えられない**。
- 1-1-11|Every vote {counts}.|一票一票が**重要である**。
> 判別のコツ：動詞の直後に**前置詞なしで名詞**があれば他動詞。前置詞(to / on / in)が続けば自動詞。succeed to / succeed in、attend to / attend O の区別は入試頻出。

# 1-2 前置詞をつけない他動詞・つける自動詞
: 日本語の「〜について」「〜に」「〜と」につられて、他動詞に前置詞をつけてしまうミスが多い。下の動詞は**他動詞**なので、目的語を直接とる。読解では「前置詞がないから目的語がない」と誤解しないこと。
= 1-2-1|We {discussed} the plan for two hours.|私たちは2時間その計画**について話し合った**。
x We discussed about the plan.
[前置詞をつけない他動詞（日本語訳に注意）]
| discuss O | Oについて話し合う
| approach O | Oに近づく
| marry O | Oと結婚する（get married to O も可）
| enter O | O(場所)に入る（議論・交渉に「入る」は enter into）
| reach O | Oに着く、届く
| resemble O | Oに似ている
| contact O | Oと連絡をとる
| mention O | Oについて述べる
| oppose O | Oに反対する（be opposed to O も可）
| answer O | Oに答える
| obey O | Oに従う
- 1-2-2|A large storm is {approaching} the coast.|大きな嵐が沿岸に**近づいている**。
x A large storm is approaching to the coast.
- 1-2-3|She {married} a pianist from Vienna.|彼女はウィーン出身のピアニスト**と結婚した**。
x She married with a pianist.
- 1-2-4|The students {entered} the hall quietly.|生徒たちは静かにホール**に入った**。
x The students entered into the hall.
- 1-2-5|The two companies {entered into} talks last month.|その2社は先月、交渉**に入った**。
- 1-2-6|The baby {resembles} her grandfather.|その赤ちゃんは祖父**に似ている**。
x The baby is resembling her grandfather.（resemble は状態動詞なので進行形にしない）
: 逆に、日本語では「〜を」と言うのに**自動詞**で、前置詞が必要な動詞もある。
[前置詞が必要な自動詞]
| listen to A | Aを聞く
| look at A | Aを見る
| wait for A | Aを待つ
| complain to A about B | Bのことで A に不満を言う
| apologize to A for B | Bのことで A に謝る
| agree with A / to B | A(人・意見)に同意する／B(提案)に同意する
| object to A | Aに反対する
| graduate from A | Aを卒業する
| arrive at [in] A | Aに着く
- 1-2-7|She {apologized to} her neighbor {for} the noise.|彼女は騒音のことで隣人**に謝った**。
- 1-2-8|Many residents {objected to} the new airport.|多くの住民が新空港**に反対した**。

# 1-3 第1文型（SV）
: S と V だけで文が成り立つ形。後ろに続く語句（前置詞句・副詞）は**すべて修飾語（M）**であり、文の骨組みには入らない。長い文でも、M を（ ）でくくれば S V が見えてくる。
= 1-3-1|Some birds (fly) (thousands of kilometers) (every autumn).|毎年秋に何千キロも飛ぶ鳥がいる。
: thousands of kilometers は名詞だが、ここでは「どれだけ」を表す**副詞的な名詞**で、目的語ではない。距離・時間・回数を表す名詞は M になれる。
# 1-3-A 自動詞として使うと意味が変わる動詞
: 普段は他動詞の動詞が、目的語を省いて自動詞として使われると、**特定の目的語を補った意味**になることがある。
| drink | 酒を飲む
| read | 読書をする
| write | 手紙を書く；文章を書く
| smoke | たばこを吸う
| eat | 食事をする
- 1-3-2|My father doesn't {drink} at all.|父は**酒を**まったく**飲まない**。
- 1-3-3|I like to {read} before going to bed.|私は寝る前に**読書をする**のが好きだ。
# 1-3-B 「〜で十分だ」「割に合う」などの自動詞
: do・pay・tell・count・matter・work は、自動詞として次の意味で使われる。直訳すると意味が通らないので要注意。
| do | 間に合う、十分である（will do で「それでいい」）
| pay | 割に合う、得になる
| tell | 効き目がある、影響が出る(on)
| matter / count | 重要である
| work | うまくいく、(薬が)効く
| last | 続く、長持ちする
- 1-3-4|Any pen will {do}.|どんなペンでも**かまいません**。
- 1-3-5|Kindness always {pays} in the end.|親切は最後には必ず**報われる**。
- 1-3-6|The long hours began to {tell} on her health.|長時間労働が彼女の健康に**こたえ始めた**。
- 1-3-7|It doesn't {matter} what other people think.|他人がどう思うかは**重要ではない**。
- 1-3-8|The new medicine {worked} well.|新しい薬はよく**効いた**。
# 1-3-C 「物が主語」で受け身のような意味になる自動詞（能動受動態）
: sell・read・cut・wash・open などは、物を主語にして**「〜される、〜できる」**の意味を表す。様態を表す副詞（well / easily）を伴うことが多い。
- 1-3-9|This shirt {washes} easily.|このシャツは簡単に**洗える**。
- 1-3-10|Her first novel {sold} more than a million copies.|彼女の最初の小説は100万部以上**売れた**。
- 1-3-11|The poem {reads} like a letter to a friend.|その詩は友人への手紙のように**読める**。
# 1-3-D There + V + S（存在・出現の構文）
: there の後の動詞は be 以外にもいろいろある（live / exist / remain / come / arise / occur / seem to be など）。there は**主語ではなく**、主語は**動詞の後ろの名詞**。there は「そこに」と訳さない。
= 1-3-12|In the late 1990s there {arose} a new interest in organic farming.|1990年代後半、有機農業への新たな関心が**生まれた**。
: S は a new interest。動詞 arose の後ろに長い主語が来ている。数の一致も後ろの主語で決まる（There remain a few problems.）。
- 1-3-13|There once {lived} a wise king in this valley.|昔、この谷には賢い王が**住んでいた**。
- 1-3-14|There {seems to be} some confusion about the date.|日付について少し混乱が**あるようだ**。
- 1-3-15|There {remain} several questions to be answered.|答えるべき問題がいくつか**残っている**。

# 1-4 第2文型（SVC）
: S＝C の関係が成り立つ文型。C（補語）は**名詞か形容詞**で、S の性質・状態を説明する。**副詞は C になれない**ことに注意。
= 1-4-1|The plan {sounds} {interesting}.|その計画は**おもしろそうに思える**。
x The plan sounds interestingly.
: sound / look / smell / taste / feel は「〜に聞こえる・見える…」の意味で、後ろに形容詞をとる（感覚動詞）。
- 1-4-2|The soup {tastes} a little salty.|スープは少し塩辛い**味がする**。
- 1-4-3|You {look} tired today.|今日は疲れている**ように見える**ね。
- 1-4-4|She {seems} (to be) a capable leader.|彼女は有能なリーダー**のようだ**。
[「〜になる」型（変化）]
| become / get C | Cになる（get は名詞を補語にとらない）
| grow C | (だんだん)Cになる：grow old / grow dark
| turn C | (色・状態が)Cに変わる：turn red / turn pale
| go C | (悪い状態に)なる：go bad / go wrong / go bankrupt
| come C | (よい状態・本来の状態に)なる：come true / come alive
| fall C | (急に)Cになる：fall asleep / fall ill / fall silent
| prove [turn out] (to be) C | Cだとわかる
: go は**悪い方向**、come は**よい方向・本来あるべき方向**への変化を表すことが多い。
- 1-4-5|The milk has {gone} sour.|牛乳が**酸っぱくなってしまった**。
- 1-4-6|Her dream of studying abroad finally {came} true.|留学するという彼女の夢がついに**実現した**。
- 1-4-7|The rumor {turned out} (to be) false.|そのうわさはうそ**だとわかった**。
- 1-4-8|The audience {fell} silent when the music stopped.|音楽が止まると、聴衆は**静まり返った**。
[「〜のままである」型（維持）]
| keep / stay / remain C | Cのままである：keep quiet / stay calm
| lie C | Cの状態にある：lie idle（使われずにある）
| stand C | Cの状態で立っている：stand still（じっとしている）
- 1-4-9|Please {remain} seated until the plane stops.|飛行機が止まるまで**座ったままでいて**ください。
- 1-4-10|Many houses in the town {lie} empty.|町の多くの家が**空き家になっている**。
# 1-4-A 分詞・前置詞句が C になる
: 補語には形容詞のほか、**分詞**や**前置詞句**もなる。動詞の後ろに -ing / p.p. があっても、進行形・受動態とは限らない。
= 1-4-11|The children {came} {running} toward their mother.|子どもたちは母親の方へ**走ってやって来た**。
: came running は「走りながら来た」。S＝C（The children が running の状態）が成り立つ。
- 1-4-12|He {sat} {surrounded} by his grandchildren.|彼は孫たちに**囲まれて座っていた**。
- 1-4-13|This information is {of great importance}.|この情報は**非常に重要だ**。
: of + 抽象名詞＝形容詞（of importance = important, of use = useful, of value = valuable）。
> 判別のコツ：動詞の後ろの語が S とイコールになるなら C（SVC）、イコールにならないなら O（SVO）。He became a doctor.（He＝a doctor → C）／ He called a doctor.（He≠a doctor → O）
`,
drills:[
ej('ks1d1','The manager {attended} to every complaint personally.','部長はすべての苦情に自ら**対応した**。','attend to A は自動詞用法で「Aに注意を払う、対処する、世話をする」。attend A（他動詞）「Aに出席する」と区別する。to があるので自動詞と判断できる。','attend の後ろに何がある？'),
ej('ks1d2','It took the town ten years to {recover} from the earthquake.','その町が地震から**立ち直る**のに10年かかった。','recover from A は自動詞「Aから回復する」。It takes 人 時間 to do「人が〜するのに時間がかかる」。'),
ej('ks1d3','Few people can {stand} working in such heat.','そんな暑さの中で働くことに**耐えられる**人はほとんどいない。','stand + 動名詞「〜することに耐える」。few は「ほとんど〜ない」という否定の意味。can stand は否定・疑問で使うことが多いが、few による準否定の文でも使われる。'),
ej('ks1d4','A little effort now will {pay} in the long run.','今の少しの努力が、長い目で見れば**報われる**だろう。','pay は自動詞で「割に合う、報われる」。in the long run「長い目で見れば」。「支払う」と訳すと意味が通らない。'),
ej('ks1d5','There {exist} many languages that have no written form.','文字をもたない言語が数多く**存在する**。','There + V + S の構文。exist が複数形主語 many languages に一致している。that 以下は languages を修飾する関係代名詞節。there を「そこに」と訳さない。'),
ej('ks1d6','His explanation {sounded} reasonable at first, but it {proved} completely wrong.','彼の説明は最初はもっともらしく**聞こえた**が、まったく間違っている**とわかった**。','sound C「Cに聞こえる」、prove (to be) C「Cだとわかる」。どちらも SVC。reasonable と wrong は形容詞の補語。'),
ej('ks1d7','The book {reads} more like a diary than a novel.','その本は小説というより日記のように**読める**。','read が物を主語にとる自動詞「(〜のように)読める」。more like A than B「BというよりむしろAのように」。'),
ej('ks1d8','Our efforts {came} to nothing, and the company {went} bankrupt.','私たちの努力は**無駄に終わり**、会社は**倒産した**。','come to nothing「無駄に終わる」。go bankrupt「倒産する」は go + 形容詞で「悪い状態になる」の典型。'),
ej('ks1d9','The old castle has {stood} empty for more than a century.','その古城は1世紀以上も**空き家のままになっている**。','stand C「Cの状態である」。empty は補語。stood だけを見て「立っていた」とだけ訳すのは不十分。'),
ej('ks1d10','When I was a child, I used to spend hours reading in the library, and the habit has lasted all my life. {What matters most, I believe, is not how many books you read but how deeply you think about them.}','私は子どものころ、図書館で何時間も本を読んで過ごしたものだが、その習慣は一生**続いて**いる。私が思うに、**最も重要なのは、何冊の本を読むかではなく、その本についてどれだけ深く考えるかである**。','【構造】What matters most が S（what 節：最も重要なこと）、is が V、not A but B が C。I believe は挿入。\n【ポイント】matter は自動詞「重要である」。last は自動詞「続く」。how many books you read と how deeply you think about them は間接疑問の名詞節で、not A but B「AではなくB」で並んでいる。','matter・last はここでは自動詞',true),
ej('ks1d11','In many villages in the region there remained, even after the war, a strong belief in the old gods. {Few people openly opposed the new government, but the old customs continued quietly in their daily lives.}','その地域の多くの村には、戦後になっても、昔の神々への強い信仰が残っていた。**新政府に公然と反対する人はほとんどいなかったが、古い習慣は人々の日常生活の中でひっそりと続いていた**。','【構造】1文目は there + remained + S（a strong belief）で、間に挿入句 even after the war が入っている。\n【ポイント】oppose は他動詞「〜に反対する」（前置詞不要）。continue は自動詞「続く」。few は「ほとんどいない」と否定的に訳す。','oppose は他動詞',true)
]});

/* ================= §2 文型(2) ================= */
L.push({k:'ks2',no:'§2',title:'文型(2)　SVO・SVOO',sub:'目的語の形と、2つの目的語をとる動詞',
body:`
# 2-1 第3文型（SVO）の目的語の形
: 目的語（O）になれるのは**名詞の働きをするもの**。単語の名詞だけでなく、**不定詞・動名詞・that 節・疑問詞節・whether [if] 節**も O になる。O が長いときは、どこまでが O かを見極めるのが読解の鍵。
= 2-1-1|I {regret} {telling him the truth}.|私は彼に本当のことを言ったことを**後悔している**。
= 2-1-2|Scientists {believe} {that the universe is still expanding}.|科学者たちは**宇宙がまだ膨張し続けていると考えている**。
= 2-1-3|Nobody {knows} {whether the plan will work}.|その計画がうまくいくかどうかは誰にも**わからない**。
- 2-1-4|We {wondered} {what had happened to him}.|私たちは彼に何が起こったのだろうかと**思った**。
# 2-1-A 不定詞と動名詞で意味が変わる動詞
[目的語が to do か doing かで意味が変わる]
| remember to do | (これから)忘れずに〜する
| remember doing | (過去に)〜したことを覚えている
| forget to do | 〜し忘れる
| forget doing | 〜したことを忘れる
| try to do | 〜しようと努める
| try doing | 試しに〜してみる
| regret to do | 残念ながら〜する
| regret doing | 〜したことを後悔する
| stop doing | 〜するのをやめる（stop to do は「〜するために立ち止まる」で SV＋M）
- 2-1-5|{Remember to lock} the door when you leave.|出かけるときは**忘れずに**ドアに鍵を**かけて**ね。
- 2-1-6|I {remember locking} the door, but now it's open.|ドアに鍵を**かけたことは覚えている**のに、今は開いている。
- 2-1-7|We {regret to inform} you that the event has been canceled.|**残念ながら**イベントは中止になったことを**お知らせします**。
- 2-1-8|He {stopped to look} at the map.|彼は地図を**見るために立ち止まった**。
> stop to do の to do は目的語ではなく**目的を表す副詞用法**。文型は SV（＋M）。「見るのをやめた」と訳さないこと。
# 2-1-B 再帰代名詞が目的語になる表現
: oneself を目的語にとる表現は、日本語では自動詞のように訳すと自然。
| enjoy oneself | 楽しむ
| help oneself to A | Aを自由にとって食べる
| seat oneself | 座る
| devote oneself to A | Aに専念する
| present oneself | 出席する、現れる
| find oneself 〜 | (気がつくと)〜にいる
- 2-1-9|We {enjoyed ourselves} at the festival.|私たちは祭りを**楽しんだ**。
x We enjoyed at the festival.（enjoy は他動詞なので目的語が必要）
- 2-1-10|When I woke up, I {found myself} in a hospital bed.|目が覚めると、**私は**病院のベッドに**いた**。

# 2-2 第4文型（SVOO）
: 「O₁（人）に O₂（物）を〜する」の形。**V + 人 + 物**の語順で、名詞が2つ並んでいたら SVOO を疑う。
= 2-2-1|My grandmother {gave} me her old camera.|祖母は私に古いカメラを**くれた**。
: SVO + to [for] 人 に書きかえられる。give / show / tell / lend / send などは **to**、buy / make / find / cook / choose などは **for** をとる。
[to 型と for 型]
| to 型（相手に届く） | give, lend, show, tell, teach, send, pay, offer, hand
| for 型（相手のために） | buy, make, cook, find, choose, get, leave
| of 型 | ask a question of 人
# 2-2-A 「与える」以外の意味の SVOO
: SVOO は「与える」型だけではない。**「O₁ から O₂ を奪う・O₁ に O₂ を負わせる」**型の動詞は、訳し方に注意。
[「与える」以外の SVOO]
| cost O₁ O₂ | O₁にO₂(費用・犠牲)を払わせる
| save O₁ O₂ | O₁のO₂(手間・費用)を省く
| take O₁ O₂ | O₁にO₂(時間)がかかる
| spare O₁ O₂ | O₁にO₂(手間)をかけさせない；O₁にO₂を割く
| owe O₁ O₂ | O₁にO₂を借りている；O₂はO₁のおかげだ
| envy O₁ O₂ | O₁のO₂をうらやむ
| wish O₁ O₂ | O₁にO₂を祈る
| deny O₁ O₂ | O₁にO₂を与えない
= 2-2-2|The mistake {cost} him his job.|その失敗のせいで彼は**職を失った**。
: 直訳は「その失敗は彼に職という代償を払わせた」。無生物主語なので、「〜のせいで彼は…」と訳すと自然（→§8 無生物主語）。
- 2-2-3|This dishwasher will {save} you a lot of time.|この食洗機を使えば**多くの時間が節約できる**。
- 2-2-4|It {took} us three days to paint the fence.|フェンスを塗るのに3日**かかった**。
- 2-2-5|I {owe} my success to my teachers.|私が成功したのは先生たちの**おかげだ**。
: owe は SVOO（owe 人 物）と SVO to 人（owe 物 to 人）の両方があり、後者では「物は人のおかげだ」の意味になる。
- 2-2-6|Please {spare} me the details.|詳しい話は**しなくていいよ**。
- 2-2-7|I {envy} you your talent for music.|君の音楽の才能が**うらやましい**。
- 2-2-8|We {wish} you a happy new year.|よいお年を**お迎えください**。
# 2-2-B SVO + 前置詞 + 名詞 の重要な型
: SVOO と並んで、**V + O + 前置詞 + 名詞**の形で決まった意味を表す動詞が多い。前置詞を手がかりにすると意味が予測できる。
[V A of B（Aから B を奪う／Aに B を知らせる）]
| rob [deprive] A of B | AからBを奪う
| cure A of B | AのB(病気・悪癖)を治す
| clear A of B | AからBを取り除く
| remind A of B | AにBを思い出させる
| inform A of B | AにBを知らせる
| convince A of B | AにBを確信させる
[V A with B（Aに B を与える）]
| provide [supply] A with B | AにBを供給する
| present A with B | AにBを贈呈する
| equip A with B | AにBを備えつける
[V A from B（Aが B するのを妨げる）]
| prevent [keep, stop] A from doing | Aが〜するのを妨げる
| prohibit A from doing | Aが〜するのを禁じる
| distinguish A from B | AとBを区別する
[V A for B（Bのことで Aを〜する）]
| blame A for B | BのことでAを責める
| thank A for B | BのことでAに感謝する
| praise A for B | BのことでAをほめる
- 2-2-9|The war {deprived} many children {of} their education.|戦争は多くの子どもから教育を**奪った**。
- 2-2-10|This photo {reminds} me {of} my school days.|この写真を見ると学生時代を**思い出す**。
- 2-2-11|The heavy snow {prevented} us {from} leaving the hotel.|大雪のために私たちはホテルを**出られなかった**。
> 読解のコツ：rob / deprive / remind / prevent などが出てきたら、**後ろの前置詞（of / from）まで見てから**意味を決める。
`,
drills:[
ej('ks2d1','I clearly {remember seeing} her at the station that morning.','その朝、駅で彼女を**見たことを**はっきり**覚えている**。','remember doing は「（過去に）〜したことを覚えている」。remember to do「忘れずに〜する」と区別する。'),
ej('ks2d2','He {stopped to talk} with an old friend on his way home.','彼は帰り道で旧友と**話すために立ち止まった**。','stop to do の to do は目的を表す副詞用法。「話すのをやめた」は stop talking。'),
ej('ks2d3','The new highway will {save} drivers about thirty minutes.','新しい幹線道路によって、ドライバーは約30分**短縮できる**だろう。','save O₁ O₂「O₁のO₂を省く」。無生物主語なので「〜によって」と訳すと自然。'),
ej('ks2d4','His carelessness {cost} the team the championship.','彼の不注意のせいで、チームは**優勝を逃した**。','cost O₁ O₂「O₁にO₂を失わせる」。「チームに優勝を支払わせた」という直訳を自然な日本語に直す。'),
ej('ks2d5','I {owe} it to my mother that I became interested in science.','私が科学に興味を持つようになったのは母の**おかげだ**。','owe A to B「AはBのおかげだ」。A が that 節で長いので形式目的語 it を置き、本当の目的語の that 節を後ろに回している（→§5）。'),
ej('ks2d6','Fear of failure often {prevents} people {from} trying new things.','失敗への恐れから、人は新しいことに挑戦**できなくなる**ことが多い。','prevent A from doing「Aが〜するのを妨げる」。無生物主語なので「〜のために人は…できない」と訳すとよい。'),
ej('ks2d7','The doctor {assured} me that the operation was safe, but nothing could {rid} me {of} my anxiety.','医者は手術は安全だと**請け合ってくれた**が、何をしても不安は**消えなかった**。','assure 人 that 節「人に〜だと保証する」。rid A of B「AからBを取り除く」は of 型。nothing を主語にした否定文は「何も〜ない」と訳す。'),
ej('ks2d8','She {devoted herself} to helping refugees for the rest of her life.','彼女は残りの人生を難民の支援に**捧げた**。','devote oneself to doing「〜に専念する、身を捧げる」。to は前置詞なので後ろは動名詞。'),
ej('ks2d9','Modern technology has provided us with countless conveniences. {But it has also deprived many of us of the quiet time we once had to think deeply about our lives.}','現代の科学技術は私たちに数えきれないほどの便利さを**与えてくれた**。**しかしそれは同時に、私たちの多くから、かつて自分の人生について深く考えるために持っていた静かな時間を奪ってしまった**。','【構造】it（＝modern technology）が S、has deprived が V、many of us が O、of the quiet time ... が「奪われた物」。\n【ポイント】deprive A of B「AからBを奪う」。the quiet time (that) we once had は関係代名詞の省略で「かつて持っていた静かな時間」。to think deeply about our lives は time を修飾する形容詞用法の不定詞「人生について深く考えるための」。had to think（〜しなければならなかった）と読まないこと。1文目の provide A with B「AにBを与える」と対になっている。','deprive A of B の A と B を確定させる',true)
]});

/* ================= §3 文型(3) ================= */
L.push({k:'ks3',no:'§3',title:'文型(3)　SVOC',sub:'O と C の間に「主語と述語」の関係がある',
body:`
# 3-1 第5文型（SVOC）の基本
: SVOC では **O と C の間に「O が C である／O が C する」という主語・述語の関係（ネクサス）**がある。これを見抜けるかどうかで、訳の正確さが大きく変わる。
= 3-1-1|The news {made} everyone {happy}.|その知らせを聞いて**みんな喜んだ**。
: everyone＝happy の関係。直訳「その知らせはみんなを幸せにした」→ 無生物主語なので「〜を聞いてみんなは…」と訳すと自然。
= 3-1-2|We {call} the cat {Mochi}.|私たちはその猫を**モチと呼んでいる**。
: the cat＝Mochi。SVOO（We gave the cat milk.）との違いは、O と C がイコールになるかどうか。
[C が名詞・形容詞になる主な動詞]
| make O C | OをCにする
| keep / leave O C | OをCのままにしておく
| find O C | OがCだとわかる
| think / consider / believe O (to be) C | OがCだと思う
| call / name O C | OをCと呼ぶ／名づける
| elect / appoint O C | OをCに選ぶ／任命する
| paint O C | OをCに塗る
- 3-1-3|Please {leave} the window {open}.|窓を**開けたままにして**おいてください。
- 3-1-4|I {found} the test surprisingly {easy}.|テストは意外に**簡単だった**。
: find O C は「（経験してみて）OがCだとわかる、思う」。「テストを簡単に見つけた」ではない。
- 3-1-5|They {elected} her {chairperson} of the committee.|彼らは彼女を委員会の**委員長に選んだ**。
: 役職名が C になるとき、冠詞をつけないことが多い。

# 3-2 C に不定詞・原形・分詞がくる SVOC
: C には、**to 不定詞・原形不定詞・現在分詞・過去分詞**もくる。O と C の関係は「O が〜する（能動）」か「O が〜される（受動）」かを必ず確かめる。
[C の形と O との関係]
| V O to do | Oが〜する（want, ask, tell, allow, enable, cause, force, encourage）
| V O do（原形） | Oが〜する（使役 make / let / have、知覚 see / hear / feel / watch）
| V O doing | Oが〜している（知覚動詞、keep, leave, find, catch）
| V O done | Oが〜される（使役 have / get / make、知覚動詞、keep, leave, find）
= 3-2-1|My parents {allowed} me {to study} abroad.|両親は私が留学**するのを許してくれた**。
- 3-2-2|The new system {enables} users {to pay} by smartphone.|新しいシステムのおかげで、利用者はスマートフォンで**支払いができる**。
- 3-2-3|What {caused} you {to change} your mind?|どうして気が**変わった**のですか。
: What caused you to do ...? は直訳「何があなたに〜させたのか」→「どうして〜したのか」。
# 3-2-A 使役動詞
[使役動詞のニュアンス]
| make O do | (強制的に)Oに〜させる
| let O do | (許可して)Oに〜させてやる
| have O do | (当然の仕事として)Oに〜してもらう
| get O to do | (説得して)Oに〜してもらう
| have [get] O done | Oを〜してもらう（依頼）／Oを〜される（被害）
- 3-2-4|The teacher {made} us {rewrite} the essay.|先生は私たちに作文を**書き直させた**。
- 3-2-5|{Let} me {know} if you need any help.|手伝いが必要なら**知らせて**ね。
- 3-2-6|I {had} my hair {cut} yesterday.|昨日、髪を**切ってもらった**。
: my hair＝cut（切られる）の受動関係なので過去分詞。
- 3-2-7|She {had} her bag {stolen} on the train.|彼女は電車でかばんを**盗まれた**。
: have O done は「依頼」と「被害」の2つの意味がある。文脈で判断する。
x She was stolen her bag.（steal の受動態の主語は「盗まれた物」）
# 3-2-B 知覚動詞
- 3-2-8|I {heard} someone {call} my name.|誰かが私の名前を**呼ぶのが聞こえた**。
- 3-2-9|We {watched} the sun {going} down behind the hills.|私たちは丘の向こうに日が**沈んでいくのを見ていた**。
- 3-2-10|I have never {heard} this song {sung} in Japanese.|この歌が日本語で**歌われるのを聞いた**ことがない。
: 原形は「動作の全体（始めから終わりまで）」、-ing は「動作の途中」を表す。
> 受動態にすると原形は to 不定詞になる：We saw him enter the room. → He was seen **to enter** the room. / They made him wait. → He was made **to wait**.

# 3-3 見抜きにくい SVOC
# 3-3-A O が長くて後ろに回る（形式目的語 it）
: O が不定詞や that 節で長いとき、O の位置に **it** を置いて本当の O を後ろに回す（→§5で詳述）。
= 3-3-1|The Internet has {made} {it} {possible} {to work from home}.|インターネットのおかげで**在宅勤務が可能になった**。
: it＝to work from home。make it possible to do「〜することを可能にする」。
# 3-3-B C が O の前に出る（倒置）
: O が長いと、**V + C + O** の語順になることがある。C になれる形容詞（clear / possible / known など）の後ろに名詞のかたまりが続いたら疑う。
= 3-3-2|The research {made} {clear} {the dangers of the new drug}.|その研究によって**新薬の危険性が明らかになった**。
: 本来は made the dangers of the new drug clear。O が長いので C の clear が前に出た。
- 3-3-3|The fire {laid} {bare} {the weaknesses of the building's design}.|その火事で建物の設計の弱点が**むき出しになった**。
# 3-3-C 前置詞 as をとる SVOC 相当の形
: regard / see / view / think of / look on / refer to / describe A **as** B は「AをBとみなす」。as の後ろが C の役割をする。
| regard [see, view] A as B | AをBとみなす
| think of [look on] A as B | AをBと考える
| describe A as B | AをBだと言う
| treat A as B | AをBとして扱う
| take A for B | AをBだと思い込む（誤解）
| mistake A for B | AをBと間違える
- 3-3-4|Many people {regard} him {as} the greatest writer of his time.|多くの人が彼を同時代で最も偉大な作家**とみなしている**。
- 3-3-5|I {mistook} her {for} her twin sister.|私は彼女を双子の姉**と間違えた**。
> 文型判別のまとめ：V の後ろに名詞が2つ → ① O₁≠O₂ なら SVOO、② O＝C なら SVOC。V の後ろに「名詞＋形容詞／分詞／to do／原形」→ SVOC を疑い、O と C の主述関係で訳す。
`,
drills:[
ej('ks3d1','His silence {made} me {nervous}.','彼が黙っていたので、私は**不安になった**。','make O C「OをCにする」。無生物主語 His silence は「彼が黙っていたので」と理由に訳す。'),
ej('ks3d2','I {found} the old man {sitting} alone on the bench.','その老人が一人でベンチに**座っているのが目に入った**。','find O doing「Oが〜しているのを見つける」。the old man と sitting が主述関係。'),
ej('ks3d3','Don\'t {leave} the water {running} while you brush your teeth.','歯を磨いている間、水を**出しっぱなしにしてはいけない**。','leave O doing「Oを〜したままにしておく」。'),
ej('ks3d4','I {had} my bicycle {repaired} at the shop near the school.','学校の近くの店で自転車を**修理してもらった**。','have O done「Oを〜してもらう」。my bicycle＝repaired の受動関係。'),
ej('ks3d5','The scholarship {enabled} her {to continue} her studies.','奨学金のおかげで、彼女は研究を**続けることができた**。','enable O to do「Oが〜するのを可能にする」。無生物主語は「〜のおかげで」と訳す。'),
ej('ks3d6','He was {made to wait} for over an hour at the airport.','彼は空港で1時間以上**待たされた**。','make O do の受動態は be made to do。原形が to 不定詞に変わる。'),
ej('ks3d7','Recent studies have {made} {clear} the link between sleep and memory.','最近の研究によって、睡眠と記憶の関係が**明らかになった**。','made clear O の倒置。本来は made the link between sleep and memory clear。O が長いので C が前に出ている。'),
ej('ks3d8','We {consider} {it} our duty {to protect} the forest for future generations.','未来の世代のために森を**守ることが**私たちの義務**だと考えている**。','consider it C to do。it は形式目的語で、to protect 以下が本当の目的語。it＝our duty の SVOC。'),
ej('ks3d9','I {mistook} the stranger {for} an old classmate and waved at him.','私はその見知らぬ人を昔の同級生**と間違えて**手を振った。','mistake A for B「AをBと間違える」。'),
ej('ks3d10','Many early scientists were laughed at by the public. {People regarded their ideas as foolish and found it hard to believe that the earth moved around the sun.} Today, of course, we know they were right.','初期の科学者の多くは世間から笑いものにされた。**人々は彼らの考えをばかげたものとみなし、地球が太陽の周りを回っていると信じるのは難しいと思った**。もちろん今日では、彼らが正しかったことがわかっている。','【構造】People が S、regarded と found が and で並ぶ V。\n【ポイント】regard A as B「AをBとみなす」。find it hard to do は SVOC で、it は形式目的語、to believe that ... が本当の目的語。it＝hard の関係。','find it hard to do の it は何を指す？',true)
]});

/* ================= §4 it の用法(1) ================= */
L.push({k:'ks4',no:'§4',title:'it の用法(1)　形式主語',sub:'文頭の It は「後ろの何か」を指すことが多い',
body:`
# 4-1 形式主語 it ＋ to 不定詞
: 主語が不定詞・動名詞・that 節などで長くなると、英語では**主語の位置に it を置き、本当の主語（真主語）を後ろに回す**。このときの it は「それ」と訳さない。
= 4-1-1|{It} is not easy {to learn a new language as an adult}.|**大人になってから新しい言語を学ぶことは**簡単ではない。
: It＝to learn ... adult。訳すときは**真主語を主語に戻して**訳す。
- 4-1-2|{It} was kind of you {to help} me.|手伝ってくれてありがとう（＝手伝ってくれるなんて親切だった）。
: It is 形容詞 of 人 to do は、形容詞が**人の性質**を表すとき（kind / careless / wise / foolish / rude など）。「〜するとは人は…だ」。
- 4-1-3|{It} is necessary for us {to save} water.|私たちが水を**節約することが**必要だ。
: for us は不定詞の意味上の主語。of と for の使い分け：形容詞が人の性質なら of、行為の評価（necessary / important / difficult）なら for。
x It is necessary of us to save water.
x You are necessary to save water.（necessary は人を主語にとらない）

# 4-2 形式主語 it ＋ that 節／疑問詞節／動名詞
= 4-2-1|{It} is surprising {that so few people voted}.|**投票した人がそんなに少なかったとは**驚きだ。
- 4-2-2|{It} is unclear {whether the meeting will be held}.|**会議が開かれるかどうかは**はっきりしない。
- 4-2-3|{It} doesn't matter {who wins}.|**誰が勝つかは**重要ではない。
- 4-2-4|{It} is no use {crying over spilt milk}.|**こぼれたミルクを嘆いても**無駄だ（覆水盆に返らず）。
: It is no use [good] doing「〜しても無駄だ」は動名詞が真主語の慣用表現。
[It 〜 that 節 の頻出表現]
| It is said that 〜 | 〜と言われている
| It seems [appears] that 〜 | 〜のようだ
| It happens that 〜 | たまたま〜だ
| It occurred to 人 that 〜 | 人に〜という考えが浮かんだ
| It follows that 〜 | (したがって)〜ということになる
| It turns out that 〜 | 〜だとわかる
| It is no wonder that 〜 | 〜なのは当然だ
| It goes without saying that 〜 | 〜は言うまでもない
- 4-2-5|{It} {occurred to} me {that I had left my umbrella on the bus}.|**バスに傘を置き忘れたことに**ふと**気づいた**。
- 4-2-6|If all men are mortal and Socrates is a man, {it} {follows} {that Socrates is mortal}.|人間がみな死ぬものであり、ソクラテスが人間であるなら、**ソクラテスは死ぬということになる**。
- 4-2-7|{It} is no wonder {that she was tired after the long trip}.|長旅の後で彼女が疲れていたのは**当然だ**。

# 4-3 it is said that ／ S is said to do の書きかえ
: It is said that S V は **S is said to do** に書きかえられる。時制がずれる場合は**完了不定詞（to have done）**を使う。読解では「to have done＝述語動詞より前のこと」と押さえる。
= 4-3-1|He {is said to have been} a great swimmer in his youth.|彼は若いころ偉大な水泳選手**だったと言われている**。
: = It is said that he **was** a great swimmer in his youth. 言われているのは現在、水泳選手だったのは過去。
- 4-3-2|She {seems to have lost} interest in the project.|彼女はその計画への興味を**失ってしまったようだ**。
- 4-3-3|The bridge {is believed to be} the oldest in Europe.|その橋はヨーロッパ最古**だと考えられている**。

# 4-4 it が「後ろを指す」か「前を指す」かの判別
: 文頭の It が何を指すかは、**後ろに to do / that 節 / 疑問詞節 / doing があるか**で判断する。ないなら、前に出た名詞や内容を指す普通の代名詞。
= 4-4-1|I bought a new phone. {It} is lighter than my old one.|新しい電話を買った。**それは**前のものより軽い。（普通の代名詞）
= 4-4-2|{It} is lighter than I expected {to carry this phone all day}.|**この電話を一日中持ち歩くのは**思ったより楽だ。（形式主語）
> that 節があっても形式主語とは限らない。It is the book **that** I lost.（強調構文 →§6）、It is a pity **that** ...（形式主語）の区別は §6 で学ぶ。
`,
drills:[
ej('ks4d1','{It} is dangerous {to swim} in this river after heavy rain.','大雨の後にこの川で**泳ぐのは**危険だ。','形式主語 It ＝ to swim ... rain。真主語を主語にして訳す。'),
ej('ks4d2','{It} was careless of me {to leave} the door unlocked.','ドアに鍵をかけずに**おいたのは**不注意だった。','It is 形容詞 of 人 to do。careless は人の性質なので of me。leave O C「OをCのままにする」も含む。'),
ej('ks4d3','{It} never {occurred to} him {that} his words might hurt her.','自分の言葉が彼女を傷つけるかもしれない**とは**、彼は**思いもしなかった**。','It occurs to 人 that 〜「人に〜という考えが浮かぶ」。never で「まったく思いつかなかった」。'),
ej('ks4d4','{It} {goes without saying} that health is more important than wealth.','健康が富より大切なのは**言うまでもない**。','It goes without saying that 〜「〜は言うまでもない」。'),
ej('ks4d5','The castle {is said to have been} built in the 14th century.','その城は14世紀に建てられた**と言われている**。','be said to have been done「〜されたと言われている」。完了不定詞は述語動詞（is said＝現在）より前の時を表す。'),
ej('ks4d6','{It} remains to be seen {whether} the new policy will reduce poverty.','新しい政策が貧困を減らす**かどうかは、まだわからない**。','It remains to be seen whether 〜「〜かどうかはまだわからない（今後を見なければならない）」。真主語は whether 節。'),
ej('ks4d7','{It} makes no difference to me {whether} you come or not.','君が来るか来ないかは、私には**どうでもいい**。','It makes no difference (to 人) whether 〜「〜かどうかは(人にとって)違いがない、どうでもいい」。'),
ej('ks4d8','Babies cannot tell us what they are thinking. {It is therefore not surprising that, for a long time, scientists assumed that infants understood very little of the world around them.} Recent experiments, however, suggest otherwise.','赤ちゃんは何を考えているのかを私たちに伝えることができない。**したがって、長い間、乳児は周囲の世界をほとんど理解していないと科学者たちが思い込んでいたのは驚くことではない**。しかし最近の実験はそうではないことを示している。','【構造】It が形式主語、that, for a long time, scientists assumed ... が真主語。that の直後に for a long time が挿入されている。assumed の目的語の that 節（infants understood ...）が入れ子になっている。\n【ポイント】very little of A「Aのごくわずかしか〜ない」と否定的に訳す。suggest otherwise「そうではないことを示す」。','It の真主語はどこから始まる？',true)
]});

/* ================= §5 it の用法(2) ================= */
L.push({k:'ks5',no:'§5',title:'it の用法(2)　形式目的語・状況の it',sub:'O の位置の it と、何も指さない it',
body:`
# 5-1 形式目的語 it（SVOC）
: SVOC の O が不定詞や that 節で長いとき、O の位置に it を置き、本当の目的語を C の後ろに回す。**形式目的語は SVOC の文でしか使われない**のが原則。
= 5-1-1|I {find} {it} difficult {to concentrate in a noisy room}.|**騒がしい部屋で集中するのは**難しいと思う。
: it＝to concentrate ...。find it C to do「〜することはCだとわかる、思う」。
= 5-1-2|She {made} {it} clear {that she would not change her mind}.|彼女は**考えを変えるつもりはないことを**はっきりさせた。
[形式目的語をとる頻出表現]
| make it a rule to do | 〜することにしている
| make it possible for 人 to do | 人が〜するのを可能にする
| take it for granted that 〜 | 〜を当然のことと思う
| think [consider] it C to do | 〜するのはCだと思う
| find it C to do / that 〜 | 〜するのはCだとわかる
| see to it that 〜 | 〜するように取り計らう
| owe it to 人 that 〜 | 〜なのは人のおかげだ
- 5-1-3|My grandfather {makes it a rule to take} a walk every morning.|祖父は毎朝散歩**することにしている**。
- 5-1-4|We {take it for granted that} clean water comes out of the tap.|私たちは蛇口からきれいな水が出るのを**当然のことと思っている**。
- 5-1-5|Please {see to it that} the children don't go near the river.|子どもたちが川に近づかない**ように気をつけて**ください。
> see to it that ... / depend on it that ... のように、**前置詞の後ろに直接 that 節は置けない**ので、it を間に置く。
# 5-1-A 形式目的語の it がない形との比較
: 目的語が短い名詞なら it は不要。it があるのに後ろに to do / that 節がなければ、普通の代名詞。
- 5-1-6|I found the book interesting.|その本はおもしろかった。（the book が O）
- 5-1-7|I found it interesting to read old letters.|**古い手紙を読むのは**おもしろかった。（it は形式目的語）

# 5-2 状況・天候・時間・距離の it
: 天候・時間・距離・明暗や**漠然とした状況**を表す it は、何も指さず訳さない（非人称の it）。
= 5-2-1|{It} is getting dark. Let's go home.|暗くなってきた。家に帰ろう。
- 5-2-2|{It} is about ten minutes' walk from here to the museum.|ここから博物館までは歩いて10分ほどだ。
- 5-2-3|How is {it} going with your new job?|新しい仕事の**調子は**どう？
- 5-2-4|{It}'s your turn.|君の番だよ。
# 5-2-A 慣用的な it
[動詞＋it の熟語（it は特定のものを指さない）]
| make it | うまくいく、間に合う、成功する
| take it easy | 気楽にやる、無理をしない
| beat it | 立ち去る
| leave it to 人 | 人に任せる
| have it that 〜 | 〜と言っている、主張する
| As it is, 〜 | (仮定法の後で)実際は〜
| as it were | いわば
- 5-2-5|We ran all the way, but we didn't {make it} to the last train.|ずっと走ったが、終電に**間に合わなかった**。
- 5-2-6|{Leave it to} me. I'll handle the rest.|私に**任せて**。残りは私がやるから。
- 5-2-7|I would help you if I had time. {As it is}, I'm too busy.|時間があれば手伝うのだが、**実際は**忙しすぎる。
- 5-2-8|A smartphone is, {as it were}, a computer in your pocket.|スマートフォンは、**いわば**ポケットの中のコンピューターだ。
> as it is は文頭（仮定法の後）では「実際は」、名詞の後ろでは「そのままの状態で」（Leave things as they are.）。
`,
drills:[
ej('ks5d1','I {found} {it} hard {to say} no to my best friend.','親友の頼みを**断るのは**難しかった。','形式目的語 it ＝ to say no ...。find it C to do「〜するのはCだと思う」。say no to A「Aを断る」。'),
ej('ks5d2','She {makes it a rule} not {to eat} anything after nine at night.','彼女は夜9時以降は何も**食べないことにしている**。','make it a rule to do「〜することにしている」。not to eat で「食べないことを」。'),
ej('ks5d3','Most of us {take it for granted that} we can use electricity whenever we want.','私たちの大半は、いつでも電気を使えることを**当然だと思っている**。','take it for granted that 〜。it は形式目的語、that 節が本当の目的語。'),
ej('ks5d4','The teacher {made it clear that} late homework would not be accepted.','先生は遅れて出した宿題は受けつけないことを**はっきりさせた**。','make it clear that 〜「〜ということを明らかにする」。'),
ej('ks5d5','We missed the first bus, but we managed to {make it} to the airport on time.','最初のバスに乗り遅れたが、何とか時間どおりに空港に**たどり着けた**。','make it「間に合う、たどり着く」。manage to do「何とか〜する」。'),
ej('ks5d6','If I were rich, I would travel around the world. {As it is}, I can only read about other countries.','もしお金持ちなら世界中を旅行するのだが。**実際には**、ほかの国のことを本で読むことしかできない。','As it is「(仮定とは違って)実際は」。仮定法の後で現実を述べる。'),
ej('ks5d7','Advances in medicine have greatly extended human life. {They have also made it possible for doctors to keep patients alive long after they would once have died, and this raises difficult questions.}','医学の進歩は人間の寿命を大きく延ばした。**それはまた、かつてなら亡くなっていたであろう時期をはるかに過ぎても、医者が患者を生かし続けることを可能にし、このことが難しい問題を提起している**。','【構造】They（＝advances）が S、have made が V、it が形式目的語、possible が C、for doctors to keep ... が本当の目的語（for doctors は意味上の主語）。\n【ポイント】keep O C「OをCのままにする」。long after 〜「〜のずっと後に」。would once have died は仮定法過去完了で「かつてなら亡くなっていただろう」。this は前の内容全体を指す。','made it possible for 〜 to do の構造',true)
]});

/* ================= §6 it の用法(3) ================= */
L.push({k:'ks6',no:'§6',title:'it の用法(3)　強調構文',sub:'It is 〜 that … の「〜」に焦点を当てる',
body:`
# 6-1 強調構文の基本
: **It is [was] ＋強調したい語句＋ that [who/which] ＋残りの文**の形で、特定の語句に焦点を当てる。訳は「…のは〜だ」。
= 6-1-1|{It was} in this house {that} the famous poet was born.|その有名な詩人が生まれた**のは**この家**だった**。
: 元の文 The famous poet was born in this house. の in this house を強調。
- 6-1-2|{It was} my brother {who} broke the window, not me.|窓を割った**のは**私ではなく兄**だ**。
- 6-1-3|{It is} not money {but} trust {that} matters most in business.|商売で最も重要な**のは**、お金ではなく信頼**だ**。
: not A but B が強調されることが多い。強調構文にすると「最も重要なのはAではなくBだ」と訳す。

# 6-2 強調構文と形式主語構文の見分け方
: どちらも It is 〜 that … の形になる。**It is と that を取り除いて、残りが完全な文になれば強調構文**。
= 6-2-1|It was yesterday that I met her.|私が彼女に会った**のは**昨日**だった**。（強調構文）
: It was と that を消すと Yesterday I met her. → 完全な文 → 強調構文。
= 6-2-2|It is strange that she hasn't called.|彼女が電話してこない**のは**奇妙だ。（形式主語）
: It is と that を消すと strange she hasn't called. → 文にならない → 形式主語構文。
[判別のポイント]
| It is と that の間が副詞・副詞句・副詞節 | 強調構文
| It is と that の間が名詞で、that 以下に名詞が1つ欠けている | 強調構文（または関係代名詞）
| It is と that の間が形容詞 | 形式主語構文
| It is と that の間が名詞で、that 以下が完全な文 | 形式主語構文（It is a pity that 〜 など）

# 6-3 疑問詞の強調・否定語の強調
: 疑問詞を強調すると **疑問詞＋is it that 〜?** の形になる。「いったい〜なのか」と訳す。
= 6-3-1|What {is it that} you really want?|君が本当に欲しいのは**いったい**何なの？
- 6-3-2|Why {was it that} she suddenly left the company?|**いったい**なぜ彼女は突然会社を辞めたのか。
: not until 〜 を強調すると「〜して初めて…した」の意味になる。
= 6-3-3|{It was not until} I lived abroad {that} I realized how kind Japanese people are.|外国に住んで**初めて**、日本人がどれほど親切かがわかった。
: 直訳「日本人の親切さに気づいたのは外国に住むまではなかった」→「〜して初めて…」と訳す。
> 頻出の型：It was not until 〜 that …「〜して初めて…した」。Not until 〜 did S V …（倒置）と同じ意味（→§18 否定）。
`,
drills:[
ej('ks6d1','{It was} at a small café in Paris {that} they first met.','彼らが初めて会った**のは**パリの小さなカフェ**だった**。','強調構文。It was と that を除くと They first met at a small café in Paris. となり完全な文。'),
ej('ks6d2','{It is} what you do, not what you say, {that} shows who you are.','あなたがどんな人間かを示す**のは**、何を言うかではなく、何をするか**である**。','強調構文で、what you do, not what you say が強調されている。who you are は間接疑問「あなたが誰であるか」→「どんな人間か」。'),
ej('ks6d3','Where {was it that} you lost your wallet?','**いったい**どこで財布をなくしたの？','疑問詞＋was it that 〜? は疑問詞を強調する強調構文。'),
ej('ks6d4','{It was not until} the war ended {that} the truth about the battle became known.','戦争が終わって**初めて**、その戦いの真相が知られるようになった。','It was not until 〜 that …「〜して初めて…した」。'),
ej('ks6d5','It is a pity that so many old buildings in this city have been torn down.','この都市でこれほど多くの古い建物が取り壊されてしまったのは**残念だ**。','形式主語構文。It is と that を取り除くと a pity so many ... となり文が成立しない。that 以下は完全な文。'),
ej('ks6d6','Most people think that great inventions come from sudden flashes of genius. {In reality, however, it is usually through years of patient work and repeated failure that new ideas are born.}','たいていの人は、偉大な発明は天才のひらめきから生まれると考えている。**しかし実際には、新しいアイデアが生まれるのは、たいてい何年にもわたる根気強い努力と度重なる失敗を通じてである**。','【構造】it is 〜 that … の強調構文。強調されているのは through years of patient work and repeated failure（副詞句）。it is と that を除くと new ideas are born through ... となり完全な文。\n【ポイント】however は挿入。usually は強調部分にかかる。','it is と that の間は何か',true)
]});

/* ================= §7 話法 ================= */
L.push({k:'ks7',no:'§7',title:'話法　直接話法と間接話法',sub:'「誰が・いつ・どこで」言ったかを視点の移動で読む',
body:`
# 7-1 直接話法と間接話法
: 人の発言をそのまま " " で伝えるのが**直接話法**、話し手の視点に言いかえて伝えるのが**間接話法**。間接話法では**代名詞・時制・時や場所の表現**が変わる。
= 7-1-1|She said, "I am tired now."|彼女は「**私は今**疲れている」と言った。
= 7-1-2|She said that {she was} tired {then}.|彼女は**その時**疲れていると言った。
: 主節が過去（said）なので、時制の一致で am → was。now → then、I → she。
[間接話法での表現の変化]
| now | then（その時）
| today | that day（その日）
| yesterday | the day before / the previous day（その前日）
| tomorrow | the next day / the following day（その翌日）
| ago | before（それより前に）
| here | there
| this / these | that / those
- 7-1-3|He said that he had seen the movie {the day before}.|彼は**その前日に**その映画を見たと言った。
: 直接話法なら He said, "I saw the movie yesterday." 言った時より前のことなので過去完了。
> 読解のポイント：間接話法の過去形・過去完了形は、日本語では**現在形・過去形に戻して訳す**と自然。「疲れていると言った」（×疲れていたと言った）。

# 7-2 疑問文・命令文・提案の伝え方
[文の種類と伝達動詞]
| 疑問詞疑問文 | ask (人) 疑問詞 S V（語順は平叙文）
| Yes/No 疑問文 | ask (人) if [whether] S V
| 命令文 | tell 人 to do
| 依頼 | ask 人 to do
| 提案 Let's 〜 | suggest that S (should) do / suggest doing
| 忠告 | advise 人 to do
- 7-2-1|He {asked} me {where I lived}.|彼は私に**どこに住んでいるのかと尋ねた**。
x He asked me where did I live.（間接疑問は平叙文の語順）
- 7-2-2|She {asked} me {if} I could lend her some money.|彼女は私にいくらかお金を**貸してくれないかと頼んだ**。
- 7-2-3|The doctor {told} me {not to work} too hard.|医者は私に働き**すぎないようにと言った**。
- 7-2-4|My friend {suggested that} we {(should) take} a taxi.|友人はタクシーで行**こうと提案した**。
: suggest / propose / insist / demand / recommend の that 節では、動詞は**原形（または should＋原形）**になる。時制の一致を受けないので注意。

# 7-3 時制の一致を受けない場合
: 主節が過去でも、次の場合は時制の一致を受けないことがある。
[時制の一致の例外]
| 不変の真理・ことわざ | The teacher said that water boils at 100℃.
| 現在も続く事実・習慣 | He said that he gets up at six every day.
| 歴史上の事実 | We learned that Columbus reached America in 1492.
| 仮定法 | She said that she wished she were taller.
- 7-3-1|Galileo argued that the earth {moves} around the sun.|ガリレオは地球が太陽の周りを**回っている**と主張した。
: 不変の真理なので現在形のまま。

# 7-4 描出話法（自由間接話法）
: 小説などでは、伝達動詞（he said / she thought）を省いて、**登場人物の心の声を地の文に溶かしこむ**書き方がある。時制は過去でも、**登場人物の視点・感情**で訳すのがコツ。
= 7-4-1|She looked at the letter again. {Was he really coming back? After all these years?}|彼女はもう一度手紙を見た。**彼は本当に戻ってくるのだろうか。何年もたった今になって？**
: 疑問文や感嘆、文の断片が出てきたら、登場人物の心の声だと判断する。「〜だろうか」「〜なのだ」と訳すと自然。
`,
drills:[
ej('ks7d1','He told me that he {had lost} his key {the day before}.','彼は私に、**前の日に**鍵をなくしたと言った。','間接話法。直接話法なら He said to me, "I lost my key yesterday." 言った時より前なので過去完了、yesterday → the day before。日本語は「なくしたと言った」と訳す。'),
ej('ks7d2','The stranger {asked} me {how far it was} to the nearest station.','見知らぬ人が私に、最寄り駅まで**どのくらいの距離かと尋ねた**。','間接疑問 how far it was は平叙文の語順。it は距離の it。'),
ej('ks7d3','My mother always {told} me {never to give up} on my dreams.','母はいつも私に、決して夢を**あきらめてはいけないと言っていた**。','tell 人 not [never] to do「人に〜しないように言う」。give up on A「Aを見限る、あきらめる」。'),
ej('ks7d4','The committee {insisted that} the plan {be} reconsidered.','委員会はその計画を再検討**すべきだと強く主張した**。','insist that S (should) 原形。主節が過去でも be のまま。'),
ej('ks7d5','Tom stared at the empty room. {Where had everyone gone? Surely they hadn\'t left without him.}','トムはがらんとした部屋を見つめた。**みんなどこへ行ってしまったのだろう。まさか自分を置いて出ていったはずはない**。','描出話法。疑問文や surely から、トムの心の声だとわかる。過去完了だが、トムの視点に立って「〜してしまったのだろう」と訳す。','誰の心の声か',true),
ej('ks7d6','When I was a child, my grandfather often told me that honesty is the best policy. {At the time I did not understand what he meant, but now that I have children of my own, I find myself saying the same thing to them.}','子どものころ、祖父はよく私に「正直は最善の策」だと言っていた。**当時はその意味がわからなかったが、自分にも子どもができた今、気がつくと同じことを子どもたちに言っている**。','【構造】1文目の that 節は、ことわざ（不変の真理）なので時制の一致を受けず現在形 is。\n【ポイント】now that 〜「今や〜なので」。find oneself doing「気がつくと〜している」（§2の再帰代名詞）。','now that の意味',true)
]});

D.decks.push({id:'kaishaku',type:'lesson',title:'英文解釈（構文）',sub:'例文・解説・例題で構文を読み解く',items:L});
const gi=D.groups.findIndex(g=>g.title==='英作文');
D.groups.splice(gi>=0?gi:D.groups.length,0,{title:'英文解釈',ids:['kaishaku']});
})();
