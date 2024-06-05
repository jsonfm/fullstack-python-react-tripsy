from flask import Request


def get_request_limit_and_offset(request: Request):
    limit: int = int(request.args.get("limit", 10))  # Default limit is 10
    offset: int = int(request.args.get("offset", 0))  # Default offset is 0
    return limit, offset
