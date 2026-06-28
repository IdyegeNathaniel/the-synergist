"use client"

import Image from "next/image";
import Book_Cover from "@/public/Images/reintroducing-money.png";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Books: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-main py-20 text-light overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-5 items-center mx-auto py-4 px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <Image
            src={Book_Cover}
            className="w-72 md:w-96 object-contain"
            alt="book-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:w-1/2 flex flex-col gap-3"
        >
          <h2 className="text-lg md:text-2xl text-primary font-semibold leading-relaxed ">
            REINTRODUCTION TO MONEY
          </h2>
          <p className="text-sm leading-relaxed text-justify text-soft/60 mb-5">
            Reintroduction to Money by Immanuel Zever is a practical personal
            finance and wealth-building book that teaches how to master money
            through mindset, strategy, and structure.
            <br />
            <br />
            It reveals that financial struggles are driven by money mindset,
            habits, and lack of financial literacy, not just low income. The
            book introduces powerful frameworks like the P.A.A.R system
            (Philosophy, Attitude, Actions, Results), the 8 Laws of Money, and
            the Money Triangle (Earn, Manage, Multiply) to help readers build
            sustainable wealth and financial freedom.
            <br />
            <br />
            With clear strategies on value creation, money management, and
            income growth, this book equips readers to move from earning money
            to multiplying it through systems and investments.
          </p>

          <Button variant="default" size="lg" className="rounded-md" asChild>
            <Link href="/books">
              More about the book
              <ArrowRight />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Books;
