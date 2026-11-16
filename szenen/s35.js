/* Tag 127–130: argue, particularly, amount, ability, staff · recognize, indicate, character, growth, loss · degree, wonder, attack, herself, region · television, training, pretty, trade, election */
S.argue=`${park()}${cloud(100,18,.6)}
 ${speech(50,46,60,36,`<g transform="translate(50,56) scale(1.4)">${P.fish}</g>`,56,80)}${speech(150,46,60,36,`<g transform="translate(150,58) scale(.8)">${P.ball(RED)}</g>`,144,80)}
 ${T(100,56,'≠',24,RED,'middle','beat')}<g class="beat">${blitz(100,100,1,SUN)}</g>
 ${sh(56,192,30)}${at(56,190,.84,cat({eyes:'open',mouth:'open',mouthCls:'chew',armR:-110,armRcls:'bob',armsFront:true,hat:`<path d="M-24,-88 l14,5 M24,-88 l-14,5" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>`}))}
 ${sh(144,192,30)}${at(144,190,.84,K('orange',{eyes:'open',mouth:'open',mouthCls:'chew',armL:110,armLcls:'bob',armsFront:true}))}`;

S.particularly=`${bg('#fff1c9')}${floor(160,MINT)}<rect y="160" width="200" height="8" fill="#9be6d8"/>
 <g opacity=".55">${fishAt(30,150,1.500,0)}${fishAt(170,150,1.500,0)}</g>
 <g class="hop"><g transform="translate(100,130) scale(2.800)"><path d="M-9,0 l-8,-6 v12 Z" fill="${SUN}"/><ellipse cx="0" cy="0" rx="10" ry="6.500" fill="${SUN}" stroke="#e0a83a" stroke-width=".8"/><circle cx="5" cy="-1.500" r="1.400" fill="${INK}"/></g></g>
 ${ring(100,128,44,RED)}${heart(100,60,1,RED,0)}${arrow(100,30,100,74,RED,6,'float')}
 ${at(40,206,.56,cat({eyes:'spark',mouth:'tongue',tail:false,armR:-130,armsFront:true}))}`;

S.amount=`${bg('#e3fbf5')}${floor(176,'#bff0de')}
 ${[[40,1],[100,4],[160,9]].map(([x,n],i)=>`<path d="M${x-22},120 h44 l-4,56 h-36 Z" fill="#fff" opacity=".8" stroke="#cbc2e6" stroke-width="3"/>${Array.from({length:n},(_,k)=>`<circle cx="${x-12+(k%3)*12}" cy="${166-Math.floor(k/3)*12}" r="5.500" fill="${[SKY,SUN,RED][i]}"/>`).join('')}${T(x,106,String(n),18,i==2?RED:'#9aa8c0',i==2?'middle':'middle',i==2?'beat':'')}`).join('')}
 ${arrow(30,60,170,60,VIO,5,'glow')}${T(100,44,'how much?',13,VIO)}
 ${at(100,206,.44,cat({eyes:'wide',armR:-140,armsFront:true,tail:false}))}`;

S.ability=`${bg('#fff3cf')}<circle cx="100" cy="100" r="82" fill="#ffe7a3"/>${floor(184,'#ffe08a')}
 ${[[40,60,RED],[100,34,SKY],[160,60,MINT]].map(([x,y,c],i)=>`<g style="transform-origin:100px 150px;animation:jong 1.800s linear ${-i*.6}s infinite"><circle cx="100" cy="50" r="10" fill="${c}"/></g>`).join('')}<style>@keyframes jong{0%{transform:translate(-50px,30px)}25%{transform:translate(-26px,-22px)}50%{transform:translate(0,-34px)}75%{transform:translate(26px,-22px)}100%{transform:translate(50px,30px)}}</style>
 ${sh(100,192,34)}${at(100,190,.92,cat({eyes:'happy',mouth:'tongue',armL:120,armR:-120,armsFront:true}))}
 ${spark(30,120,8,SUN,0)}${spark(170,120,8,SUN,.5)}<g class="twinkle">${star5(160,30,10,SUN)}</g>`;

S.staff=`${room('#e3fbf5','#bff0de')}
 <rect x="30" y="14" width="140" height="26" rx="6" fill="${RED}"/>${T(100,33,'TEAM',14,'#fff')}
 ${[['orange',36],['grey',78],['cream',122],['white',164]].map(([n,x],i)=>at(x,186,.56,K(n,{eyes:'happy',mid:`<path d="M-22,-46 h44 v34 h-44 Z" fill="${MINT}" opacity=".95"/>`+nameTag,hat:i%2?cap:''}))).join('')}
 <path d="M10,70 h180 v126 h-180 Z" fill="none" stroke="${RED}" stroke-width="3" stroke-dasharray="8 8" class="glow" rx="10"/>
 ${at(100,74,.3,cat({mid:tie,tail:false,eyes:'happy',armL:130,armR:-130,armsFront:true}))}`;

S.recognize=`${park()}${cloud(40,24,.7)}
 ${think(60,50,34,26,at(60,70,.3,K('orange',{tail:false,hat:cap})),1)}
 ${T(100,60,'=',22,RED,'middle','beat')}
 ${sh(56,192,30)}${at(56,190,.84,cat({eyes:'spark',mouth:'o',armR:-140,armsFront:true}))}
 ${sh(146,192,30)}${at(146,190,.84,K('orange',{eyes:'happy',hat:cap,armL:125,armLcls:'wave',armsFront:true}))}
 <g class="beat"><g transform="translate(170,50) scale(.7)">${P.bulb}</g></g>`;

S.indicate=`${park(170)}${cloud(150,24,.7)}
 <path d="M150,176 V70" stroke="#b07a45" stroke-width="5"/><path d="M110,70 h60 l14,12 -14,12 h-60 Z" fill="${SUN}"/><path d="M190,106 h-60 l-14,12 14,12 h60 Z" fill="${SKY}" opacity=".5"/>
 <g class="glow">${ring(150,82,34,RED)}</g>
 ${sh(60,192,32)}${at(60,190,.9,cat({eyes:'happy',mouth:'open',armR:-115,armRcls:'bob',armsFront:true}))}
 <path d="M96,120 l20,-16" stroke="${RED}" stroke-width="4" stroke-dasharray="5 6" stroke-linecap="round"/>`;

S.character=`${room('#ece6ff','#d6ccf5')}
 <g transform="translate(120,96)"><path d="M-60,-60 h56 v110 h-56 Z M4,-60 h56 v110 h-56 Z" fill="#fff" stroke="#cbc2e6" stroke-width="2"/><path d="M-52,20 h40 M-52,32 h40 M12,20 h40 M12,32 h28" stroke="#cbc2e6" stroke-width="3" stroke-linecap="round"/></g>
 <g>${at(92,96,.34,K('orange',{tail:false,hat:crown,mid:`<path d="M-20,-52 q-30,10 -50,-6 q20,26 50,22 Z" fill="${RED}"/>`,eyes:'happy'}))}</g>
 <g style="animation-delay:.5s">${at(152,96,.34,K('grey',{tail:false,hat:pirat,eyes:'happy'}))}</g>
 ${spark(184,40,7,SUN,0)}
 ${at(34,196,.6,cat({hat:glasses,eyes:'spark',mouth:'open',armR:-110,armsFront:true}))}`;

S.growth=`${bg('#d9f7e1')}${sun(30,26,10)}${floor(176,'#b07a45')}
 ${sprout(36,176,10)}${sprout(80,176,30)}${sprout(124,176,54)}
 <g class="grow" style="transform-origin:168px 176px;transform-box:view-box">${tree(168,176,1.800)}</g>
 <path d="M30,150 L76,130 L120,104 L160,70" fill="none" stroke="${INK}" stroke-width="2.500" stroke-dasharray="5 6"/>${arrow(150,78,166,62,RED,6,'glow')}
 <path class="drip" d="${tear(60,90)}" fill="${SKY}"/>
 ${at(100,206,.4,cat({eyes:'happy',tail:false,armL:140,armR:-140,armsFront:true}))}`;

S.loss=`${park()}${cloud(40,50,.7)}
 <g class="rise" style="animation-duration:5s"><ellipse cx="140" cy="60" rx="16" ry="20" fill="${RED}"/><path d="M140,80 q-6,20 4,40" fill="none" stroke="${INK}" stroke-width="1.500"/></g>
 ${arrow(170,110,170,50,VIO,4,'glow')}
 ${sh(70,192,32)}${at(70,190,.9,cat({eyes:'wide',mouth:'wavy',armR:-150,armsFront:true}))}
 <path class="sweat" d="${tear(40,104)}" fill="${SKY}"/>${T(140,150,'oh no',14,VIO,'middle','glow')}`;

S.degree=`${bg('#fff3cf')}<circle cx="100" cy="100" r="82" fill="#ffe7a3"/>${floor(184,'#ffe08a')}
 ${sh(90,192,36)}${at(90,190,1,cat({bow:false,hat:doktorhut,eyes:'happy',mouth:'big',armR:-120,armsFront:true,prop:`<g transform="rotate(30)"><rect x="-6" y="-34" width="12" height="38" rx="5" fill="#fff" stroke="#cbc2e6" stroke-width="1.500"/><rect x="-7" y="-20" width="14" height="7" fill="${RED}"/></g>`}))}
 ${burst(160,50,RED,0)}${spark(30,60,8,SUN,.4)}<g class="twinkle">${star5(160,120,9,SUN)}</g>`;

S.wonder=`${bg('#2d2a6e')}${spark(30,30,5,'#fff',0)}${spark(80,50,4,'#fff',.4)}${spark(150,24,5,'#fff',.8)}${spark(176,70,4,'#fff',1.2)}${spark(110,90,3,'#fff',.6)}
 <circle cx="160" cy="46" r="18" fill="#fff6c8"/><circle cx="168" cy="40" r="15" fill="#2d2a6e"/>
 ${T(60,100,'?',34,SUN,'middle','beat')}${T(96,70,'?',20,'#fff','middle','glow')}
 <path d="M0,176 q50,-18 100,0 t100,0 v24 h-200 Z" fill="#1f1b4d"/>
 ${at(110,186,.9,cat(Object.assign({eyes:'spark',mouth:'o',headCls:'tilt',armR:-150,armsFront:true},NL)))}`;

S.attack=`${room('#fff1c9','#e4b77a')}
 <g transform="translate(150,166)"><g class="wiggle"><circle r="20" fill="${SKY}"/><path d="M-16,-8 q16,-14 32,0 M-18,4 q18,-12 36,0 M-12,14 q12,-8 24,0" fill="none" stroke="#2f6fd0" stroke-width="2.500"/></g><path d="M18,10 q20,10 10,20 q-16,6 -30,-4" fill="none" stroke="${SKY}" stroke-width="3" stroke-linecap="round"/></g>
 <g transform="translate(74,150) rotate(24)"><g class="float" style="animation-duration:.6s"><g transform="scale(-.86,.86)">${cat({eyes:'wide',mouth:'big',armL:-110,armR:-110,armsFront:true,feet:'run'})}</g></g></g>
 <path d="M10,90 h40 M4,110 h50" stroke="${ORA}" stroke-width="4" stroke-linecap="round" class="glow"/>${burst(128,140,ORA,0)}${T(150,110,'rawr!',14,RED,'middle','beat')}`;

S.herself=`${room('#ffe9d6','#ffd9bd')}
 ${sh(70,192,34)}${at(70,190,.96,cat({eyes:'happy',mouth:'big',armL:-150,armR:-90,armsFront:true}))}
 ${block(150,186,SKY,'A')}${block(150,154,RED,'B')}${block(150,122,SUN,'C')}<g class="twinkle">${star5(150,76,9,SUN)}</g>
 <g class="glow"><path d="M30,120 q-24,-50 20,-70" fill="none" stroke="${RED}" stroke-width="4" stroke-linecap="round" stroke-dasharray="7 7"/><path d="M50,50 l-12,-2 M50,50 l-4,12" stroke="${RED}" stroke-width="4" stroke-linecap="round"/></g>
 <g opacity=".3">${at(184,70,.3,K('grey',{}))}</g>`;

S.region=`${bg('#cdeeff')}
 <path d="M14,50 q30,-20 60,-6 q30,-14 60,6 q30,0 50,20 q-10,30 -30,40 q10,30 -20,50 q-30,10 -50,-10 q-30,10 -50,-20 q-30,-20 -20,-80 Z" fill="#8fe0a8" stroke="#fff" stroke-width="3"/>
 <path d="M74,44 q10,40 -10,80 M134,50 q-20,50 0,110 M24,110 q60,-10 150,10" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="4 4"/>
 <path d="M74,48 q30,-12 58,4 q-16,34 -4,62 q-34,-8 -62,6 q14,-36 8,-72 Z" fill="${SUN}" class="glow"/>
 ${pin(100,90)}${kaktus(40,150,.5)}${tree(160,90,.6)}
 ${at(170,196,.46,cat({eyes:'happy',armL:140,armsFront:true}))}`;

S.television=`${room('#2d2a6e','#1f1b4d')}
 <rect x="70" y="30" width="120" height="84" rx="8" fill="${INK}"/><rect x="77" y="37" width="106" height="70" rx="3" fill="#cdeeff" class="glow"/>
 <clipPath id="tv"><rect x="77" y="37" width="106" height="70"/></clipPath><g clip-path="url(#tv)"><path d="M77,96 q53,-18 106,0 v12 h-106 Z" fill="#8fe0a8"/>${at(130,104,.3,K('orange',{feet:'run',armL:120,armR:-120,armsFront:true}))}</g>
 <rect x="122" y="114" width="16" height="12" fill="#9aa8c0"/><rect x="100" y="126" width="60" height="6" rx="3" fill="#9aa8c0"/>
 <ellipse cx="50" cy="184" rx="44" ry="10" fill="${VIO}"/>
 ${at(50,186,.76,cat(Object.assign({eyes:'spark',tail:false,armR:-60,prop:`<rect x="-5" y="-16" width="10" height="20" rx="3" fill="#9aa8c0"/><circle cx="0" cy="-10" r="2.500" fill="${RED}"/>`},NL)))}`;

S.training=`${bg('#e3fbf5')}${floor(184,'#bff0de')}
 <rect x="10" y="14" width="80" height="30" rx="8" fill="#fff"/>${[0,1,2].map(i=>`<g class="twinkle" style="animation-delay:${i*.3}s">${check(26+i*24,30,5,3)}</g>`).join('')}
 ${sh(110,192,36)}${at(110,190,.96,cat({eyes:'closed',mouth:'big',armL:150,armR:-150,armsFront:true,mid:trikot(RED),hat:`<rect x="-30" y="-86" width="60" height="10" rx="3" fill="${SKY}"/>`}))}
 <g class="hop"><g transform="translate(110,50) scale(1.5)">${hantel}</g></g>
 <path class="sweat" d="${tear(60,110)}" fill="${SKY}"/><path class="sweat" style="animation-delay:.6s" d="${tear(160,110)}" fill="${SKY}"/>
 ${at(30,196,.4,K('grey',{hat:cap,mouth:'open',armR:-125,armsFront:true}))}`;

S.pretty=`${bg('#fff1c9')}<circle cx="100" cy="100" r="82" fill="#ffe7a3"/>${floor(184,'#ffe08a')}${papel(10,10,190)}
 ${sh(100,192,38)}${at(100,190,1.04,cat({eyes:'happy',mouth:'w',headCls:'tilt',bow:false,hat:`${[[-26,-96,RED],[-10,-104,SUN],[8,-104,VIO],[24,-96,ORA]].map(([x,y,c])=>`<circle cx="${x}" cy="${y}" r="9" fill="${c}"/><circle cx="${x}" cy="${y}" r="3" fill="#fff"/>`).join('')}<ellipse cx="-36" cy="-92" rx="6" ry="3" fill="#3aa568"/><ellipse cx="36" cy="-92" rx="6" ry="3" fill="#3aa568"/>`,armL:-40,armR:40,armsFront:true}))}
 ${spark(34,70,9,RED,0)}${spark(166,70,9,RED,.5)}${spark(160,140,7,SUN,1)}${heart(40,130,.8,RED,0)}`;

S.trade=`${park()}${sun(30,24,9)}
 ${sh(50,192,30)}${at(50,190,.84,cat({eyes:'happy',mouth:'open',armR:-90,armsFront:true}))}
 ${sh(150,192,30)}${at(150,190,.84,K('orange',{eyes:'happy',mouth:'open',armL:90,armsFront:true}))}
 <g style="animation:tauschA 3s ease-in-out infinite alternate">${fishAt(84,140,1.400,0)}</g><g style="animation:tauschB 3s ease-in-out infinite alternate">${coin(118,140,9)}</g>
 <style>@keyframes tauschA{from{transform:translateX(0)}to{transform:translateX(34px)}}@keyframes tauschB{from{transform:translateX(0)}to{transform:translateX(-34px)}}</style>
 ${arcArrow(70,110,130,110,22,RED,4,'')}${arcArrow(130,170,70,170,22,RED,4,'')}`;

S.election=`${room('#e6f1ff','#cfe3f7')}
 <rect x="100" y="110" width="80" height="68" rx="4" fill="${SKY}"/><rect x="96" y="102" width="88" height="12" rx="3" fill="#2f6fd0"/><rect x="124" y="105" width="32" height="5" rx="2" fill="${INK}"/>${check(140,146,12,7).replace(new RegExp(MINT,'g'),'#fff')}
 <g class="drop" style="animation-duration:2s"><rect x="128" y="60" width="24" height="30" rx="2" fill="#fff" stroke="#cbc2e6" stroke-width="1.500"/>${cross(140,75,5,3)}</g>
 ${[RED,SUN,MINT].map((c,i)=>`<circle cx="${30+i*22}" cy="34" r="9" fill="${c}"/>`).join('')}${T(52,62,'vote',13,INK)}
 ${sh(50,192,30)}${at(50,190,.86,cat({eyes:'happy',mouth:'open',armR:-125,armsFront:true}))}`;
