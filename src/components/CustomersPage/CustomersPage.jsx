import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomersText from "./CustomersText.jsx";

const CustomersPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const testarossaHeight = 378; // Height of the testarossa div

  const calculateImageItemTop = () => {
    const windowHeight = window.innerHeight;
    const maxScroll = windowHeight - testarossaHeight;
    const scrollPercentage = Math.min(1, scrollPosition / maxScroll);
    return testarossaHeight - scrollPercentage * testarossaHeight;
  };

  const imageItemTop = calculateImageItemTop();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#imageitem", {
      top: () => {
        const windowHeight = window.innerHeight;
        const maxScroll = windowHeight - testarossaHeight;
        const scrollPercentage = Math.min(1, scrollPosition / maxScroll);
        return testarossaHeight - scrollPercentage * testarossaHeight;
      },
      scrollTrigger: {
        trigger: "#testarossa",
        start: "top top",
        end: "bottom top",
        scrub: 2,
      },
    });
  }, [scrollPosition]);

  return (
    <div
      style={{
        height: "85vh",
        width: "100%",
        backgroundColor: "gray",
      }}
    >
      <div
        id="testarossa"
        style={{
          width: "569px",
          height: "100vh",
          position: "absolute",
          top: "44%",
          right: "5%",
          transform: "translate(-3%, -30%)",
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        <div
          id="imageitem"
          style={{
            width: "569px",
            height: "466px",
            position: "relative",
            top: `${imageItemTop}px`,
            backgroundColor: "beige",
          }}
        >
          image placeholder
        </div>
      </div>
      <CustomersText />
    </div>
  );
};

export default CustomersPage;
