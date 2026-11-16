/* Tag 79–82: experience, behind, reach, local, kill · remain, effect, yeah, suggest, class · control, raise, care, perhaps, late · hard, field, else, pass, former */
const abz=(x,y,c,inner)=>`<circle cx="${x}" cy="${y}" r="11" fill="${c}" stroke="#fff" stroke-width="2"/>${inner}`;
S.experience=`${park(170)}${sun(170,28,10)}
 <path d="M10,150 l30,-50 30,50 Z" fill="#9aa8c0"/><path d="M40,100 l-10,17 8,-4 6,6 6,-8 Z" fill="#fff"/>
 ${sh(110,192,38)}${at(110,190,1.02,cat({eyes:'happy',mouth:'open',armR:-125,armRcls:'wave',armsFront:true,mid:`<path d="M-24,-50 L22,-6 l6,-8 L-18,-56 Z" fill="${SKY}"/>${abz(-12,-42,SUN,'')}${abz(2,-28,MINT,'')}${abz(16,-14,RED,'')}`}))}
 <g class="float">${star5(40,50,9,SUN)}</g><g class="float" style="animation-delay:.5s">${star5(70,34,7,SUN)}</g>
 <g transform="translate(170,186)">${koffer}</g>`;

S.behind=`${bg('#fff1c9')}${floor(180,'#ffe08a')}${sh(110,188,52)}
 ${at(86,160,.9,cat({eyes:'happy',armR:-125,armRcls:'wave',armsFront:true}),'peek')}
 ${at(124,186,1,P.boxClosed(96,84))}
 ${arcArrow(180,50,130,96,8,RED,5,'','float')}`;

S.reach=`${bg('#4a4496')}${spark(24,40,4,'#fff',0)}${spark(60,80,3.500,'#fff',.7)}${spark(180,130,4,'#fff',1.2)}
 <path d="M0,176 q50,-18 100,0 t100,0 v24 h-200 Z" fill="#373278"/>
 <path d="M96,196 L116,60 M144,196 L130,60" stroke="#b07a45" stroke-width="6" stroke-linecap="round"/><path d="M100,170 h42 M104,140 h36 M108,110 h30 M112,80 h24" stroke="#c98a4b" stroke-width="5" stroke-linecap="round"/>
 <g class="beat">${star5(124,28,18,SUN,`stroke="${SUN}" stroke-width="4"`)}</g>
 ${at(122,112,.56,cat(Object.assign({armR:-166,armRcls:'bob',armL:150,armsFront:true,eyes:'spark',mouth:'tongue'},NL)))}`;

S.local=`${park(176)}${cloud(30,24,.7)}
 <g transform="translate(34,170) scale(.5)">${P.house(SKY)}</g><g transform="translate(170,170) scale(.5)">${P.house(VIO,'#ffe2b8')}</g>
 <rect x="66" y="96" width="72" height="80" rx="4" fill="#fff8e6"/><path d="M60,96 h84 l-8,-22 h-68 Z" fill="${MINT}"/><path d="M80,74 v22 M100,74 v22 M120,74 v22" stroke="#fff" stroke-width="4"/>
 <rect x="76" y="110" width="52" height="30" rx="3" fill="#bfe9ff"/><ellipse cx="94" cy="130" rx="10" ry="6" fill="#e4b77a"/><ellipse cx="112" cy="130" rx="10" ry="6" fill="#e4b77a"/><rect x="92" y="146" width="20" height="30" rx="3" fill="#b07a45"/>
 ${pin(102,60)}
 <ellipse cx="102" cy="178" rx="92" ry="16" fill="none" stroke="${RED}" stroke-width="3" stroke-dasharray="8 8"/>
 ${at(50,196,.46,cat({eyes:'happy',armR:-110,armRcls:'bob'}))}`;

S.kill=`${room('#e3fbf5','#bff0de')}
 <g class="flutter" style="animation-duration:2s"><g transform="translate(140,60)"><ellipse cx="0" cy="0" rx="6" ry="3" fill="${INK}"/><g class="flap"><path d="M-2,-2 q-8,-10 -12,-2 Z M2,-2 q8,-10 12,-2 Z" fill="#bfe9ff"/></g><path d="M6,0 l8,2" stroke="${INK}" stroke-width="1.200"/></g></g>
 <path d="M110,40 q10,-10 20,0 M160,90 q10,-6 16,4" fill="none" stroke="#9aa8c0" stroke-width="2" stroke-dasharray="3 5"/>
 ${sh(64,192,34)}${at(64,190,.96,cat({eyes:'open',mouth:'wavy',armR:-120,armRcls:'throwarm',armsFront:true,prop:`<path d="M0,2 v-30" stroke="#b07a45" stroke-width="3" stroke-linecap="round"/><rect x="-12" y="-52" width="24" height="24" rx="4" fill="${MINT}" opacity=".9"/><path d="M-6,-52 v24 M0,-52 v24 M6,-52 v24 M-12,-44 h24 M-12,-36 h24" stroke="#fff" stroke-width="1"/>`}))}
 ${T(150,130,'bzz',16,VIO,'middle','glow')}`;

S.remain=`${room('#fff3cf','#e4b77a')}
 <path d="M10,26 q90,26 180,0" fill="none" stroke="#b07a45" stroke-width="2"/>${[[40,34,RED],[100,41,SKY],[160,34,MINT]].map(([x,y,c])=>`<path d="M${x-8},${y-4} h16 l-8,16 Z" fill="${c}" opacity=".6"/>`).join('')}
 ${at(110,186,1.2,P.table(120))}
 <g transform="translate(110,116)">${P.plate(40)}</g><path d="M96,112 l26,-10 v10 Z" fill="#fff8e6" stroke="#e0a83a" stroke-width="1.500"/><path d="M96,112 l26,-10" stroke="${RED}" stroke-width="4" stroke-linecap="round"/>${ring(110,106,26,RED)}
 <g opacity=".3">${at(30,150,.4,K('orange',{tail:false}))}${at(186,150,.4,K('grey',{tail:false}))}</g>
 ${at(110,196,.5,cat({eyes:'spark',mouth:'tongue',armL:150,armR:-150,armsFront:true}))}`;

S.effect=`${bg('#ece6ff')}${floor(170,'#c98a4b')}<rect y="170" width="200" height="8" fill="#e0a868"/>
 ${[0,1,2,3,4,5].map(i=>`<g style="transform-box:fill-box;transform-origin:left bottom;animation:domino 3s ease-in ${i*.25}s infinite"><rect x="${70+i*20}" y="120" width="9" height="50" rx="2" fill="${[RED,ORA,SUN,MINT,SKY,VIO][i]}"/></g>`).join('')}
 <style>@keyframes domino{0%,10%{transform:rotate(0)}30%,90%{transform:rotate(62deg)}100%{transform:rotate(0)}}</style>
 ${arcArrow(70,96,180,96,30,RED,4,'6 8')}
 ${at(34,198,.7,cat({eyes:'happy',mouth:'tongue',armR:-84,armRcls:'bob',tail:false}))}`;

S.yeah=`${bg('#fff3cf')}${burst(30,36,RED,0)}${burst(170,36,VIO,.5)}
 ${speech(100,30,70,36,T(100,42,'Yeah!',20,RED),100,60)}
 ${floor(184,'#ffe08a')}
 ${at(62,188,.86,cat({eyes:'happy',mouth:'big',armL:30,armR:-140,armsFront:true}),'hop')}
 ${at(138,188,.86,K('orange',{eyes:'happy',mouth:'big',armL:140,armR:-30,armsFront:true}),'hop')}
 ${spark(100,96,10,SUN,0)}`;

S.suggest=`${bg('#e3fbf5')}${floor(184,'#bff0de')}
 ${speech(70,42,84,54,`<g transform="translate(52,66) scale(.8)">${P.bulb}</g>${arrow(70,44,84,44,RED,3)}<g transform="translate(100,56) scale(.9)">${P.ball(RED)}</g>`,72,86)}
 ${sh(56,192,30)}${at(56,190,.84,cat({eyes:'happy',mouth:'open',armR:-110,armRcls:'bob',armsFront:true}))}
 ${sh(150,192,30)}${at(150,190,.84,K('orange',{headCls:'tilt',armL:152,armsFront:true}))}
 ${T(176,90,'?',22,VIO,'middle','beat')}`;

S.class=`${bg('#fff1c9')}
 <rect x="50" y="12" width="100" height="56" rx="6" fill="#3aa568" stroke="#b07a45" stroke-width="5"/>${T(100,50,'1+1',22,'#fff')}
 ${floor(176,'#ffe08a')}
 ${at(100,116,.4,K('white',{hat:glasses.replace(/#fff/g,INK),tail:false}))}
 ${[[36,'orange'],[100,null],[164,'grey']].map(([x,n])=>`${n?at(x,170,.46,K(n,{tail:false,eyes:'happy'})):at(x,170,.48,cat({tail:false,armR:-155,armsFront:true,mouth:'open'}))}<rect x="${x-26}" y="158" width="52" height="10" rx="3" fill="#c98a4b"/><rect x="${x-22}" y="168" width="6" height="24" fill="#8a5a30"/><rect x="${x+16}" y="168" width="6" height="24" fill="#8a5a30"/>`).join('')}`;

S.control=`${bg('#e3fbf5')}${floor(170,'#bff0de')}
 <g class="roll" style="animation-duration:1.400s"><g transform="translate(120,172) scale(.6)">${P.car(RED)}</g><path d="M120,150 v-14" stroke="${INK}" stroke-width="2"/><circle cx="120" cy="134" r="3" fill="${RED}"/></g>
 <path d="M84,112 q10,-10 20,-4 M88,100 q14,-14 28,-6" fill="none" stroke="${VIO}" stroke-width="3" stroke-linecap="round" class="glow"/>
 ${sh(50,192,30)}${at(50,190,.88,cat({eyes:'happy',mouth:'tongue',armL:-34,armR:34,armsFront:true,mid:`<g transform="translate(0,-20)"><rect x="-18" y="-10" width="36" height="22" rx="6" fill="#5a4a6c"/><path d="M-8,-10 v-12" stroke="#9aa8c0" stroke-width="2.500"/><circle cx="-8" cy="1" r="5" fill="#9aa8c0"/><circle cx="8" cy="1" r="4" fill="${RED}"/></g>`}))}`;

S.raise=`${park()}${cloud(40,26,.7)}
 <path d="M130,186 V20" stroke="#b07a45" stroke-width="5" stroke-linecap="round"/><circle cx="130" cy="18" r="5" fill="${SUN}"/>
 <g style="animation:raiseF 3.500s ease-in-out infinite"><g class="flower" style="transform-origin:130px 110px"><rect x="132" y="96" width="46" height="30" fill="${RED}"/>${star5(155,111,8,'#fff')}</g></g>
 <style>@keyframes raiseF{0%,10%{transform:translateY(0)}80%,100%{transform:translateY(-70px)}}</style>
 <path d="M124,186 V30" stroke="#fff" stroke-width="1.500" stroke-dasharray="4 4"/>
 ${arrow(170,150,170,70,RED,6,'glow')}
 ${sh(76,192,34)}${at(76,190,.94,cat({eyes:'happy',armR:-140,armRcls:'bob',armL:-150,armsFront:true}))}`;

S.care=`${room('#ffe9d6','#ffd9bd',170)}
 <g transform="translate(120,186) scale(1.5)">${P.bed}</g>
 ${at(84,164,.56,K('orange',{tail:false,eyes:'closed',mouth:'wavy',armL:60,armR:-60}))}<path d="M92,150 q40,-22 100,0 v24 h-100 Z" fill="${SKY}"/>
 <rect x="72" y="100" width="26" height="8" rx="3" fill="#fff" stroke="#cbc2e6" stroke-width="1.400"/>
 ${sh(34,192,26)}${at(34,190,.76,cat({eyes:'happy',armR:-96,armsFront:true,prop:`<g transform="translate(6,8)"><path d="M-12,-4 h24 q0,12 -12,12 q-12,0 -12,-12 Z" fill="${RED}"/><ellipse cx="0" cy="-4" rx="12" ry="3" fill="#ffd98a"/></g>`}))}
 <circle class="smoke" cx="62" cy="130" r="4" fill="#fff"/>${heart(110,90,1,RED,0)}`;

S.perhaps=`${bg('#cdeeff')}
 <g class="cloud"><path d="M40,60 q-20,0 -16,-18 q4,-16 24,-10 q10,-18 34,-8 q20,-4 24,14 q16,6 4,22 Z" fill="#fff"/><path d="M98,40 l14,-10 v20 Z" fill="#fff"/><circle cx="52" cy="40" r="2.500" fill="#cdeeff"/></g>
 <g class="cloud" style="animation-delay:-2s"><circle cx="150" cy="80" r="16" fill="#fff"/><path d="M150,66 q-14,10 0,28 q14,-18 0,-28 Z" fill="#eaf7ff"/></g>
 ${T(120,56,'?',30,RED,'middle','beat')}
 ${hills('#8fe0a8','#6fd08f',166)}
 ${at(70,188,.8,cat({tail:false,eyes:'open',armL:150,armR:-150,armsFront:true}))}
 ${at(124,190,.5,K('orange',{eyes:'wide',headCls:'tilt'}))}`;

S.late=`${park(160)}${floor(172,'#6b7a99')}
 <g class="ring">${at(40,70,.6,P.clock(34,300))}</g><path d="M14,30 l-8,-6 M66,30 l8,-6" stroke="${RED}" stroke-width="4" stroke-linecap="round" class="glow"/>
 <g class="road" style="animation-duration:2s"><g transform="translate(170,164)"><rect x="-34" y="-34" width="68" height="34" rx="6" fill="${SUN}"/><rect x="-28" y="-28" width="14" height="12" fill="#bfe9ff"/><rect x="-8" y="-28" width="14" height="12" fill="#bfe9ff"/><rect x="12" y="-28" width="14" height="12" fill="#bfe9ff"/><circle cx="-18" cy="2" r="7" fill="${INK}"/><circle cx="18" cy="2" r="7" fill="${INK}"/></g></g>
 <circle class="puff" cx="130" cy="166" r="6" fill="#fff"/>
 <g transform="translate(70,190) rotate(9) scale(-.74,.74)"><g class="runbob">${cat({armL:0,armR:-150,armLcls:'swingA',armsFront:true,feet:'run',mouth:'big',eyes:'wide',mid:backpack})}</g></g>
 <path class="sweat" d="${tear(40,120)}" fill="${SKY}"/>`;

S.hard=`${bg('#ffe9d6')}${floor(184,'#ffd9bd')}
 <path d="M96,184 q-10,-50 30,-56 q34,-10 54,20 q14,20 2,36 Z" fill="#9aa8c0"/><path d="M120,140 q20,-6 30,6 M140,166 l14,-10" stroke="#7a8aa6" stroke-width="3" fill="none" stroke-linecap="round"/>
 ${spark(104,120,8,SUN,0)}${spark(118,104,6,ORA,.25)}
 ${sh(54,192,32)}${at(54,190,.92,cat({eyes:'closed',mouth:'big',armR:-118,armsFront:true,prop:hammer}))}
 <path class="sweat" d="${tear(24,100)}" fill="${SKY}"/><path class="sweat" style="animation-delay:.6s" d="${tear(84,96)}" fill="${SKY}"/>
 <g class="beat">${T(160,60,'!',36,RED)}</g>`;

S.field=`${bg('#cdeeff')}${sun(30,28,10)}${cloud(150,26,.8)}
 <path d="M0,110 q100,-20 200,0 v90 h-200 Z" fill="#8fe0a8"/>
 ${[0,1,2,3,4].map(i=>`<path d="M${-20+i*50},200 q${40},-60 ${30+i*4},-92" fill="none" stroke="#6fd08f" stroke-width="4"/>`).join('')}
 <path d="M0,116 h200" stroke="#b07a45" stroke-width="3"/>${[10,50,90,130,170].map(x=>`<path d="M${x},104 v22" stroke="#b07a45" stroke-width="4" stroke-linecap="round"/>`).join('')}
 ${flower(40,170,RED,0)}${flower(160,160,SUN,.5)}${flower(70,190,VIO,.9)}
 <g transform="translate(100,170) scale(-.66,.66)"><g class="runbob">${cat({armL:0,armR:0,armLcls:'swingA',armRcls:'swingB',feet:'run',eyes:'happy',mouth:'open'})}</g></g>${bfly(150,120,ORA,0)}`;

S.else=`${bg('#ece6ff')}${floor(184,'#d6ccf5')}
 ${at(140,150,1,P.boxBack(90))}${at(140,150,1,P.boxFront(90,38))}
 <g transform="translate(28,186)">${P.ball(RED)}</g><g transform="translate(58,186) scale(.7)">${P.book(SKY)}</g><g transform="translate(86,186) scale(.8)">${P.cup(MINT)}</g>
 ${T(140,110,'?',36,RED,'middle','beat')}${arrow(140,60,140,84,VIO,5,'float')}
 ${at(176,196,.5,cat({eyes:'wide',headCls:'tilt',armL:150,armsFront:true}))}`;

S.pass=`${bg('#8fe0a8')}<path d="M0,40 h200 M100,40 v160" stroke="#fff" stroke-width="2" opacity=".6"/><circle cx="100" cy="120" r="30" fill="none" stroke="#fff" stroke-width="2" opacity=".6"/>${bg('#cdeeff').replace('height="200"','height="40"')}
 ${at(40,176,.76,cat({eyes:'happy',mouth:'open',armR:-60,feet:'run'}))}
 <g transform="translate(64,176)"><g class="givemove" style="animation-duration:1.200s"><g class="givemove" style="animation-duration:1.200s"><g class="givemove" style="animation-duration:1.200s">${P.ball('#fff',INK)}</g></g></g></g>
 <path d="M70,170 h80" stroke="#fff" stroke-width="3" stroke-dasharray="4 8" stroke-linecap="round"/>${arrow(140,170,154,170,RED,4)}
 ${flipAt(170,176,.7,K('orange',{eyes:'happy',armR:-60,feet:'run'}))}`;

S.former=`${room('#ece6ff','#d6ccf5')}
 <rect x="20" y="20" width="74" height="84" rx="4" fill="#f3d9a4" stroke="#b07a45" stroke-width="5"/><g transform="translate(57,96) scale(.4)">${K('orange',{eyes:'happy',mouth:'open',armL:130,armR:-130,armsFront:true,tail:false,mid:`<circle cx="0" cy="-28" r="10" fill="${SUN}"/>`})}</g>
 <g class="glow"><path d="M140,60 q-20,-24 -40,-6" fill="none" stroke="${RED}" stroke-width="4" stroke-linecap="round"/><path d="M100,54 l-2,-13 M100,54 l13,-3" stroke="${RED}" stroke-width="4" stroke-linecap="round"/></g>
 ${sh(140,192,34)}${at(140,190,.9,K('orange',{eyes:'closed',hat:glasses.replace(/#fff/g,INK),armR:-40,prop:cane,fur:'#f0c98a',out:'#d9a56a',belly:'#fff6e6'}))}
 <g opacity=".7" transform="translate(40,184) scale(.5)"><path d="M-28,0 h56 v24 q0,30 -28,30 q-28,0 -28,-30 Z" fill="#cfc19a"/></g>`;
