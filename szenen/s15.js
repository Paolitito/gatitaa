/* Tag 47–50: under, room, area, national, money · story, young, fact, month, different · lot, study, job, word, though · business, issue, side, kind, far */
S.under=`${bg('#fff1c9')}<rect x="130" y="16" width="52" height="46" rx="8" fill="#bfe9ff" stroke="#fff" stroke-width="5"/>${floor(176,'#e4b77a')}
 ${at(100,190,.66,cat({eyes:'happy',armR:-125,armRcls:'wave',armsFront:true}),'peek')}
 ${at(100,186,1.36,P.table(130))}
 <path d="M48,110 h104 v14 l-13,9 -13,-9 -13,9 -13,-9 -13,9 -13,-9 -13,9 -13,-9 Z" fill="${MINT}"/>
 ${arrow(170,80,150,134,RED,6,'float')}`;

S.room=`${bg('#cfe8ff')}<path d="M0,0 h200 v130 h-200 Z" fill="#e6f1ff"/>${floor(130,'#e4b77a')}<path d="M0,130 h200" stroke="#f0cb95" stroke-width="5"/>
 <rect x="20" y="24" width="50" height="50" rx="6" fill="#bfe9ff" stroke="#fff" stroke-width="5"/><path d="M45,24 v50 M20,49 h50" stroke="#fff" stroke-width="3"/>
 <g transform="translate(150,150) scale(.9)">${P.bed}</g>
 <rect x="96" y="30" width="40" height="30" rx="4" fill="#fff" stroke="#b07a45" stroke-width="3"/><circle cx="116" cy="45" r="7" fill="${SUN}"/>
 <ellipse cx="76" cy="176" rx="56" ry="12" fill="${RED}" opacity=".5"/>
 <path d="M30,130 v-34" stroke="#b07a45" stroke-width="4"/><path d="M18,96 l6,-18 h12 l6,18 Z" fill="${SUN}"/>
 ${at(76,180,.7,cat({eyes:'happy',armL:110,armR:-110,armsFront:true}))}`;

S.area=`${bg('#8fe0a8')}
 <rect x="30" y="40" width="140" height="120" rx="6" fill="#b7efc8" stroke="${RED}" stroke-width="4" stroke-dasharray="10 8"/>
 ${[30,170].map(x=>[40,160].map(y=>`<circle cx="${x}" cy="${y}" r="6" fill="${RED}"/>`).join('')).join('')}
 <path d="M30,28 h140 M30,28 l6,-5 M30,28 l6,5 M170,28 l-6,-5 M170,28 l-6,5 M184,40 v120 M184,40 l-5,6 M184,40 l5,6 M184,160 l-5,-6 M184,160 l5,-6" fill="none" stroke="${INK}" stroke-width="2.500" stroke-linecap="round"/>
 ${flower(52,150,SUN,0)}${flower(150,150,VIO,.5)}${tree(140,90,.5)}
 ${at(92,150,.62,cat({eyes:'happy',armR:-125,armRcls:'wave',armsFront:true}))}`;

S.national=`${bg('#cdeeff')}${burst(30,40,RED,0)}${burst(170,30,MINT,.6)}${burst(180,100,SUN,1.2)}
 <path d="M60,186 V20" stroke="#b07a45" stroke-width="5" stroke-linecap="round"/><circle cx="60" cy="18" r="5" fill="${SUN}"/>
 <g class="flower" style="transform-origin:60px 60px"><rect x="62" y="26" width="30" height="60" fill="#1f9c5a"/><rect x="92" y="26" width="30" height="60" fill="#fff"/><ellipse cx="107" cy="56" rx="7" ry="8" fill="#b07a45"/><path d="M100,62 q7,6 14,0" fill="none" stroke="#1f9c5a" stroke-width="2"/><rect x="122" y="26" width="30" height="60" fill="${RED}"/></g>
 ${floor(184,'#8fe0a8')}
 ${at(110,190,.6,cat({eyes:'happy',armR:-150,armsFront:true}))}${at(152,190,.5,K('orange',{eyes:'happy',armR:-150,armsFront:true}))}${at(184,190,.42,K('grey',{eyes:'happy'}))}`;

const coin=(x,y,r)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${SUN}" stroke="#e0a83a" stroke-width="2"/><circle cx="${x}" cy="${y}" r="${r*.55}" fill="none" stroke="#e0a83a" stroke-width="1.500"/>`;
S.money=`${bg('#e3fbf5')}${floor(184,'#bff0de')}
 <g transform="translate(132,150)"><ellipse cx="0" cy="0" rx="46" ry="34" fill="#8dc0ff"/><circle cx="-38" cy="-4" r="10" fill="#8dc0ff"/><ellipse cx="-44" cy="-4" rx="7" ry="8" fill="#4f9dff"/><circle cx="-46" cy="-6" r="1.500" fill="${INK}"/><circle cx="-42" cy="-6" r="1.500" fill="${INK}"/><circle cx="-22" cy="-14" r="3" fill="${INK}"/><path d="M-10,-30 l8,-12 8,10" fill="#8dc0ff"/><rect x="-10" y="-36" width="22" height="5" rx="2" fill="${INK}"/><rect x="-26" y="26" width="10" height="14" rx="3" fill="#4f9dff"/><rect x="14" y="26" width="10" height="14" rx="3" fill="#4f9dff"/><path d="M44,-6 q12,-6 8,6" fill="none" stroke="#4f9dff" stroke-width="3" stroke-linecap="round"/></g>
 <g class="drip" style="animation-duration:1.6s">${coin(134,84,9)}</g>
 ${coin(40,60,11)}${coin(64,40,9)}<g class="twinkle">${coin(26,90,8)}</g>
 <rect x="150" y="30" width="40" height="22" rx="4" fill="#4fc27f" transform="rotate(12 170 40)"/><circle cx="170" cy="41" r="6" fill="#b7efc8"/>
 ${sh(52,192,30)}${at(52,190,.84,cat({eyes:'spark',mouth:'open',armR:-110,armsFront:true}))}`;

S.story=`${bg('#ece6ff')}${floor(184,'#d6ccf5')}
 <path d="M60,150 Q95,138 130,150 Q165,138 196,150 V176 Q165,164 130,176 Q95,164 60,176 Z" fill="#fff" stroke="${SKY}" stroke-width="4" stroke-linejoin="round"/><path d="M130,150 v26" stroke="${SKY}" stroke-width="3"/>
 <g class="float"><rect x="78" y="96" width="36" height="46" fill="#dfe6f2"/><rect x="74" y="86" width="12" height="20" fill="#cfd8e6"/><rect x="106" y="86" width="12" height="20" fill="#cfd8e6"/><path d="M72,86 l8,-12 8,12 Z M104,86 l8,-12 8,12 Z" fill="${RED}"/><rect x="90" y="120" width="12" height="22" rx="6" fill="${VIO}"/></g>
 <g class="float" style="animation-delay:.7s"><ellipse cx="164" cy="124" rx="18" ry="12" fill="#4fc27f"/><circle cx="182" cy="112" r="9" fill="#4fc27f"/><circle cx="185" cy="110" r="1.800" fill="${INK}"/><path d="M150,120 l-10,-8 4,12 Z" fill="#4fc27f"/><path d="M160,112 l4,-10 6,8 Z" fill="${SUN}"/><path d="M190,116 q8,2 10,-4" stroke="${ORA}" stroke-width="3" fill="none" stroke-linecap="round" class="glow"/></g>
 ${spark(130,70,7,SUN,0)}${spark(100,60,5,VIO,.6)}
 ${at(32,192,.7,cat({mouth:'open',armR:-80,armRcls:'bob'}))}`;

S.young=`${room('#ffe9d6','#ffd9bd')}
 <path d="M10,26 q90,26 180,0" fill="none" stroke="#b07a45" stroke-width="2"/>${[[40,34,RED],[70,39,SUN],[100,41,SKY],[130,39,VIO],[160,34,MINT]].map(([x,y,c])=>`<path d="M${x-8},${y-4} h16 l-8,16 Z" fill="${c}"/>`).join('')}
 <rect x="50" y="120" width="100" height="56" rx="8" fill="#fff" stroke="#cbc2e6" stroke-width="2"/>${[62,78,94,110,126,142].map(x=>`<path d="M${x},122 v52" stroke="#cbc2e6" stroke-width="3"/>`).join('')}
 ${at(100,170,.56,cat({eyes:'happy',mouth:'open',armL:125,armR:-125,armsFront:true,tail:false,extra:`<circle cx="0" cy="-58" r="7" fill="${SKY}"/><circle cx="0" cy="-58" r="3" fill="#fff"/>`}),'hop')}
 <rect x="46" y="150" width="108" height="10" rx="5" fill="${SKY}"/>
 <g class="wiggle"><circle cx="170" cy="100" r="9" fill="${SUN}"/><rect x="167" y="108" width="6" height="18" rx="3" fill="${RED}"/></g>
 <g opacity=".35">${at(26,192,.5,K('grey',{hat:glasses.replace(/#fff/g,INK)}))}</g>`;

S.fact=`${bg('#e3fbf5')}
 <rect x="20" y="20" width="160" height="98" rx="8" fill="#fff" stroke="#b07a45" stroke-width="5"/>
 <path d="M30,74 q10,-6 20,0 t20,0 t20,0 v34 h-60 Z" fill="#5cc3ff"/><g transform="translate(60,92)"><g class="swim" style="animation-duration:3s"><g transform="scale(1.4)">${P.fish}</g></g></g>
 <g class="beat"><circle cx="140" cy="68" r="26" fill="${MINT}"/><path d="M128,69 l9,10 16,-20" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></g>
 ${floor(184,'#bff0de')}${sh(100,192,30)}${at(100,190,.72,cat({hat:glasses,eyes:'happy',armR:-150,armsFront:true,armRcls:'bob'}))}`;

S.month=`${bg('#ece6ff')}
 <rect x="50" y="14" width="136" height="124" rx="10" fill="#fff"/><rect x="50" y="14" width="136" height="24" rx="10" fill="${RED}"/><circle cx="76" cy="14" r="5" fill="${INK}"/><circle cx="160" cy="14" r="5" fill="${INK}"/>
 ${[0,1,2,3].map(r=>[0,1,2,3,4,5,6].map(c=>`<rect x="${58+c*17.600}" y="${46+r*22}" width="13" height="16" rx="3" fill="${c>4?'#ffe9d6':'#f4f1fb'}"/>`).join('')).join('')}
 <g class="glow"><rect x="54" y="42" width="128" height="92" rx="8" fill="none" stroke="${VIO}" stroke-width="4"/></g>
 <circle cx="24" cy="40" r="11" fill="#b9bdd4"/><circle cx="29" cy="36" r="9" fill="#ece6ff"/><circle cx="24" cy="80" r="11" fill="#ffe89a"/>
 ${floor(184,'#d6ccf5')}${at(40,194,.66,cat({eyes:'happy',armR:-140,armRcls:'bob',armsFront:true}))}`;

S.different=`${bg('#fff3cf')}${floor(184,'#ffe08a')}
 ${at(30,120,1.5,P.ball(RED))}${at(74,120,1.5,P.ball(RED))}${at(162,120,1.5,P.ball(RED))}
 <g class="beat">${star5(118,100,22,SKY,`stroke="${SKY}" stroke-width="4"`)}</g>${ring(118,100,32,RED)}
 ${arrow(118,30,118,60,RED,7,'float')}
 ${sh(100,192,30)}${at(100,190,.66,cat({eyes:'wide',mouth:'o',armR:-150,armsFront:true}))}`;

S.lot=`${bg('#d9fbf1')}<circle cx="100" cy="110" r="84" fill="#bff3e4"/>${floor(186,'#9fe6d2')}
 ${[[40,180,10],[70,182,-14],[100,180,6],[130,182,-8],[160,180,14],[54,166,-20],[86,168,12],[116,166,-6],[146,168,18],[70,152,8],[100,154,-12],[130,152,10],[86,138,-10],[114,138,14],[100,124,0]].map(([x,y,r])=>fishAt(x,y,1.5,r)).join('')}
 ${at(100,118,.6,cat({eyes:'happy',mouth:'big',armL:130,armR:-130,armsFront:true}),'hop')}
 ${spark(30,50,7,SUN,0)}${spark(170,60,7,SUN,.6)}`;

S.study=`${bg('#2d2a6e')}<rect x="130" y="16" width="56" height="48" rx="6" fill="#3b3880" stroke="#55508a" stroke-width="4"/><circle cx="166" cy="34" r="9" fill="#ffe89a"/>
 <circle class="glow" cx="80" cy="110" r="74" fill="#ffe89a" opacity=".25"/>
 ${at(84,174,.98,cat(Object.assign({hat:glasses,mouth:'tongue',armL:30,armR:-22,armsFront:true,tail:false},NL)))}
 ${floor(146,'#8a5a30')}<rect y="146" width="200" height="8" fill="#b07a45"/>
 <path d="M150,146 v-40 q0,-14 -20,-14" fill="none" stroke="#9aa8c0" stroke-width="4"/><path d="M118,84 l22,6 -8,18 -22,-6 Z" fill="${SUN}"/>
 <path d="M40,156 h90 l10,36 h-110 Z" fill="#fff"/><path class="draw" d="M52,170 q8,-6 16,0 t16,0 t16,0 t16,0" fill="none" stroke="${VIO}" stroke-width="2.800" stroke-linecap="round"/>
 ${[[RED,0],[SKY,-12],[MINT,-24]].map(([c,dy])=>`<rect x="156" y="${134+dy}" width="40" height="11" rx="2" fill="${c}"/>`).join('')}`;

const mailbag=`<rect x="-34" y="-44" width="22" height="26" rx="5" fill="${SKY}"/><path d="M-12,-52 q14,8 26,-2" fill="none" stroke="${SKY}" stroke-width="4"/><rect x="-30" y="-50" width="14" height="10" rx="1" fill="#fff"/>`;
const cap=`<path d="M-28,-98 q0,-28 28,-28 q28,0 28,28 Z" fill="${SKY}"/><path d="M-30,-98 h70 q4,0 0,6 h-40" fill="#2f6fd0"/>`;
S.job=`${park()}${cloud(30,30,.7)}
 <path d="M160,186 v-60" stroke="#9aa8c0" stroke-width="6" stroke-linecap="round"/><rect x="136" y="96" width="50" height="34" rx="12" fill="${RED}"/><rect x="146" y="106" width="30" height="5" rx="2" fill="#5a2a2a"/><path class="flower" d="M186,100 v-18 h12 v10 h-12" fill="${SUN}"/>
 <g class="givemove"><rect x="104" y="100" width="26" height="18" rx="2" fill="#fff" stroke="#cbc2e6" stroke-width="1.600"/><path d="M104,100 l13,10 13,-10" fill="none" stroke="#cbc2e6" stroke-width="1.600"/><path d="${heartP}" transform="translate(117,114) scale(.4)" fill="${RED}"/></g>
 ${sh(62,192,32)}${at(62,190,.92,cat({bow:false,hat:cap,eyes:'happy',armR:-96,armsFront:true,mid:mailbag}))}`;

S.word=`${bg('#fff1c9')}${floor(184,'#ffe08a')}
 ${block(60,150,RED,'C')}${block(100,150,SKY,'A')}
 <g class="hop">${block(140,150,MINT,'T')}</g>
 ${speech(100,50,120,56,T(100,62,'cat',32,INK),100,96)}
 <path d="M44,160 h112" stroke="${VIO}" stroke-width="4" stroke-linecap="round" class="glow"/>
 ${at(100,198,.5,cat({eyes:'happy',mouth:'open',armL:150,armR:-150,armsFront:true}))}`;

S.though=`${bg('#dff1ff')}<circle cx="40" cy="60" r="50" fill="#eaf7ff"/><path d="M0,170 q50,-14 100,0 t100,0 v30 h-200 Z" fill="#fff"/>
 ${thermo(178,40,12,SKY)}
 ${[[20,0,3],[60,1.2,2.2],[100,2.4,3],[140,.6,2.4],[170,1.8,3],[90,3.2,2]].map(([x,d,r])=>`<circle class="snow" style="animation-delay:-${d}s" cx="${x}" cy="0" r="${r}" fill="#fff"/>`).join('')}
 ${sh(130,188,14,'shadow')}<g transform="translate(130,150)"><g class="jump">${P.ball(RED)}</g></g>
 ${at(74,186,.96,cat({bow:false,hat:beanie,extra:winter,eyes:'happy',mouth:'open',armR:-120,armsFront:true}),'hop')}`;

S.business=`${park(172)}${cloud(30,24,.7)}
 <rect x="70" y="80" width="120" height="100" rx="6" fill="#fff8e6"/><path d="M62,80 h136 l-10,-26 h-116 Z" fill="${RED}"/><path d="M82,54 v26 M106,54 v26 M130,54 v26 M154,54 v26 M178,54 v26" stroke="#fff" stroke-width="5"/>
 <rect x="70" y="124" width="120" height="10" fill="${SUN}"/>${fishAt(96,116,1.4,0)}${fishAt(124,116,1.4,0)}${fishAt(152,116,1.4,0)}
 ${at(150,180,.5,cat({eyes:'happy',mouth:'open',armR:-125,armRcls:'wave',armsFront:true,tail:false}))}<rect x="70" y="134" width="120" height="46" fill="#e4b77a"/>${T(130,164,'FISH',18,'#fff')}
 ${at(34,192,.56,K('orange',{eyes:'happy',armR:-92,prop:`<g transform="translate(0,8)">${coin(0,0,7)}</g>`}))}`;

S.issue=`${room('#e6f1ff','#cfe3f7')}
 <path d="M0,30 h120 v30" fill="none" stroke="#9aa8c0" stroke-width="12" stroke-linejoin="round"/><rect x="108" y="56" width="24" height="12" rx="3" fill="#7a8aa6"/>
 <path class="drip" d="${tear(120,72)}" fill="${SKY}"/><path class="drip" style="animation-delay:.5s" d="${tear(120,72)}" fill="${SKY}"/>
 <path d="M100,150 h40 l-5,30 h-30 Z" fill="${RED}"/><ellipse cx="120" cy="150" rx="20" ry="5" fill="#5cc3ff"/><ellipse class="ripple" cx="120" cy="150" rx="10" ry="3" fill="none" stroke="#fff" stroke-width="1.500"/>
 <ellipse cx="150" cy="186" rx="26" ry="6" fill="#5cc3ff" opacity=".6"/>
 <g class="beat"><path d="M170,30 v24" stroke="${RED}" stroke-width="8" stroke-linecap="round"/><circle cx="170" cy="68" r="5" fill="${RED}"/></g>
 ${sh(50,192,30)}${at(50,190,.84,cat({bow:false,hat:P.hatHard,eyes:'wide',mouth:'wavy',armR:-110,armsFront:true,prop:`<path d="M0,4 v-26 M-6,-22 q0,-10 6,-10 q6,0 6,10" fill="none" stroke="#9aa8c0" stroke-width="4" stroke-linecap="round"/>`}))}`;

S.side=`${bg('#ece6ff')}${floor(184,'#d6ccf5')}
 <path d="M60,70 l50,-20 60,16 v70 l-60,24 -50,-20 Z" fill="#d9a56a"/><path d="M60,70 l50,20 60,-24 M110,90 v70" fill="none" stroke="#8a5a30" stroke-width="2.500"/>
 <path class="glow" d="M110,90 l60,-24 v70 l-60,24 Z" fill="${RED}" opacity=".8"/>
 ${arrow(192,40,160,86,RED,6,'float')}
 ${at(36,192,.7,cat({eyes:'happy',armR:-100,armRcls:'bob'}))}`;

S.kind=`${bg('#fff1c9')}
 <rect x="10" y="100" width="180" height="10" rx="5" fill="#c98a4b"/>
 <g transform="translate(40,84) scale(2)">${P.fish}</g>
 <g transform="translate(100,84) scale(2)"><path d="M-9,0 l-8,-6 v12 Z" fill="#2f6fd0"/><ellipse cx="0" cy="0" rx="10" ry="6.500" fill="${SKY}"/><path d="M-3,-6 v12 M3,-6 v12" stroke="#fff" stroke-width="1.500"/><circle cx="6" cy="-1.500" r="1.600" fill="${INK}"/></g>
 <g transform="translate(160,84) scale(2)"><path d="M-9,0 l-8,-6 v12 Z" fill="#3aa568"/><ellipse cx="0" cy="0" rx="10" ry="9" fill="#4fc27f"/><circle cx="0" cy="2" r="2" fill="${SUN}"/><circle cx="5" cy="-2" r="1.600" fill="${INK}"/></g>
 ${[40,100,160].map((x,i)=>`<circle class="glow" style="animation-delay:${i*.5}s" cx="${x}" cy="84" r="30" fill="none" stroke="${VIO}" stroke-width="3.500"/>`).join('')}
 ${floor(184,'#ffe08a')}${at(100,194,.64,cat({eyes:'wide',headCls:'tilt',armL:70,armR:-70}))}`;

S.far=`${bg('#cdeeff')}${sun(30,28,10)}${cloud(120,30,.7)}
 <path d="M0,120 q60,-30 120,-6 t80,-10 v96 h-200 Z" fill="#b7efc8"/><path d="M0,160 q50,-16 100,0 t100,0 v40 h-200 Z" fill="#8fe0a8"/>
 <path d="M60,200 C90,170 40,150 100,132 C140,120 150,112 164,96" fill="none" stroke="#f3d9a4" stroke-width="10" stroke-linecap="round"/>
 <g transform="translate(168,96) scale(.32)">${P.house()}</g>${ring(168,82,22,RED)}
 <path d="M70,150 h60 M70,150 l6,-5 M70,150 l6,5 M130,150 l-6,-5 M130,150 l-6,5" fill="none" stroke="${RED}" stroke-width="3" stroke-linecap="round" class="glow" transform="rotate(-28 100 150)"/>
 ${sh(40,194,28)}${at(40,192,.8,cat({mouth:'wavy',armR:-150,armsFront:true}))}
 <path class="sweat" d="${tear(70,120)}" fill="${SKY}"/>`;
