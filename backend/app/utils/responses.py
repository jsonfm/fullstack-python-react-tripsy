from typing import Any, TypeVar, Generic, List, Union
from flask import jsonify


T = TypeVar("T")


def serialize_data(data: Any):
    def to_dict(data):
        if hasattr(data, "to_dict"):
            return data.to_dict()
        return data

    if isinstance(data, list):
        return [to_dict(item) for item in data]

    return to_dict(data)


class Response(Generic[T]):
    @staticmethod
    def success(
        data: Union[T, List[T]] = None, message: str = "success", status_code: int = 200
    ):
        response = {
            "status_code": status_code,
            "message": message,
            "data": serialize_data(data),
            "error": None,
        }
        return jsonify(response), status_code

    @staticmethod
    def fail(error: str = "error", status_code: int = 400):
        response = {
            "status_code": status_code,
            "data": None,
            "message": None,
            "error": error,
        }
        return jsonify(response), status_code

    @staticmethod
    def success_or_not_found(
        data: Union[T, List[T], None], not_found_message: str = "item does not exist"
    ):
        if data is None:
            return Response.fail(status_code=404, error=not_found_message)
        return Response.success(data)
