import type { StaticImageData } from "next/image";

import img1 from "../../../../public/ImageSliders/one/img1.webp";
import img2 from "../../../../public/ImageSliders/one/img2.webp";
import img3 from "../../../../public/ImageSliders/one/img3.webp";
import img4 from "../../../../public/ImageSliders/one/img4.webp";
import img5 from "../../../../public/ImageSliders/one/img5.webp";
import img6 from "../../../../public/ImageSliders/one/img6.webp";

type images = {
    id: number;
    image: StaticImageData;
    alt: string;
}

export const images_array: images[] = [
    {
        id: 1,
        image: img1,
        alt: "Image 1"
    }, 
    {
        id: 2,
        image: img2,
        alt: "Image 2"
    },
    {
        id: 3,
        image: img3,
        alt: "Image 3"
    },
    {
        id: 4,
        image: img4,
        alt: "Image 4"
    },
    {
        id: 5,
        image: img5,
        alt: "Image 5"
    },
    {
        id: 6,
        image: img6,
        alt: "Image 6"
    }
]