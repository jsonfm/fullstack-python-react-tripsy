from datetime import datetime
from typing import Optional
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String, ForeignKey
from app.models.base_models import BaseModel


class Review(BaseModel):
    __tablename__ = "reviews"
    host_id: Mapped[str] = mapped_column(ForeignKey("hosts.id"))
