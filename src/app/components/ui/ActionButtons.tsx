import React from "react";

interface ActionButtonsProps {
  mainLabel: string;
  secondaryLabel?: string;
  showArrow?: boolean;
  disabled?:boolean;
  widhth?:string;
  onMainClick?: () => void;
  onSecondaryClick?: () => void;
  className?: string;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  mainLabel,
  secondaryLabel,
  showArrow = false,
  disabled=false,
  onMainClick,
  onSecondaryClick,
  className = "",
}) => (
  <div className={`flex gap-4 ${className}`}>
    <button
      disabled= {disabled}
      onClick={onMainClick}
      className="rounded-lg px-8 py-3 font-bold text-lg bg-gradient-to-r from-[#a77fff] to-[#38b6ff] text-white hover:from-[#9ac6ff] hover:to-[#4d8dfe] transition-shadow shadow-lg focus:outline-none"
    >
      {mainLabel}
      {showArrow && <span className="ml-2">{String.fromCharCode(8594)}</span>}
    </button>
    {secondaryLabel && (
      <button
        onClick={onSecondaryClick}
        className="rounded-lg px-8 py-3 font-bold text-lg bg-transparent border border-[#7cb5ff] text-[#7cb5ff] hover:bg-[#172133] transition-shadow focus:outline-none"
      >
        {secondaryLabel}
      </button>
    )}
  </div>
);

export default ActionButtons;
