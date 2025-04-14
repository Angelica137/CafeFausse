import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from dotenv import load_dotenv

# Load environment variables from the .env file
load_dotenv()

# Create db and migrate instances
db = SQLAlchemy()
migrate = Migrate()


def create_app(config_object=None):
    app = Flask(__name__)

    # Default database URI
    app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL", "postgresql:///cafe_fausse")
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    if config_object:
        app.config.from_object(config_object)

    # Initialize extensions (db and migrate)
    db.init_app(app)
    migrate.init_app(app, db)
    
    # Initialize CORS with more explicit settings
    CORS(app, resources={r"/*": {"origins": ["http://localhost:5173", "http://localhost:3000"], "methods": ["GET", "POST"]}})

    # Import models (AFTER db is initialized)
    from app.models import Customer, Reservation

    # Register routes
    from app.routes import init_app as init_routes
    init_routes(app)

    return app