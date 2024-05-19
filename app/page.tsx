"use client";
import QuestionSection from "./components/question-section";
import PromptSection from "./components/prompt-section";
import ResponseSection from "./components/response-section";

export default function Home() {
  return (
    //---The main page of the application---
    <div className="flex size-full flex-col items-center justify-between">
      {/* ---Question section is the top part of the page where the user's question is visible--- */}
      <QuestionSection />
      {/* ---Response section is the middle part of the page where the user's question is answered--- */}
      <ResponseSection />
      {/* ---Prompt section is the bottom part of the page where the user can select from the suggested questions or start / end a chat--- */}
      <PromptSection />
    </div>
  );
}
