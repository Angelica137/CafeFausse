import sys
import os

# Add the root directory to sys.path so Python can find the 'app' module
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

# Now import the necessary Flask app components and models
from datetime import date
from app import create_app, db
from app.models import Customer, Reservation, Table

print("Current working directory:", os.getcwd())
print("Current sys.path:", sys.path)

try:
    from app import create_app, db
    print("App imported successfully!")
except ModuleNotFoundError as e:
    print("Error importing app:", e)


def seed_customers():
    customers = [
        Customer(name="John Doe", email="john@example.com", phone="555-1234", newsletter_signup=True),
        Customer(name="Jane Smith", email="jane@example.com", phone="555-5678", newsletter_signup=False),
        Customer(name="Bob Johnson", email="bob@example.com", phone="555-9012", newsletter_signup=True)
    ]
    db.session.add_all(customers)
    db.session.commit()
    print(f"Added {len(customers)} customers")
    return customers


def seed_reservations(customers):
    # Retrieve available tables from the database
    tables = Table.query.all()

    reservations = [
        Reservation(
            customer_id=customers[0].id,
            date=date(2025, 4, 20),
            time_slot="19:00",
            table_id=tables[0].id,  # Assign table by its ID
            number_of_guests=2,
            status="confirmed"
        ),
        Reservation(
            customer_id=customers[1].id,
            date=date(2025, 4, 21),
            time_slot="18:30",
            table_id=tables[1].id,  # Assign table by its ID
            number_of_guests=4,
            status="confirmed"
        )
    ]
    db.session.add_all(reservations)
    db.session.commit()
    print(f"Added {len(reservations)} reservations")


if __name__ == '__main__':
    app = create_app()
    with app.app_context():
        print("Seeding database...")
        customers = seed_customers()
        seed_reservations(customers)
        print("Database seeded successfully!")
