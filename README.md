# Preface:
This website will take to user entered inputs: Place and Time. 
The Place the user entered is sent to the pixabay api and the geonames api. Pixabay fetches pictures of the user entered place and geonames fetches the coordinates of the user entered place. 
The Time the user entered is sent to the secondConverter.js file where the string the user entered is converted into a number. Then it is sent to checkForDate.js file and the forecastOrCurrent.js file. checkForDate.js uses date Input from user entered date, defines anything over a weeks time, then returns true if the date Input is greater than a week, and false if it's not. The forecastOrCurrent.js file takes the defined "Week Away" from checkForDate.js, essentially if checkForDate returned true it will fetch the forecast api, if not it will run the current weather api. No matter which weather api you use the end result is essentially the same, both fetch weather data and return it, the only difference being if it within a weeks time or after a weeks time. They both also use geonames api since they can't run on a name, only coordinates. Finally at the end of every api, postData.js posts all of the data from every api that is ran and sends it to the server where it is logged in the terminal. Then everything else that the api's return is shown on the UI.

# Instructions:
Open Terminal

For Server:
npm i express
npm run start

For Production:
Create file called mockJSEnv.js in root
You have to go to each website and get your own api keys to use this website.
export const weatherApiKey = (Your weatherbit.io api key);
export const geoApiKey = (Your geonames.org api key);
export const pixApiKey = (Your pixabay.com api key);
export const formDate = '2023-01-11T22:41:38.540Z'
export const formInput = "raleigh";

For Development:
Create file called mockJSEnv.js in root
You have to go to each website and get your own api keys to use this website.
export const weatherApiKey = (Your weatherbit.io api key);
export const geoApiKey = (Your geonames.org api key);
export const pixApiKey = (Your pixabay.com api key);
export const formDate = '2023-01-11T22:41:38.540Z'
export const formInput = "raleigh";

When running website:
npm run start,
npm run dev(after you have ran npm run prod at least once),
Enter location you want to go on the UI,
Enter the date you will arrive.
Press submit(Both inputs have to be completed or else it won't submit)