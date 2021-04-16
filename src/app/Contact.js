const Contact = ({ navbarHeight }) => {
  return (
    <div id="contact" style={{ minHeight: `calc(100vh - ${navbarHeight}px)` }}>
      <span
        id="contact-anchor"
        style={{ position: "absolute", top: -navbarHeight }}
      />
    </div>
  );
};

export default Contact;
