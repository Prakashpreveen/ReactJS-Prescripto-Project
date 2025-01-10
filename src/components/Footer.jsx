import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ---------------------- LEFT SECTION ---------------------- */}
        <div>
          <img src={assets.logo} className="mb-5 w-40" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repudiandae eligendi, quasi quaerat sapiente maiores dicta
            accusantium magni voluptate a hic, eius sint excepturi fuga
            aspernatur esse assumenda! Doloremque, maxime excepturi.
          </p>
        </div>

        {/* ---------------------- CENTER SECTION ---------------------- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* ---------------------- RIGHT SECTION ---------------------- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-234-456-6789</li>
            <li>admin@prescripto.com</li>
          </ul>
        </div>
      </div>
      {/* ---------------------- COPYRIGHT SECTION ---------------------- */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025 © Prescripto - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
