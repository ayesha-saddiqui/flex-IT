/* eslint-disable react/prop-types */
import { HeroSection } from "../components/HeroSection";
import { Services } from "../components/Services";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Portfolio } from "../components/Portfolio";
import { Pricing } from "../components/Pricing";
import { Testimonial } from "../components/Testimonial";
import { Counter } from "../components/Counter";
import { Brand } from "../components/Brand";
import { Team } from "../components/Team";
import { Faq } from "../components/Faq";
import { Discuss } from "../components/Discuss";
import { Blog } from "../components/Blog";
import { Contact } from "../components/Contact";
import { ScrollUp } from "../components/ScrollUp";
import { useRef } from "react";

export const Home = ({ layoutRef }) => {
  const contactRef = useRef();
  const serviceRef = useRef();
  return (
    <>
      <HeroSection contactRef={contactRef} serviceRef={serviceRef} />
      <Services serviceRef={serviceRef} />
      <WhyChooseUs />
      <Portfolio />
      <Pricing layoutRef={layoutRef} />
      <Testimonial />
      <Counter />
      <Brand />
      <Team />
      <Faq />
      <Discuss />
      <Blog />
      <Contact contactRef={contactRef} />
      <ScrollUp />
    </>
  );
};
