export default function ClockDateDisplay({ date = 1, month = "Jan", year = 2024, day = "Monday" }) {
    return (
        <h3 id="clock-date-display"><span>{date < 10 ? "0" + date : date}</span> <span>{month}</span> <span>{year}</span> <span>{day}</span></h3>
    );
};