from aiohttp import web, ClientSession, ClientError
import os
from json import JSONDecodeError

routes = web.RouteTableDef()


@routes.post('/api/message')
async def send_message_to_vk(request: web.Request):
    query_params_to_vk = {
        'access_token': os.getenv('API_KEY'),
        'user_id': os.getenv('RECIEVER_ID'),
        'random_id': 0,
        'v': 5.199,
        'message': ''
    }
    try:
        request_data: dict = await request.json()
        query_params_to_vk['message'] = (
            'Новая заявка с сайта.'
            f'ФИО: {request_data.get("full_name")},'
            f'Телефон: {request_data.get("phone_number")}'
        )
        async with ClientSession() as session:
            async with session.post('https://api.vk.com/method/messages.send',
                                    params=query_params_to_vk) as response:
                dict_resp: dict = await response.json()
                if dict_resp.get('response'):
                    return web.Response(status=201)
                else:
                    raise RuntimeError()
    except (ClientError, JSONDecodeError, RuntimeError):
        return web.Response(status=400)

app = web.Application()
app.add_routes(routes)

if __name__ == '__main__':
    web.run_app(app)
