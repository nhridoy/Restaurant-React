import "../../../assets/stylesheets/style.css";
import Locations from "./Locations";
const Banner = (props) => {
  // console.log(
  //   props.restaurant_info.restaurant[0].restaurant_info.deliverable_area
  // );
  const areas =
    props.restaurant_info.restaurant[0].restaurant_info.deliverable_area;

  return (
    <div>
      <div className="banner">
        <div className="banner-overlay">
          <div className="container">
            <img
              className="mt-1"
              src={props.restaurant_info.restaurant[0].restaurant_info.logo}
              alt={props.restaurant_info.restaurant[0].restaurant_info.name}
            />
            <h1 className="h1">
              {props.restaurant_info.restaurant[0].restaurant_info.name}
            </h1>
            <h3>
              {props.restaurant_info.restaurant[0].restaurant_info.address}
            </h3>
            <h4 className="mt-3">Delivery Zones</h4>
            <div className="d-grid gap-2 mt-3">
              <Locations locations={areas} />
            </div>
          </div>
        </div>
        <img
          className="banner-img"
          src="https://t3.ftcdn.net/jpg/03/35/51/06/360_F_335510693_HY7mLg3ARdLccKoXk3m66NLDpJRJh51p.jpg"
          alt={props.restaurant_info.restaurant[0].restaurant_info.name}
        />
      </div>
    </div>
  );
};
export default Banner;
