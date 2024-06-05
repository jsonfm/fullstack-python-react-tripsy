from app.repositories.base_repository import BaseRepository
from app.models.order_models import Order


class OrdersRepository(BaseRepository[Order]):
    model = Order
