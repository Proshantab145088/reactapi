import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Flex from "./Flex";
import { userContext } from "./Context";
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { IoMdStarOutline } from "react-icons/io";

const List = () => {
  const data = useContext(userContext);

  return (
    <div>
      <Flex className={`list-none gap-6 flex-wrap justify-center `}>
        {data.map((item) => (
          <div className="w-[400px] h-[400px] bg-amber-200 p-4 rounded-lg hover:drop-shadow-[5px_10px_5px_rgba(52,152,219,0.5)] duration-300 ease-in">
            <h2>{item.id}</h2>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <p>{item.stock}</p>
            <p>{item.rating}</p>
            <Flex>
              {Array.from({ length: 5 }, (value, key) => {
                return (
                  <div>
                    {item.rating > key + 1 ? (
                      <IoStar />
                    ) : item.rating > key + 0.5 ? (
                      <IoStarHalf />
                    ) : (
                      <IoMdStarOutline />
                    )}
                  </div>
                );
              })}
            </Flex>
          </div>
        ))}
      </Flex>
    </div>
  );
};

export default List;
