import { ReactNode } from "react";
import { ErrorMessageStyle } from "./error-message.styles";

interface IErrorMessageProps {
  children: ReactNode;
}

export function ErrorMessage({ children }: IErrorMessageProps): JSX.Element {
  return <ErrorMessageStyle>{children}</ErrorMessageStyle>;
}
