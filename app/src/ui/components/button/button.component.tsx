import "./button.style.css";
import { ReactNode } from "react";

interface IButtonRequest {
  className?: string
  onClick?: () => any
  children: ReactNode
  disabled?: boolean
}

export function Button({ className, onClick, children, disabled }: IButtonRequest) {
  const fullClassName = className ? `button ${className}` : "button";
  return (
    <button disabled={disabled} className={fullClassName} onClick={onClick}>
      {children}
    </button>
  );
}
