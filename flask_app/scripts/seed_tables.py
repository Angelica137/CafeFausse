import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from app import create_app, db
from app.models import Table, Reservation  # Import the Reservation model too


def seed_tables():
    # First, check which tables have existing reservations
    tables_with_reservations = db.session.query(Reservation.table_id).distinct().all()
    tables_with_reservations = [t[0] for t in tables_with_reservations]

    print(f"Tables with reservations (will be preserved): {tables_with_reservations}")

    # Get existing tables that don't have reservations
    tables_to_delete = db.session.query(Table).filter(~Table.id.in_(tables_with_reservations)).all()
    print(f"Will delete {len(tables_to_delete)} tables without reservations")

    # Delete tables without reservations
    for table in tables_to_delete:
        db.session.delete(table)

    # List of tables with the respective number of seats
    # Format: (seats_per_table, number_of_tables)
    tables_to_add = [
        (2, 9),   # 9 tables for 2 people
        (4, 14),  # 14 tables for 4 people
        (6, 6),   # 6 tables for 6 people
        (10, 1)   # 1 Chef's table
    ]

    # Count how many tables of each size we already have with reservations
    existing_counts = {}
    for table_id in tables_with_reservations:
        table = db.session.query(Table).filter_by(id=table_id).first()
        if table:
            seats = table.seats
            existing_counts[seats] = existing_counts.get(seats, 0) + 1

    print(f"Existing table counts: {existing_counts}")

    # Adjust the counts to add based on what already exists
    adjusted_tables = []
    for seats, target_count in tables_to_add:
        existing = existing_counts.get(seats, 0)
        to_add = max(0, target_count - existing)
        adjusted_tables.append((seats, to_add))

    print(f"Will add: {adjusted_tables}")

    # Find the maximum ID currently in use
    max_id = db.session.query(db.func.max(Table.id)).scalar() or 0
    next_id = max_id + 1

    # Create and add new tables
    for seats, count in adjusted_tables:
        for _ in range(count):
            table = Table(id=next_id, seats=seats, available=True)
            db.session.add(table)
            next_id += 1

    # Commit the changes to the database
    db.session.commit()

    # Verify final counts
    final_counts = {}
    for table in db.session.query(Table).all():
        final_counts[table.seats] = final_counts.get(table.seats, 0) + 1

    print(f"Final table counts: {final_counts}")
    print(f"Total tables: {sum(final_counts.values())}")


if __name__ == '__main__':
    app = create_app()
    with app.app_context():
        print("Seeding tables...")
        seed_tables()
        print("Tables seeded successfully!")
