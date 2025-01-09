from database import db, init_db
from flask import Flask, request, jsonify, session
from flask_bcrypt import Bcrypt
from flask_sqlalchemy import SQLAlchemy
from flask_session import Session
import os



# Initialize Flask app
app = Flask(__name__)
app.config['SECRET_KEY'] = os.urandom(24)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///instance/users.db'
app.config['SESSION_TYPE'] = 'filesystem'

if not os.path.exists('instance/users.db'):
    print("Database does not exist. Creating a new database...")
    init_db(app)
else:
    print("Database exists. Connecting to the existing database...")


# Remaining app logic would go here...

if __name__ == '__main__':
    app.run(debug=True)