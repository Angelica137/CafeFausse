from flask import Blueprint, request, jsonify
from flask_cors import cross_origin
from app.models import Customer
from app import db

bp = Blueprint("newsletter", __name__)


@bp.route("/signup", methods=["POST"])
@cross_origin()
def newsletter_signup():
    data = request.get_json()

    if not data or "email" not in data:
        return jsonify({"error": "Email is required"}), 400

    email = data.get("email")

    # Basic email validation
    if not email or "@" not in email:
        return jsonify({"error": "Invalid email address"}), 400

    # Check if customer already exists
    existing_customer = Customer.query.filter_by(email=email).first()

    if existing_customer:
        # Update existing customer
        if not existing_customer.newsletter_signup:
            existing_customer.newsletter_signup = True
            db.session.commit()
            return (
                jsonify(
                    {
                        "message": "Subscribed to newsletter successfully",
                        "new_subscriber": True,
                    }
                ),
                200,
            )
        else:
            return (
                jsonify(
                    {
                        "message": "Already subscribed to newsletter",
                        "new_subscriber": False,
                    }
                ),
                200,
            )
    else:
        # Create new customer with just email
        new_customer = Customer(
            email=email,
            name="Newsletter Subscriber",  # Default name since your model requires it
            phone=None,
            newsletter_signup=True,
        )

        db.session.add(new_customer)
        db.session.commit()

        return (
            jsonify(
                {
                    "message": "Subscribed to newsletter successfully",
                    "new_subscriber": True,
                }
            ),
            201,
        )
