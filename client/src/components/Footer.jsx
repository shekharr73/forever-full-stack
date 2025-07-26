import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus consequuntur magni minima ex impedit culpa.</p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 text-gray-600">COMPANY</p>
          <ul className=" flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 text-gray-600">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+917378521034</li>
            <li>shekharjadhav501@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="border-t border-gray-300"/>
        <p className="py-5 text-sm text-center text-gray-700 ">Copyright 2024@ forever.com -All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
