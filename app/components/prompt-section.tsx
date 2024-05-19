import React, { FC } from "react";
import { RiChat3Line } from "react-icons/ri";
import { HiMiniChevronUpDown } from "react-icons/hi2";
import { TbSend } from "react-icons/tb";
import { suggestedQuestions } from "./utils/constants";
import { StyledButton } from "./ui/StyledButton";
import { StyledText } from "./ui/StyledText";
import { StyledInput } from "./ui/StyledInput";
import { StyledCard } from "./ui/StyledCard";

interface PromptSectionProps {}

const PromptSection: FC<PromptSectionProps> = ({}) => {
  return (
    <StyledCard className="flex items-start justify-evenly pb-4 flex-col w-full h-[18%]">
      {/* ---All buttons do not have events handlers as the clicks/action functionalities were not required---  */}
      <div className="flex space-x-6 items-center h-14">
        {suggestedQuestions.map((question, index) => (
          <StyledButton
            className="border py-2 px-4 rounded text-sm"
            key={index}
          >
            {question}
          </StyledButton>
        ))}
      </div>
      <div className="flex w-full">
        <div className="flex text-black rounded border w-5/6">
          <div className="flex text-black space-x-4 border-r items-center p-2 ">
            <RiChat3Line />
            <StyledText text="Chat" />
            <HiMiniChevronUpDown color="grey" />
          </div>

          <StyledInput
            type="text"
            placeholder="Start a new chat"
            className="w-full ml-2 pr-4 focus:outline-none"
          >
            <TbSend color="grey" />
          </StyledInput>
        </div>
        <StyledButton className="border w-1/6 px-4 rounded ml-2 text-red-400 border-red-400 text-sm">
          End Chat
        </StyledButton>
      </div>
    </StyledCard>
  );
};

export default PromptSection;
