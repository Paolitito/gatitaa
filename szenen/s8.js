/* Tag 19–22: up, out, if, about, who · get, which, go, me, when · make, can, like, time, no · just, him, know, take, people */
S.up=`${bg('#cdeeff')}${cloud(40,40,.8)}${cloud(170,90,.6)}
 <rect x="150" y="0" width="50" height="200" fill="#ffd98a"/><rect x="160" y="30" width="26" height="26" rx="4" fill="#bfe9ff" stroke="#fff" stroke-width="3"/><rect x="160" y="110" width="26" height="26" rx="4" fill="#bfe9ff" stroke="#fff" stroke-width="3"/>
 ${floor(186,'#8fe0a8')}
 <path d="M84,196 V10 M136,196 V10" stroke="#b07a45" stroke-width="7" stroke-linecap="round"/><path d="M84,30 h52 M84,58 h52 M84,86 h52 M84,114 h52 M84,142 h52 M84,170 h52" stroke="#c98a4b" stroke-width="6" stroke-linecap="round"/>
 ${at(110,144,.8,cat({armL:150,armR:-150,armsFront:true,eyes:'happy'}),'float')}
 ${arrow(34,170,34,60,RED,8,'float')}`;

S.out=`${bg('#e3fbf5')}<circle cx="130" cy="80" r="60" fill="#f0fdf8"/>
 ${floor(184,'#bff0de')}${sh(60,190,44)}${sh(146,190,26,'shadow')}
 ${at(60,140,1,P.boxBack(80))}${at(60,140,1,P.boxFront(80,46))}
 ${arcArrow(66,128,128,84,34,RED,5,'8 10')}
 ${at(146,186,.86,cat({armL:125,armR:-125,armsFront:true,eyes:'happy',mouth:'open'}),'jump')}
 ${spark(96,40,6,SUN,0)}${spark(180,60,6,VIO,.7)}`;

const panel=(x,y,w,h)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="#fff" stroke="#cbc2e6" stroke-width="2"/>`;
S.if=`${bg('#fff1c9')}
 ${panel(8,40,84,120)}${panel(108,40,84,120)}
 <g transform="translate(52,146) rotate(9) scale(-.56,.56)"><g class="runbob">${cat({armL:0,armR:0,armLcls:'swingA',armRcls:'swingB',feet:'run',mouth:'open'})}</g></g>
 <path d="M14,90 h14 M12,104 h10" stroke="${VIO}" stroke-width="3" stroke-linecap="round" class="glow"/>
 ${at(150,150,.56,cat({eyes:'closed',mouth:'big',armL:30,armR:-30}))}
 <g transform="translate(176,58) scale(.6)">${sun(0,0,14)}</g>
 <path class="sweat" d="${tear(126,96)}" fill="${SKY}"/><path class="sweat" style="animation-delay:.6s" d="${tear(174,104)}" fill="${SKY}"/>
 ${arrow(94,100,106,100,RED,6,'glow')}`;

S.about=`${bg('#ece6ff')}<circle cx="100" cy="100" r="86" fill="#f6f2ff"/>
 ${at(158,170,.66,cat({tail:false,eyes:'happy'}),'peek')}
 <rect x="44" y="26" width="108" height="150" rx="8" fill="${SKY}"/><rect x="44" y="26" width="14" height="150" fill="#2f6fd0"/>
 <rect x="66" y="42" width="76" height="78" rx="8" fill="#bfe9ff"/>
 <g transform="translate(104,82)"><g class="swim"><g transform="scale(3)">${P.fish}</g></g></g>
 <circle class="bubble" cx="126" cy="64" r="3" fill="#fff"/><circle class="bubble" style="animation-delay:1.2s" cx="80" cy="100" r="2.5" fill="#fff"/>
 <path d="M70,138 h66 M70,152 h44" stroke="#fff" stroke-width="6" stroke-linecap="round" opacity=".85"/>
 ${paw(152,96,8)}`;

S.who=`${room('#fff1c9','#e4b77a')}
 ${at(128,180,1.4,P.door(MINT))}
 <rect x="110" y="56" width="36" height="40" rx="6" fill="#bfe9ff" stroke="#fff" stroke-width="3"/>
 <path d="M116,96 v-14 q0,-12 12,-12 q12,0 12,12 v14 Z M119,72 l1,-10 6,6 Z M137,72 l-1,-10 -6,6 Z" fill="${INK}" opacity=".55" class="peek"/>
 ${T(128,40,'?',34,RED,'middle','beat')}
 <path d="M176,100 l10,-6 M178,112 h12 M176,124 l10,6" stroke="${VIO}" stroke-width="4" stroke-linecap="round" class="glow"/>
 ${sh(44,192,28)}${at(44,190,.8,cat({eyes:'wide',mouth:'o',headCls:'tilt'}))}`;

S.get=`${bg('#fff3cf')}<circle cx="100" cy="100" r="82" fill="#ffe7a3"/>
 ${floor(184,'#ffe08a')}${sh(100,190,38)}
 <g class="hop"><path d="M76,10 q24,-16 48,0 l-18,30 h-12 Z" fill="${SKY}" opacity=".85"/><path d="M82,14 l14,26 M118,14 l-14,26" stroke="#fff" stroke-width="1.6"/>${at(100,72,1.5,P.gift(VIO,SUN))}</g>
 ${at(100,188,.98,cat({armL:135,armR:-135,armsFront:true,eyes:'spark',mouth:'open'}))}
 ${spark(30,70,6,RED,0)}${spark(172,60,6,RED,.7)}`;

S.which=`${bg('#fff1c9')}
 <rect x="10" y="104" width="180" height="10" rx="5" fill="#c98a4b"/>
 ${[[42,RED,0],[100,SKY,.6],[158,MINT,1.2]].map(([x,c,d])=>`${at(x,104,1.5,P.cup(c))}<circle class="glow" style="animation-delay:${d}s" cx="${x+3}" cy="80" r="34" fill="none" stroke="${VIO}" stroke-width="4"/>`).join('')}
 ${T(100,40,'?',36,RED,'middle','beat')}
 ${floor(186,'#ffe08a')}${at(100,194,.62,cat({eyes:'wide',mouth:'o',headCls:'tilt',armL:60,armR:-60}))}`;

S.go=`${park(160)}${cloud(120,30,.8)}
 ${floor(172,'#6b7a99')}<g class="road"><path d="M-40,188 h320" stroke="#fff" stroke-width="4" stroke-dasharray="18 22"/></g>
 <path d="M30,172 v-70" stroke="${INK}" stroke-width="6" stroke-linecap="round"/><rect x="16" y="38" width="28" height="70" rx="10" fill="${INK}"/><circle cx="30" cy="54" r="8" fill="#5a4a6c"/><circle cx="30" cy="74" r="8" fill="#5a4a6c"/><circle cx="30" cy="94" r="8" fill="#4fe08a"/><circle class="glow" cx="30" cy="94" r="14" fill="#4fe08a" opacity=".45"/>
 <g transform="translate(110,186) scale(-.8,.8)"><g class="walkbob">${cat({armL:0,armR:0,armLcls:'slowA',armRcls:'slowB',feet:'walk',eyes:'happy',mid:backpack})}</g></g>
 ${arrow(150,110,188,110,MINT,8,'glow')}`;

S.me=`${park(170)}${sun(30,30,10)}
 ${flipAt(164,190,.6,K('orange',{armR:-120,armsFront:true,eyes:'happy'}))}
 <g transform="translate(112,128)"><g class="hop">${P.ball(RED)}</g></g>
 <path d="M146,116 Q118,84 92,112" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="3 9" stroke-linecap="round"/>
 ${sh(56,192,32)}${at(56,190,.92,cat({armL:100,armR:-100,eyes:'happy',mouth:'open'}))}
 ${arrow(20,22,40,56,RED,6,'float')}`;

S.when=`${bg('#fff1c9')}<circle cx="128" cy="96" r="70" fill="#ffe7a3"/>
 ${at(130,150,1,P.clock(50,40))}
 ${T(40,56,'?',40,RED,'middle','beat')}
 ${floor(160,MINT)}<rect y="160" width="200" height="7" fill="#9be6d8"/>
 <g transform="translate(130,188)">${P.plate(40)}</g>
 ${at(46,194,.7,cat({mouth:'wavy',armL:60,armR:-60,prop:knife,propL:fork,tail:false}))}`;

S.make=`${bg('#fff1c9')}<path d="M0,40 h200 M0,80 h200 M0,120 h200 M40,0 v140 M80,0 v140 M120,0 v140 M160,0 v140" stroke="#ffe39a" stroke-width="2"/>
 <path d="M140,22 h46" stroke="#b07a45" stroke-width="4" stroke-linecap="round"/><path d="M150,22 v14 a6,8 0 0 0 12,0 v-14" fill="#b9c4d8"/><path d="M172,22 v22" stroke="#b9c4d8" stroke-width="3"/><circle cx="172" cy="48" r="7" fill="none" stroke="#b9c4d8" stroke-width="3"/>
 ${at(88,176,.98,cat({bow:false,hat:P.hatChef,eyes:'happy',armL:40,armR:-30,armsFront:true,tail:false,mouth:'tongue'}))}
 ${floor(144,'#c98a4b')}<rect y="144" width="200" height="8" fill="#e0a868"/>
 <path d="M96,150 h70 q0,34 -35,34 q-35,0 -35,-34 Z" fill="${SKY}"/><ellipse cx="131" cy="150" rx="35" ry="8" fill="#ffe9a8"/>
 <g transform="translate(126,144)"><g class="pen"><path d="M0,0 L-14,-34" stroke="#b07a45" stroke-width="5" stroke-linecap="round"/><ellipse cx="2" cy="4" rx="7" ry="5" fill="#b07a45"/></g></g>
 <circle class="puff" cx="150" cy="138" r="6" fill="#fff"/><circle class="puff" style="animation-delay:1s" cx="110" cy="136" r="5" fill="#fff"/>
 <ellipse cx="40" cy="160" rx="16" ry="9" fill="#fff8e6"/><ellipse cx="60" cy="168" rx="10" ry="7" fill="#fff8e6"/>`;

S.can=`${bg('#cdeeff')}${sun(30,30,10)}
 <g class="scroll" style="animation-duration:12s">${cloud(60,60,.9,'')}${cloud(170,130,.7,'')}${cloud(260,60,.9,'')}${cloud(370,130,.7,'')}</g>
 <path d="M0,190 q50,-10 100,0 t100,0 v10 h-200 Z" fill="#8fe0a8"/>
 ${sh(100,192,24,'shadow')}
 <g transform="translate(100,160)"><g class="float">
  <path class="flower" d="M-22,-48 Q-48,-10 -44,26 Q-22,12 0,24 Q22,12 44,26 Q48,-10 22,-48 Z" fill="${RED}"/>
  ${cat({armL:-46,armR:46,armsFront:true,eyes:'happy',mouth:'open',mid:`<g transform="translate(0,-30)">${star5(0,0,9,SUN)}</g>`})}
 </g></g>
 ${arrow(170,150,170,90,RED,6,'float')}${spark(40,90,6,SUN,0)}${spark(150,50,6,'#fff',.6)}`;

S.like=`${bg('#ffe9d6')}<circle cx="100" cy="100" r="82" fill="#ffdcc0"/>
 ${floor(184,'#ffd9bd')}${sh(100,190,38)}
 ${at(100,186,1.04,cat({eyes:'spark',mouth:'tongue',armL:-30,armR:30,armsFront:true,mid:`<g transform="translate(0,-14)">${P.plate(30)}<g transform="translate(0,-12) scale(1.6)">${P.fish}</g></g>`}))}
 ${heart(40,70,1.2,RED,0)}${heart(160,60,1,RED,.8)}${heart(150,110,.7,'#ff8a7a',1.5)}${heart(54,116,.7,'#ff8a7a',2)}`;

S.time=`${bg('#e3fbf5')}<circle cx="110" cy="100" r="82" fill="#f0fdf8"/>
 ${floor(186,'#bff0de')}${sh(112,190,46)}
 <g class="ring"><circle cx="78" cy="42" r="14" fill="${RED}"/><circle cx="146" cy="42" r="14" fill="${RED}"/><path d="M84,170 l-10,16 M140,170 l10,16" stroke="${INK}" stroke-width="7" stroke-linecap="round"/>${at(112,176,1,P.clock(62,300))}<rect x="107" y="38" width="10" height="12" rx="3" fill="${INK}"/></g>
 <path d="M36,40 l-12,-8 M30,58 h-14 M190,40 l8,-6" stroke="${VIO}" stroke-width="4" stroke-linecap="round" class="glow"/>
 ${at(26,194,.46,cat({eyes:'wide',mouth:'o',armL:150,armR:-150,armsFront:true}))}`;

S.no=`${bg('#ffe9d6')}<circle cx="96" cy="104" r="80" fill="#ffdcc0"/>
 ${floor(184,'#ffd9bd')}${sh(92,190,38)}
 <g class="beat"><circle cx="160" cy="48" r="28" fill="#fff"/>${cross(160,48,14,8)}</g>
 <g transform="translate(160,186)">${P.plate(30)}<circle cx="-6" cy="-16" r="9" fill="#4fc27f"/><circle cx="6" cy="-18" r="9" fill="#62d08f"/><circle cx="0" cy="-24" r="8" fill="#4fc27f"/><rect x="-3" y="-12" width="6" height="8" fill="#9be8b4"/></g>
 ${at(92,186,1.02,cat({eyes:'closed',mouth:'wavy',armL:20,armR:-92,armsFront:true,headCls:'shiver'}))}
 <ellipse cx="140" cy="146" rx="13" ry="12" fill="${CB}" stroke="${CO}" stroke-width="1.6"/>`;

S.just=`${bg('#fff1c9')}
 ${at(100,158,.92,cat({mouth:'wavy',armL:70,armR:-70,prop:knife,propL:fork,tail:false}))}
 ${floor(140,MINT)}<g fill="#fff" opacity=".35">${[0,40,80,120,160].map(x=>`<rect x="${x}" y="140" width="20" height="20"/><rect x="${x+20}" y="160" width="20" height="20"/><rect x="${x}" y="180" width="20" height="20"/>`).join('')}</g>
 <g transform="translate(100,180)">${P.plate(80)}</g>
 <g transform="translate(100,168) scale(.9)">${P.fish}</g>${ring(100,168,18,RED)}
 ${arrow(160,120,122,156,RED,4,'float')}`;

S.him=`${park()}${cloud(100,30,.8)}
 ${sh(44,192,28)}${at(44,190,.8,cat({armR:-92,eyes:'happy'}))}
 <g transform="translate(78,160)"><g class="givemove">${P.ball(RED)}</g></g>
 ${sh(150,190,28)}${at(150,188,.9,P.person({wave:false,happy:true}))}
 ${arrow(192,20,172,50,RED,6,'float')}`;

S.know=`${bg('#fff3cf')}<circle cx="100" cy="110" r="76" fill="#ffe7a3"/>
 ${floor(184,'#ffe08a')}${sh(100,190,38)}
 ${at(100,54,1.1,P.bulb)}
 <path d="M60,26 l-12,-8 M140,26 l12,-8 M100,2 v-2 M52,46 h-14 M148,46 h14" stroke="${SUN}" stroke-width="4" stroke-linecap="round" class="glow"/>
 ${at(100,186,.94,cat({eyes:'happy',mouth:'open',armR:-150,armsFront:true}))}`;

const shelfBooks=(y,cs)=>cs.map((c,i)=>c?`<rect x="${128+i*11}" y="${y-30}" width="9" height="30" rx="2" fill="${c}"/>`:'').join('');
S.take=`${room('#ece6ff','#d6ccf5')}
 <rect x="120" y="20" width="70" height="160" rx="6" fill="#b07a45"/><rect x="126" y="26" width="58" height="46" fill="#8a5a30"/><rect x="126" y="78" width="58" height="46" fill="#8a5a30"/><rect x="126" y="130" width="58" height="44" fill="#8a5a30"/>
 ${shelfBooks(72,[RED,SUN,MINT,VIO,SKY])}${shelfBooks(124,[SKY,null,ORA,RED,MINT])}${shelfBooks(174,[VIO,SUN,RED,SKY,ORA])}
 ${sh(62,190,34)}${at(62,188,.92,cat({eyes:'happy',armR:-112,armsFront:true,armRcls:'bob',prop:`<g transform="translate(0,6) scale(.6)">${P.book(SUN)}</g>`}))}
 ${arcArrow(138,96,108,104,16,RED,4,'6 8')}`;

S.people=`${park()}${sun(34,30,10)}${cloud(150,30,.8)}
 ${at(32,188,.6,P.person({shirt:SKY,stripe:'#2f6fd0',hair:'#3a2a4a',long:true,skirt:true,pants:VIO,wave:false,happy:true}))}
 ${at(76,188,.74,P.person({shirt:MINT,stripe:'#1f9c83',hair:'#3a2a4a',skin:'#c98a5a',pants:'#3a2a4a',beard:true,wave:false}))}
 ${at(124,188,.68,P.person({shirt:RED,stripe:'#b52f29',hair:'#e0a83a',skin:'#ffe0c2',long:true,pants:'#2f6fd0'}))}
 ${at(168,188,.56,P.person({shirt:SUN,stripe:ORA,hair:'#7a4a21',skin:'#e0a070',wave:false,happy:true}))}
 ${at(100,198,.3,cat({eyes:'happy'}))}`;
