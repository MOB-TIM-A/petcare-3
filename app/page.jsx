import Image from "next/image";
import Link from "next/link";

export default function Home() {

return (
  <>
    <div className="h-full max-w-screen-xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
      <div className="flex flex-col gap-6 justify-center relative">
      <img src="./assets/line1.svg" alt="" className="max-w-[180px] md:max-w-[239px] ml-[15%] md:ml-[25%] mb-10 md:mb-20" />
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium animate-fade-in animate-once ">
        Guiding You to the Perfect Pet Adoption Journey
      </h1>
      <p className="text-base md:text-lg animate-fade-in animate-once ">
        Need help? Our team is here to support you through every step of
        adopting and caring for your new pet
      </p>
      <div className="flex flex-col sm:flex-row gap-2 mt-6">
        <Link
        href="/contact"
     className="px-6 py-3 bg-[#FF9900] text-white rounded-full text-center cursor-pointer hover:border-amber-950 hover:opacity-80"
         >
        Book Appointment
        </Link>
       <Link
         href="/contact"
         className="px-6 py-3 border border-[#1B1B1B] text-[#1B1B1B] rounded-full text-center cursor-pointer  hover:text-amber-550 hover:opacity-80"
       >
         Get Started
       </Link>
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
      <div className="flex flex-wrap justify-center gap-8 aniamate-slide-right">
      <div className="flex items-center">
        <img className="w-8 h-8 mr-2 animate-spin " src="./assets/label-icon.svg" alt="Grooming Service" />
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
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-left md:mx-auto md:w-3/4 lg:w-2/3">
      The Best Facilities are Here
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="relative h-72 sm:h-96 lg:h-[516px]">
        <img src="./assets/fac-image1.png" alt="" className="w-full h-full object-cover rounded-2xl" />
        <div className="px-6 py-3 bg-white border border-[#1B1B1B] text-[#1B1B1B] rounded-full absolute top-4 left-4 hover:opacity-90 hover:border-amber-500">
        Grooming Area
        </div>
      </div>
      <div className="relative h-72 sm:h-96 lg:h-[516px]">
        <img src="./assets/fac-image2.png" alt="" className="w-full h-full object-cover rounded-2xl" />
        <div className="px-6 py-3 bg-white border border-[#1B1B1B] text-[#1B1B1B] rounded-full absolute top-4 left-4 hover:opacity-90 hover:border-amber-500">
        Boarding Facilities
        </div>
      </div>
      <div className="relative h-72 sm:h-96 lg:h-[516px]">
        <img src="./assets/fac-image3.png" alt="" className="w-full h-full object-cover rounded-2xl" />
        <div className="px-6 py-3 bg-white border border-[#1B1B1B] text-[#1B1B1B] rounded-full absolute top-4 left-4 hover:opacity-90 hover:border-amber-500">
        Pet Spa
        </div>
      </div>
      <div className="relative h-72 sm:h-96 lg:h-[516px]">
        <img src="./assets/fac-image4.png" alt="" className="w-full h-full object-cover rounded-2xl" />
        <div className="px-6 py-3 bg-white border border-[#1B1B1B] text-[#1B1B1B] rounded-full absolute top-4 left-4 hover:opacity-90 hover:border-amber-500">
        Play Zone
        </div>
      </div>
      </div>
    </div>
    </div>

    {/* Schedule Time Section */}
    <div className="h-full mx-auto bg-[#f5f5f5] py-20">
    <div className="pt-12 flex flex-col lg:flex-row justify-center items-center max-w-screen-xl mx-auto px-4">
      <svg width="277" height="274" viewBox="0 0 277 274" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M99.4641 196.762L103.361 195.261C108.565 193.256 114.388 193.314 119.548 195.422C124.707 197.53 128.782 201.516 130.875 206.502L132.442 210.235C135.265 216.962 140.762 222.339 147.723 225.182L150.898 226.48C165.394 232.402 182.155 225.944 188.337 212.056C192.079 203.648 191.187 194.005 185.961 186.358C180.081 177.754 176.349 167.969 175.053 157.761L173.108 142.444C171.75 131.747 164.542 122.556 154.197 118.33C144.02 114.172 132.313 115.435 123.356 121.656L109.16 131.517C100.782 137.337 91.1592 141.302 80.987 143.125L80.3971 143.23C71.0196 144.911 63.1391 150.971 59.397 159.379C53.2159 173.267 59.9561 189.326 74.4518 195.248L77.6269 196.545C84.588 199.389 92.4431 199.467 99.4641 196.762Z" fill="#FF9900" fillOpacity="0.2"/>
      <ellipse cx="20.884" cy="20.2742" rx="20.884" ry="20.2742" transform="matrix(0.925725 0.378197 -0.406616 0.913599 80.0798 76.6406)" fill="#FF9900" fillOpacity="0.2"/>
      <ellipse cx="20.884" cy="20.2742" rx="20.884" ry="20.2742" transform="matrix(0.925725 0.378197 -0.406616 0.913599 200.958 126.024)" fill="#FF9900" fillOpacity="0.2"/>
      <ellipse cx="20.884" cy="20.2742" rx="20.884" ry="20.2742" transform="matrix(0.925725 0.378197 -0.406616 0.913599 131.798 52.1497)" fill="#FF9900" fillOpacity="0.2"/>
      <ellipse cx="20.884" cy="20.2742" rx="20.884" ry="20.2742" transform="matrix(0.925725 0.378197 -0.406616 0.913599 183.611 73.3167)" fill="#FF9900" fillOpacity="0.2"/>
      </svg>

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

    {/* Section Testimonial Slider */}
    <div className="max-w-screen-xl mx-auto px-4 mt-20">
    <h3 className="text-3xl font-semibold mb-8">What Our Client Say</h3>

    {/* Horizontal scroll slider using CSS scroll-snap */}
    <div className="relative">
      <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-6 py-6">
      <div className="flex-none snap-center w-[90%] sm:w-2/3 md:w-1/2 lg:w-1/3 bg-[#f0f0f0] rounded-xl p-8">
        <span className="inline-block bg-orange-200 text-orange-800 px-3 py-1 rounded-full mb-4">
        John Corner, Melbourne
        </span>
        <p className="text-lg leading-relaxed">
        So far, this pet shop has proven to be the best in the area when it comes to
        providing expert and reliable services for pet owners. Their team operates
        with genuine care and passion.
        </p>
      </div>

      <div className="flex-none snap-center w-[90%] sm:w-2/3 md:w-1/2 lg:w-1/3 bg-[#f0f0f0] rounded-xl p-8">
        <span className="inline-block bg-orange-200 text-orange-800 px-3 py-1 rounded-full mb-4">
        Jimmy Jones, Melbourne
        </span>
        <p className="text-lg leading-relaxed">
        So far, this pet shop has proven to be the best in the area when it comes to
        providing expert and reliable services for pet owners. Their team operates
        with genuine care and passion.
        </p>
      </div>

      <div className="flex-none snap-center w-[90%] sm:w-2/3 md:w-1/2 lg:w-1/3 bg-[#f0f0f0] rounded-xl p-8">
        <span className="inline-block bg-orange-200 text-orange-800 px-3 py-1 rounded-full mb-4">
        Alex W, Sydney
        </span>
        <p className="text-lg leading-relaxed">
        Friendly staff and excellent facilities. My dog loves the play zone and grooming services.
        </p>
      </div>

      <div className="flex-none snap-center w-[90%] sm:w-2/3 md:w-1/2 lg:w-1/3 bg-[#f0f0f0] rounded-xl p-8">
        <span className="inline-block bg-orange-200 text-orange-800 px-3 py-1 rounded-full mb-4">
        Maria P, Brisbane
        </span>
        <p className="text-lg leading-relaxed">
        Professional care and fast responses. Highly recommended for pet boarding and daycare.
        </p>
      </div>

      <div className="flex-none snap-center w-[90%] sm:w-2/3 md:w-1/2 lg:w-1/3 bg-[#f0f0f0] rounded-xl p-8">
        <span className="inline-block bg-orange-200 text-orange-800 px-3 py-1 rounded-full mb-4">
        Daniel K, Perth
        </span>
        <p className="text-lg leading-relaxed">
        Great value and attentive service — will come back for grooming and vet support.
        </p>
      </div>

      <div className="flex-none snap-center w-[90%] sm:w-2/3 md:w-1/2 lg:w-1/3 bg-[#f0f0f0] rounded-xl p-8">
        <span className="inline-block bg-orange-200 text-orange-800 px-3 py-1 rounded-full mb-4">
        Sarah L, Adelaide
        </span>
        <p className="text-lg leading-relaxed">
        Clean facilities and friendly team. Very happy with the boarding experience.
        </p>
      </div>
      </div>

      
    </div>
    </div>
  </>
  );
}
