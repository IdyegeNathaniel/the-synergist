import Books from "@/components/Layouts/books";
import Brief from "@/components/Layouts/brief";
import Community from "@/components/Layouts/community";
import Hero from "@/components/Layouts/hero";
import Wpsats from "@/components/Layouts/wapsts/wpsats";

export default function Home() {
  return (
    <>
      <Hero />
      <Brief />
      <Books /> 
      <Community />
      <Wpsats />
    </>    
  );
}
