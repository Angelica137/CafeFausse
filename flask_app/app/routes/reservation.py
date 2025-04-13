# app/routes/reservation.py

from flask import Blueprint, request, jsonify
from app.models import Customer, Reservation, Table
from app import db
from datetime import datetime

bp = Blueprint('reservation', __name__)

# Define valid time slots
valid_time_slots = [
    '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00',
    '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00',
    '23:30',
]


@bp.route('/available_time_slots', methods=['GET'])
def available_time_slots():
    # Get the requested date (can come from frontend)
    requested_date_str = request.args.get('date')

    if requested_date_str:
        requested_date = datetime.strptime(requested_date_str, '%Y-%m-%d').date()  # Convert to date object
    else:
        # If no date is provided, use today's date (or set a default)
        requested_date = datetime.today().date()  # Use only the date part (no time)

    # Restrict to Wednesday to Sunday (weekday() returns 0 for Monday, 1 for Tuesday, etc.)
    if requested_date.weekday() not in [2, 3, 4, 5, 6]:  # 2: Wed, 3: Thu, 4: Fri, 5: Sat, 6: Sun
        return jsonify({"error": "Reservations are only available from Wednesday to Sunday."}), 400

    # Check if the requested date is in the future (not in the past)
    if requested_date < datetime.today().date():  # Both are now date objects
        return jsonify({"error": "Reservations must be made for a future date."}), 400

    # Check for existing reservations in the requested date and time range
    reserved_slots = [res.time_slot for res in Reservation.query.filter_by(date=requested_date).all()]

    # Filter available time slots
    available_slots = [slot for slot in valid_time_slots if slot not in reserved_slots]

    return jsonify(available_slots)


@bp.route('/reserve', methods=['POST'])
def create_reservation():
    data = request.get_json()

    name = data.get('customer', {}).get('name')
    email = data.get('customer', {}).get('email')
    phone = data.get('customer', {}).get('phone', None)

    date = data.get('reservation', {}).get('date')
    time_slot = data.get('reservation', {}).get('time_slot')
    number_of_guests = data.get('reservation', {}).get('number_of_guests')

    # Validate time slot
    if time_slot not in valid_time_slots:
        return jsonify({"error": "Selected time slot is outside of the allowed time range."}), 400

    # Validate date (Wed-Sun only)
    requested_date = datetime.strptime(date, '%Y-%m-%d')
    if requested_date.weekday() not in [2, 3, 4, 5, 6]:
        return jsonify({"error": "Reservations are only available from Wednesday to Sunday."}), 400

    # Check if customer exists
    customer = Customer.query.filter_by(email=email).first()

    if not customer:
        customer = Customer(name=name, email=email, phone=phone)
        db.session.add(customer)
        db.session.commit()

    # Find an appropriate table based on number of guests
    table_id = find_available_table(number_of_guests, requested_date, time_slot)
    
    # Check if a valid table is assigned
    if not table_id:
        return jsonify({"error": "No available table for the requested number of guests."}), 400

    # Create the reservation
    reservation = Reservation(
        customer_id=customer.id,
        date=requested_date,
        time_slot=time_slot,
        table_id=table_id,
        number_of_guests=number_of_guests
    )

    db.session.add(reservation)
    db.session.commit()

    return jsonify({"message": "Reservation created successfully", "reservation_id": reservation.id}), 201


def find_available_table(number_of_guests, date, time_slot):
    """
    Find an available table that can accommodate the number of guests.
    We're looking for the smallest table that fits the party to maximize seating efficiency.
    """
    # Get all tables with enough seats for the party
    suitable_tables = Table.query.filter(Table.seats >= number_of_guests).order_by(Table.seats).all()
    
    for table in suitable_tables:
        # Check if this table is already reserved for this date and time slot
        existing_reservation = Reservation.query.filter_by(
            date=date, 
            time_slot=time_slot, 
            table_id=table.id
        ).first()
        
        if not existing_reservation:
            return table.id
    
    return None