"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMouse);
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouse);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <motion.div
      className="fixed pointer-events-none z-[9998] w-64 h-64 rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(76,175,80,0.08) 0%, rgba(76,175,80,0) 70%)",
      }}
      animate={{
        x: position.x - 128,
        y: position.y - 128,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", damping: 30, stiffness: 200 }}
    />
  );
}
