#!/bin/sh
# Aufruf: ./finish.sh <ersterTag> <letzterTag> "<Commit-Text>"
set -e
cd /home/claude/pilot && ./check.sh && python3 build.py >/dev/null
cd /home/claude/gatitaa && cp /home/claude/pilot/anim.css /home/claude/pilot/base.js /home/claude/pilot/kit.js /home/claude/pilot/s*.js /home/claude/pilot/meta*.py /home/claude/pilot/woerter800.json /home/claude/pilot/check.sh /home/claude/pilot/finish.sh szenen/ && cp /home/claude/pilot/build.py szenen/build.py && sed -i "s#/home/claude/words/##g" szenen/build.py && cp /home/claude/pilot/pilot50.html pilot.html && git add -A && git -c user.name="Claude" -c user.email="noreply@anthropic.com" commit -q -m "$3

Co-Authored-By: Claude Fable 5.2 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01SrhWDmU4FvMQmbcHssDeA5" && git -c push.negotiate=true push origin main 2>&1 | tail -1
cd /mnt/user-data/outputs/vault && python3 - "$1" "$2" <<'PY'
import json,sys,re,glob
a,b=int(sys.argv[1]),int(sys.argv[2])
w=json.load(open('/home/claude/pilot/woerter800.json',encoding='utf-8'))
src=''.join(open(f,encoding='utf-8').read() for f in glob.glob('/home/claude/pilot/s[0-9]*.js'))
n=len(set(re.findall(r'^S\.([A-Za-z]+)=',src,re.M)))
p="Projekte/Vokabel-App.md"
s=open(p,encoding='utf-8').read()
days="\n".join(f"- Tag {d}: "+", ".join(x['w'] for x in w if x['day']==d) for d in range(a,b+1))
mark="\n## ▶️ Auftrag von Roberto"
assert mark in s
s=s.replace(mark,f"\n## 🐈 Wörter Tag {a}–{b} (Szenen fertig gezeichnet, Entwurf)\n{days}\n"+mark,1)
s=re.sub(r"Stand: \*\*\d+ von 800\*\* fertig",f"Stand: **{n} von 800** fertig",s)
open(p,'w',encoding='utf-8').write(s)
print('stand',n)
PY
