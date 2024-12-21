import { useEffect, useState } from "react";

function Timer() {
    const [isStart, setIsStart] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [hourse, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [timerId, setTimerId] = useState(0);
  
    const handleStart = () => {
      if (hourse < 0 || minutes < 0 || seconds <= 0) {
        alert("Invalid Input");
        return;
      } else {
        setIsStart(true);
      }
    }
  
    const handleResume = () => {
      setIsPaused(false);
      runTimer(seconds, minutes, hourse);
    }
    const handlePause = () => {
      setIsPaused(true);
      clearInterval(timerId);
    }
  
    const handleReset = () => {
      setIsStart(false);
      resetTimer();
    }
  
    const resetTimer = () => {
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      clearInterval(timerId);
    }
  
    const handleInput = (e) => {
      const value = parseInt(e.target.value);
      const id = e.target.id;
      if (id === 'hours') {
        setHours(value);
      } else if (id === 'minutes') {
        setMinutes(value);
      } else {
        setSeconds(value);
      }
    }
  
  
    const runTimer = (sec, min, hr, tid) => {
      if (sec > 0) {
        setSeconds((s) => s - 1);
      } else if (sec === 0 && min > 0) {
        setMinutes((m) => m - 1);
        setSeconds(59);
      } else if (min === 0) {
        setHours((h) => h - 1);
        setMinutes(59);
        setSeconds(59);
      }
  
      if (sec === 0 && min === 0 && hr === 0) {
        // resetTimer();
        handleReset();
        alert('Timer is finished');
        clearInterval(tid);
        return
      }
    }
  
    useEffect(() => {
      let tid;
      if (isStart) {
        tid = setInterval(() => {
          runTimer(seconds, minutes, hourse, tid);
        }, 1000)
        setTimerId(tid);
      }
  
      return () => {
        clearInterval(tid);
      }
    }, [isStart, hourse, minutes, seconds])

  return (
    <div>
      {!isStart && (
        <div className="text-white w-full h-96">
          <div className="text-black flex justify-center gap-6 items-center h-96">
            <input
              id="hours"
              onChange={handleInput}
              className="border-2 w-16 h-16 bg-white text-3xl"
              type="number"
              placeholder="HH"
            />
            <input
              id="minutes"
              onChange={handleInput}
              className="border-2 w-16 h-16 bg-white text-3xl"
              type="number"
              placeholder="MM"
            />
            <input
              id="seconds"
              onChange={handleInput}
              className="border-2 w-16 h-16 bg-white text-3xl"
              type="number"
              placeholder="SS"
            />
          </div>
          <div className="text-white flex justify-center gap-20 text-3xl">
            <button onClick={handleStart}>Start</button>
          </div>
        </div>
      )}
      {isStart && (
        <div>
          <div className="text-white w-full h-96">
            <p className="flex justify-center gap-6 items-center h-96 text-3xl">
              {String(hourse).padStart(2, "0")}:
              {String(minutes).padStart(2, "0")}:
              {String(seconds).padStart(2, "0")}
            </p>
          </div>
          <div className="text-white flex justify-center gap-20 text-3xl">
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleResume}>resume</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Timer;
