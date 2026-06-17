"use client"

import contactHeader from "@/public/Images/conf.jpg";
import { Mail, Phone, MapPin, MessageCircle, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactPage() {
  const bgStyle = {
    backgroundImage: `url(${contactHeader.src})`,
    backgroundPosition: "center 20%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  //const [ form, setForm ] = useState<>

  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-[60vh]" style={bgStyle}>
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative max-w-7xl mx-auto h-full flex flex-col items-center justify-center text-center gap-5 px-8 text-soft">
          <h2 className="text-4xl md:text-6xl font-bold">Get In Touch</h2>
          <p className="text-soft/80 text-sm md:text-xl leading-relaxed max-w-2xl">
            Have a question, booking inquiry, or just want to connect? Reach
            out I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      
      <section className="w-full bg-main">
        <div className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-16">
          
          <div className="flex flex-col gap-8 text-soft">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Contact Information
              </h3>
              <p className="text-soft/70 leading-relaxed">
                Fill out the form or reach out directly through any of the
                channels below. Responses typically within 1-2 business days.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <Mail size={22} strokeWidth={1.5} />
                <span>247synergytribe@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={22} strokeWidth={1.5} />
                <span>+234 000 000 0000</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin size={22} strokeWidth={1.5} />
                <span>Abuja, Nigeria.</span>
              </div>
            </div>

           
          </div>

          {/* CONTACT FORM */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-soft">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-md border border-primary/20 bg-main/20 text-soft focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-soft">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-md border border-primary/20 bg-main/20 text-soft focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
              />
            </div>

            

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-soft">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Write your message..."
                className="min-h-12 w-full px-4 py-3 rounded-md border border-primary/20 bg-main/20 text-soft focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
              />
            </div>

            <Button size="lg" className="flex items-center gap-3 mt-2 cursor-pointer">
              Send Message
              <MessageCircle />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}