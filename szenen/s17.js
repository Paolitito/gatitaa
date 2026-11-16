/* Tag 55–58: end, among, ever, stand, bad · lose, however, member, pay, law · meet, city, almost, include, continue · set, later, community, name, once */
S.end=`${park(160)}${floor(168,'#e0875a')}<path d="M0,180 h200" stroke="#fff" stroke-width="2" opacity=".7"/>
 <path d="M60,168 v-100 M150,168 v-100" stroke="#9aa8c0" stroke-width="5" stroke-linecap="round"/><rect x="56" y="56" width="98" height="26" rx="5" fill="${RED}"/>${T(105,76,'END',20,'#fff')}
 <path class="flower" d="M60,130 q45,10 90,0" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
 ${[[20,RED,0],[100,SUN,.9],[180,VIO,1.3],[60,SKY,.4],[140,MINT,2]].map(([x,c,d])=>`<rect class="conf" style="animation-delay:-${d}s" x="${x}" y="0" width="7" height="4" rx="1.5" fill="${c}"/>`).join('')}
 <g transform="translate(104,192) rotate(8) scale(-.8,.8)"><g class="runbob">${cat({armL:140,armR:-140,armsFront:true,feet:'run',eyes:'happy',mouth:'big'})}</g></g>`;

S.among=`${bg('#ffe9d6')}${floor(186,'#ffd9bd')}
 ${at(30,170,.46,K('orange',{eyes:'happy'}))}${at(70,164,.46,K('grey',{eyes:'happy'}))}${at(130,164,.46,K('white',{eyes:'happy'}))}${at(170,170,.46,K('cream',{eyes:'happy'}))}
 ${at(44,194,.5,K('white',{eyes:'happy',mouth:'open'}))}${at(156,194,.5,K('orange',{eyes:'happy',mouth:'open'}))}
 ${at(100,192,.62,cat({eyes:'happy',mouth:'open',armL:125,armR:-125,armsFront:true}),'hop')}${ring(100,160,40,RED)}
 ${heart(100,70,1.1,RED,0)}`;

S.ever=`${bg('#fff3cf')}${burst(30,36,RED,0)}${burst(170,30,VIO,.5)}${burst(100,20,SKY,1)}${burst(176,110,MINT,1.4)}
 ${floor(184,'#ffe08a')}
 <rect x="110" y="136" width="70" height="48" rx="8" fill="#fff8e6"/><rect x="110" y="136" width="70" height="14" rx="7" fill="${RED}"/><path d="M118,150 q6,10 12,0 q6,10 12,0 q6,10 12,0 q6,10 12,0 q6,10 12,0" fill="${RED}"/>
 <rect x="143" y="116" width="4" height="20" fill="${SKY}"/><path class="beat" d="M145,104 q-5,7 0,12 q5,-5 0,-12 Z" fill="${ORA}"/>
 ${sh(58,190,32)}${at(58,188,.92,cat({eyes:'spark',mouth:'big',armL:130,armR:-130,armsFront:true,bow:false,hat:crown}),'hop')}`;

S.stand=`${bg('#e3fbf5')}${floor(184,'#bff0de')}
 <rect x="70" y="150" width="64" height="12" rx="6" fill="#c98a4b"/><rect x="76" y="162" width="9" height="24" fill="#8a5a30"/><rect x="119" y="162" width="9" height="24" fill="#8a5a30"/>
 ${at(102,152,1,cat({eyes:'happy',armL:10,armR:-10}))}
 <path d="M168,160 V40 M168,40 l-7,11 M168,40 l7,11" fill="none" stroke="${RED}" stroke-width="6" stroke-linecap="round" class="float"/>
 <g opacity=".3">${at(34,190,.5,cat({tail:false,eyes:'closed'}))}</g>`;

S.bad=`${bg('#e9efe0')}${floor(170,'#c98a4b')}<rect y="170" width="200" height="8" fill="#e0a868"/>
 <g transform="translate(140,176)">${P.plate(36)}</g><g transform="translate(140,162) scale(2.4)"><path d="M-9,0 l-8,-6 v12 Z" fill="#7a9a5a"/><ellipse cx="0" cy="0" rx="10" ry="6.500" fill="#9bb86a"/><path d="M3,-3 l4,4 M7,-3 l-4,4" stroke="${INK}" stroke-width="1.200"/></g>
 <path class="heatw" d="M124,130 q6,-8 0,-16 q-6,-8 0,-16" fill="none" stroke="#7a9a5a" stroke-width="4" stroke-linecap="round"/><path class="heatw" style="animation-delay:.6s" d="M152,126 q6,-8 0,-16 q-6,-8 0,-16" fill="none" stroke="#7a9a5a" stroke-width="4" stroke-linecap="round"/>
 <g class="flutter"><circle cx="170" cy="110" r="2.500" fill="${INK}"/></g><g class="flutter" style="animation-delay:-2s"><circle cx="112" cy="120" r="2.500" fill="${INK}"/></g>
 ${at(50,196,.86,cat({eyes:'closed',mouth:'wavy',armR:-150,armsFront:true,tail:false,headCls:'shiver'}))}
 <g class="beat"><circle cx="40" cy="40" r="20" fill="#fff"/>${cross(40,40,9,6)}</g>`;

S.lose=`${bg('#e6f1ff')}${floor(184,'#cfe3f7')}
 <rect x="60" y="14" width="80" height="40" rx="6" fill="${INK}"/>${T(82,44,'0',26,'#fff')}${T(100,43,':',24,'#9aa8c0')}${T(118,44,'3',26,SUN)}
 ${at(146,188,.7,K('orange',{eyes:'happy',mouth:'open',armL:130,armR:-130,armsFront:true}),'hop')}<g transform="translate(146,74) scale(.5)"><path d="M-28,0 h56 v24 q0,30 -28,30 q-28,0 -28,-30 Z" fill="${SUN}"/><rect x="-6" y="52" width="12" height="20" fill="#e0a83a"/><rect x="-22" y="70" width="44" height="12" rx="4" fill="#e0a83a"/></g>
 ${sh(56,190,30)}${at(56,188,.9,cat({eyes:'closed',mouth:'wavy',armL:8,armR:-8,headCls:'tilt'}))}
 <path class="sweat" d="${tear(34,104)}" fill="${SKY}"/><path class="sweat" style="animation-delay:.6s" d="${tear(80,108)}" fill="${SKY}"/>`;

S.however=`${bg('#ffe2a8')}${sun(40,40,20)}${thermo(180,40,62,RED)}
 <path d="M0,172 q50,-16 100,0 t100,0 v28 h-200 Z" fill="#f6c27a"/>
 <g class="road"><path d="M-40,190 h320" stroke="#e4a85a" stroke-width="4" stroke-dasharray="14 26" stroke-linecap="round"/></g>
 <circle class="puff" cx="50" cy="178" r="7" fill="#fff"/>
 <g transform="translate(104,184) rotate(9) scale(-.96,.96)"><g class="runbob">${cat({armL:0,armR:0,armLcls:'swingA',armRcls:'swingB',feet:'run',eyes:'happy',mouth:'open'})}</g></g>
 <path class="sweat" d="${tear(146,80)}" fill="${SKY}"/><path class="sweat" style="animation-delay:.5s" d="${tear(70,96)}" fill="${SKY}"/>`;

const clubhut=(c)=>`<path d="M-22,-100 q22,-34 44,0 Z" fill="${c}"/><circle cx="0" cy="-122" r="5" fill="#fff"/>`;
S.member=`${bg('#e3fbf5')}${floor(186,'#bff0de')}
 <rect x="50" y="10" width="100" height="26" rx="8" fill="${SKY}"/>${T(100,29,'CLUB',16,'#fff')}
 ${at(150,190,.56,K('orange',{eyes:'happy',hat:clubhut(SKY)}))}${at(184,192,.46,K('grey',{eyes:'happy',hat:clubhut(SKY)}))}
 <g class="givemove" style="animation-direction:alternate-reverse"><rect x="80" y="100" width="40" height="26" rx="4" fill="#fff" stroke="${SKY}" stroke-width="3"/><circle cx="92" cy="113" r="6" fill="${CB}"/><path d="M102,108 h12 M102,116 h8" stroke="#cbc2e6" stroke-width="2.500" stroke-linecap="round"/></g>
 ${sh(56,192,32)}${at(56,190,.92,cat({eyes:'spark',mouth:'open',armR:-96,armsFront:true}))}
 ${spark(110,70,7,SUN,0)}`;

S.pay=`${room('#fff1c9','#e4b77a')}
 ${at(150,150,.6,K('orange',{eyes:'happy',mouth:'open',tail:false}))}
 <rect x="100" y="136" width="100" height="50" fill="#c98a4b"/><rect x="96" y="128" width="104" height="10" rx="4" fill="#8a5a30"/>
 <rect x="150" y="96" width="40" height="32" rx="4" fill="#9aa8c0"/><rect x="156" y="102" width="28" height="10" rx="2" fill="#bfe9ff"/><rect x="146" y="124" width="48" height="8" rx="3" fill="#7a8aa6"/>
 <g class="givemove">${coin(96,116,8)}</g>
 ${sh(52,192,32)}${at(52,190,.9,cat({eyes:'happy',armR:-96,armsFront:true}))}
 <g transform="translate(120,128) scale(1.2)">${P.fish}</g>`;

S.law=`${bg('#ece6ff')}<circle cx="100" cy="90" r="80" fill="#f6f2ff"/>${floor(184,'#d6ccf5')}
 <path d="M100,30 v96" stroke="#b07a45" stroke-width="6" stroke-linecap="round"/><rect x="76" y="124" width="48" height="10" rx="4" fill="#8a5a30"/>
 <g class="sway" style="transform-origin:100px 40px"><path d="M40,40 h120" stroke="#b07a45" stroke-width="5" stroke-linecap="round"/><path d="M40,40 l-14,34 h28 Z M160,40 l-14,34 h28 Z" fill="none" stroke="#b07a45" stroke-width="2"/><path d="M24,74 a16,10 0 0 0 32,0 Z" fill="${SUN}"/><path d="M144,74 a16,10 0 0 0 32,0 Z" fill="${SUN}"/></g>
 <circle cx="100" cy="28" r="7" fill="${SUN}"/>
 <g transform="translate(150,180)"><rect x="-22" y="-28" width="44" height="28" rx="3" fill="${RED}"/><rect x="-22" y="-28" width="8" height="28" fill="#b52f29"/>${T(4,-8,'§',18,'#fff')}</g>
 ${at(44,194,.7,cat({eyes:'happy',hat:glasses,armR:-110,armsFront:true,prop:`<g class="wave"><path d="M0,2 v-22" stroke="#8a5a30" stroke-width="4" stroke-linecap="round"/><rect x="-10" y="-30" width="20" height="10" rx="3" fill="#b07a45"/></g>`}))}`;

S.meet=`${park()}${cloud(100,24,.7)}
 <path d="M0,200 Q60,170 100,186 Q140,170 200,200" fill="none" stroke="#f3d9a4" stroke-width="14"/>
 ${sh(62,190,30)}${at(62,188,.88,cat({eyes:'happy',mouth:'open',armR:-80}))}
 ${sh(140,190,30)}${flipAt(140,188,.88,K('orange',{eyes:'happy',mouth:'open',armR:-80}))}
 <g class="beat"><ellipse cx="101" cy="150" rx="12" ry="9" fill="${SUN}"/></g>${spark(101,120,8,SUN,0)}${spark(86,104,5,RED,.4)}${spark(118,104,5,RED,.8)}`;

S.city=`${bg('#cdeeff')}${cloud(40,26,.7)}${sun(170,28,10)}
 ${[[10,70,34,SKY],[48,40,30,'#b9c4d8'],[82,84,36,ORA],[122,52,32,'#9aa8c0'],[158,74,36,VIO]].map(([x,y,w,c])=>`<rect x="${x}" y="${y}" width="${w}" height="${166-y}" rx="3" fill="${c}"/>${[0,1,2,3].map(r=>y+10+r*20<150?`<rect x="${x+6}" y="${y+10+r*20}" width="8" height="10" fill="#fff6c8"/><rect x="${x+w-14}" y="${y+10+r*20}" width="8" height="10" fill="#fff" opacity=".7"/>`:'').join('')}`).join('')}
 ${floor(166,'#6b7a99')}<g class="road"><path d="M-40,184 h320" stroke="#fff" stroke-width="4" stroke-dasharray="18 22"/></g>
 <g class="scroll" style="animation-duration:5s"><g transform="translate(230,180) scale(.5)">${P.car(RED)}</g></g>
 ${at(36,196,.5,cat({eyes:'wide',mouth:'o',armL:125,armR:-125,armsFront:true}))}`;

S.almost=`${bg('#d6f1ff')}${floor(176,'#9fd4f0')}
 <path d="M70,60 h60 l-6,116 h-48 Z" fill="#f3fbff" stroke="#fff" stroke-width="4" stroke-linejoin="round"/>
 <path d="M72.500,78 q6,-4 12,0 t12,0 t12,0 t12,0 t7,0 l-5,95 h-45 Z" fill="#5cc3ff" opacity=".9"/>
 <path d="M134,60 h20 M134,78 h20" stroke="${RED}" stroke-width="3" stroke-linecap="round"/><path d="M146,62 v14" stroke="${RED}" stroke-width="3" class="glow"/>
 <path class="drip" d="${tear(100,14)}" fill="${SKY}"/>
 ${at(34,194,.66,cat({eyes:'wide',mouth:'o',armR:-110,armsFront:true}))}`;

S.include=`${bg('#fff1c9')}${floor(184,'#ffe08a')}
 <rect x="50" y="76" width="130" height="96" rx="12" fill="${SKY}"/><rect x="58" y="84" width="114" height="80" rx="8" fill="#fff"/><path d="M115,84 v80 M58,124 h57" stroke="${SKY}" stroke-width="3"/>
 <g transform="translate(86,108) scale(1.6)">${P.fish}</g><circle cx="86" cy="146" r="11" fill="${RED}"/><g transform="translate(144,150) scale(1.1)">${P.cup(MINT)}</g>
 <rect x="46" y="72" width="138" height="104" rx="14" fill="none" stroke="${RED}" stroke-width="3" stroke-dasharray="8 7" class="glow"/>
 <g class="hop"><g transform="translate(144,56)">${star5(0,0,10,SUN)}</g></g>${arrow(144,70,144,96,RED,4)}
 ${at(26,194,.5,cat({eyes:'happy',armR:-100,armRcls:'bob'}))}`;

S.continue=`${park()}${sun(30,28,10)}
 <path d="M0,186 h200" stroke="#f3d9a4" stroke-width="16"/>
 <path d="M60,186 v-50" stroke="#b07a45" stroke-width="4"/><rect x="48" y="118" width="24" height="24" rx="5" fill="#fff"/><rect x="54" y="124" width="4" height="12" fill="${INK}"/><rect x="62" y="124" width="4" height="12" fill="${INK}"/>
 <g class="beat"><circle cx="150" cy="60" r="26" fill="${MINT}"/><path d="M140,48 l14,12 -14,12 Z M154,48 l14,12 -14,12 Z" fill="#fff"/></g>
 <g class="road"><path d="M84,150 h90" stroke="${RED}" stroke-width="4" stroke-dasharray="8 12" stroke-linecap="round"/></g>
 <g transform="translate(116,192) scale(-.7,.7)"><g class="walkbob">${cat({armL:0,armR:0,armLcls:'slowA',armRcls:'slowB',feet:'walk',eyes:'happy'})}</g></g>`;

S.set=`${room('#fff1c9','#e4b77a')}
 ${at(110,186,1.3,P.table(130))}<path d="M26,112 h168 v10 h-168 Z" fill="#fff"/>
 <g transform="translate(70,116)">${P.plate(22)}</g><g transform="translate(150,116)">${P.plate(22)}</g>
 <path d="M44,116 v-12 M176,116 v-12" stroke="#b9c4d8" stroke-width="3" stroke-linecap="round"/>
 <g class="hop"><g transform="translate(110,112) scale(.9)">${P.cup(RED)}</g></g>${arrow(110,50,110,76,RED,5)}
 ${at(110,152,.5,cat({eyes:'happy',armL:150,armR:-150,armsFront:true,tail:false}))}`;

S.later=`${bg('#ece6ff')}
 ${panel(8,36,84,116)}${panel(108,36,84,116)}
 ${at(50,140,.52,cat({armL:40,armR:-140,armRcls:'munch',armsFront:true,mouth:'open',mouthCls:'chew',prop:P.fish,tail:false}))}
 <g opacity=".55">${at(146,140,.52,cat({armR:-72,eyes:'happy'}))}<g transform="translate(168,140) scale(.7)">${P.ball(RED)}</g></g>
 <rect x="106" y="34" width="88" height="120" rx="14" fill="none" stroke="${RED}" stroke-width="4" class="glow"/>
 <g class="ring">${at(100,196,.5,P.clock(28,60))}</g>${arcArrow(70,170,130,170,-16,RED,5)}`;

S.community=`${park(150)}${sun(30,26,10)}
 <g transform="translate(40,124) scale(.5)">${P.house()}</g><g transform="translate(100,112) scale(.5)">${P.house(SKY)}</g><g transform="translate(160,124) scale(.5)">${P.house(VIO,'#ffe2b8')}</g>
 <ellipse cx="100" cy="168" rx="80" ry="24" fill="none" stroke="${RED}" stroke-width="3" stroke-dasharray="8 8"/>
 ${at(44,186,.4,K('orange',{eyes:'happy',armL:70,armR:-70}))}${at(82,194,.44,cat({eyes:'happy',armL:70,armR:-70}))}${at(120,194,.44,K('white',{eyes:'happy',armL:70,armR:-70}))}${at(158,186,.4,K('grey',{eyes:'happy',armL:70,armR:-70}))}
 ${heartS(100,150,1.3,RED,'beat')}`;

S.name=`${bg('#e3fbf5')}
 <g class="sway" style="transform-origin:100px 20px"><rect x="30" y="24" width="140" height="80" rx="10" fill="${RED}"/><rect x="38" y="54" width="124" height="42" rx="6" fill="#fff"/>${T(100,46,'HELLO',16,'#fff')}${T(100,86,'Canela',28,INK)}</g>
 ${floor(184,'#bff0de')}${sh(100,192,32)}${at(100,190,.76,cat({eyes:'happy',mouth:'open',armL:150,armR:-150,armsFront:true}))}`;

S.once=`${park(170)}${cloud(40,26,.7)}
 <g class="beat"><circle cx="160" cy="44" r="26" fill="#fff"/><path d="M160,28 v32" stroke="${RED}" stroke-width="8" stroke-linecap="round"/></g>
 ${sh(46,192,28)}${at(46,190,.86,cat({armL:30,armR:-120,armRcls:'throwarm',armsFront:true,eyes:'happy',mouth:'open'}))}
 <g transform="translate(74,116)"><g class="throwball"><g transform="scale(.9)">${P.ball(RED)}</g></g></g>
 <path d="M76,112 q54,-70 106,0" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="3 9" stroke-linecap="round"/>`;
