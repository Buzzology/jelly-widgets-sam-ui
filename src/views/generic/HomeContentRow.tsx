import React from "react";
import { Link } from "react-router-dom";

interface IHomeContentRowProps {
    title: string;
    text: string;
    link: string;
    buttonText: string;
    imagePath: string;
    reverseImageOrder?: boolean;
}

export default function HomeContentRow({
    title,
    text,
    link,
    buttonText,
    imagePath,
    reverseImageOrder,
}: IHomeContentRowProps) {
    return (
        <div className="flex justify-center p-4 pb-10 mb-10">
        <div className="grid grid-cols-12 gap-5">
          <div
            className="col-span-12 md:col-span-7 lg:col-span-5 flex items-center p-4"
        >
            <div>
              <h2 className="text-bold text-2xl mb-3">{title}</h2>
              <p className="font-light text-gray-700 leading-relaxed">
                {text}
              </p>
              <p className="text-right pb-4">
                <Link to={link}>
                  <button
                    className="
                      mt-6
                      text-white
                      font-bold
                      py-2
                      px-4
                      rounded-full
                      border-white border
                      bg-sky-600
                      w-full
                      md:w-auto
                    "
                  >
                    {buttonText}
                  </button>
                </Link>
              </p>
            </div>
          </div>
          <div
            className={`col-span-12 md:col-span-5 lg:col-span-7 p-4 ${reverseImageOrder ? 'order-last md:order-first' : ''}`}
          >
            <img
              src={imagePath}
              alt="Discounts image"
              className="rounded-lg shadow-lg mh-3"
            />
          </div>
        </div>
      </div>
    )
}