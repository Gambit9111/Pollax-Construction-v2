"use client";
import { useState } from "react";
import Image from "next/image";

import "./features-image-slider-desktop.css";
import { images_array } from "../images";

type Props = {};

export default function ImageSliderDesktop({}: Props) {
  const [showSlide, setShowSlide] = useState(1);

  const toggleClass = (id: number) => {
    setShowSlide(id);
  };
  console.log(showSlide);

  return (
    <section className="features-image-slider-desktop p-8">
      <div className="slider-wrapper relative mx-auto">
        <div className="slider">
          {images_array.map((image) => {
            return (
              <Image
                key={image.id}
                priority
                loading="eager"
                className="myImage"
                id={`slide-${image.id}`}
                src={image.image}
                alt={`img${image.id}`}
              />
            );
          })}
        </div>
        <div className="slider-nav">
          {images_array.map((image) => {
            return (
              <a
                key={image.id}
                onClick={() => toggleClass(image.id)}
                href={`#slide-${image.id}`}
                className={showSlide === image.id ? "active" : ""}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
