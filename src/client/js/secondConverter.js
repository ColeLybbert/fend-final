//Needed to take user entered date and turn it into a number, if it was left as a string checkForDate would not work
export const secondConverter = async (formDate) => {
    try {
        let date = new Date(formDate);
        let dateInput = date.getTime()
        return dateInput
    } catch (err) {
        `Failed: ${err}`
    }
}