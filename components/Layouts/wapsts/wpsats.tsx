"use client";
import { Review } from "./data";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const Wpsats = () => {
  return (
    <section className="w-full min-h-screen bg-black py-6">
      <div className="container max-w-7xl mx-auto">
        <div className="px-6 font-syne mb-3">
          <h2 className="text-primary text-3xl md:text-5xl mb-5">
            What are people saying about Immanuel Zever
          </h2>
          <p className="max-w-2xl text-light/70 mt-3">
            From entrepreneurs and executives to professionals and aspiring
            leaders, hear what people have to say about the impact of The his
            mentorship, and training.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-5 px-5 ">
          {Review.map((review) => (
            <motion.div
              key={review.author}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full flex flex-col gap-3 text-white py-3 px-3 border border-primary/20"
            >
              <div className="h-1 w-16 bg-primary rounded-full mb-5" />
              <Quote
                className="text-primary mb-4"
                size={24}
                strokeWidth={1.5}
              />

              <div className="space-y-4">
                {Array.isArray(review.text) ? (
                  review.text.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base font-mont mb-5 leading-normal min-h-fit"
                    >
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-base font-mont mb-5 leading-normal min-h-fit">
                    {review.text}
                  </p>
                )}
              </div>

              <div className=" border-zinc-800 pt-4">
                <h4 className="font-semibold text-sm md:text-base text-primary">
                  {review.author}
                </h4>
                {review.role && (
                  <p className="text-sm text-light/90 ">{review.role}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wpsats;
