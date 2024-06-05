import { InputHTMLAttributes, useState } from "react";
import { RefCallBack } from "react-hook-form";
import { Icon } from "@iconify/react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClassName?: string;
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  ref?: RefCallBack;
  error?: string;
}

export const Input = ({
  label,
  labelClassName,
  ref,
  rounded = "md",
  className,
  error,
  type = "text",
  ...props
}: Props) => {
  let roundedClassName = "rounded-md";
  if (rounded == "none") {
    roundedClassName = `rounded-none`;
  }
  if (rounded == "sm") {
    roundedClassName = `rounded-sm`;
  }
  if (rounded == "lg") {
    roundedClassName = `rounded-lg`;
  }
  if (rounded == "full") {
    roundedClassName = `rounded-full`;
  }

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  const labelFullClassName = `mb-2 ${labelClassName}`;
  const baseClassName = `border text-gray-500 flex w-full px-4 py-2  ${roundedClassName}`;
  const inputClassName = `${baseClassName} ${className}`;
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;
  return (
    <div>
      {!!label && <label className={labelFullClassName}>{label}</label>}
      <div className={inputClassName}>
        <input
          type={inputType}
          className={"outline-none border-none w-full bg-transparent"}
          ref={ref}
          {...props}
        />
        {isPassword && (
          <div onClick={toggleShowPassword}>
            <Icon
              className="cursor-pointer active:scale-105 duration-200"
              fontSize={22}
              icon={!showPassword ? "mdi:eye" : "mdi:hide"}
            />
          </div>
        )}
      </div>
      {!!error && <p className="text-accent text-sm mt-1">{error}</p>}
    </div>
  );
};
