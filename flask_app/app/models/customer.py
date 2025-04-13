# app/models/customer.py
from app import db


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