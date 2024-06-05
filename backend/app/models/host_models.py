from uuid import UUID
from enum import Enum as EnumType
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import String, Enum, ForeignKey
from app.models.base_models import BaseModel
# from app.models.user_models import User


class HostType(str, EnumType):
    HOTEL = "HOTEL"
    HOSTEL = "HOSTEL"
    DEPARMENT = "DEPARTMENT"
    DEPARMENT_ROOM = "DEPARMENT_ROOM"
    HOUSE = "HOUSE"
    OTHER = "OTHER"


class Host(BaseModel):
    __tablename__ = "hosts"
    name: Mapped[str] = mapped_column(String(512), nullable=False)
    description: Mapped[str] = mapped_column(String(2048), nullable=True)
    city: Mapped[str] = mapped_column(String(128))
    country: Mapped[str] = mapped_column(String(3), nullable=False)
    address: Mapped[str] = mapped_column(String(512), nullable=False)
    stars: Mapped[float] = mapped_column(default=5)
    host_type: Mapped[HostType] = mapped_column(Enum(HostType))

    # fks
    user_id: Mapped[UUID] = mapped_column(ForeignKey("users.id"))
    # user: Mapped["User"] = relationship()  # noqa: F821
