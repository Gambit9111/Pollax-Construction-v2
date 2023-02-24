import React from "react";
import AboutUsButton from "@/components/buttons/aboutUs/AboutUsButton";

type Props = {};

export default function AboutUs({}: Props) {
  return (
    <>
      {/* mobile */}
      <section className="relative mx-auto flex w-full flex-col bg-my-white px-4 pt-9 pb-6 xl:hidden">
        <h3 className="z-10 font-medium italic text-my-gray3">- About Us</h3>
        <h1 className="z-10 pr-20 text-4xl font-extrabold leading-8 412:pr-24">
          Our mission is to construct a better future
        </h1>
        <p className="z-10 pt-4 pr-8 pb-4 text-sm font-light 412:pr-20">
          We are the premier construction company with a simple purpose: to
          construct a better future. The company is known for shaping skylines
          and delivering iconic projects around the world
        </p>
        <span className="absolute top-0 right-0 z-0 h-full w-3/4 border-b border-black bg-my-skin" />
        <AboutUsButton />
      </section>
      {/* desktop */}
      <section className="hidden min-h-[55vh] flex-col justify-between pl-8 pt-8 xl:flex">
        <span>
          <h3 className="pb-4 text-lg font-medium italic text-my-gray3 2560:text-xl">
            - About Us
          </h3>
          <h1 className="mr-48 text-6xl font-extrabold 1440:mr-52 2xl:mr-[20rem] 1920:mr-[30rem] 2560:mr-[44rem] 2560:text-7xl">
            Our mission is to construct a better future
          </h1>
        </span>
        <span className="flex">
          <p className="w-1/2 text-sm text-my-gray4 1920:pr-12 2560:text-base">
            We are the premier construction company with a simple purpose: to
            construct a better future. The company is known for shaping skylines
            and delivering iconic projects around the world
          </p>
          <AboutUsButton />
        </span>
      </section>
    </>
  );
}
