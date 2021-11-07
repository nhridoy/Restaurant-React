import { Navbar, NavbarBrand } from "reactstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar color="dark" expand="md" dark>
        <div className="container">
          <NavbarBrand href="/">Restaurant</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
};

export default Navigation;
