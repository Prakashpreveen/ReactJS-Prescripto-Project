import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img src={assets.about_image} className="w-full md:max-w-[360px]" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to Prescripto, Your Trusted Partner in Managing your
            Healthcare needs Conveniently and Effeciently. At Prescripto, We
            Understand the Challenges Individuals Face When it Comes to
            Scheduling Doctor Appointments and Managing their Health Records.
          </p>
          <p>
            Prescripto is Committed to Excellence in Healthcare Technology. We
            Continuously Strive to Enchance Our Platform, Integrating the Latest
            Advancements to Improve User Experience and Deliver Superior
            Service. Whether You're Booking Your First Appointment or Managing
            Ongoing Care, Prescripto is here to Support You Every Step of the
            Way.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our Vision at Prescripto is to create a Seamless Healthcare
            Experience for Every User. We Aim to Bridge the gap between Patients
            and Healthcare Providers, Making it Easier for you to Access the
            Care you Need, When You Need it.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization:</b>
          <p>
            Tailored recommendations and reminders to help you stay om top of
            your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
