import socketio

sio = socketio.AsyncServer(async_mode='asgi')

@sio.event
async def connect(sid, environ):
    print(f"Connected: {sid}")

@sio.event
async def join_room(sid, data):
    room = data['room']
    await sio.enter_room(sid, room)
    await sio.emit('user_joined', data, room=room)

@sio.event
async def send_message(sid, data):
    await sio.emit('receive_message', data, room=data['room'])

@sio.event
async def disconnect(sid):
    print(f"Disconnected: {sid}")
