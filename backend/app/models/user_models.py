from enum import Enum as EnumType
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import String, Enum
from app.models.base_models import BaseModel
from werkzeug.security import check_password_hash


class UserRoleType(str, EnumType):
    USER = "USER"
    ADMIN = "ADMIN"
    HOST = "HOST"


class User(BaseModel):
    __tablename__ = "users"

    email: Mapped[str] = mapped_column(String(128), nullable=False, unique=True)
    password: Mapped[str] = mapped_column(String(256), nullable=False)
    role: Mapped[UserRoleType] = mapped_column(
        Enum(UserRoleType), default=UserRoleType.USER
    )

    # def __init__(self, *args, **kwargs):
    #     super().__init__(*args, **kwargs)

    # fks
    # hosts = Mapped[list["Host"]] = relationship(back_populates="user")

    def check_password_hash(self, password):
        return check_password_hash(self.password, password)
