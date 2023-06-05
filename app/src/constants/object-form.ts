const MESSAGE_ERROR_EMPTY = "Preencha este campo";

function validateDataEmpty(value: string | number): string | false  {
  return value === "" && MESSAGE_ERROR_EMPTY;
}

export const OBJECT_NOT_EMPTY_FORM = {
  value: "",
  error: "",
  validate: validateDataEmpty
};

