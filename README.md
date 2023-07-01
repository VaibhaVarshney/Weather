# Weather
 
Weather App Documentation
Overview
The Weather App is a web application that allows users to search for weather information of different cities. It provides real-time weather data such as temperature, humidity, cloud percentage, wind speed, and more. The app also displays weather information for major cities by default. It is built using HTML, CSS, and JavaScript, and utilizes the Weather API to fetch weather data.

File Structure
The Weather App consists of the following files:

index.html - The main HTML file that contains the structure and content of the application.
styles.css - The CSS file that defines the styles and layout of the application.
script.js - The JavaScript file that contains the functionality and logic of the application.
Dependencies
The Weather App relies on the following external dependencies:

Font Awesome - A popular icon library used to display icons in the application.
Bootstrap - A CSS framework used for styling and responsive layout of the application.
HTML Structure
The index.html file follows the standard structure of an HTML document. It consists of several sections that define the layout and components of the Weather App:

CSS Styles
The styles.css file defines the styles for the Weather App. It includes custom styles as well as styles from the Bootstrap framework. The CSS file is responsible for the overall appearance and layout of the application.

JavaScript Functionality
The script.js file contains the JavaScript code that provides the functionality for the Weather App. It consists of several functions and event listeners to handle user interactions and fetch weather data from the Weather API.

API Integration
The Weather App integrates with the Weather API to retrieve weather data for different cities. The API is accessed using the fetch() method and requires an API key and host in the request headers. The API response is processed and the relevant weather information is displayed on the page.

Usage
To use the Weather App, follow these steps:

Open the index.html file in a web browser.
Enter a city name in the search input field.
Click the search button or press Enter to fetch the weather data for the entered city.
The weather information for the city will be displayed in a card format.
By default, weather information for major cities is displayed in a table.
Toggle the dark mode switch to change the theme of the application.