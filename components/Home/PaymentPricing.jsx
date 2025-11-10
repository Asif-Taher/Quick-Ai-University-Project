import React from "react";
import Title from "../Share/Title";
import { HiCheck } from "react-icons/hi";

const PaymentPricing = () => {
  const prices = [
    {
      name: "free",
      Price: "$0",
      description: "Alweays free",
      feature: ["Title Generation", "Article Generation"],
    },
    {
      name: "premium",
      Price: "$16",
      description: "billed yearly",
      feature: [
        "Title Generation",
        "Article Generation",
        "Generate Image",
        "Remove Background",
        "Remove Objects",
        "Resume Review",
      ],
    },
  ];
  return (
    <div className="w-[80%] mx-auto mt-[80px]">
      <Title
        title="Choose Your Plan"
        subtitle="Start for free and scale up as you grow. Find the perfect plan for your content creation needs."
      ></Title>
      <div className="flex items-stretch justify-center mx-auto mt-10 gap-6 ms:flex sm:flex-row flex-col">
        {prices.map((prices, index) => (
          <div
            key={index}
            className="border-2 border-solid border-gray-200 p-8 w-80 rounded-lg shadow-md bg-gray-100 flex flex-col gap-2"
          >
            <div className="flex flex-col justify-between h-full">
            <div>

              <div>
                <h2 className="text-2xl mb-3 font-bold">{prices.name}</h2>
                <h3 className="text-2xl mb-3 font-bold text-blue-500">
                  {prices.Price}
                </h3>
                <p className="mb-6">{prices.description}</p>
              </div>
              {prices.feature.map((features, index) => (
                <ul key={index} className="">
                  <li>
                    <HiCheck className="inline-block"></HiCheck> {features}
                  </li>
                </ul>
              ))}
                </div>
              <button className="w-full bg-[#393a40] py-2 text-white rounded-sm cursor-pointer mt-6">
                Subscribe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentPricing;
