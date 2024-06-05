from typing import Optional
from uuid import UUID
from flask_wtf import FlaskForm


class BaseForm(FlaskForm):
    def to_dict(self, user_id: Optional[UUID] = None, exclude_none: bool = False):
        data = {}
        for field in self:
            if hasattr(field, "data"):
                data[field.name] = field.data
        if user_id is not None:
            data["user_id"] = user_id
        if exclude_none:
            new_data = {}
            for k, v in data.items():
                if v is not None:
                    new_data[k] = v
            return new_data
        return data

    def validate_or_raise_error(self):
        if not self.validate_on_submit():
            raise ValueError(str(self.errors))
        return self
