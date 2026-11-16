/* Tag 151–155: contain, peace, pain, apply, measure · wide, shake, interview, manage, particular · camera, structure, politics, perform, bit · weight, suddenly, discover, candidate, production · treat, trip, evening, affect, inside */
const pyramide=(x,y,s)=>`<g transform="translate(${x},${y}) scale(${s})">${[0,1,2,3].map(i=>`<rect x="${-40+i*9}" y="${-12-i*12}" width="${80-i*18}" height="12" fill="${i%2?'#e4c58a':'#d9a56a'}"/>`).join('')}<rect x="-6" y="-60" width="12" height="12" fill="#c98a4b"/><path d="M-5,0 v-48 h10 v48" fill="#b07a45" opacity=".6"/></g>`;
S.contain=`${bg('#e3fbf5')}${floor(170,MINT)}<rect y="170" width="200" height="8" fill="#9be6d8"/>
 <path d="M70,60 h80 v100 q0,10 -10,10 h-60 q-10,0 -10,-10 Z" fill="#fff" opacity=".7" stroke="#cbc2e6" stroke-width="3"/><rect x="64" y="50" width="92" height="14" rx="5" fill="${RED}"/>
 ${[[90,150],[112,152],[132,148],[100,132],[124,130],[110,112]].map(([x,y],i)=>keks(x,y,10)).join('')}
 ${lbl(176,100,136,120)}${T(176,90,'6',16,RED)}
 ${at(30,206,.56,cat({eyes:'spark',mouth:'tongue',tail:false,armR:-130,armsFront:true}))}`;

S.peace=`${bg('#cdeeff')}${sun(160,30,10)}${cloud(40,30,.8)}${hills('#8fe0a8','#6fd08f',160)}
 <g class="float"><g transform="translate(100,50)"><ellipse cx="0" cy="0" rx="16" ry="11" fill="#fff"/><circle cx="14" cy="-7" r="8" fill="#fff"/><path d="M21,-7 l8,2 -8,3 Z" fill="${ORA}"/><circle cx="16" cy="-9" r="1.600" fill="${INK}"/><g class="flap"><path d="M-2,-2 q-16,-22 -26,-2 Z" fill="#eaf2ff"/></g><path d="M24,-2 q10,4 14,-4" fill="none" stroke="#3aa568" stroke-width="2.500"/><ellipse cx="38" cy="-8" rx="4" ry="2" fill="#4fc27f"/></g></g>
 ${sh(70,190,28)}${at(70,188,.8,cat({eyes:'closed',mouth:'w',armR:-70}))}${sh(126,190,28)}${at(126,188,.8,K('orange',{eyes:'closed',mouth:'w',armL:70}))}
 ${heart(98,110,1,RED,0)}`;

S.pain=`${room('#ffe9d6','#ffd9bd')}
 <rect x="130" y="130" width="50" height="50" rx="4" fill="#b07a45"/>
 ${burst(112,170,RED,0)}
 ${sh(70,192,34)}${at(70,190,.94,cat({eyes:'closed',mouth:'o',armL:150,armR:-150,armsFront:true,feet:'walk'}),'hop')}
 <g transform="translate(100,180) rotate(-20)"><rect x="-10" y="-4" width="20" height="8" rx="4" fill="#f3d9a4"/><rect x="-3" y="-4" width="6" height="8" fill="#fff8e6"/></g>
 ${T(120,60,'Ouch!',18,RED,'middle','beat')}<path class="sweat" d="${tear(36,104)}" fill="${SKY}"/>`;

S.apply=`${room('#e6f1ff','#cfe3f7')}
 <rect x="110" y="80" width="80" height="100" rx="4" fill="#8a5a30"/><rect x="104" y="74" width="92" height="12" rx="3" fill="#b07a45"/>
 ${at(150,78,.5,K('grey',{mid:tie,tail:false,hat:glasses.replace(/#fff/g,INK),eyes:'happy'}))}<rect x="110" y="74" width="80" height="12" fill="#b07a45"/>${T(150,130,'JOBS',14,SUN)}
 <g class="givemove"><g transform="translate(92,110) rotate(-8)"><rect x="-12" y="-16" width="24" height="32" rx="2" fill="#fff" stroke="#cbc2e6" stroke-width="1.500"/><circle cx="0" cy="-6" r="5" fill="${INK}"/><path d="M-7,5 h14 M-7,10 h10" stroke="#cbc2e6" stroke-width="2"/></g></g>
 ${sh(46,192,30)}${at(46,190,.86,cat({mid:tie,eyes:'happy',mouth:'open',armR:-96,armsFront:true}))}`;

S.measure=`${room('#fff1c9','#e4b77a')}
 <rect x="150" y="20" width="16" height="158" fill="${SUN}" stroke="#e0a83a" stroke-width="2"/>${[0,1,2,3,4,5,6,7].map(i=>`<path d="M150,${34+i*18} h${i%2?6:10}" stroke="${INK}" stroke-width="2"/>`).join('')}
 ${at(100,178,.7,K('orange',{eyes:'happy',armL:20,armR:-20}))}
 <path d="M70,96 h80" stroke="${RED}" stroke-width="3" stroke-dasharray="6 6"/><g class="beat">${T(176,100,'40',14,RED)}</g>
 ${at(36,192,.6,cat({hat:glasses,eyes:'happy',armR:-140,armRcls:'bob',armsFront:true}))}`;

S.wide=`${bg('#cdeeff')}${cloud(40,24,.7)}${hills('#8fe0a8','#6fd08f',120)}
 <path d="M0,140 q100,-20 200,0 v60 h-200 Z" fill="#5cc3ff"/><path class="ripple" d="M40,170 q10,-6 20,0 M130,180 q10,-6 20,0" fill="none" stroke="#fff" stroke-width="2"/>
 <g class="glow"><path d="M14,110 h172" stroke="${RED}" stroke-width="5" stroke-linecap="round"/><path d="M14,110 l12,-8 M14,110 l12,8 M186,110 l-12,-8 M186,110 l-12,8" stroke="${RED}" stroke-width="5" stroke-linecap="round"/></g>
 ${at(22,150,.36,cat({eyes:'wide',tail:false}))}${at(180,150,.3,K('orange',{tail:false,armL:125,armLcls:'wave',armsFront:true}))}`;

S.shake=`${room('#fff1c9','#e4b77a')}
 <path d="M130,60 q-8,8 0,16 M170,60 q8,8 0,16 M124,100 q-8,8 0,16 M176,100 q8,8 0,16" fill="none" stroke="${VIO}" stroke-width="3" stroke-linecap="round" class="glow"/>
 ${sh(70,192,34)}${at(70,190,.94,cat({eyes:'closed',mouth:'big',armR:-110,armRcls:'throwarm',armsFront:true,prop:`<g transform="translate(6,-14)"><rect x="-10" y="-22" width="20" height="34" rx="6" fill="${SKY}"/><rect x="-7" y="-28" width="14" height="8" rx="2" fill="#9aa8c0"/><circle cx="0" cy="-4" r="4" fill="#fff"/></g>`}),'shiver')}
 ${note(150,140,RED,0)}${T(150,40,'shake!',14,RED,'middle','beat')}`;

S.interview=`${room('#e6f1ff','#cfe3f7')}
 ${speech(60,40,50,34,T(60,54,'?',22,RED),64,72)}${speech(146,40,56,34,dots(146,50,VIO),140,72)}
 ${at(46,190,.76,K('grey',{mid:tie,eyes:'open',mouth:'open',armR:-90,armsFront:true,prop:`<rect x="-3" y="-18" width="6" height="18" rx="2" fill="#9aa8c0"/><circle cx="0" cy="-22" r="6" fill="${INK}"/>`}))}
 ${at(150,190,.8,cat({eyes:'happy',mouth:'open',mouthCls:'chew',armL:120,armsFront:true}))}
 <rect x="86" y="150" width="28" height="20" rx="3" fill="${INK}"/><circle cx="100" cy="160" r="6" fill="${SKY}"/><circle class="glow" cx="110" cy="154" r="2.500" fill="${RED}"/>`;

S.manage=`${bg('#fff3cf')}${floor(184,'#ffe08a')}
 ${sh(100,192,36)}${at(100,190,.96,cat({eyes:'happy',mouth:'tongue',armL:150,armR:-150,armsFront:true}))}
 <g class="spin" style="animation-duration:3s;transform-origin:36px 76px">${P.plate(26).replace('<','<g transform="translate(36,76)"><')}</g></g>
 <g class="spin" style="animation-duration:3s;transform-origin:164px 76px">${P.plate(26).replace('<','<g transform="translate(164,76)"><')}</g></g>
 <path d="M36,80 v20 M164,80 v20" stroke="#b07a45" stroke-width="3"/>
 <g class="beat">${check(100,36,10,6)}</g>${spark(60,40,7,SUN,0)}${spark(140,40,7,SUN,.5)}`;

S.particular=`${bg('#ece6ff')}${floor(184,'#d6ccf5')}
 ${[30,64,98,132,166].map((x,i)=>`<circle cx="${x}" cy="80" r="14" fill="${i==3?RED:'#cbc2e6'}"/>`).join('')}
 ${ring(132,80,22,RED)}${arrow(132,24,132,50,RED,6,'float')}${T(132,126,'this one',12,RED,'middle','beat')}
 ${at(60,200,.6,cat({hat:glasses,eyes:'happy',armR:-130,armsFront:true}))}`;

S.camera=`${bg('#fff1c9')}<circle cx="110" cy="96" r="78" fill="#ffe7a3"/>${floor(184,'#ffe08a')}
 <g class="pulse" style="transform-origin:110px 96px"><rect x="54" y="60" width="112" height="76" rx="12" fill="${INK}"/><rect x="74" y="48" width="34" height="16" rx="5" fill="${INK}"/><circle cx="110" cy="98" r="28" fill="#5a4a6c"/><circle cx="110" cy="98" r="20" fill="${SKY}"/><circle cx="104" cy="92" r="6" fill="#fff" opacity=".7"/><rect x="140" y="68" width="16" height="10" rx="3" fill="${SUN}"/><circle cx="68" cy="72" r="4" fill="${RED}"/></g>
 <g class="twinkle">${spark(160,50,14,'#fff',0)}</g>${T(40,40,'click!',14,RED,'middle','beat')}
 ${at(30,200,.5,cat({eyes:'happy',mouth:'open',armR:-125,armRcls:'wave',armsFront:true}))}`;

S.structure=`${bg('#cdeeff')}${cloud(30,24,.7)}${floor(180,'#8fe0a8')}
 <path d="M50,180 L100,30 L150,180" fill="none" stroke="#7a8aa6" stroke-width="6" stroke-linejoin="round"/><path d="M62,144 h76 M74,108 h52 M86,72 h28 M62,144 l64,-36 M138,144 l-64,-36 M74,108 l40,-36 M126,108 l-40,-36" stroke="#9aa8c0" stroke-width="3"/>
 ${[[100,30],[62,144],[138,144],[74,108],[126,108]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="5" fill="${RED}"/>`).join('')}
 ${at(170,200,.5,cat({bow:false,hat:P.hatHard,eyes:'happy',armL:140,armsFront:true}))}`;

S.politics=`${room('#e6f1ff','#cfe3f7')}
 <path d="M10,150 q90,-40 180,0 v30 h-180 Z" fill="#8a5a30"/><path d="M30,130 q70,-28 140,0" fill="none" stroke="#b07a45" stroke-width="8"/>
 ${at(50,128,.36,K('orange',{mid:tie,tail:false,armR:-155,armsFront:true}))}${at(100,116,.36,K('grey',{mid:tie,tail:false}))}${at(150,128,.36,K('cream',{mid:tie,tail:false,armL:155,armsFront:true}))}
 <path d="M100,60 V20" stroke="#b07a45" stroke-width="3"/><g class="flower" style="transform-origin:100px 28px"><rect x="101" y="20" width="10" height="18" fill="#1f9c5a"/><rect x="111" y="20" width="10" height="18" fill="#fff"/><circle cx="116" cy="29" r="2.500" fill="#b07a45"/><rect x="121" y="20" width="10" height="18" fill="${RED}"/></g>
 ${pult(100,RED)}
 ${speech(160,50,40,26,T(160,58,'vote!',10,RED),150,74)}`;

S.perform=`${bg('#3b2a4a')}<path d="M100,-10 L30,186 h140 Z" fill="#fff6c8" opacity=".22"/>${floor(176,'#8a5a30')}${papel(6,30,170)}
 <path d="M0,0 h26 q-6,90 0,176 h-26 Z M200,0 h-26 q6,90 0,176 h26 Z" fill="${RED}"/>
 <g class="dance">${at(100,182,.9,cat(Object.assign({eyes:'closed',mouth:'big',armL:150,armR:-150,armsFront:true,mid:`<path d="M-30,-10 q30,26 60,0 l8,16 q-38,22 -76,0 Z" fill="${RED}"/><path d="M-32,2 q32,22 64,0" fill="none" stroke="${SUN}" stroke-width="3"/>`},NL)))}</g>
 ${note(50,80,SUN,0)}${note(150,70,MINT,.7)}<g class="rise">${flower(60,190,RED,0)}</g>`;

S.bit=`${bg('#fff1c9')}${floor(160,MINT)}<rect y="160" width="200" height="8" fill="#9be6d8"/>
 <g opacity=".5"><ellipse cx="60" cy="150" rx="40" ry="10" fill="#fff"/><path d="M28,150 v-24 a32,9 0 0 1 64,0 v24 a32,9 0 0 1 -64,0" fill="#ffd98a"/><ellipse cx="60" cy="126" rx="32" ry="9" fill="#fff8e6"/></g>
 <g class="hop"><path d="M140,150 l14,-8 v10 Z" fill="#ffd98a" stroke="#e0a83a" stroke-width="1.500"/><circle cx="148" cy="142" r="2.500" fill="${RED}"/></g>
 ${ring(146,146,20,RED)}${arrow(180,100,160,130,RED,5,'float')}${T(150,90,'a bit',13,RED,'middle','beat')}
 ${at(100,206,.5,cat({eyes:'wide',mouth:'wavy',tail:false,armR:-130,armsFront:true}))}`;

S.weight=`${room('#e3fbf5','#bff0de')}
 <rect x="80" y="130" width="100" height="14" rx="6" fill="#9aa8c0"/><rect x="96" y="144" width="68" height="34" rx="6" fill="#7a8aa6"/><circle cx="130" cy="162" r="13" fill="#fff" stroke="${INK}" stroke-width="3"/><path d="M130,162 l7,-9" stroke="${RED}" stroke-width="3" stroke-linecap="round" class="wiggle" style="transform-origin:130px 162px"/>
 ${at(130,130,.6,cat({eyes:'wide',mouth:'o',armL:20,armR:-20,tail:true}))}
 ${T(40,70,'4 kg',18,RED,'middle','beat')}
 <g transform="translate(40,170) scale(.8)">${hantel}</g>`;

S.suddenly=`${bg('#cdeeff')}
 <g class="cloud"><ellipse cx="110" cy="30" rx="60" ry="18" fill="#7a8aa6"/><ellipse cx="80" cy="24" rx="30" ry="16" fill="#9aa8c0"/></g>
 ${[60,90,120,150].map((x,i)=>`<path class="drop" style="animation-delay:${i*.2}s" d="M${x},50 l-6,16" stroke="${SKY}" stroke-width="3" stroke-linecap="round"/>`).join('')}
 <g class="beat">${blitz(150,70,1.300,SUN)}</g>${hills('#8fe0a8','#6fd08f',166)}
 ${sh(80,192,32)}${at(80,190,.9,cat({eyes:'wide',mouth:'o',armL:150,armR:-150,armsFront:true}),'hop')}
 ${T(30,60,'!',34,RED,'middle','beat')}`;

S.discover=`${park(160)}${sun(160,26,9)}${kaktus(180,170,.6)}
 <path d="M80,186 q30,-30 70,0 Z" fill="#b07a45"/><path d="M100,176 h40 v-18 h-40 Z" fill="#c98a4b" stroke="#8a5a30" stroke-width="2"/><path d="M100,158 q20,-22 40,0 Z" fill="${SUN}" stroke="#e0a83a" stroke-width="2" class="lid" style="transform-origin:100px 158px;transform-box:view-box"/>
 ${spark(120,140,10,SUN,0)}${spark(146,130,7,'#fff',.4)}${coin(112,170,5)}${coin(126,172,5)}
 ${sh(46,192,30)}${at(46,190,.86,cat({hat:detHat,eyes:'spark',mouth:'o',armR:-110,armsFront:true,armL:40,propL:`<path d="M0,10 v-34" stroke="#b07a45" stroke-width="3"/><path d="M-8,-24 h16 l-3,-14 h-10 Z" fill="#9aa8c0"/>`}))}`;

S.candidate=`${room('#e6f1ff','#cfe3f7')}
 ${[[36,'orange',SKY],[100,null,RED],[164,'grey',SUN]].map(([x,n,c],i)=>`<rect x="${x-26}" y="20" width="52" height="60" rx="4" fill="#fff" stroke="${c}" stroke-width="3"/>${at(x,76,.3,n?K(n,{tail:false,mid:tie}):cat({tail:false,mid:tie,eyes:'happy'}))}${T(x,96,String(i+1),12,c)}`).join('')}
 ${ring(100,54,40,RED)}
 ${sh(100,192,32)}${at(100,190,.84,cat({mid:tie,eyes:'happy',mouth:'open',armL:130,armR:-130,armsFront:true}))}
 ${T(160,150,'Vote 2',12,RED,'middle','beat')}`;

S.production=`${room('#e3fbf5','#bff0de',170)}
 <rect x="0" y="150" width="200" height="14" rx="4" fill="#5a4a6c"/><g class="road" style="animation-duration:1.200s"><path d="M-40,157 h320" stroke="#9aa8c0" stroke-width="4" stroke-dasharray="6 14"/></g>
 ${[30,80,130,180].map((x,i)=>`<rect x="${x-12}" y="126" width="24" height="24" rx="3" fill="${[RED,SUN,MINT,SKY][i]}"/>`).join('')}
 <path d="M60,40 h80 v30 h-80 Z" fill="#9aa8c0"/><path d="M100,70 v30" stroke="#7a8aa6" stroke-width="6" class="hop"/>${gear(80,54,10,SUN,4)}${gear(120,54,10,RED,4,true)}
 ${T(170,40,'×100',14,RED,'middle','beat')}
 ${at(30,206,.4,cat({bow:false,hat:P.hatHard,eyes:'happy',tail:false}))}`;

S.treat=`${park()}${sun(30,24,9)}
 ${sh(60,192,32)}${at(60,190,.88,cat({eyes:'happy',mouth:'open',armR:-90,armsFront:true,prop:`<g transform="translate(4,-4)"><path d="M-8,0 l8,22 8,-22 Z" fill="#e4b77a"/><circle cx="0" cy="-6" r="9" fill="${SUN}"/><circle cx="-4" cy="-13" r="6" fill="#fff8e6"/><circle cx="2" cy="-18" r="2.500" fill="${RED}"/></g>`}))}
 ${sh(146,192,26)}${at(146,190,.7,K('cream',{eyes:'spark',mouth:'tongue',armL:120,armR:-120,armsFront:true}),'hop')}
 ${heart(104,100,1,RED,0)}${T(146,90,'yum!',13,RED,'middle','beat')}`;

S.trip=`${bg('#cdeeff')}${sun(160,26,9)}${cloud(30,50,.6)}
 <g class="float"><path d="M40,40 l60,-12 8,8 -44,18 -6,18 -10,-16 -14,2 Z" fill="#fff" stroke="#cbc2e6" stroke-width="2"/></g>
 <path d="M0,160 h200 v40 h-200 Z" fill="#f3d9a4"/>${pyramide(150,160,1)}${kaktus(100,162,.6)}
 <path d="M20,120 q40,-40 90,-20" fill="none" stroke="${RED}" stroke-width="3" stroke-dasharray="6 7"/>${pin(150,90)}
 ${at(40,198,.66,cat({eyes:'happy',mouth:'open',hat:sombrero,bow:false,armR:-20,armL:125,armLcls:'wave',armsFront:true,prop:`<g transform="translate(0,22)">${koffer}</g>`}))}`;

S.evening=`${bg('#ffb37a')}<rect width="200" height="60" fill="#ff9a5a"/><circle cx="100" cy="130" r="34" fill="${SUN}"/>
 <path d="M0,130 h200 v70 h-200 Z" fill="#5a4a6c"/><path d="M70,140 h60 M80,152 h40 M90,164 h20" stroke="${SUN}" stroke-width="4" stroke-linecap="round" opacity=".7" class="glow"/>
 ${spark(30,30,4,'#fff',0)}${spark(170,40,4,'#fff',.6)}
 <rect x="20" y="150" width="70" height="7" rx="3" fill="#3a3148"/><rect x="28" y="157" width="6" height="30" fill="#3a3148"/><rect x="76" y="157" width="6" height="30" fill="#3a3148"/>
 ${at(54,152,.56,cat(Object.assign({eyes:'closed',mouth:'w',headCls:'tilt'},NL)))}${T(150,30,'7 pm',13,'#fff')}`;

S.affect=`${bg('#e3fbf5')}${floor(184,'#bff0de')}
 <g transform="translate(40,70) scale(.9)">${sun(0,0,16)}</g>
 <path d="M64,84 q30,10 50,40" fill="none" stroke="${SUN}" stroke-width="4" stroke-dasharray="6 7" class="glow"/>${arrow(108,116,118,128,SUN,5)}
 <g class="grow" style="transform-origin:140px 184px;transform-box:view-box">${sprout(140,184,60,true)}</g>
 <path d="M124,184 h32 l-4,-14 h-24 Z" fill="${ORA}"/>
 ${at(60,200,.5,cat({hat:glasses,eyes:'happy',armR:-110,armsFront:true}))}${T(100,60,'→',22,RED,'middle','beat')}`;

S.inside=`${bg('#cdeeff')}${cloud(40,24,.7)}${hills('#8fe0a8','#6fd08f',166)}
 <rect x="40" y="70" width="130" height="110" rx="4" fill="#fff8e6"/><path d="M30,70 h150 l-14,-34 h-122 Z" fill="${RED}"/>
 <rect x="74" y="92" width="62" height="56" rx="4" fill="#ffe89a" stroke="#fff" stroke-width="5"/><clipPath id="ins"><rect x="76" y="94" width="58" height="52"/></clipPath><g clip-path="url(#ins)">${at(105,156,.5,cat({tail:false,eyes:'happy',armR:-125,armRcls:'wave',armsFront:true}))}</g>
 ${[20,180].map((x,i)=>`<path class="drop" style="animation-delay:${i*.3}s" d="M${x},40 l-5,14" stroke="${SKY}" stroke-width="3" stroke-linecap="round"/>`).join('')}
 ${arrow(20,120,62,120,RED,6,'glow')}`;
