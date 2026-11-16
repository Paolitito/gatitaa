/* Tag 115–118: page, enter, share, common, poor · natural, race, concern, series, significant · similar, language, usually, response, dead · rise, animal, factor, decade, article */
S.page=`${room('#ece6ff','#d6ccf5')}
 <g transform="translate(110,100)"><path d="M-70,-50 h66 v104 h-66 Z" fill="#fff" stroke="#cbc2e6" stroke-width="2"/><path d="M4,-50 h66 v104 h-66 Z" fill="#fff" stroke="#cbc2e6" stroke-width="2"/><path d="M-58,-34 h44 M-58,-20 h44 M-58,-6 h30" stroke="#cbc2e6" stroke-width="3" stroke-linecap="round"/><rect x="16" y="-36" width="42" height="34" fill="#cdeeff"/><g transform="translate(37,-18) scale(1.2)">${P.fish}</g><path d="M16,10 h42 M16,24 h30" stroke="#cbc2e6" stroke-width="3" stroke-linecap="round"/>
 ${T(-37,46,'12',10,'#9aa8c0')}${T(37,46,'13',10,RED,'middle','beat')}
 <g class="flip" style="transform-origin:0px 0px;transform-box:view-box"><path d="M4,-50 q30,-14 66,0 v104 q-36,-14 -66,0 Z" fill="#f4f1fb" stroke="#cbc2e6" stroke-width="2" opacity=".8"/></g></g>
 ${ring(147,146,14,RED)}
 ${at(34,196,.6,cat({hat:glasses,eyes:'happy',armR:-110,armsFront:true}))}`;

S.enter=`${room('#fff1c9','#e4b77a')}
 <rect x="100" y="24" width="84" height="156" rx="6" fill="#b07a45"/><rect x="108" y="32" width="68" height="148" fill="#2d2a6e"/><circle class="glow" cx="142" cy="100" r="26" fill="#ffe89a" opacity=".5"/>
 <path d="M108,32 l-30,12 v148 l30,-12 Z" fill="#c98a4b" stroke="#8a5a30" stroke-width="2"/>
 <g class="road" style="animation-duration:3s;animation-direction:reverse"><g transform="translate(60,188) scale(-.8,.8)"><g class="walkbob">${cat({eyes:'happy',feet:'walk',armL:0,armR:0,armLcls:'slowA',armRcls:'slowB'})}</g></g></g>
 ${arrow(30,60,90,60,RED,7,'glow')}${T(60,44,'in',16,RED)}`;

S.share=`${park()}${sun(30,24,9)}${papel(10,60,196)}
 ${sh(60,192,30)}${at(60,190,.86,cat({eyes:'happy',mouth:'open',armR:-84,armsFront:true,prop:taco(4,0,.9)}))}
 ${sh(144,192,30)}${at(144,190,.86,K('orange',{eyes:'spark',mouth:'open',armL:84,armsFront:true,propL:taco(-4,0,.9)}))}
 <path d="M90,150 h28" stroke="${RED}" stroke-width="3" stroke-dasharray="4 5"/>${heart(102,100,1,RED,0)}
 ${T(102,76,'½ + ½',16,VIO,'middle','glow')}`;

S.common=`${bg('#e3fbf5')}${floor(184,'#bff0de')}
 ${[30,66,102,138].map((x,i)=>at(x,150+((i%2)*8),.4,K('orange',{eyes:'happy'}))).join('')}${[48,84,120].map(x=>at(x,190,.42,K('orange',{eyes:'happy'}))).join('')}
 <g opacity=".9">${at(172,186,.5,K('white',{hat:crown,eyes:'happy'}))}</g>
 <path d="M10,104 q70,-30 140,0 v90 h-140 Z" fill="none" stroke="${RED}" stroke-width="3" stroke-dasharray="8 8" class="glow"/>
 ${T(80,90,'× 7',22,RED,'middle','beat')}${T(172,120,'× 1',14,'#9aa8c0')}`;

S.poor=`${park(170)}<g class="cloud"><ellipse cx="60" cy="30" rx="40" ry="14" fill="#b9c9dd"/></g>
 <g transform="translate(140,186)"><ellipse cx="0" cy="0" rx="30" ry="8" fill="#9aa8c0"/><path d="M-26,0 q26,-16 52,0" fill="#dfe6f2"/></g>${T(140,160,'0',20,'#9aa8c0','middle','glow')}
 ${sh(70,192,32)}${at(70,190,.9,K('grey',{eyes:'closed',mouth:'wavy',headCls:'tilt',armL:150,armR:-150,armsFront:true,mid:`<rect x="-16" y="-40" width="12" height="12" fill="${SUN}" stroke="${INK}" stroke-width="1" stroke-dasharray="2 2"/><rect x="6" y="-28" width="10" height="10" fill="${SKY}" stroke="${INK}" stroke-width="1" stroke-dasharray="2 2"/>`}))}
 <g opacity=".5">${coin(170,60,10)}</g>${cross(170,60,8,4)}
 ${at(176,196,.4,cat({eyes:'happy',armL:100,armsFront:true,propL:fishAt(0,6,1,0)}))}`;

S.natural=`${bg('#d9f7e1')}${sun(160,28,10)}
 ${hills('#8fe0a8','#6fd08f',160)}
 <path d="M60,200 q10,-60 -6,-90 M60,160 q20,-10 28,-30 M58,140 q-20,-6 -26,-26" fill="none" stroke="#3aa568" stroke-width="5" stroke-linecap="round"/><ellipse cx="90" cy="126" rx="14" ry="7" fill="#4fc27f" transform="rotate(-40 90 126)"/><ellipse cx="30" cy="110" rx="14" ry="7" fill="#4fc27f" transform="rotate(30 30 110)"/><ellipse cx="54" cy="104" rx="8" ry="16" fill="#4fc27f"/>
 <g class="beat"><circle cx="150" cy="90" r="24" fill="#fff"/><path d="M138,96 q4,-22 26,-18 q0,22 -22,22 M140,100 q8,-10 18,-16" fill="#4fc27f" stroke="#3aa568" stroke-width="2"/></g>${T(150,130,'100%',12,'#1f9c5a')}
 ${at(130,198,.6,cat({eyes:'closed',mouth:'w',headCls:'tilt',armR:-60,prop:`<circle cx="2" cy="-8" r="7" fill="${RED}"/><path d="M2,-15 q2,-5 6,-5" stroke="#3aa568" stroke-width="2" fill="none"/>`}))}`;

S.race=`${park(150)}${floor(156,'#e0875a')}<path d="M0,170 h200 M0,186 h200" stroke="#fff" stroke-width="2" opacity=".8"/>
 <path d="M176,156 V96 M196,156 V96" stroke="#9aa8c0" stroke-width="3"/><g class="flower"><rect x="176" y="96" width="20" height="20" fill="#fff"/><path d="M176,96 h10 v10 h-10 Z M186,106 h10 v10 h-10 Z" fill="${INK}"/></g>
 <g transform="translate(116,166) scale(-.5,.5)"><g class="runbob">${cat({feet:'run',armL:0,armR:0,armLcls:'swingA',armRcls:'swingB',eyes:'happy',mouth:'big',mid:trikot(RED)})}</g></g>
 <g transform="translate(76,182) scale(-.5,.5)"><g class="runbob" style="animation-delay:.1s">${K('orange',{feet:'run',armL:0,armR:0,armLcls:'swingB',armRcls:'swingA',mid:trikot(SKY)})}</g></g>
 <g transform="translate(40,198) scale(-.5,.5)"><g class="runbob" style="animation-delay:.2s">${K('grey',{feet:'run',armL:0,armR:0,armLcls:'swingA',armRcls:'swingB',mid:trikot(SUN)})}</g></g>
 ${T(116,110,'1',16,RED,'middle','beat')}`;

S.concern=`${room('#e9efe0','#d7dfc8')}
 ${think(150,50,36,28,`<path d="M134,70 q10,-24 24,-10" fill="none" stroke="${INK}" stroke-width="2"/><path d="M136,40 q14,-10 28,0 q-14,10 -28,0" fill="#b9c9dd"/><path d="M144,52 l-3,8 M152,52 l-3,8 M160,52 l-3,8" stroke="${SKY}" stroke-width="2" stroke-linecap="round"/>`,-1)}
 ${sh(70,192,34)}${at(70,190,.96,cat({eyes:'open',mouth:'wavy',armL:150,armR:-150,armsFront:true,headCls:'tilt',hat:`<path d="M-24,-88 l12,-5 M24,-88 l-12,-5" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>`}))}
 <path class="sweat" d="${tear(110,96)}" fill="${SKY}"/>${T(30,60,'?',26,VIO,'middle','beat')}
 ${at(160,196,.44,K('orange',{eyes:'happy',armL:100,armsFront:true}))}${heart(140,150,.6,RED,0)}`;

S.series=`${bg('#2d2a6e')}${floor(180,'#1f1b4d')}
 ${[0,1,2,3].map(i=>`<g style="animation-delay:${i*.3}s"><rect x="${14+i*46}" y="${40+(i%2)*6}" width="40" height="52" rx="4" fill="#fff"/><rect x="${18+i*46}" y="${44+(i%2)*6}" width="32" height="36" fill="${[RED,SUN,MINT,SKY][i]}"/>${T(34+i*46,88+(i%2)*6,String(i+1),10,INK)}<g transform="translate(${34+i*46},${76+(i%2)*6}) scale(.2)">${cat({tail:false})}</g></g>`).join('')}
 <path d="M34,104 h134" stroke="${SUN}" stroke-width="3" stroke-dasharray="5 6"/>${arrow(160,104,176,104,SUN,4)}
 ${at(100,196,.66,cat(Object.assign({eyes:'spark',mouth:'open',armL:140,armR:-140,armsFront:true},NL)))}`;

S.significant=`${bg('#fff3cf')}<circle cx="100" cy="96" r="80" fill="#ffe7a3"/>${floor(184,'#ffe08a')}
 <g opacity=".5">${[30,54,146,170].map(x=>`<circle cx="${x}" cy="150" r="8" fill="#9aa8c0"/>`).join('')}</g>
 <g class="pulse" style="transform-origin:100px 100px"><circle cx="100" cy="100" r="40" fill="${RED}"/>${T(100,116,'!',50,'#fff')}</g>
 ${spark(40,50,9,SUN,0)}${spark(160,50,9,SUN,.5)}${arrow(100,20,100,50,INK,6,'float')}
 ${at(100,202,.44,cat({eyes:'wide',mouth:'o',armL:150,armR:-150,armsFront:true}))}`;

S.similar=`${bg('#e3fbf5')}${floor(184,'#bff0de')}
 ${sh(60,190,30)}${at(60,188,.86,cat({eyes:'happy',armR:-60}))}
 ${sh(140,190,30)}${at(140,188,.86,cat({eyes:'happy',armL:60,bow:false,hat:`<g transform="translate(0,-120)"><path d="M-15,-9 L15,9 L15,-9 L-15,9 Z" fill="${SKY}"/><circle r="5" fill="#2f6fd0"/></g>`}))}
 ${T(100,70,'≈',44,VIO,'middle','beat')}
 <path d="M76,40 q24,-14 48,0" fill="none" stroke="${RED}" stroke-width="3" stroke-dasharray="5 6" class="glow"/>`;

S.language=`${park()}${cloud(100,18,.6)}
 ${speech(52,50,70,40,T(52,62,'Hello!',16,RED),56,84)}${speech(148,50,70,40,T(148,62,'¡Hola!',16,'#1f9c5a'),144,84)}
 ${T(100,60,'=',22,VIO,'middle','beat')}
 ${sh(56,192,30)}${at(56,190,.84,K('orange',{eyes:'happy',mouth:'open',mouthCls:'chew',armR:-80}))}
 ${sh(144,192,30)}${at(144,190,.84,cat({eyes:'happy',mouth:'open',mouthCls:'chew',armL:80,hat:sombrero}))}`;

S.usually=`${bg('#2d2a6e')}
 <rect x="10" y="14" width="180" height="56" rx="10" fill="#fff"/><rect x="10" y="14" width="180" height="14" rx="7" fill="${RED}"/>
 ${[0,1,2,3,4,5,6].map(i=>`<rect x="${16+i*25.200}" y="34" width="21" height="30" rx="5" fill="#f4f1fb"/>${i!=3?`<g class="twinkle" style="animation-delay:${i*.15}s">${check(26.500+i*25.200,50,6,3.500)}</g>`:''}`).join('')}
 ${floor(176,'#1f1b4d')}
 <ellipse cx="100" cy="176" rx="70" ry="16" fill="${VIO}"/><ellipse cx="100" cy="170" rx="60" ry="12" fill="#7b55d9"/>
 ${at(100,172,.8,cat(Object.assign({eyes:'closed',mouth:'w',tail:true,armL:20,armR:-20},NL)),'breathe')}
 ${T(150,110,'z z',16,'#fff','middle','zz')}${pin(40,120)}`;

S.response=`${bg('#e6f1ff')}${floor(184,'#cfe3f7')}
 <g transform="translate(10,12)"><rect width="100" height="36" rx="14" fill="#fff"/>${T(50,24,'How are you?',11,INK)}</g>
 <g><g transform="translate(90,56)"><rect width="100" height="36" rx="14" fill="${RED}"/>${T(50,24,'Fine, thanks!',11,'#fff')}</g></g>
 ${ring(140,74,58,SUN)}
 ${at(40,198,.6,K('orange',{eyes:'happy',prop:`<g transform="translate(0,-6) scale(.5)">${P.phone}</g>`,armR:-90}))}
 ${at(160,198,.66,cat({eyes:'happy',mouth:'tongue',armL:90,armsFront:true,propL:`<g transform="translate(0,-6) scale(.5)">${P.phone}</g>`}))}`;

S.dead=`${room('#e9efe0','#d7dfc8')}
 <rect x="110" y="60" width="60" height="100" rx="12" fill="${INK}"/><rect x="116" y="72" width="48" height="76" rx="4" fill="#3a3148"/>
 <rect x="126" y="100" width="26" height="14" rx="3" fill="none" stroke="#9aa8c0" stroke-width="2.500"/><rect x="152" y="104" width="4" height="6" fill="#9aa8c0"/><rect x="129" y="103" width="4" height="8" fill="${RED}" class="glow"/>
 ${T(140,134,'0%',12,RED)}${cross(180,50,7,5)}
 <path d="M60,176 q-4,-22 -16,-30" fill="none" stroke="#9bb86a" stroke-width="4" stroke-linecap="round"/><circle cx="42" cy="146" r="8" fill="#c9b07a"/><path d="M50,178 h22 l-3,14 h-16 Z" fill="${ORA}"/>
 ${at(80,196,.6,cat({eyes:'closed',mouth:'wavy',headCls:'tilt',armR:-100,armsFront:true}))}`;

S.rise=`${bg('#ffd9a8')}
 <g style="animation:aufgang 4s ease-out infinite alternate"><g transform="translate(100,150)">${sun(0,0,26)}</g></g><style>@keyframes aufgang{from{transform:translateY(20px)}to{transform:translateY(-70px)}}</style>
 ${hills('#8fe0a8','#6fd08f',150)}
 ${arrow(30,140,30,60,RED,7,'glow')}
 <g transform="translate(160,186)"><path d="M-10,-30 q10,-14 20,0" fill="none" stroke="${RED}" stroke-width="5"/><ellipse cx="0" cy="-16" rx="12" ry="14" fill="#fff"/><path d="M12,-22 l8,4 -8,4 Z" fill="${ORA}"/><circle cx="5" cy="-20" r="1.800" fill="${INK}"/><path d="M-4,-2 v8 M4,-2 v8" stroke="${ORA}" stroke-width="2"/></g>${note(176,130,RED,0)}
 ${at(100,198,.6,cat({eyes:'closed',mouth:'big',armL:150,armR:-150,armsFront:true}))}`;

S.animal=`${park()}${sun(30,24,9)}
 ${at(46,190,.76,P.dog({happy:true}))}
 <g transform="translate(116,150)"><g class="float"><ellipse cx="0" cy="0" rx="26" ry="12" fill="#cbb8f5"/><circle cx="-22" cy="-4" r="12" fill="#cbb8f5"/><path d="M-32,-12 l-10,-8 M-34,-6 l-12,0 M-32,2 l-10,6" stroke="${RED}" stroke-width="3" stroke-linecap="round"/><circle cx="-26" cy="-6" r="1.800" fill="${INK}"/><circle cx="-18" cy="-6" r="1.800" fill="${INK}"/><path d="M-26,0 q4,3 8,0" fill="none" stroke="${INK}" stroke-width="1.500"/><path d="M24,0 q16,-8 20,4 q-10,6 -20,0" fill="#cbb8f5"/></g></g>
 <g class="flutter"><g transform="translate(160,60)"><ellipse cx="0" cy="0" rx="10" ry="7" fill="${SKY}"/><circle cx="9" cy="-4" r="5" fill="${SKY}"/><path d="M13,-4 l6,2 -6,2 Z" fill="${ORA}"/><g class="flap"><path d="M-2,-2 q-10,-16 -16,-2 Z" fill="#2f6fd0"/></g></g></g>
 ${at(170,196,.5,cat({eyes:'happy',armL:125,armLcls:'wave',armsFront:true}))}`;

S.factor=`${bg('#ece6ff')}${floor(184,'#d6ccf5')}
 ${[[36,'☀',SUN],[86,'💧',SKY],[136,'♥',RED]].map(([x,l,c],i)=>`<g class="float" style="animation-delay:${i*.3}s"><circle cx="${x}" cy="50" r="20" fill="#fff"/>${i==0?`<g transform="translate(${x},50) scale(.6)">${sun(0,0,12)}</g>`:i==1?`<path d="${tear(x,40)}" fill="${SKY}" transform="translate(${-x},${-40}) scale(1)" style="transform:none"/><path d="M${x},38 q-10,14 0,22 q10,-8 0,-22 Z" fill="${SKY}"/>`:heartS(x,52,1,RED)}</g>${arrow(x+4,74,96,116,'#b9b0d6',3)}`).join('')}
 ${T(62,56,'+',18,VIO)}${T(112,56,'+',18,VIO)}
 ${sprout(176,186,60,true)}${arrow(120,150,156,150,RED,5,'glow')}
 ${at(70,198,.6,cat({hat:glasses,eyes:'happy',armR:-110,armsFront:true}))}`;

S.decade=`${bg('#fff1c9')}${floor(184,'#ffe08a')}
 <rect x="10" y="20" width="180" height="76" rx="10" fill="#fff"/><rect x="10" y="20" width="180" height="14" rx="7" fill="${RED}"/>
 ${[0,1,2,3,4,5,6,7,8,9].map(i=>`<rect x="${17+(i%5)*34}" y="${40+Math.floor(i/5)*27}" width="30" height="22" rx="5" fill="#f4f1fb"/>${T(32+(i%5)*34,56+Math.floor(i/5)*27,String(2016+i),9,i==9?RED:'#9aa8c0')}`).join('')}
 ${T(100,124,'10 years',18,RED,'middle','beat')}
 ${at(46,196,.36,cat({tail:false,eyes:'happy'}))}${arrow(70,170,120,170,VIO,5,'glow')}${at(156,196,.66,cat({eyes:'happy',armL:125,armLcls:'wave',armsFront:true}))}`;

S.article=`${room('#e6f1ff','#c98a4b',166)}<rect y="166" width="200" height="8" fill="#e0a868"/>
 <g transform="rotate(-4 120 90)"><rect x="70" y="24" width="110" height="130" rx="2" fill="#fff" stroke="#cbc2e6" stroke-width="2"/>${T(125,46,'NEWS',16,INK)}<path d="M78,54 h94" stroke="${INK}" stroke-width="2"/>
 <rect x="78" y="62" width="50" height="60" fill="#fff3cf" stroke="${RED}" stroke-width="3" class="glow"/><path d="M84,74 h38 M84,84 h38 M84,94 h38 M84,104 h26" stroke="#9aa8c0" stroke-width="3" stroke-linecap="round"/>
 <rect x="136" y="62" width="36" height="28" fill="#cdeeff"/><path d="M136,100 h36 M136,110 h36 M78,132 h94 M78,142 h70" stroke="#cbc2e6" stroke-width="3" stroke-linecap="round"/></g>
 ${at(40,198,.66,cat({hat:glasses,eyes:'happy',tail:false,armR:-110,armsFront:true,prop:`<g transform="translate(6,10) rotate(-60) scale(.8)">${lupe}</g>`}))}`;
