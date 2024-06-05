from wtforms import StringField, DateField
from wtforms.validators import DataRequired, Email
from app.validators.base.forms import BaseForm


class BookingCreateForm(BaseForm):
    host_id = StringField("host_id", validators=[DataRequired()])
    start_date = DateField("start_date", validators=[DataRequired()])
    end_date = DateField("end_date", validators=[DataRequired()])


class BookingUpdateForm(BaseForm):
    start_date = DateField("start_date", validators=[])
    end_date = DateField("end_date", validators=[])
