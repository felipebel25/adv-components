import { ComponentProps } from "react";

type AnchorProps = { el: "anchor" } & ComponentProps<"a">;
type ButtonProps = { el: "button" } & ComponentProps<"button">;

const Button = (props: AnchorProps | ButtonProps) => {
  if (props.el === "anchor") {
    return <a className="button" {...props}></a>;
  }
  return <button className="button" {...props}></button>;
};

export default Button;
