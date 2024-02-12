from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

# Establish a MySQL database connection
db_connection = mysql.connector.connect(
    host="107.180.1.16",
    port="3306",
    user="spring2024Cteam9",
    password="spring2024Cteam9",
    database="spring2024Cteam9"
)
db_cursor = db_connection.cursor()

@app.route('/api/data', methods=['GET'])
def get_data():
    print('Received GET request for /api/data')
    return jsonify({"example": "This is data from the backend"})

@app.route('/api/save', methods=['POST'])
def save_data():
    print('Received POST request for /api/save')
    data = request.get_json()
    print('Received data:', data)
    return jsonify({"message": "Data saved successfully"})

@app.route('/api/create-account', methods=['POST'])
def create_account():
    print('Received POST request for /api/create-account')
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    # Insert the new user account into the database
    user_created = insert_user_account(username, email, password)

    if user_created:
        return jsonify({"message": "Account created successfully"})
    else:
        return jsonify({"error": "Error creating account"}), 500

def insert_user_account(username, email, password):
    # Insert the new user account into the database
    try:
        db_cursor.execute('INSERT INTO users (username, email, password) VALUES (%s, %s, %s)', (username, email, password))
        db_connection.commit()
        return True
    except Exception as e:
        print('Error inserting user account:', e)
        db_connection.rollback()
        return False

@app.route('/api/login', methods=['POST'])
def login():
    print('Received POST request for /api/login')
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    # Authenticate user by checking the database
    user_exists = check_user_credentials(username, password)

    if user_exists:
        return jsonify({"message": "Login successful"})
    else:
        return jsonify({"error": "Invalid credentials"}), 401

def check_user_credentials(username, password):
    # Check if the provided username and password match a record in the database
    db_cursor.execute('SELECT * FROM users WHERE username=%s AND password=%s', (username, password))
    user_record = db_cursor.fetchone()

    if user_record:
        return True
    else:
        return False

if __name__ == '__main__':
    app.run(debug=True)