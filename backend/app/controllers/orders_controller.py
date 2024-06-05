from uuid import UUID
from flask import Blueprint, request
from app.auth import get_current_user
from app.utils.requests import get_request_limit_and_offset
from flask_jwt_extended import jwt_required
from app.utils.responses import Response
from app.services.orders_service import OrdersService
from app.validators.hosts.forms import HostCreateForm, HostUpdateForm


orders_controller = Blueprint("orders", __name__, url_prefix="/orders")


@orders_controller.before_request
@jwt_required()
def before_request():
    pass


@orders_controller.route("", methods=["GET"])
def get_orders_by_user():
    user = get_current_user()
    limit, offset = get_request_limit_and_offset(request)
    hosts = OrdersService.find_all(limit=limit, offset=offset, eq={"user_id": user.id})
    return Response.success(hosts)


@orders_controller.route("/<uuid:order_id>", methods=["GET"])
def get_order_by_id(order_id: UUID):
    get_current_user()
    host = OrdersService.find_one(order_id)
    return Response.success_or_not_found(host)


@orders_controller.route("", methods=["POST"])
def create_host():
    user = get_current_user()
    form = HostCreateForm().validate_or_raise_error()
    body = form.to_dict(user.id)
    host = OrdersService.insert_one(body)
    return Response.success(host)


@orders_controller.route("/<uuid:order_id>", methods=["PUT"])
def update_host(order_id: UUID):
    user = get_current_user()
    form = HostUpdateForm().validate_or_raise_error()
    body = form.to_dict(exclude_none=True)
    host = OrdersService.update_one(order_id, body)
    return Response.success_or_not_found(host)


@orders_controller.route("/<uuid:order_id>", methods=["DELETE"])
def delete_host(order_id: UUID):
    get_current_user()
    result = OrdersService.delete_one(order_id)
    return Response.success(result)
