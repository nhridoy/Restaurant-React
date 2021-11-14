import { Card, CardBody, CardText, CardTitle, CardSubtitle } from "reactstrap";
const MenuCard = (props) => {
  //   console.log(props.menu_items);
  return props.menu_items.map((item, index) => {
    return (
      <div key={item.id} className="col-md-3 col-sm-4 mb-3">
        <Card
          color="light"
          className="h-100"
          style={{ cursor: "pointer" }}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <CardBody>
            <CardTitle tag="h5">{item.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Ingredients
            </CardSubtitle>
            <CardText>{item.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  });
};
export default MenuCard;
