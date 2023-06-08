import { ReactNode } from "react";
import { ButtonStyle } from "./button.styles";

interface IButtonProps {
  onClick?: () => any
  children: ReactNode
  disabled?: boolean
}

export function Button({ onClick, children, disabled }: IButtonProps): JSX.Element {
  return (
    <ButtonStyle disabled={disabled} onClick={onClick}>
      {children}
    </ButtonStyle>
  );
}
