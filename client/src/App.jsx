import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { games } from "./gamesConfig";
import { NavBar, Footer } from "@localcomponents";
import Home from "./pages/Home";

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
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
