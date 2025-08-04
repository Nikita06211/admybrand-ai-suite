import React from "react";

interface ButtonTagProps {
  content: string;
  logo?: React.ReactNode; 
  bgColor?: string;       
  textColor?: string;     
  borderColor?: string;   
  className?: string;
}

const ButtonTag: React.FC<ButtonTagProps> = ({
  content,
  logo,
  bgColor = "bg-purple-800/30",
  textColor = "text-purple-200",
  borderColor,
  className = "",
}) => (
  <span
    className={`inline-flex mb-4 backdrop-blur-2xl backdrop-opacity-10 text-sm font-light items-center px-2 py-2 rounded-full border ${bgColor} ${textColor} ${borderColor} ${className}`}
  >
    {logo && <span className="w-5 h-5 flex items-center">{logo}</span>}
    {content && <span className="mx-2">{content}</span>}
  </span>
);

export default ButtonTag;
