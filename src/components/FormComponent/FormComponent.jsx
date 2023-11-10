import React, { useState } from "react";
import "./FormComponent.css";

export const FormComponent = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState();
  const [showWarning, setShowWarning] = useState(false);

  const handlePasswordBlur = () => {
    setIsPasswordValid(password.trim().length >= 8);
    if (password.length < 8) {
      alert("The password is too short");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userName.trim().length && password.trim().length && isPasswordValid) {
      alert(`Your Name is: ${userName.trim()},\nYour Password is: ${password.trim()}`);
      setUserName("");
      setPassword("");
      setShowWarning(false);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Name"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={handlePasswordBlur}
            placeholder="Password"
          />
        </label>
        {showWarning && <p className="warning">Please fill in all fields!</p>}
        <button type="submit">Registration</button>
      </form>
    </div>
  );
};
