// アカデミック単語・論文の表現 ― 既存の単語は同じカード（記録を共有）、新しい語と例文はこのアプリ用に作成
(function(){
const D=window.EIGO_DATA;
const byW={};for(const d of D.decks)if(d.type==='vocab'&&!/^kw|^w|^conf|^phon|^roots|^lv|^etym|^deriv/.test(d.id))for(const i of d.items){const w=String(i.w).toLowerCase();if(!byW[w])byW[w]=i}
const LIST=`abstract academic accumulate accurate acknowledge acquire adapt adequate adjacent advocate aggregate allocate alter alternative ambiguous amend analogy analyze annotate anomaly anticipate apparent append appendix appropriate approximate arbitrary aspect assemble assess assign assume attain attribute bias bibliography capacity categorize cease chapter chart cite clarify classify coherent coincide collapse commence compatible compensate compile complement component comprise compute conceive concentrate concept conclude concurrent conduct confer configuration confine confirm conform consent consequent considerable consist constant constitute constrain construct consult contemporary context contradict contrary contrast contribute controversy convene converse convert correlate correspond criterion crucial data deduce define definitive demonstrate denote derive design despite detect deviate differentiate dimension diminish discrete discriminate displace dispose distinct distort distribute diverse document domain dominant draft duration dynamic elicit eliminate empirical emphasis encounter enhance enormous ensure entity environment equate equivalent erode error establish estimate evaluate eventual evident evolve exceed exclude exhibit expand explicit exploit expose external extract facilitate factor feature finite fluctuate focus format formula framework function fundamental generate generic globe grade hierarchy highlight hypothesis hypothesize identical identify ideology ignorance illustrate impact implement implicate implicit imply incidence incline incorporate index indicate individual induce inevitable infer infrastructure inherent inhibit initial initiate innovate input insert insight inspect instance integral integrate integrity interact intermediate internal interpret interval intervene intrinsic investigate invoke isolate issue item journal justify label layer lecture legislate levy liberal license likewise link locate logic maintain manipulate margin mature maximize mechanism mediate medium mental methodology migrate minimal minimize mode modify monitor mutual negate network neutral nevertheless nonetheless norm notion nuclear objective obtain obvious occupy occur odd offset ongoing optimal option orient outcome output overall overlap paradigm parallel parameter participate passive perceive percent period persist perspective phase phenomenon philosophy plausible policy portion pose positive postulate potential practitioner precede precise predict predominant preliminary presume previous primary prime principal principle prior priority proceed process proportion prospect protocol publish purchase pursue qualitative quantitative quote radical random range ratio rational react recover refine regime region register regulate reinforce reject relevant reliable rely remove replicate represent require research reside resolve resource respond restore restrain restrict retain reveal revise rigid role scenario schedule scheme scope section sector secure seek select sequence series shift significant similar simulate site sole somewhat source specific specify sphere stable statistic status straightforward strategy stress structure style submit subordinate subsequent subsidy substitute successor sufficient sum summary supplement survey survive suspend sustain symbol synthesis target task team technical technique technology temporary tense terminate text theme theory thereby thesis topic trace tradition transfer transform transit transmit trend trigger ultimate undergo underlie undertake uniform unify unique utilize valid variable vary version via violate virtual visible vision volume voluntary welfare whereas whereby widespread corroborate substantiate extrapolate operationalize quantify parametric heterogeneity homogeneous covariate confounder longitudinal cohort cross-sectional randomize stratify prevalence attenuate exacerbate mediator moderator salient efficacy outlier variance regression causal causation correlational ethnography epistemology ontology heuristic axiomatic tautology dichotomy discourse paradigmatic juxtapose delineate elucidate posit conjecture caveat rubric meta-analysis peer-review replicability reproducibility generalizability validity reliability null hypothesis-driven inductive deductive empiricism abstraction taxonomy typology nomenclature corpus excerpt citation plagiarism footnote manuscript reviewer rebuttal`.split(/\s+/).filter(Boolean);
const NEW={};`append|動|〜を付け加える|A glossary is [appended] to the report.|3
bibliography|名|参考文献一覧|List all sources in the [bibliography].|4
categorize|動|〜を分類する|Responses were [categorized] into three types.|4
chapter|名|章|[Chapter] 2 reviews previous studies.|3
chart|名|図表|The [chart] shows monthly sales.|3
concurrent|形|同時に起こる、併存する|patients with [concurrent] depression|4
consequent|形|結果として起こる|the drought and [consequent] food shortage|4
definitive|形|決定的な、最終的な|There is no [definitive] answer yet.|4
despite|前|〜にもかかわらず|[Despite] the small sample, the effect was clear.|3
dynamic|形|動的な、活発な|a [dynamic] process|3
eventual|形|最終的な|the [eventual] outcome|4
hypothesize|動|〜という仮説を立てる|We [hypothesized] that sleep improves memory.|4
input|名|入力、意見|Thank you for your [input].|3
legislate|動|法律を制定する|The government [legislated] against smoking.|4
license|名|免許、許可|a driver's [license]|3
maximize|動|〜を最大にする|to [maximize] efficiency|4
methodology|名|方法論、研究方法|The [methodology] is described in Section 2.|4
postulate|動|〜を仮定する|Freud [postulated] the unconscious.|5
practitioner|名|実務家、開業医|general [practitioners]|4
quantitative|形|量的な|[quantitative] research|4
underlie|動|〜の根底にある|the mechanisms that [underlie] memory|4
via|前|〜経由で、〜によって|Data were collected [via] online surveys.|3
operationalize|動|〜を操作的に定義する|Stress was [operationalized] as cortisol level.|5
quantify|動|〜を数量化する|It is difficult to [quantify] happiness.|4
parametric|形|パラメトリックな|a [parametric] test|5
heterogeneity|名|異質性、ばらつき|There was high [heterogeneity] among studies.|5
covariate|名|共変量|Age was included as a [covariate].|5
confounder|名|交絡因子|Smoking is a potential [confounder].|5
longitudinal|形|縦断的な|a [longitudinal] study over ten years|5
cohort|名|コホート、同じ集団|a birth [cohort]|4
cross-sectional|形|横断的な|a [cross-sectional] survey|5
randomize|動|〜を無作為化する|Patients were [randomized] to two groups.|4
stratify|動|〜を層別化する|Results were [stratified] by age.|5
attenuate|動|〜を弱める|The effect was [attenuated] after adjustment.|5
mediator|名|媒介変数、仲介者|Sleep was a [mediator] of the effect.|4
moderator|名|調整変数、司会者|Gender acted as a [moderator].|4
outlier|名|外れ値|Two [outliers] were removed.|4
variance|名|分散、ばらつき|The model explains 40% of the [variance].|4
regression|名|回帰|a linear [regression] analysis|4
causal|形|因果の|a [causal] relationship|4
causation|名|因果関係|Correlation does not imply [causation].|4
correlational|形|相関的な|a [correlational] study|5
ethnography|名|民族誌|an [ethnography] of a village|5
epistemology|名|認識論|questions of [epistemology]|5
ontology|名|存在論|[ontology] and epistemology|5
heuristic|名|経験則、ヒューリスティック|a simple [heuristic]|5
axiomatic|形|自明の|It is [axiomatic] that...|5
tautology|名|同語反復|The statement is a [tautology].|5
paradigmatic|形|典型的な、範例となる|a [paradigmatic] case|5
meta-analysis|名|メタ分析|a [meta-analysis] of 30 trials|4
peer-review|名|査読|The paper underwent [peer-review].|4
replicability|名|再現可能性|concerns about [replicability]|5
reproducibility|名|再現性|the [reproducibility] crisis|5
generalizability|名|一般化可能性|This limits the [generalizability] of the findings.|5
null|形|無効の、ゼロの|the [null] hypothesis|4
deductive|形|演繹的な|[deductive] reasoning|4
empiricism|名|経験主義|British [empiricism]|5
abstraction|名|抽象化、抽象概念|a high level of [abstraction]|4
taxonomy|名|分類法|a [taxonomy] of errors|5
typology|名|類型論|a [typology] of families|5
nomenclature|名|命名法|medical [nomenclature]|5
citation|名|引用|The paper has many [citations].|4
reviewer|名|査読者|The [reviewer] asked for more data.|4
rebuttal|名|反論、反駁|a point-by-point [rebuttal]|4`.split('\n').filter(Boolean).forEach(l=>{const [w,pos,m,ex,lv]=l.split('|');NEW[w]={k:'ac:'+w,w,pos,m,ex,lv:+lv}});
const items=[],used=new Set();
for(const w of LIST){if(used.has(w))continue;used.add(w);const it=byW[w]||NEW[w];if(it)items.push(it)}
for(const w in NEW)if(!used.has(w)){used.add(w);items.push(NEW[w])}
D.decks.push({id:'ac',type:'vocab',title:'アカデミック単語',sub:'論文・研究・講義でよく使う語（ほかの単語帳と記録を共有）',stage:50,items});
const L3=new Set(["In contrast to previous studies, ~", "It should be noted that ~.", "Little is known about ~.", "This may be due to ~.", "We found that ~.", "account for ~", "be associated with ~", "consistent with ~", "contrary to ~", "draw a conclusion", "drop out", "e.g.", "follow-up", "however", "i.e.", "in addition", "in conclusion", "in terms of ~", "moreover", "on the other hand", "play a key role in ~", "sample size", "take into account ~", "therefore", "thus", "whereas"]),L5=new Set(["Further research is warranted.", "be beyond the scope of ~", "be in agreement with ~", "cf.", "confidence interval", "lend support to ~", "odds ratio", "p < 0.05", "placebo-controlled"]);const P=[];`This study aims to ~.|本研究は〜することを目的とする|[This study aims to] examine the effect of sleep on memory.
Little is known about ~.|〜についてはほとんど知られていない|[Little is known about] its long-term effects.
To our knowledge, ~|我々の知る限り、〜|[To our knowledge,] this is the first study to...
In contrast to previous studies, ~|先行研究とは対照的に、〜|[In contrast to previous studies,] we found no difference.
consistent with ~|〜と一致する|These results are [consistent with] earlier reports.
contrary to ~|〜に反して|[Contrary to] our hypothesis, the effect was small.
We found that ~.|〜であることがわかった|[We found that] exercise reduced anxiety.
These findings suggest that ~.|これらの結果は〜を示唆する|[These findings suggest that] early treatment is important.
It should be noted that ~.|〜に留意すべきである|[It should be noted that] the sample was small.
One possible explanation is that ~.|考えられる説明の一つは〜である|[One possible explanation is that] patients forgot to report symptoms.
This may be due to ~.|これは〜によるものかもしれない|[This may be due to] differences in age.
In line with ~|〜に沿って、〜と一致して|[In line with] previous findings, ...
with respect to ~|〜に関して|There were no differences [with respect to] gender.
in terms of ~|〜の点で|The groups were similar [in terms of] age.
as opposed to ~|〜とは対照的に|daily [as opposed to] weekly dosing
a growing body of evidence|増えつつある証拠|[A growing body of evidence] supports this view.
play a key role in ~|〜で重要な役割を果たす|Sleep [plays a key role in] memory.
be associated with ~|〜と関連がある|Depression [is associated with] poor sleep.
account for ~|〜を説明する、〜の割合を占める|Women [accounted for] 60% of the sample.
give rise to ~|〜を引き起こす|Stress can [give rise to] illness.
shed light on ~|〜を解明する|This study [sheds light on] the mechanism.
draw a conclusion|結論を導く|It is too early to [draw a conclusion].
lend support to ~|〜を裏付ける|The data [lend support to] our hypothesis.
be attributed to ~|〜に起因する|The improvement [was attributed to] the new drug.
take into account ~|〜を考慮する|We [took into account] age and sex.
control for ~|〜を統制する、調整する|We [controlled for] income.
be in agreement with ~|〜と一致している|Our results [are in agreement with] Smith (2020).
Further research is warranted.|さらなる研究が必要とされる|[Further research is warranted.]
a statistically significant difference|統計的に有意な差|There was [a statistically significant difference].
p < 0.05|p値0.05未満（有意）|The difference was significant ([p < 0.05]).
confidence interval|信頼区間|95% [confidence interval]
odds ratio|オッズ比|an [odds ratio] of 2.1
effect size|効果量|a small [effect size]
sample size|サンプルサイズ|a larger [sample size]
inclusion criteria|組み入れ基準|Patients who met the [inclusion criteria] were enrolled.
exclusion criteria|除外基準|Pregnant women were excluded according to the [exclusion criteria].
informed consent|インフォームド・コンセント|All participants gave [informed consent].
double-blind|二重盲検の|a [double-blind] trial
placebo-controlled|プラセボ対照の|a [placebo-controlled] study
primary outcome|主要評価項目|The [primary outcome] was relapse.
adverse event|有害事象|No serious [adverse events] occurred.
baseline|ベースライン、開始時|Scores were measured at [baseline].
follow-up|追跡調査|at the six-month [follow-up]
drop out|脱落する|Ten patients [dropped out].
be beyond the scope of ~|〜の範囲を超える|This issue [is beyond the scope of] this paper.
limitations of this study|本研究の限界|There are several [limitations of this study].
in conclusion|結論として|[In conclusion,] the treatment was effective.
taken together|まとめると|[Taken together,] these results suggest...
on the other hand|一方で|[On the other hand,] costs increased.
in addition|加えて|[In addition,] we measured sleep quality.
moreover|さらに|[Moreover,] the effect lasted a year.
however|しかしながら|[However,] the sample was small.
therefore|したがって|[Therefore,] we recommend early screening.
thus|このように、したがって|[Thus,] the hypothesis was supported.
whereas|〜である一方|Group A improved, [whereas] group B did not.
respectively|それぞれ|The rates were 10% and 20%, [respectively].
i.e.|すなわち|older adults ([i.e.], over 65)
e.g.|例えば|common symptoms ([e.g.], fatigue)
et al.|〜ら（共著者）|Smith [et al.] (2020) reported...
cf.|〜を参照|([cf.] Table 2)`.split('\n').filter(Boolean).forEach(l=>{const [w,m,ex]=l.split('|');P.push({k:'acp:'+w,w,pos:'表現',m,ex,lv:L3.has(w)?3:L5.has(w)?5:4})});
D.decks.push({id:'acp',type:'vocab',title:'論文・研究の表現',sub:'論文を読む・書くときの決まった言い回し',stage:30,items:P});
})();
