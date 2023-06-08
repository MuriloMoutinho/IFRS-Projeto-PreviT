import { ReactNode } from "react";
import { LoadingMessageStyle } from "./loading-message.styles";

interface ILoadingMessageProps {
  children: ReactNode
}

export function LoadingMessage({ children }: ILoadingMessageProps): JSX.Element | null {
  return children ? <LoadingMessageStyle>{children}</LoadingMessageStyle> : null;
}
