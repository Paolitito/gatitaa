/* Tag 15–18: this, but, his, by, from · they, we, say, her, she · or, an, will, my, all · would, there, their, what, so */
const room=(wall,fl,y)=>`${bg(wall)}${floor(y||178,fl)}`;
S.this=`${bg('#fff1c9')}<circle cx="104" cy="100" r="80" fill="#ffe7a3"/>
 ${floor(184,'#ffe08a')}${sh(96,190,38)}
 ${at(96,186,1.06,cat({eyes:'happy',armR:-96,armsFront:true,prop:`<g transform="translate(4,14) scale(1.25)">${P.cup(RED)}</g>`}))}
 ${ring(136,128,30,VIO)}${arrow(176,84,160,104,RED,5,'float')}
 <circle class="smoke" cx="130" cy="96" r="4.5" fill="#fff"/><circle class="smoke" style="animation-delay:1.2s" cx="140" cy="92" r="4" fill="#fff"/>`;

S.but=`${bg('#e3fbf5')}${floor(184,'#bff0de')}
 <path d="M124,20 l-10,36 16,-6 -8,40 14,-8 -8,50" fill="none" stroke="${VIO}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="glow"/>
 ${sh(66,190,44)}${at(70,188,1.08,P.dog())}
 ${sh(164,190,14)}${at(164,188,.46,cat({armR:-125,armRcls:'wave',armsFront:true,mouth:'open'}),'hop')}`;

S.his=`${park()}${cloud(150,30,.8)}
 ${sh(62,190,28)}${at(62,188,.96,P.person({wave:false,happy:true}))}
 ${at(150,188,1.9,P.ball(SKY))}${ring(150,165,32,VIO)}
 ${arcArrow(92,96,140,128,26,VIO,4,'6 8')}`;

S.by=`${room('#fff1c9','#e4b77a')}
 <rect x="14" y="30" width="34" height="42" rx="4" fill="#fff" stroke="#b07a45" stroke-width="4"/><circle cx="31" cy="46" r="7" fill="${SUN}"/>
 ${at(132,180,1.36,P.door(SKY))}<rect x="96" y="178" width="72" height="9" rx="4" fill="#5fd3c0"/>
 ${sh(58,190,30)}${at(58,188,.9,cat({eyes:'happy',armR:-60}))}
 <path d="M82,160 h12 M82,160 l4,-4 M82,160 l4,4 M94,160 l-4,-4 M94,160 l-4,4" fill="none" stroke="${RED}" stroke-width="3" stroke-linecap="round"/>`;

S.from=`${park()}${sun(170,28,10)}
 <path d="M0,186 h200" stroke="#f3d9a4" stroke-width="16"/>
 ${at(46,176,.9,P.school)}
 <g class="road"><path d="M96,146 h70" stroke="${RED}" stroke-width="4" stroke-dasharray="8 12" stroke-linecap="round"/></g>${arrow(164,146,182,146,RED,5)}
 <g transform="translate(148,192) scale(-.6,.6)"><g class="walkbob">${cat({armL:0,armR:0,armLcls:'slowA',armRcls:'slowB',feet:'walk',mid:backpack})}</g></g>`;

S.they=`${park(170)}${cloud(40,30,.8)}
 <rect x="36" y="78" width="150" height="116" rx="24" fill="none" stroke="${VIO}" stroke-width="4" stroke-dasharray="10 9"/>
 ${at(76,188,.72,K('orange',{armR:-110,eyes:'happy',mouth:'open'}))}${flipAt(150,188,.72,K('grey',{armR:-110,eyes:'happy',mouth:'open'}))}
 ${sh(113,190,12,'shadow')}<g transform="translate(113,150)"><g class="jump">${P.ball(RED)}</g></g>
 ${at(20,196,.4,cat({armR:-100,armRcls:'bob'}))}`;

S.we=`${bg('#ffe9d6')}<circle cx="104" cy="104" r="82" fill="#ffdcc0"/>
 ${floor(186,'#ffd9bd')}
 <ellipse cx="106" cy="124" rx="78" ry="70" fill="none" stroke="${RED}" stroke-width="4" stroke-dasharray="10 9"/>
 ${at(78,188,.92,cat({armL:-40,armR:-62,eyes:'happy',mouth:'open'}),'sway')}
 ${at(134,188,.92,K('orange',{armL:62,armR:40,eyes:'happy',mouth:'open'}),'sway')}
 ${heart(106,60,1.1,RED,0)}`;

S.say=`${bg('#e3fbf5')}${floor(184,'#bff0de')}
 ${speech(132,56,112,56,T(132,66,'Hello!',26,RED),88,104)}
 <path d="M96,118 q8,6 0,14 M106,112 q12,10 0,26" fill="none" stroke="${VIO}" stroke-width="4" stroke-linecap="round" class="glow"/>
 ${sh(60,190,34)}${at(60,188,.96,cat({mouth:'big',armR:-125,armRcls:'wave',armsFront:true}))}`;

S.her=`${park()}${cloud(40,30,.8)}
 ${sh(64,190,32)}${at(64,188,.94,K('white',{eyes:'happy',hat:earflower}))}
 ${at(152,188,1.6,P.book(VIO))}${ring(152,160,36,RED)}
 ${arcArrow(98,104,140,126,24,RED,4,'6 8')}`;

S.she=`${bg('#ffe9d6')}<circle cx="118" cy="100" r="78" fill="#ffdcc0"/>
 ${floor(186,'#ffd9bd')}${sh(122,190,38)}
 ${at(122,188,1.04,K('white',{eyes:'happy',hat:earflower,armR:-125,armRcls:'wave',armsFront:true}))}
 ${arrow(184,22,160,52,RED,6,'float')}
 ${at(34,192,.54,cat({armR:-100,armRcls:'bob',eyes:'happy'}))}${heart(62,110,.9,RED,0)}`;

S.or=`${bg('#ece6ff')}
 <circle cx="46" cy="62" r="34" fill="#fff"/><circle cx="154" cy="62" r="34" fill="#fff"/>
 ${at(46,82,1.7,P.ball(RED))}${at(154,88,1.3,P.book(SKY))}
 <circle class="glow" cx="46" cy="62" r="38" fill="none" stroke="${VIO}" stroke-width="4"/><circle class="glow" style="animation-delay:.7s" cx="154" cy="62" r="38" fill="none" stroke="${VIO}" stroke-width="4"/>
 ${T(100,76,'?',44,RED,'middle','beat')}
 ${floor(186,'#d6ccf5')}${sh(100,192,30)}${at(100,190,.84,cat({eyes:'wide',mouth:'o',headCls:'tilt',armL:60,armR:-60}))}`;

S.an=`${bg('#ece6ff')}
 <rect x="34" y="20" width="132" height="96" rx="10" fill="#fff" stroke="#b07a45" stroke-width="7"/>
 <g class="blink"><path d="M50,68 Q100,26 150,68 Q100,110 50,68 Z" fill="#fff" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/><circle cx="100" cy="68" r="21" fill="${SKY}"/><circle cx="100" cy="68" r="9.5" fill="${INK}"/><circle cx="106" cy="61" r="4.5" fill="#fff"/></g>
 ${floor(184,'#d6ccf5')}${sh(100,192,28)}
 ${at(100,192,.62,cat({armR:-158,armRcls:'bob',armsFront:true,mouth:'open'}))}`;

S.will=`${bg('#fff1c9')}
 ${think(134,58,48,32,`<g transform="translate(134,72)">${P.plate(34)}</g><g transform="translate(134,56) scale(2)">${P.fish}</g>`,-1)}
 ${floor(150,MINT)}<rect y="150" width="200" height="8" fill="#9be6d8"/>
 ${at(62,190,.9,cat({eyes:'spark',mouth:'tongue',armL:60,armR:-60,prop:knife,propL:fork,tail:false}))}
 ${floor(168,MINT)}<g transform="translate(62,186)">${P.plate(36)}</g>
 ${arcArrow(120,128,170,128,-14,RED,5,'','glow')}`;

S.my=`${room('#cfc8f5','#b5addf')}
 <rect x="100" y="22" width="76" height="34" rx="6" fill="#fff" stroke="#b07a45" stroke-width="4"/>${pawprint(124,40,0)}${T(152,46,'C',20,RED)}
 ${at(124,186,1.5,P.bed)}
 ${sh(44,192,26)}${at(44,190,.74,cat({eyes:'happy',armR:-100,armRcls:'bob'}))}
 ${heart(84,96,1,RED,0)}`;

S.all=`${bg('#fff3cf')}${floor(184,'#ffe08a')}
 <path d="M10,70 q0,-16 16,-16 h148 q16,0 16,16" fill="none" stroke="${VIO}" stroke-width="5" stroke-linecap="round"/><path d="M100,54 v-16" stroke="${VIO}" stroke-width="5" stroke-linecap="round"/>
 ${at(26,186,.48,K('orange',{eyes:'happy'}),'hop')}${at(62,186,.54,K('grey',{eyes:'happy'}))}${at(100,186,.6,cat({eyes:'happy',mouth:'open'}),'hop')}${at(138,186,.54,K('white',{eyes:'happy'}))}${at(174,186,.48,K('cream',{eyes:'happy'}),'hop')}`;

S.would=`${bg('#ece6ff')}
 ${think(136,56,48,32,`<g transform="translate(128,58) scale(2.3)">${P.fish}</g>${heartS(164,44,1,RED,'beat')}`,-1)}
 ${floor(184,'#d6ccf5')}${sh(62,190,34)}
 ${at(62,188,.96,cat({eyes:'spark',armL:-42,armR:42,armsFront:true,headCls:'tilt'}))}
 ${spark(24,60,6,SUN,0)}${spark(180,130,6,SUN,.8)}`;

S.there=`${bg('#cdeeff')}${sun(30,30,10)}${cloud(110,26,.7)}
 <path d="M90,200 Q120,90 200,84 V200 Z" fill="#8fe0a8"/><path d="M0,176 q50,-14 100,0 t100,0 v24 h-200 Z" fill="#6fd08f"/>
 ${at(166,100,.9,P.ball(RED))}${ring(166,89,20,RED)}
 <path d="M80,124 Q120,70 152,84" fill="none" stroke="${VIO}" stroke-width="3" stroke-dasharray="3 9" stroke-linecap="round" class="glow"/>
 ${sh(48,192,30)}${at(48,190,.88,cat({armR:-126,armsFront:true,mouth:'open'}))}`;

S.their=`${park()}${cloud(30,30,.7)}
 ${at(104,172,1.34,P.house(SKY,'#ffe2b8'))}
 ${at(50,192,.5,K('orange',{eyes:'happy',armR:-125,armRcls:'wave',armsFront:true}))}${at(158,192,.5,K('grey',{eyes:'happy',armL:125,armLcls:'wave',armsFront:true}))}
 ${arcArrow(50,128,74,104,10,RED,4,'6 8')}${arcArrow(158,128,136,104,10,RED,4,'6 8')}`;

S.what=`${bg('#ece6ff')}<circle cx="120" cy="104" r="70" fill="#f6f2ff"/>
 ${floor(184,'#d6ccf5')}${sh(124,190,46)}
 <g transform="translate(124,186)"><g class="ring">${P.boxClosed(84,70)}${T(0,-22,'?',40,RED)}</g></g>
 ${[[90,60,0],[150,50,.8],[170,90,1.5]].map(([x,y,d])=>`<g transform="translate(${x},${y})">${T(0,0,'?',20,VIO,'middle','rise').replace('<text','<text style="animation-delay:'+d+'s"')}</g>`).join('')}
 ${at(40,192,.76,cat({eyes:'wide',mouth:'o',headCls:'tilt',armR:-70}))}`;

S.so=`${bg('#fff3cf')}${floor(184,'#ffe08a')}
 ${sh(124,190,60)}
 <g class="pulse" style="transform-origin:124px 184px"><circle cx="124" cy="110" r="74" fill="${RED}"/><path d="M50,110 q74,-54 148,0 M50,110 q74,54 148,0" fill="none" stroke="#fff" stroke-width="7"/><circle cx="98" cy="74" r="12" fill="#fff" opacity=".5"/></g>
 <path d="M30,96 l-14,-10 M24,116 h-16 M34,78 l-8,-14" stroke="${VIO}" stroke-width="4" stroke-linecap="round" class="glow"/>
 ${at(30,192,.5,cat({eyes:'wide',mouth:'o',armL:125,armR:-125,armsFront:true}))}`;
