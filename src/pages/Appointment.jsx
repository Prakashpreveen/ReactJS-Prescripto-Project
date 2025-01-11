import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const [docInfo, setDocInfo] = useState(null); // To store doctor info
  const [docSlots, setDocSlots] = useState([]); // To store doctor slots
  const [slotIndex, setSlotIndex] = useState(0); // TO store slot index
  const [slotTime, setSlotTime] = useState(""); // To store slot time

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]; // to Store Week Days Name

  const { doctors, currencySymbol } = useContext(AppContext); // To get all doctor info
  const { docId } = useParams(); // TO get particular doctor id using useParams() hook

  // ASYNC FUNCTION TO GET AND SET PARTICULAR DOCTOR INFO BY USING ID:
  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  // ASYNC FUNCTION TO GET AND SET setDocSlots:
  const getAvailableSlots = async () => {
    setDocSlots([]);
    // Getting Current Date:
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      // Getting Date with Index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // Setting End Time of the Date with Index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      // Setting Hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        // Add Slot to Array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        //Increment Current-Time by 30 Minute
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  // EXECUTE THE fetchDocInfo() FUNCTION WITH DEPENDENCY USING USEEFECT():
  useEffect(() => {
    fetchDocInfo();
  }, [docId, doctors]);

  // EXECUTE THE getAvailableSlots() FUNCTION WITH DEPENDENCY USING USEEFECT():
  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  // useEffect(() => {
  //   console.log(docSlots);
  // }, [docSlots]);

  return (
    //IF docInfo IS AVAILABLE SHOW REST;
    docInfo && (
      <div>
        {/* ---------------------- DOCTOR DETAILS ---------------------- */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* ----------- DOCTOR IMAGE ----------- */}
          <div>
            <img
              src={docInfo.image}
              className="bg-primary w-full sm:max-w-72 rounded-lg"
            />
          </div>

          {/* ----------- DOCTOR INFO ----------- */}
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name} <img src={assets.verified_icon} className="w-5" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>

            {/* ----------- DOCTOR ABOUT ----------- */}
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img src={assets.info_icon} />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>

            <p className="text-gray-500 font-medium mt-4">
              Appointment Fee:{" "}
              <span className="text-gray-600">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>

        {/* ---------------------- BOOKING SLOTS ---------------------- */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking Slots</p>

          {/* ----------- DAY SLOTS ----------- */}
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {docSlots.length &&
              docSlots.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  key={index}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index
                      ? "bg-primary text-white"
                      : "border border-gray-200"
                  }`}
                >
                  <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>

          {/* ----------- TIME SLOTS ----------- */}
          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {docSlots.length &&
              docSlots[slotIndex].map((item, index) => (
                <p
                  onClick={() => setSlotTime(item.time)}
                  key={index}
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                    item.time === slotTime
                      ? "bg-primary text-white"
                      : "text-gray-400 border border-gray-300"
                  }`}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
          <button className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6">
            Book an Appointment
          </button>
        </div>

        {/* ---------------------- LISTING RELATED DOCTORS ---------------------- */}
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
};

export default Appointment;
