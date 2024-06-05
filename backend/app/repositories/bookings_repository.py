from app.repositories.base_repository import BaseRepository
from app.models.booking_models import Booking


class BookingsRepository(BaseRepository[Booking]):
    model = Booking
