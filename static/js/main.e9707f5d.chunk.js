(this["webpackJsonpturbo-type"]=this["webpackJsonpturbo-type"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(1),r=a.n(s),n=a(4),i=a.n(n),o=a(3),h=a(5),c=a(6),l=a(10),d=a(9),m=(a(15),a(0)),u=function(e){var t=e.startAgain,a=e.words,s=e.characters,r=e.wpm,n="mittalaakash.netlifyapp.com";return Object(m.jsxs)("div",{className:"try-again-container",children:[Object(m.jsx)("h1",{children:"Test Results"}),Object(m.jsxs)("div",{className:"result-container",children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Characters: "}),s]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Words: "}),a]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Speed: "}),r," wpm"]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{onClick:function(){t()},className:"end-buttons start-again-btn",children:"Re-try"}),Object(m.jsx)("button",{onClick:function(){return window.open("https://www.facebook.com/sharer/sharer.php?u="+n,"facebook-share-dialog","width=800,height=600")},className:"end-buttons share-btn",children:"Share"}),Object(m.jsx)("button",{onClick:function(){return window.open("https://twitter.com/intent/tweet?text=Check%20this%20out%20"+n,"Twitter","width=800,height=600")},className:"end-buttons tweet-btn",children:"Tweet"})]})]})},b=(a(17),function(e){var t=e.cardName,a=e.cardValue;return Object(m.jsxs)("div",{className:"details-card-container",children:[Object(m.jsx)("div",{className:"card-name",children:t}),Object(m.jsx)("div",{className:"card-value",children:a})]})}),p=(a(18),function(e){var t=e.individualLetterInfo,a={correct:"test-letter-correct",incorrect:"test-letter-incorrect",notAttempted:"test-letter-not-attempted"}[t.status];return Object(m.jsx)("span",{className:"test-letter ".concat(a),children:t.testLetter})}),f=(a(19),function(e){var t=e.timeRemaining,a=e.timerStarted,s=e.testInfo,r=e.onInputChange;return Object(m.jsxs)("div",{className:"typing-challenge",children:[Object(m.jsxs)("div",{className:"timer-container",children:[Object(m.jsxs)("p",{className:"timer",children:["00:",t>=10?t:"0".concat(t)]}),Object(m.jsx)("p",{className:"timer-info",children:!a&&"Start typing to begin the test"})]}),Object(m.jsxs)("div",{className:"textarea-container",children:[Object(m.jsx)("div",{className:"textarea-left",children:Object(m.jsx)("div",{className:"textarea test-paragraph",children:s.map((function(e,t){return Object(m.jsx)(p,{individualLetterInfo:e},t)}))})}),Object(m.jsx)("div",{className:"textarea-right",children:Object(m.jsx)("textarea",{onChange:function(e){return r(e.target.value)},className:"textarea",placeholder:"Start typing here"})})]})]})}),w=(a(20),function(e){var t=e.selectedParagraph,a=e.words,s=e.wpm,r=e.characters,n=e.timeRemaining,i=e.timerStarted,o=e.testInfo,h=e.onInputChange;return Object(m.jsxs)("div",{className:"typing-challenge-container",children:[Object(m.jsxs)("div",{className:"details-container",children:[Object(m.jsx)(b,{cardName:"Words",cardValue:a}),Object(m.jsx)(b,{cardName:"Characters",cardValue:r}),Object(m.jsx)(b,{cardName:"Speed",cardValue:s})]}),Object(m.jsx)("div",{className:"typewriter-container",children:Object(m.jsx)(f,{timeRemaining:n,timerStarted:i,selectedParagraph:t,testInfo:o,onInputChange:h})})]})}),g=(a(21),function(e){var t=e.startAgain,a=e.selectedParagraph,s=e.words,r=e.wpm,n=e.characters,i=e.timeRemaining,o=e.timerStarted,h=e.testInfo,c=e.onInputChange;return Object(m.jsx)("div",{className:"test-container",children:i>0?Object(m.jsx)("div",{"data-aos":"fade-up",className:"typing-challenge-cont",children:Object(m.jsx)(w,{selectedParagraph:a,words:s,wpm:r,characters:n,timeRemaining:i,timerStarted:o,testInfo:h,onInputChange:c})}):Object(m.jsx)("div",{className:"try-again-cont",children:Object(m.jsx)(u,{startAgain:t,words:s,characters:n,wpm:r})})})}),y=(a(22),function(e){var t=e.startAgain,a=e.selectedParagraph,s=e.words,r=e.wpm,n=e.characters,i=e.timeRemaining,o=e.timerStarted,h=e.testInfo,c=e.onInputChange;return Object(m.jsxs)("div",{className:"challenge-section-container",children:[Object(m.jsx)("h1",{"data-aos":"fade-down",className:"challenge-section-header",children:"Take a speed test now!"}),Object(m.jsx)(g,{selectedParagraph:a,words:s,wpm:r,characters:n,timeRemaining:i,timerStarted:o,testInfo:h,onInputChange:c,startAgain:t})]})}),j=(a(23),function(){return Object(m.jsx)("div",{className:"footer-container",children:Object(m.jsx)("a",{href:"https://mittalaakash.netlify.app/",className:"footer-link",target:"_blank",rel:"noreferrer",children:"Creator"})})}),v=(a(24),a.p+"static/media/turbo.c7fdb03c.png"),k=a(7),x=a.n(k),O=a(8),T=a.n(O);a(26);T.a.init();var A=function(){return Object(m.jsxs)("div",{className:"landing-container",children:[Object(m.jsxs)("div",{className:"landing-left","data-aos":"fade-right",children:[Object(m.jsx)("h1",{className:"landing-header",children:"Can you type..."}),Object(m.jsx)("div",{className:"typewriter-container",children:Object(m.jsx)(x.a,{options:{strings:["Fast?","Correct?","Quick?"],autoStart:!0,loop:!0}})})]}),Object(m.jsx)("div",{className:"landing-right","data-aos":"fade-left",children:Object(m.jsx)("img",{className:"turbo-image",src:v,alt:"Snail"})})]})},N=(a(27),a.p+"static/media/turbo-logo.f84a88d9.png"),I=function(){return Object(m.jsxs)("nav",{className:"nav-container",children:[Object(m.jsxs)("div",{className:"nav-left",children:[Object(m.jsx)("img",{src:N,alt:"logo",className:"turbo-logo"}),Object(m.jsx)("p",{className:"turbo-logo-text",children:"TurboType"})]}),Object(m.jsx)("div",{className:"nav-right",children:Object(m.jsx)("a",{target:"_blank",rel:"noreferrer",className:"nav-link",href:"https://github.com/mittalaakash",children:"GitHub"})})]})},S=(a(28),["A fine is a criminal from the right perspective. Their club was, in this moment, an unslung cracker. A pump is an acoustic from the right perspective. A step-brother is a dessert's attraction. Their verdict was, in this moment, a sunward exhaust. The literature would have us believe that a woodless millennium is not but a road. The scraggly minister comes from a lairy note. In recent years, an unsigned authorization is a titanium of the mind. Some assert that before accounts, whips were only thumbs.","Their sprout was, in this moment, a jumpy delete. To be more specific, their vegetarian was, in this moment, a dangling daniel. They were lost without the tropic mimosa that composed their rooster. Their september was, in this moment, an awnless card. They were lost without the unsprung twine that composed their pen. The suns could be said to resemble cymoid gears. Some guileful roberts are thought of simply as rutabagas. Some posit the sensate pakistan to be less than profound. Far from the truth, the moves could be said to resemble psycho paints.","Authors often misinterpret the narcissus as a squiggly team, when in actuality it feels more like an honied tray. Those sexes are nothing more than lycras. A spriggy hamster is a feet of the mind. Nowhere is it disputed that the literature would have us believe that a medley destruction is not but a tulip. A nurse of the hydrofoil is assumed to be a mitered machine. One cannot separate mails from floccus cabbages. We know that the first deserved cause is, in its own way, a judge. This is not to discredit the idea that a plastic is a marching nylon. A peen is a feast from the right perspective.","Weldless yaks show us how gears can be pears. A fruit is a windswept giant. The promotions could be said to resemble shallow tigers. The approvals could be said to resemble tangled gazelles. Far from the truth, a baseless drum without properties is truly a scooter of chiselled tablecloths. Unfortunately, that is wrong; on the contrary, a christopher is the night of a drink. The darkish speedboat reveals itself as a hyoid wash to those who look. The dedal form comes from a hotting laugh. An ethernet is an edward's swiss.","In recent years, deuced flavors show us how bacons can be celestes. The stubby blade reveals itself as a divers head to those who look. A lawless pond without tubs is truly a judge of thecate toes. We know that we can assume that any instance of a hexagon can be construed as a lapelled juice. The zeitgeist contends that some coreless algebras are thought of simply as mice. Some tannic golfs are thought of simply as missiles. The elephant is a crown. Nowhere is it disputed that an abloom popcorn without balloons is truly a abyssinian of glossies whales. Unfortunately, that is wrong; on the contrary, some posit the boughten otter to be less than slouchy.","An airbus is a leg from the right perspective. Before pantries, harmonies were only baritones. Few can name a serene mistake that isn't a stockinged sword. Casebook nodes show us how pinks can be houses. This is not to discredit the idea that a key is a distrait interest. A step-grandfather of the carp is assumed to be an algal sunflower. A sneaking pine is a swing of the mind. Some ocher coins are thought of simply as slashes. Though we assume the latter, one cannot separate lines from pausal bails.","This could be, or perhaps a collar is the pamphlet of a kimberly. A dad of the design is assumed to be a patent june. A teeny chief is a james of the mind. A deborah can hardly be considered a saintly flesh without also being a daffodil. Those ministers are nothing more than cathedrals. Though we assume the latter, a market of the cracker is assumed to be an okay confirmation. The literature would have us believe that a mirthless t-shirt is not but a clock. The headlong carol comes from a puddly whistle. The olives could be said to resemble upbound ethernets.","As far as we can estimate, their hat was, in this moment, a towered pakistan. Recent controversy aside, the first unsquared wrinkle is, in its own way, a sphynx. The lutes could be said to resemble cystoid lipsticks. However, before jennifers, attacks were only irans. The rubbers could be said to resemble broadloom cards. Though we assume the latter, one cannot separate firs from princely boats. As far as we can estimate, the slapstick dash reveals itself as a dotted trouble to those who look. A street is the trail of a daniel. They were lost without the hoyden pasta that composed their stove.","A grudging grouse's desk comes with it the thought that the wooded shark is a quality. Before commas, times were only harmonicas. A gum is a wasp's drop. Stopsigns are flabby insects. Fortnights are premorse celestes. A handless observation's toothpaste comes with it the thought that the equine donna is a wilderness. What we don't know for sure is whether or not a berry sees a chief as a prefab gear. The zeitgeist contends that those barges are nothing more than taxes. Framed in a different way, a leopard is a supply's chin.","One cannot separate kohlrabis from bobtail trails. Their jail was, in this moment, a yearling belief. The pint of a rowboat becomes a venous scarecrow. In recent years, the orchid of a harbor becomes a jointed lake. They were lost without the bogus trunk that composed their adult. A bifid jar's cappelletti comes with it the thought that the unleased cord is a cultivator. They were lost without the mouthless museum that composed their backbone. Far from the truth, a zoning soprano's maria comes with it the thought that the reborn play is a price. A kick sees a reindeer as a stolen archaeology.","To be more specific, few can name a blameful shelf that isn't an unborn airbus. Some assert that a balding tv without rings is truly a barometer of pseudo snows. As far as we can estimate, the verist earthquake reveals itself as a footworn pet to those who look. In modern times they were lost without the chunky save that composed their knowledge. Authors often misinterpret the calf as a themeless pine, when in actuality it feels more like a schmalzy interviewer. We know that the octopi could be said to resemble sparry baseballs. The gutless gray reveals itself as an unfiled flood to those who look. An oyster sees a motorcycle as a neuron pharmacist. However, the literature would have us believe that a sweptwing appeal is not but a yard.","We can assume that any instance of a stool can be construed as a funest handle. In recent years, we can assume that any instance of a cloakroom can be construed as a topfull leather. Far from the truth, a turnip sees a man as a churlish poison. A plate can hardly be considered a farming rat without also being a lumber. Some posit the cissoid pastor to be less than shamefaced. This is not to discredit the idea that a season of the selection is assumed to be an absurd jaw. As far as we can estimate, the time of a level becomes a prolate october. If this was somewhat unclear, a time sees a representative as an anguished ox. In modern times authors often misinterpret the popcorn as a sternmost kendo, when in actuality it feels more like a battered step-brother.","Some posit the thickset timer to be less than shaken. A methane of the deodorant is assumed to be a snappish cold. The toeless blanket comes from a learned clover. A hollow command is an island of the mind. In recent years, the whity snowboard comes from a bijou cause. If this was somewhat unclear, a discoid pig without trials is truly a bulb of smacking zephyrs. Few can name a luscious honey that isn't a deuced guilty. Before undercloths, siameses were only capitals. Some assert that few can name a sunfast edger that isn't a smectic laura.","The montane peripheral comes from a hoggish security. Nowhere is it disputed that the palms could be said to resemble pinnate bombers. This could be, or perhaps a grenade is a keyboard from the right perspective. Extending this logic, the japans could be said to resemble centrist brackets. Their Friday was, in this moment, a phatic helmet. A systemless gondola without attentions is truly a wolf of spermic edwards. The literature would have us believe that a willful cuticle is not but a geese. If this was somewhat unclear, one cannot separate coaches from brilliant plows. A dish is an olden baritone.","Some chairborne fronts are thought of simply as routes. One cannot separate hamsters from crackbrained journeies. As far as we can estimate, some increased stopsigns are thought of simply as changes. Few can name an uncalled doctor that isn't a ledgy kendo. Some posit the dendroid buffet to be less than surgy. The literature would have us believe that a rollneck growth is not but a sand. They were lost without the vying bulb that composed their blouse. A heat is a watchmaker's white. The fitchy bush reveals itself as a briny share to those who look.","To be more specific, the grades could be said to resemble latish plasterboards. The first strawless grain is, in its own way, an undercloth. A sheep is the time of a step-son. Some assert that authors often misinterpret the poppy as an unslung lycra, when in actuality it feels more like a kacha ex-husband. We can assume that any instance of an encyclopedia can be construed as an undyed asia. We know that feathers are humdrum reactions. It's an undeniable fact, really; before communities, ashes were only ATMS. The first dicky delete is, in its own way, a cross. They were lost without the arranged string that composed their paint.","Extending this logic, the basses could be said to resemble zippy sugars. A secund lobster's iris comes with it the thought that the throaty Vietnam is an alligator. A toad is the kitchen of a production. Some posit the notour chef to be less than morish. To be more specific, a moonlit pumpkin's sea comes with it the thought that the fiercest cub is a measure. Recent controversy aside, a slimsy downtown without perches is truly a grandson of spiry sousaphones. The bowl of a couch becomes a daring archeology. A kayak is a chill from the right perspective. If this was somewhat unclear, few can name a bifid Wednesday that isn't a loveless icicle.","Framed in a different way, a nimble insurance is a rise of the mind. A rice of the aftershave is assumed to be a contained sink. As far as we can estimate, the unkind fiction comes from a seasick latex. The literature would have us believe that a routed pedestrian is not but a ground. The velate anteater reveals itself as an unstriped cardboard to those who look. The musician of a train becomes an upward ease. It's an undeniable fact, really; a snugger toy is a romanian of the mind. Some fleshy raies are thought of simply as selections. An oval of the baby is assumed to be a shiny room."]),C={selectedParagraph:"",testInfo:[],timerStarted:!1,timeRemaining:60,words:0,characters:0,wpm:0},R=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(h.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state=C,e.fetchNewPara=function(){var t=S[Math.floor(Math.random()*S.length)],a=t.split("").map((function(e){return{testLetter:e,status:"notAttempted"}}));e.setState(Object(o.a)(Object(o.a)({},C),{},{testInfo:a,selectedParagraph:t}))},e.startTimer=function(){e.setState({timerStarted:!0});var t=setInterval((function(){if(e.state.timeRemaining>0){var a=60-e.state.timeRemaining,s=a>0?e.state.words/a*60:0;e.setState({timeRemaining:e.state.timeRemaining-1,wpm:parseInt(s)})}else clearInterval(t)}),1e3)},e.startAgain=function(){return e.fetchNewPara()},e.handleUserInput=function(t){e.state.timerStarted||e.startTimer();var a=t.length,s=t.split(" ").length,r=a-1;if(r<0){var n=e.state.testInfo.map((function(e){return{testLetter:e.testLetter,status:"notAttempted"}}));e.setState({testInfo:n,words:s,characters:a})}else if(r>=e.state.selectedParagraph.length)e.setState({characters:a,words:s});else{var i=e.state.testInfo;r!==e.state.selectedParagraph.length-1&&(i[r+1].status="notAttempted");var o=t[r]===i[r].testLetter;i[r].status=o?"correct":"incorrect",e.setState({testInfo:i,words:s,characters:a})}},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.fetchNewPara()}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)(I,{}),Object(m.jsx)(A,{}),Object(m.jsx)(y,{selectedParagraph:this.state.selectedParagraph,words:this.state.words,characters:this.state.characters,wpm:this.state.wpm,timeRemaining:this.state.timeRemaining,timerStarted:this.state.timerStarted,testInfo:this.state.testInfo,onInputChange:this.handleUserInput,startAgain:this.startAgain}),Object(m.jsx)(j,{})]})}}]),a}(r.a.Component);i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(R,{})}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.e9707f5d.chunk.js.map