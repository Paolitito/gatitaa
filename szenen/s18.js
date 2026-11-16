/* Tag 59–62: white, least, president, learn, real · change, team, minute, best, several · idea, kid, body, information, nothing · ago, lead, social, understand, whether */
S.white=`${bg('#dff1ff')}<path d="M0,170 q50,-14 100,0 t100,0 v30 h-200 Z" fill="#fff"/>${cloud(40,40,1)}${cloud(160,60,.8)}
 ${[[30,0,3],[80,1.5,2.4],[130,.7,3],[176,2.2,2.4]].map(([x,d,r])=>`<circle class="snow" style="animation-delay:-${d}s" cx="${x}" cy="0" r="${r}" fill="#fff"/>`).join('')}
 <rect x="150" y="130" width="26" height="44" rx="5" fill="#fff" stroke="#cbc2e6" stroke-width="2"/><rect x="154" y="122" width="18" height="10" rx="3" fill="${SKY}"/>
 ${sh(92,190,38)}${at(92,188,1.02,K('white',{eyes:'happy',mouth:'open',armR:-125,armRcls:'wave',armsFront:true}))}${ring(92,128,70,RED)}
 ${at(26,194,.4,cat({eyes:'happy'}))}`;

S.least=`${bg('#fff1c9')}${floor(150,MINT)}<rect y="150" width="200" height="8" fill="#9be6d8"/>
 ${[[36,'orange',4],[100,'grey',3],[164,null,1]].map(([x,n,k])=>`${n?at(x,140,.5,K(n,{eyes:'happy',tail:false})):at(x,140,.52,cat({mouth:'wavy',tail:false}))}<g transform="translate(${x},182)">${P.plate(26)}</g>${Array.from({length:k},(_,i)=>fishAt(x-12+i%2*20,174-Math.floor(i/2)*9,1,i*20-10)).join('')}`).join('')}
 ${ring(164,176,30,RED)}${arrow(164,40,164,76,RED,6,'float')}`;

S.president=`${bg('#ece6ff')}
 <path d="M40,150 V30" stroke="#b07a45" stroke-width="4"/><g class="flower" style="transform-origin:40px 50px"><rect x="42" y="32" width="14" height="30" fill="#1f9c5a"/><rect x="56" y="32" width="14" height="30" fill="#fff"/><ellipse cx="63" cy="47" rx="4" ry="5" fill="#b07a45"/><rect x="70" y="32" width="14" height="30" fill="${RED}"/></g>
 ${at(110,160,.9,cat({eyes:'happy',mid:`${tie}<path d="M-22,-48 L20,-8" stroke="${SUN}" stroke-width="7"/>`,armR:-125,armRcls:'wave',armsFront:true,tail:false}))}
 <path d="M60,186 l6,-50 h88 l6,50 Z" fill="#b07a45"/><rect x="58" y="128" width="104" height="12" rx="4" fill="#8a5a30"/><circle cx="110" cy="162" r="13" fill="${SUN}"/>${star5(110,162,7,'#fff')}
 ${floor(186,'#d6ccf5')}<path d="M96,128 v-14" stroke="${INK}" stroke-width="3"/><circle cx="96" cy="112" r="4" fill="${INK}"/>`;

const doktorhut=`<path d="M-30,-104 L0,-116 L30,-104 L0,-92 Z" fill="${INK}"/><rect x="-16" y="-102" width="32" height="8" fill="${INK}"/><path d="M26,-104 v16" stroke="${SUN}" stroke-width="2.500"/><circle cx="26" cy="-86" r="3" fill="${SUN}"/>`;
S.learn=`${bg('#fff1c9')}<circle cx="100" cy="104" r="80" fill="#ffe7a3"/>${floor(184,'#ffe08a')}${sh(100,190,36)}
 ${letter(30,90,'A',RED,0)}${letter(160,84,'B',SKY,.7)}${letter(44,50,'C',MINT,1.4)}${letter(150,40,'1',VIO,2)}
 ${at(100,186,1,cat({bow:false,hat:doktorhut,eyes:'happy',armL:8,armR:-8,mid:openBook}))}
 ${spark(100,30,8,SUN,0)}`;

S.real=`${bg('#e3fbf5')}${floor(170,'#c98a4b')}<rect y="170" width="200" height="8" fill="#e0a868"/>
 <rect x="14" y="40" width="74" height="60" rx="4" fill="#fff" stroke="#b07a45" stroke-width="5"/><g opacity=".6" transform="translate(52,70) scale(2.2)"><path d="M-9,0 l-8,-6 v12 Z M0,-6.500 a10,6.500 0 1 0 .01,0" fill="none" stroke="${INK}" stroke-width=".8" stroke-dasharray="2 1.500"/></g>${cross(52,24,7,4)}
 <g transform="translate(144,166)">${P.plate(40)}</g><g transform="translate(144,152)"><g class="wiggle"><g transform="scale(3)">${P.fish}</g></g></g>${check(144,100,12,6)}${ring(144,150,40,RED)}
 ${at(62,196,.6,cat({eyes:'spark',mouth:'tongue',armR:-100,armRcls:'bob',tail:false}))}`;

const hutK=(c)=>`<path d="M-26,-98 q0,-30 26,-30 q26,0 26,30 Z" fill="${c}"/><rect x="-32" y="-102" width="64" height="8" rx="4" fill="${c}"/>`;
S.change=`${bg('#ece6ff')}<circle cx="100" cy="104" r="80" fill="#f6f2ff"/>${floor(184,'#d6ccf5')}${sh(100,190,36)}
 ${at(100,186,1,cat({bow:false,eyes:'happy',mouth:'open',hat:`<g class="glow">${hutK(RED)}</g><g class="glow" style="animation-delay:1.4s">${hutK(SKY)}</g>`}))}
 <g class="spin" style="animation-duration:6s"><circle cx="100" cy="60" r="70" fill="none"/><path d="M44,40 q20,-30 56,-30" fill="none" stroke="${VIO}" stroke-width="5" stroke-linecap="round"/><path d="M100,10 l-10,-7 M100,10 l-9,8" stroke="${VIO}" stroke-width="5" stroke-linecap="round"/><path d="M156,80 q-20,30 -56,30" fill="none" stroke="${VIO}" stroke-width="5" stroke-linecap="round"/><path d="M100,110 l10,7 M100,110 l9,-8" stroke="${VIO}" stroke-width="5" stroke-linecap="round"/></g>`;

const trikot=(c)=>`<path d="M-22,-46 h44 v34 h-44 Z" fill="${c}" opacity=".95"/>${star5(0,-28,6,'#fff')}`;
S.team=`${park(172)}${cloud(40,24,.7)}
 ${at(52,188,.66,K('orange',{eyes:'happy',mid:trikot(SKY),armR:-70}))}${at(148,188,.66,K('grey',{eyes:'happy',mid:trikot(SKY),armL:70}))}
 ${at(100,192,.74,cat({eyes:'happy',mouth:'open',mid:trikot(SKY),armL:70,armR:-70}))}
 <g class="beat"><circle cx="100" cy="128" r="10" fill="${SUN}"/></g>
 <g transform="translate(100,60)"><g class="jump">${P.ball('#fff',INK)}</g></g>${spark(60,60,6,SUN,0)}${spark(140,60,6,SUN,.5)}`;

S.minute=`${bg('#e3fbf5')}<circle cx="110" cy="100" r="78" fill="#f0fdf8"/>
 <g transform="translate(110,104)"><rect x="-8" y="-84" width="16" height="14" rx="3" fill="${INK}"/><circle r="64" fill="#fff" stroke="${INK}" stroke-width="7"/>${Array.from({length:12},(_,i)=>`<path transform="rotate(${i*30})" d="M0,-56 v7" stroke="${INK}" stroke-width="2.500" stroke-linecap="round"/>`).join('')}<path d="M0,0 L0,-56 A56,56 0 0 1 5.900,-55.700 Z" fill="${RED}"/><g class="spin" style="animation-duration:4s;transform-box:view-box;transform-origin:0 0"><path d="M0,0 v-50" stroke="${RED}" stroke-width="4" stroke-linecap="round"/></g><circle r="5" fill="${INK}"/></g>
 ${floor(186,'#bff0de')}${at(30,194,.56,cat({eyes:'wide',armR:-110,armsFront:true}))}`;

S.best=`${bg('#fff3cf')}<circle cx="100" cy="100" r="82" fill="#ffe7a3"/>
 <g class="twinkle">${star5(40,40,12,SUN)}</g><g class="twinkle" style="animation-delay:.4s">${star5(160,40,12,SUN)}</g><g class="twinkle" style="animation-delay:.8s">${star5(100,22,14,SUN)}</g>
 ${floor(184,'#ffe08a')}${sh(100,190,38)}
 ${at(100,186,1.04,cat({bow:false,eyes:'happy',mouth:'big',armL:130,armR:-130,armsFront:true,hat:`<path d="M-24,-100 l6,-24 10,14 8,-20 8,20 10,-14 6,24 Z" fill="${SUN}" stroke="#e0a83a" stroke-width="2" stroke-linejoin="round"/><circle cx="0" cy="-106" r="3" fill="${RED}"/>`,mid:`<circle cx="0" cy="-28" r="11" fill="${SKY}"/>${star5(0,-28,6,'#fff')}<path d="M-6,-18 l-4,16 10,-6 10,6 -4,-16" fill="${SKY}"/>`}))}`;

S.several=`${bg('#cdeeff')}${cloud(30,150,.8)}${cloud(170,170,.7)}
 ${[[50,60,RED,0],[84,40,SUN,.3],[118,56,SKY,.6],[150,38,VIO,.9],[100,84,MINT,1.2]].map(([x,y,c,d])=>`<g class="float" style="animation-delay:${d}s"><path d="M${x},${y+18} Q${x+4},${y+50} 104,140" fill="none" stroke="${INK}" stroke-width="1.200"/><ellipse cx="${x}" cy="${y}" rx="15" ry="19" fill="${c}"/><ellipse cx="${x-5}" cy="${y-7}" rx="3.500" ry="5" fill="#fff" opacity=".5"/></g>`).join('')}
 <ellipse cx="100" cy="58" rx="78" ry="54" fill="none" stroke="${RED}" stroke-width="3" stroke-dasharray="8 8" class="glow"/>
 ${at(100,196,.6,cat({eyes:'happy',mouth:'open',armR:-150,armsFront:true}))}`;

S.idea=`${bg('#fff3cf')}${floor(184,'#ffe08a')}
 ${think(134,54,48,32,`<g transform="translate(134,84) scale(1.1)">${P.bulb}</g>`,-1)}
 <rect x="110" y="120" width="74" height="56" rx="4" fill="#fff" stroke="#cbc2e6" stroke-width="2"/><path d="M147,128 l12,22 h-24 Z M135,150 v16 M159,150 v16 M141,170 l6,-8 6,8" fill="none" stroke="${SKY}" stroke-width="2.500" stroke-linejoin="round" class="draw"/>
 ${sh(56,190,32)}${at(56,188,.92,cat({eyes:'spark',mouth:'open',armR:-150,armsFront:true}))}`;

const mütze=`<path d="M-26,-138 q0,-14 26,-14 q26,0 26,14 Z" fill="${RED}"/><rect x="-4" y="-142" width="44" height="7" rx="3" fill="#b52f29"/>`;
S.kid=`${park()}${cloud(40,30,.8)}
 <path d="M0,186 h200" stroke="#f3d9a4" stroke-width="14"/>
 <g class="road" style="animation-direction:reverse"><g transform="translate(118,176)"><g class="walkbob"><g transform="translate(0,-8) scale(.74)">${P.person({shirt:MINT,stripe:'#1f9c83',hair:'#3a2a4a',happy:true,hat:mütze})}</g></g><rect x="-26" y="-8" width="52" height="6" rx="3" fill="${VIO}"/><circle cx="-16" cy="2" r="5" fill="${INK}"/><circle cx="16" cy="2" r="5" fill="${INK}"/></g></g>
 <path d="M40,150 h26 M34,164 h20" stroke="#fff" stroke-width="3" stroke-linecap="round" class="glow"/>
 ${at(30,196,.46,cat({eyes:'wide',mouth:'o',armL:125,armR:-125,armsFront:true}))}`;

const lbl=(x1,y1,x2,y2)=>`<path d="M${x1},${y1} L${x2},${y2}" stroke="${RED}" stroke-width="2.500" stroke-linecap="round"/><circle cx="${x1}" cy="${y1}" r="4" fill="${RED}" class="beat"/><circle cx="${x2}" cy="${y2}" r="7" fill="#fff" stroke="${RED}" stroke-width="2.500"/>`;
S.body=`${bg('#e3fbf5')}<rect x="52" y="26" width="96" height="164" rx="40" fill="#f0fdf8" stroke="${RED}" stroke-width="3" stroke-dasharray="8 8"/>${floor(190,'#bff0de')}
 ${at(100,186,1.06,cat({eyes:'happy',armL:40,armR:-40}))}
 ${lbl(100,70,176,40)}${lbl(72,140,22,120)}${lbl(100,154,178,150)}${lbl(88,184,26,178)}`;

S.information=`${bg('#cdeeff')}${cloud(30,24,.7)}${hills('#8fe0a8','#6fd08f',170)}
 <path d="M130,186 v-80" stroke="#9aa8c0" stroke-width="6" stroke-linecap="round"/>
 <g class="beat"><circle cx="130" cy="72" r="40" fill="${SKY}"/><circle cx="130" cy="52" r="6" fill="#fff"/><rect x="124" y="64" width="12" height="32" rx="5" fill="#fff"/></g>
 ${sh(52,192,30)}${at(52,190,.86,cat({eyes:'happy',hat:glasses,armL:-30,armR:30,armsFront:true,mid:`<g transform="translate(0,-28)"><path d="M-22,-12 l14,4 16,-4 14,4 v22 l-14,-4 -16,4 -14,-4 Z" fill="#fff" stroke="#cbc2e6" stroke-width="1.600"/><path d="M-14,-2 h8 M-14,4 h8 M6,-2 h8" stroke="${SKY}" stroke-width="2"/></g>`}))}`;

S.nothing=`${bg('#ece6ff')}<circle cx="110" cy="96" r="70" fill="#f6f2ff"/>${floor(184,'#d6ccf5')}${sh(120,190,54)}
 ${at(120,128,1,P.boxBack(100))}<rect x="70" y="118" width="100" height="12" fill="#5a3a18"/>${at(120,128,1,P.boxFront(100,58))}
 <g class="flutter"><circle cx="110" cy="96" r="2.500" fill="${INK}"/></g>
 <g class="beat"><circle cx="150" cy="56" r="20" fill="#fff"/><circle cx="150" cy="56" r="11" fill="none" stroke="${RED}" stroke-width="4"/><path d="M142,64 l16,-16" stroke="${RED}" stroke-width="4"/></g>
 ${at(34,192,.72,cat({mouth:'wavy',headCls:'tilt',armR:-80}))}`;

S.ago=`${room('#fff1c9','#e4b77a')}
 <rect x="96" y="20" width="86" height="96" rx="6" fill="#f3d9a4" stroke="#b07a45" stroke-width="6"/><g transform="translate(139,104) scale(.42)">${cat({eyes:'happy',mouth:'open',tail:false,extra:`<circle cx="0" cy="-58" r="7" fill="${SKY}"/>`})}</g>
 <g class="glow"><path d="M70,50 q-30,-10 -40,20" fill="none" stroke="${RED}" stroke-width="5" stroke-linecap="round"/><path d="M30,70 l-4,-14 M30,70 l13,-5" stroke="${RED}" stroke-width="5" stroke-linecap="round"/></g>
 <g class="float"><rect x="20" y="86" width="30" height="34" rx="4" fill="#fff"/><rect x="20" y="86" width="30" height="9" rx="4" fill="${RED}"/></g>
 ${sh(70,192,32)}${at(70,190,.9,cat({eyes:'happy',armR:-128,armsFront:true}))}`;

S.lead=`${park()}${sun(30,28,10)}
 <path d="M0,186 h200" stroke="#f3d9a4" stroke-width="16"/>
 <g transform="translate(150,192) scale(-.74,.74)"><g class="walkbob">${cat({armL:0,armLcls:'slowA',armR:-150,armsFront:true,feet:'walk',eyes:'happy',mouth:'open',prop:`<path d="M0,4 v-44" stroke="#b07a45" stroke-width="3"/><path class="flower" d="M0,-40 l22,8 -22,8 Z" fill="${RED}"/>`})}</g></g>
 ${[[96,'orange',0],[60,'grey',.15],[26,'cream',.3]].map(([x,n,d])=>`<g transform="translate(${x},192) scale(-.42,.42)"><g class="walkbob" style="animation-delay:${d}s">${K(n,{armL:0,armR:0,armLcls:'slowA',armRcls:'slowB',feet:'walk',eyes:'happy'})}</g></g>`).join('')}
 ${arrow(150,60,188,60,RED,6,'glow')}`;

S.social=`${bg('#ffe9d6')}${floor(184,'#ffd9bd')}
 <ellipse cx="100" cy="176" rx="60" ry="12" fill="${RED}" opacity=".4"/>
 ${at(40,190,.6,K('orange',{eyes:'happy',mouth:'open'}))}${at(160,190,.6,K('grey',{eyes:'happy',mouth:'open'}))}${at(100,194,.66,cat({eyes:'happy',mouth:'open',armL:70,armR:-70}))}
 ${speech(40,60,44,30,`<path d="${heartP}" transform="translate(40,62) scale(.8)" fill="${RED}"/>`,40,90)}<g class="glow">${speech(160,54,44,30,dots(160,54,VIO),160,84)}</g><g class="glow" style="animation-delay:.7s">${speech(100,34,44,30,`<g transform="translate(100,36) scale(.6)">${star5(0,0,14,SUN)}</g>`,100,66)}</g>`;

const puzzle=(x,y,c,cls)=>`<g class="${cls||''}"><path transform="translate(${x},${y})" d="M0,0 h14 q-4,-10 5,-10 q9,0 5,10 h14 v14 q10,-4 10,5 q0,9 -10,5 v14 h-38 Z" fill="${c}"/></g>`;
S.understand=`${bg('#e3fbf5')}<circle cx="100" cy="90" r="78" fill="#f0fdf8"/>${floor(184,'#bff0de')}
 ${puzzle(60,40,SKY)}<g transform="translate(40,0)">${puzzle(60,40,SUN,'givemove').replace('class="givemove"','class="givemove" style="animation-direction:alternate-reverse"')}</g>
 <g class="beat">${check(160,40,12,6)}</g>${spark(40,36,7,SUN,0)}
 ${sh(100,192,32)}${at(100,190,.78,cat({eyes:'happy',mouth:'big',armL:140,armR:-140,armsFront:true}))}`;

S.whether=`${bg('#ece6ff')}${floor(184,'#d6ccf5')}
 <circle cx="50" cy="60" r="36" fill="#fff"/><circle cx="150" cy="60" r="36" fill="#fff"/>
 <g transform="translate(50,60) scale(.9)">${sun(0,0,13)}</g>
 <path d="M150,40 v40 M130,60 h40 M136,46 l28,28 M164,46 l-28,28" stroke="${SKY}" stroke-width="4" stroke-linecap="round"/>
 ${T(100,74,'?',44,RED,'middle','beat')}
 ${sh(100,192,32)}${at(100,190,.86,cat({mouth:'wavy',headCls:'tilt',armL:70,armR:-70}))}`;
