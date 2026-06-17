import { useState, useEffect, useRef } from "react";

const HoldToConfirmButton = () => {
  const [isHolding, setIsHolding] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const holdTimeoutRef = useRef(null);

  const handleMouseDown = () => {
    if (isConfirmed) return;
    setIsHolding(true);

    clearInterval(holdTimeoutRef.current);

    holdTimeoutRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100;
        }
        return prev + 5; // Increase progress by 5% every 100ms
      });
    }, 100);
  };

  useEffect(() => {
    if (progress >= 100) {
      clearInterval(holdTimeoutRef.current);
      setIsConfirmed(true);
      setIsHolding(false);
    }
  }, [progress]);

  const handleMouseUp = () => {
    setIsHolding(false);
    clearInterval(holdTimeoutRef.current);
    if (progress >= 100) {
      setIsConfirmed(true);
    } else {
      setProgress(0);
    }
  };

  useEffect(() => {
    return () => {
      clearInterval(holdTimeoutRef.current);
    };
  }, []);

    if (isConfirmed) {
      return (
        <div>
          <h1>Hold to Confirm Button</h1>
          <p>Action Confirmed!</p>
        </div>
      );
    }

  return (
    <div>
      <h1>Hold to Confirm Button</h1>
      <button
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        disabled={isConfirmed}
        style={{position:'relative',padding:'10px 20px'}}
      >
        {isConfirmed ? "Confirmed!" : "Hold to Confirm"}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: "5%",
            width: `${progress}%`,
            backgroundColor: "green",
            transition: isHolding ? "none" : "width 0.1s",
          }}
        />
      </button>
      <h3>Progress: {progress}%</h3>
    </div>
  );
};

export default HoldToConfirmButton;
