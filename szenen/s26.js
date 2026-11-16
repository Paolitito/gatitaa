/* Tag 91–94: town, road, drive, arm, true · federal, break, difference, thank, receive · value, international, building, action, full · model, join, season, society, tax */
const hausK=(x,y,s,r,w)=>`<g transform="translate(${x},${y}) scale(${s})">${P.house(r,w)}</g>`;
S.town=`${park(150)}${sun(30,24,9)}${cloud(150,24,.7)}
 ${hausK(34,150,.5,SKY)}${hausK(166,150,.5,VIO,'#ffe2b8')}
 <rect x="86" y="60" width="28" height="90" fill="#fff8e6"/><path d="M82,60 l18,-26 18,26 Z" fill="${RED}"/><circle cx="100" cy="78" r="8" fill="#fff" stroke="#b07a45" stroke-width="2"/><path d="M100,78 v-5 M100,78 h4" stroke="${INK}" stroke-width="1.500"/><rect x="94" y="126" width="12" height="24" rx="6" fill="#b07a45"/>
 ${hausK(64,172,.5,MINT)}${hausK(136,172,.5,SUN,'#fff')}
 <path d="M0,190 q100,-14 200,0" fill="none" stroke="#f3d9a4" stroke-width="14"/>
 ${at(100,198,.4,cat({eyes:'happy',armR:-125,armRcls:'wave',armsFront:true}))}`;

S.road=`${bg('#cdeeff')}${sun(160,26,10)}${hills('#8fe0a8','#6fd08f',90)}
 <path d="M70,200 L94,90 h12 L130,200 Z" fill="#6b7a99"/><g class="road" style="animation-duration:1s"><path d="M100,96 V200" stroke="#fff" stroke-width="3" stroke-dasharray="10 12"/></g>
 ${tree(40,150,1)}${tree(160,130,.8)}${tree(150,180,1.2)}
 <rect x="24" y="100" width="34" height="18" rx="3" fill="#3aa568"/><path d="M41,118 v20" stroke="#b07a45" stroke-width="3"/>${arrow(30,109,50,109,'#fff',3)}
 ${ring(100,150,40,RED)}${at(40,200,.44,cat({eyes:'happy',armR:-100,armsFront:true}))}`;

S.drive=`${park(150)}${cloud(40,24,.7)}${floor(160,'#6b7a99')}
 <g class="road" style="animation-duration:.9s"><path d="M-40,180 h320" stroke="#fff" stroke-width="3" stroke-dasharray="14 26"/></g>
 <g class="road" style="animation-duration:3s">${tree(170,150,.8)}</g>
 <g class="walkbob" style="animation-duration:.5s">${at(96,150,.42,cat({eyes:'happy',mouth:'open',tail:false,armR:-70,armL:70,armsFront:true}))}
 <path d="M40,170 v-22 q0,-8 10,-10 l14,-18 h64 l18,18 q14,2 14,12 v20 Z" fill="${RED}"/><path d="M70,138 l8,-12 h20 v12 Z M104,138 v-12 h20 l10,12 Z" fill="#bfe9ff"/>
 <circle cx="104" cy="140" r="9" fill="none" stroke="${INK}" stroke-width="3"/><circle cx="154" cy="156" r="4" fill="${SUN}"/></g>
 ${wheel(68,172)}${wheel(136,172)}<circle class="puff" cx="28" cy="170" r="6" fill="#fff"/>`;

S.arm=`${bg('#ece6ff')}<circle cx="100" cy="100" r="80" fill="#f6f2ff"/>${floor(184,'#d6ccf5')}${sh(90,190,40)}
 ${at(90,188,1.06,cat({eyes:'happy',mouth:'open',armR:-140,armRcls:'bob',armsFront:true}))}
 ${ring(138,108,24,RED)}${arrow(184,60,160,88,RED,6,'float')}`;

S.true=`${bg('#e3fbf5')}${floor(184,'#bff0de')}
 ${speech(60,40,80,50,`${fishAt(40,54,1.300,0)}${T(62,62,'=',20,INK)}${fishAt(84,54,1.300,0)}`,60,84)}
 <g class="beat"><circle cx="150" cy="50" r="24" fill="${MINT}"/>${check(150,50,12,7).replace(new RegExp(MINT,'g'),'#fff')}</g>
 ${sh(60,192,32)}${at(60,190,.9,cat({eyes:'happy',mouth:'open',armR:-125,armsFront:true}))}
 ${at(150,194,.6,K('orange',{eyes:'happy',armL:150,armsFront:true}))}`;

S.federal=`${bg('#cdeeff')}${cloud(30,24,.7)}${burst(176,30,SUN,0)}
 <path d="M100,54 V14" stroke="#b07a45" stroke-width="3"/><g class="flower" style="transform-origin:100px 22px"><rect x="101" y="14" width="10" height="18" fill="#1f9c5a"/><rect x="111" y="14" width="10" height="18" fill="#fff"/><circle cx="116" cy="23" r="2.500" fill="#b07a45"/><rect x="121" y="14" width="10" height="18" fill="${RED}"/></g>
 <path d="M70,84 a30,30 0 0 1 60,0 Z" fill="#dfe6f2" stroke="#b9c4d8" stroke-width="2"/>
 <path d="M24,104 L100,80 L176,104 Z" fill="#f4f7fb" stroke="#b9c4d8" stroke-width="2"/>${[36,62,88,114,140,160].map(x=>`<rect x="${x-4}" y="108" width="10" height="50" rx="3" fill="#f4f7fb" stroke="#b9c4d8" stroke-width="1.600"/>`).join('')}
 <rect x="22" y="158" width="156" height="10" fill="#dfe6f2"/><rect x="14" y="168" width="172" height="10" fill="#cfd8e6"/>${floor(178,'#8fe0a8')}
 ${at(60,198,.4,cat({mid:tie,eyes:'happy'}))}${at(140,198,.36,K('grey',{mid:tie}))}`;

S.break=`${room('#ffe9d6','#ffd9bd')}
 <rect x="110" y="110" width="80" height="8" rx="3" fill="#b07a45"/><path d="M118,118 v60 M182,118 v60" stroke="#8a5a30" stroke-width="6"/>
 <g transform="translate(92,170)"><path d="M-14,0 l6,-18 8,10 6,-12 8,20 Z" fill="${SKY}"/><path d="M14,4 l10,-8 4,10 Z M-26,6 l8,-4 -2,8 Z" fill="${SKY}"/><path d="M0,-6 q6,-14 16,-10" fill="none" stroke="#3aa568" stroke-width="3"/><circle cx="18" cy="-18" r="5" fill="${RED}"/></g>
 ${burst(92,150,ORA,0)}${T(140,90,'crack!',15,RED,'middle','beat')}
 <path d="M112,112 q-16,20 -18,40" fill="none" stroke="${VIO}" stroke-width="3" stroke-dasharray="4 6"/>
 ${at(46,192,.84,cat({eyes:'wide',mouth:'o',armL:120,armR:-120,armsFront:true}))}`;

S.difference=`${bg('#fff1c9')}${floor(184,'#ffe08a')}
 ${panel(12,30,82,110)}${panel(106,30,82,110)}
 ${at(53,128,.5,K('orange',{eyes:'happy',tail:false}))}${at(147,128,.5,K('orange',{eyes:'happy',tail:false,hat:partyhut}))}
 <g class="glow">${ring(147,58,20,RED)}</g>
 ${T(100,96,'≠',30,VIO,'middle','beat')}
 ${at(100,200,.46,cat({eyes:'wide',armR:-140,armsFront:true,prop:`<g transform="translate(4,6) rotate(-40) scale(.8)">${lupe}</g>`}))}`;

S.thank=`${park()}${cloud(40,24,.7)}
 ${speech(60,36,72,36,T(60,48,'Thank you!',13,RED),60,70)}
 ${sh(60,192,32)}${at(60,190,.9,cat({eyes:'happy',mouth:'open',armL:-34,armR:34,armsFront:true,mid:`<g transform="translate(0,-18)">${P.gift(VIO,SUN)}</g>`}))}
 ${sh(146,192,30)}${at(146,190,.86,K('orange',{eyes:'happy',armL:110,armsFront:true}))}
 ${heart(104,110,1,RED,0)}${heart(120,96,.7,RED,.8)}`;

S.receive=`${room('#e3fbf5','#bff0de')}
 <rect x="120" y="30" width="70" height="148" rx="6" fill="#b07a45"/><rect x="126" y="36" width="58" height="142" fill="#cdeeff"/>
 ${at(160,178,.6,K('grey',{hat:cap,eyes:'happy',armL:100,armsFront:true}))}
 <g class="givemove" style="animation-direction:reverse"><g transform="translate(104,140)">${P.boxClosed(40,34)}</g></g>
 ${arrow(110,96,76,96,RED,6,'glow')}
 ${sh(46,192,30)}${at(46,190,.86,cat({eyes:'spark',mouth:'open',armR:-96,armL:-96,armsFront:true}))}`;

S.value=`${bg('#ece6ff')}<circle cx="100" cy="90" r="78" fill="#f6f2ff"/>${floor(184,'#d6ccf5')}
 <g class="pulse" style="transform-origin:100px 80px"><path d="M70,60 h60 l20,22 -50,54 -50,-54 Z" fill="${SKY}"/><path d="M70,60 l14,22 16,-22 16,22 14,-22 M50,82 h100 M84,82 l16,54 16,-54" fill="none" stroke="#fff" stroke-width="2.500" stroke-linejoin="round"/></g>
 ${spark(40,50,8,SUN,0)}${spark(164,44,7,SUN,.5)}${spark(160,120,6,SUN,1)}
 ${coin(30,170,10)}${coin(48,174,10)}${coin(160,172,10)}
 ${at(100,200,.5,cat({eyes:'spark',mouth:'o',armL:150,armR:-150,armsFront:true}))}`;

const fahne=(x,y,a,b,c)=>`<path d="M${x},${y} v-30" stroke="#b07a45" stroke-width="2"/><rect x="${x}" y="${y-30}" width="7" height="14" fill="${a}"/><rect x="${x+7}" y="${y-30}" width="7" height="14" fill="${b}"/><rect x="${x+14}" y="${y-30}" width="7" height="14" fill="${c}"/>`;
S.international=`${bg('#2d2a6e')}${spark(20,30,4,'#fff',0)}${spark(180,40,4,'#fff',.6)}${spark(30,170,3.500,'#fff',1.2)}
 <g class="float"><circle cx="100" cy="104" r="62" fill="#5cc3ff"/><path d="M70,66 q20,-12 34,2 q4,18 -14,24 q-22,2 -20,-26 Z M112,104 q24,-10 34,10 q-2,26 -24,30 q-16,-14 -10,-40 Z M62,120 q14,-2 16,14 q-6,12 -16,4 Z" fill="#6fd08f"/>
 ${fahne(76,70,'#1f9c5a','#fff',RED)}${fahne(126,112,RED,SUN,RED)}${fahne(56,130,SKY,'#fff',SKY)}</g>
 <ellipse cx="100" cy="104" rx="84" ry="24" fill="none" stroke="${SUN}" stroke-width="3" stroke-dasharray="7 8" transform="rotate(-18 100 104)" class="glow"/>
 ${at(160,196,.44,cat(Object.assign({eyes:'happy',armR:-125,armRcls:'wave',armsFront:true},NL)))}`;

S.building=`${bg('#cdeeff')}${cloud(30,30,.8)}${sun(170,26,9)}${floor(180,'#8fe0a8')}
 <rect x="20" y="110" width="40" height="70" fill="#b9c4d8"/>${[0,1,2].map(r=>[0,1].map(c=>win(26+c*14,116+r*20).replace(/22/g,'10').replace(/11/g,'5')).join('')).join('')}
 <rect x="76" y="30" width="64" height="150" rx="3" fill="${SKY}"/>${[0,1,2,3,4,5].map(r=>[0,1,2].map(c=>`<rect x="${84+c*18}" y="${40+r*22}" width="12" height="14" rx="2" fill="${(r+c)%3?'#bfe9ff':SUN}"/>`).join('')).join('')}<rect x="100" y="160" width="16" height="20" fill="#2f6fd0"/>
 <rect x="150" y="90" width="36" height="90" fill="#cbc2e6"/>${[0,1,2,3].map(r=>`<rect x="156" y="${98+r*20}" width="24" height="10" rx="2" fill="#fff"/>`).join('')}
 ${arrow(60,170,60,60,RED,5,'glow')}
 ${at(40,200,.44,cat({eyes:'wide',mouth:'o',headCls:'tilt'}))}`;

S.action=`${bg('#fff3cf')}${burst(40,40,RED,0)}${burst(170,60,VIO,.5)}
 <path d="M10,90 h50 M20,110 h60 M10,130 h40" stroke="${ORA}" stroke-width="5" stroke-linecap="round" class="glow"/>
 ${floor(184,'#ffe08a')}
 <g transform="translate(116,150) rotate(-18)"><g class="float" style="animation-duration:.7s"><g transform="scale(-.9,.9)">${cat({eyes:'spark',mouth:'big',armL:160,armR:-90,armsFront:true,feet:'run',mid:`<path d="M-20,-52 q-30,10 -50,-6 q20,26 50,22 Z" fill="${RED}"/>`})}</g></g></g>
 <g transform="translate(40,170) rotate(-10)"><rect x="-24" y="-12" width="48" height="26" rx="3" fill="${INK}"/><path d="M-24,-12 l48,-10 v8 l-48,10 Z" fill="#fff" stroke="${INK}" stroke-width="2" class="chew" style="transform-origin:-24px -12px;transform-box:view-box"/></g>`;

S.full=`${bg('#fff1c9')}${floor(156,MINT)}<rect y="156" width="200" height="8" fill="#9be6d8"/>
 <path d="M96,96 h80 q0,60 -40,60 q-40,0 -40,-60 Z" fill="${SKY}"/><ellipse cx="136" cy="96" rx="40" ry="9" fill="#ffd98a"/>
 ${fishAt(120,86,1.300,-20)}${fishAt(146,82,1.300,10)}${fishAt(134,72,1.300,-6)}${fishAt(156,92,1.200,30)}${fishAt(112,96,1.200,0)}
 ${arrow(184,40,160,66,RED,6,'float')}
 ${at(46,160,.78,cat({eyes:'happy',mouth:'wavy',tail:false,armL:20,armR:-20,mid:`<ellipse cx="0" cy="-26" rx="24" ry="20" fill="#3a3148"/>`}),'breathe')}
 ${T(46,60,'uff',16,VIO,'middle','glow')}`;

S.model=`${room('#e6f1ff','#c98a4b',166)}<rect y="166" width="200" height="8" fill="#e0a868"/>
 <g transform="translate(130,166) scale(.7)">${P.house(RED,'#fff8e6')}</g>
 <g opacity=".35" transform="translate(150,90) scale(1.3)">${P.house('#9aa8c0','#dfe6f2')}</g>
 <path d="M104,150 l-10,-56 M158,150 l22,-56" stroke="${VIO}" stroke-width="2" stroke-dasharray="4 5"/>
 ${at(50,190,.8,cat({hat:glasses,mouth:'tongue',armR:-84,armRcls:'bob',prop:`<path d="M0,2 l10,-14" stroke="#b07a45" stroke-width="3"/><path d="M10,-12 l4,-6" stroke="${RED}" stroke-width="4" stroke-linecap="round"/>`}))}`;

S.join=`${park()}${sun(30,26,9)}
 ${[['orange',96],['grey',130],['cream',164]].map(([n,x],i)=>at(x,186,.56,K(n,{eyes:'happy',armL:70,armR:-70}),'hop')).join('')}
 <g class="road" style="animation-duration:3s;animation-direction:reverse"><g transform="translate(6,188) scale(-.56,.56)">${cat({eyes:'happy',mouth:'open',feet:'walk',armR:-110,armsFront:true})}</g></g>
 ${arrow(30,110,66,110,RED,6,'glow')}${T(48,96,'+1',18,RED,'middle','beat')}
 <g transform="translate(130,120)"><g class="jump">${P.ball(RED)}</g></g>`;

S.season=`${bg('#fff8e6')}<path d="M100,0 v200 M0,100 h200" stroke="#fff" stroke-width="4"/>
 <rect width="98" height="98" fill="#d9f7e1"/>${flower(30,84,RED,0)}${flower(56,88,VIO,.4)}${flower(80,82,SUN,.8)}
 <rect x="102" width="98" height="98" fill="#fff3b8"/><g transform="translate(150,46)">${sun(0,0,16)}</g>
 <rect y="102" width="98" height="98" fill="#ffe1c2"/>${tree(48,186,1.500).replace(/#3aa568|#4fc27f|#6fd08f/g,ORA)}<path class="snow" style="animation-duration:5s" d="M70,120 q5,5 0,10 q-5,-5 0,-10 Z" fill="${ORA}"/>
 <rect x="102" y="102" width="98" height="98" fill="#dff1ff"/><circle cx="150" cy="176" r="16" fill="#fff"/><circle cx="150" cy="150" r="11" fill="#fff"/><circle cx="146" cy="148" r="1.600" fill="${INK}"/><circle cx="154" cy="148" r="1.600" fill="${INK}"/><path d="M150,152 l8,2 -8,2 Z" fill="${ORA}"/><circle class="snow" cx="120" cy="110" r="2.500" fill="#fff"/><circle class="snow" style="animation-delay:-1.500s" cx="180" cy="110" r="2.500" fill="#fff"/>
 <g class="spin" style="animation-duration:8s;transform-origin:100px 100px"><path d="M100,74 a26,26 0 0 1 26,26" fill="none" stroke="${RED}" stroke-width="4" stroke-linecap="round"/><path d="M126,100 l-6,-8 M126,100 l7,-7" stroke="${RED}" stroke-width="4" stroke-linecap="round"/></g>
 <circle cx="100" cy="100" r="16" fill="#fff"/>${at(100,114,.2,cat({tail:false,eyes:'happy'}))}`;

S.society=`${bg('#fff1c9')}<circle cx="100" cy="100" r="86" fill="#ffe7a3"/>
 <circle cx="100" cy="104" r="60" fill="none" stroke="${RED}" stroke-width="3" stroke-dasharray="8 8" class="glow"/>
 ${[[100,70,null],[150,100,'orange'],[130,160,'grey'],[70,160,'cream'],[50,100,'white']].map(([x,y,n])=>at(x,y,.36,n?K(n,{eyes:'happy',armL:80,armR:-80}):cat({eyes:'happy',armL:80,armR:-80}))).join('')}
 <g transform="translate(100,112) scale(.5)">${P.house()}</g>${heartS(100,70,.001,RED)}
 ${heart(100,130,.8,RED,0)}`;

S.tax=`${bg('#e6f1ff')}${floor(180,'#cfe3f7')}
 <path d="M110,84 L150,64 L190,84 Z" fill="#f4f7fb" stroke="#b9c4d8" stroke-width="2"/>${[120,140,160,178].map(x=>`<rect x="${x-4}" y="88" width="8" height="60" rx="2" fill="#f4f7fb" stroke="#b9c4d8" stroke-width="1.500"/>`).join('')}<rect x="108" y="148" width="84" height="32" fill="#dfe6f2"/><rect x="134" y="154" width="32" height="6" rx="3" fill="${INK}"/>
 ${[0,1,2,3].map(k=>`<ellipse cx="50" cy="${120-k*8}" rx="14" ry="5" fill="${SUN}" stroke="#e0a83a" stroke-width="1.500"/>`).join('')}
 <g style="animation:steuer 2.400s ease-in-out infinite">${coin(50,84,9)}</g><style>@keyframes steuer{0%,15%{transform:translate(0,0)}80%,100%{transform:translate(100px,72px)}}</style>
 <path d="M64,84 q50,-20 84,60" fill="none" stroke="${RED}" stroke-width="3" stroke-dasharray="5 7"/>
 ${T(96,70,'%',22,RED,'middle','beat')}
 ${at(50,198,.56,cat({mouth:'wavy',armR:-150,armsFront:true}))}`;
