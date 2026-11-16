/* Tag 83–86: sell, major, sometimes, require, along · development, themselves, report, role, better · economic, effort, decide, rate, strong · possible, drug, leader, light, voice */
S.sell=`${park(172)}${sun(30,24,9)}
 <rect x="80" y="110" width="100" height="70" rx="4" fill="${SUN}"/><path d="M74,110 h112 l-8,-22 h-96 Z" fill="${RED}"/><path d="M96,88 v22 M120,88 v22 M144,88 v22 M168,88 v22" stroke="#fff" stroke-width="5"/>
 ${at(130,150,.5,cat({eyes:'happy',mouth:'open',armR:-125,armRcls:'wave',armsFront:true,tail:false}))}<rect x="80" y="140" width="100" height="40" fill="#e4b77a"/>
 <g transform="translate(100,138) scale(.7)">${P.cup(SKY)}</g><g transform="translate(160,138) scale(.7)">${P.cup(SKY)}</g>
 <g transform="translate(130,164) rotate(-6)"><path d="M-20,-10 h30 l10,10 -10,10 h-30 Z" fill="#fff"/>${coin(-6,0,6)}</g>
 ${at(36,194,.5,K('orange',{eyes:'happy',armR:-92,prop:`<g transform="translate(0,8)">${coin(0,0,7)}</g>`}))}`;

const schl=(x,y,s,c)=>`<g transform="translate(${x},${y}) scale(${s})"><circle cx="0" cy="-20" r="10" fill="none" stroke="${c}" stroke-width="6"/><path d="M0,-10 v34 M0,14 h10 M0,24 h8" stroke="${c}" stroke-width="6" stroke-linecap="round"/></g>`;
S.major=`${bg('#ece6ff')}<circle cx="100" cy="90" r="78" fill="#f6f2ff"/>
 <g opacity=".5">${schl(36,70,.7,'#9aa8c0')}${schl(166,70,.7,'#9aa8c0')}${schl(60,120,.5,'#9aa8c0')}${schl(146,120,.5,'#9aa8c0')}</g>
 <g class="beat">${schl(100,72,1.7,SUN)}</g>${ring(100,74,58,RED)}${spark(150,30,8,SUN,0)}
 ${floor(184,'#d6ccf5')}${at(100,198,.54,cat({eyes:'spark',mouth:'o',armL:150,armR:-150,armsFront:true}))}`;

S.sometimes=`${bg('#2d2a6e')}
 <rect x="10" y="14" width="180" height="56" rx="10" fill="#fff"/><rect x="10" y="14" width="180" height="14" rx="7" fill="${RED}"/>
 ${[0,1,2,3,4,5,6].map(i=>`<rect x="${16+i*25.200}" y="34" width="21" height="30" rx="5" fill="#f4f1fb"/>${[1,4].includes(i)?`<g class="twinkle" style="animation-delay:${i*.2}s">${check(26.500+i*25.200,50,6,3.500)}</g>`:''}`).join('')}
 ${floor(180,'#1f1b4d')}<circle class="glow" cx="100" cy="150" r="54" fill="#ffe89a" opacity=".22"/>
 <path d="M160,180 v-46" stroke="#b07a45" stroke-width="4"/><path d="M146,134 l6,-20 h16 l6,20 Z" fill="${SUN}"/>
 ${at(94,188,.9,cat(Object.assign({armL:8,armR:-8,headCls:'tilt',mid:openBook,hat:glasses},NL)))}`;

S.require=`${park(172)}${cloud(40,24,.7)}
 <path d="M150,186 V50" stroke="#9aa8c0" stroke-width="5" stroke-linecap="round"/><rect x="96" y="96" width="60" height="12" rx="4" fill="${RED}"/><path d="M96,102 h-20 M76,102 l7,-5 M76,102 l7,5" fill="none" stroke="${RED}" stroke-width="3" stroke-linecap="round"/>
 <rect x="120" y="34" width="64" height="40" rx="6" fill="#fff" stroke="${RED}" stroke-width="4"/><path d="M152,42 v24 M144,48 l8,-6 8,6 M144,60 l8,6 8,-6" fill="none" stroke="${INK}" stroke-width="2.500" stroke-linecap="round" stroke-linejoin="round"/>
 ${sh(60,192,32)}${at(60,190,.84,cat({eyes:'wide',mouth:'o',armR:-150,armsFront:true}),'hop')}
 <path d="M30,104 h60" stroke="${VIO}" stroke-width="3" stroke-dasharray="5 6" class="glow"/>
 ${at(178,194,.4,K('orange',{hat:cap}))}`;

S.along=`${bg('#cdeeff')}${cloud(40,24,.7)}<path d="M0,120 h200 v80 h-200 Z" fill="#8fe0a8"/>
 <path d="M0,150 h200" stroke="#6b7a99" stroke-width="34"/><path d="M0,150 h200" stroke="#fff" stroke-width="2" stroke-dasharray="12 12"/>
 ${[20,80,140].map(x=>`<path d="M${x},128 v-50" stroke="${INK}" stroke-width="3"/><circle class="glow" cx="${x}" cy="74" r="7" fill="${SUN}"/>`).join('')}
 <path d="M10,186 h180" stroke="#f3d9a4" stroke-width="14"/>
 <g class="road"><path d="M40,100 h130" stroke="${RED}" stroke-width="4" stroke-dasharray="8 12" stroke-linecap="round"/></g>${arrow(170,100,190,100,RED,5)}
 <g transform="translate(90,194) scale(-.6,.6)"><g class="walkbob">${cat({armL:0,armR:0,armLcls:'slowA',armRcls:'slowB',feet:'walk',eyes:'happy'})}</g></g>`;

S.development=`${bg('#e3fbf5')}${floor(176,'#bff0de')}
 ${[[30,20,SKY],[70,44,MINT],[110,72,SUN],[150,104,RED]].map(([x,h,c],i)=>`<rect class="grow" style="transform-origin:center bottom;animation-delay:${i*.3}s" x="${x}" y="${176-h}" width="30" height="${h}" rx="4" fill="${c}"/>`).join('')}
 <path d="M34,150 L84,126 L124,98 L170,60" fill="none" stroke="${INK}" stroke-width="3" stroke-linecap="round" stroke-dasharray="5 6"/>${arrow(160,68,176,54,RED,5,'glow')}
 ${sprout(44,156,10)}<g transform="translate(164,72) scale(.5)">${tree(0,0,1)}</g>
 ${at(100,198,.5,cat({bow:false,hat:P.hatHard,eyes:'happy',armR:-150,armsFront:true}))}`;

S.themselves=`${room('#fff1c9','#ffe08a')}
 <ellipse cx="110" cy="150" rx="74" ry="44" fill="none" stroke="${VIO}" stroke-width="4" stroke-dasharray="10 9"/>
 ${at(84,188,.5,K('orange',{eyes:'happy',armR:-80,armRcls:'bob'}))}${at(140,188,.5,K('grey',{eyes:'happy',armL:80,armLcls:'bob'}))}
 ${block(112,186,SKY,'A').replace(/32/g,'22').replace('20','14')}<g class="hop">${block(112,162,RED,'B').replace(/32/g,'22').replace('20','14')}</g>
 <g opacity=".3">${at(26,150,.5,K('white',{hat:earflower}))}</g>
 <g class="glow"><path d="M150,70 q24,-20 30,10 q2,20 -20,24" fill="none" stroke="${RED}" stroke-width="4" stroke-linecap="round" stroke-dasharray="6 7"/></g>`;

S.report=`${room('#e6f1ff','#cfe3f7')}
 <g class="float"><rect x="96" y="20" width="84" height="110" rx="6" fill="#c98a4b"/><rect x="104" y="30" width="68" height="92" rx="2" fill="#fff"/><rect x="124" y="14" width="28" height="12" rx="4" fill="#9aa8c0"/>
 <rect x="112" y="80" width="10" height="30" fill="${SKY}"/><rect x="128" y="64" width="10" height="46" fill="${MINT}"/><rect x="144" y="48" width="10" height="62" fill="${RED}"/><path d="M112,42 h44 M112,52 h30" stroke="#cbc2e6" stroke-width="3" stroke-linecap="round"/></g>
 ${sh(54,192,32)}${at(54,190,.9,cat({hat:glasses,mid:tie,mouth:'open',armR:-128,armsFront:true,prop:`<path d="M0,2 l10,-28" stroke="#b07a45" stroke-width="3" stroke-linecap="round"/>`}))}
 ${at(170,196,.4,K('grey',{mid:tie,eyes:'happy'}))}`;

const pirat=`<path d="M-30,-98 q30,-34 60,0 Z" fill="${INK}"/><path d="M-34,-98 h68" stroke="${INK}" stroke-width="6" stroke-linecap="round"/><circle cx="0" cy="-110" r="5" fill="#fff"/><path d="M-22,-80 L22,-70" stroke="${INK}" stroke-width="2.500"/><ellipse cx="14" cy="-74" rx="8" ry="7" fill="${INK}"/>`;
S.role=`${bg('#3b2a4a')}<path d="M100,-10 L24,186 h152 Z" fill="#fff6c8" opacity=".22"/>${floor(176,'#8a5a30')}
 <path d="M0,0 h36 q-6,90 0,176 h-36 Z M200,0 h-36 q6,90 0,176 h36 Z" fill="${RED}"/>
 <g class="float"><circle cx="58" cy="40" r="14" fill="${SUN}"/><path d="M52,36 h3 M61,36 h3 M52,44 q6,6 12,0" stroke="${INK}" stroke-width="2" fill="none" stroke-linecap="round"/></g><g class="float" style="animation-delay:.6s"><circle cx="142" cy="40" r="14" fill="#9fd4f0"/><path d="M136,36 h3 M145,36 h3 M136,47 q6,-6 12,0" stroke="${INK}" stroke-width="2" fill="none" stroke-linecap="round"/></g>
 ${at(100,182,.96,cat(Object.assign({bow:false,hat:pirat,mouth:'big',armL:60,armR:-120,armsFront:true,prop:`<path d="M0,2 l6,-34" stroke="#dfe6f2" stroke-width="4" stroke-linecap="round"/><path d="M-6,-2 h12" stroke="${SUN}" stroke-width="4" stroke-linecap="round"/>`},NL)))}`;

S.better=`${bg('#e3fbf5')}${floor(184,'#bff0de')}
 <g opacity=".6" transform="rotate(-6 50 150)">${block(50,184,SKY,'').replace(/32/g,'26')}${block(46,158,SKY,'').replace(/32/g,'26')}${block(56,132,SKY,'').replace(/32/g,'26')}</g>
 ${[0,1,2,3].map(i=>`<rect x="124" y="${158-i*28}" width="40" height="26" rx="5" fill="${[RED,SUN,MINT,VIO][i]}"/>`).join('')}<g class="twinkle">${star5(144,58,10,SUN)}</g>
 ${arrow(76,120,112,100,RED,6,'glow')}<g class="beat">${check(170,40,10,6)}</g>
 ${at(96,198,.5,cat({eyes:'happy',mouth:'open',armR:-125,armsFront:true}))}`;

S.economic=`${bg('#ece6ff')}${floor(180,'#d6ccf5')}
 ${[[30,2],[60,3],[90,5],[120,7]].map(([x,n])=>Array.from({length:n},(_,k)=>`<ellipse cx="${x}" cy="${176-k*8}" rx="13" ry="5" fill="${SUN}" stroke="#e0a83a" stroke-width="1.500"/>`).join('')).join('')}
 <path d="M24,120 L60,104 L90,80 L124,50" fill="none" stroke="${MINT}" stroke-width="5" stroke-linecap="round" class="draw"/>${arrow(116,58,134,40,MINT,5)}
 <rect x="150" y="110" width="40" height="70" fill="#9aa8c0"/><path d="M150,110 l10,-14 v14 l10,-14 v14 l10,-14 v14 l10,-14 v14 Z" fill="#7a8aa6"/><rect x="176" y="70" width="8" height="30" fill="#7a8aa6"/><circle class="smoke" cx="180" cy="64" r="5" fill="#fff"/>
 ${at(70,60,.3,cat({mid:tie,eyes:'happy',tail:false}))}`;

S.effort=`${bg('#ffe9d6')}<path d="M0,200 L200,90 V200 Z" fill="#c9a06a"/>
 <g class="roll" style="animation-duration:1.600s"><g transform="translate(0,0)"><circle cx="124" cy="106" r="30" fill="#9aa8c0"/><path d="M110,96 q10,-8 20,2 M114,118 q12,6 20,-4" stroke="#7a8aa6" stroke-width="3" fill="none"/>
 <g transform="translate(76,158) rotate(-22)"><g transform="scale(.76)">${cat({eyes:'closed',mouth:'big',armL:-60,armR:-100,armsFront:true,feet:'walk'})}</g></g></g></g>
 <path class="sweat" d="${tear(40,90)}" fill="${SKY}"/><path class="sweat" style="animation-delay:.6s" d="${tear(60,70)}" fill="${SKY}"/>
 <path d="M176,96 v-30" stroke="#b07a45" stroke-width="3"/><path class="flower" d="M176,66 l-18,6 18,6 Z" fill="${RED}"/>`;

S.decide=`${park()}${cloud(100,22,.7)}
 <path d="M100,200 V150 Q100,120 40,90 M100,150 Q100,120 160,90" fill="none" stroke="#f3d9a4" stroke-width="18" stroke-linecap="round"/>
 <path d="M100,150 v-50" stroke="#b07a45" stroke-width="4"/><path d="M100,104 h-34 l-8,8 8,8 h34 Z" fill="${SKY}"/><path d="M100,124 h34 l8,8 -8,8 h-34 Z" fill="${SUN}"/>
 <g class="beat">${check(160,60,10,6)}</g><g opacity=".5">${cross(40,60,7,5)}</g>
 ${arrow(116,170,150,120,RED,5,'glow')}
 ${at(100,198,.5,cat({eyes:'happy',armR:-128,armsFront:true}))}`;

S.rate=`${bg('#e3fbf5')}
 <path d="M30,120 a70,70 0 0 1 140,0" fill="none" stroke="#fff" stroke-width="18" stroke-linecap="round"/><path d="M30,120 a70,70 0 0 1 35,-60.600" fill="none" stroke="${MINT}" stroke-width="18" stroke-linecap="round"/><path d="M65,59.400 a70,70 0 0 1 70,0" fill="none" stroke="${SUN}" stroke-width="18"/><path d="M135,59.400 a70,70 0 0 1 35,60.600" fill="none" stroke="${RED}" stroke-width="18" stroke-linecap="round"/>
 <g style="transform-origin:100px 120px;animation:nadel 3s ease-in-out infinite alternate"><path d="M100,120 L100,62" stroke="${INK}" stroke-width="5" stroke-linecap="round"/></g><circle cx="100" cy="120" r="8" fill="${INK}"/>
 <style>@keyframes nadel{from{transform:rotate(-70deg)}to{transform:rotate(60deg)}}</style>
 ${[60,80,100,120].map((x,i)=>star5(x,150,8,SUN)).join('')}${star5(140,150,8,'#fff')}
 ${floor(186,'#bff0de')}${at(30,196,.44,cat({eyes:'wide',armR:-110,armsFront:true}))}`;

S.strong=`${bg('#fff3cf')}<circle cx="100" cy="110" r="78" fill="#ffe7a3"/>${floor(184,'#ffe08a')}${sh(100,190,40)}
 ${at(100,186,1.04,cat({eyes:'happy',mouth:'big',armL:150,armR:-150,armsFront:true}),'pulse')}
 <g class="hop"><g transform="translate(100,42) scale(1.7)">${hantel}</g></g>
 ${spark(30,110,8,SUN,0)}${spark(170,110,8,SUN,.5)}`;

S.possible=`${bg('#cdeeff')}${cloud(40,30,.7)}${sun(170,28,10)}
 <path d="M0,200 V140 h60 v60 Z M200,200 V140 h-60 v60 Z" fill="#8fe0a8"/><path d="M60,200 v-40 h80 v40 Z" fill="#5cc3ff"/>
 <path d="M56,140 q44,-30 88,0" fill="none" stroke="#b07a45" stroke-width="7" stroke-linecap="round"/>${[66,84,100,116,134].map((x,i)=>`<path d="M${x},${136-[4,10,13,10,4][i]} v12" stroke="#8a5a30" stroke-width="3"/>`).join('')}
 <g class="road" style="animation-duration:3s;animation-direction:reverse"><g transform="translate(100,128) scale(.4)">${cat({feet:'walk',eyes:'happy'})}</g></g>
 <g class="beat">${check(100,50,14,7)}</g>${arrow(40,110,160,110,RED,4,'glow')}`;

S.drug=`${room('#e3fbf5','#bff0de')}
 <g class="beat"><circle cx="160" cy="40" r="20" fill="#fff"/><path d="M160,28 v24 M148,40 h24" stroke="${MINT}" stroke-width="7" stroke-linecap="round"/></g>
 <rect x="110" y="110" width="40" height="66" rx="8" fill="#bfe9ff" stroke="#fff" stroke-width="3"/><rect x="118" y="98" width="24" height="14" rx="3" fill="${RED}"/><rect x="114" y="134" width="32" height="20" rx="2" fill="#fff"/><path d="M130,138 v12 M124,144 h12" stroke="${MINT}" stroke-width="3"/>
 <rect x="160" y="150" width="30" height="16" rx="8" fill="#fff"/><path d="M175,150 v16" stroke="#cbc2e6" stroke-width="1.500"/><rect x="160" y="150" width="15" height="16" rx="8" fill="${SUN}"/>
 ${at(170,196,.36,K('orange',{mouth:'wavy',eyes:'closed'}))}
 ${sh(54,192,32)}${at(54,190,.9,cat({mid:kittel,hat:glasses,eyes:'happy',armR:-96,armsFront:true,prop:`<path d="M0,4 l16,-10" stroke="#9aa8c0" stroke-width="3" stroke-linecap="round"/><ellipse cx="20" cy="-8" rx="6" ry="3.500" fill="${ORA}"/>`}))}`;

S.leader=`${park()}${sun(30,26,10)}
 <rect x="110" y="140" width="50" height="46" rx="4" fill="#c98a4b"/>
 ${at(135,142,.64,cat({eyes:'happy',mouth:'big',armL:60,armR:-110,armsFront:true,mid:`<circle cx="0" cy="-28" r="8" fill="${SUN}"/>${star5(0,-28,5,'#fff')}`,prop:`<path d="M-4,0 l14,-10 v20 Z" fill="${RED}"/><rect x="-10" y="-4" width="8" height="8" fill="#b52f29"/>`}))}
 <path d="M168,84 q8,6 0,14 M178,78 q12,10 0,26" fill="none" stroke="${VIO}" stroke-width="3" stroke-linecap="round" class="glow"/>
 ${at(26,192,.44,K('orange',{eyes:'happy',armL:125,armsFront:true}))}${at(60,194,.44,K('grey',{eyes:'happy'}))}${at(92,192,.4,K('cream',{eyes:'happy',armR:-125,armsFront:true}))}`;

S.light=`${bg('#fff6c8')}${floor(180,'#ffe9a8')}
 <g class="spin" stroke="${SUN}" stroke-width="5" stroke-linecap="round">${[0,45,90,135,180,225,270,315].map(a=>`<path transform="rotate(${a} 100 70)" d="M100,20 v-14"/>`).join('')}<circle cx="100" cy="70" r="66" fill="none" stroke="none"/></g>
 <path d="M100,0 v30" stroke="#7a6a8c" stroke-width="3"/><g class="glow"><circle cx="100" cy="70" r="44" fill="#fff" opacity=".8"/></g><path d="M80,84 q-16,-40 20,-44 q36,4 20,44 Z" fill="${SUN}"/><rect x="88" y="84" width="24" height="12" rx="3" fill="#9aa8c0"/>
 <rect x="160" y="110" width="26" height="40" rx="6" fill="#fff" stroke="#cbc2e6" stroke-width="2"/><rect x="168" y="116" width="10" height="16" rx="3" fill="${MINT}"/>
 ${at(110,192,.86,cat({eyes:'happy',mouth:'open',armR:-112,armsFront:true}))}`;

S.voice=`${bg('#ece6ff')}<circle cx="80" cy="104" r="76" fill="#f6f2ff"/>${floor(184,'#d6ccf5')}
 <path d="M112,96 q10,12 0,26 M126,86 q16,22 0,46 M140,76 q22,32 0,66" fill="none" stroke="${RED}" stroke-width="5" stroke-linecap="round" class="glow"/>
 ${[0,1,2,3,4].map(i=>`<rect class="chew" style="animation-delay:${i*.12}s;animation-duration:.5s" x="${156+i*8}" y="${30}" width="5" height="${[20,34,26,40,18][i]}" rx="2" fill="${VIO}"/>`).join('')}
 ${note(164,110,SKY,0)}${note(182,84,ORA,.9)}
 ${sh(70,190,36)}${at(70,188,1,cat({eyes:'closed',mouth:'big',mouthCls:'chew',armL:60,armR:-60,headCls:'tilt'}))}`;
