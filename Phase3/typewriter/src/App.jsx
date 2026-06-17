import {useState, useEffect, useRef} from "react";

const Typewriter=({text,speed}) => {
  const [displayedText,setDisplayedText]=useState("");
  const indexRef=useRef(0);
  const intervalRef=useRef(null);

  useEffect(()=>{
    setDisplayedText("");
    indexRef.current=0

    intervalRef.current=setInterval(()=>{
      if(indexRef.current<text.length){
      setDisplayedText(text.slice(0, indexRef.current + 1));
      indexRef.current+=1;
    }
    else{
      clearInterval(intervalRef.current);
    }
    }, speed);

    return()=>{
      clearInterval(intervalRef.current);
    }
  },[text,speed]);

return (
    <div style={{ minHeight: "60px", fontFamily: "monospace", fontSize: "20px" }}>
      <p>
        {displayedText}
        {/* Bonus: A blinking cursor for extra cinematic effect */}
        <span style={{ animation: "blink 1s step-end infinite" }}>_</span>
      </p>
    </div>
  );
};

const App=()=>{
  const [message,setMessage]=useState("System booting up...");

  return (
    <div style={{ padding: "40px", maxWidth: "600px" }}>
      <h1>Game Engine Simulator</h1>
      
      {/* We pass the master state down as a prop */}
      <div style={{ padding: "20px", backgroundColor: "#1e1e1e", color: "#00ff00", borderRadius: "8px", marginBottom: "20px" }}>
        <Typewriter text={message} speed={75} />
      </div>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <button onClick={() => setMessage("System booting up...")}>
          Boot Sequence
        </button>
        <button onClick={() => setMessage("Welcome, Player 1. Your mission begins now.")}>
          Mission Briefing
        </button>
        <button onClick={() => setMessage("WARNING: Enemy fleet detected in Sector 7!")}>
          Trigger Alarm
        </button>
      </div>
      
      <p style={{ marginTop: "20px", color: "gray", fontSize: "14px" }}>
        <em>Architect's Note: Click the buttons while the text is typing. Watch how the child component seamlessly handles the changing props without causing memory leaks or overlapping text.</em>
      </p>
    </div>
  );
};


export default App;
