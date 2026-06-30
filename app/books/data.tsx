import RIM1 from "@/public/Images/reintroducing-money.png";
import RIM3 from "@/public/Images/book_angle_3.png";
import RIM4 from "@/public/Images/book_angle_4.png";

export const BooksSlide = [
  { id: 1, image: RIM1.src },
  { id: 3, image: RIM3.src },
  { id: 4, image: RIM4.src },
];

// BOOKS TESTEMONIAL

interface TestimonialTypes {
  id: number;
  author: string;
  text: string;
}

export const TESTIMONIAL: TestimonialTypes[] = [
  {
    id: 1,
    author: "Chioma",
    text: "The simplicity, illustrations, and practical examples make complex money concepts easy to understand. This book completely changed my perspective on money.",
  },
  {
    id: 2,
    author: "Clement",
    text: "Reintroduction to Money is a powerful read. The Money Trinity framework alone shifts your mindset from simply earning money to truly understanding it.",
  },
  {
    id: 3,
    author: "Grace",
    text: "Practical, relatable, and thought-provoking. The book made me reflect deeply on my relationship with money and offered insights I had never considered before.",
  },
  {
    id: 4,
    author: "King Leo",
    text: "Only two chapters in, and my entire philosophy about money has changed. This book has transformed how I think about money, management, and financial growth.",
  },
  {
    id: 5,
    author: "Coach Ifeanyi James",
    text: "Only two chapters in, and my entire philosophy about money has changed. This book has transformed how I think about money, management, and financial growth.",
  },
];

//BOOK CONTENT

interface ContentTypes {
  title: string;
  text: string;
}

export const CONTENT: ContentTypes[] = [
  {
    title: "The P.A.A.R Framework",
    text: "This system reveals how your Philosophy shapes your altitude, your altitude influences your actions ultimately create your financial Results.",
  },
  {
    title: "The Money Trinity",
    text: "Most people only focus only on earning, but this book teaches the 3-stage system of financial growth: Earning, Managing and Multiplying.",
  },
  {
    title: "How to Build your Financial House",
    text: "Understand how different classes think, how money flows differently at each level, and why mindset affects financial outcomes more than people realise.",
  },
  {
    title: "The Law that Governs Money",
    text: "The hidden system that programmed your financial thinking long before you started earning money... You were already learning about money subconsciously. Learn the rules that are never exposed in the classroom... Because money responds to laws, not your emotions and wishes.",
  },
  {
    title: "How to Create your personal freedom/Retirement Plan",
    text: "A practical roadmap for long-term financial transformation using proven financial systems of advantage.",
  },
];
