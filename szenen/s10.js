/* Tag 27–30: after, use, how, our, work · first, well, way, even, new · want, because, any, these, day · most, us, very, thing, man */
S.after=`${bg('#e3fbf5')}${floor(180,'#bff0de')}
 <g opacity=".45">${at(44,150,.74,P.school)}</g>${check(44,60,10,6)}
 <path d="M14,176 h172" stroke="${VIO}" stroke-width="4" stroke-linecap="round"/><circle cx="44" cy="176" r="6" fill="${VIO}"/><circle cx="140" cy="176" r="8" fill="${RED}"/>
 ${arrow(84,110,110,110,RED,6,'glow')}
 ${sh(136,170,26,'shadow')}${at(136,168,.74,cat({armL:125,armR:-125,armsFront:true,eyes:'happy',mouth:'open'}),'hop')}
 <g transform="translate(176,150)"><g class="jump">${P.ball(RED)}</g></g>`;

S.use=`${bg('#ece6ff')}<circle cx="100" cy="100" r="82" fill="#f6f2ff"/>
 ${floor(184,'#d6ccf5')}${sh(100,190,38)}
 ${at(100,186,1.06,cat({eyes:'happy',armL:-34,armR:34,armsFront:true,mid:`<g transform="translate(0,-4) scale(1.15)">${P.phone}<circle class="glow" cx="0" cy="-20" r="5" fill="${RED}"/></g>`}))}
 ${[[150,80,0],[166,54,1],[40,70,.5]].map(([x,y,d])=>`<g transform="translate(${x},${y})"><g class="rise" style="animation-delay:${d}s"><rect x="-13" y="-9" width="26" height="18" rx="6" fill="#fff"/><path d="${heartP}" transform="translate(0,2) scale(.5)" fill="${RED}"/></g></g>`).join('')}`;

S.how=`${bg('#fff1c9')}
 ${floor(150,'#c98a4b')}<rect y="150" width="200" height="8" fill="#e0a868"/>
 <g transform="translate(108,112) scale(4.6)">${P.fish}</g>
 <rect x="22" y="160" width="160" height="20" rx="4" fill="${SUN}"/>${[30,46,62,78,94,110,126,142,158,174].map((x,i)=>`<path d="M${x},160 v${i%2?6:10}" stroke="${INK}" stroke-width="2"/>`).join('')}
 <path d="M30,62 h156 M30,62 l8,-6 M30,62 l8,6 M186,62 l-8,-6 M186,62 l-8,6" fill="none" stroke="${RED}" stroke-width="4" stroke-linecap="round" class="glow"/>
 ${T(100,44,'?',36,RED,'middle','beat')}
 ${at(26,150,.42,cat({eyes:'wide',mouth:'o',tail:false}),'peek')}`;

S.our=`${park()}${cloud(30,30,.7)}
 ${at(100,170,1.4,P.house())}${heartS(100,34,1.4,RED,'beat')}
 <ellipse cx="100" cy="170" rx="62" ry="30" fill="none" stroke="${VIO}" stroke-width="4" stroke-dasharray="9 8"/>
 ${at(76,194,.5,cat({eyes:'happy',armR:-62,mouth:'open'}))}${at(124,194,.5,K('orange',{eyes:'happy',armL:62,mouth:'open'}))}`;

const hammer=`<g class="wave"><path d="M0,2 v-30" stroke="#b07a45" stroke-width="5" stroke-linecap="round"/><rect x="-12" y="-38" width="26" height="12" rx="3" fill="#9aa8c0"/></g>`;
S.work=`${bg('#fff1c9')}<path d="M0,60 h200 M0,120 h200" stroke="#ffe39a" stroke-width="2"/>
 ${floor(184,'#ffe08a')}
 <rect x="104" y="140" width="90" height="12" rx="3" fill="#c98a4b"/><rect x="112" y="152" width="10" height="34" fill="#8a5a30"/><rect x="176" y="152" width="10" height="34" fill="#8a5a30"/>
 <path d="M130,140 v-10 M150,140 v-14 M170,140 v-10" stroke="#9aa8c0" stroke-width="3" stroke-linecap="round"/>
 ${spark(134,118,7,SUN,0)}${spark(150,104,6,ORA,.25)}
 ${sh(66,190,36)}${at(66,188,.98,cat({bow:false,hat:P.hatHard,eyes:'happy',armR:-118,armsFront:true,prop:hammer}))}`;

S.first=`${bg('#e3fbf5')}
 ${[[20,RED,0],[60,SUN,.9],[140,VIO,1.3],[180,SKY,.4],[100,MINT,2]].map(([x,c,d])=>`<rect class="conf" style="animation-delay:-${d}s" x="${x}" y="0" width="7" height="4" rx="1.5" fill="${c}"/>`).join('')}
 <rect x="68" y="124" width="64" height="76" rx="4" fill="${SUN}"/>${star5(100,156,14,'#fff')}
 <rect x="8" y="154" width="60" height="46" rx="4" fill="#cfd8e6"/><rect x="132" y="166" width="60" height="34" rx="4" fill="#e0a070"/>
 ${at(38,156,.48,K('orange',{eyes:'happy'}))}${at(162,168,.48,K('grey'))}
 ${at(100,126,.62,cat({armL:130,armR:-130,armsFront:true,eyes:'happy',mouth:'open',mid:`<circle cx="0" cy="-30" r="9" fill="${SUN}" stroke="#e0a83a" stroke-width="2"/><path d="M-12,-52 L0,-38 L12,-52" fill="none" stroke="${RED}" stroke-width="4"/>`}),'hop')}`;

const guitar=`<g transform="rotate(-24)"><rect x="-4" y="-78" width="8" height="58" rx="3" fill="#8a5a30"/><rect x="-7" y="-88" width="14" height="14" rx="3" fill="${INK}"/><ellipse cx="0" cy="-8" rx="20" ry="16" fill="${ORA}"/><ellipse cx="0" cy="-28" rx="14" ry="12" fill="${ORA}"/><circle cx="0" cy="-14" r="6" fill="#5a2a4a"/><path d="M0,-78 V4" stroke="#fff" stroke-width="1"/></g>`;
S.well=`${bg('#ece6ff')}<circle cx="100" cy="104" r="80" fill="#f6f2ff"/>
 <g class="twinkle">${star5(60,30,11,SUN)}</g><g class="twinkle" style="animation-delay:.4s">${star5(100,20,13,SUN)}</g><g class="twinkle" style="animation-delay:.8s">${star5(140,30,11,SUN)}</g>
 ${floor(184,'#d6ccf5')}${sh(100,190,38)}
 ${at(100,186,1.02,cat({eyes:'happy',mouth:'open',armL:60,armR:10,armRcls:'wave',armsFront:true,mid:`<g transform="translate(2,-16)">${guitar}</g>`,headCls:'tilt'}))}
 ${note(30,110,RED,0)}${note(170,100,VIO,.8)}${note(160,60,SKY,1.6)}`;

S.way=`${bg('#cdeeff')}${sun(30,28,10)}${floor(70,'#8fe0a8')}
 <path d="M120,200 C150,160 60,140 110,104 C140,84 150,80 150,74" fill="none" stroke="#f3d9a4" stroke-width="22" stroke-linecap="round"/>
 <g class="road"><path d="M120,200 C150,160 60,140 110,104 C140,84 150,80 150,74" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="8 12"/></g>
 ${at(154,76,.5,P.school)}${tree(30,110,.6)}${tree(180,150,.7)}
 <path d="M70,150 v-40" stroke="#b07a45" stroke-width="4" stroke-linecap="round"/><path d="M56,100 h30 l8,8 -8,8 h-30 Z" fill="${RED}"/>
 ${at(44,196,.7,cat({armL:-30,armR:30,armsFront:true,mid:`<g transform="translate(0,-28)"><path d="M-22,-12 l14,4 16,-4 14,4 v22 l-14,-4 -16,4 -14,-4 Z" fill="#fff" stroke="#cbc2e6" stroke-width="1.6"/><path d="M-12,2 q8,-8 16,0 t10,-4" fill="none" stroke="${RED}" stroke-width="2" stroke-dasharray="2 3"/></g>`}))}`;

S.even=`${park(170)}${cloud(100,26,.7)}
 ${at(30,192,.42,K('cream',{armR:-120,armRcls:'throwarm',armsFront:true,eyes:'happy'}))}
 <g transform="translate(46,140)"><g class="throwball"><g transform="scale(1.6)">${P.ball(RED)}</g></g></g>
 <path d="M48,130 q54,-70 108,10" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="3 9" stroke-linecap="round"/>
 <path d="M130,84 l8,-12 M140,92 l14,-6" stroke="${RED}" stroke-width="4" stroke-linecap="round" class="glow"/>
 ${sh(162,192,28)}${at(162,190,.78,cat({eyes:'wide',mouth:'o',armL:125,armR:-125,armsFront:true}))}`;

S.new=`${bg('#fff3cf')}<circle cx="112" cy="104" r="80" fill="#ffe7a3"/>
 ${floor(180,'#ffe08a')}${sh(116,188,70)}
 ${at(116,184,1.3,P.car(SKY))}
 <path d="M96,118 q-18,-22 -22,-4 q4,8 22,4 Z M96,118 q18,-22 22,-4 q-4,8 -22,4 Z" fill="${RED}"/><circle cx="96" cy="118" r="5" fill="#ff8a7a"/><path d="M96,120 v34" stroke="${RED}" stroke-width="5"/>
 ${spark(60,100,8,'#fff',0)}${spark(176,110,7,'#fff',.5)}${spark(150,80,6,SUN,1)}${spark(84,166,5,'#fff',1.4)}
 <g transform="translate(172,60) rotate(16)"><path d="M-16,-10 h24 l10,10 -10,10 h-24 Z" fill="${MINT}"/><circle cx="8" cy="0" r="2.5" fill="#fff"/></g>
 ${at(26,194,.5,cat({eyes:'spark',mouth:'open',armL:125,armR:-125,armsFront:true}),'hop')}`;

S.want=`${bg('#fff1c9')}
 <rect x="96" y="56" width="100" height="10" rx="5" fill="#c98a4b"/><path d="M110,66 l-8,14 M182,66 l8,14" stroke="#8a5a30" stroke-width="4" stroke-linecap="round"/>
 <g transform="translate(146,56)">${P.plate(34)}</g>${fishAt(146,44,2.2,0)}${ring(146,42,34,RED)}
 ${floor(184,'#ffe08a')}${sh(66,190,36)}
 ${at(66,188,.98,cat({eyes:'spark',mouth:'tongue',armL:30,armR:-160,armRcls:'bob',armsFront:true}),'hop')}
 ${heart(110,110,.9,RED,0)}${heart(24,70,.8,RED,.9)}`;

S.because=`${bg('#ffe9d6')}
 <g class="beat"><g transform="translate(150,52) scale(3.4)"><path d="${heartP}" fill="${RED}"/></g><path d="M139,40 q3,-4 6,0 M155,40 q3,-4 6,0" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/><path d="M142,50 q8,8 16,0" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/></g>
 ${floor(186,'#ffd9bd')}
 ${at(56,190,.8,cat({armL:-40,armR:-62,eyes:'happy',mouth:'open'}),'sway')}${at(104,190,.8,K('orange',{armL:62,armR:40,eyes:'happy'}),'sway')}
 ${arcArrow(90,96,128,66,20,VIO,5,'')}`;

S.any=`${room('#e6f1ff','#cfe3f7')}
 <rect x="104" y="20" width="84" height="164" rx="10" fill="#fff" stroke="#b9c9dd" stroke-width="3"/><rect x="112" y="28" width="68" height="148" rx="6" fill="#eaf7ff"/><path d="M112,76 h68 M112,126 h68" stroke="#b9c9dd" stroke-width="3"/>
 <path d="M104,20 l-22,10 v150 l22,4 Z" fill="#f4f8ff" stroke="#b9c9dd" stroke-width="3" stroke-linejoin="round"/>
 ${T(146,64,'?',30,RED,'middle','beat')}<circle cx="130" cy="120" r="2.5" fill="#c98a4b"/><path d="M160,28 q-6,14 12,16 M168,28 q-4,8 10,10" fill="none" stroke="#b9c9dd" stroke-width="1.6"/>
 ${sh(46,192,30)}${at(46,190,.86,cat({mouth:'wavy',armL:-30,armR:30,armsFront:true,mid:`<g transform="translate(0,-16)">${P.plate(26)}</g>`}))}`;

S.these=`${bg('#ece6ff')}<circle cx="110" cy="104" r="78" fill="#f6f2ff"/>
 ${floor(184,'#d6ccf5')}
 ${[[RED,0,0],[SKY,4,-16],[SUN,-3,-32],[MINT,3,-48],[VIO,-2,-64]].map(([c,dx,dy])=>`<rect x="${112+dx}" y="${168+dy}" width="64" height="15" rx="3" fill="${c}"/><rect x="${118+dx}" y="${172+dy}" width="18" height="7" rx="2" fill="#fff" opacity=".8"/>`).join('')}
 <rect x="102" y="92" width="86" height="96" rx="14" fill="none" stroke="${RED}" stroke-width="4" stroke-dasharray="9 8"/>
 ${sh(54,190,34)}${at(54,188,.94,cat({eyes:'happy',mouth:'open',armR:-84,armsFront:true}))}`;

S.day=`${bg('#cdeeff')}${sun(150,44,22)}${cloud(40,36,.9)}${cloud(100,70,.6)}
 <path d="M30,60 q4,-5 8,0 q4,-5 8,0" fill="none" stroke="${INK}" stroke-width="2" stroke-linecap="round" class="float"/>
 ${hills('#8fe0a8','#6fd08f',160)}
 <path d="M30,178 l40,-12 100,6 -30,22 h-90 Z" fill="${RED}"/><path d="M50,172 l-20,18 M90,170 l-20,24 M130,172 l-18,22" stroke="#fff" stroke-width="5" opacity=".8"/>
 <path d="M134,166 h32 l-4,20 h-24 Z" fill="#c98a4b"/><path d="M136,166 q14,-22 28,0" fill="none" stroke="#8a5a30" stroke-width="3"/>
 ${at(84,184,.8,cat({eyes:'happy',mouth:'open',armR:-125,armRcls:'wave',armsFront:true}))}
 ${flower(16,190,SUN,0)}${flower(186,188,VIO,.5)}`;

S.most=`${bg('#4a4496')}
 ${spark(20,30,4,'#fff',0)}${spark(186,150,4,'#fff',.8)}${spark(110,20,3.5,'#fff',1.3)}
 <path d="M0,176 q50,-18 100,0 t100,0 v24 h-200 Z" fill="#373278"/>
 <g opacity=".6">${star5(78,70,12,SUN)}${star5(112,62,17,SUN)}</g>
 <circle class="glow" cx="156" cy="62" r="38" fill="#ffe89a" opacity=".35"/>
 <g class="beat">${star5(156,62,28,SUN,`stroke="${SUN}" stroke-width="5"`)}<path d="M142,30 l4,-12 6,8 4,-10 4,10 6,-8 4,12 Z" fill="${RED}"/></g>
 <path d="M80,122 L130,84" stroke="#fff" stroke-width="3" stroke-dasharray="3 9" stroke-linecap="round" class="glow"/>
 ${at(46,190,.84,cat(Object.assign({armR:-128,armsFront:true,eyes:'spark',mouth:'open'},NL)))}`;

S.us=`${park()}${cloud(100,26,.7)}
 <path d="M100,200 q-6,-20 0,-40" fill="none" stroke="#f3d9a4" stroke-width="20" stroke-linecap="round"/>
 ${sh(68,190,30)}${sh(134,190,30)}
 ${at(68,188,.86,cat({armL:125,armLcls:'wave',armR:-50,armsFront:true,eyes:'happy',mouth:'open'}))}
 ${at(134,188,.86,K('orange',{armR:-125,armRcls:'wave',armL:50,armsFront:true,eyes:'happy',mouth:'open'}))}
 <ellipse cx="101" cy="134" rx="84" ry="62" fill="none" stroke="${RED}" stroke-width="4" stroke-dasharray="10 9"/>
 ${arrow(100,198,100,172,RED,6,'float')}`;

const burst=(x,y,c,d)=>`<g class="twinkle" style="animation-delay:${d}s" stroke="${c}" stroke-width="3.5" stroke-linecap="round">${[0,45,90,135,180,225,270,315].map(a=>`<path transform="rotate(${a} ${x} ${y})" d="M${x},${y-8} v-12"/>`).join('')}<circle cx="${x}" cy="${y}" r="4" fill="${c}" stroke="none"/></g>`;
S.very=`${bg('#fff3cf')}
 ${burst(34,40,RED,0)}${burst(164,34,VIO,.5)}${burst(100,22,SKY,1)}${burst(176,110,MINT,1.4)}${burst(22,116,ORA,.8)}
 ${floor(184,'#ffe08a')}${sh(100,190,40,'shadow')}
 ${at(100,186,1.04,cat({armL:140,armR:-140,armsFront:true,eyes:'happy',mouth:'big'}),'jump')}
 ${heart(60,130,.9,RED,0)}${heart(142,126,.9,RED,.7)}`;

S.thing=`${bg('#e3fbf5')}<circle cx="128" cy="110" r="64" fill="#f0fdf8"/>
 ${floor(184,'#bff0de')}${sh(130,190,40)}
 <g class="ring"><path d="M130,96 q-8,-10 0,-20 q8,-10 0,-20" fill="none" stroke="#9aa8c0" stroke-width="3"/><circle class="glow" cx="130" cy="52" r="6" fill="${RED}"/>
  <rect x="96" y="96" width="68" height="74" rx="20" fill="${VIO}"/><circle cx="130" cy="124" r="14" fill="#fff"/><circle class="blink" cx="130" cy="124" r="7" fill="${INK}"/>
  <rect x="108" y="148" width="44" height="8" rx="4" fill="${SUN}"/><path d="M96,130 h-14 v-14 M164,130 h14 v14" fill="none" stroke="#9aa8c0" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="108" y="170" width="12" height="16" rx="3" fill="#9aa8c0"/><rect x="140" y="170" width="12" height="16" rx="3" fill="#9aa8c0"/></g>
 <g class="spin" style="animation-duration:5s"><circle cx="176" cy="60" r="10" fill="none" stroke="${MINT}" stroke-width="5" stroke-dasharray="5 5"/></g>
 ${T(170,112,'?',26,RED,'middle','beat')}
 ${at(38,192,.76,cat({eyes:'wide',mouth:'o',headCls:'tilt',armR:-84,armRcls:'bob'}))}`;

const fedora=`<ellipse cx="0" cy="-140" rx="34" ry="7" fill="#5a4a6c"/><path d="M-22,-140 q0,-24 22,-24 q22,0 22,24 Z" fill="#5a4a6c"/><rect x="-22" y="-146" width="44" height="6" fill="${RED}"/>`;
S.man=`${park()}${sun(30,30,10)}${cloud(160,30,.8)}
 ${sh(112,190,32)}${at(112,188,1.06,P.person({shirt:SKY,stripe:'#2f6fd0',pants:'#3a2a4a',hair:'#3a2a4a',shoes:'#7a4a21',beard:true,hat:fedora}))}
 ${at(38,192,.5,cat({armR:-125,armRcls:'wave',armsFront:true,mouth:'open'}))}`;
