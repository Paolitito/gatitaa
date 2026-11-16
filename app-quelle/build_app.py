# Baut die App in den Repo-Ordner: Szenen-Bündel, Wortliste, Animationen, Seiten mit Versionsstempel.
import json,glob,os,shutil,time,re,subprocess
SRC='/home/claude/pilot'; APP='/home/claude/app'; OUT='/home/claude/gatitaa'
os.makedirs(OUT+'/datos',exist_ok=True)
files=[SRC+'/base.js',SRC+'/kit.js']+sorted(glob.glob(SRC+'/s[0-9]*.js'),key=lambda f:int(os.path.basename(f)[1:-3]))
open(OUT+'/datos/szenen.js','w',encoding='utf-8').write('\n'.join(open(f,encoding='utf-8').read() for f in files))
w=json.load(open(SRC+'/woerter800.json',encoding='utf-8'))
open(OUT+'/datos/woerter.js','w',encoding='utf-8').write('const WORDS='+json.dumps(w,ensure_ascii=False,separators=(',',':'))+';\n')
shutil.copy(SRC+'/anim.css',OUT+'/datos/anim.css')
v=time.strftime('%Y%m%d%H%M')
open(OUT+'/index.html','w',encoding='utf-8').write(open(APP+'/index.html',encoding='utf-8').read().replace('{{V}}',v))
for f in ['app.js','app.css','manifest.webmanifest','icon-192.png','icon-512.png','puerta.js']:
    shutil.copy(APP+'/'+f,OUT+'/'+f)
os.makedirs(OUT+'/app-quelle',exist_ok=True)
for f in ['build_app.py','mkpuerta.js','index.html']: shutil.copy(APP+'/'+f,OUT+'/app-quelle/'+f)
print('app gebaut',v,len(w))
