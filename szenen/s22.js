/* Tag 75–78: human, wait, serve, market, die · send, expect, sense, build, stay · fall, oh, nation, plan, cut · college, interest, death, course, someone */
S.human=`${park()}${cloud(40,26,.7)}
 ${sh(120,190,28)}${at(120,188,1,P.person({shirt:MINT,stripe:'#1f9c83',skin:'#e0a070',hair:'#3a2a4a'}))}${ring(120,110,84,RED)}
 ${at(34,194,.56,cat({eyes:'wide',armR:-110,armRcls:'bob',armsFront:true}))}
 <g class="beat"><circle cx="60" cy="60" r="16" fill="#fff"/><path d="M52,56 h16 M52,64 h16 M66,50 l-12,20" stroke="${VIO}" stroke-width="3" stroke-linecap="round"/></g>`;

S.wait=`${park(170)}${cloud(40,26,.7)}${floor(176,'#6b7a99')}
 <path d="M160,176 v-120" stroke="#9aa8c0" stroke-width="5" stroke-linecap="round"/><rect x="140" y="40" width="40" height="30" rx="6" fill="${SKY}"/><rect x="148" y="48" width="24" height="12" rx="3" fill="#fff"/><circle cx="152" cy="64" r="2.500" fill="${INK}"/><circle cx="168" cy="64" r="2.500" fill="${INK}"/>
 <rect x="30" y="140" width="90" height="8" rx="4" fill="#b07a45"/><rect x="36" y="148" width="6" height="28" fill="#8a5a30"/><rect x="108" y="148" width="6" height="28" fill="#8a5a30"/>
 ${at(74,142,.7,cat({mouth:'wavy',headCls:'tilt',feet:'walk'}))}
 <g class="ring">${at(110,70,.5,P.clock(28,120))}</g>
 ${dots(74,40,VIO)}`;

S.serve=`${room('#fff1c9','#e4b77a')}
 ${at(130,186,1.1,P.table(120))}
 ${at(150,150,.44,K('orange',{eyes:'happy',mouth:'open',tail:false}))}${at(184,150,.4,K('grey',{eyes:'happy',tail:false}))}
 <path d="M64,124 h132 v12 h-132 Z" fill="#c98a4b"/>
 <path d="M136,118 h24 q0,10 -12,10 q-12,0 -12,-10 Z" fill="${SKY}"/><path d="M170,118 h22 q0,10 -11,10 q-11,0 -11,-10 Z" fill="${SKY}"/>
 <path d="M76,98 h34 q0,22 -17,22 q-17,0 -17,-22 Z" fill="${RED}"/><ellipse cx="93" cy="98" rx="17" ry="4" fill="#ffd98a"/><circle class="smoke" cx="93" cy="86" r="4" fill="#fff"/>
 ${sh(40,192,28)}${at(40,190,.84,cat({bow:false,hat:P.hatChef,eyes:'happy',armR:-80,armRcls:'bob',armsFront:true,prop:`<path d="M0,2 l14,-14" stroke="#9aa8c0" stroke-width="3" stroke-linecap="round"/><circle cx="16" cy="-16" r="6" fill="#9aa8c0"/>`}))}`;

const stand=(x,c,inner)=>`<rect x="${x}" y="96" width="60" height="80" rx="4" fill="#fff8e6"/><path d="M${x-6},96 h72 l-8,-22 h-56 Z" fill="${c}"/><path d="M${x+14},74 v22 M${x+30},74 v22 M${x+46},74 v22" stroke="#fff" stroke-width="4"/><rect x="${x}" y="130" width="60" height="8" fill="#c98a4b"/>${inner}`;
S.market=`${park(176)}${sun(30,24,9)}
 ${stand(6,RED,`<circle cx="22" cy="122" r="7" fill="${RED}"/><circle cx="36" cy="122" r="7" fill="${SUN}"/><circle cx="50" cy="122" r="7" fill="#4fc27f"/>`)}
 ${stand(70,SKY,`${fishAt(88,122,1.2,0)}${fishAt(112,122,1.2,0)}`)}
 ${stand(134,MINT,`<path d="M146,128 a10,10 0 0 1 20,0 Z" fill="#e4b77a"/><path d="M170,128 a10,10 0 0 1 20,0 Z" fill="#e4b77a"/>`)}
 ${at(36,194,.4,K('orange',{eyes:'happy'}))}${at(166,194,.4,K('grey',{eyes:'happy'}))}
 ${at(100,196,.56,cat({eyes:'happy',mouth:'open',armL:30,propL:`<g transform="translate(-2,8)"><path d="M-14,-4 h28 l-4,16 h-20 Z" fill="#c98a4b"/><path d="M-10,-4 q10,-16 20,0" fill="none" stroke="#8a5a30" stroke-width="3"/></g>`}))}`;

S.die=`${room('#e9efe0','#d7dfc8')}
 <rect x="130" y="16" width="52" height="46" rx="8" fill="#cfe4d8" stroke="#fff" stroke-width="5"/>
 <path d="M104,170 h44 l-6,-34 h-32 Z" fill="${ORA}"/><rect x="100" y="130" width="52" height="10" rx="4" fill="#e0875a"/>
 <g class="sway" style="transform-origin:126px 132px"><path d="M126,132 q-2,-30 14,-46" fill="none" stroke="#9bb86a" stroke-width="4" stroke-linecap="round"/><ellipse cx="118" cy="110" rx="9" ry="4" fill="#b9c48a" transform="rotate(30 118 110)"/><circle cx="142" cy="84" r="9" fill="#c9b07a"/><circle cx="142" cy="84" r="3.500" fill="#8a5a30"/></g>
 <path class="snow" style="animation-duration:5s" d="M150,60 q5,5 0,10 q-5,-5 0,-10 Z" fill="#c9b07a"/><path class="snow" style="animation-duration:5s;animation-delay:-2.500s" d="M160,60 q5,5 0,10 q-5,-5 0,-10 Z" fill="#c9b07a"/>
 ${sh(50,192,30)}${at(50,190,.86,cat({eyes:'closed',mouth:'wavy',armR:-60,headCls:'tilt'}))}
 <path class="sweat" d="${tear(30,104)}" fill="${SKY}"/>`;

S.send=`${park()}${cloud(40,26,.7)}
 <path d="M150,186 v-56" stroke="#9aa8c0" stroke-width="6" stroke-linecap="round"/><rect x="122" y="90" width="56" height="46" rx="14" fill="${RED}"/><rect x="132" y="102" width="36" height="6" rx="3" fill="#5a2a2a"/>
 <g class="givemove"><g transform="translate(98,104) rotate(-8)"><rect x="-14" y="-10" width="28" height="20" rx="2" fill="#fff" stroke="#cbc2e6" stroke-width="1.600"/><path d="M-14,-10 l14,10 14,-10" fill="none" stroke="#cbc2e6" stroke-width="1.600"/></g></g>
 <g class="flutter"><path d="M40,50 l26,8 -18,6 -2,10 -6,-12 Z" fill="#fff" stroke="#cbc2e6" stroke-width="1.500"/></g>
 ${sh(56,192,32)}${at(56,190,.92,cat({eyes:'happy',armR:-96,armsFront:true}))}`;

S.expect=`${room('#fff1c9','#e4b77a')}
 <rect x="90" y="24" width="96" height="100" rx="8" fill="#cdeeff" stroke="#fff" stroke-width="6"/><path d="M138,24 v100" stroke="#fff" stroke-width="4"/><path d="M90,104 q48,-16 96,0 v20 h-96 Z" fill="#8fe0a8"/>
 <g class="road" style="animation-duration:3s"><g transform="translate(150,112) scale(.26)">${K('orange',{hat:cap})}</g></g>
 ${think(44,44,36,26,`<g transform="translate(44,58) scale(1.1)">${P.gift(VIO,SUN)}</g>`,1)}
 ${at(60,194,.8,cat({eyes:'spark',armR:-110,armsFront:true}))}
 <g class="ring">${at(164,178,.36,P.clock(28,90))}</g>`;

const sinn=(x,y,inner,d)=>`<g class="glow" style="animation-delay:${d}s"><circle cx="${x}" cy="${y}" r="20" fill="#fff"/></g>${inner}`;
S.sense=`${bg('#e3fbf5')}${floor(184,'#bff0de')}
 ${sinn(30,50,`<path d="M16,50 q14,-12 28,0 q-14,12 -28,0 Z" fill="#fff" stroke="${INK}" stroke-width="2"/><circle cx="30" cy="50" r="5" fill="${SKY}"/>`,0)}
 ${sinn(100,26,`<path d="M94,34 q-8,-20 8,-18 q10,2 4,12 q-2,4 -4,8" fill="none" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>`,.4)}
 ${sinn(170,50,`<path d="M164,40 q10,14 12,22 q-10,4 -14,-4" fill="none" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>`,.8)}
 ${sinn(24,120,`<path d="M16,116 h16 v6 a8,8 0 0 1 -16,0 Z" fill="#ff7a59"/>`,1.2)}
 ${sinn(176,120,pawK(176,122,0,INK),1.6)}
 ${sh(100,192,34)}${at(100,190,.9,cat({eyes:'closed',headCls:'tilt',armR:-96,prop:`<g transform="translate(4,0)"><path d="M0,6 v-18" stroke="#3aa568" stroke-width="3"/><circle cx="0" cy="-16" r="7" fill="${RED}"/><circle cx="0" cy="-16" r="2.500" fill="${SUN}"/></g>`}))}`;

const stein=(x,y,c)=>`<rect x="${x}" y="${y}" width="30" height="14" rx="2" fill="${c}" stroke="#b5571a" stroke-width="1.200"/>`;
S.build=`${bg('#cdeeff')}${cloud(40,26,.7)}${floor(180,'#e4b77a')}
 ${[0,1,2].map(r=>[0,1,2].map(c=>stein(96+c*30+(r%2?-15:0),166-r*14,ORA)).join('')).join('')}
 <g class="hop">${stein(111,112,ORA)}</g>
 <path d="M180,180 V30 h-60 v20" fill="none" stroke="${SUN}" stroke-width="6" stroke-linejoin="round"/><path d="M120,50 v40" stroke="${INK}" stroke-width="2"/>
 ${sh(50,192,32)}${at(50,190,.9,cat({bow:false,hat:P.hatHard,eyes:'happy',armR:-110,armRcls:'bob',armsFront:true,prop:`<path d="M0,2 v-18 l12,-2 v8 Z" fill="#9aa8c0"/>`}))}`;

S.stay=`${room('#ffe9d6','#e4b77a',170)}
 <rect x="130" y="40" width="60" height="130" rx="6" fill="#b07a45"/><rect x="136" y="46" width="48" height="124" fill="#cdeeff"/>
 <g class="road" style="animation-duration:2.500s;animation-direction:reverse"><g transform="translate(150,170) scale(.34)">${K('orange',{armR:-125,armRcls:'wave',armsFront:true,feet:'walk'})}</g></g>
 <ellipse cx="66" cy="182" rx="56" ry="9" fill="${VIO}" opacity=".35"/>
 <rect x="16" y="120" width="96" height="46" rx="14" fill="${RED}"/><rect x="10" y="134" width="18" height="40" rx="8" fill="#d93a33"/><rect x="100" y="134" width="18" height="40" rx="8" fill="#d93a33"/>
 ${at(62,158,.7,cat({eyes:'happy',armR:-125,armRcls:'wave',armsFront:true,tail:false}))}
 ${pin(62,66)}`;

S.fall=`${bg('#ffe9d6')}${floor(184,'#ffd9bd')}
 <rect x="26" y="130" width="40" height="10" rx="5" fill="#c98a4b"/><rect x="30" y="140" width="7" height="44" fill="#8a5a30" transform="rotate(8 34 160)"/><rect x="56" y="140" width="7" height="44" fill="#8a5a30" transform="rotate(-6 60 160)"/>
 <g transform="translate(120,150) rotate(60)"><g class="float" style="animation-duration:.8s"><g transform="scale(.8)">${cat({eyes:'wide',mouth:'o',armL:140,armR:-140,armsFront:true})}</g></g></g>
 <path d="M84,70 q20,-20 40,-4 M96,90 q14,-10 26,0" fill="none" stroke="${VIO}" stroke-width="4" stroke-linecap="round" class="glow"/>
 ${arcArrow(60,110,130,170,20,RED,5,'8 9')}
 <ellipse cx="150" cy="184" rx="40" ry="10" fill="${SKY}"/><ellipse cx="150" cy="180" rx="36" ry="8" fill="#8dc0ff"/>`;

S.oh=`${bg('#fff3cf')}${floor(184,'#ffe08a')}
 ${speech(60,40,60,44,T(60,54,'Oh!',24,RED),70,80)}
 <g class="hop">${at(146,186,2,P.gift(VIO,SUN))}</g>${spark(110,100,8,SUN,0)}${spark(180,90,7,RED,.5)}${spark(150,60,6,SUN,1)}
 ${sh(60,190,32)}${at(60,188,.92,cat({eyes:'wide',mouth:'o',armL:120,armR:-120,armsFront:true}))}`;

S.nation=`${bg('#cdeeff')}${burst(30,36,RED,0)}${burst(176,40,'#1f9c5a',.6)}
 <path d="M100,150 V16" stroke="#b07a45" stroke-width="5" stroke-linecap="round"/>
 <g class="flower" style="transform-origin:100px 40px"><rect x="102" y="20" width="24" height="50" fill="#1f9c5a"/><rect x="126" y="20" width="24" height="50" fill="#fff"/><ellipse cx="138" cy="45" rx="6" ry="7" fill="#b07a45"/><rect x="150" y="20" width="24" height="50" fill="${RED}"/></g>
 ${floor(176,'#8fe0a8')}
 ${at(24,190,.4,K('orange',{eyes:'happy'}))}${at(60,192,.46,K('white',{eyes:'happy'}))}${at(100,194,.52,cat({eyes:'happy',mouth:'open',armR:-150,armsFront:true}))}${at(142,192,.46,K('grey',{eyes:'happy'}))}${at(178,190,.4,K('cream',{eyes:'happy'}))}
 ${note(40,90,RED,0)}${note(160,96,'#1f9c5a',.9)}`;

S.plan=`${bg('#e6f1ff')}${floor(170,'#c98a4b')}<rect y="170" width="200" height="8" fill="#e0a868"/>
 <rect x="30" y="30" width="150" height="110" rx="4" fill="#2f6fd0"/><path d="M30,52 h150 M30,74 h150 M30,96 h150 M30,118 h150 M60,30 v110 M90,30 v110 M120,30 v110 M150,30 v110" stroke="#4f9dff" stroke-width="1"/>
 <path class="draw" style="stroke-dasharray:220;animation-name:drawP" d="M50,120 q20,-50 50,-30 t50,-40" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="6 6"/><style>@keyframes drawP{from{stroke-dashoffset:220}to{stroke-dashoffset:0}}</style>
 <circle cx="50" cy="120" r="5" fill="#fff"/>${cross(150,50,7,4)}
 <rect x="150" y="100" width="24" height="30" rx="2" fill="#fff"/>${check(162,110,4,2.500)}${check(162,122,4,2.500)}
 ${at(40,198,.66,cat({hat:glasses,armR:-128,armsFront:true,tail:false,prop:`<path d="M0,2 l8,-24" stroke="${SUN}" stroke-width="4" stroke-linecap="round"/>`}))}`;

S.cut=`${bg('#fff1c9')}${floor(160,'#c98a4b')}<rect y="160" width="200" height="8" fill="#e0a868"/>
 <rect x="60" y="100" width="110" height="70" rx="3" fill="${SKY}" transform="rotate(-6 115 135)"/><path d="M70,150 l90,-30" stroke="#fff" stroke-width="2" stroke-dasharray="5 5"/>
 <g transform="translate(112,134) rotate(-18)"><g class="roll" style="animation-duration:1.600s"><g><path d="M0,0 L-26,-4 L-6,4 Z" fill="#dfe6f2" stroke="#9aa8c0" stroke-width=".8"/><circle cx="8" cy="6" r="5" fill="none" stroke="${RED}" stroke-width="3"/></g><g class="chew" style="transform-origin:0 0;transform-box:view-box"><path d="M0,0 L-26,4 L-6,-4 Z" fill="#f4f7fb" stroke="#9aa8c0" stroke-width=".8"/><circle cx="8" cy="-6" r="5" fill="none" stroke="${RED}" stroke-width="3"/></g></g></g>
 <g class="float">${star5(160,60,14,SKY)}</g><g class="float" style="animation-delay:.6s">${star5(130,40,10,SUN)}</g>
 ${at(40,198,.74,cat({mouth:'tongue',armR:-80,tail:false}))}`;

S.college=`${bg('#cdeeff')}${cloud(30,24,.7)}${cloud(176,36,.6)}
 <path d="M30,84 L100,44 L170,84 Z" fill="#f4f7fb" stroke="#b9c4d8" stroke-width="2"/><circle cx="100" cy="68" r="9" fill="#fff" stroke="#b07a45" stroke-width="2"/><path d="M100,68 v-5 M100,68 h4" stroke="${INK}" stroke-width="1.600" stroke-linecap="round"/>
 <rect x="34" y="84" width="132" height="8" fill="#dfe6f2"/>${[44,70,96,122,148].map(x=>`<rect x="${x}" y="92" width="10" height="64" rx="3" fill="#f4f7fb" stroke="#b9c4d8" stroke-width="1.600"/>`).join('')}
 <rect x="26" y="156" width="148" height="10" fill="#dfe6f2"/><rect x="18" y="166" width="164" height="10" fill="#cfd8e6"/>${floor(176,'#8fe0a8')}
 <rect x="88" y="126" width="24" height="30" rx="12" fill="${RED}"/>
 ${at(46,194,.5,cat({bow:false,hat:doktorhut,eyes:'happy',armL:-34,armR:34,armsFront:true,mid:`<g transform="translate(0,-8) scale(.8)">${P.book(SKY)}</g>`}))}${at(150,194,.44,K('orange',{hat:doktorhut,eyes:'happy'}))}
 <g class="hop"><g transform="translate(100,36) scale(.5)">${doktorhut.replace(/-1[0-9]{2}|-9[0-9]|-8[0-9]/g,m=>String(Number(m)+104))}</g></g>`;

S.interest=`${park(170)}${cloud(150,26,.7)}
 ${flower(150,186,RED,0)}<g transform="translate(150,150)"><g class="wiggle"><ellipse cx="0" cy="0" rx="9" ry="7" fill="${RED}"/><circle cx="-3" cy="-1" r="1.800" fill="${INK}"/><circle cx="3" cy="2" r="1.800" fill="${INK}"/><circle cx="8" cy="-3" r="4" fill="${INK}"/><path d="M0,-7 v14" stroke="${INK}" stroke-width="1.200"/></g></g>
 ${ring(150,152,24,VIO)}
 <g class="beat"><path d="M100,60 v20" stroke="${RED}" stroke-width="7" stroke-linecap="round"/><circle cx="100" cy="92" r="4.500" fill="${RED}"/></g>
 ${sh(62,192,34)}${at(62,190,.94,cat({eyes:'spark',mouth:'o',armR:-80,armRcls:'bob',prop:`<g transform="translate(6,10) rotate(-60)">${lupe}</g>`}))}`;

S.death=`${bg('#d9d3e8')}${floor(176,'#bdb5d6')}
 <path d="M150,176 v-70 M150,130 l-22,-18 M150,116 l20,-16 M150,106 l-10,-22" stroke="#8a7a66" stroke-width="5" stroke-linecap="round"/>
 <path class="snow" style="animation-duration:6s" d="M130,60 q6,6 0,12 q-6,-6 0,-12 Z" fill="${ORA}"/>
 <path d="M96,176 q-4,-22 -16,-30" fill="none" stroke="#9bb86a" stroke-width="4" stroke-linecap="round"/><circle cx="78" cy="146" r="8" fill="#c9b07a"/>
 <rect x="104" y="150" width="8" height="26" rx="3" fill="#fff8e6"/><path class="beat" d="M108,138 q-5,7 0,12 q5,-5 0,-12 Z" fill="${ORA}"/><circle class="glow" cx="108" cy="144" r="16" fill="#ffe89a" opacity=".4"/>
 ${at(44,192,.8,cat({eyes:'closed',mouth:'w',armL:-40,armR:40,armsFront:true,headCls:'tilt'}))}
 ${heart(108,110,.7,RED,0)}`;

S.course=`${park(160)}${floor(168,'#e0875a')}<path d="M0,180 h200 M0,192 h200" stroke="#fff" stroke-width="2" opacity=".7"/>
 ${[60,130].map(x=>`<path d="M${x},168 v-26 M${x+26},168 v-26" stroke="#fff" stroke-width="4"/><rect x="${x-3}" y="138" width="32" height="7" rx="3" fill="${RED}"/>`).join('')}
 <path d="M186,168 v-60" stroke="#9aa8c0" stroke-width="4"/><path class="flower" d="M186,108 l-22,8 22,8 Z" fill="${SUN}"/>
 <g transform="translate(96,150)"><g class="jump" style="animation-duration:.6s"><g transform="rotate(8) scale(-.5,.5)">${cat({armL:120,armR:-120,armsFront:true,eyes:'happy',mouth:'open',feet:'run'})}</g></g></g>
 ${arcArrow(20,150,176,150,60,VIO,4,'6 9')}`;

S.someone=`${room('#fff1c9','#e4b77a')}
 <path d="M100,16 h90 v164 h-90 q12,-82 0,-164 Z" fill="${VIO}"/><path d="M124,16 q8,82 0,164 M150,16 q8,82 0,164 M174,16 q6,82 0,164" stroke="#7b55d9" stroke-width="3" fill="none"/>
 <ellipse cx="136" cy="182" rx="10" ry="5.500" fill="#ffb347" stroke="#e08a2e" stroke-width="1.400"/><ellipse cx="160" cy="182" rx="10" ry="5.500" fill="#ffb347" stroke="#e08a2e" stroke-width="1.400"/>
 <g class="shiver"><path d="M130,70 q18,-14 36,0" fill="none" stroke="#7b55d9" stroke-width="6" stroke-linecap="round"/></g>
 ${T(148,50,'?',30,'#fff','middle','beat')}
 ${at(46,194,.84,cat({eyes:'wide',mouth:'o',headCls:'tilt',armR:-110,armsFront:true}))}`;
