const FooterMap = () => {
  const position = [51.505, -0.09];
  return (
    <div>
      <h2>Map</h2>
      <div>
        <iframe
          style={{ width: "100%" }}
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://www.openstreetmap.org/export/embed.html?bbox=89.50032591819763%2C23.180576192252477%2C89.51229929924013%2C23.186434498671094&amp;layer=mapnik"
        ></iframe>
      </div>
    </div>
  );
};

export default FooterMap;
