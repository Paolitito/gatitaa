/* Tag 67–70: sure, war, history, party, within · grow, result, morning, reason, low · win, research, girl, guy, early · moment, himself, air, teacher, force */
S.sure=`${bg('#e3fbf5')}${floor(184,'#bff0de')}
 ${speech(150,46,50,36,T(150,58,'?',26,VIO),150,78)}${at(150,190,.6,K('orange',{headCls:'tilt'}))}
 <g class="beat"><rect x="26" y="20" width="76" height="40" rx="8" fill="none" stroke="${MINT}" stroke-width="5" transform="rotate(-8 64 40)"/><g transform="rotate(-8 64 40)">${T(64,50,'OK',26,MINT)}</g></g>
 ${sh(66,192,34)}${at(66,190,.96,cat({eyes:'happy',mouth:'big',armL:-40,armR:-125,armsFront:true}))}`;

const kissen=(x,y,c,r)=>`<rect x="${x-16}" y="${y-11}" width="32" height="22" rx="7" fill="${c}" stroke="#fff" stroke-width="2" transform="rotate(${r} ${x} ${y})"/>`;
S.war=`${room('#cfc8f5','#b5addf')}
 ${[[30,40,0],[80,26,.5],[120,50,1],[170,34,1.5],[100,80,.8],[56,90,1.8],[150,96,.3]].map(([x,y,d])=>`<path class="snow" style="animation-delay:-${d}s;animation-duration:5s" d="M${x},0 q5,-6 0,-12 q-5,6 0,12 Z" fill="#fff"/>`).join('')}
 ${at(54,190,.8,cat({eyes:'happy',mouth:'big',armR:-130,armRcls:'wave',armsFront:true,prop:kissen(0,-6,SKY,20)}))}
 ${flipAt(146,190,.8,K('orange',{eyes:'happy',mouth:'big',armR:-130,armRcls:'wave',armsFront:true,prop:kissen(0,-6,SUN,20)}))}
 <g class="beat">${spark(100,96,12,'#fff',0)}</g>
 ${kissen(100,186,RED,-8)}`;

S.history=`${bg('#ffe2a8')}${sun(160,36,14)}<path d="M0,170 q50,-14 100,0 t100,0 v30 h-200 Z" fill="#f6c27a"/>
 <path d="M30,170 L90,70 L150,170 Z" fill="#e0a85a"/><path d="M90,70 L150,170 h-30 Z" fill="#c98a4b"/><path d="M44,150 h92 M58,128 h66 M72,104 h38" stroke="#b07a45" stroke-width="2"/>
 <g class="float"><rect x="110" y="20" width="76" height="46" rx="4" fill="#f3d9a4" stroke="#b07a45" stroke-width="2"/><circle cx="110" cy="43" r="7" fill="#e4b77a" stroke="#b07a45" stroke-width="2"/><circle cx="186" cy="43" r="7" fill="#e4b77a" stroke="#b07a45" stroke-width="2"/><path d="M124,34 h48 M124,44 h48 M124,54 h30" stroke="#b07a45" stroke-width="2.500" stroke-linecap="round"/></g>
 ${at(40,194,.66,cat({eyes:'wide',mouth:'o',bow:false,hat:detHat,armR:-110,armsFront:true}))}
 <g class="ring">${at(170,186,.4,P.clock(28,210))}</g>`;

const partyhut=(c)=>`<path d="M-14,-100 L4,-140 L20,-102 Z" fill="${c}"/><circle cx="4" cy="-140" r="5" fill="${SUN}"/>`;
S.party=`${bg('#fff3cf')}
 ${[[20,RED,0],[50,SUN,.9],[90,MINT,1.7],[130,SKY,.4],[160,VIO,1.3],[184,ORA,2.2]].map(([x,c,d])=>`<rect class="conf" style="animation-delay:-${d}s" x="${x}" y="0" width="7" height="4" rx="1.500" fill="${c}"/>`).join('')}
 <g class="float"><path d="M30,90 q6,30 0,60" fill="none" stroke="${INK}" stroke-width="1.200"/><ellipse cx="30" cy="70" rx="15" ry="19" fill="${RED}"/></g><g class="float" style="animation-delay:.6s"><path d="M172,84 q-6,30 0,60" fill="none" stroke="${INK}" stroke-width="1.200"/><ellipse cx="172" cy="64" rx="15" ry="19" fill="${SKY}"/></g>
 ${floor(184,'#ffe08a')}
 <rect x="76" y="140" width="48" height="40" rx="6" fill="#fff8e6"/><path d="M76,150 q6,10 12,0 q6,10 12,0 q6,10 12,0 q6,10 12,0" fill="${RED}"/><rect x="98" y="122" width="4" height="18" fill="${SKY}"/><path class="beat" d="M100,110 q-5,7 0,12 q5,-5 0,-12 Z" fill="${ORA}"/>
 ${at(44,190,.74,cat({bow:false,hat:partyhut(VIO),eyes:'happy',mouth:'big',armL:130,armR:-130,armsFront:true}),'dance')}
 ${at(156,190,.74,K('orange',{hat:partyhut(MINT),eyes:'happy',mouth:'big',armL:130,armR:-130,armsFront:true}),'dance')}
 ${note(100,60,VIO,0)}${note(124,40,RED,1)}`;

S.within=`${bg('#8fe0a8')}
 <ellipse cx="100" cy="112" rx="76" ry="62" fill="#b7efc8" stroke="#fff" stroke-width="5" stroke-dasharray="12 9"/>
 ${at(100,150,.76,cat({eyes:'happy',mouth:'open',armL:70,armR:-70}))}
 ${arrow(18,30,46,62,RED,5,'glow')}${arrow(182,30,154,62,RED,5,'glow')}
 <g opacity=".6"><circle cx="24" cy="176" r="14" fill="#fff"/>${cross(24,176,6,4)}</g>${check(100,40,10,6)}`;

S.grow=`${bg('#e3fbf5')}${sun(170,30,11)}${floor(170,'#c98a4b')}<rect y="170" width="200" height="8" fill="#8fe0a8"/>
 <path d="M150,170 V40 M144,170 h12 M144,130 h12 M144,90 h12 M144,50 h12" stroke="#9aa8c0" stroke-width="3" stroke-linecap="round"/>
 <g style="transform-box:fill-box;transform-origin:center bottom;animation:growY 4s ease-in-out infinite"><path d="M110,170 v-110" stroke="#3aa568" stroke-width="5" stroke-linecap="round"/><ellipse cx="98" cy="130" rx="12" ry="5" fill="#4fc27f" transform="rotate(-25 98 130)"/><ellipse cx="122" cy="110" rx="12" ry="5" fill="#4fc27f" transform="rotate(25 122 110)"/><ellipse cx="98" cy="90" rx="12" ry="5" fill="#4fc27f" transform="rotate(-25 98 90)"/><circle cx="110" cy="54" r="14" fill="${RED}"/><circle cx="110" cy="54" r="5" fill="${SUN}"/></g>
 <style>@keyframes growY{0%{transform:scaleY(.2)}70%,100%{transform:scaleY(1)}}</style>
 ${at(44,194,.76,cat({eyes:'happy',armR:-92,prop:`<g transform="translate(8,6)"><rect x="-10" y="-12" width="20" height="16" rx="3" fill="${SKY}"/><path d="M10,-8 l12,-6" stroke="${SKY}" stroke-width="4" stroke-linecap="round"/></g>`}))}
 <path class="drip" d="${tear(86,116)}" fill="${SKY}"/>`;

S.result=`${bg('#fff1c9')}<circle cx="100" cy="100" r="80" fill="#ffe7a3"/>${floor(184,'#ffe08a')}${sh(100,190,36)}
 ${at(100,186,.98,cat({eyes:'happy',mouth:'big',armL:150,armR:-150,armsFront:true}))}
 <g class="float"><rect x="62" y="14" width="76" height="62" rx="4" fill="#fff" stroke="#cbc2e6" stroke-width="2"/><path d="M72,30 h34 M72,42 h28 M72,54 h34" stroke="#cbc2e6" stroke-width="3" stroke-linecap="round"/>${T(122,56,'A',30,RED)}${check(86,66,5,3)}</g>
 <g class="twinkle">${star5(160,40,12,SUN)}</g><g class="twinkle" style="animation-delay:.5s">${star5(36,46,10,SUN)}</g>`;

S.morning=`${bg('#ffd9a8')}<circle cx="100" cy="150" r="60" fill="#fff0c8"/>
 <g class="float"><circle cx="100" cy="150" r="34" fill="${SUN}"/></g>
 <path d="M0,150 q50,-20 100,0 t100,0 v50 h-200 Z" fill="#8fe0a8"/>${cloud(40,40,.8)}${cloud(160,60,.6)}
 <g transform="translate(150,186) scale(.4)">${P.house()}</g>
 <path d="M20,60 q4,-5 8,0 q4,-5 8,0" fill="none" stroke="${INK}" stroke-width="2" stroke-linecap="round" class="float"/>
 ${at(70,192,.86,cat({eyes:'closed',mouth:'big',armL:140,armR:-140,armsFront:true}))}
 <g transform="translate(120,190) scale(.8)">${P.cup(RED)}</g><circle class="smoke" cx="118" cy="160" r="4" fill="#fff"/>`;

S.reason=`${room('#ece6ff','#d6ccf5')}
 <g transform="translate(150,176) rotate(70)"><path d="M-10,-30 h20 l4,30 h-28 Z" fill="${SKY}"/></g><path d="M130,180 q20,-6 40,4 q-12,10 -40,4 Z" fill="#5cc3ff" opacity=".7"/><path d="M168,150 l8,-12 M176,160 l12,-4" stroke="${SKY}" stroke-width="3" stroke-linecap="round"/>
 <g transform="translate(70,60)"><g class="float">${P.ball(RED)}</g></g>
 ${arcArrow(84,56,146,140,10,RED,5,'8 8')}
 <g class="beat"><circle cx="70" cy="56" r="26" fill="none" stroke="${RED}" stroke-width="4"/></g>
 ${T(120,40,'!',34,RED,'middle','beat')}
 ${at(36,194,.7,cat({eyes:'wide',mouth:'o',armR:-128,armsFront:true}))}`;

S.low=`${bg('#e3fbf5')}${floor(184,'#bff0de')}
 <path d="M30,184 V70 M170,184 V70" stroke="#b07a45" stroke-width="6" stroke-linecap="round"/><rect x="26" y="122" width="148" height="8" rx="4" fill="${RED}" class="float"/>
 <g transform="translate(100,186) rotate(0)"><g class="shiver"><g transform="scale(1,.62)">${cat({eyes:'happy',mouth:'tongue',armL:70,armR:-70})}</g></g></g>
 <path d="M186,60 V110 M186,110 l-6,-9 M186,110 l6,-9" fill="none" stroke="${RED}" stroke-width="5" stroke-linecap="round" class="float"/>
 ${note(40,40,VIO,0)}${note(150,36,SKY,1)}`;

S.win=`${bg('#fff3cf')}
 ${[[20,RED,0],[60,SUN,.9],[140,VIO,1.3],[180,SKY,.4],[100,MINT,2]].map(([x,c,d])=>`<rect class="conf" style="animation-delay:-${d}s" x="${x}" y="0" width="7" height="4" rx="1.500" fill="${c}"/>`).join('')}
 ${floor(184,'#ffe08a')}${sh(100,190,40,'shadow')}
 ${at(100,186,1,cat({eyes:'happy',mouth:'big',armL:150,armR:-150,armsFront:true,mid:`<circle cx="0" cy="-28" r="9" fill="${SUN}" stroke="#e0a83a" stroke-width="2"/><path d="M-12,-50 L0,-36 L12,-50" fill="none" stroke="${RED}" stroke-width="4"/>`}),'hop')}
 <g class="hop"><g transform="translate(100,52) scale(.7)"><path d="M-28,0 h56 v24 q0,30 -28,30 q-28,0 -28,-30 Z" fill="${SUN}"/><path d="M-28,8 q-18,0 -14,18 q4,12 18,12 M28,8 q18,0 14,18 q-4,12 -18,12" fill="none" stroke="${SUN}" stroke-width="6"/></g></g>
 ${burst(30,60,RED,0)}${burst(170,60,VIO,.6)}`;

const kittel=`<path d="M-22,-46 h44 l4,44 h-52 Z" fill="#fff" stroke="#cbc2e6" stroke-width="1.600"/><path d="M0,-46 v44" stroke="#cbc2e6" stroke-width="1.600"/>`;
S.research=`${room('#e6f1ff','#cfe3f7')}
 ${at(70,176,.94,cat({hat:glasses,mid:kittel,eyes:'open',armL:30,armR:-60,armsFront:true,tail:false}))}
 <rect x="10" y="140" width="180" height="12" rx="4" fill="#9aa8c0"/><rect x="20" y="152" width="10" height="36" fill="#7a8aa6"/><rect x="170" y="152" width="10" height="36" fill="#7a8aa6"/>
 <path d="M120,138 h30 M135,138 v-14 l-10,-22 l8,-4 l12,26" fill="none" stroke="${INK}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="124" cy="98" r="6" fill="${INK}"/>
 <path d="M164,100 h14 v10 l8,26 h-30 l8,-26 Z" fill="#bfe9ff" stroke="#fff" stroke-width="2"/><path d="M158,128 h26 l2,8 h-30 Z" fill="${MINT}"/>
 <circle class="bubble" cx="168" cy="120" r="3" fill="${MINT}"/><circle class="bubble" style="animation-delay:1s" cx="174" cy="116" r="2.500" fill="${MINT}"/>
 ${spark(150,60,8,SUN,0)}${T(30,50,'?',26,VIO,'middle','beat')}`;

const schleifeH=`<path d="M0,-146 l-12,-7 v14 Z M0,-146 l12,-7 v14 Z" fill="${RED}"/>`;
S.girl=`${park()}${sun(30,30,10)}${cloud(160,30,.8)}
 ${sh(112,190,28)}${at(112,188,.94,P.person({shirt:SUN,stripe:ORA,hair:'#7a4a21',long:true,skirt:true,pants:SKY,hat:schleifeH,happy:true}))}
 ${flower(170,188,RED,0)}${flower(184,192,VIO,.5)}
 ${at(38,192,.5,cat({armR:-125,armRcls:'wave',armsFront:true,mouth:'open'}))}`;

S.guy=`${bg('#e3fbf5')}${floor(184,'#bff0de')}
 <rect x="0" y="60" width="200" height="60" fill="#d9f5ec"/><path d="M10,120 v-40 h20 v40 M50,120 v-50 h26 v50 M150,120 v-44 h30 v44" fill="#bff0de"/>
 ${sh(120,190,28)}${at(120,188,.98,P.person({shirt:VIO,stripe:'#7b55d9',pants:'#3a2a4a',hair:'#3a2a4a',skin:'#e0a070',hat:mütze,happy:true}))}
 ${at(40,192,.6,cat({eyes:'happy',armR:-110,armsFront:true}))}${spark(78,110,7,SUN,0)}`;

S.early=`${bg('#ffd9a8')}<g class="float"><circle cx="40" cy="150" r="26" fill="${SUN}"/></g><path d="M0,160 q50,-14 100,0 t100,0 v40 h-200 Z" fill="#8fe0a8"/>
 ${at(140,176,.9,P.school)}<rect x="126" y="150" width="28" height="26" fill="#5a4a6c" opacity=".5"/>
 <g class="ring">${at(60,70,.6,P.clock(34,210))}</g>
 ${at(84,194,.6,cat({eyes:'happy',mid:backpack,armR:-125,armRcls:'wave',armsFront:true}))}
 <g opacity=".4"><path d="M10,196 h20" stroke="${INK}" stroke-width="3" stroke-dasharray="3 5"/></g>${star5(100,150,7,RED)}`;

S.moment=`${bg('#ece6ff')}${floor(184,'#d6ccf5')}
 <g class="twinkle"><rect width="200" height="200" fill="#fff" opacity=".5"/></g>
 <rect x="40" y="26" width="120" height="130" rx="4" fill="#fff" stroke="#cbc2e6" stroke-width="2"/><rect x="50" y="36" width="100" height="96" fill="#cdeeff"/>
 <clipPath id="mo"><rect x="50" y="36" width="100" height="96"/></clipPath><g clip-path="url(#mo)"><path d="M50,112 q50,-14 100,0 v20 h-100 Z" fill="#8fe0a8"/>${at(100,104,.56,cat({eyes:'happy',mouth:'big',armL:130,armR:-130,armsFront:true}))}</g>
 <g transform="translate(160,184)"><rect x="-22" y="-24" width="44" height="26" rx="5" fill="${INK}"/><circle cx="0" cy="-11" r="8" fill="#bfe9ff"/><rect x="8" y="-30" width="10" height="6" fill="${INK}"/></g>${spark(150,150,9,SUN,0)}`;

S.himself=`${park(170)}${tree(150,170,1.4)}
 ${at(84,188,.8,P.person({wave:false,happy:true,shirt:SKY,stripe:'#2f6fd0'}))}
 <g transform="translate(84,146) scale(1.1)"><path d="M-22,-12 Q-11,-17 0,-11 Q11,-17 22,-12 V10 Q11,5 0,11 Q-11,5 -22,10 Z" fill="#fff" stroke="${RED}" stroke-width="2.500"/><path d="M0,-11 V11" stroke="${RED}" stroke-width="2"/></g>
 <g class="glow"><path d="M40,90 q-26,-50 30,-60 q40,-6 50,20" fill="none" stroke="${RED}" stroke-width="4" stroke-linecap="round" stroke-dasharray="7 8"/><path d="M120,50 l-12,-4 M120,50 l-2,-13" stroke="${RED}" stroke-width="4" stroke-linecap="round"/></g>
 <g opacity=".35">${at(24,194,.4,cat({}))}</g>`;

S.air=`${bg('#cdeeff')}${cloud(150,36,.9)}
 <g class="scroll" style="animation-duration:5s;animation-direction:reverse" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"><path d="M-180,60 h70 q14,0 14,-10 q0,-10 -10,-8 M-160,100 h100 q16,0 16,12 M-190,140 h60 q12,0 12,-9"/><path d="M20,60 h70 q14,0 14,-10 q0,-10 -10,-8 M40,100 h100 q16,0 16,12 M10,140 h60 q12,0 12,-9"/></g>
 <g class="flutter"><path d="M150,110 q8,-10 16,0 q-8,10 -16,0 Z" fill="${ORA}"/></g><g class="flutter" style="animation-delay:-2s"><path d="M40,60 q8,-10 16,0 q-8,10 -16,0 Z" fill="${SUN}"/></g>
 <path d="M0,186 q50,-12 100,0 t100,0 v14 h-200 Z" fill="#8fe0a8"/>
 <g class="float"><path d="M118,120 L160,40" stroke="${INK}" stroke-width="1.200"/><path d="M160,40 l14,-18 14,18 -14,22 Z" fill="${RED}"/><path d="M174,62 q-6,10 4,18" fill="none" stroke="${RED}" stroke-width="2.500"/></g>
 ${at(84,190,.9,cat({eyes:'happy',armR:-128,armsFront:true,extra:`<path class="flower" d="M-22,-48 q-30,-6 -44,6 q22,2 44,6 Z" fill="${RED}"/>`}))}`;

S.teacher=`${bg('#fff1c9')}
 <rect x="20" y="16" width="120" height="80" rx="6" fill="#3aa568" stroke="#b07a45" stroke-width="5"/>${T(60,60,'A',28,'#fff')}<g transform="translate(104,56) scale(1.6)">${P.fish.replace(/#ff8a3c|#ffa53c/g,'#fff')}</g>
 ${floor(184,'#ffe08a')}
 ${sh(150,190,34)}${at(150,188,.94,K('white',{hat:glasses.replace(/#fff/g,INK),mouth:'open',armL:130,armsFront:true,propL:`<path d="M0,4 l-10,-34" stroke="#b07a45" stroke-width="3" stroke-linecap="round"/>`}))}
 ${at(34,194,.46,cat({eyes:'happy',mid:backpack,tail:false}))}${at(70,196,.4,K('orange',{eyes:'happy',tail:false}))}`;

S.force=`${bg('#e3fbf5')}${floor(184,'#bff0de')}
 <g transform="translate(56,120)"><path d="M-30,-30 h30 a30,30 0 0 1 0,60 h-30 v-20 h30 a10,10 0 0 0 0,-20 h-30 Z" fill="${RED}"/><rect x="-30" y="-30" width="12" height="20" fill="#dfe6f2"/><rect x="-30" y="10" width="12" height="20" fill="#dfe6f2"/></g>
 <path d="M96,100 q10,20 0,40 M110,92 q14,28 0,56" fill="none" stroke="${VIO}" stroke-width="4" stroke-linecap="round" class="glow"/>
 ${[[176,90,0],[160,124,.3],[180,150,.6]].map(([x,y,d])=>`<g class="givemove" style="animation-direction:alternate-reverse;animation-delay:${d}s"><circle cx="${x-30}" cy="${y}" r="7" fill="#9aa8c0"/><circle cx="${x-32}" cy="${y-2}" r="2" fill="#fff"/></g>`).join('')}
 ${arrow(170,60,120,60,RED,7,'glow')}
 ${at(56,196,.5,cat({eyes:'wide',mouth:'o',armL:150,armR:-150,armsFront:true}))}`;
