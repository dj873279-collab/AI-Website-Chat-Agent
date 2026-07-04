# AI Website Chat Agent
Live Demo: https://ai-website-chat-agent.vercel.app

Backend API: https://ai-website-chat-agent-backend.onrender.com

## Overview

AI Website Chat Agent is a full-stack embeddable chatbot that answers user queries using indexed website content. If the chatbot cannot find a relevant answer, it automatically escalates the conversation to a contact form and captures the user's details as a lead.

The project is designed to be embedded into any website using a lightweight JavaScript widget.

---

## Features

### AI-Powered Chat Assistant

* Answers user questions using website content
* Semantic search using sentence embeddings
* Context-aware response retrieval
* Greeting and basic conversation handling

### Intelligent Search Layer

* Embedding-based semantic similarity matching
* Confidence score evaluation
* Automatic fallback for low-confidence responses
* Source attribution for retrieved answers

### Contact Form Escalation

* Triggered when no suitable answer is found
* Collects:

  * Name
  * Email
  * Phone Number
* Stores lead information through backend API

### Chat Widget

* Floating chat launcher
* Expand/collapse functionality
* Typing indicator
* Conversation history
* Enter-to-send support
* Responsive design

### Backend APIs

* POST /api/chat
* POST /api/contact
* Semantic retrieval engine
* Lead management system

### Deployment

* Frontend deployed on Vercel
* Backend deployed on Render
* Embeddable widget architecture

## System Architecture

User
↓
Chat Widget (React Frontend)
↓
Chat API (Node.js + Express)
↓
Semantic Search Layer
↓
Embeddings Database (embeddings.json)
↓
Website Content (content.json)

If confidence score is low:
↓
Contact Form Escalation
↓
Lead Storage

## Semantic Search Implementation

The chatbot uses embedding-based semantic retrieval instead of simple keyword matching.

Workflow:

1. Website content is stored in content.json
2. Embeddings are generated using Xenova/all-MiniLM-L6-v2
3. User queries are converted into embeddings
4. Cosine similarity is calculated against indexed content
5. The highest-scoring result is returned
6. If confidence is below the threshold (0.25), the chatbot triggers contact form escalation

Benefits:

* Handles paraphrased questions
* More accurate than keyword matching
* Better user experience
* Improved retrieval quality

### Website Content Ingestion

A scraper module is included to support automated website content ingestion. The scraper extracts headings and related content from webpages and converts them into structured data that can be indexed by the semantic search engine.

## Tech Stack

### Frontend

* React
* Vite

### Backend

* Node.js
* Express

### Storage

* JSON-based knowledge base
* JSON-based lead storage

### Deployment

* Vercel (Frontend)
* Render (Backend)

### Version Control

* Git
* GitHub

---

## Project Structure

```text
AI-Website-Chat-Agent/
│
├── backend/
│   ├── data/
│   │   ├── content.json
│   │   └── embeddings.json
│   │
│   ├── server.js
│   ├── database.js
│   ├── similarity.js
│   ├── generateEmbeddings.js
│   ├── semanticTest.js
│   ├── testSearch.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   │   ├── favicon.svg
│   │   └── icons.svg
│   │
│   ├── src/
│   │   ├── assets/
│   │   │   ├── hero.png
│   │   │   ├── react.svg
│   │   │   └── vite.svg
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── package-lock.json
│
├── scraper/
│   ├── scrape.js
│   ├── package.json
│   └── package-lock.json
│
├── docs/
│   └── screenshots/
│       ├── chat-response.png
│       ├── contact-form.png
│       ├── widget-demo.png
│       └── github-repo.png
│
├── widget/
│
├── .gitignore
└── README.md
```

---

## API Endpoints

### Chat API

**POST** `/api/chat`

Request:

```json
{
  "message": "What services do you provide?"
}
```

Response:

```json
{
  "answer": "We provide web development services...",
  "source": "/services",
  "found": true
}
```

---

### Contact API

**POST** `/api/contact`

Request:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "message": "Need more information"
}
```

Response:

```json
{
  "success": true,
  "leadId": 123456789
}
```

---

## Deployment

### Frontend

https://ai-website-chat-agent.vercel.app

### Backend

https://ai-website-chat-agent-backend.onrender.com

---

## Widget Integration

Add the following script to any website:

```html
<script src="chat-widget.js"></script>
<script>
  ChatWidget.init({
    websiteId: "demo-site"
  });
</script>
```

The widget loads independently and can be embedded into external websites without affecting existing page styles.

---

## Workflow

1. User opens website
2. Chat widget appears
3. User asks a question
4. System searches indexed website content
5. Relevant answer is returned
6. If no answer is found:

   * Contact form is displayed
   * User submits details
   * Lead is stored

---

## Live Demo

Frontend:
https://ai-website-chat-agent.vercel.app

Backend:
https://ai-website-chat-agent-backend.onrender.com

---

## Repository

GitHub:
https://github.com/dj873279-collab/AI-Website-Chat-Agent

---

## Author

Darshil Joshi

Internship Assignment: AI-Powered Website Chat Agent with Contact Form Escalation

