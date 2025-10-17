'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const logos = ['/Img3.png', '/Img4.png', '/Img5.png', '/Img6.png', '/Img7.png', '/Img8.png'];

export default function BrandMarquee() {
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden bg-white py-6 px-8">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          ease: 'linear',
          duration: 50,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        {repeatedLogos.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-6 opacity-70 hover:opacity-100 hover:grayscale-0 transition duration-300"
          >
            <Image
              src={src}
              alt={`Brand logo ${index}`}
              width={100}
              height={80}
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
