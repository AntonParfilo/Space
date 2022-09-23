import React, { useEffect, useRef, useState } from "react";
import s from "./technology.module.scss";
import { useDispatch } from "react-redux";
import { setMenu } from "../../store/menuSlice";
import launch_p from "../../img/image-launch-vehicle-portrait.jpg";
import launch_l from "../../img/image-launch-vehicle-landscape.jpg";
import spaceport_p from "../../img/image-spaceport-portrait.jpg";
import spaceport_l from "../../img/image-spaceport-landscape.jpg";
import space_p from "../../img/image-space-capsule-portrait.jpg";
import space_l from "../../img/image-space-capsule-landscape.jpg";

const Technology = () => {
  const dispatch = useDispatch();
  const [tech, setTech] = useState("launch");
  const buttons = useRef();
  const images = useRef();
  const contents = useRef();
  useEffect(() => {
    dispatch(setMenu("TECHNOLOGY"));
    buttons.current.children[0].classList.add(s.active_but);
  }, []);

  function setNav(el) {
    for (let but of buttons.current.children) {
      but.classList.remove(s.active_but);
    }
    el.target.classList.add(s.active_but);
    // animation text
    contents.current.querySelector("#"+tech+"_content").classList.add("hideToRight");
    contents.current.querySelector("#"+el.target.id+"_content").classList.add("showToLeft");
    setTimeout(() => {
      contents.current.querySelector("#"+el.target.id+"_content").classList.remove("hideToRight");
    }, 100);
    //animation images
    images.current.querySelector("#"+tech+"_image").classList.remove("showToScale");
    images.current.querySelector("#"+el.target.id+"_image").classList.add("showToScale");
    images.current.querySelector("#"+tech+"_image_landscape").classList.remove("showToScale");
    images.current.querySelector("#"+el.target.id+"_image_landscape").classList.add("showToScale");
    //set new local state
    setTech(el.target.id);
  }

  return (
    <section className={s.tech}>
      <div className={`${s.tech__container} container`}>
        <div className={s.tech__header}>
          <h3>SPACE LAUNCH 101</h3>
        </div>
        <div className={s.tech__content}>
          <div className={s.tech__nav} ref={buttons}>
            <button className="tech_but" id="launch" onClick={setNav}>
              1
            </button>
            <button className="tech_but" id="spaceport" onClick={setNav}>
              2
            </button>
            <button className="tech_but" id="space" onClick={setNav}>
              3
            </button>
          </div>
          <div className={s.tech__lc_wrapper} ref={contents}>
            <div className={`${s.tech__lc} showToLeft`} id="launch_content">
              <p>THE TERMINOLOGY…</p>
              <h1>Launch vehicle</h1>
              <p>
                A launch vehicle or carrier rocket is a rocket-propelled vehicle
                used to carry a payload from Earth's surface to space, usually
                to Earth orbit or beyond. Our WEB-X carrier rocket is the most
                powerful in operation. Standing 150 metres tall, it's quite an
                awe-inspiring sight on the launch pad!
              </p>
            </div>
            <div className={s.tech__lc} id="spaceport_content">
              <p>THE TERMINOLOGY…</p>
              <h1>Spaceport</h1>
              <p>
                A spaceport or cosmodrome is a site for launching (or receiving)
                spacecraft, by analogy to the seaport for ships or airport for
                aircraft. Based in the famous Cape Canaveral, our spaceport is
                ideally situated to take advantage of the Earth’s rotation for
                launch.
              </p>
            </div>
            <div className={s.tech__lc} id="space_content">
              <p>THE TERMINOLOGY…</p>
              <h1>Space capsule</h1>
              <p>
                Space capsule A space capsule is an often-crewed spacecraft that
                uses a blunt-body reentry capsule to reenter the Earth's
                atmosphere without wings. Our capsule is where you'll spend your
                time during the flight. It includes a space gym, cinema, and
                plenty of other activities to keep you entertained.
              </p>
            </div>
          </div>
          <div className={s.tech__rc} ref={images}>
            <div className={s.images_portrait}>
              <img
                className="showToScale"
                src={launch_p}
                alt="vechicle"
                id="launch_image"
              />
              <img
                src={spaceport_p}
                alt="spaceport"
                id="spaceport_image"
              />
              <img
                src={space_p}
                alt="space capsule"
                id="space_image"
              />
            </div>
            <div className={s.images_landscape}>
              <img
                className="showToScale"
                src={launch_l}
                alt="vechicle"
                id="launch_image_landscape"
              />
              <img
                src={spaceport_l}
                alt="spaceport"
                id="spaceport_image_landscape"
              />
              <img
                src={space_l}
                alt="space capsule"
                id="space_image_landscape"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
