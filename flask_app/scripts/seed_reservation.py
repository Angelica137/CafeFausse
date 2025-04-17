import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from datetime import date
from app import create_app, db
from app.models import Customer, Reservation, Table


def seed_reservations():
    # Retrieve customers from the database
    customers = Customer.query.all()

    # Retrieve available tables from the database
    tables = Table.query.all()

    if not customers:
        print("No customers found. Please add some customers first.")
        return

    if not tables:
        print("No tables available for reservations.")
        return

    # Create some reservations for customers
    reservations = [
        Reservation(
            customer_id=customers[0].id,
            date=date(2025, 4, 20),
            time_slot="19:00",
            table_id=tables[0].id,  # Table for 2 people
            number_of_guests=2,
            status="confirmed"
        ),
        Reservation(
            customer_id=customers[1].id,
            date=date(2025, 4, 21),
            time_slot="18:30",
            table_id=tables[1].id,  # Table for 4 people
            number_of_guests=4,
            status="confirmed"
        ),
        Reservation(
            customer_id=customers[2].id,
            date=date(2025, 4, 22),
            time_slot="20:00",
            table_id=tables[2].id,  # Table for 6 people
            number_of_guests=6,
            status="confirmed"
        )
    ]

    # Add all reservations to the session
    db.session.add_all(reservations)

    # Commit the changes
    db.session.commit()

    print(f"Added {len(reservations)} reservations.")


if __name__ == '__main__':
    app = create_app()
    with app.app_context():
        print("Seeding reservations...")
        seed_reservations()
        print("Reservations seeded successfully!")

