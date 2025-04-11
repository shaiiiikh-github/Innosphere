from fastapi import FastAPI
import socketio
from routers import feedback, tips
from sockets.chat import sio_app
from database import Base, engine
import models

# Create tables
Base.metadata.create_all(bind=engine)

# Create FastAPI app
app = FastAPI()

# Mount Socket.IO app
app.mount("/ws", sio_app)

# Include routes
app.include_router(feedback.router)
app.include_router(tips.router)