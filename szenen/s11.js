/* Tag 31–34: find, here, many, tell, woman · life, child, world, still, try · last, ask, need, too, feel · state, never, become, between, high */
const lupe=`<circle cx="0" cy="-14" r="12" fill="#bfe9ff" opacity=".7" stroke="${INK}" stroke-width="3"/><path d="M0,-2 v10" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>`;
const keyP=`<circle cx="-8" cy="0" r="6" fill="none" stroke="${SUN}" stroke-width="4"/><path d="M-2,0 h16 M8,0 v5 M13,0 v4" stroke="${SUN}" stroke-width="4" stroke-linecap="round"/>`;
const pin=(x,y,c)=>`<g transform="translate(${x},${y})"><g class="hop"><path d="M0,0 q-13,-13 -13,-22 q0,-13 13,-13 q13,0 13,13 q0,9 -13,22 Z" fill="${c||RED}"/><circle cx="0" cy="-22" r="5" fill="#fff"/></g></g>`;
S.find=`${park(170)}${cloud(40,30,.8)}
 <path d="M120,176 l5,-16 5,16 5,-20 5,20 M160,178 l5,-14 5,14" fill="none" stroke="#3aa568" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
 <g transform="translate(150,178) rotate(-20)">${keyP}</g>${ring(150,176,22,RED)}${spark(170,150,7,SUN,0)}${spark(132,150,5,'#fff',.6)}
 ${sh(64,192,34)}${at(64,190,.94,cat({eyes:'spark',mouth:'open',armR:-80,armRcls:'bob',prop:`<g transform="translate(6,10) rotate(-60)">${lupe}</g>`}))}`;

S.here=`${bg('#e3fbf5')}<circle cx="128" cy="150" r="46" fill="#fff" opacity=".7"/>${floor(184,'#bff0de')}
 ${at(128,186,1.6,P.ball(RED))}${pin(128,138)}
 ${arrow(128,40,128,84,RED,7,'float')}
 ${sh(56,190,32)}${at(56,188,.9,cat({eyes:'happy',mouth:'open',armR:-60}))}`;

S.many=`${bg('#d9fbf1')}<circle cx="100" cy="90" r="84" fill="#bff3e4"/>
 ${[[30,30],[70,24],[110,32],[150,26],[182,40],[20,66],[58,62],[96,70],[134,64],[172,74],[36,100],[76,104],[118,100],[158,106],[60,134],[140,134]].map(([x,y],i)=>`<g transform="translate(${x},${y}) rotate(${(i*37)%40-20})"><g class="${i%2?'float':'hop'}"><g transform="scale(1.3)">${P.fish}</g></g></g>`).join('')}
 ${floor(186,'#9fe6d2')}${at(100,196,.6,cat({eyes:'wide',mouth:'o',armL:125,armR:-125,armsFront:true}))}`;

S.tell=`${bg('#ece6ff')}${floor(184,'#d6ccf5')}
 ${speech(128,52,108,64,`<circle cx="104" cy="52" r="14" fill="${SUN}"/><circle cx="110" cy="47" r="12" fill="#fff"/>${star5(140,46,9,SUN)}${star5(160,62,6,SUN)}`,84,104)}
 ${sh(56,190,32)}${at(56,188,.92,cat({mouth:'open',armR:-120,armRcls:'bob',armsFront:true}))}
 ${at(150,190,.52,K('grey',{eyes:'wide',headCls:'tilt'}))}${at(178,192,.4,K('cream',{eyes:'wide'}))}`;

S.woman=`${park()}${sun(30,30,10)}${cloud(160,30,.8)}
 ${sh(112,190,30)}${at(112,188,1.04,P.person({shirt:RED,stripe:'#b52f29',hair:'#3a2a4a',long:true,skirt:true,pants:VIO,shoes:'#7a4a21'}))}
 ${at(38,192,.5,cat({armR:-125,armRcls:'wave',armsFront:true,mouth:'open'}))}`;

const sprout=(x,y,h,fl)=>`<path d="M${x},${y} v${-h}" stroke="#3aa568" stroke-width="3.5" stroke-linecap="round"/><ellipse cx="${x-6}" cy="${y-h*.5}" rx="6" ry="3" fill="#4fc27f" transform="rotate(-25 ${x-6} ${y-h*.5})"/><ellipse cx="${x+6}" cy="${y-h*.7}" rx="6" ry="3" fill="#4fc27f" transform="rotate(25 ${x+6} ${y-h*.7})"/>${fl?`<g class="flower"><circle cx="${x}" cy="${y-h-4}" r="9" fill="${fl}"/><circle cx="${x}" cy="${y-h-4}" r="3.5" fill="${SUN}"/></g>`:''}`;
S.life=`${bg('#e3fbf5')}${sun(170,30,11)}${floor(160,'#c98a4b')}<rect y="160" width="200" height="8" fill="#8fe0a8"/>
 <ellipse cx="82" cy="172" rx="5" ry="3.5" fill="#7a4a21"/>${sprout(112,166,18)}${sprout(142,166,38)}${sprout(174,166,58,RED)}
 ${arcArrow(82,150,170,96,30,VIO,4,'6 8')}
 ${heartS(128,60,1.6,RED,'beat')}
 ${at(34,190,.7,cat({eyes:'happy',armR:-92,prop:`<g transform="translate(8,6)"><rect x="-10" y="-12" width="20" height="16" rx="3" fill="${SKY}"/><path d="M10,-8 l12,-6" stroke="${SKY}" stroke-width="4" stroke-linecap="round"/></g>`}))}
 <path class="drip" d="${tear(74,118)}" fill="${SKY}"/>`;

S.child=`${park()}${cloud(40,30,.8)}
 ${sh(120,190,24)}${at(120,188,.74,P.person({shirt:MINT,stripe:'#1f9c83',wave:false,happy:true,hair:'#e0a83a'}))}
 <g class="float"><path d="M150,128 q10,-30 0,-56" fill="none" stroke="${INK}" stroke-width="1.6"/><ellipse cx="150" cy="52" rx="16" ry="20" fill="${RED}"/><ellipse cx="144" cy="44" rx="4" ry="6" fill="#fff" opacity=".5"/></g>
 ${sh(54,192,30)}${at(54,190,.8,cat({eyes:'happy',armR:-80}))}${heart(86,110,.8,RED,0)}`;

S.world=`${bg('#2d2a6e')}${spark(20,30,4,'#fff',0)}${spark(176,24,4,'#fff',.6)}${spark(182,150,4,'#fff',1.2)}${spark(18,160,3.5,'#fff',.9)}
 <clipPath id="glb"><circle cx="100" cy="118" r="64"/></clipPath>
 <circle cx="100" cy="118" r="64" fill="#4f9dff"/>
 <g clip-path="url(#glb)"><g class="scroll" style="animation-duration:16s" fill="#4fc27f"><path d="M40,80 q20,-16 40,0 q10,20 -6,34 q-20,10 -34,-8 Z M110,130 q24,-10 36,10 q4,22 -18,26 q-20,-6 -18,-36 Z M150,70 q16,-6 22,8 q-6,12 -22,-8 Z"/><path transform="translate(200,0)" d="M40,80 q20,-16 40,0 q10,20 -6,34 q-20,10 -34,-8 Z M110,130 q24,-10 36,10 q4,22 -18,26 q-20,-6 -18,-36 Z M150,70 q16,-6 22,8 q-6,12 -22,-8 Z"/></g><ellipse cx="80" cy="92" rx="30" ry="18" fill="#fff" opacity=".18"/></g>
 <circle cx="100" cy="118" r="64" fill="none" stroke="#bfe9ff" stroke-width="3"/>
 ${at(100,58,.48,cat(Object.assign({eyes:'happy',armR:-125,armRcls:'wave',armsFront:true},NL)))}`;

S.still=`${bg('#cfe8ff')}
 <rect x="118" y="16" width="66" height="56" rx="8" fill="#bfe9ff" stroke="#fff" stroke-width="5"/><g transform="translate(152,44) scale(.8)">${sun(0,0,12)}</g>
 ${floor(170,'#b9d6f2')}
 ${at(100,186,1.6,P.bed)}
 ${at(62,164,.6,cat({tail:false,eyes:'closed',armL:60,armR:-60}))}<path class="breathe" d="M70,150 q40,-22 108,0 v24 h-108 Z" fill="${SKY}"/>
 <g class="ring">${at(26,140,.5,P.clock(28,90))}</g>
 <g font-family="Baloo 2, Trebuchet MS, sans-serif" font-weight="800" fill="${VIO}"><text class="zz" x="84" y="110" font-size="14">z</text><text class="zz" style="animation-delay:1s" x="96" y="94" font-size="19">z</text></g>`;

const block=(x,y,c,l)=>`<rect x="${x-16}" y="${y-32}" width="32" height="32" rx="5" fill="${c}"/>${T(x,y-8,l,20,'#fff')}`;
S.try=`${bg('#fff1c9')}${floor(184,'#ffe08a')}
 ${block(132,184,SKY,'A')}${block(134,152,MINT,'B')}${block(130,120,VIO,'C')}
 <g class="wiggle" style="transform-origin:132px 88px">${block(128,88,RED,'D')}</g>
 ${sh(62,190,34)}${at(62,188,.96,cat({mouth:'tongue',armR:-128,armRcls:'bob',armsFront:true}))}
 <path d="M160,60 l10,-8 M164,76 h12" stroke="${RED}" stroke-width="4" stroke-linecap="round" class="glow"/>`;

S.last=`${bg('#e3fbf5')}${floor(184,'#bff0de')}
 <path d="M178,60 v126" stroke="#b07a45" stroke-width="5" stroke-linecap="round"/><rect x="150" y="50" width="44" height="26" rx="5" fill="${SUN}"/>${fishAt(172,63,1.2,0)}
 ${flipAt(140,188,.5,K('orange'))}${flipAt(104,188,.5,K('grey'))}${flipAt(68,188,.5,K('white'))}
 ${flipAt(30,188,.56,cat({eyes:'happy'}))}${ring(30,160,36,RED)}${arrow(30,70,30,112,RED,7,'float')}`;

S.ask=`${bg('#fff1c9')}
 <rect x="104" y="18" width="86" height="56" rx="6" fill="#3aa568" stroke="#b07a45" stroke-width="5"/>${T(147,56,'ABC',22,'#fff')}
 ${floor(184,'#ffe08a')}
 ${at(150,188,.8,K('white',{hat:glasses.replace(/#fff/g,INK),headCls:'tilt'}))}
 ${speech(56,36,52,44,T(56,50,'?',30,RED),64,72)}
 ${sh(56,190,30)}${at(56,188,.82,cat({mouth:'open',armR:-155,armsFront:true}))}`;

S.need=`${bg('#ffe2a8')}${sun(40,40,18)}<path d="M0,172 q50,-16 100,0 t100,0 v28 h-200 Z" fill="#f6c27a"/>
 ${think(142,52,42,30,`<path d="M142,30 q-16,24 0,34 q16,-10 0,-34 Z" fill="${SKY}"/>`,-1)}
 ${sh(86,190,34)}${at(86,188,.96,cat({eyes:'closed',mouth:'big',armR:-92,prop:`<g transform="translate(2,12) rotate(110)">${P.cup(SKY)}</g>`}))}
 <path class="sweat" d="${tear(50,96)}" fill="${SKY}"/><path class="sweat" style="animation-delay:.6s" d="${tear(126,110)}" fill="${SKY}"/>`;

S.too=`${bg('#fff1c9')}${floor(160,'#c98a4b')}<rect y="160" width="200" height="8" fill="#e0a868"/>
 ${at(132,164,2.2,P.cup(RED))}
 <path class="heatw" d="M116,84 q6,-8 0,-16 q-6,-8 0,-16" fill="none" stroke="${RED}" stroke-width="4" stroke-linecap="round"/><path class="heatw" style="animation-delay:.5s" d="M136,80 q6,-8 0,-16 q-6,-8 0,-16" fill="none" stroke="${ORA}" stroke-width="4" stroke-linecap="round"/><path class="heatw" style="animation-delay:1s" d="M154,84 q6,-8 0,-16 q-6,-8 0,-16" fill="none" stroke="${RED}" stroke-width="4" stroke-linecap="round"/>
 ${thermo(186,60,64,RED)}
 ${at(46,196,.8,cat({eyes:'wide',mouth:'o',armR:-70,armRcls:'ring',tail:false}))}
 <path d="M88,128 l-10,-8 M92,142 h-12 M88,116 l-6,-12" stroke="${RED}" stroke-width="3.5" stroke-linecap="round" class="glow"/>`;

const face=(x,y,c,m)=>`<circle cx="${x}" cy="${y}" r="13" fill="${c}"/><circle cx="${x-4.500}" cy="${y-2}" r="1.800" fill="${INK}"/><circle cx="${x+4.500}" cy="${y-2}" r="1.800" fill="${INK}"/><path d="M${x-5},${y+5} q5,${m} 10,0" fill="none" stroke="${INK}" stroke-width="1.800" stroke-linecap="round"/>`;
S.feel=`${bg('#ffe9d6')}<circle cx="100" cy="104" r="80" fill="#ffdcc0"/>${floor(184,'#ffd9bd')}${sh(100,190,38)}
 <g class="float">${face(34,56,SUN,5)}</g><g class="float" style="animation-delay:.6s">${face(166,50,'#9fd4f0',-5)}</g><g class="float" style="animation-delay:1.1s">${face(170,120,'#b7efc8',0)}</g>
 ${at(100,186,1.04,cat({eyes:'closed',armL:-46,armR:46,armsFront:true,mid:`<g transform="translate(0,-30)"><path class="beat" d="${heartP}" fill="${RED}" transform="scale(1.3)"/></g>`}))}`;

S.state=`${bg('#e3fbf5')}
 <path d="M30,60 q30,-30 70,-16 q40,-14 66,20 q20,40 -14,70 q-40,30 -84,10 q-50,-20 -38,-84 Z" fill="#b7efc8" stroke="#3aa568" stroke-width="3" stroke-dasharray="8 6"/>
 <path d="M70,90 q20,-10 34,6 M120,70 q16,10 10,30" fill="none" stroke="#9be8b4" stroke-width="6" stroke-linecap="round"/>
 <path d="M112,112 v-40" stroke="#b07a45" stroke-width="3"/><path class="flower" d="M112,72 q10,-4 20,0 v12 q-10,-4 -20,0 Z" fill="${RED}"/>${star5(112,116,7,SUN)}
 <g transform="translate(70,130) scale(.4)">${P.house()}</g><g transform="translate(150,118) scale(.34)">${P.house(SKY)}</g>
 ${at(34,196,.52,cat({eyes:'happy',armR:-110,armRcls:'bob'}))}`;

S.never=`${bg('#cdeeff')}${cloud(40,40,.9)}${cloud(160,120,.7)}
 <g class="float"><g transform="translate(110,78) scale(3.4)">${P.fish}</g><g class="flap"><path d="M104,62 q-20,-30 -34,-8 q10,12 34,8 Z M118,62 q20,-30 34,-8 q-10,12 -34,8 Z" fill="#fff" stroke="#cbc2e6" stroke-width="1.6"/></g></g>
 <g class="beat">${cross(110,78,40,9)}</g>
 <path d="M0,176 q50,-12 100,0 t100,0 v24 h-200 Z" fill="#5cc3ff"/>
 ${at(40,196,.6,cat({eyes:'closed',mouth:'wavy',armL:70,armR:-70,headCls:'shiver',tail:false}))}`;

S.become=`${bg('#ece6ff')}
 ${panel(8,40,84,110)}${panel(108,40,84,110)}
 <g class="wiggle"><g fill="#4fc27f">${[30,42,54,66].map(x=>`<circle cx="${x}" cy="110" r="8"/>`).join('')}</g><circle cx="74" cy="104" r="9" fill="#62d08f"/><circle cx="77" cy="102" r="1.8" fill="${INK}"/><path d="M72,96 l-3,-8 M78,96 l3,-8" stroke="${INK}" stroke-width="1.6" stroke-linecap="round"/></g>
 <path d="M20,124 q30,10 60,0" fill="none" stroke="#3aa568" stroke-width="4" stroke-linecap="round"/>
 <g transform="translate(150,96) scale(2)"><g class="flap"><path d="M0,0 q-12,-14 -16,-2 q-2,10 16,2 Z M0,0 q12,-14 16,-2 q2,10 -16,2 Z" fill="${ORA}"/><circle cx="-9" cy="-3" r="2.2" fill="${RED}"/><circle cx="9" cy="-3" r="2.2" fill="${RED}"/></g><rect x="-1" y="-6" width="2" height="12" rx="1" fill="${INK}"/></g>
 ${arrow(92,96,106,96,RED,6,'glow')}
 ${at(100,198,.42,cat({eyes:'wide',mouth:'o'}))}`;

S.between=`${bg('#fff1c9')}${floor(184,'#ffe08a')}
 ${at(36,186,1,P.boxClosed(56,70))}${at(164,186,1,P.boxClosed(56,70))}
 ${sh(100,190,26)}${at(100,188,.74,cat({eyes:'happy',mouth:'open',armL:70,armR:-70}))}
 ${arrow(100,60,100,92,RED,7,'float')}
 <path d="M66,150 h8 M134,150 h-8" stroke="${VIO}" stroke-width="4" stroke-linecap="round" class="glow"/>`;

S.high=`${bg('#cdeeff')}${sun(30,28,10)}
 <path d="M40,200 L110,50 L180,200 Z" fill="#9aa8c0"/><path d="M110,50 L88,98 l12,-8 10,10 12,-12 12,12 Z" fill="#fff"/>
 <g class="scroll" style="animation-duration:14s">${cloud(60,130,.9,'')}${cloud(180,150,.7,'')}${cloud(260,130,.9,'')}${cloud(380,150,.7,'')}</g>
 <path d="M124,52 v-34" stroke="#b07a45" stroke-width="3"/><path class="flower" d="M124,18 q9,-4 18,0 v11 q-9,-4 -18,0 Z" fill="${RED}"/>
 ${at(106,54,.42,cat({armL:130,armR:-130,armsFront:true,eyes:'happy',mouth:'open'}))}
 <path d="M24,190 V60 M24,60 l-6,10 M24,60 l6,10" fill="none" stroke="${RED}" stroke-width="4" stroke-linecap="round" class="glow"/>`;
