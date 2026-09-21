import React, { JSX } from "react";
import clsx from "clsx";

interface WrapperProps {
  className?: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  id?: string;
}

const Wrapper = ({
  className,
  children,
  as: Component = "div",
  id,
}: WrapperProps) => {
  return (
    <Component
      id={id}
      className={clsx("max-w-5xl mx-auto px-2 xs:px-3 sm:px-4 md:px-6 w-full", className)}
    >
      {children}
    </Component>
  );
};

export default Wrapper;
