from datetime import datetime, date
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String, ForeignKey
from app.models.base_models import BaseModel


class Booking(BaseModel):
    __tablename__ = "bookings"
    host_id: Mapped[str] = mapped_column(ForeignKey("hosts.id"))
    user_id: Mapped[str] = mapped_column(ForeignKey("users.id"))
    start_date: Mapped[date] = mapped_column(nullable=False)
    end_date: Mapped[date] = mapped_column(nullable=False)
