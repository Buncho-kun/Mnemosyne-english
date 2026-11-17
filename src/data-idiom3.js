// 入試イディオム・構文／フォニックス 追加分（例文・説明はすべてこのアプリ用に作成）
(function(){
const D=window.EIGO_DATA;
const jid=D.decks.find(d=>d.id==='jid'),jk=D.decks.find(d=>d.id==='jk'),ph=D.decks.find(d=>d.id==='phonics');
const have=new Set([].concat(jid?jid.items:[],jk?jk.items:[]).map(i=>String(i.w).toLowerCase()));
// 表現|意味|例文（[ ] が空所）
const ID=`at a loss|途方に暮れて|I was [at a loss] for words when I heard the news.
at first hand|直接に、じかに|She learned about poverty [at first hand] while volunteering abroad.
at the mercy of ~|〜のなすがままに|The small boat was [at the mercy of] the waves.
at the risk of ~|〜の危険を冒して|He saved the child [at the risk of] his own life.
behind the times|時代遅れで|My father's ideas about work are a little [behind the times].
by all means|ぜひどうぞ；必ず|"May I borrow this book?" "[By all means]."
by no means|決して〜ない|The problem is [by no means] easy to solve.
by nature|生まれつき|She is shy [by nature], but she is a good leader.
for good|永久に|He left his hometown [for good].
for the sake of ~|〜のために|They moved to the country [for the sake of] their children's health.
in vain|むだに|We searched for the key, but [in vain].
in the long run|長い目で見れば|Studying a little every day pays off [in the long run].
in terms of ~|〜の観点から|[In terms of] cost, the old plan is better.
in spite of oneself|思わず|I laughed [in spite of myself].
on purpose|わざと|I'm sure he broke the glass [on purpose].
on the whole|概して|[On the whole], the trip was a success.
out of order|故障して|The vending machine is [out of order].
out of the question|論外で、不可能で|Going out in this storm is [out of the question].
to the point|要領を得た、的を射た|His comments were short and [to the point].
under way|進行中で|Preparations for the festival are already [under way].
with a view to doing|〜する目的で|He saved money [with a view to] studying abroad.
all at once|突然；一度に|[All at once], the lights went out.
all the same|それでもやはり|It was raining, but we went hiking [all the same].
as a rule|概して、普通は|[As a rule], I get up at six.
at any rate|とにかく|[At any rate], we have to finish by Friday.
by and large|概して|[By and large], the students enjoyed the course.
first and foremost|何よりもまず|[First and foremost], we must ensure everyone's safety.
little by little|少しずつ|[Little by little], her English improved.
more or less|多かれ少なかれ；ほぼ|The work is [more or less] finished.
now and then|時々|I still think about her [now and then].
sooner or later|遅かれ早かれ|[Sooner or later], the truth will come out.
so far|これまでのところ|[So far], everything has gone well.
to some extent|ある程度は|I agree with you [to some extent].
what is called|いわゆる|He is [what is called] a self-made man.
be at home in ~|〜に精通している、くつろいでいる|She is [at home in] several languages.
be bound to do|きっと〜する|If you keep practicing, you [are bound to] improve.
be cut out for ~|〜に向いている|I'm not [cut out for] office work.
be in charge of ~|〜を担当している|Who [is in charge of] this project?
be on good terms with ~|〜と仲がよい|I [am on good terms with] my neighbors.
be sick of ~|〜にうんざりしている|I'm [sick of] eating the same food every day.
be up to ~|〜次第である；〜をたくらんで|It's [up to] you whether we go or not.
be to blame (for ~)|（〜の）責任がある|Nobody [is to blame] for the accident.
come to terms with ~|〜を受け入れる|It took her years to [come to terms with] her father's death.
do without ~|〜なしで済ます|I can't [do without] coffee in the morning.
get the better of ~|〜に打ち勝つ|Don't let your anger [get the better of] you.
give way to ~|〜に屈する、取って代わられる|Old customs gradually [gave way to] new ones.
go out of one's way to do|わざわざ〜する|She [went out of her way to] help me.
have a good command of ~|〜を自由に使いこなす|He [has a good command of] English.
keep pace with ~|〜に遅れずについていく|It's hard to [keep pace with] changes in technology.
lose one's temper|かっとなる|He [lost his temper] and shouted at us.
make a point of doing|必ず〜することにしている|She [makes a point of] reading the newspaper every morning.
make allowances for ~|〜を考慮に入れる、大目に見る|We should [make allowances for] his inexperience.
make the most of ~|〜を最大限に活用する|You should [make the most of] your time at university.
pay attention to ~|〜に注意を払う|[Pay attention to] what the teacher says.
play a part in ~|〜で役割を果たす|Luck [played a part in] our victory.
put up with ~|〜を我慢する|I can't [put up with] this noise any longer.
take ~ for granted|〜を当然と思う|We often [take] our health [for granted].
take pains to do|苦労して〜する|She [took pains to] make her guests comfortable.
take the place of ~|〜に取って代わる|E-books may never fully [take the place of] paper books.
there is no telling ~|〜はわからない|[There is no telling] what will happen next.
think better of ~|〜を考え直してやめる|He was going to quit, but [thought better of] it.
turn a deaf ear to ~|〜に耳を貸さない|He [turned a deaf ear to] my advice.
cost an arm and a leg|大金がかかる|That new car must have [cost an arm and a leg].
face the music|自分の行いの報いを受ける|You broke the rules, so now you have to [face the music].
get cold feet|おじけづく|He [got cold feet] just before the speech.
hit the books|猛勉強する|I have to [hit the books] this weekend.
in the long term|長期的に|[In the long term], the policy will benefit everyone.
keep an eye on ~|〜から目を離さない|Could you [keep an eye on] my bag for a minute?
know ~ by heart|〜を暗記している|She [knows] the poem [by heart].
let off steam|うっぷんを晴らす|Playing sports helps me [let off steam].
miss the boat|好機を逃す|If you don't apply now, you'll [miss the boat].
on the go|忙しく動き回って|My mother is always [on the go].
once and for all|きっぱりと|Let's settle this [once and for all].
over the moon|大喜びで|She was [over the moon] when she passed the exam.
pull oneself together|気を取り直す|[Pull yourself together] and try again.
ring a bell|聞き覚えがある|His name [rings a bell], but I can't remember him.
see the light|ようやく理解する|After a long explanation, he finally [saw the light].
stand a chance|見込みがある|Do you think we [stand a chance] of winning?
take ~ with a grain of salt|〜を割り引いて聞く|You should [take] his stories [with a grain of salt].
the other way around|逆に、反対に|It wasn't my idea; it was [the other way around].
throw in the towel|降参する|After three failures, he [threw in the towel].
up in the air|未決定で|Our travel plans are still [up in the air].
word for word|一語一語、逐語的に|Don't translate it [word for word].
I'm all for it|大賛成だ|"Let's have a picnic." "[I'm all for it]."
It's on me|私のおごりです|Put your wallet away. [It's on me].
Let me see|ええと|[Let me see]... I think it was last Tuesday.
Make sure ~|必ず〜するように|[Make sure] you lock the door.
No way|まさか、絶対いやだ|"He won the lottery!" "[No way]!"
That makes sense|なるほど、筋が通る|"He was tired, so he left early." "[That makes sense]."
What's up?|どうしたの？／元気？|"[What's up]?" "Not much."
You can't miss it|すぐにわかりますよ|The museum is on your right. [You can't miss it].`;
let n=0;
if(jid)ID.split('\n').filter(Boolean).forEach(l=>{const [w,m,ex]=l.split('|');if(have.has(w.toLowerCase()))return;have.add(w.toLowerCase());jid.items.push({k:'ji3:'+w,w,pos:'表現',m,ex});n++});
// フォニックス：綴り|意味（音）|説明と例|読み上げ語|カテゴリ
const PH=`b（黙字）|b を発音しない（mb / bt）|doubt, debt, climb ― t や m の後ろ・前の b は読まない|doubt, debt, climb|黙字
l（黙字）|l を発音しない|walk, talk, half, calm ― alk / alf / alm の l は読まない|walk, half, calm|黙字
t（黙字）|t を発音しない|listen, castle, often ― sten / stle の t は読まない（often は t を読む人もいる）|listen, castle|黙字
h（黙字）|h を発音しない|hour, honest, honor ― 語頭の h を読まない語。an hour のように an をつける|hour, honest|黙字
s（ズ）|s が /z/ になる|is, has, music, easy ― 母音にはさまれた s や語末の s は濁ることが多い|music, easy|子音の読み分け
x（グズ）|x が /gz/ になる|exam, exact, example ― ex＋強い母音のときは「グズ」|exam, example|子音の読み分け
ch（ク）|ch が /k/ になる|school, character, stomach ― ギリシャ語由来の語|school, character|子音の読み分け
ch（シュ）|ch が /ʃ/ になる|machine, chef, brochure ― フランス語由来の語|machine, chef|子音の読み分け
ei / eigh|エイ /eɪ/|eight, weigh, neighbor, vein ― eigh は gh を読まない|eight, neighbor|母音の組み合わせ
ei（イー）|イー /iː/（c の後）|receive, ceiling ― 「i before e except after c」の例外|receive, ceiling|母音の組み合わせ
ey|イー /iː/ またはエイ /eɪ/|key, money（イー）／ they, grey（エイ）|key, they|母音の組み合わせ
ui|ウー /uː/|fruit, juice, suit ― ui は長い「ウー」|fruit, juice|母音の組み合わせ
ind / ild|アイ /aɪ/|kind, find, mind, child, wild ― 閉じた音節でも i が長く読まれる|kind, child|母音の組み合わせ
old / ost|オウ /oʊ/|cold, hold, most, post ― ただし cost, lost は短い「オ」|cold, most, cost|母音の組み合わせ
wa|ウォ /wɑ/ /wɔː/|water, want, watch, wash ― w の後の a は「ア」でなく「オ」に近い|water, watch|要注意
wor|ワー /wɜːr/|word, work, world, worth ― w の後の or は「ワー」|word, work|要注意
ear（アー）|アー /ɜːr/|earth, learn, early, search ― ear の後に子音が続くと「アー」|earth, learn|r の付いた母音
-le|ル /əl/|table, little, simple, people ― 語末の子音＋le は軽い「ル」|table, simple|語尾
-ous|アス /əs/|famous, dangerous, nervous ― 「オウス」と読まない|famous, nervous|語尾
-able / -ible|アブル /əbl/|comfortable, possible, visible ― a / i はあいまい母音|comfortable, possible|語尾
-age|イジ /ɪdʒ/|village, message, language, image ― 「エイジ」と読まない（age 単独は「エイジ」）|village, message|語尾
-ive|イヴ /ɪv/|active, expensive, positive ― 「アイヴ」と読まない|active, positive|語尾
-cial / -tial|シャル /ʃəl/|special, official, essential, initial|special, essential|語尾
-cian|シャン /ʃən/|musician, magician, politician ― 「〜する人」を表す|musician, politician|語尾
-ful|フル /fəl/|beautiful, careful, useful ― 弱く短く読む|careful, useful|語尾
名詞・動詞で強勢が変わる語|名詞は前、動詞は後ろに強勢|REcord（記録）／ reCORD（記録する）、PREsent／preSENT、OBject／obJECT|record, present|アクセントと弱い音
同じ綴りで読みが違う語|文脈で読み分ける|read（リード／レッド）、lead（リード／レッド＝鉛）、live（リヴ／ライヴ）、tear（ティア＝涙／テア＝破る）|read, live|要注意
弱形（機能語）|弱く短く読む|and→ン、to→タ、for→ファ、can→クン ― 文中の機能語は弱く読む|bread and butter|アクセントと弱い音
連結（リンキング）|語と語の音がつながる|an apple→アナポー、check it out→チェキラウ ― 子音で終わる語＋母音で始まる語はつながる|check it out|アクセントと弱い音`;
if(ph){const hv=new Set(ph.items.map(i=>i.w));PH.split('\n').filter(Boolean).forEach(l=>{const [w,m,ex,say,cat]=l.split('|');if(hv.has(w))return;ph.items.push({k:'ph3:'+w,w,pos:'フォニックス',m,ex,say,cat})})}
})();
