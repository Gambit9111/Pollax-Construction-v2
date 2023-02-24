import React from "react";
import Image from "next/image";

import squareImage from "../../../../public/landingPage/squareimg.webp";

type Props = {};

export default function Transforming({}: Props) {
  return (
    <section className="flex min-h-[22rem] border-b border-black">
      <div className="flex min-h-full w-1/2 items-center justify-center border-r border-black p-8">
        <Image
          src={squareImage}
          alt="square"
          className="mx-auto aspect-square h-full w-full object-cover"
        />
      </div>
      <div className="flex min-h-full w-1/2 items-end bg-my-skin pb-8 pl-8 pr-16">
        <p className="wide:text-xl text-lg uppercase leading-5">
          Transforming skylines and creating icons
        </p>
      </div>
    </section>
  );
}
