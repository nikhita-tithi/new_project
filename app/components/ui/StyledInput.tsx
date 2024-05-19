import React, { FC, ReactNode } from "react";

interface StyledInputProps {
  children: ReactNode;
  type?: string;
  className?: string;
  placeholder: string;
}

export const StyledInput: FC<StyledInputProps> = ({
  children,
  placeholder,
  type,
  className,
}) => {
  return (
    //---A reusable input with button componenet for the prompt section---
    <div className="relative flex w-full">
      <input type={type} className={className} placeholder={placeholder} />
      <button className="pr-2">{children}</button>
    </div>
  );
};
