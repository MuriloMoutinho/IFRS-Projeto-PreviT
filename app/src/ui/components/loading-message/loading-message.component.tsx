import "./loading-message.styles.css";
import { ReactNode } from "react";

interface ILoadingMessageRequest {
  children: ReactNode
}

export function LoadingMessage({ children }: ILoadingMessageRequest) {
  return children && <p className="loadingMessage">{children}</p>;
}
