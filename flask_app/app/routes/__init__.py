# app/routes/__init__.py

from .reservation import bp as reservation_bp  # Import reservation blueprint


def init_app(app):
    # Register all blueprints
    app.register_blueprint(reservation_bp, url_prefix='/reservation')
