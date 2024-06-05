from typing import Any, Optional, TypeVar, Generic
from app.models.base_models import BaseModel
from app.repositories.base_repository import BaseRepository


T = TypeVar("T", bound=BaseModel)


class BaseService(Generic[T]):
    repository: BaseRepository[T] = BaseRepository[T]

    @classmethod
    def find_all(
        cls, limit: int = 100, offset: int = 0, eq: Optional[dict[str, Any]] = None
    ):
        return cls.repository.find_all(limit, offset, eq=eq)

    @classmethod
    def find_one(cls, id_: Optional[str] = None, eq: Optional[dict[str, Any]] = None):
        return cls.repository.find_one(id_, eq=eq)

    @classmethod
    def find_one_by_email(cls, email: str):
        return cls.repository.find_one(eq={"email": email})

    @classmethod
    def insert_one(cls, data: dict[str, Any]):
        return cls.repository.insert_one(data)

    @classmethod
    def update_one(cls, id_: str, data: dict[str, Any]):
        return cls.repository.update_one(id_, data)

    @classmethod
    def delete_one(cls, _id: str):
        return cls.repository.delete_one(_id)
