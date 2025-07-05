import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from "react";

// interface InputProps extends ComponentPropsWithoutRef<"input"> {
//   id: string;
//   label: string;
// }
type InputProps = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef(
  (
    { id, label, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <p>
        <label htmlFor={id}>{label}</label>
        <input id={id} name={id} type="text" ref={ref} {...props} />
      </p>
    );
  }
);
export default Input;
