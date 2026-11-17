"""src/ の問題データを data-order.txt の順に1つにまとめ、data-all.js と loader.js を作り直す。
使い方: python3 build.py
"""
import hashlib, os
here = os.path.dirname(os.path.abspath(__file__))
src = os.path.join(here, 'src')
files = [l.strip() for l in open(os.path.join(src, 'data-order.txt'), encoding='utf-8') if l.strip()]
blob = ''.join('/* ' + f + ' */\n' + open(os.path.join(src, f), encoding='utf-8').read() + '\n;\n' for f in files)
open(os.path.join(here, 'data-all.js'), 'w', encoding='utf-8').write(blob)
v = hashlib.md5(blob.encode() + open(os.path.join(here, 'app.js'), 'rb').read()).hexdigest()[:8]
open(os.path.join(here, 'loader.js'), 'w', encoding='utf-8').write("""// データをまとめて読み込んでから本体を起動する
(function(){var V='%s';
var s=document.createElement('script');s.src='data-all.js?v='+V;s.onload=function(){var a=document.createElement('script');a.src='app.js?v='+V;document.body.appendChild(a)};document.body.appendChild(s);
})();
""" % v)
print('built', len(files), 'files, version', v)
