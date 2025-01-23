import React from "react";
function Card({ key, name, image, alt_name }) {
  return (
    <div className="mx-8 my-4 flex flex-col items-center justify-center bg-[#EEEEEE] rounded-xl px-5 py-4  hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#EEEDEB] hover:shadow-lg ">
      <img
        src={image}
        alt={alt_name}
        className="w-[10rem] h-[10rem] bg-white rounded-xl hover:shadow-md transition-all duration-300 ease-in-out"
      />
      <p className="font-bold text-lg my-4 patua-one-regular uppercase text-red-500">{name}</p>
    </div>
  );
}

export default Card;
