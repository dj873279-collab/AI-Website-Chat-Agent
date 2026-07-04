# AI Website Chat Agent

## Internship Assignment Submission Report

### Submitted By

Darshil Joshi

---

# 1. Project Overview

The AI Website Chat Agent is a full-stack chatbot application designed to answer website-related user queries using indexed website content.

If the chatbot cannot find a relevant answer, it automatically escalates the conversation to a contact form where user details can be collected and stored as business leads.

The solution is designed to be embedded into any website through a lightweight JavaScript widget.

---

# 2. Problem Statement

Businesses often lose potential customers when website visitors cannot quickly find the information they need.

This project addresses that problem by:

* Providing instant answers to common questions
* Reducing support workload
* Capturing potential leads automatically
* Allowing easy integration into existing websites

---

# 3. System Architecture

Scraper
    ↓
content.json
    ↓
Embeddings Generator
    ↓
embeddings.json
    ↓
Semantic Search Engine
    ↓
Chatbot UI

---

# 4. Features Implemented

### Website Content Indexing

* Static JSON-based content indexing
* Searchable knowledge base
* Fast retrieval

### AI Chat Interface

* Floating widget
* Expand/Collapse functionality
* Conversation history
* Responsive UI

### Search and Response System

* Keyword-based search
* Relevant content matching
* Source support

### Contact Form Escalation

* Triggered automatically for unknown queries
* Collects:

  * Name
  * Email
  * Phone Number
  * Requirement

### Lead Management

* Lead storage system
* Unique lead tracking

### Embeddable Widget

* Lightweight JavaScript integration
* Website independent
* Mobile compatible

---

# 5. Technology Stack

## Frontend

* React
* Vite

## Backend

* Node.js
* Express

## Data Storage

* JSON Knowledge Base
* JSON Lead Storage

## Deployment

* Vercel
* Render

## Version Control

* Git
* GitHub

---

# 6. API Design

## Chat API

POST /api/chat

Purpose:
Returns the most relevant answer from indexed content.

Input:
{
"message": "What services do you provide?"
}

Output:
{
"answer": "...",
"source": "...",
"found": true
}

---

## Contact API

POST /api/contact

Purpose:
Stores lead information when no answer is available.

Input:
{
"name": "...",
"email": "...",
"phone": "...",
"message": "..."
}

Output:
{
"success": true
}

---

# 7. Deployment Details

Frontend:
https://ai-website-chat-agent.vercel.app

Backend:
https://ai-website-chat-agent-backend.onrender.com

Repository:
https://github.com/dj873279-collab/AI-Website-Chat-Agent

---

# 8. Workflow Demonstration

1. User opens website.
2. Chat widget appears.
3. User asks a question.
4. System searches indexed content.
5. Relevant answer is returned.
6. If no answer exists:

   * Contact form appears.
   * User submits details.
   * Lead is stored.

---

# 9. Future Improvements

* OpenAI Integration
* Semantic Search
* Vector Embeddings
* Admin Dashboard
* Analytics
* Multi-language Support
* Live Agent Handoff
* Voice Input

### Additional Enhancements

#### Semantic Search Engine

The chatbot was upgraded from a basic keyword-matching system to an embedding-based semantic retrieval system using the Xenova/all-MiniLM-L6-v2 model. This enables the chatbot to understand user intent and answer questions even when the exact website wording is not used.

#### Confidence-Based Escalation

Each query receives a similarity score. When the score falls below the configured threshold, the chatbot automatically escalates the conversation to a contact form for human follow-up.

#### Improved User Experience

* Typing indicator
* Welcome message
* Source attribution
* Chat bubbles
* Enter-to-send support
* Responsive floating widget

#### Production Deployment

The application has been deployed using:

* Vercel (Frontend)
* Render (Backend)

### Challenges and Solutions

1. Keyword-based search produced inaccurate results for paraphrased questions.

   * Solution: Implemented embedding-based semantic search using sentence transformers.

2. Deployment structure did not initially align with assignment requirements.

   * Solution: Reorganized project into frontend and backend modules.

3. Sensitive environment variables needed protection.

   * Solution: Configured .gitignore and environment-based configuration management.

4. User experience lacked conversational feedback.

   * Solution: Added typing indicators, source references, and improved chat interface design.

## Future Improvements

While the current implementation fulfills the assignment requirements, the following enhancements can further improve the system:

### 1. Dynamic Website Crawling

Implement automatic website crawling and sitemap parsing to keep indexed content synchronized with website updates without manual intervention.

### 2. Vector Database Integration

Replace local JSON-based embeddings storage with a dedicated vector database such as Pinecone, ChromaDB, or Weaviate to improve scalability and retrieval performance.

### 3. Large Language Model Integration

Integrate OpenAI or other LLM providers to generate more natural, context-aware responses while using retrieved website content as grounding information.

### 4. Conversation Memory

Maintain multi-turn conversation context to support follow-up questions and more natural interactions.

### 5. Analytics Dashboard

Provide administrators with insights into user queries, chatbot performance, unanswered questions, and lead conversion metrics.

### 6. Multi-Language Support

Enable the chatbot to answer questions and collect leads in multiple languages to support a broader audience.

### 7. Live Agent Handoff

Allow users to seamlessly transfer conversations to human support agents when complex assistance is required.

### 8. Voice Interaction

Add speech-to-text and text-to-speech capabilities to improve accessibility and user experience across devices.

### 9. Enhanced Content Crawling

The current scraper demonstrates automated content ingestion from a single webpage. Future versions can support multi-page crawling, sitemap discovery, scheduled indexing, and automatic embedding regeneration.

---

## Conclusion

This project successfully delivers an embeddable AI-powered website chat assistant capable of retrieving website information, answering user queries through semantic search, and escalating unresolved requests through an automated contact form workflow. The solution demonstrates practical application of modern web development, information retrieval, and conversational AI concepts while maintaining a scalable architecture suitable for future enhancements.

# 11. Screenshots

## Chat Response
![Chat Response](screenshots/chat-response.png)

## Contact Form Escalation
![Contact Form](screenshots/contact-form.png)

## Widget Integration
![Widget Demo](screenshots/widget-demo.png)

## Repository
![GitHub Repository](screenshots/github-repo.png)