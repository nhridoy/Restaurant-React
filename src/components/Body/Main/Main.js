import MenuCard from "./MenuCard";

const Main = (props) => {
  //   console.log(props.restaurant_info.restaurant[0].categorys);
  //   console.log(props.restaurant_info.restaurant[0]);
  return props.restaurant_info.restaurant[0].categorys.map((item, index) => {
    return (
      <div key={item.id}>
        <h2 className="text-center font-monospace text-uppercase mt-3">
          {item.name}
        </h2>
        <div className="text-center">
          <div className="grid gap-2">
            <MenuCard menu_items={item.menu_items} />
          </div>
        </div>
      </div>
    );
  });
};
export default Main;
