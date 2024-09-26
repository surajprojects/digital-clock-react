import { useState, useRef, useEffect } from "react";
import ClockTimeDisplay from "../ClockTimeDisplay/ClockTimeDisplay";
import ClockDateDisplay from "../ClockDateDisplay/ClockDateDisplay";
import { currentTime, currentDate } from "../../utils/DateAndTime.js"

export default function Clock() {
    const [time, setTime] = useState(currentTime);
    const [date, setDate] = useState(currentDate);
    const [isChecked, setIsChecked] = useState(false);

    const intervalIdTime = useRef(null);
    const intervalIdDate = useRef(null);

    const runTime = () => {
        setTime(currentTime);
    };

    const runDate = () => {
        setDate(currentDate);
    };

    const handleCheck = () => {
        setIsChecked(!isChecked);
    };

    intervalIdTime.current = setInterval(runTime, 1000);
    intervalIdDate.current = setInterval(runDate, 300000);

    return (
        <>
            <div className="container">
                <h1 id="clock-head-text">Digital Clock</h1>
                <ClockTimeDisplay hrs={isChecked && time.hrs > 12 ? (time.hrs - 12) : time.hrs} mins={time.mins} secs={time.secs} />
                <ClockDateDisplay date={date.date} month={date.month} year={date.year} day={date.fullDay} />
                <p id="format"><input type="checkbox" name="formatHrs" id="formatHrs" onChange={handleCheck} checked={isChecked} />12 Hours format</p>
            </div>
        </>
    );
};