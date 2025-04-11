from sqlalchemy import Column, Integer, String, Float
from database import Base

class Feedback(Base):
    __tablename__ = "feedback"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(String)
    logic = Column(Float)
    confidence = Column(Float)
    communication = Column(Float)