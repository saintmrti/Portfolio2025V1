import React from "react";

interface AchievementProps {
  title: string;
  description: string;
  quantity: number;
}

const AchievementCard: React.FC<AchievementProps> = ({
  title,
  description,
  quantity,
}) => {
  return (
    <div className="bg-gradient-to-br from-primary to-secondary rounded-lg text-center w-28 h-28 flex flex-col justify-evenly items-center">
      <h3 className="text-xl">
        <span className="text-5xl font-bold">{quantity}</span> {title}
      </h3>
      <p>{description}</p>
    </div>
  );
};

export default AchievementCard;
