from fastapi import APIRouter

from . import (
    vk,
)

router = APIRouter(prefix="/api")
router.include_router(vk.router)
