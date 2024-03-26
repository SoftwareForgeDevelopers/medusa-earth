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
  intro,
}) {
  return (
    <div
      className={`flex flex-col w-full items-center ${intro ? "tablet:py-[90px]" : "px-[18px] pt-[90px] pb-[66px]"} tablet:px-[65px]`}>
      <div
        className={`relative flex flex-col ${intro ? "h-[calc(100vh-64px)] tablet:rounded-[38px]" : "h-[537px rounded-[38px]"} w-full pt-[75px] pb-[45px] px-16 bg-cover bg-[0%_75%] tablet:h-[537px]`}
        style={{ backgroundImage: `url('${image}')` }}>
        <div
          className={`absolute inset-0 ${bgGradientClass} ${intro ? "tablet:rounded-[38px]" : "rounded-[38px]"}`}></div>

        <div
          className={`flex flex-col gap-[19px] z-10 ${intro ? "h-full items-center text-center relative tablet:items-start tablet:text-left" : ""}`}>
          {label && <Label text={label.text} white={label?.white || null} />}

          <div className="flex flex-col gap-[19px] max-w-[480px]">
            <h2 className="text-[40px] font-w-bold text-white tablet:text-6xl">
              {title}
            </h2>

            <p className="text-xl text-white tablet:text-[22px]">
              {description}
            </p>
          </div>

          <div
            className={`mt-4 ${intro ? "w-full absolute bottom-0 tablet:relative" : ""}`}>
            {button && (
              <Button
                type="white-without-border"
                content={button.content}
                styles={button.styles + intro ? "w-full tablet:w-auto" : ""}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoBanner;
