"use client";

import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const StarsRating = ({ item }: any) => {
  if (item.review === "1")
    return (
      <div className="flex gap-2 p-4 pt-2">
        <FaStar size={25} />
        <FaRegStar size={25} />
        <FaRegStar size={25} />
        <FaRegStar size={25} />
        <FaRegStar size={25} />
      </div>
    );
  if (item.review === "2")
    return (
      <div className="flex gap-2 p-4 pt-2">
        <FaStar size={25} />
        <FaStar size={25} />
        <FaRegStar size={25} />
        <FaRegStar size={25} />
        <FaRegStar size={25} />
      </div>
    );
  if (item.review === "3")
    return (
      <div className="flex gap-2 p-4 pt-2">
        <FaStar size={25} />
        <FaStar size={25} />
        <FaStar size={25} />
        <FaRegStar size={25} />
        <FaRegStar size={25} />
      </div>
    );
  if (item.review === "4")
    return (
      <div className="flex gap-2 p-4 pt-2">
        <FaStar size={25} />
        <FaStar size={25} />
        <FaStar size={25} />
        <FaStar size={25} />
        <FaRegStar size={25} />
      </div>
    );
  if (item.review === "5")
    return (
      <div className="flex gap-2 p-4 pt-2">
        <FaStar size={25} />
        <FaStar size={25} />
        <FaStar size={25} />
        <FaStar size={25} />
        <FaStar size={25} />
      </div>
    );
};

export default StarsRating;


  {/* {item.review === "1" &&
         (
          <div className="flex gap-2 p-4 pt-2">
            <FaStar size={25} />
            <FaRegStar size={25} />
            <FaRegStar size={25} />
            <FaRegStar size={25} />
            <FaRegStar size={25} />
          </div>
        )}
      {item.review === "2" &&
         (
          <div className="flex gap-2 p-4 pt-2">
            <FaStar size={25} />
            <FaStar size={25} />
            <FaRegStar size={25} />
            <FaRegStar size={25} />
            <FaRegStar size={25} />
          </div>
        )}
      {item.review === "3" &&
         (
          <div className="flex gap-2 p-4 pt-2">
            <FaStar size={25} />
            <FaStar size={25} />
            <FaStar size={25} />
            <FaRegStar size={25} />
            <FaRegStar size={25} />
          </div>
        )}
      {item.review === "4" &&
         (
          <div className="flex gap-2 p-4 pt-2">
            <FaStar size={25} />
            <FaStar size={25} />
            <FaStar size={25} />
            <FaStar size={25} />
            <FaRegStar size={25} />
          </div>
        )}
      {item.review === "5" &&
         (
          <div className="flex gap-2 p-4 pt-2">
            <FaStar size={25} />
            <FaStar size={25} />
            <FaStar size={25} />
            <FaStar size={25} />
            <FaStar size={25} />
          </div>
        )}
       */}