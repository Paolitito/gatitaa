/* Tag 156–160: conference, unit, style, adult, worry · range, mention, deep, edge, specific · writer, trouble, necessary, throughout, challenge · fear, shoulder, institution, middle, sea · dream, bar, property, instead, improve */
S.conference=`${room('#e6f1ff','#cfe3f7')}
 <rect x="20" y="10" width="160" height="26" rx="6" fill="${RED}"/>${T(100,29,'CONFERENCE',12,'#fff')}
 <rect x="110" y="46" width="76" height="50" rx="4" fill="#fff" stroke="#cbc2e6" stroke-width="2"/><path d="M120,84 l14,-14 12,8 18,-22" fill="none" stroke="${MINT}" stroke-width="3"/>
 ${pult(60,SKY)}${at(60,150,.56,cat({mid:tie,tail:false,eyes:'happy',mouth:'open',mouthCls:'chew',armR:-140,armsFront:true}))}${pult(60,SKY)}
 ${[110,140,170].map((x,i)=>at(x,198,.36,K(['orange','grey','cream'][i],{tail:false,eyes:'happy'}))).join('')}${[124,156].map((x,i)=>at(x,176,.3,K(['white','orange'][i],{tail:false}))).join('')}`;

S.unit=`${bg('#e3fbf5')}${floor(184,'#bff0de')}
 ${[0,1,2].map(r=>[0,1,2].map(c=>`<rect x="${70+c*28}" y="${50+r*28}" width="26" height="26" rx="4" fill="${r==2&&c==0?RED:'#cbc2e6'}"/>`).join('')).join('')}
 <g class="hop"><rect x="30" y="126" width="26" height="26" rx="4" fill="${RED}"/></g>${T(43,116,'1',16,RED,'middle','beat')}
 ${arcArrow(56,134,70,112,-8,VIO,3,'4 5')}
 ${at(160,200,.5,cat({hat:glasses,eyes:'happy',armL:140,armsFront:true}))}`;

S.style=`${room('#ece6ff','#d6ccf5')}
 <rect x="120" y="24" width="66" height="150" rx="28" fill="#bfe9ff" stroke="#b07a45" stroke-width="5"/>
 ${sh(70,192,36)}${at(70,190,1,cat({eyes:'happy',mouth:'w',headCls:'tilt',hat:fedora+glasses.replace(/#fff/g,INK),mid:`<path d="M-24,-46 q24,10 48,0 v36 h-48 Z" fill="${SKY}"/><path d="M-6,-44 l6,10 6,-10" fill="#fff"/>`,armR:-140,armsFront:true}))}
 ${spark(30,50,9,SUN,0)}${spark(110,40,7,SUN,.5)}${spark(150,140,7,'#fff',1)}${star5(30,120,8,SUN)}`;

S.adult=`${park()}${cloud(40,24,.7)}
 ${sh(70,192,36)}${at(70,190,1,cat({eyes:'happy',mid:tie,armR:-70,armL:30,propL:`<g transform="translate(0,-10)">${mappe}</g>`}))}
 ${sh(146,192,20)}${at(146,190,.5,cat({eyes:'happy',mouth:'open',armL:130,armsFront:true}))}
 ${ring(70,120,66,RED)}<path d="M176,190 v-110" stroke="${INK}" stroke-width="2"/><path d="M170,80 h12 M170,190 h12 M170,136 h8" stroke="${INK}" stroke-width="2"/>`;

S.worry=`${room('#e9efe0','#d7dfc8')}
 ${think(140,50,40,30,`<path d="M124,44 q16,-12 32,0 q-16,10 -32,0" fill="#9aa8c0"/><path d="M132,56 l-3,8 M140,56 l-3,8 M148,56 l-3,8" stroke="${SKY}" stroke-width="2" stroke-linecap="round"/>${T(164,44,'?',14,RED)}`,-1)}
 ${sh(70,192,34)}${at(70,190,.94,cat({eyes:'open',mouth:'wavy',armL:150,armR:-150,armsFront:true,hat:`<path d="M-24,-88 l12,-5 M24,-88 l-12,-5" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>`}),'shiver')}
 <path class="sweat" d="${tear(30,100)}" fill="${SKY}"/><path class="sweat" style="animation-delay:.6s" d="${tear(112,96)}" fill="${SKY}"/>`;

S.range=`${bg('#fff1c9')}${floor(184,'#ffe08a')}
 <path d="M20,90 h160" stroke="#cbc2e6" stroke-width="8" stroke-linecap="round"/><path d="M60,90 h80" stroke="${RED}" stroke-width="8" stroke-linecap="round" class="glow"/>
 <circle cx="60" cy="90" r="9" fill="#fff" stroke="${RED}" stroke-width="4"/><circle cx="140" cy="90" r="9" fill="#fff" stroke="${RED}" stroke-width="4"/>
 ${T(60,66,'3',16,RED)}${T(140,66,'8',16,RED)}${T(20,116,'0',11,'#9aa8c0')}${T(180,116,'10',11,'#9aa8c0')}
 ${[0,1,2,3,4,5,6,7,8,9,10].map(i=>`<path d="M${20+i*16},98 v6" stroke="${INK}" stroke-width="1.500"/>`).join('')}
 ${at(100,202,.56,cat({eyes:'happy',armL:130,armR:-130,armsFront:true}))}`;

S.mention=`${park()}${cloud(150,24,.7)}
 ${speech(70,44,100,50,`${T(40,54,'...and',10,'#9aa8c0')}<g class="beat"><g transform="translate(84,52) scale(1.600)">${P.fish}</g></g>${T(112,54,'...',12,'#9aa8c0')}`,60,90)}
 ${ring(84,50,20,RED)}
 ${sh(56,192,30)}${at(56,190,.84,cat({eyes:'happy',mouth:'open',mouthCls:'chew',armR:-110,armsFront:true}))}
 ${sh(150,192,28)}${at(150,190,.78,K('orange',{eyes:'spark',mouth:'o',armL:150,armsFront:true}))}`;

S.deep=`${bg('#cdeeff')}<path d="M0,40 q50,-10 100,0 t100,0 v160 h-200 Z" fill="#5cc3ff"/><path d="M0,110 h200 v90 h-200 Z" fill="#2f6fd0"/><path d="M0,160 h200 v40 h-200 Z" fill="#1f3f8f"/>
 <g class="swim">${fishAt(150,80,1.400,0)}</g><circle class="bubble" cx="60" cy="150" r="4" fill="#fff" opacity=".7"/><circle class="bubble" style="animation-delay:1s" cx="70" cy="170" r="3" fill="#fff" opacity=".7"/>
 <path d="M20,44 v140" stroke="#fff" stroke-width="3" stroke-dasharray="6 6"/>${arrow(20,170,20,190,'#fff',5,'glow')}
 <g class="float">${at(100,180,.5,cat(Object.assign({eyes:'wide',mouth:'o',armL:150,armR:-150,armsFront:true,hat:`<circle cx="0" cy="-70" r="50" fill="#bfe9ff" opacity=".25" stroke="#fff" stroke-width="3"/>`},NL)))}</g>
 ${T(170,180,'50 m',12,'#fff')}`;

S.edge=`${bg('#cdeeff')}${cloud(150,40,.7)}${sun(170,90,8)}
 <path d="M0,110 h110 v90 h-110 Z" fill="#b07a45"/><path d="M0,104 h110 v14 h-110 Z" fill="#6fd08f"/>
 <path d="M110,104 v96" stroke="${RED}" stroke-width="4" stroke-dasharray="7 7" class="glow"/>${arrow(160,60,120,98,RED,6,'float')}
 ${at(84,106,.6,cat({eyes:'wide',mouth:'wavy',armL:120,armR:-120,armsFront:true}),'shiver')}
 <circle class="snow" cx="116" cy="120" r="3" fill="#8a5a30"/><circle class="snow" style="animation-delay:-1.500s" cx="122" cy="120" r="2" fill="#8a5a30"/>`;

S.specific=`${bg('#ece6ff')}${floor(184,'#d6ccf5')}
 ${[[40,50],[80,40],[120,56],[160,44],[60,100],[140,104]].map(([x,y],i)=>`<g opacity="${i==2?1:.35}">${fishAt(x,y,1.400,0).replace(/#ff8a3c|#ffa53c/g,i==2?RED:'#9aa8c0')}</g>`).join('')}
 <g class="glow"><circle cx="120" cy="56" r="20" fill="none" stroke="${RED}" stroke-width="3"/><path d="M120,30 v14 M120,68 v14 M94,56 h14 M132,56 h14" stroke="${RED}" stroke-width="3"/></g>
 ${at(100,200,.6,cat({hat:glasses,eyes:'open',armR:-130,armRcls:'bob',armsFront:true}))}${T(40,150,'exactly this',10,RED)}`;

S.writer=`${room('#fff1c9','#e4b77a')}
 ${at(120,186,1.1,P.table(110))}<path d="M60,124 h120 v12 h-120 Z" fill="#c98a4b"/>
 <rect x="96" y="96" width="56" height="28" rx="4" fill="${INK}"/>${[0,1,2,3,4,5].map(i=>`<rect x="${100+i*8.500}" y="104" width="6" height="5" rx="1" fill="#fff"/><rect x="${100+i*8.500}" y="113" width="6" height="5" rx="1" fill="#fff"/>`).join('')}<rect x="104" y="62" width="40" height="36" fill="#fff" stroke="#cbc2e6" stroke-width="1.500"/><path d="M110,72 h28 M110,80 h28 M110,88 h16" stroke="${INK}" stroke-width="1.800"/>
 ${[0,1].map(i=>`<g transform="translate(${170+i*8},${116-i*4}) rotate(${i*20})"><ellipse cx="0" cy="0" rx="8" ry="7" fill="#fff" stroke="#cbc2e6" stroke-width="1.500"/></g>`).join('')}
 ${at(44,192,.8,cat({hat:glasses,eyes:'open',mouth:'tongue',armR:-70,armRcls:'bob',armsFront:true}))}${T(60,50,'tap tap',12,VIO,'middle','glow')}`;

S.trouble=`${room('#fff1c9','#e4b77a')}
 <g transform="translate(140,170) rotate(80)"><path d="M-14,10 q-8,-30 0,-44 h28 q8,14 0,44 Z" fill="${SKY}"/></g><ellipse cx="110" cy="182" rx="24" ry="5" fill="#bfe9ff"/><path d="M96,176 q-6,-14 -16,-12" fill="none" stroke="#3aa568" stroke-width="3"/><circle cx="78" cy="162" r="6" fill="${RED}"/>
 <path d="M150,100 q20,-20 30,0 q-20,20 -6,34 q16,10 -10,20" fill="none" stroke="${VIO}" stroke-width="3" stroke-linecap="round"/><circle cx="160" cy="150" r="12" fill="${VIO}"/>
 ${T(140,50,'uh-oh',16,RED,'middle','beat')}
 ${sh(46,192,30)}${at(46,190,.86,cat({eyes:'wide',mouth:'wavy',armL:150,armR:-150,armsFront:true}))}<path class="sweat" d="${tear(80,96)}" fill="${SKY}"/>`;

S.necessary=`${bg('#cdeeff')}<g class="cloud"><ellipse cx="100" cy="22" rx="80" ry="16" fill="#7a8aa6"/></g>
 ${[14,44,74,134,164,190].map((x,i)=>`<path class="drop" style="animation-delay:${i*.17}s" d="M${x},42 l-5,14" stroke="${SKY}" stroke-width="3" stroke-linecap="round"/>`).join('')}
 ${hills('#8fe0a8','#6fd08f',170)}
 <path d="M50,100 q54,-64 112,0 q-14,-9 -28,0 q-14,-9 -28,0 q-14,-9 -28,0 q-14,-9 -28,0 Z" fill="${RED}"/><path d="M106,66 v70" stroke="${INK}" stroke-width="3"/>
 ${at(92,190,.84,cat({eyes:'happy',armR:-150,armsFront:true}))}
 <g class="beat"><circle cx="170" cy="120" r="16" fill="${RED}"/>${T(170,128,'!',22,'#fff')}</g>`;

S.throughout=`${bg('#d9f7e1')}${sun(160,26,9)}
 <path d="M0,70 h200 v130 h-200 Z" fill="#8fe0a8"/><path d="M0,70 h200" stroke="#b07a45" stroke-width="3"/>${[10,50,90,130,170].map(x=>`<path d="M${x},58 v22" stroke="#b07a45" stroke-width="4" stroke-linecap="round"/>`).join('')}
 ${[[20,110],[60,100],[100,112],[140,100],[180,112],[40,150],[80,144],[120,152],[160,146],[20,186],[60,190],[140,190],[180,184]].map(([x,y],i)=>flower(x,y,[RED,SUN,VIO,ORA][i%4],i*.15)).join('')}
 <rect x="6" y="84" width="188" height="110" rx="14" fill="none" stroke="${RED}" stroke-width="3" stroke-dasharray="9 8" class="glow"/>
 ${at(100,196,.5,cat({eyes:'closed',mouth:'w',armL:140,armR:-140,armsFront:true}))}`;

S.challenge=`${bg('#cdeeff')}${cloud(30,50,.7)}${sun(170,26,9)}
 <path d="M40,200 L120,40 L200,200 Z" fill="#9aa8c0"/><path d="M120,40 l-20,40 12,-8 8,12 10,-14 10,10 Z" fill="#fff"/>
 <path d="M120,40 v-26" stroke="#b07a45" stroke-width="3"/><path class="flower" d="M120,14 l20,7 -20,7 Z" fill="${RED}"/>
 <path d="M60,190 q20,-50 40,-80" fill="none" stroke="${RED}" stroke-width="3" stroke-dasharray="6 7"/>
 ${at(56,196,.56,cat({eyes:'open',mouth:'w',armR:-140,armsFront:true,mid:backpack,hat:`<path d="M-24,-88 l14,5 M24,-88 l-14,5" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>`}))}
 ${T(30,110,'!',30,RED,'middle','beat')}`;

S.fear=`${room('#3b2a4a','#5a4a6c')}
 <path d="M150,0 v70" stroke="#cbc2e6" stroke-width="1.500"/><g class="sway" style="transform-origin:150px 0px"><g transform="translate(150,80)"><circle r="9" fill="${INK}" stroke="#cbc2e6" stroke-width="1.500"/><path d="M-8,-4 l-10,-6 M-9,2 l-11,2 M-6,7 l-8,8 M8,-4 l10,-6 M9,2 l11,2 M6,7 l8,8" stroke="#cbc2e6" stroke-width="1.800" stroke-linecap="round"/><circle cx="-3" cy="-1" r="1.800" fill="#fff"/><circle cx="3" cy="-1" r="1.800" fill="#fff"/><path d="M-3,4 q3,3 6,0" fill="none" stroke="#fff" stroke-width="1.200"/></g></g>
 ${sh(70,192,34)}${at(70,190,.94,cat(Object.assign({eyes:'wide',mouth:'o',armL:150,armR:-150,armsFront:true},NL)),'shiver')}
 ${T(30,50,'eek!',14,SUN,'middle','beat')}`;

S.shoulder=`${bg('#ece6ff')}<circle cx="100" cy="100" r="80" fill="#f6f2ff"/>${floor(184,'#d6ccf5')}${sh(100,190,40)}
 ${at(100,188,1.06,cat({eyes:'happy',mouth:'open'}))}
 <g class="float"><g transform="translate(132,104)"><ellipse cx="0" cy="0" rx="9" ry="7" fill="${SKY}"/><circle cx="7" cy="-5" r="5" fill="${SKY}"/><path d="M11,-5 l6,2 -6,2 Z" fill="${ORA}"/><circle cx="8" cy="-6" r="1.200" fill="${INK}"/></g></g>
 ${ring(130,116,20,RED)}${arrow(180,60,150,96,RED,6,'float')}`;

S.institution=`${bg('#cdeeff')}${cloud(30,24,.7)}${cloud(170,36,.6)}
 <path d="M24,84 L100,40 L176,84 Z" fill="#f4f7fb" stroke="#b9c4d8" stroke-width="2"/><circle cx="100" cy="66" r="8" fill="${SUN}"/>
 <rect x="28" y="84" width="144" height="12" fill="#dfe6f2"/>${T(100,94,'MUSEUM',9,INK)}${[40,66,92,118,144].map(x=>`<rect x="${x}" y="98" width="10" height="58" rx="3" fill="#f4f7fb" stroke="#b9c4d8" stroke-width="1.600"/>`).join('')}
 <rect x="22" y="156" width="156" height="10" fill="#dfe6f2"/><rect x="14" y="166" width="172" height="10" fill="#cfd8e6"/>${floor(176,'#8fe0a8')}
 ${at(40,198,.44,cat({eyes:'happy',armR:-110,armsFront:true}))}${at(160,198,.4,K('orange',{eyes:'happy'}))}`;

S.middle=`${bg('#fff1c9')}${floor(184,'#ffe08a')}
 ${at(36,186,.6,K('orange',{eyes:'happy'}))}${at(164,186,.6,K('grey',{eyes:'happy'}))}
 ${sh(100,192,30)}${at(100,188,.76,cat({eyes:'happy',mouth:'open',armL:130,armR:-130,armsFront:true}),'hop')}
 ${ring(100,140,46,RED)}${arrow(100,20,100,70,RED,7,'float')}
 <path d="M20,100 h54 M126,100 h54" stroke="${VIO}" stroke-width="3" stroke-dasharray="5 6"/>`;

S.sea=`${bg('#cdeeff')}${sun(160,30,12)}${cloud(40,24,.7)}
 <path d="M0,90 q25,-10 50,0 t50,0 t50,0 t50,0 v110 h-200 Z" fill="#5cc3ff"/><path d="M0,130 q25,-8 50,0 t50,0 t50,0 t50,0 v70 h-200 Z" fill="#2f6fd0" opacity=".5"/>
 <g class="sway" style="transform-origin:100px 110px"><path d="M60,104 h80 l-12,22 h-56 Z" fill="${RED}"/><path d="M100,104 v-50 l30,40 Z" fill="#fff"/>${at(84,104,.3,cat({tail:false,eyes:'happy',armR:-125,armRcls:'wave',armsFront:true}))}</g>
 <g class="swim">${fishAt(40,160,1.400,0)}</g>${fishAt(150,176,1,0)}<path class="ripple" d="M20,112 q10,-6 20,0 M160,116 q10,-6 20,0" fill="none" stroke="#fff" stroke-width="2"/>`;

S.dream=`${bg('#2d2a6e')}${spark(20,24,4,'#fff',0)}${spark(180,30,4,'#fff',.6)}
 ${think(120,54,60,40,`<path d="M70,84 q50,-12 100,0 v6 h-100 Z" fill="#8fe0a8"/>${pyramide(146,84,.4)}${at(100,84,.24,cat({tail:false,eyes:'happy'}))}${at(118,84,.22,K('orange',{tail:false,eyes:'happy'}))}${heartS(110,36,.7,RED,'beat')}<circle cx="156" cy="34" r="7" fill="${SUN}"/>`,-1)}
 ${floor(176,'#1f1b4d')}<ellipse cx="80" cy="178" rx="64" ry="14" fill="${VIO}"/><ellipse cx="80" cy="172" rx="56" ry="10" fill="#7b55d9"/>
 ${at(80,174,.8,cat(Object.assign({eyes:'closed',mouth:'w',armL:20,armR:-20},NL)),'breathe')}
 ${T(150,140,'z z',16,'#fff','middle','zz')}`;

S.bar=`${room('#fff1c9','#e4b77a')}${papel(10,6,194)}
 <rect x="30" y="120" width="170" height="60" fill="#8a5a30"/><rect x="24" y="112" width="176" height="12" rx="4" fill="#b07a45"/>
 ${[[70,RED],[104,SUN],[138,MINT]].map(([x,c],i)=>`<path d="M${x-9},84 h18 l-3,28 h-12 Z" fill="${c}"/><path d="M${x+2},84 l6,-14" stroke="${INK}" stroke-width="1.500"/><circle cx="${x-4}" cy="82" r="4" fill="${[SUN,RED,ORA][i]}"/>`).join('')}
 ${at(170,112,.5,K('orange',{tail:false,eyes:'happy',mid:tie,armL:120,armsFront:true}))}<rect x="140" y="112" width="60" height="12" fill="#b07a45"/>
 ${T(100,60,'JUGOS',14,RED)}
 ${at(30,196,.6,cat({eyes:'happy',mouth:'tongue',armR:-110,armsFront:true}))}`;

S.property=`${park(170)}${sun(30,24,9)}
 <g transform="translate(110,170) scale(1.1)">${P.house(RED,'#fff8e6')}</g>${tree(170,170,1)}
 <path d="M40,186 h150" stroke="#b07a45" stroke-width="3"/>${[44,72,100,128,156,184].map(x=>`<path d="M${x},172 v20" stroke="#b07a45" stroke-width="4" stroke-linecap="round"/>`).join('')}
 <path d="M60,150 v30" stroke="#8a5a30" stroke-width="3"/><rect x="38" y="130" width="46" height="22" rx="3" fill="#fff" stroke="${RED}" stroke-width="2"/>${T(61,146,'MINE',10,RED)}
 ${at(26,198,.5,cat({eyes:'happy',mouth:'open',armR:-110,armsFront:true,prop:`<g transform="translate(2,-4)">${keyP}</g>`}))}`;

S.instead=`${room('#e3fbf5','#bff0de')}
 ${at(120,186,1.1,P.table(110))}<path d="M60,124 h130 v12 h-130 Z" fill="#c98a4b"/>
 <g opacity=".4"><path d="M84,84 h24 l-3,40 h-18 Z" fill="#fff" stroke="#cbc2e6" stroke-width="2"/></g>${cross(96,104,12,5)}
 <g class="hop"><path d="M140,84 h24 l-3,40 h-18 Z" fill="#fff" opacity=".8" stroke="#cbc2e6" stroke-width="2"/><path d="M142,100 h20 l-2,22 h-16 Z" fill="${SKY}"/></g><g class="beat">${check(152,66,8,5)}</g>
 ${arcArrow(100,74,144,74,-16,VIO,4,'5 6')}
 ${at(36,192,.76,cat({eyes:'happy',armR:-110,armsFront:true}))}`;

S.improve=`${bg('#fff3cf')}${burst(30,40,RED,0)}${burst(176,36,VIO,.6)}${papel(8,10,120)}
 ${[[30,24],[70,50],[110,84],[150,124]].map(([x,h],i)=>`<rect class="grow" style="transform-origin:${x+16}px 176px;transform-box:view-box;animation-delay:${i*.3}s" x="${x}" y="${176-h}" width="32" height="${h}" rx="4" fill="${[SKY,MINT,SUN,RED][i]}"/>`).join('')}
 ${floor(176,'#ffe08a')}
 <path d="M40,140 L84,116 L124,82 L160,44" fill="none" stroke="${INK}" stroke-width="3" stroke-dasharray="5 6"/>${arrow(150,54,168,36,RED,6,'glow')}
 ${at(166,54,.4,cat({eyes:'happy',mouth:'big',armL:140,armR:-140,armsFront:true}),'hop')}
 ${[60,100,140].map((x,i)=>`<g class="twinkle" style="animation-delay:${i*.2}s">${star5(x,190,7,SUN)}</g>`).join('')}`;
