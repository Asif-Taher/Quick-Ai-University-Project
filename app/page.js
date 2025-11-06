import Aitools from "@/components/Home/Aitools";
import Hero from "@/components/Home/Hero";
import Testimonial from "@/components/Home/Testimonial";
import Nav from "@/components/Share/Nav";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Nav></Nav>
   <Hero></Hero>
   <Aitools ></Aitools>
   <Testimonial ></Testimonial>
   </>
  );
}

