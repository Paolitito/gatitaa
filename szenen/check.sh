#!/bin/sh
cd /home/claude/pilot
cat base.js kit.js $(ls s[0-9]*.js | sort -V) > /tmp/all.js
echo "console.log('ok szenen', Object.keys(S).length)" >> /tmp/all.js
node /tmp/all.js 2>&1 | tail -6
