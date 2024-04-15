import { useState } from "react";
import "./index.scss";
import "./types";

const ToggleButton = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = () => {
    setIsActive(!isActive);
  };

  return (
    <button className={`toggle-button ${isActive ? "active" : ""}`} onClick={toggleButton}>
      <span className="toggle-thumb"></span>
    </button>
  );
};

export default ToggleButton;
