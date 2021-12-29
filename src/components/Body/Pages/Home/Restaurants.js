import { Component } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import restaurants from "../../../../data/restaurants";
import Banner from "././Banner/Banner";
import Main from "./Main/Main";
import MenuModal from "./Main/MenuModal";

class Restaurants extends Component {
  state = {
    restaurant: restaurants,
    selected: null,
    isModalOpened: false,
  };
  selectedRestaurant = (dish) => {
    this.setState({ selected: dish, isModalOpened: !this.state.isModalOpened });
    // console.log(this.state.selected);
  };
  isOpened = () => {
    this.setState({ isModalOpened: !this.state.isModalOpened });
    // console.log(this.state.selected);
  };

  render() {
    document.title = "Nandos";
    return (
      <div>
        <Banner restaurant_info={this.state} />
        <div className="container">
          <Main
            restaurant_info={this.state}
            selectedRestaurant={this.selectedRestaurant}
          />
        </div>

        <MenuModal
          subItems={this.state.selected}
          isOpen={this.state.isModalOpened}
          isOpened={this.isOpened}
        />
      </div>
    );
  }
}
export default Restaurants;
