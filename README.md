# PRPulse

AI-assisted PR opportunity analysis for identifying relevant journalists and generating targeted outreach angles.

PRPulse takes a startup or product announcement as a pitch and analyzes it to identify journalists whose coverage areas are relevant to the announcement. It provides relevance scores and explains why each journalist is a potential match.

## 🚀 Overview

PRPulse is a full-stack prototype designed to help startups and PR teams reduce the manual effort involved in researching journalists for media outreach.

The application provides:

- Pitch submission through a web interface
- Backend API for pitch analysis
- Journalist recommendations
- Relevance/match scoring
- Explanation of why each journalist matches
- Journalist publication and coverage information
- API documentation through Swagger UI

## ✨ Features

### Pitch Analysis

Users enter a description of the announcement or product they want to pitch.

Example:

> We are launching an AI platform for schools that helps teachers automate lesson planning and personalize learning for students.

PRPulse processes the pitch and returns relevant journalist opportunities.

### Journalist Matching

Each recommended journalist includes:

- Journalist name
- Publication
- Coverage beat
- Relevance score
- Explanation for the match

Example result:

```text
Sarah Mitchell
TechWire

Beat:
AI, startups, enterprise technology

Match:
94

Why this match:
Frequently covers AI startups and enterprise technology launches.
