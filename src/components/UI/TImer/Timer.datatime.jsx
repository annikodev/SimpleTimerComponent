import React from 'react';
import styles from './Timer.module.scss'

const TimerDatatime = ({tag, value}) => {
    return (
        <div className={styles.timer__datatimer}>
            <div className={styles.timer__numeber}>
                <span>{value}</span>
            </div>
            <div className={styles.timer__name}>
                <span>{tag}</span>
            </div>
        </div>
    );
};

export default TimerDatatime;