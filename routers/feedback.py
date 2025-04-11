from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from models import Feedback
from database import get_db

router = APIRouter(prefix="/feedback")

@router.post("/submit")
def submit_feedback(user_id: str, logic: float, confidence: float, communication: float, db: Session = Depends(get_db)):
    fb = Feedback(user_id=user_id, logic=logic, confidence=confidence, communication=communication)
    db.add(fb)
    db.commit()
    return {"message": "Feedback submitted"}