import os
from dotenv import load_dotenv
from datetime import timedelta


environment = os.environ.get("ENVIRONMENT", "production")


if environment == "development":
    load_dotenv(".env")
else:
    load_dotenv(".env.dev")


class Config:
    SECRET_KEY: str = os.environ.get("SECRET_KEY", "")
    SQLALCHEMY_DATABASE_URI: str = os.environ.get("", "sqlite:///db.sqlite")
    DEBUG: bool = environment != "production"
    WTF_CSRF_ENABLED: bool = bool(os.environ.get("WTF_CSRF_ENABLED", False))
    JWT_PRIVATE_KEY: str = os.environ.get("JWT_PRIVATE_KEY", "")
    JWT_PUBLIC_KEY: str = os.environ.get("JWT_PUBLIC_KEY", "")
    JWT_ALGORITHM: str = os.environ.get("JWT_ALGORITHM", "RS256")
    JWT_TOKEN_LOCATION = ["headers"]
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(days=3)
