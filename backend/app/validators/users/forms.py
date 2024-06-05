from wtforms import StringField
from wtforms.validators import DataRequired, Email
from werkzeug.security import generate_password_hash
from app.validators.base.forms import BaseForm


class UserSignupForm(BaseForm):
    email = StringField("email", validators=[DataRequired(), Email()])
    password = StringField("password", validators=[DataRequired()])
    confirm = StringField("password", validators=[DataRequired()])

    def verify_and_hash_password(self):
        if self.password.data != self.confirm.data:
            raise ValueError("Passwords do not match")
        hashed_password = generate_password_hash(self.password.data)
        return hashed_password


class UserLoginForm(BaseForm):
    email = StringField("email", validators=[DataRequired(), Email()])
    password = StringField("password", validators=[DataRequired()])
