import { useEffect, useState, useRef } from "react";
import { useScroll } from "~/utilities/hooks/scroll_provider";

export default function ImageRotation1({
  src,
  alt,
  height = "300px",
}: {
  src: string;
  alt: string;
  height?: string;
}) {
  const { scrollY } = useScroll();

  return (
    <img
      src={src}
      alt={alt}
      className="object-contain"
      style={{
        transform: `rotate(${scrollY}deg)`,
        height: height,
        transition: "transform 0.05s linear",
      }}
    />
  );
}
