/* Tag 111–114: author, fill, represent, focus, foreign · drop, blood, upon, agency, push · nature, color, recently, store, reduce · sound, note, fine, near, movement */
const papel=(y,x0,x1)=>`<path d="M${x0},${y} q${(x1-x0)/2},16 ${x1-x0},0" fill="none" stroke="#b07a45" stroke-width="1.500"/>${[0,1,2,3,4,5].map(i=>{const n=6,x=x0+(i+.5)*(x1-x0)/n,yy=y+16*(1-Math.pow((i+.5)/n*2-1,2))*.5;return `<g class="sway" style="transform-origin:${x}px ${yy}px;animation-delay:${i*.2}s"><rect x="${x-9}" y="${yy}" width="18" height="16" fill="${[RED,SUN,MINT,SKY,VIO,ORA][i]}"/><circle cx="${x}" cy="${yy+7}" r="3" fill="#fff" opacity=".7"/><path d="M${x-9},${yy+16} l3,-4 3,4 3,-4 3,4 3,-4 3,4" fill="#fff8e6"/></g>`}).join('')}`;
const kaktus=(x,y,s)=>`<g transform="translate(${x},${y}) scale(${s})"><ellipse cx="0" cy="-22" rx="13" ry="22" fill="#4fc27f"/><ellipse cx="-17" cy="-34" rx="8" ry="12" fill="#6fd08f"/><ellipse cx="16" cy="-42" rx="8" ry="11" fill="#6fd08f"/><circle cx="16" cy="-55" r="4" fill="${RED}"/><path d="M-5,-30 v0 M5,-18 v0 M0,-10 v0 M-3,-40 v0" stroke="#fff" stroke-width="2.500" stroke-linecap="round"/></g>`;
const taco=(x,y,s)=>`<g transform="translate(${x},${y}) scale(${s})"><path d="M-16,4 a16,16 0 0 1 32,0 Z" fill="#3aa568"/><circle cx="-6" cy="-6" r="4" fill="${RED}"/><circle cx="5" cy="-8" r="4" fill="${RED}"/><path d="M-18,6 a18,17 0 0 1 36,0 Z" fill="${SUN}" stroke="#e0a83a" stroke-width="1.500" transform="translate(0,3)"/></g>`;
const sombrero=`<ellipse cx="0" cy="-98" rx="50" ry="10" fill="${SUN}" stroke="#e0a83a" stroke-width="2"/><path d="M-20,-100 q4,-40 20,-40 q16,0 20,40 Z" fill="${SUN}" stroke="#e0a83a" stroke-width="2"/><path d="M-19,-106 h38" stroke="${RED}" stroke-width="5"/><path d="M-44,-98 q44,10 88,0" fill="none" stroke="${MINT}" stroke-width="2.500" stroke-dasharray="4 4"/>`;

S.author=`${room('#fff1c9','#e4b77a')}
 ${at(120,186,1.1,P.table(110))}<path d="M60,124 h120 v12 h-120 Z" fill="#c98a4b"/>
 <rect x="130" y="94" width="40" height="30" rx="3" fill="${RED}"/><rect x="130" y="94" width="7" height="30" fill="#b52f29"/>${T(153,114,'by me',8,'#fff')}<g class="twinkle">${star5(176,88,7,SUN)}</g>
 <rect x="82" y="108" width="36" height="16" fill="#fff" stroke="#cbc2e6" stroke-width="1.500" transform="rotate(-6 100 116)"/><path class="draw" d="M88,114 q6,-6 12,0 t12,0" fill="none" stroke="${INK}" stroke-width="1.800"/>
 ${at(44,192,.8,cat({hat:glasses,mouth:'tongue',armR:-84,armRcls:'bob',armsFront:true,prop:`<path d="M0,2 l14,-18" stroke="#b07a45" stroke-width="3" stroke-linecap="round"/><path d="M14,-16 q8,-14 14,-18 q-2,12 -10,20 Z" fill="#fff" stroke="#cbc2e6" stroke-width="1"/>`}))}`;

S.fill=`${bg('#e3fbf5')}${floor(170,MINT)}<rect y="170" width="200" height="8" fill="#9be6d8"/>
 <path d="M110,90 h60 l-6,80 h-48 Z" fill="#fff" opacity=".7" stroke="#cbc2e6" stroke-width="3"/>
 <clipPath id="fl"><path d="M110,90 h60 l-6,80 h-48 Z"/></clipPath><g clip-path="url(#fl)"><rect x="100" y="90" width="80" height="84" fill="${SKY}" style="transform-origin:140px 170px;transform-box:view-box;animation:fuell 3s ease-in-out infinite alternate"/></g><style>@keyframes fuell{from{transform:scaleY(.15)}to{transform:scaleY(.9)}}</style>
 <path class="drip" d="${tear(140,62)}" fill="${SKY}"/><path d="M134,44 q6,10 6,40" fill="none" stroke="${SKY}" stroke-width="5" stroke-linecap="round" class="glow"/>
 ${at(50,192,.86,cat({eyes:'happy',mouth:'tongue',armR:-124,armsFront:true,prop:`<g transform="rotate(50)"><path d="M-12,-22 h24 l-3,24 h-18 Z" fill="${RED}"/><path d="M12,-18 q10,0 8,10" fill="none" stroke="${RED}" stroke-width="4"/></g>`}))}`;

S.represent=`${park()}${burst(170,30,SUN,0)}
 <g opacity=".6">${at(24,190,.4,K('grey',{eyes:'happy'}))}${at(56,192,.4,K('cream',{eyes:'happy'}))}${at(40,172,.36,K('white',{eyes:'happy'}))}</g>
 ${arrow(74,150,96,150,VIO,5,'glow')}
 ${sh(136,192,34)}${at(136,190,.94,cat({eyes:'happy',mouth:'open',armR:-150,armsFront:true,mid:`<path d="M-24,-50 L22,-6 l6,-8 L-18,-56 Z" fill="${SUN}"/>`,prop:`<path d="M0,4 v-50" stroke="#b07a45" stroke-width="3"/><g transform="translate(0,-46)"><rect x="1" y="0" width="9" height="20" fill="#1f9c5a"/><rect x="10" y="0" width="9" height="20" fill="#fff"/><circle cx="14.500" cy="10" r="2.500" fill="#b07a45"/><rect x="19" y="0" width="9" height="20" fill="${RED}"/></g>`}))}`;

S.focus=`${bg('#ece6ff')}${floor(184,'#d6ccf5')}
 <g opacity=".25">${bfly(30,50,ORA,0)}${note(170,50,SKY,0)}<g transform="translate(170,150)">${P.ball(RED)}</g></g>
 <circle cx="140" cy="100" r="34" fill="#fff"/><circle cx="140" cy="100" r="24" fill="${RED}"/><circle cx="140" cy="100" r="14" fill="#fff"/><circle cx="140" cy="100" r="6" fill="${RED}" class="beat"/>
 <path d="M84,96 L112,100" stroke="${SUN}" stroke-width="3" stroke-dasharray="4 5" class="glow"/>
 ${sh(54,192,32)}${at(54,190,.92,cat({eyes:'open',mouth:'wavy',headCls:'',hat:`<path d="M-24,-86 l14,5 M24,-86 l-14,5" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>`,armR:-90,armsFront:true}))}`;

S.foreign=`${park(170)}${cloud(40,24,.7)}
 <g class="float"><path d="M120,40 l40,-8 6,6 -30,12 -4,12 -6,-10 -10,2 Z" fill="#fff" stroke="#cbc2e6" stroke-width="1.500"/></g>
 ${sh(60,192,30)}${at(60,190,.84,cat({eyes:'happy',armR:-125,armRcls:'wave',armsFront:true,hat:sombrero}))}
 ${sh(146,192,30)}${at(146,190,.84,K('white',{eyes:'happy',mouth:'open',armL:125,armLcls:'wave',armsFront:true,hat:barett,prop:`<g transform="translate(0,22)">${koffer}</g>`}))}
 ${speech(150,70,44,26,T(150,78,'Bonjour!',9,SKY),146,96)}${T(100,110,'?',22,VIO,'middle','beat')}`;

S.drop=`${room('#fff1c9','#e4b77a')}
 <g transform="translate(140,110)"><g style="animation:fallen 1.600s ease-in infinite"><g transform="scale(1.3)">${P.cup(SKY)}</g></g></g><style>@keyframes fallen{0%,15%{transform:translateY(-40px) rotate(0)}80%,100%{transform:translateY(60px) rotate(50deg)}}</style>
 <path d="M140,60 v20 M130,66 v14 M150,66 v14" stroke="${VIO}" stroke-width="3" stroke-linecap="round" stroke-dasharray="3 5"/>
 <ellipse cx="140" cy="182" rx="26" ry="5" fill="#bfe9ff"/>
 ${sh(60,192,32)}${at(60,190,.9,cat({eyes:'wide',mouth:'o',armR:-110,armsFront:true}))}${T(100,50,'oops!',15,RED,'middle','beat')}`;

S.blood=`${room('#e3fbf5','#bff0de')}
 <g class="beat"><path d="M150,30 q-22,30 0,44 q22,-14 0,-44 Z" fill="${RED}"/><path d="M144,56 q2,8 8,8" fill="none" stroke="#fff" stroke-width="2.500" stroke-linecap="round"/></g>
 ${sh(70,192,34)}${at(70,190,.94,cat({eyes:'happy',mouth:'wavy',armR:-110,armsFront:true,prop:`<g transform="translate(0,-6) rotate(-30)"><rect x="-12" y="-5" width="24" height="10" rx="5" fill="#f3d9a4"/><rect x="-4" y="-5" width="8" height="10" fill="#fff8e6"/></g>`}))}
 ${ring(108,110,18,RED)}
 ${at(160,194,.5,K('white',{mid:kittel,eyes:'happy',armL:110,armsFront:true}))}${heart(150,120,.7,RED,0)}`;

S.upon=`${bg('#fff1c9')}${floor(180,'#ffe08a')}${sh(110,188,52)}
 ${at(110,186,1,P.boxClosed(96,74))}
 ${at(110,114,.7,cat({eyes:'happy',armL:20,armR:-20}))}
 ${arrow(40,50,70,84,RED,6,'float')}<path d="M62,112 h96" stroke="${RED}" stroke-width="4" stroke-dasharray="6 6" class="glow"/>`;

S.agency=`${bg('#cdeeff')}${cloud(30,24,.7)}${floor(176,'#8fe0a8')}
 <rect x="40" y="60" width="120" height="116" rx="4" fill="#fff8e6"/><rect x="34" y="50" width="132" height="20" rx="4" fill="${SKY}"/>${T(100,65,'TRAVEL',12,'#fff')}
 <rect x="52" y="84" width="44" height="50" rx="3" fill="#bfe9ff"/><g transform="translate(74,122) scale(.36)">${cat({tail:false,mid:tie,eyes:'happy'})}</g>
 <rect x="108" y="84" width="40" height="28" rx="3" fill="${SUN}"/><path d="M114,104 l10,-12 8,8 6,-6 6,10 Z" fill="#fff"/><rect x="112" y="124" width="32" height="52" rx="3" fill="#b07a45"/>
 ${at(170,198,.44,K('orange',{eyes:'happy',prop:`<g transform="translate(0,22)">${koffer}</g>`,armR:-20}))}
 <g class="float"><path d="M10,30 l26,-5 4,4 -20,8 -3,8 -4,-7 -6,1 Z" fill="#fff" stroke="#cbc2e6" stroke-width="1.200"/></g>`;

S.push=`${room('#e3fbf5','#bff0de')}
 <g class="road" style="animation-direction:reverse"><path d="M-40,192 h320" stroke="#9fe6d2" stroke-width="4" stroke-dasharray="10 30" stroke-linecap="round"/></g>
 <g class="walkbob">${at(140,186,1,P.boxClosed(84,80))}</g>
 <g transform="translate(60,190) rotate(12)"><g class="walkbob"><g transform="scale(-.86,.86)">${cat({eyes:'closed',mouth:'big',armL:-90,armR:-90,armsFront:true,feet:'walk'})}</g></g></g>
 <path class="sweat" d="${tear(30,100)}" fill="${SKY}"/>${arrow(120,60,170,60,RED,7,'glow')}`;

S.nature=`${bg('#cdeeff')}${sun(160,28,10)}${cloud(40,24,.7)}
 <path d="M0,130 l40,-56 30,34 30,-50 44,60 56,-30 v42 Z" fill="#b9a0d6"/><path d="M100,58 l-12,20 8,-4 6,6 8,-8 Z" fill="#fff"/>
 ${hills('#8fe0a8','#6fd08f',150)}<path d="M120,200 q-10,-30 20,-50 q10,-8 60,-6 v56 Z" fill="#5cc3ff"/>
 ${kaktus(40,176,1)}${tree(84,170,1)}${flower(100,190,RED,0)}${flower(20,192,SUN,.5)}${bfly(130,110,ORA,0)}
 ${at(160,150,.4,cat({eyes:'closed',headCls:'tilt',armL:140,armR:-140,armsFront:true}))}`;

S.color=`${room('#fff8e6','#e4b77a')}${papel(14,6,194)}
 <path d="M70,96 q-30,10 -24,44 q10,36 60,30 q50,-8 44,-44 q-8,-40 -50,-34 q-20,2 -10,16 q6,10 -20,-12 Z" fill="#e4c58a" stroke="#b07a45" stroke-width="3"/>
 ${[[70,130,RED],[90,152,SUN],[118,154,MINT],[138,134,SKY],[124,108,VIO]].map(([x,y,c],i)=>`<circle class="pulse" style="transform-origin:${x}px ${y}px;animation-delay:${i*.2}s" cx="${x}" cy="${y}" r="10" fill="${c}"/>`).join('')}
 ${at(170,198,.5,cat({bow:false,hat:barett,eyes:'happy',mouth:'tongue',armL:150,armsFront:true}))}`;

S.recently=`${bg('#fff1c9')}${floor(184,'#ffe08a')}
 <g class="ring">${at(50,56,.7,P.clock(34,30))}</g><path d="M50,56 L50,34 A22,22 0 0 1 68,44 Z" fill="${RED}" opacity=".5"/>
 ${T(50,112,'5 min',13,RED)}
 <g transform="translate(150,184) scale(1.4)">${P.gift(VIO,SUN)}</g>${spark(176,130,8,SUN,0)}${spark(124,140,6,SUN,.5)}
 ${arcArrow(80,60,140,130,-20,VIO,3,'5 6')}
 ${sh(90,192,28)}${at(90,190,.76,cat({eyes:'happy',mouth:'open',armR:-100,armsFront:true}))}`;

S.store=`${bg('#cdeeff')}${cloud(30,22,.6)}${floor(178,'#e4b77a')}
 <rect x="24" y="70" width="152" height="108" rx="4" fill="#fff8e6"/><path d="M16,70 h168 l-10,-26 h-148 Z" fill="${RED}"/><path d="M44,44 v26 M72,44 v26 M100,44 v26 M128,44 v26 M156,44 v26" stroke="#fff" stroke-width="6"/>
 <rect x="50" y="26" width="100" height="18" rx="4" fill="${SUN}"/>${T(100,40,'TIENDA',12,INK)}
 ${papel(74,26,174)}
 <rect x="36" y="100" width="60" height="44" rx="3" fill="#bfe9ff"/>${taco(52,134,.7)}<g transform="translate(78,132) scale(.6)">${P.cup(SKY)}</g><rect x="112" y="104" width="44" height="74" rx="3" fill="#b07a45"/><circle cx="148" cy="142" r="3" fill="${SUN}"/>
 ${at(180,198,.44,cat({eyes:'happy',armL:30,propL:`<g transform="translate(-2,8)"><path d="M-14,-4 h28 l-4,16 h-20 Z" fill="#c98a4b"/><path d="M-10,-4 q10,-16 20,0" fill="none" stroke="#8a5a30" stroke-width="3"/></g>`}))}`;

S.reduce=`${bg('#e3fbf5')}${floor(176,'#bff0de')}
 ${[[30,100,RED],[76,76,ORA],[122,50,SUN],[168,26,MINT]].map(([x,h,c],i)=>`<rect x="${x-14}" y="${176-h}" width="28" height="${h}" rx="4" fill="${c}" opacity="${1-i*.12}"/>`).join('')}
 <path d="M30,60 L76,86 L122,112 L164,136" fill="none" stroke="${INK}" stroke-width="3" stroke-dasharray="5 6"/>${arrow(150,128,172,142,RED,6,'glow')}
 ${T(150,60,'−',40,RED,'middle','beat')}
 ${at(100,200,.46,cat({eyes:'happy',armR:150,armsFront:true}))}`;

S.sound=`${bg('#ece6ff')}${floor(184,'#d6ccf5')}
 <path d="M130,150 l10,-70 h30 l10,70 Z" fill="${SUN}" stroke="#e0a83a" stroke-width="3" class="wiggle" style="transform-origin:155px 80px"/><circle cx="155" cy="154" r="8" fill="#e0a83a"/><path d="M155,80 v-16" stroke="#b07a45" stroke-width="4"/>
 <path d="M118,100 q-12,14 0,30 M104,90 q-18,24 0,50 M186,100 q12,14 0,30" fill="none" stroke="${RED}" stroke-width="5" stroke-linecap="round" class="glow"/>
 ${T(155,40,'ding!',16,RED,'middle','beat')}
 ${sh(54,192,30)}${at(54,190,.86,cat({eyes:'wide',mouth:'o',headCls:'tilt',armL:120,armsFront:true}))}`;

S.note=`${room('#fff1c9','#e4b77a')}
 <rect x="110" y="20" width="76" height="130" rx="6" fill="#dfe6f2"/><rect x="110" y="20" width="76" height="52" rx="6" fill="#cfd8e6"/><rect x="176" y="34" width="5" height="24" rx="2" fill="#9aa8c0"/><rect x="176" y="86" width="5" height="40" rx="2" fill="#9aa8c0"/>
 <g class="sway" style="transform-origin:140px 84px"><rect x="120" y="84" width="46" height="46" fill="${SUN}"/><path d="M128,98 h30 M128,108 h30 M128,118 h18" stroke="${INK}" stroke-width="2.500" stroke-linecap="round"/>${heartS(154,120,.5,RED)}<circle cx="143" cy="86" r="4" fill="${RED}"/></g>
 ${ring(143,106,36,RED)}
 ${at(50,192,.84,cat({eyes:'happy',headCls:'tilt',armR:-110,armsFront:true}))}`;

S.fine=`${park()}${sun(40,30,12)}${cloud(150,26,.7)}
 ${speech(140,60,70,34,T(140,72,"I'm fine!",13,MINT.length?'#1f9c83':MINT),120,94)}
 ${sh(90,192,36)}${at(90,190,1,cat({eyes:'happy',mouth:'big',armR:-120,armsFront:true,prop:`<g transform="translate(0,-8)"><rect x="-6" y="-2" width="12" height="14" rx="4" fill="${INK}"/><rect x="-5" y="-18" width="8" height="18" rx="4" fill="${INK}"/></g>`}))}
 ${flower(160,188,RED,0)}${flower(30,190,SUN,.5)}<g class="beat">${check(170,120,9,6)}</g>`;

S.near=`${park()}${cloud(40,24,.7)}
 ${tree(130,186,2.4)}
 ${at(84,188,1,P.dog({happy:true}))}
 <path d="M96,196 h28" stroke="${RED}" stroke-width="4" stroke-linecap="round"/><path d="M96,190 v12 M124,190 v12" stroke="${RED}" stroke-width="4" stroke-linecap="round"/>
 <ellipse cx="110" cy="176" rx="60" ry="22" fill="none" stroke="${RED}" stroke-width="3" stroke-dasharray="7 7" class="glow"/>
 ${at(22,196,.44,cat({eyes:'happy',armR:-100,armsFront:true}))}`;

S.movement=`${bg('#fff3cf')}${floor(184,'#ffe08a')}
 ${[[30,.25],[66,.45],[102,.7]].map(([x,o],i)=>`<g opacity="${o}">${at(x,186,.7,cat({feet:'run',armL:[60,0,-60][i],armR:[-60,0,60][i],tail:false,bow:i==2}))}</g>`).join('')}
 <g transform="translate(146,186) scale(-.76,.76)"><g class="runbob">${cat({armL:0,armR:0,armLcls:'swingA',armRcls:'swingB',feet:'run',eyes:'happy',mouth:'open'})}</g></g>
 ${arcArrow(20,70,180,70,26,RED,5,'10 9')}<path d="M10,110 h40 M20,126 h30" stroke="${ORA}" stroke-width="4" stroke-linecap="round" class="glow"/>`;
