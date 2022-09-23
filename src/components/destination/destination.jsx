import React, { useEffect, useRef } from "react";
import s from "./destination.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "../../store/menuSlice";
import { setMenuDestination } from "../../store/destinationSlice";
import moon from "../../img/image-moon.png";
import mars from "../../img/image-mars.png";
import titan from "../../img/image-titan.png";
import europa from "../../img/image-europa.png";

const Destination = () => {
  const dispatch = useDispatch();
  const menu_items = useRef();
  const images = useRef();
  const titles = useRef();
  const desc = useRef();

  let stateMenu = useSelector((state) => state.destination);
  useEffect(() => {
    dispatch(setMenu("DESTINATION"));
    dispatch(setMenuDestination("MOON"));
    // Menu
    for (let el of menu_items.current.children) {
      if (el.innerHTML === stateMenu) el.classList.add("active_menu");
      else el.classList.remove("active_menu");
      images.current.querySelector("#MOON").classList.add(s.showToLeft);
      titles.current.querySelector("#MOON_title").classList.add(s.showToRight);
      desc.current.querySelector("#MOON_desc").classList.add(s.showToScale);
    }
  }, []);
  useEffect(() => {
    for (let el of menu_items.current.children) {
      if (el.innerHTML === stateMenu) el.classList.add("active_menu");
      else el.classList.remove("active_menu");
    }
  }, [stateMenu]);

  const setPlanet = (el) => {
    // aniamation planets
    images.current.querySelector("#"+stateMenu).classList.remove(s.showToLeft);
    images.current.querySelector("#"+stateMenu).classList.add(s.hideToRight);
    setTimeout(() => {
      images.current.querySelector("#"+stateMenu).classList.remove(s.hideToRight);
    }, 2000);
    images.current.querySelector("#"+el.target.innerHTML).classList.add(s.showToLeft);
    // animation planet name
    titles.current.querySelector("#"+stateMenu + "_title").classList.remove(s.showToRight);
    titles.current.querySelector("#"+stateMenu + "_title").classList.add(s.hideToLeft);
    setTimeout(() => {
      titles.current.querySelector("#"+stateMenu + "_title").classList.remove(s.hideToLeft);
    }, 2000);
    titles.current.querySelector("#"+el.target.innerHTML + "_title").classList.add(s.showToRight);
    // animation planet description
    desc.current.querySelector("#"+stateMenu+"_desc").classList.remove(s.showToScale);
    setTimeout(()=>{
      desc.current.querySelector("#"+el.target.innerHTML+"_desc").classList.add(s.showToScale);
    },500);

    dispatch(setMenuDestination(el.target.innerHTML));
  };

  return (
    <section className={`${s.destination}`}>
      <div className={`${s.destination__content} container`}>
        <div className={s.destination__lc} ref={images}>
          <h2>Pick your destination</h2>
          <img
            src={moon}
            alt="Moon"
            className="planets"
            id="MOON"
          ></img>
          <img
            src={mars}
            alt="Mars"
            className="planets"
            id="MARS"
          ></img>
          <img
            src={europa}
            alt="Europa"
            className="planets"
            id="EUROPA"
          ></img>
          <img
            src={titan}
            alt="Titan"
            className="planets"
            id="TITAN"
          ></img>
        </div>
        <div className={s.destination__rc}>
          <div className={s.destination__menu}>
            <ul ref={menu_items}>
              <li className="destination__menu_item" onClick={setPlanet}>
                MOON
              </li>
              <li className="destination__menu_item" onClick={setPlanet}>
                MARS
              </li>
              <li className="destination__menu_item" onClick={setPlanet}>
                EUROPA
              </li>
              <li className="destination__menu_item" onClick={setPlanet}>
                TITAN
              </li>
            </ul>
          </div>
          <div className={s.planet_name} ref={titles}>
            <h2 id="MOON_title">MOON</h2>
            <h2 id="MARS_title">MARS</h2>
            <h2 id="EUROPA_title">EUROPA</h2>
            <h2 id="TITAN_title">TITAN</h2>
          </div>
          <div className={s.planet_desc_wrap} ref={desc}>
            <div className={s.planet_desc} id="MOON_desc">
              <p>
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </p>
              <div className={s.destination__ch}>
                <div className={s.destination__km}>
                  <span>AVG. DISTANCE</span>
                  <p>384,400 km</p>
                </div>
                <div className={s.destination__days}>
                  <span>Est. travel time</span>
                  <p>3 days</p>
                </div>
              </div>
            </div>
            <div className={s.planet_desc} id="MARS_desc">
              <p>
                Don’t forget to pack your hiking boots. You’ll need them to
                tackle Olympus Mons, the tallest planetary mountain in our solar
                system. It’s two and a half times the size of Everest!
              </p>
              <div className={s.destination__ch}>
                <div className={s.destination__km}>
                  <span>AVG. DISTANCE</span>
                  <p>225 mil. km</p>
                </div>
                <div className={s.destination__days}>
                  <span>Est. travel time</span>
                  <p>9 months</p>
                </div>
              </div>
            </div>
            <div className={s.planet_desc} id="EUROPA_desc">
              <p>
                The smallest of the four Galilean moons orbiting Jupiter, Europa
                is a winter lover’s dream. With an icy surface, it’s perfect for
                a bit of ice skating, curling, hockey, or simple relaxation in
                your snug wintery cabin.
              </p>
              <div className={s.destination__ch}>
                <div className={s.destination__km}>
                  <span>AVG. DISTANCE</span>
                  <p>628 mil. km</p>
                </div>
                <div className={s.destination__days}>
                  <span>Est. travel time</span>
                  <p>3 years</p>
                </div>
              </div>
            </div>
            <div className={s.planet_desc} id="TITAN_desc">
              <p>
                The only moon known to have a dense atmosphere other than Earth,
                Titan is a home away from home (just a few hundred degrees
                colder!). As a bonus, you get striking views of the Rings of
                Saturn.
              </p>
              <div className={s.destination__ch}>
                <div className={s.destination__km}>
                  <span>AVG. DISTANCE</span>
                  <p>1.6 bil. km</p>
                </div>
                <div className={s.destination__days}>
                  <span>Est. travel time</span>
                  <p>7 years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
