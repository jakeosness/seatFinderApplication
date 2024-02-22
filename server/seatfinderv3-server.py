from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector
import os


app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}}, methods=["GET", "POST", "OPTIONS"])

# Use environment variables for database configuration
DB_HOST = os.environ.get("DB_HOST", "107.180.1.16")
DB_PORT = os.environ.get("DB_PORT", "3306")
DB_USER = os.environ.get("DB_USER", "spring2024Cteam9")
DB_PASSWORD = os.environ.get("DB_PASSWORD", "spring2024Cteam9")
DB_DATABASE = os.environ.get("DB_DATABASE", "spring2024Cteam9")

def execute_sql_command(sql, params=None):
    db_connection = mysql.connector.connect(
        host=DB_HOST,
        port=DB_PORT,
        user=DB_USER,
        password=DB_PASSWORD,
        database=DB_DATABASE
    )
    db_cursor = db_connection.cursor()

    try:
        if params is not None:
            print(f"Executing SQL with parameters: {params}")
            db_cursor.execute(sql, params)
        else:
            print("Executing SQL without parameters")
            db_cursor.execute(sql)

        result_set = db_cursor.fetchall()
        db_connection.commit()
        return result_set
    except Exception as e:
        print(f'Error executing SQL command: {e}')
        db_connection.rollback()
        return None
    finally:
        db_cursor.close()
        db_connection.close()

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
    sql = 'INSERT INTO users (username, email, password) VALUES (%s, %s, %s)'
    params = (username, email, password)
    return execute_sql_command(sql, params)

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    # Check user credentials
    user_exists = check_user_credentials(username, password)

    if user_exists:
        response = jsonify({"message": "Login successful"})
        response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
        return response
    else:
        return jsonify({"error": "Invalid credentials"}), 401

def check_user_credentials(username, password):
    # Check if the provided username and password match a record in the database
    sql = 'SELECT * FROM users WHERE username=%s AND password=%s'
    params = (username, password)

    print(f"SQL Query: {sql}")
    print(f"SQL Parameters: {params}")

    user_records = execute_sql_command(sql, params)

    print(f"User Record: {user_records}")

    return len(user_records) > 0

if __name__ == '__main__':
    app.run(debug=True)