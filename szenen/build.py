import json,sys,glob
words=json.load(open('pilot50.json',encoding='utf-8'))
from meta100 import SENT
nxt=json.load(open('next100.json',encoding='utf-8'))
for i,r in enumerate(nxt):
    d={'w':r[0],'t':r[1],'es':r[2],'day':11+i//5}
    if r[0] in SENT: d['s'],d['ses']=SENT[r[0]]
    words.append(d)
json.dump(words,open('woerter150.json','w',encoding='utf-8'),ensure_ascii=False,indent=0)
css=open('anim.css',encoding='utf-8').read()
js=open('base.js',encoding='utf-8').read()+open('kit.js',encoding='utf-8').read()+''.join(open(f,encoding='utf-8').read() for f in sorted(glob.glob('s[0-9]*.js'),key=lambda f:int(f[1:-3])))
K={'Nomen':'#4f9dff','Verb':'#f2453d','Adjektiv':'#9b6bff','Artikel':'#2fc7a8','Pronomen':'#2fc7a8','Präposition':'#2fc7a8','Konjunktion':'#2fc7a8','Adverb':'#2fc7a8','Sonstiges':'#2fc7a8'}
html='''<!DOCTYPE html>
<html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Canela Wörter 1–150</title>
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;800&family=Nunito:wght@400;700&display=swap" rel="stylesheet">
<style>
:root{/* Layout: zehn Tage untereinander, je fünf Karten im Raster */
--bg:#fff8f0;--ink:#3a2a4a;--soft:#7a6a8c;--red:#f2453d;--sky:#4f9dff;--violet:#9b6bff;
--display:"Baloo 2","Trebuchet MS",system-ui,sans-serif;--body:"Nunito","Segoe UI",system-ui,sans-serif;color-scheme:light}
*{box-sizing:border-box}html,body{margin:0}
body{background:var(--bg);color:var(--ink);font-family:var(--body);font-size:16px;line-height:1.45;padding:20px 16px 48px}
main{max-width:980px;margin:0 auto;display:flex;flex-direction:column;gap:26px}
h1{font-family:var(--display);font-weight:800;font-size:2rem;line-height:1.05;margin:0;color:var(--red)}
h2{font-family:var(--display);font-weight:800;font-size:1.25rem;margin:0}
p{margin:4px 0 0;color:var(--soft);max-width:62ch}
section{display:flex;flex-direction:column;gap:10px}
.grid{display:grid;gap:12px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr))}
.card{background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 4px 0 rgba(58,42,74,.08);display:flex;flex-direction:column}
.card svg{display:block;width:100%;height:auto}
.meta{padding:8px 12px 10px;display:flex;flex-direction:column;gap:1px}
.word{font-family:var(--display);font-weight:800;font-size:1.35rem;line-height:1}
.es{color:var(--soft);font-size:.9rem}
.badge{align-self:flex-start;font-size:.7rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#fff;background:var(--k);border-radius:99px;padding:1px 9px;margin-bottom:3px}
.sent{margin-top:5px;font-weight:700;font-size:.92rem;line-height:1.25}.sent b{color:var(--red);background:#ffe9d6;border-radius:5px;padding:0 3px}.ses{color:var(--soft);font-size:.82rem;line-height:1.25}
.missing{aspect-ratio:1;display:grid;place-items:center;background:#eee;color:#999}
'''+css+'''
</style></head><body><main>
<header><h1>Die ersten 150 Wörter</h1><p>30 Tage mit je fünf Wörtern. Tag 1 bis 10 sind die Bild-Wörter, ab Tag 11 geht es nach Häufigkeit. Grammatik-Wörter haben einen kleinen Satz, in dem das Wort markiert ist.</p></header>
<div id="days"></div>
</main><script>
'''+js+'''
const WORDS='''+json.dumps(words,ensure_ascii=False)+''';
const KC='''+json.dumps(K)+''';
const only=location.hash?location.hash.slice(1).split('-').map(Number):null;
let h='';for(let d=1;d<=30;d++){if(only&&!only.includes(d))continue;const ws=WORDS.filter(w=>w.day===d);
h+=`<section><h2>Tag ${d}</h2><div class="grid">`+ws.map(w=>`<article class="card" style="--k:${KC[w.t]}">${S[w.w]?`<svg viewBox="0 0 200 200" role="img" aria-label="${w.w}">${S[w.w]}</svg>`:'<div class="missing">fehlt</div>'}<div class="meta"><span class="badge">${w.t}</span><span class="word">${w.w}</span><span class="es">${w.es}</span>${w.s?`<span class="sent">${w.s.replace(/\\{(.+?)\\}/,'<b>$1</b>')}</span><span class="ses">${w.ses}</span>`:''}</div></article>`).join('')+`</div></section>`;}
document.getElementById('days').innerHTML=h;
</script></body></html>'''
open('pilot50.html','w',encoding='utf-8').write(html)
print(len(html))
