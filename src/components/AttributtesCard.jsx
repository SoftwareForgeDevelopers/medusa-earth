import { useState } from "react";

const typeStyles = {
  "light-airwave": {
    boxClassName: "bg-white border-var-dark-blue",
    h3ClassName: "text-var-dark-blue",
    pClassName: "text-var-black",
    hoverStyles: "hover:bg-var-dark-blue hover:text-white",
  },
  "light-energy-savings": {
    boxClassName: "bg-white border-var-dark-blue",
    h3ClassName: "text-var-dark-blue",
    pClassName: "text-var-black",
    hoverStyles: "hover:bg-var-dark-blue hover:text-white",
  },
  dark: {
    boxClassName: "bg-var-dark-blue text-white",
    h3ClassName: "hover:text-var-dark-blue",
    pClassName: "hover:text-var-dark-blue",
    hoverStyles: "group-hover:bg-white group-hover:text-white",
  },
};

function AttributtesCard({ type, title, description, icon }) {
  const { boxClassName, h3ClassName, pClassName, hoverStyles } =
    typeStyles[type] || {};

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const iconSource = isHovered
    ? icon.replace("-blue.webp", "-white.webp")
    : icon;

  return (
    <div
      className={`border border-solid flex flex-col items-center gap-[28px] rounded-xl w-[325px] h-[233.33] py-[48px] px-8 transition-colors bg-white border-var-dark-blue text-var-dark-blue hover:bg-var-dark-blue hover:text-white ${boxClassName} ${hoverStyles} tablet:w-[392px] tablet:h-[289.33]`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <figure className="w-[63.33px] h-[63.33px] flex justify-center items-center rounded-[52px] bg-var-grey-blue transition-colors">
        <img
          src={iconSource}
          alt={title}
          className="w-8 rounded-[52px] transition-all"
        />
      </figure>
      <h3
        className={`text-xl font-ant-regular font-w-bold transition-colors ${h3ClassName}`}>
        {title}
      </h3>
      <p
        className={`text-center font-ant-regular transition-colors ${pClassName}`}>
        {description}
      </p>
    </div>
  );
}

export default AttributtesCard;
