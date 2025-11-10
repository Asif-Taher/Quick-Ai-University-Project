import Aitools from "@/components/Home/Aitools";
import Hero from "@/components/Home/Hero";
import PaymentPricing from "@/components/Home/PaymentPricing";
import Testimonial from "@/components/Home/Testimonial";
import Footer from "@/components/Share/Footer";
import Nav from "@/components/Share/Nav";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Nav></Nav>
   <Hero></Hero>
   <Aitools ></Aitools>
   <Testimonial ></Testimonial>
   <PaymentPricing></PaymentPricing>
   <Footer></Footer>
   </>
  );
}

