import { FC, ReactNode } from "react";

interface StyledButtonProps {
  children: ReactNode;
  className: string;
}

export const StyledButton: FC<StyledButtonProps> = ({
  children,
  className,
}) => {
  //---A reusable button componenet---
  return <button className={className}>{children}</button>;
};
