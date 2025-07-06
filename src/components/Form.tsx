import {
  ComponentProps,
  createRef,
  FormEvent,
  ForwardedRef,
  forwardRef,
  useImperativeHandle,
} from "react";

export type FormMethods = {
  clean: () => void;
};

type FormProps = ComponentProps<"form"> & {
  onSave: (value: unknown) => void;
};
export const Form = forwardRef(
  (
    { onSave, children, ...otherProps }: FormProps,
    ref: ForwardedRef<FormMethods>
  ) => {
    const formRef = createRef<HTMLFormElement>();

    useImperativeHandle(
      ref,
      () => {
        return {
          clean() {
            formRef.current?.reset();
          },
        };
      },
      []
    );

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const data = Object.fromEntries(formData);
      onSave(data);
    };
    return (
      <form onSubmit={handleSubmit} {...otherProps} ref={formRef}>
        {children}
      </form>
    );
  }
);
