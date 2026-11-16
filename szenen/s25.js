/* Tag 87–90: wife, whole, police, mind, finally · pull, return, free, military, price · less, according, decision, explain, son · hope, develop, view, relationship, carry */
const schleier=`<path d="M-30,-100 q30,-24 60,0 q14,40 8,70 q-10,-40 -30,-58 q-28,-2 -46,6 Z" fill="#fff" opacity=".85" stroke="#cbc2e6" stroke-width="1.400"/>`;
S.wife=`${bg('#ffe9d6')}<circle cx="100" cy="100" r="84" fill="#ffdcc0"/>${floor(186,'#ffd9bd')}
 ${at(66,188,.92,K('white',{eyes:'happy',hat:schleier+earflower,armR:-60,prop:bouquet}))}${ring(66,130,60,RED)}
 ${at(140,188,.92,K('grey',{eyes:'happy',mid:tie,armL:60}))}
 <g class="beat"><circle cx="96" cy="40" r="10" fill="none" stroke="${SUN}" stroke-width="4"/><circle cx="110" cy="40" r="10" fill="none" stroke="${SUN}" stroke-width="4"/></g>
 ${heart(100,84,1,RED,0)}${arrow(20,30,40,60,RED,5,'float')}`;

S.whole=`${bg('#fff1c9')}<circle cx="100" cy="96" r="80" fill="#ffe7a3"/>
 <g class="pulse" style="transform-origin:100px 96px"><circle cx="100" cy="96" r="62" fill="#f6c27a"/><circle cx="100" cy="96" r="53" fill="${SUN}"/>${[[76,76],[124,70],[136,110],[92,124],[104,92],[66,108]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="7" fill="${RED}"/>`).join('')}</g>
 ${ring(100,96,70,RED)}
 <g opacity=".5"><path d="M170,170 l24,-8 -6,22 Z" fill="${SUN}" stroke="#f6c27a" stroke-width="3"/></g>
 ${floor(186,'#ffe08a')}${at(40,198,.56,cat({eyes:'spark',mouth:'tongue',armR:-150,armsFront:true}))}`;

const polcap=`<path d="M-28,-98 q0,-26 28,-26 q28,0 28,26 Z" fill="#2f6fd0"/><path d="M-32,-98 h64 q4,0 0,7 h-64 q-4,-7 0,-7" fill="${INK}"/>${star5(0,-110,6,SUN)}`;
S.police=`${park(166)}${floor(172,'#6b7a99')}<path d="M0,186 h200" stroke="#fff" stroke-width="3" stroke-dasharray="14 14"/>
 <g class="road" style="animation-duration:2.400s"><g transform="translate(190,170) scale(.5)">${P.car('#fff')}<rect x="-8" y="-62" width="16" height="10" rx="3" fill="${SKY}" class="glow"/><rect x="-40" y="-20" width="80" height="6" fill="#2f6fd0"/></g></g>
 ${sh(70,192,34)}${at(70,190,.94,K('orange',{hat:polcap,mouth:'open',armL:140,armR:-92,armsFront:true,mid:`<path d="M-22,-46 h44 v34 h-44 Z" fill="#2f6fd0"/>${star5(-10,-32,5,SUN)}`}))}
 <ellipse cx="112" cy="140" rx="12" ry="13" fill="#fff" stroke="#cbc2e6" stroke-width="1.600"/>
 ${at(170,150,.3,cat({eyes:'happy',tail:false}))}`;

S.mind=`${bg('#ece6ff')}<circle cx="100" cy="92" r="84" fill="#f6f2ff"/>
 <clipPath id="mi"><rect width="200" height="176"/></clipPath><g clip-path="url(#mi)">${at(100,250,1.8,cat({tail:false,eyes:'closed',bow:false}))}</g>
 <g opacity=".95">${gear(84,56,14,SKY,5)}${gear(110,66,10,RED,3.500,true)}${gear(98,40,8,SUN,3)}</g>
 <circle class="glow" cx="100" cy="54" r="40" fill="none" stroke="${VIO}" stroke-width="3" stroke-dasharray="6 8"/>
 ${floor(176,'#d6ccf5')}${spark(160,40,7,SUN,0)}${spark(36,50,6,SUN,.6)}`;

S.finally=`${bg('#ffd9a8')}<circle cx="40" cy="60" r="26" fill="${SUN}"/>${hills('#8fe0a8','#6fd08f',170)}
 ${at(140,180,1.4,P.house())}${heartS(140,40,1.4,RED,'beat')}
 <path d="M0,190 q50,-8 104,-12" fill="none" stroke="#f3d9a4" stroke-width="14" stroke-linecap="round"/>
 <g transform="translate(56,192) scale(-.74,.74)"><g class="walkbob" style="animation-duration:.9s">${cat({eyes:'closed',mouth:'big',armL:0,armLcls:'slowA',armR:-20,feet:'walk',prop:`<g transform="translate(0,22)">${koffer}</g>`})}</g></g>
 <path class="sweat" d="${tear(30,110)}" fill="${SKY}"/>${spark(100,120,7,'#fff',0)}`;

S.pull=`${park(172)}${cloud(150,24,.7)}
 <g class="road" style="animation-duration:1.200s"><path d="M-40,190 h320" stroke="#6fd08f" stroke-width="4" stroke-dasharray="10 30" stroke-linecap="round"/></g>
 <g class="walkbob"><rect x="110" y="140" width="70" height="30" rx="4" fill="${RED}"/><circle cx="124" cy="176" r="9" fill="${INK}"/><circle cx="166" cy="176" r="9" fill="${INK}"/>
 <g transform="translate(130,140) scale(.6)">${P.gift(VIO,SUN)}</g><g transform="translate(160,140) scale(.8)">${P.ball(SKY)}</g><g transform="translate(146,140) scale(.36)">${K('cream',{eyes:'happy',tail:false})}</g></g>
 <path d="M110,154 L76,140" stroke="#b07a45" stroke-width="3"/>
 <g transform="translate(52,192) scale(-.8,.8)"><g class="walkbob">${cat({armL:60,armR:0,armRcls:'slowB',feet:'walk',eyes:'closed',mouth:'big'})}</g></g>
 ${arrow(60,70,20,70,RED,7,'glow')}`;

S.return=`${room('#ece6ff','#d6ccf5')}
 <rect x="110" y="20" width="80" height="160" rx="6" fill="#b07a45"/><rect x="116" y="26" width="68" height="46" fill="#8a5a30"/><rect x="116" y="78" width="68" height="46" fill="#8a5a30"/><rect x="116" y="130" width="68" height="44" fill="#8a5a30"/>
 ${[[RED,0],[SUN,1],[MINT,2],[VIO,3],[SKY,4]].map(([c,i])=>`<rect x="${120+i*12}" y="42" width="10" height="30" rx="2" fill="${c}"/>`).join('')}${[[SKY,0],[ORA,2],[RED,3],[MINT,4]].map(([c,i])=>`<rect x="${120+i*12}" y="94" width="10" height="30" rx="2" fill="${c}"/>`).join('')}
 <g class="givemove"><rect x="100" y="94" width="10" height="30" rx="2" fill="${SUN}"/></g>
 <g class="glow"><path d="M40,60 q30,-34 60,-6" fill="none" stroke="${RED}" stroke-width="5" stroke-linecap="round"/><path d="M100,54 l-13,-3 M100,54 l-2,-13" stroke="${RED}" stroke-width="5" stroke-linecap="round"/></g>
 ${sh(56,192,32)}${at(56,190,.9,cat({eyes:'happy',armR:-100,armsFront:true}))}`;

S.free=`${bg('#cdeeff')}${cloud(40,40,.8)}${sun(170,30,10)}${hills('#8fe0a8','#6fd08f',170)}
 <path d="M112,170 v-70 q0,-26 26,-26 q26,0 26,26 v70 Z" fill="none" stroke="#b07a45" stroke-width="3"/><path d="M125,170 v-90 M138,170 v-96 M151,170 v-90" stroke="#b07a45" stroke-width="2"/><rect x="108" y="168" width="60" height="8" rx="3" fill="#8a5a30"/>
 <path d="M112,110 l-22,-10 v60 l22,10" fill="none" stroke="#b07a45" stroke-width="3" stroke-linejoin="round"/>
 <g class="flutter"><g transform="translate(60,60)"><ellipse cx="0" cy="0" rx="10" ry="7" fill="${SKY}"/><circle cx="9" cy="-4" r="5" fill="${SKY}"/><path d="M13,-4 l6,2 -6,2 Z" fill="${ORA}"/><circle cx="10" cy="-5" r="1.200" fill="${INK}"/><g class="flap"><path d="M-2,-2 q-10,-16 -16,-2 Z" fill="#2f6fd0"/></g></g></g>
 ${arcArrow(96,120,64,76,20,RED,4,'6 8')}
 ${at(40,194,.7,cat({eyes:'happy',mouth:'open',armR:-128,armRcls:'wave',armsFront:true}))}`;

const helm=`<path d="M-30,-96 q0,-32 30,-32 q30,0 30,32 Z" fill="#7a9a5a"/><rect x="-34" y="-100" width="68" height="7" rx="3" fill="#5f7f44"/>`;
S.military=`${room('#fff1c9','#ffe08a')}
 ${[0,1,2,3].map(i=>`<g class="walkbob" style="animation-delay:${i*.14}s"><g transform="translate(${110+i*24},186)"><rect x="-6" y="-26" width="12" height="20" rx="3" fill="${RED}"/><circle cx="0" cy="-32" r="6" fill="#ffcf9e"/><rect x="-6" y="-44" width="12" height="9" rx="2" fill="${INK}"/><rect x="-5" y="-8" width="4" height="10" fill="${INK}"/><rect x="1" y="-8" width="4" height="10" fill="${INK}"/><path d="M7,-24 v-18" stroke="#b07a45" stroke-width="2"/></g></g>`).join('')}
 <g class="wiggle"><ellipse cx="170" cy="130" rx="16" ry="6" fill="#fff8e6" stroke="${RED}" stroke-width="2"/><rect x="154" y="130" width="32" height="18" fill="${RED}"/><ellipse cx="170" cy="148" rx="16" ry="6" fill="#b52f29"/></g>
 ${sh(54,192,32)}${at(54,190,.92,cat({bow:false,hat:helm,eyes:'happy',armR:-150,armsFront:true}))}
 ${note(120,110,VIO,0)}${note(150,96,SKY,.8)}`;

S.price=`${bg('#fff1c9')}${floor(170,'#c98a4b')}<rect y="170" width="200" height="8" fill="#e0a868"/>
 <g transform="translate(120,168)">${P.plate(44)}</g><g transform="translate(120,150) scale(3.200)">${P.fish}</g>
 <g class="sway" style="transform-origin:70px 60px"><path d="M70,60 q20,30 34,62" fill="none" stroke="${INK}" stroke-width="1.500"/><g transform="translate(60,54) rotate(-14)"><path d="M-26,-16 h40 l14,16 -14,16 h-40 Z" fill="#fff" stroke="${RED}" stroke-width="3"/><circle cx="16" cy="0" r="3" fill="${RED}"/>${coin(-14,0,8)}${coin(2,0,8)}</g></g>
 ${ring(58,54,34,RED)}
 ${at(170,198,.5,cat({eyes:'wide',mouth:'o',tail:false,armR:-150,armsFront:true}))}`;

S.less=`${bg('#fff1c9')}${floor(150,MINT)}<rect y="150" width="200" height="8" fill="#9be6d8"/>
 ${at(52,140,.56,K('orange',{eyes:'happy',tail:false}))}<g transform="translate(52,184)">${P.plate(40)}</g>${fishAt(36,174,1.200,10)}${fishAt(60,176,1.200,-10)}${fishAt(46,166,1.200,0)}${fishAt(70,168,1.200,16)}${fishAt(52,158,1.200,-6)}
 ${at(150,140,.58,cat({mouth:'wavy',tail:false}))}<g transform="translate(150,184)">${P.plate(40)}</g>${fishAt(150,174,1.200,0)}
 ${ring(150,176,34,RED)}
 <g class="beat"><circle cx="100" cy="60" r="20" fill="#fff"/><path d="M90,60 h20" stroke="${RED}" stroke-width="7" stroke-linecap="round"/></g>`;

S.according=`${park(170)}${cloud(150,24,.7)}
 ${pin(150,170)}<ellipse class="ripple" cx="150" cy="174" rx="18" ry="5" fill="none" stroke="${RED}" stroke-width="2.500"/>${cross(150,186,6,4)}
 <path d="M96,130 q24,-20 44,20" fill="none" stroke="${RED}" stroke-width="3" stroke-dasharray="5 7" class="glow"/>
 ${sh(60,192,34)}${at(60,190,.96,cat({eyes:'happy',armL:-30,armR:30,armsFront:true,mid:`<g transform="translate(0,-26) scale(1.2)"><path d="M-22,-12 l14,4 16,-4 14,4 v22 l-14,-4 -16,4 -14,-4 Z" fill="#fff" stroke="#cbc2e6" stroke-width="1.600"/><path d="M-14,4 q8,-10 16,-2 t12,-6" fill="none" stroke="${RED}" stroke-width="1.800" stroke-dasharray="2 3"/><path d="M12,-8 l4,4 M16,-8 l-4,4" stroke="${RED}" stroke-width="1.800"/></g>`}))}`;

S.decision=`${bg('#ece6ff')}${floor(170,'#9aa8c0')}<rect y="170" width="200" height="8" fill="#b9c4d8"/>
 <ellipse cx="60" cy="160" rx="30" ry="10" fill="#7a8aa6"/><g opacity=".6"><path d="M36,156 a24,18 0 0 1 48,0 Z" fill="${SKY}"/></g>
 <ellipse cx="140" cy="160" rx="30" ry="10" fill="#7a8aa6"/><g class="hop" style="animation-direction:alternate-reverse"><path d="M116,156 a24,18 0 0 1 48,0 Z" fill="${RED}"/></g>
 <g class="beat">${check(140,60,14,7)}</g><g opacity=".5">${T(60,74,'?',30,SKY)}</g>
 ${at(140,150,.46,cat({eyes:'happy',mouth:'open',armL:-30,armR:30,armsFront:true,tail:false}),'hop')}`;

S.explain=`${bg('#fff1c9')}
 <rect x="60" y="14" width="130" height="86" rx="6" fill="#3aa568" stroke="#b07a45" stroke-width="5"/>
 <g transform="translate(86,56) scale(1.5)">${P.fish.replace(/#ff8a3c|#ffa53c/g,'#fff')}</g><path d="M108,56 h10 M113,51 v10" stroke="#fff" stroke-width="3" stroke-linecap="round"/><path d="M130,48 q-8,12 0,16 q8,-4 0,-16 Z" fill="#fff"/><path d="M146,52 h10 M146,60 h10" stroke="#fff" stroke-width="3" stroke-linecap="round"/><path d="${heartP}" transform="translate(174,60) scale(1)" fill="#fff"/>
 ${floor(184,'#ffe08a')}
 ${sh(50,192,32)}${at(50,190,.9,cat({hat:glasses,mouth:'open',armR:-128,armsFront:true,armRcls:'bob',prop:`<path d="M0,4 l10,-30" stroke="#b07a45" stroke-width="3" stroke-linecap="round"/>`}))}
 ${at(150,194,.5,K('orange',{eyes:'wide',headCls:'tilt'}))}<g class="beat"><g transform="translate(176,130) scale(.6)">${P.bulb}</g></g>`;

S.son=`${park()}${cloud(40,26,.7)}
 ${sh(60,192,34)}${at(60,190,.96,K('grey',{eyes:'happy',mid:tie,hat:bart,armR:-70}))}
 ${sh(140,192,22)}${at(140,190,.56,K('grey',{eyes:'happy',mouth:'open',armL:130,armR:-130,armsFront:true,hat:`<g transform="translate(0,36)">${mütze}</g>`}),'hop')}${ring(140,160,38,RED)}
 <g transform="translate(100,150)"><g class="jump">${P.ball(RED)}</g></g>${arrow(184,60,164,100,RED,6,'float')}`;

S.hope=`${bg('#cdeeff')}
 <g class="cloud"><ellipse cx="50" cy="40" rx="34" ry="14" fill="#b9c9dd"/><ellipse cx="80" cy="32" rx="26" ry="16" fill="#cfdbea"/></g>
 ${[RED,ORA,SUN,MINT,SKY,VIO].map((c,i)=>`<path class="glow" style="animation-delay:${i*.15}s" d="M${60+i*6},170 a${70-i*6},${70-i*6} 0 0 1 ${140-i*12},0" fill="none" stroke="${c}" stroke-width="6" opacity=".85"/>`).join('')}
 <g transform="translate(160,56) scale(.8)">${sun(0,0,12)}</g>
 ${hills('#8fe0a8','#6fd08f',166)}${sprout(150,176,16)}
 ${sh(64,190,34)}${at(64,188,.94,cat({eyes:'spark',armL:-46,armR:46,armsFront:true,headCls:'tilt'}))}${heart(100,110,.8,RED,0)}`;

S.develop=`${bg('#d9fbf1')}<path d="M0,120 q50,-12 100,0 t100,0 v80 h-200 Z" fill="#5cc3ff" opacity=".7"/>
 ${[36,100,164].map(x=>`<circle cx="${x}" cy="80" r="30" fill="#fff"/>`).join('')}
 <circle cx="36" cy="80" r="10" fill="${INK}"/><path class="wiggle" d="M36,90 q4,14 -6,20" fill="none" stroke="${INK}" stroke-width="5" stroke-linecap="round"/>
 <ellipse cx="100" cy="78" rx="13" ry="10" fill="#4fc27f"/><path d="M90,86 l-8,8 M110,86 l8,8" stroke="#4fc27f" stroke-width="4" stroke-linecap="round"/><path class="wiggle" d="M100,88 q3,10 -4,14" fill="none" stroke="#4fc27f" stroke-width="4" stroke-linecap="round"/><circle cx="96" cy="74" r="2" fill="${INK}"/><circle cx="104" cy="74" r="2" fill="${INK}"/>
 <g transform="translate(164,90) scale(.8)"><g class="hop"><ellipse cx="-16" cy="6" rx="10" ry="5" fill="#3aa568"/><ellipse cx="16" cy="6" rx="10" ry="5" fill="#3aa568"/><ellipse cx="0" cy="0" rx="22" ry="15" fill="#4fc27f"/><circle cx="-10" cy="-14" r="7.500" fill="#4fc27f"/><circle cx="10" cy="-14" r="7.500" fill="#4fc27f"/><circle cx="-10" cy="-15" r="3" fill="${INK}"/><circle cx="10" cy="-15" r="3" fill="${INK}"/><path d="M-8,-3 q8,6 16,0" fill="none" stroke="${INK}" stroke-width="1.800" stroke-linecap="round"/></g></g>
 ${arrow(66,80,70,80,RED,4,'glow')}${arrow(130,80,134,80,RED,4,'glow')}
 ${at(100,198,.5,cat({eyes:'wide',mouth:'o',tail:false}))}`;

S.view=`${bg('#ffd9a8')}<circle cx="100" cy="90" r="34" fill="${SUN}"/>
 <path d="M0,130 l40,-50 30,30 40,-60 50,60 40,-30 v50 Z" fill="#b9a0d6"/><path d="M110,50 l-14,21 10,-5 8,8 10,-8 Z" fill="#fff"/>
 <path d="M0,130 h200 v20 h-200 Z" fill="#9fd4f0"/><path d="M0,150 q100,-16 200,0 v50 h-200 Z" fill="#8fe0a8"/>
 <rect x="14" y="14" width="172" height="130" rx="8" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="12 10" class="glow"/>
 <rect x="60" y="160" width="80" height="7" rx="3" fill="#b07a45"/><rect x="66" y="167" width="6" height="22" fill="#8a5a30"/><rect x="128" y="167" width="6" height="22" fill="#8a5a30"/>
 ${at(100,162,.6,cat({eyes:'happy',tail:true}))}`;

S.relationship=`${bg('#ffe9d6')}${floor(186,'#ffd9bd')}
 <path d="M50,96 Q100,30 150,96" fill="none" stroke="${RED}" stroke-width="4" stroke-dasharray="8 8" class="glow"/>
 ${heartS(100,60,2.400,RED,'beat')}
 ${sh(50,192,30)}${at(50,190,.84,cat({eyes:'happy',armR:-80}))}
 ${sh(150,192,30)}${at(150,190,.84,K('orange',{eyes:'happy',armL:80}))}
 <path d="M76,150 h48" stroke="${SUN}" stroke-width="5" stroke-linecap="round"/><circle cx="100" cy="150" r="7" fill="${SUN}"/>`;

S.carry=`${room('#e3fbf5','#bff0de')}
 <g class="road"><path d="M-40,192 h320" stroke="#9fe6d2" stroke-width="4" stroke-dasharray="10 30" stroke-linecap="round"/></g>
 <g transform="translate(96,190)"><g class="walkbob"><g transform="scale(-.9,.9)">${cat({armL:-70,armR:-70,armsFront:true,feet:'walk',eyes:'closed',mouth:'big'})}</g>
 <g class="sway" style="transform-origin:34px -60px"><rect x="10" y="-80" width="52" height="34" rx="3" fill="#d9a56a"/><rect x="16" y="-110" width="40" height="30" rx="3" fill="#e4b77a"/><rect x="22" y="-134" width="28" height="24" rx="3" fill="#d9a56a"/><rect x="30" y="-80" width="10" height="34" fill="#c98a4b" opacity=".6"/></g></g></g>
 <path class="sweat" d="${tear(60,90)}" fill="${SKY}"/>${arrow(150,60,186,60,RED,6,'glow')}`;
