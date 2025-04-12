from fastapi import FastAPI
import socketio
from routers import feedback, tips
from database import Base, engine
import models

# Create tables
Base.metadata.create_all(bind=engine)

# Create FastAPI app
app = FastAPI()

# Setup Socket.IO
sio = socketio.AsyncServer(async_mode='asgi')
socket_app = socketio.ASGIApp(sio)
app.mount("/ws", socket_app)

# Register routers
app.include_router(feedback.router)
app.include_router(tips.router)

# Socket.IO event handlers
@sio.event
async def connect(sid, environ):
    print("User connected:", sid)

@sio.event
async def disconnect(sid):
    print("User disconnected:", sid)

@sio.event
async def join_room(sid, data):
    room = data['room']
    await sio.enter_room(sid, room)
    await sio.emit("user_joined", data, room=room)

@sio.event
async def send_message(sid, data):
    await sio.emit("receive_message", data, room=data['room'])
