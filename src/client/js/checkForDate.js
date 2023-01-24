// Uses date Input from user entered date, defines anything over a weeks time,
// then returns true if the date Input is greater than a week, and false if it's not
export const checkForDate = async (dateInput) => {
    let overWeek = Date.now() + (1000 * 60 * 60 * 24 * 7)
    if (dateInput > overWeek) {
        return true;
    } else {
        return false;
    }
}

