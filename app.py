from flask import Flask, request, redirect, url_for, jsonify
from flaskext.genshi import Genshi, render_response, render_template
import camxes

app = Flask(__name__)
genshi = Genshi(app)
genshi.extensions['html'] = 'html5'


@app.route('/')
def index():
    text = request.args.get('text', "coi pilno mi'e camxes")
    try:
        ast = camxes.parse(text)
        grammatical = camxes.isgrammatical(text)
    except:
        return redirect(url_for('index'))
    if 'json' in request.args:
        return jsonify(html=render_template('box.html', dict(ast=ast)),
            grammatical=grammatical)
    return render_response('index.html',
        dict(ast=ast, text=text, grammatical=grammatical))


if __name__ == '__main__':
    app.run(debug=True)
