import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-full max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 gap-15">
          <div className="flex flex-col gap-6 justify-center relative">
            <img src="./assets/line1.svg" alt="" className="max-w-[239px] ml-[25%] mb-20" />
            <h1 className="text-6xl font-medium">
              Guiding You to the Perfect Pet Adoption Journey
            </h1>
            <p>
              Need help? Our team is here to support you through every step of
              adopting and caring for your new pet
            </p>
            <div className="flex gap-2 mt-6">
              <div className="px-6 py-3 bg-[#FF9900] text-white rounded-full
            ">Book Appointment</div>
              <div className="px-6 py-3 border-1 border-[#1B1B1B] text-[#1B1B1B] rounded-full">Get Started</div>
            </div>
            <img src="./assets/line2.svg" alt="" className="max-w-[239px]  mt-20 ml-[25%]" />
          </div>
          <div><img src="./assets/hero-image.png" alt="" /></div>
        </div>
      </div>
      
      <div className="h-full max-w-screen-xl mx-auto">
        <div className="py-20 flex flex-col gap-15">
          <h2 className="text-5xl font-medium">The Best Facilities are Here</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="relative h-[516px]">
              <img src="./assets/fac-image1.png" alt="" className="w-full" />
              <div className="px-6 py-3 bg-white border-1 border-[#1B1B1B] text-[#1B1B1B] rounded-full absolute top-4 left-4">
                Grooming Area</div>
            </div>
            <div className="relative h-[516px]">
              <img src="./assets/fac-image2.png" alt="" className="w-full" />
              <div className="px-6 py-3 bg-white border-1 border-[#1B1B1B] text-[#1B1B1B] rounded-full absolute top-4 left-4">
                Grooming Area</div>
            </div>
            <div className="relative h-[516px]">
              <img src="./assets/fac-image3.png" alt="" className="w-full" />
              <div className="px-6 py-3 bg-white border-1 border-[#1B1B1B] text-[#1B1B1B] rounded-full absolute top-4 left-4">
                Grooming Area</div>
            </div>
            <div className="relative h-[516px]">
              <img src="./assets/fac-image4.png" alt="" className="w-full" />
              <div className="px-6 py-3 bg-white border-1 border-[#1B1B1B] text-[#1B1B1B] rounded-full absolute top-4 left-4">
                Grooming Area</div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full mx-auto  bg-[#f5f5f5]">
        <div className=" pt-12 flex flex-row justify-between max-w-screen-xl mx-auto">
          <img src="./assets/img1.png" alt="" className="max-w-[476px]" />
          <div className="flex flex-col">
            <h2 className="text-5xl font-medium text-end">Our Check-in Time</h2>
            <div className="flex flex-row gap-10 mt-[100px]">
              <div className="py-10 px-6 rounded-3xl bg-white w-[302px]">
                <img src="./assets/clock-am.png" alt="" className="max-w-14 mb-6" />
                <h4 className="text-base font-bold mb-3">Morning 8 am to 9 am</h4>
                <h4 className="text-base font-normal">This alone would be enough for a 5 star rating. On top of a great tool
                  is even better customer support.</h4>
              </div>
              <div className="py-10 px-6 rounded-3xl bg-white w-[302px]">
                <img src="./assets/clock-pm.png" alt="" className="max-w-14 mb-6" />
                <h4 className="text-base font-bold mb-3">Evening 6 pm to 7 pm</h4>
                <h4 className="text-base font-normal">This alone would be enough for a 5 star rating. On top of a great tool is
                  even better customer support.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
