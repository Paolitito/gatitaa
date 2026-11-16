import json,sys,glob
words=json.load(open('pilot50.json',encoding='utf-8'))
css=open('anim.css',encoding='utf-8').read()
js=open('base.js',encoding='utf-8').read()+''.join(open(f,encoding='utf-8').read() for f in sorted(glob.glob('s[0-9]*.js')))
K={'Nomen':'#4f9dff','Verb':'#f2453d','Adjektiv':'#9b6bff'}
html='''<!DOCTYPE html>
<html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Canela Wörter 1–50</title>
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
.missing{aspect-ratio:1;display:grid;place-items:center;background:#eee;color:#999}
'''+css+'''
</style></head><body><main>
<header><h1>Die ersten 50 Wörter</h1><p>Zehn Tage mit je fünf Wörtern. Jede Szene ist einzeln gezeichnet, mit Canela in der Hauptrolle.</p></header>
<div id="days"></div>
</main><script>
'''+js+'''
const WORDS='''+json.dumps(words,ensure_ascii=False)+''';
const KC='''+json.dumps(K)+''';
const only=location.hash?location.hash.slice(1).split('-').map(Number):null;
let h='';for(let d=1;d<=10;d++){if(only&&!only.includes(d))continue;const ws=WORDS.filter(w=>w.day===d);
h+=`<section><h2>Tag ${d}</h2><div class="grid">`+ws.map(w=>`<article class="card" style="--k:${KC[w.t]}">${S[w.w]?`<svg viewBox="0 0 200 200" role="img" aria-label="${w.w}">${S[w.w]}</svg>`:'<div class="missing">fehlt</div>'}<div class="meta"><span class="badge">${w.t}</span><span class="word">${w.w}</span><span class="es">${w.es}</span></div></article>`).join('')+`</div></section>`;}
document.getElementById('days').innerHTML=h;
</script></body></html>'''
open('pilot50.html','w',encoding='utf-8').write(html)
print(len(html))
