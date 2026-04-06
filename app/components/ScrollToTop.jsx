// components/ScrollToTop.js
"use client"; // Required for Next.js App Router (client-side behavior)

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            background: "#31f300",
            color: "#000000",
            border: "none",
            borderRadius: "50%",
            height: "50px",
            width: "50px",
            padding: "0 1px 30px 0",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
            fontSize: "38px",
            zIndex: 1000,
          }}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
}
