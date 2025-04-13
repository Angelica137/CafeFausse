# app/models/table.py

from app import db


class Table(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    seats = db.Column(db.Integer, nullable=False)  # Number of people the table can accommodate
    available = db.Column(db.Boolean, default=True)  # Whether the table is available for booking

    def __repr__(self):
        return f'<Table {self.id} - {self.seats} seats>'
