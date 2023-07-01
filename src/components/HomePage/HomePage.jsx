import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import nf from "../../assets/nf.png";

const HomePage = () => {
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
        height: "87vh",
        width: "100vw",
        backgroundColor: "black",
        position: "relative", // Added position relative to the container div
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        id="testarossa"
        style={{
          display: "flex",
          width: "569px",
          height: "100vh",
          position: "absolute",
          top: "0%",
          left: "2.7%",
          transform: "translate(-3%, -30%)",
          zIndex: 10,
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
            backgroundColor: "#F0EEDE",
            fontSize: "29.5px",
            padding: "8px",
          }}
        >
          insert image
        </div>
      </div>
      <div
        style={{
          color: "whitesmoke",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          flexDirection: "column",
        }}
      >
        <img
          src={nf}
          alt={""}
          style={{
            width: "888px",
            paddingRight: "2%",
            zIndex: 2,
          }}
        />
        <div
          style={{
            width: "40%",
            fontSize: "23px",
            position: "absolute",
            top: "50%",
            right: "10%",
            textAlign: "center",
            backgroundColor: "#E9E9E9",
            color: "black",
            zIndex: 12,
          }}
        >
          `Naš Film` je vrhunska audio i video produkcijska kuća u Sarajevu.
          Nudimo različite mikrofone i opremu za snimanje zvuka, kao i najbolje
          kamere, objektive i dronove za snimanje visokokvalitetnih video
          materijala. Naš tim stručnjaka, uključujući reditelje i producente,
          pruža podršku u režiji i vođenju produkcije. Sa svjetski priznatim
          standardima za snimanje zvuka i videa, `Naš Film` je vaš pouzdan
          partner u audio i video produkciji.
        </div>
      </div>
    </div>
  );
};

export default HomePage;
