import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./HomePage.scss";

const TitleWrap = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".home-title", {
      scrollTrigger: {
        trigger: ".main-title",
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
      left: "-100%",
    });
  }, []);

  return <div className={"home-title"}>NAŠ FILM</div>;
};

export default TitleWrap;
