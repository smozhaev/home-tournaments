import React from "react";
import { AuthButtonProps } from "./types";
import "./index.scss";
import { Link } from "react-router-dom";

const AuthButton: React.FC<AuthButtonProps> = ({ onClick, label, disabled = false }) => {
  return (
    <button className="auth-button" onClick={onClick} disabled={disabled}>
      <Link to={"/auth"}>{label}</Link>
    </button>
  );
};

export default AuthButton;
