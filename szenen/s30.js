/* Tag 107–110: personal, bank, west, sport, board · seek, per, subject, officer, private · rest, behavior, deal, performance, fight · top, quickly, past, goal, order */
S.personal=`${room('#ece6ff','#d6ccf5')}
 <rect x="100" y="40" width="80" height="100" rx="6" fill="${RED}"/><rect x="100" y="40" width="14" height="100" rx="4" fill="#b52f29"/><rect x="124" y="60" width="44" height="26" rx="4" fill="#fff"/>${T(146,78,'My',14,INK)}
 <rect x="170" y="80" width="18" height="18" rx="4" fill="${SUN}"/><circle cx="179" cy="89" r="3" fill="${INK}"/>
 <g transform="translate(140,116) scale(.9)">${heartS(0,0,1,'#fff','beat')}</g>
 ${sh(50,192,30)}${at(50,190,.88,cat({eyes:'happy',headCls:'tilt',armL:-40,armR:40,armsFront:true}))}
 ${arcArrow(70,110,100,90,-14,VIO,3,'5 6')}`;

S.bank=`${bg('#cdeeff')}${cloud(30,24,.7)}${sun(170,26,9)}
 <path d="M30,80 L100,40 L170,80 Z" fill="#f4f7fb" stroke="#b9c4d8" stroke-width="2"/>${coin(100,64,9)}
 <rect x="34" y="80" width="132" height="14" fill="#dfe6f2"/>${T(100,92,'BANK',11,INK)}${[48,76,116,144].map(x=>`<rect x="${x}" y="96" width="10" height="60" rx="3" fill="#f4f7fb" stroke="#b9c4d8" stroke-width="1.600"/>`).join('')}
 <rect x="90" y="116" width="22" height="40" rx="3" fill="#b07a45"/><rect x="26" y="156" width="148" height="10" fill="#dfe6f2"/><rect x="18" y="166" width="164" height="10" fill="#cfd8e6"/>${floor(176,'#8fe0a8')}
 ${at(50,198,.5,cat({eyes:'happy',armR:-92,prop:`<g transform="translate(2,6)"><path d="M-10,0 q0,-16 10,-16 q10,0 10,16 q0,8 -10,8 q-10,0 -10,-8 Z" fill="#c98a4b"/><path d="M-4,-16 h8" stroke="#8a5a30" stroke-width="3"/>${coin(0,-2,4)}</g>`}))}
 ${arrow(74,170,90,160,RED,4,'glow')}`;

S.west=`${bg('#ffd9a8')}${kompass('W')}
 <g class="wiggle" style="transform-origin:100px 96px"><path d="M64,96 l36,-10 v20 Z" fill="${RED}"/><path d="M136,96 l-36,-10 v20 Z" fill="#9aa8c0"/></g><circle cx="100" cy="96" r="5" fill="${INK}"/>
 ${arrow(30,96,8,96,RED,6,'glow')}
 <path d="M0,184 h200 v16 h-200 Z" fill="#e0a868"/><circle cx="20" cy="184" r="16" fill="${ORA}"/>
 ${at(166,200,.5,cat({eyes:'happy',armL:150,armsFront:true}))}`;

S.sport=`${bg('#e3fbf5')}${floor(184,'#bff0de')}
 <g class="float"><g transform="translate(40,50) scale(1.3)">${P.ball('#fff',INK)}</g></g><g class="float" style="animation-delay:.4s"><g transform="translate(100,36) scale(1.3)">${bball}</g></g><g class="float" style="animation-delay:.8s"><circle cx="160" cy="50" r="12" fill="${SUN}"/><path d="M150,46 q10,8 20,0 M150,56 q10,-8 20,0" fill="none" stroke="#fff" stroke-width="2"/></g>
 ${sh(100,192,36)}${at(100,190,.96,cat({eyes:'happy',mouth:'big',armL:150,armR:-150,armsFront:true,mid:trikot(RED),hat:`<rect x="-30" y="-86" width="60" height="10" rx="3" fill="${SKY}"/>`}),'hop')}
 <g transform="translate(30,170) scale(.8)">${hantel}</g><path class="sweat" d="${tear(150,110)}" fill="${SKY}"/>`;

S.board=`${room('#fff1c9','#e4b77a')}
 <rect x="40" y="16" width="150" height="100" rx="6" fill="#c98a4b" stroke="#8a5a30" stroke-width="5"/>
 <rect x="52" y="28" width="40" height="34" fill="${SUN}" transform="rotate(-4 72 45)"/><rect x="104" y="30" width="36" height="30" fill="#fff" transform="rotate(5 122 45)"/><rect x="150" y="34" width="30" height="40" fill="${MINT}"/><rect x="60" y="72" width="50" height="34" fill="#bfe9ff" transform="rotate(3 85 89)"/><rect x="122" y="76" width="22" height="24" fill="#fff"/>
 ${[[72,30],[122,32],[165,36],[85,74],[133,78]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="3.500" fill="${RED}"/>`).join('')}
 ${sh(46,192,30)}${at(46,190,.86,cat({eyes:'happy',armR:-140,armRcls:'bob',armsFront:true,prop:`<rect x="-8" y="-20" width="16" height="16" fill="${VIO}"/>`}))}`;

S.seek=`${park()}${cloud(150,24,.7)}
 <ellipse cx="150" cy="170" rx="34" ry="26" fill="#3aa568"/><ellipse cx="170" cy="160" rx="22" ry="20" fill="#4fc27f"/><ellipse cx="130" cy="160" rx="20" ry="18" fill="#4fc27f"/>
 <g class="peek"><path d="M142,146 l4,-12 6,10 M162,146 l-4,-12 -6,10" fill="${ORA}"/></g>
 <path d="M60,150 q10,6 0,12 M76,160 q10,6 0,12" fill="none" stroke="#b07a45" stroke-width="3" opacity=".6"/>
 ${T(100,60,'?',34,RED,'middle','beat')}
 ${sh(50,192,30)}${at(50,190,.88,cat({eyes:'wide',armR:-100,armRcls:'bob',prop:`<g transform="translate(6,10) rotate(-60)">${lupe}</g>`,feet:'walk'}))}`;

S.per=`${bg('#fff1c9')}${floor(184,'#ffe08a')}
 ${[['orange',36],[null,100],['grey',164]].map(([n,x],i)=>`${at(x,180,.56,n?K(n,{eyes:'happy',tail:false}):cat({eyes:'happy',tail:false}))}<g class="hop" style="animation-delay:${i*.25}s">${fishAt(x,60,1.800,0)}</g><path d="M${x},80 v20" stroke="${RED}" stroke-width="3" stroke-dasharray="4 5"/>${T(x,196,'1',14,RED)}`).join('')}`;

S.subject=`${room('#e6f1ff','#cfe3f7')}
 ${[[36,RED,'A'],[100,SKY,'+'],[164,MINT,'♪']].map(([x,c,l],i)=>`<g class="float" style="animation-delay:${i*.4}s"><rect x="${x-24}" y="30" width="48" height="62" rx="5" fill="${c}"/><rect x="${x-24}" y="30" width="8" height="62" rx="3" fill="#0002"/>${T(x+3,70,l,24,'#fff')}</g>`).join('')}
 ${ring(100,61,38,SUN)}
 ${sh(100,192,32)}${at(100,190,.84,cat({hat:glasses,eyes:'happy',armR:-150,armsFront:true,mid:backpack}))}`;

S.officer=`${park(166)}${floor(172,'#6b7a99')}
 ${sh(100,192,36)}${at(100,190,1,K('orange',{hat:polcap,eyes:'happy',mouth:'open',armR:-140,armsFront:true,mid:`<path d="M-22,-46 h44 v34 h-44 Z" fill="#2f6fd0"/>${star5(-10,-32,5,SUN)}<path d="M-22,-18 h44" stroke="${INK}" stroke-width="4"/>`}))}
 ${ring(88,150,10,SUN)}
 ${at(170,196,.4,cat({eyes:'happy',armL:125,armLcls:'wave',armsFront:true}))}${heart(160,130,.6,RED,0)}`;

S.private=`${room('#ffe9d6','#ffd9bd')}
 <rect x="100" y="30" width="80" height="150" rx="6" fill="#b07a45"/><rect x="108" y="38" width="64" height="134" rx="3" fill="#c98a4b"/><circle cx="116" cy="110" r="5" fill="${SUN}"/>
 <g class="sway" style="transform-origin:140px 60px"><path d="M140,60 l-14,14 M140,60 l14,14" stroke="${INK}" stroke-width="1.500"/><rect x="116" y="74" width="48" height="28" rx="4" fill="#fff" stroke="${RED}" stroke-width="3"/>${T(140,93,'Private',10,RED)}</g>
 <g class="beat"><rect x="130" y="130" width="22" height="18" rx="3" fill="${SUN}"/><path d="M135,130 v-6 a6,6 0 0 1 12,0 v6" fill="none" stroke="#e0a83a" stroke-width="3"/></g>
 ${at(46,192,.84,K('orange',{eyes:'wide',headCls:'tilt',armR:-110,armsFront:true}))}`;

S.rest=`${park(160)}${sun(160,30,10)}
 <path d="M30,180 V90 M170,180 V100" stroke="#b07a45" stroke-width="6" stroke-linecap="round"/>${tree(30,96,1.200)}${tree(170,106,1)}
 <g class="sway" style="transform-origin:100px 100px"><path d="M30,110 q70,70 140,0" fill="${RED}"/><path d="M30,110 q70,70 140,0" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="8 8"/>
 <g transform="translate(100,140) rotate(-4)"><g transform="scale(.6)">${cat({eyes:'closed',mouth:'w',tail:false,armL:140,armR:-140,armsFront:true})}</g></g><path d="M48,128 q52,44 104,0 q-52,56 -104,0 Z" fill="#d93a33"/></g>
 ${T(140,70,'z z',16,VIO,'middle','zz')}`;

S.behavior=`${room('#fff1c9','#e4b77a')}
 ${panel(10,20,84,110)}${panel(106,20,84,110)}
 ${at(52,120,.46,K('orange',{eyes:'happy',tail:false,armL:-34,armR:34,armsFront:true,mid:`<g transform="translate(0,-18) scale(.8)">${P.gift(VIO,SUN)}</g>`}))}<g class="beat">${check(80,36,6,4)}</g>
 ${at(148,120,.46,K('grey',{mouth:'tongue',tail:false,armR:-100,armsFront:true}))}<g transform="translate(176,112) rotate(70) scale(.6)">${P.cup(SKY)}</g>${cross(176,36,5,4)}
 ${at(100,200,.5,cat({hat:glasses,headCls:'tilt',armR:-110,armsFront:true}))}`;

S.deal=`${room('#e3fbf5','#bff0de')}
 ${sh(56,192,30)}${at(56,190,.86,cat({eyes:'happy',mouth:'open',mid:tie,armR:-80,armL:30,propL:`<g transform="translate(0,8)">${fishAt(0,0,1.200,0)}</g>`}))}
 ${sh(144,192,30)}${at(144,190,.86,K('orange',{eyes:'happy',mouth:'open',mid:tie,armL:80,armR:-30,prop:`<g transform="translate(0,8)">${P.ball(RED)}</g>`}))}
 <circle cx="100" cy="150" r="8" fill="${INK}"/><circle cx="100" cy="150" r="5" fill="${ORA}"/>
 <g class="beat">${check(100,60,12,7)}</g>${arcArrow(60,110,140,110,24,VIO,3,'5 6')}${arcArrow(140,120,60,120,-24,VIO,3,'5 6')}`;

S.performance=`${bg('#3b2a4a')}<path d="M100,-10 L30,186 h140 Z" fill="#fff6c8" opacity=".22"/>${floor(176,'#8a5a30')}
 <path d="M0,0 h30 q-6,90 0,176 h-30 Z M200,0 h-30 q6,90 0,176 h30 Z" fill="${RED}"/>
 ${at(100,180,.92,cat(Object.assign({eyes:'closed',mouth:'big',armL:150,armR:-150,armsFront:true,mid:`<path d="M-26,-14 q26,22 52,0 l6,14 q-32,20 -64,0 Z" fill="${VIO}"/>`},NL)),'dance')}
 ${note(50,70,SUN,0)}${note(150,60,MINT,.7)}
 <g class="rise">${flower(60,190,RED,0)}</g>${spark(40,120,7,SUN,0)}${spark(160,120,7,SUN,.5)}
 ${[70,100,130].map((x,i)=>`<g class="twinkle" style="animation-delay:${i*.2}s">${star5(x,24,7,SUN)}</g>`).join('')}`;

const polster=(x,y,r,c)=>`<g transform="translate(${x},${y}) rotate(${r})"><rect x="-18" y="-13" width="36" height="26" rx="8" fill="${c}"/><path d="M-10,-5 h20 M-10,3 h20" stroke="#fff" stroke-width="2" opacity=".6"/></g>`;
S.fight=`${room('#ffe9d6','#ffd9bd')}
 ${sh(54,192,30)}${at(54,190,.86,cat({eyes:'happy',mouth:'big',armR:-130,armRcls:'throwarm',armsFront:true,prop:polster(0,-20,20,SKY)}))}
 ${sh(146,192,30)}${at(146,190,.86,K('orange',{eyes:'happy',mouth:'big',armL:130,armLcls:'throwarm',armsFront:true,propL:polster(0,-20,-20,SUN)}))}
 ${burst(100,90,VIO,0)}
 ${[[80,60],[110,50],[124,76],[90,110]].map(([x,y],i)=>`<path class="snow" style="animation-delay:${-i*.8}s;animation-duration:4s" d="M${x},${y} q6,-8 12,0 q-6,4 -12,0 Z" fill="#fff"/>`).join('')}
 ${T(100,40,'ha ha',14,RED,'middle','beat')}`;

S.top=`${bg('#cdeeff')}${cloud(30,60,.7)}${cloud(170,90,.6)}${sun(170,26,9)}
 <path d="M10,200 L100,50 L190,200 Z" fill="#9aa8c0"/><path d="M100,50 l-22,37 14,-8 10,12 12,-14 10,8 Z" fill="#fff"/>
 <path d="M100,50 v-34" stroke="#b07a45" stroke-width="3"/><path class="flower" d="M100,16 l24,8 -24,8 Z" fill="${RED}"/>
 ${at(100,62,.4,cat({eyes:'happy',mouth:'big',armL:130,armR:-130,armsFront:true}),'hop')}
 ${ring(100,40,30,SUN)}${arrow(40,180,76,110,RED,5,'glow')}`;

S.quickly=`${park(160)}${floor(172,'#e0875a')}<path d="M0,186 h200" stroke="#fff" stroke-width="2" opacity=".7"/>
 <path d="M10,100 h60 M0,120 h70 M14,140 h50" stroke="#fff" stroke-width="5" stroke-linecap="round" class="glow"/>
 <circle class="puff" cx="50" cy="176" r="8" fill="#fff"/><circle class="puff" style="animation-delay:.3s" cx="30" cy="180" r="6" fill="#fff"/>
 <g transform="translate(120,184) rotate(10) scale(-.86,.86)"><g class="runbob" style="animation-duration:.3s">${cat({armL:0,armR:0,armLcls:'swingA',armRcls:'swingB',feet:'run',eyes:'closed',mouth:'big'})}</g></g>
 ${blitz?`<g transform="translate(170,50) scale(1.2)" class="beat">${blitz}</g>`:''}`;

S.past=`${room('#ece6ff','#d6ccf5')}
 <rect x="16" y="20" width="84" height="96" rx="4" fill="#f3d9a4" stroke="#b07a45" stroke-width="5"/><g transform="translate(58,108) scale(.4)">${cat({eyes:'happy',tail:false,fur:'#7a6a5a',out:'#5a4a3a',hat:`<circle cx="0" cy="-124" r="9" fill="#e4c58a"/>`})}</g>${T(58,34,'baby',9,'#8a5a30')}
 <g class="ring">${at(150,60,.56,P.clock(34,210))}</g>
 <g class="glow"><path d="M178,96 q-28,26 -56,0" fill="none" stroke="${RED}" stroke-width="4" stroke-linecap="round"/><path d="M122,96 l12,-2 M122,96 l3,12" stroke="${RED}" stroke-width="4" stroke-linecap="round"/></g>
 ${sh(130,192,32)}${at(130,190,.88,cat({eyes:'closed',headCls:'tilt',armR:-60}))}
 ${think(170,130,0,0,'',-1).slice(0,0)}`;

S.goal=`${bg('#8fe0a8')}<rect width="200" height="60" fill="#cdeeff"/>
 <path d="M40,150 V40 h120 v110" fill="none" stroke="#fff" stroke-width="6"/><path d="M40,60 h120 M40,80 h120 M40,100 h120 M40,120 h120 M40,140 h120 M60,40 v110 M80,40 v110 M100,40 v110 M120,40 v110 M140,40 v110" stroke="#fff" stroke-width="1" opacity=".7"/>
 <g class="shoot"><g transform="translate(100,170)">${P.ball('#fff',INK)}</g></g>
 ${T(100,30,'GOAL!',22,RED,'middle','beat')}
 ${at(36,196,.6,cat({eyes:'happy',mouth:'big',armL:140,armR:-140,armsFront:true,mid:trikot(RED)}),'hop')}
 ${at(150,150,.4,K('grey',{eyes:'wide',mouth:'o',armL:140,armR:-140,armsFront:true}))}`;

S.order=`${room('#fff1c9','#e4b77a')}
 ${at(130,186,1.1,P.table(110))}
 ${at(130,150,.5,K('orange',{eyes:'happy',mouth:'open',tail:false,armR:-150,armsFront:true}))}<path d="M70,124 h120 v12 h-120 Z" fill="#c98a4b"/>
 ${speech(150,40,60,40,`${fishAt(138,48,1.200,0)}${T(162,54,'×2',14,RED)}`,146,74)}
 ${sh(40,192,28)}${at(40,190,.82,cat({eyes:'happy',mid:tie,armR:-84,armRcls:'bob',armL:-30,armsFront:true,prop:`<path d="M0,2 l8,-12" stroke="${SUN}" stroke-width="3" stroke-linecap="round"/>`,mid:`<g transform="translate(-2,-24)"><rect x="-12" y="-12" width="24" height="26" rx="2" fill="#fff" stroke="#cbc2e6" stroke-width="1.500"/><path d="M-7,-5 h14 M-7,1 h14 M-7,7 h9" stroke="${INK}" stroke-width="1.500"/></g>`}))}`;
