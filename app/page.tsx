// Index Page

import ConverterSection from "@/components/ConverterSection";
import Countries from "@/components/Countries";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MissionStatement from "@/components/MissionStatement";
import MoreInfo from "@/components/MoreInfo";
import Security from "@/components/Security";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero />
      <ConverterSection />
      <MoreInfo />
      <Testimonials />
      <MissionStatement />
      <Security />
      <Countries />
    </>
  )
}
