import Image from "next/image";
import Emblem from "@/public/Images/synergist.png";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Community: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-main py-4 text-light">
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row gap-5 items-center mx-auto py-4 px-6 md:px-20">
        <div className="w-full md:w-1/2 flex flex-col gap-3">
          <h2 className="text-lg md:text-2xl text-primary font-semibold leading-relaxed font-mont">
            THE SYNERGY TRIBE
          </h2>
          <p className="text-sm leading-relaxed text-justify text-soft/60 mb-5">
            Synergy Tribe is a growth-focused community for individuals who are
            committed to increasing their influence, income, and impact. It
            brings together entrepreneurs, creators, professionals, leaders, and
            purpose-driven individuals who believe that transformation happens
            faster through learning, collaboration, and accountability.
            <br />
            <br />
            Through trainings, book reviews, mentorship, networking
            opportunities, and practical growth resources, members are equipped
            with the knowledge, mindset, and strategies needed to succeed in
            business, leadership, communication, and personal development. Our
            mission is simple: to ignite within the hearts of individuals the
            desire to become more, do more and have more.
          </p>

          <Button variant="default" size="lg" className="rounded-md" asChild>
            <Link href="https://forms.gle/TKdpXnH7barHKJNm7">
              Join the Community
              <ArrowRight />
            </Link>
          </Button>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={Emblem}
            className="w-72 md:w-96 object-contain animate-pulse duration-500"
            alt="community-emblem"
          />
        </div>
      </div>
    </section>
  );
};

export default Community;
