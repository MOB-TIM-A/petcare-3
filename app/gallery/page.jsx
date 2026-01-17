import React from 'react'
import GalleryData from '../lib/data/GalleryData';
import Image from 'next/image';

const Gallery = () => {
  const isWide = (index) => {
    return index % 4 === 0 || index % 4 === 3
  }
  return (
    <div className="bg-white h-full max-w-7xl mx-auto py-6 sm:py-8 lg:py-12">
      <div className="px-4">
        <div className="w-1/2 mb-10 mx-auto text-center lg:text-left lg:mx-0">
          <h3 className="lg:text-4xl font-semibold">Explore the Love and Care for Your Pets Through Our Photos</h3>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:gap-4 z-0">
          {GalleryData.map((item, index) => {
           return  <div
              key={index}
              className={`group relative h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-125 ${isWide(index) ? 'md:col-span-2' : ''
                }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={500}
                height={500}
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Gallery