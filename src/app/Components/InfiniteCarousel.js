'use client'; // (If you're using Next.js App Router)

import Image from 'next/image';


export default function InfiniteCarousel() {
  const images = [
    '/one.png',
    '/two.png',
    '/three.png',
    '/four.png',
  ];

  // Duplicate the images to create an infinite loop effect
  const duplicatedImages = [...images, ...images];

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="flex gap-8 animate-carousel">
        {duplicatedImages.map((src, index) => (
          <div key={index} className="relative w-[200px] h-[200px] bg-rose-300 rounded-full overflow-hidden">
            <Image
              src={src}
              alt={`Student ${index + 1}`}
              fill
              className="object-cover"
              
            />
          </div>
        ))}
      </div>
    </div>
  );
}
