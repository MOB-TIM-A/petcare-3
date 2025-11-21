import React from 'react'

export default function ContactUs() {
  return (
    <section className="py-20">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-32 md:gap-10">
          <div className="md:w-1/2 space-y-6">
            <div>
              <h3 className="text-2xl font-medium text-center md:text-left">Your Pet's Happiness, Our Priority. Everything Your Pet Needs, All in One Place.</h3>
              <p className="mt-2 text-center md:text-left">Please contact whenever you want and need. Anything for your happiness and your pet.</p>
            </div>
            <div className="flex md:flex-col justify-between text-xs gap-4">
              <div className="flex items-center gap-2 md:gap-4">
                <img src="./assets/phone.svg" alt="" className="w-3 md:w-7" />
                <p className="text-xs md:text-lg">+1258 3258 5679</p>
              </div>
              <div className="flex items-center gap-2 md:gap-4">
                <img src="./assets/mail.svg" alt="" className="w-3 md:w-7" />
                <p className="text-xs md:text-lg">admin@petcare.com</p>
              </div>
              <div className="flex items-center gap-2 md:gap-4">
                <img src="./assets/map.svg" alt="" className="w-3 md:w-7" />
                <p className="text-xs md:text-lg">181 Golden Street, Miami, Florida 33128</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 space-y-6 mb-20 md:mb-0">
            <div>
              <h3 className="text-2xl font-medium text-center md:text-left">Connecting You with Care for Your Beloved Pets</h3>
              <p className="mt-2 text-center md:text-left">We're here to answer your questions and provide support.</p>
            </div>
            <form className="space-y-4 px-3 md:px-0">
              <div className="flex flex-col">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" placeholder="Enter your name" className="mt-1 p-3 border rounded-md" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" placeholder="Enter your email" className="mt-1 p-3 border rounded-md" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" placeholder="Enter your message" className="mt-1 p-3 border rounded-md"></textarea>
              </div>
              <div className="flex justify-center">
                <button 
                type="submit" 
                className="bg-[#FF9900] text-white px-6 py-3 rounded-full hover:bg-[#FF9900]">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
