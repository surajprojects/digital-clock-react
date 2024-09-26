// ClockDateDisplay component to format and display the date, month, year, and day with default values
// Displays the formatted date with leading zero for single-digit days

export default function ClockDateDisplay({ date = 1, month = "Jan", year = 2024, day = "Monday" }) {
    return (
        <h3 id="clock-date-display"><span>{date < 10 ? "0" + date : date}</span> <span>{month}</span> <span>{year}</span> <span>{day}</span></h3>
    );
};
