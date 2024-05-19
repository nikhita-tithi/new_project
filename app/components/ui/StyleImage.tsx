import { FC, ReactNode } from "react";

interface StyledImageProps {
  src: string;
  alt: string;
}

export const StyledImage: FC<StyledImageProps> = ({ src, alt }) => {
  return (
    //---A reusable image componenet---
    <div>
      <img className="h-10 w-10 rounded-full" src={src} alt={alt} />
    </div>
  );
};
