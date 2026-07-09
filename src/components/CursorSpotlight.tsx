"use client";
import { FC, useEffect, useRef } from "react";

const CursorSpotlight: FC = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>();
  const positionRef = useRef<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };

      if (frameRef.current) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(() => {
        const { x, y } = positionRef.current;

        if (spotlightRef.current) {
          spotlightRef.current.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.22), transparent 80%)`;
        }

        frameRef.current = undefined;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background: "radial-gradient(600px at 0px 0px, rgba(29, 78, 216, 0.22), transparent 80%)",
      }}
    ></div>
  );
};

export default CursorSpotlight;

interface Position {
  x: number;
  y: number;
}
