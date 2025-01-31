const hrs = document.querySelector(".hrs");
const mins = document.querySelector(".mins");
const secs = document.querySelector(".secs");
const date = document.querySelector(".date");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const day = document.querySelector(".day");
const formatHrs = document.querySelector("#formatHrs");

function clockTime() {
    let currentClock = new Date();
    let currentHrs = currentClock.getHours();

    if (formatHrs.checked) {
        hrs.textContent = currentHrs > 12 ? (currentHrs - 12) : currentHrs;
    }
    else {
        hrs.textContent = currentHrs;
    }

    mins.textContent = currentClock.getMinutes();
    let currentSecs = currentClock.getSeconds();

    if (currentSecs < 10) {
        switch (currentSecs) {
            case 1:
                secs.textContent = "0" + currentSecs;
                break;
            case 2:
                secs.textContent = "0" + currentSecs;
                break;
            case 3:
                secs.textContent = "0" + currentSecs;
                break;
            case 4:
                secs.textContent = "0" + currentSecs;
                break;
            case 5:
                secs.textContent = "0" + currentSecs;
                break;
            case 6:
                secs.textContent = "0" + currentSecs;
                break;
            case 7:
                secs.textContent = "0" + currentSecs;
                break;
            case 8:
                secs.textContent = "0" + currentSecs;
                break;
            case 9:
                secs.textContent = "0" + currentSecs;
                break;
            default:
                secs.textContent = "0" + currentSecs;
        }
    }
    else {
        secs.textContent = currentSecs;
    }

}

function clockDate() {
    let currentClock = new Date();
    date.textContent = currentClock.getDate();
    year.textContent = currentClock.getFullYear();
    month.textContent = currentClock.toDateString().slice(4, 7);

    let currentDay = currentClock.getDay();
    switch (currentDay) {
        case 1:
            day.textContent = "Monday";
            break;
        case 2:
            day.textContent = "Tuesday";
            break;
        case 3:
            day.textContent = "Wednesday";
            break;
        case 4:
            day.textContent = "Thursday";
            break;
        case 5:
            day.textContent = "Friday";
            break;
        case 6:
            day.textContent = "Saturday";
            break;
        default:
            day.textContent = "Sunday";
    }

}

clockDate();
clockTime();
setInterval(clockTime, 1000);