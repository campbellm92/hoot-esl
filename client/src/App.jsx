import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { games } from "./gamesConfig";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Suspense fallback={<div>Loading... </div>}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            {games.map(({ path, component }) => {
              const Game = React.lazy(component);
              return <Route key={path} path={path} element={<Game />}></Route>;
            })}
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
