from fastapi import APIRouter, BackgroundTasks, Depends
from fastapi.responses import JSONResponse

from ..business.notifications import send_notification_to_vk
from ..config import get_settings
from ..schemas.vk import VKMessage

router = APIRouter(
    tags=["VK"],
)

@router.post("/message")
async def send_message_to_vk(
    message: VKMessage,
    background_tasks: BackgroundTasks,
    settings = Depends(get_settings)
):
    query_params_to_vk = {
        "access_token": settings.TEST_API_KEY if settings.DEBUG else settings.API_KEY,
        "user_id": settings.TEST_RECIEVER_ID if settings.DEBUG else settings.RECIEVER_ID,
        "random_id": 0,
        "v": 5.199,
        "message": f"Новая заявка с сайта. ФИО: {message.full_name}, Телефон: {message.phone_number}"
    }
    background_tasks.add_task(
        send_notification_to_vk,
        vk_url="https://api.vk.com/method/messages.send",
        query_params=query_params_to_vk
    )
    return JSONResponse(
        {"message": "A message has been sent to VK."},
        status_code=201
    )
