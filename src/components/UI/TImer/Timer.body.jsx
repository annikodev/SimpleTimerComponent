import React, {useEffect, useState} from 'react';
import styles from './Timer.module.scss'
import TimerDatatime from "./Timer.datatime";

const TimerBody = ({list}) => {
    const deadline = new Date(list.eventDate)
    const diff = deadline - new Date();
    console.log(diff)

    const [time, setTime] = useState({
        days: Math.floor(diff / 1000 / 60 / 60 / 24),
        hours: Math.floor(diff / 1000 / 60 / 60) % 24,
        minutes: Math.floor(diff / 1000 / 60) % 60,
        seconds: Math.floor(diff / 1000) % 60,
    })


    return (
        <div className={styles.timer__body}>
            <div className={styles.timer__label}>
                <span>Countdown to {list.eventName}:</span>
            </div>
            <div className={styles.timer__clock}>
                <TimerDatatime
                    value={time.days}
                    tag={'days'}
                />
                <TimerDatatime
                    value={time.hours}
                    tag={'hours'}
                />
                <TimerDatatime
                    value={time.minutes}
                    tag={'minutes'}
                />
                <TimerDatatime
                    value={time.seconds}
                    tag={'seconds'}
                />
            </div>

        </div>
    );
};

export default TimerBody;