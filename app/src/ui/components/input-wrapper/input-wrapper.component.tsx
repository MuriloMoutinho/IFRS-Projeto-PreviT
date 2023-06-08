import { ErrorMessage } from "../index";
import { InputWrapperStyle } from "./input-wrapper.styles";
import { ReactNode } from "react";

interface IInputWrapperProps {
  textLabel: string;
  error?: string;
  children: ReactNode;
}

export function InputWrapper({
  children,
  textLabel,
  error,
}: IInputWrapperProps): JSX.Element {

  return (
    <InputWrapperStyle>
      {textLabel}
      {children}
      <ErrorMessage>{error}</ErrorMessage>
    </InputWrapperStyle>
  );
}
