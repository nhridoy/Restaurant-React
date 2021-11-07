import { Component } from "react";
import restaurants from "../data/restaurants";
import Banner from "./Banner/Banner";
import Main from "./Main/Main";

class Restaurants extends Component {
  state = {
    restaurant: restaurants,
  };

  render() {
    return (
      <div>
        <Banner restaurant_info={this.state} />
        <div className="container">
          <Main restaurant_info={this.state} />
        </div>
      </div>
    );
  }
}
export default Restaurants;
