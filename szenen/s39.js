/* Tag 143–146: network, legal, religious, final, main · science, memory, card, above, seat · cell, establish, nice, trial, expert · spring, firm, radio, visit, management */
S.network=`${bg('#2d2a6e')}${spark(20,20,3,'#fff',0)}${spark(180,180,3,'#fff',.6)}
 ${[[100,40],[40,100],[160,100],[70,170],[130,170]].map(([x,y],i,a)=>a.slice(i+1).map(([x2,y2])=>`<path d="M${x},${y} L${x2},${y2}" stroke="#7b55d9" stroke-width="2"/>`).join('')).join('')}
 <path d="M100,40 L40,100 L70,170 L130,170 L160,100 Z" fill="none" stroke="${SUN}" stroke-width="3" stroke-dasharray="6 8" class="glow"/>
 ${[[100,40,null],[40,100,'orange'],[160,100,'grey'],[70,170,'cream'],[130,170,'white']].map(([x,y,n])=>`<circle cx="${x}" cy="${y}" r="22" fill="#fff"/>${at(x,y+18,.3,n?K(n,{tail:false,eyes:'happy'}):cat({tail:false,eyes:'happy'}))}`).join('')}`;

S.legal=`${room('#ece6ff','#d6ccf5')}
 <rect x="100" y="24" width="80" height="106" rx="3" fill="#fff" stroke="#cbc2e6" stroke-width="2"/>${T(140,56,'§',30,INK)}<path d="M112,72 h56 M112,84 h56 M112,96 h36" stroke="#cbc2e6" stroke-width="3" stroke-linecap="round"/>
 <g class="beat"><circle cx="164" cy="116" r="16" fill="${MINT}"/>${check(164,116,7,5).replace(new RegExp(MINT,'g'),'#fff')}</g>
 ${sh(50,192,32)}${at(50,190,.9,cat({mid:tie,hat:glasses,eyes:'happy',armR:-110,armsFront:true}))}
 <g transform="translate(150,170)"><rect x="-22" y="-6" width="44" height="10" rx="3" fill="#8a5a30"/><g transform="rotate(-30)"><rect x="-12" y="-26" width="24" height="12" rx="3" fill="#b07a45"/><rect x="-2" y="-14" width="4" height="20" fill="#8a5a30"/></g></g>`;

S.religious=`${bg('#ffd9a8')}<circle cx="100" cy="70" r="40" fill="#ffe89a" class="glow"/>${hills('#8fe0a8','#6fd08f',166)}
 <rect x="70" y="90" width="60" height="80" fill="#fff8e6"/><path d="M64,90 l36,-30 36,30 Z" fill="${RED}"/><rect x="92" y="34" width="16" height="30" fill="#fff8e6"/><path d="M88,34 l12,-12 12,12 Z" fill="${RED}"/><circle cx="100" cy="48" r="5" fill="${SUN}" class="wiggle"/>
 <path d="M90,170 v-30 a10,10 0 0 1 20,0 v30 Z" fill="#8a5a30"/><circle cx="100" cy="110" r="8" fill="${SKY}"/><path d="M100,102 v16 M92,110 h16" stroke="#fff" stroke-width="1.500"/>
 <rect x="150" y="150" width="7" height="22" rx="2" fill="#fff"/><path class="beat" d="M153.500,140 q-4,6 0,10 q4,-4 0,-10 Z" fill="${ORA}"/>
 ${at(36,194,.66,cat({eyes:'closed',mouth:'w',armL:-40,armR:40,armsFront:true,headCls:'tilt'}))}${note(120,30,VIO,0)}`;

S.final=`${park(150)}${floor(156,'#e0875a')}<path d="M0,176 h200" stroke="#fff" stroke-width="2" opacity=".8"/>
 <path d="M150,156 V70 M190,156 V70" stroke="#9aa8c0" stroke-width="4"/><rect x="150" y="70" width="40" height="18" fill="#fff"/>${[0,1,2,3].map(i=>`<rect x="${150+i*10}" y="${70+(i%2)*9}" width="10" height="9" fill="${INK}"/>`).join('')}
 ${T(170,58,'END',13,RED,'middle','beat')}
 <g transform="translate(110,184) scale(-.8,.8)"><g class="runbob">${cat({eyes:'closed',mouth:'big',armL:140,armR:-140,armsFront:true,feet:'run',mid:trikot(RED)})}</g></g>
 ${[0,1,2,3].map(i=>`<rect class="conf" style="animation-delay:${i*.3}s" x="${30+i*30}" y="40" width="6" height="10" fill="${[RED,SUN,MINT,VIO][i]}"/>`).join('')}`;

S.main=`${park(176)}${cloud(30,22,.6)}
 <rect x="10" y="130" width="34" height="46" rx="3" fill="#b07a45" opacity=".6"/><rect x="156" y="130" width="34" height="46" rx="3" fill="#b07a45" opacity=".6"/>
 <rect x="60" y="60" width="80" height="116" rx="6" fill="${RED}"/><rect x="70" y="72" width="60" height="104" rx="30" fill="#b52f29"/><circle cx="122" cy="126" r="5" fill="${SUN}"/>
 <path d="M52,60 h96 l-10,-16 h-76 Z" fill="${SUN}"/>${T(100,57,'MAIN',11,INK)}
 ${arrow(100,4,100,30,RED,6,'float')}${spark(40,70,8,SUN,0)}${spark(160,70,8,SUN,.5)}
 ${at(170,200,.44,cat({eyes:'happy',armL:140,armsFront:true}))}`;

S.science=`${room('#e3fbf5','#bff0de')}
 ${at(130,186,1.1,P.table(110))}<path d="M70,124 h120 v12 h-120 Z" fill="#c98a4b"/>
 <path d="M100,70 h16 v20 l16,30 q2,6 -6,6 h-36 q-8,0 -6,-6 l16,-30 Z" fill="#fff" opacity=".8" stroke="#cbc2e6" stroke-width="2"/><path d="M93,108 h30 l8,14 q1,4 -5,4 h-36 q-6,0 -5,-4 Z" fill="${MINT}"/>
 <circle class="bubble" cx="106" cy="100" r="4" fill="${MINT}"/><circle class="bubble" style="animation-delay:.8s" cx="112" cy="90" r="3" fill="${MINT}"/>
 <rect x="150" y="80" width="12" height="44" rx="6" fill="#fff" opacity=".8" stroke="#cbc2e6" stroke-width="2"/><rect x="152" y="100" width="8" height="22" rx="4" fill="${VIO}"/>
 ${gear(176,40,12,SUN,6)}
 ${at(40,192,.8,cat({mid:kittel,hat:glasses,eyes:'spark',mouth:'o',armR:-100,armsFront:true}))}`;

S.memory=`${room('#ece6ff','#d6ccf5')}
 ${think(130,56,56,40,`<rect x="96" y="30" width="68" height="50" rx="3" fill="#f3d9a4" stroke="#b07a45" stroke-width="2"/>${at(118,78,.24,cat({tail:false,eyes:'happy'}))}${at(144,78,.24,K('orange',{tail:false,eyes:'happy'}))}${heartS(131,42,.5,RED,'beat')}`,-1)}
 ${sh(60,192,34)}${at(60,190,.94,cat({eyes:'closed',mouth:'w',headCls:'tilt',armR:-150,armsFront:true}))}
 <g transform="translate(160,170)"><rect x="-20" y="-14" width="40" height="28" rx="3" fill="${RED}"/><rect x="-20" y="-14" width="8" height="28" fill="#b52f29"/>${T(4,4,'♥',14,'#fff')}</g>`;

S.card=`${bg('#e3fbf5')}${floor(170,MINT)}<rect y="170" width="200" height="8" fill="#9be6d8"/>
 <g transform="rotate(-10 80 100)"><rect x="50" y="56" width="60" height="88" rx="6" fill="#fff" stroke="#cbc2e6" stroke-width="2"/>${heartS(80,100,1.600,RED)}${T(60,74,'A',12,RED)}</g>
 <g class="float"><g transform="rotate(8 140 100)"><rect x="110" y="56" width="60" height="88" rx="6" fill="#fff" stroke="#cbc2e6" stroke-width="2"/>${star5(140,100,16,SUN)}${T(120,74,'K',12,INK)}</g></g>
 ${at(40,206,.56,cat({eyes:'happy',mouth:'tongue',tail:false,armR:-130,armsFront:true}))}`;

S.above=`${park()}${cloud(30,60,.6)}
 <g class="float"><g transform="translate(100,40)"><ellipse cx="0" cy="0" rx="14" ry="10" fill="${SKY}"/><circle cx="12" cy="-6" r="7" fill="${SKY}"/><path d="M18,-6 l8,2 -8,3 Z" fill="${ORA}"/><circle cx="14" cy="-7" r="1.600" fill="${INK}"/><g class="flap"><path d="M-2,-2 q-14,-20 -22,-2 Z" fill="#2f6fd0"/></g></g></g>
 <path d="M100,60 v44" stroke="${RED}" stroke-width="3" stroke-dasharray="5 6"/>${arrow(100,96,100,62,RED,5,'glow')}
 ${sh(100,192,34)}${at(100,190,.9,cat({eyes:'wide',mouth:'o',headCls:'tilt'}))}`;

S.seat=`${room('#fff1c9','#e4b77a')}
 <g class="pulse" style="transform-origin:120px 178px"><rect x="86" y="60" width="68" height="70" rx="10" fill="${RED}"/><rect x="80" y="124" width="80" height="18" rx="6" fill="#d93a33"/><path d="M90,142 v36 M150,142 v36" stroke="#8a5a30" stroke-width="7" stroke-linecap="round"/></g>
 ${ring(120,110,62,SUN)}${arrow(180,40,160,70,RED,6,'float')}
 ${at(36,194,.66,cat({eyes:'happy',feet:'walk',armR:-100,armsFront:true}))}`;

S.cell=`${bg('#e3fbf5')}
 <circle cx="110" cy="96" r="80" fill="#fff" stroke="${INK}" stroke-width="6"/>
 <g class="pulse" style="transform-origin:110px 96px"><path d="M60,96 q0,-50 50,-46 q54,2 50,50 q-4,44 -52,42 q-48,-2 -48,-46 Z" fill="#bff0de" stroke="${MINT}" stroke-width="4"/><circle cx="116" cy="92" r="18" fill="${VIO}"/><circle cx="120" cy="88" r="6" fill="#5a4a6c"/>${[[84,80],[90,116],[140,116],[136,66]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="7" ry="4" fill="${SUN}"/>`).join('')}</g>
 ${floor(186,'#bff0de')}
 ${at(30,200,.5,cat({mid:kittel,hat:glasses,eyes:'spark',armR:-140,armsFront:true}))}${T(170,180,'×100',12,VIO)}`;

S.establish=`${park(170)}${sun(30,24,9)}
 <rect x="70" y="80" width="100" height="90" rx="4" fill="#fff8e6"/><path d="M62,80 h116 l-8,-22 h-100 Z" fill="${SKY}"/><rect x="104" y="120" width="30" height="50" rx="3" fill="#b07a45"/><rect x="80" y="96" width="80" height="16" rx="3" fill="${SUN}"/>${T(120,109,'OPEN',11,INK)}
 <path d="M60,150 h120" stroke="${RED}" stroke-width="5"/><g class="chew" style="transform-origin:120px 150px;transform-box:view-box"><path d="M112,140 l16,20 M128,140 l-16,20" stroke="#9aa8c0" stroke-width="3" stroke-linecap="round"/></g>
 ${burst(176,40,RED,0)}${T(120,50,'2026',14,RED,'middle','beat')}
 ${at(34,196,.6,cat({mid:tie,eyes:'happy',mouth:'open',armR:-110,armsFront:true}))}`;

S.nice=`${park()}${sun(160,28,10)}
 ${sh(60,192,32)}${at(60,190,.9,cat({eyes:'happy',mouth:'open',armR:-90,armsFront:true,prop:`<g transform="translate(4,0)"><path d="M0,6 v-18" stroke="#3aa568" stroke-width="3"/><circle cx="0" cy="-16" r="7" fill="${RED}"/><circle cx="0" cy="-16" r="2.500" fill="${SUN}"/></g>`}))}
 ${sh(146,192,28)}${at(146,190,.8,K('grey',{eyes:'spark',mouth:'open',armL:120,armsFront:true}))}
 ${heart(104,100,1,RED,0)}${heart(120,80,.7,RED,.7)}${spark(30,60,7,SUN,0)}`;

S.trial=`${room('#ece6ff','#d6ccf5')}
 <rect x="100" y="80" width="90" height="100" rx="4" fill="#8a5a30"/><rect x="94" y="74" width="102" height="12" rx="3" fill="#b07a45"/>
 ${at(145,78,.56,K('grey',{tail:false,hat:glasses.replace(/#fff/g,INK),eyes:'open',mouth:'w',armR:-100,armRcls:'throwarm',armsFront:true,mid:`<path d="M-24,-48 h48 v40 h-48 Z" fill="${INK}"/><path d="M-6,-48 l6,12 6,-12" fill="#fff"/>`,prop:`<rect x="-10" y="-22" width="20" height="10" rx="3" fill="#b07a45"/><rect x="-2" y="-12" width="4" height="16" fill="#8a5a30"/>`}))}<rect x="100" y="74" width="90" height="12" fill="#b07a45"/>
 ${T(145,140,'?',30,SUN,'middle','beat')}
 <g transform="translate(30,186)">${P.plate(22)}</g><path d="M22,180 h14" stroke="#cbc2e6" stroke-width="2"/>
 ${at(60,196,.5,cat({eyes:'wide',mouth:'wavy',armL:-150,armR:150,armsFront:true}))}`;

S.expert=`${bg('#fff3cf')}<circle cx="100" cy="96" r="82" fill="#ffe7a3"/>${floor(184,'#ffe08a')}
 ${sh(90,192,36)}${at(90,190,1,cat({hat:glasses+doktorhut,bow:false,eyes:'happy',mouth:'open',armR:-128,armsFront:true,mid:`<circle cx="0" cy="-28" r="9" fill="${SUN}"/>${star5(0,-28,5,'#fff')}`}))}
 ${[150,166,182].map((x,i)=>`<g class="twinkle" style="animation-delay:${i*.2}s">${star5(x,40,7,SUN)}</g>`).join('')}
 <g transform="translate(166,176)">${[RED,SKY,MINT].map((c,i)=>`<rect x="-18" y="${-i*9}" width="36" height="8" rx="2" fill="${c}"/>`).join('')}</g>`;

S.spring=`${bg('#d9f7e1')}${sun(160,28,10)}${cloud(40,24,.7)}${hills('#8fe0a8','#6fd08f',150)}
 ${flower(30,180,RED,0)}${flower(60,190,SUN,.3)}${flower(140,186,VIO,.6)}${flower(176,176,RED,.9)}${flower(100,194,ORA,1.2)}
 <rect x="150" y="100" width="8" height="60" rx="3" fill="#b07a45"/><circle cx="154" cy="84" r="30" fill="#bff0c8"/>${[[140,74],[166,80],[150,98],[160,62]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="5" fill="#fff"/><circle cx="${x}" cy="${y}" r="2" fill="${SUN}"/>`).join('')}
 ${bfly(60,90,ORA,0)}${bfly(110,70,VIO,.5)}
 ${at(84,180,.7,cat({eyes:'closed',mouth:'w',headCls:'tilt',armL:140,armR:-140,armsFront:true}))}`;

S.firm=`${bg('#cdeeff')}${cloud(30,24,.7)}${floor(176,'#8fe0a8')}
 <rect x="50" y="40" width="100" height="136" rx="4" fill="${SKY}"/><rect x="60" y="20" width="80" height="22" rx="4" fill="${RED}"/>${T(100,36,'CAT Co.',12,'#fff')}
 ${[0,1,2,3].map(r=>[0,1,2].map(c=>`<rect x="${62+c*28}" y="${54+r*24}" width="18" height="14" rx="2" fill="${(r*3+c)%4?'#bfe9ff':SUN}"/>`).join('')).join('')}<rect x="90" y="150" width="20" height="26" fill="#2f6fd0"/>
 ${at(30,196,.44,cat({mid:tie,eyes:'happy',armR:-20,prop:mappe}))}${at(172,196,.4,K('orange',{mid:tie,feet:'walk'}))}`;

S.radio=`${room('#fff1c9','#e4b77a')}
 ${at(130,186,1.1,P.table(100))}<path d="M76,124 h110 v12 h-110 Z" fill="#c98a4b"/>
 <rect x="96" y="76" width="76" height="48" rx="8" fill="${RED}"/><circle cx="118" cy="100" r="14" fill="#5a2a2a"/><circle cx="118" cy="100" r="8" fill="#b52f29"/><rect x="140" y="88" width="24" height="8" rx="2" fill="#fff"/><circle cx="146" cy="110" r="4" fill="${SUN}"/><circle cx="160" cy="110" r="4" fill="${SUN}"/><path d="M160,76 l14,-30" stroke="${INK}" stroke-width="2"/>
 <path d="M180,50 q8,8 0,18 M188,44 q12,14 0,30" fill="none" stroke="${VIO}" stroke-width="3" stroke-linecap="round" class="glow"/>
 ${note(90,50,RED,0)}${note(130,40,SKY,.6)}
 ${at(36,192,.8,cat({eyes:'closed',mouth:'open',armL:140,armR:-140,armsFront:true}),'dance')}`;

S.visit=`${park(170)}${cloud(40,24,.7)}
 <g transform="translate(140,176) scale(1.1)">${P.house(RED,'#fff8e6')}</g>
 ${at(170,176,.4,K('orange',{eyes:'happy',armL:125,armLcls:'wave',armsFront:true}))}
 ${sh(56,192,30)}${at(56,190,.84,cat({eyes:'happy',mouth:'open',armR:-125,armRcls:'wave',armsFront:true,armL:30,propL:`<g transform="translate(-2,10) scale(.7)">${P.gift(VIO,SUN)}</g>`}))}
 ${T(100,60,'ding dong',13,RED,'middle','beat')}`;

S.management=`${room('#e6f1ff','#cfe3f7')}
 <rect x="20" y="14" width="160" height="80" rx="6" fill="#fff" stroke="#cbc2e6" stroke-width="2"/>
 <rect x="84" y="22" width="32" height="18" rx="4" fill="${RED}"/>${[36,84,132].map((x,i)=>`<rect x="${x}" y="64" width="32" height="18" rx="4" fill="${[SKY,MINT,SUN][i]}"/><path d="M100,40 V52 H${x+16} V64" fill="none" stroke="${INK}" stroke-width="2"/>`).join('')}
 ${at(100,194,.7,cat({mid:tie,hat:glasses,eyes:'happy',mouth:'open',armL:120,armR:-120,armsFront:true}))}
 ${at(30,196,.4,K('orange',{eyes:'happy'}))}${at(170,196,.4,K('grey',{eyes:'happy'}))}`;
