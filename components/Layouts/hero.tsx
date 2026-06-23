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
    <section className="relative w-full h-screen bg-contain">
      <Image
        src={HeadShot}
        alt="Hero background"
        fill
        priority
        quality={80}
        className="object-cover"
        style={{ objectPosition: "center 20%" }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container max-w-7xl h-full mx-auto px-6 flex items-center z-10">
        <div className="flex flex-col gap-5 text-white text-center md:text-left">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-soft/60 font-medium">
            Business Psychologist • Author
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-primary font-play">
            Immanuel Zever.
          </h1>
          <p className="text-lg md:text-xl text-white max-w-lg leading-relaxed">
            ...Helping Entrepreneurs unlock sustainable growth through psychological and biblical principles.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-2 justify-center md:justify-start">
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 cursor-pointer"
              asChild
            >
              <Link
                target="_blank"
                href="https://forms.gle/sCgftDPj57xeAZZMA"
              >
                Book a Business Clinic Session
              </Link>
            </Button>
            {/* <Button variant="outline" size="lg" asChild>
              <Link target="_blank" href="https://forms.gle/TKdpXnH7barHKJNm7">
                Join the Community
              </Link>
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
