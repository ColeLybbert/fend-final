//Define form
let form = document.getElementById("inputForm");

//EventListener used in index, listens for form to be submitted
export const formListener = async (weatherUpdate, pixUpdate) => {
    try {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        let formInput = document.getElementById('placeInput').value;
        let formDate = document.getElementById('dateInput').value;
        weatherUpdate(formDate, formInput);
        pixUpdate(formInput);
      })
    } catch (err) {
        return `Failed: ${err}`
    }
}
