const FooterMap = () => {
  const position = [51.505, -0.09];
  return (
    <div>
      <h2>Map</h2>
      <div>
        {/* <iframe
          style={{ width: "100%" }}
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://www.openstreetmap.org/export/embed.html?bbox=89.50032591819763%2C23.180576192252477%2C89.51229929924013%2C23.186434498671094&amp;layer=mapnik"
        ></iframe> */}

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.095369855782!2d90.41096621441892!3d23.81520749221566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c164817819b3%3A0x6056fe3699c5fd4e!2sTechForing%20Ltd!5e0!3m2!1sen!2sbd!4v1640373927183!5m2!1sen!2sbd"
          width="600"
          height="200"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default FooterMap;
