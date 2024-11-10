import { useRef, useState } from "react";
import { IoReloadSharp } from "react-icons/io5";
import { IoPlayCircle } from "react-icons/io5";
import { FaCirclePause } from "react-icons/fa6";

export default function StopWatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false); // Start as not running
    const timerRef = useRef(null);

    const handleToggle = () => {
        if (isRunning) {
            clearInterval(timerRef.current);
            setIsRunning(false);
        } else {
            setIsRunning(true);
            timerRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 10); // Update every 10 ms
            }, 10);
        }
    };

    const handleReset = () => {
        clearInterval(timerRef.current);
        setIsRunning(false);
        setTime(0);
    };

    const formatTime = (time) => {
        const minutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
        const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
        const milliseconds = `0${Math.floor((time % 1000) / 10)}`.slice(-2); // Only two digits
        return `${minutes}:${seconds}:${milliseconds}`;
    };

    return (
        <div className="flex justify-center items-center h-[100vh]">
            <div>
                <h1 className="text-center font-medium text-[30px] bg-black text-white">Stop Watch</h1>
                <div className="bg-blue-100 text-white w-96 h-[430px] pt-5 pb-5">
                    <span className="text-black text-[25px] flex justify-end pr-5 cursor-pointer">
                        <IoReloadSharp onClick={handleReset} />
                    </span>
                    <div className="flex justify-center h-16 p-[40%] text-[40px] bg-red-600 w-16 rounded-full m-auto">
                        <h1 className="flex items-center">{formatTime(time)}</h1>
                    </div>
                    <div className="text-black flex justify-center text-[50px] pt-2 cursor-pointer" onClick={handleToggle}>
                        {isRunning ? <FaCirclePause style={{ fontSize: "50px" }} /> : <IoPlayCircle />}
                    </div>
                </div>
            </div>
        </div>
    );
}
