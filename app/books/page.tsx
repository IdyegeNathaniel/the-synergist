import { Button } from "@/components/ui/button";
import { BooksSlide, TESTIMONIAL } from "../books/data";
import library from "@/public/Images/library.jpg";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BookPage() {
  const bgStyle = {
    backgroundImage: `url(${library.src})`,
    backgroundPosition: "center 20%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <section className="relative w-full h-96 md:h-screen" style={bgStyle}>
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative max-w-7xl mx-auto h-full flex flex-col items-center justify-center text-center gap-5 px-8 text-soft">
          <h2 className="text-3xl md:text-6xl font-bold">
            The Synergist&apos;s Books
          </h2>

          <p className="text-soft text-sm md:text-base leading-relaxed max-w-3xl">
            Explore the Synergist's collection of books that challenge your
            thinking, sharpen your strategy, and empower sustainable growth.
          </p>

          <div className="absolute md:bottom-20 bottom-10 left-1/2 -translate-x-1/2">
            <ChevronDown
              className="text-soft animate-[bounce_3s_ease-in-out_infinite]"
              size={64}
              strokeWidth={1}
            />
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="w-full bg-main">
        <div className="max-w-4xl mx-auto px-6 md:px-8 py-20 ">
          <h2 className="text-3xl md:text-6xl text-center text-primary font-bold ">
            Reintroduction to Money
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-8">
            {BooksSlide.map((item, index) => (
              <div className="flex justify-center" key={index}>
                <Image
                  src={item.image}
                  width={300}
                  height={400}
                  className="w-60 md:w-56 h-72 md:h-64 rounded-md"
                  alt="book-images"
                />
              </div>
            ))}
          </div>

          <p className="text-base leading-relaxed mt-6 text-soft/60">
            Reintroduction to is a practical personal finance and
            wealth-building book that teaches how to master money through
            mindset, strategy, and structure.
          </p>

          <ul className="my-6">
            {[
              "The book introduces powerful frameworks like the P.A.A.R system (Philosophy, Attitude, Actions, Results)",
              "The 8 Laws of Money",
              "The Money Triangle (Earn, Manage, Multiply) to help readers build sustainable wealth and financial freedom.",
            ].map((item) => (
              <li key={item} className="py-1.5 text-base text-soft/60">
                <span className="text-xl pr-2 md:pr-1.5 text-primary">•</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-7">
            <p className="text-base leading-relaxed mt-6 text-soft/60">
              This book equips readers to move from earning money to multiplying
              it through systems and investments.
            </p>
            <Button variant="outline" asChild>
              <Link target="_blank" href="https://selar.com/RTM">Get the Book</Link>
            </Button>
          </div>
        </div>

        {/* TESTIMONIALS */}

        <div className="max-w-7xl mx-auto py-6 px-6 md:px-8">
          <h2 className="text-2xl md:text-4xl text-center text-primary font-bold">
            Reviews
          </h2>

          <div className="w-full flex flex-wrap items-center justify-center gap-5 py-5 px-4 ">
            {TESTIMONIAL.map((testimony) => (
              <div
                className="w-full md:w-64 min-h-52 flex flex-col gap-1 rounded-md border border-primary/20 bg-main/20 text-soft/70 py-3 px-3 "
                key={testimony.id}
              >
                <span className="text-3xl text-primary">"</span>
                <p className="text-sm font-mont">{testimony.text}</p>
                <span className="text-3xl text-primary text-right">"</span>
                <p className="text-right italic text-sm">— {testimony.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

