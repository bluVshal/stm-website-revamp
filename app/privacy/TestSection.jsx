"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const items = [
  { image: "/img1.jpg", text: "Strategy begins with insight." },
  { image: "/img2.jpg", text: "Design creates connection." },
  { image: "/img3.jpg", text: "Technology powers execution." },
  { image: "/img4.jpg", text: "Data drives optimization." },
];

export default function ResponsiveScrollSection() {
  const ref = useRef(null);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // 👇 Prevent useScroll before hydration
  const { scrollYProgress } = useScroll(
    isMounted
      ? {
          target: ref,
          offset: ["start start", "end end"],
        }
      : {}
  );

  // MOBILE
  if (!isDesktop) {
    return (
      <section className="bg-[#F6F8F7] px-6 py-16 space-y-16">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col gap-6">
            <img src={item.image} className="w-full rounded-2xl shadow-lg" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Step {i + 1}</h2>
              <p className="text-gray-600">{item.text}</p>
            </div>
          </div>
        ))}
      </section>
    );
  }

  // DESKTOP
  return (
    <section ref={ref} className="relative h-[400vh] bg-[#F6F8F7]">
      <div className="sticky top-0 h-screen flex overflow-hidden">

        {/* IMAGES */}
        <div className="w-1/2 flex items-center justify-center relative">
          {items.map((item, i) => {
            const start = i / items.length;
            const end = (i + 1) / items.length;

            const y = useTransform(scrollYProgress, [start, end], [100, -100]);
            const opacity = useTransform(
              scrollYProgress,
              [start, (start + end) / 2, end],
              [0, 1, 0]
            );

            return (
              <motion.img
                key={i}
                src={item.image}
                style={{ y, opacity }}
                className="absolute w-[70%] rounded-2xl shadow-xl"
              />
            );
          })}
        </div>

        {/* TEXT */}
        <div className="w-1/2 flex items-center justify-center relative px-12">
          {items.map((item, i) => {
            const start = i / items.length;
            const end = (i + 1) / items.length;

            const y = useTransform(scrollYProgress, [start, end], [-100, 100]);
            const opacity = useTransform(
              scrollYProgress,
              [start, (start + end) / 2, end],
              [0, 1, 0]
            );

            return (
              <motion.div
                key={i}
                style={{ y, opacity }}
                className="absolute text-center max-w-md"
              >
                <h2 className="text-4xl font-bold mb-4">
                  Step {i + 1}
                </h2>
                <p>{item.text}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}