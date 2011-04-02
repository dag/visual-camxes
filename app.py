from flask import Flask, request, redirect, url_for
from flaskext.genshi import Genshi, render_response
import camxes

app = Flask(__name__)
genshi = Genshi(app)
genshi.extensions['html'] = 'html5'


@app.route('/')
def index():
    text = request.args.get('text', "coi pilno mi'e camxes")
    try:
        ast = camxes.parse(text)
    except:
        return redirect(url_for('index'))
    if request.is_xhr:
        return render_response('box.html', dict(ast=ast, text=text))
    return render_response('index.html', dict(ast=ast, text=text))


if __name__ == '__main__':
    app.run(debug=True)
