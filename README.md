# CTWeather App
A modern styled essential data weather app.

[Live App](https://ctsmit.github.io/CTWeather)

[express on render](https://ctweather.onrender.com/users/)


# Screenshots

![weatherapp](https://user-images.githubusercontent.com/114516481/214865973-8ee30a52-d7a6-45ef-b8a3-db1dfea6ed45.PNG)


# About
You are able to create an account and add and store any location (currently only US).

To add location:
Hover "Locations" click add and fill out and submit the form.

To delete account:
Click on the little person icon and click delete account, it deletes from both mongodb and firebase.

# Future Enhancements

- [ ] change from US only location to world wide
- [ ] add a search bar so you don't have to have an exact city and state abbriviation
- [ ] when you delete a location, stays on current location instead of first in the array of locations
- [ ] when add location go to that location instead of first in array
- [ ] finish the next week overview
- [ ] add moon phase icon
- [ ] make the sunrise change to the upcoming sunrise after a certain time

# Motivation

I am enrolled in a software engineering bootcamp (15wks). This was our third project assignment on week 15. 

# Installation

### To fork my repo:

- you will see a button in the UPPER RIGHT hand corner that says Fork. 

### To clone my repo:

- `git clone https://github.com/ctsmit/CTWeather.git`
- `git clone https://github.com/ctsmit/CTWeatherExpress`

### Install dependencies:

- `npm init -y`
- `npm i`

### Create .nvm file:

- Create a .env file and link to Openweathermap api

### Start App:

- you should then be able to run npm start and have the app open in http://localhost:3000/

# Technologies Used
- **React.js** for front-end development. 

- **Node.js** as runtime enviroment of JS.

- **Mongoose** as library for MongoDB.

- **Express.js** as framework.

- **MongoDB** as database for storing items in a collection.

- **Vanilla CSS** for styling

- **openweathermap Api** for weather data

-**Firebase** for signing in and auth

# Credits
Thank you to Cycle 28 and our amazing teachers:
- Tishana Trainor
- Kasper Kain

the visual style inspired by https://dribbble.com/shots/18425258-Srawana-Weather-Dashboard-Design
