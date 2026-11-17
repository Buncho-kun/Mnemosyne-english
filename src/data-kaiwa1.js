// 日常英会話フレーズ（1）― 例文はすべてこのアプリ用に作成
(function(){
const D=window.EIGO_DATA;
window.__KAIWA=function(id,title,sub,txt){
  const items=[],seen=new Set();
  txt.split('\n').filter(Boolean).forEach(l=>{const [w,m,ex,note]=l.split('|');if(seen.has(w))return;seen.add(w);items.push({k:'kw:'+id+':'+w,w,pos:'会話',m:note?m+'（'+note+'）':m,ex})});
  D.decks.push({id,type:'vocab',title,sub,stage:40,items});
};
const K=window.__KAIWA;

K('kw1','あいさつ・相づち・返事','会話の入口と、相手の話への反応',`
How's it going?|調子はどう？|A: Hey, Ken! [How's it going?] B: Pretty good, thanks.|親しい人に
What's new?|何か変わったことある？|[What's new?] I haven't seen you for ages.
Long time no see.|久しぶり|[Long time no see.] You look great!
Not bad.|まあまあだよ|A: How are you? B: [Not bad.] And you?
Pretty good.|かなりいいよ|A: How was your weekend? B: [Pretty good.]
Same as usual.|いつもと同じだよ|A: What's new? B: Nothing much. [Same as usual.]
Nice to meet you.|はじめまして|Hi, I'm Yuki. [Nice to meet you.]
Nice to see you again.|また会えてうれしい|[Nice to see you again.] How have you been?
How have you been?|元気にしてた？|It's been a year! [How have you been?]
Take care.|気をつけてね、じゃあね|See you tomorrow. [Take care.]
See you later.|またね|I have to go now. [See you later.]
Catch you later.|またあとでね|[Catch you later]! I'm off to class.|くだけた言い方
Have a good one.|よい一日を|Thanks for your help. [Have a good one.]
I'd better get going.|そろそろ行かなきゃ|It's getting late. [I'd better get going.]
Say hi to ~ for me.|〜によろしく|[Say hi to] your parents [for me].
Really?|本当？|A: I passed the exam! B: [Really?] That's great!
No way!|まさか！|A: She's moving to Canada. B: [No way!]
Seriously?|マジで？|A: The concert is canceled. B: [Seriously?]
I see.|なるほど|A: The store closes at six on Sundays. B: [I see.]
That makes sense.|なるほど、納得|A: He was tired, so he went home early. B: [That makes sense.]
Got it.|わかった|A: Meet me at the gate at nine. B: [Got it.]
Exactly.|まさにその通り|A: So we need more time? B: [Exactly.]
Absolutely.|もちろん、絶対そう|A: Can I count on you? B: [Absolutely.]
Sure.|いいよ|A: Can you pass me the salt? B: [Sure.]
Of course.|もちろん|A: May I sit here? B: [Of course.]
Sounds good.|いいね|A: Let's meet at seven. B: [Sounds good.]
Sounds like fun.|楽しそう|A: We're going camping this weekend. B: [Sounds like fun!]
That's great!|よかったね！|A: I got the job! B: [That's great!]
Good for you!|よかったじゃない！|A: I finally quit smoking. B: [Good for you!]
Congratulations!|おめでとう！|[Congratulations] on your graduation!|on 〜 で「〜おめでとう」
That's too bad.|それは残念|A: I can't come to the party. B: [That's too bad.]
I'm sorry to hear that.|それはお気の毒に|A: My grandfather is in the hospital. B: [I'm sorry to hear that.]
I know what you mean.|わかるよ、その気持ち|A: Mondays are so tiring. B: [I know what you mean.]
Tell me about it.|ほんとそれ（まったくだ）|A: This heat is terrible. B: [Tell me about it.]|同意。「話して」ではない
You can say that again.|まったくその通り|A: The test was so hard. B: [You can say that again.]
Me too.|私も|A: I'm hungry. B: [Me too.]
Me neither.|私も〜ない|A: I don't like horror movies. B: [Me neither.]|否定文への同意
Same here.|こっちも同じ|A: I'm so tired. B: [Same here.]
I guess so.|そうだと思う（たぶんね）|A: Will it rain tomorrow? B: [I guess so.]
I don't think so.|そうは思わない|A: Is he coming? B: [I don't think so.]
I hope so.|そうだといいね|A: Do you think we'll win? B: [I hope so.]
I hope not.|そうでないといいね|A: Will the train be late? B: [I hope not.]
Maybe.|かもね|A: Are you going to the party? B: [Maybe.]
It depends.|場合によるね|A: Do you like spicy food? B: [It depends.]
Not really.|そうでもない|A: Are you busy? B: [Not really.]
Not at all.|全然／どういたしまして|A: Thanks a lot. B: [Not at all.]
No problem.|大丈夫、どういたしまして|A: Sorry I'm late. B: [No problem.]
You're welcome.|どういたしまして|A: Thank you for the gift. B: [You're welcome.]
My pleasure.|どういたしまして（喜んで）|A: Thanks for showing me around. B: [My pleasure.]
Don't mention it.|お礼なんていいよ|A: Thanks for your help. B: [Don't mention it.]
Anytime.|いつでもどうぞ|A: Thanks for the ride. B: [Anytime.]
No worries.|気にしないで|A: Sorry, I forgot to call you. B: [No worries.]
Never mind.|気にしないで、なんでもない|[Never mind.] It's not important.
Wait, what?|え、なに？|[Wait, what?] You quit your job?
Oh, I didn't know that.|へえ、知らなかった|A: He's from Osaka. B: [Oh, I didn't know that.]
Is that so?|そうなの？|A: The museum is free on Sundays. B: [Is that so?]
Good to know.|知れてよかった|A: The café has free Wi-Fi. B: [Good to know.]
Fair enough.|それならしかたないね、もっともだ|A: I can't come because I'm sick. B: [Fair enough.]
Whatever.|どうでもいいよ、何でもいい|A: Pizza or pasta? B: [Whatever.] I'm not picky.|言い方によっては失礼
Here you are.|はい、どうぞ|A: Can I see your ticket? B: [Here you are.]
`);

K('kw2','気持ち・感情を伝える','うれしい・残念・驚き・不安などを自然に言う',`
I'm so happy for you.|（あなたのことで）本当にうれしい|You got into Kyoto University? [I'm so happy for you.]
I can't wait!|待ちきれない！|The trip is next week. [I can't wait!]
I'm looking forward to it.|楽しみにしている|Thanks for inviting me. [I'm looking forward to it.]
I'm excited about ~.|〜にわくわくしている|[I'm excited about] the concert tonight.
That's amazing!|すごい！|You ran a full marathon? [That's amazing!]
I'm impressed.|感心した|You cooked all this? [I'm impressed.]
I'm proud of you.|あなたを誇りに思う|You did your best. [I'm proud of you.]
What a relief!|ほっとした！|The test was canceled? [What a relief!]
Thank goodness.|よかった（助かった）|[Thank goodness] you're safe.
I'm glad to hear that.|それを聞いてうれしい|A: My mother is feeling better. B: [I'm glad to hear that.]
I'm so sorry.|本当にごめんなさい／お気の毒に|[I'm so sorry] for your loss.
I'm disappointed.|がっかりした|[I'm disappointed] that the game was canceled.
What a shame!|残念！|You can't come? [What a shame!]
I feel bad about ~.|〜を申し訳なく思う|[I feel bad about] forgetting your birthday.
I'm nervous.|緊張している|I have an interview tomorrow. [I'm nervous.]
I'm worried about ~.|〜が心配だ|[I'm worried about] my test results.
I'm stressed out.|ストレスでまいっている|I have three exams this week. [I'm stressed out.]
I'm exhausted.|へとへとだ|I worked twelve hours today. [I'm exhausted.]
I'm bored.|退屈だ|There's nothing to do. [I'm bored.]
I'm fed up with ~.|〜にうんざりだ|[I'm fed up with] this rain.
It drives me crazy.|イライラする、頭がおかしくなりそう|The noise next door [drives me crazy].
It's annoying.|うっとうしい、イライラする|People talking on their phones in the train — [it's annoying].
I'm upset.|動揺している、怒っている|[I'm upset] because my friend lied to me.
I'm scared.|こわい|[I'm scared] of thunder.
That's scary.|それはこわいね|Someone followed you home? [That's scary.]
I'm surprised.|驚いた|[I'm surprised] you remembered my name.
I can't believe it!|信じられない！|We won the championship? [I can't believe it!]
You must be kidding.|冗談でしょ|The ticket costs 50,000 yen? [You must be kidding.]
I'm embarrassed.|恥ずかしい|I called my teacher "Mom." [I'm so embarrassed.]
How embarrassing!|恥ずかしい！|I fell down in front of everyone. [How embarrassing!]
I'm confused.|混乱している、よくわからない|[I'm confused.] Which train should I take?
I'm not sure.|よくわからない、自信がない|[I'm not sure] if I locked the door.
I have mixed feelings.|複雑な気持ちだ|[I have mixed feelings] about moving abroad.
I miss you.|あなたがいなくてさみしい|I'll [miss you] when you leave.
I'm homesick.|ホームシックだ|It's my first month abroad, and [I'm homesick].
I'm in a good mood.|機嫌がいい|[I'm in a good mood] today. Let's go out!
I'm not in the mood.|そんな気分じゃない|Sorry, [I'm not in the mood] for karaoke.
I feel like ~ing.|〜したい気分だ|[I feel like] eating something sweet.
I'm grateful.|感謝している|[I'm grateful] for all your support.
I really appreciate it.|本当に感謝します|Thanks for helping me move. [I really appreciate it.]
It means a lot to me.|私にとってとても大事なことだ|Thank you for coming. [It means a lot to me.]
I'm touched.|感動した、心を打たれた|You made this for me? [I'm touched.]
That's so sweet of you.|本当に優しいね|You brought me soup? [That's so sweet of you.]
I'm jealous.|うらやましい|You're going to Hawaii? [I'm jealous!]
I regret ~ing.|〜したことを後悔している|[I regret] not studying harder.
It's not a big deal.|大したことじゃないよ|Don't worry. [It's not a big deal.]
Don't worry about it.|気にしないで|You broke a cup? [Don't worry about it.]
Cheer up!|元気出して！|[Cheer up!] You'll do better next time.
Hang in there.|がんばって（踏んばって）|I know it's hard. [Hang in there.]
You can do it!|あなたならできる！|Don't give up. [You can do it!]
Good luck!|がんばってね！|You have an exam tomorrow? [Good luck!]
I'm here for you.|私がついているよ|If you need to talk, [I'm here for you].
`);

K('kw3','頼む・誘う・提案する・断る','お願い・誘い・提案と、上手な断り方',`
Can you ~?|〜してくれる？|[Can you] open the window?
Could you ~?|〜していただけますか|[Could you] speak a little more slowly?|Can より丁寧
Would you mind ~ing?|〜していただいてもいいですか|[Would you mind] closing the door?|答えは No, not at all. でOK
Do you mind if I ~?|〜してもいいですか|[Do you mind if I] sit here?
Is it OK if I ~?|〜してもいい？|[Is it OK if I] use your pen?
Can I ask you a favor?|お願いがあるんだけど|[Can I ask you a favor?] Could you water my plants?
Could you do me a favor?|頼みを聞いてもらえますか|[Could you do me a favor] and take a picture of us?
Can you give me a hand?|手伝ってくれる？|This box is heavy. [Can you give me a hand?]
Would you like ~?|〜はいかがですか|[Would you like] some tea?
Would you like to ~?|〜しませんか|[Would you like to] join us for dinner?
Do you want to ~?|〜しない？|[Do you want to] see a movie tonight?
Why don't we ~?|〜しようよ|[Why don't we] take a break?
How about ~ing?|〜するのはどう？|[How about going] to the beach this weekend?
Let's ~.|〜しよう|[Let's] get something to eat.
Shall we ~?|〜しましょうか|[Shall we] start the meeting?
What do you say to ~ing?|〜するのはどう？|[What do you say to] eating out tonight?
Are you free ~?|〜は空いてる？|[Are you free] this Saturday?
Do you have time?|時間ある？|[Do you have time] for a quick chat?
I was wondering if ~.|〜していただけないかと思いまして|[I was wondering if] you could help me with my report.|とても丁寧な頼み方
If you don't mind, ~.|もしよければ、〜|[If you don't mind,] I'd like to leave early today.
I'd love to.|ぜひ！|A: Would you like to come? B: [I'd love to.]
Count me in.|私も参加する|A: We're playing soccer after school. B: [Count me in!]
Why not?|いいね（もちろん）|A: Do you want to try sushi? B: [Why not?]
Sure thing.|もちろん|A: Can you help me later? B: [Sure thing.]
I'm afraid I can't.|残念だけど、できません|A: Can you come tomorrow? B: [I'm afraid I can't.]
I'd love to, but ~.|ぜひそうしたいけど〜|[I'd love to, but] I have to work.
Maybe next time.|また今度ね|I'm busy today. [Maybe next time.]
Can I take a rain check?|また今度にしてもいい？|I'm tired tonight. [Can I take a rain check?]
I'll pass.|やめておくよ|A: Want some more cake? B: [I'll pass], thanks.
I'll think about it.|考えておくね|A: Will you join the club? B: [I'll think about it.]
Let me check my schedule.|予定を確認させて|[Let me check my schedule] and get back to you.
I'll get back to you.|あとで連絡するね|I'm not sure yet. [I'll get back to you.]
That's not possible.|それは無理です|Finishing by tomorrow? [That's not possible.]
I'd rather not.|あまりしたくないな|A: Do you want to sing? B: [I'd rather not.]
No, thank you.|いいえ、けっこうです|A: More coffee? B: [No, thank you.]
Thanks, but no thanks.|ありがたいけど遠慮しておく|[Thanks, but no thanks.] I can do it myself.|やや強い断り
You should ~.|〜したほうがいいよ|[You should] see a doctor.
You'd better ~.|〜しないとまずいよ|[You'd better] hurry, or you'll miss the bus.|強い忠告
If I were you, I'd ~.|私なら〜する|[If I were you, I'd] take the job.
Why don't you ~?|〜したらどう？|[Why don't you] ask the teacher?
Have you tried ~ing?|〜してみた？|[Have you tried] restarting your computer?
It might be a good idea to ~.|〜するのもいいかもね|[It might be a good idea to] book early.
Let me ~.|私に〜させて|[Let me] carry that for you.
I'll do it.|私がやるよ|Don't worry about the dishes. [I'll do it.]
Leave it to me.|任せて|[Leave it to me.] I'll handle everything.
Can I help you?|何かお手伝いしましょうか|You look lost. [Can I help you?]
Do you need any help?|手伝いましょうか|[Do you need any help] with your bags?
Go ahead.|どうぞ|A: Can I use the bathroom? B: [Go ahead.]
After you.|お先にどうぞ|Please go first. [After you.]
Help yourself.|ご自由にどうぞ|There's food in the kitchen. [Help yourself.]
Make yourself at home.|くつろいでね|Come in! [Make yourself at home.]
Be my guest.|どうぞご遠慮なく|A: May I use your phone? B: [Be my guest.]
`);

K('kw4','意見を言う・会話をつなぐ','意見・賛否・言い直し・聞き返しのフレーズ',`
I think ~.|〜だと思う|[I think] it's a good idea.
In my opinion, ~.|私の意見では|[In my opinion,] we should wait.
If you ask me, ~.|私に言わせれば|[If you ask me,] the movie was too long.
Personally, ~.|個人的には|[Personally,] I prefer tea.
I feel like ~.|〜のような気がする|[I feel like] something is wrong.
It seems to me that ~.|私には〜のように思える|[It seems to me that] he's not interested.
As far as I know, ~.|私の知る限り|[As far as I know,] the shop is open today.
I agree.|賛成|A: We need a break. B: [I agree.]
I totally agree.|大賛成|A: Homework should be shorter. B: [I totally agree.]
I couldn't agree more.|大賛成だ（これ以上ないほど同意）|A: Health comes first. B: [I couldn't agree more.]
You have a point.|一理ある|[You have a point], but I still disagree.
That's true, but ~.|それはそうだけど〜|[That's true, but] it's too expensive.
I see what you mean, but ~.|言いたいことはわかるけど〜|[I see what you mean, but] I don't think it will work.
I'm not so sure about that.|それはどうかな|A: He'll win easily. B: [I'm not so sure about that.]
I don't agree.|賛成できない|[I don't agree.] I think it's too risky.
I'm against it.|反対だ|Raising the price? [I'm against it.]
I'm for it.|賛成だ|A new library? [I'm for it.]
It's up to you.|あなた次第だよ|Where should we eat? [It's up to you.]
Either is fine.|どちらでもいいよ|Coffee or tea? [Either is fine.]
What do you think?|どう思う？|I want to dye my hair. [What do you think?]
How do you feel about ~?|〜についてどう思う？|[How do you feel about] working from home?
What would you do?|あなたならどうする？|[What would you do] if you were me?
Let me think.|ちょっと考えさせて|Hmm, [let me think].
Let me see.|ええと|[Let me see]... I think it's on Tuesday.
Well, ~.|そうだね、ええと|[Well,] it's hard to say.
You know, ~.|ほら、あのね|[You know,] I've always wanted to go to Paris.
I mean, ~.|つまり、いや〜|It's good. [I mean,] it's not perfect, but it's good.
Like I said, ~.|さっきも言ったけど|[Like I said,] I can't come tomorrow.
Anyway, ~.|とにかく、それはさておき|[Anyway,] let's get back to work.
By the way, ~.|ところで|[By the way,] have you seen Tom lately?
Speaking of ~, ...|〜と言えば|[Speaking of] food, have you tried the new café?
That reminds me, ~.|それで思い出したけど|[That reminds me,] I have to call my mom.
To be honest, ~.|正直に言うと|[To be honest,] I didn't like the movie.
Actually, ~.|実は|[Actually,] I've never been abroad.
The thing is, ~.|実はね、問題は〜|[The thing is,] I don't have enough money.
In other words, ~.|つまり|[In other words,] we have to start over.
What I mean is ~.|私が言いたいのは〜|[What I mean is] we need more time.
Sorry?|すみません、もう一度？|[Sorry?] I didn't catch that.
Could you say that again?|もう一度言ってもらえますか|[Could you say that again?] It's noisy here.
I didn't catch that.|聞き取れなかった|Sorry, [I didn't catch that].
What do you mean?|どういう意味？|[What do you mean?] I don't understand.
What does ~ mean?|〜ってどういう意味？|[What does] "awkward" [mean]?
How do you say ~ in English?|〜は英語で何て言うの？|[How do you say] "itadakimasu" [in English]?
How do you spell that?|どうつづるの？|Your name is Siobhan? [How do you spell that?]
Are you following me?|ついてきてる？（わかる？）|[Are you following me?] Good, let's continue.
Does that make sense?|わかる？（筋が通ってる？）|We'll meet at the station first. [Does that make sense?]
Let me put it another way.|別の言い方をすると|[Let me put it another way.] We need to save money.
Where was I?|どこまで話したっけ？|Sorry, [where was I?]
What was I saying?|何の話してたっけ？|[What was I saying?] Oh, right, the trip.
Long story short, ~.|手短に言うと|[Long story short,] we missed the plane.
`);
})();
