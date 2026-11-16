/* Tag 5 */
S.table=`${bg('#fff1c9')}
 <rect x="126" y="18" width="56" height="50" rx="8" fill="#bfe9ff" stroke="#fff" stroke-width="5"/><path d="M154,18 v50 M126,43 h56" stroke="#fff" stroke-width="4"/>
 ${floor(170,'#e4b77a')}<rect y="170" width="200" height="5" fill="#f0cb95"/>
 ${at(100,188,.64,cat({armR:-125,armRcls:'wave',armsFront:true,mouth:'open'}),'peek')}
 <rect x="38" y="124" width="12" height="64" rx="5" fill="#8a5a30"/><rect x="150" y="124" width="12" height="64" rx="5" fill="#8a5a30"/>
 <rect x="24" y="110" width="152" height="16" rx="8" fill="#c98a4b"/>
 <path d="M58,108 h84 v14 l-10.5,8 -10.5,-8 -10.5,8 -10.5,-8 -10.5,8 -10.5,-8 -10.5,8 -10.5,-8 Z" fill="${MINT}"/>
 <path d="M62,110 q-2,-22 -8,-30 h28 q-6,8 -8,30 Z" fill="${SKY}"/>
 <g class="flower"><path d="M68,82 v-30" stroke="#4fc27f" stroke-width="3" stroke-linecap="round"/><g fill="${RED}"><circle cx="68" cy="42" r="6"/><circle cx="60" cy="48" r="6"/><circle cx="76" cy="48" r="6"/><circle cx="63" cy="57" r="6"/><circle cx="73" cy="57" r="6"/></g><circle cx="68" cy="50" r="5" fill="${SUN}"/></g>
 <path d="M118,88 h28 v14 q0,8 -8,8 h-12 q-8,0 -8,-8 Z" fill="${VIO}"/><path d="M146,92 q10,0 8,8 q-2,6 -8,5" fill="none" stroke="${VIO}" stroke-width="4"/>
 <circle class="smoke" cx="128" cy="80" r="4.5" fill="#fff"/><circle class="smoke" style="animation-delay:1.3s" cx="136" cy="78" r="4" fill="#fff"/>`;

S.chair=`${bg('#ece6ff')}<circle cx="100" cy="92" r="80" fill="#f6f2ff"/>
 ${floor(176,'#d6ccf5')}${sh(100,186,52)}
 <rect x="66" y="126" width="10" height="56" rx="4" fill="#b52f29"/><rect x="124" y="126" width="10" height="56" rx="4" fill="#b52f29"/>
 <rect x="62" y="34" width="76" height="88" rx="14" fill="${RED}"/><rect x="74" y="46" width="14" height="64" rx="7" fill="#ff7a70"/><rect x="93" y="46" width="14" height="64" rx="7" fill="#ff7a70"/><rect x="112" y="46" width="14" height="64" rx="7" fill="#ff7a70"/>
 <g class="breathe"><path d="M118,110 q22,4 18,-12" fill="none" stroke="#e08a2e" stroke-width="8" stroke-linecap="round"/><ellipse cx="104" cy="106" rx="27" ry="13" fill="#ffb347" stroke="#e08a2e" stroke-width="1.6"/></g>
 <polygon points="70,98 72,84 82,92" fill="#ffb347" stroke="#e08a2e" stroke-width="1.4" stroke-linejoin="round"/><polygon points="86,91 95,83 96,97" fill="#ffb347" stroke="#e08a2e" stroke-width="1.4" stroke-linejoin="round"/>
 <ellipse cx="83" cy="104" rx="15" ry="12" fill="#ffb347" stroke="#e08a2e" stroke-width="1.6"/>
 <path d="M74,104 q3.5,3.5 7,0 M85,104 q3.5,3.5 7,0" fill="none" stroke="${INK}" stroke-width="1.8" stroke-linecap="round"/><path d="M81.6,108 h3 l-1.5,2 Z" fill="#ff8a7a"/>
 <rect x="52" y="116" width="96" height="18" rx="9" fill="#d93a33"/>
 <rect x="56" y="132" width="11" height="54" rx="4" fill="#d93a33"/><rect x="133" y="132" width="11" height="54" rx="4" fill="#d93a33"/>
 <g font-family="Baloo 2, Trebuchet MS, sans-serif" font-weight="800" fill="${VIO}"><text class="zz" x="112" y="84" font-size="13">z</text><text class="zz" style="animation-delay:1s" x="124" y="70" font-size="18">z</text></g>
 ${at(174,192,.46,cat({eyes:'happy'}))}`;

S.play=`${bg('#e3fbf5')}<circle cx="60" cy="50" r="34" fill="#f0fdf8"/>
 ${floor(172,'#bff0de')}
 <path d="M10,186 q14,-10 26,0 t26,0 t26,-2 t30,-6" fill="none" stroke="${VIO}" stroke-width="3" stroke-linecap="round"/>
 ${sh(70,188,34)}${at(70,186,1,cat({armL:20,armR:-72,armRcls:'bob',eyes:'happy',mouth:'open',headCls:'tilt'}))}
 <g class="roll"><circle cx="128" cy="164" r="20" fill="${VIO}"/><path d="M112,156 q16,-12 32,2 M110,166 q18,10 36,-2 M118,148 q-6,18 6,34 M134,146 q10,16 0,36" fill="none" stroke="#c9b6ff" stroke-width="2.4" stroke-linecap="round"/></g>
 <g transform="translate(176,184)"><path d="M10,-4 q12,2 10,-8" fill="none" stroke="#8a8fb0" stroke-width="2" stroke-linecap="round"/><ellipse cx="0" cy="-6" rx="11" ry="7" fill="${SUN}"/><circle cx="-7" cy="-13" r="4.5" fill="${SUN}"/><circle cx="-8" cy="-7" r="1.4" fill="${INK}"/></g>
 ${spark(150,60,7,SUN,0)}${spark(176,96,5,RED,.7)}${spark(24,110,5,VIO,.3)}`;

const wedge=(a,c)=>`<path transform="rotate(${a} 124 120)" d="M124,120 L124,92 A28,28 0 0 1 148.2,106 Z" fill="${c}"/>`;
S.ball=`${bg('#cdeeff')}${sun(36,34,12)}${cloud(150,36,.8)}
 <rect y="128" width="200" height="40" fill="#5cc3ff"/><path d="M0,134 q12,-6 24,0 t24,0 t24,0 t24,0 t24,0 t24,0 t24,0 t24,0 t24,0" fill="none" stroke="#fff" stroke-width="2.5" opacity=".7" class="cloud"/>
 ${floor(160,'#ffe08a')}
 ${sh(124,188,24,'shadow')}
 <g class="jump"><g class="spin"><circle cx="124" cy="120" r="28" fill="#fff"/>${wedge(0,RED)}${wedge(120,SUN)}${wedge(240,SKY)}<circle cx="124" cy="120" r="5" fill="#fff"/></g><circle cx="124" cy="120" r="28" fill="none" stroke="#cbc2e6" stroke-width="1.6"/></g>
 ${sh(50,190,30)}${at(50,188,.86,cat({armL:30,armR:-120,armsFront:true,headCls:'tilt',mouth:'open'}))}
 <path d="M176,178 l8,-22 8,22 Z" fill="${RED}"/><path d="M184,156 v-14" stroke="#b07a45" stroke-width="2"/>`;

const leafU=`<path d="M0,4 v-40" stroke="#3aa568" stroke-width="3.5" stroke-linecap="round"/><g transform="translate(0,-40) rotate(-12)"><path d="M-44,0 Q-20,-34 0,-30 Q24,-34 46,0 Q24,-10 0,-6 Q-20,-10 -44,0 Z" fill="#9be8b4" stroke="#3aa568" stroke-width="2.5" stroke-linejoin="round"/><path d="M-40,-2 Q0,-22 42,-2" fill="none" stroke="#3aa568" stroke-width="2"/></g>`;
S.green=`${bg('#dff7e6')}${cloud(40,30,.8)}
 <circle cx="170" cy="60" r="36" fill="#4fc27f"/><circle cx="150" cy="78" r="22" fill="#62d08f"/><circle cx="188" cy="84" r="20" fill="#62d08f"/><rect x="166" y="90" width="9" height="86" rx="3" fill="#b07a45"/>
 ${hills('#62d08f','#4fc27f',166)}
 <path d="M10,176 l4,-14 4,14 4,-18 4,18 M176,180 l4,-14 4,14 4,-18 4,18" fill="none" stroke="#3aa568" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
 <g transform="translate(44,170)"><g class="hop"><ellipse cx="-16" cy="6" rx="10" ry="5" fill="#3aa568"/><ellipse cx="16" cy="6" rx="10" ry="5" fill="#3aa568"/><ellipse cx="0" cy="0" rx="22" ry="15" fill="#4fc27f"/><ellipse cx="0" cy="4" rx="13" ry="8" fill="#b7efc8"/><circle cx="-10" cy="-14" r="7.5" fill="#4fc27f"/><circle cx="10" cy="-14" r="7.5" fill="#4fc27f"/><circle cx="-10" cy="-15" r="4" fill="#fff"/><circle cx="10" cy="-15" r="4" fill="#fff"/><circle cx="-10" cy="-15" r="2" fill="${INK}"/><circle cx="10" cy="-15" r="2" fill="${INK}"/><path d="M-8,-3 q8,6 16,0" fill="none" stroke="${INK}" stroke-width="1.8" stroke-linecap="round"/></g></g>
 ${sh(112,188,34)}${at(112,186,.96,cat({armR:-155,armsFront:true,prop:leafU,eyes:'happy'}))}
 <circle cx="84" cy="180" r="9" fill="#62d08f"/><path d="M84,171 q1,-5 4,-6" stroke="#7a4a21" stroke-width="2" fill="none" stroke-linecap="round"/>`;

/* Tag 6 */
S.fish=`${bg('#d9fbf1')}<circle cx="30" cy="34" r="46" fill="#bff3e4"/><circle cx="176" cy="60" r="30" fill="#bff3e4"/>
 ${at(48,196,.9,cat({tail:false}),'peek')}
 ${floor(140,'#c98a4b')}<rect y="140" width="200" height="9" fill="#e0a868"/>
 <ellipse cx="30" cy="142" rx="10" ry="6" fill="#2f2b3d" stroke="#1b1825" stroke-width="1.4"/><ellipse cx="66" cy="142" rx="10" ry="6" fill="#2f2b3d" stroke="#1b1825" stroke-width="1.4"/>
 <ellipse cx="126" cy="143" rx="30" ry="5" fill="${INK}" opacity=".15"/>
 <circle cx="126" cy="104" r="39" fill="#bfe9ff" opacity=".75"/>
 <clipPath id="bowl"><circle cx="126" cy="104" r="37"/></clipPath>
 <path clip-path="url(#bowl)" d="M84,88 q7,-5 14,0 t14,0 t14,0 t14,0 t14,0 t14,0 V146 H84 Z" fill="#5cc3ff" opacity=".8"/>
 <path d="M108,138 q3,-10 0,-18 M144,138 q-4,-12 2,-22" stroke="${MINT}" stroke-width="3.5" fill="none" stroke-linecap="round"/>
 <g class="swim"><path d="M112,112 l-11,-8 v16 Z" fill="#ff8a3c"/><ellipse cx="124" cy="112" rx="14" ry="9" fill="#ffa53c"/><path d="M120,104 q5,-7 10,0" fill="#ff8a3c"/><circle cx="131" cy="110" r="2.3" fill="${INK}"/><path d="M118,108 q3,4 0,8" stroke="#fff" stroke-width="1.6" fill="none"/></g>
 <circle class="bubble" cx="140" cy="98" r="3" fill="#fff"/><circle class="bubble" style="animation-delay:1s" cx="146" cy="104" r="2" fill="#fff"/><circle class="bubble" style="animation-delay:1.7s" cx="112" cy="96" r="2.4" fill="#fff"/>
 <circle cx="126" cy="104" r="39" fill="none" stroke="#fff" stroke-width="4"/>
 <path d="M100,84 q8,-14 22,-17" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" opacity=".9"/>
 <ellipse cx="126" cy="66" rx="24" ry="5" fill="none" stroke="#fff" stroke-width="4"/>`;

S.cup=`${bg('#ffe9d6')}<circle cx="100" cy="100" r="86" fill="#ffdcc0"/>
 <ellipse cx="100" cy="174" rx="78" ry="12" fill="#fff" stroke="#e7cdb6" stroke-width="1.6"/>
 <path d="M146,110 q34,2 26,32 q-6,18 -30,16" fill="none" stroke="${RED}" stroke-width="11" stroke-linecap="round"/>
 <ellipse cx="100" cy="98" rx="50" ry="11" fill="#7a4a21"/>
 ${at(100,142,.74,cat({tail:false,eyes:'happy',mouth:'open'}),'peek')}
 <path d="M50,98 q50,16 100,0 q0,74 -50,74 q-50,0 -50,-74 Z" fill="${RED}"/>
 <path d="M50,98 q50,16 100,0" fill="none" stroke="#ff7a70" stroke-width="5"/>
 <g fill="#fff" opacity=".85"><circle cx="76" cy="128" r="5"/><circle cx="100" cy="142" r="5"/><circle cx="124" cy="128" r="5"/><circle cx="88" cy="156" r="4"/><circle cx="114" cy="158" r="4"/></g>
 <ellipse cx="76" cy="102" rx="9" ry="6" fill="#2f2b3d" stroke="#1b1825" stroke-width="1.4"/><ellipse cx="124" cy="102" rx="9" ry="6" fill="#2f2b3d" stroke="#1b1825" stroke-width="1.4"/>
 <circle class="smoke" cx="52" cy="78" r="6" fill="#fff"/><circle class="smoke" style="animation-delay:1s" cx="150" cy="74" r="6" fill="#fff"/><circle class="smoke" style="animation-delay:2s" cx="60" cy="64" r="5" fill="#fff"/>
 <path d="M30,176 h30" stroke="#b9c4d8" stroke-width="4" stroke-linecap="round"/><ellipse cx="26" cy="176" rx="8" ry="5" fill="#dfe6f2"/>`;

const gift=`<rect x="-13" y="-10" width="26" height="22" rx="3" fill="${VIO}"/><rect x="-3" y="-10" width="6" height="22" fill="${SUN}"/><rect x="-13" y="-2" width="26" height="5" fill="${SUN}"/><path d="M0,-10 q-10,-12 -12,-2 q2,4 12,2 Z M0,-10 q10,-12 12,-2 q-2,4 -12,2 Z" fill="${SUN}"/>`;
S.give=`${bg('#fff3cf')}<circle cx="100" cy="90" r="74" fill="#ffe7a3"/>
 ${floor(180,'#ffe08a')}${sh(50,188,30)}${sh(152,188,30)}
 ${at(50,186,.86,cat({armR:-92,eyes:'happy'}))}
 ${flipAt(152,186,.86,K('orange',{armR:-92,eyes:'happy',mouth:'open'}))}
 <g transform="translate(88,140)"><g class="givemove">${gift}</g></g>
 ${heart(100,84,1.1,RED,0)}${heart(84,98,.7,'#ff8a7a',.9)}${heart(118,100,.7,SUN,1.7)}`;

S.love=`${bg('#ffe9d6')}
 ${heartS(100,112,7.4,'#ffd2b0')}
 ${floor(184,'#ffd9bd')}${sh(100,190,56)}
 ${at(84,188,1.04,cat({armL:30,armR:-58,eyes:'happy',armsFront:false}),'sway')}
 ${at(132,188,.62,K('grey',{eyes:'happy',armL:40,armR:-20}),'sway')}
 <ellipse cx="118" cy="150" rx="8" ry="14" fill="#2f2b3d" stroke="#1b1825" stroke-width="1.6" transform="rotate(-62 118 150)"/>
 ${heart(100,62,1.4,RED,0)}${heart(60,72,.9,'#ff8a7a',.8)}${heart(146,78,1,RED,1.6)}${heart(124,48,.7,SUN,2.2)}`;

S.heart=`${bg('#fff1c9')}<circle cx="100" cy="100" r="88" fill="#ffe7a3"/>
 ${at(100,100,.64,cat({tail:false,eyes:'happy',mouth:'open'}),'peek')}
 ${heartS(100,128,5.4,RED,'beat')}
 <g transform="translate(100,128) scale(5.4)"><g class="beat"><ellipse cx="-5.6" cy="-8.4" rx="2" ry="1.2" fill="#fff" opacity=".55" transform="rotate(-30 -5.6 -8.4)"/></g></g>
 <ellipse cx="78" cy="84" rx="9" ry="6" fill="#2f2b3d" stroke="#1b1825" stroke-width="1.4" transform="rotate(24 78 84)"/><ellipse cx="122" cy="84" rx="9" ry="6" fill="#2f2b3d" stroke="#1b1825" stroke-width="1.4" transform="rotate(-24 122 84)"/>
 ${heart(26,110,.9,RED,0)}${heart(176,96,.8,'#ff8a7a',1)}${heart(160,150,.7,RED,1.8)}${spark(34,46,6,VIO,.3)}${spark(170,40,6,VIO,1)}`;
