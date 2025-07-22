import React from 'react'

export default function About() {
  return (
    <>
      <section id="heade-about" className="bg-white">
        <div className="container mx-auto w-full max-w-[1280px]">
          <div className="py-10 px-4 md:py-20 md:px-8 lg:px-0">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <img
                className="w-full h-56 sm:h-80 md:h-[436px] object-cover object-left-top rounded-xl"
                src="./assets/hero-about-image.png"
                alt="Woman with a cat"
              />
              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col gap-6 md:gap-8">
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-inter leading-relaxed mb-4">
                    Where your pets are at the heart of everything we do, Our mission is to provide exceptional care.
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-700">
                    From grooming to wellness, we cover every aspect of your pet’s needs.
                    Our team stays updated on the latest in pet care to provide the best solutions for you and your furry
                    friends.
                  </p>
                </div>
                <div id="stats" className="flex flex-col sm:flex-row gap-6 sm:gap-12 py-2 mt-6">
                  <div className="text-center">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-500">90K</span> <br />
                    <span className="text-sm sm:text-base">Satisfied User</span>
                  </div>
                  <div className="text-center">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-500">150K</span><br />
                    <span className="text-sm sm:text-base">Downloads</span>
                  </div>
                  <div className="text-center">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-500">95%</span><br />
                    <span className="text-sm sm:text-base">Project Success</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20">
        <div className="container mx-auto w-full px-4">
          <div className="mb-8 text-center">
            <div className="flex flex-col gap-10 md:gap-20">
              <h2 className="max-w-xl mx-auto text-2xl sm:text-3xl md:text-4xl text-center font-medium-sans">
                Meet Our Team: Compassionate Experts Dedicated to Pets
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[
                  {
                    img: "./assets/team-image1.png",
                    name: "Dr. Jenny Wilson",
                    role: "Veterinary",
                  },
                  {
                    img: "./assets/team-image3.png",
                    name: "Dr. Jane Cooper",
                    role: "Veterinarian",
                  },
                  {
                    img: "./assets/team-image2.png",
                    name: "Dr. Jacob Jones",
                    role: "Veterinarian",
                  },
                  {
                    img: "./assets/team-image7.png",
                    name: "Dr. Guy Hawkins",
                    role: "Veterinarian",
                  },
                  {
                    img: "./assets/team-image5.png",
                    name: "Dr. Kristin Watson",
                    role: "Veterinarian",
                  },
                  {
                    img: "./assets/team-image6.png",
                    name: "Dr. Theresa Webb",
                    role: "Veterinarian",
                  },
                  {
                    img: "./assets/team-image4.png",
                    name: "Dr. Selena Grey",
                    role: "Veterinarian",
                  },
                  {
                    img: "./assets/team-image8.png",
                    name: "Dr. Kathryn Murpy",
                    role: "Veterinarian",
                  },
                ].map((member, idx) => (
                  <div
                    key={idx}
                    className="relative flex flex-col justify-end p-3 overflow-hidden border border-black h-60 sm:h-72 md:h-80 rounded-3xl"
                  >
                    <img
                      className="absolute top-0 left-0 object-cover h-full w-full"
                      src={member.img}
                      alt={member.name}
                    />
                    <div className="flex flex-row items-center justify-between gap-4 p-3 border-white shadow-2xl bg-opacity-80 rounded-2xl backdrop-blur-xl border-opacity-80 border-1 relative z-10">
                      <div>
                        <h4 className="text-base font-medium">{member.name}</h4>
                        <p className="text-sm">{member.role}</p>
                      </div>
                      <a href="#" title={`Learn more about ${member.name}`}>
                        <img className="w-8 h-8" src="./assets/button-icon.svg" alt="" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto p-4 sm:p-6 bg-gray-100">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-6">
          Compassionate Care for Every Paw, Every Day
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              {/* SVG ICON */}
              {/* ...SVG code remains unchanged... */}
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
            <h2 className="text-base sm:text-lg font-semibold ml-2">COMPASSION</h2>
            <p className="text-sm sm:text-base">We treat every pet with kindness and empathy, understanding their unique needs and emotions.</p>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              {/* SVG ICON */}
              {/* ...SVG code remains unchanged... */}
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
            <h2 className="text-base sm:text-lg font-semibold ml-2">INTEGRITY</h2>
            <p className="text-sm sm:text-base">We are committed to honesty, transparency, and ethical practices in all aspects of our care.</p>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              {/* SVG ICON */}
              {/* ...SVG code remains unchanged... */}
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="52"
                height="52">
                {/* ...SVG paths... */}
                <path
                  d="M0 0 C5.25270679 3.84037678 9.71819611 9.06525446 11.12109375 15.55078125 C12.11204671 24.57946379 11.5816991 32.08199359 6.12109375 39.55078125 C1.3614144 44.87574318 -3.96125952 48.12079563 -11.08203125 48.90234375 C-20.05640794 49.27141985 -26.91060267 47.99166407 -33.71875 41.90625 C-40.17932979 34.9086049 -41.51842064 28.44623959 -41.2890625 19.0625 C-40.47878497 12.12498094 -37.61906311 6.83585271 -32.50390625 2.11328125 C-22.84679172 -5.15529322 -10.64648407 -6.20607856 0 0 Z "
                  fill="#F5F3F2" transform="translate(40.87890625,3.44921875)" />
                {/* ...other paths... */}
              </svg>
            </div>
            <h2 className="text-base sm:text-lg font-semibold ml-2">EXCELLENCE</h2>
            <p className="text-sm sm:text-base">We strive to provide the highest standard of veterinary care through continuous learning and dedication.</p>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              {/* SVG ICON */}
              {/* ...SVG code remains unchanged... */}
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="52" height="52" rx="26" fill="#F5F5F5" />
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M29.2428 26.1549H30.9435C32.1495 26.1549 33.1271 25.1773 33.1271 23.9713V23.9713C33.1275 23.392 32.8976 22.8362 32.488 22.4265C32.0785 22.0167 31.5229 21.7864 30.9435 21.7864H30.2139V21.0648C30.2139 19.8581 29.2357 18.8799 28.029 18.8799V18.8799C26.823 18.8799 25.8454 19.8575 25.8454 21.0635V22.7575C25.8445 23.0077 25.7448 23.2474 25.568 23.4244L23.0096 25.9868C22.8324 26.1634 22.5928 26.2631 22.3426 26.2643H20.6379C19.432 26.2643 18.4543 27.2419 18.4543 28.4479V28.4479C18.454 29.0272 18.6839 29.583 19.0934 29.9928C19.503 30.4025 20.0586 30.6328 20.6379 30.6328H21.3676V31.3611C21.3676 32.5678 22.3458 33.546 23.5525 33.546V33.546C24.7574 33.5445 25.7334 32.5673 25.7334 31.3624V29.6617C25.7343 29.4115 25.834 29.1718 26.0108 28.9948L28.5692 26.4364C28.7474 26.2567 28.9898 26.1554 29.2428 26.1549Z"
                  stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="26.0001" cy="26.0001" r="12.005" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="text-base sm:text-lg font-semibold ml-2">COLLABORATION</h2>
            <p className="text-sm sm:text-base">We work closely with pet owners and a team of skilled professionals to ensure the best outcomes for each pet.</p>
          </div>
        </div>
      </div>
    </>
  )
}
