import { ComponentProps } from "react";

type AnchorProps = ComponentProps<"a"> & {
  href?: string;
};
type ButtonProps = ComponentProps<"button"> & {
  href?: never;
};

const isAnchorProps = (
  props: ButtonProps | AnchorProps
): props is AnchorProps => {
  return "href" in props;
};

const Button = (props: AnchorProps | ButtonProps) => {
  if (isAnchorProps(props)) {
    return <a className="button" {...props}></a>;
  }
  return <button className="button" {...props}></button>;
};

export default Button;
