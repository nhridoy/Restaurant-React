import Body from "./Body/Pages/Body";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const MainComponent = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div style={{ flex: "1" }}>
        <Header />
        <Body />
      </div>
      <Footer />
    </div>
  );
};

export default MainComponent;
