//Define form
let form = document.getElementById("inputForm");

//EventListener used in index, listens for form to be submitted
export const formListener = async (submitForm) => {
    try {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        submitForm(dateInput);
      })
    } catch (err) {
        return `Failed: ${err}`
    }
}
