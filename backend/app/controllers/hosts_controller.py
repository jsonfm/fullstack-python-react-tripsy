from uuid import UUID
from flask import Blueprint, request
from app.auth import get_current_user
from app.utils.requests import get_request_limit_and_offset
from flask_jwt_extended import jwt_required
from app.utils.responses import Response
from app.services.hosts_service import HostsService
from app.validators.hosts.forms import HostCreateForm, HostUpdateForm


hosts_controller = Blueprint("hosts", __name__, url_prefix="/hosts")


@hosts_controller.before_request
@jwt_required()
def before_request():
    pass


@hosts_controller.route("", methods=["GET"])
def get_hosts_by_user():
    user = get_current_user()
    limit, offset = get_request_limit_and_offset(request)
    hosts = HostsService.find_all(limit=limit, offset=offset, eq={"user_id": user.id})
    return Response.success(hosts)


@hosts_controller.route("/<uuid:host_id>", methods=["GET"])
def get_host_by_id(host_id: UUID):
    get_current_user()
    host = HostsService.find_one(host_id)
    return Response.success_or_not_found(host)


@hosts_controller.route("", methods=["POST"])
def create_host():
    user = get_current_user()
    form = HostCreateForm().validate_or_raise_error()
    body = form.to_dict(user.id)
    host = HostsService.insert_one(body)
    return Response.success(host)


@hosts_controller.route("/<uuid:host_id>", methods=["PUT"])
def update_host(host_id: UUID):
    user = get_current_user()
    form = HostUpdateForm().validate_or_raise_error()
    body = form.to_dict(exclude_none=True)
    host = HostsService.update_one(host_id, body)
    return Response.success_or_not_found(host)


@hosts_controller.route("/<uuid:host_id>", methods=["DELETE"])
def delete_host(host_id: UUID):
    get_current_user()
    result = HostsService.delete_one(host_id)
    return Response.success(result)
