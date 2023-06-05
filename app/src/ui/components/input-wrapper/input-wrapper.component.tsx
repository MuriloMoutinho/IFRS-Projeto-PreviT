import "./input-wrapper.styles.css";
import { ErrorMessage } from "../index";
import { ReactNode } from "react";

interface IInputWrapperRequest {
  className?: string
  textLabel: string
  error?: string
  children: ReactNode
}

export function InputWrapper({
  children,
  className,
  textLabel,
  error,
}: IInputWrapperRequest) {
  const fullClassName = className ? `label ${className}` : "label";

  return (
    <label className={fullClassName}>
      {textLabel}
      {children}
      <ErrorMessage>{error}</ErrorMessage>
    </label>
  );
}
