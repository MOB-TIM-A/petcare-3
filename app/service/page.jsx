import React from 'react'

export default function Service() {
  return (
    <>
      <section id="first-section" className="pt-10 pb-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-10 justify-between">
            <h1 className="mb-5 text-4xl font-semibold  text-center md:text-left">Your Pet's Happiness, Our Top Priority Always!</h1>
            <p className="text-center  md:text-left">Discover personalized care and expert services designed to keep your furry friends healthy, happy, and full of joy.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col order-2 gap-5 md:order-1">
              <details className="flex flex-col justify-center p-4 border shadow-lg border-grey open:border-[#FF9900] open:bg-[#f7e3c4] rounded-xl accordion-item " open>
                <summary className="text-xl font-medium list-none cursor-pointer">Comprehensive Services</summary>
                <p className="mt-1">From grooming and training to medical check-ups and daycare, we offer all-in-one solutions for your pet's well-being.</p>
              </details>
              <details className="flex flex-col justify-center p-4 border shadow-lg border-grey open:border-[#FF9900] open:bg-[#f7e3c4] rounded-xl accordion-item">
                <summary className="text-xl font-medium list-none cursor-pointer">Certified Experts</summary>
                <p className="mt-1">From grooming and training to medical check-ups and daycare, we offer all-in-one solutions for your pet's well-being.</p>
              </details>
              <details className="flex flex-col justify-center p-4 border shadow-lg border-grey open:border-[#FF9900] open:bg-[#f7e3c4] rounded-xl accordion-item">
                <summary className="text-xl font-medium list-none cursor-pointer">State of the-Art Facilities</summary>
                <p className="mt-1">From grooming and training to medical check-ups and daycare, we offer all-in-one solutions for your pet's well-being.</p>
              </details>
              <details className="flex flex-col justify-center p-4 border shadow-lg border-grey open:border-[#FF9900] open:bg-[#f7e3c4] rounded-xl accordion-item">
                <summary className="text-xl font-medium list-none cursor-pointer">Trusted by Pet Owners</summary>
                <p className="mt-1">From grooming and training to medical check-ups and daycare, we offer all-in-one solutions for your pet's well-being.</p>
              </details>
            </div>
            <div className="w-full order-1 md:order-2 bg-[var(--color-grey)] rounded-3xl overflow-hidden">
              <img src="./assets/img4.jpg" alt="petcare-service-img1" loading="lazy" className="object-cover w-full h-full shadow-sm" />
            </div>
          </div>
        </div>
      </section>
      <section id="second-section" className="py-15 bg-[var(--color-grey)]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 gap-8 p-6 bg-white shadow-sm md:grid-cols-2 rounded-3xl">
            <div className="rounded-xl bg-[var(--color-grey)] overflow-hidden">
              <img src="./assets/img1.jpg" alt="petcare-service-img2" loading="lazy" className="object-cover w-full h-full shadow-sm" />
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-semibold">Our Services</h2>
              <div className="flex flex-col gap-5">
                <div className="w-full py-3 px-3 flex gap-5 rounded-xl bg-[var(--color-grey)] shadow-md border border-transparent group hover:border-primary hover:bg-secondary transition-colors">
                  <img src="./assets/service-icon1.png" alt="" className="w-16 h-16 my-auto rounded-lg" />
                  <div className="flex flex-col gap-3 transition-colors group-hover:text-[#FF9900] group-hover:border-[#FF9900]">
                    <h3 className="font-semibold">Pet Supplies</h3>
                    <div className="flex flex-wrap gap-2">
                      <div className="px-4 py-1 text-sm border md:text-base rounded-2xl">Toys</div>
                      <div className="px-4 py-1 text-sm border md:text-base rounded-2xl">Accessories</div>
                    </div>
                  </div>
                </div>
                <div className="w-full py-3 px-3 flex gap-5 rounded-xl bg-[var(--color-grey)] shadow-md border border-transparent group hover:border-primary hover:bg-secondary transition-colors">
                  <img src="./assets/service-icon2.png" alt="" className="w-16 h-16 my-auto rounded-lg" />
                  <div className="flex flex-col gap-3 transition-colors group-hover:text-[#FF9900] group-hover:border-[#FF9900]">
                    <h3 className="font-semibold">Grooming Services</h3>
                    <div className="flex flex-wrap gap-2">
                      <div className="px-4 py-1 text-sm border md:text-base rounded-2xl">Nail Trimming</div>
                      <div className="px-4 py-1 text-sm border md:text-base rounded-2xl">Ear Cleaning</div>
                    </div>
                  </div>
                </div>
                <div className="w-full py-3 px-3 flex gap-5 rounded-xl bg-[var(--color-grey)] shadow-md border border-transparent group hover:border-primary hover:bg-secondary transition-colors">
                  <img src="./assets/service-icon3.png" alt="" className="w-16 h-16 my-auto rounded-lg" />
                  <div className="flex flex-col gap-3 transition-colors group-hover:text-[#FF9900] group-hover:border-[#FF9900]">
                    <h3 className="font-semibold">Veterinary Support</h3>
                    <div className="flex flex-wrap gap-2">
                      <div className="px-4 py-1 text-sm border md:text-base rounded-2xl">Health check-ups</div>
                      <div className="px-4 py-1 text-sm border md:text-base rounded-2xl">Vaccinations</div>
                    </div>
                  </div>
                </div>
                <div className="w-full py-3 px-3 flex gap-5 rounded-xl bg-[var(--color-grey)] shadow-md border border-transparent group hover:border-primary hover:bg-secondary transition-colors">
                  <img src="./assets/service-icon4.png" alt="" className="w-16 h-16 my-auto rounded-lg" />
                  <div className="flex flex-col gap-3 transition-colors group-hover:text-[#FF9900] group-hover:border-[#FF9900]">
                    <h3 className="font-semibold">Pet Adoption Assistance</h3>
                    <div className="flex flex-wrap gap-2">
                      <div className="px-4 py-1 text-sm border md:text-base rounded-2xl">Local Shelters</div>
                      <div className="px-4 py-1 text-sm border md:text-base rounded-2xl">Perfect Pet</div>
                    </div>
                  </div>
                </div>
                <div className="w-full py-3 px-3 flex gap-5 rounded-xl bg-[var(--color-grey)] shadow-md border border-transparent group hover:border-primary hover:bg-secondary transition-colors">
                  <img src="./assets/service-icon5.png" alt="" className="w-16 h-16 my-auto rounded-lg" />
                  <div className="flex flex-col gap-3 transition-colors gap group-hover:text-[#FF9900] group-hover:border-[#FF9900]">
                    <h3 className="font-semibold">Pet Boarding & Daycare</h3>
                    <div className="flex flex-wrap gap-2">
                      <div className="px-4 py-1 text-sm border md:text-base rounded-2xl">Playtime</div>
                      <div className="px-4 py-1 text-sm border md:text-base rounded-2xl">Feeding</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
