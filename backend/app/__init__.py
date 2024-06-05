from flask import Flask
from flask_cors import CORS

from app.database import initialize_database
from app.auth import configure_jwt
from app.controllers.base_controller import router
from app.config import Config


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    CORS(app)
    initialize_database(app)
    configure_jwt(app)
    app.register_blueprint(router)
    return app
