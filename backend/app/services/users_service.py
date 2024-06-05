from app.repositories.users_repository import UserRepository
from app.models.user_models import User
from app.services.base_service import BaseService


class UserService(BaseService[User]):
    repository = UserRepository
