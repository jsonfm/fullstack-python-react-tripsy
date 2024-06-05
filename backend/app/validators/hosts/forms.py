from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Optional, Length, NumberRange
from app.validators.base.forms import BaseForm
from app.validators.common.country import validate_alpha2_country
from app.validators.hosts.enums import validate_host_type


class HostCreateForm(BaseForm):
    name = StringField("name", validators=[DataRequired(), Length(max=100)])
    description = StringField(
        "description", validators=[DataRequired(), Length(max=500)]
    )
    address = StringField("address", validators=[DataRequired(), Length(max=200)])
    city = StringField("city", validators=[DataRequired(), Length(max=100)])
    country = StringField(
        "country",
        validators=[DataRequired(), validate_alpha2_country, Length(min=2, max=2)],
    )
    stars = IntegerField(
        "stars", validators=[DataRequired(), NumberRange(min=1, max=5)]
    )
    host_type = StringField(
        "host_type", validators=[DataRequired(), validate_host_type, Length(max=50)]
    )


class HostUpdateForm(BaseForm):
    name = StringField("name", validators=[Optional(), Length(max=100)])
    description = StringField("description", validators=[Optional(), Length(max=500)])
    address = StringField("address", validators=[Optional(), Length(max=200)])
    city = StringField("city", validators=[Optional(), Length(max=100)])
    country = StringField(
        "country",
        validators=[Optional(), validate_alpha2_country, Length(min=2, max=2)],
    )
    stars = IntegerField("stars", validators=[Optional(), NumberRange(min=1, max=5)])
    host_type = StringField(
        "host_type", validators=[Optional(), validate_host_type, Length(max=50)]
    )
