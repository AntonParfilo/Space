import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setMenu } from "../../store/menuSlice";
import s from "./home.module.scss";

const Home = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMenu("HOME"));
  }, []);
  const navigate = useNavigate();
  function goToDestination(){
    navigate("/destination");
  }

  return (
    <section className={`${s.main}`} id="home">
      <div className={`${s.home} container`}>
        <div className={s.main__lc}>
          <h3>So, you want to travel to</h3>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className={s.main__rc}>
          <span className={s.main__rc_bg} onClick={goToDestination}>
            <span>EXPLORE</span>
          </span>
          <div className={s.main__rc_bg_hover}></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
