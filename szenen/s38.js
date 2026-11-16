/* Tag 139–142: truth, song, example, democratic, check · environment, leg, various, rather, guess · executive, prove, hang, entire, rock · forget, claim, remove, manager, enjoy */
S.truth=`${room('#fff1c9','#e4b77a')}
 ${speech(60,40,84,44,`${T(40,52,'I ate',11,INK)}<g transform="translate(84,48) scale(1.300)">${P.fish}</g>`,60,80)}
 <g class="beat"><circle cx="150" cy="40" r="22" fill="${MINT}"/>${check(150,40,10,6).replace(new RegExp(MINT,'g'),'#fff')}</g>
 <g transform="translate(150,176)">${P.plate(30)}</g><path d="M140,168 h18 M146,164 v8 M152,164 v8" stroke="#cbc2e6" stroke-width="2"/>
 ${sh(60,192,32)}${at(60,190,.9,cat({eyes:'happy',mouth:'w',armL:-150,armsFront:true,armR:-100}))}${heart(110,120,.8,RED,0)}`;

S.song=`${bg('#2d2a6e')}${papel(10,6,194)}${floor(184,'#1f1b4d')}
 <circle cx="100" cy="150" r="70" fill="#ffe89a" opacity=".15"/>
 ${at(100,190,.96,cat(Object.assign({eyes:'closed',mouth:'big',mouthCls:'chew',hat:sombrero,bow:false,armL:40,armR:-50,armRcls:'bob',armsFront:true,mid:guitar},NL)))}
 ${note(30,90,SUN,0)}${note(170,80,MINT,.6)}${note(150,130,RED,1.2)}${note(46,140,SKY,1.6)}
 <path d="M20,60 q10,-8 20,0 t20,0" fill="none" stroke="#fff" stroke-width="2" class="glow"/>`;

S.example=`${bg('#fff1c9')}${floor(184,'#ffe08a')}
 <rect x="20" y="20" width="160" height="40" rx="8" fill="#fff"/>${T(60,46,'fruit',16,INK)}${arrow(100,40,126,40,VIO,4)}
 <circle cx="154" cy="40" r="12" fill="${RED}"/><path d="M154,28 q3,-6 7,-6" stroke="#3aa568" stroke-width="2.500" fill="none"/>
 <g class="hop"><circle cx="140" cy="130" r="26" fill="${RED}"/><path d="M140,104 q4,-12 14,-12" stroke="#3aa568" stroke-width="4" fill="none"/><ellipse cx="130" cy="120" rx="5" ry="8" fill="#fff" opacity=".4"/></g>
 ${T(140,176,'e.g.',14,RED,'middle','beat')}
 ${sh(54,192,30)}${at(54,190,.86,cat({hat:glasses,eyes:'happy',mouth:'open',armR:-110,armsFront:true}))}`;

S.democratic=`${room('#e6f1ff','#cfe3f7')}
 <rect x="20" y="16" width="160" height="34" rx="8" fill="#fff"/>${fishAt(60,33,1.200,0)}${T(84,39,'3',14,RED,'middle','beat')}<g transform="translate(130,34) scale(.5)">${P.ball(RED)}</g>${T(152,39,'1',14,'#9aa8c0')}
 ${[['orange',30,1],['grey',74,1],[null,118,1],['cream',166,0]].map(([n,x,v],i)=>`${at(x,190,.5,n?K(n,{eyes:'happy',armR:-155,armsFront:true}):cat({eyes:'happy',armR:-155,armsFront:true}))}${v?`<g transform="translate(${x+18},112)">${fishAt(0,0,.9,0)}</g>`:`<g transform="translate(${x+18},112) scale(.4)">${P.ball(RED)}</g>`}`).join('')}
 <path d="M10,96 h180" stroke="${VIO}" stroke-width="2" stroke-dasharray="5 6"/>`;

S.check=`${room('#e6f1ff','#c98a4b',166)}<rect y="166" width="200" height="8" fill="#e0a868"/>
 <g transform="rotate(-4 130 90)"><rect x="92" y="20" width="84" height="130" rx="3" fill="#fff" stroke="#cbc2e6" stroke-width="2"/>
 ${[0,1,2,3].map(i=>`<rect x="100" y="${34+i*28}" width="14" height="14" rx="3" fill="none" stroke="${INK}" stroke-width="2"/><path d="M122,${41+i*28} h46" stroke="#cbc2e6" stroke-width="4" stroke-linecap="round"/>${i<3?`<g class="twinkle" style="animation-delay:${i*.3}s">${check(107,41+i*28,5,3)}</g>`:''}`).join('')}</g>
 ${at(46,198,.76,cat({hat:glasses,eyes:'wide',tail:false,armR:-100,armRcls:'bob',armsFront:true,prop:`<g transform="translate(6,10) rotate(-60) scale(.9)">${lupe}</g>`}))}`;

S.environment=`${bg('#cdeeff')}${sun(160,28,10)}${cloud(40,24,.7)}
 ${hills('#8fe0a8','#6fd08f',140)}<path d="M0,170 q50,-14 100,0 t100,0 v30 h-200 Z" fill="#5cc3ff"/>
 ${tree(40,150,1.200)}${tree(80,146,.8)}${kaktus(160,150,.7)}${bfly(120,90,ORA,0)}
 ${fishAt(60,186,1,0)}
 <circle cx="100" cy="104" r="92" fill="none" stroke="${MINT}" stroke-width="4" stroke-dasharray="10 9" class="glow"/>
 ${at(124,158,.44,cat({eyes:'closed',headCls:'tilt',armL:140,armR:-140,armsFront:true}))}`;

S.leg=`${bg('#ece6ff')}<circle cx="100" cy="100" r="80" fill="#f6f2ff"/>${floor(184,'#d6ccf5')}${sh(90,190,40)}
 ${at(90,188,1.06,cat({eyes:'happy',mouth:'open',feet:'walk',armL:60,armR:-60}))}
 ${ring(90,172,26,RED)}${arrow(170,130,128,162,RED,6,'float')}`;

S.various=`${bg('#fff1c9')}${floor(184,'#ffe08a')}
 ${[[30,60,'ball'],[80,50,'fish'],[130,60,'cup'],[170,50,'book'],[50,120,'gift'],[150,120,'star']].map(([x,y,t],i)=>`<g class="float" style="animation-delay:${i*.3}s"><g transform="translate(${x},${y})">${t=='ball'?P.ball(RED):t=='fish'?`<g transform="scale(1.600)">${P.fish}</g>`:t=='cup'?`<g transform="scale(.7)">${P.cup(SKY)}</g>`:t=='book'?`<g transform="scale(.8)">${P.book(MINT)}</g>`:t=='gift'?P.gift(VIO,SUN):star5(0,0,12,SUN)}</g></g>`).join('')}
 ${sh(100,192,30)}${at(100,190,.8,cat({eyes:'spark',mouth:'o',armL:140,armR:-140,armsFront:true}))}`;

S.rather=`${room('#ece6ff','#d6ccf5')}
 <g opacity=".45"><g transform="translate(40,60) scale(1.400)">${P.ball(RED)}</g></g>${cross(40,60,14,5)}
 ${arcArrow(70,60,120,90,-20,VIO,4,'6 7')}
 <ellipse cx="130" cy="176" rx="60" ry="14" fill="${VIO}"/><ellipse cx="130" cy="170" rx="52" ry="10" fill="#7b55d9"/>
 ${at(130,172,.8,cat({eyes:'closed',mouth:'w',armL:20,armR:-20}),'breathe')}
 ${T(176,100,'z z',16,VIO,'middle','zz')}<g class="beat">${check(176,50,8,5)}</g>`;

S.guess=`${bg('#fff1c9')}${floor(184,'#ffe08a')}
 <g class="wiggle" style="transform-origin:140px 160px">${at(140,184,1,P.boxClosed(70,60))}</g>${T(140,160,'?',30,'#fff','middle','beat')}
 ${think(60,44,40,30,`<g transform="translate(46,50) scale(.8)">${P.ball(RED)}</g>${T(62,56,'/',16,VIO)}${fishAt(78,50,1.100,0)}`,1)}
 ${sh(56,192,30)}${at(56,190,.86,cat({eyes:'open',headCls:'tilt',armR:-150,armsFront:true}))}`;

S.executive=`${room('#e6f1ff','#cfe3f7')}
 <rect x="100" y="14" width="90" height="70" rx="3" fill="#bfe9ff" stroke="#fff" stroke-width="4"/>${[0,1,2].map(i=>`<rect x="${110+i*26}" y="${40+i*8}" width="18" height="${44-i*8}" fill="#9aa8c0" opacity=".6"/>`).join('')}
 <rect x="60" y="130" width="130" height="50" rx="4" fill="#8a5a30"/><rect x="54" y="124" width="142" height="10" rx="3" fill="#b07a45"/>
 <path d="M104,124 l6,-14 h30 l6,14 Z" fill="${SUN}"/>${T(125,122,'BOSS',8,INK)}
 ${at(150,128,.6,cat({mid:tie,hat:glasses,tail:false,eyes:'happy',armL:150,armsFront:true}))}<rect x="60" y="128" width="130" height="6" fill="#b07a45"/>
 ${at(30,194,.44,K('orange',{mid:tie,eyes:'happy',armR:-96,armsFront:true,prop:`<rect x="-8" y="-18" width="16" height="20" fill="#fff"/>`}))}`;

S.prove=`${room('#ece6ff','#d6ccf5')}
 ${speech(140,36,70,34,T(140,48,'See? Proof!',11,RED),120,66)}
 <rect x="110" y="80" width="70" height="56" rx="4" fill="#fff" stroke="#b07a45" stroke-width="4"/><rect x="116" y="86" width="58" height="44" fill="#cdeeff"/>${at(145,130,.3,cat({tail:false,eyes:'happy',prop:fishAt(4,-6,1.200,0),armR:-90}))}
 <g class="beat">${check(184,84,7,5)}</g>
 ${sh(50,192,32)}${at(50,190,.9,cat({eyes:'happy',mouth:'open',armR:-110,armRcls:'bob',armsFront:true}))}
 ${at(170,198,.4,K('grey',{eyes:'wide',mouth:'o'}))}`;

S.hang=`${room('#fff1c9','#e4b77a')}
 <path d="M10,40 h180" stroke="${INK}" stroke-width="2"/>
 ${[[36,RED],[84,SKY],[132,SUN]].map(([x,c],i)=>`<g class="sway" style="transform-origin:${x}px 40px;animation-delay:${i*.3}s"><path d="M${x-14},44 h28 l6,10 -8,4 v26 h-24 v-26 l-8,-4 Z" fill="${c}"/><rect x="${x-3}" y="36" width="6" height="10" rx="2" fill="#b07a45"/></g>`).join('')}
 <g class="sway" style="transform-origin:172px 40px"><rect x="162" y="44" width="20" height="26" rx="6" fill="${VIO}"/><rect x="169" y="36" width="6" height="10" rx="2" fill="#b07a45"/></g>
 ${sh(100,192,30)}${at(100,190,.8,cat({eyes:'happy',armR:-160,armRcls:'bob',armsFront:true,armL:30,propL:`<g transform="translate(-2,8)"><path d="M-14,-4 h28 l-4,16 h-20 Z" fill="#c98a4b"/><path d="M-10,-6 q10,-8 20,0" fill="#fff"/></g>`}))}`;

S.entire=`${bg('#fff1c9')}<circle cx="100" cy="96" r="80" fill="#ffe7a3"/>
 <g class="pulse" style="transform-origin:100px 96px"><ellipse cx="100" cy="110" rx="60" ry="14" fill="#fff"/><path d="M50,110 v-40 a50,14 0 0 1 100,0 v40 a50,14 0 0 1 -100,0" fill="#ffd98a"/><ellipse cx="100" cy="70" rx="50" ry="14" fill="#fff8e6"/><path d="M50,90 a50,14 0 0 0 100,0" fill="none" stroke="${RED}" stroke-width="5"/>${[70,100,130].map(x=>`<circle cx="${x}" cy="${x==100?66:70}" r="6" fill="${RED}"/>`).join('')}</g>
 ${ring(100,90,72,RED)}${T(170,40,'100%',13,RED,'middle','beat')}
 ${floor(186,'#ffe08a')}${at(34,200,.56,cat({eyes:'spark',mouth:'tongue',armR:-140,armsFront:true}))}`;

S.rock=`${park(170)}${sun(160,28,10)}${cloud(40,24,.7)}
 <path d="M50,186 q-10,-60 40,-70 q50,-14 70,30 q14,26 0,40 Z" fill="#9aa8c0"/><path d="M80,130 q20,-8 34,6 M110,160 l20,-12 M70,160 q10,8 20,2" stroke="#7a8aa6" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M130,186 q0,-20 20,-20 q18,0 20,20 Z" fill="#b9c4d8"/>
 ${at(100,118,.5,cat({eyes:'happy',armL:20,armR:-20}))}
 ${kaktus(24,186,.7)}${arrow(30,90,56,130,RED,6,'float')}`;

S.forget=`${room('#e9efe0','#d7dfc8')}
 ${think(140,50,40,30,`<g opacity=".4">${keyP?`<g transform="translate(140,56)">${keyP}</g>`:''}</g>${T(140,66,'?',30,RED,'middle','beat')}`,-1)}
 <rect x="20" y="30" width="50" height="130" rx="4" fill="#b07a45"/><circle cx="62" cy="100" r="4" fill="${SUN}"/><rect x="34" y="84" width="14" height="18" rx="3" fill="${SUN}"/><path d="M37,84 v-5 a4,4 0 0 1 8,0 v5" fill="none" stroke="#e0a83a" stroke-width="2.500"/>
 ${sh(110,192,34)}${at(110,190,.94,cat({eyes:'wide',mouth:'wavy',armL:150,armR:-150,armsFront:true}))}
 <path class="sweat" d="${tear(150,110)}" fill="${SKY}"/>`;

S.claim=`${park()}${cloud(40,24,.7)}
 <g transform="translate(120,180) scale(1.6)"><g class="jump">${P.ball(RED)}</g></g>
 <path d="M150,186 v-70" stroke="#b07a45" stroke-width="3"/><path class="flower" d="M150,116 l26,8 -26,8 Z" fill="${SUN}"/>
 ${speech(60,40,56,34,T(60,52,'Mine!',15,RED),64,72)}
 ${sh(60,192,32)}${at(60,190,.9,cat({eyes:'happy',mouth:'big',armR:-100,armRcls:'bob',armsFront:true}))}
 ${at(180,196,.4,K('grey',{eyes:'wide',headCls:'tilt'}))}`;

S.remove=`${room('#fff1c9','#e4b77a')}
 ${rahmen(96,30,84,96,`<rect x="102" y="36" width="72" height="84" fill="#cdeeff"/><circle cx="150" cy="56" r="8" fill="${SUN}"/><path d="M102,104 q36,-16 72,0 v16 h-72 Z" fill="#8fe0a8"/>`)}
 <g class="glow"><circle cx="124" cy="80" r="12" fill="${VIO}" opacity=".5"/><path d="M116,74 q8,-8 16,0 M118,86 q6,6 12,0" stroke="#5a4a6c" stroke-width="2" fill="none"/></g>
 ${arcArrow(112,96,70,130,14,RED,4,'6 7')}
 ${sh(46,192,30)}${at(46,190,.86,cat({eyes:'happy',mouth:'tongue',armR:-120,armRcls:'bob',armsFront:true,prop:`<rect x="-10" y="-14" width="20" height="14" rx="3" fill="${SUN}"/><rect x="-10" y="-4" width="20" height="5" fill="#fff"/>`}))}
 ${spark(150,96,7,'#fff',0)}`;

S.manager=`${room('#e3fbf5','#bff0de')}
 <rect x="110" y="14" width="80" height="60" rx="4" fill="#fff" stroke="#cbc2e6" stroke-width="2"/>${[0,1,2].map(i=>`<circle cx="122" cy="${28+i*16}" r="4" fill="${[RED,SUN,MINT][i]}"/><path d="M132,${28+i*16} h48" stroke="#cbc2e6" stroke-width="3" stroke-linecap="round"/>`).join('')}
 ${at(120,192,.5,K('orange',{eyes:'happy',bow:false,hat:P.hatHard}))}${at(160,192,.5,K('grey',{eyes:'happy',hat:cap}))}
 ${sh(50,192,32)}${at(50,190,.9,cat({mid:tie+nameTag,eyes:'happy',mouth:'open',armR:-110,armRcls:'bob',armsFront:true,armL:30,propL:`<rect x="-10" y="-8" width="20" height="26" rx="2" fill="#c98a4b"/><rect x="-7" y="-4" width="14" height="18" fill="#fff"/>`}))}
 ${arrow(92,130,112,150,RED,4,'glow')}`;

S.enjoy=`${bg('#cdeeff')}${sun(160,30,12)}
 <path d="M0,150 q50,-10 100,0 t100,0 v50 h-200 Z" fill="#5cc3ff"/><path d="M0,170 h200 v30 h-200 Z" fill="#f3d9a4"/>
 <path d="M40,176 v-70" stroke="#b07a45" stroke-width="3"/><path d="M4,110 q36,-40 72,0 q-9,-6 -18,0 q-9,-6 -18,0 q-9,-6 -18,0 q-9,-6 -18,0 Z" fill="${RED}"/>
 <path d="M70,186 h70 l10,-20" fill="none" stroke="${SUN}" stroke-width="6" stroke-linecap="round"/>
 <g transform="translate(108,180) rotate(-70)"><g transform="scale(.6)">${cat({eyes:'closed',mouth:'w',tail:false,armL:140,armR:-60,armsFront:true,hat:glasses.replace(/#fff/g,INK),prop:`<g transform="translate(0,-6) scale(.5)">${P.cup(ORA)}</g>`})}</g></g>
 ${note(150,90,RED,0)}${heart(120,110,.8,RED,.5)}`;
