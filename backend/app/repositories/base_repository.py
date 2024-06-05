from typing import Any, Optional, TypeVar, Generic
from app.models.base_models import BaseModel

T = TypeVar("T", bound=BaseModel)


class BaseRepository(Generic[T]):
    model: T = BaseModel

    @classmethod
    def find_one(cls, id_: Optional[str] = None, eq: Optional[dict[str, Any]] = None):
        return cls.model.find_one(id_=id_, eq=eq)

    @classmethod
    def find_all(cls, limit: int = 100, offset: int = 0, eq: dict[str, Any] = None):
        return cls.model.find_all(limit, offset, eq=eq)

    @classmethod
    def insert_one(cls, data: dict[str, Any]):
        return cls.model.insert_one(data)

    @classmethod
    def delete_one(cls, id_: str):
        return cls.model.delete_one(id_)

    @classmethod
    def update_one(cls, id_: str, data: dict[str, Any]):
        return cls.model.update_one(id_, data)
