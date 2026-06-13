import {useState, useEffect} from "react";

const DigitalClock=()=>{

  const [time, setTime]=useState(new Date().toLocaleTimeString());

  useEffect(()=>
  {
    const timerId=setInterval(()=>{
     setTime(new Date().toLocaleTimeString());
    },1000);

    return ()=>{
      clearInterval(timerId);
    }
  },[]);

  useEffect(()=>{
    document.title=`Current Time: ${time}`;
  },[time]);


  return(
    <div className="digital-clock">
      <h1>Live Digital Clock</h1>
      <div className="clock-display">{time}</div>
    </div>
  );

}

export default DigitalClock;