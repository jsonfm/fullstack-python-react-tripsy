from uuid import UUID
from flask import Blueprint, request
from app.auth import get_current_user
from app.utils.requests import get_request_limit_and_offset
from flask_jwt_extended import jwt_required
from app.utils.responses import Response
from app.services.bookings_service import BookingsService
from app.validators.bookings.forms import BookingCreateForm


bookings_controller = Blueprint("bookings", __name__, url_prefix="/bookings")


@bookings_controller.before_request
@jwt_required()
def before_request():
    pass


@bookings_controller.route("", methods=["GET"])
def get_bookings_by_user():
    user = get_current_user()
    limit, offset = get_request_limit_and_offset(request)
    bookings = BookingsService.find_all(
        limit=limit, offset=offset, eq={"user_id": user.id}
    )
    return Response.success(bookings)


@bookings_controller.route("/<uuid:booking_id>", methods=["GET"])
def get_booking_by_id(booking_id: UUID):
    user = get_current_user()
    booking = BookingsService.find_one(booking_id)
    return Response.success_or_not_found(booking)


@bookings_controller.route("", methods=["POST"])
def create_booking():
    user = get_current_user()
    form = BookingCreateForm().validate_or_raise_error()
    body = form.to_dict(user_id=user.id)
    booking = BookingsService.insert_one(body)
    return Response.success(booking)
