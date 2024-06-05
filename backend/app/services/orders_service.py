from app.models.order_models import Order
from app.repositories.orders_repository import OrdersRepository
from app.services.base_service import BaseService


class OrdersService(BaseService[Order]):
    repository = OrdersRepository
