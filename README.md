# weather-forecast-app

# 🌤️ Weather Forecast App (Django + React)

A full-stack weather forecast web application built with Django (Python) and React (JavaScript).  
Users can add cities to a database, view real-time weather forecasts from the OpenWeatherMap API, and manage their saved locations.

---

## 🚀 How to Run the Project Locally

### ⚙️ Backend (Django)

> Requirements: Python 3.8+, pip, virtualenv (recommended)

1. Navigate to the backend folder:
   ```bash
   cd django_api

2. Create a virtual Environment:

    ```bash
    source venv/bin/activate  # On Windows: venv\Scripts\activate

3. Install the dependencies:

    ```bash
    pip install -r requirements.txt

4. Run the migrations

    ```bash
    python manage.py migrate

5. Start the server
   
    ```bash
   python manage.py runserver

### 🌐 FrontEnd (React)

1. Navigate to the frontend folder:
   ```bash
   cd tempo

2. Install the dependencies:

    ```bash
    npm install
    
3. Start the development server:

    ```bash
    npm start

### 🔧 Features
  
Add cities to the Django backend
Fetch real-time weather data from OpenWeatherMap
Select cities from a dynamic dropdown list
Delete cities from the backend
Display weather icon, temperature, humidity, wind, and description
React and Django fully decoupled


### 🌤️ API Integration

Uses OpenWeatherMap API
Make sure to insert your API key in the frontend code:

   ```bash
    https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric
 ```

### 🧾 Environment Variables (optional)

If using .env in the backend, include it in .gitignore and define things like:

   ```bash
   SECRET_KEY=your-secret-key
   DEBUG=True
 ```

---

# License

MIT License. Feel free to use and adapt this project.
