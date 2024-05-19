import React, { FC } from "react";
import { RiChat3Line } from "react-icons/ri";
import { MdOutlineErrorOutline } from "react-icons/md";
import { HiMiniChevronUpDown } from "react-icons/hi2";
import { TbSend } from "react-icons/tb";
import { IoMdArrowForward } from "react-icons/io";
import { StyledImage } from "./ui/StyleImage";
import { sampleResponse } from "./utils/constants";
import { StyledText } from "./ui/StyledText";
import { StyledButton } from "./ui/StyledButton";
import { StyledCard } from "./ui/StyledCard";
import { StyledTable } from "./ui/StyledTable";

interface ResponseSectionProps {}

const ResponseSection: FC<ResponseSectionProps> = ({}) => {
  return (
    <StyledCard className="flex items-start justify-start pb-4 flex-col w-full bg-gray-100 shadow-md h-[65%]">
      <div className="flex items-center h-14 mt-6 text-sm">
        <StyledButton className="flex items-center justify-between border py-2 px-3 rounded-l-md w-40 font-semibold bg-white text-orange-600">
          <MdOutlineErrorOutline className="w-4 h-4 ms-1.5" />
          <StyledText className="text-orange-600 mr-1" text="Not Confident" />
        </StyledButton>
        <StyledButton className="flex items-center justify-between border py-2 px-3 rounded-r-md w-36 font-semibold bg-white text-orange-600">
          <StyledText
            className="text-orange-600 ml-1 text-right"
            text="Human Help"
          />
          <IoMdArrowForward className="w-4 h-4 ms-1.5" />
        </StyledButton>
      </div>
      <div className="flex space-x-6 items-center h-16 w-full">
        <StyledImage src="./Icons/owl.png" alt="owl" />
        <StyledText text={sampleResponse} />
      </div>
      <div className="flex space-x-6 items-center h-auto w-full">
        <div className="w-10" />
        <StyledTable />
      </div>
    </StyledCard>
  );
};

export default ResponseSection;
