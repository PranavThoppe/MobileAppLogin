from flask import Flask, request, render_template_string
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import IntegrityError  # Import IntegrityError for handling unique constraint
import os

# Initialize Flask app
app = Flask(__name__)

# Database configuration for SQLite
BASE_DIR = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:LogInService@db.mnpvdfpvgigzueetczao.supabase.co:5432/postgres'
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

# HTML template for the input form
form_template = """
<!DOCTYPE html>
<html>
<head>
    <title>Flask User Form</title>
</head>
<body>
    <h1>Enter User Information</h1>
    <form method="POST" action="/">
        <label for="username">Username:</label><br>
        <input type="text" id="username" name="username" required><br>
        <label for="password">Password:</label><br>
        <input type="password" id="password" name="password" required><br><br>
        <input type="submit" value="Submit">
    </form>
    <h2>{{ message }}</h2>
</body>
</html>
"""

# Route for input form and data submission
@app.route("/", methods=["GET", "POST"])
def home():
    message = ""
    if request.method == "POST":
        # Get form data
        username = request.form.get("username")
        password = request.form.get("password")

        # Add the user to the database
        try:
            new_user = User(username=username, password=password)
            db.session.add(new_user)
            db.session.commit()
            message = f"User '{username}' has been added successfully!"
        except IntegrityError:
            db.session.rollback()
            message = f"Error: Username '{username}' already exists. Please choose a different username."
        except Exception as e:
            db.session.rollback()
            message = f"An unexpected error occurred: {str(e)}"

    return render_template_string(form_template, message=message)

if __name__ == "__main__":
    app.run(debug=True)
