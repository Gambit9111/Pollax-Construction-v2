import type { NextPage } from "next";

import AboutUs from "@/components/sections/landingPage/AboutUs";
import Transforming from "@/components/sections/landingPage/Transforming";
import ImageSliderMobile from "@/components/features/image-slider/mobile/ImageSliderMobile";
import ImageSliderDesktop from "@/components/features/image-slider/desktop/ImageSliderDesktop";
import ContactUs from "@/components/buttons/ContactUs/ContactUs";

const Home: NextPage = () => {
  return (
    <>
      {/* mobile screen */}
      <span className="xl:hidden">
        <AboutUs />
        <ImageSliderMobile />
        <ContactUs />
      </span>
      {/* desktop screen */}
      <span className="hidden border-b border-black xl:flex">
        <div className="w-1/2 border-r border-black">
          <Transforming />
          <AboutUs />
        </div>
        <div className="w-1/2">
          <ImageSliderDesktop />
          <ContactUs />
        </div>
      </span>
    </>
  );
};

export default Home;
