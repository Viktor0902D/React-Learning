import { useState, useEffect, useRef } from "react";

const SecureDashboard = () => {
  const [isIdle, setIsIdle] = useState(false);
  const idleTimeoutRef = useRef(null);

  const refreshIdleTimer = () => {
    clearTimeout(idleTimeoutRef.current);
    idleTimeoutRef.current = setTimeout(() => {
      setIsIdle(true);
    }, 5000); // 5 seconds of inactivity
  };

  useEffect(() => {
    const handleActivity = () => {
      refreshIdleTimer();
      if (isIdle === true) return;
    };
    window.addEventListener("mousemove", handleActivity);
      window.addEventListener("keydown", handleActivity);
      refreshIdleTimer();

      return () => {
        window.removeEventListener("mousemove", handleActivity);
        window.removeEventListener("keydown", handleActivity);
        clearTimeout(idleTimeoutRef.current);
      };
  }, [isIdle]);

  return (
    <div>
      <h1>Secure Dashboard</h1>
      {isIdle ? (
        <p>
          You have been idle for too long. Please move your mouse or press a key to continue.
        </p>
      ) : (
        <p>
          Welcome to the secure dashboard. You are being monitored for inactivity.
        </p>
      )}
    </div>
  );
};
export default SecureDashboard;
