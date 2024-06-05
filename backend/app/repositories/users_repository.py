from app.repositories.base_repository import BaseRepository
from app.models.user_models import User


class UserRepository(BaseRepository[User]):
    model = User
