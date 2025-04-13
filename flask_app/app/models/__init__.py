# app/models/__init__.py
from app.models.customer import Customer
from app.models.reservation import Reservation
from app.models.table import Table

# Export models for easier imports elsewhere
__all__ = ['Customer', 'Reservation', 'Table']
