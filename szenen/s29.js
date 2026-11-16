/* Tag 103–106: data, cover, quite, picture, clear · practice, piece, land, recent, describe · product, doctor, wall, patient, worker · news, test, movie, certain, north */
S.data=`${room('#e6f1ff','#cfe3f7')}
 <rect x="80" y="24" width="110" height="96" rx="8" fill="${INK}"/><rect x="86" y="30" width="98" height="84" rx="4" fill="#1f1b4d"/>
 ${[0,1,2,3,4].map(i=>`<rect class="chew" style="transform-origin:center bottom;animation-delay:${i*.15}s;animation-duration:.9s" x="${94+i*10}" y="${[70,56,80,62,74][i]}" width="7" height="${106-[70,56,80,62,74][i]}" fill="${[RED,SUN,MINT,SKY,VIO][i]}"/>`).join('')}
 <circle cx="164" cy="56" r="14" fill="${SKY}"/><path d="M164,56 v-14 a14,14 0 0 1 12,21 Z" fill="${SUN}"/>${T(164,96,'01 10',9,MINT)}
 <rect x="120" y="120" width="30" height="10" fill="#9aa8c0"/><rect x="100" y="130" width="70" height="6" rx="3" fill="#9aa8c0"/>
 ${at(46,192,.84,cat({hat:glasses,eyes:'wide',armR:-110,armsFront:true}))}`;

S.cover=`${room('#ffe9d6','#ffd9bd',170)}
 <g transform="translate(110,186) scale(1.5)">${P.bed}</g>
 ${at(74,164,.5,K('orange',{tail:false,eyes:'closed'}))}
 <g style="animation:decke 3s ease-in-out infinite alternate"><path d="M70,150 q50,-24 120,0 v26 h-120 Z" fill="${VIO}"/><path d="M70,150 q50,-24 120,0" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="6 6"/></g><style>@keyframes decke{from{transform:translateX(40px)}to{transform:translateX(0)}}</style>
 ${arrow(150,110,96,110,RED,6,'glow')}
 ${sh(30,192,24)}${at(30,190,.72,cat({eyes:'happy',armR:-96,armsFront:true}))}${T(64,112,'z z',14,VIO,'middle','zz')}`;

S.quite=`${bg('#fff1c9')}${floor(184,'#ffe08a')}
 <g opacity=".5">${at(40,184,.5,P.boxClosed(60,50))}</g>
 <g class="pulse" style="transform-origin:130px 184px">${at(130,184,1,P.boxClosed(100,90))}</g>
 <path d="M70,60 h120" stroke="#cbc2e6" stroke-width="6" stroke-linecap="round"/><path d="M70,60 h84" stroke="${RED}" stroke-width="6" stroke-linecap="round"/><circle cx="154" cy="60" r="8" fill="${RED}" class="beat"/>
 ${at(40,200,.5,cat({eyes:'wide',mouth:'o',armR:-140,armsFront:true}))}`;

S.picture=`${room('#fff1c9','#e4b77a')}
 <path d="M96,180 l24,-130 M164,180 l-24,-130 M130,180 v-110" stroke="#b07a45" stroke-width="4" stroke-linecap="round"/>
 <rect x="92" y="40" width="76" height="90" rx="3" fill="#fff" stroke="#b07a45" stroke-width="3"/><rect x="98" y="46" width="64" height="78" fill="#cdeeff"/><circle cx="146" cy="62" r="8" fill="${SUN}"/><path d="M98,110 q30,-18 64,0 v14 h-64 Z" fill="#8fe0a8"/><path d="M112,110 l10,-22 10,22 Z" fill="${RED}" class="draw"/>
 ${sh(46,192,30)}${at(46,190,.86,cat({bow:false,hat:barett,mouth:'tongue',armR:-110,armRcls:'bob',armsFront:true,prop:`<path d="M0,2 l10,-22" stroke="#b07a45" stroke-width="3" stroke-linecap="round"/><path d="M10,-20 l3,-7" stroke="${RED}" stroke-width="5" stroke-linecap="round"/>`}))}`;

S.clear=`${bg('#cdeeff')}${sun(160,30,12)}
 <rect x="20" y="30" width="110" height="130" rx="8" fill="#eaf7ff" stroke="#fff" stroke-width="6"/><path d="M36,60 l20,-20 M40,90 l40,-40" stroke="#fff" stroke-width="5" stroke-linecap="round" class="glow"/>
 <clipPath id="clr"><rect x="23" y="33" width="104" height="124"/></clipPath><g clip-path="url(#clr)">${at(76,190,.76,K('orange',{eyes:'happy',armR:-125,armRcls:'wave',armsFront:true}))}</g>
 ${floor(176,'#8fe0a8')}
 ${at(160,196,.6,cat({eyes:'happy',armL:125,armLcls:'wave',armsFront:true}))}
 ${spark(126,36,8,'#fff',0)}${spark(24,160,7,'#fff',.6)}`;

S.practice=`${room('#ece6ff','#d6ccf5')}
 <rect x="8" y="14" width="90" height="34" rx="8" fill="#fff"/>${[0,1,2,3,4].map(i=>`<g class="twinkle" style="animation-delay:${i*.25}s">${check(22+i*16,32,5,3)}</g>`).join('')}
 ${note(150,50,RED,0)}${note(176,80,SKY,.7)}${note(130,90,VIO,1.2)}
 ${sh(90,192,36)}${at(90,190,1,cat({eyes:'closed',mouth:'open',armL:40,armR:-50,armRcls:'bob',armsFront:true,mid:guitar}))}
 <g class="spin" style="animation-duration:5s;transform-origin:166px 150px"><path d="M166,130 a20,20 0 1 1 -18,12" fill="none" stroke="${RED}" stroke-width="4" stroke-linecap="round"/><path d="M148,142 l-2,-10 M148,142 l10,-2" stroke="${RED}" stroke-width="4" stroke-linecap="round"/></g>`;

S.piece=`${bg('#e3fbf5')}${floor(170,MINT)}<rect y="170" width="200" height="8" fill="#9be6d8"/>
 <g opacity=".5"><ellipse cx="70" cy="150" rx="46" ry="12" fill="#fff"/><path d="M34,150 v-26 a36,10 0 0 1 72,0 v26 a36,10 0 0 1 -72,0" fill="#ffd98a"/><ellipse cx="70" cy="124" rx="36" ry="10" fill="#fff8e6"/><path d="M70,124 l30,-6 v30" fill="#e3fbf5"/></g>
 <g class="hop"><g transform="translate(140,120)"><path d="M-22,10 l44,-12 v26 l-44,12 Z" fill="#ffd98a"/><path d="M-22,10 l44,-12 -30,-8 Z" fill="#fff8e6"/><path d="M-22,20 l44,-12" stroke="${RED}" stroke-width="4"/><circle cx="0" cy="-8" r="5" fill="${RED}"/></g></g>
 ${ring(140,124,36,RED)}
 ${at(170,200,.5,cat({eyes:'spark',mouth:'tongue',tail:false,armL:150,armsFront:true}))}`;

S.land=`${bg('#cdeeff')}${sun(160,28,10)}${cloud(40,24,.7)}
 <path d="M0,140 q50,-10 100,0 t100,0 v60 h-200 Z" fill="#5cc3ff"/><path class="ripple" d="M20,170 q10,-6 20,0 M150,180 q10,-6 20,0" fill="none" stroke="#fff" stroke-width="2"/>
 <path d="M50,150 q50,-60 110,0 Z" fill="#f3d9a4"/><path d="M70,140 q30,-34 70,0 Z" fill="#8fe0a8"/>${tree(120,126,.9)}
 <path d="M96,126 v-36" stroke="#b07a45" stroke-width="3"/><path class="flower" d="M96,90 l22,7 -22,7 Z" fill="${RED}"/>
 ${at(84,132,.36,cat({eyes:'happy',armR:-150,armsFront:true}))}
 <g class="sway"><path d="M14,150 h30 l-6,10 h-18 Z" fill="#b07a45"/><path d="M28,150 v-22 l12,16 Z" fill="#fff"/></g>`;

S.recent=`${bg('#fff1c9')}${floor(184,'#ffe08a')}
 <rect x="20" y="20" width="160" height="60" rx="10" fill="#fff"/><rect x="20" y="20" width="160" height="14" rx="7" fill="${RED}"/>
 ${[0,1,2,3,4].map(i=>`<rect x="${28+i*30}" y="42" width="24" height="30" rx="5" fill="${i==3?SUN:'#f4f1fb'}"/>`).join('')}${ring(130,57,20,RED)}<circle cx="160" cy="57" r="5" fill="${INK}"/>
 ${arcArrow(160,90,130,90,-12,VIO,3,'')}
 <g class="hop"><g transform="translate(140,180) scale(.5)">${P.gift(VIO,SUN)}</g></g>${spark(160,150,7,SUN,0)}${T(140,130,'new',14,RED,'middle','beat')}
 ${sh(60,192,30)}${at(60,190,.84,cat({eyes:'happy',mouth:'open',armR:-96,armsFront:true}))}`;

S.describe=`${park()}${cloud(160,24,.7)}
 ${speech(70,44,110,60,`${fishAt(44,48,1.400,0)}${T(70,54,'big',11,INK)}<circle cx="96" cy="48" r="8" fill="${ORA}"/>${T(116,54,'orange',9,INK)}<path d="M30,66 h80" stroke="#cbc2e6" stroke-width="3" stroke-linecap="round"/>`,60,96)}
 ${sh(56,192,30)}${at(56,190,.84,cat({eyes:'happy',mouth:'open',mouthCls:'chew',armL:120,armR:-120,armsFront:true}))}
 ${sh(150,192,28)}${at(150,190,.76,K('grey',{eyes:'closed',headCls:'tilt'}))}
 ${think(166,96,22,16,`${fishAt(166,104,1,0)}`,-1)}`;

S.product=`${room('#fff1c9','#e4b77a')}
 <rect x="20" y="40" width="160" height="8" rx="3" fill="#b07a45"/><rect x="20" y="100" width="160" height="8" rx="3" fill="#b07a45"/>
 ${[36,70,104,138].map((x,i)=>`<rect x="${x}" y="64" width="22" height="36" rx="4" fill="${[SKY,MINT,SUN,VIO][i]}"/><rect x="${x+4}" y="74" width="14" height="10" fill="#fff"/>`).join('')}
 <g class="hop"><rect x="150" y="118" width="30" height="48" rx="5" fill="${RED}"/><rect x="155" y="130" width="20" height="16" fill="#fff"/><g transform="translate(165,138) scale(.8)">${P.fish}</g></g>
 <g class="twinkle">${star5(184,112,8,SUN)}</g>${T(165,186,'NEW',11,RED)}
 ${sh(70,192,32)}${at(70,190,.88,cat({eyes:'spark',mouth:'o',armR:-110,armsFront:true}))}`;

S.doctor=`${room('#e3fbf5','#bff0de')}
 <g class="beat"><circle cx="160" cy="44" r="20" fill="#fff"/><path d="M160,32 v24 M148,44 h24" stroke="${RED}" stroke-width="7" stroke-linecap="round"/></g>
 ${sh(80,192,36)}${at(80,190,1,cat({mid:kittel+`<path d="M-12,-50 q-6,20 6,26 M12,-50 q6,20 -6,26" fill="none" stroke="${INK}" stroke-width="2.500"/><circle cx="0" cy="-22" r="5" fill="#9aa8c0"/>`,hat:glasses,eyes:'happy',mouth:'open',armR:-110,armsFront:true,prop:`<rect x="-10" y="-22" width="20" height="26" rx="2" fill="#c98a4b"/><rect x="-7" y="-18" width="14" height="18" fill="#fff"/>`}))}
 ${heart(150,110,.8,RED,0)}`;

const ziegel=(x,y,w,h)=>Array.from({length:Math.floor(h/14)},(_,r)=>Array.from({length:Math.ceil(w/28)+1},(_,c)=>`<rect x="${x+c*28-(r%2?14:0)}" y="${y+r*14}" width="26" height="12" rx="2" fill="${ORA}"/>`).join('')).join('');
S.wall=`${bg('#cdeeff')}${cloud(40,24,.7)}${floor(176,'#8fe0a8')}
 <rect x="50" y="78" width="150" height="100" fill="#b5571a"/><clipPath id="wl"><rect x="50" y="78" width="150" height="100"/></clipPath><g clip-path="url(#wl)">${ziegel(50,80,150,98)}</g>
 ${at(150,82,.4,K('orange',{eyes:'happy',armL:20,armR:-20}))}
 ${arrow(30,60,46,90,RED,6,'float')}
 ${at(30,196,.6,cat({eyes:'wide',headCls:'tilt',armR:-140,armsFront:true}))}`;

S.patient=`${room('#e3fbf5','#bff0de',170)}
 <g transform="translate(120,186) scale(1.5)">${P.bed}</g>
 ${at(84,164,.56,cat({tail:false,mouth:'wavy',eyes:'open',hat:`<path d="M-30,-104 q30,-14 60,0 v10 h-60 Z" fill="#fff" stroke="#cbc2e6" stroke-width="1.500"/>`}))}<path d="M92,150 q40,-22 100,0 v24 h-100 Z" fill="#fff" stroke="#cbc2e6" stroke-width="2"/>
 <path d="M94,140 l16,-10" stroke="${RED}" stroke-width="3" stroke-linecap="round"/>
 ${ring(84,134,34,RED)}
 ${at(30,192,.6,K('white',{mid:kittel,hat:glasses.replace(/#fff/g,INK),eyes:'happy',armR:-96,armsFront:true}))}
 ${heart(150,100,.8,RED,0)}`;

S.worker=`${park(170)}${cloud(150,24,.7)}
 <path d="M130,186 l20,-40 20,40 Z" fill="${ORA}"/><path d="M140,170 h20" stroke="#fff" stroke-width="5"/>
 <path d="M20,186 q20,-26 50,0 Z" fill="#b07a45"/>
 ${sh(90,192,36)}${at(90,190,.98,cat({bow:false,hat:P.hatHard,eyes:'happy',mouth:'big',armR:-110,armRcls:'bob',armsFront:true,mid:`<path d="M-22,-46 h44 v34 h-44 Z" fill="${ORA}"/><path d="M-22,-34 h44 M-22,-22 h44" stroke="${SUN}" stroke-width="4"/>`,prop:`<path d="M0,4 v-40" stroke="#b07a45" stroke-width="4" stroke-linecap="round"/><path d="M-9,-36 h18 l-3,-16 h-12 Z" fill="#9aa8c0"/>`}))}
 <path class="sweat" d="${tear(50,90)}" fill="${SKY}"/>`;

S.news=`${room('#fff1c9','#e4b77a')}
 <rect x="110" y="110" width="64" height="60" rx="14" fill="${RED}"/><rect x="104" y="124" width="14" height="50" rx="7" fill="#d93a33"/><rect x="166" y="124" width="14" height="50" rx="7" fill="#d93a33"/>
 ${at(142,164,.66,cat({tail:false,eyes:'wide',mouth:'o',armL:-30,armR:30,armsFront:true,mid:`<g transform="translate(0,-34)"><rect x="-34" y="-24" width="68" height="44" rx="2" fill="#fff" stroke="#cbc2e6" stroke-width="2"/>${T(0,-10,'NEWS',12,INK)}<path d="M-26,-2 h22 M-26,6 h22 M-26,14 h22" stroke="#cbc2e6" stroke-width="2.500"/><rect x="4" y="-4" width="24" height="18" fill="${SKY}"/></g>`}))}
 <g class="beat"><circle cx="50" cy="50" r="22" fill="${SUN}"/>${T(50,60,'!',28,RED)}</g>
 ${at(46,196,.46,K('orange',{eyes:'wide',headCls:'tilt'}))}`;

S.test=`${bg('#e6f1ff')}${floor(150,'#c98a4b')}<rect y="150" width="200" height="8" fill="#e0a868"/>
 <g transform="rotate(-5 130 90)"><rect x="92" y="34" width="84" height="110" rx="3" fill="#fff" stroke="#cbc2e6" stroke-width="2"/>
 ${[0,1,2,3].map(i=>`<rect x="100" y="${48+i*22}" width="12" height="12" rx="2" fill="none" stroke="${INK}" stroke-width="2"/><path d="M118,${54+i*22} h48" stroke="#cbc2e6" stroke-width="3" stroke-linecap="round"/>${i<3?`<g class="twinkle" style="animation-delay:${i*.3}s">${check(106,54+i*22,4,2.500)}</g>`:''}`).join('')}
 <g class="beat">${T(160,48,'A+',16,RED)}</g></g>
 ${at(50,196,.76,cat({hat:glasses,mouth:'tongue',tail:false,armR:-84,armRcls:'bob',prop:`<path d="M0,2 l12,-16" stroke="${SUN}" stroke-width="4" stroke-linecap="round"/>`}))}
 <g class="ring">${at(176,180,.3,P.clock(28,60))}</g>`;

S.movie=`${bg('#2d2a6e')}
 <rect x="20" y="14" width="160" height="96" rx="6" fill="#fff"/><rect x="26" y="20" width="148" height="84" fill="#cdeeff"/><path d="M26,90 q74,-20 148,0 v14 h-148 Z" fill="#8fe0a8"/>
 <clipPath id="mv"><rect x="26" y="20" width="148" height="84"/></clipPath><g clip-path="url(#mv)"><g class="road" style="animation-duration:3s;animation-direction:reverse"><g transform="translate(60,98) scale(-.34,.34)">${K('orange',{feet:'run',mid:`<path d="M-20,-52 q-30,10 -50,-6 q20,26 50,22 Z" fill="${RED}"/>`})}</g></g></g>
 <path d="M0,150 h200 v50 h-200 Z" fill="#1f1b4d"/>
 ${at(70,196,.6,cat(Object.assign({eyes:'spark',tail:false,armR:-70,prop:`<g transform="translate(2,4)"><path d="M-10,-14 h20 l-4,22 h-12 Z" fill="${RED}"/><path d="M-6,-14 v22 M2,-14 v22" stroke="#fff" stroke-width="2"/><circle cx="-6" cy="-18" r="5" fill="#fff8e6"/><circle cx="2" cy="-21" r="5" fill="#fff8e6"/><circle cx="8" cy="-17" r="5" fill="#fff8e6"/></g>`},NL)))}
 ${at(130,196,.56,K('grey',{eyes:'wide',tail:false}))}`;

S.certain=`${bg('#e3fbf5')}<circle cx="100" cy="100" r="80" fill="#fff" opacity=".6"/>${floor(184,'#bff0de')}
 <g class="beat"><circle cx="150" cy="50" r="26" fill="${MINT}"/><path d="M138,50 l9,9 16,-18" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></g>
 ${T(40,60,'100%',20,RED,'middle','glow')}
 ${sh(90,192,36)}${at(90,190,1,cat({eyes:'happy',mouth:'w',armL:-150,armR:150,armsFront:true,hat:`<path d="M-22,-84 l10,-4 M22,-84 l-10,-4" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>`}))}`;

const kompass=(hl)=>`<circle cx="100" cy="96" r="64" fill="#fff" stroke="#b07a45" stroke-width="6"/>${[['N',100,52],['E',146,102],['S',100,150],['W',54,102]].map(([l,x,y])=>T(x,y,l,hl==l?22:14,hl==l?RED:'#b9b0d6')).join('')}`;
S.north=`${bg('#cdeeff')}${kompass('N')}
 <g class="wiggle" style="transform-origin:100px 96px"><path d="M100,60 l10,36 h-20 Z" fill="${RED}"/><path d="M100,132 l10,-36 h-20 Z" fill="#9aa8c0"/></g><circle cx="100" cy="96" r="5" fill="${INK}"/>
 ${arrow(100,26,100,6,RED,6,'glow')}
 ${floor(184,'#8fe0a8')}${at(34,200,.5,cat({eyes:'happy',armR:-150,armsFront:true}))}
 <g transform="translate(170,186) scale(.5)"><circle cx="0" cy="-10" r="16" fill="#fff"/><circle cx="0" cy="-32" r="11" fill="#fff"/><circle cx="-4" cy="-34" r="1.600" fill="${INK}"/><circle cx="4" cy="-34" r="1.600" fill="${INK}"/></g>`;
