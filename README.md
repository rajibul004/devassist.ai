# DevAssist AI 🚀

DevAssist AI is an AI-powered full-stack debugging assistant designed to help developers understand errors, debug issues, and receive AI-generated explanations with suggested fixes.

The project combines a modern React frontend with a scalable Spring Boot backend integrated with AI models using Spring AI and Groq.

---

# 🌟 Features

## 🔐 Authentication & Security
- JWT Authentication
- Stateless Session Management
- Spring Security Integration
- Role-based Authorization

---

## 🤖 AI-Powered Debugging
- AI-generated error explanations
- Suggested fixes for developer issues
- Real-time debugging assistance
- DeepSeek AI model integration

---

## 💬 Chat System
- Persistent AI chat/debug sessions
- User-specific chat management
- Clean API-driven communication

---

## 🗄 Database Integration
- PostgreSQL Database
- Spring Data JPA / Hibernate
- Persistent user and chat storage

---

# 🛠 Tech Stack

## Backend
- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA
- JWT
- Spring AI
- REST APIs

---

## Frontend
- React
- Vite
- Axios
- Tailwind CSS
- Shadcn UI

---

## Database
- PostgreSQL

---

## AI Integration
- Groq API
- DeepSeek R1 Model

---

# 📐 Backend Architecture

```txt
Client
   │
   ▼
Controller Layer
   │
   ▼
Service Layer
   │
   ▼
AI Service Layer
   │
   ▼
Groq + DeepSeek API
   │
   ▼
PostgreSQL Database
```

---

# 📂 Project Structure

```txt
DevAssist.Ai
│
├── devassist-ai
│   ├── src
│   ├── gradle
│   ├── build.gradle
│   └── settings.gradle
│
├── devassist-frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# 🔐 Authentication Flow

```txt
User Login
    │
    ▼
JWT Token Generated
    │
    ▼
Authorization Header
    │
    ▼
JWT Filter Validation
    │
    ▼
SecurityContextHolder
    │
    ▼
Protected APIs Access
```

---

# 📡 API Endpoints

# Authentication APIs

## Register User

```http
POST /api/public/signup
```

### Request Body

```json
{
  "email": "user@gmail.com",
  "password": "password123"
}
```

---

## Login User

```http
POST /api/public/signin
```

### Request Body

```json
{
  "email": "user@gmail.com",
  "password": "password123"
}
```

---

# AI Chat APIs

## Analyze Error / Debug Issue

```http
POST /api/public/chat
```

### Request Body

```json
{
  "message": "Scanner class not found"
}
```

---

# 🤖 AI Model Used

```txt
deepseek-r1-distill-llama-70b
```

Integrated using:
- Spring AI
- Groq API

---

# 🗄 Database Schema

# User

| Field | Type |
|---|---|
| id | Long |
| email | String |
| password | String |
| role | Enum |
| createdAt | LocalDateTime |

---

# DebugSession

| Field | Type |
|---|---|
| id | Long |
| originalInput | TEXT |
| aiResponse | TEXT |
| createdAt | LocalDateTime |
| user | User |

---

# ⚙ Environment Variables

Create `.env`

```env
GROQ_API_KEY=your_api_key
DB_USERNAME=your_db_username
DB_PASSWORD=your_db_password
JWT_SECRET=your_jwt_secret
```

---

# ⚙ Backend Setup

## Clone Repository

```bash
git clone https://github.com/rajibul004/devassist.ai
```

---

## Configure PostgreSQL

```sql
CREATE DATABASE devassist_ai;
```

---

## Run Backend

```bash
cd devassist-ai
./gradlew bootRun
```

Backend runs on:

```txt
http://localhost:8080
```

---

# ⚙ Frontend Setup

```bash
cd devassist-frontend
npm install
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

---

# 🔥 Current Features Implemented

- JWT Authentication
- Spring Security
- AI Chat Integration
- Groq + DeepSeek Integration
- Persistent Chat Storage
- React Frontend Setup
- Login & Signup UI
- REST API Communication
- PostgreSQL Integration

---

# 🚀 Future Improvements

- User Chat History
- AI Conversation Context
- File Upload Support
- Code Snippet Highlighting
- Docker Deployment
- Cloud Hosting
- Rate Limiting
- Admin Dashboard
- AI Conversation Streaming

---

# 📚 Learning Outcomes

This project helped me learn:

- Real-world Backend Architecture
- Spring Security & JWT
- AI API Integration
- Spring AI
- PostgreSQL Design
- REST API Development
- Frontend & Backend Integration
- Layered Service Architecture
- Production-style Backend Development

---

# 👨‍💻 Author

## Rajibul Mondal

- GitHub: https://github.com/rajibul004
- LinkedIn: https://www.linkedin.com/in/rajibul04

---

# 📄 License

This project is built for learning, portfolio, and educational purposes.
