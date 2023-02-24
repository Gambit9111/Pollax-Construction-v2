"use client";
import { useRef } from "react";

import "./navigation-header-hamburger-menu.css";

type Props = {};

export default function HamburgerMenu({}: Props) {
  const hamburgerRef = useRef<SVGSVGElement>(null);

  return (
    <span
      className="navigation-header-hamburger-menu"
      onClick={() => {
        if (hamburgerRef.current) {
          hamburgerRef.current.classList.toggle("active");
        }
      }}
    >
      <svg
        ref={hamburgerRef}
        className="ham hamRotate ham4"
        viewBox="0 0 100 100"
        width="40"
      >
        <path
          className="line top"
          d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
        />
        <path className="line middle" d="m 70,50 h -40" />
        <path
          className="line bottom"
          d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
        />
      </svg>
    </span>
  );
}
