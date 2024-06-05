from app.repositories.hosts_repository import HostsRepository
from app.models.host_models import Host
from app.services.base_service import BaseService


class HostsService(BaseService[Host]):
    repository = HostsRepository
