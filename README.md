# 🌤️ Weather Forecast App (MERN Stack)

A modern and beautifully designed **Weather Forecast Web Application** built using  
**React + Node.js + Express + MongoDB + OpenWeather APIs**.

This project provides **real-time weather**, **5-day forecast**, **hourly temperatures**,  
**air quality index (AQI)**, and **sunrise/sunset timings** — all in a professional UI  
with smooth glassmorphism design.

---

## 🚀 Why I Built This Project

I built this project to:

- Improve my **MERN stack development** skills  
- Learn to integrate **external APIs** (OpenWeather)  
- Handle **frontend–backend communication**  
- Work with **timing data, AQI data, and geolocation**  
- Build a **beautiful UI** similar to real weather applications  
- Strengthen my **portfolio** with a production-level project  

---

## 🔥 Features

### 🌦 Current Weather
- Live temperature  
- Weather condition & icon  
- Humidity  
- Pressure  
- Feels-like temperature  
- Visibility  
- Auto-updated date & time  

### 🔮 5-Day Forecast
- Grouped by day  
- Maximum temperature of each day  
- Weather icon  
- Day name + date  

### 🕒 Hourly Temperature (Today)
- 6 upcoming temperatures of the same day  
- Hourly icons  
- Smooth horizontal scroll  

### 🌅 Sunrise & Sunset
- Converted to readable AM/PM format  

### 🏭 Air Quality Index (AQI)
- CO  
- SO₂  
- O₃  
- NO₂  

### 🎨 Modern UI (Glassmorphism)
- Transparent cards  
- Center-aligned layout  
- Smooth spacing  
- Mobile-responsive  

---

## 🧰 Tech Stack

### **Frontend**
- React (Vite)
- CSS (Glassmorphism design)
- Axios

### **Backend**
- Node.js  
- Express.js  
- Axios  
- MongoDB (Mongoose)

### **APIs Used**
- OpenWeather **Current Weather API**  
- OpenWeather **5-Day Forecast API**  
- OpenWeather **Air Pollution API**

---

## 📁 Folder Structure

Weather-Forecast-App/
│
├── backend/
│ ├── controllers/
│ │ ├── weatherController.js
│ │ ├── forecastController.js
│ │ ├── aqiController.js
│ ├── routes/
│ │ ├── weatherRoutes.js
│ │ ├── forecastRoutes.js
│ │ ├── aqiRoutes.js
│ ├── models/
│ │ ├── ForecastRecord.js
│ │ ├── AqiRecord.js
│ ├── server.js
│ ├── .env
│ └── package.json
│
└── frontend/
├── src/
│ ├── components/
│ │ ├── SearchBar.jsx
│ │ ├── CurrentWeather.jsx
│ │ ├── MetricCard.jsx
│ │ ├── Forecast.jsx
│ │ ├── AQI.jsx
│ │ ├── SunriseSunset.jsx
│ │ ├── TodayTemps.jsx
│ ├── App.jsx
│ ├── index.css
│ ├── main.jsx
├── images/
├── vite.config.js
└── package.json


---

## 🔗 API Workflow (Frontend → Backend → OpenWeather)

### **① Frontend calls backend**

GET /api/weather?city=Eluru
GET /api/forecast?lat=...&lon=...
GET /api/aqi?lat=...&lon=...


### **② Backend fetches from OpenWeather**

- `/weather` → Current Weather API  
- `/forecast` → 5 Day / 3 Hour Forecast API  
- `/aqi` → Air Pollution API  

### **③ Backend cleans, formats & returns simplified JSON**

### **④ Frontend displays UI cards**

---

## 🛠 How to Run the Project Locally

### **1️⃣ Clone the repository**

```bash
git clone https://github.com/your-username/your-repo.git
cd Weather-Forecast-App
🌐 Backend Setup
cd backend
npm install

Create .env in backend folder:
OWM_API_KEY=your_openweather_api_key
MONGO_URI=your_mongodb_connection_string
PORT=5000

Start backend:
npm start

💻 Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs at:

http://localhost:5173
