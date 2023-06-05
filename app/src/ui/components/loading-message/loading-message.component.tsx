import "./loading-message.styles.css";
import { ReactNode } from "react";

interface ILoadingMessageProps {
  children: ReactNode
}

export function LoadingMessage({ children }: ILoadingMessageProps): JSX.Element | null {
  return children ? <p className="loadingMessage">{children}</p> : null;
}
