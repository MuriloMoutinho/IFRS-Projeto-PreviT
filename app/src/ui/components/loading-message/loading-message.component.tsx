import { LoadingImageStyle } from "./loading-message.styles";
import { LoadingIcon } from "../../../assets";

export function LoadingMessage(): JSX.Element {
  return <LoadingImageStyle src={LoadingIcon} alt="Simbolo carregamento" />;
}
