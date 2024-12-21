from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import os
from flask_cors import CORS



# Initialize Flask app
app = Flask(__name__)
CORS(app)
# Database configuration for SQLite
BASE_DIR = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = '[Databse Url]'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize the database
db = SQLAlchemy(app)

# Define User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)

    def __repr__(self):
        return f'<User {self.username}>'

# Create tables in the database
with app.app_context():
    db.create_all()

# Route for handling user creation or login
@app.route('/create_user', methods=['POST'])
def create_user():
    try:
        # Parse JSON data from the request
        data = request.get_json()

        # Get the username and password
        username = data.get('username')
        password = data.get('password')

        # Print the username and password to the console
        print(f"Received Username: {username}")
        print(f"Received Password: {password}")

        # Optionally, create the user in the database
        new_user = User(username=username, password=password)
        db.session.add(new_user)
        db.session.commit()

        return jsonify({"message": f"User {username} created successfully!"})

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"message": "An error occurred while creating the user."}), 500
    
# Route for user login
@app.route('/login', methods=['POST'])
def login():
    try:
        # Parse JSON data from the request
        data = request.get_json()

        # Get the username and password from the request
        username = data.get('username')
        password = data.get('password')

        # Check if the username exists in the database
        user = User.query.filter_by(username=username).first()

        if user:
            # Verify the password
            if user.password == password:
                return jsonify({"message": "Login successful!"}), 200
            else:
                return jsonify({"message": "Invalid password."}), 401
        else:
            return jsonify({"message": "User not found."}), 404

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"message": "An error occurred during login."}), 500


if __name__ == "__main__":
    app.run(debug=True)
