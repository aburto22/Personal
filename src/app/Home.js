const Home = ({ navbarHeight }) => {
  return (
    <div
      id="home"
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: `calc(100vh - ${navbarHeight}px)` }}
    >
      <span
        id="home-anchor"
        style={{ position: "absolute", top: -navbarHeight }}
      />
      <div id="welcome-message" className="col-11 py-5 px-4 px-sm-5">
        <p className="h3 mb-3 text-center">Wecolme!</p>
        <p className="text-justify">
          Thanks for visiting my portfolio website. Feel free to take a look at
          the projects I have created to see if there is something you like. I
          have also left my contacts below so you can get in contact.
        </p>
        <p className="text-right">Cheers, Alejandro.</p>
      </div>
    </div>
  );
};

export default Home;
