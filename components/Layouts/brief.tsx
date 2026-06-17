import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Brief: React.FC = () => {
  return (
    <section className="w-full h-80 py-20 bg-main">
      <div className="max-w-7xl flex flex-col gap-8 items-center mx-auto">
        <hr className="w-xs md:w-3xl border border-gray-500 " />
        <div className="max-w-4xl flex text-center text-xl">
          <p className="text-sm md:text-xl text-soft/60 leading-relaxed">
            Immanuel Zever, popularly known as "The Synergist," is an
            entrepreneur, business psychologist, author, and mentor helping
            entrepreneurs achieve sustainable growth through strategic insight
            and biblical principles
          </p>
        </div>
        <Button variant="default" size="lg" className="rounded-md" asChild>
          <Link href="/about">
            More on The Synergist
            <ArrowRight size={20} strokeWidth={2} />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Brief;
