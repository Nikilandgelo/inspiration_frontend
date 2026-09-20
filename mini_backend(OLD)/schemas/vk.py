from pydantic import BaseModel


class VKMessage(BaseModel):
    full_name: str
    phone_number: str
