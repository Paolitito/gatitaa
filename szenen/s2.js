/* Tag 3 */
const wheel=(x,y)=>`<circle cx="${x}" cy="${y}" r="16" fill="${INK}"/><g class="spinfast"><circle cx="${x}" cy="${y}" r="8" fill="#dfe6f2"/><path d="M${x-8},${y} h16 M${x},${y-8} v16" stroke="#9aa8c0" stroke-width="2.5"/></g>`;
S.car=`${bg('#cdeeff')}${sun(34,34,12)}${cloud(120,30,.9)}${cloud(176,62,.6)}${hills('#8fe0a8','#6fd08f',132)}
 ${floor(150,'#6b7a99')}<rect y="150" width="200" height="5" fill="#8f9bb5"/>
 <g class="road"><path d="M-40,178 h320" stroke="#fff" stroke-width="5" stroke-dasharray="20 20"/></g>
 <circle class="puff" cx="26" cy="140" r="7" fill="#fff"/><circle class="puff" style="animation-delay:1.1s" cx="22" cy="136" r="5" fill="#fff"/>
 <g class="walkbob">
  <clipPath id="cwin"><path d="M70,112 q5,-28 24,-28 h28 q16,0 24,28 Z"/></clipPath>
  <path d="M60,116 q6,-40 32,-40 h32 q24,0 32,40 Z" fill="#d93a33"/>
  <path d="M70,112 q5,-28 24,-28 h28 q16,0 24,28 Z" fill="#bfe9ff"/>
  <g clip-path="url(#cwin)">${at(110,146,.52,cat({tail:false,eyes:'happy',mouth:'open'}))}</g>
  <path d="M100,84 v28" stroke="#d93a33" stroke-width="5"/>
  <rect x="32" y="110" width="138" height="38" rx="14" fill="${RED}"/>
  <rect x="160" y="118" width="12" height="10" rx="4" fill="${SUN}"/><rect x="30" y="120" width="8" height="10" rx="3" fill="#ff8a7a"/>
  <rect x="96" y="124" width="14" height="4" rx="2" fill="#fff" opacity=".8"/><path d="M40,138 h122" stroke="#d93a33" stroke-width="3" stroke-linecap="round"/>
 </g>
 ${wheel(66,150)}${wheel(142,150)}
 <path d="M4,96 h18 M0,110 h14 M6,124 h12" stroke="#fff" stroke-width="3" stroke-linecap="round" class="glow"/>`;

S.run=`${bg('#e3fbf5')}${cloud(40,30,.8)}${cloud(150,46,.6)}
 <g class="scroll">${tree(30,150,.9)}${tree(130,150,.7)}${tree(230,150,.9)}${tree(330,150,.7)}</g>
 ${floor(150,'#8fe0a8')}${floor(168,'#f3d9a4')}
 <g class="road"><path d="M-40,190 h320" stroke="#e4c283" stroke-width="4" stroke-dasharray="14 26" stroke-linecap="round"/></g>
 ${sh(104,184,34)}
 <circle class="puff" cx="58" cy="176" r="8" fill="#fff"/><circle class="puff" style="animation-delay:.8s" cx="48" cy="170" r="6" fill="#fff"/><circle class="puff" style="animation-delay:1.5s" cx="64" cy="168" r="5" fill="#fff"/>
 <g transform="translate(108,182) rotate(9) scale(-1,1)"><g class="runbob">${cat({armL:0,armR:0,armLcls:'swingA',armRcls:'swingB',feet:'run',eyes:'happy',mouth:'open'})}</g></g>
 <path d="M10,84 h34 M4,104 h26 M14,124 h30" stroke="${VIO}" stroke-width="4" stroke-linecap="round" class="glow"/>
 <path class="sweat" d="${tear(150,70)}" fill="${SKY}"/><path class="sweat" style="animation-delay:.6s" d="${tear(160,86)}" fill="${SKY}"/>`;

const fan=`<g class="wave"><path d="M0,0 L-20,-30 A36,36 0 0 1 20,-30 Z" fill="${SKY}"/><path d="M0,0 L-10,-34 M0,0 L0,-36 M0,0 L10,-34" stroke="#fff" stroke-width="1.6"/><circle r="3" fill="${INK}"/></g>`;
S.hot=`${bg('#ffe2a8')}${sun(42,42,20)}
 <path class="heatw" d="M90,30 q6,-8 0,-16 q-6,-8 0,-16" fill="none" stroke="${ORA}" stroke-width="4" stroke-linecap="round"/><path class="heatw" style="animation-delay:.5s" d="M116,40 q6,-8 0,-16 q-6,-8 0,-16" fill="none" stroke="${RED}" stroke-width="4" stroke-linecap="round"/><path class="heatw" style="animation-delay:1s" d="M142,32 q6,-8 0,-16 q-6,-8 0,-16" fill="none" stroke="${ORA}" stroke-width="4" stroke-linecap="round"/>
 <path d="M0,170 q50,-16 100,0 t100,0 v30 h-200 Z" fill="#f6c27a"/>
 <g fill="#4fc27f"><rect x="16" y="120" width="18" height="60" rx="9"/><rect x="2" y="134" width="12" height="26" rx="6"/><rect x="2" y="150" width="20" height="10" rx="5"/><rect x="36" y="128" width="12" height="24" rx="6"/><rect x="28" y="142" width="20" height="10" rx="5"/></g><circle cx="25" cy="118" r="5" fill="${RED}"/>
 ${thermo(178,52,62,RED)}
 ${sh(104,188,36)}${at(104,186,1,cat({eyes:'closed',mouth:'big',armL:30,armR:-120,armsFront:true,prop:fan}))}
 <path class="sweat" d="${tear(62,88)}" fill="${SKY}"/><path class="sweat" style="animation-delay:.5s" d="${tear(146,100)}" fill="${SKY}"/><path class="sweat" style="animation-delay:.9s" d="${tear(70,120)}" fill="${SKY}"/>`;

const winter=`<path d="M-27,-50 Q0,-40 27,-50 L27,-40 Q0,-30 -27,-40 Z" fill="${RED}"/><path d="M12,-42 l4,26 h12 l-4,-28 Z" fill="${RED}"/><path d="M15,-22 h12 M-14,-45 l2,8 M0,-43 v9" stroke="#fff" stroke-width="2.4"/>`;
const beanie=`<path d="M-28,-96 Q0,-136 28,-96 Z" fill="${RED}"/><rect x="-30" y="-101" width="60" height="10" rx="5" fill="#fff"/><circle cx="0" cy="-126" r="8" fill="#fff"/>`;
S.cold=`${bg('#dff1ff')}<circle cx="40" cy="60" r="50" fill="#eaf7ff"/><circle cx="168" cy="110" r="44" fill="#eaf7ff"/>
 <path d="M0,170 q50,-14 100,0 t100,0 v30 h-200 Z" fill="#fff"/>
 ${thermo(176,44,14,SKY)}
 <g stroke="#b9c9dd" stroke-width="1.6"><circle cx="34" cy="160" r="20" fill="#fff"/><circle cx="34" cy="130" r="14" fill="#fff"/></g><circle cx="29" cy="127" r="1.8" fill="${INK}"/><circle cx="39" cy="127" r="1.8" fill="${INK}"/><path d="M34,131 l10,3 -10,2 Z" fill="${ORA}"/><path d="M18,146 l-12,-10 M50,146 l12,-10" stroke="#b07a45" stroke-width="3" stroke-linecap="round"/>
 ${at(104,184,1,cat({mouth:'wavy',armL:-40,armR:40,bow:false,hat:beanie,extra:winter,tail:false}),'shiver')}
 <ellipse class="puff" cx="136" cy="122" rx="9" ry="6" fill="#fff"/><ellipse class="puff" style="animation-delay:1.1s" cx="142" cy="116" rx="7" ry="5" fill="#fff"/>
 ${[[20,0,3],[52,1.2,2.2],[88,2.4,3],[130,.6,2.4],[160,1.8,3.2],[186,3,2.2],[110,3.4,2]].map(([x,d,r])=>`<circle class="snow" style="animation-delay:-${d}s" cx="${x}" cy="0" r="${r}" fill="#fff"/>`).join('')}`;

S.door=`${bg('#fff1c9')}
 <g fill="#ffe39a">${[[20,30],[20,90],[176,60],[176,120],[20,150]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="5"/>`).join('')}</g>
 ${floor(172,'#e4b77a')}<rect y="172" width="200" height="5" fill="#f0cb95"/>
 <rect x="52" y="30" width="96" height="146" rx="8" fill="#b07a45"/>
 <clipPath id="dopen"><rect x="60" y="38" width="80" height="136"/></clipPath>
 <rect x="60" y="38" width="80" height="136" fill="#fff6c8"/>
 <g clip-path="url(#dopen)"><circle cx="104" cy="96" r="50" fill="#ffe9a8"/>${at(108,172,.86,cat({armR:-125,armRcls:'wave',armsFront:true,mouth:'open',eyes:'happy'}))}</g>
 <g class="dooropen"><rect x="60" y="38" width="80" height="136" fill="${SKY}"/><rect x="70" y="50" width="60" height="50" rx="6" fill="#74b3ff"/><rect x="70" y="110" width="60" height="52" rx="6" fill="#74b3ff"/><circle cx="130" cy="108" r="5" fill="${SUN}"/></g>
 <rect x="62" y="174" width="76" height="10" rx="5" fill="#5fd3c0"/>
 <rect x="10" y="150" width="26" height="26" rx="5" fill="${ORA}"/><g fill="#4fc27f"><ellipse cx="16" cy="136" rx="7" ry="16" transform="rotate(-18 16 136)"/><ellipse cx="30" cy="136" rx="7" ry="16" transform="rotate(18 30 136)"/><ellipse cx="23" cy="130" rx="7" ry="18"/></g>
 <rect x="162" y="60" width="28" height="34" rx="4" fill="#fff" stroke="#b07a45" stroke-width="4"/><circle cx="176" cy="74" r="6" fill="${SUN}"/><path d="M166,90 l8,-8 6,5 6,-9 v12 Z" fill="${MINT}"/>`;

/* Tag 4 */
S.bed=`${bg('#cfc8f5')}
 <rect x="124" y="18" width="58" height="54" rx="8" fill="#2d2a6e" stroke="#fff" stroke-width="5"/><circle cx="164" cy="38" r="11" fill="#ffe89a"/><circle cx="169" cy="34" r="10" fill="#2d2a6e"/>${spark(138,34,4,'#ffe89a',0)}${spark(148,56,3.5,'#ffe89a',.8)}${spark(170,60,3,'#ffe89a',1.4)}
 ${floor(170,'#b5addf')}
 <rect x="14" y="80" width="22" height="96" rx="9" fill="#b07a45"/><rect x="172" y="120" width="16" height="56" rx="7" fill="#b07a45"/>
 <rect x="22" y="138" width="160" height="30" rx="8" fill="#fff" stroke="#cbc2e6" stroke-width="1.6"/>
 <rect x="26" y="166" width="10" height="16" rx="3" fill="#8a5a30"/><rect x="170" y="166" width="10" height="16" rx="3" fill="#8a5a30"/>
 <ellipse cx="66" cy="134" rx="36" ry="15" fill="#fff" stroke="#cbc2e6" stroke-width="1.6"/>
 ${at(66,168,.66,cat({tail:false,eyes:'closed',armL:60,armR:-60}))}
 <g class="breathe"><path d="M34,146 q30,-10 60,-20 q54,-12 90,14 v28 h-150 Z" fill="${SKY}"/><g fill="#fff" opacity=".7"><circle cx="110" cy="140" r="4"/><circle cx="140" cy="150" r="4"/><circle cx="80" cy="154" r="4"/><circle cx="166" cy="146" r="4"/></g></g>
 <path d="M34,146 q30,-10 60,-20" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round"/>
 <g font-family="Baloo 2, Trebuchet MS, sans-serif" font-weight="800" fill="#fff"><text class="zz" x="92" y="92" font-size="14">z</text><text class="zz" style="animation-delay:1s" x="104" y="76" font-size="19">z</text><text class="zz" style="animation-delay:2s" x="118" y="58" font-size="25">Z</text></g>
 <ellipse cx="60" cy="188" rx="12" ry="5" fill="${RED}"/><ellipse cx="88" cy="190" rx="12" ry="5" fill="${RED}"/>`;

S.sit=`${bg('#e3fbf5')}
 <rect x="14" y="22" width="46" height="40" rx="6" fill="#fff" stroke="#b07a45" stroke-width="4"/><path d="M20,56 l12,-14 8,8 10,-14 v20 Z" fill="${MINT}"/><circle cx="46" cy="34" r="5" fill="${SUN}"/>
 ${floor(172,'#bff0de')}<ellipse cx="100" cy="186" rx="80" ry="11" fill="${VIO}" opacity=".3"/>
 <rect x="60" y="60" width="80" height="70" rx="12" fill="#b07a45"/><rect x="70" y="70" width="60" height="50" rx="8" fill="#c98a4b"/>
 <rect x="62" y="150" width="10" height="36" rx="4" fill="#8a5a30"/><rect x="128" y="150" width="10" height="36" rx="4" fill="#8a5a30"/>
 ${at(100,148,1,cat({eyes:'happy'}),'sitdown')}
 <rect x="54" y="140" width="92" height="14" rx="7" fill="#c98a4b"/><ellipse cx="100" cy="141" rx="38" ry="6" fill="${SUN}"/>
 <ellipse cx="88" cy="142" rx="10" ry="5.5" fill="#2f2b3d" stroke="#1b1825" stroke-width="1.6"/><ellipse cx="112" cy="142" rx="10" ry="5.5" fill="#2f2b3d" stroke="#1b1825" stroke-width="1.6"/>
 <g class="float"><path d="M172,60 v40 M172,104 l-9,-12 M172,104 l9,-12" fill="none" stroke="${RED}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g>`;

S.eye=`${bg('#ece6ff')}<circle cx="100" cy="96" r="86" fill="#f6f2ff"/>
 <path d="M40,46 q60,-34 120,0" fill="none" stroke="${INK}" stroke-width="7" stroke-linecap="round"/>
 <g class="blink">
  <path d="M40,74 l-10,-12 M64,56 l-6,-14 M100,48 v-15 M136,56 l6,-14 M160,74 l10,-12" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>
  <path d="M22,100 Q100,34 178,100 Q100,166 22,100 Z" fill="#fff" stroke="${INK}" stroke-width="5" stroke-linejoin="round"/>
  <g class="cloud"><circle cx="100" cy="100" r="33" fill="${SKY}"/><circle cx="100" cy="100" r="33" fill="none" stroke="#2f6fd0" stroke-width="4"/><circle cx="100" cy="100" r="15" fill="${INK}"/><circle cx="110" cy="88" r="7" fill="#fff"/><circle cx="90" cy="110" r="3.5" fill="#fff" opacity=".8"/></g>
 </g>
 ${at(32,196,.5,cat({armR:-158,armsFront:true}))}${spark(170,150,7,SUN,0)}${spark(150,172,5,VIO,.7)}`;

const fork=`<path d="M0,4 v-24 M-4,-20 v-9 M0,-20 v-9 M4,-20 v-9 M-4,-20 h8" fill="none" stroke="#b9c4d8" stroke-width="2.6" stroke-linecap="round"/>`;
const knife=`<path d="M0,4 v-12" stroke="#b9c4d8" stroke-width="3" stroke-linecap="round"/><path d="M-2,-8 v-20 q7,6 4,20 Z" fill="#dfe6f2"/>`;
S.food=`${bg('#fff1c9')}<circle cx="100" cy="80" r="70" fill="#ffe7a3"/>
 ${at(100,160,.92,cat({eyes:'spark',mouth:'tongue',armL:70,armR:-70,prop:knife,propL:fork,tail:false}))}
 ${floor(140,MINT)}<g fill="#fff" opacity=".35">${[0,40,80,120,160].map(x=>`<rect x="${x}" y="140" width="20" height="20"/><rect x="${x+20}" y="160" width="20" height="20"/><rect x="${x}" y="180" width="20" height="20"/>`).join('')}</g>
 <ellipse cx="100" cy="162" rx="78" ry="20" fill="#fff" stroke="#cbc2e6" stroke-width="1.6"/><ellipse cx="100" cy="162" rx="60" ry="14" fill="#f4f1fb"/>
 <path d="M40,160 a24,24 0 0 1 48,0 Z" fill="#ffcf5c" stroke="#e0a83a" stroke-width="2"/><path d="M44,146 q4,-8 8,0 q4,-8 8,0 q4,-8 8,0 q4,-8 8,0 q4,-8 8,0" fill="none" stroke="#4fc27f" stroke-width="5" stroke-linecap="round"/><circle cx="56" cy="142" r="3.5" fill="${RED}"/><circle cx="72" cy="142" r="3.5" fill="${RED}"/>
 <circle cx="108" cy="150" r="14" fill="${RED}"/><circle cx="103" cy="145" r="4" fill="#fff" opacity=".5"/><path d="M108,137 q1,-6 5,-8" stroke="#7a4a21" stroke-width="2.4" fill="none" stroke-linecap="round"/><ellipse cx="116" cy="131" rx="6" ry="3" fill="#4fc27f" transform="rotate(-25 116 131)"/>
 <path d="M128,150 h36 q0,18 -18,18 q-18,0 -18,-18 Z" fill="${SKY}"/><ellipse cx="146" cy="150" rx="18" ry="5" fill="#ffd98a"/>
 <circle class="smoke" cx="140" cy="142" r="5" fill="#fff"/><circle class="smoke" style="animation-delay:1.2s" cx="150" cy="140" r="4.5" fill="#fff"/>
 ${spark(26,40,6,RED,0)}${spark(176,46,6,VIO,.6)}`;

const roller=`<g class="bob"><path d="M0,2 v-22 h12" fill="none" stroke="#9aa8c0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><rect x="10" y="-28" width="26" height="14" rx="5" fill="${SKY}"/></g>`;
const pawprint=(x,y,r)=>`<g transform="translate(${x},${y}) rotate(${r})" fill="${SKY}"><ellipse cx="0" cy="2" rx="5" ry="4"/><circle cx="-5" cy="-4" r="2"/><circle cx="0" cy="-6" r="2"/><circle cx="5" cy="-4" r="2"/></g>`;
S.blue=`${bg('#f4f8ff')}
 <rect class="grow" x="12" y="20" width="176" height="30" rx="15" fill="${SKY}"/><rect class="grow" style="animation-delay:.5s" x="12" y="58" width="150" height="30" rx="15" fill="#74b3ff"/><rect class="grow" style="animation-delay:1s" x="12" y="96" width="96" height="30" rx="15" fill="${SKY}"/>
 ${floor(172,'#d7e6f7')}
 <path d="M20,140 h44 l-5,40 h-34 Z" fill="#b9c4d8"/><ellipse cx="42" cy="140" rx="22" ry="6" fill="${SKY}"/><path d="M22,138 q20,-26 40,0" fill="none" stroke="#9aa8c0" stroke-width="3"/><path d="M58,146 q3,12 0,18 q-3,-6 0,-18" fill="${SKY}"/>
 ${pawprint(84,188,-20,)}${pawprint(104,180,10)}${pawprint(178,190,20)}
 ${sh(118,188,34)}${at(118,186,1,cat({armR:-140,armsFront:true,prop:roller,eyes:'happy',mid:`<ellipse cx="6" cy="-22" rx="7" ry="5" fill="${SKY}"/>`}))}
 <g transform="translate(150,110)"><g class="flutter"><g class="flap"><path d="M0,0 q-12,-14 -16,-2 q-2,10 16,2 Z M0,0 q12,-14 16,-2 q2,10 -16,2 Z" fill="#2f6fd0"/></g><rect x="-1" y="-6" width="2" height="12" rx="1" fill="${INK}"/></g></g>`;
