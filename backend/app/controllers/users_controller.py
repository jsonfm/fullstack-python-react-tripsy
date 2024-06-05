from flask import Blueprint, request
from app.services.users_service import UserService
from app.utils.responses import Response


# Define a blueprint for user-related routes
user_controller = Blueprint("users", __name__)
user_service = UserService()


@user_controller.route("/users", methods=["GET"])
def get_users():
    users = user_service.get_all_users()
    return Response.success([user.to_dict() for user in users])


@user_controller.route("/users/<int:user_id>", methods=["GET"])
def get_user(user_id):
    user = UserService.find_one(user_id)
    return Response.success_or_not_found(user)


@user_controller.route("/users", methods=["POST"])
def create_user():
    data = request.json
    new_user = UserService.insert_one(data["username"], data["email"], data["password"])
    return Response.success(new_user.to_dict(), "User created successfully", 201)
