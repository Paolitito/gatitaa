/* Tag 123–126: media, ready, sign, thought, list · individual, simple, quality, pressure, accept · answer, resource, identify, left, meeting · determine, prepare, disease, whatever, success */
S.media=`${bg('#ece6ff')}${floor(184,'#d6ccf5')}
 <g class="float"><rect x="14" y="30" width="60" height="44" rx="6" fill="${INK}"/><rect x="19" y="35" width="50" height="34" fill="${SKY}"/><path d="M38,44 l14,8 -14,8 Z" fill="#fff"/></g>
 <g class="float" style="animation-delay:.4s"><rect x="84" y="20" width="40" height="52" fill="#fff" stroke="#cbc2e6" stroke-width="2"/>${T(104,34,'NEWS',8,INK)}<path d="M90,42 h28 M90,50 h28 M90,58 h18" stroke="#cbc2e6" stroke-width="2.500"/></g>
 <g class="float" style="animation-delay:.8s"><rect x="138" y="30" width="46" height="34" rx="6" fill="${RED}"/><circle cx="152" cy="47" r="8" fill="#fff"/><path d="M168,40 h10 M168,47 h10 M168,54 h10" stroke="#fff" stroke-width="2"/><path d="M146,30 l-8,-14" stroke="${INK}" stroke-width="2"/></g>
 <g transform="translate(160,120) scale(.6)">${P.phone}</g>
 ${sh(90,192,32)}${at(90,190,.88,cat({eyes:'wide',hat:phones,armL:140,armR:-140,armsFront:true}))}`;

S.ready=`${park(150)}${floor(160,'#e0875a')}<path d="M40,160 v40" stroke="#fff" stroke-width="5"/>
 ${at(70,190,.84,cat({eyes:'open',mouth:'wavy',mid:trikot(RED),armL:-30,armR:60,feet:'run',hat:`<rect x="-30" y="-86" width="60" height="10" rx="3" fill="${SUN}"/>`}))}
 <g class="beat"><circle cx="150" cy="50" r="28" fill="${MINT}"/><path d="M137,50 l9,9 17,-19" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></g>
 ${T(150,104,'3 · 2 · 1',15,RED,'middle','glow')}${spark(110,120,7,SUN,0)}`;

S.sign=`${park(170)}${cloud(40,24,.7)}
 <path d="M130,190 V60" stroke="#9aa8c0" stroke-width="6" stroke-linecap="round"/>
 <g class="pulse" style="transform-origin:130px 60px"><path d="M112,18 h36 l26,26 v36 l-26,26 h-36 l-26,-26 v-36 Z" fill="${RED}" stroke="#fff" stroke-width="4"/>${T(130,70,'STOP',20,'#fff')}</g>
 ${sh(50,192,30)}${at(50,190,.86,cat({eyes:'wide',mouth:'o',feet:'walk',armR:-110,armsFront:true}))}`;

S.thought=`${bg('#ece6ff')}<circle cx="80" cy="120" r="70" fill="#f6f2ff"/>${floor(184,'#d6ccf5')}
 ${think(138,52,48,34,`<g transform="translate(120,56) scale(.8)">${P.house()}</g>${heartS(150,40,.9,RED,'beat')}${fishAt(158,64,1,0)}`,-1)}
 ${sh(70,192,34)}${at(70,190,.96,cat({eyes:'closed',mouth:'w',headCls:'tilt',armR:-150,armsFront:true}))}`;

S.list=`${bg('#e6f1ff')}${floor(166,'#c98a4b')}<rect y="166" width="200" height="8" fill="#e0a868"/>
 <g transform="rotate(-4 130 90)"><rect x="92" y="14" width="80" height="150" rx="3" fill="#fff8c8" stroke="#e0a83a" stroke-width="2"/>
 ${[0,1,2,3,4].map(i=>`<circle cx="104" cy="${36+i*26}" r="5" fill="none" stroke="${INK}" stroke-width="2"/><path d="M116,${36+i*26} h46" stroke="#cbc2e6" stroke-width="4" stroke-linecap="round"/>${i<3?`<g class="twinkle" style="animation-delay:${i*.3}s">${check(104,36+i*26,4,2.500)}</g>`:''}`).join('')}
 ${fishAt(150,24,.7,0)}</g>
 ${at(46,198,.74,cat({eyes:'happy',mouth:'tongue',tail:false,armR:-84,armRcls:'bob',prop:`<path d="M0,2 l12,-16" stroke="${SUN}" stroke-width="4" stroke-linecap="round"/>`}))}`;

S.individual=`${bg('#e3fbf5')}${floor(184,'#bff0de')}
 <g opacity=".4">${[20,52,148,180].map((x,i)=>at(x,160,.4,K('grey',{}))).join('')}${[36,164].map(x=>at(x,190,.4,K('grey',{}))).join('')}</g>
 <path d="M100,-10 L50,190 h100 Z" fill="#fff6c8" opacity=".5"/>
 ${at(100,188,.84,cat({eyes:'happy',mouth:'open',armR:-125,armRcls:'wave',armsFront:true}))}
 ${ring(100,130,58,RED)}${T(160,50,'1',30,RED,'middle','beat')}`;

S.simple=`${bg('#fff1c9')}${floor(184,'#ffe08a')}
 ${panel(12,30,80,90)}${panel(108,30,80,90)}
 <path d="M24,96 q10,-50 20,-10 t16,-20 q10,40 20,-16 M30,60 q20,30 40,-10 M26,110 q30,-20 54,-4" fill="none" stroke="#9aa8c0" stroke-width="2.500"/>${cross(80,42,5,4)}
 <circle cx="148" cy="75" r="24" fill="${SUN}"/><g class="beat">${check(176,42,6,4)}</g>
 ${at(148,198,.56,cat({eyes:'happy',mouth:'w',armL:-150,armR:150,armsFront:true}))}`;

S.quality=`${bg('#ece6ff')}<circle cx="100" cy="90" r="80" fill="#f6f2ff"/>${floor(184,'#d6ccf5')}
 <g class="pulse" style="transform-origin:100px 80px"><path d="M84,110 l-12,40 28,-16 28,16 -12,-40 Z" fill="${RED}"/><circle cx="100" cy="80" r="40" fill="${SUN}" stroke="#e0a83a" stroke-width="4"/>${star5(100,80,22,'#fff')}</g>
 ${[60,80,100,120,140].map((x,i)=>`<g class="twinkle" style="animation-delay:${i*.2}s">${star5(x,26,7,SUN)}</g>`).join('')}
 ${at(40,198,.5,cat({eyes:'spark',mouth:'o',armR:-140,armsFront:true}))}${at(164,198,.4,K('orange',{eyes:'happy'}))}`;

S.pressure=`${room('#ffe9d6','#ffd9bd')}
 <path d="M80,170 q-30,-70 20,-76 q50,6 20,76 Z" fill="${RED}" class="pulse" style="transform-origin:100px 170px"/><ellipse cx="88" cy="118" rx="8" ry="12" fill="#fff" opacity=".4"/>
 <path d="M100,170 q4,10 -4,16" fill="none" stroke="${INK}" stroke-width="2"/>
 <path d="M60,90 l-14,-10 M140,90 l14,-10 M100,76 v-18" stroke="${ORA}" stroke-width="4" stroke-linecap="round" class="glow"/>
 <circle cx="160" cy="40" r="22" fill="#fff" stroke="${INK}" stroke-width="3"/><path d="M146,40 a14,14 0 0 1 28,0" fill="none" stroke="${RED}" stroke-width="4"/><path d="M160,40 l10,-10" stroke="${INK}" stroke-width="3" stroke-linecap="round" class="wiggle" style="transform-origin:160px 40px"/>
 ${at(36,196,.6,cat({eyes:'wide',mouth:'wavy',armL:150,armR:-150,armsFront:true}))}`;

S.accept=`${park()}${cloud(100,22,.7)}
 ${sh(56,192,30)}${at(56,190,.86,K('orange',{eyes:'happy',armR:-90,armsFront:true}))}
 <g class="givemove"><g transform="translate(92,150)">${bouquet}</g></g>
 ${sh(144,192,30)}${at(144,190,.86,cat({eyes:'happy',mouth:'open',armL:100,armsFront:true}))}
 <g class="beat"><circle cx="150" cy="50" r="20" fill="${MINT}"/>${T(150,57,'Yes',14,'#fff')}</g>${heart(110,100,.9,RED,0)}`;

S.answer=`${bg('#fff1c9')}
 <rect x="50" y="14" width="140" height="80" rx="6" fill="#3aa568" stroke="#b07a45" stroke-width="5"/>${T(100,64,'2 + 2 =',20,'#fff')}<g>${T(164,66,'4',30,SUN)}</g>${ring(164,56,20,RED)}
 ${floor(184,'#ffe08a')}
 ${sh(60,192,32)}${at(60,190,.9,cat({eyes:'happy',mouth:'open',armR:-155,armsFront:true}))}
 ${at(150,194,.5,K('white',{hat:glasses.replace(/#fff/g,INK),eyes:'happy'}))}<g class="beat">${check(176,130,7,5)}</g>`;

S.resource=`${bg('#cdeeff')}${sun(160,26,9)}${hills('#8fe0a8','#6fd08f',150)}
 ${[[36,'#5cc3ff',`<path d="M36,84 q-12,16 0,26 q12,-10 0,-26 Z" fill="#fff"/>`],[100,'#b07a45',`<rect x="86" y="92" width="28" height="8" rx="4" fill="#e4b77a"/><rect x="90" y="84" width="20" height="8" rx="4" fill="#e4b77a"/>`],[164,SUN,`<g transform="translate(164,96) scale(.6)">${sun(0,0,12)}</g>`]].map(([x,c,inn],i)=>`<g class="float" style="animation-delay:${i*.3}s"><circle cx="${x}" cy="96" r="26" fill="${c}"/>${inn}</g>`).join('')}
 ${T(36,140,'water',10,INK)}${T(100,140,'wood',10,INK)}${T(164,140,'sun',10,INK)}
 ${at(100,200,.5,cat({bow:false,hat:P.hatHard,eyes:'happy',armL:140,armR:-140,armsFront:true}))}`;

S.identify=`${room('#e6f1ff','#cfe3f7')}
 <rect x="20" y="30" width="160" height="90" rx="6" fill="#fff" stroke="#cbc2e6" stroke-width="2"/><path d="M20,60 h160 M20,90 h160" stroke="#e6e0f5" stroke-width="2"/>
 ${at(52,116,.36,K('grey',{tail:false}))}${at(100,116,.36,K('orange',{tail:false,mouth:'tongue'}))}${at(148,116,.36,K('cream',{tail:false}))}
 ${ring(100,90,26,RED)}${arrow(100,10,100,34,RED,5,'float')}
 ${at(50,198,.6,cat({hat:detHat,eyes:'happy',armR:-140,armsFront:true}))}${T(150,160,'That one!',13,RED,'middle','beat')}`;

S.left=`${bg('#fff1c9')}<rect width="100" height="200" fill="#ffe7a3"/>${floor(184,'#ffe08a')}
 <g class="beat">${arrow(96,50,24,50,RED,10)}</g>${T(60,90,'left',18,RED)}
 <g opacity=".35">${arrow(104,50,176,50,'#9aa8c0',8)}</g>
 ${sh(100,192,34)}${at(100,190,.92,cat({eyes:'happy',mouth:'open',armL:100,armsFront:true}))}
 ${ring(54,150,18,RED)}`;

S.meeting=`${room('#e6f1ff','#cfe3f7')}
 <rect x="130" y="16" width="56" height="40" rx="3" fill="#fff" stroke="#cbc2e6" stroke-width="2"/><path d="M138,46 l12,-12 10,6 14,-14" fill="none" stroke="${RED}" stroke-width="3"/>
 ${at(50,150,.5,K('orange',{mid:tie,tail:false,eyes:'happy'}))}${at(100,144,.5,K('grey',{mid:tie,tail:false,mouth:'open',armR:-140,armsFront:true}))}${at(150,150,.5,K('white',{mid:tie,tail:false,hat:glasses.replace(/#fff/g,INK)}))}
 <ellipse cx="100" cy="160" rx="90" ry="22" fill="#c98a4b"/><ellipse cx="100" cy="156" rx="90" ry="20" fill="#e0a868"/>
 <g transform="translate(60,152) scale(.5)">${P.cup(RED)}</g><g transform="translate(140,152) scale(.5)">${P.cup(SKY)}</g><rect x="90" y="146" width="22" height="14" fill="#fff" transform="rotate(-8 100 152)"/>
 ${at(100,206,.5,cat({mid:tie,tail:false,eyes:'happy',armL:150,armsFront:true}))}`;

S.determine=`${room('#ece6ff','#d6ccf5')}
 <path d="M130,170 V70" stroke="#b07a45" stroke-width="5"/><path d="M130,70 h-40 M130,70 h40" stroke="#b07a45" stroke-width="4" class="tilt" style="transform-origin:130px 70px"/>
 <path d="M76,110 h28 M156,110 h28" stroke="#b07a45" stroke-width="3"/><path d="M90,70 l-12,40 M90,70 l12,40 M170,70 l-12,40 M170,70 l12,40" stroke="${INK}" stroke-width="1.500"/>
 ${fishAt(90,104,1,0)}<g transform="translate(170,104) scale(.5)">${P.ball(RED)}</g><rect x="112" y="170" width="36" height="8" rx="3" fill="#8a5a30"/>
 <g class="beat"><circle cx="150" cy="30" r="16" fill="${MINT}"/>${check(150,30,7,5).replace(new RegExp(MINT,'g'),'#fff')}</g>
 ${at(46,192,.84,cat({hat:glasses,mid:tie,eyes:'open',mouth:'w',armR:-128,armsFront:true}))}`;

S.prepare=`${room('#fff1c9','#e4b77a')}${papel(12,10,190)}
 ${at(120,186,1.2,P.table(120))}<path d="M56,124 h140 v12 h-140 Z" fill="#c98a4b"/>
 ${taco(90,116,1)}${taco(124,116,1)}<g opacity=".5">${taco(158,116,1)}</g>
 <path d="M176,100 h16 q0,14 -8,14 q-8,0 -8,-14 Z" fill="${RED}"/><ellipse cx="184" cy="100" rx="8" ry="2.500" fill="#3aa568"/>
 ${sh(40,192,28)}${at(40,190,.84,cat({bow:false,hat:P.hatChef,eyes:'happy',mouth:'tongue',armR:-90,armRcls:'bob',armsFront:true,mid:`<path d="M-18,-44 h36 v36 h-36 Z" fill="#fff" opacity=".9"/>`}))}
 ${T(150,70,'mmm',14,RED,'middle','glow')}`;

S.disease=`${room('#e3fbf5','#bff0de',170)}
 <g transform="translate(120,186) scale(1.5)">${P.bed}</g>
 ${at(84,164,.56,K('orange',{tail:false,eyes:'closed',mouth:'wavy',hat:`<rect x="-24" y="-112" width="48" height="12" rx="5" fill="#bfe9ff"/>`}))}<path d="M92,150 q40,-22 100,0 v24 h-100 Z" fill="${SKY}"/>
 ${thermo(160,60,.8,RED)}
 <g class="float"><circle cx="40" cy="50" r="12" fill="#b9e08a"/>${[0,60,120,180,240,300].map(a=>`<path transform="rotate(${a} 40 50)" d="M40,38 v-7" stroke="#8fc45a" stroke-width="3" stroke-linecap="round"/>`).join('')}<circle cx="36" cy="48" r="1.500" fill="${INK}"/><circle cx="44" cy="48" r="1.500" fill="${INK}"/></g>${cross(40,50,16,4)}
 ${at(30,194,.6,cat({mid:kittel,eyes:'happy',armR:-96,armsFront:true,prop:`<g transform="translate(4,4)"><path d="M-10,-4 h20 q0,10 -10,10 q-10,0 -10,-10 Z" fill="${RED}"/><ellipse cx="0" cy="-4" rx="10" ry="2.500" fill="#ffd98a"/></g>`}))}`;

S.whatever=`${bg('#fff1c9')}${floor(150,MINT)}<rect y="150" width="200" height="8" fill="#9be6d8"/>
 ${fishAt(36,140,1.600,0)}${taco(86,140,1.100)}<g transform="translate(130,144) scale(.9)">${P.cup(SKY)}</g><circle cx="172" cy="134" r="12" fill="${RED}"/><path d="M172,122 q3,-7 8,-7" stroke="#3aa568" stroke-width="2.500" fill="none"/>
 ${[36,86,130,172].map((x,i)=>`<g class="twinkle" style="animation-delay:${i*.3}s">${check(x,100,6,4)}</g>`).join('')}
 <path d="M14,160 h172" stroke="${RED}" stroke-width="3" stroke-dasharray="7 7" class="glow"/>
 ${at(100,206,.56,cat({eyes:'happy',mouth:'tongue',tail:false,armL:140,armR:-140,armsFront:true}))}`;

S.success=`${bg('#fff3cf')}${burst(30,40,RED,0)}${burst(170,40,VIO,.5)}${burst(100,24,MINT,1)}
 <path d="M10,200 L100,110 L190,200 Z" fill="#9aa8c0"/><path d="M100,110 l-16,16 10,-2 6,8 8,-8 8,2 Z" fill="#fff"/>
 ${at(100,120,.6,cat({eyes:'happy',mouth:'big',armL:150,armR:-150,armsFront:true,prop:`<g transform="translate(0,-14)"><path d="M-10,-12 h20 q0,16 -10,16 q-10,0 -10,-16 Z" fill="${SUN}" stroke="#e0a83a" stroke-width="1.500"/><rect x="-3" y="4" width="6" height="6" fill="#e0a83a"/><rect x="-8" y="10" width="16" height="4" fill="#e0a83a"/></g>`}),'hop')}
 ${[0,1,2,3,4,5].map(i=>`<rect class="conf" style="animation-delay:${i*.3}s" x="${24+i*30}" y="60" width="6" height="10" fill="${[RED,SUN,MINT,SKY,VIO,ORA][i]}"/>`).join('')}`;
