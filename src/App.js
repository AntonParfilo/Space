import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router";
import "./App.scss";
import "./adaptiveValue.scss";
import Header from "./components/header/header";
import Home from "./components/main/home";
import Destination from "./components/destination/destination";
import Crew from "./components/crew/crew";
import Technology from "./components/technology/technology";
import { useTransition, animated } from "react-spring";

function App() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
  });
  return transitions((props, item) => (
    <div className="App">
      <Header />
        <animated.div style={props} className="animated_div">
          <Routes location={item}>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
          </Routes>
        </animated.div>
    </div>
  ));
}

export default App;
