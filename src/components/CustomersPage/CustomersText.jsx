import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import "./CustomersText.css";
gsap.registerPlugin(ScrollTrigger);

const imageList = [
  { src: "https://source.unsplash.com/random/300x300?sig=123", alt: "" },
  { src: "https://source.unsplash.com/random/300x300?sig=124", alt: "" },
  { src: "https://source.unsplash.com/random/300x300?sig=125", alt: "" },
  { src: "https://source.unsplash.com/random/300x300?sig=126", alt: "" },
  { src: "https://source.unsplash.com/random/300x300?sig=127", alt: "" },
  { src: "https://source.unsplash.com/random/300x300?sig=128", alt: "" },
];
const imageList2 = [
  { src: "https://source.unsplash.com/random/300x300?sig=234", alt: "" },
  { src: "https://source.unsplash.com/random/300x300?sig=235", alt: "" },
  { src: "https://source.unsplash.com/random/300x300?sig=246", alt: "" },
  { src: "https://source.unsplash.com/random/300x300?sig=521", alt: "" },
  { src: "https://source.unsplash.com/random/300x300?sig=171", alt: "" },
  { src: "https://source.unsplash.com/random/300x300?sig=192", alt: "" },
];
const imageList3 = [
  { src: "https://source.unsplash.com/random/300x300?sig=225", alt: "" },
  { src: "https://source.unsplash.com/random/300x300?sig=883", alt: "" },
  { src: "https://source.unsplash.com/random/300x300?sig=192", alt: "" },
  { src: "https://source.unsplash.com/random/300x300?sig=198", alt: "" },
  { src: "https://source.unsplash.com/random/300x300?sig=196", alt: "" },
  { src: "https://source.unsplash.com/random/300x300?sig=111", alt: "" },
];

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
            : [w.scrollWidth * 0.5, section.offsetWidth * -0.5];
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
            |BHTELECOM|FACETV|BAJRA|RAIFFEISEN|BASSIVITY|BIMAL|
          </div>
        </section>
        <section className="demo-text">
          <ul className="wrapper text">
            {imageList.map((image, index) => (
              <li key={index}>
                <img className="the-img" src={image.src} alt={image.alt} />
              </li>
            ))}
          </ul>
        </section>
        <section className="demo-text">
          <ul className="wrapper text">
            {imageList2.map((image, index) => (
              <li key={index}>
                <img className="the-img" src={image.src} alt={image.alt} />
              </li>
            ))}
          </ul>
        </section>
        <section className="demo-text">
          <ul className="wrapper text">
            {imageList3.map((image, index) => (
              <li key={index}>
                <img className="the-img" src={image.src} alt={image.alt} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CustomersText;
