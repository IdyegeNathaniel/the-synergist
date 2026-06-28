import Link from "next/link";
import React from "react";
import Logo from "@/public/Images/synergist.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { Insta, YOuTube } from "../assets/svg";

const Footer: React.FC = () => {
  return (
    <section className="w-full bg-main py-4">
      <div className="flex flex-col md:flex-row items-center justify-between px-8 py-6 md:px-20">
        <div className="">
          
          {/* LOGO */}
          <div className="flex shrink-0 items-center mb-5 md:mb-2">
            <Image src={Logo} className="w-15 h-15" alt="Brand-Logo" />
            <h2 className="text-2xl text-primary font-bold font-syne">
              The Synergist
            </h2>
          </div>

          {/* SOCIALS */}
          <div className="flex justify-center md:justify-start gap-3 mb-8 md:mb-0">
            <span className="bg-pink-500 flex items-center justify-center h-10 w-10 p-4 rounded-full">
              <Link
                target="_blank"
                href={"https://Instagram.com/ImmanuelZever"}
                className="flex items-center cursor-pointer"
                aria-label="Visit Immanuel Zever on Instagram"
              >
                <Insta fill="white" className="w-6 h-6" />
              </Link>
            </span>

            <span className="bg-red-600 flex items-center justify-center h-10 w-10 p-4 rounded-full">
              <Link
                target="_blank"
                href={"https://www.youtube.com/@immanuelzever"}
                className="flex items-center cursor-pointer"
                aria-label="Visit Immanuel Zever on Youtube"
              >
                <YOuTube fill="white" className="w-6 h-6" />
              </Link>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center md:items-start">
          <h2 className="font-bold text-white text-lg">Quick Links</h2>
          {["About", "Books", "Contact"].map((q) => (
            <Link
              key={q}
              href={`/${q.toLowerCase()}`}
              className="text-gray-400"
            >
              {q}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-400">
        <p className="text-xs md:text-sm text-gray-300 text-center font-mont py-4">
          © 2026 The Synergist. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
