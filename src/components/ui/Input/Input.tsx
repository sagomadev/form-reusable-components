import {
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import "./Input.css";
import { useEffect } from "react";

interface InputProps {
  label: string;
  errors?: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
  options?: RegisterOptions;
}

export const Input = (props: InputProps) => {
  useEffect(() => {
    console.log("Input component mounted", props.errors);
  }, [props.errors]);
  return (
    <>
      <label>{props.label}</label>
      <input
        className="input"
        {...props.register(props.label, props.options)}
      />
      {props.errors && props.errors[props.label] && <p>Invalid email</p>}
    </>
  );
};
