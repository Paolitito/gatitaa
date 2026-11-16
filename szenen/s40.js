/* Tag 147–150: avoid, imagine, tonight, huge, finish · yourself, theory, impact, respond, statement · maintain, charge, popular, traditional, onto · reveal, direction, weapon, employee, cultural */
S.avoid=`${park()}${cloud(150,24,.7)}
 <ellipse cx="110" cy="186" rx="34" ry="8" fill="#5cc3ff"/><ellipse class="ripple" cx="110" cy="186" rx="18" ry="4" fill="none" stroke="#fff" stroke-width="2"/>
 ${arcArrow(40,150,180,150,60,RED,5,'9 9')}
 <g transform="translate(150,170)"><g class="jump" style="animation-duration:.8s"><g transform="scale(-.7,.7)">${cat({eyes:'wide',mouth:'o',armL:120,armR:-120,armsFront:true,feet:'run'})}</g></g></g>
 <path d="M96,130 l28,28 M124,130 l-28,28" stroke="${RED}" stroke-width="5" stroke-linecap="round" opacity=".6"/>`;

S.imagine=`${room('#ece6ff','#d6ccf5')}
 ${think(120,56,68,46,`<path d="M70,90 q50,-10 100,0 v8 h-100 Z" fill="#8fe0a8"/><g class="float"><g transform="translate(120,74) scale(.4)">${cat({tail:false,eyes:'happy',armL:150,armR:-150,armsFront:true,mid:`<path d="M-20,-52 q-30,10 -50,-6 q20,26 50,22 Z" fill="${RED}"/>`})}</g></g>${star5(86,36,6,SUN)}${star5(158,40,5,SUN)}<circle cx="150" cy="30" r="7" fill="#fff6c8"/>`,-1)}
 ${sh(50,192,32)}${at(50,190,.9,cat({eyes:'closed',mouth:'w',headCls:'tilt',armL:-40,armR:40,armsFront:true}))}`;

S.tonight=`${bg('#2d2a6e')}${spark(30,30,5,'#fff',0)}${spark(90,20,4,'#fff',.5)}${spark(180,80,4,'#fff',1)}${papel(40,6,194)}
 <circle cx="160" cy="36" r="18" fill="#fff6c8"/><circle cx="168" cy="30" r="15" fill="#2d2a6e"/>
 ${floor(184,'#1f1b4d')}
 <rect x="14" y="90" width="50" height="40" rx="6" fill="#fff"/><rect x="14" y="90" width="50" height="12" rx="6" fill="${RED}"/>${T(39,124,'today',10,INK)}${ring(39,112,30,SUN)}
 <g class="dance">${at(104,190,.8,cat(Object.assign({eyes:'happy',mouth:'big',armL:140,armR:-140,armsFront:true},NL)))}</g>
 <g class="dance" style="animation-delay:.2s">${at(160,190,.6,K('orange',{eyes:'happy',mouth:'open',armL:140,armR:-140,armsFront:true,line:'#cbc2e6'}))}</g>${note(130,110,SUN,0)}`;

S.huge=`${bg('#fff1c9')}${floor(184,'#ffe08a')}
 <g class="pulse" style="transform-origin:110px 184px"><g transform="translate(118,150) scale(7)">${P.fish}</g></g>
 <path d="M190,60 v120" stroke="${RED}" stroke-width="3"/><path d="M184,60 h12 M184,180 h12" stroke="${RED}" stroke-width="3"/>
 ${at(24,196,.36,cat({eyes:'wide',mouth:'o',armL:150,armR:-150,armsFront:true}))}${T(40,60,'WOW',18,RED,'middle','beat')}`;

S.finish=`${room('#fff1c9','#e4b77a')}
 ${rahmen(96,26,90,104,`<rect x="102" y="32" width="78" height="92" fill="#cdeeff"/><circle cx="160" cy="52" r="9" fill="${SUN}"/><path d="M102,104 q38,-18 78,0 v20 h-78 Z" fill="#8fe0a8"/><path d="M120,104 l12,-26 12,26 Z" fill="${RED}"/>`)}
 <g class="beat"><circle cx="180" cy="30" r="14" fill="${MINT}"/>${check(180,30,6,4).replace(new RegExp(MINT,'g'),'#fff')}</g>
 ${T(140,160,'Done!',16,RED,'middle','beat')}
 ${sh(46,192,30)}${at(46,190,.86,cat({bow:false,hat:barett,eyes:'closed',mouth:'big',armL:150,armR:-150,armsFront:true}))}${spark(90,60,8,SUN,0)}`;

S.yourself=`${room('#e3fbf5','#bff0de')}
 <rect x="110" y="24" width="70" height="150" rx="30" fill="#bfe9ff" stroke="#b07a45" stroke-width="5"/>
 <g opacity=".55">${flipAt(145,166,.6,cat({tail:false,eyes:'happy',armR:-125,armsFront:true}))}</g>
 ${sh(56,192,32)}${at(56,190,.9,cat({eyes:'happy',mouth:'open',armR:-125,armRcls:'wave',armsFront:true}))}
 ${arcArrow(90,80,120,80,-16,RED,4,'5 6')}${T(60,50,'you',16,RED,'middle','beat')}`;

S.theory=`${bg('#fff1c9')}
 <rect x="60" y="14" width="130" height="90" rx="6" fill="#3aa568" stroke="#b07a45" stroke-width="5"/>
 <circle cx="90" cy="50" r="12" fill="none" stroke="#fff" stroke-width="2.500"/>${arrow(106,50,124,50,'#fff',3)}<path d="M134,40 h20 v20 h-20 Z" fill="none" stroke="#fff" stroke-width="2.500"/>${T(170,58,'?',22,SUN,'middle','beat')}<path d="M76,82 h90" stroke="#fff" stroke-width="2" stroke-dasharray="6 6"/>
 ${floor(184,'#ffe08a')}
 ${sh(50,192,32)}${at(50,190,.9,cat({hat:glasses,eyes:'open',mouth:'w',headCls:'tilt',armR:-128,armsFront:true}))}
 <g class="beat"><g transform="translate(150,150) scale(.8)">${P.bulb}</g></g>`;

S.impact=`${bg('#ffe9d6')}${floor(176,'#ffd9bd')}
 <g class="hop" style="animation-duration:.8s"><g transform="translate(110,150) scale(1.5)">${P.ball(RED)}</g></g>
 ${burst(110,170,ORA,0)}<path d="M70,176 l-16,-10 M150,176 l16,-10 M80,186 h-24 M140,186 h24" stroke="${ORA}" stroke-width="4" stroke-linecap="round" class="glow"/>
 <ellipse class="ripple" cx="110" cy="182" rx="40" ry="8" fill="none" stroke="${VIO}" stroke-width="3"/>
 ${T(110,60,'BOOM',22,RED,'middle','beat')}
 ${at(30,196,.5,cat({eyes:'wide',mouth:'o',armL:150,armR:-150,armsFront:true}))}`;

S.respond=`${park()}${cloud(100,18,.6)}
 ${speech(50,44,60,34,T(50,56,'Hello?',13,INK),56,76)}
 <g class="beat">${speech(150,60,60,34,T(150,72,'Hi!',16,RED),144,92)}</g>
 ${arcArrow(84,40,120,50,-10,VIO,3,'4 5')}
 ${sh(56,192,30)}${at(56,190,.84,K('orange',{eyes:'happy',armR:-80}))}
 ${sh(144,192,30)}${at(144,190,.84,cat({eyes:'happy',mouth:'open',mouthCls:'chew',armL:125,armLcls:'wave',armsFront:true}))}`;

S.statement=`${room('#e6f1ff','#cfe3f7')}
 ${pult(100,RED)}
 ${at(100,150,.7,cat({mid:tie,tail:false,eyes:'open',mouth:'open',mouthCls:'chew',armR:-140,armsFront:true}))}${pult(100,RED)}
 ${speech(160,40,60,40,`<path d="M140,34 h40 M140,44 h40 M140,54 h26" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>`,140,70)}
 ${at(24,198,.36,K('orange',{prop:`<rect x="-3" y="-16" width="6" height="18" rx="2" fill="#9aa8c0"/>`,armR:-100,armsFront:true}))}${at(176,198,.36,K('grey',{armL:100,armsFront:true}))}`;

S.maintain=`${park(170)}${sun(30,24,9)}
 <g transform="translate(120,172) scale(.9)">${P.car(RED)}</g>
 ${gear(176,60,12,SUN,6)}
 ${sh(46,192,28)}${at(46,190,.8,cat({bow:false,hat:cap,eyes:'happy',mouth:'tongue',armR:-84,armRcls:'bob',armsFront:true,prop:`<path d="M0,4 v-24" stroke="#9aa8c0" stroke-width="5" stroke-linecap="round"/><circle cx="0" cy="-24" r="7" fill="none" stroke="#9aa8c0" stroke-width="4"/>`}))}
 <path d="M120,100 q10,-10 0,-20 q-10,-10 0,-20" fill="none" stroke="${MINT}" stroke-width="3" class="glow"/><g class="beat">${check(150,90,8,5)}</g>`;

S.charge=`${room('#e3fbf5','#bff0de')}
 <rect x="110" y="40" width="60" height="110" rx="10" fill="${INK}"/><rect x="116" y="50" width="48" height="90" rx="4" fill="#fff"/>
 <rect x="124" y="60" width="32" height="70" rx="4" fill="none" stroke="#9aa8c0" stroke-width="3"/><rect x="134" y="54" width="12" height="6" fill="#9aa8c0"/>
 <rect x="127" y="63" width="26" height="64" rx="2" fill="${MINT}" style="transform-origin:140px 127px;transform-box:view-box;animation:ladung 3s ease-in-out infinite alternate"/><style>@keyframes ladung{from{transform:scaleY(.15)}to{transform:scaleY(1)}}</style>
 <g class="beat">${blitz(140,96,1.200,SUN)}</g>
 <path d="M140,150 q0,30 -40,30 h-30" fill="none" stroke="${INK}" stroke-width="3"/><rect x="60" y="174" width="12" height="12" rx="2" fill="#fff" stroke="#cbc2e6" stroke-width="2"/>
 ${at(34,194,.6,cat({eyes:'happy',armR:-100,armsFront:true}))}`;

S.popular=`${bg('#fff3cf')}<circle cx="100" cy="110" r="80" fill="#ffe7a3"/>${floor(186,'#ffe08a')}
 ${at(26,186,.4,K('orange',{eyes:'spark',armR:-140,armsFront:true}))}${at(60,190,.4,K('grey',{eyes:'spark'}))}${at(140,190,.4,K('cream',{eyes:'spark'}))}${at(174,186,.4,K('white',{eyes:'spark',armL:140,armsFront:true}))}
 ${at(100,180,.76,cat({eyes:'happy',mouth:'big',armL:130,armR:-130,armsFront:true,hat:glasses.replace(/#fff/g,INK)}),'hop')}
 ${heart(40,100,.9,RED,0)}${heart(160,100,.9,RED,.4)}${heart(100,60,1.1,RED,.8)}${heart(70,70,.7,RED,1.2)}${heart(134,74,.7,RED,1.6)}
 ${star5(100,24,12,SUN)}`;

S.traditional=`${bg('#fff8e6')}${papel(10,6,194)}${floor(184,'#e4b77a')}
 ${kaktus(170,184,.9)}
 <g transform="translate(34,150)"><path d="M-14,34 q-8,-30 0,-50 h28 q8,20 0,50 Z" fill="${ORA}"/><path d="M-14,-4 h28 M-16,14 h32" stroke="${SKY}" stroke-width="4"/><path d="M-12,4 l4,6 4,-6 4,6 4,-6 4,6 4,-6" fill="none" stroke="#fff" stroke-width="2"/><ellipse cx="0" cy="-16" rx="14" ry="4" fill="#b5571a"/></g>
 ${sh(104,192,36)}${at(104,190,.96,cat({eyes:'happy',mouth:'open',bow:false,hat:sombrero,armL:40,armR:-50,armRcls:'bob',armsFront:true,mid:`<path d="M-26,-50 q26,14 52,0 l4,40 q-30,12 -60,0 Z" fill="${RED}"/><path d="M-24,-30 l8,8 8,-8 8,8 8,-8 8,8 8,-8" fill="none" stroke="${SUN}" stroke-width="3"/><path d="M-26,-16 h52" stroke="${MINT}" stroke-width="3"/>`+guitar}))}
 ${note(150,90,RED,0)}${note(60,100,MINT,.7)}`;

S.onto=`${room('#fff1c9','#e4b77a')}
 ${at(130,186,1.2,P.table(110))}<path d="M66,124 h130 v12 h-130 Z" fill="#c98a4b"/>
 ${arcArrow(30,150,120,104,50,RED,5,'8 8')}
 <g opacity=".3">${at(30,190,.6,cat({tail:false}))}</g>
 <g transform="translate(130,122)"><g class="jump" style="animation-duration:.9s"><g transform="scale(.66)">${cat({eyes:'happy',mouth:'open',armL:120,armR:-120,armsFront:true})}</g></g></g>`;

S.reveal=`${bg('#3b2a4a')}<path d="M100,-10 L30,186 h140 Z" fill="#fff6c8" opacity=".22"/>${floor(176,'#8a5a30')}
 <g transform="translate(110,170) scale(2)">${P.gift(SUN,RED)}</g>${spark(110,110,10,SUN,0)}${spark(150,130,8,'#fff',.5)}${spark(76,140,7,'#fff',1)}
 <g style="animation:tuch 3s ease-in-out infinite alternate"><path d="M70,110 q40,-30 80,0 v66 q-40,10 -80,0 Z" fill="${VIO}"/><path d="M70,110 q40,-30 80,0" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="6 6"/></g><style>@keyframes tuch{0%,20%{transform:translate(0,0)}80%,100%{transform:translate(70px,-60px) rotate(20deg)}}</style>
 ${at(36,190,.66,cat(Object.assign({eyes:'happy',mouth:'big',armR:-120,armsFront:true},NL)))}${T(110,50,'Ta-da!',16,SUN,'middle','beat')}`;

S.direction=`${park(170)}${cloud(40,24,.7)}
 <path d="M100,186 V50" stroke="#b07a45" stroke-width="5"/>
 <path d="M100,56 h50 l12,11 -12,11 h-50 Z" fill="${RED}"/><path d="M100,86 h-50 l-12,11 12,11 h50 Z" fill="${SKY}"/><path d="M100,116 h44 l12,11 -12,11 h-44 Z" fill="${SUN}"/>
 <g class="spin" style="animation-duration:6s;transform-origin:100px 30px"><path d="M100,14 l6,16 -6,16 -6,-16 Z" fill="${INK}"/></g>
 ${sh(40,192,26)}${at(40,190,.74,cat({eyes:'open',headCls:'tilt',armR:-150,armsFront:true,armL:30,propL:`<g transform="translate(0,6)"><path d="M-14,-8 l9,3 10,-3 9,3 v16 l-9,-3 -10,3 -9,-3 Z" fill="#fff" stroke="#cbc2e6" stroke-width="1.500"/></g>`}))}`;

S.weapon=`${room('#ffe9d6','#ffd9bd')}
 <g class="beat"><g transform="translate(150,90) rotate(20)"><rect x="-5" y="-60" width="10" height="70" rx="5" fill="${SKY}"/><rect x="-14" y="8" width="28" height="7" rx="3" fill="${SUN}"/><rect x="-4" y="15" width="8" height="16" rx="3" fill="#b07a45"/></g></g>${T(150,150,'toy',13,SKY)}
 ${sh(60,192,32)}${at(60,190,.9,cat({eyes:'happy',mouth:'big',hat:`<path d="M-30,-106 q0,-28 30,-28 q30,0 30,28 Z" fill="#9aa8c0"/><rect x="-4" y="-142" width="8" height="10" fill="${RED}"/>`,bow:false,armR:-130,armRcls:'bob',armsFront:true,armL:40,prop:`<rect x="-4" y="-44" width="8" height="48" rx="4" fill="#bfe9ff" stroke="#9aa8c0" stroke-width="1.500"/><rect x="-10" y="-2" width="20" height="5" rx="2" fill="${SUN}"/>`,propL:`<path d="M-14,-14 h28 v14 q0,14 -14,18 q-14,-4 -14,-18 Z" fill="${SUN}" stroke="#e0a83a" stroke-width="2"/>${star5(0,-2,6,RED)}`}))}
 ${T(120,40,'en garde!',12,VIO,'middle','glow')}`;

S.employee=`${room('#e3fbf5','#bff0de')}
 <rect x="110" y="16" width="76" height="50" rx="4" fill="#fff" stroke="#cbc2e6" stroke-width="2"/><g class="ring">${at(130,42,.3,P.clock(28,270))}</g>${T(162,46,'9–5',12,INK)}
 <rect x="100" y="120" width="90" height="60" rx="4" fill="#c98a4b"/><rect x="94" y="114" width="102" height="10" rx="3" fill="#b07a45"/><rect x="130" y="92" width="36" height="24" rx="3" fill="${INK}"/><rect x="133" y="95" width="30" height="18" fill="${SKY}"/>
 ${sh(50,192,32)}${at(50,190,.9,cat({mid:`<path d="M-22,-46 h44 v34 h-44 Z" fill="${SKY}" opacity=".95"/>`+nameTag,eyes:'happy',mouth:'open',armR:-125,armRcls:'wave',armsFront:true}))}
 ${ring(50,160,22,RED)}`;

S.cultural=`${bg('#fff8e6')}${papel(8,6,194)}${floor(184,'#e4b77a')}
 <path d="M160,26 v20" stroke="${INK}" stroke-width="2"/><g class="sway" style="transform-origin:160px 26px"><g transform="translate(160,66)">${[0,60,120,180,240,300].map((a,i)=>`<path transform="rotate(${a})" d="M-6,-14 L0,-34 L6,-14 Z" fill="${[RED,SUN,MINT,SKY,VIO,ORA][i]}"/>`).join('')}<circle r="16" fill="${VIO}"/><path d="M-16,0 h32 M-13,-8 h26 M-13,8 h26" stroke="${SUN}" stroke-width="2.500"/></g></g>
 ${taco(36,176,1.200)}<g transform="translate(150,186) rotate(-10) scale(.5)">${guitar}</g>
 ${[[30,60,RED],[60,90,SUN],[40,120,VIO]].map(([x,y,c],i)=>`<g class="float" style="animation-delay:${i*.4}s"><circle cx="${x}" cy="${y}" r="9" fill="${c}"/><circle cx="${x}" cy="${y}" r="3" fill="#fff"/></g>`).join('')}
 ${sh(100,192,32)}${at(100,190,.86,cat({eyes:'happy',mouth:'big',hat:sombrero,bow:false,armL:140,armR:-140,armsFront:true}),'dance')}`;
