'use client';
import React, { useState } from 'react';
import Link from 'next/link'; 

function DatePicker() {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedTime, setSelectedTime] = useState(null);

  const daysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(11);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateClick = (day) => {
    setSelectedDate(new Date(currentYear, currentMonth, day));
    setSelectedTime(null); // Reset selected time on date change
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const isSameDate = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  const formattedSelectedDate = selectedDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const TimeSlots = [
    "10.00 AM",
    "10.30 AM",
    "11.00 AM",
    "11.30 AM",
    "12.00 PM",
    "12.30 PM",
    "13.00 PM",
    "13.30 PM",
    "14.00 PM",
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-4">
        Choose a Date for Your Pet’s Appointment
      </h2>
      <p className="mb-8 text-gray-700">
        Scheduling your pet’s care has never been easier. Select a convenient
        date and time that works best for you and your furry friend.
      </p>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="md:col-span-2">
          <label className="block font-semibold mb-2">
            Select a Date & Time
          </label>
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={handlePrevMonth}
              type="button"
              className="p-2 rounded hover:bg-gray-200"
              aria-label="Previous Month"
            >
              &#8249;
            </button>
            <div className="font-semibold text-lg">
              {new Date(currentYear, currentMonth).toLocaleDateString(
                "en-US",
                { year: "numeric", month: "long" }
              )}
            </div>
            <button
              onClick={handleNextMonth}
              type="button"
              className="p-2 rounded hover:bg-gray-200"
              aria-label="Next Month"
            >
              &#8250;
            </button>
          </div>
          <div className="grid grid-cols-7 text-center text-gray-600 font-medium mb-2">
            {daysOfWeek.map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {/* Blank days for padding */}
            {[...Array(firstDayOfMonth).keys()].map((_, i) => (
              <div key={`blank-${i}`} />
            ))}
            {/* Days */}
            {[...Array(daysInMonth(currentYear, currentMonth)).keys()].map(
              (day) => {
                const dayNum = day + 1;
                const thisDate = new Date(currentYear, currentMonth, dayNum);
                const isSelected = isSameDate(selectedDate, thisDate);

                // Disable past dates
                const isPast =
                  thisDate.setHours(0, 0, 0, 0) <
                  today.setHours(0, 0, 0, 0);

                return (
                  <button
                    key={dayNum}
                    onClick={() => !isPast && handleDateClick(dayNum)}
                    className={`py-2 rounded ${
                      isSelected
                        ? "bg-black text-white"
                        : "hover:bg-gray-200"
                    } ${isPast ? "text-gray-400 cursor-not-allowed" : ""}`}
                    disabled={isPast}
                    aria-label={`Select day ${dayNum}`}
                  >
                    {dayNum}
                  </button>
                );
              }
            )}
          </div>
          <p className="mt-2 text-xs italic text-gray-500">
            &copy;All Times Are in Central Time~
          </p>
          <button
            type="button"
            disabled={!selectedTime}
            className={`mt-4 w-full py-2 rounded text-white font-semibold ${
              selectedTime
                ? "bg-orange-500 hover:bg-orange-600"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Book Appointment
          </button>
        </div>

        {/* Time selection */}
        <div>
          <div className="mb-3 font-semibold">
            {formattedSelectedDate}
          </div>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {TimeSlots.map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => handleTimeClick(time)}
                className={`w-full text-left px-3 py-2 rounded border ${
                  selectedTime === time
                    ? "bg-orange-300 border-orange-500"
                    : "border-gray-300 hover:bg-gray-100"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
          {selectedTime && (
            <button
              type="button"
              className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-semibold"
              onClick={() =>
                alert(
                  `Confirmed appointment on ${formattedSelectedDate} at ${selectedTime}`
                )
              }
            >
              Confirm
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

const AppointmentPage = () => {
  return (
    <>
        <div className="h-full max-w-screen-xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="flex flex-col gap-6 justify-center relative">
              <img src="./assets/line1.svg" alt="" className="max-w-[180px] md:max-w-[239px] ml-[15%] md:ml-[25%] mb-10 md:mb-20" />
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium animate-fade-in animate-once delay-200">
                Easy schedulling for Your Pet's Healt Needs 
              </h1>
              <p className="text-base md:text-lg animate-fade-in animate-once delay-500">
                Book Appointments effortlessly and prioritze your pet's well-being with our convenient online schedulling system.
              </p>
              <img src="./assets/line2.svg" alt="" className="max-w-[180px] md:max-w-[239px] mt-10 md:mt-20 ml-[15%] md:ml-[25%]" />
            </div>
            <div className="flex items-center justify-center mt-8 md:mt-0">
              <img src="./assets/hero-image.png" alt="" className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl object-contain" />
            </div>
          </div>
        </div>


      <section className="py-4 bg-[#FF9900] text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex gap-8 whitespace-nowrap animate-marquee">
            <div className="flex items-center">
              <img className="w-8 h-8 mr-2 animate-spin" src="./assets/label-icon.svg" alt="Grooming Service" />
              <p className="text-lg font-semibold">Grooming Service</p>
            </div>
            <div className="flex items-center">
              <img className="w-8 h-8 mr-2 animate-spin" src="./assets/label-icon.svg" alt="Veterinary Support" />
              <p className="text-lg font-semibold">Veterinary Support</p>
            </div>
            <div className="flex items-center">
              <img className="w-8 h-8 mr-2 animate-spin" src="./assets/label-icon.svg" alt="Pet Adoption" />
              <p className="text-lg font-semibold">Pet Adoption</p>
            </div>
            <div className="flex items-center">
              <img className="w-8 h-8 mr-2 animate-spin" src="./assets/label-icon.svg" alt="Boarding" />
              <p className="text-lg font-semibold">Boarding</p>
            </div>
            <div className="flex items-center">
              <img className="w-8 h-8 mr-2 animate-spin" src="./assets/label-icon.svg" alt="Pet Daycare" />
              <p className="text-lg font-semibold">Pet Daycare</p>
              <img className="w-8 h-8 mr-2 animate-spin" src="./assets/label-icon.svg" alt="Pet Daycare" />
            </div>
            <div className="flex items-center">
              <img className="w-8 h-8 mr-2 animate-spin" src="./assets/label-icon.svg" alt="Pet Supplies" />
              <p className="text-lg font-semibold">Pet Supplies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Booking Form Section */}
      <div className=" bg-white">
        <div className="h-full max-w-screen-xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="flex flex-col gap-6 justify-center ">
              <h2 className="text-3xl font-bold mb-2">
                Effortless Appointment Booking for Your Pet’s Care
              </h2>
              <p className="text-gray-700 mb-6">
                Convenience at Your Fingertips—Book Your Visit Anytime, Anywhere
              </p>
            </div>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <label htmlFor="fullName" className="block font-semibold mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    defaultValue=""
                    className="w-full rounded-md bg-gray-100 px-4 py-2 focus:outline-none focus:ring-2 "
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-semibold mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    defaultValue=""
                    className="w-full rounded-md bg-gray-100 px-4 py-2 focus:outline-none focus:ring-2 "
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <label htmlFor="service" className="block font-semibold mb-1">
                    Specific service
                  </label>
                  <select
                    id="service"
                    defaultValue=""
                    className="w-full rounded-md bg-gray-100 px-4 py-2 focus:outline-none focus:ring-2 "
                  >
                    <option>Pet Grooming</option>
                    <option>Veterinary Consultation</option>
                    <option>Vaccination</option>
                    <option>Dental Care</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="petType" className="block font-semibold mb-1">
                    Your types of pets
                  </label>
                  <select
                    id="petType"
                    defaultValue=""
                    className="w-full rounded-md bg-gray-100 px-4 py-2 focus:outline-none focus:ring-2"
                  >
                    <option>British Short Hair Cat</option>
                    <option>Persian Cat</option>
                    <option>Golden Retriever</option>
                    <option>Parrot</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="condition" className="block font-semibold mb-1">
                  Write a Specific Condition
                </label>
                <textarea
                  id="condition"
                  rows="4"
                  defaultValue=""
                  className="w-full rounded-md bg-gray-100 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-offset-amber-500"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Use DatePicker component here */}
      <DatePicker />
    </>
  );
};

export default AppointmentPage;
