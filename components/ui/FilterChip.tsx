import React from 'react';

interface FilterChipProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const FilterChip: React.FC<FilterChipProps> = ({ label, isActive, onClick }) => {
  const baseClasses = "text-sm font-medium px-4 py-1.5 border rounded-full cursor-pointer transition-all duration-200";
  const activeClasses = "bg-navy text-white border-navy";
  const inactiveClasses = "bg-white text-gray-600 border-gray-300 hover:bg-gray-100 hover:border-gray-400";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      {label}
    </button>
  );
};

export default FilterChip;
