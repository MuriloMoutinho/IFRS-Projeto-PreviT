import { eventFunction } from "../../../ts/types";

interface IinputRequest {
  type: string;
  name: string;
  onChange: (event: eventFunction) => void ;
  placeholder?: string;
  value: string;
  className?: string;
}

export function Input({ type, name, onChange, placeholder, value, className }: IinputRequest) {
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
