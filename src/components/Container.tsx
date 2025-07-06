// Polymorphic Components
import {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  type ElementType,
} from "react";

type ContainerProps<T extends ElementType> = PropsWithChildren<{
  as: ElementType;
}> &
  ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  const Component = as;
  return <Component {...props}>{children}</Component>;
}
