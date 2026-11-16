/* Tag 51–54: black, long, both, little, yes · since, provide, service, around, important · father, away, until, power, hour · game, often, yet, line, political */
const pawK=(x,y,r,c)=>`<g transform="translate(${x},${y}) rotate(${r})" fill="${c}"><ellipse cx="0" cy="2" rx="5" ry="4"/><circle cx="-5" cy="-4" r="2"/><circle cx="0" cy="-6" r="2"/><circle cx="5" cy="-4" r="2"/></g>`;
S.black=`${bg('#fff8f0')}
 ${[[RED,20],[ORA,50],[SUN,80],[MINT,110],[SKY,140],[VIO,170]].map(([c,x])=>`<rect x="${x-11}" y="16" width="22" height="30" rx="6" fill="${c}" opacity=".5"/>`).join('')}
 <rect x="128" y="60" width="40" height="52" rx="8" fill="${CB}"/>${ring(148,86,38,RED)}
 ${floor(184,'#f0e6dc')}
 <path d="M20,150 h36 l-4,32 h-28 Z" fill="#b9c4d8"/><ellipse cx="38" cy="150" rx="18" ry="5" fill="${CB}"/><path d="M52,154 q3,12 0,18 q-3,-6 0,-18" fill="${CB}"/>
 ${pawK(70,190,-20,CB)}${pawK(160,186,14,CB)}${pawK(184,170,-6,CB)}
 ${sh(104,190,34)}${at(104,188,.94,cat({eyes:'happy',mouth:'open',armR:-128,armsFront:true}))}`;

S.long=`${park(170)}${cloud(40,26,.7)}
 <g class="walkbob"><path class="wiggle" d="M178,134 q14,-6 12,-22" fill="none" stroke="#e8b06a" stroke-width="7" stroke-linecap="round"/>
 <rect x="50" y="124" width="132" height="34" rx="17" fill="#e8b06a"/><rect x="60" y="150" width="10" height="24" rx="5" fill="#d99a52"/><rect x="76" y="150" width="10" height="24" rx="5" fill="#e8b06a"/><rect x="150" y="150" width="10" height="24" rx="5" fill="#d99a52"/><rect x="166" y="150" width="10" height="24" rx="5" fill="#e8b06a"/>
 <ellipse cx="22" cy="122" rx="8" ry="15" fill="#b9773a" transform="rotate(16 22 122)"/><circle cx="40" cy="126" r="22" fill="#e8b06a"/><ellipse cx="30" cy="134" rx="12" ry="9" fill="#fff3dc"/><ellipse cx="24" cy="130" rx="4.500" ry="3.500" fill="${INK}"/><circle cx="42" cy="120" r="3" fill="${INK}"/><ellipse cx="58" cy="120" rx="8" ry="15" fill="#b9773a" transform="rotate(-16 58 120)"/></g>
 <path d="M20,90 h164 M20,90 l8,-6 M20,90 l8,6 M184,90 l-8,-6 M184,90 l-8,6" fill="none" stroke="${RED}" stroke-width="4" stroke-linecap="round" class="glow"/>
 ${at(112,84,.4,cat({eyes:'wide',mouth:'o',tail:false}))}`;

S.both=`${bg('#ffe9d6')}${floor(184,'#ffd9bd')}
 <path d="M30,70 q0,-14 14,-14 h112 q14,0 14,14" fill="none" stroke="${VIO}" stroke-width="5" stroke-linecap="round"/><path d="M100,56 v-18" stroke="${VIO}" stroke-width="5" stroke-linecap="round"/>
 ${arrow(100,38,62,72,RED,4,'glow')}${arrow(100,38,138,72,RED,4,'glow')}
 ${sh(62,190,30)}${at(62,188,.88,cat({eyes:'happy',mouth:'open'}),'hop')}
 ${sh(138,190,30)}${at(138,188,.88,K('orange',{eyes:'happy',mouth:'open'}),'hop')}
 ${heart(100,110,.9,RED,0)}`;

S.little=`${bg('#e3fbf5')}<circle cx="120" cy="120" r="60" fill="#fff" opacity=".7"/>${floor(184,'#bff0de')}
 <g transform="translate(120,176) scale(2.2)">${P.cup(SKY).replace('#7a4a21','#bfe9ff')}</g>
 ${at(118,128,.3,K('cream',{eyes:'happy',mouth:'open',armR:-125,armRcls:'wave',armsFront:true,tail:false}),'peek')}
 <circle cx="118" cy="104" r="34" fill="none" stroke="${VIO}" stroke-width="5"/><path d="M142,128 l22,22" stroke="${VIO}" stroke-width="8" stroke-linecap="round"/>
 ${at(34,194,.7,cat({eyes:'spark',mouth:'o',headCls:'tilt'}))}`;

S.yes=`${bg('#e3fbf5')}<circle cx="100" cy="96" r="80" fill="#f0fdf8"/>${floor(184,'#bff0de')}${sh(92,190,36)}
 <g class="beat"><circle cx="156" cy="50" r="30" fill="${MINT}"/><path d="M142,51 l10,12 18,-24" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/></g>
 ${at(92,186,1.02,cat({eyes:'happy',mouth:'big',armL:30,armR:-125,armsFront:true,headCls:'hop'}))}
 ${spark(30,50,7,SUN,0)}${spark(46,120,5,SUN,.6)}`;

S.since=`${park(170)}
 <rect x="16" y="20" width="168" height="12" rx="6" fill="#fff" opacity=".7"/><rect class="grow" x="16" y="20" width="130" height="12" rx="6" fill="${RED}"/>
 <g transform="translate(24,26) scale(.6)">${sun(0,0,12)}</g><g class="beat"><circle cx="146" cy="26" r="9" fill="${RED}"/></g>
 <rect x="50" y="150" width="100" height="8" rx="4" fill="#b07a45"/><rect x="56" y="158" width="6" height="26" fill="#8a5a30"/><rect x="138" y="158" width="6" height="26" fill="#8a5a30"/><rect x="50" y="126" width="100" height="8" rx="4" fill="#b07a45"/>
 ${at(86,152,.7,cat({eyes:'closed',mouth:'wavy',headCls:'tilt'}))}
 <g class="ring">${at(150,124,.5,P.clock(28,150))}</g>
 <g font-family="Baloo 2, Trebuchet MS, sans-serif" font-weight="800" fill="${VIO}"><text class="zz" x="104" y="80" font-size="14">z</text></g>`;

S.provide=`${room('#fff1c9','#e4b77a')}
 ${at(150,190,.46,K('orange',{eyes:'happy',mouth:'open',armL:125,armR:-125,armsFront:true}),'hop')}${at(180,192,.4,K('grey',{eyes:'happy'}))}${at(120,192,.4,K('cream',{eyes:'happy'}))}
 ${sh(54,192,32)}${at(54,190,.9,cat({eyes:'happy',armR:-92,armsFront:true,prop:`<g transform="translate(6,8)"><path d="M-16,-4 h32 q0,16 -16,16 q-16,0 -16,-16 Z" fill="${SKY}"/><ellipse cx="0" cy="-4" rx="16" ry="4" fill="#ffd98a"/><g transform="translate(0,-8) scale(.9)">${P.fish}</g></g>`}))}
 ${arrow(98,130,120,146,RED,5,'glow')}${heart(150,110,.8,RED,0)}`;

const fliege=`<path d="M0,-46 l-9,-5 v10 Z M0,-46 l9,-5 v10 Z" fill="${RED}"/><circle cx="0" cy="-46" r="2.500" fill="#b52f29"/>`;
S.service=`${room('#ece6ff','#d6ccf5')}
 ${at(150,186,1,P.table(76))}<path d="M112,130 h76 v12 l-9.500,7 -9.500,-7 -9.500,7 -9.500,-7 -9.500,7 -9.500,-7 -9.500,7 -9.500,-7 Z" fill="#fff"/>
 <g class="ring"><path d="M150,118 a12,12 0 0 1 24,0 Z" fill="${SUN}" transform="translate(-12,10)"/><rect x="136" y="128" width="28" height="4" rx="2" fill="#e0a83a"/></g>
 ${sh(60,192,32)}${at(60,190,.92,cat({eyes:'happy',mid:fliege,armL:-110,armR:-30,armsFront:true}))}
 <g class="float"><ellipse cx="34" cy="100" rx="30" ry="6" fill="#dfe6f2" stroke="#9aa8c0" stroke-width="1.600"/><path d="M14,98 a20,18 0 0 1 40,0 Z" fill="#cfd8e6"/><circle cx="34" cy="78" r="4" fill="#9aa8c0"/></g>`;

S.around=`${park(176)}${cloud(30,24,.7)}
 ${at(100,150,1,P.house())}
 <ellipse cx="100" cy="140" rx="84" ry="46" fill="none" stroke="${RED}" stroke-width="3" stroke-dasharray="8 9" class="glow"/>
 <g class="spin" style="animation-duration:5s;transform-box:view-box;transform-origin:100px 140px"><g transform="translate(100,196) scale(.42)">${cat({feet:'run',eyes:'happy',mouth:'open'})}</g></g>`;

S.important=`${bg('#fff3cf')}<circle cx="100" cy="100" r="82" fill="#ffe7a3"/>${floor(184,'#ffe08a')}${sh(100,190,36)}
 ${at(100,186,.98,cat({eyes:'wide',mouth:'o',armL:150,armR:-150,armsFront:true}))}
 <g class="float"><rect x="64" y="20" width="72" height="48" rx="5" fill="#fff" stroke="#cbc2e6" stroke-width="2"/><path d="M64,20 l36,28 36,-28" fill="none" stroke="#cbc2e6" stroke-width="2"/><circle cx="100" cy="52" r="11" fill="${RED}"/>${star5(100,52,6,'#fff')}</g>
 <g class="beat"><path d="M164,30 v26" stroke="${RED}" stroke-width="9" stroke-linecap="round"/><circle cx="164" cy="72" r="6" fill="${RED}"/></g>
 <g class="beat"><path d="M36,30 v26" stroke="${RED}" stroke-width="9" stroke-linecap="round"/><circle cx="36" cy="72" r="6" fill="${RED}"/></g>`;

const bart=`<path d="M-12,-60 q6,-5 12,0 q6,-5 12,0 q-2,7 -12,3 q-10,4 -12,-3 Z" fill="#6a6f8c"/>`;
S.father=`${bg('#e3fbf5')}<circle cx="100" cy="104" r="84" fill="#f0fdf8"/>${floor(186,'#bff0de')}${sh(100,192,44)}
 ${at(100,190,1.08,K('grey',{eyes:'happy',mid:tie,hat:bart,armL:140,armR:-140,armsFront:true}))}
 ${at(100,82,.5,cat({eyes:'happy',mouth:'open',armL:125,armR:-125,armsFront:true,tail:false}),'hop')}
 ${heart(40,60,1,RED,0)}${heart(164,70,.8,RED,.8)}`;

S.away=`${park()}${cloud(40,30,.8)}
 <path d="M0,186 h200" stroke="#f3d9a4" stroke-width="16"/>
 <g class="road"><path d="M100,150 h50" stroke="${RED}" stroke-width="4" stroke-dasharray="8 12" stroke-linecap="round"/></g>${arrow(150,150,172,150,RED,5)}
 <circle class="puff" cx="126" cy="176" r="6" fill="#fff"/><circle class="puff" style="animation-delay:.8s" cx="116" cy="172" r="5" fill="#fff"/>
 <g transform="translate(166,186) scale(-.44,.44)"><g class="runbob">${P.dog()}</g></g>
 ${sh(50,192,30)}${at(50,190,.88,cat({mouth:'wavy',armR:-125,armRcls:'wave',armsFront:true}))}`;

S.until=`${bg('#cdeeff')}<path d="M110,0 h90 v200 h-90 Z" fill="#2d2a6e"/><path d="M110,0 q-24,100 0,200" fill="#2d2a6e"/>
 <g transform="translate(40,34) scale(.9)">${sun(0,0,12)}</g><circle cx="166" cy="36" r="14" fill="#ffe89a"/><circle cx="172" cy="32" r="12" fill="#2d2a6e"/>${spark(140,60,4,'#ffe89a',0)}${spark(184,80,3.500,'#ffe89a',.7)}
 <rect x="16" y="84" width="168" height="10" rx="5" fill="#fff" opacity=".5"/><rect class="grow" x="16" y="84" width="104" height="10" rx="5" fill="${RED}"/><path d="M120,76 v26" stroke="${RED}" stroke-width="6" stroke-linecap="round"/>
 ${floor(180,'#8fe0a8')}<path d="M110,180 h90 v20 h-90 Z" fill="#373278"/>
 ${at(56,190,.76,cat({armR:-72,armRcls:'bob',eyes:'happy',mouth:'open'}))}<g transform="translate(86,190)"><g class="roll" style="animation-duration:1.4s">${P.ball(RED)}</g></g>`;

const blitz=(x,y,s,c)=>`<path transform="translate(${x},${y}) scale(${s})" d="M4,-20 l-14,22 h9 l-4,18 16,-24 h-9 Z" fill="${c}"/>`;
S.power=`${bg('#fff3cf')}<circle cx="100" cy="104" r="80" fill="#ffe7a3"/>${floor(184,'#ffe08a')}${sh(100,190,38)}
 <g class="beat">${blitz(36,60,1.6,SUN)}</g><g class="beat" style="animation-delay:.3s">${blitz(164,56,1.6,SUN)}</g>
 <rect x="150" y="120" width="34" height="56" rx="6" fill="#fff" stroke="${INK}" stroke-width="3"/><rect x="160" y="114" width="14" height="8" rx="2" fill="${INK}"/><rect class="glow" x="155" y="126" width="24" height="44" rx="3" fill="${MINT}"/>
 ${at(92,186,1.04,cat({eyes:'happy',mouth:'big',armL:130,armR:-130,armsFront:true,mid:blitz(0,-28,.7,SUN)}),'pulse')}`;

S.hour=`${bg('#e3fbf5')}<circle cx="110" cy="92" r="80" fill="#f0fdf8"/>
 <g transform="translate(110,92)"><circle r="64" fill="#fff" stroke="${INK}" stroke-width="7"/><path d="M0,0 L0,-56 A56,56 0 0 1 28,-48.500 Z" fill="${RED}" opacity=".5"/>${[0,30,60,90,120,150,180,210,240,270,300,330].map(a=>`<path transform="rotate(${a})" d="M0,-58 v8" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>`).join('')}<path d="M0,0 L0,-40" stroke="${INK}" stroke-width="6" stroke-linecap="round"/><g class="spin" style="animation-duration:8s;transform-box:view-box;transform-origin:0 0"><path d="M0,0 v-50" stroke="${RED}" stroke-width="4" stroke-linecap="round"/></g><circle r="5" fill="${INK}"/></g>
 ${floor(186,'#bff0de')}
 <g transform="translate(28,180)"><path d="M-12,-40 h24 l-10,20 10,20 h-24 l10,-20 Z" fill="#bfe9ff" stroke="${INK}" stroke-width="2.500" stroke-linejoin="round"/><path d="M-6,-2 h12 l-6,-12 Z" fill="${SUN}"/><path class="drip" style="animation-duration:.8s" d="M0,-20 v6" stroke="${SUN}" stroke-width="2"/></g>
 ${at(170,194,.5,cat({eyes:'happy',armR:-150,armsFront:true}))}`;

S.game=`${room('#ece6ff','#d6ccf5')}
 <rect x="50" y="16" width="130" height="88" rx="10" fill="${INK}"/><rect x="58" y="24" width="114" height="72" rx="6" fill="#2d2a6e"/>
 <rect x="66" y="46" width="6" height="26" rx="2" fill="#fff" class="float"/><rect x="158" y="40" width="6" height="26" rx="2" fill="#fff" class="hop"/><g transform="translate(80,56)"><circle class="roll" style="animation-duration:1s" r="4" fill="${SUN}"/></g><path d="M115,28 v64" stroke="#55508a" stroke-width="2" stroke-dasharray="4 6"/>
 ${sh(70,192,32)}${at(70,190,.9,cat({eyes:'happy',mouth:'tongue',armL:-34,armR:34,armsFront:true,mid:`<g transform="translate(0,-18)"><rect x="-20" y="-9" width="40" height="18" rx="9" fill="#9aa8c0"/><circle cx="10" cy="-2" r="3" fill="${RED}"/><circle cx="14" cy="3" r="3" fill="${MINT}"/><path d="M-12,0 h8 M-8,-4 v8" stroke="${INK}" stroke-width="2.500"/></g>`}))}
 <g class="hop"><rect x="148" y="150" width="30" height="30" rx="6" fill="#fff" stroke="#cbc2e6" stroke-width="2"/><circle cx="156" cy="158" r="3" fill="${INK}"/><circle cx="170" cy="172" r="3" fill="${INK}"/><circle cx="163" cy="165" r="3" fill="${INK}"/></g>`;

S.often=`${bg('#ece6ff')}
 <rect x="10" y="20" width="180" height="62" rx="10" fill="#fff"/><rect x="10" y="20" width="180" height="16" rx="8" fill="${RED}"/>
 ${[0,1,2,3,4,5,6].map(i=>`<rect x="${16+i*25.200}" y="42" width="21" height="34" rx="5" fill="#f4f1fb"/>${[0,1,3,4,6].includes(i)?`<g class="twinkle" style="animation-delay:${i*.2}s">${check(26.500+i*25.200,60,6,3.500)}</g>`:''}`).join('')}
 ${floor(184,'#d6ccf5')}${sh(100,190,36)}
 ${at(100,188,.94,cat({armL:8,armR:-8,headCls:'tilt',mid:openBook,hat:glasses}))}`;

S.yet=`${bg('#3b3880')}<rect x="130" y="16" width="56" height="48" rx="6" fill="#2d2a6e" stroke="#55508a" stroke-width="4"/><circle cx="164" cy="34" r="9" fill="#ffe89a"/>${floor(172,'#2d2a6e')}
 <g opacity=".8"><g transform="translate(150,186) scale(1.1)">${P.bed}</g></g>
 <g class="beat"><circle cx="150" cy="110" r="16" fill="#fff"/>${cross(150,110,7,5)}</g>
 <g class="ring">${at(100,60,.5,P.clock(28,330))}</g>
 ${at(52,190,.84,cat(Object.assign({armR:-72,armRcls:'bob',eyes:'happy',mouth:'open'},NL)))}<g transform="translate(86,190)"><g class="roll" style="animation-duration:1.2s">${P.ball(RED)}</g></g>`;

S.line=`${bg('#fff1c9')}${floor(150,'#c98a4b')}<rect y="150" width="200" height="8" fill="#e0a868"/>
 <rect x="20" y="40" width="160" height="90" rx="6" fill="#fff" stroke="#cbc2e6" stroke-width="2"/>
 <path class="draw" style="stroke-dasharray:140;animation-name:drawL" d="M34,86 h132" fill="none" stroke="${RED}" stroke-width="5" stroke-linecap="round"/>
 <style>@keyframes drawL{from{stroke-dashoffset:140}to{stroke-dashoffset:0}}</style>
 <rect x="34" y="96" width="132" height="14" rx="3" fill="${SUN}"/>${[40,56,72,88,104,120,136,152].map((x,i)=>`<path d="M${x},96 v${i%2?5:8}" stroke="${INK}" stroke-width="1.600"/>`).join('')}
 <path d="M34,60 h132" stroke="${VIO}" stroke-width="3" stroke-dasharray="6 8" stroke-linecap="round"/>
 ${at(100,198,.6,cat({mouth:'tongue',armR:-150,armRcls:'bob',armsFront:true}))}`;

const pult=(x,c)=>`<path d="M${x-22},186 l4,-46 h36 l4,46 Z" fill="#b07a45"/><rect x="${x-24}" y="132" width="48" height="10" rx="3" fill="#8a5a30"/><circle cx="${x}" cy="162" r="9" fill="${c}"/>${star5(x,162,5,'#fff')}`;
S.political=`${bg('#ece6ff')}${floor(186,'#d6ccf5')}
 <path d="M0,20 q100,30 200,0" fill="none" stroke="#b07a45" stroke-width="2"/>${[[30,28,SKY],[70,36,ORA],[100,38,SKY],[130,36,ORA],[170,28,SKY]].map(([x,y,c])=>`<path d="M${x-8},${y-4} h16 l-8,16 Z" fill="${c}"/>`).join('')}
 ${at(50,150,.62,cat({mouth:'open',armR:-125,armRcls:'bob',armsFront:true,tail:false}))}${pult(50,SKY)}
 ${at(150,150,.62,K('orange',{mouth:'open',armL:125,armLcls:'bob',armsFront:true,tail:false}))}${pult(150,ORA)}
 <rect x="84" y="150" width="32" height="34" rx="4" fill="#fff" stroke="#cbc2e6" stroke-width="2"/><rect x="92" y="150" width="16" height="4" fill="${INK}"/><g class="drip" style="animation-duration:1.6s"><rect x="94" y="124" width="12" height="16" rx="2" fill="#fff" stroke="#cbc2e6" stroke-width="1.500"/></g>
 ${speech(50,60,40,26,dots(50,60,SKY),50,84)}`;
