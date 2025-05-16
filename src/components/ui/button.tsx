// components/ui/button.tsx
import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "destructive";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  className,
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
    destructive: "bg-gray-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    />
  );
};
