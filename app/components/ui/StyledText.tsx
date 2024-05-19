import { FC, ReactNode } from "react";

interface StyledTextProps {
  text: ReactNode;
  className?: string;
}

export const StyledText: FC<StyledTextProps> = ({ text, className }) => {
  //---A reusable text componenet---
  return <div className={`text-sm text-black + ${className}`}>{text}</div>;
};
