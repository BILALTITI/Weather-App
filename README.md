Weather App

Overview

The Weather App is a React-based web application that provides real-time weather information. It fetches the user's current location to display weather data and defaults to Riyadh if location access is denied. The app is built with modern technologies like Redux, Material-UI, and reducers for state management.

Live Demo

You can access the live version of the app here: [Weather App](https://elaborate-queijadas-9968a0.netlify.app/)

Features

Multi-Language Support

The app supports both Arabic and English languages.

Users can toggle between languages seamlessly.

Search by Location

Enter a city name to fetch real-time weather data.

Auto-suggest functionality for faster search results.

Current Weather

Displays temperature, weather condition, humidity, wind speed, and pressure.

Shows a dynamic weather icon and background based on conditions (e.g., sunny, rainy).

Default City

If location access is denied, the app defaults to showing weather data for Riyadh.

Geolocation Support

Automatically fetches weather data for the user's current location when permitted.

State Management

Uses Redux for managing the application state efficiently.

Implements reducers for handling user actions and API responses.

Responsive Design

Optimized for both desktop and mobile screens.

Built with Material-UI for a modern and consistent user interface.

Error Handling

Displays user-friendly error messages for invalid searches or API issues.

Technologies Used

Frontend

React: Core library for building the user interface.

Material-UI: UI component library for styling and layout.

Redux: State management.

React-Redux: Integration of Redux with React.

JavaScript (ES6): Core logic and interactivity.

APIs

OpenWeather API: Fetches real-time and forecast weather data.

Geolocation API: Retrieves the user's current location.

Tools

Webpack: Module bundler.

Axios: For making API requests.

Installation

Prerequisites

Node.js installed on your machine.

API key from OpenWeather (https://openweathermap.org/).

Steps

Clone the repository:

git clone https://github.com/BILALTITI/Weather-App.git
cd weather-app

Install dependencies:

npm install

Create a .env file in the root directory and add your OpenWeather API key:

REACT_APP_WEATHER_API_KEY=your_api_key_here

Start the development server:

npm start

Open your browser and navigate to http://localhost:3000.

Usage

View Current Location Weather:

Allow location access in your browser to fetch weather data for your current location.

If location access is denied, weather data for Riyadh will be displayed by default.

Search for Weather:

Enter a city name in the search bar and press enter.

View current weather and a 7-day forecast.

Toggle Language:

Use the language toggle to switch between Arabic and English.

Responsive Interface:

Enjoy a clean and modern UI on both desktop and mobile devices.

Future Enhancements

Hourly Forecast

Provide an hour-by-hour weather breakdown.

Additional Languages

Expand support for more languages beyond Arabic and English.

Advanced Charts

Include interactive charts for temperature trends and precipitation.

Contributing

Fork the repository.

Create a feature branch:

git checkout -b feature-name

Commit your changes:

git commit -m "Add feature description"

Push to the branch:

git push origin feature-name

Open a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Contact

For any queries or suggestions, feel free to contact:

Email:bilalaltiti@hotmail.com

GitHub: BILALTITI

