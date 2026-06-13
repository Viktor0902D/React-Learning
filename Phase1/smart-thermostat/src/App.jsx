import {useState} from "react";

const Thermostat=()=>{
  const [temperature, setTemperature] = useState(72);

  const increaseTemp = () => setTemperature((prev) => Math.min(prev + 1, 85));
  const decreaseTemp = () => setTemperature((prev) => Math.max(prev - 1, 60));

  return (
    <div className="thermostat">
      <h1>Smart Thermostat</h1>
      <div className="display">{temperature}°F</div>
      <button onClick={decreaseTemp}>-</button>
      <button onClick={increaseTemp}>+</button>

      <StatusMessage temperature={temperature} />
    </div>
  );
}

const StatusMessage=({temperature})=>{
  return (
    <div className="status-message">
      {temperature > 80 && <span>🔥 It's getting hot in here!</span>}
      {temperature < 65 && <span>❄️ Grab a sweater!</span>}
      {temperature >= 65 && temperature <= 80 && <span>✅ Perfect temperature.</span>}
    </div>
  );
};

export default Thermostat;