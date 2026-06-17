import Image from "next/image";
import React from "react";
import HeadShot from "@/public/Images/Headshot-.jpg";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section
      className="w-full h-screen relative bg-cover bg-center bg-main"
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container max-w-7xl h-full mx-auto px-10 flex items-center">
        <div className="flex flex-col md:flex-row items-center gap-12 w-full">
          <div className="shrink-0">
            <Image
              src={HeadShot}
              alt="head-shot"
              className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover object-top border-4 border-white/30 shadow-2xl"
              loading="lazy"
            />
          </div>

          
          <div className="flex flex-col gap-5 text-white text-center md:text-left">
            <p className="text-sm uppercase tracking-[0.3em] text-soft/60 font-medium ">
              Business Psychologist • Author • Coach
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-primary font-inter">
              Immanuel Zever.
            </h1>
            <p className="text-lg md:text-xl text-white/75 max-w-lg leading-relaxed">
              Transforming Careers, Businesses & Lives Through Strategic Growth.
            </p>

            <div className="flex flex-wrap gap-4 mt-2 justify-center md:justify-start">
              <Button variant={"default"} size="lg" className="px-8 py-3 cursor-pointer" asChild>
                <Link target="_blank" href="mailto:247synergytribe@gmail.com?subject=I Want to Book a Session">Book a Session</Link>
              </Button>
              <Button variant="outline" size="lg" className="" asChild>
                <Link target="_blank" href="https://forms.gle/TKdpXnH7barHKJNm7">Join the Community</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>


      <div className="absolute bottom-8 right-12 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-soft/40 animate-pulse">
        <span className="text-sm uppercase tracking-widest font-bold">Scroll</span>
        <div className="w-0.5 h-10 bg-soft/20" />
      </div>
    </section>
  );
};

export default Hero;
