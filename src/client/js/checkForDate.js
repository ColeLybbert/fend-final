// Uses date Input from user entered date, defines anything over a weeks time,
// then returns true if the date Input is greater than a week, and false if it's not
export const checkForDate = async (dateInput) => {
    let overWeek = Date.now() + (1000 * 60 * 60 * 24 * 7)
    console.log(dateInput);
    console.log(overWeek);
    if (dateInput > overWeek) {
        console.log('Greater than a week')
        return true;
    } else {
        console.log('Less than a week')
        return false;
    }
}

