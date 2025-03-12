import type { DividerSection } from "../../interfaces/shared.interface";

const DividerSection: React.FC<DividerSection> = ({ title }) => {
  return (
    <div className="flex items-center">
      <div className="w-1/2 h-0.5 bg-secondary"></div>
      <h1 className="text-2xl">
        <span className="bg-secondary rounded-md px-8">{title}</span>
      </h1>
      <div className="w-1/2 h-0.5 bg-secondary"></div>
    </div>
  );
};

export default DividerSection;
