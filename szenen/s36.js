/* Tag 131–134: everybody, physical, lay, general, feeling · standard, bill, message, fail, outside · arrive, analysis, benefit, forward, lawyer · present, section, environmental, glass, skill */
const teddy=(x,y,s)=>`<g transform="translate(${x},${y}) scale(${s})"><circle cx="-12" cy="-44" r="7" fill="#c98a4b"/><circle cx="12" cy="-44" r="7" fill="#c98a4b"/><ellipse cx="0" cy="-10" rx="16" ry="18" fill="#c98a4b"/><circle cx="0" cy="-34" r="15" fill="#d9a56a"/><ellipse cx="0" cy="-8" rx="9" ry="11" fill="#f0c98a"/><circle cx="-5" cy="-37" r="1.800" fill="${INK}"/><circle cx="5" cy="-37" r="1.800" fill="${INK}"/><ellipse cx="0" cy="-31" rx="3" ry="2" fill="${INK}"/><ellipse cx="-17" cy="-14" rx="6" ry="9" fill="#c98a4b"/><ellipse cx="17" cy="-14" rx="6" ry="9" fill="#c98a4b"/><ellipse cx="-9" cy="6" rx="7" ry="6" fill="#c98a4b"/><ellipse cx="9" cy="6" rx="7" ry="6" fill="#c98a4b"/></g>`;
const mappe=`<g transform="translate(0,22)"><rect x="-16" y="-12" width="32" height="22" rx="3" fill="#8a5a30"/><path d="M-6,-12 v-5 h12 v5" fill="none" stroke="#5a3a1a" stroke-width="3"/><rect x="-3" y="-4" width="6" height="5" fill="${SUN}"/></g>`;

S.everybody=`${bg('#2d2a6e')}${papel(10,6,194)}${burst(30,60,SUN,0)}${burst(170,60,RED,.5)}
 ${floor(184,'#1f1b4d')}<circle cx="100" cy="184" r="80" fill="#ffe89a" opacity=".15"/>
 ${[['grey',26,.44],['cream',62,.48],['white',138,.48],['orange',174,.44]].map(([n,x,s],i)=>`<g class="dance" style="animation-delay:${i*.15}s">${at(x,188,s,K(n,{eyes:'happy',mouth:'open',armL:130,armR:-130,armsFront:true,line:'#cbc2e6'}))}</g>`).join('')}
 <g class="dance">${at(100,192,.6,cat(Object.assign({eyes:'happy',mouth:'big',armL:140,armR:-140,armsFront:true},NL)))}</g>
 ${note(60,100,SUN,0)}${note(140,96,MINT,.7)}`;

S.physical=`${bg('#e3fbf5')}<circle cx="100" cy="100" r="80" fill="#fff" opacity=".6"/>${floor(184,'#bff0de')}
 ${sh(100,192,38)}${at(100,190,1,cat({eyes:'happy',mouth:'big',armL:140,armR:-140,armsFront:true,mid:trikot(SKY),hat:`<rect x="-30" y="-86" width="60" height="10" rx="3" fill="${RED}"/>`}),'pulse')}
 ${lbl(40,60,70,110)}${lbl(160,60,130,110)}${lbl(40,160,80,170)}
 ${heartS(160,150,1,RED,'beat')}<path d="M140,150 h8 l4,-8 6,16 4,-8 h8" fill="none" stroke="#fff" stroke-width="1.500"/>`;

S.lay=`${room('#fff1c9','#e4b77a')}
 ${at(120,186,1.2,P.table(120))}<path d="M56,124 h140 v12 h-140 Z" fill="${RED}"/><path d="M56,124 h140" stroke="#fff" stroke-width="3" stroke-dasharray="6 6"/>
 <g transform="translate(96,122)">${P.plate(26)}</g><g transform="translate(160,122)">${P.plate(26)}</g>
 <g class="drop" style="animation-duration:2.200s"><g transform="translate(128,112)">${P.plate(26)}</g></g>${arrow(128,60,128,90,RED,6,'glow')}
 ${sh(36,192,26)}${at(36,190,.8,cat({eyes:'happy',armR:-120,armRcls:'bob',armsFront:true}))}`;

S.general=`${bg('#e6f1ff')}${floor(184,'#cfe3f7')}
 <circle cx="100" cy="80" r="64" fill="#fff" stroke="#cbc2e6" stroke-width="2"/>
 ${[[76,60,RED],[124,60,SKY],[76,104,SUN],[124,104,MINT]].map(([x,y,c])=>`<circle cx="${x}" cy="${y}" r="14" fill="${c}"/>`).join('')}
 <circle cx="100" cy="80" r="74" fill="none" stroke="${RED}" stroke-width="4" stroke-dasharray="10 9" class="glow"/>
 ${T(100,20,'all',16,RED,'middle','beat')}
 <g opacity=".5"><circle cx="24" cy="150" r="8" fill="${VIO}"/></g>${T(24,176,'one',10,'#9aa8c0')}
 ${at(160,200,.5,cat({hat:glasses,eyes:'happy',armL:140,armsFront:true}))}`;

S.feeling=`${bg('#ffe9d6')}<circle cx="100" cy="110" r="76" fill="#ffdcc0"/>${floor(186,'#ffd9bd')}
 ${face(40,40,SUN,5)}${face(100,24,SKY,-4)}${face(160,40,MINT,5)}
 <path d="M40,58 q20,30 44,44 M100,42 v50 M160,58 q-20,30 -44,44" stroke="${VIO}" stroke-width="2.500" stroke-dasharray="4 5" fill="none"/>
 ${sh(100,192,34)}${at(100,190,.9,cat({eyes:'closed',mouth:'w',armL:-40,armR:40,armsFront:true,mid:`<g transform="translate(0,-30)">${heartS(0,0,1.300,RED,'beat')}</g>`}))}`;

S.standard=`${bg('#e3fbf5')}${floor(170,MINT)}<rect y="170" width="200" height="8" fill="#9be6d8"/>
 <path d="M10,96 h180" stroke="${RED}" stroke-width="3" stroke-dasharray="8 7"/>${T(176,90,'std',10,RED)}
 ${[[40,74],[90,74],[140,74]].map(([x,h],i)=>`<rect x="${x-16}" y="${170-h}" width="32" height="${h}" rx="4" fill="${SKY}"/><g class="twinkle" style="animation-delay:${i*.3}s">${check(x,80,6,4)}</g>`).join('')}
 <rect x="172" y="120" width="20" height="50" rx="4" fill="#9aa8c0" opacity=".6"/>${cross(182,106,5,3)}
 ${at(100,206,.44,cat({bow:false,hat:P.hatHard,eyes:'happy',tail:false,armR:-140,armsFront:true}))}`;

S.bill=`${room('#fff1c9','#e4b77a')}
 ${at(130,186,1.1,P.table(110))}<path d="M70,124 h120 v12 h-120 Z" fill="#c98a4b"/>
 <g transform="translate(150,120)">${P.plate(26)}</g>
 <g class="sway" style="transform-origin:110px 60px"><rect x="88" y="50" width="44" height="70" rx="2" fill="#fff" stroke="#cbc2e6" stroke-width="2"/><path d="M96,62 h28 M96,72 h28 M96,82 h18" stroke="#cbc2e6" stroke-width="2.500"/><path d="M96,96 h28" stroke="${INK}" stroke-width="2"/>${T(110,112,'$12',11,RED)}</g>
 ${ring(110,86,44,RED)}
 ${at(40,192,.8,cat({eyes:'wide',mouth:'o',armR:-110,armsFront:true}))}${at(176,150,.4,K('grey',{mid:tie,tail:false,eyes:'happy'}))}`;

S.message=`${room('#e6f1ff','#cfe3f7')}
 <rect x="100" y="24" width="84" height="140" rx="12" fill="${INK}"/><rect x="106" y="34" width="72" height="116" rx="4" fill="#fff"/>
 <rect x="112" y="44" width="46" height="20" rx="8" fill="#e6e0f5"/>${T(135,58,'Hi!',10,INK)}
 <g class="hop"><rect x="124" y="74" width="50" height="24" rx="8" fill="${RED}"/>${heartS(138,88,.6,'#fff')}${T(158,90,'you',9,'#fff')}</g>
 <g class="beat"><circle cx="180" cy="30" r="10" fill="${RED}"/>${T(180,34,'1',11,'#fff')}</g>
 ${sh(46,192,30)}${at(46,190,.86,cat({eyes:'happy',mouth:'open',armR:-100,armsFront:true}))}${T(70,60,'ding',13,VIO,'middle','glow')}`;

S.fail=`${room('#e9efe0','#d7dfc8')}
 <g transform="rotate(6 140 80)"><rect x="100" y="24" width="80" height="106" rx="3" fill="#fff" stroke="#cbc2e6" stroke-width="2"/>${[0,1,2].map(i=>`<path d="M124,${46+i*22} h46" stroke="#cbc2e6" stroke-width="3" stroke-linecap="round"/>${cross(112,46+i*22,4,3)}`).join('')}<g class="beat">${T(150,122,'F',26,RED)}</g></g>
 ${sh(56,192,32)}${at(56,190,.9,cat({eyes:'closed',mouth:'wavy',headCls:'tilt',armL:150,armR:-150,armsFront:true}))}
 <path class="sweat" d="${tear(30,104)}" fill="${SKY}"/>
 ${at(160,196,.44,K('orange',{eyes:'happy',armL:100,armsFront:true}))}${heart(140,150,.6,RED,0)}`;

S.outside=`${bg('#cdeeff')}${sun(170,26,9)}${hills('#8fe0a8','#6fd08f',160)}
 <rect x="0" y="40" width="80" height="160" fill="#fff8e6"/><path d="M-10,40 h100 l-10,-22 h-90 Z" fill="${RED}"/><rect x="20" y="70" width="40" height="40" rx="3" fill="#bfe9ff" stroke="#fff" stroke-width="4"/>
 <rect x="46" y="130" width="34" height="70" fill="#8a5a30"/>
 ${flower(110,186,RED,0)}${flower(180,180,SUN,.5)}${bfly(150,90,ORA,0)}
 ${at(136,192,.76,cat({eyes:'closed',mouth:'big',armL:140,armR:-140,armsFront:true}))}
 ${arrow(86,150,108,150,RED,6,'glow')}`;

S.arrive=`${park(170)}${cloud(40,24,.7)}
 <g transform="translate(160,170) scale(.9)">${P.house()}</g>${pin(160,70)}
 <g class="road" style="animation-duration:3s;animation-direction:reverse"><g transform="translate(60,192) scale(-.76,.76)"><g class="walkbob">${cat({eyes:'happy',mouth:'open',feet:'walk',armL:0,armLcls:'slowA',armR:-20,prop:`<g transform="translate(0,22)">${koffer}</g>`})}</g></g></g>
 <path d="M10,196 h110" stroke="#f3d9a4" stroke-width="10" stroke-linecap="round" opacity=".7"/>
 <g class="beat">${check(110,60,10,6)}</g>`;

S.analysis=`${room('#e6f1ff','#cfe3f7')}
 <rect x="90" y="20" width="100" height="100" rx="6" fill="#fff" stroke="#cbc2e6" stroke-width="3"/>
 <rect x="100" y="80" width="12" height="30" fill="${SKY}"/><rect x="118" y="60" width="12" height="50" fill="${MINT}"/><rect x="136" y="40" width="12" height="70" fill="${RED}"/><circle cx="168" cy="50" r="12" fill="${SUN}"/><path d="M168,50 v-12 a12,12 0 0 1 10,18 Z" fill="${SKY}"/>
 <path d="M100,34 l18,10 18,-14" fill="none" stroke="${INK}" stroke-width="2" stroke-dasharray="3 4"/>
 ${sh(50,192,32)}${at(50,190,.9,cat({hat:glasses,eyes:'wide',armR:-100,armRcls:'bob',armsFront:true,prop:`<g transform="translate(6,10) rotate(-60)">${lupe}</g>`}))}
 ${T(150,150,'hmm...',13,VIO,'middle','glow')}`;

S.benefit=`${park()}${sun(160,28,10)}
 <rect x="110" y="110" width="12" height="80" rx="4" fill="#b07a45"/><circle cx="116" cy="84" r="40" fill="#4fc27f"/>
 ${[[100,70],[130,66],[120,98]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="7" fill="${RED}"/>`).join('')}
 <path d="M60,150 a56,36 0 0 1 112,0" fill="#000" opacity=".08"/>
 ${at(60,190,.76,cat({eyes:'closed',mouth:'w',armR:-70,prop:`<circle cx="2" cy="-8" r="7" fill="${RED}"/>`}))}
 ${T(30,50,'+',34,MINT.length?'#1f9c83':MINT,'middle','beat')}${T(60,50,'+',24,'#1f9c83','middle','beat')}
 ${heart(170,120,.8,RED,0)}`;

S.forward=`${park(160)}${floor(172,'#f3d9a4')}
 <g class="beat">${arrow(60,60,150,60,RED,10)}</g>
 ${[40,70,100].map((x,i)=>pawK(x,186-(i%2)*8,90,'#b07a45')).join('')}
 <g transform="translate(140,186) scale(-.84,.84)"><g class="walkbob">${cat({eyes:'happy',feet:'walk',armL:0,armR:-110,armLcls:'slowA',armsFront:true})}</g></g>`;

S.lawyer=`${room('#ece6ff','#d6ccf5')}
 <path d="M150,150 V60" stroke="#b07a45" stroke-width="5"/><path d="M116,60 h68" stroke="#b07a45" stroke-width="4"/><path d="M116,60 l-12,34 h24 Z M184,60 l-12,34 h24 Z" fill="none" stroke="${INK}" stroke-width="1.500"/><path d="M102,94 h28 q-14,12 -28,0 M170,94 h28 q-14,12 -28,0" fill="${SUN}"/><rect x="134" y="150" width="32" height="8" rx="3" fill="#8a5a30"/>
 <rect x="110" y="16" width="30" height="24" rx="2" fill="#fff" stroke="#cbc2e6" stroke-width="1.500"/>${T(125,33,'§',16,INK)}
 ${sh(60,192,34)}${at(60,190,.94,cat({mid:tie,hat:glasses,eyes:'happy',mouth:'open',armL:120,armsFront:true,armR:-20,prop:mappe}))}`;

S.present=`${bg('#fff3cf')}<circle cx="100" cy="110" r="80" fill="#ffe7a3"/>${floor(184,'#ffe08a')}
 <g class="hop"><g transform="translate(100,170) scale(2.600)">${P.gift(RED,SUN)}</g></g>
 ${spark(40,60,10,SUN,0)}${spark(164,56,9,VIO,.5)}${spark(160,140,7,SUN,1)}
 ${at(36,200,.5,cat({eyes:'spark',mouth:'o',armR:-140,armsFront:true}))}${papel(8,10,190)}`;

S.section=`${bg('#e6f1ff')}${floor(184,'#cfe3f7')}
 <circle cx="100" cy="90" r="66" fill="#fff"/><path d="M100,90 L100,24 A66,66 0 0 1 157,123 Z" fill="${RED}" class="pulse" style="transform-origin:100px 90px"/>
 <path d="M100,90 L157,123 A66,66 0 0 1 43,123 Z" fill="${SKY}" opacity=".5"/><path d="M100,90 L43,123 A66,66 0 0 1 100,24 Z" fill="${SUN}" opacity=".5"/>
 ${lbl(170,40,136,66)}${T(176,30,'A',16,RED)}
 ${at(30,200,.5,cat({hat:glasses,eyes:'happy',armR:-140,armsFront:true}))}`;

S.environmental=`${bg('#d9f7e1')}${sun(30,26,9)}
 <g class="float"><circle cx="110" cy="84" r="54" fill="#5cc3ff"/><path d="M84,50 q20,-12 30,4 q2,18 -16,22 q-18,0 -14,-26 Z M120,90 q22,-8 30,12 q-4,22 -22,24 q-14,-12 -8,-36 Z M70,100 q12,0 14,12 q-6,10 -14,2 Z" fill="#6fd08f"/><circle cx="98" cy="82" r="3" fill="${INK}"/><circle cx="122" cy="82" r="3" fill="${INK}"/><path d="M102,94 q8,7 16,0" fill="none" stroke="${INK}" stroke-width="2.500" stroke-linecap="round"/></g>
 <path d="M60,150 q50,24 100,0" fill="none" stroke="#3aa568" stroke-width="4" stroke-linecap="round"/>${heart(160,40,.9,RED,0)}
 ${floor(184,'#8fe0a8')}${tree(176,186,1)}
 ${at(44,198,.6,cat({eyes:'happy',armR:-96,armsFront:true,prop:`<g transform="translate(4,2)">${sprout(0,6,16)}</g>`}))}`;

S.glass=`${bg('#e3fbf5')}${floor(170,MINT)}<rect y="170" width="200" height="8" fill="#9be6d8"/>
 <path d="M84,70 h64 l-8,100 h-48 Z" fill="#fff" opacity=".75" stroke="#bfe9ff" stroke-width="4"/><path d="M89,110 h54 l-5,58 h-44 Z" fill="${SKY}" opacity=".8"/>
 <path d="M96,82 l-3,60" stroke="#fff" stroke-width="5" stroke-linecap="round" class="glow"/>
 <circle class="bubble" cx="110" cy="150" r="4" fill="#fff"/><circle class="bubble" style="animation-delay:1s" cx="126" cy="156" r="3" fill="#fff"/>
 ${spark(160,70,8,'#fff',0)}
 ${at(40,206,.6,cat({eyes:'happy',tail:false,armR:-120,armsFront:true}))}`;

S.skill=`${bg('#fff3cf')}${floor(184,'#ffe08a')}
 <path d="M30,96 h140" stroke="${INK}" stroke-width="2"/><path d="M30,96 v88 M170,96 v88" stroke="#b07a45" stroke-width="5"/>
 <g class="sway" style="transform-origin:100px 96px">${at(100,96,.6,cat({eyes:'happy',mouth:'tongue',armL:100,armR:-100,feet:'walk',prop:`<path d="M-50,0 h100" stroke="${RED}" stroke-width="3"/>`}))}</g>
 ${[40,60,140,160].map((x,i)=>`<g class="twinkle" style="animation-delay:${i*.2}s">${star5(x,60,7,SUN)}</g>`).join('')}
 ${at(100,200,.4,K('orange',{eyes:'wide',mouth:'o'}))}`;
