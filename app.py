from flask import Flask, request, redirect, url_for
from flaskext.genshi import Genshi, render_response
import camxes

app = Flask(__name__)
genshi = Genshi(app)


@app.route('/')
def index():
    if 'text' not in request.args:
        return redirect(url_for('index', text="coi pilno mi'e camxes"))
    ast = camxes.parse(request.args['text'])
    return render_response('index.html', dict(ast=ast))


if __name__ == '__main__':
    app.run(debug=True)
