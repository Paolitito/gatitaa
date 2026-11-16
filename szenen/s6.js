/* Tag 11–14: the, be, to, of, and · a, in, that, have, I · it, for, not, on, with · he, as, you, do, at */
const CB='#2f2b3d', CO='#1b1825';
const paw=(x,y,r)=>`<ellipse cx="${x}" cy="${y}" rx="${r||9}" ry="${(r||9)*.67}" fill="${CB}" stroke="${CO}" stroke-width="1.4"/>`;
const park=(y)=>`${bg('#cdeeff')}${hills('#8fe0a8','#6fd08f',y||166)}`;

S.the=`${bg('#ffe9d6')}<path d="M100,-10 L34,186 h132 Z" fill="#fff6c8"/><ellipse cx="100" cy="186" rx="66" ry="10" fill="#fff0a8"/>
 ${floor(186,'#ffd9bd')}
 <g opacity=".28">${at(26,184,.6,K('orange'))}${at(176,184,.6,K('grey'))}</g>
 <rect x="86" y="-4" width="28" height="14" rx="5" fill="${INK}"/>
 ${at(100,186,.98,cat({eyes:'happy',armR:-125,armRcls:'wave',armsFront:true}))}
 ${arrow(170,34,140,66,RED,5,'float')}${spark(40,60,6,SUN,0)}${spark(60,120,5,SUN,.7)}`;

const nameTag=`<g transform="translate(0,-26)"><rect x="-19" y="-10" width="38" height="22" rx="4" fill="#fff"/><rect x="-19" y="-10" width="38" height="8" rx="4" fill="${RED}"/>${T(0,8,'Canela',9,INK)}</g>`;
S.be=`${bg('#e3fbf5')}<circle cx="100" cy="98" r="80" fill="#f0fdf8"/>
 ${[[24,40,RED],[170,34,VIO],[30,130,SUN],[176,120,MINT],[100,18,SKY]].map(([x,y,c])=>`<circle cx="${x}" cy="${y}" r="5" fill="${c}"/>`).join('')}
 ${floor(184,'#bff0de')}${sh(100,190,38)}
 ${at(100,186,1.05,cat({armR:-125,armRcls:'wave',armsFront:true,mouth:'open',eyes:'happy',extra:nameTag}))}`;

S.to=`${park()}${sun(30,30,10)}
 <path d="M0,186 h200" stroke="#f3d9a4" stroke-width="16"/>
 ${at(158,178,.86,P.house())}
 <g class="road"><path d="M60,150 h70" stroke="${RED}" stroke-width="4" stroke-dasharray="8 12" stroke-linecap="round"/></g>${arrow(112,150,128,150,RED,5)}
 <g transform="translate(44,190) scale(-.62,.62)"><g class="walkbob">${cat({armL:0,armR:0,armLcls:'slowA',armRcls:'slowB',feet:'walk'})}</g></g>`;

const mug=(c)=>`<path d="M22,-34 q22,0 18,18 q-4,12 -18,10" fill="none" stroke="${c}" stroke-width="7"/><path d="M-26,-44 h52 v28 q0,16 -16,16 h-20 q-16,0 -16,-16 Z" fill="${c}"/><ellipse cx="0" cy="-44" rx="26" ry="7" fill="#5cc3ff"/><ellipse class="ripple" cx="0" cy="-44" rx="12" ry="3" fill="none" stroke="#fff" stroke-width="1.5"/>`;
S.of=`${bg('#d6f1ff')}<circle cx="116" cy="96" r="76" fill="#e6f7ff"/>
 ${floor(176,'#9fd4f0')}
 ${at(120,176,2,mug(MINT))}
 <path class="drip" d="${tear(120,36)}" fill="${SKY}"/><path class="drip" style="animation-delay:.55s" d="${tear(120,36)}" fill="${SKY}"/>
 ${at(40,190,.66,cat({armR:-100,armRcls:'bob',mouth:'tongue'}))}`;

S.and=`${park()}${cloud(44,34,.8)}
 ${sh(54,190,28)}${at(54,188,.82,cat({eyes:'happy'}))}
 ${at(146,188,.74,P.dog({happy:true}))}
 <g class="beat"><path d="M100,92 v30 M85,107 h30" stroke="${VIO}" stroke-width="9" stroke-linecap="round"/></g>`;

S.a=`${bg('#e3fbf5')}<circle cx="100" cy="60" r="44" fill="#fff" opacity=".7"/>
 ${floor(184,'#bff0de')}${sh(100,190,36)}
 ${at(100,74,1.9,P.ball(RED))}${ring(100,52,36,VIO)}
 ${at(100,186,.95,cat({armL:155,armR:-155,armsFront:true,eyes:'happy',mouth:'open'}))}`;

S.in=`${bg('#fff1c9')}<circle cx="100" cy="90" r="74" fill="#ffe7a3"/>
 ${floor(180,'#ffe08a')}${sh(100,188,60)}
 ${at(100,128,1,P.boxBack(100))}
 ${at(100,170,.9,cat({tail:false,eyes:'happy',armL:20,armR:-20}),'peek')}
 ${at(100,128,1,P.boxFront(100,56))}${paw(74,128)}${paw(126,128)}
 ${arcArrow(176,40,140,104,10,RED,5,'','float')}`;

S.that=`${bg('#4a4496')}
 ${spark(30,40,4,'#fff',0)}${spark(90,26,4,'#fff',.6)}${spark(60,90,3.5,'#fff',1.1)}${spark(186,100,4,'#fff',.3)}
 <path d="M0,176 q50,-18 100,0 t100,0 v24 h-200 Z" fill="#373278"/>
 <g class="beat">${star5(160,44,18,SUN,`stroke="${SUN}" stroke-width="4"`)}</g>${ring(160,44,30,'#fff')}
 <path d="M84,118 L140,62" stroke="#fff" stroke-width="3" stroke-dasharray="3 9" stroke-linecap="round" class="glow"/>
 ${at(50,190,.86,cat(Object.assign({armR:-128,armsFront:true,mouth:'open'},NL)))}`;

S.have=`${bg('#ece6ff')}<circle cx="100" cy="100" r="82" fill="#f6f2ff"/>
 ${floor(184,'#d6ccf5')}${sh(100,190,38)}
 ${at(100,186,1.06,cat({eyes:'happy',armL:-34,armR:34,armsFront:true,mid:`<g transform="translate(0,-6) scale(1.25)">${P.book(SKY)}</g>`}),'sway')}
 ${heart(150,70,1,RED,0)}${spark(40,60,6,SUN,.4)}${spark(166,130,5,VIO,1)}`;

S.I=`${bg('#fff3cf')}<circle cx="100" cy="104" r="78" fill="#ffe7a3"/>
 ${floor(184,'#ffe08a')}${sh(100,190,38)}
 ${at(100,186,1.06,cat({armL:-50,armR:50,armsFront:true,eyes:'happy',mouth:'open'}))}
 ${ring(100,104,82,RED)}${arrow(26,22,58,58,RED,6,'float')}`;

S.it=`${bg('#e3fbf5')}
 ${floor(180,'#bff0de')}
 <rect x="112" y="132" width="60" height="50" rx="6" fill="#fff" stroke="#cbc2e6" stroke-width="1.6"/><rect x="106" y="126" width="72" height="10" rx="5" fill="#f4f1fb" stroke="#cbc2e6" stroke-width="1.6"/>
 ${at(142,126,1.8,P.ball(SKY))}${ring(142,104,34,RED)}
 ${arrow(176,36,158,70,RED,5,'float')}
 ${sh(50,190,28)}${at(50,188,.84,cat({armR:-96,armRcls:'bob'}))}`;

S.for=`${bg('#ffe9d6')}<circle cx="100" cy="100" r="82" fill="#ffdcc0"/>
 ${floor(184,'#ffd9bd')}${sh(100,190,38)}
 ${at(100,186,1.02,cat({eyes:'happy',mouth:'open',tail:true}))}
 <g class="float">${at(100,180,2.3,P.gift(VIO,SUN))}<g transform="translate(132,148) rotate(14)"><rect x="-10" y="-8" width="24" height="16" rx="3" fill="#fff"/><path d="${heartP}" transform="translate(2,2) scale(.5)" fill="${RED}"/></g></g>
 ${paw(70,150,10)}${paw(130,150,10)}
 ${heart(40,70,1,RED,0)}${heart(160,60,.8,'#ff8a7a',1.1)}`;

S.not=`${bg('#e6f1ff')}${cloud(150,40,.9)}
 <g opacity=".85">${sun(52,52,18)}</g>${cross(52,52,24,7)}
 ${thermo(176,70,18,SKY)}
 ${floor(182,'#cfe3f7')}${sh(108,190,36)}
 ${at(108,186,1,cat({eyes:'happy',armR:-96,prop:`<g transform="translate(0,12)">${P.cup(RED)}</g>`,extra:winter}))}
 <circle class="smoke" cx="140" cy="118" r="4.5" fill="#fff"/><circle class="smoke" style="animation-delay:1.2s" cx="146" cy="114" r="4" fill="#fff"/>`;

S.on=`${bg('#fff1c9')}
 <rect x="130" y="16" width="52" height="46" rx="8" fill="#bfe9ff" stroke="#fff" stroke-width="5"/>
 ${floor(176,'#e4b77a')}
 ${at(100,186,1.25,P.table(130))}
 ${at(100,118,.78,cat({eyes:'happy',armR:-125,armRcls:'wave',armsFront:true}))}
 ${arcArrow(24,50,62,104,6,RED,5,'','float')}`;

S.with=`${park(170)}${sun(170,30,10)}
 ${sh(50,190,28)}${at(50,188,.8,cat({armR:-72,armRcls:'bob',eyes:'happy',mouth:'open'}))}
 <g transform="translate(84,188)"><g class="roll">${P.ball(RED)}</g></g>
 ${at(152,188,.72,P.dog({happy:true}))}
 ${heart(100,80,1.1,RED,0)}`;

S.he=`${park()}${cloud(40,36,.8)}
 ${sh(124,190,28)}${at(124,188,1,P.person())}
 ${arrow(184,26,158,56,RED,6,'float')}${ring(124,70,40,RED)}
 ${at(36,192,.56,cat({armR:-100,armRcls:'bob'}))}`;

S.as=`${bg('#e3fbf5')}${cloud(40,24,.7)}
 ${floor(184,'#bff0de')}
 <path d="M10,76 h180" stroke="${VIO}" stroke-width="3" stroke-dasharray="6 8" stroke-linecap="round"/>
 ${at(58,184,1.22,P.house())}
 ${at(154,184,.93,cat({eyes:'happy',armL:40,armR:-60}))}
 <g class="beat"><path d="M98,134 h16 M98,144 h16" stroke="${VIO}" stroke-width="6" stroke-linecap="round"/></g>`;

S.you=`${bg('#ffe9d6')}<circle cx="100" cy="100" r="84" fill="#ffdcc0"/>
 ${floor(184,'#ffd9bd')}${sh(92,190,38)}
 ${at(92,186,1.04,cat({eyes:'spark',mouth:'open',armR:-60}))}
 <g class="pulse" style="transform-origin:138px 134px"><ellipse cx="138" cy="134" rx="24" ry="22" fill="${CB}" stroke="${CO}" stroke-width="1.8"/><ellipse cx="138" cy="140" rx="10" ry="8" fill="#ff8a7a"/><circle cx="124" cy="126" r="4.5" fill="#ff8a7a"/><circle cx="138" cy="120" r="4.5" fill="#ff8a7a"/><circle cx="152" cy="126" r="4.5" fill="#ff8a7a"/></g>
 ${heart(40,60,1.1,RED,0)}${heart(170,70,.8,RED,1)}${spark(30,130,6,SUN,.5)}`;

S.do=`${bg('#e3fbf5')}
 ${floor(184,'#bff0de')}
 ${speech(132,62,104,70,`<g transform="translate(112,62) scale(2.2)">${P.fish}</g>${T(160,78,'?',40,RED)}`,84,112)}
 ${sh(54,190,30)}${at(54,188,.86,cat({armR:-110,armRcls:'bob',mouth:'open'}))}
 ${at(158,190,.56,K('orange',{headCls:'tilt'}))}`;

S.at=`${park()}${cloud(30,30,.7)}${cloud(176,44,.6)}
 ${at(100,174,1.3,P.school)}
 <g class="hop"><path d="M100,2 q-13,0 -13,13 q0,9 13,22 q13,-13 13,-22 q0,-13 -13,-13 Z" fill="${RED}"/><circle cx="100" cy="15" r="5" fill="#fff"/></g>
 <path d="M86,174 q-6,12 -18,26 h64 q-12,-14 -18,-26 Z" fill="#f3d9a4"/>
 ${at(100,194,.46,cat({armR:-125,armRcls:'wave',armsFront:true,mouth:'open'}))}`;
