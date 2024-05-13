"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import React from "react";
import { useState, useRef } from "react";

import { z } from "zod";

const Form = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    quantity: 1,
    address: "",
    total: 299,
  });

  const schema = z.object({
    name: z.string().nonempty().min(3),
    phone: z.string().min(11),
    address: z.string().min(10),
    quantity: z.number().min(1),
    total: z.number().min(1),
  });

  const Increase = () => {
    setFormData((prev) => {
      const newQuantity = prev.quantity + 1;
      let newTotal = 299;

      if (newQuantity === 2) {
        newTotal = 569; // Adjusted price for quantity 2
      } else if (newQuantity === 3) {
        newTotal = 779; // Adjusted price for quantity 3
      } else if (newQuantity > 3) {
        newTotal = newQuantity * 260; // Adjusted price for quantity greater than 3
      }

      return {
        ...prev,
        quantity: newQuantity,
        total: newTotal,
      };
    });
  };

  const Decrease = () => {
    if (formData.quantity >= 2) {
      setFormData((prev) => {
        const newQuantity = prev.quantity - 1;
        let newTotal = 299;

        if (newQuantity === 2) {
          newTotal = 569; // Adjusted price for quantity 2
        } else if (newQuantity === 3) {
          newTotal = 779; // Adjusted price for quantity 3
        } else if (newQuantity > 3) {
          newTotal = newQuantity * 260; // Adjusted price for quantity greater than 3
        }

        return {
          ...prev,
          quantity: newQuantity,
          total: newTotal,
        };
      });
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSelectedOption = (event) => {
    const selectedOption = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedOption: selectedOption,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const validatedData = schema.parse(formData);

      const seviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
      const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

      const templateParams = {
        from_name: formData.name,
        to_name: "johnathan",
        phone: formData.phone,
        address: formData.address,
        quantity: formData.quantity,
        total: formData.total,
      };

      if (!formData.name || !formData.phone) return;

      emailjs
        .send(seviceId, templateID, templateParams, publicKey)
        .then(() => {
          setFormData({
            name: "",
            phone: "",
            address: "",
            total: 299,
            quantity: 1,
          });
          router.push("/successfull");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.error("Form validation failed:", error.errors);
    }
  };

  return (
    <section id="contact" className="">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-x-16 gap-y-8 ">
          <div className="rounded-[10px] bg-white p-8  shadow-lg  lg:p-12 ">
            <h2 className="text-3xl font-bold pt-8 mb-8 text-center">
              Order Now
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex justify-between items-center overflow-hidden">
                <div className="flex flex-col w-1/2 justify-start items-start">
                  <div className="flex flex-col justify-center items-center">
                    <h2 className="text-lg">عددالقطع</h2>
                    <div className="flex justify-start items-center gap-5">
                      <button
                        type="button"
                        className="cursor-pointer text-[30px] text-center self-center w-[30px]"
                        onClick={Decrease}
                      >
                        -
                      </button>
                      <h2 className="text-lg">{formData.quantity} </h2>
                      <button
                        type="button"
                        className="w-[30px] cursor-pointer text-[30px]   "
                        onClick={Increase}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col  w-1/2 justify-center items-center">
                  <h2 className="text-xl">السعر النهائي</h2>
                  <p className="text-[20px] font-bold">
                    {" "}
                    {formData.total} <span>EGP</span>{" "}
                  </p>
                </div>
              </div>
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="الاسم"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  id="name"
                />
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="رقم التليفون"
                    type="tel"
                    onChange={handleChange}
                    name="phone"
                    value={formData.phone}
                    required
                    id="phone"
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="address">
                  Address
                </label>

                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  required
                  placeholder="العنوان بالكامل "
                  rows="8"
                  name="address"
                  onChange={handleChange}
                  value={formData.address}
                  id="address"
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className=" text-2xl text-center my-8 text-white bg-black py-3 rounded-xl w-full"
                >
                  اضغط هنا للشراء
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
