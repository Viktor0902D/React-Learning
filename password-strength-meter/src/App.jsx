import { useState } from "react";

const PasswordChecker = () => {
  const [password, setPassword] = useState("");

  const passwordLength = password.length;
  const strength =
    passwordLength === 0
      ? ""
      : passwordLength < 5
        ? "Weak"
        : passwordLength < 8
          ? "Medium"
          : "Strong";
          
    const textColor = strength==="Weak" ? "red" : strength==="Medium" ? "orange" : strength==="Strong" ? "green" : "black";

  return (
    <div className="password-checker">
      <h1>Password Strength Meter</h1>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
      <br />

      {strength && (
        <span style={{ color: textColor, fontWeight: "bold" }}>Password is {strength}</span>
      )}
    </div>
  );
};

export default PasswordChecker;
