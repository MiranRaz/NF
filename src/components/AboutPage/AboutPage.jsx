import main_right_image from "../../assets/main_right_image.jpg";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutPage.scss";

const AboutPage = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".image-block", {
      scrollTrigger: {
        trigger: ".image-block",
        start: "top top",
        end: "bottom top",
        scrub: 2,
      },
      top: "55%",
    });
  }, []);

  return (
    <div className="wrapper">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="wrapper-responsive">
          <div className="image-block-wrapper">
            <div className="image-block"></div>
          </div>
          <div className="the-image-block">
            <img
              src={main_right_image}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="about-description">
            Naša filmska produkcija, `Naš Film`, je vrhunska audio i video
            produkcijska kuća sa sjedištem u Sarajevu. Sa ponosom nudimo široku
            paletu audio i video opreme kako bismo pružili najkvalitetnije
            usluge našim klijentima.
            <br />
            <br /> U našem asortimanu možete pronaći različite vrste mikrofona
            koji odgovaraju svakom specifičnom zahtjevu snimanja zvuka. Bez
            obzira da li je u pitanju snimanje dijaloga, muzičkih instrumenata,
            vokala ili ambijentalnih zvukova, imamo mikrofone koji će
            zadovoljiti vaše potrebe. Bez obzira da li želite dodati dubinu i
            prostornost zvuku ili da postignete određeni audio efekat, naš tim
            će vam omogućiti da postignete željene rezultate.
            <br />
            <br /> Kada je u pitanju video produkcija, posjedujemo najbolje
            kamere koje vam omogućavaju snimanje visokokvalitetnih video
            materijala. Naša kolekcija objektiva vam pruža različite perspektive
            i mogućnosti za snimanje, kako biste postigli željeni vizualni
            efekat. Također, koristimo i moderne dronove za snimanje iz zraka,
            čime dodatno obogatimo vaše video projekte spektakularnim pogledima
            i perspektivama. Naš tim stručnjaka uključuje i iskusne reditelje i
            producente koji su spremni da vam pomognu u ostvarenju vaše vizije.
            <br />
            <br />
            Bez obzira da li vam je potrebna pomoć u režiranju vašeg filma ili u
            organizaciji i vođenju produkcije, naš tim će vam pružiti podršku i
            stručno vođenje tokom cijelog procesa. Uz vrhunsko snimanje zvuka na
            svjetski priznatim standardima, miks i master tona na
            najkvalitetnijim zvučnicima, kao i bogat asortiman audio i video
            opreme, `Naš Film` je vaš pouzdan partner za sve vaše potrebe u
            oblasti audio i video produkcije.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
