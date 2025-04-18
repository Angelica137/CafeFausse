from .reservation import bp as reservation_bp
from .newsletter import bp as newsletter_bp


def init_app(app):
    # Register all blueprints
    app.register_blueprint(reservation_bp, url_prefix="/reservation")
    app.register_blueprint(newsletter_bp, url_prefix="/newsletter")
