from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # <--- Enable CORS for all routes

@app.route('/extensiondata', methods=['POST'])
def extensiondata():
    data = request.json
    print("Received from extension:", data)
    return "OK", 200

if __name__ == '__main__':
    app.run(port=5000)
