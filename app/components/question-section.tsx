import React, { FC } from "react";
import { StyledText } from "./ui/StyledText";
import { sampleQuestion } from "./utils/constants";
import { StyledImage } from "./ui/StyleImage";
import { StyledCard } from "./ui/StyledCard";

interface QuestionSectionProps {}

const QuestionSection: FC<QuestionSectionProps> = ({}) => {
  return (
    <StyledCard className="flex space-x-6 items-center w-full h-[17%]">
      <StyledImage src="./Icons/userpic.jpeg" alt=" " />
      <StyledText text={sampleQuestion} />
    </StyledCard>
  );
};

export default QuestionSection;
