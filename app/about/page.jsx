import React from 'react'

export default function About() {
  return (
    <>
      <section id="heade-about" className=" bg-white">
        <div className="container mx-auto w-full max-w-[1280px] ">
          <div className=" py-20 px-8 lg:px-0">
            <div className="grid items-center gap-10 lg:grid-cols-2 ">
              <img className="w-full h-[436px] object-left-top" src="./assets/hero-about-image.png" alt="Woman with a cat" />
              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col gap-8 ">
                  <h2 className="text-5xl font-inter leading-relaxed mb-4">
                    Where your pets are at the heart of everything we do, Our mission is to provide exceptional care.
                  </h2>
                  <p className="text-xl text-gray-700 ">
                    From grooming to wellness, we cover every aspect of your pet’s needs.
                    Our team stays updated on the latest in pet care to provide the best solutions for you and your furry
                    friends.
                  </p>
                </div>
                <div id="stats" className="flex gap-18 py-2">
                  <div className="text-center">
                    <span className="text-4xl font-bold text-amber-500">90K</span> <br />
                    Satisfied User
                  </div>
                  <div className="text-center">
                    <span className="text-4xl font-bold text-amber-500">150K</span><br />
                    Downloads
                  </div>
                  <div className="text-center">
                    <span className="text-4xl font-bold text-amber-500">95%</span><br />
                    Project Success
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto w-full ">
          <div className="mb-8 text-center">
            <div className="flex flex-col gap-20">
              <h2 className="max-w-xl mx-auto text-4xl text-center font-medium-sans">Meet Our Team: Compassionate Experts
                Dedicated to Pets</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                <div className="relative flex flex-col justify-end p-4 overflow-hidden border border-black h-80 rounded-3xl">
                  <img className="absolute top-0 left-0 object-cover h-full max-w-full " src="./assets/team-image1.png"
                    alt="Dr. Jenny Wilson" />
                  <div
                    className="flex flex-row items-center justify-between gap-2 p-3 border-white shadow-2xl bg-opacity-80 rounded-2xl backdrop-blur-xl border-opacity-80 border-1 ">
                    <div>
                      <h4 className="text-base font-medium">Dr. Jenny Wilson</h4>
                      <p className="text-sm">veterinary</p>
                    </div>
                    <a href="" title="Learn more about Dr. Jenny Wilson"><img className="w-8 h-8"
                      src="./assets/button-icon.svg" alt="" /></a>
                  </div>
                </div>

                <div className="relative flex flex-col justify-end p-3 overflow-hidden border border-black h-80 rounded-3xl">
                  <img className="absolute top-0 left-0 object-cover h-full max-w-full " src="./assets/team-image3.png"
                    alt="Dr. Jane Cooper" />
                  <div
                    className="flex flex-row items-center justify-between gap-4 p-3 bg-opacity-75 border-white rounded-2xl shadow-1xl backdrop-blur-xl border-opacity-80 border-1 ">
                    <div>
                      <h4 className="text-base font-medium">Dr. Jane Cooper</h4>
                      <p className="text-black-600">Veterinarian</p>
                    </div>
                    <a href="" title="Learn more about Dr. Jenny Wilson"><img className="w-8 h-8"
                      src="./assets/button-icon.svg" alt="" /></a>
                  </div>
                </div>

                <div className="relative flex flex-col justify-end p-3 overflow-hidden border border-black h-80 rounded-3xl">
                  <img className="absolute top-0 left-0 object-cover h-full max-w-full " src="./assets/team-image2.png"
                    alt="Dr. Jacob Jones" />
                  <div
                    className="flex flex-row items-center justify-between gap-4 p-3 bg-opacity-75 border-white rounded-2xl shadow-1xl backdrop-blur-xl border-opacity-80 border-1 ">
                    <div>
                      <h4 className="text-base font-medium">Dr. Jacob Jones</h4>
                      <p className="text-black-600">Veterinarian</p>
                    </div>
                    <a href="" title="Learn more about Dr. Jenny Wilson"><img className="w-8 h-8"
                      src="./assets/button-icon.svg" alt="" /></a>
                  </div>
                </div>

                <div className="relative flex flex-col justify-end p-3 overflow-hidden border border-black h-80 rounded-3xl">
                  <img className="absolute top-0 left-0 object-cover h-full max-w-full " src="./assets/team-image7.png"
                    alt="Dr. Guy Hawkins " />
                  <div
                    className="flex flex-row items-center justify-between gap-4 p-3 bg-opacity-75 border-white rounded-2xl shadow-1xl backdrop-blur-xl border-opacity-80 border-1 ">
                    <div>
                      <h4 className=" text-base font-medium">Dr. Guy Hawkins</h4>
                      <p className="text-black-600">Veterinarian</p>
                    </div>
                    <a href="" title="Learn more about Dr. Jenny Wilson"><img className="w-8 h-8"
                      src="./assets/button-icon.svg" alt="" /></a>
                  </div>
                </div>

                <div className="relative flex flex-col justify-end p-3 overflow-hidden border border-black h-80 rounded-3xl">
                  <img className="absolute top-0 left-0 object-cover h-full max-w-full " src="./assets/team-image5.png"
                    alt="Dr. Kristin Watson" />
                  <div
                    className="flex flex-row items-center justify-between gap-4 p-3 bg-opacity-75 border border-white rounded-2xl shadow-1xl backdrop-blur-xl border-opacity-80 ">
                    <div>
                      <h4 className="text-lg font-semibold">Dr. Kristin Watson</h4>
                      <p className="text-black-600">Veterinarian</p>
                    </div>
                    <a href="" title="Learn more about Dr. Jenny Wilson"><img className="w-8 h-8"
                      src="./assets/button-icon.svg" alt="" /></a>
                  </div>
                </div>

                <div className="relative flex flex-col justify-end p-3 overflow-hidden border border-black h-80 rounded-3xl">
                  <img className="absolute top-0 left-0 object-cover h-full max-w-full " src="./assets/team-image6.png"
                    alt="Dr. Theresa Webb" />
                  <div
                    className="flex flex-row items-center justify-between gap-4 p-3 bg-opacity-75 border border-white rounded-2xl shadow-1xl backdrop-blur-xl border-opacity-80 ">
                    <div>
                      <h4 className="text-lg font-semibold">Dr. Theresa Webb</h4>
                      <p className="text-black-600">Veterinarian</p>
                    </div>
                    <a href="" title="Learn more about Dr. Jenny Wilson"><img className="w-8 h-8"
                      src="./assets/button-icon.svg" alt="" /></a>
                  </div>
                </div>

                <div className="relative flex flex-col justify-end p-3 overflow-hidden border border-black h-80 rounded-3xl">
                  <img className="absolute top-0 left-0 object-cover h-full max-w-full " src="./assets/team-image4.png"
                    alt="Dr. Selena Grey" />
                  <div
                    className="flex flex-row items-center justify-between gap-4 p-3 bg-opacity-75 border-white rounded-2xl shadow-1xl backdrop-blur-xl border-opacity-80 border-1 ">
                    <div>
                      <h4 className="text-lg font-medium ">Dr. Selena Grey</h4>
                      <p className="text-black-600">Veterinarian</p>
                    </div>
                    <a href="" title="Learn more about Dr. Jenny Wilson"><img className="w-8 h-8"
                      src="./assets/button-icon.svg" alt="" /></a>
                  </div>
                </div>

                <div className="relative flex flex-col justify-end p-3 overflow-hidden border border-black h-80 rounded-3xl">
                  <img className="absolute top-0 left-0 object-cover h-full max-w-full " src="./assets/team-image8.png"
                    alt="Dr. Kathryn Murpy" />
                  <div
                    className="flex flex-row items-center justify-between gap-4 p-3 bg-opacity-75 border-white rounded-2xl shadow-1xl backdrop-blur-xl border-opacity-80 ">
                    <div>
                      <h4 className="text-lg font-medium">Dr. Kathryn Murpy</h4>
                      <p className="text-black-600">Veterinarian</p>
                    </div>
                    <a href="" title="Learn more about Dr. Jenny Wilson"><img className="w-8 h-8"
                      src="./assets/button-icon.svg" alt="" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
      <div className="max-w-7xl mx-auto p-6 bg-gray-100">
        <h2 className="text-4xl  text-center mb-6">Compassionate Care
          for Every Paw, Every Day
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                <rect width="52" height="52" rx="26" fill="#F5F5F5" />
                <path d="M36.6711 24.1606V36.6712" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round" />
                <path d="M16.6628 36.6711H12.6611" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round" />
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M26 32.6694V32.6694C28.21 32.6694 30.0016 34.461 30.0016 36.6711V36.6711C30.0016 37.4078 29.4044 38.005 28.6677 38.005H23.3322C22.5955 38.005 21.9983 37.4078 21.9983 36.6711V36.6711C21.9983 34.461 23.7899 32.6694 26 32.6694Z"
                  stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.3291 24.158V36.6712" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round" />
                <path
                  d="M35.0039 24.6662V24.6662C36.6614 24.6662 38.0051 23.3225 38.0051 21.665V21.4956C38.0051 20.9518 37.8572 20.4183 37.577 19.9523L34.7758 15.2903C34.2946 14.4884 33.4287 13.997 32.4935 13.9951H19.5068C18.5703 13.9951 17.7024 14.4862 17.22 15.2889L14.418 19.9523C14.1396 20.4188 13.9934 20.9523 13.9951 21.4956V21.665C13.9951 23.3225 15.3389 24.6662 16.9964 24.6662V24.6662"
                  stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M39.3391 36.6711H35.3374" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round" />
                <path
                  d="M35.0038 24.6662C33.6757 24.6662 32.5054 23.7935 32.1263 22.5206C32.1139 22.4622 32.0623 22.4204 32.0026 22.4204C31.9429 22.4204 31.8913 22.4622 31.8789 22.5206C31.4999 23.7936 30.3295 24.6662 29.0013 24.6662C27.6732 24.6662 26.5028 23.7936 26.1238 22.5206C26.1114 22.4622 26.0598 22.4204 26.0001 22.4204C25.9404 22.4204 25.8888 22.4622 25.8764 22.5206C25.4974 23.7936 24.327 24.6662 22.9988 24.6662C21.6707 24.6662 20.5003 23.7936 20.1213 22.5206C20.1089 22.4622 20.0573 22.4204 19.9976 22.4204C19.9379 22.4204 19.8863 22.4622 19.8739 22.5206C19.4948 23.7935 18.3245 24.6662 16.9963 24.6662"
                  stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M26.3339 28.6683C26.3337 28.8524 26.1844 29.0015 26.0003 29.0014C25.8162 29.0013 25.667 28.8521 25.667 28.6681C25.6669 28.484 25.816 28.3347 26 28.3344C26.0886 28.3343 26.1736 28.3695 26.2362 28.4321C26.2989 28.4948 26.334 28.5797 26.3339 28.6683"
                  stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M30.3356 30.0021C30.3354 30.1861 30.1861 30.3352 30.002 30.3351C29.8179 30.3351 29.6688 30.1859 29.6687 30.0018C29.6686 29.8177 29.8177 29.6684 30.0017 29.6682C30.0903 29.6681 30.1753 29.7032 30.2379 29.7659C30.3006 29.8285 30.3357 29.9135 30.3356 30.0021"
                  stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M22.3322 30.0021C22.332 30.1861 22.1826 30.3352 21.9986 30.3351C21.8145 30.3351 21.6653 30.1859 21.6653 30.0018C21.6652 29.8177 21.8142 29.6684 21.9983 29.6682C22.0869 29.6681 22.1719 29.7032 22.2345 29.7659C22.2972 29.8285 22.3323 29.9135 22.3322 30.0021"
                  stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold ml-2">COMPASSION</h2>
            <p>We treat every pet with kindness and empathy, understanding their unique needs and emotions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="52" height="52" rx="26" fill="#F5F5F5" />
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M25.289 24.833V24.833C27.4991 24.833 29.2907 26.6246 29.2907 28.8347V28.8347C29.2907 29.5714 28.6935 30.1686 27.9568 30.1686H22.6212C21.8846 30.1686 21.2874 29.5714 21.2874 28.8347V28.8347C21.2874 26.6246 23.079 24.833 25.289 24.833V24.833Z"
                  stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M32.3319 18.2462C36.2216 22.1359 36.2216 28.4422 32.3319 32.3319C28.4422 36.2216 22.1358 36.2216 18.2461 32.3319C14.3565 28.4422 14.3564 22.1359 18.2461 18.2462C20.114 16.3782 22.6474 15.3289 25.289 15.3289C27.9306 15.3289 30.464 16.3782 32.3319 18.2462"
                  stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M36.6712 36.6712L32.332 32.332" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round" />
                <path
                  d="M21.2862 21.8318C21.1022 21.8325 20.9536 21.9821 20.9541 22.1661C20.9546 22.3501 21.104 22.499 21.288 22.4987C21.472 22.4985 21.621 22.3492 21.621 22.1652C21.6214 22.0765 21.5862 21.9912 21.5233 21.9286C21.4604 21.8659 21.375 21.8311 21.2862 21.8318"
                  stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M29.2894 21.8318C29.1054 21.8325 28.9568 21.9821 28.9573 22.1661C28.9577 22.3501 29.1072 22.499 29.2912 22.4987C29.4752 22.4985 29.6242 22.3492 29.6242 22.1652C29.6246 22.0765 29.5894 21.9912 29.5264 21.9286C29.4635 21.8659 29.3782 21.8311 29.2894 21.8318"
                  stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M25.2877 20.4978C25.1037 20.4985 24.9551 20.6481 24.9555 20.8321C24.956 21.0161 25.1055 21.165 25.2895 21.1647C25.4735 21.1645 25.6225 21.0153 25.6225 20.8313C25.6228 20.7425 25.5876 20.6572 25.5247 20.5946C25.4618 20.5319 25.3765 20.4971 25.2877 20.4978"
                  stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            </div>
            <h2 className="text-lg font-semibold ml-2">INTEGRITY</h2>
            <p>We are committed to honesty, transparency, and ethical practices in all aspects of our care.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="52"
              height="52">
              <path
                d="M0 0 C5.25270679 3.84037678 9.71819611 9.06525446 11.12109375 15.55078125 C12.11204671 24.57946379 11.5816991 32.08199359 6.12109375 39.55078125 C1.3614144 44.87574318 -3.96125952 48.12079563 -11.08203125 48.90234375 C-20.05640794 49.27141985 -26.91060267 47.99166407 -33.71875 41.90625 C-40.17932979 34.9086049 -41.51842064 28.44623959 -41.2890625 19.0625 C-40.47878497 12.12498094 -37.61906311 6.83585271 -32.50390625 2.11328125 C-22.84679172 -5.15529322 -10.64648407 -6.20607856 0 0 Z "
                fill="#F5F3F2" transform="translate(40.87890625,3.44921875)" />
              <path
                d="M0 0 C0.78375 0.165 1.5675 0.33 2.375 0.5 C8.9682488 1.40941363 15.46960284 1.37482045 22 0 C22.1958009 1.91583647 22.38132214 3.83272539 22.5625 5.75 C22.66691406 6.81734375 22.77132812 7.8846875 22.87890625 8.984375 C22.98560074 11.64141204 22.81930395 13.49960572 22 16 C22.66 16.33 23.32 16.66 24 17 C23.01 17 22.02 17 21 17 C20.690625 17.8971875 20.690625 17.8971875 20.375 18.8125 C18.39806737 21.9576201 16.47078649 22.75575579 13 24 C7.72496517 23.90745553 4.7372494 22.7372494 1 19 C1 18.34 1 17.68 1 17 C0.01 16.67 -0.98 16.34 -2 16 C-1.34 16 -0.68 16 0 16 C-0.17402344 15.29488281 -0.34804687 14.58976562 -0.52734375 13.86328125 C-1.03316985 10.79906196 -0.89657273 8.26839299 -0.5625 5.1875 C-0.40974609 3.72376953 -0.40974609 3.72376953 -0.25390625 2.23046875 C-0.12822266 1.12638672 -0.12822266 1.12638672 0 0 Z "
                fill="#F5EDE1" transform="translate(15,15)" />
              <path
                d="M0 0 C0.78375 0.165 1.5675 0.33 2.375 0.5 C8.9682488 1.40941363 15.46960284 1.37482045 22 0 C22.1958009 1.91583647 22.38132214 3.83272539 22.5625 5.75 C22.66691406 6.81734375 22.77132812 7.8846875 22.87890625 8.984375 C22.98560074 11.64141204 22.81930395 13.49960572 22 16 C22.66 16.33 23.32 16.66 24 17 C23.01 17 22.02 17 21 17 C20.690625 17.8971875 20.690625 17.8971875 20.375 18.8125 C18.39806737 21.9576201 16.47078649 22.75575579 13 24 C7.72496517 23.90745553 4.7372494 22.7372494 1 19 C1 18.34 1 17.68 1 17 C0.01 16.67 -0.98 16.34 -2 16 C-1.34 16 -0.68 16 0 16 C-0.17402344 15.29488281 -0.34804687 14.58976562 -0.52734375 13.86328125 C-1.03316985 10.79906196 -0.89657273 8.26839299 -0.5625 5.1875 C-0.40974609 3.72376953 -0.40974609 3.72376953 -0.25390625 2.23046875 C-0.12822266 1.12638672 -0.12822266 1.12638672 0 0 Z M2 1 C0.76732652 2.00836062 0.76732652 2.00836062 0.90234375 4.06640625 C0.91394531 4.89011719 0.92554688 5.71382812 0.9375 6.5625 C0.94652344 7.38878906 0.95554687 8.21507812 0.96484375 9.06640625 C0.97644531 9.70449219 0.98804688 10.34257812 1 11 C2.32 11 3.64 11 5 11 C5 11.66 5 12.32 5 13 C3.68 13 2.36 13 1 13 C1 13.66 1 14.32 1 15 C1.99 15.495 1.99 15.495 3 16 C3.144375 16.639375 3.28875 17.27875 3.4375 17.9375 C3.86165035 20.38210855 3.86165035 20.38210855 7 22 C11.9213763 22.45568299 15.11011363 22.1826343 19 19 C19 18.01 19 17.02 19 16 C19.66 15.67 20.32 15.34 21 15 C21 14.34 21 13.68 21 13 C19.68 13 18.36 13 17 13 C17 12.34 17 11.68 17 11 C18.32 11 19.64 11 21 11 C21 7.7 21 4.4 21 1 C19.02 1.99 19.02 1.99 17 3 C14.34375 3.265625 14.34375 3.265625 11.5 3.25 C10.5615625 3.25515625 9.623125 3.2603125 8.65625 3.265625 C5.95952324 2.99595232 4.31050707 2.3732259 2 1 Z "
                fill="#FDA623" transform="translate(15,15)" />
              <path
                d="M0 0 C1.32 0 2.64 0 4 0 C4.1958009 1.91583647 4.38132214 3.83272539 4.5625 5.75 C4.66691406 6.81734375 4.77132812 7.8846875 4.87890625 8.984375 C4.98560074 11.64141204 4.81930395 13.49960572 4 16 C4.66 16.33 5.32 16.66 6 17 C4.68 17.33 3.36 17.66 2 18 C2 17.34 2 16.68 2 16 C1.01 15.67 0.02 15.34 -1 15 C0.32 15 1.64 15 3 15 C3 14.34 3 13.68 3 13 C1.68 13 0.36 13 -1 13 C-1 12.34 -1 11.68 -1 11 C0.32 11 1.64 11 3 11 C3 7.7 3 4.4 3 1 C2.01 0.67 1.02 0.34 0 0 Z "
                fill="#FEA013" transform="translate(33,15)" />
              <path
                d="M0 0 C0.84820312 0.16371094 1.69640625 0.32742188 2.5703125 0.49609375 C6.0645531 1.00948445 9.34627574 1.09850739 12.875 1.0625 C14.02742188 1.05347656 15.17984375 1.04445313 16.3671875 1.03515625 C17.67042969 1.01775391 17.67042969 1.01775391 19 1 C18.01 2.485 18.01 2.485 17 4 C10.85054009 5.02490999 5.28419941 4.42758881 0 1 C0 0.67 0 0.34 0 0 Z "
                fill="#FCAF3B" transform="translate(15,15)" />
              <path
                d="M0 0 C0.66 0 1.32 0 2 0 C2 1.32 2 2.64 2 4 C2.99 4 3.98 4 5 4 C5 4.66 5 5.32 5 6 C2.36 6 -0.28 6 -3 6 C-3 5.34 -3 4.68 -3 4 C-2.01 4 -1.02 4 0 4 C0 2.68 0 1.36 0 0 Z "
                fill="#FCAF3C" transform="translate(25,28)" />
            </svg>

            </div>
            <h2 className="text-lg font-semibold ml-2">EXCELLENCE</h2>
            <p>We strive to provide the highest standard of veterinary care through continuous learning and dedication.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="52" height="52" rx="26" fill="#F5F5F5" />
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M29.2428 26.1549H30.9435C32.1495 26.1549 33.1271 25.1773 33.1271 23.9713V23.9713C33.1275 23.392 32.8976 22.8362 32.488 22.4265C32.0785 22.0167 31.5229 21.7864 30.9435 21.7864H30.2139V21.0648C30.2139 19.8581 29.2357 18.8799 28.029 18.8799V18.8799C26.823 18.8799 25.8454 19.8575 25.8454 21.0635V22.7575C25.8445 23.0077 25.7448 23.2474 25.568 23.4244L23.0096 25.9868C22.8324 26.1634 22.5928 26.2631 22.3426 26.2643H20.6379C19.432 26.2643 18.4543 27.2419 18.4543 28.4479V28.4479C18.454 29.0272 18.6839 29.583 19.0934 29.9928C19.503 30.4025 20.0586 30.6328 20.6379 30.6328H21.3676V31.3611C21.3676 32.5678 22.3458 33.546 23.5525 33.546V33.546C24.7574 33.5445 25.7334 32.5673 25.7334 31.3624V29.6617C25.7343 29.4115 25.834 29.1718 26.0108 28.9948L28.5692 26.4364C28.7474 26.2567 28.9898 26.1554 29.2428 26.1549Z"
                  stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="26.0001" cy="26.0001" r="12.005" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round" />
              </svg>

            </div>
            <h2 className="text-lg font-semibold ml-2">COLLABORATION</h2>
            <p>We work closely with pet owners and a team of skilled professionals to ensure the best outcomes for each
              pet.</p>

          </div>
        </div>
      </div>
    </>
  )
}
