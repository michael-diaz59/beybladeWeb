import { useEffect, useState, useRef } from "react";

export default function ImageRotation1({
  src,
  alt,
  height = "300px",
}: {
  src: string;
  alt: string;
  height?: string;
}) {
  const [rotation, setRotation] = useState(0);
  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // busca el <main> en el DOM
    const el = document.querySelector("main");
    if (!el) return;

    const handleScroll = () => {
      setRotation(el.scrollTop * 0.5);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <img
      src={src}
      alt={alt}
      className="object-contain"
      style={{
        transform: `rotate(${rotation}deg)`,
        height: height,
        transition: "transform 0.05s linear",
      }}
    />
  );
}
