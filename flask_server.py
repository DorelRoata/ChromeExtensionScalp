from flask import Flask, request
from flask_cors import CORS  # Only needed if you get a CORS error
import json

app = Flask(__name__)
CORS(app)  # If needed for cross-origin requests from extension

@app.route('/extensiondata', methods=['POST'])
def extensiondata():
    data = request.get_json()
    print("Received from extension:", data)

    # Example: Parse or store the data
    # price_str = data.get("priceText")
    # brand = data.get("brandText")
    # header = data.get("headerText")
    # ...
    # Insert into DB or do comparisons, etc.

    return "OK", 200

if __name__ == '__main__':
    print("Starting Flask server on http://127.0.0.1:5000")
    app.run(port=5000)
