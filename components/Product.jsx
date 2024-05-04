"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";

const Product = () => {
  const COUNTDOWN_TARGET = new Date("2024-05-09T00:00:00").getTime(); // Replace with your target date

  const getTimeLeft = () => {
    const totalTimeLeft = COUNTDOWN_TARGET - new Date();
    const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((totalTimeLeft / 1000) % 60);
    return { days, hours, minutes, seconds };
  };
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  const data = [
    {
      img: "/1.jpeg",
    },
    {
      img: "/2.jpeg",
    },
    {
      img: "/3.jpeg",
    },
    {
      img: "/4.jpeg",
    },
    {
      img: "/5.jpeg",
    },
    {
      img: "/6.jpeg",
    },
    {
      img: "/7.jpeg",
    },
  ];

  return (
    <section className="w-full mt-10">
      <div className="max-w-[90%] mx-auto grid gap-8 grid-cols-2 justify-center items-start">
        <div className="max-w-[600px] mx-auto grid gap-8 justify-center items-center">
          <div className="  ">
            <Image
              src="/1.jpeg"
              alt=""
              className="w-[800px] rounded-xl"
              width={800}
              height={500}
            />
          </div>
          <div className="grid w-full grid-cols-2 gap-5 overflow-hidden">
            {data.map((item, id) => (
              <Image
                alt=""
                src={item.img}
                className="w-full rounded-xl"
                width={500}
                height={500}
                key={id}
              />
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center items-start">
          <div className="grid gap-3 w-full">
            <div className="flex justify-between">
              <h2 className="font-bold text-3xl">The Ultimate bag (gray)</h2>
              {/* The Heart Icon */}
            </div>
            <p>No Reviews Yet </p>
            <p className="font-bold text-xl">
              250 <span className="font-normal">EGP</span>{" "}
              <span className="text-gray-400 font-normal">| 400</span>{" "}
              <span className="ml-3 font-normal text-sm py-1 px-2 bg-green-300 text-center rounded-full">
                38%
              </span>
            </p>
            <div className="flex w-full flex-col mt-5">
              <p className="font-bold ">color: Gray</p>
              <p className="cursor-pointer my-3 text-center py-3 px-[80px] rounded-2xl border-2 w-fit bg-white border-black">
                GRAY
              </p>
              <p className="font-bold">Time Left For Discont</p>
              <div className="flex  w-full mx-auto justify-center items-center text-center gap-[60px]">
                <div className="flex flex-col p-3 rounded-xl border-2 border-black">
                  <p>{timeLeft.days}</p>
                  Days
                </div>
                <div className="flex flex-col p-3 rounded-xl border-2 border-black">
                  <p>{timeLeft.hours}</p>
                  Hours
                </div>
                <div className="flex flex-col p-3 rounded-xl border-2 border-black">
                  {" "}
                  <p>{timeLeft.minutes}</p>
                  Minutes
                </div>
                <div className="flex flex-col p-3 rounded-xl border-2 border-black">
                  {" "}
                  <p>{timeLeft.seconds}</p>
                  Seconds
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
