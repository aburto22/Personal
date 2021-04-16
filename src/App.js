import "./App.scss";
import Navibar from "./app/Navibar";
import Home from "./app/Home";
import Projects from "./app/Projects";
import Contact from "./app/Contact";
import Container from "react-bootstrap/Container";
import React, { useState, useEffect } from "react";

function App() {
  const [navbarHeight, setNavbarHeight] = useState(56);

  useEffect(() => {
    const height = document.querySelector("#navbar").clientHeight;
    if (height !== navbarHeight) setNavbarHeight(height);
  });

  return (
    <>
      <Navibar />
      <Container id="container" style={{ marginTop: navbarHeight }}>
        <Home navbarHeight={navbarHeight} />
        <Projects navbarHeight={navbarHeight} />
        <Contact navbarHeight={navbarHeight} />
      </Container>
    </>
  );
}

export default App;
