# Brian Beard 2024

from flask import Flask, render_template, url_for


app = Flask(__name__)

@app.route('/mckenzie-map')
def home():
    image_url = url_for('static', filename='legend/resilist_1.png')
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0')
