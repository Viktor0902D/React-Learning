import {useState,useRef,useEffect} from 'react';

const Stopwatch=()=>{
  const [time, setTime]=useState(0);
  const intervalRef=useRef(null);

  const handleStart=()=>{
    if(intervalRef.current!==null) return;
    intervalRef.current=setInterval(()=>{
      setTime(prevTime=>prevTime+0.1);
    },100);
  }
  const handleStop=()=>{
    clearInterval(intervalRef.current);
    intervalRef.current=null;
  }
  const handleReset=()=>{
    clearInterval(intervalRef.current);
    intervalRef.current=null;
    setTime(0);
  }

  useEffect(()=>{
    return()=>{
      clearInterval(intervalRef.current);
    }
  },[]);

  return(
    <div>
      <h1>Stopwatch</h1>
      <p>{time.toFixed(1)} seconds</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );

}

export default Stopwatch;