from aiohttp import ClientSession

from ..logger import get_logger


async def send_notification_to_vk(vk_url: str, query_params: dict):
    logger = get_logger()
    logger.info(query_params.get("message", "No message provided"))
    try:
        async with ClientSession() as session:
            async with session.post(
                    vk_url,
                    params=query_params
            ) as response:
                dict_resp: dict = await response.json()
                logger.info(f"Response from VK with an id of message: {dict_resp}")
    except Exception:
        logger.error("Failed to send VK message:\n", exc_info=True)
