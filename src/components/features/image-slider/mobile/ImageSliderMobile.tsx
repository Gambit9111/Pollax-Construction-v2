"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import "./features-image-slider-mobile.css";
import { images_array } from "../images";

type Props = {};

export default function ImageSliderMobile({}: Props) {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWidth(carousel.current!.scrollWidth - carousel.current!.offsetWidth);
  }, []);

  return (
    <motion.div
      ref={carousel}
      className="features-image-slider-mobile mx-auto w-full"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="inner-carousel"
      >
        {images_array.map((image) => (
          <motion.div key={image.id} className="item pt-4 pl-4">
            <Image
              quality={100}
              priority
              loading="eager"
              className="myImage border-b border-l border-my-black"
              src={image.image}
              alt={image.alt}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
