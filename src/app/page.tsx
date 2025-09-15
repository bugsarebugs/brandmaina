import FirstSection from "@/components/FirstSection";
import Footer from "@/components/Footer";
import News from "@/components/News";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <News/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <Footer/>
    </div>
  );
}
