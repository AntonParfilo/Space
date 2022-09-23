import React, { useEffect, useRef, useState } from "react";
import s from "./crew.module.scss";
import { useDispatch } from "react-redux";
import { setMenu } from "../../store/menuSlice";
import douglas from "../../img/image-douglas-hurley.png";
import mark from "../../img/image-mark-shuttleworth.png";
import victor from "../../img/image-victor-glover.png";
import ann from "../../img/image-anousheh-ansari.png";

const Crew = () => {
  const carouselButtons = useRef();
  const crew_content = useRef();
  const crew_images = useRef();

  const [carousel, setCarousel] = useState("douglas");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMenu("CREW"));
    carouselButtons.current.children[0].classList.add(s.active_button);
    crew_content.current.children[0].classList.add("showToScale");
    crew_images.current.children[0].classList.add("showToScale");
  }, []);

  function selectCarousel(el) {

    //set local state button
    setCarousel(el.target.id);
    //animation buttons
    for (let but of carouselButtons.current.children) {
      but.classList.remove(s.active_button);
    }
    el.target.classList.add(s.active_button);
    //animation text
    crew_content.current.querySelector("."+carousel+"_content").classList.remove("showToScale");
    crew_content.current.querySelector("."+el.target.id+"_content").classList.add("showToScale");
    //animation images
    crew_images.current.querySelector("."+carousel+"_image").classList.remove("showToScale");
    crew_images.current.querySelector("."+el.target.id+"_image").classList.add("showToScale");
  }

  return (
    <section className={s.crew}>
      <div className={`${s.container} container`}>
        <div className={s.crew__lc}>
          <h2>Meet your crew</h2>
          <div ref={crew_content}>
          <div className={`${s.crew__lc_content} douglas_content`}>
            <h3>Commander</h3>
            <h1>Douglas Hurley</h1>
            <p>
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>
          </div>
          <div className={`${s.crew__lc_content} mark_content`}>
            <h3>Mission Specialist</h3>
            <h1>Mark Shuttleworth</h1>
            <p>
              Mark Richard Shuttleworth is the founder and CEO of Canonical, the
              company behind the Linux-based Ubuntu operating system.
              Shuttleworth became the first South African to travel to space as
              a space tourist.
            </p>
          </div>
          <div className={`${s.crew__lc_content} victor_content`}>
            <h3>Pilot</h3>
            <h1>Victor Glover</h1>
            <p>
              Pilot on the first operational flight of the SpaceX Crew Dragon to
              the International Space Station. Glover is a commander in the U.S.
              Navy where he pilots an F/A-18.He was a crew member of Expedition
              64, and served as a station systems flight engineer.
            </p>
          </div>
          <div className={`${s.crew__lc_content} anousheh_content`}>
            <h3>Flight Engineer</h3>
            <h1>Anousheh Ansari</h1>
            <p>
              Anousheh Ansari is an Iranian American engineer and co-founder of
              Prodea Systems. Ansari was the fourth self-funded space tourist,
              the first self-funded woman to fly to the ISS, and the first
              Iranian in space.
            </p>
          </div>
          </div>
          <div className={s.crew__lc_buttons} ref={carouselButtons}>
            <span
                id="douglas"
              className="carousel_button douglas"
              onClick={selectCarousel}
            ></span>
            <span
                id="mark"
              className="carousel_button mark"
              onClick={selectCarousel}
            ></span>
            <span
                id="victor"
              className="carousel_button victor"
              onClick={selectCarousel}
            ></span>
            <span
                id="anousheh"
              className="carousel_button anousheh"
              onClick={selectCarousel}
            ></span>
          </div>
        </div>
        <div className={s.crew__rc} ref={crew_images}>
          <img src={douglas} className="douglas_image" alt="douglas"/>
          <img src={mark} className="mark_image" alt="mark"/>
          <img src={victor} className="victor_image" alt="vitya"/>
          <img src={ann} className="anousheh_image" alt="anousheh"/>
        </div>
      </div>
    </section>
  );
};

export default Crew;
