import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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

  return (
    <div
      className={"home-title"}
      style={{
        fontSize: "234px",
        paddingRight: "12px",
        position: "absolute",
        left: "89%",
        width: "100%",
        color: "#F7F7F7",
      }}
    >
      NAŠ FILM
    </div>
    // <div
    //   className={"home-title"}
    //   style={{
    //     position: "absolute",
    //     left: "89%",
    //   }}
    // >
    //   <img
    //     className={"imedz"}
    //     src={nf}
    //     alt={""}
    //     style={{ width: "877px", height: "300px", paddingRight: "12px" }}
    //   />
    // </div>
  );
};

export default TitleWrap;
