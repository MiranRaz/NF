import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import "./CustomersText.css";
gsap.registerPlugin(ScrollTrigger);

const CustomersText = () => {
  useEffect(() => {
    const textSections = gsap.utils.toArray(".demo-text");
    const textWrapper = gsap.utils.toArray(".wrapper.text");

    const showDemo = () => {
      document.body.style.overflow = "auto";
      document.scrollingElement.scrollTo(0, 0);
      gsap.to(document.querySelector(".loader"), { autoAlpha: 0 });

      textSections.forEach((section, index) => {
        const w = textWrapper[index];
        const [x, xEnd] =
          index % 2 === 0 // Even-indexed sections
            ? [w.scrollWidth * -0.5, 0]
            : [w.scrollWidth * 0.3, section.offsetWidth * -0.5];
        gsap.fromTo(
          w,
          { x },
          {
            x: xEnd,
            scrollTrigger: {
              trigger: section,
              scrub: 1,
            },
          }
        );
      });
    };

    showDemo();
  }, []);

  return (
    <div>
      <div className="demo-wrapper">
        <section className="demo-text">
          <div className="wrapper text">
            |BINGO|ARGETA|BIMAL|BAJRA|BASSIVITY|RAIFFEISEN|FACETV
          </div>
        </section>
        <section className="demo-text">
          <div className="wrapper text">
            |BHTELECOM|FACETV|BAJRA|RAIFFEISEN|BASSIVITY|BIMAL|
          </div>
        </section>
        <section className="demo-text">
          <div className="wrapper text">
            |RAIFFEISEN|BAJRA|BINGO|BHTELECOM|ARGETA|FACETV|BAJRA|
          </div>
        </section>
      </div>
    </div>
  );
};

export default CustomersText;
