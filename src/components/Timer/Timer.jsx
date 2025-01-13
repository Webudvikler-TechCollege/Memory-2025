import { useEffect, useState } from "react"

export const Timer = ({ isRunning, resetTrigger }) => {
    const [time, setTime] = useState(0)

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                setTime(prevTime =>  prevTime + 10)
            }, 10)
            
        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isRunning])

    // Formatér tiden til mm:ss
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const milliseconds = Math.floor((time % 1000) / 10);
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}:${
          milliseconds < 10 ? `0${milliseconds}` : milliseconds
        }`;
    };

    useEffect(() => {
        setTime(0)
    }, [resetTrigger])
    

    return <>Timer: {formatTime(time)}</>;
}