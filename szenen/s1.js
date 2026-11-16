/* Tag 1 */
S.house=`${bg('#cdeeff')}${sun(162,36,14)}${cloud(42,34,1)}${hills('#8fe0a8','#6fd08f')}
 <rect x="126" y="52" width="14" height="30" rx="2" fill="#c98a4b"/>
 <circle class="smoke" cx="133" cy="48" r="6" fill="#fff"/><circle class="smoke" style="animation-delay:1s" cx="135" cy="44" r="5" fill="#fff"/><circle class="smoke" style="animation-delay:2s" cx="131" cy="46" r="4.5" fill="#fff"/>
 <rect x="50" y="92" width="100" height="86" rx="6" fill="#ffd166"/>
 <path d="M38,96 L100,44 L162,96 Z" fill="${RED}" stroke="${RED}" stroke-width="6" stroke-linejoin="round"/>
 <circle cx="100" cy="74" r="8" fill="#fff" opacity=".85"/>
 <rect x="62" y="130" width="28" height="48" rx="12" fill="${VIO}"/><circle cx="83" cy="156" r="2.6" fill="${SUN}"/>
 <clipPath id="hwin"><rect x="102" y="104" width="38" height="36" rx="6"/></clipPath>
 <rect x="102" y="104" width="38" height="36" rx="6" fill="#bfe9ff"/>
 <g clip-path="url(#hwin)">${at(119,172,.5,cat({armR:-125,armRcls:'wave',armsFront:true,mouth:'open',tail:false}))}</g>
 <rect x="102" y="104" width="38" height="36" rx="6" fill="none" stroke="#fff" stroke-width="5"/>
 <rect x="98" y="139" width="46" height="6" rx="3" fill="#5fd3c0"/>
 <path d="M70,178 q6,12 -4,22 h28 q-6,-10 0,-22 Z" fill="#f3d9a4"/>
 ${flower(22,186,ORA,0)}${flower(38,186,SUN,.6)}${flower(166,186,VIO,.3)}${flower(182,186,ORA,.9)}`;

const snack=`<path d="M-9,0 l-8,-6 v12 Z" fill="#ff8a3c"/><ellipse cx="0" cy="0" rx="10" ry="6.5" fill="#ffa53c"/><circle cx="5" cy="-1.5" r="1.6" fill="${INK}"/>`;
S.eat=`${bg('#fff1c9')}
 <path d="M0,40 h200 M0,80 h200 M0,120 h200 M40,0 v150 M80,0 v150 M120,0 v150 M160,0 v150" stroke="#ffe39a" stroke-width="2"/>
 <rect x="14" y="16" width="52" height="48" rx="8" fill="#bfe9ff" stroke="#fff" stroke-width="5"/><path d="M40,16 v48 M14,40 h52" stroke="#fff" stroke-width="4"/><circle cx="54" cy="28" r="6" fill="${SUN}"/>
 <path d="M150,20 h34 M150,20 v-6 M184,20 v-6" stroke="#c98a4b" stroke-width="4" stroke-linecap="round"/><rect x="154" y="6" width="9" height="14" rx="3" fill="${MINT}"/><rect x="168" y="2" width="9" height="18" rx="3" fill="${VIO}"/>
 ${at(104,178,1,cat({armL:40,armR:-140,armRcls:'munch',armsFront:true,mouth:'open',mouthCls:'chew',prop:snack,tail:false}))}
 ${floor(150,'#5fd3c0')}<rect y="150" width="200" height="8" fill="#9be6d8"/>
 <g fill="#fff" opacity=".7"><circle cx="20" cy="172" r="4"/><circle cx="60" cy="186" r="4"/><circle cx="100" cy="172" r="4"/><circle cx="140" cy="186" r="4"/><circle cx="180" cy="172" r="4"/></g>
 <ellipse cx="50" cy="152" rx="30" ry="8" fill="#fff" stroke="#cbc2e6" stroke-width="1.6"/><path d="M22,150 q28,22 56,0" fill="${SKY}"/>
 <g transform="translate(42,142)">${snack}</g><g transform="translate(60,144) rotate(12)">${snack}</g>
 <rect x="150" y="128" width="20" height="26" rx="4" fill="#bfe9ff" stroke="#fff" stroke-width="2.5"/><rect x="152" y="138" width="16" height="14" rx="2" fill="#fff"/>
 ${heart(140,72,1,RED,0)}${heart(152,88,.7,'#ff8a7a',1)}${heart(130,92,.6,SUN,1.8)}`;

S.happy=`${bg('#fff3cf')}
 ${[RED,SUN,MINT,SKY,VIO].map((c,i)=>`<path d="M${22+i*9},190 a${78-i*9},${78-i*9} 0 0 1 ${156-i*18},0" fill="none" stroke="${c}" stroke-width="9"/>`).join('')}
 ${floor(178,'#ffe08a')}${sh(100,186,40,'shadow')}
 ${at(100,184,1,cat({armL:125,armR:-125,armsFront:true,eyes:'happy',mouth:'open'}),'jump')}
 ${spark(26,60,7,RED,0)}${spark(172,52,7,RED,.7)}${spark(150,110,6,VIO,1.2)}${spark(36,120,6,VIO,.4)}
 ${[[20,RED,0],[48,SUN,.9],[76,MINT,1.7],[124,SKY,.4],[152,VIO,1.3],[180,ORA,2.2],[100,SUN,2.5]].map(([x,c,d])=>`<rect class="conf" style="animation-delay:-${d}s" x="${x}" y="0" width="7" height="4" rx="1.5" fill="${c}"/>`).join('')}`;

const tear=(x,y,c)=>`M${x},${y} q-5,8 0,11 q5,-3 0,-11 Z`;
S.water=`${bg('#d6f1ff')}
 <circle cx="26" cy="40" r="30" fill="#e6f7ff"/><circle cx="178" cy="96" r="26" fill="#e6f7ff"/>
 ${floor(152,'#9fd4f0')}<rect y="152" width="200" height="7" fill="#c3e6f8"/>
 <path d="M134,0 v22 q0,12 -12,12 h-12" fill="none" stroke="#9aa8c0" stroke-width="12" stroke-linecap="round"/><rect x="100" y="28" width="14" height="16" rx="4" fill="#b9c4d8"/>
 <rect x="126" y="6" width="16" height="8" rx="4" fill="${RED}"/>
 <path class="drip" d="${tear(107,46)}" fill="${SKY}"/><path class="drip" style="animation-delay:.55s" d="${tear(107,46)}" fill="${SKY}"/>
 <path d="M82,96 h50 l-5,58 h-40 Z" fill="#f3fbff" stroke="#fff" stroke-width="4" stroke-linejoin="round"/>
 <path d="M85,114 q5.5,-4 11,0 t11,0 t11,0 t11,0 l-3.4,37 h-37.2 Z" fill="#5cc3ff" opacity=".9"/>
 <ellipse class="ripple" cx="107" cy="114" rx="14" ry="3.5" fill="none" stroke="#fff" stroke-width="2"/>
 <circle class="bubble" cx="98" cy="144" r="2.4" fill="#fff"/><circle class="bubble" style="animation-delay:1.2s" cx="116" cy="146" r="2" fill="#fff"/>
 <path d="M92,104 v40" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".7"/>
 <path d="${tear(150,140)}" fill="${SKY}"/><path d="${tear(164,146)}" fill="#5cc3ff"/><ellipse cx="158" cy="160" rx="16" ry="4" fill="#5cc3ff" opacity=".7"/>
 ${sh(42,190,30)}${at(42,188,.82,cat({armR:-100,armRcls:'bob',mouth:'tongue'}))}`;

S.dog=`${bg('#e3fbf5')}${cloud(40,36,.9)}${cloud(150,54,.7)}${hills('#8fe0a8','#6fd08f',166)}
 ${sh(114,184,46)}
 <path class="wiggle" d="M146,146 q18,-6 15,-28" fill="none" stroke="#e8b06a" stroke-width="9" stroke-linecap="round"/>
 <rect x="124" y="156" width="11" height="26" rx="5.5" fill="#d99a52"/><rect x="96" y="158" width="11" height="24" rx="5.5" fill="#d99a52"/>
 <ellipse cx="116" cy="150" rx="36" ry="24" fill="#e8b06a"/><ellipse cx="128" cy="142" rx="11" ry="8" fill="#d99a52"/>
 <rect x="136" y="158" width="12" height="26" rx="6" fill="#e8b06a"/><rect x="84" y="160" width="12" height="24" rx="6" fill="#e8b06a"/>
 <path d="M70,140 q14,8 28,0" fill="none" stroke="${RED}" stroke-width="6" stroke-linecap="round"/><circle cx="84" cy="147" r="4" fill="${SUN}"/>
 <g class="tilt" style="transform-origin:84px 140px">
  <ellipse cx="64" cy="116" rx="9" ry="17" fill="#b9773a" transform="rotate(18 64 116)"/><ellipse cx="104" cy="114" rx="9" ry="17" fill="#b9773a" transform="rotate(-18 104 114)"/>
  <circle cx="84" cy="118" r="25" fill="#e8b06a"/>
  <ellipse cx="82" cy="128" rx="14" ry="11" fill="#fff3dc"/>
  <ellipse cx="82" cy="122" rx="5" ry="3.8" fill="${INK}"/>
  <circle cx="73" cy="110" r="3.4" fill="${INK}"/><circle cx="74" cy="109" r="1.2" fill="#fff"/><circle cx="94" cy="110" r="3.4" fill="${INK}"/><circle cx="95" cy="109" r="1.2" fill="#fff"/>
  <path d="M76,130 q6,5 12,0" fill="none" stroke="${INK}" stroke-width="1.8" stroke-linecap="round"/>
  <path class="chew" d="M79,132 h6 v6 a3,3 0 0 1 -6,0 Z" fill="#ff7a59"/>
 </g>
 <g transform="translate(166,182) rotate(-14)"><rect x="-10" y="-3" width="20" height="6" rx="3" fill="#fff"/><circle cx="-10" cy="-3" r="4" fill="#fff"/><circle cx="-10" cy="3" r="4" fill="#fff"/><circle cx="10" cy="-3" r="4" fill="#fff"/><circle cx="10" cy="3" r="4" fill="#fff"/></g>
 ${at(28,192,.5,cat({armR:-125,armRcls:'wave',armsFront:true,mouth:'open'}))}`;

/* Tag 2 */
S.book=`${bg('#ece6ff')}
 <circle cx="30" cy="34" r="22" fill="#f6f2ff"/><circle cx="176" cy="150" r="30" fill="#f6f2ff"/>
 ${at(100,120,.82,cat({tail:false,eyes:'open'}),'peek')}
 <path d="M22,78 L100,84 L178,78 V168 L100,174 L22,168 Z" fill="${SKY}" stroke="${SKY}" stroke-width="5" stroke-linejoin="round"/>
 <path d="M30,74 Q65,62 100,76 V164 Q65,150 30,160 Z" fill="#fff" stroke="#cbc2e6" stroke-width="1.6"/>
 <path d="M170,74 Q135,62 100,76 V164 Q135,150 170,160 Z" fill="#fff" stroke="#cbc2e6" stroke-width="1.6"/>
 <path d="M40,92 q25,-8 50,0 M40,104 q25,-8 50,0 M40,116 q25,-8 50,0 M40,128 q20,-7 36,-3" fill="none" stroke="#cbc2e6" stroke-width="2.4" stroke-linecap="round"/>
 <circle cx="136" cy="100" r="12" fill="${SUN}"/><path d="M112,140 q12,-18 24,0 q10,-12 22,0" fill="none" stroke="${MINT}" stroke-width="4" stroke-linecap="round"/>
 <path class="flip" d="M100,76 Q135,62 170,74 V160 Q135,150 100,164 Z" fill="#f6f2ff" stroke="#cbc2e6" stroke-width="1.6"/>
 <path d="M150,80 v34 l6,-6 6,6 v-34 Z" fill="${RED}"/>
 <ellipse cx="72" cy="72" rx="9" ry="6" fill="#2f2b3d" stroke="#1b1825" stroke-width="1.4"/><ellipse cx="128" cy="72" rx="9" ry="6" fill="#2f2b3d" stroke="#1b1825" stroke-width="1.4"/>
 ${spark(24,120,6,VIO,0)}${spark(180,44,7,SUN,.8)}`;

const glasses=`<g fill="none" stroke="#fff" stroke-width="2.2"><circle cx="-14" cy="-74" r="10.5"/><circle cx="14" cy="-74" r="10.5"/><path d="M-3.5,-74 h7"/></g>`;
const openBook=`<g transform="translate(0,-30)"><path d="M-27,-13 Q-13,-18 0,-12 Q13,-18 27,-13 V12 Q13,7 0,13 Q-13,7 -27,12 Z" fill="#fff" stroke="${SKY}" stroke-width="3" stroke-linejoin="round"/><path d="M0,-12 V13" stroke="${SKY}" stroke-width="2"/><path d="M-21,-6 h14 M-21,0 h14 M7,-6 h14 M7,0 h14" stroke="#cbc2e6" stroke-width="2" stroke-linecap="round"/><ellipse cx="-27" cy="2" rx="6" ry="8" fill="#2f2b3d" stroke="#1b1825" stroke-width="1.4"/><ellipse cx="27" cy="2" rx="6" ry="8" fill="#2f2b3d" stroke="#1b1825" stroke-width="1.4"/></g>`;
const letter=(x,y,ch,c,d)=>`<g transform="translate(${x},${y})"><text class="rise" style="animation-delay:${d}s" font-family="Baloo 2, Trebuchet MS, sans-serif" font-weight="800" font-size="20" fill="${c}">${ch}</text></g>`;
S.read=`${bg('#fff1c9')}
 <rect x="14" y="20" width="60" height="50" rx="6" fill="#ffe39a"/><path d="M14,36 h60 M14,52 h60" stroke="#fff1c9" stroke-width="3"/>
 <g fill="${RED}"><rect x="20" y="22" width="7" height="13"/></g><rect x="29" y="24" width="7" height="11" fill="${SKY}"/><rect x="38" y="21" width="7" height="14" fill="${MINT}"/><rect x="24" y="38" width="7" height="13" fill="${VIO}"/><rect x="52" y="39" width="7" height="12" fill="${ORA}"/>
 ${floor(168,'#ffd98a')}<ellipse cx="100" cy="184" rx="74" ry="12" fill="${VIO}" opacity=".35"/>
 <path d="M168,184 v-78" stroke="#b07a45" stroke-width="5" stroke-linecap="round"/><path d="M150,106 l8,-26 h20 l8,26 Z" fill="${SUN}"/><circle class="glow" cx="168" cy="112" r="20" fill="#fff6c8" opacity=".6"/><rect x="156" y="182" width="24" height="6" rx="3" fill="#b07a45"/>
 ${at(96,186,1.1,cat({armL:8,armR:-8,headCls:'tilt',mid:openBook,hat:glasses}))}
 ${letter(34,118,'A',RED,0)}${letter(52,96,'B',SKY,.9)}${letter(132,84,'C',MINT,1.7)}`;

S.big=`${bg('#fff3cf')}
 <circle cx="84" cy="104" r="88" fill="#ffe7a3"/>
 ${floor(184,'#ffe08a')}${sh(84,190,60)}${sh(172,190,12)}
 <path d="M12,34 v150 M12,34 l-6,10 M12,34 l6,10 M12,184 l-6,-10 M12,184 l6,-10" fill="none" stroke="${RED}" stroke-width="3" stroke-linecap="round"/>
 ${at(86,188,1.36,cat({armL:70,armR:-70,eyes:'happy',mouth:'open'}),'pulse')}
 <g transform="translate(172,186)"><g class="shiver"><path d="M10,-4 q12,2 10,-8" fill="none" stroke="#8a8fb0" stroke-width="2" stroke-linecap="round"/><ellipse cx="0" cy="-6" rx="11" ry="7" fill="#b9bdd4"/><circle cx="-7" cy="-13" r="4.5" fill="#b9bdd4"/><circle cx="-7" cy="-13" r="2.2" fill="#ffc2a3"/><circle cx="-8" cy="-7" r="1.4" fill="${INK}"/><circle cx="-11.5" cy="-5" r="1.4" fill="#ff8a7a"/></g></g>
 <path d="M190,170 v14 M190,170 l-4,5 M190,170 l4,5 M190,184 l-4,-5 M190,184 l4,-5" fill="none" stroke="${RED}" stroke-width="2" stroke-linecap="round" opacity=".7"/>`;

S.small=`${bg('#e3fbf5')}
 ${floor(184,'#bff0de')}
 <g opacity=".28">${at(70,190,1.35,K('orange',{armL:20,armR:-20}))}</g>
 <circle cx="156" cy="150" r="38" fill="#fff" opacity=".75"/>
 ${sh(156,186,16,'shadow')}
 ${at(156,184,.44,cat({armL:125,armR:-125,armsFront:true,eyes:'happy',mouth:'open'}),'hop')}
 <circle cx="156" cy="150" r="38" fill="none" stroke="${VIO}" stroke-width="5"/>
 <path d="M128,178 l-20,18" stroke="${VIO}" stroke-width="8" stroke-linecap="round"/>
 ${spark(126,108,5,SUN,0)}${spark(188,112,5,SUN,.8)}${spark(186,184,4,RED,.4)}`;

S.hand=`${bg('#ffe9d6')}
 <circle cx="104" cy="96" r="84" fill="#ffdcc0"/>
 <path d="M150,52 q14,10 14,26 M160,42 q20,14 20,38 M58,52 q-14,10 -14,26" fill="none" stroke="${VIO}" stroke-width="4" stroke-linecap="round" class="glow"/>
 <g transform="translate(104,186)"><g class="wave">
  <rect x="-24" y="-28" width="48" height="44" rx="8" fill="${SKY}"/><rect x="-26" y="-34" width="52" height="12" rx="6" fill="#8dc0ff"/>
  <g fill="#ffcf9e" stroke="#e0a070" stroke-width="1.8">
   <rect x="-48" y="-78" width="15" height="40" rx="7.5" transform="rotate(-32 -40 -50)"/>
   <rect x="-27" y="-140" width="13" height="56" rx="6.5"/><rect x="-13" y="-148" width="13" height="64" rx="6.5"/><rect x="1" y="-146" width="13" height="62" rx="6.5"/><rect x="15" y="-134" width="13" height="50" rx="6.5"/>
   <rect x="-29" y="-96" width="58" height="64" rx="22"/>
  </g>
  <path d="M-14,-66 q14,10 30,-2 M-16,-52 q10,8 22,4" fill="none" stroke="#e0a070" stroke-width="1.8" stroke-linecap="round"/>
 </g></g>
 ${at(30,192,.5,cat({armR:-125,armRcls:'wave',armsFront:true,mouth:'open'}))}`;
