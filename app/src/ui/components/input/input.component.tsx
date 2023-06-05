import { eventFunction } from "../../../ts/types";

interface IinputProps {
  type: string;
  name: string;
  onChange: (event: eventFunction) => void ;
  placeholder?: string;
  value: string;
  className?: string;
}

export function Input({ type, name, onChange, placeholder, value, className }: IinputProps): JSX.Element {
  return (
    <input
      className={className}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}
