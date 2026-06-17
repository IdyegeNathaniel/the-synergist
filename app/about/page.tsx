import header from "@/public/Images/Headshot-.jpg";
import { ChevronDown } from "lucide-react";

export default function AboutPage() {
  const bgStyle = {
    backgroundImage: `url(${header.src})`,
    backgroundPosition: "center 20%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      
      <section className="relative w-full h-screen" style={bgStyle}>
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative max-w-7xl mx-auto h-full flex flex-col items-center justify-center text-center gap-5 px-8 text-soft">
          <h2 className="text-4xl md:text-6xl font-bold">Meet The Synergist</h2>

          <p className="text-soft/80 text-sm md:text-xl leading-relaxed max-w-3xl">
            Discover the journey, principles, and expertise behind the man helping
            entrepreneurs build sustainable growth and lasting impact.
          </p>

          <div className="absolute bottom-40 md:bottom-28">
            <ChevronDown
              className="text-soft animate-[bounce_3s_ease-in-out_infinite]"
              size={64}
              strokeWidth={1}
            />
          </div>
        </div>
      </section>

      {/* BIO */}
      <section className="w-full bg-main">
        <div className="max-w-4xl mx-auto px-8 py-20 text-soft/60">
          <p className="text-lg leading-relaxed ">
            Immanuel Zever, popularly known as <span className="font-semibold text-primary/90 font-syne">&apos;The Synergist,&apos;</span> is
            an Entrepreneur, Business Psychologist, Author and Co-Founder of
            Synergy Academy. With a decade of experience in business, he is
            dedicated to helping entrepreneurs unlock sustainable growth through
            psychological and biblical principles. His message is simple:{" "}
            <span className="italic">&quot;expand your mind and expand your life.&quot;</span>
          </p>

          <p className="text-lg leading-relaxed mt-6">
            As Co-founder of Synergy Academy, his mission is to ignite in the
            hearts of individuals the desire to become more, do more and have
            more. Through the academy, he offers coaching and mentorship
            programs on mindset transformation and entrepreneurship, equipping
            individuals with the skills and strategies to thrive in the
            marketplace.
          </p>

          <p className="text-lg leading-relaxed mt-6">
            He creates and shares content on leadership, wealth creation,
            personal development and financial literacy. His platforms serve as
            educational tools for individuals looking to grow personally and
            professionally.
          </p>
        </div>
      </section>
    </>
  );
}