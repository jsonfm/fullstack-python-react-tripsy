from wtforms import ValidationError
from app.models.host_models import HostType


def validate_host_type(form, field):
    if field.data not in HostType._value2member_map_:
        raise ValidationError(
            "Invalid host type. Must be one of: {}".format(
                ", ".join([e.value for e in HostType])
            )
        )
