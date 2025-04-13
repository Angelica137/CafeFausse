# scripts/create_models.py
import sys
import os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app import db, create_app


# Create Customer model
class Customer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    phone = db.Column(db.String(20), nullable=True)
    newsletter_signup = db.Column(db.Boolean, default=False)

    # Relationship with reservations
    reservations = db.relationship('Reservation', backref='customer', lazy=True)

    def __repr__(self):
        return f'<Customer {self.name}>'


# Create Reservation model
class Reservation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customer.id'), nullable=False)
    date = db.Column(db.Date, nullable=False)
    time_slot = db.Column(db.String(20), nullable=False)
    table_number = db.Column(db.Integer, nullable=False)
    number_of_guests = db.Column(db.Integer, nullable=False)
    status = db.Column(db.String(20), default='confirmed')

    def __repr__(self):
        return f'<Reservation {self.id}>'


# Create tables directly
if __name__ == '__main__':
    app = create_app()
    with app.app_context():
        print("Creating database tables...")
        db.create_all()
        print("Tables created successfully!")
