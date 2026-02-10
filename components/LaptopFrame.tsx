"use client";

import Image from "next/image";

interface LaptopFrameProps {
  imageSrc: string;
  altText: string;
}

export default function LaptopFrame({ imageSrc, altText }: LaptopFrameProps) {
  return (
    <div className="relative mx-auto w-[90%] md:w-[85%] perspective-1000 my-4 group-hover:-translate-y-2 transition-transform duration-500">
      <div className="relative bg-[#0d0d0d] rounded-t-[1rem] p-[2.5%] pb-[1.5%] shadow-[0_0_0_1px_#333,0_20px_40px_-20px_rgba(0,0,0,0.6)] z-20">
        <div className="absolute top-[4%] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#2a2a2a] z-30"></div>

        <div className="relative aspect-[16/10] overflow-hidden rounded bg-black border border-[#1a1a1a]">
          <Image
            src={imageSrc}
            alt={altText}
            fill
            className="object-contain transition-transform duration-700 group-hover:scale-105 bg-zinc-950"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none"></div>
        </div>
      </div>

      <div className="relative h-3 bg-[#171717] rounded-b-[1rem] mx-[3%] shadow-[0_-2px_4px_rgba(0,0,0,0.3)_inset,0_10px_20px_-5px_rgba(0,0,0,0.8)] z-10 border-t border-[#262626]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[15%] h-[3px] bg-[#2a2a2a] rounded-b-md shadow-inner"></div>
      </div>
    </div>
  );
}
