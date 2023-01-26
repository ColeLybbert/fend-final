import { checkForDate } from "./checkForDate";
import { forecastOrCurrent } from "./forecastOrCurrent";
import { secondConverter } from './secondConverter';

//If data is within a week make a card that displays current temp, if it's sunny or rainy or snowy or mix, and the date. If it is over a week do the same thing except take min and max temp for 7 days and average them.
//Then display the card depending on the date entered.
export const weatherUpdate = async (formDate, formInput) => {
    let dateInput = await secondConverter(formDate);
    await checkForDate(dateInput);
    let data = await forecastOrCurrent(dateInput, formInput);
    let trueOrFalse = await checkForDate(dateInput);
    if (trueOrFalse){
      let minAverage = [data.data[0].min_temp + data.data[1].min_temp +data.data[2].min_temp + data.data[3].min_temp + data.data[4].min_temp + data.data[5].min_temp + data.data[6].min_temp / 7]
      let maxAverage = [data.data[0].max_temp + data.data[1].max_temp +data.data[2].max_temp + data.data[3].max_temp + data.data[4].max_temp + data.data[5].max_temp + data.data[6].max_temp / 7]
      let day = data.data[0]
      let div = document.getElementById('weather');
      let card = document.createElement('div');
      card.classList.add('cards');
      let date = document.createElement('h3');
      date.id = "date";
      date.innerHTML = day.datetime;
      let img = document.createElement('img');
    
      if (day.precip == 0 & day.snow == 0) {
        img.src = "//ssl.gstatic.com/onebox/weather/48/sunny.png"
      } else if (day.precip > 0 & day.snow == 0) {
        img.src = "//ssl.gstatic.com/onebox/weather/48/rain.png"
      } else if (day.precip == 0 & day.snow > 0) {
        img.src = "//ssl.gstatic.com/onebox/weather/48/snow_light.png"
      } else if (day.precip > 0 & day.snow > 0) {
        img.src = "//ssl.gstatic.com/onebox/weather/48/snow_s_rain.png"
      }
    
      let minTemp = document.createElement('h3');
      minTemp.innerHTML = `Avg Low:${Math.trunc(minAverage)}°C`;
      minTemp.id = "minTemp";
      let maxTemp = document.createElement('h3');
      maxTemp.innerHTML = `Avg High:${Math.trunc(maxAverage)}°C`;
      maxTemp.id = "maxTemp"
      card.appendChild(date);
      card.appendChild(img);
      card.appendChild(minTemp);
      card.appendChild(maxTemp);
      div.appendChild(card);
    } else {
      let day = data.data[0]
      let div = document.getElementById('weather');
      let card = document.createElement('div');
      card.classList.add('cards');
      let date = document.createElement('h3');
      date.id = "date";
      date.innerHTML = day.datetime;
      let img = document.createElement('img');
    
      if (day.precip == 0 & day.snow == 0) {
        img.src = "//ssl.gstatic.com/onebox/weather/48/sunny.png"
      } else if (day.precip > 0 & day.snow == 0) {
        img.src = "//ssl.gstatic.com/onebox/weather/48/rain.png"
      } else if (day.precip == 0 & day.snow > 0) {
        img.src = "//ssl.gstatic.com/onebox/weather/48/snow_light.png"
      } else if (day.precip > 0 & day.snow > 0) {
        img.src = "//ssl.gstatic.com/onebox/weather/48/snow_s_rain.png"
      }
    
      let temperature = document.createElement('h3');
      temperature.innerHTML = `Temp:${day.temp}°C`;
      temperature.id = "temp"
      card.appendChild(date);
      card.appendChild(img);
      card.appendChild(temperature);
      div.appendChild(card);
    }
  };