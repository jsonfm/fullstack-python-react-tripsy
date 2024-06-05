from flask import Blueprint
from app.controllers.auth_controller import auth_controller
from app.controllers.hosts_controller import hosts_controller
from app.controllers.orders_controller import orders_controller


router = Blueprint("router", __name__, url_prefix="/api/v1")
router.register_blueprint(auth_controller)
router.register_blueprint(hosts_controller)
router.register_blueprint(orders_controller)
