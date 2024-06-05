from app.repositories.base_repository import BaseRepository
from app.models.host_models import Host


class HostsRepository(BaseRepository[Host]):
    model = Host
