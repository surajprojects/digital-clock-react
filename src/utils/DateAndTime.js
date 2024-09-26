function currentTime() {
    const currentClock = new Date();
    const currentHrs = currentClock.getHours();
    const currentMins = currentClock.getMinutes();
    const currentSecs = currentClock.getSeconds();

    return {
        hrs: currentHrs,
        mins: currentMins,
        secs: currentSecs,
    };
};

function currentDate() {
    const currentClock = new Date();
    const currentDate = currentClock.getDate();
    const currentYear = currentClock.getFullYear();
    const currentMonth = currentClock.toDateString().slice(4, 7);
    const currentDay = currentClock.toDateString().slice(0, 3);
    let currentFullDay;

    switch (currentClock.getDay()) {
        case 1:
            currentFullDay = "Monday";
            break;
        case 2:
            currentFullDay = "Tuesday";
            break;
        case 3:
            currentFullDay = "Wednesday";
            break;
        case 4:
            currentFullDay = "Thursday";
            break;
        case 5:
            currentFullDay = "Friday";
            break;
        case 6:
            currentFullDay = "Saturday";
            break;
        default:
            day.textContent = "Sunday";
    };

    return {
        date: currentDate,
        month: currentMonth,
        year: currentYear,
        day: currentDay,
        fullDay: currentFullDay
    };
};

export { currentTime, currentDate };