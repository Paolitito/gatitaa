/* Tag 39–42: turn, problem, every, start, might · show, part, against, place, such · again, few, case, week, company · system, each, right, program, hear */
S.turn=`${bg('#8fe0a8')}${floor(0,'#8fe0a8')}
 <path d="M30,200 V110 Q30,60 90,60 H200" fill="none" stroke="#6b7a99" stroke-width="44"/><path d="M30,200 V110 Q30,60 90,60 H200" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="12 14"/>
 <path d="M120,150 v-34" stroke="#9aa8c0" stroke-width="5" stroke-linecap="round"/><rect x="96" y="92" width="48" height="34" rx="6" fill="${SKY}"/><path d="M108,118 v-8 q0,-8 10,-8 h12 M124,96 l8,6 -8,6" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
 ${tree(170,160,.8)}${tree(150,30,.5)}
 <g class="spin" style="animation-duration:5s;transform-origin:30px 110px"><g transform="translate(30,150)"><g transform="scale(.5)">${cat({eyes:'happy',feet:'walk'})}</g></g></g>`;

S.problem=`${bg('#ffe9d6')}${floor(184,'#ffd9bd')}${sh(100,190,40)}
 ${at(100,186,1,cat({eyes:'wide',mouth:'wavy',armL:60,armR:-60,headCls:'shiver'}))}
 <path d="M52,150 q20,-40 50,-10 q30,30 46,-10 q-10,40 -44,26 q-30,-20 -40,14 q-18,-4 -12,-20 Z M60,120 q40,10 80,-6 M70,168 q30,-14 62,0" fill="none" stroke="${VIO}" stroke-width="4" stroke-linecap="round"/>
 <g class="roll"><circle cx="150" cy="172" r="14" fill="${VIO}"/><path d="M140,168 q10,-8 20,2 M142,178 q10,6 18,-4" fill="none" stroke="#c9b6ff" stroke-width="2"/></g>
 <g class="beat"><path d="M100,14 v26" stroke="${RED}" stroke-width="8" stroke-linecap="round"/><circle cx="100" cy="54" r="5" fill="${RED}"/></g>`;

S.every=`${bg('#ece6ff')}
 <rect x="10" y="20" width="180" height="62" rx="10" fill="#fff"/><rect x="10" y="20" width="180" height="16" rx="8" fill="${RED}"/>
 ${[0,1,2,3,4,5,6].map(i=>`<g transform="translate(${24+i*25.400},66) scale(.45)">${P.book([SKY,MINT,VIO,SUN,ORA,SKY,MINT][i])}</g><g class="twinkle" style="animation-delay:${i*.25}s">${check(24+i*25.400,44,4,2.500)}</g>`).join('')}
 ${floor(184,'#d6ccf5')}${sh(100,190,36)}
 ${at(100,188,.94,cat({armL:8,armR:-8,headCls:'tilt',mid:openBook,hat:glasses}))}`;

S.start=`${park(160)}${cloud(40,26,.7)}${floor(168,'#e0875a')}
 <path d="M0,180 h200" stroke="#fff" stroke-width="2" opacity=".7"/><path d="M70,168 v32" stroke="#fff" stroke-width="6"/>
 <path d="M70,168 v-110" stroke="#9aa8c0" stroke-width="5" stroke-linecap="round"/>
 <g class="flower"><rect x="70" y="58" width="48" height="32" fill="#fff"/><g fill="${INK}"><rect x="70" y="58" width="12" height="8"/><rect x="94" y="58" width="12" height="8"/><rect x="82" y="66" width="12" height="8"/><rect x="106" y="66" width="12" height="8"/><rect x="70" y="74" width="12" height="8"/><rect x="94" y="74" width="12" height="8"/><rect x="82" y="82" width="12" height="8"/><rect x="106" y="82" width="12" height="8"/></g></g>
 <g transform="translate(44,192) rotate(14) scale(-.66,.66)"><g class="shiver">${cat({armL:-40,armR:40,eyes:'happy',mouth:'open'})}</g></g>
 ${arrow(110,140,170,140,MINT,8,'glow')}
 <circle cx="150" cy="40" r="9" fill="#5a4a6c"/><circle cx="172" cy="40" r="9" fill="#4fe08a"/><circle class="glow" cx="172" cy="40" r="14" fill="#4fe08a" opacity=".4"/>`;

S.might=`${bg('#e6f1ff')}<g class="cloud"><ellipse cx="60" cy="40" rx="34" ry="14" fill="#b9c9dd"/><ellipse cx="90" cy="32" rx="26" ry="16" fill="#cfdbea"/></g>
 ${think(140,60,44,30,`<g fill="${SKY}"><path d="M120,46 v24 M108,58 h24 M112,50 l16,16 M128,50 l-16,16" stroke="${SKY}" stroke-width="3" stroke-linecap="round"/></g>${T(158,72,'?',34,RED)}`,-1)}
 ${floor(184,'#cfe3f7')}${sh(70,190,34)}
 ${at(70,188,.96,cat({headCls:'tilt',armR:-92,prop:`<g transform="translate(0,6)"><path d="M-12,-8 h24 v8 h-24 Z" fill="${RED}"/><path d="M8,0 v14 h8 v-14" fill="${RED}"/></g>`}))}
 <circle class="snow" cx="30" cy="0" r="2.500" fill="#fff"/><circle class="snow" style="animation-delay:-2s" cx="110" cy="0" r="2.500" fill="#fff"/>`;

S.show=`${bg('#fff1c9')}${floor(184,'#ffe08a')}
 ${sh(56,190,30)}${at(56,188,.86,cat({eyes:'happy',mouth:'open',armL:150,armR:-150,armsFront:true}))}
 <g class="float"><rect x="26" y="26" width="60" height="50" rx="4" fill="#fff" stroke="#cbc2e6" stroke-width="2"/><circle cx="44" cy="44" r="8" fill="${SUN}"/><path d="M32,70 l14,-16 10,10 12,-18 12,24 Z" fill="${MINT}"/></g>
 ${sh(146,190,34)}${at(146,188,.98,K('white',{eyes:'happy',hat:earflower,armL:-50,armR:50,armsFront:true}))}
 ${heart(104,100,.9,RED,0)}${spark(110,40,6,SUN,.5)}`;

S.part=`${bg('#fff1c9')}<circle cx="90" cy="96" r="78" fill="#ffe7a3"/>
 <g transform="translate(88,104)"><circle r="58" fill="#f6c27a"/><circle r="50" fill="${SUN}"/><path d="M0,0 L50,0 A50,50 0 0 0 35.400,-35.400 Z" fill="#fff1c9"/>${[[-20,-22],[-28,12],[6,26],[-4,-34],[20,18]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="6" fill="${RED}"/>`).join('')}<path d="M0,0 L-50,0 M0,0 L0,50 M0,0 L-35.400,-35.400 M0,0 L35.400,35.400 M0,0 L0,-50 M0,0 L-35.400,35.400" stroke="#f6c27a" stroke-width="2"/></g>
 <g class="float"><g transform="translate(106,92)"><path d="M0,0 L58,0 A58,58 0 0 0 41,-41 Z" fill="#f6c27a"/><path d="M0,0 L50,0 A50,50 0 0 0 35.400,-35.400 Z" fill="${SUN}"/><circle cx="30" cy="-12" r="6" fill="${RED}"/></g></g>
 ${ring(138,78,34,RED)}
 ${at(160,196,.56,cat({eyes:'spark',mouth:'tongue',armL:150,armsFront:true}))}`;

S.against=`${park(170)}${cloud(100,24,.7)}
 <path d="M70,150 h60" stroke="#b07a45" stroke-width="5" stroke-linecap="round"/><path d="M100,150 v-16" stroke="${INK}" stroke-width="2"/><path class="flower" d="M100,134 l12,5 -12,5 Z" fill="${RED}"/>
 <g class="shiver">${at(46,190,.8,cat({armR:-92,eyes:'closed',mouth:'big'}))}</g>
 <g class="shiver" style="animation-delay:.07s">${at(152,190,.72,P.dog())}</g>
 <g class="beat"><circle cx="100" cy="60" r="22" fill="#fff"/>${T(100,69,'VS',22,RED)}</g>`;

S.place=`${bg('#cdeeff')}${sun(30,28,10)}
 <ellipse cx="100" cy="170" rx="110" ry="40" fill="#8fe0a8"/><ellipse cx="100" cy="162" rx="70" ry="22" fill="#b7efc8"/>
 ${tree(40,160,.8)}
 <rect x="110" y="150" width="50" height="6" rx="3" fill="#b07a45"/><rect x="114" y="156" width="5" height="14" fill="#8a5a30"/><rect x="151" y="156" width="5" height="14" fill="#8a5a30"/><rect x="110" y="136" width="50" height="6" rx="3" fill="#b07a45"/>
 ${pin(100,120)}<ellipse class="ripple" cx="100" cy="124" rx="18" ry="5" fill="none" stroke="${RED}" stroke-width="2.500"/>
 ${at(74,172,.5,cat({eyes:'happy',armR:-110,armRcls:'bob'}))}`;

S.such=`${bg('#cdeeff')}${sun(160,40,20)}
 ${[RED,ORA,SUN,MINT,SKY,VIO].map((c,i)=>`<path d="M${10+i*7},176 a${90-i*7},${90-i*7} 0 0 1 ${180-i*14},0" fill="none" stroke="${c}" stroke-width="7" opacity=".85"/>`).join('')}
 ${hills('#8fe0a8','#6fd08f',160)}${flower(20,188,RED,0)}${flower(180,188,VIO,.5)}${flower(40,192,SUN,.9)}
 ${bfly(40,90,ORA,0)}
 ${sh(100,190,36)}${at(100,188,1,cat({eyes:'spark',mouth:'big',armL:120,armR:-120,armsFront:true}))}
 <path d="M60,60 l-10,-10 M140,60 l10,-10 M100,44 v-14" stroke="#fff" stroke-width="4" stroke-linecap="round" class="glow"/>`;

S.again=`${park(170)}${cloud(40,26,.7)}
 <g class="spin" style="animation-duration:4s"><path d="M100,22 a26,26 0 1 1 -24,16" fill="none" stroke="${RED}" stroke-width="6" stroke-linecap="round"/><path d="M68,30 l8,10 10,-8" fill="none" stroke="${RED}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="100" cy="48" r="34" fill="none"/></g>
 ${sh(44,192,28)}${at(44,190,.82,cat({armL:30,armR:-120,armRcls:'throwarm',armsFront:true,eyes:'happy',mouth:'open'}))}
 <g transform="translate(70,116)"><g class="throwball"><g transform="scale(.9)">${P.ball(RED)}</g></g></g>
 ${at(160,190,.62,P.dog({happy:true}))}`;

S.few=`${bg('#fff1c9')}
 ${at(100,160,.9,cat({mouth:'wavy',tail:false,armL:70,armR:-70}))}
 ${floor(140,MINT)}<rect y="140" width="200" height="8" fill="#9be6d8"/>
 <g transform="translate(100,184)">${P.plate(84)}</g>
 ${fishAt(84,172,1.4,10)}${fishAt(116,174,1.4,-8)}
 <ellipse cx="100" cy="173" rx="38" ry="14" fill="none" stroke="${RED}" stroke-width="3" stroke-dasharray="7 6"/>`;

const detHat=`<path d="M-30,-98 q30,-40 60,0 Z" fill="#b07a45"/><path d="M-38,-96 h76" stroke="#8a5a30" stroke-width="6" stroke-linecap="round"/>`;
S.case=`${bg('#ece6ff')}${floor(184,'#d6ccf5')}
 <rect x="110" y="40" width="76" height="96" rx="6" fill="#f3d9a4" stroke="#b07a45" stroke-width="3"/><path d="M110,58 h30 l6,-10 h40" fill="none" stroke="#b07a45" stroke-width="3"/><path d="M122,76 h52 M122,90 h52 M122,104 h34" stroke="#b07a45" stroke-width="3" stroke-linecap="round"/>${T(160,128,'?',22,RED)}
 ${pawprint(120,170,-20).replace(new RegExp(SKY,'g'),'#b5addf')}${pawprint(150,180,10).replace(new RegExp(SKY,'g'),'#b5addf')}${pawprint(178,166,-8).replace(new RegExp(SKY,'g'),'#b5addf')}
 ${sh(58,190,34)}${at(58,188,.94,cat({bow:false,hat:detHat,armR:-80,armRcls:'bob',prop:`<g transform="translate(6,10) rotate(-60)">${lupe}</g>`}))}`;

S.week=`${bg('#e3fbf5')}
 <rect x="8" y="30" width="184" height="70" rx="10" fill="#fff"/><rect x="8" y="30" width="184" height="18" rx="9" fill="${RED}"/>
 ${[0,1,2,3,4,5,6].map(i=>`<rect x="${14+i*25.200}" y="56" width="21" height="36" rx="5" fill="${i>4?'#ffe9d6':'#f4f1fb'}"/><circle cx="${24.500+i*25.200}" cy="74" r="5" fill="${i>4?ORA:SKY}"/>`).join('')}
 <g class="glow"><rect x="64.400" y="54" width="25" height="40" rx="6" fill="none" stroke="${VIO}" stroke-width="4"/></g>
 ${floor(184,'#bff0de')}${sh(100,190,34)}${at(100,188,.86,cat({eyes:'happy',armR:-150,armRcls:'bob',armsFront:true}))}`;

const tie=`<path d="M-4,-46 h8 l3,8 -7,22 -7,-22 Z" fill="${RED}"/>`;
S.company=`${bg('#cdeeff')}${cloud(30,30,.7)}
 <rect x="84" y="20" width="100" height="166" rx="4" fill="#b9c4d8"/><rect x="92" y="6" width="84" height="18" rx="4" fill="${SKY}"/>${T(134,20,'CAT Co.',12,'#fff')}
 ${[0,1,2,3].map(r=>[0,1,2].map(c=>`<rect x="${96+c*28}" y="${36+r*30}" width="20" height="20" rx="3" fill="${(r+c)%3?'#bfe9ff':'#fff6c8'}"/>`).join('')).join('')}
 <rect x="122" y="158" width="24" height="28" rx="3" fill="#5a4a6c"/>
 ${floor(186,'#9aa8c0')}
 ${sh(44,192,28)}${at(44,190,.84,cat({eyes:'happy',mid:tie,armR:-30,prop:`<g transform="translate(0,22) scale(.8)"><rect x="-16" y="-24" width="32" height="24" rx="4" fill="#7a4a21"/><path d="M-6,-24 v-5 h12 v5" fill="none" stroke="#5a3a18" stroke-width="3"/></g>`}))}`;

const gear=(x,y,r,c,dur,rev)=>`<g class="spin" style="animation-duration:${dur}s;${rev?'animation-direction:reverse':''}"><circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>${[0,45,90,135,180,225,270,315].map(a=>`<rect transform="rotate(${a} ${x} ${y})" x="${x-r*.18}" y="${y-r*1.300}" width="${r*.36}" height="${r*.5}" rx="2" fill="${c}"/>`).join('')}<circle cx="${x}" cy="${y}" r="${r*.35}" fill="#fff"/></g>`;
S.system=`${bg('#ece6ff')}
 ${gear(120,70,30,SKY,6)}${gear(166,112,20,RED,4,true)}${gear(84,118,22,MINT,4.400,true)}${gear(134,150,16,SUN,3.200)}
 <path d="M30,40 h40 v40" fill="none" stroke="#9aa8c0" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M30,40 h40 v40" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="4 10" class="road"/>
 ${floor(184,'#d6ccf5')}
 ${at(36,192,.7,cat({bow:false,hat:P.hatHard,eyes:'happy',armR:-110,armRcls:'bob',armsFront:true,prop:`<path d="M0,4 v-26 M-6,-22 q0,-10 6,-10 q6,0 6,10" fill="none" stroke="#9aa8c0" stroke-width="4" stroke-linecap="round"/>`}))}`;

S.each=`${bg('#fff3cf')}${floor(184,'#ffe08a')}
 ${[[38,'orange'],[100,null],[162,'grey']].map(([x,n],i)=>`${n?at(x,188,.6,K(n,{eyes:'happy'})):at(x,188,.62,cat({eyes:'happy',mouth:'open'}))}<g transform="translate(${x},60)"><g class="float" style="animation-delay:${i*.3}s"><circle r="22" fill="#fff"/><g transform="scale(1.6)">${P.fish}</g></g></g>${arrow(x,90,x,112,RED,4,'glow')}`).join('')}`;

S.right=`${bg('#e3fbf5')}<circle cx="100" cy="88" r="76" fill="#f0fdf8"/>
 <g class="beat"><circle cx="100" cy="72" r="46" fill="${MINT}"/><path d="M78,74 l16,18 30,-36" fill="none" stroke="#fff" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/></g>
 <g opacity=".35"><circle cx="30" cy="40" r="18" fill="#fff"/>${cross(30,40,8,5)}</g>
 ${floor(184,'#bff0de')}${sh(100,192,30)}${at(100,190,.7,cat({eyes:'happy',mouth:'open',armL:140,armR:-140,armsFront:true}))}
 ${arrow(140,160,186,160,RED,7,'glow')}`;

S.program=`${room('#ece6ff','#d6ccf5')}
 <rect x="60" y="20" width="126" height="92" rx="10" fill="${INK}"/><rect x="68" y="28" width="110" height="76" rx="6" fill="#bfe9ff"/>
 <clipPath id="tvc"><rect x="68" y="28" width="110" height="76" rx="6"/></clipPath>
 <g clip-path="url(#tvc)"><rect x="68" y="84" width="110" height="20" fill="${RED}"/><g transform="translate(100,112) scale(.5)">${K('orange',{mouth:'open',mid:tie,tail:false})}</g><g class="glow">${sun(150,52,8)}</g><path d="M130,92 h40" stroke="#fff" stroke-width="4" stroke-linecap="round"/></g>
 <path d="M110,112 l-10,16 M136,112 l10,16" stroke="${INK}" stroke-width="5" stroke-linecap="round"/>
 ${sh(42,192,28)}${at(42,190,.8,cat({eyes:'happy',armR:-96,prop:`<g transform="translate(2,6) rotate(60)"><rect x="-5" y="-22" width="10" height="24" rx="3" fill="#5a4a6c"/><circle cx="0" cy="-16" r="2" fill="${RED}"/></g>`}))}`;

S.hear=`${bg('#fff1c9')}<circle cx="70" cy="104" r="70" fill="#ffe7a3"/>${floor(184,'#ffe08a')}
 <g class="ring"><path d="M150,60 q-22,0 -22,24 v10 h44 v-10 q0,-24 -22,-24 Z" fill="${SUN}"/><rect x="124" y="92" width="52" height="8" rx="4" fill="#e0a83a"/><circle cx="150" cy="104" r="5" fill="#e0a83a"/></g>
 <path d="M112,70 q-10,12 0,24 M100,62 q-16,20 0,40" fill="none" stroke="${VIO}" stroke-width="4" stroke-linecap="round" class="glow"/>
 ${note(150,40,RED,0)}${note(176,60,VIO,.9)}
 ${sh(56,190,32)}${at(56,188,.92,cat({eyes:'happy',headCls:'tilt',armR:-152,armsFront:true}))}`;
