import "./button.style.css";
import { ReactNode } from "react";

interface IButtonProps {
  className?: string
  onClick?: () => any
  children: ReactNode
  disabled?: boolean
}

export function Button({ className, onClick, children, disabled }: IButtonProps): JSX.Element {
  const fullClassName = className ? `button ${className}` : "button";
  return (
    <button disabled={disabled} className={fullClassName} onClick={onClick}>
      {children}
    </button>
  );
}
