from flask import Blueprint
from flask_jwt_extended import create_access_token, create_refresh_token
from app.utils.responses import Response
from app.models.user_models import UserRoleType
from app.services.users_service import UserService
from app.validators.users.forms import UserLoginForm, UserSignupForm


auth_controller = Blueprint("auth", __name__, url_prefix="/auth")


@auth_controller.route("/login", methods=["POST"])
def login():
    form = UserLoginForm().validate_or_raise_error()
    user = UserService.find_one_by_email(form.email.data)

    if user is None:
        return Response.fail(f"user with `{form.email.data}` does not exist")

    valid = user.check_password_hash(form.password.data)
    if not valid:
        return Response.fail("Invalid password", status_code=401)
    access_token = create_access_token(identity=user.id)
    refresh_token = create_refresh_token(identity=user.id)
    return Response.success(
        data={"access_token": access_token, "refresh_token": refresh_token}
    )


@auth_controller.route("/signup", methods=["POST"])
def signup():
    try:
        form = UserSignupForm().validate_or_raise_error()
        user = UserService.find_one_by_email(form.email.data)
        if user is not None:
            return Response.fail("user already exists")
        hashed = form.verify_and_hash_password()
        body = form.to_dict()
        body.pop("confirm")
        body["password"] = hashed
        body["role"] = UserRoleType.USER
        print("body: ", body)
        UserService.insert_one(body)
        return Response.success(status_code=201)
    except Exception as e:
        return Response.fail(str(e))
