import React from "react";
import Label from "./Label";
import Button from "./Button";

function InfoBanner({
  label,
  title,
  description,
  image,
  button,
  bgGradientClass,
}) {
  return (
    <div className="flex flex-col w-full items-center py-[90px] px-[65px]">
      <div
        className={`relative flex flex-col h-[537px] w-full pt-[75px] pb-[45px] px-16 rounded-[38px] bg-cover bg-[0%_75%]`}
        style={{ backgroundImage: `url('${image}')` }}>
        <div className={`absolute inset-0 ${bgGradientClass} rounded-[38px]`}></div>

        <div className="flex flex-col gap-[19px] z-10">
          {label && <Label text={label.text} white={label?.white || null} />}

          <div className="flex flex-col gap-[19px] max-w-[480px]">
            <h2 className="text-6xl font-w-bold text-white">{title}</h2>

            <p className="text-[22px] text-white">{description}</p>
          </div>

          <div className="mt-4">
            {button && (
              <Button
                type="white-without-border"
                content={button.content}
                styles={button.styles}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoBanner;
