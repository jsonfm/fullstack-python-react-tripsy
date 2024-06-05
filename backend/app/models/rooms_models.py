from datetime import datetime
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String, ForeignKey
from app.models.base_models import BaseModel


class Room(BaseModel):
    __tablename__ = "rooms"
    hotel_id: Mapped[str] = mapped_column(ForeignKey("hotels.id"))
    bathroom_number: Mapped[int] = mapped_column()
