/* Tag 35–38: really, something, leave, put, old · while, mean, keep, student, why · let, great, same, group, begin · seem, country, help, talk, where */
S.really=`${bg('#4a4496')}${spark(20,30,4,'#fff',0)}${spark(180,170,4,'#fff',.7)}
 <circle class="glow" cx="112" cy="92" r="84" fill="#ffe89a" opacity=".3"/>
 <g class="beat">${star5(112,92,70,SUN,`stroke="${SUN}" stroke-width="8"`)}<circle cx="96" cy="86" r="5" fill="${INK}"/><circle cx="128" cy="86" r="5" fill="${INK}"/><path d="M100,104 q12,10 24,0" fill="none" stroke="${INK}" stroke-width="3" stroke-linecap="round"/></g>
 <path d="M14,90 V10 M14,10 l-5,8 M14,10 l5,8 M14,170 l-5,-8 M14,170 l5,-8 M14,90 V170" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" class="glow"/>
 ${at(34,196,.44,cat(Object.assign({eyes:'wide',mouth:'o',armL:125,armR:-125,armsFront:true},NL)))}`;

S.something=`${bg('#ece6ff')}${floor(184,'#d6ccf5')}${sh(128,190,48)}
 <g transform="translate(128,186)"><g class="ring">${P.boxClosed(88,74)}<rect x="-30" y="-52" width="60" height="18" rx="9" fill="${INK}"/><g class="blink"><circle cx="-12" cy="-43" r="5" fill="${SUN}"/><circle cx="12" cy="-43" r="5" fill="${SUN}"/></g></g></g>
 ${T(170,60,'?',34,RED,'middle','beat')}
 <path d="M76,120 l-10,-6 M78,136 h-12 M180,120 l8,-6" stroke="${VIO}" stroke-width="4" stroke-linecap="round" class="glow"/>
 ${at(36,192,.7,cat({eyes:'wide',mouth:'wavy',armL:-30,armR:30,armsFront:true,headCls:'shiver'}))}`;

const koffer=`<rect x="-16" y="-28" width="32" height="28" rx="5" fill="${RED}"/><path d="M-7,-28 v-6 q0,-5 7,-5 q7,0 7,5 v6" fill="none" stroke="#b52f29" stroke-width="3.500"/><path d="M-16,-16 h32" stroke="#b52f29" stroke-width="3"/>`;
S.leave=`${park()}${cloud(150,30,.8)}
 <path d="M0,186 h200" stroke="#f3d9a4" stroke-width="16"/>
 ${at(46,178,1.1,P.house())}
 <g class="road"><path d="M96,150 h70" stroke="${RED}" stroke-width="4" stroke-dasharray="8 12" stroke-linecap="round"/></g>${arrow(166,150,186,150,RED,5)}
 <g transform="translate(140,192) scale(-.7,.7)"><g class="walkbob">${cat({armL:140,armLcls:'wave',armR:0,armRcls:'slowB',feet:'walk',armsFront:true,eyes:'happy',prop:`<g transform="translate(0,22)">${koffer}</g>`})}</g></g>`;

S.put=`${bg('#fff1c9')}${floor(184,'#ffe08a')}${sh(130,190,50)}
 ${at(130,138,1,P.boxBack(84))}
 <g transform="translate(130,116)"><g class="hop">${P.ball(RED)}</g></g>
 ${at(130,138,1,P.boxFront(84,48))}
 ${arrow(130,40,130,78,RED,7,'float')}
 ${sh(48,190,30)}${at(48,188,.88,cat({eyes:'happy',armR:-120,armRcls:'bob',armsFront:true}))}`;

const cane=`<path d="M0,6 v-40 q0,-8 8,-8" fill="none" stroke="#8a5a30" stroke-width="4" stroke-linecap="round"/>`;
S.old=`${room('#ece6ff','#d6ccf5')}
 <rect x="16" y="20" width="40" height="46" rx="4" fill="#fff" stroke="#b07a45" stroke-width="4"/><g transform="translate(36,58) scale(.26)">${K('orange')}</g>
 <path d="M180,10 q-18,6 -22,24 M190,24 q-14,2 -18,14 M166,10 l14,28" fill="none" stroke="#b9c9dd" stroke-width="1.600"/>
 <path d="M60,188 q44,14 88,0" fill="none" stroke="#8a5a30" stroke-width="6" stroke-linecap="round"/><rect x="62" y="96" width="12" height="84" rx="5" fill="#b07a45"/><rect x="62" y="150" width="84" height="12" rx="6" fill="#c98a4b"/>
 <g class="sway" style="transform-origin:104px 188px">${at(108,152,.96,K('grey',{eyes:'closed',hat:glasses.replace(/#fff/g,INK),armR:-40,prop:cane,mid:`<path d="M-10,-58 q10,12 20,0 q-4,16 -10,18 q-6,-2 -10,-18 Z" fill="#fff"/>`}))}</g>
 ${at(176,194,.4,cat({eyes:'happy'}))}`;

S.while=`${bg('#fff1c9')}<circle cx="100" cy="100" r="80" fill="#ffe7a3"/>
 ${at(100,178,1.02,cat({armL:40,armR:-140,armRcls:'munch',armsFront:true,mouth:'open',mouthCls:'chew',prop:P.fish,propL:`<g transform="translate(-4,6) scale(.9)">${P.book(SKY)}</g>`,hat:glasses,tail:false}))}
 ${floor(152,MINT)}<rect y="152" width="200" height="8" fill="#9be6d8"/><g transform="translate(140,186)">${P.plate(36)}</g>${fishAt(132,176,1.3,8)}${fishAt(150,178,1.3,-10)}
 <g class="beat"><path d="M100,22 v20 M90,32 h20" stroke="${VIO}" stroke-width="6" stroke-linecap="round"/></g>`;

S.mean=`${bg('#ece6ff')}
 <rect x="20" y="24" width="160" height="96" rx="10" fill="#fff" stroke="${SKY}" stroke-width="6"/><path d="M100,24 v96" stroke="${SKY}" stroke-width="3"/>
 ${T(60,82,'cat',30,INK)}<g transform="translate(140,114) scale(.62)">${cat({tail:false})}</g>
 <g class="beat"><circle cx="100" cy="72" r="14" fill="${SUN}"/><path d="M93,68 h14 M93,76 h14" stroke="#fff" stroke-width="3.500" stroke-linecap="round"/></g>
 ${floor(184,'#d6ccf5')}${at(100,196,.56,cat({eyes:'happy',mouth:'open',armL:150,armR:-150,armsFront:true}))}`;

S.keep=`${bg('#fff3cf')}<circle cx="100" cy="104" r="80" fill="#ffe7a3"/>${floor(184,'#ffe08a')}${sh(100,190,38)}
 ${at(100,186,1.04,cat({eyes:'happy',armL:-40,armR:40,armsFront:true,mid:`<g transform="translate(0,-4)"><rect x="-17" y="-38" width="34" height="40" rx="8" fill="#bfe9ff" opacity=".85" stroke="#fff" stroke-width="2"/><rect x="-13" y="-44" width="26" height="8" rx="3" fill="${RED}"/>${star5(-5,-10,6,SUN)}${star5(6,-20,5,SUN)}${star5(4,-6,4,SUN)}</g>`}),'sway')}
 ${heart(40,70,1,RED,0)}${spark(164,60,7,SUN,.5)}`;

S.student=`${bg('#fff1c9')}
 <rect x="100" y="16" width="90" height="56" rx="6" fill="#3aa568" stroke="#b07a45" stroke-width="5"/>${T(145,54,'ABC',22,'#fff')}
 ${at(84,172,.98,cat({mouth:'open',armL:30,armR:-155,armsFront:true,tail:false,mid:backpack}))}
 ${floor(146,'#c98a4b')}<rect y="146" width="200" height="8" fill="#e0a868"/>
 <g transform="translate(140,180) scale(1.2)">${P.book(RED)}</g><path d="M40,166 l40,-6" stroke="${SUN}" stroke-width="6" stroke-linecap="round"/><path d="M80,160 l7,-1 -6,5 Z" fill="${INK}"/>`;

S.why=`${park()}${cloud(100,26,.7)}
 ${sh(140,190,40)}${at(144,188,.86,P.dog({happy:true}))}${heart(124,70,1,RED,0)}${heart(160,84,.8,RED,.8)}
 <g transform="translate(180,184) rotate(-14)"><rect x="-10" y="-3" width="20" height="6" rx="3" fill="#fff"/><circle cx="-10" cy="-3" r="4" fill="#fff"/><circle cx="-10" cy="3" r="4" fill="#fff"/><circle cx="10" cy="-3" r="4" fill="#fff"/><circle cx="10" cy="3" r="4" fill="#fff"/></g>
 ${T(48,60,'?',44,RED,'middle','beat')}
 ${sh(46,192,30)}${at(46,190,.84,cat({eyes:'wide',headCls:'tilt',armR:-150,armsFront:true}))}`;

S.let=`${room('#fff1c9','#e4b77a')}
 <rect x="86" y="34" width="84" height="146" rx="8" fill="#b07a45"/><rect x="94" y="42" width="68" height="138" fill="#cdeeff"/><path d="M94,150 q34,-16 68,0 v30 h-68 Z" fill="#8fe0a8"/>
 <path d="M162,42 L178,34 V188 L162,180 Z" fill="${SKY}"/>
 <g transform="translate(118,186)"><g class="walkbob"><g transform="scale(.5)">${K('orange',{armL:0,armR:0,armLcls:'slowA',armRcls:'slowB',feet:'walk',eyes:'happy'})}</g></g></g>
 ${arrow(84,130,104,130,MINT,6,'glow')}
 ${sh(40,192,28)}${at(40,190,.84,cat({eyes:'happy',armR:-96}))}`;

S.great=`${bg('#fff3cf')}
 ${[[20,RED,0],[56,SUN,.9],[150,VIO,1.3],[180,SKY,.4],[100,MINT,2]].map(([x,c,d])=>`<rect class="conf" style="animation-delay:-${d}s" x="${x}" y="0" width="7" height="4" rx="1.5" fill="${c}"/>`).join('')}
 ${floor(184,'#ffe08a')}
 <g class="beat"><path d="M112,60 h56 v24 q0,30 -28,30 q-28,0 -28,-30 Z" fill="${SUN}"/><path d="M112,68 q-18,0 -14,18 q4,12 18,12 M168,68 q18,0 14,18 q-4,12 -18,12" fill="none" stroke="${SUN}" stroke-width="6"/><rect x="134" y="112" width="12" height="24" fill="#e0a83a"/><rect x="118" y="134" width="44" height="12" rx="4" fill="#e0a83a"/>${star5(140,84,11,'#fff')}</g>
 <rect x="108" y="146" width="64" height="40" rx="4" fill="#c98a4b"/>
 ${spark(96,50,7,'#fff',0)}${spark(186,44,7,SUN,.5)}
 ${sh(50,190,30)}${at(50,188,.88,cat({eyes:'happy',mouth:'open',armL:125,armR:-125,armsFront:true}),'hop')}`;

S.same=`${bg('#e3fbf5')}${floor(184,'#bff0de')}
 ${at(50,150,2.2,P.ball(RED))}${at(150,150,2.2,P.ball(RED))}
 <g class="beat"><path d="M88,112 h24 M88,126 h24" stroke="${VIO}" stroke-width="7" stroke-linecap="round"/></g>
 ${check(100,60,14,7)}
 ${at(100,196,.56,cat({eyes:'happy',armL:110,armR:-110,armsFront:true}))}`;

S.group=`${park(172)}${sun(30,28,10)}
 <ellipse cx="100" cy="136" rx="90" ry="62" fill="none" stroke="${VIO}" stroke-width="4" stroke-dasharray="10 9"/>
 ${at(60,166,.5,K('grey',{eyes:'happy'}))}${at(140,166,.5,K('white',{eyes:'happy'}))}${at(100,160,.5,K('cream',{eyes:'happy'}))}
 ${at(36,190,.56,K('orange',{eyes:'happy',mouth:'open'}),'hop')}${at(100,192,.62,cat({eyes:'happy',mouth:'open',armL:125,armR:-125,armsFront:true}))}${at(164,190,.56,K('grey',{eyes:'happy',fur:'#ffe2b8',out:'#e0b98a',belly:'#fff6e6'}),'hop')}`;

S.begin=`${bg('#3b2a4a')}
 <rect x="20" y="20" width="160" height="150" fill="#fff3cf"/><circle cx="100" cy="100" r="50" fill="#ffe7a3"/>
 ${at(100,168,.8,cat({eyes:'happy',mouth:'open',armL:110,armR:-110,armsFront:true}))}
 <g class="dooropen" style="animation-duration:2.6s"><path d="M20,20 h80 v150 h-80 Z" fill="${RED}"/><path d="M36,20 v150 M56,20 v150 M76,20 v150" stroke="#b52f29" stroke-width="3"/></g>
 <g transform="translate(200,0) scale(-1,1)"><g class="dooropen" style="animation-duration:2.6s"><path d="M20,20 h80 v150 h-80 Z" fill="${RED}"/><path d="M36,20 v150 M56,20 v150 M76,20 v150" stroke="#b52f29" stroke-width="3"/></g></g>
 <rect x="10" y="8" width="180" height="18" rx="6" fill="#b52f29"/><rect y="170" width="200" height="30" fill="#8a5a30"/>
 ${spark(40,186,5,SUN,0)}${spark(100,188,5,SUN,.4)}${spark(160,186,5,SUN,.8)}`;

S.seem=`${room('#ffe9d6','#ffd9bd')}
 <path d="M70,170 Q60,60 100,40 q-4,16 8,22 q8,-18 26,-18 q-6,14 4,22 q22,-10 34,6 Q190,90 176,170 Z" fill="${INK}" opacity=".35" class="pulse" style="transform-origin:120px 170px"/>
 <circle cx="120" cy="84" r="6" fill="#fff" opacity=".7"/><circle cx="146" cy="84" r="6" fill="#fff" opacity=".7"/>
 <g transform="translate(150,186)"><path d="M10,-4 q12,2 10,-8" fill="none" stroke="#8a8fb0" stroke-width="2" stroke-linecap="round"/><ellipse cx="0" cy="-6" rx="11" ry="7" fill="#b9bdd4"/><circle cx="-7" cy="-13" r="4.500" fill="#b9bdd4"/><circle cx="-8" cy="-7" r="1.400" fill="${INK}"/></g>
 <path d="M186,186 l-10,-18 h-10 l6,18 Z" fill="${SUN}" opacity=".8"/><rect x="176" y="184" width="16" height="8" rx="3" fill="#9aa8c0"/>
 ${at(38,192,.76,cat({eyes:'wide',mouth:'wavy',headCls:'shiver',armL:-30,armR:30,armsFront:true}))}`;

S.country=`${bg('#cdeeff')}${cloud(30,30,.7)}
 <path d="M10,130 q30,-60 80,-50 q40,-30 80,10 q30,40 10,80 q-50,30 -110,14 q-60,-10 -60,-54 Z" fill="#b7efc8" stroke="#3aa568" stroke-width="3"/>
 <path d="M60,150 l14,-26 14,26 Z M82,150 l12,-20 12,20 Z" fill="#9aa8c0"/><g transform="translate(140,150) scale(.36)">${P.house()}</g><g transform="translate(166,144) scale(.3)">${P.house(SKY)}</g>
 <path d="M112,112 v-76" stroke="#b07a45" stroke-width="4" stroke-linecap="round"/>
 <g class="flower"><rect x="112" y="36" width="20" height="36" fill="#1f9c5a"/><rect x="132" y="36" width="20" height="36" fill="#fff"/><ellipse cx="142" cy="54" rx="5" ry="6" fill="#b07a45"/><rect x="152" y="36" width="20" height="36" fill="${RED}"/></g>
 ${at(40,194,.54,cat({eyes:'happy',armR:-125,armRcls:'wave',armsFront:true}))}`;

S.help=`${park()}${cloud(150,30,.8)}
 <ellipse cx="140" cy="186" rx="34" ry="8" fill="#3aa568"/>
 <g transform="translate(140,196)"><g class="float"><g transform="scale(.56)">${K('orange',{armL:150,armR:-150,armsFront:true,mouth:'wavy',tail:false})}</g></g></g>
 <path d="M106,190 q34,14 68,0 v10 h-68 Z" fill="#6fd08f"/>
 ${sh(64,190,32)}${at(64,188,.92,cat({eyes:'happy',armR:-80,armRcls:'bob'}))}
 ${heart(104,96,1,RED,0)}`;

const dots=(x,y,c)=>`<g fill="${c}"><circle class="glow" cx="${x-10}" cy="${y}" r="4"/><circle class="glow" style="animation-delay:.3s" cx="${x}" cy="${y}" r="4"/><circle class="glow" style="animation-delay:.6s" cx="${x+10}" cy="${y}" r="4"/></g>`;
S.talk=`${bg('#e3fbf5')}${floor(184,'#bff0de')}
 ${speech(60,44,64,40,dots(60,44,RED),64,78)}<g class="glow" style="animation-delay:.8s">${speech(140,60,64,40,dots(140,60,VIO),138,92)}</g>
 ${sh(56,190,30)}${at(56,188,.86,cat({mouth:'open',mouthCls:'chew',armR:-80}))}
 ${sh(146,190,30)}${flipAt(146,188,.86,K('orange',{mouth:'open',armR:-80,eyes:'happy'}))}`;

S.where=`${park()}${cloud(40,30,.8)}
 <g transform="translate(150,186)"><g class="peek"><g transform="scale(1.3)">${P.ball(RED)}</g></g></g>
 <circle cx="150" cy="160" r="26" fill="#4fc27f"/><circle cx="128" cy="172" r="18" fill="#62d08f"/><circle cx="172" cy="172" r="18" fill="#62d08f"/>
 ${T(72,50,'?',40,RED,'middle','beat')}${T(104,70,'?',24,VIO,'middle','beat')}
 ${sh(56,192,32)}${at(56,190,.9,cat({eyes:'wide',headCls:'tilt',armL:150,armR:-150,armsFront:true}))}`;
