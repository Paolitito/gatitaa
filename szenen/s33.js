/* Tag 119–122: shoot, east, save, artist, scene · stock, career, despite, central, thus · treatment, beyond, exactly, protect, approach · lie, size, fund, serious, occur */
S.shoot=`${park()}${sun(30,24,9)}
 ${sh(54,192,30)}${at(54,190,.88,cat({eyes:'happy',mouth:'tongue',armR:-90,armsFront:true,prop:`<g transform="translate(4,-4)"><rect x="-6" y="-10" width="30" height="12" rx="4" fill="${SKY}"/><rect x="-4" y="0" width="9" height="14" rx="3" fill="#2f6fd0"/><rect x="2" y="-18" width="12" height="9" rx="3" fill="${SUN}"/><rect x="24" y="-7" width="8" height="5" fill="${ORA}"/></g>`}))}
 <path d="M96,120 q30,-14 60,6" fill="none" stroke="${SKY}" stroke-width="4" stroke-linecap="round" stroke-dasharray="6 7" class="glow"/>
 <path class="drip" d="${tear(150,120)}" fill="${SKY}"/><path class="drip" style="animation-delay:.4s" d="${tear(164,112)}" fill="${SKY}"/>
 ${at(164,190,.7,K('orange',{eyes:'closed',mouth:'big',armL:120,armR:-120,armsFront:true}),'hop')}${T(120,70,'splash!',14,SKY,'middle','beat')}`;

S.east=`${bg('#ffe9d6')}${kompass('E')}
 <g class="wiggle" style="transform-origin:100px 96px"><path d="M136,96 l-36,-10 v20 Z" fill="${RED}"/><path d="M64,96 l36,-10 v20 Z" fill="#9aa8c0"/></g><circle cx="100" cy="96" r="5" fill="${INK}"/>
 ${arrow(170,96,192,96,RED,6,'glow')}
 <path d="M0,184 h200 v16 h-200 Z" fill="#8fe0a8"/><g transform="translate(182,184) scale(.8)">${sun(0,0,12)}</g>
 ${at(34,200,.5,cat({eyes:'happy',armR:-110,armsFront:true}))}`;

S.save=`${room('#e3fbf5','#bff0de')}
 <g transform="translate(130,150)"><ellipse cx="0" cy="0" rx="44" ry="32" fill="${SKY}"/><circle cx="-36" cy="-6" r="10" fill="${SKY}"/><path d="M-20,-28 l6,-12 8,10 Z M16,-28 l-4,-12 -8,10 Z" fill="#2f6fd0"/><ellipse cx="-44" cy="-4" rx="7" ry="6" fill="#8dc0ff"/><circle cx="-30" cy="-12" r="2.500" fill="${INK}"/><rect x="-10" y="-34" width="22" height="5" rx="2" fill="${INK}"/><rect x="-28" y="24" width="10" height="14" rx="3" fill="#2f6fd0"/><rect x="18" y="24" width="10" height="14" rx="3" fill="#2f6fd0"/><path d="M44,-4 q12,-8 6,6" fill="none" stroke="#2f6fd0" stroke-width="3"/></g>
 <g class="drop" style="animation-duration:1.600s">${coin(130,96,9)}</g>
 ${sh(46,192,30)}${at(46,190,.86,cat({eyes:'happy',armR:-130,armsFront:true,prop:coin(0,-8,8)}))}
 ${T(170,70,'+1',18,RED,'middle','beat')}`;

S.artist=`${room('#fff1c9','#e4b77a')}${papel(12,10,190)}
 <path d="M106,180 l20,-120 M170,180 l-20,-120 M138,180 v-100" stroke="#b07a45" stroke-width="4" stroke-linecap="round"/>
 <rect x="102" y="50" width="72" height="84" rx="3" fill="#fff" stroke="#b07a45" stroke-width="3"/><circle cx="138" cy="84" r="16" fill="${SUN}"/><circle cx="124" cy="106" r="10" fill="${RED}"/><circle cx="152" cy="108" r="12" fill="${SKY}"/><path d="M112,60 q20,10 50,-2" stroke="${VIO}" stroke-width="5" fill="none" stroke-linecap="round" class="draw"/>
 ${sh(50,192,32)}${at(50,190,.9,cat({bow:false,hat:barett,eyes:'happy',mouth:'tongue',armR:-110,armRcls:'bob',armsFront:true,armL:40,propL:`<ellipse cx="-4" cy="6" rx="16" ry="11" fill="#e4c58a"/><circle cx="-10" cy="2" r="3" fill="${RED}"/><circle cx="-2" cy="8" r="3" fill="${SKY}"/><circle cx="4" cy="1" r="3" fill="${MINT}"/>`,prop:`<path d="M0,2 l10,-22" stroke="#b07a45" stroke-width="3" stroke-linecap="round"/><path d="M10,-20 l3,-7" stroke="${VIO}" stroke-width="5" stroke-linecap="round"/>`}))}`;

S.scene=`${bg('#3b2a4a')}${floor(170,'#8a5a30')}
 <path d="M0,0 h26 q-6,90 0,170 h-26 Z M200,0 h-26 q6,90 0,170 h26 Z" fill="${RED}"/><path d="M26,0 h148 v16 q-74,16 -148,0 Z" fill="#b52f29"/>
 <rect x="30" y="30" width="140" height="140" fill="#cdeeff"/><circle cx="60" cy="56" r="12" fill="${SUN}"/><path d="M30,140 q70,-30 140,0 v30 h-140 Z" fill="#8fe0a8"/>${tree(150,150,1.300)}
 ${at(80,166,.5,cat({eyes:'happy',mouth:'open',armR:-120,armsFront:true}))}${at(120,166,.5,K('orange',{eyes:'happy',armL:120,armsFront:true}))}
 <g transform="translate(100,190) rotate(-6) scale(.7)">${klappe}</g>${T(100,26,'1',12,'#fff')}`;

S.stock=`${room('#fff1c9','#e4b77a')}
 ${[0,1,2].map(r=>`<rect x="70" y="${40+r*46}" width="120" height="6" rx="2" fill="#b07a45"/>${[0,1,2,3].map(c=>`<rect x="${76+c*28}" y="${14+r*46}" width="22" height="26" rx="3" fill="${[RED,SUN,MINT,SKY][(r+c)%4]}"/>`).join('')}`).join('')}
 <path d="M70,10 v132 M190,10 v132" stroke="#8a5a30" stroke-width="5"/>
 ${T(130,166,'× 12',16,RED,'middle','beat')}
 ${at(36,192,.76,cat({hat:glasses,eyes:'happy',armR:-96,armsFront:true,prop:`<rect x="-10" y="-22" width="20" height="26" rx="2" fill="#c98a4b"/><rect x="-7" y="-18" width="14" height="18" fill="#fff"/><path d="M-4,-12 l3,3 5,-6" fill="none" stroke="${MINT}" stroke-width="2"/>`}))}`;

S.career=`${bg('#e6f1ff')}
 ${[0,1,2,3].map(i=>`<rect x="${20+i*44}" y="${160-i*36}" width="50" height="${40+i*36}" fill="${['#cfe3f7','#b9d6f2','#a3c9ee','#8dbcea'][i]}"/>`).join('')}
 ${at(44,160,.3,cat({tail:false,hat:cap}))}${at(88,124,.3,cat({tail:false,mid:tie}))}${at(132,88,.3,cat({tail:false,mid:tie,hat:glasses}))}
 ${at(176,52,.34,cat({tail:false,mid:tie,hat:crown,eyes:'happy',armL:130,armR:-130,armsFront:true}),'hop')}
 <path d="M30,120 L70,90 L114,54 L156,20" fill="none" stroke="${RED}" stroke-width="3" stroke-dasharray="5 6"/>${arrow(146,28,160,16,RED,5,'glow')}`;

S.despite=`${bg('#b9c9dd')}
 <g class="cloud"><ellipse cx="100" cy="24" rx="80" ry="18" fill="#7a8aa6"/></g>
 ${[20,50,80,110,140,170].map((x,i)=>`<path class="drop" style="animation-delay:${i*.17}s" d="M${x},44 l-6,16" stroke="${SKY}" stroke-width="3" stroke-linecap="round"/>`).join('')}
 ${hills('#8fe0a8','#6fd08f',170)}<ellipse cx="150" cy="188" rx="30" ry="5" fill="#5cc3ff" opacity=".7"/>
 ${at(80,188,.9,cat({eyes:'happy',mouth:'big',armL:130,armR:-130,armsFront:true,feet:'run'}),'hop')}
 <g transform="translate(140,160)"><g class="jump">${P.ball(RED)}</g></g>${note(40,110,SUN,0)}`;

S.central=`${park(176)}${cloud(30,22,.6)}
 ${hausK(30,150,.44,SKY)}${hausK(170,150,.44,VIO,'#ffe2b8')}${hausK(40,196,.44,MINT)}${hausK(164,196,.44,SUN,'#fff')}
 <circle cx="100" cy="140" r="34" fill="#f3d9a4"/><circle cx="100" cy="140" r="18" fill="#5cc3ff"/><path d="M100,140 v-26" stroke="#9aa8c0" stroke-width="4"/><path class="drip" d="${tear(92,112)}" fill="#fff"/><path class="drip" style="animation-delay:.5s" d="${tear(108,112)}" fill="#fff"/>
 ${ring(100,140,42,RED)}${pin(100,90)}
 <path d="M52,140 h14 M134,140 h14 M100,186 v-10" stroke="${RED}" stroke-width="3" stroke-dasharray="3 4"/>`;

S.thus=`${bg('#e6f1ff')}
 ${panel(8,40,80,100)}${panel(112,40,80,100)}
 <ellipse cx="48" cy="64" rx="24" ry="9" fill="#9aa8c0"/>${[34,48,62].map((x,i)=>`<path class="drop" style="animation-delay:${i*.2}s" d="M${x},78 l-4,12" stroke="${SKY}" stroke-width="3" stroke-linecap="round"/>`).join('')}
 <g transform="translate(152,128) scale(.6)">${P.house()}</g>${at(152,128,.2,cat({tail:false,eyes:'happy'}))}
 <g class="beat">${arrow(90,90,110,90,RED,7)}</g>
 ${floor(184,'#cfe3f7')}${at(100,200,.44,cat({hat:glasses,eyes:'happy',armR:-140,armsFront:true}))}`;

S.treatment=`${room('#e3fbf5','#bff0de')}
 <g class="beat"><circle cx="164" cy="40" r="18" fill="#fff"/><path d="M164,30 v20 M154,40 h20" stroke="${RED}" stroke-width="6" stroke-linecap="round"/></g>
 ${sh(126,192,30)}${at(126,190,.84,K('orange',{eyes:'happy',mouth:'w',armL:110,armsFront:true,propL:`<g transform="translate(0,-4)"><rect x="-10" y="-8" width="20" height="16" rx="6" fill="#fff" stroke="#cbc2e6" stroke-width="1.500"/><path d="M-10,-2 h20 M-10,3 h20" stroke="#cbc2e6" stroke-width="1"/></g>`}))}
 ${sh(50,192,30)}${at(50,190,.86,cat({mid:kittel,hat:glasses,eyes:'happy',armR:-96,armRcls:'bob',armsFront:true}))}
 ${heart(90,100,1,RED,0)}${spark(96,150,7,MINT,0)}`;

S.beyond=`${bg('#cdeeff')}${sun(160,26,9)}${cloud(40,24,.7)}
 <g transform="translate(150,120) scale(.5)">${P.house()}</g>
 <path d="M-20,200 q110,-190 240,0 Z" fill="#6fd08f"/><path d="M20,200 q60,-80 100,-104" fill="none" stroke="#f3d9a4" stroke-width="8" stroke-linecap="round" stroke-dasharray="1 14"/>
 ${arcArrow(60,150,146,84,-36,RED,4,'7 8')}
 ${at(40,196,.6,cat({eyes:'happy',armR:-140,armsFront:true}))}`;

S.exactly=`${bg('#fff1c9')}<circle cx="100" cy="92" r="80" fill="#ffe7a3"/>${floor(186,'#ffe08a')}
 <circle cx="100" cy="92" r="60" fill="#fff" stroke="${INK}" stroke-width="6"/>${[0,30,60,90,120,150,180,210,240,270,300,330].map(a=>`<path transform="rotate(${a} 100 92)" d="M100,38 v8" stroke="${INK}" stroke-width="${a%90?2:4}"/>`).join('')}
 ${T(148,100,'3',20,RED,'middle','beat')}<path d="M100,92 V50" stroke="${INK}" stroke-width="4" stroke-linecap="round"/><path d="M100,92 H132" stroke="${RED}" stroke-width="6" stroke-linecap="round"/><circle cx="100" cy="92" r="6" fill="${INK}"/>
 ${ring(148,93,16,RED)}
 ${at(36,200,.5,cat({eyes:'happy',armR:-140,armsFront:true}))}`;

S.protect=`${bg('#b9c9dd')}<g class="cloud"><ellipse cx="100" cy="20" rx="80" ry="16" fill="#7a8aa6"/></g>
 ${[14,40,70,130,160,186].map((x,i)=>`<path class="drop" style="animation-delay:${i*.17}s" d="M${x},40 l-5,14" stroke="${SKY}" stroke-width="3" stroke-linecap="round"/>`).join('')}
 ${floor(184,'#9aa8c0')}
 <path d="M40,96 q60,-70 124,0 q-16,-10 -31,0 q-16,-10 -31,0 q-16,-10 -31,0 q-16,-10 -31,0 Z" fill="${RED}"/><path d="M102,60 v70" stroke="${INK}" stroke-width="3"/>
 ${sh(90,192,30)}${at(86,190,.84,cat({eyes:'happy',armR:-150,armsFront:true}))}
 ${at(134,190,.5,K('cream',{eyes:'happy',mouth:'open'}))}${heart(134,130,.7,RED,0)}`;

S.approach=`${park()}${cloud(100,22,.7)}
 ${sh(160,192,28)}${at(160,190,.8,K('orange',{eyes:'happy',armL:125,armLcls:'wave',armsFront:true}))}
 <g class="road" style="animation-duration:4s;animation-direction:reverse"><g transform="translate(20,190) scale(-.7,.7)"><g class="walkbob">${cat({eyes:'happy',feet:'walk',armL:0,armR:0,armLcls:'slowA',armRcls:'slowB'})}</g></g></g>
 ${arrow(60,96,116,96,RED,6,'glow')}<path d="M40,196 h20 M70,196 h20 M100,196 h20" stroke="#b07a45" stroke-width="3" stroke-linecap="round" opacity=".5"/>`;

S.lie=`${park(150)}${sun(160,28,10)}${cloud(40,24,.7)}
 <path d="M20,176 h160 l-10,16 h-140 Z" fill="${RED}"/><path d="M40,176 l-4,16 M70,176 l-2,16 M100,176 v16 M130,176 l2,16 M160,176 l4,16" stroke="#fff" stroke-width="3"/>
 <g transform="translate(100,172) rotate(-90)"><g transform="scale(.76)">${cat({eyes:'closed',mouth:'w',armL:160,armR:-160,armsFront:true,tail:false})}</g></g>
 ${flower(20,176,SUN,0)}${flower(184,174,VIO,.5)}${bfly(120,100,ORA,0)}${arrow(30,90,30,130,RED,6,'float')}`;

S.size=`${bg('#e3fbf5')}${floor(184,'#bff0de')}
 ${[['S',36,.44],['M',92,.62],['L',158,.84]].map(([l,x,s],i)=>`${at(x,184,s,i==2?cat({eyes:'happy'}):K(['cream','orange'][i],{eyes:'happy'}))}${T(x,40,l,16+i*6,i==2?RED:'#9aa8c0')}`).join('')}
 <path d="M14,56 h172" stroke="${INK}" stroke-width="3"/>${[14,36,58,80,102,124,146,168,186].map(x=>`<path d="M${x},56 v8" stroke="${INK}" stroke-width="2"/>`).join('')}
 ${arrow(20,70,180,70,RED,4,'glow')}`;

S.fund=`${room('#ece6ff','#d6ccf5')}
 <path d="M70,110 h60 l10,60 q-40,14 -80,0 Z" fill="#c98a4b"/><path d="M76,110 q24,-22 48,0 Z" fill="#b07a45"/><path d="M80,112 h40" stroke="#8a5a30" stroke-width="5" stroke-linecap="round"/>${T(100,152,'♥',26,RED)}
 ${[[30,60],[100,40],[170,60]].map(([x,y],i)=>`<g style="animation:spende 2.400s ease-in ${i*.5}s infinite">${coin(x,y,9)}</g>`).join('')}<style>@keyframes spende{0%{transform:translate(0,0);opacity:1}80%,100%{transform:translate(0,50px);opacity:0}}</style>
 ${at(30,196,.5,K('orange',{eyes:'happy',armR:-130,armsFront:true}))}${at(170,196,.5,K('grey',{eyes:'happy',armL:130,armsFront:true}))}
 ${at(100,200,.36,cat({eyes:'happy',tail:false}))}`;

S.serious=`${room('#e6f1ff','#cfe3f7')}
 <rect x="110" y="20" width="76" height="90" rx="4" fill="#fff" stroke="#cbc2e6" stroke-width="2"/><path d="M120,40 h56 M120,54 h56 M120,68 h40" stroke="#cbc2e6" stroke-width="3" stroke-linecap="round"/><circle cx="160" cy="92" r="10" fill="none" stroke="${RED}" stroke-width="3"/>
 ${sh(70,192,36)}${at(70,190,1,cat({mid:tie,hat:glasses+`<path d="M-26,-92 l16,6 M26,-92 l-16,6" stroke="${INK}" stroke-width="3.500" stroke-linecap="round"/>`,eyes:'open',mouth:'wavy',armL:-150,armR:150,armsFront:true}))}
 <g opacity=".4">${note(150,150,VIO,0)}</g>${cross(150,150,9,4)}`;

S.occur=`${bg('#2d2a6e')}${spark(30,40,4,'#fff',0)}${spark(170,60,4,'#fff',.6)}${spark(60,110,3,'#fff',1)}
 <g style="animation:stern 2.600s ease-in infinite"><path d="M150,20 l-50,40" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".6"/>${star5(100,62,10,SUN)}</g><style>@keyframes stern{0%{transform:translate(60px,-48px);opacity:0}30%{opacity:1}100%{transform:translate(-60px,48px);opacity:0}}</style>
 ${floor(180,'#1f1b4d')}${T(150,120,'!',30,SUN,'middle','beat')}
 ${at(70,192,.86,cat(Object.assign({eyes:'wide',mouth:'o',armR:-150,armsFront:true},NL)))}
 ${at(140,194,.5,K('orange',{eyes:'wide',line:'#b9b0d6'}))}`;
