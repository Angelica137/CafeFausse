import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from app import create_app, db
from app.models import Table


def seed_tables():
    # List of tables with the respective number of seats
    tables = [
        (2, 4),  # 4 tables for 2 people
        (4, 6),  # 6 tables for 4 people
        (6, 2),  # 2 tables for 6 people
        (10, 1)  # 1 Chef's table
    ]

    # Create and add tables
    table_id = 1
    for seats, count in tables:
        for _ in range(count):
            table = Table(id=table_id, seats=seats, available=True)
            db.session.add(table)
            table_id += 1

    # Commit the tables to the database
    db.session.commit()
    print(f"Seeded tables successfully!")


if __name__ == '__main__':
    app = create_app()
    with app.app_context():
        print("Seeding tables...")
        seed_tables()
        print("Tables seeded successfully!")
