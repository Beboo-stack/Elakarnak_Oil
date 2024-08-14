"use client";

import Link from "next/link";

const page = () => {
  return (
    <div className="w-full h-[calc(100vh-65px)] flex flex-col justify-center items-center">
      <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl tracking-wider text-center text-green-500">
        Thank You,
        <br /> Your Order Has Been Successflly Sent{" "}
      </h2>
      <Link href="/">
        <button className="text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 mt-6">
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default page;
