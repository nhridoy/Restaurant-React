const ModalInside = (props) => {
  console.log(props);
  return props.item.map((item, index) => {
    return (
      <div
        style={{ border: "1px solid #666", padding: "10px" }}
        className="col"
      >
        <div>
          <div>
            <h4 className="text-center">{item.name}</h4>
          </div>
          <div>
            <b>Category Name: </b>
            <span>{item.category_name}</span>
            <br />
            <b>Consumable: </b>
            <span>{item.consumable}</span>
            <br />
            <b>Cusine Name: </b>
            <span>{item.cuisine_name}</span>
            <br />
            <b>Price: </b>
            <span>{item.price}</span>
            <br />
          </div>
        </div>
      </div>
    );
  });
};
export default ModalInside;
