import {
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormClearErrors,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import "./Input.css";

interface InputProps {
  clearErrors?: UseFormClearErrors<FieldValues>;
  label: string;
  errors?: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
  options?: RegisterOptions;
  watch: UseFormWatch<FieldValues>;
}

export const Input = (props: InputProps) => {
  const hasError = () => props.errors![props.label];
  const isFilled = props.watch(props.label);
  return (
    <>
      <label>{props.label}</label>
      <input
        onFocus={() => props.clearErrors && props.clearErrors(props.label)}
        className={`input ${isFilled ? "input--filled" : ""} ${
          hasError() ? "input--error" : ""
        }`}
        {...props.register(props.label, props.options)}
      />
      {hasError() && <p>Invalid email</p>}
    </>
  );
};
