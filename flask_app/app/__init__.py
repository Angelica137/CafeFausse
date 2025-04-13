# app/__init__.py
import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from dotenv import load_dotenv

load_dotenv()

# Create db and migrate instances
db = SQLAlchemy()
migrate = Migrate()

def create_app(config_object=None):
    app = Flask(__name__)

    # Default database URI
    app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql:///cafe_fausse"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    if config_object:
        app.config.from_object(config_object)
    else:
        app.config["SQLALCHEMY_DATABASE_URI"] = (
            os.getenv("DATABASE_URL") or app.config["SQLALCHEMY_DATABASE_URI"]
        )

    # Initialize extensions
    db.init_app(app)
    migrate.init_app(app, db)

    # Import models (AFTER db is defined)
    from app.models import Customer, Reservation

    return app