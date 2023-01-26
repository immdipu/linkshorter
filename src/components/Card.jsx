import React from "react";

const Card = ({ image, text, title, className = null }) => {
  return (
    <div
      className={
        "bg-white max-w-xs rounded-md px-6 py-7 relative flex flex-col gap-3 " +
        `${className}`
      }
    >
      <div className="bg-slate-800 px-5 w-fit py-5 rounded-full absolute -top-8">
        <img src={image} alt="Brand Recognition" className=" w-8" />
      </div>

      <h4 className="font-extrabold text-slate-800 text-xl mt-8">{title}</h4>
      <p className="text-sm text-gray-500 font-medium leading-6 opacity-70">
        {text}
      </p>
    </div>
  );
};

export default Card;
