from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase


class Base(DeclarativeBase):
    pass


db = SQLAlchemy(model_class=Base)


def initialize_database(app: Flask, create_: bool = True):
    db.init_app(app)
    if create_:
        with app.app_context():
            db.create_all()
    return db
