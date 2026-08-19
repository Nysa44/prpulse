from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI(
    title="PRPulse API",
    description="AI-assisted PR opportunity analysis API",
    version="1.0.0",
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class PitchRequest(BaseModel):
    description: str


journalists = [
    {
        "name": "Sarah Mitchell",
        "publication": "TechWire",
        "beat": "AI, startups, enterprise technology",
        "relevance": 94,
        "reason": "Frequently covers AI startups and enterprise technology launches.",
    },
    {
        "name": "Maya Patel",
        "publication": "FutureTech",
        "beat": "AI, automation, emerging technology",
        "relevance": 91,
        "reason": "Highly aligned with AI and automation announcements.",
    },
    {
        "name": "Daniel Brooks",
        "publication": "Business Daily",
        "beat": "Business, markets, technology",
        "relevance": 86,
        "reason": "Strong overlap with business impact and technology transformation stories.",
    },
    {
        "name": "James Wilson",
        "publication": "Startup Journal",
        "beat": "Startups, founders, venture capital",
        "relevance": 78,
        "reason": "Relevant for founder-led announcements and startup growth stories.",
    },
]


@app.get("/")
def root():
    return {
        "name": "PRPulse API",
        "status": "online",
    }


@app.post("/analyze")
def analyze_pitch(request: PitchRequest):

    if not request.description.strip():
        return {
            "success": False,
            "error": "Pitch description cannot be empty.",
        }

    results = sorted(
        journalists,
        key=lambda journalist: journalist["relevance"],
        reverse=True,
    )

    return {
        "success": True,
        "pitch": request.description,
        "results": results,
    }