/* Tag 99–102: couple, site, project, hit, base · activity, court, produce, teach, oil · half, situation, easy, cost, industry · figure, street, image, itself, either */
S.couple=`${bg('#ffe9d6')}<circle cx="100" cy="100" r="82" fill="#ffdcc0"/>${floor(186,'#ffd9bd')}
 ${sh(72,192,30)}${at(72,190,.88,cat({eyes:'happy',armR:-70,headCls:'tilt'}))}
 ${sh(128,192,30)}${at(128,190,.88,K('orange',{eyes:'happy',armL:70}))}
 <path d="M30,150 q70,70 140,0 q10,-90 -70,-100 q-80,10 -70,100 Z" fill="none" stroke="${RED}" stroke-width="4" stroke-dasharray="9 9" class="glow"/>
 ${heartS(100,46,1.600,RED,'beat')}${T(170,60,'2',26,RED,'middle','beat')}`;

S.site=`${park(170)}${cloud(40,24,.7)}
 <path d="M30,170 h140 l10,20 h-160 Z" fill="#e4b77a"/><path d="M40,170 v-40 h40 v40 M80,150 h50 v20" fill="none" stroke="#b07a45" stroke-width="4"/>
 <path d="M150,170 V40 h-70 v14" fill="none" stroke="${SUN}" stroke-width="6" stroke-linejoin="round"/><path d="M80,54 v30" stroke="${INK}" stroke-width="2"/><rect class="hop" x="68" y="84" width="24" height="14" rx="2" fill="${ORA}"/>
 <path d="M10,186 l14,-30 14,30 Z" fill="${ORA}"/><path d="M17,172 h14" stroke="#fff" stroke-width="4"/>
 ${pin(176,60)}
 ${at(176,198,.5,cat({bow:false,hat:P.hatHard,eyes:'happy',armL:140,armsFront:true}))}`;

S.project=`${room('#e6f1ff','#cfe3f7')}
 <rect x="70" y="20" width="120" height="100" rx="6" fill="#fff" stroke="#cbc2e6" stroke-width="3"/>
 ${[[80,36,40,RED],[100,56,50,SUN],[130,76,44,MINT],[150,96,30,SKY]].map(([x,y,w,c],i)=>`<rect class="grow" style="transform-origin:${x}px ${y}px;transform-box:view-box;animation-delay:${i*.3}s" x="${x}" y="${y}" width="${w}" height="12" rx="6" fill="${c}"/>`).join('')}
 <path d="M70,130 h120" stroke="#cbc2e6" stroke-width="3"/><g class="beat">${star5(180,112,8,SUN)}</g>
 ${at(110,190,.5,K('orange',{eyes:'happy',armL:150,armsFront:true}))}${at(160,190,.5,K('grey',{eyes:'happy',bow:false,hat:P.hatHard}))}
 ${sh(40,192,28)}${at(40,190,.8,cat({hat:glasses,mouth:'open',armR:-128,armsFront:true,prop:`<path d="M0,2 l10,-26" stroke="#b07a45" stroke-width="3" stroke-linecap="round"/>`}))}`;

S.hit=`${park()}${sun(30,24,9)}
 <path d="M150,0 v40" stroke="${INK}" stroke-width="2"/>
 <g class="sway" style="transform-origin:150px 0px"><g transform="translate(150,70)">${[0,60,120,180,240,300].map((a,i)=>`<path transform="rotate(${a})" d="M-8,-18 L0,-44 L8,-18 Z" fill="${[RED,SUN,MINT,SKY,VIO,ORA][i]}"/>`).join('')}<circle r="22" fill="${VIO}"/><path d="M-22,0 h44 M-18,-10 h36 M-18,10 h36" stroke="${SUN}" stroke-width="3"/></g></g>
 ${burst(118,84,ORA,0)}
 <rect class="snow" x="130" y="100" width="6" height="6" fill="${RED}"/><rect class="snow" style="animation-delay:-1s" x="160" y="100" width="6" height="6" fill="${SUN}"/><circle class="snow" style="animation-delay:-2s" cx="146" cy="100" r="3.500" fill="${MINT}"/>
 ${sh(70,192,32)}${at(70,190,.92,cat({eyes:'closed',mouth:'big',armR:-130,armRcls:'throwarm',armsFront:true,prop:`<path d="M0,4 l4,-44" stroke="#b07a45" stroke-width="6" stroke-linecap="round"/>`,hat:`<rect x="-30" y="-84" width="60" height="12" rx="3" fill="${RED}"/>`}))}`;

S.base=`${bg('#cdeeff')}${cloud(40,24,.7)}${floor(184,'#8fe0a8')}
 <rect x="40" y="152" width="120" height="32" rx="4" fill="${RED}"/>${ring(100,168,70,SUN)}
 <rect x="56" y="124" width="88" height="28" rx="4" fill="#9aa8c0" opacity=".7"/><rect x="72" y="98" width="56" height="26" rx="4" fill="#9aa8c0" opacity=".55"/>
 ${at(100,100,.44,cat({eyes:'happy',armL:130,armR:-130,armsFront:true}))}
 ${arrow(20,130,36,160,RED,6,'float')}${T(100,176,'base',14,'#fff')}`;

S.activity=`${bg('#fff1c9')}
 ${panel(8,10,90,86)}${panel(102,10,90,86)}${panel(8,104,90,86)}${panel(102,104,90,86)}
 ${at(52,90,.4,cat({eyes:'happy',mid:trikot(RED),feet:'run',armL:120,armR:-120,armsFront:true}),'hop')}
 ${at(146,90,.4,cat({eyes:'closed',mouth:'big',mouthCls:'chew',armR:-60}))}${note(170,40,RED,0)}
 ${at(52,184,.4,cat({mouth:'tongue',armR:-90,prop:`<path d="M0,2 l10,-24" stroke="${SKY}" stroke-width="4" stroke-linecap="round"/>`}))}<rect x="64" y="130" width="24" height="30" fill="#fff" stroke="#cbc2e6" stroke-width="1.500"/><path d="M68,152 q6,-14 16,-4" fill="none" stroke="${SKY}" stroke-width="2.500"/>
 ${at(146,184,.4,cat({eyes:'happy',armL:8,armR:-8,mid:openBook}))}`;

S.court=`${bg('#e0875a')}<rect width="200" height="56" fill="#cdeeff"/><path d="M0,56 h200 M100,56 v144" stroke="#fff" stroke-width="3"/><circle cx="100" cy="130" r="26" fill="none" stroke="#fff" stroke-width="3"/>
 <path d="M170,56 V14" stroke="#9aa8c0" stroke-width="5"/><rect x="150" y="8" width="40" height="28" rx="3" fill="#fff" stroke="${RED}" stroke-width="3"/><ellipse cx="170" cy="40" rx="12" ry="4" fill="none" stroke="${RED}" stroke-width="3"/><path d="M160,42 l4,14 M170,44 v12 M180,42 l-4,14" stroke="#fff" stroke-width="1.500"/>
 <g class="hop"><g transform="translate(120,70)">${bball}</g></g>
 ${arcArrow(96,110,166,36,30,'#fff',3,'5 7')}
 ${at(60,190,.8,cat({eyes:'happy',mouth:'open',armR:-150,armsFront:true,mid:trikot(SKY)}))}${flipAt(160,188,.5,K('orange',{mid:trikot(SUN),armR:-150,armsFront:true}))}`;

S.produce=`${room('#e3fbf5','#bff0de',170)}
 <rect x="0" y="150" width="200" height="14" rx="4" fill="#5a4a6c"/><g class="road" style="animation-duration:1.200s"><path d="M-40,157 h320" stroke="#9aa8c0" stroke-width="4" stroke-dasharray="6 14"/></g>
 <rect x="10" y="60" width="50" height="90" rx="6" fill="#9aa8c0"/><rect x="20" y="70" width="30" height="20" rx="3" fill="#bfe9ff"/>${gear(35,120,12,SUN,4)}<rect x="24" y="40" width="10" height="20" fill="#7a8aa6"/><circle class="smoke" cx="29" cy="34" r="5" fill="#fff"/>
 <g class="road" style="animation-duration:3s;animation-direction:reverse">${[0,50,100].map(d=>`<g transform="translate(${-30+d},150) scale(.5)">${P.ball(RED)}</g>`).join('')}</g>
 ${arrow(70,110,110,110,RED,6,'glow')}
 ${at(160,150,.5,cat({bow:false,hat:P.hatHard,eyes:'happy',armL:120,armsFront:true,tail:false}))}`;

S.teach=`${bg('#fff1c9')}
 <rect x="70" y="14" width="120" height="76" rx="6" fill="#3aa568" stroke="#b07a45" stroke-width="5"/>${T(130,52,'A B C',24,'#fff')}<path d="M90,70 h80" stroke="#fff" stroke-width="2" stroke-dasharray="6 6"/>
 ${floor(184,'#ffe08a')}
 ${sh(46,192,30)}${at(46,190,.88,cat({hat:glasses,mouth:'open',armR:-128,armRcls:'bob',armsFront:true,prop:`<path d="M0,4 l12,-30" stroke="#b07a45" stroke-width="3" stroke-linecap="round"/>`}))}
 ${at(118,194,.44,K('orange',{eyes:'wide',tail:false}))}${at(152,194,.44,K('grey',{eyes:'happy',tail:false,armR:-155,armsFront:true}))}${at(184,194,.4,K('cream',{eyes:'wide',tail:false}))}`;

S.oil=`${room('#fff1c9','#e4b77a',166)}<rect y="166" width="200" height="8" fill="#e0a868"/>
 <ellipse cx="140" cy="160" rx="42" ry="9" fill="#5a4a6c"/><rect x="98" y="150" width="84" height="10" fill="#5a4a6c"/><rect x="180" y="152" width="20" height="5" rx="2" fill="#3a3148"/><ellipse cx="140" cy="150" rx="42" ry="8" fill="#3a3148"/><ellipse cx="140" cy="150" rx="30" ry="5" fill="${SUN}" class="glow"/>
 <g transform="translate(86,104) rotate(52)"><rect x="-12" y="-30" width="24" height="46" rx="6" fill="${SUN}" stroke="#e0a83a" stroke-width="2"/><rect x="-6" y="-42" width="12" height="12" fill="#3aa568"/><rect x="-8" y="-12" width="16" height="16" rx="2" fill="#fff"/><path d="M0,-8 q-4,6 0,8 q4,-2 0,-8 Z" fill="#3aa568"/></g>
 <path class="drip" d="${tear(122,112)}" fill="${SUN}"/><path class="drip" style="animation-delay:.5s" d="${tear(122,112)}" fill="${SUN}"/>
 ${at(46,192,.84,cat({bow:false,hat:P.hatChef,eyes:'happy',mouth:'tongue',armR:-70,armsFront:true}))}`;

S.half=`${bg('#fff1c9')}<circle cx="100" cy="92" r="80" fill="#ffe7a3"/>
 <path d="M96,30 a60,60 0 0 0 0,120 Z" fill="${SUN}" stroke="#f6c27a" stroke-width="8"/><circle cx="70" cy="70" r="7" fill="${RED}"/><circle cx="76" cy="112" r="7" fill="${RED}"/><circle cx="56" cy="94" r="6" fill="${RED}"/>
 <g opacity=".3"><path d="M104,30 a60,60 0 0 1 0,120 Z" fill="none" stroke="#b07a45" stroke-width="3" stroke-dasharray="7 7"/></g>
 <path d="M100,20 v140" stroke="${RED}" stroke-width="3" stroke-dasharray="6 6"/>
 <g class="beat"><circle cx="150" cy="60" r="22" fill="#fff"/>${T(150,56,'1',16,RED)}<path d="M140,62 h20" stroke="${RED}" stroke-width="3"/>${T(150,78,'2',16,RED)}</g>
 ${floor(186,'#ffe08a')}${at(150,200,.5,cat({eyes:'happy',mouth:'tongue',armL:150,armsFront:true}))}`;

S.situation=`${bg('#cdeeff')}
 <g class="cloud"><ellipse cx="100" cy="30" rx="60" ry="18" fill="#9aa8c0"/><ellipse cx="70" cy="24" rx="30" ry="16" fill="#b9c4d8"/></g>
 ${[30,60,90,120,150,180].map((x,i)=>`<path class="drop" style="animation-delay:${i*.2}s" d="M${x},50 l-6,14" stroke="${SKY}" stroke-width="3" stroke-linecap="round"/>`).join('')}
 ${hills('#8fe0a8','#6fd08f',170)}<ellipse cx="60" cy="186" rx="34" ry="6" fill="#5cc3ff" opacity=".7"/>
 ${at(110,188,.86,cat({mouth:'wavy',eyes:'open',armR:-60,headCls:'tilt',prop:`<g transform="translate(0,-4)"><path d="M0,6 v-40" stroke="${INK}" stroke-width="3"/><path d="M-22,-34 l44,0 -8,-16 Z" fill="${RED}" transform="rotate(150 0 -34)"/></g>`}))}
 <g class="beat"><circle cx="170" cy="100" r="16" fill="#fff"/>${T(170,108,'?!',16,RED)}</g>`;

S.easy=`${bg('#e3fbf5')}${floor(184,'#bff0de')}
 ${panel(90,30,100,90)}${puzzle(100,56,SKY,'')}${puzzle(138,56,SUN,'hop')}
 <g class="beat">${check(170,46,8,5)}</g>
 ${sh(50,192,32)}${at(50,190,.92,cat({eyes:'closed',mouth:'w',armL:-150,armR:150,armsFront:true,headCls:'tilt'}))}
 ${T(146,150,'1 · 2 · 3',18,'#1f9c83','middle','glow')}${note(24,70,VIO,0)}`;

S.cost=`${bg('#fff1c9')}${floor(170,'#c98a4b')}<rect y="170" width="200" height="8" fill="#e0a868"/>
 <g transform="translate(60,168) scale(1.6)">${P.ball(RED)}</g>
 <path d="M84,130 h30" stroke="${INK}" stroke-width="2"/><g transform="translate(140,128) rotate(-6)"><path d="M-30,-18 h46 l16,18 -16,18 h-46 Z" fill="#fff" stroke="${RED}" stroke-width="3"/>${coin(-16,0,8)}${coin(2,0,8)}${coin(-7,-6,8)}</g>
 ${T(140,90,'=',26,VIO,'middle','beat')}
 ${at(160,198,.5,cat({eyes:'wide',mouth:'o',tail:false,armL:150,armsFront:true}))}`;

S.industry=`${bg('#cdeeff')}${cloud(30,24,.6)}${floor(176,'#9aa8c0')}
 <rect x="20" y="110" width="120" height="66" fill="#b9c4d8"/><path d="M20,110 l30,-22 v22 l30,-22 v22 l30,-22 v22 l30,-22 v22 Z" fill="#7a8aa6"/>
 <rect x="150" y="50" width="16" height="126" fill="#7a8aa6"/><rect x="172" y="76" width="14" height="100" fill="#9aa8c0"/>
 <circle class="smoke" cx="158" cy="40" r="8" fill="#fff"/><circle class="smoke" style="animation-delay:.8s" cx="179" cy="66" r="6" fill="#fff"/>
 ${[34,64,94].map(x=>win(x,126).replace('#bfe9ff',SUN)).join('')}
 ${gear(40,60,14,SUN,5)}${gear(64,70,10,RED,3.500,true)}
 ${at(110,198,.44,cat({bow:false,hat:P.hatHard,eyes:'happy',armR:-110,armsFront:true}))}`;

S.figure=`${room('#ece6ff','#d6ccf5')}
 <rect x="110" y="140" width="60" height="38" rx="4" fill="#dfe6f2"/><rect x="104" y="134" width="72" height="10" rx="3" fill="#cfd8e6"/>
 <g>${at(140,136,.6,K('white',{eyes:'closed',tail:true,fur:'#f4f7fb',out:'#b9c4d8',belly:'#fff',armR:-150,armsFront:true}))}</g>
 ${ring(140,96,46,RED)}
 ${at(50,192,.84,cat({bow:false,hat:barett,mouth:'tongue',armR:-90,armRcls:'bob',prop:hammer}))}`;

S.street=`${bg('#cdeeff')}${cloud(100,20,.6)}
 <rect x="0" y="60" width="50" height="140" fill="${ORA}"/><rect x="150" y="50" width="50" height="150" fill="${SKY}"/>${win(10,80)}${win(10,120)}${win(162,70)}${win(162,110)}
 <path d="M50,200 L86,90 h28 L150,200 Z" fill="#6b7a99"/><path d="M100,96 V200" stroke="#fff" stroke-width="3" stroke-dasharray="10 10"/>
 <path d="M56,150 v-50" stroke="${INK}" stroke-width="3"/><circle class="glow" cx="56" cy="96" r="6" fill="${SUN}"/>
 <rect x="120" y="64" width="50" height="16" rx="3" fill="#3aa568"/>${T(145,76,'Main St',9,'#fff')}<path d="M144,80 v40" stroke="#b07a45" stroke-width="3"/>
 <g class="road" style="animation-duration:4s"><g transform="translate(130,170) scale(.3)">${P.car(RED)}</g></g>
 ${at(70,198,.44,cat({eyes:'happy',feet:'walk'}))}`;

S.image=`${room('#fff1c9','#e4b77a')}
 ${rahmen(90,30,90,100,`<rect x="96" y="36" width="78" height="88" fill="#cdeeff"/><path d="M96,110 q40,-16 78,0 v14 h-78 Z" fill="#8fe0a8"/>`)}<clipPath id="imgc"><rect x="96" y="36" width="78" height="88"/></clipPath><g clip-path="url(#imgc)">${at(135,124,.5,cat({tail:false,eyes:'happy'}))}</g>
 <g class="twinkle">${spark(176,34,8,SUN,0)}</g>
 ${sh(46,192,30)}${at(46,190,.86,cat({eyes:'spark',mouth:'o',armR:-110,armsFront:true}))}
 <path d="M70,120 h16" stroke="${RED}" stroke-width="3" stroke-dasharray="4 4"/>`;

S.itself=`${room('#e3fbf5','#bff0de')}
 ${sh(90,192,38)}${at(90,190,1,cat({eyes:'closed',mouth:'tongue',armR:-150,armRcls:'bob',armsFront:true,headCls:'tilt'}))}
 <g class="glow"><path d="M150,120 q30,-40 -6,-70 q-20,-12 -34,0" fill="none" stroke="${RED}" stroke-width="5" stroke-linecap="round" stroke-dasharray="8 8"/><path d="M110,50 l12,-8 M110,50 l10,10" stroke="${RED}" stroke-width="5" stroke-linecap="round"/></g>
 <circle class="bubble" cx="40" cy="120" r="7" fill="#fff" opacity=".8"/><circle class="bubble" style="animation-delay:1s" cx="160" cy="150" r="5" fill="#fff" opacity=".8"/>${spark(40,60,7,SKY,0)}`;

S.either=`${bg('#ece6ff')}${floor(184,'#d6ccf5')}
 <g class="hop"><g transform="translate(40,90) scale(1.5)">${P.ball(RED)}</g></g><g class="hop" style="animation-delay:.5s"><g transform="translate(160,90) scale(1.5)">${P.ball(SKY)}</g></g>
 ${check(40,40,8,5)}${check(160,40,8,5)}
 ${arrow(84,130,56,104,VIO,5,'glow')}${arrow(116,130,144,104,VIO,5,'glow')}
 ${sh(100,192,32)}${at(100,190,.84,cat({eyes:'happy',mouth:'open',armL:120,armR:-120,armsFront:true}))}`;
