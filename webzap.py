#!/usr/bin/python

from flask import Flask
from flask import render_template, request, jsonify
from crossdomain import crossdomain
import webbrowser

app = Flask(__name__)

@app.route('/', methods=['GET'])
def hello_world():
    return render_template('configure.html')

@app.route('/openurl', methods=['POST'])
@crossdomain(origin='*', methods=['POST'])
def open_url():
    url = request.form['url']
    app.logger.debug('Opening ' + url)
    
    webbrowser.open(url)
    
    return jsonify(message='Pushed!')

if __name__ == '__main__':
    app.run(host='0.0.0.0')