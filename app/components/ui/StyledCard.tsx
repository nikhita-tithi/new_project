import { FC, ReactNode } from "react";

interface StyledCardProps {
  children: ReactNode;
  className?: string;
}

export const StyledCard: FC<StyledCardProps> = ({ className, children }) => {
  //---A reusable div componenet for different sections of the page---
  return <div className={` px-[16%] + ${className}`}>{children}</div>;
};
