const INK='#3a2a4a', RED='#f2453d', SUN='#ffc93c', MINT='#2fc7a8', SKY='#4f9dff', VIO='#9b6bff', ORA='#ff9a3c';
function arm(side,ang,o,prop,cls){
  const x=side==='L'?-20:20;
  return `<g transform="translate(${x},-42) rotate(${ang})"><g class="${cls||''}"><ellipse cx="0" cy="12" rx="7" ry="14" fill="${o.fur}" stroke="${o.out}" stroke-width="1.6"/>${prop?`<g transform="translate(0,26) rotate(${-ang})">${prop}</g>`:''}</g></g>`;
}
function cat(o){
  o=Object.assign({fur:'#2f2b3d',out:'#1b1825',belly:'#454059',line:'#ffffff',plain:false,eyes:'open',mouth:'w',armL:18,armR:-18,armsFront:false,bow:true,prop:'',propL:'',armRcls:'',armLcls:'',headCls:'',mid:'',extra:'',tail:true,feet:'',hat:''},o);
  const S=`stroke="${o.out}" stroke-width="1.6"`, L=o.line;
  const arms=arm('L',o.armL,o,o.propL,o.armLcls)+arm('R',o.armR,o,o.prop,o.armRcls);
  const eye=x=>o.plain?`<ellipse cx="${x}" cy="-74" rx="6" ry="7.5" fill="${INK}"/><circle cx="${x+2}" cy="-77.5" r="2.4" fill="#fff"/>`:`<ellipse cx="${x}" cy="-74" rx="7" ry="8.5" fill="#ffd94d"/><ellipse cx="${x}" cy="-73.5" rx="3.6" ry="6" fill="#1b1825"/><circle cx="${x+2.4}" cy="-77.5" r="2.3" fill="#fff"/><circle cx="${x-2}" cy="-70.5" r="1" fill="#fff"/>`;
  let eyes='';
  if(o.eyes==='open') eyes=`<g class="blink">${eye(-14)}${eye(14)}</g>`;
  if(o.eyes==='happy') eyes=`<path d="M-20,-72 q6,-8 12,0 M8,-72 q6,-8 12,0" fill="none" stroke="${L}" stroke-width="2.8" stroke-linecap="round"/>`;
  if(o.eyes==='closed') eyes=`<path d="M-20,-74 q6,6 12,0 M8,-74 q6,6 12,0" fill="none" stroke="${L}" stroke-width="2.8" stroke-linecap="round"/>`;
  if(o.eyes==='wide') eyes=`<circle cx="-14" cy="-75" r="8" fill="${o.plain?'#fff':'#ffd94d'}" ${o.plain?`stroke="${INK}" stroke-width="2"`:''}/><circle cx="-14" cy="-75" r="3" fill="#1b1825"/><circle cx="14" cy="-75" r="8" fill="${o.plain?'#fff':'#ffd94d'}" ${o.plain?`stroke="${INK}" stroke-width="2"`:''}/><circle cx="14" cy="-75" r="3" fill="#1b1825"/>`;
  if(o.eyes==='spark') eyes=`${eye(-14)}${eye(14)}<path d="M-18,-80 l1.5,3 3,1.5 -3,1.5 -1.5,3 -1.5,-3 -3,-1.5 3,-1.5 Z M10,-80 l1.5,3 3,1.5 -3,1.5 -1.5,3 -1.5,-3 -3,-1.5 3,-1.5 Z" fill="#fff" class="twinkle"/>`;
  let mouth=`<path d="M-6,-61 q3,4 6,0 q3,4 6,0" fill="none" stroke="${L}" stroke-width="1.8" stroke-linecap="round"/>`;
  if(o.mouth==='open') mouth=`<g class="${o.mouthCls||''}"><ellipse cx="0" cy="-58" rx="4.5" ry="5.5" fill="#5a2a4a"/><ellipse cx="0" cy="-55.5" rx="2.6" ry="2.2" fill="#ff9a6b"/></g>`;
  if(o.mouth==='big') mouth=`<path d="M-9,-62 q9,16 18,0 Z" fill="#5a2a4a"/><path d="M-5,-56 q5,5 10,0 Z" fill="#ff9a6b"/>`;
  if(o.mouth==='o') mouth=`<ellipse cx="0" cy="-58" rx="3" ry="3.6" fill="#5a2a4a"/>`;
  if(o.mouth==='wavy') mouth=`<path d="M-8,-59 q2,-3 4,0 q2,3 4,0 q2,-3 4,0 q2,3 4,0" fill="none" stroke="${L}" stroke-width="1.8" stroke-linecap="round"/>`;
  if(o.mouth==='tongue') mouth=`<path d="M-6,-61 q3,4 6,0 q3,4 6,0" fill="none" stroke="${L}" stroke-width="1.8" stroke-linecap="round"/><path d="M-2.6,-59 h5.2 v4 a2.6,2.6 0 0 1 -5.2,0 Z" fill="#ff9a6b"/>`;
  const bow=o.bow?`<g transform="translate(-24,-104) rotate(-18)"><path d="M0,0 L-11,-7 V7 Z M0,0 L11,-7 V7 Z" fill="${RED}"/><circle r="3.4" fill="#ff8a7a"/></g>`:'';
  const fa=o.feet==='run'?['footA','footB']:o.feet==='walk'?['stepA','stepB']:['',''];
  return `
  ${o.tail?`<path class="tail" d="M18,-14 C50,-10 54,-44 40,-54" fill="none" stroke="${o.out}" stroke-width="11.5" stroke-linecap="round"/><path class="tail" d="M18,-14 C50,-10 54,-44 40,-54" fill="none" stroke="${o.fur}" stroke-width="8.5" stroke-linecap="round"/>`:''}
  <g class="${fa[0]}"><ellipse cx="-12" cy="-3" rx="10" ry="5.5" fill="${o.fur}" ${S}/></g><g class="${fa[1]}"><ellipse cx="12" cy="-3" rx="10" ry="5.5" fill="${o.fur}" ${S}/></g>
  <ellipse cx="0" cy="-28" rx="24" ry="27" fill="${o.fur}" ${S}/>
  <ellipse cx="0" cy="-24" rx="14" ry="17" fill="${o.belly}"/>
  ${o.armsFront?'':arms}
  ${o.mid}
  <g class="${o.headCls}">
    <polygon points="-32,-86 -27,-117 -6,-100" fill="${o.fur}" ${S} stroke-linejoin="round"/><polygon points="-27,-92 -25,-108 -13,-99" fill="#ffc2a3"/>
    <polygon points="32,-86 27,-117 6,-100" fill="${o.fur}" ${S} stroke-linejoin="round"/><polygon points="27,-92 25,-108 13,-99" fill="#ffc2a3"/>
    <ellipse cx="0" cy="-74" rx="36" ry="31" fill="${o.fur}" ${S}/>
    ${eyes}
    <ellipse cx="-25" cy="-62" rx="6.5" ry="4" fill="#ff7a59" opacity=".7"/><ellipse cx="25" cy="-62" rx="6.5" ry="4" fill="#ff7a59" opacity=".7"/>
    <path d="M-3.2,-67 h6.4 l-3.2,3.6 z" fill="#ff8a7a"/>
    ${mouth}
    <path d="M-31,-67 l-15,-3 M-31,-62 l-15,2 M31,-67 l15,-3 M31,-62 l15,2" stroke="${L}" stroke-opacity="${o.plain?.4:.75}" stroke-width="1.4" stroke-linecap="round"/>
    ${bow}${o.hat}
  </g>
  ${o.armsFront?arms:''}
  ${o.extra}`;
}
const FUR={orange:{fur:'#ffb347',out:'#e08a2e',belly:'#fff3dc'},grey:{fur:'#b9bdd4',out:'#8a8fb0',belly:'#eef0fa'},white:{fur:'#ffffff',out:'#cbc2e6',belly:'#fff8ef'},cream:{fur:'#ffe2b8',out:'#e0b98a',belly:'#fff6e6'}};
const K=(n,o)=>cat(Object.assign({line:INK,plain:true,bow:false},FUR[n],o||{}));
const at=(x,y,s,inner,cls)=>`<g transform="translate(${x},${y}) scale(${s})"><g class="${cls||''}">${inner}</g></g>`;
const flipAt=(x,y,s,inner,cls)=>`<g transform="translate(${x},${y}) scale(${-s},${s})"><g class="${cls||''}">${inner}</g></g>`;
const bg=c=>`<rect width="200" height="200" fill="${c}"/>`;
const floor=(y,c)=>`<rect y="${y}" width="200" height="${200-y}" fill="${c}"/>`;
const sh=(x,y,rx,cls)=>`<ellipse class="${cls||''}" cx="${x}" cy="${y}" rx="${rx}" ry="${rx/6}" fill="${INK}" opacity=".14"/>`;
const spark=(x,y,r,c,d)=>`<path class="twinkle" style="animation-delay:${d||0}s" d="M${x},${y-r} l${r*.28},${r*.72} ${r*.72},${r*.28} ${-r*.72},${r*.28} ${-r*.28},${r*.72} ${-r*.28},${-r*.72} ${-r*.72},${-r*.28} ${r*.72},${-r*.28} Z" fill="${c}"/>`;
const star5=(x,y,R,c,extra)=>{let p=[];for(let i=0;i<10;i++){const r=i%2?R*.45:R,a=-Math.PI/2+i*Math.PI/5;p.push((x+r*Math.cos(a)).toFixed(1)+','+(y+r*Math.sin(a)).toFixed(1));}return `<polygon points="${p.join(' ')}" fill="${c}" stroke-linejoin="round" ${extra||''}/>`;};
const heartP=`M0,6 C-12,-6 -6,-15 0,-7.5 C6,-15 12,-6 0,6 Z`;
const heart=(x,y,s,c,d)=>`<g transform="translate(${x},${y}) scale(${s})"><path class="rise" style="animation-delay:${d||0}s" d="${heartP}" fill="${c}"/></g>`;
const heartS=(x,y,s,c,cls)=>`<g transform="translate(${x},${y}) scale(${s})"><path class="${cls||''}" d="${heartP}" fill="${c}"/></g>`;
const note=(x,y,c,d)=>`<g transform="translate(${x},${y})"><g class="rise" style="animation-delay:${d||0}s"><ellipse cx="0" cy="0" rx="4.5" ry="3.4" fill="${c}" transform="rotate(-20)"/><path d="M4,-1 v-15 l7,2 v4 l-7,-2" fill="${c}" stroke="${c}" stroke-width="1.5" stroke-linejoin="round"/></g></g>`;
const cloud=(x,y,s,cls)=>`<g transform="translate(${x},${y}) scale(${s})"><g class="${cls===undefined?'cloud':cls}"><ellipse cx="0" cy="0" rx="22" ry="10" fill="#fff"/><ellipse cx="16" cy="-6" rx="17" ry="11" fill="#fff"/><ellipse cx="-12" cy="-5" rx="12" ry="8" fill="#fff"/></g></g>`;
const sun=(x,y,r)=>`<g transform="translate(${x},${y})"><g class="spin" stroke="${SUN}" stroke-width="${r*.26}" stroke-linecap="round">${[0,45,90,135,180,225,270,315].map(a=>`<path transform="rotate(${a})" d="M0,${-r*1.35} v${-r*.5}"/>`).join('')}<circle r="${r*1.9}" fill="none" stroke="none"/></g><circle r="${r}" fill="${SUN}"/></g>`;
const hills=(c1,c2,y)=>{y=y||170;return `<path d="M0,${y} q50,-22 100,0 t100,0 v${200-y} h-200 Z" fill="${c1}"/><path d="M0,${y+14} q50,-12 100,0 t100,0 v${200-y} h-200 Z" fill="${c2}"/>`;};
const flower=(x,y,c,d)=>`<g class="flower" style="animation-delay:${d||0}s"><path d="M${x},${y} v-18" stroke="${MINT}" stroke-width="3" stroke-linecap="round"/><circle cx="${x}" cy="${y-22}" r="6" fill="${c}"/><circle cx="${x}" cy="${y-22}" r="2.4" fill="#fff"/></g>`;
const tree=(x,y,s)=>`<g transform="translate(${x},${y}) scale(${s})"><rect x="-4" y="-22" width="8" height="24" rx="2" fill="#b07a45"/><circle cx="0" cy="-36" r="20" fill="#4fc27f"/><circle cx="-12" cy="-28" r="12" fill="#62d08f"/><circle cx="12" cy="-28" r="12" fill="#62d08f"/></g>`;
const thermo=(x,y,lvl,c)=>`<rect x="${x-7}" y="${y}" width="14" height="76" rx="7" fill="#fff" stroke="#b9c9dd" stroke-width="2"/><circle cx="${x}" cy="${y+80}" r="12" fill="${c}" stroke="#b9c9dd" stroke-width="2"/><rect x="${x-3}" y="${y+78-lvl}" width="6" height="${lvl}" fill="${c}"/>`;
const S={};
