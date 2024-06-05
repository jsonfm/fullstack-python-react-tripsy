from wtforms import ValidationError
import pycountry


def validate_alpha2_country(form, field):
    country_code = field.data.upper()
    if not pycountry.countries.get(alpha_2=country_code):
        raise ValidationError(
            "Invalid country code. Must be a valid ISO 3166-1 alpha-2 code."
        )
