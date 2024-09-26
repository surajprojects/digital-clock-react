import { useState, useRef } from "react";
import ClockTimeDisplay from "../ClockTimeDisplay/ClockTimeDisplay";
import ClockDateDisplay from "../ClockDateDisplay/ClockDateDisplay";
import { currentTime, currentDate } from "../../utils/DateAndTime.js";

// Clock component that manages and displays both time and date

export default function Clock() {

    // State to store current time and date
    const [time, setTime] = useState(currentTime);
    const [date, setDate] = useState(currentDate);

    // State to handle the 12-hour or 24-hour format toggle
    const [isChecked, setIsChecked] = useState(false);

    // useRef to store interval IDs for updating time and date
    const intervalIdTime = useRef(null);
    const intervalIdDate = useRef(null);

    // Function to update the current time
    const runTime = () => {
        setTime(currentTime);
    };

    // Function to update the current date
    const runDate = () => {
        setDate(currentDate);
    };

    // Toggle handler for switching between 12-hour and 24-hour format
    const handleCheck = () => {
        setIsChecked(!isChecked);
    };

    // Set interval to update time every second (1000ms) and date every 5 minutes (300000ms)
    intervalIdTime.current = setInterval(runTime, 1000);
    intervalIdDate.current = setInterval(runDate, 300000);

    return (
        <>
            <div className="container">
                <h1 id="clock-head-text">Digital Clock</h1>
                <ClockTimeDisplay hrs={isChecked && time.hrs > 12 ? (time.hrs - 12) : time.hrs} mins={time.mins} secs={time.secs} />
                <ClockDateDisplay date={date.date} month={date.month} year={date.year} day={date.fullDay} />
                <p id="format">
                    <input type="checkbox" name="formatHrs" id="formatHrs" onChange={handleCheck} checked={isChecked} />12 Hours format</p>
            </div>
        </>
    );
};