/* Tag 63–66: watch, together, follow, parent, stop · face, anything, create, public, already · speak, others, level, allow, add · office, spend, health, person, art */
S.watch=`${bg('#2d2a6e')}${floor(176,'#1f1b4d')}
 <rect x="80" y="20" width="110" height="80" rx="10" fill="${INK}"/><rect x="88" y="28" width="94" height="64" rx="6" fill="#bfe9ff"/><g transform="translate(110,70)"><g class="roll" style="animation-duration:1.4s">${P.ball(RED)}</g></g><path d="M88,80 h94" stroke="#8fe0a8" stroke-width="10"/>
 <circle class="glow" cx="135" cy="60" r="70" fill="#bfe9ff" opacity=".15"/>
 <rect x="20" y="130" width="120" height="50" rx="14" fill="${VIO}"/><rect x="14" y="140" width="18" height="44" rx="8" fill="#7b55d9"/><rect x="128" y="140" width="18" height="44" rx="8" fill="#7b55d9"/>
 ${at(80,172,.8,cat(Object.assign({eyes:'wide',mouth:'open',mouthCls:'chew',armR:-140,armRcls:'munch',armsFront:true,tail:false,armL:40,propL:`<g transform="translate(0,8)"><path d="M-12,-14 h24 l-4,18 h-16 Z" fill="${RED}"/><circle cx="-5" cy="-16" r="5" fill="#fff8e6"/><circle cx="4" cy="-18" r="5" fill="#fff8e6"/></g>`},NL)))}`;

S.together=`${park(170)}${sun(30,28,10)}${cloud(150,30,.8)}
 ${at(46,190,.7,cat({eyes:'happy',mouth:'open',armL:130,armR:-130,armsFront:true}),'hop')}
 ${at(104,190,.7,K('orange',{eyes:'happy',mouth:'open',armL:130,armR:-130,armsFront:true}))}
 ${at(160,190,.6,P.dog({happy:true}))}
 <g transform="translate(76,60)"><g class="jump">${P.ball(RED)}</g></g>
 <ellipse cx="100" cy="150" rx="94" ry="52" fill="none" stroke="${RED}" stroke-width="3" stroke-dasharray="9 8"/>${heart(130,70,.9,RED,0)}`;

S.follow=`${park()}${cloud(40,26,.7)}
 <path d="M0,186 h200" stroke="#f3d9a4" stroke-width="16"/>
 <g transform="translate(160,192) scale(-.7,.7)"><g class="walkbob">${cat({armL:0,armR:0,armLcls:'slowA',armRcls:'slowB',feet:'walk',eyes:'happy'})}</g></g>
 ${[[104,'cream',.1],[68,'orange',.2],[32,'grey',.3]].map(([x,n,d])=>`<g transform="translate(${x},192) scale(-.4,.4)"><g class="walkbob" style="animation-delay:${d}s">${K(n,{armL:0,armR:0,armLcls:'slowA',armRcls:'slowB',feet:'walk',eyes:'happy'})}</g></g>${arrow(x+12,140,x+26,140,RED,3,'glow')}`).join('')}`;

S.parent=`${bg('#ffe9d6')}<circle cx="100" cy="100" r="84" fill="#ffdcc0"/>${floor(186,'#ffd9bd')}
 ${at(46,188,.86,K('white',{eyes:'happy',hat:earflower,armR:-50}))}${at(154,188,.86,K('grey',{eyes:'happy',mid:tie,armL:50}))}
 ${at(100,190,.56,cat({eyes:'happy',mouth:'open',armL:110,armR:-110,tail:false}),'hop')}
 <path d="M24,80 q0,-14 14,-14 h124 q14,0 14,14" fill="none" stroke="${VIO}" stroke-width="5" stroke-linecap="round"/>${heart(100,50,1.1,RED,0)}`;

S.stop=`${park(170)}${floor(176,'#6b7a99')}
 <path d="M150,180 v-70" stroke="#9aa8c0" stroke-width="6" stroke-linecap="round"/>
 <g class="beat"><polygon points="134,36 166,36 188,58 188,90 166,112 134,112 112,90 112,58" fill="${RED}" stroke="#fff" stroke-width="4"/>${T(150,84,'STOP',22,'#fff')}</g>
 ${sh(54,192,32)}${at(54,190,.92,cat({mouth:'open',armR:-96,armsFront:true}))}
 <ellipse cx="96" cy="140" rx="14" ry="16" fill="${CB}" stroke="${CO}" stroke-width="1.600"/><ellipse cx="96" cy="144" rx="6" ry="5" fill="#ff8a7a"/>`;

S.face=`${bg('#ece6ff')}<circle cx="100" cy="100" r="88" fill="#f6f2ff"/>
 <clipPath id="fc"><rect width="200" height="176"/></clipPath><g clip-path="url(#fc)">${at(100,254,1.9,cat({tail:false,eyes:'happy',headCls:'tilt'}))}</g>
 <ellipse cx="100" cy="112" rx="84" ry="74" fill="none" stroke="${RED}" stroke-width="4" stroke-dasharray="10 9" class="glow"/>
 ${floor(176,'#d6ccf5')}${arrow(184,20,160,48,RED,6,'float')}`;

S.anything=`${bg('#fff1c9')}
 ${at(100,150,.96,cat({eyes:'spark',mouth:'big',armL:70,armR:-70,prop:knife,propL:fork,tail:false}))}
 ${floor(136,MINT)}<rect y="136" width="200" height="8" fill="#9be6d8"/>
 <g transform="translate(100,186)">${P.plate(90)}</g>
 ${fishAt(50,170,1.6,-10)}<circle cx="80" cy="166" r="11" fill="${RED}"/><path d="M96,176 a16,16 0 0 1 32,0 Z" fill="#ffcf5c" stroke="#e0a83a" stroke-width="1.600"/>
 <path d="M134,176 h30 v-14 q-15,-10 -30,0 Z" fill="#fff8e6"/><path d="M134,162 q15,-10 30,0" fill="none" stroke="${RED}" stroke-width="4"/><circle cx="149" cy="154" r="4" fill="${RED}"/>
 <circle cx="112" cy="160" r="8" fill="#4fc27f"/><path d="M60,182 q10,-8 20,0" stroke="${SUN}" stroke-width="6" fill="none" stroke-linecap="round"/>`;

const barett=`<ellipse cx="6" cy="-104" rx="28" ry="10" fill="${RED}"/><circle cx="6" cy="-114" r="3" fill="#b52f29"/>`;
S.create=`${room('#fff1c9','#e4b77a')}
 <path d="M110,186 l14,-130 M176,186 l-14,-130 M143,186 v-40" stroke="#b07a45" stroke-width="5" stroke-linecap="round"/><rect x="104" y="36" width="78" height="84" rx="3" fill="#fff" stroke="#cbc2e6" stroke-width="2"/>
 <circle cx="124" cy="58" r="10" fill="${SUN}"/><path class="grow" d="M108,104 q18,-28 36,-8 q14,-22 34,0 v12 h-70 Z" fill="${MINT}"/><path class="draw" d="M112,84 q20,-10 60,-4" fill="none" stroke="${SKY}" stroke-width="4" stroke-linecap="round"/>
 ${sh(56,192,32)}${at(56,190,.92,cat({bow:false,hat:barett,eyes:'happy',mouth:'tongue',armL:40,armR:-110,armRcls:'bob',armsFront:true,prop:`<path d="M0,4 l6,-30" stroke="#b07a45" stroke-width="3" stroke-linecap="round"/><path d="M5,-24 l2,-10 4,9 Z" fill="${RED}"/>`,propL:`<ellipse cx="0" cy="6" rx="15" ry="10" fill="#e4b77a"/><circle cx="-6" cy="4" r="3" fill="${RED}"/><circle cx="2" cy="1" r="3" fill="${SKY}"/><circle cx="7" cy="8" r="3" fill="${SUN}"/>`}))}`;

S.public=`${park(160)}${sun(30,26,10)}${cloud(150,26,.7)}
 <ellipse cx="100" cy="176" rx="50" ry="12" fill="#9fd4f0"/><rect x="92" y="130" width="16" height="44" rx="4" fill="#cfd8e6"/><ellipse cx="100" cy="130" rx="24" ry="6" fill="#dfe6f2"/>
 <path class="drip" d="M100,100 q-18,10 -22,34" fill="none" stroke="#5cc3ff" stroke-width="3" stroke-linecap="round"/><path class="drip" style="animation-delay:.5s" d="M100,100 q18,10 22,34" fill="none" stroke="#5cc3ff" stroke-width="3" stroke-linecap="round"/>
 ${at(30,190,.46,P.person({shirt:SKY,stripe:'#2f6fd0',long:true,hair:'#3a2a4a',wave:false,happy:true}))}${at(172,190,.5,P.person({shirt:MINT,stripe:'#1f9c83',skin:'#c98a5a',hair:'#3a2a4a'}))}
 ${at(60,196,.4,cat({eyes:'happy'}))}${at(142,196,.36,K('orange',{eyes:'happy'}))}
 <rect x="76" y="20" width="48" height="22" rx="5" fill="${MINT}"/>${T(100,36,'PARK',12,'#fff')}<path d="M100,42 v20" stroke="#b07a45" stroke-width="3"/>`;

S.already=`${bg('#ffe2a8')}<rect x="120" y="14" width="64" height="54" rx="8" fill="#ffd98a" stroke="#fff" stroke-width="5"/><g transform="translate(152,50) scale(.9)">${sun(0,0,12)}</g>${floor(170,'#f0c98a')}
 ${at(104,186,1.6,P.bed)}${at(66,164,.6,cat({tail:false,eyes:'closed',armL:60,armR:-60}))}<path class="breathe" d="M74,150 q40,-22 108,0 v24 h-108 Z" fill="${SKY}"/>
 <g class="ring">${at(28,140,.5,P.clock(28,180))}</g>
 <g font-family="Baloo 2, Trebuchet MS, sans-serif" font-weight="800" fill="${VIO}"><text class="zz" x="88" y="110" font-size="14">z</text><text class="zz" style="animation-delay:1s" x="100" y="94" font-size="19">z</text></g>
 ${at(178,194,.36,K('orange',{eyes:'wide',mouth:'o'}))}`;

S.speak=`${bg('#3b2a4a')}<path d="M100,-10 L30,186 h140 Z" fill="#fff6c8" opacity=".25"/>${floor(176,'#8a5a30')}
 <path d="M140,176 v-70" stroke="#9aa8c0" stroke-width="4"/><rect x="132" y="92" width="16" height="22" rx="8" fill="#5a4a6c" transform="rotate(-20 140 103)"/>
 <path d="M150,84 q10,10 0,22 M162,76 q16,16 0,36" fill="none" stroke="${SUN}" stroke-width="4" stroke-linecap="round" class="glow"/>
 ${at(90,182,1,cat(Object.assign({mouth:'big',armL:60,armR:-90,armsFront:true},NL)))}
 ${at(20,198,.3,K('orange',{tail:false}))}${at(180,198,.3,K('grey',{tail:false}))}`;

S.others=`${park(170)}${cloud(40,26,.7)}
 ${at(40,190,.74,cat({armR:-72,armRcls:'bob',eyes:'happy',mouth:'open'}))}<g transform="translate(68,190)"><g class="roll" style="animation-duration:1.2s">${P.ball(RED)}</g></g>
 ${at(120,188,.5,K('orange',{tail:false}))}${at(150,188,.5,K('grey',{tail:false}))}${at(180,188,.5,K('white',{tail:false}))}
 <rect x="100" y="126" width="98" height="70" rx="16" fill="none" stroke="${RED}" stroke-width="4" stroke-dasharray="9 8" class="glow"/>${arrow(150,80,150,116,RED,6,'float')}`;

S.level=`${bg('#e3fbf5')}
 <rect x="20" y="150" width="50" height="40" fill="${SKY}"/><rect x="70" y="110" width="50" height="80" fill="${MINT}"/><rect x="120" y="70" width="60" height="120" fill="${SUN}"/>
 ${T(45,178,'1',22,'#fff')}${T(95,160,'2',22,'#fff')}${T(150,140,'3',22,'#fff')}
 ${at(95,112,.56,cat({eyes:'happy',mouth:'open',armL:130,armR:-130,armsFront:true}),'hop')}
 <g class="twinkle">${star5(150,46,14,RED)}</g>
 ${arcArrow(60,130,84,96,10,RED,4,'5 7')}${arcArrow(112,92,136,56,10,RED,4,'5 7')}`;

S.allow=`${park(170)}${floor(176,'#f3d9a4')}
 <rect x="100" y="110" width="14" height="70" rx="4" fill="#9aa8c0"/>
 <g class="lid" style="transform-box:view-box;transform-origin:107px 124px"><rect x="107" y="118" width="88" height="12" rx="6" fill="#fff"/><rect x="125" y="118" width="16" height="12" fill="${RED}"/><rect x="157" y="118" width="16" height="12" fill="${RED}"/></g>
 ${at(140,192,.56,K('orange',{eyes:'happy',armR:-125,armRcls:'wave',armsFront:true,hat:cap}))}
 <g class="beat"><circle cx="150" cy="50" r="24" fill="${MINT}"/><path d="M139,51 l8,9 14,-18" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></g>
 <g transform="translate(50,192) scale(-.74,.74)"><g class="walkbob">${cat({armL:0,armR:0,armLcls:'slowA',armRcls:'slowB',feet:'walk',eyes:'happy'})}</g></g>`;

S.add=`${bg('#fff3cf')}
 <circle cx="36" cy="60" r="28" fill="#fff"/><g transform="translate(36,60) scale(2)">${P.fish}</g>
 <g class="beat"><path d="M84,46 v28 M70,60 h28" stroke="${VIO}" stroke-width="8" stroke-linecap="round"/></g>
 <circle cx="130" cy="60" r="28" fill="#fff"/><g transform="translate(130,60) scale(2)">${P.fish}</g>
 <path d="M162,52 h20 M162,68 h20" stroke="${VIO}" stroke-width="7" stroke-linecap="round"/>
 ${floor(184,'#ffe08a')}
 <g transform="translate(150,184)">${P.plate(40)}</g>${fishAt(138,170,1.6,8)}${fishAt(162,172,1.6,-10)}
 ${at(60,192,.76,cat({eyes:'happy',mouth:'tongue',armR:-80}))}`;

S.office=`${room('#e6f1ff','#cfe3f7')}
 <rect x="130" y="16" width="52" height="44" rx="6" fill="#bfe9ff" stroke="#fff" stroke-width="5"/><g class="ring">${at(40,60,.5,P.clock(26,300))}</g>
 ${at(84,176,.92,cat({eyes:'happy',mid:tie,armL:30,armR:-30,armsFront:true,tail:false}))}
 <rect x="20" y="140" width="170" height="12" rx="4" fill="#c98a4b"/><rect x="30" y="152" width="10" height="36" fill="#8a5a30"/><rect x="170" y="152" width="10" height="36" fill="#8a5a30"/>
 <rect x="56" y="100" width="56" height="38" rx="4" fill="${INK}"/><rect x="60" y="104" width="48" height="30" rx="2" fill="#bfe9ff"/><path d="M66,112 h30 M66,120 h22 M66,128 h34" stroke="#fff" stroke-width="2.500" stroke-linecap="round" class="glow"/>
 <rect x="150" y="118" width="16" height="22" rx="4" fill="${ORA}"/><ellipse cx="154" cy="108" rx="5" ry="12" fill="#4fc27f" transform="rotate(-16 154 108)"/><ellipse cx="163" cy="108" rx="5" ry="12" fill="#4fc27f" transform="rotate(16 163 108)"/>`;

S.spend=`${bg('#e3fbf5')}${floor(184,'#bff0de')}
 <rect x="124" y="110" width="60" height="70" rx="4" fill="#fff" stroke="#cbc2e6" stroke-width="2"/><path d="M138,110 q16,-26 32,0" fill="none" stroke="${RED}" stroke-width="4"/>${star5(154,146,12,RED)}
 <rect x="150" y="130" width="44" height="52" rx="4" fill="${SKY}"/><path d="M160,130 q12,-20 24,0" fill="none" stroke="#2f6fd0" stroke-width="4"/>
 ${[[90,100,0],[104,80,.3],[84,70,.6]].map(([x,y,d])=>`<g class="rise" style="animation-delay:${d}s">${coin(x,y,7)}</g>`).join('')}
 ${sh(54,192,32)}${at(54,190,.92,cat({eyes:'happy',mouth:'open',armR:-96,armsFront:true,prop:`<g transform="translate(0,8)"><rect x="-14" y="-10" width="28" height="18" rx="4" fill="#7a4a21"/><rect x="-14" y="-10" width="28" height="6" rx="3" fill="#5a3a18"/></g>`}))}`;

S.health=`${bg('#e3fbf5')}<circle cx="100" cy="96" r="80" fill="#f0fdf8"/>${floor(184,'#bff0de')}${sh(100,190,36)}
 <g class="beat"><g transform="translate(150,52) scale(3)"><path d="${heartP}" fill="${RED}"/></g><path d="M150,36 v20 M140,46 h20" stroke="#fff" stroke-width="5" stroke-linecap="round"/></g>
 <circle cx="40" cy="60" r="16" fill="${RED}"/><path d="M40,46 q1,-6 5,-8" stroke="#7a4a21" stroke-width="2.500" fill="none" stroke-linecap="round"/><ellipse cx="48" cy="40" rx="6" ry="3" fill="#4fc27f" transform="rotate(-25 48 40)"/>
 <path d="M10,110 h20 l6,-14 8,26 6,-12 h20" fill="none" stroke="${MINT}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="draw"/>
 ${at(100,186,1,cat({eyes:'happy',mouth:'open',armL:130,armR:-130,armsFront:true}),'hop')}`;

S.person=`${park()}${cloud(40,26,.7)}
 ${sh(110,190,28)}${at(110,188,1,P.person({shirt:'#b9c4d8',stripe:'#9aa8c0',pants:'#5a4a6c',hair:'#5a3a18',shoes:'#3a2a4a'}))}
 <rect x="68" y="22" width="84" height="172" rx="36" fill="none" stroke="${RED}" stroke-width="4" stroke-dasharray="10 9" class="glow"/>
 ${at(30,194,.5,cat({armR:-100,armRcls:'bob',eyes:'happy'}))}`;

const rahmen=(x,y,w,h,inner)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="#fff" stroke="#b07a45" stroke-width="5"/>${inner}`;
S.art=`${room('#ece6ff','#d6ccf5')}
 ${rahmen(14,24,52,44,`<circle cx="32" cy="40" r="7" fill="${SUN}"/><path d="M18,64 l14,-14 10,8 10,-14 10,20 Z" fill="${MINT}"/>`)}
 ${rahmen(76,18,48,56,`<g transform="translate(100,70) scale(.34)">${K('orange',{tail:false})}</g>`)}
 ${rahmen(134,24,52,44,`<path d="M140,60 q10,-30 20,-6 q10,-24 20,6" fill="none" stroke="${RED}" stroke-width="4" stroke-linecap="round"/><circle cx="150" cy="38" r="5" fill="${SKY}"/><circle cx="172" cy="36" r="5" fill="${VIO}"/>`)}
 <path d="M10,100 h180" stroke="#b5addf" stroke-width="3" stroke-dasharray="2 10" stroke-linecap="round"/>
 ${spark(70,90,6,SUN,0)}${spark(130,92,6,SUN,.6)}
 ${sh(100,192,34)}${at(100,190,.9,cat({bow:false,hat:barett,eyes:'spark',mouth:'o',armL:-46,armR:46,armsFront:true}))}`;
