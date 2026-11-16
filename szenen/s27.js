/* Tag 95–98: director, position, player, agree, especially · record, pick, wear, paper, special · space, ground, form, support, event · official, whose, matter, everyone, center */
const klappe=`<rect x="-24" y="-12" width="48" height="26" rx="3" fill="${INK}"/><path d="M-24,-12 l48,-10 v8 l-48,10 Z" fill="#fff" stroke="${INK}" stroke-width="2"/>`;
S.director=`${room('#3b2a4a','#5a4a6c')}<path d="M150,-10 L96,180 h104 V-10 Z" fill="#fff6c8" opacity=".18"/>
 ${at(160,180,.6,K('orange',{eyes:'happy',mouth:'big',armL:120,armR:-120,armsFront:true}),'hop')}
 <path d="M28,186 l14,-50 M72,186 l-14,-50 M24,150 h52" stroke="#b07a45" stroke-width="4" stroke-linecap="round"/><rect x="26" y="126" width="48" height="12" rx="3" fill="${RED}"/>
 ${at(50,150,.66,cat(Object.assign({tail:false,mouth:'open',armR:-110,armRcls:'bob',armsFront:true,hat:`<path d="M-30,-98 q30,-20 60,0 q-30,-8 -60,0 Z" fill="${RED}"/><circle cx="0" cy="-112" r="4" fill="${RED}"/>`,prop:`<path d="M-4,0 l14,-10 v20 Z" fill="${SUN}"/>`},NL)))}
 <g transform="translate(108,170) rotate(-8) scale(.8)">${klappe}</g>`;

S.position=`${bg('#e3fbf5')}${floor(170,'#bff0de')}
 ${[40,100,160].map((x,i)=>`<circle cx="${x}" cy="176" r="16" fill="#fff" stroke="${i==1?RED:'#cbc2e6'}" stroke-width="3"/>${T(x,182,String(i+1),16,i==1?RED:'#b9b0d6')}`).join('')}
 ${at(100,168,.7,cat({eyes:'happy',armL:20,armR:-20}))}
 ${pin(100,60)}<path d="M100,66 v30" stroke="${RED}" stroke-width="3" stroke-dasharray="4 5"/>
 <g opacity=".4">${at(40,168,.5,K('grey',{}))}${at(160,168,.5,K('orange',{}))}</g>`;

S.player=`${bg('#8fe0a8')}<rect width="200" height="50" fill="#cdeeff"/><path d="M0,50 h200" stroke="#fff" stroke-width="3"/><path d="M150,50 v-34 h44 v34" fill="none" stroke="#fff" stroke-width="4"/><path d="M150,26 h44 M161,16 v34 M172,16 v34 M183,16 v34" stroke="#fff" stroke-width="1" opacity=".7"/>
 <g transform="translate(74,184) scale(-.9,.9)"><g class="runbob">${cat({eyes:'happy',mouth:'open',armL:0,armR:0,armLcls:'swingA',armRcls:'swingB',feet:'run',mid:trikot(RED)})}</g></g>
 <g transform="translate(128,176)"><g class="roll">${P.ball('#fff',INK)}</g></g>
 ${T(74,150,'10',12,'#fff')}${ring(74,140,56,SUN)}`;

S.agree=`${park()}${cloud(100,22,.7)}
 ${speech(52,40,50,34,`<g transform="translate(52,50) scale(1.5)">${P.fish}</g>`,56,70)}${speech(148,40,50,34,`<g transform="translate(148,50) scale(1.5)">${P.fish}</g>`,144,70)}
 <g class="beat">${check(100,40,10,6)}</g>
 ${sh(56,192,30)}${at(56,190,.84,cat({eyes:'happy',mouth:'open',armR:-80}))}
 ${sh(144,192,30)}${at(144,190,.84,K('orange',{eyes:'happy',mouth:'open',armL:80}))}
 <circle cx="100" cy="150" r="7" fill="${SUN}"/>${spark(100,130,7,SUN,0)}`;

S.especially=`${bg('#ffe9d6')}<circle cx="110" cy="100" r="80" fill="#ffdcc0"/>${floor(184,'#ffd9bd')}
 <g opacity=".55">${at(24,186,.44,K('grey',{eyes:'happy'}))}${at(56,186,.44,K('cream',{eyes:'happy'}))}</g>
 ${at(92,186,.5,K('white',{eyes:'happy',armR:-60,prop:`<g transform="scale(.8)">${heartS(0,0,1,RED)}</g>`}))}
 ${sh(150,192,30)}${at(150,190,.84,K('orange',{eyes:'spark',mouth:'open'}))}${ring(150,140,50,RED)}
 <g class="beat">${star5(150,40,14,SUN)}</g>${heart(120,110,1,RED,0)}`;

S.record=`${bg('#fff3cf')}${burst(30,36,RED,0)}${burst(170,36,VIO,.6)}${floor(184,'#ffe08a')}
 <rect x="30" y="20" width="140" height="44" rx="8" fill="${INK}"/>${T(100,52,'0:09',28,SUN,'middle','glow')}
 <path d="M150,184 V110 M190,184 V110" stroke="#9aa8c0" stroke-width="4"/><path class="flower" d="M150,116 q20,10 40,0" fill="none" stroke="${RED}" stroke-width="4"/>
 <g transform="translate(110,186) scale(-.8,.8)"><g class="runbob">${cat({eyes:'closed',mouth:'big',armL:140,armR:-140,armsFront:true,feet:'run',mid:trikot(SKY)})}</g></g>
 <g class="twinkle">${star5(30,110,10,SUN)}</g>${T(30,140,'#1',16,RED,'middle','beat')}`;

S.pick=`${park(176)}${sun(30,24,9)}
 <rect x="140" y="110" width="12" height="80" rx="4" fill="#b07a45"/><circle cx="146" cy="76" r="48" fill="#4fc27f"/><circle cx="110" cy="98" r="24" fill="#6fd08f"/>
 ${[[124,70],[160,56],[172,96],[140,104]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="7" fill="${RED}"/><path d="M${x},${y-7} q2,-5 5,-5" stroke="#3aa568" stroke-width="2" fill="none"/>`).join('')}
 ${ring(110,98,14,SUN)}
 ${sh(60,192,32)}${at(60,190,.9,cat({eyes:'happy',mouth:'tongue',armR:-140,armRcls:'bob',armsFront:true,armL:30,propL:`<g transform="translate(-2,8)"><path d="M-14,-4 h28 l-4,16 h-20 Z" fill="#c98a4b"/><circle cx="-5" cy="-6" r="5" fill="${RED}"/><circle cx="5" cy="-6" r="5" fill="${RED}"/></g>`,prop:`<circle cx="2" cy="-6" r="6" fill="${RED}"/>`}))}`;

S.wear=`${room('#ece6ff','#d6ccf5')}
 <rect x="124" y="30" width="60" height="140" rx="26" fill="#bfe9ff" stroke="#b07a45" stroke-width="5"/><g opacity=".5">${at(154,160,.5,cat({tail:false,eyes:'happy',hat:fedora,mid:trikot(SUN)}))}</g>
 ${sh(64,192,34)}${at(64,190,.96,cat({eyes:'happy',mouth:'open',hat:fedora,mid:trikot(SUN),armR:-150,armsFront:true}))}
 ${ring(64,70,30,RED)}${arrow(20,30,40,52,RED,5,'float')}${spark(110,60,7,SUN,0)}`;

S.paper=`${bg('#e6f1ff')}${floor(160,'#c98a4b')}<rect y="160" width="200" height="8" fill="#e0a868"/>
 <g transform="rotate(-6 110 110)"><rect x="76" y="50" width="76" height="100" rx="3" fill="#fff" stroke="#cbc2e6" stroke-width="2"/><path d="M88,70 h52 M88,84 h52 M88,98 h40 M88,112 h48" stroke="#cbc2e6" stroke-width="3" stroke-linecap="round"/><path d="M134,50 h18 v18 Z" fill="#e6f1ff" stroke="#cbc2e6" stroke-width="2"/></g>
 <g class="flutter"><path d="M30,40 l30,10 -20,6 -2,12 -8,-14 Z" fill="#fff" stroke="#cbc2e6" stroke-width="1.500"/></g>
 <g transform="translate(170,150) rotate(30)"><ellipse cx="0" cy="0" rx="12" ry="11" fill="#fff" stroke="#cbc2e6" stroke-width="2"/><path d="M-6,-4 l8,6 M4,-6 l-4,10" stroke="#cbc2e6" stroke-width="1.500"/></g>
 ${at(40,198,.66,cat({eyes:'happy',tail:false,armR:-96,armsFront:true}))}`;

S.special=`${bg('#fff3cf')}<circle cx="100" cy="96" r="80" fill="#ffe7a3"/>${floor(184,'#ffe08a')}
 <g class="spin" style="animation-duration:14s;transform-origin:100px 100px" stroke="#fff" stroke-width="10" opacity=".6">${[0,45,90,135].map(a=>`<path transform="rotate(${a} 100 100)" d="M100,10 v180"/>`).join('')}</g>
 <g opacity=".5">${fishAt(30,170,1.400,0)}${fishAt(170,170,1.400,0)}</g>
 <g class="hop"><g transform="translate(100,120) scale(3)"><path d="M-9,0 l-8,-6 v12 Z" fill="${SUN}"/><ellipse cx="0" cy="0" rx="10" ry="6.500" fill="${SUN}" stroke="#e0a83a" stroke-width=".8"/><circle cx="5" cy="-1.500" r="1.400" fill="${INK}"/></g></g>
 ${crown.replace('<g>','<g transform="translate(104,206) scale(.7)">')}
 ${spark(50,60,9,RED,0)}${spark(156,54,8,RED,.5)}
 ${at(100,202,.44,cat({eyes:'spark',mouth:'o',armL:150,armR:-150,armsFront:true}))}`;

S.space=`${bg('#1f1b4d')}${spark(24,30,4,'#fff',0)}${spark(170,50,4,'#fff',.5)}${spark(60,170,3.500,'#fff',1)}${spark(150,150,3,'#fff',1.4)}${spark(100,20,3,'#fff',.8)}
 <circle cx="160" cy="150" r="30" fill="${ORA}"/><ellipse cx="160" cy="150" rx="48" ry="9" fill="none" stroke="${SUN}" stroke-width="4" transform="rotate(-16 160 150)"/>
 <circle cx="30" cy="110" r="14" fill="${SKY}"/><path d="M22,106 q8,-6 14,2" stroke="#6fd08f" stroke-width="4" fill="none"/>
 <g class="float">${at(96,150,.84,cat(Object.assign({eyes:'happy',mouth:'open',armL:120,armR:-120,armsFront:true,hat:`<circle cx="0" cy="-70" r="52" fill="#bfe9ff" opacity=".28" stroke="#fff" stroke-width="3"/>`},NL)))}</g>`;

S.ground=`${bg('#cdeeff')}${cloud(40,26,.7)}<path d="M0,110 h200 v90 h-200 Z" fill="#b07a45"/><path d="M0,104 h200 v14 h-200 Z" fill="#6fd08f"/>
 <ellipse cx="40" cy="150" rx="12" ry="7" fill="#8a5a30"/><ellipse cx="150" cy="170" rx="16" ry="8" fill="#8a5a30"/><path d="M90,140 q10,8 4,20 q-6,10 4,20" fill="none" stroke="#e0a868" stroke-width="5" stroke-linecap="round" class="wiggle"/>
 ${sprout(30,104,14)}${sprout(170,104,10)}
 ${at(110,106,.66,cat({eyes:'happy',armR:150,armsFront:true}))}
 ${arrow(170,50,170,96,RED,6,'float')}`;

S.form=`${bg('#ece6ff')}${floor(184,'#d6ccf5')}
 <g class="float"><circle cx="40" cy="60" r="24" fill="${RED}"/></g><g class="float" style="animation-delay:.4s"><rect x="78" y="34" width="46" height="46" rx="4" fill="${SKY}"/></g><g class="float" style="animation-delay:.8s"><path d="M164,34 l28,48 h-56 Z" fill="${SUN}"/></g>
 <path d="M40,120 a24,24 0 1 1 .1,0 M78,96 h46 v46 h-46 Z" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="6 6" transform="translate(0,20)" opacity=".001"/>
 <g class="glow">${star5(164,130,18,MINT)}</g>
 ${sh(80,192,32)}${at(80,190,.86,cat({eyes:'spark',mouth:'o',armR:-150,armsFront:true}))}`;

S.support=`${park()}${cloud(150,24,.7)}
 <path d="M150,186 q-8,-60 0,-110" fill="none" stroke="#b07a45" stroke-width="5" stroke-linecap="round" class="sway" style="transform-origin:150px 186px"/>
 ${at(108,186,.84,K('orange',{eyes:'closed',mouth:'wavy',feet:'walk',armR:-60}))}
 ${sh(56,192,30)}${at(60,188,.9,cat({eyes:'happy',armR:-70,armsFront:true}))}
 <path d="M78,140 q14,-10 22,-2" fill="none" stroke="${INK}" stroke-width="9" stroke-linecap="round"/>
 ${heart(84,90,1,RED,0)}${arrow(30,60,60,100,RED,5,'float')}`;

S.event=`${bg('#2d2a6e')}${burst(40,40,SUN,0)}${burst(160,30,RED,.5)}${burst(100,60,MINT,1)}
 <path d="M10,84 q90,26 180,0" fill="none" stroke="#fff" stroke-width="2"/>${[[30,90,RED],[60,96,SUN],[100,99,MINT],[140,96,SKY],[170,90,VIO]].map(([x,y,c])=>`<path d="M${x-8},${y-2} h16 l-8,16 Z" fill="${c}"/>`).join('')}
 <rect x="20" y="150" width="160" height="50" fill="#8a5a30"/><rect x="20" y="146" width="160" height="8" fill="#b07a45"/>
 ${at(100,150,.6,cat(Object.assign({eyes:'closed',mouth:'big',armR:-60,prop:`<rect x="-3" y="-16" width="6" height="18" rx="2" fill="#9aa8c0"/><circle cx="0" cy="-20" r="6" fill="${INK}"/>`},NL)))}
 ${note(60,120,SUN,0)}${note(150,116,MINT,.8)}
 <g opacity=".9">${[30,70,130,170].map((x,i)=>`<path d="M${x-12},200 q0,-22 12,-22 q12,0 12,22 Z" fill="${[ORA,'#9aa8c0','#f0c98a','#fff'][i]}"/><path d="M${x-10},182 l4,-8 4,6 M${x+10},182 l-4,-8 -4,6" fill="${[ORA,'#9aa8c0','#f0c98a','#fff'][i]}"/>`).join('')}</g>`;

S.official=`${bg('#e6f1ff')}${floor(166,'#c98a4b')}<rect y="166" width="200" height="8" fill="#e0a868"/>
 <g transform="rotate(-4 120 100)"><rect x="80" y="40" width="90" height="116" rx="3" fill="#fff" stroke="#cbc2e6" stroke-width="2"/><path d="M92,60 h66 M92,74 h66 M92,88 h50" stroke="#cbc2e6" stroke-width="3" stroke-linecap="round"/>
 <g><circle cx="140" cy="124" r="18" fill="none" stroke="${RED}" stroke-width="4"/>${star5(140,124,9,RED)}</g><path d="M92,132 q8,-10 14,0 t14,0" fill="none" stroke="${INK}" stroke-width="2"/></g>
 ${at(46,198,.74,cat({mid:tie,hat:glasses,tail:false,armR:-100,armRcls:'throwarm',armsFront:true,prop:`<rect x="-8" y="-4" width="16" height="10" rx="2" fill="#8a5a30"/><rect x="-3" y="-16" width="6" height="12" fill="#b07a45"/>`}))}`;

S.whose=`${park()}${cloud(40,24,.7)}
 <g transform="translate(100,180) scale(1.6)"><g class="jump">${P.ball(RED)}</g></g>
 ${T(100,60,'?',40,RED,'middle','beat')}
 <path d="M84,150 q-20,-10 -30,10 M116,150 q20,-10 30,10" fill="none" stroke="${VIO}" stroke-width="3" stroke-dasharray="4 6" class="glow"/>
 ${at(36,190,.66,K('orange',{eyes:'wide',headCls:'tilt'}))}${at(164,190,.66,K('grey',{eyes:'wide',headCls:'tilt'}))}
 ${at(100,128,.3,cat({eyes:'wide',tail:false,armL:150,armR:-150,armsFront:true}))}`;

S.matter=`${room('#fff1c9','#e4b77a')}
 ${at(110,186,1.1,P.table(110))}
 <path d="M74,96 h72 v26 h-72 Z" fill="#f3d9a4" stroke="#b07a45" stroke-width="2"/><path d="M74,96 l8,-8 h72 l-8,8 M146,122 l8,-8 v-26" fill="#e4c58a" stroke="#b07a45" stroke-width="2" stroke-linejoin="round"/><path d="M86,104 h40 M86,112 h28" stroke="#b07a45" stroke-width="2.500" stroke-linecap="round"/>
 <g class="beat"><circle cx="150" cy="60" r="16" fill="${RED}"/>${T(150,68,'!',22,'#fff')}</g>
 ${at(40,192,.76,cat({mid:tie,hat:glasses,headCls:'tilt',armR:-96,armsFront:true}))}
 ${at(176,150,.44,K('grey',{mid:tie,tail:false,armL:150,armsFront:true}))}`;

S.everyone=`${bg('#fff3cf')}<circle cx="100" cy="110" r="88" fill="#ffe7a3"/>${floor(186,'#ffe08a')}
 <rect x="8" y="60" width="184" height="134" rx="20" fill="none" stroke="${RED}" stroke-width="4" stroke-dasharray="10 9" class="glow"/>
 ${at(36,150,.4,K('grey',{eyes:'happy'}))}${at(100,146,.4,K('cream',{eyes:'happy'}))}${at(164,150,.4,K('white',{eyes:'happy'}))}
 ${at(30,192,.5,K('orange',{eyes:'happy',armL:125,armLcls:'wave',armsFront:true}))}${at(100,194,.56,cat({eyes:'happy',mouth:'open',armL:130,armR:-130,armsFront:true}))}${at(170,192,.5,K('grey',{eyes:'happy',hat:cap}))}
 <g class="beat">${check(100,34,12,7)}</g>`;

S.center=`${bg('#e3fbf5')}
 <circle cx="100" cy="100" r="88" fill="#fff"/><circle cx="100" cy="100" r="68" fill="${RED}"/><circle cx="100" cy="100" r="48" fill="#fff"/><circle cx="100" cy="100" r="28" fill="${SKY}"/>
 <g class="pulse" style="transform-origin:100px 100px"><circle cx="100" cy="100" r="12" fill="${SUN}"/></g>
 ${at(100,116,.22,cat({tail:false,eyes:'happy'}))}
 ${arrow(20,20,74,74,INK,5,'glow')}${arrow(180,180,126,126,INK,5,'glow')}${arrow(180,20,126,74,INK,5,'glow')}${arrow(20,180,74,126,INK,5,'glow')}`;
