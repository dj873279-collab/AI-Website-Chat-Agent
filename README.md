# AI Website Chat Agent
Live Demo: https://ai-website-chat-agent.vercel.app

Backend API: https://ai-website-chat-agent-backend.onrender.com

## Overview

AI Website Chat Agent is a full-stack embeddable chatbot that answers user queries using indexed website content. If the chatbot cannot find a relevant answer, it automatically escalates the conversation to a contact form and captures the user's details as a lead.

The project is designed to be embedded into any website using a lightweight JavaScript widget.

---

## Features

### AI Chat Interface

* Floating chat widget
* Expand/collapse functionality
* User and bot messaging
* Scrollable chat history
* Responsive design

### Content-Based Question Answering

* Searches indexed website content
* Returns relevant answers
* Supports source references

### Contact Form Escalation

* Detects unanswered queries
* Displays contact form automatically
* Captures:

  * Name
  * Email
  * Phone Number
  * Message

### Lead Management

* Stores lead information in JSON format
* Generates unique lead IDs
* Backend API for lead submission

### Embeddable Widget

* Can be embedded into any website
* Isolated from host website styling
* Mobile and desktop compatible

---

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
│   │   └── content.json
│   ├── leads.json
│   ├── database.js
│   └── server.js
│
├── widget/
│   ├── chat-widget.js
│   └── demo.html
│
├── src/
├── public/
├── docs/
├── scraper/
│
├── package.json
├── vite.config.js
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

