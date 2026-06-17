import RIM1 from "@/public/Images/reintroducing-money.png"
import RIM3 from "@/public/Images/book_angle_3.png"
import RIM4 from "@/public/Images/book_angle_4.png"

export const BooksSlide = [
  {id: 1, image: RIM1.src},
  {id: 3, image: RIM3.src},
  {id: 4, image: RIM4.src},
]


// BOOKS TESTEMONIAL

interface TestimonialTypes{
    id: number;
    author: string;
    text: string;
}

export const TESTIMONIAL: TestimonialTypes[] = [
    {
        id: 1,
        author: "john Doe",
        text: "Finally, a vase that matches the beauty of fresh flowers. Absolutely worth it.",
    },
    {
        id: 2,
        author: "john Doe",
        text: "Finally, a vase that matches the beauty of fresh flowers. Absolutely worth it.",
    },
    {
        id: 3,
        author: "john Doe",
        text: "Finally, a vase that matches the beauty of fresh flowers. Absolutely worth it.",
    },
    {
        id: 4,
        author: "john Doe",
        text: "Finally, a vase that matches the beauty of fresh flowers. Absolutely worth it.",
    },
]