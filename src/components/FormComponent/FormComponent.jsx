import React, { useState } from "react";
import "./FormComponent.css";

export const FormComponent = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState();
  const [showWarning, setShowWarning] = useState(false);

  const handlePasswordBlur = () => {
    setIsPasswordValid(password.length >= 8);
    if (password.length < 8) {
      alert("The password is too short");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userName !== "" && password !== "" && isPasswordValid) {
      alert(`Your Name is: ${userName},\nYour Password is: ${password}`);
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
