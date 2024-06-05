from app.repositories.bookings_repository import BookingsRepository
from app.models.booking_models import Booking
from app.services.base_service import BaseService


class BookingsService(BaseService[Booking]):
    repository = BookingsRepository
