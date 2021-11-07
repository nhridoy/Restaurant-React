const Locations = (props) => {
  return props.locations.map((item, index) => {
    return (
      <div key={item.id}>
        <p className="border border-white p-1 rounded cursor-pointer">
          {item.name}
        </p>
      </div>
    );
  });
};
export default Locations;
