# At the top of your create_tables.py
import sys
import os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))


from app import create_app, db


if __name__ == '__main__':
    app = create_app()
    # Print the database URL to see where we're connecting
    print(f"Connecting to: {app.config['SQLALCHEMY_DATABASE_URI']}")
    with app.app_context():
        print("Creating database tables...")
        db.create_all()
        print("Tables created successfully!")
