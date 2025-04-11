import socketio

sio = socketio.AsyncServer(async_mode='asgi')
sio_app = socketio.ASGIApp(sio)

@sio.event
async def connect(sid, environ):
    print("Connected:", sid)

@sio.event
async def disconnect(sid):
    print("Disconnected:", sid)

@sio.event
async def join_room(sid, data):
    await sio.enter_room(sid, data['room'])
    await sio.emit("user_joined", data, room=data['room'])

@sio.event
async def send_message(sid, data):
    await sio.emit("receive_message", data, room=data['room'])