import React from "react";

export default function BookAppointment() {
    return (
        <>
            <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                    <span className="inline-block bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-semibold text-xs mb-4">45% Price drop this quarter</span>
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 max-w-lg">Easy Scheduling for Your Pet's Health Needs</h1>
                    <p className="text-gray-700 text-lg max-w-lg mb-8">Book appointments affordably and prioritize your pet’s well-being with our convenient online scheduling system.</p>
                    <div className="flex space-x-4">
                        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition shadow">Book Appointment</button>
                        <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition">Get Started</button>
                    </div>
                    <svg className="mt-20 w-24 h-24 text-orange-300" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" aria-hidden="true" >
                        <path d="M5 12s5-7 9-3c4 4-3 8 1 10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className="relative h-96 rounded-3xl bg-gray-200 grid grid-cols-2 grid-rows-2 gap-4">
                    <div className="bg-gray-300 rounded-xl flex justify-center items-center text-gray-400 text-xl select-none">Image</div>
                    <div className="bg-gray-300 rounded-xl flex justify-center items-center text-gray-400 text-xl select-none">Image</div>
                    <div className="bg-gray-300 rounded-xl rounded-tl-[100px] flex justify-center items-center text-gray-400 text-xl select-none">Image</div>
                    <div className="bg-yellow-100 rounded-full opacity-30 absolute top-8 right-10 w-24 h-24 pointer-events-none"></div>
                    <div className="bg-yellow-100 rounded-full opacity-20 absolute bottom-6 left-16 w-28 h-28 pointer-events-none"></div>
                </div>
            </section>

            <section className="mt-14 bg-orange-50 border border-orange-200 rounded-3xl px-6 py-4 overflow-x-auto scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-orange-100">
                <nav className="flex space-x-8 text-orange-600 text-sm font-semibold whitespace-nowrap">
                    <a href="#" className="px-4 py-2 rounded-lg bg-orange-200">Supplies</a>
                    <a href="#" className="px-4 py-2 rounded-lg hover:bg-orange-200 transition">Grooming Service</a>
                    <a href="#" className="px-4 py-2 rounded-lg hover:bg-orange-200 transition">Veterinary Support</a>
                    <a href="#" className="px-4 py-2 rounded-lg hover:bg-orange-200 transition">Pet Adoption</a>
                    <a href="#" className="px-4 py-2 rounded-lg hover:bg-orange-200 transition">Boarding</a>
                    <a href="#" className="px-4 py-2 rounded-lg hover:bg-orange-200 transition">Pet Daycare</a>
                </nav>
            </section>

            <section className="max-w-3xl mx-auto mt-12">
                <h2 className="text-2xl font-semibold mb-5">Effortless Appointment Booking for Your Pet’s Care</h2>
                <p className="text-gray-700 mb-9">Convenience at Your Fingertips—Book Your Visit Anytime, Anywhere</p>
                <form className="space-y-6 font-medium text-gray-800">
                    <div className="grid gap-6 md:grid-cols-2">
                        <div>
                            <label htmlFor="fullName" className="block mb-2 text-sm font-semibold">Full Name</label>
                            <input type="text" id="fullName" name="fullName" defaultValue="Darlene Robertson" className="w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-semibold">Email Address</label>
                            <input type="email" id="email" name="email" defaultValue="Darlenerobert@gmail.com" className="w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"/>
                        </div>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div>
                            <label htmlFor="service" className="block mb-2 text-sm font-semibold">Specific service</label>
                            <select id="service" name="service" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400">
                                <option>Pet Grooming</option>
                                <option>Vet Consultation</option>
                                <option>Vaccination</option>
                                <option>Dental Care</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="petType" className="block mb-2 text-sm font-semibold">Your types of pets</label>
                            <select id="petType" name="petType" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400">
                                <option>British Short Hair Cat</option>
                                <option>Golden Retriever</option>
                                <option>Persian Cat</option>
                                <option>Bulldog</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="specificCond" className="block mb-2 text-sm font-semibold">Write a Specific Condition</label>
                        <textarea id="specificCond" rows="4" className="w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="A urinary tract infection is a common condition that affects the bladder and urinary system. It can cause discomfort and lead to more serious complications if untreated."></textarea>
                    </div>
                </form>
            </section>

            <section className="max-w-3xl mx-auto mt-14 mb-20">
                <h2 className="text-2xl font-semibold mb-6">Choose a Date for Your Pet’s Appointment</h2>
                <p className="text-gray-700 max-w-lg mb-10">Scheduling your pet’s care has never been easier. Select a convenient date and time that works best for you and your furry friend.</p>

                <div className="grid md:grid-cols-[350px_1fr] gap-8 items-start">
                    <div className="border border-gray-300 rounded-lg p-4 select-none">
                        <div className="flex justify-between items-center mb-4">
                            <span className="font-medium text-gray-700">December 2024</span>
                            <div className="space-x-3 text-gray-500">
                                <button aria-label="Previous month" className="hover:text-orange-500">&lt;</button>
                                <button aria-label="Next month" className="hover:text-orange-500">&gt;</button>
                            </div>
                        </div>
                        <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-gray-500 mb-2 select-none">
                            <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
                        </div>
                        <div className="grid grid-cols-7 gap-1 text-center text-sm text-gray-700">
                            <div className="text-gray-300 cursor-default select-none">31</div>
                            <div className="py-1 cursor-pointer hover:bg-orange-100 rounded-lg">1</div>
                            <div className="py-1 cursor-pointer hover:bg-orange-100 rounded-lg">2</div>
                            <div className="py-1 cursor-pointer hover:bg-orange-100 rounded-lg">3</div>
                            <div className="py-1 cursor-pointer hover:bg-orange-100 rounded-lg">4</div>
                            <div className="py-1 cursor-pointer hover:bg-orange-100 rounded-lg">5</div>
                            <div className="py-1 cursor-pointer hover:bg-orange-100 rounded-lg">6</div>
                            <div className="py-1 cursor-pointer hover:bg-orange-100 rounded-lg">7</div>
                            <div className="py-1 cursor-pointer hover:bg-orange-100 rounded-lg">8</div>
                            <div className="py-1 cursor-pointer hover:bg-orange-100 rounded-lg">9</div>
                            <div className="py-1 cursor-pointer hover:bg-orange-100 rounded-lg">10</div>
                            <div className="py-1 cursor-pointer hover:bg-orange-100 rounded-lg">11</div>
                            <div className="py-1 bg-orange-300 rounded-lg font-semibold cursor-default" aria-current="date">12</div>
                            <div className="py-1 cursor-pointer hover:bg-orange-100 rounded-lg">13</div>
                            <div className="py-1 cursor-pointer hover:bg-orange-100 rounded-lg">14</div>
                            <div className="py-1 cursor-pointer hover:bg-orange-100 rounded-lg">15</div>
                            <div className="py-1 cursor-pointer hover:bg-orange-100 rounded-lg">16</div>
                            <div className="py-1 cursor-pointer hover:bg-orange-100 rounded-lg">17</div>
                            <div className="py-1 cursor-pointer hover:bg-orange-100 rounded-lg">18</div>
                            <div className="py-1 cursor-pointer hover:bg-orange-100 rounded-lg">19</div>
                            <div className="py-1 cursor-pointer hover:bg-orange-100 rounded-lg">20</div>
                            <div className="py-1 cursor-pointer hover:bg-orange-100 rounded-lg">21</div>
                            <div className="py-1 cursor-pointer hover:bg-orange-100 rounded-lg">22</div>
                            <div className="py-1 cursor-pointer hover:bg-orange-100 rounded-lg">23</div>
                            <div className="py-1 cursor-pointer hover:bg-orange-100 rounded-lg">24</div>
                            <div className="py-1 cursor-pointer hover:bg-orange-100 rounded-lg">25</div>
                            <div className="py-1 cursor-pointer hover:bg-orange-100 rounded-lg">26</div>
                            <div className="py-1 cursor-pointer hover:bg-orange-100 rounded-lg">27</div>
                            <div className="py-1 cursor-pointer hover:bg-orange-100 rounded-lg">28</div>
                            <div className="py-1 cursor-pointer hover:bg-orange-100 rounded-lg">29</div>
                            <div className="py-1 cursor-pointer hover:bg-orange-100 rounded-lg">30</div>
                            <div className="py-1 cursor-pointer hover:bg-orange-100 rounded-lg">31</div>
                            <div className="text-gray-300 cursor-default select-none">1</div>
                            <div className="text-gray-300 cursor-default select-none">2</div>
                            <div className="text-gray-300 cursor-default select-none">3</div>
                            <div className="text-gray-300 cursor-default select-none">4</div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3">Friday, December 12</h3>
                        <div className="space-y-3 max-w-xs">
                            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-orange-100 transition">10.00 AM</button>
                            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-orange-100 transition">10.30 AM</button>
                            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-orange-100 transition">11.00 AM</button>
                            <button className="w-full text-left px-4 py-2 rounded-lg bg-orange-300 font-semibold cursor-default" aria-current="time">11.30 AM</button>
                            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-orange-100 transition">12.00 PM</button>
                            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-orange-100 transition">12.30 PM</button>
                            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-orange-100 transition">1.00 PM</button>
                            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-orange-100 transition">1.30 PM</button>
                            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-orange-100 transition">2.00 PM</button>
                        </div>
                        <div className="mt-8 flex justify-between items-center text-sm text-gray-500">
                            <span>All times are in Central Time.</span>
                            <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-3 font-semibold shadow transition">Book Appointment</button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
