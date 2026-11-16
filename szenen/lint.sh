#!/bin/sh
# Prüft alle Szenen auf typische Fehler
cd /home/claude/pilot
MOV=$(grep -o "@keyframes [a-zA-Z]*{[^@]*transform" anim.css | sed 's/@keyframes \([a-zA-Z]*\).*/\1/' | tr '\n' '|')
cat base.js kit.js $(ls s[0-9]*.js | sort -V) > /tmp/all.js
cat >> /tmp/all.js <<JS
const css=require('fs').readFileSync('anim.css','utf8');
const mov=new Set();
for(const m of css.matchAll(/\.([a-zA-Z]+)\{[^}]*?animation:([a-zA-Z]+)/g)){ const kf=new RegExp('@keyframes '+m[2]+'\\\\{((?:[^{}]*\\\\{[^{}]*\\\\})*)').exec(css); if(kf&&/transform/.test(kf[1])) mov.add(m[1]); }
const cls=new Set([...css.matchAll(/\.([a-zA-Z]+)\{/g)].map(m=>m[1]));
let bad=0; if(process.env.V) console.log([...mov].join(" "));
for(const [k,v] of Object.entries(S)){
  for(const w of ['=>','undefined','NaN','[object','\${']) if(v.includes(w)){console.log(k,'enthält',w);bad++}
  for(const t of v.matchAll(/<[a-zA-Z]+[^>]*>/g)){
    const tag=t[0]; const c=/class="([^"]*)"/.exec(tag);
    if(c){ for(const n of c[1].split(/\s+/).filter(Boolean)){ if(!cls.has(n)){console.log(k,'unbekannte Klasse',n);bad++} if(mov.has(n)&&/\stransform="/.test(tag)){console.log(k,'transform + bewegte Klasse',n,tag.slice(0,70));bad++} } }
  }
  for(const c of v.matchAll(/#[0-9a-fA-F]{6}\b/g)){const h=c[0].toLowerCase();const r=parseInt(h.slice(1,3),16),g=parseInt(h.slice(3,5),16),b=parseInt(h.slice(5,7),16); if(r>225&&g<205&&b>150&&b<235&&r-g>40&&b-g>10){console.log(k,'rosa-artig',h);bad++}}
  for(const d of v.matchAll(/\sd="([^"]*)"/g)) if(!/^[MmLlHhVvCcSsQqTtAaZz0-9eE.,\s-]*$/.test(d[1])){console.log(k,'kaputter Pfad',d[1].slice(0,50));bad++}
  for(const a of v.matchAll(/\s(?:x|y|cx|cy|r|rx|ry|width|height|x1|x2|y1|y2)="([^"]*)"/g)) if(!/^-?[0-9.]+(e-?[0-9]+)?%?$/.test(a[1])){console.log(k,'kaputte Zahl',a[0]);bad++}
  const o=(v.match(/<g[\s>]/g)||[]).length,cl=(v.match(/<\/g>/g)||[]).length; if(o!=cl){console.log(k,'g-Tags',o,cl);bad++}
}
console.log('lint fertig, Auffälligkeiten:',bad,'Szenen:',Object.keys(S).length);
JS
node /tmp/all.js
