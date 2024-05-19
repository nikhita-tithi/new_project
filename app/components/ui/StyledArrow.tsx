import { FC, ReactNode } from "react";
import { RxCaretSort } from "react-icons/rx";

interface StyledArrowProps {}

export const StyledArrow: FC<StyledArrowProps> = ({}) => {
  return (
    //---The sort icon in the columns of the table header---
    <a href="#">
      <RxCaretSort color="grey" className="w-4 h-4 ms-1.5" size="sm" />
    </a>
  );
};
