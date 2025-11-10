import Image from "next/image";
import React from "react";
import logo from "@/public/assets/logo.svg";
const Footer = () => {
  return (
    <div className="w-full bg-gray-100 mt-28 py-20">
      <div className="w-[80%] flex justify-between items-center mx-auto">
        <div className="flex flex-col gap-2.5 max-w-xs">
          <Image src={logo} alt="logo" width={180} height={60}></Image>
          <p>
            Experience the power of Al with QuickAi. Transform your content
            creation with our suite Of premium Al tools. Write articles,
            generate images, and enhance your workflow.
          </p>
        </div>
        <div className="flex justify-between items-center gap-8">
            <div className="flex flex-col gap-6">
                <h2>Company</h2>
                <ul className="flex flex-col gap-2">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="flex flex-col gap-6">
                <h2>Subscribe to our newsletter</h2>
                <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <div>
                    <input type="text" />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
