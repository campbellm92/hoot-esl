import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { games } from "./config/gamesConfig";
import { tools } from "./config/toolsConfig";
import { NavBar, Footer } from "@localcomponents";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Suspense fallback={<div>Loading... </div>}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            {games.map(({ link, component }) => {
              const Game = React.lazy(component);
              return <Route key={link} path={link} element={<Game />}></Route>;
            })}
            {tools.map(({ link, component }) => {
              const Tool = React.lazy(component);
              return <Route key={link} path={link} element={<Tool />}></Route>;
            })}
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
