<div align="center">

# 📝 EasyResume - AI-Powered Resume Builder

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel&logoColor=white)](#-live-demo)
[![React](https://img.shields.io/badge/Frontend-React-blue?logo=react&logoColor=white)](#-tech-stack)
[![Node](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js&logoColor=white)](#-tech-stack)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-darkgreen?logo=mongodb&logoColor=white)](#-tech-stack)
[![OpenAI](https://img.shields.io/badge/AI-OpenAI-black?logo=openai&logoColor=white)](#-features)
[![Status](https://img.shields.io/badge/Status-Active-success)](#)

*Build clean, professional, and visually stunning resumes in minutes with the power of AI.*

</div>

---

## 🚀 Live Demo

🌐 **EasyResume is live!** Check it out here:  
👉 [**EasyResume App**](https://easy-resume-phi.vercel.app/)  
👉 *Alternate Link:* [Vercel Deployment](https://easy-resume-aja3wdjh9-krish30ps-projects.vercel.app/)

---

## 📌 About EasyResume

**EasyResume** is a full-stack **Resume Builder web application** designed to help users create clean, professional resumes quickly and easily. By leveraging an intuitive interface and AI-driven enhancements, users can effortlessly compile their details, select a professional template, and generate a polished PDF in minutes.

---

## ✨ Features

- 🧾 **Structured Form Inputs:** Easily fill out your personal information, education, work experience, and skills.
- 🤖 **AI Enhancements:** Automatically generate professional summaries, and enrich work experience & project details using OpenAI.
- 🎨 **Professional Templates:** Choose from multiple elegantly designed resume templates.
- ✏️ **Real-Time Preview:** Watch your resume update instantly as you edit the content.
- 💾 **Secure Storage & Authentication:** Save and manage multiple resumes securely with JWT-based authentication.
- 📄 **PDF Export:** Download your completed resume seamlessly as a PDF.
- ⚡ **Responsive & Modern UI:** Built with Tailwind CSS and React for a lightning-fast experience across devices.

---

## 🛠️ Tech Stack

### 🔹 Frontend
- **Framework:** [React 19](https://react.dev/) with [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management & Routing:** React Router v7
- **Utilities:** Axios for API calls, HTML2PDF & jsPDF for PDF generation, Lucide React for icons.

### 🔹 Backend
- **Framework:** [Node.js](https://nodejs.org/) & [Express 5](https://expressjs.com/)
- **Database:** [MongoDB](https://www.mongodb.com/) with Mongoose
- **Authentication:** JSON Web Tokens (JWT) & bcryptjs
- **File Uploads:** Multer
- **AI Integration:** OpenAI API

### 🔹 Deployment
- **Frontend & Backend Host:** Vercel

---

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites
- [Node.js](https://nodejs.org/en/download/) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (Local instance or MongoDB Atlas)

### 1. Clone the repository
```bash
git clone https://github.com/Krish30p/Resume-Builder.git
cd Resume-Builder
```

### 2. Set up the Backend
```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory and configure the following variables:
```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
OPENAI_API_KEY=your_openai_api_key
NODE_ENV=development
```

Start the backend development server:
```bash
npm start
```
*The backend server will run on `http://localhost:4000`.*

### 3. Set up the Frontend
Open a new terminal window/tab:
```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend/` directory (if required) to set up API urls, for example:
```env
VITE_API_URL=http://localhost:4000
```

Start the Vite development server:
```bash
npm run dev
```
*The frontend application will be available at `http://localhost:5173`.*

---

## 📂 Folder Structure

```text
RES/
├── backend/                  # Express server & API Logic
│   ├── config/               # Database and Env configurations
│   ├── controllers/          # API Route controllers (AI, Resumes, Users)
│   ├── middleware/           # Auth and error middlewares
│   ├── routes/               # API endpoint definitions 
│   ├── uploads/              # Uploaded assets (e.g. profile images)
│   ├── server.js             # Entry point
│   └── package.json
│
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/       # Reusable UI elements & Form Components
│   │   ├── utils/            # Helper functions & API Path Configs
│   │   ├── App.jsx           # Main React component
│   │   └── main.jsx          # Application entry point
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
│
└── readme.md                 # Project Documentation
```

---

## 📡 API Reference

### Auth Routes (`/api/auth`)
- `POST /register` - Register a new user
- `POST /login` - Authenticate user & get token

### Resume Routes (`/api/resume`)
- `GET /` - Get all resumes for the logged-in user
- `POST /` - Create a new resume
- `GET /:id` - Get a specific resume by ID
- `PUT /:id` - Update a specific resume
- `DELETE /:id` - Delete a resume

### AI Routes (`/api/ai`)
- `POST /generate-summary` - Generate a professional profile summary
- `POST /enhance-experience` - Enhance work experience descriptions
- `POST /enhance-project` - Enhance project details

*(Note: All AI and Resume routes require Authentication.)*

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check out the issues page if you want to contribute.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
