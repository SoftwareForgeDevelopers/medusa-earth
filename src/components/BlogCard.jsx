import React from "react";
import Button from "./Button";

function BlogCard({ name, date, description, image }) {
  return (
    <div className="max-w-[608px] h-[552px] rounded-[30px] overflow-hidden bg-white border border-gray-300 shadow">
      <img className="w-full h-1/2 object-cover" src={image} alt={name} />
      <div className="flex flex-col p-7 gap-4">
        <div>
          <h4 className="font-w-bold text-[25px] text-var-dark-blue tablet:text-[30px]">
            {name}
          </h4>
          <p className="text-[14px] font-w-bold text-var-dark-blue tablet:text-base">
            {date}
          </p>
          <p className="text-[18px] tablet:text-[20px]">{description}</p>
        </div>
        <Button type="dark-blue" styles="w-36" content="Ver proyecto" />
      </div>
    </div>
  );
}

export default BlogCard;
