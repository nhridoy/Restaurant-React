import FooterMap from "./FooterMap";
import FooterMenu from "./FooterMenu";

const Footer = () => {
  return (
    <div className="bg-dark text-white">
      <div className="container">
        <div className="row mx-0 py-3">
          <div className="col">
            <FooterMap />
          </div>
          <div className="col">
            <FooterMenu />
          </div>
        </div>
      </div>
      <div className="bg-black text-center">
        <p className="m-0 text-uppercase p-3">
          &copy; All rights reserved 2020 | Nahidujjaman hridoy
        </p>
      </div>
    </div>
  );
};

export default Footer;
