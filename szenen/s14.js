/* Tag 43–46: question, during, government, number, off · always, move, live, point, believe · hold, today, bring, happen, next · without, before, large, must, home */
S.question=`${bg('#ece6ff')}<circle cx="110" cy="92" r="78" fill="#f6f2ff"/>
 <g class="float">${T(116,140,'?',170,RED)}</g>
 ${floor(184,'#d6ccf5')}
 ${at(42,192,.74,cat({headCls:'tilt',armR:-152,armsFront:true}))}
 ${T(170,50,'?',22,VIO,'middle','beat')}${T(24,60,'?',18,SKY,'middle','beat')}`;

S.during=`${bg('#2d2a6e')}<circle cx="160" cy="36" r="18" fill="#ffe89a"/><circle cx="168" cy="30" r="16" fill="#2d2a6e"/>${spark(30,30,4,'#ffe89a',0)}${spark(90,20,4,'#ffe89a',.7)}${spark(120,56,3.500,'#ffe89a',1.2)}
 <rect x="10" y="72" width="180" height="10" rx="5" fill="#3b3880"/><rect x="50" y="72" width="100" height="10" rx="5" fill="${SUN}" class="glow"/><circle cx="50" cy="77" r="7" fill="#ffe89a"/><circle cx="150" cy="77" r="7" fill="#ffe89a"/>
 ${floor(180,'#1f1b4d')}
 <circle class="glow" cx="100" cy="150" r="56" fill="#ffe89a" opacity=".22"/>
 <path d="M158,180 v-50" stroke="#b07a45" stroke-width="4"/><path d="M144,130 l6,-20 h16 l6,20 Z" fill="${SUN}"/>
 ${at(94,186,.96,cat(Object.assign({armL:8,armR:-8,headCls:'tilt',mid:openBook,hat:glasses},NL)))}`;

S.government=`${bg('#cdeeff')}${cloud(30,30,.7)}${cloud(176,40,.6)}
 <path d="M100,34 v-26" stroke="#b07a45" stroke-width="3"/><path class="flower" d="M100,8 q9,-4 18,0 v11 q-9,-4 -18,0 Z" fill="${RED}"/>
 <path d="M70,60 a30,26 0 0 1 60,0 Z" fill="#dfe6f2"/><path d="M36,84 L100,56 L164,84 Z" fill="#f4f7fb" stroke="#b9c4d8" stroke-width="2"/>
 <rect x="40" y="84" width="120" height="8" fill="#dfe6f2"/>${[50,72,94,116,138].map(x=>`<rect x="${x}" y="92" width="12" height="62" rx="3" fill="#f4f7fb" stroke="#b9c4d8" stroke-width="1.600"/>`).join('')}
 <rect x="32" y="154" width="136" height="10" fill="#dfe6f2"/><rect x="24" y="164" width="152" height="10" fill="#cfd8e6"/>
 ${floor(174,'#8fe0a8')}
 <rect x="88" y="150" width="24" height="26" rx="3" fill="#b07a45"/>
 ${at(100,152,.4,cat({mid:tie,armR:-125,armRcls:'wave',armsFront:true,tail:false,mouth:'open'}))}
 ${at(40,194,.36,K('orange',{mid:tie}))}${at(160,194,.36,K('grey',{mid:tie}))}`;

S.number=`${bg('#fff3cf')}${floor(184,'#ffe08a')}
 <g class="hop"><rect x="14" y="60" width="50" height="60" rx="10" fill="${RED}"/>${T(39,106,'1',44,'#fff')}</g>
 <g class="hop" style="animation-delay:.2s"><rect x="75" y="40" width="50" height="60" rx="10" fill="${SKY}"/>${T(100,86,'2',44,'#fff')}</g>
 <g class="hop" style="animation-delay:.4s"><rect x="136" y="60" width="50" height="60" rx="10" fill="${MINT}"/>${T(161,106,'3',44,'#fff')}</g>
 ${sh(100,192,30)}${at(100,190,.74,cat({eyes:'happy',mouth:'open',armL:140,armR:-140,armsFront:true}))}`;

S.off=`${bg('#3b3654')}${floor(180,'#2d2944')}
 <path d="M100,0 v40" stroke="#7a6a8c" stroke-width="3"/><path d="M82,78 q-14,-36 18,-38 q32,2 18,38 Z" fill="#8a8499"/><rect x="90" y="78" width="20" height="10" rx="3" fill="#6a6478"/>
 <rect x="150" y="90" width="30" height="44" rx="6" fill="#dfe6f2"/><rect x="160" y="112" width="10" height="16" rx="3" fill="#7a6a8c"/>
 ${arrow(165,96,165,108,RED,3,'glow')}
 ${at(110,188,.9,cat({fur:'#262241',out:'#55508a',belly:'#2c2749',armR:-118,armsFront:true}))}`;

S.always=`${bg('#fff3cf')}
 <g class="spin" style="animation-duration:12s"><circle cx="100" cy="100" r="80" fill="none"/><g transform="translate(100,20) scale(.9)">${sun(0,0,10).replace('class="spin"','')}</g><circle cx="100" cy="180" r="12" fill="#b9bdd4"/><circle cx="106" cy="176" r="10" fill="#fff3cf"/><path d="M30,60 q10,-30 40,-36 M170,140 q-10,30 -40,36" fill="none" stroke="${VIO}" stroke-width="4" stroke-linecap="round" stroke-dasharray="6 8"/></g>
 ${at(100,150,.84,cat({eyes:'happy',mouth:'open',armL:120,armR:-120,armsFront:true}),'hop')}
 <path d="M70,170 q-16,-12 0,-22 q14,-6 30,11 q16,17 30,11 q16,-10 0,-22 q-14,-6 -30,11 q-16,17 -30,11 Z" fill="none" stroke="${RED}" stroke-width="5" stroke-linecap="round" class="glow"/>`;

S.move=`${bg('#e3fbf5')}${floor(184,'#bff0de')}
 <g class="roll" style="animation-duration:1.6s">${sh(120,190,40)}${at(120,186,1,P.boxClosed(72,72))}<g transform="translate(-54,0)">${at(120,188,.8,cat({armR:-92,armL:-60,armsFront:true,mouth:'big',eyes:'closed',feet:'walk'}))}</g></g>
 <path d="M10,130 h20 M6,150 h16 M12,170 h20" stroke="${VIO}" stroke-width="4" stroke-linecap="round" class="glow"/>
 ${arrow(150,70,190,70,RED,7,'glow')}`;

S.live=`${park()}${cloud(30,30,.7)}
 ${at(100,180,1.6,P.house())}
 <clipPath id="lw"><rect x="106.400" y="116" width="35.200" height="32" rx="6"/></clipPath><g clip-path="url(#lw)">${at(124,178,.5,cat({eyes:'happy',armR:-125,armRcls:'wave',armsFront:true,tail:false}))}</g>
 ${heartS(100,30,1.6,RED,'beat')}${pin(166,96)}
 ${flower(20,190,SUN,0)}${flower(184,190,VIO,.5)}`;

S.point=`${bg('#fff1c9')}
 <rect x="84" y="20" width="104" height="80" rx="8" fill="#fff" stroke="#b07a45" stroke-width="5"/>
 <circle class="beat" cx="140" cy="60" r="9" fill="${RED}"/>${ring(140,60,22,RED)}
 <path d="M78,116 L132,66" stroke="${RED}" stroke-width="2.500" stroke-dasharray="2 6" class="glow"/>
 ${floor(184,'#ffe08a')}${sh(56,190,34)}
 ${at(56,188,.96,cat({eyes:'happy',armR:-128,armsFront:true,prop:`<path d="M0,2 l8,-26" stroke="#9aa8c0" stroke-width="4" stroke-linecap="round"/>`}))}`;

S.believe=`${bg('#4a4496')}${spark(24,30,4,'#fff',0)}${spark(70,60,3.500,'#fff',.6)}${spark(180,120,4,'#fff',1.1)}
 <g transform="translate(180,30)"><g class="shoot"><path d="M0,0 l26,-14" stroke="#fff" stroke-width="2.500" stroke-linecap="round"/><circle r="3" fill="#fff"/></g></g>
 <circle class="glow" cx="140" cy="50" r="34" fill="#ffe89a" opacity=".35"/><g class="beat">${star5(140,50,22,SUN,`stroke="${SUN}" stroke-width="4"`)}</g>
 <path d="M0,176 q50,-18 100,0 t100,0 v24 h-200 Z" fill="#373278"/>
 ${at(70,190,.96,cat(Object.assign({eyes:'closed',armL:-46,armR:46,armsFront:true,mid:`<g transform="translate(0,-30)"><path class="beat" d="${heartP}" fill="${RED}"/></g>`},NL)))}
 ${heart(110,100,.8,RED,0)}`;

const ballon=(x,c)=>`<path d="M0,0 L${x},-58" stroke="${INK}" stroke-width="1.200"/><ellipse cx="${x}" cy="-74" rx="13" ry="16" fill="${c}"/>`;
S.hold=`${bg('#cdeeff')}${cloud(30,50,.8)}${cloud(170,120,.7)}
 <path d="M0,190 q50,-10 100,0 t100,0 v10 h-200 Z" fill="#8fe0a8"/>${sh(100,192,24,'shadow')}
 <g transform="translate(100,170)"><g class="float">${cat({eyes:'happy',mouth:'open',armL:30,armR:-158,armsFront:true,prop:`${ballon(-18,RED)}${ballon(0,SUN)}${ballon(18,SKY)}${ballon(-8,VIO)}${ballon(10,MINT)}`})}</g></g>`;

S.today=`${bg('#e3fbf5')}
 <rect x="16" y="20" width="96" height="98" rx="10" fill="#fff"/><rect x="16" y="20" width="96" height="22" rx="10" fill="${RED}"/>
 ${[0,1,2].map(r=>[0,1,2,3].map(c=>`<rect x="${24+c*21}" y="${50+r*21}" width="16" height="16" rx="4" fill="#f4f1fb"/>`).join('')).join('')}
 <rect x="66" y="71" width="16" height="16" rx="4" fill="${SUN}"/><g class="beat"><rect x="62" y="67" width="24" height="24" rx="6" fill="none" stroke="${RED}" stroke-width="4"/></g>
 ${arrow(134,50,94,74,RED,5,'float')}
 ${floor(184,'#bff0de')}${sh(132,190,30)}${at(132,188,.86,cat({armR:-72,armRcls:'bob',eyes:'happy',mouth:'open'}))}<g transform="translate(166,188)"><g class="roll">${P.ball(RED)}</g></g>`;

S.bring=`${room('#fff1c9','#e4b77a')}
 ${at(160,186,1.1,P.table(70))}${at(170,190,.5,K('orange',{eyes:'happy',mouth:'open',tail:false}))}
 <g class="road"><path d="M80,120 h40" stroke="${RED}" stroke-width="4" stroke-dasharray="8 12" stroke-linecap="round"/></g>
 <g transform="translate(60,190)"><g class="walkbob"><g transform="scale(-.86,.86)">${cat({armL:-80,armR:-10,armsFront:true,feet:'walk',eyes:'happy'})}</g></g><g class="walkbob"><ellipse cx="34" cy="-52" rx="30" ry="6" fill="#dfe6f2" stroke="#9aa8c0" stroke-width="1.600"/><g transform="translate(24,-56) scale(.6)">${P.cup(RED)}</g><g transform="translate(46,-60) scale(1.1)">${P.fish}</g></g></g>`;

S.happen=`${bg('#ffe9d6')}${floor(170,'#c98a4b')}<rect y="170" width="200" height="8" fill="#e0a868"/>
 <g transform="translate(120,170) rotate(74)"><g transform="scale(1.6)">${P.cup(SKY)}</g></g>
 <path d="M150,172 q20,-4 40,6 q-10,14 -44,10 q-14,-6 4,-16 Z" fill="#7a4a21" class="grow"/>
 <path class="drip" d="${tear(150,150)}" fill="#7a4a21"/>
 <g class="beat"><path d="M100,20 v30" stroke="${RED}" stroke-width="9" stroke-linecap="round"/><circle cx="100" cy="66" r="6" fill="${RED}"/></g>
 <path d="M130,110 l10,-12 M146,116 l14,-6 M118,104 l2,-14" stroke="${RED}" stroke-width="4" stroke-linecap="round" class="glow"/>
 ${at(44,196,.84,cat({eyes:'wide',mouth:'o',armL:140,armR:-140,armsFront:true,tail:false}))}`;

S.next=`${park(168)}${cloud(30,26,.7)}
 <rect x="130" y="80" width="66" height="96" rx="6" fill="#fff"/><path d="M124,80 h78 l-8,-22 h-62 Z" fill="${RED}"/><path d="M138,58 v22 M154,58 v22 M170,58 v22 M186,58 v22" stroke="#fff" stroke-width="4"/>
 <rect x="130" y="118" width="66" height="8" fill="${SUN}"/><g transform="translate(163,112) scale(1.3)">${P.fish}</g>
 ${flipAt(112,190,.5,K('orange',{eyes:'happy'}))}
 ${flipAt(64,190,.6,cat({eyes:'happy',mouth:'open'}))}${ring(64,160,38,RED)}${arrow(64,60,64,112,RED,7,'float')}
 <g opacity=".5">${flipAt(20,190,.46,K('grey'))}</g>`;

S.without=`${park()}${cloud(150,30,.8)}
 ${at(110,180,1.5,P.house())}
 <rect x="70" y="134" width="28" height="46" rx="12" fill="#ffd166"/><rect x="70" y="134" width="28" height="46" rx="12" fill="none" stroke="${RED}" stroke-width="3" stroke-dasharray="6 5"/>${cross(84,158,10,5)}
 ${T(40,70,'?',36,RED,'middle','beat')}
 ${at(34,194,.6,cat({eyes:'wide',headCls:'tilt',armL:70,armR:-70}))}`;

S.before=`${bg('#cfc8f5')}
 ${panel(8,36,84,116)}${panel(108,36,84,116)}
 <rect x="6" y="34" width="88" height="120" rx="14" fill="none" stroke="${RED}" stroke-width="4" class="glow"/>
 ${at(50,142,.52,cat({armL:8,armR:-8,headCls:'tilt',mid:openBook,hat:glasses}))}
 <g transform="translate(150,140) scale(.7)">${P.bed}</g><g font-family="Baloo 2, Trebuchet MS, sans-serif" font-weight="800" fill="${VIO}"><text class="zz" x="150" y="96" font-size="14">z</text><text class="zz" style="animation-delay:1s" x="162" y="80" font-size="18">z</text></g>
 ${arrow(92,94,106,94,RED,6)}
 <g class="ring">${at(100,196,.5,P.clock(28,240))}</g>`;

S.large=`${bg('#fff1c9')}${floor(184,'#ffe08a')}
 <g class="sway" style="transform-origin:100px 180px"><circle cx="100" cy="70" r="66" fill="#f6c27a"/><circle cx="100" cy="70" r="57" fill="${SUN}"/>${[[70,50],[120,40],[136,84],[86,96],[100,64],[60,82]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="8" fill="${RED}"/>`).join('')}${[[90,34],[130,62],[112,100],[72,70]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="6" ry="3.500" fill="#4fc27f"/>`).join('')}</g>
 ${at(100,196,.6,cat({eyes:'wide',mouth:'o',armL:150,armR:-150,armsFront:true}))}
 <path d="M10,70 h20 M10,70 l6,-5 M10,70 l6,5 M190,70 h-20 M190,70 l-6,-5 M190,70 l-6,5" fill="none" stroke="${RED}" stroke-width="3.500" stroke-linecap="round" class="glow"/>`;

S.must=`${park(160)}${floor(172,'#f3d9a4')}
 ${at(160,170,.7,P.school)}
 <g class="ring">${at(40,70,.6,P.clock(34,270))}</g><path d="M14,30 l-8,-6 M66,30 l8,-6" stroke="${RED}" stroke-width="4" stroke-linecap="round" class="glow"/>
 <g class="beat"><path d="M100,24 v24" stroke="${RED}" stroke-width="8" stroke-linecap="round"/><circle cx="100" cy="62" r="5" fill="${RED}"/></g>
 <circle class="puff" cx="34" cy="182" r="6" fill="#fff"/>
 <g transform="translate(80,190) rotate(9) scale(-.74,.74)"><g class="runbob">${cat({armL:0,armR:0,armLcls:'swingA',armRcls:'swingB',feet:'run',mouth:'open',mid:backpack})}</g></g>`;

S.home=`${room('#ffe9d6','#e4b77a',170)}
 <rect x="16" y="70" width="64" height="100" rx="6" fill="#c98a4b"/><rect x="26" y="96" width="44" height="74" rx="6" fill="${INK}"/><g class="beat"><path d="M48,168 q-18,-16 -6,-36 q4,10 8,4 q0,-16 10,-22 q-2,14 8,22 q8,16 -8,32 Z" fill="${ORA}"/><path d="M48,168 q-8,-10 0,-22 q8,10 4,22 Z" fill="${SUN}"/></g><rect x="10" y="62" width="76" height="12" rx="4" fill="#8a5a30"/>
 <ellipse cx="130" cy="184" rx="60" ry="10" fill="${VIO}" opacity=".35"/>
 <rect x="96" y="120" width="96" height="46" rx="14" fill="${RED}"/><rect x="90" y="134" width="18" height="40" rx="8" fill="#d93a33"/><rect x="180" y="134" width="18" height="40" rx="8" fill="#d93a33"/>
 ${at(142,160,.66,cat({eyes:'closed',tail:false}),'breathe')}<path d="M110,150 q32,-12 66,0 v18 h-66 Z" fill="${SKY}"/>
 ${heartS(142,60,1.5,RED,'beat')}<rect x="150" y="20" width="36" height="30" rx="4" fill="#fff" stroke="#b07a45" stroke-width="3"/>`;
