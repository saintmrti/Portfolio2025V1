import React from "react";
import type { AchievementCard } from "../../interfaces/about.interface";

const AchievementCard: React.FC<AchievementCard> = ({
  title,
  description,
  quantity,
}) => {
  return (
    <div className="bg-gradient-to-br from-primary to-secondary rounded-lg text-center w-20 lg:w-28 h-20 lg:h-28 flex flex-col justify-evenly items-center">
      <h3 className="text-sm lg:text-xl">
        <span className="text-3xl lg:text-5xl font-bold">{quantity}</span>{" "}
        {title}
      </h3>
      <p className="text-xs lg:text-base">{description}</p>
    </div>
  );
};

export default AchievementCard;
