export const checkForDate = async (dateInput) => {
    let date = dateInput;
    console.log(dateInput);
    if (date > Date.now() + (1000 * 60 * 60 * 24 * 7)) {
        console.log('Greater than a week')
        return true;
    } else {
        console.log('Less than a week')
        return false;
    }
}

