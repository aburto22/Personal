const Projects = ({ navbarHeight }) => {
  return (
    <div
      id="projects"
      className="d-flex justify-content-center align-items-start"
      style={{ minHeight: `calc(100vh - ${navbarHeight}px)` }}
    >
      <span
        id="projects-anchor"
        style={{ position: "absolute", top: -navbarHeight }}
      />
      <h2 className="col-11 text-center py-3 title mt-3">Projects</h2>
    </div>
  );
};

export default Projects;
