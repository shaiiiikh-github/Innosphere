from fastapi import APIRouter

router = APIRouter(prefix="/tips")

@router.get("/")
def get_tips():
    tips = [
        "Keep your resume one page.",
        "Use action verbs like 'Led', 'Built', 'Designed'.",
        "Tailor your resume for each role."
    ]
    return {"tips": tips}