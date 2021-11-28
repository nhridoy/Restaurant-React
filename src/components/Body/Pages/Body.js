import { Route, Routes } from "react-router";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Restaurants from "./Home/Restaurants";

const Body = () => {
  return (
    <div style={{ paddingTop: "55px" }}>
      <Routes>
        <Route path="/" exact element={<Restaurants />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Body;
