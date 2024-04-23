import { FC, useState } from "react";
import "./index.scss";
import "./types";


interface ToggleButtonProps {
  changeExternalState: () => void,
  externalState: boolean
}

const ToggleButton: FC<ToggleButtonProps> = ({ changeExternalState, externalState }: ToggleButtonProps) => {
  const [isActive, setIsActive] = useState(externalState);
  const toggleButton = () => {
    setIsActive(!isActive);
    changeExternalState();
  };

  return (
    <button className={`toggle-button ${isActive ? "" : "active"}`} onClick={toggleButton}>
      <span className="toggle-thumb"></span>
    </button>
  );
};

export default ToggleButton;
