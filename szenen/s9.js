/* Tag 23–26: into, year, your, good, some · could, them, see, other, than · then, now, look, only, come · its, over, think, also, back */
S.into=`${park()}${cloud(30,30,.7)}
 <path d="M0,186 h200" stroke="#f3d9a4" stroke-width="16"/>
 ${at(150,180,1.36,P.house())}<rect x="114.600" y="139.200" width="24.500" height="40.800" rx="10" fill="${INK}"/>
 <g class="road"><path d="M70,150 h40" stroke="${RED}" stroke-width="4" stroke-dasharray="8 12" stroke-linecap="round"/></g>${arrow(102,150,120,158,RED,5)}
 <circle class="puff" cx="22" cy="182" r="6" fill="#fff"/><circle class="puff" style="animation-delay:.8s" cx="14" cy="176" r="5" fill="#fff"/>
 <g transform="translate(56,190) rotate(9) scale(-.6,.6)"><g class="runbob">${cat({armL:0,armR:0,armLcls:'swingA',armRcls:'swingB',feet:'run',eyes:'happy',mouth:'open'})}</g></g>`;

const sTree=(x,y,c1,c2,extra)=>`<g transform="translate(${x},${y})"><rect x="-3" y="-16" width="6" height="18" rx="2" fill="#b07a45"/><circle cx="0" cy="-26" r="14" fill="${c1}"/><circle cx="-8" cy="-20" r="8" fill="${c2}"/><circle cx="8" cy="-20" r="8" fill="${c2}"/>${extra||''}</g>`;
S.year=`${bg('#fff8f0')}<circle cx="100" cy="100" r="88" fill="#fff"/>
 <g class="spin" style="animation-duration:20s"><circle cx="100" cy="100" r="62" fill="none" stroke="${VIO}" stroke-width="4" stroke-dasharray="12 10" stroke-linecap="round"/></g>
 <path d="M100,12 v176 M12,100 h176" stroke="#f0e6dc" stroke-width="2"/>
 ${sTree(100,44,'#9be8b4','#b7efc8',`<circle cx="-6" cy="-30" r="3" fill="${RED}"/><circle cx="7" cy="-24" r="3" fill="${SUN}"/><circle cx="0" cy="-18" r="3" fill="${VIO}"/>`)}
 ${sTree(164,112,'#4fc27f','#62d08f')}<g transform="translate(178,70) scale(.5)">${sun(0,0,12)}</g>
 ${sTree(100,186,ORA,'#ffc93c',`<path class="sweat" d="M-14,-10 l4,3 -4,3 -4,-3 Z" fill="${ORA}"/><path class="sweat" style="animation-delay:.6s" d="M12,-8 l4,3 -4,3 -4,-3 Z" fill="${RED}"/>`)}
 ${sTree(36,112,'#eaf7ff','#fff')}<circle class="snow" cx="24" cy="60" r="2" fill="#bfe9ff"/><circle class="snow" style="animation-delay:-2s" cx="46" cy="60" r="2" fill="#bfe9ff"/>
 ${at(100,128,.46,cat({eyes:'happy'}))}`;

S.your=`${bg('#e3fbf5')}<circle cx="100" cy="92" r="80" fill="#f0fdf8"/>
 ${floor(184,'#bff0de')}${sh(100,190,38)}
 ${at(100,180,.98,cat({eyes:'happy',mouth:'open'}))}
 <g class="float"><g transform="translate(100,188) scale(2.1)">${P.book(SKY)}</g>${paw(66,150,10)}${paw(134,150,10)}</g>
 ${arrow(40,150,24,184,RED,5,'glow')}${arrow(160,150,176,184,RED,5,'glow')}
 ${spark(40,50,6,SUN,0)}${spark(166,56,6,SUN,.7)}`;

S.good=`${bg('#fff1c9')}<circle cx="100" cy="104" r="78" fill="#ffe7a3"/>
 <g class="twinkle">${star5(64,34,13,SUN)}</g><g class="twinkle" style="animation-delay:.4s">${star5(100,24,15,SUN)}</g><g class="twinkle" style="animation-delay:.8s">${star5(136,34,13,SUN)}</g>
 ${floor(184,'#ffe08a')}${sh(96,190,38)}
 ${at(96,186,1,cat({eyes:'happy',mouth:'tongue',armR:-130,armsFront:true,prop:`<g transform="translate(0,-6)">${check(0,0,10,5)}</g>`}))}
 <g transform="translate(164,188)">${P.plate(26)}<path d="M-14,-6 a14,14 0 0 1 28,0 Z" fill="#ffcf5c" stroke="#e0a83a" stroke-width="1.6"/><circle cx="-4" cy="-14" r="2.5" fill="${RED}"/><circle cx="5" cy="-14" r="2.5" fill="#4fc27f"/></g>
 <circle class="smoke" cx="160" cy="160" r="4.5" fill="#fff"/><circle class="smoke" style="animation-delay:1.2s" cx="170" cy="158" r="4" fill="#fff"/>`;

const fishAt=(x,y,s,r)=>`<g transform="translate(${x},${y}) rotate(${r||0}) scale(${s})">${P.fish}</g>`;
S.some=`${bg('#fff1c9')}
 ${at(60,170,.86,cat({eyes:'happy',mouth:'tongue',tail:false}))}
 ${floor(142,'#c98a4b')}<rect y="142" width="200" height="8" fill="#e0a868"/>
 <path d="M112,136 h76 q0,40 -38,40 q-38,0 -38,-40 Z" fill="${SKY}"/><ellipse cx="150" cy="136" rx="38" ry="9" fill="#2f6fd0"/>
 ${fishAt(130,130,1.3,-20)}${fishAt(150,126,1.3,10)}${fishAt(170,130,1.3,-8)}${fishAt(140,120,1.3,24)}${fishAt(162,118,1.3,-30)}
 <g transform="translate(58,186)">${P.plate(40)}</g>${fishAt(48,176,1.3,8)}${fishAt(70,178,1.3,-12)}
 ${arcArrow(134,108,78,160,30,RED,4,'6 8')}`;

S.could=`${room('#fff1c9','#e4b77a')}
 ${at(164,180,1.2,P.door(SKY))}
 ${at(118,190,.56,K('orange',{headCls:'tilt',armL:110,armsFront:true}))}
 ${speech(60,40,56,44,T(60,54,'?',30,RED),64,74)}
 ${sh(54,192,34)}${at(54,190,.9,cat({mouth:'open',armL:-30,armR:30,armsFront:true,mid:`<g transform="translate(0,-2)">${P.boxClosed(54,40)}</g>`}))}`;

const binoc=`<g><rect x="-24" y="-84" width="20" height="18" rx="6" fill="${INK}" stroke="#7a6a8c" stroke-width="1.6"/><rect x="4" y="-84" width="20" height="18" rx="6" fill="${INK}" stroke="#7a6a8c" stroke-width="1.6"/><circle cx="-14" cy="-75" r="5" fill="#bfe9ff"/><circle cx="14" cy="-75" r="5" fill="#bfe9ff"/></g>`;
S.them=`${bg('#cdeeff')}${sun(30,30,10)}
 <path d="M90,200 Q120,120 200,116 V200 Z" fill="#8fe0a8"/><path d="M0,178 q50,-14 100,0 t100,0 v22 h-200 Z" fill="#6fd08f"/>
 ${at(146,126,.36,K('orange',{eyes:'happy'}),'hop')}${at(172,124,.36,K('grey',{eyes:'happy'}))}
 <ellipse cx="159" cy="104" rx="34" ry="28" fill="none" stroke="${RED}" stroke-width="4" stroke-dasharray="9 8"/>
 <path d="M78,116 L124,100 M78,124 L126,116" stroke="#fff" stroke-width="3" stroke-dasharray="3 8" stroke-linecap="round" class="glow"/>
 ${sh(48,192,32)}${at(48,190,.9,cat({hat:binoc,armL:150,armR:-150,armsFront:true}))}`;

S.see=`${bg('#4a4496')}
 ${spark(30,30,4,'#fff',0)}${spark(80,50,3.5,'#fff',.7)}${spark(120,20,4,'#fff',1.2)}${spark(186,90,4,'#fff',.4)}
 <path d="M0,176 q50,-18 100,0 t100,0 v24 h-200 Z" fill="#373278"/>
 <g class="beat">${star5(166,40,16,SUN,`stroke="${SUN}" stroke-width="4"`)}</g>
 <path d="M108,188 L120,132 L132,188" fill="none" stroke="#b9c4d8" stroke-width="4" stroke-linecap="round"/>
 <g transform="translate(120,128) rotate(-42)"><rect x="-34" y="-9" width="62" height="18" rx="6" fill="#dfe6f2"/><rect x="24" y="-12" width="16" height="24" rx="5" fill="${RED}"/><rect x="-42" y="-6" width="10" height="12" rx="3" fill="#9aa8c0"/></g>
 <path d="M150,96 L160,56" stroke="#fff" stroke-width="2.5" stroke-dasharray="3 8" stroke-linecap="round" class="glow"/>
 ${at(58,190,.84,cat(Object.assign({armR:-70,eyes:'happy',mouth:'open'},NL)))}`;

S.other=`${bg('#e3fbf5')}
 <rect x="10" y="118" width="180" height="10" rx="5" fill="#c98a4b"/>
 <g opacity=".35">${at(54,118,1.8,P.cup(SKY))}</g>${check(54,54,12,6)}
 ${at(142,118,1.8,P.cup(RED))}${ring(146,88,42,RED)}
 ${arrow(96,60,118,70,RED,6,'float')}
 ${floor(186,'#bff0de')}${at(92,196,.6,cat({armR:-120,armsFront:true,armRcls:'bob',eyes:'happy'}))}`;

S.than=`${park(170)}${cloud(150,26,.7)}
 ${at(62,186,1.5,P.house())}
 ${at(154,188,.66,P.car(SKY))}
 ${at(156,152,.36,cat({eyes:'happy',tail:false}))}
 <g class="beat"><path d="M112,96 l24,14 -24,14" fill="none" stroke="${VIO}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/></g>`;

S.then=`${bg('#ece6ff')}
 ${panel(8,36,84,128)}${panel(108,36,84,128)}
 ${at(50,152,.56,cat({armL:8,armR:-8,headCls:'tilt',mid:openBook,hat:glasses}))}
 ${at(146,152,.56,cat({armR:-72,armRcls:'bob',eyes:'happy',mouth:'open'}))}<g transform="translate(166,152)"><g class="roll" style="animation-duration:1.2s"><g transform="scale(.7)">${P.ball(RED)}</g></g></g>
 <circle cx="50" cy="24" r="6" fill="${VIO}"/><circle cx="142" cy="24" r="6" fill="${VIO}"/><circle cx="158" cy="24" r="6" fill="${VIO}"/>
 ${arrow(92,100,106,100,RED,6,'glow')}`;

S.now=`${bg('#fff1c9')}<circle cx="90" cy="110" r="74" fill="#ffe7a3"/>
 <g class="ring">${at(158,84,1,P.clock(30,0))}</g>
 ${arcArrow(150,96,128,128,-12,RED,5,'','float')}
 <path d="M190,40 l8,-6 M192,54 h8 M126,40 l-8,-6" stroke="${RED}" stroke-width="4" stroke-linecap="round" class="glow"/>
 ${at(86,180,1,cat({armL:40,armR:-140,armRcls:'munch',armsFront:true,mouth:'open',mouthCls:'chew',prop:P.fish,tail:false}))}
 ${floor(152,MINT)}<rect y="152" width="200" height="8" fill="#9be6d8"/><g transform="translate(86,184)">${P.plate(40)}</g>${fishAt(78,174,1.3,8)}`;

S.look=`${park(170)}${cloud(40,30,.8)}
 ${bfly(140,62,ORA,0)}${ring(150,62,30,RED)}
 <path d="M92,82 l10,-12 M100,96 l14,-6 M84,70 l4,-14" stroke="${RED}" stroke-width="4" stroke-linecap="round" class="glow"/>
 <path d="M84,120 L124,80" stroke="#fff" stroke-width="3" stroke-dasharray="3 9" stroke-linecap="round"/>
 ${sh(52,192,32)}${at(52,190,.92,cat({eyes:'wide',mouth:'o',armR:-128,armsFront:true}))}`;

S.only=`${bg('#fff3cf')}${floor(184,'#ffe08a')}
 <g opacity=".3">${at(30,186,.56,K('white'))}${at(74,186,.56,K('orange'))}${at(118,186,.56,K('grey'))}</g>
 <circle cx="164" cy="140" r="40" fill="#fff" opacity=".7"/>
 ${at(164,186,.62,cat({eyes:'happy',mouth:'open',armR:-125,armRcls:'wave',armsFront:true}),'hop')}
 ${ring(164,140,42,RED)}${arrow(120,60,146,96,RED,6,'float')}`;

S.come=`${bg('#e3fbf5')}${floor(184,'#bff0de')}
 <g class="road"><path d="M100,150 h60" stroke="${RED}" stroke-width="4" stroke-dasharray="8 12" stroke-linecap="round"/></g>${arrow(112,150,94,150,RED,5)}
 ${sh(56,190,34)}${at(56,188,.96,cat({eyes:'happy',mouth:'open',armR:-110,armRcls:'wave',armsFront:true}))}
 <g transform="translate(160,190)"><g class="walkbob"><g transform="scale(.5)">${K('grey',{armL:0,armR:0,armLcls:'slowA',armRcls:'slowB',feet:'walk',eyes:'happy'})}</g></g></g>
 ${heart(108,100,.9,RED,0)}`;

S.its=`${park()}${sun(170,30,10)}
 ${sh(64,190,40)}${at(68,188,.94,P.dog({happy:true}))}
 ${at(156,188,1.7,P.ball(SKY))}${ring(156,168,30,RED)}
 ${arcArrow(96,110,146,134,26,RED,4,'6 8')}`;

S.over=`${bg('#e3fbf5')}${cloud(30,30,.7)}${floor(184,'#bff0de')}
 ${sh(100,190,40)}${at(100,186,1,P.boxClosed(64,50))}
 ${arcArrow(24,170,176,170,150,RED,5,'8 10')}
 <g transform="translate(100,112) rotate(12)"><g class="float"><g transform="scale(.66)">${cat({armL:120,armR:-120,armsFront:true,eyes:'happy',mouth:'open'})}</g></g></g>
 ${spark(40,60,6,SUN,0)}${spark(170,70,6,VIO,.7)}`;

S.think=`${bg('#ece6ff')}
 ${think(134,54,50,32,`${T(110,66,'?',34,RED)}<g transform="translate(142,60) scale(1.5)">${P.fish}</g><g transform="translate(166,74) scale(.6)">${P.ball(SKY)}</g>`,-1)}
 ${floor(184,'#d6ccf5')}${sh(62,190,36)}
 ${at(62,188,1,cat({headCls:'tilt',armR:-152,armsFront:true}))}
 <circle class="glow" cx="24" cy="60" r="4" fill="${VIO}"/><circle class="glow" style="animation-delay:.5s" cx="36" cy="44" r="5" fill="${VIO}"/><circle class="glow" style="animation-delay:1s" cx="52" cy="32" r="6" fill="${VIO}"/>`;

S.also=`${park()}${cloud(100,26,.7)}
 ${sh(56,190,36)}${at(60,188,.8,P.dog({happy:true}))}
 ${sh(150,190,30)}${at(150,188,.86,cat({eyes:'happy',mouth:'open'}),'hop')}
 ${heart(40,90,.9,RED,0)}${heart(150,60,.9,RED,.6)}
 <g class="beat"><circle cx="108" cy="96" r="16" fill="#fff"/><path d="M108,86 v20 M98,96 h20" stroke="${MINT}" stroke-width="6" stroke-linecap="round"/></g>`;

S.back=`${room('#fff1c9','#e4b77a')}
 <rect x="96" y="34" width="84" height="146" rx="8" fill="#b07a45"/><rect x="104" y="42" width="68" height="138" fill="#cdeeff"/><path d="M104,150 q34,-16 68,0 v30 h-68 Z" fill="#8fe0a8"/><circle cx="156" cy="62" r="9" fill="${SUN}"/>
 <path d="M104,42 L90,34 V188 L104,180 Z" fill="${SKY}"/>
 <rect x="100" y="178" width="76" height="9" rx="4" fill="#5fd3c0"/>
 <rect x="22" y="150" width="36" height="34" rx="6" fill="${RED}"/><path d="M32,150 v-8 q0,-6 8,-6 q8,0 8,6 v8" fill="none" stroke="#b52f29" stroke-width="4"/><path d="M22,164 h36" stroke="#b52f29" stroke-width="3"/>
 ${sh(120,190,30)}${at(120,188,.86,cat({eyes:'happy',mouth:'open',armR:-125,armRcls:'wave',armsFront:true}))}
 <g class="glow"><path d="M40,60 q24,-34 48,0" fill="none" stroke="${RED}" stroke-width="5" stroke-linecap="round"/><path d="M40,60 l-2,-14 M40,60 l13,-5" fill="none" stroke="${RED}" stroke-width="5" stroke-linecap="round"/></g>`;
