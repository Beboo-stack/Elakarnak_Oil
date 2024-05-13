"use client";
import * as React from "react";
import { Repeat2, Share2 } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { emailjs } from "emailjs-com";
import Form from "./Form";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Product = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const COUNTDOWN_TARGET = new Date("2024-05-09T02:11:00").getTime(); // Replace with your target date

  const getTimeLeft = () => {
    const totalTimeLeft = Math.max(0, COUNTDOWN_TARGET - new Date().getTime());
    const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((totalTimeLeft / 1000) % 60);
    return { days, hours, minutes, seconds };
  };
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updateTimeLeft = getTimeLeft();
      setTimeLeft(updateTimeLeft);

      if (
        updateTimeLeft.days === 0 &&
        updateTimeLeft.hours === 0 &&
        updateTimeLeft.minutes === 0 &&
        updateTimeLeft.seconds === 0
      ) {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const router = useRouter();

  const images1 = [
    {
      src: "/Towel 1 2 3 2.jpg",
    },
    {
      src: "/Towel 1 2 3.jpg",
    },
    {
      category: "summerVibes",
      src: "/SummerVibes (1).jpg",
    },
    {
      category: "summerVibes",
      src: "/SummerVibes (2).jpg",
    },
    {
      category: "summerVibes",
      src: "/SummerVibes (3).jpg",
    },
    {
      category: "summerVibes",
      src: "/SummerVibes (4).jpg",
    },
    {
      category: "summerVibes",
      src: "/SummerVibes (5).jpg",
    },
    {
      category: "summerVibes",
      src: "/SummerVibes (6).jpg",
    },
    {
      category: "summerVibes",
      src: "/SummerVibes (7).jpg",
    },
    {
      category: "helloSummer",
      src: "/HelloSummer (1).jpg",
    },
    {
      category: "helloSummer",
      src: "/HelloSummer (2).jpg",
    },
    {
      category: "helloSummer",
      src: "/HelloSummer (3).jpg",
    },
    {
      category: "helloSummer",
      src: "/HelloSummer (4).jpg",
    },
    {
      category: "helloSummer",
      src: "/HelloSummer (5).jpg",
    },
    {
      category: "helloSummer",
      src: "/HelloSummer (6).jpg",
    },
    {
      category: "helloSummer",
      src: "/HelloSummer (7).jpg",
    },
    {
      category: "helloSummer",
      src: "/HelloSummer (8).jpg",
    },
    {
      category: "itsSummer",
      src: "/itsSummer (1).jpg",
    },
    {
      category: "itsSummer",
      src: "/itsSummer (10).jpg",
    },
    {
      category: "itsSummer",
      src: "/itsSummer (2).jpg",
    },
    {
      category: "itsSummer",
      src: "/itsSummer (3).jpg",
    },
    {
      category: "itsSummer",
      src: "/itsSummer (4).jpg",
    },
    {
      category: "itsSummer",
      src: "/itsSummer (5).jpg",
    },
    {
      category: "itsSummer",
      src: "/itsSummer (6).jpg",
    },
    {
      category: "itsSummer",
      src: "/itsSummer (7).jpg",
    },
    {
      category: "itsSummer",
      src: "/itsSummer (8).jpg",
    },
    {
      category: "itsSummer",
      src: "/itsSummer (9).jpg",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredImages = images1.filter((photo) => {
    if (selectedCategory === "all") {
      return true;
    }
    return photo.category === selectedCategory;
  });

  const features = [
    "الفوطة معمولة بألوان وديزاينز مختلفة هتخليكي مميزة علي البحر",
    " خامتها Ultra-soft Microfiber ودة الي بيخليها ناعمة جدا علي جلدك وبتنشف بسرعة",
    "حجمها حلو جدا 140× 70",
    "وفنفس الوقت خفيفة ومش هتاخد اي مكان في شنطتك",
    "الوان الفوطة هتناسب جميع الاوقات",
  ];

  const [bigImage, setBigImage] = useState(images1[0]);

  const handleSmallImageClick = (item) => {
    setBigImage(item);
  };

  return (
    <section className="w-full my-10">
      <div className="max-w-[90%] mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 justify-center items-start">
        {/* Slider On Small Screens */}
        <Carousel
          plugins={[plugin.current]}
          className="w-full sm:max-w-sm flex mx-auto md:hidden  justify-center items-center relative"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {filteredImages.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="w-full flex aspect-square items-center justify-center p-6">
                      <Image
                        src={item.src}
                        alt=""
                        className="w-full h-full rounded-xl"
                        width={500}
                        height={500}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-[calc(50% - 80px)] left-0 -translate-y-1/2" />
          <CarouselNext className="absolute top-[calc(50% + 80px)] right-0 -translate-y-1/2" />
        </Carousel>
        {/* View On Large Screens */}
        <div className="hidden md:grid max-w-[600px] mx-auto  gap-8 justify-center items-center">
          <div className="">
            <Image
              src={bigImage.src}
              alt=""
              className="w-[800px] h-[600px] rounded-xl"
              width={800}
              height={500}
            />
          </div>
          <div className="grid w-full grid-cols-2 gap-5 overflow-hidden">
            {filteredImages.map((item, id) => (
              <Image
                alt=""
                onClick={() => handleSmallImageClick(item)}
                src={item.src}
                className="w-full h-full rounded-xl cursor-pointer"
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
              <h2 className="font-bold text-3xl">beach towel فوطة البحر</h2>
              {/* The Heart Icon */}
            </div>
            <p>No Reviews Yet </p>
            <p className="font-bold text-xl">
              299 <span className="font-normal">EGP</span>{" "}
              <span className="text-gray-400 font-normal">
                | <s>400</s>
              </span>{" "}
              <span className="ml-3 font-normal text-sm py-1 px-2 bg-green-300 text-center rounded-full">
                25%
              </span>
            </p>
            <div className="flex max-w-xl overflow-hidden flex-col mt-5">
              <p className="font-bold ">
                Design:
                {selectedCategory === "summerVibes"
                  ? " Summer Vibes (Yellow)"
                  : selectedCategory === "helloSummer"
                  ? " Hello Summer (Blue)"
                  : selectedCategory === "itsSummer"
                  ? " It's Summer (Pink)"
                  : "ALL"}
              </p>
              <div className="flex w-full gap-3 ">
                <p
                  onClick={() => setSelectedCategory("summerVibes")}
                  className={`cursor-pointer my-3 text-center py-3 px-[15px] md:px-[15px] lg:px-[35px] xl:px-[55px] rounded-2xl border-2 w-fit bg-white border-gray-300 ${
                    selectedCategory === "gray" && "border-gray-900"
                  }`}
                >
                  Summer Vibes (Yellow)
                </p>
                <p
                  onClick={() => setSelectedCategory("helloSummer")}
                  className={`cursor-pointer my-3 text-center py-3 px-[15px] md:px-[15px] lg:px-[35px] xl:px-[55px] rounded-2xl border-2 w-fit bg-white border-gray-300  ${
                    selectedCategory === "black" && "border-gray-900"
                  }`}
                >
                  Hello Summer (Blue)
                </p>
                <p
                  onClick={() => setSelectedCategory("itsSummer")}
                  className={`cursor-pointer my-3 text-center py-3 px-[15px] md:px-[15px] lg:px-[35px] xl:px-[55px] rounded-2xl border-2 w-fit bg-white border-gray-300  ${
                    selectedCategory === "white" && "border-gray-900"
                  }`}
                >
                  It&apos;s Summer (Pink)
                </p>
              </div>
              <p className="font-bold mb-6">Time Left For Discont</p>
              <div className="flex w-full md:w-full mx-auto justify-center items-center text-center gap-[20px] md:gap-[30px] xl:gap-[60px]">
                <div className="flex text-center text-sm md:text-lg justify-center items-center flex-col w-[18%] p-3 rounded-xl border-2 border-black">
                  <p>{timeLeft.days}</p>
                  Days
                </div>
                <div className="flex flex-col text-center text-sm md:text-lg justify-center items-center w-[18%] p-3 rounded-xl border-2 border-black">
                  <p>{timeLeft.hours}</p>
                  Hours
                </div>
                <div className="flex flex-col text-center text-sm md:text-lg justify-center items-center w-[18%] p-3 rounded-xl border-2 border-black">
                  {" "}
                  <p>{timeLeft.minutes}</p>
                  Minutes
                </div>
                <div className="flex flex-col text-center text-sm md:text-lg justify-center items-center w-[18%] p-3 rounded-xl border-2 border-black">
                  {" "}
                  <p>{timeLeft.seconds}</p>
                  Seconds
                </div>
              </div>
              <Link href="#contact">
                <p className=" text-2xl text-center my-8 text-white bg-black py-3 rounded-xl ">
                  اضغط هنا للشراء
                </p>
              </Link>
              <div className="flex w-full gap-8">
                <p className="cursor-pointer flex gap-2">
                  <Repeat2 className=" w-11" /> Compare
                </p>
                <p className="cursor-pointer flex gap-3">
                  <Share2 /> Share Product
                </p>
              </div>{" "}
              <h2 className="flex w-full text-end  text-3xl mt-8 mb-6">
                Summer and Winter Store من beach towel فوطة البحر
              </h2>
              <p className="flex justify-end text-lg">
                الفوطة فيها مميزات كتر يخلوكي تشتريها الصيف دة
              </p>
              {features.map((item, id) => (
                <div
                  className="flex felx-col w-full justify-end gap-2"
                  key={id}
                >
                  <p className="flex text-end justify-center items-center gap-3 text-xl h-[70px]">
                    {item}
                    <svg
                      className="w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#c8e6c9"
                        d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
                      ></path>
                      <path
                        fill="#4caf50"
                        d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"
                      ></path>
                    </svg>
                  </p>
                </div>
              ))}
              <p className="flex justify-end text-end text-[18px]">
                :مقاس الفوطة <br /> العرض 70 سم <br /> الطول 140 سم <br />
              </p>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
