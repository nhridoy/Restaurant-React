import { Component } from "react";
import restaurants from "../../data/restaurants";
import Banner from "./Banner/Banner";
import Main from "./Main/Main";
import MenuModal from "./Main/MenuModal";

class Restaurants extends Component {
  state = {
    restaurant: restaurants,
    selected: null,
  };
  selectedRestaurant = (dish) => {
    this.setState({ selected: dish });
    // console.log(this.state.selected);
  };

  render() {
    return (
      <div>
        <Banner restaurant_info={this.state} />
        <div className="container">
          <Main
            restaurant_info={this.state}
            selectedRestaurant={this.selectedRestaurant}
          />
        </div>
        <MenuModal subItems={this.state.selected} />
      </div>
    );
  }
}
export default Restaurants;
