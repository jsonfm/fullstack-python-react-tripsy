from flask import Flask
from flask_jwt_extended import JWTManager, get_jwt_identity
from app.models.user_models import UserRoleType
from app.services.users_service import UserService
from app.utils.responses import Response


def configure_jwt(app: Flask):
    jwt = JWTManager(app)

    # @jwt.user_identity_loader
    # def user_identity_lookup(user):
    #     return user.id

    # @jwt.user_lookup_loader
    # def user_lookup_callback(_jwt_header, jwt_data):
    #     identity = jwt_data["sub"]
    #     return UserService.find_one(identity)

    return app


def get_current_user(raise_not_found_error: bool = True):
    user_id = get_jwt_identity()
    user = UserService.find_one(user_id)
    if raise_not_found_error and user is None:
        raise ValueError("user does not exist")
    return user


def get_current_admin(raise_not_found_error: bool = True):
    user = get_current_user(raise_not_found_error)
    if user.role != UserRoleType.ADMIN:
        raise ValueError("not allowed")
    return user
