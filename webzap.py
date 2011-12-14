from flask import Flask, render_template, request, jsonify
from crossdomain import crossdomain
import webbrowser

app = Flask(__name__)

@app.route('/', methods=['GET'])
def start():
    return render_template('start.html', url=request.base_url)

@app.route('/openurl', methods=['POST', 'OPTIONS'])
@crossdomain(origin='*', methods=['POST', 'OPTIONS'], headers='x-requested-with')
def open_url():
    url = request.form['url']
    webbrowser.open(url)
    return 'Pushed!'

if __name__ == '__main__':
    # Make visible to other computers on my network
    app.run(host='0.0.0.0')
