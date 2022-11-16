const apiKey = "a51c64ceb6aa46e8f84fa491ebcd802a";
const baseURL = "http://api.openweathermap.org/data/2.5/forecast?";
let myForm = document.getElementById("coleform");
let button = document.getElementById("generate");
let zipInput = document.getElementById("zip");
let feelingInput = document.getElementById("feelings")
let contentInput = document.querySelector("#content");
let dateInput = document.querySelector("#date");
let tempInput = document.querySelector("#temp");

let apiData;
let projectData = { temp: undefined, date: "", userResponse: "" };

//make a controller function to send the data
const submitForm = async (e) => {
  //await the async data call and assign all of the data before posting the data.
  await weatherData();
  //then post it to server
  postData();
  // after data is posted update ui
  updateData();
};
const weatherData = async () => {
  try {
    const zipcode = zipInput.value;
    const res = await fetch(`${baseURL}zip=${zipcode},us&appid=${apiKey}`);
    const data = await res.json();
    apiData = data.list;
    let specificDate = apiData[apiData.length - 1];
    projectData.temp = specificDate.main.temp;
    projectData.date = specificDate.dt;
    projectData.userResponse = feelingInput.value;
    return apiData;
  } catch (err) {
    return `Failed ${err}`;
  }
};

const postData = async () => {
  fetch("http://localhost:8000/weather", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ projectData }),
  })
  .then((response) => response.json())
};

document.addEventListener("DOMContentLoaded", (event) => {
  myForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Cancel the default action
    submitForm();
  });
});


const updateData = async () => {
  try {
    const res = await fetch(`http://localhost:8000/weather`);
    const data = await res.json();
    let tempData = data.projectData.temp;
    let dateData = data.projectData.date;
    let contentData = data.projectData.userResponse;
    dateInput.textContent = dateData;
    contentInput.textContent = contentData;
    tempInput.textContent = tempData;
    console.log(tempResponse)
  } catch (err) {
    return `Failed ${err}`;
  }
};