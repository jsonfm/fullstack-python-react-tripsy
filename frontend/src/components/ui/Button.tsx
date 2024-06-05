import { ButtonHTMLAttributes, ReactNode } from "react";
import { RefCallBack } from "react-hook-form";
import { Icon } from "@iconify/react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  loading?: boolean;
  ref?: RefCallBack;
  variant?: "primary" | "secondary" | "black" | "white";
  size?: "sm" | "md" | "lg";
  rounded?: "none" | "md" | "lg" | "full";
  outlined?: boolean;
}

export const Button = ({
  children,
  ref,
  className,
  variant = "primary",
  rounded = "md",
  size = "md",
  loading = false,
  outlined = false,
  disabled,
  ...props
}: Props) => {
  let roundedClassName = `rounded-md`;
  if (rounded == "none") {
    roundedClassName = `rounded-none`;
  }
  if (rounded == "lg") {
    roundedClassName = `rounded-lg`;
  }
  if (rounded == "full") {
    roundedClassName = `rounded-full`;
  }

  let variantClassName = `bg-primary text-white`;
  if (variant == "secondary") {
    variantClassName = `bg-secondary text-white`;
  }
  if (variant == "white") {
    variantClassName = `${
      outlined
        ? "text-white border-2 border-white hover:bg-white hover:text-black"
        : "bg-white text-black"
    } `;
  }
  let sizeClassName = `px-4 py-2`; //md

  if (size == "sm") {
    sizeClassName = `px-2 py-1`;
  }

  if (size == "lg") {
    sizeClassName = `px-4 py-3`;
  }

  const baseClassName = `min-w-28  flex items-center justify-center gap-2 duration-200 active:opacity-80 disabled:opacity-90 disabled:select-none ${variantClassName} ${roundedClassName}`;
  const buttonClassName = ` ${sizeClassName} ${baseClassName} ${className}`;
  return (
    <button
      disabled={loading || disabled}
      className={buttonClassName}
      ref={ref}
      {...props}
    >
      {!!loading && <Icon icon="eos-icons:loading" fontSize={25} />}
      {children}
    </button>
  );
};
