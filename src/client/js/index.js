import { weatherAPI } from "../../server/server";

let button = document.getElementById('submitBtn');

const submitForm = async () => {
    weatherAPI();
}

document.addEventListener('DOMContentLoaded', function () {
    button.addEventListener("click", () => {
      submitForm();
    });
  });