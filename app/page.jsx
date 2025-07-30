import Image from "next/image";

export default function Home() {

  return (
    <>
      <div className="h-full max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div className="flex flex-col gap-6 justify-center relative">
            <img src="./assets/line1.svg" alt="" className="max-w-[180px] md:max-w-[239px] ml-[15%] md:ml-[25%] mb-10 md:mb-20" />
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium">
              Guiding You to the Perfect Pet Adoption Journey
            </h1>
            <p className="text-base md:text-lg">
              Need help? Our team is here to support you through every step of
              adopting and caring for your new pet
            </p>
            <div className="flex flex-col sm:flex-row gap-2 mt-6">
              <button
                className="px-6 py-3 bg-[#FF9900] text-white rounded-full text-center cursor-pointer"
               
              >
                Book Appointment
              </button>
              <button
                className="px-6 py-3 border border-[#1B1B1B] text-[#1B1B1B] rounded-full text-center cursor-pointer"
               
              >
                Get Started
              </button>
            </div>
            <img src="./assets/line2.svg" alt="" className="max-w-[180px] md:max-w-[239px] mt-10 md:mt-20 ml-[15%] md:ml-[25%]" />
          </div>
          <div className="flex items-center justify-center mt-8 md:mt-0">
            <img src="./assets/hero-image.png" alt="" className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl object-contain" />
          </div>
        </div>
      </div>
      
      <section className="py-4 bg-[#FF9900] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
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
            </div>
            <div className="flex items-center">
              <img className="w-8 h-8 mr-2 animate-spin" src="./assets/label-icon.svg" alt="Pet Supplies" />
              <p className="text-lg font-semibold">Pet Supplies</p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-full max-w-screen-xl mx-auto">
        <div className="py-22 flex flex-col gap-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-center md:text-left md:mx-auto md:w-3/4 lg:w-2/3">
            The Best Facilities are Here
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative h-72 sm:h-96 lg:h-[516px]">
              <img src="./assets/fac-image1.png" alt="" className="w-full h-full object-cover rounded-2xl" />
              <div className="px-6 py-3 bg-white border border-[#1B1B1B] text-[#1B1B1B] rounded-full absolute top-4 left-4">
                Grooming Area
              </div>
            </div>
            <div className="relative h-72 sm:h-96 lg:h-[516px]">
              <img src="./assets/fac-image2.png" alt="" className="w-full h-full object-cover rounded-2xl" />
              <div className="px-6 py-3 bg-white border border-[#1B1B1B] text-[#1B1B1B] rounded-full absolute top-4 left-4">
                Boarding Facilities
              </div>
            </div>
            <div className="relative h-72 sm:h-96 lg:h-[516px]">
              <img src="./assets/fac-image3.png" alt="" className="w-full h-full object-cover rounded-2xl" />
              <div className="px-6 py-3 bg-white border border-[#1B1B1B] text-[#1B1B1B] rounded-full absolute top-4 left-4">
                Pet Spa
              </div>
            </div>
            <div className="relative h-72 sm:h-96 lg:h-[516px]">
              <img src="./assets/fac-image4.png" alt="" className="w-full h-full object-cover rounded-2xl" />
              <div className="px-6 py-3 bg-white border border-[#1B1B1B] text-[#1B1B1B] rounded-full absolute top-4 left-4">
                Play Zone
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Time Section */}
      <div className="h-full mx-auto bg-[#f5f5f5] py-20">
        <div className="pt-12 flex flex-col lg:flex-row justify-center items-center max-w-screen-xl mx-auto px-4">
          <img
            src="./assets/img1.png"
            alt=""
            className="w-98 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-[476px] mx-auto lg:mx-0"
          />
          <div className="flex flex-col w-full lg:w-auto mt-8 lg:mt-0 lg:ml-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-center lg:text-end">
              Our Check-in Time
            </h2>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 mt-8 md:mt-[100px] items-center lg:items-start justify-center">
              <div className="py-8 px-4 sm:py-10 sm:px-6 rounded-3xl bg-white w-full max-w-xs sm:max-w-sm md:w-[302px]">
                <img
                  src="./assets/clock-am.png"
                  alt=""
                  className="w-10 sm:w-12 mb-6 mx-auto"
                />
                <h4 className="text-base font-bold mb-3 text-center">
                  Morning 8 am to 9 am
                </h4>
                <h4 className="text-base font-normal text-center">
                  This alone would be enough for a 5 star rating. On top of a great tool
                  is even better customer support.
                </h4>
              </div>
              <div className="py-8 px-4 sm:py-10 sm:px-6 rounded-3xl bg-white w-full max-w-xs sm:max-w-sm md:w-[302px]">
                <img
                  src="./assets/clock-pm.png"
                  alt=""
                  className="w-10 sm:w-12 mb-6 mx-auto"
                />
                <h4 className="text-base font-bold mb-3 text-center">
                  Evening 6 pm to 7 pm
                </h4>
                <h4 className="text-base font-normal text-center">
                  This alone would be enough for a 5 star rating. On top of a great tool is
                  even better customer support.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
