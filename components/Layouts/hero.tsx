import Image from "next/image";
import React from "react";
import HeadShot from "@/public/Images/Headshot-.jpg";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero: React.FC = () => {
  const HeroBg = {
    backgroundImage: `url(${HeadShot.src})`,
    backgroundPosition: "center 20%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <section className="relative w-full h-screen bg-contain" style={HeroBg}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container max-w-7xl h-full mx-auto px-6 flex items-center z-10">
        <div className="flex flex-col gap-5 text-white text-center md:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-soft/60 font-medium">
            Business Psychologist • Author • Coach
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-primary font-inter">
            Immanuel Zever.
          </h1>
          <p className="text-lg md:text-xl text-white/75 max-w-lg leading-relaxed">
            Transforming Careers, Businesses & Lives Through Strategic Growth.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-2 justify-center md:justify-start">
            <Button
              variant={"default"}
              size="lg"
              className="px-8 py-3 cursor-pointer"
              asChild
            >
              <Link
                target="_blank"
                href="mailto:247synergytribe@gmail.com?subject=I Want to Book a Session"
              >
                Book a Session
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link target="_blank" href="https://forms.gle/TKdpXnH7barHKJNm7">
                Join the Community
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
