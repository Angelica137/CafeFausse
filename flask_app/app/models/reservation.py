from app import db
from datetime import datetime

class Reservation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customer.id'), nullable=False)
    date = db.Column(db.Date, nullable=False)
    time_slot = db.Column(db.String(20), nullable=False)
    table_id = db.Column(db.Integer, db.ForeignKey('table.id'), nullable=False)  # Changed to table_id
    number_of_guests = db.Column(db.Integer, nullable=False)
    status = db.Column(db.String(20), default='confirmed')
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    # Define a relationship to access the Table object easily
    table = db.relationship('Table', backref='reservations')

    def __repr__(self):
        return f'<Reservation {self.id} - {self.date} {self.time_slot} for table {self.table_id}>'

