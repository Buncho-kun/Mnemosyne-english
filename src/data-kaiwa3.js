// 日常英会話フレーズ（3）― 例文はすべてこのアプリ用に作成
(function(){
const D=window.EIGO_DATA,K=window.__KAIWA;if(!K)return;
window.__KAIWA_ADD=function(id,txt){const d=D.decks.find(x=>x.id===id);if(!d)return;const seen=new Set(d.items.map(i=>i.w));
  txt.split('\n').filter(Boolean).forEach(l=>{const [w,m,ex,note]=l.split('|');if(seen.has(w))return;seen.add(w);d.items.push({k:'kw:'+id+':'+w,w,pos:'会話',m:note?m+'（'+note+'）':m,ex})})};

K('kw9','家・家族・毎日の生活','朝起きてから寝るまで、家の中のやりとり',`
Time to get up!|起きる時間だよ！|[Time to get up!] You'll be late.
I overslept.|寝坊した|Oh no, [I overslept]! The bus leaves in five minutes.
Did you sleep well?|よく眠れた？|Good morning. [Did you sleep well?]
I couldn't sleep a wink.|一睡もできなかった|The neighbors were so loud. [I couldn't sleep a wink.]
What's for breakfast?|朝ごはん何？|Mom, [what's for breakfast?]
Hurry up!|急いで！|[Hurry up!] We're going to miss the train.
Did you lock the door?|鍵かけた？|Wait, [did you lock the door?]
I'm off.|行ってきます|See you tonight. [I'm off!]|「出かける」の決まり文句
I'm home.|ただいま|[I'm home!] What's for dinner?
Welcome home.|おかえり|[Welcome home!] How was school?
How was your day?|今日はどうだった？|[How was your day?] — Pretty busy.
Dinner's ready!|ごはんできたよ！|[Dinner's ready!] Come and eat.
Can you set the table?|テーブルの準備をしてくれる？|[Can you set the table?] We're eating in five minutes.
Who's going to do the dishes?|誰が皿洗いする？|[Who's going to do the dishes] tonight?
It's your turn.|あなたの番だよ|I did it yesterday. [It's your turn.]
Take out the trash.|ゴミを出して|Could you [take out the trash] on your way?
Clean up your room.|部屋を片付けなさい|[Clean up your room] before your friends come.
Do the laundry|洗濯をする|I have to [do the laundry] this afternoon.
Hang the laundry out.|洗濯物を外に干す|It's sunny. Let's [hang the laundry out].
We're out of ~.|〜を切らしている|[We're out of] eggs. Can you buy some?
Turn off the lights.|電気を消して|[Turn off the lights] when you leave the room.
Turn up the volume.|音量を上げて|I can't hear. [Turn up the volume.]
Who's in the bathroom?|お風呂（トイレ）に入ってるの誰？|[Who's in the bathroom?] I need to use it.
Take a bath / take a shower|お風呂に入る／シャワーを浴びる|I usually [take a shower] in the morning.
Brush your teeth.|歯を磨きなさい|[Brush your teeth] before bed.
I'm going to bed.|もう寝るね|Good night. [I'm going to bed.]
Sweet dreams.|いい夢を|Good night. [Sweet dreams.]
Don't stay up too late.|夜更かししないでね|You have school tomorrow. [Don't stay up too late.]
Can you give me a ride?|車で送ってくれる？|It's raining. [Can you give me a ride] to the station?
Where did I put my keys?|鍵どこに置いたっけ？|[Where did I put my keys?] I can't find them.
Have you seen my phone?|私の携帯見なかった？|[Have you seen my phone?]
It's a mess.|散らかってる|Don't look at my room. [It's a mess.]
Could you keep it down?|静かにしてくれる？|I'm studying. [Could you keep it down?]
I'll be late tonight.|今夜は遅くなる|Don't wait for me. [I'll be late tonight.]
Don't forget your umbrella.|傘を忘れないでね|It might rain. [Don't forget your umbrella.]
Let's order in tonight.|今夜は出前にしよう|I'm too tired to cook. [Let's order in tonight.]
Leftovers|残り物|We're having [leftovers] for lunch.
Help yourself to anything in the fridge.|冷蔵庫のもの何でも食べていいよ|[Help yourself to anything in the fridge.]
It smells good!|いいにおい！|What are you cooking? [It smells good!]
Can I have a bite?|一口もらっていい？|That looks delicious. [Can I have a bite?]
I'm on a diet.|ダイエット中なの|No cake for me. [I'm on a diet.]
Who's coming over?|誰か来るの？|You're cleaning? [Who's coming over?]
The Wi-Fi is down.|Wi-Fi がつながらない|I can't do my homework. [The Wi-Fi is down.]
My phone is dead.|携帯の電池が切れた|Can I borrow your charger? [My phone is dead.]
I'll be right back.|すぐ戻るね|I'm going to the convenience store. [I'll be right back.]
Let's take a break.|ちょっと休もう|We've been studying for hours. [Let's take a break.]
Bless you!|お大事に（くしゃみに）|— Achoo! — [Bless you!]
`);

K('kw10','友だちとの雑談・趣味・週末','趣味・週末・好きなものについて話す',`
What do you do for fun?|趣味は何？|[What do you do for fun?] — I play the guitar.
What are you into these days?|最近何にはまってる？|[What are you into these days?]
I'm a big fan of ~.|〜の大ファンなんだ|[I'm a big fan of] that band.
I'm crazy about ~.|〜に夢中なんだ|My sister [is crazy about] K-dramas.
I've been ~ing lately.|最近〜してるんだ|[I've been] running [lately].
Have you ever ~?|〜したことある？|[Have you ever] been to Okinawa?
What kind of ~ do you like?|どんな〜が好き？|[What kind of] music [do you like?]
Who's your favorite ~?|好きな〜は誰？|[Who's your favorite] singer?
Have you seen ~?|〜見た？|[Have you seen] the new Marvel movie?
No spoilers!|ネタバレしないで！|I haven't finished the series yet. [No spoilers!]
It was so good.|すごくよかった|You have to watch it. [It was so good.]
It was okay.|まあまあだった|A: How was the movie? B: [It was okay.]
It wasn't my cup of tea.|私の好みじゃなかった|The concert [wasn't my cup of tea].
I'd recommend it.|おすすめだよ|The book is amazing. [I'd recommend it.]
What are you up to this weekend?|週末は何するの？|[What are you up to this weekend?]
Any plans for the weekend?|週末の予定ある？|[Any plans for the weekend?]
Nothing special.|特に何も|A: What did you do yesterday? B: [Nothing special.]
I just stayed home.|家にいただけ|[I just stayed home] and watched Netflix.
How was your weekend?|週末どうだった？|[How was your weekend?] — It was great.
We had a blast.|すごく楽しかった|We went to the festival. [We had a blast.]
I had a great time.|楽しかった|Thanks for inviting me. [I had a great time.]
Let's do it again sometime.|またいつかやろう|That was fun. [Let's do it again sometime.]
Do you want to come along?|一緒に来る？|We're going bowling. [Do you want to come along?]
Who else is coming?|ほかに誰が来るの？|[Who else is coming?]
I'm running late.|遅れそう|Sorry, [I'm running late]. I'll be there in ten minutes.
Where should we meet?|どこで待ち合わせる？|[Where should we meet?] — In front of the station.
Text me when you get there.|着いたら連絡して|[Text me when you get there.]
I'm here.|着いたよ|[I'm here.] Where are you?
Let's take a selfie!|自撮りしよう！|The view is beautiful. [Let's take a selfie!]
Can you send me the photos?|写真送ってくれる？|[Can you send me the photos?]
That's hilarious!|それめっちゃおもしろい！|He fell into the pool? [That's hilarious!]
You're so funny.|あなたって本当におもしろいね|[You're so funny.] Tell me another one.
I was just joking.|冗談だよ|Don't be angry. [I was just joking.]
Are you serious?|本気で言ってる？|You're quitting school? [Are you serious?]
Guess what!|ねえ聞いて！|[Guess what!] I got tickets to the concert!
You'll never believe what happened.|何があったか信じられないと思うよ|[You'll never believe what happened] at school today.
What happened?|何があったの？|You look upset. [What happened?]
Then what?|それで？|A: He called me last night. B: [Then what?]
And?|で？|A: I met her at the station. B: [And?]
Good point.|いいところに気づいたね|[Good point.] I hadn't thought of that.
I'm not much of a ~.|あまり〜するほうじゃない|[I'm not much of a] cook.
I used to ~, but not anymore.|前は〜したけど今はしない|[I used to] play soccer, [but not anymore].
I've always wanted to ~.|ずっと〜したかったんだ|[I've always wanted to] learn to surf.
It's on my bucket list.|死ぬまでにやりたいことリストに入ってる|Seeing the northern lights [is on my bucket list].
I'm not a morning person.|朝は苦手なんだ|Don't call me before nine. [I'm not a morning person.]
I'm a night owl.|夜型なんだ|[I'm a night owl.] I usually go to bed at two.
`);

K('kw11','天気・季節・時間・予定','天気の話題・時間の確認・予定の調整',`
Nice day, isn't it?|いい天気ですね|[Nice day, isn't it?] Perfect for a walk.
It's freezing!|すごく寒い！|Close the window. [It's freezing!]
It's boiling hot.|うだるように暑い|[It's boiling hot] today.
It's humid.|蒸し暑い|Summer in Tokyo [is so humid].
It's pouring.|土砂降りだ|Don't go out now. [It's pouring.]
It looks like rain.|雨が降りそうだ|Take an umbrella. [It looks like rain.]
It's supposed to snow tomorrow.|明日は雪が降るらしい|[It's supposed to snow tomorrow.]
What's the weather like?|天気はどう？|[What's the weather like] in London?
What's the forecast?|天気予報は？|[What's the forecast] for the weekend?
It's clearing up.|晴れてきた|The rain stopped. [It's clearing up.]
I got caught in the rain.|雨に降られた|I'm soaked. [I got caught in the rain.]
I'm soaked.|びしょぬれ|[I'm soaked]! Can I borrow a towel?
I'm sweating.|汗だく|It's so hot. [I'm sweating.]
I can't stand the heat.|暑いのは耐えられない|[I can't stand the heat.] I love winter.
I have hay fever.|花粉症なんだ|Spring is hard for me. [I have hay fever.]
The cherry blossoms are in full bloom.|桜が満開だ|Let's go to the park. [The cherry blossoms are in full bloom.]
What time is it?|今何時？|[What time is it?] — It's half past three.
Do you have the time?|今何時かわかりますか|Excuse me, [do you have the time?]|「時間ある？」ではない
It's almost noon.|もうすぐお昼だ|[It's almost noon.] Let's have lunch.
We're running out of time.|時間がなくなってきた|[We're running out of time.] Let's hurry.
There's no rush.|急がなくていいよ|Take your time. [There's no rush.]
Take your time.|ゆっくりでいいよ|[Take your time.] I'll wait.
Right now?|今すぐ？|A: Can you come here? B: [Right now?]
In a few minutes.|数分後に|I'll be ready [in a few minutes].
Any minute now.|もうすぐ|The bus should be here [any minute now].
Just in time.|ぎりぎり間に合った|We got to the station [just in time].
When works for you?|いつが都合いい？|Let's meet next week. [When works for you?]
Does Friday work for you?|金曜は大丈夫？|[Does Friday work for you?]
I'm free after five.|5時以降なら空いてる|[I'm free after five.]
I'm booked up this week.|今週は予定がいっぱい|Sorry, [I'm booked up this week].
Can we reschedule?|日程を変えてもいい？|Something came up. [Can we reschedule?]
Something came up.|急用ができた|Sorry, I can't come. [Something came up.]
Let's make it ~.|〜にしよう|[Let's make it] three o'clock.
See you then.|じゃあその時に|OK, Saturday at noon. [See you then.]
Don't be late.|遅れないでね|We start at nine. [Don't be late.]
On time|時間どおりに|The train arrived [on time].
In time|間に合って|We arrived [in time] for the show.
the day after tomorrow|あさって|The test is [the day after tomorrow].
the other day|この前、先日|I saw your brother [the other day].
these days|最近、このごろ|I'm really busy [these days].
for a while|しばらくの間|I haven't seen him [for a while].
from now on|これからは|[From now on], I'll get up earlier.
once in a while|たまに|I eat fast food [once in a while].
every other day|1日おきに|I go to the gym [every other day].
at the moment|今のところ、今は|She's not here [at the moment].
`);

K('kw12','トラブル・謝る・苦情','困ったとき・謝るとき・文句を言うとき',`
I'm so sorry.|本当にごめんなさい|[I'm so sorry.] I didn't mean to.
I didn't mean to.|わざとじゃないんだ|Sorry I hurt your feelings. [I didn't mean to.]
It was my fault.|私のせいです|Don't blame him. [It was my fault.]
I owe you an apology.|あなたに謝らなきゃ|[I owe you an apology.] I was wrong.
I apologize for ~.|〜についてお詫びします|[I apologize for] the inconvenience.
Sorry to bother you, but ~.|お手数ですが〜|[Sorry to bother you, but] could you help me?
Sorry for the trouble.|ご迷惑をおかけしてすみません|[Sorry for the trouble.]
It won't happen again.|二度としません|I promise. [It won't happen again.]
Can you forgive me?|許してくれる？|I was rude. [Can you forgive me?]
Apology accepted.|謝罪を受け入れるよ|A: I'm sorry. B: [Apology accepted.]
That's OK.|大丈夫だよ|A: Sorry I'm late. B: [That's OK.]
Forget it.|もういいよ（忘れて）|[Forget it.] It doesn't matter.
I think there's a mistake.|間違いがあると思います|[I think there's a mistake] on the bill.
This doesn't work.|これ、動きません|[This doesn't work.] Can you check it?
It's broken.|壊れています|The printer [is broken].
Something's wrong with ~.|〜の調子がおかしい|[Something's wrong with] my computer.
I've been waiting for a long time.|長いこと待っています|Excuse me, [I've been waiting for a long time].
That's not fair.|ずるい、不公平だ|Why does he get two? [That's not fair.]
That's not what I said.|そんなこと言ってない|[That's not what I said.] You misunderstood.
You've got it wrong.|誤解してるよ|[You've got it wrong.] I wasn't angry.
Let me explain.|説明させて|Wait, [let me explain].
It's not what you think.|あなたが思っているようなことじゃない|[It's not what you think.]
Give me a break.|勘弁してよ|Another test? [Give me a break.]
Cut it out!|やめて！|[Cut it out!] That's annoying.
Leave me alone.|ほっといて|I'm upset. [Leave me alone.]
Mind your own business.|余計なお世話だ|[Mind your own business.]|強い言い方
What's the problem?|何が問題なの？|[What's the problem?] You look angry.
What's wrong?|どうしたの？|[What's wrong?] You're so quiet.
Is everything all right?|大丈夫ですか|[Is everything all right?]
I'm in trouble.|困ったことになった|[I'm in trouble.] I lost my wallet.
I locked myself out.|鍵を中に置いたまま締め出された|[I locked myself out] of my apartment.
I left my bag on the train.|電車にかばんを置き忘れた|[I left my bag on the train.] What should I do?
Help!|助けて！|[Help!] Someone stole my bag!
Call an ambulance!|救急車を呼んで！|Someone fainted. [Call an ambulance!]
Call the police!|警察を呼んで！|[Call the police!]
Are you OK?|大丈夫？|You fell down. [Are you OK?]
Watch out!|危ない！|[Watch out!] A car is coming.
Be careful.|気をつけて|The floor is wet. [Be careful.]
Calm down.|落ち着いて|[Calm down.] Everything will be fine.
It's not the end of the world.|この世の終わりじゃないよ|You failed one test. [It's not the end of the world.]
Things happen.|そういうこともあるよ|Don't blame yourself. [Things happen.]
Let's look on the bright side.|いい面を見よう|[Let's look on the bright side.] At least nobody was hurt.
We'll figure it out.|なんとかなるよ|Don't panic. [We'll figure it out.]
It'll work out.|うまくいくよ|Don't worry. [It'll work out.]
`);
})();
