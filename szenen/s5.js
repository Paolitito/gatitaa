/* Tag 9 */
const NL={out:'#8f8ad6'};
S.night=`${bg('#2d2a6e')}
 <circle cx="44" cy="44" r="26" fill="#ffe89a"/><circle cx="56" cy="36" r="24" fill="#2d2a6e"/>
 ${spark(100,24,5,'#ffe89a',0)}${spark(150,50,6,'#ffe89a',.6)}${spark(182,22,4,'#ffe89a',1.1)}${spark(84,70,4,'#ffe89a',1.5)}${spark(176,96,5,'#ffe89a',.3)}${spark(20,100,4,'#ffe89a',.9)}
 <g transform="translate(190,40)"><g class="shoot"><path d="M0,0 l26,-14" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/><circle r="3" fill="#fff"/></g></g>
 <g class="cloud"><ellipse cx="150" cy="118" rx="26" ry="9" fill="#3b3880"/><ellipse cx="168" cy="112" rx="18" ry="10" fill="#3b3880"/></g>
 <rect x="0" y="150" width="34" height="50" fill="#1f1b4d"/><rect x="8" y="160" width="8" height="10" fill="#ffe89a" class="glow"/><rect x="20" y="176" width="8" height="10" fill="#ffe89a"/>
 <rect x="168" y="140" width="32" height="60" fill="#1f1b4d"/><rect x="176" y="150" width="8" height="10" fill="#ffe89a"/><rect x="186" y="170" width="8" height="10" fill="#ffe89a" class="glow"/>
 <rect x="132" y="138" width="14" height="26" fill="#17143c"/>
 <path d="M30,200 V172 L100,150 L170,172 V200 Z" fill="#1f1b4d"/><path d="M30,172 L100,150 L170,172" fill="none" stroke="#3b3880" stroke-width="4" stroke-linejoin="round"/>
 ${at(96,156,.82,cat(Object.assign({headCls:'tilt'},NL)))}`;

S.star=`${bg('#4a4496')}
 ${spark(24,30,5,'#ffe89a',0)}${spark(176,24,5,'#ffe89a',.5)}${spark(30,96,4,'#ffe89a',1)}${spark(186,110,5,'#ffe89a',1.4)}${spark(66,20,3.5,'#fff',.8)}${spark(160,150,4,'#fff',.2)}
 <path d="M0,176 q50,-18 100,0 t100,0 v24 h-200 Z" fill="#373278"/>
 <circle class="glow" cx="118" cy="78" r="58" fill="#ffe89a" opacity=".35"/>
 <g class="beat">${star5(118,78,46,SUN,`stroke="${SUN}" stroke-width="8"`)}
  <circle cx="106" cy="74" r="4.2" fill="${INK}"/><circle cx="130" cy="74" r="4.2" fill="${INK}"/><circle cx="107.5" cy="72.5" r="1.4" fill="#fff"/><circle cx="131.5" cy="72.5" r="1.4" fill="#fff"/>
  <path d="M110,86 q8,8 16,0" fill="none" stroke="${INK}" stroke-width="2.6" stroke-linecap="round"/><ellipse cx="98" cy="84" rx="5" ry="3" fill="${ORA}" opacity=".7"/><ellipse cx="138" cy="84" rx="5" ry="3" fill="${ORA}" opacity=".7"/></g>
 ${at(46,190,.78,cat(Object.assign({armR:-150,armRcls:'bob',armsFront:true,eyes:'spark',mouth:'open'},NL)))}`;

S.fly=`${bg('#cdeeff')}${sun(170,30,11)}
 <g class="scroll" style="animation-duration:9s">${cloud(40,44,1,'')}${cloud(150,150,.8,'')}${cloud(240,44,1,'')}${cloud(350,150,.8,'')}${cloud(110,96,.6,'')}${cloud(310,96,.6,'')}</g>
 <path d="M0,190 q50,-14 100,0 t100,0 v10 h-200 Z" fill="#8fe0a8"/>
 <path d="M14,150 l24,-12 M10,170 l20,-10 M30,176 l18,-9" stroke="#fff" stroke-width="4" stroke-linecap="round" class="glow"/>
 <g transform="translate(64,152) rotate(62)"><g class="float">
  <path class="flower" d="M-20,-48 Q-40,-6 -34,30 Q-16,16 0,30 Q16,16 34,30 Q40,-6 20,-48 Z" fill="${RED}"/>
  ${cat({armL:158,armR:-158,armsFront:true,eyes:'happy',mouth:'open'})}
 </g></g>
 <path d="M150,84 q5,-6 10,0 q5,-6 10,0" fill="none" stroke="${INK}" stroke-width="2" stroke-linecap="round" class="float"/><path d="M24,60 q4,-5 8,0 q4,-5 8,0" fill="none" stroke="${INK}" stroke-width="2" stroke-linecap="round" class="float"/>`;

S.phone=`${bg('#e3fbf5')}<circle cx="100" cy="100" r="84" fill="#f0fdf8"/>
 <path d="M40,60 q-14,18 0,36 M28,48 q-22,30 0,60 M160,60 q14,18 0,36 M172,48 q22,30 0,60" fill="none" stroke="${VIO}" stroke-width="5" stroke-linecap="round" class="glow"/>
 <g class="ring">
  <rect x="60" y="20" width="80" height="160" rx="16" fill="${INK}"/>
  <clipPath id="scr"><rect x="67" y="32" width="66" height="130" rx="8"/></clipPath>
  <rect x="67" y="32" width="66" height="130" rx="8" fill="#ffe7a3"/>
  <g clip-path="url(#scr)"><circle cx="100" cy="92" r="40" fill="#fff3cf"/>${at(100,146,.6,cat({tail:false,armR:-125,armRcls:'wave',armsFront:true,mouth:'open',eyes:'happy'}))}<rect x="67" y="128" width="66" height="34" fill="#fff8f0"/></g>
  <circle cx="84" cy="145" r="9" fill="${MINT}"/><circle cx="116" cy="145" r="9" fill="${RED}"/>
  <path d="M80,145 q4,-5 8,0" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/><path d="M112,147 q4,-5 8,0" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>
  <rect x="88" y="168" width="24" height="4" rx="2" fill="#7a6a8c"/><circle cx="100" cy="26" r="2" fill="#7a6a8c"/>
 </g>
 ${note(30,150,VIO,0)}${note(170,150,RED,1.2)}`;

const phones=`<path d="M-35,-78 Q0,-132 35,-78" fill="none" stroke="${RED}" stroke-width="6" stroke-linecap="round"/><rect x="-45" y="-88" width="12" height="26" rx="6" fill="${RED}"/><rect x="33" y="-88" width="12" height="26" rx="6" fill="${RED}"/>`;
S.music=`${bg('#ece6ff')}<circle cx="92" cy="100" r="80" fill="#f6f2ff"/>
 ${floor(182,'#d6ccf5')}${sh(92,190,36)}
 <rect x="152" y="112" width="40" height="72" rx="8" fill="${INK}"/><circle class="beat" cx="172" cy="134" r="10" fill="#7a6a8c"/><circle class="beat" cx="172" cy="162" r="14" fill="#7a6a8c"/><circle cx="172" cy="162" r="5" fill="${INK}"/>
 ${at(92,186,1.02,cat({armL:96,armR:-96,armLcls:'bob',armRcls:'bob',eyes:'happy',mouth:'open',bow:false,hat:phones}),'dance')}
 ${note(26,90,RED,0)}${note(150,84,VIO,.7)}${note(44,56,SKY,1.4)}${note(132,48,ORA,2)}${note(170,60,MINT,1)}`;

/* Tag 10 */
S.open=`${bg('#fff1c9')}<circle cx="90" cy="96" r="78" fill="#ffe7a3"/>
 ${floor(180,'#ffe08a')}${sh(88,188,56)}
 <rect x="40" y="118" width="96" height="14" fill="#8a5a30"/>
 <ellipse class="glow" cx="88" cy="124" rx="44" ry="12" fill="#fff6c8"/>
 <g fill="${SUN}"><circle cx="70" cy="124" r="7"/><circle cx="88" cy="121" r="7"/><circle cx="106" cy="124" r="7"/></g>
 ${spark(70,96,6,SUN,0)}${spark(96,80,7,'#fff',.5)}${spark(112,100,5,SUN,1)}
 <g class="lid"><path d="M40,130 q0,-36 48,-36 q48,0 48,36 Z" fill="#b07a45"/><path d="M82,95 h12 v35 h-12 Z" fill="${SUN}"/></g>
 <rect x="40" y="130" width="96" height="52" rx="5" fill="#c98a4b"/><rect x="40" y="130" width="96" height="8" fill="${SUN}"/><rect x="82" y="130" width="12" height="52" fill="${SUN}"/><rect x="80" y="144" width="16" height="16" rx="4" fill="#8a5a30"/><circle cx="88" cy="151" r="3" fill="${SUN}"/>
 ${flipAt(166,190,.8,cat({armR:-118,armRcls:'bob',armsFront:true,eyes:'wide',mouth:'o'}))}`;

const bball=`<circle r="10" fill="${ORA}"/><path d="M-10,0 h20 M0,-10 v20 M-7,-7 q7,7 0,14 M7,-7 q-7,7 0,14" fill="none" stroke="#b5571a" stroke-width="1.6"/>`;
S.throw=`${bg('#cdeeff')}${sun(30,30,11)}${cloud(112,30,.8)}${hills('#8fe0a8','#6fd08f',170)}
 <path d="M182,186 v-96" stroke="#9aa8c0" stroke-width="5" stroke-linecap="round"/><rect x="160" y="70" width="34" height="28" rx="4" fill="#fff" stroke="#9aa8c0" stroke-width="2.5"/><rect x="170" y="80" width="14" height="12" fill="none" stroke="${RED}" stroke-width="2"/>
 <path d="M78,112 q54,-70 106,0" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="3 9" stroke-linecap="round"/>
 ${sh(46,190,30)}${at(46,188,.88,cat({armL:30,armR:-120,armRcls:'throwarm',armsFront:true,eyes:'happy',mouth:'open'}))}
 <g transform="translate(76,112)"><g class="throwball"><g class="spinfast">${bball}</g></g></g>
 <ellipse cx="178" cy="106" rx="15" ry="4.5" fill="none" stroke="${RED}" stroke-width="3.5"/><path d="M164,107 l5,20 h18 l5,-20 M170,108 l4,19 M186,108 l-4,19 M178,109 v18" fill="none" stroke="#fff" stroke-width="1.8"/>`;

S.head=`${bg('#e3fbf5')}<circle cx="100" cy="100" r="90" fill="#f0fdf8"/>
 <g opacity=".3">${at(100,216,1.5,cat({tail:false,bow:false}))}</g>
 <clipPath id="hc"><rect x="0" y="0" width="200" height="152"/></clipPath>
 <g clip-path="url(#hc)">${at(100,216,1.5,cat({tail:false,eyes:'happy',headCls:'tilt'}))}</g>
 <g class="spin"><circle cx="100" cy="100" r="78" fill="none" stroke="${RED}" stroke-width="5" stroke-dasharray="14 12" stroke-linecap="round"/></g>
 <g class="float"><path d="M186,22 l-22,18 M164,40 l3,-13 M164,40 l13,-2" fill="none" stroke="${RED}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g>`;

const feather=`<path d="M0,4 l-6,-34" stroke="#7a6a8c" stroke-width="2" stroke-linecap="round"/><path d="M-6,-30 q-12,-6 -8,-24 q14,6 12,24 Z" fill="${SKY}"/><path d="M-6,-30 q-4,-12 -4,-22" stroke="#2f6fd0" stroke-width="1.4" fill="none"/>`;
const toe=(x,y,r,d)=>`<g class="toe" style="animation-delay:${d}s"><circle cx="${x}" cy="${y}" r="${r}" fill="#ffcf9e" stroke="#e0a070" stroke-width="1.8"/><ellipse cx="${x}" cy="${y-r*.3}" rx="${r*.5}" ry="${r*.38}" fill="#fff" opacity=".6"/></g>`;
S.foot=`${bg('#ffe9d6')}<circle cx="96" cy="104" r="86" fill="#ffdcc0"/>
 <rect x="62" y="150" width="60" height="50" rx="14" fill="${SKY}"/><rect x="58" y="148" width="68" height="12" rx="6" fill="#8dc0ff"/>
 <path d="M60,150 q-14,-40 2,-76 q6,-14 30,-14 q30,0 32,22 q4,34 -4,68 Z" fill="#ffcf9e" stroke="#e0a070" stroke-width="1.8" stroke-linejoin="round"/>
 ${toe(64,56,13,0)}${toe(84,44,10,.1)}${toe(101,42,9,.2)}${toe(115,48,8,.3)}${toe(126,58,7,.4)}
 <path d="M76,120 q14,10 30,2" fill="none" stroke="#e0a070" stroke-width="1.8" stroke-linecap="round"/>
 ${flipAt(166,192,.52,cat({armR:-112,armRcls:'bob',armsFront:true,prop:feather,eyes:'happy',mouth:'open'}))}
 ${ha(140,40,RED,0,16)}${ha(20,110,VIO,1.2,16)}`;

const crown=`<g>${[[-22,-100,SUN],[-8,-106,RED],[8,-106,VIO],[22,-100,ORA]].map(([x,y,c])=>`<circle cx="${x}" cy="${y}" r="6.5" fill="${c}"/><circle cx="${x}" cy="${y}" r="2.4" fill="#fff"/>`).join('')}</g>`;
const bouquet=`<path d="M0,4 l-6,-20 M0,4 v-22 M0,4 l6,-20" stroke="#3aa568" stroke-width="2.4" stroke-linecap="round"/><circle cx="-7" cy="-20" r="6" fill="${RED}"/><circle cx="0" cy="-24" r="6" fill="${SUN}"/><circle cx="7" cy="-20" r="6" fill="${VIO}"/>`;
const bfly=(x,y,c,d)=>`<g transform="translate(${x},${y})"><g class="flutter" style="animation-delay:-${d}s"><g class="flap"><path d="M0,0 q-12,-14 -16,-2 q-2,10 16,2 Z M0,0 q12,-14 16,-2 q2,10 -16,2 Z" fill="${c}"/></g><rect x="-1" y="-6" width="2" height="12" rx="1" fill="${INK}"/></g></g>`;
S.beautiful=`${bg('#cdeeff')}${sun(34,34,12)}
 ${[RED,ORA,SUN,MINT,SKY,VIO].map((c,i)=>`<path d="M${10+i*7},176 a${90-i*7},${90-i*7} 0 0 1 ${180-i*14},0" fill="none" stroke="${c}" stroke-width="7" opacity=".85"/>`).join('')}
 ${hills('#8fe0a8','#6fd08f',160)}
 ${flower(16,186,RED,0)}${flower(34,192,SUN,.4)}${flower(52,184,VIO,.8)}${flower(150,186,ORA,.2)}${flower(168,192,RED,.6)}${flower(186,184,SKY,1)}
 ${sh(100,188,34)}${at(100,186,.98,cat({bow:false,hat:crown,eyes:'spark',mouth:'open',armL:30,armR:-110,armsFront:true,prop:bouquet}))}
 ${bfly(40,96,ORA,0)}${bfly(150,84,VIO,2.5)}
 ${spark(60,60,6,'#fff',0)}${spark(140,50,7,'#fff',.6)}${spark(176,120,5,SUN,1.2)}${spark(24,130,5,SUN,.3)}`;
