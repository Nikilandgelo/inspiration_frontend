from fastapi import FastAPI

from . import api
from .config import get_settings

app = FastAPI(
    title=get_settings().TITLE,
    description=get_settings().DESCRIPTION,
    version=get_settings().VERSION,
    contact={
        "name": get_settings().CONTACT_NAME,
        "url": get_settings().CONTACT_URL,
        "email": get_settings().CONTACT_EMAIL
    },
)
app.include_router(api.router)
