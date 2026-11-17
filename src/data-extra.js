// 要約（英検形式）とAI会話の場面 ― 本文は既存の長文、場面はこのアプリ用に作成
(function(){
const D=window.EIGO_DATA,by={};D.decks.forEach(d=>by[d.id]=d);
const items=[];['jr','tr'].forEach(id=>{const d=by[id];if(!d)return;d.items.forEach((p,i)=>items.push({k:'sm:'+id+':'+i,title:p.title,topic:p.topic,paras:p.paras,src:id==='jr'?'入試':'TOEFL'}))});
D.decks.push({id:'summ',type:'summ',title:'要約（英検準1級形式）',sub:'長文を読み、45〜55語の英語で要約してAIが採点',items});
window.EIGO_RP=[
 {id:'conf',t:'学会発表の質疑応答',me:'あなたは発表者',ai:'a curious audience member at an international medical conference who just heard the user present a study on sleep and mood in adolescents. Ask one probing question at a time about methods, sample, limitations or clinical implications.',first:true,lv:'formal'},
 {id:'chair',t:'学会で座長に質問する',me:'あなたは聴衆',ai:'a presenter at an academic conference who just finished a talk on a new screening tool for depression. Answer the user\'s questions politely and sometimes ask them to clarify.',first:false,lv:'formal'},
 {id:'meet',t:'会議で意見を述べる',me:'あなたは会議の参加者',ai:'a team leader running a meeting about whether to postpone a product launch by two months. Ask for the user\'s opinion, push back politely, and try to reach a decision.',first:true,lv:'formal'},
 {id:'net',t:'交流会で研究を紹介する',me:'あなたは研究者',ai:'a friendly researcher from another country chatting at a conference reception. Make small talk, ask about the user\'s work and suggest keeping in touch.',first:true,lv:'formal'},
 {id:'phone',t:'電話で予約を変更する',me:'あなたは予約した客',ai:'a receptionist at a dental clinic answering the phone. The user wants to change their appointment. Ask for name, current date and preferred new time.',first:true,lv:'business'},
 {id:'interview',t:'英語の面接',me:'あなたは応募者',ai:'an interviewer for a research position at a university hospital. Ask one interview question at a time and follow up on the answers.',first:true,lv:'formal'},
 {id:'doctor',t:'病院で症状を伝える',me:'あなたは患者',ai:'a doctor at a clinic abroad. Ask the user about their symptoms step by step (when it started, where it hurts, other symptoms).',first:true,lv:'daily'},
 {id:'hotel',t:'ホテルのチェックイン',me:'あなたは宿泊客',ai:'a hotel front desk clerk. Check the user in, confirm the reservation, explain breakfast and Wi-Fi, and respond to requests.',first:true,lv:'daily'},
 {id:'rest',t:'レストランで注文する',me:'あなたは客',ai:'a waiter at a casual restaurant. Greet the user, take their order, ask about preferences and offer dessert.',first:true,lv:'daily'},
 {id:'way',t:'道を聞かれて教える',me:'あなたは地元の人',ai:'a tourist in Tokyo who is lost and wants to get to Tokyo Station. Ask the user for directions and ask follow-up questions.',first:true,lv:'daily'},
 {id:'chat',t:'友だちと週末の話',me:'あなたは友だち',ai:'a friendly coworker chatting on Monday morning about the weekend and plans for next weekend.',first:true,lv:'daily'},
 {id:'shop',t:'買い物で返品する',me:'あなたは客',ai:'a store clerk. The user wants to return a sweater. Ask why, ask for the receipt, and offer an exchange or refund.',first:false,lv:'daily'}
];
window.EIGO_RP.forEach(x=>x.k='rp:'+x.id);
D.decks.push({id:'rp',type:'rp',title:'AIと会話（ロールプレイ）',sub:'AIが相手役。学会・会議・旅行などの場面で話す',items:window.EIGO_RP});
})();
