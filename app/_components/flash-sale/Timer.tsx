'use client'
import React, { useState, useEffect } from 'react'

import styles from './timer.module.css'

interface Time {
    hours: number;
    minutes: number;
    seconds: number;
}

export default function Timer() {
    const [time, setTime] = useState<Time>({ hours: 0, minutes: 0, seconds: 0 });

    const calculateTimeLeft = (currentTime: number, targetTime: number) => {
        const timeDifference = targetTime - currentTime;

        if (timeDifference > 0) {
            const hours = Math.floor(timeDifference / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            setTime({ hours, minutes, seconds });
        } else {
            setTime({ hours: 0, minutes: 0, seconds: 0 });
        }
    };

    useEffect(() => {
        const currentTime = new Date().getTime();
        const targetTime = currentTime + 12 * 60 * 60 * 1000; // 12 hours in milliseconds

        const timer = setInterval(() => {
            calculateTimeLeft(new Date().getTime(), targetTime);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className={styles.timer}>
            <div className={styles.time_text}><span>{String(time.hours).padStart(2, '0')}</span></div>
            <span className={styles.colon}>&nbsp;&nbsp;:&nbsp;&nbsp;</span>
            <div className={styles.time_text}><span>{String(time.minutes).padStart(2, '0')}</span></div>
            <span className={styles.colon}>&nbsp;&nbsp;:&nbsp;&nbsp;</span>
            <div className={styles.time_text}><span>{String(time.seconds).padStart(2, '0')}</span></div>
        </div>
    )
}
