# Sagar Electricals MERN Application

This project is a modern, responsive web application for Sagar Electricals, built using the MERN stack (MongoDB, Express, React, Node.js) with Tailwind CSS.

## File Structure

```
Sagar-Electricals-Kakati/
│
├── backend/          # Node.js + Express backend
│   ├── .env          # Environment variables (MongoDB URI)
│   ├── models/       # Mongoose models (ServiceRequest.js)
│   ├── routes/       # Express routes (serviceRoutes.js)
│   ├── server.js     # Entry point
│   └── package.json
│
└── frontend/         # Vite + React frontend
    ├── src/
    │   ├── components/ # Navbar, Footer, Floating Buttons
    │   ├── pages/      # Home, About, Services, Contact, etc.
    │   ├── App.jsx     # Main Router setup
    │   ├── main.jsx    # React entry point
    │   └── index.css   # Main Tailwind CSS file
    ├── vite.config.js
    └── package.json
```

## How to Run the Application

You will need two terminal windows to run both the backend and frontend concurrently.

### 1. Run the Backend API

1. Open a terminal and navigate to the backend folder:
   ```bash
   cd c:\Users\malli\Desktop\Sagar-Electricals-Kakati\backend
   ```
2. Start the Node server (runs on `http://localhost:5000`):
   ```bash
   node server.js
   ```
   *You should see a message saying "MongoDB connected successfully" and "Server running on port 5000".*

### 2. Run the Frontend React App

1. Open a second terminal window and navigate to the frontend folder:
   ```bash
   cd c:\Users\malli\Desktop\Sagar-Electricals-Kakati\frontend
   ```
2. Start the Vite development server:
   ```bash
   npm run dev
   ```
3. Open your browser and navigate to the URL provided by Vite (typically `http://localhost:5173/`).

## Features
- Complete UI mapped to modern design aesthetics.
- Responsive layout prioritizing User Experience.
- Interactive Floating WhatsApp and Contact Buttons.
- Full MERN integration for Service Requests.
