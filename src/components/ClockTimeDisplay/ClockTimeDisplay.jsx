// ClockTimeDisplay component to format and display the current time (hrs, mins, secs) with default values
// Displays the time with leading zeros for single-digit values

export default function ClockTimeDisplay({ hrs = 0, mins = 0, secs = 0 }) {
    return (
        <h2 id="clock-time-display">
            <span>{hrs < 10 ? "0" + hrs : hrs}</span>:
            <span>{mins < 10 ? "0" + mins : mins}</span>:
            <span>{secs < 10 ? "0" + secs : secs}</span>
        </h2>
    );
};
