import React from "react";
import Button from "./Button";

function BlogCard({ name, date, description, image }) {
  return (
    <div className="w-608 h-552 rounded-30 overflow-hidden bg-white border border-gray-300 shadow">
      <img className="w-full h-1/2 object-cover" src={image} alt={name} />
      <div className="flex flex-col p-7 gap-4">
        <div>
          <h4 className="font-w-bold text-30 text-var-dark-blue">{name}</h4>
          <p className="text-base font-w-bold text-var-dark-blue">{date}</p>
          <p className="text-20">{description}</p>
        </div>
        <Button type="dark-blue" styles="w-36" content="Ver proyecto" />
      </div>
    </div>
  );
}

export default BlogCard;
