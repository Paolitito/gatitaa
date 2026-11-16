/* Tag 7 */
S.friend=`${bg('#e3fbf5')}
 <path d="M0,22 q50,26 100,0 t100,0" fill="none" stroke="#b07a45" stroke-width="2"/>
 ${[[20,30,RED],[44,37,SUN],[68,36,SKY],[92,28,VIO],[116,28,MINT],[140,36,RED],[164,37,SUN],[186,30,SKY]].map(([x,y,c])=>`<path d="M${x-8},${y-4} h16 l-8,16 Z" fill="${c}"/>`).join('')}
 ${floor(182,'#bff0de')}${sh(70,190,32,'shadow')}${sh(132,190,32)}
 ${at(70,186,.95,cat({armL:30,armR:-64,eyes:'happy',mouth:'open'}),'hop')}
 ${at(132,186,.95,K('orange',{armL:64,armR:-125,armRcls:'wave',armsFront:true,eyes:'happy',mouth:'open'}))}
 ${spark(100,70,8,SUN,0)}${spark(24,100,6,VIO,.6)}${spark(180,90,6,RED,1.1)}${heart(101,104,.9,RED,.5)}`;

const earflower=`<g transform="translate(24,-104)"><g fill="${SUN}"><circle cx="0" cy="-6" r="4.5"/><circle cx="6" cy="-1" r="4.5"/><circle cx="-6" cy="-1" r="4.5"/><circle cx="3.5" cy="5.5" r="4.5"/><circle cx="-3.5" cy="5.5" r="4.5"/></g><circle r="3.4" fill="${RED}"/></g>`;
S.family=`${bg('#ffe7a3')}
 <rect x="6" y="6" width="188" height="188" rx="16" fill="#fff8e6" stroke="#b07a45" stroke-width="9"/>
 <path d="M12,150 q44,-16 88,0 t88,0 v36 h-176 Z" fill="#bff0de"/>
 ${sun(40,40,10)}
 ${at(56,180,.84,K('grey',{eyes:'happy',armR:-50}))}
 ${at(144,180,.84,K('white',{eyes:'happy',armL:50,hat:earflower}))}
 ${at(100,182,.6,cat({armL:125,armR:-125,armsFront:true,eyes:'happy',mouth:'open',tail:false}),'hop')}
 ${at(160,184,.34,K('orange',{mouth:'open',tail:false}))}
 ${heart(100,64,1.3,RED,0)}${heart(126,52,.7,'#ff8a7a',1.2)}`;

const ha=(x,y,c,d,sz)=>`<g transform="translate(${x},${y})"><text class="rise" style="animation-delay:${d}s" font-family="Baloo 2, Trebuchet MS, sans-serif" font-weight="800" font-size="${sz}" fill="${c}">HA</text></g>`;
S.laugh=`${bg('#fff1c9')}
 <g class="spin" stroke="#ffe39a" stroke-width="10" stroke-linecap="round">${[0,30,60,90,120,150,180,210,240,270,300,330].map(a=>`<path transform="rotate(${a} 100 104)" d="M100,36 v-30"/>`).join('')}</g>
 <circle cx="100" cy="104" r="64" fill="#ffe7a3"/>
 ${floor(184,'#ffe08a')}${sh(100,190,38)}
 ${at(100,186,1.06,cat({armL:-34,armR:34,armsFront:true,eyes:'happy',mouth:'big',headCls:'tilt'}),'laugh')}
 <path class="sweat" d="${tear(58,100)}" fill="${SKY}"/><path class="sweat" style="animation-delay:.6s" d="${tear(142,100)}" fill="${SKY}"/>
 ${ha(18,70,RED,0,22)}${ha(150,60,VIO,.8,26)}${ha(160,124,ORA,1.6,18)}${ha(10,130,SKY,2.1,18)}`;

S.mother=`${bg('#ffe9d6')}<circle cx="100" cy="96" r="84" fill="#ffdcc0"/>
 ${floor(184,'#ffd9bd')}${sh(98,190,50)}
 ${at(98,188,1.16,K('white',{eyes:'happy',hat:earflower,armL:26,armR:-26}),'sway')}
 ${at(100,186,.5,cat({eyes:'closed',tail:false,armL:40,armR:-40}),'breathe')}
 <ellipse cx="74" cy="158" rx="9" ry="16" fill="#fff" stroke="#cbc2e6" stroke-width="1.6" transform="rotate(-58 74 158)"/><ellipse cx="124" cy="158" rx="9" ry="16" fill="#fff" stroke="#cbc2e6" stroke-width="1.6" transform="rotate(58 124 158)"/>
 ${heart(150,70,1.2,RED,0)}${heart(166,96,.8,'#ff8a7a',1)}${heart(40,80,.9,RED,1.7)}`;

S.boy=`${bg('#cdeeff')}${sun(34,34,12)}${cloud(150,34,.9)}${hills('#8fe0a8','#6fd08f',166)}
 ${sh(92,188,30)}
 <rect x="78" y="146" width="11" height="34" rx="5" fill="#ffcf9e"/><rect x="95" y="146" width="11" height="34" rx="5" fill="#ffcf9e"/>
 <ellipse cx="81" cy="182" rx="11" ry="6" fill="${RED}"/><ellipse cx="103" cy="182" rx="11" ry="6" fill="${RED}"/>
 <rect x="72" y="130" width="40" height="24" rx="7" fill="#2f6fd0"/>
 <rect x="58" y="98" width="11" height="36" rx="5.5" fill="#ffcf9e" transform="rotate(12 63 100)"/>
 <g transform="translate(116,102)"><g class="wave"><rect x="-5.5" y="-36" width="11" height="38" rx="5.5" fill="#ffcf9e" transform="rotate(28)"/><circle cx="19" cy="-36" r="7" fill="#ffcf9e"/></g></g>
 <rect x="68" y="92" width="48" height="46" rx="12" fill="${SUN}"/><rect x="68" y="108" width="48" height="8" fill="${ORA}"/>
 <circle cx="66" cy="70" r="5.5" fill="#ffcf9e"/><circle cx="118" cy="70" r="5.5" fill="#ffcf9e"/>
 <circle cx="92" cy="68" r="26" fill="#ffcf9e"/>
 <path d="M66,66 q-2,-30 26,-30 q28,0 26,30 q-8,-14 -20,-14 q-6,6 -18,4 q-8,0 -14,10 Z" fill="#7a4a21"/>
 <circle cx="82" cy="72" r="3.2" fill="${INK}"/><circle cx="102" cy="72" r="3.2" fill="${INK}"/><circle cx="83" cy="71" r="1.1" fill="#fff"/><circle cx="103" cy="71" r="1.1" fill="#fff"/>
 <path d="M84,82 q8,7 16,0" fill="none" stroke="${INK}" stroke-width="2.2" stroke-linecap="round"/>
 <ellipse cx="76" cy="80" rx="5" ry="3" fill="#ff7a59" opacity=".5"/><ellipse cx="108" cy="80" rx="5" ry="3" fill="#ff7a59" opacity=".5"/>
 ${at(160,190,.58,cat({armL:125,armLcls:'wave',armsFront:true,mouth:'open'}))}
 <circle cx="30" cy="180" r="10" fill="#fff" stroke="#cbc2e6" stroke-width="1.6"/><path d="M30,170 v20 M20,180 h20" stroke="${RED}" stroke-width="2"/>`;

/* Tag 8 */
const win=(x,y)=>`<rect x="${x}" y="${y}" width="22" height="22" rx="4" fill="#bfe9ff" stroke="#fff" stroke-width="3"/><path d="M${x+11},${y} v22 M${x},${y+11} h22" stroke="#fff" stroke-width="2"/>`;
const backpack=`<rect x="-30" y="-52" width="16" height="30" rx="7" fill="${RED}"/><path d="M-12,-50 q12,6 24,0" fill="none" stroke="${RED}" stroke-width="4"/>`;
S.school=`${bg('#cdeeff')}${cloud(34,36,.8)}${cloud(170,30,.7)}${hills('#8fe0a8','#6fd08f',166)}
 <path d="M100,26 v-20" stroke="#b07a45" stroke-width="3" stroke-linecap="round"/><path class="flower" d="M100,6 q9,-4 18,0 v11 q-9,-4 -18,0 Z" fill="${MINT}"/>
 <rect x="82" y="46" width="36" height="44" fill="#ffd98a"/><path d="M76,48 L100,24 L124,48 Z" fill="${RED}" stroke="${RED}" stroke-width="4" stroke-linejoin="round"/>
 <circle cx="100" cy="64" r="11" fill="#fff" stroke="#b07a45" stroke-width="2.5"/><path d="M100,64 v-7 M100,64 h5" stroke="${INK}" stroke-width="2" stroke-linecap="round"/>
 <rect x="36" y="88" width="128" height="92" rx="4" fill="#ffd98a"/><rect x="30" y="78" width="140" height="14" rx="5" fill="${RED}"/>
 ${win(46,102)}${win(132,102)}${win(46,140)}${win(132,140)}
 <path d="M84,180 v-36 a16,16 0 0 1 32,0 v36 Z" fill="${VIO}"/><path d="M100,128 v52" stroke="#7b55d9" stroke-width="2"/><circle cx="96" cy="158" r="2" fill="${SUN}"/><circle cx="104" cy="158" r="2" fill="${SUN}"/>
 <text x="100" y="120" text-anchor="middle" font-family="Baloo 2, Trebuchet MS, sans-serif" font-weight="800" font-size="15" fill="${RED}">ABC</text>
 <path d="M84,180 q-6,10 -18,20 h68 q-12,-10 -18,-20 Z" fill="#f3d9a4"/>
 ${at(172,194,.5,cat({feet:'walk',armLcls:'slowA',armRcls:'slowB',armL:0,armR:0,mid:backpack}),'walkbob')}`;

S.write=`${bg('#fff1c9')}
 <rect x="16" y="16" width="56" height="44" rx="6" fill="#3aa568" stroke="#b07a45" stroke-width="4"/><path d="M26,32 h22 M26,44 h34" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".8"/>
 ${at(92,168,.98,cat({armL:30,armR:-22,armsFront:true,mouth:'tongue',tail:false}))}
 ${floor(142,'#c98a4b')}<rect y="142" width="200" height="8" fill="#e0a868"/>
 <path d="M52,152 h100 l12,42 h-124 Z" fill="#fff" stroke="#cbc2e6" stroke-width="1.6"/>
 <path d="M62,164 q8,-6 16,0 t16,0 t16,0 t16,0" fill="none" stroke="${INK}" stroke-width="2.4" stroke-linecap="round" opacity=".55"/>
 <path class="draw" d="M60,178 q8,-6 16,0 t16,0 t16,0 t16,0 t12,0" fill="none" stroke="${VIO}" stroke-width="2.8" stroke-linecap="round"/>
 <g transform="translate(124,150)"><g class="pen"><path d="M0,0 l14,24" stroke="${SUN}" stroke-width="7" stroke-linecap="round"/><path d="M12,21 l5,8 -9,-3 Z" fill="#ffcf9e"/><path d="M15.5,27 l1.5,2 -3,-1 Z" fill="${INK}"/><path d="M-1,-2 l3,-5" stroke="${RED}" stroke-width="7" stroke-linecap="round"/></g></g>
 <rect x="166" y="126" width="20" height="22" rx="4" fill="${SKY}"/><path d="M170,126 l-4,-22 M176,126 v-26 M182,126 l4,-20" stroke="${RED}" stroke-width="3" stroke-linecap="round"/>
 <circle cx="26" cy="156" r="9" fill="#fff" stroke="#cbc2e6" stroke-width="1.6"/><path d="M21,154 l5,5 4,-7" fill="none" stroke="#cbc2e6" stroke-width="1.6"/>`;

const fp=(x,y)=>`<ellipse cx="${x}" cy="${y}" rx="5" ry="3" fill="#d9b877"/>`;
S.walk=`${bg('#cdeeff')}${sun(164,34,12)}${cloud(50,32,.9)}
 <g class="scroll" style="animation-duration:14s">${tree(40,152,.9)}${tree(150,152,.7)}${tree(240,152,.9)}${tree(350,152,.7)}</g>
 ${floor(152,'#8fe0a8')}${floor(170,'#f3d9a4')}
 ${fp(16,188)}${fp(30,180)}${fp(44,188)}${fp(58,180)}
 ${sh(108,188,34)}
 <g transform="translate(108,186) scale(-1,1)"><g class="walkbob">${cat({armL:0,armR:0,armLcls:'slowA',armRcls:'slowB',feet:'walk',headCls:'tilt'})}</g></g>
 <path d="M178,186 v-44" stroke="#b07a45" stroke-width="4" stroke-linecap="round"/><path d="M160,138 h28 l8,8 -8,8 h-28 Z" fill="${SUN}"/>
 <g transform="translate(40,96)"><g class="flutter"><g class="flap"><path d="M0,0 q-12,-14 -16,-2 q-2,10 16,2 Z M0,0 q12,-14 16,-2 q2,10 -16,2 Z" fill="${ORA}"/></g><rect x="-1" y="-6" width="2" height="12" rx="1" fill="${INK}"/></g></g>`;

S.box=`${bg('#ece6ff')}<circle cx="100" cy="84" r="70" fill="#f6f2ff"/>
 ${floor(176,'#d6ccf5')}${sh(100,186,62)}
 <rect x="50" y="106" width="100" height="16" fill="#8a5a30"/>
 <clipPath id="boxc"><rect x="0" y="0" width="200" height="120"/></clipPath>
 <g clip-path="url(#boxc)">${at(100,150,.9,cat({armL:125,armR:-125,armsFront:true,eyes:'happy',mouth:'open',tail:false}),'pop')}</g>
 <path d="M50,118 l-24,-20 h22 l14,20 Z" fill="#e4b77a"/><path d="M150,118 l24,-20 h-22 l-14,20 Z" fill="#e4b77a"/>
 <rect x="50" y="118" width="100" height="66" rx="3" fill="#d9a56a"/><rect x="92" y="118" width="16" height="66" fill="#c98a4b" opacity=".6"/>
 <path d="M124,166 v-22 M116,152 l8,-10 8,10" fill="none" stroke="#8a5a30" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M62,166 h20" stroke="#8a5a30" stroke-width="3" stroke-linecap="round"/>
 ${spark(30,60,7,SUN,0)}${spark(172,50,7,RED,.6)}${spark(160,90,5,VIO,1.2)}`;

S.dark=`${bg('#1f1b3a')}
 <rect x="118" y="20" width="62" height="56" rx="8" fill="#2d2a6e" stroke="#3a3560" stroke-width="5"/><circle cx="160" cy="42" r="11" fill="#ffe89a"/><circle cx="165" cy="38" r="10" fill="#2d2a6e"/>${spark(134,36,3.5,'#ffe89a',0)}${spark(142,60,3,'#ffe89a',.9)}
 ${floor(176,'#17142c')}
 <path d="M14,176 v-60 q0,-12 12,-12 h10 q12,0 12,12 v60" fill="#2a2550"/>
 ${at(92,186,1.02,cat({fur:'#262241',out:'#3d3866',belly:'#2c2749',tail:true}))}
 <rect x="160" y="148" width="14" height="30" rx="3" fill="#f4f1fb"/><path d="M167,148 v-6" stroke="${INK}" stroke-width="2"/><circle class="glow" cx="167" cy="136" r="22" fill="#ffe89a" opacity=".25"/><path class="beat" d="M167,126 q-7,9 0,14 q7,-5 0,-14 Z" fill="${ORA}"/>
 <ellipse cx="167" cy="180" rx="16" ry="4" fill="#2a2550"/>`;
