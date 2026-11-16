/* Tag 71–74: offer, enough, education, across, although · remember, second, maybe, toward, able · age, policy, everything, process, including · consider, appear, actually, buy, probably */
S.offer=`${park()}${cloud(100,24,.7)}
 ${sh(54,192,32)}${at(54,190,.9,cat({eyes:'happy',mouth:'open',armR:-92,armsFront:true}))}
 <g class="float"><g transform="translate(104,150)">${P.plate(24)}</g>${fishAt(104,138,1.5,0)}</g>
 ${at(160,190,.66,P.dog({happy:true}))}${heart(130,90,.9,RED,0)}`;

S.enough=`${bg('#fff1c9')}
 ${at(70,160,.92,cat({eyes:'happy',mouth:'w',armR:-96,armsFront:true,tail:false,mid:`<ellipse cx="0" cy="-22" rx="20" ry="20" fill="#454059"/>`}))}
 ${at(170,150,.5,K('orange',{bow:false,hat:P.hatChef,armL:110,armsFront:true,tail:false}))}
 ${floor(140,MINT)}<rect y="140" width="200" height="8" fill="#9be6d8"/>
 <path d="M30,168 h70 q0,26 -35,26 q-35,0 -35,-26 Z" fill="${SKY}"/><ellipse cx="65" cy="168" rx="35" ry="8" fill="#ffd98a"/>${fishAt(54,160,1.3,-12)}${fishAt(76,160,1.3,14)}${fishAt(65,154,1.3,0)}
 <g class="beat">${check(122,60,14,7)}</g>
 <ellipse cx="110" cy="118" rx="12" ry="13" fill="${CB}" stroke="${CO}" stroke-width="1.600"/>`;

S.education=`${bg('#e3fbf5')}${floor(184,'#bff0de')}
 ${[[150,170,RED],[130,150,SKY],[110,130,SUN],[90,110,MINT],[70,90,VIO]].map(([x,y,c])=>`<rect x="${x-40}" y="${y}" width="${200-x+40}" height="20" rx="3" fill="${c}"/><rect x="${x-32}" y="${y+6}" width="20" height="8" rx="2" fill="#fff" opacity=".8"/>`).join('')}
 <g class="float"><g transform="translate(150,150) scale(.7)">${doktorhut}</g></g>${spark(170,40,7,SUN,0)}
 ${at(56,92,.5,cat({eyes:'happy',armL:140,armR:-140,armsFront:true}),'hop')}
 ${arcArrow(20,170,40,110,10,RED,4,'6 8')}`;

S.across=`${bg('#8fe0a8')}<rect x="0" y="60" width="200" height="80" fill="#6b7a99"/><path d="M0,100 h200" stroke="#fff" stroke-width="3" stroke-dasharray="14 14"/>
 ${[70,86,102,118,134].map(x=>`<rect x="${x}" y="62" width="10" height="76" fill="#fff"/>`).join('')}
 ${tree(24,40,.6)}${tree(176,196,.7)}
 <g class="scroll" style="animation-duration:4s"><g transform="translate(260,92) scale(.44)">${P.car(RED)}</g></g>
 <g class="float" style="animation-duration:1.6s"><g transform="translate(106,150) scale(.56)">${cat({feet:'walk',eyes:'happy',armLcls:'slowA',armRcls:'slowB',armL:0,armR:0})}</g></g>
 ${arrow(160,150,160,50,RED,6,'glow')}`;

S.although=`${bg('#2d2a6e')}<circle cx="160" cy="40" r="20" fill="#ffe89a"/><circle cx="168" cy="34" r="18" fill="#2d2a6e"/>${spark(30,30,4,'#ffe89a',0)}${spark(90,50,3.500,'#ffe89a',.7)}${spark(60,90,4,'#ffe89a',1.2)}
 <path d="M0,176 q50,-18 100,0 t100,0 v24 h-200 Z" fill="#373278"/>
 <path d="M110,150 L190,110 V196 Z" fill="#ffe89a" opacity=".3" class="glow"/>
 ${at(70,190,.9,cat(Object.assign({armR:-72,armRcls:'bob',eyes:'happy',mouth:'open'},NL)))}<g transform="translate(130,190)"><g class="roll" style="animation-duration:1.4s">${P.ball(RED)}</g></g>`;

S.remember=`${bg('#ece6ff')}${floor(184,'#d6ccf5')}
 ${think(134,60,50,38,`<rect x="108" y="34" width="52" height="52" rx="3" fill="#f3d9a4"/><g transform="translate(134,84) scale(.36)">${K('orange',{eyes:'happy',tail:false})}</g>`,-1)}
 ${sh(60,190,34)}${at(60,188,.96,cat({eyes:'closed',armR:-150,armsFront:true,headCls:'tilt'}))}
 ${heart(110,120,.8,RED,0)}<path d="M82,96 q6,-6 12,0" fill="none" stroke="${RED}" stroke-width="3" stroke-linecap="round"/>`;

S.second=`${bg('#e3fbf5')}
 <rect x="68" y="124" width="64" height="76" rx="4" fill="${SUN}"/>${T(100,170,'1',30,'#fff')}
 <rect x="8" y="150" width="60" height="50" rx="4" fill="#cfd8e6"/>${T(38,186,'2',30,'#fff')}
 <rect x="132" y="166" width="60" height="34" rx="4" fill="#e0a070"/>${T(162,192,'3',22,'#fff')}
 ${at(100,126,.5,K('orange',{eyes:'happy'}))}${at(162,168,.44,K('grey'))}
 ${at(38,152,.62,cat({armL:130,armR:-130,armsFront:true,eyes:'happy',mouth:'open',mid:`<circle cx="0" cy="-30" r="9" fill="#dfe6f2" stroke="#9aa8c0" stroke-width="2"/><path d="M-12,-52 L0,-38 L12,-52" fill="none" stroke="${SKY}" stroke-width="4"/>`}),'hop')}
 ${ring(38,116,40,RED)}`;

S.maybe=`${bg('#ece6ff')}${floor(170,'#c98a4b')}<rect y="170" width="200" height="8" fill="#e0a868"/>
 <path d="M90,170 q-6,-40 20,-44 q20,-20 44,-4 q26,2 24,48 Z" fill="${SKY}" class="pulse" style="transform-origin:130px 170px"/><path d="M96,170 q10,-10 20,0 q10,-10 20,0 q10,-10 20,0 q10,-10 20,0" fill="none" stroke="#2f6fd0" stroke-width="3"/>
 ${think(60,52,44,30,`<g transform="translate(52,54) scale(2)">${P.fish}</g>${T(86,64,'?',26,RED)}`,1)}
 ${at(40,198,.7,cat({headCls:'tilt',armR:-150,armsFront:true,tail:false}))}`;

S.toward=`${park()}${cloud(40,26,.7)}
 <path d="M0,186 h200" stroke="#f3d9a4" stroke-width="16"/>
 <g class="road"><path d="M96,150 h60" stroke="${RED}" stroke-width="4" stroke-dasharray="8 12" stroke-linecap="round"/></g>${arrow(106,150,88,150,RED,5)}
 <g transform="translate(150,186)"><g class="runbob"><g transform="scale(.6)">${P.dog({happy:true})}</g></g></g>
 <circle class="puff" cx="186" cy="178" r="6" fill="#fff"/>
 ${sh(46,192,30)}${at(46,190,.88,cat({eyes:'happy',mouth:'big',armL:100,armR:-100}))}`;

const hantel=`<rect x="-34" y="-3" width="68" height="6" rx="3" fill="#9aa8c0"/><rect x="-40" y="-14" width="10" height="28" rx="3" fill="${INK}"/><rect x="30" y="-14" width="10" height="28" rx="3" fill="${INK}"/>`;
S.able=`${bg('#fff3cf')}<circle cx="100" cy="104" r="80" fill="#ffe7a3"/>${floor(184,'#ffe08a')}${sh(100,190,38)}
 ${at(100,186,1.02,cat({eyes:'happy',mouth:'big',armL:150,armR:-150,armsFront:true}))}
 <g class="hop"><g transform="translate(100,46) scale(1.4)">${hantel}</g></g>
 <g class="beat">${check(170,90,12,6)}</g>${spark(30,80,7,SUN,0)}`;

S.age=`${bg('#fff1c9')}${floor(184,'#ffe08a')}
 <path d="M14,184 V30 M8,150 h12 M8,110 h12 M8,70 h12" stroke="#9aa8c0" stroke-width="3" stroke-linecap="round"/>
 ${at(44,186,.3,cat({eyes:'happy',tail:false}))}${at(84,186,.5,cat({eyes:'happy',tail:false}))}${at(140,186,.78,cat({eyes:'happy',mouth:'open'}))}
 ${[[44,140,1],[84,116,2],[140,76,3]].map(([x,y,n],i)=>`<g class="float" style="animation-delay:${i*.3}s"><rect x="${x-10}" y="${y-8}" width="20" height="14" rx="3" fill="#fff8e6"/>${Array.from({length:n},(_,k)=>`<rect x="${x-8+k*6+(3-n)*3}" y="${y-18}" width="3" height="10" fill="${SKY}"/><circle cx="${x-6.500+k*6+(3-n)*3}" cy="${y-21}" r="2.500" fill="${ORA}"/>`).join('')}</g>`).join('')}
 ${arcArrow(44,170,150,170,-18,RED,4,'6 8')}`;

const regel=(y,inner)=>`<circle cx="62" cy="${y}" r="12" fill="#fff" stroke="${RED}" stroke-width="3"/>${inner}<path d="M84,${y} h70" stroke="#cbc2e6" stroke-width="5" stroke-linecap="round"/>`;
S.policy=`${bg('#e3fbf5')}
 <rect x="36" y="14" width="140" height="124" rx="8" fill="#fff" stroke="${SKY}" stroke-width="5"/><rect x="36" y="14" width="140" height="22" rx="8" fill="${SKY}"/>${T(106,31,'RULES',14,'#fff')}
 ${regel(58,check(62,58,5,3))}${regel(88,check(62,88,5,3))}${regel(118,cross(62,118,4,3))}
 ${floor(184,'#bff0de')}${at(30,194,.6,cat({hat:glasses,armR:-128,armsFront:true,prop:`<path d="M0,4 l10,-30" stroke="#b07a45" stroke-width="3" stroke-linecap="round"/>`}))}
 ${at(160,196,.4,K('orange',{eyes:'wide'}))}${at(186,196,.36,K('grey',{eyes:'wide'}))}`;

S.everything=`${bg('#fff1c9')}
 ${at(100,158,1,cat({eyes:'closed',mouth:'tongue',armL:-30,armR:30,armsFront:true,tail:false,mid:`<ellipse cx="0" cy="-24" rx="24" ry="24" fill="#454059"/>`}),'breathe')}
 ${floor(142,MINT)}<rect y="142" width="200" height="8" fill="#9be6d8"/>
 ${[[36,170,26],[100,178,30],[164,170,26]].map(([x,y,w])=>`<g transform="translate(${x},${y})">${P.plate(w)}</g><circle cx="${x-6}" cy="${y-6}" r="1.500" fill="#e0a83a"/><circle cx="${x+8}" cy="${y-4}" r="1.500" fill="#e0a83a"/>`).join('')}
 <path d="M90,172 l-14,6 M92,176 l-10,10" stroke="#cbc2e6" stroke-width="2" stroke-linecap="round"/>
 ${spark(30,40,6,SUN,0)}${spark(170,50,6,SUN,.6)}`;

S.process=`${bg('#ece6ff')}
 ${[[36,SKY],[100,SUN],[164,MINT]].map(([x,c],i)=>`<circle cx="${x}" cy="70" r="28" fill="#fff" stroke="${c}" stroke-width="4"/><circle cx="${x-20}" cy="46" r="10" fill="${c}"/>${T(x-20,51,String(i+1),13,'#fff')}`).join('')}
 <path d="M26,74 h20 l-4,-12 h-12 Z" fill="#fff8e6" stroke="#cbc2e6" stroke-width="1.500"/><ellipse cx="36" cy="60" rx="7" ry="4" fill="#fff8e6" stroke="#cbc2e6" stroke-width="1.500"/>
 <path d="M86,66 h28 q0,16 -14,16 q-14,0 -14,-16 Z" fill="${SKY}"/><g class="pen"><path d="M104,64 l8,-18" stroke="#b07a45" stroke-width="3" stroke-linecap="round"/></g>
 <rect x="150" y="66" width="28" height="18" rx="4" fill="#fff8e6"/><path d="M150,70 q4.600,6 9.300,0 q4.600,6 9.300,0 q4.600,6 9.300,0" fill="${RED}"/><path class="beat" d="M164,54 q-3,5 0,8 q3,-3 0,-8 Z" fill="${ORA}"/>
 ${arrow(66,70,72,70,RED,4,'glow')}${arrow(130,70,136,70,RED,4,'glow')}
 ${floor(184,'#d6ccf5')}${at(100,194,.66,cat({bow:false,hat:P.hatChef,eyes:'happy',armL:110,armR:-110,armsFront:true}))}`;

S.including=`${bg('#fff3cf')}${floor(184,'#ffe08a')}
 <rect x="8" y="96" width="184" height="98" rx="20" fill="none" stroke="${VIO}" stroke-width="4" stroke-dasharray="10 9"/>
 ${at(34,188,.5,K('orange',{eyes:'happy'}))}${at(74,188,.5,K('grey',{eyes:'happy'}))}${at(114,188,.5,K('white',{eyes:'happy'}))}
 ${at(160,188,.58,cat({eyes:'happy',mouth:'open',armL:-50,armR:50,armsFront:true}),'hop')}
 <g class="beat"><circle cx="160" cy="60" r="18" fill="${MINT}"/><path d="M160,50 v20 M150,60 h20" stroke="#fff" stroke-width="5" stroke-linecap="round"/></g>${arrow(160,82,160,108,RED,5)}`;

S.consider=`${bg('#ece6ff')}${floor(184,'#d6ccf5')}
 <path d="M130,40 v100" stroke="#b07a45" stroke-width="5" stroke-linecap="round"/><rect x="108" y="138" width="44" height="9" rx="4" fill="#8a5a30"/>
 <g class="sway" style="transform-origin:130px 50px"><path d="M84,50 h92" stroke="#b07a45" stroke-width="4" stroke-linecap="round"/><path d="M84,50 l-12,30 h24 Z M176,50 l-12,30 h24 Z" fill="none" stroke="#b07a45" stroke-width="1.800"/><path d="M70,80 a14,8 0 0 0 28,0 Z" fill="${SUN}"/><path d="M162,80 a14,8 0 0 0 28,0 Z" fill="${SUN}"/><g transform="translate(84,80) scale(.8)">${P.ball(RED)}</g><g transform="translate(176,80) scale(.6)">${P.book(SKY)}</g></g>
 ${T(36,50,'?',34,RED,'middle','beat')}
 ${at(46,192,.84,cat({headCls:'tilt',armR:-152,armsFront:true}))}`;

S.appear=`${bg('#3b2a4a')}${spark(30,40,6,SUN,0)}${spark(170,50,6,'#fff',.5)}${spark(150,110,5,SUN,1)}${spark(40,110,5,'#fff',1.4)}
 ${floor(180,'#8a5a30')}
 <clipPath id="zh"><rect x="0" y="0" width="200" height="130"/></clipPath>
 <g clip-path="url(#zh)">${at(100,166,.84,cat(Object.assign({armL:130,armR:-130,armsFront:true,eyes:'happy',mouth:'open',tail:false},NL)),'pop')}</g>
 <ellipse cx="100" cy="130" rx="46" ry="9" fill="${INK}" stroke="#7a6a8c" stroke-width="2"/><path d="M66,132 l6,48 h56 l6,-48 Z" fill="${INK}" stroke="#7a6a8c" stroke-width="2"/><rect x="68" y="140" width="64" height="8" fill="${RED}"/>
 <g class="wave" style="transform-origin:170px 150px"><path d="M170,150 l-14,-40" stroke="#fff" stroke-width="4" stroke-linecap="round"/>${star5(156,106,7,SUN)}</g>`;

S.actually=`${room('#ffe9d6','#ffd9bd')}
 <path d="M90,170 Q84,70 120,50 q-2,16 10,20 q8,-20 28,-16 q-8,14 2,22 q20,10 24,94 Z" fill="${INK}" opacity=".25"/><circle cx="130" cy="90" r="5" fill="#fff" opacity=".6"/><circle cx="152" cy="90" r="5" fill="#fff" opacity=".6"/><path d="M124,112 l8,8 8,-8 8,8 8,-8" fill="none" stroke="#fff" stroke-width="2" opacity=".6"/>
 <g transform="translate(150,186)"><g transform="scale(.4)">${P.dog({happy:true})}</g></g>${ring(144,170,26,RED)}
 ${arrow(96,150,116,164,RED,5,'float')}
 ${at(40,192,.76,cat({eyes:'happy',mouth:'open',armR:-80}))}`;

S.buy=`${park(172)}${cloud(30,24,.7)}
 <rect x="96" y="80" width="100" height="100" rx="6" fill="#fff8e6"/><path d="M88,80 h116 l-10,-26 h-96 Z" fill="${SKY}"/><path d="M108,54 v26 M132,54 v26 M156,54 v26 M180,54 v26" stroke="#fff" stroke-width="5"/>
 ${at(150,150,.5,K('orange',{eyes:'happy',mouth:'open',tail:false}))}<rect x="96" y="134" width="100" height="46" fill="#e4b77a"/>
 <g class="givemove">${coin(84,120,8)}</g>
 ${sh(46,192,30)}${at(46,190,.88,cat({eyes:'happy',armL:30,armR:-96,armsFront:true,propL:`<g transform="translate(-2,8)"><path d="M-14,-6 h28 l-3,20 h-22 Z" fill="${RED}"/><path d="M-8,-6 q8,-14 16,0" fill="none" stroke="#b52f29" stroke-width="3"/><g transform="translate(2,-8) rotate(-30)">${P.fish}</g></g>`}))}`;

S.probably=`${room('#ece6ff','#d6ccf5')}
 <path d="M110,20 h80 v160 h-80 q10,-80 0,-160 Z" fill="${RED}"/><path d="M130,20 q8,80 0,160 M154,20 q8,80 0,160 M176,20 q6,80 0,160" stroke="#b52f29" stroke-width="3" fill="none"/>
 <path class="tail" style="transform-origin:120px 176px" d="M120,176 q-26,-4 -24,-30" fill="none" stroke="${CB}" stroke-width="9" stroke-linecap="round"/>
 ${pawK(40,188,-20,'#b5addf')}${pawK(64,180,10,'#b5addf')}${pawK(88,188,-8,'#b5addf')}
 ${think(52,56,42,30,`<g transform="translate(46,74) scale(.34)">${cat({tail:false})}</g>${T(76,66,'?',24,RED)}`,1)}
 <rect x="20" y="110" width="70" height="10" rx="5" fill="#fff"/><rect class="glow" x="20" y="110" width="56" height="10" rx="5" fill="${MINT}"/>
 ${at(30,196,.4,K('orange',{headCls:'tilt'}))}`;
