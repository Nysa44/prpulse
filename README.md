# PRPulse 🚀


AI-assisted PR opportunity analysis for identifying relevant journalists and ranking media outreach opportunities.


PRPulse is a full-stack web application that helps startups and PR teams reduce the manual effort involved in researching journalists for product announcements and media outreach.


Users submit a pitch, and PRPulse analyzes it to return relevant journalist recommendations with match scores, publications, coverage areas, and explanations for each recommendation.


## Features


- Submit product announcements and PR pitches
- Analyze pitches for relevant media opportunities
-  Recommend relevant journalists
-  Rank journalists using relevance scores
-  Display journalist publications and coverage beats
-  Explain why each journalist is a potential match
-  REST API for pitch analysis
-  Interactive Swagger/OpenAPI documentation
-  Next.js frontend with FastAPI backend


## Example


### Pitch


> We are launching an AI platform for schools that helps teachers automate lesson planning and personalize learning for students.


### PRPulse Results


**Sarah Mitchell — TechWire**


- Beat: AI, startups, enterprise technology
- Match: 94%
- Reason: Frequently covers AI startups and enterprise technology launches.


**Maya Patel — FutureTech**


- Beat: AI, automation, emerging technology
- Match: 91%
- Reason: Highly aligned with AI and automation announcements.


The application ranks potential journalists and explains the reasoning behind each recommendation.


## Architecture
```text
┌─────────────────────────┐
│     Next.js Frontend    │
│                         │
│   Pitch Submission UI   │
│   Journalist Results    │
└────────────┬────────────┘
             │
             │ HTTP / JSON
             ▼
┌─────────────────────────┐
│     FastAPI Backend     │
│                         │
│       POST /analyze     │
│     Pitch Analysis      │
│   Journalist Matching   │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│   Matching & Ranking    │
│                         │
│ Relevance Score + Reason│
└─────────────────────────┘

## Tech Stack
Frontend
Next.js
React
TypeScript
CSS
Backend
Python
FastAPI
Pydantic
Uvicorn
Tools
Git
GitHub
VS Code
Swagger / OpenAPI

## Project Structure
prpulse/
│
├── backend/
│   ├── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── public/
│   ├── package.json
│   ├── package-lock.json
│   └── tsconfig.json
│
├── data/
│
└── .gitignore
🔌 API
GET /

Returns the API root response.

POST /analyze

Analyzes a PR pitch and returns recommended journalist opportunities.

Request
{
  "description": "We are launching an AI platform for schools that helps teachers automate lesson planning and personalize learning for students."
}
Response
{
  "success": true,
  "pitch": "We are launching an AI platform for schools that helps teachers automate lesson planning and personalize learning for students.",
  "results": [
    {
      "name": "Sarah Mitchell",
      "publication": "TechWire",
      "beat": "AI, startups, enterprise technology",
      "relevance": 94,
      "reason": "Frequently covers AI startups and enterprise technology launches."
    }
  ]
}

## Getting Started

## Prerequisites
Python 3.10+
Node.js
npm
Git
1. Clone the Repository
git clone https://github.com/Nysa44/prpulse.git
cd prpulse
2. Start the Backend
cd backend
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn main:app --reload --port 8000

## Backend:

http://localhost:8000

Swagger API documentation:

http://localhost:8000/docs
3. Start the Frontend

Open a second terminal:

cd frontend
npm install
npm run dev

## Frontend:

http://localhost:3000
How It Works
User enters a product announcement or PR pitch.
The Next.js frontend sends the pitch to the FastAPI backend.
FastAPI processes the /analyze request.
The pitch is evaluated against journalist coverage areas.
Potential journalist matches are ranked by relevance.
The API returns journalist information and match explanations.
The frontend displays the recommendations in a ranked interface.

## Use Case

PRPulse can help startups, founders, and PR teams quickly identify journalists who may be relevant to a product announcement.

Instead of manually searching through publications and journalist profiles, users can submit a pitch and receive a ranked set of potential media opportunities.

Future Improvements
Integration with real journalist and publication databases
AI/LLM-powered pitch analysis
Semantic similarity using embeddings
Automated journalist discovery
Personalized outreach angle generation
Automated outreach email generation
Journalist filtering by publication and beat
Pitch history and saved analyses
User authentication
Analytics dashboard
Human-in-the-loop approval workflow

## Project Status

Prototype / MVP

PRPulse currently demonstrates an end-to-end workflow from pitch submission to journalist recommendations using a Next.js frontend and FastAPI backend.

The project is designed to be extended with real-world journalist data and more advanced AI-powered matching capabilities.

## Author

Nysa Khan

GitHub: https://github.com/Nysa44


Built as an AI-assisted PR research and journalist discovery prototype.
