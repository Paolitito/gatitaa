/* Tag 135–138: sister, professor, operation, financial, crime · stage, ok, compare, authority, miss · design, sort, act, knowledge, gun · station, strategy, clearly, discuss, indeed */
const keks=(x,y,r)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="#d9a56a" stroke="#b07a45" stroke-width="1.500"/><circle cx="${x-r*.3}" cy="${y-r*.2}" r="${r*.16}" fill="#5a3a1a"/><circle cx="${x+r*.3}" cy="${y+r*.1}" r="${r*.16}" fill="#5a3a1a"/><circle cx="${x}" cy="${y+r*.45}" r="${r*.14}" fill="#5a3a1a"/>`;
S.sister=`${park()}${cloud(40,26,.7)}
 ${sh(64,192,34)}${at(64,190,.94,cat({eyes:'happy',armR:-70}))}
 ${sh(140,192,24)}${at(140,190,.64,cat({eyes:'happy',mouth:'open',armL:130,armR:-130,armsFront:true,bow:false,hat:`<g transform="translate(0,-120)"><path d="M-15,-9 L15,9 L15,-9 L-15,9 Z" fill="${SUN}"/><circle r="5" fill="#e0a83a"/></g>`}),'hop')}
 ${ring(140,156,40,RED)}${arrow(184,60,164,104,RED,6,'float')}${heart(100,110,.8,RED,0)}`;

S.professor=`${bg('#fff1c9')}
 <rect x="80" y="14" width="110" height="80" rx="6" fill="#3aa568" stroke="#b07a45" stroke-width="5"/>${T(135,48,'E = mc²',16,'#fff')}<path d="M96,66 q10,-10 20,0 t20,0 t20,0" fill="none" stroke="#fff" stroke-width="2"/>
 ${floor(184,'#ffe08a')}
 ${sh(56,192,34)}${at(56,190,.94,K('grey',{hat:glasses.replace(/#fff/g,INK)+bart,mid:tie,mouth:'open',armR:-128,armRcls:'bob',armsFront:true,prop:`<path d="M0,4 l12,-30" stroke="#b07a45" stroke-width="3" stroke-linecap="round"/>`}))}
 <g transform="translate(150,170)">${[RED,SKY,SUN].map((c,i)=>`<rect x="-20" y="${-i*9}" width="40" height="8" rx="2" fill="${c}"/>`).join('')}</g>`;

S.operation=`${room('#e3fbf5','#bff0de')}
 <rect x="80" y="130" width="110" height="10" rx="4" fill="#9aa8c0"/><path d="M90,140 v40 M180,140 v40" stroke="#7a8aa6" stroke-width="5"/>
 <g transform="translate(136,130) rotate(-90)">${teddy(0,0,.9)}</g>
 <path d="M130,110 l12,8" stroke="${INK}" stroke-width="1.500" stroke-dasharray="2 3"/><g class="beat">${heartS(150,96,.6,RED)}</g>
 <circle cx="150" cy="40" r="20" fill="#fff6c8" class="glow"/><path d="M150,0 v20" stroke="#9aa8c0" stroke-width="4"/>
 ${sh(44,192,30)}${at(44,190,.86,cat({mid:kittel,eyes:'happy',mouth:'tongue',armR:-84,armRcls:'bob',armsFront:true,hat:`<path d="M-30,-98 q30,-22 60,0 v8 h-60 Z" fill="${MINT}"/>`,prop:`<path d="M0,2 l12,-14" stroke="#9aa8c0" stroke-width="2"/><path d="M12,-12 q8,-2 10,6" fill="none" stroke="${RED}" stroke-width="1.500"/>`}))}`;

S.financial=`${room('#e6f1ff','#cfe3f7')}
 <rect x="96" y="20" width="90" height="70" rx="6" fill="#fff" stroke="#cbc2e6" stroke-width="2"/><path d="M106,74 l16,-18 14,8 20,-26 16,10" fill="none" stroke="${MINT}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="draw"/>
 ${[0,1,2,3].map(k=>`<ellipse cx="120" cy="${172-k*8}" rx="14" ry="5" fill="${SUN}" stroke="#e0a83a" stroke-width="1.500"/>`).join('')}${[0,1].map(k=>`<ellipse cx="156" cy="${172-k*8}" rx="14" ry="5" fill="${SUN}" stroke="#e0a83a" stroke-width="1.500"/>`).join('')}
 <rect x="140" y="110" width="40" height="22" rx="3" fill="#8fe0a8" stroke="#3aa568" stroke-width="1.500"/><circle cx="160" cy="121" r="6" fill="#3aa568" opacity=".5"/>
 ${at(46,192,.84,cat({mid:tie,hat:glasses,eyes:'happy',armR:-96,armsFront:true,prop:`<rect x="-10" y="-22" width="20" height="26" rx="3" fill="#5a4a6c"/><rect x="-7" y="-19" width="14" height="7" fill="#bff0de"/>${[0,1,2].map(i=>`<circle cx="${-5+i*5}" cy="-6" r="1.500" fill="#fff"/><circle cx="${-5+i*5}" cy="-1" r="1.500" fill="#fff"/>`).join('')}`}))}`;

S.crime=`${room('#fff1c9','#e4b77a')}
 <rect x="110" y="110" width="80" height="8" rx="3" fill="#b07a45"/><path d="M118,118 v60 M182,118 v60" stroke="#8a5a30" stroke-width="6"/>
 <path d="M130,82 h40 l-4,28 h-32 Z" fill="#fff" opacity=".8" stroke="#cbc2e6" stroke-width="2"/><rect x="128" y="76" width="44" height="8" rx="3" fill="${RED}"/>${keks(142,100,6)}${keks(156,98,6)}
 <g opacity=".7">${keks(96,150,4)}${keks(84,164,3)}${keks(70,174,2.500)}</g>
 ${at(40,192,.6,K('orange',{eyes:'wide',mouth:'o',feet:'walk',armR:-70,prop:keks(0,-6,8),hat:`<rect x="-30" y="-92" width="60" height="16" rx="6" fill="${INK}"/><circle cx="-11" cy="-84" r="7" fill="#fff"/><circle cx="11" cy="-84" r="7" fill="#fff"/><circle cx="-11" cy="-84" r="3" fill="${INK}"/><circle cx="11" cy="-84" r="3" fill="${INK}"/>`}))}
 ${T(100,50,'!',30,RED,'middle','beat')}
 ${at(170,196,.4,cat({hat:detHat,eyes:'wide',armL:100,armsFront:true}))}`;

S.stage=`${bg('#3b2a4a')}<path d="M100,-10 L40,150 h120 Z" fill="#fff6c8" opacity=".22"/>
 <path d="M0,0 h28 q-6,80 0,150 h-28 Z M200,0 h-28 q6,80 0,150 h28 Z" fill="${RED}"/><path d="M28,0 h144 v14 q-72,16 -144,0 Z" fill="#b52f29"/>
 <rect x="10" y="150" width="180" height="50" fill="#8a5a30"/><rect x="10" y="146" width="180" height="8" fill="#b07a45"/>${ring(100,160,80,SUN)}
 ${at(100,150,.5,cat(Object.assign({eyes:'happy',armL:130,armR:-130,armsFront:true},NL)))}
 ${[30,60,90,120,150].map(x=>`<circle class="glow" cx="${x+10}" cy="158" r="3" fill="${SUN}"/>`).join('')}`;

S.ok=`${bg('#e3fbf5')}<circle cx="100" cy="100" r="80" fill="#fff" opacity=".6"/>${floor(184,'#bff0de')}
 ${speech(150,46,50,36,T(150,60,'OK!',20,'#1f9c83'),130,80)}
 ${sh(86,192,36)}${at(86,190,1,cat({eyes:'happy',mouth:'open',armR:-120,armsFront:true,prop:`<g transform="translate(0,-8)"><rect x="-6" y="-2" width="12" height="14" rx="4" fill="${INK}"/><rect x="-5" y="-18" width="8" height="18" rx="4" fill="${INK}"/></g>`}))}
 <g class="beat">${check(160,130,10,6)}</g>`;

S.compare=`${bg('#ece6ff')}${floor(184,'#d6ccf5')}
 <g transform="translate(46,110) scale(2)">${P.fish}</g><g transform="translate(150,110) scale(3.400)">${P.fish}</g>
 ${T(100,116,'<',34,RED,'middle','beat')}
 <path d="M24,140 h44 M112,146 h78" stroke="${INK}" stroke-width="2"/><path d="M24,134 v12 M68,134 v12 M112,140 v12 M190,140 v12" stroke="${INK}" stroke-width="2"/>
 ${at(100,202,.56,cat({hat:glasses,eyes:'open',headCls:'tilt',armL:140,armR:-140,armsFront:true}))}`;

S.authority=`${park(166)}${floor(172,'#6b7a99')}
 <g class="pulse" style="transform-origin:150px 60px"><circle cx="150" cy="60" r="26" fill="${RED}" stroke="#fff" stroke-width="4"/><rect x="134" y="54" width="32" height="12" rx="2" fill="#fff"/></g><path d="M150,86 v90" stroke="#9aa8c0" stroke-width="5"/>
 ${sh(80,192,34)}${at(80,190,.94,K('grey',{hat:polcap,mid:`<path d="M-22,-46 h44 v34 h-44 Z" fill="#2f6fd0"/>${star5(-10,-32,5,SUN)}`,eyes:'open',mouth:'w',armR:-100,armsFront:true}))}
 <ellipse cx="124" cy="140" rx="11" ry="12" fill="#fff" stroke="#cbc2e6" stroke-width="1.600"/>
 ${at(24,194,.4,cat({eyes:'wide',armL:20,armR:-20}))}`;

S.miss=`${room('#e9efe0','#d7dfc8')}
 <rect x="110" y="20" width="76" height="86" rx="6" fill="#cfe4d8" stroke="#fff" stroke-width="5"/><circle cx="166" cy="40" r="9" fill="#fff6c8"/>
 ${think(60,46,36,28,at(60,70,.34,K('orange',{tail:false,eyes:'happy'}))+heartS(84,34,.6,RED,'beat'),1)}
 ${sh(110,192,34)}${at(110,190,.94,cat({eyes:'closed',mouth:'wavy',headCls:'tilt',armL:-40,armR:40,armsFront:true,mid:`<g transform="translate(0,-26)"><rect x="-13" y="-15" width="26" height="30" rx="2" fill="#fff" stroke="#b07a45" stroke-width="3"/><circle cx="0" cy="-2" r="6" fill="${ORA}"/></g>`}))}
 <path class="sweat" d="${tear(150,110)}" fill="${SKY}"/>`;

S.design=`${room('#e6f1ff','#c98a4b',166)}<rect y="166" width="200" height="8" fill="#e0a868"/>
 <rect x="76" y="30" width="114" height="100" rx="4" fill="#fff" stroke="#cbc2e6" stroke-width="2"/><path d="M76,54 h114 M76,78 h114 M76,102 h114 M104,30 v100 M132,30 v100 M160,30 v100" stroke="#e6e0f5" stroke-width="1"/>
 <path d="M96,110 q0,-50 36,-50 q36,0 36,50 Z" fill="none" stroke="${SKY}" stroke-width="3" class="draw"/><circle cx="132" cy="60" r="4" fill="${RED}"/><path d="M96,118 h72" stroke="${INK}" stroke-width="1.500"/><path d="M96,114 v8 M168,114 v8" stroke="${INK}" stroke-width="1.500"/>
 <path d="M176,140 l-30,24 h30 Z" fill="${SUN}" stroke="#e0a83a" stroke-width="2"/>
 ${at(40,196,.76,cat({hat:glasses,mouth:'tongue',tail:false,armR:-100,armRcls:'bob',armsFront:true,prop:`<path d="M0,2 l14,-18" stroke="${SUN}" stroke-width="4" stroke-linecap="round"/>`}))}`;

S.sort=`${bg('#fff1c9')}${floor(184,'#ffe08a')}
 ${[[40,RED,'circle'],[100,SKY,'rect'],[160,SUN,'tri']].map(([x,c,t],i)=>`<path d="M${x-26},110 h52 l-5,50 h-42 Z" fill="#fff" stroke="#cbc2e6" stroke-width="3"/>${[0,1,2].map(k=>{const xx=x-12+k*12,yy=148-(k%2)*12;return t=='circle'?`<circle cx="${xx}" cy="${yy}" r="6" fill="${c}"/>`:t=='rect'?`<rect x="${xx-5}" y="${yy-5}" width="10" height="10" fill="${c}"/>`:`<path d="M${xx-6},${yy+5} l6,-11 6,11 Z" fill="${c}"/>`}).join('')}`).join('')}
 <g class="drop" style="animation-duration:2s"><circle cx="40" cy="70" r="6" fill="${RED}"/></g><g class="drop" style="animation-duration:2s;animation-delay:.6s"><rect x="95" y="65" width="10" height="10" fill="${SKY}"/></g>
 ${T(100,40,'type',14,VIO,'middle','glow')}
 ${at(100,206,.46,cat({eyes:'happy',tail:false,armL:140,armR:-140,armsFront:true}))}`;

S.act=`${bg('#3b2a4a')}<path d="M100,-10 L30,186 h140 Z" fill="#fff6c8" opacity=".22"/>${floor(176,'#8a5a30')}
 <path d="M0,0 h26 q-6,90 0,176 h-26 Z M200,0 h-26 q6,90 0,176 h26 Z" fill="${RED}"/>
 ${at(100,182,.94,cat(Object.assign({bow:false,hat:crown,eyes:'closed',mouth:'big',armL:60,armR:-140,armsFront:true,mid:`<path d="M-20,-52 q-30,10 -50,-6 q20,26 50,22 Z" fill="${VIO}"/>`,prop:`<g transform="translate(0,-10)"><ellipse cx="0" cy="0" rx="9" ry="11" fill="#fff"/><circle cx="-3" cy="-2" r="1.800" fill="${INK}"/><circle cx="3" cy="-2" r="1.800" fill="${INK}"/></g>`},NL)))}
 ${speech(160,50,40,28,T(160,58,'To be...',9,INK),150,76)}`;

S.knowledge=`${bg('#ece6ff')}<circle cx="100" cy="96" r="82" fill="#f6f2ff"/>${floor(184,'#d6ccf5')}
 ${[[RED,0],[SKY,1],[SUN,2],[MINT,3]].map(([c,i])=>`<rect x="${120-i*3}" y="${160-i*14}" width="60" height="12" rx="2" fill="${c}"/>`).join('')}
 <g class="beat"><g transform="translate(60,36) scale(1.2)">${P.bulb}</g></g>
 ${[[30,80,'A'],[100,30,'+'],[150,60,'?']].map(([x,y,l],i)=>`<g class="float" style="animation-delay:${i*.4}s">${T(x,y,l,18,VIO)}</g>`).join('')}
 ${sh(60,192,32)}${at(60,190,.9,cat({hat:glasses,eyes:'happy',armL:8,armR:-8,mid:openBook}))}`;

S.gun=`${park()}${sun(30,24,9)}
 <g transform="translate(110,100) scale(2.200)"><rect x="-16" y="-10" width="40" height="13" rx="4" fill="${SKY}"/><rect x="-14" y="1" width="11" height="18" rx="3" fill="#2f6fd0"/><rect x="-4" y="-20" width="16" height="11" rx="3" fill="${SUN}"/><rect x="24" y="-7" width="8" height="6" fill="${ORA}"/><path d="M-2,3 q2,7 8,5" fill="none" stroke="#2f6fd0" stroke-width="2"/></g>
 <path class="drip" d="${tear(186,90)}" fill="${SKY}"/><path d="M178,90 h14" stroke="${SKY}" stroke-width="3" stroke-dasharray="3 4" class="glow"/>
 ${T(110,40,'water',14,SKY)}
 ${at(40,198,.6,cat({eyes:'happy',mouth:'tongue',armR:-130,armsFront:true}))}${at(170,198,.44,K('orange',{eyes:'happy',mouth:'open'}))}`;

S.station=`${bg('#cdeeff')}${cloud(30,22,.6)}
 <rect x="10" y="50" width="180" height="16" rx="4" fill="${RED}"/><path d="M30,66 v70 M170,66 v70" stroke="#9aa8c0" stroke-width="5"/>
 <rect x="70" y="72" width="60" height="20" rx="3" fill="#fff"/>${T(100,87,'Station',11,INK)}
 <g class="ring">${at(160,96,.3,P.clock(28,120))}</g>
 <g class="road" style="animation-duration:5s"><g transform="translate(110,150)"><rect x="-70" y="-34" width="140" height="34" rx="8" fill="${SKY}"/><rect x="-60" y="-28" width="22" height="14" rx="2" fill="#fff"/><rect x="-30" y="-28" width="22" height="14" rx="2" fill="#fff"/><rect x="0" y="-28" width="22" height="14" rx="2" fill="#fff"/><rect x="30" y="-28" width="22" height="14" rx="2" fill="#fff"/><circle cx="-40" cy="2" r="7" fill="${INK}"/><circle cx="40" cy="2" r="7" fill="${INK}"/></g></g>
 <rect x="0" y="158" width="200" height="6" fill="#7a8aa6"/>${floor(164,'#cfd8e6')}
 ${at(40,200,.5,cat({eyes:'happy',armR:-20,prop:`<g transform="translate(0,22)">${koffer}</g>`}))}`;

S.strategy=`${room('#e6f1ff','#cfe3f7')}
 <rect x="70" y="16" width="120" height="110" rx="6" fill="#3aa568" stroke="#fff" stroke-width="4"/><path d="M130,16 v110" stroke="#fff" stroke-width="2"/><circle cx="130" cy="71" r="14" fill="none" stroke="#fff" stroke-width="2"/>
 ${[[90,40],[100,96],[116,66]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="6" fill="${RED}"/>`).join('')}${[[160,40],[170,90]].map(([x,y])=>cross(x,y,5,3).replace(new RegExp(RED,'g'),'#fff')).join('')}
 <path d="M122,66 q20,-30 40,-10" fill="none" stroke="${SUN}" stroke-width="3" stroke-dasharray="5 5" class="draw"/>${arrow(158,54,166,60,SUN,3)}
 ${sh(40,192,30)}${at(40,190,.84,cat({hat:cap,eyes:'happy',mouth:'open',armR:-128,armsFront:true,prop:`<path d="M0,2 l10,-26" stroke="#b07a45" stroke-width="3" stroke-linecap="round"/>`}))}`;

S.clearly=`${bg('#cdeeff')}${sun(160,30,10)}${hills('#8fe0a8','#6fd08f',160)}
 <g opacity=".35"><circle cx="40" cy="90" r="30" fill="#fff"/><g transform="translate(40,90) scale(2)" style="filter:blur(2px)">${P.fish}</g></g>${T(40,140,'?',18,'#9aa8c0')}
 <circle cx="140" cy="90" r="36" fill="#fff" stroke="${INK}" stroke-width="5"/><g transform="translate(140,90) scale(2.600)">${P.fish}</g><path d="M166,116 l22,22" stroke="${INK}" stroke-width="7" stroke-linecap="round"/>
 ${arrow(74,90,98,90,RED,6,'glow')}${spark(170,60,7,SUN,0)}
 ${at(100,200,.5,cat({hat:glasses,eyes:'spark',mouth:'open',armR:-140,armsFront:true}))}`;

S.discuss=`${room('#fff1c9','#e4b77a')}
 ${speech(50,40,60,36,`<g transform="translate(50,50) scale(1.400)">${P.fish}</g>${T(72,44,'?',14,RED)}`,56,74)}${speech(150,40,60,36,dots(150,50,VIO),144,74)}
 <ellipse cx="100" cy="168" rx="50" ry="12" fill="#c98a4b"/><g transform="translate(86,160) scale(.5)">${P.cup(RED)}</g><g transform="translate(116,160) scale(.5)">${P.cup(SKY)}</g>
 ${at(40,190,.7,cat({eyes:'happy',mouth:'open',mouthCls:'chew',armR:-110,armsFront:true}))}
 ${at(160,190,.7,K('orange',{eyes:'open',headCls:'tilt',armL:150,armsFront:true}))}`;

S.indeed=`${bg('#e3fbf5')}${floor(184,'#bff0de')}
 <circle cx="130" cy="80" r="44" fill="#fff" stroke="${INK}" stroke-width="5"/><g transform="translate(130,80) scale(3.200)">${P.fish}</g><path d="M100,112 l-26,26" stroke="${INK}" stroke-width="7" stroke-linecap="round"/>
 <g class="beat"><circle cx="176" cy="36" r="16" fill="${MINT}"/>${check(176,36,7,5).replace(new RegExp(MINT,'g'),'#fff')}</g>
 ${T(40,60,'Yes!',16,RED,'middle','beat')}
 ${at(50,200,.66,cat({hat:detHat,eyes:'happy',mouth:'open',armR:-120,armsFront:true}))}`;
